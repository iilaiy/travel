<template>
    <div class="home-select">
        <div class="conta">
            <div class="travel-box box" v-for="i in 3" :key="i">
                <div class="imgBox t-imgBox">
                    <img src="/img/5f8043022f36c978.jpg" alt="" />
                </div>
                <div class="b-bot">
                    <div class="b-title">
                        鼋头渚樱花雨
                    </div>
                    <div class="b-center">
                        <div class="position">
                            <i class="iconfont icon-weizhi"></i>
                            <span>江苏</span>
                        </div>
                        <div class="price">
                            <i>￥</i>
                            <span class="text-one-hidden">780</span>
                            <span>起</span>
                        </div>
                    </div>
                    <div class="b-bottom">
                        <div class="weather-box">
                            <div class="wl">
                                <i class="iconfont icon-taiyang"></i>
                            </div>
                            <div class="wr">
                                <div class="temperature">
                                    27℃
                                </div>
                                <div class="weather">
                                    Sunny
                                </div>
                            </div>
                        </div>
                        <div class="distance">
                            <i class="iconfont icon-aixin"></i>
                            <span class="text-one-hidden">4</span>k
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.home-select {
    .conta {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .travel-box {
            margin-top: .3rem;
            padding: 3%;
            border-radius: .3rem;
            .t-imgBox {
                max-height: 38vw;
                border-radius: .3rem;
                margin: 0 auto;
                img {
                    width: 100%;
                }
            }
            .b-bot {

            }
            .b-center {
                display: flex;
                justify-content: space-between;
                .position {
                    color: #b2acaa;
                    i {
                        margin-right: .1rem;
                    }
                }
                .price {
                    display: flex;
                    align-items: center;
                    color: #fd6c67;
                    i, span:nth-child(2) {
                        font-weight: 600;
                    }
                    span:nth-child(2) {
                        display: block;
                        max-width: 1rem;
                    }
                    span:last-child {
                        margin-left: .1rem;
                    }
                }
            }
            .b-bottom {
                margin-top: .2rem;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: flex-end;
                .weather-box {
                    display: flex;
                    .wl {
                        i {
                            font-size: .9rem;
                            margin-right: .2rem;
                            color: #fec50d;
                        }
                    }
                    .wr {
                        .temperature {
                            font-size: .38rem;
                            font-weight: 600;
                        }
                        .weather {
                            color: #b6b6b8;
                            font-size: .35rem;
                        }
                    }
                }
                .distance {
                    display: flex;
                    color: #b6b6b8;
                    i {
                    }
                    span {
                        margin-left: .1rem;
                        display: block;
                        max-width: .7rem;
                    }
                }
            }
        }
        .box {
            width: calc(50% - .15rem);
            background-color: $background-primary;
        }
        .imgBox {
            overflow: hidden;
        }
        .b-title {
            font-size: .35rem;
            font-weight: bold;
            line-height: 1rem;
        }
    }
}
</style>