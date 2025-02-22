<template>
  <div ref="we_do_container" id="we_do" class="lg:relative lg:h-screen lg:w-screen">
    <!-- 转场前-文本元素 -->
    <div
      id="we_do_list"
      class="transition_group slide_services z-10 flex h-full w-full flex-col justify-evenly bg-neutral-800 p-[25px] md:p-[50px] lg:absolute lg:top-0 lg:left-0"
    >
      <div
        v-for="item in what_we_do"
        :key="item.id"
        class="border-b-2 border-black p-[0.5rem] md:p-[1rem] lg:px-[2rem]"
      >
        <p
          class="font-MabryPro border-neutral-700 text-[0.75rem] font-thin tracking-widest text-white uppercase md:text-[1.25rem] md:leading-[2rem] lg:text-[2rem] lg:leading-[2rem]"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div
      v-if="mediaQuery.matches"
      class="absolute top-0 left-0 z-0 flex items-center justify-center"
    >
      <!-- 转场中 logo -->
      <div id="logo_warpper" class="transition_group h-screen w-screen overflow-hidden">
        <img
          id="bg_logo"
          src="/src/assets/images/logo_img/edesign-logo.svg"
          alt="logo"
          class="h-full w-full"
        />
      </div>
      <!-- 转场后 Canvas -->
      <div class="absolute top-0 left-0 -z-10 flex h-screen w-screen items-center justify-center">
        <canvas id="canvas" width="100vw" height="auto"></canvas>
      </div>
    </div>
    <div v-else class="flex flex-col items-center py-[64px]">
      <!-- logo -->
      <img
        src="/src/assets/images/we-do-imgs/edesign-logo.svg"
        alt="edesign-logo"
        class="h-[7rem] lg:h-[9rem]"
      />
      <div class="p-[25px] lg:p-[50px]">
        <p class="font-MabryPro text-[1.5rem] font-normal md:text-[2rem] lg:text-[3rem]">
          Crush Your KPIs
        </p>
      </div>
      <div class="w-full">
        <Vue3Marquee v-if="marqueeIsLoaded" :duration="40">
          <!-- 1 -->
          <div class="mr-[2rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/bottle_1.svg" alt="" class="h-[2.5rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">Purchase Frequency</p>
          </div>
          <!-- 2 -->
          <div class="mr-[2rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/star_1.svg" alt="" class="h-[4rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">Cross-Shopping Rate</p>
          </div>
          <!-- 3 -->
          <div class="mr-[2rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/triangle_1.svg" alt="" class="h-[4rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">Inventory Turnover</p>
          </div>
          <!-- 4 -->
          <div class="mr-[4rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/pack_1.svg" alt="" class="h-[4rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">Brand Loyalty</p>
          </div>
          <!-- 5  -->
          <div class="mr-[4rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/bottle_2.svg" alt="" class="h-[2.5rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">Share of Voice</p>
          </div>
          <!-- 6 -->
          <div class="mr-[4rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/ellipse_1.svg" alt="" class="h-[4rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">Review Ratings</p>
          </div>
          <!-- 7 -->
          <div class="mr-[4rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/pack_2.svg" alt="" class="h-[4rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">
              Loyalty Program Subscribers
            </p>
          </div>
          <!-- 8 -->
          <div class="mr-[4rem] flex flex-col items-center">
            <div class="flex h-[5rem] items-center align-middle">
              <img src="/src/assets/images/we-do-imgs/ellipse_2.svg" alt="" class="h-[4rem]" />
            </div>
            <p class="font-MabryPro text-[1.5rem] font-thin tracking-wide">
              Sales and Market Share
            </p>
          </div>
        </Vue3Marquee>
        <div v-else>Marquee is loading...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Matter from 'matter-js'
import decomp from 'poly-decomp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue'
import { svg, logo_body } from '@/assets/utils/svg.js'
import { mediaQuery } from '@/assets/utils/mediaquery'

