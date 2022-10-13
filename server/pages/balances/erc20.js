"use strict";
(() => {
var exports = {};
exports.id = 780;
exports.ids = [780];
exports.modules = {

/***/ 8778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layouts_Default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2601);
/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3318);
/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_getErc20LogoAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5390);
/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1544);
/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_templates_balances_ERC20__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8707);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_templates_balances_ERC20__WEBPACK_IMPORTED_MODULE_5__]);
components_templates_balances_ERC20__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ERC20 = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layouts_Default__WEBPACK_IMPORTED_MODULE_1__/* .Default */ .g, {
        pageName: "ERC20 Balances",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_templates_balances_ERC20__WEBPACK_IMPORTED_MODULE_5__/* .ERC20Balances */ .h, {
            ...props
        })
    });
};
const getServerSideProps = async (context)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)(context);
    await moralis__WEBPACK_IMPORTED_MODULE_4___default().start({
        apiKey: process.env.MORALIS_API_KEY
    });
    if (!(session === null || session === void 0 ? void 0 : session.user.address)) {
        return {
            props: {
                error: "Connect your wallet first"
            }
        };
    }
    const balances = await moralis__WEBPACK_IMPORTED_MODULE_4___default().EvmApi.account.getTokenBalances({
        address: session === null || session === void 0 ? void 0 : session.user.address,
        chain: process.env.APP_CHAIN_ID
    });
    console.log(balances);
    const tokensWithLogosAdded = balances.toJSON().map((balance)=>{
        var ref;
        return {
            ...balance,
            token: {
                ...balance.token,
                logo: (0,utils_getErc20LogoAddress__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
                    blockchain: "ethereum",
                    address: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__.EvmAddress.create(((ref = balance.token) === null || ref === void 0 ? void 0 : ref.contractAddress) || "").checksum
                })
            }
        };
    });
    console.log(tokensWithLogosAdded);
    return {
        props: {
            balances: JSON.parse(JSON.stringify(tokensWithLogosAdded))
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ERC20);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6318:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6767);
/* harmony import */ var _ABI_xen_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2607);
/* harmony import */ var _ABI_xRobot_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2817);
/* harmony import */ var _ABI_xNFT_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1392);
/* harmony import */ var _ABI_rewardCalculator_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3276);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9766);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bignumber_js__WEBPACK_IMPORTED_MODULE_7__]);
bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const ERC20Balances = ({ account , web3 , chainId  })=>{
    const hoverTrColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.100", "gray.700");
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    const { 0: robotList , 1: setRobotList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: isClaiming , 1: setIsClaiming  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: xen , 1: setXen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: xNFT , 1: setXNFT  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: rewardCalculator , 1: setRewardCalculator  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: globalRank , 1: setGlobalRank  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    const initialRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
    const finalRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
    let robotNumber = "";
    let termPerRobot = "";
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (web3 != null) {
            setXen(new web3.eth.Contract(_ABI_xen_json__WEBPACK_IMPORTED_MODULE_3__, utils_config__WEBPACK_IMPORTED_MODULE_9__/* .xenAddr */ .xu[chainId]));
            setXNFT(new web3.eth.Contract(_ABI_xNFT_json__WEBPACK_IMPORTED_MODULE_5__, utils_config__WEBPACK_IMPORTED_MODULE_9__/* .xNFTAddr */ .pE[chainId]));
            setRewardCalculator(new web3.eth.Contract(_ABI_rewardCalculator_json__WEBPACK_IMPORTED_MODULE_6__, utils_config__WEBPACK_IMPORTED_MODULE_9__/* .rewardCalculatorAddr */ .BD[chainId]));
        }
    }, [
        web3
    ]);
    const getGlobalRank = ()=>{
        const contractFunc = xen.methods["globalRank"];
        contractFunc().call({
            from: account
        }).then((result)=>{
            setGlobalRank(result);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (xen != null) {
            getGlobalRank();
        }
    }, [
        xen
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (xNFT != null) {
            getAllRobots();
        }
    }, [
        xNFT
    ]);
    const handleRobotNumberChange = (e)=>{
        robotNumber = e.target.value;
    };
    const handleTermPerRobotChange = (e)=>{
        termPerRobot = e.target.value;
    };
    const getOneRobot = (robotAddr, callback)=>{
        const xRobot = new web3.eth.Contract(_ABI_xRobot_json__WEBPACK_IMPORTED_MODULE_4__, robotAddr);
        let contractFunc = xRobot.methods["getUserMint"];
        contractFunc().call({
            from: account
        }).then((mintInfo)=>{
            contractFunc = rewardCalculator.methods["calculateMintReward"];
            contractFunc(mintInfo.rank, mintInfo.term, mintInfo.maturityTs, mintInfo.amplifier, mintInfo.eaaRate).call({
                from: account
            }).then((reward)=>{
                contractFunc = xRobot.methods["totalReward"];
                contractFunc().call({
                    from: account
                }).then((claimedReward)=>{
                    contractFunc = xNFT.methods["allTokensInSlot"];
                    contractFunc(robotAddr).call({
                        from: account
                    }).then((allNFTIds)=>{
                        const robotInfo = {};
                        robotInfo.address = robotAddr;
                        robotInfo.rank = mintInfo.rank;
                        robotInfo.reward = claimedReward > 0 ? claimedReward : reward;
                        robotInfo.term = mintInfo.term;
                        robotInfo.maturityTs = mintInfo.maturityTs;
                        robotInfo.claimed = claimedReward > 0;
                        robotInfo.xNFTIds = allNFTIds;
                        callback(robotInfo);
                    });
                });
            });
        });
    };
    const getAllRobots = ()=>{
        const contractFunc = xNFT.methods["getRobots"];
        let count = 0;
        contractFunc(account).call({
            from: account
        }).then((robotAddrs)=>{
            const robotsInfo = [];
            const callbackFunc = (robotInfo)=>{
                count++;
                robotsInfo.push(robotInfo);
                if (count === robotAddrs.length) {
                    setRobotList(robotsInfo);
                }
            };
            robotAddrs.forEach((robotAddr)=>{
                getOneRobot(robotAddr, callbackFunc);
            });
        });
    };
    const createRobots = ()=>{
        const contractFunc = xNFT.methods["batchMint"];
        const data = contractFunc(robotNumber, termPerRobot).encodeABI();
        const tx = {
            from: account,
            to: utils_config__WEBPACK_IMPORTED_MODULE_9__/* .xNFTAddr */ .pE[chainId],
            data,
            value: 0,
            gasLimit: 0
        };
        contractFunc(robotNumber, termPerRobot).estimateGas({
            from: account
        }).then((gasLimit)=>{
            tx.gasLimit = gasLimit;
            web3.eth.sendTransaction(tx).on("transactionHash", ()=>{
                setIsLoading(true);
            }).on("receipt", ()=>{
                onClose();
                setIsLoading(false);
                getAllRobots();
            }).on("error", ()=>{
                setIsLoading(false);
                toast({
                    title: "Create Robots Failed",
                    description: "Failed",
                    status: "error",
                    position: "bottom-right",
                    isClosable: true
                });
            });
        });
    };
    const claimReward = (robotInfo)=>{
        if (parseInt(robotInfo.maturityTs) * 1000 > new Date().getTime()) {
            toast({
                title: "Warning",
                description: "It's not time yet",
                status: "warning",
                position: "bottom-right",
                isClosable: true
            });
            return;
        }
        if (robotInfo.claimed) {
            toast({
                title: "Warning",
                description: "Have been claimed",
                status: "warning",
                position: "bottom-right",
                isClosable: true
            });
            return;
        }
        const xRobot = new web3.eth.Contract(_ABI_xRobot_json__WEBPACK_IMPORTED_MODULE_4__, robotInfo.address);
        const contractFunc = xRobot.methods["claimMintReward"];
        const data = contractFunc().encodeABI();
        const tx = {
            from: account,
            to: robotInfo.address,
            data,
            value: 0,
            gasLimit: 0
        };
        contractFunc().estimateGas({
            from: account
        }).then((gasLimit)=>{
            tx.gasLimit = gasLimit;
            web3.eth.sendTransaction(tx).on("transactionHash", ()=>{
                setClaimInfo(robotInfo.address, true);
            }).on("receipt", ()=>{
                onClose();
                setClaimInfo(robotInfo.address, false);
                getOneRobot(robotInfo.address, updateOneRobot);
            }).on("error", ()=>{
                setClaimInfo(robotInfo.address, false);
                toast({
                    title: "Failed",
                    description: "Claim failed",
                    status: "error",
                    position: "bottom-right",
                    isClosable: true
                });
            });
        });
    };
    const setClaimInfo = (address, bClaiming)=>{
        const claimingInfo = {};
        claimingInfo[address] = bClaiming;
        setIsClaiming(claimingInfo);
    };
    const updateOneRobot = (robotInfo)=>{
        const updatedRobotList = robotList.map((robot)=>{
            if (robot.address === robotInfo.address) {
                return robotInfo;
            }
            return robot;
        });
        setRobotList(updatedRobotList);
    };
    const updateReward = (robotAddress)=>{
        getOneRobot(robotAddress, updateOneRobot);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                size: "lg",
                marginBottom: 6,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                            spacing: "18px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: "Your XRobots"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                    label: "click to refresh the value",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        colorScheme: "teal",
                                        variant: "outline",
                                        onClick: getGlobalRank,
                                        children: [
                                            "globalRank = ",
                                            globalRank
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                            spacing: "18px",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                colorScheme: "teal",
                                variant: "outline",
                                onClick: onOpen,
                                children: "Create xRobots"
                            })
                        })
                    ]
                })
            }),
            (robotList === null || robotList === void 0 ? void 0 : robotList.length) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                border: "2px",
                borderColor: hoverTrColor,
                borderRadius: "xl",
                padding: "24px 18px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TableContainer, {
                    w: "full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table, {
                        className: "table-tiny",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Thead, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                                            isNumeric: true,
                                            children: "Address"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                                            children: "Rank"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                                            children: "Term"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                                            children: "MaturityTs"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                                            children: "Reward"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                                            children: "Status"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                                            children: "Number of xNFTs"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                                            children: "Operators"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tbody, {
                                children: robotList === null || robotList === void 0 ? void 0 : robotList.map((robot, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                                        _hover: {
                                            bgColor: hoverTrColor
                                        },
                                        cursor: "pointer",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                                isNumeric: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                                    label: robot.address,
                                                    children: (0,utils_format__WEBPACK_IMPORTED_MODULE_10__/* .getEllipsisTxt */ .e)(robot.address || "")
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                                isNumeric: true,
                                                children: robot.rank
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                                isNumeric: true,
                                                children: robot.term
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                                isNumeric: true,
                                                children: moment__WEBPACK_IMPORTED_MODULE_8___default()(new Date(parseInt(robot.maturityTs) * 1000)).format("YYYY/MM/DD HH:mm:ss")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                                isNumeric: true,
                                                children: robot.claimed ? new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["default"](robot.reward).shiftedBy(-18).toNumber() : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                                    label: "click to refresh the value",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                        colorScheme: "teal",
                                                        variant: "ghost",
                                                        onClick: ()=>updateReward(robot.address),
                                                        children: robot.reward
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                                color: robot.claimed ? "teal" : "",
                                                children: robot.claimed ? "Claimed" : "Not Claimed"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                                isNumeric: true,
                                                children: robot.xNFTIds.length
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                                    spacing: 4,
                                                    align: "center",
                                                    children: robot.claimed ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                        colorScheme: "teal",
                                                        variant: "outline",
                                                        isLoading: isClaiming[robot.address],
                                                        loadingText: "Claiming",
                                                        onClick: ()=>claimReward(robot),
                                                        children: "Claim Reward"
                                                    })
                                                })
                                            })
                                        ]
                                    }, `${robot.address}-${key}-tr`))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tfoot, {})
                        ]
                    })
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: "Looks Like you do not have any XEN Robot"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
                initialFocusRef: initialRef,
                finalFocusRef: finalRef,
                isOpen: isOpen,
                onClose: onClose,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, {
                                children: "Create XEN Robots"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalCloseButton, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
                                pb: 6,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                children: "Robots Number"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                ref: initialRef,
                                                onChange: handleRobotNumberChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                children: "Term Per Robot"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                onChange: handleTermPerRobotChange
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        colorScheme: "blue",
                                        mr: 3,
                                        onClick: createRobots,
                                        isLoading: isLoading,
                                        loadingText: "Creating",
                                        children: "Create"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        onClick: onClose,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ERC20Balances);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8707:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _ERC20Balances__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ERC20Balances__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6318);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ERC20Balances__WEBPACK_IMPORTED_MODULE_0__]);
