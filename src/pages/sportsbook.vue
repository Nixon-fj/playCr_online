<template>
  <iframe title="sportbook" style="border:none;" class="m-auto p-auto d-flex" :src="`https://betslip.${BackEndUrl}/mainbk/classicmain`" name="iframe_cards" width="100%" height="900px"></iframe>
</template>

<script>
  export default {
    name: "SportsBookPage",

    setup:() => {
      const BackEndUrl = "playcr.online";
      
      return {
        BackEndUrl,
      }
    },
  }
</script>