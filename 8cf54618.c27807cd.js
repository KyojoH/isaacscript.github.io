(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{173:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(a,".").concat(m)]||u[m]||h[m]||i;return r?o.a.createElement(d,l(l({ref:t},p),{},{components:r})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=(r(0),r(173));const i={title:"Publishing to the Workshop"},a={unversionedId:"publishing-to-the-workshop",id:"publishing-to-the-workshop",isDocsHomePage:!1,title:"Publishing to the Workshop",description:'Isaac mods are published to the Steam Workshop, which allows others to easily download them. This is accomplished by running the "ModUploader.exe" tool provided with the game, which is located at C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\tools\\ModUploader.exe.',source:"@site/docs/publishing-to-the-workshop.md",slug:"/publishing-to-the-workshop",permalink:"/docs/publishing-to-the-workshop",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/publishing-to-the-workshop.md",version:"current",sidebar:"docs",previous:{title:"JavaScript/TypeScript Tutorial",permalink:"/docs/javascript-tutorial"},next:{title:"Gotchas",permalink:"/docs/gotchas"}},l=[],c={rightToc:l};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Isaac mods are published to the Steam Workshop, which allows others to easily download them. This is accomplished by running the "ModUploader.exe" tool provided with the game, which is located at ',Object(o.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\tools\\ModUploader.exe"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"isaacscript")," contains a ",Object(o.b)("inlineCode",{parentName:"p"},"--publish")," flag that may be useful for releasing a new version of your mod. It will perform the following steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Update all NPM dependencies (e.g. in the "package.json" file)'),Object(o.b)("li",{parentName:"ul"},'Bump the version in the "src/constants.ts" file.',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It looks for a line that looks something like ",Object(o.b)("inlineCode",{parentName:"li"},'export const VERSION = "v1.0.0";'),"."))),Object(o.b)("li",{parentName:"ul"},'Bump the version in the "mod/metadata.xml" file.'),Object(o.b)("li",{parentName:"ul"},'Bump the version in the "mod/version.txt" file.'),Object(o.b)("li",{parentName:"ul"},"Compile the TypeScript."),Object(o.b)("li",{parentName:"ul"},'Copy everything from the source mod directory to the destination mod directory (i.e. "project/mod" --\x3e "Binding of Isaac: Afterbirth+ Mods/project").'),Object(o.b)("li",{parentName:"ul"},"Commit all changes in Git and push."),Object(o.b)("li",{parentName:"ul"},'Open the "ModUploader.exe" file with a working directory of the destination mod directory.',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"(Unfortunately, there isn't a way to publish a mod via the command-line.)")))))}p.isMDXComponent=!0}}]);