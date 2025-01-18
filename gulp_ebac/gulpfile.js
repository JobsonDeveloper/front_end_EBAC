const gulp = require("gulp");
const imagemim = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
// const sourcemaps = require("gulp-sourcemaps");
// .pipe(sourcemaps.write("./maps"))
// .pipe(sourcemaps.init())

function compilaSass() {
    return gulp.src("./source/styles/main.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest("./build/styles"));
}


function compilaJS() {
    return gulp.src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"))
}

function comprimirIMG() {
    return gulp.src("./source/images/*")
    .pipe(imagemim())
    .pipe(gulp.dest("build/images"));
}

exports.default = function() {
    gulp.watch("./source/styles/*.scss", { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch("./source/scripts/*.js", { ignoreInitial: false }, gulp.series(compilaJS));
    gulp.watch("./source/images/*", { ignoreInitial: false }, gulp.series(comprimirIMG));
};

// function funcaoPadrao(callback) {
//     callback();
// }

// exports.default = function() {
//     gulp.series(funcaoPadrao, dizOi);
// } 

// function funcaoPrivada() {
    //     console.log("Não é pública");
    // }
    
    // function dizOi(callback) {
        //     console.log("Oi Gulp");
        //     callback();
        // }
        // exports.dizOi = dizOi;
        // exports.default = gulp.parallel(funcaoPadrao, dizOi);
        // exports.sass = compilaSass;
        // exports.js = compilaJS;
        
        
        
        
        
        
        // exports.imageComp = comprimirIMG;