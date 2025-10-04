const fs = require("fs").promises;
const path = require("path").promises;

(async () => {

let themeNames = (await fs.readdir('./src/css/sass/themes/', { withFileTypes: true }))
  .filter(entry=>entry.isDirectory())
  .map(entry=>entry.name)
  .concat(['light','default']);

const cssFile = "./dist/vibrantvue.css"; // Path to your compiled CSS file
const css = await fs.readFile(cssFile, "utf-8");

// Matches: body[skin="name"] { ... }
const skinBlockRegex = /theme-([^\s\{}]+)\s*{([^}]*)}/g;

const skinVars = new Map(); // skin -> Set of variable names
const varUsageMap = new Map(); // var name -> Set of skins

let match;
while ((match = skinBlockRegex.exec(css)) !== null) {
  console.log(`checking skin: ${match[1]}`);
  const skinName = match[1];
  const bodyContent = match[2];
  const varRegex = /--([\w-]+)\s*:(.+)/g;
  let varMatch;

  while ((varMatch = varRegex.exec(bodyContent)) !== null) {
    const varName = varMatch[0];
    if (varName.indexOf('var')<0){
      if (!skinVars.has(skinName)) {
        skinVars.set(skinName, new Set());
      }
      skinVars.get(skinName).add(varName);

      if (!varUsageMap.has(varName)) {
        varUsageMap.set(varName, new Set());
      }
      varUsageMap.get(varName).add(skinName);
    }
  }
}

// Report duplicates
console.log("🔍 Variables declared in multiple skins:\n");

let duplicatesFound = false;
for (const [varName, skins] of varUsageMap.entries()) {
  if (skins.size == themeNames.length) {
    duplicatesFound = true;
    console.log(`--${varName} is declared in: ${[...skins].join(", ")}`);
  }
}

if (!duplicatesFound) {
  console.log("✅ No duplicate variable declarations found across skins.");
}

})();
