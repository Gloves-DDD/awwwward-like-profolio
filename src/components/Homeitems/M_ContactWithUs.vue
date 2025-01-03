<template>
  <div
    id="contact_with_us"
    class="w-[100vw] h-auto border-4 border-red-400 flex flex-col px-[10rem] pt-[10rem] pb-[5rem]"
  >
    <div class="w-auto h-auto flex justify-center">
      <div
        id="contact_with_us_outter"
        class="bg-[#f1cece] rounded-[3rem] w-full h-[6rem] flex flex-col justify-center p-[3rem]"
      >
        <div id="contact_with_us_inner" class="flex items-center">
          <p class="text-[1.5rem] tracking-wider">Connect with your audience at a core level.</p>
          <button
            class="ml-auto bg-black rounded-3xl text-[0.7rem] tracking-wider text-white w-[10rem] h-[3rem]"
          >
            Start a project
          </button>
        </div>
      </div>
    </div>

    <p
      id="contact_with_us_container_next_text"
      class="text-center text-neutral-50 font-MabryPro m-[1.5rem]"
    >
      Request a proposal or arrange a call with our team.
    </p>
    <div class="mt-[3rem]">
      <p
        id="contact_with_us_1"
        class="text-[1.5rem] text-neutral-50 tracking-wider w-[40rem] my-[0.5rem]"
      >
        <a class="text-[#f1cece]">eDesign </a> is an award-winning web and digital marketing agency.
      </p>
      <div
        id="contact_with_us_2"
        class="text-[3.5rem] text-neutral-50 tracking-wide my-[0.5rem] leading-snug"
      >
        <p>Our CPG team is ready to</p>
        <p>wowify your brand and</p>
        <p>transform your product into an</p>
        <p>emotion-conquering</p>
        <p>powerhouse.</p>
      </div>
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
const markerA2 = {
  startColor: 'red',
  endColor: 'green',
  fontSize: '14px',
  indent: 40
}
function contactWithUs() {
  var tl = gsap.timeline()
  var tl_1 = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#contact_with_us',
        toggleActions: 'play pause',
        start: 'top 60%',
        end: '+=600',
        scrub: 1,
        anticipatePin: 1,
        markers: markerA1
      }
    })
    .from('#contact_with_us_outter', {
      opacity: 0,
      width: '4rem'
    })
    .from('#contact_with_us_inner', {
      opacity: 0
    })
    .from(
      '#contact_with_us_container_next_text',
      {
        opacity: 0,
        y: 30
      },
      '<'
    )
    .from('#contact_with_us_1', {
      opacity: 0
    })
    .from('#contact_with_us_2', {
      opacity: 0
    })

  var tl_2 = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#contact_with_us_2',
        toggleActions: 'play pause',
        start: 'top 50%',
        end: '+=600',
        scrub: 1,
        anticipatePin: 1,
        markers: markerA2
      }
    })
    .to('#background_layer', { backgroundColor: '#262626' })

  tl.add(tl_1)
  tl.add(tl_2)
  return tl
}
var contact_with_us = gsap.timeline()
contact_with_us.add(contactWithUs)
</script>
