const { src, dest, parallel, watch, series } = require('gulp'),
concat = require('gulp-concat'),
sass = require('gulp-sass'),
pug = require('gulp-pug'),
browserSync =require('browser-sync').create()

const FilesPath = { sassFiles:'E:/VSCODE/greenshop-pr1/OE42-FE-PR1-Than/src/sass/style.scss', htmlFiles: 'E:/VSCODE/greenshop-pr1/OE42-FE-PR1-Than/src/pug/pages/*.pug' }
function sassTask() { return src(FilesPath.sassFiles) .pipe(sass()) .pipe(concat('style.css')).pipe(dest('E:/VSCODE/greenshop-pr1/OE42-FE-PR1-Than/assets/css')) .pipe(browserSync.stream()); }
function htmlTask() { return src(FilesPath.htmlFiles) .pipe(pug({ pretty: true })).pipe(dest('E:/VSCODE/greenshop-pr1/OE42-FE-PR1-Than')) .pipe(browserSync.stream()); }
function serve() { browserSync.init({ server: { baseDir: 'E:/VSCODE/greenshop-pr1/OE42-FE-PR1-Than' } })
watch(sassFiles,sassTask);
watch(htmlFiles, htmlTask); }
exports.sass = sassTask;
exports.html = htmlTask;
exports.default = series(parallel(htmlTask, sassTask));
exports.serve = series(serve, parallel(htmlTask, sassTask))