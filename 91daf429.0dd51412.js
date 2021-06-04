(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{169:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return d}));var n=i(0),a=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(i),u=n,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||r;return i?a.a.createElement(d,l(l({ref:t},s),{},{components:i})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},71:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return o})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return s}));var n=i(2),a=(i(0),i(169));const r={title:"What is IsaacScript Doing?"},o={unversionedId:"what-is-isaacscript-doing",id:"what-is-isaacscript-doing",isDocsHomePage:!1,title:"What is IsaacScript Doing?",description:"The isaacscript program will run forever, monitoring for changes in your project. In summary, it will:",source:"@site/docs/what-is-isaacscript-doing.md",slug:"/what-is-isaacscript-doing",permalink:"/docs/what-is-isaacscript-doing",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/what-is-isaacscript-doing.md",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Project Directory Structure",permalink:"/docs/directory-structure"}},l=[{value:"Confirm That Auto-Mod-Reloading Works",id:"confirm-that-auto-mod-reloading-works",children:[]},{value:"Confirm That File Cloning Works",id:"confirm-that-file-cloning-works",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"isaacscript")," program will run forever, monitoring for changes in your project. In summary, it will:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"automatically recompile your TypeScript"),Object(a.b)("li",{parentName:"ol"},"automatically copy over any files in the ",Object(a.b)("inlineCode",{parentName:"li"},"mod")," directory"),Object(a.b)("li",{parentName:"ol"},"automatically refresh your mod in-game (with the ",Object(a.b)("inlineCode",{parentName:"li"},"luamod")," console command)")),Object(a.b)("p",null,"As a new user, you might want to confirm that each of these functions is working properly as a way to get familiar with the program."),Object(a.b)("br",null),Object(a.b)("h3",{id:"confirm-that-auto-mod-reloading-works"},"Confirm That Auto-Mod-Reloading Works"),Object(a.b)("p",null,"The moment that you save a TypeScript file, ",Object(a.b)("inlineCode",{parentName:"p"},"isaacscript")," will detect that something has changed, and it will automatically perform the following steps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"isaacscript")," will re-compile your TypeScript project using ",Object(a.b)("inlineCode",{parentName:"li"},"tstl"),", the TypeScriptToLua tool."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"tstl")," will spit out a file called ",Object(a.b)("inlineCode",{parentName:"li"},"main.lua")," in your project's ",Object(a.b)("inlineCode",{parentName:"li"},"mod")," folder. (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Repositories\\revelations\\mod\\main.lua"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"isaacscript")," will copy this file to the ",Object(a.b)("inlineCode",{parentName:"li"},"mods")," directory. (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\mods\\revelations\\main.lua"),")"),Object(a.b)("li",{parentName:"ul"},"If you have the game open and are in a run, ",Object(a.b)("inlineCode",{parentName:"li"},"isaacscript")," will then send a message to a helper mod called ",Object(a.b)("inlineCode",{parentName:"li"},"isaacscript-watcher"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"isaacscript-watcher")," will run the ",Object(a.b)("inlineCode",{parentName:"li"},"luamod")," console command corresponding to your project. (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"luamod revelations"),")"),Object(a.b)("li",{parentName:"ul"},"After the ",Object(a.b)("inlineCode",{parentName:"li"},"luamod")," command is executed, your mod has been reloaded - it is now ready to test!"),Object(a.b)("li",{parentName:"ul"},"If compilation failed for any reason, then you will be able to see the errors on both the ",Object(a.b)("inlineCode",{parentName:"li"},"isaacscript")," console window and in-game. (The ",Object(a.b)("inlineCode",{parentName:"li"},"isaacscript-watcher")," mod will draw it on the screen for you.)")),Object(a.b)("p",null,"Note that ",Object(a.b)("inlineCode",{parentName:"p"},"isaacscript")," will automatically install the ",Object(a.b)("inlineCode",{parentName:"p"},"isaacscript-watcher")," helper mod for you, so you don't have to do anything. Just test to see that it works:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Make sure that ",Object(a.b)("inlineCode",{parentName:"li"},"isaacscript")," is running in a shell."),Object(a.b)("li",{parentName:"ol"},"In-game, go into a run."),Object(a.b)("li",{parentName:"ol"},"In VSCode, add something new to your ",Object(a.b)("inlineCode",{parentName:"li"},"main.ts")," file, like:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'print("hello world");\n')),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"In VSCode, save the file."),Object(a.b)("li",{parentName:"ol"},'In game, you should see text appear on the screen. (i.e. something along the lines of "Compilation successful!")'),Object(a.b)("li",{parentName:"ol"},"In game, press ",Object(a.b)("code",null,"`"),' to open the console and see if your "hello world" message is printed there.')),Object(a.b)("br",null),Object(a.b)("h3",{id:"confirm-that-file-cloning-works"},"Confirm That File Cloning Works"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"isaacscript")," will automatically sync the contents of the ",Object(a.b)("inlineCode",{parentName:"p"},"mod")," directory in your project to the corresponding folder in ",Object(a.b)("inlineCode",{parentName:"p"},"mods"),"."),Object(a.b)("p",null,"For example:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Say that you have a project directory of: ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Repositories\\revelations\\")),Object(a.b)("li",{parentName:"ul"},"Then, inside your project mod folder, you make some new subdirectories: ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Repositories\\revelations\\mod\\resources\\gfx\\items\\collectibles\\"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"(This is the directory that you are supposed to put graphics files in for new modded items.)"))),Object(a.b)("li",{parentName:"ul"},"Next, you put a new file in that directory: ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Repositories\\revelations\\mod\\resources\\gfx\\items\\collectibles\\collectibles_new_item.png")),Object(a.b)("li",{parentName:"ul"},"Now, ",Object(a.b)("inlineCode",{parentName:"li"},"isaacscript")," automatically copies the ",Object(a.b)("inlineCode",{parentName:"li"},"collectibles_new_item.png")," file to: ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\mods\\revelations\\resources\\gfx\\items\\collectibles\\collectibles_new_item.png"))),Object(a.b)("p",null,"For now, just put something in your mod folder and confirm that ",Object(a.b)("inlineCode",{parentName:"p"},"isaacscript")," copies it over for you."),Object(a.b)("br",null))}s.isMDXComponent=!0}}]);