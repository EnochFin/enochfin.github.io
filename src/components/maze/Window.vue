<template>
    <div ref="win" class="window-comp" data-id="window-component">
        <v-stage :config="mazeConfig" class="window-stage">
            <v-layer>
                <Maze v-bind="mazeConfig"></Maze>
                <v-text :config="textConfig"></v-text>
            </v-layer>
        </v-stage>
        <ul>
            <li><button @click="handleInit">Init</button></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, onMounted, onUpdated, ref } from 'vue';
import Maze from './Maze.vue';

const win = ref();

defineComponent(Maze);
const props = defineProps(['width', 'height']);
const winWidth = props.width;
const winHeight = props.height;

const mazeConfig = {
    width: winWidth,
    height: winHeight,
}
console.log(mazeConfig);

const textConfig = ref({
    text: 'some text',
    x: 50,
    y: 50,
});

const handleInit = (e) => {
    const nextTextConfig = textConfig.value;
    nextTextConfig.text = 'initializing!';
    textConfig.value = nextTextConfig;
}
</script>

<style scoped>
.window-comp {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
}

.window-stage {
    width: 100%;
    height: 100%;
}
</style>
  