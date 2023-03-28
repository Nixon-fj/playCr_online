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
          image      :  require('@/assets/images/home/slider_sports-imgs.jpg'),
          bgImage    :  require('@/assets/images/home/slider_sports-imgs.jpg'),
          alt        :  'Lorem ipsum'
        },
        {
          image      :  require('@/assets/images/home/slider_sports-imgs.jpg'),
          bgImage    :  require('@/assets/images/home/slider_sports-imgs.jpg'),
          alt        :  'Lorem ipsum'
        },
        {     
          image      :  require('@/assets/images/home/slider_sports-imgs.jpg'),
          bgImage    :  require('@/assets/images/home/slider_sports-imgs.jpg'),
          alt        :  'Lorem ipsum'
        }
      ]
      return {
        wager,
      }
    },
  }
</script>