<template>
    <heroBanner :bgimage="bgimage" :image="image" altImage="Slider image" title="RACEBOOK TRACKS" />
    <section class="casino-games">
        <div class="casino-information-container" v-for="(data, index) in dataList.rules_body" :key="index">

            <h2 v-if="data.Subtitle != undefined">{{ getTitle(data.Subtitle) }}</h2>
            <p v-else>{{ getTexto(data) }}</p>

        </div>
        <div class="casino-games__layout" id="accesos">

            <ul v-for="(track, index) in dataList.section_horse_contry" :key="index">
                <li class="horsetracks__container">
                    <input type="checkbox" checked>
                    <i class="chevron"></i>
                    <p class="horsetracks__container--tab"><img :src=track.imgFlag><span>{{ track.title_HorseContry }}</span></p>
                    <div class="horsetracks__grid contAcordeon">
                        <div v-for="(info, Itemindex) in track.tracks_container" :key="Itemindex">
                            <div class="horsetracks__grid--card">
                                <h3 class="horsetracks__grid--title">{{ info.title_track }}</h3>
                                <ul class="horsetracks__grid--content" v-if="info.list_track.length">
                                    <li v-for="(item, i) in info.list_track" :key="i">{{ item }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import HeroBanner from "@/components/heroBanner.vue";

export default {
    // eslint-disable-next-line
    name: "Horse tracks",
    components: {
        HeroBanner,
    },

    data: () => {
        /* Hero Banner Variables */
        const bgimage = require("@/assets/images/home/slider_horses-imgs.jpg");
        const image = require("@/assets/images/Racebook Tracks/horse_image.png");

        // siteName
        const nameSite = "PLAYCR.ONLINE";

        const getTexto = (desc) => {
            const dato = desc;
            const newName = dato.replace('Title_Sitio', `${nameSite}`);
            return newName;
        };
        const getTitle = (desc) => {
            const dato = desc;
            const newName = dato.replace('Title_Sitio.AG', `${nameSite}`);
            return newName;
        };

        return {
            bgimage,
            image,
            dataList: [],
            getTexto,
            getTitle
        };

    },
    async created() {
        const response = await fetch(process.env.VUE_APP_API_URL + '?fileName=rules_horse');
        this.dataList = await response.json();
        console.log(this.dataList)
    }

};
</script>