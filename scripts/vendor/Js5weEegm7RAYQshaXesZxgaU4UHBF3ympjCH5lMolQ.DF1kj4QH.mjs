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
  N as ne,
  S as m,
  St as re,
  T as h,
  V as g,
  Y as _,
  a as v,
  d as y,
  dt as ie,
  gt as ae,
  ht as oe,
  i as b,
  k as x,
  n as S,
  nt as C,
  pt as w,
  st as se,
  ut as ce,
  vt as T,
  wt as E,
  x as D,
  yt as le,
} from "./framer.A_mnCMV8.mjs";
import { n as O, t as ue } from "./plE8lAR0p.DnpcUrKQ.mjs";
import { n as k, t as A } from "./BwcX4JBiR.BqEWfvJm.mjs";
import { i as j, r as M } from "./ph2KJiPTO.aybCIqjF.mjs";
import { n as de, r as fe } from "./sWaqIejCT.D9t6sHym.mjs";
var N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, pe, $, me, he;
e(() => {
  (s(),
    _(),
    f(),
    l(),
    k(),
    ue(),
    M(),
    de(),
    (N = g(O)),
    (P = g(A)),
    (F = E(v)),
    (I = {
      GHCKloWY7: `(min-width: 1200px)`,
      HtsHV5P2C: `(min-width: 810px) and (max-width: 1199.98px)`,
      SMH5LMas0: `(max-width: 809.98px)`,
    }),
    (L = []),
    (R = `framer-6T4ZU`),
    (z = {
      GHCKloWY7: `framer-v-18slsz4`,
      HtsHV5P2C: `framer-v-kdygtj`,
      SMH5LMas0: `framer-v-1kpnbc6`,
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
      y: 20,
    }),
    (U = { damping: 60, delay: 0.1, mass: 1, stiffness: 300, type: `spring` }),
    (W = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (G = () => ({
      from: { alias: `pmDENmCFU`, data: j, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `pmDENmCFU`, name: `Sigc8edc9`, type: `Identifier` },
        { collection: `pmDENmCFU`, name: `CqJEutvNA`, type: `Identifier` },
        { collection: `pmDENmCFU`, name: `oqRw_bwfb`, type: `Identifier` },
        { collection: `pmDENmCFU`, name: `O7PqGHbEq`, type: `Identifier` },
        { collection: `pmDENmCFU`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `pmDENmCFU`, name: `qY7iKNwEW`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: 1 },
        type: `BinaryOperation`,
      },
    })),
    (K = ({ query: e, pageSize: t, children: n }) => n(T(e))),
    (q = () => ({
      from: { alias: `ZHm6xjWRO`, data: j, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `ZHm6xjWRO`, name: `Sigc8edc9`, type: `Identifier` },
        { collection: `ZHm6xjWRO`, name: `CqJEutvNA`, type: `Identifier` },
        { collection: `ZHm6xjWRO`, name: `oqRw_bwfb`, type: `Identifier` },
        { collection: `ZHm6xjWRO`, name: `O7PqGHbEq`, type: `Identifier` },
        { collection: `ZHm6xjWRO`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `ZHm6xjWRO`, name: `qY7iKNwEW`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: 2 },
        type: `BinaryOperation`,
      },
    })),
    (J = () => ({
      from: { alias: `KQeJ56WIs`, data: j, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `KQeJ56WIs`, name: `Sigc8edc9`, type: `Identifier` },
        { collection: `KQeJ56WIs`, name: `CqJEutvNA`, type: `Identifier` },
        { collection: `KQeJ56WIs`, name: `oqRw_bwfb`, type: `Identifier` },
        { collection: `KQeJ56WIs`, name: `O7PqGHbEq`, type: `Identifier` },
        { collection: `KQeJ56WIs`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `KQeJ56WIs`, name: `qY7iKNwEW`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: 3 },
        type: `BinaryOperation`,
      },
    })),
    (Y = () => ({
      from: { alias: `subEcc1w8`, data: j, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `subEcc1w8`, name: `Sigc8edc9`, type: `Identifier` },
        { collection: `subEcc1w8`, name: `CqJEutvNA`, type: `Identifier` },
        { collection: `subEcc1w8`, name: `oqRw_bwfb`, type: `Identifier` },
        { collection: `subEcc1w8`, name: `O7PqGHbEq`, type: `Identifier` },
        { collection: `subEcc1w8`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `subEcc1w8`, name: `qY7iKNwEW`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: 4 },
        type: `BinaryOperation`,
      },
    })),
    (X = () => ({
      from: { alias: `RhQT9dQIl`, data: j, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `RhQT9dQIl`, name: `Sigc8edc9`, type: `Identifier` },
        { collection: `RhQT9dQIl`, name: `CqJEutvNA`, type: `Identifier` },
        { collection: `RhQT9dQIl`, name: `oqRw_bwfb`, type: `Identifier` },
        { collection: `RhQT9dQIl`, name: `O7PqGHbEq`, type: `Identifier` },
        { collection: `RhQT9dQIl`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `RhQT9dQIl`, name: `qY7iKNwEW`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: 5 },
        type: `BinaryOperation`,
      },
    })),
    (Z = { Desktop: `GHCKloWY7`, Phone: `SMH5LMas0`, Tablet: `HtsHV5P2C` }),
    (Q = ({ value: e }) =>
      w()
        ? null
        : r(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (pe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `GHCKloWY7`,
    })),
    ($ = re(
      i(function (e, i) {
        let s = n(null),
          l = i ?? s,
          f = ee(),
          { activeLocale: p, setLocale: re } = oe(),
          g = se(),
          { style: _, className: x, layoutId: C, variant: w, ...T } = pe(e);
        ae(a(() => fe({}, p), [p]));
        let [E, ue] = ie(w, I, !1),
          k = ne(R),
          j = t(y)?.isLayoutTemplate,
          M = B(j, !!t(te)?.transition?.layout);
        return (
          le(),
          ce({}),
          r(y.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: Z,
              primaryVariantId: `GHCKloWY7`,
              variantClassNames: z,
            },
            children: o(d, {
              id: C ?? f,
              children: [
                r(Q, {
                  value: `html body { background: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)); }`,
                }),
                o(u.div, {
                  ...T,
                  className: ne(k, `framer-18slsz4`, x),
                  ref: l,
                  style: { ..._ },
                  children: [
                    r(b, {
                      height: 40,
                      width: g?.width || `100vw`,
                      y: (g?.y || 0) + 0 + 0,
                      children: r(v, {
                        className: `framer-1f5xpuj-container`,
                        layout: M,
                        nodeId: `svfgsMpnP`,
                        scopeId: `sWaqIejCT`,
                        children: r(m, {
                          breakpoint: E,
                          overrides: {
                            HtsHV5P2C: { variant: V(`txn0xfHi_`) },
                            SMH5LMas0: { variant: V(`Jyf0NVykQ`) },
                          },
                          children: r(O, {
                            height: `100%`,
                            id: `svfgsMpnP`,
                            layoutId: `svfgsMpnP`,
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
                      className: `framer-dv3g9s`,
                      "data-border": !0,
                      "data-framer-name": `Section/Services`,
                      layout: M,
                      children: r(`div`, {
                        className: `framer-1ey69gl`,
                        "data-border": !0,
                        "data-framer-name": `Services Container`,
                        children: o(`div`, {
                          className: `framer-35qw3a`,
                          "data-framer-name": `Services`,
                          children: [
                            r(`div`, {
                              className: `framer-14k790n`,
                              children: r(S, {
                                children: r(K, {
                                  query: G(),
                                  children: (e, t, n) =>
                                    r(c, {
                                      children: e?.map(
                                        (
                                          {
                                            CqJEutvNA: e,
                                            id: t,
                                            O7PqGHbEq: n,
                                            oqRw_bwfb: i,
                                            Sigc8edc9: a,
                                          },
                                          o
                                        ) => (
                                          (e ??= ``),
                                          (i ??= ``),
                                          (n ??= ``),
                                          r(
                                            d,
                                            {
                                              id: `pmDENmCFU-${t}`,
                                              children: r(D.Provider, {
                                                value: { O7PqGHbEq: n },
                                                children: r(`div`, {
                                                  className: `framer-1p9aa08`,
                                                  children: r(h, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      r(m, {
                                                        breakpoint: E,
                                                        overrides: {
                                                          HtsHV5P2C: {
                                                            width: `max(max((max(min(${g?.width || `100vw`}, 1320px) - 48px, 1px) - 24px) / 2, 50px), 1px)`,
                                                          },
                                                          SMH5LMas0: {
                                                            width: `max(max(max(min(${g?.width || `100vw`} - 24px, 1320px), 1px), 50px), 1px)`,
                                                          },
                                                        },
                                                        children: r(b, {
                                                          height: 550,
                                                          width: `max(max((max(min(${g?.width || `100vw`} - 80px, 1320px) - 80px, 1px) - 64px) / 3, 50px), 1px)`,
                                                          y:
                                                            (g?.y || 0) +
                                                            0 +
                                                            40 +
                                                            0 +
                                                            0 +
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
                                                            className: `framer-1ok2wu-container`,
                                                            nodeId: `VBrm0Ldb6`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `sWaqIejCT`,
                                                            children: r(m, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                HtsHV5P2C: { nW7Zq_3dw: t[1] },
                                                                SMH5LMas0: {
                                                                  nW7Zq_3dw: t[2],
                                                                  variant: V(`KrksRsRs1`),
                                                                },
                                                              },
                                                              children: r(A, {
                                                                height: `100%`,
                                                                id: `VBrm0Ldb6`,
                                                                layoutId: `VBrm0Ldb6`,
                                                                nW7Zq_3dw: t[0],
                                                                O51_5a_PX: !0,
                                                                PKNvLuNpY: e,
                                                                style: { width: `100%` },
                                                                variant: V(`priFFWFqi`),
                                                                width: `100%`,
                                                                xjRH9XQrp: W(a),
                                                                zHWHkKmXe: i,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            t
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                            r(`div`, {
                              className: `framer-1bem6vh`,
                              children: r(S, {
                                children: r(K, {
                                  query: q(),
                                  children: (e, t, n) =>
                                    r(c, {
                                      children: e?.map(
                                        (
                                          {
                                            CqJEutvNA: e,
                                            id: t,
                                            O7PqGHbEq: n,
                                            oqRw_bwfb: i,
                                            Sigc8edc9: a,
                                          },
                                          o
                                        ) => (
                                          (e ??= ``),
                                          (i ??= ``),
                                          (n ??= ``),
                                          r(
                                            d,
                                            {
                                              id: `ZHm6xjWRO-${t}`,
                                              children: r(D.Provider, {
                                                value: { O7PqGHbEq: n },
                                                children: r(`div`, {
                                                  className: `framer-1s33zee`,
                                                  children: r(h, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      r(m, {
                                                        breakpoint: E,
                                                        overrides: {
                                                          HtsHV5P2C: {
                                                            width: `max(max((max(min(${g?.width || `100vw`}, 1320px) - 48px, 1px) - 24px) / 2, 50px), 1px)`,
                                                          },
                                                          SMH5LMas0: {
                                                            width: `max(max(max(min(${g?.width || `100vw`} - 24px, 1320px), 1px), 50px), 1px)`,
                                                            y:
                                                              (g?.y || 0) +
                                                              0 +
                                                              40 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              574 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          },
                                                        },
                                                        children: r(b, {
                                                          height: 550,
                                                          width: `max(max((max(min(${g?.width || `100vw`} - 80px, 1320px) - 80px, 1px) - 64px) / 3, 50px), 1px)`,
                                                          y:
                                                            (g?.y || 0) +
                                                            0 +
                                                            40 +
                                                            0 +
                                                            0 +
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
                                                            className: `framer-eqevq-container`,
                                                            nodeId: `AoMGupec8`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `sWaqIejCT`,
                                                            children: r(m, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                HtsHV5P2C: {
                                                                  nW7Zq_3dw: t[1],
                                                                  variant: V(`MASiaUF90`),
                                                                },
                                                                SMH5LMas0: {
                                                                  nW7Zq_3dw: t[2],
                                                                  variant: V(`KrksRsRs1`),
                                                                },
                                                              },
                                                              children: r(A, {
                                                                height: `100%`,
                                                                id: `AoMGupec8`,
                                                                layoutId: `AoMGupec8`,
                                                                nW7Zq_3dw: t[0],
                                                                O51_5a_PX: !0,
                                                                PKNvLuNpY: e,
                                                                style: { width: `100%` },
                                                                variant: V(`mLq0hZ4yH`),
                                                                width: `100%`,
                                                                xjRH9XQrp: W(a),
                                                                zHWHkKmXe: i,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            t
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                            r(`div`, {
                              className: `framer-1ylu4hi`,
                              children: r(S, {
                                children: r(K, {
                                  query: J(),
                                  children: (e, t, n) =>
                                    r(c, {
                                      children: e?.map(
                                        (
                                          {
                                            CqJEutvNA: e,
                                            id: t,
                                            O7PqGHbEq: n,
                                            oqRw_bwfb: i,
                                            Sigc8edc9: a,
                                          },
                                          o
                                        ) => (
                                          (e ??= ``),
                                          (i ??= ``),
                                          (n ??= ``),
                                          r(
                                            d,
                                            {
                                              id: `KQeJ56WIs-${t}`,
                                              children: r(D.Provider, {
                                                value: { O7PqGHbEq: n },
                                                children: r(`div`, {
                                                  className: `framer-hm6o6y`,
                                                  children: r(h, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      r(m, {
                                                        breakpoint: E,
                                                        overrides: {
                                                          HtsHV5P2C: {
                                                            width: `max(max((max(min(${g?.width || `100vw`}, 1320px) - 48px, 1px) - 24px) / 2, 50px), 1px)`,
                                                            y:
                                                              (g?.y || 0) +
                                                              0 +
                                                              40 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              574 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          },
                                                          SMH5LMas0: {
                                                            width: `max(max(max(min(${g?.width || `100vw`} - 24px, 1320px), 1px), 50px), 1px)`,
                                                            y:
                                                              (g?.y || 0) +
                                                              0 +
                                                              40 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              1148 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          },
                                                        },
                                                        children: r(b, {
                                                          height: 550,
                                                          width: `max(max((max(min(${g?.width || `100vw`} - 80px, 1320px) - 80px, 1px) - 64px) / 3, 50px), 1px)`,
                                                          y:
                                                            (g?.y || 0) +
                                                            0 +
                                                            40 +
                                                            0 +
                                                            0 +
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
                                                            className: `framer-1igyicz-container`,
                                                            nodeId: `ReXrdL5Je`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `sWaqIejCT`,
                                                            children: r(m, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                HtsHV5P2C: {
                                                                  nW7Zq_3dw: t[1],
                                                                  variant: V(`priFFWFqi`),
                                                                },
                                                                SMH5LMas0: {
                                                                  nW7Zq_3dw: t[2],
                                                                  variant: V(`KrksRsRs1`),
                                                                },
                                                              },
                                                              children: r(A, {
                                                                height: `100%`,
                                                                id: `ReXrdL5Je`,
                                                                layoutId: `ReXrdL5Je`,
                                                                nW7Zq_3dw: t[0],
                                                                O51_5a_PX: !0,
                                                                PKNvLuNpY: e,
                                                                style: { width: `100%` },
                                                                variant: V(`MASiaUF90`),
                                                                width: `100%`,
                                                                xjRH9XQrp: W(a),
                                                                zHWHkKmXe: i,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            t
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                            r(`div`, {
                              className: `framer-1ywx9q`,
                              children: r(S, {
                                children: r(K, {
                                  query: Y(),
                                  children: (e, t, n) =>
                                    r(c, {
                                      children: e?.map(
                                        (
                                          {
                                            CqJEutvNA: e,
                                            id: t,
                                            O7PqGHbEq: n,
                                            oqRw_bwfb: i,
                                            Sigc8edc9: a,
                                          },
                                          o
                                        ) => (
                                          (e ??= ``),
                                          (i ??= ``),
                                          (n ??= ``),
                                          r(
                                            d,
                                            {
                                              id: `subEcc1w8-${t}`,
                                              children: r(D.Provider, {
                                                value: { O7PqGHbEq: n },
                                                children: r(`div`, {
                                                  className: `framer-3oqd86`,
                                                  children: r(h, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      r(m, {
                                                        breakpoint: E,
                                                        overrides: {
                                                          HtsHV5P2C: {
                                                            width: `max(max((max(min(${g?.width || `100vw`}, 1320px) - 48px, 1px) - 24px) / 2, 50px), 1px)`,
                                                            y:
                                                              (g?.y || 0) +
                                                              0 +
                                                              40 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              574 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          },
                                                          SMH5LMas0: {
                                                            width: `max(max(max(min(${g?.width || `100vw`} - 24px, 1320px), 1px), 50px), 1px)`,
                                                            y:
                                                              (g?.y || 0) +
                                                              0 +
                                                              40 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              1722 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          },
                                                        },
                                                        children: r(b, {
                                                          height: 550,
                                                          width: `max(max((max(min(${g?.width || `100vw`} - 80px, 1320px) - 80px, 1px) - 64px) / 3, 50px), 1px)`,
                                                          y:
                                                            (g?.y || 0) +
                                                            0 +
                                                            40 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            582 +
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
                                                            className: `framer-1xyxe3k-container`,
                                                            nodeId: `ucK_rl1UZ`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `sWaqIejCT`,
                                                            children: r(m, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                HtsHV5P2C: {
                                                                  nW7Zq_3dw: t[1],
                                                                  O51_5a_PX: !0,
                                                                  variant: V(`MASiaUF90`),
                                                                },
                                                                SMH5LMas0: {
                                                                  nW7Zq_3dw: t[2],
                                                                  O51_5a_PX: !0,
                                                                  variant: V(`KrksRsRs1`),
                                                                },
                                                              },
                                                              children: r(A, {
                                                                height: `100%`,
                                                                id: `ucK_rl1UZ`,
                                                                layoutId: `ucK_rl1UZ`,
                                                                nW7Zq_3dw: t[0],
                                                                O51_5a_PX: !1,
                                                                PKNvLuNpY: e,
                                                                style: { width: `100%` },
                                                                variant: V(`mLq0hZ4yH`),
                                                                width: `100%`,
                                                                xjRH9XQrp: W(a),
                                                                zHWHkKmXe: i,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            t
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                            r(`div`, {
                              className: `framer-jp53cc`,
                              children: r(S, {
                                children: r(K, {
                                  query: X(),
                                  children: (e, t, n) =>
                                    r(c, {
                                      children: e?.map(
                                        (
                                          {
                                            CqJEutvNA: e,
                                            id: t,
                                            O7PqGHbEq: n,
                                            oqRw_bwfb: i,
                                            Sigc8edc9: a,
                                          },
                                          o
                                        ) => (
                                          (e ??= ``),
                                          (i ??= ``),
                                          (n ??= ``),
                                          r(
                                            d,
                                            {
                                              id: `RhQT9dQIl-${t}`,
                                              children: r(D.Provider, {
                                                value: { O7PqGHbEq: n },
                                                children: r(`div`, {
                                                  className: `framer-2jfve2`,
                                                  children: r(h, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { O7PqGHbEq: n },
                                                          webPageId: `hvuOyIzp6`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      r(m, {
                                                        breakpoint: E,
                                                        overrides: {
                                                          HtsHV5P2C: {
                                                            width: `max(max((max(min(${g?.width || `100vw`}, 1320px) - 48px, 1px) - 24px) / 2, 50px), 1px)`,
                                                            y:
                                                              (g?.y || 0) +
                                                              0 +
                                                              40 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              1148 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          },
                                                          SMH5LMas0: {
                                                            width: `max(max(max(min(${g?.width || `100vw`} - 24px, 1320px), 1px), 50px), 1px)`,
                                                            y:
                                                              (g?.y || 0) +
                                                              0 +
                                                              40 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              2296 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          },
                                                        },
                                                        children: r(b, {
                                                          height: 550,
                                                          width: `max(max((max(min(${g?.width || `100vw`} - 80px, 1320px) - 80px, 1px) - 64px) / 3, 50px), 1px)`,
                                                          y:
                                                            (g?.y || 0) +
                                                            0 +
                                                            40 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            582 +
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
                                                            className: `framer-1ma2etp-container`,
                                                            nodeId: `ANVRc6Uf8`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `sWaqIejCT`,
                                                            children: r(m, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                HtsHV5P2C: { nW7Zq_3dw: t[1] },
                                                                SMH5LMas0: {
                                                                  nW7Zq_3dw: t[2],
                                                                  variant: V(`KrksRsRs1`),
                                                                },
                                                              },
                                                              children: r(A, {
                                                                height: `100%`,
                                                                id: `ANVRc6Uf8`,
                                                                layoutId: `ANVRc6Uf8`,
                                                                nW7Zq_3dw: t[0],
                                                                O51_5a_PX: !1,
                                                                PKNvLuNpY: e,
                                                                style: { width: `100%` },
                                                                variant: V(`MASiaUF90`),
                                                                width: `100%`,
                                                                xjRH9XQrp: W(a),
                                                                zHWHkKmXe: i,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            t
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    r(m, {
                      breakpoint: E,
                      overrides: {
                        HtsHV5P2C: { y: (g?.y || 0) + 0 + 1738 },
                        SMH5LMas0: { y: (g?.y || 0) + 0 + 2886 },
                      },
                      children: r(b, {
                        height: 40,
                        width: g?.width || `100vw`,
                        y: (g?.y || 0) + 0 + 1172,
                        children: r(v, {
                          className: `framer-1p54i51-container`,
                          layout: M,
                          nodeId: `byIIV1VR0`,
                          scopeId: `sWaqIejCT`,
                          children: r(m, {
                            breakpoint: E,
                            overrides: {
                              HtsHV5P2C: { variant: V(`txn0xfHi_`) },
                              SMH5LMas0: { variant: V(`uJk8lJWMB`) },
                            },
                            children: r(O, {
                              height: `100%`,
                              id: `byIIV1VR0`,
                              layoutId: `byIIV1VR0`,
                              nzjXCr09A: {
                                borderBottomWidth: 0,
                                borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              style: { width: `100%` },
                              Uz_x_jqMH: {
                                borderBottomWidth: 1,
                                borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
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
        `.framer-6T4ZU.framer-5ox8vb, .framer-6T4ZU .framer-5ox8vb { display: block; }`,
        `.framer-6T4ZU.framer-18slsz4 { align-content: center; align-items: center; background-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-6T4ZU .framer-1f5xpuj-container, .framer-6T4ZU .framer-1p54i51-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-6T4ZU .framer-dv3g9s { --border-bottom-width: 1px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgba(0, 0, 0, 0.08)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-6T4ZU .framer-1ey69gl { --border-bottom-width: 0px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #e7e7ea); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-6T4ZU .framer-35qw3a { display: grid; flex: 1 0 0px; gap: 32px 32px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6T4ZU .framer-14k790n, .framer-6T4ZU .framer-1bem6vh, .framer-6T4ZU .framer-1ylu4hi, .framer-6T4ZU .framer-1ywx9q, .framer-6T4ZU .framer-jp53cc { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6T4ZU .framer-1p9aa08, .framer-6T4ZU .framer-1s33zee, .framer-6T4ZU .framer-hm6o6y, .framer-6T4ZU .framer-3oqd86, .framer-6T4ZU .framer-2jfve2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6T4ZU .framer-1ok2wu-container, .framer-6T4ZU .framer-eqevq-container, .framer-6T4ZU .framer-1igyicz-container, .framer-6T4ZU .framer-1xyxe3k-container, .framer-6T4ZU .framer-1ma2etp-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-6T4ZU[data-border="true"]::after, .framer-6T4ZU [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-6T4ZU.framer-18slsz4 { width: 810px; } .framer-6T4ZU .framer-dv3g9s { padding: 0px; } .framer-6T4ZU .framer-1ey69gl { padding: 0px 24px 0px 24px; } .framer-6T4ZU .framer-35qw3a { gap: 24px 24px; grid-template-columns: repeat(2, minmax(50px, 1fr)); order: 0; }}`,
        `@media (max-width: 809.98px) { .framer-6T4ZU.framer-18slsz4 { width: 390px; } .framer-6T4ZU .framer-dv3g9s { padding: 0px 12px 0px 12px; } .framer-6T4ZU .framer-1ey69gl { padding: 0px; } .framer-6T4ZU .framer-35qw3a { gap: 24px 24px; grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-6T4ZU`
    )),
    (me = $),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 3351.5, width: 1200 }),
    x($, [{ explicitInter: !0, fonts: [] }, ...N, ...P], { supportsExplicitInterCodegen: !0 }),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = C.get(G(), n),
          i = C.get(q(), n),
          a = C.get(J(), n),
          o = C.get(Y(), n),
          s = C.get(X(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          a.preload(),
          o.preload(),
          s.preload(),
          p(O, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => p(A, {}, t)));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => p(A, {}, t)));
          })(),
          (async () => {
            let e = (await a.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => p(A, {}, t)));
          })(),
          (async () => {
            let e = (await o.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => p(A, {}, t)));
          })(),
          (async () => {
            let e = (await s.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => p(A, {}, t)));
          })(),
        ]);
      },
    }),
    (he = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramersWaqIejCT`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"HtsHV5P2C":{"layout":["fixed","fixed"]},"SMH5LMas0":{"layout":["fixed","fixed"]}}}`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `3351.5`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { he as __FramerMetadata__, me as default, L as queryParamNames };
//# sourceMappingURL=Js5weEegm7RAYQshaXesZxgaU4UHBF3ympjCH5lMolQ.DF1kj4QH.mjs.map
