<template>
  <div class="test-container">
    <ImageLoader
      src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1717413651,2404415313&fm=224&gp=0.jpg
      "
      placeholder="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3106680854,3850319647&fm=11&gp=0.jpg"
      :duration="3000"
      @load="handleloaded"
    />
  </div>
</template>

<script>
import ImageLoader from "./index.vue";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleloaded() {
      console.log("图片加载完成");
    },
  },
};
</script>

<style scoped>
.test-container {
  width: 400px;
  height: 400px;
  border: 1px solid red;
  margin: 0 auto;
}
</style>