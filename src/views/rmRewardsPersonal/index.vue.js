// *** AUTOGENERATED // placing any import before this line will break autogeneration
import {
    vaxView,
    vaxForm,
    vaxBox,
    vaxButton,
    vaxInputField,
    rmAgeCategorySelect,
} from "@/components";
// *** AUTOGENERATED end

import {
    jsonViewDataMixin,
    submitPostMixin,
} from "@/utils/mixins.js";

import {
    ageOptionsStr,
} from "@/utils/i18n-data.js";

export default {
  name: "rmRewardsPersonal",
  components: {
    vaxView,
    vaxForm,
    vaxBox,
    vaxButton,
    vaxInputField,
    rmAgeCategorySelect,
  },
  data () {
    return {
      afterPost: () => this.getJsonViewData(),
      ageOptionNames: ageOptionsStr,
      ageOptionsPresent: [ 0, 1, 2, 4 ],
    }
  },
  methods: {
    getAgeOptionName: ( item ) => ageOptionsStr[item + 1 ?? 0],
    editPersonalReward ( event ) {
      const but = event.target;
      var pel;
      for( pel = but; pel.tagName.toUpperCase() !== "TR"; pel = pel.parentElement ) { }
      const inputs = pel.getElementsByTagName( "input" );
      this.submitPostDirect( { formName: "editPersonalReward", id: inputs[0].value,
        totalCount: inputs[1].value } );
    },
  },
  mixins: [
    jsonViewDataMixin,
    submitPostMixin,
  ]
}