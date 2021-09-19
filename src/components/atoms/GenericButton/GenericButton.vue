<template>
  <button :data-test-id="id" class="uppercase tracking-wide p-2 bg-gray-300 rounded">{{ label }}</button>
</template>
<script>
export default {
  name: 'generic-button',
  props: {
    id: String,
    label: String,
  }
}
</script>
