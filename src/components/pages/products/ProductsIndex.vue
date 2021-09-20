<template>
  <div>
    <Heading>Products</Heading>
    <div v-if="getIsLoading">loading</div>
    <ul v-else data-test-id="products" class="border rounded border-gray-400 dark:border-gray-600">
      <li
        v-for="(product, index) in getProducts"
        :data-test-id="`product-${product.id}`"
        v-bind:key="product.id"
        class="border-b"
        :class="[getProducts.length - 1 === index ? 'border-transparent' : 'border-gray-400 dark:border-gray-600']"
      >
        <div class="p-3 flex justify-between items-center dark:border-transparent dark:bg-white dark:bg-opacity-5">
          <span class="text-gray-700 dark:text-gray-300">{{ product.name }}</span>
          <button
            @click="addToCart(product)"
            class="
              inline-flex
              text-xs
              py-1.5
              px-3
              bg-gray-800
              text-white
              rounded-full
              dark:hover:bg-black dark:hover:bg-opacity-70 dark:bg-gray-900 dark:text-gray-200
              transition-all
              duration-200
            "
          >
            Add to cart
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Heading from '@/components/atoms/heading'

export default {
  name: 'products-index',
  components: {
    Heading,
  },
  created() {
    this.fetchProducts()
  },
  computed: {
    ...mapGetters('Products', ['getProducts', 'getIsLoading']),
  },
  methods: {
    ...mapActions('Products', ['fetchProducts']),
    ...mapActions('Cart', ['addToCart']),
  },
}
</script>
