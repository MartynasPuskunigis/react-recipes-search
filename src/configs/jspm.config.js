SystemJS.config({
    baseURL: "/",
    paths: {
        "npm:": "libs/npm/"
    },
    packages: {
        app: {
            defaultExtension: "js",
            meta: {
                "*.css": {
                    loader: "css"
                }
            }
        },
        "npm:office-ui-fabric-react@5.67.0": {
            map: {
                "prop-types": "npm:prop-types@15.6.2",
                tslib: "npm:tslib@1.9.0",
                "@uifabric/merge-styles": "npm:@uifabric/merge-styles@5.13.0",
                "@uifabric/icons": "npm:@uifabric/icons@5.6.0",
                "@uifabric/styling": "npm:@uifabric/styling@5.20.0",
                "@uifabric/utilities": "npm:@uifabric/utilities@5.19.1",
                "@microsoft/load-themed-styles": "npm:@microsoft/load-themed-styles@1.7.43"
            }
        },
        "npm:@uifabric/styling@5.20.0": {
            map: {
                "@microsoft/load-themed-styles": "npm:@microsoft/load-themed-styles@1.7.43",
                "@uifabric/utilities": "npm:@uifabric/utilities@5.19.1",
                "@uifabric/merge-styles": "npm:@uifabric/merge-styles@5.13.0",
                tslib: "npm:tslib@1.9.0"
            }
        },
        "npm:@uifabric/icons@5.6.0": {
            map: {
                "@uifabric/styling": "npm:@uifabric/styling@5.20.0",
                tslib: "npm:tslib@1.9.0"
            }
        },
        "npm:@uifabric/merge-styles@5.13.0": {
            map: {
                tslib: "npm:tslib@1.9.0"
            }
        },
        "npm:@uifabric/utilities@5.19.1": {
            map: {
                "@microsoft/load-themed-styles": "npm:@microsoft/load-themed-styles@1.7.43",
                "@uifabric/merge-styles": "npm:@uifabric/merge-styles@5.13.0",
                "prop-types": "npm:prop-types@15.6.2",
                tslib: "npm:tslib@1.9.0"
            }
        }
    },
    map: {
        dateformat: "npm:dateformat@3.0.3",
        flux: "npm:flux@3.1.3",
        history: "npm:history@4.7.2",
        immutable: "npm:immutable@3.8.2",
        "office-ui-fabric-react": "npm:office-ui-fabric-react@5.67.0"
    }
});

