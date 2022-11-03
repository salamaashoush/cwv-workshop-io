<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-5xl tracking-tight text-gray-900 sm:text-center">Snail House Renovation Projects</h1>

      <div class="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="h-auto w-full overflow-hidden rounded-lg group-hover:opacity-75"
            loading="lazy"
          />
          <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>{{ product.name }}</h3>
          </div>
          <p class="mt-1 text-sm italic text-gray-500">{{ product.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import shellAluminum from "../assets/shell-aluminum.jpg"
import shellGlass from "../assets/shell-glass.jpg"
import shellGold from "../assets/shell-gold.jpg"
import shellPaper from "../assets/shell-paper.jpg"
import shellPlush from "../assets/shell-plush.jpg"
import shellWood from "../assets/shell-wood.jpg"

const products = [
  {
    id: 1,
    name: "Gold House",
    href: "#",
    description: "A premium experience for the best snails",
    imageSrc: shellGold,
    imageAlt: "A 3D render of a gold snail shell.",
  },
  {
    id: 2,
    name: "Glass House",
    href: "#",
    description: "Stylish and modern, for the snails who like to be seen",
    imageSrc: shellGlass,
    imageAlt: "A 3D render of a glass snail shell.",
  },
  {
    id: 3,
    name: "Aluminum House",
    href: "#",
    description: "A classic. British snails prefer a different name",
    imageSrc: shellAluminum,
    imageAlt: "A 3D render of an aluminum snail shell.",
  },
  {
    id: 4,
    name: "Wooden House",
    href: "#",
    description: "Organic and sustainable, for the snails who like to be one with nature",
    imageSrc: shellWood,
    imageAlt: "A 3D render of a wooden snail shell.",
  },
  {
    id: 5,
    name: "Paper House",
    href: "#",
    description: "Lightweight and easy to carry, for the snails who like to travel. Not compatible with wet climates",
    imageSrc: shellPaper,
    imageAlt: "A 3D render of a paper snail shell.",
  },
  {
    id: 6,
    name: "Plush House",
    href: "#",
    description: "Extra soft and cozy, for the snails who like to be hugged 🥰",
    imageSrc: shellPlush,
    imageAlt: "A 3D render of a plush snail shell.",
  },
]
</script>
