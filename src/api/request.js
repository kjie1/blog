import axios from "axios";

import showMessage from "../utils/showMessage";

const ins = axios.create();  //创建一个axios实例
// 拦截响应
ins.interceptors.response.use(function (resp) {
    if(resp.data.code !== 0){
        showMessage({
            content:resp.data.msg,
            type:'error',
            duration:1500,
        });
        return null;
    }
    console.log('resp');
    return resp.data.data;
});
export default ins;