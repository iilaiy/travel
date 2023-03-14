<template>
    <div class="search-conta">
        <form class="search-box" @submit.prevent @click.stop.prevent="inputPaentClick">
            <i class="iconfont icon-icon_suosou"></i>
            <input
                    class="search-input"
                    type="search" v-model.lazy.trim="searchInputVal"
                    placeholder="粘贴商品标题 搜索优惠"
                    ref="searchInput"
                    @keyup.enter="searchSubmit"
            />
            <input class="search-btn" @click.stop="searchSubmit" type="button" value="搜索">
        </form>
    </div>
</template>

<script setup>
import {
    ref,
    reactive,
    onMounted,
    nextTick
} from "vue"
// 搜索框 val
const searchInputVal = ref('')
const searchInput = ref(null)

console.log(searchInputVal.value)
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
/* 搜索框高度 */
$input-height: .9rem;
/* 输入框 placeholder 字体颜色 */
input::-webkit-input-placeholder{
    color: #808283;
}
/* 搜索框的删除图标样式 */
input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: .5rem;
    width: .5rem;
    background: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/328e4d97f9d0d68ea04e872f68e508e3.png) no-repeat;
    background-size: contain;
}

.search-conta {
    .search-box {
        height: $input-height;
        display: flex;
        align-items: center;
        border: 1px solid #b36c6b;
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
            width: 75%;
            height: $input-height;
            background-color: transparent;
            padding-left: 0.5em;
        }
        .search-btn {
            background-color: #fc1326;
            color: #ffffff;
            width: 20%;
            height: calc(100% - .1rem);
            margin: .05rem;
            border-radius: .5rem;
        }
    }
}

</style>