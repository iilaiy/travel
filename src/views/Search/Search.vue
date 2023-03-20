<template>
    <div>
      搜索
    </div>
</template>

<script setup>
import {ref, reactive, defineProps, onMounted, watch} from "vue";
import {useRoute, useRouter} from "vue-router/dist/vue-router";

const $route = useRoute()
const $router = useRouter()

console.log($route.query)
onMounted(() => {

})

</script>

<style scoped>

</style>