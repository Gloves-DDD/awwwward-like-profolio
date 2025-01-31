<template>
  <div id="we_do" class="lg:w-screen lg:h-screen lg:relative">
    <!-- 转场前-文本元素 -->
    <div
      id="we_do_list"
      class="transition_group slide_services w-full h-full px-[50px] py-[3rem] lg:absolute lg:left-0 lg:top-0 z-10 flex flex-col justify-evenly bg-neutral-800"
    >
      <p
        class="font-MabryPro font-thin text-white uppercase text-[1.6rem] border-b-2 border-neutral-700 tracking-widest leading-[4rem] pl-[2rem]"
      >
        rebranding
      </p>
      <p
        class="font-MabryPro font-thin text-white uppercase text-[1.6rem] border-b-2 border-neutral-700 tracking-widest leading-[4rem] pl-[2rem]"
      >
        Product Campaigns & Promotions
      </p>
      <p
        class="font-MabryPro font-thin text-white uppercase text-[1.6rem] border-b-2 border-neutral-700 tracking-widest leading-[4rem] pl-[2rem]"
      >
        Social Engagement Programs
      </p>
      <p
        class="font-MabryPro font-thin text-white uppercase text-[1.6rem] border-b-2 border-neutral-700 tracking-widest leading-[4rem] pl-[2rem]"
      >
        Creative & Content Development
      </p>
      <p
        class="font-MabryPro font-thin text-white uppercase text-[1.6rem] border-b-2 border-neutral-700 tracking-widest leading-[4rem] pl-[2rem]"
      >
        Website Design & Development
      </p>
      <p
        class="font-MabryPro font-thin text-white uppercase text-[1.6rem] border-b-2 border-neutral-700 tracking-widest leading-[4rem] pl-[2rem]"
      >
        Customer Loyalty Programs
      </p>
      <p
        class="font-MabryPro font-thin text-white uppercase text-[1.6rem] border-b-2 border-neutral-700 tracking-widest leading-[4rem] pl-[2rem]"
      >
        Mobile Experience & Games
      </p>
    </div>
    <div v-if="props.mediaQuery1024.matches">
      <!-- Transition_Background -->
      <div
        id="circle_warpper"
        class="transition_group absolute top-0 left-0 w-full h-full z-0 border-4 border-green-500"
      >
        <svg id="circle" class="border-4 border-red-600 w-full h-full">
          <circle id="bg_circle" cx="50%" cy="50%" r="0vw" class="fill-neutral-800" />
        </svg>
      </div>

      <!-- 转场后-Matter.js -->
      <canvas
        id="canvas"
        width="100vw"
        height="auto"
        class="absolute left-0 top-0 -z-10 border-4 border-green-500"
      ></canvas>
    </div>
    <div v-else class="py-[64px] flex flex-col items-center">
      <!-- logo -->
      <img
        src="/src/assets/images/we-do-imgs/edesign-logo.svg"
        alt="edesign-logo"
        class="h-[9rem]"
      />
      <div class="text-[3rem] font-MabryPro font-normal p-[25px]">Crush Your KPIs</div>
      <Vue3Marquee duration="40">
        <!-- 1 -->
        <div class="flex flex-col items-center mr-[2rem]">
          <div class="flex items-center align-middle h-[5rem]">
            <img src="/src/assets/images/we-do-imgs/bottle_1.svg" alt="" class="h-[2.5rem]" />
          </div>
          <p class="font-MabryPro font-thin text-[1.5rem] tracking-wide">Purchase Frequency</p>
        </div>
        <!-- 2 -->
        <div class="flex flex-col items-center mr-[2rem]">
          <div class="flex items-center align-middle h-[5rem]">
            <img src="/src/assets/images/we-do-imgs/star_1.svg" alt="" class="h-[4rem]" />
          </div>
          <p class="font-MabryPro font-thin text-[1.5rem] tracking-wide">Cross-Shopping Rate</p>
        </div>
        <!-- 3 -->
        <div class="flex flex-col items-center mr-[2rem]">
          <div class="flex items-center align-middle h-[5rem]">
            <img src="/src/assets/images/we-do-imgs/triangle_1.svg" alt="" class="h-[4rem]" />
          </div>
          <p class="font-MabryPro font-thin text-[1.5rem] tracking-wide">Inventory Turnover</p>
        </div>
        <!-- 4 -->
        <div class="flex flex-col items-center mr-[4rem]">
          <div class="flex items-center align-middle h-[5rem]">
            <img src="/src/assets/images/we-do-imgs/pack_1.svg" alt="" class="h-[4rem]" />
          </div>
          <p class="font-MabryPro font-thin text-[1.5rem] tracking-wide">Brand Loyalty</p>
        </div>
        <!-- 5  -->
        <div class="flex flex-col items-center mr-[4rem]">
          <div class="flex items-center align-middle h-[5rem]">
            <img src="/src/assets/images/we-do-imgs/bottle_2.svg" alt="" class="h-[2.5rem]" />
          </div>
          <p class="font-MabryPro font-thin text-[1.5rem] tracking-wide">Share of Voice</p>
        </div>
        <!-- 6 -->
        <div class="flex flex-col items-center mr-[4rem]">
          <div class="flex items-center align-middle h-[5rem]">
            <img src="/src/assets/images/we-do-imgs/ellipse_1.svg" alt="" class="h-[4rem]" />
          </div>
          <p class="font-MabryPro font-thin text-[1.5rem] tracking-wide">Review Ratings</p>
        </div>
        <!-- 7 -->
        <div class="flex flex-col items-center mr-[4rem]">
          <div class="flex items-center align-middle h-[5rem]">
            <img src="/src/assets/images/we-do-imgs/pack_2.svg" alt="" class="h-[4rem]" />
          </div>
          <p class="font-MabryPro font-thin text-[1.5rem] tracking-wide">
            Loyalty Program Subscribers
          </p>
        </div>
        <!-- 8 -->
        <div class="flex flex-col items-center mr-[4rem]">
          <div class="flex items-center align-middle h-[5rem]">
            <img src="/src/assets/images/we-do-imgs/ellipse_2.svg" alt="" class="h-[4rem]" />
          </div>
          <p class="font-MabryPro font-thin text-[1.5rem] tracking-wide">Sales and Market Share</p>
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import Matter from 'matter-js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
import { svg } from '@/assets/utils/svg.js'
import decomp from 'poly-decomp'
import { Vue3Marquee } from 'vue3-marquee'

