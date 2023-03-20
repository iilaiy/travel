<template>
  <ul class="list">
    <!-- 点击字母时,触发跳转事件 -->
    <li class="item">历史热门</li>
    <li
        class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>

<!--  @touchstart="handleTouchStart"
  @touchmove="handleTouchMove"
  @touchend="handleTouchEnd"
  -->
</template>

<script>
// TODO: 滚动右侧随着对应区域字母高亮
export default {
  name: "Alphabet.vue",
  props: ['cities'],
  data() {
    return {
    }
  },
  methods: {
    handleLetterClick(e) {
      /* 向父组件传递当前点击的字母 */
      this.$emit('jumpCity', e.target.innerText)
    }
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 8%;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  .item {
    text-align: center;
    font-size: .3rem;
    line-height: .5rem;
    color: #976666;
  }
}
</style>