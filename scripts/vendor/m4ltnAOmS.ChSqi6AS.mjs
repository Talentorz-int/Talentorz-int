import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import {
  A as t,
  O as n,
  P as r,
  c as i,
  g as a,
  j as o,
  l as s,
  o as c,
  v as l,
  w as u,
} from "./react.DXuyTrsy.mjs";
import { C as d, a as f, r as p, t as m } from "./motion.C4Ab7j_2.mjs";
import {
  A as h,
  E as g,
  H as _,
  N as v,
  St as y,
  V as b,
  Y as x,
  _ as S,
  ht as ee,
  k as C,
  o as w,
  ot as T,
  st as E,
  xt as D,
} from "./framer.A_mnCMV8.mjs";
import { n as O, t as k } from "./a87e639Ik.Cx0YrbD_.mjs";
import { i as A, n as j, r as M, t as N } from "./lpw1HhEJv.CUARUhsz.mjs";
function P(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y = e(() => {
    (c(),
      x(),
      m(),
      u(),
      O(),
      A(),
      (F = b(k)),
      (I = {
        dnKmjbVLh: { hover: !0 },
        g0IuIchf1: { hover: !0 },
        q9HtGXLkP: { hover: !0 },
        V7C2a9ucP: { hover: !0 },
      }),
      (L = [`dnKmjbVLh`, `V7C2a9ucP`, `g0IuIchf1`, `q9HtGXLkP`]),
      (R = `framer-Bre5s`),
      (z = {
        dnKmjbVLh: `framer-v-ap2pvg`,
        g0IuIchf1: `framer-v-14j92vm`,
        q9HtGXLkP: `framer-v-1khtl6h`,
        V7C2a9ucP: `framer-v-1nggirf`,
      }),
      (B = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (V = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (H = ({ value: e, children: n }) => {
        let r = t(f),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(f.Provider, { value: s, children: n });
      }),
      (U = {
        "large-dark": `V7C2a9ucP`,
        "large-light": `dnKmjbVLh`,
        "small-fill-dark": `q9HtGXLkP`,
        "small-fill": `g0IuIchf1`,
      }),
      (W = d.create(r)),
      (G = ({ buttonText: e, click: t, height: n, id: r, link: i, newTab: a, width: o, ...s }) => ({
        ...s,
        CKN5OFggn: a ?? s.CKN5OFggn ?? !0,
        D1jCD7MYH: e ?? s.D1jCD7MYH ?? `Contacter`,
        gbJGVT2_f: t ?? s.gbJGVT2_f,
        UpJIkfs85: i ?? s.UpJIkfs85,
        variant: U[s.variant] ?? s.variant ?? `dnKmjbVLh`,
      })),
      (K = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = y(
        a(function (e, t) {
          let a = n(null),
            o = t ?? a,
            c = l(),
            { activeLocale: u, setLocale: f } = ee();
          E();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: y,
              D1jCD7MYH: b,
              UpJIkfs85: x,
              CKN5OFggn: C,
              gbJGVT2_f: w,
              ...O
            } = G(e),
            {
              baseVariant: A,
              classNames: j,
              clearLoadingGesture: M,
              gestureHandlers: F,
              gestureVariant: U,
              isLoading: q,
              setGestureState: J,
              setVariant: Y,
              variants: X,
            } = D({
              cycleOrder: L,
              defaultVariant: `dnKmjbVLh`,
              enabledGestures: I,
              ref: o,
              variant: y,
              variantClassNames: z,
            }),
            Z = K(e, X),
            { activeVariantCallback: Q, delay: te } = T(A),
            ne = Q(async (...e) => {
              if ((J({ isPressed: !1 }), w && (await w(...e)) === !1)) return !1;
            }),
            re = v(R, N),
            $ = () =>
              !(
                [`g0IuIchf1-hover`, `q9HtGXLkP-hover`].includes(U) ||
                [`g0IuIchf1`, `q9HtGXLkP`].includes(A)
              );
          return i(p, {
            id: _ ?? c,
            children: i(W, {
              animate: X,
              initial: !1,
              children: i(H, {
                value: B,
                ...P({ g0IuIchf1: { value: V }, q9HtGXLkP: { value: V } }, A, U),
                children: i(S, {
                  href: x,
                  motionChild: !0,
                  nodeId: `dnKmjbVLh`,
                  openInNewTab: C,
                  scopeId: `m4ltnAOmS`,
                  smoothScroll: !0,
                  children: s(d.a, {
                    ...O,
                    ...F,
                    className: `${v(re, `framer-ap2pvg`, h, j)} framer-1o53qwo`,
                    "data-border": !0,
                    "data-framer-name": `large-light`,
                    "data-highlight": !0,
                    layoutDependency: Z,
                    layoutId: `dnKmjbVLh`,
                    onTap: ne,
                    ref: o,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgba(255, 255, 255, 0.06))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backdropFilter: `blur(40px)`,
                      background: `linear-gradient(90deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)`,
                      WebkitBackdropFilter: `blur(40px)`,
                      ...m,
                    },
                    variants: {
                      g0IuIchf1: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backdropFilter: `none`,
                        background: `rgba(0, 0, 0, 0)`,
                        WebkitBackdropFilter: `none`,
                      },
                      q9HtGXLkP: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        background: `rgba(0, 0, 0, 0)`,
                      },
                      V7C2a9ucP: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        background: `linear-gradient(270deg, rgba(235, 238, 247, 0) 0%, var(--token-17a4aa8b-4312-4d00-9b62-1131a3e4b987, rgba(0, 86, 251, 0.15)) 100%)`,
                      },
                    },
                    ...P(
                      {
                        "dnKmjbVLh-hover": { "data-framer-name": void 0 },
                        "g0IuIchf1-hover": { "data-framer-name": void 0 },
                        "q9HtGXLkP-hover": { "data-framer-name": void 0 },
                        "V7C2a9ucP-hover": { "data-framer-name": void 0 },
                        g0IuIchf1: { "data-framer-name": `small-fill` },
                        q9HtGXLkP: { "data-framer-name": `small-fill-dark` },
                        V7C2a9ucP: { "data-framer-name": `large-dark` },
                      },
                      A,
                      U
                    ),
                    children: [
                      $() &&
                        i(d.div, {
                          className: `framer-o5163h`,
                          "data-framer-name": `Line`,
                          layoutDependency: Z,
                          layoutId: `SWQverFW2`,
                          style: {
                            background: `linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.07) 100%)`,
                          },
                          variants: {
                            V7C2a9ucP: {
                              background: `linear-gradient(180deg, var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, rgb(12, 17, 28)) 0%, rgba(215, 228, 234, 0.07) 100%)`,
                            },
                          },
                        }),
                      i(d.div, {
                        className: `framer-62kivu`,
                        "data-framer-name": `button-wrapper`,
                        layoutDependency: Z,
                        layoutId: `h0HlqipQb`,
                        style: {
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                        },
                        variants: {
                          "dnKmjbVLh-hover": {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                          "g0IuIchf1-hover": {
                            backgroundColor: `var(--token-60201a70-47ba-4cfc-80b4-6a7f3bd4e1da, rgb(243, 245, 250))`,
                          },
                          "q9HtGXLkP-hover": { backgroundColor: `rgb(0, 32, 48)` },
                          "V7C2a9ucP-hover": {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                          g0IuIchf1: {
                            backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                          },
                          q9HtGXLkP: {
                            backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                          },
                        },
                        children: i(d.div, {
                          className: `framer-13mgha1`,
                          "data-framer-name": `text-wrapper`,
                          layoutDependency: Z,
                          layoutId: `rD48khCUz`,
                          children: i(g, {
                            __fromCanvasComponent: !0,
                            children: i(r, {
                              children: i(d.p, {
                                className: `framer-styles-preset-xjkrtz`,
                                "data-styles-preset": `lpw1HhEJv`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                },
                                children: `Contacter`,
                              }),
                            }),
                            className: `framer-9mzocm`,
                            fonts: [`Inter`],
                            layoutDependency: Z,
                            layoutId: `PjImS79Do`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: b,
                            variants: {
                              g0IuIchf1: {
                                "--extracted-r6o4lv": `var(--token-bdea36de-cbdf-4a10-83f7-2aa0fbb32f7f, rgb(8, 8, 8))`,
                              },
                              V7C2a9ucP: {
                                "--extracted-r6o4lv": `var(--token-bdea36de-cbdf-4a10-83f7-2aa0fbb32f7f, rgb(8, 8, 8))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...P(
                              {
                                g0IuIchf1: {
                                  children: i(r, {
                                    children: i(d.p, {
                                      className: `framer-styles-preset-xjkrtz`,
                                      "data-styles-preset": `lpw1HhEJv`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bdea36de-cbdf-4a10-83f7-2aa0fbb32f7f, rgb(8, 8, 8)))`,
                                      },
                                      children: `Contacter`,
                                    }),
                                  }),
                                },
                                V7C2a9ucP: {
                                  children: i(r, {
                                    children: i(d.p, {
                                      className: `framer-styles-preset-xjkrtz`,
                                      "data-styles-preset": `lpw1HhEJv`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bdea36de-cbdf-4a10-83f7-2aa0fbb32f7f, rgb(8, 8, 8)))`,
                                      },
                                      children: `Contacter`,
                                    }),
                                  }),
                                },
                              },
                              A,
                              U
                            ),
                          }),
                        }),
                      }),
                      $() &&
                        s(d.div, {
                          className: `framer-jvi5ua`,
                          "data-framer-name": `icon`,
                          layoutDependency: Z,
                          layoutId: `Ox16i79di`,
                          children: [
                            i(k, {
                              animated: !0,
                              className: `framer-16enh33`,
                              layoutDependency: Z,
                              layoutId: `CTQSa2RMG`,
                              style: {
                                "--szd5nr": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                              },
                              variants: { V7C2a9ucP: { "--szd5nr": `rgb(8, 8, 8)` } },
                            }),
                            i(k, {
                              animated: !0,
                              className: `framer-tbdnsf`,
                              layoutDependency: Z,
                              layoutId: `HpZXL6Lx6`,
                              style: {
                                "--szd5nr": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                              },
                              variants: { V7C2a9ucP: { "--szd5nr": `rgb(8, 8, 8)` } },
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Bre5s.framer-1o53qwo, .framer-Bre5s .framer-1o53qwo { display: block; }`,
          `.framer-Bre5s.framer-ap2pvg { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-Bre5s .framer-o5163h { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 1; }`,
          `.framer-Bre5s .framer-62kivu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 15px 22px 16px 22px; position: relative; width: min-content; }`,
          `.framer-Bre5s .framer-13mgha1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Bre5s .framer-9mzocm { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Bre5s .framer-jvi5ua { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 15px; position: relative; width: min-content; }`,
          `.framer-Bre5s .framer-16enh33 { flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-Bre5s .framer-tbdnsf { aspect-ratio: 1 / 1; bottom: -20px; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: -20px; position: absolute; width: 16px; z-index: 1; }`,
          `.framer-Bre5s.framer-v-1nggirf .framer-62kivu { padding: 14px 22px 15px 22px; }`,
          `.framer-Bre5s.framer-v-1nggirf .framer-jvi5ua { padding: 14px; }`,
          `.framer-Bre5s.framer-v-14j92vm.framer-ap2pvg, .framer-Bre5s.framer-v-1khtl6h.framer-ap2pvg { gap: 12px; justify-content: flex-end; }`,
          `.framer-Bre5s.framer-v-14j92vm .framer-62kivu, .framer-Bre5s.framer-v-1khtl6h .framer-62kivu { justify-content: flex-end; padding: 12px 16px 12px 16px; }`,
          `.framer-Bre5s.framer-v-14j92vm .framer-13mgha1, .framer-Bre5s.framer-v-1khtl6h .framer-13mgha1 { gap: 10px; height: 12px; }`,
          `.framer-Bre5s.framer-v-ap2pvg.hover .framer-16enh33, .framer-Bre5s.framer-v-1nggirf.hover .framer-16enh33 { aspect-ratio: 1 / 1; position: absolute; right: -20px; top: -20px; z-index: 1; }`,
          `.framer-Bre5s.framer-v-ap2pvg.hover .framer-tbdnsf, .framer-Bre5s.framer-v-1nggirf.hover .framer-tbdnsf { bottom: unset; left: unset; position: relative; }`,
          ...j,
          `.framer-Bre5s[data-border="true"]::after, .framer-Bre5s [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Bre5s`
      )),
      (J = q),
      (q.displayName = `Button`),
      (q.defaultProps = { height: 46, width: 179.5 }),
      h(q, {
        variant: {
          options: [`dnKmjbVLh`, `V7C2a9ucP`, `g0IuIchf1`, `q9HtGXLkP`],
          optionTitles: [`large-light`, `large-dark`, `small-fill`, `small-fill-dark`],
          title: `Variant`,
          type: w.Enum,
        },
        D1jCD7MYH: {
          defaultValue: `Contacter`,
          displayTextArea: !1,
          title: `Button Text`,
          type: w.String,
        },
        onD1jCD7MYHChange: { changes: `D1jCD7MYH`, type: w.ChangeHandler },
        UpJIkfs85: { title: `Link`, type: w.Link },
        CKN5OFggn: { defaultValue: !0, title: `New Tab`, type: w.Boolean },
        onCKN5OFggnChange: { changes: `CKN5OFggn`, type: w.ChangeHandler },
        gbJGVT2_f: { title: `Click`, type: w.EventHandler },
      }),
      C(
        q,
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
          ...F,
          ..._(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { J as n, Y as t };
//# sourceMappingURL=m4ltnAOmS.ChSqi6AS.mjs.map
