<template>
  <Navbar />

  <main id="project">
    <ul id="pageMenu">
      <li class="pageMenuItem">
        <a href="#sp01">Side Project 1</a>
      </li>
      <li class="pageMenuItem">
        <a href="#sp02">Side Project 2</a>
      </li>
      <li class="pageMenuItem">
        <a href="#sp03">Side Project 3</a>
      </li>
      <li class="pageMenuItem">
        <a href="#sp04">Side Project 4</a>
      </li>
      <li class="pageMenuItem">
        <a href="#sp05">Side Project 5</a>
      </li>
    </ul>

  </main>

  <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped lang="scss">

</style>