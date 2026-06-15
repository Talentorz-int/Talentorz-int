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
import { C as d, a as f, r as ee, t as p } from "./motion.C4Ab7j_2.mjs";
import {
  A as m,
  E as h,
  H as g,
  N as _,
  St as v,
  U as y,
  V as b,
  Y as x,
  _ as te,
  ht as S,
  k as C,
  o as w,
  p as T,
  st as ne,
  xt as E,
} from "./framer.A_mnCMV8.mjs";
import { n as D, t as O } from "./a87e639Ik.Cx0YrbD_.mjs";
import { a as k, i as A, o as j, r as M } from "./shared-lib.3vyoKFC0.mjs";
import { i as N, n as P, r as F, t as I } from "./hAAA29zio.DV3g1_Gb.mjs";
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var R,
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
  Y,
  X,
  Z,
  Q = e(() => {
    (c(),
      x(),
      p(),
      u(),
      D(),
      N(),
      j(),
      (R = b(O)),
      (z = { MASiaUF90: { hover: !0 }, mLq0hZ4yH: { hover: !0 }, priFFWFqi: { hover: !0 } }),
      (B = [`mLq0hZ4yH`, `priFFWFqi`, `MASiaUF90`, `KrksRsRs1`]),
      (V = `framer-W8NNT`),
      (H = {
        KrksRsRs1: `framer-v-3qbiqf`,
        MASiaUF90: `framer-v-15rprmo`,
        mLq0hZ4yH: `framer-v-xmt7dt`,
        priFFWFqi: `framer-v-1bh9bq3`,
      }),
      (U = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (W = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (G = ({ value: e, children: n }) => {
        let r = t(f),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(f.Provider, { value: s, children: n });
      }),
      (K = {
        "1st Item": `priFFWFqi`,
        "End Item": `MASiaUF90`,
        Item: `mLq0hZ4yH`,
        Mobile: `KrksRsRs1`,
      }),
      (q = d.create(r)),
      (J = ({
        bGImage: e,
        bottomLine: t,
        height: n,
        id: r,
        link: i,
        shortDesc: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        nW7Zq_3dw: i ?? c.nW7Zq_3dw,
        O51_5a_PX: t ?? c.O51_5a_PX,
        PKNvLuNpY: o ?? c.PKNvLuNpY ?? `Comptabilité & Reporting`,
        variant: K[c.variant] ?? c.variant ?? `mLq0hZ4yH`,
        xjRH9XQrp: e ??
          c.xjRH9XQrp ?? {
            pixelHeight: 1600,
            pixelWidth: 2400,
            src: `../../assets/images/g386xggMkwAPkIOKExX630SCfs.webp?width=2400&height=1600`,
            srcSet: `../../assets/images/g386xggMkwAPkIOKExX630SCfs.webp 512w,../../assets/images/g386xggMkwAPkIOKExX630SCfs.webp 1024w,../../assets/images/g386xggMkwAPkIOKExX630SCfs.webp?scale-down-to=2048&width=2400&height=1600 2048w,../../assets/images/g386xggMkwAPkIOKExX630SCfs.webp?width=2400&height=1600 2400w`,
          },
        zHWHkKmXe:
          a ??
          c.zHWHkKmXe ??
          `Du contrat à la paie, tout est géré correctement, dans les délais, à chaque fois.`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = v(
        a(function (e, t) {
          let a = n(null),
            o = t ?? a,
            c = l(),
            { activeLocale: u, setLocale: f } = S(),
            p = ne(),
            {
              style: m,
              className: g,
              layoutId: v,
              variant: b,
              xjRH9XQrp: x,
              PKNvLuNpY: C,
              zHWHkKmXe: w,
              nW7Zq_3dw: D,
              O51_5a_PX: k,
              ...A
            } = J(e),
            {
              baseVariant: j,
              classNames: N,
              clearLoadingGesture: P,
              gestureHandlers: F,
              gestureVariant: R,
              isLoading: K,
              setGestureState: X,
              setVariant: Z,
              variants: Q,
            } = E({
              cycleOrder: B,
              defaultVariant: `mLq0hZ4yH`,
              enabledGestures: z,
              ref: o,
              variant: b,
              variantClassNames: H,
            }),
            $ = Y(e, Q),
            re = _(V, I, M);
          return i(ee, {
            id: v ?? c,
            children: i(q, {
              animate: Q,
              initial: !1,
              children: i(G, {
                value: U,
                children: i(te, {
                  href: D,
                  motionChild: !0,
                  nodeId: `mLq0hZ4yH`,
                  openInNewTab: !1,
                  scopeId: `BwcX4JBiR`,
                  children: s(d.a, {
                    ...A,
                    ...F,
                    className: `${_(re, `framer-xmt7dt`, g, N)} framer-1wavqa0`,
                    "data-framer-name": `Item`,
                    layoutDependency: $,
                    layoutId: `mLq0hZ4yH`,
                    ref: o,
                    style: { ...m },
                    ...L(
                      {
                        "MASiaUF90-hover": { "data-framer-name": void 0 },
                        "mLq0hZ4yH-hover": { "data-framer-name": void 0 },
                        "priFFWFqi-hover": { "data-framer-name": void 0 },
                        KrksRsRs1: { "data-framer-name": `Mobile` },
                        MASiaUF90: { "data-framer-name": `End Item` },
                        priFFWFqi: { "data-framer-name": `1st Item` },
                      },
                      j,
                      R
                    ),
                    children: [
                      s(d.div, {
                        className: `framer-18jko4s`,
                        "data-framer-name": `Image`,
                        layoutDependency: $,
                        layoutId: `XMI7ctn3P`,
                        children: [
                          i(T, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: y(
                                (p?.y || 0) +
                                  0 +
                                  ((p?.height || 550) -
                                    0 -
                                    (Math.max(0, ((p?.height || 550) - 0 - 227.5) / 1) * 1 +
                                      227.5 +
                                      0) +
                                    0 +
                                    0) +
                                  (Math.max(0, ((p?.height || 550) - 0 - 227.5) / 1) *
                                    1 *
                                    0.5000000000000002 -
                                    ((Math.max(0, ((p?.height || 550) - 0 - 227.5) / 1) * 1 - 0) *
                                      1) /
                                      2)
                              ),
                              pixelHeight: 1600,
                              pixelWidth: 2400,
                              sizes: p?.width || `100vw`,
                              ...W(x),
                            },
                            className: `framer-11zez2f`,
                            "data-framer-name": `Front`,
                            layoutDependency: $,
                            layoutId: `wPJc_N0p5`,
                            ...L(
                              {
                                "MASiaUF90-hover": {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: y(
                                      (p?.y || 0) +
                                        0 +
                                        ((p?.height || 550) -
                                          0 -
                                          (Math.max(0, ((p?.height || 550) - 0 - 227.5) / 1) * 1 +
                                            227.5 +
                                            0) +
                                          0 +
                                          0) +
                                        (Math.max(0, ((p?.height || 550) - 0 - 227.5) / 1) *
                                          1 *
                                          0.5000000000000002 -
                                          ((Math.max(0, ((p?.height || 550) - 0 - 227.5) / 1) * 1 -
                                            0) *
                                            1.03) /
                                            2)
                                    ),
                                    pixelHeight: 1600,
                                    pixelWidth: 2400,
                                    sizes: `calc(${p?.width || `100vw`} * 1.03)`,
                                    ...W(x),
                                  },
                                },
                                "mLq0hZ4yH-hover": {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: y(
                                      (p?.y || 0) +
                                        0 +
                                        ((p?.height || 550) -
                                          0 -
                                          (Math.max(0, ((p?.height || 550) - 0 - 227.5) / 1) * 1 +
                                            227.5 +
                                            0) +
                                          0 +
                                          0) +
                                        (Math.max(0, ((p?.height || 550) - 0 - 227.5) / 1) *
                                          1 *
                                          0.5000000000000002 -
                                          ((Math.max(0, ((p?.height || 550) - 0 - 227.5) / 1) * 1 -
                                            0) *
                                            1.03) /
                                            2)
                                    ),
                                    pixelHeight: 1600,
                                    pixelWidth: 2400,
                                    sizes: `calc(${p?.width || `100vw`} * 1.03)`,
                                    ...W(x),
                                  },
                                },
                                "priFFWFqi-hover": {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: y(
                                      (p?.y || 0) +
                                        0 +
                                        ((p?.height || 550) -
                                          0 -
                                          (Math.max(0, ((p?.height || 550) - 0 - 227.5) / 1) * 1 +
                                            227.5 +
                                            0) +
                                          0 +
                                          0) +
                                        (Math.max(0, ((p?.height || 550) - 0 - 227.5) / 1) *
                                          1 *
                                          0.5000000000000002 -
                                          ((Math.max(0, ((p?.height || 550) - 0 - 227.5) / 1) * 1 -
                                            0) *
                                            1.03) /
                                            2)
                                    ),
                                    pixelHeight: 1600,
                                    pixelWidth: 2400,
                                    sizes: `calc(${p?.width || `100vw`} * 1.03)`,
                                    ...W(x),
                                  },
                                },
                                KrksRsRs1: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: y(
                                      (p?.y || 0) +
                                        0 +
                                        ((p?.height || 480) -
                                          0 -
                                          (Math.max(0, ((p?.height || 480) - 0 - 219.5) / 1) * 1 +
                                            219.5 +
                                            0) +
                                          0 +
                                          0) +
                                        (Math.max(0, ((p?.height || 480) - 0 - 219.5) / 1) *
                                          1 *
                                          0.5000000000000002 -
                                          ((Math.max(0, ((p?.height || 480) - 0 - 219.5) / 1) * 1 -
                                            0) *
                                            1) /
                                            2)
                                    ),
                                    pixelHeight: 1600,
                                    pixelWidth: 2400,
                                    sizes: p?.width || `100vw`,
                                    ...W(x),
                                  },
                                },
                              },
                              j,
                              R
                            ),
                          }),
                          s(d.div, {
                            className: `framer-18sv3eh`,
                            "data-framer-name": `Arrow`,
                            layoutDependency: $,
                            layoutId: `kQON2hQ7Z`,
                            style: { backgroundColor: `rgb(255, 255, 255)` },
                            children: [
                              i(O, {
                                animated: !0,
                                className: `framer-16h327z`,
                                layoutDependency: $,
                                layoutId: `vMK7zPN4h`,
                                style: {
                                  "--szd5nr": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(57, 60, 66))`,
                                },
                              }),
                              i(O, {
                                animated: !0,
                                className: `framer-1ljg8a3`,
                                layoutDependency: $,
                                layoutId: `M3oC9MVWc`,
                                style: {
                                  "--szd5nr": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(57, 60, 66))`,
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      s(d.div, {
                        className: `framer-1pox4ex`,
                        "data-border": !0,
                        "data-framer-name": `Content`,
                        layoutDependency: $,
                        layoutId: `QL9VODHm1`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 223, 226))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                        },
                        variants: {
                          KrksRsRs1: {
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                          },
                        },
                        children: [
                          s(d.div, {
                            className: `framer-1evilrt`,
                            "data-framer-name": `Top`,
                            layoutDependency: $,
                            layoutId: `HBS_L908j`,
                            children: [
                              i(h, {
                                __fromCanvasComponent: !0,
                                children: i(r, {
                                  children: i(d.h3, {
                                    className: `framer-styles-preset-1i45uki`,
                                    "data-styles-preset": `hAAA29zio`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-a0htzi, var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28)))`,
                                    },
                                    children: `Comptabilité & Reporting`,
                                  }),
                                }),
                                className: `framer-1hnjzv7`,
                                fonts: [`Inter`],
                                layoutDependency: $,
                                layoutId: `oVpntsNmw`,
                                style: {
                                  "--extracted-a0htzi": `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: C,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(h, {
                                __fromCanvasComponent: !0,
                                children: i(r, {
                                  children: i(d.p, {
                                    className: `framer-styles-preset-ar7l3c`,
                                    "data-styles-preset": `VpaJFpv2y`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(81, 85, 94)))`,
                                    },
                                    children: `Du contrat à la paie, tout est géré correctement, dans les délais, à chaque fois.`,
                                  }),
                                }),
                                className: `framer-16ar26n`,
                                fonts: [`Inter`],
                                layoutDependency: $,
                                layoutId: `JQSE6yvWu`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(81, 85, 94))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                  opacity: 0.8,
                                },
                                text: w,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          i(d.div, {
                            className: `framer-be0sgy`,
                            "data-framer-name": `Line`,
                            layoutDependency: $,
                            layoutId: `IGy0ImyRz`,
                            style: {
                              backgroundColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(231, 231, 234))`,
                            },
                          }),
                          k !== !1 &&
                            i(d.div, {
                              className: `framer-19902en`,
                              "data-framer-name": `Line`,
                              layoutDependency: $,
                              layoutId: `t6A_cqwnK`,
                              style: {
                                backgroundColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(231, 231, 234))`,
                              },
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
          `.framer-W8NNT.framer-1wavqa0, .framer-W8NNT .framer-1wavqa0 { display: block; }`,
          `.framer-W8NNT.framer-xmt7dt { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 550px; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 358px; }`,
          `.framer-W8NNT .framer-18jko4s { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-W8NNT .framer-11zez2f { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-W8NNT .framer-18sv3eh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: absolute; right: 0px; top: 0px; width: 48px; }`,
          `.framer-W8NNT .framer-16h327z { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); position: relative; width: 22px; }`,
          `.framer-W8NNT .framer-1ljg8a3 { aspect-ratio: 1 / 1; bottom: -28px; flex: none; height: var(--framer-aspect-ratio-supported, 22px); left: -28px; position: absolute; width: 22px; z-index: 1; }`,
          `.framer-W8NNT .framer-1pox4ex { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px 32px 40px 32px; position: relative; width: 100%; }`,
          `.framer-W8NNT .framer-1evilrt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-W8NNT .framer-1hnjzv7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-W8NNT .framer-16ar26n { --framer-text-wrap-override: none; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }`,
          `.framer-W8NNT .framer-be0sgy { flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -32px; top: 0px; z-index: 1; }`,
          `.framer-W8NNT .framer-19902en { bottom: 0px; flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -32px; z-index: 1; }`,
          `.framer-W8NNT.framer-v-1bh9bq3.framer-xmt7dt { width: 358px; }`,
          `.framer-W8NNT.framer-v-1bh9bq3 .framer-19902en { bottom: 0px; left: -40px; right: -32px; }`,
          `.framer-W8NNT.framer-v-15rprmo .framer-be0sgy { right: 0px; }`,
          `.framer-W8NNT.framer-v-15rprmo .framer-19902en { bottom: 0px; right: -40px; }`,
          `.framer-W8NNT.framer-v-3qbiqf.framer-xmt7dt { cursor: unset; height: 480px; }`,
          `.framer-W8NNT.framer-v-3qbiqf .framer-1pox4ex { padding: 32px 26px 40px 26px; }`,
          `.framer-W8NNT.framer-v-xmt7dt.hover .framer-11zez2f, .framer-W8NNT.framer-v-1bh9bq3.hover .framer-11zez2f, .framer-W8NNT.framer-v-15rprmo.hover .framer-11zez2f { height: 103%; left: calc(50.00000000000002% - 103% / 2); top: calc(50.00000000000002% - 103% / 2); width: 103%; }`,
          `.framer-W8NNT.framer-v-xmt7dt.hover .framer-16h327z, .framer-W8NNT.framer-v-1bh9bq3.hover .framer-16h327z, .framer-W8NNT.framer-v-15rprmo.hover .framer-16h327z { position: absolute; right: -28px; top: -28px; z-index: 1; }`,
          `.framer-W8NNT.framer-v-xmt7dt.hover .framer-1ljg8a3, .framer-W8NNT.framer-v-1bh9bq3.hover .framer-1ljg8a3, .framer-W8NNT.framer-v-15rprmo.hover .framer-1ljg8a3 { bottom: unset; left: unset; position: relative; }`,
          ...P,
          ...A,
          `.framer-W8NNT[data-border="true"]::after, .framer-W8NNT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-W8NNT`
      )),
      (Z = X),
      (X.displayName = `Case Card`),
      (X.defaultProps = { height: 550, width: 357.5 }),
      m(X, {
        variant: {
          options: [`mLq0hZ4yH`, `priFFWFqi`, `MASiaUF90`, `KrksRsRs1`],
          optionTitles: [`Item`, `1st Item`, `End Item`, `Mobile`],
          title: `Variant`,
          type: w.Enum,
        },
        xjRH9XQrp: {
          __defaultAssetReference: `data:framer/asset-reference,g386xggMkwAPkIOKExX630SCfs.webp?originalFilename=Couple+with+Smartphone.webp&width=2400&height=1600`,
          title: `BG Image`,
          type: w.ResponsiveImage,
        },
        PKNvLuNpY: {
          defaultValue: `Comptabilité & Reporting`,
          displayTextArea: !1,
          title: `Title`,
          type: w.String,
        },
        onPKNvLuNpYChange: { changes: `PKNvLuNpY`, type: w.ChangeHandler },
        zHWHkKmXe: {
          defaultValue: `Du contrat à la paie, tout est géré correctement, dans les délais, à chaque fois.`,
          displayTextArea: !1,
          title: `Short Desc.`,
          type: w.String,
        },
        onzHWHkKmXeChange: { changes: `zHWHkKmXe`, type: w.ChangeHandler },
        nW7Zq_3dw: { title: `Link`, type: w.Link },
        O51_5a_PX: { defaultValue: !1, title: `Bottom line`, type: w.Boolean },
        onO51_5a_PXChange: { changes: `O51_5a_PX`, type: w.ChangeHandler },
      }),
      C(
        X,
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
          ...R,
          ...g(F),
          ...g(k),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Q as n, Z as t };
//# sourceMappingURL=BwcX4JBiR.BqEWfvJm.mjs.map
