import path from 'path';

export default {
  contentBase: path.resolve(__dirname, 'app'),
  cache: true,
  entry: [],
  output: {
    path: __dirname + '/app/js/',
    publicPath: '/js/',
    filename: '[name].js',
    chunkFilename: '[chunkFilename].js',
    sourceMapFilename: '[name].map'
  },
  module: {
    preLoaders: [{
      test: /\.ts(x?)$/,
      exclude: /(node_modules|bower_components)/,
      include: __dirname,
      loader: 'tslint'
    }],
    loaders: [{
      test: /\.ts(x?)$/,
      // babel-loader?presets[]=es2015,presets[]=stage-0!ts-loader
      loader: 'babel-loader?presets[]=es2015,presets[]=stage-0!ts-loader',

      // このloaderでtypecheck:trueにするとエラーがでる...orz
      // loader: 'awesome-typescript-loader?doTypeCheck=true&useBabel=true&useWebpackText=true&',
      include: __dirname,
      sourceMap: '',
      exclude: /(node_modules|bower_components)/
    }]
  },
  resolve: {
    root: [path.join(__dirname, 'bower_components')],
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.tsx', '.ts', '.js', 'jsx'],
    alias: {
      bower: 'bower_components',
      TweenLite : `${__dirname}/bower_components/gsap/src/uncompressed/TweenLite.js`
    }
  }
}
