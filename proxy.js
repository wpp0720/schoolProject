const express = require('express');
const path = require('path');
const app = express();
const request = require('request');
var proxy = require('express-http-proxy');
 
// 配置静态文件服务中间件
let server1Url='http://api.rexuejiewu.com.cn';//server地址
//let server2Url='http://10.10.10.30:8007';//server地址
//let server3Url='http://10.10.10.30:8006';
//let server4Url='http://10.10.10.30:8505';
//let server5Url='http://10.10.10.47:8880';

//let server1Url='http://10.10.10.10:8005';//server地址
//let server2Url='http://10.10.10.10:8007';//server地址
//let server3Url='http://10.10.10.10:8006';
//let server4Url='http://10.10.10.10:8505';


app.use(express.static(path.join(__dirname, './')));//静态资源index.html和node代码在一个目录下
/*var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain);*/
app.use('/api', function(req, res) {
	let url = server1Url + req.url;
    console.log(url);
  	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));
    req.pipe(request(url)).pipe(res);
});
//app.use('/api', proxy(server1Url));
 
app.listen(3000,'127.0.0.1', function () {//前端ajax地址写 http://127.0.0.1:3000/
  console.log('server is running at port 3000');
});