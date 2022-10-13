"use strict";
(() => {
var exports = {};
exports.id = 545;
exports.ids = [545];
exports.modules = {

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ nft),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/layouts/Default/index.ts + 1 modules
var Default = __webpack_require__(2601);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "@chakra-ui/react"
var external_chakra_ui_react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/format.ts
var format = __webpack_require__(6767);
;// CONCATENATED MODULE: ./src/components/templates/transfers/NFT/NFTTransfers.tsx




const NFTTransfers = ({ transfers  })=>{
    const hoverTrColor = (0,external_chakra_ui_react_.useColorModeValue)("gray.100", "gray.700");
    (0,external_react_.useEffect)(()=>console.log("transfers: ", transfers), [
        transfers
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Heading, {
                size: "lg",
                marginBottom: 6,
                children: "NFT Transfers"
            }),
            (transfers === null || transfers === void 0 ? void 0 : transfers.length) ? /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
                border: "2px",
                borderColor: hoverTrColor,
                borderRadius: "xl",
                padding: "24px 18px",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.TableContainer, {
                    w: "full",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Table, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Thead, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Tr, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "Token"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "Token Id"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "From"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "To"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "Type"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "Date"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            isNumeric: true,
                                            children: "Tx Hash"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Tbody, {
                                children: transfers === null || transfers === void 0 ? void 0 : transfers.map((transfer, key)=>{
                                    /*#__PURE__*/ return (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Tr, {
                                        _hover: {
                                            bgColor: hoverTrColor
                                        },
                                        cursor: "pointer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Td, {
                                                children: (0,format/* getEllipsisTxt */.e)((transfer === null || transfer === void 0 ? void 0 : transfer.tokenAddress) || "")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Td, {
                                                children: transfer === null || transfer === void 0 ? void 0 : transfer.tokenId
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Td, {
                                                children: (0,format/* getEllipsisTxt */.e)((transfer === null || transfer === void 0 ? void 0 : transfer.fromAddress) || "")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Td, {
                                                children: (0,format/* getEllipsisTxt */.e)((transfer === null || transfer === void 0 ? void 0 : transfer.toAddress) || "")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Td, {
                                                children: transfer.contractType
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Td, {
                                                children: new Date(transfer.blockTimestamp).toLocaleDateString()
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Td, {
                                                isNumeric: true,
                                                children: (0,format/* getEllipsisTxt */.e)(transfer.transactionHash, 2)
                                            })
                                        ]
                                    }, key);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Tfoot, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Tr, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "Token"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "Token Id"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "From"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "To"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "Type"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "Date"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            isNumeric: true,
                                            children: "Tx Hash"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
                children: "Looks Like you do not have any NFT transfers"
            })
        ]
    });
};
/* harmony default export */ const NFT_NFTTransfers = (NFTTransfers);

;// CONCATENATED MODULE: ./src/components/templates/transfers/NFT/index.ts



// EXTERNAL MODULE: external "moralis"
var external_moralis_ = __webpack_require__(1544);
var external_moralis_default = /*#__PURE__*/__webpack_require__.n(external_moralis_);
;// CONCATENATED MODULE: ./pages/transfers/nft.tsx





const NFTTransfersPage = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Default/* Default */.g, {
        pageName: "NFT Transfers",
        children: /*#__PURE__*/ jsx_runtime_.jsx(NFT_NFTTransfers, {
            ...props
        })
    });
};
const getServerSideProps = async (context)=>{
    const session = await (0,react_.getSession)(context);
    await external_moralis_default().start({
        apiKey: process.env.MORALIS_API_KEY
    });
    if (!(session === null || session === void 0 ? void 0 : session.user.address)) {
        return {
            props: {
                error: "Connect your wallet first"
            }
        };
    }
    const transfers = await external_moralis_default().EvmApi.account.getNFTTransfers({
        address: session === null || session === void 0 ? void 0 : session.user.address,
        chain: process.env.APP_CHAIN_ID
    });
    return {
        props: {
            transfers: JSON.parse(JSON.stringify(transfers.result))
        }
    };
};
/* harmony default export */ const nft = (NFTTransfersPage);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 1544:
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ 5786:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2807:
/***/ ((module) => {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 4738:
/***/ ((module) => {

module.exports = require("wagmi/connectors/injected");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,925,601], () => (__webpack_exec__(851)));
module.exports = __webpack_exports__;

})();