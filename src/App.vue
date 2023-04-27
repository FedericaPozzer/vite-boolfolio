<script>

import AppHeader from "./components/appHeader.vue";

export default {
    data() {
        return {
        title: "Vue Boolpress",
        };
    },

    components: { AppHeader },

}

</script>



<template>
    
    <AppHeader :title="title"></AppHeader>

    <div class="container">

        <!-- inserire qui il router view -->
        <router-view></router-view>
        
    </div>

</template>



<style lang="scss">

h1 {
    color: pink;
}

</style>
