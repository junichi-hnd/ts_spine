import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

gulp.task('html', () => {
  const minifyHtmlOpt = {
    conditionals: true, // IE条件コメントを消さない
    loose       : true, // 空白文字を削除しない
    quotes      : true  //クオートを削除しない
  };

  return gulp.src('app/**/*.html').pipe($.debug())
    .pipe($.useref())
    .pipe($.if('*.css', $.csso()))
    .pipe($.if('*.js', $.uglify().on('error', $.util.log)))
    .pipe($.if('*.html', $.minifyHtml(minifyHtmlOpt)))
    .pipe(gulp.dest('production'));
});
