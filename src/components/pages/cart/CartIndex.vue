<template>
  <div>
    <Heading>Cart</Heading>

    <div>
      <div class="dark:bg-white dark:bg-opacity-5 mb-4 p-4 rounded" v-for="itemCart in getCart" :key="itemCart.id">
        <div class="flex items-center justify-between">
          <div>
            <span class="text-white text-lg">{{ itemCart.name }}</span>
          </div>
          <div>
            <div class="flex items-center">
              <div v-if="itemCart.quantity >= 2">
                <button class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div class="mx-2 w-12 text-sm p-1 rounded dark:bg-white dark:bg-opacity-60 text-center">
                {{ itemCart.quantity }}
              </div>
              <div>
                <button @click="addToCart(itemCart)" class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div class="ml-8">
                <button
                  class="
                    inline-flex
                    text-xs
                    py-1.5
                    px-3
                    bg-gray-100
                    rounded-full
                    dark:hover:bg-black dark:hover:bg-opacity-70 dark:bg-gray-900 dark:text-gray-200
                    transition-all
                    duration-200
                  "
                >
                  remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button class="bg-yellow-400 py-2 px-3 rounded font-bold text-black text-opacity-70">to order</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Heading from '@/components/atoms/heading'

export default {
  name: 'cart-index',
  components: {
    Heading,
  },
  computed: {
    ...mapGetters('Cart', ['getCart']),
  },
  methods: {
    ...mapActions('Cart', ['addToCart']),
  },
}
</script>
