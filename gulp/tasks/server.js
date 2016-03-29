import gulp from 'gulp';
import url from 'url';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.babel.development';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// import config from '../../config';

const _bundler = webpack(webpackConfig);
const _reload = browserSync.reload;

gulp.task('server', [], () => {
  browserSync({
    notify: false,
    port: 9000,
    open: false,
    reloadOnRestart: true,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components',
        '/node_modules' : 'node_modules'
      },
      middleware: [
        webpackDevMiddleware(_bundler, {
          publicPath: webpackConfig.output.publicPath,
          noInfo: false,
          quiet: false,
          stats: {
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: true,
            chunkModules: false
          }
        }),
        webpackHotMiddleware(_bundler),
        (req, res, next) => {
          const fileName = url.parse(req.url);
          // リロード時に404にならないようにrewrite
          if(/\/(compare|factor|cv|imagescale)/.test(fileName.pathname)){
            req.url = '/index.html';
          }
          return next();
        }
      ]
    }
  });
  gulp.watch('app/ts/**/*.ts', ['ts']);
  gulp.watch(['app/**/*.js']).on('change', _reload);
  // gulp.watch(['app/*.html']).on('change', _reload);
  // gulp.watch('app/styles/**/*.scss', ['css']);
  // gulp.watch('bower.json', ['wiredep']);
});

/*gulp.task('server:test', () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/bower_components': 'bower_components',
        '/node_modules' : 'node_modules'
      }
    }
  });
  gulp.watch('test/spec/!**!/!*.js').on('change', reload);
  gulp.watch('test/spec/!**!/!*.js', ['lint:test']);
});*/

/*gulp.task('server:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: [`${config.dist}`],
      middleware: [
        (req, res, next) => {
          const fileName = url.parse(req.url);
          // リロード時に404にならないようにrewrite
          if(/\/(compare|factor|cv|imagescale)/.test(fileName.pathname)){
            req.url = '/index.html';
          }
          return next();
        }
      ]
    }
  });
});
*/
