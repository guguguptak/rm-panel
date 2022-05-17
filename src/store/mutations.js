import { accessLevelToRole } from "@/utils/userRoles.js";
import * as mutationTypes from "./mutation-types.js";

const mutations = {
  [mutationTypes.SET_ACCESS_LEVEL] ( state, newAccessLevel) { // DEBUG only
    state.userRole = accessLevelToRole[newAccessLevel];
  },

  [mutationTypes.SET_USER_ROLE] ( state, newUserRole) {
    state.userRole = newUserRole; // should be set by app on login and cleared on logout
  }
}

export default {
  mutations
}
