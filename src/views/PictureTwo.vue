<template>
    <div class="home main-content">
        <router-link to="/picture/one" class="btn btn_up btn_center"></router-link>
        <router-link to="/picture/three" class="btn btn_down btn_center"></router-link>

        <div class="left-content slideDown bg-3">
            <h1>Temperament</h1>
            <p>German Shepherds are moderately active dogs and are described in breed standards as self-assured.[12] The breed is marked by a willingness to learn and an eagerness to have a purpose. They are curious, which makes them excellent guard dogs and suitable for search missions. They can become over-protective of their family and territory, especially if not socialized correctly.[19]</p>
            <p>They are not inclined to become immediate friends with strangers.[20] German Shepherds are highly intelligent and obedient, as well as being protective of their owners.[21]</p>
        </div>
        <div class="right-content img-3">
        </div>
    </div>

</template>


<style scoped>
    .bg-3 {
        background: lightcyan;
    }
    .img-3 {
        background: url("../assets/dog-3.jpg") center center no-repeat;
        background-size: cover;
    }
</style>