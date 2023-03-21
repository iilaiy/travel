<template>
    <div class="search-result">
        <Back></Back>
    </div>
</template>

<script setup>
    import {useRoute, useRouter} from "vue-router";
    import Back from "@/components/Back";

    const $route = useRoute()
    const $router = useRouter()


</script>

<style lang="scss" scoped>

</style>