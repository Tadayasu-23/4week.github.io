<template>
  <div class="header-component">
    <headline title="Панель администрирования">
        <user />
    </headline>
    <navigation />
  </div>
    
</template>

<script>
import headline from "../../components/headline/headline.vue";
import user from "../../components/user/user.vue";
import navigation from "../../components/navigate/navigation.vue";

export default {
  components: {
    headline,
    user,
    navigation
  }
}
</script>