_ERC20Balances__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getErc20LogoAddress = ({ blockchain ="ethereum" , address  })=>`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${blockchain}/assets/${address}/logo.png`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getErc20LogoAddress);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 3318:
/***/ ((module) => {

module.exports = require("@moralisweb3/evm-utils");

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

/***/ }),

/***/ 9766:
/***/ ((module) => {

module.exports = import("bignumber.js");;

/***/ }),

/***/ 3276:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"contract IXEN","name":"_xen","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"cRank","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"amplifier","type":"uint256"},{"internalType":"uint256","name":"eaaRate","type":"uint256"}],"name":"calculateMintReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"mintableTime","type":"uint256"},{"internalType":"uint256","name":"timeNow","type":"uint256"}],"name":"getLeftDayToMint","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PENALTY_PCT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_IN_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAWAL_WINDOW_DAYS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"xen","outputs":[{"internalType":"contract IXEN","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');

/***/ }),

/***/ 2817:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"contract IXEN","name":"_xen","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"claimMintReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"term","type":"uint256"}],"name":"claimRank","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getUserMint","outputs":[{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"rank","type":"uint256"},{"internalType":"uint256","name":"amplifier","type":"uint256"},{"internalType":"uint256","name":"eaaRate","type":"uint256"}],"internalType":"struct MintInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"share","type":"uint256"},{"internalType":"uint256","name":"totalShare","type":"uint256"}],"name":"withdrawReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"xen","outputs":[{"internalType":"contract IXEN","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');

/***/ }),

