"use strict";
exports.id = 601;
exports.ids = [601];
exports.modules = {

/***/ 2601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* reexport */ Default_Default)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/components/modules/index.ts + 22 modules
var modules = __webpack_require__(1190);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/layouts/Default/Default.tsx




const Default = ({ children , pageName  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: `${pageName} | XNFT`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                maxW: "container.lg",
                p: 3,
                marginTop: 100,
                as: "main",
                minH: "70vh",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modules/* Footer */.$_, {})
        ]
    });
/* harmony default export */ const Default_Default = (Default);

;// CONCATENATED MODULE: ./src/components/layouts/Default/index.ts



/***/ }),

/***/ 1190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$_": () => (/* reexport */ Footer_Footer),
  "aU": () => (/* reexport */ NFTCard_NFTCard)
});

// UNUSED EXPORTS: ConnectButton, Header

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ./src/components/elements/ColorModeButton/ColorModeButton.tsx



const ColorModeButton_ColorModeButton = ()=>{
    const { colorMode , toggleColorMode  } = useColorMode();
    return /*#__PURE__*/ _jsx(Button, {
        size: "sm",
        onClick: toggleColorMode,
        children: colorMode === "light" ? /*#__PURE__*/ _jsx(SunIcon, {}) : /*#__PURE__*/ _jsx(MoonIcon, {})
    });
};
/* harmony default export */ const elements_ColorModeButton_ColorModeButton = ((/* unused pure expression or super */ null && (ColorModeButton_ColorModeButton)));

;// CONCATENATED MODULE: ./src/components/elements/ColorModeButton/index.ts


// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/elements/MoralisLogo/MoralisLogo.tsx



const MoralisLogo_MoralisLogo = ()=>{
    const { colorMode  } = useColorMode();
    return /*#__PURE__*/ _jsx(Image, {
        src: colorMode === "dark" ? "/Moralis-DarkBG.svg" : "/Moralis-LightBG.svg",
        height: 45,
        width: 150,
        alt: "Moralis"
    });
};
/* harmony default export */ const elements_MoralisLogo_MoralisLogo = ((/* unused pure expression or super */ null && (MoralisLogo_MoralisLogo)));

;// CONCATENATED MODULE: ./src/components/elements/MoralisLogo/index.ts


// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/elements/navigation/SubNav/SubNav.tsx





