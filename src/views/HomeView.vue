<script setup>
import Hero from "../components/HeroSection.vue"; // Asegúrate de que Hero use RouterLink si tiene botones internos
import Marquee from "../components/TextMarquee.vue";
</script>

<template>
  <div>
    <Hero />
    <Marquee />

    <section class="py-12 text-center">
      <p class="text-slate-500 mb-4">¿Estás listo para competir?</p>
      <RouterLink to="/desafios" class="text-cyan-600 font-bold underline decoration-wavy hover:text-cyan-700">
        Ver el próximo desafío &rarr;
      </RouterLink>
    </section>
  </div>
</template>
