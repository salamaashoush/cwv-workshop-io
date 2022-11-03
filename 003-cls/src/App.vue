<script setup>
import Nav from "./components/Nav.vue"
import Hero from "./components/Hero.vue"
import Details from "./components/Details.vue"
import Donate from "./components/Donate.vue"
import Progress from "./components/Progress.vue"
import Houses from "./components/Houses.vue"
import Footer from "./components/Footer.vue"
import { RouterView } from "vue-router"
</script>

<template>
  <div class="font-sans">
    <RouterView />
  </div>
</template>
