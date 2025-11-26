<script setup>
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

// Estado para abrir/cerrar menú móvil
const mobileMenuOpen = ref(false);
const route = useRoute();

// Items del menú (Fáciles de editar aquí)
const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Ideas", path: "/propuestas" },
  { label: "Equipo", path: "/equipo" },
  { label: "Desafíos 🔥", path: "/desafios" },
];

// Cierra el menú automáticamente cuando el usuario cambia de página
watch(route, () => {
  mobileMenuOpen.value = false;
});
</script>

<template>
  <header class="navbar-fixed">
    <div class="nav-container">

      <div class="glass-bar">

        <RouterLink to="/" class="logo-container">
          <div class="logo-circle">
            <img src="/imagenes/logo.jpg" alt="Logo Futuro en Marcha" class="logo-img" />
          </div>
          <div class="logo-text-box">
            <span class="brand-title">Futuro</span>
            <span class="brand-subtitle">en Marcha</span>
          </div>
        </RouterLink>

        <nav class="desktop-nav">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            active-class="nav-active"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <button
          class="menu-toggle"
          @click="mobileMenuOpen = true"
          aria-label="Abrir menú"
        >
          <i class="ph-bold ph-list"></i>
        </button>

      </div>
    </div>
  </header>

  <Transition name="fade">
    <div v-if="mobileMenuOpen" class="mobile-overlay">

      <button class="close-btn" @click="mobileMenuOpen = false">
        <i class="ph-bold ph-x"></i>
      </button>

      <nav class="mobile-links-container">
        <span class="mobile-label">Navegación</span>

        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="mobile-link"
          active-class="mobile-link-active"
        >
          {{ item.label }}
        </RouterLink>

        <div class="mobile-footer">
          <p>Lista Oficial 2025 🚀</p>
        </div>
      </nav>
    </div>
  </Transition>
</template>
<style scoped>
/* --- 1. ESTRUCTURA FIJA (CORREGIDA) --- */
.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0; /* CAMBIO CLAVE: Anclar a ambos lados */
  z-index: 1000;
  padding: 1rem;

  /* Esto centra el contenedor hijo perfectamente */
  display: flex;
  justify-content: center;

  pointer-events: none; /* Permite clicks a los lados de la barra */
}

.nav-container {
  width: 100%; /* Ocupa todo el espacio disponible... */
  max-width: 1200px; /* ...hasta llegar a 1200px */
  pointer-events: auto; /* Reactiva los clicks en la barra */
}

/* --- 2. BARRA DE CRISTAL --- */
.glass-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Efecto Vidrio */
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.8);

  padding: 0.5rem 0.75rem;
  border-radius: 99px;
  box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.1);
}

/* --- 3. LOGO Y TEXTO --- */
.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  user-select: none;
}

.logo-circle {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--c-white);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background-color: var(--c-slate-200);
  flex-shrink: 0;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-text-box {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-title {
  font-weight: 800;
  font-size: 0.95rem;
  color: var(--c-slate-900);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.brand-subtitle {
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--c-cyan-600);
  text-transform: uppercase;
}

/* --- 4. MENÚ ESCRITORIO --- */
.desktop-nav {
  display: none;
  gap: 0.5rem;
}

.nav-link {
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--c-slate-600);
  transition: all 0.2s ease;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--c-cyan-600);
  background-color: var(--c-cyan-100);
}

.nav-active {
  background-color: var(--c-slate-900);
  color: var(--c-white) !important;
}

/* --- 5. MENÚ MÓVIL --- */
.menu-toggle {
  background: var(--c-slate-100);
  border: none;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--c-slate-900);
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.98);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--c-slate-100);
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-slate-900);
}

.mobile-links-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.mobile-label {
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: var(--c-slate-400);
  margin-bottom: 0.5rem;
}

.mobile-link {
  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
  color: var(--c-slate-900);
  letter-spacing: -0.03em;
  transition: color 0.2s;
}

.mobile-link-active {
  color: var(--c-cyan-500);
}

.mobile-footer {
  margin-top: 3rem;
  color: var(--c-slate-400);
  font-weight: 600;
}

/* --- MEDIA QUERIES --- */
@media (min-width: 768px) {
  .menu-toggle { display: none; }
  .desktop-nav { display: flex; }
}

/* --- ANIMACIONES --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
