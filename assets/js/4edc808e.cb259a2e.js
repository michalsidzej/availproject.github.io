"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[4173],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),h=l,p=m["".concat(s,".").concat(h)]||m[h]||d[h]||r;return a?n.createElement(p,i(i({ref:t},u),{},{components:a})):n.createElement(p,i({ref:t},u))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7462),l=a(7294),r=a(6010),i=a(2466),o=a(6550),s=a(1980),c=a(7392),u=a(12);function m(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,c]=p({queryString:a,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),v=(()=>{const e=s??m;return h({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var v=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==o&&(m(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},i,{className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(y,(0,n.Z)({},e,t)))}function E(e){const t=(0,v.Z)();return l.createElement(k,(0,n.Z)({key:String(t)},e))}},7067:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>k,default:()=>S,frontMatter:()=>y,metadata:()=>E,toc:()=>N});var n=a(7462),l=a(7294),r=a(3905);a(17);const i={linksCard:[{title:"Operate a Node",cardLink:"/category/operate/",blockInfo:["Optimal Performance","Low Barrier to Entry","Security-Focused Design"],tutorialsInfo:[{title:"Run a Light Client",link:"/operate/node/light-client/"},{title:"Run a Full Node",link:"/category/full-node/"},{title:"Run a Relay Node",link:"/operate/node/relay/"}]},{title:"Become a Validator",cardLink:"/category/become-a-validator/",blockInfo:["Network Security","Governance Participation","Maintainer Rewards"],tutorialsInfo:[{title:"Run a Validator Node",link:"/category/run-a-node/"},{title:"Upgrade Your Validator",link:"/operate/validator/upgrade/"},{title:"Monitor Your Validator",link:"/operate/validator/monitor/"}]},{title:"Build Modular Solutions",cardLink:"/category/api-reference/",blockInfo:["Ecosystem Agnostic Modularity","Scalable Across All Layers","Robust Sovereign Chain Rollups","Optimized App-Chains"],tutorialsInfo:[{title:"Avail-Powered Validiums",link:"/api/use-case-validiums"},{title:"Avail-Powered Optimiums: Docs Coming Soon"},{title:"Avail-Powered Volitions: Docs Coming Soon"}]}],ecosystem:{tabs:[{name:"Active Networks",details:[{networkName:"Kate Testnet",explorer:"https://kate.avail.tools",rpcEndpoint:"https://kate.avail.tools/v1",wsEndpoint:"wss://kate.avail.tools/ws",chainSpec:{link:"https://kate.avail.tools/#/explorer/chainspec",text:"chainspec.raw.json"},chainInfo:{link:"https://kate.avail.tools/chaininfo.txt",text:"chaininfo.txt"},nodeVersion:{link:"https://github.com/availproject/avail/releases/tag/v1.6.3",text:"v1.6.3"},lightClientVersion:{link:"https://github.com/availproject/avail-light/releases/tag/v1.6.0-rc1",text:"1.6.0-rc1"}}]},{name:"Retired Networks",details:[{networkName:"Testnet Phase 1",explorer:"https://testnet.avail.tools",rpcEndpoint:"https://testnet.avail.tools/v1",wsEndpoint:"wss://testnet.avail.tools/ws",nodeVersion:{link:"https://github.com/availproject/avail/releases/tag/v1.5.0-303f39d",text:"v1.5.0-303f39d"},lightClientVersion:{link:"https://github.com/availproject/avail-light/releases/tag/v1.3.1",text:"1.3.1"}}]}]},faq:{faqList:[{title:"What is a light client?",content:"Light clients allow users to interact with a blockchain network without having to sync the full blockchain while maintaining decentralization and security. Generally, they download the blockchain headers, but not the contents of each block. Avail (DA) light clients additionally verify that block contents are available by performing Data Availability Sampling, a technique where small random sections of a block are downloaded."},{title:"What is a popular use case of a light client?",content:"There are many use-cases which today rely on an intermediary to maintain a full node, such that end users of a blockchain do not communicate directly with the blockchain but instead through the intermediary. Light clients have until now not been a suitable replacement for this architecture because they lacked data availability guarantees. Avail solves this issue, thus enabling more applications to directly participate on the blockchain network without intermediaries. Although Avail does support full nodes, we expect most applications will not need to run one, or will need to run fewer."},{title:"What is data availability sampling?",content:"Avail light clients, like other light clients, only download the headers of the blockchain. However, they additionally perform data availability sampling: a technique that randomly samples small sections of the block data and verifies they are correct. When combined with erasure coding and KZG polynomial commitments, Avail clients are able to provide strong (nearly 100%) guarantees of availability without relying on fraud proofs, and with only a small constant number of queries."},{title:"How is erasure coding used to increase data availability guarantees?",content:"Erasure coding is a technique that encodes data in a way that spreads out the information over multiple 'shards', such that the loss of some number of those shards can be tolerated. That is, the information can be reconstructed from the other shards. Applied to the blockchain, this means that we effectively increase the size of each block, but we prevent a malicious actor from being able to hide any part of a block up to the redundant shard size. Since a malicious actor needs to hide a large part of the block in order to attempt to hide even a single transaction, it makes it much more likely that random sampling would catch the large gaps in the data. Effectively, erasure coding makes the data availibility sampling technique much more powerful."},{title:"What are KZG commitments?",content:"KZG commitments, introduced by Aniket Kate, Gregory M. Zaverucha, and Ian Goldberg in 2010, provide a way to commit to polynomials in a succinct manner. Recently, polynomial commitments came to the forefront, being primarily used as commitments in PLONK-like zero knowledge constructions.<br><br>In our construction, we use KZG commitments for the following reasons:<ul><li>It allows us to commit to values in a succinct manner to be kept inside the block header.</li><li>Short openings are possible which helps a light client verify availability.</li><li>The cryptographic binding property helps us avoid fraud proofs by making it computationally infeasible to produce incorrect commitments.</li></ul><br>In the future, we might use other polynomial commitment schemes, if that gives us better bounds or guarantees."},{title:"Since Avail is used by multiple applications, does that mean chains have to download transactions from other chains?",content:"No. Avail headers contain an index that allows a given application to determine and download only the sections of a block that have data for that application. Thus, they are largely unaffected by other chains using Avail at the same time or by block sizes.<br><br>The only exception is data availability sampling. In order to verify that data is available (and due to the nature of erasure coding), clients sample small parts of the block at random, including possibly sections that contain data for other applications."}]}},o=e=>{let{className:t,title:a,link:n,type:r,target:i="_blank"}=e;const o="secondary"===r?"is-secondary":"";return l.createElement("a",{href:n,target:i,className:`button is-icon w-inline-flex ${o}`},l.createElement("div",{className:"button-icon_left-element is-icon-medium"},l.createElement("div",{className:"text-size-small"},a)),l.createElement("div",{className:"button-icon_right-element is-icon-medium"},l.createElement("div",{className:"icon-1x1-medium w-embed"},l.createElement("svg",{width:"auto",height:"auto",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M7 17L17 7M17 7V17M17 7H7",stroke:"currentcolor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})))))},s=e=>{let{title:t,description:a,link:n,linkText:r,customClass:i=""}=e;const s=i||"col-md-8";return l.createElement("div",{className:"head-section flex-row"},l.createElement("div",{className:s},l.createElement("span",{className:"section-title"},t),l.createElement("p",{className:"lead grey-text"},a)),n&&r&&l.createElement("div",{className:"button-group"},l.createElement(o,{title:r,link:n})))};var c=a(4866),u=a(5162);const m=e=>{const{tabs:t=[],head:a={}}=e;return l.createElement(l.Fragment,null,l.createElement(s,a),l.createElement("h2",{className:"ecosystem-title"},"Networks"),l.createElement("div",{className:"tabs-container col"},l.createElement(c.Z,null,t.map(((e,t)=>{let{name:a,contentText:n,contentList:r,contentListTitle:i,link:o,details:s}=e;return l.createElement(u.Z,{key:t,value:t,label:a},l.createElement("div",{className:"tab-content"},l.createElement("div",{className:"col-md-6 text"},l.createElement("p",{className:"lead grey-text"},n),i&&l.createElement("div",{className:"grey-text"},"Products used:"),r&&r.length&&l.createElement("ul",{className:"dot-list grey-text"},r.map(((e,t)=>l.createElement("li",{key:t},e)))),s&&s.length&&l.createElement("div",{className:"network-details"},s.map(((e,t)=>l.createElement("div",{key:t,className:"network-detail-item"},l.createElement("h4",{className:"network-title"},e.networkName),l.createElement("ul",{className:"network-info-list"},l.createElement("li",null,"Explorer: ",l.createElement("a",{href:e.explorer,className:"network-link"},e.explorer)),l.createElement("li",null,"RPC Endpoint: ",l.createElement("a",{href:e.rpcEndpoint,className:"network-link"},e.rpcEndpoint)),l.createElement("li",null,"WS Endpoint: ",l.createElement("a",{href:e.wsEndpoint,className:"network-link"},e.wsEndpoint)),l.createElement("li",null,"Chain Spec: ",e.chainSpec?l.createElement("a",{href:e.chainSpec.link,className:"network-link"},e.chainSpec.text):"N/A"),l.createElement("li",null,"Chain Info: ",e.chainInfo?l.createElement("a",{href:e.chainInfo.link,className:"network-link"},e.chainInfo.text):"N/A"),l.createElement("li",null,"Node Version: ",e.nodeVersion?l.createElement("a",{href:e.nodeVersion.link,className:"network-link"},e.nodeVersion.text):"N/A"),l.createElement("li",null,"Light Client Version: ",e.lightClientVersion?l.createElement("a",{href:e.lightClientVersion.link,className:"network-link"},e.lightClientVersion.text):"N/A")))))))))})))))};var d=a(4996);const h=e=>{const{iconSrc:t,cardLink:a,title:n,blockInfo:r,tutorialsInfo:i}=e,o=e=>{e.stopPropagation()};return l.createElement("div",{onClick:()=>{window.open(a,"_self").focus()},className:"grey-card flex-row justify-content-center "},l.createElement("div",{className:"tutorial-icon"},l.createElement("img",{src:(0,d.Z)(t),alt:""})),l.createElement("div",{className:"data-info col-md-6"},l.createElement("div",{className:"title-info"},l.createElement("span",{className:"card-title"},n),l.createElement("ul",{className:"list dot-list grey-text"},r.map(((e,t)=>l.createElement("li",{key:t},e)))))),l.createElement("div",{className:"tutorial-links col"},l.createElement("span",{className:"tutorial-title"},"Tutorials"),l.createElement("ul",{className:"list clear-list"},i.map(((e,t)=>{let{title:a,link:n}=e;return l.createElement("li",{key:t},l.createElement("a",{onClick:o,href:n,target:"_self",className:"tutorial-link"},a))})))))};var p=a(4184),f=a.n(p);const v=e=>{const{title:t,content:a}=e,[n,r]=(0,l.useState)(!1);return l.createElement("div",{className:f()("faq-accordion-dropdown",{open:n})},l.createElement("div",{onClick:()=>{r(!n)},className:"faq-accordion-toggle"},l.createElement("div",{className:"faq-question"},t),l.createElement("div",{className:"faq-accordion-icon"})),l.createElement("nav",{className:"faq-dropdown-list"},l.createElement("div",{className:"faq-dropdown-list-content"},l.createElement("p",{className:"lead grey-text",dangerouslySetInnerHTML:{__html:a}}))))},b=e=>{const{faqList:t=[],head:a={}}=e;return l.createElement(l.Fragment,null,l.createElement(s,a),l.createElement("h2",{className:"faq-title"},"Frequently Asked Questions"),l.createElement("div",{className:"faq-wrapper"},t.length&&t.map(((e,t)=>l.createElement(v,(0,n.Z)({key:t},e))))))};const g=function(){const[e,t]=(0,l.useState)(!1);return l.createElement("div",{className:"bootstrap-wrapper"},l.createElement("div",{className:"section-divider"}),l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"index-page exclude"},l.createElement("section",{className:"section container-fluid"},l.createElement("div",{className:"row justify-content-between"},l.createElement("h1",{className:"landing-page-h1"},l.createElement("a",{href:"https://www.availproject.org/"},"Avail")," Developer Docs")))),l.createElement("br",null),l.createElement("br",null)),l.createElement("div",{className:"section-divider"}),l.createElement("div",{className:"justify-content-center tutorial-cards"},i.linksCard.map(((e,t)=>l.createElement(h,(0,n.Z)({key:t},e)))))),l.createElement("div",{className:"section-divider"}),l.createElement("section",{className:"section-ecosystem full-background"},l.createElement("div",{className:"container"},l.createElement(m,i.ecosystem))),l.createElement("div",{className:"container"},l.createElement("div",{className:"section-divider"}),l.createElement("section",{className:"faq"},l.createElement(b,i.faq))))},y={id:"index",title:"Home",hide_title:!0,sidebar_label:"Home"},k=void 0,E={unversionedId:"index",id:"index",title:"Home",description:"",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/index.mdx",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1696005774,formattedLastUpdatedAt:"Sep 29, 2023",frontMatter:{id:"index",title:"Home",hide_title:!0,sidebar_label:"Home"},sidebar:"avail",next:{title:"What is Avail",permalink:"/about/introduction"}},w={},N=[],x={toc:N},I="wrapper";function S(e){let{components:t,...a}=e;return(0,r.kt)(I,(0,n.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(g,{mdxType:"Home"}))}S.isMDXComponent=!0}}]);