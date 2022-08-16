<script setup lang="ts">
const siteData = reactive({
  title: `The Agency - Contact Us`,
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
  <section class="page is-contact">
    <div class="page-inner">
      <div class="contact-form-bx">
        <form class="contact-form">
          <div class="contact-form-title">contact us</div>
          <div class="contact-form-entry-bx first-name">
            <label for="firstName"> first name</label>
            <input type="text" name="firstName" />
          </div>
          <div class="contact-form-entry-bx last-name">
            <label for="lastName">last name</label>
            <input type="text" name="lastName" />
          </div>
          <div class="contact-form-entry-bx email">
            <label for="email">email</label> <input type="email" name="email" />
          </div>
          <div class="contact-form-entry-bx phone">
            <label for="phone">phone</label> <input type="tel" name="phone" />
          </div>
          <div class="contact-form-entry-bx subject">
            <label for="subject">subject</label>
            <input type="text" name="subject" />
          </div>
          <div class="contact-form-entry-bx comments">
            <label for="comments">comments</label>
            <textarea type="text" name="comments"></textarea>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
