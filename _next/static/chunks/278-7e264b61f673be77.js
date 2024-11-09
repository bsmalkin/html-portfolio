"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[278], {
    9323: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var r = n(2820)
          , o = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        /**
 * @license lucide-react v0.343.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let i = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
          , l = (e, t) => {
            let n = (0,
            r.forwardRef)( (n, l) => {
                let {color: a="currentColor", size: c=24, strokeWidth: u=2, absoluteStrokeWidth: s, className: d="", children: f, ...p} = n;
                return (0,
                r.createElement)("svg", {
                    ref: l,
                    ...o,
                    width: c,
                    height: c,
                    stroke: a,
                    strokeWidth: s ? 24 * Number(u) / Number(c) : u,
                    className: ["lucide", "lucide-".concat(i(e)), d].join(" "),
                    ...p
                }, [...t.map(e => {
                    let[t,n] = e;
                    return (0,
                    r.createElement)(t, n)
                }
                ), ...Array.isArray(f) ? f : [f]])
            }
            );
            return n.displayName = "".concat(e),
            n
        }
    },
    3015: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.343.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(9323).Z)("Check", [["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]])
    },
    5754: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.343.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(9323).Z)("ChevronRight", [["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]])
    },
    7971: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.343.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(9323).Z)("Circle", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]])
    },
    5791: function(e, t, n) {
        n.d(t, {
            F: function() {
                return c
            },
            f: function() {
                return u
            }
        });
        var r = n(2820);
        let o = ["light", "dark"]
          , i = "(prefers-color-scheme: dark)"
          , l = (0,
        r.createContext)(void 0)
          , a = {
            setTheme: e => {}
            ,
            themes: []
        }
          , c = () => {
            var e;
            return null !== (e = (0,
            r.useContext)(l)) && void 0 !== e ? e : a
        }
          , u = e => (0,
        r.useContext)(l) ? r.createElement(r.Fragment, null, e.children) : r.createElement(d, e)
          , s = ["light", "dark"]
          , d = e => {
            let {forcedTheme: t, disableTransitionOnChange: n=!1, enableSystem: a=!0, enableColorScheme: c=!0, storageKey: u="theme", themes: d=s, defaultTheme: v=a ? "system" : "light", attribute: g="data-theme", value: w, children: y, nonce: b} = e
              , [E,x] = (0,
            r.useState)( () => p(u, v))
              , [C,R] = (0,
            r.useState)( () => p(u))
              , S = w ? Object.values(w) : d
              , T = (0,
            r.useCallback)(e => {
                let t = e;
                if (!t)
                    return;
                "system" === e && a && (t = h());
                let r = w ? w[t] : t
                  , i = n ? m() : null
                  , l = document.documentElement;
                if ("class" === g ? (l.classList.remove(...S),
                r && l.classList.add(r)) : r ? l.setAttribute(g, r) : l.removeAttribute(g),
                c) {
                    let e = o.includes(v) ? v : null
                      , n = o.includes(t) ? t : e;
                    l.style.colorScheme = n
                }
                null == i || i()
            }
            , [])
              , M = (0,
            r.useCallback)(e => {
                x(e);
                try {
                    localStorage.setItem(u, e)
                } catch (e) {}
            }
            , [t])
              , _ = (0,
            r.useCallback)(e => {
                R(h(e)),
                "system" === E && a && !t && T("system")
            }
            , [E, t]);
            (0,
            r.useEffect)( () => {
                let e = window.matchMedia(i);
                return e.addListener(_),
                _(e),
                () => e.removeListener(_)
            }
            , [_]),
            (0,
            r.useEffect)( () => {
                let e = e => {
                    e.key === u && M(e.newValue || v)
                }
                ;
                return window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
            }
            , [M]),
            (0,
            r.useEffect)( () => {
                T(null != t ? t : E)
            }
            , [t, E]);
            let k = (0,
            r.useMemo)( () => ({
                theme: E,
                setTheme: M,
                forcedTheme: t,
                resolvedTheme: "system" === E ? C : E,
                themes: a ? [...d, "system"] : d,
                systemTheme: a ? C : void 0
            }), [E, M, t, C, a, d]);
            return r.createElement(l.Provider, {
                value: k
            }, r.createElement(f, {
                forcedTheme: t,
                disableTransitionOnChange: n,
                enableSystem: a,
                enableColorScheme: c,
                storageKey: u,
                themes: d,
                defaultTheme: v,
                attribute: g,
                value: w,
                children: y,
                attrs: S,
                nonce: b
            }), y)
        }
          , f = (0,
        r.memo)(e => {
            let {forcedTheme: t, storageKey: n, attribute: l, enableSystem: a, enableColorScheme: c, defaultTheme: u, value: s, attrs: d, nonce: f} = e
              , p = "system" === u
              , m = "class" === l ? "var d=document.documentElement,c=d.classList;c.remove(".concat(d.map(e => "'".concat(e, "'")).join(","), ");") : "var d=document.documentElement,n='".concat(l, "',s='setAttribute';")
              , h = c ? o.includes(u) && u ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(u, "'") : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
              , v = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2]
                  , r = s ? s[e] : e
                  , i = t ? e + "|| ''" : "'".concat(r, "'")
                  , a = "";
                return c && n && !t && o.includes(e) && (a += "d.style.colorScheme = '".concat(e, "';")),
                "class" === l ? a += t || r ? "c.add(".concat(i, ")") : "null" : r && (a += "d[s](n,".concat(i, ")")),
                a
            }
              , g = t ? "!function(){".concat(m).concat(v(t), "}()") : a ? "!function(){try{".concat(m, "var e=localStorage.getItem('").concat(n, "');if('system'===e||(!e&&").concat(p, ")){var t='").concat(i, "',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"), "}else{").concat(v("light"), "}}else if(e){").concat(s ? "var x=".concat(JSON.stringify(s), ";") : "").concat(v(s ? "x[e]" : "e", !0), "}").concat(p ? "" : "else{" + v(u, !1, !1) + "}").concat(h, "}catch(e){}}()") : "!function(){try{".concat(m, "var e=localStorage.getItem('").concat(n, "');if(e){").concat(s ? "var x=".concat(JSON.stringify(s), ";") : "").concat(v(s ? "x[e]" : "e", !0), "}else{").concat(v(u, !1, !1), ";}").concat(h, "}catch(t){}}();");
            return r.createElement("script", {
                nonce: f,
                dangerouslySetInnerHTML: {
                    __html: g
                }
            })
        }
        , () => !0)
          , p = (e, t) => {
            let n;
            try {
                n = localStorage.getItem(e) || void 0
            } catch (e) {}
            return n || t
        }
          , m = () => {
            let e = document.createElement("style");
            return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
            document.head.appendChild(e),
            () => {
                window.getComputedStyle(document.body),
                setTimeout( () => {
                    document.head.removeChild(e)
                }
                , 1)
            }
        }
          , h = e => (e || (e = window.matchMedia(i)),
        e.matches ? "dark" : "light")
    },
    9664: function(e, t, n) {
        let r, o;
        n.d(t, {
            oC: function() {
                return ry
            },
            VY: function() {
                return rh
            },
            ZA: function() {
                return rv
            },
            ck: function() {
                return rw
            },
            wU: function() {
                return rx
            },
            __: function() {
                return rg
            },
            Uv: function() {
                return rm
            },
            Ee: function() {
                return rb
            },
            Rk: function() {
                return rE
            },
            fC: function() {
                return rf
            },
            Z0: function() {
                return rC
            },
            Tr: function() {
                return rR
            },
            tu: function() {
                return rT
            },
            fF: function() {
                return rS
            },
            xz: function() {
                return rp
            }
        });
        var i, l, a, c, u, s, d = n(1138), f = n(2820), p = n.t(f, 2);
        function m(e, t) {
            let {checkForDefaultPrevented: n=!0} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return function(r) {
                if (null == e || e(r),
                !1 === n || !r.defaultPrevented)
                    return null == t ? void 0 : t(r)
            }
        }
        var h = n(7133);
        function v(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , n = []
              , r = () => {
                let t = n.map(e => (0,
                f.createContext)(e));
                return function(n) {
                    let r = (null == n ? void 0 : n[e]) || t;
                    return (0,
                    f.useMemo)( () => ({
                        ["__scope".concat(e)]: {
                            ...n,
                            [e]: r
                        }
                    }), [n, r])
                }
            }
            ;
            return r.scopeName = e,
            [function(t, r) {
                let o = (0,
                f.createContext)(r)
                  , i = n.length;
                function l(t) {
                    let {scope: n, children: r, ...l} = t
                      , a = (null == n ? void 0 : n[e][i]) || o
                      , c = (0,
                    f.useMemo)( () => l, Object.values(l));
                    return (0,
                    f.createElement)(a.Provider, {
                        value: c
                    }, r)
                }
                return n = [...n, r],
                l.displayName = t + "Provider",
                [l, function(n, l) {
                    let a = (null == l ? void 0 : l[e][i]) || o
                      , c = (0,
                    f.useContext)(a);
                    if (c)
                        return c;
                    if (void 0 !== r)
                        return r;
                    throw Error("`".concat(n, "` must be used within `").concat(t, "`"))
                }
                ]
            }
            , function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                let r = t[0];
                if (1 === t.length)
                    return r;
                let o = () => {
                    let e = t.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(t) {
                        let n = e.reduce( (e, n) => {
                            let {useScope: r, scopeName: o} = n
                              , i = r(t)["__scope".concat(o)];
                            return {
                                ...e,
                                ...i
                            }
                        }
                        , {});
                        return (0,
                        f.useMemo)( () => ({
                            ["__scope".concat(r.scopeName)]: n
                        }), [n])
                    }
                }
                ;
                return o.scopeName = r.scopeName,
                o
            }(r, ...t)]
        }
        function g(e) {
            let t = (0,
            f.useRef)(e);
            return (0,
            f.useEffect)( () => {
                t.current = e
            }
            ),
            (0,
            f.useMemo)( () => function() {
                for (var e, n = arguments.length, r = Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return null === (e = t.current) || void 0 === e ? void 0 : e.call(t, ...r)
            }
            , [])
        }
        function w(e) {
            let {prop: t, defaultProp: n, onChange: r= () => {}
            } = e
              , [o,i] = function(e) {
                let {defaultProp: t, onChange: n} = e
                  , r = (0,
                f.useState)(t)
                  , [o] = r
                  , i = (0,
                f.useRef)(o)
                  , l = g(n);
                return (0,
                f.useEffect)( () => {
                    i.current !== o && (l(o),
                    i.current = o)
                }
                , [o, i, l]),
                r
            }({
                defaultProp: n,
                onChange: r
            })
              , l = void 0 !== t
              , a = l ? t : o
              , c = g(r);
            return [a, (0,
            f.useCallback)(e => {
                if (l) {
                    let n = "function" == typeof e ? e(t) : e;
                    n !== t && c(n)
                } else
                    i(e)
            }
            , [l, t, i, c])]
        }
        var y = n(832)
          , b = n(3539);
        function E(e) {
            let t = e + "CollectionProvider"
              , [n,r] = v(t)
              , [o,i] = n(t, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            })
              , l = e + "CollectionSlot"
              , a = f.forwardRef( (e, t) => {
                let {scope: n, children: r} = e
                  , o = i(l, n)
                  , a = (0,
                h.e)(t, o.collectionRef);
                return f.createElement(b.g7, {
                    ref: a
                }, r)
            }
            )
              , c = e + "CollectionItemSlot"
              , u = "data-radix-collection-item";
            return [{
                Provider: e => {
                    let {scope: t, children: n} = e
                      , r = f.useRef(null)
                      , i = f.useRef(new Map).current;
                    return f.createElement(o, {
                        scope: t,
                        itemMap: i,
                        collectionRef: r
                    }, n)
                }
                ,
                Slot: a,
                ItemSlot: f.forwardRef( (e, t) => {
                    let {scope: n, children: r, ...o} = e
                      , l = f.useRef(null)
                      , a = (0,
                    h.e)(t, l)
                      , s = i(c, n);
                    return f.useEffect( () => (s.itemMap.set(l, {
                        ref: l,
                        ...o
                    }),
                    () => void s.itemMap.delete(l))),
                    f.createElement(b.g7, {
                        [u]: "",
                        ref: a
                    }, r)
                }
                )
            }, function(t) {
                let n = i(e + "CollectionConsumer", t);
                return f.useCallback( () => {
                    let e = n.collectionRef.current;
                    if (!e)
                        return [];
                    let t = Array.from(e.querySelectorAll("[".concat(u, "]")));
                    return Array.from(n.itemMap.values()).sort( (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                }
                , [n.collectionRef, n.itemMap])
            }
            , r]
        }
        let x = (0,
        f.createContext)(void 0);
        function C(e) {
            let t = (0,
            f.useContext)(x);
            return e || t || "ltr"
        }
        let R = "dismissableLayer.update"
          , S = (0,
        f.createContext)({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        })
          , T = (0,
        f.forwardRef)( (e, t) => {
            var n;
            let {disableOutsidePointerEvents: o=!1, onEscapeKeyDown: i, onPointerDownOutside: l, onFocusOutside: a, onInteractOutside: c, onDismiss: u, ...s} = e
              , p = (0,
            f.useContext)(S)
              , [v,w] = (0,
            f.useState)(null)
              , b = null !== (n = null == v ? void 0 : v.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document
              , [,E] = (0,
            f.useState)({})
              , x = (0,
            h.e)(t, e => w(e))
              , C = Array.from(p.layers)
              , [T] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1)
              , k = C.indexOf(T)
              , P = v ? C.indexOf(v) : -1
              , A = p.layersWithOutsidePointerEventsDisabled.size > 0
              , O = P >= k
              , D = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == globalThis ? void 0 : globalThis.document
                  , n = g(e)
                  , r = (0,
                f.useRef)(!1)
                  , o = (0,
                f.useRef)( () => {}
                );
                return (0,
                f.useEffect)( () => {
                    let e = e => {
                        if (e.target && !r.current) {
                            let r = {
                                originalEvent: e
                            };
                            function i() {
                                _("dismissableLayer.pointerDownOutside", n, r, {
                                    discrete: !0
                                })
                            }
                            "touch" === e.pointerType ? (t.removeEventListener("click", o.current),
                            o.current = i,
                            t.addEventListener("click", o.current, {
                                once: !0
                            })) : i()
                        } else
                            t.removeEventListener("click", o.current);
                        r.current = !1
                    }
                      , i = window.setTimeout( () => {
                        t.addEventListener("pointerdown", e)
                    }
                    , 0);
                    return () => {
                        window.clearTimeout(i),
                        t.removeEventListener("pointerdown", e),
                        t.removeEventListener("click", o.current)
                    }
                }
                , [t, n]),
                {
                    onPointerDownCapture: () => r.current = !0
                }
            }(e => {
                let t = e.target
                  , n = [...p.branches].some(e => e.contains(t));
                !O || n || (null == l || l(e),
                null == c || c(e),
                e.defaultPrevented || null == u || u())
            }
            , b)
              , L = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == globalThis ? void 0 : globalThis.document
                  , n = g(e)
                  , r = (0,
                f.useRef)(!1);
                return (0,
                f.useEffect)( () => {
                    let e = e => {
                        e.target && !r.current && _("dismissableLayer.focusOutside", n, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                }
                , [t, n]),
                {
                    onFocusCapture: () => r.current = !0,
                    onBlurCapture: () => r.current = !1
                }
            }(e => {
                let t = e.target;
                [...p.branches].some(e => e.contains(t)) || (null == a || a(e),
                null == c || c(e),
                e.defaultPrevented || null == u || u())
            }
            , b);
            return !function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == globalThis ? void 0 : globalThis.document
                  , n = g(e);
                (0,
                f.useEffect)( () => {
                    let e = e => {
                        "Escape" === e.key && n(e)
                    }
                    ;
                    return t.addEventListener("keydown", e),
                    () => t.removeEventListener("keydown", e)
                }
                , [n, t])
            }(e => {
                P !== p.layers.size - 1 || (null == i || i(e),
                !e.defaultPrevented && u && (e.preventDefault(),
                u()))
            }
            , b),
            (0,
            f.useEffect)( () => {
                if (v)
                    return o && (0 === p.layersWithOutsidePointerEventsDisabled.size && (r = b.body.style.pointerEvents,
                    b.body.style.pointerEvents = "none"),
                    p.layersWithOutsidePointerEventsDisabled.add(v)),
                    p.layers.add(v),
                    M(),
                    () => {
                        o && 1 === p.layersWithOutsidePointerEventsDisabled.size && (b.body.style.pointerEvents = r)
                    }
            }
            , [v, b, o, p]),
            (0,
            f.useEffect)( () => () => {
                v && (p.layers.delete(v),
                p.layersWithOutsidePointerEventsDisabled.delete(v),
                M())
            }
            , [v, p]),
            (0,
            f.useEffect)( () => {
                let e = () => E({});
                return document.addEventListener(R, e),
                () => document.removeEventListener(R, e)
            }
            , []),
            (0,
            f.createElement)(y.WV.div, (0,
            d.Z)({}, s, {
                ref: x,
                style: {
                    pointerEvents: A ? O ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: m(e.onFocusCapture, L.onFocusCapture),
                onBlurCapture: m(e.onBlurCapture, L.onBlurCapture),
                onPointerDownCapture: m(e.onPointerDownCapture, D.onPointerDownCapture)
            }))
        }
        );
        function M() {
            let e = new CustomEvent(R);
            document.dispatchEvent(e)
        }
        function _(e, t, n, r) {
            let {discrete: o} = r
              , i = n.originalEvent.target
              , l = new CustomEvent(e,{
                bubbles: !1,
                cancelable: !0,
                detail: n
            });
            t && i.addEventListener(e, t, {
                once: !0
            }),
            o ? (0,
            y.jH)(i, l) : i.dispatchEvent(l)
        }
        let k = 0;
        function P() {
            let e = document.createElement("span");
            return e.setAttribute("data-radix-focus-guard", ""),
            e.tabIndex = 0,
            e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none",
            e
        }
        let A = "focusScope.autoFocusOnMount"
          , O = "focusScope.autoFocusOnUnmount"
          , D = {
            bubbles: !1,
            cancelable: !0
        }
          , L = (0,
        f.forwardRef)( (e, t) => {
            let {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l} = e
              , [a,c] = (0,
            f.useState)(null)
              , u = g(o)
              , s = g(i)
              , p = (0,
            f.useRef)(null)
              , m = (0,
            h.e)(t, e => c(e))
              , v = (0,
            f.useRef)({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
            (0,
            f.useEffect)( () => {
                if (r) {
                    function e(e) {
                        if (v.paused || !a)
                            return;
                        let t = e.target;
                        a.contains(t) ? p.current = t : N(p.current, {
                            select: !0
                        })
                    }
                    function t(e) {
                        if (v.paused || !a)
                            return;
                        let t = e.relatedTarget;
                        null === t || a.contains(t) || N(p.current, {
                            select: !0
                        })
                    }
                    document.addEventListener("focusin", e),
                    document.addEventListener("focusout", t);
                    let n = new MutationObserver(function(e) {
                        if (document.activeElement === document.body)
                            for (let t of e)
                                t.removedNodes.length > 0 && N(a)
                    }
                    );
                    return a && n.observe(a, {
                        childList: !0,
                        subtree: !0
                    }),
                    () => {
                        document.removeEventListener("focusin", e),
                        document.removeEventListener("focusout", t),
                        n.disconnect()
                    }
                }
            }
            , [r, a, v.paused]),
            (0,
            f.useEffect)( () => {
                if (a) {
                    Z.add(v);
                    let e = document.activeElement;
                    if (!a.contains(e)) {
                        let t = new CustomEvent(A,D);
                        a.addEventListener(A, u),
                        a.dispatchEvent(t),
                        t.defaultPrevented || (function(e) {
                            let {select: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                              , n = document.activeElement;
                            for (let r of e)
                                if (N(r, {
                                    select: t
                                }),
                                document.activeElement !== n)
                                    return
                        }(I(a).filter(e => "A" !== e.tagName), {
                            select: !0
                        }),
                        document.activeElement === e && N(a))
                    }
                    return () => {
                        a.removeEventListener(A, u),
                        setTimeout( () => {
                            let t = new CustomEvent(O,D);
                            a.addEventListener(O, s),
                            a.dispatchEvent(t),
                            t.defaultPrevented || N(null != e ? e : document.body, {
                                select: !0
                            }),
                            a.removeEventListener(O, s),
                            Z.remove(v)
                        }
                        , 0)
                    }
                }
            }
            , [a, u, s, v]);
            let w = (0,
            f.useCallback)(e => {
                if (!n && !r || v.paused)
                    return;
                let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey
                  , o = document.activeElement;
                if (t && o) {
                    let t = e.currentTarget
                      , [r,i] = function(e) {
                        let t = I(e);
                        return [F(t, e), F(t.reverse(), e)]
                    }(t);
                    r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(),
                    n && N(i, {
                        select: !0
                    })) : (e.preventDefault(),
                    n && N(r, {
                        select: !0
                    })) : o === t && e.preventDefault()
                }
            }
            , [n, r, v.paused]);
            return (0,
            f.createElement)(y.WV.div, (0,
            d.Z)({
                tabIndex: -1
            }, l, {
                ref: m,
                onKeyDown: w
            }))
        }
        );
        function I(e) {
            let t = []
              , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => {
                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
            for (; n.nextNode(); )
                t.push(n.currentNode);
            return t
        }
        function F(e, t) {
            for (let n of e)
                if (!function(e, t) {
                    let {upTo: n} = t;
                    if ("hidden" === getComputedStyle(e).visibility)
                        return !0;
                    for (; e && (void 0 === n || e !== n); ) {
                        if ("none" === getComputedStyle(e).display)
                            return !0;
                        e = e.parentElement
                    }
                    return !1
                }(n, {
                    upTo: t
                }))
                    return n
        }
        function N(e) {
            let {select: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (e && e.focus) {
                var n;
                let r = document.activeElement;
                e.focus({
                    preventScroll: !0
                }),
                e !== r && (n = e)instanceof HTMLInputElement && "select"in n && t && e.select()
            }
        }
        let Z = (o = [],
        {
            add(e) {
                let t = o[0];
                e !== t && (null == t || t.pause()),
                (o = W(o, e)).unshift(e)
            },
            remove(e) {
                var t;
                null === (t = (o = W(o, e))[0]) || void 0 === t || t.resume()
            }
        });
        function W(e, t) {
            let n = [...e]
              , r = n.indexOf(t);
            return -1 !== r && n.splice(r, 1),
            n
        }
        let K = (null == globalThis ? void 0 : globalThis.document) ? f.useLayoutEffect : () => {}
          , V = p["useId".toString()] || ( () => void 0)
          , B = 0;
        function H(e) {
            let[t,n] = f.useState(V());
            return K( () => {
                e || n(e => null != e ? e : String(B++))
            }
            , [e]),
            e || (t ? "radix-".concat(t) : "")
        }
        let U = ["top", "right", "bottom", "left"]
          , z = Math.min
          , j = Math.max
          , X = Math.round
          , G = Math.floor
          , Y = e => ({
            x: e,
            y: e
        })
          , q = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        }
          , $ = {
            start: "end",
            end: "start"
        };
        function J(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function Q(e) {
            return e.split("-")[0]
        }
        function ee(e) {
            return e.split("-")[1]
        }
        function et(e) {
            return "x" === e ? "y" : "x"
        }
        function en(e) {
            return "y" === e ? "height" : "width"
        }
        function er(e) {
            return ["top", "bottom"].includes(Q(e)) ? "y" : "x"
        }
        function eo(e) {
            return e.replace(/start|end/g, e => $[e])
        }
        function ei(e) {
            return e.replace(/left|right|bottom|top/g, e => q[e])
        }
        function el(e) {
            return "number" != typeof e ? {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...e
            } : {
                top: e,
                right: e,
                bottom: e,
                left: e
            }
        }
        function ea(e) {
            return {
                ...e,
                top: e.y,
                left: e.x,
                right: e.x + e.width,
                bottom: e.y + e.height
            }
        }
        function ec(e, t, n) {
            let r, {reference: o, floating: i} = e, l = er(t), a = et(er(t)), c = en(a), u = Q(t), s = "y" === l, d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, p = o[c] / 2 - i[c] / 2;
            switch (u) {
            case "top":
                r = {
                    x: d,
                    y: o.y - i.height
                };
                break;
            case "bottom":
                r = {
                    x: d,
                    y: o.y + o.height
                };
                break;
            case "right":
                r = {
                    x: o.x + o.width,
                    y: f
                };
                break;
            case "left":
                r = {
                    x: o.x - i.width,
                    y: f
                };
                break;
            default:
                r = {
                    x: o.x,
                    y: o.y
                }
            }
            switch (ee(t)) {
            case "start":
                r[a] -= p * (n && s ? -1 : 1);
                break;
            case "end":
                r[a] += p * (n && s ? -1 : 1)
            }
            return r
        }
        let eu = async (e, t, n) => {
            let {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: l} = n
              , a = i.filter(Boolean)
              , c = await (null == l.isRTL ? void 0 : l.isRTL(t))
              , u = await l.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            })
              , {x: s, y: d} = ec(u, r, c)
              , f = r
              , p = {}
              , m = 0;
            for (let n = 0; n < a.length; n++) {
                let {name: i, fn: h} = a[n]
                  , {x: v, y: g, data: w, reset: y} = await h({
                    x: s,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: o,
                    middlewareData: p,
                    rects: u,
                    platform: l,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
                s = null != v ? v : s,
                d = null != g ? g : d,
                p = {
                    ...p,
                    [i]: {
                        ...p[i],
                        ...w
                    }
                },
                y && m <= 50 && (m++,
                "object" == typeof y && (y.placement && (f = y.placement),
                y.rects && (u = !0 === y.rects ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }) : y.rects),
                {x: s, y: d} = ec(u, f, c)),
                n = -1)
            }
            return {
                x: s,
                y: d,
                placement: f,
                strategy: o,
                middlewareData: p
            }
        }
        ;
        async function es(e, t) {
            var n;
            void 0 === t && (t = {});
            let {x: r, y: o, platform: i, rects: l, elements: a, strategy: c} = e
              , {boundary: u="clippingAncestors", rootBoundary: s="viewport", elementContext: d="floating", altBoundary: f=!1, padding: p=0} = J(t, e)
              , m = el(p)
              , h = a[f ? "floating" === d ? "reference" : "floating" : d]
              , v = ea(await i.getClippingRect({
                element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                boundary: u,
                rootBoundary: s,
                strategy: c
            }))
              , g = "floating" === d ? {
                ...l.floating,
                x: r,
                y: o
            } : l.reference
              , w = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating))
              , y = await (null == i.isElement ? void 0 : i.isElement(w)) && await (null == i.getScale ? void 0 : i.getScale(w)) || {
                x: 1,
                y: 1
            }
              , b = ea(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: a,
                rect: g,
                offsetParent: w,
                strategy: c
            }) : g);
            return {
                top: (v.top - b.top + m.top) / y.y,
                bottom: (b.bottom - v.bottom + m.bottom) / y.y,
                left: (v.left - b.left + m.left) / y.x,
                right: (b.right - v.right + m.right) / y.x
            }
        }
        function ed(e, t) {
            return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width
            }
        }
        function ef(e) {
            return U.some(t => e[t] >= 0)
        }
        async function ep(e, t) {
            let {placement: n, platform: r, elements: o} = e
              , i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating))
              , l = Q(n)
              , a = ee(n)
              , c = "y" === er(n)
              , u = ["left", "top"].includes(l) ? -1 : 1
              , s = i && c ? -1 : 1
              , d = J(t, e)
              , {mainAxis: f, crossAxis: p, alignmentAxis: m} = "number" == typeof d ? {
                mainAxis: d,
                crossAxis: 0,
                alignmentAxis: null
            } : {
                mainAxis: 0,
                crossAxis: 0,
                alignmentAxis: null,
                ...d
            };
            return a && "number" == typeof m && (p = "end" === a ? -1 * m : m),
            c ? {
                x: p * s,
                y: f * u
            } : {
                x: f * u,
                y: p * s
            }
        }
        function em(e) {
            return eg(e) ? (e.nodeName || "").toLowerCase() : "#document"
        }
        function eh(e) {
            var t;
            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function ev(e) {
            var t;
            return null == (t = (eg(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
        }
        function eg(e) {
            return e instanceof Node || e instanceof eh(e).Node
        }
        function ew(e) {
            return e instanceof Element || e instanceof eh(e).Element
        }
        function ey(e) {
            return e instanceof HTMLElement || e instanceof eh(e).HTMLElement
        }
        function eb(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof eh(e).ShadowRoot)
        }
        function eE(e) {
            let {overflow: t, overflowX: n, overflowY: r, display: o} = eS(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
        }
        function ex(e) {
            let t = eC()
              , n = eS(e);
            return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
        }
        function eC() {
            return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
        }
        function eR(e) {
            return ["html", "body", "#document"].includes(em(e))
        }
        function eS(e) {
            return eh(e).getComputedStyle(e)
        }
        function eT(e) {
            return ew(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.pageXOffset,
                scrollTop: e.pageYOffset
            }
        }
        function eM(e) {
            if ("html" === em(e))
                return e;
            let t = e.assignedSlot || e.parentNode || eb(e) && e.host || ev(e);
            return eb(t) ? t.host : t
        }
        function e_(e, t, n) {
            var r;
            void 0 === t && (t = []),
            void 0 === n && (n = !0);
            let o = function e(t) {
                let n = eM(t);
                return eR(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : ey(n) && eE(n) ? n : e(n)
            }(e)
              , i = o === (null == (r = e.ownerDocument) ? void 0 : r.body)
              , l = eh(o);
            return i ? t.concat(l, l.visualViewport || [], eE(o) ? o : [], l.frameElement && n ? e_(l.frameElement) : []) : t.concat(o, e_(o, [], n))
        }
        function ek(e) {
            let t = eS(e)
              , n = parseFloat(t.width) || 0
              , r = parseFloat(t.height) || 0
              , o = ey(e)
              , i = o ? e.offsetWidth : n
              , l = o ? e.offsetHeight : r
              , a = X(n) !== i || X(r) !== l;
            return a && (n = i,
            r = l),
            {
                width: n,
                height: r,
                $: a
            }
        }
        function eP(e) {
            return ew(e) ? e : e.contextElement
        }
        function eA(e) {
            let t = eP(e);
            if (!ey(t))
                return Y(1);
            let n = t.getBoundingClientRect()
              , {width: r, height: o, $: i} = ek(t)
              , l = (i ? X(n.width) : n.width) / r
              , a = (i ? X(n.height) : n.height) / o;
            return l && Number.isFinite(l) || (l = 1),
            a && Number.isFinite(a) || (a = 1),
            {
                x: l,
                y: a
            }
        }
        let eO = Y(0);
        function eD(e) {
            let t = eh(e);
            return eC() && t.visualViewport ? {
                x: t.visualViewport.offsetLeft,
                y: t.visualViewport.offsetTop
            } : eO
        }
        function eL(e, t, n, r) {
            var o;
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            let i = e.getBoundingClientRect()
              , l = eP(e)
              , a = Y(1);
            t && (r ? ew(r) && (a = eA(r)) : a = eA(e));
            let c = (void 0 === (o = n) && (o = !1),
            r && (!o || r === eh(l)) && o) ? eD(l) : Y(0)
              , u = (i.left + c.x) / a.x
              , s = (i.top + c.y) / a.y
              , d = i.width / a.x
              , f = i.height / a.y;
            if (l) {
                let e = eh(l)
                  , t = r && ew(r) ? eh(r) : r
                  , n = e
                  , o = n.frameElement;
                for (; o && r && t !== n; ) {
                    let e = eA(o)
                      , t = o.getBoundingClientRect()
                      , r = eS(o)
                      , i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x
                      , l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                    u *= e.x,
                    s *= e.y,
                    d *= e.x,
                    f *= e.y,
                    u += i,
                    s += l,
                    o = (n = eh(o)).frameElement
                }
            }
            return ea({
                width: d,
                height: f,
                x: u,
                y: s
            })
        }
        let eI = [":popover-open", ":modal"];
        function eF(e) {
            return eI.some(t => {
                try {
                    return e.matches(t)
                } catch (e) {
                    return !1
                }
            }
            )
        }
        function eN(e) {
            return eL(ev(e)).left + eT(e).scrollLeft
        }
        function eZ(e, t, n) {
            let r;
            if ("viewport" === t)
                r = function(e, t) {
                    let n = eh(e)
                      , r = ev(e)
                      , o = n.visualViewport
                      , i = r.clientWidth
                      , l = r.clientHeight
                      , a = 0
                      , c = 0;
                    if (o) {
                        i = o.width,
                        l = o.height;
                        let e = eC();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft,
                        c = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: c
                    }
                }(e, n);
            else if ("document" === t)
                r = function(e) {
                    let t = ev(e)
                      , n = eT(e)
                      , r = e.ownerDocument.body
                      , o = j(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
                      , i = j(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight)
                      , l = -n.scrollLeft + eN(e)
                      , a = -n.scrollTop;
                    return "rtl" === eS(r).direction && (l += j(t.clientWidth, r.clientWidth) - o),
                    {
                        width: o,
                        height: i,
                        x: l,
                        y: a
                    }
                }(ev(e));
            else if (ew(t))
                r = function(e, t) {
                    let n = eL(e, !0, "fixed" === t)
                      , r = n.top + e.clientTop
                      , o = n.left + e.clientLeft
                      , i = ey(e) ? eA(e) : Y(1)
                      , l = e.clientWidth * i.x;
                    return {
                        width: l,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
            else {
                let n = eD(e);
                r = {
                    ...t,
                    x: t.x - n.x,
                    y: t.y - n.y
                }
            }
            return ea(r)
        }
        function eW(e, t) {
            return ey(e) && "fixed" !== eS(e).position ? t ? t(e) : e.offsetParent : null
        }
        function eK(e, t) {
            let n = eh(e);
            if (!ey(e) || eF(e))
                return n;
            let r = eW(e, t);
            for (; r && ["table", "td", "th"].includes(em(r)) && "static" === eS(r).position; )
                r = eW(r, t);
            return r && ("html" === em(r) || "body" === em(r) && "static" === eS(r).position && !ex(r)) ? n : r || function(e) {
                let t = eM(e);
                for (; ey(t) && !eR(t); ) {
                    if (ex(t))
                        return t;
                    t = eM(t)
                }
                return null
            }(e) || n
        }
        let eV = async function(e) {
            let t = this.getOffsetParent || eK
              , n = this.getDimensions;
            return {
                reference: function(e, t, n) {
                    let r = ey(t)
                      , o = ev(t)
                      , i = "fixed" === n
                      , l = eL(e, !0, i, t)
                      , a = {
                        scrollLeft: 0,
                        scrollTop: 0
                    }
                      , c = Y(0);
                    if (r || !r && !i) {
                        if (("body" !== em(t) || eE(o)) && (a = eT(t)),
                        r) {
                            let e = eL(t, !0, i, t);
                            c.x = e.x + t.clientLeft,
                            c.y = e.y + t.clientTop
                        } else
                            o && (c.x = eN(o))
                    }
                    return {
                        x: l.left + a.scrollLeft - c.x,
                        y: l.top + a.scrollTop - c.y,
                        width: l.width,
                        height: l.height
                    }
                }(e.reference, await t(e.floating), e.strategy),
                floating: {
                    x: 0,
                    y: 0,
                    ...await n(e.floating)
                }
            }
        }
          , eB = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {elements: t, rect: n, offsetParent: r, strategy: o} = e
                  , i = "fixed" === o
                  , l = ev(r)
                  , a = !!t && eF(t.floating);
                if (r === l || a && i)
                    return n;
                let c = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                  , u = Y(1)
                  , s = Y(0)
                  , d = ey(r);
                if ((d || !d && !i) && (("body" !== em(r) || eE(l)) && (c = eT(r)),
                ey(r))) {
                    let e = eL(r);
                    u = eA(r),
                    s.x = e.x + r.clientLeft,
                    s.y = e.y + r.clientTop
                }
                return {
                    width: n.width * u.x,
                    height: n.height * u.y,
                    x: n.x * u.x - c.scrollLeft * u.x + s.x,
                    y: n.y * u.y - c.scrollTop * u.y + s.y
                }
            },
            getDocumentElement: ev,
            getClippingRect: function(e) {
                let {element: t, boundary: n, rootBoundary: r, strategy: o} = e
                  , i = [..."clippingAncestors" === n ? function(e, t) {
                    let n = t.get(e);
                    if (n)
                        return n;
                    let r = e_(e, [], !1).filter(e => ew(e) && "body" !== em(e))
                      , o = null
                      , i = "fixed" === eS(e).position
                      , l = i ? eM(e) : e;
                    for (; ew(l) && !eR(l); ) {
                        let t = eS(l)
                          , n = ex(l);
                        n || "fixed" !== t.position || (o = null),
                        (i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || eE(l) && !n && function e(t, n) {
                            let r = eM(t);
                            return !(r === n || !ew(r) || eR(r)) && ("fixed" === eS(r).position || e(r, n))
                        }(e, l)) ? r = r.filter(e => e !== l) : o = t,
                        l = eM(l)
                    }
                    return t.set(e, r),
                    r
                }(t, this._c) : [].concat(n), r]
                  , l = i[0]
                  , a = i.reduce( (e, n) => {
                    let r = eZ(t, n, o);
                    return e.top = j(r.top, e.top),
                    e.right = z(r.right, e.right),
                    e.bottom = z(r.bottom, e.bottom),
                    e.left = j(r.left, e.left),
                    e
                }
                , eZ(t, l, o));
                return {
                    width: a.right - a.left,
                    height: a.bottom - a.top,
                    x: a.left,
                    y: a.top
                }
            },
            getOffsetParent: eK,
            getElementRects: eV,
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                let {width: t, height: n} = ek(e);
                return {
                    width: t,
                    height: n
                }
            },
            getScale: eA,
            isElement: ew,
            isRTL: function(e) {
                return "rtl" === eS(e).direction
            }
        }
          , eH = e => ({
            name: "arrow",
            options: e,
            async fn(t) {
                let {x: n, y: r, placement: o, rects: i, platform: l, elements: a, middlewareData: c} = t
                  , {element: u, padding: s=0} = J(e, t) || {};
                if (null == u)
                    return {};
                let d = el(s)
                  , f = {
                    x: n,
                    y: r
                }
                  , p = et(er(o))
                  , m = en(p)
                  , h = await l.getDimensions(u)
                  , v = "y" === p
                  , g = v ? "clientHeight" : "clientWidth"
                  , w = i.reference[m] + i.reference[p] - f[p] - i.floating[m]
                  , y = f[p] - i.reference[p]
                  , b = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u))
                  , E = b ? b[g] : 0;
                E && await (null == l.isElement ? void 0 : l.isElement(b)) || (E = a.floating[g] || i.floating[m]);
                let x = E / 2 - h[m] / 2 - 1
                  , C = z(d[v ? "top" : "left"], x)
                  , R = z(d[v ? "bottom" : "right"], x)
                  , S = E - h[m] - R
                  , T = E / 2 - h[m] / 2 + (w / 2 - y / 2)
                  , M = j(C, z(T, S))
                  , _ = !c.arrow && null != ee(o) && T !== M && i.reference[m] / 2 - (T < C ? C : R) - h[m] / 2 < 0
                  , k = _ ? T < C ? T - C : T - S : 0;
                return {
                    [p]: f[p] + k,
                    data: {
                        [p]: M,
                        centerOffset: T - M - k,
                        ..._ && {
                            alignmentOffset: k
                        }
                    },
                    reset: _
                }
            }
        })
          , eU = (e, t, n) => {
            let r = new Map
              , o = {
                platform: eB,
                ...n
            }
              , i = {
                ...o.platform,
                _c: r
            };
            return eu(e, t, {
                ...o,
                platform: i
            })
        }
        ;
        var ez = n(8613);
        let ej = e => ({
            name: "arrow",
            options: e,
            fn(t) {
                let {element: n, padding: r} = "function" == typeof e ? e(t) : e;
                return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? eH({
                    element: n.current,
                    padding: r
                }).fn(t) : {} : n ? eH({
                    element: n,
                    padding: r
                }).fn(t) : {}
            }
        });
        var eX = "undefined" != typeof document ? f.useLayoutEffect : f.useEffect;
        function eG(e, t) {
            let n, r, o;
            if (e === t)
                return !0;
            if (typeof e != typeof t)
                return !1;
            if ("function" == typeof e && e.toString() === t.toString())
                return !0;
            if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                    if ((n = e.length) !== t.length)
                        return !1;
                    for (r = n; 0 != r--; )
                        if (!eG(e[r], t[r]))
                            return !1;
                    return !0
                }
                if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
                    return !1;
                for (r = n; 0 != r--; )
                    if (!({}).hasOwnProperty.call(t, o[r]))
                        return !1;
                for (r = n; 0 != r--; ) {
                    let n = o[r];
                    if (("_owner" !== n || !e.$$typeof) && !eG(e[n], t[n]))
                        return !1
                }
                return !0
            }
            return e != e && t != t
        }
        function eY(e) {
            return (e.ownerDocument.defaultView || window).devicePixelRatio || 1
        }
        function eq(e, t) {
            let n = eY(e);
            return Math.round(t * n) / n
        }
        function e$(e) {
            let t = f.useRef(e);
            return eX( () => {
                t.current = e
            }
            ),
            t
        }
        let eJ = (0,
        f.forwardRef)( (e, t) => {
            let {children: n, width: r=10, height: o=5, ...i} = e;
            return (0,
            f.createElement)(y.WV.svg, (0,
            d.Z)({}, i, {
                ref: t,
                width: r,
                height: o,
                viewBox: "0 0 30 10",
                preserveAspectRatio: "none"
            }), e.asChild ? n : (0,
            f.createElement)("polygon", {
                points: "0,0 30,0 15,10"
            }))
        }
        )
          , eQ = "Popper"
          , [e0,e1] = v(eQ)
          , [e2,e3] = e0(eQ)
          , e5 = (0,
        f.forwardRef)( (e, t) => {
            let {__scopePopper: n, virtualRef: r, ...o} = e
              , i = e3("PopperAnchor", n)
              , l = (0,
            f.useRef)(null)
              , a = (0,
            h.e)(t, l);
            return (0,
            f.useEffect)( () => {
                i.onAnchorChange((null == r ? void 0 : r.current) || l.current)
            }
            ),
            r ? null : (0,
            f.createElement)(y.WV.div, (0,
            d.Z)({}, o, {
                ref: a
            }))
        }
        )
          , e9 = "PopperContent"
          , [e7,e8] = e0(e9)
          , e4 = (0,
        f.forwardRef)( (e, t) => {
            var n, r, o, i, l, a, c, u, s, p, m, v, w, b;
            let {__scopePopper: E, side: x="bottom", sideOffset: C=0, align: R="center", alignOffset: S=0, arrowPadding: T=0, avoidCollisions: M=!0, collisionBoundary: _=[], collisionPadding: k=0, sticky: P="partial", hideWhenDetached: A=!1, updatePositionStrategy: O="optimized", onPlaced: D, ...L} = e
              , I = e3(e9, E)
              , [F,N] = (0,
            f.useState)(null)
              , Z = (0,
            h.e)(t, e => N(e))
              , [W,V] = (0,
            f.useState)(null)
              , B = function(e) {
                let[t,n] = (0,
                f.useState)(void 0);
                return K( () => {
                    if (e) {
                        n({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let r, o;
                            if (!Array.isArray(t) || !t.length)
                                return;
                            let i = t[0];
                            if ("borderBoxSize"in i) {
                                let e = i.borderBoxSize
                                  , t = Array.isArray(e) ? e[0] : e;
                                r = t.inlineSize,
                                o = t.blockSize
                            } else
                                r = e.offsetWidth,
                                o = e.offsetHeight;
                            n({
                                width: r,
                                height: o
                            })
                        }
                        );
                        return t.observe(e, {
                            box: "border-box"
                        }),
                        () => t.unobserve(e)
                    }
                    n(void 0)
                }
                , [e]),
                t
            }(W)
              , H = null !== (n = null == B ? void 0 : B.width) && void 0 !== n ? n : 0
              , U = null !== (r = null == B ? void 0 : B.height) && void 0 !== r ? r : 0
              , X = "number" == typeof k ? k : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...k
            }
              , Y = Array.isArray(_) ? _ : [_]
              , q = Y.length > 0
              , $ = {
                padding: X,
                boundary: Y.filter(tt),
                altBoundary: q
            }
              , {refs: el, floatingStyles: ea, placement: ec, isPositioned: eu, middlewareData: em} = function(e) {
                void 0 === e && (e = {});
                let {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: l}={}, transform: a=!0, whileElementsMounted: c, open: u} = e
                  , [s,d] = f.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                })
                  , [p,m] = f.useState(r);
                eG(p, r) || m(r);
                let[h,v] = f.useState(null)
                  , [g,w] = f.useState(null)
                  , y = f.useCallback(e => {
                    e !== C.current && (C.current = e,
                    v(e))
                }
                , [])
                  , b = f.useCallback(e => {
                    e !== R.current && (R.current = e,
                    w(e))
                }
                , [])
                  , E = i || h
                  , x = l || g
                  , C = f.useRef(null)
                  , R = f.useRef(null)
                  , S = f.useRef(s)
                  , T = null != c
                  , M = e$(c)
                  , _ = e$(o)
                  , k = f.useCallback( () => {
                    if (!C.current || !R.current)
                        return;
                    let e = {
                        placement: t,
                        strategy: n,
                        middleware: p
                    };
                    _.current && (e.platform = _.current),
                    eU(C.current, R.current, e).then(e => {
                        let t = {
                            ...e,
                            isPositioned: !0
                        };
                        P.current && !eG(S.current, t) && (S.current = t,
                        ez.flushSync( () => {
                            d(t)
                        }
                        ))
                    }
                    )
                }
                , [p, t, n, _]);
                eX( () => {
                    !1 === u && S.current.isPositioned && (S.current.isPositioned = !1,
                    d(e => ({
                        ...e,
                        isPositioned: !1
                    })))
                }
                , [u]);
                let P = f.useRef(!1);
                eX( () => (P.current = !0,
                () => {
                    P.current = !1
                }
                ), []),
                eX( () => {
                    if (E && (C.current = E),
                    x && (R.current = x),
                    E && x) {
                        if (M.current)
                            return M.current(E, x, k);
                        k()
                    }
                }
                , [E, x, k, M, T]);
                let A = f.useMemo( () => ({
                    reference: C,
                    floating: R,
                    setReference: y,
                    setFloating: b
                }), [y, b])
                  , O = f.useMemo( () => ({
                    reference: E,
                    floating: x
                }), [E, x])
                  , D = f.useMemo( () => {
                    let e = {
                        position: n,
                        left: 0,
                        top: 0
                    };
                    if (!O.floating)
                        return e;
                    let t = eq(O.floating, s.x)
                      , r = eq(O.floating, s.y);
                    return a ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...eY(O.floating) >= 1.5 && {
                            willChange: "transform"
                        }
                    } : {
                        position: n,
                        left: t,
                        top: r
                    }
                }
                , [n, a, O.floating, s.x, s.y]);
                return f.useMemo( () => ({
                    ...s,
                    update: k,
                    refs: A,
                    elements: O,
                    floatingStyles: D
                }), [s, k, A, O, D])
            }({
                strategy: "fixed",
                placement: x + ("center" !== R ? "-" + R : ""),
                whileElementsMounted: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return function(e, t, n, r) {
                        let o;
                        void 0 === r && (r = {});
                        let {ancestorScroll: i=!0, ancestorResize: l=!0, elementResize: a="function" == typeof ResizeObserver, layoutShift: c="function" == typeof IntersectionObserver, animationFrame: u=!1} = r
                          , s = eP(e)
                          , d = i || l ? [...s ? e_(s) : [], ...e_(t)] : [];
                        d.forEach(e => {
                            i && e.addEventListener("scroll", n, {
                                passive: !0
                            }),
                            l && e.addEventListener("resize", n)
                        }
                        );
                        let f = s && c ? function(e, t) {
                            let n, r = null, o = ev(e);
                            function i() {
                                var e;
                                clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                r = null
                            }
                            return !function l(a, c) {
                                void 0 === a && (a = !1),
                                void 0 === c && (c = 1),
                                i();
                                let {left: u, top: s, width: d, height: f} = e.getBoundingClientRect();
                                if (a || t(),
                                !d || !f)
                                    return;
                                let p = G(s)
                                  , m = G(o.clientWidth - (u + d))
                                  , h = {
                                    rootMargin: -p + "px " + -m + "px " + -G(o.clientHeight - (s + f)) + "px " + -G(u) + "px",
                                    threshold: j(0, z(1, c)) || 1
                                }
                                  , v = !0;
                                function g(e) {
                                    let t = e[0].intersectionRatio;
                                    if (t !== c) {
                                        if (!v)
                                            return l();
                                        t ? l(!1, t) : n = setTimeout( () => {
                                            l(!1, 1e-7)
                                        }
                                        , 100)
                                    }
                                    v = !1
                                }
                                try {
                                    r = new IntersectionObserver(g,{
                                        ...h,
                                        root: o.ownerDocument
                                    })
                                } catch (e) {
                                    r = new IntersectionObserver(g,h)
                                }
                                r.observe(e)
                            }(!0),
                            i
                        }(s, n) : null
                          , p = -1
                          , m = null;
                        a && (m = new ResizeObserver(e => {
                            let[r] = e;
                            r && r.target === s && m && (m.unobserve(t),
                            cancelAnimationFrame(p),
                            p = requestAnimationFrame( () => {
                                var e;
                                null == (e = m) || e.observe(t)
                            }
                            )),
                            n()
                        }
                        ),
                        s && !u && m.observe(s),
                        m.observe(t));
                        let h = u ? eL(e) : null;
                        return u && function t() {
                            let r = eL(e);
                            h && (r.x !== h.x || r.y !== h.y || r.width !== h.width || r.height !== h.height) && n(),
                            h = r,
                            o = requestAnimationFrame(t)
                        }(),
                        n(),
                        () => {
                            var e;
                            d.forEach(e => {
                                i && e.removeEventListener("scroll", n),
                                l && e.removeEventListener("resize", n)
                            }
                            ),
                            null == f || f(),
                            null == (e = m) || e.disconnect(),
                            m = null,
                            u && cancelAnimationFrame(o)
                        }
                    }(...t, {
                        animationFrame: "always" === O
                    })
                },
                elements: {
                    reference: I.anchor
                },
                middleware: [{
                    name: "offset",
                    options: s = {
                        mainAxis: C + U,
                        alignmentAxis: S
                    },
                    async fn(e) {
                        var t, n;
                        let {x: r, y: o, placement: i, middlewareData: l} = e
                          , a = await ep(e, s);
                        return i === (null == (t = l.offset) ? void 0 : t.placement) && null != (n = l.arrow) && n.alignmentOffset ? {} : {
                            x: r + a.x,
                            y: o + a.y,
                            data: {
                                ...a,
                                placement: i
                            }
                        }
                    }
                }, M && {
                    name: "shift",
                    options: m = {
                        mainAxis: !0,
                        crossAxis: !1,
                        limiter: "partial" === P ? (void 0 === p && (p = {}),
                        {
                            options: p,
                            fn(e) {
                                let {x: t, y: n, placement: r, rects: o, middlewareData: i} = e
                                  , {offset: l=0, mainAxis: a=!0, crossAxis: c=!0} = J(p, e)
                                  , u = {
                                    x: t,
                                    y: n
                                }
                                  , s = er(r)
                                  , d = et(s)
                                  , f = u[d]
                                  , m = u[s]
                                  , h = J(l, e)
                                  , v = "number" == typeof h ? {
                                    mainAxis: h,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...h
                                };
                                if (a) {
                                    let e = "y" === d ? "height" : "width"
                                      , t = o.reference[d] - o.floating[e] + v.mainAxis
                                      , n = o.reference[d] + o.reference[e] - v.mainAxis;
                                    f < t ? f = t : f > n && (f = n)
                                }
                                if (c) {
                                    var g, w;
                                    let e = "y" === d ? "width" : "height"
                                      , t = ["top", "left"].includes(Q(r))
                                      , n = o.reference[s] - o.floating[e] + (t && (null == (g = i.offset) ? void 0 : g[s]) || 0) + (t ? 0 : v.crossAxis)
                                      , l = o.reference[s] + o.reference[e] + (t ? 0 : (null == (w = i.offset) ? void 0 : w[s]) || 0) - (t ? v.crossAxis : 0);
                                    m < n ? m = n : m > l && (m = l)
                                }
                                return {
                                    [d]: f,
                                    [s]: m
                                }
                            }
                        }) : void 0,
                        ...$
                    },
                    async fn(e) {
                        let {x: t, y: n, placement: r} = e
                          , {mainAxis: o=!0, crossAxis: i=!1, limiter: l={
                            fn: e => {
                                let {x: t, y: n} = e;
                                return {
                                    x: t,
                                    y: n
                                }
                            }
                        }, ...a} = J(m, e)
                          , c = {
                            x: t,
                            y: n
                        }
                          , u = await es(e, a)
                          , s = er(Q(r))
                          , d = et(s)
                          , f = c[d]
                          , p = c[s];
                        if (o) {
                            let e = "y" === d ? "top" : "left"
                              , t = "y" === d ? "bottom" : "right"
                              , n = f + u[e]
                              , r = f - u[t];
                            f = j(n, z(f, r))
                        }
                        if (i) {
                            let e = "y" === s ? "top" : "left"
                              , t = "y" === s ? "bottom" : "right"
                              , n = p + u[e]
                              , r = p - u[t];
                            p = j(n, z(p, r))
                        }
                        let h = l.fn({
                            ...e,
                            [d]: f,
                            [s]: p
                        });
                        return {
                            ...h,
                            data: {
                                x: h.x - t,
                                y: h.y - n
                            }
                        }
                    }
                }, M && {
                    name: "flip",
                    options: v = {
                        ...$
                    },
                    async fn(e) {
                        var t, n, r, o, i;
                        let {placement: l, middlewareData: a, rects: c, initialPlacement: u, platform: s, elements: d} = e
                          , {mainAxis: f=!0, crossAxis: p=!0, fallbackPlacements: m, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: g="none", flipAlignment: w=!0, ...y} = J(v, e);
                        if (null != (t = a.arrow) && t.alignmentOffset)
                            return {};
                        let b = Q(l)
                          , E = Q(u) === u
                          , x = await (null == s.isRTL ? void 0 : s.isRTL(d.floating))
                          , C = m || (E || !w ? [ei(u)] : function(e) {
                            let t = ei(e);
                            return [eo(e), t, eo(t)]
                        }(u));
                        m || "none" === g || C.push(...function(e, t, n, r) {
                            let o = ee(e)
                              , i = function(e, t, n) {
                                let r = ["left", "right"]
                                  , o = ["right", "left"];
                                switch (e) {
                                case "top":
                                case "bottom":
                                    if (n)
                                        return t ? o : r;
                                    return t ? r : o;
                                case "left":
                                case "right":
                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                default:
                                    return []
                                }
                            }(Q(e), "start" === n, r);
                            return o && (i = i.map(e => e + "-" + o),
                            t && (i = i.concat(i.map(eo)))),
                            i
                        }(u, w, g, x));
                        let R = [u, ...C]
                          , S = await es(e, y)
                          , T = []
                          , M = (null == (n = a.flip) ? void 0 : n.overflows) || [];
                        if (f && T.push(S[b]),
                        p) {
                            let e = function(e, t, n) {
                                void 0 === n && (n = !1);
                                let r = ee(e)
                                  , o = et(er(e))
                                  , i = en(o)
                                  , l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                return t.reference[i] > t.floating[i] && (l = ei(l)),
                                [l, ei(l)]
                            }(l, c, x);
                            T.push(S[e[0]], S[e[1]])
                        }
                        if (M = [...M, {
                            placement: l,
                            overflows: T
                        }],
                        !T.every(e => e <= 0)) {
                            let e = ((null == (r = a.flip) ? void 0 : r.index) || 0) + 1
                              , t = R[e];
                            if (t)
                                return {
                                    data: {
                                        index: e,
                                        overflows: M
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                            let n = null == (o = M.filter(e => e.overflows[0] <= 0).sort( (e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : o.placement;
                            if (!n)
                                switch (h) {
                                case "bestFit":
                                    {
                                        let e = null == (i = M.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce( (e, t) => e + t, 0)]).sort( (e, t) => e[1] - t[1])[0]) ? void 0 : i[0];
                                        e && (n = e);
                                        break
                                    }
                                case "initialPlacement":
                                    n = u
                                }
                            if (l !== n)
                                return {
                                    reset: {
                                        placement: n
                                    }
                                }
                        }
                        return {}
                    }
                }, {
                    name: "size",
                    options: w = {
                        ...$,
                        apply: e => {
                            let {elements: t, rects: n, availableWidth: r, availableHeight: o} = e
                              , {width: i, height: l} = n.reference
                              , a = t.floating.style;
                            a.setProperty("--radix-popper-available-width", "".concat(r, "px")),
                            a.setProperty("--radix-popper-available-height", "".concat(o, "px")),
                            a.setProperty("--radix-popper-anchor-width", "".concat(i, "px")),
                            a.setProperty("--radix-popper-anchor-height", "".concat(l, "px"))
                        }
                    },
                    async fn(e) {
                        let t, n;
                        let {placement: r, rects: o, platform: i, elements: l} = e
                          , {apply: a= () => {}
                        , ...c} = J(w, e)
                          , u = await es(e, c)
                          , s = Q(r)
                          , d = ee(r)
                          , f = "y" === er(r)
                          , {width: p, height: m} = o.floating;
                        "top" === s || "bottom" === s ? (t = s,
                        n = d === (await (null == i.isRTL ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (n = s,
                        t = "end" === d ? "top" : "bottom");
                        let h = m - u[t]
                          , v = p - u[n]
                          , g = !e.middlewareData.shift
                          , y = h
                          , b = v;
                        if (f) {
                            let e = p - u.left - u.right;
                            b = d || g ? z(v, e) : e
                        } else {
                            let e = m - u.top - u.bottom;
                            y = d || g ? z(h, e) : e
                        }
                        if (g && !d) {
                            let e = j(u.left, 0)
                              , t = j(u.right, 0)
                              , n = j(u.top, 0)
                              , r = j(u.bottom, 0);
                            f ? b = p - 2 * (0 !== e || 0 !== t ? e + t : j(u.left, u.right)) : y = m - 2 * (0 !== n || 0 !== r ? n + r : j(u.top, u.bottom))
                        }
                        await a({
                            ...e,
                            availableWidth: b,
                            availableHeight: y
                        });
                        let E = await i.getDimensions(l.floating);
                        return p !== E.width || m !== E.height ? {
                            reset: {
                                rects: !0
                            }
                        } : {}
                    }
                }, W && ej({
                    element: W,
                    padding: T
                }), tn({
                    arrowWidth: H,
                    arrowHeight: U
                }), A && {
                    name: "hide",
                    options: b = {
                        strategy: "referenceHidden",
                        ...$
                    },
                    async fn(e) {
                        let {rects: t} = e
                          , {strategy: n="referenceHidden", ...r} = J(b, e);
                        switch (n) {
                        case "referenceHidden":
                            {
                                let n = ed(await es(e, {
                                    ...r,
                                    elementContext: "reference"
                                }), t.reference);
                                return {
                                    data: {
                                        referenceHiddenOffsets: n,
                                        referenceHidden: ef(n)
                                    }
                                }
                            }
                        case "escaped":
                            {
                                let n = ed(await es(e, {
                                    ...r,
                                    altBoundary: !0
                                }), t.floating);
                                return {
                                    data: {
                                        escapedOffsets: n,
                                        escaped: ef(n)
                                    }
                                }
                            }
                        default:
                            return {}
                        }
                    }
                }]
            })
              , [eh,eg] = tr(ec)
              , ew = g(D);
            K( () => {
                eu && (null == ew || ew())
            }
            , [eu, ew]);
            let ey = null === (o = em.arrow) || void 0 === o ? void 0 : o.x
              , eb = null === (i = em.arrow) || void 0 === i ? void 0 : i.y
              , eE = (null === (l = em.arrow) || void 0 === l ? void 0 : l.centerOffset) !== 0
              , [ex,eC] = (0,
            f.useState)();
            return K( () => {
                F && eC(window.getComputedStyle(F).zIndex)
            }
            , [F]),
            (0,
            f.createElement)("div", {
                ref: el.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...ea,
                    transform: eu ? ea.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: ex,
                    "--radix-popper-transform-origin": [null === (a = em.transformOrigin) || void 0 === a ? void 0 : a.x, null === (c = em.transformOrigin) || void 0 === c ? void 0 : c.y].join(" ")
                },
                dir: e.dir
            }, (0,
            f.createElement)(e7, {
                scope: E,
                placedSide: eh,
                onArrowChange: V,
                arrowX: ey,
                arrowY: eb,
                shouldHideArrow: eE
            }, (0,
            f.createElement)(y.WV.div, (0,
            d.Z)({
                "data-side": eh,
                "data-align": eg
            }, L, {
                ref: Z,
                style: {
                    ...L.style,
                    animation: eu ? void 0 : "none",
                    opacity: null !== (u = em.hide) && void 0 !== u && u.referenceHidden ? 0 : void 0
                }
            }))))
        }
        )
          , e6 = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        }
          , te = (0,
        f.forwardRef)(function(e, t) {
            let {__scopePopper: n, ...r} = e
              , o = e8("PopperArrow", n)
              , i = e6[o.placedSide];
            return (0,
            f.createElement)("span", {
                ref: o.onArrowChange,
                style: {
                    position: "absolute",
                    left: o.arrowX,
                    top: o.arrowY,
                    [i]: 0,
                    transformOrigin: {
                        top: "",
                        right: "0 0",
                        bottom: "center 0",
                        left: "100% 0"
                    }[o.placedSide],
                    transform: {
                        top: "translateY(100%)",
                        right: "translateY(50%) rotate(90deg) translateX(-50%)",
                        bottom: "rotate(180deg)",
                        left: "translateY(50%) rotate(-90deg) translateX(50%)"
                    }[o.placedSide],
                    visibility: o.shouldHideArrow ? "hidden" : void 0
                }
            }, (0,
            f.createElement)(eJ, (0,
            d.Z)({}, r, {
                ref: t,
                style: {
                    ...r.style,
                    display: "block"
                }
            })))
        });
        function tt(e) {
            return null !== e
        }
        let tn = e => ({
            name: "transformOrigin",
            options: e,
            fn(t) {
                var n, r, o, i, l;
                let {placement: a, rects: c, middlewareData: u} = t
                  , s = (null === (n = u.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0
                  , d = s ? 0 : e.arrowWidth
                  , f = s ? 0 : e.arrowHeight
                  , [p,m] = tr(a)
                  , h = {
                    start: "0%",
                    center: "50%",
                    end: "100%"
                }[m]
                  , v = (null !== (r = null === (o = u.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + d / 2
                  , g = (null !== (i = null === (l = u.arrow) || void 0 === l ? void 0 : l.y) && void 0 !== i ? i : 0) + f / 2
                  , w = ""
                  , y = "";
                return "bottom" === p ? (w = s ? h : "".concat(v, "px"),
                y = "".concat(-f, "px")) : "top" === p ? (w = s ? h : "".concat(v, "px"),
                y = "".concat(c.floating.height + f, "px")) : "right" === p ? (w = "".concat(-f, "px"),
                y = s ? h : "".concat(g, "px")) : "left" === p && (w = "".concat(c.floating.width + f, "px"),
                y = s ? h : "".concat(g, "px")),
                {
                    data: {
                        x: w,
                        y: y
                    }
                }
            }
        });
        function tr(e) {
            let[t,n="center"] = e.split("-");
            return [t, n]
        }
        let to = e => {
            let {__scopePopper: t, children: n} = e
              , [r,o] = (0,
            f.useState)(null);
            return (0,
            f.createElement)(e2, {
                scope: t,
                anchor: r,
                onAnchorChange: o
            }, n)
        }
          , ti = (0,
        f.forwardRef)( (e, t) => {
            var n;
            let {container: r=null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body, ...o} = e;
            return r ? ez.createPortal((0,
            f.createElement)(y.WV.div, (0,
            d.Z)({}, o, {
                ref: t
            })), r) : null
        }
        )
          , tl = e => {
            let {present: t, children: n} = e
              , r = function(e) {
                var t, n;
                let[r,o] = (0,
                f.useState)()
                  , i = (0,
                f.useRef)({})
                  , l = (0,
                f.useRef)(e)
                  , a = (0,
                f.useRef)("none")
                  , [c,u] = (t = e ? "mounted" : "unmounted",
                n = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                },
                (0,
                f.useReducer)( (e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e
                }
                , t));
                return (0,
                f.useEffect)( () => {
                    let e = ta(i.current);
                    a.current = "mounted" === c ? e : "none"
                }
                , [c]),
                K( () => {
                    let t = i.current
                      , n = l.current;
                    if (n !== e) {
                        let r = a.current
                          , o = ta(t);
                        e ? u("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? u("UNMOUNT") : n && r !== o ? u("ANIMATION_OUT") : u("UNMOUNT"),
                        l.current = e
                    }
                }
                , [e, u]),
                K( () => {
                    if (r) {
                        let e = e => {
                            let t = ta(i.current).includes(e.animationName);
                            e.target === r && t && (0,
                            ez.flushSync)( () => u("ANIMATION_END"))
                        }
                          , t = e => {
                            e.target === r && (a.current = ta(i.current))
                        }
                        ;
                        return r.addEventListener("animationstart", t),
                        r.addEventListener("animationcancel", e),
                        r.addEventListener("animationend", e),
                        () => {
                            r.removeEventListener("animationstart", t),
                            r.removeEventListener("animationcancel", e),
                            r.removeEventListener("animationend", e)
                        }
                    }
                    u("ANIMATION_END")
                }
                , [r, u]),
                {
                    isPresent: ["mounted", "unmountSuspended"].includes(c),
                    ref: (0,
                    f.useCallback)(e => {
                        e && (i.current = getComputedStyle(e)),
                        o(e)
                    }
                    , [])
                }
            }(t)
              , o = "function" == typeof n ? n({
                present: r.isPresent
            }) : f.Children.only(n)
              , i = (0,
            h.e)(r.ref, o.ref);
            return "function" == typeof n || r.isPresent ? (0,
            f.cloneElement)(o, {
                ref: i
            }) : null
        }
        ;
        function ta(e) {
            return (null == e ? void 0 : e.animationName) || "none"
        }
        tl.displayName = "Presence";
        let tc = "rovingFocusGroup.onEntryFocus"
          , tu = {
            bubbles: !1,
            cancelable: !0
        }
          , ts = "RovingFocusGroup"
          , [td,tf,tp] = E(ts)
          , [tm,th] = v(ts, [tp])
          , [tv,tg] = tm(ts)
          , tw = (0,
        f.forwardRef)( (e, t) => (0,
        f.createElement)(td.Provider, {
            scope: e.__scopeRovingFocusGroup
        }, (0,
        f.createElement)(td.Slot, {
            scope: e.__scopeRovingFocusGroup
        }, (0,
        f.createElement)(ty, (0,
        d.Z)({}, e, {
            ref: t
        })))))
          , ty = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeRovingFocusGroup: n, orientation: r, loop: o=!1, dir: i, currentTabStopId: l, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: c, onEntryFocus: u, ...s} = e
              , p = (0,
            f.useRef)(null)
              , v = (0,
            h.e)(t, p)
              , b = C(i)
              , [E=null,x] = w({
                prop: l,
                defaultProp: a,
                onChange: c
            })
              , [R,S] = (0,
            f.useState)(!1)
              , T = g(u)
              , M = tf(n)
              , _ = (0,
            f.useRef)(!1)
              , [k,P] = (0,
            f.useState)(0);
            return (0,
            f.useEffect)( () => {
                let e = p.current;
                if (e)
                    return e.addEventListener(tc, T),
                    () => e.removeEventListener(tc, T)
            }
            , [T]),
            (0,
            f.createElement)(tv, {
                scope: n,
                orientation: r,
                dir: b,
                loop: o,
                currentTabStopId: E,
                onItemFocus: (0,
                f.useCallback)(e => x(e), [x]),
                onItemShiftTab: (0,
                f.useCallback)( () => S(!0), []),
                onFocusableItemAdd: (0,
                f.useCallback)( () => P(e => e + 1), []),
                onFocusableItemRemove: (0,
                f.useCallback)( () => P(e => e - 1), [])
            }, (0,
            f.createElement)(y.WV.div, (0,
            d.Z)({
                tabIndex: R || 0 === k ? -1 : 0,
                "data-orientation": r
            }, s, {
                ref: v,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: m(e.onMouseDown, () => {
                    _.current = !0
                }
                ),
                onFocus: m(e.onFocus, e => {
                    let t = !_.current;
                    if (e.target === e.currentTarget && t && !R) {
                        let t = new CustomEvent(tc,tu);
                        if (e.currentTarget.dispatchEvent(t),
                        !t.defaultPrevented) {
                            let e = M().filter(e => e.focusable);
                            tx([e.find(e => e.active), e.find(e => e.id === E), ...e].filter(Boolean).map(e => e.ref.current))
                        }
                    }
                    _.current = !1
                }
                ),
                onBlur: m(e.onBlur, () => S(!1))
            })))
        }
        )
          , tb = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeRovingFocusGroup: n, focusable: r=!0, active: o=!1, tabStopId: i, ...l} = e
              , a = H()
              , c = i || a
              , u = tg("RovingFocusGroupItem", n)
              , s = u.currentTabStopId === c
              , p = tf(n)
              , {onFocusableItemAdd: h, onFocusableItemRemove: v} = u;
            return (0,
            f.useEffect)( () => {
                if (r)
                    return h(),
                    () => v()
            }
            , [r, h, v]),
            (0,
            f.createElement)(td.ItemSlot, {
                scope: n,
                id: c,
                focusable: r,
                active: o
            }, (0,
            f.createElement)(y.WV.span, (0,
            d.Z)({
                tabIndex: s ? 0 : -1,
                "data-orientation": u.orientation
            }, l, {
                ref: t,
                onMouseDown: m(e.onMouseDown, e => {
                    r ? u.onItemFocus(c) : e.preventDefault()
                }
                ),
                onFocus: m(e.onFocus, () => u.onItemFocus(c)),
                onKeyDown: m(e.onKeyDown, e => {
                    if ("Tab" === e.key && e.shiftKey) {
                        u.onItemShiftTab();
                        return
                    }
                    if (e.target !== e.currentTarget)
                        return;
                    let t = function(e, t, n) {
                        var r;
                        let o = (r = e.key,
                        "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                        if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o)))
                            return tE[o]
                    }(e, u.orientation, u.dir);
                    if (void 0 !== t) {
                        e.preventDefault();
                        let o = p().filter(e => e.focusable).map(e => e.ref.current);
                        if ("last" === t)
                            o.reverse();
                        else if ("prev" === t || "next" === t) {
                            var n, r;
                            "prev" === t && o.reverse();
                            let i = o.indexOf(e.currentTarget);
                            o = u.loop ? (n = o,
                            r = i + 1,
                            n.map( (e, t) => n[(r + t) % n.length])) : o.slice(i + 1)
                        }
                        setTimeout( () => tx(o))
                    }
                }
                )
            })))
        }
        )
          , tE = {
            ArrowLeft: "prev",
            ArrowUp: "prev",
            ArrowRight: "next",
            ArrowDown: "next",
            PageUp: "first",
            Home: "first",
            PageDown: "last",
            End: "last"
        };
        function tx(e) {
            let t = document.activeElement;
            for (let n of e)
                if (n === t || (n.focus(),
                document.activeElement !== t))
                    return
        }
        var tC = new WeakMap
          , tR = new WeakMap
          , tS = {}
          , tT = 0
          , tM = function(e) {
            return e && (e.host || tM(e.parentNode))
        }
          , t_ = function(e, t, n, r) {
            var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                if (t.contains(e))
                    return e;
                var n = tM(e);
                return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"),
                null)
            }).filter(function(e) {
                return !!e
            });
            tS[n] || (tS[n] = new WeakMap);
            var i = tS[n]
              , l = []
              , a = new Set
              , c = new Set(o)
              , u = function(e) {
                !e || a.has(e) || (a.add(e),
                u(e.parentNode))
            };
            o.forEach(u);
            var s = function(e) {
                !e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                    if (a.has(e))
                        s(e);
                    else {
                        var t = e.getAttribute(r)
                          , o = null !== t && "false" !== t
                          , c = (tC.get(e) || 0) + 1
                          , u = (i.get(e) || 0) + 1;
                        tC.set(e, c),
                        i.set(e, u),
                        l.push(e),
                        1 === c && o && tR.set(e, !0),
                        1 === u && e.setAttribute(n, "true"),
                        o || e.setAttribute(r, "true")
                    }
                })
            };
            return s(t),
            a.clear(),
            tT++,
            function() {
                l.forEach(function(e) {
                    var t = tC.get(e) - 1
                      , o = i.get(e) - 1;
                    tC.set(e, t),
                    i.set(e, o),
                    t || (tR.has(e) || e.removeAttribute(r),
                    tR.delete(e)),
                    o || e.removeAttribute(n)
                }),
                --tT || (tC = new WeakMap,
                tC = new WeakMap,
                tR = new WeakMap,
                tS = {})
            }
        }
          , tk = function(e, t, n) {
            void 0 === n && (n = "data-aria-hidden");
            var r = Array.from(Array.isArray(e) ? e : [e])
              , o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
            return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
            t_(r, o, n, "aria-hidden")) : function() {
                return null
            }
        }
          , tP = function() {
            return (tP = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        function tA(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            return n
        }
        "function" == typeof SuppressedError && SuppressedError;
        var tO = "right-scroll-bar-position"
          , tD = "width-before-scroll-bar";
        function tL(e, t) {
            return "function" == typeof e ? e(t) : e && (e.current = t),
            e
        }
        var tI = new WeakMap
          , tF = (void 0 === i && (i = {}),
        (void 0 === l && (l = function(e) {
            return e
        }
        ),
        a = [],
        c = !1,
        u = {
            read: function() {
                if (c)
                    throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return a.length ? a[a.length - 1] : null
            },
            useMedium: function(e) {
                var t = l(e, c);
                return a.push(t),
                function() {
                    a = a.filter(function(e) {
                        return e !== t
                    })
                }
            },
            assignSyncMedium: function(e) {
                for (c = !0; a.length; ) {
                    var t = a;
                    a = [],
                    t.forEach(e)
                }
                a = {
                    push: function(t) {
                        return e(t)
                    },
                    filter: function() {
                        return a
                    }
                }
            },
            assignMedium: function(e) {
                c = !0;
                var t = [];
                if (a.length) {
                    var n = a;
                    a = [],
                    n.forEach(e),
                    t = a
                }
                var r = function() {
                    var n = t;
                    t = [],
                    n.forEach(e)
                }
                  , o = function() {
                    return Promise.resolve().then(r)
                };
                o(),
                a = {
                    push: function(e) {
                        t.push(e),
                        o()
                    },
                    filter: function(e) {
                        return t = t.filter(e),
                        a
                    }
                }
            }
        }).options = tP({
            async: !0,
            ssr: !1
        }, i),
        u)
          , tN = function() {}
          , tZ = f.forwardRef(function(e, t) {
            var n, r, o, i, l = f.useRef(null), a = f.useState({
                onScrollCapture: tN,
                onWheelCapture: tN,
                onTouchMoveCapture: tN
            }), c = a[0], u = a[1], s = e.forwardProps, d = e.children, p = e.className, m = e.removeScrollBar, h = e.enabled, v = e.shards, g = e.sideCar, w = e.noIsolation, y = e.inert, b = e.allowPinchZoom, E = e.as, x = tA(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), C = (n = [l, t],
            r = function(e) {
                return n.forEach(function(t) {
                    return tL(t, e)
                })
            }
            ,
            (o = (0,
            f.useState)(function() {
                return {
                    value: null,
                    callback: r,
                    facade: {
                        get current() {
                            return o.value
                        },
                        set current(value) {
                            var e = o.value;
                            e !== value && (o.value = value,
                            o.callback(value, e))
                        }
                    }
                }
            })[0]).callback = r,
            i = o.facade,
            f.useLayoutEffect(function() {
                var e = tI.get(i);
                if (e) {
                    var t = new Set(e)
                      , r = new Set(n)
                      , o = i.current;
                    t.forEach(function(e) {
                        r.has(e) || tL(e, null)
                    }),
                    r.forEach(function(e) {
                        t.has(e) || tL(e, o)
                    })
                }
                tI.set(i, n)
            }, [n]),
            i), R = tP(tP({}, x), c);
            return f.createElement(f.Fragment, null, h && f.createElement(g, {
                sideCar: tF,
                removeScrollBar: m,
                shards: v,
                noIsolation: w,
                inert: y,
                setCallbacks: u,
                allowPinchZoom: !!b,
                lockRef: l
            }), s ? f.cloneElement(f.Children.only(d), tP(tP({}, R), {
                ref: C
            })) : f.createElement(void 0 === E ? "div" : E, tP({}, R, {
                className: p,
                ref: C
            }), d))
        });
        tZ.defaultProps = {
            enabled: !0,
            removeScrollBar: !0,
            inert: !1
        },
        tZ.classNames = {
            fullWidth: tD,
            zeroRight: tO
        };
        var tW = function(e) {
            var t = e.sideCar
              , n = tA(e, ["sideCar"]);
            if (!t)
                throw Error("Sidecar: please provide `sideCar` property to import the right car");
            var r = t.read();
            if (!r)
                throw Error("Sidecar medium not found");
            return f.createElement(r, tP({}, n))
        };
        tW.isSideCarExport = !0;
        var tK = function() {
            var e = 0
              , t = null;
            return {
                add: function(r) {
                    if (0 == e && (t = function() {
                        if (!document)
                            return null;
                        var e = document.createElement("style");
                        e.type = "text/css";
                        var t = s || n.nc;
                        return t && e.setAttribute("nonce", t),
                        e
                    }())) {
                        var o, i;
                        (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)),
                        i = t,
                        (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
                    }
                    e++
                },
                remove: function() {
                    --e || !t || (t.parentNode && t.parentNode.removeChild(t),
                    t = null)
                }
            }
        }
          , tV = function() {
            var e = tK();
            return function(t, n) {
                f.useEffect(function() {
                    return e.add(t),
                    function() {
                        e.remove()
                    }
                }, [t && n])
            }
        }
          , tB = function() {
            var e = tV();
            return function(t) {
                return e(t.styles, t.dynamic),
                null
            }
        }
          , tH = function(e) {
            return parseInt(e || "", 10) || 0
        }
          , tU = function(e) {
            var t = window.getComputedStyle(document.body)
              , n = t["padding" === e ? "paddingLeft" : "marginLeft"]
              , r = t["padding" === e ? "paddingTop" : "marginTop"]
              , o = t["padding" === e ? "paddingRight" : "marginRight"];
            return [tH(n), tH(r), tH(o)]
        }
          , tz = function(e) {
            void 0 === e && (e = "margin");
            var t = tU(e)
              , n = document.documentElement.clientWidth
              , r = window.innerWidth;
            return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
            }
        }
          , tj = tB()
          , tX = "data-scroll-locked"
          , tG = function(e, t, n, r) {
            var o = e.left
              , i = e.top
              , l = e.right
              , a = e.gap;
            return void 0 === n && (n = "margin"),
            "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body[").concat(tX, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(tO, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(tD, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(tO, " .").concat(tO, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(tD, " .").concat(tD, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(tX, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
        }
          , tY = function(e) {
            var t = e.noRelative
              , n = e.noImportant
              , r = e.gapMode
              , o = void 0 === r ? "margin" : r
              , i = f.useMemo(function() {
                return tz(o)
            }, [o]);
            return f.useEffect(function() {
                return document.body.setAttribute(tX, ""),
                function() {
                    document.body.removeAttribute(tX)
                }
            }, []),
            f.createElement(tj, {
                styles: tG(i, !t, o, n ? "" : "!important")
            })
        }
          , tq = !1;
        try {
            var t$ = Object.defineProperty({}, "passive", {
                get: function() {
                    return tq = !0,
                    !0
                }
            });
            window.addEventListener("test", t$, t$),
            window.removeEventListener("test", t$, t$)
        } catch (e) {
            tq = !1
        }
        var tJ = !!tq && {
            passive: !1
        }
          , tQ = function(e, t) {
            var n = window.getComputedStyle(e);
            return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
        }
          , t0 = function(e, t) {
            var n = t;
            do {
                if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host),
                t1(e, n)) {
                    var r = t2(e, n);
                    if (r[1] > r[2])
                        return !0
                }
                n = n.parentNode
            } while (n && n !== document.body);
            return !1
        }
          , t1 = function(e, t) {
            return "v" === e ? tQ(t, "overflowY") : tQ(t, "overflowX")
        }
          , t2 = function(e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        }
          , t3 = function(e, t, n, r, o) {
            var i, l = (i = window.getComputedStyle(t).direction,
            "h" === e && "rtl" === i ? -1 : 1), a = l * r, c = n.target, u = t.contains(c), s = !1, d = a > 0, f = 0, p = 0;
            do {
                var m = t2(e, c)
                  , h = m[0]
                  , v = m[1] - m[2] - l * h;
                (h || v) && t1(e, c) && (f += v,
                p += h),
                c = c.parentNode
            } while (!u && c !== document.body || u && (t.contains(c) || t === c));
            return d && (o && 0 === f || !o && a > f) ? s = !0 : !d && (o && 0 === p || !o && -a > p) && (s = !0),
            s
        }
          , t5 = function(e) {
            return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        }
          , t9 = function(e) {
            return [e.deltaX, e.deltaY]
        }
          , t7 = function(e) {
            return e && "current"in e ? e.current : e
        }
          , t8 = 0
          , t4 = []
          , t6 = (tF.useMedium(function(e) {
            var t = f.useRef([])
              , n = f.useRef([0, 0])
              , r = f.useRef()
              , o = f.useState(t8++)[0]
              , i = f.useState(function() {
                return tB()
            })[0]
              , l = f.useRef(e);
            f.useEffect(function() {
                l.current = e
            }, [e]),
            f.useEffect(function() {
                if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(o));
                    var t = (function(e, t, n) {
                        if (n || 2 == arguments.length)
                            for (var r, o = 0, i = t.length; o < i; o++)
                                !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                                r[o] = t[o]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    }
                    )([e.lockRef.current], (e.shards || []).map(t7), !0).filter(Boolean);
                    return t.forEach(function(e) {
                        return e.classList.add("allow-interactivity-".concat(o))
                    }),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(o)),
                        t.forEach(function(e) {
                            return e.classList.remove("allow-interactivity-".concat(o))
                        })
                    }
                }
            }, [e.inert, e.lockRef.current, e.shards]);
            var a = f.useCallback(function(e, t) {
                if ("touches"in e && 2 === e.touches.length)
                    return !l.current.allowPinchZoom;
                var o, i = t5(e), a = n.current, c = "deltaX"in e ? e.deltaX : a[0] - i[0], u = "deltaY"in e ? e.deltaY : a[1] - i[1], s = e.target, d = Math.abs(c) > Math.abs(u) ? "h" : "v";
                if ("touches"in e && "h" === d && "range" === s.type)
                    return !1;
                var f = t0(d, s);
                if (!f)
                    return !0;
                if (f ? o = d : (o = "v" === d ? "h" : "v",
                f = t0(d, s)),
                !f)
                    return !1;
                if (!r.current && "changedTouches"in e && (c || u) && (r.current = o),
                !o)
                    return !0;
                var p = r.current || o;
                return t3(p, t, e, "h" === p ? c : u, !0)
            }, [])
              , c = f.useCallback(function(e) {
                if (t4.length && t4[t4.length - 1] === i) {
                    var n = "deltaY"in e ? t9(e) : t5(e)
                      , r = t.current.filter(function(t) {
                        var r;
                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                    })[0];
                    if (r && r.should) {
                        e.cancelable && e.preventDefault();
                        return
                    }
                    if (!r) {
                        var o = (l.current.shards || []).map(t7).filter(Boolean).filter(function(t) {
                            return t.contains(e.target)
                        });
                        (o.length > 0 ? a(e, o[0]) : !l.current.noIsolation) && e.cancelable && e.preventDefault()
                    }
                }
            }, [])
              , u = f.useCallback(function(e, n, r, o) {
                var i = {
                    name: e,
                    delta: n,
                    target: r,
                    should: o
                };
                t.current.push(i),
                setTimeout(function() {
                    t.current = t.current.filter(function(e) {
                        return e !== i
                    })
                }, 1)
            }, [])
              , s = f.useCallback(function(e) {
                n.current = t5(e),
                r.current = void 0
            }, [])
              , d = f.useCallback(function(t) {
                u(t.type, t9(t), t.target, a(t, e.lockRef.current))
            }, [])
              , p = f.useCallback(function(t) {
                u(t.type, t5(t), t.target, a(t, e.lockRef.current))
            }, []);
            f.useEffect(function() {
                return t4.push(i),
                e.setCallbacks({
                    onScrollCapture: d,
                    onWheelCapture: d,
                    onTouchMoveCapture: p
                }),
                document.addEventListener("wheel", c, tJ),
                document.addEventListener("touchmove", c, tJ),
                document.addEventListener("touchstart", s, tJ),
                function() {
                    t4 = t4.filter(function(e) {
                        return e !== i
                    }),
                    document.removeEventListener("wheel", c, tJ),
                    document.removeEventListener("touchmove", c, tJ),
                    document.removeEventListener("touchstart", s, tJ)
                }
            }, []);
            var m = e.removeScrollBar
              , h = e.inert;
            return f.createElement(f.Fragment, null, h ? f.createElement(i, {
                styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
            }) : null, m ? f.createElement(tY, {
                gapMode: "margin"
            }) : null)
        }),
        tW)
          , ne = f.forwardRef(function(e, t) {
            return f.createElement(tZ, tP({}, e, {
                ref: t,
                sideCar: t6
            }))
        });
        ne.classNames = tZ.classNames;
        let nt = ["Enter", " "]
          , nn = ["ArrowUp", "PageDown", "End"]
          , nr = ["ArrowDown", "PageUp", "Home", ...nn]
          , no = {
            ltr: [...nt, "ArrowRight"],
            rtl: [...nt, "ArrowLeft"]
        }
          , ni = {
            ltr: ["ArrowLeft"],
            rtl: ["ArrowRight"]
        }
          , nl = "Menu"
          , [na,nc,nu] = E(nl)
          , [ns,nd] = v(nl, [nu, e1, th])
          , nf = e1()
          , np = th()
          , [nm,nh] = ns(nl)
          , [nv,ng] = ns(nl)
          , nw = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeMenu: n, ...r} = e
              , o = nf(n);
            return (0,
            f.createElement)(e5, (0,
            d.Z)({}, o, r, {
                ref: t
            }))
        }
        )
          , ny = "MenuPortal"
          , [nb,nE] = ns(ny, {
            forceMount: void 0
        })
          , nx = "MenuContent"
          , [nC,nR] = ns(nx)
          , nS = (0,
        f.forwardRef)( (e, t) => {
            let n = nE(nx, e.__scopeMenu)
              , {forceMount: r=n.forceMount, ...o} = e
              , i = nh(nx, e.__scopeMenu)
              , l = ng(nx, e.__scopeMenu);
            return (0,
            f.createElement)(na.Provider, {
                scope: e.__scopeMenu
            }, (0,
            f.createElement)(tl, {
                present: r || i.open
            }, (0,
            f.createElement)(na.Slot, {
                scope: e.__scopeMenu
            }, l.modal ? (0,
            f.createElement)(nT, (0,
            d.Z)({}, o, {
                ref: t
            })) : (0,
            f.createElement)(nM, (0,
            d.Z)({}, o, {
                ref: t
            })))))
        }
        )
          , nT = (0,
        f.forwardRef)( (e, t) => {
            let n = nh(nx, e.__scopeMenu)
              , r = (0,
            f.useRef)(null)
              , o = (0,
            h.e)(t, r);
            return (0,
            f.useEffect)( () => {
                let e = r.current;
                if (e)
                    return tk(e)
            }
            , []),
            (0,
            f.createElement)(n_, (0,
            d.Z)({}, e, {
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: n.open,
                disableOutsideScroll: !0,
                onFocusOutside: m(e.onFocusOutside, e => e.preventDefault(), {
                    checkForDefaultPrevented: !1
                }),
                onDismiss: () => n.onOpenChange(!1)
            }))
        }
        )
          , nM = (0,
        f.forwardRef)( (e, t) => {
            let n = nh(nx, e.__scopeMenu);
            return (0,
            f.createElement)(n_, (0,
            d.Z)({}, e, {
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                onDismiss: () => n.onOpenChange(!1)
            }))
        }
        )
          , n_ = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeMenu: n, loop: r=!1, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: l, disableOutsidePointerEvents: a, onEntryFocus: c, onEscapeKeyDown: u, onPointerDownOutside: s, onFocusOutside: p, onInteractOutside: v, onDismiss: g, disableOutsideScroll: w, ...y} = e
              , E = nh(nx, n)
              , x = ng(nx, n)
              , C = nf(n)
              , R = np(n)
              , S = nc(n)
              , [M,_] = (0,
            f.useState)(null)
              , A = (0,
            f.useRef)(null)
              , O = (0,
            h.e)(t, A, E.onContentChange)
              , D = (0,
            f.useRef)(0)
              , I = (0,
            f.useRef)("")
              , F = (0,
            f.useRef)(0)
              , N = (0,
            f.useRef)(null)
              , Z = (0,
            f.useRef)("right")
              , W = (0,
            f.useRef)(0)
              , K = w ? ne : f.Fragment
              , V = w ? {
                as: b.g7,
                allowPinchZoom: !0
            } : void 0
              , B = e => {
                var t, n;
                let r = I.current + e
                  , o = S().filter(e => !e.disabled)
                  , i = document.activeElement
                  , l = null === (t = o.find(e => e.ref.current === i)) || void 0 === t ? void 0 : t.textValue
                  , a = function(e, t, n) {
                    var r;
                    let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t
                      , i = (r = Math.max(n ? e.indexOf(n) : -1, 0),
                    e.map( (t, n) => e[(r + n) % e.length]));
                    1 === o.length && (i = i.filter(e => e !== n));
                    let l = i.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
                    return l !== n ? l : void 0
                }(o.map(e => e.textValue), r, l)
                  , c = null === (n = o.find(e => e.textValue === a)) || void 0 === n ? void 0 : n.ref.current;
                !function e(t) {
                    I.current = t,
                    window.clearTimeout(D.current),
                    "" !== t && (D.current = window.setTimeout( () => e(""), 1e3))
                }(r),
                c && setTimeout( () => c.focus())
            }
            ;
            (0,
            f.useEffect)( () => () => window.clearTimeout(D.current), []),
            (0,
            f.useEffect)( () => {
                var e, t;
                let n = document.querySelectorAll("[data-radix-focus-guard]");
                return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : P()),
                document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : P()),
                k++,
                () => {
                    1 === k && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()),
                    k--
                }
            }
            , []);
            let H = (0,
            f.useCallback)(e => {
                var t, n, r;
                return Z.current === (null === (t = N.current) || void 0 === t ? void 0 : t.side) && !!(r = null === (n = N.current) || void 0 === n ? void 0 : n.area) && function(e, t) {
                    let {x: n, y: r} = e
                      , o = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        let l = t[e].x
                          , a = t[e].y
                          , c = t[i].x
                          , u = t[i].y;
                        a > r != u > r && n < (c - l) * (r - a) / (u - a) + l && (o = !o)
                    }
                    return o
                }({
                    x: e.clientX,
                    y: e.clientY
                }, r)
            }
            , []);
            return (0,
            f.createElement)(nC, {
                scope: n,
                searchRef: I,
                onItemEnter: (0,
                f.useCallback)(e => {
                    H(e) && e.preventDefault()
                }
                , [H]),
                onItemLeave: (0,
                f.useCallback)(e => {
                    var t;
                    H(e) || (null === (t = A.current) || void 0 === t || t.focus(),
                    _(null))
                }
                , [H]),
                onTriggerLeave: (0,
                f.useCallback)(e => {
                    H(e) && e.preventDefault()
                }
                , [H]),
                pointerGraceTimerRef: F,
                onPointerGraceIntentChange: (0,
                f.useCallback)(e => {
                    N.current = e
                }
                , [])
            }, (0,
            f.createElement)(K, V, (0,
            f.createElement)(L, {
                asChild: !0,
                trapped: o,
                onMountAutoFocus: m(i, e => {
                    var t;
                    e.preventDefault(),
                    null === (t = A.current) || void 0 === t || t.focus()
                }
                ),
                onUnmountAutoFocus: l
            }, (0,
            f.createElement)(T, {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: u,
                onPointerDownOutside: s,
                onFocusOutside: p,
                onInteractOutside: v,
                onDismiss: g
            }, (0,
            f.createElement)(tw, (0,
            d.Z)({
                asChild: !0
            }, R, {
                dir: x.dir,
                orientation: "vertical",
                loop: r,
                currentTabStopId: M,
                onCurrentTabStopIdChange: _,
                onEntryFocus: m(c, e => {
                    x.isUsingKeyboardRef.current || e.preventDefault()
                }
                )
            }), (0,
            f.createElement)(e4, (0,
            d.Z)({
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": n$(E.open),
                "data-radix-menu-content": "",
                dir: x.dir
            }, C, y, {
                ref: O,
                style: {
                    outline: "none",
                    ...y.style
                },
                onKeyDown: m(y.onKeyDown, e => {
                    let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget
                      , n = e.ctrlKey || e.altKey || e.metaKey
                      , r = 1 === e.key.length;
                    t && ("Tab" === e.key && e.preventDefault(),
                    !n && r && B(e.key));
                    let o = A.current;
                    if (e.target !== o || !nr.includes(e.key))
                        return;
                    e.preventDefault();
                    let i = S().filter(e => !e.disabled).map(e => e.ref.current);
                    nn.includes(e.key) && i.reverse(),
                    function(e) {
                        let t = document.activeElement;
                        for (let n of e)
                            if (n === t || (n.focus(),
                            document.activeElement !== t))
                                return
                    }(i)
                }
                ),
                onBlur: m(e.onBlur, e => {
                    e.currentTarget.contains(e.target) || (window.clearTimeout(D.current),
                    I.current = "")
                }
                ),
                onPointerMove: m(e.onPointerMove, n0(e => {
                    let t = e.target
                      , n = W.current !== e.clientX;
                    if (e.currentTarget.contains(t) && n) {
                        let t = e.clientX > W.current ? "right" : "left";
                        Z.current = t,
                        W.current = e.clientX
                    }
                }
                ))
            })))))))
        }
        )
          , nk = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeMenu: n, ...r} = e;
            return (0,
            f.createElement)(y.WV.div, (0,
            d.Z)({
                role: "group"
            }, r, {
                ref: t
            }))
        }
        )
          , nP = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeMenu: n, ...r} = e;
            return (0,
            f.createElement)(y.WV.div, (0,
            d.Z)({}, r, {
                ref: t
            }))
        }
        )
          , nA = "MenuItem"
          , nO = "menu.itemSelect"
          , nD = (0,
        f.forwardRef)( (e, t) => {
            let {disabled: n=!1, onSelect: r, ...o} = e
              , i = (0,
            f.useRef)(null)
              , l = ng(nA, e.__scopeMenu)
              , a = nR(nA, e.__scopeMenu)
              , c = (0,
            h.e)(t, i)
              , u = (0,
            f.useRef)(!1);
            return (0,
            f.createElement)(nL, (0,
            d.Z)({}, o, {
                ref: c,
                disabled: n,
                onClick: m(e.onClick, () => {
                    let e = i.current;
                    if (!n && e) {
                        let t = new CustomEvent(nO,{
                            bubbles: !0,
                            cancelable: !0
                        });
                        e.addEventListener(nO, e => null == r ? void 0 : r(e), {
                            once: !0
                        }),
                        (0,
                        y.jH)(e, t),
                        t.defaultPrevented ? u.current = !1 : l.onClose()
                    }
                }
                ),
                onPointerDown: t => {
                    var n;
                    null === (n = e.onPointerDown) || void 0 === n || n.call(e, t),
                    u.current = !0
                }
                ,
                onPointerUp: m(e.onPointerUp, e => {
                    var t;
                    u.current || null === (t = e.currentTarget) || void 0 === t || t.click()
                }
                ),
                onKeyDown: m(e.onKeyDown, e => {
                    let t = "" !== a.searchRef.current;
                    !n && (!t || " " !== e.key) && nt.includes(e.key) && (e.currentTarget.click(),
                    e.preventDefault())
                }
                )
            }))
        }
        )
          , nL = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeMenu: n, disabled: r=!1, textValue: o, ...i} = e
              , l = nR(nA, n)
              , a = np(n)
              , c = (0,
            f.useRef)(null)
              , u = (0,
            h.e)(t, c)
              , [s,p] = (0,
            f.useState)(!1)
              , [v,g] = (0,
            f.useState)("");
            return (0,
            f.useEffect)( () => {
                let e = c.current;
                if (e) {
                    var t;
                    g((null !== (t = e.textContent) && void 0 !== t ? t : "").trim())
                }
            }
            , [i.children]),
            (0,
            f.createElement)(na.ItemSlot, {
                scope: n,
                disabled: r,
                textValue: null != o ? o : v
            }, (0,
            f.createElement)(tb, (0,
            d.Z)({
                asChild: !0
            }, a, {
                focusable: !r
            }), (0,
            f.createElement)(y.WV.div, (0,
            d.Z)({
                role: "menuitem",
                "data-highlighted": s ? "" : void 0,
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0
            }, i, {
                ref: u,
                onPointerMove: m(e.onPointerMove, n0(e => {
                    r ? l.onItemLeave(e) : (l.onItemEnter(e),
                    e.defaultPrevented || e.currentTarget.focus())
                }
                )),
                onPointerLeave: m(e.onPointerLeave, n0(e => l.onItemLeave(e))),
                onFocus: m(e.onFocus, () => p(!0)),
                onBlur: m(e.onBlur, () => p(!1))
            }))))
        }
        )
          , nI = (0,
        f.forwardRef)( (e, t) => {
            let {checked: n=!1, onCheckedChange: r, ...o} = e;
            return (0,
            f.createElement)(nV, {
                scope: e.__scopeMenu,
                checked: n
            }, (0,
            f.createElement)(nD, (0,
            d.Z)({
                role: "menuitemcheckbox",
                "aria-checked": nJ(n) ? "mixed" : n
            }, o, {
                ref: t,
                "data-state": nQ(n),
                onSelect: m(o.onSelect, () => null == r ? void 0 : r(!!nJ(n) || !n), {
                    checkForDefaultPrevented: !1
                })
            })))
        }
        )
          , [nF,nN] = ns("MenuRadioGroup", {
            value: void 0,
            onValueChange: () => {}
        })
          , nZ = (0,
        f.forwardRef)( (e, t) => {
            let {value: n, onValueChange: r, ...o} = e
              , i = g(r);
            return (0,
            f.createElement)(nF, {
                scope: e.__scopeMenu,
                value: n,
                onValueChange: i
            }, (0,
            f.createElement)(nk, (0,
            d.Z)({}, o, {
                ref: t
            })))
        }
        )
          , nW = (0,
        f.forwardRef)( (e, t) => {
            let {value: n, ...r} = e
              , o = nN("MenuRadioItem", e.__scopeMenu)
              , i = n === o.value;
            return (0,
            f.createElement)(nV, {
                scope: e.__scopeMenu,
                checked: i
            }, (0,
            f.createElement)(nD, (0,
            d.Z)({
                role: "menuitemradio",
                "aria-checked": i
            }, r, {
                ref: t,
                "data-state": nQ(i),
                onSelect: m(r.onSelect, () => {
                    var e;
                    return null === (e = o.onValueChange) || void 0 === e ? void 0 : e.call(o, n)
                }
                , {
                    checkForDefaultPrevented: !1
                })
            })))
        }
        )
          , nK = "MenuItemIndicator"
          , [nV,nB] = ns(nK, {
            checked: !1
        })
          , nH = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeMenu: n, forceMount: r, ...o} = e
              , i = nB(nK, n);
            return (0,
            f.createElement)(tl, {
                present: r || nJ(i.checked) || !0 === i.checked
            }, (0,
            f.createElement)(y.WV.span, (0,
            d.Z)({}, o, {
                ref: t,
                "data-state": nQ(i.checked)
            })))
        }
        )
          , nU = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeMenu: n, ...r} = e;
            return (0,
            f.createElement)(y.WV.div, (0,
            d.Z)({
                role: "separator",
                "aria-orientation": "horizontal"
            }, r, {
                ref: t
            }))
        }
        )
          , nz = ( (e, t) => {
            let {__scopeMenu: n, ...r} = e
              , o = nf(n);
            return (0,
            f.createElement)(te, (0,
            d.Z)({}, o, r, {
                ref: t
            }))
        }
        ,
        "MenuSub")
          , [nj,nX] = ns(nz)
          , nG = "MenuSubTrigger"
          , nY = (0,
        f.forwardRef)( (e, t) => {
            let n = nh(nG, e.__scopeMenu)
              , r = ng(nG, e.__scopeMenu)
              , o = nX(nG, e.__scopeMenu)
              , i = nR(nG, e.__scopeMenu)
              , l = (0,
            f.useRef)(null)
              , {pointerGraceTimerRef: a, onPointerGraceIntentChange: c} = i
              , u = {
                __scopeMenu: e.__scopeMenu
            }
              , s = (0,
            f.useCallback)( () => {
                l.current && window.clearTimeout(l.current),
                l.current = null
            }
            , []);
            return (0,
            f.useEffect)( () => s, [s]),
            (0,
            f.useEffect)( () => {
                let e = a.current;
                return () => {
                    window.clearTimeout(e),
                    c(null)
                }
            }
            , [a, c]),
            (0,
            f.createElement)(nw, (0,
            d.Z)({
                asChild: !0
            }, u), (0,
            f.createElement)(nL, (0,
            d.Z)({
                id: o.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": n.open,
                "aria-controls": o.contentId,
                "data-state": n$(n.open)
            }, e, {
                ref: (0,
                h.F)(t, o.onTriggerChange),
                onClick: t => {
                    var r;
                    null === (r = e.onClick) || void 0 === r || r.call(e, t),
                    e.disabled || t.defaultPrevented || (t.currentTarget.focus(),
                    n.open || n.onOpenChange(!0))
                }
                ,
                onPointerMove: m(e.onPointerMove, n0(t => {
                    i.onItemEnter(t),
                    t.defaultPrevented || e.disabled || n.open || l.current || (i.onPointerGraceIntentChange(null),
                    l.current = window.setTimeout( () => {
                        n.onOpenChange(!0),
                        s()
                    }
                    , 100))
                }
                )),
                onPointerLeave: m(e.onPointerLeave, n0(e => {
                    var t, r;
                    s();
                    let o = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                    if (o) {
                        let t = null === (r = n.content) || void 0 === r ? void 0 : r.dataset.side
                          , l = "right" === t
                          , c = o[l ? "left" : "right"]
                          , u = o[l ? "right" : "left"];
                        i.onPointerGraceIntentChange({
                            area: [{
                                x: e.clientX + (l ? -5 : 5),
                                y: e.clientY
                            }, {
                                x: c,
                                y: o.top
                            }, {
                                x: u,
                                y: o.top
                            }, {
                                x: u,
                                y: o.bottom
                            }, {
                                x: c,
                                y: o.bottom
                            }],
                            side: t
                        }),
                        window.clearTimeout(a.current),
                        a.current = window.setTimeout( () => i.onPointerGraceIntentChange(null), 300)
                    } else {
                        if (i.onTriggerLeave(e),
                        e.defaultPrevented)
                            return;
                        i.onPointerGraceIntentChange(null)
                    }
                }
                )),
                onKeyDown: m(e.onKeyDown, t => {
                    let o = "" !== i.searchRef.current;
                    if (!e.disabled && (!o || " " !== t.key) && no[r.dir].includes(t.key)) {
                        var l;
                        n.onOpenChange(!0),
                        null === (l = n.content) || void 0 === l || l.focus(),
                        t.preventDefault()
                    }
                }
                )
            })))
        }
        )
          , nq = (0,
        f.forwardRef)( (e, t) => {
            let n = nE(nx, e.__scopeMenu)
              , {forceMount: r=n.forceMount, ...o} = e
              , i = nh(nx, e.__scopeMenu)
              , l = ng(nx, e.__scopeMenu)
              , a = nX("MenuSubContent", e.__scopeMenu)
              , c = (0,
            f.useRef)(null)
              , u = (0,
            h.e)(t, c);
            return (0,
            f.createElement)(na.Provider, {
                scope: e.__scopeMenu
            }, (0,
            f.createElement)(tl, {
                present: r || i.open
            }, (0,
            f.createElement)(na.Slot, {
                scope: e.__scopeMenu
            }, (0,
            f.createElement)(n_, (0,
            d.Z)({
                id: a.contentId,
                "aria-labelledby": a.triggerId
            }, o, {
                ref: u,
                align: "start",
                side: "rtl" === l.dir ? "left" : "right",
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                trapFocus: !1,
                onOpenAutoFocus: e => {
                    var t;
                    l.isUsingKeyboardRef.current && (null === (t = c.current) || void 0 === t || t.focus()),
                    e.preventDefault()
                }
                ,
                onCloseAutoFocus: e => e.preventDefault(),
                onFocusOutside: m(e.onFocusOutside, e => {
                    e.target !== a.trigger && i.onOpenChange(!1)
                }
                ),
                onEscapeKeyDown: m(e.onEscapeKeyDown, e => {
                    l.onClose(),
                    e.preventDefault()
                }
                ),
                onKeyDown: m(e.onKeyDown, e => {
                    let t = e.currentTarget.contains(e.target)
                      , n = ni[l.dir].includes(e.key);
                    if (t && n) {
                        var r;
                        i.onOpenChange(!1),
                        null === (r = a.trigger) || void 0 === r || r.focus(),
                        e.preventDefault()
                    }
                }
                )
            })))))
        }
        );
        function n$(e) {
            return e ? "open" : "closed"
        }
        function nJ(e) {
            return "indeterminate" === e
        }
        function nQ(e) {
            return nJ(e) ? "indeterminate" : e ? "checked" : "unchecked"
        }
        function n0(e) {
            return t => "mouse" === t.pointerType ? e(t) : void 0
        }
        let n1 = e => {
            let {__scopeMenu: t, open: n=!1, children: r, dir: o, onOpenChange: i, modal: l=!0} = e
              , a = nf(t)
              , [c,u] = (0,
            f.useState)(null)
              , s = (0,
            f.useRef)(!1)
              , d = g(i)
              , p = C(o);
            return (0,
            f.useEffect)( () => {
                let e = () => {
                    s.current = !0,
                    document.addEventListener("pointerdown", t, {
                        capture: !0,
                        once: !0
                    }),
                    document.addEventListener("pointermove", t, {
                        capture: !0,
                        once: !0
                    })
                }
                  , t = () => s.current = !1;
                return document.addEventListener("keydown", e, {
                    capture: !0
                }),
                () => {
                    document.removeEventListener("keydown", e, {
                        capture: !0
                    }),
                    document.removeEventListener("pointerdown", t, {
                        capture: !0
                    }),
                    document.removeEventListener("pointermove", t, {
                        capture: !0
                    })
                }
            }
            , []),
            (0,
            f.createElement)(to, a, (0,
            f.createElement)(nm, {
                scope: t,
                open: n,
                onOpenChange: d,
                content: c,
                onContentChange: u
            }, (0,
            f.createElement)(nv, {
                scope: t,
                onClose: (0,
                f.useCallback)( () => d(!1), [d]),
                isUsingKeyboardRef: s,
                dir: p,
                modal: l
            }, r)))
        }
          , n2 = e => {
            let {__scopeMenu: t, forceMount: n, children: r, container: o} = e
              , i = nh(ny, t);
            return (0,
            f.createElement)(nb, {
                scope: t,
                forceMount: n
            }, (0,
            f.createElement)(tl, {
                present: n || i.open
            }, (0,
            f.createElement)(ti, {
                asChild: !0,
                container: o
            }, r)))
        }
          , n3 = e => {
            let {__scopeMenu: t, children: n, open: r=!1, onOpenChange: o} = e
              , i = nh(nz, t)
              , l = nf(t)
              , [a,c] = (0,
            f.useState)(null)
              , [u,s] = (0,
            f.useState)(null)
              , d = g(o);
            return (0,
            f.useEffect)( () => (!1 === i.open && d(!1),
            () => d(!1)), [i.open, d]),
            (0,
            f.createElement)(to, l, (0,
            f.createElement)(nm, {
                scope: t,
                open: r,
                onOpenChange: d,
                content: u,
                onContentChange: s
            }, (0,
            f.createElement)(nj, {
                scope: t,
                contentId: H(),
                triggerId: H(),
                trigger: a,
                onTriggerChange: c
            }, n)))
        }
          , n5 = "DropdownMenu"
          , [n9,n7] = v(n5, [nd])
          , n8 = nd()
          , [n4,n6] = n9(n5)
          , re = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeDropdownMenu: n, disabled: r=!1, ...o} = e
              , i = n6("DropdownMenuTrigger", n)
              , l = n8(n);
            return (0,
            f.createElement)(nw, (0,
            d.Z)({
                asChild: !0
            }, l), (0,
            f.createElement)(y.WV.button, (0,
            d.Z)({
                type: "button",
                id: i.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": i.open,
                "aria-controls": i.open ? i.contentId : void 0,
                "data-state": i.open ? "open" : "closed",
                "data-disabled": r ? "" : void 0,
                disabled: r
            }, o, {
                ref: (0,
                h.F)(t, i.triggerRef),
                onPointerDown: m(e.onPointerDown, e => {
                    r || 0 !== e.button || !1 !== e.ctrlKey || (i.onOpenToggle(),
                    i.open || e.preventDefault())
                }
                ),
                onKeyDown: m(e.onKeyDown, e => {
                    !r && (["Enter", " "].includes(e.key) && i.onOpenToggle(),
                    "ArrowDown" === e.key && i.onOpenChange(!0),
                    ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                }
                )
            })))
        }
        )
          , rt = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeDropdownMenu: n, ...r} = e
              , o = n6("DropdownMenuContent", n)
              , i = n8(n)
              , l = (0,
            f.useRef)(!1);
            return (0,
            f.createElement)(nS, (0,
            d.Z)({
                id: o.contentId,
                "aria-labelledby": o.triggerId
            }, i, r, {
                ref: t,
                onCloseAutoFocus: m(e.onCloseAutoFocus, e => {
                    var t;
                    l.current || null === (t = o.triggerRef.current) || void 0 === t || t.focus(),
                    l.current = !1,
                    e.preventDefault()
                }
                ),
                onInteractOutside: m(e.onInteractOutside, e => {
                    let t = e.detail.originalEvent
                      , n = 0 === t.button && !0 === t.ctrlKey
                      , r = 2 === t.button || n;
                    (!o.modal || r) && (l.current = !0)
                }
                ),
                style: {
                    ...e.style,
                    "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                }
            }))
        }
        )
          , rn = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeDropdownMenu: n, ...r} = e
              , o = n8(n);
            return (0,
            f.createElement)(nk, (0,
            d.Z)({}, o, r, {
                ref: t
            }))
        }
        )
          , rr = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeDropdownMenu: n, ...r} = e
              , o = n8(n);
            return (0,
            f.createElement)(nP, (0,
            d.Z)({}, o, r, {
                ref: t
            }))
        }
        )
          , ro = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeDropdownMenu: n, ...r} = e
              , o = n8(n);
            return (0,
            f.createElement)(nD, (0,
            d.Z)({}, o, r, {
                ref: t
            }))
        }
        )
          , ri = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeDropdownMenu: n, ...r} = e
              , o = n8(n);
            return (0,
            f.createElement)(nI, (0,
            d.Z)({}, o, r, {
                ref: t
            }))
        }
        )
          , rl = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeDropdownMenu: n, ...r} = e
              , o = n8(n);
            return (0,
            f.createElement)(nZ, (0,
            d.Z)({}, o, r, {
                ref: t
            }))
        }
        )
          , ra = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeDropdownMenu: n, ...r} = e
              , o = n8(n);
            return (0,
            f.createElement)(nW, (0,
            d.Z)({}, o, r, {
                ref: t
            }))
        }
        )
          , rc = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeDropdownMenu: n, ...r} = e
              , o = n8(n);
            return (0,
            f.createElement)(nH, (0,
            d.Z)({}, o, r, {
                ref: t
            }))
        }
        )
          , ru = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeDropdownMenu: n, ...r} = e
              , o = n8(n);
            return (0,
            f.createElement)(nU, (0,
            d.Z)({}, o, r, {
                ref: t
            }))
        }
        )
          , rs = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeDropdownMenu: n, ...r} = e
              , o = n8(n);
            return (0,
            f.createElement)(nY, (0,
            d.Z)({}, o, r, {
                ref: t
            }))
        }
        )
          , rd = (0,
        f.forwardRef)( (e, t) => {
            let {__scopeDropdownMenu: n, ...r} = e
              , o = n8(n);
            return (0,
            f.createElement)(nq, (0,
            d.Z)({}, o, r, {
                ref: t,
                style: {
                    ...e.style,
                    "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                }
            }))
        }
        )
          , rf = e => {
            let {__scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: i, onOpenChange: l, modal: a=!0} = e
              , c = n8(t)
              , u = (0,
            f.useRef)(null)
              , [s=!1,p] = w({
                prop: o,
                defaultProp: i,
                onChange: l
            });
            return (0,
            f.createElement)(n4, {
                scope: t,
                triggerId: H(),
                triggerRef: u,
                contentId: H(),
                open: s,
                onOpenChange: p,
                onOpenToggle: (0,
                f.useCallback)( () => p(e => !e), [p]),
                modal: a
            }, (0,
            f.createElement)(n1, (0,
            d.Z)({}, c, {
                open: s,
                onOpenChange: p,
                dir: r,
                modal: a
            }), n))
        }
          , rp = re
          , rm = e => {
            let {__scopeDropdownMenu: t, ...n} = e
              , r = n8(t);
            return (0,
            f.createElement)(n2, (0,
            d.Z)({}, r, n))
        }
          , rh = rt
          , rv = rn
          , rg = rr
          , rw = ro
          , ry = ri
          , rb = rl
          , rE = ra
          , rx = rc
          , rC = ru
          , rR = e => {
            let {__scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: i} = e
              , l = n8(t)
              , [a=!1,c] = w({
                prop: r,
                defaultProp: i,
                onChange: o
            });
            return (0,
            f.createElement)(n3, (0,
            d.Z)({}, l, {
                open: a,
                onOpenChange: c
            }), n)
        }
          , rS = rs
          , rT = rd
    }
}]);