gsap.registerPlugin(ScrollTrigger)
const props = defineProps(['mediaQuery1024'])
var we_do_bodies = []
var we_do = gsap.timeline()
var screen_width = window.innerWidth
var screen_height = window.innerHeight
if (props.mediaQuery1024.matches) {
  we_do.add(weDo)
}

function weDo() {
  gsap.set('#bg_circle', { r: '60vw', opacity: 0 })

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
        anticipatePin: 1,
        markers: {
          startColor: 'red',
          endColor: 'red',
          fontSize: '10px',
          indent: 0
        }
      }
    })
    .to('#bg_circle', {
      opacity: 1,
      duration: 2
    })
    .to('#we_do_list', {
      opacity: 0
    })
    .to('#bg_circle', {
      r: '50vh',
      duration: 4
    })
    .to('.transition_group', {
      scale: 0.01,
      duration: 8,
      onStart: () => {
        reset()
      }
    })
    .to('#bg_circle', {
      r: '50vh',
      duration: 12
    })
  return tl
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

onMounted(() => {
  if (props.mediaQuery1024.matches) {
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
      }
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
    Common.setDecomp(decomp)
    console.log(svg)
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
          decomp: true
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
    var center_body = Bodies.circle(screen_width / 2, screen_height / 2, 70, {
      density: 0.01,
      friction: 0.01,
      frictionStatic: 0.5,
      frictionAir: 0.01,
      isStatic: true,
      render: {
        fillStyle: '#000000'
      }
    })
    Composite.add(engine.world, center_body)
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
})
</script>
