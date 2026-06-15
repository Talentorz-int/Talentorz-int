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
  U as b,
  Y as x,
  ht as S,
  k as C,
  o as w,
  p as T,
  st as E,
  wt as D,
  xt as O,
} from "./framer.A_mnCMV8.mjs";
import { i as k, n as A, r as j, t as M } from "./hAAA29zio.DV3g1_Gb.mjs";
function N(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var P,
  F,
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
  Y,
  X = e(() => {
    (c(),
      x(),
      m(),
      u(),
      k(),
      (P = D(T)),
      (F = D(d.div)),
      (I = { PmK9hQlar: { hover: !0 } }),
      (L = `framer-KYYwH`),
      (R = { PmK9hQlar: `framer-v-9zhb41` }),
      (z = {
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
      (B = { damping: 60, delay: 0.2, mass: 1, stiffness: 200, type: `spring` }),
      (V = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (U = {
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
      (W = ({ value: e, children: n }) => {
        let r = t(f),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(f.Provider, { value: s, children: n });
      }),
      (G = d.create(r)),
      (K = ({ cover: e, height: t, id: n, logo: r, title: i, width: a, ...o }) => ({
        ...o,
        kZJ2Dwhm9: r ??
          o.kZJ2Dwhm9 ?? {
            pixelHeight: 91,
            pixelWidth: 459,
            src: `../../assets/images/IQ7aGFpBWFMA6JRwGpJ4mA2Fas.svg`,
          },
        mF6WZzvBe: e ?? o.mF6WZzvBe,
        T4Lphm6WY:
          i ??
          o.T4Lphm6WY ??
          `CDI intérimaire : la formule gagnante pour fidéliser vos talents tertiaires`,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = y(
        a(function (e, t) {
          let a = n(null),
            o = t ?? a,
            c = l(),
            { activeLocale: u, setLocale: f } = S(),
            m = E(),
            {
              style: h,
              className: _,
              layoutId: y,
              variant: x,
              mF6WZzvBe: C,
              kZJ2Dwhm9: w,
              T4Lphm6WY: D,
              ...k
            } = K(e),
            {
              baseVariant: A,
              classNames: j,
              clearLoadingGesture: J,
              gestureHandlers: Y,
              gestureVariant: X,
              isLoading: ee,
              setGestureState: te,
              setVariant: ne,
              variants: Z,
            } = O({
              defaultVariant: `PmK9hQlar`,
              enabledGestures: I,
              ref: o,
              variant: x,
              variantClassNames: R,
            }),
            Q = q(e, Z),
            $ = v(L, M);
          return i(p, {
            id: y ?? c,
            children: i(G, {
              animate: Z,
              initial: !1,
              children: i(W, {
                value: V,
                children: s(F, {
                  ...k,
                  ...Y,
                  __framer__animate: { transition: B },
                  __framer__animateOnce: !0,
                  __framer__enter: z,
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: v($, `framer-9zhb41`, _, j),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: Q,
                  layoutId: `PmK9hQlar`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(231, 231, 234))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...h,
                  },
                  ...N({ "PmK9hQlar-hover": { "data-framer-name": void 0 } }, A, X),
                  children: [
                    i(d.div, {
                      className: `framer-1052iz1`,
                      "data-framer-name": `BG Color`,
                      layoutDependency: Q,
                      layoutId: `ZHaXN9DU1`,
                      style: {
                        backgroundColor: `var(--token-ff130ec1-74be-4ca9-be0f-0fd9e9fd1fd4, rgba(12, 17, 28, 0.01))`,
                        opacity: 0,
                      },
                      variants: { "PmK9hQlar-hover": { opacity: 1 } },
                    }),
                    s(d.div, {
                      className: `framer-im7esq`,
                      "data-framer-name": `Container`,
                      layoutDependency: Q,
                      layoutId: `CEB2rZXCF`,
                      children: [
                        i(d.div, {
                          className: `framer-9ymt4i`,
                          "data-framer-name": `Image`,
                          layoutDependency: Q,
                          layoutId: `CCCEkARe8`,
                          children: i(T, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: b(
                                (m?.y || 0) +
                                  (0 +
                                    ((m?.height || 540) - 0 - ((m?.height || 540) - 0) * 1) / 2) +
                                  0 +
                                  ((((m?.height || 540) - 0) * 1 -
                                    0 -
                                    (Math.max(0, (((m?.height || 540) - 0) * 1 - 0 - 131.5) / 1) *
                                      1 +
                                      131.5 +
                                      0)) /
                                    2 +
                                    0 +
                                    0) +
                                  (0 +
                                    (Math.max(0, (((m?.height || 540) - 0) * 1 - 0 - 131.5) / 1) *
                                      1 -
                                      0 -
                                      (Math.max(0, (((m?.height || 540) - 0) * 1 - 0 - 131.5) / 1) *
                                        1 -
                                        0) *
                                        1) /
                                      2)
                              ),
                              pixelHeight: 1309,
                              pixelWidth: 2400,
                              sizes: `max(${m?.width || `100vw`}, 1px)`,
                              ...H(C),
                              positionX: `center`,
                              positionY: `top`,
                            },
                            className: `framer-ylkd8k`,
                            "data-framer-name": `BG Image`,
                            layoutDependency: Q,
                            layoutId: `wnuD_8hWe`,
                            ...N(
                              {
                                "PmK9hQlar-hover": {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: b(
                                      (m?.y || 0) +
                                        (0 +
                                          ((m?.height || 540) - 0 - ((m?.height || 540) - 0) * 1) /
                                            2) +
                                        0 +
                                        ((((m?.height || 540) - 0) * 1 -
                                          0 -
                                          (Math.max(
                                            0,
                                            (((m?.height || 540) - 0) * 1 - 0 - 131.5) / 1
                                          ) *
                                            1 +
                                            131.5 +
                                            0)) /
                                          2 +
                                          0 +
                                          0) +
                                        (0 +
                                          (Math.max(
                                            0,
                                            (((m?.height || 540) - 0) * 1 - 0 - 131.5) / 1
                                          ) *
                                            1 -
                                            0 -
                                            (Math.max(
                                              0,
                                              (((m?.height || 540) - 0) * 1 - 0 - 131.5) / 1
                                            ) *
                                              1 -
                                              0) *
                                              1.03) /
                                            2)
                                    ),
                                    pixelHeight: 1309,
                                    pixelWidth: 2400,
                                    sizes: `calc(max(${m?.width || `100vw`}, 1px) * 1.03)`,
                                    ...H(C),
                                    positionX: `center`,
                                    positionY: `top`,
                                  },
                                },
                              },
                              A,
                              X
                            ),
                          }),
                        }),
                        s(d.div, {
                          className: `framer-hh9prg`,
                          "data-border": !0,
                          "data-framer-name": `Content`,
                          layoutDependency: Q,
                          layoutId: `cxHOWfrV0`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 223, 226))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                          },
                          children: [
                            i(P, {
                              __framer__animate: { transition: B },
                              __framer__animateOnce: !0,
                              __framer__enter: U,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 0.45,
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 96,
                                intrinsicWidth: 376,
                                loading: b(
                                  (m?.y || 0) +
                                    (0 +
                                      ((m?.height || 540) - 0 - ((m?.height || 540) - 0) * 1) / 2) +
                                    0 +
                                    ((((m?.height || 540) - 0) * 1 -
                                      0 -
                                      (Math.max(0, (((m?.height || 540) - 0) * 1 - 0 - 131.5) / 1) *
                                        1 +
                                        131.5 +
                                        0)) /
                                      2 +
                                      Math.max(0, (((m?.height || 540) - 0) * 1 - 0 - 131.5) / 1) *
                                        1 +
                                      0) +
                                    24 +
                                    0
                                ),
                                pixelHeight: 91,
                                pixelWidth: 459,
                                sizes: `121.0549px`,
                                ...H(w),
                              },
                              className: `framer-172ml6o`,
                              "data-framer-name": `Company logo`,
                              fitImageDimension: `width`,
                              layoutDependency: Q,
                              layoutId: `M8hSoM4l8`,
                              style: { opacity: 0.45 },
                            }),
                            i(d.div, {
                              className: `framer-1xh33i4`,
                              "data-framer-name": `Content`,
                              layoutDependency: Q,
                              layoutId: `vvXcmXcPe`,
                              children: i(g, {
                                __fromCanvasComponent: !0,
                                children: i(r, {
                                  children: i(d.h3, {
                                    className: `framer-styles-preset-1i45uki`,
                                    "data-styles-preset": `hAAA29zio`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-a0htzi, var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18)))`,
                                    },
                                    children: `CDI intérimaire : la formule gagnante pour fidéliser vos talents tertiaires`,
                                  }),
                                }),
                                className: `framer-1mvdgft`,
                                fonts: [`Inter`],
                                layoutDependency: Q,
                                layoutId: `unerPyJCv`,
                                style: {
                                  "--extracted-a0htzi": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: D,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            i(d.div, {
                              className: `framer-1g3kquo`,
                              "data-framer-name": `Line`,
                              layoutDependency: Q,
                              layoutId: `oeK3Vx3Rp`,
                              style: {
                                backgroundColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(231, 231, 234))`,
                              },
                            }),
                            i(d.div, {
                              className: `framer-1s2d3eo`,
                              "data-framer-name": `Line`,
                              layoutDependency: Q,
                              layoutId: `mQdguxEF6`,
                              style: {
                                backgroundColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(231, 231, 234))`,
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    i(d.div, {
                      className: `framer-1dq5zyg`,
                      "data-framer-name": `Line`,
                      layoutDependency: Q,
                      layoutId: `GQ25_f2MK`,
                      style: {
                        backgroundColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(231, 231, 234))`,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-KYYwH.framer-tzy85b, .framer-KYYwH .framer-tzy85b { display: block; }`,
          `.framer-KYYwH.framer-9zhb41 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 540px; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 352px; }`,
          `.framer-KYYwH .framer-1052iz1 { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; }`,
          `.framer-KYYwH .framer-im7esq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-KYYwH .framer-9ymt4i { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-KYYwH .framer-ylkd8k { flex: none; height: 100%; overflow: visible; position: relative; width: 100%; }`,
          `.framer-KYYwH .framer-hh9prg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 24px 40px 24px; position: relative; width: 100%; }`,
          `.framer-KYYwH .framer-172ml6o { flex: none; height: 24px; overflow: visible; position: relative; width: auto; }`,
          `.framer-KYYwH .framer-1xh33i4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-KYYwH .framer-1mvdgft { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-KYYwH .framer-1g3kquo, .framer-KYYwH .framer-1dq5zyg { flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -32px; top: 0px; z-index: 1; }`,
          `.framer-KYYwH .framer-1s2d3eo { bottom: 0px; flex: none; height: 1px; left: -32px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -32px; z-index: 1; }`,
          `.framer-KYYwH.framer-v-9zhb41.hover .framer-ylkd8k { height: 103%; width: 103%; }`,
          ...A,
          `.framer-KYYwH[data-border="true"]::after, .framer-KYYwH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-KYYwH`
      )),
      (Y = J),
      (J.displayName = `Case Study Card`),
      (J.defaultProps = { height: 540, width: 352 }),
      h(J, {
        mF6WZzvBe: { title: `Cover`, type: w.ResponsiveImage },
        kZJ2Dwhm9: {
          __defaultAssetReference: `data:framer/asset-reference,IQ7aGFpBWFMA6JRwGpJ4mA2Fas.svg?originalFilename=Logo123.svg&width=459&height=91`,
          title: `Logo`,
          type: w.ResponsiveImage,
        },
        T4Lphm6WY: {
          defaultValue: `CDI intérimaire : la formule gagnante pour fidéliser vos talents tertiaires`,
          displayTextArea: !1,
          title: `Title`,
          type: w.String,
        },
        onT4Lphm6WYChange: { changes: `T4Lphm6WY`, type: w.ChangeHandler },
      }),
      C(
        J,
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
          ..._(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Y as n, X as t };
//# sourceMappingURL=stN8ugXYC.Cls6vLM5.mjs.map
