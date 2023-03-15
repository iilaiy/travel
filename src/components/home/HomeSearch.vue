<template>
    <div class="search-conta">
        <!-- TODO: 当用户点击输入框时带上当前的输入框内容跳转到搜索页面 -->
        <router-link to="/search">
            <div class="search-box">
                <i class="iconfont icon-icon_suosou"></i>
                <div class="swiper-container b-wen">
                    <div class="swiper-wrapper wen-box">
                        <div class="swiper-slide">
                            <span>
                                广州到三亚飞机票
                            </span>
                        </div>
                        <div class="swiper-slide">
                            <span>
                                深圳
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps } from 'vue'
import 'swiper/swiper-bundle.css';
import Swiper from "swiper/swiper-bundle.min.js"

onMounted(() => {
    new Swiper ('.b-wen', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        direction: 'vertical',
        on: {

        }
    })
})

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
            width: 5%;
            font-size: .5rem;
            color: #9b9b9b;
            display: block;
            line-height: $input-height;
        }
        .b-wen {
            width: 80%;
            .wen-box {
                display: inline-block;
                height: $input-height;
                line-height: $input-height;
                span {
                    color: #000000;
                }
            }
        }
    }
}

</style>