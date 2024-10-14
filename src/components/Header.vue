<template>
  <!-- En-tête avec logo et navigation -->
  <header>
    <!-- Lien vers le haut de la page -->
    <a href="#top">
      <div>
        <!-- Logo  -->
        <h1>CS</h1>
      </div>
    </a>
    <!-- Menu de navigation -->
    <nav>
      <a href="#introduction">PRESENTATION</a>
      <a href="#creations">CREATIONS</a>
      <a href="#contact">CONTACT</a>
    </nav>
  </header>
</template>
<script setup></script>
<style>
/* Style de l'en-tête */
header {
  top: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
  width: 100%;
  height: 80px;
}
/* Style des liens dans l'en-tête */
header a {
  text-decoration: none;
  color: inherit;
}
/* Changement de curseur au survol des liens */
header a:hover {
  cursor: pointer;
}
/* Style du titre (logo) */
header h1 {
  font-size: 24px;
  font-weight: bold;
}
/* Style des liens dans la navigation */
nav a {
  margin-left: 20px;
  font-size: 16px;
}
/* Ajouter un soulignement au survol des liens de navigation */
nav a:hover {
  text-decoration: underline;
}
</style>
