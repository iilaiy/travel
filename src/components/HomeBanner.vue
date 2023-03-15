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
        new Swiper ('.banner-conta', {
            loop: true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
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
        .banner-pagination::v-deep {
            bottom: .1rem;
            left: 50%;
            transform: translateX(-50%);
            span {
                width: .15rem;
                height: .15rem;
                border-radius: 50%;
                margin: 0 .1rem;
            }
        }
    }
}
</style>