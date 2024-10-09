<template>
  <!-- En-tête avec logo et navigation -->
  <header>
    <div>
      <h1>CS</h1>
    </div>
    <nav>
      <a href="presentation">PRESENTATION</a>
      <a href="creations">CREATIONS</a>
      <a href="contact">CONTACT</a>
    </nav>
  </header>
</template>
<script setup></script>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
  width: auto;
  height: 80px;
}

header h1 {
  font-size: 24px;
  font-weight: bold;
}

nav a {
  margin-left: 20px;
  font-size: 16px;
  color: white;
  text-decoration: none;
}
</style>
