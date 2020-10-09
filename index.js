require('http')
.Server((req, res) => {
  
  const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};
  res.writeHead(200, CORS);
  if (req.url === '/v8') return res.end(process.versions.v8);
  if (req.url === '/package.json') return require('fs').createReadStream('./package.json').pipe(res);
  if (req.url === '/login') return res.end('Alexandr');
  if (req.url === '/node') return res.end(process.versions.node); 
  if (req.url === '/mirror?x=XYZ') return res.end('XYZ'); 
  if (req.url === '/day') return res.end(getDate()); 
  
  res.end('Alexandr Lazarenko');
})
.listen(process.env.PORT);
