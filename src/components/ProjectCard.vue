<script>

export default {
    name: "Project card",

    props: {
        project: Object,
        isDetail: Boolean,
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
                <h4 class="card-title"> {{ project.title }} </h4>
                <p class="card-text"> <small> {{ isDetail? project.text : abstract }} </small> </p>
            </div>

            <div class="card-footer d-flex justify-content-between">
                <!-- "see project" button / "back to the list" button -->
                <div>
                    <div v-if="!isDetail">
                        <router-link class="btn btn-sm mx-2 btn-see" :to="{name: 'project-detail', params: {slug: project.slug}}">
                            See Project
                        </router-link>
                    </div>

                    <div v-else="isDetail">
                        <router-link class="btn btn-sm mx-2 btn-see" :to="{ name: 'home', params: {slug: project.slug } }">
                            Back to Projects List
                        </router-link>
                    </div>
                </div>


                <!-- technologies -->
                <div v-if="project.technologies.length">Tech:
                    <div class="badge ms-1" v-for="technology in project.technologies" :key="technology.id" :style="{ 'background-color': technology.color }">
                        {{ technology.name }}                 
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss">

.btn-see {
    color: pink !important;
    border: 1px solid pink !important;
}

.btn-see:hover {
    color: rgb(229, 151, 164) !important;
    border: 1px solid rgb(229, 151, 164) !important;
}

</style>