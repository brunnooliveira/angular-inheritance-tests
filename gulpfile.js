// instanciando módulos
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');


gulp.task('scripts', function() {
    // corpo da tarefa 
    return gulp
            .src(['src/app/**/*.js'])
            .pipe(uglify())
            .pipe(gulp.dest('build/js'));      
});

gulp.task('watch', function() {
    // corpo da tarefa 
    gulp.watch('src/app/**/*.js', function(event) {
        gutil.log('File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('scripts');
    });
});