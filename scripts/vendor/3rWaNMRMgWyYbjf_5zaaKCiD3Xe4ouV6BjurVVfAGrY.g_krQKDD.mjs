import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import {
  A as t,
  O as n,
  c as r,
  g as i,
  j as a,
  l as o,
  o as s,
  s as c,
  v as ee,
  w as l,
} from "./react.DXuyTrsy.mjs";
import { C as u, a as te, r as d, t as f } from "./motion.C4Ab7j_2.mjs";
import {
  F as p,
  N as m,
  S as h,
  St as ne,
  T as re,
  V as g,
  Y as ie,
  _ as ae,
  a as _,
  d as v,
  dt as oe,
  gt as se,
  ht as ce,
  i as y,
  k as b,
  mt as le,
  n as ue,
  nt as x,
  pt as S,
  st as de,
  ut as fe,
  vt as C,
  wt as w,
  x as T,
  yt as pe,
} from "./framer.A_mnCMV8.mjs";
import { n as E, t as me } from "./plE8lAR0p.DnpcUrKQ.mjs";
import { i as D, n as O, r as k, t as A } from "./R5dNbwg65.Co9p2lkS.mjs";
import { i as j, t as M } from "./N4M2au0UE.BYNeTSU6.mjs";
import { n as he, r as ge } from "./WwYA376Vd.DZCx7jyE.mjs";
var N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, _e, ve, $, ye, be;
e(() => {
  (s(),
    ie(),
    f(),
    l(),
    me(),
    D(),
    j(),
    O(),
    he(),
    (N = g(E)),
    (P = g(k)),
    (F = w(_)),
    (I = {
      SIAfaKF6B: `(max-width: 809.98px)`,
      SzHpB6WiS: `(min-width: 810px) and (max-width: 1199.98px)`,
      VpMtGUzRl: `(min-width: 1200px)`,
    }),
    (L = []),
    (R = `framer-qWjAK`),
    (z = {
      SIAfaKF6B: `framer-v-32kvk2`,
      SzHpB6WiS: `framer-v-1beiwl5`,
      VpMtGUzRl: `framer-v-rxvou3`,
    }),
    (B = (e, t, n) => (e && t ? `position` : n)),
    (V = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (H = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (U = { damping: 60, delay: 0.2, mass: 1, stiffness: 200, type: `spring` }),
    (W = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (G = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t);
      } catch {
        return r.toLocaleString(i, t);
      }
    }),
    (K = { dateStyle: `medium`, timeZone: `UTC` }),
    (q = (e, t) => G(e, K, t)),
    (J = () => ({
      from: {
        constraint: {
          left: { collection: `ST9dbaCry`, name: `CbdMDVY6P`, type: `Identifier` },
          operator: `==`,
          right: { collection: `CbdMDVY6P`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `ST9dbaCry`, data: M, type: `Collection` },
        right: { alias: `CbdMDVY6P`, data: A, type: `Collection` },
        type: `LeftJoin`,
      },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `ST9dbaCry`, name: `MdHi4l3wf`, type: `Identifier` },
        {
          alias: `CbdMDVY6P.mzSTQXzoT`,
          collection: `CbdMDVY6P`,
          name: `mzSTQXzoT`,
          type: `Identifier`,
        },
        { collection: `ST9dbaCry`, name: `rO8fZU9yq`, type: `Identifier` },
        { collection: `ST9dbaCry`, name: `DQOzgQXjc`, type: `Identifier` },
        { collection: `ST9dbaCry`, name: `FWQY_RDd2`, type: `Identifier` },
        { collection: `ST9dbaCry`, name: `TgdiU12W0`, type: `Identifier` },
        { collection: `ST9dbaCry`, name: `id`, type: `Identifier` },
      ],
    })),
    (Y = ({ query: e, pageSize: t, children: n }) => n(C(e))),
    (X = { damping: 60, delay: 0.2, mass: 1, stiffness: 300, type: `spring` }),
    (Z = () => ({
      from: {
        constraint: {
          left: { collection: `cO5Jozr7n`, name: `CbdMDVY6P`, type: `Identifier` },
          operator: `==`,
          right: { collection: `CbdMDVY6P`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `cO5Jozr7n`, data: M, type: `Collection` },
        right: { alias: `CbdMDVY6P`, data: A, type: `Collection` },
        type: `LeftJoin`,
      },
      limit: { type: `LiteralValue`, value: 3 },
      offset: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `cO5Jozr7n`, name: `TgdiU12W0`, type: `Identifier` },
        { collection: `cO5Jozr7n`, name: `MdHi4l3wf`, type: `Identifier` },
        {
          alias: `CbdMDVY6P.mzSTQXzoT`,
          collection: `CbdMDVY6P`,
          name: `mzSTQXzoT`,
          type: `Identifier`,
        },
        { collection: `cO5Jozr7n`, name: `rO8fZU9yq`, type: `Identifier` },
        { collection: `cO5Jozr7n`, name: `DQOzgQXjc`, type: `Identifier` },
        { collection: `cO5Jozr7n`, name: `id`, type: `Identifier` },
      ],
    })),
    (Q = { Desktop: `VpMtGUzRl`, Phone: `SIAfaKF6B`, Tablet: `SzHpB6WiS` }),
    (_e = ({ value: e }) =>
      S()
        ? null
        : r(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ve = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `VpMtGUzRl`,
    })),
    ($ = ne(
      i(function (e, i) {
        let s = n(null),
          l = i ?? s,
          f = ee(),
          { activeLocale: p, setLocale: ne } = ce(),
          g = de(),
          { style: ie, className: b, layoutId: x, variant: S, ...C } = ve(e);
        se(a(() => ge({}, p), [p]));
        let [w, me] = oe(S, I, !1),
          D = m(R),
          O = t(v)?.isLayoutTemplate,
          A = B(O, !!t(te)?.transition?.layout),
          j = le();
        return (
          pe(),
          fe({}),
          r(v.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: Q,
              primaryVariantId: `VpMtGUzRl`,
              variantClassNames: z,
            },
            children: o(d, {
              id: x ?? f,
              children: [
                r(_e, {
                  value: `html body { background: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)); }`,
                }),
                o(u.div, {
                  ...C,
                  className: m(D, `framer-rxvou3`, b),
                  ref: l,
                  style: { ...ie },
                  children: [
                    r(y, {
                      height: 40,
                      width: `calc(${g?.width || `100vw`} - 40px)`,
                      y: (g?.y || 0) + 160 + 0,
                      children: r(_, {
                        className: `framer-18i8ybp-container`,
                        layout: A,
                        nodeId: `YkGnSHtip`,
                        scopeId: `WwYA376Vd`,
                        children: r(h, {
                          breakpoint: w,
                          overrides: {
                            SIAfaKF6B: { variant: V(`Jyf0NVykQ`) },
                            SzHpB6WiS: { variant: V(`txn0xfHi_`) },
                          },
                          children: r(E, {
                            height: `100%`,
                            id: `YkGnSHtip`,
                            layoutId: `YkGnSHtip`,
                            nzjXCr09A: {
                              borderBottomWidth: 0,
                              borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 223, 226))`,
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                              borderStyle: `solid`,
                              borderTopWidth: 0,
                            },
                            style: { width: `100%` },
                            Uz_x_jqMH: {
                              borderBottomWidth: 1,
                              borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 223, 226))`,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderStyle: `solid`,
                              borderTopWidth: 0,
                            },
                            variant: V(`qElohr0kM`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    r(u.section, {
                      className: `framer-a95c53`,
                      "data-framer-name": `Feature Blog`,
                      layout: A,
                      children: r(`div`, {
                        className: `framer-ivcf7`,
                        "data-border": !0,
                        "data-framer-name": `Featured Blog Container`,
                        children: r(`div`, {
                          className: `framer-4x4mal`,
                          "data-border": !0,
                          "data-framer-name": `Featured`,
                          children: r(`div`, {
                            className: `framer-dng9ww`,
                            children: r(ue, {
                              children: r(Y, {
                                query: J(),
                                children: (e, t, n) =>
                                  r(c, {
                                    children: e?.map(
                                      (
                                        {
                                          "CbdMDVY6P.mzSTQXzoT": e,
                                          DQOzgQXjc: t,
                                          FWQY_RDd2: n,
                                          id: i,
                                          MdHi4l3wf: a,
                                          rO8fZU9yq: o,
                                          TgdiU12W0: s,
                                        },
                                        c
                                      ) => (
                                        (e ??= ``),
                                        (t ??= ``),
                                        (n ??= ``),
                                        (s ??= ``),
                                        r(
                                          d,
                                          {
                                            id: `ST9dbaCry-${i}`,
                                            children: r(T.Provider, {
                                              value: { TgdiU12W0: s },
                                              children: r(re, {
                                                links: [
                                                  {
                                                    href: {
                                                      pathVariables: { TgdiU12W0: s },
                                                      webPageId: `sr8L2uXk3`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { TgdiU12W0: s },
                                                      webPageId: `sr8L2uXk3`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { TgdiU12W0: s },
                                                      webPageId: `sr8L2uXk3`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                ],
                                                children: (i) =>
                                                  r(h, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      SIAfaKF6B: {
                                                        width: `calc(max((max(min(max(${g?.width || `100vw`} - 64px, 1px), 1320px), 1px) - 64px) / 3, 50px) * 3 + 64px)`,
                                                      },
                                                      SzHpB6WiS: {
                                                        height: 400,
                                                        width: `calc(max((max(min(max(${g?.width || `100vw`} - 88px, 1px), 1320px), 1px) - 64px) / 3, 50px) * 3 + 64px)`,
                                                      },
                                                    },
                                                    children: r(y, {
                                                      height: 500,
                                                      width: `1120px`,
                                                      y:
                                                        (g?.y || 0) +
                                                        160 +
                                                        200 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0,
                                                      children: r(F, {
                                                        __framer__animate: { transition: U },
                                                        __framer__animateOnce: !0,
                                                        __framer__enter: H,
                                                        __framer__styleAppearEffectEnabled: !0,
                                                        __framer__threshold: 0,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: `framer-1lipjkd-container`,
                                                        nodeId: `v6B2u0ESr`,
                                                        rendersWithMotion: !0,
                                                        scopeId: `WwYA376Vd`,
                                                        children: r(h, {
                                                          breakpoint: w,
                                                          overrides: {
                                                            SIAfaKF6B: {
                                                              o4pPpPfMO: i[2],
                                                              style: { width: `100%` },
                                                              variant: V(`MZfigT2r1`),
                                                            },
                                                            SzHpB6WiS: {
                                                              o4pPpPfMO: i[1],
                                                              variant: V(`U9tSb4jsS`),
                                                            },
                                                          },
                                                          children: r(k, {
                                                            height: `100%`,
                                                            id: `v6B2u0ESr`,
                                                            layoutId: `v6B2u0ESr`,
                                                            MhUTJlyuS: W(a),
                                                            o4pPpPfMO: i[0],
                                                            qMLA71X5f: q(o, j),
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            variant: V(`RYH0v1dWC`),
                                                            width: `100%`,
                                                            y8HeeX0Fv: n,
                                                            Zd63hXpd5: t,
                                                            zI9isjOZH: e,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                              }),
                                            }),
                                          },
                                          i
                                        )
                                      )
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    r(h, {
                      breakpoint: w,
                      overrides: {
                        SIAfaKF6B: { y: (g?.y || 0) + 160 + 892 },
                        SzHpB6WiS: { y: (g?.y || 0) + 160 + 792 },
                      },
                      children: r(y, {
                        height: 40,
                        width: `calc(${g?.width || `100vw`} - 40px)`,
                        y: (g?.y || 0) + 160 + 860,
                        children: r(_, {
                          className: `framer-6v77am-container`,
                          layout: A,
                          nodeId: `FykSAcrli`,
                          scopeId: `WwYA376Vd`,
                          children: r(h, {
                            breakpoint: w,
                            overrides: {
                              SIAfaKF6B: { variant: V(`Jyf0NVykQ`) },
                              SzHpB6WiS: { variant: V(`txn0xfHi_`) },
                            },
                            children: r(E, {
                              height: `100%`,
                              id: `FykSAcrli`,
                              layoutId: `FykSAcrli`,
                              nzjXCr09A: {
                                borderBottomWidth: 0,
                                borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 223, 226))`,
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              style: { width: `100%` },
                              Uz_x_jqMH: {
                                borderBottomWidth: 1,
                                borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 223, 226))`,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              variant: V(`qElohr0kM`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    r(u.section, {
                      className: `framer-1shmfxy`,
                      "data-framer-name": `Blog`,
                      layout: A,
                      children: r(`div`, {
                        className: `framer-16ao1nn`,
                        "data-border": !0,
                        "data-framer-name": `Blog Container`,
                        children: r(`div`, {
                          className: `framer-bv2n8v`,
                          "data-border": !0,
                          "data-framer-name": `Blogs`,
                          children: r(`div`, {
                            className: `framer-1iogyvb`,
                            children: r(ue, {
                              children: r(Y, {
                                query: Z(),
                                children: (e, t, n) =>
                                  r(c, {
                                    children: e?.map(
                                      (
                                        {
                                          "CbdMDVY6P.mzSTQXzoT": e,
                                          DQOzgQXjc: t,
                                          id: n,
                                          MdHi4l3wf: i,
                                          rO8fZU9yq: a,
                                          TgdiU12W0: o,
                                        },
                                        s
                                      ) => (
                                        (o ??= ``),
                                        (e ??= ``),
                                        (t ??= ``),
                                        r(
                                          d,
                                          {
                                            id: `cO5Jozr7n-${n}`,
                                            children: r(T.Provider, {
                                              value: { TgdiU12W0: o },
                                              children: r(ae, {
                                                href: {
                                                  pathVariables: { TgdiU12W0: o },
                                                  webPageId: `sr8L2uXk3`,
                                                },
                                                motionChild: !0,
                                                nodeId: `AHDaMf3bE`,
                                                scopeId: `WwYA376Vd`,
                                                children: r(u.a, {
                                                  className: `framer-16utqsz framer-fiqelp`,
                                                  children: r(h, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      SIAfaKF6B: {
                                                        height: 480,
                                                        width: `max(max(max(min(max(${g?.width || `100vw`} - 64px, 1px), 1320px), 1px), 50px), 1px)`,
                                                        y:
                                                          (g?.y || 0) +
                                                          160 +
                                                          1092 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      SzHpB6WiS: {
                                                        height: 470,
                                                        width: `max(max((max(min(max(${g?.width || `100vw`} - 88px, 1px), 1320px), 1px) - 24px) / 2, 50px), 1px)`,
                                                        y:
                                                          (g?.y || 0) +
                                                          160 +
                                                          992 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                    },
                                                    children: r(y, {
                                                      height: 500,
                                                      width: `max(max((max(min(max(${g?.width || `100vw`} - 120px, 1px), 1320px), 1px) - 64px) / 3, 50px), 1px)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        160 +
                                                        1060 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0,
                                                      children: r(F, {
                                                        __framer__animate: { transition: X },
                                                        __framer__animateOnce: !0,
                                                        __framer__enter: H,
                                                        __framer__styleAppearEffectEnabled: !0,
                                                        __framer__threshold: 0,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: `framer-11m0v6y-container`,
                                                        nodeId: `EA1AkPXYV`,
                                                        rendersWithMotion: !0,
                                                        scopeId: `WwYA376Vd`,
                                                        children: r(h, {
                                                          breakpoint: w,
                                                          overrides: {
                                                            SIAfaKF6B: { variant: V(`GR9znIAHl`) },
                                                          },
                                                          children: r(k, {
                                                            height: `100%`,
                                                            id: `EA1AkPXYV`,
                                                            layoutId: `EA1AkPXYV`,
                                                            MhUTJlyuS: W(i),
                                                            qMLA71X5f: q(a, j),
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            variant: V(`wJ29C7LV5`),
                                                            width: `100%`,
                                                            y8HeeX0Fv: `Understanding Payroll Taxes in 2025: What Every Employer Should Know`,
                                                            Zd63hXpd5: t,
                                                            zI9isjOZH: e,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                          n
                                        )
                                      )
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    r(h, {
                      breakpoint: w,
                      overrides: {
                        SIAfaKF6B: { y: (g?.y || 0) + 160 + 2732 },
                        SzHpB6WiS: { y: (g?.y || 0) + 160 + 2092 },
                      },
                      children: r(y, {
                        height: 40,
                        width: `calc(${g?.width || `100vw`} - 40px)`,
                        y: (g?.y || 0) + 160 + 1720,
                        children: r(_, {
                          className: `framer-15rjqvh-container`,
                          layout: A,
                          nodeId: `JOukGLjpk`,
                          scopeId: `WwYA376Vd`,
                          children: r(h, {
                            breakpoint: w,
                            overrides: {
                              SIAfaKF6B: { variant: V(`Jyf0NVykQ`) },
                              SzHpB6WiS: { variant: V(`txn0xfHi_`) },
                            },
                            children: r(E, {
                              height: `100%`,
                              id: `JOukGLjpk`,
                              layoutId: `JOukGLjpk`,
                              nzjXCr09A: {
                                borderBottomWidth: 0,
                                borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 223, 226))`,
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              style: { width: `100%` },
                              Uz_x_jqMH: {
                                borderBottomWidth: 1,
                                borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 223, 226))`,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              variant: V(`qElohr0kM`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                r(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-qWjAK.framer-fiqelp, .framer-qWjAK .framer-fiqelp { display: block; }`,
        `.framer-qWjAK.framer-rxvou3 { align-content: center; align-items: center; background-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-qWjAK .framer-18i8ybp-container, .framer-qWjAK .framer-6v77am-container, .framer-qWjAK .framer-15rjqvh-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-qWjAK .framer-a95c53, .framer-qWjAK .framer-1shmfxy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-qWjAK .framer-ivcf7, .framer-qWjAK .framer-16ao1nn { --border-bottom-width: 1px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #e7e7ea); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-qWjAK .framer-4x4mal { --border-bottom-width: 0px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #dedfe2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 500px; justify-content: flex-start; max-width: 1320px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-qWjAK .framer-dng9ww, .framer-qWjAK .framer-1iogyvb { display: grid; flex: 1 0 0px; gap: 32px 32px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
        `.framer-qWjAK .framer-1lipjkd-container { align-self: start; flex: none; height: 500px; justify-self: start; position: relative; width: 1120px; }`,
        `.framer-qWjAK .framer-bv2n8v { --border-bottom-width: 0px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #dedfe2); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 500px; justify-content: flex-start; max-width: 1320px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-qWjAK .framer-16utqsz { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-qWjAK .framer-11m0v6y-container { flex: 1 0 0px; height: 500px; position: relative; width: 1px; }`,
        `.framer-qWjAK[data-border="true"]::after, .framer-qWjAK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-qWjAK.framer-rxvou3 { width: 810px; } .framer-qWjAK .framer-ivcf7, .framer-qWjAK .framer-16ao1nn { padding: 0px 24px 0px 24px; } .framer-qWjAK .framer-4x4mal, .framer-qWjAK .framer-bv2n8v { height: min-content; } .framer-qWjAK .framer-1lipjkd-container { grid-column: 1 / -1; height: 400px; width: 100%; } .framer-qWjAK .framer-1iogyvb { gap: 0px 24px; grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-qWjAK .framer-11m0v6y-container { height: 470px; }}`,
        `@media (max-width: 809.98px) { .framer-qWjAK.framer-rxvou3 { width: 390px; } .framer-qWjAK .framer-ivcf7 { padding: 0px 12px 0px 12px; } .framer-qWjAK .framer-4x4mal { height: min-content; } .framer-qWjAK .framer-1lipjkd-container { grid-column: 1 / -1; height: auto; width: 100%; } .framer-qWjAK .framer-16ao1nn { gap: 0px; padding: 0px 12px 0px 12px; } .framer-qWjAK .framer-bv2n8v { --border-left-width: 1px; --border-right-width: 1px; height: min-content; overflow: visible; } .framer-qWjAK .framer-1iogyvb { gap: 20px 12px; grid-template-columns: repeat(1, minmax(50px, 1fr)); overflow: var(--overflow-clip-fallback, clip); } .framer-qWjAK .framer-11m0v6y-container { height: 480px; }}`,
      ],
      `framer-qWjAK`
    )),
    (ye = $),
    ($.displayName = `Blog`),
    ($.defaultProps = { height: 3299.5, width: 1200 }),
    b($, [{ explicitInter: !0, fonts: [] }, ...N, ...P], { supportsExplicitInterCodegen: !0 }),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = x.get(J(), n),
          i = x.get(Z(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          p(E, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => p(k, {}, t)));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => p(k, {}, t)));
          })(),
        ]);
      },
    }),
    (be = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerWwYA376Vd`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `false`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"SzHpB6WiS":{"layout":["fixed","auto"]},"SIAfaKF6B":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `3299.5`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { be as __FramerMetadata__, ye as default, L as queryParamNames };
//# sourceMappingURL=3rWaNMRMgWyYbjf_5zaaKCiD3Xe4ouV6BjurVVfAGrY.g_krQKDD.mjs.map
