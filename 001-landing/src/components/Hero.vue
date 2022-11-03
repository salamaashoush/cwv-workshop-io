<template>
  <div
    class="mx-auto flex max-w-7xl flex-col gap-12 py-24 px-4 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:px-8"
  >
    <div class="relative h-40 w-40 overflow-hidden rounded-full lg:h-60 lg:w-80 lg:rounded-2xl">
      <img
        class="absolute inset-0 h-full w-full scale-x-[-1] object-cover object-center brightness-125"
        :src="snailImage"
        :srcset="`${snailImage} 1326w, ${snailImageSmaller} 663w`"
        sizes="160px, (min-width: 1024px) 300px"
      />
    </div>
    <div>
      <h1 class="text-4xl tracking-tight sm:text-5xl lg:text-6xl">Give Your Snail A Home</h1>
      <p class="mt-6 max-w-3xl text-xl">
        Did you know that slugs are just snails that left their home (aka “shell”) one morning and weren’t able to find
        the way back? 😢 Let’s help them out.
      </p>
    </div>
  </div>
</template>

<script setup>
import snailImage from "../assets/snail.jpg"
import snailImageSmaller from "../assets/snail.webp"
</script>
