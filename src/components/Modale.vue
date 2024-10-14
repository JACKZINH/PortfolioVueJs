<template>
  <!-- Bloc principal de la modale, visible seulement si "revele" est vrai -->
  <div class="bloc-modale" v-if="revele">
    <!-- Overlay (arrière-plan) qui permet de fermer la modale en cliquant dessus -->
    <div class="overlay" v-on:click="toggleModale"></div>
    <!-- Contenu principal de la modale -->
    <div class="modale card">
      <!-- Bouton pour fermer la modale -->
      <div v-on:click="toggleModale" class="btn-modale btn btn-danger btn-sm">
        X
      </div>

      <!-- Section Créations, affichage des détails de la création passée en props -->
      <section class="creations">
        <!-- Affichage dynamique des informations sur la création via les props -->
        <div class="cartes">
          <div>
            <div class="image-container">
              <!-- Image principale de la création -->
              <img
                class="image-principale"
                :src="creation.image"
                :alt="creation.titre" />
              <!-- Image secondaire de la création -->
              <img
                class="image-secondaire"
                :src="creation.image2"
                :alt="creation.titre + ' image 2'" />
            </div>
            <div class="text-container">
              <!-- Titre de la création -->
              <p class="cvtitre">{{ creation.titre }}</p>

              <!-- Technologies utilisées pour la création -->
              <p>Technologies utilisées : {{ creation.techno }}</p>
              <!-- Date de création -->
              <p>{{ creation.date }}</p>
              <!-- Lien vers le projet (ouvre dans un nouvel onglet) -->
              <a :href="creation.lien" target="_blank" rel="noopener noreferrer"
                >VOIR LE PROJET</a
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Utilisation de props pour passer les données dynamiques à la modale
const props = defineProps(["revele", "toggleModale", "creation"]);
</script>

<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cvtitre {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
}

.creations {
  width: auto;
  height: 705px;
  padding: 40px 20px;
  background-color: #fafafa;
}

.cartes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}
/* Bloc modale, centré dans la fenêtre */
.bloc-modale {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Arrière-plan semi-transparent */
.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
/* Conteneur de la modale */
.modale {
  background: #f1f1f1;
  color: #333;
  padding: 50px;
  position: fixed;
  top: 10%;
}
/* Conteneur de la modale */
.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
/* Conteneur pour les images principales et secondaires */
.image-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 200px;
  margin-bottom: 20px;
}
/* Style des images dans la modale */
.image-principale,
.image-secondaire {
  width: 300px;
  height: 450px;
  border-radius: 10px;
}
/* Style de la carte qui contient les informations de la création */
.card {
  max-width: 1000px; /* Largeur maximale de la modale */
  width: 90%;
  border-radius: 10px;
  overflow: hidden; /* Pour éviter le débordement */
}
/* Style pour le lien "Voir le projet" */
.creations a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000000;
  text-decoration: none;
  font-weight: bold;
}
</style>
