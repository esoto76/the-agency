<script setup lang="ts">
const winScroll = ref(0);

const IsScroll = computed(() => (winScroll.value > 0 ? "is-scroll" : ""));

onMounted(() => {
  window.onscroll = () => {
    winScroll.value = window.scrollY;
    window.onscroll = () => (winScroll.value = window.scrollY);
  };
});
</script>

<template>
  <Header :class="[IsScroll]" />
  <div class="content-bx">
    <div class="content-top-bx">
      <Banner />
      <Navbox />
    </div>
    <router-view></router-view>
  </div>
  <Footer />
</template>
