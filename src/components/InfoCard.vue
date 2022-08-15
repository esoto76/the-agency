<script setup lang="ts">
const { title, mainName, streetAddress, phone } = useMainStore();
</script>
<template>
  <div class="card is-info-card">
    <div class="card-inner">
      <div class="card-body">
        <h2 class="info-card-txt is-name">{{ mainName }}</h2>
        <h3 class="info-card-txt is-title">{{ title }}</h3>
        <h3 class="info-card-txt is-street">{{ streetAddress }}</h3>
        <h3 class="info-card-txt is-phone">{{ phone }}</h3>
      </div>
    </div>
  </div>
</template>
