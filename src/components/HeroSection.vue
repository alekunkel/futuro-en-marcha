<script setup>
defineOptions({ name: 'HeroSection' });
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="hero-section">
    <div class="container">

      <div class="hero-layout">

        <div class="text-column">

          <div class="hero-badge">
            <span class="badge-text">
              📢 Lista Oficial 2025
            </span>
          </div>

          <h1 class="hero-title">
            Hagamos <br>
            <span class="text-gradient">Historia.</span>
          </h1>

          <p class="hero-subtitle">
            Venimos a cambiar el recreo, el aula y la escuela.
          </p>

          <div class="hero-actions">
            <RouterLink to="/propuestas" class="btn-primary">
              Ver Ideas <i class="ph-bold ph-lightbulb"></i>
            </RouterLink>
          </div>

        </div>

            <div class="deco-backdrop"></div>

            <div class="floating-sticker">
              TU OPINIÓN <br> IMPORTA
            </div>

          </div>
        </div>

  </header>
</template>

<style scoped>
/* --- VARIABLES --- */
:root {
  --c-slate-900: #0f172a;
  --c-slate-600: #475569;
  --c-slate-100: #f1f5f9;
  --c-cyan-500: #06b6d4;
  --c-cyan-200: #a5f3fc;
  --c-cyan-100: #cffafe;
  --c-blue-500: #3b82f6;
  --c-yellow-400: #facc15;
  --c-white: #ffffff;
}

/* --- ESTRUCTURA --- */
.hero-section {
  padding-top: 8rem; /* pt-32 */
  padding-bottom: 5rem; /* pb-20 */
  padding-left: 1rem;
  padding-right: 1rem;
  overflow: hidden; /* Para evitar scroll horizontal por rotaciones */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem; /* gap-12 */
}

/* --- TEXT COLUMN --- */
.text-column {
  width: 100%;
  text-align: center;
  z-index: 10;
}

/* Badge Animado */
.hero-badge {
  display: inline-block;
  padding: 0.375rem 1rem;
  background-color: var(--c-white);
  border: 1px solid var(--c-cyan-100);
  border-radius: 9999px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;

  /* Animación Bounce */
  animation: bounce 1s infinite;
}

.badge-text {
  font-size: 0.875rem; /* text-sm */
  font-weight: 700;
  background: linear-gradient(to right, var(--c-cyan-500), var(--c-blue-500));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Título Principal */
.hero-title {
  font-size: 3rem; /* text-5xl */
  font-weight: 800; /* font-extrabold */
  color: var(--c-slate-900);
  line-height: 0.95;
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em; /* tracking-tight */
}

.text-gradient {
  background: linear-gradient(to right, var(--c-cyan-500), var(--c-blue-500)); /* Clase genérica para texto gradiente si se define en global, aquí simulada */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* Nota: Si en tu CSS global .text-gradient ya existe, puedes quitar estas 3 líneas */
}

/* Subtítulo */
.hero-subtitle {
  font-size: 1.25rem; /* text-xl */
  color: var(--c-slate-600);
  font-weight: 500;
  margin-bottom: 2rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
}

/* Botones / Acciones */
.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 1rem; /* rounded-2xl */
  background-color: var(--c-cyan-500);
  color: var(--c-white);
  font-weight: 700;
  font-size: 1.125rem; /* text-lg */
  text-decoration: none;

  box-shadow: 0 20px 25px -5px rgba(165, 243, 252, 0.5), 0 8px 10px -6px rgba(165, 243, 252, 0.5); /* shadow-cyan-200 approx */
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-0.25rem); /* hover:-translate-y-1 */
}

/* --- IMAGE COLUMN --- */
.image-column {
  width: 100%;
  position: relative;
  z-index: 0;
}

.image-composition {
  position: relative;
  width: 100%;
  max-width: 28rem; /* max-w-md */
  aspect-ratio: 1 / 1;
  margin: 0 auto;
}

/* Capa Gradient Fondo */
.deco-backdrop {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top right, var(--c-cyan-500), var(--c-blue-500));
  border-radius: 2rem;
  opacity: 0.2;
  transform: rotate(6deg);
}

/* Marco Blanco */
.photo-frame {
  position: absolute;
  inset: 0;
  background-color: var(--c-white);
  border-radius: 2rem;
  border: 2px solid var(--c-slate-100);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
  overflow: hidden;
  transform: rotate(-3deg);
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s duration ease;
}

.photo-frame:hover .hero-img {
  transform: scale(1.1);
}

/* Sticker Flotante */
.floating-sticker {
  position: absolute;
  bottom: -1.5rem; /* -bottom-6 */
  left: -1.5rem; /* -left-6 */
  background-color: var(--c-yellow-400);
  color: var(--c-slate-900);
  font-weight: 900; /* font-black */
  padding: 1rem 1.5rem;
  border-radius: 1rem; /* rounded-2xl */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: rotate(-12deg);

  /* Animación Float */
  animation: float 3s ease-in-out infinite;
}

/* --- MEDIA QUERIES --- */
@media (min-width: 768px) {
  .hero-layout {
    flex-direction: row;
  }

  .text-column {
    width: 50%;
    text-align: left;
  }

  .hero-subtitle {
    margin-left: 0;
  }

  .hero-actions {
    flex-direction: row;
    justify-content: flex-start;
  }

  .hero-title {
    font-size: 4.5rem; /* md:text-7xl */
  }

  .image-column {
    width: 50%;
  }
}

/* --- ANIMACIONES --- */
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes float {
  0%, 100% { transform: rotate(-12deg) translateY(0); }
  50% { transform: rotate(-12deg) translateY(-10px); }
}
</style>
