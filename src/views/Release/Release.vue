<template>
    <div>
        发布
        {{data.count}}-{{data.bool}}
        {{data.arr.count}}
        <button @click="btn">点击</button>
    </div>
    <Tabbar></Tabbar>
</template>

<script setup>
import {ref,reactive} from 'vue'
import Tabbar from "@/components/TabBar"

    const data = ref({
        count: 0,
        bool: false,
        arr: {
            count: 0
        }
    })

const btn = () => {
    data.value.count++
    data.value.bool = !data.value.bool
    data.value.arr.count++
}

</script>

<style lang="scss" scoped>

</style>