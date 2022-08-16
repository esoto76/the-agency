<script setup lang="ts"></script>

<template>
  <Header />
  <div class="content-bx">
    <div class="content-top-bx">
      <Banner />
      <Navbox />
    </div>
    <router-view></router-view>
  </div>
  <Footer />
</template>
