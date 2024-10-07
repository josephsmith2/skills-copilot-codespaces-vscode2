// Create web server
// Create a web server that listens to requests on port 3000 and serves a list of comments from comments.json when it receives a request to the path /comments. You can read the comments from comments.json using the provided readComments function.

const http = require('http');
const fs = require('fs');

const readComments = () => {
  const comments = fs.readFileSync('./comments.json');
  return JSON.parse(comments);
};

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    const comments = readComments();
    res.end(JSON.stringify(comments));
  } else {
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});