<template>
  <!-- 开头展示 -->
  <div class="pt-[5rem] pb-[1rem] px-[9rem] bg-red-100 w-auto h-[30rem] flex justify-start">
    <p id="textcontainer" class="leading-tight">
      <span class="font-MabryPro font-medium text-[5rem] tracking-tight uppercase">
        Transiformative </span
      ><br />
      <span class="font-MabryPro font-medium text-[4rem] tracking-tight"> Experiences </span><br />
      <span class="font-extralight text-[2rem]"> For Product & Brands </span>
    </p>
    <button
      id="circlebutton"
      class="border-2 border-black w-20 h-20 mt-auto ml-auto rounded-full align-middle justify-center"
    >
      <p id="downarrow" class="text-[3rem] font-light -translate-y-2">↓</p>
    </button>
  </div>

  <!-- 产品展示的演示 -->
  <video
    data-speed="0.9"
    id="sky"
    autoplay
    loop
    muted
    src="/src/assets/Clouds.mp4"
    class="rounded-[30rem] top-[25rem] left-[7rem] w-[45rem] h-[20rem] object-cover absolute"
  ></video>

  <!-- 动态合作品牌 Cards -->
  <div class="w-full h-[25rem] flex border-2 border-red-200">
    <div data-speed="0.9" id="perscontainer" class="ml-auto mt-[3rem] w-[30rem]">
      <div id="first" class="w-[13rem] h-[17rem] bg-yellow-300 rounded-[2.5rem] absolute"></div>
      <div id="second" class="w-[13rem] h-[17rem] bg-green-300 rounded-[2.5rem] absolute"></div>
      <div id="third" class="w-[13rem] h-[17rem] bg-blue-300 rounded-[2.5rem] absolute"></div>
    </div>
  </div>

  <!-- INTRO TEXT / 你的用户需要的东西 -->
  <div data-speed="0.9" id="introText" class="flex mx-[8rem] my-[2rem] border-2 border-blue-400">
    <p
      data-speed="1.1"
      id="customers"
      class="w-[13rem] text-[1.5rem] mt-[2rem] font-MabryPro font-thin tracking-wider"
    >
      Customers
    </p>
    <div id="needconnection">
      <div class="text-[6rem] font-MabryPro font-thin tracking-wider leading-[6rem]">
        <div class="overflow-hidden">
          <p id="need" class="-translate-y-[6rem]">Need</p>
        </div>
        <div class="overflow-hidden">
          <p id="connection" class="-translate-y-[6rem]">Connection</p>
        </div>
      </div>
      <p class="mt-[1rem] text-[1rem] font-MabryPro font-thin uppercase">
        They want to buy brands they love and trust.
      </p>
    </div>
  </div>

  <!-- INTRO IMG / 简短案例展示-->
  <div
    data-speed="1.1"
    id="introImgGroup"
    class="flex h-[40rem] mx-[8rem] border-2 border-green-600"
  >
    <div class="w-[15rem] h-[22rem] ml-[3rem] flex">
      <div
        id="introImgLeft"
        class="w-[15rem] h-[22rem] mt-auto mb-auto border-[0.7rem] border-blue-600 rounded-[3rem]"
      ></div>
    </div>
    <div data-speed="1.2" class="mt-auto ml-auto mr-[3rem] w-[28rem] h-[35rem] flex">
      <div id="introImgRight" class="flex m-auto w-auto h-auto">
        <div
          class="w-[28rem] h-[35rem] border-[0.7rem] border-rose-400 rounded-[3rem] flex relative"
        >
          <div
            id="introImgRightTitle"
            class="w-[10rem] h-[5rem] border-[0.7rem] border-pink-200 rounded-[1rem] m-[2rem] mr-auto absolute left-2"
          ></div>
          <div
            id="introImgRightLable"
            class="w-[5rem] h-[5rem] border-[0.7rem] border-pink-200 rounded-[1rem] m-[2rem] ml-auto absolute right-2"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <!-- explain container / 解释用户需要的东西 -->
  <div
    data-speed="1"
    id="explaincontainer"
    class="w-auto mx-[8rem] mb-[10rem] border-2 border-rose-400 overflow-hidden"
  >
    <p
      id="explain"
      class="text-center font-MabryPro font-normal text-[1.4rem] uppercase tracking-wider leading-tight"
    >
      Crafting compelling, data-driven brand<br />
      experiences that connect with audiences’<br />
      emotional core takes a wealth of research and<br />
      understanding.
    </p>
  </div>

  <!-- first marquee container / 夜幕Part1 入场动画 -->
  <div id="first_marquee_container" class="flex items-center flex-col border-2 border-lime-500">
    <svg
      viewBox="0 0 630 250"
      xmlns="http://www.w3.org/2000/svg"
      id="black_marquee_container"
      class="w-[100vw] h-[50vw] m-auto bg-neutral-800 overflow-hidden border-4 border-red-500"
    >
      <g id="text_marquee_container">
        <text
          x="100%"
          y="20%"
          id="first_text"
          class="uppercase fill-neutral-50 text-[3rem] font-MabryPro font-normal tracking-wider"
        >
          ❉ parts that represent a whole
        </text>
        <text
          x="100%"
          y="20%"
          id="second_text"
          class="uppercase fill-neutral-50 text-[3rem] font-MabryPro font-normal tracking-wider"
        >
          ❉ parts that represent a whole
        </text>
      </g>
      <g id="color_marquee_container">
        <line
          id="first_color"
          x1="650"
          y1="100"
          x2="850"
          y2="100"
          stroke-linecap="round"
          class="stroke-red-600 stroke-[1.5rem]"
        />
        <line
          id="second_color"
          x1="650"
          y1="150"
          x2="850"
          y2="150"
          stroke-linecap="round"
          class="stroke-yellow-600 stroke-[1.5rem]"
        />
        <line
          id="third_color"
          x1="650"
          y1="150"
          x2="850"
          y2="150"
          stroke-linecap="round"
          class="stroke-lime-500 stroke-[1.5rem]"
        />
        <line
          id="forth_color"
          x1="650"
          y1="200"
          x2="850"
          y2="200"
          stroke-linecap="round"
          class="stroke-emerald-700 stroke-[1.5rem]"
        />
        <line
          id="fifth_color"
          x1="650"
          y1="200"
          x2="850"
          y2="200"
          stroke-linecap="round"
          class="stroke-emerald-700 stroke-[1.5rem]"
        />
      </g>
    </svg>
  </div>

  <!-- text after marquee / 夜幕Part2 中段文字-->
  <div id="text-after-marquee" class="w-full h-[auto] border-4 border-black bg-neutral-800">
    <div class="p-[4rem]">
      <p class="uppercase text-white font-MabryPro text-sm">rethink your product story</p>
      <p class="text-white text-[2rem] tracking-wide leading-[5rem]">
        with <span class="rounded-full bg-pink-300 px-4 py-2">beautiful designs</span> , bespoke
        <span class="rounded-full bg-amber-400 px-4 py-2">copywriting</span> , and<br />
        <span class="rounded-full bg-purple-600 px-4 py-2">powerful visuals</span>
        that are fresh and authentic. To achieve this, we start with a
        <span class="rounded-full bg-red-600 px-4 py-2">discovery</span> phase analyzing your
        customers, and we work backward to find the most compelling emotional solution.
      </p>
    </div>
  </div>

  <!-- black window warpper / 夜幕Part3 离场动画-->
  <div
    id="black_window_warpper"
    class="w-[100vw] h-[50vw] flex justify-center items-center border-2 border-blue-600 z-10"
  >
    <div
      data-speed="1"
      id="black_window_container"
      class="w-[100vw] h-[50vw] flex justify-evenly items-center bg-neutral-800 border-2 border-pink-600 brightness-100"
    >
      <div class="w-[33%] h-[100%] flex items-center">
        <div
          id="black_window_left"
          class="m-auto w-[60%] h-[30%] border-4 rounded-3xl border-red-600 bg-neutral-100"
        ></div>
      </div>

      <div class="w-[33%] h-[100%] flex items-center">
        <div
          id="black_window_center"
          class="m-auto w-[100%] h-[100%] border-4 rounded-3xl border-blue-600 bg-neutral-100"
        ></div>
      </div>
      <div class="w-[33%] h-[100%] flex items-center">
        <div
          id="black_window_right"
          class="m-auto w-[45%] h-[30%] border-4 rounded-3xl border-yellow-400 bg-neutral-100"
        ></div>
      </div>
    </div>
  </div>

  <!-- eye grabbing / 我们打造吸引眼球的E-Design -->
  <div
    id="eye_grabbing"
    class="w-auto flex flex-col items-center text-[7rem] tracking-wider leading-[9rem] border-4 border-lime-500"
  >
    <div class="overflow-hidden transition-all">
      <p id="first_text_content" class="translate-y-0">We <span class="font-thin">Design</span></p>
    </div>
    <div class="overflow-hidden">
      <p id="second_text_content" class="translate-y-0">
        Eye <span class="border-4 rounded-full border-red-500">15</span> Grabbing
      </p>
    </div>
    <div class="relative h-[9rem] w-[30rem] border-b-2 border-red-500 overflow-hidden">
      <p id="first_marquee_content" class="absolute left-[100%] text-[3rem] mb-auto uppercase">
        ¯content
      </p>
      <p id="second_marquee_content" class="absolute left-[100%] text-[3rem] mb-auto uppercase">
        ¯content
      </p>
      <p id="third_marquee_content" class="absolute left-[100%] text-[3rem] mb-auto uppercase">
        ¯content
      </p>
    </div>
  </div>

  <!-- CardsContainer / 合作品牌 静态元素 -->
  <CardsContainer />

  <!-- 客户的用户需求 -->
  <div
    class="h-[45vw] border-2 border-blue-600 flex flex-col items-center justify-center text-center uppercase"
  >
    <p class="text-[0.7rem] font-MabryPro tracking-wider mb-[2rem]">the reality</p>
    <p class="text-[2rem] font-MabryPro font-normal tracking-wider leading-tight">
      Your audience sees your product as<br />
      more than just a product. It’s<br />
      evaluated based on your social<br />
      media channels, website journeys, <br />and brand stories.
    </p>
  </div>

  <!-- BrandStories / 品牌故事 -->
  <BrandStories />

  <!-- SlideServices / 具体案例 -->
  <SlideServices />

  <!-- 我能提供的服务类型 -->
  <WeDo />

  <!-- background_layer -->
  <div id="background_layer" class="bg-cyan-50 border-4 border-cyan-700">
    <!-- ClientsLoveOurWork / 客户对我们的评价 -->
    <div
      id="clients_love_our_work"
      class="w-[100vw] h-[50vw] flex flex-col items-center relative p-[3rem] border-4"
    >
      <div class="text-[4rem] leading-[6rem] flex flex-col items-center">
        <p id="clients_first_line" class="tracking-wider">
          Our <span class="font-thin font-MabryPro text-[4.5rem]">Clients</span>
        </p>
        <p id="clients_second_line" class="tracking-wide">
          <em class="font-MabryPro font-thin text-red-500">love** </em><span>our </span
          ><em>work</em>
        </p>
      </div>

      <div id="cards_layer" class="relative flex justify-center m-4">
        <!-- blue card -->
        <div
          id="blue_card"
          class="w-[50rem] h-[18rem] bg-[#73c7ff] rounded-[3rem] flex flex-col justify-center items-center absolute top-[0rem]"
        >
          <p class="bg-white rounded-[0.5rem] p-1 text-[1.5rem] mt-6 mb-[4rem] leading-tight">
            “eDesign Interactive is a leader in design innovation.”
          </p>
          <div class="w-[38rem] grid-cols-3 grid">
            <div class="flex">
              <div class="bg-neutral-100 w-[3rem] h-[3rem] rounded-full mr-2"></div>
              <div class="flex flex-col text-[0.8rem] leading-tight">
                <p class="font-MabryPro font-bold tracking-wide">Roland Nichols</p>
                <p class="tracking-tight opacity-50">Marketing Manager</p>
                <p class="tracking-tight">Fastmail</p>
              </div>
            </div>
            <div class="flex justify-center">
              <button
                class="bg-black text-white text-[0.7rem] px-[1.5rem] underline font-MabryPro tracking-wider rounded-3xl font-thin"
              >
                Read more in Clutch
              </button>
            </div>
          </div>
        </div>

        <!-- yellow card -->
        <div
          id="yellow_card"
          class="w-[50rem] h-[18rem] bg-[#f9d83f] rounded-[3rem] flex flex-col justify-center items-center absolute top-[20rem]"
        >
          <div
            class="mt-[3rem] mb-[4rem] flex flex-col justify-center items-center leading-tight tracking-wide"
          >
            <p class="bg-white rounded-[0.5rem] px-1 text-[1.5rem]">
              “eDesign Interactive are wonderful, and we love
            </p>
            <p class="bg-white rounded-[0.5rem] px-1 text-[1.5rem]">working with them!"</p>
          </div>

          <div class="w-[38rem] grid-cols-3 grid">
            <div class="flex">
              <div class="bg-neutral-100 w-[3rem] h-[3rem] rounded-full mr-2"></div>
              <div class="flex flex-col text-[0.8rem] leading-tight">
                <p class="font-MabryPro font-bold">Shaelyn Germain-Dupre</p>
                <p class="text-[0.6rem] tracking-tight opacity-50">Global Engagement Manager</p>
                <p class="text-[0.6rem] tracking-tight">Wimpy Kid, Inc.</p>
              </div>
            </div>
            <div class="flex justify-center">
              <button
                class="bg-black text-white text-[0.7rem] px-[1.5rem] underline font-MabryPro tracking-wider rounded-3xl font-thin"
              >
                Read more in Clutch
              </button>
            </div>
          </div>
        </div>

        <!-- green card -->
        <div
          id="green_card"
          class="w-[50rem] h-[18rem] bg-[#abd373] rounded-[3rem] flex flex-col justify-center items-center absolute top-[40rem]"
        >
          <div
            class="mt-[3rem] mb-[4rem] flex flex-col justify-center items-center leading-tight tracking-wide"
          >
            <p class="bg-white rounded-[0.5rem] px-1 text-[1.5rem]">
              "We’ve seen an increase in our site traffic — we’re
            </p>
            <p class="bg-white rounded-[0.5rem] px-1 text-[1.5rem]">
              hitting almost 100,000 viewers per month.”
            </p>
          </div>

          <div class="w-[38rem] grid-cols-3 grid">
            <div class="flex">
              <div class="bg-neutral-100 w-[3rem] h-[3rem] rounded-full mr-2"></div>
              <div class="flex flex-col text-[0.8rem] leading-tight">
                <p class="font-MabryPro font-bold">Chandler Gotschlich</p>
                <p class="text-[0.6rem] tracking-tight opacity-50">
                  Associate Director of Marketing
                </p>
                <p class="text-[0.6rem] tracking-tight">Sabra Dipping Company</p>
              </div>
            </div>
            <div class="flex justify-center">
              <button
                class="bg-black text-white text-[0.7rem] px-[1.5rem] underline font-MabryPro tracking-wider rounded-3xl font-thin"
              >
                Read more in Clutch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- WeLoveOurClients  -->
    <WeLoveOurClients />

    <!-- ContactWithUs -->
    <div
      id="contact_with_us"
      class="w-[100vw] h-auto border-4 border-red-400 flex flex-col px-[10rem] pt-[10rem] pb-[5rem]"
    >
      <div class="w-auto h-auto flex justify-center">
        <div
          id="contact_with_us_outter"
          class="bg-[#f1cece] rounded-[3rem] w-full h-[6rem] flex flex-col justify-center p-[3rem]"
        >
          <div id="contact_with_us_inner" class="flex items-center">
            <p class="text-[1.5rem] tracking-wider">Connect with your audience at a core level.</p>
            <button
              class="ml-auto bg-black rounded-3xl text-[0.7rem] tracking-wider text-white w-[10rem] h-[3rem]"
            >
              Start a project
            </button>
          </div>
        </div>
      </div>

      <p
        id="contact_with_us_container_next_text"
        class="text-center text-neutral-50 font-MabryPro m-[1.5rem]"
      >
        Request a proposal or arrange a call with our team.
      </p>
      <div class="mt-[3rem]">
        <p
          id="contact_with_us_1"
          class="text-[1.5rem] text-neutral-50 tracking-wider w-[40rem] my-[0.5rem]"
        >
          <a class="text-[#f1cece]">eDesign </a> is an award-winning web and digital marketing
          agency.
        </p>
        <div
          id="contact_with_us_2"
          class="text-[3.5rem] text-neutral-50 tracking-wide my-[0.5rem] leading-snug"
        >
          <p>Our CPG team is ready to</p>
          <p>wowify your brand and</p>
          <p>transform your product into an</p>
          <p>emotion-conquering</p>
          <p>powerhouse.</p>
        </div>
      </div>
    </div>

    <!-- ContactWithUsMarquee -->
    <ContactWithUsMarquee />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

