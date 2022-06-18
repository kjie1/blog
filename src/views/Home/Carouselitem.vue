<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
      <ImageLoader
        @load="this.showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <!-- <div class="test">横坐标：{{ mouseX }}, 纵坐标：{{ mouseY }}</div> -->
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, // 外层容器 的尺寸
      innerSize: null, // 内层图片的尺寸
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;

    this.setSize();
    // 初始化鼠标位置
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize); // 当窗口改变大小的时候，重新赋值
  },
  destroyed() {
    // 销毁组件
    window.addEventListener("resize", this.setSize);
  },
  computed: {
    // 得到图片坐标
    imagePosition() {
      // 首先判断innerWidth有没有值；
      if (!this.innerSize || !this.containerSize) {
        // 如果两个都没有值,返回undefined
        return;
      }

      const extraWidth = this.innerSize.width - this.containerSize.width; // 多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; // 多出的高度
      // x / this.mouseX = -extraWidth / this.containerSize.width;
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      // console.log(extraWidth, extraHeight);
      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },
    center() {
      return {
        // 鼠标的坐标，中间的坐标是容器除以2
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  methods: {
    // 调用该方法显示文字
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制让浏览器渲染
      // 只要读取DOM元素的宽度、高度、位置等，都会导致从新渲染。
      this.$refs.title.clientWidth; //
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      // 强制让浏览器渲染
      // 只要读取DOM元素的宽度、高度、位置等，都会导致从新渲染。
      this.$refs.desc.clientWidth; //
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize() {
      // 在mounted里面，此时才有DOM对象
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };

      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
      // console.log(this.innerSize, this.containerSize);
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      // console.log(this.mouseX, this.mouseY);
      // console.log(rect);
      // console.log(e.clientX,e.clientY);
    },
    handleMouseLeave(e) {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  // background: @dark;
  color: #fff;
  position: relative;
  overflow:hidden;
}
.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  left: 0;
  top: 0;
  // z-index: -1;
  transition: 0.3s;
}
.title,
.desc {
  position: absolute;
  left: 30px;
  letter-spacing: 3px;
  color: #fff;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
}
.title {
  top: calc(50% - 40px);
  font-size: 2em;
}
.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 20%);
}
</style>