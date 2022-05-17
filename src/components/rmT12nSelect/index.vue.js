import vaxIconSelect from "../vaxIconSelect/index.vue";

import { t12nStr } from "@/utils/i18n-data.js";

export default {
  props: {
    options: Array,
    i: {
      type: Number,
      default: 0
    },
    iChecked: {
      type: Array,
      default: () => []
    },
    captionClass: String,
    disabled: Boolean,
    type: {
      type: String,
      default: "radio"
    },
    size: {
      type: String,
      default: "medium"
    },
    nameSuffix: {
      type: String,
      default: ""
    }
  },
  components: {
    vaxIconSelect
  },
  data: () => ( {
    t12nTitles: t12nStr
  } )
}
