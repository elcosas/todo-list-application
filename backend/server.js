import http from 'http';
import fs from 'fs';
import sqlite3 from 'sqlite3';

const PORT = 8080;

const CONTENT_TYPE_JSON = {"Content-Type": "application/json"};
const CONTENT_TYPE_HTML = {"Content-Type": "text/html"}; 

let dummy_data = [
  {code: 'cole', tasks: ['do laundry', 'buy milk']},
  {code: 'sean', tasks: ['clean dishes']}
];

function initDatabase() {
  let db = new sqlite3.Database(`${import.meta.dirname}/todos.db`, () => {});
  db.serialize(() => {
    db.run('create table if not exists todos (save_id text primary key, todo_list text not null)');
  });
  return db;
}

initDatabase();

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
