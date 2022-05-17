import axios from "axios";
import { errorToFriendlyNameMap } from "./i18n-data.js";
import { popup } from "./misc.js";

function toErrorHtml ( text ) {
  return "<!DOCTYPE html><title>Error</title><pre>" + text + "</pre>";
}

export function http ( name, url, promise, andThen, onError ) {
  if ( process.env.NODE_ENV === "development" ) {
    console.info( name + " >>> " + url );
  }
  promise.then( (resp) => {
    if ( process.env.NODE_ENV === "development" ) {
      console.info( resp.data );
    }
    return resp;
  }).then( andThen )
  .catch( (e) => {
    if ( onError ) {
      onError( e );
    }
    if ( process.env.NODE_ENV === "development" ) {
      console.error( e );
      var resp = e.response;
      var data;
      var popMeUp = true;
      if ( resp ) {
        data = resp.data;
        if ( typeof data !== "string" ) {
          if ( errorToFriendlyNameMap[data?.meta?.internalError] !== undefined ) {
            popMeUp = false;
          }
          console.info( "error response data:" );
          console.info( data );
          data = toErrorHtml( JSON.stringify( data, null, 4 ) );
        }
      } else {
        data = toErrorHtml( e );
      }
      if ( popMeUp ) {
        popup( data );
      }
    }
  });
}

export function httpGet ( url, andThen, onError ) {
  return http( "httpGet", url, axios.get( url ), andThen, onError );
}

export function httpPost ( url, data, andThen, onError ) {
  return http( "httpPost", url, axios.post( url, data ), andThen, onError );
}

export function httpPut ( url, data, andThen, onError ) {
  return http( "httpPut", url, axios.put( url, data ), andThen, onError );
}

export function httpDelete ( url, andThen, onError ) {
  return http( "httpDelete", url, axios.delete( url ), andThen, onError );
}
