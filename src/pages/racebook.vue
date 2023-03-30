<template>
  <iframe title="racebook" width="100%" height="1500px" id="iframe-signup-page" class="cs-iframe-signup-page" src="https://jefecolchon.com/BOSSWagering/Racebook/InternetBetTaker/?siteid=jazz&amp;lng=en-EN"></iframe>
</template>

<script>
  export default {
    name: "RacebookPage",

    setup:() => {
      const BackEndUrl = "playcr.online";
      
      return {
        BackEndUrl,
      }
    },
  }
</script>