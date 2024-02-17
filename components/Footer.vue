<script setup lang="ts">
const { footer } = useAppConfig();
</script>

<template>
  <UFooter>
    <template #left>
      <NuxtLink :to="footer.credits.to"> {{ footer.credits.label }}</NuxtLink>
    </template>

    <template #right>
      <UColorModeButton v-if="footer?.colorMode" />

      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
