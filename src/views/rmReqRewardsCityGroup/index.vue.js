// *** AUTOGENERATED // placing any import before this line will break autogeneration
import {
    vaxView,
    vaxTrophy
} from "@/components";
// *** AUTOGENERATED end

import {
    jsonViewDataMixin
} from "@/utils/mixins.js";

import {
    unitTypesPluralStr
} from "@/utils/i18n-data.js";

export default {
  name: "rmReqRewardsCityGroup",
  components: {
    vaxView,
    vaxTrophy
  },
  data () {
    return {
      unitTypesPlural: unitTypesPluralStr
    }
  },
  mixins: [
    jsonViewDataMixin
  ]
}
