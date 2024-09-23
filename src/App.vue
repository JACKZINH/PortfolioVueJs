<template>
  <!-- En-tête avec logo et navigation -->
  <header>
    <div>
      <h1>CS</h1>
    </div>
    <nav>
      <a href="#">PRESENTATION</a>
      <a href="#">CREATIONS</a>
      <a href="#">CONTACT</a>
    </nav>
  </header>

  <!-- Section Profil / Compétences -->
  <section class="introduction">
    <div>
      <h2>CLEMENT SYLVAIN</h2>
      <p>
        Étudiant en développement web et mobile, passionné par la création
        d'interfaces intuitives et l'optimisation d'expériences utilisateurs.
      </p>
    </div>
    <div>
      <p><strong>Designer</strong></p>
      <p>Concevoir des designs sur mesure qui renforcent votre identité</p>
    </div>
    <div>
      <img src="@/assets/img/Html.png" alt="HTML5" />
      <img src="@/assets/img/CSS.png" alt="CSS3" />
      <img src="@/assets/img/Javascript.png" alt="JavaScript" />
      <img src="@/assets/img/Vue.png" alt="Vue.js" />
    </div>
    <div>
      <p><strong>Coder</strong></p>
      <p>
        Développer des interfaces fluides et intuitives pour un usage optimal
      </p>
    </div>
  </section>

  <!-- Section Créations -->
  <section class="creations">
    <h2>CREATIONS</h2>
    <div>
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
    <h2>CONTACT</h2>
    <form action="#" method="post">
      <label for="name">Nom prénom :</label>
      <input type="text" id="name" name="name" /><br />

      <label for="subject">Objet :</label>
      <input type="text" id="subject" name="subject" /><br />

      <label for="message">Message :</label>
      <textarea id="message" name="message"></textarea><br />

      <input type="submit" value="Soumettre" />
    </form>
  </section>

  <!-- Pied de page -->
  <footer>
    <p>Dernière mise à jour : 09/09/2024</p>
    <div>
      <a href="https://www.linkedin.com">
        <img src="@/assets/img/LinkedIn.png" alt="LinkedIn" />
      </a>
      <a href="https://github.com">
        <img src="@/assets/img/GitHub.png" alt="GitHub" />
      </a>
      <a href="https://twitter.com">
        <img src="@/assets/img/X.png" alt="Twitter" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
/* Import de la police Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

/* Applique la police globale */
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f9; /* Couleur de fond légère pour le site */
  color: #333;
}

h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

section {
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
}

header h1 {
  font-size: 24px;
  font-weight: bold;
}

nav a {
  margin-left: 20px;
  font-size: 16px;
  color: white;
}

nav a:hover {
  text-decoration: underline;
}

.introduction {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f4f4f9;
  padding: 40px 20px;
}

.introduction h2 {
  font-size: 28px;
  font-weight: bold;
}

.introduction p {
  margin-top: 10px;
}

.introduction div {
  text-align: center;
  margin: 0 20px;
}

.introduction img {
  width: 50px;
  height: 50px;
  margin: 10px;
}

.creations {
  padding: 40px 20px;
  background-color: white;
}

.creations h2 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
}

.creations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.creations-grid div {
  background-color: #f9f9f9;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.creations-grid div:hover {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.contact {
  background-color: #f4f4f9;
  padding: 40px 20px;
}

.contact h2 {
  text-align: center;
  margin-bottom: 20px;
}

.contact form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

footer p {
  margin-bottom: 10px;
}

footer img {
  width: 25px;
  height: 25px;
}

@media (max-width: 768px) {
  .introduction {
    flex-direction: column;
    text-align: center;
  }

  .creations-grid {
    grid-template-columns: 1fr;
  }

  header {
    flex-direction: column;
  }

  nav a {
    margin: 10px 0;
  }
}
</style>
