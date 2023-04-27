<script>
export default {
    name: "AppLoader",
}

</script>


<template>
    
    <div class="loader position-fixed bottom-0 end-0 start-0 top-0">
        <i class="bi bi-flower1 me-2"></i>
        <h3> Loading.. </h3>
        <i class="bi bi-flower1 ms-2"></i>
    </div>

</template>


<style lang="scss" scoped>

.loader {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);

    z-index: 99;

    i, h3 {
        font-size: 50px;
        color: pink;
    }

}

</style>