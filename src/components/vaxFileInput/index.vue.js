import vaxField from "../vaxField/index.vue";

import {
  noFileSelectedMsg
} from "@/utils/i18n-data.js";

export default {
  components: {
    vaxField,
  },
  props: {
    name: {
      type: String,
      default: "file"
    },
    caption: {
      type: String,
      default: "Wybierz plik..."
    }
  },
  data: () => ( {
    filename: noFileSelectedMsg
  } ),
  methods: {
    updateFilename ( event ) {
      const fs = event.target.files;
      this.filename = ( fs.length === 0 ) ? noFileSelectedMsg : fs[0].name;
    },
    resetFilename () {
      this.filename = noFileSelectedMsg;
    },
  },
}
