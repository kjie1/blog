// vue-cli的配置文件    

module.exports = {
    devServer:{  //搭建服务器
        proxy:{   //代理
            "/api":{
                target:"http://test.my-project.com"
            }
        }
    }
}