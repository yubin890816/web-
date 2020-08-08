// 引入社区自定义模块 colors
var colors = require("colors");

console.log("我是一个大帅哥".green);
console.log("前端还是挺有意思的".rainbow);

var solarLunar = require("solarLunar");
var solar2lunarData =solarLunar.solar2lunar(1989, 8, 30);
console.log(solar2lunarData);
console.log(solar2lunarData.animal);