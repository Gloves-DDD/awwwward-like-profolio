<template>
  <div
    id="cards_container"
    class="h-auto w-auto justify-center overflow-x-scroll border-red-600 px-[50px] whitespace-nowrap lg:flex lg:h-screen lg:flex-wrap lg:overflow-clip"
  >
    <!-- 1 -->
    <AnimationCardComposition
      id="card_1"
      class="cards"
      brand-logo="/eye-catch-section/wimpykid-logo.png"
      brand-introduction="Web experience with character(s)."
      brand-name="Diary with a Wimpy kid"
      brand-img="/eye-catch-section/wimpykid.png"
      background-color="#ffe92f"
      introtext-color="black"
      brand-tag="black"
      text-color="white"
      link-address="https://wimpykid.com/"
    />
    <!-- 2 -->
    <AnimationCardComposition
      id="card_2"
      class="cards"
      brand-logo="/eye-catch-section/sabra-logo.png"
      brand-introduction="Spreading deliciousness."
      brand-name="Sabra"
      brand-img="/eye-catch-section/sabra.png"
      background-color="#eadcab"
      introtext-color="black"
      brand-tag="black"
      text-color="white"
      link-address="https://sabra.com/"
    />
    <!-- 3 -->
    <AnimationCardComposition
      id="card_3"
      class="cards"
      brand-logo="/eye-catch-section/popweaver-logo.png"
      brand-introduction="A better butter movie snack."
      brand-name="Pop weaver"
      brand-img="/eye-catch-section/popweaver.png"
      background-color="#ff4500"
      introtext-color="white"
      brand-tag="white"
      text-color="black"
      link-address="https://popweaver.edesigninteractive.com/"
    />
    <!-- 4 -->
    <AnimationCardComposition
      id="card_4"
      class="cards"
      brand-logo="/eye-catch-section/brickfielder-logo.png"
      brand-introduction="Taking a swing at fashion technology."
      brand-name="Brickfielder"
      brand-img="/eye-catch-section/brickfielder.png"
      background-color="#262626"
      introtext-color="white"
      brand-tag="white"
      text-color="black"
      link-address="https://brickfielder.edesigninteractive.com/"
    />
    <!-- 5 -->
    <AnimationCardComposition
      id="card_5"
      class="cards"
      brand-logo="/eye-catch-section/thirdlove-logo.png"
      brand-introduction="Friendly, caring, supportive."
      brand-name="ThirdLove"
      brand-img="/eye-catch-section/thirdlove.png"
      background-color="#ffc7b2"
      introtext-color="black"
      brand-tag="white"
      text-color="black"
      link-address="https://www.thirdlove.com/"
    />
    <!-- 6 -->
    <AnimationCardComposition
      id="card_6"
      class="cards"
      brand-logo="/eye-catch-section/fastmail-logo.png"
      brand-introduction="Their policy is privacy."
      brand-name="Fastmail"
      brand-img="/eye-catch-section/fastmail.png"
      background-color="#ffffff"
      introtext-color="black"
      brand-tag="black"
      text-color="white"
      link-address="https://www.fastmail.com/"
    />
  </div>
</template>

<script setup>
import { mediaQuery } from '@/utils/mediaquery'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimationCardComposition from './items/AnimationCardComposition.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { OverlayScrollbars, ScrollbarsHidingPlugin, ClickScrollPlugin } from 'overlayscrollbars'
OverlayScrollbars.plugin(ScrollbarsHidingPlugin, ClickScrollPlugin)
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
  limitCallbacks: true, // 避免频繁回调
  syncInterval: 0.1 // 同步间隔（秒）
})

let beforeEnterRotation = []
let beforeEnterRotation_1 = ref()
beforeEnterRotation.push(beforeEnterRotation_1)
let beforeEnterRotation_2 = ref()
beforeEnterRotation.push(beforeEnterRotation_2)
let beforeEnterRotation_3 = ref()
beforeEnterRotation.push(beforeEnterRotation_3)
let beforeEnterRotation_4 = ref()
beforeEnterRotation.push(beforeEnterRotation_4)
let beforeEnterRotation_5 = ref()
beforeEnterRotation.push(beforeEnterRotation_5)
let beforeEnterRotation_6 = ref()
beforeEnterRotation.push(beforeEnterRotation_6)

