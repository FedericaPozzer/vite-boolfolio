<script>

import AppHeader from "./components/appHeader.vue";

export default {
    data() {
        return {
        title: "Projects",
        };
    },

    components: { AppHeader },


}

</script>

<template>
    <AppHeader></AppHeader>
    <div class="container">

        <h1 class="my-5">{{ title }} <i class="bi bi-flower3"></i> </h1>

        <!-- inserire qui il router view -->
        <router-view></router-view>
        
    </div>
</template>

<style lang="scss">

h1 {
    color: pink;
}

</style>
