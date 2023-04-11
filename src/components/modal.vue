<template>
  <div class="modal-backdrop" v-if="showModal">
    <div class="modal-content__heading">
      <h3>User login</h3>
      <button class="close-button" @click="closeModal">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
    <div class="modal-content">
      <!-- Contenido de tu modal aquí -->
      <form class="login__form" name="LoginForm" action="javascript:void(0)" onsubmit="BackEndLogin(this); return false">
        <div class="login__form--item">
          <label class="login__form--label" for="username">Username</label>
          <input class="login__form--input" name="username" id="username" type="text" required placeholder="Username"/>
        </div>

        <div class="login__form--item">
          <label class="login__form--label" for="password">Password</label>
          <input class="login__form--input" type="password" name="password" id="password" required placeholder="Password"/>
        </div>
        
        <div class="text-center mt-2"> 
          <span name="msj_loading" id="id-login-loading"></span>
          <small class="text-danger" name="msj_error_lg"></small>
        </div>

        
        <div class="login__btns-login">
          <input type="submit" class="login-button" name="send" id="send" value="login">
          <input type="hidden" name="BackEndUrl" :value="`https://betslip.${BackEndUrl}`">
        </div>

        <div class="login__link">
          <a :href="`https://betslip.${BackEndUrl}/home/reset-pass`">Forgot password ?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalComponent',
    setup:() => {
      const BackEndUrl = "playcr.online";
      
      return {
        BackEndUrl,
      }
    },
    data() {
      return {
        showModal: false
      }
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      }
    }
  }
</script>