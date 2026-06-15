import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import {
  A as t,
  O as n,
  P as r,
  c as i,
  g as a,
  j as o,
  l as s,
  o as ee,
  s as te,
  v as ne,
  w as c,
} from "./react.DXuyTrsy.mjs";
import { C as l, a as re, r as u, t as d } from "./motion.C4Ab7j_2.mjs";
import {
  E as f,
  F as p,
  G as m,
  H as h,
  N as ie,
  S as g,
  St as _,
  T as ae,
  U as v,
  V as y,
  Y as b,
  _ as oe,
  a as x,
  ct as se,
  d as ce,
  dt as le,
  gt as ue,
  ht as de,
  i as fe,
  k as pe,
  mt as me,
  n as he,
  nt as S,
  p as ge,
  pt as _e,
  st as ve,
  ut as ye,
  v as be,
  vt as xe,
  wt as C,
  x as Se,
  yt as Ce,
} from "./framer.A_mnCMV8.mjs";
import { n as w, t as T } from "./m4ltnAOmS.ChSqi6AS.mjs";
import { a as E, i as D, o as O, r as we } from "./shared-lib.3vyoKFC0.mjs";
import { i as k, n as A, r as j, t as Te } from "./QZFw8ECYE.CJ6FqAnr.mjs";
import { i as M, n as N, r as P, t as Ee } from "./jdYQlRkvk.BuF_eFXD.mjs";
import { i as De, n as F, r as Oe, t as ke } from "./trekJP1di.CpdlAUyW.mjs";
import {
  a as Ae,
  c as je,
  i as Me,
  n as I,
  o as L,
  r as Ne,
  s as Pe,
  t as Fe,
} from "./S699pxNrj.B3HeT_zr.mjs";
import { i as Ie, n as Le, r as Re, t as ze } from "./hAAA29zio.DV3g1_Gb.mjs";
import { i as Be, n as Ve, r as He, t as Ue } from "./MCw3mYFZA.C4S1wX7m.mjs";
import { i as We, n as Ge, r as R, t as Ke } from "./R5dNbwg65.Co9p2lkS.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./eI0ewyztX.DSzkTLjv.mjs";
import { i as Ze, t as z } from "./N4M2au0UE.BYNeTSU6.mjs";
import { i as Qe, n as $e, r as et, t as tt } from "./S7mMmO2rL.C24bip4_.mjs";
import { i as nt, n as rt, r as it, t as at } from "./hIPPOoO4W.DX2nruxp.mjs";
import { i as ot, n as st, r as ct, t as lt } from "./mzR3zmcHn.BNdl6UGt.mjs";
import { a as ut, i as dt } from "./sr8L2uXk3.BEKN6jUQ.mjs";
var B,
  ft,
  V,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  H,
  yt,
  bt,
  U,
  W,
  G,
  K,
  q,
  xt,
  J,
  St,
  Ct,
  wt,
  Y,
  X,
  Tt,
  Z,
  Et,
  Q,
  Dt,
  $,
  Ot,
  kt;
