import vaxInputField from "../vaxInputField/index.vue";
import vaxFieldset from "../vaxFieldset/index.vue";

export default {
  components: {
    vaxInputField,
    vaxFieldset
  },
  props: {
    caption: String,
    name: String,
    disabled: Boolean,
    collapsable: {
      type: Boolean,
      default: false
    },
    initialCollapsed: Boolean,
    required: {
      type: Boolean,
      default: false
    },
    values: {
      type: Object,
      default: () => ( { } ),
    }
  },
  created () {
    if ( this.collapsable && this.required ) {
      throw "potentially hidden inputs can't be required";
    }
  },
  computed: {
    valuesComp () {
      return ( this.values === undefined || this.values === null ) ? {} : this.values;
    }
  }

}
