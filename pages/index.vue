<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});

defineOgImage({
  component: "Docs",
  title: page.value.title,
  description: page.value.description,
});

const ui = {
  wrapper: "pt-0 sm:pt-0 md:pt-0 pb-24",
}
</script>

<template>
  <div>

    <div class='relative overflow-hidden w-full h-full bg-cover bg-[#2A4147] bg-center' style="background-image:url(/factory.jpg)">      
      <div class='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row'>
        <div class='text-center lg:text-left lg:w-7/12 py-24 px-6 md:px-12 lg:py-32'>
          <h1 class='mb-8 mt-6 mx-auto'><img src='/logo-dark.svg' class='w-[180px] md:w-[225px] inline-block h-auto drop-shadow-lg'></h1>
          <p class='mb-12 drop-shadow-lg text-lg text-white'>
            <b>Postal</b> is a complete and fully featured mail delivery platform for use by websites & web servers.
            Think Sendgrid, Mailgun or Postmark but open source and ready for you to run on your own servers.
          </p>
          <div class='flex gap-4 flex-col justify-center md:flex-row lg:justify-start'>
            <p><UButton label="Get started now" icon="i-heroicons-arrow-right-20-solid" :trailing="true" to="/getting-started" size="xl" /></p>
            <p><UButton label="Watch a video" icon="i-simple-icons-youtube" size="xl" color="yellow" to="https://www.youtube.com/watch?v=d1Lzw_Q_fJQ" target="_blank" /></p>
          </div>
        </div>
        <div class='hidden lg:flex lg:w-5/12 items-center flex'>
          <img src='/screenshots.png'>
        </div>
      </div>
    </div>

    <ULandingSection :ui="ui" :links="page.features.links">
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) of page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>
