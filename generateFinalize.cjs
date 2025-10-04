const fs = require("fs");
const path = require("path");

const foldersPath = './src/css/sass/themes/';
const outputScss = './src/css/sass/themes/finalize.scss';

const folders = ['default','light'].concat(fs.readdirSync(foldersPath).filter(file => {
    return fs.statSync(path.join(foldersPath, file)).isDirectory();
}).map(f=>`${f}`));

const scssVars = `@use "../../../../node_modules/bulma/sass/themes/setup" as setup;
@use "../../../../node_modules/bulma/sass/utilities/initial-variables" as iv;
@use "../../../../node_modules/bulma/sass/utilities/css-variables" as cv;
@use "../../../../node_modules/bulma/sass/utilities/derived-variables" as dv;

:root,
${folders.map(f => `:root[data-#{iv.$class-prefix}theme="${f}"],
[data-#{iv.$class-prefix}theme="${f}"],
:root.#{iv.$class-prefix}theme-${f},
.#{iv.$class-prefix}theme-${f}`).join(',\n')}
{
    @include setup.setup-theme;
    @include cv.register-var("title-family",cv.getVar("body-family"));
    @include cv.register-var("subtitle-family",cv.getVar("body-family"));

    @each $name, $color in dv.$colors {
        @include cv.register-vars((
            $name:hsla(#{cv.getVar($name, '', '-h')}, #{cv.getVar($name, '', '-s')}, #{cv.getVar($name, '', '-l')}, 1),
            "#{$name}-invert":hsla(#{cv.getVar($name, '', '-h')}, #{cv.getVar($name, '', '-s')}, #{cv.getVar($name, '', '-invert-l')}, 1),
            "#{$name}-on-scheme":hsla(#{cv.getVar($name, '', '-h')}, #{cv.getVar($name, '', '-s')}, #{cv.getVar($name, '', '-on-scheme-l')}, 1)
        ));
    }

    background-color: #{cv.getVar("body-background-color")};
}

.#{iv.$class-prefix}title{
    font-family:#{cv.getVar("title-family")};
}

.#{iv.$class-prefix}subtitle {
    font-family:#{cv.getVar("subtitle-family")};
}
    
.#{iv.$class-prefix}footer {
    color: cv.getVar("footer-color");
}`;

fs.writeFileSync(outputScss, scssVars);
