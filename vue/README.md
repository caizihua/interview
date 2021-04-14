# 响应式原理

双向数据绑定的一般方式

- backbone.js中使用的是发布者订阅者模式
- angular中使用的是脏值检查的模式
- vue.js使用的是数据劫持模式

## vue

使用的`Object.defineProperty()`劫持各个属性的setter和getter，在数据变动时发送给订阅者，触发各种监听回调。

入口函数传来了数据，通过方法劫持监听了所有属性，当数据发生变化的时候，我们就通知订阅器找到相应的订阅者，然后更新相应的视图。

![](https://user-gold-cdn.xitu.io/2019/6/4/16b22c8fe2629e68?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)