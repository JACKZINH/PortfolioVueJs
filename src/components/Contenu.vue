<template>
  <div id="creations" class="lescreations">
    <h1>CRÉATIONS</h1>

    <!-- Affichage de chaque création -->
    <div class="cartes">
      <div v-for="(creation, index) in creations" :key="index">
        <img :src="creation.image" :alt="creation.titre" />
        <p>{{ creation.titre }}</p>
        <p>Techno utilisée : {{ creation.techno }}</p>
        <!-- Ajout du bouton pour ouvrir la modale spécifique à chaque création -->
        <button @click="openModale(creation)">Voir plus</button>
      </div>
    </div>

    <!-- La modale -->
    <!-- Ajout de la propriété "creation" pour passer la création spécifique à la modale -->
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

// Déclaration des données (data)
const creations = ref([
  {
    titre: "Curriculum vitae",
    image: "/src/assets/img/image cv .png",
    techno: "HTML, CSS",
    lien: "https://github.com/JACKZINH/Devoir-CV",
  },
  {
    titre: "Cahier des charges",
    image: "/src/assets/img/image cahier des charges.png",
    techno: "HTML, CSS",
    lien: "https://www.dropbox.com/scl/fi/6n1f7qf2e5nwfnf7qj6jn/Cahier-des-charges-La-Socketterie-fini.pdf?rlkey=c6ag10dzafj1zz6mms5k0uv0i&st=sawnnzvt&dl=0",
  },
  {
    titre: "Dynamiser un espace commentaire",
    image: "/src/assets/img/image dynamiser.png",
    techno: "HTML, CSS, JavaScript",
    lien: "https://github.com/JACKZINH/devoirdynamiserunespacecommentaire",
  },
]); // AJOUT D'UNE LISTE D'OBJETS POUR LES CRÉATIONS

// Variable pour savoir quelle création est actuellement sélectionnée
const revele = ref(false);
const currentCreation = ref(null); // AJOUT D'UNE NOUVELLE VARIABLE POUR GARDER LA CRÉATION ACTIVE

// Fonction pour toggler (basculer) la modale
const toggleModale = () => {
  revele.value = !revele.value;
};

// Fonction pour ouvrir une modale avec une création spécifique
const openModale = (creation) => {
  currentCreation.value = creation; // Définir la création sélectionnée
  toggleModale();
}; // AJOUT D'UNE FONCTION POUR OUVRIR UNE MODALE SPÉCIFIQUE
</script>

<style scoped>
.lescreations {
  background-color: #fafafa;
  min-height: 45vh; /* Hauteur minimale de 100% de la vue */
}
button {
  background-color: #ccc;
  padding: 5px 10px;
  border: 1px solid #999;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
  width: 22%;
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
  flex: 1 1 calc(30% - 10px); /* 30% de largeur, avec un espacement */
  margin: 5px; /* Espace autour de chaque carte */
  padding: 10px; /* Espace intérieur */
  background: #f5f5f5; /* Couleur de fond */
  border-radius: 8px; /* Coins arrondis */
  text-align: center; /* Centrer le texte */
  transition: box-shadow 0.3s ease; /* Animation pour l'ombre */
}

.cartes img {
  width: 116px;
  height: 177px;
}

.cartes div:hover {
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); /* Ombre en bas à droite */
}

.cartes p {
  font-family: "Roboto", sans-serif;
  color: #333;
  margin-top: 10px;
}
</style>
