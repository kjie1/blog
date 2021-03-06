import Home from '@/views/Home';
import About from '@/views/About';
import Blog from '@/views/Blog';
import Message from '@/views/Message';
import Project from '@/views/Project';
import BlogDetail from "@/views/Blog/Detail";

export default [
    // 里面的name是命名路由
    { name: "Home", path: "/", component: Home },
    { name: "About", path: "/about", component: About },
    { name: "Blog", path: "/article", component: Blog },
    { name: "CategoryBlog", path: "/article/cate/:categoryId", component: Blog },
    { name: "BlogDetail", path: "/article/:id", component: BlogDetail },
    // { name: "CategoryBlog", path: "/article/cate/:categoryId1/:categoryId2/:categoryId3", component: Blog },
    { name: "Message", path: "/message", component: Message },
    { name: "Project", path: "/project", component: Project },
];