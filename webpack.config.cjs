const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the output directory before emit
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing without extensions
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,  // Handle SCSS files
        use: ['style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.css$/,  
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname),
    hot: true,
    open: true,
    port: 3000,
  },

  mode: 'development',
};
