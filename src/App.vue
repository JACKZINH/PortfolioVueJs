<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio de Clément Sylvain</title>
    <!-- Description pour le référencement (SEO) -->
    <meta
      name="description"
      content="Portfolio de Clément Sylvain, développeur web." />
    <!-- Mots-clés pour le référencement (SEO) -->
    <meta
      name="keywords"
      content="Clément Sylvain, portfolio, développeur web" />
  </head>
  <!-- Conteneur principal de l'application -->
  <div id="app">
    <!-- Routeur pour injecter les composants selon la route -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style></style>
