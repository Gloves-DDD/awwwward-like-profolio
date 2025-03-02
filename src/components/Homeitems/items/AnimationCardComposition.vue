<template>
  <!-- border -->
  <a
    class="m-[0.5rem] inline-flex h-[22rem] w-[16.5rem] cursor-pointer flex-col rounded-3xl p-[.75rem] lg:w-[14rem]"
    :style="`backgroundColor:${backgroundColor}`"
    :href="linkAddress"
  >
    <!-- introduction -->
    <div class="h-full w-full p-[.25rem] leading-tight tracking-wider">
      <!-- logo -->
      <div class="h-[3rem]"><img :src="brandLogo" class="scale-90" alt="brandlogo" /></div>

      <!-- intro -->
      <p class="px-1 text-[.95rem] text-wrap" :style="`color:${introtextColor}`">
        {{ brandIntroduction }}
      </p>
      <!-- tag -->
      <p
        id="tag"
        class="m-1 inline w-auto -translate-y-1 rounded-[.5rem] px-[.25rem] py-[.15rem] text-[0.7rem] font-normal text-neutral-100"
        :style="`background:${brandTag};color:${textColor}`"
      >
        {{ brandName }}
      </p>
    </div>

    <!-- bottom img -->
    <img :src="props.brandImg" class="mt-auto block h-[3/5] w-full rounded-b-2xl" alt="brandImg" />
  </a>
</template>
<script setup>
const props = defineProps({
  brandLogo: {
    type: String
  },
  brandIntroduction: {
    type: String
  },
  brandName: {
    type: String
  },
  brandImg: {
    type: String
  },
  backgroundColor: {
    type: String
  },
  introtextColor: {
    type: String
  },
  textColor: {
    type: String
  },
  brandTag: {
    type: String
  },
  linkAddress: {
    type: String
  }
})
</script>
