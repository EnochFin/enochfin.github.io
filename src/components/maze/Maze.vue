<template>
    <v-rect ref="maze" :config="configRect" data-id="maze-component"></v-rect>
    <Cell v-for="cell in cells" :key="cell.id" v-bind="cell"></Cell>
</template>

<script setup lang="ts">
import { nextTick } from "process";
import { ref, onMounted, onUpdated } from "vue";
import Cell from './Cell.vue';

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

const num = 100;
let cellsInit = Array(num);
for (let ind = 0; ind < num; ind++) {
    let yInd = Math.floor(ind / 10);
    let xInd = ind % 10;
    cellsInit[ind] = { id: ind, x: xInd, y: yInd, };
}

const cells = ref(cellsInit);

</script>
  