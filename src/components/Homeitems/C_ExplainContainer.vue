<template>
  <div
    data-speed="1"
    id="explaincontainer"
    class="w-auto mx-[8rem] my-[4rem] border-2 border-rose-400 overflow-hidden"
  >
    <p
      id="explain"
      class="text-center font-MabryPro font-normal text-[1.4rem] uppercase tracking-wider leading-tight"
    >
      Crafting compelling, data-driven brand<br />
      experiences that connect with audiences’<br />
      emotional core takes a wealth of research and<br />
      understanding.
    </p>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const markerA1 = {
  startColor: 'red',
  endColor: 'green',
  fontSize: '18px',
  indent: 50
}

function explain() {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#explaincontainer',
        toggleActions: 'play pause',
        start: 'top 70%',
        end: '+=300',
        markers: markerA1,
        scrub: 1
      }
    })
    .from('#explain', {
      y: '8rem'
    })

  return tl
}
var explain_container = gsap.timeline()
explain_container.add(explain)
</script>
