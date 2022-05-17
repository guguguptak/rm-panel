
import router from "@/router";

export function routeToMessage ( msgObj ) {
    router.push( {
      //path: "/message?json=" + encodeURIComponent( JSON.stringify( msgObj ) )
      path: "/message?" + objectToQuery( msgObj )
    } );
}

export function formDataToObject ( formData ) {
    const o = {};
    for ( const e of formData ) {
      o[e[0]] = e[1];
    }
    return o;
}

export function objectToQuery ( queryObj ) {
    return Object.keys( queryObj ).map(
        (k) => encodeURIComponent( k ) + "=" + encodeURIComponent( queryObj[k] )
      ).join( "&" );
}

export function formDataToQuery ( formData ) {
    var q = "";
    for ( const e of formData ) {
      q += encodeURIComponent( e[0] ) + "=" + encodeURIComponent( e[1] ) + "&";
    }
    return q.slice( 0, -1 );
}

export function popup ( htmlData ) {
    const w = window.open( "about:blank", "_blank" );
    if ( w === null ) {
        console.warn( "can't display popup window" );
        return;
    }
    const doc = w.document;
    doc.open();
    doc.write( htmlData );
    doc.close();
}

export function importCsv ( form, f ) {
    const file = form.querySelector( "input[type='file']" ).files[0];
    if ( file === undefined ) {
      return false;
    }
    const fr = new FileReader();
    fr.readAsText( file );
    fr.onload = (evt) => {
      const text = evt.target.result;
      const lines = text.split( /[\r\n]+/g );
      f( lines, form );
    };
    return true;
}

export function toArray ( foo ) {
    return foo instanceof Object ? Object.values( foo ) : foo;
}

export function filterArrayByIndexes ( array, indexes ) {
    if ( array === undefined || indexes === undefined ) {
        return [];
    }
    if ( indexes instanceof Array ) {
        const a = [];
        for ( var i of indexes ) {
            a.push( array[i] );
        }
        return a;
    }
    return array[indexes];
}

export function windowReload () {
    window.location.reload( true );
}

const LOCALE = "pl";

export function toPercentString ( n ) {
    return ( n * 100 ).toLocaleString( LOCALE, { minimumFractionDigits: 1, maximumFractionDigits: 1 } );
}
