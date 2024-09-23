<template>
  <main class="bg-neutral-100">
    <h1 class="text-center text-6xl font-light">组件元素测试</h1>

    <article class="text-center text-3xl font-bold mt-10">BUTTONS</article>
    <section class="w-full p-[40px] grid grid-cols-3 gap-5">
      <div class="bg-white shadow-md p-[40px] rounded-2xl">
        <h2 class="text-2xl font-bold mb-6">Fade Button</h2>
        <FadeButton />
        <p class="my-6 leading-8">在hover时,会对其bg-color属性和text属性进行淡入淡出效果的按钮.</p>
      </div>

      <div class="bg-white shadow-md p-[40px] rounded-2xl">
        <h2 class="text-2xl font-bold mb-6">GSAP Button</h2>
        <GsapButton />
        <p class="my-6 leading-8">
          在hover时,会对Button内部作为BG的SVG图像中的Circle元素进行Transition效果.这是我对GSAP官网中的Button效果做的仿写.
        </p>
      </div>
    </section>

    <article class="text-center text-3xl font-bold m-4">ANIMATION ELEMENT</article>
    <section class="w-full mb-20 p-[40px] grid grid-cols-3 gap-5">
      <div class="bg-white shadow-md p-[40px] rounded-2xl">
        <h2 class="text-2xl font-bold mb-6">Test Curve</h2>
        <TestCurve />
        <p class="my-6 leading-8">一个具有无限运动效果的曲线.</p>
      </div>

      <div class="bg-white shadow-md p-[40px] rounded-2xl">
        <h2 class="text-2xl font-bold mb-6">Popular Text</h2>
        <PopularText />
        <p class="my-6 leading-8">通过触发条件就可以使该P元素从Y轴反方向上进入画面.</p>
      </div>

      <div class="bg-white shadow-md p-[40px] rounded-2xl">
        <h2 class="text-2xl font-bold mb-6">TestMarquee</h2>
        <TestMarquee />
        <p class="my-6 leading-8">测试跑马灯效果.</p>
      </div>

      <div class="bg-white shadow-md p-[40px] rounded-2xl">
        <h2 class="text-2xl font-bold mb-6">TestGrabble</h2>
        <TestGrabble />
        <p class="my-6 leading-8">测试抓取效果.</p>
      </div>

      <div class="bg-white shadow-md p-[40px] rounded-2xl">
        <h2 class="text-2xl font-bold mb-6">TestGrabble</h2>
        <TestEye />
        <p class="my-6 leading-8">测试Inertia效果.</p>
      </div>

      <div class="bg-white shadow-md p-[40px] rounded-2xl">
        <h2 class="text-2xl font-bold mb-6">TestSuperMarquee</h2>
        <TestSuperMarquee />
      </div>
    </section>

    <article class="text-center text-3xl font-bold m-4">Test MATTER.JS</article>
    <div class="w-1vw h-[46vw] mb-[10rem]"><TestMatterJS /></div>
  </main>
</template>

<script setup>
import GsapButton from '@/components/Items/GsapButton.vue'
import FadeButton from '@/components/Items/FadeButton.vue'
import TestCurve from '@/components/Items/TestCurve.vue'
import PopularText from '@/components/Items/PopularText.vue'
import TestMarquee from '@/components/Items/TestMarquee.vue'
import TestGrabble from '@/components/Items/TestGrabble.vue'
import TestEye from '@/components/Items/TestEye.vue'
import TestMatterJS from '@/components/Items/TestMatterJS.vue'
import TestSuperMarquee from '@/components/Items/TestSuperMarquee.vue'
</script>

<style></style>
