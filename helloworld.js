// At first we have to initialize Node by the command "NPM init"

//We need to install libraries before we use them
//Modules are installed by the command "npm i http" and used
const http = require('http');


const server = http.createServer((req,res) => {
    //to show hellow world in web page
  res.end('Hello World!');
});

//setting server , port for the connection
server.listen(5000,"localhost", () => {
// then server runs on http://localhost:5000/
  console.log(`Server running at http://localhost:5000/`);
});

// to run this "node <filename>.js"

//Working----------------------------------------------------