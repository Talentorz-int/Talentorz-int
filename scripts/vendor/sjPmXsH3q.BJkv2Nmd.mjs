import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import {
  A as t,
  F as n,
  L as r,
  M as i,
  N as a,
  O as o,
  P as s,
  S as ee,
  T as c,
  _ as te,
  c as l,
  g as u,
  j as ne,
  k as re,
  l as d,
  o as f,
  v as ie,
  w as p,
  y as ae,
  z as m,
} from "./react.DXuyTrsy.mjs";
import {
  B as oe,
  C as h,
  G as se,
  L as ce,
  P as le,
  a as g,
  h as ue,
  r as de,
  t as _,
} from "./motion.C4Ab7j_2.mjs";
import {
  A as v,
  N as fe,
  O as pe,
  St as me,
  V as he,
  Y as ge,
  ht as _e,
  i as ve,
  k as y,
  o as b,
  p as x,
  st as ye,
  w as be,
  xt as xe,
} from "./framer.A_mnCMV8.mjs";
var S,
  C = e(() => {
    S = (e) => e;
  }),
  w = e(() => {
    C();
  }),
  T = e(() => {
    w();
  });
function E(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Se = e(() => {}),
  D,
  O = e(() => {
    ((D = {}),
      Object.defineProperty(D, `__esModule`, { value: !0 }),
      (D.warning = function () {}),
      (D.invariant = function () {}),
      D.__esModule,
      D.warning,
      D.invariant);
  }),
  k = e(() => {
    C();
  });
function A(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function j(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = A(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Ae[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function M(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function Ce({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = K.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return M(e, n);
        },
      });
    });
}
function we(e) {
  e.forEach(Ce);
}
function N() {
  typeof ResizeObserver < `u` && (q = new ResizeObserver(we));
}
function P(e, t) {
  q || N();
  let n = A(e);
  return (
    n.forEach((e) => {
      let n = K.get(e);
      (n || ((n = new Set()), K.set(e, n)), n.add(t), q?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = K.get(e);
        (n?.delete(t), (n != null && n.size) || q == null || q.unobserve(e));
      });
    }
  );
}
function F() {
  ((Y = () => {
    let e = { width: m.innerWidth, height: m.innerHeight },
      t = { target: m, size: e, contentSize: e };
    J.forEach((e) => e(t));
  }),
    m.addEventListener(`resize`, Y));
}
function Te(e) {
  return (
    J.add(e),
    Y || F(),
    () => {
      (J.delete(e), !J.size && Y && (Y = void 0));
    }
  );
}
function Ee(e, t) {
  return typeof e == `function` ? Te(e) : P(e, t);
}
function I(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function L(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var R,
  z,
  B,
  V,
  H,
  De,
  U,
  W,
  G,
  Oe,
  ke,
  Ae,
  K,
  q,
  J,
  Y,
  je,
  Me,
  Ne,
  Pe = e(() => {
    for (let e in (r(),
    C(),
    T(),
    Se(),
    O(),
    k(),
    (R = [``, `X`, `Y`, `Z`]),
    (z = [`translate`, `scale`, `rotate`, `skew`]),
    (B = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
    (V = {
      translate: {
        syntax: `<length-percentage>`,
        initialValue: `0px`,
        toDefaultUnit: (e) => e + `px`,
      },
      rotate: B,
      scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: S },
      skew: B,
    }),
    (H = new Map()),
    (De = (e) => `--motion-${e}`),
    (U = [`x`, `y`, `z`]),
    z.forEach((e) => {
      R.forEach((t) => {
        (U.push(e + t), H.set(De(e + t), V[e]));
      });
    }),
    new Set(U),
    (W = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
    (G = {
      cssRegisterProperty: () =>
        typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
      partialKeyframes: () => {
        try {
          W({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () => !!W({ opacity: [0, 1] }).finished,
    }),
    (Oe = {}),
    (ke = {}),
    G))
      ke[e] = () => (Oe[e] === void 0 && (Oe[e] = G[e]()), Oe[e]);
    ((Ae = { any: 0, all: 1 }),
      (K = new WeakMap()),
      (J = new Set()),
      (je = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return j(
            e,
            (r) => {
              if ((t(), L(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), L(e, `viewleave`, t));
                };
            },
            E(r, [`once`])
          );
        },
      }),
      (Me = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), I(e, t, r));
      }),
      (Ne = {
        inView: je,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = Me(e, `hoverstart`, t),
              i = Me(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), I(e, `pressend`, t), m.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), I(e, `pressstart`, n), m.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), m.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(Ne)]);
  });
function X(e) {
  let {
      slots: t = [],
      gap: r,
      padding: s,
      paddingPerSide: u,
      paddingTop: f,
      paddingRight: ie,
      paddingBottom: p,
      paddingLeft: ae,
      speed: m,
      hoverFactor: g,
      direction: _,
      alignment: v,
      sizingOptions: fe,
      fadeOptions: pe,
      style: me,
    } = e,
    { fadeContent: he, overflow: ge, fadeWidth: _e, fadeInset: ve, fadeAlpha: y } = pe,
    { widthType: b, heightType: x } = fe,
    ye = u ? `${f}px ${ie}px ${p}px ${ae}px` : `${s}px`,
    xe = be.current(),
    S = xe === be.canvas || xe === be.export,
    C = Fe(),
    w = t.filter(Boolean),
    T = c.count(w),
    E = T > 0,
    Se = ce(0),
    D = Ie(_ === !0 ? `left` : _, C),
    O = D === `left` || D === `right`,
    k = Re[D];
  se(Se, k);
  let A = o(null),
    j = ne(() => [{ current: null }, { current: null }], []),
    [M, Ce] = n({ parent: null, children: null }),
    we = null,
    N = [],
    P = 0,
    F = 0;
  (S && ((P = T ? Math.floor(10 / T) : 0), (F = 1)),
    !S &&
      E &&
      M.parent &&
      ((P = Math.round((M.parent / M.children) * 2) + 1), (P = Math.min(P, Le)), (F = 1)));
  let Te = i(() => {
      if (E && A.current) {
        let e = O ? A.current.offsetWidth : A.current.offsetHeight,
          t = j[0].current ? (O ? j[0].current.offsetLeft : j[0].current.offsetTop) : 0,
          n =
            (j[1].current
              ? O
                ? j[1].current.offsetLeft + j[1].current.offsetWidth
                : j[1].current.offsetTop + j[1].current.offsetHeight
              : 0) -
            t +
            r;
        te(() => {
          Ce({ parent: e, children: n });
        });
      }
    }, []),
    I = S ? { contentVisibility: `auto` } : {};
  if (E) {
    if (!S) {
      let e = o(!0);
      ee(
        () => (
          ue.read(Te, !1, !0),
          Ee(A.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && ue.read(Te, !1, !0), (e.current = !1));
          })
        ),
        []
      );
    }
    we = c.map(w, (e, t) => {
      let n;
      (t === 0 && (n = j[C === `rtl` && O ? 1 : 0]),
        t === w.length - 1 && (n = j[C === `rtl` && O ? 0 : 1]));
      let r = { width: b ? e.props?.width : `100%`, height: x ? e.props?.height : `100%` };
      return l(de, {
        inherit: `id`,
        children: l(ze, {
          ref: n,
          style: r,
          children: re(
            e,
            {
              style: { ...e.props?.style, ...r, flexShrink: 0, ...I },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + t : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  let L = S ? !0 : le(A);
  if (!S)
    for (let e = 0; e < P; e++)
      N = N.concat(
        c.map(w, (t, n) =>
          l(
            de,
            {
              inherit: `id`,
              children: l(
                ze,
                {
                  style: {
                    width: b ? t.props?.width : `100%`,
                    height: x ? t.props?.height : `100%`,
                    willChange: L ? `transform` : void 0,
                  },
                  children: re(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: b ? t.props?.width : `100%`,
                        height: x ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...I,
                      },
                      layoutId: t.props.layoutId ? t.props.layoutId + `-dupe-` + e : void 0,
                    },
                    t.props?.children
                  ),
                },
                e + `li` + n
              ),
            },
            e + `lg` + n
          )
        )
      );
  let R = M.children + M.children * Math.round(M.parent / M.children);
  (o(null), o(null), o(0));
  let z = o(!1),
    B = oe(),
    V = o(null),
    H = o(null);
  if (!S) {
    a(() => {
      if (!(B || !R || !m))
        return (
          (H.current = V.current.animate(
            { transform: [k(0), k(R)] },
            {
              duration: (Math.abs(R) / m) * 1e3,
              iterations: 1 / 0,
              iterationStart: C === `rtl` ? 1 : 0,
              easing: `linear`,
            }
          )),
          () => H.current.cancel()
        );
    }, [g, R, m, C]);
    let e = i(() => {
      if (!H.current) return;
      let e = document.hidden;
      L && !e && H.current.playState === `paused`
        ? H.current.play()
        : (!L || e) && H.current.playState === `running` && H.current.pause();
    }, [L]);
    (a(() => {
      e();
    }, [L, g, R, m]),
      a(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e]
      ));
  }
  let De = O ? `to right` : `to bottom`,
    U = _e / 2,
    W = 100 - _e / 2,
    G = `linear-gradient(${De}, rgba(0, 0, 0, ${y}) ${Ge(ve, 0, U)}%, rgba(0, 0, 0, 1) ${U}%, rgba(0, 0, 0, 1) ${W}%, rgba(0, 0, 0, ${y}) ${100 - ve}%)`;
  return E
    ? l(`section`, {
        style: {
          ...Be,
          opacity: F,
          WebkitMaskImage: he ? G : void 0,
          maskImage: he ? G : void 0,
          overflow: ge ? `visible` : `hidden`,
          padding: ye,
        },
        ref: A,
        children: d(h.ul, {
          ref: V,
          style: {
            ...Be,
            gap: r,
            top: _ === `bottom` && Ke(R) ? -R : void 0,
            left: _ === `right` && Ke(R) ? R * (C === `rtl` ? 1 : -1) : void 0,
            placeItems: v,
            position: `relative`,
            flexDirection: O ? `row` : `column`,
            ...me,
            willChange: S || !L ? `auto` : `transform`,
            transform: k(0),
          },
          onMouseEnter: () => {
            ((z.current = !0), H.current && (H.current.playbackRate = g));
          },
          onMouseLeave: () => {
            ((z.current = !1), H.current && (H.current.playbackRate = 1));
          },
          children: [we, N],
        }),
      })
    : d(`section`, {
        style: Ve,
        children: [
          l(`div`, { style: He, children: `✨` }),
          l(`p`, { style: Ue, children: `Connecter au contenu` }),
          l(`p`, {
            style: We,
            children: `Ajoutez des éléments pour créer une boucle infinie sur votre page.`,
          }),
        ],
      });
}
function Fe() {
  return !m || !m.document || !m.document.documentElement
    ? `ltr`
    : m.document.documentElement.dir === `rtl`
      ? `rtl`
      : `ltr`;
}
function Ie(e, t) {
  return t === `rtl` ? (e === `left` ? `right` : e === `right` ? `left` : e) : e;
}
var Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe = e(() => {
    (r(),
      f(),
      p(),
      ge(),
      _(),
      Pe(),
      (Le = 100),
      (Re = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (ze = u(({ children: e, ...t }, n) => {
        let r = o(),
          i = le(r);
        return (
          ae(n, () => r.current),
          a(() => {
            let e = r.current;
            e &&
              (i
                ? e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = t) : e.removeAttribute(`tabIndex`);
                  })
                : e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }));
          }, [i]),
          l(`li`, { ...t, "aria-hidden": !i, ref: r, children: e })
        );
      })),
      (X.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      v(X, {
        slots: { type: b.Array, title: `Children`, control: { type: b.ComponentInstance } },
        speed: {
          type: b.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: b.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: b.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: b.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: b.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: b.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: b.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: b.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: b.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: b.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: b.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: b.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: b.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: b.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: b.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Be = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Ve = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (He = { fontSize: 32, marginBottom: 10 }),
      (Ue = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (We = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      (Ge = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Ke = (e) => typeof e == `number` && !isNaN(e)));
  });
function Je(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  Z,
  Q,
  tt,
  nt,
  rt,
  it,
  at,
  $,
  ot,
  st = e(() => {
    (f(),
      ge(),
      _(),
      p(),
      qe(),
      (Ye = he(X)),
      (Xe = [`E3oWvrbso`, `CVgtV8Pd3`]),
      (Ze = `framer-AFmKE`),
      (Qe = { CVgtV8Pd3: `framer-v-1rm4upk`, E3oWvrbso: `framer-v-1nvmd74` }),
      ($e = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (et = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Z = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (tt = ({ value: e, children: n }) => {
        let r = t(g),
          i = e ?? r.transition,
          a = ne(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(g.Provider, { value: a, children: n });
      }),
      (nt = { desktop: `E3oWvrbso`, phone: `CVgtV8Pd3` }),
      (rt = h.create(s)),
      (it = ({
        height: e,
        id: t,
        logo1: n,
        logo2: r,
        logo3: i,
        logo4: a,
        logo5: o,
        logo6: s,
        logo7: ee,
        logo8: c,
        padding: te,
        width: l,
        ...u
      }) => ({
        ...u,
        AECIv4vE2: te ?? u.AECIv4vE2 ?? `0px`,
        dvPB7qgO4: c ??
          u.dvPB7qgO4 ?? {
            alt: ``,
            pixelHeight: 469,
            pixelWidth: 1280,
            src: `../../assets/images/logo-ubs.png`,
            srcSet: `../../assets/images/logo-ubs.png 512w,../../assets/images/logo-ubs.png?width=608&height=192 608w`,
          },
        GyD1ttewD: n ??
          u.GyD1ttewD ?? {
            alt: ``,
            pixelHeight: 192,
            pixelWidth: 752,
            src: `https://framerusercontent.com/images/N6vaTvuu4CX66N8wNquDginaeY.png?width=752&height=192`,
            srcSet: `https://framerusercontent.com/images/N6vaTvuu4CX66N8wNquDginaeY.png?scale-down-to=512&width=752&height=192 512w,https://framerusercontent.com/images/N6vaTvuu4CX66N8wNquDginaeY.png?width=752&height=192 752w`,
          },
        i_eIh_Uhb: r ??
          u.i_eIh_Uhb ?? {
            pixelHeight: 223,
            pixelWidth: 595,
            src: `../../assets/images/SWISSCOM.png`,
          },
        kfUFxmlX7: a ??
          u.kfUFxmlX7 ?? {
            alt: ``,
            pixelHeight: 192,
            pixelWidth: 788,
            src: `https://framerusercontent.com/images/UZyFAbhPvJiZZNlUCLMV2ufRX4.png?width=788&height=192`,
            srcSet: `https://framerusercontent.com/images/UZyFAbhPvJiZZNlUCLMV2ufRX4.png?scale-down-to=512&width=788&height=192 512w,https://framerusercontent.com/images/UZyFAbhPvJiZZNlUCLMV2ufRX4.png?width=788&height=192 788w`,
          },
        Q6EI_IIR8: ee ??
          u.Q6EI_IIR8 ?? {
            pixelHeight: 750,
            pixelWidth: 750,
            src: `../../assets/images/infomaniak-logo.png`,
          },
        sLG9eB2Tx: i ??
          u.sLG9eB2Tx ?? {
            pixelHeight: 750,
            pixelWidth: 750,
            src: `../../assets/images/infomaniak-logo.png`,
          },
        uUhgQCWFN: s ??
          u.uUhgQCWFN ?? {
            alt: ``,
            pixelHeight: 192,
            pixelWidth: 696,
            src: `https://framerusercontent.com/images/EiBiN3ktJSFPKkS1vWdMZOdl4.png?width=696&height=192`,
            srcSet: `https://framerusercontent.com/images/EiBiN3ktJSFPKkS1vWdMZOdl4.png?scale-down-to=512&width=696&height=192 512w,https://framerusercontent.com/images/EiBiN3ktJSFPKkS1vWdMZOdl4.png?width=696&height=192 696w`,
          },
        variant: nt[u.variant] ?? u.variant ?? `E3oWvrbso`,
        Y44YPh6HI: o ??
          u.Y44YPh6HI ?? {
            alt: ``,
            pixelHeight: 192,
            pixelWidth: 720,
            src: `https://framerusercontent.com/images/WrhHAHIJIldPiPiy6UPC1VCF18.png?width=720&height=192`,
            srcSet: `https://framerusercontent.com/images/WrhHAHIJIldPiPiy6UPC1VCF18.png?scale-down-to=512&width=720&height=192 512w,https://framerusercontent.com/images/WrhHAHIJIldPiPiy6UPC1VCF18.png?width=720&height=192 720w`,
          },
      })),
      (at = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = me(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = ie(),
            { activeLocale: a, setLocale: s } = _e();
          ye();
          let {
              style: ee,
              className: c,
              layoutId: te,
              variant: u,
              AECIv4vE2: ne,
              GyD1ttewD: re,
              i_eIh_Uhb: d,
              sLG9eB2Tx: f,
              kfUFxmlX7: p,
              Y44YPh6HI: ae,
              uUhgQCWFN: m,
              Q6EI_IIR8: oe,
              dvPB7qgO4: se,
              ...ce
            } = it(e),
            {
              baseVariant: le,
              classNames: g,
              clearLoadingGesture: ue,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: me,
              setGestureState: he,
              setVariant: ge,
              variants: y,
            } = xe({
              cycleOrder: Xe,
              defaultVariant: `E3oWvrbso`,
              ref: r,
              variant: u,
              variantClassNames: Qe,
            }),
            b = at(e, y),
            be = fe(Ze),
            S = Z(re),
            C = Z(d),
            w = Z(p),
            T = Z(ae),
            E = Z(m),
            Se = Z(oe),
            D = Z(se);
          return l(de, {
            id: te ?? i,
            children: l(rt, {
              animate: y,
              initial: !1,
              children: l(tt, {
                value: et,
                children: l(h.div, {
                  ...ce,
                  ..._,
                  className: fe(be, `framer-1nvmd74`, c, g),
                  "data-framer-name": `desktop`,
                  layoutDependency: b,
                  layoutId: `E3oWvrbso`,
                  ref: r,
                  style: { "--alhc9e": $e(ne), ...ee },
                  ...Je({ CVgtV8Pd3: { "data-framer-name": `phone` } }, le, v),
                  children: l(ve, {
                    children: l(pe, {
                      className: `framer-15kln3a-container`,
                      "data-framer-name": `ticker`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: b,
                      layoutId: `YxychPr3D-container`,
                      name: `ticker`,
                      nodeId: `YxychPr3D`,
                      rendersWithMotion: !0,
                      scopeId: `sjPmXsH3q`,
                      children: l(X, {
                        alignment: `center`,
                        direction: `left`,
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !0,
                          fadeInset: 0,
                          fadeWidth: 25,
                          overflow: !1,
                        },
                        gap: 80,
                        height: `100%`,
                        hoverFactor: 1,
                        id: `YxychPr3D`,
                        layoutId: `YxychPr3D`,
                        name: `ticker`,
                        padding: 0,
                        paddingBottom: 24,
                        paddingLeft: 12,
                        paddingPerSide: !1,
                        paddingRight: 12,
                        paddingTop: 0,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          S !== !1 &&
                            l(h.div, {
                              className: `framer-1v1rfu4`,
                              "data-framer-name": `logo 1`,
                              layoutDependency: b,
                              layoutId: `LUY2RYRWr`,
                              style: { opacity: 0.75 },
                              children: l(x, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 96,
                                  intrinsicWidth: 376,
                                  pixelHeight: 192,
                                  pixelWidth: 752,
                                  sizes: `109.6667px`,
                                  ...Q(re),
                                },
                                className: `framer-fqhext`,
                                "data-framer-name": `Company logo`,
                                fitImageDimension: `width`,
                                layoutDependency: b,
                                layoutId: `qdFTapR1i`,
                                style: { opacity: 0.6 },
                              }),
                            }),
                          C !== !1 &&
                            l(h.div, {
                              className: `framer-1is0if4`,
                              "data-framer-name": `logo 2`,
                              layoutDependency: b,
                              layoutId: `GB_xc83BU`,
                              style: { opacity: 0.75 },
                              children: l(x, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 96,
                                  intrinsicWidth: 392,
                                  pixelHeight: 27,
                                  pixelWidth: 104,
                                  sizes: `96.2963px`,
                                  ...Q(d),
                                },
                                className: `framer-1ow63wq`,
                                "data-framer-name": `Company logo-10`,
                                fitImageDimension: `width`,
                                layoutDependency: b,
                                layoutId: `zAkMq3raF`,
                                style: { opacity: 0.6 },
                              }),
                            }),
                          l(x, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              pixelHeight: 78,
                              pixelWidth: 351,
                              sizes: `98px`,
                              ...Q(f),
                            },
                            className: `framer-38c862`,
                            "data-framer-name": `logo 3`,
                            layoutDependency: b,
                            layoutId: `Inu_QIvfK`,
                            style: { opacity: 0.75 },
                            children: l(x, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 96,
                                intrinsicWidth: 362,
                                pixelHeight: 78,
                                pixelWidth: 351,
                                sizes: `117px`,
                                ...Q(f),
                              },
                              className: `framer-78rdc3`,
                              "data-framer-name": `Company logo-9`,
                              fitImageDimension: `width`,
                              layoutDependency: b,
                              layoutId: `RgC_jySW_`,
                              style: { opacity: 0.6 },
                            }),
                          }),
                          w !== !1 &&
                            l(h.div, {
                              className: `framer-t16qpc`,
                              "data-framer-name": `logo 4`,
                              layoutDependency: b,
                              layoutId: `D5A9fVy05`,
                              style: { opacity: 0.75 },
                              children: l(x, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 96,
                                  intrinsicWidth: 394,
                                  pixelHeight: 192,
                                  pixelWidth: 788,
                                  sizes: `102.6042px`,
                                  ...Q(p),
                                },
                                className: `framer-1azz3rh`,
                                "data-framer-name": `Company logo-8`,
                                fitImageDimension: `width`,
                                layoutDependency: b,
                                layoutId: `Ik8rrLV1c`,
                                style: { opacity: 0.6 },
                              }),
                            }),
                          T !== !1 &&
                            l(h.div, {
                              className: `framer-m8kypo`,
                              "data-framer-name": `logo 5`,
                              layoutDependency: b,
                              layoutId: `PsiRj56cF`,
                              style: { opacity: 0.75 },
                              children: l(x, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 96,
                                  intrinsicWidth: 360,
                                  pixelHeight: 192,
                                  pixelWidth: 720,
                                  sizes: `97.5px`,
                                  ...Q(ae),
                                },
                                className: `framer-1vct5g8`,
                                "data-framer-name": `Company logo-7`,
                                fitImageDimension: `width`,
                                layoutDependency: b,
                                layoutId: `KCQei7pqo`,
                                style: { opacity: 0.6 },
                              }),
                            }),
                          E !== !1 &&
                            l(h.div, {
                              className: `framer-pq79on`,
                              "data-framer-name": `logo 6`,
                              layoutDependency: b,
                              layoutId: `WUJsuDD1j`,
                              style: { opacity: 0.75 },
                              children: l(x, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 96,
                                  intrinsicWidth: 348,
                                  pixelHeight: 192,
                                  pixelWidth: 696,
                                  sizes: `94.25px`,
                                  ...Q(m),
                                },
                                className: `framer-u78a9d`,
                                "data-framer-name": `Company logo-6`,
                                fitImageDimension: `width`,
                                layoutDependency: b,
                                layoutId: `F7vIzH7i1`,
                                style: { opacity: 0.6 },
                              }),
                            }),
                          Se !== !1 &&
                            l(h.div, {
                              className: `framer-swb6ec`,
                              "data-framer-name": `logo 7`,
                              layoutDependency: b,
                              layoutId: `gC34gf0k2`,
                              style: { opacity: 0.75 },
                              children: l(x, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 96,
                                  intrinsicWidth: 290,
                                  pixelHeight: 27,
                                  pixelWidth: 113,
                                  sizes: `108.8148px`,
                                  ...Q(oe),
                                },
                                className: `framer-i3ubhk`,
                                "data-framer-name": `Company logo-5`,
                                fitImageDimension: `width`,
                                layoutDependency: b,
                                layoutId: `OBqTkX3u2`,
                                style: { opacity: 0.6 },
                              }),
                            }),
                          D !== !1 &&
                            l(h.div, {
                              className: `framer-y45y40`,
                              "data-framer-name": `logo 8`,
                              layoutDependency: b,
                              layoutId: `HlXD6IQMY`,
                              style: { opacity: 0.75 },
                              children: l(x, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 96,
                                  intrinsicWidth: 304,
                                  pixelHeight: 192,
                                  pixelWidth: 608,
                                  sizes: `95px`,
                                  ...Q(se),
                                },
                                className: `framer-146zvmu`,
                                "data-framer-name": `Company logo-3`,
                                fitImageDimension: `width`,
                                layoutDependency: b,
                                layoutId: `AubV2bCJ0`,
                                style: { opacity: 0.6 },
                              }),
                            }),
                        ],
                        speed: 25,
                        style: { height: `100%`, width: `100%` },
                        width: `100%`,
                        ...Je(
                          {
                            CVgtV8Pd3: {
                              fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !0,
                                fadeInset: 0,
                                fadeWidth: 5,
                                overflow: !1,
                              },
                              gap: 48,
                            },
                          },
                          le,
                          v
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-AFmKE.framer-1lo3uhe, .framer-AFmKE .framer-1lo3uhe { display: block; }`,
          `.framer-AFmKE.framer-1nvmd74 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 160px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: var(--alhc9e); position: relative; width: 1104px; }`,
          `.framer-AFmKE .framer-15kln3a-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-AFmKE .framer-1v1rfu4, .framer-AFmKE .framer-1is0if4, .framer-AFmKE .framer-t16qpc, .framer-AFmKE .framer-m8kypo, .framer-AFmKE .framer-pq79on, .framer-AFmKE .framer-swb6ec, .framer-AFmKE .framer-y45y40 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-AFmKE .framer-fqhext { flex: none; height: 28px; overflow: visible; position: relative; width: auto; }`,
          `.framer-AFmKE .framer-1ow63wq, .framer-AFmKE .framer-1azz3rh { flex: none; height: 25px; overflow: visible; position: relative; width: auto; }`,
          `.framer-AFmKE .framer-38c862 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-AFmKE .framer-78rdc3, .framer-AFmKE .framer-1vct5g8, .framer-AFmKE .framer-u78a9d, .framer-AFmKE .framer-i3ubhk { flex: none; height: 26px; overflow: visible; position: relative; width: auto; }`,
          `.framer-AFmKE .framer-146zvmu { flex: none; height: 30px; overflow: visible; position: relative; width: auto; }`,
          `.framer-AFmKE.framer-v-1rm4upk.framer-1nvmd74 { height: min-content; }`,
          `.framer-AFmKE.framer-v-1rm4upk .framer-15kln3a-container { height: 48px; }`,
        ],
        `framer-AFmKE`
      )),
      (ot = $),
      ($.displayName = `Rotating Logos`),
      ($.defaultProps = { height: 160, width: 1104 }),
      v($, {
        variant: {
          options: [`E3oWvrbso`, `CVgtV8Pd3`],
          optionTitles: [`desktop`, `phone`],
          title: `Variant`,
          type: b.Enum,
        },
        AECIv4vE2: { defaultValue: `0px`, title: `Padding`, type: b.Padding },
        GyD1ttewD: {
          __defaultAssetReference: `data:framer/asset-reference,N6vaTvuu4CX66N8wNquDginaeY.png?originalFilename=Company+logo.png&width=752&height=192`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,N6vaTvuu4CX66N8wNquDginaeY.png?originalFilename=Company+logo.png&width=752&height=192`,
          },
          title: `Logo 1`,
          type: b.ResponsiveImage,
        },
        i_eIh_Uhb: {
          __defaultAssetReference: `data:framer/asset-reference,SWISSCOM.png?originalFilename=ghhb.svg&width=104&height=27`,
          title: `Logo 2`,
          type: b.ResponsiveImage,
        },
        sLG9eB2Tx: {
          __defaultAssetReference: `data:framer/asset-reference,infomaniak-logo.png?originalFilename=Group+8069.svg&width=351&height=78`,
          title: `Logo 3`,
          type: b.ResponsiveImage,
        },
        kfUFxmlX7: {
          __defaultAssetReference: `data:framer/asset-reference,UZyFAbhPvJiZZNlUCLMV2ufRX4.png?originalFilename=Company+logo-8.png&width=788&height=192`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,UZyFAbhPvJiZZNlUCLMV2ufRX4.png?originalFilename=Company+logo-8.png&width=788&height=192`,
          },
          title: `Logo 4`,
          type: b.ResponsiveImage,
        },
        Y44YPh6HI: {
          __defaultAssetReference: `data:framer/asset-reference,WrhHAHIJIldPiPiy6UPC1VCF18.png?originalFilename=Company+logo-7.png&width=720&height=192`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,WrhHAHIJIldPiPiy6UPC1VCF18.png?originalFilename=Company+logo-7.png&width=720&height=192`,
          },
          title: `Logo 5`,
          type: b.ResponsiveImage,
        },
        uUhgQCWFN: {
          __defaultAssetReference: `data:framer/asset-reference,EiBiN3ktJSFPKkS1vWdMZOdl4.png?originalFilename=Company+logo-6.png&width=696&height=192`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,EiBiN3ktJSFPKkS1vWdMZOdl4.png?originalFilename=Company+logo-6.png&width=696&height=192`,
          },
          title: `Logo 6`,
          type: b.ResponsiveImage,
        },
        Q6EI_IIR8: {
          __defaultAssetReference: `data:framer/asset-reference,infomaniak-logo.png?originalFilename=fg.svg&width=113&height=27`,
          title: `Logo 7`,
          type: b.ResponsiveImage,
        },
        dvPB7qgO4: {
          __defaultAssetReference: `data:framer/asset-reference,logo-ubs.png?originalFilename=Company+logo-3.png&width=608&height=192`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,logo-ubs.png?originalFilename=Company+logo-3.png&width=608&height=192`,
          },
          title: `Logo 8`,
          type: b.ResponsiveImage,
        },
      }),
      y($, [{ explicitInter: !0, fonts: [] }, ...Ye], { supportsExplicitInterCodegen: !0 }));
  });
export { Pe as a, qe as i, ot as n, Ee as o, X as r, st as t };
//# sourceMappingURL=sjPmXsH3q.BJkv2Nmd.mjs.map
