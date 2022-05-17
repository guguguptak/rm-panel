import vaxBox from "../vaxBox/index.vue";

import {
  contextMissingStr
} from "@/utils/i18n-data.js";

export default {
  components: {
    vaxBox
  },
  props: {
    size: {
      type: String,
      default: "small"
    },
    bold: {
      type: Boolean,
      default: true
    },
    viewData: {
      type: Object,
      default: () => ( {} )
    },
    response: String,
    responseClass: String,
  },
  data: () => ( {
    contextMissingMsg: contextMissingStr,
  } ),
  /*
  watch: {
    viewData (newVal, oldVal) {
      console.log( JSON.stringify( oldVal ) + " -> " + JSON.stringify( newVal ) );
    }
  }
  */
}
