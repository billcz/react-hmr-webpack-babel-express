react-hmr-webpack-babel-express
-------------------------------
This is the React hmr example code, with webpack + Express + babel. You can modify the code as you like.
```js
import webpack from 'webpack';
import path from 'path';

export default {
 entry: [
   'webpack-hot-middleware/client',
   './index'
 ],
 output: {
   path: path.join(__dirname, 'dist'),
   filename: 'app.js',
   publicPath: '/assets/'
 },
 module: {
   loaders: [{
     test: /\.js$/,
     exclude: /node_modules/,
     loader: 'babel-loader',
     include: __dirname
   }]
 },
 plugins: [
   new webpack.optimize.OccurrenceOrderPlugin(),
   new webpack.HotModuleReplacementPlugin()
 ]
}

```
