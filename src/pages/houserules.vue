<template>
    <div class="rules-page max-container">
        <h1 class="rules-page__heading">{{ dataList.title_header }}</h1>
        <div class="rules-page__list" v-for="rule in dataList.rules_body" :key="rule.desc">
            <ol class="rules-page__sublist" v-if="rule.list.length > 0">
                <li class="rules-page__sublist-item" v-for="subrule in rule.list" :key="subrule.desc">
                    <p v-html="getTexto(subrule.desc)"></p>
                    <ol type="A" v-if="subrule.list.length > 0">
                        <li v-for="subsubrule in subrule.list" :key="subsubrule.desc">{{ subsubrule.desc }}</li>
                    </ol>
                </li>
            </ol>
        </div>
    </div>
</template>
<script>
import { reactive, watch } from 'vue';

export default {
    // eslint-disable-next-line
    name: "House Rules",

    setup() {
        const state = reactive({
            dataList: {},
            valorReemplazo: "Play CR"
        });

        const getTexto = (desc) => {
            const dato = desc;
            const nuevaCadena = dato.replace(/Title_Sitio/g, `${state.valorReemplazo}`);
            return nuevaCadena;
        };

        const dataList = reactive([]);

        const loadData = async () => {
            const response = await fetch(process.env.VUE_APP_API_URL + '?fileName=rules_house');
            const data = await response.json();
            dataList.title_header = data.title_header;
            dataList.rules_body = data.rules_body;
        };

        watch(() => state.valorReemplazo, () => {
            dataList.rules_body.forEach((rule) => {
                rule.list.forEach((subrule) => {
                    subrule.desc = getTexto(subrule.desc);
                });
            });
        });

        loadData();

        return {
            dataList,
            getTexto,
            state
        };
    }
};
</script>