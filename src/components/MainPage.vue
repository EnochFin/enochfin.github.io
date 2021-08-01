<template>
  <div class="main-page">
    <h1>Welcome to Enoch's Workshop</h1>
    <GamePage title="Title" desc="Desc" date="01/01/0001"></GamePage>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import GamePage from './GamePage.vue';

@Options({
  props: {
    msg: String,
  },
  components: {
    GamePage,
  },
})
export default class MainPage extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
