(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{13:function(e,t,a){e.exports={Modal__overlay:"Modal_Modal__overlay__1GYmJ",Modal__content:"Modal_Modal__content__159Iv"}},22:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__VPBD0",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__1yl5K"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1hnjP"}},24:function(e,t,a){e.exports={Button:"Button_Button__HOrbw"}},27:function(e,t,a){e.exports={loader:"Loader_loader__3DJge"}},32:function(e,t,a){},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3YYEG",SearchForm:"Searchbar_SearchForm__1hX1-",SearchForm__button:"Searchbar_SearchForm__button__1n9Wo",SearchForm__button__label:"Searchbar_SearchForm__button__label__3Y0Vd",SearchForm__input:"Searchbar_SearchForm__input__2EpS7"}},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),s=(a(32),a(10)),l=a(4),i=a(7),u=a.n(i),m=a(6),b=a(1),j=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],o=c[1];return Object(b.jsx)("header",{className:u.a.Searchbar,children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r?(o(""),t(r)):m.b.error("\u0412\u0432\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e\u0438\u0441\u043a\u0430")},className:u.a.SearchForm,children:[Object(b.jsx)("button",{type:"submit",className:u.a.SearchForm__button,children:Object(b.jsx)("span",{className:u.a.SearchForm__button__label,children:"Search"})}),Object(b.jsx)("input",{className:u.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value)},value:r})]})})},_=a(13),h=a.n(_),d=document.querySelector("#modal-root"),g=function(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){window.addEventListener("keydown",o)}),[]);var c=function(){window.removeEventListener("keydown",o),t()},o=function(e){"Escape"===e.code&&c()};return Object(r.createPortal)(Object(b.jsx)("div",{className:h.a.Modal__overlay,onClick:function(e){e.currentTarget===e.target&&c()},children:Object(b.jsx)("div",{className:h.a.Modal__content,children:a})}),d)},f=a(77),O=a(22),p=a.n(O),S=function(e){var t=e.toggle,a=e.images;return Object(b.jsx)(b.Fragment,{children:a.map((function(e){return Object(b.jsx)("li",{onClick:t,className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:e.webformatURL,alt:e.tags,className:p.a.ImageGalleryItem__image,"data-largeimage":e.largeImageURL})},Object(f.a)())}))})},x=a(23),v=a.n(x),y=function(e){var t=e.images,a=e.toggleModal;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:v.a.ImageGallery,children:Object(b.jsx)(S,{toggle:a,images:t})})})},I=a(24),F=a.n(I);function w(e){var t=e.onClick;return Object(b.jsx)("button",{onClick:t,className:F.a.Button,children:"Load more"})}var G=a(25),M=a.n(G);var N=a(26),C=a.n(N),k=a(27),B=a.n(k),E=function(){return Object(b.jsx)(C.a,{type:"MutatingDots",color:"#00BFFF",height:100,width:100,timeout:500,className:B.a.loader})};a(73),a(74);var L=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(l.a)(r,2),i=o[0],u=o[1],_=Object(n.useState)(""),h=Object(l.a)(_,2),d=h[0],f=h[1],O=Object(n.useState)(!1),p=Object(l.a)(O,2),S=p[0],x=p[1],v=Object(n.useState)(1),I=Object(l.a)(v,2),F=I[0],G=I[1],N=Object(n.useState)(""),C=Object(l.a)(N,2),k=C[0],B=C[1],L=Object(n.useState)(""),T=Object(l.a)(L,2),D=T[0],P=T[1];Object(n.useEffect)((function(){Y(d,F,"searchBtn")}),[d]),Object(n.useEffect)((function(){Y(d,F,"loadMoreBtn")}),[F]);var J=Object(n.useRef)(!0);Object(n.useEffect)((function(){J.current?J.current=!1:0===i.length&&R()}),[i]);var Y=function(e,t,a){(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return M.a.get("https://pixabay.com/api/?key=22398165-fb0cc592f6e3d650fc4eef6c6&q=".concat(e,"&page=").concat(t,"&per_page=12&image_type=photo"))})(e,t).then((function(e){if(200===e.status&&d.trim().length&&("searchBtn"===a&&u(Object(s.a)(e.data.hits)),"loadMoreBtn"===a&&(u([].concat(Object(s.a)(i),Object(s.a)(e.data.hits))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))),404===e.status)throw new Error(e.message||"pictures not exist")})).catch((function(e){console.error("error",e)})).then((function(){x(!1)}))},R=function(){m.b.error("\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 - \u041d\u0418\u0427\u0415\u0413\u041e \u041d\u0415 \u041d\u0410\u0419\u0414\u0415\u041d\u041e!")};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m.a,{autoClose:2e3,newestOnTop:!0}),Object(b.jsx)(j,{onSubmit:function(e){x(!0),f(e)}}),0!==i.length&&Object(b.jsx)(y,{toggleModal:function(e){c(!a),void 0!==e&&(B(e.target.dataset.largeimage),P(e.target.alt))},images:i}),a&&Object(b.jsx)(g,{onClose:function(){c(!a)},children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:k,alt:D})})}),S&&Object(b.jsx)(E,{}),i.length>0&&Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(w,{id:"loadmore",onClick:function(){G(F+1),x(!0)}})})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),T()}},[[75,1,2]]]);
//# sourceMappingURL=main.270bbc76.chunk.js.map