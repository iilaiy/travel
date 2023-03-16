<template>
    <div class="home-select">
        <!-- TODO: 按模块分成每个组件 -->
        <div class="conta">
            <!-- 左右两边排列 -->
            <div class="left">
                <!-- 景点 -->
                <a href="">
                    <div class="travel-box box">
                        <div class="imgBox">
                            <img src="/img/5f8043022f36c978.jpg" alt="" />
                        </div>
                        <div class="b-bot">
                            <div class="b-title text-one-hidden">
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
                </a>
                <a href="">
                    <div class="travel-box box">
                        <div class="imgBox">
                            <img src="/img/5f8043022f36c978.jpg" alt="" />
                        </div>
                        <div class="b-bot">
                            <div class="b-title text-one-hidden">
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
                </a>
                <!-- 酒店 -->
                <a href="">
                    <div class="box hotel-box">
                        <div class="imgBox">
                            <img src="/img/5b1794d0750b1.jpg" alt="" />
                        </div>
                        <div class="b-bot">
                            <div class="b-title text-one-hidden">
                                北京千禧大酒店
                            </div>
                            <div class="b-center">
                                <div class="position">
                                    <i class="iconfont icon-weizhi"></i>
                                    <span>1.2km</span>
                                </div>
                                <div class="price">
                                    <i>￥</i>
                                    <span class="text-one-hidden">388</span>
                                    <span>起</span>
                                </div>
                            </div>
                            <div class="b-bottom">
                                <div class="label">
                                    <div>
                                        <span>
                                            五星级
                                        </span>
                                    </div>
                                    <div style="background-color: #fca919">
                                        <span>
                                            安全认证
                                        </span>
                                    </div>
                                </div>
                                <div class="score">
                                    <i v-for="i in 5" class="iconfont icon-pingfen"></i>
                                    <span>4.8</span>分
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="right">
                <!-- 机票 -->
                <a href="">
                    <div class="air-ticket box">
                        <div class="air-title">
                            出行交通
                        </div>
                        <div class="air-bot">

                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="travel-box box">
                        <div class="imgBox">
                            <img src="/img/5f8043022f36c978.jpg" alt="" />
                        </div>
                        <div class="b-bot">
                            <div class="b-title text-one-hidden">
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
                </a>
            </div>

        </div>
    </div>
</template>

<script setup>
// TODO: 酒店模块标签文字 解决chrome浏览器文字小于12px的问题
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.home-select {
    .conta {
        display: flex;
        justify-content: space-between;
        padding-bottom: .5rem;
        .left, .right {
            width: calc(50% - .15rem);
            a {
                color: #000000;
            }
        }
        .travel-box, .hotel-box {
            padding: 5%;
        }
        .imgBox {
            max-height: 38vw;
            border-radius: .2rem;
            margin: 0 auto;
            img {
                width: 100%;
                display: block;
            }
        }
        .b-title {
            width: 100%;
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
        .travel-box {
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
        .hotel-box {
            .b-bottom {
                .label {
                    margin: .2rem 0;
                    display: flex;
                    div {
                        max-width: 1.8rem;
                        padding: .05rem .15rem;
                        line-height: .4rem;
                        background-color: #fd7978;
                        margin-right: .15rem;
                        border-radius: .1rem;
                        span {
                            color: white;
                        }
                    }
                }
                .score {
                    i {
                        color: #fd9d2f;
                        font-size: .35rem;
                        margin-right: .05rem;
                    }
                    span {
                        margin-left: .2rem;
                    }
                }
            }
        }
        .air-ticket {
            background: url("@/assets/img/comm/9d003a8efd5e4695f.png") no-repeat;
            background-size: cover;
            height: 58vw;
            padding: 8%;
            .air-title {
              color: white;
              font-size: .4rem;
              font-weight: 600;
              letter-spacing: .05rem;
            }
            .air-bot {
            }
        }
        .box {
            border-radius: .3rem;
            margin-top: .3rem;
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