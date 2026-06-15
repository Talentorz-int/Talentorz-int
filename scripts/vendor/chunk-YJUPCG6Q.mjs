import { a as ra } from "chunk-M2T2C4XJ.mjs";
import { b as si } from "chunk-2YGPTE47.mjs";
import { e as ea } from "chunk-KR3J4VK3.mjs";
import { a as tf } from "chunk-ADUFDH3L.mjs";
import {
  Cd as zs,
  Ef as oi,
  Ff as Zo,
  Hf as sr,
  Qg as Ys,
  T as js,
  Tf as Us,
  Uf as $s,
  Vf as qs,
  Xc as ri,
  Yc as Ks,
  ai as Qs,
  dg as ii,
  gh as Xs,
  ih as Js,
  jg as Gs,
} from "chunk-LNLOS7MO.mjs";
import { c as Bs, d as Ws } from "chunk-SGLYIBC6.mjs";
import { a as ta } from "chunk-VGVPRJE5.mjs";
import { a as ve } from "chunk-QFU6OGL3.mjs";
import { m as Gt } from "chunk-O5NUHS4A.mjs";
import { d as Zs } from "chunk-OETKI2VS.mjs";
import { a as ni } from "chunk-7P35LPP6.mjs";
import { a as pe } from "chunk-LEYNIZPU.mjs";
import { b as Jr, e as Vs, h as Ls, l as $t, n as qt, r as Ns } from "chunk-DYNCKUFC.mjs";
import { a as X } from "chunk-SJONTHBI.mjs";
import { H as Xr, I as Fs, Y as Hs, q as Qo } from "chunk-3GX5YKYT.mjs";
import { a as Ds, b as _s } from "chunk-6PNPO5DW.mjs";
import { e as V, j as ti } from "chunk-XELMBOBL.mjs";
var rf = Object.defineProperty,
  of = Object.defineProperties,
  nf = Object.getOwnPropertyDescriptors,
  en = Object.getOwnPropertySymbols,
  na = Object.prototype.hasOwnProperty,
  ia = Object.prototype.propertyIsEnumerable,
  oa = (e, t, o) =>
    t in e ? rf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o),
  J = (e, t) => {
    for (var o in t || (t = {})) na.call(t, o) && oa(e, o, t[o]);
    if (en) for (var o of en(t)) ia.call(t, o) && oa(e, o, t[o]);
    return e;
  },
  se = (e, t) => of(e, nf(t)),
  Pr = (e, t) => {
    var o = {};
    for (var r in e) na.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
    if (e != null && en) for (var r of en(e)) t.indexOf(r) < 0 && ia.call(e, r) && (o[r] = e[r]);
    return o;
  };
function At(...e) {}
function Qr(e, t) {
  if (sf(e)) {
    let o = af(t) ? t() : t;
    return e(o);
  }
  return e;
}
function sf(e) {
  return typeof e == "function";
}
function af(e) {
  return typeof e == "function";
}
function $e(e, t) {
  return typeof Object.hasOwn == "function"
    ? Object.hasOwn(e, t)
    : Object.prototype.hasOwnProperty.call(e, t);
}
function be(...e) {
  return (...t) => {
    for (let o of e) typeof o == "function" && o(...t);
  };
}
function Zr(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function ai(e, t) {
  let o = J({}, e);
  for (let r of t) $e(o, r) && delete o[r];
  return o;
}
function ui(e, t) {
  let o = {};
  for (let r of t) $e(e, r) && (o[r] = e[r]);
  return o;
}
function eo(e) {
  return e;
}
function ee(e, t) {
  if (!e) throw typeof t != "string" ? new Error("Invariant failed") : new Error(t);
}
function ci(e) {
  return Object.keys(e);
}
function ar(e, ...t) {
  let o = typeof e == "function" ? e(...t) : e;
  return o == null ? !1 : !o;
}
function ct(e) {
  return e.disabled || e["aria-disabled"] === !0 || e["aria-disabled"] === "true";
}
function Be(e) {
  let t = {};
  for (let o in e) e[o] !== void 0 && (t[o] = e[o]);
  return t;
}
function Y(...e) {
  for (let t of e) if (t !== void 0) return t;
}
function ur(e, t) {
  let o = e.__unstableInternals;
  return (ee(o, "Invalid store"), o[t]);
}
function Me(e, ...t) {
  let o = e,
    r = o,
    n = Symbol(),
    i = At,
    s = new Set(),
    a = new Set(),
    u = new Set(),
    c = new Set(),
    l = new Set(),
    m = new WeakMap(),
    f = new WeakMap(),
    d = (_) => (u.add(_), () => u.delete(_)),
    v = () => {
      let _ = s.size,
        k = Symbol();
      s.add(k);
      let T = () => {
        (s.delete(k), !s.size && i());
      };
      if (_) return T;
      let H = ci(o).map((M) =>
          be(
            ...t.map((D) => {
              var E;
              let R = (E = D?.getState) == null ? void 0 : E.call(D);
              if (R && $e(R, M))
                return he(D, [M], (F) => {
                  O(M, F[M], !0);
                });
            })
          )
        ),
        W = [];
      for (let M of u) W.push(M());
      let b = t.map(Er);
      return ((i = be(...H, ...W, ...b)), T);
    },
    p = (_, k, T = c) => (
      T.add(k),
      f.set(k, _),
      () => {
        var H;
        ((H = m.get(k)) == null || H(), m.delete(k), f.delete(k), T.delete(k));
      }
    ),
    w = (_, k) => p(_, k),
    g = (_, k) => (m.set(k, k(o, o)), p(_, k)),
    y = (_, k) => (m.set(k, k(o, r)), p(_, k, l)),
    C = (_) => Me(ui(o, _), P),
    x = (_) => Me(ai(o, _), P),
    h = () => o,
    O = (_, k, T = !1) => {
      var H;
      if (!$e(o, _)) return;
      let W = Qr(k, o[_]);
      if (W === o[_]) return;
      if (!T) for (let E of t) (H = E?.setState) == null || H.call(E, _, W);
      let b = o;
      o = se(J({}, o), { [_]: W });
      let M = Symbol();
      ((n = M), a.add(_));
      let D = (E, R, F) => {
        var I;
        let q = f.get(E),
          L = (ce) => (F ? F.has(ce) : ce === _);
        (!q || q.some(L)) && ((I = m.get(E)) == null || I(), m.set(E, E(o, R)));
      };
      for (let E of c) D(E, b);
      queueMicrotask(() => {
        if (n !== M) return;
        let E = o;
        for (let R of l) D(R, r, a);
        ((r = E), a.clear());
      });
    },
    P = {
      getState: h,
      setState: O,
      __unstableInternals: { setup: d, init: v, subscribe: w, sync: g, batch: y, pick: C, omit: x },
    };
  return P;
}
function Se(e, ...t) {
  if (e) return ur(e, "setup")(...t);
}
function Er(e, ...t) {
  if (e) return ur(e, "init")(...t);
}
function Yt(e, ...t) {
  if (e) return ur(e, "subscribe")(...t);
}
function he(e, ...t) {
  if (e) return ur(e, "sync")(...t);
}
function Xt(e, ...t) {
  if (e) return ur(e, "batch")(...t);
}
function cr(e, ...t) {
  if (e) return ur(e, "omit")(...t);
}
function to(e, ...t) {
  if (e) return ur(e, "pick")(...t);
}
function Rt(...e) {
  let t = e.reduce((r, n) => {
      var i;
      let s = (i = n?.getState) == null ? void 0 : i.call(n);
      return s ? Object.assign(r, s) : r;
    }, {}),
    o = Me(t, ...e);
  return Object.assign({}, ...e, o);
}
var uf = Object.defineProperty,
  cf = Object.defineProperties,
  lf = Object.getOwnPropertyDescriptors,
  tn = Object.getOwnPropertySymbols,
  aa = Object.prototype.hasOwnProperty,
  ua = Object.prototype.propertyIsEnumerable,
  sa = (e, t, o) =>
    t in e ? uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o),
  S = (e, t) => {
    for (var o in t || (t = {})) aa.call(t, o) && sa(e, o, t[o]);
    if (tn) for (var o of tn(t)) ua.call(t, o) && sa(e, o, t[o]);
    return e;
  },
  A = (e, t) => cf(e, lf(t)),
  K = (e, t) => {
    var o = {};
    for (var r in e) aa.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
    if (e != null && tn) for (var r of tn(e)) t.indexOf(r) < 0 && ua.call(e, r) && (o[r] = e[r]);
    return o;
  };
