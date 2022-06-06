react + redux todoList Project 
# Event

---
## 绑定过程 render后执行
1. 处理流程 allNativeEvent（set）把所有的原生事件都代理到root element上 
2. 捕获和冒泡两个过程都绑定  capture true和false 
3. 建立事件名称的映射 map存储 click  --> onClick
4. 绑定事件处理函数 dispatchEvent
---
## 触发过程
1. 获取当前target，根据fiberKey获取fiberNode
2. 根据propKey获取执行函数，基于type匹配
3. 基于fiber的next递归收集
4. 捕获阶段，从父到子执行，队列反响遍历
5. 冒泡阶段， 从子到父执行，遍历队列 （封装了Event,stopPropogation就不执行了）


---
jq的事件处理yyds

