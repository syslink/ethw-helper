exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 932:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _asyncToGenerator;
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}


/***/ }),

/***/ 2648:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 5821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e8": () => (/* binding */ SvgEth)
/* harmony export */ });
/* unused harmony exports Ada, AddUser, ArrowCircleDown, ArrowCircleLeft, ArrowCircleRight, AtomicApi, Avax, Bell, Bin, Bnb, Book, Btc, Calendar, Camera, Cart, CartBag, Chainlink, Chart, Check, Checkmark, ChevronDown, ChevronLeft, ChevronLeft2X, ChevronRight, ChevronRight2X, ChevronUp, Cloud, Cog, Copy, CreditCard, Cross, CrossCircle, Cube, Dapps, Discord, Discord2, Doge, Download, DownloadCloud, Edit, Exclamation, Expand, ExternalLink, Eye, EyeClosed, Fil, File, Github, Google, Grid, HelpCircle, Home, Image, Info, Key, LifeRing, Link, Linux, List, LockClosed, LockOpen, LockReset, LogOut, Mail, Mastercard, Matic, Maximize, Menu, MessageCircle, Metamask, MetamaskLined, Minimize, Minus, MinusCircle, Monitor, More, MoreVert, Network, Off, Oneinch, Paperclip, Phone, Pin, Plug, Plus, Pulse, Reddit, Reload, Roadmap, Rocket, Sandbox, Sandbox2, Search, Server, Shib, Solana, SpeedyNode, Star, Stars, Telegram, Testnet, Trending, TriangleDown, TriangleUp, Twitter, Uni, Update, Usdc, Usdt, User, UserTeam, Visa, Web3Api, Windows, Xrp, Youtube */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = (react__WEBPACK_IMPORTED_MODULE_0___default()), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  g !== void 0 && (e = "" + g);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (h = a.ref);
  for (b in a)
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const SvgAda = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 22.185",
  width: "1em",
  height: "1em",
  "data-testid": "test-icon",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsxs("g", {
    fill: "#0033AD",
    children: [/* @__PURE__ */ jsx("path", {
      "data-name": "Path 146",
      d: "M6.579 11.012a1.617 1.617 0 0 0 1.524 1.7h.1a1.616 1.616 0 1 0-1.62-1.7z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 147",
      d: "M.551 10.596a.523.523 0 1 0 .493.551.519.519 0 0 0-.493-.551z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 148",
      d: "M6.479 1.627a.524.524 0 0 0-.474-.935.524.524 0 0 0 .474.935z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 149",
      d: "M8.116 4.494a.806.806 0 1 0-1.082-.359.808.808 0 0 0 1.082.359z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 150",
      d: "M2.6 6.454a.666.666 0 1 0-.192-.922.663.663 0 0 0 .192.922z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 151",
      d: "M3.58 10.308a.808.808 0 1 0 .762.851.808.808 0 0 0-.762-.851z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 152",
      d: "M2.689 15.731a.667.667 0 1 0 .9.295.67.67 0 0 0-.9-.295z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 153",
      d: "M5.825 8.637a.948.948 0 1 0-.275-1.312.942.942 0 0 0 .275 1.312z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 154",
      d: "M15.776 4.425a.809.809 0 1 0-.23-1.12.8.8 0 0 0 .23 1.12z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 155",
      d: "M17.427 1.576a.523.523 0 1 0-.154-.73.539.539 0 0 0 .154.73z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 156",
      d: "M15.897 9.47a1.616 1.616 0 1 0-.179 3.227h.09a1.615 1.615 0 0 0 .09-3.227z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 157",
      d: "M8.646 8.522a1.618 1.618 0 1 0 .717-2.177 1.62 1.62 0 0 0-.717 2.177z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 158",
      d: "M21.313 6.454a.666.666 0 1 0-.9-.294.677.677 0 0 0 .9.294z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 159",
      d: "M17.215 6.967a.949.949 0 1 0 1.274.423.949.949 0 0 0-1.274-.423z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 160",
      d: "M11.936 1.333a.675.675 0 0 0 .7-.627.667.667 0 0 0-1.332-.083.677.677 0 0 0 .627.711z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 161",
      d: "M11.929 5.513a.949.949 0 1 0-.9-1 .943.943 0 0 0 .9 1z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 162",
      d: "M6.784 15.218a.949.949 0 1 0-1.274-.423.949.949 0 0 0 1.274.423z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 163",
      d: "M12.543 6.902a1.616 1.616 0 1 0 1.351-.73 1.612 1.612 0 0 0-1.351.73z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 164",
      d: "M15.354 13.662a1.616 1.616 0 1 0-.717 2.17 1.609 1.609 0 0 0 .723-2.157c0-.006 0-.006-.006-.013z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 165",
      d: "M18.176 13.547a.948.948 0 1 0 .275 1.312.942.942 0 0 0-.275-1.312z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 166",
      d: "M21.272 11.122a.808.808 0 1 0-.851.762.813.813 0 0 0 .851-.762z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 167",
      d: "M23.507 10.545a.523.523 0 1 0 .493.551.527.527 0 0 0-.493-.551z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 168",
      d: "M21.401 15.731a.666.666 0 1 0 .192.922.663.663 0 0 0-.192-.922z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 169",
      d: "M6.566 20.609a.522.522 0 1 0 .147.723.514.514 0 0 0-.147-.723z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 170",
      d: "M17.523 20.557a.524.524 0 0 0 .474.935.524.524 0 0 0-.474-.935z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 171",
      d: "M11.457 15.283a1.618 1.618 0 1 0-2.241.467 1.624 1.624 0 0 0 2.241-.467z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 172",
      d: "M8.224 17.76a.809.809 0 1 0 .23 1.12.8.8 0 0 0-.23-1.12z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 173",
      d: "M11.994 20.852a.667.667 0 1 0 .627.711.675.675 0 0 0-.627-.711z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 174",
      d: "M12 16.672a.949.949 0 1 0 .9 1 .943.943 0 0 0-.9-1z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 175",
      d: "M15.884 17.696a.809.809 0 1 0 1.095.358.809.809 0 0 0-1.095-.358z"
    })]
  })]
});
const SvgAddUser = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 21",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.464 13.98A5 5 0 0 1 5 12.514h7a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536ZM8.5 2.515a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM20 5.515a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 9.515a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z"
  })]
});
const SvgArrowCircleDown = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M19.364 12a7.364 7.364 0 1 0-14.728 0 7.364 7.364 0 0 0 14.728 0zM12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm2.694 8.421a.818.818 0 1 1 1.157 1.158l-3.273 3.272a.818.818 0 0 1-1.156 0l-3.273-3.273a.818.818 0 1 1 1.157-1.156l1.876 1.875v-4.57a.818.818 0 1 1 1.636 0v4.57l1.876-1.876z"
  })]
});
const SvgArrowCircleLeft = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M12 4.636a7.364 7.364 0 1 0 0 14.728 7.364 7.364 0 0 0 0-14.728zM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0zm9.579-3.851c.32.32.32.837 0 1.157l-1.877 1.876h4.57a.818.818 0 1 1 0 1.636h-4.57l1.877 1.876a.818.818 0 1 1-1.158 1.157L8.15 12.578a.818.818 0 0 1 0-1.156l3.273-3.273a.818.818 0 0 1 1.156 0z"
  })]
});
const SvgArrowCircleRight = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M12 4.636a7.364 7.364 0 1 0 0 14.728 7.364 7.364 0 0 0 0-14.728zM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0zm8.421-2.694a.818.818 0 1 1 1.158-1.157l3.272 3.273c.32.319.32.837 0 1.156l-3.273 3.273a.818.818 0 1 1-1.156-1.157l1.875-1.876h-4.57a.818.818 0 1 1 0-1.636h4.57l-1.876-1.876z"
  })]
});
const SvgAtomicApi = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M12.313 21.967a9.591 9.591 0 0 1-4.599-1.208 9.868 9.868 0 0 1-3.501-3.285 10.24 10.24 0 0 1-.86-9.397.822.822 0 0 1 .438-.413.796.796 0 0 1 .596.004c.199.086.356.25.437.455a.858.858 0 0 1-.005.638 8.537 8.537 0 0 0 .287 6.1 8.243 8.243 0 0 0 4.264 4.267 7.965 7.965 0 0 0 5.959.15 8.215 8.215 0 0 0 4.463-4.048.828.828 0 0 1 .445-.45.8.8 0 0 1 .626.004c.2.086.358.25.44.456a.856.856 0 0 1-.004.641 9.965 9.965 0 0 1-3.584 4.438A9.61 9.61 0 0 1 12.338 22l-.024-.033z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M20.55 16.39a.813.813 0 0 1-.751-.52.851.851 0 0 1 .001-.64c.293-.7.488-1.439.579-2.195a.846.846 0 0 1 .313-.558.807.807 0 0 1 1.152.153c.133.177.192.4.164.622-.117.904-.35 1.788-.692 2.63a.83.83 0 0 1-.307.374.801.801 0 0 1-.46.135zm.456-5.726a.801.801 0 0 1-.517-.17.837.837 0 0 1-.298-.464 8.698 8.698 0 0 0-.814-2.112.851.851 0 0 1 .301-1.143.803.803 0 0 1 1.116.308c.436.785.765 1.628.978 2.505a.855.855 0 0 1-.097.633.826.826 0 0 1-.506.377l-.163.066zM18.041 5.79a.803.803 0 0 1-.522-.192 8.109 8.109 0 0 0-1.882-1.16.817.817 0 0 1-.429-.466.857.857 0 0 1 .203-.907.815.815 0 0 1 .584-.228.8.8 0 0 1 .31.073c.811.374 1.57.857 2.257 1.436a.854.854 0 0 1 .246.927.832.832 0 0 1-.299.4.801.801 0 0 1-.468.15V5.79zM7.173 5.339a.801.801 0 0 1-.484-.159.834.834 0 0 1-.298-.422.854.854 0 0 1 .004-.521.833.833 0 0 1 .305-.417l.261-.176a.804.804 0 0 1 .91.008.826.826 0 0 1 .223.234.852.852 0 0 1 .11.628.835.835 0 0 1-.355.524l-.204.15a.801.801 0 0 1-.472.15zm3.259-1.453a.806.806 0 0 1-.601-.182.854.854 0 0 1-.121-1.18.814.814 0 0 1 .55-.307A9.715 9.715 0 0 1 12.909 2a.807.807 0 0 1 .56.277.844.844 0 0 1-.049 1.158.804.804 0 0 1-.56.226 8.147 8.147 0 0 0-2.207.184.662.662 0 0 1-.261.041h.04zM4.884 5.33a.499.499 0 0 1 .717.098.525.525 0 0 1 .098.253l.847 2.93a.538.538 0 0 1-.193.487.507.507 0 0 1-.508.072L2.318 7.643a.525.525 0 0 1-.106-.902l2.672-1.41zm10.77 10.66a.823.823 0 0 1-.364-.52.853.853 0 0 1 .103-.632.816.816 0 0 1 .505-.369.798.798 0 0 1 .844.325.845.845 0 0 1 .14.624.847.847 0 0 1-.409.593.8.8 0 0 1-.396.104.801.801 0 0 1-.423-.125zm-2.078-1.327a.851.851 0 0 1 .276-1.512.798.798 0 0 1 .612.101c.183.116.314.3.365.515a.822.822 0 0 1-.392.917.8.8 0 0 1-.396.104.744.744 0 0 1-.465-.125zm-2.444-2.045c0-.222.086-.434.239-.59a.805.805 0 0 1 1.152 0 .845.845 0 0 1 0 1.18.804.804 0 0 1-.576.244.806.806 0 0 1-.566-.25.846.846 0 0 1-.232-.584h-.017zm0-2.505c0-.22.086-.433.239-.59a.805.805 0 0 1 1.152 0 .845.845 0 0 1 0 1.18.804.804 0 0 1-.576.245.806.806 0 0 1-.566-.25.846.846 0 0 1-.232-.585h-.017zm0-2.504c0-.221.086-.433.239-.59a.805.805 0 0 1 1.152 0 .845.845 0 0 1 0 1.18.805.805 0 0 1-.576.245.806.806 0 0 1-.566-.25.846.846 0 0 1-.232-.585h-.017z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M17.137 16.783a.8.8 0 0 1-.424-.125l-3.112-1.979a.852.852 0 0 1-.178-1.063.82.82 0 0 1 .432-.364.796.796 0 0 1 .56.008l3.113 1.979a.83.83 0 0 1 .33.409.854.854 0 0 1-.27.968.802.802 0 0 1-.492.167h.04zm-5.174-5.793a.805.805 0 0 1-.576-.245.846.846 0 0 1-.239-.59V5.94c0-.221.086-.434.239-.59a.805.805 0 0 1 1.152 0 .846.846 0 0 1 .239.59v4.215a.846.846 0 0 1-.239.59.805.805 0 0 1-.576.245z"
  })]
});
const SvgAvax = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsxs("g", {
    transform: "translate(-.5 54.497)",
    children: [/* @__PURE__ */ jsx("rect", {
      "data-name": "Rectangle 2",
      transform: "translate(24.5 -54.497)",
      fill: "#fff"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 141",
      d: "M24.5-42.497a12 12 0 1 1-12-12 12 12 0 0 1 12 12zM9.1-37.722H6.771a1.87 1.87 0 0 1-.878-.094.592.592 0 0 1-.268-.463c-.009-.174.112-.386.354-.811l5.75-10.136c.245-.43.368-.646.525-.725a.593.593 0 0 1 .537 0c.156.08.28.295.525.725l1.184 2.064.006.011a3.871 3.871 0 0 1 .457.942 1.751 1.751 0 0 1 0 .82 3.885 3.885 0 0 1-.46.952l-3.024 5.34-.008.014a3.83 3.83 0 0 1-.588.879 1.758 1.758 0 0 1-.716.416 4.214 4.214 0 0 1-1.067.066zm5.881 0h3.337a1.856 1.856 0 0 0 .887-.1.59.59 0 0 0 .268-.466c.008-.168-.11-.372-.341-.772l-.024-.042-1.672-2.859-.019-.032c-.235-.4-.353-.6-.506-.675a.587.587 0 0 0-.534 0c-.153.08-.277.289-.522.71l-1.664 2.861-.006.01c-.244.421-.366.631-.357.8a.6.6 0 0 0 .268.466 1.886 1.886 0 0 0 .885.099z",
      fill: "#E84142",
      fillRule: "evenodd"
    })]
  })]
});
const SvgBell = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2a1.21 1.21 0 0 0-1.214 1.188V4c-2.807.594-5.351 2.861-5.351 5.719 0 3.822-1.404 5.972-2.124 6.752-.228.222-.342.52-.304.779 0 .63.455 1.188 1.214 1.188h15.558c.759 0 1.214-.557 1.214-1.188.038-.26-.076-.557-.304-.78-.72-.779-2.124-2.929-2.124-6.751 0-2.858-2.544-5.125-5.351-5.719v-.813A1.21 1.21 0 0 0 12 2zM5.548 16.656c.797-1.002 1.67-3.746 1.707-6.9v-.037C7.266 7.256 9.537 5.569 12 5.563c2.463.006 4.734 1.693 4.744 4.156v.037c.038 3.154.91 5.898 1.707 6.9H5.548z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M12 22c1.328 0 2.39-1.04 2.39-2.375H9.572C9.572 20.961 10.635 22 12 22z"
  })]
});
const SvgBin = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 3.505a.25.25 0 0 0-.25.25v.755h4.5v-.755a.25.25 0 0 0-.25-.25h-4zm5.75 1.005v-.755A1.75 1.75 0 0 0 14 2.005h-4a1.75 1.75 0 0 0-1.75 1.75v.755h-3.5a.75.75 0 0 0 0 1.5h.5v14.248c0 .966.783 1.75 1.75 1.75h10a1.75 1.75 0 0 0 1.75-1.75V6.01h.5a.75.75 0 0 0 0-1.5h-3.5zm1.5 1.5H6.75v14.248c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25V6.01zM10 18.5a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-.75.75zm4 0a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 1 1 1.5 0v8.5a.75.75 0 0 1-.75.75z"
  })]
});
const SvgBnb = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  "data-name": "Layer2",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsxs("g", {
    "data-name": "Layer1",
    fill: "#F3BA2F",
    children: [/* @__PURE__ */ jsx("path", {
      "data-name": "Path1",
      d: "M7.339 10.085 12 5.424l4.663 4.663 2.712-2.712L12 0 4.627 7.373l2.712 2.712M0 12l2.712-2.712L5.424 12l-2.712 2.712zm7.339 1.915L12 18.576l4.663-4.663 2.713 2.711L12 24l-7.373-7.373 2.716-2.708M18.576 12l2.712-2.712L24 12l-2.712 2.712z"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path2",
      d: "m14.756 11.999-2.753-2.753-2.034 2.034-.234.234-.482.482 2.75 2.751 2.753-2.753"
    })]
  })]
});
const SvgBook = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M7.496 6.75c0 .156.094.25.25.25h8.506c.125 0 .25-.094.25-.25v-1a.269.269 0 0 0-.25-.25H7.746a.246.246 0 0 0-.25.25v1zm.25 3.25h8.506c.125 0 .25-.094.25-.25v-1a.269.269 0 0 0-.25-.25H7.746a.246.246 0 0 0-.25.25v1c0 .156.094.25.25.25zm11.848 8.5c.218-.031.406-.25.406-.5V2.5c0-.25-.25-.5-.5-.5h-13A2.487 2.487 0 0 0 4 4.5v15C4 20.906 5.094 22 6.5 22h13c.25 0 .5-.219.5-.5V21a.5.5 0 0 0-.406-.469c-.157-.406-.157-1.625 0-2.031zm-1.282 0c-.093.563-.093 1.469 0 2H6.5c-.563 0-1-.438-1-1 0-.531.438-1 1-1h11.813zm.188-15V17h-12c-.375 0-.719.094-1 .219V4.5c0-.531.438-1 1-1h12z"
  })]
});
const SvgBtc = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24.003",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    "data-name": "Path1",
    d: "M23.641 14.904A12 12 0 1 1 14.9.359a12 12 0 0 1 8.739 14.545z",
    fill: "#F7931A"
  }), /* @__PURE__ */ jsx("path", {
    "data-name": "Path2",
    d: "M17.286 10.292c.239-1.6-.976-2.455-2.638-3.027l.539-2.162-1.316-.328-.525 2.106c-.346-.086-.7-.168-1.054-.248l.529-2.119-1.315-.328-.539 2.162c-.286-.065-.567-.13-.84-.2v-.007l-1.815-.453-.35 1.406s.976.224.956.238a.7.7 0 0 1 .613.766l-.614 2.463a1.086 1.086 0 0 1 .137.044l-.139-.034-.86 3.451a.479.479 0 0 1-.6.313c.013.019-.956-.239-.956-.239l-.653 1.507 1.712.427c.318.08.631.164.938.242l-.544 2.187 1.314.328.539-2.164c.359.1.708.188 1.049.272l-.537 2.154 1.316.328.544-2.183c2.244.425 3.931.253 4.641-1.777a2.31 2.31 0 0 0-1.209-3.192 2.1 2.1 0 0 0 1.68-1.933zm-3.006 4.217c-.407 1.635-3.158.751-4.05.529l.723-2.9c.892.223 3.752.664 3.327 2.368zm.407-4.241c-.371 1.487-2.661.732-3.4.546l.655-2.628c.743.185 3.135.531 2.748 2.082z",
    fill: "#fff"
  })]
});
const SvgCalendar = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.4 6.273a.81.81 0 0 0-.8.818v11.454a.81.81 0 0 0 .8.819h11.2a.81.81 0 0 0 .8-.819V7.091a.81.81 0 0 0-.8-.818H6.4zM4 7.09c0-1.356 1.075-2.455 2.4-2.455h11.2c1.325 0 2.4 1.1 2.4 2.455v11.454C20 19.902 18.925 21 17.6 21H6.4C5.075 21 4 19.901 4 18.546V7.09z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.2 3c.442 0 .8.366.8.818v3.273a.81.81 0 0 1-.8.818.81.81 0 0 1-.8-.818V3.818A.81.81 0 0 1 15.2 3zM8.8 3c.442 0 .8.366.8.818v3.273a.81.81 0 0 1-.8.818.81.81 0 0 1-.8-.818V3.818A.81.81 0 0 1 8.8 3zM4 10.364a.81.81 0 0 1 .8-.819h14.4c.442 0 .8.367.8.819a.81.81 0 0 1-.8.818H4.8a.81.81 0 0 1-.8-.818z"
  })]
});
const SvgCamera = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.807 4.038a.833.833 0 0 1 .693-.371h5c.278 0 .539.139.693.37l1.42 2.13H19.5a2.5 2.5 0 0 1 2.5 2.5v9.166a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1-2.5-2.5V8.667a2.5 2.5 0 0 1 2.5-2.5h2.887l1.42-2.13zm1.139 1.295-1.42 2.13a.833.833 0 0 1-.693.37H4.5a.833.833 0 0 0-.833.834v9.166a.833.833 0 0 0 .833.834h15a.833.833 0 0 0 .833-.834V8.667a.833.833 0 0 0-.833-.834h-3.333a.833.833 0 0 1-.694-.37l-1.42-2.13H9.947zm2.054 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-4.167 2.5a4.167 4.167 0 1 1 8.334 0 4.167 4.167 0 0 1-8.334 0z"
  })]
});
const SvgCartBag = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  width: "1em",
  height: "1em",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.064 2.554a.75.75 0 0 1 .603-.304h10.666a.75.75 0 0 1 .603.304l2.667 3.6a.75.75 0 0 1 .147.446v12.6c0 .673-.264 1.32-.737 1.8a2.516 2.516 0 0 1-1.79.75H5.777a2.517 2.517 0 0 1-1.79-.75 2.561 2.561 0 0 1-.738-1.8V6.6a.75.75 0 0 1 .147-.446l2.667-3.6zm.98 1.196L5.49 5.85h13.02l-1.555-2.1H7.043zm12.206 3.6H4.75V19.2c0 .282.11.55.304.746.194.196.454.304.724.304h12.444c.27 0 .53-.108.724-.304.194-.197.304-.465.304-.746V7.35zM8.444 9.45a.75.75 0 0 1 .75.75c0 .759.298 1.485.825 2.019.527.533 1.24.831 1.981.831.741 0 1.454-.298 1.98-.831.528-.534.826-1.26.826-2.019a.75.75 0 1 1 1.5 0c0 1.15-.452 2.256-1.258 3.073A4.284 4.284 0 0 1 12 14.55a4.283 4.283 0 0 1-3.048-1.277A4.373 4.373 0 0 1 7.694 10.2a.75.75 0 0 1 .75-.75z"
  })]
});
const SvgCart = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M0 2.875C0 2.392.392 2 .875 2h3.5c.417 0 .776.294.858.703l.735 3.672h14.157a.875.875 0 0 1 .86 1.039l-1.402 7.348a2.625 2.625 0 0 1-2.616 2.113h-8.49a2.625 2.625 0 0 1-2.615-2.113L4.4 7.46a.868.868 0 0 1-.015-.073L3.658 3.75H.875A.875.875 0 0 1 0 2.875zm6.318 5.25 1.26 6.296a.875.875 0 0 0 .875.704h8.539a.875.875 0 0 0 .874-.701l1.201-6.299H6.318zm-.193 12.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0zm9.625 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0z"
  })]
});
const SvgChainlink = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  "data-name": "Layer 2",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 27.694",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("g", {
    "data-name": "Layer 1",
    children: /* @__PURE__ */ jsx("path", {
      "data-name": "Path 176",
      d: "M12 0 9.46 1.461l-6.921 4L0 6.923V20.77l2.54 1.461 6.984 4 2.54 1.461 2.54-1.461 6.857-4L24 20.77V6.923l-2.54-1.46-6.921-4zM5.079 17.848v-8l6.921-4 6.921 4v8L12 21.85z",
      fill: "#2A5ADA"
    })
  })]
});
const SvgChart = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M4 4h1.684v16H4V4zm16 7.2V8.8H6.526v2.4H20zm-6.737-4V4.8H6.526v2.4h6.737zm4.211 5.6v2.4H6.526v-2.4h10.948zm-2.527 6.4v-2.4h-8.42v2.4h8.42z"
  })]
});
const SvgCheck = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.707 5.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 15.586 19.293 5.293a1 1 0 0 1 1.414 0z"
  })]
});
const SvgCheckmark = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 18 18",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18Zm4.84-13.346.947.948c.165.165.165.494 0 .7l-3.563 3.522-3.563 3.521a.474.474 0 0 1-.7 0L3.213 9.556c-.165-.165-.165-.494 0-.7l.947-.906a.474.474 0 0 1 .7 0l2.472 2.471 5.808-5.767c.205-.205.535-.205.7 0Z"
  })]
});
const SvgChevronDown = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M11.735 15.882a.357.357 0 0 0 .53 0l4.618-4.63c.156-.126.156-.378 0-.536l-.624-.598c-.125-.157-.374-.157-.53 0l-3.713 3.717-3.745-3.717a.357.357 0 0 0-.53 0l-.624.598c-.156.158-.156.41 0 .536l4.618 4.63z"
  })]
});
const SvgChevronLeft2X = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M6.118 11.735a.357.357 0 0 0 0 .53l4.63 4.618c.126.156.378.156.536 0l.598-.624c.157-.125.157-.374 0-.53l-3.717-3.713 3.717-3.745a.357.357 0 0 0 0-.53l-.598-.624c-.158-.156-.41-.156-.536 0l-4.63 4.618z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M12.118 11.735a.357.357 0 0 0 0 .53l4.63 4.618c.126.156.378.156.535 0l.599-.624c.157-.125.157-.374 0-.53l-3.717-3.713 3.717-3.745a.357.357 0 0 0 0-.53l-.599-.624c-.157-.156-.409-.156-.535 0l-4.63 4.618z"
  })]
});
const SvgChevronLeft = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M9.118 11.735a.357.357 0 0 0 0 .53l4.63 4.618c.126.156.378.156.536 0l.598-.624c.157-.125.157-.374 0-.53l-3.717-3.713 3.717-3.745a.357.357 0 0 0 0-.53l-.598-.624c-.158-.156-.41-.156-.536 0l-4.63 4.618z"
  })]
});
const SvgChevronRight2X = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M17.882 11.735a.357.357 0 0 1 0 .53l-4.63 4.618c-.126.156-.378.156-.536 0l-.598-.624c-.157-.125-.157-.374 0-.53l3.717-3.713-3.717-3.745a.357.357 0 0 1 0-.53l.598-.624c.158-.156.41-.156.536 0l4.63 4.618z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M11.882 11.735a.357.357 0 0 1 0 .53l-4.63 4.618c-.126.156-.378.156-.535 0l-.599-.624c-.157-.125-.157-.374 0-.53l3.717-3.713L6.118 8.27a.357.357 0 0 1 0-.53l.599-.624c.157-.156.409-.156.535 0l4.63 4.618z"
  })]
});
const SvgChevronRight = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M14.882 12.265a.357.357 0 0 0 0-.53l-4.63-4.618c-.126-.156-.378-.156-.535 0l-.599.624c-.157.125-.157.374 0 .53l3.717 3.713-3.717 3.745a.357.357 0 0 0 0 .53l.599.624c.157.156.409.156.535 0l4.63-4.618z"
  })]
});
const SvgChevronUp = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M12.265 9.118a.357.357 0 0 0-.53 0l-4.618 4.63c-.156.126-.156.378 0 .536l.624.598c.125.157.374.157.53 0l3.713-3.717 3.745 3.717a.357.357 0 0 0 .53 0l.624-.598c.156-.158.156-.41 0-.536l-4.618-4.63z"
  })]
});
const SvgCloud = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 2,
  width: "1em",
  height: "1em",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 1 0-9.78 2.096A4.001 4.001 0 0 0 3 15z"
  })]
});
const SvgCog = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 1.667a.833.833 0 0 0-.833.833v.145a2.208 2.208 0 0 1-1.339 2.02.833.833 0 0 1-.22.061 2.208 2.208 0 0 1-2.274-.505l-.007-.007-.05-.05a.836.836 0 0 0-1.18 0 .833.833 0 0 0 0 1.18l.057.057a2.208 2.208 0 0 1 .452 2.411 2.208 2.208 0 0 1-2.012 1.421H2.5a.833.833 0 0 0 0 1.667h.145a2.208 2.208 0 0 1 2.02 1.334 2.208 2.208 0 0 1-.444 2.432l-.007.007-.05.05a.835.835 0 0 0 0 1.18.833.833 0 0 0 1.18 0l.057-.057a2.209 2.209 0 0 1 2.411-.452 2.208 2.208 0 0 1 1.421 2.011v.095a.833.833 0 0 0 1.667 0v-.145a2.208 2.208 0 0 1 1.334-2.02 2.209 2.209 0 0 1 2.432.444l.007.007.05.05a.836.836 0 0 0 .909.181.834.834 0 0 0 .27-.18v-.002a.832.832 0 0 0 0-1.179l-.056-.057a2.209 2.209 0 0 1-.444-2.431 2.209 2.209 0 0 1 2.02-1.335h.078a.834.834 0 0 0 0-1.666h-.145a2.208 2.208 0 0 1-2.021-1.339.837.837 0 0 1-.06-.22 2.208 2.208 0 0 1 .505-2.274l.007-.007.05-.05a.837.837 0 0 0 .181-.909.834.834 0 0 0-.18-.27h-.002a.833.833 0 0 0-1.179 0l-.057.056a2.208 2.208 0 0 1-2.431.444 2.208 2.208 0 0 1-1.335-2.02V2.5A.834.834 0 0 0 10 1.667zM8.232.732A2.5 2.5 0 0 1 12.5 2.5v.073a.542.542 0 0 0 .328.494l.008.004a.542.542 0 0 0 .595-.106l.046-.046a2.5 2.5 0 1 1 3.537 3.537l-.046.046a.541.541 0 0 0-.106.595.83.83 0 0 1 .054.166.543.543 0 0 0 .444.237h.14a2.5 2.5 0 0 1 0 5h-.073a.542.542 0 0 0-.494.328l-.004.008a.542.542 0 0 0 .106.595l.046.046a2.5 2.5 0 0 1 0 3.538l-.59-.59.59.589a2.5 2.5 0 0 1-3.537 0l-.046-.046a.542.542 0 0 0-.595-.106l-.008.004a.542.542 0 0 0-.328.494v.14a2.5 2.5 0 0 1-5 0v-.063a.542.542 0 0 0-.355-.488.932.932 0 0 1-.048-.02.542.542 0 0 0-.595.106l-.046.046a2.501 2.501 0 1 1-3.537-3.537l.046-.046a.542.542 0 0 0 .106-.595l-.004-.008a.542.542 0 0 0-.494-.328H2.5a2.5 2.5 0 1 1 0-5h.063a.542.542 0 0 0 .488-.355.831.831 0 0 1 .02-.048.542.542 0 0 0-.106-.595l-.046-.046a2.5 2.5 0 1 1 3.537-3.537l.046.046a.542.542 0 0 0 .595.106.834.834 0 0 1 .166-.054.542.542 0 0 0 .237-.444V2.5A2.5 2.5 0 0 1 8.232.732zM10 8.333a1.667 1.667 0 1 0 0 3.334 1.667 1.667 0 0 0 0-3.334zM6.667 10a3.333 3.333 0 1 1 6.666 0 3.333 3.333 0 0 1-6.666 0z"
  })]
});
const SvgCopy = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M13.306 14.501H8.292a.837.837 0 0 1-.846-.83c0-.453.383-.829.846-.829h5.023c.472 0 .846.376.846.83a.845.845 0 0 1-.855.829zm0-3.335H8.292a.837.837 0 0 1-.846-.829c0-.454.383-.83.846-.83h5.023c.472 0 .846.376.846.83 0 .454-.383.83-.855.83zm0 6.67H8.292a.837.837 0 0 1-.846-.83c0-.453.383-.829.846-.829h5.023c.472 0 .846.376.846.83 0 .453-.383.829-.855.829z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M14.99 22H6.61C5.175 22 4 20.848 4 19.442V7.892c0-1.414 1.176-2.557 2.61-2.557h8.38c1.442 0 2.608 1.152 2.608 2.558v11.55c0 1.405-1.166 2.557-2.609 2.557zM6.61 7.002a.903.903 0 0 0-.91.89v11.55c0 .489.41.89.91.89h8.38a.903.903 0 0 0 .907-.89V7.892c0-.488-.41-.89-.908-.89H6.61z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M18.39 18.665h-1.638a.837.837 0 0 1-.846-.83c0-.453.383-.829.846-.829h1.639a.903.903 0 0 0 .908-.89V4.558c0-.489-.41-.89-.908-.89h-8.38a.903.903 0 0 0-.908.89v1.606c0 .463-.383.83-.846.83-.464 0-.855-.367-.855-.83V4.558C7.402 3.152 8.568 2 10.01 2h8.38C19.833 2 21 3.152 21 4.558v11.55c0 1.414-1.175 2.557-2.61 2.557z"
  })]
});
const SvgCreditCard = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M20.299 4H3.667C2.729 4 2 4.786 2 5.714v12.572C2 19.25 2.73 20 3.667 20h16.632c.937 0 1.701-.75 1.701-1.714V5.714C22 4.786 21.236 4 20.299 4zM3.875 5.714H20.09c.14 0 .209.107.209.215V8H3.667V5.929c0-.108.07-.215.208-.215zM20.09 18.286H3.875c-.139 0-.208-.072-.208-.215V10h16.632v8.071c0 .143-.07.215-.209.215zM8.667 15c0-.214-.209-.429-.417-.429h-2.5c-.243 0-.417.215-.417.429v1.143c0 .25.174.428.417.428h2.5a.428.428 0 0 0 .417-.428V15zm6.666 0c0-.214-.208-.429-.416-.429h-4.723c-.243 0-.416.215-.416.429v1.143c0 .25.173.428.416.428h4.723a.428.428 0 0 0 .416-.428V15z"
  })]
});
const SvgCrossCircle = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.364 12a7.364 7.364 0 1 0-14.728 0 7.364 7.364 0 0 0 14.728 0zM12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M14.695 8.2a.818.818 0 0 1 1.157 1.157L12.58 12.63a.818.818 0 0 1-1.157 0L8.15 9.357A.818.818 0 1 1 9.307 8.2L12 10.894 14.695 8.2z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M9.307 15.799a.818.818 0 0 1-1.157-1.157l3.272-3.273a.818.818 0 0 1 1.157 0l3.273 3.273a.818.818 0 0 1-1.157 1.157l-2.694-2.694-2.694 2.694z"
  })]
});
const SvgCross = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "m23 20.168-8.185-8.187L23 3.807 20.168 1l-8.182 8.179L3.81 1 1 3.81l8.186 8.196L1 20.19 3.81 23l8.203-8.192L20.193 23z"
  })]
});
const SvgCube = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M4.082 7.505C4 7.587 4 7.67 4 7.835v8.392c0 .247.082.412.33.494l7.34 4.197c.083.082.165.082.33.082.082 0 .165 0 .33-.082l7.34-4.197c.165-.082.33-.329.33-.494V7.834c0-.082 0-.247-.082-.329l-.248-.247-7.505-4.196a.706.706 0 0 0-.577 0l-7.34 4.196c-.083.083-.166.165-.166.247zm1.073 8.393V8.822l6.103 3.538v7.077l-6.103-3.539zm13.443 0-6.103 3.539V12.36l6.103-3.538v7.076zm-6.68-11.602 6.103 3.538-6.104 3.539-6.103-3.539 6.104-3.538zm1.896 8.887a.397.397 0 0 1 .495-.165l2.722 1.564a.395.395 0 0 1 .165.493.397.397 0 0 1-.495.165l-2.722-1.563c-.165-.083-.247-.33-.165-.494zm-1.896-3.374c-.248 0-.413-.164-.413-.411v-3.21c0-.246.165-.41.412-.41.248 0 .413.164.413.41v3.21c-.083.247-.248.411-.412.411zm-1.98 3.374c.083.164.083.411-.165.494L7.052 15.24c-.165.082-.413.082-.495-.165-.083-.164-.083-.411.165-.493l2.721-1.564c.165-.082.413-.082.495.165z"
  })]
});
const SvgDapps = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M5.625 12.595a.774.774 0 0 1-.24 0l-2.83-.997a.793.793 0 0 1-.28-.155.865.865 0 0 1-.258-.902L2.931 7.6a.848.848 0 0 1 .155-.284.81.81 0 0 1 .247-.202c.19-.1.41-.118.611-.05l2.822.956a.795.795 0 0 1 .275.158.865.865 0 0 1 .247.898l-.892 2.942a.88.88 0 0 1-.402.486.778.778 0 0 1-.37.092Zm-1.808-2.33 1.294.436.426-1.366-1.294-.436-.426 1.366ZM10.61 6.82a.787.787 0 0 1-.57-.246.857.857 0 0 1-.235-.592V2.88a.856.856 0 0 1 .242-.587.788.788 0 0 1 .562-.251h2.966c.214 0 .418.088.569.246.15.157.235.37.235.592v3.102a.857.857 0 0 1-.235.592.787.787 0 0 1-.569.246H10.61Zm.803-3.102v1.425h1.359V3.718h-1.359ZM18.375 12.864a.78.78 0 0 1-.496-.148.836.836 0 0 1-.308-.43l-.877-2.951a.87.87 0 0 1 .048-.64.814.814 0 0 1 .467-.416l2.822-.964a.773.773 0 0 1 .615.053c.094.05.177.12.246.204.068.085.12.182.151.288l.917 2.942a.8.8 0 0 1-.048.637.835.835 0 0 1-.194.258.796.796 0 0 1-.273.161l-2.821.955a.866.866 0 0 1-.25.05Zm.096-3.244.426 1.391 1.294-.444-.418-1.341-1.302.394ZM16.051 22a.777.777 0 0 1-.365-.09.814.814 0 0 1-.286-.254l-1.744-2.515a.866.866 0 0 1-.145-.586.844.844 0 0 1 .322-.545l2.411-1.82a.744.744 0 0 1 .595-.15.8.8 0 0 1 .523.335l1.744 2.515c.11.18.15.398.112.609a.842.842 0 0 1-.32.522l-2.413 1.82a.783.783 0 0 1-.434.159Zm-.619-3.152.804 1.148 1.102-.838-.804-1.148-1.102.838ZM7.643 21.84a.783.783 0 0 1-.474-.167l-2.412-1.82a.866.866 0 0 1-.177-1.165l1.745-2.514a.814.814 0 0 1 .24-.216.78.78 0 0 1 .901.082l2.412 1.819c.172.13.287.326.321.545a.872.872 0 0 1-.144.628L8.31 21.547a.806.806 0 0 1-.3.23.774.774 0 0 1-.367.063Zm-1.278-2.85 1.101.839.804-1.149-1.101-.838-.804 1.149Z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M5.625 12.595a.774.774 0 0 1-.24 0l-2.83-.997a.793.793 0 0 1-.28-.155.865.865 0 0 1-.258-.902L2.931 7.6a.848.848 0 0 1 .155-.284.81.81 0 0 1 .247-.202c.19-.1.41-.118.611-.05l2.822.956a.795.795 0 0 1 .275.158.865.865 0 0 1 .247.898l-.892 2.942a.88.88 0 0 1-.402.486.778.778 0 0 1-.37.092Zm-1.808-2.33 1.294.436.426-1.366-1.294-.436-.426 1.366ZM8.23 8.11a.777.777 0 0 1-.365-.09.814.814 0 0 1-.286-.253.855.855 0 0 1-.146-.625.861.861 0 0 1 .323-.549l.377-.285a.79.79 0 0 1 .6-.151.783.783 0 0 1 .295.113.855.855 0 0 1 .376.848.861.861 0 0 1-.322.548l-.378.285a.782.782 0 0 1-.474.16ZM15.915 8.22a.782.782 0 0 1-.466-.16l-.394-.293a.862.862 0 0 1 .054-1.396.784.784 0 0 1 .609-.1.79.79 0 0 1 .285.138l.386.293c.138.104.24.251.293.42a.872.872 0 0 1 0 .519.837.837 0 0 1-.293.42.781.781 0 0 1-.474.158ZM5.762 15.571a.782.782 0 0 1-.472-.16.837.837 0 0 1-.292-.418l-.2-.629a.87.87 0 0 1 .03-.655.835.835 0 0 1 .195-.266.795.795 0 0 1 .598-.204c.108.01.213.042.308.095.096.053.18.126.248.213a.852.852 0 0 1 .148.297l.2.638a.87.87 0 0 1-.041.627.816.816 0 0 1-.449.42.673.673 0 0 1-.273.042ZM12.241 20.432h-.868a.788.788 0 0 1-.568-.245.857.857 0 0 1-.236-.593c0-.222.085-.435.236-.593a.788.788 0 0 1 .568-.245h.868c.213 0 .418.088.569.245.15.158.235.37.235.593a.857.857 0 0 1-.236.593.787.787 0 0 1-.568.245ZM18.15 15.88a.867.867 0 0 1-.25 0 .814.814 0 0 1-.466-.416.87.87 0 0 1-.048-.64l.209-.67a.827.827 0 0 1 .404-.465.774.774 0 0 1 .6-.042.813.813 0 0 1 .46.403.87.87 0 0 1 .063.624l-.209.67a.833.833 0 0 1-.3.394.78.78 0 0 1-.463.143ZM12.097 15.714a3.076 3.076 0 0 1-1.762-.553 3.276 3.276 0 0 1-1.17-1.48 3.434 3.434 0 0 1-.184-1.91c.121-.64.422-1.23.865-1.692a3.13 3.13 0 0 1 1.622-.907 3.047 3.047 0 0 1 1.83.187 3.2 3.2 0 0 1 1.423 1.216c.349.544.535 1.182.535 1.836 0 .874-.333 1.713-.925 2.332a3.104 3.104 0 0 1-2.234.97Zm0-4.92a1.514 1.514 0 0 0-.87.27 1.612 1.612 0 0 0-.578.73 1.69 1.69 0 0 0-.09.94c.06.317.208.607.427.835.218.228.497.383.8.446.303.062.618.03.903-.095.285-.124.529-.334.7-.602.17-.27.26-.585.259-.907 0-.43-.163-.84-.454-1.144a1.52 1.52 0 0 0-1.098-.474Z"
  })]
});
const SvgDiscord = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M10.109 10.987c-.596 0-1.066.534-1.066 1.187 0 .65.48 1.187 1.066 1.187.595 0 1.064-.537 1.064-1.187.012-.654-.47-1.187-1.064-1.187zm3.814 0c-.596 0-1.066.534-1.066 1.187 0 .65.481 1.187 1.066 1.187.595 0 1.065-.537 1.065-1.187-.001-.654-.47-1.187-1.065-1.187z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M17.858 4H6.141C4.961 4 4 4.983 4 6.202v11.074c0 1.218.961 2.474 2.141 2.474h9.564l-.556-2.251 1.339 1.272 1.264 1.197L20 22V6.202C20 4.983 19.039 4 17.858 4zm-2.891 11.977s-.376-.459-.689-.867c1.369-.396 1.891-1.271 1.891-1.271a6.005 6.005 0 0 1-1.202.632 6.892 6.892 0 0 1-1.515.46 7.184 7.184 0 0 1-2.706-.012 8.59 8.59 0 0 1-1.536-.461 5.88 5.88 0 0 1-.762-.361c-.032-.024-.063-.033-.094-.054a.128.128 0 0 1-.042-.034c-.189-.106-.293-.18-.293-.18s.501.855 1.83 1.26c-.314.406-.702.888-.702.888-2.308-.075-3.185-1.624-3.185-1.624 0-3.441 1.505-6.23 1.505-6.23C8.97 6.967 10.402 7 10.402 7l.105.128c-1.88.557-2.749 1.4-2.749 1.4s.231-.127.617-.309c1.118-.501 2.005-.64 2.372-.673.062-.01.115-.022.178-.022a8.637 8.637 0 0 1 2.11-.021c.993.118 2.06.417 3.145 1.026 0 0-.826-.801-2.602-1.357l.146-.17s1.432-.034 2.936 1.122c0 0 1.504 2.789 1.504 6.23 0 0-.887 1.548-3.197 1.623z"
  })]
});
const SvgDiscord2 = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 19 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M10.84.985H7.731A.69.69 0 0 1 7.07.492.69.69 0 0 0 6.408 0h-.324a1 1 0 0 0-.371.072L4.566.53l-1.43.576a1 1 0 0 0-.432.335L1.91 2.518a1 1 0 0 0-.116.205l-.543 1.292L.47 6.101a1 1 0 0 0-.044.15L.02 8.234a1 1 0 0 0-.02.2v3.6a1 1 0 0 0 .454.838l1.651 1.075c.07.045.144.082.222.108l1.208.415.515.206a1 1 0 0 0 1.241-.435l.115-.203a1 1 0 0 0-.363-1.355l-.625-.367a.148.148 0 0 1 .13-.264l1.752.708c.071.029.145.049.22.06l2.24.35c.052.008.103.012.155.012h1.675c.059 0 .117-.005.176-.016l1.474-.264c.088-.015.173-.042.253-.08l1.658-.788a.21.21 0 0 1 .193.372l-.665.373a.795.795 0 0 0-.29 1.107l.235.387a1 1 0 0 0 1.23.408l1.56-.632c.054-.023.107-.05.157-.081l1.797-1.133a1 1 0 0 0 .461-.742l.16-1.535a.996.996 0 0 0 0-.207l-.21-2.018-.355-2.08a.994.994 0 0 0-.039-.155l-.71-2.083-.622-1.314a.993.993 0 0 0-.099-.165l-.823-1.12a1 1 0 0 0-.38-.312L14.335.436a1.002 1.002 0 0 0-.252-.08L12.684.108a1 1 0 0 0-.975.385l-.068.09a1 1 0 0 1-.8.402Z",
    fill: "#5865F2"
  }), /* @__PURE__ */ jsx("ellipse", {
    cx: 6.333,
    cy: 8.182,
    rx: 1.915,
    ry: 1.97,
    fill: "#fff"
  }), /* @__PURE__ */ jsx("ellipse", {
    cx: 12.667,
    cy: 8.182,
    rx: 1.915,
    ry: 1.97,
    fill: "#fff"
  })]
});
const SvgDoge = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("g", {
    "data-name": "Layer 2",
    children: /* @__PURE__ */ jsx("g", {
      "data-name": "Layer 1",
      children: /* @__PURE__ */ jsxs("g", {
        "data-name": "Layer_1",
        transform: "translate(.094 .094)",
        children: [/* @__PURE__ */ jsx("circle", {
          "data-name": "Ellipse 1",
          cx: 12,
          cy: 12,
          r: 12,
          transform: "translate(-.095 -.095)",
          fill: "#988430"
        }), /* @__PURE__ */ jsx("circle", {
          "data-name": "Ellipse 2",
          cx: 11.608,
          cy: 11.608,
          r: 11.608,
          transform: "translate(.285 .285)",
          fill: "#7a6a2a"
        }), /* @__PURE__ */ jsx("circle", {
          "data-name": "Ellipse 3",
          cx: 11.364,
          cy: 11.364,
          r: 11.364,
          transform: "translate(.529 .529)",
          fill: "#BA9F33"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 1",
          d: "M5.144 10.612c-.068-.062-.14-.124-.206-.186l-.2-.186-.2-.192c-.033-.033-.068-.062-.1-.1l-.1-.091c-.268-.254-.537-.508-.8-.763.274.25.541.5.815.753l.1.1c.033.033.068.062.1.1l.2.186c.068.062.134.124.2.192s.134.13.2.192Zm-3.555-.038s.974.1 1.45.169c.44.062 1.818.274 1.818.274Zm0 0c.274.023.547.052.821.081l.408.043.206.023.2.029.815.13.407.068c.134.023.268.049.408.072a11.37 11.37 0 0 1-.408-.052l-.407-.058-.815-.12c-.068-.01-.134-.023-.2-.033l-.206-.024c-.134-.013-.274-.033-.408-.049a23.089 23.089 0 0 1-.821-.111Zm3.171.7s-1.04.264-1.391.365-1.391.413-1.391.413l2.783-.778Z",
          fill: "#cfb66c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 2",
          d: "M4.755 11.27a63.36 63.36 0 0 1-.695.2l-.695.186-.691.2-.345.1c-.114.033-.231.062-.349.1.114-.038.231-.078.345-.111l.345-.111c.231-.072.46-.14.691-.212s.466-.12.7-.177.458-.112.693-.165Zm-2.637 1.419c.114-.043 1.434-.658 1.741-.8.154-.072.6-.23.6-.23Z",
          fill: "#cfb66c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 3",
          d: "M2.122 12.689c.1-.038.2-.085.293-.13l.287-.134.576-.277c.192-.091.378-.192.576-.278.1-.043.2-.078.3-.11l.153-.049c.052-.013.1-.029.154-.043-.192.091-.394.169-.586.258s-.388.173-.586.258l-.586.258c-.2.08-.389.165-.584.246Zm.128.537s1.2-.7 1.607-.926c.215-.12.912-.466.912-.466Z",
          fill: "#cfb66c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 4",
          d: "m2.251 13.226.613-.378.307-.186.313-.182c.1-.062.206-.124.312-.182a1.129 1.129 0 0 1 .159-.082l.163-.082c.215-.1.431-.211.658-.3-.206.13-.417.241-.629.355-.1.058-.212.111-.316.169s-.206.12-.312.177-.206.12-.312.177l-.316.173-.638.345Zm2.509-1.238s-.743.57-.984.753-.949.695-.949.695Z",
          fill: "#cfb66c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 5",
          d: "m9.025 16.589-.38-.72.221-.9 1.578-.609-.672-1.378.332-1.391.623-1.246 1.925-.3 1.415-1.349 3.054.231.6 3.266-1.155 4.112-.658 2.129-2.666.1-1.238-.858-1.45-.606Z",
          fill: "#e2cc85",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 6",
          d: "M13.702 16.565a2.25 2.25 0 0 1-1 .13c-.182-.244-1.457-.359-1.457-.359a.714.714 0 0 0-.441.068 4.891 4.891 0 0 1-.8.163c-.25.062-.5-.264-.691-.332a2.7 2.7 0 0 1-.446-.244l-.537-.052-1.079-.456-1.714-1.708-.466.729-.144.9.518 1.069 1.4 1.271 2.721.691 1.613-.475 2.02-.854.507-.543Z",
          fill: "#f1d789",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 7",
          d: "m4.031 10.531.345-1.046.412-.675 1.325-.111-.4 1.16-1.108 1.972.46 1.76-.815.407-.25-.384-.2-.881-.014-.99Z",
          fill: "#f4ecb4",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 8",
          d: "m5.522 16.494-.254-.355a.583.583 0 0 1-.029-.316c.038-.149.033-.159.014-.215s-.182-.25-.173-.417-.014-.225.111-.359a.45.45 0 0 0 .091-.355l.169.1.038-.058a.173.173 0 0 1 .062.124c.014-.1-.043-.59.085-.7s.355.518.355.518l-.14-.912-.359-.935-.638-.854-.038-.941v-.081a3.167 3.167 0 0 0-.375.806c-.058.244.082.541.052.893s-.052.322.033.46.293.423.212.629c-.072.177-.316.052-.316.052a.531.531 0 0 1-.114.2.435.435 0 0 0-.1-.192c0 .033-.014.078-.014.078s-.043-.134-.085-.3c-.058-.225-.12-.522-.176-.681-.023.091-.081.369-.081.369l.033.427.159.586.154.384.149.47.13.315.1.24.091.542.44.466.235.1.171-.087Z",
          fill: "#f3e19d",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 9",
          d: "M4.267 9.677a3.688 3.688 0 0 0-.407 1.079 7.137 7.137 0 0 0-.115 1.851 7.667 7.667 0 0 0 .258 1.525 8.5 8.5 0 0 0 .551 1.294l.014-.029a2.045 2.045 0 0 1-.159-.4c-.052-.206-.072-.45-.12-.561a2.677 2.677 0 0 1-.149-.341 1.461 1.461 0 0 0-.14-.489.991.991 0 0 1-.111-.388c-.019-.245.01-.518-.014-.743a2.987 2.987 0 0 1-.033-.825c.039-.2.241-.753.365-1.2.082-.283.033-.522.182-.769a2.172 2.172 0 0 0 .274-.609c.038-.136-.4.6-.4.6Z",
          fill: "#f2e8b0",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 10",
          d: "M5.767 9.462a.634.634 0 0 0-.241.134 3.5 3.5 0 0 0-.215.287 2.256 2.256 0 0 0-.2.423c-.085.169-.274.423-.3.514s-.062.518-.111.72a.969.969 0 0 0 .048.45l.111-.023a.349.349 0 0 0 .111.241c.111.095.13-.322.13-.322l.413-1.4.623-.423.068-.342-.444-.264Z",
          fill: "#f5eec0",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 11",
          d: "M6.069 10.094a1.043 1.043 0 0 0-.437.124c-.058.043-.081.078-.144.13a.949.949 0 0 0-.287.307 2.037 2.037 0 0 0-.177.667c-.019.149-.019.287-.033.408a1.693 1.693 0 0 0-.033.384c.019.186.212.283.23.495l.4-.2.375-1.477.8-.5-.45-.5-.239.166Z",
          fill: "#e6db9d",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 12",
          d: "M3.971 20.039v-.044c.058-.5.068-.877.111-1.114a2.92 2.92 0 0 0 .1-.586 2.637 2.637 0 0 1-.01-.5c.029-.206.231-.45.225-.619a.524.524 0 0 0-.13-.3c-.058-.082-.1-.15-.1-.15s.4-.273.394-1.376a.106.106 0 0 1 .023.01l.2.557.134.163.514.959.662.642.978.658.613.667.062 1.779-.8 1.04-.131.238a11.4 11.4 0 0 1-2.835-2.017Z",
          fill: "#e5cb7a",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 13",
          d: "M6.419 21.741a.548.548 0 0 1 .2-.365.218.218 0 0 1 .043.13 1.155 1.155 0 0 1 .786-.528.808.808 0 0 0 .648-.475l1.108-1.007 1.267-1.167 1.541-.541.72-.177a.4.4 0 0 1-.014.169 3.507 3.507 0 0 0 .739-.186c.124-.048.241-.068.3 0a.666.666 0 0 1 .111.407c.149-.033.322-.177.461-.163.221.023.417.283.642.283.3 0 .431-.182.638-.326.124-.085.3-.192.4-.264.241-.177 2.787-.955 2.787-.955l.893.058.144.959-.077 2.506-.029.028-4.059 2.12-5.626.862a11.284 11.284 0 0 1-3.6-1.237l-.029-.128Z",
          fill: "#d8c173",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 14",
          d: "M4.312 20.358c.08-.167.152-.307.164-.357.01.1.028.322.065.557q-.115-.099-.229-.2Z",
          fill: "#f1d789",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 15",
          d: "m8.422 22.713.728-.2.062.02s.033.019.033.085c.091-.052.169-.043.225-.078.029.062.058.268.186.293a.571.571 0 0 0 .423-.169 2.82 2.82 0 0 1 .431-.316 2.284 2.284 0 0 1 .12.258c.163-.13.446-.658.85-.648a1.531 1.531 0 0 1 .56-.677 1.219 1.219 0 0 1 .9-.25 1.541 1.541 0 0 1 .423-.378.39.39 0 0 0 .349.023c.169-.078.359-.378.609-.417a.587.587 0 0 1 .388.081 6.33 6.33 0 0 1 1.232-.964c-.019-.058-.058-.277.532-.763.033.029.01.111.033.115a1.372 1.372 0 0 0 .336-.2 2.723 2.723 0 0 1 .658-.394.921.921 0 0 1 .633.095.3.3 0 0 1 .091-.043 1.207 1.207 0 0 0 .177-.038 1.228 1.228 0 0 1 0 .423.94.94 0 0 0 .192.082.868.868 0 0 1-.225.342c.1.048.114.1.258.153a2.842 2.842 0 0 0-.2.307c-.043.091-.2.47-.264.613s-.169.407-.215.461a3.7 3.7 0 0 1-.345.388c.115-.043.586-.186.786-.241l-.651.965a11.386 11.386 0 0 1-9.321 1.079Z",
          fill: "#e0cd81",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 16",
          d: "M6.117 10.042a.7.7 0 0 0-.2.023c-.033.023.169.072.231.1a.53.53 0 0 1 .231.215 9.856 9.856 0 0 0 1.213.557l.834-.043.288-.4-.547-.479.384-1.131-.508.081-1.223.729-.613.235-.087.115Z",
          fill: "#dfc57c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 17",
          d: "M7.95 10.417a.131.131 0 0 0 .115.062.516.516 0 0 1 .4.13c.111.14.417.586.417.586l.734.264.047-.864-.8-.557-.912.336v.043Z",
          fill: "#e5cc7c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 18",
          d: "M7.807 10.737a.8.8 0 0 0 .3-.052c.169-.062.446-.2.567-.144.169.072.134.3.316.5.11.124.312.12.427.254s.508.072.508.072l.149.806-.6.769-.2.955h-.811l-.741-.294-.365-.883.182-.893.259-1.089Z",
          fill: "#d2c281",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 19",
          d: "M9.374 10.776a.22.22 0 0 0 .062.01.161.161 0 0 0-.052.173c.019.111.081.25.029.336a.42.42 0 0 1 .091.159c.033.1.043.182.258.2a.453.453 0 0 0-.085.068 1.412 1.412 0 0 1 .225.25 1.853 1.853 0 0 0 .283-.067l.043.029.091-.038s-.085-.033-.023-.241c.058-.182.111-.173.115-.186a1.908 1.908 0 0 0 .043-.283 3.414 3.414 0 0 0 .052-.407l-.062-.677-.349-.211-.282-.281-.268.5-.176.176-.014.437.021.049Z",
          fill: "#e2c270",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 20",
          d: "M10.214 10.207a2.357 2.357 0 0 1 .085.312.3.3 0 0 0 .014-.081s.048.268.058.378c.019 0 .038-.01.043.01a1.621 1.621 0 0 1 .038.355.967.967 0 0 1 .326-.326.57.57 0 0 1 .264-.1c.15 0 .258.1.437.1a3.32 3.32 0 0 0 1.108-.413 1.465 1.465 0 0 0 .522-.241 1.362 1.362 0 0 0 .274-.341c.134-.23.274-.431.413-.456a.872.872 0 0 1-.192.014s.043-.043.115-.1a.448.448 0 0 1 .283-.13c.221 0 .332.033.456.033a.62.62 0 0 0 .2-.033.781.781 0 0 0 .423.091c.293 0 .489.029.642.043s.667-.043.815-.038a.716.716 0 0 1 .278.068L16.34 7.97l-1.708-1.493-1.017.72-1.564 1.564-1.514.561-.316.355v.541Z",
          fill: "#ccb360",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 21",
          d: "M13.611 9.417s.043-.043.114-.1a.445.445 0 0 1 .283-.13c.221 0 .332.033.456.033a.62.62 0 0 0 .2-.033.783.783 0 0 0 .423.091c.293 0 .489.029.642.043s.667-.043.815-.038a.71.71 0 0 1 .277.068l-.215-.623-.25-.475-.714-.782-.864-.508-.3-.081-.776.469-.7 1.822-.014.384.456.216c.115-.192.241-.345.359-.365-.107.012-.188.012-.188.012Z",
          fill: "#d5b457",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 22",
          d: "M13.601 9.547c-.068 0-.124-.01-.14-.058-.058-.163-.1-.186-.153-.186s-.115.1-.154.114-.085-.12-.085-.12l-.043-.019a2.6 2.6 0 0 0-.427.355 3.553 3.553 0 0 1-.6.576 6.416 6.416 0 0 1-.729.111.946.946 0 0 0-.345.169c-.023.025.068.052.082.078s-.15.013-.163.038a.629.629 0 0 0 .062.186.316.316 0 0 1 .134-.033c.149 0 .258.1.437.1a3.316 3.316 0 0 0 1.108-.413 1.465 1.465 0 0 0 .522-.241 1.373 1.373 0 0 0 .274-.341 2.424 2.424 0 0 1 .217-.31Z",
          fill: "#d2b257",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 23",
          d: "M7.422 19.15a1.622 1.622 0 0 0-.394-.514c-.1-.1-.163-.192-.231-.254a3.1 3.1 0 0 0-.388-.293c-.264-.2-.551-.2-.772-.437a4.02 4.02 0 0 1-.658-1.17c-.177-.47-.225-.619-.225-.633s.049-.1.111-.091.062.134.078.163a.975.975 0 0 0 .1.134 1.275 1.275 0 0 1 .287.417 1.892 1.892 0 0 0-.068-.336s.342.215.633.44.413.3.5.446a6.913 6.913 0 0 0 .384.633 10.892 10.892 0 0 0 1.42.528l.63.469.313.685-.245.384-.47.1-.763-.342-.244-.331Z",
          fill: "#d2b159",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 24",
          d: "M5.728 16.791a1.779 1.779 0 0 0 .547.495 5.255 5.255 0 0 0 1.4.518 3.914 3.914 0 0 0 .821.124 11.819 11.819 0 0 0 1.741-.25 8.349 8.349 0 0 0 1.108-.153 5.7 5.7 0 0 0 1.242-.46c.3-.14.58-.245.805-.379a3.426 3.426 0 0 1 .815-.456.691.691 0 0 1-.332.423c.14 0 .332-.013.332-.013a6.183 6.183 0 0 0-.514.359c-.2.153-.47.413-.743.586-.177.111-.369.192-.495.258a2.223 2.223 0 0 0-.633.46.287.287 0 0 1 .078 0 1.51 1.51 0 0 0-.437.13.589.589 0 0 0-.221.019c-.091.029-.212.1-.336.13a.423.423 0 0 1-.235.029l.029.058h-.307c.014 0 .01.01.01.01a.123.123 0 0 0-.038.014.4.4 0 0 1-.12.052c-.023 0-.043 0-.072.01.01.023.086.153.12.23-.029.019-.466.349-.466.349a.337.337 0 0 1 .033.068c.014.042.019.1.033.134.033.058.052.068.052.068s-.052.01-.144.033a2.5 2.5 0 0 1-.307.072 1.2 1.2 0 0 1-.124.01.339.339 0 0 1-.052.394c-.157.188-.206.216-.254.336a.514.514 0 0 0-.078-.049.326.326 0 0 1-.149-.1 1.251 1.251 0 0 1-.058.182 2.26 2.26 0 0 0-.134.355c-.052-.058-.149-.173-.283-.15s-.241.206-.264.258c0-.033-.023-.058-.029-.019a1.476 1.476 0 0 1-.489.85c0-.091 0-.293-.014-.359a.944.944 0 0 1-.365.215c-.274.12-.23.241-.23.241a.6.6 0 0 1 .124-.394c.149-.2.241-.3.241-.312a.087.087 0 0 0-.019-.043c-.019-.019-.058-.043-.058-.058a.39.39 0 0 0 .241-.349.62.62 0 0 0-.163-.388c-.01-.01.091-.082.078-.1s-.134-.1-.149-.154a.453.453 0 0 1 .019-.085.24.24 0 0 0 .019-.1.8.8 0 0 0-.078-.2 1.068 1.068 0 0 0 .111 0 .959.959 0 0 1-.091-.182 2.342 2.342 0 0 0-.058-.241c.033 0 .115.01.115 0 0-.029-.072-.078-.038-.115a.194.194 0 0 1 .11.078.444.444 0 0 0-.144-.231.353.353 0 0 1 .283.019.38.38 0 0 1 .154.163s.068.052.173.13a1.884 1.884 0 0 0 .518.326.536.536 0 0 0 .283.01.434.434 0 0 0 .12-.048.227.227 0 0 1 .043-.02.928.928 0 0 0-.072-.12h.072s.023-.052-.081-.153c.023-.023.052-.038.052-.078a.228.228 0 0 1-.1-.072c.019-.013.048-.058.081-.072-.029-.023-.1-.12-.134-.13a.6.6 0 0 0 .091-.043 1.115 1.115 0 0 1-.215-.078 1.293 1.293 0 0 0-.177-.124c-.049-.02-.134-.029-.169-.068a.528.528 0 0 0 .124 0h.052c.009 0 0-.043.072-.052a.356.356 0 0 0 .1-.033.268.268 0 0 1-.154-.081.6.6 0 0 0-.2-.15c-.048-.01-.14.033-.2.029a.177.177 0 0 1-.111-.049 1.623 1.623 0 0 1-.83-.326 2.929 2.929 0 0 1-.71-.571.855.855 0 0 1-.134-.062c-.186-.1-.444-.3-.437-.563Z",
          fill: "#c2a44d",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 25",
          d: "M12.867 5.143a.252.252 0 0 1 .115.078.358.358 0 0 1-.058.514.331.331 0 0 0 .186.029.907.907 0 0 0-.244.427.163.163 0 0 0 .072.169.645.645 0 0 0-.13.384A1.547 1.547 0 0 1 13 6.562a5.088 5.088 0 0 1 .475-.326.274.274 0 0 0 .014.1s.25-.206.461-.114c.095.043.052.177.052.177a.222.222 0 0 1 .221.043 4.142 4.142 0 0 1 .286.418 3.077 3.077 0 0 1 .182.25 3.171 3.171 0 0 1 .264.557c0-.1.029-.258.316-.159a1.762 1.762 0 0 1 .887.729c.274.417.341.887.479 1.066a1.519 1.519 0 0 1 .293.58 5.082 5.082 0 0 0 .245 1.558c.081-.326.206-1.05.206-1.05l.068-.638.078-1.975-2.063-1.714-1.613-1.17-1.05.1.066.149Z",
          fill: "#caa13e",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 26",
          d: "M16.7 8.084s-.029-.192-.514-.518-.863-.322-1.213-.6c-.268-.215-.547-.71-.729-.873a1.189 1.189 0 0 1-.206-.627l.6-.5.886-1.281.749-.825.359.5.5.586.277 1.176.1 1.721-.806 1.236Z",
          fill: "#b59544",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 27",
          d: "M17.299 10.147a2.182 2.182 0 0 0-.1-.772 14.264 14.264 0 0 0-.537-1.369c-.052-.293-.014-.316.043-.349a.859.859 0 0 0 .384-.576.547.547 0 0 1 .475-.437l.221-.163.336.84.293.759.091.58.068.495-.159 1.046-.786.71-.334-.764Z",
          fill: "#c89d3a",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 28",
          d: "M6.334 21.801v-.021a.158.158 0 0 0 .043-.038c.014-.019.023-.043.033-.049a.371.371 0 0 1 .159-.029 1.232 1.232 0 0 0 .245.058 1.6 1.6 0 0 1 .561-.062c.388.072.479.335.7.485a.446.446 0 0 0 .336.058h.052c.01 0 .081-.082.12-.078.078 0 .085.068.134.072a4.284 4.284 0 0 1 .446-.029.214.214 0 0 1 .087.355.857.857 0 0 0-.258.307 1.089 1.089 0 0 1 .085.072 11.287 11.287 0 0 1-2.748-1.1Z",
          fill: "#ceb052",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 29",
          d: "M16.667 17.928a6.672 6.672 0 0 0 .407-.6 20.861 20.861 0 0 0-.332-2.815l.877-2.874-.023-.935a8.6 8.6 0 0 1 .144-1.238c.12.215.495.475.576.613a7.143 7.143 0 0 0 .15-1.415 10.607 10.607 0 0 1 .244 1.223l.173.749.225.8.25.84.149.58.085.14.072.245.068.264.2.619.115.508.091.922a1.425 1.425 0 0 1 .043.215.908.908 0 0 1-.014.177 2.122 2.122 0 0 1 .019.375.526.526 0 0 1-.14.384 2.322 2.322 0 0 0-.2.768l-.215-.143a.584.584 0 0 0-.058-.375.378.378 0 0 0-.407-.186 1.231 1.231 0 0 0-.4.12 2.368 2.368 0 0 1-.388.342 2.333 2.333 0 0 1-.671.163 1.8 1.8 0 0 0-.551.287 3.08 3.08 0 0 1-.485.256Z",
          fill: "#cca847",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 30",
          d: "m16.667 22.168.037.022a11.4 11.4 0 0 0 3.633-2.693c-.011-.393-.026-.8-.041-.944-.033-.316-.01-.638-.019-.825s-.114-.945-.163-1.141a.5.5 0 0 0-.169-.293 2.336 2.336 0 0 0-.1.46c0 .092-.019.313-.019.369-.014 0-.019-.038-.019-.052-.019.049-.043.134-.052.144s.014-.082 0-.1-.038-.01-.033-.058a.543.543 0 0 1 .013-.085.893.893 0 0 0-.1.3c-.043.215-.043.221-.058.241s-.091.1-.1.13c0 .052.072.1.078.134 0 .048-.068.273-.091.384s-.013.326-.038.437-.038.159-.1.2c.048.01.095.023.095.023a.717.717 0 0 1-.1.532c-.062.085-.078.124-.143.2a.891.891 0 0 0-.241.413.7.7 0 0 1-.013-.1 4.533 4.533 0 0 0-.287.369c-.111.173-.264.163-.307.206a.2.2 0 0 0-.038.182c-.038.01-.11.023-.159.173a.364.364 0 0 1-.173.206.923.923 0 0 1-.258.082.313.313 0 0 1 .091.029 1.556 1.556 0 0 1-.312.221.652.652 0 0 0-.258.312.224.224 0 0 1-.186.144c.038.023.1.078.124.095a.432.432 0 0 0-.244.12c-.136.113-.182.146-.245.155Z",
          fill: "#c39d3c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 31",
          d: "M13.967 23.068a1.092 1.092 0 0 1 .24-.127 5.106 5.106 0 0 1 .749-.182 2.744 2.744 0 0 1 .365-.12c0 .034-.007.066-.011.1a11.289 11.289 0 0 1-1.343.333Z",
          fill: "#d2ba6b",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 32",
          d: "M19.549 15.107a2.392 2.392 0 0 1-.173.547c-.111.212-.23.5-.23.5a.923.923 0 0 1 .023-.2 5.506 5.506 0 0 0-.576.365 1.949 1.949 0 0 0-.283.293 5.845 5.845 0 0 0 .2-.619 12.476 12.476 0 0 0-1.131.994l-1.058.856a3.65 3.65 0 0 1-.376.176c-.182.078-.4.143-.557.206a.885.885 0 0 1 .206-.312 2.288 2.288 0 0 0 .45-.576.524.524 0 0 0 0-.388c-.052.014-.173.02-.254.043a.5.5 0 0 0-.169.11 3.959 3.959 0 0 1 .2-.691c-.1 0-.274.033-.274.033a2.462 2.462 0 0 1 .652-.685 2.118 2.118 0 0 0-.369.114c-.24.1-.5.25-.7.332a15.443 15.443 0 0 0 1.348-2.294 7.961 7.961 0 0 0 .734-1.847 8.412 8.412 0 0 0 .052-1.04 7.006 7.006 0 0 0 .029-.9 2.131 2.131 0 0 1 .586 1.512 5.788 5.788 0 0 1-.9 2.9c.115.033.413.072.72-.46a6.267 6.267 0 0 0 .413-.9.793.793 0 0 1 .01.149 4.063 4.063 0 0 0 .658-1.223 1.685 1.685 0 0 1-.029 1.089 1.078 1.078 0 0 1-.407.6.919.919 0 0 0 .283-.12c.029.072.023.153.072.182s.115.078.124.124a1.406 1.406 0 0 0 .159-.25 5.3 5.3 0 0 0 .038 1.166.4.4 0 0 0 .407-.293 1.2 1.2 0 0 0-.023.648.763.763 0 0 0 .151-.151Z",
          fill: "#c0993a",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 33",
          d: "M14.507 4.41a1.144 1.144 0 0 1-.4.062c-.221 0-.159-.085-.5-.085-.531 0-2.389.307-2.715.3a7.149 7.149 0 0 0 .714.091l2.366.033.475-.038.177-.359Z",
          fill: "#a88f33",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 34",
          d: "M8.373 9.034a2.7 2.7 0 0 0-.431.408 3.006 3.006 0 0 1-.342.437.3.3 0 0 0 .1-.014s0 .038-.023.048a.136.136 0 0 1 .111.038.2.2 0 0 0-.068.278.3.3 0 0 0 .212.114s-.033.1.1.085a7.828 7.828 0 0 1 .782-.111.428.428 0 0 1 .349.241c.115.186.215.215.215.215a1.1 1.1 0 0 0 .052-.431 1.284 1.284 0 0 0 .091-.437l-.1-.743-.44-.557-.57.316-.043.11Z",
          fill: "#e3c571",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 35",
          d: "M8.914 8.92s.043.1.221.11a.1.1 0 0 0-.014.081l.01.081a.178.178 0 0 0 .052-.038c.01.043-.01.111 0 .159a.351.351 0 0 0 .029.085.164.164 0 0 1 .01-.019.759.759 0 0 0 .134.192.08.08 0 0 1 .01-.038.135.135 0 0 0 .023.068.07.07 0 0 1-.019-.014 2.212 2.212 0 0 0 .062.466.215.215 0 0 0 .023-.033c0-.01 0 .085-.014.154a.674.674 0 0 0 0 .163.507.507 0 0 1 .114-.068.414.414 0 0 0 .212-.254 1.681 1.681 0 0 0 .078-.277.388.388 0 0 1 .038.115c0 .049.1.023.1.023l.02-.212.115-.479.1-.3.5-.786.912-.7.8.182.671-.912-1.157-.695-1.094.115-.993 1.376-.8 1.248-.144.206Z",
          fill: "#d8b65b",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 36",
          d: "M14.646 6.933a1.264 1.264 0 0 0-.264.115c-.2.1-.332.134-.408.283a.732.732 0 0 0-.081.268 1.85 1.85 0 0 1 .212-.078c.081-.019.173-.014.163.019a.224.224 0 0 1-.038.062s.154 0 .149.072a.4.4 0 0 1-.058.2c-.029.038-.149.1-.163.14-.033.091.014.1 0 .169a1.166 1.166 0 0 1-.287.456 2.45 2.45 0 0 0-.307.417 2.654 2.654 0 0 1-.159-.365c-.038.019-.244.134-.244.134l-.477-1.663.01-.111a.3.3 0 0 0 .052-.149c-.072-.023-.081-.043-.177-.134a1.189 1.189 0 0 0-.332-.278.211.211 0 0 0-.169-.124c-.117-.023-.186-.043-.186-.043a.2.2 0 0 0 .091-.072 1.2 1.2 0 0 1-.287.029 1.2 1.2 0 0 0-.264 0c-.087.014-.192.052-.231-.081-.043-.033-.134 0-.212.111s-.1.206-.254.25a.52.52 0 0 1-.068.186 2.115 2.115 0 0 1-.2.25c-.144.169-.12.446-.349.658s.038-.586.038-.586l.369-.883 1.05-1.027 1.63-.111.159.844.8.274.5.766Z",
          fill: "#d3ae4d",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 37",
          d: "m14.904 7.12-.685-.988-.479-.369s-.342-.629-.365-.648a4.507 4.507 0 0 0-.547-.062l.038.1a.252.252 0 0 1 .115.078.358.358 0 0 1-.058.514.332.332 0 0 0 .186.029.906.906 0 0 0-.244.427.162.162 0 0 0 .072.169.646.646 0 0 0-.13.384 1.55 1.55 0 0 1 .192-.182 4.97 4.97 0 0 1 .475-.326.275.275 0 0 0 .014.1s.25-.206.46-.115c.095.043.052.177.052.177a.222.222 0 0 1 .221.043 4.114 4.114 0 0 1 .287.417c.029.043.1.124.182.25a3.172 3.172 0 0 1 .264.557c0-.078.019-.186.153-.186l-.2-.365Z",
          fill: "#caa13e",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 38",
          d: "M4.635 9.925a.668.668 0 0 1 0-.355 3.577 3.577 0 0 0 .149-.691 2.462 2.462 0 0 1 .25-.776l.623-.283.441.12.13.59-.557.307a.428.428 0 0 1-.186.235c-.157.1-.375.186-.427.293a.855.855 0 0 0-.068.206.292.292 0 0 0-.254.072.372.372 0 0 0-.1.283Z",
          fill: "#f4efc8",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 39",
          d: "M5.893 9.769a.284.284 0 0 0-.091.115 2.336 2.336 0 0 1-.134-.763c0-.332-.024-.414.053-.529s.378-.235.335-.441a.322.322 0 0 0-.441-.221c-.154.038-.268.365-.427.528-.12.124-.264.1-.3.173-.052.091 0 .182-.019.241a1.157 1.157 0 0 1-.14.25 2.506 2.506 0 0 0-.514.935 1.6 1.6 0 0 1 .052-.388l-.029-.048.192-.629.124-.518.278-.868.489-.887.476-.532.495.033.058.743.283 1.4.6.733-.955.643-.378.033Z",
          fill: "#ebcc73",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 40",
          d: "M6.19 10.032a.241.241 0 0 1-.111 0c-.029-.016-.058-.033-.048-.052s.062-.052.062-.068a.054.054 0 0 0-.049-.058.053.053 0 0 0-.058.023.218.218 0 0 0-.078-.038.528.528 0 0 1 .062 0 .607.607 0 0 0-.169-.049c.049-.029.144-.114.206-.114s.1-.01.091-.043a.2.2 0 0 0-.111-.1c.019-.023.033-.058-.014-.153a.184.184 0 0 1-.014-.182 1.218 1.218 0 0 1 .085-.114.311.311 0 0 1 .081-.1 1.022 1.022 0 0 1 .144-.062c.068-.023.124-.052.163-.023a.053.053 0 0 1 .023.068.35.35 0 0 1 .254.014 1.92 1.92 0 0 0 .413.095l.105.212-.695.6-.287.144-.058.01Z",
          fill: "#e5c66b",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 41",
          d: "M7.155 9.058a2.682 2.682 0 0 0-.264.2c.029 0 .078.023.058.052a3.121 3.121 0 0 0-.241.225 1.488 1.488 0 0 0-.186.274.984.984 0 0 1-.326.225c.159 0 .479-.2.6-.2a.118.118 0 0 0 .1.13.754.754 0 0 0 .528-.12c.264-.159.177-.278.287-.355.212-.14.3-.264.413-.342a.757.757 0 0 1 .177-.1s0-.058.038-.052a.052.052 0 0 1 .043.033 1.191 1.191 0 0 1 .461-.182.027.027 0 0 1-.014-.013s.019-.01.023-.019.014-.019.023-.01.023.081.043.111c.043-.019.124-.2.124-.2l.2-.561v-.512l-.154.029-1.151.489-.7.724-.082.173Z",
          fill: "#e6bd62",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 42",
          d: "M10.469 6.545a.651.651 0 0 0 .177-.072.8.8 0 0 1-.124.278 2.332 2.332 0 0 0-.186.322c-.082.159-.091.388-.169.489a.357.357 0 0 1 .111-.033.512.512 0 0 0-.111.14.663.663 0 0 1-.235.313 1.867 1.867 0 0 0-.522.365c-.2.211-.4.479-.5.576a1.442 1.442 0 0 0 .144-.394c.019-.12 0-.264.029-.423a1.385 1.385 0 0 1 .192-.551 9.435 9.435 0 0 0 .431-1.242l.586-.186.177.419Z",
          fill: "#b6933f",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 43",
          d: "M10.046 6.189a1.634 1.634 0 0 0-.225.479c-.048.225 0 .206-.033.316a.413.413 0 0 0 0 .206.73.73 0 0 1 .244-.241 2 2 0 0 0 .384-.258 1.417 1.417 0 0 1 .326-.355c-.072-.01-.173-.043-.192-.038a4.337 4.337 0 0 1 .5-.355 1.945 1.945 0 0 1 .551-.369 2.4 2.4 0 0 1-.264 0c.038-.081.173-.12.307-.254s-.085-.332-.085-.332l-1.023.619-.495.582Z",
          fill: "#c49937",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 44",
          d: "m7.269 5.728.023-.186.293-.47.307-.825V3.12l-.023-.652.048-.427.037-.136.039-.052.25.13.346.47.033.906-.336 1.43-.959 1.046Z",
          fill: "#dfc068",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 45",
          d: "M8.031 1.8s-.154 0-.186.642-.049.974-.072 1.29a6.934 6.934 0 0 1-.1.695 1.911 1.911 0 0 1-.13.6 1.369 1.369 0 0 1-.312.466 1.926 1.926 0 0 1-.586.326 3.024 3.024 0 0 0-.695.159 1.056 1.056 0 0 0-.287.182 3.665 3.665 0 0 0-.772 1.046 14.578 14.578 0 0 0-.691 2.6l.078-.13a1.233 1.233 0 0 1 .182-.475c.169-.3.12-.642.355-1.223a6.664 6.664 0 0 1 .345-.753 2.8 2.8 0 0 1 .759-.926 2.4 2.4 0 0 1 .926-.369l.522-.345s.091-.177.212-.378a2.45 2.45 0 0 0 .431-1.059 9.822 9.822 0 0 0-.091-1.531c.01-.4.014-.7.1-.772s.023-.045.023-.045Z",
          fill: "#a88f33",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 46",
          d: "M8.031 4.847a7.417 7.417 0 0 0 .336-1.069c.02-.1.058-.2.068-.283a2.561 2.561 0 0 0 0-.932 1.661 1.661 0 0 0-.332-.5c-.095-.14-.14-.192-.12-.221a.215.215 0 0 1 .169-.072.578.578 0 0 1 .413.192 2.5 2.5 0 0 1 .268.759l.125.773.316.974-1.242.379Z",
          fill: "#c99e3d",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 47",
          d: "M10.195 4.258a.2.2 0 0 1-.12 0 .173.173 0 0 1-.078.163 6.552 6.552 0 0 0-.844.033.648.648 0 0 1-.466-.532c-.078-.312.058-.743.014-1.027a6.291 6.291 0 0 0-.173-.629c-.01-.13-.019-.163-.019-.244a.45.45 0 0 0-.111-.023c-.01-.038.01-.072-.033-.14a.772.772 0 0 1 .369.206.692.692 0 0 1 .177.225 1.8 1.8 0 0 1 .365.431c.1.2.3.84.342.945a.7.7 0 0 0 .115.182c.113.14.277.371.464.409Z",
          fill: "#b58634",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 48",
          d: "M8.938 2.299a5.391 5.391 0 0 1 .316.59 2.677 2.677 0 0 0 .326.642c-.078-.225-.215-.667-.3-.825a1.892 1.892 0 0 0-.345-.407Z",
          fill: "#a88f33",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 49",
          d: "M7.618 5.489a2.834 2.834 0 0 0-.561.241c-.12.062-.235.114-.345.163a6.017 6.017 0 0 1-.84.316.524.524 0 0 0 .029.033.244.244 0 0 0 .052.149c-.029.029-.417.293-.3 1.176.078-.029.169-.068.182-.068s.029.068.058.068a.389.389 0 0 0 .225-.169 1.31 1.31 0 0 0 .25.935c.058-.068.206-.293.206-.293v-.072a1.944 1.944 0 0 1 .1-.479 1.275 1.275 0 0 1 .241-.4l.83-1.186-.124-.417Z",
          fill: "#e6c367",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 50",
          d: "M6.842 7.23a.459.459 0 0 1-.124.062.48.48 0 0 1 .082-.378 5.061 5.061 0 0 0 .508-.652 1.415 1.415 0 0 1 .495-.873c.466-.417.648-.561.648-.561l.753-.378.926.365-.46 1.8-.357.844-1.42-.268-1.05.037Z",
          fill: "#dcba5a",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 51",
          d: "m7.384 6.736.177-.221v-.157a1 1 0 0 0 .407-.268c.211-.215.5-.629.763-.6s.283.561.293.71a4.094 4.094 0 0 0 .1.671c.058.182-.629.873-.629.873l-.467.355-.644-1.363Z",
          fill: "#e9ce77",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 52",
          d: "M7.931 8.582s.144-.225.038-.274a1.657 1.657 0 0 1 .176-.287 1.451 1.451 0 0 1 .345-.45 1.5 1.5 0 0 0 .47-.58 1.531 1.531 0 0 0 .043-.332.63.63 0 0 0 .091.062.542.542 0 0 1 .215.522.857.857 0 0 1-.154.475 2.286 2.286 0 0 1-.206.182c-.091.062-.124.134-.278.14a.185.185 0 0 1 .052-.029.357.357 0 0 0-.245.058c-.085.078-.267.316-.358.388l-.192.124Z",
          fill: "#cdae50",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 53",
          d: "M14.378 4.809a2.336 2.336 0 0 0-.714-.14c-.408-.014-1 .01-1.587.014-.629 0-1.2-.215-1.991-.254-.13-.078-.46-.417-1.492.3.062 0 .749-.159.988.14a1.2 1.2 0 0 1 .14.922c-.062.268-.264.658-.345.931s-.062.417-.12.609-.186.287-.111.508c.1-.062.153-.062.322-.44s.134-.648.413-.968a6.3 6.3 0 0 1 .9-.873 3.363 3.363 0 0 1 2.988-.144c.347-.037.607-.608.607-.608Z",
          fill: "#d2a83e",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 54",
          d: "M9.178 4.544a.183.183 0 0 0-.01-.043.313.313 0 0 0-.052-.078 2.49 2.49 0 0 0-.514-.043c-.3.033-.576.408-.7.6a3.544 3.544 0 0 1-.46.642.064.064 0 0 0-.01-.043s.01.014-.01.033-.019.029-.01.038l.029.029a2.378 2.378 0 0 0 .642-.461 3.237 3.237 0 0 1 .84-.6 1.186 1.186 0 0 1 .258-.076Z",
          fill: "#c29637",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 55",
          d: "M15.804 3.085s-.062.078-.14.163c-.173.182-.4.388-.59.6s-.388.359-.619.623-.5.557-.567.642a.632.632 0 0 0-.111.3l-.072-.048a.478.478 0 0 0 .058.085c.049.068.124.154.163.206a.623.623 0 0 1 .1.221c.023 0 .173.033.359-.274s.431-.642.431-.642l.388-.576.245-.489.307-.547.047-.26Z",
          fill: "#ac8132",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 56",
          d: "M16.201 2.693a2.945 2.945 0 0 0-.326.307c-.091.115-.307.417-.307.417l.078-.01.394-.349.153-.274.008-.091Z",
          fill: "#a88f33",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 57",
          d: "M16.129 18.114a.4.4 0 0 1 .086-.254 1.846 1.846 0 0 0 .547-.759 4.97 4.97 0 0 0 .25-.642 2.816 2.816 0 0 1-.652.427c.058-.12.091-.206.12-.268-.033-.029-.173-.062-.186-.078.078-.078.12-.268.277-.394.2-.154.571-.417.857-.652a5.713 5.713 0 0 0 .922-.941.352.352 0 0 1 .052.1s-.283.369-.431.6a.574.574 0 0 0-.12.316l.268-.115s.077.287-.274.724c.153-.058.215-.023.3-.072a1.361 1.361 0 0 0-.528.557 2.4 2.4 0 0 1-.85.988 7.069 7.069 0 0 0-.642.458Z",
          fill: "#a67a2e",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 58",
          d: "M15.077 5.007a2.144 2.144 0 0 0-.183.59c0 .062-.019.111-.019.182a2.242 2.242 0 0 1-.038.609.321.321 0 0 0-.049-.1c-.029.081-.081.336-.124.431a2.028 2.028 0 0 1-.058-.532c0-.254.01-.3.01-.355a1.539 1.539 0 0 1-.082.244c-.029-.052-.062-.12-.1-.177a1.088 1.088 0 0 1-.077.124c0-.023-.014-.085-.02-.173a2.452 2.452 0 0 1 0-.258 1.169 1.169 0 0 1 .264-.446 3.724 3.724 0 0 0 .479-.792c.062-.134.326-.691.326-.691h.2l-.293.667s-.177.365-.268.5-.283.518-.369.668c.062-.081.114-.124.177-.2a3.2 3.2 0 0 0 .227-.289Z",
          fill: "#8c6228",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 59",
          d: "M16.204 2.668a.841.841 0 0 1-.154.278c-.12.144-.379.336-.5.489a1.322 1.322 0 0 0-.241 1.04 1.744 1.744 0 0 1 .3-.547 4.2 4.2 0 0 0 .5-.714 1.2 1.2 0 0 0 .115-.378l.038-.048-.023-.111-.033-.008Z",
          fill: "#cba94c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 60",
          d: "M20.135 15.539a2.112 2.112 0 0 1-.1-.4c-.023-.192.038-.23-.033-.45-.043-.134-.12-.115-.14-.134a1.131 1.131 0 0 1-.029-.332 1.253 1.253 0 0 0-.023-.316c-.029-.023-.049-.043-.091-.186a2.119 2.119 0 0 0-.095-.258c-.023-.043-.092-.081-.092-.124 0-.085.078-.13.078-.154 0-.048-.062-.01-.078-.023s.049-.163.023-.182c-.01-.01-.078.072-.095.049s-.043-.254-.078-.408-.068-.258-.072-.3-.268-.8-.332-.978a4.6 4.6 0 0 1-.13-.47 2.448 2.448 0 0 0-.043-.258c-.01.019 0 .115-.02.111s-.062-.336-.078-.388a2.709 2.709 0 0 1-.115-.359c-.019-.13-.062-.47-.091-.7s-.042-.326-.042-.384a2.393 2.393 0 0 0-.023-.423 3.95 3.95 0 0 0-.182-.714c-.13-.326-.475-1.16-.537-1.368 0-.052.068-.023.068-.023s.169.423.293.749a5 5 0 0 0 .264.642 2.408 2.408 0 0 1 .287.873c.081.524.111 1.007.159 1.329a3.427 3.427 0 0 0 .091.479c.052.177.134.359.24.638a4.214 4.214 0 0 1 .2.6c.043.215.043.378.068.485.023.091.058.274.14.537s.2.6.283.815a4.519 4.519 0 0 1 .254.965 9.293 9.293 0 0 1 .073 1.067Z",
          fill: "#a88f33",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 61",
          d: "m16.214 2.644-.01.023a.041.041 0 0 1 .023.049 1.175 1.175 0 0 1-.01.159c-.01.068-.029.12-.033.163a.817.817 0 0 1-.115.456c-.038.072-.062.134-.081.177a.525.525 0 0 1-.1.169c.068-.038.313-.192.437-.169a.911.911 0 0 0-.3.268.669.669 0 0 0 .23 0 3.2 3.2 0 0 1 .667-.1c.231.014.14-.277.14-.277l-.267-.586-.5-.355-.08.019Z",
          fill: "#be9c44",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 62",
          d: "M17.526 7.034a1.8 1.8 0 0 1-.316-1 18 18 0 0 1-.072-1.919l-.182-.446a1.042 1.042 0 0 0-.134-.407c-.1-.111-.283-.3-.369-.388s-.182-.215-.24-.235a.665.665 0 0 1 .658-.326.7.7 0 0 1 .7.375 3.664 3.664 0 0 1 .374 1.369 4.691 4.691 0 0 1-.082 2.1 2.14 2.14 0 0 1-.342.875Z",
          fill: "#a17c34",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 63",
          d: "M16.824 7.696a.381.381 0 0 0 .215-.049.606.606 0 0 0 .532-.225.453.453 0 0 1-.043.355.806.806 0 0 1 .13-.081 1.223 1.223 0 0 1-.215.83.34.34 0 0 1 .25-.091.988.988 0 0 1-.085.623.253.253 0 0 1-.25.085.478.478 0 0 0 0-.081c0-.052-.023-.1-.01-.14a.692.692 0 0 1-.2-.14 1.257 1.257 0 0 1-.4-.633.249.249 0 0 1 .182-.274.216.216 0 0 1-.043-.053.294.294 0 0 0-.058-.128Z",
          fill: "#8c6228",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 64",
          d: "M15.327 5.255s-.01-.014-.062.048c.01-.062.019-.12.023-.177a.611.611 0 0 1 .1-.144c-.029.058-.049.111-.049.111a.782.782 0 0 1 .177-.215c.072-.058.163-.085.2-.14a.359.359 0 0 0 .043-.078A1.209 1.209 0 0 0 16 4.415c.019-.023.048-.048.068-.072s.111-.048.2-.1.2-.124.268-.154c.13-.058.268-.052.332-.144.048-.014.1-.159.091-.283a1.176 1.176 0 0 1 .567.759 2.752 2.752 0 0 1-.14 1.166 1.782 1.782 0 0 1-.173.58c-.12.159-.508.384-.6.495-.081.091-.326.322-.316.489.01.124.163.192.2.215s.033.052.095.038.085-.043.11-.043.029.01.043.01a.14.14 0 0 0 .029 0s-.01.177-.423.23c-.029 0-.058.014-.1.019a.237.237 0 0 0 .13-.1c-.058-.01-.225-.019-.268-.033a.511.511 0 0 1 .095-.114c.033-.029 0-.038-.033-.023a1.548 1.548 0 0 0-.144.111 1.407 1.407 0 0 1-.169.154.378.378 0 0 1 .072-.332c-.023 0-.068.072-.111.058a.614.614 0 0 1 .013-.212.965.965 0 0 1 .15-.241l.609-1.089.13-.825-1.4.271Z",
          fill: "#92723a",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 65",
          d: "M15.295 5.301s-.033.023.033.068a.746.746 0 0 1-.062.1c-.033.038-.068.062-.082.1a.528.528 0 0 0-.052.144.71.71 0 0 1-.091.336 1.434 1.434 0 0 0-.086.163 1.2 1.2 0 0 0-.1.192 2.04 2.04 0 0 0-.033.254l.058-.072a.543.543 0 0 1-.085.14c.023-.019.091-.068.206-.169a5.1 5.1 0 0 1 .71-.537 1.042 1.042 0 0 1-.231.043c.048-.049.485-.561.714-.609a.091.091 0 0 0 .019-.062l-.2-.019-.4.085-.058-.307-.266.161Z",
          fill: "#b18e3e",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 66",
          d: "M15.928 7.048a.538.538 0 0 0-.1.182.615.615 0 0 1-.1-.13.334.334 0 0 0-.44-.186.814.814 0 0 1 0-.182 1 1 0 0 0 .3-.268 1.24 1.24 0 0 0 .235-.378c.038-.029.1-.078.192-.134.124-.085.274-.2.3-.332a.793.793 0 0 1-.369.072c.072-.033.182-.068.169-.212l.052-.033a.193.193 0 0 0-.068-.01c0-.014-.01-.033-.043-.023s-.038.01-.043.023a.206.206 0 0 0-.091.023 1.407 1.407 0 0 1-.159.114l.033-.058a.674.674 0 0 0-.163.038 3.4 3.4 0 0 0-.413.2c.014-.023.02-.038.029-.043s.033-.01.033-.014a.138.138 0 0 1 0-.052 1.788 1.788 0 0 1 .153-.264.514.514 0 0 0 .082-.221l.3-.149.834-.192.541.033-.068.375-.32.654-.274.6-.312.365-.287.21Z",
          fill: "#543e26",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 67",
          d: "M17.282 5.426a4.85 4.85 0 0 1-.417.466c.058-.124.417-.864.547-1.069-.029-.023-.068-.023.023-.384-.077.182-.1.277-.169.326a.12.12 0 0 1-.115.033.08.08 0 0 0 .01-.048s-.274-.033-.461-.033a2.75 2.75 0 0 0-.763.182 3.118 3.118 0 0 0-.312.111c-.058.048-.091.1-.12.114s-.134.048-.159.085-.062.081-.062.091-.01.023.02.014c.01 0 .081-.043.163-.091a4.52 4.52 0 0 1 .341-.177 1.582 1.582 0 0 1 .489-.115 3.05 3.05 0 0 1 .44-.078 3.681 3.681 0 0 1 .413.01c-.023.019-.043.043-.033.124a.61.61 0 0 1-.038.1 9.825 9.825 0 0 1-.23.557c-.085.182-.182.336-.23.431a3.128 3.128 0 0 1-.258.479c-.1.134-.159.215-.192.245s-.268.2-.25.264a1.3 1.3 0 0 0 .508-.336 4.078 4.078 0 0 1 .388-.475 1.3 1.3 0 0 0 .345-.489 2.141 2.141 0 0 1 .122-.342Z",
          fill: "#806031",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 68",
          d: "M10.253 8.439a.609.609 0 0 1-.14.264c-.095.086-.264.159-.283.3s.169.215.169.215a.747.747 0 0 0-.1.3 2.014 2.014 0 0 0 .01.287.129.129 0 0 0-.038.038.316.316 0 0 0 .1.2c.1.078.177.124.225.1a.435.435 0 0 1 .02.049s.072-.182.12-.342.091-.14.11-.359a2.1 2.1 0 0 1 .23-.6l.144-.322-.235-.182-.332.035Z",
          fill: "#b6903c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 69",
          d: "M10.69 8.755a1.409 1.409 0 0 0-.134.159.466.466 0 0 1-.2.2c-.091.033-.149.033-.144.124s.091.13.14.177a.227.227 0 0 1 .072.221.222.222 0 0 0 .13-.134c.049-.1.388-.743.388-.743h-.25Z",
          fill: "#685026",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 70",
          d: "M12.027 7.282a.191.191 0 0 0 0-.134c-.029-.058-.206-.078-.293-.144a.347.347 0 0 0-.293-.085c.014-.033.068-.1.023-.12a.526.526 0 0 0-.244.091c-.043.033-.14.072-.159.1s-.052.068-.072.048-.029-.048-.062-.029a.792.792 0 0 0-.221.225 1.15 1.15 0 0 1-.293.437c-.2.192-.283.316-.225.388s.086.019.1.081a.526.526 0 0 1-.01.182c-.023.1-.062.2-.01.215.134.043.264-.038.293-.014.058.052-.033.241.1.277a.428.428 0 0 0 .278-.033l.508-.274.489-.258.25-.495-.134-.413-.026-.043Z",
          fill: "#d4b968",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 71",
          d: "M11.548 8.464a.2.2 0 0 1 .02-.245c.1-.115.254-.163.312-.235a.089.089 0 0 0-.043-.029.386.386 0 0 1 .169-.159.162.162 0 0 0-.111-.052c-.1 0-.153.058-.241.058s-.1-.043-.1-.043.144-.013.13-.078-.038-.068-.038-.068a1.456 1.456 0 0 0 .326-.177.355.355 0 0 0 .052-.163c.033 0 .225-.1.3-.058s.023.159.023.159a1.913 1.913 0 0 0 .355-.35c.1.01.153-.072.23-.072.1 0 .245.13.274.407a1.743 1.743 0 0 1 .02.532 2.454 2.454 0 0 0 .038.667c.033.134.11.12.11.12a.218.218 0 0 1-.068.1.324.324 0 0 0-.052.225.923.923 0 0 0 .029.1.484.484 0 0 0-.078.12.136.136 0 0 1-.124.081.592.592 0 0 0-.085 0c-.062 0-.082.013-.12 0s-.068-.029-.052-.154-.479-.413-.479-.413l-.806-.287Z",
          fill: "#cca849",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 72",
          d: "M10.622 9.691s.177.235.9.235a1.827 1.827 0 0 0 .537-.052 1.466 1.466 0 0 0 .662-.479c.264-.312.206-.44.206-.44l-.153-.023-.5.068-1.476.629-.179.064Z",
          fill: "#585136",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 73",
          d: "M11.164 9.749s-.629.14-.629-.258a1.383 1.383 0 0 1 .485-.867 1.812 1.812 0 0 1 .342-.154h.58l.11.293-.048.633-.84.353Z",
          fill: "#252211",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 74",
          d: "M11.743 8.589s-.12-.111-.394.038a.985.985 0 0 0-.509.743c-.014.25.206.437.547.446a1.743 1.743 0 0 0 .485-.038l-.12-.149-.01-1.04Z",
          fill: "#c3b378",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 75",
          d: "M11.627 8.65s-.029-.023-.115.023a1.887 1.887 0 0 0-.258.212 1.055 1.055 0 0 0-.115.1c-.12.144-.221.378-.163.495s.25.25.739.159l-.09-.984Z",
          fill: "#e6d89c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 76",
          d: "M11.466 8.891a.618.618 0 0 0-.078.312.515.515 0 0 0 .518.532c.312.019.522-.45.749-.633a.544.544 0 0 1 .277-.144 2.579 2.579 0 0 0-.648-.44.955.955 0 0 0-1.271.1c.134-.01.567-.12.567-.12l.211.068-.326.324Z",
          fill: "#252211",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 77",
          d: "M12.076 9.145c-.013-.029-.023-.068.033-.078s.081 0 .1.038.038.078.01.1a.135.135 0 0 1-.144-.056Zm-.091-.274s-.019.014-.01-.014.029-.091.091-.078.049.082.038.1a.1.1 0 0 1-.1.038.032.032 0 0 1-.019-.048Z",
          fill: "#6f674d",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 78",
          d: "M6.732 8.996a.6.6 0 0 0 .332.111.9.9 0 0 0 .508-.3c.062-.068.115-.14.173-.2a1.035 1.035 0 0 0 .1-.1c.033-.038.068-.111.085-.134a1.783 1.783 0 0 1-.169.13 2.009 2.009 0 0 1-.25.13c-.052.019-.6.307-.6.307L6.723 9Z",
          fill: "#ac924c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 79",
          d: "M6.966 7.562a.782.782 0 0 1 .25-.1 4.679 4.679 0 0 1 .479-.068l.264.115.1.4-.192.413-.244.154-.278-.446-.384-.47Z",
          fill: "#9f8e57",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 80",
          d: "m6.62 7.917-.091.068a.59.59 0 0 0 .043-.173 1.6 1.6 0 0 1 .268-.629 2.03 2.03 0 0 1 .144-.173.1.1 0 0 0-.078.019.928.928 0 0 1 .268-.273c.124-.077.173-.1.3-.038s.163.1.258.091a.291.291 0 0 0 .177-.1s.019.062-.052.206a2.9 2.9 0 0 1-.355.437l-.59.4-.293.166Z",
          fill: "#eac970",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 81",
          d: "M7.058 7.513s.427.058.557-.062c0 .014.02.014.02.023a.034.034 0 0 1-.01.019h.043a.254.254 0 0 0 .052.01.3.3 0 0 0 .043 0 .073.073 0 0 1-.029.049c.019 0 .038 0 .038.019s0 .062-.019.072a.088.088 0 0 1-.058 0 .239.239 0 0 0 .029.1.219.219 0 0 0 .23.13s.058.14-.186.45c-.033.043-.068.1-.11.149a.56.56 0 0 0-.038.114.97.97 0 0 0 .532-.522 2.74 2.74 0 0 0 .12-1.059.547.547 0 0 0-.043-.212.183.183 0 0 0-.287-.033 3.51 3.51 0 0 1-.476.495 1.62 1.62 0 0 1-.408.264Z",
          fill: "#d7bc6b",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 82",
          d: "M6.54 8.037a.359.359 0 0 0-.124.23.753.753 0 0 0 .085.485.489.489 0 0 0 .375.277.408.408 0 0 0 .159-.033 1.006 1.006 0 0 0 .215-.134c.1-.072.173-.134.163-.14s-.586-.475-.586-.475l-.212-.236-.076.026Z",
          fill: "#585136",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 83",
          d: "M7.076 8.81a.49.49 0 0 0 .182-.052c.068-.043-.4-.5-.4-.5l.033.5Z",
          fill: "#453a25",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 84",
          d: "M6.582 8.002a.671.671 0 0 0-.058.14 2.451 2.451 0 0 0 .043.489.354.354 0 0 0 .313.254.443.443 0 0 0 .241-.078c0-.019-.144-.038-.182-.111a.653.653 0 0 1-.038-.23c0-.062 0-.13.019-.154a.5.5 0 0 0 .062-.225l.186-.346h-.246l-.293.182Z",
          fill: "#84754b",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 85",
          d: "M6.51 8.109a1.062 1.062 0 0 1 .365-.312.374.374 0 0 1 .25-.023l-.1.258-.144.159.01.081a.5.5 0 0 0 .12.365.376.376 0 0 0 .312.144.407.407 0 0 0 .332-.268.753.753 0 0 0-.014-.72.586.586 0 0 0-.495-.268.692.692 0 0 0-.636.584Z",
          fill: "#252211",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 86",
          d: "M11.437 8.972c-.072-.033 0-.235.068-.3a.506.506 0 0 1 .322-.144c.058 0 .114.033.1.072a.576.576 0 0 1-.206.245c-.121.102-.202.164-.284.127Z",
          fill: "#f7f7e7",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 87",
          d: "M7.556 7.872a.139.139 0 0 1 .134.1c.014.062-.033.186-.134.186-.081 0-.124-.1-.124-.13a.148.148 0 0 1 .019-.068.111.111 0 0 1 .105-.088Z",
          fill: "#f8f6de",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 88",
          d: "M6.799 7.917a.451.451 0 0 0-.2.192.509.509 0 0 0-.038.307.753.753 0 0 0 .091.211.146.146 0 0 0 .111.068.2.2 0 0 0 .1-.144 1.023 1.023 0 0 1 .068-.394c.056-.12-.136-.241-.136-.241Z",
          fill: "#d4c38b",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 89",
          d: "M6.819 7.907c-.023.014-.062.033-.052.058s.091.038.12.1a.2.2 0 0 1 .023.149.235.235 0 0 0 .068-.049c.043-.048.095-.114.14-.114.029 0 .058.014.085.014.043 0 .085-.014.091-.058s-.081-.111-.134-.1a.127.127 0 0 0-.019-.134c-.043-.039-.177.029-.206.049s-.116.091-.116.091Z",
          fill: "#e2d59d",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 90",
          d: "m9.902 11.984.287-.085.081.058s.058.124.149.14c-.029.062-.1.115-.1.159a.135.135 0 0 0 .043.078.668.668 0 0 0 .25.857 7.92 7.92 0 0 0-.355.153.63.63 0 0 1 .235.086c.052.047.052.062.1.091s.078.068.068.085c-.033-.019-.144-.078-.163-.023s-.479.033-.479.033l-.776.149a.14.14 0 0 0-.052-.149c-.095-.085-.211 0-.336-.091-.163-.124-.169-.268-.221-.322a1.027 1.027 0 0 1 .413-.115.171.171 0 0 1-.023-.13c.023-.068.12-.111.091-.192.043-.01.062-.01.169-.144s.163-.163.241-.173a.354.354 0 0 0 .268-.134c.1-.1.068-.177.068-.177s.066-.021.043-.155Z",
          fill: "#cbac5a",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 91",
          d: "M9.055 12.028c0-.019.019-.029.124-.019s.768-.062.949-.072a5.95 5.95 0 0 1 1.137.062c.313.066.629.144.782.182s.2.058.2.078a.056.056 0 0 1-.058.033c-.019 0-.528-.159-.685-.192a6.2 6.2 0 0 0-1-.115 5.218 5.218 0 0 0-.623.023 5.014 5.014 0 0 1-.739.053c-.115-.014-.091-.014-.086-.033Z",
          fill: "#d6bc6f",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 92",
          d: "M10.616 13.548a1.579 1.579 0 0 1 .542.479.208.208 0 0 1-.062.293s.225 0 .2.124a1.874 1.874 0 0 1-.638.4 1.034 1.034 0 0 1-.369.124c-.12.019-.45-.038-.518.058a.189.189 0 0 0-.019.212 1.111 1.111 0 0 0 .177.033s-.033.091-.359.1-.408.033-.427.068.062.014.212.038.359.038.359.038a.66.66 0 0 1-.244.1 4.08 4.08 0 0 0-.613.159.568.568 0 0 0 .154.085.957.957 0 0 0-.215.078l.068.043a1.338 1.338 0 0 1-.258.245 2.109 2.109 0 0 1-.831.254c-.47-.124-.528-.639-.642-.677-.173-.058-.254.058-.408-.023a.969.969 0 0 1 .177-.11 12.518 12.518 0 0 1-.479-.293 2.983 2.983 0 0 0-.14-.268c-.078-.134-.192-.312-.278-.47a3.831 3.831 0 0 0-.365-.7c.029-.038.13-.033.13-.033l1.415.466 2.509.073.652-.931.277.033Z",
          fill: "#dfc677",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 93",
          d: "M6.9 14.968a.218.218 0 0 0 .052.043.758.758 0 0 1 .169.13c.019-.029.068-.082.154 0s.192.023.258.043.072.033.072.033a.492.492 0 0 1 .124-.068c.052-.019.115-.033.182-.052a1.025 1.025 0 0 1 .177-.033c.043.029.2.192.811-.048.58-.225.714-.25.811-.215.01-.023.019-.068.169-.062a1.157 1.157 0 0 0-.124-.274l-.685-.235h-.375l-1.123.206-.623.355-.048.179Z",
          fill: "#c4a859",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 94",
          d: "M6.526 14.575a.363.363 0 0 0 .169.215.971.971 0 0 1 .2.176s.029-.038.052-.077.043-.091.082-.1c.078-.033.254.029.293.019s.023-.078.058-.078c.081 0 .134.052.163.052s.1 0 .111-.019.013-.177.124-.254a.331.331 0 0 1 .307-.029c0 .029 0 .1.082.1a.4.4 0 0 1 .153.014c.068.023.149 0 .186.111.033-.01.111-.019.091-.13a.566.566 0 0 0 .153-.163c.02-.029.052-.062.078-.1a.316.316 0 0 1 .258.081c-.033.023-.053.038-.062.062a.686.686 0 0 1 .078.091c.029.038.049.085.085.1a3.241 3.241 0 0 0 .365 0 .732.732 0 0 1 .316.095c.019-.01.019-.014.068 0s.085.014.033-.048c.029.014.062.043.091.014a.191.191 0 0 1 .134-.082c.082-.01.111 0 .144-.081.043-.1-.1-.1-.1-.1s.068-.062.144-.144a.655.655 0 0 0 .221-.332.234.234 0 0 0-.2-.283l-1.186.365-1.45-.072-1.236.615Z",
          fill: "#927d49",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 95",
          d: "M5.46 11.15a.417.417 0 0 0-.062.163c-.024.115-.014.1-.033.182a3.4 3.4 0 0 0-.169 1.166c.09.274.245.375.342.6a.86.86 0 0 1 .048.12c.033.144 0 .254.043.4a.44.44 0 0 0 .1.163c.115.12.3.235.384.316.114.12.277.365.485.388a.7.7 0 0 0 .4-.111 3.343 3.343 0 0 1 .307-.23 1.156 1.156 0 0 1 .258-.078 1.17 1.17 0 0 1 .413-.019 3.983 3.983 0 0 0 .652.13 1.775 1.775 0 0 0 .423-.058c.277-.082.613-.221.834-.283.13-.038.235-.048.341-.072a.735.735 0 0 0 .423-.212c-.058-.068-.13-.173-.518-.169a6.851 6.851 0 0 0-1.2.293 1.008 1.008 0 0 1-.638-.029c-.274-.1-.283-.169-.283-.169a1.227 1.227 0 0 1-.408-.714 1.278 1.278 0 0 1 .313-1.242.205.205 0 0 0 .062-.173.782.782 0 0 0 .149-.537c-.062-.258-.46-.206-.46-.206l-2.206.386Z",
          fill: "#6e6342",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 96",
          d: "M5.792 12.013a.2.2 0 0 0-.023.1c0 .052.019.12.177.274a.335.335 0 0 1 .1.283.489.489 0 0 0 .25-.072c.144-.068.192.052.192.052a.405.405 0 0 1 .134-.043.3.3 0 0 0 .12-.038 1.734 1.734 0 0 0 .316.254c.134.072.212.12.278.072a.184.184 0 0 0 .058-.169.5.5 0 0 0-.058-.1c-.043-.062-.111-.134-.115-.192-.01-.134.1-.293.077-.332s-.11-.049-.326.029a4.851 4.851 0 0 1-1.186-.122Z",
          fill: "#39331f",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 97",
          d: "M6.301 12.881s-.11-.1-.072-.613a.639.639 0 0 1 .14.014 1.1 1.1 0 0 1-.068.599Z",
          fill: "#292311",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 98",
          d: "M5.511 10.761a.311.311 0 0 0 .043-.038.963.963 0 0 0-.072.811 1.075 1.075 0 0 0 .949.8 1.087 1.087 0 0 0 .945-.528c.1-.13.225-.293.332-.4.159-.173.283-.221.283-.388 0-.342-.349-.495-.864-.648a1.961 1.961 0 0 0-1.219-.029.667.667 0 0 0-.4.423Z",
          fill: "#252211",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 99",
          d: "m7.164 13.034.038-.019s.01-.154.072-.149a.12.12 0 0 1 .085.12.072.072 0 0 1-.082.072.191.191 0 0 1-.114-.023Z",
          fill: "#3f3824",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 100",
          d: "M6.991 12.382s.038-.014.085.033a.7.7 0 0 1 .258.014.2.2 0 0 1 .068.062.673.673 0 0 1-.3 0c-.111-.037-.111-.109-.111-.109Z",
          fill: "#2d2815",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 101",
          d: "M7.855 12.411a.481.481 0 0 0-.215-.1c-.019 0-.023.01-.038.01s-.014-.033-.014-.033l-.063.033s-.01.014.023.038.078.043.091.081a.334.334 0 0 0 .019.058.207.207 0 0 0 .1-.019c.033-.019.1-.051.091-.064Z",
          fill: "#82764f",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 102",
          d: "M6.875 12.806a.163.163 0 0 1 .149-.14.15.15 0 0 1 .159.12l-.078.078s-.058-.083-.23-.058Z",
          fill: "#2d2816",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 103",
          d: "M7.719 12.23a.406.406 0 0 1-.231.1.092.092 0 0 1 0-.12c.043-.062.091-.082.14-.062a.113.113 0 0 1 .091.082Z",
          fill: "#574f35",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 104",
          d: "M8.012 12.324c0-.019-.01-.023 0-.033s.062-.029.072-.019 0 .019 0 .038a.093.093 0 0 1-.01.052.078.078 0 0 1-.072.023c-.019-.006-.023-.033-.023-.038s.033-.014.033-.023Zm.331-.209c0-.01.033-.029.052-.029s.029.023.033.029.01 0 .019.014.023.049.014.068a.071.071 0 0 1-.058.029.515.515 0 0 1-.06-.112Z",
          fill: "#82764f",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 105",
          d: "M7.676 12.368a.27.27 0 0 1 .1.058.544.544 0 0 1-.049.029.145.145 0 0 0-.052-.087Z",
          fill: "#6e6342",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 106",
          d: "M7.582 11.941c-.01-.01.029-.033.052-.029s.033.02.058.023.029-.01.038-.02.043 0 .048 0l.01.014a.054.054 0 0 1 .019-.038.062.062 0 0 1 .052-.01.287.287 0 0 1 .019.072c0 .01-.062.023-.072.014a.69.69 0 0 0 .058.082c.006.01-.043.033-.062.029a.793.793 0 0 1-.223-.136Zm.254-.322a.045.045 0 0 0-.02-.023c-.013 0-.058 0-.058.023a.721.721 0 0 0 .082.221c.048.068.081.124.114.14a.045.045 0 0 0 .058-.019 1.181 1.181 0 0 0 .01-.25 2.3 2.3 0 0 0-.02-.342.052.052 0 0 0-.062.01 1.82 1.82 0 0 0-.1.241Z",
          fill: "#585136",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 107",
          d: "M7.663 12.613a.157.157 0 0 0-.134-.014c-.062.029-.058.144-.058.144a.092.092 0 0 0 .085-.01.261.261 0 0 0 .107-.12Z",
          fill: "#574f35",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 108",
          d: "M7.79 12.766c0-.038-.038-.038-.038-.058a.043.043 0 0 1 .042-.033c.019 0 .038.023.062.038s.058.038.062.068-.038.11-.085.11-.033-.087-.043-.126Zm.375-.052s-.078.023-.072 0 .023-.029.048-.029a.077.077 0 0 1 .049-.023.041.041 0 0 1 .029.01s.052-.023.068-.01 0 .014.014.029a.139.139 0 0 1 .023.058c0 .016-.058.049-.1.043s-.05-.065-.059-.078Zm.452-.087s.023.014 0 .029a.317.317 0 0 1-.14.043c-.058 0-.11.01-.11-.01s.049-.058.078-.068a.062.062 0 0 1 .049-.023c.023 0 .114-.01.14-.014s.043.01.029.029-.046.014-.046.014Zm.134-.6s-.029.062-.062.062-.033-.014-.033-.023.033-.048.029-.058-.033 0-.029-.023.033-.043.062-.038a.128.128 0 0 1 .078-.029c.033 0 .062.01.062.029s-.038.062-.052.072-.035.026-.054.01Zm-.442 1.147s-.038 0-.038.023.01.01.023 0h.023s0 .023.033.023a.184.184 0 0 0 .068-.023c.023-.01.043-.019.043-.038a.058.058 0 0 0-.058-.049.079.079 0 0 0-.043.01s-.01-.019-.043 0-.029.02-.019.029.012.026.012.026Zm-.219.2c0-.01.048-.029.062-.023a.249.249 0 0 1 .052.085c0 .01-.048.033-.068.033a.09.09 0 0 1-.052-.038s.023-.01.023-.014-.017-.033-.017-.043Zm-.154-.283c.01 0 .01-.014.023-.023a.033.033 0 0 1 .029 0 .047.047 0 0 1 .033-.023c.023 0 .043 0 .038.01 0 .029.019.048.019.072s-.014.052-.062.072a.341.341 0 0 1-.124.01.064.064 0 0 1-.01-.062.161.161 0 0 1 .053-.05Z",
          fill: "#82764f",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 109",
          d: "M7.998 13.106s-.033.019-.033.029a.089.089 0 0 0 0 .029c0 .006.043 0 .049-.01s-.016-.038-.016-.048Z",
          fill: "#6e6342",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 110",
          d: "M7.71 13.018a.418.418 0 0 1 .078.01c.019.01.033.029.014.052s-.038.058-.081.052-.1-.029-.1-.049a.093.093 0 0 1 .023-.068c.019-.016.029-.006.062 0Z",
          fill: "#585136",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 111",
          d: "M7.686 13.034a.548.548 0 0 0-.078.072c-.02.023-.115.143-.144.169a.353.353 0 0 1 .033-.049.2.2 0 0 0-.081.1c-.023.072.13.111.231.14s.14.038.14.038a1.079 1.079 0 0 1-.1-.177c-.038-.091-.058-.1-.033-.144s.049-.072.049-.1-.017-.049-.017-.049Z",
          fill: "#574f35",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 112",
          d: "M5.473 13.187a.114.114 0 0 0 .043 0 1.979 1.979 0 0 1 .648-.1 3.465 3.465 0 0 1 .7.115c.4.1.893.312 1.213.431.085.033.169.091.23.114a1.462 1.462 0 0 0 .4.12 1.553 1.553 0 0 0 .522-.072c.221-.049.6-.072.931-.12a1.909 1.909 0 0 0 .316-.072 1.666 1.666 0 0 1-.9.359 2.8 2.8 0 0 1-.772.01 2.344 2.344 0 0 1-.437-.078c-.115-.033-.349-.12-.638-.192-.2-.053-.427-.091-.685-.14a8.1 8.1 0 0 1-1.573-.38Z",
          fill: "#252211",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Line 1",
          fill: "none",
          d: "m5.144 10.727-1.617-1.51"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 113",
          d: "M4.76 11.988c-.154.13-.316.254-.475.375l-.479.368c-.163.12-.322.244-.485.365s-.326.235-.5.345c.153-.13.316-.25.479-.369s.332-.234.489-.354l.479-.369c.165-.12.324-.244.491-.361Zm-.848 1.358s.173-.144.388-.345a8.305 8.305 0 0 1 .7-.629l-1.089.974Z",
          fill: "#cfb66c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 114",
          d: "M3.912 13.346c.085-.085.177-.169.268-.25l.14-.12c.043-.038.091-.081.134-.124.085-.085.169-.177.254-.264a1.632 1.632 0 0 1 .134-.124.362.362 0 0 1 .078-.052.226.226 0 0 1 .081-.043c-.019.029-.043.043-.062.068s-.043.043-.062.062c-.043.043-.091.082-.134.12-.091.078-.186.154-.277.235s-.176.169-.268.25-.19.165-.285.243Zm1.16-.776s-.633.619-.763.72Z",
          fill: "#cfb66c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 115",
          d: "M5.073 12.57a2.066 2.066 0 0 1-.183.186l-.192.182c-.062.062-.12.124-.186.186s-.13.115-.2.169l.186-.182c.062-.062.13-.115.2-.177l.186-.182c.059-.064.121-.122.189-.182Zm.029.336a4.039 4.039 0 0 1-.206.475c-.163.326-.407.734-.514.941Z",
          fill: "#cfb66c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 116",
          d: "M5.101 12.906a.544.544 0 0 1-.043.2 1.946 1.946 0 0 1-.078.182c-.029.058-.062.12-.1.177s-.072.114-.1.173l-.2.345c-.068.115-.134.231-.206.342a3.169 3.169 0 0 1 .177-.355c.068-.115.13-.23.192-.349a1.963 1.963 0 0 0 .081-.182c.029-.062.058-.12.081-.177s.052-.12.081-.177a1.139 1.139 0 0 1 .1-.175Z",
          fill: "#cfb66c",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 117",
          d: "M5.792 14.497a.961.961 0 0 0-.173.576c.052-.169.118-.427.173-.576Zm.182.255s-.068.691-.124 1.03a4.161 4.161 0 0 0 .124-1.03Zm1.271 1.071a7.31 7.31 0 0 0-.293 1.079c.062-.241.182-.734.293-1.08Z",
          fill: "#dec270",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 118",
          d: "M7.917 14.445s.466.768.815 1.424a3.234 3.234 0 0 0-.815-1.424Z",
          fill: "#cbaf59",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 119",
          d: "M9.168 15.576a14.12 14.12 0 0 1 .691 1.4 2.133 2.133 0 0 0-.691-1.4Z",
          fill: "#e3c677",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 120",
          d: "M12.847 16.709c.078-.048.231-.312.365-.378a.917.917 0 0 0 .355-.215.855.855 0 0 1 .417-.336c.369-.159.115-.365.115-.365a1.2 1.2 0 0 1 .13-.111.368.368 0 0 0 .2-.312 1.36 1.36 0 0 0-.274-.85c.206-.043.6-.072.844-.134a1.207 1.207 0 0 0 .413-.173.471.471 0 0 1 .1-.557 3.245 3.245 0 0 0 .638-.759 1.864 1.864 0 0 0-1.17.149.894.894 0 0 1 .111.062 2.193 2.193 0 0 0-.6.254c-.278.235-.312.427-.613.571s-.6.1-.854.221a2.259 2.259 0 0 0-.378.258c.019.023 0 .062.033.1-.023.033-.159.254-.3.254.014.053.13.091.13.091a.627.627 0 0 1-.3.078 2.206 2.206 0 0 0 .5.423c-.023.048-.12.12-.081.212s.153.215.6.316a3.908 3.908 0 0 1-.844.014 1.4 1.4 0 0 0-.633-.014c.023.023.085.023.14.085-.058 0-.423-.043-.547.12a1.059 1.059 0 0 0-.177.633.165.165 0 0 0-.1.212c.033.12.206.159.316.235s.12.11.225.091.274-.134.369-.134a.248.248 0 0 1 .163.072s.258-.124.283-.1 0 .173.029.2a1.866 1.866 0 0 0 .394-.2Z",
          fill: "#ecd592",
          fillRule: "evenodd"
        }), /* @__PURE__ */ jsx("path", {
          "data-name": "Path 121",
          d: "M18.484 8.943a6.105 6.105 0 0 0-4.211-3.712H5.724l.033 3.19h1.7v7.124H5.724v3.184h8.317c2 0 3.611-2.014 3.611-2.014a8.608 8.608 0 0 0 .836-7.772Zm-4.4 5.625s-.652.941-1.362.941h-1.42l-.034-7.081h1.822s.844.177 1.434 1.847a5.57 5.57 0 0 1-.44 4.294Z",
          fill: "rgba(255,255,255,0.8)",
          fillRule: "evenodd"
        })]
      })
    })
  })]
});
const SvgDownloadCloud = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.082 15.437a.858.858 0 0 1 1.177 0l2.743 2.633 2.743-2.633a.858.858 0 0 1 1.178 0 .777.777 0 0 1 0 1.13l-3.332 3.199a.857.857 0 0 1-1.178 0l-3.331-3.198a.777.777 0 0 1 0-1.131z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.002 11.205c.46 0 .833.358.833.8V19.2c0 .441-.373.799-.833.799-.46 0-.833-.358-.833-.8v-7.195c0-.442.373-.8.833-.8z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.227 4.005a7.769 7.769 0 0 1 3.297.608 7.48 7.48 0 0 1 2.69 1.93 7.13 7.13 0 0 1 1.353 2.264h.432a5.14 5.14 0 0 1 2.954.925 4.81 4.81 0 0 1 1.814 2.423c.32.972.31 2.017-.03 2.983a4.819 4.819 0 0 1-1.86 2.39.855.855 0 0 1-1.16-.194.78.78 0 0 1 .202-1.114 3.213 3.213 0 0 0 1.24-1.593 3.083 3.083 0 0 0 .02-1.99 3.206 3.206 0 0 0-1.21-1.614A3.426 3.426 0 0 0 17 10.405h-1.05a.828.828 0 0 1-.807-.601 5.522 5.522 0 0 0-1.2-2.228 5.818 5.818 0 0 0-2.091-1.5 6.042 6.042 0 0 0-5.089.175A5.768 5.768 0 0 0 4.79 7.893a5.484 5.484 0 0 0-1.03 2.305 5.38 5.38 0 0 0 .122 2.505 5.534 5.534 0 0 0 1.249 2.202.777.777 0 0 1-.072 1.128.857.857 0 0 1-1.176-.069 7.114 7.114 0 0 1-1.605-2.831 6.917 6.917 0 0 1-.157-3.22A7.05 7.05 0 0 1 3.444 6.95a7.417 7.417 0 0 1 2.539-2.11 7.74 7.74 0 0 1 3.244-.835z"
  })]
});
const SvgDownload = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M19.5 13h-2.906l1.468-1.438C19 10.626 18.313 9 17 9h-2V5.5c0-.813-.688-1.5-1.5-1.5h-3A1.5 1.5 0 0 0 9 5.5V9H7c-1.344 0-2.031 1.625-1.063 2.563L7.375 13H4.5A1.5 1.5 0 0 0 3 14.5v4c0 .844.656 1.5 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-4c0-.813-.688-1.5-1.5-1.5zM7 10.5h3.5v-5h3v5H17l-5 5-5-5zm12.5 8h-15v-4h4.375l2.063 2.063a1.453 1.453 0 0 0 2.093 0l2.063-2.063H19.5v4zm-2.75-2c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75z"
  })]
});
const SvgEdit = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.125 20c0-.483.392-.875.875-.875h9a.875.875 0 1 1 0 1.75h-9a.875.875 0 0 1-.875-.875zM18 3.754c-.33 0-.648.131-.881.365L4.79 16.447l-.587 2.35 2.35-.587L18.88 5.88a1.248 1.248 0 0 0-.404-2.032A1.246 1.246 0 0 0 18 3.754zm-2.119-.873A2.996 2.996 0 1 1 20.12 7.12l-12.5 12.5a.875.875 0 0 1-.407.23l-4 1a.875.875 0 0 1-1.06-1.061l1-4a.875.875 0 0 1 .23-.407l12.5-12.5z"
  })]
});
const SvgEth = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 39.1",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsxs("g", {
    "data-name": "Group 1522",
    children: [/* @__PURE__ */ jsx("path", {
      "data-name": "Path 1705",
      d: "m11.986 0-.262.891v25.865l.262.262 12.006-7.1z",
      fill: "#343434",
      fillOpacity: 0.8
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 1706",
      d: "M12.006 0 0 19.921l12.006 7.1V0z",
      fill: "#8c8c8c",
      fillOpacity: 0.4
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 1707",
      d: "m11.987 29.274-.148.18v9.214l.148.432 12.012-16.919z",
      fill: "#3c3c3b",
      fillOpacity: 0.8
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 1708",
      d: "M12.006 39.1v-9.826L0 22.181z",
      fill: "#8c8c8c",
      fillOpacity: 0.4
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 1709",
      d: "m11.987 27.009 12.006-7.1-12.006-5.454z",
      fill: "#141414",
      fillOpacity: 0.8
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 1710",
      d: "m0 19.912 12.006 7.1V14.455z",
      fill: "#393939",
      fillOpacity: 0.4
    })]
  })]
});
const SvgExclamation = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm-.006-6.895c.835 0 1.524.69 1.524 1.524a1.51 1.51 0 0 1-1.524 1.524c-.87 0-1.524-.653-1.524-1.524a1.51 1.51 0 0 1 1.524-1.524zm-1.197-1.198-.254-4.935c0-.254.181-.472.435-.472h1.996c.254 0 .435.218.435.472l-.254 4.935c0 .218-.217.4-.435.4h-1.488c-.218 0-.435-.182-.435-.4z"
  })]
});
const SvgExpand = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.755 5.245a.836.836 0 0 1 0 1.182L6.427 20.755a.836.836 0 0 1-1.182-1.182L19.573 5.245a.836.836 0 0 1 1.182 0zm0 8.597a.836.836 0 0 1 0 1.182l-5.731 5.731a.836.836 0 0 1-1.182-1.182l5.731-5.731a.836.836 0 0 1 1.182 0z"
  })]
});
const SvgExternalLink = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.62 7.33a1.025 1.025 0 0 0-1.025 1.024V18.38a1.025 1.025 0 0 0 1.025 1.025h10.026a1.026 1.026 0 0 0 1.025-1.025v-5.47a.797.797 0 1 1 1.595 0v5.469a2.62 2.62 0 0 1-2.62 2.62H5.62A2.62 2.62 0 0 1 3 18.38V8.354a2.62 2.62 0 0 1 2.62-2.62h5.469a.798.798 0 0 1 0 1.595H5.62zm8.317-3.533c0-.44.357-.797.797-.797h5.469c.44 0 .797.357.797.797v5.469a.797.797 0 1 1-1.595 0V4.595h-4.67a.797.797 0 0 1-.798-.798z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.766 3.234a.797.797 0 0 1 0 1.127L10.741 14.387a.798.798 0 0 1-1.128-1.128L19.64 3.234a.797.797 0 0 1 1.127 0z"
  })]
});
const SvgEyeClosed = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M16 12c0-2.21-1.79-4-4-4-.06 0-.11.01-.17.02l4.15 4.15c.01-.06.02-.11.02-.17zm-3.32 3.93-4.61-4.61c-.04.22-.07.45-.07.68 0 2.21 1.79 4 4 4 .23 0 .46-.03.68-.07z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M12 18.01c-.65 0-1.29-.11-1.91-.28-1.3-.4-2.48-1.08-3.47-1.97-.07-.06-.14-.11-.2-.18-.07-.07-.14-.15-.21-.22-.85-.89-1.56-1.98-2.08-3.23-.01-.03-.04-.08-.05-.12.02-.05.04-.09.06-.14.44-1.05 1.02-1.98 1.7-2.79L4.4 7.66c-.05.06-.11.12-.17.18-.75.88-1.36 1.87-1.82 2.95-.12.28-.24.57-.35.87a1.03 1.03 0 0 0 0 .7c.11.29.23.58.35.86a11.45 11.45 0 0 0 1.82 2.95c2 2.41 4.78 3.84 7.77 3.84 1.36 0 2.68-.3 3.9-.86l-1.55-1.55c-.75.27-1.54.41-2.35.41zm9.94-6.35c-.14-.39-.31-.77-.49-1.14v-.01C19.55 6.52 15.96 4 12 4c-1.21 0-2.39.25-3.49.69l1.59 1.59C10.72 6.11 11.35 6 12 6c2.89 0 5.56 1.73 7.19 4.52.08.14.16.28.23.43.14.27.27.54.4.83.03.08.07.15.1.23-.03.08-.07.15-.1.23-.12.29-.26.56-.4.83-.08.14-.15.29-.23.43-.23.4-.49.77-.76 1.12l1.43 1.43c.61-.76 1.15-1.61 1.59-2.54v-.01c.18-.37.34-.75.49-1.14a1.03 1.03 0 0 0 0-.7zm-6.28 1.95-3.67-3.66-1.94-1.94-1.22-1.23L7.05 5a1.25 1.25 0 0 0-1.77 0c-.48.49-.48 1.27-.01 1.76l.01.01L6.7 8.18l10.84 10.84c.24.24.56.37.88.37.32 0 .64-.12.88-.37.49-.49.49-1.28 0-1.77l-3.64-3.64z"
  })]
});
const SvgEye = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M16 11.995a3.998 3.998 0 0 1-4 3.998c-2.21 0-4-1.79-4-3.998 0-.41.08-.79.19-1.16.32.68 1.01 1.16 1.81 1.16 1.1 0 2-.9 2-1.999 0-.8-.48-1.489-1.16-1.809.37-.11.75-.19 1.16-.19 2.21 0 4 1.79 4 3.998zm5.94-.34a1.029 1.029 0 0 1 0 .7c-.14.39-.31.77-.49 1.14v.01c-1.89 3.987-5.49 6.505-9.45 6.505-2.98 0-5.77-1.43-7.77-3.838-.75-.88-1.36-1.878-1.82-2.958-.12-.28-.24-.57-.35-.86a1.03 1.03 0 0 1 0-.699c.11-.29.23-.58.35-.86a11.44 11.44 0 0 1 1.82-2.947C6.23 5.429 9.02 4 12 4c3.96 0 7.55 2.518 9.45 6.506v.01c.18.36.34.74.49 1.14zm-2.02.35c-.03-.08-.07-.15-.1-.23-.12-.29-.26-.56-.4-.83-.08-.14-.15-.29-.23-.43C17.56 7.729 14.89 6 12 6c-.65 0-1.29.11-1.91.28-1.3.4-2.48 1.079-3.47 1.968-.07.06-.14.11-.2.18-.07.06-.14.14-.21.21a10.87 10.87 0 0 0-2.08 3.228c-.01.05-.04.09-.05.14.01.04.04.09.05.13a10.49 10.49 0 0 0 2.08 3.228c.07.07.13.15.21.22.06.06.14.12.2.18a9.41 9.41 0 0 0 3.47 1.968c.62.17 1.26.28 1.91.28 2.89 0 5.56-1.729 7.19-4.517.08-.14.16-.28.23-.43.14-.27.27-.54.4-.83.04-.08.07-.159.1-.229z"
  })]
});
const SvgFil = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsxs("g", {
    fillRule: "evenodd",
    children: [/* @__PURE__ */ jsx("path", {
      "data-name": "Path 1742",
      d: "M12 24.001a12 12 0 1 1 12-11.88 12.048 12.048 0 0 1-12 11.88",
      fill: "#0090FF"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 1743",
      d: "m13.143 10.563-.361 1.917 3.43.479-.241.9-3.37-.479c-.241.779-.361 1.618-.662 2.337-.3.839-.6 1.678-.963 2.456a3.246 3.246 0 0 1-2.467 1.917 2.42 2.42 0 0 1-1.926-.359.8.8 0 0 1-.361-.536.857.857 0 0 1 .3-.659 1.089 1.089 0 0 1 .6.06 2.661 2.661 0 0 1 .481.659.861.861 0 0 0 1.324.18 3.616 3.616 0 0 0 1.023-1.8c.361-1.438.722-2.816 1.023-4.254v-.24l-3.19-.479.12-.9 3.31.479.421-1.857-3.43-.539.12-.959 3.551.479c.12-.359.181-.659.3-.959a8.87 8.87 0 0 1 1.329-3.111 3.176 3.176 0 0 1 2.828-1.5 1.871 1.871 0 0 1 1.444.6.509.509 0 0 1 .181.3 1 1 0 0 1-.181.719.58.58 0 0 1-.782-.12c-.181-.18-.3-.359-.481-.539a.823.823 0 0 0-1.324-.12 3.837 3.837 0 0 0-.782 1.138c-.421 1.258-.722 2.576-1.143 3.894l3.31.479-.241.9-3.19-.479",
      fill: "#fff"
    })]
  })]
});
const SvgFile = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.76 2.774A2.566 2.566 0 0 1 6.591 2h6.31c.209 0 .41.085.557.236l6.31 6.436a.814.814 0 0 1 .231.57v10.114a2.67 2.67 0 0 1-.759 1.87 2.566 2.566 0 0 1-1.832.774H6.591a2.566 2.566 0 0 1-1.833-.774A2.67 2.67 0 0 1 4 19.356V4.644c0-.701.273-1.374.76-1.87zm1.832.835c-.27 0-.527.11-.718.303-.19.194-.297.457-.297.732v14.712c0 .275.107.538.297.732.19.194.449.303.718.303h10.817c.268 0 .526-.11.716-.303.19-.194.297-.457.297-.732V9.575l-5.847-5.966H6.592z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.901 2c.436 0 .79.36.79.805v5.632h5.52c.436 0 .789.36.789.804a.797.797 0 0 1-.789.805h-6.31a.797.797 0 0 1-.788-.805V2.805c0-.445.353-.805.788-.805z"
  })]
});
const SvgGithub = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
  })]
});
const SvgGoogle = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "none",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.64 12.2c0-.637-.057-1.25-.164-1.84H12v3.481h4.844a4.146 4.146 0 0 1-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z",
    fill: "#4285F4"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.003 21c2.43 0 4.467-.806 5.956-2.18l-2.909-2.26c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H3.96v2.332A8.996 8.996 0 0 0 12.003 21z",
    fill: "#34A853"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.964 13.712a5.41 5.41 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71V7.96H3.957a9.005 9.005 0 0 0 0 8.084l3.007-2.332z",
    fill: "#FBBC05"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.003 6.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C16.464 3.891 14.428 3 12.002 3A8.996 8.996 0 0 0 3.96 7.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71z",
    fill: "#EA4335"
  })]
});
const SvgGrid = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 3.797c0-.44.357-.797.797-.797h6.38c.44 0 .798.357.798.797v6.38c0 .44-.357.798-.798.798h-6.38A.798.798 0 0 1 3 10.177v-6.38zm1.595.798V9.38H9.38V4.595H4.595zm8.43-.798c0-.44.357-.797.798-.797h6.38c.44 0 .797.357.797.797v6.38c0 .44-.357.798-.797.798h-6.38a.798.798 0 0 1-.798-.798v-6.38zm1.595.798V9.38h4.785V4.595H14.62zm-1.595 9.228c0-.44.357-.798.798-.798h6.38c.44 0 .797.357.797.798v6.38c0 .44-.357.797-.797.797h-6.38a.797.797 0 0 1-.798-.797v-6.38zm1.595.797v4.785h4.785V14.62H14.62zM3 13.823c0-.44.357-.798.797-.798h6.38c.44 0 .798.357.798.798v6.38c0 .44-.357.797-.798.797h-6.38A.797.797 0 0 1 3 20.203v-6.38zm1.595.797v4.785H9.38V14.62H4.595z"
  })]
});
const SvgHelpCircle = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3.61a8.39 8.39 0 1 0 0 16.78 8.39 8.39 0 0 0 0-16.78zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.257 8.23a1.954 1.954 0 0 0-2.174 1.278.805.805 0 1 1-1.518-.534 3.563 3.563 0 0 1 6.925 1.188c0 1.346-1 2.245-1.738 2.737a7.281 7.281 0 0 1-1.525.768l-.03.01-.01.004-.004.001h-.001l-.256-.763.255.764a.805.805 0 0 1-.51-1.526l.017-.006.07-.027a5.68 5.68 0 0 0 1.1-.564c.643-.427 1.022-.907 1.022-1.4a1.954 1.954 0 0 0-1.623-1.93zm-1.062 8.368c0-.445.36-.805.805-.805h.01a.805.805 0 1 1 0 1.61H12a.805.805 0 0 1-.805-.805z"
  })]
});
const SvgHome = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 18 19",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.447.19a.895.895 0 0 1 1.106 0l8.1 6.345c.219.172.347.436.347.716v9.03c0 .721-.285 1.413-.79 1.923A2.69 2.69 0 0 1 15.3 19h-3.61a.903.903 0 0 1-.9-.906v-6.062a.25.25 0 0 0-.25-.25h-3.1a.25.25 0 0 0-.25.25v6.062c0 .5-.403.906-.9.906H2.7a2.69 2.69 0 0 1-1.91-.796A2.729 2.729 0 0 1 0 16.28v-9.03c0-.28.128-.544.347-.716l8.1-6.344ZM1.8 7.695v8.587c0 .24.095.47.264.64.168.17.397.266.636.266h2.69v-6.31c0-.502.403-.907.9-.907h5.4c.497 0 .9.405.9.906v6.311h2.71a.897.897 0 0 0 .636-.265.91.91 0 0 0 .264-.641V7.694L9 2.054l-7.2 5.64Z"
  })]
});
const SvgImage = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.62 4.595c-.566 0-1.025.459-1.025 1.025v12.76c0 .566.459 1.025 1.025 1.025h12.76c.566 0 1.025-.459 1.025-1.025V5.62c0-.566-.459-1.025-1.025-1.025H5.62zM3 5.62A2.62 2.62 0 0 1 5.62 3h12.76A2.62 2.62 0 0 1 21 5.62v12.76A2.62 2.62 0 0 1 18.38 21H5.62A2.62 2.62 0 0 1 3 18.38V5.62z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.81 8.24a.57.57 0 1 0 0 1.14.57.57 0 0 0 0-1.14zm-2.164.57a2.165 2.165 0 1 1 4.329 0 2.165 2.165 0 0 1-4.33 0zm8.436.803a.797.797 0 0 1 1.127 0l4.557 4.557a.797.797 0 1 1-1.127 1.128l-3.993-3.993-9.462 9.461a.797.797 0 1 1-1.128-1.127L15.082 9.613z"
  })]
});
const SvgInfo = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm.006 6.895c-.835 0-1.524-.69-1.524-1.524 0-.871.69-1.524 1.524-1.524.87 0 1.524.653 1.524 1.524a1.51 1.51 0 0 1-1.524 1.524zm1.197 1.198v4.935c0 .254-.181.472-.435.472H11.28c-.254 0-.435-.218-.435-.472v-4.935c0-.218.217-.4.435-.4h1.488c.218 0 .435.182.435.4z"
  })]
});
const SvgKey = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "data-testid": "test-icon",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "m15.13 7.915 3.16-3.128M20.098 3 18.29 4.787 20.097 3zm-8.679 8.587a4.9 4.9 0 0 1 1.091 1.595 4.87 4.87 0 0 1-1.067 5.379 4.97 4.97 0 0 1-1.62 1.068 5.013 5.013 0 0 1-5.428-1.092A4.887 4.887 0 0 1 3 15.08a4.889 4.889 0 0 1 1.455-3.432 4.994 4.994 0 0 1 3.469-1.44 4.996 4.996 0 0 1 3.494 1.38h0zm0 0 3.712-3.672-3.712 3.672zm3.712-3.672 2.71 2.68L21 7.468l-2.71-2.68-3.16 3.127z",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.75,
    stroke: "currentColor"
  })]
});
const SvgLifeRing = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.67 6.907A8.09 8.09 0 0 0 3.874 12c0 1.928.672 3.7 1.794 5.093l2.609-2.608A4.454 4.454 0 0 1 7.525 12c0-.92.277-1.774.753-2.485L5.669 6.907zm1.237-1.238 2.608 2.609A4.454 4.454 0 0 1 12 7.525c.92 0 1.774.277 2.485.753l2.608-2.609A8.09 8.09 0 0 0 12 3.875a8.09 8.09 0 0 0-5.093 1.794zM18.33 6.907l-2.609 2.608c.476.711.753 1.566.753 2.485a4.45 4.45 0 0 1-.753 2.485l2.609 2.608A8.09 8.09 0 0 0 20.125 12a8.09 8.09 0 0 0-1.794-5.093zM17.093 18.33l-2.608-2.609a4.454 4.454 0 0 1-2.485.753 4.45 4.45 0 0 1-2.485-.753L6.907 18.33A8.09 8.09 0 0 0 12 20.125a8.09 8.09 0 0 0 5.093-1.794zM2.125 12c0-5.454 4.421-9.875 9.875-9.875S21.875 6.546 21.875 12 17.454 21.875 12 21.875 2.125 17.454 2.125 12zM12 9.275a2.725 2.725 0 1 0 0 5.45 2.725 2.725 0 0 0 0-5.45z"
  })]
});
const SvgLink = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M12.638 4.386A4.932 4.932 0 0 1 21 7.896a4.941 4.941 0 0 1-1.385 3.474l-.01.01-2.467 2.47a4.932 4.932 0 0 1-7.441-.534.824.824 0 0 1 1.317-.986 3.292 3.292 0 0 0 3.784 1.113 3.291 3.291 0 0 0 1.177-.757l2.461-2.464a3.295 3.295 0 0 0-2.342-5.576 3.288 3.288 0 0 0-2.31.92l-1.41 1.404a.822.822 0 1 1-1.16-1.168l1.415-1.407.009-.009z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M8.627 9.015a4.93 4.93 0 0 1 5.676 1.669.824.824 0 0 1-1.317.986 3.292 3.292 0 0 0-3.784-1.113 3.29 3.29 0 0 0-1.176.757l-2.462 2.464a3.294 3.294 0 0 0 2.342 5.576 3.29 3.29 0 0 0 2.309-.92l1.4-1.402a.822.822 0 1 1 1.164 1.164l-1.406 1.408-.01.01a4.932 4.932 0 0 1-6.918-.06 4.941 4.941 0 0 1-.06-6.924l.01-.01 2.467-2.47c.5-.5 1.103-.888 1.765-1.135z"
  })]
});
const SvgLinux = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M11.857 6.84c.038 0 .076.04.114.04.038 0 .114 0 .114-.04 0-.038-.076-.077-.114-.116-.076-.04-.152-.04-.19 0-.037 0-.037.039-.037.039 0 .039.075.039.113.078zm-.833.04c.076 0 .076-.04.114-.04.075-.038.151-.038.151-.077 0 0 0-.04-.038-.04-.037-.038-.113-.038-.189 0-.038.04-.151.079-.114.118 0 .039.038.078.076.039zm8.408 10.892c-.152-.156-.227-.43-.303-.742-.038-.351-.152-.663-.379-.898-.038-.039-.113-.078-.151-.117-.038-.039-.114-.039-.152-.078.341-1.054.19-2.108-.151-3.084-.417-1.171-1.174-2.186-1.742-2.889-.682-.859-1.288-1.64-1.288-2.81.038-1.797.19-5.115-2.878-5.154-3.863 0-2.879 4.06-2.954 5.31-.038.897-.228 1.6-.834 2.498-.72.898-1.742 2.303-2.196 3.787-.228.702-.341 1.405-.228 2.069-.265.234-.454.585-.643.82-.152.156-.38.195-.644.312-.265.078-.53.234-.682.547-.114.156-.114.312-.114.507 0 .156 0 .312.038.468.038.313.076.586.038.781-.19.586-.227.976-.076 1.25.114.273.417.429.758.468.644.156 1.515.117 2.234.508.758.39 1.515.546 2.121.39a1.34 1.34 0 0 0 .985-.78c.454 0 .985-.196 1.818-.274.568-.04 1.287.234 2.083.195l.114.234c.303.664.87.976 1.514.898.644-.039 1.288-.43 1.818-1.093.53-.625 1.364-.898 1.932-1.25.303-.155.53-.39.53-.702 0-.312-.151-.664-.568-1.171zM11.97 5.435c.379-.858 1.288-.858 1.666-.039.265.586.152 1.21-.151 1.601a2.593 2.593 0 0 0-.492-.195c.037-.04.113-.117.151-.195.19-.469 0-1.054-.34-1.054-.266-.04-.531.429-.455.898-.152-.079-.341-.157-.493-.157-.037-.273 0-.585.114-.859zm-1.515-.468c.379 0 .758.547.72 1.327a1.81 1.81 0 0 0-.417.157c.076-.352-.114-.781-.34-.742-.342 0-.38.82-.077 1.093.038.039.076 0-.227.195-.568-.546-.378-2.03.341-2.03zm-.53 2.381c.227-.195.53-.39.53-.429.19-.156.53-.547 1.06-.547.266 0 .607.118.985.352.227.156.417.195.833.351.341.156.53.39.417.742-.114.273-.417.546-.871.703-.417.117-.758.624-1.44.585-.15-.039-.264-.039-.378-.078-.303-.156-.454-.43-.757-.585-.303-.196-.493-.43-.53-.625-.076-.195 0-.351.15-.469zm.114 13.04c-.076 1.366-1.667 1.327-2.841.702-1.136-.624-2.613-.273-2.916-.858-.076-.196-.076-.508.113-1.016v-.039c.076-.273.038-.624-.037-.898-.038-.312-.038-.585.037-.78a.943.943 0 0 1 .569-.469c.378-.117.454-.117.757-.39.19-.195.34-.508.53-.703.19-.195.379-.312.682-.273.303.078.568.273.833.624l.72 1.406c.378.78 1.628 1.874 1.553 2.694zm-.038-1.015c-.152-.274-.38-.547-.568-.781.303 0 .568-.078.643-.313.076-.273 0-.585-.265-.976-.53-.741-1.477-1.288-1.477-1.288-.492-.312-.795-.742-.909-1.171-.151-.43-.113-.898 0-1.366.19-.898.682-1.757 1.023-2.304.076-.078.038.117-.341.82-.303.625-.909 2.07-.114 3.201.038-.82.228-1.64.53-2.381.455-1.093 1.44-2.928 1.516-4.412a1.1 1.1 0 0 0 .227.157c.151.117.303.273.454.39.492.39 1.098.351 1.629.04.227-.118.416-.274.606-.352.378-.117.644-.313.833-.586.303 1.21.985 2.928 1.401 3.748.227.468.682 1.405.91 2.537.113 0 .264 0 .416.04.492-1.406-.455-2.89-.91-3.319-.15-.156-.189-.234-.075-.234.454.43 1.098 1.288 1.326 2.303.113.43.113.898 0 1.367.643.273 1.363.702 1.174 1.366h-.152c.114-.39-.151-.664-.87-1.015-.758-.312-1.364-.312-1.44.508-.455.156-.72.546-.833 1.054-.076.429-.114.976-.152 1.561-.038.313-.151.703-.265 1.132-1.212.898-2.916 1.289-4.317.274zm9.733-.43c-.038.625-1.553.742-2.386 1.796-.492.625-1.098.937-1.667 1.015-.53.04-.984-.195-1.25-.78-.189-.43-.113-.899.039-1.406.151-.547.34-1.132.378-1.6.038-.586.038-1.094.152-1.484.113-.43.265-.703.53-.82 0-.04 0-.04.038-.04 0 .508.265 1.055.682 1.172.492.117 1.174-.312 1.477-.664.34 0 .606-.039.833.195.379.352.303 1.21.681 1.64.38.469.53.742.493.976zM10.077 7.817c.076.078.19.195.303.273.228.195.606.43 1.023.43.454 0 .871-.235 1.212-.43.19-.117.416-.273.568-.39.151-.156.227-.274.114-.274-.114 0-.114.118-.228.196-.19.117-.378.312-.53.39-.265.156-.757.39-1.136.39-.379 0-.72-.195-.947-.39-.114-.078-.227-.195-.303-.234-.038-.078-.038-.195-.151-.195-.038 0-.076.117.075.234z"
  })]
});
const SvgList = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 6a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zM2 6a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1z"
  })]
});
const SvgLockClosed = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  viewBox: "0 0 19 18",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.148 6.625H1.886C.85 6.625.01 7.465.01 8.5v7.625C.01 17.16.85 18 1.886 18H16.13c1.036 0 1.875-.84 1.875-1.875V8.5c0-1.036-.839-1.875-1.875-1.875h-1.28c-.129-2.392-.8-4.02-1.867-5.063C11.793.397 10.274.125 9 .125S6.207.397 5.015 1.562c-1.067 1.043-1.738 2.67-1.867 5.063Zm1.752 0h8.2c-.127-2.058-.698-3.186-1.339-3.812-.727-.71-1.707-.938-2.761-.938s-2.035.228-2.762.938c-.64.626-1.212 1.754-1.338 3.812Zm-3.014 1.75a.125.125 0 0 0-.125.125v7.625c0 .069.056.125.125.125H16.13a.125.125 0 0 0 .125-.125V8.5a.125.125 0 0 0-.125-.125H1.886ZM9 10.625c.483 0 .875.392.875.875v2a.875.875 0 0 1-1.75 0v-2c0-.483.392-.875.875-.875Z"
  })]
});
const SvgLockOpen = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 19 18",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.886 6.625h1.262c.13-2.392.8-4.02 1.867-5.063C6.207.397 7.726.125 9 .125c1.273 0 2.793.272 3.984 1.437 1.067 1.043 1.739 2.67 1.868 5.063h1.28c1.035 0 1.874.84 1.874 1.875v7.625c0 1.035-.839 1.875-1.875 1.875H1.886A1.875 1.875 0 0 1 .01 16.125V8.5c0-1.036.84-1.875 1.875-1.875Zm3.014 0c.126-2.058.698-3.186 1.338-3.812.727-.71 1.708-.938 2.762-.938s2.034.228 2.761.938l1.223-1.251c1.067 1.043 1.739 2.67 1.868 5.063H4.9ZM1.76 8.5c0-.069.057-.125.126-.125H16.13c.07 0 .125.056.125.125v7.625a.125.125 0 0 1-.125.125H1.886a.125.125 0 0 1-.125-.125V8.5Zm8.115 3a.875.875 0 0 0-1.75 0v2a.875.875 0 0 0 1.75 0v-2Z"
  })]
});
const SvgLockReset = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M17.96 22H4.51c-.55 0-1-.45-1-1s.45-1 1-1h13.44c.42 0 .78-.46.78-1v-4.95c0-.55.45-1 1-1s1 .45 1 1V19c0 1.65-1.25 3-2.78 3h.01zM3.74 17.55c-.55 0-1-.45-1-1V12c0-1.65 1.25-3 2.78-3h13.44c.55 0 1 .45 1 1s-.45 1-1 1H5.51c-.42 0-.78.46-.78 1v4.55c0 .55-.45 1-1 1h.01z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M16.74 11c-.55 0-1-.45-1-1V8c0-2.21-1.79-4-4-4s-4 1.79-4 4v2c0 .55-.45 1-1 1s-1-.45-1-1V8c0-3.31 2.69-6 6-6s6 2.69 6 6v2c0 .55-.45 1-1 1zm5.52 6.26c-.26 0-.51-.1-.71-.29l-1.92-1.92-1.92 1.92a.996.996 0 1 1-1.41-1.41l2.63-2.63a.996.996 0 0 1 1.41 0l2.63 2.63a.996.996 0 0 1-.71 1.7zm-18.63.63c-.26 0-.51-.1-.71-.29L.29 14.97a.996.996 0 1 1 1.41-1.41l1.92 1.92 1.92-1.92a.996.996 0 1 1 1.41 1.41L4.32 17.6c-.2.2-.45.29-.71.29h.02zm8.11-.2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z"
  })]
});
const SvgLogOut = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M7 3.875A1.125 1.125 0 0 0 5.875 5v14A1.125 1.125 0 0 0 7 20.125h4a.875.875 0 0 1 0 1.75H7A2.875 2.875 0 0 1 4.125 19V5A2.875 2.875 0 0 1 7 2.125h4a.875.875 0 0 1 0 1.75H7zm9.381 3.506a.875.875 0 0 1 1.238 0l4 4a.875.875 0 0 1 0 1.238l-4 4a.875.875 0 1 1-1.238-1.238L19.763 12 16.38 8.619a.875.875 0 0 1 0-1.238z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M11.125 12c0-.483.392-.875.875-.875h9a.875.875 0 0 1 0 1.75h-9a.875.875 0 0 1-.875-.875z"
  })]
});
const SvgMail = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M4.644 5.577a1.03 1.03 0 0 0-1.035 1.015v10.817a1.03 1.03 0 0 0 1.035 1.014h14.712a1.03 1.03 0 0 0 1.035-1.014V6.591a1.03 1.03 0 0 0-1.035-1.015H4.644zM2 6.592C2 5.164 3.188 4 4.644 4h14.712C20.812 4 22 5.164 22 6.592v10.817C22 18.835 20.812 20 19.356 20H4.644C3.188 20 2 18.836 2 17.409V6.591z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M2.146 6.14a.815.815 0 0 1 1.12-.195L12 11.94l8.734-5.994a.815.815 0 0 1 1.12.194.779.779 0 0 1-.197 1.099l-9.196 6.31a.818.818 0 0 1-.922 0l-9.196-6.31a.779.779 0 0 1-.197-1.099z"
  })]
});
const SvgMastercard = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 36 32",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M21.607 7.615h-9.246v16.772h9.246V7.615z",
    fill: "#FF5F00"
  }), /* @__PURE__ */ jsx("path", {
    d: "M12.955 16a10.73 10.73 0 0 1 1.06-4.662 10.63 10.63 0 0 1 2.976-3.724A10.481 10.481 0 0 0 5.842 6.406a10.602 10.602 0 0 0-4.338 3.935 10.74 10.74 0 0 0-1.61 5.66c0 2 .558 3.962 1.61 5.658a10.602 10.602 0 0 0 4.339 3.935 10.48 10.48 0 0 0 11.148-1.208 10.631 10.631 0 0 1-2.975-3.723A10.731 10.731 0 0 1 12.956 16z",
    fill: "#EB001B"
  }), /* @__PURE__ */ jsx("path", {
    d: "M34.081 16a10.74 10.74 0 0 1-1.61 5.66 10.6 10.6 0 0 1-4.338 3.934 10.48 10.48 0 0 1-11.149-1.208 10.65 10.65 0 0 0 2.974-3.724 10.75 10.75 0 0 0 0-9.323 10.65 10.65 0 0 0-2.974-3.725 10.48 10.48 0 0 1 11.148-1.208 10.602 10.602 0 0 1 4.34 3.935 10.74 10.74 0 0 1 1.61 5.66zm-.994 6.612v-.343h.137v-.07h-.35v.07h.138v.343h.075zm.678 0v-.414h-.107l-.123.285-.123-.285h-.108v.414h.076V22.3l.115.27h.079l.115-.27v.312h.076z",
    fill: "#F79E1B"
  })]
});
const SvgMatic = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 21.11",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1721",
    d: "M18.172 6.452a1.6 1.6 0 0 0-1.5 0l-3.513 2.067-2.381 1.316L7.332 11.9a1.6 1.6 0 0 1-1.5 0l-2.699-1.627a1.527 1.527 0 0 1-.752-1.315V5.826a1.545 1.545 0 0 1 .752-1.316l2.695-1.566a1.6 1.6 0 0 1 1.5 0l2.695 1.629a1.527 1.527 0 0 1 .752 1.315v2.067l2.381-1.378V4.448a1.545 1.545 0 0 0-.752-1.315L7.394.188a1.6 1.6 0 0 0-1.5 0L.752 3.195A1.378 1.378 0 0 0 0 4.448v5.888a1.545 1.545 0 0 0 .752 1.315L5.828 14.6a1.6 1.6 0 0 0 1.5 0l3.446-2 2.381-1.378 3.446-2a1.6 1.6 0 0 1 1.5 0l2.699 1.552a1.527 1.527 0 0 1 .752 1.315v3.132a1.545 1.545 0 0 1-.752 1.315L18.172 18.1a1.6 1.6 0 0 1-1.5 0l-2.695-1.566a1.527 1.527 0 0 1-.752-1.315v-2L10.841 14.6v2.067a1.545 1.545 0 0 0 .752 1.315l5.076 2.944a1.6 1.6 0 0 0 1.5 0l5.076-2.944a1.527 1.527 0 0 0 .755-1.32v-5.95a1.545 1.545 0 0 0-.752-1.312z",
    fill: "#8247E5"
  })]
});
const SvgMaximize = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.8 3.9a.9.9 0 0 1 .9-.9h5.4a.9.9 0 0 1 .9.9v5.4a.9.9 0 1 1-1.8 0V4.8h-4.5a.9.9 0 0 1-.9-.9zm-9.9 9.9a.9.9 0 0 1 .9.9v4.5h4.5a.9.9 0 1 1 0 1.8H3.9a.9.9 0 0 1-.9-.9v-5.4a.9.9 0 0 1 .9-.9z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.736 3.264a.9.9 0 0 1 0 1.272l-6.3 6.3a.9.9 0 1 1-1.272-1.272l6.3-6.3a.9.9 0 0 1 1.272 0zm-9.9 9.9a.9.9 0 0 1 0 1.272l-6.3 6.3a.9.9 0 1 1-1.272-1.272l6.3-6.3a.9.9 0 0 1 1.272 0z"
  })]
});
const SvgMenu = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 20 14",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 1a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 13a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z"
  })]
});
const SvgMessageCircle = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.478 5.792c-4.492 0-7.732 2.805-7.732 5.826 0 .748.189 1.467.54 2.133.048.092.1.182.154.272.19.314.228.714.07 1.07l-1.227 2.778 3.98-1.096c.242-.066.494-.05.72.036a9.746 9.746 0 0 0 3.495.632c4.493 0 7.733-2.804 7.733-5.825 0-3.02-3.24-5.826-7.733-5.826zm-9.521 5.826C2.957 7.214 7.442 4 12.478 4 17.515 4 22 7.214 22 11.618s-4.485 7.618-9.522 7.618c-1.4 0-2.735-.241-3.939-.678l-5.081 1.399c-.936.258-1.75-.69-1.357-1.578l1.643-3.716a6.339 6.339 0 0 1-.787-3.045z"
  })]
});
const SvgMetamask = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "m19.011.75-7.813 5.781 1.453-3.407L19.011.75Z",
    fill: "url(#metamask_svg__a)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m19.011.75-7.813 5.781 1.453-3.407L19.011.75Z",
    fill: "url(#metamask_svg__b)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m.99.75 7.743 5.835-1.383-3.46L.99.75Z",
    fill: "url(#metamask_svg__c)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m.99.75 7.743 5.835-1.383-3.46L.99.75Z",
    fill: "url(#metamask_svg__d)"
  }), /* @__PURE__ */ jsx("path", {
    d: "M16.198 14.155 14.12 17.33l4.451 1.226 1.275-4.332-3.648-.07Z",
    fill: "url(#metamask_svg__e)"
  }), /* @__PURE__ */ jsx("path", {
    d: "M16.198 14.155 14.12 17.33l4.451 1.226 1.275-4.332-3.648-.07Z",
    fill: "url(#metamask_svg__f)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m.163 14.224 1.267 4.332 4.444-1.226-2.071-3.175-3.64.069Z",
    fill: "url(#metamask_svg__g)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m.163 14.224 1.267 4.332 4.444-1.226-2.071-3.175-3.64.069Z",
    fill: "url(#metamask_svg__h)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m5.634 8.79-1.237 1.865 4.405.2-.146-4.74L5.634 8.79Z",
    fill: "url(#metamask_svg__i)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m5.634 8.79-1.237 1.865 4.405.2-.146-4.74L5.634 8.79Z",
    fill: "url(#metamask_svg__j)"
  }), /* @__PURE__ */ jsx("path", {
    d: "M14.367 8.79 11.299 6.06l-.1 4.795 4.404-.2-1.236-1.866Z",
    fill: "url(#metamask_svg__k)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m5.874 17.33 2.666-1.287-2.295-1.788-.371 3.075ZM11.46 16.043l2.659 1.287-.363-3.075-2.296 1.788Z",
    fill: "#E27625"
  }), /* @__PURE__ */ jsx("path", {
    d: "m14.119 17.33-2.659-1.287.217 1.727-.023.732 2.465-1.172Z",
    fill: "url(#metamask_svg__l)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m5.874 17.33 2.473 1.172-.016-.732.209-1.727-2.666 1.287Z",
    fill: "url(#metamask_svg__m)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m8.393 13.114-2.21-.648 1.56-.717.65 1.365Z",
    fill: "url(#metamask_svg__n)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m11.608 13.114.65-1.365 1.568.717-2.218.648Z",
    fill: "url(#metamask_svg__o)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m5.873 17.33.387-3.175-2.458.069 2.071 3.106ZM13.74 14.155l.379 3.175 2.079-3.106-2.458-.07ZM15.603 10.655l-4.405.2.41 2.259.649-1.365 1.569.717 1.777-1.811ZM6.183 12.466l1.56-.716.65 1.364.41-2.259-4.406-.2 1.786 1.811Z",
    fill: "#CC6228"
  }), /* @__PURE__ */ jsx("path", {
    d: "m4.397 10.655 1.847 3.6-.061-1.789-1.786-1.811ZM13.826 12.466l-.07 1.789 1.847-3.6-1.777 1.811ZM8.803 10.855l-.41 2.259.518 2.667.116-3.515-.224-1.41ZM11.197 10.855l-.216 1.403.108 3.523.518-2.667-.41-2.259Z",
    fill: "#E27525"
  }), /* @__PURE__ */ jsx("path", {
    d: "m11.607 13.114-.518 2.667.371.262 2.296-1.788.07-1.789-2.219.648Z",
    fill: "url(#metamask_svg__p)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m6.183 12.466.061 1.789 2.296 1.788.37-.262-.517-2.667-2.21-.648Z",
    fill: "url(#metamask_svg__q)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m11.654 18.502.023-.732-.2-.17H8.523l-.193.17.016.732-2.473-1.172.865.71 1.754 1.21H11.5l1.762-1.21.857-.71-2.465 1.172Z",
    fill: "#C0AC9D"
  }), /* @__PURE__ */ jsx("path", {
    d: "m11.46 16.043-.371-.262h-2.18l-.37.262-.209 1.727.193-.17h2.952l.201.17-.216-1.727Z",
    fill: "url(#metamask_svg__r)"
  }), /* @__PURE__ */ jsx("path", {
    d: "M19.343 6.909 20 3.718 19.01.75l-7.55 5.588 2.906 2.452 4.104 1.194.904-1.056-.394-.285.626-.57-.48-.37.627-.478-.41-.316Z",
    fill: "url(#metamask_svg__s)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m0 3.718.665 3.191-.425.316.633.478-.479.37.626.57-.394.286.904 1.056L5.634 8.79 8.54 6.339.99.75 0 3.718Z",
    fill: "url(#metamask_svg__t)"
  }), /* @__PURE__ */ jsx("path", {
    d: "M18.47 9.985 14.368 8.79l1.236 1.865-1.847 3.6 2.442-.03h3.648l-1.375-4.24Z",
    fill: "url(#metamask_svg__u)"
  }), /* @__PURE__ */ jsx("path", {
    d: "M18.47 9.985 14.368 8.79l1.236 1.865-1.847 3.6 2.442-.03h3.648l-1.375-4.24Z",
    fill: "url(#metamask_svg__v)"
  }), /* @__PURE__ */ jsx("path", {
    d: "M5.634 8.79 1.53 9.985l-1.367 4.24h3.64l2.442.03-1.847-3.6L5.634 8.79Z",
    fill: "url(#metamask_svg__w)"
  }), /* @__PURE__ */ jsx("path", {
    d: "M5.634 8.79 1.53 9.985l-1.367 4.24h3.64l2.442.03-1.847-3.6L5.634 8.79Z",
    fill: "url(#metamask_svg__x)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m11.2 10.856.262-4.517 1.19-3.215H7.351L8.54 6.34l.262 4.517.1 1.418.009 3.507h2.179l.008-3.507.1-1.418Z",
    fill: "url(#metamask_svg__y)"
  }), /* @__PURE__ */ jsx("path", {
    d: "m11.2 10.856.262-4.517 1.19-3.215H7.351L8.54 6.34l.262 4.517.1 1.418.009 3.507h2.179l.008-3.507.1-1.418Z",
    fill: "url(#metamask_svg__z)",
    fillOpacity: 0.6
  }), /* @__PURE__ */ jsxs("defs", {
    children: [/* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__a",
      x1: 12.175,
      y1: 6.126,
      x2: 22.215,
      y2: -4.073,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#E17726"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#E17726",
        stopOpacity: 0
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__b",
      x1: 15.174,
      y1: 6.167,
      x2: 12.531,
      y2: -2.345,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#E27625"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#FCA15C",
        stopOpacity: 0.83
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__c",
      x1: 9.488,
      y1: 6.6,
      x2: -0.395,
      y2: -3.756,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#E27625"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#E27625",
        stopOpacity: 0
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__d",
      x1: 4.93,
      y1: 6.217,
      x2: 2.222,
      y2: -2.346,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#E27625"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#FCA15C",
        stopOpacity: 0.83
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__e",
      x1: 13.124,
      y1: 14.19,
      x2: 18.739,
      y2: 22.195,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        offset: 0.256,
        stopColor: "#E27625"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#E27625",
        stopOpacity: 0
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__f",
      x1: 17.034,
      y1: 18.279,
      x2: 14.958,
      y2: 11.843,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#E27625"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#FCA15C",
        stopOpacity: 0.83
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__g",
      x1: 6.325,
      y1: 14.19,
      x2: -0.949,
      y2: 20.831,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        offset: 0.247,
        stopColor: "#E27625"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#E27625",
        stopOpacity: 0
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__h",
      x1: 3.069,
      y1: 18.279,
      x2: 0.989,
      y2: 11.846,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#E27625"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#FCA15C",
        stopOpacity: 0.83
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__i",
      x1: 5.218,
      y1: 10.079,
      x2: 13.677,
      y2: 3.122,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#E27625"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#E27625",
        stopOpacity: 0
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__j",
      x1: 6.639,
      y1: 10.557,
      x2: 3.768,
      y2: 4.201,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#E27625"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#FCA15C",
        stopOpacity: 0.83
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__k",
      x1: 13.44,
      y1: 10.553,
      x2: 10.515,
      y2: 4.15,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#E27625"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#FCA15C",
        stopOpacity: 0.83
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__l",
      x1: 12.79,
      y1: 16.043,
      x2: 15.652,
      y2: 22.446,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#D5BFB2"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#D5BFB2",
        stopOpacity: 0
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__n",
      x1: 7.288,
      y1: 11.749,
      x2: 7.288,
      y2: 13.114,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#041836"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#17396B"
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__o",
      x1: 12.717,
      y1: 11.749,
      x2: 12.717,
      y2: 13.114,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#041836"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#17396B"
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__p",
      x1: 13.518,
      y1: 12.451,
      x2: 6.482,
      y2: 20.515,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        offset: 0.2,
        stopColor: "#F5841F"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#F5841F",
        stopOpacity: 0
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__q",
      x1: 6.167,
      y1: 12.451,
      x2: 11.78,
      y2: 19.803,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        offset: 0.328,
        stopColor: "#F5841F"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#F5841F",
        stopOpacity: 0
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__r",
      x1: 10.003,
      y1: 15.781,
      x2: 10.003,
      y2: 17.77,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#041836"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#17396B"
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__s",
      x1: 13.924,
      y1: 8.012,
      x2: 19.971,
      y2: 3.831,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#592B0D"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#763E1A"
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__t",
      x1: 7.942,
      y1: 6.725,
      x2: 0.415,
      y2: 2.673,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#592B0D"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#763E1A"
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__v",
      x1: 16.855,
      y1: 13.911,
      x2: 13.945,
      y2: 6.184,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#E27625"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#FCA15C",
        stopOpacity: 0.83
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__x",
      x1: 3.258,
      y1: 13.911,
      x2: 0.345,
      y2: 6.187,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#E27625"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#FCA15C",
        stopOpacity: 0.83
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__y",
      x1: 9.962,
      y1: 3.122,
      x2: 9.962,
      y2: 28.579,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        offset: 0.268,
        stopColor: "#F5841F"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#FFC796",
        stopOpacity: 0.89
      })]
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "metamask_svg__z",
      x1: 9.993,
      y1: 15.781,
      x2: 9.993,
      y2: 3.117,
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#FFCF52",
        stopOpacity: 0
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#CB690B"
      })]
    }), /* @__PURE__ */ jsxs("radialGradient", {
      id: "metamask_svg__m",
      cx: 0,
      cy: 0,
      r: 1,
      gradientUnits: "userSpaceOnUse",
      gradientTransform: "rotate(116.98 -.498 10.363) scale(12.5928 13.6543)",
      children: [/* @__PURE__ */ jsx("stop", {
        stopColor: "#D5BFB2"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#D5BFB2",
        stopOpacity: 0
      })]
    }), /* @__PURE__ */ jsxs("radialGradient", {
      id: "metamask_svg__u",
      cx: 0,
      cy: 0,
      r: 1,
      gradientUnits: "userSpaceOnUse",
      gradientTransform: "matrix(8.62568 1.78463 -1.9886 9.61153 15.17 11.19)",
      children: [/* @__PURE__ */ jsx("stop", {
        offset: 0.264,
        stopColor: "#F5841F"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 1,
        stopColor: "#F5841F",
        stopOpacity: 0
      })]
    }), /* @__PURE__ */ jsxs("radialGradient", {
      id: "metamask_svg__w",
      cx: 0,
      cy: 0,
      r: 1,
      gradientUnits: "userSpaceOnUse",
      gradientTransform: "matrix(-14.62585 -5.37605 5.98288 -16.27676 6.878 14.19)",
      children: [/* @__PURE__ */ jsx("stop", {
        offset: 0.3,
        stopColor: "#F5841F"
      }), /* @__PURE__ */ jsx("stop", {
        offset: 0.567,
        stopColor: "#F5841F",
        stopOpacity: 0
      })]
    })]
  })]
});
const SvgMetamaskLined = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.57 11.96a.207.207 0 0 0-.02.169l1.274 3.99a.207.207 0 0 1 0 .12l-1.179 4.216a.208.208 0 0 1-.258.145l-4.098-1.17a.206.206 0 0 0-.178.031l-2.575 1.831a.207.207 0 0 1-.121.039h-2.826a.207.207 0 0 1-.122-.039l-2.574-1.831a.207.207 0 0 0-.178-.03l-4.099 1.168a.209.209 0 0 1-.258-.144l-1.18-4.215a.206.206 0 0 1 0-.12l1.274-3.99a.209.209 0 0 0-.019-.17l-.11-.188a.211.211 0 0 1-.025-.061L2.005 5.804a.208.208 0 0 1 .005-.11l.923-2.8a.208.208 0 0 1 .272-.13l5.997 2.297a.21.21 0 0 0 .074.014L12 5.081l2.724-.006c.025 0 .05-.005.074-.014l5.997-2.297a.209.209 0 0 1 .273.128l.922 2.801a.208.208 0 0 1 .006.11l-1.293 5.907a.199.199 0 0 1-.023.062l-.11.188zm-1.102-.693 1.193-5.45-.47-1.43-4.931 1.89a1.508 1.508 0 0 1-.536.098m0 0 .738.76-1.747 1.372-4.44-2.132m-.001 0a1.51 1.51 0 0 1-.533-.098l-.004-.002-4.928-1.888-.47 1.43 1.191 5.444.024.04a1.509 1.509 0 0 1 .136 1.224v.002l-1.173 3.674.797 2.848 3.036-.866a1.507 1.507 0 0 1 1.297.22l.004.002 2.286 1.626h2.13l2.288-1.628a1.506 1.506 0 0 1 1.293-.222l3.04.867.797-2.848-1.172-3.671-.001-.003a1.505 1.505 0 0 1 .137-1.227l.019-.032m1.111 4.597-.006.021.006-.021zm-9.997 4.167h.007-.007zm-7.16-4.167.006.021-.006-.02z"
  }), /* @__PURE__ */ jsx("path", {
    d: "m3.522 3.656-.898 2.277a.206.206 0 0 0-.008.13l1.376 5.253a.208.208 0 0 0 .256.148l3.596-.977a.213.213 0 0 0 .074-.037l2.542-2.005a.21.21 0 0 0-.011-.335L3.834 3.56a.208.208 0 0 0-.312.096zm16.955 0 .898 2.276a.208.208 0 0 1 .006.128l-1.375 5.253a.208.208 0 0 1-.257.148l-3.595-.976a.212.212 0 0 1-.075-.037L13.54 8.445a.208.208 0 0 1 .011-.335l6.614-4.551a.209.209 0 0 1 .312.097zM12.02 18.408l1.403-.02a.207.207 0 0 0 .197-.147.209.209 0 0 0 .007-.087l-.126-.974s-.03-.093-.065-.126l-.264-.248a.21.21 0 0 0-.14-.056h-2.067a.207.207 0 0 0-.14.056l-.265.248a.213.213 0 0 0-.065.126l-.126.974a.209.209 0 0 0 .204.235l1.402.02h.047-.001zm-1.42-4.145-.624-1.266a.265.265 0 0 0-.354-.12l-1.472.719a.266.266 0 0 0 .05.496l2.095.55a.266.266 0 0 0 .305-.38zm3.058 0 .624-1.266a.266.266 0 0 1 .354-.12l1.472.719a.266.266 0 0 1-.049.496l-2.096.55a.266.266 0 0 1-.305-.38z"
  })]
});
const SvgMinimize = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 13.875c0-.483.392-.875.875-.875h5.25c.483 0 .875.392.875.875v5.25a.875.875 0 0 1-1.75 0V14.75H4.875A.875.875 0 0 1 4 13.875zM13.875 4c.483 0 .875.392.875.875V9.25h4.375a.875.875 0 0 1 0 1.75h-5.25a.875.875 0 0 1-.875-.875v-5.25c0-.483.392-.875.875-.875z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.74 3.26a.889.889 0 0 1 0 1.257l-6.223 6.223a.889.889 0 0 1-1.257-1.257l6.223-6.223a.889.889 0 0 1 1.257 0zm-10 10a.889.889 0 0 1 0 1.257L4.517 20.74a.889.889 0 0 1-1.257-1.257l6.223-6.223a.889.889 0 0 1 1.257 0z"
  })]
});
const SvgMinusCircle = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 0C7.17 0 0 7.17 0 16s7.17 16 16 16 16-7.17 16-16S24.83 0 16 0zm6.4 14.4H9.6a1.6 1.6 0 0 0 0 3.2h12.8a1.6 1.6 0 0 0 0-3.2z"
  })]
});
const SvgMinus = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 12 2",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M5 0h2v2H5V0Z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M12 0v2H0V0h12Z"
  })]
});
const SvgMonitor = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M5.89 10.79h3.898a.47.47 0 0 0 .487-.468.47.47 0 0 0-.487-.468H5.89a.47.47 0 0 0-.488.468.47.47 0 0 0 .488.469zm0 1.718h4.71a.47.47 0 0 0 .487-.468.47.47 0 0 0-.487-.469H5.89a.47.47 0 0 0-.487.469.47.47 0 0 0 .488.468zm11.856.78h-1.787a.47.47 0 0 0-.487.469.47.47 0 0 0 .487.468h1.787a.47.47 0 0 0 .487-.468.48.48 0 0 0-.487-.469zm-3.249 0H5.89a.47.47 0 0 0-.487.469.47.47 0 0 0 .488.468h8.606a.47.47 0 0 0 .488-.468.48.48 0 0 0-.488-.469z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M21.01 4h-8.25c-.552 0-.99.421-.99.952v.453H3.795c-.439 0-.796.343-.796.765v10.912c0 .265.244.5.52.5h6.69v.514c0 .453-.113.89-.325 1.28-.016.016-.016.047-.016.063H8.684c-.13 0-.244.11-.244.234v1.093c0 .125.114.234.244.234h6.496c.13 0 .243-.11.243-.234v-1.093c0-.125-.114-.234-.243-.234h-1.365c0-.016-.016-.047-.016-.063a2.73 2.73 0 0 1-.325-1.28v-.515h6.545c.292 0 .52-.234.52-.5v-6.524h.47c.552 0 .991-.421.991-.952V4.952c0-.53-.439-.952-.99-.952zM4.461 14.928V6.81h7.307v2.794c0 .5.406.921.926.953l-.114 1.576c0 .094.049.188.146.234a.211.211 0 0 0 .098.016.25.25 0 0 0 .178-.063l1.852-1.764h4.222v4.372H4.462zm8.996-8.352c0-.219.179-.39.406-.39h3.898c.227 0 .405.171.405.39 0 .218-.178.39-.405.39h-3.898a.395.395 0 0 1-.406-.39zm5.522 1.717c0 .218-.18.39-.407.39h-4.709a.395.395 0 0 1-.406-.39c0-.219.179-.39.406-.39h4.71c.227 0 .405.171.405.39z"
  })]
});
const SvgMoreVert = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
  })]
});
const SvgMore = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
  })]
});
const SvgNetwork = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.455 4.636a.818.818 0 0 0-.819.819v3.272c0 .452.367.818.819.818h13.09a.818.818 0 0 0 .819-.818V5.455a.818.818 0 0 0-.819-.819H5.456zM3 5.455A2.455 2.455 0 0 1 5.455 3h13.09A2.455 2.455 0 0 1 21 5.455v3.272a2.454 2.454 0 0 1-2.454 2.455H5.455A2.455 2.455 0 0 1 3 8.727V5.455z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.182 17.727v-7.363h1.636v7.363h-1.636zM6.273 7.09c0-.451.366-.817.818-.817h.008a.818.818 0 1 1 0 1.636h-.008a.818.818 0 0 1-.818-.818zm3.272 0c0-.451.367-.817.819-.817h.008a.818.818 0 1 1 0 1.636h-.008a.818.818 0 0 1-.819-.818z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 19.364a.818.818 0 1 0 0-1.637.818.818 0 0 0 0 1.637zM12 21a2.454 2.454 0 1 0 0-4.909A2.454 2.454 0 0 0 12 21z"
  })]
});
const SvgOff = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M11.615 12h.77c.307 0 .615-.417.615-.833V2.833c-.077-.416-.308-.833-.615-.833h-.77c-.384 0-.615.417-.615.833v8.23c0 .52.23.937.615.937z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M9 3.512A9 9 0 1 0 21 12a9.004 9.004 0 0 0-6-8.488v2.162a7 7 0 1 1-6 0V3.512z"
  })]
});
const SvgOneinch = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 22.63",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsxs("g", {
    "data-name": "1inch-1inch-logo",
    children: [/* @__PURE__ */ jsx("path", {
      "data-name": "Path 126",
      d: "m5.715 12.468.635-4.78-5.506-3.83 5.03 1.708 1.188-1.825 4.338-2.7 9.562 5.28.5 8.056-4.26 5.933-3.367.517 1.741-3.194v-3.076l-1.266-2.4-1.286-.854-1.98 2.038v2.164L9.5 16.954l-1.962.238-.869.493-1.425-.451-.6-2.143 1.069-1.507z",
      fill: "#fff"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 127",
      d: "M14.514 3.817a10.042 10.042 0 0 0-2.2-.16 3.216 3.216 0 0 1-2.718 2.2 4.207 4.207 0 0 0 4.918-2.04z",
      fill: "#94a6c3"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 128",
      d: "M15.462 19.653a7.652 7.652 0 0 0 2.66-3.909c.02-.058.2-.16.316-.238.2-.119.4-.218.435-.378a8.372 8.372 0 0 0 .119-1.408c0-.177-.18-.357-.357-.534-.139-.119-.279-.259-.279-.357a7.542 7.542 0 0 0-2.358-4.722l-.139.139a7.405 7.405 0 0 1 2.3 4.6 1.007 1.007 0 0 0 .337.476c.139.119.3.3.3.378a8.074 8.074 0 0 1-.119 1.368c-.02.078-.2.16-.337.238-.2.1-.378.2-.415.357a7.336 7.336 0 0 1-3.017 4.11c.259-.555 1.072-2.361 1.507-3.276l-.078-2.936-2.521-2.439-1.429.2-1.568 2.541a1.521 1.521 0 0 1-.3 2.024 4.7 4.7 0 0 1-1.806 1.31l-.735-.4a7.737 7.737 0 0 1 .993-.973c.575-.476 1.15-.517 1.15-1.031.024-1.075-1.129-.779-1.129-.779l-.418.4-.177 1.47-.871 1.092-.1-.02-1.428-.317s.874-.456 1.014-.973a7.993 7.993 0 0 0-.3-2.242 2.164 2.164 0 0 1 .6.912 7.206 7.206 0 0 1 .854-1.786c.119-.078 1.725-.932 1.725-.932l-.534 1.408.4-.218.953-2.341a4.67 4.67 0 0 1 1.626-.456c1.249-.02 3.1-1.548 2.262-4.286.238.1 4.365 2.164 5.079 6.212.527 3.114-1.238 6.029-4.215 7.716z",
      fill: "#94a6c3"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 129",
      d: "M10.748 4.252a1.7 1.7 0 0 0 .279-1.33l-1.33 1.966a1.539 1.539 0 0 0 1.051-.636z",
      fill: "#1b314f"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 130",
      d: "m6.29 14.989.16-.793s-.657 1.15-.714 1.31c-.061.18.041.5.3.476a.789.789 0 0 0 .575-.674.284.284 0 0 0-.321-.319z",
      fill: "#1b314f"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 131",
      d: "M18.054 2.368s.991.041 2.02.16a10.041 10.041 0 0 0-6.3-2.361 8.6 8.6 0 0 0-4.219 1.072L10.329.01a4.112 4.112 0 0 0-4.18 2.977 16.334 16.334 0 0 1-.533-1.708 3.592 3.592 0 0 0-.852 3.752C2.92 4.355.289 3.419.187 3.402c-.139-.02-.18.041-.18.041s-.041.058.078.16c.221.173 4.38 3.252 5.293 3.848-.2.714-.2 1.051 0 1.388a1.386 1.386 0 0 1 .258 1.031c-.041.337-.4 3.256-.475 3.613s-.91 1.626-.873 2 .553 1.983 1.012 2.164a6.348 6.348 0 0 0 1.721.378.7.7 0 0 0 .455-.119c.336-.3.435-.357.672-.357h.058c.1 0 .217.02.357.02a1.5 1.5 0 0 0 1.029-.337c.435-.435 1.188-1.031 1.426-1.31a1.845 1.845 0 0 0 .377-1.408 1.889 1.889 0 0 1 .5-1.31c.377-.5 1.07-1.388 1.07-1.388a5.419 5.419 0 0 1 2.221 4.341 5.815 5.815 0 0 1-6.02 5.6 6.361 6.361 0 0 1-1.5-.177 11.664 11.664 0 0 0 3.864.714 6.428 6.428 0 0 0 3.426-.813 9.88 9.88 0 0 1-1.09 1.15h.02a8.115 8.115 0 0 0 5.507-3.572s-.139.993-.316 1.667c4.922-3.716 4.087-8.356 4.067-8.516.041.058.536.653.791.973a10.276 10.276 0 0 0-5.881-10.815zm-7.585 13.06c-.078.1-.414.4-.652.616s-.5.435-.693.636a.691.691 0 0 1-.475.119h-.595a10.53 10.53 0 0 1 1.467-1.507c.357-.238.536-.476.316-.891s-.791-.316-.791-.316a1.963 1.963 0 0 1 .635-.139 1.221 1.221 0 0 0-1.07.218c-.238.218-.2.993-.3 1.487-.1.517-.435.776-.951 1.252a.978.978 0 0 1-.635.337 6.755 6.755 0 0 1-1.012-.259 5.685 5.685 0 0 1-.574-1.47 8.064 8.064 0 0 1 .414-.854 3.742 3.742 0 0 0 .418-.953c.078-.337.336-2.422.435-3.293.258.337.615.895.533 1.252a1.678 1.678 0 0 0-.04-1.927 2.188 2.188 0 0 1-.213-1.626c.2-.674.91-2.541.91-2.541s.238.418.574.337a39.472 39.472 0 0 0 3.049-4.167 3.228 3.228 0 0 1-.041 2.779A3.265 3.265 0 0 1 9.613 5.91a2.961 2.961 0 0 0 2.1-.538c.414.973.812 1.983.832 2.123-.061.139-.852 2.045-.93 2.164a1.978 1.978 0 0 1-.516.151 2.8 2.8 0 0 0-.615.218 22.181 22.181 0 0 0-1.07 2.718 1.644 1.644 0 0 0-.971.694 2.8 2.8 0 0 1 .893-.2 1.777 1.777 0 0 1 1.348 1.289v.041a1.228 1.228 0 0 1-.216.858zm-1.861.238a1.845 1.845 0 0 0 .18-.833c.02-.139.058-.4.217-.435s.536.02.536.3c0 .259-.278.316-.475.5a9.83 9.83 0 0 0-.458.468zm7.9-3.793a9.544 9.544 0 0 0 .16-2.6 7.3 7.3 0 0 1 1.385 3.572 1.007 1.007 0 0 0 .336.476c.139.119.3.279.3.378a8.158 8.158 0 0 1-.119 1.371c-.02.058-.2.16-.336.238-.2.1-.377.2-.414.357a7.4 7.4 0 0 1-2.614 3.831c1.839-1.925 2.729-5.102 1.303-7.623zm-1.246 7.8a7.637 7.637 0 0 0 2.713-3.95c.02-.058.2-.16.316-.238.2-.1.4-.218.435-.378a8.387 8.387 0 0 0 .119-1.408c0-.177-.18-.357-.357-.534-.1-.119-.258-.259-.258-.357a7.79 7.79 0 0 0-1.623-3.95 4.1 4.1 0 0 0-2.02-3.137 3.642 3.642 0 0 1 .357 3.293 2.65 2.65 0 0 1-2.774 1.507 6.452 6.452 0 0 0-1.545 2.262 2.134 2.134 0 0 0-.991-.058c.357-.993.893-2.4.991-2.521a3.016 3.016 0 0 1 .536-.177c.377-.1.553-.16.615-.238.041-.061.238-.517.435-.993a4.463 4.463 0 0 0 .672-.061 7.4 7.4 0 0 0 .416-1.125c0-.1-.774-2.024-1.07-2.759a4.575 4.575 0 0 0 .414-.575 8.123 8.123 0 0 1 2.618 15.4z",
      fill: "#1b314f"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 132",
      d: "M9.997 8.957a.866.866 0 0 0-.517-1.388c.18-.415.435-1.248.435-1.248s-2.024 3.174-2.2 3.235-.357-.636-.357-.636c-.378 1.449.636 1.647.755 1.191a5.077 5.077 0 0 0 1.884-1.154z",
      fill: "#1b314f"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 133",
      d: "m8.267 9.73 1.031-1.766s.6.3.3.776a3.85 3.85 0 0 1-1.331.99z",
      fill: "#ffd923"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 134",
      d: "M20.999 17.908a11.624 11.624 0 0 1-1.031 1.207 10.662 10.662 0 0 0 .02-9.6c.18.18.357.378.517.555a6.282 6.282 0 0 1 .494 7.838z",
      fill: "#d82122"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 135",
      d: "M23.38 11.577a11.925 11.925 0 0 0-4.96-6.29 10.093 10.093 0 0 0-5.756-1.626h-.041a1.361 1.361 0 0 1 .3-.078 12.68 12.68 0 0 1 2.2-.456 6.529 6.529 0 0 1 5.678 1.943l.041.041a9.327 9.327 0 0 1 2.538 6.466z",
      fill: "#d82122"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 136",
      d: "M17.802 1.752a11.293 11.293 0 0 0-6.232.238 5.891 5.891 0 0 0-.3-.735c-.412.5-.85 1.092-1.126 1.47a4.032 4.032 0 0 0-1.071 1.017A4.136 4.136 0 0 1 12.329.864a8.088 8.088 0 0 1 1.429-.119 9.342 9.342 0 0 1 4.044 1.007z",
      fill: "#d82122"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 137",
      d: "M6.886 5.563c-2.32-.078-1.548-2.779-1.507-2.936 0 .02.156 2.123 1.507 2.936z",
      fill: "#d82122"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 138",
      d: "M9.163.701c-1.786 1.072-1.429 3.63-1.429 3.63C6.028 1.735 9.028.762 9.163.701z",
      fill: "#d82122"
    }), /* @__PURE__ */ jsx("path", {
      "data-name": "Path 139",
      d: "M6.243 6.277a.4.4 0 0 1 .1.538c-.078.139-.2.119-.378.041-.238-.119-1.667-.953-2.956-1.806 1.47.517 2.956 1.072 3.194 1.191l.04.036z",
      fill: "#fff"
    })]
  })]
});
const SvgPaperclip = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.256 3.68a2.47 2.47 0 0 0-1.76.74l-7.622 7.722a4.233 4.233 0 0 0-1.215 2.973c0 1.115.437 2.184 1.215 2.973a4.122 4.122 0 0 0 2.934 1.231c1.1 0 2.156-.443 2.934-1.231l6.842-6.933a.822.822 0 0 1 1.173 0 .848.848 0 0 1 0 1.189l-6.842 6.932A5.77 5.77 0 0 1 8.808 21a5.77 5.77 0 0 1-4.107-1.724A5.925 5.925 0 0 1 3 15.115c0-1.56.612-3.058 1.701-4.161l7.622-7.723A4.121 4.121 0 0 1 15.256 2c1.1 0 2.156.443 2.934 1.231a4.232 4.232 0 0 1 1.215 2.972 4.232 4.232 0 0 1-1.215 2.973l-7.63 7.722c-.467.473-1.1.739-1.76.739-.66 0-1.293-.266-1.76-.739a2.539 2.539 0 0 1-.73-1.783c0-.669.263-1.31.73-1.783l5.872-5.95a.822.822 0 0 1 1.172 0 .848.848 0 0 1 0 1.189l-5.871 5.95a.847.847 0 0 0 0 1.189.825.825 0 0 0 1.174 0l7.63-7.723a2.54 2.54 0 0 0 .73-1.784c0-.669-.263-1.31-.73-1.783a2.473 2.473 0 0 0-1.76-.74z"
  })]
});
const SvgPhone = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-5 16h.01",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
  })]
});
const SvgPin = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3.875c-1.61 0-3.163.672-4.316 1.885s-1.809 2.869-1.809 4.604c0 2.528 1.563 4.979 3.275 6.88a23.284 23.284 0 0 0 2.85 2.66 23.282 23.282 0 0 0 2.85-2.66c1.712-1.901 3.275-4.352 3.275-6.88 0-1.735-.655-3.39-1.81-4.604C15.164 4.547 13.61 3.875 12 3.875zM12 21l-.503.716-.002-.002-.006-.003-.018-.013-.065-.047a22.262 22.262 0 0 1-1.062-.837 25.003 25.003 0 0 1-2.494-2.399c-1.788-1.985-3.725-4.852-3.725-8.051 0-2.171.82-4.262 2.291-5.81C7.89 3.004 9.896 2.125 12 2.125c2.103 0 4.11.88 5.584 2.429 1.471 1.548 2.291 3.639 2.291 5.81 0 3.199-1.937 6.066-3.725 8.051a25.001 25.001 0 0 1-3.32 3.06c-.1.076-.18.135-.236.176l-.065.047-.018.013-.006.003-.002.002L12 21zm0 0 .502.716a.876.876 0 0 1-1.005 0L12 21z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 8.875a1.625 1.625 0 1 0 0 3.25 1.625 1.625 0 0 0 0-3.25zM8.625 10.5a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0z"
  })]
});
const SvgPlug = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M5.086 19.699C.971 15.455.971 8.545 5.086 4.3l.292-.3h13.244l.292.301c4.115 4.244 4.115 11.154 0 15.398l-.292.301H5.378l-.292-.301zM6.233 6.087c-2.946 3.34-2.946 8.487 0 11.826h11.534c2.946-3.34 2.946-8.487 0-11.826H6.233z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M9 8H7v5h2V8zm5 6h-4v2h4v-2zm3-6h-2v5h2V8z"
  })]
});
const SvgPlus = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M24 10H14V0h-4v10H0v4h10v10h4V14h10z"
  })]
});
const SvgPulse = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.241 3c.347 0 .654.22.764.545l4.754 14.136 1.995-5.933a.804.804 0 0 1 .763-.545h3.678A.8.8 0 0 1 22 12a.8.8 0 0 1-.805.797h-3.098l-2.575 7.658a.804.804 0 0 1-.763.545.804.804 0 0 1-.764-.545L9.241 6.319l-1.995 5.933a.804.804 0 0 1-.763.545H2.805A.801.801 0 0 1 2 12a.8.8 0 0 1 .805-.797h3.098l2.575-7.658A.804.804 0 0 1 9.241 3z"
  })]
});
const SvgReddit = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M19.522 7.196c-1.062-1.064-2.775-1.077-3.896-.069-1.305-.627-2.815-1.026-4.437-1.121.6-1.862 1.834-4.465 3.077-4.715.418-.083.874.137 1.353.657-.035.138-.061.28-.061.427a1.67 1.67 0 0 0 3.338 0c0-.921-.748-1.667-1.669-1.667-.3 0-.581.086-.825.226-.758-.753-1.558-1.055-2.386-.89-2.417.487-3.88 5.023-4.157 5.955-1.707.077-3.296.486-4.657 1.147-1.119-1.031-2.849-1.022-3.92.049C.227 8.25.207 9.942 1.189 11.064a5.787 5.787 0 0 0-.498 2.324c0 4.089 4.371 7.417 9.744 7.417s9.746-3.327 9.746-7.417c0-.831-.189-1.628-.522-2.375.938-1.12.902-2.778-.137-3.817zm-17.791.449c.775-.776 1.999-.827 2.867-.178-1.344.769-2.422 1.79-3.101 2.977-.593-.864-.52-2.046.234-2.799zm8.704 11.886c-4.673 0-8.473-2.755-8.473-6.143 0-3.385 3.8-6.142 8.473-6.142 4.674 0 8.474 2.757 8.474 6.142 0 3.39-3.8 6.143-8.474 6.143zm5.799-12.085c.868-.627 2.071-.567 2.838.2.742.74.825 1.891.27 2.749-.686-1.178-1.764-2.19-3.108-2.949zm-9.348 5.838a1.59 1.59 0 1 1 0-3.178 1.59 1.59 0 0 1 0 3.178zm8.674-1.59a1.59 1.59 0 1 1-3.178 0 1.59 1.59 0 0 1 3.178 0zm-1.338 4.218a.634.634 0 0 1-.112.893c-1.326 1.028-2.614 1.375-3.742 1.375-2.255 0-3.874-1.378-3.898-1.4a.636.636 0 0 1 .833-.959c.118.101 2.884 2.42 6.027-.02a.636.636 0 0 1 .892.111z",
    xmlns: "http://www.w3.org/2000/svg"
  })]
});
const SvgReload = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M21.795 11.175a.764.764 0 0 0-.49-.189l-.98.095C20.128 7.304 16.599 4.094 12.58 4c-.392 0-.687.283-.687.66 0 .567-.098 1.417.687 1.417 2.647 0 5.098 2.172 5.49 4.72v.378l-1.079.095c-.588 0-.882.755-.392 1.038l2.255 2.927a.92.92 0 0 0 .98 0l2.06-3.116c.195-.283.097-.66-.099-.944zm-9.831 7.409c0-.283-.295-.567-.687-.567-.588 0-1.078-.094-1.666-.283-2.157-.66-3.726-2.643-3.824-4.815h1.079c.588 0 .882-.755.392-1.038L5.1 8.859a.776.776 0 0 0-.98.095l-1.96 3.021c-.393.378 0 1.133.49 1.039l.98-.095c.196 2.832 2.058 5.476 4.803 6.514.589.19 1.079.378 1.667.473.392.094.784.094 1.176.094.393 0 .687-.283.687-.66v-.756z"
  })]
});
const SvgRoadmap = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "data-testid": "test-icon",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M17.61 11.07c.06-.11.1-.24.1-.37s-.03-.26-.1-.37l-1.27-2.26 1.27-2.26c.06-.11.1-.24.1-.36s-.03-.25-.1-.36a.7.7 0 0 0-.27-.27.787.787 0 0 0-.37-.1h-3.8v-.78c0-.26-.07-.52-.18-.76a1.976 1.976 0 0 0-1.11-1.04c-.25-.09-.51-.13-.77-.13H5.06a.694.694 0 0 0-.52.21c-.14.14-.22.33-.22.52v14.25c-.39.14-.72.39-.96.72-.23.34-.36.74-.36 1.15v.15c0 .26.05.53.15.77a2.022 2.022 0 0 0 1.08 1.09c.24.1.5.15.77.15h.14c.26 0 .52-.05.77-.15.24-.1.46-.25.65-.43a1.992 1.992 0 0 0 .58-1.42v-.15c0-.41-.13-.81-.37-1.15-.24-.33-.58-.59-.96-.72V8.66h3.11v.85a2 2 0 0 0 2.06 1.93h6c.13 0 .26-.04.37-.1.11-.07.2-.16.27-.27h-.01zM5.8 3.47h5.31c.14-.01.27.03.38.11.11.08.18.21.2.34v3.4a2.9 2.9 0 0 0-.59-.09H5.8V3.47zm7.37 2.83h2.55l-.85 1.48c-.06.11-.09.24-.09.37s.03.26.09.37l.85 1.48h-2.55V6.3zM5.66 19.03c0 .14-.06.27-.16.37-.1.1-.23.15-.37.15h-.14a.514.514 0 0 1-.52-.52v-.15c0-.07.01-.14.04-.2s.06-.12.11-.17c.05-.05.11-.09.17-.11.06-.03.13-.04.2-.04h.14c.14 0 .27.05.37.15.1.1.16.23.16.37v.15zm4.72-9.5v-.85h.72c.14-.01.27.03.38.11.11.08.18.21.2.34v.85h-.72a.551.551 0 0 1-.59-.48v.02l.01.01zm2.35 6.66a.488.488 0 0 0-.24 0c-.06.02-.11.06-.16.1l-.09.06v.08l-.11.16c-.04.09-.05.19-.06.28.03.26 0 .52-.08.77s-.2.48-.37.68c-.24.22-.55.34-.87.35H9.18c-.2 0-.38.08-.52.22s-.22.33-.22.52.08.38.22.52.33.22.52.22h1.59c.69 0 1.35-.27 1.86-.75a3.304 3.304 0 0 0 .92-2.53c0-.1-.02-.19-.05-.28a.776.776 0 0 0-.16-.24.742.742 0 0 0-.2-.16h-.41z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M12.98 14.33c-.06.07-.11.16-.14.25-.03.09-.04.19-.03.28 0 .1.04.19.08.27.05.08.11.16.18.22.11.09.25.15.39.17a.723.723 0 0 0 .8-.8.74.74 0 0 0-.16-.4.742.742 0 0 0-.79-.24c-.14.04-.26.13-.35.24l.02.01zm2.16-1.47a.69.69 0 0 0-.4.31c-.09.15-.13.33-.1.5.03.17.11.33.25.45.13.12.3.18.48.18.07.01.14.01.22 0 .1-.02.19-.07.27-.13.08-.06.15-.14.2-.22.05-.09.08-.18.09-.28a.769.769 0 0 0-.17-.56.727.727 0 0 0-.53-.25c-.1 0-.2.01-.3.05v-.03l-.01-.02zm4.63-1.16a.73.73 0 0 0-.56-.07.75.75 0 0 0-.45.35.73.73 0 0 0-.07.56c.05.19.18.35.35.45.11.06.24.09.36.09.13 0 .26-.03.37-.1.11-.07.2-.16.27-.27.05-.08.08-.18.09-.27.01-.1 0-.19-.02-.29a.906.906 0 0 0-.13-.26.674.674 0 0 0-.22-.19h.01zm-2.3.99c-.1.01-.19.04-.27.09-.08.05-.16.11-.22.19s-.1.17-.13.26c-.02.09-.03.19-.02.29.02.18.11.34.24.45.13.12.3.18.48.18h.1a.742.742 0 0 0 .63-.82.618.618 0 0 0-.09-.27.794.794 0 0 0-.19-.22.794.794 0 0 0-.26-.13c-.09-.02-.19-.03-.29-.02h.02zm2.88-2.99a.776.776 0 0 0-.24-.16.672.672 0 0 0-.42-.04c-.14.03-.27.1-.37.2-.07.07-.13.15-.17.24a.66.66 0 0 0 0 .28c-.02.09-.02.18 0 .27.04.09.1.18.17.25.13.14.32.21.51.22.09.02.19.02.28 0 .09-.04.17-.09.24-.16a.79.79 0 0 0 .22-.52c0-.11 0-.21-.04-.31s-.1-.19-.17-.26l-.01-.01z"
  })]
});
const SvgRocket = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 23",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsxs("g", {
    clipPath: "url(#rocket_svg__a)",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M20.19.455h-.56c-4.87 0-9.17 2.49-11.69 6.26l-2.55-.38c-.56-.08-1.13.11-1.52.5l-2.46 2.46c-.46.46-.63 1.11-.46 1.73.17.62.65 1.1 1.28 1.26l3.39.87v.07c-.07.04-.14.07-.2.13l-2.48 2.48a.851.851 0 0 0 .6 1.45c.22 0 .44-.08.6-.25l1.78-1.78.54.54-.59.59a.851.851 0 0 0 .6 1.45c.22 0 .44-.08.6-.25l.59-.59.54.54-1.78 1.78a.851.851 0 0 0 .6 1.45c.22 0 .44-.08.6-.25l2.48-2.48s.04-.07.06-.1h.16l.85 3.3a1.758 1.758 0 0 0 1.74 1.34c.46 0 .91-.18 1.25-.52l2.45-2.45c.4-.4.59-.97.5-1.52l-.36-2.41c3.81-2.52 6.33-6.84 6.33-11.74v-.56c0-1.61-1.31-2.92-2.92-2.92h.03Zm0 1.7c.67 0 1.22.55 1.22 1.22v.56c0 1.17-.17 2.31-.48 3.39l-4.68-4.69c1.08-.31 2.21-.48 3.39-.48h.56-.01Zm-17.53 8.48-.21.82.17-.97 2.52-2.47 1.89.28c-.5 1-.88 2.06-1.13 3.17l-3.25-.83h.01Zm12.77 7.76-2.45 2.45-.14-.04-.81-3.13c1.11-.24 2.16-.62 3.15-1.1l.25 1.83v-.01Zm-6.05-2.1-2.12-2.11c.13-4.84 3.07-8.99 7.24-10.9l5.78 5.78c-1.91 4.17-6.06 7.1-10.9 7.23Z"
    }), /* @__PURE__ */ jsx("path", {
      d: "M12.16 7.135a3.006 3.006 0 0 0 0 4.26c.59.59 1.36.88 2.13.88.77 0 1.54-.29 2.13-.88a3.024 3.024 0 0 0 0-4.26 3.006 3.006 0 0 0-4.26 0Zm3.06 3.06c-.51.51-1.35.51-1.86 0s-.51-1.35 0-1.86c.26-.26.59-.38.93-.38.34 0 .67.13.93.38.51.51.51 1.35 0 1.86ZM5.05 17.965a.816.816 0 0 0-.65 0c-.1.04-.2.1-.28.18-.07.08-.14.17-.18.28-.04.1-.07.21-.07.32 0 .22.1.44.25.6.08.08.18.14.28.19.1.04.21.06.32.06.23 0 .45-.09.6-.25a.83.83 0 0 0 .19-.27c.04-.11.07-.22.07-.33 0-.22-.1-.44-.26-.6a.712.712 0 0 0-.27-.18Z"
    })]
  }), /* @__PURE__ */ jsx("defs", {
    children: /* @__PURE__ */ jsx("clipPath", {
      id: "rocket_svg__a",
      children: /* @__PURE__ */ jsx("path", {
        fill: "#fff",
        transform: "translate(.89 .455)",
        d: "M0 0h22.22v22.12H0z"
      })
    })
  })]
});
const SvgSandbox = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 20 23",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.502.403a3 3 0 0 1 2.996 0l.002.001 3.194 1.825c.21.041.406.15.554.316L18.5 4.404c.37.214.69.503.937.848a1.004 1.004 0 0 1 .25.414A3 3 0 0 1 20 6.999V15.001a3 3 0 0 1-1.5 2.595l-.004.002-3.249 1.857a.998.998 0 0 1-.554.316L11.5 21.596l-.002.001a3.002 3.002 0 0 1-1.023.363.995.995 0 0 1-.95 0 3.001 3.001 0 0 1-1.023-.363l-.002-.001-3.193-1.825a.998.998 0 0 1-.554-.316l-3.249-1.857-.004-.002A3 3 0 0 1 0 15.001v-3.984a1 1 0 0 1 0-.036V6.999a3 3 0 0 1 .314-1.333 1.003 1.003 0 0 1 .25-.414 3 3 0 0 1 .936-.848l.004-.002 3.249-1.857a1 1 0 0 1 .553-.316L8.502.403ZM5.55 4.393 3.04 5.828 10 9.855l6.961-4.027-2.51-1.435-3.95 2.283a1 1 0 0 1-1.001 0L5.55 4.393Zm6.89-1.148L10.5 2.136a1 1 0 0 0-1 0l-.004.002L7.56 3.245 10 4.655l2.44-1.41ZM18 7.538l-7 4.049v7.991l2.5-1.428V13.6a1 1 0 0 1 .5-.866l4-2.311V7.538Zm0 5.195-2.5 1.444v2.83l2-1.143h.002a1 1 0 0 0 .498-.865v-2.266Zm-9 6.845v-7.991l-7-4.05v2.886l4 2.311a1 1 0 0 1 .5.866v4.55L9 19.578Zm-4.5-2.571v-2.83L2 12.733v2.266a1 1 0 0 0 .499.864l.001.001 2 1.143Z"
  })]
});
const SvgSandbox2 = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 23 22",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.635.245a.9.9 0 0 1 .98 0l10 6.5a.9.9 0 0 1 .41.755v7a.9.9 0 0 1-.41.755l-10 6.5a.9.9 0 0 1-.98 0l-10-6.5a.9.9 0 0 1-.41-.755v-7a.9.9 0 0 1 .41-.755l10-6.5ZM2.025 9.23l3.567 2.496a.865.865 0 0 0 .034.024l4.6 3.22v4.373l-8.2-5.33V9.229Zm10 10.113v-4.373l4.6-3.22a.81.81 0 0 0 .033-.024l3.567-2.496v4.783l-8.2 5.33Zm7.491-11.814-7.49-4.87v4.373l4.1 2.87 3.39-2.373ZM14.556 11l-3.43-2.401L7.694 11l3.43 2.401L14.555 11Zm-8.43-1.099 4.1-2.87V2.658l-7.492 4.87L6.125 9.9Z"
  })]
});
const SvgSearch = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 4.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25zM3.125 11a7.875 7.875 0 1 1 15.75 0 7.875 7.875 0 0 1-15.75 0z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.381 15.381a.875.875 0 0 1 1.238 0l4 4a.875.875 0 1 1-1.238 1.238l-4-4a.875.875 0 0 1 0-1.238z"
  })]
});
const SvgServer = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.455 19.364a.818.818 0 0 1-.819-.819v-3.272a.82.82 0 0 1 .819-.819h13.09a.82.82 0 0 1 .819.819v3.273a.818.818 0 0 1-.819.818H5.456zM3 18.545A2.455 2.455 0 0 0 5.455 21h13.09A2.454 2.454 0 0 0 21 18.546v-3.273a2.454 2.454 0 0 0-2.454-2.455H5.455A2.455 2.455 0 0 0 3 15.273v3.273zm3.273-1.636c0 .452.366.818.818.818h.008a.818.818 0 1 0 0-1.636h-.008a.818.818 0 0 0-.818.818zm-.818-7.364a.818.818 0 0 1-.819-.818V5.455a.82.82 0 0 1 .819-.819h13.09a.82.82 0 0 1 .819.819v3.272a.818.818 0 0 1-.819.818H5.456zM3 8.727a2.455 2.455 0 0 0 2.455 2.455h13.09A2.454 2.454 0 0 0 21 8.727V5.455A2.455 2.455 0 0 0 18.546 3H5.455A2.455 2.455 0 0 0 3 5.455v3.272zm3.273-1.636c0 .452.366.818.818.818h.008a.818.818 0 1 0 0-1.636h-.008a.818.818 0 0 0-.818.818z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M9.5 7.09c0 .453.366.82.818.82h.008a.818.818 0 0 0 0-1.637h-.008a.818.818 0 0 0-.818.818z"
  })]
});
const SvgShib = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24.28",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M17.59 2.145a15.524 15.524 0 0 0-1.713 2.032l-.162-.053a11.721 11.721 0 0 0-2.869-.556 22.007 22.007 0 0 0-1.743 0 10.134 10.134 0 0 0-2.843.56c-.038.015-.071.026-.105.038a15.285 15.285 0 0 0-1.769-2.017 12.3 12.3 0 0 1 10.027-.53c.349.131.691.285 1.025.451zm5.769 14.191a11.664 11.664 0 0 1-2.094 3.669 13.013 13.013 0 0 1-1.638 1.6 12.092 12.092 0 0 1-4.724 2.328 12.394 12.394 0 0 1-5.8 0 12.068 12.068 0 0 1-4.724-2.328 13.012 13.012 0 0 1-1.638-1.6A11.521 11.521 0 0 1 .646 8.766 12.19 12.19 0 0 1 1.6 6.711c.176-.3.393-.635.5-.773.359 1.543.8 2.9.965 3.389a.84.84 0 0 1-.041.082 13.535 13.535 0 0 0-1.455 5.272v.071a3.25 3.25 0 0 0 .075 1.14 7.31 7.31 0 0 0 2.5 3.389 14.415 14.415 0 0 0 7.5 3.4c2.375.161 5.88-1.225 8.214-3.25a11.724 11.724 0 0 0 1.032-1.035 5.665 5.665 0 0 0 .55-.732c-.008 0 0-.007.015-.015s.022-.019.015-.026 0-.015.015-.019.019-.011.015-.019 0-.015.015-.019a.017.017 0 0 0 .011-.022c0-.007 0-.015.007-.015s.015-.011.015-.019.008-.019.015-.019a.016.016 0 0 0 .015-.015.392.392 0 0 1 .049-.086c.056-.086.281-.486.31-.553a5.148 5.148 0 0 0 .411-1.341 3.8 3.8 0 0 0 .034-.673c0-.015 0-.041-.007-.082-.007-.075-.011-.187-.019-.3-.008-.168-.023-.4-.034-.519a10.95 10.95 0 0 0-1.418-4.551 1.305 1.305 0 0 1-.082-.157.215.215 0 0 1-.015-.03c.116-.348.591-1.8.969-3.464l.007.007.056.075c.1.131.355.519.471.706a11.466 11.466 0 0 1 1.058 9.826z",
    fill: "#F00500",
    fillOpacity: 0.7
  }), /* @__PURE__ */ jsx("path", {
    d: "M18.509 11.857a1.264 1.264 0 0 1-.364.372 6.277 6.277 0 0 1-2.388.9 2.938 2.938 0 0 1-1.236.034c-.105-.053-.12-.094-.083-.229a1.827 1.827 0 0 1 .732-.879c.2-.147 1.025-.646 1.408-.856a4.978 4.978 0 0 1 1.487-.6.765.765 0 0 1 .282 0c.068.026.143.225.173.466a6.127 6.127 0 0 1-.011.792zM9.704 13.1a.408.408 0 0 1-.263.113 4.242 4.242 0 0 1-.74-.019 7.774 7.774 0 0 1-2.257-.65 2.842 2.842 0 0 1-.777-.522l-.105-.109-.011-.143a3.936 3.936 0 0 1 .015-.777 1.02 1.02 0 0 1 .116-.331c.03-.038.03-.038.165-.038a1.626 1.626 0 0 1 .529.1 10.355 10.355 0 0 1 1.987.992 3.446 3.446 0 0 1 1.149.894.75.75 0 0 1 .192.49z",
    fill: "#806b6b"
  }), /* @__PURE__ */ jsx("path", {
    d: "M14.999 18.3c0 .011-.045.191-.1.406s-.1.387-.1.394a.644.644 0 0 1-.12 0h-.12l-.165.391c-.09.214-.173.413-.184.443l-.022.053-.079-.128-.079-.128v-1.04l-.03.008c-.064.015-.518.075-.717.094a10.228 10.228 0 0 1-2.468-.053c-.131-.019-.244-.034-.248-.03s0 .244.008.541l.011.533-.064.1c-.034.053-.068.1-.068.1s-.049-.049-.135-.222a2.548 2.548 0 0 1-.21-.571l-.026-.109-.116.008-.116.011-.03-.139a3.61 3.61 0 0 1-.041-.255l-.011-.12-.1-.086c-.056-.049-.113-.1-.124-.105a.082.082 0 0 1-.026-.064v-.045h.938l.015.049.015.049.161.008c.09 0 .376.011.631.019l.47.011.12-.188.124-.188h.158v-.782l-.206-.09a2.016 2.016 0 0 1-1.2-1.033 1.444 1.444 0 0 1-.037-.488 1.487 1.487 0 0 1 .023-.488.545.545 0 0 1 .387-.383 8.927 8.927 0 0 1 1.119-.019h1.044l.117.056a.653.653 0 0 1 .281.222.62.62 0 0 1 .117.443 3.306 3.306 0 0 1-.056.721 1.555 1.555 0 0 1-.218.432 2 2 0 0 1-.841.59l-.09.034v.788l.083.008.083.008.113.169.109.169h.5c.278 0 .522 0 .545.008.038.008.045 0 .083-.06l.045-.068h.432a1.363 1.363 0 0 1 .415.016z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M13.018 19.374c-.072.041-.12.06-.131.053s-.064-.049-.12-.09l-.1-.083-.105.113c-.229.248-.236.259-.3.263-.105.011-.128-.007-.255-.2-.068-.1-.12-.18-.12-.18s-.049-.008-.105-.011l-.1-.011-.049.1-.049.1-.086-.026a1.838 1.838 0 0 1-.2-.079l-.113-.056v-.212h2v.1c-.011.129-.002.125-.167.219z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M22.358 14.775c0-.015 0-.041-.007-.083a7.923 7.923 0 0 0-5.835 1.814 4.537 4.537 0 0 0-4.355-3.53c-3.589 0-4.919 3.53-4.919 3.53a6.44 6.44 0 0 0-5.674-1.874v.071a3.285 3.285 0 0 0 .075 1.145 7.346 7.346 0 0 0 2.5 3.406 14.365 14.365 0 0 0 7.5 3.418c2.374.161 5.876-1.232 8.209-3.267a11.742 11.742 0 0 0 1.032-1.04 5.693 5.693 0 0 0 .55-.736c-.008 0 0-.007.015-.015s.023-.019.015-.026 0-.015.015-.019.019-.011.015-.019 0-.015.015-.019a.017.017 0 0 0 .011-.022c0-.008 0-.015.007-.015s.015-.011.015-.019.007-.019.015-.019a.016.016 0 0 0 .015-.015.39.39 0 0 1 .049-.086 9.68 9.68 0 0 0 .31-.556 5.2 5.2 0 0 0 .411-1.348 4.576 4.576 0 0 0 .016-.676zm-9.345 4.582c-.071.041-.12.06-.131.053s-.064-.049-.12-.09l-.1-.083-.1.113c-.228.248-.236.259-.3.263-.1.011-.127-.007-.254-.2l-.12-.18s-.049-.007-.1-.011l-.1-.011-.049.1-.049.1-.086-.026a1.828 1.828 0 0 1-.2-.079l-.112-.056v-.214h1.988v.1c-.006.13-.002.126-.167.22zm1.869-.676c-.056.214-.1.387-.1.394a.632.632 0 0 1-.12 0h-.12l-.161.394c-.09.214-.172.413-.183.443l-.022.053-.078-.128-.079-.128v-1.034l-.03.008c-.064.015-.516.075-.714.094a10.141 10.141 0 0 1-2.456-.053 2.474 2.474 0 0 0-.247-.03s0 .244.007.541l.011.533-.064.1c-.034.053-.067.1-.067.1s-.049-.049-.135-.222a2.547 2.547 0 0 1-.209-.571l-.026-.109-.116.008-.116.011-.03-.139a3.706 3.706 0 0 1-.041-.255l-.011-.12-.1-.086c-.056-.049-.112-.1-.123-.105a.083.083 0 0 1-.026-.064v-.045h.934l.015.049.015.049.161.008c.09 0 .374.011.628.019l.467.011.12-.188.123-.188h.157v-.782l-.206-.09a2.009 2.009 0 0 1-1.2-1.033 1.442 1.442 0 0 1-.037-.488 1.5 1.5 0 0 1 .022-.488.545.545 0 0 1 .385-.383 8.877 8.877 0 0 1 1.114-.019h1.039l.116.056a.65.65 0 0 1 .28.222.623.623 0 0 1 .116.443 3.326 3.326 0 0 1-.056.721 1.562 1.562 0 0 1-.217.432 1.992 1.992 0 0 1-.837.59l-.09.034v.788l.082.008.082.007.112.169.108.169h.5c.277 0 .52 0 .542.008.037.008.045 0 .082-.06l.045-.068h.43a1.8 1.8 0 0 1 .43.015 2.592 2.592 0 0 0-.106.393z",
    fill: "#fff"
  }), /* @__PURE__ */ jsx("path", {
    d: "M1.56 14.669a3.483 3.483 0 0 0-.376.071m21.501.038a3.374 3.374 0 0 0-.334-.049",
    fill: "none"
  }), /* @__PURE__ */ jsx("path", {
    d: "M22.328 14.486a10.755 10.755 0 0 0-.034-.522 11.052 11.052 0 0 0-1.417-4.574 1.313 1.313 0 0 1-.082-.158.225.225 0 0 1-.015-.03c.116-.349.591-1.81.968-3.481.512-2.268.837-4.92-.157-5.716 0 0-1.72-.128-4.022 2.141a15.5 15.5 0 0 0-1.7 2.032l-.161-.053a11.62 11.62 0 0 0-2.856-.556 21.78 21.78 0 0 0-1.734 0 10.046 10.046 0 0 0-2.83.56l-.1.038A15.267 15.267 0 0 0 6.427 2.15C4.027-.13 2.248.002 2.248.002c-1.054.822-.7 3.594-.15 5.938.359 1.551.8 2.914.964 3.406a.865.865 0 0 1-.041.083 13.667 13.667 0 0 0-1.454 5.3 6.436 6.436 0 0 1 5.678 1.874s1.331-3.53 4.919-3.53a4.537 4.537 0 0 1 4.355 3.53 7.94 7.94 0 0 1 5.835-1.814c-.011-.077-.018-.19-.026-.303zM3.76 7.929s-1.4-3.512-1.039-5.517a1.939 1.939 0 0 1 .348-.86s1.585.158 4.142 3.012a7.3 7.3 0 0 0-1.136.74.013.013 0 0 1-.007 0 9.015 9.015 0 0 0-2.306 2.621zm5.932 5.217a.406.406 0 0 1-.262.113 4.209 4.209 0 0 1-.736-.019 7.71 7.71 0 0 1-2.246-.65 2.829 2.829 0 0 1-.774-.522l-.1-.109-.011-.143a3.943 3.943 0 0 1 .015-.777 1.021 1.021 0 0 1 .116-.331c.03-.038.03-.038.164-.038a1.612 1.612 0 0 1 .527.1 10.274 10.274 0 0 1 1.977.992 3.431 3.431 0 0 1 1.144.894.753.753 0 0 1 .188.49zm8.807-1.243a1.261 1.261 0 0 1-.363.372 6.231 6.231 0 0 1-2.377.9 2.909 2.909 0 0 1-1.23.034c-.1-.053-.12-.094-.082-.229a1.825 1.825 0 0 1 .729-.879c.2-.146 1.02-.646 1.4-.856a4.939 4.939 0 0 1 1.48-.6.756.756 0 0 1 .28 0c.067.026.142.225.172.466a6.138 6.138 0 0 1-.008.791zm-.62-6.6h-.007a6.973 6.973 0 0 0-1.1-.74c2.471-2.854 4-3.012 4-3.012a2.043 2.043 0 0 1 .336.86c.348 2.006-1 5.521-1 5.521a8.933 8.933 0 0 0-2.228-2.625z",
    fill: "#ffa409"
  }), /* @__PURE__ */ jsx("path", {
    d: "M15.864 4.178c-.008.008-.011.019-.019.026m4.924 4.959c-.019.053-.026.079-.026.079",
    fill: "none"
  }), /* @__PURE__ */ jsx("path", {
    d: "M21.107 2.409c-.293-.038-1.679-.045-3.249 2.9h-.008a7.008 7.008 0 0 0-1.1-.74c2.482-2.854 4.019-3.012 4.019-3.012a1.993 1.993 0 0 1 .338.852z",
    fill: "#ff9300",
    fillOpacity: 0.3
  }), /* @__PURE__ */ jsx("path", {
    d: "M20.101 7.93a8.913 8.913 0 0 0-2.242-2.625c1.57-2.941 2.952-2.933 3.248-2.9.352 2.013-1.006 5.525-1.006 5.525zm1.062-5.51-.056-.011z",
    fill: "#ff8300",
    fillOpacity: 0.2
  }), /* @__PURE__ */ jsx("path", {
    d: "M8.29 4.324c-.037-.053-.079-.105-.116-.158M3.062 9.308c.041.128.068.2.068.2",
    fill: "none"
  }), /* @__PURE__ */ jsx("path", {
    d: "M7.238 4.561a7.349 7.349 0 0 0-1.142.74.013.013 0 0 1-.007 0c-1.626-2.944-3.057-2.933-3.365-2.9a1.936 1.936 0 0 1 .349-.86s1.596.166 4.165 3.02z",
    fill: "#ff9300",
    fillOpacity: 0.3
  }), /* @__PURE__ */ jsx("path", {
    d: "M6.093 5.3a9 9 0 0 0-2.321 2.625s-1.4-3.511-1.044-5.521c.304-.033 1.739-.04 3.365 2.896zM2.728 2.409l-.06.011z",
    fill: "#ff8300",
    fillOpacity: 0.2
  }), /* @__PURE__ */ jsx("path", {
    d: "M16.328 9.845s-1.2.075-1.052-.864a1.241 1.241 0 0 1 1.352-1.014c.263.038 1.314.413 1.127 1.2s-.451.638-.6.676a5.952 5.952 0 0 1-.827.002zm-8.823 0s-1.2.075-1.052-.864a1.241 1.241 0 0 1 1.352-1.014c.263.038 1.314.413 1.127 1.2s-.451.638-.6.676a5.951 5.951 0 0 1-.827.002z",
    fill: "#fff"
  })]
});
const SvgSolana = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M5.25 15.956a.655.655 0 0 1 .462-.191h15.96c.292 0 .438.352.231.558l-3.152 3.15a.654.654 0 0 1-.463.192H2.328a.327.327 0 0 1-.231-.558l3.152-3.151zm0-11.765A.673.673 0 0 1 5.711 4h15.96c.292 0 .438.352.231.558l-3.152 3.15a.654.654 0 0 1-.463.192H2.328a.327.327 0 0 1-.231-.558l3.152-3.151zm13.5 5.995a.663.663 0 0 0-.462-.186H2.328c-.292 0-.438.343-.231.544l3.152 3.07a.667.667 0 0 0 .463.186h15.96c.292 0 .438-.343.231-.544l-3.152-3.07z"
  })]
});
const SvgSpeedyNode = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M14.295 20.512a.849.849 0 0 1-.424-.11l-6.858-3.957a.846.846 0 0 1-.424-.736V7.803a.845.845 0 0 1 .424-.735l6.841-3.958a.847.847 0 0 1 .847 0l6.876 3.966a.846.846 0 0 1 .423.736v7.906a.844.844 0 0 1-.423.735l-6.876 3.95a.848.848 0 0 1-.406.11zm-6.012-5.285 6.012 3.467 6.012-3.467V8.285l-6.012-3.467-6.012 3.467v6.942z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M14.295 12.606a.847.847 0 0 1-.424-.118L7.013 8.53a.846.846 0 0 1 0-1.462l6.841-3.958a.848.848 0 0 1 .847 0l6.876 3.966a.847.847 0 0 1 0 1.463L14.7 12.488a.847.847 0 0 1-.406.118zM9.13 7.803l5.165 2.977 5.165-2.977-5.165-2.985L9.13 7.803z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M14.295 20.512a.847.847 0 0 1-.847-.845V11.76a.845.845 0 0 1 1.445-.598.845.845 0 0 1 .248.598v7.906a.845.845 0 0 1-.846.845z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M14.295 12.606a.848.848 0 0 1-.787-1.173.846.846 0 0 1 .363-.409l5.589-3.221-5.606-3.222a.848.848 0 1 1 .847-1.471l6.876 3.966a.846.846 0 0 1 0 1.462l-6.876 3.95a.848.848 0 0 1-.406.118zm-11.11-.618a.848.848 0 0 1-.786-1.172.846.846 0 0 1 .363-.41l1.025-.591a.85.85 0 0 1 1.243.957.849.849 0 0 1-.397.514l-1.024.584a.847.847 0 0 1-.424.118zm0 3.382a.848.848 0 0 1-.786-1.172.846.846 0 0 1 .363-.408l1.025-.592a.85.85 0 0 1 1.243.957.849.849 0 0 1-.397.514l-1.024.583a.847.847 0 0 1-.424.119zm2.744 5.412a.847.847 0 0 1-.837-.735.845.845 0 0 1 .413-.846l1.177-.676a.847.847 0 1 1 .847 1.462l-1.177.677a.847.847 0 0 1-.423.118zM9.29 22a.847.847 0 0 1-.431-1.573l.364-.211a.847.847 0 1 1 .846 1.463l-.364.211a.847.847 0 0 1-.415.11zm-6.443-3.01a.848.848 0 0 1-.787-1.172.846.846 0 0 1 .363-.41l2.185-1.25a.848.848 0 0 1 1.24.946.846.846 0 0 1-.393.516L3.27 18.914a.849.849 0 0 1-.423.076z"
  })]
});
const SvgStar = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M11.204 2.55c.25-.734 1.341-.734 1.592 0l2.023 5.928a.833.833 0 0 0 .796.551h6.546c.811 0 1.148.988.492 1.442l-5.296 3.663a.776.776 0 0 0-.304.891l2.023 5.928c.25.734-.632 1.345-1.288.891l-5.296-3.663a.871.871 0 0 0-.984 0l-5.296 3.663c-.656.454-1.539-.157-1.288-.89l2.023-5.929a.776.776 0 0 0-.304-.89L1.347 10.47c-.656-.454-.32-1.442.492-1.442h6.546a.834.834 0 0 0 .796-.55l2.023-5.928z"
  })]
});
const SvgStars = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M7.81 2.578a.2.2 0 0 1 .38 0l1.263 3.841a.2.2 0 0 0 .128.128l3.841 1.263a.2.2 0 0 1 0 .38L9.581 9.453a.2.2 0 0 0-.128.128L8.19 13.422a.2.2 0 0 1-.38 0L6.547 9.581a.2.2 0 0 0-.128-.128L2.578 8.19a.2.2 0 0 1 0-.38l3.841-1.263a.2.2 0 0 0 .128-.128L7.81 2.578zM5.153 17.422a.2.2 0 0 1 .269-.27l1.488.752a.2.2 0 0 0 .18 0l1.489-.751a.2.2 0 0 1 .268.269l-.751 1.488a.2.2 0 0 0 0 .18l.751 1.488a.2.2 0 0 1-.268.27l-1.489-.752a.2.2 0 0 0-.18 0l-1.488.751a.2.2 0 0 1-.269-.269l.752-1.488a.2.2 0 0 0 0-.18l-.752-1.488zm14.84-5.612a.2.2 0 0 1 .268.268l-1.466 2.903a.2.2 0 0 0 0 .18l1.466 2.903a.2.2 0 0 1-.268.268l-2.903-1.465a.2.2 0 0 0-.18 0l-2.903 1.465a.2.2 0 0 1-.268-.268l1.465-2.903a.2.2 0 0 0 0-.18l-1.466-2.903a.2.2 0 0 1 .27-.268l2.902 1.465a.2.2 0 0 0 .18 0l2.903-1.465z"
  })]
});
const SvgTelegram = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M20.572 3.012a2.24 2.24 0 0 0-1.056.16c-.45.177-7.502 3.143-14.075 5.91l-2.171.914c-.841.341-1.266.896-1.266 1.643 0 .523.221 1.232 1.277 1.65l3.666 1.469c.317.95 1.054 3.159 1.239 3.746.11.348.387 1.225 1.09 1.43.143.049.294.074.447.074.443 0 .762-.206.918-.326l2.33-1.971 2.83 2.617c.109.111.686.672 1.46.672.968 0 1.701-.805 1.854-1.584.083-.427 2.813-14.129 2.813-14.127.245-1.099-.196-1.669-.479-1.912a1.59 1.59 0 0 0-.877-.365zm-.662 2.16c-.377 1.89-2.432 12.206-2.744 13.693l-4.137-3.826-2.806 2.377.777-3.041s5.363-5.428 5.686-5.744c.26-.253.314-.342.314-.43 0-.117-.06-.201-.2-.201-.124 0-.294.12-.384.176-1.143.713-6.012 3.486-8.408 4.85l-3.477-1.39 1.688-.708c4.299-1.81 11.955-5.034 13.691-5.756z"
  })]
});
const SvgTestnet = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.976 3.047c.156-.031.316-.047.479-.047h.409a.818.818 0 1 1 0 1.636h-.41a.827.827 0 0 0-.16.016.818.818 0 1 1-.318-1.605zm2.524.771c0-.452.366-.818.818-.818h.818a.818.818 0 1 1 0 1.636h-.818a.818.818 0 0 1-.818-.818zm3.273 0c0-.452.366-.818.818-.818h.818a.818.818 0 1 1 0 1.636h-.818a.818.818 0 0 1-.818-.818zm3.273 0c0-.452.366-.818.818-.818h.818a.818.818 0 1 1 0 1.636h-.818a.818.818 0 0 1-.819-.818zm3.272 0c0-.452.366-.818.818-.818h.41c.162 0 .322.016.478.047a.818.818 0 1 1-.318 1.605.826.826 0 0 0-.16-.016h-.41a.818.818 0 0 1-.818-.818zm2.674.515c.443-.088.874.2.961.643.031.156.047.316.047.479v.409a.818.818 0 1 1-1.636 0v-.41a.822.822 0 0 0-.016-.16.818.818 0 0 1 .644-.961zm-15.984 0a.818.818 0 0 1 .644.961.827.827 0 0 0-.016.16v.41a.818.818 0 1 1-1.636 0v-.41c0-.162.016-.322.047-.478a.818.818 0 0 1 .961-.643zM3.818 7.5c.452 0 .818.366.818.818v.41c0 .055.006.109.016.16a.818.818 0 1 1-1.605.317A2.463 2.463 0 0 1 3 8.727v-.409c0-.452.366-.818.818-.818zm16.364 0c.452 0 .818.366.818.818v.41c0 .162-.016.322-.047.477a.818.818 0 1 1-1.605-.317.822.822 0 0 0 .016-.16v-.41c0-.452.366-.818.818-.818zm-15.85 2.674a.818.818 0 0 1 .962-.644c.051.01.105.015.16.015h.41a.818.818 0 1 1 0 1.637h-.41c-.162 0-.322-.016-.478-.047a.818.818 0 0 1-.643-.961zm15.335 0a.818.818 0 0 1-.643.961c-.156.03-.316.047-.479.047h-.409a.818.818 0 1 1 0-1.637h.41a.835.835 0 0 0 .16-.015c.443-.088.874.2.961.644zm-12.167.19c0-.452.366-.819.818-.819h.818a.818.818 0 1 1 0 1.637h-.818a.818.818 0 0 1-.818-.818zm3.273 0c0-.452.366-.819.818-.819h.818a.818.818 0 1 1 0 1.637h-.818a.818.818 0 0 1-.818-.818zm3.273 0c0-.452.366-.819.818-.819h.818a.818.818 0 1 1 0 1.637h-.818a.818.818 0 0 1-.819-.818zm-9.07 2.501c.156-.03.316-.047.479-.047h.409a.818.818 0 1 1 0 1.636h-.41a.83.83 0 0 0-.16.016.818.818 0 1 1-.318-1.605zm2.524.771c0-.451.366-.818.818-.818h.818a.818.818 0 1 1 0 1.636h-.818a.818.818 0 0 1-.818-.818zm3.273 0c0-.451.366-.818.818-.818h.818a.818.818 0 1 1 0 1.636h-.818a.818.818 0 0 1-.818-.818zm3.273 0c0-.451.366-.818.818-.818h.818a.818.818 0 1 1 0 1.636h-.818a.818.818 0 0 1-.819-.818zm3.272 0c0-.451.366-.818.818-.818h.41c.162 0 .322.016.478.047a.818.818 0 1 1-.318 1.605.829.829 0 0 0-.16-.016h-.41a.818.818 0 0 1-.818-.818zm2.674.515c.443-.088.874.2.961.644.031.155.047.315.047.478v.409a.818.818 0 1 1-1.636 0v-.41a.82.82 0 0 0-.016-.16.818.818 0 0 1 .644-.961zm-15.984 0a.818.818 0 0 1 .644.961.825.825 0 0 0-.016.16v.41a.818.818 0 1 1-1.636 0v-.41c0-.162.016-.322.047-.477a.818.818 0 0 1 .961-.644zm-.19 3.167c.452 0 .818.366.818.818v.41c0 .055.006.109.016.16a.818.818 0 1 1-1.605.318A2.463 2.463 0 0 1 3 18.545v-.409c0-.451.366-.818.818-.818zm16.364 0c.452 0 .818.366.818.818v.41c0 .162-.016.322-.047.478a.818.818 0 1 1-1.605-.318.821.821 0 0 0 .016-.16v-.41c0-.451.366-.818.818-.818zm-15.85 2.674a.818.818 0 0 1 .962-.644c.051.01.105.016.16.016h.41a.818.818 0 1 1 0 1.636h-.41c-.162 0-.322-.016-.478-.047a.818.818 0 0 1-.643-.961zm15.335 0a.818.818 0 0 1-.643.961 2.454 2.454 0 0 1-.479.047h-.409a.818.818 0 1 1 0-1.636h.41a.835.835 0 0 0 .16-.016c.443-.088.874.2.961.644zm-12.167.19c0-.452.366-.818.818-.818h.818a.818.818 0 1 1 0 1.636h-.818a.818.818 0 0 1-.818-.818zm3.273 0c0-.452.366-.818.818-.818h.818a.818.818 0 1 1 0 1.636h-.818a.818.818 0 0 1-.818-.818zm3.273 0c0-.452.366-.818.818-.818h.818a.818.818 0 1 1 0 1.636h-.818a.818.818 0 0 1-.819-.818zM6.273 7.09c0-.451.366-.817.818-.817h.008a.818.818 0 1 1 0 1.636h-.008a.818.818 0 0 1-.818-.818zm3.272 0c0-.451.367-.817.819-.817h.008a.818.818 0 1 1 0 1.636h-.008a.818.818 0 0 1-.819-.818zm-3.272 9.82c0-.453.366-.82.818-.82h.008a.818.818 0 1 1 0 1.637h-.008a.818.818 0 0 1-.818-.818z"
  })]
});
const SvgTrending = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 14",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    clipRule: "evenodd",
    d: "M23.707.293a1 1 0 0 1 0 1.414l-9.5 9.5a1 1 0 0 1-1.414 0L8.5 6.914l-6.793 6.793a1 1 0 0 1-1.414-1.414l7.5-7.5a1 1 0 0 1 1.414 0L13.5 9.086 22.293.293a1 1 0 0 1 1.414 0z",
    fillRule: "evenodd"
  }), /* @__PURE__ */ jsx("path", {
    clipRule: "evenodd",
    d: "M16 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V2h-5a1 1 0 0 1-1-1z",
    fillRule: "evenodd"
  })]
});
const SvgTriangleDown = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "m11.646 16.646-4.792-4.792A.5.5 0 0 1 7.207 11h9.586a.5.5 0 0 1 .353.854l-4.792 4.792a.5.5 0 0 1-.708 0z"
  })]
});
const SvgTriangleUp = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "m11.646 9.354-4.792 4.792a.5.5 0 0 0 .353.854h9.586a.5.5 0 0 0 .353-.854l-4.792-4.792a.5.5 0 0 0-.708 0z"
  })]
});
const SvgTwitter = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 30 30",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M28 6.937c-.957.425-1.985.711-3.064.84a5.343 5.343 0 0 0 2.345-2.951 10.696 10.696 0 0 1-3.388 1.295 5.334 5.334 0 0 0-9.089 4.864A15.143 15.143 0 0 1 3.809 5.411a5.321 5.321 0 0 0-.721 2.683 5.33 5.33 0 0 0 2.372 4.439 5.323 5.323 0 0 1-2.416-.667v.067a5.335 5.335 0 0 0 4.279 5.23 5.336 5.336 0 0 1-2.409.092 5.34 5.34 0 0 0 4.983 3.705 10.699 10.699 0 0 1-6.625 2.284c-.43 0-.855-.025-1.273-.075a15.102 15.102 0 0 0 8.177 2.396c9.812 0 15.176-8.128 15.176-15.177 0-.231-.005-.461-.015-.69A10.855 10.855 0 0 0 28 6.937z"
  })]
});
const SvgUni = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 27.643",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1728",
    d: "M9.41 6.287c-.3-.043-.314-.057-.171-.071a4.7 4.7 0 0 1 1.34.114 5.762 5.762 0 0 1 2.937 1.967l.257.3.371-.057a7.949 7.949 0 0 1 4.562.57 5.909 5.909 0 0 1 1.026.6 1.378 1.378 0 0 1 .1.4 2.417 2.417 0 0 1-.157 1.554.417.417 0 0 0-.043.456.429.429 0 0 0 .385.242c.342 0 .7-.542.87-1.3l.071-.3.128.143a5.614 5.614 0 0 1 1.38 2.738l.029.214-.129-.185a2.407 2.407 0 0 0-.684-.727 4.282 4.282 0 0 0-2.352-.5 9.638 9.638 0 0 1-2.609-.4c-1.169-.385-1.768-.884-3.151-2.723a13.1 13.1 0 0 0-1.38-1.62 4.836 4.836 0 0 0-2.78-1.415z",
    fill: "#FF007A"
  }), /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1729",
    d: "M20.031 8.097a3.083 3.083 0 0 1 .257-1.226.982.982 0 0 1 .128-.242c.014 0-.014.1-.057.214a2.723 2.723 0 0 0-.057 1.255c.1.642.143.727.827 1.426.314.328.684.741.827.912l.242.314-.242-.228a8.677 8.677 0 0 0-1.14-.9c-.1-.057-.114-.057-.185.014s-.071.143-.071.556a3.054 3.054 0 0 1-.314 1.454c-.114.214-.128.171-.029-.071a2.077 2.077 0 0 0 .086-.884c0-1.24-.143-1.54-1.012-2.039a10.306 10.306 0 0 0-.8-.413 3.158 3.158 0 0 1-.385-.185 6.37 6.37 0 0 1 1.2.356c.5.2.585.214.642.2.04-.042.068-.156.083-.513z",
    fill: "#FF007A"
  }), /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1730",
    d: "M9.994 10.221a5.037 5.037 0 0 1-.9-3.065l.029-.3.143.029a3.345 3.345 0 0 1 .912.342c.57.342.827.813 1.069 1.982.071.342.171.741.214.87a5.146 5.146 0 0 0 .57 1.026c.157.228.057.342-.3.314a2.921 2.921 0 0 1-1.737-1.198z",
    fill: "#FF007A"
  }), /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1731",
    d: "M19.304 16.423c-2.823-1.141-3.821-2.124-3.821-3.792 0-.242.014-.442.014-.442a2.676 2.676 0 0 1 .242.185c.57.456 1.212.656 2.994.912a12.42 12.42 0 0 1 2.181.456 4.165 4.165 0 0 1 3.051 3.322 5.766 5.766 0 0 1-.082 1.783 3.574 3.574 0 0 1-.456 1.026c-.014 0-.043-.071-.043-.185a2.32 2.32 0 0 0-.827-1.611 11.392 11.392 0 0 0-3.253-1.654z",
    fill: "#FF007A"
  }), /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1732",
    d: "M17.308 16.894a3.377 3.377 0 0 0-.143-.6l-.071-.214.128.157a2.51 2.51 0 0 1 .456.827 1.78 1.78 0 0 1 .1.8 1.819 1.819 0 0 1-.1.77 2.58 2.58 0 0 1-.6.955 3.431 3.431 0 0 1-2.138.941c-.171.014-.656.057-1.083.086a8.362 8.362 0 0 0-2.424.4c-.086.029-.171.057-.185.043a3.229 3.229 0 0 1 .77-.456 7.759 7.759 0 0 1 2.138-.57 9.766 9.766 0 0 0 1.269-.257 2.465 2.465 0 0 0 1.883-2.882z",
    fill: "#FF007A"
  }), /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1733",
    d: "M18.604 19.189a3.327 3.327 0 0 1-.257-2.309c.029-.071.057-.143.086-.143a.613.613 0 0 1 .2.1c.171.114.527.314 1.44.813a7.281 7.281 0 0 1 2.267 1.668 3.526 3.526 0 0 1 .756 1.725 5.655 5.655 0 0 1-.071 1.7 4.2 4.2 0 0 1-2.067 2.737 1.981 1.981 0 0 1-.3.143 1.134 1.134 0 0 1 .128-.314 2.83 2.83 0 0 0 .128-2.21 9.077 9.077 0 0 0-1.141-2.053 13.544 13.544 0 0 1-1.169-1.857z",
    fill: "#FF007A"
  }), /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1734",
    d: "M7.985 23.551a7.75 7.75 0 0 1 3.55-1.711 5.282 5.282 0 0 1 1.839.071 3.175 3.175 0 0 1 1.8 1.155 4.257 4.257 0 0 1 .656 1.939c.057.385.128.784.143.87a1.913 1.913 0 0 0 .627 1.126 2.169 2.169 0 0 0 1.967.057.956.956 0 0 1 .242-.071 2.185 2.185 0 0 1-.613.413 2.018 2.018 0 0 1-1.026.242 2.058 2.058 0 0 1-1.739-1.069 8.012 8.012 0 0 1-.47-.941 3.428 3.428 0 0 0-1.34-1.882 1.757 1.757 0 0 0-1.668-.157 1.074 1.074 0 0 0-.371 1.668 1.458 1.458 0 0 0 .813.428.87.87 0 0 0 .984-.87.683.683 0 0 0-.47-.7c-.456-.2-.955.029-.941.47a.392.392 0 0 0 .271.385c.114.057.114.057.029.043a.529.529 0 0 1-.185-.927 1.026 1.026 0 0 1 1.525.328 1.494 1.494 0 0 1 .029.969 1.333 1.333 0 0 1-1.625.77 2.325 2.325 0 0 1-1.24-.841 3.788 3.788 0 0 0-2.808-1.44l-.279-.042z",
    fill: "#FF007A"
  }), /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1735",
    d: "M.485.613c3.319 4.034 8.44 10.307 8.696 10.649.214.285.128.556-.228.756a2.181 2.181 0 0 1-.813.228 1.029 1.029 0 0 1-.684-.3c-.128-.128-.684-.941-1.939-2.894A188.589 188.589 0 0 0 3.735 6.3c-.057-.029-.057-.029 1.682 3.079a24.954 24.954 0 0 1 1.454 2.737c0 .185-.057.285-.285.542a3.172 3.172 0 0 0-.682 1.926 5.965 5.965 0 0 1-1.625 3.279 5.867 5.867 0 0 0-.9 1.269 2.411 2.411 0 0 0-.285 1.14 3.567 3.567 0 0 0 .185 1.4 4.762 4.762 0 0 0 .684 1.34 3.317 3.317 0 0 1 .527 1.041c0 .114.029.114.542 0a5.639 5.639 0 0 0 2.794-1.369 1.29 1.29 0 0 0 .428-1.084 1.163 1.163 0 0 0-.1-.6 2.559 2.559 0 0 0-1-.969A2.253 2.253 0 0 1 5.973 18.5a2.683 2.683 0 0 1 .442-1.711 5.113 5.113 0 0 0 .627-2.252c.043-.6.114-.841.285-1.026a1.063 1.063 0 0 1 .784-.328 2.613 2.613 0 0 0 1.568-.642 1.34 1.34 0 0 0 .485-1.041l.014-.328-.185-.2C9.324 10.207.043 0 .004 0c-.018 0 .21.271.481.613zm4.377 20.272a.589.589 0 0 0-.185-.784c-.242-.157-.613-.086-.613.128a.146.146 0 0 0 .114.143c.128.071.143.143.043.3s-.1.3.029.4a.408.408 0 0 0 .612-.187z",
    fill: "#FF007A",
    fillRule: "evenodd"
  }), /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1736",
    d: "M10.641 13.386a1.266 1.266 0 0 0-.77.841 1.228 1.228 0 0 0 .071.77c.157.2.3.257.7.257.784 0 1.454-.342 1.525-.756a1.1 1.1 0 0 0-.642-1.026 1.449 1.449 0 0 0-.884-.086zm.912.713a.321.321 0 0 0-.143-.485c-.385-.242-.969-.043-.969.328 0 .185.3.385.585.385a.787.787 0 0 0 .522-.231z",
    fill: "#FF007A",
    fillRule: "evenodd"
  })]
});
const SvgUpdate = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.1 12.019c-.497 0-.894.404-.956.897a7.177 7.177 0 0 1-1.157 3.095A7.214 7.214 0 0 1 6.909 17.1a7.18 7.18 0 0 1-1.56-7.83 7.188 7.188 0 0 1 2.65-3.225A7.21 7.21 0 0 1 12 4.834V3.037a9.017 9.017 0 0 0-5 1.514 8.985 8.985 0 0 0-3.315 4.03 8.964 8.964 0 0 0 1.951 9.788 9.017 9.017 0 0 0 9.808 1.947 8.995 8.995 0 0 0 5.198-5.79 8.961 8.961 0 0 0 .313-1.609c.05-.494-.358-.898-.855-.898z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M15.399 3.437a.626.626 0 0 1 0 1.08l-2.87 2.35a.628.628 0 0 1-.948-.54v-4.7c0-.484.529-.785.947-.54l2.87 2.35z"
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.873 8.78a.886.886 0 0 1 0 1.256l-4.5 4.49a.89.89 0 0 1-1.258 0l-1.988-1.984a.886.886 0 0 1 0-1.255.89.89 0 0 1 1.258 0l1.36 1.356 3.87-3.863a.89.89 0 0 1 1.258 0z"
  })]
});
const SvgUsdc = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1737",
    d: "M12 24A12 12 0 1 0 0 12a11.971 11.971 0 0 0 12 12z",
    fill: "#2775CA"
  }), /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1738",
    d: "M15.313 13.908c0-1.759-1.055-2.362-3.166-2.613-1.508-.2-1.809-.6-1.809-1.307s.5-1.156 1.508-1.156a1.487 1.487 0 0 1 1.658 1.055.378.378 0 0 0 .352.251h.8a.344.344 0 0 0 .352-.352v-.048a2.511 2.511 0 0 0-2.262-2.061V6.471c0-.2-.151-.352-.4-.4h-.754c-.2 0-.352.151-.4.4v1.156a2.563 2.563 0 0 0-2.463 2.463c0 1.659 1.005 2.312 3.116 2.563 1.407.251 1.859.553 1.859 1.357s-.7 1.357-1.658 1.357c-1.307 0-1.759-.553-1.91-1.307a.367.367 0 0 0-.352-.3H8.93a.344.344 0 0 0-.352.352v.05a2.807 2.807 0 0 0 2.664 2.412v1.206c0 .2.151.352.4.4h.754c.2 0 .352-.151.4-.4v-1.206a2.753 2.753 0 0 0 2.517-2.666z",
    fill: "#fff"
  }), /* @__PURE__ */ jsx("path", {
    "data-name": "Path 1739",
    d: "M9.454 19.137a7.466 7.466 0 0 1 0-14.022.5.5 0 0 0 .3-.5v-.7a.379.379 0 0 0-.3-.4.3.3 0 0 0-.2.05 8.979 8.979 0 0 0 0 17.116.3.3 0 0 0 .449-.2c.05-.05.05-.1.05-.2v-.7a.665.665 0 0 0-.299-.444zm5.291-15.569a.3.3 0 0 0-.449.2c-.05.05-.05.1-.05.2v.7a.662.662 0 0 0 .3.5 7.466 7.466 0 0 1 0 14.022.5.5 0 0 0-.3.5v.7a.379.379 0 0 0 .3.4.3.3 0 0 0 .2-.05 9.017 9.017 0 0 0 0-17.166z",
    fill: "#fff"
  })]
});
const SvgUsdt = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 20.87",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    "data-name": "Path1",
    d: "M4.395.1.018 9.291a.178.178 0 0 0 .039.209l11.819 11.32a.18.18 0 0 0 .25 0L23.944 9.5a.178.178 0 0 0 .038-.208L19.606.1a.177.177 0 0 0-.161-.1H4.557a.177.177 0 0 0-.162.1z",
    fill: "#50AF95",
    fillRule: "evenodd"
  }), /* @__PURE__ */ jsx("path", {
    "data-name": "Path2",
    d: "M13.517 10.263c-.085.006-.522.033-1.5.033-.777 0-1.328-.023-1.522-.033-3-.133-5.242-.657-5.242-1.285s2.24-1.152 5.242-1.286v2.049c.2.014.758.047 1.535.047.932 0 1.4-.039 1.483-.047V7.693c3 .134 5.23.658 5.23 1.285s-2.235 1.151-5.23 1.284zm0-2.782V5.647h4.18v-2.8H6.316v2.8h4.179V7.48c-3.4.157-5.951.832-5.951 1.642s2.555 1.484 5.951 1.642v5.876h3.021v-5.879c3.389-.157 5.939-.831 5.939-1.64s-2.548-1.483-5.939-1.641zm0 0z",
    fill: "#fff",
    fillRule: "evenodd"
  })]
});
const SvgUserTeam = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 21",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  "data-testid": "test-icon",
  "aria-hidden": "true",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.464 13.98A5 5 0 0 1 5 12.514h8a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536ZM9 2.515a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM19.032 13.395a1 1 0 0 1 1.218-.719A5 5 0 0 1 24 17.514v2a1 1 0 1 1-2 0v-1.999a3 3 0 0 0-2.25-2.902 1 1 0 0 1-.718-1.218ZM15.031 1.397a1 1 0 0 1 1.217-.721 5 5 0 0 1 0 9.687 1 1 0 1 1-.496-1.937 3 3 0 0 0 0-5.813 1 1 0 0 1-.72-1.216Z"
  })]
});
const SvgUser = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M15.576 13.875c-1.165 0-1.688.625-3.576.625-1.929 0-2.45-.625-3.616-.625C5.41 13.875 3 16.258 3 19.148v.977C3 21.18 3.844 22 4.929 22H19.07c1.046 0 1.93-.82 1.93-1.875v-.977c0-2.89-2.45-5.273-5.424-5.273zm3.495 6.25H4.93v-.977c0-1.875 1.526-3.398 3.455-3.398.603 0 1.527.625 3.616.625 2.05 0 2.973-.625 3.576-.625 1.928 0 3.495 1.523 3.495 3.398v.977zM12 13.25c3.174 0 5.786-2.5 5.786-5.625C17.786 4.539 15.174 2 12 2 8.786 2 6.214 4.54 6.214 7.625c0 3.125 2.572 5.625 5.786 5.625zm0-9.375c2.09 0 3.857 1.719 3.857 3.75 0 2.07-1.768 3.75-3.857 3.75-2.13 0-3.857-1.68-3.857-3.75 0-2.031 1.728-3.75 3.857-3.75z"
  })]
});
const SvgVisa = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 46 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M23.273 12.812c-.026 2.096 1.804 3.266 3.182 3.962 1.416.714 1.892 1.171 1.887 1.81-.011.976-1.13 1.407-2.177 1.424-1.827.03-2.89-.51-3.734-.92l-.658 3.19c.847.405 2.416.758 4.043.773 3.819 0 6.317-1.952 6.33-4.98.016-3.842-5.13-4.054-5.095-5.771.012-.521.492-1.077 1.543-1.218.52-.071 1.957-.126 3.585.65l.64-3.085C31.942 8.317 30.816 8 29.415 8c-3.595 0-6.123 1.98-6.143 4.812zM38.96 8.266c-.697 0-1.285.421-1.547 1.068l-5.455 13.49h3.816l.759-2.173h4.663l.44 2.173H45L42.065 8.266H38.96zm.534 3.933 1.1 5.466H37.58l1.915-5.466zM18.646 8.266l-3.008 14.558h3.636l3.007-14.558h-3.635zm-5.38 0-3.784 9.909L7.95 9.75c-.18-.94-.89-1.484-1.677-1.484H.086L0 8.69c1.27.285 2.713.746 3.588 1.238.535.301.687.564.863 1.28l2.9 11.617h3.843l5.891-14.558h-3.818z"
  })]
});
const SvgWeb3Api = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M21.195 19.982h-6.13a.805.805 0 0 1 0-1.61h4.88l-.664-1.456a.804.804 0 0 1 1.465-.666l1.182 2.594a.806.806 0 0 1-.733 1.138z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M15.065 19.982h-6.13a.805.805 0 0 1 0-1.61h6.13a.805.805 0 0 1 0 1.61z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M15.064 19.982a.805.805 0 0 1-.793-.678l-.415-2.594a.804.804 0 1 1 1.588-.254l.415 2.594a.804.804 0 0 1-.795.932zm-6.13 0h-6.13a.805.805 0 0 1-.739-1.123l1.118-2.594a.804.804 0 1 1 1.477.636l-.634 1.473h4.908a.805.805 0 0 1 0 1.609v-.001z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M8.935 19.982a.805.805 0 0 1-.799-.913l.353-2.594a.805.805 0 0 1 1.595.217l-.352 2.594a.805.805 0 0 1-.797.696zm11.08-2.595a.805.805 0 0 1-.734-.47L18.1 14.322a.806.806 0 0 1 1.465-.669l1.182 2.595a.804.804 0 0 1-.731 1.139z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M20.014 17.387H14.65a.804.804 0 1 1 0-1.609h5.364a.804.804 0 1 1 0 1.61z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M14.65 17.387H9.287a.804.804 0 1 1 0-1.609h5.363a.804.804 0 1 1 0 1.61z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M14.65 17.387a.804.804 0 0 1-.794-.677l-.212-1.334a.805.805 0 0 1 1.59-.254l.212 1.332a.804.804 0 0 1-.797.933zm-10.728 0a.804.804 0 0 1-.738-1.122l1.119-2.595a.805.805 0 0 1 1.477.636l-1.119 2.595a.804.804 0 0 1-.74.486z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M9.286 17.387H3.922a.804.804 0 1 1 0-1.609h5.364a.804.804 0 1 1 0 1.61z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M9.287 17.387a.805.805 0 0 1-.798-.913l.18-1.332a.805.805 0 0 1 1.596.217l-.181 1.333a.806.806 0 0 1-.797.695zm9.545-2.595a.805.805 0 0 1-.733-.471l-.967-2.123h-.561a.804.804 0 1 1 0-1.61h1.078a.805.805 0 0 1 .733.47l1.181 2.596a.805.805 0 0 1-.731 1.138z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M18.832 14.792H16.14a.805.805 0 0 1 0-1.609h2.692a.805.805 0 0 1 0 1.61zm-13.792 0a.806.806 0 0 1-.737-1.122l1.118-2.595a.803.803 0 0 1 .738-.486h1.222a.804.804 0 1 1 0 1.609h-.692l-.91 2.108a.803.803 0 0 1-.739.486z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M7.733 14.792H5.041a.805.805 0 0 1 0-1.609h2.692a.805.805 0 0 1 0 1.61zm2.583-5.769A.805.805 0 0 1 9.8 7.6l2.367-1.974H9.64a.804.804 0 1 1 0-1.609h4.75a.805.805 0 0 1 .517 1.424L10.83 8.837a.804.804 0 0 1-.514.186z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M12.012 13.778c-1.448 0-2.38-.38-3.016-1.233a.804.804 0 0 1 1.288-.963c.229.305.595.587 1.728.587a1.573 1.573 0 0 0 0-3.145h-1.697a.805.805 0 1 1 0-1.609h1.697a3.182 3.182 0 1 1 0 6.363z"
  })]
});
const SvgWindows = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "M4 4v7.679h7.679V4H4zm8.321 0v7.679H20V4h-7.679zM4 12.321V20h7.679v-7.679H4zm8.321 0V20H20v-7.679h-7.679z"
  })]
});
const SvgXrp = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 19.8",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("g", {
    "data-name": "Layer 2",
    opacity: 0.7,
    children: /* @__PURE__ */ jsxs("g", {
      "data-name": "Layer 1",
      fill: "#23292F",
      children: [/* @__PURE__ */ jsx("path", {
        "data-name": "Path1",
        d: "M20.484 0h3.469l-7.219 7.153a6.742 6.742 0 0 1-9.469 0L.044 0h3.472l5.488 5.434a4.268 4.268 0 0 0 6 0z"
      }), /* @__PURE__ */ jsx("path", {
        "data-name": "Path2",
        d: "M3.471 19.8H0l7.266-7.2a6.742 6.742 0 0 1 9.469 0l7.266 7.2h-3.47L15 14.322a4.268 4.268 0 0 0-6 0z"
      })]
    })
  })]
});
const SvgYoutube = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ jsxs("svg", {
  "aria-hidden": "true",
  "data-testid": "test-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-labelledby": titleId,
  ...props,
  children: [title ? /* @__PURE__ */ jsx("title", {
    id: titleId,
    children: title
  }) : null, /* @__PURE__ */ jsx("path", {
    d: "m14.203 4.08-6.267-.222a2.15 2.15 0 0 0-1.28.342L1.34 7.526c-.407.277-.596.737-.47 1.209.12.449.515.752 1.006.79l.536.024c-.015.124-.03.248-.016.39a.724.724 0 0 0-.23.758c.06.225.227.397.442.484l-.315 3.218a.359.359 0 0 0 .451.336h1.36c.224-.06.327-.304.222-.517l-.887-3.26c.143-.183.224-.421.164-.646a.759.759 0 0 0-.47-.499c.004-.073.024-.175.051-.255l1.337.051.372 2.644c.216.808 2.293.925 4.695.282 2.38-.638 4.142-1.784 3.926-2.592l-1.023-2.47 2.249-1.396c.406-.277.619-.743.498-1.192-.126-.472-.543-.769-1.034-.806zM8.831 8.453a1.112 1.112 0 0 1-.651.175l-3.667-.125 3.58-1.729a.35.35 0 0 0 .183-.482.35.35 0 0 0-.483-.184l-4.35 2.08c-.152.065-.269.169-.391.25l-.999-.045 5.194-3.245c.184-.122.431-.188.651-.174l6.127.235-5.194 3.244z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M20.603 10.761c.11.516.22 1.318.275 2.35l.027 1.432-.027 1.432c-.055 1.089-.165 1.862-.275 2.378-.11.343-.275.63-.494.859a1.78 1.78 0 0 1-.852.516c-.495.143-1.594.229-3.352.286l-2.5.029-2.5-.029c-1.758-.057-2.884-.143-3.351-.286a1.658 1.658 0 0 1-.852-.516 1.676 1.676 0 0 1-.495-.86c-.137-.515-.22-1.288-.274-2.377l-.028-1.432c0-.401 0-.888.028-1.433.055-1.03.137-1.833.274-2.348.083-.344.248-.63.495-.889.22-.229.522-.4.852-.515.467-.115 1.593-.23 3.351-.287l2.5-.028 2.5.028c1.758.058 2.857.172 3.352.287.33.114.604.286.852.515.22.258.384.545.494.889zm-8.736 6.13 3.928-2.348-3.928-2.32v4.669z"
  })]
});



/***/ }),

/***/ 8684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addBasePath = addBasePath;
var _addPathPrefix = __webpack_require__(5786);
var _normalizeTrailingSlash = __webpack_require__(2392);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 2725:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addLocale = void 0;
var _normalizeTrailingSlash = __webpack_require__(2392);
const addLocale = (path, ...args)=>{
    if (false) {}
    return path;
};
exports.addLocale = addLocale;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 8748:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.detectDomainLocale = void 0;
const detectDomainLocale = (...args)=>{
    if (false) {}
};
exports.detectDomainLocale = detectDomainLocale;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 1210:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getDomainLocale = getDomainLocale;
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 4119:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.hasBasePath = hasBasePath;
var _pathHasPrefix = __webpack_require__(4567);
const basePath =  false || "";
function hasBasePath(path) {
    return (0, _pathHasPrefix).pathHasPrefix(path, basePath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map


/***/ }),

/***/ 8045:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = Image;
var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(6689));
var _head = _interop_require_default(__webpack_require__(4957));
var _imageConfig = __webpack_require__(5843);
var _useIntersection = __webpack_require__(7190);
var _imageConfigContext = __webpack_require__(744);
var _utils = __webpack_require__(9232);
var _normalizeTrailingSlash = __webpack_require__(2392);
function Image(_param) {
    var { src , sizes , unoptimized =false , priority =false , loading , lazyRoot =null , lazyBoundary , className , quality , width , height , style , objectFit , objectPosition , onLoadingComplete , placeholder ="empty" , blurDataURL  } = _param, all = _object_without_properties_loose(_param, [
        "src",
        "sizes",
        "unoptimized",
        "priority",
        "loading",
        "lazyRoot",
        "lazyBoundary",
        "className",
        "quality",
        "width",
        "height",
        "style",
        "objectFit",
        "objectPosition",
        "onLoadingComplete",
        "placeholder",
        "blurDataURL"
    ]);
    const configContext = (0, _react).useContext(_imageConfigContext.ImageConfigContext);
    const config = (0, _react).useMemo(()=>{
        const c = configEnv || configContext || _imageConfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return _extends({}, c, {
            allSizes,
            deviceSizes
        });
    }, [
        configContext
    ]);
    let rest = all;
    let layout = sizes ? "responsive" : "intrinsic";
    if ("layout" in rest) {
        // Override default layout if the user specified one:
        if (rest.layout) layout = rest.layout;
        // Remove property so it's not spread on <img>:
        delete rest.layout;
    }
    let loader = defaultImageLoader;
    if ("loader" in rest) {
        if (rest.loader) {
            const customImageLoader = rest.loader;
            var _tmp;
            _tmp = (obj)=>{
                const { config: _  } = obj, opts = _object_without_properties_loose(obj, [
                    "config"
                ]);
                // The config object is internal only so we must
                // not pass it to the user-defined loader()
                return customImageLoader(opts);
            }, loader = _tmp, _tmp;
        }
        // Remove property so it's not spread on <img>
        delete rest.loader;
    }
    let staticSrc = "";
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
        }
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!layout || layout !== "fill") {
            height = height || staticImageData.height;
            width = width || staticImageData.width;
            if (!staticImageData.height || !staticImageData.width) {
                throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (false) {}
    if (experimentalUnoptimized) {
        unoptimized = true;
    }
    const [blurComplete, setBlurComplete] = (0, _react).useState(false);
    const [setIntersection, isIntersected, resetIntersected] = (0, _useIntersection).useIntersection({
        rootRef: lazyRoot,
        rootMargin: lazyBoundary || "200px",
        disabled: !isLazy
    });
    const isVisible = !isLazy || isIntersected;
    const wrapperStyle = {
        boxSizing: "border-box",
        display: "block",
        overflow: "hidden",
        width: "initial",
        height: "initial",
        background: "none",
        opacity: 1,
        border: 0,
        margin: 0,
        padding: 0
    };
    const sizerStyle = {
        boxSizing: "border-box",
        display: "block",
        width: "initial",
        height: "initial",
        background: "none",
        opacity: 1,
        border: 0,
        margin: 0,
        padding: 0
    };
    let hasSizer = false;
    let sizerSvgUrl;
    const layoutStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        boxSizing: "border-box",
        padding: 0,
        border: "none",
        margin: "auto",
        display: "block",
        width: 0,
        height: 0,
        minWidth: "100%",
        maxWidth: "100%",
        minHeight: "100%",
        maxHeight: "100%",
        objectFit,
        objectPosition
    };
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign({}, style, layoutStyle);
    const blurStyle = placeholder === "blur" && !blurComplete ? {
        backgroundSize: objectFit || "cover",
        backgroundPosition: objectPosition || "0% 0%",
        filter: "blur(20px)",
        backgroundImage: `url("${blurDataURL}")`
    } : {};
    if (layout === "fill") {
        // <Image src="i.png" layout="fill" />
        wrapperStyle.display = "block";
        wrapperStyle.position = "absolute";
        wrapperStyle.top = 0;
        wrapperStyle.left = 0;
        wrapperStyle.bottom = 0;
        wrapperStyle.right = 0;
    } else if (typeof widthInt !== "undefined" && typeof heightInt !== "undefined") {
        // <Image src="i.png" width="100" height="100" />
        const quotient = heightInt / widthInt;
        const paddingTop = isNaN(quotient) ? "100%" : `${quotient * 100}%`;
        if (layout === "responsive") {
            // <Image src="i.png" width="100" height="100" layout="responsive" />
            wrapperStyle.display = "block";
            wrapperStyle.position = "relative";
            hasSizer = true;
            sizerStyle.paddingTop = paddingTop;
        } else if (layout === "intrinsic") {
            // <Image src="i.png" width="100" height="100" layout="intrinsic" />
            wrapperStyle.display = "inline-block";
            wrapperStyle.position = "relative";
            wrapperStyle.maxWidth = "100%";
            hasSizer = true;
            sizerStyle.maxWidth = "100%";
            sizerSvgUrl = `data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27${widthInt}%27%20height=%27${heightInt}%27/%3e`;
        } else if (layout === "fixed") {
            // <Image src="i.png" width="100" height="100" layout="fixed" />
            wrapperStyle.display = "inline-block";
            wrapperStyle.position = "relative";
            wrapperStyle.width = widthInt;
            wrapperStyle.height = heightInt;
        }
    } else {
        // <Image src="i.png" />
        if (false) {}
    }
    let imgAttributes = {
        src: emptyDataURL,
        srcSet: undefined,
        sizes: undefined
    };
    if (isVisible) {
        imgAttributes = generateImgAttrs({
            config,
            src,
            unoptimized,
            layout,
            width: widthInt,
            quality: qualityInt,
            sizes,
            loader
        });
    }
    let srcString = src;
    if (false) {}
    let imageSrcSetPropName = "imagesrcset";
    let imageSizesPropName = "imagesizes";
    if (true) {
        imageSrcSetPropName = "imageSrcSet";
        imageSizesPropName = "imageSizes";
    }
    const linkProps = {
        // Note: imagesrcset and imagesizes are not in the link element type with react 17.
        [imageSrcSetPropName]: imgAttributes.srcSet,
        [imageSizesPropName]: imgAttributes.sizes
    };
    const useLayoutEffect =  true ? _react.default.useEffect : 0;
    const onLoadingCompleteRef = (0, _react).useRef(onLoadingComplete);
    const previousImageSrc = (0, _react).useRef(src);
    (0, _react).useEffect(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    useLayoutEffect(()=>{
        if (previousImageSrc.current !== src) {
            resetIntersected();
            previousImageSrc.current = src;
        }
    }, [
        resetIntersected,
        src
    ]);
    const imgElementArgs = _extends({
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        layout,
        className,
        imgStyle,
        blurStyle,
        loading,
        config,
        unoptimized,
        placeholder,
        loader,
        srcString,
        onLoadingCompleteRef,
        setBlurComplete,
        setIntersection,
        isVisible,
        noscriptSizes: sizes
    }, rest);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("span", {
        style: wrapperStyle
    }, hasSizer ? /*#__PURE__*/ _react.default.createElement("span", {
        style: sizerStyle
    }, sizerSvgUrl ? /*#__PURE__*/ _react.default.createElement("img", {
        style: {
            display: "block",
            maxWidth: "100%",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0
        },
        alt: "",
        "aria-hidden": true,
        src: sizerSvgUrl
    }) : null) : null, /*#__PURE__*/ _react.default.createElement(ImageElement, Object.assign({}, imgElementArgs))), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", Object.assign({
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src
    }, linkProps))) : null);
}
const { experimentalRemotePatterns =[] , experimentalUnoptimized  } = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false} || {};
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false};
const loadedImageURLs = new Set();
const allImgs = new Map();
let perfObserver;
const emptyDataURL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
if (true) {
    global.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
const loaders = new Map([
    [
        "default",
        defaultLoader
    ],
    [
        "imgix",
        imgixLoader
    ],
    [
        "cloudinary",
        cloudinaryLoader
    ],
    [
        "akamai",
        akamaiLoader
    ],
    [
        "custom",
        customLoader
    ], 
]);
const VALID_LAYOUT_VALUES = (/* unused pure expression or super */ null && ([
    "fill",
    "fixed",
    "intrinsic",
    "responsive",
    undefined, 
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths({ deviceSizes , allSizes  }, width, layout, sizes) {
    if (sizes && (layout === "fill" || layout === "responsive")) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number" || layout === "fill" || layout === "responsive") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1])), 
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs({ config , src , unoptimized , layout , width , quality , sizes , loader  }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths , kind  } = getWidths(config, width, layout, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === "w" ? w : i + 1}${kind}`).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === "number") {
        return x;
    }
    if (typeof x === "string") {
        return parseInt(x, 10);
    }
    return undefined;
}
function defaultImageLoader(loaderProps) {
    var ref;
    const loaderKey = ((ref = loaderProps.config) == null ? void 0 : ref.loader) || "default";
    const load = loaders.get(loaderKey);
    if (load) {
        return load(loaderProps);
    }
    throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(", ")}. Received: ${loaderKey}`);
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, src, layout, placeholder, onLoadingCompleteRef, setBlurComplete) {
    if (!img || img.src === emptyDataURL || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentNode) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        loadedImageURLs.add(src);
        if (placeholder === "blur") {
            setBlurComplete(true);
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            const { naturalWidth , naturalHeight  } = img;
            // Pass back read-only primitive values but not the
            // underlying DOM element because it could be misused.
            onLoadingCompleteRef.current({
                naturalWidth,
                naturalHeight
            });
        }
        if (false) { var ref; }
    });
}
const ImageElement = (_param)=>{
    var { imgAttributes , heightInt , widthInt , qualityInt , layout , className , imgStyle , blurStyle , isLazy , placeholder , loading , srcString , config , unoptimized , loader , onLoadingCompleteRef , setBlurComplete , setIntersection , onLoad , onError , isVisible , noscriptSizes  } = _param, rest = _object_without_properties_loose(_param, [
        "imgAttributes",
        "heightInt",
        "widthInt",
        "qualityInt",
        "layout",
        "className",
        "imgStyle",
        "blurStyle",
        "isLazy",
        "placeholder",
        "loading",
        "srcString",
        "config",
        "unoptimized",
        "loader",
        "onLoadingCompleteRef",
        "setBlurComplete",
        "setIntersection",
        "onLoad",
        "onError",
        "isVisible",
        "noscriptSizes"
    ]);
    loading = isLazy ? "lazy" : loading;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
        decoding: "async",
        "data-nimg": layout,
        className: className,
        style: _extends({}, imgStyle, blurStyle),
        ref: (0, _react).useCallback((img)=>{
            if (false) {}
            setIntersection(img);
            if (img == null ? void 0 : img.complete) {
                handleLoading(img, srcString, layout, placeholder, onLoadingCompleteRef, setBlurComplete);
            }
        }, [
            setIntersection,
            srcString,
            layout,
            placeholder,
            onLoadingCompleteRef,
            setBlurComplete, 
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, srcString, layout, placeholder, onLoadingCompleteRef, setBlurComplete);
            if (onLoad) {
                onLoad(event);
            }
        },
        onError: (event)=>{
            if (placeholder === "blur") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    })), (isLazy || placeholder === "blur") && /*#__PURE__*/ _react.default.createElement("noscript", null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
        config,
        src: srcString,
        unoptimized,
        layout,
        width: widthInt,
        quality: qualityInt,
        sizes: noscriptSizes,
        loader
    }), {
        decoding: "async",
        "data-nimg": layout,
        style: imgStyle,
        className: className,
        // @ts-ignore - TODO: upgrade to `@types/react@17`
        loading: loading
    }))));
};
function normalizeSrc(src) {
    return src[0] === "/" ? src.slice(1) : src;
}
function imgixLoader({ config , src , width , quality  }) {
    // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
    const url = new URL(`${config.path}${normalizeSrc(src)}`);
    const params = url.searchParams;
    // auto params can be combined with comma separation, or reiteration
    params.set("auto", params.getAll("auto").join(",") || "format");
    params.set("fit", params.get("fit") || "max");
    params.set("w", params.get("w") || width.toString());
    if (quality) {
        params.set("q", quality.toString());
    }
    return url.href;
}
function akamaiLoader({ config , src , width  }) {
    return `${config.path}${normalizeSrc(src)}?imwidth=${width}`;
}
function cloudinaryLoader({ config , src , width , quality  }) {
    // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
    const params = [
        "f_auto",
        "c_limit",
        "w_" + width,
        "q_" + (quality || "auto")
    ];
    const paramsString = params.join(",") + "/";
    return `${config.path}${paramsString}${normalizeSrc(src)}`;
}
function customLoader({ src  }) {
    throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}
function defaultLoader({ config , src , width , quality  }) {
    if (false) {}
    if (src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        return src;
    }
    return `${(0, _normalizeTrailingSlash).normalizePathTrailingSlash(config.path)}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image.js.map


/***/ }),

/***/ 8418:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(6689));
var _router = __webpack_require__(6273);
var _addLocale = __webpack_require__(2725);
var _routerContext = __webpack_require__(4964);
var _appRouterContext = __webpack_require__(3280);
var _useIntersection = __webpack_require__(7190);
var _getDomainLocale = __webpack_require__(1210);
var _addBasePath = __webpack_require__(8684);
// @ts-ignore useTransition exist
const hasUseTransition = typeof _react.default.useTransition !== "undefined";
const prefetched = {};
function prefetch(router, href, as, options) {
    if (true) return;
    if (!(0, _router).isLocalURL(href)) return;
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    router.prefetch(href, as, options).catch((err)=>{
        if (false) {}
    });
    const curLocale = options && typeof options.locale !== "undefined" ? options.locale : router && router.locale;
    // Join on an invalid URI character
    prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")] = true;
}
function isModifiedEvent(event) {
    const { target  } = event.currentTarget;
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, soft, shallow, scroll, locale, startTransition) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an AppRouterInstance, then it'll have `softPush` and
        // `softReplace`.
        if ("softPush" in router && "softReplace" in router) {
            // If we're doing a soft navigation, use the soft variants of
            // replace/push.
            const method = soft ? replace ? "softReplace" : "softPush" : replace ? "replace" : "push";
            router[method](href);
        } else {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll
            });
        }
    };
    if (startTransition) {
        startTransition(navigate);
    } else {
        navigate();
    }
}
const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    if (false) {}
    let children;
    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp , passHref , replace , soft , shallow , scroll , locale , onClick , onMouseEnter , onTouchStart , legacyBehavior =Boolean(false) !== true  } = props, restProps = _object_without_properties_loose(props, [
        "href",
        "as",
        "children",
        "prefetch",
        "passHref",
        "replace",
        "soft",
        "shallow",
        "scroll",
        "locale",
        "onClick",
        "onMouseEnter",
        "onTouchStart",
        "legacyBehavior"
    ]);
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const p = prefetchProp !== false;
    const [, /* isPending */ startTransition] = hasUseTransition ? // @ts-ignore useTransition exists
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react.default.useTransition() : [];
    let router = _react.default.useContext(_routerContext.RouterContext);
    // TODO-APP: type error. Remove `as any`
    const appRouter = _react.default.useContext(_appRouterContext.AppRouterContext);
    if (appRouter) {
        router = appRouter;
    }
    const { href , as  } = _react.default.useMemo(()=>{
        const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _router).resolveHref(router, asProp) : resolvedAs || resolvedHref
        };
    }, [
        router,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useIntersection).useIntersection({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    _react.default.useEffect(()=>{
        const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
        const curLocale = typeof locale !== "undefined" ? locale : router && router.locale;
        const isPrefetched = prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")];
        if (shouldPrefetch && !isPrefetched) {
            prefetch(router, href, as, {
                locale: curLocale
            });
        }
    }, [
        as,
        href,
        isVisible,
        locale,
        p,
        router
    ]);
    const childProps = {
        ref: setRef,
        onClick: (e)=>{
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!e.defaultPrevented) {
                linkClicked(e, router, href, as, replace, soft, shallow, scroll, locale, appRouter ? startTransition : undefined);
            }
        },
        onMouseEnter: (e)=>{
            if (!legacyBehavior && typeof onMouseEnter === "function") {
                onMouseEnter(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if ((0, _router).isLocalURL(href)) {
                prefetch(router, href, as, {
                    priority: true
                });
            }
        },
        onTouchStart: (e)=>{
            if (!legacyBehavior && typeof onTouchStart === "function") {
                onTouchStart(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if ((0, _router).isLocalURL(href)) {
                prefetch(router, href, as, {
                    priority: true
                });
            }
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user
    if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : router && router.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = router && router.isLocaleDomain && (0, _getDomainLocale).getDomainLocale(as, curLocale, router.locales, router.domainLocales);
        childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, router && router.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", Object.assign({}, restProps, childProps), children);
});
var _default = Link;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 2392:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizePathTrailingSlash = void 0;
var _removeTrailingSlash = __webpack_require__(3297);
var _parsePath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/")) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    if (false) {}
    return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
};
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 9320:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removeBasePath = removeBasePath;
var _hasBasePath = __webpack_require__(4119);
const basePath =  false || "";
function removeBasePath(path) {
    if (false) {}
    path = path.slice(basePath.length);
    if (!path.startsWith("/")) path = `/${path}`;
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map


/***/ }),

/***/ 5776:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removeLocale = removeLocale;
var _parsePath = __webpack_require__(8854);
function removeLocale(path, locale) {
    if (false) {}
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-locale.js.map


/***/ }),

/***/ 2669:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _getAssetPathFromRoute = _interop_require_default(__webpack_require__(9565));
var _trustedTypes = __webpack_require__(4991);
var _requestIdleCallback = __webpack_require__(9311);
// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.
const MS_MAX_IDLE_DELAY = 3800;
function withFuture(key, map, generator) {
    let entry = map.get(key);
    if (entry) {
        if ("future" in entry) {
            return entry.future;
        }
        return Promise.resolve(entry);
    }
    let resolver;
    const prom = new Promise((resolve)=>{
        resolver = resolve;
    });
    map.set(key, entry = {
        resolve: resolver,
        future: prom
    });
    return generator ? generator() // eslint-disable-next-line no-sequences
    .then((value)=>(resolver(value), value)).catch((err)=>{
        map.delete(key);
        throw err;
    }) : prom;
}
function hasPrefetch(link) {
    try {
        link = document.createElement("link");
        return(// with relList.support
        (!!window.MSInputMethodContext && !!document.documentMode) || link.relList.supports("prefetch"));
    } catch (e) {
        return false;
    }
}
const canPrefetch = hasPrefetch();
function prefetchViaDom(href, as, link) {
    return new Promise((res, rej)=>{
        const selector = `
      link[rel="prefetch"][href^="${href}"],
      link[rel="preload"][href^="${href}"],
      script[src^="${href}"]`;
        if (document.querySelector(selector)) {
            return res();
        }
        link = document.createElement("link");
        // The order of property assignment here is intentional:
        if (as) link.as = as;
        link.rel = `prefetch`;
        link.crossOrigin = undefined;
        link.onload = res;
        link.onerror = rej;
        // `href` should always be last:
        link.href = href;
        document.head.appendChild(link);
    });
}
const ASSET_LOAD_ERROR = Symbol("ASSET_LOAD_ERROR");
function markAssetError(err) {
    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}
function isAssetError(err) {
    return err && ASSET_LOAD_ERROR in err;
}
function appendScript(src, script) {
    return new Promise((resolve, reject)=>{
        script = document.createElement("script");
        // The order of property assignment here is intentional.
        // 1. Setup success/failure hooks in case the browser synchronously
        //    executes when `src` is set.
        script.onload = resolve;
        script.onerror = ()=>reject(markAssetError(new Error(`Failed to load script: ${src}`)));
        // 2. Configure the cross-origin attribute before setting `src` in case the
        //    browser begins to fetch.
        script.crossOrigin = undefined;
        // 3. Finally, set the source and inject into the DOM in case the child
        //    must be appended for fetching to start.
        script.src = src;
        document.body.appendChild(script);
    });
}
// We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.
let devBuildPromise;
// Resolve a promise that times out after given amount of milliseconds.
function resolvePromiseWithTimeout(p, ms, err) {
    return new Promise((resolve, reject)=>{
        let cancelled = false;
        p.then((r)=>{
            // Resolved, cancel the timeout
            cancelled = true;
            resolve(r);
        }).catch(reject);
        // We wrap these checks separately for better dead-code elimination in
        // production bundles.
        if (false) {}
        if (true) {
            (0, _requestIdleCallback).requestIdleCallback(()=>setTimeout(()=>{
                    if (!cancelled) {
                        reject(err);
                    }
                }, ms));
        }
    });
}
function getClientBuildManifest() {
    if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
    }
    const onBuildManifest = new Promise((resolve)=>{
        // Mandatory because this is not concurrent safe:
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = ()=>{
            resolve(self.__BUILD_MANIFEST);
            cb && cb();
        };
    });
    return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error("Failed to load client build manifest")));
}
function getFilesForRoute(assetPrefix, route) {
    if (false) {}
    return getClientBuildManifest().then((manifest)=>{
        if (!(route in manifest)) {
            throw markAssetError(new Error(`Failed to lookup route: ${route}`));
        }
        const allFiles = manifest[route].map((entry)=>assetPrefix + "/_next/" + encodeURI(entry));
        return {
            scripts: allFiles.filter((v)=>v.endsWith(".js")).map((v)=>(0, _trustedTypes).__unsafeCreateTrustedScriptURL(v)),
            css: allFiles.filter((v)=>v.endsWith(".css"))
        };
    });
}
function createRouteLoader(assetPrefix) {
    const entrypoints = new Map();
    const loadedScripts = new Map();
    const styleSheets = new Map();
    const routes = new Map();
    function maybeExecuteScript(src) {
        // With HMR we might need to "reload" scripts when they are
        // disposed and readded. Executing scripts twice has no functional
        // differences
        if (true) {
            let prom = loadedScripts.get(src.toString());
            if (prom) {
                return prom;
            }
            // Skip executing script if it's already in the DOM:
            if (document.querySelector(`script[src^="${src}"]`)) {
                return Promise.resolve();
            }
            loadedScripts.set(src.toString(), prom = appendScript(src));
            return prom;
        } else {}
    }
    function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
            return prom;
        }
        styleSheets.set(href, prom = fetch(href).then((res)=>{
            if (!res.ok) {
                throw new Error(`Failed to load stylesheet: ${href}`);
            }
            return res.text().then((text)=>({
                    href: href,
                    content: text
                }));
        }).catch((err)=>{
            throw markAssetError(err);
        }));
        return prom;
    }
    return {
        whenEntrypoint (route) {
            return withFuture(route, entrypoints);
        },
        onEntrypoint (route, execute) {
            (execute ? Promise.resolve().then(()=>execute()).then((exports1)=>({
                    component: exports1 && exports1.default || exports1,
                    exports: exports1
                }), (err)=>({
                    error: err
                })) : Promise.resolve(undefined)).then((input)=>{
                const old = entrypoints.get(route);
                if (old && "resolve" in old) {
                    if (input) {
                        entrypoints.set(route, input);
                        old.resolve(input);
                    }
                } else {
                    if (input) {
                        entrypoints.set(route, input);
                    } else {
                        entrypoints.delete(route);
                    }
                    // when this entrypoint has been resolved before
                    // the route is outdated and we want to invalidate
                    // this cache entry
                    routes.delete(route);
                }
            });
        },
        loadRoute (route, prefetch) {
            return withFuture(route, routes, ()=>{
                let devBuildPromiseResolve;
                if (false) {}
                return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({ scripts , css  })=>{
                    return Promise.all([
                        entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                        Promise.all(css.map(fetchStyleSheet)), 
                    ]);
                }).then((res)=>{
                    return this.whenEntrypoint(route).then((entrypoint)=>({
                            entrypoint,
                            styles: res[1]
                        }));
                }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({ entrypoint , styles  })=>{
                    const res = Object.assign({
                        styles: styles
                    }, entrypoint);
                    return "error" in entrypoint ? entrypoint : res;
                }).catch((err)=>{
                    if (prefetch) {
                        // we don't want to cache errors during prefetch
                        throw err;
                    }
                    return {
                        error: err
                    };
                }).finally(()=>{
                    return devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve();
                });
            });
        },
        prefetch (route) {
            // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
            // License: Apache 2.0
            let cn;
            if (cn = navigator.connection) {
                // Don't prefetch if using 2G or if Save-Data is enabled.
                if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
            }
            return getFilesForRoute(assetPrefix, route).then((output)=>Promise.all(canPrefetch ? output.scripts.map((script)=>prefetchViaDom(script.toString(), "script")) : [])).then(()=>{
                (0, _requestIdleCallback).requestIdleCallback(()=>this.loadRoute(route, true).catch(()=>{}));
            }).catch(()=>{});
        }
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-loader.js.map


/***/ }),

/***/ 4991:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.__unsafeCreateTrustedScriptURL = __unsafeCreateTrustedScriptURL;
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */ let policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */ function getPolicy() {
    if (typeof policy === "undefined" && "undefined" !== "undefined") { var ref; }
    return policy;
}
function __unsafeCreateTrustedScriptURL(url) {
    var ref;
    return ((ref = getPolicy()) == null ? void 0 : ref.createScriptURL(url)) || url;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=trusted-types.js.map


/***/ }),

/***/ 7190:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useIntersection = useIntersection;
var _react = __webpack_require__(6689);
var _requestIdleCallback = __webpack_require__(9311);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
function useIntersection({ rootRef , rootMargin , disabled  }) {
    const isDisabled = disabled || !hasIntersectionObserver;
    const unobserve = (0, _react).useRef();
    const [visible, setVisible] = (0, _react).useState(false);
    const [element, setElement] = (0, _react).useState(null);
    (0, _react).useEffect(()=>{
        if (hasIntersectionObserver) {
            if (unobserve.current) {
                unobserve.current();
                unobserve.current = undefined;
            }
            if (isDisabled || visible) return;
            if (element && element.tagName) {
                unobserve.current = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
            }
            return ()=>{
                unobserve.current == null ? void 0 : unobserve.current();
                unobserve.current = undefined;
            };
        } else {
            if (!visible) {
                const idleCallback = (0, _requestIdleCallback).requestIdleCallback(()=>setVisible(true));
                return ()=>(0, _requestIdleCallback).cancelIdleCallback(idleCallback);
            }
        }
    }, [
        element,
        isDisabled,
        rootMargin,
        rootRef,
        visible
    ]);
    const resetVisible = (0, _react).useCallback(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
const observers = new Map();
const idList = [];
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 6273:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.createKey = createKey;
exports["default"] = void 0;
var _async_to_generator = (__webpack_require__(932)/* ["default"] */ .Z);
var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);
var _normalizeTrailingSlash = __webpack_require__(2392);
var _removeTrailingSlash = __webpack_require__(3297);
var _routeLoader = __webpack_require__(2669);
var _script = __webpack_require__(699);
var _isError = _interop_require_wildcard(__webpack_require__(676));
var _denormalizePagePath = __webpack_require__(4406);
var _normalizeLocalePath = __webpack_require__(4014);
var _mitt = _interop_require_default(__webpack_require__(8020));
var _utils = __webpack_require__(9232);
var _isDynamic = __webpack_require__(1428);
var _parseRelativeUrl = __webpack_require__(1292);
var _querystring = __webpack_require__(979);
var _resolveRewrites = _interop_require_default(__webpack_require__(6052));
var _routeMatcher = __webpack_require__(4226);
var _routeRegex = __webpack_require__(5052);
var _formatUrl = __webpack_require__(3938);
var _detectDomainLocale = __webpack_require__(8748);
var _parsePath = __webpack_require__(8854);
var _addLocale = __webpack_require__(2725);
var _removeLocale = __webpack_require__(5776);
var _removeBasePath = __webpack_require__(9320);
var _addBasePath = __webpack_require__(8684);
var _hasBasePath = __webpack_require__(4119);
var _getNextPathnameInfo = __webpack_require__(5789);
var _formatNextPathnameInfo = __webpack_require__(299);
var _compareStates = __webpack_require__(6220);
function buildCancellationError() {
    return Object.assign(new Error("Route Cancelled"), {
        cancelled: true
    });
}
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils).isAbsoluteUrl(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils).getLocationOrigin();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasBasePath).hasBasePath(resolved.pathname);
    } catch (_) {
        return false;
    }
}
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = "";
    const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : "") || // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || "";
        const { repeat , optional  } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
            replaced = `${!value ? "/" : ""}[${replaced}]`;
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
    })) {
        interpolatedRoute = "" // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
}
function omit(object, keys) {
    const omitted = {};
    Object.keys(object).forEach((key)=>{
        if (!keys.includes(key)) {
            omitted[key] = object[key];
        }
    });
    return omitted;
}
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === "string" ? href : (0, _formatUrl).formatWithValidation(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split("?");
    if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
        const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!isLocalURL(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL("/", "http://n");
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
            const { result , params  } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formatUrl).formatWithValidation({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: omit(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_1) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
function stripOrigin(url) {
    const origin = (0, _utils).getLocationOrigin();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
}
function prepareUrlAs(router, url, as) {
    // If url and as provided as an object representation,
    // we'll format them into the string version here.
    let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
    const origin = (0, _utils).getLocationOrigin();
    const hrefHadOrigin = resolvedHref.startsWith(origin);
    const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    const preparedUrl = hrefHadOrigin ? resolvedHref : (0, _addBasePath).addBasePath(resolvedHref);
    const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
    return {
        url: preparedUrl,
        as: asHadOrigin ? preparedAs : (0, _addBasePath).addBasePath(preparedAs)
    };
}
function resolveDynamicRoute(pathname, pages) {
    const cleanPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));
    if (cleanPathname === "/404" || cleanPathname === "/_error") {
        return pathname;
    }
    // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
        // eslint-disable-next-line array-callback-return
        pages.some((page)=>{
            if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
                pathname = page;
                return true;
            }
        });
    }
    return (0, _removeTrailingSlash).removeTrailingSlash(pathname);
}
const manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
const SSG_DATA_NOT_FOUND = Symbol("SSG_DATA_NOT_FOUND");
function fetchRetry(url, attempts, options) {
    return fetch(url, {
        // Cookies are required to be present for Next.js' SSG "Preview Mode".
        // Cookies may also be required for `getServerSideProps`.
        //
        // > `fetch` won’t send cookies, unless you set the credentials init
        // > option.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        //
        // > For maximum browser compatibility when it comes to sending &
        // > receiving cookies, always supply the `credentials: 'same-origin'`
        // > option instead of relying on the default.
        // https://github.com/github/fetch#caveats
        credentials: "same-origin",
        method: options.method || "GET",
        headers: Object.assign({}, options.headers, {
            "x-nextjs-data": "1"
        })
    }).then((response)=>{
        return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
    });
}
const backgroundCache = {};
function fetchNextData({ dataHref , inflightCache , isPrefetch , hasMiddleware , isServerRender , parseJSON , persistCache , isBackground , unstable_skipClientCache  }) {
    const { href: cacheKey  } = new URL(dataHref, window.location.href);
    var ref1;
    const getData = (params)=>{
        return fetchRetry(dataHref, isServerRender ? 3 : 1, {
            headers: isPrefetch ? {
                purpose: "prefetch"
            } : {},
            method: (ref1 = params == null ? void 0 : params.method) != null ? ref1 : "GET"
        }).then((response)=>{
            if (response.ok && (params == null ? void 0 : params.method) === "HEAD") {
                return {
                    dataHref,
                    response,
                    text: "",
                    json: {}
                };
            }
            return response.text().then((text)=>{
                if (!response.ok) {
                    /**
             * When the data response is a redirect because of a middleware
             * we do not consider it an error. The headers must bring the
             * mapped location.
             * TODO: Change the status code in the handler.
             */ if (hasMiddleware && [
                        301,
                        302,
                        307,
                        308
                    ].includes(response.status)) {
                        return {
                            dataHref,
                            response,
                            text,
                            json: {}
                        };
                    }
                    if (!hasMiddleware && response.status === 404) {
                        var ref;
                        if ((ref = tryToParseAsJSON(text)) == null ? void 0 : ref.notFound) {
                            return {
                                dataHref,
                                json: {
                                    notFound: SSG_DATA_NOT_FOUND
                                },
                                response,
                                text
                            };
                        }
                    }
                    const error = new Error(`Failed to load static props`);
                    /**
             * We should only trigger a server-side transition if this was
             * caused on a client-side transition. Otherwise, we'd get into
             * an infinite loop.
             */ if (!isServerRender) {
                        (0, _routeLoader).markAssetError(error);
                    }
                    throw error;
                }
                return {
                    dataHref,
                    json: parseJSON ? tryToParseAsJSON(text) : null,
                    response,
                    text
                };
            });
        }).then((data)=>{
            if (!persistCache || "production" !== "production" || data.response.headers.get("x-middleware-cache") === "no-cache") {
                delete inflightCache[cacheKey];
            }
            return data;
        }).catch((err)=>{
            delete inflightCache[cacheKey];
            throw err;
        });
    };
    // when skipping client cache we wait to update
    // inflight cache until successful data response
    // this allows racing click event with fetching newer data
    // without blocking navigation when stale data is available
    if (unstable_skipClientCache && persistCache) {
        return getData({}).then((data)=>{
            inflightCache[cacheKey] = Promise.resolve(data);
            return data;
        });
    }
    if (inflightCache[cacheKey] !== undefined) {
        return inflightCache[cacheKey];
    }
    return inflightCache[cacheKey] = getData(isBackground ? {
        method: "HEAD"
    } : {});
}
function tryToParseAsJSON(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        return null;
    }
}
function createKey() {
    return Math.random().toString(36).slice(2, 10);
}
function handleHardNavigation({ url , router  }) {
    // ensure we don't trigger a hard navigation to the same
    // URL as this can end up with an infinite refresh
    if (url === (0, _addBasePath).addBasePath((0, _addLocale).addLocale(router.asPath, router.locale))) {
        throw new Error(`Invariant: attempted to hard navigate to the same URL ${url} ${location.href}`);
    }
    window.location.href = url;
}
const getCancelledHandler = ({ route , router  })=>{
    let cancelled = false;
    const cancel = router.clc = ()=>{
        cancelled = true;
    };
    const handleCancelled = ()=>{
        if (cancelled) {
            const error = new Error(`Abort fetching component for route: "${route}"`);
            error.cancelled = true;
            throw error;
        }
        if (cancel === router.clc) {
            router.clc = null;
        }
    };
    return handleCancelled;
};
class Router {
    reload() {
        window.location.reload();
    }
    /**
   * Go back in history
   */ back() {
        window.history.back();
    }
    /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ push(url, as, options = {}) {
        if (false) {}
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change("pushState", url, as, options);
    }
    /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ replace(url, as, options = {}) {
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change("replaceState", url, as, options);
    }
    change(method, url, as, options, forcedScroll) {
        var _this = this;
        return _async_to_generator(function*() {
            if (!isLocalURL(url)) {
                handleHardNavigation({
                    url,
                    router: _this
                });
                return false;
            }
            // WARNING: `_h` is an internal option for handing Next.js client-side
            // hydration. Your app should _never_ use this property. It may change at
            // any time without notice.
            const isQueryUpdating = options._h;
            const shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (0, _parsePath).parsePath(url).pathname === (0, _parsePath).parsePath(as).pathname;
            const nextState = _extends({}, _this.state);
            // for static pages with query params in the URL we delay
            // marking the router ready until after the query is updated
            // or a navigation has occurred
            const readyStateChange = _this.isReady !== true;
            _this.isReady = true;
            const isSsr = _this.isSsr;
            if (!isQueryUpdating) {
                _this.isSsr = false;
            }
            // if a route transition is already in progress before
            // the query updating is triggered ignore query updating
            if (isQueryUpdating && _this.clc) {
                return false;
            }
            const prevLocale = nextState.locale;
            if (false) { var ref; }
            // marking route changes as a navigation start entry
            if (_utils.ST) {
                performance.mark("routeChange");
            }
            const { shallow =false , scroll =true  } = options;
            const routeProps = {
                shallow
            };
            if (_this._inFlightRoute && _this.clc) {
                if (!isSsr) {
                    Router.events.emit("routeChangeError", buildCancellationError(), _this._inFlightRoute, routeProps);
                }
                _this.clc();
                _this.clc = null;
            }
            as = (0, _addBasePath).addBasePath((0, _addLocale).addLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, options.locale, _this.defaultLocale));
            const cleanedAs = (0, _removeLocale).removeLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, nextState.locale);
            _this._inFlightRoute = as;
            const localeChange = prevLocale !== nextState.locale;
            // If the url change is only related to a hash change
            // We should not proceed. We should only change the state.
            if (!isQueryUpdating && _this.onlyAHashChange(cleanedAs) && !localeChange) {
                nextState.asPath = cleanedAs;
                Router.events.emit("hashChangeStart", as, routeProps);
                // TODO: do we need the resolved href when only a hash change?
                _this.changeState(method, url, as, _extends({}, options, {
                    scroll: false
                }));
                if (scroll) {
                    _this.scrollToHash(cleanedAs);
                }
                try {
                    yield _this.set(nextState, _this.components[nextState.route], null);
                } catch (err) {
                    if ((0, _isError).default(err) && err.cancelled) {
                        Router.events.emit("routeChangeError", err, cleanedAs, routeProps);
                    }
                    throw err;
                }
                Router.events.emit("hashChangeComplete", as, routeProps);
                return true;
            }
            let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
            let { pathname , query  } = parsed;
            // The build manifest needs to be loaded before auto-static dynamic pages
            // get their query parameters to allow ensuring they can be parsed properly
            // when rewritten to
            let pages, rewrites;
            try {
                [pages, { __rewrites: rewrites  }] = yield Promise.all([
                    _this.pageLoader.getPageList(),
                    (0, _routeLoader).getClientBuildManifest(),
                    _this.pageLoader.getMiddleware(), 
                ]);
            } catch (err1) {
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                handleHardNavigation({
                    url: as,
                    router: _this
                });
                return false;
            }
            // If asked to change the current URL we should reload the current page
            // (not location.reload() but reload getInitialProps and other Next.js stuffs)
            // We also need to set the method = replaceState always
            // as this should not go into the history (That's how browsers work)
            // We should compare the new asPath to the current asPath, not the url
            if (!_this.urlIsNew(cleanedAs) && !localeChange) {
                method = "replaceState";
            }
            // we need to resolve the as value using rewrites for dynamic SSG
            // pages to allow building the data URL correctly
            let resolvedAs = as;
            // url and as should always be prefixed with basePath by this
            // point by either next/link or router.push/replace so strip the
            // basePath from the pathname to match the pages dir 1-to-1
            pathname = pathname ? (0, _removeTrailingSlash).removeTrailingSlash((0, _removeBasePath).removeBasePath(pathname)) : pathname;
            // we don't attempt resolve asPath when we need to execute
            // middleware as the resolving will occur server-side
            const isMiddlewareMatch = yield matchesMiddleware({
                asPath: as,
                locale: nextState.locale,
                router: _this
            });
            if (options.shallow && isMiddlewareMatch) {
                pathname = _this.pathname;
            }
            if (shouldResolveHref && pathname !== "/_error") {
                options._shouldResolveHref = true;
                if (false) {} else {
                    parsed.pathname = resolveDynamicRoute(pathname, pages);
                    if (parsed.pathname !== pathname) {
                        pathname = parsed.pathname;
                        parsed.pathname = (0, _addBasePath).addBasePath(pathname);
                        if (!isMiddlewareMatch) {
                            url = (0, _formatUrl).formatWithValidation(parsed);
                        }
                    }
                }
            }
            if (!isLocalURL(as)) {
                if (false) {}
                handleHardNavigation({
                    url: as,
                    router: _this
                });
                return false;
            }
            resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(resolvedAs), nextState.locale);
            let route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
            let routeMatch = false;
            if ((0, _isDynamic).isDynamicRoute(route)) {
                const parsedAs1 = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
                const asPathname = parsedAs1.pathname;
                const routeRegex = (0, _routeRegex).getRouteRegex(route);
                routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
                const shouldInterpolate = route === asPathname;
                const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
                if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
                    const missingParams = Object.keys(routeRegex.groups).filter((param)=>!query[param]);
                    if (missingParams.length > 0 && !isMiddlewareMatch) {
                        if (false) {}
                        throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(", ")}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? "href-interpolation-failed" : "incompatible-href-as"}`);
                    }
                } else if (shouldInterpolate) {
                    as = (0, _formatUrl).formatWithValidation(Object.assign({}, parsedAs1, {
                        pathname: interpolatedAs.result,
                        query: omit(query, interpolatedAs.params)
                    }));
                } else {
                    // Merge params into `query`, overwriting any specified in search
                    Object.assign(query, routeMatch);
                }
            }
            if (!isQueryUpdating) {
                Router.events.emit("routeChangeStart", as, routeProps);
            }
            try {
                var ref2, ref3;
                let routeInfo = yield _this.getRouteInfo({
                    route,
                    pathname,
                    query,
                    as,
                    resolvedAs,
                    routeProps,
                    locale: nextState.locale,
                    isPreview: nextState.isPreview,
                    hasMiddleware: isMiddlewareMatch
                });
                if ("route" in routeInfo && isMiddlewareMatch) {
                    pathname = routeInfo.route || route;
                    route = pathname;
                    if (!routeProps.shallow) {
                        query = Object.assign({}, routeInfo.query || {}, query);
                    }
                    if (routeMatch && pathname !== parsed.pathname) {
                        Object.keys(routeMatch).forEach((key)=>{
                            if (routeMatch && query[key] === routeMatch[key]) {
                                delete query[key];
                            }
                        });
                    }
                    if ((0, _isDynamic).isDynamicRoute(pathname)) {
                        const prefixedAs = !routeProps.shallow && routeInfo.resolvedAs ? routeInfo.resolvedAs : (0, _addBasePath).addBasePath((0, _addLocale).addLocale(new URL(as, location.href).pathname, nextState.locale), true);
                        let rewriteAs = prefixedAs;
                        if ((0, _hasBasePath).hasBasePath(rewriteAs)) {
                            rewriteAs = (0, _removeBasePath).removeBasePath(rewriteAs);
                        }
                        if (false) {}
                        const routeRegex1 = (0, _routeRegex).getRouteRegex(pathname);
                        const curRouteMatch = (0, _routeMatcher).getRouteMatcher(routeRegex1)(rewriteAs);
                        if (curRouteMatch) {
                            Object.assign(query, curRouteMatch);
                        }
                    }
                }
                // If the routeInfo brings a redirect we simply apply it.
                if ("type" in routeInfo) {
                    if (routeInfo.type === "redirect-internal") {
                        return _this.change(method, routeInfo.newUrl, routeInfo.newAs, options);
                    } else {
                        handleHardNavigation({
                            url: routeInfo.destination,
                            router: _this
                        });
                        return new Promise(()=>{});
                    }
                }
                let { error , props , __N_SSG , __N_SSP  } = routeInfo;
                const component = routeInfo.Component;
                if (component && component.unstable_scriptLoader) {
                    const scripts = [].concat(component.unstable_scriptLoader());
                    scripts.forEach((script)=>{
                        (0, _script).handleClientScriptLoad(script.props);
                    });
                }
                // handle redirect on client-transition
                if ((__N_SSG || __N_SSP) && props) {
                    if (props.pageProps && props.pageProps.__N_REDIRECT) {
                        // Use the destination from redirect without adding locale
                        options.locale = false;
                        const destination = props.pageProps.__N_REDIRECT;
                        // check if destination is internal (resolves to a page) and attempt
                        // client-navigation if it is falling back to hard navigation if
                        // it's not
                        if (destination.startsWith("/") && props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
                            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                            const { url: newUrl , as: newAs  } = prepareUrlAs(_this, destination, destination);
                            return _this.change(method, newUrl, newAs, options);
                        }
                        handleHardNavigation({
                            url: destination,
                            router: _this
                        });
                        return new Promise(()=>{});
                    }
                    nextState.isPreview = !!props.__N_PREVIEW;
                    // handle SSG data 404
                    if (props.notFound === SSG_DATA_NOT_FOUND) {
                        let notFoundRoute;
                        try {
                            yield _this.fetchComponent("/404");
                            notFoundRoute = "/404";
                        } catch (_) {
                            notFoundRoute = "/_error";
                        }
                        routeInfo = yield _this.getRouteInfo({
                            route: notFoundRoute,
                            pathname: notFoundRoute,
                            query,
                            as,
                            resolvedAs,
                            routeProps: {
                                shallow: false
                            },
                            locale: nextState.locale,
                            isPreview: nextState.isPreview
                        });
                        if ("type" in routeInfo) {
                            throw new Error(`Unexpected middleware effect on /404`);
                        }
                    }
                }
                Router.events.emit("beforeHistoryChange", as, routeProps);
                _this.changeState(method, url, as, options);
                if (isQueryUpdating && pathname === "/_error" && ((ref2 = self.__NEXT_DATA__.props) == null ? void 0 : (ref3 = ref2.pageProps) == null ? void 0 : ref3.statusCode) === 500 && (props == null ? void 0 : props.pageProps)) {
                    // ensure statusCode is still correct for static 500 page
                    // when updating query information
                    props.pageProps.statusCode = 500;
                }
                var _route;
                // shallow routing is only allowed for same page URL changes.
                const isValidShallowRoute = options.shallow && nextState.route === ((_route = routeInfo.route) != null ? _route : route);
                var _scroll;
                const shouldScroll = (_scroll = options.scroll) != null ? _scroll : !options._h && !isValidShallowRoute;
                const resetScroll = shouldScroll ? {
                    x: 0,
                    y: 0
                } : null;
                // the new state that the router gonna set
                const upcomingRouterState = _extends({}, nextState, {
                    route,
                    pathname,
                    query,
                    asPath: cleanedAs,
                    isFallback: false
                });
                const upcomingScrollState = forcedScroll != null ? forcedScroll : resetScroll;
                // for query updates we can skip it if the state is unchanged and we don't
                // need to scroll
                // https://github.com/vercel/next.js/issues/37139
                const canSkipUpdating = options._h && !upcomingScrollState && !readyStateChange && !localeChange && (0, _compareStates).compareRouterStates(upcomingRouterState, _this.state);
                if (!canSkipUpdating) {
                    yield _this.set(upcomingRouterState, routeInfo, upcomingScrollState).catch((e)=>{
                        if (e.cancelled) error = error || e;
                        else throw e;
                    });
                    if (error) {
                        if (!isQueryUpdating) {
                            Router.events.emit("routeChangeError", error, cleanedAs, routeProps);
                        }
                        throw error;
                    }
                    if (false) {}
                    if (!isQueryUpdating) {
                        Router.events.emit("routeChangeComplete", as, routeProps);
                    }
                    // A hash mark # is the optional last part of a URL
                    const hashRegex = /#.+$/;
                    if (shouldScroll && hashRegex.test(as)) {
                        _this.scrollToHash(as);
                    }
                }
                return true;
            } catch (err11) {
                if ((0, _isError).default(err11) && err11.cancelled) {
                    return false;
                }
                throw err11;
            }
        })();
    }
    changeState(method, url, as, options = {}) {
        if (false) {}
        if (method !== "pushState" || (0, _utils).getURL() !== as) {
            this._shallow = options.shallow;
            window.history[method]({
                url,
                as,
                options,
                __N: true,
                key: this._key = method !== "pushState" ? this._key : createKey()
            }, // Passing the empty string here should be safe against future changes to the method.
            // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
            "", as);
        }
    }
    handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
        var _this = this;
        return _async_to_generator(function*() {
            console.error(err);
            if (err.cancelled) {
                // bubble up cancellation errors
                throw err;
            }
            if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
                Router.events.emit("routeChangeError", err, as, routeProps);
                // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.
                handleHardNavigation({
                    url: as,
                    router: _this
                });
                // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.
                throw buildCancellationError();
            }
            try {
                let props;
                const { page: Component , styleSheets  } = yield _this.fetchComponent("/_error");
                const routeInfo = {
                    props,
                    Component,
                    styleSheets,
                    err,
                    error: err
                };
                if (!routeInfo.props) {
                    try {
                        routeInfo.props = yield _this.getInitialProps(Component, {
                            err,
                            pathname,
                            query
                        });
                    } catch (gipErr) {
                        console.error("Error in error page `getInitialProps`: ", gipErr);
                        routeInfo.props = {};
                    }
                }
                return routeInfo;
            } catch (routeInfoErr) {
                return _this.handleRouteInfoError((0, _isError).default(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ""), pathname, query, as, routeProps, true);
            }
        })();
    }
    getRouteInfo({ route: requestedRoute , pathname , query , as , resolvedAs , routeProps , locale , hasMiddleware , isPreview , unstable_skipClientCache  }) {
        var _this = this;
        return _async_to_generator(function*() {
            /**
     * This `route` binding can change if there's a rewrite
     * so we keep a reference to the original requested route
     * so we can store the cache for it and avoid re-requesting every time
     * for shallow routing purposes.
     */ let route = requestedRoute;
            try {
                var ref, ref4, ref5;
                const handleCancelled = getCancelledHandler({
                    route,
                    router: _this
                });
                let existingInfo = _this.components[route];
                if (routeProps.shallow && existingInfo && _this.route === route) {
                    return existingInfo;
                }
                if (hasMiddleware) {
                    existingInfo = undefined;
                }
                let cachedRouteInfo = existingInfo && !("initial" in existingInfo) && "production" !== "development" ? existingInfo : undefined;
                const fetchNextDataParams = {
                    dataHref: _this.pageLoader.getDataHref({
                        href: (0, _formatUrl).formatWithValidation({
                            pathname,
                            query
                        }),
                        skipInterpolation: true,
                        asPath: resolvedAs,
                        locale
                    }),
                    hasMiddleware: true,
                    isServerRender: _this.isSsr,
                    parseJSON: true,
                    inflightCache: _this.sdc,
                    persistCache: !isPreview,
                    isPrefetch: false,
                    unstable_skipClientCache
                };
                const data = yield withMiddlewareEffects({
                    fetchData: ()=>fetchNextData(fetchNextDataParams),
                    asPath: resolvedAs,
                    locale: locale,
                    router: _this
                });
                handleCancelled();
                if ((data == null ? void 0 : (ref = data.effect) == null ? void 0 : ref.type) === "redirect-internal" || (data == null ? void 0 : (ref4 = data.effect) == null ? void 0 : ref4.type) === "redirect-external") {
                    return data.effect;
                }
                if ((data == null ? void 0 : (ref5 = data.effect) == null ? void 0 : ref5.type) === "rewrite") {
                    route = (0, _removeTrailingSlash).removeTrailingSlash(data.effect.resolvedHref);
                    pathname = data.effect.resolvedHref;
                    query = _extends({}, query, data.effect.parsedAs.query);
                    resolvedAs = (0, _removeBasePath).removeBasePath((0, _normalizeLocalePath).normalizeLocalePath(data.effect.parsedAs.pathname, _this.locales).pathname);
                    // Check again the cache with the new destination.
                    existingInfo = _this.components[route];
                    if (routeProps.shallow && existingInfo && _this.route === route && !hasMiddleware) {
                        // If we have a match with the current route due to rewrite,
                        // we can copy the existing information to the rewritten one.
                        // Then, we return the information along with the matched route.
                        return _extends({}, existingInfo, {
                            route
                        });
                    }
                }
                if (route === "/api" || route.startsWith("/api/")) {
                    handleHardNavigation({
                        url: as,
                        router: _this
                    });
                    return new Promise(()=>{});
                }
                const routeInfo = cachedRouteInfo || (yield _this.fetchComponent(route).then((res)=>({
                        Component: res.page,
                        styleSheets: res.styleSheets,
                        __N_SSG: res.mod.__N_SSG,
                        __N_SSP: res.mod.__N_SSP,
                        __N_RSC: !!res.mod.__next_rsc__
                    })));
                if (false) {}
                /**
       * For server components, non-SSR pages will have statically optimized
       * flight data in a production build. So only development and SSR pages
       * will always have the real-time generated and streamed flight data.
       */ const useStreamedFlightData = routeInfo.__N_RSC && ( false || routeInfo.__N_SSP);
                const shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP || routeInfo.__N_RSC;
                const { props  } = yield _this._getData(_async_to_generator(function*() {
                    if (shouldFetchData && !useStreamedFlightData) {
                        const { json  } = (data == null ? void 0 : data.json) ? data : yield fetchNextData({
                            dataHref: _this.pageLoader.getDataHref({
                                href: (0, _formatUrl).formatWithValidation({
                                    pathname,
                                    query
                                }),
                                asPath: resolvedAs,
                                locale
                            }),
                            isServerRender: _this.isSsr,
                            parseJSON: true,
                            inflightCache: _this.sdc,
                            persistCache: !isPreview,
                            isPrefetch: false,
                            unstable_skipClientCache
                        });
                        return {
                            props: json || {}
                        };
                    }
                    return {
                        headers: {},
                        props: yield _this.getInitialProps(routeInfo.Component, {
                            pathname,
                            query,
                            asPath: as,
                            locale,
                            locales: _this.locales,
                            defaultLocale: _this.defaultLocale
                        })
                    };
                }));
                // Only bust the data cache for SSP routes although
                // middleware can skip cache per request with
                // x-middleware-cache: no-cache as well
                if (routeInfo.__N_SSP && fetchNextDataParams.dataHref) {
                    const cacheKey = new URL(fetchNextDataParams.dataHref, window.location.href).href;
                    delete _this.sdc[cacheKey];
                }
                // we kick off a HEAD request in the background
                // when a non-prefetch request is made to signal revalidation
                if (!_this.isPreview && routeInfo.__N_SSG && "production" !== "development") {
                    fetchNextData(Object.assign({}, fetchNextDataParams, {
                        isBackground: true,
                        persistCache: false,
                        inflightCache: backgroundCache
                    })).catch(()=>{});
                }
                let flightInfo;
                if (routeInfo.__N_RSC) {
                    flightInfo = {
                        __flight__: useStreamedFlightData ? (yield _this._getData(()=>_this._getFlightData((0, _formatUrl).formatWithValidation({
                                query: _extends({}, query, {
                                    __flight__: "1"
                                }),
                                pathname: (0, _isDynamic).isDynamicRoute(route) ? interpolateAs(pathname, (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs).pathname, query).result : pathname
                            })))).data : props.__flight__
                    };
                }
                props.pageProps = Object.assign({}, props.pageProps, flightInfo);
                routeInfo.props = props;
                routeInfo.route = route;
                routeInfo.query = query;
                routeInfo.resolvedAs = resolvedAs;
                _this.components[route] = routeInfo;
                return routeInfo;
            } catch (err) {
                return _this.handleRouteInfoError((0, _isError).getProperError(err), pathname, query, as, routeProps);
            }
        })();
    }
    set(state, data, resetScroll) {
        this.state = state;
        return this.sub(data, this.components["/_app"].Component, resetScroll);
    }
    /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */ beforePopState(cb) {
        this._bps = cb;
    }
    onlyAHashChange(as) {
        if (!this.asPath) return false;
        const [oldUrlNoHash, oldHash] = this.asPath.split("#");
        const [newUrlNoHash, newHash] = as.split("#");
        // Makes sure we scroll to the provided hash if the url/hash are the same
        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
            return true;
        }
        // If the urls are change, there's more than a hash change
        if (oldUrlNoHash !== newUrlNoHash) {
            return false;
        }
        // If the hash has changed, then it's a hash only change.
        // This check is necessary to handle both the enter and
        // leave hash === '' cases. The identity case falls through
        // and is treated as a next reload.
        return oldHash !== newHash;
    }
    scrollToHash(as) {
        const [, hash = ""] = as.split("#");
        // Scroll to top if the hash is just `#` with no value or `#top`
        // To mirror browsers
        if (hash === "" || hash === "top") {
            window.scrollTo(0, 0);
            return;
        }
        // Decode hash to make non-latin anchor works.
        const rawHash = decodeURIComponent(hash);
        // First we check if the element by id is found
        const idEl = document.getElementById(rawHash);
        if (idEl) {
            idEl.scrollIntoView();
            return;
        }
        // If there's no element with the id, we check the `name` property
        // To mirror browsers
        const nameEl = document.getElementsByName(rawHash)[0];
        if (nameEl) {
            nameEl.scrollIntoView();
        }
    }
    urlIsNew(asPath) {
        return this.asPath !== asPath;
    }
    /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */ prefetch(url, asPath = url, options = {}) {
        var _this = this;
        return _async_to_generator(function*() {
            let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
            let { pathname , query  } = parsed;
            if (false) {}
            const pages = yield _this.pageLoader.getPageList();
            let resolvedAs = asPath;
            const locale = typeof options.locale !== "undefined" ? options.locale || undefined : _this.locale;
            const isMiddlewareMatch = yield matchesMiddleware({
                asPath: asPath,
                locale: locale,
                router: _this
            });
            if (false) {}
            parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
            if ((0, _isDynamic).isDynamicRoute(parsed.pathname)) {
                pathname = parsed.pathname;
                parsed.pathname = pathname;
                Object.assign(query, (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(parsed.pathname))((0, _parsePath).parsePath(asPath).pathname) || {});
                if (!isMiddlewareMatch) {
                    url = (0, _formatUrl).formatWithValidation(parsed);
                }
            }
            // Prefetch is not supported in development mode because it would trigger on-demand-entries
            if (false) {}
            // TODO: if the route middleware's data request
            // resolves to is not an SSG route we should bust the cache
            // but we shouldn't allow prefetch to keep triggering
            // requests for SSP pages
            const data = yield withMiddlewareEffects({
                fetchData: ()=>fetchNextData({
                        dataHref: _this.pageLoader.getDataHref({
                            href: (0, _formatUrl).formatWithValidation({
                                pathname,
                                query
                            }),
                            skipInterpolation: true,
                            asPath: resolvedAs,
                            locale
                        }),
                        hasMiddleware: true,
                        isServerRender: _this.isSsr,
                        parseJSON: true,
                        inflightCache: _this.sdc,
                        persistCache: !_this.isPreview,
                        isPrefetch: true
                    }),
                asPath: asPath,
                locale: locale,
                router: _this
            });
            /**
     * If there was a rewrite we apply the effects of the rewrite on the
     * current parameters for the prefetch.
     */ if ((data == null ? void 0 : data.effect.type) === "rewrite") {
                parsed.pathname = data.effect.resolvedHref;
                pathname = data.effect.resolvedHref;
                query = _extends({}, query, data.effect.parsedAs.query);
                resolvedAs = data.effect.parsedAs.pathname;
                url = (0, _formatUrl).formatWithValidation(parsed);
            }
            /**
     * If there is a redirect to an external destination then we don't have
     * to prefetch content as it will be unused.
     */ if ((data == null ? void 0 : data.effect.type) === "redirect-external") {
                return;
            }
            const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
            yield Promise.all([
                _this.pageLoader._isSsg(route).then((isSsg)=>{
                    return isSsg ? fetchNextData({
                        dataHref: (data == null ? void 0 : data.dataHref) || _this.pageLoader.getDataHref({
                            href: url,
                            asPath: resolvedAs,
                            locale: locale
                        }),
                        isServerRender: false,
                        parseJSON: true,
                        inflightCache: _this.sdc,
                        persistCache: !_this.isPreview,
                        isPrefetch: true,
                        unstable_skipClientCache: options.unstable_skipClientCache || options.priority && !!true
                    }).then(()=>false) : false;
                }),
                _this.pageLoader[options.priority ? "loadPage" : "prefetch"](route), 
            ]);
        })();
    }
    fetchComponent(route) {
        var _this = this;
        return _async_to_generator(function*() {
            const handleCancelled = getCancelledHandler({
                route,
                router: _this
            });
            try {
                const componentResult = yield _this.pageLoader.loadPage(route);
                handleCancelled();
                return componentResult;
            } catch (err) {
                handleCancelled();
                throw err;
            }
        })();
    }
    _getData(fn) {
        let cancelled = false;
        const cancel = ()=>{
            cancelled = true;
        };
        this.clc = cancel;
        return fn().then((data)=>{
            if (cancel === this.clc) {
                this.clc = null;
            }
            if (cancelled) {
                const err = new Error("Loading initial props cancelled");
                err.cancelled = true;
                throw err;
            }
            return data;
        });
    }
    _getFlightData(dataHref) {
        // Do not cache RSC flight response since it's not a static resource
        return fetchNextData({
            dataHref,
            isServerRender: true,
            parseJSON: false,
            inflightCache: this.sdc,
            persistCache: false,
            isPrefetch: false
        }).then(({ text  })=>({
                data: text
            }));
    }
    getInitialProps(Component, ctx) {
        const { Component: App  } = this.components["/_app"];
        const AppTree = this._wrapApp(App);
        ctx.AppTree = AppTree;
        return (0, _utils).loadGetInitialProps(App, {
            AppTree,
            Component,
            router: this,
            ctx
        });
    }
    get route() {
        return this.state.route;
    }
    get pathname() {
        return this.state.pathname;
    }
    get query() {
        return this.state.query;
    }
    get asPath() {
        return this.state.asPath;
    }
    get locale() {
        return this.state.locale;
    }
    get isFallback() {
        return this.state.isFallback;
    }
    get isPreview() {
        return this.state.isPreview;
    }
    constructor(pathname1, query1, as1, { initialProps , pageLoader , App , wrapApp , Component , err , subscription , isFallback , locale , locales , defaultLocale , domainLocales , isPreview , isRsc  }){
        // Server Data Cache
        this.sdc = {};
        this.isFirstPopStateEvent = true;
        this._key = createKey();
        this.onPopState = (e)=>{
            const { isFirstPopStateEvent  } = this;
            this.isFirstPopStateEvent = false;
            const state = e.state;
            if (!state) {
                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                const { pathname , query  } = this;
                this.changeState("replaceState", (0, _formatUrl).formatWithValidation({
                    pathname: (0, _addBasePath).addBasePath(pathname),
                    query
                }), (0, _utils).getURL());
                return;
            }
            // __NA is used to identify if the history entry can be handled by the app-router.
            if (state.__NA) {
                window.location.reload();
                return;
            }
            if (!state.__N) {
                return;
            }
            // Safari fires popstateevent when reopening the browser.
            if (isFirstPopStateEvent && this.locale === state.options.locale && state.as === this.asPath) {
                return;
            }
            let forcedScroll;
            const { url , as , options , key  } = state;
            if (false) {}
            this._key = key;
            const { pathname: pathname1  } = (0, _parseRelativeUrl).parseRelativeUrl(url);
            // Make sure we don't re-render on initial load,
            // can be caused by navigating back from an external site
            if (this.isSsr && as === (0, _addBasePath).addBasePath(this.asPath) && pathname1 === (0, _addBasePath).addBasePath(this.pathname)) {
                return;
            }
            // If the downstream application returns falsy, return.
            // They will then be responsible for handling the event.
            if (this._bps && !this._bps(state)) {
                return;
            }
            this.change("replaceState", url, as, Object.assign({}, options, {
                shallow: options.shallow && this._shallow,
                locale: options.locale || this.defaultLocale,
                // @ts-ignore internal value not exposed on types
                _h: 0
            }), forcedScroll);
        };
        // represents the current component key
        const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname1);
        // set up the component cache (by route keys)
        this.components = {};
        // We should not keep the cache, if there's an error
        // Otherwise, this cause issues when when going back and
        // come again to the errored page.
        if (pathname1 !== "/_error") {
            this.components[route] = {
                Component,
                initial: true,
                props: initialProps,
                err,
                __N_SSG: initialProps && initialProps.__N_SSG,
                __N_SSP: initialProps && initialProps.__N_SSP,
                __N_RSC: !!isRsc
            };
        }
        this.components["/_app"] = {
            Component: App,
            styleSheets: []
        };
        // Backwards compat for Router.router.events
        // TODO: Should be remove the following major version as it was never documented
        this.events = Router.events;
        this.pageLoader = pageLoader;
        // if auto prerendered and dynamic route wait to update asPath
        // until after mount to prevent hydration mismatch
        const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;
        this.basePath =  false || "";
        this.sub = subscription;
        this.clc = null;
        this._wrapApp = wrapApp;
        // make sure to ignore extra popState in safari on navigating
        // back from external site
        this.isSsr = true;
        this.isLocaleDomain = false;
        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
        if (false) {}
        this.state = {
            route,
            pathname: pathname1,
            query: query1,
            asPath: autoExportDynamic ? pathname1 : as1,
            isPreview: !!isPreview,
            locale:  false ? 0 : undefined,
            isFallback
        };
        this._initialMatchesMiddlewarePromise = Promise.resolve(false);
        if (false) {}
    }
}
Router.events = (0, _mitt).default();
function matchesMiddleware(options) {
    return Promise.resolve(options.router.pageLoader.getMiddleware()).then((middleware)=>{
        const { pathname: asPathname  } = (0, _parsePath).parsePath(options.asPath);
        const cleanedAs = (0, _hasBasePath).hasBasePath(asPathname) ? (0, _removeBasePath).removeBasePath(asPathname) : asPathname;
        const regex = middleware == null ? void 0 : middleware.location;
        return !!regex && new RegExp(regex).test((0, _addLocale).addLocale(cleanedAs, options.locale));
    });
}
function withMiddlewareEffects(options) {
    return matchesMiddleware(options).then((matches)=>{
        if (matches && options.fetchData) {
            return options.fetchData().then((data)=>getMiddlewareData(data.dataHref, data.response, options).then((effect)=>({
                        dataHref: data.dataHref,
                        json: data.json,
                        response: data.response,
                        text: data.text,
                        effect
                    }))).catch((_err)=>{
                /**
           * TODO: Revisit this in the future.
           * For now we will not consider middleware data errors to be fatal.
           * maybe we should revisit in the future.
           */ return null;
            });
        }
        return null;
    });
}
function getMiddlewareData(source, response, options) {
    const nextConfig = {
        basePath: options.router.basePath,
        i18n: {
            locales: options.router.locales
        },
        trailingSlash: Boolean(false)
    };
    const rewriteHeader = response.headers.get("x-nextjs-rewrite");
    let rewriteTarget = rewriteHeader || response.headers.get("x-nextjs-matched-path");
    const matchedPath = response.headers.get("x-matched-path");
    if (matchedPath && !rewriteTarget && !matchedPath.includes("__next_data_catchall") && !matchedPath.includes("/_error") && !matchedPath.includes("/404")) {
        // leverage x-matched-path to detect next.config.js rewrites
        rewriteTarget = matchedPath;
    }
    if (rewriteTarget) {
        if (rewriteTarget.startsWith("/")) {
            const parsedRewriteTarget = (0, _parseRelativeUrl).parseRelativeUrl(rewriteTarget);
            const pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(parsedRewriteTarget.pathname, {
                nextConfig,
                parseData: true
            });
            let fsPathname = (0, _removeTrailingSlash).removeTrailingSlash(pathnameInfo.pathname);
            return Promise.all([
                options.router.pageLoader.getPageList(),
                (0, _routeLoader).getClientBuildManifest(), 
            ]).then(([pages, { __rewrites: rewrites  }])=>{
                let as = (0, _addLocale).addLocale(pathnameInfo.pathname, pathnameInfo.locale);
                if ((0, _isDynamic).isDynamicRoute(as) || !rewriteHeader && pages.includes((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(as), options.router.locales).pathname)) {
                    const parsedSource = (0, _getNextPathnameInfo).getNextPathnameInfo((0, _parseRelativeUrl).parseRelativeUrl(source).pathname, {
                        parseData: true
                    });
                    as = (0, _addBasePath).addBasePath(parsedSource.pathname);
                    parsedRewriteTarget.pathname = as;
                }
                if (false) {} else if (!pages.includes(fsPathname)) {
                    const resolvedPathname = resolveDynamicRoute(fsPathname, pages);
                    if (resolvedPathname !== fsPathname) {
                        fsPathname = resolvedPathname;
                    }
                }
                const resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;
                if ((0, _isDynamic).isDynamicRoute(resolvedHref)) {
                    const matches = (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(resolvedHref))(as);
                    Object.assign(parsedRewriteTarget.query, matches || {});
                }
                return {
                    type: "rewrite",
                    parsedAs: parsedRewriteTarget,
                    resolvedHref
                };
            });
        }
        const src = (0, _parsePath).parsePath(source);
        const pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
            nextConfig,
            parseData: true
        }), {
            defaultLocale: options.router.defaultLocale,
            buildId: ""
        }));
        return Promise.resolve({
            type: "redirect-external",
            destination: `${pathname}${src.query}${src.hash}`
        });
    }
    const redirectTarget = response.headers.get("x-nextjs-redirect");
    if (redirectTarget) {
        if (redirectTarget.startsWith("/")) {
            const src1 = (0, _parsePath).parsePath(redirectTarget);
            const pathname1 = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src1.pathname, {
                nextConfig,
                parseData: true
            }), {
                defaultLocale: options.router.defaultLocale,
                buildId: ""
            }));
            return Promise.resolve({
                type: "redirect-internal",
                newAs: `${pathname1}${src1.query}${src1.hash}`,
                newUrl: `${pathname1}${src1.query}${src1.hash}`
            });
        }
        return Promise.resolve({
            type: "redirect-external",
            destination: redirectTarget
        });
    }
    return Promise.resolve({
        type: "next"
    });
}
exports["default"] = Router; //# sourceMappingURL=router.js.map


/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* unused reexport */ __webpack_require__(8045)


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* unused reexport */ __webpack_require__(8418)


/***/ })

};
;