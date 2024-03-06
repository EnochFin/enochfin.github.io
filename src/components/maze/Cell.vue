<template>
    <v-line v-if="left" :config="leftLineConfig"></v-line>
    <v-line v-if="right" :config="rightLineConfig"></v-line>
    <v-line v-if="bottom" :config="bottomLineConfig"></v-line>
    <v-line v-if="top" :config="topLineConfig"></v-line>
    <v-line v-if="line" :config="drawLineConfig"></v-line>
    <v-circle :config="visitedConfig"></v-circle>
</template>

<script setup lang="ts">
import { ref } from "vue";


const props = defineProps(['id', 'x', 'y', 'visited', 'walls', 'lineX', 'lineY']);

const visited = props.visited;
const walls = props.walls;
const padding = 10;
const scale = 20
const x1 = padding + (props.x * scale);
const y1 = padding + (props.y * scale);
const x2 = x1 + scale;
const y2 = y1 + scale;

const line = props.lineX != 0 && props.lineY != 0;

// lrtb
const left = (walls & 1) == 1;
const right = (walls & 2) == 2;
const top = (walls & 4) == 4;
const bottom = (walls & 8) == 8;

const wallColor = 'black';
const lineColor = 'orange';

const leftLineConfig = {
    points: [x1, y1, x1, y2],
    stroke: wallColor,
    strokeWidth: 2,
};
const rightLineConfig = {
    points: [x2, y1, x2, y2],
    stroke: wallColor,
    strokeWidth: 2,
};
const bottomLineConfig = {
    points: [x1, y2, x2, y2],
    stroke: wallColor,
    strokeWidth: 2,
};
const topLineConfig = {
    points: [x1, y1, x2, y1],
    stroke: wallColor,
    strokeWidth: 2,
};

const drawLineConfig = {
    points: [(x1 + x2) / 2, (y1 + y2) / 2, props.lineX, props.lineY],
    stroke: lineColor,
    strokeWidth: 2,
}

const visitedConfig = {
    x: x1 + (x2 - x1) * .7,
    y: y1 + (y2 - y1) * .3,
    radius: 3,
    fill: visited ? 'green' : 'red',
    stroke: wallColor,
    strokeWidth: 2,
}

</script>