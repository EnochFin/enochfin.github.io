<template>
    <div class="window" data-id="window-component">
        <v-stage :config="configKonva">
            <v-layer>
                <maze></maze>
            </v-layer>
        </v-stage>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import Maze from './Maze.vue';

defineComponent(Maze);
const props = defineProps(['width', 'height']);

const configKonva = ref({
    width: props.width,
    height: props.height
});
console.log(configKonva.value);
</script>

<style>
@media (min-width: 1024px) {
    .art {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }

}

.art-list li img {
    width: 425px;
    align-items: center;
}

.art-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.art ul li img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: .5rem;
    width: 50%;
}
</style>
  