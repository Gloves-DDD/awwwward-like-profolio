<template>
  <div class="w-64 h-64 border-4 border-gray-400">
    <svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
      <path
        id="path"
        fill="none"
        stroke-width="40"
        stroke="yellow"
        d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"
      />
      <text>
        <textPath xlink:href="#path" class="font-MabryPro text-[1.5rem]" :startOffset="offsetvalue">
          We go up, then we go down, then up again.
        </textPath>
      </text>
    </svg>
  </div>

  <div id="div" class="w-6 h-6 bg-red-400"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
/* The following plugin is a Club GSAP perk */
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin)

var offsetvalue = ref(0)

onMounted(() => {
  gsap.to('#div', {
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    motionPath: {
      path: '#path',
      align: '#path',
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  })
  gsap.to('#path', { drawSVG: '20% 70%' })
  gsap.to(offsetvalue, { value: 999, duration: 10, ease: 'power2.inOut' })
})
</script>
