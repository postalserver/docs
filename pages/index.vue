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
  wrapper: "pt-0 py-0 sm:pt-0 md:pt-0 pb-24 lg:pb-24",
}
</script>

<template>
  <div>
    <p class="bg-green-500 text-lg py-4 text-center text-white">
      <b>Postal v3 is now available</b> &mdash; upgrade by following our <a href='/getting-started/upgrading' class="underline font-semibold">upgrade guide</a>
    </p>

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

    <div class='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-24 w-full'>
      <h3 class="text-center text-2xl dark:text-slate-500 font-medium">The Postal project is supported by</h3>
      <ul class="flex justify-center items-center gap-16 mt-10">
        <li>
          <a target='_blank' href='https://krystal.io'>
            <UColorModeImage light="/supporters/krystal-light.svg" dark="/supporters/krystal-dark.svg" class="w-[200px]" />
          </a>
        </li>
        <li>
          <a target='_blank' href='https://katapult.io'>
            <UColorModeImage light="/supporters/katapult-light.svg" dark="/supporters/katapult-dark.svg" class="w-[210px]" />
          </a>
        </li>
      </ul>
      <p class="md:w-7/12 text-center mx-auto leading-8 mt-10 text-lg text-slate-400">
        If you want to help support this project, please get in touch with the team. A good place to start is
        <a class='underline' href='https://discord.postalserver.io'>Discord</a> otherwise drop an e-mail to
        <a href='mailto:team@postalserver.io' class="underline">team@postalserver.io</a>.</p>
      
    </div>
  </div>
</template>
