<!-- NON VA -->

<!-- <script>
export default {
    name: "AppPagination",
    props: {
        pages: Array,
    },
}
</script>


<template>

    <div class="mt-auto pagination-custom" v-if="projects.length">
        <nav aria-label="Page Navigation">
            <ul class="pagination">
                <li class="page-item" v-for="page in pages">
                    <button type="button" class="page-link" v-on:click="$emit('changePage', page.url)" v-bind:class="{ disabled: !page.url, active: page.active }" v-html="page.label"></button>
                </li>
            </ul>
        </nav>
    </div>

</template>


<style lang="scss">

</style> -->