<template>
  <component
    :is="componentType"
    @click="$emit('click')"
    class="inline-flex font-semibold rounded transition-all duration-200"
    :class="[buttonClasses]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'a-button', // <-- atom-button

  props: {
    buttonType: {
      type: String,
      default: 'primary',
    },
    buttonShape: {
      type: String,
      default: 'rounded',
    },
    buttonSize: {
      type: String,
      default: 'md',
    },
  },
  computed: {
    /**
     * Renders `Link` component if a `href` attribute is applied to the component
     * Renders `RouterLink` component if a `to` attribute is applied to the component, avoids page reload compared to Link with `href`
     * Renders `Action` component if no `href` attrivute is applied to the component
     */
    componentType() {
      if (this.$attrs.href) return 'a'
      if (this.$attrs.to) return 'router-link'
      return 'button'
    },
    buttonClasses() {
      const styles = {
        primary: ['bg-yellow-400', 'text-black', 'text-opacity-70', 'hover:bg-yellow-500'],
        secondary: [
          'text-gray-700',
          'bg-gray-300',
          'dark:bg-gray-800',
          'dark:hover:bg-black',
          'dark:hover:bg-opacity-40',
          'dark:text-gray-200',
        ],
      }

      const sizes = {
        sm: 'text-xs py-1.5 px-2.5',
        md: 'text-sm py-2 px-4',
      }
      return [styles[this.buttonType], sizes[this.buttonSize]]
    },
  },
}
</script>
