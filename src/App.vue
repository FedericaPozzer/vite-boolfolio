<script>
import AppHeader from "./components/appHeader.vue";

export default {
    data() {
        return {
        title: "Hi Kik!"
        };
    },

    components: { AppHeader },
}

</script>

<template>
    <AppHeader></AppHeader>

    <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped>

</style>
