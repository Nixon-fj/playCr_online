<template>
  <iframe title="sportbook" class="m-auto p-auto d-flex" :src="`https://betslip.${BackEndUrl}/mainbk/classicmain`" name="iframe_cards" width="100%" height="900px"></iframe>
</template>

<script>
  export default {
    name: "SportsBookPage",

    setup:() => {
      const BackEndUrl = "wager911.online";
      
      return {
        BackEndUrl,
      }
    },
  }
</script>