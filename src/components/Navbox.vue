<script setup lang="ts">
import LogoSvg from "./LogoSvg.vue";
import { useMainStore } from "@/stores/main";
const mainStore = useMainStore();
</script>
<template>
  <div class="card-con navbox">
    <div class="navbar">
      <div class="navbar-bx is-logo">
        <LogoSvg />
        <h1 class="title-bx">{{ mainStore.title }}</h1>
      </div>
    </div>
  </div>
</template>
