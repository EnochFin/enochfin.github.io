<template>
    <div class="maze" data-id="maze-component">
        <v-square :config="configSquare"></v-square>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            configSquare: {
                x: 100,
                y: 100,
                fill: "orange",
                stroke: "black",
                strokeWidth: 4
            }
        };
    }
};

</script>

<style>
.maze {
    align-items: center;
}
</style>
  