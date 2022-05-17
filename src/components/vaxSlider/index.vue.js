export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    type: String,
    name: String,
    size: String,
    isFullwidth: Boolean,
    disabled: Boolean,
    // orientation:
    vertical: Boolean
  },
  data () {
    return {
      realValue: this.value
    }
  },
  beforeMount () {
    if ( this.max < this.min ) {
      throw "Unexpected range setting: Maximum cannot be less than minimum";
    }
    this.update( this.value );
  },
  mounted () {
    this.$el.style.setProperty( "--low", this.low );
    this.$el.style.setProperty( "--high", this.high );
  },
  watch: {
    realValue (newVal, oldVal) {
      if ( Number(newVal) !== Number(oldVal) ) {
        if ( window.navigator.userAgent.indexOf( "Edge" ) === -1 ) { // fix for Edge heisenbug
          this.$el.style.setProperty( "--high", this.high ); // style doesn't matter for Edge anyway
        }
        this.$emit( "change", newVal );
      }
    },
    value (val) {
      this.update( val );
    }
  },
  methods: {
    update (val) {
      if (val > this.max) {
        this.realValue = this.max;
      } else if (val < this.min) {
        this.realValue = this.min;
      } else {
        this.realValue = Number(val);
      }
    }
  },
  computed: {
    low () {
      return "0%";
    },
    high () {
      return ( this.realValue - this.min ) / ( this.max - this.min ) * 100 + "%";
    },
    classObject () {
      const { type, size, isFullwidth } = this;
      return {
        slider: true,
        [`is-${type}`]: ( this.disabled ? false : type ),
        [`is-${size}`]: size,
        "is-fullwidth": isFullwidth,
      }
    }
  }
}
