<template>
  <div id="app">

      <div class="container">
          <div class="inner">
              <nav>
                  <router-link to="/" id="logo">Bla bla logo</router-link>
                  <ul class="menu">
                      <li><router-link to="/">Home</router-link></li>
                      <li><router-link to="/about">About</router-link></li>
                      <li><router-link to="/about2">About2</router-link></li>
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
