<template>
  <!-- Pied de page avec les liens sociaux -->
  <footer>
    <div class="liens-socials">
      <!-- Lien vers LinkedIn, redirige vers la page d'accueil de LinkedIn (car pas de compte personnel) -->
      <a href="https://www.linkedin.com" target="_blank">
        <img src="@/assets/img/LinkedIn.png" alt="LinkedIn" />
      </a>
      <!-- Lien vers mon compte GitHub -->
      <a href="https://github.com/JACKZINH" target="_blank">
        <img src="@/assets/img/GitHub.png" alt="GitHub" />
      </a>
      <!-- Lien vers X (anciennement Twitter), redirige vers la page d'accueil -->
      <a href="https://x.com/home" target="_blank">
        <img src="@/assets/img/X.png" alt="X" />
      </a>
      <!-- Affiche la dernière date de mise à jour du site -->
      <p>dernière mise à jour : 14/10/2024</p>
    </div>
  </footer>
</template>
<script setup></script>
<style>
footer {
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: #b9b9b9;
  color: rgb(0, 0, 0);
  padding: 20px;
}

footer p {
  margin-bottom: 10px;
  text-align: center;
}

footer img {
  width: 45px;
  height: 45px;
}

footer p {
  text-align: start;
  font-size: 10px;
}
footer a {
  margin-left: 10px;
}
.liens-socials {
  margin-top: 20px;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
