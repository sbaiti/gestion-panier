# Gestion panier


### `npm run dev `

Pour lancer le projet : 

1/ npm install 
2/ cd front
4/npm install
3/ cd..
5/ npm run dev 

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Repository description 

In this repository i combine the repository front (front) with the repository back (back) in the same root project and i use the concurrently library to run multiple commands concurrently and i config it in the package.json

* "front-install": "npm install --prefix front",
* "start": "node index.js",
* "server": "nodemon index.js",
* "front": "npm start --prefix front",
* "dev": "concurrently \"npm run server\" \"npm run front\""

so to run this project just install the dependencies for the two part back and front and tape npm run dev .

### Features
* Upload and view tracks using the RESTful API
* management of Panier
* View all products

### Technologies used
* React.js
* Nextjs
* Context
* localStorage
* Nodejs 

