"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/copyright.tsx
var copyright = __webpack_require__(2452);
;// CONCATENATED MODULE: ./components/icons/github.tsx

const Github = ({ children , width , height  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: width,
        height: height,
        cursor: "pointer",
        viewBox: "0 0 16 16",
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        onClick: ()=>window.open(`https://github.com/${"qianxi0410"}`, "_blank"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"
            }),
            children
        ]
    });
/* harmony default export */ const github = (Github);

// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/next/image.js
var next_image = __webpack_require__(2728);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/header.tsx



const Header = ({ user  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-5 flex flex-row justify-between space-x-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-12 h-12 self-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: user.avatar_url,
                                    alt: "logo",
                                    className: "rounded-full self-center",
                                    layout: "fill"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "float-right ml-3 self-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xl font-medium",
                                        children: user.nick_name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "italic",
                                        children: user.bio
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "self-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(github, {
                            width: "2em",
                            height: "2em"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "mt-3"
            })
        ]
    });
/* harmony default export */ const header = (Header);

// EXTERNAL MODULE: ./lib/index.ts
var lib = __webpack_require__(9437);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js
var next_link = __webpack_require__(2519);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/posts.tsx



const PostItem = ({ post  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row flex-wrap my-1 justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/post/${post.id}`,
                className: "cursor-pointer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "text-2xl font-medium transition-all hover:underline hover:underline-offset-8",
                    children: post.title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-lg italic font-light self-center",
                children: (0,lib/* formatDate */.p6)(post.created_at)
            })
        ]
    });
const PostBlock = ({ year , items  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col my-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-3xl font-medium my-3 italic text-gray-500",
                children: year
            }),
            items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(PostItem, {
                    post: item
                }, item.id))
        ]
    });
const Posts = ({ posts  })=>{
    const map = (0,lib/* groupByDate */.Vm)(posts);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: [
            ...map
        ].map(([year, items])=>/*#__PURE__*/ jsx_runtime_.jsx(PostBlock, {
                year: year,
                items: items
            }, year))
    });
};
/* harmony default export */ const components_posts = (Posts);

;// CONCATENATED MODULE: ./pages/index.tsx





const getStaticProps = async ()=>{
    const user = await (0,lib/* fetchUser */.BT)();
    const posts = await (0,lib/* fetchPosts */.T6)();
    return {
        props: {
            user,
            posts
        }
    };
};
const Index = ({ user , posts  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {
                user: user
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_posts, {
                posts: posts
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(copyright/* default */.Z, {
                className: "bottom-5"
            })
        ]
    });
/* harmony default export */ const pages = (Index);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("octokit");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [646,519,728,810], () => (__webpack_exec__(3373)));
module.exports = __webpack_exports__;

})();