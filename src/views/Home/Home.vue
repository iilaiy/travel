<template>
    <header>
        <div class="conta page-margin">
            <!-- 城市选择 -->
            <div class="city-option" @click="$router.push('/city')">
                <span class="text-one-hidden">{{ city.name }}</span>
                <i class="iconfont icon-arrow-down"></i>
            </div>
            <!-- 搜索组件 -->
            <div class="search">
                <HomeSearch :hotSearch="hotSearch"></HomeSearch>
            </div>
            <!-- 消息 -->
            <div class="message" @click="toMessage()">
                <i class="i-active iconfont icon-iconfontxiaoxidianji"></i>
            </div>
        </div>
    </header>
    <main>
        <div class="conta">
            <!-- banner -->
            <div class="banner page-margin">
                <HomeBanner :bannerData="bannerData"></HomeBanner>
            </div>
            <!-- menu -->
            <div class="menu">
              <HomeMenu></HomeMenu>
            </div>
            <!-- TabBar -->
            <div class="tab-bar">
                <HomeTabBar :homeTabBar="homeTabBar" :currentCom="currentCom" @switchCom="switchCom"></HomeTabBar>
            </div>
            <!-- 内容 -->
            <!-- 点击不同tab-bar切换相应组件 -->
            <div class="content">
                <div class="content-margin">
<!--                    条件渲染组件-->
<!--                    <component :is="currentCom.comName"></component>-->
<!--                    组件缓存-->
                    <keep-alive>
                        <component :is="currentCom.comName"></component>
                    </keep-alive>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <!-- 底部tab-bar -->
        <TabBar></TabBar>
    </footer>
</template>

<script setup>
    import { getCurrentInstance, reactive, ref, onMounted, nextTick, computed, markRaw } from 'vue'
    import HomeSearch from "@/components/home/HomeSearch"
    import HomeMenu from "@/components/home/HomeMenu"
    import HomeBanner from "@/components/home/HomeBanner"
    import HomeTabBar from "@/components/home/HomeTabBar"
    import TabBar from "@/components/TabBar"
    import HomeSelect from "@/views/Home/HomeSelect"
    import HomePeripheral from "@/views/Home/HomePeripheral"
    import HomeScenicSpot from "@/views/Home/HomeScenicSpot"
    import HomeGourmetFood from "@/views/Home/HomeGourmetFood"
    import HomeTheme from "@/views/Home/HomeTheme"
    import { useStore } from "vuex"
    import { useRoute, useRouter } from 'vue-router'
    const store = useStore();
    const $axios = getCurrentInstance().appContext.config.globalProperties.$axios;
    const $route = useRoute()
    const $router = useRouter()
    let {getters} = useStore();

    // 地区(调用getters方法读取属性最新的值)
    const city = computed(() => getters['doubleCity'])
    // const scenicSpot = computed(() => getters['getScenicSpotList'])
    /**
     * 景点数据
     */

    /* TODO: 后期有后台接口改为按照地区请求对应城市数据 */
    /* 请求精选数据并存储到store */
    const getTravel = () => {
        $axios.get("/api/travel.json").then(res => {
            store.commit('changeScenicSpotList', res.data.eList)
        }).catch(e =>{
            throw '请求失败'
        })
    }

    // http://apis.juhe.cn/fapigx/scenic/query
    // word=&num=&page=&province=&city=&key=92cefc1a******abdd47c3
    /*$axios.get('/api/scenic/query', {
        word: '留园',
        num: 10,
        page: 2,
        province: '江苏',
        city: '苏州',
        key: '92cefc1a7eca807415fe13a2abdd47c3'
    }).then(res => {
        console.log(res)
    }).catch(e => {
        console.log(e)
    })*/

    onMounted(() => {
        getTravel()
    })
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
     * 跳转消息页面登录验证
     */
    const toMessage = () => {
        $router.push('/message')
    }

    /**
     * tab-bar组件数据
     */
    const homeTabBar = reactive([
        {
            id: 1,
            title: '精选',
            comName: markRaw(HomeSelect)
        },
        {
            id: 2,
            title: '主题',
            comName: markRaw(HomeTheme)
        },
        {
            id: 3,
            title: '周边',
            comName: markRaw(HomePeripheral)
        },
        {
            id: 4,
            title: '景点',
            comName: markRaw(HomeScenicSpot)
        },
        {
            id: 5,
            title: '美食',
            comName: markRaw(HomeGourmetFood)
        }
    ])
    /* 默认显示精选组件 */
    let currentCom = reactive({
        id: homeTabBar[0].id,
        comName: homeTabBar[0].comName
    })
    /* 接收子组件HomeTabBar传递过来的值（当前点击的tab-bar） */
    const switchCom = val => {
        // console.log(val)
        currentCom.id = val.id
        currentCom.comName = val.comName
    }

    /**
     * 热门搜索
     */
    const hotSearch = reactive([
      {
        id: 1,
        keyword: '广州到三亚飞机票'
      },
      {
        id: 2,
        keyword: '沙面'
      }
    ])

    /**
     * https://www.zcool.com.cn/work/ZNDQ4MTY2MjA=.html
     *
     * https://market.m.taobao.com/app/trip/rx-home/pages/home?_projVer=2.0.8
     *
     * 接口：
     *  https://dashboard.juhe.cn/data/index/my
     *  https://justdoit.blog.csdn.net/article/details/89290195?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-89290195-blog-104498668.pc_relevant_multi_platform_whitelistv3&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-89290195-blog-104498668.pc_relevant_multi_platform_whitelistv3&utm_relevant_index=1
     */
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable";

header {
    width: 100%;
    position: fixed;
    top: 0;
    background: url("@/assets/img/comm/bg.png") no-repeat;
    background-size: 100%;
    z-index: 999;
    .conta {
        height: $nav-height;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    /* 城市选择 */
    .city-option {
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
        margin-top: .3rem;
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
    margin-top: $nav-height;
    background: url("@/assets/img/comm/bg.png") no-repeat;
    background-position: 0 -1.6rem;
    background-size: 100%;
    .conta {
        .menu {
            width: $menu-width;
            height: 41.6vw;
            margin: 3.2vw auto 0 auto;
        }
        .banner {

        }
        .content {
            background-color: #f8f8f8;
            .content-margin {
                width: 95%;
                margin: 0 auto;
            }
        }
    }
}
footer {
    height: $tab-bar-height;
}
</style>