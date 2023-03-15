<template>
    <div class="tab-bar">
        <div class="bottomNav">
            <div
                class="navBox"
                v-for="(item, i) in tabBarNavList"
                :key="i"
                :class="[ i === active ? 'navBox-active' : '' ]"
            >
                <i :class="[ 'iconfont', item.iconPath ]"></i>
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
        title: '首页',
        iconPath: 'icon-Home',
    },
    {
        title: '攻略',
        iconPath: 'icon-biaoqiankuozhan_gonglve-329',
    },
    {
        title: '发布',
        iconPath: 'icon-fabu',
    },
    {
        title: '行程',
        iconPath: 'icon-hangcheng',
    },
    {
        title: '我的',
        iconPath: 'icon-wode',
    },
])
const active = ref(0)
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable";
/* 被选中 */
$active-color: #65b8fb;
/* 中间选项的宽高 */
$center-option-wh: 1.3rem;

.tab-bar {
  width: 100%;
  height: 1.8rem;
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
            i {
              display: block;
              font-size: .7rem;
            }
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
              height: $center-option-wh;
              width: $center-option-wh;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: .6rem;
              color: $background-primary;
              border: .1rem solid $background-primary;
              margin: -$center-option-wh auto 0 auto;
              background-color: $active-color;
              border-radius: 50%;
            }
        }
    }
}
</style>