<script>

export default {
    name: "Project card",

    props: {
        project: Object,
    },

    computed: {
        abstract() {
            return this.project.text.slice(0, 100) + ".."; //da dove parto, quanti caratteri voglio
        }
    },
}

</script>


<template>

    <div class="col d-flex">
        <div class="card w-100">
            <div class="card-header d-flex overflow-auto justify-content-between">
                <!-- pill (il div esterno è perchè se no non resta a forma di pill, diventa tonda) -->
                <div>
                    <div class="badge rounded-pill me-3" :style="{ 'background-color': project.type.color }">
                    {{ project.type.name }}
                    </div>
                </div>
            </div>

            <div class="card-body">
                <h4 class="card-title my-2"> {{ project.title }} </h4>
                <!-- <p class="card-text"> <small> {{ project.text }} </small> </p> -->
                <p class="card-text"> <small> {{ abstract }} </small> </p>
                <!-- * BUTTON CHE SERVIRA' PER LA SHOW
                    <a href="" class="btn btn-primary">See Project</a> -->
            </div>

            <div class="card-footer" v-if="project.technologies.length">
                <!-- technologies -->
                <div class="d-flex justify-content-end" >Tech:
                    <div class="badge ms-1" v-for="technology in project.technologies" :key="technology.id" :style="{ 'background-color': technology.color }">
                        {{ technology.name }}                 
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <ul>
        <li>{{ project.title }}</li>
    </ul> -->

</template>


<style lang="scss">

</style>