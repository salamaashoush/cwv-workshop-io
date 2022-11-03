<template>
  <header class="bg-yellow-600">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex w-full items-center justify-between border-b border-yellow-500 py-6 lg:border-none">
        <div class="flex items-center">
          <div class="text-5xl"><RouterLink to="/">🐌</RouterLink></div>
          <div class="ml-10 hidden space-x-8 lg:block">
            <RouterLink
              v-for="link in navigation"
              :key="link.name"
              :to="link.href"
              class="text-base font-medium text-white hover:text-yellow-50"
            >
              {{ link.name }}
            </RouterLink>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <a
            href="/#donate"
            class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-yellow-600 hover:bg-yellow-50"
          >
            Donate
          </a>
        </div>
      </div>
      <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
        <a
          v-for="link in navigation"
          :key="link.name"
          :href="link.href"
          class="text-base font-medium text-white hover:text-yellow-50"
          >{{ link.name }}</a
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router"

const navigation = [
  { name: "Cause", href: "/" },
  { name: "Progress", href: "/#progress" },
  { name: "House Projects", href: "/houses" },
]
</script>
