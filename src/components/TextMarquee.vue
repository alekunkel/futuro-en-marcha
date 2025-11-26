<script setup>
const frases = [
  { texto: "Futuro en Marcha", emoji: "⚡" },
  { texto: "Innovación", emoji: "🚀" },
  { texto: "Compromiso", emoji: "💪" },
  { texto: "Acción", emoji: "🔥" },
];
</script>

<template>
  <div class="marquee-wrapper">
    <div class="marquee-track">

      <div v-for="n in 2" :key="n" class="marquee-group" :aria-hidden="n === 2">

        <template v-for="(item, index) in frases" :key="index">
          <span class="marquee-item">
            {{ item.emoji }} {{ item.texto }}
          </span>
          <span class="separator">•</span>
        </template>

      </div>

    </div>
  </div>
</template>

<style scoped>
/* --- ESTRUCTURA PRINCIPAL --- */
.marquee-wrapper {
  background-color: var(--c-slate-900);
  padding: 1rem 0;
  width: 100%;
  overflow: hidden;

  /* Estilo visual inclinado */
  transform: rotate(-1deg) scale(1.02); /* Scale corrige bordes blancos al rotar */
  box-shadow: var(--shadow-xl);

  /* Evita selección de texto accidental al arrastrar */
  user-select: none;
}

.marquee-track {
  display: flex;
  overflow: hidden;
  width: fit-content;
  gap: 2rem; /* Espacio crítico entre el Grupo 1 y el Grupo 2 */

  /* ANIMACIÓN */
  animation: scroll 20s linear infinite;
  /* Optimización de rendimiento */
  will-change: transform;
}

.marquee-group {
  display: flex;
  align-items: center;
  gap: 2rem; /* Debe ser igual al gap del track para que sea uniforme */
  flex-shrink: 0;
  white-space: nowrap;
}

/* --- ESTILOS DE TEXTO --- */
.marquee-item {
  color: var(--c-white);
  font-weight: 700;
  font-size: 1.125rem; /* Base para móvil */
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.separator {
  color: var(--c-slate-400);
  font-weight: 700;
  font-size: 1.2rem;
}

/* --- KEYFRAMES --- */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Mueve el track exactamente el 50% de su ancho (que equivale a 1 grupo entero) */
    /* calc asegura que el gap del medio se incluya correctamente en el cálculo */
    transform: translateX(calc(-50% - 1rem));
    /* Nota: El -1rem es la mitad del gap total (2rem) para ajustar la precisión si es necesario,
       aunque usualmente -50% funciona bien si el flex container está bien configurado.
       Si notás un salto, probá solo con -50% */
    transform: translateX(-50%);
  }
}

/* --- INTERACCIÓN --- */
.marquee-track:hover {
  animation-play-state: paused;
}

/* --- MEDIA QUERIES --- */
@media (min-width: 768px) {
  .marquee-item {
    font-size: 1.5rem; /* Tamaño original en escritorio */
  }

  .separator {
    font-size: 1.5rem;
  }
}
</style>
