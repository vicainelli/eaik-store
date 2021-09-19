<template>
  <div>
    <h1 class="text-2xl mb-2">Users</h1>
    <loading-spinner v-if="getIsLoading" size="md" />
    <ul v-else data-test-id="users">
      <li v-for="user in getUsers" :data-test-id="`user-${user.id}`" v-bind:key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Spinner } from '@/components/atoms/loading'

export default {
  name: 'users-index',
  components: {
    'loading-spinner': Spinner,
  },
  created() {
    this.fetchUsers()
  },
  computed: {
    ...mapGetters('Users', ['getUsers', 'getIsLoading']),
  },
  methods: {
    ...mapActions('Users', ['fetchUsers']),
  },
}
</script>
