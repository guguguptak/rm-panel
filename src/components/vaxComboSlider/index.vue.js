import vaxSlider from "../vaxSlider/index.vue";
import vaxField from "../vaxField/index.vue";
import vaxInputNum from "../vaxInputNum/index.vue";

export default {
  props: {
    caption: String,
    inputName: String,
    inputClass: String,
    sliderType: String,
    sliderSize: String,
    
    min: Number,
    max: Number,
    step: Number,
    initialValue: Number,
    
    required: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    value: Number,
  },

  components: {
    vaxInputNum,
    vaxSlider,
    vaxField
  },
  
  data () {
    return {
      realValue: undefined,
    }
  },

  mounted () {
    this.realValue = this.initialValue ?? 0;
  },
  
  watch: {
    realValue (newVal, oldVal) {
      if ( Number(newVal) !== Number(oldVal) ) {
        this.$emit( "input", newVal );
      }
    },
    value (val) {
      this.realValue = val;
    }
  },

  methods: {
    updateFromSlider () {
      this.realValue = Number(this.$refs.slider.realValue);
    },
    updateFromInput () {
      this.realValue = Number(this.$refs.input.$refs.input.value);
    }
  }
}
