<template>
  <div
    id="marquee_container"
    class="h-[5rem] relative overflow-hidden border-4 border-black flex items-center"
    :style="parentWidthValue"
  >
    <div id="element_0" :style="childrenStyleValue" class="absolute flex justify-center">
      <div class="bg-red-500 rounded-2xl w-[2rem] h-[2rem]"></div>
    </div>
    <div id="element_1" :style="childrenStyleValue" class="absolute flex justify-center">
      <div class="bg-orange-500 rounded-2xl w-[6rem] h-[1rem]"></div>
    </div>
    <div id="element_2" :style="childrenStyleValue" class="absolute flex justify-center">
      <div class="bg-yellow-400 rounded-2xl w-[2rem] h-[2rem]"></div>
    </div>
    <div id="element_3" :style="childrenStyleValue" class="absolute flex justify-center">
      <div class="bg-green-500 rounded-2xl w-[6rem] h-[1rem]"></div>
    </div>
    <div id="element_4" :style="childrenStyleValue" class="absolute flex justify-center">
      <div class="bg-cyan-400 rounded-2xl w-[2rem] h-[2rem]"></div>
    </div>
    <div id="element_5" :style="childrenStyleValue" class="absolute flex justify-center">
      <div class="bg-blue-500 rounded-2xl w-[6rem] h-[1rem]"></div>
    </div>
    <div id="element_6" :style="childrenStyleValue" class="absolute flex justify-center">
      <div class="bg-purple-400 rounded-2xl w-[2rem] h-[2rem]"></div>
    </div>
    <div id="element_7" :style="childrenStyleValue" class="absolute flex justify-center">
      <div class="bg-purple-950 rounded-2xl w-[6rem] h-[1rem]"></div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

var parentWidth = 20
var childrenWidth = 6

var parentWidthValue = `width: ${parentWidth}rem`
var childrenStyleValue = `width: ${childrenWidth}rem; left:${parentWidth}rem`
onMounted(() => {
  var marquee_container = document.getElementById('marquee_container')
  var children = marquee_container.children.length
  var duration = children
  var lead = duration / children
  var left = parentWidth - childrenWidth * (children + 1) + 'rem'

  var tl = gsap.timeline({})

  for (let i = 0; i < children; i++) {
    if (i === 0) {
      var tween_0 = gsap.to(`#element_${i}`, {
        ease: 'none',
        left: left,
        repeat: -1,
        duration: duration
      })
      tl.add(tween_0)
    } else {
      var tween = gsap.to(`#element_${i}`, {
        ease: 'none',
        left: left,
        repeat: -1,
        duration: duration
      })
      tl.add(tween, `<${lead}`)
    }
  }
})
</script>
