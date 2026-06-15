import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import {
  A as t,
  F as n,
  L as r,
  O as i,
  P as a,
  c as o,
  f as s,
  g as c,
  j as l,
  l as u,
  o as d,
  u as f,
  v as ee,
  w as p,
  z as m,
} from "./react.DXuyTrsy.mjs";
import { C as h, a as g, r as te, t as _ } from "./motion.C4Ab7j_2.mjs";
import {
  A as v,
  C as y,
  E as b,
  F as x,
  H as S,
  N as C,
  O as ne,
  St as w,
  U as T,
  V as re,
  Y as E,
  _ as D,
  ht as ie,
  i as O,
  k,
  o as A,
  p as ae,
  r as oe,
  st as se,
  t as ce,
  xt as le,
} from "./framer.A_mnCMV8.mjs";
import { i as ue, n as j, r as de, t as fe } from "./lpw1HhEJv.CUARUhsz.mjs";
import { n as pe, t as me } from "./m4ltnAOmS.ChSqi6AS.mjs";
import { i as M, n as N, r as he, t as ge } from "./CiTq1jwtl.CumxN-Gs.mjs";
import { a as _e, i as P, o as ve, r as ye } from "./shared-lib.3vyoKFC0.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./hAAA29zio.DV3g1_Gb.mjs";
import { i as we, n as Te, r as Ee, t as De } from "./MCw3mYFZA.C4S1wX7m.mjs";
function Oe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  F,
  I,
  Re = e(() => {
    (d(),
      E(),
      _(),
      p(),
      ue(),
      (ke = [`bWsjbOdn6`, `TriB6BAsj`]),
      (Ae = `framer-m71Sj`),
      (je = { bWsjbOdn6: `framer-v-ln6w3v`, TriB6BAsj: `framer-v-1lqf7op` }),
      (Me = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ne = ({ value: e, children: n }) => {
        let r = t(g),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(g.Provider, { value: a, children: n });
      }),
      (Pe = { Dark: `bWsjbOdn6`, Light: `TriB6BAsj` }),
      (Fe = h.create(a)),
      (Ie = ({ circle: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        DB1_3Zlmr: e ?? a.DB1_3Zlmr ?? !0,
        u5bsuWoog: r ?? a.u5bsuWoog ?? `Tags`,
        variant: Pe[a.variant] ?? a.variant ?? `bWsjbOdn6`,
      })),
      (Le = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (F = w(
        c(function (e, t) {
          let n = i(null),
            r = t ?? n,
            s = ee(),
            { activeLocale: c, setLocale: l } = ie();
          se();
          let {
              style: d,
              className: f,
              layoutId: p,
              variant: m,
              u5bsuWoog: g,
              DB1_3Zlmr: _,
              ...v
            } = Ie(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: ne,
              gestureVariant: w,
              isLoading: T,
              setGestureState: re,
              setVariant: E,
              variants: D,
            } = le({
              cycleOrder: ke,
              defaultVariant: `bWsjbOdn6`,
              ref: r,
              variant: m,
              variantClassNames: je,
            }),
            O = Le(e, D),
            k = C(Ae, fe);
          return o(te, {
            id: p ?? s,
            children: o(Fe, {
              animate: D,
              initial: !1,
              children: o(Ne, {
                value: Me,
                children: u(h.div, {
                  ...v,
                  ...ne,
                  className: C(k, `framer-ln6w3v`, f, x),
                  "data-framer-name": `Dark`,
                  layoutDependency: O,
                  layoutId: `bWsjbOdn6`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-dbcedd74-5179-43c9-87dd-968e28f20616, rgba(7, 87, 224, 0.05))`,
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 2,
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                    ...d,
                  },
                  variants: {
                    TriB6BAsj: {
                      backgroundColor: `var(--token-f03c2579-9280-4bab-9aa8-33f99931bc8c, rgba(246, 247, 248, 0.1))`,
                    },
                  },
                  ...Oe({ TriB6BAsj: { "data-framer-name": `Light` } }, y, w),
                  children: [
                    _ !== !1 &&
                      o(h.div, {
                        className: `framer-pnwrlp`,
                        layoutDependency: O,
                        layoutId: `OBQxM2TDD`,
                        style: {
                          backgroundColor: `rgb(0, 32, 48)`,
                          borderBottomLeftRadius: 1,
                          borderBottomRightRadius: 1,
                          borderTopLeftRadius: 1,
                          borderTopRightRadius: 1,
                        },
                      }),
                    o(b, {
                      __fromCanvasComponent: !0,
                      children: o(a, {
                        children: o(h.p, {
                          className: `framer-styles-preset-xjkrtz`,
                          "data-styles-preset": `lpw1HhEJv`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18)))`,
                          },
                          children: `Tags`,
                        }),
                      }),
                      className: `framer-iviang`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `jLgkxrZuv`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: g,
                      variants: {
                        TriB6BAsj: {
                          "--extracted-r6o4lv": `var(--token-90b3ff3d-fb76-4c24-a866-e3560b3367de, rgba(246, 247, 248, 0.7))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Oe(
                        {
                          TriB6BAsj: {
                            children: o(a, {
                              children: o(h.p, {
                                className: `framer-styles-preset-xjkrtz`,
                                "data-styles-preset": `lpw1HhEJv`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-90b3ff3d-fb76-4c24-a866-e3560b3367de, rgba(246, 247, 248, 0.7)))`,
                                },
                                children: `Tags`,
                              }),
                            }),
                          },
                        },
                        y,
                        w
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
          `.framer-m71Sj.framer-99a3ps, .framer-m71Sj .framer-99a3ps { display: block; }`,
          `.framer-m71Sj.framer-ln6w3v { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 6px 8px 6px 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-m71Sj .framer-pnwrlp { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); overflow: visible; position: relative; width: 4px; }`,
          `.framer-m71Sj .framer-iviang { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...j,
        ],
        `framer-m71Sj`
      )),
      (I = F),
      (F.displayName = `Chip`),
      (F.defaultProps = { height: 27, width: 61 }),
      v(F, {
        variant: {
          options: [`bWsjbOdn6`, `TriB6BAsj`],
          optionTitles: [`Dark`, `Light`],
          title: `Variant`,
          type: A.Enum,
        },
        u5bsuWoog: { defaultValue: `Tags`, displayTextArea: !1, title: `Title`, type: A.String },
        onu5bsuWoogChange: { changes: `u5bsuWoog`, type: A.ChangeHandler },
        DB1_3Zlmr: { defaultValue: !0, title: `Circle`, type: A.Boolean },
        onDB1_3ZlmrChange: { changes: `DB1_3Zlmr`, type: A.ChangeHandler },
      }),
      k(
        F,
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
          ...S(de),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  R,
  Ke,
  z,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  B,
  $e,
  et = e(() => {
    (d(),
      E(),
      _(),
      p(),
      M(),
      be(),
      we(),
      ve(),
      Re(),
      me(),
      (ze = re(I)),
      (Be = re(pe)),
      (Ve = { wJ29C7LV5: { hover: !0 } }),
      (He = [`wJ29C7LV5`, `RYH0v1dWC`, `U9tSb4jsS`, `MZfigT2r1`, `GR9znIAHl`]),
      (Ue = `framer-bdK4w`),
      (We = {
        GR9znIAHl: `framer-v-1tc6jz1`,
        MZfigT2r1: `framer-v-1x8nou2`,
        RYH0v1dWC: `framer-v-1axfh5`,
        U9tSb4jsS: `framer-v-187umd8`,
        wJ29C7LV5: `framer-v-o5wmm6`,
      }),
      (Ge = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (R = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ke = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (qe = ({ value: e, children: n }) => {
        let r = t(g),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(g.Provider, { value: a, children: n });
      }),
      (Je = {
        "Featured Desktop": `RYH0v1dWC`,
        "Featured Phone": `MZfigT2r1`,
        "Featured Tablet": `U9tSb4jsS`,
        "Normal Phone": `GR9znIAHl`,
        Normal: `wJ29C7LV5`,
      }),
      (Ye = h.create(a)),
      (Xe = (e, t) => {
        let [r, i] = n(e),
          [a, o] = n(e);
        return t ? [e, t] : (e !== a && (i(e), o(e)), [r, i]);
      }),
      (Ze = ({
        category: e,
        cover: t,
        date: n,
        excerpt: r,
        height: i,
        id: a,
        link: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        MhUTJlyuS: t ??
          l.MhUTJlyuS ?? {
            alt: ``,
            pixelHeight: 1309,
            pixelWidth: 2400,
            src: `https://framerusercontent.com/images/Fu7eq9HoeoeFc8JHeixBNzEWAg.png?width=2400&height=1309`,
            srcSet: `https://framerusercontent.com/images/Fu7eq9HoeoeFc8JHeixBNzEWAg.png?scale-down-to=512&width=2400&height=1309 512w,https://framerusercontent.com/images/Fu7eq9HoeoeFc8JHeixBNzEWAg.png?scale-down-to=1024&width=2400&height=1309 1024w,https://framerusercontent.com/images/Fu7eq9HoeoeFc8JHeixBNzEWAg.png?scale-down-to=2048&width=2400&height=1309 2048w,https://framerusercontent.com/images/Fu7eq9HoeoeFc8JHeixBNzEWAg.png?width=2400&height=1309 2400w`,
          },
        o4pPpPfMO: o ?? l.o4pPpPfMO,
        qMLA71X5f: n ?? l.qMLA71X5f ?? `7 octobre 2025`,
        variant: Je[l.variant] ?? l.variant ?? `wJ29C7LV5`,
        y8HeeX0Fv:
          r ??
          l.y8HeeX0Fv ??
          `CDI intérimaire : la formule gagnante pour fidéliser vos talents tertiaires`,
        Zd63hXpd5: s ?? l.Zd63hXpd5 ?? `Comment recruter rapidement un profil tertiaire en intérim`,
        zI9isjOZH: e ?? l.zI9isjOZH ?? `insights`,
      })),
      (Qe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (B = w(
        c(function (e, t) {
          let n = i(null),
            r = t ?? n,
            s = ee(),
            { activeLocale: c, setLocale: l } = ie(),
            d = se(),
            {
              style: f,
              className: p,
              layoutId: m,
              variant: g,
              MhUTJlyuS: _,
              zI9isjOZH: v,
              onzI9isjOZHChange: y,
              qMLA71X5f: x,
              Zd63hXpd5: S,
              y8HeeX0Fv: w,
              o4pPpPfMO: re,
              ...E
            } = Ze(e),
            [D, k] = Xe(v, y),
            {
              baseVariant: A,
              classNames: oe,
              clearLoadingGesture: ce,
              gestureHandlers: ue,
              gestureVariant: j,
              isLoading: de,
              setGestureState: fe,
              setVariant: me,
              variants: M,
            } = le({
              cycleOrder: He,
              defaultVariant: `wJ29C7LV5`,
              enabledGestures: Ve,
              ref: r,
              variant: g,
              variantClassNames: We,
            }),
            N = Qe(e, M),
            he = C(Ue, ge, ye, Ce, De),
            _e = Ke(D),
            P = () => !![`RYH0v1dWC`, `U9tSb4jsS`].includes(A),
            ve = () => ![`RYH0v1dWC`, `U9tSb4jsS`, `MZfigT2r1`].includes(A);
          return o(te, {
            id: m ?? s,
            children: o(Ye, {
              animate: M,
              initial: !1,
              children: o(qe, {
                value: Ge,
                children: u(h.div, {
                  ...E,
                  ...ue,
                  className: C(he, `framer-o5wmm6`, p, oe),
                  "data-border": !0,
                  "data-framer-name": `Normal`,
                  layoutDependency: N,
                  layoutId: `wJ29C7LV5`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(231, 231, 234))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...f,
                  },
                  variants: {
                    GR9znIAHl: { "--border-left-width": `0px`, "--border-right-width": `0px` },
                    RYH0v1dWC: { "--border-left-width": `0px`, "--border-right-width": `0px` },
                  },
                  ...L(
                    {
                      "wJ29C7LV5-hover": { "data-framer-name": void 0 },
                      GR9znIAHl: { "data-framer-name": `Normal Phone` },
                      MZfigT2r1: { "data-framer-name": `Featured Phone` },
                      RYH0v1dWC: { "data-framer-name": `Featured Desktop` },
                      U9tSb4jsS: { "data-framer-name": `Featured Tablet` },
                    },
                    A,
                    j
                  ),
                  children: [
                    o(h.div, {
                      className: `framer-1enq1ho`,
                      "data-framer-name": `BG Color`,
                      layoutDependency: N,
                      layoutId: `Wp4e9jNC3`,
                      style: {
                        backgroundColor: `var(--token-ff130ec1-74be-4ca9-be0f-0fd9e9fd1fd4, rgba(12, 17, 28, 0.01))`,
                        opacity: 0,
                      },
                      variants: {
                        "wJ29C7LV5-hover": { opacity: 1 },
                        MZfigT2r1: { backgroundColor: `rgba(0, 0, 0, 0)` },
                        RYH0v1dWC: { backgroundColor: `rgba(0, 0, 0, 0)` },
                      },
                    }),
                    u(h.div, {
                      className: `framer-uufbuq`,
                      "data-framer-name": `Container`,
                      layoutDependency: N,
                      layoutId: `aE9y1UeLI`,
                      children: [
                        o(h.div, {
                          className: `framer-mhgnhn`,
                          "data-framer-name": `Image`,
                          layoutDependency: N,
                          layoutId: `LlCuiBSHC`,
                          children: o(ae, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: T(
                                (d?.y || 0) +
                                  (0 +
                                    ((d?.height || 500) - 0 - ((d?.height || 500) - 0) * 1) / 2) +
                                  0 +
                                  ((((d?.height || 500) - 0) * 1 -
                                    0 -
                                    (308 +
                                      Math.max(0, (((d?.height || 500) - 0) * 1 - 0 - 308) / 1) *
                                        1 +
                                      0)) /
                                    2 +
                                    0 +
                                    0) +
                                  0
                              ),
                              pixelHeight: 1309,
                              pixelWidth: 2400,
                              sizes: `max(${d?.width || `100vw`}, 1px)`,
                              ...R(_),
                              positionX: `center`,
                              positionY: `top`,
                            },
                            className: `framer-w1fvpf`,
                            "data-framer-name": `BG Image`,
                            layoutDependency: N,
                            layoutId: `kvESQGzP_`,
                            ...L(
                              {
                                "wJ29C7LV5-hover": {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: T(
                                      (d?.y || 0) +
                                        (0 +
                                          ((d?.height || 500) - 0 - ((d?.height || 500) - 0) * 1) /
                                            2) +
                                        0 +
                                        ((((d?.height || 500) - 0) * 1 -
                                          0 -
                                          (308 +
                                            Math.max(
                                              0,
                                              (((d?.height || 500) - 0) * 1 - 0 - 308) / 1
                                            ) *
                                              1 +
                                            0)) /
                                          2 +
                                          0 +
                                          0) +
                                        -4.62
                                    ),
                                    pixelHeight: 1309,
                                    pixelWidth: 2400,
                                    sizes: `calc(max(${d?.width || `100vw`}, 1px) * 1.03)`,
                                    ...R(_),
                                    positionX: `center`,
                                    positionY: `top`,
                                  },
                                },
                                MZfigT2r1: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: T(
                                      (d?.y || 0) +
                                        (0 + ((d?.height || 489.5) - 0 - 434.5) / 2) +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 1309,
                                    pixelWidth: 2400,
                                    sizes: `max(${d?.width || `100vw`}, 1px)`,
                                    ...R(_),
                                    positionX: `center`,
                                    positionY: `top`,
                                  },
                                },
                                RYH0v1dWC: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: T(
                                      (d?.y || 0) +
                                        (0 +
                                          ((d?.height || 500) - 0 - ((d?.height || 500) - 0) * 1) /
                                            2) +
                                        (0 + (((d?.height || 500) - 0) * 1 - 0 - 500) / 2) +
                                        0
                                    ),
                                    pixelHeight: 1309,
                                    pixelWidth: 2400,
                                    sizes: `max(max(${d?.width || `100vw`}, 1px) / 2, 1px)`,
                                    ...R(_),
                                    positionX: `center`,
                                    positionY: `top`,
                                  },
                                },
                                U9tSb4jsS: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: T(
                                      (d?.y || 0) +
                                        (0 +
                                          ((d?.height || 400) - 0 - ((d?.height || 400) - 0) * 1) /
                                            2) +
                                        (0 + (((d?.height || 400) - 0) * 1 - 0 - 400) / 2) +
                                        0
                                    ),
                                    pixelHeight: 1309,
                                    pixelWidth: 2400,
                                    sizes: `max(max(${d?.width || `100vw`}, 1px) / 2, 1px)`,
                                    ...R(_),
                                    positionX: `center`,
                                    positionY: `top`,
                                  },
                                },
                              },
                              A,
                              j
                            ),
                          }),
                        }),
                        u(h.div, {
                          className: `framer-1f90bqv`,
                          "data-border": !0,
                          "data-framer-name": `Content`,
                          layoutDependency: N,
                          layoutId: `azNL147fY`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 223, 226))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                          },
                          variants: {
                            GR9znIAHl: { "--border-bottom-width": `1px` },
                            MZfigT2r1: { "--border-top-width": `0px` },
                            RYH0v1dWC: { "--border-top-width": `0px` },
                            U9tSb4jsS: { "--border-top-width": `0px` },
                          },
                          children: [
                            _e !== !1 &&
                              u(h.div, {
                                className: `framer-gc4r7l`,
                                "data-framer-name": `Category Date`,
                                layoutDependency: N,
                                layoutId: `wQq3f7uCa`,
                                children: [
                                  o(O, {
                                    height: 27,
                                    y:
                                      (d?.y || 0) +
                                      (0 +
                                        ((d?.height || 500) - 0 - ((d?.height || 500) - 0) * 1) /
                                          2) +
                                      0 +
                                      ((((d?.height || 500) - 0) * 1 -
                                        0 -
                                        (308 +
                                          Math.max(
                                            0,
                                            (((d?.height || 500) - 0) * 1 - 0 - 308) / 1
                                          ) *
                                            1 +
                                          0)) /
                                        2 +
                                        308 +
                                        0) +
                                      32 +
                                      0 +
                                      0,
                                    ...L(
                                      {
                                        GR9znIAHl: {
                                          y:
                                            (d?.y || 0) +
                                            (0 +
                                              ((d?.height || 500) -
                                                0 -
                                                ((d?.height || 500) - 0) * 1) /
                                                2) +
                                            0 +
                                            ((((d?.height || 500) - 0) * 1 -
                                              0 -
                                              (308 +
                                                Math.max(
                                                  0,
                                                  (((d?.height || 500) - 0) * 1 - 0 - 308) / 1
                                                ) *
                                                  1 +
                                                0)) /
                                              2 +
                                              308 +
                                              0) +
                                            26 +
                                            0 +
                                            0,
                                        },
                                        MZfigT2r1: {
                                          y:
                                            (d?.y || 0) +
                                            (0 + ((d?.height || 489.5) - 0 - 434.5) / 2) +
                                            0 +
                                            308 +
                                            24 +
                                            25.5 +
                                            0,
                                        },
                                        RYH0v1dWC: {
                                          y:
                                            (d?.y || 0) +
                                            (0 +
                                              ((d?.height || 500) -
                                                0 -
                                                ((d?.height || 500) - 0) * 1) /
                                                2) +
                                            (0 +
                                              (((d?.height || 500) - 0) * 1 -
                                                0 -
                                                (((d?.height || 500) - 0) * 1 - 0) * 1) /
                                                2) +
                                            40 +
                                            (((((d?.height || 500) - 0) * 1 - 0) * 1 - 80 - 231.9) /
                                              2 +
                                              0 +
                                              0) +
                                            0,
                                        },
                                        U9tSb4jsS: {
                                          y:
                                            (d?.y || 0) +
                                            (0 +
                                              ((d?.height || 400) -
                                                0 -
                                                ((d?.height || 400) - 0) * 1) /
                                                2) +
                                            (0 + (((d?.height || 400) - 0) * 1 - 0 - 368.5) / 2) +
                                            40 +
                                            29.5 +
                                            0,
                                        },
                                      },
                                      A,
                                      j
                                    ),
                                    children: o(ne, {
                                      className: `framer-1mpjrjs-container`,
                                      layoutDependency: N,
                                      layoutId: `a6HfyJHl0-container`,
                                      nodeId: `a6HfyJHl0`,
                                      rendersWithMotion: !0,
                                      scopeId: `PpPjVRa06`,
                                      children: o(I, {
                                        DB1_3Zlmr: !0,
                                        height: `100%`,
                                        id: `a6HfyJHl0`,
                                        layoutId: `a6HfyJHl0`,
                                        onu5bsuWoogChange: k,
                                        u5bsuWoog: D,
                                        variant: z(`bWsjbOdn6`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(a, {
                                      children: o(h.p, {
                                        className: `framer-styles-preset-x65a7p`,
                                        "data-styles-preset": `CiTq1jwtl`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `7 octobre 2025`,
                                      }),
                                    }),
                                    className: `framer-f67lfh`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `wuzKkbrkC`,
                                    style: {
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                      opacity: 0.7,
                                    },
                                    text: x,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            u(h.div, {
                              className: `framer-1kduicd`,
                              "data-framer-name": `Content`,
                              layoutDependency: N,
                              layoutId: `R3KSGFUAf`,
                              children: [
                                P() &&
                                  o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(a, {
                                      children: o(h.p, {
                                        className: `framer-styles-preset-ar7l3c`,
                                        "data-styles-preset": `VpaJFpv2y`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                        },
                                        children: `CDI intérimaire : la formule gagnante pour fidéliser vos talents tertiaires`,
                                      }),
                                    }),
                                    className: `framer-1nv4kjq`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `FBqK_XlZy`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                      opacity: 0.7,
                                    },
                                    text: w,
                                    variants: {
                                      U9tSb4jsS: {
                                        "--extracted-r6o4lv": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                                      },
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...L(
                                      {
                                        RYH0v1dWC: {
                                          children: o(a, {
                                            children: o(h.p, {
                                              className: `framer-styles-preset-ar7l3c`,
                                              "data-styles-preset": `VpaJFpv2y`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `CDI intérimaire : la formule gagnante pour fidéliser vos talents tertiaires`,
                                            }),
                                          }),
                                        },
                                        U9tSb4jsS: {
                                          children: o(a, {
                                            children: o(h.p, {
                                              className: `framer-styles-preset-ar7l3c`,
                                              "data-styles-preset": `VpaJFpv2y`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18)))`,
                                              },
                                              children: `CDI intérimaire : la formule gagnante pour fidéliser vos talents tertiaires`,
                                            }),
                                          }),
                                        },
                                      },
                                      A,
                                      j
                                    ),
                                  }),
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(a, {
                                    children: o(h.h3, {
                                      className: `framer-styles-preset-1i45uki`,
                                      "data-styles-preset": `hAAA29zio`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18)))`,
                                      },
                                      children: `Comment recruter rapidement un profil tertiaire en intérim`,
                                    }),
                                  }),
                                  className: `framer-m8btyb`,
                                  fonts: [`Inter`],
                                  layoutDependency: N,
                                  layoutId: `PVvrKn4A1`,
                                  style: {
                                    "--extracted-a0htzi": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: S,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...L(
                                    {
                                      RYH0v1dWC: {
                                        children: o(a, {
                                          children: o(h.h5, {
                                            className: `framer-styles-preset-2o477m`,
                                            "data-styles-preset": `MCw3mYFZA`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `left` },
                                            children: `Comment recruter rapidement un profil tertiaire en intérim`,
                                          }),
                                        }),
                                      },
                                    },
                                    A,
                                    j
                                  ),
                                }),
                              ],
                            }),
                            P() &&
                              o(O, {
                                ...L(
                                  {
                                    RYH0v1dWC: {
                                      height: 46,
                                      y:
                                        (d?.y || 0) +
                                        (0 +
                                          ((d?.height || 500) - 0 - ((d?.height || 500) - 0) * 1) /
                                            2) +
                                        (0 +
                                          (((d?.height || 500) - 0) * 1 -
                                            0 -
                                            (((d?.height || 500) - 0) * 1 - 0) * 1) /
                                            2) +
                                        40 +
                                        (((((d?.height || 500) - 0) * 1 - 0) * 1 - 80 - 231.9) / 2 +
                                          153.9 +
                                          32),
                                    },
                                    U9tSb4jsS: {
                                      height: 46,
                                      y:
                                        (d?.y || 0) +
                                        (0 +
                                          ((d?.height || 400) - 0 - ((d?.height || 400) - 0) * 1) /
                                            2) +
                                        (0 + (((d?.height || 400) - 0) * 1 - 0 - 368.5) / 2) +
                                        40 +
                                        213,
                                    },
                                  },
                                  A,
                                  j
                                ),
                                children: o(ne, {
                                  className: `framer-1q2dqwx-container`,
                                  layoutDependency: N,
                                  layoutId: `mPSkBAQ8D-container`,
                                  nodeId: `mPSkBAQ8D`,
                                  rendersWithMotion: !0,
                                  scopeId: `PpPjVRa06`,
                                  children: o(pe, {
                                    CKN5OFggn: !1,
                                    D1jCD7MYH: `Read More`,
                                    height: `100%`,
                                    id: `mPSkBAQ8D`,
                                    layoutId: `mPSkBAQ8D`,
                                    variant: z(`dnKmjbVLh`),
                                    width: `100%`,
                                    ...L(
                                      {
                                        RYH0v1dWC: { UpJIkfs85: re, variant: z(`V7C2a9ucP`) },
                                        U9tSb4jsS: { variant: z(`V7C2a9ucP`) },
                                      },
                                      A,
                                      j
                                    ),
                                  }),
                                }),
                              }),
                            ve() &&
                              o(h.div, {
                                className: `framer-1fh923z`,
                                "data-framer-name": `Line`,
                                layoutDependency: N,
                                layoutId: `zDvf9A6BZ`,
                                style: {
                                  backgroundColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(231, 231, 234))`,
                                },
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-bdK4w.framer-15dqw08, .framer-bdK4w .framer-15dqw08 { display: block; }`,
          `.framer-bdK4w.framer-o5wmm6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 500px; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 352px; }`,
          `.framer-bdK4w .framer-1enq1ho { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; }`,
          `.framer-bdK4w .framer-uufbuq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-bdK4w .framer-mhgnhn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 308px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-bdK4w .framer-w1fvpf { flex: none; height: 100%; overflow: visible; position: relative; width: 100%; }`,
          `.framer-bdK4w .framer-1f90bqv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 1px; justify-content: flex-start; overflow: visible; padding: 32px 32px 40px 32px; position: relative; width: 100%; }`,
          `.framer-bdK4w .framer-gc4r7l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-bdK4w .framer-1mpjrjs-container, .framer-bdK4w .framer-1q2dqwx-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-bdK4w .framer-f67lfh { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-bdK4w .framer-1kduicd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-bdK4w .framer-1nv4kjq, .framer-bdK4w .framer-m8btyb { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-bdK4w .framer-1fh923z { flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -32px; top: 0px; z-index: 1; }`,
          `.framer-bdK4w.framer-v-1axfh5.framer-o5wmm6 { cursor: unset; width: 1120px; }`,
          `.framer-bdK4w.framer-v-1axfh5 .framer-uufbuq, .framer-bdK4w.framer-v-187umd8 .framer-uufbuq { flex-direction: row; }`,
          `.framer-bdK4w.framer-v-1axfh5 .framer-mhgnhn { flex: 1 0 0px; height: 500px; width: 1px; }`,
          `.framer-bdK4w.framer-v-1axfh5 .framer-1f90bqv { gap: 32px; height: 100%; justify-content: center; max-width: 50%; padding: 40px 32px 40px 60px; width: 1px; }`,
          `.framer-bdK4w.framer-v-1axfh5 .framer-gc4r7l, .framer-bdK4w.framer-v-187umd8 .framer-gc4r7l, .framer-bdK4w.framer-v-187umd8 .framer-m8btyb, .framer-bdK4w.framer-v-1x8nou2 .framer-gc4r7l, .framer-bdK4w.framer-v-1x8nou2 .framer-m8btyb { order: 0; }`,
          `.framer-bdK4w.framer-v-1axfh5 .framer-1kduicd, .framer-bdK4w.framer-v-187umd8 .framer-1kduicd { align-content: flex-start; align-items: flex-start; gap: 16px; justify-content: flex-start; max-width: 90%; order: 2; }`,
          `.framer-bdK4w.framer-v-1axfh5 .framer-1nv4kjq, .framer-bdK4w.framer-v-187umd8 .framer-1nv4kjq { order: 1; }`,
          `.framer-bdK4w.framer-v-1axfh5 .framer-m8btyb { --framer-text-wrap-override: balance; order: 0; }`,
          `.framer-bdK4w.framer-v-1axfh5 .framer-1q2dqwx-container, .framer-bdK4w.framer-v-187umd8 .framer-1q2dqwx-container { order: 3; }`,
          `.framer-bdK4w.framer-v-187umd8.framer-o5wmm6 { cursor: unset; height: 400px; width: 810px; }`,
          `.framer-bdK4w.framer-v-187umd8 .framer-mhgnhn { flex: 1 0 0px; height: 400px; width: 1px; }`,
          `.framer-bdK4w.framer-v-187umd8 .framer-1f90bqv { gap: 32px; height: min-content; justify-content: center; max-width: 50%; padding: 40px; width: 1px; }`,
          `.framer-bdK4w.framer-v-1x8nou2.framer-o5wmm6 { cursor: unset; height: min-content; width: 390px; }`,
          `.framer-bdK4w.framer-v-1x8nou2 .framer-uufbuq { height: min-content; }`,
          `.framer-bdK4w.framer-v-1x8nou2 .framer-1f90bqv { flex: none; gap: 24px; height: min-content; justify-content: center; padding: 24px; }`,
          `.framer-bdK4w.framer-v-1x8nou2 .framer-1kduicd { align-content: flex-start; align-items: flex-start; gap: 16px; justify-content: flex-start; max-width: 90%; order: 3; }`,
          `.framer-bdK4w.framer-v-1tc6jz1.framer-o5wmm6 { cursor: unset; }`,
          `.framer-bdK4w.framer-v-1tc6jz1 .framer-1f90bqv { padding: 26px 26px 32px 26px; }`,
          `.framer-bdK4w.framer-v-o5wmm6.hover .framer-w1fvpf { height: 103%; width: 103%; }`,
          ...N,
          ...P,
          ...xe,
          ...Te,
          `.framer-bdK4w[data-border="true"]::after, .framer-bdK4w [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-bdK4w`
      )),
      ($e = B),
      (B.displayName = `Blog Card`),
      (B.defaultProps = { height: 500, width: 352 }),
      v(B, {
        variant: {
          options: [`wJ29C7LV5`, `RYH0v1dWC`, `U9tSb4jsS`, `MZfigT2r1`, `GR9znIAHl`],
          optionTitles: [
            `Normal`,
            `Featured Desktop`,
            `Featured Tablet`,
            `Featured Phone`,
            `Normal Phone`,
          ],
          title: `Variant`,
          type: A.Enum,
        },
        MhUTJlyuS: {
          __defaultAssetReference: `data:framer/asset-reference,Fu7eq9HoeoeFc8JHeixBNzEWAg.png?originalFilename=Modern+Office+Hallway+from+Sanna+Granqvist.png&width=2400&height=1309`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,Fu7eq9HoeoeFc8JHeixBNzEWAg.png?originalFilename=Modern+Office+Hallway+from+Sanna+Granqvist.png&width=2400&height=1309`,
          },
          title: `Cover`,
          type: A.ResponsiveImage,
        },
        zI9isjOZH: {
          defaultValue: `insights`,
          displayTextArea: !1,
          title: `Category`,
          type: A.String,
        },
        onzI9isjOZHChange: { changes: `zI9isjOZH`, type: A.ChangeHandler },
        qMLA71X5f: {
          defaultValue: `7 octobre 2025`,
          displayTextArea: !1,
          title: `Date`,
          type: A.String,
        },
        onqMLA71X5fChange: { changes: `qMLA71X5f`, type: A.ChangeHandler },
        Zd63hXpd5: {
          defaultValue: `Comment recruter rapidement un profil tertiaire en intérim`,
          displayTextArea: !1,
          title: `Title`,
          type: A.String,
        },
        onZd63hXpd5Change: { changes: `Zd63hXpd5`, type: A.ChangeHandler },
        y8HeeX0Fv: {
          defaultValue: `CDI intérimaire : la formule gagnante pour fidéliser vos talents tertiaires`,
          displayTextArea: !1,
          title: `Excerpt`,
          type: A.String,
        },
        ony8HeeX0FvChange: { changes: `y8HeeX0Fv`, type: A.ChangeHandler },
        o4pPpPfMO: { title: `Link`, type: A.Link },
      }),
      k(
        B,
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
          ...ze,
          ...Be,
          ...S(he),
          ...S(_e),
          ...S(Se),
          ...S(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (B.loader = { load: (e, t) => (t.locale, Promise.allSettled([x(I, {}, t), x(pe, {}, t)])) }));
  });
function tt(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function V(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function H(e) {
  throw Error(`Unexpected value: ${e}`);
}
function nt(e) {
  return typeof e == `string`;
}
function U(e) {
  return Number.isFinite(e);
}
function W(e) {
  return e === null;
}
function rt(e) {
  if (W(e)) return 0;
  switch (e.type) {
    case A.Array:
      return 1;
    case A.Boolean:
      return 2;
    case A.Color:
      return 3;
    case A.Date:
      return 4;
    case A.Enum:
      return 5;
    case A.File:
      return 6;
    case A.ResponsiveImage:
      return 10;
    case A.Link:
      return 7;
    case A.Number:
      return 8;
    case A.Object:
      return 9;
    case A.RichText:
      return 11;
    case A.String:
      return 12;
    case A.VectorSetItem:
      return 13;
    default:
      H(e);
  }
}
function it(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = G.read(e);
    n.push(t);
  }
  return { type: A.Array, value: n };
}
function at(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) G.write(e, n);
}
function ot(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = G.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function st(e) {
  return { type: A.Boolean, value: e.readUint8() !== 0 };
}
function ct(e, t) {
  e.writeUint8(t.value ? 1 : 0);
}
function lt(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ut(e) {
  return { type: A.Color, value: e.readString() };
}
function dt(e, t) {
  e.writeString(t.value);
}
function ft(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function pt(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: A.Date, value: n.toISOString() };
}
function mt(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function ht(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function gt(e) {
  return { type: A.Enum, value: e.readString() };
}
function _t(e, t) {
  e.writeString(t.value);
}
function vt(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function yt(e) {
  return { type: A.File, value: e.readString() };
}
function bt(e, t) {
  e.writeString(t.value);
}
function xt(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function St(e) {
  return { type: A.Link, value: e.readJson() };
}
function Ct(e, t) {
  e.writeJson(t.value);
}
function wt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Tt(e) {
  return { type: A.Number, value: e.readFloat64() };
}
function Et(e, t) {
  e.writeFloat64(t.value);
}
function Dt(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Ot(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = G.read(e);
  }
  return { type: A.Object, value: n };
}
function kt(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), G.write(e, r));
}
function At(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = G.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function jt(e) {
  return { type: A.ResponsiveImage, value: e.readJson() };
}
function Mt(e, t) {
  e.writeJson(t.value);
}
function Nt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Pt(e) {
  let t = e.readInt8();
  if (t === 0) return { type: A.RichText, value: e.readUint32() };
  if (t === 1) return { type: A.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Ft(e, t) {
  if (U(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (nt(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function It(e, t) {
  let n = e.value,
    r = t.value;
  if ((U(n) && U(r)) || (nt(n) && nt(r))) return n < r ? -1 : n > r ? 1 : 0;
  throw Error(`Invalid rich text pointer`);
}
function Lt(e) {
  return { type: A.String, value: e.readString() };
}
function Rt(e, t) {
  e.writeString(t.value);
}
function zt(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function Bt(e) {
  return { type: A.VectorSetItem, value: e.readUint32() };
}
function Vt(e, t) {
  e.writeUint32(t.value);
}
function Ht(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
async function Ut(e) {
  let t = Math.floor(on * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Wt(e, t) {
  let n = Kt(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await cn(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new ln(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function Gt(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Kt(e) {
  V(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
var G,
  qt,
  K,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  q,
  nn,
  J,
  rn,
  Y,
  X,
  Z,
  Q,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn = e(() => {
    (r(),
      E(),
      (qt = Object.create),
      (K = Object.defineProperty),
      (Jt = Object.getOwnPropertyDescriptor),
      (Yt = Object.getOwnPropertyNames),
      (Xt = Object.getPrototypeOf),
      (Zt = Object.prototype.hasOwnProperty),
      (Qt = (e, t, n) =>
        t in e
          ? K(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      ($t = (e, t) =>
        function () {
          return (t || (0, e[Yt(e)[0]])((t = { exports: {} }).exports, t), t.exports);
        }),
      (en = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of Yt(t))
            Zt.call(e, i) ||
              i === n ||
              K(e, i, { get: () => t[i], enumerable: !(r = Jt(t, i)) || r.enumerable });
        return e;
      }),
      (tn = (e, t, n) => (
        (n = e == null ? {} : qt(Xt(e))),
        en(!t && e && e.__esModule ? n : K(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (q = (e, t, n) => Qt(e, typeof t == `symbol` ? t : t + ``, n)),
      (nn = tn(
        $t({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (J = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (rn = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = J.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = J.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = J.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = J.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = J.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = J.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = J.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = J.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = J.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = J.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            q(this, `offset`, 0),
            q(this, `view`),
            q(this, `decoder`, new TextDecoder()),
            (this.view = tt(this.bytes)));
        }
      }),
      m !== void 0 && m.requestIdleCallback,
      (Y = (e) => 2 ** e - 1),
      (X = (e) => -(2 ** (e - 1))),
      (Z = (e) => 2 ** (e - 1) - 1),
      X(8),
      X(16),
      X(32),
      -(BigInt(2) ** BigInt(63)),
      Y(8),
      Y(16),
      Y(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      Z(8),
      Z(16),
      Z(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (Q = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            V(U(n), `Invalid chunkId`),
            V(U(r), `Invalid offset`),
            V(U(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          return new e(t.readUint16(), t.readUint32(), t.readUint32());
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (V(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return it(e);
            case 2:
              return st(e);
            case 3:
              return ut(e);
            case 4:
              return pt(e);
            case 5:
              return gt(e);
            case 6:
              return yt(e);
            case 7:
              return St(e);
            case 8:
              return Tt(e);
            case 9:
              return Ot(e);
            case 10:
              return jt(e);
            case 11:
              return Pt(e);
            case 12:
              return Lt(e);
            case 13:
              return Bt(e);
            default:
              H(t);
          }
        }),
          (e.write = function (e, t) {
            let n = rt(t);
            if ((e.writeUint8(n), !W(t)))
              switch (t.type) {
                case A.Array:
                  return at(e, t);
                case A.Boolean:
                  return ct(e, t);
                case A.Color:
                  return dt(e, t);
                case A.Date:
                  return mt(e, t);
                case A.Enum:
                  return _t(e, t);
                case A.File:
                  return bt(e, t);
                case A.Link:
                  return Ct(e, t);
                case A.Number:
                  return Et(e, t);
                case A.Object:
                  return kt(e, t);
                case A.ResponsiveImage:
                  return Mt(e, t);
                case A.RichText:
                  return Ft(e, t);
                case A.VectorSetItem:
                  return Vt(e, t);
                case A.String:
                  return Rt(e, t);
                default:
                  H(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = rt(e),
              i = rt(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (W(e) || W(t)) return 0;
            switch (e.type) {
              case A.Array:
                return (V(t.type === A.Array), ot(e, t, n));
              case A.Boolean:
                return (V(t.type === A.Boolean), lt(e, t));
              case A.Color:
                return (V(t.type === A.Color), ft(e, t));
              case A.Date:
                return (V(t.type === A.Date), ht(e, t));
              case A.Enum:
                return (V(t.type === A.Enum), vt(e, t));
              case A.File:
                return (V(t.type === A.File), xt(e, t));
              case A.Link:
                return (V(t.type === A.Link), wt(e, t));
              case A.Number:
                return (V(t.type === A.Number), Dt(e, t));
              case A.Object:
                return (V(t.type === A.Object), At(e, t, n));
              case A.ResponsiveImage:
                return (V(t.type === A.ResponsiveImage), Nt(e, t));
              case A.RichText:
                return (V(t.type === A.RichText), It(e, t));
              case A.VectorSetItem:
                return (V(t.type === A.VectorSetItem), Ht(e, t));
              case A.String:
                return (V(t.type === A.String), zt(e, t, n));
              default:
                H(e);
            }
          }));
      })((G ||= {})),
      (an = 3),
      (on = 250),
      (sn = [408, 429, 500, 502, 503, 504]),
      (cn = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!sn.includes(r.status) || ++n > an) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > an) throw e;
          }
          await Ut(n);
        }
      }),
      (ln = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((V(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Gt(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((V(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Gt(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          q(this, `chunks`, []);
        }
      }),
      (un = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = G.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), G.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          q(this, `fields`, new Map());
        }
      }),
      (dn = class {
        scanItems() {
          return (
            (this.itemsPromise ??= cn(this.url).then(async (e) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new rn(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = un.read(n),
                  i = n.getOffset() - e,
                  a = new Q(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            q(this, `itemsPromise`),
            q(
              this,
              `itemLoader`,
              new nn.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = Q.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await Wt(this.url, t)).map((t, n) => {
                    let r = new rn(t),
                      i = un.read(r),
                      a = e[n];
                    return (V(a, `Missing pointer`), { pointer: a, data: i.getData() });
                  });
                },
                { maxBatchSize: 250 }
              )
            ));
        }
      }),
      (fn = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = Q.fromString(e),
                n = this.chunks[t.chunkId];
              return (V(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = Q.fromString(e.pointer),
            r = Q.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return G.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            q(this, `id`),
            q(this, `schema`),
            q(this, `indexes`),
            q(this, `resolveRichText`),
            q(this, `resolveVectorSetItem`),
            q(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new dn(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function mn(e) {
  return typeof e == `object` && !!e && !s(e) && _n in e;
}
function hn(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function gn(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return f(a, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return f(D, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, s] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of s) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (mn(r) && r.preload(), (i[t] = r));
          }
          let c = e[r];
          return (
            hn(c, `Module not found`),
            mn(c) && c.preload(),
            o(oe, {
              componentIdentifier: r,
              children: (e) => o(ce, { component: c, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return f(e === `a` ? h.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, i), i);
  };
}
var $,
  _n,
  vn,
  yn = e(() => {
    (r(),
      d(),
      E(),
      p(),
      m !== void 0 && m.requestIdleCallback,
      (_n = `preload`),
      (vn =
        ((($ = vn || {})[($.Fragment = 1)] = `Fragment`),
        ($[($.Link = 2)] = `Link`),
        ($[($.Module = 3)] = `Module`),
        ($[($.Tag = 4)] = `Tag`),
        ($[($.Text = 5)] = `Text`),
        $)));
  }),
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En = e(() => {
    (E(),
      pn(),
      yn(),
      (bn = {
        createdAt: { isNullable: !0, type: A.Date },
        id: { isNullable: !1, type: A.String },
        mzSTQXzoT: { isNullable: !0, type: A.String },
        nextItemId: { isNullable: !0, type: A.String },
        previousItemId: { isNullable: !0, type: A.String },
        TrCPb_uYZ: { isNullable: !0, type: A.String },
        updatedAt: { isNullable: !0, type: A.Date },
      }),
      (xn = []),
      (Sn = (e) => {
        let t = xn[e];
        if (t) return t().then((e) => e.default);
      }),
      (Cn = gn({})),
      new y(),
      (wn = {
        collectionByLocaleId: {
          default: new fn({
            chunks: [
              new URL(
                `./R5dNbwg65-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/qkkrjJh0PwSGUahGVV1A/YhCuGtwe6LzJ8DxE13ck/R5dNbwg65.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `df1e8e0e-5a41-4101-ba92-44710cfc694edefault`,
            indexes: [],
            resolveRichText: Cn,
            resolveVectorSetItem: Sn,
            schema: bn,
          }),
        },
        displayName: `Blog Categories`,
        id: `df1e8e0e-5a41-4101-ba92-44710cfc694e`,
      }),
      (Tn = wn),
      v(wn, {
        mzSTQXzoT: { defaultValue: ``, title: `Title`, type: A.String },
        TrCPb_uYZ: { preventLocalization: !1, title: `Slug`, type: A.String },
        createdAt: { title: `Created`, type: A.Date },
        updatedAt: { title: `Updated`, type: A.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/R5dNbwg65:default`,
          title: `Previous`,
          type: A.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/R5dNbwg65:default`,
          title: `Next`,
          type: A.CollectionReference,
        },
      }));
  });
export { et as i, En as n, $e as r, Tn as t };
//# sourceMappingURL=R5dNbwg65.Co9p2lkS.mjs.map
