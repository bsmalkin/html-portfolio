(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[57], {
    9789: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 7060))
    },
    7060: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            Navbar: function() {
                return w
            }
        });
        var a = r(9506)
          , s = r(4985)
          , n = r(2820)
          , i = r(5791)
          , l = r(4518)
          , o = r(9664)
          , d = r(5754)
          , c = r(3015)
          , f = r(7971)
          , u = r(9860);
        let m = o.fC
          , x = o.xz;
        o.ZA,
        o.Uv,
        o.Tr,
        o.Ee,
        n.forwardRef( (e, t) => {
            let {className: r, inset: s, children: n, ...i} = e;
            return (0,
            a.jsxs)(o.fF, {
                ref: t,
                className: (0,
                u.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", s && "pl-8", r),
                ...i,
                children: [n, (0,
                a.jsx)(d.Z, {
                    className: "ml-auto size-4"
                })]
            })
        }
        ).displayName = o.fF.displayName,
        n.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)(o.tu, {
                ref: t,
                className: (0,
                u.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r),
                ...s
            })
        }
        ).displayName = o.tu.displayName;
        let p = n.forwardRef( (e, t) => {
            let {className: r, sideOffset: s=4, ...n} = e;
            return (0,
            a.jsx)(o.Uv, {
                children: (0,
                a.jsx)(o.VY, {
                    ref: t,
                    sideOffset: s,
                    className: (0,
                    u.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border  bg-white dark:bg-black p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r),
                    ...n
                })
            })
        }
        );
        p.displayName = o.VY.displayName;
        let h = n.forwardRef( (e, t) => {
            let {className: r, inset: s, ...n} = e;
            return (0,
            a.jsx)(o.ck, {
                ref: t,
                className: (0,
                u.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s && "pl-8", r),
                ...n
            })
        }
        );
        function b() {
            let {setTheme: e} = (0,
            i.F)();
            return (0,
            a.jsxs)(m, {
                children: [(0,
                a.jsx)(x, {
                    asChild: !0,
                    children: (0,
                    a.jsxs)(l.z, {
                        variant: "outline",
                        size: "icon",
                        children: [(0,
                        a.jsx)(s.NWY, {
                            className: "size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        }), (0,
                        a.jsx)(s.kLh, {
                            className: "absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        }), (0,
                        a.jsx)("span", {
                            className: "sr-only",
                            children: "Toggle theme"
                        })]
                    })
                }), (0,
                a.jsxs)(p, {
                    align: "end",
                    children: [(0,
                    a.jsx)(h, {
                        onClick: () => e("light"),
                        children: "Light"
                    }), (0,
                    a.jsx)(h, {
                        onClick: () => e("dark"),
                        children: "Dark"
                    }), (0,
                    a.jsx)(h, {
                        onClick: () => e("system"),
                        children: "System"
                    })]
                })]
            })
        }
        h.displayName = o.ck.displayName,
        n.forwardRef( (e, t) => {
            let {className: r, children: s, checked: n, ...i} = e;
            return (0,
            a.jsxs)(o.oC, {
                ref: t,
                className: (0,
                u.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
                checked: n,
                ...i,
                children: [(0,
                a.jsx)("span", {
                    className: "absolute left-2 flex size-3.5 items-center justify-center",
                    children: (0,
                    a.jsx)(o.wU, {
                        children: (0,
                        a.jsx)(c.Z, {
                            className: "size-4"
                        })
                    })
                }), s]
            })
        }
        ).displayName = o.oC.displayName,
        n.forwardRef( (e, t) => {
            let {className: r, children: s, ...n} = e;
            return (0,
            a.jsxs)(o.Rk, {
                ref: t,
                className: (0,
                u.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
                ...n,
                children: [(0,
                a.jsx)("span", {
                    className: "absolute left-2 flex size-3.5 items-center justify-center",
                    children: (0,
                    a.jsx)(o.wU, {
                        children: (0,
                        a.jsx)(f.Z, {
                            className: "size-2 fill-current"
                        })
                    })
                }), s]
            })
        }
        ).displayName = o.Rk.displayName,
        n.forwardRef( (e, t) => {
            let {className: r, inset: s, ...n} = e;
            return (0,
            a.jsx)(o.__, {
                ref: t,
                className: (0,
                u.cn)("px-2 py-1.5 text-sm font-semibold", s && "pl-8", r),
                ...n
            })
        }
        ).displayName = o.__.displayName,
        n.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            a.jsx)(o.Z0, {
                ref: t,
                className: (0,
                u.cn)("-mx-1 my-1 h-px bg-muted", r),
                ...s
            })
        }
        ).displayName = o.Z0.displayName;
        var j = r(3947);
        r(3507);
        var g = r(3922);
        let v = {
            type: "spring",
            mass: .5,
            damping: 11.5,
            stiffness: 100,
            restDelta: .001,
            restSpeed: .001
        }
          , y = e => {
            let {setActive: t, active: r, item: s, children: n} = e;
            return (0,
            a.jsxs)("div", {
                onMouseEnter: () => t(s),
                className: "relative ",
                children: [(0,
                a.jsx)(j.E.p, {
                    transition: {
                        duration: .3
                    },
                    className: "cursor-pointer text-black hover:opacity-[0.9] dark:text-white",
                    children: s
                }), null !== r && (0,
                a.jsx)(j.E.div, {
                    initial: {
                        opacity: 0,
                        scale: .85,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    transition: v,
                    children: r === s && (0,
                    a.jsx)("div", {
                        className: "absolute left-1/2 top-[calc(100%_+_1rem)] -translate-x-1/2",
                        children: (0,
                        a.jsx)(j.E.div, {
                            transition: v,
                            layoutId: "active",
                            className: "overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl  dark:border-white/[0.2] dark:bg-black",
                            children: (0,
                            a.jsx)(j.E.div, {
                                layout: !0,
                                className: "h-full w-max p-4",
                                children: n
                            })
                        })
                    })
                })]
            })
        }
          , N = e => {
            let {setActive: t, children: r} = e;
            return (0,
            a.jsx)("nav", {
                onMouseLeave: () => t(null),
                className: "boder relative flex items-center justify-center space-x-4 rounded-full border border-black/[0.2] bg-white px-8 py-3 shadow-input dark:border-white/[0.2] dark:bg-black ",
                children: r
            })
        }
          , k = e => {
            let {children: t, ...r} = e;
            return (0,
            a.jsx)(g.default, {
                ...r,
                className: "flex items-center text-neutral-700 hover:text-neutral-400 dark:text-neutral-200",
                children: t
            })
        }
        ;
        function w() {
            return (0,
            a.jsx)("div", {
                className: "relative flex w-full items-center justify-center",
                children: (0,
                a.jsx)(z, {
                    className: "top-2"
                })
            })
        }
        function z(e) {
            let {className: t} = e
              , [r,i] = (0,
            n.useState)(null);
            return (0,
            a.jsx)("div", {
                className: (0,
                u.cn)("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", t),
                children: (0,
                a.jsxs)(N, {
                    setActive: i,
                    children: [(0,
                    a.jsx)(y, {
                        setActive: i,
                        active: r,
                        item: "Navigation",
                        children: (0,
                        a.jsxs)("div", {
                            className: "flex flex-col space-y-4 text-sm",
                            children: [(0,
                            a.jsx)(k, {
                                href: "#landing-page",
                                children: "Landing Page"
                            }), (0,
                            a.jsx)(k, {
                                href: "#experience",
                                children: "Experience"
                            }), (0,
                            a.jsx)(k, {
                                href: "#skills",
                                children: "Skills"
                            }), (0,
                            a.jsx)(k, {
                                href: "#projects",
                                children: "Projects"
                            }), (0,
                            a.jsx)(k, {
                                href: "#contact-me",
                                children: "Contact Me"
                            })]
                        })
                    }), (0,
                    a.jsx)(y, {
                        setActive: i,
                        active: r,
                        item: "Social",
                        children: (0,
                        a.jsxs)("div", {
                            className: "flex flex-col space-y-4 text-sm",
                            children: [(0,
                            a.jsxs)(k, {
                                href: "https://github.com/spojskic",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: [(0,
                                a.jsx)(s.wGg, {
                                    className: "mr-1"
                                }), " Github"]
                            }), (0,
                            a.jsxs)(k, {
                                href: "https://www.linkedin.com/in/mrpojskic/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: [(0,
                                a.jsx)(s.ipJ, {
                                    className: "mr-1"
                                }), " Linkedin"]
                            }), (0,
                            a.jsxs)(k, {
                                href: "https://twitter.com/magicpojska",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: [(0,
                                a.jsx)(s.S3E, {
                                    className: "mr-1"
                                }), "X/Twitter"]
                            }), (0,
                            a.jsxs)(k, {
                                href: "https://safetpojskic.netlify.app/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: [(0,
                                a.jsx)(s.vVm, {
                                    className: "mr-1"
                                }), " Old Portfolio"]
                            })]
                        })
                    }), (0,
                    a.jsx)(b, {})]
                })
            })
        }
    },
    4518: function(e, t, r) {
        "use strict";
        r.d(t, {
            z: function() {
                return d
            }
        });
        var a = r(9506)
          , s = r(3539)
          , n = r(6832)
          , i = r(2820)
          , l = r(9860);
        let o = (0,
        n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-white bg-background hover:bg-neutral-200 hover:text-accent-foreground dark:hover:bg-neutral-800",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "size-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , d = i.forwardRef( (e, t) => {
            let {className: r, variant: n, size: i, asChild: d=!1, ...c} = e
              , f = d ? s.g7 : "button";
            return (0,
            a.jsx)(f, {
                className: (0,
                l.cn)(o({
                    variant: n,
                    size: i,
                    className: r
                })),
                ref: t,
                ...c
            })
        }
        );
        d.displayName = "Button"
    },
    9860: function(e, t, r) {
        "use strict";
        r.d(t, {
            cn: function() {
                return n
            }
        });
        var a = r(4460)
          , s = r(9993);
        function n() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            s.m6)((0,
            a.W)(t))
        }
    }
}, function(e) {
    e.O(0, [545, 540, 278, 512, 184, 744], function() {
        return e(e.s = 9789)
    }),
    _N_E = e.O()
}
]);
