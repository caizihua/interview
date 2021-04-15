//depend收集依赖，notify通知依赖了的各项数据进行更新
class Dep {
  constructor() {
    this.subscribers = new Set();
  }
  depend() {
    if (activeUpdate) {
      //收集依赖
      this.subscribers.add(activeUpdate);
    }
  }
  notify() {
    //通知依赖
    this.subscribers.forEach((sub) => sub());
  }
}
const dep = new Dep();
let activeUpdate;
//使用wrappedUpdate是当依赖改变时，update就会改变，不断收集依赖
function autorun(update) {
  function wrappedUpdate() {
    activeUpdate = wrappedUpdate;
    update();
    activeUpdate = null;
  }
  wrappedUpdate();
}

//执行autorun的时候depend()就可以访问activeUpdate开始收集依赖
//收集依赖之后需要添加到订阅者中
autorun(() => {
  dep.depend();
  console.log("updated");
});
dep.notify();
