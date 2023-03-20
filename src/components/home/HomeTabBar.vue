<template>
    <div class="tab-bar-conta swiper-container">
        <ul class="tb-list swiper-wrapper" ref="nav" :class="[isSticky ? 'sticky' : '']">
            <span
                    class="tb-list-active"
                    :style="{left: `${left}vw`}"
            ></span>
            <li
                    :class="[ 'swiper-slide', currentCom.comName === item.comName ? 'li-active' : '']"
                    v-for="item in homeTabBar"
                    :key="item.id"
                    @click="switchTab(item)"
            >
               {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import {ref, reactive, onMounted, defineProps, computed, defineEmits, watch} from 'vue'
import 'swiper/swiper-bundle.css';
import Swiper from "swiper/swiper-bundle.min.js"
// 滚动条距离顶部高度
import getScrollTop from '@/util/getScrollTop'
// offset
import myOffset from '@/util/offset'

// 使用defineEmits创建名称，接受一个数组
const emit = defineEmits(['switchCom'])

const props = defineProps({
    homeTabBar: Object,
    currentCom: Object
})
/**
 * 控制tab-bar吸顶
 */
const nav = ref(null)
const isSticky = ref(false) // 是否吸顶
const navOffTop = ref(0) // nav距离顶部的位置
const thatOffsetTop = ref(0)  // 当前组件距离顶部高度

const initSticky = () => {
  // console.log(nav.value)
  navOffTop.value = myOffset(nav.value).top; //nav距离顶部的位置
  window.addEventListener("scroll", e => {
    thatOffsetTop.value = getScrollTop() // 滚动条距离顶部高度
    // 当滚动条距顶部的高度 大于 等于 navOffTop 的高度 就吸顶
    if (thatOffsetTop.value >= navOffTop.value) {
      isSticky.value = true
    } else {
      isSticky.value = false
    }
  })
}

/**
 * 点击切换组件
 */
const switchTab = value => {
    emit('switchCom', value)
    // switchAnimation()
    /* 点击让tab-bar置顶 */
    let el = nav.value
    if (el) el.scrollIntoView()
}
/**
 * tab-bar切换动画
 */
let left = ((props.currentCom.id - 1) * 20) + 10
const switchAnimation = () => {

}

watch(() => props.currentCom.id,
    val => {
        left = ((val - 1) * 20) + 10
    })

onMounted(() => {
    new Swiper ('.tab-bar-conta', {
        slidesPerView: 5,
    })
  initSticky()
})
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.tab-bar-conta {
    width: 100%;
    .tb-list {
        position: relative;
        height: $nav-height;
        background-color: #ffffff;
        li {
            line-height: $nav-height;
            text-align: center;
            display: inline-block;
            font-size: .38rem;
        }
        .li-active {
            color: #65b8fb;
            font-size: .4rem;
        }
    }
    .tb-list-active {
        position: absolute;
        transform: translateX(-50%);
        top: 75%;
        width: .5rem;
        height: 2px;
        background-color: #65b8fb;
    }
  // 是否吸顶
  .sticky {
    position: fixed;
    top: $nav-height;
    transition: background 0.2s linear;
    z-index: 999;
  }
}

</style>