<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true
  }
})
const fullNameValue = ref('')

const emit = defineEmits(['close', 'submit'])

// 处理背景滚动
watch(
  () => props.show,
  (newVal) => {
    document.body.style.overflow = newVal ? 'hidden' : ''
  }
)

// 关闭处理
const closeModal = () => {
  document.body.className = ''
  emit('close')
}

// 点击背景关闭
const handleBackdropClick = (e) => {
  if (props.closeOnBackdrop && e.target === e.currentTarget) {
    closeModal()
  }
}

// ESC 关闭
const handleKeydown = (e) => {
  if (e.key === 'Escape') closeModal()
}
</script>

<template>
  <teleport to="body">
    <transition name="modal">
      <div
        v-if="show"
        class="bg-opacity-50 fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black p-4"
        @click="handleBackdropClick"
        @keydown.esc="handleKeydown"
      >
        <div
          class="relative h-auto w-[max(78%,90vw)] rounded-[min(2.75rem,5vw)] bg-[#fbd5ec] p-8 shadow-xl"
        >
          <!-- 头部 -->
          <div class="flex items-center justify-between">
            <h3 class="text-[min(1.75rem,5vw)] font-normal">
              Ready to Transform Your Brand Experience?
            </h3>
            <div class="flex items-center justify-center rounded-full bg-neutral-900">
              <button
                @click="closeModal"
                class="h-[4rem] w-[4rem] text-[min(1.5rem,5vw)] text-[#fbd5ec]"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark scale-150 transition-transform hover:rotate-90"></i>
              </button>
            </div>
          </div>
          <p class="mt-1 text-[min(1rem,4vw)]">
            Request a proposal or arrange a call with our team
          </p>

          <!-- 内容区 -->
          <div class="grid flex-1 grid-cols-1 gap-8 p-[min(1.5rem,3vw)] lg:grid-cols-2">
            <!-- left -->
            <div class="flex flex-col gap-[min(1.75rem,5vw)]">
              <div class="flex items-center gap-5">
                <p class="w-[5rem] text-end text-[.75rem]">Full Name:</p>
                <input v-model="fullNameValue" class="w-[70%] rounded-full bg-neutral-50 p-3" />
              </div>
              <div class="flex items-center gap-5">
                <p class="w-[5rem] text-end text-[.75rem]">Email address:</p>
                <input v-model="fullNameValue" class="w-[70%] rounded-full bg-neutral-50 p-3" />
              </div>
              <div class="flex items-center gap-5">
                <p class="w-[5rem] text-end text-[.75rem]">Phone Number:</p>
                <input v-model="fullNameValue" class="w-[70%] rounded-full bg-neutral-50 p-3" />
              </div>
              <div class="flex items-center gap-5">
                <p class="w-[5rem] text-end text-[.75rem]">Company:</p>
                <input v-model="fullNameValue" class="w-[70%] rounded-full bg-neutral-50 p-3" />
              </div>
            </div>
            <!-- right -->
            <div class="flex flex-col gap-[min(1.75rem,5vw)]">
              <div class="flex items-center gap-5">
                <p class="w-[5rem] text-end text-[.75rem]">Website:</p>
                <input v-model="fullNameValue" class="w-[70%] rounded-full bg-neutral-50 p-3" />
              </div>
              <div class="flex items-center gap-5">
                <p class="w-[5rem] text-end text-[.75rem]">Comments:</p>
                <input
                  v-model="fullNameValue"
                  class="h-[9rem] w-[70%] rounded-[1.75rem] bg-neutral-50 p-3"
                />
              </div>
              <!-- 底部操作区 (作用域插槽) -->

              <div class="flex justify-end p-4">
                <!-- 提交 -->
                <button
                  @click="$emit('submit')"
                  class="cursor-pointer rounded-full bg-black px-6 py-3 text-[.75rem] text-white"
                >
                  Start a project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition></teleport
  >
</template>

<style>
/* 过渡动画 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: translateY(-20px);
}
</style>