SystemJS.config({
    packageConfigPaths: ["npm:@*/*.json", "npm:*.json"],
    map: {
        classnames: "npm:classnames@2.2.6",
        "action-emitter": "npm:action-emitter@0.2.1",
        assert: "npm:jspm-nodelibs-assert@0.2.1",
        buffer: "npm:jspm-nodelibs-buffer@0.2.3",
        child_process: "npm:jspm-nodelibs-child_process@0.2.1",
        constants: "npm:jspm-nodelibs-constants@0.2.1",
        crypto: "npm:jspm-nodelibs-crypto@0.2.1",
        css: "npm:systemjs-plugin-css@0.1.36",
        domain: "npm:jspm-nodelibs-domain@0.2.1",
        events: "npm:jspm-nodelibs-events@0.2.2",
        fs: "npm:jspm-nodelibs-fs@0.2.1",
        http: "npm:jspm-nodelibs-http@0.2.0",
        https: "npm:jspm-nodelibs-https@0.2.2",
        os: "npm:jspm-nodelibs-os@0.2.2",
        path: "npm:jspm-nodelibs-path@0.2.3",
        process: "npm:jspm-nodelibs-process@0.2.1",
        querystring: "npm:querystring@0.2.0",
        react: "npm:react@16.3.1",
        "react-dom": "npm:react-dom@16.0.0",
        "react-notification-system": "npm:react-notification-system@0.2.17",
        "react-router": "npm:react-router@4.2.0",
        "react-router-dom": "npm:react-router-dom@4.2.2",
        "react-toastify": "npm:react-toastify@4.1.0",
        "react-tooltip": "npm:react-tooltip@3.6.1",
        "simplr-flux": "npm:simplr-flux@2.3.0",
        stream: "npm:jspm-nodelibs-stream@0.2.1",
        string_decoder: "npm:jspm-nodelibs-string_decoder@0.2.2",
        tslib: "npm:tslib@1.9.0",
        url: "npm:jspm-nodelibs-url@0.2.1",
        util: "npm:jspm-nodelibs-util@0.2.2",
        vm: "npm:jspm-nodelibs-vm@0.2.1",
        zlib: "npm:jspm-nodelibs-zlib@0.2.3"
    },
    packages: {
        "npm:promise@7.3.1": {
            map: {
                asap: "npm:asap@2.0.6"
            }
        },
        "npm:isomorphic-fetch@2.2.1": {
            map: {
                "node-fetch": "npm:node-fetch@1.7.3",
                "whatwg-fetch": "npm:whatwg-fetch@2.0.4"
            }
        },
        "npm:node-fetch@1.7.3": {
            map: {
                "is-stream": "npm:is-stream@1.1.0",
                encoding: "npm:encoding@0.1.12"
            }
        },
        "npm:jspm-nodelibs-stream@0.2.1": {
            map: {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "npm:jspm-nodelibs-domain@0.2.1": {
            map: {
                "domain-browser": "npm:domain-browser@1.2.0"
            }
        },
        "npm:jspm-nodelibs-zlib@0.2.3": {
            map: {
                "browserify-zlib": "npm:browserify-zlib@0.1.4"
            }
        },
        "npm:jspm-nodelibs-http@0.2.0": {
            map: {
                "http-browserify": "npm:stream-http@2.8.3"
            }
        },
        "npm:jspm-nodelibs-url@0.2.1": {
            map: {
                url: "npm:url@0.11.0"
            }
        },
        "npm:stream-browserify@2.0.1": {
            map: {
                inherits: "npm:inherits@2.0.3",
                "readable-stream": "npm:readable-stream@2.3.6"
            }
        },
        "npm:browserify-zlib@0.1.4": {
            map: {
                "readable-stream": "npm:readable-stream@2.3.6",
                pako: "npm:pako@0.2.9"
            }
        },
        "npm:encoding@0.1.12": {
            map: {
                "iconv-lite": "npm:iconv-lite@0.4.23"
            }
        },
        "npm:url@0.11.0": {
            map: {
                querystring: "npm:querystring@0.2.0",
                punycode: "npm:punycode@1.3.2"
            }
        },
        "npm:jspm-nodelibs-crypto@0.2.1": {
            map: {
                "crypto-browserify": "npm:crypto-browserify@3.12.0"
            }
        },
        "npm:jspm-nodelibs-buffer@0.2.3": {
            map: {
                buffer: "npm:buffer@5.1.0"
            }
        },
        "npm:browserify-sign@4.0.4": {
            map: {
                "create-hash": "npm:create-hash@1.2.0",
                inherits: "npm:inherits@2.0.3",
                "create-hmac": "npm:create-hmac@1.1.7",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "parse-asn1": "npm:parse-asn1@5.1.1",
                "bn.js": "npm:bn.js@4.11.8",
                elliptic: "npm:elliptic@6.4.0"
            }
        },
        "npm:jspm-nodelibs-string_decoder@0.2.2": {
            map: {
                string_decoder: "npm:string_decoder@0.10.31"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            map: {
                "bn.js": "npm:bn.js@4.11.8",
                randombytes: "npm:randombytes@2.0.6"
            }
        },
        "npm:cipher-base@1.0.4": {
            map: {
                inherits: "npm:inherits@2.0.3",
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "npm:elliptic@6.4.0": {
            map: {
                "bn.js": "npm:bn.js@4.11.8",
                inherits: "npm:inherits@2.0.3",
                "hmac-drbg": "npm:hmac-drbg@1.0.1",
                brorand: "npm:brorand@1.1.0",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
                "hash.js": "npm:hash.js@1.1.5",
                "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
            }
        },
        "npm:miller-rabin@4.0.1": {
            map: {
                "bn.js": "npm:bn.js@4.11.8",
                brorand: "npm:brorand@1.1.0"
            }
        },
        "npm:evp_bytestokey@1.0.3": {
            map: {
                "safe-buffer": "npm:safe-buffer@5.1.2",
                "md5.js": "npm:md5.js@1.3.4"
            }
        },
        "npm:des.js@1.0.0": {
            map: {
                inherits: "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
            }
        },
        "npm:hmac-drbg@1.0.1": {
            map: {
                "hash.js": "npm:hash.js@1.1.5",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
                "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
            }
        },
        "npm:md5.js@1.3.4": {
            map: {
                "hash-base": "npm:hash-base@3.0.4",
                inherits: "npm:inherits@2.0.3"
            }
        },
        "npm:hash-base@3.0.4": {
            map: {
                inherits: "npm:inherits@2.0.3",
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "npm:jspm-nodelibs-os@0.2.2": {
            map: {
                "os-browserify": "npm:os-browserify@0.3.0"
            }
        },
        "npm:react-dom@16.0.0": {
            map: {
                "loose-envify": "npm:loose-envify@1.4.0",
                fbjs: "npm:fbjs@0.8.17",
                "prop-types": "npm:prop-types@15.6.2",
                "object-assign": "npm:object-assign@4.1.1"
            }
        },
        "npm:react-router@4.2.0": {
            map: {
                "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
                warning: "npm:warning@3.0.0",
                invariant: "npm:invariant@2.2.4",
                "prop-types": "npm:prop-types@15.6.2",
                "loose-envify": "npm:loose-envify@1.4.0",
                history: "npm:history@4.7.2",
                "path-to-regexp": "npm:path-to-regexp@1.7.0"
            }
        },
        "npm:history@4.7.2": {
            map: {
                invariant: "npm:invariant@2.2.4",
                warning: "npm:warning@3.0.0",
                "loose-envify": "npm:loose-envify@1.4.0",
                "resolve-pathname": "npm:resolve-pathname@2.2.0",
                "value-equal": "npm:value-equal@0.4.0"
            }
        },
        "npm:warning@3.0.0": {
            map: {
                "loose-envify": "npm:loose-envify@1.4.0"
            }
        },
        "npm:invariant@2.2.4": {
            map: {
                "loose-envify": "npm:loose-envify@1.4.0"
            }
        },
        "npm:path-to-regexp@1.7.0": {
            map: {
                isarray: "npm:isarray@0.0.1"
            }
        },
        "npm:buffer@5.1.0": {
            map: {
                ieee754: "npm:ieee754@1.1.12",
                "base64-js": "npm:base64-js@1.3.0"
            }
        },
        "npm:crypto-browserify@3.12.0": {
            map: {
                inherits: "npm:inherits@2.0.3",
                "create-hmac": "npm:create-hmac@1.1.7",
                "browserify-sign": "npm:browserify-sign@4.0.4",
                "browserify-cipher": "npm:browserify-cipher@1.0.1",
                randomfill: "npm:randomfill@1.0.4",
                "public-encrypt": "npm:public-encrypt@4.0.2",
                "create-ecdh": "npm:create-ecdh@4.0.3",
                "create-hash": "npm:create-hash@1.2.0",
                "diffie-hellman": "npm:diffie-hellman@5.0.3",
                pbkdf2: "npm:pbkdf2@3.0.16",
                randombytes: "npm:randombytes@2.0.6"
            }
        },
        "npm:randomfill@1.0.4": {
            map: {
                randombytes: "npm:randombytes@2.0.6",
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "npm:randombytes@2.0.6": {
            map: {
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "npm:sha.js@2.4.11": {
            map: {
                "safe-buffer": "npm:safe-buffer@5.1.2",
                inherits: "npm:inherits@2.0.3"
            }
        },
        "npm:asn1.js@4.10.1": {
            map: {
                "bn.js": "npm:bn.js@4.11.8",
                inherits: "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
            }
        },
        "npm:react-router-dom@4.2.2": {
            map: {
                warning: "npm:warning@3.0.0",
                history: "npm:history@4.7.2",
                "prop-types": "npm:prop-types@15.6.2",
                "react-router": "npm:react-router@4.2.0",
                "loose-envify": "npm:loose-envify@1.4.0",
                invariant: "npm:invariant@2.2.4"
            }
        },
        "npm:simplr-flux@2.3.0": {
            map: {
                flux: "npm:flux@3.1.3",
                immutable: "npm:immutable@3.8.2",
                "action-emitter": "npm:action-emitter@0.2.1",
                "@types/flux": "npm:@types/flux@3.1.7"
            }
        },
        "npm:flux@3.1.3": {
            map: {
                fbjs: "npm:fbjs@0.8.17",
                fbemitter: "npm:fbemitter@2.1.1"
            }
        },
        "npm:action-emitter@0.2.1": {
            map: {
                fbemitter: "npm:fbemitter@2.1.1",
                "@types/fbemitter": "npm:@types/fbemitter@2.0.32"
            }
        },
        "npm:fbemitter@2.1.1": {
            map: {
                fbjs: "npm:fbjs@0.8.17"
            }
        },
        "npm:@types/flux@3.1.7": {
            map: {
                "@types/fbemitter": "npm:@types/fbemitter@2.0.32",
                "@types/react": "npm:@types/react@16.0.40"
            }
        },
        "npm:readable-stream@2.3.6": {
            map: {
                inherits: "npm:inherits@2.0.3",
                "process-nextick-args": "npm:process-nextick-args@2.0.0",
                isarray: "npm:isarray@1.0.0",
                "safe-buffer": "npm:safe-buffer@5.1.2",
                "util-deprecate": "npm:util-deprecate@1.0.2",
                "core-util-is": "npm:core-util-is@1.0.2",
                string_decoder: "npm:string_decoder@1.1.1"
            }
        },
        "npm:string_decoder@1.1.1": {
            map: {
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "npm:browserify-aes@1.2.0": {
            map: {
                "cipher-base": "npm:cipher-base@1.0.4",
                inherits: "npm:inherits@2.0.3",
                "safe-buffer": "npm:safe-buffer@5.1.2",
                "create-hash": "npm:create-hash@1.2.0",
                evp_bytestokey: "npm:evp_bytestokey@1.0.3",
                "buffer-xor": "npm:buffer-xor@1.0.3"
            }
        },
        "npm:react@16.3.1": {
            map: {
                fbjs: "npm:fbjs@0.8.17",
                "prop-types": "npm:prop-types@15.6.2",
                "loose-envify": "npm:loose-envify@1.4.0",
                "object-assign": "npm:object-assign@4.1.1"
            }
        },
        "npm:react-notification-system@0.2.17": {
            map: {
                "prop-types": "npm:prop-types@15.6.2",
                "object-assign": "npm:object-assign@4.1.1",
                "create-react-class": "npm:create-react-class@15.6.3"
            }
        },
        "npm:create-react-class@15.6.3": {
            map: {
                "object-assign": "npm:object-assign@4.1.1",
                "loose-envify": "npm:loose-envify@1.4.0",
                fbjs: "npm:fbjs@0.8.17"
            }
        },
        "npm:prop-types@15.6.2": {
            map: {
                "object-assign": "npm:object-assign@4.1.1",
                "loose-envify": "npm:loose-envify@1.4.0"
            }
        },
        "npm:fbjs@0.8.17": {
            map: {
                "object-assign": "npm:object-assign@4.1.1",
                "loose-envify": "npm:loose-envify@1.4.0",
                "core-js": "npm:core-js@1.2.7",
                "ua-parser-js": "npm:ua-parser-js@0.7.18",
                "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
                setimmediate: "npm:setimmediate@1.0.5",
                promise: "npm:promise@7.3.1",
                "npm:react-tooltip@3.6.1": {
                    map: {
                        classnames: "npm:classnames@2.2.6",
                        "prop-types": "npm:prop-types@15.6.2"
                    }
                },
                "npm:loose-envify@1.4.0": {
                    map: {
                        "js-tokens": "npm:js-tokens@4.0.0"
                    }
                },
                "npm:stream-http@2.8.3": {
                    map: {
                        inherits: "npm:inherits@2.0.3",
                        "readable-stream": "npm:readable-stream@2.3.6",
                        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
                        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                        xtend: "npm:xtend@4.0.1"
                    }
                },
                "npm:iconv-lite@0.4.23": {
                    map: {
                        "safer-buffer": "npm:safer-buffer@2.1.2"
                    }
                },
                "npm:pbkdf2@3.0.16": {
                    map: {
                        "create-hash": "npm:create-hash@1.2.0",
                        "create-hmac": "npm:create-hmac@1.1.7",
                        "safe-buffer": "npm:safe-buffer@5.1.2",
                        ripemd160: "npm:ripemd160@2.0.2",
                        "sha.js": "npm:sha.js@2.4.11"
                    }
                },
                "npm:public-encrypt@4.0.2": {
                    map: {
                        "create-hash": "npm:create-hash@1.2.0",
                        randombytes: "npm:randombytes@2.0.6",
                        "bn.js": "npm:bn.js@4.11.8",
                        "browserify-rsa": "npm:browserify-rsa@4.0.1",
                        "parse-asn1": "npm:parse-asn1@5.1.1"
                    }
                },
                "npm:create-hmac@1.1.7": {
                    map: {
                        inherits: "npm:inherits@2.0.3",
                        "create-hash": "npm:create-hash@1.2.0",
                        "safe-buffer": "npm:safe-buffer@5.1.2",
                        ripemd160: "npm:ripemd160@2.0.2",
                        "sha.js": "npm:sha.js@2.4.11",
                        "cipher-base": "npm:cipher-base@1.0.4"
                    }
                },
                "npm:public-encrypt@4.0.2": {
                    map: {
                        "create-hash": "npm:create-hash@1.2.0",
                        randombytes: "npm:randombytes@2.0.6",
                        "bn.js": "npm:bn.js@4.11.8",
                        "parse-asn1": "npm:parse-asn1@5.1.1",
                        "browserify-rsa": "npm:browserify-rsa@4.0.1"
                    }
                },
                "npm:create-hash@1.2.0": {
                    map: {
                        inherits: "npm:inherits@2.0.3",
                        ripemd160: "npm:ripemd160@2.0.2",
                        "sha.js": "npm:sha.js@2.4.11",
                        "cipher-base": "npm:cipher-base@1.0.4",
                        "md5.js": "npm:md5.js@1.3.4"
                    }
                },
                "npm:diffie-hellman@5.0.3": {
                    map: {
                        randombytes: "npm:randombytes@2.0.6",
                        "miller-rabin": "npm:miller-rabin@4.0.1"
                    }
                },
                "npm:create-ecdh@4.0.3": {
                    map: {
                        "bn.js": "npm:bn.js@4.11.8",
                        elliptic: "npm:elliptic@6.4.0"
                    }
                },
                "npm:parse-asn1@5.1.1": {
                    map: {
                        "browserify-aes": "npm:browserify-aes@1.2.0",
                        pbkdf2: "npm:pbkdf2@3.0.16",
                        "create-hash": "npm:create-hash@1.2.0",
                        evp_bytestokey: "npm:evp_bytestokey@1.0.3",
                        "asn1.js": "npm:asn1.js@4.10.1"
                    }
                },
                "npm:browserify-des@1.0.2": {
                    map: {
                        "cipher-base": "npm:cipher-base@1.0.4",
                        "safe-buffer": "npm:safe-buffer@5.1.2",
                        inherits: "npm:inherits@2.0.3",
                        "des.js": "npm:des.js@1.0.0"
                    }
                },
                "npm:ripemd160@2.0.2": {
                    map: {
                        inherits: "npm:inherits@2.0.3",
                        "hash-base": "npm:hash-base@3.0.4"
                    }
                },
                "npm:hash.js@1.1.5": {
                    map: {
                        inherits: "npm:inherits@2.0.3",
                        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
                    }
                },
                "npm:react-toastify@4.1.0": {
                    map: {
                        "prop-types": "npm:prop-types@15.6.2",
                        "react-transition-group": "npm:react-transition-group@2.4.0",
                        classnames: "npm:classnames@2.2.6"
                    }
                },
                "npm:react-transition-group@2.4.0": {
                    map: {
                        "prop-types": "npm:prop-types@15.6.2",
                        "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
                        "dom-helpers": "npm:dom-helpers@3.3.1",
                        "loose-envify": "npm:loose-envify@1.4.0",
                        "browserify-aes": "npm:browserify-aes@1.2.0",
                        "browserify-des": "npm:browserify-des@1.0.2",
                        evp_bytestokey: "npm:evp_bytestokey@1.0.3"
                    }
                },
                "npm:create-ecdh@4.0.3": {
                    map: {
                        "bn.js": "npm:bn.js@4.11.8",
                        elliptic: "npm:elliptic@6.4.0"
                    }
                },
                "npm:parse-asn1@5.1.1": {
                    map: {
                        "browserify-aes": "npm:browserify-aes@1.2.0",
                        pbkdf2: "npm:pbkdf2@3.0.16",
                        "create-hash": "npm:create-hash@1.2.0",
                        evp_bytestokey: "npm:evp_bytestokey@1.0.3",
                        "asn1.js": "npm:asn1.js@4.10.1"
                    }
                },
                "npm:browserify-des@1.0.2": {
                    map: {
                        "cipher-base": "npm:cipher-base@1.0.4",
                        inherits: "npm:inherits@2.0.3",
                        "safe-buffer": "npm:safe-buffer@5.1.2",
                        "des.js": "npm:des.js@1.0.0"
                    }
                },
                "npm:ripemd160@2.0.2": {
                    map: {
                        inherits: "npm:inherits@2.0.3",
                        "hash-base": "npm:hash-base@3.0.4"
                    }
                },
                "npm:hash.js@1.1.5": {
                    map: {
                        inherits: "npm:inherits@2.0.3",
                        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
                    }
                },
                "npm:prop-types@15.6.2": {
                    map: {
                        "loose-envify": "npm:loose-envify@1.4.0",
                        "object-assign": "npm:object-assign@4.1.1"
                    }
                }
            }
        }
    }
});
