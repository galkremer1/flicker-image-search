(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(53),i=a.n(r),c=(a(63),a(15)),s=a(16),l=a(19),h=a(17),p=a(20),d=a(18);function u(e){return e.map(function(e){var t=e.farm,a=e.server,n=e.id,o=e.secret;return{url:"https://farm"+t+".staticflickr.com/"+a+"/"+n+"_"+o+".jpg",title:e.title,id:""+o+n}})}var m={root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400,margin:"auto"},input:{marginLeft:8,flex:1},iconButton:{padding:10},divider:{width:1,height:28,margin:4},searchContainer:{padding:10,backgroundColor:"gray"},appContainer:{textAlign:"center"},appHeader:{backgroundColor:"#282c34",minHeight:45,fontDize:"calc(10px + 2vmin)",color:"white",position:"fixed",width:"100%",zIndex:2}},f=a(57),g=a.n(f),v=a(55),b=a.n(v),w=a(54),y=a.n(w),j=200,k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleSearch=y()(function(e){(0,a.props.handleSearch)(e)},j),a.handleInputChange=function(e){var t=e.target.value.toLowerCase();a.handleSearch(t)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.inputPlaceHolder;return o.a.createElement("div",{className:t.searchContainer},o.a.createElement(b.a,{className:t.root,elevation:1},o.a.createElement(g.a,{onChange:this.handleInputChange,className:t.input,placeholder:a})))}}]),t}(n.Component),O=Object(d.withStyles)(m)(k),x=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.photos,n=e.isLoading;return o.a.createElement("div",{className:t.galleryContainer},a.map(function(e){return o.a.createElement("img",{className:t.photo,key:e.id,alt:e.title,src:e.url})}),!n&&0===a.length&&o.a.createElement("div",null,"No results"))}}]),t}(n.Component),C=Object(d.withStyles)({galleryContainer:{display:"flex",flexWrap:"wrap",justifyContent:"center",position:"relative",top:80},photo:{maxWidth:"30%",maxHeight:150,minWidth:100,flexFlow:"row nowrap",alignItems:"center",margin:5,transition:"all 1s",cursor:"pointer","&:hover":{transform:"scale(1.2)"}}})(x),S=(a(137),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).toggleLoader=function(e){a.setState({loading:e})},a.handleSearch=function(e){a.getData(e)},a.state={searchInputPlaceHolder:"Search Flicker...",photos:[],loading:!0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData("animals")}},{key:"getData",value:function(e){var t=this;this.toggleLoader(!0),function(e){return fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1&text="+e).then(function(e){return e.text()}).then(function(e){return JSON.parse(e)})}(e).then(function(e){e&&e.photos&&e.photos.photo&&(console.log(e.photos.photo),t.setState({photos:u(e.photos.photo),loading:!1}))})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.appHeader,n=this.state,r=n.searchInputPlaceHolder,i=n.photos,c=n.loading;return o.a.createElement("div",{className:t.appContainer},o.a.createElement("header",{className:t.appHeader},a,o.a.createElement(O,{handleSearch:this.handleSearch,inputPlaceHolder:r})),o.a.createElement(C,{photos:i,isLoading:c}),c&&o.a.createElement("div",{className:"loading"},"Loading\u2026"))}}]),t}(n.Component)),E=Object(d.withStyles)(m)(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,{appHeader:"Flicker Image Search"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,a){e.exports=a(138)},63:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.73855daf.chunk.js.map