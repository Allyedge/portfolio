<template>
  <div class="transition ease-in-out hover:brightness-75">
    <a :href="link" target="blank">
      <img :src="'/images' + image" class="w-full object-cover md:h-96" />
      <div class="mt-4 flex flex-row">
        <h1 class="font-semibold">{{ name }}</h1>
        <h1 class="ml-auto font-semibold">{{ year }}</h1>
      </div>
      <p class="my-4 text-sm">
        {{ description }}
      </p>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  description: String,
  year: Number,
  image: String,
  link: String,
});
</script>
