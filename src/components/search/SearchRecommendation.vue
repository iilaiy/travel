<template>
    <div class="search-recommendation">
        <div class="title">
            <h2>搜索推荐</h2>
        </div>
        <div
                :class="[ 'content', i === 1 ? 'box-active' : '' ]"
                v-for="i in 3"
                :key="i"
        >
            <div class="first-box search-box box">
                <i class="iconfont icon-hot-for-atmosphere"></i>
                <span>推荐</span>
            </div>
            <div class="box search-box text-one-hidden">
                北京环球影城
            </div>
            <div class="box search-box text-one-hidden">
                北京环球影城
            </div>
            <div class="box search-box text-one-hidden">
                澳门
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.search-recommendation {
    .title {
        margin: 0 0 .2rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
            font-size: .38rem;
            font-weight: bold;
        }
    }
    .content {
        display: flex;
        flex-wrap: wrap;
        .box {
            max-width: 30%;
            height: .8rem;
            line-height: .6rem;
            padding: .1rem .3rem;
        }
        .first-box {
            line-height: normal;
            color: #fe6e6c;
            display: flex;
            align-items: center;
            flex-direction: column;
            i {
              font-size: .35rem;
            }
            span {
              font-size: .25rem;
            }
        }
    }
    .box-active {
        .box:first-child {
            color: #FFFFFF;
            background-color: #fe6e6c;
        }
    }
}
</style>