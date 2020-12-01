var gulp = require('gulp');
var merge = require('gulp-merge-json');
var sortJSON = require('gulp-json-sort').default;

function defaultTask(cb) {

    gulp.src('./source/*.json')
        .pipe(merge())
        .pipe(sortJSON({ space: 2 }))
        .pipe(gulp.dest('./dist'));

    cb();
}

exports.default = defaultTask