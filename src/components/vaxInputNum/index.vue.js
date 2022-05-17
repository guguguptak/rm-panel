
export default {
  props: {
    required: {
      type: Boolean,
      default: true
    },
    pattern: String,
    maxlength: [ Number, String ],
    placeholder: {
      type: String,
      default: "0"
    },
    value: Number
  },

  methods: {
    update ( newVal ) {
      this.$emit( "input", newVal );
    }
  }
}
