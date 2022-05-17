export default {
  props: {
    caption: String,
    captionClass: String,
    initialCollapsed: {
      type: Boolean,
      default: false
    },
    collapsable: {
      type: Boolean,
      default: false
    },
    controlClass: String,
    invisible: Boolean,
  },
  
  data () {
    return {
      collapsed: this.initialCollapsed
    }
  },
  
  methods: {
    toggle () {
      if ( this.collapsable ) {
        this.collapsed = !this.collapsed;
      }
    }
  }
}
