<script setup lang="ts">
import { LoremIpsum } from 'lorem-ipsum'
const lorem = new LoremIpsum()
</script>

<template lang="pug">

div {{ lorem.generateParagraphs(7) }}
</template>
