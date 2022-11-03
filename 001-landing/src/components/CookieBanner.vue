<template>
  <TransitionRoot as="template" :show="showCookieBanner">
    <Dialog as="div" class="relative z-10">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6"
            >
              <div>
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                  Cookie 🍪 Banner 😲
                </DialogTitle>
                <div class="mt-2 space-y-3">
                  <p class="text-sm">
                    We use cookies and similar technologies on our website and process your personal data (e.g. IP
                    address), for example, to personalize content and ads, to integrate media from third-party providers
                    or to analyze traffic on our website. Data processing may also happen as a result of cookies being
                    set. We share this data with third parties that we name in the privacy settings. The data processing
                    may take place with your consent or on the basis of a legitimate interest, which you can object to
                    in the privacy settings. You have the right not to consent and to change or revoke your consent at a
                    later time. For more information on the use of your data, please visit our privacy policy. Some
                    services process personal data in the USA. By consenting to the use of these services, you also
                    consent to the processing of your data in the USA in accordance with Art. 49 (1) lit. a GDPR. The
                    USA is considered by the ECJ to be a country with an insufficient level of data protection according
                    to EU standards. In particular, there is a risk that your data will be processed by US authorities
                    for control and monitoring purposes, perhaps without the possibility of a legal recourse. You are
                    under 16 years old? Then you cannot consent to optional services. Ask your parents or legal
                    guardians to agree to these services with you.By accepting all services, you allow Emojis, Gravatar
                    (Avatar images), YouTube, Google reCAPTCHA, Google Analytics, VG WORT, Koalendar, Paddle.com
                    Affiliate Tracking, LinkedIn Insight-Tag, Reamaze (Chat), Microsoft Clarity, and Google Ads
                    Conversion Tracking und Remarketing, to be loaded. These services are divided into groups
                    Functional, Statistic and Marketing according to their purpose (belonging marked with superscript
                    numbers).
                  </p>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                  @click="dismissCookieBanner()"
                >
                  K
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue"
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue"

const localStorageKey = "cookieBannerDismissed"

const showCookieBanner = ref(false)

if (typeof localStorage !== "undefined" && localStorage.getItem(localStorageKey) !== "true") {
  const timeout = setTimeout(() => {
    showCookieBanner.value = true
  }, 1500)

  onBeforeUnmount(() => {
    clearTimeout(timeout)
  })
}

function dismissCookieBanner() {
  showCookieBanner.value = false
  localStorage.setItem(localStorageKey, true)
}
</script>
