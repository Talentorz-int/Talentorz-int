import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import {
  A as t,
  O as n,
  P as r,
  c as i,
  g as ee,
  j as te,
  l as a,
  o as ne,
  s as re,
  v as ie,
  w as ae,
} from "./react.DXuyTrsy.mjs";
import { C as o, a as oe, r as se, t as ce } from "./motion.C4Ab7j_2.mjs";
import {
  E as s,
  F as c,
  H as l,
  N as le,
  S as u,
  St as d,
  Tt as f,
  V as p,
  Y as m,
  _ as h,
  a as g,
  c as ue,
  d as _,
  dt as de,
  gt as fe,
  ht as pe,
  i as v,
  k as y,
  l as b,
  pt as me,
  st as he,
  u as ge,
  ut as _e,
} from "./framer.A_mnCMV8.mjs";
import { i as x, n as ve, r as S, t as ye } from "./lpw1HhEJv.CUARUhsz.mjs";
import { i as C, n as w, r as T, t as be } from "./CiTq1jwtl.CumxN-Gs.mjs";
import { a as xe, i as Se, o as Ce, r as we } from "./shared-lib.3vyoKFC0.mjs";
import { n as E, t as Te } from "./plE8lAR0p.DnpcUrKQ.mjs";
import { i as Ee, n as De, r as Oe, t as ke } from "./ZL5YG__bZ.DVrDAE_Y.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./trekJP1di.CpdlAUyW.mjs";
import { n as D, t as Pe } from "./sjPmXsH3q.BJkv2Nmd.mjs";
import { a as Fe, i as Ie, n as Le, o as O, r as Re, t as ze } from "./JkrWgBqGT.DE3NlrXu.mjs";
import { n as Be, r as Ve } from "./MTMcCw60K.Btld29-M.mjs";
var k,
  A,
  j,
  M,
  N,
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
  He,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Ue,
  We,
  Q,
  Ge,
  Ke,
  $,
  qe,
  Je;
