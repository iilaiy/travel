<template>
    <div class="search-conta">
        <form class="search-box">
            <i class="iconfont icon-icon_suosou"></i>
            <input
                    class="search-input"
                    type="search" v-model.lazy.trim="searchInputVal"
                    placeholder="广州到三亚的飞机票"
                    @keyup.enter="searchSubmit()"
            />
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from "vue"
// 搜索框 val
const searchInputVal = ref('')

console.log(searchInputVal.value)


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
        border: 1px solid #b2acaa;
        border-radius: .5rem;
        padding: 0 .3rem;
        .icon-icon_suosou {
            width: 5%;
            font-size: .5rem;
            color: #9b9b9b;
            display: block;
            background-color: transparent;
        }
        .search-input {
            width: 95%;
            height: $input-height;
            background-color: transparent;
            padding-left: 1em;
        }
    }
}

</style>