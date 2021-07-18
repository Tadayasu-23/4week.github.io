import worksForm from "./worksForm";
import { action } from "@storybook/addon-actions";

export default {
  title: "worksForm",
  components: { worksForm },
};

export const defaultView = () => ({
  components: { worksForm },
  data() {
    return {
      worksForm: {
      }
    }
  },
  template: `<worksForm>
            </worksForm>`,
});