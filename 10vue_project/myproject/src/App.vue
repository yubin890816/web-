<style>
/* 组件书写样式地方 */
h1 {
  color: skyblue;
  font-size: 20px;
}

#box {
  width: 400px;
  height: 200px;
  background-color: red;
}
</style>
<template>
  <!-- 书写HTML地方 -->
  <div id="box">
    <h1>{{count}}</h1>
    <h1>我是父亲呀~~~{{msg}}</h1>
    <son :car="car" @send="show($event)"></son>
    <button @click="add">单击我加上1</button>
    <button @click="minus">单击我减去1</button>
  </div>
</template>

<script>
import son from "./components/son1";

// 书写js地方
export default {
  // 当前组件数据
  data() {
    return {
      count: 1,
      car: "奔驰",
      msg:""
    };
  },
  methods: {
    add() {
      this.count++;
    },
    minus() {
      this.count--;
    },
    show(liwu){
      this.msg = liwu;
    }
  },
  // 当前组件挂载子组件
  components: {son},
};
</script>
