export default {
  props: {
    iconClass: String,
    img: {
      type: String,
      default: "exclamation-triangle"
    },
    slotBefore: {
      type: Boolean,
      default: false
    }
  },

  mounted () {
  },

  computed: {
    cIconClass () {
      return this.iconClass ?? ( 'fa fa-' + this.img );
    }
  },

  methods: {
  }
}
