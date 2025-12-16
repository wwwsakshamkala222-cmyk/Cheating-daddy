const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. Tell webpack we are in an electron environment
  target: 'electron-renderer', 
  
  entry: './src/index.jsx',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // 2. THIS IS THE FIX: Tell Webpack to treat 'electron', 'fs', and 'path' as external
  // This prevents the "Module not found" errors you just saw.
  externals: {
    electron: 'require("electron")',
    fs: 'require("fs")',
    path: 'require("path")'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  
  resolve: {
    extensions: ['.js', '.jsx']
  }
};