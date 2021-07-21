(self.webpackChunkisaacscript_github_io=self.webpackChunkisaacscript_github_io||[]).push([[747],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return h}});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(i),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return i?n.createElement(m,a(a({ref:t},p),{},{components:i})):n.createElement(m,a({ref:t},p))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},4294:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=i(2122),o=i(9756),r=(i(7294),i(3905)),a=["components"],l={title:"Project Directory Structure"},c=void 0,s={unversionedId:"directory-structure",id:"directory-structure",isDocsHomePage:!1,title:"Project Directory Structure",description:"When you use isaacscript init, it will automatically load a directory with some files for you.",source:"@site/docs/directory-structure.md",sourceDirName:".",slug:"/directory-structure",permalink:"/docs/directory-structure",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/directory-structure.md",version:"current",frontMatter:{title:"Project Directory Structure"},sidebar:"sidebar",previous:{title:"What is IsaacScript Doing?",permalink:"/docs/what-is-isaacscript-doing"},next:{title:"JavaScript/TypeScript Tutorial",permalink:"/docs/javascript-tutorial"}},p=[{value:"Directories",id:"directories",children:[{value:"<code>project</code>",id:"project",children:[]},{value:"<code>project/.vscode</code>",id:"projectvscode",children:[]},{value:"<code>project/mod</code>",id:"projectmod",children:[]},{value:"<code>project/node_modules</code>",id:"projectnode_modules",children:[]},{value:"<code>project/src</code>",id:"projectsrc",children:[]}]},{value:"Files",id:"files",children:[{value:"<code>.cspell.json</code>",id:"cspelljson",children:[]},{value:"<code>.eslintrc.js</code>",id:"eslintrcjs",children:[]},{value:"<code>.gitattributes</code>",id:"gitattributes",children:[]},{value:"<code>.gitignore</code>",id:"gitignore",children:[]},{value:"<code>isaacscript.json</code>",id:"isaacscriptjson",children:[]},{value:"<code>LICENCE</code>",id:"licence",children:[]},{value:"<code>package.json</code>",id:"packagejson",children:[]},{value:"<code>package-lock.json</code>",id:"package-lockjson",children:[]},{value:"<code>README.md</code>",id:"readmemd",children:[]},{value:"<code>tsconfig.eslint.json</code> and <code>tsconfig.json</code>",id:"tsconfigeslintjson-and-tsconfigjson",children:[]}]}],d={toc:p};function u(e){var t=e.components,i=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you use ",(0,r.kt)("inlineCode",{parentName:"p"},"isaacscript init"),", it will automatically load a directory with some files for you."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You do not need to know what all of these files are for"),", so if you want to dive into coding your mod, skip reading this page."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"directories"},"Directories"),(0,r.kt)("h3",{id:"project"},(0,r.kt)("inlineCode",{parentName:"h3"},"project")),(0,r.kt)("p",null,"This is the root directory of your project. It won't actually be called ",(0,r.kt)("inlineCode",{parentName:"p"},"project"),"; it will instead be named after your mod."),(0,r.kt)("p",null,"If you want to track your project in ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),", this directory will be the root of the Git repository. (",(0,r.kt)("inlineCode",{parentName:"p"},"isaacscript")," does not automatically initialize a Git repository; you have to do that on your own with ",(0,r.kt)("inlineCode",{parentName:"p"},"git init")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone"),".)"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"projectvscode"},(0,r.kt)("inlineCode",{parentName:"h3"},"project/.vscode")),(0,r.kt)("p",null,"This directory contains some stock settings that are recommended for VSCode to work properly with IsaacScript projects."),(0,r.kt)("p",null,"Leave this directory in place and ignore it, unless you want to customize the settings. (If you do not use VSCode, feel free to delete this directory.)"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"projectmod"},(0,r.kt)("inlineCode",{parentName:"h3"},"project/mod")),(0,r.kt)("p",null,"This is the source mod directory. Any files that you put here will be automatically transferred over to the mirrored directory in ",(0,r.kt)("inlineCode",{parentName:"p"},"mods"),"."),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-batch"},"C:\\Repositories\\revelations\\mod\\image.png\n")),(0,r.kt)("p",null,"will be copied to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-batch"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\mods\\revelations\\image.png\n")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"projectnode_modules"},(0,r.kt)("inlineCode",{parentName:"h3"},"project/node_modules")),(0,r.kt)("p",null,"This directory contains the dependencies for the project. (e.g. TypeScript, TypeScriptToLua, ESLint, etc.)"),(0,r.kt)("p",null,"Leave it in place and ignore it."),(0,r.kt)("p",null,"More info:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," is generated when you type ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")," in a directory with a ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file in it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isaacscript init")," automatically creates a ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file for you and does an ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")," when you start a new project."),(0,r.kt)("li",{parentName:"ul"},"This directory will contain a lot of files and is usually 150+ megabytes in size."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," are always excluded from being tracked in a Git repository.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There will already be an entry for ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},".gitignore")," file installed by ",(0,r.kt)("inlineCode",{parentName:"li"},"isaacscript"),".")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"projectsrc"},(0,r.kt)("inlineCode",{parentName:"h3"},"project/src")),(0,r.kt)("p",null,"This is the TypeScript source directory. All of the TypeScript files for your mod should live in here."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isaacscript init")," will automatically create a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.ts")," file for you in this directory."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"files"},"Files"),(0,r.kt)("h3",{id:"cspelljson"},(0,r.kt)("inlineCode",{parentName:"h3"},".cspell.json")),(0,r.kt)("p",null,"This is the configuration file for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/streetsidesoftware/cspell"},"cspell"),", a spell-checker for code."),(0,r.kt)("p",null,'If VSCode incorrectly reports that a file is misspelled, you can right-click on the word and say "Add Word to Workspace Dictionaries". The word will then be recorded in this file and the squiggly line will go away.'),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"eslintrcjs"},(0,r.kt)("inlineCode",{parentName:"h3"},".eslintrc.js")),(0,r.kt)("p",null,"This is the configuration file for ",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint"),", the TypeScript linter."),(0,r.kt)("p",null,"Normally, you should not need to touch this file, but you can edit it if you need to disable a specific linting rule."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"gitattributes"},(0,r.kt)("inlineCode",{parentName:"h3"},".gitattributes")),(0,r.kt)("p",null,'This contains specific Git attributes that should be applied to this Git repository, if present. By default, it prevent Windows systems from cloning the repository with "\\r\\n" line endings.'),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"gitignore"},(0,r.kt)("inlineCode",{parentName:"h3"},".gitignore")),(0,r.kt)("p",null,"This contains a list of files that should not be added to a Git repository, if present. If you have a private file that you don't want to be committed to a repository, you can edit this file and add it."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"isaacscriptjson"},(0,r.kt)("inlineCode",{parentName:"h3"},"isaacscript.json")),(0,r.kt)("p",null,"This is the configuration file for ",(0,r.kt)("inlineCode",{parentName:"p"},"isaacscript"),"."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"licence"},(0,r.kt)("inlineCode",{parentName:"h3"},"LICENCE")),(0,r.kt)("p",null,"This is the licence for your project. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"isaacscript init")," installs a ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GNU General Public License v3"),", because all code projects should include a license in them."),(0,r.kt)("p",null,"Feel free to change this to something else if you don't like GPLv3."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"packagejson"},(0,r.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,r.kt)("p",null,"This is the configuration file for ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),", the Node package manager. It contains a description of your project and a list of all of the dependencies."),(0,r.kt)("p",null,"In general, you should not need to touch this file. If you decide to add a new dependency (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install lodash --save"),"), then ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," would automatically edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file accordingly. (Beware of adding dependencies, since ",(0,r.kt)("a",{parentName:"p",href:"/docs/gotchas#npm-dependencies"},"it will break tstl"),".)"),(0,r.kt)("p",null,'Note that normally, a TypeScript project would have "devDependencies" of TypeScript, ESLint, and so forth. However, in the IsaacScript framework, all you have to do is depend on ',(0,r.kt)("inlineCode",{parentName:"p"},"isaacscript"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"isaacscript")," in turn depends on everything you need. This makes things a little bit simpler for you."),(0,r.kt)("p",null,"(If for whatever reason you want more granularity in your dependencies, then you can instead change your package.json file to depend on ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript-to-lua"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isaac-typescript-definitions"),", and so on.)"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"package-lockjson"},(0,r.kt)("inlineCode",{parentName:"h3"},"package-lock.json")),(0,r.kt)("p",null,"This is a lock file for ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),", the Node package manager."),(0,r.kt)("p",null,"You are not supposed to edit this file; just leave it in place so that ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," can function correctly."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"readmemd"},(0,r.kt)("inlineCode",{parentName:"h3"},"README.md")),(0,r.kt)("p",null,"This is the README file for your project, which should contain a brief description of your mod. It uses ",(0,r.kt)("a",{parentName:"p",href:"https://guides.github.com/features/mastering-markdown/"},"Markdown"),", which is the standard format for README files."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"tsconfigeslintjson-and-tsconfigjson"},(0,r.kt)("inlineCode",{parentName:"h3"},"tsconfig.eslint.json")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"tsconfig.json")),(0,r.kt)("p",null,"These are the configuration files for the ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," programming language. The main one is ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.eslint.json")," extends the main one to make ESLint work properly."),(0,r.kt)("p",null,"Normally, you should not need to touch these files. However, you can edit ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," if you need to add or remove a particular compiler flag."))}u.isMDXComponent=!0}}]);