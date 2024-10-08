<template>
  <Header></Header>
  <!-- Section Profil / Compétences -->
  <section class="introduction">
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

  <!-- Section Créations -->
  <section class="creations">
    <h2>CREATIONS</h2>
    <div class="cartes">
      <div>
        <img
          src="@/assets/img/image cv .png"
          class="cv"
          alt="Curriculum Vitae" />
        <p>Curriculum vitae</p>
        <p>Techno utilisée : HTML, CSS</p>
      </div>
      <div>
        <img
          src="@/assets/img/image cahier des charges.png"
          class="cahier"
          alt="Cahier des charges" />
        <p>Cahier des charges</p>
        <p>Techno utilisée : HTML, CSS</p>
      </div>
      <div>
        <img
          src="@/assets/img/image dynamiser.png"
          class="dynamiser"
          alt="Dynamiser un espace commentaire" />
        <p>Dynamiser un espace commentaire</p>
        <p>Techno utilisée : HTML, CSS, JavaScript</p>
      </div>
    </div>
  </section>

  <!-- Section Contact -->
  <section class="contact">
    <div class="line-left"></div>
    <h2>CONTACT</h2>
    <div class="line-right"></div>
    <form action="#" method="post">
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
  <Footer></Footer>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Acceuil",
  components: {
    Header,
    Footer,
  },
};
</script>
<style></style>
