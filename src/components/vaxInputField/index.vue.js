import vaxField from "../vaxField/index.vue";
import vaxInput from "../vaxInput/index.vue";
import vaxInputNum from "../vaxInputNum/index.vue";

export default {
  components: {
    vaxField,
    vaxInput,
    vaxInputNum,
  },
  
  props: {
    name: String,
    caption: String,
    captionClass: String,
    controlClass: String,
    placeholder: String,
    pattern: String,
    disabled: Boolean,
    value: [ String, Number ],
    maxlength: [ Number, String ],
    required: {
      type: Boolean,
      default: true
    },
    type: String
  }
}
