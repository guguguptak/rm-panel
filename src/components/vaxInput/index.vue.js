
export default {
  props: {
    pattern: String,
    required: {
      type: Boolean,
      default: true
    },
    maxlength: [ Number, String ],
    value: {
      type: String
    }
  },
  
  methods: {
    update ( newVal ) {
      this.$emit( "input", newVal );
    }
  }
}
