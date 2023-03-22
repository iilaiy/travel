<template>
    <div class="home-select">
        <!-- TODO: 按模块分成每个组件 -->
        <div class="conta">
            <!-- 左右两边排列 -->
            <div class="select" v-for="l in 2" :key="l">
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
                                    <div class="distance" v-if="item.commentScore">
                                        <span>{{ item.commentScore }}</span>分
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
        .select {
            width: 48.75%;
            a {
                color: #000000;
            }
        }
        .imgBox {
            border-radius: .2rem;
            margin: 0 auto;
            img {
                width: 100%;
                min-height: 3.5rem;
                display: block;
            }
        }
        .b-bot {
            padding: 0 5% 5%;
        }
        .b-title {
            width: 100%;
        }
        .b-center {
            .position {
                color: #b2acaa;
                font-size: .35rem;
                i {
                    margin-right: .1rem;
                }
            }
        }
        .travel-box {
            box-shadow: 0 2px .2rem 0 rgba(0,0,0,.05);
            .b-bottom {
                margin-top: .2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
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
                        font-size: .48rem;
                    }
                    span:last-child {
                        margin-left: .1rem;
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
            margin-top: 5%;
            background-color: $background-primary;
        }
        .imgBox {
            overflow: hidden;
        }
        .b-title {
            font-size: .38rem;
            font-weight: bold;
            margin: .3rem 0;
        }
    }
}
</style>