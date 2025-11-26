<script setup>
import { ref, onMounted, onUnmounted, computed, Teleport } from 'vue';
// ← agregar Teleport

const showModal = ref(false);

// Configuración del estado "Próximamente"
const proximoLanzamiento = {
  titulo: "???",
  estado: "Próximamente",
  mensaje: "Nuestros delegados están cocinando algo grande. Preparate para romperla.",
  fechaRevelacion: new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000)),
};

// Lógica del Temporizador
const now = ref(new Date().getTime());
let timerInterval = null;

const timeRemaining = computed(() => {
  const distance = proximoLanzamiento.fechaRevelacion.getTime() - now.value;

  if (distance < 0) return "YA DISPONIBLE";

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
});

onMounted(() => {
  timerInterval = setInterval(() => {
    now.value = new Date().getTime();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>

<template>
  <section class="challenge-section">

    <div class="bg-wrapper">
       <div class="bg-pattern"></div>
    </div>

    <div class="content-container">
      <div class="secret-badge">
        🔒 Top Secret
      </div>

      <h1 class="main-title">
        Desafío <br>
        <span class="text-gradient">Random.</span>
      </h1>

      <p class="subtitle">
        Una nueva forma de competir entre cursos está llegando.
      </p>

      <button @click="showModal = true" class="btn-status group">
        <i class="ph-bold ph-lock-key group-icon"></i>
        Ver Estado
      </button>
    </div>

    <Teleport to="body">
      <div v-if="showModal" class="modal-backdrop">

        <div class="modal-overlay-bg" @click="showModal = false"></div>

        <div class="modal-card animate-bounce-in">

          <div class="modal-header">
            <div class="header-pattern"></div>

            <button @click="showModal = false" class="btn-close">
              <i class="ph-bold ph-x"></i>
            </button>

            <div class="icon-circle">
              <i class="ph-fill ph-question"></i>
            </div>

            <h2 class="modal-title">Próximamente</h2>
          </div>

          <div class="modal-body">

            <p class="modal-message">
              {{ proximoLanzamiento.mensaje }}
            </p>

            <div class="timer-label-box">
              <span class="timer-label">Tiempo para el anuncio</span>
            </div>

            <div class="timer-box">
              <div v-if="timeRemaining !== 'YA DISPONIBLE'" class="timer-digits">

                <div class="digit-group">
                  <span class="digit-value">{{ timeRemaining.days }}</span>
                  <span class="digit-label">Días</span>
                </div>

                <span class="separator">:</span>

                <div class="digit-group">
                  <span class="digit-value">{{ String(timeRemaining.hours).padStart(2, '0') }}</span>
                  <span class="digit-label">Hs</span>
                </div>

                <span class="separator">:</span>

                <div class="digit-group">
                  <span class="digit-value">{{ String(timeRemaining.minutes).padStart(2, '0') }}</span>
                  <span class="digit-label">Min</span>
                </div>

                <span class="separator">:</span>

                <div class="digit-group">
                  <span class="digit-value">{{ String(timeRemaining.seconds).padStart(2, '0') }}</span>
                  <span class="digit-label">Seg</span>
                </div>

              </div>

              <div v-else class="timer-finished">
                ¡Actualizá la página!
              </div>
            </div>

            <button @click="showModal = false" class="btn-modal-close">
              Cerrar ventana
            </button>

          </div>
        </div>
      </div>
    </Teleport>

  </section>
</template>

<style scoped>
/* --- VARIABLES --- */
:root {
  --c-slate-900: #0f172a;
  --c-slate-800: #1e293b;
  --c-slate-600: #475569;
  --c-slate-500: #64748b;
  --c-slate-400: #94a3b8;
  --c-slate-300: #cbd5e1;
  --c-slate-200: #e2e8f0;
  --c-slate-100: #f1f5f9;
  --c-slate-50:  #f8fafc;

  --c-cyan-400: #22d3ee;
  --c-white: #ffffff;
}

/* --- SECCIÓN PRINCIPAL --- */
.challenge-section {
  padding: 4rem 1rem; /* py-16 px-4 */
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* --- FONDO PATTERN --- */
.bg-wrapper {
  position: absolute;
  inset: 0;
  background-color: var(--c-slate-50);
  z-index: 0;
}

.bg-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
  background-size: 16px 16px;
}

/* --- CONTENIDO HERO --- */
.content-container {
  text-align: center;
  max-width: 48rem; /* max-w-3xl */
  z-index: 10;
  position: relative;
}

.secret-badge {
  display: inline-block;
  padding: 0.25rem 1rem;
  margin-bottom: 1.5rem;
  border-radius: 9999px;
  background-color: var(--c-slate-200);
  color: var(--c-slate-600);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em; /* tracking-widest */
  font-size: 0.875rem; /* text-sm */
}

.main-title {
  font-size: 3rem; /* text-5xl */
  font-weight: 900; /* font-black */
  color: var(--c-slate-900);
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
}

.text-gradient {
  background: linear-gradient(to right, var(--c-slate-400), var(--c-slate-600));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  font-size: 1.25rem; /* text-xl */
  color: var(--c-slate-500);
  margin-bottom: 2.5rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
}

/* Botón Principal */
.btn-status {
  padding: 1.25rem 2.5rem;
  background-color: var(--c-slate-900);
  color: var(--c-white);
  font-size: 1.25rem; /* text-xl */
  font-weight: 700;
  border-radius: 1rem; /* rounded-2xl */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 auto;
  border: none;
  cursor: pointer;
}

.btn-status:hover {
  transform: scale(1.05);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Efecto hover en el icono dentro del botón */
.group:hover .group-icon {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* --- MODAL --- */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-overlay-bg {
  position: absolute;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.8); /* slate-900/80 */
  backdrop-filter: blur(12px);
  cursor: pointer;
}

.modal-card {
  background-color: var(--c-white);
  border-radius: 2.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 28rem; /* max-w-md */
  position: relative;
  overflow: hidden;
  border: 1px solid var(--c-slate-200);
}

/* Header Modal */
.modal-header {
  background-color: var(--c-slate-100);
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.header-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background-image: url('https://www.transparenttextures.com/patterns/diagmonds-light.png');
}

.btn-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--c-slate-400);
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 20;
}

.btn-close:hover {
  color: var(--c-slate-600);
}

.icon-circle {
  width: 5rem; /* w-20 */
  height: 5rem; /* h-20 */
  background-color: var(--c-white);
  border-radius: 50%;
  margin: 0 auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.25rem; /* text-4xl */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: var(--c-slate-300);
}

.modal-title {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 900; /* font-black */
  color: var(--c-slate-800);
  text-transform: uppercase;
  letter-spacing: -0.025em;
  margin: 0;
}

/* Body Modal */
.modal-body {
  padding: 2rem;
  text-align: center;
}

.modal-message {
  color: var(--c-slate-500);
  font-weight: 500;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.timer-label-box {
  margin-bottom: 1.5rem;
}

.timer-label {
  font-size: 0.75rem; /* text-xs */
  font-weight: 700;
  color: var(--c-slate-400);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Temporizador Box */
.timer-box {
  background-color: var(--c-slate-900);
  color: var(--c-white);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}

.timer-digits {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.digit-group {
  text-align: center;
}

.digit-value {
  display: block;
  font-size: 1.875rem; /* text-3xl */
  font-weight: 900;
  color: var(--c-cyan-400);
}

.digit-label {
  font-size: 0.625rem; /* 10px */
  color: var(--c-slate-400);
  text-transform: uppercase;
  display: block;
}

.separator {
  font-size: 1.875rem;
  font-weight: 900;
  color: var(--c-slate-600);
}

.timer-finished {
  color: var(--c-cyan-400);
  font-weight: 700;
  font-size: 1.125rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.btn-modal-close {
  width: 100%;
  margin-top: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background: none;
  border: none;
  color: var(--c-slate-400);
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: color 0.2s;
}

.btn-modal-close:hover {
  color: var(--c-slate-600);
}

/* --- ANIMACIONES --- */
@keyframes bounce-in {
  0% { transform: scale(0.9); opacity: 0; }
  50% { transform: scale(1.02); opacity: 1; }
  100% { transform: scale(1); }
}
.animate-bounce-in {
  animation: bounce-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}

/* --- MEDIA QUERIES --- */
@media (min-width: 768px) {
  .main-title {
    font-size: 4.5rem; /* md:text-7xl */
  }
}
</style>
