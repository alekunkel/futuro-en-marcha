<script setup>
const integrantes = [
  {
    nombre: "León Primo",
    cargo: "Presidente",
    curso: "4to Año",
  },
  {
    nombre: "Joaquín Arri",
    cargo: "Vicepresidente",
    curso: "4to Año",
  },
  {
    nombre: "Florencia Cezar",
    cargo: "Secretaria de actas",
    curso: "4to Año",
  },
  {
    nombre: "Benjamín Romero",
    cargo: "Tesorero",
    curso: "4to Año",
  },
];
</script>

<template>
  <section id="equipo" class="team-section">
    <div class="container">

      <h2 class="section-title">El Equipo</h2>

      <div class="team-grid">
        <div v-for="(miembro, index) in integrantes" :key="index" class="member-card">

          <div class="tape-deco"></div>

          <h3 class="member-name">{{ miembro.nombre }}</h3>

          <p class="member-role">
            {{ miembro.cargo }}
          </p>

          <p class="member-course">{{ miembro.curso }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* --- VARIABLES LOCALES --- */
:root {
  --c-slate-900: #0f172a;
  --c-slate-400: #94a3b8;
  --c-cyan-600: #0891b2;
  --c-cyan-200-50: rgba(165, 243, 252, 0.5); /* Cyan 200 con 50% opacidad */
  --c-white: #ffffff;
}

/* --- ESTRUCTURA GENERAL --- */
.team-section {
  padding: 5rem 1rem; /* py-20 px-4 */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.25rem; /* text-4xl */
  font-weight: 800; /* font-extrabold */
  margin-bottom: 3rem; /* mb-12 */
  color: var(--c-slate-900);
}

/* --- GRID / FLEX --- */
.team-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; /* gap-8 */
}

/* --- CARD MIEMBRO --- */
.member-card {
  position: relative;
  width: 16rem; /* w-64 */
  background-color: var(--c-white);
  padding: 1rem 1rem 2rem 1rem; /* p-4 pb-8 */
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */
  transition: all 0.3s ease;
  cursor: pointer;
  /* Transform origin por defecto */
}

.member-card:hover {
  transform: rotate(2deg) scale(1.05); /* hover:rotate-2 hover:scale-105 */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* --- DECORACIÓN (CINTA) --- */
.tape-deco {
  position: absolute;
  top: -0.75rem; /* -top-3 */
  left: 50%;
  width: 6rem; /* w-24 */
  height: 1.5rem; /* h-6 */
  background-color: var(--c-cyan-200-50);
  backdrop-filter: blur(4px); /* backdrop-blur-sm */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  /* Ajustes de posición y rotación */
  transform: translateX(-50%) rotate(1deg);
  border-radius: 2px; /* Un toque sutil para que parezca cinta */
}

/* --- TIPOGRAFÍA --- */
.member-name {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700; /* font-bold */
  color: var(--c-slate-900);
  margin-bottom: 0.25rem;
  margin-top: 0.5rem;
}

.member-role {
  color: var(--c-cyan-600);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.75rem; /* text-xs */
  letter-spacing: 0.05em; /* tracking-wider */
  margin-bottom: 0.25rem; /* mb-1 */
}

.member-course {
  color: var(--c-slate-400);
  font-size: 0.875rem; /* text-sm */
}
</style>
