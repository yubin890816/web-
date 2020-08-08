// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js是入口文件


// 引入Vue框架中Vue构造函数
// 相当于 var vue = require("vue"); 这是es5的写法,下面这个是es6的写法
import Vue from 'vue'

// 引入根组件
import App from './App'

// 这个可以删除
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
