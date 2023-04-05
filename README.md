##### 自定义hook函数（组合式函数Composables） 

- 什么是hook？—— 本质是一个函数，把setup函数中使用的Composition API进行了封装，即利用 Vue 的组合式 API 来封装和复用**有状态逻辑**的函数。

- 类似于vue2.x中的mixin。

- 自定义hook的优势: 复用代码, 让setup中的逻辑更清楚易懂。

  ```js
  //在hooks/usePoint.js中自定义hook函数：
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
  //实现在Demo组件当中引入并在组件模板通过{{point.x}}、{{ point.y }}使用：
  import { ref } from "vue"
  import userPoint from "../hooks/usePoint"
  export default {
      name: "Demo",
      setup() {
          let point = userPoint()
          return {point}
      }
  }
  ```
