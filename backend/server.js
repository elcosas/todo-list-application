import http from 'http';
import fs from 'fs';

const PORT = 8080;

const CONTENT_TYPE_JSON = {"Content-Type": "application/json"};
const CONTENT_TYPE_HTML = {"Content-Type": "text/html"}; 
const CONTENT_TYPE_CSS = {"Content-Type": "text/css"}; 
const CONTENT_TYPE_JS = {"Content-Type": "application/javascript"}; 

let dummy_data = [
  {code: 'cole', tasks: ['do laundry', 'buy milk']},
  {code: 'sean', tasks: ['clean dishes']}
];

const server = http.createServer((req, res) => {
  const {method, url} = req;
  if (method == 'GET' && url.includes('/api/')) {
    res.writeHead(200, CONTENT_TYPE_JSON);
    res.end(JSON.stringify(dummy_data));
  }
  else if (method == 'POST' && url.includes('/api/')) {
    res.writeHead(200, CONTENT_TYPE_JSON);
    res.end(JSON.stringify(dummy_data));
  }
  else if (req.method == 'GET' && parsedUrl.pathname == '/styles/main.css') {
    const html = fs.readFileSync('./frontend/styles/main.css', 'utf8');
    res.writeHead(200, CONTENT_TYPE_CSS);
    res.end(html);
  }
  else if (req.method == 'GET' && parsedUrl.pathname == '/styles/overlays.css') {
    const html = fs.readFileSync('./frontend/styles/overlays.css', 'utf8');
    res.writeHead(200, CONTENT_TYPE_CSS);
    res.end(html);
  }
  else if (req.method == 'GET' && parsedUrl.pathname == '/index.js') {
    const html = fs.readFileSync('./frontend/index.js', 'utf8');
    res.writeHead(200, CONTENT_TYPE_JS);
    res.end(html);
  }
  else if (req.method == 'GET') {
    const html = fs.readFileSync('./frontend/index.html', 'utf8');
    res.writeHead(200, CONTENT_TYPE_HTML);
    res.end(html);
  }
  else {
    res.writeHead(404, CONTENT_TYPE_JSON);
    res.end(JSON.stringify({error: 'Not Found'}));
  }
});

server.listen(PORT, 'localhost', () => {
  console.log(`Server running @ http://localhost:${PORT}/`);
});
