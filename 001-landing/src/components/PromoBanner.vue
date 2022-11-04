<template>
  <div class="bg-red-600" v-if="promoEnabled && promoExpiresIn && isVisible">
    <div class="mx-auto flex max-w-7xl justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div>
        <h3 class="inline font-bold text-white">Promo! 30% discount.</h3>
        <p class="inline text-white">
          Expires in {{ promoExpiresIn }} hours. Use the code
          <span class="rounded bg-white bg-opacity-30 px-2 py-1 font-mono">I_LOVE_SNAILS</span> on checkout.
        </p>
      </div>
      <button
        class="h-8 w-8 flex-none rounded bg-white bg-opacity-30 align-middle font-bold leading-8 text-white hover:bg-opacity-50"
        @click="isVisible = false"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { differenceInHours } from "date-fns"

const promoDisabledInLanguages = ["ru-RU", "et", "eo"]
const promoEnabled = ref(!promoDisabledInLanguages.includes(navigator.language))
const promoExpiresIn = ref(null)
const isVisible = ref(true)

setInterval(() => {
  updatePromoExpiresIn()
}, 1000)

function updatePromoExpiresIn() {
  const nextDay = new Date()
  nextDay.setDate(nextDay.getDate() + 1)
  nextDay.setHours(0)
  nextDay.setMinutes(0)
  nextDay.setSeconds(0)
  promoExpiresIn.value = differenceInHours(nextDay, new Date())
}
</script>
