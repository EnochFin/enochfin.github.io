<template>
  <div class="greetings" data-id="hello-component">
    <h1>{{ msg }}</h1>
    <h3>
      You can find the source <a href="https://github.com/EnochFin/enochfin.github.io" target="_blank"
        rel="noopener">Here</a>
    </h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['msg'])
</script>

<style scoped >
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media(min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
