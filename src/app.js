import { createApp } from "vue";
import { sync } from "vuex-router-sync";

import Main from "@/Main.vue";
import router from "@/router";
import store from "@/store";
import {
    /* TOGGLE_SIDEBAR, */
    SET_SIDEBAR,
    FORM_MODIFIED,
//    ROUTE_CHANGING,
} from "@/store/mutation-types";

import { httpGet } from "@/utils/http.js";
import { API_GET_JSON_URL } from "@/utils/api.js";

import {
  SET_CURRENT_CONTEXT,
  SET_POSSIBLE_CONTEXTS
} from "@/store/mutation-types.js"

export function runApp() {
//Promise.polyfill();

//import NProgress from "vue-nprogress"

// Vue.config.productionTip = false; // 'true' would be completely redundant, because it's already emitted by vendor JS
// Vue.config.devtools = true;

// Vue.use(VueAxios, axios)
// Vue.use(NProgress)
// const nprogress = new NProgress( { parent: ".nprogress-container" } )

  sync( store, router );
  const { state } = store;

  const baseTitle = document.title;

  router.beforeEach( ( route, redirect, next ) => {
    document.title = route.name + " :: " + baseTitle;
    if ( state.app.formModified ) {
      if ( !window.confirm( "Dane w formularzu zostaną utracone; czy na pewno?" ) ) {
        return;
      }
      store.commit( FORM_MODIFIED, false );
    }
    if ( document.body.getBoundingClientRect().width <= 600 ) {
      store.commit( SET_SIDEBAR, false );
    }
//  store.commit( ROUTE_CHANGING, true );
    next();
  } );

  router.afterEach( ( to, from ) => {
//  store.commit( ROUTE_CHANGING, false );
  } );

  createApp( Main )
      .use( store )
      .use( router )
      .mount( "#app" );

  const updateContext = () => {
    httpGet(
        API_GET_JSON_URL + "/mode/currentContext.json",
        ( resp ) => {
          store.commit( SET_CURRENT_CONTEXT, resp.data.currentContext );
        }
    );
    httpGet(
        API_GET_JSON_URL + "/mode/possibleContexts.json",
        ( resp ) => {
          store.commit( SET_POSSIBLE_CONTEXTS, resp.data.possibleContexts );
        }
    );
  };

  updateContext();

  Main.$on( "updateContext", updateContext );

// export { app, router, store }
}
