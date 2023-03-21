<template>
    <div class="history">
        <div class="title search-title">
            <h2>历史搜索</h2>
            <i class="iconfont icon-shancu" @click="emptyHistorySearch"></i>
        </div>
        <div class="content">
            <div
                class="box search-box text-one-hidden"
                v-for="item in historySearchList"
                :key="item.id"
                @click="submitInputValue(item)"
            >
                {{ item.keyword }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, defineProps, computed, defineEmits } from 'vue'
const emit = defineEmits(["emptyHistorySearchHandle", "historyHandle"])
const props = defineProps({
    historySearch: Object
})

const historySearchList = computed(() => {
    let arr = []
    props.historySearch.map((item, index) => {
        if (index >= 8) {
            return
        }
        arr.push(item)
    })
    return arr
})
/**
 * 点击删除按钮情况历史搜索记录
 */
const emptyHistorySearch = () => {
    /* 触发父组件方法（清空搜索记录） */
    emit('emptyHistorySearchHandle')
}
/**
 * 点击历史记录同样触发搜索功能
 */
const submitInputValue = val => {
  emit('historyHandle', val.keyword.trim())
}

</script>

<style lang="scss" scoped>
.history {
    .title {
        margin: .1rem 0 .2rem 0;
        i {
            font-size: .5rem;
            color: #8f8f8f;
        }
    }
    .content {
        display: flex;
        flex-wrap: wrap;
        .box {
            max-width: 30%;
            height: .8rem;
            line-height: .8rem;
            padding: 0 .2rem;
        }
    }
}
</style>