<template>
    <div class="history">
        <div class="title search-title">
            <h2>历史搜索</h2>
            <i class="iconfont icon-shancu"></i>
        </div>
        <div class="content">
            <div class="box search-box">
                北京
            </div>
            <div class="box search-box text-one-hidden" v-for="i in 2">
                广州到三亚飞机票
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchHistory"
    }
</script>

<style lang="scss" scoped>
.history {
    .title {
        margin: .3rem 0 .2rem 0;
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