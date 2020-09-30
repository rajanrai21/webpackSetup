node install
npm install

/* config testes6 folder with start and build script that fire and bundle main.js file for us */

create a project directory 'testes6'
go to this directory pwd -> testes6
npm init -y -> testes6 -> package.json -> details related to this folder
npm install --save-dev webpack if error ->  npm cache clean -> npm cache clean --force
npm install --save-dev webpack -> for webpack bundling functionality 
npm install --save-dev webpack-cli -> for interacting webpack through command line -> --save-dev *because we do not want these dependency as global dependency 
open code editor 'visual stidio' 
you will find in testes6 folder you have node_modules, package-lock.json and package.json node_modules contain dependecy related to node for project development common 

open package.json file 
this is a JSON file key-value like file which have details related to your project name version devDependencies  etc.

in devDependencies you can see which devDependencies had been added and version as values like "webpack": "^4.44.2" etc

in this file you can see "script" object also with "test": "echo ...." remove this and add "start": "webpack --mode development", "build": "webpack --mode production" to run these script from command promt line

create a folder like src inside this create a file index.js write some console.log() statement 

after that open command promt in current working directory 

run command -> npm run start => it will run the start script which we mentioned in package.json file. on running this command if everything is good it will create a dolder 'dist' inside 'testes6' project folder start script run in development mode so in dist folder you will find a main.js file which have very long commented and other code along with your console.log() statement which you written in index.js 

after that if you do npm run build => it will run your build script which you mentioned in production mode after this if you again open main.js file inside dist you can see production ready code

/* next we config webpack to build this bundle main.js file in a way that view able from browser */

create webpack.config.js file in root of project 

now whenever you run webpack within this project webpack will pickup this webpack.config.js file where we can add setting to direct webpack how to behave 

add this code 

const path = require('path'); //webpack look absolute path so we are importing 'path' module 

//it works by exporting overall object as a module with 
module.exports = {
    entry: path.resolve(__dirname,'app'), //what files webpack look for bundle we chaged src to app
    output: {
        path: path.resolve(__dirname,'build'),//create build directory
        filename: 'bundle.js' //file name 
        //where to generate file and what name output key
    }
};

after that run npm run start
it will create a build folder in which you can see bundle.js file similer to dist -> main.js now you can delete dist folder

/* config to run start script automaticly if we notice any change in app directory (webpack-dev-server module)*/
 
npm i webpack-dev-server --save-dev

now inside our package.json modifiy start script to "start": "webpack-dev-server --mode development"

create a html file in build directory to see changes in server in browser this file have a script tag with src="bundle.js" 

<!DOCTYPE html>
<html>
    <body>
        <script src="bundle.js"></script>
    </body>
</html>


/*development server setup*/

in webpack.config.js 

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'app'),
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    devServer:{//dev server config
        port: 3000,//portid
        contentBase: path.resolve(__dirname,'build')//content base
    }
};

save all file open a browser -> open localhost:3000 -> inspect -> console -> you can see your index.js code here if you add any other statement you can see that thing also without running npm start again because of development server


/* Babel setup for to transpile our modern js code to fully supported js code to all browser*/

firstly open command line in project directory 

than 

npm i babel-core@6.26.3 babel-loader@7.1.4 babel-preset-env@1.7.0 --save-dev

to include babel-core, babel-loader and babel-preset-env development dependency 

babel-core is primary transpire 
babel-loader allow us to import and export js file as their own component and module
babel-preset add on top of babel-core to support es6 functionality based on specific browser


