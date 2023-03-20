<template>
    <div class="list">
      <div class="area">
        <div class="title border-topbottom">当前定位城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <!--     定位当前位置       -->
            <div
                :class="[ 'button', ( $store.state.positionCity === $store.state.city.name) ? 'position-bottom' : '' ]"
                @click="changeCity({name: locationMsg.value}, true )"
            >
              <!-- 武汉 -->
              <i class="iconfont icon-weizhi"></i>
<!--              定位城市-->
              {{ locationMsg.value }}
            </div>
          </div>
        </div>
      </div>
      <!-- 热门出发地 -->
      <div class="area">
        <div class="title border-topbottom">热门出发地</div>
        <div class="button-list">
          <div class="button-wrapper hot-wrapper">
            <div
                :class="[ 'button-common', 'button', (item.name === $store.state.city.name) ? 'position-bottom' : '' ]"
                v-for="(item, index) in cityList.hotCities"
                :key="index"
                @click="changeCity(item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <!--   字母排序   -->
      <div class="area" v-for="(item, key, index) in cityList.city" :key="index">
        <div class="title border-topbottom t-bgc" :id="key">{{ key }}</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div
                class="button-common list-bottom"
                v-for="val in item"
                :key="val.id"
                @click="changeCity(val)"
            >
                {{ val.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { defineProps, onMounted, reactive, ref, watch } from 'vue'
import { useStore } from "vuex"
const store = useStore();
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()

import getCurrentCityName from "@/util/map";

/**
 * 定位城市
 */
let locationMsg = ref({
  value: '定位中...',
  flag: false
})

const getCurrentCity = () => {
  locationMsg.value.value = '定位中...'
  locationMsg.value.flag = false
  getCurrentCityName.init().then(BMap => {
    const goolocation = new BMap.Geolocation()
    goolocation.getCurrentPosition(
            function getinfo(position) {
              // console.log(position)
              try {
                let city = position.address.city
                let province = position.address.province
                /* 城市为空时，抛出错误 */
                if (!city) {
                  throw '定位失败'
                }
                locationMsg.value.value = city
                locationMsg.value.flag = true
              }
              catch (e) {
                // console.log(e)
                locationMsg.value.value = '定位失败'
                locationMsg.value.flag = false
              }
              /* 关闭节流 */
              flag = false
            },
            {},
            {provider: "baidu"}
    )

  })
}

onMounted(() => {
  getCurrentCity()
})

/**
 * 接收父组件传递的数据
 */
const props = defineProps({
  cityData: Object,
  letter: String
})

const cityList = reactive({
  hotCities: [],
  city: []
})

/**
 * 监听父组件传递过来的城市数据
 */
watch(
    () => props.cityData,
    val => {
      cityList.hotCities = val.hotCities
      cityList.city = val.cities
    }
)

/**
 * 修改城市
 */
let flag = false  // 节流
const changeCity = (item, positionCityBol) => {
  let letters = item
  /* 当用户点击的是定位城市时，定位成功前不允许执行选择定位城市并跳转 */
  if (positionCityBol) {
    /* 定位失败时 */
    if (!locationMsg.value.flag) {
      if (!flag) {
        /* 开启节流 */
        flag = true
        getCurrentCity()
      }
      return
    }
    /* 获取定位城市的简称 */
    item.name = item.name.replace(/(.+)[藏|壮|傣]族.{1,2}族自治州/g, "$1");
    item.name = item.name.replace(/(.+)((.{2}族.{1,2}族)|蒙古)自治州/g, "$1");
    item.name = item.name.replace(/(.+)[回|藏|藏|彝|傣|白]族自治州/g, "$1");
    item.name = item.name.replace(/(.+)(.{2}族)自治州/g, "$1");
    item.name = item.name.replace(/(.{2,10})市/g, "$1");
    // console.log(item.name)
    // 定位当前城市存入store
    store.commit('changePositionCity', item.name)
    /* 匹配当前定位城市的数据 */
    for (let i in  cityList.city) {
      cityList.city[i].forEach(val => {
        if (val.name === item.name) {
          letters = val
          return
        }
      })
    }
  }
  store.commit('changeCity', letters)
  $router.back()
}

/**
 * 监听父组件传递过来的值（字母）
 */
watch(
    () => props.letter,
    val => {
      if (val) {
        /**
         *  接收点击的字母并查找对应的dom利用scrollIntoView()方法跳转到对应的位置
         */
        let el = document.getElementById(val)
        if (el) el.scrollIntoView()
      }
    }
)

</script>

<style lang="scss" scoped>
$width-list: 92%;

.area {
  .title {
    width: $width-list;
    padding-left: .3rem;
    color: #999999;
    line-height: .7rem;
  }
  .t-bgc {
    background-color: #f5f5f5;
  }
  .button-list {
    padding-left: .3rem;
    .button-wrapper {
      width: $width-list;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .button-common {
        font-size: .36rem;
      }
      .button {
        width: calc(100% / 3 - .25rem);
        margin: .18rem 0;
        color: #666666;
        border-radius: .05rem;
        text-align: center;
        line-height: .9rem;
        font-size: .38rem;
        border: 1px solid #dbdbdb;
        i {
          font-size: .35rem;
        }
      }
      .position-bottom {
        color: #f9a825;
        border-color: #f9a825;
      }
      .list-bottom {
        font-size: .38rem;
        width: 100%;
        line-height: 1.2rem;
        border-bottom: 1px solid #dbdbdb;
      }
      .list-bottom:last-child {
        border: none;
      }
    }
    .hot-wrapper {
      padding-bottom: .3rem;
    }
  }
}

</style>