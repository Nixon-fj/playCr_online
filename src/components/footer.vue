<template>
  <div class="mobile-nav-container">
        <div class="mobile-nav-container-content">
          <router-link class="mobile-nav-items" v-for="(option,index) in options" :key="index" :to="option.route">
            <div class="mobile-nav-img-container"><img :src="option.img" :alt="option.alt" width="50" height="50"></div>
            <span>{{option.name}}</span></router-link>
        </div>
    </div>
  <footer class="footer">
    <div class="footer-content">
      <ul class="footer-content__list">
        <li class="footer-content__list--item" @click="isActive = !isActive" v-for="(route, index) in routes" :key="index">
          <router-link :to="route.route">{{ route.name }}</router-link>
        </li>
        <li class="footer-content__list--item"><a href="https://adm.playcr.online/home/landing" target="_blank">agents</a></li>
        <li class="footer-content__list--item"><a href="https://agents.playcr.online/AgentSiteV2/" target="_blank">agents classic</a></li>
        <li class="footer-content__list--item"><p>1-866-383-4647</p></li>
        <li class="footer-content__list--item"><p>1-888-606-4182</p></li>
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
            route      :  'Sports',
            name       : 'Sportsbook'
          },
          {
            route      :  'racebook',
            name       : 'Racebook'
          },
          {
            route      :  'live-betting',
            name       : 'Live Betting'
          },
          {
            route      :  'casino',
            name       : 'casino'
          },
          {
            route      :  'House-rules',
            name       : 'House rules'
          },
          {
            route      :  'sport-rules',
            name       : 'sport rules'
          },
          {
            route      :  'horse-tracks',
            name       : 'horse tracks'
          }
        ],
        options:[
          {
            route 	   : 'Sports',
            img        :  require('../assets/images/icons/sports.svg'),
            alt        :  'sportsbook',
            name       :  'SPORTS'
          },
          {
            route 	   : 'live-betting',
            img        :  require('../assets/images/icons/live.svg'),
            alt        :  'live betting',
            name       :  'LIVE BETTING'
          },
          {
            route 	   : 'casino',
            img        :  require('../assets/images/icons/casino.svg'),
            alt        :  'casino',
            name       :  'CASINO'
          },
          {
            route 	   : 'props-builder',
            img        :  require('../assets/images/icons/icon-props.svg'),
            alt        :  'props builder',
            name       :  'PROPS BUILDER'
          },
          {
            route 	   : 'racebook',
            img        :  require('../assets/images/icons/racebook.svg'),
            alt        :  'racebook',
            name       :  'RACEBOOK'
          }
        ]
      }
    },
  };
</script>