import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import {
  A as t,
  F as n,
  L as r,
  N as i,
  O as a,
  P as o,
  c as s,
  g as c,
  j as l,
  l as u,
  o as d,
  s as f,
  v as p,
  w as m,
  z as h,
} from "./react.DXuyTrsy.mjs";
import { C as g, L as _, P as v, a as y, f as b, r as x, t as S } from "./motion.C4Ab7j_2.mjs";
import {
  A as C,
  E as w,
  F as T,
  H as E,
  N as D,
  O,
  St as k,
  U as A,
  V as j,
  Y as M,
  ht as N,
  i as P,
  k as F,
  mt as ee,
  o as I,
  p as L,
  st as R,
  w as z,
  xt as B,
} from "./framer.A_mnCMV8.mjs";
import { a as te, i as ne, o as re, r as ie } from "./shared-lib.3vyoKFC0.mjs";
function ae({
  image: e,
  intensity: t,
  borderRadius: r,
  uniqueKey: o,
  altText: c,
  enabled: l,
  imageHeight: u,
}) {
  let d = a(null),
    f = a(null),
    [p, m] = n(null),
    g = a(null),
    _ = a(!1),
    v = typeof e == `object` && e && `url` in e ? e.url : e;
  return (
    i(() => {
      if (!v) return;
      let e = new Image();
      ((e.onload = () => {
        m(e.height / e.width);
      }),
        (e.src = v));
    }, [v]),
    i(() => {
      if (!d.current || !l) return;
      let e = new IntersectionObserver(
        ([e]) => {
          _.current = e.isIntersecting;
        },
        { rootMargin: `100px` }
      );
      return (e.observe(d.current), () => e.disconnect());
    }, [l]),
    i(() => {
      if (!l) {
        f.current && (f.current.style.transform = `translate3d(0, 0, 0)`);
        return;
      }
      let e =
          h !== void 0 &&
          (h.location.href.includes(`/preview`) || !h.location.href.includes(`framer.com`)),
        n = !1,
        r = () => {
          !n &&
            _.current &&
            ((g.current = requestAnimationFrame(() => {
              if (!d.current || !f.current) return;
              let e = d.current.getBoundingClientRect(),
                r = h.innerHeight,
                i = (e.top / r) * t * -5;
              ((f.current.style.transform = `translate3d(0, ${i}px, 0)`), (n = !1));
            })),
            (n = !0));
        };
      if (e && d.current && f.current) {
        let e = d.current.getBoundingClientRect(),
          n = h.innerHeight,
          r = (e.top / n) * t * -5;
        f.current.style.transform = `translate3d(0, ${r}px, 0)`;
      }
      return (
        h.addEventListener(`scroll`, r, { passive: !0 }),
        () => {
          (h.removeEventListener(`scroll`, r), g.current && cancelAnimationFrame(g.current));
        }
      );
    }, [t, l]),
    s(`div`, {
      ref: d,
      style: { ...oe, borderRadius: r, paddingBottom: p ? `${p * 100}%` : `100%` },
      children: s(`img`, {
        ref: f,
        src: v,
        alt: c,
        style: { ...se, borderRadius: r, height: `${u}%` },
      }),
    })
  );
}
var oe,
  se,
  ce = e(() => {
    (r(),
      d(),
      M(),
      m(),
      (oe = { overflow: `hidden`, position: `relative`, width: `100%`, height: 0 }),
      (se = {
        position: `absolute`,
        top: `0%`,
        left: `0`,
        width: `100%`,
        objectFit: `cover`,
        willChange: `transform`,
      }),
      C(ae, {
        image: { type: I.Image, title: `Add Image` },
        altText: { type: I.String, title: `Alt Text`, defaultValue: `Alt Text` },
        enabled: {
          type: I.Boolean,
          title: `Enabled`,
          defaultValue: !0,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        intensity: {
          type: I.Number,
          title: `Intensity`,
          min: 5,
          max: 100,
          step: 1,
          defaultValue: 10,
        },
        imageHeight: {
          type: I.Number,
          title: `Image Height`,
          min: 100,
          max: 150,
          step: 5,
          defaultValue: 110,
          unit: `%`,
          description: `Increase for higher intensity or smaller images`,
        },
        borderRadius: {
          type: I.Number,
          title: `Border Radius`,
          min: 0,
          max: 100,
          step: 1,
          defaultValue: 0,
          displayStepper: !0,
          description: `Made by [Refactor](https://framer.link/PtC8T2X)`,
        },
      }));
  });
function V(e) {
  let { mode: t, start: r, end: o, value: s, decimals: c, commas: l, color: d, animation: p } = e,
    m = z.current() === z.canvas,
    h = e.tag,
    y = g[e.tag],
    x = t == `default`,
    S = x ? r : s,
    C = x ? p.transition : e.transition,
    w = (e) => {
      let t = e.toFixed(c);
      return (l && (t = t.replace(/\B(?=(\d{3})+(?!\d))/g, `,`)), t);
    },
    [T, E] = n(S),
    [D, O] = n(T),
    [k, A] = n(null),
    j = a(null),
    M = v(j, { once: !e.animation.replay, amount: `some` });
  _(s);
  let N = (e, t) => {
    m ||
      (k && k.stop(),
      O(t),
      A(
        b(e, t, {
          ...C,
          onUpdate: (e) => {
            E(e);
          },
        })
      ));
  };
  return (
    i(() => {
      x && p.trigger == `appear` && N(r, o);
    }, []),
    i(() => {
      x && p.trigger == `layerInView` && (M ? N(r, o) : (k && k.stop(), E(r)));
    }, [M]),
    i(() => {
      x || N(T, s);
    }, [s]),
    u(f, {
      children: [
        u(h, {
          style: {
            ...e.style,
            margin: 0,
            opacity: 0,
            pointerEvents: `none`,
            userSelect: `none`,
            textWrap: e.balance ? `balance` : void 0,
            fontVariantNumeric: e.monospace ? `tabular-nums` : void 0,
            textAlign: `center`,
            ...e.font,
          },
          children: [e.prefix, w(m ? S : D), e.suffix],
        }),
        u(y, {
          ref: j,
          style: {
            position: `absolute`,
            inset: 0,
            userSelect: e.userSelect ? `auto` : `none`,
            fontVariantNumeric: e.monospace ? `tabular-nums` : void 0,
            margin: 0,
            ...(d.mode == `solid`
              ? { color: d.color }
              : {
                  WebkitBackgroundClip: `text`,
                  WebkitTextFillColor: `transparent`,
                  backgroundImage: `linear-gradient(${d.angle}deg, ${d.startColor}, ${d.endColor})`,
                }),
            textDecoration: e.decoration,
            textWrap: e.balance ? `balance` : void 0,
            textAlign: `center`,
            ...e.font,
            ...e.style,
          },
          children: [e.prefix, w(m ? S : T), e.suffix],
        }),
      ],
    })
  );
}
var le = e(() => {
  (d(),
    M(),
    m(),
    S(),
    (V.displayName = `Animated Number Counter`),
    C(V, {
      mode: {
        type: I.Enum,
        options: [`default`, `variants`],
        optionTitles: [`Default`, `Variants`],
        displaySegmentedControl: !0,
      },
      value: { type: I.Number, defaultValue: 0, hidden: (e) => e.mode !== `variants` },
      start: { type: I.Number, defaultValue: 0, hidden: (e) => e.mode !== `default` },
      end: { type: I.Number, defaultValue: 100, hidden: (e) => e.mode !== `default` },
      animation: {
        type: I.Object,
        icon: `effect`,
        hidden: (e) => e.mode !== `default`,
        controls: {
          trigger: {
            type: I.Enum,
            defaultValue: `layerInView`,
            options: [`appear`, `layerInView`],
            optionTitles: [`Appear`, `Layer in View`],
            displaySegmentedControl: !0,
            segmentedControlDirection: `vertical`,
          },
          replay: {
            type: I.Boolean,
            defaultValue: !0,
            hidden(e) {
              return e.trigger !== `layerInView`;
            },
          },
          transition: {
            type: I.Transition,
            defaultValue: { type: `spring`, duration: 1, bounce: 0 },
          },
        },
      },
      transition: {
        type: I.Transition,
        defaultValue: { type: `spring`, duration: 1, bounce: 0 },
        hidden: (e) => e.mode !== `variants`,
      },
      decimals: {
        type: I.Enum,
        defaultValue: 0,
        options: [0, 1, 2, 3],
        optionTitles: [`Off`, `1`, `2`, `3`],
        displaySegmentedControl: !0,
      },
      commas: { type: I.Boolean, defaultValue: !0 },
      font: {
        type: `font`,
        controls: `extended`,
        defaultFontType: `sans-serif`,
        defaultValue: { fontSize: 16, lineHeight: 1 },
      },
      color: {
        type: I.Object,
        controls: {
          mode: {
            type: I.Enum,
            defaultValue: `solid`,
            options: [`solid`, `gradient`],
            optionTitles: [`Solid`, `Gradient`],
            displaySegmentedControl: !0,
          },
          color: { type: I.Color, defaultValue: `#000`, hidden: (e) => e.mode !== `solid` },
          startColor: { type: I.Color, defaultValue: `#000`, hidden: (e) => e.mode !== `gradient` },
          endColor: { type: I.Color, defaultValue: `#FFF`, hidden: (e) => e.mode !== `gradient` },
          angle: {
            type: I.Number,
            defaultValue: 180,
            min: -360,
            max: 360,
            unit: `°`,
            hidden: (e) => e.mode !== `gradient`,
          },
        },
      },
      prefix: { type: I.String, placeholder: `Prefix` },
      suffix: { type: I.String, placeholder: `Suffix` },
      decoration: {
        type: I.Enum,
        defaultValue: `none`,
        options: [`none`, `underline`, `line-through`],
        optionTitles: [`None`, `Underline`, `Strikethrough`],
      },
      balance: { type: I.Boolean, defaultValue: !1 },
      userSelect: { type: I.Boolean, defaultValue: !0 },
      tag: {
        type: I.Enum,
        defaultValue: `p`,
        displaySegmentedControl: !0,
        options: [`h1`, `h2`, `h3`, `p`],
        optionTitles: [`H1`, `H2`, `H3`, `P`],
      },
      monospace: {
        type: I.Boolean,
        defaultValue: !1,
        description: `More components at [Framer University](https://frameruni.link/cc).`,
      },
    }));
});
function H(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var U,
  W,
  ue,
  de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  G,
  ve,
  ye = e(() => {
    (d(),
      M(),
      S(),
      m(),
      le(),
      re(),
      (U = j(V)),
      (W = [`qD76UJiSR`, `SW3jjxh0X`, `IMrKtNhNw`, `eznhEw1kP`]),
      (ue = `framer-j0Hw1`),
      (de = {
        eznhEw1kP: `framer-v-1qpbtjz`,
        IMrKtNhNw: `framer-v-vduvwd`,
        qD76UJiSR: `framer-v-1ol7jdw`,
        SW3jjxh0X: `framer-v-1bmuthn`,
      }),
      (fe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (pe = ({ value: e, children: n }) => {
        let r = t(y),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(y.Provider, { value: a, children: n });
      }),
      (me = {
        "Demimal mobile": `eznhEw1kP`,
        Decimal: `SW3jjxh0X`,
        Desktop: `qD76UJiSR`,
        Mobile: `IMrKtNhNw`,
      }),
      (he = g.create(o)),
      (ge = ({
        border: e,
        end: t,
        height: n,
        id: r,
        prefix: i,
        suffix: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        CewSTn9J7: o ?? c.CewSTn9J7 ?? `Missions gérées`,
        eGHZh27YN: i ?? c.eGHZh27YN ?? `$`,
        ew0Bf3mzC: a ?? c.ew0Bf3mzC ?? `M+`,
        gPPCA9TeG: e ??
          c.gPPCA9TeG ?? {
            borderBottomWidth: 0,
            borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgba(0, 0, 0, 0.08)) /* {"name":"Dark 7 V"} */`,
            borderLeftWidth: 0,
            borderRightWidth: 1,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
        mrabgVCuf: t ?? c.mrabgVCuf ?? 25,
        variant: me[c.variant] ?? c.variant ?? `qD76UJiSR`,
      })),
      (_e = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = k(
        c(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = p(),
            { activeLocale: c, setLocale: l } = N();
          R();
          let {
              style: d,
              className: f,
              layoutId: m,
              variant: h,
              gPPCA9TeG: _,
              mrabgVCuf: v,
              eGHZh27YN: y,
              ew0Bf3mzC: b,
              CewSTn9J7: S,
              ...C
            } = ge(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: j,
              isLoading: M,
              setGestureState: F,
              setVariant: ee,
              variants: I,
            } = B({
              cycleOrder: W,
              defaultVariant: `qD76UJiSR`,
              ref: r,
              variant: h,
              variantClassNames: de,
            }),
            L = _e(e, I),
            z = D(ue, ie);
          return s(x, {
            id: m ?? i,
            children: s(he, {
              animate: I,
              initial: !1,
              children: s(pe, {
                value: fe,
                children: u(g.div, {
                  ...C,
                  ...A,
                  className: D(z, `framer-1ol7jdw`, f, E),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: L,
                  layoutId: `qD76UJiSR`,
                  ref: r,
                  style: {
                    "--border-bottom-width": (_?.borderBottomWidth ?? _?.borderWidth) + `px`,
                    "--border-color": _?.borderColor,
                    "--border-left-width": (_?.borderLeftWidth ?? _?.borderWidth) + `px`,
                    "--border-right-width": (_?.borderRightWidth ?? _?.borderWidth) + `px`,
                    "--border-style": _?.borderStyle,
                    "--border-top-width": (_?.borderTopWidth ?? _?.borderWidth) + `px`,
                    ...d,
                  },
                  ...H(
                    {
                      eznhEw1kP: { "data-framer-name": `Demimal mobile` },
                      IMrKtNhNw: { "data-framer-name": `Mobile` },
                      SW3jjxh0X: { "data-framer-name": `Decimal` },
                    },
                    T,
                    j
                  ),
                  children: [
                    s(P, {
                      children: s(O, {
                        className: `framer-18rdikx-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: L,
                        layoutId: `GG9iU1llf-container`,
                        nodeId: `GG9iU1llf`,
                        rendersWithMotion: !0,
                        scopeId: `BrUXNSFua`,
                        children: s(V, {
                          animation: {
                            replay: !1,
                            transition: {
                              damping: 60,
                              delay: 0.6,
                              mass: 1,
                              stiffness: 300,
                              type: `spring`,
                            },
                            trigger: `layerInView`,
                          },
                          balance: !1,
                          color: {
                            angle: 0,
                            color: `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                            endColor: `var(--token-b7414fe1-9732-476d-bfbc-24a58490d0a7, rgb(236, 235, 216))`,
                            mode: `solid`,
                            startColor: `rgb(20, 0, 9)`,
                          },
                          commas: !0,
                          decimals: 0,
                          decoration: `none`,
                          end: v,
                          font: {
                            fontFamily: `"Spectral", "Spectral Placeholder", serif`,
                            fontFeatureSettings: `'tnum' on`,
                            fontSize: `46px`,
                            fontStyle: `normal`,
                            fontWeight: 300,
                            letterSpacing: `-0.03em`,
                            lineHeight: `1.1em`,
                          },
                          height: `100%`,
                          id: `GG9iU1llf`,
                          layoutId: `GG9iU1llf`,
                          mode: `default`,
                          monospace: !1,
                          prefix: y,
                          start: 0,
                          suffix: b,
                          tag: `p`,
                          transition: { bounce: 0, delay: 0, duration: 1, type: `spring` },
                          userSelect: !1,
                          value: 14.36,
                          width: `100%`,
                          ...H(
                            {
                              eznhEw1kP: {
                                decimals: 1,
                                font: {
                                  fontFamily: `"Spectral", "Spectral Placeholder", serif`,
                                  fontFeatureSettings: `'tnum' on`,
                                  fontSize: `40px`,
                                  fontStyle: `normal`,
                                  fontWeight: 300,
                                  letterSpacing: `-0.03em`,
                                  lineHeight: `1.1em`,
                                },
                              },
                              IMrKtNhNw: {
                                font: {
                                  fontFamily: `"Spectral", "Spectral Placeholder", serif`,
                                  fontFeatureSettings: `'tnum' on`,
                                  fontSize: `40px`,
                                  fontStyle: `normal`,
                                  fontWeight: 300,
                                  letterSpacing: `-0.03em`,
                                  lineHeight: `1.1em`,
                                },
                              },
                              SW3jjxh0X: { decimals: 1 },
                            },
                            T,
                            j
                          ),
                        }),
                      }),
                    }),
                    s(w, {
                      __fromCanvasComponent: !0,
                      children: s(o, {
                        children: s(g.p, {
                          className: `framer-styles-preset-ar7l3c`,
                          "data-styles-preset": `VpaJFpv2y`,
                          dir: `auto`,
                          style: { "--framer-text-alignment": `center` },
                          children: `Missions gérées`,
                        }),
                      }),
                      className: `framer-k93e5h`,
                      fonts: [`Inter`],
                      layoutDependency: L,
                      layoutId: `cx3FBSrxo`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        opacity: 0.55,
                      },
                      text: S,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-j0Hw1.framer-1ewt0hn, .framer-j0Hw1 .framer-1ewt0hn { display: block; }`,
          `.framer-j0Hw1.framer-1ol7jdw { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 80px 40px 80px 40px; position: relative; width: 280px; }`,
          `.framer-j0Hw1 .framer-18rdikx-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-j0Hw1 .framer-k93e5h { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-j0Hw1.framer-v-vduvwd.framer-1ol7jdw, .framer-j0Hw1.framer-v-1qpbtjz.framer-1ol7jdw { gap: 4px; padding: 50px 26px 50px 26px; }`,
          ...ne,
          `.framer-j0Hw1[data-border="true"]::after, .framer-j0Hw1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-j0Hw1`
      )),
      (ve = G),
      (G.displayName = `Stat`),
      (G.defaultProps = { height: 242, width: 280 }),
      C(G, {
        variant: {
          options: [`qD76UJiSR`, `SW3jjxh0X`, `IMrKtNhNw`, `eznhEw1kP`],
          optionTitles: [`Desktop`, `Decimal`, `Mobile`, `Demimal mobile`],
          title: `Variant`,
          type: I.Enum,
        },
        gPPCA9TeG: {
          defaultValue: {
            borderBottomWidth: 0,
            borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgba(0, 0, 0, 0.08)) /* {"name":"Dark 7 V"} */`,
            borderLeftWidth: 0,
            borderRightWidth: 1,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
          title: `Border`,
          type: I.Border,
        },
        mrabgVCuf: { defaultValue: 25, title: `End`, type: I.Number },
        onmrabgVCufChange: { changes: `mrabgVCuf`, type: I.ChangeHandler },
        eGHZh27YN: { defaultValue: `$`, placeholder: `Prefix`, title: `Prefix`, type: I.String },
        oneGHZh27YNChange: { changes: `eGHZh27YN`, type: I.ChangeHandler },
        ew0Bf3mzC: { defaultValue: `M+`, placeholder: `Suffix`, title: `Suffix`, type: I.String },
        onew0Bf3mzCChange: { changes: `ew0Bf3mzC`, type: I.ChangeHandler },
        CewSTn9J7: {
          defaultValue: `Missions gérées`,
          displayTextArea: !1,
          title: `Title`,
          type: I.String,
        },
        onCewSTn9J7Change: { changes: `CewSTn9J7`, type: I.ChangeHandler },
      }),
      F(
        G,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Spectral`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Spectral`,
                url: `../../assets/fonts/rnCs-xNNww_2s0amA9uSsF3DY_etWWIJ.woff2`,
                weight: `300`,
              },
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
          ...U,
          ...E(te),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var be,
  xe,
  Se,
  Ce,
  q,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  J,
  Y,
  Ne = e(() => {
    (d(),
      M(),
      S(),
      m(),
      (be = [`VKhSss3P6`, `R58YKzQZS`]),
      (xe = `framer-iaa9B`),
      (Se = { R58YKzQZS: `framer-v-1lk3cb4`, VKhSss3P6: `framer-v-13uqwt8` }),
      (Ce = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (we = (e, t) => `translate(-50%, -50%) ${t}`),
      (Te = (e, t) => (typeof e == `number` && typeof t == `number` ? e > t : !1)),
      (Ee = (e, t = {}, n) => {
        let r = `en-US`,
          i = t.locale || n || r,
          {
            useGrouping: a,
            notation: o,
            compactDisplay: s,
            style: c,
            currency: l,
            currencyDisplay: u,
            unit: d,
            unitDisplay: f,
            minimumFractionDigits: p,
            maximumFractionDigits: m,
            minimumIntegerDigits: h,
          } = t,
          g = {
            useGrouping: a,
            notation: o,
            compactDisplay: s,
            style: c,
            currency: l,
            currencyDisplay: u,
            unit: d,
            unitDisplay: f,
            minimumFractionDigits: p,
            maximumFractionDigits: m,
            minimumIntegerDigits: h,
          },
          _ = Number(e);
        try {
          return _.toLocaleString(i, g);
        } catch {
          try {
            return _.toLocaleString(r, g);
          } catch {
            return _.toLocaleString();
          }
        }
      }),
      (De = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? t + e
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (Oe = ({ value: e, children: n }) => {
        let r = t(y),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(y.Provider, { value: a, children: n });
      }),
      (ke = { large: `VKhSss3P6`, small: `R58YKzQZS` }),
      (Ae = g.create(o)),
      (je = ({ count: e, height: t, id: n, image: r, width: i, ...a }) => ({
        ...a,
        H0c2q76rW: e ?? a.H0c2q76rW,
        TUrVk8ssO: r ??
          a.TUrVk8ssO ?? {
            pixelHeight: 2e3,
            pixelWidth: 2400,
            src: `../../assets/images/I9qriVDCVZV0wcmc1XFjqbe51eY.webp?width=2400&height=2000`,
            srcSet: `../../assets/images/I9qriVDCVZV0wcmc1XFjqbe51eY.webp 512w,../../assets/images/I9qriVDCVZV0wcmc1XFjqbe51eY.webp?scale-down-to=1024&width=2400&height=2000 1024w,../../assets/images/I9qriVDCVZV0wcmc1XFjqbe51eY.webp?scale-down-to=2048&width=2400&height=2000 2048w,../../assets/images/I9qriVDCVZV0wcmc1XFjqbe51eY.webp?width=2400&height=2000 2400w`,
          },
        variant: ke[a.variant] ?? a.variant ?? `VKhSss3P6`,
      })),
      (Me = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = k(
        c(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = p(),
            { activeLocale: c, setLocale: l } = N(),
            d = R(),
            {
              style: f,
              className: m,
              layoutId: h,
              variant: _,
              H0c2q76rW: v,
              TUrVk8ssO: y,
              ...b
            } = je(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: O,
              isLoading: k,
              setGestureState: j,
              setVariant: M,
              variants: P,
            } = B({
              cycleOrder: be,
              defaultVariant: `VKhSss3P6`,
              ref: r,
              variant: _,
              variantClassNames: Se,
            }),
            F = Me(e, P),
            I = D(xe),
            z = Te(v, 0),
            te = De(Ee(v, { locale: ``, notation: `standard`, style: `decimal` }, ee()), `+`);
          return s(x, {
            id: h ?? i,
            children: s(Ae, {
              animate: P,
              initial: !1,
              children: s(Oe, {
                value: Ce,
                children: u(g.div, {
                  ...b,
                  ...E,
                  className: D(I, `framer-13uqwt8`, m, C),
                  "data-framer-name": `large`,
                  layoutDependency: F,
                  layoutId: `VKhSss3P6`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                    ...f,
                  },
                  ...K({ R58YKzQZS: { "data-framer-name": `small` } }, S, O),
                  children: [
                    s(L, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: A((d?.y || 0) + ((d?.height || 40) * 0.5000000000000002 - 22)),
                        pixelHeight: 2e3,
                        pixelWidth: 2400,
                        sizes: `44px`,
                        ...q(y),
                      },
                      className: `framer-p7sriw`,
                      "data-border": !0,
                      layoutDependency: F,
                      layoutId: `u1_YQ2kon`,
                      style: {
                        "--border-bottom-width": `2px`,
                        "--border-color": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                        "--border-left-width": `2px`,
                        "--border-right-width": `2px`,
                        "--border-style": `solid`,
                        "--border-top-width": `2px`,
                      },
                      transformTemplate: we,
                      ...K(
                        {
                          R58YKzQZS: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: A(
                                (d?.y || 0) + ((d?.height || 30) * 0.5000000000000002 - 17)
                              ),
                              pixelHeight: 2e3,
                              pixelWidth: 2400,
                              sizes: `34px`,
                              ...q(y),
                            },
                          },
                        },
                        S,
                        O
                      ),
                    }),
                    z !== !1 &&
                      s(g.div, {
                        className: `framer-1skscl4`,
                        "data-border": !0,
                        "data-framer-name": `number`,
                        layoutDependency: F,
                        layoutId: `bKM8YDpHP`,
                        style: {
                          "--border-bottom-width": `2px`,
                          "--border-color": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                          "--border-left-width": `2px`,
                          "--border-right-width": `2px`,
                          "--border-style": `solid`,
                          "--border-top-width": `2px`,
                          backgroundColor: `rgb(0, 32, 48)`,
                        },
                        children: s(w, {
                          __fromCanvasComponent: !0,
                          children: s(o, {
                            children: s(g.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7VEFTQSBPcmJpdGVyLTYwMA==`,
                                "--framer-font-family": `"TASA Orbiter", "TASA Orbiter Placeholder", sans-serif`,
                                "--framer-font-size": `15px`,
                                "--framer-font-weight": `600`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                              },
                              children: `+0`,
                            }),
                          }),
                          className: `framer-nxi7pe`,
                          fonts: [`GF;TASA Orbiter-600`],
                          layoutDependency: F,
                          layoutId: `oiYD6ZrwI`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: te,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...K(
                            {
                              R58YKzQZS: {
                                children: s(o, {
                                  children: s(g.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==`,
                                      "--framer-font-family": `"Roboto Mono", monospace`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `12px`,
                                      "--framer-letter-spacing": `0.04em`,
                                      "--framer-line-height": `130%`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                      "--framer-text-transform": `uppercase`,
                                    },
                                    children: `+0`,
                                  }),
                                }),
                                fonts: [`GF;Roboto Mono-regular`],
                              },
                            },
                            S,
                            O
                          ),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-iaa9B.framer-1squpyl, .framer-iaa9B .framer-1squpyl { display: block; }`,
          `.framer-iaa9B.framer-13uqwt8 { height: 40px; overflow: visible; position: relative; width: 1px; }`,
          `.framer-iaa9B .framer-p7sriw { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 44px); left: 100%; overflow: visible; position: absolute; top: 50%; width: 44px; }`,
          `.framer-iaa9B .framer-1skscl4 { align-content: center; align-items: center; bottom: -2px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: center; left: -21px; overflow: visible; padding: 0px; position: absolute; right: -22px; top: -2px; }`,
          `.framer-iaa9B .framer-nxi7pe { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-iaa9B.framer-v-1lk3cb4.framer-13uqwt8 { height: 30px; }`,
          `.framer-iaa9B.framer-v-1lk3cb4 .framer-p7sriw { height: var(--framer-aspect-ratio-supported, 34px); width: 34px; }`,
          `.framer-iaa9B.framer-v-1lk3cb4 .framer-1skscl4 { left: -16px; right: -17px; }`,
          `.framer-iaa9B[data-border="true"]::after, .framer-iaa9B [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-iaa9B`
      )),
      (Y = J),
      (J.displayName = `image carousel`),
      (J.defaultProps = { height: 40, width: 1 }),
      C(J, {
        variant: {
          options: [`VKhSss3P6`, `R58YKzQZS`],
          optionTitles: [`large`, `small`],
          title: `Variant`,
          type: I.Enum,
        },
        H0c2q76rW: { defaultValue: 0, title: `Count`, type: I.Number },
        onH0c2q76rWChange: { changes: `H0c2q76rW`, type: I.ChangeHandler },
        TUrVk8ssO: {
          __defaultAssetReference: `data:framer/asset-reference,I9qriVDCVZV0wcmc1XFjqbe51eY.webp?originalFilename=Professional+Portrait+%281%29.webp&width=2400&height=2000`,
          title: `Image`,
          type: I.ResponsiveImage,
        },
      }),
      F(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `TASA Orbiter`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `TASA Orbiter`,
                url: `https://fonts.gstatic.com/s/tasaorbiter/v2/3XF4Erw3860rsdSUVZx78hPcTvQoDGHxaFGfVKAF8pm095IuGcc.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Roboto Mono`,
                openType: !0,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Roboto Mono`,
                url: `https://fonts.gstatic.com/s/robotomono/v31/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vqPRu-5Ip2sSQ.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Pe,
  Fe,
  Ie,
  Le,
  X,
  Z,
  Re,
  Q,
  ze,
  Be,
  $,
  Ve,
  He = e(() => {
    (d(),
      M(),
      S(),
      m(),
      Ne(),
      (Pe = j(Y)),
      (Fe = `framer-PZjHo`),
      (Ie = { IwimhvHzj: `framer-v-183f0y6` }),
      (Le = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (X = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Re = ({ value: e, children: n }) => {
        let r = t(y),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(y.Provider, { value: a, children: n });
      }),
      (Q = g.create(o)),
      (ze = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Be = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = k(
        c(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = p(),
            { activeLocale: o, setLocale: c } = N(),
            l = R(),
            { style: d, className: f, layoutId: m, variant: h, ..._ } = ze(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: k,
            } = B({ defaultVariant: `IwimhvHzj`, ref: r, variant: h, variantClassNames: Ie }),
            A = Be(e, k),
            j = D(Fe);
          return s(x, {
            id: m ?? i,
            children: s(Q, {
              animate: k,
              initial: !1,
              children: s(Re, {
                value: Le,
                children: s(g.div, {
                  ..._,
                  ...S,
                  className: D(j, `framer-183f0y6`, f, y),
                  "data-framer-name": `Large`,
                  layoutDependency: A,
                  layoutId: `IwimhvHzj`,
                  ref: r,
                  style: { ...d },
                  children: u(g.div, {
                    className: `framer-1ja1lrs`,
                    "data-framer-name": `small`,
                    layoutDependency: A,
                    layoutId: `aQRtEggLH`,
                    children: [
                      s(P, {
                        height: 44,
                        width: `1px`,
                        y: (l?.y || 0) + (0 + ((l?.height || 44) - 0 - 44) / 2) + 0,
                        children: s(O, {
                          className: `framer-vrlert-container`,
                          layoutDependency: A,
                          layoutId: `gHAZOPloa-container`,
                          nodeId: `gHAZOPloa`,
                          rendersWithMotion: !0,
                          scopeId: `zI8GMzVBf`,
                          children: s(Y, {
                            H0c2q76rW: 0,
                            height: `100%`,
                            id: `gHAZOPloa`,
                            layoutId: `gHAZOPloa`,
                            style: { height: `100%`, width: `100%` },
                            TUrVk8ssO: X(
                              {
                                pixelHeight: 1888,
                                pixelWidth: 2141,
                                src: `../../assets/images/81IQ1AqCJzpXqNUrK5tqdQ3VM0A.webp?width=2141&height=1888`,
                                srcSet: `../../assets/images/81IQ1AqCJzpXqNUrK5tqdQ3VM0A.webp 512w,../../assets/images/81IQ1AqCJzpXqNUrK5tqdQ3VM0A.webp?scale-down-to=1024&width=2141&height=1888 1024w,../../assets/images/81IQ1AqCJzpXqNUrK5tqdQ3VM0A.webp?scale-down-to=2048&width=2141&height=1888 2048w,../../assets/images/81IQ1AqCJzpXqNUrK5tqdQ3VM0A.webp?width=2141&height=1888 2141w`,
                              },
                              ``
                            ),
                            variant: Z(`VKhSss3P6`),
                            width: `100%`,
                          }),
                        }),
                      }),
                      s(P, {
                        height: 44,
                        width: `1px`,
                        y: (l?.y || 0) + (0 + ((l?.height || 44) - 0 - 44) / 2) + 0,
                        children: s(O, {
                          className: `framer-dm1og3-container`,
                          layoutDependency: A,
                          layoutId: `TWMbQLzg0-container`,
                          nodeId: `TWMbQLzg0`,
                          rendersWithMotion: !0,
                          scopeId: `zI8GMzVBf`,
                          children: s(Y, {
                            H0c2q76rW: 0,
                            height: `100%`,
                            id: `TWMbQLzg0`,
                            layoutId: `TWMbQLzg0`,
                            style: { height: `100%`, width: `100%` },
                            TUrVk8ssO: X(
                              {
                                pixelHeight: 1719,
                                pixelWidth: 1963,
                                src: `../../assets/images/w41AXcDMBcHrHYBUQxvKTXSHryg.webp?width=1963&height=1719`,
                                srcSet: `../../assets/images/w41AXcDMBcHrHYBUQxvKTXSHryg.webp 512w,../../assets/images/w41AXcDMBcHrHYBUQxvKTXSHryg.webp?scale-down-to=1024&width=1963&height=1719 1024w,../../assets/images/w41AXcDMBcHrHYBUQxvKTXSHryg.webp?width=1963&height=1719 1963w`,
                              },
                              ``
                            ),
                            variant: Z(`VKhSss3P6`),
                            width: `100%`,
                          }),
                        }),
                      }),
                      s(P, {
                        height: 44,
                        width: `1px`,
                        y: (l?.y || 0) + (0 + ((l?.height || 44) - 0 - 44) / 2) + 0,
                        children: s(O, {
                          className: `framer-k6wc4w-container`,
                          layoutDependency: A,
                          layoutId: `rxceE8zwr-container`,
                          nodeId: `rxceE8zwr`,
                          rendersWithMotion: !0,
                          scopeId: `zI8GMzVBf`,
                          children: s(Y, {
                            H0c2q76rW: 0,
                            height: `100%`,
                            id: `rxceE8zwr`,
                            layoutId: `rxceE8zwr`,
                            style: { height: `100%`, width: `100%` },
                            TUrVk8ssO: X(
                              {
                                pixelHeight: 1876,
                                pixelWidth: 2104,
                                src: `../../assets/images/Obsj0bYfh5mVMrE50GtEV8Gew.webp?width=2104&height=1876`,
                                srcSet: `../../assets/images/Obsj0bYfh5mVMrE50GtEV8Gew.webp 512w,../../assets/images/Obsj0bYfh5mVMrE50GtEV8Gew.webp?scale-down-to=1024&width=2104&height=1876 1024w,../../assets/images/Obsj0bYfh5mVMrE50GtEV8Gew.webp?scale-down-to=2048&width=2104&height=1876 2048w,../../assets/images/Obsj0bYfh5mVMrE50GtEV8Gew.webp?width=2104&height=1876 2104w`,
                              },
                              `03 female image of trusted person`
                            ),
                            variant: Z(`VKhSss3P6`),
                            width: `100%`,
                          }),
                        }),
                      }),
                      s(P, {
                        height: 44,
                        width: `1px`,
                        y: (l?.y || 0) + (0 + ((l?.height || 44) - 0 - 44) / 2) + 0,
                        children: s(O, {
                          className: `framer-dq7euv-container`,
                          layoutDependency: A,
                          layoutId: `LKypWmLns-container`,
                          nodeId: `LKypWmLns`,
                          rendersWithMotion: !0,
                          scopeId: `zI8GMzVBf`,
                          children: s(Y, {
                            H0c2q76rW: 0,
                            height: `100%`,
                            id: `LKypWmLns`,
                            layoutId: `LKypWmLns`,
                            style: { height: `100%`, width: `100%` },
                            TUrVk8ssO: X(
                              {
                                pixelHeight: 1711,
                                pixelWidth: 2096,
                                src: `../../assets/images/FLEiFyH45MBJz4XNfg311YjUfY.webp?width=2096&height=1711`,
                                srcSet: `../../assets/images/FLEiFyH45MBJz4XNfg311YjUfY.webp 512w,../../assets/images/FLEiFyH45MBJz4XNfg311YjUfY.webp?scale-down-to=1024&width=2096&height=1711 1024w,../../assets/images/FLEiFyH45MBJz4XNfg311YjUfY.webp?scale-down-to=2048&width=2096&height=1711 2048w,../../assets/images/FLEiFyH45MBJz4XNfg311YjUfY.webp?width=2096&height=1711 2096w`,
                              },
                              ``
                            ),
                            variant: Z(`VKhSss3P6`),
                            width: `100%`,
                          }),
                        }),
                      }),
                      s(P, {
                        height: 40,
                        width: `1px`,
                        y: (l?.y || 0) + (0 + ((l?.height || 44) - 0 - 44) / 2) + 2,
                        children: s(O, {
                          className: `framer-1i932qt-container`,
                          layoutDependency: A,
                          layoutId: `jf_E5Wjc5-container`,
                          nodeId: `jf_E5Wjc5`,
                          rendersWithMotion: !0,
                          scopeId: `zI8GMzVBf`,
                          children: s(Y, {
                            H0c2q76rW: 95,
                            height: `100%`,
                            id: `jf_E5Wjc5`,
                            layoutId: `jf_E5Wjc5`,
                            style: { height: `100%`, width: `100%` },
                            TUrVk8ssO: X(
                              {
                                pixelHeight: 1600,
                                pixelWidth: 2400,
                                src: `../../assets/images/mjhln2uxr60nZZcNijA2pRv8I.webp?width=2400&height=1600`,
                                srcSet: `../../assets/images/mjhln2uxr60nZZcNijA2pRv8I.webp 512w,../../assets/images/mjhln2uxr60nZZcNijA2pRv8I.webp 1024w,../../assets/images/mjhln2uxr60nZZcNijA2pRv8I.webp?scale-down-to=2048&width=2400&height=1600 2048w,../../assets/images/mjhln2uxr60nZZcNijA2pRv8I.webp?width=2400&height=1600 2400w`,
                              },
                              ``
                            ),
                            variant: Z(`VKhSss3P6`),
                            width: `100%`,
                          }),
                        }),
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
          `.framer-PZjHo.framer-2zo21a, .framer-PZjHo .framer-2zo21a { display: block; }`,
          `.framer-PZjHo.framer-183f0y6 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-PZjHo .framer-1ja1lrs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: center; overflow: visible; padding: 0px 22px 0px 22px; position: relative; width: min-content; }`,
          `.framer-PZjHo .framer-vrlert-container, .framer-PZjHo .framer-dm1og3-container, .framer-PZjHo .framer-k6wc4w-container, .framer-PZjHo .framer-dq7euv-container { flex: none; height: 44px; position: relative; width: 1px; }`,
          `.framer-PZjHo .framer-1i932qt-container { flex: none; height: 40px; position: relative; width: 1px; }`,
        ],
        `framer-PZjHo`
      )),
      (Ve = $),
      ($.displayName = `Trust Image`),
      ($.defaultProps = { height: 44, width: 153 }),
      F($, [{ explicitInter: !0, fonts: [] }, ...Pe], { supportsExplicitInterCodegen: !0 }),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([T(Y, {}, t)])) }));
  });
export { V as a, ce as c, ye as i, Ve as n, le as o, ve as r, ae as s, He as t };
//# sourceMappingURL=zI8GMzVBf.BzfYbh5R.mjs.map
