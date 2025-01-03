<template>
  <!-- WeLoveOurClients  -->
  <div
    id="we_love_our_clients"
    class="w-[100vw] h-[50vw] border-4 border-red-400 flex flex-col items-center justify-center"
  >
    <!-- Text Part -->
    <div id="we_love_our_clients_text_container" class="overflow-hidden border-4 border-cyan-400">
      <p id="we_love_our_clients_text" class="text-[4rem] m-[1rem]">We Love Our Clients</p>
    </div>

    <!-- Marquee Part -->
    <div
      id="we_love_our_clients_marquee_container"
      class="h-auto w-auto border-2 border-black origin-center m-[1rem] rounded-[2.2rem] flex items-center"
    >
      <div
        id="we_love_our_clients_marquee"
        class="h-[7rem] relative overflow-hidden flex items-center"
        :style="parentWidthValue"
      >
        <div id="element_0" :style="childrenStyleValue" class="absolute flex justify-center">
          <div class="bg-red-500 rounded-2xl w-[4rem] h-[4rem]"></div>
        </div>
        <div id="element_1" :style="childrenStyleValue" class="absolute flex justify-center">
          <div class="bg-orange-500 rounded-2xl w-[6rem] h-[2rem]"></div>
        </div>
        <div id="element_2" :style="childrenStyleValue" class="absolute flex justify-center">
          <div class="bg-yellow-400 rounded-2xl w-[4rem] h-[4rem]"></div>
        </div>
        <div id="element_3" :style="childrenStyleValue" class="absolute flex justify-center">
          <div class="bg-green-500 rounded-2xl w-[6rem] h-[2rem]"></div>
        </div>
        <div id="element_4" :style="childrenStyleValue" class="absolute flex justify-center">
          <div class="bg-cyan-400 rounded-2xl w-[4rem] h-[4rem]"></div>
        </div>
        <div id="element_5" :style="childrenStyleValue" class="absolute flex justify-center">
          <div class="bg-blue-500 rounded-2xl w-[6rem] h-[2rem]"></div>
        </div>
        <div id="element_6" :style="childrenStyleValue" class="absolute flex justify-center">
          <div class="bg-purple-400 rounded-2xl w-[4rem] h-[4rem]"></div>
        </div>
        <div id="element_7" :style="childrenStyleValue" class="absolute flex justify-center">
          <div class="bg-purple-950 rounded-2xl w-[6rem] h-[2rem]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
var parentWidth = 61
var childrenWidth = 6
var parentWidthValue = `width: ${parentWidth}rem`
var childrenStyleValue = `width: ${childrenWidth}rem; left:${parentWidth}rem`
function weLoveOurClients() {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#we_love_our_clients',
        toggleActions: 'play pause',
        start: 'top center',
        end: '+=900',
        scrub: 0.5,
        anticipatePin: 1,
        markers: {
          startColor: 'red',
          endColor: 'red',
          fontSize: '10px',
          indent: 0
        }
      }
    })
    // 背景颜色渐变
    .to('#background_layer', { background: '#f5f5f5', duration: 2 })
    // text位移入场
    .from(
      '#we_love_our_clients_text',
      {
        y: '-7rem',
        duration: 3
      },
      '<'
    )
    // marquee位移入场
    .from(
      '#we_love_our_clients_marquee_container',
      {
        width: '7rem',
        opacity: 0,
        duration: 3
      },
      '<'
    )
    // text位移离场
    .to('#we_love_our_clients_text', { y: '7rem', duration: 4 }, '>3')
    // marquee位移离场
    .to('#we_love_our_clients_marquee_container', { y: '5rem', opacity: 0, duration: 4 }, '<')
    // 背景渐变
    .to('#background_layer', { background: '#3d7353', duration: 3 }, '<1')

  return tl
}
function WLOCmarquee() {
  var marquee_container = document.getElementById('we_love_our_clients_marquee')
  var children = marquee_container.children.length
  var duration = children * 2.4
  var lead = duration / children
  var left = childrenWidth * children - parentWidth + 'rem'

  var WLOCmarquee = gsap.timeline()
  for (let i = 0; i < children; i++) {
    if (i === 0) {
      var tween_0 = gsap.to(`#element_${i}`, {
        ease: 'none',
        left: left,
        repeat: -1,
        duration: duration
      })
      WLOCmarquee.add(tween_0)
    } else {
      var tween = gsap.to(`#element_${i}`, {
        ease: 'none',
        left: left,
        repeat: -1,
        duration: duration
      })
      WLOCmarquee.add(tween, `<${lead}`)
    }
  }
}
var tl = gsap.timeline()
tl.add(WLOCmarquee)
tl.add(weLoveOurClients)
</script>
