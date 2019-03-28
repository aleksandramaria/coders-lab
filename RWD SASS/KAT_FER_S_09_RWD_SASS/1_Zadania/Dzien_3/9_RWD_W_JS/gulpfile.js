var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");

var autoprefixerOptions = {
    browsers: ['last 30 versions', '> 0%', 'Firefox ESR', 'IE 9']
};

gulp.task("sass", function () {
    return gulp.src("scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest("css"))
});

gulp.task("watch", function () {
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
});
