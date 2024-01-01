<script setup>
import { JOB_CATEGORIES } from "~/constants/JOB_CATEGORIES";
</script>

<template>
  <div class="">
    <ListCategoires
      v-for="list in JOB_CATEGORIES"
      :key="list.category"
      :category="list.category"
      :subCategories="list.subCategories"
    />
  </div>
</template>

<style>
</style>