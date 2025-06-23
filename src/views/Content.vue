<template>
  <div
    class="relative w-full h-screen overflow-hidden bg-black/70 bg-opacity-50"
  >
    <!-- Background Video -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/src/assets/video1.mp4" type="video/mp4" />
    </video>

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-start text-white text-center px-6 pt-20 pb-20 overflow-y-scroll h-screen"
    >
      <h2 class="text-4xl md:text-6xl mt-20 font-khmer text-yellow-200">
        សិរីមង្គលអាពាហ៍ពិពាហ៍
      </h2>
      <div class="flex justify-between items-center mt-10 font-khmer">
        <div>
          <div class="text-yellow-500 text-2xl md:text-3xl font-khmer-kh">
            កូនប្រុសនាម
          </div>
          <div class="text-2xl md:text-5xl mt-4 md:mt-10">ជួប</div>
          <div class="text-2xl md:text-5xl mt-2 md:mt-10">ឧត្តម</div>
        </div>
        <div class="w-[100px] md:w-[200px] font-bold mt-10">
          <img src="/src/assets/ov.png" alt="" />
        </div>
        <div>
          <div class="text-yellow-500 text-2xl md:text-3xl font-khmer-kh">
            កូនស្រីនាម
          </div>
          <div class="text-2xl md:text-5xl mt-4 md:mt-10">វ៉ាត</div>
          <div class="text-2xl md:text-5xl mt-2 md:mt-10">វិច្ចរ៉ា</div>
        </div>
      </div>
      <div class="text-yellow-500 text-2xl md:text-3xl font-khmer-kh mt-20">
        ដែលនឹងប្រព្រឹត្តទៅនៅ
      </div>
      <div class="text-3xl md:text-5xl mt-4 md:mt-10 font-khmer">
        ថ្ងៃព្រហស្បតិ៍ ទី២៦ ខែមិថុនា ឆ្នាំ២០២៥
      </div>
      <div class="text-yellow-500 text-xl md:text-3xl font-khmer-kh mt-10">
        ទីតាំង ខេត្តកំពត
      </div>
      <button
        class="flex justify-center items-center mt-10 font-khmer-kh text-yellow-500 border-2 border-yellow-500 px-4 py-2 rounded-full"
        
      >
        <div class="text-2xl md:text-4xl">បើកផែនទី</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 256 367"
        >
          <path
            fill="#34a853"
            d="M70.585 271.865a371 371 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"
          />
          <path
            fill="#fbbc04"
            d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"
          />
          <path
            fill="#4285f4"
            d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"
          />
          <path
            fill="#1a73e8"
            d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"
          />
          <path
            fill="#ea4335"
            d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"
          />
        </svg>
      </button>
      <section class="mt-40">
        <h2 class="text-4xl md:text-6xl mt-20 font-khmer text-yellow-200">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h2>
        <!-- <div
          class="flex justify-between items-center mt-20 font-khmer text-yellow-200 text-2xl md:text-3xl md:w-1/2 mx-auto"
        >
          <div>
            <div>លោក ណៃ សាលឿត</div>
            <div>លោកស្រី រឿន ធៀប</div>
          </div>
          <div>
            <div>លោក សេន គ្រី</div>
            <div>លោកស្រី ឈិន មុំ</div>
          </div>
        </div> -->
        <div  
          class="text-yellow-400 text-xl md:text-3xl font-khmer-kh mt-20 md:w-1/2 text-center mx-auto"
        >
          សម្ដេច ទ្រង់ ឯកឧត្តម អ្នកឧកញ៉ា ឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
          អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្ដី
          ជ័យមង្គល ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ
        </div>
        <div
          class="flex justify-between items-center mt-10 font-khmer md:w-1/2 mx-auto"
        >
          <div>
            <div class="text-yellow-500 text-2xl md:text-3xl font-khmer-kh">
              កូនប្រុសនាម
            </div>
            <div class="text-2xl md:text-5xl mt-4 md:mt-10">ជួប</div>
            <div class="text-2xl md:text-5xl mt-2 md:mt-10">ឧត្តម</div>
          </div>
          <div class="w-[100px] md:w-[200px] font-bold mt-10">
            <img src="/src/assets/ov.png" alt="" />
          </div>
          <div>
            <div class="text-yellow-500 text-2xl md:text-3xl font-khmer-kh">
              កូនស្រីនាម
            </div>
            <div class="text-2xl md:text-5xl mt-4 md:mt-10">វ៉ាត</div>
            <div class="text-2xl md:text-5xl mt-2 md:mt-10">វិច្ចរ៉ា</div>
          </div>
        </div>
        <div class="text-yellow-500 text-2xl md:text-3xl font-khmer-kh mt-10">
          ដែលនឹងប្រព្រឹត្តទៅ
        </div>
        <div class="text-3xl md:text-5xl mt-4 md:mt-10 font-khmer">
          ថ្ងៃព្រហស្បតិ៍ ទី២៦ ខែមិថុនា ឆ្នាំ២០២៥
        </div>
        <button
          class="flex justify-center items-center mt-10 font-khmer-kh text-yellow-500 border-2 border-yellow-500 px-4 py-2 rounded-full mx-auto"
        >
          <div class="text-2xl md:text-4xl">កត់ទុកក្នុងប្រតិទិន</div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 21 21"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 2.5h12a2 2 0 0 1 2 2v11.99a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2m-1.841 4H18.5"
                stroke-width="1"
              />
              <path
                fill="currentColor"
                d="M6.816 13.155v-1.079h.88c.668 0 1.122-.395 1.122-.972c0-.527-.415-.927-1.103-.927c-.713 0-1.152.366-1.201.996H5.15C5.201 9.874 6.201 9 7.788 9c1.563 0 2.432.864 2.427 1.895c-.005.854-.542 1.416-1.299 1.601v.093c.981.141 1.577.766 1.577 1.709c0 1.235-1.162 2.11-2.754 2.11S5.063 15.537 5 14.204h1.411c.044.596.552.977 1.309.977c.747 0 1.27-.406 1.27-1.016c0-.625-.489-1.01-1.28-1.01zm6.7 3.072v-5.611h-.087L11.7 11.808v-1.372l1.821-1.255h1.47v7.046z"
              />
            </g>
          </svg>
        </button>
      </section>
      <!-- <section class="mt-40">
        <h2
          class="text-5xl md:text-6xl mt-20 font-khmer text-yellow-200 mb-5 md:mb-20"
        >
          វិចិត្រសាល
        </h2>
        <div class="flex justify-center gap-2 md:gap-5">
          <div>
            <img
              class="md:w-96 w-60"
              src="/src/assets/photo_2025-03-05_22-07-42.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="md:w-96 w-60"
              src="/src/assets/photo_2025-03-05_22-07-18.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="flex justify-center gap-2 md:gap-5 mt-2">
          <div>
            <img
              class="md:w-96 w-60"
              src="/src/assets/photo_2025-03-05_22-07-37.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="md:w-96 w-60"
              src="/src/assets/photo_2025-03-05_22-07-47.jpg"
              alt=""
            />
          </div>
        </div>
      </section> -->
      <section class="mt-40">
        <h2
          class="text-4xl md:text-6xl mt-20 font-khmer text-yellow-200 mb-5 md:mb-20"
        >
          កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍
        </h2>
        <div class="p-1">
          <!-- Category Selection -->
          <div
            class="flex justify-center items-center text-center w-96 md:w-[600px] bg-yellow-200 p-3 rounded-lg font-khmer text-md md:text-2xl  text-gray-400"
          >
            <!-- <div
              @click="selectedDay = 'day22'"
              :class="
                selectedDay === 'day22' ? 'text-black bg-white w-40 h-10 md:w-60 items-center flex justify-center rounded-lg' : ''
              "
              class="cursor-pointer mr-10"
            >
              ២២ មីនា
            </div> -->
            <div
              class="cursor-pointer text-white"
            >
              ២៦ មិថុនា
            </div>
          </div>

          <!-- Display Information -->
          <div class="mt-5">
            <!-- <p v-if="selectedDay === 'day22'">
              <h2 class="text-3xl md:text-4xl mt-20 font-khmer text-yellow-200">
               កម្មវិធីពេលរសៀល
              </h2>
              <div class="mt-5">
                <div class="border-4 border-yellow-500 w-12 h-12 rounded-full m-auto"></div>
                <div class="border bg-yellow-500 border-yellow-500 w-1 h-12 m-auto"></div>
              </div>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-white">
               ម៉ោង២:០០រសៀល
              </h2>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-yellow-200">
               ពិធីក្រុងពាលី
              </h2>
              <div class="border bg-yellow-500 border-yellow-500 w-1 h-16 mt-2 m-auto"></div>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-white">
               ម៉ោង៣:០០រសៀល
              </h2>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-yellow-200">
               ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត
              </h2>
              <div class="border bg-yellow-500 border-yellow-500 w-1 h-16 mt-2 m-auto"></div>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-white">
               ម៉ោង៥:០០រសៀល
              </h2>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-yellow-200">
                ពិធីកាត់ខាន់ស្លា
              </h2>
              <div class="border bg-yellow-500 border-yellow-500 w-1 h-16 mt-2 m-auto"></div>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-white">
                ម៉ោង៦:០០រសៀល
              </h2>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-yellow-200">
               អញ្ជើញភ្ញៀវកិត្តិយសសេពសោយអាហារ
              </h2>
            </p> -->
            <!-- <p v-if="selectedDay === 'day23'"> -->
              <!-- <h2 class="text-3xl md:text-4xl mt-20 font-khmer text-yellow-200">
               កម្មវិធីពេលព្រឹក
              </h2>
              <div class="mt-5">
                <div class="border-4 border-yellow-500 w-12 h-12 rounded-full m-auto"></div>
                <div class="border bg-yellow-500 border-yellow-500 w-1 h-12 m-auto"></div>
              </div>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-white">
               ម៉ោង៦:៣០ព្រឹក
              </h2>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-yellow-200">
               ជួបជុំភ្ញៀវកិត្តិយសទាំងអស់ដើម្បីរៀបហែជំនូន
              </h2>
              <div class="border bg-yellow-500 border-yellow-500 w-1 h-16 mt-2 m-auto"></div>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-white">
               ម៉ោង៧:០០ព្រឹក
              </h2>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-yellow-200">
               ពិធីហែជំនូន (កំណត់)
              </h2>
              <div class="border bg-yellow-500 border-yellow-500 w-1 h-16 mt-2 m-auto"></div>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-white">
               ម៉ោង៨:៣០ព្រឹក
              </h2>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-yellow-200">
               ពិធីបំពាក់ចិញ្ចៀន
              </h2>
              <div class="border bg-yellow-500 border-yellow-500 w-1 h-16 mt-2 m-auto"></div>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-white">
               ម៉ោង៩:០០ព្រឹក
              </h2>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-yellow-200">
               ពិធីកាត់សក់បង្កក់សិរី
              </h2>
              <div class="border bg-yellow-500 border-yellow-500 w-1 h-16 mt-2 m-auto"></div>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-white">
               ម៉ោង១០:០០ព្រឹក
              </h2>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-yellow-200">
               ពិធីក្រាបសំពះផ្ទឹម ចងដៃ និងបាចផ្កាស្លា
              </h2>
              <div class="border bg-yellow-500 border-yellow-500 w-1 h-16 mt-2 m-auto"></div>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-white">
               ម៉ោង១២:០០ថ្ងៃត្រង់
              </h2>
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-yellow-200">
                អញ្ជើញភ្ញៀវកិត្តិយសពិសារភោជនាហារថ្ងៃត្រង់
              </h2>
              <h2 class="text-3xl md:text-4xl mt-10 font-khmer text-yellow-200">
               កម្មវិធីពេលល្ងាច
              </h2> -->
              <div class="mt-5">
                <div class="border-4 border-yellow-500 w-12 h-12 rounded-full m-auto"></div>
                <div class="border bg-yellow-500 border-yellow-500 w-1 h-12 m-auto"></div>
              </div>
              <!-- <h2 class="text-2xl md:text-4xl font-khmer-kh text-white">
               ម៉ោង៤:០០ល្ងាចតទៅ
              </h2> -->
              <h2 class="text-2xl md:text-4xl font-khmer-kh text-yellow-200">
                អញ្ជើញភ្ញៀវកិត្តិយសពិសារភោជនាហារដោយមេត្រីភាព
              </h2>
              <div class="border  border-yellow-500 mt-10 m-auto rounded-2xl py-5">
                <h2 class="text-2xl md:text-4xl font-khmer-kh text-yellow-200">
                អរគុណសម្រាប់ការចូលរួមរបស់លោកអ្នក
              </h2>
              </div>
            
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const selectedDay = ref("day22"); // Default selected day
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Koulen&family=Lavishly+Yours&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;700&display=swap");

.font-khmer-kh {
  font-family: "Kantumruy Pro", sans-serif;
}

.font-khmer {
  font-family: "Koulen", serif;
}

body {
  scroll-padding-top: 100px;
}
</style>