var ca = V(X(), 1);
function oo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function ff(e) {
  return !e || !(0, ca.isValidElement)(e) ? !1 : "ref" in e.props || "ref" in e;
}
function la(e) {
  return ff(e) ? S({}, e.props).ref || e.ref : null;
}
function fa(e, t) {
  let o = S({}, e);
  for (let r in t) {
    if (!$e(t, r)) continue;
    if (r === "className") {
      let i = "className";
      o[i] = e[i] ? `${e[i]} ${t[i]}` : t[i];
      continue;
    }
    if (r === "style") {
      let i = "style";
      o[i] = e[i] ? S(S({}, e[i]), t[i]) : t[i];
      continue;
    }
    let n = t[r];
    if (typeof n == "function" && r.startsWith("on")) {
      let i = e[r];
      if (typeof i == "function") {
        o[r] = (...s) => {
          (n(...s), i(...s));
        };
        continue;
      }
    }
    o[r] = n;
  }
  return o;
}
var Tt = mf();
function mf() {
  var e;
  return typeof window < "u" && !!((e = window.document) != null && e.createElement);
}
function te(e) {
  return e ? ("self" in e ? e.document : e.ownerDocument || document) : document;
}
function no(e) {
  return e ? ("self" in e ? e.self : te(e).defaultView || window) : self;
}
function Xe(e, t = !1) {
  let { activeElement: o } = te(e);
  if (!o?.nodeName) return null;
  if (io(o) && o.contentDocument) return Xe(o.contentDocument.body, t);
  if (t) {
    let r = o.getAttribute("aria-activedescendant");
    if (r) {
      let n = te(o).getElementById(r);
      if (n) return n;
    }
  }
  return o;
}
function le(e, t) {
  return e === t || e.contains(t);
}
function io(e) {
  return e.tagName === "IFRAME";
}
function qe(e) {
  let t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? df.indexOf(e.type) !== -1 : !1;
}
var df = ["button", "color", "file", "image", "reset", "submit"];
function so(e) {
  if (typeof e.checkVisibility == "function") return e.checkVisibility();
  let t = e;
  return t.offsetWidth > 0 || t.offsetHeight > 0 || e.getClientRects().length > 0;
}
function Te(e) {
  try {
    let t = e instanceof HTMLInputElement && e.selectionStart !== null,
      o = e.tagName === "TEXTAREA";
    return t || o || !1;
  } catch {
    return !1;
  }
}
function ao(e) {
  return e.isContentEditable || Te(e);
}
function li(e) {
  if (Te(e)) return e.value;
  if (e.isContentEditable) {
    let t = te(e).createRange();
    return (t.selectNodeContents(e), t.toString());
  }
  return "";
}
function Ir(e) {
  let t = 0,
    o = 0;
  if (Te(e)) ((t = e.selectionStart || 0), (o = e.selectionEnd || 0));
  else if (e.isContentEditable) {
    let r = te(e).getSelection();
    if (r?.rangeCount && r.anchorNode && le(e, r.anchorNode) && r.focusNode && le(e, r.focusNode)) {
      let n = r.getRangeAt(0),
        i = n.cloneRange();
      (i.selectNodeContents(e),
        i.setEnd(n.startContainer, n.startOffset),
        (t = i.toString().length),
        i.setEnd(n.endContainer, n.endOffset),
        (o = i.toString().length));
    }
  }
  return { start: t, end: o };
}
function Jt(e, t) {
  let o = ["dialog", "menu", "listbox", "tree", "grid"],
    r = e?.getAttribute("role");
  return r && o.indexOf(r) !== -1 ? r : t;
}
function uo(e, t) {
  var o;
  let r = { menu: "menuitem", listbox: "option", tree: "treeitem" },
    n = Jt(e);
  return n && (o = r[n]) != null ? o : t;
}
function Mr(e) {
  if (!e) return null;
  let t = (o) => o === "auto" || o === "scroll";
  if (e.clientHeight && e.scrollHeight > e.clientHeight) {
    let { overflowY: o } = getComputedStyle(e);
    if (t(o)) return e;
  } else if (e.clientWidth && e.scrollWidth > e.clientWidth) {
    let { overflowX: o } = getComputedStyle(e);
    if (t(o)) return e;
  }
  return Mr(e.parentElement) || document.scrollingElement || document.body;
}
function co(e, ...t) {
  /text|search|password|tel|url/i.test(e.type) && e.setSelectionRange(...t);
}
function lo(e, t) {
  let o = e.map((n, i) => [i, n]),
    r = !1;
  return (
    o.sort(([n, i], [s, a]) => {
      let u = t(i),
        c = t(a);
      return u === c || !u || !c ? 0 : pf(u, c) ? (n > s && (r = !0), -1) : (n < s && (r = !0), 1);
    }),
    r ? o.map(([n, i]) => i) : e
  );
}
function pf(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
function rn() {
  return Tt && !!navigator.maxTouchPoints;
}
function kr() {
  return Tt ? /mac|iphone|ipad|ipod/i.test(navigator.platform) : !1;
}
function Dt() {
  return Tt && kr() && /apple/i.test(navigator.vendor);
}
function fi() {
  return Tt && /firefox\//i.test(navigator.userAgent);
}
function mi() {
  return Tt && navigator.platform.startsWith("Mac") && !rn();
}
function on(e) {
  return !!(e.currentTarget && !le(e.currentTarget, e.target));
}
function Oe(e) {
  return e.target === e.currentTarget;
}
function nn(e) {
  let t = e.currentTarget;
  if (!t) return !1;
  let o = kr();
  if ((o && !e.metaKey) || (!o && !e.ctrlKey)) return !1;
  let r = t.tagName.toLowerCase();
  return (
    r === "a" || (r === "button" && t.type === "submit") || (r === "input" && t.type === "submit")
  );
}
function sn(e) {
  let t = e.currentTarget;
  if (!t) return !1;
  let o = t.tagName.toLowerCase();
  return e.altKey
    ? o === "a" || (o === "button" && t.type === "submit") || (o === "input" && t.type === "submit")
    : !1;
}
function ma(e, t, o) {
  let r = new Event(t, o);
  return e.dispatchEvent(r);
}
function lr(e, t) {
  let o = new FocusEvent("blur", t),
    r = e.dispatchEvent(o),
    n = se(J({}, t), { bubbles: !0 });
  return (e.dispatchEvent(new FocusEvent("focusout", n)), r);
}
function da(e, t, o) {
  let r = new KeyboardEvent(t, o);
  return e.dispatchEvent(r);
}
function di(e, t) {
  let o = new MouseEvent("click", t);
  return e.dispatchEvent(o);
}
function pt(e, t) {
  let o = t || e.currentTarget,
    r = e.relatedTarget;
  return !r || !le(o, r);
}
function vt(e, t, o, r) {
  let i = ((a) => {
      if (r) {
        let c = setTimeout(a, r);
        return () => clearTimeout(c);
      }
      let u = requestAnimationFrame(a);
      return () => cancelAnimationFrame(u);
    })(() => {
      (e.removeEventListener(t, s, !0), o());
    }),
    s = () => {
      (i(), o());
    };
  return (e.addEventListener(t, s, { once: !0, capture: !0 }), i);
}
function ge(e, t, o, r = window) {
  let n = [];
  try {
    r.document.addEventListener(e, t, o);
    for (let s of Array.from(r.frames)) n.push(ge(e, t, o, s));
  } catch {}
  return () => {
    try {
      r.document.removeEventListener(e, t, o);
    } catch {}
    for (let s of n) s();
  };
}
var vf = V(X(), 1),
  me = V(X(), 1),
  pi = S({}, vf),
  pa = pi.useId,
  rv = pi.useDeferredValue,
  va = pi.useInsertionEffect,
  Q = Tt ? me.useLayoutEffect : me.useEffect;
function bf(e) {
  let [t] = (0, me.useState)(e);
  return t;
}
function un(e) {
  let t = (0, me.useRef)(e);
  return (
    Q(() => {
      t.current = e;
    }),
    t
  );
}
function $(e) {
  let t = (0, me.useRef)(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return (
    va
      ? va(() => {
          t.current = e;
        })
      : (t.current = e),
    (0, me.useCallback)((...o) => {
      var r;
      return (r = t.current) == null ? void 0 : r.call(t, ...o);
    }, [])
  );
}
function xa(e) {
  let [t, o] = (0, me.useState)(null);
  return (
    Q(() => {
      if (t == null || !e) return;
      let r = null;
      return (
        e((n) => ((r = n), t)),
        () => {
          e(r);
        }
      );
    }, [t, e]),
    [t, o]
  );
}
function Z(...e) {
  return (0, me.useMemo)(() => {
    if (e.some(Boolean))
      return (t) => {
        for (let o of e) oo(o, t);
      };
  }, e);
}
function Ae(e) {
  if (pa) {
    let r = pa();
    return e || r;
  }
  let [t, o] = (0, me.useState)(e);
  return (
    Q(() => {
      if (e || t) return;
      let r = Math.random().toString(36).slice(2, 8);
      o(`id-${r}`);
    }, [e, t]),
    e || t
  );
}
function cn(e, t) {
  let o = (i) => {
      if (typeof i == "string") return i;
    },
    [r, n] = (0, me.useState)(() => o(t));
  return (
    Q(() => {
      let i = e && "current" in e ? e.current : e;
      n(i?.tagName.toLowerCase() || o(t));
    }, [e, t]),
    r
  );
}
function ya(e, t, o) {
  let r = bf(o),
    [n, i] = (0, me.useState)(r);
  return (
    (0, me.useEffect)(() => {
      let s = e && "current" in e ? e.current : e;
      if (!s) return;
      let a = () => {
          let c = s.getAttribute(t);
          i(c ?? r);
        },
        u = new MutationObserver(a);
      return (u.observe(s, { attributeFilter: [t] }), a(), () => u.disconnect());
    }, [e, t, r]),
    n
  );
}
function rt(e, t) {
  let o = (0, me.useRef)(!1);
  ((0, me.useEffect)(() => {
    if (o.current) return e();
    o.current = !0;
  }, t),
    (0, me.useEffect)(
      () => () => {
        o.current = !1;
      },
      []
    ));
}
function wa(e, t) {
  let o = (0, me.useRef)(!1);
  (Q(() => {
    if (o.current) return e();
    o.current = !0;
  }, t),
    Q(
      () => () => {
        o.current = !1;
      },
      []
    ));
}
function ln() {
  return (0, me.useReducer)(() => [], []);
}
function ne(e) {
  return $(typeof e == "function" ? e : () => e);
}
function ae(e, t, o = []) {
  let r = (0, me.useCallback)(
    (n) => (e.wrapElement && (n = e.wrapElement(n)), t(n)),
    [...o, e.wrapElement]
  );
  return A(S({}, e), { wrapElement: r });
}
function Or(e = !1, t) {
  let [o, r] = (0, me.useState)(null);
  return { portalRef: Z(r, t), portalNode: o, domReady: !e || o };
}
function fn(e, t, o) {
  let r = e.onLoadedMetadataCapture,
    n = (0, me.useMemo)(() => Object.assign(() => {}, A(S({}, r), { [t]: o })), [r, t, o]);
  return [r?.[t], { onLoadedMetadataCapture: n }];
}
var ba = !1;
function Ar() {
  return (
    (0, me.useEffect)(() => {
      ba ||
        (ge("mousemove", gf, !0),
        ge("mousedown", an, !0),
        ge("mouseup", an, !0),
        ge("keydown", an, !0),
        ge("scroll", an, !0),
        (ba = !0));
    }, []),
    $(() => vi)
  );
}
var vi = !1,
  ha = 0,
  ga = 0;
function hf(e) {
  let t = e.movementX || e.screenX - ha,
    o = e.movementY || e.screenY - ga;
  return ((ha = e.screenX), (ga = e.screenY), t || o || !1);
}
function gf(e) {
  hf(e) && (vi = !0);
}
function an() {
  vi = !1;
}
var We = V(X(), 1),
  fr = V(pe(), 1);
function j(e) {
  let t = We.forwardRef((o, r) => e(A(S({}, o), { ref: r })));
  return ((t.displayName = e.displayName || e.name), t);
}
function Qt(e, t) {
  return We.memo(e, t);
}
function z(e, t) {
  let o = t,
    { wrapElement: r, render: n } = o,
    i = K(o, ["wrapElement", "render"]),
    s = Z(t.ref, la(n)),
    a;
  if (We.isValidElement(n)) {
    let u = A(S({}, n.props), { ref: s });
    a = We.cloneElement(n, fa(i, u));
  } else n ? (a = n(i)) : (a = (0, fr.jsx)(e, S({}, i)));
  return r ? r(a) : a;
}
function U(e) {
  let t = (o = {}) => e(o);
  return ((t.displayName = e.name), t);
}
function Pe(e = [], t = []) {
  let o = We.createContext(void 0),
    r = We.createContext(void 0),
    n = () => We.useContext(o),
    i = (c = !1) => {
      let l = We.useContext(r),
        m = n();
      return c ? l : l || m;
    },
    s = () => {
      let c = We.useContext(r),
        l = n();
      if (!(c && c === l)) return l;
    },
    a = (c) =>
      e.reduceRight(
        (l, m) => (0, fr.jsx)(m, A(S({}, c), { children: l })),
        (0, fr.jsx)(o.Provider, S({}, c))
      );
  return {
    context: o,
    scopedContext: r,
    useContext: n,
    useScopedContext: i,
    useProviderContext: s,
    ContextProvider: a,
    ScopedContextProvider: (c) =>
      (0, fr.jsx)(
        a,
        A(S({}, c), {
          children: t.reduceRight(
            (l, m) => (0, fr.jsx)(m, A(S({}, c), { children: l })),
            (0, fr.jsx)(r.Provider, S({}, c))
          ),
        })
      ),
  };
}
var fo = Pe(),
  Sa = fo.useContext,
  cv = fo.useScopedContext,
  lv = fo.useProviderContext,
  Ca = fo.ContextProvider,
  Pa = fo.ScopedContextProvider;
var bi = V(X(), 1),
  mo = Pe([Ca], [Pa]),
  _t = mo.useContext,
  pv = mo.useScopedContext,
  Ea = mo.useProviderContext,
  bt = mo.ContextProvider,
  Zt = mo.ScopedContextProvider,
  Ia = (0, bi.createContext)(void 0),
  Ma = (0, bi.createContext)(void 0);
var xf = { id: null };
function ka(e, t, o = !1) {
  let r = e.findIndex((n) => n.id === t);
  return [...e.slice(r + 1), ...(o ? [xf] : []), ...e.slice(0, r)];
}
function Oa(e, t) {
  return e.find((o) => (t ? !o.disabled && o.id !== t : !o.disabled));
}
function ht(e, t) {
  return (t && e.item(t)) || null;
}
function Aa(e) {
  let t = [];
  for (let o of e) {
    let r = t.find((n) => {
      var i;
      return ((i = n[0]) == null ? void 0 : i.rowId) === o.rowId;
    });
    r ? r.push(o) : t.push([o]);
  }
  return t;
}
function Ra(e, t = !1) {
  if (Te(e)) e.setSelectionRange(t ? e.value.length : 0, e.value.length);
  else if (e.isContentEditable) {
    let o = te(e).getSelection();
    (o?.selectAllChildren(e), t && o?.collapseToEnd());
  }
}
var hi = Symbol("FOCUS_SILENTLY");
function Ta(e) {
  ((e[hi] = !0), e.focus({ preventScroll: !0 }));
}
function Da(e) {
  let t = e[hi];
  return (delete e[hi], t);
}
function mr(e, t, o) {
  if (!t || t === o) return !1;
  let r = e.item(t.id);
  return !(!r || (o && r.element === o));
}
var mn = V(X(), 1),
  yf = "div",
  gi = U(function (t) {
    var o = t,
      { store: r, shouldRegisterItem: n = !0, getItem: i = eo, element: s } = o,
      a = K(o, ["store", "shouldRegisterItem", "getItem", "element"]);
    let u = Sa();
    r = r || u;
    let c = Ae(a.id),
      l = (0, mn.useRef)(s);
    return (
      (0, mn.useEffect)(() => {
        let m = l.current;
        if (!c || !m || !n) return;
        let f = i({ id: c, element: m });
        return r?.renderItem(f);
      }, [c, n, i, r]),
      (a = A(S({}, a), { ref: Z(l, a.ref) })),
      Be(a)
    );
  }),
  Cv = j(function (t) {
    let o = gi(t);
    return z(yf, o);
  });
var _a = V(X(), 1),
  dn = (0, _a.createContext)(!0);
var pn =
  "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], summary, iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
function wf(e) {
  return Number.parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
function Je(e) {
  return !(!e.matches(pn) || !so(e) || e.closest("[inert]"));
}
function Rr(e) {
  if (!Je(e) || wf(e)) return !1;
  if (!("form" in e) || !e.form || e.checked || e.type !== "radio") return !0;
  let t = e.form.elements.namedItem(e.name);
  if (!t || !("length" in t)) return !0;
  let o = Xe(e);
  return !o || o === e || !("form" in o) || o.form !== e.form || o.name !== e.name;
}
function xi(e, t) {
  let o = Array.from(e.querySelectorAll(pn));
  t && o.unshift(e);
  let r = o.filter(Je);
  return (
    r.forEach((n, i) => {
      if (io(n) && n.contentDocument) {
        let s = n.contentDocument.body;
        r.splice(i, 1, ...xi(s));
      }
    }),
    r
  );
}
function po(e, t, o) {
  let r = Array.from(e.querySelectorAll(pn)),
    n = r.filter(Rr);
  return (
    t && Rr(e) && n.unshift(e),
    n.forEach((i, s) => {
      if (io(i) && i.contentDocument) {
        let a = i.contentDocument.body,
          u = po(a, !1, o);
        n.splice(s, 1, ...u);
      }
    }),
    !n.length && o ? r : n
  );
}
function Fa(e, t, o) {
  let [r] = po(e, t, o);
  return r || null;
}
function Sf(e, t, o, r) {
  let n = Xe(e),
    i = xi(e, t),
    s = i.indexOf(n),
    a = i.slice(s + 1);
  return a.find(Rr) || (o ? i.find(Rr) : null) || (r ? a[0] : null) || null;
}
function vn(e, t) {
  return Sf(document.body, !1, e, t);
}
function Cf(e, t, o, r) {
  let n = Xe(e),
    i = xi(e, t).reverse(),
    s = i.indexOf(n),
    a = i.slice(s + 1);
  return a.find(Rr) || (o ? i.find(Rr) : null) || (r ? a[0] : null) || null;
}
function yi(e, t) {
  return Cf(document.body, !1, e, t);
}
function Ha(e) {
  for (; e && !Je(e); ) e = e.closest(pn);
  return e || null;
}
function ot(e) {
  let t = Xe(e);
  if (!t) return !1;
  if (t === e) return !0;
  let o = t.getAttribute("aria-activedescendant");
  return o ? o === e.id : !1;
}
function nt(e) {
  let t = Xe(e);
  if (!t) return !1;
  if (le(e, t)) return !0;
  let o = t.getAttribute("aria-activedescendant");
  return !o || !("id" in e) ? !1 : o === e.id ? !0 : !!e.querySelector(`#${CSS.escape(o)}`);
}
function bn(e) {
  !nt(e) && Je(e) && e.focus();
}
function Pf(e) {
  var t;
  let o = (t = e.getAttribute("tabindex")) != null ? t : "";
  (e.setAttribute("data-tabindex", o), e.setAttribute("tabindex", "-1"));
}
function Va(e, t) {
  let o = po(e, t);
  for (let r of o) Pf(r);
}
function La(e) {
  let t = e.querySelectorAll("[data-tabindex]"),
    o = (r) => {
      let n = r.getAttribute("data-tabindex");
      (r.removeAttribute("data-tabindex"),
        n ? r.setAttribute("tabindex", n) : r.removeAttribute("tabindex"));
    };
  e.hasAttribute("data-tabindex") && o(e);
  for (let r of t) o(r);
}
function Na(e, t) {
  "scrollIntoView" in e
    ? (e.focus({ preventScroll: !0 }),
      e.scrollIntoView(J({ block: "nearest", inline: "nearest" }, t)))
    : e.focus();
}
var Qe = V(X(), 1),
  Ef = "div",
  Ba = Dt(),
  If = [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number",
    "date",
    "month",
    "week",
    "time",
    "datetime",
    "datetime-local",
  ],
  za = Symbol("safariFocusAncestor");
function Ua(e) {
  return e ? !!e[za] : !1;
}
function Wa(e, t) {
  e && (e[za] = t);
}
function Mf(e) {
  let { tagName: t, readOnly: o, type: r } = e;
  return (t === "TEXTAREA" && !o) || (t === "SELECT" && !o)
    ? !0
    : t === "INPUT" && !o
      ? If.includes(r)
      : !!(e.isContentEditable || (e.getAttribute("role") === "combobox" && e.dataset.name));
}
function kf(e) {
  return "labels" in e ? e.labels : null;
}
function ja(e) {
  return e.tagName.toLowerCase() === "input" && e.type
    ? e.type === "radio" || e.type === "checkbox"
    : !1;
}
function Of(e) {
  return e
    ? e === "button" ||
        e === "summary" ||
        e === "input" ||
        e === "select" ||
        e === "textarea" ||
        e === "a"
    : !0;
}
function Af(e) {
  return e ? e === "button" || e === "input" || e === "select" || e === "textarea" : !0;
}
function Rf(e, t, o, r, n) {
  return e ? (t ? (o && !r ? -1 : void 0) : o ? n : n || 0) : n;
}
function wi(e, t) {
  return $((o) => {
    (e?.(o), !o.defaultPrevented && t && (o.stopPropagation(), o.preventDefault()));
  });
}
var Ka = !1,
  Si = !0;
function Tf(e) {
  let t = e.target;
  t && "hasAttribute" in t && (t.hasAttribute("data-focus-visible") || (Si = !1));
}
function Df(e) {
  e.metaKey || e.ctrlKey || e.altKey || (Si = !0);
}
var Ft = U(function (t) {
    var o = t,
      { focusable: r = !0, accessibleWhenDisabled: n, autoFocus: i, onFocusVisible: s } = o,
      a = K(o, ["focusable", "accessibleWhenDisabled", "autoFocus", "onFocusVisible"]);
    let u = (0, Qe.useRef)(null);
    ((0, Qe.useEffect)(() => {
      r && (Ka || (ge("mousedown", Tf, !0), ge("keydown", Df, !0), (Ka = !0)));
    }, [r]),
      Ba &&
        (0, Qe.useEffect)(() => {
          if (!r) return;
          let E = u.current;
          if (!E || !ja(E)) return;
          let R = kf(E);
          if (!R) return;
          let F = () => queueMicrotask(() => E.focus());
          for (let I of R) I.addEventListener("mouseup", F);
          return () => {
            for (let I of R) I.removeEventListener("mouseup", F);
          };
        }, [r]));
    let c = r && ct(a),
      l = !!c && !n,
      [m, f] = (0, Qe.useState)(!1);
    ((0, Qe.useEffect)(() => {
      r && l && m && f(!1);
    }, [r, l, m]),
      (0, Qe.useEffect)(() => {
        if (!r || !m) return;
        let E = u.current;
        if (!E || typeof IntersectionObserver > "u") return;
        let R = new IntersectionObserver(() => {
          Je(E) || f(!1);
        });
        return (R.observe(E), () => R.disconnect());
      }, [r, m]));
    let d = wi(a.onKeyPressCapture, c),
      v = wi(a.onMouseDownCapture, c),
      p = wi(a.onClickCapture, c),
      w = a.onMouseDown,
      g = $((E) => {
        if ((w?.(E), E.defaultPrevented || !r)) return;
        let R = E.currentTarget;
        if (!Ba || on(E) || (!qe(R) && !ja(R))) return;
        let F = !1,
          I = () => {
            F = !0;
          },
          q = { capture: !0, once: !0 };
        R.addEventListener("focusin", I, q);
        let L = Ha(R.parentElement);
        (Wa(L, !0),
          vt(R, "mouseup", () => {
            (R.removeEventListener("focusin", I, !0), Wa(L, !1), !F && bn(R));
          }));
      }),
      y = (E, R) => {
        if ((R && (E.currentTarget = R), !r)) return;
        let F = E.currentTarget;
        F && ot(F) && (s?.(E), !E.defaultPrevented && ((F.dataset.focusVisible = "true"), f(!0)));
      },
      C = a.onKeyDownCapture,
      x = $((E) => {
        if ((C?.(E), E.defaultPrevented || !r || m || E.metaKey || E.altKey || E.ctrlKey || !Oe(E)))
          return;
        let R = E.currentTarget;
        vt(R, "focusout", () => y(E, R));
      }),
      h = a.onFocusCapture,
      O = $((E) => {
        if ((h?.(E), E.defaultPrevented || !r)) return;
        if (!Oe(E)) {
          f(!1);
          return;
        }
        let R = E.currentTarget,
          F = () => y(E, R);
        Si || Mf(E.target) ? vt(E.target, "focusout", F) : f(!1);
      }),
      P = a.onBlur,
      _ = $((E) => {
        (P?.(E), r && pt(E) && (E.currentTarget.removeAttribute("data-focus-visible"), f(!1)));
      }),
      k = (0, Qe.useContext)(dn),
      T = $((E) => {
        r &&
          i &&
          E &&
          k &&
          queueMicrotask(() => {
            ot(E) || (Je(E) && E.focus());
          });
      }),
      H = cn(u),
      W = r && Of(H),
      b = r && Af(H),
      M = a.style,
      D = (0, Qe.useMemo)(() => (l ? S({ pointerEvents: "none" }, M) : M), [l, M]);
    return (
      (a = A(
        S(
          {
            "data-focus-visible": (r && m) || void 0,
            "data-autofocus": i || void 0,
            "aria-disabled": c || void 0,
          },
          a
        ),
        {
          ref: Z(u, T, a.ref),
          style: D,
          tabIndex: Rf(r, l, W, b, a.tabIndex),
          disabled: b && l ? !0 : void 0,
          contentEditable: c ? void 0 : a.contentEditable,
          onKeyPressCapture: d,
          onClickCapture: p,
          onMouseDownCapture: v,
          onMouseDown: g,
          onKeyDownCapture: x,
          onFocusCapture: O,
          onBlur: _,
        }
      )),
      Be(a)
    );
  }),
  Bv = j(function (t) {
    let o = Ft(t);
    return z(Ef, o);
  });
var er = V(X(), 1),
  _f = "button";
function $a(e) {
  if (!e.isTrusted) return !1;
  let t = e.currentTarget;
  return e.key === "Enter"
    ? qe(t) || t.tagName === "SUMMARY" || t.tagName === "A"
    : e.key === " "
      ? qe(t) || t.tagName === "SUMMARY" || t.tagName === "INPUT" || t.tagName === "SELECT"
      : !1;
}
var Ff = Symbol("command"),
  vo = U(function (t) {
    var o = t,
      { clickOnEnter: r = !0, clickOnSpace: n = !0 } = o,
      i = K(o, ["clickOnEnter", "clickOnSpace"]);
    let s = (0, er.useRef)(null),
      [a, u] = (0, er.useState)(!1);
    (0, er.useEffect)(() => {
      s.current && u(qe(s.current));
    }, []);
    let [c, l] = (0, er.useState)(!1),
      m = (0, er.useRef)(!1),
      f = ct(i),
      [d, v] = fn(i, Ff, !0),
      p = i.onKeyDown,
      w = $((C) => {
        p?.(C);
        let x = C.currentTarget;
        if (C.defaultPrevented || d || f || !Oe(C) || Te(x) || x.isContentEditable) return;
        let h = r && C.key === "Enter",
          O = n && C.key === " ",
          P = C.key === "Enter" && !r,
          _ = C.key === " " && !n;
        if (P || _) {
          C.preventDefault();
          return;
        }
        if (h || O) {
          let k = $a(C);
          if (h) {
            if (!k) {
              C.preventDefault();
              let T = C,
                { view: H } = T,
                W = K(T, ["view"]),
                b = () => di(x, W);
              fi() ? vt(x, "keyup", b) : queueMicrotask(b);
            }
          } else O && ((m.current = !0), k || (C.preventDefault(), l(!0)));
        }
      }),
      g = i.onKeyUp,
      y = $((C) => {
        if ((g?.(C), C.defaultPrevented || d || f || C.metaKey)) return;
        let x = n && C.key === " ";
        if (m.current && x && ((m.current = !1), !$a(C))) {
          (C.preventDefault(), l(!1));
          let h = C.currentTarget,
            O = C,
            { view: P } = O,
            _ = K(O, ["view"]);
          queueMicrotask(() => di(h, _));
        }
      });
    return (
      (i = A(S(S({ "data-active": c || void 0, type: a ? "button" : void 0 }, v), i), {
        ref: Z(s, i.ref),
        onKeyDown: w,
        onKeyUp: y,
      })),
      (i = Ft(i)),
      i
    );
  }),
  Xv = j(function (t) {
    let o = vo(t);
    return z(_f, o);
  });
var gt = V(X(), 1),
  qa = V(tf(), 1),
  { useSyncExternalStore: Ga } = qa.default,
  Ya = () => () => {};
function ue(e, t = eo) {
  let o = gt.useCallback((n) => (e ? Yt(e, null, n) : Ya()), [e]),
    r = () => {
      let n = typeof t == "string" ? t : null,
        i = typeof t == "function" ? t : null,
        s = e?.getState();
      if (i) return i(s);
      if (s && n && $e(s, n)) return s[n];
    };
  return Ga(o, r, r);
}
function bo(e, t) {
  let o = gt.useRef({}),
    r = gt.useCallback((i) => (e ? Yt(e, null, i) : Ya()), [e]),
    n = () => {
      let i = e?.getState(),
        s = !1,
        a = o.current;
      for (let u in t) {
        let c = t[u];
        if (typeof c == "function") {
          let l = c(i);
          l !== a[u] && ((a[u] = l), (s = !0));
        }
        if (typeof c == "string") {
          if (!i || !$e(i, c)) continue;
          let l = i[c];
          l !== a[u] && ((a[u] = l), (s = !0));
        }
      }
      return (s && (o.current = S({}, a)), o.current);
    };
  return Ga(r, n, n);
}
function fe(e, t, o, r) {
  let n = $e(t, o) ? t[o] : void 0,
    i = r ? t[r] : void 0,
    s = un({ value: n, setValue: i });
  (Q(
    () =>
      he(e, [o], (a, u) => {
        let { value: c, setValue: l } = s.current;
        l && a[o] !== u[o] && a[o] !== c && l(a[o]);
      }),
    [e, o]
  ),
    Q(() => {
      if (n !== void 0)
        return (
          e.setState(o, n),
          Xt(e, [o], () => {
            n !== void 0 && e.setState(o, n);
          })
        );
    }));
}
function je(e, t) {
  let [o, r] = gt.useState(() => e(t));
  Q(() => Er(o), [o]);
  let n = gt.useCallback((a) => ue(o, a), [o]),
    i = gt.useMemo(() => A(S({}, o), { useState: n }), [o, n]),
    s = $(() => {
      r((a) => e(S(S({}, t), a.getState())));
    });
  return [i, s];
}
var Ht = V(X(), 1),
  Ja = V(pe(), 1),
  Hf = "button";
function Vf(e) {
  return ao(e) ? !0 : e.tagName === "INPUT" && !qe(e);
}
function Lf(e, t = !1) {
  let o = e.clientHeight,
    { top: r } = e.getBoundingClientRect(),
    n = Math.max(o * 0.875, o - 40) * 1.5,
    i = t ? o - n + r : n + r;
  return e.tagName === "HTML" ? i + e.scrollTop : i;
}
function Nf(e, t = !1) {
  let { top: o } = e.getBoundingClientRect();
  return t ? o + e.clientHeight : o;
}
function Xa(e, t, o, r = !1) {
  var n;
  if (!t || !o) return;
  let { renderedItems: i } = t.getState(),
    s = Mr(e);
  if (!s) return;
  let a = Lf(s, r),
    u,
    c;
  for (let l = 0; l < i.length; l += 1) {
    let m = u;
    if (((u = o(l)), !u)) break;
    if (u === m) continue;
    let f = (n = ht(t, u)) == null ? void 0 : n.element;
    if (!f) continue;
    let v = Nf(f, r) - a,
      p = Math.abs(v);
    if ((r && v <= 0) || (!r && v >= 0)) {
      c !== void 0 && c < p && (u = m);
      break;
    }
    c = p;
  }
  return u;
}
function Bf(e, t) {
  return Oe(e) ? !1 : mr(t, e.target);
}
var Tr = U(function (t) {
    var o = t,
      {
        store: r,
        rowId: n,
        preventScrollOnKeyDown: i = !1,
        moveOnKeyPress: s = !0,
        tabbable: a = !1,
        getItem: u,
        "aria-setsize": c,
        "aria-posinset": l,
      } = o,
      m = K(o, [
        "store",
        "rowId",
        "preventScrollOnKeyDown",
        "moveOnKeyPress",
        "tabbable",
        "getItem",
        "aria-setsize",
        "aria-posinset",
      ]);
    let f = _t();
    r = r || f;
    let d = Ae(m.id),
      v = (0, Ht.useRef)(null),
      p = (0, Ht.useContext)(Ma),
      g = ct(m) && !m.accessibleWhenDisabled,
      {
        rowId: y,
        baseElement: C,
        isActiveItem: x,
        ariaSetSize: h,
        ariaPosInSet: O,
        isTabbable: P,
      } = bo(r, {
        rowId(I) {
          if (n) return n;
          if (I && p?.baseElement && p.baseElement === I.baseElement) return p.id;
        },
        baseElement(I) {
          return I?.baseElement || void 0;
        },
        isActiveItem(I) {
          return !!I && I.activeId === d;
        },
        ariaSetSize(I) {
          if (c != null) return c;
          if (I && p?.ariaSetSize && p.baseElement === I.baseElement) return p.ariaSetSize;
        },
        ariaPosInSet(I) {
          if (l != null) return l;
          if (!I || !p?.ariaPosInSet || p.baseElement !== I.baseElement) return;
          let q = I.renderedItems.filter((L) => L.rowId === y);
          return p.ariaPosInSet + q.findIndex((L) => L.id === d);
        },
        isTabbable(I) {
          if (!I?.renderedItems.length) return !0;
          if (I.virtualFocus) return !1;
          if (a) return !0;
          if (I.activeId === null) return !1;
          let q = r?.item(I.activeId);
          return q?.disabled || !q?.element ? !0 : I.activeId === d;
        },
      }),
      _ = (0, Ht.useCallback)(
        (I) => {
          var q;
          let L = A(S({}, I), {
            id: d || I.id,
            rowId: y,
            disabled: !!g,
            children: (q = I.element) == null ? void 0 : q.textContent,
          });
          return u ? u(L) : L;
        },
        [d, y, g, u]
      ),
      k = m.onFocus,
      T = (0, Ht.useRef)(!1),
      H = $((I) => {
        if ((k?.(I), I.defaultPrevented || on(I) || !d || !r || Bf(I, r))) return;
        let { virtualFocus: q, baseElement: L } = r.getState();
        if (
          (r.setActiveId(d),
          ao(I.currentTarget) && Ra(I.currentTarget),
          !q || !Oe(I) || Vf(I.currentTarget) || !L?.isConnected)
        )
          return;
        (Dt() &&
          I.currentTarget.hasAttribute("data-autofocus") &&
          I.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" }),
          (T.current = !0),
          I.relatedTarget === L || mr(r, I.relatedTarget) ? Ta(L) : L.focus());
      }),
      W = m.onBlurCapture,
      b = $((I) => {
        if ((W?.(I), I.defaultPrevented)) return;
        let q = r?.getState();
        q?.virtualFocus && T.current && ((T.current = !1), I.preventDefault(), I.stopPropagation());
      }),
      M = m.onKeyDown,
      D = ne(i),
      E = ne(s),
      R = $((I) => {
        if ((M?.(I), I.defaultPrevented || !Oe(I) || !r)) return;
        let { currentTarget: q } = I,
          L = r.getState(),
          ce = r.item(d),
          Ee = !!ce?.rowId,
          we = L.orientation !== "horizontal",
          xe = L.orientation !== "vertical",
          ze = () => !!(Ee || xe || !L.baseElement || !Te(L.baseElement)),
          Ue = {
            ArrowUp: (Ee || we) && r.up,
            ArrowRight: (Ee || xe) && r.next,
            ArrowDown: (Ee || we) && r.down,
            ArrowLeft: (Ee || xe) && r.previous,
            Home: () => {
              if (ze()) return !Ee || I.ctrlKey ? r?.first() : r?.previous(-1);
            },
            End: () => {
              if (ze()) return !Ee || I.ctrlKey ? r?.last() : r?.next(-1);
            },
            PageUp: () => Xa(q, r, r?.up, !0),
            PageDown: () => Xa(q, r, r?.down),
          }[I.key];
        if (Ue) {
          if (ao(q)) {
            let Le = Ir(q),
              Mt = xe && I.key === "ArrowLeft",
              Kt = xe && I.key === "ArrowRight",
              ut = we && I.key === "ArrowUp",
              dt = we && I.key === "ArrowDown";
            if (Kt || dt) {
              let { length: zt } = li(q);
              if (Le.end !== zt) return;
            } else if ((Mt || ut) && Le.start !== 0) return;
          }
          let Ye = Ue();
          if (D(I) || Ye !== void 0) {
            if (!E(I)) return;
            (I.preventDefault(), r.move(Ye));
          }
        }
      }),
      F = (0, Ht.useMemo)(() => ({ id: d, baseElement: C }), [d, C]);
    return (
      (m = ae(m, (I) => (0, Ja.jsx)(Ia.Provider, { value: F, children: I }), [F])),
      (m = A(S({ id: d, "data-active-item": x || void 0 }, m), {
        ref: Z(v, m.ref),
        tabIndex: P ? m.tabIndex : -1,
        onFocus: H,
        onBlurCapture: b,
        onKeyDown: R,
      })),
      (m = vo(m)),
      (m = gi(
        A(S({ store: r }, m), { getItem: _, shouldRegisterItem: d ? m.shouldRegisterItem : !1 })
      )),
      Be(A(S({}, m), { "aria-setsize": h, "aria-posinset": O }))
    );
  }),
  Ci = Qt(
    j(function (t) {
      let o = Tr(t);
      return z(Hf, o);
    })
  );
function ho(e) {
  let t = [];
  for (let o of e) t.push(...o);
  return t;
}
function Dr(e) {
  return e.slice().reverse();
}
var xt = V(X(), 1),
  Za = V(pe(), 1),
  Wf = "div";
function jf(e) {
  return e.some((t) => !!t.rowId);
}
function Kf(e) {
  let t = e.target;
  return t && !Te(t) ? !1 : e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
function zf(e) {
  return e.key === "Shift" || e.key === "Control" || e.key === "Alt" || e.key === "Meta";
}
function Qa(e, t, o) {
  return $((r) => {
    var n;
    if ((t?.(r), r.defaultPrevented || r.isPropagationStopped() || !Oe(r) || zf(r) || Kf(r)))
      return;
    let i = e.getState(),
      s = (n = ht(e, i.activeId)) == null ? void 0 : n.element;
    if (!s) return;
    let a = r,
      { view: u } = a,
      c = K(a, ["view"]),
      l = o?.current;
    (s !== l && s.focus(),
      da(s, r.type, c) || r.preventDefault(),
      r.currentTarget.contains(s) && r.stopPropagation());
  });
}
function Uf(e) {
  return Oa(ho(Dr(Aa(e))));
}
function $f(e) {
  let [t, o] = (0, xt.useState)(!1),
    r = (0, xt.useCallback)(() => o(!0), []),
    n = e.useState((i) => ht(e, i.activeId));
  return (
    (0, xt.useEffect)(() => {
      let i = n?.element;
      t && i && (o(!1), i.focus({ preventScroll: !0 }));
    }, [n, t]),
    r
  );
}
var _r = U(function (t) {
    var o = t,
      { store: r, composite: n = !0, focusOnMove: i = n, moveOnKeyPress: s = !0 } = o,
      a = K(o, ["store", "composite", "focusOnMove", "moveOnKeyPress"]);
    let u = Ea();
    ((r = r || u), ee(r, !1));
    let c = (0, xt.useRef)(null),
      l = (0, xt.useRef)(null),
      m = $f(r),
      f = r.useState("moves"),
      [, d] = xa(n ? r.setBaseElement : null);
    ((0, xt.useEffect)(() => {
      var b;
      if (!r || !f || !n || !i) return;
      let { activeId: M } = r.getState(),
        D = (b = ht(r, M)) == null ? void 0 : b.element;
      D && Na(D);
    }, [r, f, n, i]),
      Q(() => {
        if (!r || !f || !n) return;
        let { baseElement: b, activeId: M } = r.getState();
        if (!(M === null) || !b) return;
        let E = l.current;
        ((l.current = null), E && lr(E, { relatedTarget: b }), ot(b) || b.focus());
      }, [r, f, n]));
    let v = r.useState("activeId"),
      p = r.useState("virtualFocus");
    Q(() => {
      var b;
      if (!r || !n || !p) return;
      let M = l.current;
      if (((l.current = null), !M)) return;
      let E = ((b = ht(r, v)) == null ? void 0 : b.element) || Xe(M);
      E !== M && lr(M, { relatedTarget: E });
    }, [r, v, p, n]);
    let w = Qa(r, a.onKeyDownCapture, l),
      g = Qa(r, a.onKeyUpCapture, l),
      y = a.onFocusCapture,
      C = $((b) => {
        if ((y?.(b), b.defaultPrevented || !r)) return;
        let { virtualFocus: M } = r.getState();
        if (!M) return;
        let D = b.relatedTarget,
          E = Da(b.currentTarget);
        Oe(b) && E && (b.stopPropagation(), (l.current = D));
      }),
      x = a.onFocus,
      h = $((b) => {
        if ((x?.(b), b.defaultPrevented || !n || !r)) return;
        let { relatedTarget: M } = b,
          { virtualFocus: D } = r.getState();
        D ? Oe(b) && !mr(r, M) && queueMicrotask(m) : Oe(b) && r.setActiveId(null);
      }),
      O = a.onBlurCapture,
      P = $((b) => {
        var M;
        if ((O?.(b), b.defaultPrevented || !r)) return;
        let { virtualFocus: D, activeId: E } = r.getState();
        if (!D) return;
        let R = (M = ht(r, E)) == null ? void 0 : M.element,
          F = b.relatedTarget,
          I = mr(r, F),
          q = l.current;
        ((l.current = null),
          Oe(b) && I
            ? (F === R ? q && q !== F && lr(q, b) : R ? lr(R, b) : q && lr(q, b),
              b.stopPropagation())
            : !mr(r, b.target) && R && lr(R, b));
      }),
      _ = a.onKeyDown,
      k = ne(s),
      T = $((b) => {
        var M;
        if ((_?.(b), b.nativeEvent.isComposing || b.defaultPrevented || !r || !Oe(b))) return;
        let { orientation: D, renderedItems: E, activeId: R } = r.getState(),
          F = ht(r, R);
        if ((M = F?.element) != null && M.isConnected) return;
        let I = D !== "horizontal",
          q = D !== "vertical",
          L = jf(E);
        if (
          (b.key === "ArrowLeft" ||
            b.key === "ArrowRight" ||
            b.key === "Home" ||
            b.key === "End") &&
          Te(b.currentTarget)
        )
          return;
        let xe = {
          ArrowUp:
            (L || I) &&
            (() => {
              if (L) {
                let ze = Uf(E);
                return ze?.id;
              }
              return r?.last();
            }),
          ArrowRight: (L || q) && r.first,
          ArrowDown: (L || I) && r.first,
          ArrowLeft: (L || q) && r.last,
          Home: r.first,
          End: r.last,
          PageUp: r.first,
          PageDown: r.last,
        }[b.key];
        if (xe) {
          let ze = xe();
          if (ze !== void 0) {
            if (!k(b)) return;
            (b.preventDefault(), r.move(ze));
          }
        }
      });
    a = ae(a, (b) => (0, Za.jsx)(bt, { value: r, children: b }), [r]);
    let H = r.useState((b) => {
      var M;
      if (r && n && b.virtualFocus) return (M = ht(r, b.activeId)) == null ? void 0 : M.id;
    });
    a = A(S({ "aria-activedescendant": H }, a), {
      ref: Z(c, d, a.ref),
      onKeyDownCapture: w,
      onKeyUpCapture: g,
      onFocusCapture: C,
      onFocus: h,
      onBlurCapture: P,
      onKeyDown: T,
    });
    let W = r.useState((b) => n && (b.virtualFocus || b.activeId === null));
    return ((a = Ft(S({ focusable: W }, a))), a);
  }),
  Pi = j(function (t) {
    let o = _r(t);
    return z(Wf, o);
  });
var go = Pe(),
  _b = go.useContext,
  Fb = go.useScopedContext,
  xo = go.useProviderContext,
  eu = go.ContextProvider,
  tu = go.ScopedContextProvider;
var Ei = V(X(), 1),
  yo = Pe([eu], [tu]),
  Nb = yo.useContext,
  Bb = yo.useScopedContext,
  Fr = yo.useProviderContext,
  ru = yo.ContextProvider,
  Hr = yo.ScopedContextProvider,
  ou = (0, Ei.createContext)(void 0),
  nu = (0, Ei.createContext)(void 0);
var Vr = V(X(), 1),
  au = V(ni(), 1),
  Ii = V(pe(), 1),
  qf = "div";
function iu(e, t) {
  let o = setTimeout(t, e);
  return () => clearTimeout(o);
}
function Gf(e) {
  let t = requestAnimationFrame(() => {
    t = requestAnimationFrame(e);
  });
  return () => cancelAnimationFrame(t);
}
function su(...e) {
  return e
    .join(", ")
    .split(", ")
    .reduce((t, o) => {
      let r = o.endsWith("ms") ? 1 : 1e3,
        n = Number.parseFloat(o || "0s") * r;
      return n > t ? n : t;
    }, 0);
}
function dr(e, t, o) {
  return !o && t !== !1 && (!e || !!t);
}
var wo = U(function (t) {
    var o = t,
      { store: r, alwaysVisible: n } = o,
      i = K(o, ["store", "alwaysVisible"]);
    let s = xo();
    ((r = r || s), ee(r, !1));
    let a = (0, Vr.useRef)(null),
      u = Ae(i.id),
      [c, l] = (0, Vr.useState)(null),
      m = r.useState("open"),
      f = r.useState("mounted"),
      d = r.useState("animated"),
      v = r.useState("contentElement"),
      p = ue(r.disclosure, "contentElement");
    (Q(() => {
      a.current && r?.setContentElement(a.current);
    }, [r]),
      Q(() => {
        let C;
        return (
          r?.setState("animated", (x) => ((C = x), !0)),
          () => {
            C !== void 0 && r?.setState("animated", C);
          }
        );
      }, [r]),
      Q(() => {
        if (d) {
          if (!v?.isConnected) {
            l(null);
            return;
          }
          return Gf(() => {
            l(m ? "enter" : f ? "leave" : null);
          });
        }
      }, [d, v, m, f]),
      Q(() => {
        if (!r || !d || !c || !v) return;
        let C = () => r?.setState("animating", !1),
          x = () => (0, au.flushSync)(C);
        if ((c === "leave" && m) || (c === "enter" && !m)) return;
        if (typeof d == "number") return iu(d, x);
        let {
            transitionDuration: h,
            animationDuration: O,
            transitionDelay: P,
            animationDelay: _,
          } = getComputedStyle(v),
          {
            transitionDuration: k = "0",
            animationDuration: T = "0",
            transitionDelay: H = "0",
            animationDelay: W = "0",
          } = p ? getComputedStyle(p) : {},
          b = su(P, _, H, W),
          M = su(h, O, k, T),
          D = b + M;
        if (!D) {
          (c === "enter" && r.setState("animated", !1), C());
          return;
        }
        let E = 1e3 / 60,
          R = Math.max(D - E, 0);
        return iu(R, x);
      }, [r, d, v, p, m, c]),
      (i = ae(i, (C) => (0, Ii.jsx)(Hr, { value: r, children: C }), [r])));
    let w = dr(f, i.hidden, n),
      g = i.style,
      y = (0, Vr.useMemo)(() => (w ? A(S({}, g), { display: "none" }) : g), [w, g]);
    return (
      (i = A(
        S(
          {
            id: u,
            "data-open": m || void 0,
            "data-enter": c === "enter" || void 0,
            "data-leave": c === "leave" || void 0,
            hidden: w,
          },
          i
        ),
        { ref: Z(u ? r.setContentElement : null, a, i.ref), style: y }
      )),
      Be(i)
    );
  }),
  Yf = j(function (t) {
    let o = wo(t);
    return z(qf, o);
  }),
  Yb = j(function (t) {
    var o = t,
      { unmountOnHide: r } = o,
      n = K(o, ["unmountOnHide"]);
    let i = xo(),
      s = n.store || i;
    return ue(s, (u) => !r || u?.mounted) === !1 ? null : (0, Ii.jsx)(Yf, S({}, n));
  });
function So(e = {}) {
  let t = Rt(e.store, cr(e.disclosure, ["contentElement", "disclosureElement"]));
  let o = t?.getState(),
    r = Y(e.open, o?.open, e.defaultOpen, !1),
    n = Y(e.animated, o?.animated, !1),
    i = {
      open: r,
      animated: n,
      animating: !!n && r,
      mounted: r,
      contentElement: Y(o?.contentElement, null),
      disclosureElement: Y(o?.disclosureElement, null),
    },
    s = Me(i, t);
  return (
    Se(s, () =>
      he(s, ["animated", "animating"], (a) => {
        a.animated || s.setState("animating", !1);
      })
    ),
    Se(s, () =>
      Yt(s, ["open"], () => {
        s.getState().animated && s.setState("animating", !0);
      })
    ),
    Se(s, () =>
      he(s, ["open", "animating"], (a) => {
        s.setState("mounted", a.open || a.animating);
      })
    ),
    se(J({}, s), {
      disclosure: e.disclosure,
      setOpen: (a) => s.setState("open", a),
      show: () => s.setState("open", !0),
      hide: () => s.setState("open", !1),
      toggle: () => s.setState("open", (a) => !a),
      stopAnimation: () => s.setState("animating", !1),
      setContentElement: (a) => s.setState("contentElement", a),
      setDisclosureElement: (a) => s.setState("disclosureElement", a),
    })
  );
}
function Mi(e, t, o) {
  return (
    rt(t, [o.store, o.disclosure]),
    fe(e, o, "open", "setOpen"),
    fe(e, o, "mounted", "setMounted"),
    fe(e, o, "animated"),
    Object.assign(e, { disclosure: o.disclosure })
  );
}
function uu(e = {}) {
  let [t, o] = je(So, e);
  return Mi(t, o, e);
}
var Co = Pe([ru], [Hr]),
  ah = Co.useContext,
  uh = Co.useScopedContext,
  pr = Co.useProviderContext,
  hn = Co.ContextProvider,
  tr = Co.ScopedContextProvider;
function Jf(e) {
  var t;
  let o = e.find((i) => !!i.element),
    r = [...e].reverse().find((i) => !!i.element),
    n = (t = o?.element) == null ? void 0 : t.parentElement;
  for (; n && r?.element; ) {
    if (r && n.contains(r.element)) return n;
    n = n.parentElement;
  }
  return te(n).body;
}
function Qf(e) {
  return e?.__unstablePrivateStore;
}
function cu(e = {}) {
  var t;
  e.store;
  let o = (t = e.store) == null ? void 0 : t.getState(),
    r = Y(e.items, o?.items, e.defaultItems, []),
    n = new Map(r.map((f) => [f.id, f])),
    i = { items: r, renderedItems: Y(o?.renderedItems, []) },
    s = Qf(e.store),
    a = Me({ items: r, renderedItems: i.renderedItems }, s),
    u = Me(i, e.store),
    c = (f) => {
      let d = lo(f, (v) => v.element);
      (a.setState("renderedItems", d), u.setState("renderedItems", d));
    };
  (Se(u, () => Er(a)),
    Se(a, () =>
      Xt(a, ["items"], (f) => {
        u.setState("items", f.items);
      })
    ),
    Se(a, () =>
      Xt(a, ["renderedItems"], (f) => {
        let d = !0,
          v = requestAnimationFrame(() => {
            let { renderedItems: y } = u.getState();
            f.renderedItems !== y && c(f.renderedItems);
          });
        if (typeof IntersectionObserver != "function") return () => cancelAnimationFrame(v);
        let p = () => {
            if (d) {
              d = !1;
              return;
            }
            (cancelAnimationFrame(v), (v = requestAnimationFrame(() => c(f.renderedItems))));
          },
          w = Jf(f.renderedItems),
          g = new IntersectionObserver(p, { root: w });
        for (let y of f.renderedItems) y.element && g.observe(y.element);
        return () => {
          (cancelAnimationFrame(v), g.disconnect());
        };
      })
    ));
  let l = (f, d, v = !1) => {
      let p;
      return (
        d((g) => {
          let y = g.findIndex(({ id: x }) => x === f.id),
            C = g.slice();
          if (y !== -1) {
            p = g[y];
            let x = J(J({}, p), f);
            ((C[y] = x), n.set(f.id, x));
          } else (C.push(f), n.set(f.id, f));
          return C;
        }),
        () => {
          d((g) => {
            if (!p) return (v && n.delete(f.id), g.filter(({ id: x }) => x !== f.id));
            let y = g.findIndex(({ id: x }) => x === f.id);
            if (y === -1) return g;
            let C = g.slice();
            return ((C[y] = p), n.set(f.id, p), C);
          });
        }
      );
    },
    m = (f) => l(f, (d) => a.setState("items", d), !0);
  return se(J({}, u), {
    registerItem: m,
    renderItem: (f) =>
      be(
        m(f),
        l(f, (d) => a.setState("renderedItems", d))
      ),
    item: (f) => {
      if (!f) return null;
      let d = n.get(f);
      if (!d) {
        let { items: v } = a.getState();
        ((d = v.find((p) => p.id === f)), d && n.set(f, d));
      }
      return d || null;
    },
    __unstablePrivateStore: a,
  });
}
function lu(e, t, o) {
  return (rt(t, [o.store]), fe(e, o, "items", "setItems"), e);
}
var Zf = { id: null };
function Vt(e, t) {
  return e.find((o) => (t ? !o.disabled && o.id !== t : !o.disabled));
}
function em(e, t) {
  return e.filter((o) => (t ? !o.disabled && o.id !== t : !o.disabled));
}
function fu(e, t) {
  return e.filter((o) => o.rowId === t);
}
function tm(e, t, o = !1) {
  let r = e.findIndex((n) => n.id === t);
  return [...e.slice(r + 1), ...(o ? [Zf] : []), ...e.slice(0, r)];
}
function mu(e) {
  let t = [];
  for (let o of e) {
    let r = t.find((n) => {
      var i;
      return ((i = n[0]) == null ? void 0 : i.rowId) === o.rowId;
    });
    r ? r.push(o) : t.push([o]);
  }
  return t;
}
function du(e) {
  let t = 0;
  for (let { length: o } of e) o > t && (t = o);
  return t;
}
function rm(e) {
  return { id: "__EMPTY_ITEM__", disabled: !0, rowId: e };
}
function om(e, t, o) {
  let r = du(e);
  for (let n of e)
    for (let i = 0; i < r; i += 1) {
      let s = n[i];
      if (!s || (o && s.disabled)) {
        let u = i === 0 && o ? Vt(n) : n[i - 1];
        n[i] = u && t !== u.id && o ? u : rm(u?.rowId);
      }
    }
  return e;
}
function nm(e) {
  let t = mu(e),
    o = du(t),
    r = [];
  for (let n = 0; n < o; n += 1)
    for (let i of t) {
      let s = i[n];
      s && r.push(se(J({}, s), { rowId: s.rowId ? `${n}` : void 0 }));
    }
  return r;
}
function vr(e = {}) {
  var t;
  let o = (t = e.store) == null ? void 0 : t.getState(),
    r = cu(e),
    n = Y(e.activeId, o?.activeId, e.defaultActiveId),
    i = se(J({}, r.getState()), {
      id: Y(e.id, o?.id, `id-${Math.random().toString(36).slice(2, 8)}`),
      activeId: n,
      baseElement: Y(o?.baseElement, null),
      includesBaseElement: Y(e.includesBaseElement, o?.includesBaseElement, n === null),
      moves: Y(o?.moves, 0),
      orientation: Y(e.orientation, o?.orientation, "both"),
      rtl: Y(e.rtl, o?.rtl, !1),
      virtualFocus: Y(e.virtualFocus, o?.virtualFocus, !1),
      focusLoop: Y(e.focusLoop, o?.focusLoop, !1),
      focusWrap: Y(e.focusWrap, o?.focusWrap, !1),
      focusShift: Y(e.focusShift, o?.focusShift, !1),
    }),
    s = Me(i, r, e.store);
  Se(s, () =>
    he(s, ["renderedItems", "activeId"], (u) => {
      s.setState("activeId", (c) => {
        var l;
        return c !== void 0 ? c : (l = Vt(u.renderedItems)) == null ? void 0 : l.id;
      });
    })
  );
  let a = (u = "next", c = {}) => {
    var l, m;
    let f = s.getState(),
      {
        skip: d = 0,
        activeId: v = f.activeId,
        focusShift: p = f.focusShift,
        focusLoop: w = f.focusLoop,
        focusWrap: g = f.focusWrap,
        includesBaseElement: y = f.includesBaseElement,
        renderedItems: C = f.renderedItems,
        rtl: x = f.rtl,
      } = c,
      h = u === "up" || u === "down",
      O = u === "next" || u === "down",
      P = O ? x && !h : !x || h,
      _ = p && !d,
      k = h ? ho(om(mu(C), v, _)) : C;
    if (((k = P ? Dr(k) : k), (k = h ? nm(k) : k), v == null))
      return (l = Vt(k)) == null ? void 0 : l.id;
    let T = k.find((I) => I.id === v);
    if (!T) return (m = Vt(k)) == null ? void 0 : m.id;
    let H = k.some((I) => I.rowId),
      W = k.indexOf(T),
      b = k.slice(W + 1),
      M = fu(b, T.rowId);
    if (d) {
      let I = em(M, v),
        q = I.slice(d)[0] || I[I.length - 1];
      return q?.id;
    }
    let D = w && (h ? w !== "horizontal" : w !== "vertical"),
      E = H && g && (h ? g !== "horizontal" : g !== "vertical"),
      R = O ? (!H || h) && D && y : h ? y : !1;
    if (D) {
      let I = E && !R ? k : fu(k, T.rowId),
        q = tm(I, v, R),
        L = Vt(q, v);
      return L?.id;
    }
    if (E) {
      let I = Vt(R ? M : b, v);
      return R ? I?.id || null : I?.id;
    }
    let F = Vt(M, v);
    return !F && R ? null : F?.id;
  };
  return se(J(J({}, r), s), {
    setBaseElement: (u) => s.setState("baseElement", u),
    setActiveId: (u) => s.setState("activeId", u),
    move: (u) => {
      u !== void 0 && (s.setState("activeId", u), s.setState("moves", (c) => c + 1));
    },
    first: () => {
      var u;
      return (u = Vt(s.getState().renderedItems)) == null ? void 0 : u.id;
    },
    last: () => {
      var u;
      return (u = Vt(Dr(s.getState().renderedItems))) == null ? void 0 : u.id;
    },
    next: (u) => (u !== void 0 && typeof u == "number" && (u = { skip: u }), a("next", u)),
    previous: (u) => (u !== void 0 && typeof u == "number" && (u = { skip: u }), a("previous", u)),
    down: (u) => (u !== void 0 && typeof u == "number" && (u = { skip: u }), a("down", u)),
    up: (u) => (u !== void 0 && typeof u == "number" && (u = { skip: u }), a("up", u)),
  });
}
function gn(e) {
  let t = Ae(e.id);
  return S({ id: t }, e);
}
function Lr(e, t, o) {
  return (
    (e = lu(e, t, o)),
    fe(e, o, "activeId", "setActiveId"),
    fe(e, o, "includesBaseElement"),
    fe(e, o, "virtualFocus"),
    fe(e, o, "orientation"),
    fe(e, o, "rtl"),
    fe(e, o, "focusLoop"),
    fe(e, o, "focusWrap"),
    fe(e, o, "focusShift"),
    e
  );
}
function ki(e = {}) {
  e = gn(e);
  let [t, o] = je(vr, e);
  return Lr(t, o, e);
}
var xn = V(X(), 1),
  yn = (0, xn.createContext)(void 0),
  Po = Pe([hn, bt], [tr, Zt]),
  Oi = Po.useContext,
  wn = Po.useScopedContext,
  Sn = Po.useProviderContext,
  pu = Po.ContextProvider,
  vu = Po.ScopedContextProvider,
  bu = (0, xn.createContext)(void 0),
  hu = (0, xn.createContext)(!1);
var sm = "hr",
  Ai = U(function (t) {
    var o = t,
      { orientation: r = "horizontal" } = o,
      n = K(o, ["orientation"]);
    return ((n = S({ role: "separator", "aria-orientation": r }, n)), n);
  }),
  Hh = j(function (t) {
    let o = Ai(t);
    return z(sm, o);
  });
var am = "hr",
  Ri = U(function (t) {
    var o = t,
      { store: r } = o,
      n = K(o, ["store"]);
    let i = _t();
    ((r = r || i), ee(r, !1));
    let s = r.useState((a) => (a.orientation === "horizontal" ? "vertical" : "horizontal"));
    return ((n = Ai(A(S({}, n), { orientation: s }))), n);
  }),
  um = j(function (t) {
    let o = Ri(t);
    return z(am, o);
  });
var Eo = Pe([hn], [tr]),
  cm = Eo.useContext,
  $h = Eo.useScopedContext,
  Io = Eo.useProviderContext,
  gu = Eo.ContextProvider,
  Cn = Eo.ScopedContextProvider;
function Pn(e) {
  return [e.clientX, e.clientY];
}
function Ti(e, t) {
  let [o, r] = e,
    n = !1,
    i = t.length;
  for (let s = i, a = 0, u = s - 1; a < s; u = a++) {
    let [c, l] = t[a],
      [m, f] = t[u],
      [, d] = t[u === 0 ? s - 1 : u - 1] || [0, 0],
      v = (l - f) * (o - c) - (c - m) * (r - l);
    if (f < l) {
      if (r >= f && r < l) {
        if (v === 0) return !0;
        v > 0 && (r === f ? r > d && (n = !n) : (n = !n));
      }
    } else if (l < f) {
      if (r > l && r <= f) {
        if (v === 0) return !0;
        v < 0 && (r === f ? r < d && (n = !n) : (n = !n));
      }
    } else if (r === l && ((o >= m && o <= c) || (o >= c && o <= m))) return !0;
  }
  return n;
}
function lm(e, t) {
  let { top: o, right: r, bottom: n, left: i } = t,
    [s, a] = e,
    u = s < i ? "left" : s > r ? "right" : null,
    c = a < o ? "top" : a > n ? "bottom" : null;
  return [u, c];
}
function Di(e, t) {
  let o = e.getBoundingClientRect(),
    { top: r, right: n, bottom: i, left: s } = o,
    [a, u] = lm(t, o),
    c = [t];
  return (
    a
      ? (u !== "top" && c.push([a === "left" ? s : n, r]),
        c.push([a === "left" ? n : s, r]),
        c.push([a === "left" ? n : s, i]),
        u !== "bottom" && c.push([a === "left" ? s : n, i]))
      : u === "top"
        ? (c.push([s, r]), c.push([s, i]), c.push([n, i]), c.push([n, r]))
        : (c.push([s, i]), c.push([s, r]), c.push([n, r]), c.push([n, i])),
    c
  );
}
var xu = V(X(), 1),
  _i = (0, xu.createContext)(null);
var fm = "span",
  Fi = U(function (t) {
    return (
      (t = A(S({}, t), {
        style: S(
          {
            border: 0,
            clip: "rect(0 0 0 0)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            whiteSpace: "nowrap",
            width: "1px",
          },
          t.style
        ),
      })),
      t
    );
  }),
  Qh = j(function (t) {
    let o = Fi(t);
    return z(fm, o);
  });
var mm = "span",
  dm = U(function (t) {
    return (
      (t = A(S({ "data-focus-trap": "", tabIndex: 0, "aria-hidden": !0 }, t), {
        style: S({ position: "fixed", top: 0, left: 0 }, t.style),
      })),
      (t = Fi(t)),
      t
    );
  }),
  Mo = j(function (t) {
    let o = dm(t);
    return z(mm, o);
  });
var Ze = V(X(), 1),
  Hi = V(ni(), 1),
  Ve = V(pe(), 1),
  pm = "div";
function vm(e) {
  return te(e).body;
}
function bm(e, t) {
  return t ? (typeof t == "function" ? t(e) : t) : te(e).createElement("div");
}
function hm(e = "id") {
  return `${e ? `${e}-` : ""}${Math.random().toString(36).slice(2, 8)}`;
}
function rr(e) {
  queueMicrotask(() => {
    e?.focus();
  });
}
var Vi = U(function (t) {
    var o = t,
      {
        preserveTabOrder: r,
        preserveTabOrderAnchor: n,
        portalElement: i,
        portalRef: s,
        portal: a = !0,
      } = o,
      u = K(o, [
        "preserveTabOrder",
        "preserveTabOrderAnchor",
        "portalElement",
        "portalRef",
        "portal",
      ]);
    let c = (0, Ze.useRef)(null),
      l = Z(c, u.ref),
      m = (0, Ze.useContext)(_i),
      [f, d] = (0, Ze.useState)(null),
      [v, p] = (0, Ze.useState)(null),
      w = (0, Ze.useRef)(null),
      g = (0, Ze.useRef)(null),
      y = (0, Ze.useRef)(null),
      C = (0, Ze.useRef)(null);
    return (
      Q(() => {
        let x = c.current;
        if (!x || !a) {
          d(null);
          return;
        }
        let h = bm(x, i);
        if (!h) {
          d(null);
          return;
        }
        let O = h.isConnected;
        if (
          (O || (m || vm(x)).appendChild(h),
          h.id || (h.id = x.id ? `portal/${x.id}` : hm()),
          d(h),
          oo(s, h),
          !O)
        )
          return () => {
            (h.remove(), oo(s, null));
          };
      }, [a, i, m, s]),
      Q(() => {
        if (!a || !r || !n) return;
        let h = te(n).createElement("span");
        return (
          (h.style.position = "fixed"),
          n.insertAdjacentElement("afterend", h),
          p(h),
          () => {
            (h.remove(), p(null));
          }
        );
      }, [a, r, n]),
      (0, Ze.useEffect)(() => {
        if (!f || !r) return;
        let x = 0,
          h = (O) => {
            if (!pt(O)) return;
            let P = O.type === "focusin";
            if ((cancelAnimationFrame(x), P)) return La(f);
            x = requestAnimationFrame(() => {
              Va(f, !0);
            });
          };
        return (
          f.addEventListener("focusin", h, !0),
          f.addEventListener("focusout", h, !0),
          () => {
            (cancelAnimationFrame(x),
              f.removeEventListener("focusin", h, !0),
              f.removeEventListener("focusout", h, !0));
          }
        );
      }, [f, r]),
      (u = ae(
        u,
        (x) => {
          if (((x = (0, Ve.jsx)(_i.Provider, { value: f || m, children: x })), !a)) return x;
          if (!f)
            return (0, Ve.jsx)("span", {
              ref: l,
              id: u.id,
              style: { position: "fixed" },
              hidden: !0,
            });
          ((x = (0, Ve.jsxs)(Ve.Fragment, {
            children: [
              r &&
                f &&
                (0, Ve.jsx)(Mo, {
                  ref: g,
                  "data-focus-trap": u.id,
                  className: "__focus-trap-inner-before",
                  onFocus: (O) => {
                    pt(O, f) ? rr(vn()) : rr(w.current);
                  },
                }),
              x,
              r &&
                f &&
                (0, Ve.jsx)(Mo, {
                  ref: y,
                  "data-focus-trap": u.id,
                  className: "__focus-trap-inner-after",
                  onFocus: (O) => {
                    pt(O, f) ? rr(yi()) : rr(C.current);
                  },
                }),
            ],
          })),
            f && (x = (0, Hi.createPortal)(x, f)));
          let h = (0, Ve.jsxs)(Ve.Fragment, {
            children: [
              r &&
                f &&
                (0, Ve.jsx)(Mo, {
                  ref: w,
                  "data-focus-trap": u.id,
                  className: "__focus-trap-outer-before",
                  onFocus: (O) => {
                    !(O.relatedTarget === C.current) && pt(O, f) ? rr(g.current) : rr(yi());
                  },
                }),
              r && (0, Ve.jsx)("span", { "aria-owns": f?.id, style: { position: "fixed" } }),
              r &&
                f &&
                (0, Ve.jsx)(Mo, {
                  ref: C,
                  "data-focus-trap": u.id,
                  className: "__focus-trap-outer-after",
                  onFocus: (O) => {
                    if (pt(O, f)) rr(y.current);
                    else {
                      let P = vn();
                      if (P === g.current) {
                        requestAnimationFrame(() => {
                          var _;
                          return (_ = vn()) == null ? void 0 : _.focus();
                        });
                        return;
                      }
                      rr(P);
                    }
                  },
                }),
            ],
          });
          return (
            v && r && (h = (0, Hi.createPortal)(h, v)),
            (0, Ve.jsxs)(Ve.Fragment, { children: [h, x] })
          );
        },
        [f, m, a, u.id, r, v]
      )),
      (u = A(S({}, u), { ref: l })),
      u
    );
  }),
  dg = j(function (t) {
    let o = Vi(t);
    return z(pm, o);
  });
var yu = V(X(), 1),
  Li = (0, yu.createContext)(0);
var wu = V(X(), 1),
  Su = V(pe(), 1);
function Cu({ level: e, children: t }) {
  let o = (0, wu.useContext)(Li),
    r = Math.max(Math.min(e || o + 1, 6), 1);
  return (0, Su.jsx)(Li.Provider, { value: r, children: t });
}
var Pu = V(pe(), 1),
  gm = "div",
  Ni = U(function (t) {
    var o = t,
      { autoFocusOnShow: r = !0 } = o,
      n = K(o, ["autoFocusOnShow"]);
    return ((n = ae(n, (i) => (0, Pu.jsx)(dn.Provider, { value: r, children: i }), [r])), n);
  }),
  Sg = j(function (t) {
    let o = Ni(t);
    return z(gm, o);
  });
function Eu(e, t) {
  let r = te(e).createElement("button");
  return (
    (r.type = "button"),
    (r.tabIndex = -1),
    (r.textContent = "Dismiss popup"),
    Object.assign(r.style, {
      border: "0px",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0px",
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px",
    }),
    r.addEventListener("click", t),
    e.prepend(r),
    () => {
      (r.removeEventListener("click", t), r.remove());
    }
  );
}
var En = V(X(), 1);
function Iu(e) {
  let t = (0, En.useRef)();
  return (
    (0, En.useEffect)(() => {
      if (!e) {
        t.current = null;
        return;
      }
      return ge(
        "mousedown",
        (r) => {
          t.current = r.target;
        },
        !0
      );
    }, [e]),
    t
  );
}
var Bi = new WeakMap();
function Nr(e, t, o) {
  Bi.has(e) || Bi.set(e, new Map());
  let r = Bi.get(e),
    n = r.get(t);
  if (!n)
    return (
      r.set(t, o()),
      () => {
        var a;
        ((a = r.get(t)) == null || a(), r.delete(t));
      }
    );
  let i = o(),
    s = () => {
      (i(), n(), r.delete(t));
    };
  return (
    r.set(t, s),
    () => {
      r.get(t) === s && (i(), r.set(t, n));
    }
  );
}
function ko(e, t, o) {
  return Nr(e, t, () => {
    let n = e.getAttribute(t);
    return (
      e.setAttribute(t, o),
      () => {
        n == null ? e.removeAttribute(t) : e.setAttribute(t, n);
      }
    );
  });
}
function yt(e, t, o) {
  return Nr(e, t, () => {
    let n = t in e,
      i = e[t];
    return (
      (e[t] = o),
      () => {
        n ? (e[t] = i) : delete e[t];
      }
    );
  });
}
function Oo(e, t) {
  return e
    ? Nr(e, "style", () => {
        let r = e.style.cssText;
        return (
          Object.assign(e.style, t),
          () => {
            e.style.cssText = r;
          }
        );
      })
    : () => {};
}
function Mu(e, t, o) {
  return e
    ? Nr(e, t, () => {
        let n = e.style.getPropertyValue(t);
        return (
          e.style.setProperty(t, o),
          () => {
            n ? e.style.setProperty(t, n) : e.style.removeProperty(t);
          }
        );
      })
    : () => {};
}
var xm = ["SCRIPT", "STYLE"];
function Wi(e) {
  return `__ariakit-dialog-snapshot-${e}`;
}
function ym(e, t) {
  let o = te(t),
    r = Wi(e);
  if (!o.body[r]) return !0;
  do {
    if (t === o.body) return !1;
    if (t[r]) return !0;
    if (!t.parentElement) return !1;
    t = t.parentElement;
  } while (!0);
}
function wm(e, t, o) {
  return xm.includes(t.tagName) || !ym(e, t) ? !1 : !o.some((r) => r && le(t, r));
}
function Ao(e, t, o, r) {
  for (let n of t) {
    if (!n?.isConnected) continue;
    let i = t.some((u) => (!u || u === n ? !1 : u.contains(n))),
      s = te(n),
      a = n;
    for (; n.parentElement && n !== s.body; ) {
      if ((r?.(n.parentElement, a), !i))
        for (let u of n.parentElement.children) wm(e, u, t) && o(u, a);
      n = n.parentElement;
    }
  }
}
function ku(e, t) {
  let { body: o } = te(t[0]),
    r = [];
  return (
    Ao(e, t, (i) => {
      r.push(yt(i, Wi(e), !0));
    }),
    be(yt(o, Wi(e), !0), () => {
      for (let i of r) i();
    })
  );
}
function In(e, ...t) {
  if (!e) return !1;
  let o = e.getAttribute("data-backdrop");
  return o == null ? !1 : o === "" || o === "true" || !t.length ? !0 : t.some((r) => o === r);
}
function Br(e = "", t = !1) {
  return `__ariakit-dialog-${t ? "ancestor" : "outside"}${e ? `-${e}` : ""}`;
}
function Sm(e, t = "") {
  return be(yt(e, Br(), !0), yt(e, Br(t), !0));
}
function ji(e, t = "") {
  return be(yt(e, Br("", !0), !0), yt(e, Br(t, !0), !0));
}
function Ro(e, t) {
  let o = Br(t, !0);
  if (e[o]) return !0;
  let r = Br(t);
  do {
    if (e[r]) return !0;
    if (!e.parentElement) return !1;
    e = e.parentElement;
  } while (!0);
}
function Ki(e, t) {
  let o = [],
    r = t.map((i) => i?.id);
  return (
    Ao(
      e,
      t,
      (i) => {
        In(i, ...r) || o.unshift(Sm(i, e));
      },
      (i, s) => {
        (s.hasAttribute("data-dialog") && s.id !== e) || o.unshift(ji(i, e));
      }
    ),
    () => {
      for (let i of o) i();
    }
  );
}
var Mn = V(X(), 1);
function Cm(e) {
  return e.tagName === "HTML" ? !0 : le(te(e).body, e);
}
function Pm(e, t) {
  if (!e) return !1;
  if (le(e, t)) return !0;
  let o = t.getAttribute("aria-activedescendant");
  if (o) {
    let r = te(e).getElementById(o);
    if (r) return le(e, r);
  }
  return !1;
}
function Em(e, t) {
  if (!("clientY" in e)) return !1;
  let o = t.getBoundingClientRect();
  return o.width === 0 || o.height === 0
    ? !1
    : o.top <= e.clientY &&
        e.clientY <= o.top + o.height &&
        o.left <= e.clientX &&
        e.clientX <= o.left + o.width;
}
function zi({ store: e, type: t, listener: o, capture: r, domReady: n }) {
  let i = $(o),
    s = ue(e, "open"),
    a = (0, Mn.useRef)(!1);
  (Q(() => {
    if (!s || !n) return;
    let { contentElement: u } = e.getState();
    if (!u) return;
    let c = () => {
      a.current = !0;
    };
    return (u.addEventListener("focusin", c, !0), () => u.removeEventListener("focusin", c, !0));
  }, [e, s, n]),
    (0, Mn.useEffect)(
      () =>
        s
          ? ge(
              t,
              (c) => {
                let { contentElement: l, disclosureElement: m } = e.getState(),
                  f = c.target;
                !l ||
                  !f ||
                  !Cm(f) ||
                  le(l, f) ||
                  Pm(m, f) ||
                  f.hasAttribute("data-focus-trap") ||
                  Em(c, l) ||
                  (a.current && !Ro(f, l.id)) ||
                  Ua(f) ||
                  i(c);
              },
              r
            )
          : void 0,
      [s, r]
    ));
}
function Ui(e, t) {
  return typeof e == "function" ? e(t) : !!e;
}
function Ou(e, t, o) {
  let r = ue(e, "open"),
    n = Iu(r),
    i = { store: e, domReady: o, capture: !0 };
  (zi(
    A(S({}, i), {
      type: "click",
      listener: (s) => {
        let { contentElement: a } = e.getState(),
          u = n.current;
        u && so(u) && Ro(u, a?.id) && Ui(t, s) && e.hide();
      },
    })
  ),
    zi(
      A(S({}, i), {
        type: "focusin",
        listener: (s) => {
          let { contentElement: a } = e.getState();
          a && s.target !== te(a) && Ui(t, s) && e.hide();
        },
      })
    ),
    zi(
      A(S({}, i), {
        type: "contextmenu",
        listener: (s) => {
          Ui(t, s) && e.hide();
        },
      })
    ));
}
var lt = V(X(), 1),
  Ru = V(pe(), 1),
  Au = (0, lt.createContext)({});
function Tu(e) {
  let t = (0, lt.useContext)(Au),
    [o, r] = (0, lt.useState)([]),
    n = (0, lt.useCallback)(
      (a) => {
        var u;
        return (
          r((c) => [...c, a]),
          be((u = t.add) == null ? void 0 : u.call(t, a), () => {
            r((c) => c.filter((l) => l !== a));
          })
        );
      },
      [t]
    );
  Q(
    () =>
      he(e, ["open", "contentElement"], (a) => {
        var u;
        if (a.open && a.contentElement) return (u = t.add) == null ? void 0 : u.call(t, e);
      }),
    [e, t]
  );
  let i = (0, lt.useMemo)(() => ({ store: e, add: n }), [e, n]);
  return {
    wrapElement: (0, lt.useCallback)(
      (a) => (0, Ru.jsx)(Au.Provider, { value: i, children: a }),
      [i]
    ),
    nestedDialogs: o,
  };
}
var kn = V(X(), 1),
  Du = V(ni(), 1);
function _u({ attribute: e, contentId: t, contentElement: o, enabled: r }) {
  let [n, i] = ln(),
    s = (0, kn.useCallback)(() => {
      if (!r || !o) return !1;
      let { body: a } = te(o),
        u = a.getAttribute(e);
      return !u || u === t;
    }, [n, r, o, e, t]);
  return (
    (0, kn.useEffect)(() => {
      if (!r || !t || !o) return;
      let { body: a } = te(o);
      if (s()) return (a.setAttribute(e, t), () => a.removeAttribute(e));
      let u = new MutationObserver(() => (0, Du.flushSync)(i));
      return (u.observe(a, { attributeFilter: [e] }), () => u.disconnect());
    }, [n, r, t, o, s, e]),
    s
  );
}
var Fu = V(X(), 1);
function Im(e) {
  let t = e.getBoundingClientRect().left;
  return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function Hu(e, t, o) {
  let r = _u({
    attribute: "data-dialog-prevent-body-scroll",
    contentElement: e,
    contentId: t,
    enabled: o,
  });
  (0, Fu.useEffect)(() => {
    if (!r() || !e) return;
    let n = te(e),
      i = no(e),
      { documentElement: s, body: a } = n,
      u = s.style.getPropertyValue("--scrollbar-width"),
      c = u ? Number.parseInt(u) : i.innerWidth - s.clientWidth,
      l = () => Mu(s, "--scrollbar-width", `${c}px`),
      m = Im(s),
      f = () => Oo(a, { overflow: "hidden", [m]: `${c}px` }),
      d = () => {
        var p, w;
        let { scrollX: g, scrollY: y, visualViewport: C } = i,
          x = (p = C?.offsetLeft) != null ? p : 0,
          h = (w = C?.offsetTop) != null ? w : 0,
          O = Oo(a, {
            position: "fixed",
            overflow: "hidden",
            top: `${-(y - Math.floor(h))}px`,
            left: `${-(g - Math.floor(x))}px`,
            right: "0",
            [m]: `${c}px`,
          });
        return () => {
          (O(), i.scrollTo({ left: g, top: y, behavior: "instant" }));
        };
      },
      v = kr() && !mi();
    return be(l(), v ? d() : f());
  }, [r, e]);
}
function Vu(e, ...t) {
  if (!e) return !1;
  let o = e.getAttribute("data-focus-trap");
  return o == null ? !1 : t.length ? (o === "" ? !1 : t.some((r) => o === r)) : !0;
}
function On() {
  return "inert" in HTMLElement.prototype;
}
function Lu(e) {
  return ko(e, "aria-hidden", "true");
}
function $i(e, t) {
  if (!("style" in e)) return At;
  if (On()) return yt(e, "inert", !0);
  let r = po(e, !0).map((n) => {
    if (t?.some((s) => s && le(s, n))) return At;
    let i = Nr(
      n,
      "focus",
      () => (
        (n.focus = At),
        () => {
          delete n.focus;
        }
      )
    );
    return be(ko(n, "tabindex", "-1"), i);
  });
  return be(...r, Lu(e), Oo(e, { pointerEvents: "none", userSelect: "none", cursor: "default" }));
}
function Nu(e, t) {
  let o = [],
    r = t.map((i) => i?.id);
  return (
    Ao(
      e,
      t,
      (i) => {
        In(i, ...r) || Vu(i, ...r) || o.unshift($i(i, t));
      },
      (i) => {
        i.hasAttribute("role") &&
          (t.some((s) => s && le(s, i)) || o.unshift(ko(i, "role", "none")));
      }
    ),
    () => {
      for (let i of o) i();
    }
  );
}
var Mm = "div",
  km = [
    "a",
    "button",
    "details",
    "dialog",
    "div",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "section",
    "select",
    "span",
    "summary",
    "textarea",
    "ul",
    "svg",
  ],
  Sx = U(function (t) {
    return t;
  }),
  Wr = j(function (t) {
    return z(Mm, t);
  });
Object.assign(
  Wr,
  km.reduce(
    (e, t) => (
      (e[t] = j(function (r) {
        return z(t, r);
      })),
      e
    ),
    {}
  )
);
var jr = V(X(), 1),
  An = V(pe(), 1);
function Bu({ store: e, backdrop: t, alwaysVisible: o, hidden: r }) {
  let n = (0, jr.useRef)(null),
    i = uu({ disclosure: e }),
    s = ue(e, "contentElement");
  ((0, jr.useEffect)(() => {
    let c = n.current,
      l = s;
    c && l && (c.style.zIndex = getComputedStyle(l).zIndex);
  }, [s]),
    Q(() => {
      let c = s?.id;
      if (!c) return;
      let l = n.current;
      if (l) return ji(l, c);
    }, [s]));
  let a = wo({
    ref: n,
    store: i,
    role: "presentation",
    "data-backdrop": s?.id || "",
    alwaysVisible: o,
    hidden: r ?? void 0,
    style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 },
  });
  if (!t) return null;
  if ((0, jr.isValidElement)(t)) return (0, An.jsx)(Wr, A(S({}, a), { render: t }));
  let u = typeof t != "boolean" ? t : "div";
  return (0, An.jsx)(Wr, A(S({}, a), { render: (0, An.jsx)(u, {}) }));
}
function To(e = {}) {
  return So(e);
}
function qi(e, t, o) {
  return Mi(e, t, o);
}
function Wu(e = {}) {
  let [t, o] = je(To, e);
  return qi(t, o, e);
}
var Re = V(X(), 1),
  ft = V(pe(), 1),
  Am = "div",
  ju = Dt();
function Rm(e) {
  let t = Xe();
  return !t || (e && le(e, t)) ? !1 : !!Je(t);
}
function Ku(e, t = !1) {
  if (!e) return null;
  let o = "current" in e ? e.current : e;
  return o ? (t ? (Je(o) ? o : null) : o) : null;
}
var Gi = U(function (t) {
  var o = t,
    {
      store: r,
      open: n,
      onClose: i,
      focusable: s = !0,
      modal: a = !0,
      portal: u = !!a,
      backdrop: c = !!a,
      hideOnEscape: l = !0,
      hideOnInteractOutside: m = !0,
      getPersistentElements: f,
      preventBodyScroll: d = !!a,
      autoFocusOnShow: v = !0,
      autoFocusOnHide: p = !0,
      initialFocus: w,
      finalFocus: g,
      unmountOnHide: y,
      unstable_treeSnapshotKey: C,
    } = o,
    x = K(o, [
      "store",
      "open",
      "onClose",
      "focusable",
      "modal",
      "portal",
      "backdrop",
      "hideOnEscape",
      "hideOnInteractOutside",
      "getPersistentElements",
      "preventBodyScroll",
      "autoFocusOnShow",
      "autoFocusOnHide",
      "initialFocus",
      "finalFocus",
      "unmountOnHide",
      "unstable_treeSnapshotKey",
    ]);
  let h = Fr(),
    O = (0, Re.useRef)(null),
    P = Wu({
      store: r || h,
      open: n,
      setOpen(G) {
        if (G) return;
        let re = O.current;
        if (!re) return;
        let ke = new Event("close", { bubbles: !1, cancelable: !0 });
        (i && re.addEventListener("close", i, { once: !0 }),
          re.dispatchEvent(ke),
          ke.defaultPrevented && P.setOpen(!0));
      },
    }),
    { portalRef: _, domReady: k } = Or(u, x.portalRef),
    T = x.preserveTabOrder,
    H = ue(P, (G) => T && !a && G.mounted),
    W = Ae(x.id),
    b = ue(P, "open"),
    M = ue(P, "mounted"),
    D = ue(P, "contentElement"),
    E = dr(M, x.hidden, x.alwaysVisible);
  (Hu(D, W, d && !E), Ou(P, m, k));
  let { wrapElement: R, nestedDialogs: F } = Tu(P);
  ((x = ae(x, R, [R])),
    Q(() => {
      if (!b) return;
      let G = O.current,
        re = Xe(G, !0);
      re && re.tagName !== "BODY" && ((G && le(G, re)) || P.setDisclosureElement(re));
    }, [P, b]),
    ju &&
      (0, Re.useEffect)(() => {
        if (!M) return;
        let { disclosureElement: G } = P.getState();
        if (!G || !qe(G)) return;
        let re = () => {
          let ke = !1,
            ie = () => {
              ke = !0;
            },
            Ne = { capture: !0, once: !0 };
          (G.addEventListener("focusin", ie, Ne),
            vt(G, "mouseup", () => {
              (G.removeEventListener("focusin", ie, !0), !ke && bn(G));
            }));
        };
        return (
          G.addEventListener("mousedown", re),
          () => {
            G.removeEventListener("mousedown", re);
          }
        );
      }, [P, M]),
    (0, Re.useEffect)(() => {
      if (!M || !k) return;
      let G = O.current;
      if (!G) return;
      let re = no(G),
        ke = re.visualViewport || re,
        ie = () => {
          var Ne, et;
          let N =
            (et = (Ne = re.visualViewport) == null ? void 0 : Ne.height) != null
              ? et
              : re.innerHeight;
          G.style.setProperty("--dialog-viewport-height", `${N}px`);
        };
      return (
        ie(),
        ke.addEventListener("resize", ie),
        () => {
          ke.removeEventListener("resize", ie);
        }
      );
    }, [M, k]),
    (0, Re.useEffect)(() => {
      if (!a || !M || !k) return;
      let G = O.current;
      if (!(!G || G.querySelector("[data-dialog-dismiss]"))) return Eu(G, P.hide);
    }, [P, a, M, k]),
    Q(() => {
      if (!On() || b || !M || !k) return;
      let G = O.current;
      if (G) return $i(G);
    }, [b, M, k]));
  let I = b && k;
  Q(() => {
    if (!W || !I) return;
    let G = O.current;
    return ku(W, [G]);
  }, [W, I, C]);
  let q = $(f);
  Q(() => {
    if (!W || !I) return;
    let { disclosureElement: G } = P.getState(),
      re = O.current,
      ke = q() || [],
      ie = [re, ...ke, ...F.map((Ne) => Ne.getState().contentElement)];
    return a ? be(Ki(W, ie), Nu(W, ie)) : Ki(W, [G, ...ie]);
  }, [W, P, I, q, F, a, C]);
  let L = !!v,
    ce = ne(v),
    [Ee, we] = (0, Re.useState)(!1);
  (0, Re.useEffect)(() => {
    if (!b || !L || !k || !D?.isConnected) return;
    let G =
        Ku(w, !0) || D.querySelector("[data-autofocus=true],[autofocus]") || Fa(D, !0, u && H) || D,
      re = Je(G);
    ce(re ? G : null) &&
      (we(!0),
      queueMicrotask(() => {
        (G.focus(), ju && re && G.scrollIntoView({ block: "nearest", inline: "nearest" }));
      }));
  }, [b, L, k, D, w, u, H, ce]);
  let xe = !!p,
    ze = ne(p),
    [It, Ue] = (0, Re.useState)(!1);
  (0, Re.useEffect)(() => {
    if (b) return (Ue(!0), () => Ue(!1));
  }, [b]);
  let Ye = (0, Re.useCallback)(
      (G, re = !0) => {
        let { disclosureElement: ke } = P.getState();
        if (Rm(G)) return;
        let ie = Ku(g) || ke;
        if (ie?.id) {
          let et = te(ie),
            N = `[aria-activedescendant="${ie.id}"]`,
            oe = et.querySelector(N);
          oe && (ie = oe);
        }
        if (ie && !Je(ie)) {
          let et = ie.closest("[data-dialog]");
          if (et?.id) {
            let N = te(et),
              oe = `[aria-controls~="${et.id}"]`,
              ye = N.querySelector(oe);
            ye && (ie = ye);
          }
        }
        let Ne = ie && Je(ie);
        if (!Ne && re) {
          requestAnimationFrame(() => Ye(G, !1));
          return;
        }
        ze(Ne ? ie : null) && Ne && ie?.focus({ preventScroll: !0 });
      },
      [P, g, ze]
    ),
    Le = (0, Re.useRef)(!1);
  (Q(() => {
    if (b || !It || !xe) return;
    let G = O.current;
    ((Le.current = !0), Ye(G));
  }, [b, It, k, xe, Ye]),
    (0, Re.useEffect)(() => {
      if (!It || !xe) return;
      let G = O.current;
      return () => {
        if (Le.current) {
          Le.current = !1;
          return;
        }
        Ye(G);
      };
    }, [It, xe, Ye]));
  let Mt = ne(l);
  ((0, Re.useEffect)(
    () =>
      !k || !M
        ? void 0
        : ge(
            "keydown",
            (re) => {
              if (re.key !== "Escape" || re.defaultPrevented) return;
              let ke = O.current;
              if (!ke || Ro(ke)) return;
              let ie = re.target;
              if (!ie) return;
              let { disclosureElement: Ne } = P.getState();
              !!(ie.tagName === "BODY" || le(ke, ie) || !Ne || le(Ne, ie)) && Mt(re) && P.hide();
            },
            !0
          ),
    [P, k, M, Mt]
  ),
    (x = ae(x, (G) => (0, ft.jsx)(Cu, { level: a ? 1 : void 0, children: G }), [a])));
  let Kt = x.hidden,
    ut = x.alwaysVisible;
  x = ae(
    x,
    (G) =>
      c
        ? (0, ft.jsxs)(ft.Fragment, {
            children: [
              (0, ft.jsx)(Bu, { store: P, backdrop: c, hidden: Kt, alwaysVisible: ut }),
              G,
            ],
          })
        : G,
    [P, c, Kt, ut]
  );
  let [dt, zt] = (0, Re.useState)(),
    [kt, Ut] = (0, Re.useState)();
  return (
    (x = ae(
      x,
      (G) =>
        (0, ft.jsx)(Hr, {
          value: P,
          children: (0, ft.jsx)(ou.Provider, {
            value: zt,
            children: (0, ft.jsx)(nu.Provider, { value: Ut, children: G }),
          }),
        }),
      [P]
    )),
    (x = A(
      S(
        {
          id: W,
          "data-dialog": "",
          role: "dialog",
          tabIndex: s ? -1 : void 0,
          "aria-labelledby": dt,
          "aria-describedby": kt,
        },
        x
      ),
      { ref: Z(O, x.ref) }
    )),
    (x = Ni(A(S({}, x), { autoFocusOnShow: Ee }))),
    (x = wo(S({ store: P }, x))),
    (x = Ft(A(S({}, x), { focusable: s }))),
    (x = Vi(A(S({ portal: u }, x), { portalRef: _, preserveTabOrder: H }))),
    x
  );
});
function br(e, t = Fr) {
  return j(function (r) {
    let n = t(),
      i = r.store || n;
    return ue(i, (a) => !r.unmountOnHide || a?.mounted || !!r.open)
      ? (0, ft.jsx)(e, S({}, r))
      : null;
  });
}
var cy = br(
  j(function (t) {
    let o = Gi(t);
    return z(Am, o);
  }),
  Fr
);
var it = Math.min,
  Ke = Math.max,
  _o = Math.round,
  Fo = Math.floor,
  Lt = (e) => ({ x: e, y: e }),
  Tm = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Dm = { start: "end", end: "start" };
function Tn(e, t, o) {
  return Ke(e, it(t, o));
}
function Nt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wt(e) {
  return e.split("-")[0];
}
function hr(e) {
  return e.split("-")[1];
}
function Dn(e) {
  return e === "x" ? "y" : "x";
}
function _n(e) {
  return e === "y" ? "height" : "width";
}
function Bt(e) {
  return ["top", "bottom"].includes(wt(e)) ? "y" : "x";
}
function Fn(e) {
  return Dn(Bt(e));
}
function zu(e, t, o) {
  o === void 0 && (o = !1);
  let r = hr(e),
    n = Fn(e),
    i = _n(n),
    s =
      n === "x"
        ? r === (o ? "end" : "start")
          ? "right"
          : "left"
        : r === "start"
          ? "bottom"
          : "top";
  return (t.reference[i] > t.floating[i] && (s = Do(s)), [s, Do(s)]);
}
function Uu(e) {
  let t = Do(e);
  return [Rn(e), t, Rn(t)];
}
function Rn(e) {
  return e.replace(/start|end/g, (t) => Dm[t]);
}
function _m(e, t, o) {
  let r = ["left", "right"],
    n = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? (t ? n : r) : t ? r : n;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function $u(e, t, o, r) {
  let n = hr(e),
    i = _m(wt(e), o === "start", r);
  return (n && ((i = i.map((s) => s + "-" + n)), t && (i = i.concat(i.map(Rn)))), i);
}
function Do(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Tm[t]);
}
function Fm(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Yi(e) {
  return typeof e != "number" ? Fm(e) : { top: e, right: e, bottom: e, left: e };
}
function gr(e) {
  let { x: t, y: o, width: r, height: n } = e;
  return { width: r, height: n, top: o, left: t, right: t + r, bottom: o + n, x: t, y: o };
}
function qu(e, t, o) {
  let { reference: r, floating: n } = e,
    i = Bt(t),
    s = Fn(t),
    a = _n(s),
    u = wt(t),
    c = i === "y",
    l = r.x + r.width / 2 - n.width / 2,
    m = r.y + r.height / 2 - n.height / 2,
    f = r[a] / 2 - n[a] / 2,
    d;
  switch (u) {
    case "top":
      d = { x: l, y: r.y - n.height };
      break;
    case "bottom":
      d = { x: l, y: r.y + r.height };
      break;
    case "right":
      d = { x: r.x + r.width, y: m };
      break;
    case "left":
      d = { x: r.x - n.width, y: m };
      break;
    default:
      d = { x: r.x, y: r.y };
  }
  switch (hr(t)) {
    case "start":
      d[s] -= f * (o && c ? -1 : 1);
      break;
    case "end":
      d[s] += f * (o && c ? -1 : 1);
      break;
  }
  return d;
}
var Gu = async (e, t, o) => {
  let { placement: r = "bottom", strategy: n = "absolute", middleware: i = [], platform: s } = o,
    a = i.filter(Boolean),
    u = await (s.isRTL == null ? void 0 : s.isRTL(t)),
    c = await s.getElementRects({ reference: e, floating: t, strategy: n }),
    { x: l, y: m } = qu(c, r, u),
    f = r,
    d = {},
    v = 0;
  for (let p = 0; p < a.length; p++) {
    let { name: w, fn: g } = a[p],
      {
        x: y,
        y: C,
        data: x,
        reset: h,
      } = await g({
        x: l,
        y: m,
        initialPlacement: r,
        placement: f,
        strategy: n,
        middlewareData: d,
        rects: c,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((l = y ?? l),
      (m = C ?? m),
      (d = { ...d, [w]: { ...d[w], ...x } }),
      h &&
        v <= 50 &&
        (v++,
        typeof h == "object" &&
          (h.placement && (f = h.placement),
          h.rects &&
            (c =
              h.rects === !0
                ? await s.getElementRects({ reference: e, floating: t, strategy: n })
                : h.rects),
          ({ x: l, y: m } = qu(c, f, u))),
        (p = -1)));
  }
  return { x: l, y: m, placement: f, strategy: n, middlewareData: d };
};
async function Hn(e, t) {
  var o;
  t === void 0 && (t = {});
  let { x: r, y: n, platform: i, rects: s, elements: a, strategy: u } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: l = "viewport",
      elementContext: m = "floating",
      altBoundary: f = !1,
      padding: d = 0,
    } = Nt(t, e),
    v = Yi(d),
    w = a[f ? (m === "floating" ? "reference" : "floating") : m],
    g = gr(
      await i.getClippingRect({
        element:
          (o = await (i.isElement == null ? void 0 : i.isElement(w))) == null || o
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: u,
      })
    ),
    y =
      m === "floating"
        ? { x: r, y: n, width: s.floating.width, height: s.floating.height }
        : s.reference,
    C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
    x = (await (i.isElement == null ? void 0 : i.isElement(C)))
      ? (await (i.getScale == null ? void 0 : i.getScale(C))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    h = gr(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: y,
            offsetParent: C,
            strategy: u,
          })
        : y
    );
  return {
    top: (g.top - h.top + v.top) / x.y,
    bottom: (h.bottom - g.bottom + v.bottom) / x.y,
    left: (g.left - h.left + v.left) / x.x,
    right: (h.right - g.right + v.right) / x.x,
  };
}
var Yu = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    let { x: o, y: r, placement: n, rects: i, platform: s, elements: a, middlewareData: u } = t,
      { element: c, padding: l = 0 } = Nt(e, t) || {};
    if (c == null) return {};
    let m = Yi(l),
      f = { x: o, y: r },
      d = Fn(n),
      v = _n(d),
      p = await s.getDimensions(c),
      w = d === "y",
      g = w ? "top" : "left",
      y = w ? "bottom" : "right",
      C = w ? "clientHeight" : "clientWidth",
      x = i.reference[v] + i.reference[d] - f[d] - i.floating[v],
      h = f[d] - i.reference[d],
      O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c)),
      P = O ? O[C] : 0;
    (!P || !(await (s.isElement == null ? void 0 : s.isElement(O)))) &&
      (P = a.floating[C] || i.floating[v]);
    let _ = x / 2 - h / 2,
      k = P / 2 - p[v] / 2 - 1,
      T = it(m[g], k),
      H = it(m[y], k),
      W = T,
      b = P - p[v] - H,
      M = P / 2 - p[v] / 2 + _,
      D = Tn(W, M, b),
      E =
        !u.arrow && hr(n) != null && M !== D && i.reference[v] / 2 - (M < W ? T : H) - p[v] / 2 < 0,
      R = E ? (M < W ? M - W : M - b) : 0;
    return {
      [d]: f[d] + R,
      data: { [d]: D, centerOffset: M - D - R, ...(E && { alignmentOffset: R }) },
      reset: E,
    };
  },
});
var Xu = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "flip",
      options: e,
      async fn(t) {
        var o, r;
        let {
            placement: n,
            middlewareData: i,
            rects: s,
            initialPlacement: a,
            platform: u,
            elements: c,
          } = t,
          {
            mainAxis: l = !0,
            crossAxis: m = !0,
            fallbackPlacements: f,
            fallbackStrategy: d = "bestFit",
            fallbackAxisSideDirection: v = "none",
            flipAlignment: p = !0,
            ...w
          } = Nt(e, t);
        if ((o = i.arrow) != null && o.alignmentOffset) return {};
        let g = wt(n),
          y = Bt(a),
          C = wt(a) === a,
          x = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)),
          h = f || (C || !p ? [Do(a)] : Uu(a)),
          O = v !== "none";
        !f && O && h.push(...$u(a, p, v, x));
        let P = [a, ...h],
          _ = await Hn(t, w),
          k = [],
          T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
        if ((l && k.push(_[g]), m)) {
          let M = zu(n, s, x);
          k.push(_[M[0]], _[M[1]]);
        }
        if (((T = [...T, { placement: n, overflows: k }]), !k.every((M) => M <= 0))) {
          var H, W;
          let M = (((H = i.flip) == null ? void 0 : H.index) || 0) + 1,
            D = P[M];
          if (D) return { data: { index: M, overflows: T }, reset: { placement: D } };
          let E =
            (W = T.filter((R) => R.overflows[0] <= 0).sort(
              (R, F) => R.overflows[1] - F.overflows[1]
            )[0]) == null
              ? void 0
              : W.placement;
          if (!E)
            switch (d) {
              case "bestFit": {
                var b;
                let R =
                  (b = T.filter((F) => {
                    if (O) {
                      let I = Bt(F.placement);
                      return I === y || I === "y";
                    }
                    return !0;
                  })
                    .map((F) => [
                      F.placement,
                      F.overflows.filter((I) => I > 0).reduce((I, q) => I + q, 0),
                    ])
                    .sort((F, I) => F[1] - I[1])[0]) == null
                    ? void 0
                    : b[0];
                R && (E = R);
                break;
              }
              case "initialPlacement":
                E = a;
                break;
            }
          if (n !== E) return { reset: { placement: E } };
        }
        return {};
      },
    }
  );
};
async function Hm(e, t) {
  let { placement: o, platform: r, elements: n } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(n.floating)),
    s = wt(o),
    a = hr(o),
    u = Bt(o) === "y",
    c = ["left", "top"].includes(s) ? -1 : 1,
    l = i && u ? -1 : 1,
    m = Nt(t, e),
    {
      mainAxis: f,
      crossAxis: d,
      alignmentAxis: v,
    } = typeof m == "number"
      ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
      : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...m };
  return (
    a && typeof v == "number" && (d = a === "end" ? v * -1 : v),
    u ? { x: d * l, y: f * c } : { x: f * c, y: d * l }
  );
}
var Ju = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var o, r;
          let { x: n, y: i, placement: s, middlewareData: a } = t,
            u = await Hm(t, e);
          return s === ((o = a.offset) == null ? void 0 : o.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: n + u.x, y: i + u.y, data: { ...u, placement: s } };
        },
      }
    );
  },
  Qu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          let { x: o, y: r, placement: n } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (w) => {
                  let { x: g, y } = w;
                  return { x: g, y };
                },
              },
              ...u
            } = Nt(e, t),
            c = { x: o, y: r },
            l = await Hn(t, u),
            m = Bt(wt(n)),
            f = Dn(m),
            d = c[f],
            v = c[m];
          if (i) {
            let w = f === "y" ? "top" : "left",
              g = f === "y" ? "bottom" : "right",
              y = d + l[w],
              C = d - l[g];
            d = Tn(y, d, C);
          }
          if (s) {
            let w = m === "y" ? "top" : "left",
              g = m === "y" ? "bottom" : "right",
              y = v + l[w],
              C = v - l[g];
            v = Tn(y, v, C);
          }
          let p = a.fn({ ...t, [f]: d, [m]: v });
          return { ...p, data: { x: p.x - o, y: p.y - r } };
        },
      }
    );
  },
  Zu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: o, y: r, placement: n, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: u = !0, crossAxis: c = !0 } = Nt(e, t),
            l = { x: o, y: r },
            m = Bt(n),
            f = Dn(m),
            d = l[f],
            v = l[m],
            p = Nt(a, t),
            w =
              typeof p == "number"
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p };
          if (u) {
            let C = f === "y" ? "height" : "width",
              x = i.reference[f] - i.floating[C] + w.mainAxis,
              h = i.reference[f] + i.reference[C] - w.mainAxis;
            d < x ? (d = x) : d > h && (d = h);
          }
          if (c) {
            var g, y;
            let C = f === "y" ? "width" : "height",
              x = ["top", "left"].includes(wt(n)),
              h =
                i.reference[m] -
                i.floating[C] +
                ((x && ((g = s.offset) == null ? void 0 : g[m])) || 0) +
                (x ? 0 : w.crossAxis),
              O =
                i.reference[m] +
                i.reference[C] +
                (x ? 0 : ((y = s.offset) == null ? void 0 : y[m]) || 0) -
                (x ? w.crossAxis : 0);
            v < h ? (v = h) : v > O && (v = O);
          }
          return { [f]: d, [m]: v };
        },
      }
    );
  },
  ec = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          let { placement: o, rects: r, platform: n, elements: i } = t,
            { apply: s = () => {}, ...a } = Nt(e, t),
            u = await Hn(t, a),
            c = wt(o),
            l = hr(o),
            m = Bt(o) === "y",
            { width: f, height: d } = r.floating,
            v,
            p;
          c === "top" || c === "bottom"
            ? ((v = c),
              (p =
                l === ((await (n.isRTL == null ? void 0 : n.isRTL(i.floating))) ? "start" : "end")
                  ? "left"
                  : "right"))
            : ((p = c), (v = l === "end" ? "top" : "bottom"));
          let w = d - u.top - u.bottom,
            g = f - u.left - u.right,
            y = it(d - u[v], w),
            C = it(f - u[p], g),
            x = !t.middlewareData.shift,
            h = y,
            O = C;
          if ((m ? (O = l || x ? it(C, g) : g) : (h = l || x ? it(y, w) : w), x && !l)) {
            let _ = Ke(u.left, 0),
              k = Ke(u.right, 0),
              T = Ke(u.top, 0),
              H = Ke(u.bottom, 0);
            m
              ? (O = f - 2 * (_ !== 0 || k !== 0 ? _ + k : Ke(u.left, u.right)))
              : (h = d - 2 * (T !== 0 || H !== 0 ? T + H : Ke(u.top, u.bottom)));
          }
          await s({ ...t, availableWidth: O, availableHeight: h });
          let P = await n.getDimensions(i.floating);
          return f !== P.width || d !== P.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function xr(e) {
  return rc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ge(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function St(e) {
  var t;
  return (t = (rc(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function rc(e) {
  return e instanceof Node || e instanceof Ge(e).Node;
}
function st(e) {
  return e instanceof Element || e instanceof Ge(e).Element;
}
function mt(e) {
  return e instanceof HTMLElement || e instanceof Ge(e).HTMLElement;
}
function tc(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ge(e).ShadowRoot;
}
function zr(e) {
  let { overflow: t, overflowX: o, overflowY: r, display: n } = at(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + o) && !["inline", "contents"].includes(n);
}
function oc(e) {
  return ["table", "td", "th"].includes(xr(e));
}
function Ho(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Vn(e) {
  let t = Ln(),
    o = st(e) ? at(e) : e;
  return (
    o.transform !== "none" ||
    o.perspective !== "none" ||
    (o.containerType ? o.containerType !== "normal" : !1) ||
    (!t && (o.backdropFilter ? o.backdropFilter !== "none" : !1)) ||
    (!t && (o.filter ? o.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) => (o.willChange || "").includes(r)) ||
    ["paint", "layout", "strict", "content"].some((r) => (o.contain || "").includes(r))
  );
}
function nc(e) {
  let t = Wt(e);
  for (; mt(t) && !yr(t); ) {
    if (Vn(t)) return t;
    if (Ho(t)) return null;
    t = Wt(t);
  }
  return null;
}
function Ln() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function yr(e) {
  return ["html", "body", "#document"].includes(xr(e));
}
function at(e) {
  return Ge(e).getComputedStyle(e);
}
function Vo(e) {
  return st(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Wt(e) {
  if (xr(e) === "html") return e;
  let t = e.assignedSlot || e.parentNode || (tc(e) && e.host) || St(e);
  return tc(t) ? t.host : t;
}
function ic(e) {
  let t = Wt(e);
  return yr(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : mt(t) && zr(t) ? t : ic(t);
}
function Kr(e, t, o) {
  var r;
  (t === void 0 && (t = []), o === void 0 && (o = !0));
  let n = ic(e),
    i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = Ge(n);
  return i
    ? t.concat(
        s,
        s.visualViewport || [],
        zr(n) ? n : [],
        s.frameElement && o ? Kr(s.frameElement) : []
      )
    : t.concat(n, Kr(n, [], o));
}
function uc(e) {
  let t = at(e),
    o = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    n = mt(e),
    i = n ? e.offsetWidth : o,
    s = n ? e.offsetHeight : r,
    a = _o(o) !== i || _o(r) !== s;
  return (a && ((o = i), (r = s)), { width: o, height: r, $: a });
}
function Ji(e) {
  return st(e) ? e : e.contextElement;
}
function Ur(e) {
  let t = Ji(e);
  if (!mt(t)) return Lt(1);
  let o = t.getBoundingClientRect(),
    { width: r, height: n, $: i } = uc(t),
    s = (i ? _o(o.width) : o.width) / r,
    a = (i ? _o(o.height) : o.height) / n;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
var Vm = Lt(0);
function cc(e) {
  let t = Ge(e);
  return !Ln() || !t.visualViewport
    ? Vm
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Lm(e, t, o) {
  return (t === void 0 && (t = !1), !o || (t && o !== Ge(e)) ? !1 : t);
}
function wr(e, t, o, r) {
  (t === void 0 && (t = !1), o === void 0 && (o = !1));
  let n = e.getBoundingClientRect(),
    i = Ji(e),
    s = Lt(1);
  t && (r ? st(r) && (s = Ur(r)) : (s = Ur(e)));
  let a = Lm(i, o, r) ? cc(i) : Lt(0),
    u = (n.left + a.x) / s.x,
    c = (n.top + a.y) / s.y,
    l = n.width / s.x,
    m = n.height / s.y;
  if (i) {
    let f = Ge(i),
      d = r && st(r) ? Ge(r) : r,
      v = f,
      p = v.frameElement;
    for (; p && r && d !== v; ) {
      let w = Ur(p),
        g = p.getBoundingClientRect(),
        y = at(p),
        C = g.left + (p.clientLeft + parseFloat(y.paddingLeft)) * w.x,
        x = g.top + (p.clientTop + parseFloat(y.paddingTop)) * w.y;
      ((u *= w.x),
        (c *= w.y),
        (l *= w.x),
        (m *= w.y),
        (u += C),
        (c += x),
        (v = Ge(p)),
        (p = v.frameElement));
    }
  }
  return gr({ width: l, height: m, x: u, y: c });
}
function Nm(e) {
  let { elements: t, rect: o, offsetParent: r, strategy: n } = e,
    i = n === "fixed",
    s = St(r),
    a = t ? Ho(t.floating) : !1;
  if (r === s || (a && i)) return o;
  let u = { scrollLeft: 0, scrollTop: 0 },
    c = Lt(1),
    l = Lt(0),
    m = mt(r);
  if ((m || (!m && !i)) && ((xr(r) !== "body" || zr(s)) && (u = Vo(r)), mt(r))) {
    let f = wr(r);
    ((c = Ur(r)), (l.x = f.x + r.clientLeft), (l.y = f.y + r.clientTop));
  }
  return {
    width: o.width * c.x,
    height: o.height * c.y,
    x: o.x * c.x - u.scrollLeft * c.x + l.x,
    y: o.y * c.y - u.scrollTop * c.y + l.y,
  };
}
function Bm(e) {
  return Array.from(e.getClientRects());
}
function lc(e) {
  return wr(St(e)).left + Vo(e).scrollLeft;
}
function Wm(e) {
  let t = St(e),
    o = Vo(e),
    r = e.ownerDocument.body,
    n = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
    s = -o.scrollLeft + lc(e),
    a = -o.scrollTop;
  return (
    at(r).direction === "rtl" && (s += Ke(t.clientWidth, r.clientWidth) - n),
    { width: n, height: i, x: s, y: a }
  );
}
function jm(e, t) {
  let o = Ge(e),
    r = St(e),
    n = o.visualViewport,
    i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    u = 0;
  if (n) {
    ((i = n.width), (s = n.height));
    let c = Ln();
    (!c || (c && t === "fixed")) && ((a = n.offsetLeft), (u = n.offsetTop));
  }
  return { width: i, height: s, x: a, y: u };
}
function Km(e, t) {
  let o = wr(e, !0, t === "fixed"),
    r = o.top + e.clientTop,
    n = o.left + e.clientLeft,
    i = mt(e) ? Ur(e) : Lt(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    u = n * i.x,
    c = r * i.y;
  return { width: s, height: a, x: u, y: c };
}
function sc(e, t, o) {
  let r;
  if (t === "viewport") r = jm(e, o);
  else if (t === "document") r = Wm(St(e));
  else if (st(t)) r = Km(t, o);
  else {
    let n = cc(e);
    r = { ...t, x: t.x - n.x, y: t.y - n.y };
  }
  return gr(r);
}
function fc(e, t) {
  let o = Wt(e);
  return o === t || !st(o) || yr(o) ? !1 : at(o).position === "fixed" || fc(o, t);
}
function zm(e, t) {
  let o = t.get(e);
  if (o) return o;
  let r = Kr(e, [], !1).filter((a) => st(a) && xr(a) !== "body"),
    n = null,
    i = at(e).position === "fixed",
    s = i ? Wt(e) : e;
  for (; st(s) && !yr(s); ) {
    let a = at(s),
      u = Vn(s);
    (!u && a.position === "fixed" && (n = null),
      (
        i
          ? !u && !n
          : (!u && a.position === "static" && !!n && ["absolute", "fixed"].includes(n.position)) ||
            (zr(s) && !u && fc(e, s))
      )
        ? (r = r.filter((l) => l !== s))
        : (n = a),
      (s = Wt(s)));
  }
  return (t.set(e, r), r);
}
function Um(e) {
  let { element: t, boundary: o, rootBoundary: r, strategy: n } = e,
    s = [...(o === "clippingAncestors" ? (Ho(t) ? [] : zm(t, this._c)) : [].concat(o)), r],
    a = s[0],
    u = s.reduce(
      (c, l) => {
        let m = sc(t, l, n);
        return (
          (c.top = Ke(m.top, c.top)),
          (c.right = it(m.right, c.right)),
          (c.bottom = it(m.bottom, c.bottom)),
          (c.left = Ke(m.left, c.left)),
          c
        );
      },
      sc(t, a, n)
    );
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}
function $m(e) {
  let { width: t, height: o } = uc(e);
  return { width: t, height: o };
}
function qm(e, t, o) {
  let r = mt(t),
    n = St(t),
    i = o === "fixed",
    s = wr(e, !0, i, t),
    a = { scrollLeft: 0, scrollTop: 0 },
    u = Lt(0);
  if (r || (!r && !i))
    if (((xr(t) !== "body" || zr(n)) && (a = Vo(t)), r)) {
      let m = wr(t, !0, i, t);
      ((u.x = m.x + t.clientLeft), (u.y = m.y + t.clientTop));
    } else n && (u.x = lc(n));
  let c = s.left + a.scrollLeft - u.x,
    l = s.top + a.scrollTop - u.y;
  return { x: c, y: l, width: s.width, height: s.height };
}
function Xi(e) {
  return at(e).position === "static";
}
function ac(e, t) {
  return !mt(e) || at(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function mc(e, t) {
  let o = Ge(e);
  if (Ho(e)) return o;
  if (!mt(e)) {
    let n = Wt(e);
    for (; n && !yr(n); ) {
      if (st(n) && !Xi(n)) return n;
      n = Wt(n);
    }
    return o;
  }
  let r = ac(e, t);
  for (; r && oc(r) && Xi(r); ) r = ac(r, t);
  return r && yr(r) && Xi(r) && !Vn(r) ? o : r || nc(e) || o;
}
var Gm = async function (e) {
  let t = this.getOffsetParent || mc,
    o = this.getDimensions,
    r = await o(e.floating);
  return {
    reference: qm(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Ym(e) {
  return at(e).direction === "rtl";
}
var Xm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Nm,
  getDocumentElement: St,
  getClippingRect: Um,
  getOffsetParent: mc,
  getElementRects: Gm,
  getClientRects: Bm,
  getDimensions: $m,
  getScale: Ur,
  isElement: st,
  isRTL: Ym,
};
function Jm(e, t) {
  let o = null,
    r,
    n = St(e);
  function i() {
    var a;
    (clearTimeout(r), (a = o) == null || a.disconnect(), (o = null));
  }
  function s(a, u) {
    (a === void 0 && (a = !1), u === void 0 && (u = 1), i());
    let { left: c, top: l, width: m, height: f } = e.getBoundingClientRect();
    if ((a || t(), !m || !f)) return;
    let d = Fo(l),
      v = Fo(n.clientWidth - (c + m)),
      p = Fo(n.clientHeight - (l + f)),
      w = Fo(c),
      y = {
        rootMargin: -d + "px " + -v + "px " + -p + "px " + -w + "px",
        threshold: Ke(0, it(1, u)) || 1,
      },
      C = !0;
    function x(h) {
      let O = h[0].intersectionRatio;
      if (O !== u) {
        if (!C) return s();
        O
          ? s(!1, O)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      C = !1;
    }
    try {
      o = new IntersectionObserver(x, { ...y, root: n.ownerDocument });
    } catch {
      o = new IntersectionObserver(x, y);
    }
    o.observe(e);
  }
  return (s(!0), i);
}
function dc(e, t, o, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: n = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: u = !1,
    } = r,
    c = Ji(e),
    l = n || i ? [...(c ? Kr(c) : []), ...Kr(t)] : [];
  l.forEach((g) => {
    (n && g.addEventListener("scroll", o, { passive: !0 }), i && g.addEventListener("resize", o));
  });
  let m = c && a ? Jm(c, o) : null,
    f = -1,
    d = null;
  s &&
    ((d = new ResizeObserver((g) => {
      let [y] = g;
      (y &&
        y.target === c &&
        d &&
        (d.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var C;
          (C = d) == null || C.observe(t);
        }))),
        o());
    })),
    c && !u && d.observe(c),
    d.observe(t));
  let v,
    p = u ? wr(e) : null;
  u && w();
  function w() {
    let g = wr(e);
    (p && (g.x !== p.x || g.y !== p.y || g.width !== p.width || g.height !== p.height) && o(),
      (p = g),
      (v = requestAnimationFrame(w)));
  }
  return (
    o(),
    () => {
      var g;
      (l.forEach((y) => {
        (n && y.removeEventListener("scroll", o), i && y.removeEventListener("resize", o));
      }),
        m?.(),
        (g = d) == null || g.disconnect(),
        (d = null),
        u && cancelAnimationFrame(v));
    }
  );
}
var pc = Ju;
var vc = Qu,
  bc = Xu,
  hc = ec;
var gc = Yu;
var xc = Zu,
  yc = (e, t, o) => {
    let r = new Map(),
      n = { platform: Xm, ...o },
      i = { ...n.platform, _c: r };
    return Gu(e, t, { ...n, platform: i });
  };
var Nn = V(X(), 1),
  Qi = V(pe(), 1),
  Qm = "div";
function wc(e = 0, t = 0, o = 0, r = 0) {
  if (typeof DOMRect == "function") return new DOMRect(e, t, o, r);
  let n = { x: e, y: t, width: o, height: r, top: t, right: e + o, bottom: t + r, left: e };
  return A(S({}, n), { toJSON: () => n });
}
function Zm(e) {
  if (!e) return wc();
  let { x: t, y: o, width: r, height: n } = e;
  return wc(t, o, r, n);
}
function ed(e, t) {
  return {
    contextElement: e || void 0,
    getBoundingClientRect: () => {
      let r = e,
        n = t?.(r);
      return n || !r ? Zm(n) : r.getBoundingClientRect();
    },
  };
}
function td(e) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e);
}
function Sc(e) {
  let t = window.devicePixelRatio || 1;
  return Math.round(e * t) / t;
}
function rd(e, t) {
  return pc(({ placement: o }) => {
    var r;
    let n = (e?.clientHeight || 0) / 2,
      i = typeof t.gutter == "number" ? t.gutter + n : (r = t.gutter) != null ? r : n;
    return { crossAxis: !!o.split("-")[1] ? void 0 : t.shift, mainAxis: i, alignmentAxis: t.shift };
  });
}
function od(e) {
  if (e.flip === !1) return;
  let t = typeof e.flip == "string" ? e.flip.split(" ") : void 0;
  return (ee(!t || t.every(td), !1), bc({ padding: e.overflowPadding, fallbackPlacements: t }));
}
function nd(e) {
  if (!(!e.slide && !e.overlap))
    return vc({
      mainAxis: e.slide,
      crossAxis: e.overlap,
      padding: e.overflowPadding,
      limiter: xc(),
    });
}
function id(e) {
  return hc({
    padding: e.overflowPadding,
    apply({ elements: t, availableWidth: o, availableHeight: r, rects: n }) {
      let i = t.floating,
        s = Math.round(n.reference.width);
      ((o = Math.floor(o)),
        (r = Math.floor(r)),
        i.style.setProperty("--popover-anchor-width", `${s}px`),
        i.style.setProperty("--popover-available-width", `${o}px`),
        i.style.setProperty("--popover-available-height", `${r}px`),
        e.sameWidth && (i.style.width = `${s}px`),
        e.fitViewport && ((i.style.maxWidth = `${o}px`), (i.style.maxHeight = `${r}px`)));
    },
  });
}
function sd(e, t) {
  if (e) return gc({ element: e, padding: t.arrowPadding });
}
var Zi = U(function (t) {
    var o = t,
      {
        store: r,
        modal: n = !1,
        portal: i = !!n,
        preserveTabOrder: s = !0,
        autoFocusOnShow: a = !0,
        wrapperProps: u,
        fixed: c = !1,
        flip: l = !0,
        shift: m = 0,
        slide: f = !0,
        overlap: d = !1,
        sameWidth: v = !1,
        fitViewport: p = !1,
        gutter: w,
        arrowPadding: g = 4,
        overflowPadding: y = 8,
        getAnchorRect: C,
        updatePosition: x,
      } = o,
      h = K(o, [
        "store",
        "modal",
        "portal",
        "preserveTabOrder",
        "autoFocusOnShow",
        "wrapperProps",
        "fixed",
        "flip",
        "shift",
        "slide",
        "overlap",
        "sameWidth",
        "fitViewport",
        "gutter",
        "arrowPadding",
        "overflowPadding",
        "getAnchorRect",
        "updatePosition",
      ]);
    let O = pr();
    ((r = r || O), ee(r, !1));
    let P = r.useState("arrowElement"),
      _ = r.useState("anchorElement"),
      k = r.useState("disclosureElement"),
      T = r.useState("popoverElement"),
      H = r.useState("contentElement"),
      W = r.useState("placement"),
      b = r.useState("mounted"),
      M = r.useState("rendered"),
      D = (0, Nn.useRef)(null),
      [E, R] = (0, Nn.useState)(!1),
      { portalRef: F, domReady: I } = Or(i, h.portalRef),
      q = $(C),
      L = $(x),
      ce = !!x;
    (Q(() => {
      if (!T?.isConnected) return;
      T.style.setProperty("--popover-overflow-padding", `${y}px`);
      let we = ed(_, q),
        xe = async () => {
          if (!b) return;
          P || (D.current = D.current || document.createElement("div"));
          let Ue = P || D.current,
            Ye = [
              rd(Ue, { gutter: w, shift: m }),
              od({ flip: l, overflowPadding: y }),
              nd({ slide: f, shift: m, overlap: d, overflowPadding: y }),
              sd(Ue, { arrowPadding: g }),
              id({ sameWidth: v, fitViewport: p, overflowPadding: y }),
            ],
            Le = await yc(we, T, {
              placement: W,
              strategy: c ? "fixed" : "absolute",
              middleware: Ye,
            });
          (r?.setState("currentPlacement", Le.placement), R(!0));
          let Mt = Sc(Le.x),
            Kt = Sc(Le.y);
          if (
            (Object.assign(T.style, {
              top: "0",
              left: "0",
              transform: `translate3d(${Mt}px,${Kt}px,0)`,
            }),
            Ue && Le.middlewareData.arrow)
          ) {
            let { x: ut, y: dt } = Le.middlewareData.arrow,
              zt = Le.placement.split("-")[0],
              kt = Ue.clientWidth / 2,
              Ut = Ue.clientHeight / 2,
              G = ut != null ? ut + kt : -kt,
              re = dt != null ? dt + Ut : -Ut;
            (T.style.setProperty(
              "--popover-transform-origin",
              {
                top: `${G}px calc(100% + ${Ut}px)`,
                bottom: `${G}px ${-Ut}px`,
                left: `calc(100% + ${kt}px) ${re}px`,
                right: `${-kt}px ${re}px`,
              }[zt]
            ),
              Object.assign(Ue.style, {
                left: ut != null ? `${ut}px` : "",
                top: dt != null ? `${dt}px` : "",
                [zt]: "100%",
              }));
          }
        },
        It = dc(
          we,
          T,
          async () => {
            ce ? (await L({ updatePosition: xe }), R(!0)) : await xe();
          },
          { elementResize: typeof ResizeObserver == "function" }
        );
      return () => {
        (R(!1), It());
      };
    }, [r, M, T, P, _, T, W, b, I, c, l, m, f, d, v, p, w, g, y, q, ce, L]),
      Q(() => {
        if (!b || !I || !T?.isConnected || !H?.isConnected) return;
        let we = () => {
          T.style.zIndex = getComputedStyle(H).zIndex;
        };
        we();
        let xe = requestAnimationFrame(() => {
          xe = requestAnimationFrame(we);
        });
        return () => cancelAnimationFrame(xe);
      }, [b, I, T, H]));
    let Ee = c ? "fixed" : "absolute";
    return (
      (h = ae(
        h,
        (we) =>
          (0, Qi.jsx)(
            "div",
            A(S({}, u), {
              style: S({ position: Ee, top: 0, left: 0, width: "max-content" }, u?.style),
              ref: r?.setPopoverElement,
              children: we,
            })
          ),
        [r, Ee, u]
      )),
      (h = ae(h, (we) => (0, Qi.jsx)(tr, { value: r, children: we }), [r])),
      (h = A(S({ "data-placing": !E || void 0 }, h), {
        style: S({ position: "relative" }, h.style),
      })),
      (h = Gi(
        A(
          S(
            {
              store: r,
              modal: n,
              portal: i,
              preserveTabOrder: s,
              preserveTabOrderAnchor: k || _,
              autoFocusOnShow: E && a,
            },
            h
          ),
          { portalRef: F }
        )
      )),
      h
    );
  }),
  Ty = br(
    j(function (t) {
      let o = Zi(t);
      return z(Qm, o);
    }),
    pr
  );
var Ce = V(X(), 1),
  es = V(pe(), 1),
  ad = "div";
function Pc(e, t, o, r) {
  return nt(t) ? !0 : e ? !!(le(t, e) || (o && le(o, e)) || r?.some((n) => Pc(e, n, o))) : !1;
}
function ud(e) {
  var t = e,
    { store: o } = t,
    r = K(t, ["store"]);
  let [n, i] = (0, Ce.useState)(!1),
    s = o.useState("mounted");
  (0, Ce.useEffect)(() => {
    s || i(!1);
  }, [s]);
  let a = r.onFocus,
    u = $((l) => {
      (a?.(l), !l.defaultPrevented && i(!0));
    }),
    c = (0, Ce.useRef)(null);
  return (
    (0, Ce.useEffect)(
      () =>
        he(o, ["anchorElement"], (l) => {
          c.current = l.anchorElement;
        }),
      []
    ),
    (r = A(S({ autoFocusOnHide: n, finalFocus: c }, r), { onFocus: u })),
    r
  );
}
var Cc = (0, Ce.createContext)(null),
  Bn = U(function (t) {
    var o = t,
      {
        store: r,
        modal: n = !1,
        portal: i = !!n,
        hideOnEscape: s = !0,
        hideOnHoverOutside: a = !0,
        disablePointerEventsOnApproach: u = !!a,
      } = o,
      c = K(o, [
        "store",
        "modal",
        "portal",
        "hideOnEscape",
        "hideOnHoverOutside",
        "disablePointerEventsOnApproach",
      ]);
    let l = Io();
    ((r = r || l), ee(r, !1));
    let m = (0, Ce.useRef)(null),
      [f, d] = (0, Ce.useState)([]),
      v = (0, Ce.useRef)(0),
      p = (0, Ce.useRef)(null),
      { portalRef: w, domReady: g } = Or(i, c.portalRef),
      y = Ar(),
      C = !!a,
      x = ne(a),
      h = !!u,
      O = ne(u),
      P = r.useState("open"),
      _ = r.useState("mounted");
    ((0, Ce.useEffect)(() => {
      if (!g || !_ || (!C && !h)) return;
      let b = m.current;
      return b
        ? be(
            ge(
              "mousemove",
              (D) => {
                if (!r || !y()) return;
                let { anchorElement: E, hideTimeout: R, timeout: F } = r.getState(),
                  I = p.current,
                  [q] = D.composedPath(),
                  L = E;
                if (Pc(q, b, L, f)) {
                  ((p.current = q && L && le(L, q) ? Pn(D) : null),
                    window.clearTimeout(v.current),
                    (v.current = 0));
                  return;
                }
                if (!v.current) {
                  if (I) {
                    let ce = Pn(D),
                      Ee = Di(b, I);
                    if (Ti(ce, Ee)) {
                      if (((p.current = ce), !O(D))) return;
                      (D.preventDefault(), D.stopPropagation());
                      return;
                    }
                  }
                  x(D) &&
                    (v.current = window.setTimeout(() => {
                      ((v.current = 0), r?.hide());
                    }, R ?? F));
                }
              },
              !0
            ),
            () => clearTimeout(v.current)
          )
        : void 0;
    }, [r, y, g, _, C, h, f, O, x]),
      (0, Ce.useEffect)(() => {
        if (!g || !_ || !h) return;
        let b = (M) => {
          let D = m.current;
          if (!D) return;
          let E = p.current;
          if (!E) return;
          let R = Di(D, E);
          if (Ti(Pn(M), R)) {
            if (!O(M)) return;
            (M.preventDefault(), M.stopPropagation());
          }
        };
        return be(
          ge("mouseenter", b, !0),
          ge("mouseover", b, !0),
          ge("mouseout", b, !0),
          ge("mouseleave", b, !0)
        );
      }, [g, _, h, O]),
      (0, Ce.useEffect)(() => {
        g && (P || r?.setAutoFocusOnShow(!1));
      }, [r, g, P]));
    let k = un(P);
    (0, Ce.useEffect)(() => {
      if (g)
        return () => {
          k.current || r?.setAutoFocusOnShow(!1);
        };
    }, [r, g]);
    let T = (0, Ce.useContext)(Cc);
    Q(() => {
      if (n || !i || !_ || !g) return;
      let b = m.current;
      if (b) return T?.(b);
    }, [n, i, _, g]);
    let H = (0, Ce.useCallback)(
      (b) => {
        d((D) => [...D, b]);
        let M = T?.(b);
        return () => {
          (d((D) => D.filter((E) => E !== b)), M?.());
        };
      },
      [T]
    );
    ((c = ae(
      c,
      (b) =>
        (0, es.jsx)(Cn, {
          value: r,
          children: (0, es.jsx)(Cc.Provider, { value: H, children: b }),
        }),
      [r, H]
    )),
      (c = A(S({}, c), { ref: Z(m, c.ref) })),
      (c = ud(S({ store: r }, c))));
    let W = r.useState((b) => n || b.autoFocusOnShow);
    return (
      (c = Zi(
        A(S({ store: r, modal: n, portal: i, autoFocusOnShow: W }, c), {
          portalRef: w,
          hideOnEscape(b) {
            return ar(s, b)
              ? !1
              : (requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    r?.hide();
                  });
                }),
                !0);
          },
        })
      )),
      c
    );
  }),
  Lo = br(
    j(function (t) {
      let o = Bn(t);
      return z(ad, o);
    }),
    Io
  );
var Sr = V(X(), 1),
  cd = "a",
  ts = U(function (t) {
    var o = t,
      { store: r, showOnHover: n = !0 } = o,
      i = K(o, ["store", "showOnHover"]);
    let s = Io();
    ((r = r || s), ee(r, !1));
    let a = ct(i),
      u = (0, Sr.useRef)(0);
    ((0, Sr.useEffect)(() => () => window.clearTimeout(u.current), []),
      (0, Sr.useEffect)(
        () =>
          ge(
            "mouseleave",
            (g) => {
              if (!r) return;
              let { anchorElement: y } = r.getState();
              y && g.target === y && (window.clearTimeout(u.current), (u.current = 0));
            },
            !0
          ),
        [r]
      ));
    let c = i.onMouseMove,
      l = ne(n),
      m = Ar(),
      f = $((w) => {
        if ((c?.(w), a || !r || w.defaultPrevented || u.current || !m() || !l(w))) return;
        let g = w.currentTarget;
        (r.setAnchorElement(g), r.setDisclosureElement(g));
        let { showTimeout: y, timeout: C } = r.getState(),
          x = () => {
            ((u.current = 0),
              m() &&
                (r?.setAnchorElement(g),
                r?.show(),
                queueMicrotask(() => {
                  r?.setDisclosureElement(g);
                })));
          },
          h = y ?? C;
        h === 0 ? x() : (u.current = window.setTimeout(x, h));
      }),
      d = i.onClick,
      v = $((w) => {
        (d?.(w), r && (window.clearTimeout(u.current), (u.current = 0)));
      }),
      p = (0, Sr.useCallback)(
        (w) => {
          if (!r) return;
          let { anchorElement: g } = r.getState();
          g?.isConnected || r.setAnchorElement(w);
        },
        [r]
      );
    return ((i = A(S({}, i), { ref: Z(p, i.ref), onMouseMove: f, onClick: v })), (i = Ft(i)), i);
  }),
  ld = j(function (t) {
    let o = ts(t);
    return z(cd, o);
  });
function Wn(e = {}) {
  var t = e,
    { popover: o } = t,
    r = Pr(t, ["popover"]);
  let n = Rt(
    r.store,
    cr(o, [
      "arrowElement",
      "anchorElement",
      "contentElement",
      "popoverElement",
      "disclosureElement",
    ])
  );
  let i = n?.getState(),
    s = To(se(J({}, r), { store: n })),
    a = Y(r.placement, i?.placement, "bottom"),
    u = se(J({}, s.getState()), {
      placement: a,
      currentPlacement: a,
      anchorElement: Y(i?.anchorElement, null),
      popoverElement: Y(i?.popoverElement, null),
      arrowElement: Y(i?.arrowElement, null),
      rendered: Symbol("rendered"),
    }),
    c = Me(u, s, n);
  return se(J(J({}, s), c), {
    setAnchorElement: (l) => c.setState("anchorElement", l),
    setPopoverElement: (l) => c.setState("popoverElement", l),
    setArrowElement: (l) => c.setState("arrowElement", l),
    render: () => c.setState("rendered", Symbol("rendered")),
  });
}
function jn(e, t, o) {
  return (rt(t, [o.popover]), fe(e, o, "placement"), qi(e, t, o));
}
function No(e = {}) {
  var t;
  let o = (t = e.store) == null ? void 0 : t.getState(),
    r = Wn(se(J({}, e), { placement: Y(e.placement, o?.placement, "bottom") })),
    n = Y(e.timeout, o?.timeout, 500),
    i = se(J({}, r.getState()), {
      timeout: n,
      showTimeout: Y(e.showTimeout, o?.showTimeout),
      hideTimeout: Y(e.hideTimeout, o?.hideTimeout),
      autoFocusOnShow: Y(o?.autoFocusOnShow, !1),
    }),
    s = Me(i, r, e.store);
  return se(J(J({}, r), s), { setAutoFocusOnShow: (a) => s.setState("autoFocusOnShow", a) });
}
function Kn(e, t, o) {
  return (fe(e, o, "timeout"), fe(e, o, "showTimeout"), fe(e, o, "hideTimeout"), jn(e, t, o));
}
function Bo(e = {}) {
  let [t, o] = je(No, e);
  return Kn(t, o, e);
}
var Ec = V(X(), 1),
  Wo = Pe([bt], [Zt]),
  Ic = Wo.useContext,
  Mc = Wo.useScopedContext,
  ww = Wo.useProviderContext,
  Sw = Wo.ContextProvider,
  Cw = Wo.ScopedContextProvider,
  Pw = (0, Ec.createContext)(void 0);
var md = "div",
  jo = U(function (t) {
    var o = t,
      { store: r } = o,
      n = K(o, ["store"]);
    let i = pr();
    return ((r = r || i), (n = A(S({}, n), { ref: Z(r?.setAnchorElement, n.ref) })), n);
  }),
  Aw = j(function (t) {
    let o = jo(t);
    return z(md, o);
  });
var $r = V(X(), 1),
  kc = "button",
  rs = U(function (t) {
    let o = (0, $r.useRef)(null),
      r = cn(o, kc),
      [n, i] = (0, $r.useState)(() => !!r && qe({ tagName: r, type: t.type }));
    return (
      (0, $r.useEffect)(() => {
        o.current && i(qe(o.current));
      }, []),
      (t = A(S({ role: !n && r !== "a" ? "button" : void 0 }, t), { ref: Z(o, t.ref) })),
      (t = vo(t)),
      t
    );
  }),
  Vw = j(function (t) {
    let o = rs(t);
    return z(kc, o);
  });
var qr = V(X(), 1),
  dd = "button",
  pd = Symbol("disclosure"),
  os = U(function (t) {
    var o = t,
      { store: r, toggleOnClick: n = !0 } = o,
      i = K(o, ["store", "toggleOnClick"]);
    let s = xo();
    ((r = r || s), ee(r, !1));
    let a = (0, qr.useRef)(null),
      [u, c] = (0, qr.useState)(!1),
      l = r.useState("disclosureElement"),
      m = r.useState("open");
    (0, qr.useEffect)(() => {
      let y = l === a.current;
      (l?.isConnected || (r?.setDisclosureElement(a.current), (y = !0)), c(m && y));
    }, [l, r, m]);
    let f = i.onClick,
      d = ne(n),
      [v, p] = fn(i, pd, !0),
      w = $((y) => {
        (f?.(y),
          !y.defaultPrevented &&
            (v || (d(y) && (r?.setDisclosureElement(y.currentTarget), r?.toggle()))));
      }),
      g = r.useState("contentElement");
    return (
      (i = A(S(S({ "aria-expanded": u, "aria-controls": g?.id }, p), i), {
        ref: Z(a, i.ref),
        onClick: w,
      })),
      (i = rs(i)),
      i
    );
  }),
  Uw = j(function (t) {
    let o = os(t);
    return z(dd, o);
  });
var vd = "button",
  ns = U(function (t) {
    var o = t,
      { store: r } = o,
      n = K(o, ["store"]);
    let i = Fr();
    ((r = r || i), ee(r, !1));
    let s = r.useState("contentElement");
    return ((n = S({ "aria-haspopup": Jt(s, "dialog") }, n)), (n = os(S({ store: r }, n))), n);
  }),
  Zw = j(function (t) {
    let o = ns(t);
    return z(vd, o);
  });
var Oc = V(pe(), 1),
  bd = "button",
  is = U(function (t) {
    var o = t,
      { store: r } = o,
      n = K(o, ["store"]);
    let i = pr();
    ((r = r || i), ee(r, !1));
    let s = n.onClick,
      a = $((u) => {
        (r?.setAnchorElement(u.currentTarget), s?.(u));
      });
    return (
      (n = ae(n, (u) => (0, Oc.jsx)(tr, { value: r, children: u }), [r])),
      (n = A(S({}, n), { onClick: a })),
      (n = jo(S({ store: r }, n))),
      (n = ns(S({ store: r }, n))),
      n
    );
  }),
  uS = j(function (t) {
    let o = is(t);
    return z(bd, o);
  });
var Ac = V(X(), 1),
  hd = "div",
  jt = "";
function ss() {
  jt = "";
}
function gd(e) {
  let t = e.target;
  return t && Te(t)
    ? !1
    : e.key === " " && jt.length
      ? !0
      : e.key.length === 1 &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.metaKey &&
        /^[\p{Letter}\p{Number}]$/u.test(e.key);
}
function xd(e, t) {
  if (Oe(e)) return !0;
  let o = e.target;
  return o ? t.some((n) => n.element === o) : !1;
}
function yd(e) {
  return e.filter((t) => !t.disabled);
}
function zn(e, t) {
  var o;
  let r =
    ((o = e.element) == null ? void 0 : o.textContent) || e.children || ("value" in e && e.value);
  return r ? Zr(r).trim().toLowerCase().startsWith(t.toLowerCase()) : !1;
}
function wd(e, t, o) {
  if (!o) return e;
  let r = e.find((n) => n.id === o);
  return !r || !zn(r, t) || (jt !== t && zn(r, jt))
    ? e
    : ((jt = t),
      ka(
        e.filter((n) => zn(n, jt)),
        o
      ).filter((n) => n.id !== o));
}
var Ko = U(function (t) {
    var o = t,
      { store: r, typeahead: n = !0 } = o,
      i = K(o, ["store", "typeahead"]);
    let s = _t();
    ((r = r || s), ee(r, !1));
    let a = i.onKeyDownCapture,
      u = (0, Ac.useRef)(0),
      c = $((l) => {
        if ((a?.(l), l.defaultPrevented || !n || !r)) return;
        if (!gd(l)) return ss();
        let { renderedItems: m, items: f, activeId: d, id: v } = r.getState(),
          p = yd(f.length > m.length ? f : m),
          w = te(l.currentTarget),
          g = `[data-offscreen-id="${v}"]`,
          y = w.querySelectorAll(g);
        for (let h of y) {
          let O = h.ariaDisabled === "true" || ("disabled" in h && !!h.disabled);
          p.push({ id: h.id, element: h, disabled: O });
        }
        if ((y.length && (p = lo(p, (h) => h.element)), !xd(l, p))) return ss();
        (l.preventDefault(),
          window.clearTimeout(u.current),
          (u.current = window.setTimeout(() => {
            jt = "";
          }, 500)));
        let C = l.key.toLowerCase();
        ((jt += C), (p = wd(p, C, d)));
        let x = p.find((h) => zn(h, jt));
        x ? r.move(x.id) : ss();
      });
    return ((i = A(S({}, i), { onKeyDownCapture: c })), Be(i));
  }),
  Sd = j(function (t) {
    let o = Ko(t);
    return z(hd, o);
  });
var Rc = V(X(), 1),
  Cd = "div";
function Tc(e) {
  let t = e.relatedTarget;
  return t?.nodeType === Node.ELEMENT_NODE ? t : null;
}
function Pd(e) {
  let t = Tc(e);
  return t ? le(e.currentTarget, t) : !1;
}
var as = Symbol("composite-hover");
function Ed(e) {
  let t = Tc(e);
  if (!t) return !1;
  do {
    if ($e(t, as) && t[as]) return !0;
    t = t.parentElement;
  } while (t);
  return !1;
}
var zo = U(function (t) {
    var o = t,
      { store: r, focusOnHover: n = !0, blurOnHoverEnd: i = !!n } = o,
      s = K(o, ["store", "focusOnHover", "blurOnHoverEnd"]);
    let a = _t();
    ((r = r || a), ee(r, !1));
    let u = Ar(),
      c = s.onMouseMove,
      l = ne(n),
      m = $((w) => {
        if ((c?.(w), !w.defaultPrevented && u() && l(w))) {
          if (!nt(w.currentTarget)) {
            let g = r?.getState().baseElement;
            g && !ot(g) && g.focus();
          }
          r?.setActiveId(w.currentTarget.id);
        }
      }),
      f = s.onMouseLeave,
      d = ne(i),
      v = $((w) => {
        var g;
        (f?.(w),
          !w.defaultPrevented &&
            u() &&
            (Pd(w) ||
              Ed(w) ||
              (l(w) &&
                d(w) &&
                (r?.setActiveId(null), (g = r?.getState().baseElement) == null || g.focus()))));
      }),
      p = (0, Rc.useCallback)((w) => {
        w && (w[as] = !0);
      }, []);
    return ((s = A(S({}, s), { ref: Z(p, s.ref), onMouseMove: m, onMouseLeave: v })), Be(s));
  }),
  Id = Qt(
    j(function (t) {
      let o = zo(t);
      return z(Cd, o);
    })
  );
var Dc = V(X(), 1),
  Uo = Pe([bt, gu], [Zt, Cn]),
  Ct = Uo.useContext,
  us = Uo.useScopedContext,
  or = Uo.useProviderContext,
  $o = Uo.ContextProvider,
  cs = Uo.ScopedContextProvider;
var Md = (0, Dc.createContext)(void 0);
var Un = V(X(), 1),
  _c = V(pe(), 1),
  kd = "div";
function Od(e) {
  var t = e,
    { store: o } = t,
    r = K(t, ["store"]);
  let [n, i] = (0, Un.useState)(void 0),
    s = r["aria-label"],
    a = ue(o, "disclosureElement"),
    u = ue(o, "contentElement");
  return (
    (0, Un.useEffect)(() => {
      let c = a;
      if (!c) return;
      let l = u;
      if (!l) return;
      s || l.hasAttribute("aria-label") ? i(void 0) : c.id && i(c.id);
    }, [s, a, u]),
    n
  );
}
var ls = U(function (t) {
    var o = t,
      { store: r, alwaysVisible: n, composite: i } = o,
      s = K(o, ["store", "alwaysVisible", "composite"]);
    let a = or();
    ((r = r || a), ee(r, !1));
    let u = r.parent,
      c = r.menubar,
      l = !!u,
      m = Ae(s.id),
      f = s.onKeyDown,
      d = r.useState((P) => P.placement.split("-")[0]),
      v = r.useState((P) => (P.orientation === "both" ? void 0 : P.orientation)),
      p = v !== "vertical",
      w = ue(c, (P) => !!P && P.orientation !== "vertical"),
      g = $((P) => {
        if ((f?.(P), !P.defaultPrevented)) {
          if (l || (c && !p)) {
            let k = {
              ArrowRight: () => d === "left" && !p,
              ArrowLeft: () => d === "right" && !p,
              ArrowUp: () => d === "bottom" && p,
              ArrowDown: () => d === "top" && p,
            }[P.key];
            if (k?.()) return (P.stopPropagation(), P.preventDefault(), r?.hide());
          }
          if (c) {
            let k = {
                ArrowRight: () => {
                  if (w) return c.next();
                },
                ArrowLeft: () => {
                  if (w) return c.previous();
                },
                ArrowDown: () => {
                  if (!w) return c.next();
                },
                ArrowUp: () => {
                  if (!w) return c.previous();
                },
              }[P.key],
              T = k?.();
            T !== void 0 && (P.stopPropagation(), P.preventDefault(), c.move(T));
          }
        }
      });
    s = ae(s, (P) => (0, _c.jsx)(cs, { value: r, children: P }), [r]);
    let y = Od(S({ store: r }, s)),
      C = r.useState("mounted"),
      x = dr(C, s.hidden, n),
      h = x ? A(S({}, s.style), { display: "none" }) : s.style;
    s = A(S({ id: m, "aria-labelledby": y, hidden: x }, s), {
      ref: Z(m ? r.setContentElement : null, s.ref),
      style: h,
      onKeyDown: g,
    });
    let O = !!r.combobox;
    return (
      (i = i ?? !O),
      i && (s = S({ role: "menu", "aria-orientation": v }, s)),
      (s = _r(S({ store: r, composite: i }, s))),
      (s = Ko(S({ store: r, typeahead: !O }, s))),
      s
    );
  }),
  Ad = j(function (t) {
    let o = ls(t);
    return z(kd, o);
  });
var Pt = V(X(), 1),
  Rd = "div",
  Td = U(function (t) {
    var o = t,
      {
        store: r,
        modal: n = !1,
        portal: i = !!n,
        hideOnEscape: s = !0,
        autoFocusOnShow: a = !0,
        hideOnHoverOutside: u,
        alwaysVisible: c,
      } = o,
      l = K(o, [
        "store",
        "modal",
        "portal",
        "hideOnEscape",
        "autoFocusOnShow",
        "hideOnHoverOutside",
        "alwaysVisible",
      ]);
    let m = or();
    ((r = r || m), ee(r, !1));
    let f = (0, Pt.useRef)(null),
      d = r.parent,
      v = r.menubar,
      p = !!d,
      w = !!v && !p;
    l = A(S({}, l), { ref: Z(f, l.ref) });
    let g = ls(S({ store: r, alwaysVisible: c }, l)),
      { "aria-labelledby": y } = g;
    l = K(g, ["aria-labelledby"]);
    let [x, h] = (0, Pt.useState)(),
      O = r.useState("autoFocusOnShow"),
      P = r.useState("initialFocus"),
      _ = r.useState("baseElement"),
      k = r.useState("renderedItems");
    (0, Pt.useEffect)(() => {
      let E = !1;
      return (
        h((R) => {
          var F, I, q;
          if (E || !O) return;
          if ((F = R?.current) != null && F.isConnected) return R;
          let L = (0, Pt.createRef)();
          switch (P) {
            case "first":
              L.current =
                ((I = k.find((ce) => !ce.disabled && ce.element)) == null ? void 0 : I.element) ||
                null;
              break;
            case "last":
              L.current =
                ((q = [...k].reverse().find((ce) => !ce.disabled && ce.element)) == null
                  ? void 0
                  : q.element) || null;
              break;
            default:
              L.current = _;
          }
          return L;
        }),
        () => {
          E = !0;
        }
      );
    }, [r, O, P, k, _]);
    let T = p ? !1 : n,
      H = !!a,
      W = !!x || !!l.initialFocus || !!T,
      b = ue(r.combobox || r, "contentElement"),
      M = ue(d?.combobox || d, "contentElement"),
      D = (0, Pt.useMemo)(() => {
        if (!M || !b) return;
        let E = b.getAttribute("role"),
          R = M.getAttribute("role");
        if (!((R === "menu" || R === "menubar") && E === "menu")) return M;
      }, [b, M]);
    return (
      D !== void 0 && (l = S({ preserveTabOrderAnchor: D }, l)),
      (l = Bn(
        A(
          S(
            { store: r, alwaysVisible: c, initialFocus: x, autoFocusOnShow: H ? W && a : O || !!T },
            l
          ),
          {
            hideOnEscape(E) {
              return ar(s, E) ? !1 : (r?.hideAll(), !0);
            },
            hideOnHoverOutside(E) {
              let R = r?.getState().disclosureElement;
              return (typeof u == "function" ? u(E) : (u ?? (p ? !0 : w ? (R ? !nt(R) : !0) : !1)))
                ? E.defaultPrevented || !p || !R || (ma(R, "mouseout", E), !nt(R))
                  ? !0
                  : (requestAnimationFrame(() => {
                      nt(R) || r?.hide();
                    }),
                    !1)
                : !1;
            },
            modal: T,
            portal: i,
            backdrop: p ? !1 : l.backdrop,
          }
        )
      )),
      (l = S({ "aria-labelledby": y }, l)),
      l
    );
  }),
  $n = br(
    j(function (t) {
      let o = Td(t);
      return z(Rd, o);
    }),
    or
  );
var Hc = V(X(), 1),
  fs = V(pe(), 1),
  Dd = "button";
function _d(e, t) {
  return {
    ArrowDown: t === "bottom" || t === "top" ? "first" : !1,
    ArrowUp: t === "bottom" || t === "top" ? "last" : !1,
    ArrowRight: t === "right" ? "first" : !1,
    ArrowLeft: t === "left" ? "first" : !1,
  }[e.key];
}
function Fc(e, t) {
  return !!e?.some((o) =>
    !o.element || o.element === t ? !1 : o.element.getAttribute("aria-expanded") === "true"
  );
}
var Fd = U(function (t) {
    var o = t,
      { store: r, focusable: n, accessibleWhenDisabled: i, showOnHover: s } = o,
      a = K(o, ["store", "focusable", "accessibleWhenDisabled", "showOnHover"]);
    let u = or();
    ((r = r || u), ee(r, !1));
    let c = (0, Hc.useRef)(null),
      l = r.parent,
      m = r.menubar,
      f = !!l,
      d = !!m && !f,
      v = ct(a),
      p = () => {
        let H = c.current;
        H && (r?.setDisclosureElement(H), r?.setAnchorElement(H), r?.show());
      },
      w = a.onFocus,
      g = $((H) => {
        if (
          (w?.(H),
          v || H.defaultPrevented || (r?.setAutoFocusOnShow(!1), r?.setActiveId(null), !m) || !d)
        )
          return;
        let { items: W } = m.getState();
        Fc(W, H.currentTarget) && p();
      }),
      y = ue(r, (H) => H.placement.split("-")[0]),
      C = a.onKeyDown,
      x = $((H) => {
        if ((C?.(H), v || H.defaultPrevented)) return;
        let W = _d(H, y);
        W && (H.preventDefault(), p(), r?.setAutoFocusOnShow(!0), r?.setInitialFocus(W));
      }),
      h = a.onClick,
      O = $((H) => {
        if ((h?.(H), H.defaultPrevented || !r)) return;
        let W = !H.detail,
          { open: b } = r.getState();
        ((!b || W) &&
          ((!f || W) && r.setAutoFocusOnShow(!0), r.setInitialFocus(W ? "first" : "container")),
          f && p());
      });
    ((a = ae(a, (H) => (0, fs.jsx)($o, { value: r, children: H }), [r])),
      f && (a = A(S({}, a), { render: (0, fs.jsx)(Wr.div, { render: a.render }) })));
    let P = Ae(a.id),
      _ = ue(l?.combobox || l, "contentElement"),
      k = f || d ? uo(_, "menuitem") : void 0,
      T = r.useState("contentElement");
    return (
      (a = A(S({ id: P, role: k, "aria-haspopup": Jt(T, "menu") }, a), {
        ref: Z(c, a.ref),
        onFocus: g,
        onKeyDown: x,
        onClick: O,
      })),
      (a = ts(
        A(S({ store: r, focusable: n, accessibleWhenDisabled: i }, a), {
          showOnHover: (H) => {
            if (
              !(() => {
                if (typeof s == "function") return s(H);
                if (s != null) return s;
                if (f) return !0;
                if (!m) return !1;
                let { items: D } = m.getState();
                return d && Fc(D);
              })()
            )
              return !1;
            let M = d ? m : l;
            return (M && M.setActiveId(H.currentTarget.id), !0);
          },
        })
      )),
      (a = is(S({ store: r, toggleOnClick: !f, focusable: n, accessibleWhenDisabled: i }, a))),
      (a = Ko(S({ store: r, typeahead: d }, a))),
      a
    );
  }),
  qn = j(function (t) {
    let o = Fd(t);
    return z(Dd, o);
  });
var Hd = "div";
function Vd(e, t, o) {
  var r;
  if (!e) return !1;
  if (nt(e)) return !0;
  let n = t?.find((u) => {
      var c;
      return u.element === o
        ? !1
        : ((c = u.element) == null ? void 0 : c.getAttribute("aria-expanded")) === "true";
    }),
    i = (r = n?.element) == null ? void 0 : r.getAttribute("aria-controls");
  if (!i) return !1;
  let a = te(e).getElementById(i);
  return a ? (nt(a) ? !0 : !!a.querySelector("[role=menuitem][aria-expanded=true]")) : !1;
}
var Lc = U(function (t) {
    var o = t,
      {
        store: r,
        hideOnClick: n = !0,
        preventScrollOnKeyDown: i = !0,
        focusOnHover: s,
        blurOnHoverEnd: a,
      } = o,
      u = K(o, [
        "store",
        "hideOnClick",
        "preventScrollOnKeyDown",
        "focusOnHover",
        "blurOnHoverEnd",
      ]);
    let c = us(!0),
      l = Mc();
    ((r = r || c || l), ee(r, !1));
    let m = u.onClick,
      f = ne(n),
      d = "hideAll" in r ? r.hideAll : void 0,
      v = !!d,
      p = $((y) => {
        (m?.(y),
          !(
            y.defaultPrevented ||
            sn(y) ||
            nn(y) ||
            !d ||
            y.currentTarget.getAttribute("aria-haspopup") === "menu"
          ) &&
            f(y) &&
            d());
      }),
      w = ue(r, (y) => ("contentElement" in y ? y.contentElement : null)),
      g = uo(w, "menuitem");
    return (
      (u = A(S({ role: g }, u), { onClick: p })),
      (u = Tr(S({ store: r, preventScrollOnKeyDown: i }, u))),
      (u = zo(
        A(S({ store: r }, u), {
          focusOnHover(y) {
            let C = () => (typeof s == "function" ? s(y) : (s ?? !0));
            if (!r || !C()) return !1;
            let { baseElement: x, items: h } = r.getState();
            return v
              ? (y.currentTarget.hasAttribute("aria-expanded") && y.currentTarget.focus(), !0)
              : Vd(x, h, y.currentTarget)
                ? (y.currentTarget.focus(), !0)
                : !1;
          },
          blurOnHoverEnd(y) {
            return typeof a == "function" ? a(y) : (a ?? v);
          },
        })
      )),
      u
    );
  }),
  qo = Qt(
    j(function (t) {
      let o = Lc(t);
      return z(Hd, o);
    })
  );
function Nc(e = {}) {
  var t = e,
    { combobox: o, parent: r, menubar: n } = t,
    i = Pr(t, ["combobox", "parent", "menubar"]);
  let s = !!n && !r,
    a = Rt(
      i.store,
      to(r, ["values"]),
      cr(o, [
        "arrowElement",
        "anchorElement",
        "contentElement",
        "popoverElement",
        "disclosureElement",
      ])
    );
  let u = a.getState(),
    c = vr(se(J({}, i), { store: a, orientation: Y(i.orientation, u.orientation, "vertical") })),
    l = No(
      se(J({}, i), {
        store: a,
        placement: Y(i.placement, u.placement, "bottom-start"),
        timeout: Y(i.timeout, u.timeout, s ? 0 : 150),
        hideTimeout: Y(i.hideTimeout, u.hideTimeout, 0),
      })
    ),
    m = se(J(J({}, c.getState()), l.getState()), {
      initialFocus: Y(u.initialFocus, "container"),
      values: Y(i.values, u.values, i.defaultValues, {}),
    }),
    f = Me(m, c, l, a);
  return (
    Se(f, () =>
      he(f, ["mounted"], (d) => {
        d.mounted || f.setState("activeId", null);
      })
    ),
    Se(f, () =>
      he(r, ["orientation"], (d) => {
        f.setState("placement", d.orientation === "vertical" ? "right-start" : "bottom-start");
      })
    ),
    se(J(J(J({}, c), l), f), {
      combobox: o,
      parent: r,
      menubar: n,
      hideAll: () => {
        (l.hide(), r?.hideAll());
      },
      setInitialFocus: (d) => f.setState("initialFocus", d),
      setValues: (d) => f.setState("values", d),
      setValue: (d, v) => {
        d !== "__proto__" &&
          d !== "constructor" &&
          (Array.isArray(d) ||
            f.setState("values", (p) => {
              let w = p[d],
                g = Qr(v, w);
              return g === w ? p : se(J({}, p), { [d]: g !== void 0 && g });
            }));
      },
    })
  );
}
function Bc(e, t, o) {
  return (
    rt(t, [o.combobox, o.parent, o.menubar]),
    fe(e, o, "values", "setValues"),
    Object.assign(Kn(Lr(e, t, o), t, o), {
      combobox: o.combobox,
      parent: o.parent,
      menubar: o.menubar,
    })
  );
}
function Cr(e = {}) {
  let t = Ct(),
    o = Ic(),
    r = Sn();
  e = A(S({}, e), {
    parent: e.parent !== void 0 ? e.parent : t,
    menubar: e.menubar !== void 0 ? e.menubar : o,
    combobox: e.combobox !== void 0 ? e.combobox : r,
  });
  let [n, i] = je(Nc, e);
  return Bc(n, i, e);
}
var Wc = V(pe(), 1);
function Gn(e = {}) {
  let t = Cr(e);
  return (0, Wc.jsx)($o, { value: t, children: e.children });
}
var Nd = "hr",
  Bd = U(function (t) {
    var o = t,
      { store: r } = o,
      n = K(o, ["store"]);
    let i = Ct();
    return ((r = r || i), (n = Ri(S({ store: r }, n))), n);
  }),
  Yn = j(function (t) {
    let o = Bd(t);
    return z(Nd, o);
  });
var De = V(X(), 1),
  Wd = "input";
function jc(e, t, o) {
  if (!o) return !1;
  let r = e.find((n) => !n.disabled && n.value);
  return r?.value === t;
}
function Kc(e, t) {
  return !t || e == null
    ? !1
    : ((e = Zr(e)), t.length > e.length && t.toLowerCase().indexOf(e.toLowerCase()) === 0);
}
function jd(e) {
  return e.type === "input";
}
function Kd(e) {
  return e === "inline" || e === "list" || e === "both" || e === "none";
}
function zd(e) {
  let t = e.find((o) => {
    var r;
    return o.disabled ? !1 : ((r = o.element) == null ? void 0 : r.getAttribute("role")) !== "tab";
  });
  return t?.id;
}
var Ud = U(function (t) {
    var o = t,
      {
        store: r,
        focusable: n = !0,
        autoSelect: i = !1,
        getAutoSelectId: s,
        setValueOnChange: a,
        showMinLength: u = 0,
        showOnChange: c,
        showOnMouseDown: l,
        showOnClick: m = l,
        showOnKeyDown: f,
        showOnKeyPress: d = f,
        blurActiveItemOnClick: v,
        setValueOnClick: p = !0,
        moveOnKeyPress: w = !0,
        autoComplete: g = "list",
      } = o,
      y = K(o, [
        "store",
        "focusable",
        "autoSelect",
        "getAutoSelectId",
        "setValueOnChange",
        "showMinLength",
        "showOnChange",
        "showOnMouseDown",
        "showOnClick",
        "showOnKeyDown",
        "showOnKeyPress",
        "blurActiveItemOnClick",
        "setValueOnClick",
        "moveOnKeyPress",
        "autoComplete",
      ]);
    let C = Sn();
    ((r = r || C), ee(r, !1));
    let x = (0, De.useRef)(null),
      [h, O] = ln(),
      P = (0, De.useRef)(!1),
      _ = (0, De.useRef)(!1),
      k = r.useState((N) => N.virtualFocus && i),
      T = g === "inline" || g === "both",
      [H, W] = (0, De.useState)(T);
    wa(() => {
      T && W(!0);
    }, [T]);
    let b = r.useState("value"),
      M = (0, De.useRef)();
    (0, De.useEffect)(
      () =>
        he(r, ["selectedValue", "activeId"], (N, oe) => {
          M.current = oe.selectedValue;
        }),
      []
    );
    let D = r.useState((N) => {
        var oe;
        if (
          T &&
          H &&
          !(
            N.activeValue &&
            Array.isArray(N.selectedValue) &&
            (N.selectedValue.includes(N.activeValue) ||
              ((oe = M.current) != null && oe.includes(N.activeValue)))
          )
        )
          return N.activeValue;
      }),
      E = r.useState("renderedItems"),
      R = r.useState("open"),
      F = r.useState("contentElement"),
      I = (0, De.useMemo)(() => {
        if (!T || !H) return b;
        if (jc(E, D, k)) {
          if (Kc(b, D)) {
            let oe = D?.slice(b.length) || "";
            return b + oe;
          }
          return b;
        }
        return D || b;
      }, [T, H, E, D, k, b]);
    ((0, De.useEffect)(() => {
      let N = x.current;
      if (!N) return;
      let oe = () => W(!0);
      return (
        N.addEventListener("combobox-item-move", oe),
        () => {
          N.removeEventListener("combobox-item-move", oe);
        }
      );
    }, []),
      (0, De.useEffect)(() => {
        if (!T || !H || !D || !jc(E, D, k) || !Kc(b, D)) return;
        let oe = At;
        return (
          queueMicrotask(() => {
            let ye = x.current;
            if (!ye) return;
            let { start: Ie, end: tt } = Ir(ye),
              Ot = b.length,
              He = D.length;
            (co(ye, Ot, He),
              (oe = () => {
                if (!ot(ye)) return;
                let { start: ir, end: ef } = Ir(ye);
                ir === Ot && ef === He && co(ye, Ie, tt);
              }));
          }),
          () => oe()
        );
      }, [h, T, H, D, E, k, b]));
    let q = (0, De.useRef)(null),
      L = $(s),
      ce = (0, De.useRef)(null);
    ((0, De.useEffect)(() => {
      if (!R || !F) return;
      let N = Mr(F);
      if (!N) return;
      q.current = N;
      let oe = () => {
          P.current = !1;
        },
        ye = () => {
          if (!r || !P.current) return;
          let { activeId: tt } = r.getState();
          tt !== null && tt !== ce.current && (P.current = !1);
        },
        Ie = { passive: !0, capture: !0 };
      return (
        N.addEventListener("wheel", oe, Ie),
        N.addEventListener("touchmove", oe, Ie),
        N.addEventListener("scroll", ye, Ie),
        () => {
          (N.removeEventListener("wheel", oe, !0),
            N.removeEventListener("touchmove", oe, !0),
            N.removeEventListener("scroll", ye, !0));
        }
      );
    }, [R, F, r]),
      Q(() => {
        b && (_.current || (P.current = !0));
      }, [b]),
      Q(() => {
        (k !== "always" && R) || (P.current = R);
      }, [k, R]));
    let Ee = r.useState("resetValueOnSelect");
    (rt(() => {
      var N, oe;
      let ye = P.current;
      if (!r || !R || (!ye && !Ee)) return;
      let { baseElement: Ie, contentElement: tt, activeId: Ot } = r.getState();
      if (!(Ie && !ot(Ie))) {
        if (tt?.hasAttribute("data-placing")) {
          let He = new MutationObserver(O);
          return (He.observe(tt, { attributeFilter: ["data-placing"] }), () => He.disconnect());
        }
        if (k && ye) {
          let He = L(E),
            ir = He !== void 0 ? He : (N = zd(E)) != null ? N : r.first();
          ((ce.current = ir), r.move(ir ?? null));
        } else {
          let He = (oe = r.item(Ot || r.first())) == null ? void 0 : oe.element;
          He &&
            "scrollIntoView" in He &&
            He.scrollIntoView({ block: "nearest", inline: "nearest" });
        }
      }
    }, [r, R, h, b, k, Ee, L, E]),
      (0, De.useEffect)(() => {
        if (!T) return;
        let N = x.current;
        if (!N) return;
        let oe = [N, F].filter((Ie) => !!Ie),
          ye = (Ie) => {
            oe.every((tt) => pt(Ie, tt)) && r?.setValue(I);
          };
        for (let Ie of oe) Ie.addEventListener("focusout", ye);
        return () => {
          for (let Ie of oe) Ie.removeEventListener("focusout", ye);
        };
      }, [T, F, r, I]));
    let we = (N) => N.currentTarget.value.length >= u,
      xe = y.onChange,
      ze = ne(c ?? we),
      It = ne(a ?? !r.tag),
      Ue = $((N) => {
        if ((xe?.(N), N.defaultPrevented || !r)) return;
        let oe = N.currentTarget,
          { value: ye, selectionStart: Ie, selectionEnd: tt } = oe,
          Ot = N.nativeEvent;
        if (
          ((P.current = !0), jd(Ot) && (Ot.isComposing && ((P.current = !1), (_.current = !0)), T))
        ) {
          let He = Ot.inputType === "insertText" || Ot.inputType === "insertCompositionText",
            ir = Ie === ye.length;
          W(He && ir);
        }
        if (It(N)) {
          let He = ye === r.getState().value;
          (r.setValue(ye),
            queueMicrotask(() => {
              co(oe, Ie, tt);
            }),
            T && k && He && O());
        }
        (ze(N) && r.show(), (!k || !P.current) && r.setActiveId(null));
      }),
      Ye = y.onCompositionEnd,
      Le = $((N) => {
        ((P.current = !0), (_.current = !1), Ye?.(N), !N.defaultPrevented && k && O());
      }),
      Mt = y.onMouseDown,
      Kt = ne(v ?? (() => !!r?.getState().includesBaseElement)),
      ut = ne(p),
      dt = ne(m ?? we),
      zt = $((N) => {
        (Mt?.(N),
          !N.defaultPrevented &&
            (N.button ||
              N.ctrlKey ||
              (r &&
                (Kt(N) && r.setActiveId(null),
                ut(N) && r.setValue(I),
                dt(N) && vt(N.currentTarget, "mouseup", r.show)))));
      }),
      kt = y.onKeyDown,
      Ut = ne(d ?? we),
      G = $((N) => {
        if (
          (kt?.(N),
          N.repeat || (P.current = !1),
          N.defaultPrevented || N.ctrlKey || N.altKey || N.shiftKey || N.metaKey || !r)
        )
          return;
        let { open: oe } = r.getState();
        oe ||
          ((N.key === "ArrowUp" || N.key === "ArrowDown") &&
            Ut(N) &&
            (N.preventDefault(), r.show()));
      }),
      re = y.onBlur,
      ke = $((N) => {
        ((P.current = !1), re?.(N), N.defaultPrevented);
      }),
      ie = Ae(y.id),
      Ne = Kd(g) ? g : void 0,
      et = r.useState((N) => N.activeId === null);
    return (
      (y = A(
        S(
          {
            id: ie,
            role: "combobox",
            "aria-autocomplete": Ne,
            "aria-haspopup": Jt(F, "listbox"),
            "aria-expanded": R,
            "aria-controls": F?.id,
            "data-active-item": et || void 0,
            value: I,
          },
          y
        ),
        {
          ref: Z(x, y.ref),
          onChange: Ue,
          onCompositionEnd: Le,
          onMouseDown: zt,
          onKeyDown: G,
          onBlur: ke,
        }
      )),
      (y = _r(
        A(S({ store: r, focusable: n }, y), {
          moveOnKeyPress: (N) => (ar(w, N) ? !1 : (T && W(!0), !0)),
        })
      )),
      (y = jo(S({ store: r }, y))),
      S({ autoComplete: "off" }, y)
    );
  }),
  Xn = j(function (t) {
    let o = Ud(t);
    return z(Wd, o);
  });
var Jn = V(X(), 1),
  ms = V(pe(), 1),
  $d = "div";
function qd(e, t) {
  if (t != null) return e == null ? !1 : Array.isArray(e) ? e.includes(t) : e === t;
}
function Gd(e) {
  var t;
  return (t = { menu: "menuitem", listbox: "option", tree: "treeitem" }[e]) != null ? t : "option";
}
var zc = U(function (t) {
    var o = t,
      {
        store: r,
        value: n,
        hideOnClick: i,
        setValueOnClick: s,
        selectValueOnClick: a = !0,
        resetValueOnSelect: u,
        focusOnHover: c = !1,
        moveOnKeyPress: l = !0,
        getItem: m,
      } = o,
      f = K(o, [
        "store",
        "value",
        "hideOnClick",
        "setValueOnClick",
        "selectValueOnClick",
        "resetValueOnSelect",
        "focusOnHover",
        "moveOnKeyPress",
        "getItem",
      ]),
      d;
    let v = wn();
    ((r = r || v), ee(r, !1));
    let {
        resetValueOnSelectState: p,
        multiSelectable: w,
        selected: g,
      } = bo(r, {
        resetValueOnSelectState: "resetValueOnSelect",
        multiSelectable(b) {
          return Array.isArray(b.selectedValue);
        },
        selected(b) {
          return qd(b.selectedValue, n);
        },
      }),
      y = (0, Jn.useCallback)(
        (b) => {
          let M = A(S({}, b), { value: n });
          return m ? m(M) : M;
        },
        [n, m]
      );
    ((s = s ?? !w), (i = i ?? (n != null && !w)));
    let C = f.onClick,
      x = ne(s),
      h = ne(a),
      O = ne((d = u ?? p) != null ? d : w),
      P = ne(i),
      _ = $((b) => {
        (C?.(b),
          !b.defaultPrevented &&
            (sn(b) ||
              nn(b) ||
              (n != null &&
                (h(b) &&
                  (O(b) && r?.resetValue(),
                  r?.setSelectedValue((M) =>
                    Array.isArray(M) ? (M.includes(n) ? M.filter((D) => D !== n) : [...M, n]) : n
                  )),
                x(b) && r?.setValue(n)),
              P(b) && r?.hide())));
      }),
      k = f.onKeyDown,
      T = $((b) => {
        if ((k?.(b), b.defaultPrevented)) return;
        let M = r?.getState().baseElement;
        if (!M || ot(M)) return;
        (b.key.length === 1 || b.key === "Backspace" || b.key === "Delete") &&
          (queueMicrotask(() => M.focus()), Te(M) && r?.setValue(M.value));
      });
    (w && g != null && (f = S({ "aria-selected": g }, f)),
      (f = ae(
        f,
        (b) =>
          (0, ms.jsx)(bu.Provider, {
            value: n,
            children: (0, ms.jsx)(hu.Provider, { value: g ?? !1, children: b }),
          }),
        [n, g]
      )));
    let H = (0, Jn.useContext)(yn);
    f = A(S({ role: Gd(H), children: n }, f), { onClick: _, onKeyDown: T });
    let W = ne(l);
    return (
      (f = Tr(
        A(S({ store: r }, f), {
          getItem: y,
          moveOnKeyPress: (b) => {
            if (!W(b)) return !1;
            let M = new Event("combobox-item-move"),
              D = r?.getState().baseElement;
            return (D?.dispatchEvent(M), !0);
          },
        })
      )),
      (f = zo(S({ store: r, focusOnHover: c }, f))),
      f
    );
  }),
  Go = Qt(
    j(function (t) {
      let o = zc(t);
      return z($d, o);
    })
  );
var Qn = V(X(), 1),
  ds = V(pe(), 1),
  Yd = "div",
  Uc = U(function (t) {
    var o = t,
      { store: r, alwaysVisible: n } = o,
      i = K(o, ["store", "alwaysVisible"]);
    let s = wn(!0),
      a = Oi();
    r = r || a;
    let u = !!r && r === s;
    ee(r, !1);
    let c = (0, Qn.useRef)(null),
      l = Ae(i.id),
      m = r.useState("mounted"),
      f = dr(m, i.hidden, n),
      d = f ? A(S({}, i.style), { display: "none" }) : i.style,
      v = r.useState((O) => Array.isArray(O.selectedValue)),
      p = ya(c, "role", i.role),
      g = ((p === "listbox" || p === "tree" || p === "grid") && v) || void 0,
      [y, C] = (0, Qn.useState)(!1),
      x = r.useState("contentElement");
    (Q(() => {
      if (!m) return;
      let O = c.current;
      if (!O || x !== O) return;
      let P = () => {
          C(!!O.querySelector("[role='listbox']"));
        },
        _ = new MutationObserver(P);
      return (
        _.observe(O, { subtree: !0, childList: !0, attributeFilter: ["role"] }),
        P(),
        () => _.disconnect()
      );
    }, [m, x]),
      y || (i = S({ role: "listbox", "aria-multiselectable": g }, i)),
      (i = ae(
        i,
        (O) =>
          (0, ds.jsx)(vu, {
            value: r,
            children: (0, ds.jsx)(yn.Provider, { value: p, children: O }),
          }),
        [r, p]
      )));
    let h = l && (!s || !u) ? r.setContentElement : null;
    return ((i = A(S({ id: l, hidden: f }, i), { ref: Z(h, c, i.ref), style: d })), Be(i));
  }),
  Yo = j(function (t) {
    let o = Uc(t);
    return z(Yd, o);
  });
var ps = V(X(), 1),
  nE = (0, ps.createContext)(null),
  iE = (0, ps.createContext)(null),
  Xo = Pe([bt], [Zt]),
  $c = Xo.useContext,
  sE = Xo.useScopedContext,
  aE = Xo.useProviderContext,
  uE = Xo.ContextProvider,
  cE = Xo.ScopedContextProvider;
var Xd = Dt() && rn();
function qc(e = {}) {
  var t = e,
    { tag: o } = t,
    r = Pr(t, ["tag"]);
  let n = Rt(r.store, to(o, ["value", "rtl"]));
  let i = o?.getState(),
    s = n?.getState(),
    a = Y(r.activeId, s?.activeId, r.defaultActiveId, null),
    u = vr(
      se(J({}, r), {
        activeId: a,
        includesBaseElement: Y(r.includesBaseElement, s?.includesBaseElement, !0),
        orientation: Y(r.orientation, s?.orientation, "vertical"),
        focusLoop: Y(r.focusLoop, s?.focusLoop, !0),
        focusWrap: Y(r.focusWrap, s?.focusWrap, !0),
        virtualFocus: Y(r.virtualFocus, s?.virtualFocus, !0),
      })
    ),
    c = Wn(se(J({}, r), { placement: Y(r.placement, s?.placement, "bottom-start") })),
    l = Y(r.value, s?.value, r.defaultValue, ""),
    m = Y(r.selectedValue, s?.selectedValue, i?.values, r.defaultSelectedValue, ""),
    f = Array.isArray(m),
    d = se(J(J({}, u.getState()), c.getState()), {
      value: l,
      selectedValue: m,
      resetValueOnSelect: Y(r.resetValueOnSelect, s?.resetValueOnSelect, f),
      resetValueOnHide: Y(r.resetValueOnHide, s?.resetValueOnHide, f && !o),
      activeValue: s?.activeValue,
    }),
    v = Me(d, u, c, n);
  return (
    Xd &&
      Se(v, () =>
        he(v, ["virtualFocus"], () => {
          v.setState("virtualFocus", !1);
        })
      ),
    Se(v, () => {
      if (o)
        return be(
          he(v, ["selectedValue"], (p) => {
            Array.isArray(p.selectedValue) && o.setValues(p.selectedValue);
          }),
          he(o, ["values"], (p) => {
            v.setState("selectedValue", p.values);
          })
        );
    }),
    Se(v, () =>
      he(v, ["resetValueOnHide", "mounted"], (p) => {
        p.resetValueOnHide && (p.mounted || v.setState("value", l));
      })
    ),
    Se(v, () =>
      he(v, ["open"], (p) => {
        p.open || (v.setState("activeId", a), v.setState("moves", 0));
      })
    ),
    Se(v, () =>
      he(v, ["moves", "activeId"], (p, w) => {
        p.moves === w.moves && v.setState("activeValue", void 0);
      })
    ),
    Se(v, () =>
      Xt(v, ["moves", "renderedItems"], (p, w) => {
        if (p.moves === w.moves) return;
        let { activeId: g } = v.getState(),
          y = u.item(g);
        v.setState("activeValue", y?.value);
      })
    ),
    se(J(J(J({}, c), u), v), {
      tag: o,
      setValue: (p) => v.setState("value", p),
      resetValue: () => v.setState("value", d.value),
      setSelectedValue: (p) => v.setState("selectedValue", p),
    })
  );
}
function Qd(e) {
  let t = $c();
  return ((e = A(S({}, e), { tag: e.tag !== void 0 ? e.tag : t })), gn(e));
}
function Zd(e, t, o) {
  return (
    rt(t, [o.tag]),
    fe(e, o, "value", "setValue"),
    fe(e, o, "selectedValue", "setSelectedValue"),
    fe(e, o, "resetValueOnHide"),
    fe(e, o, "resetValueOnSelect"),
    Object.assign(Lr(jn(e, t, o), t, o), { tag: o.tag })
  );
}
function vs(e = {}) {
  e = Qd(e);
  let [t, o] = je(qc, e);
  return Zd(t, o, e);
}
var Gc = V(pe(), 1);
function Zn(e = {}) {
  let t = vs(e);
  return (0, Gc.jsx)(pu, { value: t, children: e.children });
}
var Fe = V(X(), 1);
var Yc = 800,
  Xc = 0.9,
  Jc = 4,
  Qc = 1,
  Zc = "mu6ry6k",
  el = ve(Gs, "i1irwbe6"),
  tl = "bqwxsfx",
  rl = "ay9bzvl",
  ol = "ahvwyj9",
  nl = "d1aq9ud6",
  il = "b1r3i2ed",
  sl = "ddwpnn1",
  al = "ck05by6",
  bs = "c1ide4av",
  Gr = "lqsdyuc",
  ul = ve(Gr, "l10bnj1v"),
  hs = "m1lrhh4u",
  gs = "m1fc9sk1",
  cl = ve(gs, "mfbiwg1"),
  ll = "m154ipfz",
  fl = "m1e3rcy1",
  ml = "sxzzb2k",
  dl = "m8c9l16",
  pl = "a1t22t6v",
  vl = "me5hedy",
  bl = "msnmoi2",
  hl = "w19qrosd",
  gl = "s1vev1e1",
  xl = "ssbtwy1",
  yl = "s1d3tuh7",
  wl = "e1nw69yk",
  Sl = "a5l2dp5",
  xs = "m4c5y86",
  ys = "mz1j6h7";
var de = V(X(), 1);
var Et = V(X(), 1);
var Yr = V(X(), 1);
var ws = class {
    constructor(t) {
      ti(this, "sharedIntersectionObserver");
      ti(this, "callbacks", new WeakMap());
      document &&
        (this.sharedIntersectionObserver = new IntersectionObserver(
          this.resizeObserverCallback.bind(this),
          t
        ));
    }
    resizeObserverCallback(t, o) {
      for (let r of t) {
        let n = this.callbacks.get(r.target);
        n && n([r], o);
      }
    }
    observeElementWithCallback(t, o) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.observe(t), this.callbacks.set(t, o));
    }
    unobserve(t) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.unobserve(t), this.callbacks.delete(t));
    }
    get root() {
      return this.sharedIntersectionObserver?.root;
    }
  },
  ep = (0, Yr.createContext)(new Map());
function Ss(e, t, o) {
  if (typeof IntersectionObserver > "u") return;
  let r = ta(() => `${o.rootMargin}`),
    n = (0, Yr.useContext)(ep),
    { enabled: i } = o;
  (0, Yr.useEffect)(() => {
    let s = e.current;
    if (!i || !s) return;
    let a = n.get(r);
    if (!a || a.root !== o.root?.current) {
      let { root: u, ...c } = o;
      ((a = new ws({ ...c, root: u?.current })), n.set(r, a));
    }
    return (a.observeElementWithCallback(s, t), () => a?.unobserve(s));
  }, [i]);
}
var Pl = "c2v15of",
  Cs = "c1tr39qo",
  El = "a103jkx3",
  Il = "auzolsl",
  Ml = "o179w3e7",
  kl = ve(Ml, Il),
  Ol = ve(Ml, El),
  Al = "o1h5p0we",
  Rl = ve(Al, "u1hfkq3i"),
  Tl = ve(Al, "dh1045z"),
  Dl = "o1sgpxwn",
  _l = "swuysmr",
  Fl = "b3o367f",
  Hl = ve(Fl, Il),
  Vl = ve(Fl, El);
var nr = V(X(), 1),
  Ms = V(pe(), 1),
  Ps = (0, nr.createContext)({ closeOnSelect: !0, startTime: void 0, mouseDidMove: !1 });
Ps.displayName = "MenuConfigContext";
var Ll = () => (0, nr.useContext)(Ps);
function Nl({ children: e, closeOnSelect: t, startTime: o, mouseDidMove: r }) {
  let n = (0, nr.useMemo)(() => ({ closeOnSelect: t, startTime: o, mouseDidMove: r }), [t, o, r]);
  return (0, Ms.jsx)(Ps.Provider, { value: n, children: e });
}
var Es = (0, nr.createContext)(!1);
Es.displayName = "WithinMenuComboboxContext";
function Jo() {
  return (0, nr.useContext)(Es);
}
function Is({ children: e, withinCombobox: t }) {
  return (0, Ms.jsx)(Es.Provider, { value: t, children: e });
}
var _e = V(pe(), 1),
  Bl = 50,
  Wl = { enabled: !0 },
  ks = ({ menuHeight: e, children: t }) => {
    let o = Jo(),
      n = Js() * Xc,
      i = Math.min(n, Yc);
    return e > i
      ? (0, _e.jsx)(rp, { children: t })
      : (0, _e.jsx)("div", { className: ve(o && Cs), children: t });
  },
  rp = ({ children: e }) => {
    let t = Jo(),
      o = (0, Et.useRef)(null),
      r = (0, Et.useRef)(null),
      n = (0, Et.useRef)(null),
      i = Xr(),
      [s, a] = (0, Et.useState)(null),
      [u, c] = (0, Et.useState)(!0),
      [l, m] = (0, Et.useState)(!1);
    (Ss(
      r,
      (p) => {
        let [w] = p;
        w && c(w.isIntersecting);
      },
      { root: o, ...Wl }
    ),
      Ss(
        n,
        (p) => {
          let [w] = p;
          w && m(w.isIntersecting);
        },
        { root: o, ...Wl }
      ),
      (0, Et.useEffect)(() => {
        let p,
          w,
          g = Gt.values.contentItemHeight,
          y = () => {
            o.current && o.current.scrollBy({ top: g, behavior: "smooth" });
          },
          C = () => {
            o.current && o.current.scrollBy({ top: -g, behavior: "smooth" });
          };
        return (
          s === "down" ? (p = setInterval(y, Bl)) : clearInterval(p),
          s === "up" ? (w = setInterval(C, Bl)) : clearInterval(w),
          () => {
            (clearInterval(p), clearInterval(w));
          }
        );
      }, [s]));
    let f = () => a("up"),
      d = () => a("down"),
      v = () => a(null);
    return (0, _e.jsxs)("div", {
      className: Pl,
      children: [
        i && !u && (0, _e.jsx)(jl, { direction: "up", onMouseEnter: f, onMouseLeave: v }),
        (0, _e.jsx)($s, {
          ref: o,
          onWheel: v,
          children: (0, _e.jsxs)("div", {
            className: _l,
            children: [
              (0, _e.jsx)("div", { ref: r, className: Hl }),
              (0, _e.jsx)("div", { className: ve(t && Cs), children: e }),
              (0, _e.jsx)("div", { ref: n, className: Vl }),
            ],
          }),
        }),
        i && !l && (0, _e.jsx)(jl, { direction: "down", onMouseEnter: d, onMouseLeave: v }),
      ],
    });
  },
  jl = ({ direction: e, onMouseEnter: t, onMouseLeave: o }) =>
    (0, _e.jsxs)(Zo, {
      gap: 0,
      className: e === "up" ? kl : Ol,
      children: [
        e === "down" && (0, _e.jsx)("div", { className: Tl }),
        (0, _e.jsx)("div", {
          role: "presentation",
          "aria-label": `Auto scroll content ${e}`,
          onMouseEnter: t,
          onMouseLeave: o,
          className: Dl,
          children: (0, _e.jsx)(zs, { direction: e }),
        }),
        e === "up" && (0, _e.jsx)("div", { className: Rl }),
      ],
    });
var ei = V(X(), 1);
var op = !0;
function Os(e, t) {
  let [o, r] = (0, ei.useState)(() =>
    qt(e) || t?.every((n) => qt(n.enabled) || n.enabled === !1) ? op : e === !1
  );
  return (
    (0, ei.useEffect)(() => {
      let n = !0;
      return (
        (async () => {
          let [s, a] = await Promise.all([Kl(e), np(t)]);
          n && r(s === !1 || a);
        })(),
        () => {
          n = !1;
        }
      );
    }, [e, t]),
    o
  );
}
async function Kl(e) {
  return qt(e) ? e() : e;
}
async function np(e) {
  if ($t(e) || e.length === 0) return !1;
  for (let t of e) {
    if (t.type === "separator") continue;
    if ((await Kl(t.enabled)) !== !1) return !1;
  }
  return !0;
}
var B = V(pe(), 1),
  ip = 0,
  As = de.memo(
    de.forwardRef(function (
      {
        items: t,
        label: o,
        menuProps: r,
        onSearch: n,
        onSelection: i,
        searchValue: s,
        width: a,
        submenuPlacement: u,
        enabled: c,
        icon: l,
        acceleratorLabelTokens: m,
        unsaturated: f,
        mode: d,
        ...v
      },
      p
    ) {
      let w = Jr(s) && !!n,
        g = Ct(),
        y = up(r?.store, g, u),
        C = Os(c, t),
        x = de.useMemo(() => {
          let P = Xr() ? Gt.values.contentItemHeight : Gt.values.contentItemHeightTouch,
            _ = 0,
            k = Qc + Gt.values.menuGap * 2;
          for (let T of t) {
            let W = T.type === "separator" ? k : P;
            _ += W;
          }
          return _;
        }, [t]),
        h = !g,
        O = (0, B.jsxs)(Gn, {
          placement: y,
          timeout: ip,
          children: [
            g &&
              (0, B.jsxs)(qn, {
                ref: p,
                ...v,
                disabled: C,
                render: (P) =>
                  (0, B.jsx)($l, {
                    ...P,
                    hasSubmenu: !0,
                    className: ve(P.className, l && xs, l && ys),
                  }),
                children: [
                  v.checked && (0, B.jsx)(oi, { className: bs, children: (0, B.jsx)(ri, {}) }),
                  l && (0, B.jsx)(Ul, { icon: l }),
                  (0, B.jsx)("span", { className: ve(Gr, sr), children: o }),
                  m && (0, B.jsx)(ql, { acceleratorLabelTokens: m }),
                  (0, B.jsx)("span", {
                    className: tl,
                    "aria-hidden": "true",
                    children: (0, B.jsx)(js, {}),
                  }),
                ],
              }),
            (0, B.jsx)($n, {
              modal: !0,
              portal: !0,
              overlap: !0,
              unmountOnHide: !0,
              ...r,
              gutter: r?.gutter ?? (g ? Gt.values.menuPadding * 2 : Jc),
              shift: g ? Gt.values.menuPadding * -1 : void 0,
              className: ve(dl, h && pl, f && vl, r?.className, Us),
              style: { width: a },
              render: (P) => (0, B.jsx)(ii, { mode: d, children: (0, B.jsx)("div", { ...P }) }),
              children: (0, B.jsx)(cp, {
                searchValue: s,
                itemsLength: t.length,
                menuHeight: x,
                withinCombobox: w,
                children: (0, B.jsx)(vp, {
                  items: t,
                  onSelect: i,
                  submenuPlacement: u,
                  unsaturated: f,
                }),
              }),
            }),
          ],
        });
      return w || n
        ? (0, B.jsx)(Zn, {
            open: !0,
            resetValueOnHide: !0,
            includesBaseElement: !1,
            value: s ?? "",
            setValue: n,
            children: O,
          })
        : O;
    })
  ),
  sp = "right-start",
  ap = "bottom-start";
function up(e, t, o) {
  let r = e?.useState().currentPlacement,
    n = t?.useState().currentPlacement;
  if (!Ns(t?.parent) && !$t(n)) return n;
  if (t) {
    let s = Fs() ? ap : sp;
    return o ?? s;
  }
  return r;
}
var cp = de.memo(function ({
    children: t,
    searchValue: o,
    itemsLength: r,
    menuHeight: n,
    withinCombobox: i,
  }) {
    let s = de.useRef(null);
    return (
      de.useEffect(() => {
        if (!i) return;
        let a = requestAnimationFrame(() => {
          s.current?.focus();
        });
        return () => cancelAnimationFrame(a);
      }, [i]),
      i
        ? (0, B.jsx)(Is, {
            withinCombobox: i,
            children: (0, B.jsxs)("div", {
              className: hl,
              children: [
                (0, B.jsxs)("div", {
                  className: gl,
                  children: [
                    (0, B.jsx)("div", { className: yl, children: (0, B.jsx)(Ks, {}) }),
                    (0, B.jsx)(Xn, {
                      ref: s,
                      autoFocus: !0,
                      autoSelect: !0,
                      spellCheck: !1,
                      value: o,
                      placeholder: "Type to search\u2026",
                      className: xl,
                    }),
                  ],
                }),
                (0, B.jsx)(ks, {
                  menuHeight: n,
                  children: (0, B.jsx)(Yo, {
                    children: (0, B.jsx)(Qs, {
                      duration: 0.125,
                      dependencies: [r],
                      className: Sl,
                      children:
                        r === 0
                          ? (0, B.jsx)("div", { className: wl, children: "No Search Results" })
                          : t,
                    }),
                  }),
                }),
              ],
            }),
          })
        : (0, B.jsx)(Is, {
            withinCombobox: i,
            children: (0, B.jsx)(ks, { menuHeight: n, children: t }),
          })
    );
  }),
  lp = (e) => (0, B.jsx)(Yn, { ...e, className: ve(ml, e.className) }),
  zl = 14,
  Ul = ({ icon: e }) => {
    let t = { height: e.height ?? zl, width: e.width ?? zl };
    return e.inlineSVG
      ? (0, B.jsx)("span", { className: hs, style: t, dangerouslySetInnerHTML: { __html: e.src } })
      : (0, B.jsx)("span", {
          className: hs,
          children: (0, B.jsx)("img", {
            style: t,
            src: e.src,
            crossOrigin: e.crossOrigin !== "disabled" ? (e.crossOrigin ?? "anonymous") : void 0,
            alt: "icon",
            decoding: "async",
          }),
        });
  };
function fp(e) {
  let t = new MouseEvent("click", {
    bubbles: !0,
    cancelable: !1,
    view: window,
    button: 0,
    buttons: 1,
  });
  return { ...t, ...e, nativeEvent: { ...t, ...e.nativeEvent } };
}
var $l = de.memo(
    de.forwardRef(function ({ ...t }, o) {
      return (0, B.jsx)("div", {
        className: ve(Zc, Ys),
        children: (0, B.jsx)(mp, { ref: o, ...t }),
      });
    })
  ),
  mp = de.memo(
    de.forwardRef(function (
      {
        name: t,
        value: o,
        badge: r,
        badgeClassName: n,
        checked: i,
        acceleratorLabelTokens: s,
        icon: a,
        avatar: u,
        description: c,
        hasSubmenu: l = !1,
        enabled: m,
        alignIconWithSubmenuPadding: f = !1,
        tooltip: d,
        readonly: v = !1,
        ...p
      },
      w
    ) {
      let { closeOnSelect: g, startTime: y, mouseDidMove: C } = Ll(),
        x = Jo(),
        h = Ct(),
        O = Os(m);
      Ds(h, "MenuItem must be used inside a Menu");
      let P = de.useRef(null),
        _ = qs(w, P),
        k = Bs(),
        T = p.onClick,
        H = dp(),
        W = de.useCallback(() => {
          (h.setAutoFocusOnShow(!0), h.setInitialFocus("first"), h.setOpen(!0));
        }, [h]),
        b = de.useCallback(
          (L) => {
            if (L.key === "ArrowRight" || L.key === "ArrowLeft")
              switch ((L.stopPropagation(), L.key)) {
                case "ArrowLeft": {
                  let ce = l ? h?.parent : h;
                  if (ce?.getState().items.length === 0) break;
                  (L.preventDefault(), ce?.hide());
                  break;
                }
                case "ArrowRight": {
                  h && (L.preventDefault(), W());
                  break;
                }
                default:
                  _s(L.key);
              }
            if (k && L.key === "Enter") {
              (L.preventDefault(),
                L.stopPropagation(),
                h.getState().open ? (T?.(fp(L)), h.hideAll()) : W());
              return;
            }
            p.onKeyDownCapture?.(L);
          },
          [l, h, p.onKeyDownCapture, k, W, T]
        ),
        M = de.useCallback(
          (L) => (!g || L.currentTarget.hasAttribute("aria-expanded") ? !1 : (h.hideAll(), !0)),
          [g, h]
        ),
        D = de.useCallback(
          (L) => {
            if (L.button === 1) {
              (T?.({ ...L, ctrlKey: !0 }), M(L));
              return;
            }
            !k || !Ws(L.button) || (Rs(C, y) && (H.suppressFor(L.currentTarget), T?.(L), M(L)));
          },
          [T, M, y, C, H, k]
        ),
        E = de.useCallback(
          (L) => {
            H.consume(L.currentTarget) || T?.(L);
          },
          [T, H]
        ),
        R = Xr(),
        F = {
          ref: _,
          focusOnHover: R,
          blurOnHoverEnd: R,
          ...p,
          className: ve(gs, c && cl, u && fl, a && xs, a && f && ys, p.className),
          "data-selected": a && i ? "true" : void 0,
          onClick: k && g ? void 0 : E,
          hideOnClick: M,
          onMouseUp: D,
          onKeyDownCapture: b,
          disabled: O,
        };
      (u
        ? (F.children = (0, B.jsxs)(B.Fragment, {
            children: [
              (0, B.jsx)(ra, { avatar: u.src, displayName: u.displayName }),
              (0, B.jsx)("span", { className: sr, children: F.children }),
            ],
          }))
        : a &&
          (F.children = (0, B.jsxs)("span", {
            className: Gr,
            children: [(0, B.jsx)(Ul, { icon: a }), F.children],
          })),
        c &&
          (F.children = (0, B.jsxs)(Zo, {
            direction: "column",
            gap: 2,
            children: [
              (0, B.jsx)("span", { className: Gr, children: F.children }),
              (0, B.jsx)("span", { className: sl, children: c }),
            ],
          })),
        i &&
          !l &&
          !a &&
          (F.children = (0, B.jsxs)("span", {
            className: al,
            children: [(0, B.jsx)(oi, { className: bs, children: (0, B.jsx)(ri, {}) }), F.children],
          })),
        s
          ? (F.children = (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)("span", { className: sr, children: F.children }),
                (0, B.jsx)(ql, { acceleratorLabelTokens: s }),
              ],
            }))
          : r
            ? (F.children = (0, B.jsxs)(B.Fragment, {
                children: [
                  (0, B.jsx)("span", { className: sr, children: F.children }),
                  (0, B.jsx)("span", { className: ve(il, n), children: r }),
                ],
              }))
            : l
              ? (F.children = (0, B.jsx)("span", { className: ve(Gr, sr), children: F.children }))
              : (F.children = (0, B.jsx)("span", { className: ve(ul, sr), children: F.children })));
      let I = de.useCallback(
        () => (t == null || o == null ? !1 : (h.setValue(t, o), !0)),
        [h, t, o]
      );
      if (v)
        return (0, B.jsx)("div", {
          ref: w,
          role: "presentation",
          className: F.className,
          children: F.children,
        });
      let q = x
        ? (0, B.jsx)(Go, { ...F, setValueOnClick: !1, value: o, selectValueOnClick: I })
        : (0, B.jsx)(qo, { ...F });
      return d
        ? (0, B.jsxs)(B.Fragment, { children: [q, (0, B.jsx)(pp, { anchorRef: P, children: d })] })
        : q;
    })
  );
function dp() {
  let e = de.useRef(null);
  return de.useMemo(
    () => ({
      suppressFor(t) {
        ((e.current = t),
          window.setTimeout(() => {
            e.current === t && (e.current = null);
          }, 0));
      },
      consume(t) {
        return e.current !== t ? !1 : ((e.current = null), !0);
      },
    }),
    []
  );
}
var pp = de.memo(function ({ anchorRef: t, children: o }) {
  let r = Bo({ placement: "right-start" });
  return (
    de.useEffect(() => {
      let n = t.current;
      if (!n) return;
      r.setAnchorElement(n);
      let i = () => r.show(),
        s = () => r.hide();
      return (
        n.addEventListener("pointerenter", i),
        n.addEventListener("pointerleave", s),
        () => {
          (n.removeEventListener("pointerenter", i), n.removeEventListener("pointerleave", s));
        }
      );
    }, [r, t]),
    (0, B.jsx)(Lo, {
      store: r,
      portal: !0,
      unmountOnHide: !0,
      gutter: 8,
      className: el,
      render: (n) => (0, B.jsx)(ii, { children: (0, B.jsx)("div", { ...n }) }),
      children: o,
    })
  );
});
function ql({ acceleratorLabelTokens: e }) {
  let o = Qo() ? void 0 : "+";
  return (0, B.jsx)("span", {
    className: rl,
    children: e.map((r, n) => {
      let i = o && n < e.length - 1;
      return (0, B.jsxs)(
        "span",
        { className: ol, children: [r, i && (0, B.jsx)("span", { className: nl, children: o })] },
        r
      );
    }),
  });
}
var vp = de.memo(({ items: e, onSelect: t, submenuPlacement: o, unsaturated: r }) => {
  let n = e.some((s) => s.type !== "separator" && s.checked === !0 && !s.icon),
    i = e.some((s) => s.type !== "separator" && s.icon && s.submenu);
  return e.map((s) => {
    let a = s.path.join("+");
    if (s.type === "separator") return (0, B.jsx)(lp, {}, a);
    let u = ve(n && s.checked !== !0 && !s.icon && ll),
      c = hp(s);
    if (s.submenu)
      return (0, B.jsx)(
        As,
        {
          label: s.label,
          enabled: s.enabled,
          checked: s.checked,
          icon: s.icon,
          className: u,
          items: qt(s.submenu) ? s.submenu() : s.submenu,
          onSelection: t,
          submenuPlacement: o,
          acceleratorLabelTokens: c,
          unsaturated: r,
        },
        a
      );
    let l = s.checked || s.mixed;
    return (0, B.jsx)(
      $l,
      {
        onClick: s.readonly ? void 0 : (m) => t?.(m, s),
        readonly: s.readonly,
        badge: s.badge,
        badgeClassName: s.badgeClassName,
        tooltip: s.tooltip,
        enabled: s.enabled,
        checked: l,
        acceleratorLabelTokens: c,
        icon: s.icon,
        alignIconWithSubmenuPadding: !!s.icon && i,
        avatar: s.avatar,
        description: s.description,
        className: u,
        children: bp(s),
      },
      a
    );
  });
});
function bp(e) {
  return Jr(e.label) ? (e.ellipsis ? `${e.label}\u2026` : e.label) : "";
}
function hp(e) {
  if (e.acceleratorLabelTokens) return e.acceleratorLabelTokens;
  let t = !Qo() && !$t(e.acceleratorWindows) ? e.acceleratorWindows : e.accelerator,
    o = !Qo() && !$t(e.acceleratorLabelWindows) ? e.acceleratorLabelWindows : e.acceleratorLabel;
  if (o) return si(o);
  if (t) return si(t);
}
function Rs(e, t) {
  return !e || !Vs(t) ? !1 : performance.now() - t >= 200;
}
var Ts = V(pe(), 1),
  gp = 10,
  Gl = { placement: "bottom-start", orientation: "vertical" },
  Xl = "data-is-context-menu",
  PI = `[${Xl}="true"]`;
function EI({
  menu: e,
  onClose: t,
  vekterTaskScheduler: o,
  setEditReason: r,
  onKeyDown: n,
  onKeyUp: i,
}) {
  let [s, a] = (0, Fe.useState)(""),
    u = Zs(t),
    c = (0, Fe.useMemo)(
      () =>
        !e || e.config.searchable === !1 ? !1 : e.config.searchable === !0 ? !0 : Zl(e.items) > gp,
      [e]
    ),
    l = (0, Fe.useMemo)(
      () => (!c || !e?.items ? (e?.items ?? []) : Jl(s, e.items)),
      [c, e?.items, s]
    ),
    m = Cr({ ...Gl, placement: e?.config.placement ?? Gl.placement }),
    f = (e?.items.length ?? 0) > 0,
    d = e?.startTime,
    [v, p] = (0, Fe.useState)(!1);
  ((0, Fe.useEffect)(() => {
    if (!f) return;
    let x = new AbortController();
    m.show();
    let h = !1,
      O = (_) => {
        Rs(h, d) && Yl(_.target) && m.hide();
      },
      P = () => {
        ((h = !0), p(!0));
      };
    return (
      window.addEventListener("mouseup", O, { signal: x.signal }),
      window.addEventListener("mousemove", P, { once: !0, signal: x.signal }),
      () => {
        (x.abort(), p(!1));
      }
    );
  }, [f, m, d]),
    Xs(m.hide, f),
    (0, Fe.useEffect)(
      () =>
        Yt(m, ["mounted"], (x, h) => {
          h.mounted && !x.mounted && (a(""), u());
        }),
      [m]
    ));
  let w = (0, Fe.useCallback)(() => e?.config.location ?? null, [e?.config.location]),
    g = (0, Fe.useCallback)(
      (x, h) => {
        !e ||
          e?.items.length === 0 ||
          xp(() => {
            let O = $t(h.editReason) ? (h.role ?? h.label) : h.editReason;
            (O && r?.(O),
              e?.config.onSelect
                ? e?.config.onSelect(x, h)
                : h.click
                  ? h.click()
                  : h.role && ea(h.role, { fromContextMenu: !0 }));
          }, o);
      },
      [e, r, o]
    ),
    y = (0, Fe.useCallback)((x) => (0, Fe.startTransition)(() => a(x)), []),
    C = (0, Fe.useMemo)(
      () => ({
        store: m,
        getAnchorRect: w,
        gutter: e?.config.gutter,
        className: ve(bl, e?.config?.className),
        onKeyDown: n,
        onKeyUp: i,
        [Xl]: !0,
      }),
      [w, e?.config.gutter, e?.config?.className, m, n, i]
    );
  return (
    (0, Fe.useEffect)(() => {
      let x = (h) => {
        Yl(h.target) && h.preventDefault();
      };
      return (
        document?.addEventListener("contextmenu", x),
        () => {
          document?.removeEventListener("contextmenu", x);
        }
      );
    }, []),
    (0, Ts.jsx)(Nl, {
      startTime: e?.startTime,
      mouseDidMove: v,
      closeOnSelect: e?.config?.closeOnSelect ?? !0,
      children: (0, Ts.jsx)(As, {
        items: l,
        menuProps: C,
        unsaturated: e?.config?.unsaturated,
        onSelection: g,
        submenuPlacement: e?.config?.submenuPlacement,
        searchValue: c ? s : void 0,
        onSearch: c ? y : void 0,
        width: e?.config?.width,
        mode: e?.config?.mode,
      }),
    })
  );
}
function Yl(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = e.getAttribute("data-backdrop");
  return Jr(t) && t.length > 0;
}
function xp(e, t) {
  t?.enterEventHandling();
  try {
    return e();
  } catch (o) {
    throw (t?.errorInEventHandler(Hs(o)), o);
  } finally {
    t?.exitEventHandling();
  }
}
function Jl(e, t) {
  if (e === "") return t;
  let o = e.toLowerCase(),
    r = [];
  for (let n of t) {
    if (!Ql(n)) continue;
    let i = n.label?.toLowerCase(),
      s = n.description?.toLowerCase(),
      a = n.aliases?.some((c) => c.toLowerCase().includes(o));
    if (i?.includes(o) || s?.includes(o) || a) {
      r.push(n);
      continue;
    }
    if (Array.isArray(n.submenu)) {
      let c = Jl(o, n.submenu);
      c.length > 0 && r.push({ ...n, submenu: c });
    }
  }
  return r;
}
function Ql(e) {
  return !(
    e.type === "separator" ||
    e.visible === !1 ||
    e.enabled === !1 ||
    qt(e.submenu) ||
    (Ls(e.submenu) && e.submenu.length === 0)
  );
}
function Zl(e) {
  let t = 0;
  for (let o of e) Ql(o) && ((t += 1), Array.isArray(o.submenu) && (t += Zl(o.submenu)));
  return t;
}
export {
  Yt as a,
  ue as b,
  Ci as c,
  Pi as d,
  ki as e,
  Cr as f,
  Jc as g,
  Nl as h,
  As as i,
  PI as j,
  EI as k,
  Yl as l,
  Jl as m,
};
//# sourceMappingURL=chunk-YJUPCG6Q.mjs.map
