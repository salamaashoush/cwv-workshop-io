<template>
  <div class="bg-white" id="donate">
    <div class="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
      <h1 class="text-5xl tracking-tight text-gray-900 sm:text-center">Donate and Help a Snail Find Their Home</h1>
      <div
        class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none"
      >
        <div
          v-for="tier in tiers"
          :key="tier.name"
          class="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm"
        >
          <div class="p-6">
            <h2 class="text-lg font-medium leading-6 text-gray-900">{{ tier.name }}</h2>
            <p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
            <p class="mt-8">
              <span class="text-4xl font-bold tracking-tight text-gray-900">€{{ tier.price }}</span>
            </p>
            <a
              :href="tier.href"
              class="mt-8 block w-full rounded-md border border-yellow-800 bg-yellow-800 py-2 text-center text-sm font-semibold text-white hover:bg-yellow-900"
              >Donate €{{ tier.price }}</a
            >
          </div>
          <div class="px-6 pt-6 pb-8">
            <h3 class="text-sm font-medium text-gray-900">What Your Donation Covers</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="feature in tier.includedFeatures" :key="feature" class="flex space-x-3">
                <CheckIcon class="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                <span class="text-sm text-gray-500">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid"

const tiers = [
  {
    name: "Snail",
    href: "#",
    price: 10,
    description: "Reunite one snail with their home",
    includedFeatures: ["Reunites one snail with their home.", "You may visit them sometimes."],
  },
  {
    name: "Snail Pro",
    href: "#",
    price: 50,
    description: "Reunite three snails with their homes and help them a bit",
    includedFeatures: [
      "Reunites three snails with their homes.",
      "Also covers temporary accomodation on their way home.",
      "Snails will be very grateful and will be happy to see you whenever.",
    ],
  },
  {
    name: "Snail Pro Max",
    href: "#",
    price: 100,
    description: "Reunite five snails with their homes and help them a lot",
    includedFeatures: [
      "Reunites five snails with their homes.",
      "Also covers temporary accomodation on their way home.",
      "Also covers house renovation for the snails (the houses will need it after staying empty for a while!) – pick your options below",
      "Snails will basically become your family afterwards.",
    ],
  },
]
</script>
