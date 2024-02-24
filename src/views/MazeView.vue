<template>
    <div class="maze-view" data-id="maze-view">
        <Window v-bind="win_size"></Window>
    </div>
</template>

<script setup lang="ts">
import Window from '../components/maze/Window.vue';

const win_size = { width: 200, height: 200 }
</script>

<style>
.maze-view {
    width: 425px;
    align-items: center;
}
</style>
  