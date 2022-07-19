"use strict";
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 2452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CopyRight = ({ className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "text-gray-800",
            children: [
                "Powered by ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "https://github.com/qianxi0410/gossip",
                    className: "text-blue-500 hover:underline transition-all",
                    children: "Gossip"
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyRight);


/***/ }),

/***/ 9437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BT": () => (/* binding */ fetchUser),
/* harmony export */   "SD": () => (/* binding */ fetchPost),
/* harmony export */   "T6": () => (/* binding */ fetchPosts),
/* harmony export */   "Vm": () => (/* binding */ groupByDate),
/* harmony export */   "_r": () => (/* binding */ fetchPaths),
/* harmony export */   "p6": () => (/* binding */ formatDate)
/* harmony export */ });
/* harmony import */ var octokit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var octokit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(octokit__WEBPACK_IMPORTED_MODULE_0__);

const cli = new octokit__WEBPACK_IMPORTED_MODULE_0__.Octokit();
// fetch the user info
const fetchUser = async ()=>{
    const { data  } = await cli.rest.users.getByUsername({
        username: "qianxi0410"
    });
    const user = {
        login: data.login,
        nick_name: data.name || data.login,
        avatar_url: data.avatar_url,
        bio: data.bio ?? "I have nothing to say."
    };
    return user;
};
// fetch the static ids
const fetchPaths = async ()=>{
    const { data: posts  } = await cli.rest.issues.listForRepo({
        owner: "qianxi0410",
        repo: "qianx1.xyz"
    });
    return posts.map((post)=>({
            params: {
                id: post.number.toString()
            }
        }));
};
// fetch posts list
const fetchPosts = async ()=>{
    const { data  } = await cli.rest.issues.listForRepo({
        owner: "qianxi0410",
        repo: "qianx1.xyz"
    });
    const posts = [];
    for (const p of data){
        posts.push({
            id: p.number,
            title: p.title,
            created_at: p.created_at,
            updated_at: p.updated_at,
            content: p.body,
            author: "qianxi0410"
        });
    }
    return posts;
};
// fetch post data
const fetchPost = async (id)=>{
    const { data  } = await cli.rest.issues.get({
        owner: "qianxi0410",
        repo: "qianx1.xyz",
        issue_number: Number(id)
    });
    const post = {
        id: data.number,
        title: data.title,
        created_at: data.created_at,
        updated_at: data.updated_at,
        content: data.body,
        author: "qianxi0410"
    };
    return post;
};
// format date string
const formatDate = (date)=>{
    const d = new Date(date);
    return d.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};
// format post list content
const groupByDate = (posts)=>{
    const map = new Map();
    for (const post of posts){
        const year = post.created_at.split("-")[0];
        const list = map.get(year) || [];
        list.push(post);
        map.set(year, list);
    }
    return map;
};


/***/ })

};
;