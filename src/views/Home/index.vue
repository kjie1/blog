<template>
  <div
    v-loading="isLoading"
    class="home-container"
    ref="container"
    @wheel="handleWheel"
  >
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <!-- 上箭头，在第一张的时候不显示，就是index >= 1 的时候才显示 -->
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <!-- 下箭头，在最后一张的时候不显示，在index < banners.length - 1 的时候才显示 -->
    <div
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{
          active: i === index,
        }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
    <!-- <Loading v-if="isLoading" /> -->
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import CarouselItem from "./Carouselitem";
import Icon from "@/components/Icon";
import fetchData from "@/mixins/fetchData.js";
// import Loading from "@/components/Loading";
export default {
  mixins: [fetchData([])], // 调用fetchData()默认值是一个空数组；
  components: {
    CarouselItem,
    Icon,
    // Loading,
  },
  data() {
    return {
      // isLoading: true,
      // banners: [], // 先给他一个空数组，现在还没有获取到数据，远程数据还没有加载过来
      index: 0, // 当前显示的是第几张轮播图；
      containerHeight: 0, // 表示整个容器的高度
      switching: false, // 表示是否滚动中
    };
  },
  // async created() {
  //   this.banners = await getBanners(); // 等待一段时间，返回一个数组，然后重新给数组banners赋值
  //   // 当数据拿到之后，将isLoading设置为false；
  //   this.isLoading = false;
  // },
  mounted() {
    // 利用ref获取DOM元素的宽高，将值赋给containerHeight
    this.containerHeight = this.$refs.container.clientHeight;
    // console.log(this.containerHeight);
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    // 点击切换到哪一页
    switchTo(i) {
      // i是下标
      this.index = i;
    },
    handleWheel(e) {
      // 如果在滚动中，不触发后面的
      if (this.switching) {
        return;
      }

      // 否则向上移动距离大于5,并且不是第一张  switching=true;
      if (e.deltaY < -5 && this.index > 0) {
        this.index--;
        this.switching = true;
        // 向下移动距离大于5  switching=true;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.index++;
        this.switching = true;
      }
    },
    // 翻动完成之后switching=false
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    async fetchData() {
      return await getBanners();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  // width:60%;
  // height:40%;
  // overflow:visible;
  // border:2px solid #008c8c;
  // margin:100px auto;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}

.icon {
  .self-center();
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  @gap: 25px;
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }

  @jump: 8px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: @words;
    margin-bottom: 10px;
    cursor: pointer;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: #fff;
    }
  }
}
</style>