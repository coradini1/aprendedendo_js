Vue.component("click-contador", {
  template: "#click-contador-template",
  data() {
    return {
      count: 0,
    };
  },
});

new Vue({
  el: "#app",
});
