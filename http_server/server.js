// var http = require('http');
// const fs = require('fs');


// const myserver = http.createServer((req, res) => {
//     var rlog = `got the request on ${Date.now()} \n `;
//     fs.appendFile("logs.txt",rlog,(err,data) => {

//         console.log("request logged");
//         res.end("request saved");
//     }
//     );
// }
// )

//     // myserver.listen(3000,()=>{
//     //     console.log("server is working on 3000");
//     // });









// const http = require('http');


// const port = 3000;

// const server = http.createServer((req, res) => {
//     // res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');
//     // res.end('Hello, World!\n');
//     console.log(req);
// });

// server.listen(port,  () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });




const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
