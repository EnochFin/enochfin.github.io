<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
</script>

<template>
  <div class="welcome">
    <WelcomeItem>
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-cube" />
      </template>
      <template #heading><a href="https://github.com/EnochFin/enochfin.github.io">enochfin.github.io</a></template>
      This is a github pages project that is designed to showcase my web-based projects and art.
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-map" />
      </template>
      <template #heading>
        <RouterLink to="/maze">Maze</RouterLink>
      </template>
      This is a collection of Maze Train challenges that I've worked through.
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-camera" />
      </template>
      <template #heading>
        <RouterLink to="/art">Art</RouterLink>
      </template>
      This is a collection of some Art I've made.
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-gamepad" />
      </template>
      <template #heading>
        <RouterLink to="/game">Game</RouterLink>
      </template>
      This is a very rough unity game I made.
    </WelcomeItem>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .welcome {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

.art-item img {
  width: 425px;
  align-items: center;
}

.art-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
