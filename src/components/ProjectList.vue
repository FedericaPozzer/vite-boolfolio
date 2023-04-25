<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: "Project List",
    props: {
        projects: Array,
        pagination: Array,
    },

    components: { ProjectCard },
}

</script>


<template>

<!-- * K! Attenzione a questa height orrenda (però così la paginazione resta sul fondo anche quando ho poche cards) -->
<div class="d-flex flex-column" style="height: 70vh;">

    <div class="row row-cols-4 gy-2" v-if="projects.length">

        <ProjectCard v-for="project in projects" :key="project.id" :project="project"></ProjectCard>

    </div>

    <!-- se non ci sono progetti -->
    <div v-else class="text-muted">
        There are no projects available!
    </div>

    <!-- paginazione -->
    <div class="mt-auto">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
               
                <li class="page-item" v-for="page in pagination">
                    <button type="button" class="page-link" v-on:click="$emit('changePage', page.url)" v-bind:class="{disabled: !page.url, active: page.active}" v-html="page.label"></button>
                </li>

            </ul>
        </nav>
    </div>

</div>

</template>


<style lang="scss">

</style>