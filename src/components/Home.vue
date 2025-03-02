<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["openContent"]);
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Background Video -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/src/assets/video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay (optional, for better readability) -->
    <div
      class="absolute top-0 left-0 w-full h-full bg-black/70 bg-opacity-50"
    ></div>

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6 mt-[-10px]"
    >
      <h1 class="text-4xl md:text-7xl font-bold mt-10">
        <img src="/src/assets/generatedtext.png" alt="" />
      </h1>
      <p class="text-3xl md:text-4xl mt-20 font-khmer text-yellow-300">
        សូមគោរពអញ្ជើញ
      </p>
      <h3
        class="text-6xl md:text-6xl mt-20 font-khmer font-bold text-yellow-300"
      >
        MR. SENG PRICHA AND HUNNI
      </h3>
      <button
        @click="emit('openContent')"
        class="mt-48 px-20 py-6 text-4xl md:text-6xl bg-[#390058] border border-yellow-400 rounded-full text-yellow-400 font-khmer-kh animate-pulse scale-animation"
      >
        បើកធៀប
      </button>
      <div class="font-khmer pt-10 text-yellow-400 text-xl md:text-2xl">
        ចុចអេក្រង់ដើម្បីបើកធៀបអេឡិចត្រូនិច
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Koulen&family=Lavishly+Yours&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;700&display=swap");

.font-khmer-kh {
  font-family: "Kantumruy Pro", sans-serif;
}

.font-khmer {
  font-family: "Koulen", serif;
}

@keyframes scaleUpDown {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.scale-animation {
  animation: scaleUpDown 2s infinite ease-in-out;
}
</style>
