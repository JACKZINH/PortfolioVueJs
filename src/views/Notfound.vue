<template>
  <head>
    <title>Page Introuvable</title>
    <meta
      name="description"
      content="La page que vous recherchez est introuvable." />
  </head>
  <Header></Header>
  <h1>404</h1>
  <img src="/src/assets/img/notfound.jpg" alt="404" />
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
