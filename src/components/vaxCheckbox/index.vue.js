export default {
  props: {
    caption: String,
    captionClass: String,
    inputClass: String,
    name: String,
    value: {
      type: String,
      default: "1" // note: passing 'true' here wouldn't work for DB, since it's a string
    },
    slotBefore: Boolean,
    checked: [Boolean,Number,String],
  },
  computed: {
    bChecked () {
      return !!this.checked;
    }
  }
}
