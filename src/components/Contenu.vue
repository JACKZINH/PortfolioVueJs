<template>
  <div id="creations" class="lescreations">
    <div class="titre-container">
      <!-- Ligne décorative entourant le titre "CRÉATIONS" -->
      <div class="ligne-gauche"></div>
      <h1>CRÉATIONS</h1>
      <div class="ligne-droite"></div>
    </div>
    <!-- Boucle "v-for" pour afficher dynamiquement chaque création -->
    <div class="cartes">
      <div v-for="(creation, index) in creations" :key="index">
        <!-- Image et titre de chaque création -->
        <img :src="creation.image" :alt="creation.titre" />
        <p>{{ creation.titre }}</p>
        <p>Techno utilisée : {{ creation.techno }}</p>
        <!-- Bouton qui déclenche l'ouverture de la modale pour voir plus d'infos -->
        <button @click="openModale(creation)">Voir plus</button>
      </div>
    </div>

    <!-- Modale qui s'affiche si "revele" est true, avec la création sélectionnée -->
    <Modale
      v-if="revele"
      :revele="revele"
      :toggleModale="toggleModale"
      :creation="currentCreation" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modale from "@/components/Modale.vue";

// Liste des créations à afficher, chaque objet contient les informations sur une création
const creations = ref([
  {
    titre: "Curriculum vitae",
    image: "/src/assets/img/image cv .png",
    image2: "src/assets/img/codecv.png",
    techno: "HTML, CSS",
    lien: "https://github.com/JACKZINH/Devoir-CV",
    date: "Créer le 27 Janvier 2024",
  },
  {
    titre: "Cahier des charges",
    image: "/src/assets/img/image cahier des charges.png",
    image2: "src/assets/img/imagecahier2.png",
    techno: "HTML, CSS",
    lien: "https://www.dropbox.com/scl/fi/6n1f7qf2e5nwfnf7qj6jn/Cahier-des-charges-La-Socketterie-fini.pdf?rlkey=c6ag10dzafj1zz6mms5k0uv0i&st=sawnnzvt&dl=0",
    date: "Créer le 25 Février 2024",
  },
  {
    titre: "Dynamiser un espace commentaire",
    image: "/src/assets/img/image dynamiser.png",
    image2: "src/assets/img/image2dynamiser.png",
    techno: "HTML, CSS, JavaScript",
    lien: "https://github.com/JACKZINH/devoirdynamiserunespacecommentaire",
    date: "Créer le 02 Septembre 2024",
  },
]);

// Variable pour savoir quelle création est actuellement sélectionnée
const revele = ref(false);
const currentCreation = ref(null);

// Fonction pour toggler (basculer) la modale
const toggleModale = () => {
  revele.value = !revele.value;
};

// Fonction pour ouvrir une modale avec une création spécifique
const openModale = (creation) => {
  currentCreation.value = creation; // Définir la création sélectionnée
  toggleModale();
};
</script>

<style scoped>
.lescreations {
  background-color: #fafafa;
  min-height: 48vh; /* Définit la hauteur minimale pour cette section */
}
button {
  background-color: #e7e7e7;
  padding: 5px 10px;
  border: 1px solid #999;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease; /* Animation pour l'effet de survol */
  align-self: center;
  width: 22%;
}

button:hover {
  background-color: #bbb; /* Changement de couleur au survol */
}

h1 {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-align: center;
  font-size: 30px;
  padding-top: 20px;
}
.cartes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  flex-wrap: wrap;
}

.cartes div {
  flex: 1 1 calc(30% - 10px);
  margin: 5px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 8px;
  text-align: center;
  transition: box-shadow 0.3s ease; /* Animation pour l'effet d'ombre au survol */
}

.cartes img {
  width: 116px;
  height: 177px;
}

.cartes div:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); /* Ombre en bas et à droite */
}

.cartes p {
  font-family: "Roboto", sans-serif;
  color: #333;
  margin-top: 10px;
}
.titre-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Style pour le conteneur du titre avec lignes à gauche et droite */
.ligne-gauche,
.ligne-droite {
  width: 750px;
  height: 1px;
  margin: 0 20px;
  background-color: #000000;
}
</style>
