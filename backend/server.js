import http from 'http';

const PORT = 8080;

const CONTENT_TYPE_JSON = { "Content-Type": "application/json" };

let dummy_data = [
  {code: 'cole', tasks: ['do laundry', 'buy milk']},
  {code: 'sean', tasks: ['clean dishes']}
];

const server = http.createServer((req, res) => {
  const {method, url} = req;
  if (method == 'GET') {
    console.log('handling a GET request...');
    res.writeHead(200, CONTENT_TYPE_JSON);
    res.end(JSON.stringify(dummy_data));
  }
  else if (method == 'POST') {
    console.log('handling a POST request...');
    res.writeHead(200, CONTENT_TYPE_JSON);
    res.end(JSON.stringify(dummy_data));
  }
  else {
    res.writeHead(404, CONTENT_TYPE_JSON);
    res.end(JSON.stringify({error: 'Not Found'}));
  }
});

server.listen(PORT, 'localhost', () => {
  console.log(`Server running @ http://localhost:${PORT}/`);
});


