/*
Page Visibility wrapper
Tiffany B. Brown <http://tiffanybbrown.com/>
Released under an MIT license.
 
This script adds a wrapper around prefixed versions of 
document.visibilityState and document.hidden so that you can use a
single syntax and listen for a single event.
 
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
 
 
(function(){
 
	/* A wrapper for browsers that don't support defineProperty */
	function define_property(obj, propertyname, func){
		if( Object.defineProperty ){
			Object.defineProperty( obj, propertyname, { get: func });
		} else {
			obj.__defineGetter__(propertyname, func);
		}
	}
	
	if( document.visibilityState === undefined ){
		
		define_property( HTMLDocument.prototype, 'visibilityState', function(){
			var o;
			for(o in document){
				if( (/VisibilityState/).test(o) ){
					return document[o];
				}
			}
		});	
		
		/* 
		Dispatching a visibilitychange event in whenever a prefixed one is 
		dispatched. Probably not the best way to get these events, but there's 
		currently no 'onvisibilitychange' property defined in the spec.
		*/
	
		['moz','webkit'].map(function(p){	
			var visibilitychange = p+'visibilitychange';  	
    		
			document.addEventListener( visibilitychange, function(e){
				if( e.type !== 'visibilitychange' ){
					var vischange = document.createEvent('Event');
					vischange.initEvent('visibilitychange', e.bubbles, e.cancelable );
					document.dispatchEvent( vischange );
				}
			}, false); 		
   		});
	}
 
	if( document.hidden === undefined ){	
		define_property( HTMLDocument.prototype, 'hidden', function(){
			var o;
			for(o in document){
				if( (/Hidden/).test(o) ){
					return document[o];
				}
			}
		});	
	}
	
})();