<template>
    <div class="menu-conta">
        <div class="top">
            <div class="box" v-for="(item, i) in levelOneMenuData" :key="i">
                <a href="">
                    <i>
                        <img :src="item.iconPath" alt="" />
                    </i>
                    <span>{{ item.title }}</span>
                </a>
            </div>
        </div>
        <div class="bot swiper-container">
            <div class="bot-wrapper swiper-wrapper">
                <div
                        class="box swiper-slide"
                        v-for="(item, i) in levelTwoMenuData"
                        :key="i"
                >
                    <a href="">
                        <i :class="[ 'iconfont', item.iconPath ]"></i>
                        <span>{{ item.title }}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps } from 'vue'
import 'swiper/swiper-bundle.css';
import Swiper from "swiper/swiper-bundle.min.js"

/**
 * 首页菜单栏数据
 */
const levelOneMenuData = reactive([
    {
        title: '机票',
        iconPath: require('@/assets/img/icon/index_nav_en.213dedbc.png'),
    },
    {
        title: '火车票',
        iconPath: require('@/assets/img/icon/train_ticket.png'),
    },
    {
        title: '酒店',
        iconPath: require('@/assets/img/icon/index_nav_hotel.19e12527.png'),
    },
    {
        title: '旅游',
        iconPath: require('@/assets/img/icon/index_nav_free.b8cb8c43.png'),
    },
    {
        title: '门票',
        iconPath: require('@/assets/img/icon/meng_piao.png'),
    },
])
const levelTwoMenuData = reactive([
    {
        title: '签证',
        iconPath: 'icon-guojijipiao',
    },
    {
        title: '用车',
        iconPath: 'icon-icon_yongche',
    },
    {
        title: '民宿',
        iconPath: 'icon-building',
    },
    {
        title: '天气',
        iconPath: 'icon-tianqi',
    },
    {
        title: '信用卡',
        iconPath: 'icon-xinyongqia',
    },
    {
        title: '保险',
        iconPath: 'icon-a-wodebaoxian3x',
    },
    {
        title: '翻译助手',
        iconPath: 'icon-weibiaoti556',
    },
    {
        title: '活动赛事',
        iconPath: 'icon-mingxinghuodong',
    },
])

onMounted(() => {
  new Swiper ('.bot', {
    slidesPerView: 5,
    centeredSlidesBounds: true,
  })
})

</script>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.menu-conta {
    .box {
        overflow: hidden;
        display: inline-block;
        width: calc(20% - .5rem);
        margin: .25rem;
    }
    .bot {
        width: $menu-width;
        .bot-wrapper {
            .box {
                width: calc(100% / 5 - .5rem) !important;
                i {
                    font-size: .8rem;
                    display: block;
                    margin: 0 auto;
                    color: #fe6862;
                }
                span {
                    display: block;
                    margin-top: .1rem;
                }
            }
        }
    }

    a {
        display: block;
        text-align: center;
    }
    img {
        width: 100%;
        height: 100%;
        display: block;
    }
    span {
        color: #4d4f52;
    }
}
</style>