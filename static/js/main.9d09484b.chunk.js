(this["webpackJsonpstarter-project"]=this["webpackJsonpstarter-project"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(9),r=n.n(o),s=(n(18),n.p,n(19),n(10)),p=n(11),l=n(13),c=n(12),d=n(5),u=n.n(d),h=n(3),g=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={pip:!1,url:"",login:!1},e.getMobileOperatingSystem=function(){var e=window.navigator.standalone,t=window.navigator.userAgent.toLowerCase()||navigator.vendor.toLowerCase(),n=/safari/.test(t),i=/iphone|ipod|ipad/.test(t),a=window.hasOwnProperty("Android");return!i||e||n?/android/i.test(t)&&a?"Android":"unknown":"iOS"},e.handleEnablePIP=function(){e.setState({pip:!0})},e.handleTogglePIP=function(){e.setState({pip:!e.state.pip})},e.handleDisablePIP=function(){e.setState({pip:!1})},e.checkLogin=function(){e.state.login||(u.a.canEnablePIP("https://dawchihliou.github.io/react-use-pip/video-sample.mp4")?e.handleTogglePIP():(alert("pip is not enabled"),"Android"===e.getMobileOperatingSystem()?window.app?window.app.tiketTogglePIP(!0):alert("bridge not found"):e.handleTogglePIP()),"iOS"!==e.getMobileOperatingSystem()&&"Android"!==e.getMobileOperatingSystem()||(window.location.href="https://m.tiket.com/login"))},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state,t=(e.url,e.pip);return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(u.a,{url:"https://dawchihliou.github.io/react-use-pip/video-sample.mp4",playing:!0,pip:t,loop:!0,onEnablePIP:this.handleEnablePIP,onDisablePIP:this.handleDisablePIP,stopOnUnmount:!1}),Object(h.jsx)("button",{onClick:this.checkLogin,children:t?"Disable PIP":"Enable PIP"})]})}}]),n}(i.Component);var b=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(g,{})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),o(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),P()}},[[43,1,2]]]);
//# sourceMappingURL=main.9d09484b.chunk.js.map