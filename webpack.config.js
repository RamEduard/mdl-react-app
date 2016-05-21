// webpack.config.js for Babel 6
var port = process.env.PORT || 3000;

module.exports = {
 entry: './main.js',
 output: { 
 	path: __dirname + '/public/js', 
 	filename: 'app.react.js',
 	publicPath: '/'
 },
 devServer: {
    inline: true,
    contentBase: './public/',
    port: port
  },
 module: {
   loaders: [
   {
     test: /.js?$/,
     loader: 'babel',
     exclude: /node_modules/,
     query: {
     	presets: ['react', 'es2015']
     }
   }]
 },
};