// echo "# node-tut" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/manshing137/node-tut.git
// git push -u origin main

const http = require("http");



const server = http.createServer((req,res) => {

    console.log("hello world");

});

server.listen(3000);