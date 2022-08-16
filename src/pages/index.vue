<script setup lang="ts">
const { locatorService, moveOutService, propertyManagementService } =
  useMainStore();
const siteData = reactive({
  title: `The Agency - Real Estate and Property Management`,
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
  <section class="page is-landing">
    <div class="page-grid">
      <div class="landing-grid-top">
        <div class="landing-grid-bx">
          <div class="landing-grid-title-bx">
            <h3 class="landing-grid-title">{{ locatorService.title }}</h3>
          </div>
          <div class="landing-grid-bx-body">
            <p>{{ locatorService.txt }}</p>
          </div>
        </div>
        <div class="landing-grid-bx">
          <div class="landing-grid-title-bx">
            <h3 class="landing-grid-title">{{ moveOutService.title }}</h3>
          </div>
          <div class="landing-grid-bx-body">
            <p>{{ moveOutService.txt }}</p>
          </div>
        </div>
      </div>
      <div class="landing-grid-bx is-pm-grid">
        <div class="landing-grid-title-bx">
          <h3 class="landing-grid-title">
            {{ propertyManagementService.title }}
          </h3>
        </div>
        <div class="landing-grid-bx-body">
          <ul>
            <li
              v-for="(t, i) in propertyManagementService.list"
              :key="'pm' + i"
            >
              {{ t }}
            </li>
          </ul>
          <p>{{ propertyManagementService.txt }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
