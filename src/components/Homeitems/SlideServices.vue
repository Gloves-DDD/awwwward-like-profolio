<template>
  <div id="slide_container" class="slide_services border-2 border-red-600 w-[100vw] mt-[5rem] flex">
    <div class="border-2 border-green-600 w-[50%]">
      <!-- slide pics / 滚动式品牌图片 -->
      <div id="slide_pics" class="relative ml-auto mr-[2rem] w-[24rem]">
        <div
          id="slide_pics_1"
          class="absolute rounded-[2rem] w-[24rem] h-[28rem] bg-[#f4db7d] brightness-100"
        ></div>
        <div
          id="slide_pics_2"
          class="absolute top-[30rem] rounded-[2rem] w-[24rem] h-[28rem] bg-[#ff6a3d]"
        ></div>
        <div
          id="slide_pics_3"
          class="absolute top-[60rem] rounded-[2rem] w-[24rem] h-[28rem] bg-[#9daaf2]"
        ></div>
        <div
          id="slide_pics_4"
          class="absolute top-[90rem] rounded-[2rem] w-[24rem] h-[28rem] bg-[#741f92]"
        ></div>
      </div>
    </div>
    <!-- slide texts / 滚动式品牌介绍 -->
    <div id="slide_texts" class="border-2 border-green-800 w-[50%]">
      <div id="slide_texts_1" class="border-2 border-green-800 m-[7.5rem]">
        <p class="my-[0.5rem] text-[0.7rem] font-MabryPro font-medium uppercase tracking-wider">
          ThirdLove
        </p>
        <p
          class="my-[0.5rem] text-[1.5rem] font-MabryPro font-medium uppercase tracking-wider leading-tight"
        >
          Fighting back against a daily struggle for 80% of women.
        </p>
        <p class="my-[2rem] text-[0.7rem] font-MabryPro tracking-wide leading-tight">
          ThirdLove is a team of innovators challenging the norm of back, neck, and breast pain for
          the 80% of women whose bras just do not fit them. We teamed with ThirdLove to build
          Fitting Room, an intelligent, algorithm-driven quiz that helps customers find the perfect
          bra fit for their bodies. With the emotional pull to stop settling for discomfort, they’ve
          made a name for themselves, selling millions of bras and opening 10 physical locations.
        </p>
      </div>

      <div id="slide_texts_2" class="border-2 border-green-800 m-[7.5rem]">
        <p class="my-[0.5rem] text-[0.7rem] font-MabryPro font-medium uppercase tracking-wider">
          D’Angelico
        </p>
        <p
          class="my-[0.5rem] text-[1.5rem] font-MabryPro font-medium uppercase tracking-wider leading-tight"
        >
          Bringing a legendary guitar brand back from the dead.
        </p>
        <p class="my-[2rem] text-[0.7rem] font-MabryPro tracking-wide leading-tight">
          Over half a century after the death of master craftsman John D’Angelico, we helped revive
          his memory with the rebirth of his NYC guitar brand. Every detail mattered — original
          D’Angelico guitars were scanned in MRI and x-ray machines to get the design just right.
          Our website took inspiration from this meticulous detailing, and our passion earned 4
          awards and mentions in 37 publications around the world. D’Angelico introduced a new
          generation to their guitars and an important part of New York’s legacy.
        </p>
      </div>

      <div id="slide_texts_3" class="border-2 border-green-800 m-[7.5rem]">
        <p class="my-[0.5rem] text-[0.7rem] font-MabryPro font-medium uppercase tracking-wider">
          Wimpy Kid
        </p>
        <p
          class="my-[0.5rem] text-[1.5rem] font-MabryPro font-medium uppercase tracking-wider leading-tight"
        >
          Making cheesy cool with an iconic book series showcase.
        </p>
        <p class="my-[2rem] text-[0.7rem] font-MabryPro tracking-wide leading-tight">
          With over 275 million copies sold, 4 live-action and 2 animated films, the Diary of a
          Wimpy Kid series is a beloved franchise. We sat down with author and illustrator Jeff
          Kinney to help create an expansive website with the spirit of his series. Fans and parents
          loved our custom character designer and educational offerings. We loved making custom
          doodle animations, supported by vibrant colors, especially the yellow of the dreaded
          Cheese Touch. (Read the books!)
        </p>
      </div>

      <div id="slide_texts_4" class="border-2 border-green-800 m-[7.5rem]">
        <p class="my-[0.5rem] text-[0.7rem] font-MabryPro font-medium uppercase tracking-wider">
          Frost King
        </p>
        <p
          class="my-[0.5rem] text-[1.5rem] font-MabryPro font-medium uppercase tracking-wider leading-tight"
        >
          Transforming a seasonal product into an evergreen customer experience.
        </p>
        <p class="my-[2rem] text-[0.7rem] font-MabryPro tracking-wide leading-tight">
          Frost King is the #1 weatherization brand in the DIY home improvement space. Available in
          over 10,000 U.S. hardware stores, this brand speaks to a customer with a particular
          passion and worldview. Instead of focusing on just their product offering, we helped them
          build an expansive site with engaging games and a content strategy that speaks right to
          their audience’s core interest in DIY and projects. It’s turned Frost King into a fun,
          accessible brand that keeps their audience engaged all year round.
        </p>
      </div>
    </div>
  </div>

  <div id="services_container" class="slide_services border-2 border-red-600 w-[100vw]">
    <div
      class="relative mt-[6rem] w-[92vw] h-[17vw] border-2 border-yellow-400 mx-auto uppercase text-[13rem] font-MabryPro font-medium tracking-wider leading-[13rem]"
    >
      <p id="service_text_3" class="absolute top-[0rem] text-neutral-100 z-20">services</p>
    </div>
  </div>
