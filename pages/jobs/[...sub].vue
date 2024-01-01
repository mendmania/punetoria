<script setup>
import {getIdBySubCategory} from "~/utils/getIdBySubCategory";

const router = useRouter();
const { params } = router.currentRoute.value;
const [sub] = params.sub;

const categoryId = getIdBySubCategory(sub)
console.log(getIdBySubCategory(sub));
</script>

<template>
  <div>
    <button>categoryId</button>
    {{ categoryId }}
  </div>
</template>

<style>
</style>