<template>
  <div id="container" class="w-[18rem] h-[15rem] border-[1px] border-black relative">
    <div id="ball_1" class="w-[4rem] h-[4rem] rounded-full bg-[#ec6a52] absolute"></div>
    <div
      id="ball_points"
      class="w-[0.5rem] h-[0.5rem] rounded-full bg-[#d42926] absolute top-[33px] left-[33px]"
    ></div>
    <div
      id="ball_points"
      class="w-[0.5rem] h-[0.5rem] rounded-full bg-[#d42926] absolute top-[33px] left-[133px]"
    ></div>
    <div
      id="ball_points"
      class="w-[0.5rem] h-[0.5rem] rounded-full bg-[#d42926] absolute top-[33px] left-[233px]"
    ></div>
    <div
      id="ball_points"
      class="w-[0.5rem] h-[0.5rem] rounded-full bg-[#d42926] absolute top-[133px] left-[33px]"
    ></div>
    <div
      id="ball_points"
      class="w-[0.5rem] h-[0.5rem] rounded-full bg-[#d42926] absolute top-[133px] left-[133px]"
    ></div>
    <div
      id="ball_points"
      class="w-[0.5rem] h-[0.5rem] rounded-full bg-[#d42926] absolute top-[133px] left-[233px]"
    ></div>
    <div
      id="ball_points"
      class="w-[0.5rem] h-[0.5rem] rounded-full bg-[#d42926] absolute top-[233px] left-[33px]"
    ></div>
    <div
      id="ball_points"
      class="w-[0.5rem] h-[0.5rem] rounded-full bg-[#d42926] absolute top-[233px] left-[133px]"
    ></div>
    <div
      id="ball_points"
      class="w-[0.5rem] h-[0.5rem] rounded-full bg-[#d42926] absolute top-[233px] left-[233px]"
    ></div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
gsap.registerPlugin(Draggable, InertiaPlugin)
onMounted(() => {
  Draggable.create('#ball_1', {
    type: 'x,y',
    inertia: { x: { end: [0, 100, 200] }, y: { end: [0, 100, 200] } },
    onDragEnd: function () {
      console.log(this.endX + ',' + this.endY)
    }
  })
})
</script>
