<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    <RouterView />
  </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.wrapper {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background: #111;
}
.main {
  width: 100%;
  height: 92vh;
  padding: 0px 20px;
  margin: 0 auto;
  overflow: scroll;
  background: #111;
}
::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar-track {
  display: none;
}
</style>
