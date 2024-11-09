(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[608], {
    1856: function(e, t, r) {
        Promise.resolve().then(r.t.bind(r, 9914, 23)),
        Promise.resolve().then(r.bind(r, 4360)),
        Promise.resolve().then(r.bind(r, 6258)),
        Promise.resolve().then(r.bind(r, 9132)),
        Promise.resolve().then(r.bind(r, 8065)),
        Promise.resolve().then(r.bind(r, 2334))
    },
    4360: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            ContactMeForm: function() {
                return S
            },
            contactFormSchema: function() {
                return F
            }
        });
        var s = r(9506)
          , a = r(2901)
          , n = r(2820)
          , i = r(1472)
          , l = r(7685)
          , o = r(4022);
        async function d(e) {
            let t = F.safeParse(e);
            if (!t.success && t.error) {
                var r;
                return {
                    success: !1,
                    error: {
                        message: (null === (r = t.error.issues[0]) || void 0 === r ? void 0 : r.message) || "Unknown error"
                    }
                }
            }
            let s = new FormData;
            Object.keys(e).forEach(t => {
                s.append(t, e[t])
            }
            );
            let a = new URL("https://formspree.io/f/mvoerlqv")
              , n = await fetch(a, {
                method: "POST",
                body: s,
                headers: {
                    Accept: "application/json"
                }
            });
            return 200 !== n.status && 201 !== n.status ? {
                success: !1,
                error: {
                    message: "Something wrong happened and we were not able to save send contact form data."
                }
            } : {
                success: !0
            }
        }
        var c = r(4518)
          , u = r(3539)
          , x = r(1768)
          , m = r(6832)
          , p = r(9860);
        let f = (0,
        m.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
          , C = n.forwardRef( (e, t) => {
            let {className: r, ...a} = e;
            return (0,
            s.jsx)(x.f, {
                ref: t,
                className: (0,
                p.cn)(f(), r),
                ...a
            })
        }
        );
        C.displayName = x.f.displayName;
        let h = i.RV
          , g = n.createContext({})
          , v = e => {
            let {...t} = e;
            return (0,
            s.jsx)(g.Provider, {
                value: {
                    name: t.name
                },
                children: (0,
                s.jsx)(i.Qr, {
                    ...t
                })
            })
        }
          , b = () => {
            let e = n.useContext(g)
              , t = n.useContext(j)
              , {getFieldState: r, formState: s} = (0,
            i.Gc)()
              , a = r(e.name, s);
            if (!e)
                throw Error("useFormField should be used within <FormField>");
            let {id: l} = t;
            return {
                id: l,
                name: e.name,
                formItemId: "".concat(l, "-form-item"),
                formDescriptionId: "".concat(l, "-form-item-description"),
                formMessageId: "".concat(l, "-form-item-message"),
                ...a
            }
        }
          , j = n.createContext({})
          , M = n.forwardRef( (e, t) => {
            let {className: r, ...a} = e
              , i = n.useId();
            return (0,
            s.jsx)(j.Provider, {
                value: {
                    id: i
                },
                children: (0,
                s.jsx)("div", {
                    ref: t,
                    className: (0,
                    p.cn)("space-y-2", r),
                    ...a
                })
            })
        }
        );
        M.displayName = "FormItem";
        let w = n.forwardRef( (e, t) => {
            let {className: r, ...a} = e
              , {error: n, formItemId: i} = b();
            return (0,
            s.jsx)(C, {
                ref: t,
                className: (0,
                p.cn)(n && "text-destructive", r),
                htmlFor: i,
                ...a
            })
        }
        );
        w.displayName = "FormLabel";
        let y = n.forwardRef( (e, t) => {
            let {...r} = e
              , {error: a, formItemId: n, formDescriptionId: i, formMessageId: l} = b();
            return (0,
            s.jsx)(u.g7, {
                ref: t,
                id: n,
                "aria-describedby": a ? "".concat(i, " ").concat(l) : "".concat(i),
                "aria-invalid": !!a,
                ...r
            })
        }
        );
        y.displayName = "FormControl",
        n.forwardRef( (e, t) => {
            let {className: r, ...a} = e
              , {formDescriptionId: n} = b();
            return (0,
            s.jsx)("p", {
                ref: t,
                id: n,
                className: (0,
                p.cn)("text-sm text-muted-foreground", r),
                ...a
            })
        }
        ).displayName = "FormDescription";
        let N = n.forwardRef( (e, t) => {
            let {className: r, children: a, ...n} = e
              , {error: i, formMessageId: l} = b()
              , o = i ? String(null == i ? void 0 : i.message) : a;
            return o ? (0,
            s.jsx)("p", {
                ref: t,
                id: l,
                className: (0,
                p.cn)("text-sm font-medium text-destructive", r),
                ...n,
                children: o
            }) : null
        }
        );
        N.displayName = "FormMessage";
        let k = n.forwardRef( (e, t) => {
            let {className: r, type: a, ...n} = e;
            return (0,
            s.jsx)("input", {
                type: a,
                className: (0,
                p.cn)("flex h-10 w-full rounded-md border border-input dark:bg-neutral-950 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", r),
                ref: t,
                ...n
            })
        }
        );
        k.displayName = "Input";
        let E = n.forwardRef( (e, t) => {
            let {className: r, ...a} = e;
            return (0,
            s.jsx)("textarea", {
                className: (0,
                p.cn)("flex min-h-[80px] w-full rounded-md border border-input dark:bg-neutral-950 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", r),
                ref: t,
                ...a
            })
        }
        );
        E.displayName = "Textarea";
        let F = o.z.object({
            name: o.z.string({
                required_error: "Name is requred."
            }).trim().min(2, "Please enter a valid name.").max(50),
            email: o.z.string({
                required_error: "Email is requred."
            }).email("Must be a valid email address."),
            message: o.z.string().trim().min(20, "Please enter a message containing at least 20 characters.").max(500)
        });
        function S() {
            let e = (0,
            i.cI)({
                resolver: (0,
                a.F)(F),
                defaultValues: {
                    name: "",
                    email: "",
                    message: ""
                }
            });
            async function t(t) {
                try {
                    (await d(t)).success ? (e.reset(),
                    (0,
                    l.A)("Your message has been sent successfully.")) : (0,
                    l.A)("An error occurred while sending your message. Please try again later."),
                    e.reset()
                } catch (t) {
                    console.error(t),
                    e.reset()
                }
            }
            return (0,
            s.jsxs)("div", {
                id: "contact-me",
                className: "mx-auto h-screen max-w-5xl px-8 py-20 md:py-32",
                children: [(0,
                s.jsx)("h1", {
                    id: "skills",
                    className: "pb-8 text-2xl font-bold dark:text-white md:text-7xl",
                    children: "Contact Me"
                }), (0,
                s.jsx)(h, {
                    ...e,
                    children: (0,
                    s.jsxs)("form", {
                        onSubmit: e.handleSubmit(t),
                        className: "max-w-xl space-y-8",
                        children: [(0,
                        s.jsx)(v, {
                            control: e.control,
                            name: "name",
                            render: e => {
                                let {field: t} = e;
                                return (0,
                                s.jsxs)(M, {
                                    children: [(0,
                                    s.jsx)(w, {
                                        children: "Name"
                                    }), (0,
                                    s.jsx)(y, {
                                        children: (0,
                                        s.jsx)(k, {
                                            placeholder: "John Doe",
                                            ...t
                                        })
                                    }), (0,
                                    s.jsx)(N, {})]
                                })
                            }
                        }), (0,
                        s.jsx)(v, {
                            control: e.control,
                            name: "email",
                            render: e => {
                                let {field: t} = e;
                                return (0,
                                s.jsxs)(M, {
                                    children: [(0,
                                    s.jsx)(w, {
                                        children: "Email"
                                    }), (0,
                                    s.jsx)(y, {
                                        children: (0,
                                        s.jsx)(k, {
                                            placeholder: "email@gmail.com",
                                            ...t
                                        })
                                    }), (0,
                                    s.jsx)(N, {})]
                                })
                            }
                        }), (0,
                        s.jsx)(v, {
                            control: e.control,
                            name: "message",
                            render: e => {
                                let {field: t} = e;
                                return (0,
                                s.jsxs)(M, {
                                    children: [(0,
                                    s.jsx)(w, {
                                        children: "Message"
                                    }), (0,
                                    s.jsx)(y, {
                                        children: (0,
                                        s.jsx)(E, {
                                            rows: 7,
                                            placeholder: "Type your message here.",
                                            ...t
                                        })
                                    }), (0,
                                    s.jsx)(N, {})]
                                })
                            }
                        }), (0,
                        s.jsx)(c.z, {
                            type: "submit",
                            disabled: e.formState.isSubmitting,
                            children: "Submit"
                        })]
                    })
                })]
            })
        }
    },
    6258: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            ExperienceSection: function() {
                return x
            }
        });
        var s = r(9506)
          , a = r(2820)
          , n = r(9993)
          , i = r(4437)
          , l = r(12)
          , o = r(8073)
          , d = r(3947)
          , c = r(9860);
        let u = e => {
            let {children: t, className: r} = e
              , n = (0,
            a.useRef)(null)
              , {scrollYProgress: u} = (0,
            i.v)({
                target: n,
                offset: ["start start", "end start"]
            })
              , x = (0,
            a.useRef)(null)
              , [m,p] = (0,
            a.useState)(0);
            (0,
            a.useEffect)( () => {
                x.current && p(x.current.offsetHeight)
            }
            , []);
            let f = (0,
            l.q)((0,
            o.H)(u, [0, .8], [50, m]), {
                stiffness: 500,
                damping: 90
            })
              , C = (0,
            l.q)((0,
            o.H)(u, [0, 1], [50, m - 200]), {
                stiffness: 500,
                damping: 90
            });
            return (0,
            s.jsxs)(d.E.div, {
                ref: n,
                className: (0,
                c.cn)("relative w-full max-w-4xl mx-auto h-full", r),
                children: [(0,
                s.jsxs)("div", {
                    className: "absolute -left-4 top-3 md:-left-20",
                    children: [(0,
                    s.jsx)(d.E.div, {
                        transition: {
                            duration: .2,
                            delay: .5
                        },
                        animate: {
                            boxShadow: u.get() > 0 ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                        },
                        className: "border-netural-200 ml-[27px] flex size-4 items-center justify-center rounded-full border shadow-sm",
                        children: (0,
                        s.jsx)(d.E.div, {
                            transition: {
                                duration: .2,
                                delay: .5
                            },
                            animate: {
                                backgroundColor: u.get() > 0 ? "white" : "var(--emerald-500)",
                                borderColor: u.get() > 0 ? "white" : "var(--emerald-600)"
                            },
                            className: "size-2 rounded-full  border border-neutral-300 bg-white"
                        })
                    }), (0,
                    s.jsxs)("svg", {
                        viewBox: "0 0 20 ".concat(m),
                        width: "20",
                        height: m,
                        className: " ml-4 block",
                        "aria-hidden": "true",
                        children: [(0,
                        s.jsx)(d.E.path, {
                            d: "M 1 0V -36 l 18 24 V ".concat(.8 * m, " l -18 24V ").concat(m),
                            fill: "none",
                            stroke: "#9091A0",
                            strokeOpacity: "0.16",
                            transition: {
                                duration: 10
                            }
                        }), (0,
                        s.jsx)(d.E.path, {
                            d: "M 1 0V -36 l 18 24 V ".concat(.8 * m, " l -18 24V ").concat(m),
                            fill: "none",
                            stroke: "url(#gradient)",
                            strokeWidth: "1.25",
                            className: "motion-reduce:hidden",
                            transition: {
                                duration: 10
                            }
                        }), (0,
                        s.jsx)("defs", {
                            children: (0,
                            s.jsxs)(d.E.linearGradient, {
                                id: "gradient",
                                gradientUnits: "userSpaceOnUse",
                                x1: "0",
                                x2: "0",
                                y1: f,
                                y2: C,
                                children: [(0,
                                s.jsx)("stop", {
                                    stopColor: "#18CCFC",
                                    stopOpacity: "0"
                                }), (0,
                                s.jsx)("stop", {
                                    stopColor: "#18CCFC"
                                }), (0,
                                s.jsx)("stop", {
                                    offset: "0.325",
                                    stopColor: "#6344F5"
                                }), (0,
                                s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#AE48FF",
                                    stopOpacity: "0"
                                })]
                            })
                        })]
                    })]
                }), (0,
                s.jsx)("div", {
                    ref: x,
                    children: t
                })]
            })
        }
        ;
        function x() {
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("h1", {
                    id: "experience",
                    className: "mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl",
                    children: "Experience"
                }), (0,
                s.jsx)(u, {
                    className: "px-6",
                    children: (0,
                    s.jsx)("div", {
                        className: "relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased",
                        children: m.map( (e, t) => (0,
                        s.jsxs)("div", {
                            className: "mb-10 mt-4 md:mt-0",
                            children: [(0,
                            s.jsx)("h2", {
                                className: (0,
                                n.m6)("text-xl text-black dark:text-white"),
                                children: e.title
                            }), (0,
                            s.jsx)("span", {
                                className: "w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200",
                                children: e.badge
                            }), (0,
                            s.jsx)("div", {
                                className: "prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white",
                                children: e.description
                            })]
                        }, "content-".concat(t)))
                    })
                })]
            })
        }
        let m = [{
            title: "Pickleball.com",
            description: (0,
            s.jsxs)("ul", {
                className: "list-disc",
                children: [(0,
                s.jsx)("li", {
                    children: "Developed a full-stack enterprise applications using React and Nextjs."
                }), (0,
                s.jsx)("li", {
                    children: "Lead the frontend development team, focusing on creating, improving, and fine-tuning web applications to make them fast and reliable. My job includes planning our technical approaches, guiding the team, and actively coding and reviewing code."
                })]
            }),
            badge: "Software Engineer/Jan 2024 - Present"
        }, {
            title: "Bosnia and Herzegovina Futures Foundation",
            description: (0,
            s.jsxs)("ul", {
                className: "list-disc",
                children: [(0,
                s.jsx)("li", {
                    children: "Actively engaged in personal development, focusing on enhancing my soft skills and public speaking abilities under the guidance of experienced mentors."
                }), (0,
                s.jsx)("li", {
                    children: "Transitioned into a mentorship role, where I guided high school students in developing their soft skills and provided guidance in career planning and decision-making."
                }), (0,
                s.jsx)("li", {
                    children: "Volunteered in web development team creating fls.ba info website"
                })]
            }),
            badge: "Junior -> Senior -> Alumni/Sep 2021 – Present"
        }, {
            title: "Atlantbh",
            description: (0,
            s.jsxs)("ul", {
                className: "list-disc",
                children: [(0,
                s.jsx)("li", {
                    children: "Developed a full-stack enterprise applications using React, PostgreSQL and Docker."
                }), (0,
                s.jsx)("li", {
                    children: "Conducted code reviews, contributing to maintaining high standards of code quality and team collaboration."
                }), (0,
                s.jsx)("li", {
                    children: "Provided mentorship to two IT college students, enhancing their practical software engineering skills."
                })]
            }),
            badge: "Junior Software Engineer/Jun 2022 - Jan 2024"
        }, {
            title: "Atlantbh (Intenship)",
            description: (0,
            s.jsxs)("ul", {
                className: "list-disc",
                children: [(0,
                s.jsx)("li", {
                    children: "Developed full-stack applications with React.js and Spring Boot."
                }), (0,
                s.jsx)("li", {
                    children: "Implemented essential software development practices such as GitHub for version control, Maven for project management, JUnit for testing, and applied design patterns and MVC architecture."
                })]
            }),
            badge: "Full Stack Developer/Feb 2022 - May 2022"
        }]
    },
    9132: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            LandingPage: function() {
                return x
            }
        });
        var s = r(9506)
          , a = r(3922)
          , n = r(3947)
          , i = r(2820)
          , l = r(9860);
        let o = i.memo(e => {
            let {className: t} = e
              , r = ["M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875", "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867", "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859", "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851", "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843", "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835", "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827", "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819", "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811", "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803", "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795", "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787", "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779", "M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771", "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763", "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755", "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747", "M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739", "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731", "M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723", "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715", "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707", "M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699", "M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691", "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683", "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675", "M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667", "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659", "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651", "M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643", "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635", "M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627", "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619", "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611", "M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603", "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595", "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587", "M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579", "M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571", "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563", "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555", "M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547", "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539", "M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531", "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523", "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515", "M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507", "M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499", "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491", "M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483"];
            return (0,
            s.jsx)("div", {
                className: (0,
                l.cn)("absolute  h-full w-full inset-0  [mask-size:40px] [mask-repeat:no-repeat] hidden md:flex items-center justify-center", t),
                children: (0,
                s.jsxs)("svg", {
                    className: " pointer-events-none absolute z-0 size-full ",
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 696 316",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0,
                    s.jsx)("path", {
                        d: "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483M-30 -589C-30 -589 38 -184 502 -57C966 70 1034 475 1034 475M-23 -597C-23 -597 45 -192 509 -65C973 62 1041 467 1041 467M-16 -605C-16 -605 52 -200 516 -73C980 54 1048 459 1048 459M-9 -613C-9 -613 59 -208 523 -81C987 46 1055 451 1055 451M-2 -621C-2 -621 66 -216 530 -89C994 38 1062 443 1062 443M5 -629C5 -629 73 -224 537 -97C1001 30 1069 435 1069 435M12 -637C12 -637 80 -232 544 -105C1008 22 1076 427 1076 427M19 -645C19 -645 87 -240 551 -113C1015 14 1083 419 1083 419",
                        stroke: "url(#paint0_radial_242_278)",
                        strokeOpacity: "0.05",
                        strokeWidth: "0.5"
                    }), r.map( (e, t) => (0,
                    s.jsx)(n.E.path, {
                        d: e,
                        stroke: "url(#linearGradient-".concat(t, ")"),
                        strokeOpacity: "0.4",
                        strokeWidth: "0.5"
                    }, "path-" + t)), (0,
                    s.jsxs)("defs", {
                        children: [r.map( (e, t) => (0,
                        s.jsxs)(n.E.linearGradient, {
                            id: "linearGradient-".concat(t),
                            x1: "100%",
                            x2: "100%",
                            y1: "100%",
                            y2: "100%",
                            animate: {
                                x1: ["0%", "100%"],
                                x2: ["0%", "95%"],
                                y1: ["0%", "100%"],
                                y2: ["0%", "".concat(93 + 8 * Math.random(), "%")]
                            },
                            transition: {
                                duration: 10 * Math.random() + 10,
                                ease: "easeInOut",
                                repeat: 1 / 0,
                                delay: 10 * Math.random()
                            },
                            children: [(0,
                            s.jsx)("stop", {
                                stopColor: "#18CCFC",
                                stopOpacity: "0"
                            }), (0,
                            s.jsx)("stop", {
                                stopColor: "#18CCFC"
                            }), (0,
                            s.jsx)("stop", {
                                offset: "32.5%",
                                stopColor: "#6344F5"
                            }), (0,
                            s.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#AE48FF",
                                stopOpacity: "0"
                            })]
                        }, "gradient-".concat(t))), (0,
                        s.jsxs)("radialGradient", {
                            id: "paint0_radial_242_278",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(352 34) rotate(90) scale(555 1560.62)",
                            children: [(0,
                            s.jsx)("stop", {
                                offset: "0.0666667",
                                stopColor: "var(--neutral-300)"
                            }), (0,
                            s.jsx)("stop", {
                                offset: "0.243243",
                                stopColor: "var(--neutral-300)"
                            }), (0,
                            s.jsx)("stop", {
                                offset: "0.43594",
                                stopColor: "white",
                                stopOpacity: "0"
                            })]
                        })]
                    })]
                })
            })
        }
        );
        o.displayName = "BackgroundBeams";
        var d = r(4518);
        let c = e => {
            let {words: t, className: r, cursorClassName: a} = e
              , i = t.map(e => ({
                ...e,
                text: e.text.split("")
            }));
            return (0,
            s.jsxs)("div", {
                className: (0,
                l.cn)("flex space-x-1 my-6", r),
                children: [(0,
                s.jsxs)(n.E.div, {
                    className: "overflow-hidden pb-2",
                    initial: {
                        width: "0%"
                    },
                    whileInView: {
                        width: "fit-content"
                    },
                    transition: {
                        duration: 2,
                        ease: "linear",
                        delay: 1
                    },
                    children: [(0,
                    s.jsxs)("div", {
                        className: "lg:text:3xl text-xl font-bold xl:text-5xl",
                        style: {
                            whiteSpace: "nowrap"
                        },
                        children: [(0,
                        s.jsx)("div", {
                            children: i.map( (e, t) => (0,
                            s.jsxs)("div", {
                                className: "inline-block",
                                children: [e.text.map( (t, r) => (0,
                                s.jsx)("span", {
                                    className: (0,
                                    l.cn)("dark:text-white text-black ", e.className),
                                    children: t
                                }, "char-".concat(r))), "\xa0"]
                            }, "word-".concat(t)))
                        }), " "]
                    }), " "]
                }), (0,
                s.jsx)(n.E.span, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .8,
                        repeat: 1 / 0,
                        repeatType: "reverse"
                    },
                    className: (0,
                    l.cn)("block rounded-sm w-[4px]  h-6 xl:h-12 bg-blue-500", a)
                })]
            })
        }
          , u = [{
            text: "Java"
        }, {
            text: "and"
        }, {
            text: "React/Next.js"
        }, {
            text: "developer",
            className: "text-blue-500 dark:text-blue-500"
        }];
        function x() {
            return (0,
            s.jsxs)("div", {
                id: "landing-page",
                className: "bg- relative flex  h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]",
                children: [(0,
                s.jsx)("div", {
                    className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black"
                }), (0,
                s.jsx)("p", {
                    className: "text-xs text-neutral-600 dark:text-neutral-200 sm:text-base  ",
                    children: " Hello, I'm Safet. A passionate Software Engineer."
                }), (0,
                s.jsx)(c, {
                    words: u
                }), (0,
                s.jsxs)("div", {
                    className: "z-30 flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0",
                    children: [(0,
                    s.jsx)(a.default, {
                        href: "https://drive.google.com/file/d/1xHPigW5eJQSCCgx3VBFyH5E0y_wwOdDN/view?usp=sharing",
                        children: (0,
                        s.jsx)(d.z, {
                            children: "Download CV"
                        })
                    }), (0,
                    s.jsx)(a.default, {
                        href: "#contact-me",
                        children: (0,
                        s.jsx)(d.z, {
                            variant: "secondary",
                            children: "Contact Me"
                        })
                    })]
                }), (0,
                s.jsx)(o, {})]
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
        var s = r(9506)
          , a = r(3539)
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
              , u = d ? a.g7 : "button";
            return (0,
            s.jsx)(u, {
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
    8065: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            CardPattern: function() {
                return x
            },
            EvervaultCard: function() {
                return u
            },
            Icon: function() {
                return f
            },
            generateRandomString: function() {
                return p
            }
        });
        var s = r(3924)
          , a = r(9506)
          , n = r(3616)
          , i = r(8079)
          , l = r(3947)
          , o = r(2820)
          , d = r(9860);
        function c() {
            let e = (0,
            s._)(["radial-gradient(250px at ", "px ", "px, white, transparent)"]);
            return c = function() {
                return e
            }
            ,
            e
        }
        let u = e => {
            let {text: t, icon: r, className: s} = e
              , i = (0,
            n.c)(0)
              , l = (0,
            n.c)(0)
              , [c,u] = (0,
            o.useState)("");
            return (0,
            o.useEffect)( () => {
                u(p(1500))
            }
            , []),
            (0,
            a.jsx)("div", {
                className: (0,
                d.cn)("p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative", s),
                children: (0,
                a.jsxs)("div", {
                    onMouseMove: function(e) {
                        let {currentTarget: t, clientX: r, clientY: s} = e
                          , {left: a, top: n} = t.getBoundingClientRect();
                        i.set(r - a),
                        l.set(s - n),
                        u(p(1500))
                    },
                    className: "group/card relative flex size-full items-center justify-center overflow-hidden rounded-3xl bg-transparent",
                    children: [(0,
                    a.jsx)(x, {
                        mouseX: i,
                        mouseY: l,
                        randomString: c
                    }), (0,
                    a.jsx)("div", {
                        className: "relative z-10 flex items-center justify-center",
                        children: (0,
                        a.jsxs)("div", {
                            className: "relative flex size-44 flex-col  items-center justify-center rounded-full text-4xl font-bold text-white",
                            children: [(0,
                            a.jsx)("div", {
                                className: "absolute size-full rounded-full bg-white/[0.8] blur-sm dark:bg-black/[0.8]"
                            }), (0,
                            a.jsx)("span", {
                                className: "z-20 whitespace-nowrap text-black dark:text-white",
                                children: t
                            }), (0,
                            a.jsx)("span", {
                                className: "z-20 mt-4 whitespace-nowrap text-black dark:text-white",
                                children: r
                            })]
                        })
                    })]
                })
            })
        }
        ;
        function x(e) {
            let {mouseX: t, mouseY: r, randomString: s} = e
              , n = (0,
            i.Y)(c(), t, r)
              , o = {
                maskImage: n,
                WebkitMaskImage: n
            };
            return (0,
            a.jsxs)("div", {
                className: "pointer-events-none",
                children: [(0,
                a.jsx)("div", {
                    className: "absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"
                }), (0,
                a.jsx)(l.E.div, {
                    className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  backdrop-blur-xl transition duration-500 group-hover/card:opacity-100",
                    style: o
                }), (0,
                a.jsx)(l.E.div, {
                    className: "absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100",
                    style: o,
                    children: (0,
                    a.jsx)("p", {
                        className: "absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs font-bold text-white transition duration-500",
                        children: s
                    })
                })]
            })
        }
        let m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
          , p = e => {
            let t = "";
            for (let r = 0; r < e; r++)
                t += m.charAt(Math.floor(Math.random() * m.length));
            return t
        }
          , f = e => {
            let {className: t, ...r} = e;
            return (0,
            a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "currentColor",
                className: t,
                ...r,
                children: (0,
                a.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 6v12m6-6H6"
                })
            })
        }
    },
    2334: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            Header: function() {
                return x
            },
            HeroParallax: function() {
                return u
            },
            ProductCard: function() {
                return m
            }
        });
        var s = r(9506)
          , a = r(4437)
          , n = r(12)
          , i = r(8073)
          , l = r(3947)
          , o = r(3507)
          , d = r(3922)
          , c = r(2820);
        let u = e => {
            let {products: t} = e
              , r = t.slice(0, 3)
              , o = t.slice(3, 6)
              , d = t.slice(6, 9)
              , u = c.useRef(null)
              , {scrollYProgress: p} = (0,
            a.v)({
                target: u,
                offset: ["start start", "end start"]
            })
              , f = {
                stiffness: 300,
                damping: 30,
                bounce: 100
            }
              , C = (0,
            n.q)((0,
            i.H)(p, [0, 1], [0, 600]), f)
              , h = (0,
            n.q)((0,
            i.H)(p, [0, 1], [0, -600]), f)
              , g = (0,
            n.q)((0,
            i.H)(p, [0, .2], [15, 0]), f)
              , v = (0,
            n.q)((0,
            i.H)(p, [0, .2], [.2, 1]), f)
              , b = (0,
            n.q)((0,
            i.H)(p, [0, .2], [20, 0]), f)
              , j = (0,
            n.q)((0,
            i.H)(p, [0, .2], [-700, 500]), f);
            return (0,
            s.jsxs)("div", {
                id: "projects",
                ref: u,
                className: "relative flex h-[270vh]  flex-col self-auto overflow-hidden pb-10 pt-40 antialiased [perspective:1000px] [transform-style:preserve-3d]",
                children: [(0,
                s.jsx)(x, {}), (0,
                s.jsxs)(l.E.div, {
                    style: {
                        rotateX: g,
                        rotateZ: b,
                        translateY: j,
                        opacity: v
                    },
                    className: "",
                    children: [(0,
                    s.jsx)(l.E.div, {
                        className: "mb-20 flex flex-row-reverse space-x-20 space-x-reverse",
                        children: r.map(e => (0,
                        s.jsx)(m, {
                            product: e,
                            translate: C
                        }, e.title))
                    }), (0,
                    s.jsx)(l.E.div, {
                        className: "mb-20 flex  flex-row space-x-20 ",
                        children: o.map(e => (0,
                        s.jsx)(m, {
                            product: e,
                            translate: h
                        }, e.title))
                    }), (0,
                    s.jsx)(l.E.div, {
                        className: "flex flex-row-reverse space-x-20 space-x-reverse",
                        children: d.map(e => (0,
                        s.jsx)(m, {
                            product: e,
                            translate: C
                        }, e.title))
                    })]
                })]
            })
        }
          , x = () => (0,
        s.jsx)("div", {
            className: "relative left-0 top-0 mx-auto w-full max-w-5xl px-4  py-20 md:py-40",
            children: (0,
            s.jsx)("h1", {
                className: "text-2xl font-bold dark:text-white md:text-7xl",
                children: "Projects"
            })
        })
          , m = e => {
            let {product: t, translate: r} = e;
            return (0,
            s.jsxs)(l.E.div, {
                style: {
                    x: r
                },
                whileHover: {
                    y: -20
                },
                className: "group/product relative h-96 w-[40rem] shrink-0",
                children: [(0,
                s.jsx)(d.default, {
                    href: t.link,
                    className: "block group-hover/product:shadow-2xl ",
                    children: (0,
                    s.jsx)(o.default, {
                        src: t.thumbnail,
                        height: "600",
                        width: "600",
                        className: "absolute inset-0 size-full object-cover object-center",
                        alt: t.title
                    })
                }), (0,
                s.jsx)("div", {
                    className: "pointer-events-none absolute inset-0 size-full bg-black opacity-0 group-hover/product:opacity-80"
                }), (0,
                s.jsx)("h2", {
                    className: "absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100",
                    children: t.title
                })]
            }, t.title)
        }
    },
    9860: function(e, t, r) {
        "use strict";
        r.d(t, {
            cn: function() {
                return n
            }
        });
        var s = r(4460)
          , a = r(9993);
        function n() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            a.m6)((0,
            s.W)(t))
        }
    }
}, function(e) {
    e.O(0, [540, 685, 837, 512, 184, 744], function() {
        return e(e.s = 1856)
    }),
    _N_E = e.O()
}
]);
