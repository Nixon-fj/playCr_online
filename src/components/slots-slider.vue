<template>
  <div class="slot-slider">
    <div class="slot-slider__text max-container">
      <h2 class="slot-slider__text-heading heading__content">Slots</h2>
      <a class="slot-slider__text-anchor">See all</a>
    </div>
    <Carousel class="slot-slider__slider max-container" :settings="settings" :breakpoints="breakpoints" :touchDrag="true">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="slot-slider__item">
          <img :src="slide.image" :alt="slide.alt">
          <h4 class="slot-slider__item--heading">{{ slide.title }}</h4>
          <p class="slot-slider__item--caption">{{ slide.subtitle }}</p>
        </div>
        <div class="carousel__item slot-slider__card">
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
        title      :  'Game name',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/imgs-pequ/baseball.jpg'),
        alt        :  'Lorem ipsum',
      },
      {
        title      :  'Game name',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/imgs-pequ/baseball.jpg'),
        alt        :  'Lorem ipsum',
      },
      {
        title      :  'Game name',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/imgs-pequ/baseball.jpg'),
        alt        :  'Lorem ipsum',
      },
      {
        title      :  'Game name',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/imgs-pequ/baseball.jpg'),
        alt        :  'Lorem ipsum',
      }
      ,
      {
        title      :  'Game name',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/imgs-pequ/baseball.jpg'),
        alt        :  'Lorem ipsum',
      },
      {
        title      :  'Game name',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/imgs-pequ/baseball.jpg'),
        alt        :  'Lorem ipsum',
      }
    ]
  }),
})
</script>
