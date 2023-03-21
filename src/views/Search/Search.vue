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
            ></InputGroup>
        </div>
    </div>
    <div class="page-margin search-conta">
        <SearchHistory></SearchHistory>
        <SearchRecommendation></SearchRecommendation>
        <HotSearch></HotSearch>
    </div>
</template>

<script setup>
import {ref, reactive, defineProps, onMounted, watch} from "vue";
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
    /* 拿到当前输入框的值并进行搜索查询 */
    /* 记录一条搜索历史 */
    console.log(val)
}

// console.log($route.query)
onMounted(() => {

})

</script>

<style lang="scss" scoped>
.header {
    border-bottom: 1px solid #e5e5e6;
    height: 1.2rem;
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