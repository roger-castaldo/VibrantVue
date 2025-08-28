const fs = require("fs");
const path = require("path");

const foldersPath = './src/css/sass/themes/';
const outputScss = './src/css/sass/themes/finalize.scss';

const folders = fs.readdirSync(foldersPath).filter(file => {
    return fs.statSync(path.join(foldersPath, file)).isDirectory();
});

const scssVars = `@use "../../../../node_modules/bulma/sass/themes/setup" as setup;
@use "../../../../node_modules/bulma/sass/utilities/initial-variables" as iv;
@use "../../../../node_modules/bulma/sass/utilities/css-variables" as cv;

:root,
${folders.map(f => `:root[data-#{iv.$class-prefix}theme="${f}"],
[data-#{iv.$class-prefix}theme="${f}"],
:root.#{iv.$class-prefix}theme-${f},
.#{iv.$class-prefix}theme-${f}`).join(',\n')}
{
    @include setup.setup-theme;
    @include cv.register-var("title-family",cv.getVar("body-family"));
    @include cv.register-var("subtitle-family",cv.getVar("body-family"));
}

.#{iv.$class-prefix}title{
    font-family:#{cv.getVar("title-family")};
}

.#{iv.$class-prefix}subtitle {
    font-family:#{cv.getVar("subtitle-family")};
}`;

fs.writeFileSync(outputScss, scssVars);
