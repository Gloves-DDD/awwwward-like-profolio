<template>
  <div id="container" class="w-[15rem] h-[15rem] border-[1px] border-black text-center">
    <svg
      ref="eye"
      version="1.1"
      class="w-[15rem] h-[7rem] rounded-[5rem] border-4 border-neutral-800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        id="eye_container"
        x="0.8rem"
        y="0.2rem"
        width="13rem"
        height="6.2rem"
        class="fill-[#f1e8ea]"
      ></rect>
      <circle id="eye_small" cx="50%" cy="50%" r="2.1rem" class="fill-[#39283f]" />
    </svg>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
gsap.registerPlugin(InertiaPlugin, Draggable)

const eye = ref(null)

onMounted(() => {
  Draggable.create('#eye_small', {
    type: 'x,y',
    bounds: '#eye_container',
    inertia: true,
    onDragEnd: function () {
      console.log(this.endX + ',' + this.endY)
    }
  })
})
</script>
