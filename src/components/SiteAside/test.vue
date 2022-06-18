<template>
  <div class="test-container">
      <SiteAside/>
  </div>
</template>

<script>
import SiteAside from './index.vue'
import "@/styles/global.less";
export default {
    components:{
        SiteAside,
    }
}
</script>

<style scoped>
.test-container{
    width:250px;
    height:100%;
    border:2px solid red;
    margin:0 auto;
}
</style>