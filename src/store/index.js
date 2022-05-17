import { createStore } from 'vuex';
// import pkg from "package";

//import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";

import menu from "./modules/menu";
import app from "./modules/app";

const store = createStore( {
  strict: process.env.NODE_ENV !== "production",

  //actions,
  getters,
  state: {
    // pkg,

    userRole: 0,
  },
  ...mutations,
  modules: {
    app,
    menu
  },
} );

export default store;
