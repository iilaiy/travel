<template>
    <div class="search-recommendation">
        <div class="title search-title">
            <h2>搜索推荐</h2>
        </div>
        <div
                :class="[ 'content', i === 1 ? 'box-active' : '' ]"
                v-for="i in 4"
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
                北京环球
            </div>
            <div class="box search-box text-one-hidden">
                澳门影城
            </div>
          <input type="text" />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.search-recommendation {
    .title {
        margin: 0 0 .2rem 0;
    }
    .content {
        display: flex;
        flex-wrap: wrap;
        .box {
            max-width: 45%;
            height: .8rem;
            line-height: .6rem;
            padding: .1rem .3rem;
        }
        .first-box {
            padding: .1rem;
            color: #f99c37;
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
            background-color: #f99c37;
        }
    }
}
</style>