import * as muta from '../mutation-types'

const state = {
  currentContext: undefined,
  possibleContexts: undefined,
  sidebar: {
    display: true,
  },
  formModified: false,
//  routeChanging: false,
}

const mutations = {
  [muta.SET_CURRENT_CONTEXT] ( state, context ) {
    state.currentContext = context;
  },

  [muta.SET_POSSIBLE_CONTEXTS] ( state, contexts ) {
    state.possibleContexts = contexts;
  },

  [muta.FORM_MODIFIED] ( state, isFormModified ) {
    state.formModified = isFormModified;
  },
/*
  [muta.ROUTE_CHANGING] ( state, isRouteChanging ) {
    state.routeChanging = isRouteChanging;
  },
*/
  [muta.TOGGLE_SIDEBAR] ( state ) {
    state.sidebar.display = !state.sidebar.display;
  },

  [muta.SET_SIDEBAR] ( state, newSidebarDisplay ) {
    state.sidebar.display = newSidebarDisplay;
  },
}

export default {
  state,
  mutations
}
