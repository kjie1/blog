<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
    home:"iconhome-page",
    success:"iconzhengque",
    error:"iconcuowu",
    close:"iconguanbi",
    warn:"iconjinggao",
    info:"iconfl-xinxi",
    blog:"iconblog",
    code:"iconcode",
    about:"iconset_about_hov",
    weixin:"iconweixin",
    mail:"iconemail",
    github:"icongithub",
    qq:"iconQQ-circle-fill",
    arrowUp:"icontubiaozhizuo-",
    arrowDown:"iconiconfonticonfonti2",
    empty:"iconempty",
    chat:"iconliuyan"
};
export default {
    props:{
        type:{
            type:String,
            required:true,
        }
    },
    computed:{
        fontClass(){
            return classMap[this.type];
        }
    }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2499518_v035vsoo6t.css";
.iconfont{
    color:inherit;
    font-size:inherit;
}
</style>