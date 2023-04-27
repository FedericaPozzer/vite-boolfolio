<script>
import { stringifyQuery } from 'vue-router';

export default {
    name: "AppHeader",

    props: {
        title: String,
    }
};
</script>

<template>
    
    <nav class="navbar bg-body-tertiary">
        <div class="container">
            <span class="navbar-brand mb-0 h1">{{ title }}</span>

            <div class="d-flex">
                <router-link :to="{name: 'home'}" class="nav-link mx-2">
                    Homepage
                </router-link>

                <router-link :to="{ name: 'contacts' }" class="nav-link mx-2">
                    Contacts
                </router-link>
            </div>
        </div>
    </nav>

</template>

<style lang="scss" scoped>
    .navbar {
        color: pink;

        span {
            color: rgb(217, 114, 131);
        }

        .active, :hover {
            color: rgb(217, 114, 131);
        }
    }

</style>
