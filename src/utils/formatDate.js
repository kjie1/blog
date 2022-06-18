export default function(timestamp){
    const date = new Date(+timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2,"0");
    const day = date.getDate().toString().padStart(2,"0");  // 字符串中的方法padStart(2,"0"),表示数字后面不足两位数的时候就在前面填充0；
    return `${year} - ${month} - ${day}`;
}