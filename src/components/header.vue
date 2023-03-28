<template>
  <header class="header">
    <div class="header-content max-container">
      <div class="header-content__nav">
        <menu-component/>
        <a href="/"><img class="header-content__img" src="../assets/images/home/logo.svg" alt="logo"></a>
      </div>
      <div class="header-content__cta">
        <div class="header-buttons">
          <a href="#" class="btn-login secondary-button secondary-button__betslip" @click="openModal">betslip</a>
        </div>
      </div>
    </div>
    <ModalComponent ref="modal"/>
  </header>
</template>

<script>
  import ModalComponent from '@/components/modal.vue'
  import MenuComponent from '@/components/menu.vue'

  export default {
    name: "HeaderComponent",
    components: {
      ModalComponent,
      MenuComponent
    },
    methods: {
      openModal() {
        this.$refs.modal.openModal();
      }
    },
    setup() {},
  };
</script>
