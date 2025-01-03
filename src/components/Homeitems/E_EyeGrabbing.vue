<template>
  <div
    id="eye_grabbing"
    class="w-auto flex flex-col items-center text-[7rem] tracking-wider leading-[9rem] border-4 border-lime-500"
  >
    <div class="overflow-hidden transition-all">
      <p id="first_text_content" class="translate-y-0">We <span class="font-thin">Design</span></p>
    </div>
    <div class="overflow-hidden">
      <p id="second_text_content" class="translate-y-0">
        Eye <span class="border-4 rounded-full border-red-500">15</span> Grabbing
      </p>
    </div>
    <div class="relative h-[9rem] w-[30rem] border-b-2 border-red-500 overflow-hidden">
      <p id="first_marquee_content" class="absolute left-[100%] text-[3rem] mb-auto uppercase">
        ¯content
      </p>
      <p id="second_marquee_content" class="absolute left-[100%] text-[3rem] mb-auto uppercase">
        ¯content
      </p>
      <p id="third_marquee_content" class="absolute left-[100%] text-[3rem] mb-auto uppercase">
        ¯content
      </p>
    </div>
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

function eyeGrabbing() {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#eye_grabbing',
        toggleActions: 'play pause',
        start: 'top 60%',
        end: '+=250',
        scrub: 1,
        markers: markerA1
      }
    })
    .from('#first_text_content', {
      yPercent: 100
    })
    .from(
      '#second_text_content',
      {
        yPercent: 100
      },
      '<'
    )

  return tl
}
function eyeGrabbingMarquee() {
  var durationtime = 21
  var lead = durationtime / 3
  var tl = gsap
    .timeline()
    .to('#first_marquee_content', {
      ease: 'none',
      left: '-140%',
      duration: durationtime,
      repeat: -1
    })
    .to(
      '#second_marquee_content',
      { ease: 'none', left: '-140%', duration: durationtime, repeat: -1 },
      `<${lead}`
    )
    .to(
      '#third_marquee_content',
      { ease: 'none', left: '-140%', duration: durationtime, repeat: -1 },
      `<${lead}`
    )
  return tl
}
var eye_grabbing = gsap.timeline()
eye_grabbing.add(eyeGrabbing)
eye_grabbing.add(eyeGrabbingMarquee)
</script>
