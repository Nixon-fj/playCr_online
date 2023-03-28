<template>
  <div class="live-wager__container">
    <h2 class="live-wager__heading heading__content max-container">Live Wager</h2>
    <div class="live-wager max-container">
      <div class="live-wager__item" v-for="(wagers, index) in wager" :key="index">
        <img class="live-wager__item--bg" :src="wagers.bgImage" alt="">
        <div class="live-wager__item--img">
          <img class="" :src="wagers.image" alt="">
        </div>
      </div>
    </div>
  </div>
  <agent-button/>
</template>

<script>
  export default {
    name: "LiveWager",
    setup:() => {
      let wager = [
        {
          image      :  require('@/assets/images/live-wager/LW_01.png'),
          bgImage    :  require('@/assets/images/live-wager/bg_lw-1.jpg'),
          alt        :  'Lorem ipsum'
        },
        {
          image      :  require('@/assets/images/live-wager/LW_02.png'),
          bgImage    :  require('@/assets/images/live-wager/bg_lw-2.jpg'),
          alt        :  'Lorem ipsum'
        },
        {     
          image      :  require('@/assets/images/live-wager/LW_03.png'),
          bgImage    :  require('@/assets/images/live-wager/bg_lw-2.jpg'),
          alt        :  'Lorem ipsum'
        }
      ]
      return {
        wager,
      }
    },
  }
</script>