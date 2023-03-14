<template>
    <Nav></Nav>
    <main>
        <div class="conta">
            <van-button type="primary" />
        </div>
    </main>
</template>

<script setup>
    import { getCurrentInstance, reactive, ref } from 'vue'
    import Nav from "../components/Nav"
    import { useStore } from "vuex"

    const store = useStore();

    console.log(store.state.count)

    const $axios = getCurrentInstance().appContext.config.globalProperties.$axios;

    // https://autumnfish.cn/search?keywords=关键字
    // 写全请求地址覆盖默认配置的baseURL
    $axios.get("https://autumnfish.cn/search?keywords=关键字").then(res => {
        console.log(res)
    })


</script>

<style lang="scss" scoped>

</style>