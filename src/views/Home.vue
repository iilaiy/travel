<template>
    <header>
        <div class="conta">
            <!-- 城市选择 -->
            <div class="city-option">
                <span class="text-one-hidden">广州</span>
                <i class="iconfont icon-arrow-down"></i>
            </div>
            <!-- 搜索组件 -->
            <div class="search">
                <HomeSearch></HomeSearch>
            </div>
            <!-- 消息 -->
            <div class="message">
                <i class="i-active iconfont icon-iconfontxiaoxidianji"></i>
            </div>
        </div>
    </header>
    <main>
        <div class="conta">
            <!-- banner -->
            <div class="banner">
                <HomeBanner :bannerData="bannerData"></HomeBanner>
            </div>
            <!-- menu -->
            <div class="menu">
              <HomeMenu></HomeMenu>
            </div>
            <!-- TabBar -->
            <div class="tab-bar">
                <HomeTabBar></HomeTabBar>
            </div>
            <!-- 内容 -->
            <div class="content"></div>
        </div>
    </main>
    <footer>
        <TabBar></TabBar>
    </footer>
</template>

<script setup>
    import HomeSearch from "@/components/home/HomeSearch"
    import HomeMenu from "@/components/home/HomeMenu"
    import HomeBanner from "@/components/home/HomeBanner"
    import HomeTabBar from "@/components/home/HomeTabBar"
    import TabBar from "@/components/TabBar"
    import { getCurrentInstance, reactive, ref, onMounted, nextTick } from 'vue'
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
     *
     * https://market.m.taobao.com/app/trip/rx-home/pages/home?_projVer=2.0.8
     */
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable";

header {
    width: 100%;
    position: sticky;
    top: 0;
    background: url("@/assets/img/comm/bg.png") no-repeat;
    background-size: 100%;
    z-index: 999;
    .conta {
        width: 90%;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }
    /* 城市选择 */
    .city-option {
        font-weight: 600;
        display: flex;
        align-items: center;
        span {
            max-width: 1.2rem;
            font-size: .4rem;
        }
        i {
            margin-top: .1rem;
            font-size: .35rem;
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
        color: #f2f2f2;
        position: relative;
      }
      .i-active::after {
        content: '';
        position: absolute;
        right: 0;
        width: .2rem;
        height: .2rem;
        background-color: #fe6862;
        border-radius: 50%;
      }
    }
}
main {
    background: url("@/assets/img/comm/bg.png") no-repeat;
    background-position: 0 -2rem;
    background-size: 100%;
    .conta {
        .menu {
            width: $menu-width;
            height: 41.6vw;
            margin: 3.2vw auto 0 auto;
        }
        .banner {
            width: 90%;
            margin: 0 auto;
        }
        .content {
            width: 100%;
            height: 50vh;
            background-color: #f8f8f8;
        }
    }
}
</style>