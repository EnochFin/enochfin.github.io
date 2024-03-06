<template>
    <div>
        <div class="maze-view" data-id="maze-view">
            <Window v-bind="size"></Window>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Window from '../components/maze/Window.vue';

const size = ref({ width: 500, height: 500 });

</script>

<style>
.maze-view {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>
  