<template>
  <!-- Composant Header affichable sur toutes les pages -->
  <Header></Header>
  <!-- Section Profil / Compétences -->
  <section id="introduction" class="introduction">
    <div class="designer">
      <p class="designercoder">designer</p>
      <p>concevoir des designs sur mesure qui renforcent votre identité</p>
      <img src="/src/assets/img/imageDesigner.png" alt="Designer" />
    </div>
    <div>
      <h2>CLEMENT SYLVAIN</h2>
      <p>
        étudiant en développement web et mobile, passionné par la création
        d'interfaces intuitives et l'optimisation d'expériences utilisateurs
      </p>
      <img src="@/assets/img/Html.png" alt="HTML5" />
      <img src="@/assets/img/CSS.png" alt="CSS3" />
      <img src="@/assets/img/Javascript.png" alt="JavaScript" />
      <img src="@/assets/img/Vue.png" alt="Vue.js" />
    </div>
    <div class="coder">
      <p class="designercoder">&lt;coder&gt;</p>
      <p>
        développer des interfaces fluides et intuitives pour un usage optimal
      </p>
      <img src="/src/assets/img/imageCoder.png" alt="Coder" />
    </div>
  </section>

  <!-- Composant qui affiche les créations et gère les modales pour plus d'interaction -->
  <Contenu></Contenu>

  <!-- Section Contact avec un formulaire -->
  <section id="contact" class="contact">
    <div class="titre-container">
      <!-- Ligne décorative entourant le titre "CONTACT" -->
      <div class="ligne-gauche"></div>
      <h2>CONTACT</h2>
      <div class="ligne-droite"></div>
    </div>
    <!-- Formulaire de contact utilisant formsubmit.co pour l'envoi des messages -->
    <form
      action="https://formsubmit.co/6f06738a2fce2ba3fcd46219a050df12"
      method="POST">
      <div class="form-group">
        <label for="name">Nom prénom :</label>
        <input type="text" id="name" name="name" />
      </div>
      <div class="form-group">
        <label for="subject">Objet :</label>
        <input type="text" id="subject" name="subject" />
      </div>
      <div class="form-group">
        <label for="message">Message :</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <input type="submit" value="Soumettre" />
    </form>
  </section>
  <!-- Composant Footer affiché sur toutes les pages du site -->
  <Footer></Footer>
</template>

<script>
import Contenu from "@/components/Contenu.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Accueil",
  components: {
    Header,
    Footer,
    Contenu,
  },
};
</script>

<style></style>
