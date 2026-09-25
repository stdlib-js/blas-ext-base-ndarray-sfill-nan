"use strict";var l=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var f=l(function(h,q){
var c=require('@stdlib/ndarray-base-numel-dimension/dist'),d=require('@stdlib/ndarray-base-clip-index/dist'),o=require('@stdlib/ndarray-base-stride/dist'),p=require('@stdlib/ndarray-base-offset/dist'),x=require('@stdlib/ndarray-base-data-buffer/dist'),g=require('@stdlib/blas-ext-base-sfill-nan/dist').ndarray,n=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function m(a){var r,i,s,t,v,u,e;return e=a[0],s=n(a[1]),u=c(e,0),t=d(n(a[2]),u),v=d(n(a[3]),u),t>=v||(r=o(e,0),i=p(e)+r*t,g(v-t,s,x(e),r,i)),e}q.exports=m
});var N=f();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
