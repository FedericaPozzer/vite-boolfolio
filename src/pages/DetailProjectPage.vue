<script>
import axios from 'axios';

import AppLoader from '../components/AppLoader.vue';

import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: "DetailProjectPage",

    data() {
        return {
            project: null,
            isLoading: false,
        };
    },
    components: { ProjectCard, AppLoader },

    created() {

        this.isLoading = true;
        // console.log(this.$route.params.slug);
        axios
        .get(`http://127.0.0.1:8002/api/projects/${this.$route.params.slug}`)
        .then((response) => {this.project = response.data;})
        .finally(() =>{this.isLoading = false;});
    },

};
</script>


<template>

    <AppLoader v-if="isLoading"></AppLoader>

    <h1 class="my-5">Project Detail <i class="bi bi-flower3"></i> {{ project.title }} </h1>

    <ProjectCard v-if="project" :project="project" :isDetail="true"></ProjectCard>

</template>


<style lang="scss">

</style>