<template>
    <div class="list">
      <div class="area">
        <div class="title border-topbottom">当前定位城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <!--     定位当前位置       -->
            <div
                :class="[ 'button', ( locationMsg === $store.state.city) ? 'position-bottom' : '' ]"
                @click="changeCity({name: locationMsg})"
            >
              <!-- 武汉 -->
              <i class="iconfont icon-weizhi"></i>
<!--              {{ $store.state.positionCity }}-->
<!--              定位城市-->
              {{ locationMsg }}
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
                :class="[ 'button-common', 'button', (item.name === $store.state.city) ? 'position-bottom' : '' ]"
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
      <div class="area" v-for="(item, index) in cityList.city" :key="index">
        <div class="title border-topbottom t-bgc" :id="item.initial">{{ item.initial }}</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div
                class="button-common list-bottom"
                v-for="(val, i) in item.list"
                :key="i"
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
import {defineProps, onMounted, reactive, ref, watch} from 'vue'
import { useStore } from "vuex"
const store = useStore();
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()

import getCurrentCityName from "@/util/getUserLocation";

/**
 * 定位城市
 */
let locationMsg = ref('定位中...')
const getCurrentCity = () => {
  getCurrentCityName().then(city => {
    let result = city.slice(0, city.length - 1);
    locationMsg.value = result
    // store.commit('changeCity', result)
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
      cityList.city = val.city
      cityList.hotCities = val.hotCities
    }
)

/**
 * 修改城市
 */
const changeCity = item => {
  store.commit('changeCity', item.name)
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