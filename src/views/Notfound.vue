<template>
  <head>
    <title>Page Introuvable</title>
    <!-- Métadonnée SEO pour informer que la page n'existe pas -->
    <meta
      name="description"
      content="La page que vous recherchez est introuvable." />
  </head>
  <!-- Composant Header affiché sur la page 404 également -->
  <Header></Header>
  <!-- Titre principal indiquant l'erreur 404 -->
  <h1>404</h1>
  <!-- Image associée à l'erreur 404 -->
  <img src="/src/assets/img/notfound.jpg" alt="404" />
  <!-- Composant Footer affiché en bas de la page -->
  <Footer></Footer>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Notfound",
  components: {
    Header,
    Footer,
  },
};
</script>
<!-- Styles spécifiques à cette page d'erreur 404, le style est scoped -->
<style scoped>
h1 {
  margin-top: 100px;
  font-size: 200px;
  text-align: center;
}
img {
  width: 650px;
  height: 550px;
  margin-left: 700px;
}
</style>
