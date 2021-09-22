<template>
  <div>
    <Heading>Products</Heading>
    <template v-if="isLoading">
      <div class="border rounded border-gray-400 dark:border-gray-600 animate-pulse delay-200">
        <div
          v-for="row in 5"
          :key="row"
          class="
            border-b
            h-12
            p-4
            bg-white bg-opacity-40
            dark:border-transparent dark:bg-opacity-5
            flex
            justify-between
            items-center
          "
          :class="[5 === row ? 'border-transparent' : 'border-gray-400 dark:border-gray-600']"
        >
          <div class="h-2 w-1/4 bg-gray-700 dark:bg-gray-300 rounded-full animate-pulse"></div>
          <div class="h-5 w-20 bg-gray-300 dark:bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    </template>
    <ul v-else data-test-id="products" class="border rounded border-gray-400 dark:border-gray-600">
      <li
        v-for="(product, index) in products"
        :data-test-id="`product-${product.id}`"
        v-bind:key="product.id"
        class="border-b"
        :class="[products.length - 1 === index ? 'border-transparent' : 'border-gray-400 dark:border-gray-600']"
      >
        <div
          class="p-3 flex justify-between items-center bg-white bg-opacity-40 dark:border-transparent dark:bg-opacity-5"
        >
          <span class="text-gray-700 dark:text-gray-300">{{ product.name }}</span>
          <Button @click="addToCart(product)" button-type="secondary" button-size="sm">add to cart</Button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from '@/components/atoms/button'
import Heading from '@/components/atoms/heading'

import { products } from '@/api'

export default {
  name: 'products-index',
  components: {
    Button,
    Heading,
  },
  data() {
    return {
      isLoading: false,
      products: [],
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions('Cart', ['addToCart']),
    async fetchProducts() {
      this.updateIsLoading(true)
      await products
        .getAll()
        .then((response) => this.setProducts(response))
        .catch((error) => {
          this.$breadstick.notify(`⚠️ ${error.message}`, {
            position: 'bottom-right',
          })
        })
        .finally(() => this.updateIsLoading(false))
    },

    setProducts(products) {
      this.products = products
    },

    updateIsLoading(status) {
      this.isLoading = status
    },
  },
}
</script>
