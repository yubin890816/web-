<style>
#son {
  width: 200px;
  height: 100px;
  background-color: yellow;
}
</style>

<template>
  <div id="son">
    <h1>我是大儿子~~~{{car}}</h1>
    <button @click="send">给父组件传递数据</button>
  </div>
</template>

<script>
export default {
  props: ["car"],
  data(){
      return {
          msg: "我有一个亿"
      }
  },
  methods:{
      send(){
          this.$emit("send", this.msg);
      }
  }
};
</script>