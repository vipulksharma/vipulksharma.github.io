(this["webpackJsonpstarter-project"]=this["webpackJsonpstarter-project"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(9),r=n.n(o),l=(n(18),n.p,n(19),n(10)),s=n(11),c=n(13),d=n(12),p=n(5),g=n.n(p),u=n(3),h=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={pip:!1,url:"https://dawchihliou.github.io/react-use-pip/video-sample.mp4",login:!1},e.getMobileOperatingSystem=function(){var e=window.navigator.standalone,t=window.navigator.userAgent.toLowerCase()||navigator.vendor.toLowerCase(),n=/safari/.test(t),i=/iphone|ipod|ipad/.test(t),a=window.hasOwnProperty("app");return!i||e||n?/android/i.test(t)&&a?"Android":"unknown":"iOS"},e.handleEnablePIP=function(){e.setState({pip:!0})},e.handleTogglePIP=function(){e.setState({pip:!e.state.pip})},e.handleDisablePIP=function(){e.setState({pip:!1})},e.checkLogin=function(){localStorage.token||(g.a.canEnablePIP(e.state.url)?e.handleTogglePIP():"Android"===e.getMobileOperatingSystem()?window.app?window.app.tiketTogglePIP(!0):alert("bridge not found"):e.handleTogglePIP(),"iOS"!==e.getMobileOperatingSystem()&&"Android"!==e.getMobileOperatingSystem()||(window.location.href="https://m.tiket.com/login"),window.addEventListener("TL_SET_TOKEN",(function(t){var n;alert("Received message: ".concat(t.detail.token)),localStorage.token=null===t||void 0===t||null===(n=t.detail)||void 0===n?void 0:n.token,e.handleDisablePIP()})))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.url,n=e.pip;return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(g.a,{url:t,pip:!!n,playing:!0,onEnablePIP:this.handleEnablePIP,onDisablePIP:this.handleDisablePIP,stopOnUnmount:!1,playsinline:!0}),Object(u.jsx)("button",{onClick:this.checkLogin,children:n?"Disable PIP":"Enable PIP"}),localStorage.token&&Object(u.jsx)("div",{children:"User logged in already"})]})}}]),n}(i.Component);var b=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(h,{})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),P()}},[[43,1,2]]]);
//# sourceMappingURL=main.7b3ef23c.chunk.js.map