import vaxCheckbox from "../vaxCheckbox/index.vue";
import vaxField from "../vaxField/index.vue";

import {
  atLeastOneRequiredStr
} from "@/utils/i18n-data.js";

export default {
  components: {
    vaxCheckbox,
    vaxField
  },

  props: {
    name: String,
    caption: String,
    captionClass: String,
    controlClass: String,
    disabled: Boolean,
    required: Boolean,

    options: Array,
    captions: {
      type: Array,
      default: () => []
    },
    iChecked: {
      type: Array,
      default: () => []
    },
  },
  data: () => ( {
    isChecked: [],
  } ),

  methods: {
    update() {
      for ( var i of this.iChecked ) {
        this.isChecked[+i] = true;
      }
    },
    updateConstraint () {
      if ( !this.required ) {
        return;
      }
      var valid = false;
      const inputs = this.$refs.inputs.$el.getElementsByTagName( "input" );
      for( var input of inputs ) {
        if ( input.checked ) {
          valid = true;
          break;
        }
      }
      inputs[0].setCustomValidity( valid ? "" : atLeastOneRequiredStr );
    }

  },
  beforeMount () {
    this.update();
  },
  mounted () {
    this.updateConstraint();
  },
  watch: {
    iChecked (newVal, oldVal) {
      this.update();
    },
  },

}
