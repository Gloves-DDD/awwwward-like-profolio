import { parseSVG, makeAbsolute } from 'svg-path-parser'
import decomp from 'poly-decomp'

const svg_doc_string = `
    //bottle_1
    <svg width="330" height="100" data-text="Share of Voice" viewBox="0 0 330.45 99.64" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
	    <path  fill="#AEADAE" d="M330.06,36.44c-4.67-22.95-29.58-4.77-44.27-6.79c-2.4,0-4.87-0.01-7.27-0.02c-44.95-1.51-82.96-35-129.2-28.88	C112.19,0.66,74.44,0.57,37.32,0.49C7.24-1.95-2.88,15.29,0.68,43.31c0.64,12.97-1.59,26.74,1.11,39.44c10.25,23.14,41.02,14.76,61.16,16.38c19.72,0.04,40.59,0.09,60.31,0.13c10.81,0.02,23.66,0.05,34.46,0.07	c44.77,3.93,81.96-30.83,126.56-28.31c11.06-1.17,21.13,4.11,31.72,5.4C336.5,75.93,328.75,49.9,330.06,36.44z" />
    </svg>

    //bottle_2
    <svg width="330" height="100" data-text="Brand Loyalty" viewBox="0 0 330.45 99.64" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
        <path fill="#F0524F" d="M330.06,36.44c-4.67-22.95-29.58-4.77-44.27-6.79c-2.4,0-4.87-0.01-7.27-0.02c-44.95-1.51-82.96-35-129.2-28.88C112.19,0.66,74.44,0.57,37.32,0.49C7.24-1.95-2.88,15.29,0.68,43.31c0.64,12.97-1.59,26.74,1.11,39.44c10.25,23.14,41.02,14.76,61.16,16.38c19.72,0.04,40.59,0.09,60.31,0.13c10.81,0.02,23.66,0.05,34.46,0.07c44.77,3.93,81.96-30.83,126.56-28.31c11.06-1.17,21.13,4.11,31.72,5.4C336.5,75.93,328.75,49.9,330.06,36.44z"/>
    </svg>

    //ellipse_1
    <svg width="270" height="154" data-text="Inventory Turnover" viewBox="0 0 269.83 154.41" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
	    <path fill="#4EA661" d="M185.93,0.43C179.8,0.4,88.05,0,81.92,0C-28.64,0-25.94,154.02,81.84,154.4c8.63,0.03,98.06-0.02,103.56,0C296.88,154.4,298.89,0.43,185.93,0.43z" />
    </svg>

    //ellipse_2
    <svg width="270" height="154" data-text="Cross-Shopping Rate" viewBox="0 0 269.83 154.41" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
	    <path fill="#D6C1A4" d="M185.93,0.43C179.8,0.4,88.05,0,81.92,0C-28.64,0-25.94,154.02,81.84,154.4c8.63,0.03,98.06-0.02,103.56,0C296.88,154.4,298.89,0.43,185.93,0.43z" />
    </svg>

    //pack_1
    <svg width="241" height="132" data-text="Purchase Frequency" viewBox="0 0 241 132.3" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
        <path fill="#FCCC2E" d="M241,100.3c-1.6-4.7-7.2-7.4-10.3-11.1c2.9-2.8,5.9-5.7,8.8-8.4c7.1-7.8-15.2-12.2-5.7-17.9c12.5-9.3,4.9-11.9-3.5-20c8.5-8.4,15.8-10.8,2.8-20.4c-5.6-3.7-2.9-5.8,0.8-9.2c15-14-7.5-13.3-18.7-13.3C205,0,203.1,6.8,186,6.8c-42.2,0-120.7,0.4-139.4,0.4c-12.3,0-20.9-7-34-7c-17.8,0-9,10.3-2.3,18.1c2.6,2.4-3.4,4.9-4.8,7.1c-15.8,11.3,12.7,14.3,2.1,21.3C-4.9,56,2.7,58.5,11,66.7C6.7,71.4-4.7,77.6,4.5,83.6c1.9,2.8,9.4,5.6,4.5,8.4c-10.6,9-10.2,10.3,0.4,19.3c8.9,5.9-33.9,20.8,12.8,20.8c9.9,0,20.4-6.2,33.9-6.2c29.6,0,53.9-0.2,83.5-0.3c17,0,33.3,0,50.3,0c16.4,0,21.9,6.9,33.6,6.9c26.4,0.2,13.2-11.9,6.9-19.6C233.6,108.7,240.4,105.8,241,100.3z"/>
    </svg>

    //pack_2
    <svg width="241" height="132" data-text="Sales and Market Share" viewBox="0 0 241 132.3" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
        <path fill="#CF80B5" d="M241,100.3c-1.6-4.7-7.2-7.4-10.3-11.1c2.9-2.8,5.9-5.7,8.8-8.4c7.1-7.8-15.2-12.2-5.7-17.9c12.5-9.3,4.9-11.9-3.5-20c8.5-8.4,15.8-10.8,2.8-20.4c-5.6-3.7-2.9-5.8,0.8-9.2c15-14-7.5-13.3-18.7-13.3C205,0,203.1,6.8,186,6.8c-42.2,0-120.7,0.4-139.4,0.4c-12.3,0-20.9-7-34-7c-17.8,0-9,10.3-2.3,18.1c2.6,2.4-3.4,4.9-4.8,7.1c-15.8,11.3,12.7,14.3,2.1,21.3C-4.9,56,2.7,58.5,11,66.7C6.7,71.4-4.7,77.6,4.5,83.6c1.9,2.8,9.4,5.6,4.5,8.4c-10.6,9-10.2,10.3,0.4,19.3c8.9,5.9-33.9,20.8,12.8,20.8c9.9,0,20.4-6.2,33.9-6.2c29.6,0,53.9-0.2,83.5-0.3c17,0,33.3,0,50.3,0c16.4,0,21.9,6.9,33.6,6.9c26.4,0.2,13.2-11.9,6.9-19.6C233.6,108.7,240.4,105.8,241,100.3z"/>
    </svg>

    //star_1
    <svg width="216" height="207" data-text="Loyalty Program Subscribers" viewBox="0 0 215.63 207.32" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
        <path fill="#FCCC2E" d="M215.58 80.4c-2.4-20.84-28.66-18.39-43.85-23.9-14.36-2.08-24.24-6.78-30.79-20.3C123.16 7.08 105-21.58 81.95 23.39 70.39 41.5 67.18 55.64 43.25 58.86c-30.42 6.93-62.07 16.25-29.54 49.3 7.85 11.74 23.59 20.99 24.1 36.11-3.52 63.77-5.88 78.21 60.12 47.67 30.76-17.91 96.78 61.02 83.63-33.82-.43-10.74-4.25-23.29 4.48-31.82 7.87-12.75 30.8-31.61 29.54-45.9z" />
    </svg>

    //triangle_1
    <svg width="270" height="154" data-text="Inventory Turnover" viewBox="0 0 269.83 154.41" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
	    <path fill="#4EA661" d="M185.93,0.43C179.8,0.4,88.05,0,81.92,0C-28.64,0-25.94,154.02,81.84,154.4c8.63,0.03,98.06-0.02,103.56,0C296.88,154.4,298.89,0.43,185.93,0.43z" />
    </svg>
`
var decomp_bodies = []
const parser = new DOMParser()
const svg_doc = parser.parseFromString(svg_doc_string, 'text/html')
for (let i = 0; i < svg_doc.body.children.length; i++) {
  let svg_element = svg_doc.body.children[i]
  let svg_d = svg_element.querySelector('path').getAttribute('d')
  let vertices = parseSVGPath(svg_d)
  let decomp_body = decomp.quickDecomp(vertices)
  decomp_bodies.push(decomp_body)
}
export const svg = decomp_bodies

