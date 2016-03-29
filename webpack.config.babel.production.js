import baseConfig from './webpack.config.babel.base';
import webpack from 'webpack';

const config = Object.create(baseConfig);
config.entry = {
  main: [
    './app/js/main.js'
  ]
};

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
];

export default config;
