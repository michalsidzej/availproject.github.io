"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[953],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>h});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?t.createElement(h,r(r({ref:a},p),{},{components:n})):t.createElement(h,r({ref:a},p))}));function h(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6457:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(7462),i=(n(7294),n(3905));const o={id:"use-case-validiums",title:"Avail-Powered Validiums",sidebar_label:"Validiums",sidebar_position:1,description:"How to use Avail to build validiums",keywords:["docs","avail","availability","scale","rollup","validium"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"/using-avail/validiums"},r="Avail-Powered Validiums",s={unversionedId:"using-avail/use-cases-and-examples/use-case-validiums",id:"using-avail/use-cases-and-examples/use-case-validiums",title:"Avail-Powered Validiums",description:"How to use Avail to build validiums",source:"@site/docs/using-avail/use-cases-and-examples/validiums.md",sourceDirName:"using-avail/use-cases-and-examples",slug:"/using-avail/validiums",permalink:"/using-avail/validiums",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"use-case-validiums",title:"Avail-Powered Validiums",sidebar_label:"Validiums",sidebar_position:1,description:"How to use Avail to build validiums",keywords:["docs","avail","availability","scale","rollup","validium"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"/using-avail/validiums"},sidebar:"defaultSidebar",previous:{title:"Testnet Faucet",permalink:"/using-avail/getting-started/testnet-faucet"},next:{title:"ZK / Validity Proof Rollups",permalink:"/using-avail/sovereign-rollups/zk-rollups"}},l={},c=[{value:"What is Validium?",id:"what-is-validium",level:3},{value:"Verify data availability on Ethereum",id:"verify-data-availability-on-ethereum",level:2}],p={toc:c},d="wrapper";function u(e){let{components:a,...n}=e;return(0,i.kt)(d,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"avail-powered-validiums"},"Avail-Powered Validiums"),(0,i.kt)("p",null,"Due to the architecture of monolithic blockchains (such as Ethereum in\nits current state), operating the blockchain is expensive, resulting\nin high transaction fees. Rollups attempt to extract the burden of\nexecution by running transactions off-chain and then posting the\nexecution results and the ","[usually compressed]"," transaction data."),(0,i.kt)("p",null,"Validiums are the next step: instead of posting the transaction data,\nit is kept available off-chain, where a proof/attestation is only\nposted to the base layer. This is by far the most cost-effective\nsolution because both execution and data availability are kept\noff-chain while still allowing for final verification and settlement\non the layer 1 chain."),(0,i.kt)("p",null,"Avail is a blockchain optimized for data availability. Any rollup that\nwishes to become a validium can switch to post transaction data to\nAvail instead of the layer 1 and deploy a verification contract that,\nin addition to verifying the correct execution, also verifies data\navailability."),(0,i.kt)("p",null,"The Avail team will make this data availability verification simple on\nEthereum by building an attestation bridge to post data availability\nattestations directly to Ethereum. This will make the verification\ncontract's job a simple one, since the DA attestations will already be\non-chain. Please reach out to the Avail team for more information or\nto join our early access program."),(0,i.kt)("h3",{id:"what-is-validium"},"What is Validium?"),(0,i.kt)("p",null,"Validiums are scaling solutions that are using off-chain computation and\nvalidity proofs, but data is not stored on Ethereum chain which significantly\nincreases transactions throughput.  Validity proof can come in from of zero knowledge proofs\nlike ",(0,i.kt)("em",{parentName:"p"},"ZK-SNARK")," or ",(0,i.kt)("em",{parentName:"p"},"ZK-STARK")," in which one party can prove to another party that the given statement is true\nwhile the prover avoids disclosure of additional information apart from the fact that the statement is indeed true.\nValidity of all transactions is enforced using validity proofs while data availability is kept off chain.\nUser can withdraw funds by providing a Merkle proof which can prove inclusion of the users withdrawal transaction and allow\nthe on-chain contract to process withdrawal. Validium interact with the Ethereum with a collection of contracts\nincluding main ",(0,i.kt)("em",{parentName:"p"},"attestation")," contract that stores state commitments (Merkle data roots) submitted by the block produce and\n",(0,i.kt)("em",{parentName:"p"},"verification")," contract which verifies the validity proof when making state transitions."),(0,i.kt)("h2",{id:"verify-data-availability-on-ethereum"},"Verify data availability on Ethereum"),(0,i.kt)("p",null,"In order to verify data availability on the Ethereum it is necessary\nto first submit data to Avail as a data submission transaction. Data\nsubmitted this way will be included in Avail blocks, but not\ninterpreted or executed in any way. The submission can be done using\n",(0,i.kt)("inlineCode",{parentName:"p"},"Polkadot-JS")," which is a collection of tools for communication with\nSubstrate based chains."),(0,i.kt)("p",null,"Complete example can be found on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail-js-examples/tree/master/src/validium"},"github"),".   "),(0,i.kt)("p",null,"Example of sending data to Avail:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"   async function submitData(availApi, data, account) {\n       let submit = await availApi.tx.dataAvailability.submitData(data);\n       return await sendTx(availApi, account, submit);\n   }\n")),(0,i.kt)("p",null,"Function ",(0,i.kt)("inlineCode",{parentName:"p"},"submitData")," receives ",(0,i.kt)("inlineCode",{parentName:"p"},"availApi")," api instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," that will be submitted,\nand the ",(0,i.kt)("inlineCode",{parentName:"p"},"account")," which is sending the transaction. In order to create account\nit is necessary to create ",(0,i.kt)("em",{parentName:"p"},"keyring")," ",(0,i.kt)("em",{parentName:"p"},"pair")," for the account that wants to send the data.\nThis can be done with ",(0,i.kt)("inlineCode",{parentName:"p"},"keyring.addFromUri(secret)")," which creates keyring pair via suri\n(the secret can be a hex string, mnemonic phrase or a string).\nAfter creating keyring pair, it is possible to submit data in a transaction to the Avail network with\n",(0,i.kt)("inlineCode",{parentName:"p"},"availApi.tx.dataAvailability.submitData(data);"),". Once the transaction is included in an Avail block,\nit is possible to initiate the dispatch of the data root by creating a dispatch transaction\n",(0,i.kt)("inlineCode",{parentName:"p"},"availApi.tx.daBridge.tryDispatchDataRoot(destinationDomain, bridgeRouterEthAddress, header);")," with the parameters:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"destinationDomain")," Destination domain 1000."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bridgeRouterEthAddress")," Address of the main data availability router contract deployed on Sepolia network ",(0,i.kt)("inlineCode",{parentName:"p"},"0xbD824890A51ed8bda53F51F27303b14EFfEbC152"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"header")," Provided from the block when data is submitted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"   async function dispatchDataRoot(availApi, blockHash, account) {\n    const header = await availApi.rpc.chain.getHeader(blockHash);\n    let tx = await availApi.tx.daBridge.tryDispatchDataRoot(\n        process.env.DESTINATION_DOMAIN,\n        process.env.DA_BRIDGE_ADDRESS,\n        header\n    );\n    return await sendTx(availApi, account, tx);\n}\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Example of submitting data to Avail and dispatching the data root using ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Polkadot-JS"),"."),(0,i.kt)("p",{parentName:"admonition"},"Environment variables:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-dotenv"},"AVAIL_RPC= # avail network websocket url\nSURI= # mnemonic\nDA_BRIDGE_ADDRESS= # main da bridge contract address deployed to Sepolia network in format 0x000000000000000000000000bD824890A51ed8bda53F51F27303b14EFfEbC152\nDESTINATION_DOMAIN= # destination domain is 1000\nDATA= # data sending to avail\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Dispatch Data Root Javascript Example"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {ApiPromise, Keyring, WsProvider} from \"@polkadot/api\";\nimport * as dotenv from \"dotenv\";\n\ndotenv.config()\n\n/**\n * Creates api instance.\n *\n * @param url websocket address\n */\nasync function createApi(url) {\n    const provider = new WsProvider(url)\n    return ApiPromise.create({\n        provider,\n        rpc: {\n            kate: {\n                queryDataProof: {\n                    description: 'Generate the data proof for the given `index`',\n                    params: [\n                        {\n                            name: 'data_index',\n                            type: 'u32'\n                        },\n                        {\n                            name: 'at',\n                            type: 'Hash',\n                            isOptional: true\n                        }\n                    ],\n                    type: 'DataProof'\n                }\n            }\n        },\n        types: {\n            AppId: 'Compact<u32>',\n            DataLookupIndexItem: {\n                appId: 'AppId',\n                start: 'Compact<u32>'\n            },\n            DataLookup: {\n                size: 'Compact<u32>',\n                index: 'Vec<DataLookupIndexItem>'\n            },\n            KateCommitment: {\n                rows: 'Compact<u16>',\n                cols: 'Compact<u16>',\n                dataRoot: 'H256',\n                commitment: 'Vec<u8>'\n            },\n            V1HeaderExtension: {\n                commitment: 'KateCommitment',\n                appLookup: 'DataLookup'\n            },\n            VTHeaderExtension: {\n                newField: 'Vec<u8>',\n                commitment: 'KateCommitment',\n                appLookup: 'DataLookup'\n            },\n            HeaderExtension: {\n                _enum: {\n                    V1: 'V1HeaderExtension',\n                    VTest: 'VTHeaderExtension'\n                }\n            },\n            DaHeader: {\n                parentHash: 'Hash',\n                number: 'Compact<BlockNumber>',\n                stateRoot: 'Hash',\n                extrinsicsRoot: 'Hash',\n                digest: 'Digest',\n                extension: 'HeaderExtension'\n            },\n            Header: 'DaHeader',\n            CheckAppIdExtra: {\n                appId: 'AppId'\n            },\n            CheckAppIdTypes: {},\n            CheckAppId: {\n                extra: 'CheckAppIdExtra',\n                types: 'CheckAppIdTypes'\n            },\n            DataProof: {\n                root: 'H256',\n                proof: 'Vec<H256>',\n                numberOfLeaves: 'Compact<u32>',\n                leaf_index: 'Compact<u32>',\n                leaf: 'H256'\n            },\n            Cell: {\n                row: 'u32',\n                col: 'u32',\n            }\n        },\n        signedExtensions: {\n            CheckAppId: {\n                extrinsic: {\n                    appId: 'AppId'\n                },\n                payload: {}\n            },\n        },\n    });\n}\n\n/**\n * Sends transaction to Avail.\n *\n * @param api instance of the api\n * @param account sending the transaction\n * @param tx transaction\n */\nasync function sendTx(api, account, tx) {\n    return new Promise(async (resolve) => {\n        try {\n            const res = await tx\n                .signAndSend(\n                    account,\n                    (result) => {\n                        if (result.status.isReady) {\n                            console.log(`Txn has been sent to the mempool`)\n                        }\n                        if (result.status.isInBlock) {\n                            console.log(`Tx hash: ${result.txHash} is in block ${result.status.asInBlock}`)\n                            res()\n                            resolve(result)\n                        }\n                    });\n\n        } catch (e) {\n            console.log(e);\n            process.exit(1);\n        }\n    })\n}\n\n/**\n * Submitting data to Avail as a transaction.\n *\n * @param availApi api instance\n * @param data payload to send\n * @param account that is sending transaction\n * @returns {Promise<unknown>}\n */\nasync function submitData(availApi, data, account) {\n    let submit = await availApi.tx.dataAvailability.submitData(data);\n    return await sendTx(availApi, account, submit);\n}\n\n/**\n * Sending dispatch data root transaction.\n *\n * @param availApi api instance\n * @param blockHash hash of the block\n * @param account sending transaction\n * @returns {Promise<unknown>}\n */\nasync function dispatchDataRoot(availApi, blockHash, account) {\n    const destinationDomain = process.env.DESTINATION_DOMAIN;\n    const bridgeRouterEthAddress = process.env.DA_BRIDGE_ADDRESS;\n    const header = await availApi.rpc.chain.getHeader(blockHash);\n    console.log(`Block Number: ${header.number}`);\n    console.log(`State Root: ${header.stateRoot}`);\n    let tx = await availApi.tx.daBridge.tryDispatchDataRoot(destinationDomain, bridgeRouterEthAddress, header);\n    return await sendTx(availApi, account, tx);\n}\n\n/**\n * Returns data root for the particular block.\n *\n * @param availApi api instance\n * @param blockHash hash of the block\n * @returns {Promise<(*)[]>}\n */\nasync function getDataRoot(availApi, blockHash) {\n    const header = JSON.parse(await availApi.rpc.chain.getHeader(blockHash));\n    return [header.extension.v1.commitment.dataRoot, header.number];\n}\n\n(async function dataRootDispatch() {\n    const availApi = await createApi(process.env.AVAIL_RPC);\n    const keyring = new Keyring({type: 'sr25519'});\n    const account = keyring.addFromMnemonic(process.env.SURI);\n    console.log(\"Submitting data to Avail...\")\n\n    let result = await submitData(availApi, process.env.DATA, account)\n    const txIndex = JSON.parse(result.events[0].phase).applyExtrinsic;\n    const blockHash = result.status.asInBlock;\n    console.log(`Transaction: ${result.txHash}. Block hash: ${blockHash}. Transaction index: ${txIndex}.`)\n\n    console.log(\"Triggering Home...\");\n    result = await dispatchDataRoot(availApi, blockHash, account);\n    console.log(`Sent txn on Avail. Txn Hash: ${result.txHash}.`);\n    let [root, blockNum] = await getDataRoot(availApi, blockHash);\n    console.log(\"Data Root:\" + root + \" and Block number: \" + blockNum);\n\n    await availApi.disconnect();\n})().then(() => {\n    console.log(\"Done\")\n}).catch((err) => {\n    console.error(err);\n    process.exit(1);\n});\n\n")))),(0,i.kt)("p",null,"Dispatching data root will trigger Nomad Bridge which will bridge data root to the Ethereum network. Since Nomad bridge\nis optimistic\nbridge, it is necessary to wait for 30 minutes before the data root is available on the Ethereum network."),(0,i.kt)("p",null,"After successfully bridging data root to the main data availability attestation contract on the Ethereum network,\nit is possible to prove that data is available on Avail network by submitting a Merkle proof to the verification contract.\nFetching proof from Avail can be done via RPC call ",(0,i.kt)("inlineCode",{parentName:"p"},"kate_queryDataProof")," for\nexample ",(0,i.kt)("inlineCode",{parentName:"p"},"availApi.rpc.kate.queryDataProof(dataIndex, hashBlock);"),"\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"dataIndex")," is index of the data (leaf) in the Merkle tree and ",(0,i.kt)("inlineCode",{parentName:"p"},"hashBlock")," which is a hash of the block in which\nthe data is included. This RPC endpoint returns ",(0,i.kt)("inlineCode",{parentName:"p"},"DataProof")," object that can be used to prove on Ethereum that data is available on the Avail network.\nExample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"async function getProof(availApi, hashBlock, dataIndex) {\n    const dataProof = await availApi.rpc.kate.queryDataProof(dataIndex, hashBlock);\n    return dataProof;\n}\n")),(0,i.kt)("p",null,"Returned data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DataProof: {\n   root: 'H256',\n   proof: 'Vec<H256>',\n   numberOfLeaves: 'Compact<u32>',\n   leaf_index: 'Compact<u32>',\n   leaf: 'H256'\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"root")," Root hash of generated merkle tree."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"proof")," Merkle proof items (does not contain the leaf hash, nor the root)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"numberOfLeaves"),"  Number of leaves in the original tree."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"leaf_index")," Index of the leaf the proof is for (starts from 0)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"leaf")," Leaf for which is the proof."),(0,i.kt)("admonition",{title:"Example",type:"info"},(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of Verification Contract"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"\npragma solidity 0.8.15;\n\ncontract DataAvailabilityRouter {\n    mapping(uint32 => bytes32) public roots;\n}\n\ncontract ValidiumContract {\n\n    DataAvailabilityRouter router;\n    \n    function setRouter(\n        address _router\n    ) public {\n        router = DataAvailabilityRouter(_router);\n    }\n    \n    function getDataRoot(\n        uint32 blockNumber\n    ) public view returns (bytes32) {\n        return router.roots(blockNumber);\n    }\n\n    function checkDataRootMembership(\n        uint32 blockNumber,\n        bytes32[] memory proof,\n        uint256 numberOfLeaves,\n        uint256 leafIndex,\n        bytes32 leaf\n    ) public view returns (bool) {\n        if (leafIndex >= numberOfLeaves) {\n            return false;\n        }\n\n        uint256 position = leafIndex;\n        uint256 width = numberOfLeaves;\n\n        bytes32 computedHash = leaf;\n\n        for (uint256 i = 0; i < proof.length; i++) {\n            bytes32 proofElement = proof[i];\n\n            if (position % 2 == 1 || position + 1 == width) {\n                computedHash = sha256(abi.encodePacked(proofElement, computedHash));\n            } else {\n                computedHash = sha256(abi.encodePacked(computedHash, proofElement));\n            }\n\n            position /= 2;\n            width = (width - 1) / 2 + 1;\n        }\n\n        return computedHash == getDataRoot(blockNumber);\n    }\n}\n\n")))),(0,i.kt)("p",null,"By submitting proof to the verification contract it is possible to verify\nthat data is available on Avail. Merkle proof is a list of hashes that can be used to prove\nthat given leaf is a member of the Merkle tree. Example of submitting a proof to the verification contract\ndeployed on Sepolia network (",(0,i.kt)("inlineCode",{parentName:"p"},"0x038348cD1106476a9cd359Bc34EA027E29513dEB"),") can be queried by calling data root membership function\n",(0,i.kt)("inlineCode",{parentName:"p"},"async function checkProof(sepoliaApi, blockNumber, proof, numberOfLeaves, leafIndex, leafHash);")," where"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sepoliaApi")," Sepolia network api instance."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"blockNumber")," Avail block number."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"proof")," Merkle proof for the leaf."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"numberOfLeaves")," Number of leaves in the original tree."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"leafIndex")," Index of the leaf in the Merkle tree."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"leafHash")," Hash of the leaf in the Merkle tree."),(0,i.kt)("p",null,"This will call deployed contracts function ",(0,i.kt)("inlineCode",{parentName:"p"},"verificationContract.checkDataRootMembership(blockNumber, proof, numberOfLeaves, leafIndex, leafHash)"),"\nand return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," depending on the provided proof."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Example of getting the proof and checking it with verification contract using ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Polkadot-JS")," and ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Ethers.js"),"."),(0,i.kt)("p",{parentName:"admonition"},"Environment variables:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-dotenv"},"AVAIL_RPC= # avail websocket address\nINFURA_KEY= # rpc provider key if needed \nVALIDIUM_ADDRESS= # address of the verification contract, one such is deployed on Sepolia network 0x038348cD1106476a9cd359Bc34EA027E29513dEB\nVALIDIYM_ABI_PATH= # path to abi file e.g. abi/ValidiumContract.json\nBLOCK_NUMBER= # number of the block for which to get Merkle proof\nBLOCK_HASH= # hash of the block for which to get Merkle proof\nDATA_INDEX= # index of the leaf element in the Merkle trie for which to get the proof \n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Submit Proof Example"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {ethers} from \"ethers\";\nimport * as dotenv from 'dotenv'\nimport {hexlify} from \"ethers/lib/utils.js\";\nimport {readFileSync} from \"fs\";\nimport {ApiPromise, WsProvider} from \"@polkadot/api\";\n\ndotenv.config()\n\n/**\n * Creates api instance.\n *\n * @param url websocket address\n * @returns {Promise<ApiPromise>}\n */\nasync function createApi(url) {\n    const provider = new WsProvider(url)\n\n    // Create the API and wait until ready\n    return ApiPromise.create({\n        provider,\n        rpc: {\n            kate: {\n                queryDataProof: {\n                    description: 'Generate the data proof for the given `index`',\n                    params: [\n                        {\n                            name: 'data_index',\n                            type: 'u32'\n                        },\n                        {\n                            name: 'at',\n                            type: 'Hash',\n                            isOptional: true\n                        }\n                    ],\n                    type: 'DataProof'\n                }\n            }\n        },\n        types: {\n            DataProof: {\n                root: 'H256',\n                proof: 'Vec<H256>',\n                numberOfLeaves: 'Compact<u32>',\n                leaf_index: 'Compact<u32>',\n                leaf: 'H256'\n            }\n        }\n    });\n}\n\n/**\n * Returns Merkle proof for the particular data.\n *\n * @param availApi Api instance\n * @param hashBlock Hash of the block\n * @param dataIndex Leaf index in the merkle trie for which the proof is returned\n * @returns {Promise<*>}\n */\nasync function getProof(availApi, hashBlock, dataIndex) {\n    const daHeader = await availApi.rpc.kate.queryDataProof(dataIndex, hashBlock);\n    console.log(`Fetched proof from Avail for txn index ${dataIndex} inside block ${hashBlock}`);\n    return daHeader;\n}\n\n/**\n * Checks if the provided Merkle proof is valid by checking on the Ethereum deployed validation contract.\n *\n * @param sepoliaApi Sepolia network api instance\n * @param blockNumber Avail block number\n * @param proof Merkle proof for the leaf\n * @param numberOfLeaves Number of leaves in the original tree\n * @param leafIndex Index of the leaf in the Merkle tree\n * @param leafHash Hash of the leaf in the Merkle tree\n * @returns {Promise<*>}\n */\nasync function checkProof(sepoliaApi, blockNumber, proof, numberOfLeaves, leafIndex, leafHash) {\n    const abi = JSON.parse(readFileSync(process.env.VALIDIYM_ABI_PATH).toString());\n    const verificationContract = new ethers.Contract(process.env.VALIDIUM_ADDRESS, abi, sepoliaApi);\n    return await verificationContract.checkDataRootMembership(BigInt(blockNumber), proof, BigInt(numberOfLeaves), BigInt(leafIndex), leafHash)\n}\n\n(async function submitProof() {\n    // connect to Sepolia through Infura but can be used any other available provider\n    const sepoliaApi = new ethers.providers.InfuraProvider\n        .getWebSocketProvider(\"sepolia\", process.env.INFURA_KEY);\n    const availApi = await createApi(process.env.AVAIL_RPC);\n\n    console.log(`Getting proof for data index ${process.env.DATA_INDEX} block number ${process.env.BLOCK_NUMBER} and block hash ${process.env.BLOCK_HASH}`)\n    const daHeader = await getProof(availApi, process.env.BLOCK_HASH, process.env.DATA_INDEX)\n\n    console.log(`Data Root: ${hexlify(daHeader.root)}`);\n    console.log(`Proof: ${daHeader.proof}`);\n    console.log(`Leaf to prove: ${hexlify(daHeader.leaf)}`);\n    console.log(`Leaf index : ${daHeader.leaf_index}`);\n    console.log(`Number of leaves: ${daHeader.numberOfLeaves}`);\n\n    const isDataAccepted = await checkProof(sepoliaApi, process.env.BLOCK_NUMBER, daHeader.proof, daHeader.numberOfLeaves, daHeader.leaf_index, daHeader.leaf);\n    console.log(\"Data is: \" + (isDataAccepted ? \"available\" : \"not available\"));\n    await availApi.disconnect();\n    await sepoliaApi.destroy();\n})().then(() => {\n    console.log(\"Done\")\n}).catch((err) => {\n    console.error(err);\n    process.exit(1);\n});\n\n")))))}u.isMDXComponent=!0}}]);