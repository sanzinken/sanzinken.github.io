const gulp = require('gulp');
const gulpif = require('gulp-if');
const babel = require('gulp-babel');
const watch = require('gulp-watch'); // переписує тільки ті файли, в яких відбулися реальні зміни
const pug = require('gulp-pug'); //pug(exJade)
const plumber = require('gulp-plumber');
const prefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
//const sass = require('gulp-sass');
const stylus = require('gulp-stylus'); //препроцессор від mozilla оснований на nodejs
const sourcemaps = require('gulp-sourcemaps');
const rigger = require('gulp-rigger'); // збирає один файл з різних файлів (header.html aside.html footer.html) -> index.html
const cssmin = require('gulp-clean-css'); //мініфікація css
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const rimraf = require('rimraf'); //кліннер, коли необхідно очистити якийсь каталог повністю (./build наприклад)
const browserSync = require('browser-sync'); // автоматична перезагрузка сторінки після збірки
const reload = browserSync.reload;
/*******************************************************************************/
const path = {
    build: { /*готові після збірки файли*/
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },

    src: { /*Звідси берем вихідні файли*/
        pug: 'src/pug/*.pug',
        html: 'src/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/*.styl',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },

    test: {
        spec: 'spec/_spec.js'
    },

    watch: { /*Вказуємо зміни яких файлів ми хочемо спостерігати*/
        html: 'src/**/*.html',
        pug: 'src/**/*.pug',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.styl',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },

    clean: './build'
};
/*******************************************************************************/
const config = {
    server: {
        baseDir: "./build"
    },
    tunel: true,
    host: "localhost",
    port: 9000,
    logPrefix: 'GulpServerBrowserSync'
}

/*******************************************************************************/
//*****************Compile *.pug files******************************************/
gulp.task('pug:compile', function buildHTML() {
    return gulp.src(path.src.pug)
        .pipe(plumber())
        .pipe(pug({
            pretty: true,
            verbose: true
        }))
        .pipe(gulp.dest('./build/'));
});

//збираємо html
//gulp.task('html:build', ['pug:compile'], function() {
//    return gulp.src(path.src.html)
//        .pipe(rigger())
//        .pipe(gulp.dest(path.build.html))
//        .pipe(reload({ stream: true }))
//});


gulp.task('js:build', function() {
    return gulp.src(path.src.js)
        .pipe(sourcemaps.init())
        .pipe(rigger())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({ stream: true }));
});
//збираємо style
gulp.task('styles:build', function() {
    return gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(rigger())
        .pipe(stylus())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({ stream: true }));
});
//збираємо img
gulp.task('image:build', function() {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progresive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
});

//збираємо fonts
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});
// чистимо папку білда
gulp.task('clean', function(cb) {
    rimraf(path.clean, cb);
});
gulp.task('build', ['pug:compile', 'js:build', 'styles:build', 'image:build', 'fonts:build']);
/*************************************************************************************************/
gulp.task('watch', function() {
    watch([path.src.pug], function(event, cb) {
        gulp.start('pug:compile')
    });
    // watch([path.watch.html], function(event, cb) {
    //     gulp.start('html:build')
    // });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build')
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('styles:build')
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build')
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build')
    });
});
/**************************BROWSERSYNC****************************/
gulp.task('webserver', function() {
    browserSync(config);
});
/****************************DEFAULT*****************************/
gulp.task('default', ['build', 'webserver', 'watch']);