</template>
<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
function slideContainer() {
  var tl = gsap.timeline().from('#slide_pics_1', {
    opacity: 0,
    filter: 'brightness(0)',
    scrollTrigger: {
      trigger: '#slide_pics_1',
      toggleActions: 'play pause',
      start: 'top bottom',
      end: '+=800',
      scrub: 1.5,
      markers: {
        startColor: 'pink',
        endColor: 'pink',
        fontSize: '10px',
        indent: 40
      }
    }
  })

  gsap.set('#slide_pics_2', { top: '45vw' })
  gsap.set('#slide_pics_3', { top: '45vw' })
  gsap.set('#slide_pics_4', { top: '45vw' })

  gsap.set('#slide_texts_2', { opacity: 0.1 })
  gsap.set('#slide_texts_3', { opacity: 0.1 })
  gsap.set('#slide_texts_4', { opacity: 0.1 })

  var tll = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#slide_pics',
        toggleActions: 'play pause',
        start: 'top 10%',
        end: '+=1700',
        scrub: 1,
        pin: true,
        markers: {
          startColor: 'black',
          endColor: 'black',
          fontSize: '10px',
          indent: 40
        }
      }
    })
    .to('#slide_pics_1', { translateX: -70, translateY: -70, duration: 6 })
    .fromTo(
      '#slide_pics_2',
      { opacity: 0, height: '5rem', duration: 4 },
      { opacity: 1, top: '0.25px', height: '28rem', duration: 4 },
      '<'
    )
    .to('#slide_texts_2', { opacity: 1, duration: 5 }, '<')
    .to('#slide_pics_2', { translateX: -70, translateY: -70, duration: 6 })
    .fromTo(
      '#slide_pics_3',
      { opacity: 0, height: '5rem', duration: 4 },
      { opacity: 1, top: '0.25px', height: '28rem', duration: 4 },
      '<'
    )
    .to('#slide_texts_3', { opacity: 1, duration: 5 }, '<')
    .to('#slide_pics_3', { translateX: -70, translateY: -70, duration: 6 })
    .fromTo(
      '#slide_pics_4',
      { opacity: 0, height: '5rem', duration: 4 },
      { opacity: 1, top: '0.25px', height: '28rem', duration: 4 },
      '<'
    )
    .to('#slide_texts_4', { opacity: 1, duration: 5 }, '<')

  tl.add(tll)
  return tl
}
function servicesContainer() {
  var tl = gsap.timeline().to('.slide_services', {
    backgroundColor: '#262626',
    scrollTrigger: {
      trigger: '#slide_container',
      toggleActions: 'play pause',
      start: 'bottom 65%',
      end: '+=400',
      scrub: 1,
      markers: {
        startColor: 'black',
        endColor: 'black',
        fontSize: '10px',
        indent: 40
      }
    }
  })

  gsap.set('#service_text_3', { top: '20rem', opacity: 0 })

  var tll = gsap
    .timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: '#services_container',
        toggleActions: 'play pause',
        start: 'top 80%',
        end: '+=500',
        scrub: 1,
        markers: {
          startColor: 'pink',
          endColor: 'pink',
          fontSize: '10px',
          indent: 40
        }
      }
    })

    .to('#service_text_3', { top: '0rem', opacity: 1, duration: 4 })

  tl.add(tll)
  return tl
}

var slide_services = gsap.timeline()
slide_services.add(servicesContainer)
slide_services.add(slideContainer)
</script>
