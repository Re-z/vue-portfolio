<template>
    <div class="home main-content">
        <router-link to="/portfolio/two" class="btn btn-down"><button>down</button></router-link>

        <div class="left-content slideUp">
            <h1>Portfolio ONE H1</h1>
            <p>some text</p>
        </div>
        <div class="right-content bg-2">
        </div>
    </div>

</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'PortfolioOne',
        components: {
            HelloWorld
        }
    }
</script>
<style scoped>
    .bg-2 {
        background: cornflowerblue;
    }
</style>