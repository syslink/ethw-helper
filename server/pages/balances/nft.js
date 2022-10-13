"use strict";
(() => {
var exports = {};
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 2299:
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var external_chakra_ui_react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: ./src/components/modules/index.ts + 22 modules
var modules = __webpack_require__(1190);
// EXTERNAL MODULE: ./src/components/templates/balances/ABI/xNFT.json
var ABI_xNFT = __webpack_require__(1392);
// EXTERNAL MODULE: ./src/utils/config.ts
var config = __webpack_require__(5125);
;// CONCATENATED MODULE: ./src/utils/utils.js
function isEmptyObj(obj) {
    return obj === null || obj === "" || typeof obj === "undefined";
}


;// CONCATENATED MODULE: ./src/components/templates/balances/NFT/NFTBalances.tsx










const NFTBalances = ({ account , web3 , chainId  })=>{
    const { isOpen , onOpen , onClose  } = (0,external_chakra_ui_react_.useDisclosure)();
    const modal1 = (0,external_chakra_ui_react_.useDisclosure)();
    const { 0: xNFTList , 1: setXNFTList  } = (0,external_react_.useState)([]);
    const { 0: xNFT , 1: setXNFT  } = (0,external_react_.useState)(null);
    const { 0: robotAddress , 1: setRobotAddress  } = (0,external_react_.useState)("");
    const { 0: tmpRobotAddress , 1: setTmpRobotAddress  } = (0,external_react_.useState)("");
    const { 0: bMineNFT , 1: setBMineNFT  } = (0,external_react_.useState)(false);
    const { 0: totalSupply , 1: setTotalSupply  } = (0,external_react_.useState)(0);
    const { 0: tokensInSlot , 1: setTokensInSlot  } = (0,external_react_.useState)([]);
    const { 0: myTokens , 1: setMyTokens  } = (0,external_react_.useState)([]);
    const { 0: finalTokens , 1: setFinalTokens  } = (0,external_react_.useState)([]);
    const { 0: toTokenId , 1: setToTokenId  } = (0,external_react_.useState)("0");
    const { 0: isMerging , 1: setIsMerging  } = (0,external_react_.useState)(false);
    const { 0: transferValueFromInfo , 1: setTransferValueFromInfo  } = (0,external_react_.useState)({});
    const { 0: transferValueToTokenId , 1: setTransferValueToTokenId  } = (0,external_react_.useState)({});
    const { 0: outShareInfo , 1: setOutShareInfo  } = (0,external_react_.useState)("");
    const { 0: curPage , 1: setCurPage  } = (0,external_react_.useState)(0);
    const { 0: pageSize  } = (0,external_react_.useState)(9);
    const toast = (0,external_chakra_ui_react_.useToast)();
    (0,external_react_.useEffect)(()=>{
        if (web3 != null) {
            setXNFT(new web3.eth.Contract(ABI_xNFT, config/* xNFTAddr */.pE[chainId]));
        }
    }, [
        web3
    ]);
    (0,external_react_.useEffect)(()=>{
        if (xNFT != null) {
            getTotalSupply();
            setRobotAddress("");
            setBMineNFT(false);
        }
    }, [
        xNFT
    ]);
    (0,external_react_.useEffect)(()=>{
        console.log("update robotAddress");
        if (isEmptyObj(robotAddress)) {
            setTokensInSlot([]);
        } else {
            const contractFunc = xNFT.methods["allTokensInSlot"];
            contractFunc(robotAddress).call({
                from: account
            }).then((allTokensInSlot)=>{
                console.log(allTokensInSlot);
                setTokensInSlot(allTokensInSlot);
            });
        }
    }, [
        robotAddress
    ]);
    (0,external_react_.useEffect)(()=>{
        console.log("update bMineNFT");
        if (!bMineNFT) {
            setMyTokens([]);
        } else {
            const tokenIds = [];
            let contractFunc = xNFT.methods["balanceOf(address)"];
            contractFunc(account).call({
                from: account
            }).then((myBalance)=>{
                contractFunc = xNFT.methods["tokenOfOwnerByIndex"];
                for(let i = 0; i < myBalance; i++){
                    contractFunc(account, i).call({
                        from: account
                    }).then((tokenId)=>{
                        tokenIds.push(tokenId);
                        if (tokenIds.length === myBalance) {
                            setMyTokens(tokenIds);
                        }
                    });
                }
            });
        }
    }, [
        bMineNFT
    ]);
    (0,external_react_.useEffect)(()=>{
        const mergeToken = (startIndex, endIndex)=>{
            let intersectionTokens = [];
            if (tokensInSlot.length === 0 && isEmptyObj(robotAddress)) {
                intersectionTokens = myTokens;
            } else if (myTokens.length === 0 && !bMineNFT) {
                intersectionTokens = tokensInSlot;
            } else {
                intersectionTokens = tokensInSlot.filter((value)=>myTokens.includes(value)).sort((a, b)=>b - a);
            }
            const length = intersectionTokens.length;
            if (length > startIndex && length < endIndex) {
                endIndex = length;
            }
            setFinalTokens(intersectionTokens.slice(startIndex, endIndex));
        };
        console.log("update tokensInSlot & myTokens");
        const startIndex = curPage * pageSize;
        let endIndex = (curPage + 1) * pageSize;
        if (tokensInSlot.length > 0 || myTokens.length > 0) {
            mergeToken(startIndex, endIndex);
        } else if (!isEmptyObj(xNFT)) {
            if (totalSupply > startIndex && totalSupply < endIndex) {
                endIndex = totalSupply;
            }
            const tokenIds = [];
            const contractFunc = xNFT.methods["tokenByIndex"];
            for(let i = startIndex; i < endIndex; i++){
                const index = totalSupply - i - 1;
                if (index < 0) {
                    break;
                }
                contractFunc(index).call({
                    from: account
                }).then((tokenId)=>{
                    tokenIds.push(tokenId);
                    if (tokenIds.length === endIndex - startIndex) {
                        setFinalTokens(tokenIds);
                    }
                });
            }
        }
    }, [
        tokensInSlot,
        myTokens,
        totalSupply,
        curPage
    ]);
    (0,external_react_.useEffect)(()=>{
        console.log(2, "finalTokens", finalTokens);
        const xNFTs = [];
        finalTokens.forEach((tokenId)=>{
            let contractFunc = xNFT.methods["tokenURI"];
            contractFunc(tokenId).call({
                from: account
            }).then((tokenURI)=>{
                const xNFTObj = JSON.parse(atob(tokenURI.substr("data:application/json;base64,".length)));
                contractFunc = xNFT.methods["ownerOf"];
                contractFunc(tokenId).call({
                    from: account
                }).then((owner)=>{
                    xNFTObj.tokenId = tokenId;
                    xNFTObj.owner = owner;
                    xNFTs.push(xNFTObj);
                    if (xNFTs.length === finalTokens.length) {
                        xNFTs.sort((a, b)=>b.tokenId - a.tokenId);
                        setXNFTList(xNFTs);
                    }
                });
            });
        });
    }, [
        finalTokens
    ]);
    const getTotalSupply = ()=>{
        const contractFunc = xNFT.methods["totalSupply"];
        contractFunc().call({
            from: account
        }).then((result)=>{
            setTotalSupply(parseInt(result.toString()));
        });
    };
    const mergeXNFTValue = ()=>{
        const tokenIds = [];
        const shares = [];
        console.log(toTokenId);
        Object.entries(transferValueFromInfo).forEach((entry)=>{
            tokenIds.push(entry[0]);
            shares.push(entry[1]);
        });
        const contractFunc = xNFT.methods["merge"];
        const data = contractFunc(tokenIds, shares, parseInt(toTokenId)).encodeABI();
        const tx = {
            from: account,
            to: xNFT._address,
            data,
            value: 0,
            gasLimit: 0
        };
        contractFunc(tokenIds, shares, parseInt(toTokenId)).estimateGas({
            from: account
        }).then((gasLimit)=>{
            tx.gasLimit = gasLimit;
            web3.eth.sendTransaction(tx).on("transactionHash", ()=>{
                setIsMerging(true);
            }).on("receipt", ()=>{
                onClose();
                setIsMerging(false);
                refresh(0);
            }).on("error", ()=>{
                setIsMerging(false);
                toast({
                    title: "Failed",
                    description: "Merge xNFT's share failed",
                    status: "error",
                    position: "bottom-right",
                    isClosable: true
                });
            });
        });
    };
    const refresh = (tokenId)=>{
        if (tokenId === 0 || tokenId === undefined) {
            getTotalSupply();
        } else {
            let contractFunc = xNFT.methods["tokenURI"];
            contractFunc(tokenId).call({
                from: account
            }).then((tokenURI)=>{
                const xNFTObj = JSON.parse(atob(tokenURI.substr("data:application/json;base64,".length)));
                contractFunc = xNFT.methods["ownerOf"];
                contractFunc(tokenId).call({
                    from: account
                }).then((owner)=>{
                    xNFTObj.tokenId = tokenId;
                    xNFTObj.owner = owner;
                    const updatedXNFTs = xNFTList.map((nft)=>{
                        if (nft.tokenId === tokenId) {
                            return xNFTObj;
                        }
                        return nft;
                    });
                    setXNFTList(updatedXNFTs);
                });
            });
        }
    };
    const setMergeInfo = (type, tokenId, share)=>{
        console.log(type, tokenId, share);
        switch(type){
            case config/* MergeType.FromAdd */.dx.FromAdd:
                transferValueFromInfo[tokenId] = share;
                delete transferValueToTokenId[tokenId];
                break;
            case config/* MergeType.FromRemove */.dx.FromRemove:
                delete transferValueFromInfo[tokenId];
                break;
            case config/* MergeType.FromModify */.dx.FromModify:
                break;
            case config/* MergeType.ToAdd */.dx.ToAdd:
                transferValueToTokenId[tokenId] = 1;
                delete transferValueFromInfo[tokenId];
                break;
            case config/* MergeType.ToRemove */.dx.ToRemove:
                delete transferValueToTokenId[tokenId];
                break;
            case config/* MergeType.Clear */.dx.Clear:
                delete transferValueFromInfo[tokenId];
                delete transferValueToTokenId[tokenId];
                break;
            default:
                break;
        }
        console.log(transferValueFromInfo, transferValueToTokenId);
        setTransferValueFromInfo(JSON.parse(JSON.stringify(transferValueFromInfo)));
        setTransferValueToTokenId(JSON.parse(JSON.stringify(transferValueToTokenId)));
    };
    const getTransferValueFromInfo = ()=>{
        let shareInfo = "";
        Object.entries(transferValueFromInfo).forEach((entry)=>{
            shareInfo += `{xNFT #${entry[0]}: ${entry[1]}}`;
        });
        return shareInfo;
    };
    const openMergeModal = ()=>{
        var ref;
        if (Object.entries(transferValueFromInfo).length === 0 || Object.entries(transferValueToTokenId).length === 0) {
            toast({
                title: "Warning",
                description: "You should select the out and to xNFT for transferring share.",
                status: "warning",
                position: "bottom-right",
                isClosable: true
            });
            return;
        }
        setOutShareInfo(getTransferValueFromInfo());
        setToTokenId((ref = Object.entries(transferValueToTokenId)[0]) === null || ref === void 0 ? void 0 : ref[0]);
        onOpen();
    };
    // AiOutlineFilter
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Heading, {
                size: "lg",
                marginBottom: 6,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                            spacing: "18px",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "xNFT List"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Checkbox, {
                                    colorScheme: "teal",
                                    onChange: (e)=>setBMineNFT(e.target.checked),
                                    children: "Only Mine"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Tooltip, {
                                    label: `Filter xRobot Address: ${robotAddress}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                        colorScheme: "teal",
                                        variant: "ghost",
                                        onClick: modal1.onOpen,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Icon, {
                                            as: ai_namespaceObject.AiOutlineFilter,
                                            w: 6,
                                            h: 6
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                            spacing: "18px",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Tooltip, {
                                    label: "Last Page",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                        colorScheme: "teal",
                                        variant: "outline",
                                        onClick: ()=>setCurPage(curPage > 0 ? curPage - 1 : 0),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ArrowLeftIcon, {})
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.NumberInput, {
                                    value: curPage,
                                    size: "sm",
                                    maxW: "100px",
                                    mr: "2rem",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.NumberInputField, {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.NumberInputStepper, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.NumberIncrementStepper, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.NumberDecrementStepper, {})
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Tooltip, {
                                    label: "Next Page",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                        colorScheme: "teal",
                                        variant: "outline",
                                        onClick: ()=>setCurPage((curPage + 1) * pageSize >= totalSupply ? curPage : curPage + 1),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ArrowRightIcon, {})
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                            spacing: "18px",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                    colorScheme: "teal",
                                    variant: "outline",
                                    onClick: ()=>refresh(0),
                                    children: "Refresh"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                    colorScheme: "teal",
                                    variant: "outline",
                                    onClick: openMergeModal,
                                    children: "Merge"
                                })
                            ]
                        })
                    ]
                })
            }),
            (xNFTList === null || xNFTList === void 0 ? void 0 : xNFTList.length) ? /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.SimpleGrid, {
                columns: 3,
                spacing: 10,
                children: xNFTList.map((xNFTObj, key)=>/*#__PURE__*/ (0,external_react_.createElement)(modules/* NFTCard */.aU, {
                        ...xNFTObj,
                        key: key,
                        account: account,
                        web3: web3,
                        xNFT: xNFT,
                        setMergeInfo: setMergeInfo,
                        refresh: refresh
                    }))
            }) : /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
                children: "Looks Like there are no xNFTs"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Modal, {
                isOpen: isOpen,
                onClose: onClose,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.ModalOverlay, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.ModalContent, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.ModalHeader, {
                                children: "Merge xNFT Value"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.ModalCloseButton, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.ModalBody, {
                                pb: 6,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.FormControl, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.FormLabel, {
                                                children: "Out Shares Information"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Input, {
                                                disabled: true,
                                                value: outShareInfo
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.FormControl, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.FormLabel, {
                                                children: "To xNFT's TokenID"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Select, {
                                                onChange: (e)=>setToTokenId(e.target.value),
                                                value: toTokenId,
                                                children: Object.entries(transferValueToTokenId).map((entry)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                                        value: entry[0],
                                                        children: [
                                                            "tokenId = ",
                                                            entry[0]
                                                        ]
                                                    }))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.ModalFooter, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                        colorScheme: "blue",
                                        mr: 3,
                                        onClick: ()=>mergeXNFTValue(),
                                        isLoading: isMerging,
                                        loadingText: "Merging",
                                        children: "Merge"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                        onClick: onClose,
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Modal, {
                isOpen: modal1.isOpen,
                onClose: modal1.onClose,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.ModalOverlay, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.ModalContent, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.ModalHeader, {
                                children: "Filter xRobot"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.ModalCloseButton, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.ModalBody, {
                                pb: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.FormControl, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.FormLabel, {
                                            children: "Address of xRobot"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Input, {
                                            value: tmpRobotAddress,
                                            onChange: (e)=>setTmpRobotAddress(e.target.value)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.ModalFooter, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                        colorScheme: "red",
                                        mr: 3,
                                        onClick: ()=>{
                                            setRobotAddress("");
                                            setTmpRobotAddress("");
                                            modal1.onClose();
                                        },
                                        children: "Clear"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                        colorScheme: "blue",
                                        mr: 3,
                                        onClick: ()=>{
                                            setRobotAddress(tmpRobotAddress);
                                            modal1.onClose();
                                        },
                                        children: "Confirm"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                        onClick: modal1.onClose,
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const NFT_NFTBalances = (NFTBalances);

;// CONCATENATED MODULE: ./src/components/templates/balances/NFT/index.ts


// EXTERNAL MODULE: external "moralis"
var external_moralis_ = __webpack_require__(1544);
var external_moralis_default = /*#__PURE__*/__webpack_require__.n(external_moralis_);
;// CONCATENATED MODULE: ./pages/balances/nft.tsx





const ERC20 = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Default/* Default */.g, {
        pageName: "NFT Balances",
        children: /*#__PURE__*/ jsx_runtime_.jsx(NFT_NFTBalances, {
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
    const balances = await external_moralis_default().EvmApi.account.getNFTs({
        address: session === null || session === void 0 ? void 0 : session.user.address,
        chain: process.env.APP_CHAIN_ID
    });
    // (balances.result).filter((balance)=> balance.result.)
    return {
        props: {
            balances: JSON.parse(JSON.stringify(balances.result))
        }
    };
};
/* harmony default export */ const nft = (ERC20);


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
var __webpack_exports__ = __webpack_require__.X(0, [952,925,601,392], () => (__webpack_exec__(2299)));
module.exports = __webpack_exports__;

})();