<template>
    <div class="search-result">
        <div class="header">
            <Back class="back"></Back>
            <div class="show-search" @click="$router.back()">
                <i class="iconfont icon-icon_suosou"></i>
                <span>{{ $route.query.keyword }}</span>
            </div>
        </div>
        <div class="conta">
            <div class="res-bot" v-if="resultList.data.length > 0">
                <div class="res-box" v-for="(item, index) in resultList.data" :key="item.objectId">
                    <div class="r-left">
                        <img :src="item.image" alt="" />
                        <span>今日订</span>
                    </div>
                    <div class="r-right">
                        <div class="r-title">{{ item.title }}</div>
                        <div class="r-label">
                            <span v-if="index === 0">推荐</span>
                            <span
                                    v-for="label in item.tagName"
                                    style="backgroundColor: #ffffff;color: #ff9700;border: 1px solid #ffe5c7"
                            >{{ label }}</span>
                        </div>
                        <div class="r-position">
                            {{ `${item.cityName ? item.cityName : ''}${item.districtName ? ', ' + item.districtName : ''}` }}
                        </div>
                        <div class="r-price">
                            <span>￥</span><span>{{ item.price }}</span>起
                        </div>
                        <div class="r-score">
                            <div v-show="item.commentScore" class="score">
                                <span>{{ item.commentScore }}</span>分
                            </div>
                            <div class="comment" v-show="item.commentNumStr">
                                <span>{{ item.commentNumStr }}</span>
                            </div>
                        </div>
                        <div class="pft" v-show="item.reduction">
                            <span>{{ item.reduction }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="no-result">
                搜索无结果！！！
            </div>
        </div>
    </div>
</template>

<script setup>
    import {useRoute, useRouter} from "vue-router";
    import Back from "@/components/Back";
    import {computed, getCurrentInstance, onMounted, reactive} from "vue";
    const $route = useRoute()
    const $router = useRouter()

    const $axios = getCurrentInstance().appContext.config.globalProperties.$axios;

    const resultList = reactive({data: []})

    const getTravel = async () => {
        try {
            const res = await $axios.get("/api/travel.json")
            res.data.eList.map((item, index) => {
                if (
                    item.title.indexOf($route.query.keyword) !== -1 ||
                    item.cityName.indexOf($route.query.keyword) !== -1
                ) {
                    resultList.data.push(item)
                }
            })
            // console.log(resultList.data)
        } catch (e) {
            throw '出错啦~'
        }
    }
    getTravel()

    onMounted(() => {
    })

</script>

<style lang="scss" scoped>
.search-result {
    .header {
        display: flex;
        align-items: center;
        height: 1.5rem;
        padding: 0 .5rem;
        .back {
            width: 8%;
        }
        .show-search {
            padding: 0 .2rem;
            flex: 1;
            background-color: #f6f6fa;
            line-height: .8rem;
            border-radius: .45rem;
            i {
                display: inline-block;
                width: .8rem;
                text-align: center;
                color: #c8c8c9;
            }
            span {
                font-size: .36rem;
                color: #333333;
            }
        }
    }
    .conta {
        .res-bot {
            .res-box {
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #ececec;
                padding: .35rem .25rem;
                .r-left {
                    width: 30%;
                    height: 3rem;
                    position: relative;
                    border-radius: .2rem;
                    overflow: hidden;
                    img {
                        height: 100%;
                        left: 50%;
                        transform: translateX(-50%);
                        position: absolute;
                        max-width: inherit;
                    }
                    span {
                        position: absolute;
                        left: 0;
                        color: #ffffff;
                        padding: .05rem .1rem;
                        border-bottom-right-radius: 6px;
                        background-image: linear-gradient(90deg,#FFB800 0,#F90 100%);
                    }
                }
                .r-right {
                    width: 67%;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    .r-label, .r-position, .r-price {
                        width: 100%;
                    }
                    .r-title {
                        font-size: .42rem;
                    }
                    .r-label {
                        margin: .2rem 0;
                        span {
                            padding: .05rem;
                            border-radius: .05rem;
                            background-color: #fd5777;
                            color: #FFFFFF;
                            margin-right: .15rem;
                        }
                    }
                    .r-price {
                        width: 100%;
                        text-align: right;
                        span {
                            color: #ff5a80;
                        }
                        span:last-child {
                            font-size: .5rem;
                            margin-right: .1rem;
                        }
                    }
                    .r-score {
                        width: 70%;
                        display: flex;
                        align-items: flex-end;
                        .score {
                            margin-right: .1rem;
                            color: #5ca2f8;
                            span {
                                font-size: .45rem;
                            }
                        }
                        .comment {
                            color: #8f8f8f;
                        }
                    }
                    .pft {
                        display: flex;
                        border: 1px solid #ff8800;
                        background-color: #fff1e6;
                        color: #ff8800;
                        padding: .025rem .05rem;
                    }
                }
            }
        }
        .no-result {
            text-align: center;
            margin-top: 0.5rem;
        }
    }
}
</style>