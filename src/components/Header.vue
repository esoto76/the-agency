<script setup lang="ts">
const { title } = useMainStore();
</script>

<template>
  <header class="header">
    <div class="headbar">
      <router-link to="/" class="headbar-bx is-logo-bx">
        <LogoSvg />
        <h1 class="title-bx">{{ title }}</h1>
      </router-link>
    </div>
  </header>
</template>
