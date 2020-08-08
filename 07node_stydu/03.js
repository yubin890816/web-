var http = require("http");

// 创建服务器对象
var app = http.createServer(function(req, res){
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    // res.statusCode = 404;
    // 服务器响应数据
    res.end("自己开发的服务器");
});

// 端口号设置
app.listen(3000);