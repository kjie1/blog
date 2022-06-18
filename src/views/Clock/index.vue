// 父组件
<template>
  <h1>当前时间：{{ current }}</h1>  
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      current: this.getCurrent(),
    };
  },
  methods: {
    getCurrent() {
      return new Date().toLocaleString();
    },
  },
  created() {
    this.timer = setInterval(() => { 
      this.current = this.getCurrent();
    }, 1000);
  },
};
</script>

<style>
</style>