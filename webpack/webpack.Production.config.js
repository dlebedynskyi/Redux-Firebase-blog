const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ROOT_PUBLIC = Path.resolve('wwwroot');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractSASS = new ExtractTextPlugin('/styles/app.[hash].css', {
  allChunks: true,
});

const LOCAL_IDENT_NAME =
  'localIdentName=[path][name]---[local]---[hash:base64:5]';
const CSS_LOADER = `css?sourceMap&modules&importLoaders=1&${LOCAL_IDENT_NAME}` +
  `?root=${ROOT_PUBLIC}!postcss-loader!sass?sourceMap`;

const THEME_FILE = 'src/app/styles/toolbox-theme.scss';

const webpackConfig = {
  devtool: 'source-map',
  entry: [Path.join(__dirname, '../src/app/index')],
  output: {
    path: Path.join(__dirname, '../dist'),
    filename: '/scripts/app.[hash].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
        test: /.jsx?$/,
        include: Path.join(__dirname, '../src/app'),
        loader: 'babel',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    ExtractSASS,
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, '../src/index.html'),
    }),
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        keep_fnames: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
    }),
    new Webpack.optimize.AggressiveMergingPlugin(),
  ],
  postcss: [autoprefixer({
    browsers: ['last 2 versions'],
  })],
  sassLoader: {
    data: `@import "${THEME_FILE}";`,
  },
};

webpackConfig.module.loaders.push({
  test: /\.scss$/,
  loader: ExtractSASS.extract('style', CSS_LOADER),
});

module.exports = webpackConfig;
