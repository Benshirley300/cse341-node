const fs = require('fs');

const userList = ['Ben', 'Jack', 'Alyssa'];

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    
    
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<h1>Title Page</h1>');
        res.write('<form action="/create-user" method="POST"><label for="username">Enter Username:</label><input name="username" type="text"><button type="submit"></form>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const enterName = parsedBody.split('=')[1];
            userList.push(enterName);
            console.log(userList);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
    if (url === '/user') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<h1>List of Users</h1>');
        res.write('<ul>')
        for (let name of userList) {
            let string = "<li>" + name + "</li>";
            res.write(string);
        }
        res.write('</ul>')
        res.write('</html>');
        return res.end();
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>Welcome to my Page</h1>');
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
module.exports= requestHandler;