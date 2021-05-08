window.x = "window";
let a = {
  x: "local",
  b() {
    let c = () => {
      console.log(this.x);
    };
    let d = function () {
      console.log(this.x);
    };
    c();
    d();
  },
};

a.b();
