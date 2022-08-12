<script setup lang="ts">
import { useMainStore } from "@/stores/main";
const { title } = useMainStore();
</script>

<template>
  <header class="header">
    <div class="headbar">
      <div class="headbar-bx is-logo-bx">
        <LogoSvg />
        <h1 class="title-bx">{{ title }}</h1>
      </div>
    </div>
  </header>
</template>
