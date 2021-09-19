<template>
  <div>
    <h1 class="text-2xl mb-2">Products</h1>
    <loading-spinner v-if="getIsLoading" size="md" />
    <ul v-else data-test-id="products">
      <li v-for="product in getProducts" :data-test-id="`product-${product.id}`" v-bind:key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Spinner } from '@/components/atoms/loading'

export default {
  name: 'products-index',
  components: {
    'loading-spinner': Spinner,
  },
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
