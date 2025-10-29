import http from 'http';
import url from 'url';
import querystring from 'querystring';
import fs from 'fs';
import sqlite3 from 'sqlite3';

const PORT = 8080;

const CONTENT_TYPE_JSON = {"Content-Type": "application/json"};
const CONTENT_TYPE_HTML = {"Content-Type": "text/html"}; 
const CONTENT_TYPE_CSS = {"Content-Type": "text/css"}; 
const CONTENT_TYPE_JS = {"Content-Type": "application/javascript"}; 

let dummy_data = [
  {code: 'cole', tasks: ['do laundry', 'buy milk']},
  {code: 'sean', tasks: ['clean dishes']}
];

function initDatabase() {
  let db = new sqlite3.Database(`${import.meta.dirname}/todos.db`);
  db.serialize(() => {
    db.run('create table if not exists todos (save_id text primary key, todo_list text not null)');
  });
  return db;
}

let db = initDatabase();

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (req.method == 'GET' && parsedUrl.path == '/api/') {
    let todos_data;
    db.serialize(() => {
      db.get(`select todo_list from todos where save_id = ${parsedUrl.query.save_id}`, (err, row) => {
        todos_data = row.todo_list;
      });
    });
    res.writeHead(200, CONTENT_TYPE_JSON);
    res.end(JSON.stringify(todos_data));
  }
  else if (req.method == 'POST' && parsedUrl.path == '/api') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const parsedData = querystring.parse(body);
      console.log(`insert into todos values ("${parsedData.save_id}", "${parsedData.todo_data}")`);
      db.serialize(() => {
        db.run(`insert into todos values ("${parsedData.save_id}", "${parsedData.todo_data}")`);
      });
      res.writeHead(201, CONTENT_TYPE_JSON);
      res.end('OK');
    });
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
