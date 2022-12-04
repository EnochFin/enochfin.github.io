<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
  <div class="welcome">
    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>:)</template>
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
