<script>
import axios from "axios";

import AppHeader from "./components/appHeader.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
    data() {
        return {
        title: "Projects",
        projects: {
            list: [],
            pagination: [],
            }
        };
    },

    components: { AppHeader, ProjectList },

    methods: {
        fetchProjects(endpoint = null) {
            if (!endpoint) endpoint = "http://127.0.0.1:8002/api/projects";
            
            axios.get(endpoint).then((response) => {
                // console.log(response);
                this.projects.list = response.data.data;
                this.projects.pagination = response.data.links;
            });
        },
    },

    created() {
        this.fetchProjects();
    }
}

</script>

<template>
    <AppHeader></AppHeader>
    <div class="container">

        <h1 class="my-5">{{ title }} <i class="bi bi-flower3"></i> </h1>

        <ProjectList :projects="projects.list" :pagination="projects.pagination" @changePage="fetchProjects"></ProjectList>

    </div>
</template>

<style lang="scss">

h1 {
    color: pink;
}

</style>
