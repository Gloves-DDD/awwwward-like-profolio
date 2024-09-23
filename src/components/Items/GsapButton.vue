<template>
  <button
    class="border-2 rounded-full border-neutral-800 w-64 h-16 overflow-hidden"
    alt="一个模仿GSAP官网效果的按钮"
  >
    <svg
      version="1.1"
      ref="target"
      @mouseenter="enter"
      @mouseleave="leave"
      baseProfile="full"
      class="w-full h-full bg-neutral-800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle id="targetcircle" :cx="elementX" :cy="elementY" r="0" class="fill-[#FBE7AB]" />

      <text
        id="text"
        x="50%"
        y="60%"
        text-anchor="middle"
        fill="white"
        class="tracking-tight text-[1.15rem]"
      >
        Gsap Button
      </text>
    </svg>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import gsap from 'gsap'

const target = ref(null)

const { elementX, elementY } = useMouseInElement(target)

function enter() {
  gsap.to('#targetcircle', {
    r: 270,
    duration: 0.4
  })
  gsap.to('text', {
    fill: 'black',
    duration: 0.3
  })
}

function leave() {
  gsap.to('#targetcircle', {
    r: 0
  })
  gsap.to('text', {
    fill: 'white',
    duration: 0.3
  })
}
</script>

<style scoped></style>
