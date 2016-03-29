import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import yargs from 'yargs';
import devConfig from '../../webpack.config.babel.development';
import productionConfig from '../../webpack.config.babel.production';


const $ = gulpLoadPlugins();
const _reload = browserSync.reload;

gulp.task('ts', () => {
  const arg = yargs.argv;
  let webpackSetting = webpack(devConfig);
  if(typeof arg !== 'undefined' && arg.propd === 1) {
    webpackSetting = webpack(productionConfig);
  }

  // const setting = webpack(devConfig);
  webpackSetting.run((error, stats) => {
    if(error){
      throw new Error('webpack build failed');
    }
    $.util.log(stats.toString({
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: true,
      chunkModules: false
    }));
    _reload();
  })
});
