<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import EhoSvg from "./components/EhoSvg.vue";
</script>

<template>
  <Header />
  <div class="card-con content-bx">content box</div>
  <footer class="card-con foot-bx">
    <div class="footer-bx is-eho"><EhoSvg /></div>
  </footer>
</template>
