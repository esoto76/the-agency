<script setup lang="ts">
const siteData = reactive({
  title: `The Agency - Rentals`,
  description: `Real Estate and Property Management Company.`,
});

useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
  ],
});
</script>

<template>
  <section class="page is-rentals">
    <div class="page-inner">
      <iframe
        loading="lazy"
        src="https://benchmarkrentals.managebuilding.com/Resident/Public/Rentals?hidenav=true"
        scrolling="yes"
        crossorigin="anonymous"
      ></iframe>
    </div>
  </section>
</template>
