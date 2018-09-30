<template>
  <div id="app">
      <div class="container">
          <div class="inner">
              <nav>
                  <router-link to="/" id="logo">German Shepherds</router-link>
                  <ul class="menu">
                      <li><router-link to="/">Home</router-link></li>
                      <li><router-link to="/picture/one">Pictures</router-link></li>
                      <li><router-link to="/read">Read</router-link></li>
                  </ul>
              </nav>
              <transition name="fade" mode="out-in">
                  <router-view />
              </transition>
          </div>
      </div>
  </div>
</template>

<style lang="sass" src="./global.sass"></style>
