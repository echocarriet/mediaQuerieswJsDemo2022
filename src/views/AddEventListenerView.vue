<template>
  <h2>使用 addEventListener 操作</h2>
  <div class="container text-start">
    <h3>以屏幕宽度 768px 為基準點，當伸縮視窗時</h3>
    <p>≤ 768px 會印出 '屏幕宽度小於等於768px'，box 變黃色(預設黑色)</p>
    <p>> 768px 會印出 '屏幕宽度大於768px'，box 變紅色(預設黑色)</p>
    <div class="box" ref="box"></div>
  </div>
</template>
<script>
export default {
  methods: {
    addEventListenerChangeBox() {
      const mql = window.matchMedia('(max-width: 768px)');
      mql.addEventListener('change', (e) => {
        if (e.matches) {
          this.$refs.box.classList.add('bg-warning');
          this.$refs.box.classList.remove('bg-danger');
          console.log('屏幕宽度小於等於768px');
        } else {
          this.$refs.box.classList.remove('bg-warning');
          this.$refs.box.classList.add('bg-danger');
          console.log('屏幕宽度大於768px');
        }
      });
    },
  },
  mounted() {
    this.addEventListenerChangeBox();
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background: #000;
}
</style>
