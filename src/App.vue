<template>
  <div>
    <div class="dark:bg-black dark:bg-opacity-50 py-4 dark:text-white">
      <div class="mx-auto max-w-screen-xl">
        <header class="flex justify-between">
          <div>eaki store</div>
          <nav class="">
            <router-link class="mx-2" to="products">products</router-link>
          </nav>
          <div>cart</div>
        </header>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
