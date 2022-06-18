<template>
  <div class="test-container">
    <Layout>
      <!-- <template #left>
        <div class="left">左边区域</div>
      </template> -->
      <template #main>
        <div class="main">左边区域</div>
      </template>
      <template #right>
        <div class="right">左边区域</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index.vue";
export default {
  components:{
    Layout,
  }

}
</script>

<style scoped>
.test-container{
  width:60%;
  height:600px;
  border:2px solid red;
}
.left{
  width:200px;
  height:100%;
  background:crimson;
}
.main{
  width:100%;
  height:100%;
  background:cyan;
}
.right{
  width:300px;
  height:100%;
  background:blue;
}
</style>