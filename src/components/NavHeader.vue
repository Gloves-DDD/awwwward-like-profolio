<template>
  <nav id="nav_bar" class="fixed z-10 px-10 py-5 mix-blend-difference">
    <ul class="font-MabryPro flex gap-10 text-2xl font-bold text-white">
      <li>
        <RouterLink to="/">
          <p>Portfolio</p>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/test">
          <p>TestField</p>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
