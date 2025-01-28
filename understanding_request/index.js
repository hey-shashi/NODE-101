

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("\n my-method : \n ",req.method,"\n my-URL : \n", req.url,"\n my-header : \n ", req.headers);
    const url = req.url;
        if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
        }

        if (url === '/message' ) {
            let data = req.p
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
            }

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Hello from my Node.js Server !</h1></body>');
        res.write('</html>');
        res.end ( );
        });


server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


