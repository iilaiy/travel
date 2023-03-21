<template>
    <div class="search-conta">
            <div class="search-box" @click="toSearch">
                <i class="iconfont icon-icon_suosou"></i>
                <div class="swiper-container b-wen _swiper">
                    <div class="swiper-wrapper wen-box">
                        <div
                            class="swiper-slide"
                            v-for="item in hotSearch"
                            :key="item.id"
                        >
                            <span>
                                {{ item.keyword }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps } from 'vue'
import 'swiper/swiper-bundle.css';
import Swiper from "swiper/swiper-bundle.min.js"
import {useRouter} from "vue-router/dist/vue-router";

const $router = useRouter()

const props = defineProps({
  hotSearch: Object
})

const activeIndex = ref(0)

  onMounted(() => {
    var mySwiper = new Swiper ('.b-wen', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        direction: 'vertical',
        on: {
          slideChange () {
            /* 获取activeIndex */
            activeIndex.value = this.activeIndex
            // console.log(activeIndex.value)
          }
        }
    })
})
/**
 * 当用户点击输入框时带上当前的输入框内容跳转到搜索页面
 */
const toSearch = () => {
  $router.push({
    name:'Search',
    query:{
      ...props.hotSearch[activeIndex.value - 1]
    }
  })
}
</script>

<style lang="scss" scoped>
/* 全局css变量 */
@import "@/assets/css/variable";

.search-conta {
    .search-box {
        height: $input-height;
        display: flex;
        border-radius: .5rem;
        padding: 0 .3rem;
        background-color: #ffffff;
        .icon-icon_suosou {
            width: 8%;
            font-size: .5rem;
            color: #9b9b9b;
            display: block;
            line-height: $input-height;
        }
        .b-wen {
            width: 80%;
            .wen-box {
                display: inline-block;
                line-height: $input-height;
                span {
                    display: block;
                    color: #000000;
                }
            }
        }
    }
}

</style>