const SubNav_SubNav = ({ label , href , subLabel , logo  })=>{
    return /*#__PURE__*/ _jsx(NextLink, {
        href: href || "#",
        children: /*#__PURE__*/ _jsx(Link, {
            role: "group",
            display: "block",
            p: 2,
            rounded: "md",
            _hover: {
                bg: useColorModeValue("green.50", "gray.900")
            },
            children: /*#__PURE__*/ _jsxs(Stack, {
                direction: "row",
                align: "center",
                children: [
                    /*#__PURE__*/ _jsx(Illustration, {
                        logo: logo,
                        width: 46,
                        height: 46,
                        id: `${label}-navitem`
                    }),
                    /*#__PURE__*/ _jsxs(Box, {
                        children: [
                            /*#__PURE__*/ _jsx(Text, {
                                transition: "all .3s ease",
                                _groupHover: {
                                    color: "green.400"
                                },
                                fontWeight: 500,
                                children: label
                            }),
                            /*#__PURE__*/ _jsx(Text, {
                                fontSize: "sm",
                                children: subLabel
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Flex, {
                        transition: "all .3s ease",
                        transform: "translateX(-10px)",
                        opacity: 0,
                        _groupHover: {
                            opacity: "100%",
                            transform: "translateX(0)"
                        },
                        justify: "flex-end",
                        align: "center",
                        flex: 1,
                        children: /*#__PURE__*/ _jsx(Icon, {
                            color: "green.400",
                            w: 5,
                            h: 5,
                            as: ChevronRightIcon
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const navigation_SubNav_SubNav = ((/* unused pure expression or super */ null && (SubNav_SubNav)));

;// CONCATENATED MODULE: ./src/components/elements/navigation/SubNav/index.ts


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/elements/navigation/NavItem/NavItem.tsx






const NavItem_NavItem = ({ label , children , href  })=>{
    const linkColor = useColorModeValue("gray.600", "gray.400");
    const linkActiveColor = useColorModeValue("gray.800", "white");
    const router = useRouter();
    const isCurrentPath = router.asPath === href || href !== "/" && router.pathname.startsWith(href || "");
    return /*#__PURE__*/ _jsxs(Popover, {
        trigger: "hover",
        placement: "bottom-start",
        children: [
            /*#__PURE__*/ _jsx(PopoverTrigger, {
                children: /*#__PURE__*/ _jsx(Box, {
                    children: /*#__PURE__*/ _jsx(Box, {
                        fontSize: 15,
                        fontWeight: 500,
                        color: isCurrentPath ? linkActiveColor : linkColor,
                        _hover: {
                            textDecoration: "none",
                            color: linkActiveColor
                        },
                        cursor: "pointer",
                        children: children ? /*#__PURE__*/ _jsxs(_Fragment, {
                            children: [
                                label,
                                " ",
                                /*#__PURE__*/ _jsx(ChevronDownIcon, {})
                            ]
                        }) : /*#__PURE__*/ _jsx(NextLink, {
                            href: href || "/",
                            children: /*#__PURE__*/ _jsx(Link, {
                                _hover: {
                                    textDecoration: "none"
                                },
                                children: label
                            })
                        })
                    })
                })
            }),
            children && /*#__PURE__*/ _jsx(PopoverContent, {
                border: 0,
                boxShadow: "xl",
                p: 4,
                rounded: "xl",
                minW: "sm",
                children: /*#__PURE__*/ _jsx(Stack, {
                    children: children.map((child)=>/*#__PURE__*/ _jsx(SubNav, {
                            ...child
                        }, child.label))
                })
            })
        ]
    });
};
/* harmony default export */ const navigation_NavItem_NavItem = ((/* unused pure expression or super */ null && (NavItem_NavItem)));

;// CONCATENATED MODULE: ./src/components/elements/navigation/NavItem/index.ts


;// CONCATENATED MODULE: ./src/components/elements/navigation/NavBar/paths.ts
const paths_NAV_LINKS = [
    {
        label: "XRobot",
        href: "/"
    },
    {
        label: "XNFT",
        href: "/xNFT"
    },
    {
        label: "NFT Market",
        href: "/market"
    }, 
];
/* harmony default export */ const paths = ((/* unused pure expression or super */ null && (paths_NAV_LINKS)));

;// CONCATENATED MODULE: ./src/components/elements/navigation/NavBar/NavBar.tsx




const NavBar_NavBar = ()=>{
    return /*#__PURE__*/ _jsx(HStack, {
        gap: "15px",
        children: NAV_LINKS.map((link)=>/*#__PURE__*/ _jsx(NavItem, {
                ...link
            }, `link-${link.label}`))
    });
};
/* harmony default export */ const navigation_NavBar_NavBar = ((/* unused pure expression or super */ null && (NavBar_NavBar)));

;// CONCATENATED MODULE: ./src/components/elements/navigation/NavBar/index.ts


;// CONCATENATED MODULE: ./src/components/elements/navigation/index.ts




;// CONCATENATED MODULE: ./src/components/elements/index.ts




;// CONCATENATED MODULE: ./src/components/modules/Header/Header.tsx



const Header = ()=>{
    return /*#__PURE__*/ _jsx(Box, {
        borderBottom: "1px",
        borderBottomColor: "chakra-border-color",
        children: /*#__PURE__*/ _jsx(Container, {
            maxW: "container.xl",
            p: "10px",
            children: /*#__PURE__*/ _jsxs(Flex, {
                align: "center",
                justify: "space-between",
                children: [
                    /*#__PURE__*/ _jsx(MoralisLogo, {}),
                    /*#__PURE__*/ _jsx(NavBar, {}),
                    /*#__PURE__*/ _jsx(HStack, {
                        gap: "10px",
                        children: /*#__PURE__*/ _jsx(ColorModeButton, {})
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Header_Header = ((/* unused pure expression or super */ null && (Header)));

;// CONCATENATED MODULE: ./src/components/modules/Header/index.ts


;// CONCATENATED MODULE: ./src/components/modules/Footer/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        textAlign: "center",
        w: "full",
        p: 6,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
            children: [
                "\uD83D\uDE4B You have questions? Ask in the",
                " ",
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                    href: "https://discord.gg/VQ8EA78w",
                    isExternal: true,
                    alignItems: "center",
                    children: [
                        "Discord ",
                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.ExternalLinkIcon, {})
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/modules/Footer/index.ts


// EXTERNAL MODULE: ./node_modules/@web3uikit/icons/dist/index.es.js
var index_es = __webpack_require__(5821);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/utils/format.ts
var format = __webpack_require__(6767);
// EXTERNAL MODULE: ./src/utils/config.ts
var config = __webpack_require__(5125);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "react-copy-to-clipboard"
var external_react_copy_to_clipboard_ = __webpack_require__(2807);
;// CONCATENATED MODULE: ./src/components/modules/NFTCard/NFTCard.tsx









const NFTCard = ({ account , web3 , xNFT , tokenId , owner , attributes , description , name , image , setMergeInfo , refresh  })=>{
    const bgColor = (0,react_.useColorModeValue)("none", "gray.700");
    const borderColor = (0,react_.useColorModeValue)("gray.200", "gray.700");
    const descBgColor = (0,react_.useColorModeValue)("gray.100", "gray.600");
    const modal1 = (0,react_.useDisclosure)();
    const modal2 = (0,react_.useDisclosure)();
    const { 0: share , 1: setShare  } = (0,external_react_.useState)(0);
    const { 0: robotContract , 1: setRobotContract  } = (0,external_react_.useState)("");
    const { 0: reward , 1: setReward  } = (0,external_react_.useState)(0);
    const { 0: withdrawed , 1: setWithdrawed  } = (0,external_react_.useState)("");
    const { 0: term , 1: setTerm  } = (0,external_react_.useState)(0);
    const { 0: maturityTs , 1: setMaturityTs  } = (0,external_react_.useState)("");
    const { 0: rank , 1: setRank  } = (0,external_react_.useState)(0);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: isSpliting , 1: setIsSpliting  } = (0,external_react_.useState)(false);
    const { 0: isTransferring , 1: setIsTransferring  } = (0,external_react_.useState)(false);
    const { 0: isOutOfTime , 1: setIsOutOfTime  } = (0,external_react_.useState)(false);
    const { 0: transferDirection , 1: setTransferDirection  } = (0,external_react_.useState)("0");
    const { 0: shareOut , 1: setShareOut  } = (0,external_react_.useState)("1");
    const toast = (0,react_.useToast)();
    const initialRef = external_react_default().useRef(null);
    let sharesInfo = "";
    let toAddr = "";
    (0,external_react_.useEffect)(()=>{
        attributes.forEach((attribute)=>{
            if (attribute.trait_type === "contract") {
                setRobotContract(attribute.value);
            }
            if (attribute.trait_type === "share") {
                setShare(attribute.value);
            }
            if (attribute.trait_type === "reward") {
                setReward(attribute.value);
            }
            if (attribute.trait_type === "withdrawed") {
                setWithdrawed(attribute.value);
            }
            if (attribute.trait_type === "term") {
                setTerm(attribute.value);
            }
            if (attribute.trait_type === "maturityTs") {
                setMaturityTs(attribute.value);
            }
            if (attribute.trait_type === "rank") {
                setRank(attribute.value);
            }
            setIsOutOfTime(parseInt(maturityTs) * 1000 < new Date().getTime());
        });
    });
    (0,external_react_.useEffect)(()=>{
        if (transferDirection === "1") {
            setMergeInfo(config/* MergeType.FromAdd */.dx.FromAdd, tokenId, parseInt(shareOut));
        } else if (transferDirection === "2") {
            setMergeInfo(config/* MergeType.ToAdd */.dx.ToAdd, tokenId, 0);
        } else if (transferDirection === "3") {
            setMergeInfo(config/* MergeType.Clear */.dx.Clear, tokenId, 0);
        }
    }, [
        transferDirection,
        shareOut
    ]);
    const withdrawReward = (tId)=>{
        console.log(xNFT);
        const contractFunc = xNFT.methods["withdrawReward"];
        const data = contractFunc([
            tId
        ]).encodeABI();
        const tx = {
            from: account,
            to: xNFT._address,
            data,
            value: 0,
            gasLimit: 0
        };
        contractFunc([
            tId
        ]).estimateGas({
            from: account
        }).then((gasLimit)=>{
            tx.gasLimit = gasLimit;
            web3.eth.sendTransaction(tx).on("transactionHash", ()=>{
                setIsLoading(true);
            }).on("receipt", ()=>{
                modal1.onClose();
                setIsLoading(false);
            }).on("error", ()=>{
                setIsLoading(false);
                toast({
                    title: "Failed",
                    description: "Withdraw reward failed",
                    status: "error",
                    position: "bottom-right",
                    isClosable: true
                });
            });
        });
    };
    const splitXNFT = ()=>{
        const shares = sharesInfo.split(",").map((shareStr)=>{
            try {
                return parseInt(shareStr);
            } catch (error) {
                toast({
                    title: "Warning",
                    description: "Please input right numbers",
                    status: "warning",
                    position: "bottom-right",
                    isClosable: true
                });
            }
            return 0;
        });
        console.log(shares);
        const contractFunc = xNFT.methods["split"];
        const data = contractFunc(tokenId, shares).encodeABI();
        const tx = {
            from: account,
            to: xNFT._address,
            data,
            value: 0,
            gasLimit: 0
        };
        contractFunc(tokenId, shares).estimateGas({
            from: account
        }).then((gasLimit)=>{
            tx.gasLimit = gasLimit;
            web3.eth.sendTransaction(tx).on("transactionHash", ()=>{
                setIsSpliting(true);
            }).on("receipt", ()=>{
                modal1.onClose();
                setIsSpliting(false);
                refresh();
            }).on("error", ()=>{
                setIsSpliting(false);
                toast({
                    title: "Failed",
                    description: "Split xNFT failed",
                    status: "error",
                    position: "bottom-right",
                    isClosable: true
                });
            });
        });
    };
    const transferXNFT = ()=>{
        console.log(account, toAddr, tokenId);
        const contractFunc = xNFT.methods["transferFrom(address,address,uint256)"];
        const data = contractFunc(account, toAddr, tokenId).encodeABI();
        const tx = {
            from: account,
            to: xNFT._address,
            data,
            value: 0,
            gasLimit: 0
        };
        contractFunc(account, toAddr, tokenId).estimateGas({
            from: account
        }).then((gasLimit)=>{
            tx.gasLimit = gasLimit;
            web3.eth.sendTransaction(tx).on("transactionHash", ()=>{
                setIsTransferring(true);
            }).on("receipt", ()=>{
                modal2.onClose();
                setIsTransferring(false);
                refresh(tokenId);
            }).on("error", ()=>{
                setIsTransferring(false);
                toast({
                    title: "Failed",
                    description: "Transfer xNFT failed",
                    status: "error",
                    position: "bottom-right",
                    isClosable: true
                });
            });
        });
    };
    const handleSharesChange = (e)=>{
        sharesInfo = e.target.value;
    };
    const handleToAddrChange = (e)=>{
        toAddr = e.target.value;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                bgColor: bgColor,
                padding: 3,
                borderRadius: "xl",
                borderWidth: "1px",
                borderColor: borderColor,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        maxHeight: "260px",
                        overflow: "hidden",
                        borderRadius: "xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                            src: image,
                            alt: "nft",
                            minH: "260px",
                            minW: "260px",
                            boxSize: "100%",
                            objectFit: "fill"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                        alignItems: "center",
                        justify: "space-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                mt: "1",
                                fontWeight: "semibold",
                                as: "h4",
                                noOfLines: 1,
                                marginTop: 2,
                                children: [
                                    name,
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                        label: description,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.QuestionOutlineIcon, {
                                            w: 4,
                                            h: 4,
                                            marginLeft: "2px"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(index_es/* Eth */.e8, {
                                        fontSize: "20px"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        as: "h4",
                                        noOfLines: 1,
                                        fontWeight: "medium",
                                        fontSize: "smaller",
                                        children: "ERC3525"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        width: "100%",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    as: "h4",
                                    noOfLines: 1,
                                    fontWeight: "medium",
                                    fontSize: "sm",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "owner:"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    as: "h4",
                                    noOfLines: 1,
                                    fontSize: "sm",
                                    children: owner
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
                        columns: 2,
                        spacing: 4,
                        bgColor: descBgColor,
                        padding: 2.5,
                        borderRadius: "xl",
                        marginTop: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                width: "100%",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontWeight: "medium",
                                            fontSize: "sm",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                                children: [
                                                    "xRobot",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                                        label: "Corresponding to Slot in the ERC3525 protocol",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.QuestionOutlineIcon, {
                                                            w: 3,
                                                            h: 3,
                                                            marginLeft: "2px"
                                                        })
                                                    }),
                                                    ":"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontSize: "sm",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                                label: `${robotContract}, click to copy`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_copy_to_clipboard_.CopyToClipboard, {
                                                    text: robotContract,
                                                    onCopy: ()=>toast({
                                                            title: "Success",
                                                            description: "Address has been copied",
                                                            status: "success",
                                                            position: "bottom-right",
                                                            isClosable: true
                                                        }),
                                                    children: (0,format/* getEllipsisTxt */.e)(robotContract || "")
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                width: "100%",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontWeight: "medium",
                                            fontSize: "sm",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "share:"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontSize: "small",
                                            children: share
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                width: "100%",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontWeight: "medium",
                                            fontSize: "sm",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "reward:"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontSize: "small",
                                            children: reward
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                width: "100%",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontWeight: "medium",
                                            fontSize: "sm",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "withdrawed:"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontSize: "small",
                                            children: withdrawed
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                width: "100%",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontWeight: "medium",
                                            fontSize: "sm",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "term:"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontSize: "small",
                                            children: term
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                width: "100%",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontWeight: "medium",
                                            fontSize: "sm",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "rank:"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontSize: "small",
                                            children: rank
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                width: "120%",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontWeight: "medium",
                                            fontSize: "sm",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "maturityTs:"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "h4",
                                            noOfLines: 1,
                                            fontSize: "small",
                                            children: external_moment_default()(new Date(parseInt(maturityTs) * 1000)).format("YYYY/MM/DD HH:mm:ss")
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.SimpleGrid, {
                        columns: 1,
                        spacing: 4,
                        bgColor: descBgColor,
                        padding: 2.5,
                        borderRadius: "xl",
                        marginTop: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                alignItems: "center",
                                justify: "space-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        colorScheme: "teal",
                                        variant: "outline",
                                        disabled: account !== owner || isOutOfTime,
                                        onClick: modal1.onOpen,
                                        children: "Split"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        colorScheme: "teal",
                                        variant: "outline",
                                        disabled: account !== owner,
                                        onClick: modal2.onOpen,
                                        children: "Transfer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        colorScheme: "teal",
                                        variant: "outline",
                                        disabled: !isOutOfTime || withdrawed === "yes",
                                        onClick: ()=>withdrawReward(tokenId),
                                        isLoading: isLoading,
                                        loadingText: "Withdrawing",
                                        children: "Withdraw"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
                        columns: 1,
                        spacing: 4,
                        bgColor: descBgColor,
                        padding: 2.5,
                        borderRadius: "xl",
                        marginTop: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.RadioGroup, {
                                    onChange: setTransferDirection,
                                    value: transferDirection,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                        alignItems: "center",
                                        justify: "space-around",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Radio, {
                                                value: "1",
                                                isDisabled: account !== owner || isOutOfTime,
                                                colorScheme: "teal",
                                                children: "Transfer out of share"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Radio, {
                                                value: "2",
                                                isDisabled: isOutOfTime,
                                                colorScheme: "teal",
                                                children: "Transfer to share"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Radio, {
                                                value: "3",
                                                isDisabled: isOutOfTime,
                                                colorScheme: "teal",
                                                children: "Not Transfer"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    alignItems: "center",
                                    justify: "flex-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Out Share:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.NumberInput, {
                                            min: 1,
                                            max: share,
                                            isDisabled: account !== owner || isOutOfTime || transferDirection !== "1",
                                            onChange: setShareOut,
                                            value: shareOut,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.NumberInputField, {
                                                    placeholder: "share of transfer out"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.NumberInputStepper, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.NumberIncrementStepper, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.NumberDecrementStepper, {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Modal, {
                initialFocusRef: initialRef,
                isOpen: modal1.isOpen,
                onClose: modal1.onClose,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalOverlay, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalContent, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalHeader, {
                                children: [
                                    "Split xNFT [total share=",
                                    share,
                                    "]"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalCloseButton, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalBody, {
                                pb: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                                            children: "Shares"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                            ref: initialRef,
                                            onChange: handleSharesChange,
                                            placeholder: "eg: 100,500,1000"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalFooter, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        colorScheme: "blue",
                                        mr: 3,
                                        onClick: ()=>splitXNFT(),
                                        isLoading: isSpliting,
                                        loadingText: "Spliting",
                                        children: "Split"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        onClick: modal1.onClose,
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Modal, {
                isOpen: modal2.isOpen,
                onClose: modal2.onClose,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalOverlay, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalContent, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalHeader, {
                                children: "Transfer xNFT"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalCloseButton, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalBody, {
                                pb: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                                            children: "To Address"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                            onChange: handleToAddrChange
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalFooter, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        colorScheme: "blue",
                                        mr: 3,
                                        onClick: ()=>transferXNFT(),
                                        isLoading: isTransferring,
                                        loadingText: "Transferring",
                                        children: "Transfer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        onClick: modal2.onClose,
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
/* harmony default export */ const NFTCard_NFTCard = (NFTCard);

;// CONCATENATED MODULE: ./src/components/modules/NFTCard/index.ts



// EXTERNAL MODULE: external "wagmi/connectors/injected"
var injected_ = __webpack_require__(4738);
// EXTERNAL MODULE: external "next-auth/react"
var external_next_auth_react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
;// CONCATENATED MODULE: ./src/utils/apiPost.ts

const apiPost_apiPost = async (endpoint, params)=>{
    const result = await axios.post(`/api${endpoint}`, params, {
        headers: {
            "content-type": "application/json"
        }
    });
    return result.data;
};
/* harmony default export */ const utils_apiPost = ((/* unused pure expression or super */ null && (apiPost_apiPost)));

;// CONCATENATED MODULE: ./src/components/modules/ConnectButton/ConnectButton.tsx







const ConnectButton = ()=>{
    const { connectAsync  } = useConnect({
        connector: new InjectedConnector()
    });
    const { disconnectAsync  } = useDisconnect();
    const { isConnected  } = useAccount();
    const { signMessageAsync  } = useSignMessage();
    const toast = useToast();
    const { data  } = useSession();
    const handleAuth = async ()=>{
        if (isConnected) {
            await disconnectAsync();
        }
        try {
            const { account , chain  } = await connectAsync();
            const userData = {
                address: account,
                chain: chain.id,
                network: "evm"
            };
            const { message  } = await apiPost("/auth/request-message", userData);
            const signature = await signMessageAsync({
                message
            });
            await signIn("credentials", {
                message,
                signature,
                callbackUrl: "/"
            });
        } catch (e) {
            var ref;
            toast({
                title: "Oops, something is wrong...",
                description: (ref = e) === null || ref === void 0 ? void 0 : ref.message,
                status: "error",
                position: "top-right",
                isClosable: true
            });
        }
    };
    const handleDisconnect = async ()=>{
        await disconnectAsync();
        signOut({
            callbackUrl: "/"
        });
    };
    if (data === null || data === void 0 ? void 0 : data.user) {
        return /*#__PURE__*/ _jsxs(HStack, {
            onClick: handleDisconnect,
            cursor: "pointer",
            children: [
                /*#__PURE__*/ _jsx(Avatar, {
                    size: "xs"
                }),
                /*#__PURE__*/ _jsx(Text, {
                    fontWeight: "medium",
                    children: getEllipsisTxt(data.user.address)
                })
            ]
        });
    }
    return /*#__PURE__*/ _jsx(Button, {
        size: "sm",
        onClick: handleAuth,
        colorScheme: "blue",
        children: "Connect Wallet"
    });
};
/* harmony default export */ const ConnectButton_ConnectButton = ((/* unused pure expression or super */ null && (ConnectButton)));

;// CONCATENATED MODULE: ./src/components/modules/ConnectButton/index.ts


;// CONCATENATED MODULE: ./src/components/modules/index.ts






/***/ }),

/***/ 5125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BD": () => (/* binding */ rewardCalculatorAddr),
/* harmony export */   "dx": () => (/* binding */ MergeType),
/* harmony export */   "if": () => (/* binding */ chainId2NetworkName),
/* harmony export */   "pE": () => (/* binding */ xNFTAddr),
/* harmony export */   "xu": () => (/* binding */ xenAddr)
/* harmony export */ });
/* unused harmony export unit */
const xenAddr = {
    1: "0x06450dEe7FD2Fb8E39061434BAbCFC05599a6Fb8",
    97: "0x64AA3cc1348329F175ABE7f4b6F779Df4605C266",
    513100: "0x1850DDd0c2D94AB8289A4e94313DD35cdCbf7Cc2"
};
const xNFTAddr = {
    1: "",
    97: "0x3a9Fe5AC9Bab2d4457433185276a20718bFE6e2F",
    513100: "0xd87D680649e4cee0cD1A25ADb6f59fF885c9930d"
};
const rewardCalculatorAddr = {
    1: "",
    97: "0x56f57572E1Ee28bbdD520565a02e218fEEa162c9",
    513100: ""
};
const chainId2NetworkName = {
    1: "Ethereum",
    56: "BSC",
    97: "BSC-Testnet",
    137: "Polygon",
    80001: "Mumbai"
};
const unit = {
    1: "ETH",
    56: "BNB",
    97: "BNB",
    137: "MATIC",
    80001: "MATIC",
    10001: "ETHW",
    513100: "ETF"
};
var MergeType;
(function(MergeType) {
    MergeType[MergeType["FromAdd"] = 1] = "FromAdd";
    MergeType[MergeType["FromRemove"] = 2] = "FromRemove";
    MergeType[MergeType["FromModify"] = 3] = "FromModify";
    MergeType[MergeType["ToAdd"] = 4] = "ToAdd";
    MergeType[MergeType["ToRemove"] = 5] = "ToRemove";
    MergeType[MergeType["Clear"] = 6] = "Clear";
})(MergeType || (MergeType = {}));



/***/ }),

/***/ 6767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getEllipsisTxt)
/* harmony export */ });
/**
 * Returns a string of form "abc...xyz"
 * @param {string} str string to string
 * @param {number} n number of chars to keep at front/end
 * @returns {string}
 */ const getEllipsisTxt = (str, n = 6)=>{
    if (str) {
        return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return "";
};


/***/ })

};
;