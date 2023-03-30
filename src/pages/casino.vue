<template>
  <heroBanner :bgimage="bgimage" :image="image" altImage="Slider image" title="CASINO ONLINE"/>
  <section class="casino-games">
    <div class="casino-information-container">
      <h2>{{ title }}</h2>
      <p>{{ subTitle }}</p>
    </div>
    <div class="casino-games__layout">
      <div class="casino-games__layout--col1">
        <div class="casino-games__layout--grid">
          <div class="casino-games__layout--card" @click="openModal" v-for="(card, index) in cards" :key="index">
            <img class="casino-games__layout--card-img" :src="card.img" :alt="card.alt" />
            <h3 class="casino-games__layout--h3">{{ card.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroBanner from "@/components/heroBanner.vue";

export default {
  name: "CasinoPage",
  components: {
    HeroBanner,
  },

  setup: () => {
    /* Hero Banner Variables */
    const bgimage = require("@/assets/images/casino/slider-backgr.jpg")
    const image = require("@/assets/images/casino/Casino_elements.png")

    let title = "PLAYCR.ONLINE REAL MONEY CASINO DEALS UP THE LATEST AND GREATEST CASINO SOFTWARE FOR PLAYERS TO ENJOY."
    let subTitle = "Experience the same excitement as you would in Vegas, Atlantic City or Monte Carlo in the comfort of your home, office or on the road. Players looking to only play casino games can take advantage of our huge 100% casino bonus offer. Start your winning streak today by joining PLAYCR.ONLINE."

    return {
      title,
      subTitle,
      bgimage,
      image
    };
  },

  data() {
    return {

      cards: [
        {
          title: 'Live games',
          img: require('@/assets/images/casino/live-game.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'Table games',
          img: require('@/assets/images/casino/table-games.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'Slots',
          img: require('@/assets/images/casino/slots.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'Slots 3D',
          img: require('@/assets/images/casino/3d-slots.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'Video poker',
          img: require('@/assets/images/casino/video-poker.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'Virtual sports',
          img: require('@/assets/images/casino/virtual-sports.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'bingo',
          img: require('@/assets/images/casino/bingo.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'keno',
          img: require('@/assets/images/casino/keno.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'scratch cards',
          img: require('@/assets/images/casino/scratch.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'Fixed odds',
          img: require('@/assets/images/casino/fixed-odds.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'other games',
          img: require('@/assets/images/casino/other-games.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'blackjack',
          img: require('@/assets/images/casino/blackjack.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'roulette',
          img: require('@/assets/images/casino/roulette.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'poker',
          img: require('@/assets/images/casino/poker.png'),
          alt: 'Lorem ipsum',
        },
        {
          title: 'rummy',
          img: require('@/assets/images/casino/rummy.png'),
          alt: 'Lorem ipsum',
        }
      ]
    }
  }
};
</script>