# CORS

cors称为跨域资源共享（cross-origin resource sharing）。允许浏览器跨域请求，只需要在**服务器**端授权即可。

实现cors通信，需要两端，浏览器与服务器。

- 对于浏览器，一旦发现AJAX跨域请求，就会自动添加头部信息，但是用户不会感知到。
- 对于服务器，我们需要实现cors接口，就可以实现跨域通信。

解决了什么？

- cors使得浏览器向跨源服务器发出请求，克服了**同源**使用的限制。

## 同源政策

同源政策是所有浏览器都实行的这个政策。如果缺少了同源政策，浏览器就会容易受到攻击。

### 是什么？

同源指的是三个相同：协议相同，域名相同，端口相同。

### 限制了什么？

- cookie，localstorage等存储性内容不能访问。

- DOM节点无法获取

- AJAX请求不能发送

**当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域**。

<img src="https://user-gold-cdn.xitu.io/2018/5/23/1638b3579dde630e?imageslim" style="zoom:67%;" />

实现一个跨域。

```js
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/index", function (req, res) {
  res.send("Hello World");
});

app.get("/login/:id", function (req, res, next) {
  res.send(req.params.id);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
```

通过express，cors就能实现一个简单的跨域，这里的

