<template>
  <div class="modale">
    <div class="modale card"></div>
    <div class="modale-overlay" @click="closeModale"></div>
  </div>
</template>

<script>
export default {
  name: "Modale",
  methods: {
    closeModale() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
