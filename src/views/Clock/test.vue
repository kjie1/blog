<template>
  <div class="container">
    <Clock v-if="showClock"/>
    <button @click="showClock = !showClock">点击切换</button>
  </div>
</template>

<script>
import Clock from "./index.vue";
export default {
  components: {
    Clock,
  },
  data(){
    return{
      showClock:true,
    }
  }
};
</script>

<style>
</style>