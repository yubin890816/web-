// node软件给我们提供模块(给JS赋予超能力)，node软件本身就有的
// fs模块：可以通过JS向某一个文件写入数据
var fs = require("fs");

// 写入数据 参数1：文件路径（不存在自己会创建） 参数2：需要写入的数据  参数3：回调函数（必须）
fs.writeFile("./yb.txt", "我是祖国的老花骨朵", function () {
    console.log("数据写入......");
});

// 读取数据
fs.readFile("./yb.txt", function (err, data) {
    console.log(data.toString());
});

// 将json转换成querystring字符串
var querystring = require("querystring");
console.log(querystring.stringify({
    "a": 1,
    "b": 2
}));