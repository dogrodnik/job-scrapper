(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{193:function(e,t,a){e.exports=a(375)},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},374:function(e,t,a){},375:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),i=a(101),l=a.n(i),s=a(168),u=a(26),m=a(169),f=a.n(m).a.create({baseURL:"https://job-scrapper-dogrodnik.herokuapp.com"}),d=(a(216),a(217),a(218),function(e){var t=e.keyNumber,a=e.linkData,n=e.jobName,c=e.city,o=e.company;return r.a.createElement("div",{className:"job-offer shadow",key:t},r.a.createElement("a",{className:"job-offer-element",href:a,target:"_blank",rel:"noopener noreferrer"},n),r.a.createElement("div",{className:"job-offer-element"},r.a.createElement("div",{className:"job-offer-element-details"},r.a.createElement("i",{className:"map marker alternate icon blue"}),c),function(e){if(e){var t=e.startsWith("Zobacz profil")?e.replace("Zobacz profil",""):e;return r.a.createElement("div",{className:"job-offer-element-details"},r.a.createElement("div",{className:"job-offer-element-details"},r.a.createElement("i",{className:"suitcase icon blue"}),t))}}(o)))}),b=(a(219),function(e){var t=e.errorDescription,a=e.advice;return r.a.createElement("div",{className:"nothing-found"},r.a.createElement("div",{className:"nothing-found-element icon"},r.a.createElement("i",{className:"exclamation triangle icon massive"})),r.a.createElement("div",{className:"nothing-found-element"},t),r.a.createElement("div",{className:"nothing-found-element"},a))}),p=function(e){var t=e.loading,a=e.searchingStatus,n=e.offers,c=e.serverError;return r.a.createElement("div",{className:"flex-offers"},!1===t&&"finished"===a&&0===n.length?r.a.createElement(b,{errorDescription:"Oooops... Nothing found...",advice:"Try to search another word."}):!1===t&&!0===c&&null==n?r.a.createElement(b,{errorDescription:"Oooops... Server error...",advice:"Try again later."}):void 0,function(){if(!0===t)return r.a.createElement("div",{className:"sixteen wide column"},r.a.createElement("div",{className:"ui active inverted dimmer"},r.a.createElement("div",{className:"ui text loader"},"Loading...")),r.a.createElement("p",null));var e=[];if(null!==n){for(var a=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(n),c=0;c<n.length;c++){var o=a[c],i=o.jobName,l=o.linkData,s=o.city,u=o.company;e.push(r.a.createElement(d,{key:i+c,keyNumber:i+c,linkData:l,jobName:i,city:s,company:u}))}return e}}())},v=a(382),h=function(e){var t=e.header,a=e.description;return r.a.createElement(v.a,{defaultOpen:!0},r.a.createElement(v.a.Header,null,t),r.a.createElement(v.a.Content,null,r.a.createElement(v.a.Description,null,a)))},E=(a(374),function(e){var t=e.setNumOfPages,a=e.getOffers,c=Object(n.useState)(!1),o=Object(u.a)(c,2),i=o[0],l=o[1],s=Object(n.useRef)(),m=Object(n.useRef)(),f=Object(n.useRef)(),d=function(e){for(var t=s.current.children,a=1;a<t.length;a++)t[a].style.background="rgb(33,133,208)";e.style.background="rgb(13,113,187)"};return r.a.createElement("div",{className:"sixteen wide column"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"head"},r.a.createElement("h1",{className:"ui header"},"Job Scrapper")),r.a.createElement("div",{style:{minWidth:"250px",margin:"20px 0px 0px 0px"}},r.a.createElement("div",{ref:s,id:"pages-buttons",className:"ui buttons blue",style:{padding:"0px 15px"}},r.a.createElement("div",{className:"ui button active blue",style:{backgroundColor:"rgb(13,113,187)"}},"Search Scope"),r.a.createElement("button",{className:"ui button",value:1,onClick:function(e){t(e),d(e.target)}},"Small"),r.a.createElement("button",{className:"ui button",value:5,onClick:function(e){t(e),d(e.target)}},"Normal"),r.a.createElement("button",{className:"ui button",value:15,onClick:function(e){t(e),d(e.target),l(!0)}},"Big"),function(){if(i)return r.a.createElement(h,{header:"Information",description:"Using big search scope can take a few minutes..."})}())),r.a.createElement("div",{className:"ui input focus ",style:{margin:"20px 0px 0px 0px"}},r.a.createElement("input",{ref:m,type:"text",id:"search-bar-city",placeholder:"Location..."}),r.a.createElement("input",{ref:f,type:"text",id:"search-bar-category",placeholder:"Category..."}),r.a.createElement("button",{id:"search-button",className:"ui primary button attached",onClick:function(){return a(m.current.value,f.current.value)}},"Click to Search"))))}),g=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(u.a)(o,2),m=i[0],d=i[1],b=Object(n.useState)(null),v=Object(u.a)(b,2),h=v[0],g=v[1],N=Object(n.useState)(1),y=Object(u.a)(N,2),j=y[0],k=y[1],x=Object(n.useState)(!1),O=Object(u.a)(x,2),S=O[0],w=O[1],C=function(){var e=Object(s.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(!0);case 2:return e.next=4,f.get("/jobs-search/?city=".concat(t,"&pages=").concat(j,"&category=").concat(a)).then((function(e){c(e.data),d(!1),w(!1),g("finished")})).catch((function(){d(!1),w(!0)}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"ui grid"},r.a.createElement(E,{setNumOfPages:function(e){return k(e.target.value)},getOffers:C}),r.a.createElement(p,{searchingStatus:h,offers:a,loading:m,serverError:S}))};o.a.render(r.a.createElement(g,null),document.querySelector("#root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.ae69f2ff.chunk.js.map