<template>
  <div class="test-container">
      <Empty/>
  </div>
</template>

<script>
import Empty from "./index.vue";
export default {
    components:{
        Empty,
    }
}
</script>

<style scoped>
.test-container{
    width:300px;
    height:400px;
    left:100px;
    top:200px;
    position:relative;
    border:1px solid red;
}
</style>