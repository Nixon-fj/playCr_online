<template>
  <iframe title="Live betting" class="liveBettingIframe" src="https://plive.jazzsports.ag/live/?skin=mysportsbook#!/sport/2" width="100%" height="900" frameborder="no"></iframe>
</template>

<script>
  export default {
    name: "SportsPage",

    setup:() => {
      const BackEndUrl = "playcr.online";
      
      return {
        BackEndUrl,
      }
    },
  }
</script>