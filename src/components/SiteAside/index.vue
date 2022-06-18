<template>
  <div class="site-aside-container">
      <Avatar url="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3264492608,3781702583&fm=26&gp=0.jpg"/>
      <h2>kang杰的博客</h2>
      <Menu/>
      <Contact/>
      <p class="footer"> 京ICP备16001918号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
    components:{
        Avatar,
        Menu,
        Contact
    }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container{
    width:100%;
    height:100%;
    // background:@dark;
    background:url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.leishen.cn%2Fwallpaper%2F1571885411930832019_R.jpg%3FimageView2%2F1%2Fw%2F380%2Fh%2F214&refer=http%3A%2F%2Fcdn.leishen.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646970385&t=cc87eb67e7478e879e1433d958a1cacc");
    padding:20px 0;
    box-sizing:border-box;
    overflow-x:hidden;
    overflow-y:auto;
    h2{
        text-align:center;
        color:#eee;
    }
    p{
        text-align: center;
        font-size:12px;
    }
}
.avatar-container{
    margin:0 auto;
}
</style>