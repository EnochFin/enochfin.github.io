<template>
  <div class="game-page">
    <h1>{{ title }}</h1>
    <p>{{ desc }} {{ date }}</p>
    <GameContent></GameContent>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    title: String,
    desc: String,
    date: Date,
  },
})
export default class GamePage extends Vue {
  title!: string;

  desc!: string;

  date!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}
</style>
