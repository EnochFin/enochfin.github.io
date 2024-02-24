<template>
    <div class="window" data-id="window-component">
        <v-stage :config="configKonva">
            <v-layer>
                <maze></maze>
            </v-layer>
        </v-stage>
    </div>
</template>

<script lang="ts">
import Maze from './Maze.vue';
export default {
    components: { Maze },
    props: ['width', 'height'],
    data() {
        return {
            configKonva: {
                width: this.width,
                height: this.height
            },
            configCircle: {
                x: 100,
                y: 100,
                radius: 70,
                fill: "red",
                stroke: "black",
                strokeWidth: 4
            }
        };
    }
};

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
  