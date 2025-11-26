<script setup>
import NavBar from "./components/AppNavbar.vue";
import FooterSection from "./components/AppFooter.vue";
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="relative min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 overflow-x-hidden">
    <div class="fixed blob-bg bg-cyan-300 w-96 h-96 top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-blob -z-10 opacity-70"></div>
    <div class="fixed blob-bg bg-blue-300 w-96 h-96 bottom-0 right-0 translate-x-1/3 translate-y-1/3 animate-blob animation-delay-2000 -z-10 opacity-70"></div>

    <NavBar />

    <main class="flex-grow pt-24">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <FooterSection />
  </div>
</template>

<style>
/* Animación suave entre páginas */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
