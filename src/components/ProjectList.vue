<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: "Project List",
    props: {
        projects: Array,
    },

    components: { ProjectCard },
}

</script>


<template>

    <div class="row row-cols-4 gy-4" v-if="projects.length">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project"></ProjectCard>
    </div>

    <div v-else class="text-muted">
        There are no projects available!
    </div>

    <!-- <ul>
        <li v-for="project in projects">{{ project.title }}</li>
    </ul> -->

</template>


<style lang="scss">

</style>