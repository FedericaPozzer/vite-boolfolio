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
                <!-- pill? non va il BG (se metto tipo red, funziona) -->
                <div class="badge rounded-pill ms-3" style="background-color: {{ project.type.color }}">
                    {{ project.type.name }}
                </div>
                <!-- nope nope nope -->
                <div class="badge rounded-pill ms-3" :style="{ 'background-color': '{{ project.type.color }}' }">
                    {{ project.type.name }}
                </div>
                <!-- YESSSS -->
                <div>
                    <div class="badge rounded-pill" :style="{ 'background-color': project.type.color }">
                    {{ project.type.name }}
                    </div>
                </div>

                <!-- * NON VA (technologies)
                    <div class="ms-3" v-for="technology in project.technologies" :key="project.id">
                    Technologies: {{ technology.name }}                 
                </div> -->
            </div>
            <div class="card-body">
                <h5 class="card-title"> {{ project.title }} </h5>
                <p class="card-text"> {{ project.text }} </p>
                <!-- * BUTTON CHE SERVIRA' PER LA SHOW
                    <a href="" class="btn btn-primary">See Project</a> -->
            </div>
        </div>
    </div>

    <!-- <ul>
        <li>{{ project.title }}</li>
    </ul> -->

</template>


<style lang="scss">

</style>