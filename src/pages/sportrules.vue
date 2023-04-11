<template>
    <div class="sport-rules max-container">
        <h1 class="sport-rules__heading">{{ dataList.title_header }}</h1>
        <div v-for="(data, index) in dataList.rules_body" :key="index">
            <h2 class="sport-rules__subtitle" v-if="data.Subtitle">{{ data.Subtitle }}</h2>
            <ul v-else-if="data.list">
                <li class="sport-rules__paragraph" v-for="(element, index) in data.list" :key="index">{{ element.desc }}
                </li>
            </ul>
            <div class="sport-rules__table-sport" v-else-if="data.table_rule">
                <div class="sport-rules__table-sport--item" v-for="(element, index) in data.table_rule.table_info"
                    :key="index">
                    <div class="sport-rules__table-sport--item-one">
                        {{ tableKeys[index] }}
                    </div>
                    <div class="sport-rules__table-sport--item-two">
                        {{ tableNames[index] }}
                    </div>
                </div>
            </div>
            <div v-else-if="data.section_sports">
                <div class="sport-rules__dropdown" v-for="(sport, index) in data.section_sports" :key="index">
                    <div class="sport-rules__dropdown--item" @click="toggleSection(index)"
                        :class="{ active: isActive(index) }">
                        <h2 class="sport-rules__dropdown--heading" v-if="sport.title_sport">{{ sport.title_sport }}</h2>
                        <span class="arrow material-symbols-rounded"
                            :class="{ 'arrow-down': isActive(index) }">expand_more</span>
                    </div>
                    <div class="sport-rules__details" v-show="isActive(index)" v-if="sport.details_sport">
                        <div v-for="(element, index) in sport.details_sport" :key="index">
                            <div v-if="element.list">
                                <ol class="sport-rules__details--list" v-if="element.list[0].type == 'word'" type="A">
                                    <template v-for="(li, index) in element.list" :key="index">
                                        <li class="sport-rules__details--list-item" v-html="li.desc"></li>
                                        <template v-if="li.list.length > 0">
                                            <ol class="sport-rules__details--list" v-if="li.list[0].type == 'word'" type="A">
                                                <li class="sport-rules__details--list-item" v-for="(li, index) in  li.list"
                                                    :key="index">
                                                    <span v-if="li.desc" v-html="li.desc"></span>
                                                </li>
                                            </ol>
                                        </template>
                                        <template v-if="li.list.length > 0">
                                            <ol class="sport-rules__details--list" v-if="li.list[0].type == 'number'">
                                                <li class="sport-rules__details--list-item" v-for="(li, index) in  li.list"
                                                    :key="index">
                                                    <span v-if="li.desc" v-html="li.desc"></span>
                                                </li>
                                            </ol>
                                        </template>
                                        <template v-if="li.list.length > 0">
                                            <ul class="sport-rules__details--list" v-if="li.list[0].type == 'point'">
                                                <li class="sport-rules__details--list-item" v-for="(li, index) in  li.list"
                                                    :key="index">
                                                    <span v-if="li.desc" v-html="li.desc"></span>
                                                </li>
                                            </ul>
                                        </template>
                                    </template>
                                </ol>
                                <ol class="sport-rules__details--list" v-if="element.list[0].type == 'number'">
                                    <template v-for="(li, index) in element.list" :key="index">
                                        <li class="sport-rules__details--list-item" v-html="li.desc"></li>
                                        <template v-if="li.list.length > 0">
                                            <ol class="sport-rules__details--list" v-if="li.list[0].type == 'word'" type="A">
                                                <li class="sport-rules__details--list-item" v-for="(li, index) in  li.list"
                                                    :key="index">
                                                    <span v-if="li.desc" v-html="li.desc"></span>
                                                </li>
                                            </ol>
                                        </template>
                                        <template v-if="li.list.length > 0">
                                            <ol class="sport-rules__details--list" v-if="li.list[0].type == 'number'">
                                                <li class="sport-rules__details--list-item" v-for="(li, index) in  li.list"
                                                    :key="index">
                                                    <span v-if="li.desc" v-html="li.desc"></span>
                                                </li>
                                            </ol>
                                        </template>
                                        <template v-if="li.list.length > 0">
                                            <ul class="sport-rules__details--list" v-if="li.list[0].type == 'point'">
                                                <li class="sport-rules__details--list-item" v-for="(li, index) in  li.list"
                                                    :key="index">
                                                    <span v-if="li.desc" v-html="li.desc"></span>
                                                </li>
                                            </ul>
                                        </template>
                                    </template>
                                </ol>
                                <ul class="sport-rules__details--list" v-else-if="element.list[0].type == 'point'">
                                    <template v-for="(li, index) in element.list" :key="index">
                                        <li class="sport-rules__details--list-item" v-html="li.desc"></li>
                                        <template v-if="li.list.length > 0">
                                            <ol class="sport-rules__details--list" v-if="li.list[0].type == 'word'" type="A">
                                                <li class="sport-rules__details--list-item" v-for="(li, index) in  li.list"
                                                    :key="index">
                                                    <span v-if="li.desc" v-html="li.desc"></span>
                                                </li>
                                            </ol>
                                        </template>
                                        <template v-if="li.list.length > 0">
                                            <ol class="sport-rules__details--list" v-if="li.list[0].type == 'number'">
                                                <li class="sport-rules__details--list-item" v-for="(li, index) in  li.list"
                                                    :key="index">
                                                    <span v-if="li.desc" v-html="li.desc"></span>
                                                </li>
                                            </ol>
                                        </template>
                                        <template v-if="li.list.length > 0">
                                            <ul class="sport-rules__details--list" v-if="li.list[0].type == 'point'">
                                                <li class="sport-rules__details--list-item" v-for="(li, index) in  li.list"
                                                    :key="index">
                                                    <span v-if="li.desc" v-html="li.desc"></span>
                                                </li>
                                            </ul>
                                        </template>
                                    </template>
                                </ul>
                            </div>
                            <h3 v-else-if="element.Subtitle" v-html="element.Subtitle"></h3>
                            <h4 v-else-if="element.Subtitle_Sub_Nivel" v-html="element.Subtitle_Sub_Nivel"></h4>
                            <div class="tables-sport-rules" v-else-if="element.table_colums">
                                <table>

                                    <tbody>
                                        <tr class="colum-4">
                                            <template v-for="(element, index) in element.table_colums.header" :key="index">
                                                <th class="sport-rules__details--list-item">
                                                    <span v-html="element"></span>
                                                </th>
                                            </template>
                                        </tr>
                                        <tr class="colum-4">
                                            <template v-for="(element, index) in element.table_colums.item_li" :key="index">
                                                <td class=" sport-rules__details--list-item">
                                                    <span v-html="element"></span>
                                                </td>
                                            </template>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="sport-rules__paragraph" v-else v-html="element"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sport-rules__paragraph" v-else>{{ data }}</div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    // eslint-disable-next-line
    name: "Sport Rules",

    setup: () => {

        const state = reactive({
            activeSections: [],
        });

        const toggleSection = (index) => {
            const currentIndex = state.activeSections.indexOf(index);
            if (currentIndex === -1) {
                // Si la sección seleccionada no está abierta, cerramos todas las secciones abiertas y abrimos la seleccionada.
                state.activeSections = [index];
            } else {
                // Si la sección seleccionada ya está abierta, simplemente la cerramos.
                state.activeSections.splice(currentIndex, 1);
            }
        };

        const isActive = (index) => {
            return state.activeSections.includes(index);
        };

        return {
            toggleSection,
            isActive,
        };
    },
    data: () => {

        return {
            tableKeys: [],
            tableNames: [],
            dataList: [],
        };
    },
    async created() {
        const response = await fetch(process.env.VUE_APP_API_URL + '?fileName=rules_sports_new');
        this.dataList = await response.json();

        if (this.dataList.length != 0) {
            for (let index = 0; index < this.dataList.rules_body[8].table_rule.table_info.length; index++) {
                let tablekey = Object.keys(this.dataList.rules_body[8].table_rule.table_info[index])[0];
                this.tableKeys.push(tablekey);
            }
        }
        if (this.dataList.length != 0) {
            for (let index = 0; index < this.dataList.rules_body[8].table_rule.table_info.length; index++) {
                let tableName = this.dataList.rules_body[8].table_rule.table_info[index][this.tableKeys[index]];
                this.tableNames.push(tableName);
            }
        }

    }
};
</script>