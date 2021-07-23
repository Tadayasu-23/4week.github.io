import categoryWork from "./categoryWork"
import { action } from "@storybook/addon-actions";

const methods = {
  onRemove: action("onRemove"),
  onRemoveSkill: action("onRemoveSkill"),
  onEditSkill: action("onEditSkill"),
}

export default {
  title: "categoryWork",
  components: { categoryWork }
}

const skills = [
  {id: 0, title: "CSS", percent: 80},
  {id: 0, title: "HTML", percent: 50},
]

export const defaultView = () => ({
  components: { categoryWork },
  data() {
    return {
      title: "Frontend",
      skills
    }
  },
  template: `
    <categoryWork
      :title="title"
      :skills="skills" 
      @remove="onRemove"
      @remove-skill="onRemoveSkill"
      @edit-skill="onEditSkill"
    /> 
  `,
  methods
})