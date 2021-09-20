<template>
  <div>
    <Header />
    <div class="mx-auto max-w-screen-xl">
      <div class="mx-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/organisms/header'

export default {
  name: 'app',
  components: {
    Header,
  },
}
</script>
