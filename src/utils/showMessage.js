import getComponentRootDOM from "./getComPonentRootDOM";
import Icon from '@/components/Icon';
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content  消息内容 
 * @param {*} type  消息类型 info error success warn
 * @param {*} duration 消息显示时长
 * @param {*} container   容器，消息会显示在容器的正中间，如果不传则显示在页面正中间
 */
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || 'info';
    const duration = options.duration || 2000;

    const container = options.container || document.body;
    // 创建消息元素
    const div = document.createElement('div');
    const iconDom = getComponentRootDOM(Icon, {
        type,
    });
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
    // 设置样式
    const typeClassName = styles[`message-${type}`]; //类型样式名
    div.className = `${styles.message} ${typeClassName}`;

    // 将div加入到容器中
    // 如果在容器里面居中，那么这个容器(div)里面的消息框要绝对定位，容器也要定位
    // 容器的position是否改动过
    if (options.container) {
        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative';
        }
    }

    container.appendChild(div);
    // 浏览器强行渲染
    div.clientHeight;

    // 回到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`;

    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-50%) translateY(-15px)`;
        div.addEventListener("transitionend", function () {
            div.remove();
            // 运行回调函数
            options.callback && options.callback();
        }, { once: true });
    }, duration)
}