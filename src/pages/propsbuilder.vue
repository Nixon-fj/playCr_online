<template>
    <iframe title="prop builder" class="liveBettingIframe"
        src="https://bv2.digitalsportstech.com/betbuilder?sb=jazz&amp;theme=looselines" width="100%"
        height="900px"></iframe>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "Props Builder",

    setup: () => {
        const BackEndUrl = "playcr.online";

        return {
            BackEndUrl,
        }
    },
}
</script>