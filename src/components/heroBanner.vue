<template>
  <div class="hero-banner">
    <div class="hero-banner__img">
      <img :src="bgimage">
    </div>
    <div class="hero-banner__content max-container">
      <div class="hero-banner__content-info">
        <h1 class="hero-banner__content-info--heading">{{ title }}</h1>
        <p class="hero-banner__content-info--subtitle">{{ subtitle }}</p>
      </div>
      <div class="hero-banner__content-img">
        <img :src="image" :alt="altImage">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeroBanner",
    props: {
      title: String,
      subtitle: String,
      image: String,
      bgimage: String,
      altImage: String,
    },
  };
</script>
