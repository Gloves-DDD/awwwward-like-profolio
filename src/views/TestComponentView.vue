<template>
  <main class="bg-neutral-100">
    <h1 class="text-center text-6xl font-light">组件元素测试</h1>

    <article class="mt-10 text-center text-3xl font-bold">BUTTONS</article>
    <section class="grid w-full grid-cols-3 gap-5 p-[40px]">
      <div class="rounded-2xl bg-white p-[40px] shadow-md">
        <h2 class="mb-6 text-2xl font-bold">Fade Button</h2>
        <FadeButton />
        <p class="my-6 leading-8">在hover时,会对其bg-color属性和text属性进行淡入淡出效果的按钮.</p>
      </div>

      <div class="rounded-2xl bg-white p-[40px] shadow-md">
        <h2 class="mb-6 text-2xl font-bold">GSAP Button</h2>
        <GsapButton />
        <p class="my-6 leading-8">
          在hover时,会对Button内部作为BG的SVG图像中的Circle元素进行Transition效果.这是我对GSAP官网中的Button效果做的仿写.
        </p>
      </div>
    </section>

    <article class="m-4 text-center text-3xl font-bold">ANIMATION ELEMENT</article>
    <section class="mb-20 grid w-full grid-cols-3 gap-5 p-[40px]">
      <div class="rounded-2xl bg-white p-[40px] shadow-md">
        <h2 class="mb-6 text-2xl font-bold">Test Curve</h2>
        <TestCurve />
        <p class="my-6 leading-8">一个具有无限运动效果的曲线.</p>
      </div>

      <div class="rounded-2xl bg-white p-[40px] shadow-md">
        <h2 class="mb-6 text-2xl font-bold">Popular Text</h2>
        <PopularText />
        <p class="my-6 leading-8">通过触发条件就可以使该P元素从Y轴反方向上进入画面.</p>
      </div>

      <div class="rounded-2xl bg-white p-[40px] shadow-md">
        <h2 class="mb-6 text-2xl font-bold">TestMarquee</h2>
        <TestMarquee />
        <p class="my-6 leading-8">测试跑马灯效果.</p>
      </div>

      <div class="rounded-2xl bg-white p-[40px] shadow-md">
        <h2 class="mb-6 text-2xl font-bold">TestGrabble</h2>
        <TestGrabble />
        <p class="my-6 leading-8">测试抓取效果.</p>
      </div>

      <div class="rounded-2xl bg-white p-[40px] shadow-md">
        <h2 class="mb-6 text-2xl font-bold">TestGrabble</h2>
        <TestEye />
        <p class="my-6 leading-8">测试Inertia效果.</p>
      </div>

      <div class="rounded-2xl bg-white p-[40px] shadow-md">
        <h2 class="mb-6 text-2xl font-bold">TestSuperMarquee</h2>
        <TestSuperMarquee />
      </div>
    </section>

    <article class="m-4 text-center text-3xl font-bold">Test MATTER.JS</article>
    <div class="w-1vw mb-[10rem] h-[46vw]"><TestMatterJS /></div>
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
