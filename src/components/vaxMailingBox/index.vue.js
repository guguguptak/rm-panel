import vaxBox from "../vaxBox/index.vue";

import {
    everythingForAccessLevelStr,
//    mailerTypesStr,
} from "@/utils/i18n-data.js";

import {
    roleToAccessLevel
} from "@/utils/userRoles.js";

export default {
  components: {
    vaxBox,
  },
  
  props: {
    namePrefix: String,
    userRole: String,
    mailingGroup: Array,
  },
  
  methods: {
    userManages: ( user ) => user.manages ?? everythingForAccessLevelStr[roleToAccessLevel[user.role]],
    toggleTableCheckboxes ( event ) {
      var b = event.target.checked;
      for( var el of this.$refs.toggleGroup.getElementsByTagName( "input" ) ) {
        el.checked = b;
      }
    },
  }
}
