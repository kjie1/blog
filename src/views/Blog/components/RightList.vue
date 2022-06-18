<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">
        {{ item.name }}
      </span>
      <span class="aside" @click="handleClick(item)" v-if="item.aside" :class="{ active: item.isSelect }">
        {{ item.aside }}
      </span>
      <!-- 显示当前组件 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  // 当组件缺失的时候，且无法注册组件的时候可以使用name
  name: "RightList",
  props: {
    //   数组里面的每一项： isSlect<表示是否被选中>
    // [{ name:'xxx',isSelect:true, children:[{name:'xxx',isSelect:false,child:[] ] }]
    list: {
      type: Array, // 列表的类型是一个数组
      // 默认是一个空数组。
      // 默认是数组或对象，把它写成一个函数，函数的返回结果就是默认值
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        // 当前不是选中状态的时候才会触发
        this.$emit("select", item); // 选中的时候触发事件
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    // 最外层没有margin，下面的margin才有margin
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;
    .active {
      font-weight: bold;
      color: @warn;
    }
  }
  .aside{
    font-size: 12px;
    margin-left:1em;
    color:@gray;
  }
}
</style>