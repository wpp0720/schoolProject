const express = require('express');
const path = require('path');
const app = express();
const request = require('request');
 
// 配置静态文件服务中间件
let server1Url='http://10.10.10.30:8505';//server地址
let server2Url='http://10.10.10.30:8007';//server地址
let server3Url='http://10.10.10.30:8006';
let server4Url='http://10.10.10.30:8505';
let server5Url='http://10.10.10.47:8880';

//let server1Url='http://10.10.10.10:8005';//server地址
//let server2Url='http://10.10.10.10:8007';//server地址
//let server3Url='http://10.10.10.10:8006';
//let server4Url='http://10.10.10.10:8505';


app.use(express.static(path.join(__dirname, './')));//静态资源index.html和node代码在一个目录下

app.use('/', function(req, res) {
	let url;
  if(req.url.indexOf("live/auction/client")>=0){
	  url = server2Url + req.url;  
  }
  else if(req.url.indexOf("epai_member")>=0){
	  if(req.url.indexOf("app/remind")>=0){
	  url = server5Url + req.url;  
    }else{
		 url = server3Url + req.url;  
	}
	  
  }
   else if(req.url.indexOf("findbBriberymoneyRunning")>=0){
	  url = server4Url + req.url;  
  }
  else{
	  url = server1Url + req.url;  
  }
    console.log(url);
  	res.header("Access-Control-Allow-Origin", "http://my.epailive.com");
	res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));
  req.pipe(request(url)).pipe(res);
});
 
app.listen(3000,'127.0.0.1', function () {//前端ajax地址写 http://127.0.0.1:3000/
  console.log('server is running at port 3000');
});