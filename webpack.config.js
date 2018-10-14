const path = require('path');		//template on https://webpack.js.org/

module.exports = {
  entry: './client/src/index.js',    //where should webpack start looking for files
  output: {		//where should webpack put the bundle
    path: path.resolve(__dirname, 'client/dist'),		//what folder?
    filename: 'bundle.js'		//what filename
  }, 	//webpack will put our bundle at ./dist/bundle.js
  module: {		//copy paste from babel-loader usage npm website
	  rules: [
	    {
	      test: /\.jsx?$/,  ///\.m?js$/,		// which files should this loader run? regular expressions means .js or .jsx
	      exclude: /(node_modules)/,    //dont transpile node modules  //|bower_components
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env', '@babel/preset-react']  //preset-env translates es6 to es5, also add the babel presets from https://babeljs.io/docs/en/next/babel-preset-react
	        }
	      }
	    }
	  ]
	},	//change from production to development
	mode: 'development', 
};		


	
	//`npm install webpack`

	//`npx webpack` to run (say y or yes to install cli)

	//Installs all json packages
	//`npm install -D babel-loader @babel/core @babel/preset-env webpack`

	//Copy/paste config

	//`npm install --save-dev @babel/preset-react`		//saves to dev dependencies required to run applicationas opposed to build application for just dependices

	//`npm install react react-dom`

	//Add mode: 'development'
	//`npx webpack --watch`

	//`npm install -g live-server` in my case install local `npm install live-server`

	//Create a client folder for the front end to separate the server and database folders, but not webpack.config or package.json.

	//`mkdir client`		 make new directory client
	//`mv src client/`   move src to client folder

	//Adject filepaths in webpack.config

	
	//servers
	//npm install body-parser


