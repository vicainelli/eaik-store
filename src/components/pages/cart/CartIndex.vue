<template>
  <div>
    <Heading>Cart</Heading>
    <div v-if="getCartLength < 1">
      <div class="p-3 text-center">
        <div>
          <p class="dark:text-white">The cart is empty</p>
          <router-link class="dark:text-white" to="products">go to the products page</router-link>
        </div>
      </div>
    </div>

    <div v-else>
      <div
        class="bg-white bg-opacity-70 dark:bg-white dark:bg-opacity-5 mb-4 p-4 rounded"
        v-for="itemCart in getCart"
        :key="itemCart.id"
      >
        <div class="flex items-center justify-between">
          <div>
            <span class="text-gray-700 dark:text-white text-lg">{{ itemCart.name }}</span>
          </div>
          <div>
            <div class="flex items-center">
              <div v-if="itemCart.quantity >= 2">
                <button
                  @click="removeFromCart({ id: itemCart.id, quantity: 1 })"
                  class="flex text-gray-700 dark:text-yellow-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                class="
                  mx-2
                  w-12
                  text-sm
                  p-1
                  rounded
                  bg-gray-300
                  dark:bg-white dark:bg-opacity-60
                  text-center text-gray-700
                "
              >
                {{ itemCart.quantity }}
              </div>
              <div>
                <button @click="addToCart(itemCart)" class="flex text-gray-700 dark:text-yellow-500">
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
                <Button @click="removeFromCart(itemCart)" button-type="secondary" button-size="sm">remove</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <Button button-type="primary" @click="toOrder">to order</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Heading from '@/components/atoms/heading'
import Button from '@/components/atoms/button'
import { articles } from '@/api'

export default {
  name: 'cart-index',
  components: {
    Button,
    Heading,
  },

  computed: {
    ...mapGetters('Cart', ['getCart', 'getCartLength']),
  },
  methods: {
    ...mapActions('Cart', ['addToCart', 'removeFromCart']),
    async toOrder() {
      const articlesToOrder = []
      this.getCart.forEach((itemCart) => {
        itemCart.articles.forEach((article) => {
          if (!articlesToOrder.find((item) => item.articleId === article.id)) {
            articlesToOrder.push({ articleId: article.id, amount: itemCart.quantity * article.amountRequired })
          } else {
            articlesToOrder.find((item) => item.articleId === article.id).amount +=
              itemCart.quantity * article.amountRequired
          }
        })
      })

      await articles
        .getBulk(articlesToOrder)
        .then((res) => res.map((r) => r.data))
        .then((articles) => {
          articles.find((article) => article.id === 1)

          const inventoryVsOrder = this.isInventoryHandleTheOrder(articles, articlesToOrder)

          if (!inventoryVsOrder.status) {
            debugger
            this.$breadstick.notify(`⚠️ ${inventoryVsOrder.article.name} has not enough amount in stock`, {
              position: 'bottom-right',
            })
            return
          }

          // TODO call the `sales` endpoint with the articles to order
          this.$breadstick.notify('call the sales endpoint with the articles to order')
          return articles
        })
        .catch((error) => {
          debugger
          this.$breadstick.notify(`⚠️ ${error.message}`, {
            position: 'bottom-right',
          })
        })
    },

    isInventoryHandleTheOrder(articlesOnInventory, articlesToOrder) {
      // * Loop through the articles and check if the amount is available
      for (let i = 0; i < articlesOnInventory.length; i++) {
        const article = articlesOnInventory[i]
        const amountToOrder = articlesToOrder.find((i) => article.id === i.articleId).amount
        // * IF some article has not enough stock, then we should not order it
        if (article.amountInStock < amountToOrder) {
          return {
            status: false,
            article,
          }
        }
      }
      return {
        status: true,
        article: null,
      }
    },
  },
}
</script>
