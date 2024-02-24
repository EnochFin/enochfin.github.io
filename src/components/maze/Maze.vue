<template>
    <v-rect :config="configRect" data-id="maze-component"></v-rect>
</template>

<script setup lang="ts">
const configRect = {
    x: 100,
    y: 100,
    fill: "orange",
    stroke: "black",
    strokeWidth: 4
};
</script>
  