import http from 'http';
import fs from 'fs';

const PORT = 8080;

const CONTENT_TYPE_JSON = {"Content-Type": "application/json"};
const CONTENT_TYPE_HTML = {"Content-Type": "text/html"}; 

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
  else if (method == 'GET') {
    const html = fs.readFileSync('./frontend/index.html', 'utf8');
    res.writeHead(200, CONTENT_TYPE_JSON);
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
