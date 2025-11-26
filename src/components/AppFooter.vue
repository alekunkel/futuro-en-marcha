<script setup>
// Obtenemos el año actual automáticamente
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer-section">
    <div class="container">

      <div class="emoji-badge">
        👋
      </div>

      <h2 class="footer-title">¿Tenés una idea mejor?</h2>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeI6lUzXErjMLTBRrLQpvBkttECJPXpSL5IAJ2iKw2mnm7eVw/viewform?usp=header"
         target="_blank"
         class="btn-cta">
        <i class="ph-bold ph-note-pencil"></i> Dejanos tu propuesta
      </a>

      <p class="copyright-text">
        Diseñado por Futuro en Marcha - {{ currentYear }}
      </p>

    </div>
  </footer>
</template>

<style scoped>
/* --- VARIABLES --- */
:root {
  --c-slate-900: #0f172a;
  --c-slate-500: #64748b;
  --c-white: #ffffff;
  --c-cyan-300: #67e8f9;
}

/* --- ESTRUCTURA GENERAL --- */
.footer-section {
  margin-top: 5rem; /* mt-20 */
  padding-top: 2.5rem; /* py-10 */
  padding-bottom: 2.5rem;
  background-color: var(--c-slate-900);
  color: var(--c-white);
  border-top-left-radius: 3rem; /* rounded-t-[3rem] */
  border-top-right-radius: 3rem;
}

.container {
  max-width: 1200px; /* container mx-auto */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* --- ELEMENTOS --- */
.emoji-badge {
  width: 4rem; /* w-16 */
  height: 4rem; /* h-16 */
  background-color: rgba(255, 255, 255, 0.1); /* bg-white/10 */
  border-radius: 9999px; /* rounded-full */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto; /* mx-auto mb-6 */
  font-size: 1.875rem; /* text-3xl */
}

.footer-title {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700; /* font-bold */
  margin-bottom: 2rem; /* mb-8 */
}

/* --- BOTÓN CTA --- */
.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
  padding: 0.75rem 2rem; /* px-8 py-3 */
  background-color: var(--c-white);
  color: var(--c-slate-900);
  font-weight: 700;
  border-radius: 9999px; /* rounded-full */
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-cta:hover {
  background-color: var(--c-cyan-300);
}

/* --- COPYRIGHT --- */
.copyright-text {
  margin-top: 2.5rem; /* mt-10 */
  color: var(--c-slate-500);
  font-size: 0.875rem; /* text-sm */
}
</style>
