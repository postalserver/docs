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

    <div class='relative overflow-hidden w-full h-full bg-blue-500 bg-cover bg-center' style="background-image:url(/factory.jpg)">      
      <div class='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col lg:flex-row'>
        <div class='lg:w-6/12 py-12 lg:py-32'>
          <h1 class='mb-4 mt-6'><img src='/logo-dark.svg' class='w-[225px] h-auto'></h1>
          <p class='mb-8 drop-shadow-lg text-lg text-white'>
            <b>Postal</b> is a complete and fully featured mail delivery platform for use by websites & web servers.
            Think Sendgrid, Mailgun or Postmark but open source and ready for you to run on your own servers.
          </p>
          <div class='flex space-x-4'>
            <UButton label="Get started now" icon="i-heroicons-arrow-right-20-solid" :trailing="true" to="/getting-started" size="xl" />
            <UButton label="Watch a video" icon="i-simple-icons-youtube" size="xl" color="yellow" to="https://www.youtube.com/watch?v=d1Lzw_Q_fJQ" target="_blank" />            
          </div>
        </div>
        <div class='hidden lg:flex lg:w-6/12 items-center flex'>
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
