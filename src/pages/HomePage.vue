<script>
import axios from "axios";

import AppLoader from "../components/AppLoader.vue";

import ProjectList from "../components/ProjectList.vue";

export default {
    data() {
        return {
            title: "Projects",
            projects: {
                list: [],
                pagination: [],
            },
            isLoading: false,
        };
    },

    components: { ProjectList, AppLoader },

    emits: ["changePage"],

    methods: {
        fetchProjects(endpoint = null) {

            this.isLoading = true;

            if (!endpoint) endpoint = "http://127.0.0.1:8002/api/projects";

            axios.get(endpoint).then((response) => {
                // console.log(response);
                this.projects.list = response.data.data;
                this.projects.pagination = response.data.links;
            }).finally(() =>{
                this.isLoading = false;
            });
        },
    },

    created() {
        this.fetchProjects();
    },
}

</script>


<template>

    <AppLoader v-if="isLoading"></AppLoader>
    <ProjectList :projects="projects.list" :pagination="projects.pagination" @changePage="fetchProjects"></ProjectList>

</template>


<style>
</style>