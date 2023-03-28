<template>
  <footer class="footer">
    <div class="footer-content">
      <ul class="footer-content__list">
        <li class="footer-content__list--item" @click="isActive = !isActive" v-for="(route, index) in routes" :key="index">
          <router-link :to="route.route">{{ route.route }}</router-link>
        </li>
      </ul>
    </div>
    </footer>
</template>

<script>
  export default {
    name: "FooterComponent",
    setup() {
      return {
        routes: [
          {
            route      :  'sportsbook'
          },
          {
            route      :  'live betting'
          },
          {
            route      :  'racebook'
          },
          {
            route      :  'casino'
          },
          {
            route      :  'House rules'
          },
          {
            route      :  'sport rules'
          },
          {
            route      :  'horse tracks'
          },
          {
            route      :  'Privacy policy'
          },
          {
            route      :  'terms and conditions'
          },
          {
            route      :  'responsible gaming'
          }
        ]
      }
    },
  };
</script>
