<script setup lang="ts">
import { LoremIpsum } from 'lorem-ipsum'
const lorem = new LoremIpsum()

defineProps({
  title: String
})
</script>

<template lang="pug">
h1(class="text-3xl mb-4") {{ title }}
div {{ lorem.generateParagraphs(3) }}
</template>
