<template>
  <hero-slider/>
  <slot-slider/>
</template>

<script>
  import HeroSlider from "@/components/hero-slider.vue"
  import SlotSlider from '@/components/slots-slider.vue'

  export default {
    name: "PageHome",
    components: {
      HeroSlider,
      SlotSlider
    },
    setup:() => {
    },
  }
</script>