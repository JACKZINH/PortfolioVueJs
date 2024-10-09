<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modale card">
      <div v-on:click="toggleModale" class="btn-modale btn btn-danger btn-sm">
        X
      </div>

      <!-- Section Créations -->
      <section class="creations">
        <h2>CREATION</h2>
        <!-- Affichage dynamique des informations sur la création via les props -->
        <div class="cartes">
          <div>
            <img :src="creation.image" :alt="creation.titre" />

            <p>{{ creation.titre }}</p>

            <p>Techno utilisée : {{ creation.techno }}</p>
            <a :href="creation.lien" target="_blank" rel="noopener noreferrer"
              >VOIR LE PROJET</a
            >
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
.creations {
  width: auto;
  height: 354px;
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

.creations h2 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.creations img {
  width: 116px;
  height: 177px;
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
  top: 30%;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
.creations img {
  max-width: 100%; /* Pour que l'image prenne toute la largeur de la modale */
  height: auto; /* Pour maintenir les proportions */
  margin-bottom: 10px; /* Espacement sous l'image */
  margin-left: 100px;
}

.card {
  max-width: 500px; /* Largeur maximale de la modale */
  width: 90%; /* Largeur à 90% pour les petits écrans */
  border-radius: 10px; /* Coins arrondis */
  overflow: hidden; /* Pour éviter le débordement */
}

.creations a {
  color: #000000; /* Couleur du texte (par exemple, gris foncé) */
  text-decoration: none; /* Supprimer le soulignement */
  font-weight: bold; /* Rendre le texte en gras */
}
</style>
