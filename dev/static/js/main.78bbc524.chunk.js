(this["webpackJsonpsmart-calc-v2"]=this["webpackJsonpsmart-calc-v2"]||[]).push([[0],{121:function(e,t,s){},122:function(e,t,s){"use strict";s.r(t);var n=s(5),c=s.n(n),r=s(32),i=s(6),o=s(20),a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,132)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),r(e),i(e)}))},l="data/setData",d="data/setError",u={loading:!0,errorOccured:!1,farmerCost:173};var b=function(e){return e.data.error},j=function(e){return e.data.errorOccured},h=function(e){return e.data.loading},m=function(e){return Object.keys(e.data.data.yield)},p=function(e){return["s","si","sl","sp","sk","sil","sip","sik","slp","slk","spk","silp","silk","sipk","slpk","silpk"]},f=function(e){return e.data.data.yield},O=function(e){return e.data.farmerCost};var x={ph:2,phThreshold:6,potassium:0,potassiumThreshold:110,phosphorus:0,phosphorusThreshold:30,selectedFarm:null},v="soilProperties/setPH",g="soilProperties/setPotassium",w="soilProperties/setPhosphorus",N="soilProperties/setSelectedFarm";function y(e){return{type:v,value:e}}function C(e){return{type:g,value:e}}function S(e){return{type:w,value:e}}var k=function(e){return e.soilProperties.ph},I=function(e){return e.soilProperties.phThreshold},T=function(e){return e.soilProperties.ph>=e.soilProperties.phThreshold},P=function(e){return e.soilProperties.potassium},F=function(e){return e.soilProperties.potassiumThreshold},z=function(e){return e.soilProperties.potassium>=e.soilProperties.potassiumThreshold},A=function(e){return e.soilProperties.phosphorus},B=function(e){return e.soilProperties.phosphorusThreshold},M=function(e){return e.soilProperties.phosphorus>=e.soilProperties.phosphorusThreshold},R=function(e){return e.soilProperties.selectedFarm};var q=s(8),D=s(2),E=function(e){var t=e.name,s=e.state,c=e.set,r=e.units,o=e.formatter,a=e.children,l=e.labelClassNames,d=e.inputClassNames,u=Object(i.b)(),b=Object(n.useState)(s),j=Object(q.a)(b,2),h=j[0],m=j[1],p=Object(n.useState)(!1),f=Object(q.a)(p,2),O=f[0],x=f[1];return Object(n.useEffect)((function(){var e=Number.parseFloat(h);!isNaN(e)&&e&&e!==s&&u(c(e))}),[u,s,c,h]),o||(o=function(e){return e}),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("label",{className:l,htmlFor:t,children:[" ",a," "]}),Object(D.jsxs)("div",{style:{whiteSpace:"nowrap"},className:d,children:[Object(D.jsx)("input",{style:{width:"5rem"},name:t,value:O?h:o(h),onBlur:function(e){return x(!1)},onFocus:function(e){return x(!0)},onChange:function(e){return m(e.target.value)}}),Object(D.jsxs)("span",{className:"units",children:[" ",r," "]})]})]})},L=s(3),_=s(1),H={seedCost:44.8,limeCost:37.25,inoculumCost:14.14,phosphorusCost:109.93,potassiumCost:58.15},G="inputCosts/setSeedCost",$="inputCosts/setLimeCost",U="inputCosts/setInoculumCost",Y="inputCosts/setPhosphorusCost",K="inputCosts/setPotassiumCost";function J(e){return{type:G,value:e}}function V(e){return{type:$,value:e}}function X(e){return{type:U,value:e}}function W(e){return{type:Y,value:e}}function Q(e){return{type:K,value:e}}var Z=function(e){return e.inputCosts.seedCost},ee=function(e){return e.inputCosts.limeCost},te=function(e){return e.inputCosts.inoculumCost},se=function(e){return e.inputCosts.phosphorusCost},ne=function(e){return e.inputCosts.potassiumCost};var ce={inputsBudget:200,plotSize:.5,priceOfGrain:400},re="otherInfo/setInputsBudget",ie="otherInfo/setPlotSize",oe="otherInfo/setPriceOfGrain";function ae(e){return{type:re,value:e}}function le(e){return{type:ie,value:e}}function de(e){return{type:oe,value:e}}var ue=function(e){return e.otherInfo.inputsBudget},be=function(e){return e.otherInfo.plotSize},je=function(e){return e.otherInfo.priceOfGrain};var he={s:"#ff0000a0",si:"#ffff40",sl:"#ffff40",sp:"#ffff30",sk:"#ffff30",sil:"#0000ffa0",sip:"#0000ffa0",sik:"#0000ffa0",slp:"#0000ffa0",slk:"#0000ffa0",spk:"#0000ffa0",silp:"#00ff00a0",silk:"#00ff00a0",sipk:"#00ff00a0",slpk:"#00ff00a0",silpk:"#ff00ffa0"},me=function(e){var t=e.bundle,s=(e.data,e.location,e.priceOfSoybean),n=e.farmerCost,c=e.budget,r=e.plotSize,i=e.phSufficient,o=e.phosphorusSufficient,a=e.limeCost,l=e.phosphorusCost,d=e.potassiumCost,u=e.potassiumSufficient,b=e.inoculumCost,j=e.seedCost,h=e.bundleData;if(!h)return{undef:!0};var m,p=0,f=!0,O=Object(_.a)(t);try{for(O.s();!(m=O.n()).done;){switch(m.value){case"s":p+=j;break;case"i":p+=b;break;case"l":i&&(f=!1),p+=a;break;case"p":o&&(f=!1),p+=l;break;case"k":u&&(f=!1),p+=d}}}catch(g){O.e(g)}finally{O.f()}var x=h.Yield*s-p-n,v=p*r<c;return{bundle:t,undef:!1,bundleSize:t.length,bundleCost:p,margins:x,totalMargins:r*x,roi:x/p,bundleYield:h.Yield,required:f,affordable:v,totalCost:p+n,color:he[t]}},pe=function(){var e=Object(i.c)(p),t=Object(i.c)(f),s=Object(i.c)(R),n=Object(i.c)(je),c=Object(i.c)(O),r=Object(i.c)(ue),o=Object(i.c)(be),a=Object(i.c)(T),l=Object(i.c)(M),d=Object(i.c)(ee),u=Object(i.c)(se),b=Object(i.c)(ne),j=Object(i.c)(z),h=Object(i.c)(te),m=Object(i.c)(Z);return e.map((function(e){return me({bundle:e,data:t,location:s,priceOfSoybean:n,farmerCost:c,budget:r,plotSize:o,phSufficient:a,phosphorusSufficient:l,limeCost:d,phosphorusCost:u,potassiumCost:b,potassiumSufficient:j,inoculumCost:h,seedCost:m,bundleData:t[s][e]})}))},fe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=pe();return Object(L.a)(t).filter((function(t){return!e||t.affordable&&t.required&&!t.undef})).sort((function(e,t){return t.margins-e.margins}))},Oe=function(){var e=fe();return 0===e.length?null:e[0]},xe=function(e){var t=Object(i.b)(),s=Object(i.c)(m),n=Object(i.c)(R);return Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)("label",{className:"col",htmlFor:"location",children:" Nearest SMART Farm: "}),Object(D.jsx)("select",{className:"col form-select me-5",style:{width:"min-content"},name:"location",value:n,onChange:function(e){return t((s=e.target.value,{type:N,value:s}));var s},children:s.map((function(e){return Object(D.jsxs)("option",{value:e,children:[" ",e," "]},e)}))})]})},ve=function(e){var t=Object(i.c)(k),s=Object(i.c)(I),n=Object(i.c)(T),c=Object(i.c)(P),r=Object(i.c)(F),o=Object(i.c)(z),a=Object(i.c)(A),l=Object(i.c)(B),d=Object(i.c)(M);return Object(D.jsxs)("form",{className:"border border-3 shadow p-2 mb-2 me-4",style:{width:"max-content"},children:[Object(D.jsx)("div",{className:"row mb-3",children:Object(D.jsxs)(E,{labelClassNames:"col",inputClassNames:"col",name:"ph",state:t,set:y,children:["pH (threshold: ",s,")",Object(D.jsxs)("span",{className:"badge ms-1 ".concat(n?"bg-success":"bg-danger"),children:[" ",n?"Sufficient":"Insufficient"," "]})]})}),Object(D.jsx)("div",{className:"row mb-3",children:Object(D.jsxs)(E,{labelClassNames:"col-6",inputClassNames:"col",name:"potassium",state:c,set:C,units:"mg/kg",children:["potassium (threshold: ",r,")",Object(D.jsxs)("span",{className:"badge ms-1 ".concat(o?"bg-success":"bg-danger"),children:[" ",o?"Sufficient":"Insufficient"," "]})]})}),Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)(E,{labelClassNames:"col",inputClassNames:"col",name:"phosphorus",state:a,set:S,units:"mg/kg",children:["phosphorus (threshold: ",l,")",Object(D.jsxs)("span",{className:"badge ms-1 ".concat(d?"bg-success":"bg-danger"),children:[" ",d?"Sufficient":"Insufficient"," "]})]})}),Object(D.jsx)(xe,{})]})},ge=function(e){var t,s=Object(i.c)(R),n=Object(i.c)((t=s,function(e){return e.data.data.soil[t]}));return Object(D.jsxs)("div",{className:"border border-3 shadow",children:[Object(D.jsxs)("h4",{className:"m-3 text-decoration-underline",children:["Measured Soil Properties for sample farm in ",s]}),Object(D.jsx)("table",{className:"align-middle table table-bordered fs-5 mx-auto",style:{width:"max-content"},children:Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"Soil"}),Object(D.jsx)("td",{children:n.Soil||"unkown"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"Texture"}),Object(D.jsxs)("td",{children:[" ",n.Texture||"unkown"]})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"pH"}),Object(D.jsx)("td",{children:n.pH||"unkown"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"K"}),Object(D.jsxs)("td",{children:[n.K||"unkown"," "]})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"OM"}),Object(D.jsx)("td",{children:n.OM||"unkown"})]})]})})]})},we=function(e){return Object(D.jsxs)("div",{className:"",children:[Object(D.jsxs)("div",{className:"w-100",children:[Object(D.jsx)("h1",{children:" Soil Properties "}),Object(D.jsxs)("p",{className:"fs-5",children:["Soil health is critical for soybean production as insufficient amounts of nutrients in the soils can restrict plant growth and yields. Knowing soil nutrient concentrations is important in deciding which inputs to invest in to maximize yields.",Object(D.jsx)("br",{}),"In this section, you will put in your field\u2019s soil pH, P, and K levels into the boxes below and select your location to get comparable yield responses. Thresholds are based off Mehlich-3 values for phosphorus and potassium. If your soil P test was performed using Bray-P for phosphorus, multiple your values by 1.35 to convert to Mehlich-3 values. If your soil K test was performed using ammonium acetate, multiply your values by 1.14 to convert to Mehlich-3 values. Any values that are above the soil response threshold are considered \u2018sufficient\u2019 and bundles with those inputs will not be considered for recommendation."]})]}),Object(D.jsxs)("div",{className:"d-flex justify-content-center flex-wrap",children:[Object(D.jsx)(ve,{}),Object(D.jsx)(ge,{})]})]})},Ne=function(e){var t=Object(i.c)(Z),s=Object(i.c)(ee),n=Object(i.c)(te),c=Object(i.c)(se),r=Object(i.c)(ne),o=Object(i.c)(ue),a=Object(i.c)(be),l=function(e){return"$"+e};return Object(D.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[Object(D.jsx)("h1",{children:" Input Budget and Costs "}),Object(D.jsxs)("p",{className:"fs-5",children:["A farmer\u2019s budget can make some inputs, or bundles of inputs, financially impractical. The SMART Farms use a stepwise bundling approach that considers your cost of inputs and budget to determine bundle recommendations for your unique situation. This stepwise approach balances the risk of incorporating new technologies into current farming practices. You will put in your starting input budget (USD), plot size (hectares), and the cost of the four inputs considered (USD). Any bundles that cost more than your allotted budget will not be considered for recommendation. For help converting local currency to USD please use ",Object(D.jsx)("a",{href:"https://www.xe.com/currencyconverter/",target:"_blank",rel:"noreferrer",children:"this currency converter"}),"."]}),Object(D.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[Object(D.jsxs)("form",{className:"border border-3 shadow p-2 mb-2 me-4 align-self-center",style:{width:"max-content"},children:[Object(D.jsx)("div",{className:"row mb-3",children:Object(D.jsx)(E,{labelClassNames:"col",inputClassNames:"col",formatter:l,name:"seedCost",state:t,set:J,units:"per hectare",children:"Seed:"})}),Object(D.jsx)("div",{className:"row my-3",children:Object(D.jsx)(E,{labelClassNames:"col",inputClassNames:"col",formatter:l,name:"limeCost",state:s,set:V,units:"per hectare",children:"Lime:"})}),Object(D.jsx)("div",{className:"row my-3",children:Object(D.jsx)(E,{labelClassNames:"col",inputClassNames:"col",formatter:l,name:"inoculumCost",state:n,set:X,units:"per hectare",children:"Inoculum:"})}),Object(D.jsx)("div",{className:"row my-3",children:Object(D.jsx)(E,{labelClassNames:"col",inputClassNames:"col",formatter:l,name:"phosphorusCost",state:c,set:W,units:"per hectare",children:"Phosphorus:"})}),Object(D.jsx)("div",{className:"row my-3",children:Object(D.jsx)(E,{labelClassNames:"col",inputClassNames:"col",formatter:l,name:"potassiumCost",state:r,set:Q,units:"per hectare",children:"Potassium:"})})]}),Object(D.jsxs)("form",{className:"border border-3 shadow p-2 mb-2 me-4 align-self-center",style:{width:"max-content"},children:[Object(D.jsx)("div",{className:"row",children:Object(D.jsx)(E,{labelClassNames:"col-5",inputClassNames:"col-7",formatter:l,name:"inputsBudget",state:o,set:ae,units:"per hectare",children:"Inputs Budget:"})}),Object(D.jsx)("div",{className:"row mt-3",children:Object(D.jsx)(E,{labelClassNames:"col-5",inputClassNames:"col-7",name:"plotSize",state:a,set:le,units:"hectare".concat(a>1?"s":""),children:"Plot Size:"})})]})]})]})},ye=function(e){var t=Object(i.c)(je);return Object(D.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[Object(D.jsx)("h1",{children:" Price of Grain"}),Object(D.jsx)("p",{className:"fs-5",children:"The final step in determining which bundle is right for you is to consider the gross margins of each bundle. This is tied to the price of grain at the time of sale. From the remaining choices, the bundle with the highest gross margin (revenue minus the cost of inputs) will be selected as your bundle recommendation."}),Object(D.jsx)("form",{className:"border border-3 shadow p-2 mb-2 me-4 align-self-center",style:{width:"max-content"},children:Object(D.jsx)("div",{className:"row mb-3",children:Object(D.jsx)(E,{labelClassNames:"col",inputClassNames:"col",formatter:function(e){return"$"+e},name:"priceOfGrain",state:t,set:de,units:"per MT",children:"Price of Grain:"})})})]})},Ce=(s(80),function(e){var t=e.count,s=e.selected;return Object(D.jsxs)("svg",{className:"bag-".concat(t," ").concat(s?"selected":""),style:{gridArea:"i".concat(t)},version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"-50 -50 612 612",enableBackground:"new 0 0 512 512",children:[" ",Object(D.jsx)("path",{d:"M336,111.797c8.844,0,16,7.156,16,16s-7.156,16-16,16H176c-8.844,0-16-7.156-16-16s7.156-16,16-16H336z M345.25,159.797 H166.734C87.469,217.609,32,340.141,32,417.953c0,104.656,100.281,93.5,224,93.5s224,11.156,224-93.5 C480,340.141,424.531,217.609,345.25,159.797z M166.734,95.797H345.25c0,0,70.75-61.719,38.75-88.719s-103,30-128,28 c-25,2-96-55-128-28S166.734,95.797,166.734,95.797z"})]})}),Se=function(e){switch(e){case"s":return Object(D.jsx)("span",{className:"",children:" Seed "},"s");case"i":return Object(D.jsx)("span",{className:"",children:" Inoculum "},"i");case"l":return Object(D.jsx)("span",{className:"",children:" Lime "},"l");case"p":return Object(D.jsx)("span",{className:"",children:" Phosphorus "},"p");case"k":return Object(D.jsx)("span",{className:"",children:" Potassium "},"k");default:return}},ke=function(e){var t=e.children,s=e.bundle,n=e.grid;return Object(D.jsx)("div",{className:"ingredient-".concat(s," m-2 shadow border border-2 border-dark"),style:n&&{gridArea:n},children:t})},Ie=function(e){var t=e.count,s=e.selected,n=e.bundle,c=[Object(D.jsxs)(ke,{bundle:t,grid:"8 / ".concat(t+1),children:[" ",Object(D.jsx)("h4",{children:" Good Agronomic Practices"})," "]},"gap"),Object(D.jsxs)(ke,{bundle:t,grid:"7 / ".concat(t+1),children:[" ",Object(D.jsx)("h4",{children:" Certified Seed"})," "]},"cs"),Object(D.jsxs)(ke,{bundle:t,grid:"6 / ".concat(t+1),children:[" ",Object(D.jsxs)("h4",{children:[" ",Se(n.bundle[1])]})," ",Object(D.jsx)("h5",{children:"(+1 Input) "})," "]},"1"),Object(D.jsxs)(ke,{bundle:t,grid:"5 / ".concat(t+1),children:[" ",Object(D.jsxs)("h4",{children:[" ",Se(n.bundle[2])]}),Object(D.jsx)("h5",{children:" (+1 Input) "})," "]},"2"),Object(D.jsxs)(ke,{bundle:t,grid:"4 / ".concat(t+1),children:[" ",Object(D.jsxs)("h4",{children:[" ",Se(n.bundle[3])]}),Object(D.jsx)("h5",{children:" +1 Input "})," "]},"3"),Object(D.jsxs)(ke,{bundle:t,grid:"3 / ".concat(t+1),children:[" ",Object(D.jsxs)("h4",{children:[" ",Se(n.bundle[4])]}),Object(D.jsx)("h5",{children:" +1 Input "})," "]},"4")];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{id:"bundle-".concat(t),className:s?"selected":""}),c.slice(0,t+2),Object(D.jsx)(Ce,{count:t+1,selected:s}),Object(D.jsx)("div",{className:"border border-dark border-3 px-3 py-1 margin-".concat(t),style:{gridArea:"1/".concat(t+1)},children:Object(D.jsxs)("h4",{children:[" Margin: $",n.margins.toFixed(0)," "]})})]})},Te={1:"Red",2:"Yellow",3:"Blue",4:"Green",5:"Purple"},Pe=function(e){var t=fe(!1),s=Oe();if(null===s)return Object(D.jsx)("h1",{children:" No Recommended Bundle (Either nothing is required, or nothing is affordable)"});var n=function(e){return t.filter((function(t){return t.bundle.length==e}))[0]};return Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"mx-auto my-2 p-2 shadow border border-3",style:{width:"max-content"},children:Object(D.jsxs)("h3",{children:[" We recommend the ",Object(D.jsxs)("span",{className:"b-".concat(s.bundle.length),children:[" ",Te[s.bundle.length]," Bundle "]})," "]})}),Object(D.jsxs)("div",{id:"bundle-rec",children:[Object(D.jsx)(Ie,{count:0,bundle:n(1),selected:1==s.bundle.length}),Object(D.jsx)(Ie,{bundle:n(2),count:1,selected:2==s.bundle.length}),Object(D.jsx)(Ie,{bundle:n(3),count:2,selected:3==s.bundle.length}),Object(D.jsx)(Ie,{bundle:n(4),count:3,selected:4==s.bundle.length}),Object(D.jsx)(Ie,{bundle:n(5),count:4,selected:5==s.bundle.length})]})]})},Fe=s(14),ze=s(131),Ae=function(e){var t=Object(i.c)(f),s=Object(i.c)(R),n=Object(i.c)(je),c=Object(i.c)(O),r=Object(i.c)(be),o=t[s].Farmer,a=o.Yield*n-c;return Object(D.jsxs)("tr",{className:"farmer",children:[Object(D.jsx)("td",{children:"Farmer"}),Object(D.jsx)("td",{children:"N/A"}),Object(D.jsxs)("td",{children:["$",c.toFixed(2)]}),Object(D.jsx)("td",{children:o.Yield}),Object(D.jsxs)("td",{children:["$",a.toFixed(2)]}),Object(D.jsxs)("td",{children:["$",(a*r).toFixed(2)]}),Object(D.jsx)("td",{children:"N/A"}),Object(D.jsx)("td",{children:"N/A"}),Object(D.jsx)("td",{children:"N/A"})]})},Be=function(e){var t=e.bundle,s=function(e){var t=Object(i.c)(f),s=Object(i.c)(R),n=Object(i.c)(je),c=Object(i.c)(O),r=Object(i.c)(ue),o=Object(i.c)(be),a=Object(i.c)(T),l=Object(i.c)(M),d=Object(i.c)(ee),u=Object(i.c)(se),b=Object(i.c)(ne),j=Object(i.c)(z),h=Object(i.c)(te),m=Object(i.c)(Z),p=t[s][e];return me({bundle:e,data:t,location:s,priceOfSoybean:n,farmerCost:c,budget:r,plotSize:o,phSufficient:a,phosphorusSufficient:l,limeCost:d,phosphorusCost:u,potassiumCost:b,potassiumSufficient:j,inoculumCost:h,seedCost:m,bundleData:p})}(t),n=s.undef,c=s.bundleCost,r=s.margins,o=s.totalMargins,a=s.roi,l=s.bundleYield,d=s.required,u=s.affordable,b=s.totalCost,j=Oe();if(n)return Object(D.jsxs)("tr",{id:t,className:"undefined",children:[Object(D.jsxs)("td",{children:[" ",t," "]}),Object(D.jsx)("td",{children:" N/A"}),Object(D.jsx)("td",{children:" N/A "}),Object(D.jsx)("td",{children:" N/A "}),Object(D.jsx)("td",{children:" N/A "}),Object(D.jsx)("td",{children:" N/A "}),Object(D.jsx)("td",{children:" N/A "}),Object(D.jsx)("td",{children:" N/A "}),Object(D.jsx)("td",{children:" N/A "})]});var h=[d?"bundle-required":"not-bundle-required",u?"affordable":"not-affordable","table-bundle-".concat(t.length).concat(j.bundle!==t?"-non-rec":"")];j.bundle;var m=d?Object(D.jsx)("i",{className:"bi bi-check2"}):Object(D.jsx)("i",{className:"bi bi-dash"}),p=u?Object(D.jsx)("i",{className:"bi bi-check2"}):Object(D.jsx)("i",{className:"bi bi-dash"});return Object(D.jsxs)("tr",{id:t,className:h.join(" "),children:[Object(D.jsxs)("td",{className:"position-relative",children:[j.bundle===t&&Object(D.jsx)("span",{className:"position-absolute translate-middle",style:{top:"50%",left:"-1rem"},children:Object(D.jsx)("i",{className:"bi bi-arrow-right-circle"})}),t," "]}),Object(D.jsxs)("td",{children:[" $",c.toFixed(2)]}),Object(D.jsxs)("td",{children:[" $",b.toFixed(2)," "]}),Object(D.jsxs)("td",{children:[" ",l.toFixed(2)," "]}),Object(D.jsxs)("td",{children:[" $",r.toFixed(2)]}),Object(D.jsxs)("td",{children:[" $",o.toFixed(2)]}),Object(D.jsxs)("td",{children:[" ",a.toFixed(2)]}),Object(D.jsxs)("td",{children:[" ",m," "]}),Object(D.jsxs)("td",{className:"position-relative",children:[" ",p,j.bundle===t&&Object(D.jsx)("span",{className:"position-absolute translate-middle",style:{top:"50%",right:"-2rem"},children:Object(D.jsx)("i",{className:"bi bi-arrow-left-circle"})})]})]})},Me=function(e){var t=Object(i.c)(p);return Object(D.jsxs)("table",{className:"table table-bordered border border-3",children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"col",children:" Bundle "}),Object(D.jsx)("th",{scope:"col",children:" Cost of Bundle "}),Object(D.jsx)("th",{scope:"col",children:" Total Cost (per Ha) "}),Object(D.jsx)("th",{scope:"col",children:" Yield Prediction "}),Object(D.jsx)("th",{scope:"col",children:" Margins (per Ha) "}),Object(D.jsx)("th",{scope:"col",children:" Total Gross Margins "}),Object(D.jsx)("th",{scope:"col",children:" Return on Investment "}),Object(D.jsx)("th",{scope:"col",children:" Required "}),Object(D.jsx)("th",{scope:"col",children:" Affordable "})]})}),Object(D.jsxs)("tbody",{children:[Object(D.jsx)(Ae,{}),t.map((function(e){return Object(D.jsx)(Be,{bundle:e},e)}))]})]})},Re={width:"container",height:"container",padding:{left:5,right:5,top:5,bottom:5},data:{name:"table"},mark:{type:"bar",strokeWidth:5},encoding:{x:{title:"Bundle ID",field:"bundle",type:"ordinal",axis:{labelFontSize:20,titleFontSize:20},sort:null},y:{title:"Gross Margins",field:"margins",type:"quantitative",axis:{labelFontSize:20,titleFontSize:20}},color:{field:"color",type:"nominal",scale:null},stroke:{condition:{test:"datum['rec']",value:"#198754"}}}},qe=(s(81),function(){var e=Object(n.useState)(!1),t=Object(q.a)(e,2),s=t[0],c=t[1];return Object(D.jsxs)("div",{className:"container border border-3 mb-3",children:[Object(D.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(D.jsx)("h5",{className:"m-3",children:" Graph Legend"}),Object(D.jsxs)("label",{className:"custom-collapse-button btn m-2 btn-primary",children:[Object(D.jsx)("input",{checked:s,className:"d-none",type:"checkbox",onChange:function(){return c(!s)}}),s?"Hide":"Show",Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-down mx-1",viewBox:"0 0 16 16",children:Object(D.jsx)("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"})})]})]}),Object(D.jsx)("p",{className:"".concat(s?"":"d-none"),children:"Total gross margin estimates for all bundles that fulfill both soil fertility and budget criteria. The \u201cFarmer\u201d treatment represents typical soybean farming practices in southern Africa. It is assumed that saved seed is used with no additional inputs, and that labor costs are absorbed by the household. Under these conditions it is estimated that a typical farmer will generate a gross margin of $182 USD and a yield of 0.82 MT per hectare laboring between 60 and 70 workdays in a season. s: seed; i: rhizobium inoculant; p: phosphorus fertilizer; k: potassium fertilizer"})]})}),De=function(){var e=Object(n.useState)(!1),t=Object(q.a)(e,2),s=t[0],c=t[1];return Object(D.jsxs)("div",{className:"container border border-3 mb-3",children:[Object(D.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(D.jsx)("h5",{className:"m-3",children:" Table Legend"}),Object(D.jsxs)("label",{className:"custom-collapse-button btn m-2 btn-primary",children:[Object(D.jsx)("input",{checked:s,className:"d-none",type:"checkbox",onChange:function(){return c(!s)}}),s?"Hide":"Show",Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-down mx-1",viewBox:"0 0 16 16",children:Object(D.jsx)("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"})})]})]}),Object(D.jsx)("table",{className:"table table-bordered ".concat(s?"":"d-none"),children:Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"Bundle"}),Object(D.jsx)("td",{children:Object(D.jsx)("table",{className:"table",children:Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"s"}),Object(D.jsx)("td",{children:"seed"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"i"}),Object(D.jsx)("td",{children:"rhizobium inoculant"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"p"}),Object(D.jsx)("td",{children:"phosphorus fertilizer"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"k"}),Object(D.jsx)("td",{children:"potassium fertilizer"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"l"}),Object(D.jsx)("td",{children:"lime"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{className:"pe-2",scope:"row",children:"Farmer"}),Object(D.jsx)("td",{children:"Typical soybean farming costs and yields for a farmer in southern Africa. It is assumed that saved seed is used with no additional inputs, and that labor costs are absorbed by the household. Under these conditions it is estimated that a typical farmer will generate a gross margin of $182 USD and a yield of 0.89 MT per hectare laboring between 60 and 70 workdays in a season."})]})]})})})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{span:"row",children:"Cost of Bundle/ha"}),Object(D.jsx)("td",{children:"the sum of all inputs from the \u2018Input Budget and Costs\u2019 page"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{span:"row",children:"Total cost/ha"}),Object(D.jsx)("td",{children:"the sum of all inputs from the \u2018Input Budget and Costs\u2019 page"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{span:"row",children:"Yield Predictions"}),Object(D.jsx)("td",{children:"obtained from SMART Farm location data"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{span:"row",children:"Gross margins/ha"}),Object(D.jsx)("td",{children:"based off revenues (price of grain * yield/ha) minus the cost/ha (input + labor costs)"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{span:"row",children:"Total gross margins"}),Object(D.jsx)("td",{children:"gross margins/ha * total plot size"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{span:"row",children:"Return on Investment (ROI)"}),Object(D.jsx)("td",{children:"gross margins/ha divided by the cost of bundle/ha"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"Required"}),Object(D.jsx)("td",{children:Object(D.jsx)("table",{className:"table mb-0",children:Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{spane:"row",children:Object(D.jsx)("i",{className:"bi bi-dash"})}),Object(D.jsx)("td",{children:" soils sufficient and input not needed for soybean production. bundles are not considered for bundle recommendation"})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{spane:"row",children:Object(D.jsx)("i",{className:"bi bi-check2"})}),Object(D.jsx)("td",{children:"soils insufficient and all inputs in bundle are needed to aid soybean production"})]})]})})})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{scope:"row",children:"Affordable"}),Object(D.jsx)("td",{children:Object(D.jsx)("table",{className:"table mb-0",children:Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{spane:"row",children:Object(D.jsx)("i",{className:"bi bi-dash"})}),Object(D.jsx)("td",{children:" price of bundle exceeds your input budget. These bundles are not considered for bundle recommendation."})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{spane:"row",children:Object(D.jsx)("i",{className:"bi bi-check2"})}),Object(D.jsx)("td",{children:"price of bundle within your input budget"})]})]})})})]})]})})]})},Ee=function(e){var t=pe(),s=Oe();return Object(D.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(D.jsx)(Me,{}),Object(D.jsx)(De,{}),Object(D.jsx)(ze.a,{width:"800",height:"500",spec:Re,data:{table:t.filter((function(e){return e.required&&e.affordable})).map((function(e){return Object(Fe.a)(Object(Fe.a)({},e),{},{rec:e.bundle==s.bundle?"Our Recommendation":""})}))}}),Object(D.jsx)(qe,{})]})},Le=function(e){var t=e.buttonsBefore,s=e.children,n=e.hash,c=e.navId,r=e.goToNext,i=e.goToPrev,o=e.nextName,a=e.prevName,l=Object(D.jsxs)("div",{className:"d-flex mb-1 mb-md-5 ".concat(a?"justify-content-between":"justify-content-end"," ").concat(t?"mt-3":""),children:[Object(D.jsxs)("button",{type:"button",className:"btn btn-primary me-1 ".concat(a?"":"d-none"),onClick:i,children:[Object(D.jsx)("i",{className:"bi-arrow-left",style:{fontSize:"1.5rem"}}),"\xa0 ",a]}),Object(D.jsxs)("button",{type:"button",className:"btn btn-primary ".concat(o?"":"d-none"),onClick:r,children:[o," \xa0",Object(D.jsx)("i",{className:"bi-arrow-right",style:{fontSize:"1.5rem"}})]})]});return Object(D.jsx)("div",{id:c,className:"vh-100 mb-5 overflow-auto vw-100 ".concat(n===c?"":"d-none"),children:Object(D.jsxs)("div",{className:"d-flex h-100 justify-content-between flex-column container-md",children:[t?l:void 0,Object(D.jsx)("div",{className:"row",children:Object(D.jsx)("div",{className:"col",children:s})}),t?void 0:l]})})},_e=function(e){return e.children},He=function(e){for(var t=e.children,s=Object(n.useState)(Math.random().toString(36).substring(7)),c=Object(q.a)(s,2),r=c[0],i=(c[1],Object(n.useCallback)((function(e){return"".concat(r,"-").concat(e.props.navId)}),[r])),o=Object(n.useState)(i(t[0])),a=Object(q.a)(o,2),l=a[0],d=a[1],u=Object(n.useState)(void 0),b=Object(q.a)(u,2),j=b[0],h=b[1],m=[],p=0;p<t.length;p++){var f=void 0,O=void 0,x=void 0,v=void 0;0!==p&&function(){var e=i(t[p-1]);O=function(){d(e)},x=t[p-1].props.name}(),p!==t.length-1&&function(){var e=i(t[p+1]);f=function(){d(e)},v=t[p+1].props.name}();var g=i(t[p]);m.push(Object(D.jsx)(Le,{buttonsBefore:t[p].props.buttonsBefore,hash:l,navId:g,goToNext:f,nextName:v,goToPrev:O,prevName:x,children:t[p]},g))}return Object(n.useEffect)((function(){window.location.hash=l}),[l]),Object(n.useEffect)((function(){window.onresize=function(){j&&clearTimeout(j),h(setTimeout((function(){window.location.hash=l,h(void 0)}),500))}}),[j,l]),Object(D.jsx)("div",{className:"d-flex",style:{width:"min-content"},children:m})},Ge=function(){return Object(D.jsxs)("div",{className:"intro",children:[Object(D.jsx)("h1",{children:"SMART Farm Input Recommendation Calculator"}),Object(D.jsxs)("p",{className:"fs-5",children:["Soybean production requires agricultural inputs such as lime, phosphorus and potassium fertilizer, and rhizobium inoculant to ensure a profitable crop. However, soil conditions along with a farmer\u2019s limited budget can make some inputs unnecessary or financially impractical. The Soybean Innovation Lab (SIL) conducts input omission trials, or ",Object(D.jsx)("a",{href:"https://7b7dcda8-7264-4c41-b9a2-b2e845d0c5d1.usrfiles.com/ugd/7b7dcd_738bcfbf8bbc4ee78d1a0ec4f806ec5f.pdf",children:"SMART Farms"}),", in several locations throughout Africa to address unique, location-specific constraints to recommend input bundles that will maximize yields. Using the data acquired from these SMART Farms, SIL has developed an input bundle recommendation calculator in order to give the same evidence-based, cost-effective bundle recommendations to a broader audience that may not have the means to conduct their own SMART Farm trials. This calculator considers each user\u2019s unique situation including location, soil properties, and budget to generate the input bundle recommendation that results in the highest Return on Investment (ROI) for the grower."]}),Object(D.jsx)("h2",{children:" Instructions "}),Object(D.jsx)("p",{className:"fs-5",children:"Proceed through each section and input appropriate values for soil properties and location, input budget and costs, and price of grain in your area. The recommended bundle will be the bundle that produces the highest gross margins and addresses your soil fertility needs and budget constraints. This calculator also creates a graph and table showing the gross margins of all possible bundles and which criteria (budget or soil fertility) they fulfill to provide a better understanding of how your recommended input bundle was selected."})]})},$e=function(){var e=Object(i.b)(),t=Object(i.c)(j),s=Object(i.c)(b),c=Object(i.c)(h),r="".concat("/smart-calculator-v2/dev","/data.json");return Object(n.useEffect)((function(){fetch(r).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:l,value:e}}(t))})).catch((function(t){console.error(t),e(function(e){return{type:d,value:e}}(t))}))}),[e,r]),t?Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:" error!"}),Object(D.jsxs)("pre",{children:[" ",JSON.stringify(s)]})]}):c?Object(D.jsx)("h1",{children:" loading "}):Object(D.jsxs)(He,{children:[Object(D.jsxs)(_e,{name:"Intro",navId:"intro",children:[" ",Object(D.jsx)(Ge,{})," "]}),Object(D.jsxs)(_e,{name:"Soil Properties",navId:"soil-properties",children:[" ",Object(D.jsx)(we,{}),"  "]}),Object(D.jsxs)(_e,{name:"Input Costs",navId:"input-costs",children:[" ",Object(D.jsx)(Ne,{}),"  "]}),Object(D.jsxs)(_e,{name:"Other Info",navId:"other-info",children:[" ",Object(D.jsx)(ye,{}),"  "]}),Object(D.jsxs)(_e,{name:"Bundle Recommendation",navId:"bundle-rec",children:[" ",Object(D.jsx)(Pe,{}),"  "]}),Object(D.jsxs)(_e,{buttonsBefore:!0,name:"Bundle Justification",navId:"bundle-just",children:[" ",Object(D.jsx)(Ee,{}),"  "]})]})},Ue=Object(o.b)({soilProperties:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:e.ph=t.value;break;case w:e.phosphorus=t.value;break;case g:e.potassium=t.value;break;case N:e.selectedFarm=t.value;break;case l:e.selectedFarm=Object.keys(t.value.soil)[0]}return e},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:e.data=t.value,e.loading=!1;break;case d:e.errorOccured=!0,e.error=t.value,e.loading=!1}return e},inputCosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:e.seedCost=t.value;break;case $:e.limeCost=t.value;break;case U:e.inoculumCost=t.value;break;case Y:e.phosphorusCost=t.value;break;case K:e.potassiumCost=t.value}return e},otherInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:e.inputsBudget=t.value;break;case ie:e.plotSize=t.value;break;case oe:e.priceOfGrain=t.value}return e}}),Ye=(s(121),Object(o.c)(Ue,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Object(r.render)(Object(D.jsx)(i.a,{store:Ye,children:Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)($e,{})})}),document.getElementById("root")),a()},80:function(e,t,s){},81:function(e,t,s){}},[[122,1,2]]]);
//# sourceMappingURL=main.78bbc524.chunk.js.map