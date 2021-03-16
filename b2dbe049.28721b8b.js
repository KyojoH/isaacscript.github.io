(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{71:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return n})),a.d(e,"metadata",(function(){return r})),a.d(e,"rightToc",(function(){return i})),a.d(e,"default",(function(){return l}));var o=a(2),c=(a(0),a(211));const n={title:"Gotchas"},r={unversionedId:"gotchas",id:"gotchas",isDocsHomePage:!1,title:"Gotchas",description:'This page lists several "gotchas" - i.e. things that might be weird about IsaacScript.',source:"@site/docs/gotchas.md",slug:"/gotchas",permalink:"/docs/gotchas",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/gotchas.md",version:"current",sidebar:"docs",previous:{title:"Basic JavaScript/TypeScript",permalink:"/docs/basic-javascript"},next:{title:"Function Signatures",permalink:"/docs/function-signatures"}},i=[{value:"No Operator Overloading / Vector Addition",id:"no-operator-overloading--vector-addition",children:[]},{value:"No Blank Mod Classes",id:"no-blank-mod-classes",children:[]}],s={rightToc:i};function l({components:t,...e}){return Object(c.b)("wrapper",Object(o.a)({},s,e,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,'This page lists several "gotchas" - i.e. things that might be weird about IsaacScript.'),Object(c.b)("br",null),Object(c.b)("h3",{id:"no-operator-overloading--vector-addition"},"No Operator Overloading / Vector Addition"),Object(c.b)("p",null,"Due to ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://typescripttolua.github.io/docs/advanced/writing-declarations/#operator-overloads"}),"limitations in TypeScriptToLua"),", operator overloads will not work directly. The workaround for this is to call the methods directly."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-lua"}),"-- Lua code\nlocal vector = Vector(1, 1) * 5 + 2\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// TypeScript code\nconst vector = Vector(1, 1).__mul(5).__add(2)\n")),Object(c.b)("br",null),Object(c.b)("h3",{id:"no-blank-mod-classes"},"No Blank Mod Classes"),Object(c.b)("p",null,"You cannot instantiate a blank mod object/class:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"class Foo {\n  modObject = Mod();\n}\n")),Object(c.b)("p",null,"Doing this will result in an error in the following TypeScriptToLua boilerplate code:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-lua"}),"function __TS__New(target, ...)\n    local instance = setmetatable({}, target.prototype) -- Error on this line\n")))}l.isMDXComponent=!0}}]);