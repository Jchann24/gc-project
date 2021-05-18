(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4],{287:function(t,e,n){},289:function(t,e,n){"use strict";n.r(e);var o={name:"BaseHeroText",props:{heroImg:{type:String,required:!0},overlayText:{type:String,required:!0}},data:function(){return{loading:!0}},methods:{imgLoaded:function(){this.loading=!1,this.$emit("loaded")}}},r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 px-0"},[n("div",{staticClass:"hero-container"},[n("img",{staticClass:"hero-img w-100",attrs:{src:t.heroImg,alt:t.overlayText+" banner"},on:{load:t.imgLoaded}}),t._v(" "),n("h1",{staticClass:"overlay-text"},[t._v(t._s(t.overlayText))])])])])])}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";n(287)},309:function(t,e,n){"use strict";n.r(e);n(66),n(43),n(52);var o={name:"AestheticTreatmentsIndex",data:function(){return{allLoaded:!1,treatmentList:[{name:"Laser Treatments",icon:"img/icons/GC-Icon-09.svg",slug:"laser-treatments",description:["Fotona Laser Tattoo Removal","Laser Kuku / Onchyomycosis","Laser Pigmentation","Fotona 4D","Laser Bibir","Laser Hollywood Peel","Laser Toning Melasma","Laser Stretchmark","Laser Vaginal Tightening"]},{name:"Intense Pulse Light",icon:"img/icons/GC-Icon-03.svg",slug:"intense-pulse-light",description:["Photo Rejuvenation (TRIBELLA)"]},{name:"Slimming Programs",icon:"img/icons/GC-Icon-06.svg",slug:"slimming-programs",description:["BTS-Exilis","Meso Slimming Injection"]},{name:"Acne Treatment",icon:"img/icons/GC-Icon-07.svg",slug:"acne-treatment",description:["Active Acne Laser","Acne Injection","Acne Scar Revision"]},{name:"Hair / Skin Treatment",icon:"img/icons/GC-Icon-02.svg",slug:"hair-skin-treatment",description:["Permanent Hair Reduction","Skin Resurfacing","Cellulite Reduction","Skin Tightening","Lifting"]},{name:"Face Treatment",icon:"img/icons/GC-Icon-04.svg",slug:"face-treatment",description:["Botox","Filler","Hydra Facial","Chemical Peeling","Skin Booster"]},{name:"Acupunture",icon:"img/icons/GC-Icon-10.svg",slug:"acupunture",description:[]}]}},head:function(){return{title:"Aesthetic Treatments - GC Aesthetics",meta:[{hid:"description",name:"description",content:"Aesthetic Treatments - GC Aesthetics"}]}},methods:{getSlug:function(t){return t.toLowerCase().replace(/\//g,"").replace(/ +/g," ").replace(/\s/g,"-")},handleLaser:function(){document.getElementById("laserTreatmentDropdown").focus()},onLoaded:function(){var t=this;setTimeout((function(){return t.allLoaded=!0}),1e3)}}},r=(n(294),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition-group",{attrs:{name:"fade"}},[n("client-only",[n("FlowerSpinner",{directives:[{name:"show",rawName:"v-show",value:!t.allLoaded,expression:"!allLoaded"}],key:"spin",staticStyle:{"z-index":"2",position:"absolute",top:"30%","margin-left":"auto","margin-right":"auto",left:"0",right:"0"},attrs:{"animation-duration":1500,size:75,color:"#c89900"}})],1),t._v(" "),n("BaseHeroText",{directives:[{name:"show",rawName:"v-show",value:t.allLoaded,expression:"allLoaded"}],key:"hero",attrs:{"hero-img":"img/banner/aesthetic-treatments-banner.jpg","overlay-text":"Aesthetic Treatments"},on:{loaded:t.onLoaded}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.allLoaded,expression:"allLoaded"}],key:"menus",staticClass:"container mb-5"},[n("div",{staticClass:"row mt-4"},[n("div",{staticClass:"col-12 text-center"},[n("h1",[t._v("Aesthetic Treatments")])])]),t._v(" "),n("div",{staticClass:"row mt-4"},[n("div",{staticClass:"col-12 mt-4"},[n("div",{staticClass:"row d-flex align-items-start justify-content-center"},t._l(t.treatmentList,(function(e,o){return n("div",{key:o,staticClass:"col-12 col-md-6 col-lg-3 d-flex justify-content-center"},[n("div",{staticClass:"card border-0 my-2 my-md-1",staticStyle:{width:"200px"}},[0==o?n("div",{staticClass:"hover-badge text-center"},[n("img",{staticClass:"card-img-top w-50 mx-auto p-2 c-bg-icon",attrs:{src:e.icon,alt:"..."},on:{click:t.handleLaser}})]):n("nuxt-link",{attrs:{to:"/aesthetic-treatments/"+e.slug}},[n("div",{staticClass:"hover-badge text-center"},[n("img",{staticClass:"card-img-top w-50 mx-auto p-2 c-bg-icon",attrs:{src:e.icon,alt:"..."}})])]),t._v(" "),n("div",{staticClass:"card-body text-center"},[n("h5",{staticClass:"c-color-ornaments"},[t._v(t._s(e.name))]),t._v(" "),0!=o?n("div",t._l(e.description,(function(o,i){return n("p",{key:i,staticClass:"card-text mb-0"},[t._v("\n                      "+t._s(o)),i!=e.description.length-1?n("span",[t._v(",")]):t._e()])})),0):n("div",[n("div",{staticClass:"dropdown d-flex justify-content-center"},[n("button",{staticClass:"btn btn-secondary dropdown-toggle font-noto w-100",attrs:{id:"laserTreatmentDropdown",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[n("u",[t._v("Select Here")]),n("i",{staticClass:"ri-arrow-down-s-line ri-xs"})]),t._v(" "),n("ul",{staticClass:"dropdown-menu border-0 c-bg-navbar",attrs:{"aria-labelledby":"laserTreatmentDropdown"}},t._l(e.description,(function(desc,e){return n("li",{key:e},[n("nuxt-link",{staticClass:"dropdown-item text-white",attrs:{to:"/aesthetic-treatments/"+t.getSlug(desc)}},[t._v(t._s(desc))])],1)})),0)])])])],1)])})),0)])])])],1)],1)}),[],!1,null,"4b477da4",null);e.default=component.exports;installComponents(component,{BaseHeroText:n(289).default})}}]);