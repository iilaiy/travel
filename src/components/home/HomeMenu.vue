<template>
    <div class="menu-conta">
        <div class="top">
            <div class="box" v-for="i in 5" :key="i">
                <a href="">
                    <i>
                        <img src="@/assets/img/icon/index_nav_en.213dedbc.png" alt="" />
                    </i>
                    <span>机票</span>
                </a>
            </div>
        </div>
        <div class="bot swiper-container">
            <div class="bot-wrapper swiper-wrapper">
                <div
                        class="box swiper-slide"
                        v-for="i in 10"
                        :key="i"
                >
                    <a href="">
                        <i class="iconfont icon-guojijipiao"></i>
                        <span>签证</span>
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
    overflow: hidden;
    .box {
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