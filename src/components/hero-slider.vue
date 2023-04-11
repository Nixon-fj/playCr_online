<template>
  <Carousel :autoplay="5000" :transition="1000" :wrapAround="true" :touchDrag="false">
    <Slide v-for="(slide, index) in slides" :key="index">
      <div class="carousel__item hero-slider">
        <div class="hero-slider__info">
          <div class="hero-slider__info--container">
            <div class="hero-slider__text">
              <p class="hero-slider__text-subtitle">{{ slide.subtitle }}</p>
              <h1 class="hero-slider__text-title">{{ slide.title }}</h1>
            </div>
            <div class="hero-slider__slider-img">
              <img :src="slide.sliderImg" alt="image" width="450" height="430">
            </div>
          </div>
        </div>
        <div class="hero-slider__bg">
          <img :src="slide.bgImage" alt="image" width="1920" height="440">
        </div>
      </div>
    </Slide>

    <template #addons>
      <div class="hero-slider__pagination">
        <Pagination/>
      </div>
    </template>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

export default {
  name: 'Hero-Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      slides: [
        {
          title      :  'BET ON SPORTS',
          subtitle   :  'LIVE WAGER',
          bgImage    :  require('../assets/images/home/slider_sports-imgs.jpg'),
          sliderImg  :  require('../assets/images/home/player.png')
        },
        {
          title      :  'RACEBOOK',
          subtitle   :  '',
          bgImage    :  require('../assets/images/home/slider_horses-imgs.jpg'),
          sliderImg  :  require('../assets/images/home/horse.png')
        },
        {
          title      :  'ONLINE CASINO',
          subtitle   :  '',
          bgImage    :  require('../assets/images/home/slider_casino-imgs.jpg'),
          sliderImg  :  require('../assets/images/home/casino elemnts.png')
        }
      ]
    }
  }
}
</script>
