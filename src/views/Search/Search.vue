<template>
    <div class="header">
        <Back class="back"></Back>
        <div class="search">
            <i class="iconfont icon-icon_suosou"></i>
            <InputGroup
                    class="input-group"
                    :type="inputSearch.type"
                    :placeholder="inputSearch.placeholder"
                    @submitInputValue="submitInputValue"
                    :value="inputSearch.value"
                    @inputHandle="inputHandle"
                    ref="inputEl"
            ></InputGroup>
        </div>
    </div>
    <div class="page-margin search-conta">
        <SearchHistory
                v-if="historySearch.length > 0"
                :historySearch="historySearch"
                @emptyHistorySearchHandel="emptyHistorySearch"
        ></SearchHistory>
        <SearchRecommendation></SearchRecommendation>
        <HotSearch></HotSearch>
    </div>
</template>

<script setup>
import {ref, reactive, defineProps, onMounted, watch, onActivated} from "vue";
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import Back from "@/components/Back";
import InputGroup from "@/components/InputGroup";
import SearchHistory from "@/components/search/SearchHistory"
import SearchRecommendation from "@/components/search/SearchRecommendation"
import HotSearch from "@/components/search/HotSearch"

const $route = useRoute()
const $router = useRouter()

const inputSearch = ref({
    type: 'search',
    placeholder: $route.query.keyword || '搜索目的地/景点/关键词',
    value: '',
})
/**
 *  输入框发生变化时该变value 并传递给子组件
 */
const inputHandle = val => {
    inputSearch.value.value = val
}
/**
 * 接收子组件按下回车时触发submitInputValue事件提交的值
 */
const submitInputValue = val => {
    /* 记录一条搜索历史 */
    /* 先查重 */
    historySearch.forEach((item, index) => {
        if (item.keyword === val) {
            historySearch.splice(index, 1)
        }
    })
    historySearch.unshift(
        {
            id: historySearch.length + 1,
            keyword: val
        }
    )
    /* 将当前搜索历史存到localStorage */
    localStorage.setItem('historySearchList', JSON.stringify(historySearch))
    // console.log(val)
    /* 拿到当前输入框的值跳转搜索页并进行搜索查询 */
    $router.push({
        name:'SearchResult',
        query:{
            keyword: val
        }
    })
}

// console.log($route.query)

/**
 * 历史搜索(读取localStorage的历史搜索)
 */
const historySearch = reactive(
    localStorage.historySearchList && JSON.parse(localStorage.getItem('historySearchList')) || []
)
/**
 *  子组件点击删除按钮时触发该方法清空搜索历史
 */
const emptyHistorySearch = () => {
    historySearch.length = 0
    /* 并且清空本地存储 */
    localStorage.removeItem('historySearchList')
}

const inputEl = ref(null)


onMounted(() => {
    /**
     * 进入页面输入框自动获取焦点
     */
    // console.log(inputEl.value.$el.childNodes[2].childNodes[1])
    inputEl.value.$el.childNodes[2].childNodes[1].focus()
})
/* 实现局部组件刷新 */
onActivated(() => {
    // 页面每次进入将输入框的值清空
    inputSearch.value.value = ''
    // 每次进入页面都自动获取焦点
    inputEl.value.$el.childNodes[2].childNodes[1].focus()
})
</script>

<style lang="scss" scoped>
.header {
    border-bottom: 1px solid #e5e5e6;
    height: 1.5rem;
    padding: 0 .8rem 0 .3rem;
    display: flex;
    align-items: center;
    .back {
        width: 1rem;
    }
    .search {
        flex: 1;
        display: flex;
        align-items: center;
        background-color: #f7f7f7;
        border: 1px solid #e5e5e6;
        border-radius: .4rem;
        i {
            width: .35rem;
            text-align: center;
            margin-left: .4rem;
            color: #999c9f;
        }
        .input-group::v-deep {
            flex: 1;
            input {
                text-indent: 1em;
                font-size: .3rem;
            }
        }
    }
}
.search-conta {
    padding-bottom: .8rem;
}
</style>