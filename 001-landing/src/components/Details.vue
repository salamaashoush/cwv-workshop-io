<template>
  <div class="relative overflow-hidden bg-white pt-16 pb-32">
    <div class="relative">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div class="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
          <div>
            <div>
              <span class="flex h-12 w-12 items-center justify-center rounded-md bg-yellow-600">
                <QuestionMarkCircleIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl tracking-tight text-gray-900">Why</h2>
              <p class="mt-4 text-lg text-gray-800">
                Every morning, millions of snails wake up and leave their homes to find food. But they often get lost
                along the way and can’t find their way back! That’s how a snail becomes a slug.
              </p>
              <p class="mt-4 text-lg text-gray-800">
                The UN has estimated that 1.5 million snails get lost every year. That’s a lot of snails.
              </p>
              <div class="mt-6">
                <a
                  href="#"
                  class="inline-flex rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-700"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              :src="barcelonaSnail"
              alt="A map showing a snail's route from Barcelona to its home"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div class="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
          <div>
            <div>
              <span class="flex h-12 w-12 items-center justify-center rounded-md bg-yellow-600">
                <SparklesIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl tracking-tight text-gray-900">How</h2>
              <p class="mt-4 text-lg text-gray-500">
                We reunite snails with their homes by building a map of the world. We use satellite imagery to identify
                snail homes and then use machine learning to find the snails that live there.
              </p>
              <p class="mt-4 text-lg text-gray-500">
                We then use volunteering help to help the snails find their way home.
              </p>
              <div class="mt-6">
                <a
                  href="#"
                  class="inline-flex rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-700"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
          <div class="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              :src="snailSattelite"
              alt="A screenshot showing snail search UI"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { QuestionMarkCircleIcon, SparklesIcon } from "@heroicons/vue/24/outline"
import barcelonaSnail from "../assets/barcelona-snail.jpg"
import snailSattelite from "../assets/snail-sattelite.jpg"
</script>
