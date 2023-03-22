<template>
    <div class="home-select">
        <!-- TODO: 按模块分成每个组件 -->
        <div class="conta">
            <!-- 左右两边排列 -->
            <div :class="[l === 1 ? 'left' : 'right']" v-for="l in 2">
                <!-- 景点 -->
                <template v-for="item in l === 1 ? leftList : rightList">
                    <a href="">
                        <div :key="item.objectId" class="box travel-box">
                            <div class="imgBox">
                                <img :src="item.image" alt="" />
                            </div>
                            <div class="b-bot">
                                <div class="b-title text-two-dot">
                                    {{ item.title }}
                                </div>
                                <div class="b-center">
                                    <div class="position">
                                        <i class="iconfont icon-weizhi"></i>
                                        <span>{{ item.cityName }}</span>
                                    </div>
                                </div>
                                <div class="b-bottom">
                                    <div class="price">
                                        <i>￥</i>
                                        <span class="text-one-hidden">{{ item.price }}</span>
                                        <span>起</span>
                                    </div>
                                    <div class="distance" v-if="item.categoryName === '景区门票'">
                                        <span>{{ item.commentScore }}</span>分
                                    </div>
                                    <div class="distance" v-else>
                                        <span>{{ item.commentGood }}</span> 好评
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {computed,reactive, onMounted, watch} from "vue";
    import {useStore} from "vuex";
    let {getters} = useStore();
    /**
     * 读取精选数据
     */

    const scenicSpot = computed(() => getters['getScenicSpotList'])


    const leftList = computed(() => {
        let addArr = []
        scenicSpot.value.map((item, index) => {
            if ((index + 1) % 2 !== 0) {
                addArr.push(item)
            }
        })
        return addArr
    })

    const rightList = computed(() => {
        let evenArr = []
        scenicSpot.value.map((item, index) => {
            if ((index + 1) % 2 === 0) {
                evenArr.push(item)
            }
        })
        return evenArr
    })

    onMounted(() => {
    })

    watch(() => scenicSpot,
    val => {
        console.log(val)
    })

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
        .imgBox {
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
                font-size: .35rem;
                i {
                    margin-right: .1rem;
                }
            }
        }
        .travel-box {
            padding: 5%;
            box-shadow: 2px 2px .3rem #e7eaed;
            .b-bottom {
                margin-top: .2rem;
                display: flex;
                justify-content: space-between;
                .price {
                    display: flex;
                    align-items: center;
                    color: #fd6c67;
                    font-size: .38rem;
                    i, span:nth-child(2) {
                        font-weight: 600;
                    }
                    span:nth-child(2) {
                        display: block;
                        max-width: 1rem;
                    }
                    span:last-child {
                        margin-left: .1rem;
                        font-size: .3rem;
                    }
                }
                .distance {
                    color: #b6b6b8;
                    font-size: .35rem;
                    span {
                        margin-right: .05rem;
                    }
                }
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
            margin: .3rem 0;
        }
    }
}
</style>