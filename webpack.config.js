const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]&publicPath=/static/',
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=../[name].[ext]&publicPath=/static/'
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.vue' ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{ from: './images', to: 'images' }])
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/static'),
  },
  mode: 'development'
}