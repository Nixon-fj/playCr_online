<template>
  <header-component/>
  <router-view/>
  <footer-component/>
</template>

<script>
import headerComponent from "@/components/header.vue"
import FooterComponent from "@/components/footer.vue"

export default {
  name: 'App',
  components: {
    headerComponent,
    FooterComponent,
  }
}
</script>
