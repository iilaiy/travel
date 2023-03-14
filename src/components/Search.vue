<template>
    <div class="search-conta">
        <!--   TODO: 搜索框清空按钮点击事件被 .stop.prevent 阻止触发   -->
        <form class="search-box" @click.stop.prevent="inputPaentClick()">
            <i class="iconfont icon-icon_suosou"></i>
            <input
                    class="search-input"
                    type="search" v-model.lazy.trim="searchInputVal"
                    placeholder="粘贴商品标题 搜索优惠"
                    ref="searchInput"
                    @keyup.enter="searchSubmit()"
            />
            <input class="search-btn" @click.stop="searchSubmit()" type="button" value="搜索">
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from "vue"
// 搜索框 val
const searchInputVal = ref('')
const searchInput = ref(null)

console.log(searchInputVal.value)
// TODO: fastclick插件与input聚焦冲突
/**
 * 解决input输入框在移动端点击很多次才能聚焦
 */
const inputPaentClick = () => {
    nextTick(() => {
        searchInput.value && searchInput.value.focus()
    })
}

const searchSubmit = () => {
    console.log("提交啦~~~")
}
</script>

<style lang="scss" scoped>
/* 全局css变量 */
@import "@/assets/css/variable";

.search-conta {
    .search-box {
        height: $input-height;
        display: flex;
        align-items: center;
        background-color: #ffffff;
        border: 1px solid #fe5e15;
        border-radius: .5rem;
        padding-left: .3rem;
        .icon-icon_suosou {
            width: 5%;
            color: #9b9b9b;
            display: block;
            background-color: transparent;
        }
        input {
            border: none;
            outline: none;
        }
        .search-input {
            width: 70%;
            height: $input-height;
            background-color: transparent;
            padding-left: 0.5em;
        }
        .search-btn {
            background-image: linear-gradient(to top, #fc244b 0%, #fc1324 100%);
            color: #ffffff;
            width: 25%;
            height: calc(100% - .1rem);
            margin: .05rem;
            border-radius: .5rem;
        }
    }
}

</style>