/***/ 2607:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"name":"MintClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"term","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rank","type":"uint256"}],"name":"RankClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"term","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"AUTHORS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DAYS_IN_YEAR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EAA_PM_START","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EAA_PM_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EAA_RANK_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GENESIS_RANK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PENALTY_PCT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TERM_END","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TERM_START","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_TERM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_AMPLIFIER_END","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_AMPLIFIER_START","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_IN_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TERM_AMPLIFIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TERM_AMPLIFIER_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAWAL_WINDOW_DAYS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_APY_DAYS_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_APY_END","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_APY_START","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_MIN_BURN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_MIN_STAKE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activeMinters","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activeStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimMintReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"other","type":"address"},{"internalType":"uint256","name":"pct","type":"uint256"}],"name":"claimMintRewardAndShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pct","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"}],"name":"claimMintRewardAndStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"term","type":"uint256"}],"name":"claimRank","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"genesisTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentAPY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentEAAR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentMaxTerm","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rankDelta","type":"uint256"},{"internalType":"uint256","name":"amplifier","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"eaa","type":"uint256"}],"name":"getGrossReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getUserMint","outputs":[{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"rank","type":"uint256"},{"internalType":"uint256","name":"amplifier","type":"uint256"},{"internalType":"uint256","name":"eaaRate","type":"uint256"}],"internalType":"struct XENCrypto.MintInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserStake","outputs":[{"components":[{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"apy","type":"uint256"}],"internalType":"struct XENCrypto.StakeInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"globalRank","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalXenStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userBurns","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userMints","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"rank","type":"uint256"},{"internalType":"uint256","name":"amplifier","type":"uint256"},{"internalType":"uint256","name":"eaaRate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userStakes","outputs":[{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"apy","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,925,601,392], () => (__webpack_exec__(8778)));
module.exports = __webpack_exports__;

})();