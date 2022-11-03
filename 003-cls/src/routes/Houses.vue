<script setup>
import Nav from "../components/Nav.vue"
import HousesForSale from "../components/HousesForSale.vue"
import Footer from "../components/Footer.vue"
import PromoBanner from "../components/PromoBanner.vue"
</script>

<template>
  <client-only>
    <PromoBanner />
  </client-only>
  <Nav />
  <HousesForSale />
  <Footer />
</template>
