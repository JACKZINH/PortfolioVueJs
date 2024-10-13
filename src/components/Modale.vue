<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modale card">
      <div v-on:click="toggleModale" class="btn-modale btn btn-danger btn-sm">
        X
      </div>

      <!-- Section Créations -->
      <section class="creations">
        <!-- Affichage dynamique des informations sur la création via les props -->
        <div class="cartes">
          <div>
            <div class="image-container">
              <img
                class="image-principale"
                :src="creation.image"
                :alt="creation.titre" />

              <img
                class="image-secondaire"
                :src="creation.image2"
                :alt="creation.titre + ' image 2'" />
            </div>
            <div class="text-container">
              <p class="cvtitre">{{ creation.titre }}</p>

              <p>Technologies utilisées : {{ creation.techno }}</p>
              <p>{{ creation.date }}</p>
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
// Ajout de la nouvelle propriété "creation" pour gérer la création spécifique affichée
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

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.modale {
  background: #f1f1f1;
  color: #333;
  padding: 50px;
  position: fixed;
  top: 10%;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}

.image-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 200px;
  margin-bottom: 20px;
}
.image-principale,
.image-secondaire {
  width: 300px;
  height: 450px;
  border-radius: 10px;
}

.card {
  max-width: 1000px; /* Largeur maximale de la modale */
  width: 90%; /* Largeur à 90% pour les petits écrans */
  border-radius: 10px; /* Coins arrondis */
  overflow: hidden; /* Pour éviter le débordement */
}

.creations a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000000; /* Couleur du texte (par exemple, gris foncé) */
  text-decoration: none; /* Supprimer le soulignement */
  font-weight: bold; /* Rendre le texte en gras */
}
</style>
