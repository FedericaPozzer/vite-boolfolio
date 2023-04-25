<script>
import axios from "axios";

import AppHeader from "./components/appHeader.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
    data() {
        return {
        title: "Projects",
        projects: [],
        };
    },

    components: { AppHeader, ProjectList },

    methods: {
        fetchProjects() {
            axios.get("http://127.0.0.1:8002/api/projects").then((response) => {
                // console.log(response);
                this.projects = response.data;
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

        <h1 class="my-5">{{ title }}</h1>

        <ProjectList :projects="projects" ></ProjectList>
        
        <!-- <ul>
            <li v-for="project in projects">{{ project.title }}</li>
        </ul> -->
    </div>
</template>

<style lang="scss" scoped>

</style>
