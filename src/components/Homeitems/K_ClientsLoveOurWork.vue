<template>
  <div
    id="clients_love_our_work"
    class="background_layer flex h-auto flex-col items-center border-4 border-yellow-500 bg-cyan-50 p-[25px] md:p-[50px] lg:h-screen lg:w-screen lg:p-[2rem]"
  >
    <div
      class="flex flex-col items-center text-[1.75rem] leading-[3rem] md:text-[2.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[6rem]"
    >
      <p id="clients_first_line" class="tracking-wider">
        Our
        <span class="font-MabryPro text-[2.5rem] font-thin lg:text-[4.5rem] lg:font-normal"
          >Clients</span
        >
      </p>
      <p id="clients_second_line" class="tracking-wide">
        <em class="font-MabryPro font-thin text-red-500">love** </em><span>our </span><em>work</em>
      </p>
    </div>

    <!-- cards part -->
    <div id="cards_layer" class="m-4 flex w-full flex-col justify-center lg:h-[24rem] lg:w-[54rem]">
      <!-- 1 blue card -->
      <div
        id="blue_card"
        class="mb-[30px] flex flex-col flex-wrap items-center justify-center rounded-[1.5rem] bg-[#73c7ff] p-[30px] lg:m-0 lg:flex-row lg:justify-between lg:rounded-[3rem] lg:px-[3rem] lg:py-[1rem]"
      >
        <!-- hero -->
        <div class="order-1 flex flex-1 justify-center lg:order-2 lg:mt-[3.5rem]">
          <img
            src="/src/assets/images/clients-love-our-work/Roland-Nichols.png"
            alt="Roland-Nichols"
            class="rounded-full p-[10px]"
          />
          <div class="flex flex-col text-[0.8rem] leading-tight">
            <p class="font-MabryPro font-bold tracking-wide">Roland Nichols</p>
            <p class="tracking-tight opacity-50">Marketing Manager</p>
            <p class="tracking-tight">Fastmail</p>
          </div>
        </div>
        <!-- comment -->
        <div
          class="order-2 m-[.5rem] flex min-w-full flex-initial justify-center lg:order-1 lg:mt-[3rem] lg:w-auto"
        >
          <p
            class="rounded-[0.5rem] bg-white p-1 text-[1rem] tracking-wide lg:text-[1.5rem] lg:leading-tight"
          >
            “eDesign Interactive is a leader in design innovation.”
          </p>
        </div>

        <!-- button -->
        <div class="order-3 flex flex-1 justify-center lg:mt-[3.5rem]">
          <a
            class="flex h-[2.5rem] items-center rounded-3xl bg-black px-[1.5rem] py-[1rem] align-middle"
          >
            <p class="font-MabryPro text-[0.7rem] font-thin tracking-wider text-white underline">
              Read more in Clutch
            </p>
          </a>
        </div>

        <div class="order-4 flex-1"></div>
      </div>
      <!-- 2 yellow card -->
      <div
        id="yellow_card"
        class="mb-[30px] flex flex-col flex-wrap items-center justify-center rounded-[1.5rem] bg-[#f9d83f] p-[30px] lg:m-0 lg:flex-row lg:justify-between lg:rounded-[3rem] lg:px-[3rem] lg:py-[1rem]"
      >
        <!-- hero -->
        <div class="order-1 flex flex-1 items-center justify-center lg:order-2 lg:mt-[3.5rem]">
          <img
            src="/src/assets/images/clients-love-our-work/Shaelyn-Germain-Dupre.png"
            alt="Shaelyn-Germain-Dupre"
            class="rounded-full p-[10px]"
          />
          <div class="flex flex-col text-[0.8rem] leading-tight">
            <p class="font-MabryPro font-bold tracking-wide">Shaelyn Germain-Dupre</p>
            <p class="tracking-tight opacity-50">Global Engagement Manager</p>
            <p class="tracking-tight">Wimpy Kid, Inc.</p>
          </div>
        </div>
        <!-- comment -->
        <div
          class="order-2 m-[.5rem] flex min-w-full flex-initial justify-center lg:order-1 lg:mt-[3rem] lg:w-auto"
        >
          <p
            class="rounded-[0.5rem] bg-white p-1 text-[1rem] tracking-wide lg:text-[1.5rem] lg:leading-tight"
          >
            “eDesign Interactive are wonderful, and we love working with them!"
          </p>
        </div>

        <!-- button -->
        <div class="order-3 flex flex-1 justify-center lg:mt-[3.5rem]">
          <a
            class="flex h-[2.5rem] items-center rounded-3xl bg-black px-[1.5rem] py-[1rem] align-middle"
          >
            <p class="font-MabryPro text-[0.7rem] font-thin tracking-wider text-white underline">
              Read more in Clutch
            </p>
          </a>
        </div>

        <div class="order-4 flex-1"></div>
      </div>
      <!-- 3 green card -->
      <div
        id="green_card"
        class="flex flex-col flex-wrap items-center justify-center rounded-[1.5rem] bg-[#abd373] p-[30px] lg:m-0 lg:flex-row lg:justify-between lg:rounded-[3rem] lg:px-[3rem] lg:py-[1rem]"
      >
        <!-- hero -->
        <div class="order-1 flex flex-1 items-center justify-center lg:order-2 lg:mt-[3.5rem]">
          <img
            src="/src/assets/images/clients-love-our-work/Chandler-Gotschlich.png"
            alt="Chandler Gotschlich"
            class="rounded-full p-[10px]"
          />
          <div class="flex flex-col text-[0.8rem] leading-tight">
            <p class="font-MabryPro font-bold tracking-wide">Chandler Gotschlich</p>
            <p class="tracking-tight opacity-50">Associate Director of Marketing</p>
            <p class="tracking-tight">Sabra Dipping Company</p>
          </div>
        </div>
        <!-- comment -->
        <div
          class="order-2 m-[.5rem] flex min-w-full flex-initial justify-center lg:order-1 lg:mt-[3rem] lg:w-auto"
        >
          <p
            class="rounded-[0.5rem] bg-white p-1 text-[1rem] tracking-wide lg:text-[1.5rem] lg:leading-tight"
          >
            "We’ve seen an increase in our site traffic — we’re hitting almost 100,000 viewers per
            month.”
          </p>
        </div>

        <!-- button -->
        <div class="order-3 flex flex-1 justify-center lg:mt-[3.5rem]">
          <a
            class="flex h-[2.5rem] items-center rounded-3xl bg-black px-[1.5rem] py-[1rem] align-middle"
          >
            <p class="font-MabryPro text-[0.7rem] font-thin tracking-wider text-white underline">
              Read more in Clutch
            </p>
          </a>
        </div>

        <div class="order-4 flex-1"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const clientsLoveOurWork = () => {
  gsap.set('#cards_layer', { position: 'relative' })
  gsap.set('#blue_card', { position: 'absolute', top: '0rem', transformOrigin: 'top' })
  gsap.set('#yellow_card', { position: 'absolute', top: '20rem', transformOrigin: 'top' })
  gsap.set('#green_card', { position: 'absolute', top: '40rem', transformOrigin: 'top' })

  // 入场动画
  var tl_1 = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'top 90%',
        end: '+=400',
        scrub: 1,
        anticipatePin: 1
      }
    })
    .from('#clients_first_line', {
      opacity: 0,
      y: -60
    })
    .from(
      '#clients_second_line',
      {
        opacity: 0,
        y: 60
      },
      '<'
    )
    .from('#blue_card', {
      top: '5rem'
    })

  // 动画
  var tl_2 = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'top top',
        end: '+=800',
        scrub: 1,
        fastScrollEnd: true,
        pin: true,
        anticipatePin: 1,
        markers: true
      }
    })
    //黄色入场
    .to('#yellow_card', {
      top: '1rem'
    })
    .to(
      //同时绿色待定
      '#green_card',
      {
        top: '20rem'
      },
      '<'
    )
    //同时蓝色缩小
    .to(
      '#blue_card',
      {
        scale: 0.95
      },
      '<'
    )
    //同时背景变黄
    .to(
      '.background_layer',
      {
        backgroundColor: '#fbf9c2'
      },
      '<'
    )
    //绿色入场
    .to('#green_card', {
      top: '2rem'
    })
    //同时蓝色再变小
    .to(
      '#blue_card',
      {
        scale: 0.9
      },
      '<'
    )
    //同时黄色变小
    .to(
      '#yellow_card',
      {
        scale: 0.95
      },
      '<'
    )
    //同时背景变绿
    .to(
      '.background_layer',
      {
        backgroundColor: '#cbdfb1'
      },
      '<'
    )

  // 离场动画
  var tl_3 = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'bottom 95%',
        end: '+=650',
        scrub: 0.1,
        anticipatePin: 5
      }
    })
    .to('#clients_first_line', { y: -80, duration: 7 })
    .to('#clients_second_line', { y: -90, duration: 7 }, '<2')
    // 背景颜色变回正常颜色
    .to('.background_layer', { background: '#f5f5f5', duration: 3 }, '<')

    .to('#blue_card', { top: '-3rem', duration: 5 }, '<1')

    .to('#blue_card', { top: '-6rem', duration: 5 })
    .to('#yellow_card', { top: '-3rem', duration: 5 }, '<')

    .to('#blue_card', { top: '-9rem', duration: 7 })
    .to('#yellow_card', { top: '-6rem', duration: 7 }, '<')
    .to('#green_card', { top: '-3rem', duration: 7 }, '<')

    .to('#cards_layer', { y: -60, duration: 5 })

  tl_1.add(tl_2)
  tl_1.add(tl_3)

  return tl_1
}
defineExpose({ clientsLoveOurWork })
</script>
