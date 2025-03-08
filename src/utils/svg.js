import { parseSVG, makeAbsolute } from 'svg-path-parser'
import decomp from 'poly-decomp'
import bottleA from '@/assets/images/we-do-imgs/bottle_1.svg?raw'
import bottleB from '@/assets/images/we-do-imgs/bottle_1.svg?raw'
import ellipseA from '@/assets/images/we-do-imgs/ellipse_1.svg?raw'
import ellipseB from '@/assets/images/we-do-imgs/ellipse_2.svg?raw'
import packA from '@/assets/images/we-do-imgs/pack_1.svg?raw'
import packB from '@/assets/images/we-do-imgs/pack_2.svg?raw'
import starA from '@/assets/images/we-do-imgs/star_1.svg?raw'
import ellipseC from '@/assets/images/we-do-imgs/ellipse_3.svg?raw'
import logo from '@/assets/images/we-do-imgs/edesign-logo.svg?raw'

const parser = new DOMParser()

//export 所有svg的坐标集
var svgElements = [bottleA, bottleB, ellipseA, ellipseB, packA, packB, starA, ellipseC]
var domSvgElements = []
var decomp_bodies = []
for (let i = 0; i < svgElements.length; i++) {
  const domSvgElement = parser.parseFromString(svgElements[i], 'image/svg+xml')
  domSvgElements.push(domSvgElement)
}

for (let i = 0; i < domSvgElements.length; i++) {
  let dom_svg_element = domSvgElements[i]
  let dom_svg_path_d = dom_svg_element.querySelector('path').getAttribute('d')
  let svg_vertices = parseSVGPath(dom_svg_path_d)
  let decomp_body = decomp.quickDecomp(svg_vertices)
  decomp_bodies.push(decomp_body)
}
export const svg_coordinates = decomp_bodies

//export logo的坐标集
const logo_svg = parser.parseFromString(logo, 'text/html')
let logo_svg_d = logo_svg.querySelector('path').getAttribute('d')
let logo_vertices = parseSVGPath(logo_svg_d)
console.log(logo_vertices)
export const logo_coordinates = decomp.decomp(logo_vertices)

// 函数：提取SVG元素的坐标顶点
function parseSVGPath(pathData) {
  const commands = makeAbsolute(parseSVG(pathData))
  const vertices = []
  for (let i = 0; i < commands.length; i++) {
    if (
      commands[i].code === 'M' ||
      commands[i].code === 'L' ||
      commands[i].code === 'V' ||
      commands[i].code === 'H' ||
      commands[i].code === 'T' ||
      commands[i].code === 'Z'
    ) {
      vertices.push({ x: commands[i].x, y: commands[i].y })
    } else if (commands[i].code === 'C') {
      const cPoints = subdivideCubic(commands[i])
      var cleanedPolygon = roundPoints(removeDuplicates(cPoints))
      cleanedPolygon.forEach((p) => vertices.push({ x: p.x, y: p.y }))
    }
  }
  return vertices
}
// 函数：提取三次贝塞尔曲线C的函数坐标顶点
function subdivideCubic(command, segments = 14) {
  const points = []
  for (let i = 1; i <= segments; i++) {
    const t = i / segments
    const x =
      (1 - t) ** 3 * command.x0 +
      3 * t * (1 - t) ** 2 * command.x1 +
      3 * t ** 2 * (1 - t) * command.x2 +
      t ** 3 * command.x
    const y =
      (1 - t) ** 3 * command.y0 +
      3 * t * (1 - t) ** 2 * command.y1 +
      3 * t ** 2 * (1 - t) * command.y2 +
      t ** 3 * command.y
    points.push({ x, y })
  }
  return points
}
// 移除重复顶点
function removeDuplicates(points, tolerance = 0.1) {
  return points.filter((point, index) => {
    const prev = points[index - 1]
    return !prev || Math.abs(point.x - prev.x) > tolerance || Math.abs(point.y - prev.y) > tolerance
  })
}
function roundPoints(points, decimals = 2) {
  return points.map((p) => ({
    x: Number(p.x.toFixed(decimals)),
    y: Number(p.y.toFixed(decimals))
  }))
}
