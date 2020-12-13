(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1qWfw",image:"ImageGallery_image__3iyJf",Loader:"ImageGallery_Loader__31D1o"}},12:function(e,t,a){e.exports={LoaderContainer:"Loader_LoaderContainer__2ki9c",searchQuery:"Loader_searchQuery__3FuQ_",hourglass:"Loader_hourglass__1JroY",flip:"Loader_flip__1zlW3",fill:"Loader_fill__pwisu",glare:"Loader_glare__2zlSQ"}},13:function(e,t,a){e.exports={error:"ImageError_error__2SGI7",queryName:"ImageError_queryName__1x_RU",ImageError:"ImageError_ImageError__1hJIK"}},15:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3gRux",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3sP0-"}},16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3xW2F"}},26:function(e,t,a){e.exports={App:"App_App__brmE5"}},53:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),o=a(7),s=a.n(o),l=a(3),i=a(4),u=a(6),m=a(5),h=a(10),g=a(26),d=a.n(g),y=(a(33),a(8)),p=a.n(y),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",currentPage:1},e.onQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value})},e.onSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery.toLowerCase(),e.state.currentPage),e.setState({searchQuery:"",currentPage:1})):Object(h.b)("Type something to find.")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(r.jsx)("header",{className:p.a.Searchbar,children:Object(r.jsxs)("form",{onSubmit:this.onSubmit,className:p.a.SearchForm,children:[Object(r.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:Object(r.jsx)("span",{className:p.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:p.a.SearchFormInput,value:this.state.searchQuery,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.onQueryChange})]})})}}]),a}(n.Component),b=a(17),f=a(11),_=a.n(f),I=a(27),O=a.n(I),v=a(9),x=a.n(v);function S(e,t){return O.a.get("https://pixabay.com/api/?key=18968535-a98ecca7bd1b0403c78b07ef3&q=".concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e}))}var w=S;S.propTypes={query:x.a.string,searchQuery:x.a.string};var G=a(15),Q=a.n(G),k=function(e){return e.query.map((function(e){return Object(r.jsx)("li",{className:Q.a.ImageGalleryItem,children:Object(r.jsx)("img",{src:e.webformatURL,alt:e.largeImageURL,className:Q.a.ImageGalleryItemImage})},e.id)}))},C=a(12),L=a.n(C);function N(e){var t=e.searchQuery;return Object(r.jsxs)("div",{className:L.a.LoaderContainer,children:[Object(r.jsxs)("p",{children:["\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u0438\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443"," ",Object(r.jsx)("span",{className:L.a.searchQuery,children:t})]}),Object(r.jsx)("div",{className:L.a.hourglass})]})}var q=a(13),E=a.n(q),P=a.p+"static/media/jW.1da8fd95.gif";function M(e){var t=e.error,a=e.searchQuery;return t?Object(r.jsx)("div",{children:t.message}):Object(r.jsxs)("div",{className:E.a.error,children:["\u041d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443"," ",Object(r.jsx)("span",{className:E.a.queryName,children:a}),Object(r.jsx)("img",{src:P,alt:"",className:E.a.ImageError})]})}var U=a(16),F=a.n(U),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.onBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){return Object(r.jsx)("div",{className:F.a.Overlay,onClick:this.onBackdropClick,children:Object(r.jsx)("div",{className:F.a.Modal,children:this.props.children})})}}]),a}(n.Component),D="idle",R="pending",T="resolved",W="rejected",B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={query:[],error:null,status:D,currentPage:1,showModal:!1,largeImageURL:""},e.fetchImages=function(){w(e.props.searchQuery,e.state.currentPage).then((function(t){var a=t.data.hits;a.length?(e.setState((function(e){return{query:[].concat(Object(b.a)(e.query),Object(b.a)(a)),status:T,currentPage:e.currentPage+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),window.addEventListener("click",e.onGalleryItemClick)):e.setState({query:t,status:W})})).catch((function(t){return e.setState({error:t,status:W})}))},e.onGalleryItemClick=function(t){"IMG"===t.target.nodeName&&(e.setState({largeImageURL:t.target.alt}),e.toggleModal())},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.componentDidUpdate=function(t,a){t.searchQuery!==e.props.searchQuery&&(e.setState({status:R,query:[],currentPage:e.props.currentPage}),setTimeout((function(){e.fetchImages()}),3e3))},e}return Object(i.a)(a,[{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.onGalleryItemClick)}},{key:"render",value:function(){var e=this.state,t=e.query,a=e.error,n=e.status,c=this.props.searchQuery;return"idle"===n?Object(r.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."}):"pending"===n?Object(r.jsx)("div",{className:_.a.Loader,children:Object(r.jsx)(N,{searchQuery:c})}):"rejected"===n?Object(r.jsx)(M,{error:a,searchQuery:c}):"resolved"===n?Object(r.jsxs)("ul",{className:_.a.ImageGallery,children:[Object(r.jsx)(k,{query:t}),this.state.showModal&&Object(r.jsx)(A,{onClose:this.toggleModal,children:Object(r.jsx)("img",{src:this.state.largeImageURL,alt:"",className:_.a.image})}),Object(r.jsx)("button",{type:"button",onClick:this.fetchImages,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"})]}):void 0}}]),a}(n.Component),J=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",currentPage:1},e.onFormSubmit=function(t){e.setState({searchQuery:t,currentPage:1})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:d.a.App,children:[Object(r.jsx)(j,{onSubmit:this.onFormSubmit}),Object(r.jsx)(B,{searchQuery:this.state.searchQuery,currentPage:this.state.currentPage}),Object(r.jsx)(h.a,{autoClose:3e3,position:"top-center"})]})}}]),a}(n.Component);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2sUIh",ImageGallery:"Searchbar_ImageGallery__zxUSM",ImageGalleryItem:"Searchbar_ImageGalleryItem__3KXXF",ImageGalleryItem_Image:"Searchbar_ImageGalleryItem_Image__3ZmlG"}}},[[53,1,2]]]);
//# sourceMappingURL=main.7b79b3ba.chunk.js.map