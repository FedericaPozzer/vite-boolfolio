<script>

export default {
    name: "Project card",
    props: {
        project: Object,
    },
}

</script>


<template>

    <div class="col d-flex">
        <div class="card">
            <div class="card-header d-flex">
                <div>
                    Type: {{ project.type.name }}
                </div>
                <!-- <div class="ms-3" v-for="technology in project.technologies" :key="project.id">
                    Technologies: {{ technology.name }}                 
                </div> -->
            </div>
            <div class="card-body">
                <h5 class="card-title"> {{ project.title }} </h5>
                <p class="card-text"> {{ project.text }} </p>
                <!-- <a href="" class="btn btn-primary">See Project</a> -->
            </div>
        </div>
    </div>

    <!-- <ul>
        <li>{{ project.title }}</li>
    </ul> -->

</template>


<style lang="scss">

</style>