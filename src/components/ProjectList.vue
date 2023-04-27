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

    <div class="row row-cols-3 gy-5" v-if="projects.length">

        <ProjectCard v-for="project in projects" :key="project.id" :project="project"></ProjectCard>

    </div>

    <!-- se non ci sono progetti -->
    <div v-else class="text-muted my-5">
        There are no available projects <i class="bi bi-emoji-frown"></i>
    </div>

    <!-- paginazione -->
    <div class="mt-auto pagination-custom" v-if="projects.length">
        <nav aria-label="Page Navigation">
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

.pagination-custom {

    // non mi ricordo quale è il modo giusto ma così funziona..
    ul {

        li > button { 
        color: pink;
        }

        .active {
            background-color: pink;
            // border: 1px solid pink;
            border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
            color: black;
        }

        :focus {
            // box-shadow: 0px 0px 10px pink;
            box-shadow: none;
        }

        :hover {
            color: rgb(229, 151, 164);
        }

    }   
}

</style>