<template>
  <!-- ContactWithUsMarquee  -->
  <div
    id="contact_with_us_marquee"
    class="w-full h-[7rem] relative overflow-hidden flex items-center"
  >
    <div id="CWUM_element_0" :style="CWUMchildrenStyleValue" class="absolute flex justify-center">
      <div class="bg-white rounded-3xl w-[8rem] h-[3rem] flex justify-center items-center">
        <p class="text-[#262626] font-MabryPro font-bold">LABLE 0</p>
      </div>
    </div>
    <div id="CWUM_element_1" :style="CWUMchildrenStyleValue" class="absolute flex justify-center">
      <div class="bg-white rounded-3xl w-[8rem] h-[3rem] flex justify-center items-center">
        <p class="text-[#262626] font-MabryPro font-bold">LABLE 1</p>
      </div>
    </div>
    <div id="CWUM_element_2" :style="CWUMchildrenStyleValue" class="absolute flex justify-center">
      <div class="bg-white rounded-3xl w-[8rem] h-[3rem] flex justify-center items-center">
        <p class="text-[#262626] font-MabryPro font-bold">LABLE 2</p>
      </div>
    </div>
    <div id="CWUM_element_3" :style="CWUMchildrenStyleValue" class="absolute flex justify-center">
      <div class="bg-white rounded-3xl w-[8rem] h-[3rem] flex justify-center items-center">
        <p class="text-[#262626] font-MabryPro font-bold">LABLE 3</p>
      </div>
    </div>
    <div id="CWUM_element_4" :style="CWUMchildrenStyleValue" class="absolute flex justify-center">
      <div class="bg-white rounded-3xl w-[8rem] h-[3rem] flex justify-center items-center">
        <p class="text-[#262626] font-MabryPro font-bold">LABLE 4</p>
      </div>
    </div>
    <div id="CWUM_element_5" :style="CWUMchildrenStyleValue" class="absolute flex justify-center">
      <div class="bg-white rounded-3xl w-[8rem] h-[3rem] flex justify-center items-center">
        <p class="text-[#262626] font-MabryPro font-bold">LABLE 5</p>
      </div>
    </div>
    <div id="CWUM_element_6" :style="CWUMchildrenStyleValue" class="absolute flex justify-center">
      <div class="bg-white rounded-3xl w-[8rem] h-[3rem] flex justify-center items-center">
        <p class="text-[#262626] font-MabryPro font-bold">LABLE 6</p>
      </div>
    </div>
    <div id="CWUM_element_7" :style="CWUMchildrenStyleValue" class="absolute flex justify-center">
      <div class="bg-white rounded-3xl w-[8rem] h-[3rem] flex justify-center items-center">
        <p class="text-[#262626] font-MabryPro font-bold">LABLE 7</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

var CWUMparentWidth = 75
var CWUMchildrenWidth = 8

var CWUMchildrenStyleValue = `width: ${CWUMchildrenWidth}rem; right:-${CWUMchildrenWidth}rem`

onMounted(() => {
  var CWUMtl = gsap.timeline()
  var CWUM_marquee_container = document.getElementById('contact_with_us_marquee')
  var CWUMchildren = CWUM_marquee_container.children.length
  var CWUMduration = CWUMchildren * 4
  var CWUMlead = CWUMduration / CWUMchildren
  var CWUMleft = CWUMchildrenWidth * CWUMchildren - CWUMparentWidth + 'rem'

  var CWUMmarquee = gsap.timeline()
  for (let i = 0; i < CWUMchildren; i++) {
    if (i === 0) {
      var CWUM_tween_0 = gsap.to(`#CWUM_element_${i}`, {
        ease: 'none',
        left: CWUMleft,
        repeat: -1,
        duration: CWUMduration
      })
      CWUMmarquee.add(CWUM_tween_0)
    } else {
      var CWUM_tween = gsap.to(`#CWUM_element_${i}`, {
        ease: 'none',
        left: CWUMleft,
        repeat: -1,
        duration: CWUMduration
      })
      CWUMmarquee.add(CWUM_tween, `<${CWUMlead}`)
    }
  }
  CWUMtl.add(CWUMmarquee)
})
</script>
