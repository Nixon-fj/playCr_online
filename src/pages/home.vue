<template>
  <hero-slider/>
  <slot-slider/>
  <live-wagering/>
  <agent-button/>
</template>

<script>
  import HeroSlider from "@/components/hero-slider.vue"
  import AgentButton from "@/components/agent-button.vue"
  import LiveWagering from '@/components/live-wagering.vue'
  import SlotSlider from '@/components/slots-slider.vue'

  export default {
    name: "PageHome",
    components: {
      HeroSlider,
      SlotSlider,
      AgentButton,
      LiveWagering,
    },
    setup:() => {
    },
  }
</script>