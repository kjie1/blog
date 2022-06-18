<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      //显示的页码总量，
      type: Number,
      default: 10,
    },
  },
  computed: {
    //   总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      //得到当前页面显示的最小数字
      let min = this.current - Math.floor(this.visibleNumber / 2);
      //取整是因为用户传的值计算结果会是小数
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      //得到当前页面显示的最大数字
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      let num = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        num.push(i);
      }
      return num;
    },
  },
  methods: {
    handleClick(newPage) {
      // console.log(newPage)
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage == this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 40px 0;
  a {
    margin: 0 6px;
    color: @primary;
    cursor: pointer;
    &:hover {
      color: @danger;
    }
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @dark;
      cursor: text;
      font-weight: bold;
    }
  }
}
</style>