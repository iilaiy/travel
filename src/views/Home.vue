<template>
    <header>
        <!-- 城市选择 -->
        <div class="city-option">
            <span>广州</span>
            <i class="iconfont icon-arrow-down"></i>
        </div>
        <!-- 搜索组件 -->
        <div class="search">
            <Search></Search>
        </div>
        <!-- 消息 -->
        <div class="message">
          <i class="iconfont icon-xiaoxi1"></i>
        </div>
    </header>
    <main>
        <div class="conta">
            <!-- banner -->
            <div class="banner">
                <HomeBanner :bannerData="bannerData"></HomeBanner>
            </div>
        </div>
    </main>
</template>

<script setup>
    import Search from "@/components/Search"
    import HomeBanner from "@/components/HomeBanner"
    import { getCurrentInstance, reactive, ref } from 'vue'
    import { useStore } from "vuex"
    const store = useStore();

    const $axios = getCurrentInstance().appContext.config.globalProperties.$axios;
    /**
     * 景点数据
     */
    let scenicSpot = reactive([])

    /*$axios.get("/api/travel.json").then(res => {
        scenicSpot = res.result.value
        console.log(scenicSpot)
    })*/

    const bannerData = reactive([
        {
            imgUrl: require('@/assets/img/banner/05b2ad85ae45525c.jpg')
        },
        {
            imgUrl: require('@/assets/img/banner/11b3b975e8c656c3.jpg')
        },
        {
            imgUrl: require('@/assets/img/banner/b146d69047f689e6.jpg')
        },
        {
            imgUrl: require('@/assets/img/banner/b65569e1a8f42fef.jpg')
        },
    ])



    /**
    * https://www.zcool.com.cn/work/ZNDQ4MTY2MjA=.html
    */
</script>

<style lang="scss" scoped>

header {
    width: 90%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    /* 城市选择 */
    .city-option {
        font-weight: 600;
        span {
            font-size: .4rem;
        }
        i {
            font-size: .1rem;
            margin-left: .1rem;
        }
    }
    /* 搜索框 */
    .search {
        width: 70%;
    }
    /* 消息 */
    .message {
      i {
        font-size: .8rem;
      }
    }
}
main {
    .conta {
        .banner {
            width: 90%;
            margin: 0 auto;
        }
    }
}
</style>