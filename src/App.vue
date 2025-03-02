<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Home from "./components/Home.vue"; // Import Home component

const showHome = ref(true);
const router = useRouter();

const goToContent = () => {
  showHome.value = false; // Hide Home page
  router.push("/content"); // Navigate to Content page
};
</script>

<template>
  <div>
    <!-- Show Home component if showHome is true -->
    <Home v-if="showHome" @openContent="goToContent" />

    <!-- Show router-view when Home is hidden -->
    <router-view v-if="!showHome"></router-view>
  </div>
</template>
