<script setup>
import FormModal from './FormModal.vue'
import { ref } from 'vue'

const showModal = ref(false)

const openModal = () => (showModal.value = true)
</script>

<template>
  <button
    @click="openModal"
    class="rounded-3xl bg-black px-[1rem] py-[0.5rem] text-[0.7rem] tracking-wider text-white lg:ml-auto"
  >
    Start a project
  </button>
  <FormModal :show="showModal" @close="showModal = false" title="Demo Modal" />
</template>
