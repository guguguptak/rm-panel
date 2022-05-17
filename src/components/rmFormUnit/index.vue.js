import datePicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { Polish } from "@/utils/flatpickr-l10n-pl.mjs"

import vaxForm from "../vaxForm/index.vue";
import vaxField from "../vaxField/index.vue";
import vaxFieldset from "../vaxFieldset/index.vue";
import vaxInput from "../vaxInput/index.vue";
import vaxInputField from "../vaxInputField/index.vue";
import vaxPersonalFieldset from "../vaxPersonalFieldset/index.vue";
import vaxCheckbox from "../vaxCheckbox/index.vue";
import vaxCombobox from "../vaxCombobox/index.vue";

import rmT12nSelect from "../rmT12nSelect/index.vue";

import {
  unitTypesStr,
  unitSubtypesStr,
  tooManyDatesStr,
} from "@/utils/i18n-data.js";

import {
    filterArrayByIndexes,
} from "@/utils/misc.js";

export default {
  components: {
    datePicker,

    vaxForm,
    vaxField,
    vaxFieldset,
    vaxInput,
    vaxInputField,
    vaxPersonalFieldset,
    vaxCheckbox,
    vaxCombobox,

    rmT12nSelect,
  },
  data () {
    return {
      unitTypes: unitTypesStr,
      unitSubtypes: unitSubtypesStr,
      datePickerConfig1: {
        locale: Polish,
        dateFormat: "d-m-Y",
        mode: "multiple",
        inline: true,
        allowInput: true,
        defaultDate: this.values.campaign.enabledDates[0],
        enable: this.values.campaign.enabledDates,
        onChange ( selectedDates, dateStr, instance ) {
            if ( selectedDates.length > 3 ) {
                alert( tooManyDatesStr );
            }
        },
      },
    };
  },
  props: {
    disabled: Boolean,
    restricted: Boolean,
    hasCaption: Boolean,
    action: String,
    name: {
      type: String,
      default: "addUnit",
    },
    values: {
      type: Object,
      default: () => ( { city: {}, campaign: {} } ),
    }
  },
  methods: {
    submitPost ( event ) {
      this.$emit( "submit", event );
    },
    arrayByIndexes ( array, indexes ) {
      return filterArrayByIndexes( array, indexes );
    }
  }
}
