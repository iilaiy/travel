<template>
  <!-- 返回上一页 -->
  <div class="back" @click="$router.back() ">
    <i class="iconfont icon-fanhui"></i>
  </div>
</template>

<script>
export default {
  name: "Back"
}
</script>

<style lang="scss" scoped>
.back {
  i {
    font-size: .5rem;
    color: #000000;
  }
}
</style>