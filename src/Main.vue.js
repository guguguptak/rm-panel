import { mapGetters, mapActions } from 'vuex'
//import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

import {
  appNavbar,
  appSidebar,
  appMain,
  appFooter
} from "./components/";

export default {
  components: {
    appNavbar,
    appSidebar,
    appMain,
    appFooter,

//    NprogressContainer
  },
  
  data () {
    return {
    };
  },
  
  beforeCreate () {
  },

  beforeMount () {
    const handler = () => {
      //store.commit( TOGGLE_SIDEBAR );
    }

    document.addEventListener( "visibilitychange", handler );
    window.addEventListener( "DOMContentLoaded", handler );
    window.addEventListener( "resize", handler );
  },

  computed: mapGetters( {
    displaySidebar: "displaySidebar",
//    routeChanging: "routeChanging",
  } ),

  methods: {
  /*
    ...mapActions( [
      'toggleDevice',
      'toggleSidebar'
    ] ),
    */
  }
  
}
