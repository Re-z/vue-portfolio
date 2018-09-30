<template>
    <div class="home main-content">
        <router-link to="/" class="btn btn_center btn_up"></router-link>
        <router-link to="/picture/two" class="btn btn_center btn_down"></router-link>

        <div class="left-content slideUp bg-2">
            <h1>Intelligence</h1>
            <p>German Shepherds were bred specifically for their intelligence,[15] a trait for which they are now famous.[6] In the book The Intelligence of Dogs, author Stanley Coren ranked the breed third for intelligence, behind Border Collies and Poodles.[16][17] He found that they had the ability to learn simple tasks after only five repetitions and obeyed the first command given 95% of the time.[6]</p>
            <p>Coupled with their strength, this trait makes the breed desirable as police, guard and search and rescue dogs, as they are able to quickly learn various tasks and interpret instructions better than other breeds.[18]</p>
        </div>
        <div class="right-content img-2">
        </div>
    </div>

</template>

<style scoped>
    .bg-2 {
        background: lightgoldenrodyellow;
    }
    .img-2 {
        background: url('../assets/dog-2.jpg') right center;
        -webkit-background-size: cover;
        background-size: cover;
    }
</style>