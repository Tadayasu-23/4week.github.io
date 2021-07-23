import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import axios from "axios";
import config from "../../env.paths.json";

axios.defaults.baseURL = config.BASE_URL;

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      reviews: [],
      sliderOptions: {
        slidesPerView: 2,
        loop: false
      },

    };
  },
  computed: {
    slider() {
      return this.$refs["slider"].$swiper;
    },
  },
  methods: {
    slide(direction) {
      switch (direction) {
        case "next":
          this.slider.slideNext();
          break;
        case "prev":
          this.slider.slidePrev();
          break;
      }
    },
    requireImagesToArray(data) {
      return data.map((item) => {
        item.photo = `https://webdev-api.loftschool.com/${item.photo}`;
        return item;
      });
    }
  },
  async created() {
    const { data } = await axios.get("/reviews/471");

    this.reviews = this.requireImagesToArray(data);
  },
});
