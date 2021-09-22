<template>
  <div class="home">
    <ul>
      <li><router-link to="users">users</router-link></li>
      <li><router-link to="products">products</router-link></li>
    </ul>

    <h2 class="uppercase text-2xl text-gray-700 mb-4">Buttons</h2>
    <div class="grid grid-cols-4 gap-4">
      <div class="bg-white dark:bg-opacity-0 border border-transparent dark:border-gray-400 rounded shadow-md">
        <div class="h-20 flex justify-center items-center">
          <Button button-size="sm">Primary</Button>
        </div>
        <div class="text-center p-3 border-t border-gray-400 text-gray-800 dark:text-gray-200 font-mono text-sm">
          primary small
        </div>
      </div>
      <div class="bg-white dark:bg-opacity-0 border border-transparent dark:border-gray-400 rounded shadow-md">
        <div class="h-20 flex justify-center items-center">
          <Button>Primary</Button>
        </div>
        <div class="text-center p-3 border-t border-gray-400 text-gray-800 dark:text-gray-200 font-mono text-sm">
          primary medium
        </div>
      </div>
      <div class="bg-white dark:bg-opacity-0 border border-transparent dark:border-gray-400 rounded shadow-md">
        <div class="h-20 flex justify-center items-center">
          <Button button-size="sm" button-shape="circle">Primary</Button>
        </div>
        <div class="text-center p-3 border-t border-gray-400 text-gray-800 dark:text-gray-200 font-mono text-sm">
          primary small circle
        </div>
      </div>
      <div class="bg-white dark:bg-opacity-0 border border-transparent dark:border-gray-400 rounded shadow-md">
        <div class="h-20 flex justify-center items-center">
          <Button button-shape="circle">Primary</Button>
        </div>
        <div class="text-center p-3 border-t border-gray-400 text-gray-800 dark:text-gray-200 font-mono text-sm">
          primary medium circle
        </div>
      </div>

      <div class="bg-white dark:bg-opacity-0 border border-transparent dark:border-gray-400 rounded shadow-md">
        <div class="h-20 flex justify-center items-center">
          <Button button-type="secondary" button-size="sm">Secondary</Button>
        </div>
        <div class="text-center p-3 border-t border-gray-400 text-gray-800 dark:text-gray-200 font-mono text-sm">
          Secondary small
        </div>
      </div>
      <div class="bg-white dark:bg-opacity-0 border border-transparent dark:border-gray-400 rounded shadow-md">
        <div class="h-20 flex justify-center items-center">
          <Button button-type="secondary">Secondary</Button>
        </div>
        <div class="text-center p-3 border-t border-gray-400 text-gray-800 dark:text-gray-200 font-mono text-sm">
          Secondary medium
        </div>
      </div>
      <div class="bg-white dark:bg-opacity-0 border border-transparent dark:border-gray-400 rounded shadow-md">
        <div class="h-20 flex justify-center items-center">
          <Button button-type="secondary" button-size="sm" button-shape="circle">Secondary</Button>
        </div>
        <div class="text-center p-3 border-t border-gray-400 text-gray-800 dark:text-gray-200 font-mono text-sm">
          Secondary small circle
        </div>
      </div>
      <div class="bg-white dark:bg-opacity-0 border border-transparent dark:border-gray-400 rounded shadow-md">
        <div class="h-20 flex justify-center items-center">
          <Button button-type="secondary" button-shape="circle">Secondary</Button>
        </div>
        <div class="text-center p-3 border-t border-gray-400 text-gray-800 dark:text-gray-200 font-mono text-sm">
          primary medium circle
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/button'
export default {
  name: 'home',
  components: {
    Button,
  },
}
</script>
