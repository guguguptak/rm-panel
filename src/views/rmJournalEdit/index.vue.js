// *** AUTOGENERATED // placing any import before this line will break autogeneration
import {
    vaxView,
    vaxForm,
    vaxBox,
    vaxCombobox,
    vaxInputField,
    vaxButton,
    rmT12nSelect
} from "@/components";
// *** AUTOGENERATED end

import {
    jsonViewDataMixin,
    submitPostMixin,
} from "../../utils/mixins.js";

export default {
  name: "rmJournalEdit",
  components: {
    vaxView,
    vaxForm,
    vaxBox,
    vaxCombobox,
    vaxInputField,
    vaxButton,
    rmT12nSelect
  },
  data () {
    return {
      afterPost: () => this.getJsonViewData(),
    }
  },
  methods: {
    changeDayNr ( event ) {
      this.$router.push( { path: "/journalEdit", query: { dayNr: event.target.value } } );
    },
    editParticipant ( event ) {
      const but = event.target;
      var pel;
      for( pel = but; pel.tagName.toUpperCase() !== "TR"; pel = pel.parentElement ) { }
      const inputs = pel.getElementsByTagName( "input" );
      this.submitPostDirect( { formName: "editParticipant", id: inputs[0].value,
        name: inputs[1].value } );
    }
  },
  mixins: [
    jsonViewDataMixin,
    submitPostMixin,
  ]
}
