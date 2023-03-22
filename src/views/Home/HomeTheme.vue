<template>
    <div class="theme-conta">
        <!-- 左右 -->
        <div class="theme theme-common" v-for="(item,index) in dataList" :key="index">
            <div class="theme-box" v-for="val in item" :key="val.objectId">
                <div class="img-box" :style="{
                    background: `url('${val.image}') no-repeat`,
                    'background-size': 'cover',
                    'background-position': '50%'
                }">
                    <div class="min-box">
                        <span>{{ val.categoryName }}</span>
                    </div>
                </div>
                <div class="theme-content">
                    <div class="t-title text-two-dot">
                        {{ val.title }}
                    </div>
                    <div class="t-label">
                        <span v-for="(label, j) in val.tagName" :key="j">{{ label }}</span>
                    </div>
                    <div class="price">
                        ￥<span>{{ val.price }}</span>起
                    </div>
                    <div class="score">
                        <span>{{ val.commentScore }}分</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {reactive,getCurrentInstance,computed,onMounted} from "vue";
    const $axios = getCurrentInstance().appContext.config.globalProperties.$axios;

    const dataList = reactive({
        oddArr: [],
        evenArr: [],
    })

    const getTheme = () => {
        $axios.get("/api/theme.json").then(res => {
            // console.log(res.data.tList[0].cList[0].eList)
            if (res.data.tList[0].cList[0].eList) {
                res.data.tList[0].cList[0].eList.map((item, index) => {
                    if ((index + 1) % 2 === 0) {
                        dataList.evenArr.push(item)
                    } else {
                        dataList.oddArr.push(item)
                    }
                })
            }
        }).catch(e =>{
            throw '请求失败'
        })

    }

    onMounted(() => {
        getTheme()
    })


</script>

<style lang="scss" scoped>
.theme-conta {
    padding-bottom: .5rem;
    display: flex;
    justify-content: space-between;
    .theme-common {
        width: 48.75%;
        .theme-box {
            background-color: #ffffff;
            margin-top: 5%;
            border-radius: .25rem;
            box-shadow: 0 2px .2rem 0 rgba(0,0,0,.05);
            .img-box {
                width: 100%;
                height: 4.5rem;
                border-radius: .25rem;
                overflow: hidden;
                position: relative;
                .min-box {
                    position: absolute;
                    bottom: 5%;
                    left: 5%;
                    background-color: rgba(0, 0, 0, .4);
                    color: #ffffff;
                    border-radius: .3rem;
                    padding: .05rem .2rem;
                }
            }
        }
    }
    .theme-content {
        padding: 0 .3rem;
        padding-bottom: .3rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .t-title {
            width: 100%;
            margin: .2rem 0;
            font-size: .35rem;
            font-weight: bold;
        }
        .t-label {
            width: 100%;
            margin-bottom: .2rem;
            span {
                display: inline-block;
                color: #ff6600;
                background-color: #fef4ed;
                padding: .05rem .08rem;
                margin-right: .1rem;
            }
        }
        .price {
            width: 50%;
            color: #ff5a68;
            span {
                font-size: .45rem;
                font-weight: bold;
                margin-right: .1rem;
            }
        }
        .score {
            flex: 1;
            text-align: right;
            color: #888888;
        }
    }
}
</style>