//动画部分
let cardsContainerAnimation = gsap.matchMedia()
onMounted(() => {
  //动画骨架
  cardsContainerAnimation.add('(min-width: 1025px)', () => {
    gsap.set('#card_1', { yPercent: 0, xPercent: -200, rotateZ: -30 })
    gsap.set('#card_2', { yPercent: 0, xPercent: -300, rotateZ: 60 })
    gsap.set('#card_3', { yPercent: 0, xPercent: -500, rotateZ: 45 })
    gsap.set('#card_4', { yPercent: 30, xPercent: 200, rotateZ: -70 })
    gsap.set('#card_5', { yPercent: -90, xPercent: 380, rotateZ: 75 })
    gsap.set('#card_6', { yPercent: -90, xPercent: 440, rotateZ: 85 })
    var triggerset = {
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#cards_container',
        toggleActions: 'play pause',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
      }
    }
    var front = 2,
      middle = 3,
      end = 2
    // card 1
    gsap
      .timeline(triggerset)
      .to('#card_1', {
        xPercent: -30,
        yPercent: 30,
        rotateZ: -5,
        duration: front,
        lazy: true,
        onUpdate: () => {
          beforeEnterRotation_1.value = gsap.getProperty('#card_1', 'rotationZ')
        }
      })
      .to('#card_1', {
        rotateZ: 15,
        duration: middle,
        lazy: true,
        onUpdate: () => {
          beforeEnterRotation_1.value = gsap.getProperty('#card_1', 'rotationZ')
        }
      })
      .to('#card_1', {
        xPercent: -150,
        yPercent: 50,
        duration: end,
        lazy: true
      })

    // card 2
    gsap
      .timeline(triggerset)
      .to('#card_2', {
        xPercent: -50,
        yPercent: 40,
        rotateZ: -15,
        duration: front,
        lazy: true,
        onUpdate: () => {
          beforeEnterRotation_2.value = gsap.getProperty('#card_2', 'rotationZ')
        }
      })
      .to('#card_2', {
        rotateZ: -45,
        duration: middle,
        lazy: true,
        onUpdate: () => {
          beforeEnterRotation_2.value = gsap.getProperty('#card_2', 'rotationZ')
        }
      })
      .to('#card_2', {
        xPercent: -200,
        yPercent: 20,
        duration: end,
        lazy: true
      })

    //card 3
    gsap
      .timeline(triggerset)
      .to('#card_3', {
        xPercent: -90,
        yPercent: 20,
        rotateZ: 30,
        duration: front,
        lazy: true,
        onUpdate: () => {
          beforeEnterRotation_3.value = gsap.getProperty('#card_3', 'rotationZ')
        }
      })
      .to('#card_3', {
        rotateZ: -30,
        duration: middle,
        lazy: true,
        onUpdate: () => {
          beforeEnterRotation_3.value = gsap.getProperty('#card_3', 'rotationZ')
        }
      })
      .to('#card_3', {
        xPercent: -150,
        yPercent: -50,
        duration: end,
        lazy: true
      })

    //card 4
    gsap
      .timeline(triggerset)
      .to('#card_4', {
        xPercent: -110,
        yPercent: 30,
        rotateZ: -40,
        duration: front,
        lazy: true,
        onUpdate: () => {
          beforeEnterRotation_4.value = gsap.getProperty('#card_4', 'rotationZ')
        }
      })
      .to('#card_4', {
        rotateZ: 30,
        duration: middle,
        lazy: true,
        onUpdate: () => {
          beforeEnterRotation_4.value = gsap.getProperty('#card_4', 'rotationZ')
        }
      })
      .to('#card_4', {
        xPercent: 50,
        yPercent: -20,
        duration: end,
        lazy: true
      })

    //card 5
    gsap
      .timeline(triggerset)
      .to('#card_5', {
        xPercent: 170,
        yPercent: -80,
        rotateZ: 3,
        duration: front,
        lazy: true,
        onUpdate: () => {
          beforeEnterRotation_5.value = gsap.getProperty('#card_5', 'rotationZ')
        }
      })
      .to('#card_5', {
        rotateZ: 40,
        duration: middle,
        lazy: true,
        onUpdate: () => {
          beforeEnterRotation_5.value = gsap.getProperty('#card_5', 'rotationZ')
        }
      })
      .to('#card_5', {
        xPercent: 400,
        yPercent: -70,
        duration: end,
        lazy: true
      })

    //card 6
    gsap
      .timeline(triggerset)
      .to('#card_6', {
        xPercent: 150,
        yPercent: -70,
        rotateZ: -30,
        duration: front,
        lazy: true,
        onUpdate: () => {
          beforeEnterRotation_6.value = gsap.getProperty('#card_6', 'rotationZ')
        }
      })
      .to('#card_6', {
        rotateZ: 10,
        duration: middle,
        lazy: true,
        onUpdate: () => {
          beforeEnterRotation_6.value = gsap.getProperty('#card_6', 'rotationZ')
        }
      })
      .to('#card_6', {
        xPercent: 250,
        yPercent: -50,
        duration: end,
        lazy: true
      })

    //cards hover animation
    let cards = gsap.utils.toArray('.cards')
    cards.forEach((element) => {
      gsap.context(() => {
        let hoverTween = null
        const handleEnter = () => {
          // 如果已有动画则先终止
          if (hoverTween) hoverTween.kill()
          hoverTween = gsap.to(element, {
            rotateZ: 0,
            duration: 0.8,
            ease: 'power3.out',
            overwrite: 'auto'
          })
        }
        const handleLeave = () => {
          // 查找需要动画的对象序列
          let index = cards.findIndex((item) => item === element)
          // 如果已有动画则先终止
          if (hoverTween) hoverTween.kill()
          hoverTween = gsap.to(element, {
            rotateZ: beforeEnterRotation[index].value,
            duration: 1.2,
            ease: 'elastic.out(1, 0.5)'
          })
        }

        element.addEventListener('mouseenter', handleEnter)
        element.addEventListener('mouseleave', handleLeave)

        return {
          destroy: () => {
            element.removeEventListener('mouseenter', handleEnter)
            element.removeEventListener('mouseleave', handleLeave)
            if (hoverTween) hoverTween.kill()
          }
        }
      })
    })
  })
  //小设备-滚动条
  if (!mediaQuery.matches) {
    OverlayScrollbars(document.querySelector('#cards_container'), {
      overflow: {
        x: 'scroll'
      },
      scrollbars: {
        theme: 'os-theme-dark',
        visibility: 'auto',
        autoHide: 'move',
        autoHideDelay: 500,
        autoHideSuspend: false,
        dragScroll: true,
        clickScroll: false,
        pointers: ['mouse', 'touch', 'pen']
      }
    })
  }
})
onBeforeUnmount(() => {
  cardsContainerAnimation.revert()
})
</script>
