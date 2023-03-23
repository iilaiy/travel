<template>
    <div class="hot">
        <div class="title search-title">
            <h2>{{ city.name }}热搜</h2>
        </div>
        <div class="content">
            <div class="first-box border-radius">
                <a href="">
                    <img src="@/assets/img/search/1677231339511.jpg" alt="" />
                </a>
            </div>
            <div class="box border-radius" v-for="i in 2">
                <div class="b-top">
                    <div class="b-title">
                        <i class="iconfont icon-hot-for-atmosphere"></i>
                        <span>热搜景点</span>
                    </div>
                    <div class="b-more">
                        <span>4374</span>
                        <span>人看过</span>
                        <div class="hp">
                            <div class="head-picture" v-for="i in 3" :style="{zIndex: i}">
                                <img src="@/assets/img/search/100.jpg" alt="" />
                            </div>
                        </div>
                        <i class="iconfont icon-youjiantou"></i>
                    </div>
                </div>
                <div class="b-bot">
                    <div class="b-bot-box" v-for="i in 5">
                        <div class="left">
                            <div class="permutation" style=""></div>
                            <img src="@/assets/img/search/6d2fe7cb-b99c-4594-bba3-81751b32eaf7_480_320.png" alt="" />
                        </div>
                        <div class="mid">
                            <div class="mid-title">
                                上海迪士尼乐园
                            </div>
                            <div class="mid-label">
                                <span>主题乐园</span>
                                <span>春游季</span>
                            </div>
                        </div>
                        <div class="right">
                            <div class="score">
                                4.74分
                            </div>
                            <div class="comment">
                                15.7w条点评
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

let {getters} = useStore();
const city = computed(() => getters['doubleCity'])


</script>

<style lang="scss" scoped>
.hot {
    .title {
    }
    .content {
        padding-bottom: .2rem;
        background-color: #fafafa;
        white-space: nowrap;
        overflow-x: scroll;
        display: -webkit-box;
        -webkit-overflow-scrolling: touch;
        .border-radius {
            border-radius: .32rem;
            overflow: hidden;
        }
        .first-box {
            height: 8rem;
            width: 50%;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .box {
            width: 80%;
            margin-left: 3%;
            background: url("@/assets/img/search/1624945893943.png") no-repeat;
            background-size: 100%;
            .b-top {
                height: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 0 .2rem;
                .b-title {
                    color: #ffffff;
                    font-size: .37rem;
                    font-weight: bold;
                    span {
                        margin-left: .1rem;
                    }
                }
                .b-more {
                    display: flex;
                    align-items: center;
                    span {
                        color: #FFFFFF;
                    }
                    .hp {
                        margin-left: .15rem;
                        .head-picture {
                            display: inline-block;
                            float: left;
                            width: .5rem;
                            height: .5rem;
                            overflow: hidden;
                            border-radius: 50%;
                            margin-left: -.1rem;
                            img {
                                width: 100%;
                            }
                        }
                        .head-picture:first-child {
                            margin-left: 0;
                        }
                    }
                    i {
                        color: #ffffff;
                        font-size: .35rem;
                        margin-left: .05rem;
                    }
                }
            }
            .b-bot {
                box-shadow: 2px 2px .3rem #cccccc;
                padding: .2rem;
                width: 100%;
                height: calc(100% - 1rem);
                background-color: #FFFFFF;
                border-radius: .3rem;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                .b-bot-box {
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    .left {
                        position: relative;
                        width: 1.1rem;
                        height: 1.1rem;
                        border-radius: .2rem;
                        overflow: hidden;
                        img {
                            width: 100%;
                            height: 100%;
                            display: block;
                        }
                        .permutation {
                            width: .5rem;
                            height: .5rem;
                            position: absolute;
                            left: 0;
                            top: 0;
                            background: url("@/assets/img/search/first.png") no-repeat;
                            background-size: cover;
                        }
                    }
                  .mid {
                    padding-left: .25rem;
                    .mid-title {
                      font-size: .38rem;
                    }
                    .mid-label {
                      span {
                        max-width: 1.5rem;
                        display: inline-block;
                        background-color: #fdf4ed;
                        padding: .1rem;
                        margin: .1rem .2rem 0 0;
                        border-radius: .2rem;
                        color: #bf865c;
                      }
                    }
                  }
                  .right {
                    text-align: right;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    .score {

                    }
                    .comment {
                      color: #888888;
                    }
                  }
                }
            }
        }
    }
    .content::-webkit-scrollbar {
        display: none;
    }
}
</style>