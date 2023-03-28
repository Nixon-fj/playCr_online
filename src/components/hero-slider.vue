<template>
  <Carousel :autoplay="2000" :transition="1000" :wrapAround="true" :touchDrag="false">
    <Slide v-for="(slide, index) in slides" :key="index">
      <div class="carousel__item hero-slider">
        <div class="hero-slider__info--img">
          <img class="hero-slider__img" :src="slide.image" :alt="slide.alt">
        </div>
        <div class="hero-slider__info">
          <div class="hero-slider__info--container">
            <div class="hero-slider__text">
              <p class="hero-slider__text-subtitle">{{ slide.subtitle }}</p>
              <h1 class="hero-slider__text-title">{{ slide.title }}</h1>
            </div>
            <div class="hero-slider__slider-img">
              <img :src="slide.sliderImg" alt="">
            </div>
          </div>
        </div>
        <div class="hero-slider__bg">
          <img :src="slide.bgImage" :alt="slide.alt">
        </div>
      </div>
    </Slide>

    <template #addons>
      <!-- <Navigation /> -->
      <div class="hero-slider__pagination">
        <Pagination/>
      </div>
    </template>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, /* Navigation */ Pagination, Slide } from 'vue3-carousel'

export default {
  name: 'Hero-Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    // Navigation,
  },
  data() {
    return {
      slides: [
        {
          title      :  'First Slide',
          subtitle   :  'Lorem ipsum',
          image      :  require('../assets/images/element-01.png'),
          alt        :  'Lorem ipsum',
          bgImage    :  require('../assets/images/slider-01.jpg'),
          sliderImg  :  require('../assets/images/slider-img.png')
        },
        {
          title      :  'Second slide',
          subtitle   :  'Lorem ipsum',
          image      :  require('../assets/images/element-02.png'),
          alt        :  'Lorem ipsum',
          bgImage    :  require('../assets/images/slider-02.jpg'),
          sliderImg  :  require('../assets/images/slider-img.png')
        },
        {
          title      :  'Third slide',
          subtitle   :  'Lorem ipsum',      
          image      :  require('../assets/images/element-03.png'),
          alt        :  'Lorem ipsum',
          bgImage    :  require('../assets/images/slider-03.jpg'),
          sliderImg  :  require('../assets/images/slider-img.png')
        },
        {
          title      :  'Fourth slide',
          subtitle   :  'Lorem ipsum',     
          image      :  require('../assets/images/element-04.png'),
          alt        :  'Lorem ipsum',
          bgImage    :  require('../assets/images/slider-04.jpg'),
          sliderImg  :  require('../assets/images/slider-img.png')
        }
      ]
    }
  }
}
</script>
