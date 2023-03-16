<template>
    <div class="tab-bar">
        <div class="bottomNav">
            <div
                class="navBox"
                v-for="item in tabBarNavList"
                :key="item.id"
                :class="[ item.id === active ? 'navBox-active' : '' ]"
            >
                <i>
                  <img v-show="active !== item.id" :src="item.iconPath" alt="">
                  <img v-show="active === item.id" :src="item.iconSelectPath" alt="">
                </i>
                <span>{{ item.title }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
/**
 * 底部tab-bar数据
 */
const tabBarNavList = reactive([
    {
        id: 1,
        title: '首页',
        iconPath: require('@/assets/img/icon/img1.4ac4c20c.png'),
        iconSelectPath: require('@/assets/img/icon/img1.4ac4c20c_active.png'),
        hrefs: '/home',
    },
    {
        id: 2,
        title: '攻略',
        iconPath: require('@/assets/img/icon/gonglue.png'),
        iconSelectPath: require('@/assets/img/icon/gonglue-active.png'),
        hrefs: '/',
    },
    {
        id: 3,
        title: '发布',
        iconPath: require('@/assets/img/icon/fabu.png'),
        iconSelectPath: require('@/assets/img/icon/fabu.png'),
        hrefs: '/',
    },
    {
        id: 4,
        title: '订单',
        iconPath: require('@/assets/img/icon/img2.12aa5813.png'),
        iconSelectPath: require('@/assets/img/icon/img22.98e00f94.png'),
        hrefs: '/',
    },
    {
        id: 5,
        title: '我的',
        iconPath: require('@/assets/img/icon/img3.8fd2bd15.png'),
        iconSelectPath: require('@/assets/img/icon/img33.3d66679c.png'),
        hrefs: '/',
    },
])
const active = ref(1)
// TODO: 点击切换相应页面并且改变高亮
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable";
/* 被选中 */
$active-color: #ffc900;
/* 中间选项的宽高 */
$center-option-wh: 1.2rem;

.tab-bar {
  width: 100%;
  height: $tab-bar-height;
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: $background-primary;
    .bottomNav {
        height: 100%;
        padding-top: .1rem;
        .navBox {
            width: calc(100% / 5);
            display: inline-block;
            text-align: center;
            color: #696a6c;
            span {
              display: block;
              margin-top: .1rem;
            }
        }
        .navBox-active {
            color: $active-color;
        }
        .navBox:nth-child(3) {
            i {
              display: flex;
              align-items: center;
              justify-content: center;
              height: $center-option-wh;
              width: $center-option-wh;
              border: .1rem solid $background-primary;
              margin: -$center-option-wh auto 0 auto;
              background-color: $active-color;
              border-radius: 50%;
              img {
                width: 80%;
                display: block;
              }
            }
        }
    }
}
</style>