gsap.registerPlugin(ScrollTrigger)
const what_we_do = [
  'rebranding',
  'Product Campaigns & Promotions',
  'Social Engagement Programs',
  'Creative & Content Development',
  'Website Design & Development',
  'Customer Loyalty Programs',
  'Mobile Experience & Games'
]
var we_do_bodies = []
var screen_width = window.innerWidth
var screen_height = window.innerHeight

// 动画的骨架动画应该外置暴露
// 而延迟加载应该在组件内部解决
// 但这也应该是基于得到媒体查询的结果上进行

// 暴露给外部的动画骨架
const weDo = () => {
  gsap.set('#bg_logo', { transformOrigin: 'center', scale: 8, opacity: 0 })

  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#we_do',
        toggleActions: 'play pause',
        start: 'top top',
        end: '+=700',
        scrub: 1,
        pin: true,
        fastScrollEnd: true,
        anticipatePin: 1
      }
    })
    .to('#bg_logo', {
      opacity: 1,
      duration: 2
    })
    .to('#we_do_list', {
      opacity: 0
    })
    .to('#bg_logo', {
      scale: 1,
      duration: 4
    })
    .to('.transition_group', {
      scale: 0.01,
      opacity: 0,
      duration: 8,
      onStart: () => {
        reset()
      }
    })
    .to('#bg_logo', {
      duration: 12
    })
  return tl
}
defineExpose({ weDo })

