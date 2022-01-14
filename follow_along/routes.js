const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    
    
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<h1>Title Page</h1>');
        res.write('<form action="/message" method="POST"><input name="message" type="text"><button type="submit"></form>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        
        
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>Title Page</h1>');
    res.write('<h2>Welcome to my Node Server </h2>');
    res.write('</html>');
    return res.end();
    
    
    res.end();
    // process.exit();
};

// module.exports = requestHandler;

// module.exports = {
//     request: requestHandler,
//     text: "Some hard coded text"
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

// The module can be omitted when exporting multiple this way.
exports.handler = requestHandler;
exports.someText = 'Some hard coded text';