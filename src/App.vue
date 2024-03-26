<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Hello from './components/Hello.vue';

</script>

<template>
  <header>
    <RouterLink to="/">
      <img alt="Enoch logo" class="logo" src="@/assets/logo.svg" height="150" />
    </RouterLink>
    <div class="wrapper" data-id="app-wrapper">
      <Hello msg="Welcome to Enoch's Workshop" />

      <nav>
        <RouterLink to="/">Projects</RouterLink>
        <RouterLink to="/art">Art</RouterLink>
        <RouterLink to="/maze">Maze</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/game">Game</RouterLink>
      </nav>

      <div id="socials">
        <a href="https://www.linkedin.com/in/enochfinley/"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
        <a href="https://github.com/EnochFin/enochfin.github.io"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a href="https://www.instagram.com/enoch.finley/"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
        <a href="https://discord.gg/xh4vKphXfK"><font-awesome-icon icon="fa-brands fa-discord" /></a>
        <a href="mailto:enochfinley@gmail.com"><font-awesome-icon icon="fa-solid fa-envelope" /></a>
      </div>

    </div>
  </header>

  <RouterView class="router-view" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 40vh;
  display: flex;
  flex-direction: column;
}

.router-view {
  height: 60vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1.5rem;
}

#socials {
  width: 100%;
  font-size: 24px;
  text-align: center;
}

#socials a {
  display: inline-block;
  padding: 0 .3rem;
}

#socials a:first-of-type {
  border: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    max-width: 300px;
    flex-shrink: 1;
  }

  .router-view {
    display: flex;
    flex-grow: 1;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  #socials {
    text-align: left;
    font-size: 24px;
  }
}
</style>
