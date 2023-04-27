<script>
import axios from 'axios';
// import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: "DetailProjectPage",

    data() {
        return {
            project: null,
        };
    },
    // components: { ProjectCard },

    created() {
        // console.log(this.$route.params.id);
        axios
        .get(`http://127.0.0.1:8002/api/projects/${this.$route.params.id}`)
        .then((response) => {this.project = response.data;});
    },

};
</script>


<template>

    <h1 class="my-5">Project Detail <i class="bi bi-flower3"></i> {{ project.title }} </h1>

</template>


<style lang="scss">

</style>