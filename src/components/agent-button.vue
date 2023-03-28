<template>
  <section class="agent-buttons">
    <a class="primary-button primary-button__classic" :href="agentClassic" target="_blank">agent classic</a>
    <a class="primary-button primary-button__new" :href="agentNew" target="_blank">agent new</a>
  </section>
</template>

<script>
  export default {
    name: "AgentsButtons",
    setup() {
      const agentClassic = "https://agents.bigapple.bet/AgentSiteV2/";
      const agentNew = "https://adm.bigapple.bet/";
      return {
        agentClassic,
        agentNew,
      }
    },
  };
</script>
