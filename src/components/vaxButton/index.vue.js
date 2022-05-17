import vaxField from "../vaxField/index.vue";

export default {
  components: {
    vaxField
  },
  props: {
    buttonClass: {
      type: String,
      default: "is-info"
    },
    type: {
      type: String,
      // default: "submit"
      default: "button"
    }
  },
  inheritAttrs: false
}
