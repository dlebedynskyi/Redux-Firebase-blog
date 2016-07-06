const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const PORT = 3000;
const ROOT_PUBLIC = Path.resolve('wwwroot');

const LOCAL_IDENT_NAME =
  'localIdentName=[path][name]---[local]---[hash:base64:5]';
const CSS_LOADER = `css?sourceMap&modules&importLoaders=1&${LOCAL_IDENT_NAME}` +
  `?root=${ROOT_PUBLIC}!postcss-loader!sass?sourceMap`;

const THEME_FILE = 'src/app/styles/toolbox-theme.scss';

const webpackConfig = {
  devtool: 'cheap-module-source-map',
  entry: [
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/dev-server',
    Path.join(__dirname, '../src/app/index'),
  ],
  output: {
    path: Path.join(__dirname, '../dist'),
    filename: '/scripts/app.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
		alias: {
			appSettings: Path.join(__dirname, '../src/config/development')
		}
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
      {
        test: /\.scss$/,
        loaders: ['style', CSS_LOADER],
      },
    ],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
    }),
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, '../src/index.html'),
    }),
    new Webpack.HotModuleReplacementPlugin(),
  ],
  postcss: [autoprefixer({
    browsers: ['last 2 versions'],
  })],
  sassLoader: {
    data: `@import "${THEME_FILE}";`,
  },
};

webpackConfig.devServer = {
  contentBase: Path.join(__dirname, '../'),
  hot: true,
  port: PORT,
  inline: true,
  progress: true,
  historyApiFallback: true,
};

module.exports = webpackConfig;
