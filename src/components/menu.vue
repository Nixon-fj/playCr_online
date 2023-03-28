<template>
  <div class="hamburger-menu">
    <button class="hamburger-menu__button" @click="isActive = !isActive" :class="{ 'is-active': isActive }">
      <span class="material-symbols-rounded header-content__icon">menu</span>
    </button>
    <ul class="hamburger-menu__list" :class="{ 'is-active': isActive }">
      <button @click="isActive = !isActive" class="hamburger-menu__close-button" aria-label="Cerrar menú"><span class="material-symbols-rounded">cancel</span></button>
      <li class="hamburger-menu__item" @click="isActive = !isActive" v-for="(route, index) in routes" :key="index">
        <router-link :to="route.route">{{ route.route }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      isActive: false,
      routes: [
        {
          route      :  '/'
        },
        {
          route      :  'sportsbook'
        },
        {
          route      :  'racebook'
        },
        {
          route      :  'live betting'
        },
        {
          route      :  'casino'
        },
      ]
    };

  },
};
</script>
