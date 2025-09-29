// theme-css-cleaner.js
import fs from "fs";
import postcss from "postcss";

function collectVarsFromRoot(root) {
  const vars = {};
  root.walkRules(rule => {
    const themeMatch = rule.selector.match(/^\.theme-default,?$/m);
    if (!themeMatch){ return; }
    
    rule.walkDecls(/^--/, decl => {
      vars[decl.prop.trim()] = decl.value.trim();
    });
  });
  return vars;
}

function removeDuplicateThemeVars(root, rootVars) {
  root.walkRules(rule => {
    if (rule.selector.match(/\.theme-default/)){ return; }
    const themeMatch = rule.selector.match(/\.theme-([\w-]+)/);
    if (!themeMatch) return;

    // Inside theme-{name} only (not nested)
    rule.walkDecls(/^--/, decl => {
      const prop = decl.prop.trim();
      const val = decl.value.trim();
      
      if (rootVars[prop] === val) {
        decl.remove(); // duplicate → remove
      }
    });
  });
}

export function processCss(css) {
  const root = postcss.parse(css);

  // Step 1: Gather :root and .theme-default vars
  const rootVars = collectVarsFromRoot(root);

  // Step 2: Remove duplicates from each .theme-{name}
  removeDuplicateThemeVars(root, rootVars);

  return root.toString();
}

const inputPath = 'dist/vibrantvue.css';
const outputPath = 'dist/vibrantvue-cleaned.css';

const cssContent = fs.readFileSync(inputPath, "utf8");
const cleanedCss = processCss(cssContent);
fs.writeFileSync(outputPath, cleanedCss, "utf8");

console.log(`Cleaned CSS written to ${outputPath}`);
