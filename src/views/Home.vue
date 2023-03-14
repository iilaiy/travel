<template>
    <header>
        <!-- 搜索组件 -->
        <div class="search">
            <Search></Search>
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
    width: 96%;
    height: 1.8rem;
    display: flex;
    align-items: center;
    margin: 0 auto;
    .search {
        width: 82%;
    }
}
</style>