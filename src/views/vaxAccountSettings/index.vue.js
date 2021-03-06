// *** AUTOGENERATED // placing any import before this line will break autogeneration
import {
    vaxView,
    vaxBox,
    vaxForm,
    vaxInputField
} from "@/components";
// *** AUTOGENERATED end

import {
    jsonViewDataMixin,
    submitPostMixin,
    permissionsMixin,
} from "@/utils/mixins.js";

export default {
  name: "vaxAccountSettings",
  components: {
    vaxView,
    vaxBox,
    vaxForm,
    vaxInputField
  },
  data () {
    return {
      afterPost: () => {
        this.getJsonViewData();
      }
    }
  },
  /*
  computed: {
    query () {
      return this.$route.query.id;
    }
  },
  */
  mixins: [
    jsonViewDataMixin,
    submitPostMixin,
    permissionsMixin,
  ],
  methods: {
    submitPostAndLogoutIfSelf ( event ) {
      this.submitPost( event );
      if ( this.$route.query.id === undefined ) {
        window.location = "/logout";
      }
    },
  }
}
