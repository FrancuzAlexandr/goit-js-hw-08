function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(t,e,n){var o,i,r,f,a,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,r=i;return o=i=void 0,c=e,f=t.apply(r,n)}function j(t){return c=t,a=setTimeout(h,e),l?y(t):f}function O(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=r}function h(){var t=v();if(O(t))return w(t);a=setTimeout(h,function(t){var n=e-(t-u);return s?m(n,r-(t-c)):n}(t))}function w(t){return a=void 0,p&&o?y(t):(o=i=void 0,f)}function T(){var t=v(),n=O(t);if(o=arguments,i=this,u=t,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,e),y(u)}return void 0===a&&(a=setTimeout(h,e)),f}return e=b(e)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,e):r,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=i=a=void 0},T.flush=function(){return void 0===a?f:w(v())},T}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(t,e,{leading:o,maxWait:e,trailing:i})};const y=document.querySelector(".feedback-form");y.addEventListener("submit",(function(t){t.preventDefault(),console.log(j),t.target.reset(),localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",t(e)((function(t){j[t.target.name]=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500));let j={email:"",message:""};!function(){const t=localStorage.getItem("feedback-form-state");if(t){j=JSON.parse(t);const e=Object.keys(j);for(const t of e)y.elements[t].value=j[t]}}();
//# sourceMappingURL=03-feedback.6d5c4130.js.map
