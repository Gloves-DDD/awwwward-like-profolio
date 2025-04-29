<template>
  <div
    id="cards-box"
    class="flex h-[25rem] w-screen items-center justify-evenly overflow-x-scroll px-[50px] lg:h-screen lg:gap-12 lg:overflow-visible"
  >
    <!-- 1 -->
    <div class="cards-container relative overflow-visible">
      <AnimationCardComposition
        class="brand-cards lg:absolute lg:-translate-1/2"
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
    </div>
    <!-- 2 -->
    <div class="cards-container relative">
      <AnimationCardComposition
        class="brand-cards lg:absolute lg:-translate-1/2"
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
    </div>
    <!-- 3 -->
    <div class="cards-container relative">
      <AnimationCardComposition
        class="brand-cards lg:absolute lg:-translate-1/2"
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
    </div>
    <!-- 4 -->
    <div class="cards-container relative">
      <AnimationCardComposition
        class="brand-cards lg:absolute lg:-translate-1/2"
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
    </div>
    <!-- 5 -->
    <div class="cards-container relative">
      <AnimationCardComposition
        class="brand-cards lg:absolute lg:-translate-1/2"
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
    </div>
    <!-- 6 -->
    <div class="cards-container relative">
      <AnimationCardComposition
        class="brand-cards lg:absolute lg:-translate-1/2"
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
  </div>
</template>

<script setup>
import AnimationCardComposition from '/src/components/Homeitems/items/AnimationCardComposition.vue'
import { onBeforeUnmount, onMounted } from 'vue'
import { animate, createScope, createTimeline, eases, onScroll, utils } from 'animejs'

const scope = createScope({
  mediaQueries: {
    isLarge: '(min-width: 1025px)'
  }
})
const mainTl = createTimeline()
onMounted(() => {
  scope.add((self) => {
    if (self.matches.isLarge) {
      utils.$('.cards-container').forEach(($cardContainer, index) => {
        const $brandCard = $cardContainer.querySelector('.brand-cards')
        // 设置初始值
        utils.set($cardContainer, { rotateZ: utils.random(-3, 3) * 10 })
        utils.set($cardContainer, {
          translateX: index <= 2 ? -500 * (index + 1) : 500 * (6 - index),
          translateY: index <= 2 ? 10 * (index + 1) * 0.25 : -10 * (6 - index) * 0.25
        })
        const cardsContainerTl = createTimeline({
          autoplay: onScroll({
            sync: 0.5,
            enter: 'bottom -=150',
            leave: 'top +=300'
          })
        })
        //第一段动画
        cardsContainerTl.add($cardContainer, {
          translateX: 0,
          translateY: 0,
          duration: 3,
          ease: eases.outQuad
        })
        //第二段动画
        cardsContainerTl.add($cardContainer, {
          rotateZ: utils.random(-3, 3) * 7,
          ease: eases.outQuad,
          duration: 5,
          composition: 'blend'
        })
        //第三段动画
        cardsContainerTl.add($cardContainer, {
          translateX: index <= 2 ? -500 * (index + 1) : 500 * (6 - index),
          translateY: index <= 2 ? 10 * (index + 1) * 0.25 : -10 * (6 - index) * 0.25,
          duration: 7
        })
        //合并到mainTl中
        if (index === 0) {
          mainTl.sync(cardsContainerTl)
        } else {
          mainTl.sync(cardsContainerTl, '<<')
        }

        $cardContainer.addEventListener('mouseenter', () => {
          animate($cardContainer, {
            width: 200,
            duration: 400,
            ease: eases.outQuad
          })
          animate($brandCard, {
            translateX: 70,
            duration: 400,
            ease: eases.outQuad
          })
        })
        $cardContainer.addEventListener('mouseleave', () => {
          animate($cardContainer, {
            width: 0,
            duration: 400,
            ease: eases.outQuad
          })
          animate($brandCard, {
            translateX: 0,
            duration: 400,
            ease: eases.outQuad
          })
        })
      })
    }
  })
  utils.$('.brand-cards').forEach((e) => {
    let currentZ
    e.addEventListener('mouseenter', () => {
      currentZ = utils.get(e.parentNode, 'rotateZ', false)
      animate(e, {
        rotateZ: -currentZ,
        duration: 400,
        ease: eases.outQuad,
        onUpdated: () => {
          currentZ = utils.get(e.parentNode, 'rotateZ', false)
        }
      })
    })
    e.addEventListener('mouseleave', () => {
      animate(e, {
        rotateZ: 0,
        duration: 400,
        ease: eases.outQuad
      })
    })
  })
})
onBeforeUnmount(() => {
  scope.revert()
})
</script>
