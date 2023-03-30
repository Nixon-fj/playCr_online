<template>
  <div class="slot-slider">
    <Carousel class="slot-slider__slider max-container" :settings="settings" :breakpoints="breakpoints" :touchDrag="true">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="slot-slider__item">
          <img class="slot-slider__item--bg" :src="slide.bgImage" alt="img" width="408" height="234">
          <div class="slot-slider__item--content">
            <p class="slot-slider__item--content--heading">{{ slide.title }}</p>
            <img :src="slide.image" :alt="slide.alt" width="300" height="200">
          </div>
        </div>
      </Slide>
      <template #addons>
        <div class="slot-slider__arrows">
          <Navigation />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'SlotSlider',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    breakpoints: {
      700: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      1000: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
    },

    slides: [
      {
        title      :  'SPORTS',
        image      :  require('@/assets/images/home/player 02.png'),
        bgImage    :  require('@/assets/images/home/sports-Bckgr.jpg'),
        alt        :  'sports',
      },
      {
        title      :  'CASINO',
        image      :  require('@/assets/images/home/casino elemnts 02.png'),
        bgImage    :  require('@/assets/images/home/casino-Bckgr.jpg'),
        alt        :  'casino',
      },
      {
        title      :  'RACEBOOK',
        image      :  require('@/assets/images/home/horse 02.png'),
        bgImage    :  require('@/assets/images/home/horses-Bckgr.jpg'),
        alt        :  'racebook',
      }
    ]
  }),
})
</script>
