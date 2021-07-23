<template>
  <div class="login-page-component">
    <div class="content">
      <form class="form" @submit.prevent="handleSubmit">
        <div class="form-title">Авторизаиця</div>
        <div class="row">
          <app-input title='Логин' 
                      icon='user' 
                      v-model="user.name" 
                      :errorMessage="validation.firstError('user.name')" />
        </div>
        <div class="row">
          <app-input title='Пароль' 
                      icon='key' 
                      type='password' 
                      v-model="user.password" 
                      :errorMessage="validation.firstError('user.password')" />
        </div>
        <div class="btn">
          <app-button :disabled='isSubmitDisabled' title="Отправить" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import appInput from '../../components/input/input.vue'
import appButton from '../../components/button/button.vue'
import { Validator, mixin as ValidatorMixin } from 'simple-vue-validator';
import $axios from '../../request';
import { mapActions } from 'vuex';

export default {
  mixins: [ValidatorMixin],
  validators: {
    'user.name': value => {
      return Validator.value(value).required('Введите имя пользователя');
    },
    'user.password': value => {
      return Validator.value(value).required('Введите пароль');
    },
  },
  data: () => ({
    user: {
      name: '',
      password: ''
    },
    isSubmitDisabled: false 
  }),
  components: {
    appInput, appButton
  },
  methods: {
    ...mapActions({
      showTooltip: 'tooltips/show'
    }),
    async handleSubmit() {
      if (await this.$validate() == false) return;
        this.isSubmitDisabled = true;

        try {
          const response = await $axios.post('/login', this.user);
          console.log(response)
          const token = response.data.token;
          localStorage.setItem('token', token);
          $axios.defaults.headers['Authorization'] = `Bearer ${token}`;
          this.$router.replace('/');
        } catch (error) {
          this.showTooltip({
            text: error.response.data.error,
            type: 'error'
          })
        } finally {
          this.isSubmitDisabled = false;
        }
    },
  },
}
</script>

<style lang="postcss" scoped src='./login.pcss' />