function matterJsCanvas() {
  var canvas = document.getElementById('canvas')
  // 0.创建模组alias
  var Engine = Matter.Engine,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Common = Matter.Common,
    Render = Matter.Render,
    Runner = Matter.Runner
  // 1.创建引擎
  var engine = Engine.create({
    gravity: {
      y: 1
    },
    timing: {
      timeScale: 1.5
    },
    collision: { slop: 0.01 }
  })
  // 2.创建渲染
  var render = Render.create({
    engine: engine,
    canvas: canvas,
    mouse: mouse,
    options: {
      width: screen_width,
      height: screen_height,
      background: '#f5f5f5',
      wireframes: false
    }
  })
  // 3.创建鼠标
  var mouse = Matter.Mouse.create(render.canvas)
  var mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  })
  Composite.add(engine.world, mouseConstraint)
  mouse.element.removeEventListener('wheel', mouse.mousewheel)
  mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel)

  // 4.创建物体
  Common.setDecomp(decomp)
  //all_main_bodies
  var color_option = [
    '#AEADAE',
    '#F0524F',
    '#4EA661',
    '#D6C1A4',
    '#FCCC2E',
    '#CF80B5',
    '#FCCC2E',
    '#795CA7'
  ]
  for (let i = 0; i < svg.length; i++) {
    let mergedVertices = svg[i].flat()
    let we_do_body = Bodies.fromVertices(
      screen_width / 2,
      100,
      mergedVertices,
      {
        density: 0.5,
        friction: 0.05,
        frictionStatic: 1,
        frictionAir: 0.01,
        restitution: 0.5,
        render: {
          fillStyle: color_option[i]
        },
        decomp: {
          decomp: decomp,
          options: {
            removeCollinearPoints: false, // 保留共线点
            precision: 0.001 // 提高计算精度
          }
        }
      },
      false,
      0.01,
      10,
      0.5
    )
    Matter.Body.scale(we_do_body, 0.9, 0.9)
    Matter.Body.setVelocity(we_do_body, { x: 5, y: 5 })
    we_do_bodies.push(we_do_body)
  }
  Composite.add(engine.world, we_do_bodies)
  //center body
  var center_logo_body = Bodies.fromVertices(screen_width / 2, screen_height / 2, logo_body, {
    density: 0.01,
    friction: 0.01,
    frictionStatic: 0.5,
    frictionAir: 0.01,
    isStatic: true,
    render: {
      fillStyle: '#262626'
    },
    decomp: true
  })
  Composite.add(engine.world, center_logo_body)
  // wall bodies
  var offset = 1
  var wallSize = 6
  var wallbg = 'black'
  var wall_top = Bodies.rectangle(
    window.innerWidth / 2,
    -window.innerHeight,
    window.innerWidth + 2 * offset,
    wallSize,
    {
      isStatic: true,
      render: {
        fillStyle: wallbg
      }
    }
  )
  var wall_left = Bodies.rectangle(-offset, 0, wallSize, window.innerHeight * 2 + 2 * offset, {
    isStatic: true,
    render: {
      fillStyle: wallbg
    }
  })
  var wall_right = Bodies.rectangle(
    window.innerWidth + offset - 20,
    0,
    wallSize,
    window.innerHeight * 2 + 2 * offset,
    {
      isStatic: true,
      render: {
        fillStyle: wallbg
      }
    }
  )
  var wall_bottom = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight + offset,
    window.innerWidth + 2 * offset,
    wallSize,
    {
      isStatic: true,
      render: {
        fillStyle: wallbg
      }
    }
  )
  var walls = Composite.create({ bodies: [wall_top, wall_left, wall_right, wall_bottom] })
  Composite.add(engine.world, walls)

  // 5.运行渲染器
  Render.run(render)

  // 6.创建运行器
  var runner = Runner.create()
  Runner.run(runner, engine)
  for (let i = 0; i < we_do_bodies.length; i++) {
    Matter.Events.on(runner, 'afterUpdate', function () {
      var bodies_lable = [
        'Sales and Market Share',
        'Purchase Frequency',
        'Cross-Shopping Rate',
        'Inventory Turnover',
        'Brand Loyalty',
        'Share of Voice',
        'Review Ratings',
        'Loyalty Program Subscribers'
      ]
      var mouse_x = mouseConstraint.mouse.position.x
      var mouse_y = mouseConstraint.mouse.position.y

      if (
        mouse_x >= we_do_bodies[i].bounds.min.x &&
        mouse_x <= we_do_bodies[i].bounds.max.x &&
        mouse_y >= we_do_bodies[i].bounds.min.y &&
        mouse_y <= we_do_bodies[i].bounds.max.y
      ) {
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d')
        ctx.fillStyle = '#000000'
        ctx.font = '2rem Sans-Serif'
        ctx.textAlign = 'center'
        ctx.fillText(bodies_lable[i], we_do_bodies[i].position.x, we_do_bodies[i].position.y)
      }
    })
  }
}
function reset() {
  for (let i = 0; i < we_do_bodies.length; i++) {
    if (i === 0 || i === 5) {
      Matter.Body.set(we_do_bodies[i], 'position', {
        x: screen_width / 5,
        y: -50 * ((i % 2) * 5)
      })
    } else if (i === 2 || i === 1) {
      Matter.Body.set(we_do_bodies[i], 'position', {
        x: (screen_width * 2) / 5,
        y: -50 * ((i % 2) * 5)
      })
    } else if (i === 4 || i === 7) {
      Matter.Body.set(we_do_bodies[i], 'position', {
        x: (screen_width * 3) / 5,
        y: -50 * ((i % 2) * 5)
      })
    } else if (i === 6 || i === 3) {
      Matter.Body.set(we_do_bodies[i], 'position', {
        x: (screen_width * 4) / 5,
        y: -50 * ((i % 2) * 5)
      })
    } else {
      Matter.Body.set(we_do_bodies[i], 'position', {
        x: screen_width / 2,
        y: -50 * ((i % 2) * 5)
      })
    }
  }
}

// 延迟加载
defineAsyncComponent(() =>
  import('vue3-marquee').then((module) => {
    return module.Vue3Marquee
  })
)

const we_do_container = ref(null)
const marqueeIsLoaded = ref(false)
let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (mediaQuery.matches) {
      if (entries[0].isIntersecting) {
        matterJsCanvas()
        observer.unobserve(we_do_container.value)
      }
    } else {
      if (entries[0].isIntersecting && !marqueeIsLoaded.value) {
        marqueeIsLoaded.value = true
        observer.unobserve(we_do_container.value)
      }
    }
  })
  observer.observe(we_do_container.value)
})
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
