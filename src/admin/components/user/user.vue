<template>
    <div class="user-component">
        <avatar size="3.1" :src="userPic" />
        <div class="username">Роман Воронцов</div>
    </div>
</template>

<script>
import avatar from '../avatar/avatar.vue'

export default {
    components: { avatar },
    computed: {
        userPic() {
            return require("../../../images/content/user1.png").default
        }
    }
};
</script>

<style lang="postcss" scoped src="./user.pcss" />
