<template>
    <header>
        <!-- 搜索组件 -->
        <div class="search">
            <Search></Search>
        </div>
        <!-- 签到 -->
        <div class="sign-in">
          <img src="@/assets/img/icon/10001.png" alt="">
        </div>
        <!-- 消息 -->
        <div class="message">
          <i class="iconfont icon-xiaoxi"></i>
        </div>
    </header>
    <main>
        <div class="conta">
<!--            <van-button type="primary" />-->
        </div>
    </main>
</template>

<script setup>
    import Search from "@/components/Search"
    import { getCurrentInstance, reactive, ref } from 'vue'
    import { useStore } from "vuex"

    const store = useStore();

    console.log(store.state.count)

    const $axios = getCurrentInstance().appContext.config.globalProperties.$axios;

    // https://autumnfish.cn/search?keywords=关键字
    // 写全请求地址覆盖默认配置的baseURL
    $axios.get("https://autumnfish.cn/search?keywords=关键字").then(res => {
        console.log(res)
    })


    /**
    * https://www.zcool.com.cn/work/ZNjMwNjM3MDA=.html
    */
</script>

<style lang="scss" scoped>

header {
    width: 94%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    /* 搜索框 */
    .search {
        width: 78%;
    }
    /* 签到 */
    .sign-in {
      height: .9rem;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    /* 消息 */
    .message {
      width: 9%;
      i {
        font-size: 1rem;
      }
    }
}
</style>