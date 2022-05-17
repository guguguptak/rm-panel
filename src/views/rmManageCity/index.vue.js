// *** AUTOGENERATED // placing any import before this line will break autogeneration
import {
    vaxView,

    vaxForm,
    vaxBox,
    vaxComboSlider,

    rmFormCity,
} from "@/components";
// *** AUTOGENERATED end

import {
  submitPostMixin,
  jsonViewDataMixin
} from "@/utils/mixins.js";

export default {
  name: "rmManageCity",
  components: {
    vaxView,

    vaxForm,
    vaxBox,
    vaxComboSlider,

    rmFormCity,
  },
  data: () => ( {
      thresh1: undefined,
      thresh2: undefined,
  } ),
  mixins: [
    submitPostMixin,
    jsonViewDataMixin
  ]
}
