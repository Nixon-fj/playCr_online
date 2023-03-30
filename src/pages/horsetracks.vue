<template>
    <heroBanner :bgimage="bgimage" :image="image" altImage="Slider image" title="RACEBOOK TRACKS" />
    <section class="casino-games">
        <div class="casino-information-container">
            <h2>{{ title }}</h2>
            <p>{{ subTitle }}</p>
        </div>
        <div class="casino-games__layout">
            
                <details class="container">
                <summary class="title">UNITED STATES</summary>
                <div class="horsetracks-grid">
                    <div>
                        <h3>Thoroughbred</h3>
                        <ul>
                            <li>
                                D Albuquerque
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Thoroughbred</h3>
                        <ul>
                            <li>
                                D Albuquerque
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Thoroughbred</h3>
                        <ul>
                            <li>
                                D Albuquerque
                            </li>
                        </ul>
                    </div>
                </div>
            </details>
            
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

    setup: () => {
        /* Hero Banner Variables */
        const bgimage = require("@/assets/images/home/slider_horses-imgs.jpg")
        const image = require("@/assets/images/Racebook Tracks/horse_image.png")

        let title = "PLAYCR.ONLINE RACEBOOK OFFERS WORLD-CLASS HORSE RACING FROM AROUND THE WORLD!"
        let subTitle = "Bet the Breeders Cup, famous Australian tracks, the Hong Kong Jockey Club or even your local racetrack. Place your bets all the way up to post time using your desktop, tablet or phone. Wager on Thoroughbred or Quarter Horses, Harness and Greyhounds under the same account. PLAYCR online horse racebook also offers full track odds, exotics, and money back on losses. Why wait, bet the ponies today!"

        return {
            title,
            subTitle,
            bgimage,
            image
        };
    },

};
</script>