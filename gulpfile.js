const { series, parallel, src, dest } = require("gulp");

const del = require("del");
const sass = require("gulp-sass")(require("sass"));
const inlineimage = require("gulp-inline-image");

function clean() {
  return del("dist/**");
}
exports.clean = clean;

function copyStatic() {
  return src("static/**").pipe(dest("dist"));
}
exports.copyStatic = copyStatic;

function buildStyles() {
  return src("./src/CompactSettings.theme.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(inlineimage())
    .pipe(dest("./dist"));
}
exports.buildStyles = buildStyles;

exports.default = series(clean, parallel(copyStatic, buildStyles));
