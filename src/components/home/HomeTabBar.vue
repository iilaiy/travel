<template>
    <div class="tab-bar-conta swiper-container">
        <ul class="tb-list swiper-wrapper">
            <li class="li-active swiper-slide">
                <router-link to="/home">
                    精选
                </router-link>
            </li>
            <li class="swiper-slide">
                <router-link to="/home/attachment">
                    附近
                </router-link>
            </li>
            <li class="swiper-slide">景点</li>
            <li class="swiper-slide">美食</li>
        </ul>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps } from 'vue'
import 'swiper/swiper-bundle.css';
import Swiper from "swiper/swiper-bundle.min.js"

onMounted(() => {
    new Swiper ('.tab-bar-conta', {
        slidesPerView: 4,
    })
})
</script>

<style lang="scss" scoped>
.tab-bar-conta {
    width: 100%;
    .tb-list {
        li {
            width: calc(100% / 4);
            line-height: 2rem;
            text-align: center;
            display: inline-block;
            font-size: .35rem;
            a {
                color: #000000;
            }
        }
        .li-active {
            font-size: .4rem;
            color: #65b8fb;
            position: relative;
            a {
                color: #65b8fb;
            }
        }
        .li-active::after {
            position: absolute;
            content: '';
            top: 65%;
            left: 50%;
            transform: translateX(-50%);
            width: .45rem;
            height: 2px;
            background-color: #65b8fb;
        }
    }
}
</style>