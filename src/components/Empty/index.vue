<template>
  <div class="empty-container">
      <Icon type="empty"/>
      <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon/index.vue";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
    .self-center();
    text-align: center;
    // line-height:100%;
}
.icon-container{
    font-size:5rem;
    color:@gray;
}
</style>