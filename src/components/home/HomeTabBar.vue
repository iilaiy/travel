<template>
    <div class="tab-bar-conta swiper-container">
        <ul class="tb-list swiper-wrapper">
            <span
                    class="tb-list-active"
                    :style="{left: `${((currentCom.id - 1) * 20) + 10}vw`}"
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
import { ref, reactive, onMounted, defineProps, computed, defineEmits  } from 'vue'
import 'swiper/swiper-bundle.css';
import Swiper from "swiper/swiper-bundle.min.js"

// 使用defineEmits创建名称，接受一个数组
const emit = defineEmits(['switchCom'])

const props = defineProps({
    homeTabBar: Object,
    currentCom: Object
})

/**
 * 点击切换组件
 */
const switchTab = value => {
    emit('switchCom', value)
    // switchAnimation()
}
/**
 * tab-bar切换动画
 */
let left = ref(((props.currentCom.id - 1) * 20) + 10)
const switchAnimation = computed(() => {
    var time = setInterval(() => {
        if (left < 0) {
            clearInterval(time)
        }
        left--
    }, 100)
})

onMounted(() => {
    new Swiper ('.tab-bar-conta', {
        slidesPerView: 5,
    })
})
</script>

<style lang="scss" scoped>
.tab-bar-conta {
    width: 100%;
    .tb-list {
        position: relative;
        li {
            line-height: 2rem;
            text-align: center;
            display: inline-block;
            font-size: .35rem;
        }
        .li-active {
            color: #65b8fb;
        }
    }
    .tb-list-active {
        position: absolute;
        transform: translateX(-50%);
        top: 65%;
        width: .45rem;
        height: 2px;
        background-color: #65b8fb;
    }
}
</style>