<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const mobileMenuOpen = ref(false);

const navItems = [
  { id: 1, label: "Inicio", path: "/" },
  { id: 2, label: "Ideas", path: "/propuestas" },
  { id: 3, label: "Equipo", path: "/equipo" },
  { id: 4, label: "Desafíos 🔥", path: "/desafios" },
];
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="glass-card">
          <div class="logo-icon">
            <img src="/imagenes/logo.jpg" alt="logo de futuro en marcha" />
          </div>
          <span class="highlight"></span>

        <div class="desktop-menu">
          <RouterLink
            v-for="item in navItems"
            :key="item.id"
            :to="item.path"
            class="nav-link"
            active-class="nav-link-active"
          >
            {{ item.label }}
          </RouterLink>

        </div>

        <button @click="mobileMenuOpen = !mobileMenuOpen" class="mobile-toggle">
          <i :class="mobileMenuOpen ? 'ph ph-x' : 'ph ph-list'"></i>
        </button>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="mobile-menu">
      <RouterLink
        v-for="item in navItems"
        :key="item.id"
        :to="item.path"
        @click="mobileMenuOpen = false"
        class="mobile-link"
        active-class="mobile-link-active"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
/* --- VARIABLES (Colores aproximados de Tailwind) --- */
:root {
  --color-slate-900: #0f172a;
  --color-slate-800: #1e293b;
  --color-slate-700: #334155;
  --color-slate-600: #475569;
  --color-cyan-500: #06b6d4;
  --color-cyan-600: #0891b2;
  --color-cyan-100: #cffafe;
  --color-cyan-50: #ecfeff;
  --color-white: #ffffff;
}

/* --- NAVBAR GENERAL --- */
.navbar {
  position: fixed;
  width: 100%;
  z-index: 50;
  padding: 1rem;
  top: 0;
  left: 0;
}

.nav-container {
  width: 100%;
  max-width: 1280px; /* container mx-auto approx */
  margin: 0 auto;
}

/* --- TARJETA DE CRISTAL (BARRA) --- */
.glass-card {
  border-radius: 9999px; /* rounded-full */
  padding: 0.75rem 1.5rem; /* py-3 px-6 */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Efectos visuales */
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* --- LOGO --- */
.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  cursor: pointer;
}

/* Contenedor de la imagen del logo */
.logo-icon {
  width: 2.5rem; /* w-10 */
  height: 2.5rem; /* h-10 */
  border-radius: 50%;
  background: linear-gradient(to top right, #22d3ee, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.logo-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Efecto hover en el grupo del logo */
.logo-link:hover .logo-icon {
  transform: rotate(12deg);
}

.logo-text {
  font-weight: 700;
  font-size: 1.25rem; /* text-xl */
  letter-spacing: -0.025em; /* tracking-tight */
  color: var(--color-slate-800);
}

.highlight {
  color: var(--color-cyan-500);
}

/* --- MENU DE ESCRITORIO --- */
.desktop-menu {
  display: none; /* Oculto en móvil por defecto */
  align-items: center;
  gap: 0.5rem;
}

/* Links de navegación */
.nav-link {
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  color: var(--color-slate-600);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: var(--color-cyan-50);
  color: var(--color-cyan-600);
}

.nav-link-active {
  background-color: var(--color-cyan-100);
  color: #0e7490; /* Cyan 700 */
}

/* Botón Sumate */
.cta-button {
  margin-left: 0.5rem;
  padding: 0.625rem 1.5rem;
  border-radius: 9999px;
  background-color: var(--color-slate-900);
  color: var(--color-white);
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
}

/* --- MENU MÓVIL (Toggle y Dropdown) --- */
.mobile-toggle {
  display: block;
  font-size: 1.5rem;
  color: var(--color-slate-800);
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu {
  margin-top: 0.5rem;
  background-color: var(--color-white);
  border-radius: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  margin-left: 1rem;
  margin-right: 1rem;

  /* Animación */
  animation: fadeInDown 0.3s ease-out forwards;
}

.mobile-link {
  padding: 0.75rem;
  border-radius: 0.75rem;
  color: var(--color-slate-700);
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s;
}

.mobile-link:hover,
.mobile-link-active {
  background-color: var(--color-cyan-50);
  color: var(--color-cyan-600); /* Ajuste visual para el activo */
}

/* --- MEDIA QUERIES --- */
@media (min-width: 768px) {
  .desktop-menu {
    display: flex;
  }

  .mobile-toggle {
    display: none;
  }

  .mobile-menu {
    display: none; /* Asegura que no se vea si se agranda la pantalla con el menú abierto */
  }
}

/* --- ANIMACIONES --- */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
