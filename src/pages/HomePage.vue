<script>
import axios from "axios";

import ProjectList from "../components/ProjectList.vue";

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

    components: { ProjectList },

    emits: ["changePage"],

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
    },
}

</script>


<template>

    <ProjectList :projects="projects.list" :pagination="projects.pagination" @changePage="fetchProjects"></ProjectList>

</template>


<style>
</style>