import CardsContainer from '@/components/Homeitems/CardsContainer.vue'
import BrandStories from '@/components/Homeitems/BrandStories.vue'
import SlideServices from '@/components/Homeitems/SlideServices.vue'
import WeDo from '@/components/Homeitems/WeDo.vue'
import WeLoveOurClients from '@/components/Homeitems/WeLoveOurClients.vue'
import ContactWithUsMarquee from '@/components/Homeitems/ContactWithUsMarquee.vue'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function skyAndButton() {
  var tl = gsap.timeline({
    ease: 'sine.inOut',
    scrollTrigger: {
      trigger: '#sky',
      toggleActions: 'play pause',
      pin: true,
      start: 'top 50%',
      end: '+=250',
      scrub: 1.5,
      markers: true,
      anticipatePin: 1,
      pinSpacing: true
    }
  })
  tl.to('#sky', {
    width: 600,
    height: 400,
    borderRadius: 50
  }).to(
    '#circlebutton',
    {
      y: 150,
      opacity: 0
    },
    '<'
  )

  gsap.to('#downarrow', {
    y: 10,
    yoyo: true,
    repeat: -1,
    ease: 'power1'
  })
}
function introCard() {
  var tl = gsap.timeline({
    ease: 'sine.inOut',
    scrollTrigger: {
      trigger: '#perscontainer',
      toggleActions: 'play pause',
      start: 'top 70%',
      end: '+=400',
      markers: {
        startColor: 'yellow',
        endColor: 'orange',
        fontSize: '18px',
        indent: 20
      },
      scrub: 1
    }
  })
  tl.from('#first', {
    x: 650,
    y: -400,
    opacity: 0.5,
    duration: 3
  })
    .from(
      '#second',
      {
        x: 600,
        y: -400,
        opacity: 0.5,
        duration: 3
      },
      '<1'
    )
    .from(
      '#third',
      {
        x: 600,
        y: -400,
        opacity: 0.5,
        duration: 3
      },
      '<1'
    )
  return tl
}
function introText() {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#introText',
        toggleActions: 'play pause',
        start: 'top 30%',
        end: '+=200',
        markers: {
          startColor: 'purple',
          endColor: 'purple',
          fontSize: '18px',
          indent: 30
        },
        scrub: 1,
        pin: true
      }
    })
    .from('#customers', {
      opacity: 0
    })
    .to(
      '#need',
      {
        y: 0
      },
      '<'
    )
    .to(
      '#connection',
      {
        y: 0
      },
      '<0.1'
    )
  return tl
}
function introImg() {
  var tlleft = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#introImgGroup',
        toggleActions: 'play pause',
        start: 'top 70%',
        end: '+=300',
        markers: {
          startColor: 'green',
          endColor: 'green',
          fontSize: '18px',
          indent: 35
        },
        scrub: 0
      }
    })
    .from('#introImgLeft', {
      opacity: 0,
      height: 0
    })

  gsap.set('#introImgRightTitle', { width: 0, height: 0, opacity: 0 })
  gsap.set('#introImgRightLable', { width: 0, height: 0, opacity: 0 })

  var tlright = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#introImgRight',
        toggleActions: 'play pause',
        start: 'top 60%',
        end: '+=180',
        fastScrollEnd: true,
        markers: {
          startColor: 'red',
          endColor: 'red',
          fontSize: '18px',
          indent: 35
        },
        scrub: 1
      }
    })
    .from('#introImgRight', {
      opacity: 0,
      width: '16rem',
      height: '20rem',
      immediateRender: false
    })
    .fromTo(
      '#introImgRightTitle',
      { width: '0rem', height: '0rem', opacity: 0 },
      { width: '10rem', height: '5rem', opacity: 1 },
      '>0.2'
    )
    .fromTo(
      '#introImgRightLable',
      { width: '0rem', height: '0rem', opacity: 0 },
      { width: '5rem', height: '5rem', opacity: 1 },
      '>0.2'
    )
    .to('#introImgRight', {
      opacity: 0,
      scrollTrigger: {
        trigger: '#introImgRight',
        toggleActions: 'play pause',
        start: 'bottom 60%',
        end: '+=50',
        fastScrollEnd: true,
        markers: {
          startColor: 'red',
          endColor: 'red',
          fontSize: '18px',
          indent: 35
        },
        scrub: 2
      }
    })
  tlleft.add(tlright)
  return tlleft
}
function explain() {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#explaincontainer',
        toggleActions: 'play pause',
        start: 'top 70%',
        end: '+=300',
        markers: {
          startColor: 'pink',
          endColor: 'pink',
          fontSize: '18px',
          indent: 35
        },
        scrub: 1
      }
    })
    .from('#explain', {
      y: '8rem'
    })

  return tl
}
function blackMarqueeContainer() {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#black_marquee_container',
        toggleActions: 'play pause',
        start: 'top top',
        end: '+=300',
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        markers: {
          startColor: 'yellow',
          endColor: 'yellow',
          fontSize: '18px',
          indent: 10
        }
      }
    })
    .fromTo(
      '#black_marquee_container',
      {
        margin: 'auto',
        width: '48rem',
        height: '22rem',
        borderRadius: '2.5rem'
      },
      {
        width: '100vw',
        height: '50vw',
        borderRadius: 0
      }
    )
    .to('#color_marquee_container', {
      opacity: 0,
      scrollTrigger: {
        trigger: '#color_marquee_container',
        toggleActions: 'play pause',
        start: 'center center',
        end: '+=100',
        scrub: 1,
        markers: {
          startColor: 'white',
          endColor: 'white',
          fontSize: '18px',
          indent: 10
        }
      }
    })
  return tl
}
function firstMarqueeContainer() {
  var durationtime = 26
  var lead = durationtime / 2
  var tl = gsap
    .timeline({})
    .to('#first_text', {
      x: '-203%',
      ease: 'none',
      duration: durationtime,
      repeat: -1
    })
    .to(
      '#second_text',
      {
        x: '-203%',
        ease: 'none',
        duration: durationtime,
        repeat: -1
      },
      `<${lead}`
    )
  return tl
}
function secondMarqueeContainer() {
  var tl = gsap
    .timeline()
    .to('#first_color', { ease: 'none', attr: { x1: -210, x2: -10 }, duration: 14, repeat: -1 })
    .to(
      '#second_color',
      { ease: 'none', attr: { x1: -210, x2: -10 }, duration: 10, repeat: -1 },
      '<2'
    )
    .to(
      '#third_color',
      { ease: 'none', attr: { x1: -210, x2: -10 }, duration: 10, repeat: -1 },
      '<5'
    )
    .to('#forth_color', { ease: 'none', attr: { x1: -210, x2: -10 }, duration: 8, repeat: -1 }, '<')
    .to(
      '#fifth_color',
      { ease: 'none', attr: { x1: -210, x2: -10 }, duration: 8, repeat: -1 },
      '<4'
    )
  return tl
}
function textAfterMarquee() {
  var tl = gsap.timeline().from('#text-after-marquee', {
    opacity: 0,
    ease: 'sine.inOut',
    scrollTrigger: {
      trigger: '#text-after-marquee',
      toggleActions: 'play pause',
      start: 'top 70%',
      end: '+=100',
      pin: true,
      scrub: 1,
      markers: {
        startColor: 'blue',
        endColor: 'blue',
        fontSize: '18px',
        indent: 10
      }
    }
  })
  return tl
}
function blackWindowContainer() {
  var tl = gsap
    .timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: '#black_window_container',
        toggleActions: 'play pause',
        start: 'top 90%',
        end: '+=300',
        anticipatePin: 1,
        scrub: 1,
        markers: {
          startColor: 'red',
          endColor: 'red',
          fontSize: '18px',
          indent: 50
        }
      }
    })
    .from('#black_window_left', { opacity: 0 }, '<')
    .from('#black_window_center', { width: '20rem', height: '110%', y: -30 }, '<')
    .from('#black_window_right', { width: '5%', height: '5%', opacity: 0 }, '<')

  var tll = gsap.timeline({}).to('#black_window_container', {
    width: '36rem',
    height: '18rem',
    borderRadius: '2.5rem',
    filter: 'brightness(0)',
    scrollTrigger: {
      trigger: '#black_window_warpper',
      toggleActions: 'play pause',
      start: 'center center',
      end: '+=400',
      fastScrollEnd: true,
      pin: true,
      scrub: 0
    }
  })

  tl.add(tll)
  return tl
}
function eyeGrabbing() {
  var tl = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#eye_grabbing',
        toggleActions: 'play pause',
        start: 'top 60%',
        end: '+=250',
        scrub: 1,
        markers: {
          startColor: 'green',
          endColor: 'green',
          fontSize: '18px',
          indent: 50
        }
      }
    })
    .from('#first_text_content', {
      yPercent: 100
    })
    .from(
      '#second_text_content',
      {
        yPercent: 100
      },
      '<'
    )

  return tl
}
function eyeGrabbingMarquee() {
  var durationtime = 21
  var lead = durationtime / 3
  var tl = gsap
    .timeline()
    .to('#first_marquee_content', {
      ease: 'none',
      left: '-140%',
      duration: durationtime,
      repeat: -1
    })
    .to(
      '#second_marquee_content',
      { ease: 'none', left: '-140%', duration: durationtime, repeat: -1 },
      `<${lead}`
    )
    .to(
      '#third_marquee_content',
      { ease: 'none', left: '-140%', duration: durationtime, repeat: -1 },
      `<${lead}`
    )
  return tl
}
function clientsLoveOurWork() {
  gsap.set('#blue_card', { transformOrigin: 'top' })
  gsap.set('#yellow_card', { transformOrigin: 'top' })
  gsap.set('#green_card', { transformOrigin: 'top' })

  // 入场动画
  var tl_1 = gsap
    .timeline({
      ease: 'sine.inOut'
    })
    .from('#clients_first_line', {
      opacity: 0,
      y: -60,
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'top 70%',
        end: '+=300',
        scrub: 1,
        anticipatePin: 1,
        markers: {
          startColor: 'red',
          endColor: 'red',
          fontSize: '10px',
          indent: 180
        }
      }
    })
    .from('#clients_second_line', {
      opacity: 0,
      y: 60,
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'top 70%',
        end: '+=300',
        scrub: 1,
        anticipatePin: 1,
        markers: {
          startColor: 'red',
          endColor: 'red',
          fontSize: '10px',
          indent: 180
        }
      }
    })
    .from('#blue_card', {
      top: '5rem',
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'top 70%',
        end: '+=300',
        scrub: 1,
        anticipatePin: 1,
        markers: {
          startColor: 'red',
          endColor: 'red',
          fontSize: '10px',
          indent: 180
        }
      }
    })

  // 卡片动画
  var tl_2 = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'top top',
        end: '+=1000',
        scrub: 1,
        fastScrollEnd: true,
        pin: true,
        anticipatePin: 1,
        markers: {
          startColor: 'orange',
          endColor: 'orange',
          fontSize: '10px',
          indent: 180
        }
      }
    })
    .to('#yellow_card', {
      top: '1rem'
    })
    .to(
      '#green_card',
      {
        top: '20rem'
      },
      '<'
    )
    .to(
      '#blue_card',
      {
        scale: 0.95
      },
      '<'
    )
    .to(
      '#background_layer',
      {
        backgroundColor: '#fbf9c2'
      },
      '<'
    )

    .to('#green_card', {
      top: '2rem'
    })
    .to(
      '#blue_card',
      {
        scale: 0.9
      },
      '<'
    )
    .to(
      '#yellow_card',
      {
        scale: 0.95
      },
      '<'
    )
    .to(
      '#background_layer',
      {
        backgroundColor: '#cbdfb1'
      },
      '<'
    )

  // 离场动画
  var tl_3 = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#clients_love_our_work',
        toggleActions: 'play pause',
        start: 'bottom 90%',
        end: '+=500',
        scrub: 1,
        anticipatePin: 1,
        markers: {
          startColor: 'yellow',
          endColor: 'yellow',
          fontSize: '10px',
          indent: 180
        }
      }
    })
    .to('#clients_first_line', { y: -80, duration: 7 })
    .to('#clients_second_line', { y: -90, duration: 7 }, '<2')

    .to('#blue_card', { top: '-3rem', duration: 5 }, '<1')

    .to('#blue_card', { top: '-6rem', duration: 5 })
    .to('#yellow_card', { top: '-3rem', duration: 5 }, '<')

    .to('#blue_card', { top: '-9rem', duration: 7 })
    .to('#yellow_card', { top: '-6rem', duration: 7 }, '<')
    .to('#green_card', { top: '-3rem', duration: 7 }, '<')

    .to('#cards_layer', { y: -60, duration: 5 })

  tl_1.add(tl_2)
  tl_1.add(tl_3)

  return tl_1
}
function contactWithUs() {
  var tl = gsap.timeline()
  var tl_1 = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#contact_with_us',
        toggleActions: 'play pause',
        start: 'top 60%',
        end: '+=600',
        scrub: 1,
        anticipatePin: 1,
        markers: {
          startColor: 'yellow',
          endColor: 'yellow',
          fontSize: '18px',
          indent: 50
        }
      }
    })
    .from('#contact_with_us_outter', {
      opacity: 0,
      width: '4rem'
    })
    .from('#contact_with_us_inner', {
      opacity: 0
    })
    .from(
      '#contact_with_us_container_next_text',
      {
        opacity: 0,
        y: 30
      },
      '<'
    )
    .from('#contact_with_us_1', {
      opacity: 0
    })
    .from('#contact_with_us_2', {
      opacity: 0
    })

  var tl_2 = gsap
    .timeline({
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: '#contact_with_us_2',
        toggleActions: 'play pause',
        start: 'top 50%',
        end: '+=600',
        scrub: 1,
        anticipatePin: 1,
        markers: {
          startColor: 'yellow',
          endColor: 'yellow',
          fontSize: '18px',
          indent: 50
        }
      }
    })
    .to('#background_layer', { backgroundColor: '#262626' })

  tl.add(tl_1)
  tl.add(tl_2)
  return tl
}
onMounted(() => {
  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1
  })

  var tl = gsap.timeline()
  tl.add(skyAndButton)

  tl.add(introCard)
  tl.add(introText)
  tl.add(introImg)

  tl.add(explain)

  tl.add(blackMarqueeContainer)
  tl.add(firstMarqueeContainer)
  tl.add(secondMarqueeContainer)

  tl.add(textAfterMarquee)
  tl.add(blackWindowContainer)

  tl.add(eyeGrabbing)
  tl.add(eyeGrabbingMarquee)

  tl.add(clientsLoveOurWork)
  tl.add(contactWithUs)
})
</script>

<style scoped>
#perscontainer {
  perspective: 100;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
}

#first {
  transform: translateX(4rem) translateY(4rem) translateZ(10px);
}

#second {
  transform: translateX(2rem) translateY(2rem) translateZ(20px);
}

#third {
  transform: translateX(0rem) translateY(0rem) translateZ(30px);
}
</style>
