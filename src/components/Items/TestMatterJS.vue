<template>
  <canvas id="matter"></canvas>
  <button id="reset" class="w-[6rem] h-[3rem] border-4 border-red-500 rounded-full">RESET</button>
</template>

<script setup>
import Matter from 'matter-js'
import { onMounted } from 'vue'

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
    canvas: document.getElementById('matter'),
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

  var resetButton = document.getElementById('reset')
  resetButton.addEventListener('click', () => {
    for (let i = 0; i < bodyArray.length; i++) {
      Matter.Body.set(bodyArray[i], 'position', {
        x: (window.innerWidth / (bodyArray.length + 1)) * (i + 1),
        y: -50
      })
    }
    console.log('reset')
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

  var bodyArray = [boxA, boxB, circleA, polygonA, trapzoidA, trapzoidB]
  Composite.add(myEngine.world, bodyArray)

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
