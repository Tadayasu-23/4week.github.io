<template>
    <div class="headline-component">
        <div class="container header-container">
            <slot />
            <div class="title">{{title}}</div>
            <div class="buttons">
                <button class="btn" type="button" @click.prevent="logOut">Выйти</button>
            </div>
        </div>
    </div>           
</template>

<script>
import $axios from '../../request';

export default {
    props: {
        title: {
            type: String,
            default: "Панель администрирования"
        }
    },
    methods: {      
      logOut() {
         $axios.post('https://webdev-api.loftschool.com/logout');
         this.$router.replace('/login');
      }
   },
}
</script>


<style lang="postcss" scoped src="./headline.pcss" />