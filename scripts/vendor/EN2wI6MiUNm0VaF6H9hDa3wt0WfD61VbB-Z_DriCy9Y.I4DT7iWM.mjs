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
import { C as u, a as d, r as f, t as p } from "./motion.C4Ab7j_2.mjs";
import {
  F as m,
  N as h,
  S as g,
  St as _,
  V as v,
  Y as y,
  _ as b,
  a as x,
  d as S,
  dt as C,
  gt as te,
  ht as ne,
  i as w,
  k as T,
  n as re,
  nt as E,
  pt as D,
  st as O,
  ut as k,
  vt as A,
  x as ie,
} from "./framer.A_mnCMV8.mjs";
import { n as j, t as M } from "./plE8lAR0p.DnpcUrKQ.mjs";
import { i as ae, t as N } from "./MgDkoXCTm.CRKARBdD.mjs";
import { n as P, t as F } from "./stN8ugXYC.Cls6vLM5.mjs";
import { n as I, r as oe } from "./OJNA9hOdA.C2t0K6J8.mjs";
var L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (s(),
    y(),
    p(),
    l(),
    M(),
    F(),
    ae(),
    I(),
    (L = v(j)),
    (R = v(P)),
    (z = {
      DNd0n4JBf: `(min-width: 810px) and (max-width: 1199.98px)`,
      oFm1NqXRR: `(max-width: 809.98px)`,
      Rpkbmqe4r: `(min-width: 1200px)`,
    }),
    (B = []),
    (V = `framer-gXnNs`),
    (H = {
      DNd0n4JBf: `framer-v-197dnjm`,
      oFm1NqXRR: `framer-v-sje91p`,
      Rpkbmqe4r: `framer-v-1xb4svz`,
    }),
    (U = (e, t, n) => (e && t ? `position` : n)),
    (W = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (G = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (K = () => ({
      from: { alias: `sCmGs2AAN`, data: N, type: `Collection` },
      select: [
        { collection: `sCmGs2AAN`, name: `PL0YsbUUz`, type: `Identifier` },
        { collection: `sCmGs2AAN`, name: `LfkY4TS8p`, type: `Identifier` },
        { collection: `sCmGs2AAN`, name: `baW2gFX6h`, type: `Identifier` },
        { collection: `sCmGs2AAN`, name: `I0cWIyBUM`, type: `Identifier` },
        { collection: `sCmGs2AAN`, name: `id`, type: `Identifier` },
      ],
    })),
    (q = ({ query: e, pageSize: t, children: n }) => n(A(e))),
    (J = { Desktop: `Rpkbmqe4r`, Phone: `oFm1NqXRR`, Tablet: `DNd0n4JBf` }),
    (Y = ({ value: e }) =>
      D()
        ? null
        : r(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (X = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: J[r.variant] ?? r.variant ?? `Rpkbmqe4r`,
    })),
    (Z = _(
      i(function (e, i) {
        let s = n(null),
          l = i ?? s,
          p = ee(),
          { activeLocale: m, setLocale: _ } = ne(),
          v = O(),
          { style: y, className: T, layoutId: E, variant: D, ...A } = X(e);
        te(a(() => oe({}, m), [m]));
        let [M, ae] = C(D, z, !1),
          N = h(V),
          F = t(S)?.isLayoutTemplate,
          I = U(F, !!t(d)?.transition?.layout);
        return (
          k({}),
          r(S.Provider, {
            value: {
              activeVariantId: M,
              humanReadableVariantMap: J,
              primaryVariantId: `Rpkbmqe4r`,
              variantClassNames: H,
            },
            children: o(f, {
              id: E ?? p,
              children: [
                r(Y, {
                  value: `html body { background: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)); }`,
                }),
                o(u.div, {
                  ...A,
                  className: h(N, `framer-1xb4svz`, T),
                  ref: l,
                  style: { ...y },
                  children: [
                    r(w, {
                      height: 40,
                      width: `calc(${v?.width || `100vw`} - 40px)`,
                      y: (v?.y || 0) + 160 + 0,
                      children: r(x, {
                        className: `framer-2ajij6-container`,
                        layout: I,
                        nodeId: `XrBFKUuhg`,
                        scopeId: `OJNA9hOdA`,
                        children: r(g, {
                          breakpoint: M,
                          overrides: {
                            DNd0n4JBf: { variant: W(`txn0xfHi_`) },
                            oFm1NqXRR: { variant: W(`Jyf0NVykQ`) },
                          },
                          children: r(j, {
                            height: `100%`,
                            id: `XrBFKUuhg`,
                            layoutId: `XrBFKUuhg`,
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
                              borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 223, 226))`,
                              borderStyle: `solid`,
                              borderWidth: 0,
                            },
                            variant: W(`qElohr0kM`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    r(u.section, {
                      className: `framer-1fbfper`,
                      "data-framer-name": `Case Studies`,
                      layout: I,
                      children: r(`div`, {
                        className: `framer-17lzq3j`,
                        "data-border": !0,
                        "data-framer-name": `Case Study Container`,
                        children: r(`div`, {
                          className: `framer-19pzqoc`,
                          "data-border": !0,
                          "data-framer-name": `Case Studies`,
                          children: r(`div`, {
                            className: `framer-11tect0`,
                            children: r(re, {
                              children: r(q, {
                                query: K(),
                                children: (e, t, n) =>
                                  r(c, {
                                    children: e?.map(
                                      (
                                        {
                                          baW2gFX6h: e,
                                          I0cWIyBUM: t,
                                          id: n,
                                          LfkY4TS8p: i,
                                          PL0YsbUUz: a,
                                        },
                                        o
                                      ) => (
                                        (a ??= ``),
                                        (t ??= ``),
                                        r(
                                          f,
                                          {
                                            id: `sCmGs2AAN-${n}`,
                                            children: r(ie.Provider, {
                                              value: { PL0YsbUUz: a },
                                              children: r(b, {
                                                href: {
                                                  pathVariables: { PL0YsbUUz: a },
                                                  webPageId: `Rvm1myXJT`,
                                                },
                                                motionChild: !0,
                                                nodeId: `ckxV4s7wX`,
                                                openInNewTab: !1,
                                                scopeId: `OJNA9hOdA`,
                                                children: r(u.a, {
                                                  className: `framer-195x5al framer-15yj46w`,
                                                  "data-framer-name": `Case Studies`,
                                                  children: r(g, {
                                                    breakpoint: M,
                                                    overrides: {
                                                      DNd0n4JBf: {
                                                        width: `max(max((max(min(max(${v?.width || `100vw`} - 88px, 1px), 1320px), 1px) - 32px) / 2, 50px), 1px)`,
                                                      },
                                                      oFm1NqXRR: {
                                                        height: 480,
                                                        width: `max(max(max(min(max(${v?.width || `100vw`} - 64px, 1px), 1320px), 1px), 50px), 1px)`,
                                                      },
                                                    },
                                                    children: r(w, {
                                                      height: 540,
                                                      width: `max(max((max(min(max(${v?.width || `100vw`} - 120px, 1px), 1320px), 1px) - 32px) / 2, 50px), 1px)`,
                                                      y:
                                                        (v?.y || 0) +
                                                        160 +
                                                        200 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0,
                                                      children: r(x, {
                                                        className: `framer-16e19bs-container`,
                                                        nodeId: `kbI2hsmkO`,
                                                        scopeId: `OJNA9hOdA`,
                                                        children: r(g, {
                                                          breakpoint: M,
                                                          overrides: {
                                                            oFm1NqXRR: {
                                                              style: {
                                                                height: `100%`,
                                                                width: `100%`,
                                                              },
                                                            },
                                                          },
                                                          children: r(P, {
                                                            height: `100%`,
                                                            id: `kbI2hsmkO`,
                                                            kZJ2Dwhm9: G(e),
                                                            layoutId: `kbI2hsmkO`,
                                                            mF6WZzvBe: G(i),
                                                            style: { width: `100%` },
                                                            T4Lphm6WY: t,
                                                            width: `100%`,
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
                r(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-gXnNs.framer-15yj46w, .framer-gXnNs .framer-15yj46w { display: block; }`,
        `.framer-gXnNs.framer-1xb4svz { align-content: center; align-items: center; background-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-gXnNs .framer-2ajij6-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-gXnNs .framer-1fbfper { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-gXnNs .framer-17lzq3j { --border-bottom-width: 1px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #e7e7ea); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-gXnNs .framer-19pzqoc { --border-bottom-width: 0px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #dedfe2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1320px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-gXnNs .framer-11tect0 { display: grid; flex: 1 0 0px; gap: 32px 32px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
        `.framer-gXnNs .framer-195x5al { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px 0px; height: min-content; justify-content: center; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-gXnNs .framer-16e19bs-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-gXnNs[data-border="true"]::after, .framer-gXnNs [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-gXnNs.framer-1xb4svz { width: 810px; } .framer-gXnNs .framer-17lzq3j { padding: 0px 24px 0px 24px; }}`,
        `@media (max-width: 809.98px) { .framer-gXnNs.framer-1xb4svz { width: 390px; } .framer-gXnNs .framer-17lzq3j { padding: 0px 12px 0px 12px; } .framer-gXnNs .framer-11tect0 { gap: 24px 12px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-gXnNs .framer-16e19bs-container { aspect-ratio: 0.7625 / 1; height: var(--framer-aspect-ratio-supported, 262px); }}`,
      ],
      `framer-gXnNs`
    )),
    (Q = Z),
    (Z.displayName = `Client Stories`),
    (Z.defaultProps = { height: 2566, width: 1200 }),
    T(Z, [{ explicitInter: !0, fonts: [] }, ...L, ...R], { supportsExplicitInterCodegen: !0 }),
    (Z.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = E.get(K(), n);
        return Promise.allSettled([
          r.preload(),
          m(j, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => m(P, {}, t)));
          })(),
        ]);
      },
    }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerOJNA9hOdA`,
          slots: [],
          annotations: {
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `2566`,
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"DNd0n4JBf":{"layout":["fixed","auto"]},"oFm1NqXRR":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, B as queryParamNames };
//# sourceMappingURL=EN2wI6MiUNm0VaF6H9hDa3wt0WfD61VbB-Z_DriCy9Y.I4DT7iWM.mjs.map
