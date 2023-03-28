<template>
  <div class="slot-slider">
    <Carousel class="slot-slider__slider max-container" :settings="settings" :breakpoints="breakpoints" :touchDrag="true">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="slot-slider__item">
          <img :src="slide.bgImage" alt="img">
          <img :src="slide.image" :alt="slide.alt">
          <h4 class="slot-slider__item--heading">{{ slide.title }}</h4>
        </div>
        <div class="">
          
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
    // carousel settings
    settings: {
      itemsToShow: 2.1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      500: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 700px and up
      800: {
        itemsToShow: 4.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 6,
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
