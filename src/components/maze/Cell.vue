<template>
    <v-line v-if="top" ref="cell" :config="topLineConfig"></v-line>
    <v-line v-if="bottom" ref="cell" :config="bottomLineConfig"></v-line>
    <v-line v-if="right" ref="cell" :config="rightLineConfig"></v-line>
    <v-line v-if="left" ref="cell" :config="leftLineConfig"></v-line>
</template>

<script setup lang="ts">
import { ref } from "vue";

const left = ref(true);
const right = ref(true);
const top = ref(true);
const bottom = ref(true);

const props = defineProps(['id', 'x', 'y']);

const scale = 20
const x1 = props.x * scale;
const y1 = props.y * scale;
const x2 = x1 + scale;
const y2 = y1 + scale;

const topLineConfig = {
    points: [x1, y1, x2, y1],
    stroke: 'green',
    strokeWidth: 2,
};
const bottomLineConfig = {
    points: [x1, y2, x2, y2],
    stroke: 'green',
    strokeWidth: 2,
};
const rightLineConfig = {
    points: [x2, y1, x2, y2],
    stroke: 'green',
    strokeWidth: 2,
};
const leftLineConfig = {
    points: [x1, y1, x1, y2],
    stroke: 'green',
    strokeWidth: 2,
};

</script>
  