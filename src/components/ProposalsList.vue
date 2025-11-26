<script setup>
const propuestas = [
  {
    titulo: "Transparencia siempre",
    descripcion: "Todas nuestras decisiones y gastos serán públicos y claros para todos.",
    icono: "ph-files",
    destacada: true
  },
  {
    titulo: "Juegos de mesa",
    descripcion: "Juegos de mesa para retirar y devolver en el recreo.",
    icono: "ph-dice-five",
    destacada: false
  },
  {
    titulo: "Torneos deportivos",
    descripcion: "Competencias internas de fútbol, básquet y vóley.",
    icono: "ph-trophy",
    destacada: false
  },
  {
    titulo: "Campañas de reciclaje",
    descripcion: "Campaña de reciclaje y donaciones internas o con organizaciones.",
    icono: "ph-recycle",
    destacada: false
  },{
    titulo: "Charlas de concientización",
    descripcion: "Charlas de concientización sobre temas relevantes para la comunidad.",
    icono: "ph-chalkboard",
    destacada: false
  },
];
</script>

<template>
  <section
    id="propuestas"
    class="section-propuestas"
    role="region"
    aria-labelledby="titulo-propuestas"
  >
    <div class="container">

      <h2 class="section-title" id="titulo-propuestas">
        Nuestras
        <span class="highlight-wrapper">
          Propuestas
          <svg class="highlight-svg" viewBox="0 0 100 10" aria-hidden="true">
            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="8" fill="none"/>
          </svg>
        </span>
      </h2>
<p class="text-slate-600 text-lg">
          Ideas concretas para problemas reales. No venimos a prometer, venimos a trabajar.
        </p>
      <div class="propuestas-grid">

        <template v-for="(prop, i) in propuestas" :key="i">

          <!-- CARD DESTACADA -->
          <div v-if="prop.destacada" class="card card-featured" tabindex="0" aria-label="Propuesta destacada">
            <div class="card-deco-circle"></div>

            <div class="card-content-featured">
              <div class="icon-box-featured" aria-hidden="true">
                <i :class="`ph ${prop.icono}`"></i>
              </div>

              <div>
                <h3 class="title-featured">{{ prop.titulo }}</h3>
                <p class="desc-text">
                  {{ prop.descripcion }}
                </p>
              </div>
            </div>
          </div>

          <!-- CARD NORMAL -->
          <div v-else class="card card-regular" tabindex="0" :aria-label="prop.titulo">
            <div class="icon-box-regular" aria-hidden="true">
              <i :class="`ph ${prop.icono}`"></i>
            </div>

            <h3 class="title-regular">{{ prop.titulo }}</h3>
            <p class="desc-text sm-text">{{ prop.descripcion }}</p>
          </div>

        </template>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* (Todo tu CSS queda igual) */
</style>
