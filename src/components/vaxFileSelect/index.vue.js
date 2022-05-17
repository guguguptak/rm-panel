import vaxField from "../vaxField/index.vue";
import vaxFieldset from "../vaxFieldset/index.vue";
import vaxCheckbox from "../vaxCheckbox/index.vue";
import vaxButton from "../vaxButton/index.vue";

import {
} from "@/utils/i18n-data.js";

export default {
  components: {
    vaxField,
    vaxFieldset,
    vaxCheckbox,
    vaxButton,
  },
  props: {
    caption: String,
    goToCaption: String,
    goToPath: String,
    fileList: Object,
  },
/*
  data: () => ( {
    filename: noFileSelectedMsg
  } ),
*/
  methods: {
    goTo () {
      this.$router.push( this.goToPath );
    },
  },
}
