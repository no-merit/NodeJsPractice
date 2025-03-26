const http = require('http');
const fs = require('fs');
const url = require('url');
//require node.js의 기능 중 하나로 url이라는 모듈이 필요하다고 요구
//모듈이란 같은 범주의 기능을 모아놓은 집합
const app = http.createServer(function(request,response){
    let _url = request.url;
    let queryData = url.parse(_url,true).query;
    let pathname = url.parse(_url, true).pathname;
    //url 모듈의 parse 기능 사요
    //괄호 안에 있는 _url은 request.url 값을 가진 변수. 이 값을 분석해서 쿼리스티링 문자열만 추출하는 코드
    console.log(url.parse(_url, true));
    
   if(pathname ==='/'){
    if(queryData.id===undefined){
   
      let title = 'Welcome';
      let description = 'Hello, Node,js';
    
    let template =`
    <!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="/">WEB</a></h1>
  <ul>
    <li><a href="/?id=HTML">HTML</a></li>
    <li><a href="/?id=CSS">CSS</a></li>
    <li><a href="/?id=JavaScript">JavaScript</a></li>
  </ul>
  <h2>${title}</h2>
  <p>${description}</p>
</body>
</html>
`;
    response.writeHead(200);
    response.end(template);
   
  }else{
    fs.readFile(`data/${queryData.id}`,'utf8',function(err, description){
      let title = queryData.id;
      let description = 'Hello, Node,js';
    
    let template =`
    <!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="/">WEB</a></h1>
  <ul>
    <li><a href="/?id=HTML">HTML</a></li>
    <li><a href="/?id=CSS">CSS</a></li>
    <li><a href="/?id=JavaScript">JavaScript</a></li>
  </ul>
  <h2>${title}</h2>
  <p>${description}</p>
</body>
</html>
`;
    response.writeHead(200);
    response.end(template);
    });
  }
  }else{
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(80);