<template>
  <!-- Pied de page -->
  <footer>
    <div class="liens-socials">
      <!-- Je n'ai pas de compte linkedin, ce lien redirige vers la page d'acceuil -->
      <a href="https://www.linkedin.com" target="_blank">
        <img src="@/assets/img/LinkedIn.png" alt="LinkedIn" />
      </a>
      <a href="https://github.com/JACKZINH" target="_blank">
        <img src="@/assets/img/GitHub.png" alt="GitHub" />
      </a>
      <!-- Je n'ai pas de compte X, ce lien redirige vers la page d'acceuil -->
      <a href="https://x.com/home" target="_blank">
        <img src="@/assets/img/X.png" alt="X" />
      </a>
      <p>dernière mise à jour : 10/10/2024</p>
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
  margin-left: 20px;
  margin-top: 20px;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
