<template>
    <div class="home main-content">
        <router-link to="/portfolio/one" class="btn btn-up"><button > up</button></router-link>

        <div class="left-content slideDown">
            <h1>Portfolio TWO  H1</h1>
            <p>some text</p>
        </div>
        <div class="right-content bg-3">
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
    .bg-3 {
        background: chartreuse;
    }
</style>