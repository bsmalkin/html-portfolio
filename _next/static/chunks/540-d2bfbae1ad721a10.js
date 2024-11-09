"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[540], {
    3507: function(t, e, r) {
        r.d(e, {
            default: function() {
                return i.a
            }
        });
        var n = r(5198)
          , i = r.n(n)
    },
    3922: function(t, e, r) {
        r.d(e, {
            default: function() {
                return i.a
            }
        });
        var n = r(9914)
          , i = r.n(n)
    },
    5889: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "addLocale", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r(3781);
        let n = function(t) {
            for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                r[n - 1] = arguments[n];
            return t
        };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    2587: function(t, e, r) {
        function n(t, e, r, n) {
            return !1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r(3781),
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    4117: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "Image", {
            enumerable: !0,
            get: function() {
                return b
            }
        });
        let n = r(3280)
          , i = r(7791)
          , o = r(9506)
          , s = i._(r(2820))
          , a = n._(r(8613))
          , l = n._(r(3328))
          , u = r(8145)
          , c = r(8792)
          , d = r(1632);
        r(3737);
        let h = r(4512)
          , f = n._(r(9657))
          , p = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function m(t, e, r, n, i, o) {
            let s = null == t ? void 0 : t.src;
            t && t["data-loaded-src"] !== s && (t["data-loaded-src"] = s,
            ("decode"in t ? t.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (t.parentElement && t.isConnected) {
                    if ("empty" !== e && i(!0),
                    null == r ? void 0 : r.current) {
                        let e = new Event("load");
                        Object.defineProperty(e, "target", {
                            writable: !1,
                            value: t
                        });
                        let n = !1
                          , i = !1;
                        r.current({
                            ...e,
                            nativeEvent: e,
                            currentTarget: t,
                            target: t,
                            isDefaultPrevented: () => n,
                            isPropagationStopped: () => i,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                n = !0,
                                e.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                i = !0,
                                e.stopPropagation()
                            }
                        })
                    }
                    (null == n ? void 0 : n.current) && n.current(t)
                }
            }
            ))
        }
        function g(t) {
            let[e,r] = s.version.split(".", 2)
              , n = parseInt(e, 10)
              , i = parseInt(r, 10);
            return n > 18 || 18 === n && i >= 3 ? {
                fetchPriority: t
            } : {
                fetchpriority: t
            }
        }
        let v = (0,
        s.forwardRef)( (t, e) => {
            let {src: r, srcSet: n, sizes: i, height: a, width: l, decoding: u, className: c, style: d, fetchPriority: h, placeholder: f, loading: p, unoptimized: v, fill: y, onLoadRef: b, onLoadingCompleteRef: x, setBlurComplete: w, setShowAltText: P, onLoad: S, onError: A, ...E} = t;
            return (0,
            o.jsx)("img", {
                ...E,
                ...g(h),
                loading: p,
                width: l,
                height: a,
                decoding: u,
                "data-nimg": y ? "fill" : "1",
                className: c,
                style: d,
                sizes: i,
                srcSet: n,
                src: r,
                ref: (0,
                s.useCallback)(t => {
                    e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)),
                    t && (A && (t.src = t.src),
                    t.complete && m(t, f, b, x, w, v))
                }
                , [r, f, b, x, w, A, v, e]),
                onLoad: t => {
                    m(t.currentTarget, f, b, x, w, v)
                }
                ,
                onError: t => {
                    P(!0),
                    "empty" !== f && w(!0),
                    A && A(t)
                }
            })
        }
        );
        function y(t) {
            let {isAppRouter: e, imgAttributes: r} = t
              , n = {
                as: "image",
                imageSrcSet: r.srcSet,
                imageSizes: r.sizes,
                crossOrigin: r.crossOrigin,
                referrerPolicy: r.referrerPolicy,
                ...g(r.fetchPriority)
            };
            return e && a.default.preload ? (a.default.preload(r.src, n),
            null) : (0,
            o.jsx)(l.default, {
                children: (0,
                o.jsx)("link", {
                    rel: "preload",
                    href: r.srcSet ? void 0 : r.src,
                    ...n
                }, "__nimg-" + r.src + r.srcSet + r.sizes)
            })
        }
        let b = (0,
        s.forwardRef)( (t, e) => {
            let r = (0,
            s.useContext)(h.RouterContext)
              , n = (0,
            s.useContext)(d.ImageConfigContext)
              , i = (0,
            s.useMemo)( () => {
                let t = p || n || c.imageConfigDefault
                  , e = [...t.deviceSizes, ...t.imageSizes].sort( (t, e) => t - e)
                  , r = t.deviceSizes.sort( (t, e) => t - e);
                return {
                    ...t,
                    allSizes: e,
                    deviceSizes: r
                }
            }
            , [n])
              , {onLoad: a, onLoadingComplete: l} = t
              , m = (0,
            s.useRef)(a);
            (0,
            s.useEffect)( () => {
                m.current = a
            }
            , [a]);
            let g = (0,
            s.useRef)(l);
            (0,
            s.useEffect)( () => {
                g.current = l
            }
            , [l]);
            let[b,x] = (0,
            s.useState)(!1)
              , [w,P] = (0,
            s.useState)(!1)
              , {props: S, meta: A} = (0,
            u.getImgProps)(t, {
                defaultLoader: f.default,
                imgConf: i,
                blurComplete: b,
                showAltText: w
            });
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(v, {
                    ...S,
                    unoptimized: A.unoptimized,
                    placeholder: A.placeholder,
                    fill: A.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: g,
                    setBlurComplete: x,
                    setShowAltText: P,
                    ref: e
                }), A.priority ? (0,
                o.jsx)(y, {
                    isAppRouter: !r,
                    imgAttributes: S
                }) : null]
            })
        }
        );
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    9914: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return x
            }
        });
        let n = r(3280)
          , i = r(9506)
          , o = n._(r(2820))
          , s = r(486)
          , a = r(71)
          , l = r(9623)
          , u = r(688)
          , c = r(5889)
          , d = r(4512)
          , h = r(8717)
          , f = r(8572)
          , p = r(2587)
          , m = r(8200)
          , g = r(5608)
          , v = new Set;
        function y(t, e, r, n, i, o) {
            if (o || (0,
            a.isLocalURL)(e)) {
                if (!n.bypassPrefetchedCheck) {
                    let i = e + "%" + r + "%" + (void 0 !== n.locale ? n.locale : "locale"in t ? t.locale : void 0);
                    if (v.has(i))
                        return;
                    v.add(i)
                }
                Promise.resolve(o ? t.prefetch(e, i) : t.prefetch(e, r, n)).catch(t => {}
                )
            }
        }
        function b(t) {
            return "string" == typeof t ? t : (0,
            l.formatUrl)(t)
        }
        let x = o.default.forwardRef(function(t, e) {
            let r, n;
            let {href: l, as: v, children: x, prefetch: w=null, passHref: P, replace: S, shallow: A, scroll: E, locale: C, onClick: j, onMouseEnter: T, onTouchStart: M, legacyBehavior: R=!1, ...k} = t;
            r = x,
            R && ("string" == typeof r || "number" == typeof r) && (r = (0,
            i.jsx)("a", {
                children: r
            }));
            let V = o.default.useContext(d.RouterContext)
              , O = o.default.useContext(h.AppRouterContext)
              , D = null != V ? V : O
              , L = !V
              , _ = !1 !== w
              , F = null === w ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL
              , {href: I, as: B} = o.default.useMemo( () => {
                if (!V) {
                    let t = b(l);
                    return {
                        href: t,
                        as: v ? b(v) : t
                    }
                }
                let[t,e] = (0,
                s.resolveHref)(V, l, !0);
                return {
                    href: t,
                    as: v ? (0,
                    s.resolveHref)(V, v) : e || t
                }
            }
            , [V, l, v])
              , N = o.default.useRef(I)
              , z = o.default.useRef(B);
            R && (n = o.default.Children.only(r));
            let W = R ? n && "object" == typeof n && n.ref : e
              , [U,H,$] = (0,
            f.useIntersection)({
                rootMargin: "200px"
            })
              , X = o.default.useCallback(t => {
                (z.current !== B || N.current !== I) && ($(),
                z.current = B,
                N.current = I),
                U(t),
                W && ("function" == typeof W ? W(t) : "object" == typeof W && (W.current = t))
            }
            , [B, W, I, $, U]);
            o.default.useEffect( () => {
                D && H && _ && y(D, I, B, {
                    locale: C
                }, {
                    kind: F
                }, L)
            }
            , [B, I, H, C, _, null == V ? void 0 : V.locale, D, L, F]);
            let Z = {
                ref: X,
                onClick(t) {
                    R || "function" != typeof j || j(t),
                    R && n.props && "function" == typeof n.props.onClick && n.props.onClick(t),
                    D && !t.defaultPrevented && function(t, e, r, n, i, s, l, u, c) {
                        let {nodeName: d} = t.currentTarget;
                        if ("A" === d.toUpperCase() && (function(t) {
                            let e = t.currentTarget.getAttribute("target");
                            return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                        }(t) || !c && !(0,
                        a.isLocalURL)(r)))
                            return;
                        t.preventDefault();
                        let h = () => {
                            let t = null == l || l;
                            "beforePopState"in e ? e[i ? "replace" : "push"](r, n, {
                                shallow: s,
                                locale: u,
                                scroll: t
                            }) : e[i ? "replace" : "push"](n || r, {
                                scroll: t
                            })
                        }
                        ;
                        c ? o.default.startTransition(h) : h()
                    }(t, D, I, B, S, A, E, C, L)
                },
                onMouseEnter(t) {
                    R || "function" != typeof T || T(t),
                    R && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(t),
                    D && (_ || !L) && y(D, I, B, {
                        locale: C,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: F
                    }, L)
                },
                onTouchStart(t) {
                    R || "function" != typeof M || M(t),
                    R && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(t),
                    D && (_ || !L) && y(D, I, B, {
                        locale: C,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: F
                    }, L)
                }
            };
            if ((0,
            u.isAbsoluteUrl)(B))
                Z.href = B;
            else if (!R || P || "a" === n.type && !("href"in n.props)) {
                let t = void 0 !== C ? C : null == V ? void 0 : V.locale
                  , e = (null == V ? void 0 : V.isLocaleDomain) && (0,
                p.getDomainLocale)(B, t, null == V ? void 0 : V.locales, null == V ? void 0 : V.domainLocales);
                Z.href = e || (0,
                m.addBasePath)((0,
                c.addLocale)(B, t, null == V ? void 0 : V.defaultLocale))
            }
            return R ? o.default.cloneElement(n, Z) : (0,
            i.jsx)("a", {
                ...k,
                ...Z,
                children: r
            })
        });
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    3456: function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            requestIdleCallback: function() {
                return r
            },
            cancelIdleCallback: function() {
                return n
            }
        });
        let r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
            let e = Date.now();
            return self.setTimeout(function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }, 1)
        }
          , n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
            return clearTimeout(t)
        }
        ;
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    486: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "resolveHref", {
            enumerable: !0,
            get: function() {
                return d
            }
        });
        let n = r(3769)
          , i = r(9623)
          , o = r(7154)
          , s = r(688)
          , a = r(3781)
          , l = r(71)
          , u = r(7453)
          , c = r(8985);
        function d(t, e, r) {
            let d;
            let h = "string" == typeof e ? e : (0,
            i.formatWithValidation)(e)
              , f = h.match(/^[a-zA-Z]{1,}:\/\//)
              , p = f ? h.slice(f[0].length) : h;
            if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
                console.error("Invalid href '" + h + "' passed to next/router in page: '" + t.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                let e = (0,
                s.normalizeRepeatedSlashes)(p);
                h = (f ? f[0] : "") + e
            }
            if (!(0,
            l.isLocalURL)(h))
                return r ? [h] : h;
            try {
                d = new URL(h.startsWith("#") ? t.asPath : t.pathname,"http://n")
            } catch (t) {
                d = new URL("/","http://n")
            }
            try {
                let t = new URL(h,d);
                t.pathname = (0,
                a.normalizePathTrailingSlash)(t.pathname);
                let e = "";
                if ((0,
                u.isDynamicRoute)(t.pathname) && t.searchParams && r) {
                    let r = (0,
                    n.searchParamsToUrlQuery)(t.searchParams)
                      , {result: s, params: a} = (0,
                    c.interpolateAs)(t.pathname, t.pathname, r);
                    s && (e = (0,
                    i.formatWithValidation)({
                        pathname: s,
                        hash: t.hash,
                        query: (0,
                        o.omit)(r, a)
                    }))
                }
                let s = t.origin === d.origin ? t.href.slice(t.origin.length) : t.href;
                return r ? [s, e || s] : s
            } catch (t) {
                return r ? [h] : h
            }
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    8572: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let n = r(2820)
          , i = r(3456)
          , o = "function" == typeof IntersectionObserver
          , s = new Map
          , a = [];
        function l(t) {
            let {rootRef: e, rootMargin: r, disabled: l} = t
              , u = l || !o
              , [c,d] = (0,
            n.useState)(!1)
              , h = (0,
            n.useRef)(null)
              , f = (0,
            n.useCallback)(t => {
                h.current = t
            }
            , []);
            return (0,
            n.useEffect)( () => {
                if (o) {
                    if (u || c)
                        return;
                    let t = h.current;
                    if (t && t.tagName)
                        return function(t, e, r) {
                            let {id: n, observer: i, elements: o} = function(t) {
                                let e;
                                let r = {
                                    root: t.root || null,
                                    margin: t.rootMargin || ""
                                }
                                  , n = a.find(t => t.root === r.root && t.margin === r.margin);
                                if (n && (e = s.get(n)))
                                    return e;
                                let i = new Map;
                                return e = {
                                    id: r,
                                    observer: new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            let e = i.get(t.target)
                                              , r = t.isIntersecting || t.intersectionRatio > 0;
                                            e && r && e(r)
                                        }
                                        )
                                    }
                                    ,t),
                                    elements: i
                                },
                                a.push(r),
                                s.set(r, e),
                                e
                            }(r);
                            return o.set(t, e),
                            i.observe(t),
                            function() {
                                if (o.delete(t),
                                i.unobserve(t),
                                0 === o.size) {
                                    i.disconnect(),
                                    s.delete(n);
                                    let t = a.findIndex(t => t.root === n.root && t.margin === n.margin);
                                    t > -1 && a.splice(t, 1)
                                }
                            }
                        }(t, t => t && d(t), {
                            root: null == e ? void 0 : e.current,
                            rootMargin: r
                        })
                } else if (!c) {
                    let t = (0,
                    i.requestIdleCallback)( () => d(!0));
                    return () => (0,
                    i.cancelIdleCallback)(t)
                }
            }
            , [u, r, e, c, h.current]),
            [f, c, (0,
            n.useCallback)( () => {
                d(!1)
            }
            , [])]
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    7130: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = r(3280)._(r(2820)).default.createContext({})
    },
    33: function(t, e) {
        function r(t) {
            let {ampFirst: e=!1, hybrid: r=!1, hasQuery: n=!1} = void 0 === t ? {} : t;
            return e || r && n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    245: function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "escapeStringRegexp", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let r = /[|\\{}()[\]^$+*?.-]/
          , n = /[|\\{}()[\]^$+*?.-]/g;
        function i(t) {
            return r.test(t) ? t.replace(n, "\\$&") : t
        }
    },
    8145: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getImgProps", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        r(3737);
        let n = r(559)
          , i = r(8792);
        function o(t) {
            return void 0 !== t.default
        }
        function s(t) {
            return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
        }
        function a(t, e) {
            var r;
            let a, l, u, {src: c, sizes: d, unoptimized: h=!1, priority: f=!1, loading: p, className: m, quality: g, width: v, height: y, fill: b=!1, style: x, onLoad: w, onLoadingComplete: P, placeholder: S="empty", blurDataURL: A, fetchPriority: E, layout: C, objectFit: j, objectPosition: T, lazyBoundary: M, lazyRoot: R, ...k} = t, {imgConf: V, showAltText: O, blurComplete: D, defaultLoader: L} = e, _ = V || i.imageConfigDefault;
            if ("allSizes"in _)
                a = _;
            else {
                let t = [..._.deviceSizes, ..._.imageSizes].sort( (t, e) => t - e)
                  , e = _.deviceSizes.sort( (t, e) => t - e);
                a = {
                    ..._,
                    allSizes: t,
                    deviceSizes: e
                }
            }
            let F = k.loader || L;
            delete k.loader,
            delete k.srcSet;
            let I = "__next_img_default"in F;
            if (I) {
                if ("custom" === a.loader)
                    throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let t = F;
                F = e => {
                    let {config: r, ...n} = e;
                    return t(n)
                }
            }
            if (C) {
                "fill" === C && (b = !0);
                let t = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[C];
                t && (x = {
                    ...x,
                    ...t
                });
                let e = {
                    responsive: "100vw",
                    fill: "100vw"
                }[C];
                e && !d && (d = e)
            }
            let B = ""
              , N = s(v)
              , z = s(y);
            if ("object" == typeof (r = c) && (o(r) || void 0 !== r.src)) {
                let t = o(c) ? c.default : c;
                if (!t.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                if (!t.height || !t.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                if (l = t.blurWidth,
                u = t.blurHeight,
                A = A || t.blurDataURL,
                B = t.src,
                !b) {
                    if (N || z) {
                        if (N && !z) {
                            let e = N / t.width;
                            z = Math.round(t.height * e)
                        } else if (!N && z) {
                            let e = z / t.height;
                            N = Math.round(t.width * e)
                        }
                    } else
                        N = t.width,
                        z = t.height
                }
            }
            let W = !f && ("lazy" === p || void 0 === p);
            (!(c = "string" == typeof c ? c : B) || c.startsWith("data:") || c.startsWith("blob:")) && (h = !0,
            W = !1),
            a.unoptimized && (h = !0),
            I && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (h = !0),
            f && (E = "high");
            let U = s(g)
              , H = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: j,
                objectPosition: T
            } : {}, O ? {} : {
                color: "transparent"
            }, x)
              , $ = D || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            n.getImageBlurSvg)({
                widthInt: N,
                heightInt: z,
                blurWidth: l,
                blurHeight: u,
                blurDataURL: A || "",
                objectFit: H.objectFit
            }) + '")' : 'url("' + S + '")'
              , X = $ ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: $
            } : {}
              , Z = function(t) {
                let {config: e, src: r, unoptimized: n, width: i, quality: o, sizes: s, loader: a} = t;
                if (n)
                    return {
                        src: r,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: u} = function(t, e, r) {
                    let {deviceSizes: n, allSizes: i} = t;
                    if (r) {
                        let t = /(^|\s)(1?\d?\d)vw/g
                          , e = [];
                        for (let n; n = t.exec(r); n)
                            e.push(parseInt(n[2]));
                        if (e.length) {
                            let t = .01 * Math.min(...e);
                            return {
                                widths: i.filter(e => e >= n[0] * t),
                                kind: "w"
                            }
                        }
                        return {
                            widths: i,
                            kind: "w"
                        }
                    }
                    return "number" != typeof e ? {
                        widths: n,
                        kind: "w"
                    } : {
                        widths: [...new Set([e, 2 * e].map(t => i.find(e => e >= t) || i[i.length - 1]))],
                        kind: "x"
                    }
                }(e, i, s)
                  , c = l.length - 1;
                return {
                    sizes: s || "w" !== u ? s : "100vw",
                    srcSet: l.map( (t, n) => a({
                        config: e,
                        src: r,
                        quality: o,
                        width: t
                    }) + " " + ("w" === u ? t : n + 1) + u).join(", "),
                    src: a({
                        config: e,
                        src: r,
                        quality: o,
                        width: l[c]
                    })
                }
            }({
                config: a,
                src: c,
                unoptimized: h,
                width: N,
                quality: U,
                sizes: d,
                loader: F
            });
            return {
                props: {
                    ...k,
                    loading: W ? "lazy" : p,
                    fetchPriority: E,
                    width: N,
                    height: z,
                    decoding: "async",
                    className: m,
                    style: {
                        ...H,
                        ...X
                    },
                    sizes: Z.sizes,
                    srcSet: Z.srcSet,
                    src: Z.src
                },
                meta: {
                    unoptimized: h,
                    priority: f,
                    placeholder: S,
                    fill: b
                }
            }
        }
    },
    3328: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            defaultHead: function() {
                return d
            },
            default: function() {
                return m
            }
        });
        let n = r(3280)
          , i = r(7791)
          , o = r(9506)
          , s = i._(r(2820))
          , a = n._(r(9049))
          , l = r(7130)
          , u = r(9086)
          , c = r(33);
        function d(t) {
            void 0 === t && (t = !1);
            let e = [(0,
            o.jsx)("meta", {
                charSet: "utf-8"
            })];
            return t || e.push((0,
            o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            e
        }
        function h(t, e) {
            return "string" == typeof e || "number" == typeof e ? t : e.type === s.default.Fragment ? t.concat(s.default.Children.toArray(e.props.children).reduce( (t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
        }
        r(3737);
        let f = ["name", "httpEquiv", "charSet", "itemProp"];
        function p(t, e) {
            let {inAmpMode: r} = e;
            return t.reduce(h, []).reverse().concat(d(r).reverse()).filter(function() {
                let t = new Set
                  , e = new Set
                  , r = new Set
                  , n = {};
                return i => {
                    let o = !0
                      , s = !1;
                    if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                        s = !0;
                        let e = i.key.slice(i.key.indexOf("$") + 1);
                        t.has(e) ? o = !1 : t.add(e)
                    }
                    switch (i.type) {
                    case "title":
                    case "base":
                        e.has(i.type) ? o = !1 : e.add(i.type);
                        break;
                    case "meta":
                        for (let t = 0, e = f.length; t < e; t++) {
                            let e = f[t];
                            if (i.props.hasOwnProperty(e)) {
                                if ("charSet" === e)
                                    r.has(e) ? o = !1 : r.add(e);
                                else {
                                    let t = i.props[e]
                                      , r = n[e] || new Set;
                                    ("name" !== e || !s) && r.has(t) ? o = !1 : (r.add(t),
                                    n[e] = r)
                                }
                            }
                        }
                    }
                    return o
                }
            }()).reverse().map( (t, e) => {
                let n = t.key || e;
                if (!r && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                    let e = {
                        ...t.props || {}
                    };
                    return e["data-href"] = e.href,
                    e.href = void 0,
                    e["data-optimized-fonts"] = !0,
                    s.default.cloneElement(t, e)
                }
                return s.default.cloneElement(t, {
                    key: n
                })
            }
            )
        }
        let m = function(t) {
            let {children: e} = t
              , r = (0,
            s.useContext)(l.AmpStateContext)
              , n = (0,
            s.useContext)(u.HeadManagerContext);
            return (0,
            o.jsx)(a.default, {
                reduceComponentsToState: p,
                headManager: n,
                inAmpMode: (0,
                c.isInAmpMode)(r),
                children: e
            })
        };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    559: function(t, e) {
        function r(t) {
            let {widthInt: e, heightInt: r, blurWidth: n, blurHeight: i, blurDataURL: o, objectFit: s} = t
              , a = n ? 40 * n : e
              , l = i ? 40 * i : r
              , u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    1632: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(3280)._(r(2820))
          , i = r(8792)
          , o = n.default.createContext(i.imageConfigDefault)
    },
    8792: function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            VALID_LOADERS: function() {
                return r
            },
            imageConfigDefault: function() {
                return n
            }
        });
        let r = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , n = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            remotePatterns: [],
            unoptimized: !1
        }
    },
    5198: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            getImageProps: function() {
                return a
            },
            default: function() {
                return l
            }
        });
        let n = r(3280)
          , i = r(8145)
          , o = r(4117)
          , s = n._(r(9657))
          , a = t => {
            let {props: e} = (0,
            i.getImgProps)(t, {
                defaultLoader: s.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[t,r] of Object.entries(e))
                void 0 === r && delete e[t];
            return {
                props: e
            }
        }
          , l = o.Image
    },
    9657: function(t, e) {
        function r(t) {
            let {config: e, src: r, width: n, quality: i} = t;
            return e.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (i || 75)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r.__next_img_default = !0;
        let n = r
    },
    4512: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "RouterContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = r(3280)._(r(2820)).default.createContext(null)
    },
    9623: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            formatUrl: function() {
                return o
            },
            urlObjectKeys: function() {
                return s
            },
            formatWithValidation: function() {
                return a
            }
        });
        let n = r(7791)._(r(3769))
          , i = /https?|ftp|gopher|file/;
        function o(t) {
            let {auth: e, hostname: r} = t
              , o = t.protocol || ""
              , s = t.pathname || ""
              , a = t.hash || ""
              , l = t.query || ""
              , u = !1;
            e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "",
            t.host ? u = e + t.host : r && (u = e + (~r.indexOf(":") ? "[" + r + "]" : r),
            t.port && (u += ":" + t.port)),
            l && "object" == typeof l && (l = String(n.urlQueryToSearchParams(l)));
            let c = t.search || l && "?" + l || "";
            return o && !o.endsWith(":") && (o += ":"),
            t.slashes || (!o || i.test(o)) && !1 !== u ? (u = "//" + (u || ""),
            s && "/" !== s[0] && (s = "/" + s)) : u || (u = ""),
            a && "#" !== a[0] && (a = "#" + a),
            c && "?" !== c[0] && (c = "?" + c),
            "" + o + u + (s = s.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + a
        }
        let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function a(t) {
            return o(t)
        }
    },
    7453: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            getSortedRoutes: function() {
                return n.getSortedRoutes
            },
            isDynamicRoute: function() {
                return i.isDynamicRoute
            }
        });
        let n = r(3184)
          , i = r(8472)
    },
    8985: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "interpolateAs", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(5325)
          , i = r(7981);
        function o(t, e, r) {
            let o = ""
              , s = (0,
            i.getRouteRegex)(t)
              , a = s.groups
              , l = (e !== t ? (0,
            n.getRouteMatcher)(s)(e) : "") || r;
            o = t;
            let u = Object.keys(a);
            return u.every(t => {
                let e = l[t] || ""
                  , {repeat: r, optional: n} = a[t]
                  , i = "[" + (r ? "..." : "") + t + "]";
                return n && (i = (e ? "" : "/") + "[" + i + "]"),
                r && !Array.isArray(e) && (e = [e]),
                (n || t in l) && (o = o.replace(i, r ? e.map(t => encodeURIComponent(t)).join("/") : encodeURIComponent(e)) || "/")
            }
            ) || (o = ""),
            {
                params: u,
                result: o
            }
        }
    },
    8472: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isDynamicRoute", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(5753)
          , i = /\/\[[^/]+?\](?=\/|$)/;
        function o(t) {
            return (0,
            n.isInterceptionRouteAppPath)(t) && (t = (0,
            n.extractInterceptionRouteInformation)(t).interceptedRoute),
            i.test(t)
        }
    },
    71: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isLocalURL", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(688)
          , i = r(2224);
        function o(t) {
            if (!(0,
            n.isAbsoluteUrl)(t))
                return !0;
            try {
                let e = (0,
                n.getLocationOrigin)()
                  , r = new URL(t,e);
                return r.origin === e && (0,
                i.hasBasePath)(r.pathname)
            } catch (t) {
                return !1
            }
        }
    },
    7154: function(t, e) {
        function r(t, e) {
            let r = {};
            return Object.keys(t).forEach(n => {
                e.includes(n) || (r[n] = t[n])
            }
            ),
            r
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "omit", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    3769: function(t, e) {
        function r(t) {
            let e = {};
            return t.forEach( (t, r) => {
                void 0 === e[r] ? e[r] = t : Array.isArray(e[r]) ? e[r].push(t) : e[r] = [e[r], t]
            }
            ),
            e
        }
        function n(t) {
            return "string" != typeof t && ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
        }
        function i(t) {
            let e = new URLSearchParams;
            return Object.entries(t).forEach(t => {
                let[r,i] = t;
                Array.isArray(i) ? i.forEach(t => e.append(r, n(t))) : e.set(r, n(i))
            }
            ),
            e
        }
        function o(t) {
            for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                r[n - 1] = arguments[n];
            return r.forEach(e => {
                Array.from(e.keys()).forEach(e => t.delete(e)),
                e.forEach( (e, r) => t.append(r, e))
            }
            ),
            t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            searchParamsToUrlQuery: function() {
                return r
            },
            urlQueryToSearchParams: function() {
                return i
            },
            assign: function() {
                return o
            }
        })
    },
    5325: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getRouteMatcher", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(688);
        function i(t) {
            let {re: e, groups: r} = t;
            return t => {
                let i = e.exec(t);
                if (!i)
                    return !1;
                let o = t => {
                    try {
                        return decodeURIComponent(t)
                    } catch (t) {
                        throw new n.DecodeError("failed to decode param")
                    }
                }
                  , s = {};
                return Object.keys(r).forEach(t => {
                    let e = r[t]
                      , n = i[e.pos];
                    void 0 !== n && (s[t] = ~n.indexOf("/") ? n.split("/").map(t => o(t)) : e.repeat ? [o(n)] : o(n))
                }
                ),
                s
            }
        }
    },
    7981: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            getRouteRegex: function() {
                return l
            },
            getNamedRouteRegex: function() {
                return d
            },
            getNamedMiddlewareRegex: function() {
                return h
            }
        });
        let n = r(5753)
          , i = r(245)
          , o = r(4807);
        function s(t) {
            let e = t.startsWith("[") && t.endsWith("]");
            e && (t = t.slice(1, -1));
            let r = t.startsWith("...");
            return r && (t = t.slice(3)),
            {
                key: t,
                repeat: r,
                optional: e
            }
        }
        function a(t) {
            let e = (0,
            o.removeTrailingSlash)(t).slice(1).split("/")
              , r = {}
              , a = 1;
            return {
                parameterizedRoute: e.map(t => {
                    let e = n.INTERCEPTION_ROUTE_MARKERS.find(e => t.startsWith(e))
                      , o = t.match(/\[((?:\[.*\])|.+)\]/);
                    if (e && o) {
                        let {key: t, optional: n, repeat: l} = s(o[1]);
                        return r[t] = {
                            pos: a++,
                            repeat: l,
                            optional: n
                        },
                        "/" + (0,
                        i.escapeStringRegexp)(e) + "([^/]+?)"
                    }
                    if (!o)
                        return "/" + (0,
                        i.escapeStringRegexp)(t);
                    {
                        let {key: t, repeat: e, optional: n} = s(o[1]);
                        return r[t] = {
                            pos: a++,
                            repeat: e,
                            optional: n
                        },
                        e ? n ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                    }
                }
                ).join(""),
                groups: r
            }
        }
        function l(t) {
            let {parameterizedRoute: e, groups: r} = a(t);
            return {
                re: RegExp("^" + e + "(?:/)?$"),
                groups: r
            }
        }
        function u(t) {
            let {interceptionMarker: e, getSafeRouteKey: r, segment: n, routeKeys: o, keyPrefix: a} = t
              , {key: l, optional: u, repeat: c} = s(n)
              , d = l.replace(/\W/g, "");
            a && (d = "" + a + d);
            let h = !1;
            (0 === d.length || d.length > 30) && (h = !0),
            isNaN(parseInt(d.slice(0, 1))) || (h = !0),
            h && (d = r()),
            a ? o[d] = "" + a + l : o[d] = l;
            let f = e ? (0,
            i.escapeStringRegexp)(e) : "";
            return c ? u ? "(?:/" + f + "(?<" + d + ">.+?))?" : "/" + f + "(?<" + d + ">.+?)" : "/" + f + "(?<" + d + ">[^/]+?)"
        }
        function c(t, e) {
            let r;
            let s = (0,
            o.removeTrailingSlash)(t).slice(1).split("/")
              , a = (r = 0,
            () => {
                let t = ""
                  , e = ++r;
                for (; e > 0; )
                    t += String.fromCharCode(97 + (e - 1) % 26),
                    e = Math.floor((e - 1) / 26);
                return t
            }
            )
              , l = {};
            return {
                namedParameterizedRoute: s.map(t => {
                    let r = n.INTERCEPTION_ROUTE_MARKERS.some(e => t.startsWith(e))
                      , o = t.match(/\[((?:\[.*\])|.+)\]/);
                    if (r && o) {
                        let[r] = t.split(o[0]);
                        return u({
                            getSafeRouteKey: a,
                            interceptionMarker: r,
                            segment: o[1],
                            routeKeys: l,
                            keyPrefix: e ? "nxtI" : void 0
                        })
                    }
                    return o ? u({
                        getSafeRouteKey: a,
                        segment: o[1],
                        routeKeys: l,
                        keyPrefix: e ? "nxtP" : void 0
                    }) : "/" + (0,
                    i.escapeStringRegexp)(t)
                }
                ).join(""),
                routeKeys: l
            }
        }
        function d(t, e) {
            let r = c(t, e);
            return {
                ...l(t),
                namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
                routeKeys: r.routeKeys
            }
        }
        function h(t, e) {
            let {parameterizedRoute: r} = a(t)
              , {catchAll: n=!0} = e;
            if ("/" === r)
                return {
                    namedRegex: "^/" + (n ? ".*" : "") + "$"
                };
            let {namedParameterizedRoute: i} = c(t, !1);
            return {
                namedRegex: "^" + i + (n ? "(?:(/.*)?)" : "") + "$"
            }
        }
    },
    3184: function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getSortedRoutes", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        class r {
            insert(t) {
                this._insert(t.split("/").filter(Boolean), [], !1)
            }
            smoosh() {
                return this._smoosh()
            }
            _smoosh(t) {
                void 0 === t && (t = "/");
                let e = [...this.children.keys()].sort();
                null !== this.slugName && e.splice(e.indexOf("[]"), 1),
                null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1),
                null !== this.optionalRestSlugName && e.splice(e.indexOf("[[...]]"), 1);
                let r = e.map(e => this.children.get(e)._smoosh("" + t + e + "/")).reduce( (t, e) => [...t, ...e], []);
                if (null !== this.slugName && r.push(...this.children.get("[]")._smoosh(t + "[" + this.slugName + "]/")),
                !this.placeholder) {
                    let e = "/" === t ? "/" : t.slice(0, -1);
                    if (null != this.optionalRestSlugName)
                        throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + e + '" and "' + e + "[[..." + this.optionalRestSlugName + ']]").');
                    r.unshift(e)
                }
                return null !== this.restSlugName && r.push(...this.children.get("[...]")._smoosh(t + "[..." + this.restSlugName + "]/")),
                null !== this.optionalRestSlugName && r.push(...this.children.get("[[...]]")._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")),
                r
            }
            _insert(t, e, n) {
                if (0 === t.length) {
                    this.placeholder = !1;
                    return
                }
                if (n)
                    throw Error("Catch-all must be the last part of the URL.");
                let i = t[0];
                if (i.startsWith("[") && i.endsWith("]")) {
                    let r = i.slice(1, -1)
                      , s = !1;
                    if (r.startsWith("[") && r.endsWith("]") && (r = r.slice(1, -1),
                    s = !0),
                    r.startsWith("...") && (r = r.substring(3),
                    n = !0),
                    r.startsWith("[") || r.endsWith("]"))
                        throw Error("Segment names may not start or end with extra brackets ('" + r + "').");
                    if (r.startsWith("."))
                        throw Error("Segment names may not start with erroneous periods ('" + r + "').");
                    function o(t, r) {
                        if (null !== t && t !== r)
                            throw Error("You cannot use different slug names for the same dynamic path ('" + t + "' !== '" + r + "').");
                        e.forEach(t => {
                            if (t === r)
                                throw Error('You cannot have the same slug name "' + r + '" repeat within a single dynamic path');
                            if (t.replace(/\W/g, "") === i.replace(/\W/g, ""))
                                throw Error('You cannot have the slug names "' + t + '" and "' + r + '" differ only by non-word symbols within a single dynamic path')
                        }
                        ),
                        e.push(r)
                    }
                    if (n) {
                        if (s) {
                            if (null != this.restSlugName)
                                throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + t[0] + '" ).');
                            o(this.optionalRestSlugName, r),
                            this.optionalRestSlugName = r,
                            i = "[[...]]"
                        } else {
                            if (null != this.optionalRestSlugName)
                                throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + t[0] + '").');
                            o(this.restSlugName, r),
                            this.restSlugName = r,
                            i = "[...]"
                        }
                    } else {
                        if (s)
                            throw Error('Optional route parameters are not yet supported ("' + t[0] + '").');
                        o(this.slugName, r),
                        this.slugName = r,
                        i = "[]"
                    }
                }
                this.children.has(i) || this.children.set(i, new r),
                this.children.get(i)._insert(t.slice(1), e, n)
            }
            constructor() {
                this.placeholder = !0,
                this.children = new Map,
                this.slugName = null,
                this.restSlugName = null,
                this.optionalRestSlugName = null
            }
        }
        function n(t) {
            let e = new r;
            return t.forEach(t => e.insert(t)),
            e.smoosh()
        }
    },
    9049: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let n = r(2820)
          , i = n.useLayoutEffect
          , o = n.useEffect;
        function s(t) {
            let {headManager: e, reduceComponentsToState: r} = t;
            function s() {
                if (e && e.mountedInstances) {
                    let i = n.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                    e.updateHead(r(i, t))
                }
            }
            return i( () => {
                var r;
                return null == e || null == (r = e.mountedInstances) || r.add(t.children),
                () => {
                    var r;
                    null == e || null == (r = e.mountedInstances) || r.delete(t.children)
                }
            }
            ),
            i( () => (e && (e._pendingUpdate = s),
            () => {
                e && (e._pendingUpdate = s)
            }
            )),
            o( () => (e && e._pendingUpdate && (e._pendingUpdate(),
            e._pendingUpdate = null),
            () => {
                e && e._pendingUpdate && (e._pendingUpdate(),
                e._pendingUpdate = null)
            }
            )),
            null
        }
    },
    688: function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            WEB_VITALS: function() {
                return r
            },
            execOnce: function() {
                return n
            },
            isAbsoluteUrl: function() {
                return o
            },
            getLocationOrigin: function() {
                return s
            },
            getURL: function() {
                return a
            },
            getDisplayName: function() {
                return l
            },
            isResSent: function() {
                return u
            },
            normalizeRepeatedSlashes: function() {
                return c
            },
            loadGetInitialProps: function() {
                return d
            },
            SP: function() {
                return h
            },
            ST: function() {
                return f
            },
            DecodeError: function() {
                return p
            },
            NormalizeError: function() {
                return m
            },
            PageNotFoundError: function() {
                return g
            },
            MissingStaticPage: function() {
                return v
            },
            MiddlewareNotFoundError: function() {
                return y
            },
            stringifyError: function() {
                return b
            }
        });
        let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function n(t) {
            let e, r = !1;
            return function() {
                for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
                    i[o] = arguments[o];
                return r || (r = !0,
                e = t(...i)),
                e
            }
        }
        let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , o = t => i.test(t);
        function s() {
            let {protocol: t, hostname: e, port: r} = window.location;
            return t + "//" + e + (r ? ":" + r : "")
        }
        function a() {
            let {href: t} = window.location
              , e = s();
            return t.substring(e.length)
        }
        function l(t) {
            return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
        }
        function u(t) {
            return t.finished || t.headersSent
        }
        function c(t) {
            let e = t.split("?");
            return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
        }
        async function d(t, e) {
            let r = e.res || e.ctx && e.ctx.res;
            if (!t.getInitialProps)
                return e.ctx && e.Component ? {
                    pageProps: await d(e.Component, e.ctx)
                } : {};
            let n = await t.getInitialProps(e);
            if (r && u(r))
                return n;
            if (!n)
                throw Error('"' + l(t) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.');
            return n
        }
        let h = "undefined" != typeof performance
          , f = h && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);
        class p extends Error {
        }
        class m extends Error {
        }
        class g extends Error {
            constructor(t) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + t
            }
        }
        class v extends Error {
            constructor(t, e) {
                super(),
                this.message = "Failed to load static file for page: " + t + " " + e
            }
        }
        class y extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function b(t) {
            return JSON.stringify({
                message: t.message,
                stack: t.stack
            })
        }
    },
    1138: function(t, e, r) {
        r.d(e, {
            Z: function() {
                return n
            }
        });
        function n() {
            return (n = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
                return t
            }
            ).apply(this, arguments)
        }
    },
    7133: function(t, e, r) {
        r.d(e, {
            F: function() {
                return i
            },
            e: function() {
                return o
            }
        });
        var n = r(2820);
        function i() {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            return t => e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
            }
            )
        }
        function o() {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            return (0,
            n.useCallback)(i(...e), e)
        }
    },
    832: function(t, e, r) {
        r.d(e, {
            WV: function() {
                return a
            },
            jH: function() {
                return l
            }
        });
        var n = r(1138)
          , i = r(2820)
          , o = r(8613)
          , s = r(3539);
        let a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce( (t, e) => {
            let r = (0,
            i.forwardRef)( (t, r) => {
                let {asChild: o, ...a} = t
                  , l = o ? s.g7 : e;
                return (0,
                i.useEffect)( () => {
                    window[Symbol.for("radix-ui")] = !0
                }
                , []),
                (0,
                i.createElement)(l, (0,
                n.Z)({}, a, {
                    ref: r
                }))
            }
            );
            return r.displayName = "Primitive.".concat(e),
            {
                ...t,
                [e]: r
            }
        }
        , {});
        function l(t, e) {
            t && (0,
            o.flushSync)( () => t.dispatchEvent(e))
        }
    },
    3539: function(t, e, r) {
        r.d(e, {
            g7: function() {
                return s
            }
        });
        var n = r(1138)
          , i = r(2820)
          , o = r(7133);
        let s = (0,
        i.forwardRef)( (t, e) => {
            let {children: r, ...o} = t
              , s = i.Children.toArray(r)
              , l = s.find(u);
            if (l) {
                let t = l.props.children
                  , r = s.map(e => e !== l ? e : i.Children.count(t) > 1 ? i.Children.only(null) : (0,
                i.isValidElement)(t) ? t.props.children : null);
                return (0,
                i.createElement)(a, (0,
                n.Z)({}, o, {
                    ref: e
                }), (0,
                i.isValidElement)(t) ? (0,
                i.cloneElement)(t, void 0, r) : null)
            }
            return (0,
            i.createElement)(a, (0,
            n.Z)({}, o, {
                ref: e
            }), r)
        }
        );
        s.displayName = "Slot";
        let a = (0,
        i.forwardRef)( (t, e) => {
            let {children: r, ...n} = t;
            return (0,
            i.isValidElement)(r) ? (0,
            i.cloneElement)(r, {
                ...function(t, e) {
                    let r = {
                        ...e
                    };
                    for (let n in e) {
                        let i = t[n]
                          , o = e[n];
                        /^on[A-Z]/.test(n) ? i && o ? r[n] = function() {
                            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                                e[r] = arguments[r];
                            o(...e),
                            i(...e)
                        }
                        : i && (r[n] = i) : "style" === n ? r[n] = {
                            ...i,
                            ...o
                        } : "className" === n && (r[n] = [i, o].filter(Boolean).join(" "))
                    }
                    return {
                        ...t,
                        ...r
                    }
                }(n, r.props),
                ref: e ? (0,
                o.F)(e, r.ref) : r.ref
            }) : i.Children.count(r) > 1 ? i.Children.only(null) : null
        }
        );
        a.displayName = "SlotClone";
        let l = t => {
            let {children: e} = t;
            return (0,
            i.createElement)(i.Fragment, null, e)
        }
        ;
        function u(t) {
            return (0,
            i.isValidElement)(t) && t.type === l
        }
    },
    6832: function(t, e, r) {
        r.d(e, {
            j: function() {
                return o
            }
        });
        let n = t => "boolean" == typeof t ? "".concat(t) : 0 === t ? "0" : t
          , i = function() {
            for (var t, e, r = 0, n = ""; r < arguments.length; )
                (t = arguments[r++]) && (e = function t(e) {
                    var r, n, i = "";
                    if ("string" == typeof e || "number" == typeof e)
                        i += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e))
                            for (r = 0; r < e.length; r++)
                                e[r] && (n = t(e[r])) && (i && (i += " "),
                                i += n);
                        else
                            for (r in e)
                                e[r] && (i && (i += " "),
                                i += r)
                    }
                    return i
                }(t)) && (n && (n += " "),
                n += e);
            return n
        }
          , o = (t, e) => r => {
            var o;
            if ((null == e ? void 0 : e.variants) == null)
                return i(t, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
            let {variants: s, defaultVariants: a} = e
              , l = Object.keys(s).map(t => {
                let e = null == r ? void 0 : r[t]
                  , i = null == a ? void 0 : a[t];
                if (null === e)
                    return null;
                let o = n(e) || n(i);
                return s[t][o]
            }
            )
              , u = r && Object.entries(r).reduce( (t, e) => {
                let[r,n] = e;
                return void 0 === n || (t[r] = n),
                t
            }
            , {});
            return i(t, l, null == e ? void 0 : null === (o = e.compoundVariants) || void 0 === o ? void 0 : o.reduce( (t, e) => {
                let {class: r, className: n, ...i} = e;
                return Object.entries(i).every(t => {
                    let[e,r] = t;
                    return Array.isArray(r) ? r.includes({
                        ...a,
                        ...u
                    }[e]) : ({
                        ...a,
                        ...u
                    })[e] === r
                }
                ) ? [...t, r, n] : t
            }
            , []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
        }
    },
    4460: function(t, e, r) {
        r.d(e, {
            W: function() {
                return n
            }
        });
        function n() {
            for (var t, e, r = 0, n = "", i = arguments.length; r < i; r++)
                (t = arguments[r]) && (e = function t(e) {
                    var r, n, i = "";
                    if ("string" == typeof e || "number" == typeof e)
                        i += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e)) {
                            var o = e.length;
                            for (r = 0; r < o; r++)
                                e[r] && (n = t(e[r])) && (i && (i += " "),
                                i += n)
                        } else
                            for (n in e)
                                e[n] && (i && (i += " "),
                                i += n)
                    }
                    return i
                }(t)) && (n && (n += " "),
                n += e);
            return n
        }
    },
    9903: function(t, e, r) {
        r.d(e, {
            y: function() {
                return N
            }
        });
        var n = r(7767);
        let i = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
        function o(t, e, r, o) {
            if (t === e && r === o)
                return n.Z;
            let s = e => (function(t, e, r, n, o) {
                let s, a;
                let l = 0;
                do
                    (s = i(a = e + (r - e) / 2, n, o) - t) > 0 ? r = a : e = a;
                while (Math.abs(s) > 1e-7 && ++l < 12);
                return a
            }
            )(e, 0, 1, t, r);
            return t => 0 === t || 1 === t ? t : i(s(t), e, o)
        }
        let s = o(.42, 0, 1, 1)
          , a = o(0, 0, .58, 1)
          , l = o(.42, 0, .58, 1)
          , u = t => Array.isArray(t) && "number" != typeof t[0];
        var c = r(1299)
          , d = r(4623)
          , h = r(1836)
          , f = r(2809);
        let p = o(.33, 1.53, .69, .99)
          , m = (0,
        f.M)(p)
          , g = (0,
        h.o)(m)
          , v = {
            linear: n.Z,
            easeIn: s,
            easeInOut: l,
            easeOut: a,
            circIn: d.Z7,
            circInOut: d.X7,
            circOut: d.Bn,
            backIn: m,
            backInOut: g,
            backOut: p,
            anticipate: t => (t *= 2) < 1 ? .5 * m(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
          , y = t => {
            if (Array.isArray(t)) {
                (0,
                c.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,r,n,i] = t;
                return o(e, r, n, i)
            }
            return "string" == typeof t ? ((0,
            c.k)(void 0 !== v[t], "Invalid easing type '".concat(t, "'")),
            v[t]) : t
        }
        ;
        var b = r(726)
          , x = r(5403);
        function w(t) {
            let {duration: e=300, keyframes: r, times: n, ease: i="easeInOut"} = t
              , o = u(i) ? i.map(y) : y(i)
              , s = {
                done: !1,
                value: r[0]
            }
              , a = (n && n.length === r.length ? n : (0,
            x.Y)(r)).map(t => t * e)
              , c = (0,
            b.s)(a, r, {
                ease: Array.isArray(o) ? o : r.map( () => o || l).splice(0, r.length - 1)
            });
            return {
                calculatedDuration: e,
                next: t => (s.value = c(t),
                s.done = t >= e,
                s)
            }
        }
        var P = r(9590)
          , S = r(3527);
        function A(t, e, r) {
            let n = Math.max(e - 5, 0);
            return (0,
            S.R)(r - t(n), e - n)
        }
        var E = r(5760);
        function C(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let j = ["duration", "bounce"]
          , T = ["stiffness", "damping", "mass"];
        function M(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function R(t) {
            let e, {keyframes: r, restDelta: n, restSpeed: i, ...o} = t, s = r[0], a = r[r.length - 1], l = {
                done: !1,
                value: s
            }, {stiffness: u, damping: d, mass: h, duration: f, velocity: p, isResolvedFromDuration: m} = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!M(t, T) && M(t, j)) {
                    let r = function(t) {
                        let e, r, {duration: n=800, bounce: i=.25, velocity: o=0, mass: s=1} = t;
                        (0,
                        c.K)(n <= (0,
                        P.w)(10), "Spring duration must be 10 seconds or less");
                        let a = 1 - i;
                        a = (0,
                        E.u)(.05, 1, a),
                        n = (0,
                        E.u)(.01, 10, (0,
                        P.X)(n)),
                        a < 1 ? (e = t => {
                            let e = t * a
                              , r = e * n;
                            return .001 - (e - o) / C(t, a) * Math.exp(-r)
                        }
                        ,
                        r = t => {
                            let r = t * a * n
                              , i = Math.pow(a, 2) * Math.pow(t, 2) * n
                              , s = C(Math.pow(t, 2), a);
                            return (r * o + o - i) * Math.exp(-r) * (-e(t) + .001 > 0 ? -1 : 1) / s
                        }
                        ) : (e = t => -.001 + Math.exp(-t * n) * ((t - o) * n + 1),
                        r = t => n * n * (o - t) * Math.exp(-t * n));
                        let l = function(t, e, r) {
                            let n = r;
                            for (let r = 1; r < 12; r++)
                                n -= t(n) / e(n);
                            return n
                        }(e, r, 5 / n);
                        if (n = (0,
                        P.w)(n),
                        isNaN(l))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: n
                            };
                        {
                            let t = Math.pow(l, 2) * s;
                            return {
                                stiffness: t,
                                damping: 2 * a * Math.sqrt(s * t),
                                duration: n
                            }
                        }
                    }(t);
                    (e = {
                        ...e,
                        ...r,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
                return e
            }({
                ...o,
                velocity: -(0,
                P.X)(o.velocity || 0)
            }), g = p || 0, v = d / (2 * Math.sqrt(u * h)), y = a - s, b = (0,
            P.X)(Math.sqrt(u / h)), x = 5 > Math.abs(y);
            if (i || (i = x ? .01 : 2),
            n || (n = x ? .005 : .5),
            v < 1) {
                let t = C(b, v);
                e = e => a - Math.exp(-v * b * e) * ((g + v * b * y) / t * Math.sin(t * e) + y * Math.cos(t * e))
            } else if (1 === v)
                e = t => a - Math.exp(-b * t) * (y + (g + b * y) * t);
            else {
                let t = b * Math.sqrt(v * v - 1);
                e = e => {
                    let r = Math.exp(-v * b * e)
                      , n = Math.min(t * e, 300);
                    return a - r * ((g + v * b * y) * Math.sinh(n) + t * y * Math.cosh(n)) / t
                }
            }
            return {
                calculatedDuration: m && f || null,
                next: t => {
                    let r = e(t);
                    if (m)
                        l.done = t >= f;
                    else {
                        let o = g;
                        0 !== t && (o = v < 1 ? A(e, t, r) : 0);
                        let s = Math.abs(o) <= i
                          , u = Math.abs(a - r) <= n;
                        l.done = s && u
                    }
                    return l.value = l.done ? a : r,
                    l
                }
            }
        }
        function k(t) {
            let e, r, {keyframes: n, velocity: i=0, power: o=.8, timeConstant: s=325, bounceDamping: a=10, bounceStiffness: l=500, modifyTarget: u, min: c, max: d, restDelta: h=.5, restSpeed: f} = t, p = n[0], m = {
                done: !1,
                value: p
            }, g = t => void 0 !== c && t < c || void 0 !== d && t > d, v = t => void 0 === c ? d : void 0 === d ? c : Math.abs(c - t) < Math.abs(d - t) ? c : d, y = o * i, b = p + y, x = void 0 === u ? b : u(b);
            x !== b && (y = x - p);
            let w = t => -y * Math.exp(-t / s)
              , P = t => x + w(t)
              , S = t => {
                let e = w(t)
                  , r = P(t);
                m.done = Math.abs(e) <= h,
                m.value = m.done ? x : r
            }
              , E = t => {
                g(m.value) && (e = t,
                r = R({
                    keyframes: [m.value, v(m.value)],
                    velocity: A(P, t, m.value),
                    damping: a,
                    stiffness: l,
                    restDelta: h,
                    restSpeed: f
                }))
            }
            ;
            return E(0),
            {
                calculatedDuration: null,
                next: t => {
                    let n = !1;
                    return (r || void 0 !== e || (n = !0,
                    S(t),
                    E(t)),
                    void 0 !== e && t > e) ? r.next(t - e) : (n || S(t),
                    m)
                }
            }
        }
        var V = r(4907)
          , O = r(482);
        let D = t => {
            let e = e => {
                let {timestamp: r} = e;
                return t(r)
            }
            ;
            return {
                start: () => O.Wi.update(e, !0),
                stop: () => (0,
                O.Pn)(e),
                now: () => O.frameData.isProcessing ? O.frameData.timestamp : V.X.now()
            }
        }
        ;
        function L(t) {
            let e = 0
              , r = t.next(e);
            for (; !r.done && e < 2e4; )
                e += 50,
                r = t.next(e);
            return e >= 2e4 ? 1 / 0 : e
        }
        var _ = r(4902)
          , F = r(5340);
        let I = {
            decay: k,
            inertia: k,
            tween: w,
            keyframes: w,
            spring: R
        }
          , B = t => t / 100;
        function N(t) {
            let e, r, n, i, o, {autoplay: s=!0, delay: a=0, driver: l=D, keyframes: u, type: c="keyframes", repeat: d=0, repeatDelay: h=0, repeatType: f="loop", onPlay: p, onStop: m, onComplete: g, onUpdate: v, ...y} = t, b = 1, x = !1, S = () => {
                r = new Promise(t => {
                    e = t
                }
                )
            }
            ;
            S();
            let A = I[c] || w;
            A !== w && "number" != typeof u[0] && (i = (0,
            F.z)(B, (0,
            _.C)(u[0], u[1])),
            u = [0, 100]);
            let C = A({
                ...y,
                keyframes: u
            });
            "mirror" === f && (o = A({
                ...y,
                keyframes: [...u].reverse(),
                velocity: -(y.velocity || 0)
            }));
            let j = "idle"
              , T = null
              , M = null
              , R = null;
            null === C.calculatedDuration && d && (C.calculatedDuration = L(C));
            let {calculatedDuration: k} = C
              , V = 1 / 0
              , O = 1 / 0;
            null !== k && (O = (V = k + h) * (d + 1) - h);
            let N = 0
              , z = t => {
                if (null === M)
                    return;
                b > 0 && (M = Math.min(M, t)),
                b < 0 && (M = Math.min(t - O / b, M));
                let e = (N = null !== T ? T : Math.round(t - M) * b) - a * (b >= 0 ? 1 : -1)
                  , r = b >= 0 ? e < 0 : e > O;
                N = Math.max(e, 0),
                "finished" === j && null === T && (N = O);
                let n = N
                  , s = C;
                if (d) {
                    let t = Math.min(N, O) / V
                      , e = Math.floor(t)
                      , r = t % 1;
                    !r && t >= 1 && (r = 1),
                    1 === r && e--,
                    (e = Math.min(e, d + 1)) % 2 && ("reverse" === f ? (r = 1 - r,
                    h && (r -= h / V)) : "mirror" === f && (s = o)),
                    n = (0,
                    E.u)(0, 1, r) * V
                }
                let l = r ? {
                    done: !1,
                    value: u[0]
                } : s.next(n);
                i && (l.value = i(l.value));
                let {done: c} = l;
                r || null === k || (c = b >= 0 ? N >= O : N <= 0);
                let p = null === T && ("finished" === j || "running" === j && c);
                return v && v(l.value),
                p && H(),
                l
            }
              , W = () => {
                n && n.stop(),
                n = void 0
            }
              , U = () => {
                j = "idle",
                W(),
                e(),
                S(),
                M = R = null
            }
              , H = () => {
                j = "finished",
                g && g(),
                W(),
                e()
            }
              , $ = () => {
                if (x)
                    return;
                n || (n = l(z));
                let t = n.now();
                p && p(),
                null !== T ? M = t - T : M && "finished" !== j || (M = t),
                "finished" === j && S(),
                R = M,
                T = null,
                j = "running",
                n.start()
            }
            ;
            s && $();
            let X = {
                then: (t, e) => r.then(t, e),
                get time() {
                    return (0,
                    P.X)(N)
                },
                set time(newTime) {
                    N = newTime = (0,
                    P.w)(newTime),
                    null === T && n && 0 !== b ? M = n.now() - newTime / b : T = newTime
                },
                get duration() {
                    let t = null === C.calculatedDuration ? L(C) : C.calculatedDuration;
                    return (0,
                    P.X)(t)
                },
                get speed() {
                    return b
                },
                set speed(newSpeed) {
                    if (newSpeed === b || !n)
                        return;
                    b = newSpeed,
                    X.time = (0,
                    P.X)(N)
                },
                get state() {
                    return j
                },
                play: $,
                pause: () => {
                    j = "paused",
                    T = N
                }
                ,
                stop: () => {
                    x = !0,
                    "idle" !== j && (j = "idle",
                    m && m(),
                    U())
                }
                ,
                cancel: () => {
                    null !== R && z(R),
                    U()
                }
                ,
                complete: () => {
                    j = "finished"
                }
                ,
                sample: t => (M = 0,
                z(t))
            };
            return X
        }
    },
    22: function(t, e, r) {
        r.d(e, {
            _: function() {
                return n
            }
        });
        let n = (0,
        r(2820).createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
        })
    },
    4623: function(t, e, r) {
        r.d(e, {
            Bn: function() {
                return s
            },
            X7: function() {
                return a
            },
            Z7: function() {
                return o
            }
        });
        var n = r(1836)
          , i = r(2809);
        let o = t => 1 - Math.sin(Math.acos(t))
          , s = (0,
        i.M)(o)
          , a = (0,
        n.o)(o)
    },
    1836: function(t, e, r) {
        r.d(e, {
            o: function() {
                return n
            }
        });
        let n = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    2809: function(t, e, r) {
        r.d(e, {
            M: function() {
                return n
            }
        });
        let n = t => e => 1 - t(1 - e)
    },
    7525: function(t, e, r) {
        r.d(e, {
            Z: function() {
                return s
            }
        });
        var n = r(239);
        class i {
            add(t) {
                if (!this.scheduled.has(t))
                    return this.scheduled.add(t),
                    this.order.push(t),
                    !0
            }
            remove(t) {
                let e = this.order.indexOf(t);
                -1 !== e && (this.order.splice(e, 1),
                this.scheduled.delete(t))
            }
            clear() {
                this.order.length = 0,
                this.scheduled.clear()
            }
            constructor() {
                this.order = [],
                this.scheduled = new Set
            }
        }
        let o = ["prepare", "read", "update", "preRender", "render", "postRender"];
        function s(t, e) {
            let r = !1
              , s = !0
              , a = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , l = o.reduce( (t, e) => (t[e] = function(t) {
                let e = new i
                  , r = new i
                  , n = 0
                  , o = !1
                  , s = !1
                  , a = new WeakSet
                  , l = {
                    schedule: function(t) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                          , s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                          , l = s && o
                          , u = l ? e : r;
                        return i && a.add(t),
                        u.add(t) && l && o && (n = e.order.length),
                        t
                    },
                    cancel: t => {
                        r.remove(t),
                        a.delete(t)
                    }
                    ,
                    process: i => {
                        if (o) {
                            s = !0;
                            return
                        }
                        if (o = !0,
                        [e,r] = [r, e],
                        r.clear(),
                        n = e.order.length)
                            for (let r = 0; r < n; r++) {
                                let n = e.order[r];
                                a.has(n) && (l.schedule(n),
                                t()),
                                n(i)
                            }
                        o = !1,
                        s && (s = !1,
                        l.process(i))
                    }
                };
                return l
            }( () => r = !0),
            t), {})
              , u = t => {
                l[t].process(a)
            }
              , c = () => {
                let i = n.c.useManualTiming ? a.timestamp : performance.now();
                r = !1,
                a.delta = s ? 1e3 / 60 : Math.max(Math.min(i - a.timestamp, 40), 1),
                a.timestamp = i,
                a.isProcessing = !0,
                o.forEach(u),
                a.isProcessing = !1,
                r && e && (s = !1,
                t(c))
            }
              , d = () => {
                r = !0,
                s = !0,
                a.isProcessing || t(c)
            }
            ;
            return {
                schedule: o.reduce( (t, e) => {
                    let n = l[e];
                    return t[e] = function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                          , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return r || d(),
                        n.schedule(t, e, i)
                    }
                    ,
                    t
                }
                , {}),
                cancel: t => o.forEach(e => l[e].cancel(t)),
                state: a,
                steps: l
            }
        }
    },
    482: function(t, e, r) {
        r.d(e, {
            Pn: function() {
                return o
            },
            S6: function() {
                return a
            },
            Wi: function() {
                return i
            },
            frameData: function() {
                return s
            }
        });
        var n = r(7767);
        let {schedule: i, cancel: o, state: s, steps: a} = (0,
        r(7525).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
    },
    4907: function(t, e, r) {
        let n;
        r.d(e, {
            X: function() {
                return a
            }
        });
        var i = r(239)
          , o = r(482);
        function s() {
            n = void 0
        }
        let a = {
            now: () => (void 0 === n && a.set(o.frameData.isProcessing || i.c.useManualTiming ? o.frameData.timestamp : performance.now()),
            n),
            set: t => {
                n = t,
                queueMicrotask(s)
            }
        }
    },
    3947: function(t, e, r) {
        let n;
        r.d(e, {
            E: function() {
                return n_
            }
        });
        var i, o, s = r(2820), a = r(22);
        let l = (0,
        s.createContext)({})
          , u = (0,
        s.createContext)(null);
        var c = r(679);
        let d = (0,
        s.createContext)({
            strict: !1
        })
          , h = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
          , f = "data-" + h("framerAppearId")
          , {schedule: p, cancel: m} = (0,
        r(7525).Z)(queueMicrotask, !1);
        function g(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function v(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        function y(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
        let b = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , x = ["initial", ...b];
        function w(t) {
            return y(t.animate) || x.some(e => v(t[e]))
        }
        function P(t) {
            return !!(w(t) || t.variants)
        }
        function S(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        let A = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , E = {};
        for (let t in A)
            E[t] = {
                isEnabled: e => A[t].some(t => !!e[t])
            };
        var C = r(91);
        let j = (0,
        s.createContext)({})
          , T = (0,
        s.createContext)({})
          , M = Symbol.for("motionComponentSymbol")
          , R = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function k(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (R.indexOf(t) > -1 || /[A-Z]/.test(t))
                return !0;
            return !1
        }
        let V = {}
          , O = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , D = new Set(O);
        function L(t, e) {
            let {layout: r, layoutId: n} = e;
            return D.has(t) || t.startsWith("origin") || (r || void 0 !== n) && (!!V[t] || "opacity" === t)
        }
        var _ = r(4102);
        let F = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , I = O.length;
        var B = r(9825);
        let N = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
        var z = r(1051)
          , W = r(5436);
        let U = {
            ...z.Rx,
            transform: Math.round
        }
          , H = {
            borderWidth: W.px,
            borderTopWidth: W.px,
            borderRightWidth: W.px,
            borderBottomWidth: W.px,
            borderLeftWidth: W.px,
            borderRadius: W.px,
            radius: W.px,
            borderTopLeftRadius: W.px,
            borderTopRightRadius: W.px,
            borderBottomRightRadius: W.px,
            borderBottomLeftRadius: W.px,
            width: W.px,
            maxWidth: W.px,
            height: W.px,
            maxHeight: W.px,
            size: W.px,
            top: W.px,
            right: W.px,
            bottom: W.px,
            left: W.px,
            padding: W.px,
            paddingTop: W.px,
            paddingRight: W.px,
            paddingBottom: W.px,
            paddingLeft: W.px,
            margin: W.px,
            marginTop: W.px,
            marginRight: W.px,
            marginBottom: W.px,
            marginLeft: W.px,
            rotate: W.RW,
            rotateX: W.RW,
            rotateY: W.RW,
            rotateZ: W.RW,
            scale: z.bA,
            scaleX: z.bA,
            scaleY: z.bA,
            scaleZ: z.bA,
            skew: W.RW,
            skewX: W.RW,
            skewY: W.RW,
            distance: W.px,
            translateX: W.px,
            translateY: W.px,
            translateZ: W.px,
            x: W.px,
            y: W.px,
            z: W.px,
            perspective: W.px,
            transformPerspective: W.px,
            opacity: z.Fq,
            originX: W.$C,
            originY: W.$C,
            originZ: W.px,
            zIndex: U,
            fillOpacity: z.Fq,
            strokeOpacity: z.Fq,
            numOctaves: U
        };
        function $(t, e, r, n) {
            let {style: i, vars: o, transform: s, transformOrigin: a} = t
              , l = !1
              , u = !1
              , c = !0;
            for (let t in e) {
                let r = e[t];
                if ((0,
                B.f)(t)) {
                    o[t] = r;
                    continue
                }
                let n = H[t]
                  , d = N(r, n);
                if (D.has(t)) {
                    if (l = !0,
                    s[t] = d,
                    !c)
                        continue;
                    r !== (n.default || 0) && (c = !1)
                } else
                    t.startsWith("origin") ? (u = !0,
                    a[t] = d) : i[t] = d
            }
            if (!e.transform && (l || n ? i.transform = function(t, e, r, n) {
                let {enableHardwareAcceleration: i=!0, allowTransformNone: o=!0} = e
                  , s = "";
                for (let e = 0; e < I; e++) {
                    let r = O[e];
                    if (void 0 !== t[r]) {
                        let e = F[r] || r;
                        s += "".concat(e, "(").concat(t[r], ") ")
                    }
                }
                return i && !t.z && (s += "translateZ(0)"),
                s = s.trim(),
                n ? s = n(t, r ? "" : s) : o && r && (s = "none"),
                s
            }(t.transform, r, c, n) : i.transform && (i.transform = "none")),
            u) {
                let {originX: t="50%", originY: e="50%", originZ: r=0} = a;
                i.transformOrigin = "".concat(t, " ").concat(e, " ").concat(r)
            }
        }
        let X = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function Z(t, e, r) {
            for (let n in e)
                (0,
                _.i)(e[n]) || L(n, r) || (t[n] = e[n])
        }
        let G = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function Y(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || G.has(t)
        }
        let q = t => !Y(t);
        try {
            (i = require("@emotion/is-prop-valid").default) && (q = t => t.startsWith("on") ? !Y(t) : i(t))
        } catch (t) {}
        function K(t, e, r) {
            return "string" == typeof t ? t : W.px.transform(e + r * t)
        }
        let Q = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , J = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function tt(t, e, r, n, i) {
            let {attrX: o, attrY: s, attrScale: a, originX: l, originY: u, pathLength: c, pathSpacing: d=1, pathOffset: h=0, ...f} = e;
            if ($(t, f, r, i),
            n) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: p, style: m, dimensions: g} = t;
            p.transform && (g && (m.transform = p.transform),
            delete p.transform),
            g && (void 0 !== l || void 0 !== u || m.transform) && (m.transformOrigin = function(t, e, r) {
                let n = K(e, t.x, t.width)
                  , i = K(r, t.y, t.height);
                return "".concat(n, " ").concat(i)
            }(g, void 0 !== l ? l : .5, void 0 !== u ? u : .5)),
            void 0 !== o && (p.x = o),
            void 0 !== s && (p.y = s),
            void 0 !== a && (p.scale = a),
            void 0 !== c && function(t, e) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                  , i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                t.pathLength = 1;
                let o = i ? Q : J;
                t[o.offset] = W.px.transform(-n);
                let s = W.px.transform(e)
                  , a = W.px.transform(r);
                t[o.array] = "".concat(s, " ").concat(a)
            }(p, c, d, h, !1)
        }
        let te = () => ({
            ...X(),
            attrs: {}
        })
          , tr = t => "string" == typeof t && "svg" === t.toLowerCase();
        function tn(t, e, r, n) {
            let {style: i, vars: o} = e;
            for (let e in Object.assign(t.style, i, n && n.getProjectionStyles(r)),
            o)
                t.style.setProperty(e, o[e])
        }
        let ti = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function to(t, e, r, n) {
            for (let r in tn(t, e, void 0, n),
            e.attrs)
                t.setAttribute(ti.has(r) ? r : h(r), e.attrs[r])
        }
        function ts(t, e) {
            let {style: r} = t
              , n = {};
            for (let i in r)
                ((0,
                _.i)(r[i]) || e.style && (0,
                _.i)(e.style[i]) || L(i, t)) && (n[i] = r[i]);
            return n
        }
        function ta(t, e) {
            let r = ts(t, e);
            for (let n in t)
                ((0,
                _.i)(t[n]) || (0,
                _.i)(e[n])) && (r[-1 !== O.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
            return r
        }
        function tl(t, e, r) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            return "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)),
            "string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)),
            e
        }
        var tu = r(1597);
        let tc = t => Array.isArray(t)
          , td = t => !!(t && "object" == typeof t && t.mix && t.toValue)
          , th = t => tc(t) ? t[t.length - 1] || 0 : t;
        function tf(t) {
            let e = (0,
            _.i)(t) ? t.get() : t;
            return td(e) ? e.toValue() : e
        }
        let tp = t => (e, r) => {
            let n = (0,
            s.useContext)(l)
              , i = (0,
            s.useContext)(u)
              , o = () => (function(t, e, r, n) {
                let {scrapeMotionValuesFromProps: i, createRenderState: o, onMount: s} = t
                  , a = {
                    latestValues: function(t, e, r, n) {
                        let i = {}
                          , o = n(t, {});
                        for (let t in o)
                            i[t] = tf(o[t]);
                        let {initial: s, animate: a} = t
                          , l = w(t)
                          , u = P(t);
                        e && u && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial),
                        void 0 === a && (a = e.animate));
                        let c = !!r && !1 === r.initial
                          , d = (c = c || !1 === s) ? a : s;
                        return d && "boolean" != typeof d && !y(d) && (Array.isArray(d) ? d : [d]).forEach(e => {
                            let r = tl(t, e);
                            if (!r)
                                return;
                            let {transitionEnd: n, transition: o, ...s} = r;
                            for (let t in s) {
                                let e = s[t];
                                if (Array.isArray(e)) {
                                    let t = c ? e.length - 1 : 0;
                                    e = e[t]
                                }
                                null !== e && (i[t] = e)
                            }
                            for (let t in n)
                                i[t] = n[t]
                        }
                        ),
                        i
                    }(e, r, n, i),
                    renderState: o()
                };
                return s && (a.mount = t => s(e, t, a)),
                a
            }
            )(t, e, n, i);
            return r ? o() : (0,
            tu.h)(o)
        }
        ;
        var tm = r(482);
        let tg = {
            useVisualState: tp({
                scrapeMotionValuesFromProps: ta,
                createRenderState: te,
                onMount: (t, e, r) => {
                    let {renderState: n, latestValues: i} = r;
                    tm.Wi.read( () => {
                        try {
                            n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                        } catch (t) {
                            n.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    ),
                    tm.Wi.render( () => {
                        tt(n, i, {
                            enableHardwareAcceleration: !1
                        }, tr(e.tagName), t.transformTemplate),
                        to(e, n)
                    }
                    )
                }
            })
        }
          , tv = {
            useVisualState: tp({
                scrapeMotionValuesFromProps: ts,
                createRenderState: X
            })
        };
        function ty(t, e, r) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                passive: !0
            };
            return t.addEventListener(e, r, n),
            () => t.removeEventListener(e, r)
        }
        let tb = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
        function tx(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "page";
            return {
                point: {
                    x: t[e + "X"],
                    y: t[e + "Y"]
                }
            }
        }
        let tw = t => e => tb(e) && t(e, tx(e));
        function tP(t, e, r, n) {
            return ty(t, e, tw(r), n)
        }
        var tS = r(5340);
        function tA(t) {
            let e = null;
            return () => null === e && (e = t,
            () => {
                e = null
            }
            )
        }
        let tE = tA("dragHorizontal")
          , tC = tA("dragVertical");
        function tj(t) {
            let e = !1;
            if ("y" === t)
                e = tC();
            else if ("x" === t)
                e = tE();
            else {
                let t = tE()
                  , r = tC();
                t && r ? e = () => {
                    t(),
                    r()
                }
                : (t && t(),
                r && r())
            }
            return e
        }
        function tT() {
            let t = tj(!0);
            return !t || (t(),
            !1)
        }
        class tM {
            update() {}
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
        }
        function tR(t, e) {
            let r = "onHover" + (e ? "Start" : "End");
            return tP(t.current, "pointer" + (e ? "enter" : "leave"), (n, i) => {
                if ("touch" === n.pointerType || tT())
                    return;
                let o = t.getProps();
                t.animationState && o.whileHover && t.animationState.setActive("whileHover", e),
                o[r] && tm.Wi.update( () => o[r](n, i))
            }
            , {
                passive: !t.getProps()[r]
            })
        }
        class tk extends tM {
            mount() {
                this.unmount = (0,
                tS.z)(tR(this.node, !0), tR(this.node, !1))
            }
            unmount() {}
        }
        class tV extends tM {
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = (0,
                tS.z)(ty(this.node.current, "focus", () => this.onFocus()), ty(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
        }
        let tO = (t, e) => !!e && (t === e || tO(t, e.parentElement));
        var tD = r(7767);
        function tL(t, e) {
            if (!e)
                return;
            let r = new PointerEvent("pointer" + t);
            e(r, tx(r))
        }
        class t_ extends tM {
            startPress(t, e) {
                this.isPressing = !0;
                let {onTapStart: r, whileTap: n} = this.node.getProps();
                n && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                r && tm.Wi.update( () => r(t, e))
            }
            checkPressEnd() {
                return this.removeEndListeners(),
                this.isPressing = !1,
                this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
                !tT()
            }
            cancelPress(t, e) {
                if (!this.checkPressEnd())
                    return;
                let {onTapCancel: r} = this.node.getProps();
                r && tm.Wi.update( () => r(t, e))
            }
            mount() {
                let t = this.node.getProps()
                  , e = tP(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(t.onTapStart || t.onPointerStart)
                })
                  , r = ty(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = (0,
                tS.z)(e, r)
            }
            unmount() {
                this.removeStartListeners(),
                this.removeEndListeners(),
                this.removeAccessibleListeners()
            }
            constructor() {
                super(...arguments),
                this.removeStartListeners = tD.Z,
                this.removeEndListeners = tD.Z,
                this.removeAccessibleListeners = tD.Z,
                this.startPointerPress = (t, e) => {
                    if (this.isPressing)
                        return;
                    this.removeEndListeners();
                    let r = this.node.getProps()
                      , n = tP(window, "pointerup", (t, e) => {
                        if (!this.checkPressEnd())
                            return;
                        let {onTap: r, onTapCancel: n, globalTapTarget: i} = this.node.getProps();
                        tm.Wi.update( () => {
                            i || tO(this.node.current, t.target) ? r && r(t, e) : n && n(t, e)
                        }
                        )
                    }
                    , {
                        passive: !(r.onTap || r.onPointerUp)
                    })
                      , i = tP(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                        passive: !(r.onTapCancel || r.onPointerCancel)
                    });
                    this.removeEndListeners = (0,
                    tS.z)(n, i),
                    this.startPress(t, e)
                }
                ,
                this.startAccessiblePress = () => {
                    let t = ty(this.node.current, "keydown", t => {
                        "Enter" !== t.key || this.isPressing || (this.removeEndListeners(),
                        this.removeEndListeners = ty(this.node.current, "keyup", t => {
                            "Enter" === t.key && this.checkPressEnd() && tL("up", (t, e) => {
                                let {onTap: r} = this.node.getProps();
                                r && tm.Wi.update( () => r(t, e))
                            }
                            )
                        }
                        ),
                        tL("down", (t, e) => {
                            this.startPress(t, e)
                        }
                        ))
                    }
                    )
                      , e = ty(this.node.current, "blur", () => {
                        this.isPressing && tL("cancel", (t, e) => this.cancelPress(t, e))
                    }
                    );
                    this.removeAccessibleListeners = (0,
                    tS.z)(t, e)
                }
            }
        }
        let tF = new WeakMap
          , tI = new WeakMap
          , tB = t => {
            let e = tF.get(t.target);
            e && e(t)
        }
          , tN = t => {
            t.forEach(tB)
        }
          , tz = {
            some: 0,
            all: 1
        };
        class tW extends tM {
            startObserver() {
                this.unmount();
                let {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: r, amount: n="some", once: i} = t
                  , o = {
                    root: e ? e.current : void 0,
                    rootMargin: r,
                    threshold: "number" == typeof n ? n : tz[n]
                };
                return function(t, e, r) {
                    let n = function(t) {
                        let {root: e, ...r} = t
                          , n = e || document;
                        tI.has(n) || tI.set(n, {});
                        let i = tI.get(n)
                          , o = JSON.stringify(r);
                        return i[o] || (i[o] = new IntersectionObserver(tN,{
                            root: e,
                            ...r
                        })),
                        i[o]
                    }(e);
                    return tF.set(t, r),
                    n.observe(t),
                    () => {
                        tF.delete(t),
                        n.unobserve(t)
                    }
                }(this.node.current, o, t => {
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e,
                    i && !e && this.hasEnteredView))
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: r, onViewportLeave: n} = this.node.getProps()
                      , o = e ? r : n;
                    o && o(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function(t) {
                    let {viewport: e={}} = t
                      , {viewport: r={}} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return t => e[t] !== r[t]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
        }
        function tU(t, e) {
            if (!Array.isArray(e))
                return !1;
            let r = e.length;
            if (r !== t.length)
                return !1;
            for (let n = 0; n < r; n++)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        function tH(t, e, r) {
            let n = t.getProps();
            return tl(n, e, void 0 !== r ? r : n.custom, function(t) {
                let e = {};
                return t.values.forEach( (t, r) => e[r] = t.get()),
                e
            }(t), function(t) {
                let e = {};
                return t.values.forEach( (t, r) => e[r] = t.getVelocity()),
                e
            }(t))
        }
        var t$ = r(1299)
          , tX = r(9590);
        let tZ = {
            current: !1
        }
          , tG = t => Array.isArray(t) && "number" == typeof t[0]
          , tY = t => {
            let[e,r,n,i] = t;
            return "cubic-bezier(".concat(e, ", ").concat(r, ", ").concat(n, ", ").concat(i, ")")
        }
          , tq = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: tY([0, .65, .55, 1]),
            circOut: tY([.55, 0, 1, .45]),
            backIn: tY([.31, .01, .66, -.59]),
            backOut: tY([.33, 1.53, .69, .99])
        };
        var tK = r(9903);
        let tQ = (o = () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        () => (void 0 === n && (n = o()),
        n))
          , tJ = new Set(["opacity", "clipPath", "filter", "transform"])
          , t0 = (t, e) => "spring" === e.type || "backgroundColor" === t || !function t(e) {
            return !!(!e || "string" == typeof e && tq[e] || tG(e) || Array.isArray(e) && e.every(t))
        }(e.ease)
          , t1 = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , t2 = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , t3 = {
            type: "keyframes",
            duration: .8
        }
          , t5 = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , t4 = (t, e) => {
            let {keyframes: r} = e;
            return r.length > 2 ? t3 : D.has(t) ? t.startsWith("scale") ? t2(r[1]) : t1 : t5
        }
        ;
        var t8 = r(2105);
        let t9 = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (t8.P.test(e) || "0" === e) && !e.startsWith("url("));
        var t7 = r(4112);
        let t6 = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function et(t) {
            let[e,r] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[n] = r.match(t7.KP) || [];
            if (!n)
                return t;
            let i = r.replace(n, "")
              , o = t6.has(e) ? 1 : 0;
            return n !== r && (o *= 100),
            e + "(" + o + i + ")"
        }
        let ee = /([a-z-]*)\(.*?\)/g
          , er = {
            ...t8.P,
            getAnimatableNone: t => {
                let e = t.match(ee);
                return e ? e.map(et).join(" ") : t
            }
        };
        var en = r(4794);
        let ei = {
            ...H,
            color: en.$,
            backgroundColor: en.$,
            outlineColor: en.$,
            fill: en.$,
            stroke: en.$,
            borderColor: en.$,
            borderTopColor: en.$,
            borderRightColor: en.$,
            borderBottomColor: en.$,
            borderLeftColor: en.$,
            filter: er,
            WebkitFilter: er
        }
          , eo = t => ei[t];
        function es(t, e) {
            let r = eo(t);
            return r !== er && (r = t8.P),
            r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
        }
        let ea = t => /^0[^.\s]+$/.test(t);
        function el(t, e) {
            return t[e] || t.default || t
        }
        var eu = r(239);
        let ec = function(t, e, r) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return i => {
                let o = el(n, t) || {}
                  , s = o.delay || n.delay || 0
                  , {elapsed: a=0} = n;
                a -= (0,
                tX.w)(s);
                let l = function(t, e, r, n) {
                    let i, o;
                    let s = t9(e, r);
                    i = Array.isArray(r) ? [...r] : [null, r];
                    let a = void 0 !== n.from ? n.from : t.get()
                      , l = [];
                    for (let t = 0; t < i.length; t++) {
                        var u;
                        null === i[t] && (i[t] = 0 === t ? a : i[t - 1]),
                        ("number" == typeof (u = i[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || ea(u) : void 0) && l.push(t),
                        "string" == typeof i[t] && "none" !== i[t] && "0" !== i[t] && (o = i[t])
                    }
                    if (s && l.length && o)
                        for (let t = 0; t < l.length; t++)
                            i[l[t]] = es(e, o);
                    return i
                }(e, t, r, o)
                  , u = l[0]
                  , c = l[l.length - 1]
                  , d = t9(t, u)
                  , h = t9(t, c);
                (0,
                t$.K)(d === h, "You are trying to animate ".concat(t, ' from "').concat(u, '" to "').concat(c, '". ').concat(u, " is not an animatable value - to enable this animation set ").concat(u, " to a value animatable to ").concat(c, " via the `style` property."));
                let f = {
                    keyframes: l,
                    velocity: e.getVelocity(),
                    ease: "easeOut",
                    ...o,
                    delay: -a,
                    onUpdate: t => {
                        e.set(t),
                        o.onUpdate && o.onUpdate(t)
                    }
                    ,
                    onComplete: () => {
                        i(),
                        o.onComplete && o.onComplete()
                    }
                };
                if (!function(t) {
                    let {when: e, delay: r, delayChildren: n, staggerChildren: i, staggerDirection: o, repeat: s, repeatType: a, repeatDelay: l, from: u, elapsed: c, ...d} = t;
                    return !!Object.keys(d).length
                }(o) && (f = {
                    ...f,
                    ...t4(t, f)
                }),
                f.duration && (f.duration = (0,
                tX.w)(f.duration)),
                f.repeatDelay && (f.repeatDelay = (0,
                tX.w)(f.repeatDelay)),
                !d || !h || tZ.current || !1 === o.type || eu.c.skipAnimations)
                    return function(t) {
                        let {keyframes: e, delay: r, onUpdate: n, onComplete: i} = t
                          , o = () => (n && n(e[e.length - 1]),
                        i && i(),
                        {
                            time: 0,
                            speed: 1,
                            duration: 0,
                            play: tD.Z,
                            pause: tD.Z,
                            stop: tD.Z,
                            then: t => (t(),
                            Promise.resolve()),
                            cancel: tD.Z,
                            complete: tD.Z
                        });
                        return r ? (0,
                        tK.y)({
                            keyframes: [0, 1],
                            duration: 0,
                            delay: r,
                            onComplete: o
                        }) : o()
                    }(tZ.current ? {
                        ...f,
                        delay: 0
                    } : f);
                if (!n.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                    let r = function(t, e, r) {
                        let n, i, {onUpdate: o, onComplete: s, ...a} = r;
                        if (!(tQ() && tJ.has(e) && !a.repeatDelay && "mirror" !== a.repeatType && 0 !== a.damping && "inertia" !== a.type))
                            return !1;
                        let l = !1
                          , u = !1
                          , c = () => {
                            i = new Promise(t => {
                                n = t
                            }
                            )
                        }
                        ;
                        c();
                        let {keyframes: d, duration: h=300, ease: f, times: p} = a;
                        if (t0(e, a)) {
                            let t = (0,
                            tK.y)({
                                ...a,
                                repeat: 0,
                                delay: 0
                            })
                              , e = {
                                done: !1,
                                value: d[0]
                            }
                              , r = []
                              , n = 0;
                            for (; !e.done && n < 2e4; )
                                e = t.sample(n),
                                r.push(e.value),
                                n += 10;
                            p = void 0,
                            d = r,
                            h = n - 10,
                            f = "linear"
                        }
                        let m = function(t, e, r) {
                            let {delay: n=0, duration: i, repeat: o=0, repeatType: s="loop", ease: a, times: l} = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                              , u = {
                                [e]: r
                            };
                            l && (u.offset = l);
                            let c = function t(e) {
                                if (e)
                                    return tG(e) ? tY(e) : Array.isArray(e) ? e.map(t) : tq[e]
                            }(a);
                            return Array.isArray(c) && (u.easing = c),
                            t.animate(u, {
                                delay: n,
                                duration: i,
                                easing: Array.isArray(c) ? "linear" : c,
                                fill: "both",
                                iterations: o + 1,
                                direction: "reverse" === s ? "alternate" : "normal"
                            })
                        }(t.owner.current, e, d, {
                            ...a,
                            duration: h,
                            ease: f,
                            times: p
                        })
                          , g = () => {
                            u = !1,
                            m.cancel()
                        }
                          , v = () => {
                            u = !0,
                            tm.Wi.update(g),
                            n(),
                            c()
                        }
                        ;
                        return m.onfinish = () => {
                            u || (t.set(function(t, e) {
                                let {repeat: r, repeatType: n="loop"} = e
                                  , i = r && "loop" !== n && r % 2 == 1 ? 0 : t.length - 1;
                                return t[i]
                            }(d, a)),
                            s && s(),
                            v())
                        }
                        ,
                        {
                            then: (t, e) => i.then(t, e),
                            attachTimeline: t => (m.timeline = t,
                            m.onfinish = null,
                            tD.Z),
                            get time() {
                                return (0,
                                tX.X)(m.currentTime || 0)
                            },
                            set time(newTime) {
                                m.currentTime = (0,
                                tX.w)(newTime)
                            },
                            get speed() {
                                return m.playbackRate
                            },
                            set speed(newSpeed) {
                                m.playbackRate = newSpeed
                            },
                            get duration() {
                                return (0,
                                tX.X)(h)
                            },
                            play: () => {
                                l || (m.play(),
                                (0,
                                tm.Pn)(g))
                            }
                            ,
                            pause: () => m.pause(),
                            stop: () => {
                                if (l = !0,
                                "idle" === m.playState)
                                    return;
                                let {currentTime: e} = m;
                                if (e) {
                                    let r = (0,
                                    tK.y)({
                                        ...a,
                                        autoplay: !1
                                    });
                                    t.setWithVelocity(r.sample(e - 10).value, r.sample(e).value, 10)
                                }
                                v()
                            }
                            ,
                            complete: () => {
                                u || m.finish()
                            }
                            ,
                            cancel: v
                        }
                    }(e, t, f);
                    if (r)
                        return r
                }
                return (0,
                tK.y)(f)
            }
        };
        function ed(t) {
            return !!((0,
            _.i)(t) && t.add)
        }
        let eh = t => /^\-?\d*\.?\d+$/.test(t);
        var ef = r(1006);
        let ep = t => e => e.test(t)
          , em = [z.Rx, W.px, W.aQ, W.RW, W.vw, W.vh, {
            test: t => "auto" === t,
            parse: t => t
        }]
          , eg = t => em.find(ep(t))
          , ev = [...em, en.$, t8.P]
          , ey = t => ev.find(ep(t));
        function eb(t, e) {
            let {delay: r=0, transitionOverride: n, type: i} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , {transition: o=t.getDefaultTransition(), transitionEnd: s, ...a} = t.makeTargetAnimatable(e)
              , l = t.getValue("willChange");
            n && (o = n);
            let u = []
              , c = i && t.animationState && t.animationState.getState()[i];
            for (let e in a) {
                let n = t.getValue(e)
                  , i = a[e];
                if (!n || void 0 === i || c && function(t, e) {
                    let {protectedKeys: r, needsAnimating: n} = t
                      , i = r.hasOwnProperty(e) && !0 !== n[e];
                    return n[e] = !1,
                    i
                }(c, e))
                    continue;
                let s = {
                    delay: r,
                    elapsed: 0,
                    ...el(o || {}, e)
                };
                if (window.HandoffAppearAnimations) {
                    let r = t.getProps()[f];
                    if (r) {
                        let t = window.HandoffAppearAnimations(r, e, n, tm.Wi);
                        null !== t && (s.elapsed = t,
                        s.isHandoff = !0)
                    }
                }
                let d = !s.isHandoff && !function(t, e) {
                    let r = t.get();
                    if (!Array.isArray(e))
                        return r !== e;
                    for (let t = 0; t < e.length; t++)
                        if (e[t] !== r)
                            return !0
                }(n, i);
                if ("spring" === s.type && (n.getVelocity() || s.velocity) && (d = !1),
                n.animation && (d = !1),
                d)
                    continue;
                n.start(ec(e, n, i, t.shouldReduceMotion && D.has(e) ? {
                    type: !1
                } : s));
                let h = n.animation;
                ed(l) && (l.add(e),
                h.then( () => l.remove(e))),
                u.push(h)
            }
            return s && Promise.all(u).then( () => {
                s && function(t, e) {
                    let r = tH(t, e)
                      , {transitionEnd: n={}, transition: i={}, ...o} = r ? t.makeTargetAnimatable(r, !1) : {};
                    for (let e in o = {
                        ...o,
                        ...n
                    }) {
                        let r = th(o[e]);
                        t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, (0,
                        ef.BX)(r))
                    }
                }(t, s)
            }
            ),
            u
        }
        function ex(t, e) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = tH(t, e, r.custom)
              , {transition: i=t.getDefaultTransition() || {}} = n || {};
            r.transitionOverride && (i = r.transitionOverride);
            let o = n ? () => Promise.all(eb(t, n, r)) : () => Promise.resolve()
              , s = t.variantChildren && t.variantChildren.size ? function() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , {delayChildren: o=0, staggerChildren: s, staggerDirection: a} = i;
                return function(t, e) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1
                      , o = arguments.length > 5 ? arguments[5] : void 0
                      , s = []
                      , a = (t.variantChildren.size - 1) * n
                      , l = 1 === i ? function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return t * n
                    }
                    : function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return a - t * n
                    }
                    ;
                    return Array.from(t.variantChildren).sort(ew).forEach( (t, n) => {
                        t.notify("AnimationStart", e),
                        s.push(ex(t, e, {
                            ...o,
                            delay: r + l(n)
                        }).then( () => t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(s)
                }(t, e, o + n, s, a, r)
            }
            : () => Promise.resolve()
              , {when: a} = i;
            if (!a)
                return Promise.all([o(), s(r.delay)]);
            {
                let[t,e] = "beforeChildren" === a ? [o, s] : [s, o];
                return t().then( () => e())
            }
        }
        function ew(t, e) {
            return t.sortNodePosition(e)
        }
        let eP = [...b].reverse()
          , eS = b.length;
        function eA() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        class eE extends tM {
            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                this.unmount(),
                y(t) && (this.unmount = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {}
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = function(t) {
                    let e = e => Promise.all(e.map(e => {
                        let {animation: r, options: n} = e;
                        return function(t, e) {
                            let r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            if (t.notify("AnimationStart", e),
                            Array.isArray(e))
                                r = Promise.all(e.map(e => ex(t, e, n)));
                            else if ("string" == typeof e)
                                r = ex(t, e, n);
                            else {
                                let i = "function" == typeof e ? tH(t, e, n.custom) : e;
                                r = Promise.all(eb(t, i, n))
                            }
                            return r.then( () => t.notify("AnimationComplete", e))
                        }(t, r, n)
                    }
                    ))
                      , r = {
                        animate: eA(!0),
                        whileInView: eA(),
                        whileHover: eA(),
                        whileTap: eA(),
                        whileDrag: eA(),
                        whileFocus: eA(),
                        exit: eA()
                    }
                      , n = !0
                      , i = (e, r) => {
                        let n = tH(t, r);
                        if (n) {
                            let {transition: t, transitionEnd: r, ...i} = n;
                            e = {
                                ...e,
                                ...i,
                                ...r
                            }
                        }
                        return e
                    }
                    ;
                    function o(o, s) {
                        let a = t.getProps()
                          , l = t.getVariantContext(!0) || {}
                          , u = []
                          , c = new Set
                          , d = {}
                          , h = 1 / 0;
                        for (let e = 0; e < eS; e++) {
                            var f;
                            let p = eP[e]
                              , m = r[p]
                              , g = void 0 !== a[p] ? a[p] : l[p]
                              , b = v(g)
                              , x = p === s ? m.isActive : null;
                            !1 === x && (h = e);
                            let w = g === l[p] && g !== a[p] && b;
                            if (w && n && t.manuallyAnimateOnMount && (w = !1),
                            m.protectedKeys = {
                                ...d
                            },
                            !m.isActive && null === x || !g && !m.prevProp || y(g) || "boolean" == typeof g)
                                continue;
                            let P = (f = m.prevProp,
                            ("string" == typeof g ? g !== f : !!Array.isArray(g) && !tU(g, f)) || p === s && m.isActive && !w && b || e > h && b)
                              , S = !1
                              , A = Array.isArray(g) ? g : [g]
                              , E = A.reduce(i, {});
                            !1 === x && (E = {});
                            let {prevResolvedValues: C={}} = m
                              , j = {
                                ...C,
                                ...E
                            }
                              , T = t => {
                                P = !0,
                                c.has(t) && (S = !0,
                                c.delete(t)),
                                m.needsAnimating[t] = !0
                            }
                            ;
                            for (let t in j) {
                                let e = E[t]
                                  , r = C[t];
                                if (!d.hasOwnProperty(t))
                                    (tc(e) && tc(r) ? tU(e, r) : e === r) ? void 0 !== e && c.has(t) ? T(t) : m.protectedKeys[t] = !0 : void 0 !== e ? T(t) : c.add(t)
                            }
                            m.prevProp = g,
                            m.prevResolvedValues = E,
                            m.isActive && (d = {
                                ...d,
                                ...E
                            }),
                            n && t.blockInitialAnimation && (P = !1),
                            P && (!w || S) && u.push(...A.map(t => ({
                                animation: t,
                                options: {
                                    type: p,
                                    ...o
                                }
                            })))
                        }
                        if (c.size) {
                            let e = {};
                            c.forEach(r => {
                                let n = t.getBaseTarget(r);
                                void 0 !== n && (e[r] = n)
                            }
                            ),
                            u.push({
                                animation: e
                            })
                        }
                        let p = !!u.length;
                        return n && (!1 === a.initial || a.initial === a.animate) && !t.manuallyAnimateOnMount && (p = !1),
                        n = !1,
                        p ? e(u) : Promise.resolve()
                    }
                    return {
                        animateChanges: o,
                        setActive: function(e, n, i) {
                            var s;
                            if (r[e].isActive === n)
                                return Promise.resolve();
                            null === (s = t.variantChildren) || void 0 === s || s.forEach(t => {
                                var r;
                                return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                            }
                            ),
                            r[e].isActive = n;
                            let a = o(i, e);
                            for (let t in r)
                                r[t].protectedKeys = {};
                            return a
                        },
                        setAnimateFunction: function(r) {
                            e = r(t)
                        },
                        getState: () => r
                    }
                }(t))
            }
        }
        let eC = 0;
        class ej extends tM {
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: t, onExitComplete: e, custom: r} = this.node.presenceContext
                  , {isPresent: n} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === n)
                    return;
                let i = this.node.animationState.setActive("exit", !t, {
                    custom: null != r ? r : this.node.getProps().custom
                });
                e && !t && i.then( () => e(this.id))
            }
            mount() {
                let {register: t} = this.node.presenceContext || {};
                t && (this.unmount = t(this.id))
            }
            unmount() {}
            constructor() {
                super(...arguments),
                this.id = eC++
            }
        }
        let eT = (t, e) => Math.abs(t - e);
        class eM {
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                (0,
                tm.Pn)(this.updatePoint)
            }
            constructor(t, e, {transformPagePoint: r, contextWindow: n, dragSnapToOrigin: i=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.contextWindow = window,
                this.updatePoint = () => {
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let r = eV(this.lastMoveEventInfo, this.history)
                      , n = null !== this.startEvent
                      , i = (t = r.offset,
                    e = {
                        x: 0,
                        y: 0
                    },
                    Math.sqrt(eT(t.x, e.x) ** 2 + eT(t.y, e.y) ** 2) >= 3);
                    if (!n && !i)
                        return;
                    let {point: o} = r
                      , {timestamp: s} = tm.frameData;
                    this.history.push({
                        ...o,
                        timestamp: s
                    });
                    let {onStart: a, onMove: l} = this.handlers;
                    n || (a && a(this.lastMoveEvent, r),
                    this.startEvent = this.lastMoveEvent),
                    l && l(this.lastMoveEvent, r)
                }
                ,
                this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = eR(e, this.transformPagePoint),
                    tm.Wi.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t, e) => {
                    this.end();
                    let {onEnd: r, onSessionEnd: n, resumeAnimation: i} = this.handlers;
                    if (this.dragSnapToOrigin && i && i(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let o = eV("pointercancel" === t.type ? this.lastMoveEventInfo : eR(e, this.transformPagePoint), this.history);
                    this.startEvent && r && r(t, o),
                    n && n(t, o)
                }
                ,
                !tb(t))
                    return;
                this.dragSnapToOrigin = i,
                this.handlers = e,
                this.transformPagePoint = r,
                this.contextWindow = n || window;
                let o = eR(tx(t), this.transformPagePoint)
                  , {point: s} = o
                  , {timestamp: a} = tm.frameData;
                this.history = [{
                    ...s,
                    timestamp: a
                }];
                let {onSessionStart: l} = e;
                l && l(t, eV(o, this.history)),
                this.removeListeners = (0,
                tS.z)(tP(this.contextWindow, "pointermove", this.handlePointerMove), tP(this.contextWindow, "pointerup", this.handlePointerUp), tP(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
        }
        function eR(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function ek(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function eV(t, e) {
            let {point: r} = t;
            return {
                point: r,
                delta: ek(r, eO(e)),
                offset: ek(r, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let r = t.length - 1
                      , n = null
                      , i = eO(t);
                    for (; r >= 0 && (n = t[r],
                    !(i.timestamp - n.timestamp > (0,
                    tX.w)(.1))); )
                        r--;
                    if (!n)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = (0,
                    tX.X)(i.timestamp - n.timestamp);
                    if (0 === o)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = {
                        x: (i.x - n.x) / o,
                        y: (i.y - n.y) / o
                    };
                    return s.x === 1 / 0 && (s.x = 0),
                    s.y === 1 / 0 && (s.y = 0),
                    s
                }(e, 0)
            }
        }
        function eO(t) {
            return t[t.length - 1]
        }
        var eD = r(6773)
          , eL = r(6683);
        function e_(t) {
            return t.max - t.min
        }
        function eF(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .01;
            return Math.abs(t - e) <= r
        }
        function eI(t, e, r) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
            t.origin = n,
            t.originPoint = (0,
            eL.t)(e.min, e.max, t.origin),
            t.scale = e_(r) / e_(e),
            (eF(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = (0,
            eL.t)(r.min, r.max, t.origin) - t.originPoint,
            (eF(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function eB(t, e, r, n) {
            eI(t.x, e.x, r.x, n ? n.originX : void 0),
            eI(t.y, e.y, r.y, n ? n.originY : void 0)
        }
        function eN(t, e, r) {
            t.min = r.min + e.min,
            t.max = t.min + e_(e)
        }
        function ez(t, e, r) {
            t.min = e.min - r.min,
            t.max = t.min + e_(e)
        }
        function eW(t, e, r) {
            ez(t.x, e.x, r.x),
            ez(t.y, e.y, r.y)
        }
        var eU = r(5760);
        function eH(t, e, r) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0
            }
        }
        function e$(t, e) {
            let r = e.min - t.min
              , n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([r,n] = [n, r]),
            {
                min: r,
                max: n
            }
        }
        function eX(t, e, r) {
            return {
                min: eZ(t, e),
                max: eZ(t, r)
            }
        }
        function eZ(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let eG = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , eY = () => ({
            x: eG(),
            y: eG()
        })
          , eq = () => ({
            min: 0,
            max: 0
        })
          , eK = () => ({
            x: eq(),
            y: eq()
        });
        function eQ(t) {
            return [t("x"), t("y")]
        }
        function eJ(t) {
            let {top: e, left: r, right: n, bottom: i} = t;
            return {
                x: {
                    min: r,
                    max: n
                },
                y: {
                    min: e,
                    max: i
                }
            }
        }
        function e0(t) {
            return void 0 === t || 1 === t
        }
        function e1(t) {
            let {scale: e, scaleX: r, scaleY: n} = t;
            return !e0(e) || !e0(r) || !e0(n)
        }
        function e2(t) {
            return e1(t) || e3(t) || t.z || t.rotate || t.rotateX || t.rotateY
        }
        function e3(t) {
            var e, r;
            return (e = t.x) && "0%" !== e || (r = t.y) && "0%" !== r
        }
        function e5(t, e, r, n, i) {
            return void 0 !== i && (t = n + i * (t - n)),
            n + r * (t - n) + e
        }
        function e4(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
              , n = arguments.length > 3 ? arguments[3] : void 0
              , i = arguments.length > 4 ? arguments[4] : void 0;
            t.min = e5(t.min, e, r, n, i),
            t.max = e5(t.max, e, r, n, i)
        }
        function e8(t, e) {
            let {x: r, y: n} = e;
            e4(t.x, r.translate, r.scale, r.originPoint),
            e4(t.y, n.translate, n.scale, n.originPoint)
        }
        function e9(t) {
            return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
        }
        function e7(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function e6(t, e, r) {
            let[n,i,o] = r
              , s = void 0 !== e[o] ? e[o] : .5
              , a = (0,
            eL.t)(t.min, t.max, s);
            e4(t, e[n], e[i], a, e.scale)
        }
        let rt = ["x", "scaleX", "originX"]
          , re = ["y", "scaleY", "originY"];
        function rr(t, e) {
            e6(t.x, e, rt),
            e6(t.y, e, re)
        }
        function rn(t, e) {
            return eJ(function(t, e) {
                if (!e)
                    return t;
                let r = e({
                    x: t.left,
                    y: t.top
                })
                  , n = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: r.y,
                    left: r.x,
                    bottom: n.y,
                    right: n.x
                }
            }(t.getBoundingClientRect(), e))
        }
        let ri = t => {
            let {current: e} = t;
            return e ? e.ownerDocument.defaultView : null
        }
          , ro = new WeakMap;
        class rs {
            start(t) {
                let {snapToCursor: e=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , {presenceContext: r} = this.visualElement;
                if (r && !1 === r.isPresent)
                    return;
                let {dragSnapToOrigin: n} = this.getProps();
                this.panSession = new eM(t,{
                    onSessionStart: t => {
                        let {dragSnapToOrigin: r} = this.getProps();
                        r ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor(tx(t, "page").point)
                    }
                    ,
                    onStart: (t, e) => {
                        let {drag: r, dragPropagation: n, onDragStart: i} = this.getProps();
                        if (r && !n && (this.openGlobalLock && this.openGlobalLock(),
                        this.openGlobalLock = tj(r),
                        !this.openGlobalLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        eQ(t => {
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (W.aQ.test(e)) {
                                let {projection: r} = this.visualElement;
                                if (r && r.layout) {
                                    let n = r.layout.layoutBox[t];
                                    if (n) {
                                        let t = e_(n);
                                        e = parseFloat(e) / 100 * t
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        i && tm.Wi.update( () => i(t, e), !1, !0);
                        let {animationState: o} = this.visualElement;
                        o && o.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t, e) => {
                        let {dragPropagation: r, dragDirectionLock: n, onDirectionLock: i, onDrag: o} = this.getProps();
                        if (!r && !this.openGlobalLock)
                            return;
                        let {offset: s} = e;
                        if (n && null === this.currentDirection) {
                            this.currentDirection = function(t) {
                                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10
                                  , r = null;
                                return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"),
                                r
                            }(s),
                            null !== this.currentDirection && i && i(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, s),
                        this.updateAxis("y", e.point, s),
                        this.visualElement.render(),
                        o && o(t, e)
                    }
                    ,
                    onSessionEnd: (t, e) => this.stop(t, e),
                    resumeAnimation: () => eQ(t => {
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: n,
                    contextWindow: ri(this.visualElement)
                })
            }
            stop(t, e) {
                let r = this.isDragging;
                if (this.cancel(),
                !r)
                    return;
                let {velocity: n} = e;
                this.startAnimation(n);
                let {onDragEnd: i} = this.getProps();
                i && tm.Wi.update( () => i(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: r} = this.getProps();
                !r && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, r) {
                let {drag: n} = this.getProps();
                if (!r || !ra(t, n, this.currentDirection))
                    return;
                let i = this.getAxisMotionValue(t)
                  , o = this.originPoint[t] + r[t];
                this.constraints && this.constraints[t] && (o = function(t, e, r) {
                    let {min: n, max: i} = e;
                    return void 0 !== n && t < n ? t = r ? (0,
                    eL.t)(n, t, r.min) : Math.max(t, n) : void 0 !== i && t > i && (t = r ? (0,
                    eL.t)(i, t, r.max) : Math.min(t, i)),
                    t
                }(o, this.constraints[t], this.elastic[t])),
                i.set(o)
            }
            resolveConstraints() {
                var t;
                let {dragConstraints: e, dragElastic: r} = this.getProps()
                  , n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
                  , i = this.constraints;
                e && g(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, e) {
                    let {top: r, left: n, bottom: i, right: o} = e;
                    return {
                        x: eH(t.x, n, o),
                        y: eH(t.y, r, i)
                    }
                }(n.layoutBox, e) : this.constraints = !1,
                this.elastic = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .35;
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: eX(t, "left", "right"),
                        y: eX(t, "top", "bottom")
                    }
                }(r),
                i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && eQ(t => {
                    this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let r = {};
                        return void 0 !== e.min && (r.min = e.min - t.min),
                        void 0 !== e.max && (r.max = e.max - t.min),
                        r
                    }(n.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: r} = this.getProps();
                if (!e || !g(e))
                    return !1;
                let n = e.current;
                (0,
                t$.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: i} = this.visualElement;
                if (!i || !i.layout)
                    return !1;
                let o = function(t, e, r) {
                    let n = rn(t, r)
                      , {scroll: i} = e;
                    return i && (e7(n.x, i.offset.x),
                    e7(n.y, i.offset.y)),
                    n
                }(n, i.root, this.visualElement.getTransformPagePoint())
                  , s = {
                    x: e$((t = i.layout.layoutBox).x, o.x),
                    y: e$(t.y, o.y)
                };
                if (r) {
                    let t = r(function(t) {
                        let {x: e, y: r} = t;
                        return {
                            top: r.min,
                            right: e.max,
                            bottom: r.max,
                            left: e.min
                        }
                    }(s));
                    this.hasMutatedConstraints = !!t,
                    t && (s = eJ(t))
                }
                return s
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: r, dragElastic: n, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: s} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(eQ(s => {
                    if (!ra(s, e, this.currentDirection))
                        return;
                    let l = a && a[s] || {};
                    o && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: r ? t[s] : 0,
                        bounceStiffness: n ? 200 : 1e6,
                        bounceDamping: n ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...l
                    };
                    return this.startAxisValueAnimation(s, u)
                }
                )).then(s)
            }
            startAxisValueAnimation(t, e) {
                let r = this.getAxisMotionValue(t);
                return r.start(ec(t, r, 0, e))
            }
            stopAnimation() {
                eQ(t => this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                eQ(t => {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                }
                )
            }
            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }
            getAxisMotionValue(t) {
                let e = "_drag" + t.toUpperCase()
                  , r = this.visualElement.getProps();
                return r[e] || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                eQ(e => {
                    let {drag: r} = this.getProps();
                    if (!ra(e, r, this.currentDirection))
                        return;
                    let {projection: n} = this.visualElement
                      , i = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let {min: r, max: o} = n.layout.layoutBox[e];
                        i.set(t[e] - (0,
                        eL.t)(r, o, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: r} = this.visualElement;
                if (!g(e) || !r || !this.constraints)
                    return;
                this.stopAnimation();
                let n = {
                    x: 0,
                    y: 0
                };
                eQ(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e) {
                        let r = e.get();
                        n[t] = function(t, e) {
                            let r = .5
                              , n = e_(t)
                              , i = e_(e);
                            return i > n ? r = (0,
                            eD.Y)(e.min, e.max - n, t.min) : n > i && (r = (0,
                            eD.Y)(t.min, t.max - i, e.min)),
                            (0,
                            eU.u)(0, 1, r)
                        }({
                            min: r,
                            max: r
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: i} = this.visualElement.getProps();
                this.visualElement.current.style.transform = i ? i({}, "") : "none",
                r.root && r.root.updateScroll(),
                r.updateLayout(),
                this.resolveConstraints(),
                eQ(e => {
                    if (!ra(e, t, null))
                        return;
                    let r = this.getAxisMotionValue(e)
                      , {min: i, max: o} = this.constraints[e];
                    r.set((0,
                    eL.t)(i, o, n[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                ro.set(this.visualElement, this);
                let t = tP(this.visualElement.current, "pointerdown", t => {
                    let {drag: e, dragListener: r=!0} = this.getProps();
                    e && r && this.start(t)
                }
                )
                  , e = () => {
                    let {dragConstraints: t} = this.getProps();
                    g(t) && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: r} = this.visualElement
                  , n = r.addEventListener("measure", e);
                r && !r.layout && (r.root && r.root.updateScroll(),
                r.updateLayout()),
                e();
                let i = ty(window, "resize", () => this.scalePositionWithinConstraints())
                  , o = r.addEventListener("didUpdate", t => {
                    let {delta: e, hasLayoutChanged: r} = t;
                    this.isDragging && r && (eQ(t => {
                        let r = this.getAxisMotionValue(t);
                        r && (this.originPoint[t] += e[t].translate,
                        r.set(r.get() + e[t].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    i(),
                    t(),
                    n(),
                    o && o()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: r=!1, dragPropagation: n=!1, dragConstraints: i=!1, dragElastic: o=.35, dragMomentum: s=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: r,
                    dragPropagation: n,
                    dragConstraints: i,
                    dragElastic: o,
                    dragMomentum: s
                }
            }
            constructor(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = eK(),
                this.visualElement = t
            }
        }
        function ra(t, e, r) {
            return (!0 === e || e === t) && (null === r || r === t)
        }
        class rl extends tM {
            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || tD.Z
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
            constructor(t) {
                super(t),
                this.removeGroupControls = tD.Z,
                this.removeListeners = tD.Z,
                this.controls = new rs(t)
            }
        }
        let ru = t => (e, r) => {
            t && tm.Wi.update( () => t(e, r))
        }
        ;
        class rc extends tM {
            onPointerDown(t) {
                this.session = new eM(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: ri(this.node)
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: r, onPanEnd: n} = this.node.getProps();
                return {
                    onSessionStart: ru(t),
                    onStart: ru(e),
                    onMove: r,
                    onEnd: (t, e) => {
                        delete this.session,
                        n && tm.Wi.update( () => n(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = tP(this.node.current, "pointerdown", t => this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
            constructor() {
                super(...arguments),
                this.removePointerDownListener = tD.Z
            }
        }
        let rd = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function rh(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let rf = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!W.px.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let r = rh(t, e.target.x)
                  , n = rh(t, e.target.y);
                return "".concat(r, "% ").concat(n, "%")
            }
        };
        class rp extends s.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: r, layoutId: n} = this.props
                  , {projection: i} = t;
                Object.assign(V, rg),
                i && (e.group && e.group.add(i),
                r && r.register && n && r.register(i),
                i.root.didUpdate(),
                i.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                i.setOptions({
                    ...i.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                rd.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: r, drag: n, isPresent: i} = this.props
                  , o = r.projection;
                return o && (o.isPresent = i,
                n || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(),
                t.isPresent === i || (i ? o.promote() : o.relegate() || tm.Wi.postRender( () => {
                    let t = o.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                p.postRender( () => {
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: r} = this.props
                  , {projection: n} = t;
                n && (n.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(n),
                r && r.deregister && r.deregister(n))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function rm(t) {
            let[e,r] = function() {
                let t = (0,
                s.useContext)(u);
                if (null === t)
                    return [!0, null];
                let {isPresent: e, onExitComplete: r, register: n} = t
                  , i = (0,
                s.useId)();
                return (0,
                s.useEffect)( () => n(i), []),
                !e && r ? [!1, () => r && r(i)] : [!0]
            }()
              , n = (0,
            s.useContext)(j);
            return s.createElement(rp, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0,
                s.useContext)(T),
                isPresent: e,
                safeToRemove: r
            })
        }
        let rg = {
            borderRadius: {
                ...rf,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: rf,
            borderTopRightRadius: rf,
            borderBottomLeftRadius: rf,
            borderBottomRightRadius: rf,
            boxShadow: {
                correct: (t, e) => {
                    let {treeScale: r, projectionDelta: n} = e
                      , i = t8.P.parse(t);
                    if (i.length > 5)
                        return t;
                    let o = t8.P.createTransformer(t)
                      , s = "number" != typeof i[0] ? 1 : 0
                      , a = n.x.scale * r.x
                      , l = n.y.scale * r.y;
                    i[0 + s] /= a,
                    i[1 + s] /= l;
                    let u = (0,
                    eL.t)(a, l, .5);
                    return "number" == typeof i[2 + s] && (i[2 + s] /= u),
                    "number" == typeof i[3 + s] && (i[3 + s] /= u),
                    o(i)
                }
            }
        };
        var rv = r(1657)
          , ry = r(4623);
        let rb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , rx = rb.length
          , rw = t => "string" == typeof t ? parseFloat(t) : t
          , rP = t => "number" == typeof t || W.px.test(t);
        function rS(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let rA = rC(0, .5, ry.Bn)
          , rE = rC(.5, .95, tD.Z);
        function rC(t, e, r) {
            return n => n < t ? 0 : n > e ? 1 : r((0,
            eD.Y)(t, e, n))
        }
        function rj(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function rT(t, e) {
            rj(t.x, e.x),
            rj(t.y, e.y)
        }
        function rM(t, e, r, n, i) {
            return t -= e,
            t = n + 1 / r * (t - n),
            void 0 !== i && (t = n + 1 / i * (t - n)),
            t
        }
        function rR(t, e, r, n, i) {
            let[o,s,a] = r;
            !function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5
                  , i = arguments.length > 4 ? arguments[4] : void 0
                  , o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t
                  , s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : t;
                if (W.aQ.test(e) && (e = parseFloat(e),
                e = (0,
                eL.t)(s.min, s.max, e / 100) - s.min),
                "number" != typeof e)
                    return;
                let a = (0,
                eL.t)(o.min, o.max, n);
                t === o && (a -= e),
                t.min = rM(t.min, e, r, a, i),
                t.max = rM(t.max, e, r, a, i)
            }(t, e[o], e[s], e[a], e.scale, n, i)
        }
        let rk = ["x", "scaleX", "originX"]
          , rV = ["y", "scaleY", "originY"];
        function rO(t, e, r, n) {
            rR(t.x, e, rk, r ? r.x : void 0, n ? n.x : void 0),
            rR(t.y, e, rV, r ? r.y : void 0, n ? n.y : void 0)
        }
        function rD(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function rL(t) {
            return rD(t.x) && rD(t.y)
        }
        function r_(t, e) {
            return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
        }
        function rF(t) {
            return e_(t.x) / e_(t.y)
        }
        var rI = r(9203);
        class rB {
            add(t) {
                (0,
                rI.y4)(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if ((0,
                rI.cl)(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let r = this.members.findIndex(e => t === e);
                if (0 === r)
                    return !1;
                for (let t = r; t >= 0; t--) {
                    let r = this.members[t];
                    if (!1 !== r.isPresent) {
                        e = r;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let r = this.lead;
                if (t !== r && (this.prevLead = r,
                this.lead = t,
                t.show(),
                r)) {
                    r.instance && r.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = r,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    r.snapshot && (t.snapshot = r.snapshot,
                    t.snapshot.latestValues = r.animationValues || r.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: n} = t.options;
                    !1 === n && r.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: r} = t;
                    e.onExitComplete && e.onExitComplete(),
                    r && r.options.onExitComplete && r.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
            constructor() {
                this.members = []
            }
        }
        function rN(t, e, r) {
            let n = ""
              , i = t.x.translate / e.x
              , o = t.y.translate / e.y;
            if ((i || o) && (n = "translate3d(".concat(i, "px, ").concat(o, "px, 0) ")),
            (1 !== e.x || 1 !== e.y) && (n += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")),
            r) {
                let {rotate: t, rotateX: e, rotateY: i} = r;
                t && (n += "rotate(".concat(t, "deg) ")),
                e && (n += "rotateX(".concat(e, "deg) ")),
                i && (n += "rotateY(".concat(i, "deg) "))
            }
            let s = t.x.scale * e.x
              , a = t.y.scale * e.y;
            return (1 !== s || 1 !== a) && (n += "scale(".concat(s, ", ").concat(a, ")")),
            n || "none"
        }
        let rz = (t, e) => t.depth - e.depth;
        class rW {
            add(t) {
                (0,
                rI.y4)(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                (0,
                rI.cl)(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(rz),
                this.isDirty = !1,
                this.children.forEach(t)
            }
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
        }
        var rU = r(4907);
        let rH = ["", "X", "Y", "Z"]
          , r$ = {
            visibility: "hidden"
        }
          , rX = 0
          , rZ = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        };
        function rG(t) {
            let {attachResizeListener: e, defaultParent: r, measureScroll: n, checkIsScrollRoot: i, resetTransform: o} = t;
            return class {
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new rv.L),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t) {
                    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                        r[n - 1] = arguments[n];
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...r)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root.hasTreeAnimated;
                    if (this.instance)
                        return;
                    this.isSVG = t instanceof SVGElement && "svg" !== t.tagName,
                    this.instance = t;
                    let {layoutId: n, layout: i, visualElement: o} = this.options;
                    if (o && !o.current && o.mount(t),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    r && (i || n) && (this.isLayoutDirty = !0),
                    e) {
                        let r;
                        let n = () => this.root.updateBlockedByResize = !1;
                        e(t, () => {
                            this.root.updateBlockedByResize = !0,
                            r && r(),
                            r = function(t, e) {
                                let r = rU.X.now()
                                  , n = i => {
                                    let {timestamp: o} = i
                                      , s = o - r;
                                    s >= e && ((0,
                                    tm.Pn)(n),
                                    t(s - e))
                                }
                                ;
                                return tm.Wi.read(n, !0),
                                () => (0,
                                tm.Pn)(n)
                            }(n, 250),
                            rd.hasAnimatedSinceResize && (rd.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(r3))
                        }
                        )
                    }
                    n && this.root.registerSharedNode(n, this),
                    !1 !== this.options.animate && o && (n || i) && this.addEventListener("didUpdate", t => {
                        let {delta: e, hasLayoutChanged: r, hasRelativeTargetChanged: n, layout: i} = t;
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let s = this.options.transition || o.getDefaultTransition() || ne
                          , {onLayoutAnimationStart: a, onLayoutAnimationComplete: l} = o.getProps()
                          , u = !this.targetLayout || !r_(this.targetLayout, i) || n
                          , c = !r && n;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || c || r && (u || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(e, c);
                            let t = {
                                ...el(s, "layout"),
                                onPlay: a,
                                onComplete: l
                            };
                            (o.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0,
                            t.type = !1),
                            this.startAnimation(t)
                        } else
                            r || r3(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = i
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    (0,
                    tm.Pn)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(r8),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate() {
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: r} = this.options;
                    if (void 0 === e && !r)
                        return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(r0);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(r1),
                    this.isUpdating = !1,
                    window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(),
                    this.nodes.forEach(r2),
                    this.nodes.forEach(rY),
                    this.nodes.forEach(rq),
                    this.clearAllSnapshots();
                    let t = rU.X.now();
                    tm.frameData.delta = (0,
                    eU.u)(0, 1e3 / 60, t - tm.frameData.timestamp),
                    tm.frameData.timestamp = t,
                    tm.frameData.isProcessing = !0,
                    tm.S6.update.process(tm.frameData),
                    tm.S6.preRender.process(tm.frameData),
                    tm.S6.render.process(tm.frameData),
                    tm.frameData.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    p.read( () => this.update()))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(rJ),
                    this.sharedNodes.forEach(r9)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    tm.Wi.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    tm.Wi.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = eK(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "measure"
                      , e = !!(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: i(this.instance),
                        offset: n(this.instance)
                    })
                }
                resetTransform() {
                    if (!o)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform
                      , e = this.projectionDelta && !rL(this.projectionDelta)
                      , r = this.getTransformTemplate()
                      , n = r ? r(this.latestValues, "") : void 0
                      , i = n !== this.prevTransformTemplateValue;
                    t && (e || e2(this.latestValues) || i) && (o(this.instance, n),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure() {
                    var t;
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0]
                      , r = this.measurePageBox()
                      , n = this.removeElementScroll(r);
                    return e && (n = this.removeTransform(n)),
                    ni((t = n).x),
                    ni(t.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: r,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return eK();
                    let e = t.measureViewportBox()
                      , {scroll: r} = this.root;
                    return r && (e7(e.x, r.offset.x),
                    e7(e.y, r.offset.y)),
                    e
                }
                removeElementScroll(t) {
                    let e = eK();
                    rT(e, t);
                    for (let r = 0; r < this.path.length; r++) {
                        let n = this.path[r]
                          , {scroll: i, options: o} = n;
                        if (n !== this.root && i && o.layoutScroll) {
                            if (i.isRoot) {
                                rT(e, t);
                                let {scroll: r} = this.root;
                                r && (e7(e.x, -r.offset.x),
                                e7(e.y, -r.offset.y))
                            }
                            e7(e.x, i.offset.x),
                            e7(e.y, i.offset.y)
                        }
                    }
                    return e
                }
                applyTransform(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , r = eK();
                    rT(r, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && rr(r, {
                            x: -n.scroll.offset.x,
                            y: -n.scroll.offset.y
                        }),
                        e2(n.latestValues) && rr(r, n.latestValues)
                    }
                    return e2(this.latestValues) && rr(r, this.latestValues),
                    r
                }
                removeTransform(t) {
                    let e = eK();
                    rT(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let r = this.path[t];
                        if (!r.instance || !e2(r.latestValues))
                            continue;
                        e1(r.latestValues) && r.updateSnapshot();
                        let n = eK();
                        rT(n, r.measurePageBox()),
                        rO(e, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, n)
                    }
                    return e2(this.latestValues) && rO(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tm.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta() {
                    var t, e, r, n;
                    let i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , o = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
                    let s = !!this.resumingFrom || this !== o;
                    if (!(i || s && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget))
                        return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = tm.frameData.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = eK(),
                            this.relativeTargetOrigin = eK(),
                            eW(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            rT(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = eK(),
                            this.targetWithTransforms = eK()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            e = this.target,
                            r = this.relativeTarget,
                            n = this.relativeParent.target,
                            eN(e.x, r.x, n.x),
                            eN(e.y, r.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : rT(this.target, this.layout.layoutBox),
                            e8(this.target, this.targetDelta)) : rT(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = eK(),
                                this.relativeTargetOrigin = eK(),
                                eW(this.relativeTargetOrigin, this.target, t.target),
                                rT(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            rZ.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || e1(this.parent.latestValues) || e3(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , r = !!this.resumingFrom || this !== e
                      , n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1),
                    r && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                    this.resolvedRelativeTargetAt === tm.frameData.timestamp && (n = !1),
                    n)
                        return;
                    let {layout: i, layoutId: o} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(i || o))
                        return;
                    rT(this.layoutCorrected, this.layout.layoutBox);
                    let s = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(t, e, r) {
                        let n, i, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], s = r.length;
                        if (s) {
                            e.x = e.y = 1;
                            for (let a = 0; a < s; a++) {
                                i = (n = r[a]).projectionDelta;
                                let s = n.instance;
                                (!s || !s.style || "contents" !== s.style.display) && (o && n.options.layoutScroll && n.scroll && n !== n.root && rr(t, {
                                    x: -n.scroll.offset.x,
                                    y: -n.scroll.offset.y
                                }),
                                i && (e.x *= i.x.scale,
                                e.y *= i.y.scale,
                                e8(t, i)),
                                o && e2(n.latestValues) && rr(t, n.latestValues))
                            }
                            e.x = e9(e.x),
                            e.y = e9(e.y)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, r),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                    e.targetWithTransforms = eK());
                    let {target: l} = e;
                    if (!l) {
                        this.projectionTransform && (this.projectionDelta = eY(),
                        this.projectionTransform = "none",
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta || (this.projectionDelta = eY(),
                    this.projectionDeltaWithTransform = eY());
                    let u = this.projectionTransform;
                    eB(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.projectionTransform = rN(this.projectionDelta, this.treeScale),
                    (this.projectionTransform !== u || this.treeScale.x !== s || this.treeScale.y !== a) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    rZ.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender() {
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    if (this.options.scheduleRender && this.options.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(t) {
                    let e, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.snapshot, i = n ? n.latestValues : {}, o = {
                        ...this.latestValues
                    }, s = eY();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !r;
                    let a = eK()
                      , l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , c = !u || u.members.length <= 1
                      , d = !!(l && !c && !0 === this.options.crossfade && !this.path.some(nt));
                    this.animationProgress = 0,
                    this.mixTargetDelta = r => {
                        let n = r / 1e3;
                        if (r7(s.x, t.x, n),
                        r7(s.y, t.y, n),
                        this.setTargetDelta(s),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, h, f, p;
                            eW(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            f = this.relativeTarget,
                            p = this.relativeTargetOrigin,
                            r6(f.x, p.x, a.x, n),
                            r6(f.y, p.y, a.y, n),
                            e && (u = this.relativeTarget,
                            h = e,
                            u.x.min === h.x.min && u.x.max === h.x.max && u.y.min === h.y.min && u.y.max === h.y.max) && (this.isProjectionDirty = !1),
                            e || (e = eK()),
                            rT(e, this.relativeTarget)
                        }
                        l && (this.animationValues = o,
                        function(t, e, r, n, i, o) {
                            i ? (t.opacity = (0,
                            eL.t)(0, void 0 !== r.opacity ? r.opacity : 1, rA(n)),
                            t.opacityExit = (0,
                            eL.t)(void 0 !== e.opacity ? e.opacity : 1, 0, rE(n))) : o && (t.opacity = (0,
                            eL.t)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, n));
                            for (let i = 0; i < rx; i++) {
                                let o = "border".concat(rb[i], "Radius")
                                  , s = rS(e, o)
                                  , a = rS(r, o);
                                (void 0 !== s || void 0 !== a) && (s || (s = 0),
                                a || (a = 0),
                                0 === s || 0 === a || rP(s) === rP(a) ? (t[o] = Math.max((0,
                                eL.t)(rw(s), rw(a), n), 0),
                                (W.aQ.test(a) || W.aQ.test(s)) && (t[o] += "%")) : t[o] = a)
                            }
                            (e.rotate || r.rotate) && (t.rotate = (0,
                            eL.t)(e.rotate || 0, r.rotate || 0, n))
                        }(o, i, this.latestValues, n, d, c)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = n
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && ((0,
                    tm.Pn)(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = tm.Wi.update( () => {
                        rd.hasAnimatedSinceResize = !0,
                        this.currentAnimation = function(t, e, r) {
                            let n = (0,
                            _.i)(t) ? t : (0,
                            ef.BX)(t);
                            return n.start(ec("", n, 1e3, r)),
                            n.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e => {
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onComplete: () => {
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: r, layout: n, latestValues: i} = t;
                    if (e && r && n) {
                        if (this !== t && this.layout && n && no(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            r = this.target || eK();
                            let e = e_(this.layout.layoutBox.x);
                            r.x.min = t.target.x.min,
                            r.x.max = r.x.min + e;
                            let n = e_(this.layout.layoutBox.y);
                            r.y.min = t.target.y.min,
                            r.y.max = r.y.min + n
                        }
                        rT(e, r),
                        rr(e, i),
                        eB(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new rB),
                    this.sharedNodes.get(t).add(e);
                    let r = e.options.initialPromotionConfig;
                    e.promote({
                        transition: r ? r.transition : void 0,
                        preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote() {
                    let {needsReset: t, transition: e, preserveFollowOpacity: r} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = this.getStack();
                    n && n.promote(this, r),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: r} = t;
                    if ((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (e = !0),
                    !e)
                        return;
                    let n = {};
                    for (let e = 0; e < rH.length; e++) {
                        let i = "rotate" + rH[e];
                        r[i] && (n[i] = r[i],
                        t.setStaticValue(i, 0))
                    }
                    for (let e in t.render(),
                    n)
                        t.setStaticValue(e, n[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    var e, r;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return r$;
                    let n = {
                        visibility: ""
                    }
                      , i = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        n.opacity = "",
                        n.pointerEvents = tf(null == t ? void 0 : t.pointerEvents) || "",
                        n.transform = i ? i(this.latestValues, "") : "none",
                        n;
                    let o = this.getLead();
                    if (!this.projectionDelta || !this.layout || !o.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = tf(null == t ? void 0 : t.pointerEvents) || ""),
                        this.hasProjected && !e2(this.latestValues) && (e.transform = i ? i({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let s = o.animationValues || o.latestValues;
                    this.applyTransformsToTarget(),
                    n.transform = rN(this.projectionDeltaWithTransform, this.treeScale, s),
                    i && (n.transform = i(s, n.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in n.transformOrigin = "".concat(100 * a.origin, "% ").concat(100 * l.origin, "% 0"),
                    o.animationValues ? n.opacity = o === this ? null !== (r = null !== (e = s.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : n.opacity = o === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0,
                    V) {
                        if (void 0 === s[t])
                            continue;
                        let {correct: e, applyTo: r} = V[t]
                          , i = "none" === n.transform ? s[t] : e(s[t], o);
                        if (r) {
                            let t = r.length;
                            for (let e = 0; e < t; e++)
                                n[r[e]] = i
                        } else
                            n[t] = i
                    }
                    return this.options.layoutId && (n.pointerEvents = o === this ? tf(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                    n
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(r0),
                    this.root.sharedNodes.clear()
                }
                constructor(t={}, e=null == r ? void 0 : r()) {
                    this.id = rX++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1,
                        rZ.totalNodes = rZ.resolvedTargetDeltas = rZ.recalculatedProjection = 0,
                        this.nodes.forEach(rK),
                        this.nodes.forEach(r5),
                        this.nodes.forEach(r4),
                        this.nodes.forEach(rQ),
                        window.MotionDebug && window.MotionDebug.record(rZ)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = e ? e.root || e : this,
                    this.path = e ? [...e.path, e] : [],
                    this.parent = e,
                    this.depth = e ? e.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new rW)
                }
            }
        }
        function rY(t) {
            t.updateLayout()
        }
        function rq(t) {
            var e;
            let r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout
                  , {animationType: i} = t.options
                  , o = r.source !== t.layout.source;
                "size" === i ? eQ(t => {
                    let n = o ? r.measuredBox[t] : r.layoutBox[t]
                      , i = e_(n);
                    n.min = e[t].min,
                    n.max = n.min + i
                }
                ) : no(i, r.layoutBox, e) && eQ(n => {
                    let i = o ? r.measuredBox[n] : r.layoutBox[n]
                      , s = e_(e[n]);
                    i.max = i.min + s,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[n].max = t.relativeTarget[n].min + s)
                }
                );
                let s = eY();
                eB(s, e, r.layoutBox);
                let a = eY();
                o ? eB(a, t.applyTransform(n, !0), r.measuredBox) : eB(a, e, r.layoutBox);
                let l = !rL(s)
                  , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: i, layout: o} = n;
                        if (i && o) {
                            let s = eK();
                            eW(s, r.layoutBox, i.layoutBox);
                            let a = eK();
                            eW(a, e, o.layoutBox),
                            r_(s, a) || (u = !0),
                            n.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = s,
                            t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: r,
                    delta: a,
                    layoutDelta: s,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function rK(t) {
            rZ.totalNodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function rQ(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function rJ(t) {
            t.clearSnapshot()
        }
        function r0(t) {
            t.clearMeasurements()
        }
        function r1(t) {
            t.isLayoutDirty = !1
        }
        function r2(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function r3(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function r5(t) {
            t.resolveTargetDelta()
        }
        function r4(t) {
            t.calcProjection()
        }
        function r8(t) {
            t.resetRotation()
        }
        function r9(t) {
            t.removeLeadSnapshot()
        }
        function r7(t, e, r) {
            t.translate = (0,
            eL.t)(e.translate, 0, r),
            t.scale = (0,
            eL.t)(e.scale, 1, r),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function r6(t, e, r, n) {
            t.min = (0,
            eL.t)(e.min, r.min, n),
            t.max = (0,
            eL.t)(e.max, r.max, n)
        }
        function nt(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let ne = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , nr = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
          , nn = nr("applewebkit/") && !nr("chrome/") ? Math.round : tD.Z;
        function ni(t) {
            t.min = nn(t.min),
            t.max = nn(t.max)
        }
        function no(t, e, r) {
            return "position" === t || "preserve-aspect" === t && !eF(rF(e), rF(r), .2)
        }
        let ns = rG({
            attachResizeListener: (t, e) => ty(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , na = {
            current: void 0
        }
          , nl = rG({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!na.current) {
                    let t = new ns({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    na.current = t
                }
                return na.current
            }
            ,
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        })
          , nu = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function nc(t, e) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            (0,
            t$.k)(r <= 4, 'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.'));
            let[n,i] = function(t) {
                let e = nu.exec(t);
                if (!e)
                    return [, ];
                let[,r,n] = e;
                return [r, n]
            }(t);
            if (!n)
                return;
            let o = window.getComputedStyle(e).getPropertyValue(n);
            if (o) {
                let t = o.trim();
                return eh(t) ? parseFloat(t) : t
            }
            return (0,
            B.t)(i) ? nc(i, e, r + 1) : i
        }
        let nd = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
          , nh = t => nd.has(t)
          , nf = t => Object.keys(t).some(nh)
          , np = t => t === z.Rx || t === W.px
          , nm = (t, e) => parseFloat(t.split(", ")[e])
          , ng = (t, e) => (r, n) => {
            let {transform: i} = n;
            if ("none" === i || !i)
                return 0;
            let o = i.match(/^matrix3d\((.+)\)$/);
            if (o)
                return nm(o[1], e);
            {
                let e = i.match(/^matrix\((.+)\)$/);
                return e ? nm(e[1], t) : 0
            }
        }
          , nv = new Set(["x", "y", "z"])
          , ny = O.filter(t => !nv.has(t))
          , nb = {
            width: (t, e) => {
                let {x: r} = t
                  , {paddingLeft: n="0", paddingRight: i="0"} = e;
                return r.max - r.min - parseFloat(n) - parseFloat(i)
            }
            ,
            height: (t, e) => {
                let {y: r} = t
                  , {paddingTop: n="0", paddingBottom: i="0"} = e;
                return r.max - r.min - parseFloat(n) - parseFloat(i)
            }
            ,
            top: (t, e) => {
                let {top: r} = e;
                return parseFloat(r)
            }
            ,
            left: (t, e) => {
                let {left: r} = e;
                return parseFloat(r)
            }
            ,
            bottom: (t, e) => {
                let {y: r} = t
                  , {top: n} = e;
                return parseFloat(n) + (r.max - r.min)
            }
            ,
            right: (t, e) => {
                let {x: r} = t
                  , {left: n} = e;
                return parseFloat(n) + (r.max - r.min)
            }
            ,
            x: ng(4, 13),
            y: ng(5, 14)
        };
        nb.translateX = nb.x,
        nb.translateY = nb.y;
        let nx = (t, e, r) => {
            let n = e.measureViewportBox()
              , i = e.current
              , o = getComputedStyle(i)
              , {display: s} = o
              , a = {};
            "none" === s && e.setStaticValue("display", t.display || "block"),
            r.forEach(t => {
                a[t] = nb[t](n, o)
            }
            ),
            e.render();
            let l = e.measureViewportBox();
            return r.forEach(r => {
                let n = e.getValue(r);
                n && n.jump(a[r]),
                t[r] = nb[r](l, o)
            }
            ),
            t
        }
          , nw = function(t, e) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            e = {
                ...e
            },
            n = {
                ...n
            };
            let i = Object.keys(e).filter(nh)
              , o = []
              , s = !1
              , a = [];
            if (i.forEach(i => {
                let l;
                let u = t.getValue(i);
                if (!t.hasValue(i))
                    return;
                let c = r[i]
                  , d = eg(c)
                  , h = e[i];
                if (tc(h)) {
                    let t = h.length
                      , e = null === h[0] ? 1 : 0;
                    d = eg(c = h[e]);
                    for (let r = e; r < t && null !== h[r]; r++)
                        l ? (0,
                        t$.k)(eg(h[r]) === l, "All keyframes must be of the same type") : (l = eg(h[r]),
                        (0,
                        t$.k)(l === d || np(d) && np(l), "Keyframes must be of the same dimension as the current value"))
                } else
                    l = eg(h);
                if (d !== l) {
                    if (np(d) && np(l)) {
                        let t = u.get();
                        "string" == typeof t && u.set(parseFloat(t)),
                        "string" == typeof h ? e[i] = parseFloat(h) : Array.isArray(h) && l === W.px && (e[i] = h.map(parseFloat))
                    } else
                        (null == d ? void 0 : d.transform) && (null == l ? void 0 : l.transform) && (0 === c || 0 === h) ? 0 === c ? u.set(l.transform(c)) : e[i] = d.transform(h) : (s || (o = function(t) {
                            let e = [];
                            return ny.forEach(r => {
                                let n = t.getValue(r);
                                void 0 !== n && (e.push([r, n.get()]),
                                n.set(r.startsWith("scale") ? 1 : 0))
                            }
                            ),
                            e.length && t.render(),
                            e
                        }(t),
                        s = !0),
                        a.push(i),
                        n[i] = void 0 !== n[i] ? n[i] : e[i],
                        u.jump(h))
                }
            }
            ),
            !a.length)
                return {
                    target: e,
                    transitionEnd: n
                };
            {
                let r = a.indexOf("height") >= 0 ? window.pageYOffset : null
                  , i = nx(e, t, a);
                return o.length && o.forEach(e => {
                    let[r,n] = e;
                    t.getValue(r).set(n)
                }
                ),
                t.render(),
                C.j && null !== r && window.scrollTo({
                    top: r
                }),
                {
                    target: i,
                    transitionEnd: n
                }
            }
        }
          , nP = (t, e, r, n) => {
            var i, o;
            let s = function(t, e, r) {
                let {...n} = e
                  , i = t.current;
                if (!(i instanceof Element))
                    return {
                        target: n,
                        transitionEnd: r
                    };
                for (let e in r && (r = {
                    ...r
                }),
                t.values.forEach(t => {
                    let e = t.get();
                    if (!(0,
                    B.t)(e))
                        return;
                    let r = nc(e, i);
                    r && t.set(r)
                }
                ),
                n) {
                    let t = n[e];
                    if (!(0,
                    B.t)(t))
                        continue;
                    let o = nc(t, i);
                    o && (n[e] = o,
                    r || (r = {}),
                    void 0 === r[e] && (r[e] = t))
                }
                return {
                    target: n,
                    transitionEnd: r
                }
            }(t, e, n);
            return e = s.target,
            n = s.transitionEnd,
            i = e,
            o = n,
            nf(i) ? nw(t, i, r, o) : {
                target: i,
                transitionEnd: o
            }
        }
          , nS = {
            current: null
        }
          , nA = {
            current: !1
        }
          , nE = new WeakMap
          , nC = Object.keys(E)
          , nj = nC.length
          , nT = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
          , nM = x.length;
        class nR {
            scrapeMotionValuesFromProps(t, e) {
                return {}
            }
            mount(t) {
                this.current = t,
                nE.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
                nA.current || function() {
                    if (nA.current = !0,
                    C.j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = () => nS.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            nS.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || nS.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in nE.delete(this.current),
                this.projection && this.projection.unmount(),
                (0,
                tm.Pn)(this.notifyUpdate),
                (0,
                tm.Pn)(this.render),
                this.valueSubscriptions.forEach(t => t()),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features)
                    this.features[t].unmount();
                this.current = null
            }
            bindToMotionValue(t, e) {
                let r = D.has(t)
                  , n = e.on("change", e => {
                    this.latestValues[t] = e,
                    this.props.onUpdate && tm.Wi.update(this.notifyUpdate, !1, !0),
                    r && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , i = e.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(t, () => {
                    n(),
                    i()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            loadFeatures(t, e, r, n) {
                let i, o, {children: s, ...a} = t;
                for (let t = 0; t < nj; t++) {
                    let e = nC[t]
                      , {isEnabled: r, Feature: n, ProjectionNode: s, MeasureLayout: l} = E[e];
                    s && (i = s),
                    r(a) && (!this.features[e] && n && (this.features[e] = new n(this)),
                    l && (o = l))
                }
                if (("html" === this.type || "svg" === this.type) && !this.projection && i) {
                    this.projection = new i(this.latestValues,this.parent && this.parent.projection);
                    let {layoutId: t, layout: e, drag: r, dragConstraints: o, layoutScroll: s, layoutRoot: l} = a;
                    this.projection.setOptions({
                        layoutId: t,
                        layout: e,
                        alwaysMeasureLayout: !!r || o && g(o),
                        visualElement: this,
                        scheduleRender: () => this.scheduleRender(),
                        animationType: "string" == typeof e ? e : "both",
                        initialPromotionConfig: n,
                        layoutScroll: s,
                        layoutRoot: l
                    })
                }
                return o
            }
            updateFeatures() {
                for (let t in this.features) {
                    let e = this.features[t];
                    e.isMounted ? e.update() : (e.mount(),
                    e.isMounted = !0)
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.options, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : eK()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            makeTargetAnimatable(t) {
                let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return this.makeTargetAnimatableFromInstance(t, e)
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < nT.length; e++) {
                    let r = nT[e];
                    this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](),
                    delete this.propEventSubscriptions[r]);
                    let n = t["on" + r];
                    n && (this.propEventSubscriptions[r] = this.on(r, n))
                }
                this.prevMotionValues = function(t, e, r) {
                    let {willChange: n} = e;
                    for (let i in e) {
                        let o = e[i]
                          , s = r[i];
                        if ((0,
                        _.i)(o))
                            t.addValue(i, o),
                            ed(n) && n.add(i);
                        else if ((0,
                        _.i)(s))
                            t.addValue(i, (0,
                            ef.BX)(o, {
                                owner: t
                            })),
                            ed(n) && n.remove(i);
                        else if (s !== o) {
                            if (t.hasValue(i)) {
                                let e = t.getValue(i);
                                e.hasAnimated || e.set(o)
                            } else {
                                let e = t.getStaticValue(i);
                                t.addValue(i, (0,
                                ef.BX)(void 0 !== e ? e : o, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let n in r)
                        void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            getVariantContext() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (t)
                    return this.parent ? this.parent.getVariantContext() : void 0;
                if (!this.isControllingVariants) {
                    let t = this.parent && this.parent.getVariantContext() || {};
                    return void 0 !== this.props.initial && (t.initial = this.props.initial),
                    t
                }
                let e = {};
                for (let t = 0; t < nM; t++) {
                    let r = x[t]
                      , n = this.props[r];
                    (v(n) || !1 === n) && (e[r] = n)
                }
                return e
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    () => e.variantChildren.delete(t)
            }
            addValue(t, e) {
                e !== this.values.get(t) && (this.removeValue(t),
                this.bindToMotionValue(t, e)),
                this.values.set(t, e),
                this.latestValues[t] = e.get()
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let r = this.values.get(t);
                return void 0 === r && void 0 !== e && (r = (0,
                ef.BX)(e, {
                    owner: this
                }),
                this.addValue(t, r)),
                r
            }
            readValue(t) {
                var e;
                return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let {initial: r} = this.props
                  , n = "string" == typeof r || "object" == typeof r ? null === (e = tl(this.props, r)) || void 0 === e ? void 0 : e[t] : void 0;
                if (r && void 0 !== n)
                    return n;
                let i = this.getBaseTargetFromProps(this.props, t);
                return void 0 === i || (0,
                _.i)(i) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : i
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new rv.L),
                this.events[t].add(e)
            }
            notify(t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                    r[n - 1] = arguments[n];
                this.events[t] && this.events[t].notify(...r)
            }
            constructor({parent: t, props: e, presenceContext: r, reducedMotionConfig: n, visualState: i}, o={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.scheduleRender = () => tm.Wi.render(this.render, !1, !0);
                let {latestValues: s, renderState: a} = i;
                this.latestValues = s,
                this.baseTarget = {
                    ...s
                },
                this.initialValues = e.initial ? {
                    ...s
                } : {},
                this.renderState = a,
                this.parent = t,
                this.props = e,
                this.presenceContext = r,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = n,
                this.options = o,
                this.isControllingVariants = w(e),
                this.isVariantNode = P(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: l, ...u} = this.scrapeMotionValuesFromProps(e, {});
                for (let t in u) {
                    let e = u[t];
                    void 0 !== s[t] && (0,
                    _.i)(e) && (e.set(s[t], !1),
                    ed(l) && l.add(t))
                }
            }
        }
        class nk extends nR {
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, e) {
                let {vars: r, style: n} = e;
                delete r[t],
                delete n[t]
            }
            makeTargetAnimatableFromInstance(t, e) {
                let {transition: r, transitionEnd: n, ...i} = t
                  , o = function(t, e, r) {
                    let n = {};
                    for (let i in t) {
                        let t = function(t, e) {
                            if (e)
                                return (e[t] || e.default || e).from
                        }(i, e);
                        if (void 0 !== t)
                            n[i] = t;
                        else {
                            let t = r.getValue(i);
                            t && (n[i] = t.get())
                        }
                    }
                    return n
                }(i, r || {}, this);
                if (e) {
                    !function(t, e, r) {
                        var n, i;
                        let o = Object.keys(e).filter(e => !t.hasValue(e))
                          , s = o.length;
                        if (s)
                            for (let a = 0; a < s; a++) {
                                let s = o[a]
                                  , l = e[s]
                                  , u = null;
                                Array.isArray(l) && (u = l[0]),
                                null === u && (u = null !== (i = null !== (n = r[s]) && void 0 !== n ? n : t.readValue(s)) && void 0 !== i ? i : e[s]),
                                null != u && ("string" == typeof u && (eh(u) || ea(u)) ? u = parseFloat(u) : !ey(u) && t8.P.test(l) && (u = es(s, l)),
                                t.addValue(s, (0,
                                ef.BX)(u, {
                                    owner: t
                                })),
                                void 0 === r[s] && (r[s] = u),
                                null !== u && t.setBaseTarget(s, u))
                            }
                    }(this, i, o);
                    let t = nP(this, i, o, n);
                    n = t.transitionEnd,
                    i = t.target
                }
                return {
                    transition: r,
                    transitionEnd: n,
                    ...i
                }
            }
        }
        class nV extends nk {
            readValueFromInstance(t, e) {
                if (D.has(e)) {
                    let t = eo(e);
                    return t && t.default || 0
                }
                {
                    let r = window.getComputedStyle(t)
                      , n = ((0,
                    B.f)(e) ? r.getPropertyValue(e) : r[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }
            measureInstanceViewportBox(t, e) {
                let {transformPagePoint: r} = e;
                return rn(t, r)
            }
            build(t, e, r, n) {
                $(t, e, r, n.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e) {
                return ts(t, e)
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                (0,
                _.i)(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = "".concat(t))
                }
                ))
            }
            renderInstance(t, e, r, n) {
                tn(t, e, r, n)
            }
            constructor() {
                super(...arguments),
                this.type = "html"
            }
        }
        class nO extends nk {
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (D.has(e)) {
                    let t = eo(e);
                    return t && t.default || 0
                }
                return e = ti.has(e) ? e : h(e),
                t.getAttribute(e)
            }
            measureInstanceViewportBox() {
                return eK()
            }
            scrapeMotionValuesFromProps(t, e) {
                return ta(t, e)
            }
            build(t, e, r, n) {
                tt(t, e, r, this.isSVGTag, n.transformTemplate)
            }
            renderInstance(t, e, r, n) {
                to(t, e, r, n)
            }
            mount(t) {
                this.isSVGTag = tr(t.tagName),
                super.mount(t)
            }
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1
            }
        }
        let nD = (t, e) => k(t) ? new nO(e,{
            enableHardwareAcceleration: !1
        }) : new nV(e,{
            enableHardwareAcceleration: !0
        })
          , nL = {
            animation: {
                Feature: eE
            },
            exit: {
                Feature: ej
            },
            inView: {
                Feature: tW
            },
            tap: {
                Feature: t_
            },
            focus: {
                Feature: tV
            },
            hover: {
                Feature: tk
            },
            pan: {
                Feature: rc
            },
            drag: {
                Feature: rl,
                ProjectionNode: nl,
                MeasureLayout: rm
            },
            layout: {
                ProjectionNode: nl,
                MeasureLayout: rm
            }
        }
          , n_ = function(t) {
            function e(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return function(t) {
                    let {preloadedFeatures: e, createVisualElement: r, useRender: n, useVisualState: i, Component: o} = t;
                    e && function(t) {
                        for (let e in t)
                            E[e] = {
                                ...E[e],
                                ...t[e]
                            }
                    }(e);
                    let h = (0,
                    s.forwardRef)(function(t, h) {
                        var m;
                        let y;
                        let b = {
                            ...(0,
                            s.useContext)(a._),
                            ...t,
                            layoutId: function(t) {
                                let {layoutId: e} = t
                                  , r = (0,
                                s.useContext)(j).id;
                                return r && void 0 !== e ? r + "-" + e : e
                            }(t)
                        }
                          , {isStatic: x} = b
                          , P = function(t) {
                            let {initial: e, animate: r} = function(t, e) {
                                if (w(t)) {
                                    let {initial: e, animate: r} = t;
                                    return {
                                        initial: !1 === e || v(e) ? e : void 0,
                                        animate: v(r) ? r : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0,
                            s.useContext)(l));
                            return (0,
                            s.useMemo)( () => ({
                                initial: e,
                                animate: r
                            }), [S(e), S(r)])
                        }(t)
                          , A = i(t, x);
                        if (!x && C.j) {
                            P.visualElement = function(t, e, r, n) {
                                let {visualElement: i} = (0,
                                s.useContext)(l)
                                  , o = (0,
                                s.useContext)(d)
                                  , h = (0,
                                s.useContext)(u)
                                  , m = (0,
                                s.useContext)(a._).reducedMotion
                                  , g = (0,
                                s.useRef)();
                                n = n || o.renderer,
                                !g.current && n && (g.current = n(t, {
                                    visualState: e,
                                    parent: i,
                                    props: r,
                                    presenceContext: h,
                                    blockInitialAnimation: !!h && !1 === h.initial,
                                    reducedMotionConfig: m
                                }));
                                let v = g.current;
                                (0,
                                s.useInsertionEffect)( () => {
                                    v && v.update(r, h)
                                }
                                );
                                let y = (0,
                                s.useRef)(!!(r[f] && !window.HandoffComplete));
                                return (0,
                                c.L)( () => {
                                    v && (p.postRender(v.render),
                                    y.current && v.animationState && v.animationState.animateChanges())
                                }
                                ),
                                (0,
                                s.useEffect)( () => {
                                    v && (v.updateFeatures(),
                                    !y.current && v.animationState && v.animationState.animateChanges(),
                                    y.current && (y.current = !1,
                                    window.HandoffComplete = !0))
                                }
                                ),
                                v
                            }(o, A, b, r);
                            let t = (0,
                            s.useContext)(T)
                              , n = (0,
                            s.useContext)(d).strict;
                            P.visualElement && (y = P.visualElement.loadFeatures(b, n, e, t))
                        }
                        return s.createElement(l.Provider, {
                            value: P
                        }, y && P.visualElement ? s.createElement(y, {
                            visualElement: P.visualElement,
                            ...b
                        }) : null, n(o, t, (m = P.visualElement,
                        (0,
                        s.useCallback)(t => {
                            t && A.mount && A.mount(t),
                            m && (t ? m.mount(t) : m.unmount()),
                            h && ("function" == typeof h ? h(t) : g(h) && (h.current = t))
                        }
                        , [m])), A, x, P.visualElement))
                    });
                    return h[M] = o,
                    h
                }(t(e, r))
            }
            if ("undefined" == typeof Proxy)
                return e;
            let r = new Map;
            return new Proxy(e,{
                get: (t, n) => (r.has(n) || r.set(n, e(n)),
                r.get(n))
            })
        }( (t, e) => (function(t, e, r, n) {
            let {forwardMotionProps: i=!1} = e;
            return {
                ...k(t) ? tg : tv,
                preloadedFeatures: r,
                useRender: function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return (e, r, n, i, o) => {
                        let {latestValues: a} = i
                          , l = (k(e) ? function(t, e, r, n) {
                            let i = (0,
                            s.useMemo)( () => {
                                let r = te();
                                return tt(r, e, {
                                    enableHardwareAcceleration: !1
                                }, tr(n), t.transformTemplate),
                                {
                                    ...r.attrs,
                                    style: {
                                        ...r.style
                                    }
                                }
                            }
                            , [e]);
                            if (t.style) {
                                let e = {};
                                Z(e, t.style, t),
                                i.style = {
                                    ...e,
                                    ...i.style
                                }
                            }
                            return i
                        }
                        : function(t, e, r) {
                            let n = {}
                              , i = function(t, e, r) {
                                let n = t.style || {}
                                  , i = {};
                                return Z(i, n, t),
                                Object.assign(i, function(t, e, r) {
                                    let {transformTemplate: n} = t;
                                    return (0,
                                    s.useMemo)( () => {
                                        let t = X();
                                        return $(t, e, {
                                            enableHardwareAcceleration: !r
                                        }, n),
                                        Object.assign({}, t.vars, t.style)
                                    }
                                    , [e])
                                }(t, e, r)),
                                i
                            }(t, e, r);
                            return t.drag && !1 !== t.dragListener && (n.draggable = !1,
                            i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
                            i.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")),
                            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
                            n.style = i,
                            n
                        }
                        )(r, a, o, e)
                          , u = function(t, e, r) {
                            let n = {};
                            for (let i in t)
                                ("values" !== i || "object" != typeof t.values) && (q(i) || !0 === r && Y(i) || !e && !Y(i) || t.draggable && i.startsWith("onDrag")) && (n[i] = t[i]);
                            return n
                        }(r, "string" == typeof e, t)
                          , c = e !== s.Fragment ? {
                            ...u,
                            ...l,
                            ref: n
                        } : {}
                          , {children: d} = r
                          , h = (0,
                        s.useMemo)( () => (0,
                        _.i)(d) ? d.get() : d, [d]);
                        return (0,
                        s.createElement)(e, {
                            ...c,
                            children: h
                        })
                    }
                }(i),
                createVisualElement: n,
                Component: t
            }
        }
        )(t, e, nL, nD))
    },
    9825: function(t, e, r) {
        r.d(e, {
            f: function() {
                return i
            },
            t: function() {
                return s
            }
        });
        let n = t => e => "string" == typeof e && e.startsWith(t)
          , i = n("--")
          , o = n("var(--")
          , s = t => !!o(t) && a.test(t.split("/*")[0].trim())
          , a = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i
    },
    239: function(t, e, r) {
        r.d(e, {
            c: function() {
                return n
            }
        });
        let n = {
            skipAnimations: !1,
            useManualTiming: !1
        }
    },
    9203: function(t, e, r) {
        function n(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function i(t, e) {
            let r = t.indexOf(e);
            r > -1 && t.splice(r, 1)
        }
        r.d(e, {
            cl: function() {
                return i
            },
            y4: function() {
                return n
            }
        })
    },
    5760: function(t, e, r) {
        r.d(e, {
            u: function() {
                return n
            }
        });
        let n = (t, e, r) => r > e ? e : r < t ? t : r
    },
    1299: function(t, e, r) {
        r.d(e, {
            K: function() {
                return i
            },
            k: function() {
                return o
            }
        });
        var n = r(7767);
        let i = n.Z
          , o = n.Z
    },
    726: function(t, e, r) {
        r.d(e, {
            s: function() {
                return u
            }
        });
        var n = r(1299)
          , i = r(5760)
          , o = r(5340)
          , s = r(6773)
          , a = r(7767)
          , l = r(4902);
        function u(t, e) {
            let {clamp: r=!0, ease: u, mixer: c} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , d = t.length;
            if ((0,
            n.k)(d === e.length, "Both input and output ranges must be the same length"),
            1 === d)
                return () => e[0];
            t[0] > t[d - 1] && (t = [...t].reverse(),
            e = [...e].reverse());
            let h = function(t, e, r) {
                let n = []
                  , i = r || l.C
                  , s = t.length - 1;
                for (let r = 0; r < s; r++) {
                    let s = i(t[r], t[r + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[r] || a.Z : e;
                        s = (0,
                        o.z)(t, s)
                    }
                    n.push(s)
                }
                return n
            }(e, u, c)
              , f = h.length
              , p = e => {
                let r = 0;
                if (f > 1)
                    for (; r < t.length - 2 && !(e < t[r + 1]); r++)
                        ;
                let n = (0,
                s.Y)(t[r], t[r + 1], e);
                return h[r](n)
            }
            ;
            return r ? e => p((0,
            i.u)(t[0], t[d - 1], e)) : p
        }
    },
    91: function(t, e, r) {
        r.d(e, {
            j: function() {
                return n
            }
        });
        let n = "undefined" != typeof document
    },
    4902: function(t, e, r) {
        r.d(e, {
            C: function() {
                return A
            }
        });
        var n = r(6683)
          , i = r(1299);
        function o(t, e, r) {
            return (r < 0 && (r += 1),
            r > 1 && (r -= 1),
            r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
        }
        var s = r(3460)
          , a = r(2752)
          , l = r(4466);
        let u = (t, e, r) => {
            let n = t * t
              , i = r * (e * e - n) + n;
            return i < 0 ? 0 : Math.sqrt(i)
        }
          , c = [s.$, a.m, l.J]
          , d = t => c.find(e => e.test(t));
        function h(t) {
            let e = d(t);
            (0,
            i.k)(!!e, "'".concat(t, "' is not an animatable color. Use the equivalent color code instead."));
            let r = e.parse(t);
            return e === l.J && (r = function(t) {
                let {hue: e, saturation: r, lightness: n, alpha: i} = t;
                e /= 360,
                n /= 100;
                let s = 0
                  , a = 0
                  , l = 0;
                if (r /= 100) {
                    let t = n < .5 ? n * (1 + r) : n + r - n * r
                      , i = 2 * n - t;
                    s = o(i, t, e + 1 / 3),
                    a = o(i, t, e),
                    l = o(i, t, e - 1 / 3)
                } else
                    s = a = l = n;
                return {
                    red: Math.round(255 * s),
                    green: Math.round(255 * a),
                    blue: Math.round(255 * l),
                    alpha: i
                }
            }(r)),
            r
        }
        let f = (t, e) => {
            let r = h(t)
              , i = h(e)
              , o = {
                ...r
            };
            return t => (o.red = u(r.red, i.red, t),
            o.green = u(r.green, i.green, t),
            o.blue = u(r.blue, i.blue, t),
            o.alpha = (0,
            n.t)(r.alpha, i.alpha, t),
            a.m.transform(o))
        }
        ;
        var p = r(5340)
          , m = r(4794)
          , g = r(2105)
          , v = r(9825);
        function y(t, e) {
            return r => r > 0 ? e : t
        }
        function b(t, e) {
            return r => (0,
            n.t)(t, e, r)
        }
        function x(t) {
            return "number" == typeof t ? b : "string" == typeof t ? (0,
            v.t)(t) ? y : m.$.test(t) ? f : S : Array.isArray(t) ? w : "object" == typeof t ? m.$.test(t) ? f : P : y
        }
        function w(t, e) {
            let r = [...t]
              , n = r.length
              , i = t.map( (t, r) => x(t)(t, e[r]));
            return t => {
                for (let e = 0; e < n; e++)
                    r[e] = i[e](t);
                return r
            }
        }
        function P(t, e) {
            let r = {
                ...t,
                ...e
            }
              , n = {};
            for (let i in r)
                void 0 !== t[i] && void 0 !== e[i] && (n[i] = x(t[i])(t[i], e[i]));
            return t => {
                for (let e in n)
                    r[e] = n[e](t);
                return r
            }
        }
        let S = (t, e) => {
            let r = g.P.createTransformer(e)
              , n = (0,
            g.V)(t)
              , o = (0,
            g.V)(e);
            return n.indexes.var.length === o.indexes.var.length && n.indexes.color.length === o.indexes.color.length && n.indexes.number.length >= o.indexes.number.length ? (0,
            p.z)(w(function(t, e) {
                var r;
                let n = []
                  , i = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let o = 0; o < e.values.length; o++) {
                    let s = e.types[o]
                      , a = t.indexes[s][i[s]]
                      , l = null !== (r = t.values[a]) && void 0 !== r ? r : 0;
                    n[o] = l,
                    i[s]++
                }
                return n
            }(n, o), o.values), r) : ((0,
            i.K)(!0, "Complex values '".concat(t, "' and '").concat(e, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.")),
            y(t, e))
        }
        ;
        function A(t, e, r) {
            return "number" == typeof t && "number" == typeof e && "number" == typeof r ? (0,
            n.t)(t, e, r) : x(t)(t, e)
        }
    },
    6683: function(t, e, r) {
        r.d(e, {
            t: function() {
                return n
            }
        });
        let n = (t, e, r) => t + (e - t) * r
    },
    7767: function(t, e, r) {
        r.d(e, {
            Z: function() {
                return n
            }
        });
        let n = t => t
    },
    5403: function(t, e, r) {
        r.d(e, {
            Y: function() {
                return o
            }
        });
        var n = r(6683)
          , i = r(6773);
        function o(t) {
            let e = [0];
            return !function(t, e) {
                let r = t[t.length - 1];
                for (let o = 1; o <= e; o++) {
                    let s = (0,
                    i.Y)(0, e, o);
                    t.push((0,
                    n.t)(r, 1, s))
                }
            }(e, t.length - 1),
            e
        }
    },
    5340: function(t, e, r) {
        r.d(e, {
            z: function() {
                return i
            }
        });
        let n = (t, e) => r => e(t(r))
          , i = function() {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            return e.reduce(n)
        }
    },
    6773: function(t, e, r) {
        r.d(e, {
            Y: function() {
                return n
            }
        });
        let n = (t, e, r) => {
            let n = e - t;
            return 0 === n ? 1 : (r - t) / n
        }
    },
    1657: function(t, e, r) {
        r.d(e, {
            L: function() {
                return i
            }
        });
        var n = r(9203);
        class i {
            add(t) {
                return (0,
                n.y4)(this.subscriptions, t),
                () => (0,
                n.cl)(this.subscriptions, t)
            }
            notify(t, e, r) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n)
                        this.subscriptions[0](t, e, r);
                    else
                        for (let i = 0; i < n; i++) {
                            let n = this.subscriptions[i];
                            n && n(t, e, r)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
            constructor() {
                this.subscriptions = []
            }
        }
    },
    9590: function(t, e, r) {
        r.d(e, {
            X: function() {
                return i
            },
            w: function() {
                return n
            }
        });
        let n = t => 1e3 * t
          , i = t => t / 1e3
    },
    1597: function(t, e, r) {
        r.d(e, {
            h: function() {
                return i
            }
        });
        var n = r(2820);
        function i(t) {
            let e = (0,
            n.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    679: function(t, e, r) {
        r.d(e, {
            L: function() {
                return i
            }
        });
        var n = r(2820);
        let i = r(91).j ? n.useLayoutEffect : n.useEffect
    },
    3527: function(t, e, r) {
        r.d(e, {
            R: function() {
                return n
            }
        });
        function n(t, e) {
            return e ? 1e3 / e * t : 0
        }
    },
    1006: function(t, e, r) {
        r.d(e, {
            BX: function() {
                return c
            },
            S1: function() {
                return l
            }
        });
        var n = r(1657)
          , i = r(3527)
          , o = r(4907)
          , s = r(482);
        let a = t => !isNaN(parseFloat(t))
          , l = {
            current: void 0
        };
        class u {
            setCurrent(t) {
                this.current = t,
                this.updatedAt = o.X.now()
            }
            setPrevFrameValue() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.current;
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new n.L);
                let r = this.events[t].add(e);
                return "change" === t ? () => {
                    r(),
                    s.Wi.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : r
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t) {
                let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, r) {
                this.set(e),
                this.prev = void 0,
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt - r
            }
            jump(t) {
                this.updateAndNotify(t),
                this.prev = t,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return l.current && l.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                let t = o.X.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30)
                    return 0;
                let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return (0,
                i.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
            }
            start(t) {
                return this.stop(),
                new Promise(e => {
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            constructor(t, e={}) {
                var r = this;
                this.version = "11.0.8",
                this.canTrackVelocity = !1,
                this.events = {},
                this.updateAndNotify = function(t) {
                    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1]
                      , n = o.X.now();
                    r.updatedAt !== n && r.setPrevFrameValue(),
                    r.prev = r.current,
                    r.setCurrent(t),
                    r.current !== r.prev && r.events.change && r.events.change.notify(r.current),
                    e && r.events.renderRequest && r.events.renderRequest.notify(r.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(t),
                this.canTrackVelocity = a(this.current),
                this.owner = e.owner
            }
        }
        function c(t, e) {
            return new u(t,e)
        }
    },
    3460: function(t, e, r) {
        r.d(e, {
            $: function() {
                return i
            }
        });
        var n = r(2752);
        let i = {
            test: (0,
            r(7918).i)("#"),
            parse: function(t) {
                let e = ""
                  , r = ""
                  , n = ""
                  , i = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                r = t.substring(3, 5),
                n = t.substring(5, 7),
                i = t.substring(7, 9)) : (e = t.substring(1, 2),
                r = t.substring(2, 3),
                n = t.substring(3, 4),
                i = t.substring(4, 5),
                e += e,
                r += r,
                n += n,
                i += i),
                {
                    red: parseInt(e, 16),
                    green: parseInt(r, 16),
                    blue: parseInt(n, 16),
                    alpha: i ? parseInt(i, 16) / 255 : 1
                }
            },
            transform: n.m.transform
        }
    },
    4466: function(t, e, r) {
        r.d(e, {
            J: function() {
                return a
            }
        });
        var n = r(1051)
          , i = r(5436)
          , o = r(4112)
          , s = r(7918);
        let a = {
            test: (0,
            s.i)("hsl", "hue"),
            parse: (0,
            s.d)("hue", "saturation", "lightness"),
            transform: t => {
                let {hue: e, saturation: r, lightness: s, alpha: a=1} = t;
                return "hsla(" + Math.round(e) + ", " + i.aQ.transform((0,
                o.Nw)(r)) + ", " + i.aQ.transform((0,
                o.Nw)(s)) + ", " + (0,
                o.Nw)(n.Fq.transform(a)) + ")"
            }
        }
    },
    4794: function(t, e, r) {
        r.d(e, {
            $: function() {
                return a
            }
        });
        var n = r(4112)
          , i = r(3460)
          , o = r(4466)
          , s = r(2752);
        let a = {
            test: t => s.m.test(t) || i.$.test(t) || o.J.test(t),
            parse: t => s.m.test(t) ? s.m.parse(t) : o.J.test(t) ? o.J.parse(t) : i.$.parse(t),
            transform: t => (0,
            n.HD)(t) ? t : t.hasOwnProperty("red") ? s.m.transform(t) : o.J.transform(t)
        }
    },
    2752: function(t, e, r) {
        r.d(e, {
            m: function() {
                return u
            }
        });
        var n = r(5760)
          , i = r(1051)
          , o = r(4112)
          , s = r(7918);
        let a = t => (0,
        n.u)(0, 255, t)
          , l = {
            ...i.Rx,
            transform: t => Math.round(a(t))
        }
          , u = {
            test: (0,
            s.i)("rgb", "red"),
            parse: (0,
            s.d)("red", "green", "blue"),
            transform: t => {
                let {red: e, green: r, blue: n, alpha: s=1} = t;
                return "rgba(" + l.transform(e) + ", " + l.transform(r) + ", " + l.transform(n) + ", " + (0,
                o.Nw)(i.Fq.transform(s)) + ")"
            }
        }
    },
    7918: function(t, e, r) {
        r.d(e, {
            d: function() {
                return o
            },
            i: function() {
                return i
            }
        });
        var n = r(4112);
        let i = (t, e) => r => !!((0,
        n.HD)(r) && n.mj.test(r) && r.startsWith(t) || e && Object.prototype.hasOwnProperty.call(r, e))
          , o = (t, e, r) => i => {
            if (!(0,
            n.HD)(i))
                return i;
            let[o,s,a,l] = i.match(n.KP);
            return {
                [t]: parseFloat(o),
                [e]: parseFloat(s),
                [r]: parseFloat(a),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        }
    },
    2105: function(t, e, r) {
        r.d(e, {
            P: function() {
                return h
            },
            V: function() {
                return l
            }
        });
        var n = r(4794)
          , i = r(4112);
        let o = "number"
          , s = "color"
          , a = /(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;
        function l(t) {
            let e = t.toString()
              , r = e.match(a) || []
              , i = []
              , l = {
                color: [],
                number: [],
                var: []
            }
              , u = [];
            for (let t = 0; t < r.length; t++) {
                let e = r[t];
                n.$.test(e) ? (l.color.push(t),
                u.push(s),
                i.push(n.$.parse(e))) : e.startsWith("var(") ? (l.var.push(t),
                u.push("var"),
                i.push(e)) : (l.number.push(t),
                u.push(o),
                i.push(parseFloat(e)))
            }
            return {
                values: i,
                split: e.replace(a, "${}").split("${}"),
                indexes: l,
                types: u
            }
        }
        function u(t) {
            return l(t).values
        }
        function c(t) {
            let {split: e, types: r} = l(t)
              , a = e.length;
            return t => {
                let l = "";
                for (let u = 0; u < a; u++)
                    if (l += e[u],
                    void 0 !== t[u]) {
                        let e = r[u];
                        e === o ? l += (0,
                        i.Nw)(t[u]) : e === s ? l += n.$.transform(t[u]) : l += t[u]
                    }
                return l
            }
        }
        let d = t => "number" == typeof t ? 0 : t
          , h = {
            test: function(t) {
                var e, r;
                return isNaN(t) && (0,
                i.HD)(t) && ((null === (e = t.match(i.KP)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (r = t.match(i.dA)) || void 0 === r ? void 0 : r.length) || 0) > 0
            },
            parse: u,
            createTransformer: c,
            getAnimatableNone: function(t) {
                let e = u(t);
                return c(t)(e.map(d))
            }
        }
    },
    1051: function(t, e, r) {
        r.d(e, {
            Fq: function() {
                return o
            },
            Rx: function() {
                return i
            },
            bA: function() {
                return s
            }
        });
        var n = r(5760);
        let i = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , o = {
            ...i,
            transform: t => (0,
            n.u)(0, 1, t)
        }
          , s = {
            ...i,
            default: 1
        }
    },
    5436: function(t, e, r) {
        r.d(e, {
            $C: function() {
                return c
            },
            RW: function() {
                return o
            },
            aQ: function() {
                return s
            },
            px: function() {
                return a
            },
            vh: function() {
                return l
            },
            vw: function() {
                return u
            }
        });
        var n = r(4112);
        let i = t => ({
            test: e => (0,
            n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => "".concat(e).concat(t)
        })
          , o = i("deg")
          , s = i("%")
          , a = i("px")
          , l = i("vh")
          , u = i("vw")
          , c = {
            ...s,
            parse: t => s.parse(t) / 100,
            transform: t => s.transform(100 * t)
        }
    },
    4112: function(t, e, r) {
        r.d(e, {
            HD: function() {
                return a
            },
            KP: function() {
                return i
            },
            Nw: function() {
                return n
            },
            dA: function() {
                return o
            },
            mj: function() {
                return s
            }
        });
        let n = t => Math.round(1e5 * t) / 1e5
          , i = /(-)?([\d]*\.?[\d])+/g
          , o = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
          , s = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
        function a(t) {
            return "string" == typeof t
        }
    },
    4102: function(t, e, r) {
        r.d(e, {
            i: function() {
                return n
            }
        });
        let n = t => !!(t && t.getVelocity)
    },
    9993: function(t, e, r) {
        r.d(e, {
            m6: function() {
                return _
            }
        });
        let n = /^\[(.+)\]$/;
        function i(t, e) {
            let r = t;
            return e.split("-").forEach(t => {
                r.nextPart.has(t) || r.nextPart.set(t, {
                    nextPart: new Map,
                    validators: []
                }),
                r = r.nextPart.get(t)
            }
            ),
            r
        }
        let o = /\s+/;
        function s() {
            let t, e, r = 0, n = "";
            for (; r < arguments.length; )
                (t = arguments[r++]) && (e = function t(e) {
                    let r;
                    if ("string" == typeof e)
                        return e;
                    let n = "";
                    for (let i = 0; i < e.length; i++)
                        e[i] && (r = t(e[i])) && (n && (n += " "),
                        n += r);
                    return n
                }(t)) && (n && (n += " "),
                n += e);
            return n
        }
        function a(t) {
            let e = e => e[t] || [];
            return e.isThemeGetter = !0,
            e
        }
        let l = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , u = /^\d+\/\d+$/
          , c = new Set(["px", "full", "screen"])
          , d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , h = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , f = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
          , p = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , m = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
        function g(t) {
            return y(t) || c.has(t) || u.test(t)
        }
        function v(t) {
            return k(t, "length", V)
        }
        function y(t) {
            return !!t && !Number.isNaN(Number(t))
        }
        function b(t) {
            return k(t, "number", y)
        }
        function x(t) {
            return !!t && Number.isInteger(Number(t))
        }
        function w(t) {
            return t.endsWith("%") && y(t.slice(0, -1))
        }
        function P(t) {
            return l.test(t)
        }
        function S(t) {
            return d.test(t)
        }
        let A = new Set(["length", "size", "percentage"]);
        function E(t) {
            return k(t, A, O)
        }
        function C(t) {
            return k(t, "position", O)
        }
        let j = new Set(["image", "url"]);
        function T(t) {
            return k(t, j, L)
        }
        function M(t) {
            return k(t, "", D)
        }
        function R() {
            return !0
        }
        function k(t, e, r) {
            let n = l.exec(t);
            return !!n && (n[1] ? "string" == typeof e ? n[1] === e : e.has(n[1]) : r(n[2]))
        }
        function V(t) {
            return h.test(t) && !f.test(t)
        }
        function O() {
            return !1
        }
        function D(t) {
            return p.test(t)
        }
        function L(t) {
            return m.test(t)
        }
        let _ = function(t) {
            let e, r, a;
            for (var l = arguments.length, u = Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
                u[c - 1] = arguments[c];
            let d = function(o) {
                var s;
                return r = (e = {
                    cache: function(t) {
                        if (t < 1)
                            return {
                                get: () => void 0,
                                set: () => {}
                            };
                        let e = 0
                          , r = new Map
                          , n = new Map;
                        function i(i, o) {
                            r.set(i, o),
                            ++e > t && (e = 0,
                            n = r,
                            r = new Map)
                        }
                        return {
                            get(t) {
                                let e = r.get(t);
                                return void 0 !== e ? e : void 0 !== (e = n.get(t)) ? (i(t, e),
                                e) : void 0
                            },
                            set(t, e) {
                                r.has(t) ? r.set(t, e) : i(t, e)
                            }
                        }
                    }((s = u.reduce( (t, e) => e(t), t())).cacheSize),
                    splitModifiers: function(t) {
                        let e = t.separator
                          , r = 1 === e.length
                          , n = e[0]
                          , i = e.length;
                        return function(t) {
                            let o;
                            let s = []
                              , a = 0
                              , l = 0;
                            for (let u = 0; u < t.length; u++) {
                                let c = t[u];
                                if (0 === a) {
                                    if (c === n && (r || t.slice(u, u + i) === e)) {
                                        s.push(t.slice(l, u)),
                                        l = u + i;
                                        continue
                                    }
                                    if ("/" === c) {
                                        o = u;
                                        continue
                                    }
                                }
                                "[" === c ? a++ : "]" === c && a--
                            }
                            let u = 0 === s.length ? t : t.substring(l)
                              , c = u.startsWith("!")
                              , d = c ? u.substring(1) : u;
                            return {
                                modifiers: s,
                                hasImportantModifier: c,
                                baseClassName: d,
                                maybePostfixModifierPosition: o && o > l ? o - l : void 0
                            }
                        }
                    }(s),
                    ...function(t) {
                        let e = function(t) {
                            var e;
                            let {theme: r, prefix: n} = t
                              , o = {
                                nextPart: new Map,
                                validators: []
                            };
                            return (e = Object.entries(t.classGroups),
                            n ? e.map(t => {
                                let[e,r] = t;
                                return [e, r.map(t => "string" == typeof t ? n + t : "object" == typeof t ? Object.fromEntries(Object.entries(t).map(t => {
                                    let[e,r] = t;
                                    return [n + e, r]
                                }
                                )) : t)]
                            }
                            ) : e).forEach(t => {
                                let[e,n] = t;
                                (function t(e, r, n, o) {
                                    e.forEach(e => {
                                        if ("string" == typeof e) {
                                            ("" === e ? r : i(r, e)).classGroupId = n;
                                            return
                                        }
                                        if ("function" == typeof e) {
                                            if (e.isThemeGetter) {
                                                t(e(o), r, n, o);
                                                return
                                            }
                                            r.validators.push({
                                                validator: e,
                                                classGroupId: n
                                            });
                                            return
                                        }
                                        Object.entries(e).forEach(e => {
                                            let[s,a] = e;
                                            t(a, i(r, s), n, o)
                                        }
                                        )
                                    }
                                    )
                                }
                                )(n, o, e, r)
                            }
                            ),
                            o
                        }(t)
                          , {conflictingClassGroups: r, conflictingClassGroupModifiers: o} = t;
                        return {
                            getClassGroupId: function(t) {
                                let r = t.split("-");
                                return "" === r[0] && 1 !== r.length && r.shift(),
                                function t(e, r) {
                                    var n;
                                    if (0 === e.length)
                                        return r.classGroupId;
                                    let i = e[0]
                                      , o = r.nextPart.get(i)
                                      , s = o ? t(e.slice(1), o) : void 0;
                                    if (s)
                                        return s;
                                    if (0 === r.validators.length)
                                        return;
                                    let a = e.join("-");
                                    return null === (n = r.validators.find(t => {
                                        let {validator: e} = t;
                                        return e(a)
                                    }
                                    )) || void 0 === n ? void 0 : n.classGroupId
                                }(r, e) || function(t) {
                                    if (n.test(t)) {
                                        let e = n.exec(t)[1]
                                          , r = null == e ? void 0 : e.substring(0, e.indexOf(":"));
                                        if (r)
                                            return "arbitrary.." + r
                                    }
                                }(t)
                            },
                            getConflictingClassGroupIds: function(t, e) {
                                let n = r[t] || [];
                                return e && o[t] ? [...n, ...o[t]] : n
                            }
                        }
                    }(s)
                }).cache.get,
                a = e.cache.set,
                d = h,
                h(o)
            };
            function h(t) {
                let n = r(t);
                if (n)
                    return n;
                let i = function(t, e) {
                    let {splitModifiers: r, getClassGroupId: n, getConflictingClassGroupIds: i} = e
                      , s = new Set;
                    return t.trim().split(o).map(t => {
                        let {modifiers: e, hasImportantModifier: i, baseClassName: o, maybePostfixModifierPosition: s} = r(t)
                          , a = n(s ? o.substring(0, s) : o)
                          , l = !!s;
                        if (!a) {
                            if (!s || !(a = n(o)))
                                return {
                                    isTailwindClass: !1,
                                    originalClassName: t
                                };
                            l = !1
                        }
                        let u = (function(t) {
                            if (t.length <= 1)
                                return t;
                            let e = []
                              , r = [];
                            return t.forEach(t => {
                                "[" === t[0] ? (e.push(...r.sort(), t),
                                r = []) : r.push(t)
                            }
                            ),
                            e.push(...r.sort()),
                            e
                        }
                        )(e).join(":");
                        return {
                            isTailwindClass: !0,
                            modifierId: i ? u + "!" : u,
                            classGroupId: a,
                            originalClassName: t,
                            hasPostfixModifier: l
                        }
                    }
                    ).reverse().filter(t => {
                        if (!t.isTailwindClass)
                            return !0;
                        let {modifierId: e, classGroupId: r, hasPostfixModifier: n} = t
                          , o = e + r;
                        return !s.has(o) && (s.add(o),
                        i(r, n).forEach(t => s.add(e + t)),
                        !0)
                    }
                    ).reverse().map(t => t.originalClassName).join(" ")
                }(t, e);
                return a(t, i),
                i
            }
            return function() {
                return d(s.apply(null, arguments))
            }
        }(function() {
            let t = a("colors")
              , e = a("spacing")
              , r = a("blur")
              , n = a("brightness")
              , i = a("borderColor")
              , o = a("borderRadius")
              , s = a("borderSpacing")
              , l = a("borderWidth")
              , u = a("contrast")
              , c = a("grayscale")
              , d = a("hueRotate")
              , h = a("invert")
              , f = a("gap")
              , p = a("gradientColorStops")
              , m = a("gradientColorStopPositions")
              , A = a("inset")
              , j = a("margin")
              , k = a("opacity")
              , V = a("padding")
              , O = a("saturate")
              , D = a("scale")
              , L = a("sepia")
              , _ = a("skew")
              , F = a("space")
              , I = a("translate")
              , B = () => ["auto", "contain", "none"]
              , N = () => ["auto", "hidden", "clip", "visible", "scroll"]
              , z = () => ["auto", P, e]
              , W = () => [P, e]
              , U = () => ["", g, v]
              , H = () => ["auto", y, P]
              , $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , X = () => ["solid", "dashed", "dotted", "double", "none"]
              , Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
              , G = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
              , Y = () => ["", "0", P]
              , q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , K = () => [y, b]
              , Q = () => [y, P];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [R],
                    spacing: [g, v],
                    blur: ["none", "", S, P],
                    brightness: K(),
                    borderColor: [t],
                    borderRadius: ["none", "", "full", S, P],
                    borderSpacing: W(),
                    borderWidth: U(),
                    contrast: K(),
                    grayscale: Y(),
                    hueRotate: Q(),
                    invert: Y(),
                    gap: W(),
                    gradientColorStops: [t],
                    gradientColorStopPositions: [w, v],
                    inset: z(),
                    margin: z(),
                    opacity: K(),
                    padding: W(),
                    saturate: K(),
                    scale: K(),
                    sepia: Y(),
                    skew: Q(),
                    space: W(),
                    translate: W()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", P]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [S]
                    }],
                    "break-after": [{
                        "break-after": q()
                    }],
                    "break-before": [{
                        "break-before": q()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...$(), P]
                    }],
                    overflow: [{
                        overflow: N()
                    }],
                    "overflow-x": [{
                        "overflow-x": N()
                    }],
                    "overflow-y": [{
                        "overflow-y": N()
                    }],
                    overscroll: [{
                        overscroll: B()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": B()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": B()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [A]
                    }],
                    "inset-x": [{
                        "inset-x": [A]
                    }],
                    "inset-y": [{
                        "inset-y": [A]
                    }],
                    start: [{
                        start: [A]
                    }],
                    end: [{
                        end: [A]
                    }],
                    top: [{
                        top: [A]
                    }],
                    right: [{
                        right: [A]
                    }],
                    bottom: [{
                        bottom: [A]
                    }],
                    left: [{
                        left: [A]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", x, P]
                    }],
                    basis: [{
                        basis: z()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", P]
                    }],
                    grow: [{
                        grow: Y()
                    }],
                    shrink: [{
                        shrink: Y()
                    }],
                    order: [{
                        order: ["first", "last", "none", x, P]
                    }],
                    "grid-cols": [{
                        "grid-cols": [R]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", x, P]
                        }, P]
                    }],
                    "col-start": [{
                        "col-start": H()
                    }],
                    "col-end": [{
                        "col-end": H()
                    }],
                    "grid-rows": [{
                        "grid-rows": [R]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [x, P]
                        }, P]
                    }],
                    "row-start": [{
                        "row-start": H()
                    }],
                    "row-end": [{
                        "row-end": H()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", P]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", P]
                    }],
                    gap: [{
                        gap: [f]
                    }],
                    "gap-x": [{
                        "gap-x": [f]
                    }],
                    "gap-y": [{
                        "gap-y": [f]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...G()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...G(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...G(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [V]
                    }],
                    px: [{
                        px: [V]
                    }],
                    py: [{
                        py: [V]
                    }],
                    ps: [{
                        ps: [V]
                    }],
                    pe: [{
                        pe: [V]
                    }],
                    pt: [{
                        pt: [V]
                    }],
                    pr: [{
                        pr: [V]
                    }],
                    pb: [{
                        pb: [V]
                    }],
                    pl: [{
                        pl: [V]
                    }],
                    m: [{
                        m: [j]
                    }],
                    mx: [{
                        mx: [j]
                    }],
                    my: [{
                        my: [j]
                    }],
                    ms: [{
                        ms: [j]
                    }],
                    me: [{
                        me: [j]
                    }],
                    mt: [{
                        mt: [j]
                    }],
                    mr: [{
                        mr: [j]
                    }],
                    mb: [{
                        mb: [j]
                    }],
                    ml: [{
                        ml: [j]
                    }],
                    "space-x": [{
                        "space-x": [F]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [F]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", P, e]
                    }],
                    "min-w": [{
                        "min-w": [P, e, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [P, e, "none", "full", "min", "max", "fit", "prose", {
                            screen: [S]
                        }, S]
                    }],
                    h: [{
                        h: [P, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [P, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [P, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [P, e, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", S, v]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", b]
                    }],
                    "font-family": [{
                        font: [R]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", P]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", y, b]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", g, P]
                    }],
                    "list-image": [{
                        "list-image": ["none", P]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", P]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [t]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [k]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [t]
                    }],
                    "text-opacity": [{
                        "text-opacity": [k]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...X(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", g, v]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", g, P]
                    }],
                    "text-decoration-color": [{
                        decoration: [t]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: W()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", P]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", P]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [k]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...$(), C]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", E]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, T]
                    }],
                    "bg-color": [{
                        bg: [t]
                    }],
                    "gradient-from-pos": [{
                        from: [m]
                    }],
                    "gradient-via-pos": [{
                        via: [m]
                    }],
                    "gradient-to-pos": [{
                        to: [m]
                    }],
                    "gradient-from": [{
                        from: [p]
                    }],
                    "gradient-via": [{
                        via: [p]
                    }],
                    "gradient-to": [{
                        to: [p]
                    }],
                    rounded: [{
                        rounded: [o]
                    }],
                    "rounded-s": [{
                        "rounded-s": [o]
                    }],
                    "rounded-e": [{
                        "rounded-e": [o]
                    }],
                    "rounded-t": [{
                        "rounded-t": [o]
                    }],
                    "rounded-r": [{
                        "rounded-r": [o]
                    }],
                    "rounded-b": [{
                        "rounded-b": [o]
                    }],
                    "rounded-l": [{
                        "rounded-l": [o]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [o]
                    }],
                    "rounded-se": [{
                        "rounded-se": [o]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [o]
                    }],
                    "rounded-es": [{
                        "rounded-es": [o]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [o]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [o]
                    }],
                    "rounded-br": [{
                        "rounded-br": [o]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [o]
                    }],
                    "border-w": [{
                        border: [l]
                    }],
                    "border-w-x": [{
                        "border-x": [l]
                    }],
                    "border-w-y": [{
                        "border-y": [l]
                    }],
                    "border-w-s": [{
                        "border-s": [l]
                    }],
                    "border-w-e": [{
                        "border-e": [l]
                    }],
                    "border-w-t": [{
                        "border-t": [l]
                    }],
                    "border-w-r": [{
                        "border-r": [l]
                    }],
                    "border-w-b": [{
                        "border-b": [l]
                    }],
                    "border-w-l": [{
                        "border-l": [l]
                    }],
                    "border-opacity": [{
                        "border-opacity": [k]
                    }],
                    "border-style": [{
                        border: [...X(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [l]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [l]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [k]
                    }],
                    "divide-style": [{
                        divide: X()
                    }],
                    "border-color": [{
                        border: [i]
                    }],
                    "border-color-x": [{
                        "border-x": [i]
                    }],
                    "border-color-y": [{
                        "border-y": [i]
                    }],
                    "border-color-t": [{
                        "border-t": [i]
                    }],
                    "border-color-r": [{
                        "border-r": [i]
                    }],
                    "border-color-b": [{
                        "border-b": [i]
                    }],
                    "border-color-l": [{
                        "border-l": [i]
                    }],
                    "divide-color": [{
                        divide: [i]
                    }],
                    "outline-style": [{
                        outline: ["", ...X()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [g, P]
                    }],
                    "outline-w": [{
                        outline: [g, v]
                    }],
                    "outline-color": [{
                        outline: [t]
                    }],
                    "ring-w": [{
                        ring: U()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [t]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [k]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [g, v]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [t]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", S, M]
                    }],
                    "shadow-color": [{
                        shadow: [R]
                    }],
                    opacity: [{
                        opacity: [k]
                    }],
                    "mix-blend": [{
                        "mix-blend": Z()
                    }],
                    "bg-blend": [{
                        "bg-blend": Z()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [r]
                    }],
                    brightness: [{
                        brightness: [n]
                    }],
                    contrast: [{
                        contrast: [u]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", S, P]
                    }],
                    grayscale: [{
                        grayscale: [c]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [d]
                    }],
                    invert: [{
                        invert: [h]
                    }],
                    saturate: [{
                        saturate: [O]
                    }],
                    sepia: [{
                        sepia: [L]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [r]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [n]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [u]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [c]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [d]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [h]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [k]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [O]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [L]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [s]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [s]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [s]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", P]
                    }],
                    duration: [{
                        duration: Q()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", P]
                    }],
                    delay: [{
                        delay: Q()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", P]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [D]
                    }],
                    "scale-x": [{
                        "scale-x": [D]
                    }],
                    "scale-y": [{
                        "scale-y": [D]
                    }],
                    rotate: [{
                        rotate: [x, P]
                    }],
                    "translate-x": [{
                        "translate-x": [I]
                    }],
                    "translate-y": [{
                        "translate-y": [I]
                    }],
                    "skew-x": [{
                        "skew-x": [_]
                    }],
                    "skew-y": [{
                        "skew-y": [_]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", P]
                    }],
                    accent: [{
                        accent: ["auto", t]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", P]
                    }],
                    "caret-color": [{
                        caret: [t]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": W()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": W()
                    }],
                    "scroll-my": [{
                        "scroll-my": W()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": W()
                    }],
                    "scroll-me": [{
                        "scroll-me": W()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": W()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": W()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": W()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": W()
                    }],
                    "scroll-p": [{
                        "scroll-p": W()
                    }],
                    "scroll-px": [{
                        "scroll-px": W()
                    }],
                    "scroll-py": [{
                        "scroll-py": W()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": W()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": W()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": W()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": W()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": W()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": W()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", P]
                    }],
                    fill: [{
                        fill: [t, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [g, v, b]
                    }],
                    stroke: [{
                        stroke: [t, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        })
    }
}]);
