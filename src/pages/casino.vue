<template>
  <iframe title="racebook" width="100%" height="1500px" id="iframe-signup-page" class="cs-iframe-signup-page" src="https://jefecolchon.com/BOSSWagering/Racebook/InternetBetTaker/?siteid=jazz&amp;lng=en-EN"></iframe>
  <!-- <iframe title="sportbook" class="m-auto p-auto d-flex" :src="`https://betslip.${BackEndUrl}/mainbk/classicmain`" name="iframe_cards" width="100%" height="900px"></iframe> -->
</template>

<script>
  export default {
    name: "CasinoPage",

    setup:() => {
      const BackEndUrl = "wager911.online";
      
      return {
        BackEndUrl,
      }
    },
  }
</script>