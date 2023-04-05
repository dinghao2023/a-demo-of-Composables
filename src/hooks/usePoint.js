import {reactive,onMounted,onBeforeUnmount} from "vue"
export default function() {
    //实现鼠标打点的数据
    let point = reactive({
        x:0,
        y:0
    })
    //实现鼠标打点的方法
    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
    }
    onMounted(() => {
        window.addEventListener("click", savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener("click", savePoint)
    })
    return point
}