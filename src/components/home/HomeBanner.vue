<template>
    <div class="home-banner">
        <div class="swiper-container banner-conta">
            <div class="swiper-wrapper banner-box">
                <div
                        class="swiper-slide imgBox"
                        v-for="(item, index) in bannerData"
                        :key="index"
                >
                    <router-link to="/">
                        <img :src="item.imgUrl" alt="">
                    </router-link>
                </div>
            </div>
            <div class="swiper-pagination banner-pagination"></div>
        </div>
    </div>
</template>

<script setup>
    import { ref, reactive, onMounted, defineProps } from 'vue'
    import 'swiper/swiper-bundle.css';
    import Swiper from "swiper/swiper-bundle.min.js"

    const props = defineProps({
        /* 轮播数据 */
        bannerData: {
            type: Array
        }
    })

    onMounted(() => {
      /* TODO: 用户长按或拖动轮播图时暂时自动滚动松开时恢复自动滚动 */
        new Swiper ('.banner-conta', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            on: {

            }
        })
    })
</script>

<style lang="scss" scoped>
.home-banner {
    .banner-conta {
        border-radius: .4rem;
        .banner-box {
            .imgBox {
                height: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
        }
    }
}
</style>

<style>
    .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        background-color: #FFFFFF;
        opacity: 1;
    }
    .swiper-pagination-bullet-active {
        width: 14px;
        height: 6px;
        border-radius: 3px;
        opacity: 1;
        background-color: #FFFFFF;
    }
</style>