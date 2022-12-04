<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
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
        <font-awesome-icon icon="fa-solid fa-train" />
      </template>
      <template #heading><a href="/codingtrain">Coding Train</a></template>
      This is a collection of Coding Train challenges that I've worked through.
    </WelcomeItem>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .welcome {
    min-height: 100vh;
    display: flex;
    align-items: center;
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
