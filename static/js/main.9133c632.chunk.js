(this["webpackJsonpstarter-project"]=this["webpackJsonpstarter-project"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(9),r=n.n(o),s=(n(18),n.p,n(19),n(10)),l=n(11),c=n(13),p=n(12),d=n(5),g=n.n(d),u=n(3),h=function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={pip:!1,url:"https://dawchihliou.github.io/react-use-pip/video-sample.mp4",login:!1},e.getMobileOperatingSystem=function(){var e=window.navigator.standalone,t=window.navigator.userAgent.toLowerCase()||navigator.vendor.toLowerCase(),n=/safari/.test(t),i=/iphone|ipod|ipad/.test(t),a=window.hasOwnProperty("app");return!i||e||n?/android/i.test(t)&&a?"Android":"unknown":"iOS"},e.handleEnablePIP=function(){e.setState({pip:!0})},e.handleTogglePIP=function(){e.setState({pip:!e.state.pip})},e.handleDisablePIP=function(){e.setState({pip:!1})},e.checkLogin=function(){e.state.login?"unknown"===e.getMobileOperatingSystem()&&e.handleTogglePIP():(g.a.canEnablePIP(e.state.url)?e.handleTogglePIP():"Android"===e.getMobileOperatingSystem()?window.app?window.app.tiketTogglePIP(!0):alert("bridge not found"):e.handleTogglePIP(),"iOS"!==e.getMobileOperatingSystem()&&"Android"!==e.getMobileOperatingSystem()||(window.location.href="https://m.tiket.com/login"),window.addEventListener("TL_SET_TOKEN",(function(t){alert("Received message: ".concat(t.data)),e.handleDisablePIP()})))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.url,n=e.pip;return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(g.a,{url:t,pip:!!n,playing:!0,onEnablePIP:this.handleEnablePIP,onDisablePIP:this.handleDisablePIP,stopOnUnmount:!1,playsinline:!0}),Object(u.jsx)("button",{onClick:this.checkLogin,children:n?"Disable PIP":"Enable PIP"})]})}}]),n}(i.Component);var P=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(h,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),b()}},[[43,1,2]]]);
//# sourceMappingURL=main.9133c632.chunk.js.map