# HTML

## HTML新特性，语义化

语义标签，类似`<header></header>`类似标签。

增强型表单，有更多的属性。

视频和音频，使用`<audio></audio>`

`canvas`绘图

`svg`绘图

`Geolocation`获取地理位置

拖放API

`WebWorker`

`WebSocket`

# JS

## JS为什么是单线程？为什么需要异步？

如果是多线程，如果两个线程对dom进行同时操作，这时就无法处理矛盾的命令。

如果没有异步，全是同步，那么就是自上而下运行的，如果上一行解析时间过长，就会阻塞下面的代码，对于用户而言就代表着卡死，严重影响了用户体验。

## 什么是js的执行机制？

通过理解事件循环（event loop）机制，就能理解js执行机制。

- 首先判断js是同步还是异步，同步进入event table。

- 异步任务在event table中注册函数，当满足触发条件后，进入event queue
- 同步任务进入主线程后一直执行，直到主线程空闲时，才会去event queue中查看是否有可执行的异步任务，如果有就推入主线程中。

以上三步循环执行，称为事件循环。

然而同步与异步的划分仍然不准确。更准确的划分应该是宏任务与微任务：

macro-task（宏任务）：script整体代码，setTimeOut，setInterval

micro-task（微任务）：Promise，process.nextTick

于是js执行机制为：

- 执行宏任务，如果遇到微任务，推入事件队列中。
- 当前宏任务执行完毕，查看微任务的事件队列，如果有就执行。
