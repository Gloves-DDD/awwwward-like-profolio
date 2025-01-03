<template>
  <div id="brand_stories" class="w-auto flex flex-col items-center border-4 border-lime-500 p5">
    <div data-speed="1.1" id="brand_stories_text_container" class="translate-y-0 overflow-hidden">
      <p
        id="brand_stories_text_content"
        class="translate-y-0 text-[4.5rem] tracking-normal leading-[9rem]"
      >
        Brand Stories Such As
      </p>
    </div>

    <div
      class="relative h-[6rem] w-[46rem] font-MabryPro font-thin tracking-[0.1rem] border-b-2 border-black overflow-hidden"
    >
      <p
        id="first_marquee_content_brand_stories"
        class="absolute left-[100%] text-[3rem] uppercase"
      >
        ¯storytellers
      </p>
      <p
        id="second_marquee_content_brand_stories"
        class="absolute left-[100%] text-[3rem] uppercase"
      >
        ¯Flavorizers
      </p>
      <p
        id="third_marquee_content_brand_stories"
        class="absolute left-[100%] text-[3rem] uppercase"
      >
        ¯innovators
      </p>
      <p
        id="forth_marquee_content_brand_stories"
        class="absolute left-[100%] text-[3rem] uppercase"
      >
        ¯Legends
      </p>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function brandStories() {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#brand_stories',
        toggleActions: 'play pause',
        start: 'top 90%',
        end: '+=400',
        scrub: 2,
        markers: {
          startColor: 'red',
          endColor: 'red',
          fontSize: '10px',
          indent: 0
        }
      }
    })
    .from('#brand_stories_text_content', {
      yPercent: 100
    })
    .from(
      '#brand_stories_text_container',
      {
        yPercent: -100
      },
      '<'
    )

  return tl
}

function brandStoriesMarquee() {
  var durationtime = 24
  var lead = durationtime / 4
  var tl = gsap
    .timeline()
    .to('#first_marquee_content_brand_stories', {
      ease: 'none',
      left: '-150%',
      duration: durationtime,
      repeat: -1
    })
    .to(
      '#second_marquee_content_brand_stories',
      { ease: 'none', left: '-140%', duration: durationtime, repeat: -1 },
      `<${lead}`
    )
    .to(
      '#third_marquee_content_brand_stories',
      { ease: 'none', left: '-130%', duration: durationtime, repeat: -1 },
      `<${lead}`
    )
    .to(
      '#forth_marquee_content_brand_stories',
      { ease: 'none', left: '-120%', duration: durationtime, repeat: -1 },
      `<${lead}`
    )

  return tl
}
// brandStories()
var brand_stories = gsap.timeline()
brand_stories.add(brandStoriesMarquee)
brand_stories.add(brandStories)
</script>
