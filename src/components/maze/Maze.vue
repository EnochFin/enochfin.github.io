<template>
    <v-rect ref="maze" :config="configRect" data-id="maze-component"></v-rect>
</template>

<script setup lang="ts">
import { nextTick } from "process";
import { ref, onMounted, onUpdated } from "vue";

const maze = ref();

const props = defineProps(['width', 'height']);

const configRect = ref({
    x: 0,
    y: 0,
    width: props.width,
    height: props.height,
    fill: "darkgray",
    stroke: "black",
    strokeWidth: 4
});

</script>
  