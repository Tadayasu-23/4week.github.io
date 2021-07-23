<template>
  <card slim>
    <template slot="content">
      <ul class="skills" v-if="empty === false">
        <li class="item" v-for="work in works" :key="work.id">
          
        </li>
      </ul>
    </template>
  </card>
</template>

<script>
import card from "../card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";

export default {
  components: {
    card, editLine, skill, skillAddLine
  },
  props: {
    empty: Boolean,
    title: {
      type: String,
      default: ""
    },
    skills: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      categoryTitle: this.title
    }
  }
}
</script>

<style lang="postcss" scoped src="./categoryWork.pcss" />