e(() => {
  (ee(),
    b(),
    d(),
    c(),
    T(),
    We(),
    Ze(),
    Ge(),
    je(),
    qe(),
    Ie(),
    nt(),
    M(),
    Be(),
    ot(),
    k(),
    Me(),
    Qe(),
    De(),
    O(),
    dt(),
    (B = C(f)),
    (ft = y(w)),
    (V = C(x)),
    (pt = y(R)),
    (mt = {
      f6XUjT6aU: `(max-width: 809.98px)`,
      P9BUQJGaG: `(min-width: 1200px)`,
      Z1BiWtgT9: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (ht = []),
    (gt = `framer-bAPWE`),
    (_t = {
      f6XUjT6aU: `framer-v-a4jiic`,
      P9BUQJGaG: `framer-v-kv0zqb`,
      Z1BiWtgT9: `framer-v-9fyfl0`,
    }),
    (vt = (e, t, n) => (e && t ? `position` : n)),
    (H = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (yt = (e, t, n) => {
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
    (bt = { dateStyle: `medium`, timeZone: `UTC` }),
    (U = (e, t) => yt(e, bt, t)),
    (W = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 }),
    (G = {
      effect: W,
      repeat: !1,
      startDelay: 0.2,
      threshold: 0,
      tokenization: `line`,
      transition: { damping: 60, delay: 0.075, mass: 1, stiffness: 200, type: `spring` },
      trigger: `onInView`,
      type: `appear`,
    }),
    (K = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (q = { damping: 60, delay: 0.2, mass: 1, stiffness: 200, type: `spring` }),
    (xt = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (St = {
      effect: W,
      repeat: !1,
      startDelay: 0.2,
      threshold: 0,
      tokenization: `line`,
      transition: { damping: 60, delay: 0.075, mass: 1, stiffness: 300, type: `spring` },
      trigger: `onInView`,
      type: `appear`,
    }),
    (Ct = {
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
    (wt = { damping: 60, delay: 0.2, mass: 1, stiffness: 300, type: `spring` }),
    (Y = (e) => ({
      from: {
        constraint: {
          left: { collection: `fjePlI5BS`, name: `CbdMDVY6P`, type: `Identifier` },
          operator: `==`,
          right: { collection: `CbdMDVY6P`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `fjePlI5BS`, data: z, type: `Collection` },
        right: { alias: `CbdMDVY6P`, data: Ke, type: `Collection` },
        type: `LeftJoin`,
      },
      limit: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `fjePlI5BS`, name: `TgdiU12W0`, type: `Identifier` },
        { collection: `fjePlI5BS`, name: `MdHi4l3wf`, type: `Identifier` },
        {
          alias: `CbdMDVY6P.mzSTQXzoT`,
          collection: `CbdMDVY6P`,
          name: `mzSTQXzoT`,
          type: `Identifier`,
        },
        { collection: `fjePlI5BS`, name: `rO8fZU9yq`, type: `Identifier` },
        { collection: `fjePlI5BS`, name: `DQOzgQXjc`, type: `Identifier` },
        { collection: `fjePlI5BS`, name: `id`, type: `Identifier` },
      ],
      where: {
        operator: `not`,
        type: `UnaryOperation`,
        value: {
          left: { collection: `fjePlI5BS`, name: `id`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      },
    })),
    (X = (e) => ({
      from: {
        constraint: {
          left: { collection: `fjePlI5BS`, name: `CbdMDVY6P`, type: `Identifier` },
          operator: `==`,
          right: { collection: `CbdMDVY6P`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `fjePlI5BS`, data: z, type: `Collection` },
        right: { alias: `CbdMDVY6P`, data: Ke, type: `Collection` },
        type: `LeftJoin`,
      },
      limit: { type: `LiteralValue`, value: 2 },
      select: [
        { collection: `fjePlI5BS`, name: `TgdiU12W0`, type: `Identifier` },
        { collection: `fjePlI5BS`, name: `MdHi4l3wf`, type: `Identifier` },
        {
          alias: `CbdMDVY6P.mzSTQXzoT`,
          collection: `CbdMDVY6P`,
          name: `mzSTQXzoT`,
          type: `Identifier`,
        },
        { collection: `fjePlI5BS`, name: `rO8fZU9yq`, type: `Identifier` },
        { collection: `fjePlI5BS`, name: `DQOzgQXjc`, type: `Identifier` },
        { collection: `fjePlI5BS`, name: `id`, type: `Identifier` },
      ],
      where: {
        operator: `not`,
        type: `UnaryOperation`,
        value: {
          left: { collection: `fjePlI5BS`, name: `id`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      },
    })),
    (Tt = ({ query: e, pageSize: t, children: n }) => n(xe(e))),
    (Z = { Desktop: `P9BUQJGaG`, Phone: `f6XUjT6aU`, Tablet: `Z1BiWtgT9` }),
    (Et = ({ value: e }) =>
      _e()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Q = (e) => ({
      from: { alias: `sr8L2uXk3`, data: z, type: `Collection` },
      select: [
        { collection: `sr8L2uXk3`, name: `DQOzgQXjc`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `rO8fZU9yq`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `FWQY_RDd2`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `MdHi4l3wf`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `QqauaeGy7`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `QZmcadAke`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `Krgp7GEO6`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `MPXqp0myc`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `gmDMsgR57`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `id`, type: `Identifier` },
      ],
      where: e,
    })),
    (Dt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `P9BUQJGaG`,
    })),
    ($ = _(
      a(function (e, a) {
        let ee = n(null),
          c = a ?? ee,
          d = ne(),
          { activeLocale: p, setLocale: h } = de(),
          _ = ve(),
          y = se(),
          [b] = xe(Q(m(y, `sr8L2uXk3`))),
          x = (e) => {
            if (!b) throw new be(`No data matches path variables: ${JSON.stringify(y)}`);
            return b[e];
          },
          {
            style: pe,
            className: S,
            layoutId: _e,
            variant: C,
            DQOzgQXjc: T = x(`DQOzgQXjc`) ?? ``,
            rO8fZU9yq: E = x(`rO8fZU9yq`),
            FWQY_RDd2: D = x(`FWQY_RDd2`) ?? ``,
            MdHi4l3wf: O = x(`MdHi4l3wf`),
            QqauaeGy7: k = x(`QqauaeGy7`) ?? ``,
            QZmcadAke: A = x(`QZmcadAke`),
            Krgp7GEO6: j = x(`Krgp7GEO6`) ?? ``,
            MPXqp0myc: M = x(`MPXqp0myc`) ?? ``,
            gmDMsgR57: N = x(`gmDMsgR57`) ?? ``,
            id: P = x(`id`),
            ...De
          } = Dt(e);
        ue(o(() => ut({ DQOzgQXjc: T, FWQY_RDd2: D, MdHi4l3wf: O }, p), [T, O, D, p]));
        let [F, Oe] = le(C, mt, !1),
          je = ie(gt, Fe, Ae, tt, Ue, ze, we, Ee, ke, Te, Xe, lt, at),
          Me = t(ce)?.isLayoutTemplate,
          I = vt(Me, !!t(re)?.transition?.layout),
          L = me(),
          Ne = U(E, L),
          Pe = xt(N);
        return (
          Ce(),
          ye({}),
          i(ce.Provider, {
            value: {
              activeVariantId: F,
              humanReadableVariantMap: Z,
              primaryVariantId: `P9BUQJGaG`,
              variantClassNames: _t,
            },
            children: s(u, {
              id: _e ?? d,
              children: [
                i(Et, {
                  value: `html body { background: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)); }`,
                }),
                s(l.div, {
                  ...De,
                  className: ie(je, `framer-kv0zqb`, S),
                  ref: c,
                  style: { ...pe },
                  children: [
                    i(l.div, {
                      className: `framer-b58omi`,
                      "data-border": !0,
                      "data-framer-name": `Header`,
                      layout: I,
                      children: i(`section`, {
                        className: `framer-17e6w3q`,
                        "data-framer-name": `Headline Container`,
                        children: s(`div`, {
                          className: `framer-bog5y5`,
                          "data-border": !0,
                          "data-framer-name": `Headline`,
                          children: [
                            i(g, {
                              breakpoint: F,
                              overrides: {
                                f6XUjT6aU: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: v((_?.y || 0) + 140 + 0 + 0 + 0 + 0 + 0 + 0),
                                    pixelHeight: 1800,
                                    pixelWidth: 2400,
                                    sizes: `min(${_?.width || `100vw`} - 64px, 1320px)`,
                                    ...H(O),
                                    positionX: `center`,
                                    positionY: `top`,
                                  },
                                },
                                Z1BiWtgT9: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: v((_?.y || 0) + 140 + 0 + 0 + 0 + 0 + 0 + 0),
                                    pixelHeight: 1800,
                                    pixelWidth: 2400,
                                    sizes: `min(${_?.width || `100vw`} - 88px, 1320px)`,
                                    ...H(O),
                                    positionX: `center`,
                                    positionY: `top`,
                                  },
                                },
                              },
                              children: i(ge, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: v((_?.y || 0) + 140 + 0 + 0 + 0 + 0 + 0 + 0),
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `min(${_?.width || `100vw`} - 120px, 1320px)`,
                                  ...H(O),
                                  positionX: `center`,
                                  positionY: `top`,
                                },
                                className: `framer-1f2kv0e`,
                                "data-framer-name": `Cover`,
                                children: i(`div`, {
                                  className: `framer-1qrahcc`,
                                  "data-framer-name": `Overlay`,
                                }),
                              }),
                            }),
                            i(`div`, {
                              className: `framer-vpi134`,
                              "data-framer-name": `Date`,
                              children: i(f, {
                                __fromCanvasComponent: !0,
                                children: i(r, {
                                  children: i(`p`, {
                                    className: `framer-styles-preset-7pnbvf`,
                                    "data-styles-preset": `S699pxNrj`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: `6 janvier 2026`,
                                  }),
                                }),
                                className: `framer-fjkpbn`,
                                "data-framer-name": `Date`,
                                effect: G,
                                fonts: [`Inter`],
                                text: i(`time`, { dateTime: E, children: Ne }),
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            i(f, {
                              __fromCanvasComponent: !0,
                              children: i(r, {
                                children: i(`h1`, {
                                  className: `framer-styles-preset-1syofky`,
                                  "data-styles-preset": `dLNPRim3l`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                  },
                                  children: `Comment recruter rapidement un profil tertiaire en intérim`,
                                }),
                              }),
                              className: `framer-1vz45ew`,
                              effect: G,
                              fonts: [`Inter`],
                              text: T,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      }),
                    }),
                    i(l.div, {
                      className: `framer-1o2ffwh`,
                      "data-border": !0,
                      "data-framer-name": `Body`,
                      layout: I,
                      children: s(`div`, {
                        className: `framer-3qd8tm`,
                        "data-border": !0,
                        "data-framer-name": `Container`,
                        children: [
                          i(B, {
                            __framer__animate: { transition: q },
                            __framer__animateOnce: !0,
                            __framer__enter: K,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: k,
                            className: `framer-17txe02`,
                            "data-framer-name": `Content`,
                            fonts: [`Inter`],
                            stylesPresetsClassNames: {
                              a: `framer-styles-preset-e4u9vm`,
                              h4: `framer-styles-preset-a521ga`,
                              h5: `framer-styles-preset-2o477m`,
                              h6: `framer-styles-preset-1i45uki`,
                              p: `framer-styles-preset-ar7l3c`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          i(g, {
                            breakpoint: F,
                            overrides: {
                              f6XUjT6aU: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: v((_?.y || 0) + 140 + 710 + 0 + 0 + 48 + 128),
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `min(min(${_?.width || `100vw`} - 64px, 1320px) - 48px, 600px)`,
                                  ...H(A),
                                },
                              },
                              Z1BiWtgT9: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: v((_?.y || 0) + 140 + 660 + 0 + 0 + 100 + 144),
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `min(min(${_?.width || `100vw`} - 88px, 1320px), 600px)`,
                                  ...H(A),
                                },
                              },
                            },
                            children: i(ge, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: v((_?.y || 0) + 140 + 840 + 0 + 0 + 100 + 144),
                                pixelHeight: 1800,
                                pixelWidth: 2400,
                                sizes: `min(min(${_?.width || `100vw`} - 120px, 1320px), 600px)`,
                                ...H(A),
                              },
                              className: `framer-1n8ih6p`,
                            }),
                          }),
                          i(B, {
                            __framer__animate: { transition: q },
                            __framer__animateOnce: !0,
                            __framer__enter: K,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: j,
                            className: `framer-nq5ya7`,
                            "data-framer-name": `Content`,
                            fonts: [`Inter`],
                            stylesPresetsClassNames: {
                              a: `framer-styles-preset-1rg295n`,
                              code: `framer-styles-preset-1mav4qy`,
                              h1: `framer-styles-preset-fvt9x8`,
                              h2: `framer-styles-preset-1592g84`,
                              h3: `framer-styles-preset-9i9lmd`,
                              h4: `framer-styles-preset-a521ga`,
                              h5: `framer-styles-preset-2o477m`,
                              h6: `framer-styles-preset-1i45uki`,
                              p: `framer-styles-preset-ar7l3c`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          i(B, {
                            __framer__animate: { transition: q },
                            __framer__animateOnce: !0,
                            __framer__enter: K,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: M,
                            className: `framer-38y80h`,
                            "data-framer-name": `Content`,
                            fonts: [`Inter`],
                            stylesPresetsClassNames: {
                              a: `framer-styles-preset-1rg295n`,
                              code: `framer-styles-preset-1mav4qy`,
                              h1: `framer-styles-preset-fvt9x8`,
                              h2: `framer-styles-preset-1592g84`,
                              h3: `framer-styles-preset-9i9lmd`,
                              h4: `framer-styles-preset-a521ga`,
                              h5: `framer-styles-preset-2o477m`,
                              h6: `framer-styles-preset-1i45uki`,
                              p: `framer-styles-preset-ar7l3c`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          s(`div`, {
                            className: `framer-3lvghp`,
                            "data-framer-name": `CTA`,
                            children: [
                              i(B, {
                                __framer__animate: { transition: q },
                                __framer__animateOnce: !0,
                                __framer__enter: K,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: i(r, {
                                  children: i(`h5`, {
                                    className: `framer-styles-preset-2o477m`,
                                    "data-styles-preset": `MCw3mYFZA`,
                                    dir: `auto`,
                                    children: `Talentorz place des profils tertiaires qualifiés en moins de 48 heures. Déposez votre besoin en ligne et un consultant vous rappelle dans l'heure.`,
                                  }),
                                }),
                                className: `framer-1got7eu`,
                                fonts: [`Inter`],
                                text: N,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              Pe !== !1 &&
                                i(ae, {
                                  links: [
                                    {
                                      href: { webPageId: `MTMcCw60K` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `MTMcCw60K` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `MTMcCw60K` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    i(g, {
                                      breakpoint: F,
                                      overrides: {
                                        f6XUjT6aU: {
                                          y: (_?.y || 0) + 140 + 710 + 0 + 0 + 48 + 771 + 16 + 61.9,
                                        },
                                        Z1BiWtgT9: {
                                          y:
                                            (_?.y || 0) + 140 + 660 + 0 + 0 + 100 + 835 + 16 + 61.9,
                                        },
                                      },
                                      children: i(fe, {
                                        height: 46,
                                        y: (_?.y || 0) + 140 + 840 + 0 + 0 + 100 + 835 + 16 + 61.9,
                                        children: i(V, {
                                          __framer__animate: { transition: q },
                                          __framer__animateOnce: !0,
                                          __framer__enter: K,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1sii4a0-container`,
                                          nodeId: `Hy7LHis92`,
                                          rendersWithMotion: !0,
                                          scopeId: `sr8L2uXk3`,
                                          children: i(g, {
                                            breakpoint: F,
                                            overrides: {
                                              f6XUjT6aU: { UpJIkfs85: e[2] },
                                              Z1BiWtgT9: { UpJIkfs85: e[1] },
                                            },
                                            children: i(w, {
                                              CKN5OFggn: !1,
                                              D1jCD7MYH: `book a consultation`,
                                              height: `100%`,
                                              id: `Hy7LHis92`,
                                              layoutId: `Hy7LHis92`,
                                              UpJIkfs85: e[0],
                                              variant: J(`V7C2a9ucP`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    s(l.section, {
                      className: `framer-6dkpy9`,
                      "data-framer-name": `More Blog`,
                      layout: I,
                      children: [
                        i(`section`, {
                          className: `framer-36aw1b`,
                          "data-framer-name": `Headline Container`,
                          children: i(`div`, {
                            className: `framer-1919trk`,
                            "data-border": !0,
                            "data-framer-name": `Headline`,
                            children: i(`div`, {
                              className: `framer-1g4vkdz`,
                              "data-framer-name": `Text Container`,
                              children: i(g, {
                                breakpoint: F,
                                overrides: {
                                  f6XUjT6aU: {
                                    children: i(r, {
                                      children: i(`h2`, {
                                        className: `framer-styles-preset-1592g84`,
                                        "data-styles-preset": `QZFw8ECYE`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                                        },
                                        children: `Plus de guides et de conseils`,
                                      }),
                                    }),
                                  },
                                },
                                children: i(f, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: i(`h2`, {
                                      className: `framer-styles-preset-1592g84`,
                                      "data-styles-preset": `QZFw8ECYE`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                                      },
                                      children: `Plus de guides et de conseils`,
                                    }),
                                  }),
                                  className: `framer-1a5ukdl`,
                                  effect: St,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                        }),
                        i(`div`, {
                          className: `framer-nfrjwq`,
                          "data-border": !0,
                          "data-framer-name": `Blog Container`,
                          children: i(`div`, {
                            className: `framer-iu8tro`,
                            "data-border": !0,
                            "data-framer-name": `Blogs`,
                            children: i(`div`, {
                              className: `framer-12ksarz`,
                              children: i(he, {
                                children: i(g, {
                                  breakpoint: F,
                                  overrides: {
                                    f6XUjT6aU: { query: X(P) },
                                    Z1BiWtgT9: { query: X(P) },
                                  },
                                  children: i(Tt, {
                                    query: Y(P),
                                    children: (e, t, n) =>
                                      i(te, {
                                        children: e?.map(
                                          (
                                            {
                                              "CbdMDVY6P.mzSTQXzoT": e,
                                              DQOzgQXjc: t,
                                              id: n,
                                              MdHi4l3wf: r,
                                              rO8fZU9yq: a,
                                              TgdiU12W0: o,
                                            },
                                            s
                                          ) => (
                                            (o ??= ``),
                                            (e ??= ``),
                                            (t ??= ``),
                                            i(
                                              u,
                                              {
                                                id: `fjePlI5BS-${n}`,
                                                children: i(Se.Provider, {
                                                  value: { TgdiU12W0: o },
                                                  children: i(oe, {
                                                    href: {
                                                      pathVariables: { TgdiU12W0: o },
                                                      webPageId: `sr8L2uXk3`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `sn0HPzFCm`,
                                                    scopeId: `sr8L2uXk3`,
                                                    children: i(l.a, {
                                                      className: `framer-eu8nrw framer-tx5exv`,
                                                      children: i(g, {
                                                        breakpoint: F,
                                                        overrides: {
                                                          f6XUjT6aU: {
                                                            height: 480,
                                                            width: `max(max(max(min(max(${_?.width || `100vw`} - 64px, 1px), 1320px), 1px), 50px), 1px)`,
                                                            y:
                                                              (_?.y || 0) +
                                                              140 +
                                                              1892.9 +
                                                              0 +
                                                              186 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          },
                                                          Z1BiWtgT9: {
                                                            height: 470,
                                                            width: `max(max((max(min(max(${_?.width || `100vw`} - 88px, 1px), 1320px), 1px) - 24px) / 2, 50px), 1px)`,
                                                            y:
                                                              (_?.y || 0) +
                                                              140 +
                                                              1998.9 +
                                                              0 +
                                                              226 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          },
                                                        },
                                                        children: i(fe, {
                                                          height: 500,
                                                          width: `max(max((max(min(max(${_?.width || `100vw`} - 120px, 1px), 1320px), 1px) - 64px) / 3, 50px), 1px)`,
                                                          y:
                                                            (_?.y || 0) +
                                                            140 +
                                                            2178.9 +
                                                            0 +
                                                            248 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0,
                                                          children: i(V, {
                                                            __framer__animate: { transition: wt },
                                                            __framer__animateOnce: !0,
                                                            __framer__enter: Ct,
                                                            __framer__styleAppearEffectEnabled: !0,
                                                            __framer__threshold: 0,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            className: `framer-ucovne-container`,
                                                            nodeId: `oUkNJTqni`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `sr8L2uXk3`,
                                                            children: i(g, {
                                                              breakpoint: F,
                                                              overrides: {
                                                                f6XUjT6aU: {
                                                                  variant: J(`GR9znIAHl`),
                                                                },
                                                              },
                                                              children: i(R, {
                                                                height: `100%`,
                                                                id: `oUkNJTqni`,
                                                                layoutId: `oUkNJTqni`,
                                                                MhUTJlyuS: H(r),
                                                                qMLA71X5f: U(a, L),
                                                                style: {
                                                                  height: `100%`,
                                                                  width: `100%`,
                                                                },
                                                                variant: J(`wJ29C7LV5`),
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
                      ],
                    }),
                  ],
                }),
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-bAPWE.framer-tx5exv, .framer-bAPWE .framer-tx5exv { display: block; }`,
        `.framer-bAPWE.framer-kv0zqb { align-content: center; align-items: center; background-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-bAPWE .framer-b58omi { --border-bottom-width: 1px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #dedee3); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 68vh; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-17e6w3q { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-bog5y5 { --border-bottom-width: 0px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #e7e7ea); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: 1px; justify-content: flex-end; max-width: 1320px; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-1f2kv0e { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-bAPWE .framer-1qrahcc { background: linear-gradient(180deg, rgba(12, 17, 28, 0) 0%, rgba(12, 17, 28, 0.35) 50%, var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28)) 100%); bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; }`,
        `.framer-bAPWE .framer-vpi134 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 6px; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-fjkpbn { flex: 1 0 0px; height: auto; opacity: 0.9; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bAPWE .framer-1vz45ew { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 70%; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-1o2ffwh { --border-bottom-width: 1px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #dedee3); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-3qd8tm { --border-bottom-width: 0px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #dedee3); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1320px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-17txe02, .framer-bAPWE .framer-nq5ya7, .framer-bAPWE .framer-38y80h { --framer-paragraph-spacing: 32px; flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bAPWE .framer-1n8ih6p { aspect-ratio: 1.6901408450704225 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: var(--framer-aspect-ratio-supported, 355px); max-width: 600px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bAPWE .framer-3lvghp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 600px; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-1got7eu { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 560px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bAPWE .framer-1sii4a0-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-bAPWE .framer-6dkpy9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-36aw1b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-1919trk { --border-bottom-width: 0px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #e7e7ea); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 1320px; overflow: visible; padding: 120px 0px 70px 0px; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-1g4vkdz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 50%; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-1a5ukdl { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-nfrjwq { --border-bottom-width: 1px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #e7e7ea); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-bAPWE .framer-iu8tro { --border-bottom-width: 0px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #dedfe2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 500px; justify-content: flex-start; max-width: 1320px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-bAPWE .framer-12ksarz { display: grid; flex: 1 0 0px; gap: 32px 32px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bAPWE .framer-eu8nrw { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-bAPWE .framer-ucovne-container { flex: 1 0 0px; height: 500px; position: relative; width: 1px; }`,
        ...I,
        ...L,
        ...$e,
        ...Ve,
        ...Le,
        ...D,
        ...N,
        ...F,
        ...A,
        ...Je,
        ...st,
        ...rt,
        `.framer-bAPWE[data-border="true"]::after, .framer-bAPWE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-bAPWE.framer-kv0zqb { width: 810px; } .framer-bAPWE .framer-b58omi { height: 50vh; padding: 0px 24px 0px 24px; } .framer-bAPWE .framer-1vz45ew { max-width: 80%; } .framer-bAPWE .framer-1o2ffwh, .framer-bAPWE .framer-36aw1b, .framer-bAPWE .framer-nfrjwq { padding: 0px 24px 0px 24px; } .framer-bAPWE .framer-1919trk { padding: 120px 0px 48px 0px; } .framer-bAPWE .framer-1g4vkdz { max-width: 65%; } .framer-bAPWE .framer-iu8tro { height: min-content; } .framer-bAPWE .framer-12ksarz { gap: 24px 24px; grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-bAPWE .framer-ucovne-container { height: 470px; }}`,
        `@media (max-width: 809.98px) { .framer-bAPWE.framer-kv0zqb { width: 390px; } .framer-bAPWE .framer-b58omi { height: 55.00000000000001vh; padding: 0px 12px 0px 12px; } .framer-bAPWE .framer-bog5y5 { gap: 24px; padding: 24px; } .framer-bAPWE .framer-1vz45ew, .framer-bAPWE .framer-1g4vkdz { max-width: unset; } .framer-bAPWE .framer-1o2ffwh, .framer-bAPWE .framer-36aw1b { padding: 0px 12px 0px 12px; } .framer-bAPWE .framer-3qd8tm { gap: 32px; order: 0; padding: 48px 24px 80px 24px; } .framer-bAPWE .framer-1n8ih6p { height: var(--framer-aspect-ratio-supported, 188px); } .framer-bAPWE .framer-1919trk { align-content: flex-start; align-items: flex-start; padding: 80px 24px 48px 24px; } .framer-bAPWE .framer-nfrjwq { gap: 0px; padding: 0px 12px 0px 12px; } .framer-bAPWE .framer-iu8tro { height: min-content; overflow: visible; } .framer-bAPWE .framer-12ksarz { gap: 20px 0px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-bAPWE .framer-ucovne-container { height: 480px; }}`,
      ],
      `framer-bAPWE`
    )),
    (Ot = $),
    ($.displayName = `Articles Detail`),
    ($.defaultProps = { height: 4349.5, width: 1200 }),
    pe(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...ft,
        ...pt,
        ...h(Ne),
        ...h(Pe),
        ...h(et),
        ...h(He),
        ...h(Re),
        ...h(E),
        ...h(P),
        ...h(Oe),
        ...h(j),
        ...h(Ye),
        ...h(ct),
        ...h(it),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = S.get(Q(m(t.pathVariables, `sr8L2uXk3`)), n).readMaybeAsync();
        return Promise.allSettled([
          p(w, {}, t),
          (async () => {
            let [e] = (await r) ?? [];
            return Promise.allSettled([S.get(Y(e?.id), n).preload(), S.get(X(e?.id), n).preload()]);
          })(),
          (async () => {
            let [e] = (await r) ?? [],
              i = (await S.get(Y(e?.id), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => p(R, {}, t)));
          })(),
        ]);
      },
    }),
    (kt = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framersr8L2uXk3`,
          slots: [],
          annotations: {
            framerScrollSections: `false`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `4349.5`,
            framerDisplayContentsDiv: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Z1BiWtgT9":{"layout":["fixed","auto"]},"f6XUjT6aU":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { kt as __FramerMetadata__, Ot as default, ht as queryParamNames };
//# sourceMappingURL=MuVtRaeCtWZ7dVToqERkdacOfnb5GhxhB43qveSU3LE.BI2a-LWq.mjs.map
