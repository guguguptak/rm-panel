import vaxButton from "../vaxButton/index.vue";
import vaxFieldset from "../vaxFieldset/index.vue";

export default {
  components: {
    vaxButton,
    vaxFieldset,
  },
  props: {
    actionCapture: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    largeInputs: {
      type: Boolean,
      default: true
    },
    hasSubmit: {
      type: Boolean,
      default: true
    },
    submitCaption: {
      type: String,
      default: ""
    },
    method: {
      type: String,
      default: "GET"
    },
    submitButtonClass: {
      type: String,
      default: "is-info vax-width-100pct"
    },
    name: String,
    disabled: Boolean,
    caption: String,
    submitButtonMargins: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    methodEx () {
      const meth = this.method.toUpperCase();
      switch ( meth ) {
        case "GET":
        case "POST":
          return meth;
        case "PUT":
          return "POST";
        case "DELETE":
          return "GET";
        default:
          return "GET";
      }
    }
  },
  methods: {
    notifyChildrenOfReset ( event ) {
      var evt = new Event( "reset" );
      for( var el of event.target.elements ) {
        el.dispatchEvent( evt );
      }
    }
  }
}
