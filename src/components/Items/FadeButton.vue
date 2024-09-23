<template>
  <button
    class="border-4 rounded-full border-black hvr-fade hvr-shrink"
    alt="一个在你悬停时会进行淡入淡出效果的按钮"
  >
    <p class="my-[25px] mx-[50px] text-xl tracking-tight">Fade Animation</p>
  </button>
</template>

<script setup>
// import 'animate.css';
</script>

<style>
.hvr-fade {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: color, background-color, transform;
  transition-property: color, background-color, transform;
}
.hvr-fade:hover,
.hvr-fade:focus,
.hvr-fade:active {
  background-color: #000000;
  color: white;
}

/* Shrink */
.hvr-shrink:hover,
.hvr-shrink:focus {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}
</style>
