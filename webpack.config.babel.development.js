import baseConfig from './webpack.config.babel.base';
import webpack from 'webpack';

const config = Object.create(baseConfig);

config.entry = [
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
  './app/ts/main.ts'
];
config.debugMode = true;
config.devtool = '#source-map';

config.plugins = [
new webpack.ResolverPlugin(
  new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
  ),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
];

export default config;
