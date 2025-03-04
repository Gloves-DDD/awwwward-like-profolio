<template>
  <nav id="nav_bar" class="fixed z-10 border-2 border-red-500 px-10 py-5">
    <ul class="flex gap-6">
      <li>
        <RouterLink to="/">
          <p class="text-1xl hvr-underline-from-left font-bold">Portfolio</p>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/testcomponent">
          <p class="text-1xl hvr-underline-from-left font-bold">TestField</p>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.hvr-underline-from-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-left:before {
  content: '';
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: black;
  height: 4px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-left:hover:before,
.hvr-underline-from-left:focus:before,
.hvr-underline-from-left:active:before {
  right: 0;
}
</style>
