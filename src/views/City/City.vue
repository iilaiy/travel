<template>
    <div class="city-conta">
      <header class="page-margin">
        <!-- 返回 -->
        <Back></Back>
        <div class="topTitle">
          选择出发地
        </div>
      </header>
      <List :cityData="cityData.data" :letter="letter"></List>
      <Alphabet :cities="cityData.data.cities" @jumpCity="jumpCity"></Alphabet>
    </div>
</template>

<script setup>
import Back from "@/components/Back";
import {getCurrentInstance,ref,reactive,onMounted,nextTick,watch} from "vue";
import List from "@/components/city/List";
import Alphabet from "@/components/city/Alphabet";

import { useStore } from "vuex"
const store = useStore();

import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()

const $axios = getCurrentInstance().appContext.config.globalProperties.$axios

/**
 * 城市
 */
const cityData = reactive({data: []})

$axios.get('/api/city.json').then(res => {
  cityData.data = res.data
})

/**
 *  接收Alphabet组件传递的值传递给List组件跳转到对应字母的位置
 */
let letter = ref()
const jumpCity = value => {
  letter.value = value
}

// const data = await $axios.get('/api/city.json')

/**
 * https://sec-m.ctrip.com/restapi/soa2/13517/DepartureCity?_fxpcqlniredt=09031068417433066711
 */
</script>

<style lang="scss" scoped>

.city-conta {
  header {
    display: flex;
    align-items: center;
    .topTitle {
      flex: 1;
      text-align: center;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: .36rem;
    }
  }
}
</style>