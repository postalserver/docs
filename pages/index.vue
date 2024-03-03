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
  wrapper: "py-12 sm:py-24 md:pt-24 md:pb-2 relative",
}
</script>

<template>
  <div>
    
    <ULandingHero :ui="ui" v-if="page.hero" v-bind="page.hero">
      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          <UIcon
              v-if="page.hero.headline.icon"
              :name="page.hero.headline.icon"
              class="mr-2 w-5 h-5 pointer-events-none"
            />

          <NuxtLink
            :to="page.hero.headline.to"
            target="_blank"
            class="focus:outline-none"
            tabindex="-1"
          >
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

        </UBadge>
      </template>

      <template #title>
        <MDC :value="page.hero.title" />
      </template>

      <UColorModeImage
        light="/screenshot.png"
        dark="/screenshot.png"
      />
    </ULandingHero>

    <ULandingSection :title="page.features.title" :links="page.features.links">
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