// 提取顶点
function parseSVGPath(pathData) {
  const commands = makeAbsolute(parseSVG(pathData))
  const vertices = []
  commands.forEach((command) => {
    switch (command.code) {
      case 'M': {
        vertices.push({ x: command.x, y: command.y })
        break
      }
      case 'H': {
        vertices.push({ x: command.x0, y: command.y0 })
        vertices.push({ x: command.x, y: command.y })
        break
      }
      case 'L': {
        vertices.push({ x: command.x0, y: command.y0 })
        vertices.push({ x: command.x, y: command.y })
        break
      }
      case 'C': {
        const cPoints = subdivideCubic(command)
        cPoints.forEach((p) => vertices.push({ x: p.x, y: p.y }))
        break
      }
      case 'Z': {
        vertices.push({ x: command.x, y: command.y })
        break
      }
      default: {
        console.warn(`未处理的命令: ${command.code}`)
        break
      }
    }
  })

  return vertices
}
// 处理三次贝塞尔曲线C的函数图像
function subdivideCubic(command, segments = 20) {
  const points = []
  for (let i = 0; i <= segments; i++) {
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
//精确坐标点到小数点后两位
// function roundVertices(vertices, decimal = 2) {
//   return vertices.map((v) => ({
//     x: Number(v.x.toFixed(decimal)),
//     y: Number(v.y.toFixed(decimal))
//   }))
// }
