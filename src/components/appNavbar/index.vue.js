//import Tooltip from 'vue-bulma-tooltip';
import { mapGetters, mapActions } from "vuex";
import {
    SET_CURRENT_CONTEXT,
    TOGGLE_SIDEBAR,
} from "@/store/mutation-types.js";

import vaxLinkIcon from "../vaxLinkIcon/index.vue";
import vaxCombobox from "../vaxCombobox/index.vue";
import vaxForm from "../vaxForm/index.vue";

import store from "@/store";

import {
  submitPostMixin
} from "@/utils/mixins.js";

import {
  formDataToObject,
  windowReload,
} from "@/utils/misc.js";

const CURRENT_CONTEXT_ID = "currentContext";

export default {
  components: {
    //Tooltip,

    vaxLinkIcon,
    vaxCombobox,
    vaxForm,
  },

  props: {
    show: Boolean
  },

  computed: {
    ...mapGetters( {
      ctx: "currentContext",
      ctxs: "possibleContexts",
      accessLevel: "accessLevel",
    } ),
    campaignStage () {
      return this.ctx?.campaignStage;
    },
  },
  data () {
    return {
      afterPost: (fd) => {
        // store.commit( SET_CURRENT_CONTEXT, formDataToObject( fd ) );
        // this.getJsonData( CURRENT_CONTEXT_ID );
        // this.$router.go();
        // NOTE:
        // apparently, the only cross-browser solution to possible problems with context management is this:
        windowReload(); // i.e. window.location.reload( true );
      },
    }
  },
  methods: {
    toggleSidebar: () => {
        store.commit( TOGGLE_SIDEBAR );
    },
    goTo ( path ) {
      this.$router.push( path );
    },
    gctx ( name, type ) {
      return ( this.ctx && this.ctx[type] && this.ctx[type][name] ) ? ( "" + this.ctx[type][name] ) : "";
    },
    gctxs ( name, type ) {
      return ( this.ctxs && this.ctxs[type] && this.ctxs[type][name] ) ? this.ctxs[type][name] : [];
    }
  },

  mixins: [
    //jsonDataMixin( "possibleContexts" ),
    //jsonDataMixin( CURRENT_CONTEXT_ID ),
    submitPostMixin
  ]

}
