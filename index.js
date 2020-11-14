require('http')
.Server((req, res) => {
  
  const CORS = {
    'Content-Type': 'text/plain; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};
  res.writeHead(200, CORS);
  if (req.url === '/login/') return res.end('itmo287666');
  if (req.url === '/sample/') return res.end('function task(x) {return x * Math.pow(x, 2);}');
  if (req.url === '/promise/') return res.end('function task(x) {return new Promise((res, rej) => x < 18 ? rej(no) : res(yes));}');
  if (req.url === '/fetch/') return res.end(req.url === '/index.html/');
  
  res.end('itmo287666');
})
.listen(process.env.PORT);
