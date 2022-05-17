import vaxForm from "../vaxForm/index.vue";
import vaxBox from "../vaxBox/index.vue";
import vaxField from "../vaxField/index.vue";
import vaxFieldset from "../vaxFieldset/index.vue";
import vaxInputField from "../vaxInputField/index.vue";
import vaxCheckbox from "../vaxCheckbox/index.vue";
import vaxCheckboxArray from "../vaxCheckboxArray/index.vue";
import vaxPersonalFieldset from "../vaxPersonalFieldset/index.vue";
import vaxComboSlider from "../vaxComboSlider/index.vue";

import rmT12nSelect from "../rmT12nSelect/index.vue";

import {
  printMaterialTypesStr
} from "@/utils/i18n-data.js";

export default {
  components: {
    vaxForm,
    vaxBox,
    vaxField,
    vaxFieldset,
    vaxInputField,
    vaxPersonalFieldset,
    vaxCheckbox,
    vaxCheckboxArray,
    vaxComboSlider,

    rmT12nSelect,
  },
  props: {
    disabled: Boolean,
    hasCaption: Boolean,
    action: String,
    name: {
      type: String,
      default: "addCity",
    },
    values: {
      type: Object,
      default: () => ( { campaign: {} } ),
    }
  },
  data: () => ( {
    printMaterialTypes: printMaterialTypesStr
  } ),
  methods: {
    submitPost( event ) {
      this.$emit( "submit", event );
    }
  }
}
