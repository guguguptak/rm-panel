import {
  atLeastOneRequiredStr
} from "@/utils/i18n-data.js";

export default {
  props: {
    captionClass: String,
    disabled: Boolean,
    required: Boolean,
    type: {
      type: String,
      default: "radio"
    },
    size: {
      type: String,
      default: "large"
    },
    iconPrefix: String,
    name: String,
    nameSuffix: {
      type: String,
      default: ""
    },
    spanClass: String,

    options: Array,
    captions: Array,
    titles: Array,
    iChecked: {
      type: Array,
      default: () => []
    },
  },
  data: () => ( {
    isChecked: {},
  } ),

  methods: {
    update () {
      for ( var i = 0, max = this.options.length; i < max; i++ ) {
        this.isChecked[i] = false;
      }
      for ( var i of this.iChecked ) {
        this.isChecked[+i] = true;
      }
    },
    updateConstraint () {
      if ( !this.required ) {
        return;
      }
      var valid = false;
      const inputs = this.$refs.inputs.getElementsByTagName( "input" );
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
    if ( this.type === "radio" && this.iChecked.length > 1 ) {
      throw "too many selected options in radio (only one allowed!)";
    }
    this.update();
  },
  mounted () {
      this.updateConstraint();
  },
  watch: {
    iChecked (newVal, oldVal) {
      this.update();
    }
  },

}
