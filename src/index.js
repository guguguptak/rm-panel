// </> by guguguptak/AZ

console.log( "Starting..." );

import { httpGet } from "@/utils/http.js";
import { API_GET_JSON_URL } from "@/utils/api.js"
import { roleToAccessLevel } from "@/utils/userRoles.js";

import store from "@/store";
import { SET_USER_ROLE } from "@/store/mutation-types.js";

import { runApp } from '@/app.js';

// // //

httpGet(
  API_GET_JSON_URL + "/mode/userRole.json",
  ( resp ) => {
    const userRole = resp.data.userRole;
    if ( roleToAccessLevel[resp.data.userRole] === 0 ) {
        // window.location = "/login";
    } else {
        store.commit( SET_USER_ROLE, userRole );
        runApp();
    }
  }
);
