<template>
    <div>
        <div class="webgl-content">
  <div id="unityContainer" style="width: 960px; height: 600px"></div>
  <div class="footer">
    <div class="webgl-logo"></div>
    <div class="fullscreen" onclick="unityInstance.SetFullscreen(1)"></div>
    <div class="title">3rdP TD</div>
  </div>
</div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const val = ref('<h1>asdf</h1>');
onMounted(() => {
    UnityLoader.instantiate('unityContainer', 'deps/unity/build/enochfin.github.io.json', { onProgress: UnityProgress });
});

</script>

<style>
.game-view {
    justify-content: center;
    flex-direction: column;
}
</style>