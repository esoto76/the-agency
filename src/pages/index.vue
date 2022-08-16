<script setup lang="ts">
const { services } = useMainStore();
</script>
<template>
  <section class="page is-landing">
    <div class="page-inner">
      <div class="page-card" v-for="s in services" :key="s.name">
        <h3 class="page-card-title">{{ s.title }}</h3>
        <template v-for="(t, i) in s.txt" :key="'txt' + i">
          <ul v-if="Array.isArray(t)">
            <li v-for="(tt, i) in t" :key="'tt' + i">{{ tt }}</li>
          </ul>
          <p v-else>{{ t }}</p>
        </template>
      </div>
    </div>
  </section>
</template>
