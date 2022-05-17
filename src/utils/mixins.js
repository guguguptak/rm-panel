import {
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
} from "./http.js";

import {
  API_GET_JSON_URL,
  API_GET_URL,
  API_POST_URL,
  API_PUT_URL,
  API_DELETE_URL,
} from "./api.js";

import {
  objectToQuery,
  formDataToQuery,
  windowReload,
} from "./misc.js";

import {
  successMsg,
  userRolesStr,
  errorToFriendlyName,
  forbiddenAlert,
} from "./i18n-data.js";

import {
  roleToAccessLevel,
} from "@/utils/userRoles.js";

// // //

export const DEFAULT_RESPONSE_CLASS = "vax-dont-display";
export const SUCCESS_RESPONSE_CLASS = "is-success";
export const FAILURE_RESPONSE_CLASS = "is-danger";

export const permissionsMixin = {
  methods: {
    permissionTypeToName ( perm ) {
      return userRolesStr[roleToAccessLevel[perm]];
    }
  }
}

export const jsonViewDataMixin = {
  components: {
  },
  data () {
    return {
      jsonView: null,
      afterGetJsonViewData: undefined,
    }
  },
  methods: {
    getJsonViewData () {
      var q = objectToQuery( this.$route.query );
      httpGet(
        API_GET_JSON_URL + "/view/" + this.$options.name + ( q === "" ? "" : "?" + q ) + ".json",
        (resp) => {
          if ( !resp.data.suppressData ) {
            this.jsonView = resp.data;
          }
          if ( this.afterGetJsonViewData ) {
            this.afterGetJsonViewData();
          }
        },
        (e) => {
          const resp = e.response;
          if ( resp && resp.status === 403 ) {
            if ( confirm( forbiddenAlert ) ) {
              windowReload(); // i.e. window.location.reload( true );
            }
          }
        }
      );
    }
  },
  created () {
    this.getJsonViewData();
  }
};

export const jsonDataMixin = ( mode ) => ( {
  data () {
    return {
      [mode]: undefined
    }
  },
  methods: {
    getJsonData ( mmode ) { // to prevent problems with being overwritten while mixing
      httpGet(
        API_GET_JSON_URL + "/mode/" + mmode,
        (resp) => {
          this[mmode] = resp.data;
        }
      );
    }
  },
  created () {
    this.getJsonData( mode );
  }
} );

export const submitCoreMixin = {
  data () {
    return {
      response: undefined,
      responseClass: DEFAULT_RESPONSE_CLASS,
      success: undefined,
    }
  },
  methods: {
    submitCore ( event, httpMethod, payloadInBody, andThen, andThen2, directData ) {
      this.success = undefined;

      var data, url, payload;
      if ( directData === undefined ) {
        const t = event.target;
        const form = t.form ?? t;
        url = form.action;
        data = new FormData( form );
        payload = payloadInBody ? data : formDataToQuery( data );
      } else {
        url = event; // yup, name abuse
        payload = payloadInBody ? directData : objectToQuery( directData );
      }

      const fSuccess = (resp) => {
        this.success = true;
        this.response = successMsg + " [" + new Date().toLocaleString() + "]";
        this.responseClass = SUCCESS_RESPONSE_CLASS;
        if ( andThen2 ) { // default "finally" post-op
          andThen2( data );
        }
        if ( this[andThen] ) { // pluggable "finally" post-op
          this[andThen]( data );
        }
      };
      const fError = (e) => {
        this.success = false;
        const resp = e.response;
        if ( resp ) {
          const d = resp.data;
          var ie = d.meta?.internalError;
          if ( ie !== undefined ) {
            this.response = ( ie.lastIndexOf( "VAX_ERROR_", 0 ) === 0 )
              ? errorToFriendlyName( ie )
              : ie;
          } else {
            this.response = resp.status + " " + resp.statusText;
          }
        } else {
          this.response = e;
        }
        this.responseClass = FAILURE_RESPONSE_CLASS;
        if ( andThen2 ) { // default "finally" post-op
          andThen2( data );
        }
        if ( this[andThen] ) { // pluggable "finally" post-op
          this[andThen]( data );
        }
      };

      if ( payloadInBody ) {
        httpMethod( url, payload, fSuccess, fError );
      } else {
        httpMethod( url + "?" + payload, fSuccess, fError );
      }
    },
    reset ( event ) {
      event.target.reset();
    },
  }
};

export const submitGetMixin = {
  data () {
    return {
      getUrl: API_GET_URL,
      afterGet: undefined,
    }
  },
  mixins: [
    submitCoreMixin
  ],
  methods: {
    submitGet ( event ) {
      this.submitCore( event, httpGet, true, "afterGet" );
    }
  }
};

export const submitPostMixin = {
  data () {
    return {
      postUrl: API_POST_URL,
      afterPost: undefined,
    }
  },
  mixins: [
    submitCoreMixin
  ],
  methods: {
    submitPost ( event ) {
      this.submitCore( event, httpPost, true, "afterPost" );
      window.scrollTo( 0, 0 );
    },
    submitPostNoScroll ( event ) {
      this.submitCore( event, httpPost, true, "afterPost" );
    },
    submitPostAndReset ( event ) {
      this.submitPost( event );
      this.reset( event );
    },
    submitPostUpdateContext ( event ) {
      this.submitCore( event, httpPost, true, "afterPost", () => {
        this.$root.$emit( "updateContext" );
      } );
      window.scrollTo( 0, 0 );
      // this.reset( event );
    },
    submitPostDirect ( data ) {
      this.submitCore( this.postUrl, httpPost, true, "afterPost", undefined, data );
    },
    submitPostDirectUpdateContext ( data ) {
      this.submitCore( this.postUrl, httpPost, true, "afterPost", () => {
        this.$root.$emit( "updateContext" );
      }, data );
      window.scrollTo( 0, 0 );
    },
    submitPostDirectAndScroll ( data ) {
      this.submitCore( this.postUrl, httpPost, true, "afterPost", undefined, data );
      window.scrollTo( 0, 0 );
    },
  }
};

export const submitPutMixin = {
  data () {
    return {
      putUrl: API_PUT_URL,
      afterPut: undefined,
    }
  },
  mixins: [
    submitCoreMixin
  ],
  methods: {
    submitPut ( event ) {
      this.submitCore( event, httpPut, true, "afterPut" );
    },
  }
};

export const submitDeleteMixin = {
  data () {
    return {
      deleteUrl: API_DELETE_URL,
      afterDelete: undefined,
    }
  },
  mixins: [
    submitCoreMixin
  ],
  methods: {
    submitDelete ( event ) {
      this.submitCore( event, httpDelete, false, "afterDelete" );
    }
  },
};
