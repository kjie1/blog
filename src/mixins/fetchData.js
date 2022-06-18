// 公共的远程获取数据的代码
// 具体的组建中，需要提供一个远程获取数据的方法   fetchData
export default function (defaultDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValue,
            }
        },
        async created() {
            this.data = await this.fetchData();   // 将远程获取的数据保存到data里面
            this.isLoading = false;
        } 
    }
}