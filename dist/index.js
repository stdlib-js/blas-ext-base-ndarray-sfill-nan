"use strict";var u=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var t=u(function(g,i){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),n=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),q=require('@stdlib/ndarray-base-data-buffer/dist'),l=require('@stdlib/blas-ext-base-sfill-nan/dist').ndarray,d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function c(a){var r,e;return e=a[0],r=d(a[1]),l(s(e,0),r,q(e),n(e,0),v(e)),e}i.exports=c
});var f=t();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
