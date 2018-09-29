<template>
  <div class="about main-content">
      <div class="left-content">
          <h1>This is an about page</h1>
          <p>I do somethining important with my young team</p>

           <button><router-link to="/portfolio/one">Look at my work</router-link></button>
      </div>
      <div class="right-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis delectus eum libero molestias quas repudiandae sit unde. Ad culpa cumque est facere. Assumenda ea hic, minus nam sequi suscipit!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis delectus eum libero molestias quas repudiandae sit unde. Ad culpa cumque est facere. Assumenda ea hic, minus nam sequi suscipit!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis delectus eum libero molestias quas repudiandae sit unde. Ad culpa cumque est facere. Assumenda ea hic, minus nam sequi suscipit!</p>

      </div>
  </div>
</template>
<style scoped lang="scss">
    .left-content {
        background: yellow;
    }
    .right-content {
        display: block;
        padding: 100px 20px 20px 20px
    }
</style>