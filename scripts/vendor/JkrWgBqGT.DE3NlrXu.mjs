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
  P as y,
  St as b,
  Y as x,
  ht as S,
  k as C,
  o as w,
  st as T,
  wt as E,
  xt as D,
} from "./framer.A_mnCMV8.mjs";
import { i as O, n as k, r as A, t as j } from "./lpw1HhEJv.CUARUhsz.mjs";
function M(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var N,
  P,
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
      O(),
      (N = E(d.div)),
      (P = { OpiiXvRMk: { hover: !0, pressed: !0 } }),
      (F = [`OpiiXvRMk`, `U_Urdsya_`, `Nep1xR2gW`, `IhmgEXOF3`, `rSoLppRUl`]),
      (I = `framer-JeXE1`),
      (L = {
        IhmgEXOF3: `framer-v-1arhzvn`,
        Nep1xR2gW: `framer-v-5g701d`,
        OpiiXvRMk: `framer-v-1mo92sl`,
        rSoLppRUl: `framer-v-tp7omm`,
        U_Urdsya_: `framer-v-1c1i8y`,
      }),
      (R = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (z = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (B = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (V = (e, t) => `translateX(-50%) ${t}`),
      (H = (e, t) => `translate(-50%, -50%) ${t}`),
      (U = ({ value: e, children: n }) => {
        let r = t(f),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(f.Provider, { value: s, children: n });
      }),
      (W = {
        Default: `OpiiXvRMk`,
        Disabled: `Nep1xR2gW`,
        Error: `rSoLppRUl`,
        Loading: `U_Urdsya_`,
        Success: `IhmgEXOF3`,
      }),
      (G = d.create(r)),
      (K = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: W[r.variant] ?? r.variant ?? `OpiiXvRMk`,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = b(
        a(function (e, t) {
          let a = n(null),
            o = t ?? a,
            c = l(),
            { activeLocale: u, setLocale: f } = S();
          T();
          let { style: m, className: h, layoutId: _, variant: y, ...b } = K(e),
            {
              baseVariant: x,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: E,
              gestureVariant: O,
              isLoading: k,
              setGestureState: A,
              setVariant: W,
              variants: J,
            } = D({
              cycleOrder: F,
              defaultVariant: `OpiiXvRMk`,
              enabledGestures: P,
              ref: o,
              variant: y,
              variantClassNames: L,
            }),
            Y = q(e, J),
            X = v(I, j),
            Z = () => x === `U_Urdsya_`,
            Q = () => x !== `U_Urdsya_`;
          return i(p, {
            id: _ ?? c,
            children: i(G, {
              animate: J,
              initial: !1,
              children: i(U, {
                value: R,
                children: s(d.button, {
                  ...b,
                  ...E,
                  className: v(X, `framer-1mo92sl`, h, C),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: Y,
                  layoutId: `OpiiXvRMk`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    opacity: 1,
                    ...m,
                  },
                  variants: {
                    "OpiiXvRMk-hover": {
                      backgroundColor: `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                      opacity: 1,
                    },
                    "OpiiXvRMk-pressed": {
                      "--border-bottom-width": `2px`,
                      "--border-color": `var(--token-f03c2579-9280-4bab-9aa8-33f99931bc8c, rgba(246, 247, 248, 0.1))`,
                      "--border-left-width": `2px`,
                      "--border-right-width": `2px`,
                      "--border-style": `solid`,
                      "--border-top-width": `2px`,
                      backgroundColor: `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                      opacity: 1,
                    },
                    IhmgEXOF3: { opacity: 1 },
                    Nep1xR2gW: { opacity: 0.5 },
                    rSoLppRUl: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                  },
                  ...M(
                    {
                      "OpiiXvRMk-hover": { "data-framer-name": void 0 },
                      "OpiiXvRMk-pressed": { "data-border": !0, "data-framer-name": void 0 },
                      IhmgEXOF3: { "data-framer-name": `Success` },
                      Nep1xR2gW: { "data-framer-name": `Disabled` },
                      rSoLppRUl: { "data-framer-name": `Error` },
                      U_Urdsya_: { "data-framer-name": `Loading` },
                    },
                    x,
                    O
                  ),
                  children: [
                    Z() &&
                      i(d.div, {
                        className: `framer-s6psxr`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: Y,
                        layoutId: `imW8FeaHb`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: i(N, {
                          __framer__loop: B,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: z,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-1kt4fgu`,
                          "data-framer-name": `Conic`,
                          layoutDependency: Y,
                          layoutId: `dB7vHeF6Q`,
                          style: {
                            background: `conic-gradient(from 0deg at 50% 50%, rgba(246, 247, 248, 0) 7.208614864864882deg, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)) 342deg)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            U_Urdsya_: {
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: i(d.div, {
                            className: `framer-fuy3r0`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: Y,
                            layoutId: `vNIXf4DGN`,
                            style: {
                              backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: V,
                          }),
                        }),
                      }),
                    Q() &&
                      i(g, {
                        __fromCanvasComponent: !0,
                        children: i(r, {
                          children: i(d.p, {
                            className: `framer-styles-preset-xjkrtz`,
                            "data-styles-preset": `lpw1HhEJv`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                            },
                            children: `Envoyer`,
                          }),
                        }),
                        className: `framer-1yt96hm`,
                        fonts: [`Inter`],
                        layoutDependency: Y,
                        layoutId: `ieWxGgaPC`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          "OpiiXvRMk-hover": {
                            "--extracted-r6o4lv": `var(--token-c91157bd-d6dc-4ba9-aed8-ca94ab91d9de, rgb(251, 250, 249))`,
                          },
                          "OpiiXvRMk-pressed": {
                            "--extracted-r6o4lv": `var(--token-c91157bd-d6dc-4ba9-aed8-ca94ab91d9de, rgb(251, 250, 249))`,
                          },
                          rSoLppRUl: { "--extracted-r6o4lv": `rgb(255, 69, 69)` },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...M(
                          {
                            "OpiiXvRMk-hover": {
                              children: i(r, {
                                children: i(d.p, {
                                  className: `framer-styles-preset-xjkrtz`,
                                  "data-styles-preset": `lpw1HhEJv`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c91157bd-d6dc-4ba9-aed8-ca94ab91d9de, rgb(251, 250, 249)))`,
                                  },
                                  children: `Envoyer`,
                                }),
                              }),
                            },
                            "OpiiXvRMk-pressed": {
                              children: i(r, {
                                children: i(d.p, {
                                  className: `framer-styles-preset-xjkrtz`,
                                  "data-styles-preset": `lpw1HhEJv`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c91157bd-d6dc-4ba9-aed8-ca94ab91d9de, rgb(251, 250, 249)))`,
                                  },
                                  children: `Envoyer`,
                                }),
                              }),
                            },
                            IhmgEXOF3: {
                              children: i(r, {
                                children: i(d.p, {
                                  className: `framer-styles-preset-xjkrtz`,
                                  "data-styles-preset": `lpw1HhEJv`,
                                  children: `Message bien reçu.`,
                                }),
                              }),
                            },
                            rSoLppRUl: {
                              children: i(r, {
                                children: i(d.p, {
                                  className: `framer-styles-preset-xjkrtz`,
                                  "data-styles-preset": `lpw1HhEJv`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 69, 69))`,
                                  },
                                  children: `ERREUR D'ENVOI !`,
                                }),
                              }),
                            },
                          },
                          x,
                          O
                        ),
                      }),
                    i(d.div, {
                      className: `framer-72zie3`,
                      "data-framer-name": `icon`,
                      layoutDependency: Y,
                      layoutId: `ZohyOH_6r`,
                      style: {
                        backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                        opacity: 0,
                      },
                      transformTemplate: H,
                      variants: {
                        "OpiiXvRMk-hover": { opacity: 1 },
                        "OpiiXvRMk-pressed": { opacity: 1 },
                      },
                      ...M(
                        {
                          "OpiiXvRMk-hover": { transformTemplate: void 0 },
                          "OpiiXvRMk-pressed": { transformTemplate: void 0 },
                        },
                        x,
                        O
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-JeXE1.framer-2s1n9, .framer-JeXE1 .framer-2s1n9 { display: block; }`,
          `.framer-JeXE1.framer-1mo92sl { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 14px 20px 15px 20px; position: relative; width: 240px; }`,
          `.framer-JeXE1 .framer-s6psxr { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-JeXE1 .framer-1kt4fgu { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-JeXE1 .framer-fuy3r0 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-JeXE1 .framer-1yt96hm { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-JeXE1 .framer-72zie3 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 6px); left: 50%; overflow: visible; position: absolute; top: 50%; width: 6px; z-index: 1; }`,
          `.framer-JeXE1.framer-v-1c1i8y.framer-1mo92sl, .framer-JeXE1.framer-v-5g701d.framer-1mo92sl, .framer-JeXE1.framer-v-1arhzvn.framer-1mo92sl, .framer-JeXE1.framer-v-tp7omm.framer-1mo92sl { cursor: unset; }`,
          `.framer-JeXE1.framer-v-1c1i8y .framer-1kt4fgu { overflow: hidden; }`,
          `.framer-JeXE1.framer-v-1mo92sl.hover .framer-1yt96hm, .framer-JeXE1.framer-v-1mo92sl.pressed .framer-1yt96hm { order: 2; }`,
          `.framer-JeXE1.framer-v-1mo92sl.hover .framer-72zie3 { left: unset; order: 1; position: relative; top: unset; }`,
          `.framer-JeXE1.framer-v-1mo92sl.pressed .framer-72zie3 { left: unset; order: 0; position: relative; top: unset; }`,
          ...k,
          `.framer-JeXE1[data-border="true"]::after, .framer-JeXE1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-JeXE1`
      )),
      (Y = J),
      (J.displayName = `Form Button`),
      (J.defaultProps = { height: 44, width: 240 }),
      h(J, {
        variant: {
          options: [`OpiiXvRMk`, `U_Urdsya_`, `Nep1xR2gW`, `IhmgEXOF3`, `rSoLppRUl`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: w.Enum,
        },
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
          ..._(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Z,
  Q,
  $,
  ee = e(() => {
    (x(),
      y.loadFonts([]),
      (Z = [{ explicitInter: !0, fonts: [] }]),
      (Q = [
        `.framer-1llDl .framer-styles-preset-1hyg102:not(.rich-text-wrapper), .framer-1llDl .framer-styles-preset-1hyg102.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, #51555e); --framer-link-hover-text-decoration: underline; --framer-link-hover-text-decoration-color: rgba(12, 17, 28, 0); --framer-link-hover-text-decoration-offset: 4px; --framer-link-hover-text-decoration-thickness: 1px; --framer-link-text-color: var(--token-26feb046-f3d8-41df-9abc-eaf6a0c62cfd, rgba(81, 85, 94, 0.75)); --framer-link-text-decoration: underline; --framer-link-text-decoration-offset: 3px; --framer-link-text-decoration-thickness: 1px; transition-delay: 0s; transition-duration: 0.4s; transition-property: color,text-decoration-color,text-decoration-thickness,text-underline-offset; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      ($ = `framer-1llDl`));
  });
export { X as a, ee as i, Q as n, Y as o, Z as r, $ as t };
//# sourceMappingURL=JkrWgBqGT.DE3NlrXu.mjs.map
