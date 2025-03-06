import Matter from 'matter-js'
import decomp from 'poly-decomp'
import { svg_coordinates, logo_coordinates } from './svg'

var Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Common = Matter.Common,
  Render = Matter.Render,
  Runner = Matter.Runner

var screen_width = window.innerWidth
var screen_height = window.innerHeight
var we_do_bodies = []

export const matterJsCanvas = () => {
  //引擎
  var engine = Engine.create({
    gravity: {
      y: 1
    },
    timing: {
      timeScale: 1.5
    },
    collision: { slop: 0.01 }
  })

  //渲染
  var canvas = document.getElementById('canvas')
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
  Render.run(render)

  // 鼠标
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
  mouse.element.removeEventListener('wheel', mouse.mousewheel)
  mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel)
  Composite.add(engine.world, mouseConstraint)

  // 添加物体
  Common.setDecomp(decomp)
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
  for (let i = 0; i < svg_coordinates.length; i++) {
    let mergedVertices = svg_coordinates[i].flat()
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
            precision: 0.01 // 提高计算精度
          }
        }
      },
      false,
      0.01,
      0,
      0.5
    )
    Matter.Body.scale(we_do_body, 0.9, 0.9)
    Matter.Body.setVelocity(we_do_body, { x: 5, y: 5 })
    we_do_bodies.push(we_do_body)
  }
  console.log(we_do_bodies)
  Composite.add(engine.world, we_do_bodies)
  Composite.add(engine.world, createCenterBody())
  Composite.add(engine.world, createWallBodies())
  // 运行
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

export const reset = () => {
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

function createCenterBody() {
  var center_logo_body = Bodies.fromVertices(
    screen_width / 2,
    screen_height / 2,
    logo_coordinates,
    {
      density: 0.01,
      friction: 0.01,
      frictionStatic: 0.5,
      frictionAir: 0.01,
      isStatic: true,
      render: {
        fillStyle: '#262626'
      }
    },
    false,
    0.01,
    0,
    0.01
  )
  return center_logo_body
}
function createWallBodies() {
  var offset = 1
  var wallSize = 10
  var wallbg = 'white'
  var wall_option = {
    isStatic: true,
    render: {
      fillStyle: wallbg
    }
  }
  var wall_top = Bodies.rectangle(
    window.innerWidth / 2,
    -window.innerHeight,
    window.innerWidth + 2 * offset,
    wallSize,
    wall_option
  )
  var wall_left = Bodies.rectangle(
    -offset,
    0,
    wallSize,
    window.innerHeight * 2 + 2 * offset,
    wall_option
  )
  var wall_right = Bodies.rectangle(
    window.innerWidth + offset,
    0,
    wallSize,
    window.innerHeight * 2 + 2 * offset,
    wall_option
  )
  var wall_bottom = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight + offset,
    window.innerWidth + 2 * offset,
    wallSize,
    wall_option
  )
  var walls = Composite.create({ bodies: [wall_top, wall_left, wall_right, wall_bottom] })
  return walls
}
