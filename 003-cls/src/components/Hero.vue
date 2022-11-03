<template>
  <div
    class="mx-auto flex max-w-7xl flex-col gap-12 py-24 px-4 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:px-8"
  >
    <img
      class="h-auto w-40 scale-x-[-1] overflow-hidden rounded-2xl brightness-125 lg:w-80"
      loading="lazy"
      :src="snailImage"
    />
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
</script>
