<template>
  <div id="we_do" class="w-full h-[50vw] bg-neutral-200 relative">
    <!-- 转场前-文本元素 -->
    <div
      id="we_do_list"
      class="slide_services absolute w-full h-full px-[1.5rem] py-[3rem] left-0 top-0 z-10"
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

    <!-- 转场用-过渡元素 -->
    <svg id="circle" class="absolute w-full h-full left-0 top-0 z-0">
      <circle id="bg_circle" cx="50%" cy="50%" r="0vw" class="fill-neutral-800" />
    </svg>

    <!-- 转场后-Matter.js -->
    <canvas id="canvas" class="absolute left-0 top-0 -z-10"></canvas>
  </div>
</template>

<script setup>
import Matter from 'matter-js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

var bodyArray = ref([])

function weDo() {
  gsap.set('#bg_circle', { r: '55vw', opacity: 0 })

  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#we_do',
        toggleActions: 'play pause',
        start: 'top top',
        end: '+=1000',
        scrub: 1,
        pin: true,
        fastScrollEnd: true,
        anticipatePin: 1,
        markers: {
          startColor: 'white',
          endColor: 'red',
          fontSize: '18px',
          indent: 50
        }
      }
    })
    .to('#bg_circle', {
      opacity: 1,
      duration: 2
    })
    .to('#we_do_list', {
      opacity: 0,
      duration: 1
    })
    .to('#bg_circle', {
      r: '5vw',
      duration: 2,
      onStart: () => {
        reset()
        console.log('start')
      }
    })
    .to('#we_do', {
      duration: 4
      // onStart: () => {
      //   gsap.set('#canvas', { zIndex: '30' })
      // },
      // onComplete: () => {
      //   gsap.set('#canvas', { zIndex: '-10' })
      // }
    })

  return tl
}
function reset() {
  for (let i = 0; i < bodyArray.value.length; i++) {
    Matter.Body.set(bodyArray.value[i], 'position', {
      x: (window.innerWidth / (bodyArray.value.length + 1)) * (i + 1),
      y: -50
    })
  }
}

var we_do = gsap.timeline()
we_do.add(weDo)

onMounted(() => {
  // 0.创建模组异名
  var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite

  // 1.创建引擎
  var myEngine = Engine.create()
  myEngine.gravity.y = 1
  myEngine.timing.timeScale = 1.5
  myEngine.velocityIterations = 30

  // 2.创建渲染
  var render = Render.create({
    engine: myEngine,
    canvas: document.getElementById('canvas'),
    options: {
      width: 1515,
      height: 700,
      background: '#f5f5f5',
      wireframes: false
      // showAngleIndicator: true,
      // showAxes: true,
      // showCollisions: true,
      // showPositions: true,
      // showSeparations: true
    }
  })

  // 3.创建鼠标
  var mouse = Matter.Mouse.create(render.canvas)
  var mouseConstraint = Matter.MouseConstraint.create(myEngine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  })
  Composite.add(myEngine.world, [mouseConstraint])

  // 4.创建物体

  var boxA = Bodies.rectangle((window.innerWidth * 1) / 5, 200, 220, 120, {
    density: 0.01,
    friction: 0.01,
    frictionStatic: 0.5,
    frictionAir: 0.01,
    render: {
      fillStyle: '#72fa93'
    }
  })

  var boxB = Bodies.rectangle((window.innerWidth * 2) / 5, 80, 280, 180, {
    density: 0.1,
    friction: 0.1,
    frictionStatic: 0.5,
    frictionAir: 0.01,
    render: {
      fillStyle: '#9ac1f0'
    }
  })
  var circleA = Bodies.circle((window.innerWidth * 3) / 5, 80, 80, {
    density: 0.1,
    friction: 0.1,
    frictionStatic: 0.5,
    frictionAir: 0.01,
    render: {
      fillStyle: '#a0e548'
    }
  })
  var polygonA = Bodies.polygon((window.innerWidth * 3) / 5, 90, 3, 100, {
    density: 0.1,
    friction: 0.1,
    frictionStatic: 0.5,
    frictionAir: 0.01,
    render: {
      fillStyle: '#f6c445'
    }
  })
  var trapzoidA = Bodies.trapezoid((window.innerWidth * 4) / 5, 90, 300, 200, 0.5, {
    density: 0.1,
    friction: 0.1,
    frictionStatic: 0.5,
    frictionAir: 0.01,
    render: {
      fillStyle: '#e45f2b'
    }
  })
  var trapzoidB = Bodies.trapezoid((window.innerWidth * 3) / 5, -50, 150, 150, 0.75, {
    density: 0.1,
    friction: 0.1,
    frictionStatic: 0.5,
    frictionAir: 0.01,
    render: {
      fillStyle: '#e45f2b'
    }
  })

  bodyArray.value = [boxA, boxB, circleA, polygonA, trapzoidA, trapzoidB]
  Composite.add(myEngine.world, bodyArray.value)

  // 4.1创建墙体
  var offset = 1
  var wallSize = 10
  var wallbg = 'white'

  World.add(myEngine.world, [
    // 上
    Bodies.rectangle(
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
    ),
    // 下
    Bodies.rectangle(
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
    ),
    // 右
    Bodies.rectangle(
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
    ),
    // 左
    Bodies.rectangle(-offset, 0, wallSize, window.innerHeight * 2 + 2 * offset, {
      isStatic: true,
      render: {
        fillStyle: wallbg
      }
    })
  ])

  // 5.运行渲染器
  Render.run(render)

  // 6.创建运行器
  var runner = Runner.create()

  // 7.运行引擎
  Runner.run(runner, myEngine)
})
</script>
