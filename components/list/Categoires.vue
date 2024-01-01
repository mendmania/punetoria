<script setup>
const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  subCategories: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="categories-list">
    <h1 class="text-lg font-bold">{{ category }}</h1>
    <NuxtLink v-for="sub in subCategories" :key="sub" :to="`jobs/${sub}`">
      <p class="">{{ sub }}</p>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.categories-list {
}
</style>