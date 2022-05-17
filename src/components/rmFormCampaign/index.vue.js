import datePicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { Polish } from "@/utils/flatpickr-l10n-pl.mjs"

import vaxCheckboxArray from "../vaxCheckboxArray/index.vue";
import vaxComboSlider from "../vaxComboSlider/index.vue";
import vaxField from "../vaxField/index.vue";
import vaxForm from "../vaxForm/index.vue";
import vaxInput from "../vaxInput/index.vue";
import vaxInputField from "../vaxInputField/index.vue";
import rmT12nSelect from "../rmT12nSelect/index.vue";

import {
  unitTypesStr,
  printMaterialTypesStr,
} from "@/utils/i18n-data.js";

export default {
  components: {
    datePicker,

    vaxForm,
    vaxField,
    vaxInput,
    vaxInputField,
    vaxComboSlider,
    vaxCheckboxArray,
    rmT12nSelect,
  },
  props: {
    disabled: Boolean,
    hasCaption: Boolean,
    action: String,
    name: {
      type: String,
      default: "addCampaign",
    },
    values: {
      type: Object,
      default: () => ( { /* campaign: {} */ } ),
    }
  },
  data: () => ({
    unitTypes: unitTypesStr,
    printMaterialTypes: printMaterialTypesStr,
//    date: null,
    datePickerConfig1: {
      locale: Polish,
      dateFormat: "d-m-Y",
      mode: "multiple",
      inline: true,
      allowInput: true,
    },
    datePickerConfig2: {
      locale: Polish,
      dateFormat: "d-m-Y",
//      enableTime: true,
//      time_24hr: true,
      inline: true,
      allowInput: true,
//      onReady () { this.showTimeInput = true; },
//      wrap: true, // set wrap to true only when using "input-group"
    },

  }),
  methods: {
    submitPost( event ) {
      this.$emit( "submit", event );
    }
  }
}