e(() => {
  (ne(),
    m(),
    ce(),
    ae(),
    Fe(),
    Te(),
    Pe(),
    C(),
    Ie(),
    x(),
    Ae(),
    Ce(),
    Ee(),
    Be(),
    (k = f(s)),
    (A = p(D)),
    (j = f(g)),
    (M = f(o.div)),
    (N = p(O)),
    (P = p(E)),
    (F = {
      rlycBuqd_: `(max-width: 809.98px)`,
      t3c2lO04z: `(min-width: 1200px)`,
      x9XlebqOK: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (I = () => typeof document < `u`),
    (L = []),
    (R = `framer-hdcxd`),
    (z = {
      rlycBuqd_: `framer-v-12xl0h1`,
      t3c2lO04z: `framer-v-2xqzhp`,
      x9XlebqOK: `framer-v-3xahsw`,
    }),
    (B = (e, t, n) => (e && t ? `position` : n)),
    (V = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 }),
    (H = { damping: 60, delay: 0.075, mass: 1, stiffness: 200, type: `spring` }),
    (U = { effect: V, tokenization: `line`, transition: H, trigger: `onMount`, type: `appear` }),
    (W = {
      effect: V,
      repeat: !1,
      startDelay: 0,
      tokenization: `line`,
      transition: H,
      trigger: `onMount`,
      type: `appear`,
    }),
    (G = { damping: 60, delay: 0.6, mass: 1, stiffness: 200, type: `spring` }),
    (He = {
      opacity: 0.6,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: G,
      x: 0,
      y: 0,
    }),
    (K = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (q = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 60, delay: 0, mass: 1, stiffness: 350, type: `spring` },
      x: 0,
      y: 0,
    }),
    (J = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Y = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (X = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 60, delay: 0.2, mass: 1, stiffness: 200, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Z = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Ue = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (We = {
      opacity: 0.7,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: G,
      x: 0,
      y: 0,
    }),
    (Q = { Desktop: `t3c2lO04z`, Phone: `rlycBuqd_`, Tablet: `x9XlebqOK` }),
    (Ge = ({ value: e }) =>
      me()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ke = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `t3c2lO04z`,
    })),
    ($ = d(
      ee(function (e, ee) {
        let ne = n(null),
          ae = ee ?? ne,
          ce = ie(),
          { activeLocale: c, setLocale: l } = pe(),
          d = he(),
          { style: f, className: p, layoutId: m, variant: y, ...me } = Ke(e);
        fe(te(() => Ve({}, c), [c]));
        let [x, ve] = de(y, F, !1),
          S = le(R, Ne, ke, ye, we, be, ze),
          C = t(_)?.isLayoutTemplate,
          w = B(C, !!t(oe)?.transition?.layout),
          T = () => (I() ? ![`x9XlebqOK`, `rlycBuqd_`].includes(x) : !0),
          xe = () => !!(!I() || [`x9XlebqOK`, `rlycBuqd_`].includes(x));
        return (
          _e({}),
          i(_.Provider, {
            value: {
              activeVariantId: x,
              humanReadableVariantMap: Q,
              primaryVariantId: `t3c2lO04z`,
              variantClassNames: z,
            },
            children: a(se, {
              id: m ?? ce,
              children: [
                i(Ge, {
                  value: `html body { background: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)); }`,
                }),
                a(o.div, {
                  ...me,
                  className: le(S, `framer-2xqzhp`, p),
                  ref: ae,
                  style: { ...f },
                  children: [
                    a(o.section, {
                      className: `framer-1gzwh2d`,
                      "data-border": !0,
                      "data-framer-name": `Hero`,
                      layout: w,
                      children: [
                        i(`section`, {
                          className: `framer-17155ts`,
                          "data-framer-name": `Content Container`,
                          children: a(`div`, {
                            className: `framer-fjnkmx`,
                            "data-border": !0,
                            "data-framer-name": `Content`,
                            children: [
                              a(`div`, {
                                className: `framer-rvrz1u`,
                                "data-border": !0,
                                "data-framer-name": `Left`,
                                children: [
                                  a(`div`, {
                                    className: `framer-1jm31q4`,
                                    "data-framer-name": `Headline`,
                                    children: [
                                      i(s, {
                                        __fromCanvasComponent: !0,
                                        children: i(r, {
                                          children: i(`h1`, {
                                            className: `framer-styles-preset-fvt9x8`,
                                            "data-styles-preset": `trekJP1di`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                            },
                                            children: `Échangeons sur votre besoin`,
                                          }),
                                        }),
                                        className: `framer-kq1cic`,
                                        effect: U,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      i(s, {
                                        __fromCanvasComponent: !0,
                                        children: i(r, {
                                          children: i(`p`, {
                                            className: `framer-styles-preset-1p0vs9p`,
                                            "data-styles-preset": `ZL5YG__bZ`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `Candidat à la recherche d'une mission ou entreprise en quête de renforts : décrivez votre besoin, un consultant Talentorz vous répond sous 24 heures.`,
                                          }),
                                        }),
                                        className: `framer-1faaawd`,
                                        effect: W,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  T() &&
                                    a(`div`, {
                                      className: `framer-1y39b34 hidden-3xahsw hidden-12xl0h1`,
                                      "data-border": !0,
                                      "data-framer-name": `Logo Strip - Desktop`,
                                      children: [
                                        i(k, {
                                          __fromCanvasComponent: !0,
                                          animate: He,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-xjkrtz`,
                                              "data-styles-preset": `lpw1HhEJv`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                              },
                                              children: `PARTENAIRE DES CANDIDATS ET DES ENTREPRISES`,
                                            }),
                                          }),
                                          className: `framer-676ylk`,
                                          "data-framer-appear-id": `676ylk`,
                                          fonts: [`Inter`],
                                          initial: K,
                                          optimized: !0,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(v, {
                                          height: 48,
                                          width: `min(min(min(max(min(${d?.width || `100vw`} - 80px, 1320px) / 2, 1px), min(${d?.width || `100vw`} - 80px, 1320px) / 2), 1120px) - 80px, 1100px)`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            469 +
                                            40 +
                                            103,
                                          children: i(j, {
                                            animate: q,
                                            className: `framer-lxjf91-container`,
                                            "data-framer-appear-id": `lxjf91`,
                                            initial: K,
                                            nodeId: `Vbm4qX6Xo`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `MTMcCw60K`,
                                            children: i(D, {
                                              AECIv4vE2: `0px`,
                                              GyD1ttewD: J(
                                                {
                                                  pixelHeight: 750,
                                                  pixelWidth: 750,
                                                  src: `../../assets/images/infomaniak-logo.png`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              i_eIh_Uhb: J(
                                                {
                                                  pixelHeight: 469,
                                                  pixelWidth: 1280,
                                                  src: `../../assets/images/logo-ubs.png`,
                                                },
                                                ``
                                              ),
                                              id: `Vbm4qX6Xo`,
                                              kfUFxmlX7: J(
                                                {
                                                  pixelHeight: 2160,
                                                  pixelWidth: 3840,
                                                  src: `../../assets/images/Grant-Thornton-Logo.png`,
                                                },
                                                ``
                                              ),
                                              layoutId: `Vbm4qX6Xo`,
                                              Q6EI_IIR8: J(
                                                {
                                                  pixelHeight: 750,
                                                  pixelWidth: 750,
                                                  src: `../../assets/images/infomaniak-logo.png`,
                                                },
                                                ``
                                              ),
                                              sLG9eB2Tx: J(
                                                {
                                                  pixelHeight: 223,
                                                  pixelWidth: 595,
                                                  src: `../../assets/images/SWISSCOM.png`,
                                                },
                                                ``
                                              ),
                                              style: {
                                                height: `100%`,
                                                maxWidth: `100%`,
                                                width: `100%`,
                                              },
                                              uUhgQCWFN: J(
                                                {
                                                  pixelHeight: 502,
                                                  pixelWidth: 1490,
                                                  src: `../../assets/images/logo_hilti.png`,
                                                },
                                                ``
                                              ),
                                              variant: Y(`E3oWvrbso`),
                                              width: `100%`,
                                              Y44YPh6HI: J(
                                                {
                                                  pixelHeight: 110,
                                                  pixelWidth: 220,
                                                  src: `../../assets/images/logo-arche.svg`,
                                                },
                                                ``
                                              ),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-o32tye`,
                                "data-framer-name": `Form`,
                                children: [
                                  i(M, {
                                    animate: X,
                                    className: `framer-1acd80n`,
                                    "data-framer-appear-id": `1acd80n`,
                                    "data-framer-name": `Background`,
                                    initial: Z,
                                    optimized: !0,
                                  }),
                                  i(M, {
                                    animate: X,
                                    className: `framer-1jnuvrv`,
                                    "data-framer-appear-id": `1jnuvrv`,
                                    "data-framer-name": `Form`,
                                    initial: Z,
                                    optimized: !0,
                                    children: i(ue, {
                                      action: `https://api.framer.com/forms/v1/forms/affd0494-db04-402a-b1f9-c02407ea151b/submit`,
                                      className: `framer-1yzy4m2`,
                                      nodeId: `Oe9yZtc3K`,
                                      children: (e) =>
                                        a(re, {
                                          children: [
                                            a(`div`, {
                                              className: `framer-rol9o2`,
                                              "data-framer-name": `fields`,
                                              children: [
                                                a(`div`, {
                                                  className: `framer-f8j1q7`,
                                                  "data-framer-name": `name`,
                                                  children: [
                                                    a(`label`, {
                                                      className: `framer-15ryixa`,
                                                      children: [
                                                        i(s, {
                                                          __fromCanvasComponent: !0,
                                                          children: i(r, {
                                                            children: i(`p`, {
                                                              className: `framer-styles-preset-ar7l3c`,
                                                              "data-styles-preset": `VpaJFpv2y`,
                                                              dir: `auto`,
                                                              children: `Nom complet*`,
                                                            }),
                                                          }),
                                                          className: `framer-fsf3v4`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        i(b, {
                                                          className: `framer-1n2v42p`,
                                                          inputName: `Full Name`,
                                                          placeholder: `Jordan Feliz`,
                                                          required: !0,
                                                          type: `text`,
                                                        }),
                                                      ],
                                                    }),
                                                    a(`label`, {
                                                      className: `framer-qywgku`,
                                                      children: [
                                                        i(s, {
                                                          __fromCanvasComponent: !0,
                                                          children: i(r, {
                                                            children: i(`p`, {
                                                              className: `framer-styles-preset-ar7l3c`,
                                                              "data-styles-preset": `VpaJFpv2y`,
                                                              dir: `auto`,
                                                              children: `Nom de votre entreprise`,
                                                            }),
                                                          }),
                                                          className: `framer-11e06qw`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        i(b, {
                                                          className: `framer-6p8dr5`,
                                                          inputName: `Nom de votre entreprise`,
                                                          placeholder: `Goldman Sachs`,
                                                          type: `text`,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                a(`div`, {
                                                  className: `framer-gg5y8z`,
                                                  "data-framer-name": `contact`,
                                                  children: [
                                                    a(`label`, {
                                                      className: `framer-tlfhm1`,
                                                      children: [
                                                        i(s, {
                                                          __fromCanvasComponent: !0,
                                                          children: i(r, {
                                                            children: i(`p`, {
                                                              className: `framer-styles-preset-ar7l3c`,
                                                              "data-styles-preset": `VpaJFpv2y`,
                                                              dir: `auto`,
                                                              children: `Email*`,
                                                            }),
                                                          }),
                                                          className: `framer-3uinxc`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        i(b, {
                                                          className: `framer-15oq1ga`,
                                                          inputName: `Email`,
                                                          placeholder: `jordan@email.com`,
                                                          required: !0,
                                                          type: `email`,
                                                        }),
                                                      ],
                                                    }),
                                                    a(`label`, {
                                                      className: `framer-15cg43u`,
                                                      children: [
                                                        i(s, {
                                                          __fromCanvasComponent: !0,
                                                          children: i(r, {
                                                            children: i(`p`, {
                                                              className: `framer-styles-preset-ar7l3c`,
                                                              "data-styles-preset": `VpaJFpv2y`,
                                                              dir: `auto`,
                                                              children: `Phone`,
                                                            }),
                                                          }),
                                                          className: `framer-1mmvkd`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        i(b, {
                                                          className: `framer-cscdmv`,
                                                          inputName: `Phone`,
                                                          placeholder: `+33`,
                                                          type: `tel`,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                a(`label`, {
                                                  className: `framer-1ffitdi`,
                                                  children: [
                                                    i(s, {
                                                      __fromCanvasComponent: !0,
                                                      children: i(r, {
                                                        children: i(`p`, {
                                                          className: `framer-styles-preset-ar7l3c`,
                                                          "data-styles-preset": `VpaJFpv2y`,
                                                          dir: `auto`,
                                                          children: `Quel est votre besoin ?*`,
                                                        }),
                                                      }),
                                                      className: `framer-1h4ft7w`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    i(ge, {
                                                      className: `framer-1pa5qi8`,
                                                      defaultValue: ``,
                                                      inputName: `Location`,
                                                      required: !0,
                                                      selectOptions: [
                                                        {
                                                          disabled: !0,
                                                          title: `Select…`,
                                                          type: `option`,
                                                          value: ``,
                                                        },
                                                        {
                                                          title: `Recrutement renfort`,
                                                          type: `option`,
                                                          value: `Recrutement renfort`,
                                                        },
                                                        {
                                                          title: `Recruter un Talent`,
                                                          type: `option`,
                                                          value: `Recruter un Talent`,
                                                        },
                                                        {
                                                          title: `Devenir un Talentorz`,
                                                          type: `option`,
                                                          value: `Devenir un Talentorz`,
                                                        },
                                                        {
                                                          title: `Performance Intelligence`,
                                                          type: `option`,
                                                          value: `Performance Intelligence`,
                                                        },
                                                        {
                                                          title: `Je suis une entreprise`,
                                                          type: `option`,
                                                          value: `Je suis une entreprise`,
                                                        },
                                                        {
                                                          title: `Autres demandes`,
                                                          type: `option`,
                                                          value: `Autres demandes`,
                                                        },
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                a(`label`, {
                                                  className: `framer-z9hw1u`,
                                                  children: [
                                                    i(s, {
                                                      __fromCanvasComponent: !0,
                                                      children: i(r, {
                                                        children: i(`p`, {
                                                          className: `framer-styles-preset-ar7l3c`,
                                                          "data-styles-preset": `VpaJFpv2y`,
                                                          dir: `auto`,
                                                          children: `Message*`,
                                                        }),
                                                      }),
                                                      className: `framer-9386sa`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    i(b, {
                                                      className: `framer-1acg3n4`,
                                                      inputName: `Message`,
                                                      placeholder: `Votre message...`,
                                                      required: !0,
                                                      type: `textarea`,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            a(`div`, {
                                              className: `framer-nypep9`,
                                              "data-framer-name": `button`,
                                              children: [
                                                i(u, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    rlycBuqd_: {
                                                      width: `calc(max(min(${d?.width || `100vw`} - 24px, 1320px), 1px) - 48px)`,
                                                    },
                                                    x9XlebqOK: {
                                                      width: `calc(max(min(${d?.width || `100vw`} - 48px, 1320px), 1px) - 80px)`,
                                                    },
                                                  },
                                                  children: i(v, {
                                                    height: 44,
                                                    width: `calc(max(min(max(min(${d?.width || `100vw`} - 80px, 1320px) / 2, 1px), min(${d?.width || `100vw`} - 80px, 1320px) / 2), 1px) - 80px)`,
                                                    children: i(g, {
                                                      className: `framer-2qfcsv-container`,
                                                      nodeId: `FXL6ss1pn`,
                                                      scopeId: `MTMcCw60K`,
                                                      children: i(O, {
                                                        height: `100%`,
                                                        id: `FXL6ss1pn`,
                                                        layoutId: `FXL6ss1pn`,
                                                        style: { width: `100%` },
                                                        type: `submit`,
                                                        variant: Ue(
                                                          e,
                                                          {
                                                            error: `rSoLppRUl`,
                                                            pending: `U_Urdsya_`,
                                                            success: `IhmgEXOF3`,
                                                          },
                                                          Y(`OpiiXvRMk`)
                                                        ),
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                i(s, {
                                                  __fromCanvasComponent: !0,
                                                  children: i(r, {
                                                    children: a(`p`, {
                                                      className: `framer-styles-preset-x65a7p`,
                                                      "data-styles-preset": `CiTq1jwtl`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                                                      },
                                                      children: [
                                                        `By sending this form, you agree to our `,
                                                        i(h, {
                                                          href: {
                                                            pathVariables: {
                                                              B3Co6gnNE: `terms-of-use`,
                                                            },
                                                            unresolvedPathSlugs: {
                                                              B3Co6gnNE: {
                                                                collectionId: `Y7WrHm9h3`,
                                                                collectionItemId: `u7WpnKJsL`,
                                                              },
                                                            },
                                                            webPageId: `r0_tbHeBN`,
                                                          },
                                                          motionChild: !0,
                                                          nodeId: `kskErLzP5`,
                                                          openInNewTab: !1,
                                                          relValues: [],
                                                          scopeId: `MTMcCw60K`,
                                                          smoothScroll: !1,
                                                          children: i(o.a, {
                                                            className: `framer-styles-preset-1hyg102`,
                                                            "data-styles-preset": `JkrWgBqGT`,
                                                            children: `Terms`,
                                                          }),
                                                        }),
                                                        ` and `,
                                                        i(h, {
                                                          href: {
                                                            pathVariables: {
                                                              B3Co6gnNE: `privacy-policy`,
                                                            },
                                                            unresolvedPathSlugs: {
                                                              B3Co6gnNE: {
                                                                collectionId: `Y7WrHm9h3`,
                                                                collectionItemId: `BvUzVe2Fo`,
                                                              },
                                                            },
                                                            webPageId: `r0_tbHeBN`,
                                                          },
                                                          motionChild: !0,
                                                          nodeId: `kskErLzP5`,
                                                          openInNewTab: !1,
                                                          preserveParams: !1,
                                                          relValues: [],
                                                          scopeId: `MTMcCw60K`,
                                                          smoothScroll: !1,
                                                          children: i(o.a, {
                                                            className: `framer-styles-preset-1hyg102`,
                                                            "data-styles-preset": `JkrWgBqGT`,
                                                            children: `Politique de confidentialité`,
                                                          }),
                                                        }),
                                                        `.`,
                                                      ],
                                                    }),
                                                  }),
                                                  className: `framer-1xgif2k`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        xe() &&
                          i(`div`, {
                            className: `framer-13l4l19 hidden-2xqzhp`,
                            "data-border": !0,
                            "data-framer-name": `Logo Strip - Mobile`,
                            children: a(`div`, {
                              className: `framer-e569uu`,
                              "data-border": !0,
                              "data-framer-name": `Logo Wrapper`,
                              children: [
                                i(u, {
                                  breakpoint: x,
                                  overrides: {
                                    rlycBuqd_: {
                                      children: i(r, {
                                        children: i(`p`, {
                                          className: `framer-styles-preset-xjkrtz`,
                                          "data-styles-preset": `lpw1HhEJv`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `La confiance des entreprises du tertiaire`,
                                        }),
                                      }),
                                    },
                                    x9XlebqOK: {
                                      children: i(r, {
                                        children: i(`p`, {
                                          className: `framer-styles-preset-xjkrtz`,
                                          "data-styles-preset": `lpw1HhEJv`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `La confiance des entreprises du tertiaire`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: i(k, {
                                    __fromCanvasComponent: !0,
                                    animate: We,
                                    children: i(r, {
                                      children: i(`p`, {
                                        className: `framer-styles-preset-xjkrtz`,
                                        "data-styles-preset": `lpw1HhEJv`,
                                        dir: `auto`,
                                        children: `La confiance des entreprises du tertiaire`,
                                      }),
                                    }),
                                    className: `framer-11t01gc`,
                                    "data-framer-appear-id": `11t01gc`,
                                    fonts: [`Inter`],
                                    initial: K,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                i(u, {
                                  breakpoint: x,
                                  overrides: {
                                    rlycBuqd_: {
                                      width: `min(min(${d?.width || `100vw`} - 24px, 1120px), 1100px)`,
                                    },
                                    x9XlebqOK: {
                                      width: `min(min(${d?.width || `100vw`} - 48px, 1120px), 1100px)`,
                                    },
                                  },
                                  children: i(v, {
                                    height: 48,
                                    children: i(j, {
                                      animate: q,
                                      className: `framer-lc1142-container`,
                                      "data-framer-appear-id": `lc1142`,
                                      initial: K,
                                      nodeId: `b4qezQzzW`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `MTMcCw60K`,
                                      children: i(u, {
                                        breakpoint: x,
                                        overrides: { rlycBuqd_: { variant: Y(`CVgtV8Pd3`) } },
                                        children: i(D, {
                                          AECIv4vE2: `0px`,
                                          GyD1ttewD: J(
                                            {
                                              pixelHeight: 750,
                                              pixelWidth: 750,
                                              src: `../../assets/images/infomaniak-logo.png`,
                                            },
                                            ``
                                          ),
                                          height: `100%`,
                                          i_eIh_Uhb: J(
                                            {
                                              pixelHeight: 469,
                                              pixelWidth: 1280,
                                              src: `../../assets/images/logo-ubs.png`,
                                            },
                                            ``
                                          ),
                                          id: `b4qezQzzW`,
                                          kfUFxmlX7: J(
                                            {
                                              pixelHeight: 2160,
                                              pixelWidth: 3840,
                                              src: `../../assets/images/Grant-Thornton-Logo.png`,
                                            },
                                            ``
                                          ),
                                          layoutId: `b4qezQzzW`,
                                          Q6EI_IIR8: J(
                                            {
                                              pixelHeight: 750,
                                              pixelWidth: 750,
                                              src: `../../assets/images/infomaniak-logo.png`,
                                            },
                                            ``
                                          ),
                                          sLG9eB2Tx: J(
                                            {
                                              pixelHeight: 223,
                                              pixelWidth: 595,
                                              src: `../../assets/images/SWISSCOM.png`,
                                            },
                                            ``
                                          ),
                                          style: {
                                            height: `100%`,
                                            maxWidth: `100%`,
                                            width: `100%`,
                                          },
                                          uUhgQCWFN: J(
                                            {
                                              pixelHeight: 502,
                                              pixelWidth: 1490,
                                              src: `../../assets/images/logo_hilti.png`,
                                            },
                                            ``
                                          ),
                                          variant: Y(`E3oWvrbso`),
                                          width: `100%`,
                                          Y44YPh6HI: J(
                                            {
                                              pixelHeight: 110,
                                              pixelWidth: 220,
                                              src: `../../assets/images/logo-arche.svg`,
                                            },
                                            ``
                                          ),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        T() &&
                          i(o.div, {
                            className: `framer-bkxgfn hidden-3xahsw hidden-12xl0h1`,
                            "data-border": !0,
                            "data-framer-name": `Spacer`,
                            style: { rotate: 180 },
                            children: i(`div`, {
                              className: `framer-1vfb980`,
                              "data-border": !0,
                              "data-framer-name": `Inner Spacer`,
                            }),
                          }),
                      ],
                    }),
                    i(u, {
                      breakpoint: x,
                      overrides: { rlycBuqd_: { y: void 0 }, x9XlebqOK: { y: void 0 } },
                      children: i(v, {
                        height: 40,
                        width: d?.width || `100vw`,
                        y: (d?.y || 0) + 0 + 780,
                        children: i(g, {
                          className: `framer-nwr4tz-container`,
                          layout: w,
                          nodeId: `MenDDEKIy`,
                          scopeId: `MTMcCw60K`,
                          children: i(u, {
                            breakpoint: x,
                            overrides: {
                              rlycBuqd_: { variant: Y(`Jyf0NVykQ`) },
                              x9XlebqOK: { variant: Y(`g9QK3nmV9`) },
                            },
                            children: i(E, {
                              height: `100%`,
                              id: `MenDDEKIy`,
                              layoutId: `MenDDEKIy`,
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
                              variant: Y(`qElohr0kM`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
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
        `.framer-hdcxd.framer-h422y1, .framer-hdcxd .framer-h422y1 { display: block; }`,
        `.framer-hdcxd.framer-2xqzhp { align-content: center; align-items: center; background-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-hdcxd .framer-1gzwh2d { --border-bottom-width: 1px; --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, #3b3e48); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, #0c111c); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-17155ts { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 700px; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-fjnkmx { --border-bottom-width: 0px; --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgba(255, 255, 255, 0.06)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-rvrz1u { --border-bottom-width: 0px; --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, #323644); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; max-width: 50%; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-hdcxd .framer-1jm31q4 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 1px; justify-content: flex-start; overflow: visible; padding: 80px 80px 40px 40px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-kq1cic { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-hdcxd .framer-1faaawd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: none; flex: none; height: auto; opacity: 0.7; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-1y39b34 { --border-bottom-width: 0px; --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, #3e4251); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; max-width: 1120px; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-676ylk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.6; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-hdcxd .framer-lxjf91-container, .framer-hdcxd .framer-lc1142-container { flex: none; height: 48px; max-width: 1100px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-hdcxd .framer-o32tye { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; max-width: 50%; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-hdcxd .framer-1acd80n { background: linear-gradient(150deg, var(--token-60201a70-47ba-4cfc-80b4-6a7f3bd4e1da, #f3f5fa) 0%, var(--token-ea844e6c-3d0f-43a9-8349-81472c10de68, rgb(0, 86, 251)) 40%, var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28)) 100%); bottom: 0px; flex: none; gap: 10px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-hdcxd .framer-1jnuvrv { align-content: center; align-items: center; background-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 60px 40px 40px 40px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-hdcxd .framer-1yzy4m2 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-rol9o2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 17px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-f8j1q7, .framer-hdcxd .framer-gg5y8z { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-15ryixa, .framer-hdcxd .framer-qywgku, .framer-hdcxd .framer-tlfhm1, .framer-hdcxd .framer-15cg43u { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-fsf3v4, .framer-hdcxd .framer-11e06qw, .framer-hdcxd .framer-3uinxc, .framer-hdcxd .framer-1mmvkd, .framer-hdcxd .framer-1h4ft7w, .framer-hdcxd .framer-9386sa { flex: none; height: auto; opacity: 0.63; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-hdcxd .framer-1n2v42p, .framer-hdcxd .framer-6p8dr5, .framer-hdcxd .framer-15oq1ga, .framer-hdcxd .framer-cscdmv { --framer-input-background: var(--token-ff130ec1-74be-4ca9-be0f-0fd9e9fd1fd4, rgba(12, 17, 28, 0.02)); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-ff130ec1-74be-4ca9-be0f-0fd9e9fd1fd4, rgba(12, 17, 28, 0.02)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 2px; --framer-input-border-radius-bottom-right: 2px; --framer-input-border-radius-top-left: 2px; --framer-input-border-radius-top-right: 2px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-cf258c4a-81a3-485f-aa02-272aad86c263, #d4d5d9); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, #51555e); --framer-input-font-family: "TASA Orbiter"; --framer-input-font-letter-spacing: -0.1px; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px 8px 12px 8px; --framer-input-placeholder-color: var(--token-201a31a0-d37a-4e5d-8468-9c59b609dce7, rgba(12, 17, 28, 0.35)); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-1ffitdi, .framer-hdcxd .framer-z9hw1u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-1pa5qi8 { --framer-input-background: var(--token-ff130ec1-74be-4ca9-be0f-0fd9e9fd1fd4, rgba(12, 17, 28, 0.02)); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-ff130ec1-74be-4ca9-be0f-0fd9e9fd1fd4, rgba(12, 17, 28, 0.02)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 2px; --framer-input-border-radius-bottom-right: 2px; --framer-input-border-radius-top-left: 2px; --framer-input-border-radius-top-right: 2px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-cf258c4a-81a3-485f-aa02-272aad86c263, #d4d5d9); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, #51555e); --framer-input-font-family: "TASA Orbiter"; --framer-input-font-letter-spacing: -0.1px; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-invalid-text-color: var(--token-201a31a0-d37a-4e5d-8468-9c59b609dce7, rgba(12, 17, 28, 0.35)); --framer-input-padding: 12px 8px 12px 8px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-1acg3n4 { --framer-input-background: var(--token-ff130ec1-74be-4ca9-be0f-0fd9e9fd1fd4, rgba(12, 17, 28, 0.02)); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-ff130ec1-74be-4ca9-be0f-0fd9e9fd1fd4, rgba(12, 17, 28, 0.02)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 2px; --framer-input-border-radius-bottom-right: 2px; --framer-input-border-radius-top-left: 2px; --framer-input-border-radius-top-right: 2px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-cf258c4a-81a3-485f-aa02-272aad86c263, #d4d5d9); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, #51555e); --framer-input-font-family: "TASA Orbiter"; --framer-input-font-letter-spacing: -0.1px; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px 8px 12px 8px; --framer-input-placeholder-color: var(--token-201a31a0-d37a-4e5d-8468-9c59b609dce7, rgba(12, 17, 28, 0.35)); --framer-input-wrapper-height: auto; flex: none; height: auto; min-height: 180px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-nypep9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-2qfcsv-container, .framer-hdcxd .framer-nwr4tz-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-1xgif2k { flex: none; height: auto; max-width: 70%; opacity: 0.65; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-hdcxd .framer-13l4l19 { --border-bottom-width: 0px; --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, #2f323d); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 180px; justify-content: center; max-height: 180px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-e569uu { --border-bottom-width: 0px; --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, #3e4251); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: 1px; justify-content: center; max-width: 1120px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-11t01gc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.7; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-hdcxd .framer-bkxgfn { --border-bottom-width: 0px; --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, #323644); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-hdcxd .framer-1vfb980 { --border-bottom-width: 1px; --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, #323644); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 80px; justify-content: flex-start; max-width: 1320px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        ...je,
        ...De,
        ...ve,
        ...Se,
        ...w,
        ...Le,
        `.framer-hdcxd[data-border="true"]::after, .framer-hdcxd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-hdcxd.framer-2xqzhp { width: 810px; } .framer-hdcxd .framer-17155ts { height: min-content; padding: 0px 24px 0px 24px; } .framer-hdcxd .framer-fjnkmx { --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, #3b3e48); flex: none; flex-direction: column; height: min-content; } .framer-hdcxd .framer-rvrz1u { flex: none; gap: 0px; height: min-content; justify-content: center; max-width: unset; order: 0; width: 100%; } .framer-hdcxd .framer-1jm31q4 { flex: none; height: min-content; padding: 80px 80px 64px 40px; } .framer-hdcxd .framer-o32tye { flex: none; height: min-content; max-width: unset; order: 1; width: 100%; } .framer-hdcxd .framer-1jnuvrv { height: min-content; } .framer-hdcxd .framer-1yzy4m2 { flex: none; gap: 0px; height: min-content; justify-content: center; } .framer-hdcxd .framer-1xgif2k { max-width: unset; } .framer-hdcxd .framer-13l4l19 { height: min-content; max-height: unset; padding: 0px 24px 0px 24px; } .framer-hdcxd .framer-e569uu { flex: none; height: min-content; padding: 48px 0px 48px 0px; }}`,
        `@media (max-width: 809.98px) { .framer-hdcxd.framer-2xqzhp { width: 390px; } .framer-hdcxd .framer-17155ts { height: min-content; padding: 0px 12px 0px 12px; } .framer-hdcxd .framer-fjnkmx { --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, #3b3e48); flex: none; flex-direction: column; height: min-content; } .framer-hdcxd .framer-rvrz1u { flex: none; gap: 0px; height: min-content; justify-content: flex-start; max-width: unset; width: 100%; } .framer-hdcxd .framer-1jm31q4 { flex: none; height: min-content; padding: 64px 24px 48px 24px; } .framer-hdcxd .framer-o32tye { flex: none; height: min-content; max-width: unset; width: 100%; } .framer-hdcxd .framer-1jnuvrv { gap: 24px; height: min-content; padding: 24px; } .framer-hdcxd .framer-1yzy4m2 { flex: none; gap: 24px; height: min-content; justify-content: center; } .framer-hdcxd .framer-f8j1q7, .framer-hdcxd .framer-gg5y8z { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-hdcxd .framer-1xgif2k { max-width: unset; } .framer-hdcxd .framer-13l4l19 { height: min-content; max-height: unset; padding: 0px 12px 0px 12px; } .framer-hdcxd .framer-e569uu { flex: none; gap: 24px; height: min-content; padding: 48px 0px 48px 0px; } .framer-hdcxd .framer-11t01gc { max-width: 60%; }}`,
      ],
      `framer-hdcxd`
    )),
    (qe = $),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 2613.5, width: 1200 }),
    y(
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
            {
              cssFamilyName: `TASA Orbiter`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `TASA Orbiter`,
              url: `../../assets/fonts/3XF4Erw3860rsdSUVZx78hPcTvQoDGHxaFGfVH4C8pm095IuGcc.woff2`,
              weight: `400`,
            },
          ],
        },
        ...A,
        ...N,
        ...P,
        ...l(Me),
        ...l(Oe),
        ...l(S),
        ...l(xe),
        ...l(T),
        ...l(Re),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (t.locale, Promise.allSettled([c(D, {}, t), c(O, {}, t), c(E, {}, t)])),
    }),
    (Je = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerMTMcCw60K`,
          slots: [],
          annotations: {
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `2613.5`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"x9XlebqOK":{"layout":["fixed","fixed"]},"rlycBuqd_":{"layout":["fixed","fixed"]}}}`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Je as __FramerMetadata__, qe as default, L as queryParamNames };
//# sourceMappingURL=2oNK_lEJkjOziWG8HZ351aJCQghUIW3B-B1praVDIE4.C9YdJRH-.mjs.map
