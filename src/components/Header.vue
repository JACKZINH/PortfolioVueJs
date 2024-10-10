<template>
  <!-- En-tête avec logo et navigation -->
  <header>
    <a href="#top">
      <div>
        <h1>CS</h1>
      </div>
    </a>
    <nav>
      <a href="#introduction">PRESENTATION</a>
      <a href="#creations">CREATIONS</a>
      <a href="#contact">CONTACT</a>
    </nav>
  </header>
</template>
<script setup></script>
<style>
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
header a {
  text-decoration: none; /* Supprime le soulignement */
  color: inherit; /* Garde la couleur actuelle du texte */
}

header a:hover {
  cursor: pointer; /* Changer le curseur pour indiquer un lien */
}
header h1 {
  font-size: 24px;
  font-weight: bold;
}

nav a {
  margin-left: 20px;
  font-size: 16px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
