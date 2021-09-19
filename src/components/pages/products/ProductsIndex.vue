<template>
  <div class="p-3">
    <h1 class="text-2xl mb-2 dark:text-yellow-200">Products</h1>
    <div v-if="getIsLoading">loading</div>
    <ul v-else data-test-id="products">
      <li v-for="product in getProducts" :data-test-id="`product-${product.id}`" v-bind:key="product.id">
        <div
          class="
            p-3
            flex
            justify-between
            shadow-md
            mb-4
            border border-gray-50
            rounded-md
            dark:shadow-none dark:border-transparent dark:bg-white dark:bg-opacity-5
          "
        >
          <span class="text-gray-700 dark:text-gray-300">{{ product.name }}</span>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'products-index',
  created() {
    this.fetchProducts()
  },
  computed: {
    ...mapGetters('Products', ['getProducts', 'getIsLoading']),
  },
  methods: {
    ...mapActions('Products', ['fetchProducts']),
  },
}
</script>
