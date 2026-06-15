import { a as Gt } from "chunk-LEYNIZPU.mjs";
import { a as C } from "chunk-SJONTHBI.mjs";
import { a as rc, d as Gf, e as V } from "chunk-XELMBOBL.mjs";
function Le(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function ft(t, e) {
  let o = t.indexOf(e);
  o > -1 && t.splice(o, 1);
}
function Ds([...t], e, o) {
  let r = e < 0 ? t.length + e : e;
  if (r >= 0 && r < t.length) {
    let n = o < 0 ? t.length + o : o,
      [s] = t.splice(e, 1);
    t.splice(n, 0, s);
  }
  return t;
}
var H = (t, e, o) => (o > e ? e : o < t ? t : o);
function nc(t, e) {
  return e
    ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}`
    : t;
}
var yt = () => {},
  W = () => {};
var q = {};
var vr = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
var Tr = (t) => typeof t == "object" && t !== null;
var Sr = (t) => /^0[^.\s]+$/u.test(t);
function Ie(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
var F = (t) => t;
var Lt = (...t) => t.reduce((e, o) => (r) => o(e(r)));
var pt = (t, e, o) => {
  let r = e - t;
  return r ? (o - t) / r : 1;
};
var qt = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (Le(this.subscriptions, e), () => ft(this.subscriptions, e));
  }
  notify(e, o, r) {
    let n = this.subscriptions.length;
    if (n)
      if (n === 1) this.subscriptions[0](e, o, r);
      else
        for (let s = 0; s < n; s++) {
          let i = this.subscriptions[s];
          i && i(e, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
var k = (t) => t * 1e3,
  ot = (t) => t / 1e3;
var ke = (t, e) => (e ? t * (1e3 / e) : 0);
var Rs = new Set();
function Uf(t) {
  return Rs.has(t);
}
function zf(t, e, o) {
  t || Rs.has(e) || (console.warn(nc(e, o)), Rs.add(e));
}
var wr = (t, e, o) => {
  let r = e - t;
  return ((((o - t) % r) + r) % r) + t;
};
var ic = (t, e, o) => (((1 - 3 * o + 3 * e) * t + (3 * o - 6 * e)) * t + 3 * e) * t,
  Kf = 1e-7,
  Hf = 12;
function $f(t, e, o, r, n) {
  let s,
    i,
    a = 0;
  do ((i = e + (o - e) / 2), (s = ic(i, r, n) - t), s > 0 ? (o = i) : (e = i));
  while (Math.abs(s) > Kf && ++a < Hf);
  return i;
}
function Zt(t, e, o, r) {
  if (t === e && o === r) return F;
  let n = (s) => $f(s, 0, 1, t, o);
  return (s) => (s === 0 || s === 1 ? s : ic(n(s), e, r));
}
var Vr = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2);
var Be = (t) => (e) => 1 - t(1 - e);
var ti = Zt(0.33, 1.53, 0.69, 0.99),
  bo = Be(ti),
  br = Vr(bo);
var Ar = (t) => (t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * bo(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))));
var Pr = (t) => 1 - Math.sin(Math.acos(t)),
  Cr = Be(Pr),
  Er = Vr(Pr);
var Ls = Zt(0.42, 0, 1, 1),
  Is = Zt(0, 0, 0.58, 1),
  Mr = Zt(0.42, 0, 0.58, 1);
function Xf(t, e = "end") {
  return (o) => {
    o = e === "end" ? Math.min(o, 0.999) : Math.max(o, 0.001);
    let r = o * t,
      n = e === "end" ? Math.floor(r) : Math.ceil(r);
    return H(0, 1, n / t);
  };
}
var Dr = (t) => Array.isArray(t) && typeof t[0] != "number";
function Rr(t, e) {
  return Dr(t) ? t[wr(0, t.length, e)] : t;
}
var Oe = (t) => Array.isArray(t) && typeof t[0] == "number";
var sc = {
    linear: F,
    easeIn: Ls,
    easeInOut: Mr,
    easeOut: Is,
    circIn: Pr,
    circInOut: Er,
    circOut: Cr,
    backIn: bo,
    backInOut: br,
    backOut: ti,
    anticipate: Ar,
  },
  Yf = (t) => typeof t == "string",
  Ao = (t) => {
    if (Oe(t)) {
      W(
        t.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length"
      );
      let [e, o, r, n] = t;
      return Zt(e, o, r, n);
    } else if (Yf(t))
      return (W(sc[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), sc[t]);
    return t;
  };
var Fe = [
  "setup",
  "read",
  "resolveKeyframes",
  "preUpdate",
  "update",
  "preRender",
  "render",
  "postRender",
];
var Y = { value: null, addProjectionMetrics: null };
function ac(t, e) {
  let o = new Set(),
    r = new Set(),
    n = !1,
    s = !1,
    i = new WeakSet(),
    a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function c(m) {
    (i.has(m) && (u.schedule(m), t()), l++, m(a));
  }
  let u = {
    schedule: (m, f = !1, p = !1) => {
      let h = p && n ? o : r;
      return (f && i.add(m), h.add(m), m);
    },
    cancel: (m) => {
      (r.delete(m), i.delete(m));
    },
    process: (m) => {
      if (((a = m), n)) {
        s = !0;
        return;
      }
      n = !0;
      let f = o;
      ((o = r),
        (r = f),
        o.forEach(c),
        e && Y.value && Y.value.frameloop[e].push(l),
        (l = 0),
        o.clear(),
        (n = !1),
        s && ((s = !1), u.process(m)));
    },
  };
  return u;
}
var _f = 40;
function Lr(t, e) {
  let o = !1,
    r = !0,
    n = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (o = !0),
    i = Fe.reduce((v, T) => ((v[T] = ac(s, e ? T : void 0)), v), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: c,
      preUpdate: u,
      update: m,
      preRender: f,
      render: p,
      postRender: d,
    } = i,
    h = () => {
      let v = q.useManualTiming,
        T = v ? n.timestamp : performance.now();
      ((o = !1),
        v || (n.delta = r ? 1e3 / 60 : Math.max(Math.min(T - n.timestamp, _f), 1)),
        (n.timestamp = T),
        (n.isProcessing = !0),
        a.process(n),
        l.process(n),
        c.process(n),
        u.process(n),
        m.process(n),
        f.process(n),
        p.process(n),
        d.process(n),
        (n.isProcessing = !1),
        o && e && ((r = !1), t(h)));
    },
    g = () => {
      ((o = !0), (r = !0), n.isProcessing || t(h));
    };
  return {
    schedule: Fe.reduce((v, T) => {
      let b = i[T];
      return ((v[T] = (D, j = !1, E = !1) => (o || g(), b.schedule(D, j, E))), v);
    }, {}),
    cancel: (v) => {
      for (let T = 0; T < Fe.length; T++) i[Fe[T]].cancel(v);
    },
    state: n,
    steps: i,
  };
}
var {
  schedule: S,
  cancel: B,
  state: G,
  steps: Ir,
} = Lr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : F, !0);
var ei;
function qf() {
  ei = void 0;
}
var K = {
  now: () => (
    ei === void 0 && K.set(G.isProcessing || q.useManualTiming ? G.timestamp : performance.now()),
    ei
  ),
  set: (t) => {
    ((ei = t), queueMicrotask(qf));
  },
};
var at = { layout: 0, mainThread: 0, waapi: 0 };
var lc = (t) => (e) => typeof e == "string" && e.startsWith(t),
  je = lc("--"),
  Zf = lc("var(--"),
  Ne = (t) => (Zf(t) ? Jf.test(t.split("/*")[0].trim()) : !1),
  Jf = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function oi(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
var It = { test: (t) => typeof t == "number", parse: parseFloat, transform: (t) => t },
  Ut = { ...It, transform: (t) => H(0, 1, t) },
  Po = { ...It, default: 1 };
var ve = (t) => Math.round(t * 1e5) / 1e5;
var Co = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function cc(t) {
  return t == null;
}
var uc =
  /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
var Eo = (t, e) => (o) =>
    !!(
      (typeof o == "string" && uc.test(o) && o.startsWith(t)) ||
      (e && !cc(o) && Object.prototype.hasOwnProperty.call(o, e))
    ),
  ri = (t, e, o) => (r) => {
    if (typeof r != "string") return r;
    let [n, s, i, a] = r.match(Co);
    return {
      [t]: parseFloat(n),
      [e]: parseFloat(s),
      [o]: parseFloat(i),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  };
var Qf = (t) => H(0, 255, t),
  ni = { ...It, transform: (t) => Math.round(Qf(t)) },
  kt = {
    test: Eo("rgb", "red"),
    parse: ri("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: o, alpha: r = 1 }) =>
      "rgba(" +
      ni.transform(t) +
      ", " +
      ni.transform(e) +
      ", " +
      ni.transform(o) +
      ", " +
      ve(Ut.transform(r)) +
      ")",
  };
function tp(t) {
  let e = "",
    o = "",
    r = "",
    n = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (o = t.substring(3, 5)),
        (r = t.substring(5, 7)),
        (n = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (o = t.substring(2, 3)),
        (r = t.substring(3, 4)),
        (n = t.substring(4, 5)),
        (e += e),
        (o += o),
        (r += r),
        (n += n)),
    {
      red: parseInt(e, 16),
      green: parseInt(o, 16),
      blue: parseInt(r, 16),
      alpha: n ? parseInt(n, 16) / 255 : 1,
    }
  );
}
var Mo = { test: Eo("#"), parse: tp, transform: kt.transform };
var kr = (t) => ({
    test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  Bt = kr("deg"),
  nt = kr("%"),
  w = kr("px"),
  ks = kr("vh"),
  Bs = kr("vw"),
  ii = { ...nt, parse: (t) => nt.parse(t) / 100, transform: (t) => nt.transform(t * 100) };
var Jt = {
  test: Eo("hsl", "hue"),
  parse: ri("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: o, alpha: r = 1 }) =>
    "hsla(" +
    Math.round(t) +
    ", " +
    nt.transform(ve(e)) +
    ", " +
    nt.transform(ve(o)) +
    ", " +
    ve(Ut.transform(r)) +
    ")",
};
var U = {
  test: (t) => kt.test(t) || Mo.test(t) || Jt.test(t),
  parse: (t) => (kt.test(t) ? kt.parse(t) : Jt.test(t) ? Jt.parse(t) : Mo.parse(t)),
  transform: (t) =>
    typeof t == "string" ? t : t.hasOwnProperty("red") ? kt.transform(t) : Jt.transform(t),
  getAnimatableNone: (t) => {
    let e = U.parse(t);
    return ((e.alpha = 0), U.transform(e));
  },
};
var mc =
  /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ep(t) {
  return (
    isNaN(t) && typeof t == "string" && (t.match(Co)?.length || 0) + (t.match(mc)?.length || 0) > 0
  );
}
var pc = "number",
  dc = "color",
  op = "var",
  rp = "var(",
  fc = "${}",
  np =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Qt(t) {
  let e = t.toString(),
    o = [],
    r = { color: [], number: [], var: [] },
    n = [],
    s = 0,
    a = e
      .replace(
        np,
        (l) => (
          U.test(l)
            ? (r.color.push(s), n.push(dc), o.push(U.parse(l)))
            : l.startsWith(rp)
              ? (r.var.push(s), n.push(op), o.push(l))
              : (r.number.push(s), n.push(pc), o.push(parseFloat(l))),
          ++s,
          fc
        )
      )
      .split(fc);
  return { values: o, split: a, indexes: r, types: n };
}
function ip(t) {
  return Qt(t).values;
}
function hc({ split: t, types: e }) {
  let o = t.length;
  return (r) => {
    let n = "";
    for (let s = 0; s < o; s++)
      if (((n += t[s]), r[s] !== void 0)) {
        let i = e[s];
        i === pc ? (n += ve(r[s])) : i === dc ? (n += U.transform(r[s])) : (n += r[s]);
      }
    return n;
  };
}
function sp(t) {
  return hc(Qt(t));
}
var ap = (t) => (typeof t == "number" ? 0 : U.test(t) ? U.getAnimatableNone(t) : t),
  lp = (t, e) => (typeof t == "number" ? (e?.trim().endsWith("/") ? t : 0) : ap(t));
function cp(t) {
  let e = Qt(t);
  return hc(e)(e.values.map((r, n) => lp(r, e.split[n])));
}
var Z = { test: ep, parse: ip, createTransformer: sp, getAnimatableNone: cp };
function Os(t, e, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6 ? t + (e - t) * 6 * o : o < 1 / 2 ? e : o < 2 / 3 ? t + (e - t) * (2 / 3 - o) * 6 : t
  );
}
function Fs({ hue: t, saturation: e, lightness: o, alpha: r }) {
  ((t /= 360), (e /= 100), (o /= 100));
  let n = 0,
    s = 0,
    i = 0;
  if (!e) n = s = i = o;
  else {
    let a = o < 0.5 ? o * (1 + e) : o + e - o * e,
      l = 2 * o - a;
    ((n = Os(l, a, t + 1 / 3)), (s = Os(l, a, t)), (i = Os(l, a, t - 1 / 3)));
  }
  return {
    red: Math.round(n * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r,
  };
}
function We(t, e) {
  return (o) => (o > 0 ? e : t);
}
var R = (t, e, o) => t + (e - t) * o;
var si = (t, e, o) => {
    let r = t * t,
      n = o * (e * e - r) + r;
    return n < 0 ? 0 : Math.sqrt(n);
  },
  up = [Mo, kt, Jt],
  mp = (t) => up.find((e) => e.test(t));
function gc(t) {
  let e = mp(t);
  if (
    (yt(
      !!e,
      `'${t}' is not an animatable color. Use the equivalent color code instead.`,
      "color-not-animatable"
    ),
    !e)
  )
    return !1;
  let o = e.parse(t);
  return (e === Jt && (o = Fs(o)), o);
}
var ai = (t, e) => {
  let o = gc(t),
    r = gc(e);
  if (!o || !r) return We(t, e);
  let n = { ...o };
  return (s) => (
    (n.red = si(o.red, r.red, s)),
    (n.green = si(o.green, r.green, s)),
    (n.blue = si(o.blue, r.blue, s)),
    (n.alpha = R(o.alpha, r.alpha, s)),
    kt.transform(n)
  );
};
var Br = new Set(["none", "hidden"]);
function js(t, e) {
  return Br.has(t) ? (o) => (o <= 0 ? t : e) : (o) => (o >= 1 ? e : t);
}
function fp(t, e) {
  return (o) => R(t, e, o);
}
function Or(t) {
  return typeof t == "number"
    ? fp
    : typeof t == "string"
      ? Ne(t)
        ? We
        : U.test(t)
          ? ai
          : xc
      : Array.isArray(t)
        ? Ns
        : typeof t == "object"
          ? U.test(t)
            ? ai
            : yc
          : We;
}
function Ns(t, e) {
  let o = [...t],
    r = o.length,
    n = t.map((s, i) => Or(s)(s, e[i]));
  return (s) => {
    for (let i = 0; i < r; i++) o[i] = n[i](s);
    return o;
  };
}
function yc(t, e) {
  let o = { ...t, ...e },
    r = {};
  for (let n in o) t[n] !== void 0 && e[n] !== void 0 && (r[n] = Or(t[n])(t[n], e[n]));
  return (n) => {
    for (let s in r) o[s] = r[s](n);
    return o;
  };
}
function pp(t, e) {
  let o = [],
    r = { color: 0, var: 0, number: 0 };
  for (let n = 0; n < e.values.length; n++) {
    let s = e.types[n],
      i = t.indexes[s][r[s]],
      a = t.values[i] ?? 0;
    ((o[n] = a), r[s]++);
  }
  return o;
}
var xc = (t, e) => {
  let o = Z.createTransformer(e),
    r = Qt(t),
    n = Qt(e);
  return r.indexes.var.length === n.indexes.var.length &&
    r.indexes.color.length === n.indexes.color.length &&
    r.indexes.number.length >= n.indexes.number.length
    ? (Br.has(t) && !n.values.length) || (Br.has(e) && !r.values.length)
      ? js(t, e)
      : Lt(Ns(pp(r, n), n.values), o)
    : (yt(
        !0,
        `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        "complex-values-different"
      ),
      We(t, e));
};
function Fr(t, e, o) {
  return typeof t == "number" && typeof e == "number" && typeof o == "number"
    ? R(t, e, o)
    : Or(t)(t, e);
}
var vc = (t) => {
  let e = ({ timestamp: o }) => t(o);
  return {
    start: (o = !0) => S.update(e, o),
    stop: () => B(e),
    now: () => (G.isProcessing ? G.timestamp : K.now()),
  };
};
var jr = (t, e, o = 10) => {
  let r = "",
    n = Math.max(Math.round(e / o), 2);
  for (let s = 0; s < n; s++) r += Math.round(t(s / (n - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
var Nr = 2e4;
function Ge(t) {
  let e = 0,
    o = 50,
    r = t.next(e);
  for (; !r.done && e < 2e4; ) ((e += o), (r = t.next(e)));
  return e >= 2e4 ? 1 / 0 : e;
}
function Wr(t, e = 100, o) {
  let r = o({ ...t, keyframes: [0, e] }),
    n = Math.min(Ge(r), 2e4);
  return { type: "keyframes", ease: (s) => r.next(n * s).value / e, duration: ot(n) };
}
var $ = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Gs(t, e) {
  return t * Math.sqrt(1 - e * e);
}
var dp = 12;
function hp(t, e, o) {
  let r = o;
  for (let n = 1; n < dp; n++) r = r - t(r) / e(r);
  return r;
}
var Ws = 0.001;
function gp({
  duration: t = $.duration,
  bounce: e = $.bounce,
  velocity: o = $.velocity,
  mass: r = $.mass,
}) {
  let n, s;
  yt(t <= k($.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let i = 1 - e;
  ((i = H($.minDamping, $.maxDamping, i)),
    (t = H($.minDuration, $.maxDuration, ot(t))),
    i < 1
      ? ((n = (c) => {
          let u = c * i,
            m = u * t,
            f = u - o,
            p = Gs(c, i),
            d = Math.exp(-m);
          return Ws - (f / p) * d;
        }),
        (s = (c) => {
          let m = c * i * t,
            f = m * o + o,
            p = Math.pow(i, 2) * Math.pow(c, 2) * t,
            d = Math.exp(-m),
            h = Gs(Math.pow(c, 2), i);
          return ((-n(c) + Ws > 0 ? -1 : 1) * ((f - p) * d)) / h;
        }))
      : ((n = (c) => {
          let u = Math.exp(-c * t),
            m = (c - o) * t + 1;
          return -Ws + u * m;
        }),
        (s = (c) => {
          let u = Math.exp(-c * t),
            m = (o - c) * (t * t);
          return u * m;
        })));
  let a = 5 / t,
    l = hp(n, s, a);
  if (((t = k(t)), isNaN(l))) return { stiffness: $.stiffness, damping: $.damping, duration: t };
  {
    let c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: i * 2 * Math.sqrt(r * c), duration: t };
  }
}
var yp = ["duration", "bounce"],
  xp = ["stiffness", "damping", "mass"];
function Tc(t, e) {
  return e.some((o) => t[o] !== void 0);
}
function vp(t) {
  let e = {
    velocity: $.velocity,
    stiffness: $.stiffness,
    damping: $.damping,
    mass: $.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!Tc(t, xp) && Tc(t, yp))
    if (((e.velocity = 0), t.visualDuration)) {
      let o = t.visualDuration,
        r = (2 * Math.PI) / (o * 1.2),
        n = r * r,
        s = 2 * H(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
      e = { ...e, mass: $.mass, stiffness: n, damping: s };
    } else {
      let o = gp({ ...t, velocity: 0 });
      ((e = { ...e, ...o, mass: $.mass }), (e.isResolvedFromDuration = !0));
    }
  return e;
}
function te(t = $.visualDuration, e = $.bounce) {
  let o = typeof t != "object" ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t,
    { restSpeed: r, restDelta: n } = o,
    s = o.keyframes[0],
    i = o.keyframes[o.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: c,
      mass: u,
      duration: m,
      velocity: f,
      isResolvedFromDuration: p,
    } = vp({ ...o, velocity: -ot(o.velocity || 0) }),
    d = f || 0,
    h = c / (2 * Math.sqrt(l * u)),
    g = i - s,
    y = ot(Math.sqrt(l / u)),
    x = Math.abs(g) < 5;
  (r || (r = x ? $.restSpeed.granular : $.restSpeed.default),
    n || (n = x ? $.restDelta.granular : $.restDelta.default));
  let v, T, b, D, j, E;
  if (h < 1)
    ((b = Gs(y, h)),
      (D = (d + h * y * g) / b),
      (v = (P) => {
        let L = Math.exp(-h * y * P);
        return i - L * (D * Math.sin(b * P) + g * Math.cos(b * P));
      }),
      (j = h * y * D + g * b),
      (E = h * y * g - D * b),
      (T = (P) => Math.exp(-h * y * P) * (j * Math.sin(b * P) + E * Math.cos(b * P))));
  else if (h === 1) {
    v = (L) => i - Math.exp(-y * L) * (g + (d + y * g) * L);
    let P = d + y * g;
    T = (L) => Math.exp(-y * L) * (y * P * L - d);
  } else {
    let P = y * Math.sqrt(h * h - 1);
    v = (mt) => {
      let Ct = Math.exp(-h * y * mt),
        Et = Math.min(P * mt, 300);
      return i - (Ct * ((d + h * y * g) * Math.sinh(Et) + P * g * Math.cosh(Et))) / P;
    };
    let L = (d + h * y * g) / P,
      X = h * y * L - g * P,
      et = h * y * g - L * P;
    T = (mt) => {
      let Ct = Math.exp(-h * y * mt),
        Et = Math.min(P * mt, 300);
      return Ct * (X * Math.sinh(Et) + et * Math.cosh(Et));
    };
  }
  let A = {
    calculatedDuration: (p && m) || null,
    velocity: (P) => k(T(P)),
    next: (P) => {
      if (!p && h < 1) {
        let X = Math.exp(-h * y * P),
          et = Math.sin(b * P),
          mt = Math.cos(b * P),
          Ct = i - X * (D * et + g * mt),
          Et = k(X * (j * et + E * mt));
        return (
          (a.done = Math.abs(Et) <= r && Math.abs(i - Ct) <= n),
          (a.value = a.done ? i : Ct),
          a
        );
      }
      let L = v(P);
      if (p) a.done = P >= m;
      else {
        let X = k(T(P));
        a.done = Math.abs(X) <= r && Math.abs(i - L) <= n;
      }
      return ((a.value = a.done ? i : L), a);
    },
    toString: () => {
      let P = Math.min(Ge(A), 2e4),
        L = jr((X) => A.next(P * X).value, P, 30);
      return P + "ms " + L;
    },
    toTransition: () => {},
  };
  return A;
}
te.applyToOptions = (t) => {
  let e = Wr(t, 100, te);
  return ((t.ease = e.ease), (t.duration = k(e.duration)), (t.type = "keyframes"), t);
};
var Tp = 5;
function li(t, e, o) {
  let r = Math.max(e - Tp, 0);
  return ke(o - t(r), e - r);
}
function Do({
  keyframes: t,
  velocity: e = 0,
  power: o = 0.8,
  timeConstant: r = 325,
  bounceDamping: n = 10,
  bounceStiffness: s = 500,
  modifyTarget: i,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  let m = t[0],
    f = { done: !1, value: m },
    p = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    d = (E) => (a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l),
    h = o * e,
    g = m + h,
    y = i === void 0 ? g : i(g);
  y !== g && (h = y - m);
  let x = (E) => -h * Math.exp(-E / r),
    v = (E) => y + x(E),
    T = (E) => {
      let A = x(E),
        P = v(E);
      ((f.done = Math.abs(A) <= c), (f.value = f.done ? y : P));
    },
    b,
    D,
    j = (E) => {
      p(f.value) &&
        ((b = E),
        (D = te({
          keyframes: [f.value, d(f.value)],
          velocity: li(v, E, f.value),
          damping: n,
          stiffness: s,
          restDelta: c,
          restSpeed: u,
        })));
    };
  return (
    j(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let A = !1;
        return (
          !D && b === void 0 && ((A = !0), T(E), j(E)),
          b !== void 0 && E >= b ? D.next(E - b) : (!A && T(E), f)
        );
      },
    }
  );
}
function Sp(t, e, o) {
  let r = [],
    n = o || q.mix || Fr,
    s = t.length - 1;
  for (let i = 0; i < s; i++) {
    let a = n(t[i], t[i + 1]);
    if (e) {
      let l = Array.isArray(e) ? e[i] || F : e;
      a = Lt(l, a);
    }
    r.push(a);
  }
  return r;
}
function Ue(t, e, { clamp: o = !0, ease: r, mixer: n } = {}) {
  let s = t.length;
  if (
    (W(s === e.length, "Both input and output ranges must be the same length", "range-length"),
    s === 1)
  )
    return () => e[0];
  if (s === 2 && e[0] === e[1]) return () => e[1];
  let i = t[0] === t[1];
  t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  let a = Sp(e, r, n),
    l = a.length,
    c = (u) => {
      if (i && u < t[0]) return e[0];
      let m = 0;
      if (l > 1) for (; m < t.length - 2 && !(u < t[m + 1]); m++);
      let f = pt(t[m], t[m + 1], u);
      return a[m](f);
    };
  return o ? (u) => c(H(t[0], t[s - 1], u)) : c;
}
function Gr(t, e) {
  let o = t[t.length - 1];
  for (let r = 1; r <= e; r++) {
    let n = pt(0, e, r);
    t.push(R(o, 1, n));
  }
}
function ze(t) {
  let e = [0];
  return (Gr(e, t.length - 1), e);
}
function Us(t, e) {
  return t.map((o) => o * e);
}
function Sc(t, e) {
  return t.map(() => e || Mr).splice(0, t.length - 1);
}
function Te({ duration: t = 300, keyframes: e, times: o, ease: r = "easeInOut" }) {
  let n = Dr(r) ? r.map(Ao) : Ao(r),
    s = { done: !1, value: e[0] },
    i = Us(o && o.length === e.length ? o : ze(e), t),
    a = Ue(i, e, { ease: Array.isArray(n) ? n : Sc(e, n) });
  return { calculatedDuration: t, next: (l) => ((s.value = a(l)), (s.done = l >= t), s) };
}
var wp = (t) => t !== null;
function ee(t, { repeat: e, repeatType: o = "loop" }, r, n = 1) {
  let s = t.filter(wp),
    a = n < 0 || (e && o !== "loop" && e % 2 === 1) ? 0 : s.length - 1;
  return !a || r === void 0 ? s[a] : r;
}
var Vp = { decay: Do, inertia: Do, tween: Te, keyframes: Te, spring: te };
function ci(t) {
  typeof t.type == "string" && (t.type = Vp[t.type]);
}
var Se = class {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, o) {
    return this.finished.then(e, o);
  }
};
var bp = (t) => t / 100,
  xt = class extends Se {
    constructor(e) {
      (super(),
        (this.state = "idle"),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.delayState = { done: !1, value: void 0 }),
        (this.stop = () => {
          let { motionValue: o } = this.options;
          (o && o.updatedAt !== K.now() && this.tick(K.now()),
            (this.isStopped = !0),
            this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
        }),
        at.mainThread++,
        (this.options = e),
        this.initAnimation(),
        this.play(),
        e.autoplay === !1 && this.pause());
    }
    initAnimation() {
      let { options: e } = this;
      ci(e);
      let { type: o = Te, repeat: r = 0, repeatDelay: n = 0, repeatType: s, velocity: i = 0 } = e,
        { keyframes: a } = e,
        l = o || Te;
      l !== Te &&
        typeof a[0] != "number" &&
        ((this.mixKeyframes = Lt(bp, Fr(a[0], a[1]))), (a = [0, 100]));
      let c = l({ ...e, keyframes: a });
      (s === "mirror" &&
        (this.mirroredGenerator = l({ ...e, keyframes: [...a].reverse(), velocity: -i })),
        c.calculatedDuration === null && (c.calculatedDuration = Ge(c)));
      let { calculatedDuration: u } = c;
      ((this.calculatedDuration = u),
        (this.resolvedDuration = u + n),
        (this.totalDuration = this.resolvedDuration * (r + 1) - n),
        (this.generator = c));
    }
    updateTime(e) {
      let o = Math.round(e - this.startTime) * this.playbackSpeed;
      this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = o);
    }
    tick(e, o = !1) {
      let {
        generator: r,
        totalDuration: n,
        mixKeyframes: s,
        mirroredGenerator: i,
        resolvedDuration: a,
        calculatedDuration: l,
      } = this;
      if (this.startTime === null) return r.next(0);
      let {
        delay: c = 0,
        keyframes: u,
        repeat: m,
        repeatType: f,
        repeatDelay: p,
        type: d,
        onUpdate: h,
        finalKeyframe: g,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 && (this.startTime = Math.min(e - n / this.speed, this.startTime)),
        o ? (this.currentTime = e) : this.updateTime(e));
      let y = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
        x = this.playbackSpeed >= 0 ? y < 0 : y > n;
      ((this.currentTime = Math.max(y, 0)),
        this.state === "finished" && this.holdTime === null && (this.currentTime = n));
      let v = this.currentTime,
        T = r;
      if (m) {
        let E = Math.min(this.currentTime, n) / a,
          A = Math.floor(E),
          P = E % 1;
        (!P && E >= 1 && (P = 1),
          P === 1 && A--,
          (A = Math.min(A, m + 1)),
          !!(A % 2) &&
            (f === "reverse" ? ((P = 1 - P), p && (P -= p / a)) : f === "mirror" && (T = i)),
          (v = H(0, 1, P) * a));
      }
      let b;
      (x ? ((this.delayState.value = u[0]), (b = this.delayState)) : (b = T.next(v)),
        s && !x && (b.value = s(b.value)));
      let { done: D } = b;
      !x &&
        l !== null &&
        (D = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
      let j =
        this.holdTime === null && (this.state === "finished" || (this.state === "running" && D));
      return (
        j && d !== Do && (b.value = ee(u, this.options, g, this.speed)),
        h && h(b.value),
        j && this.finish(),
        b
      );
    }
    then(e, o) {
      return this.finished.then(e, o);
    }
    get duration() {
      return ot(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + ot(e);
    }
    get time() {
      return ot(this.currentTime);
    }
    set time(e) {
      ((e = k(e)),
        (this.currentTime = e),
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
          ? (this.holdTime = e)
          : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
        this.driver
          ? this.driver.start(!1)
          : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = e), this.tick(e)));
    }
    getGeneratorVelocity() {
      let e = this.currentTime;
      if (e <= 0) return this.options.velocity || 0;
      if (this.generator.velocity) return this.generator.velocity(e);
      let o = this.generator.next(e).value;
      return li((r) => this.generator.next(r).value, e, o);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let o = this.playbackSpeed !== e;
      (o && this.driver && this.updateTime(K.now()),
        (this.playbackSpeed = e),
        o && this.driver && (this.time = ot(this.currentTime)));
    }
    play() {
      if (this.isStopped) return;
      let { driver: e = vc, startTime: o } = this.options;
      (this.driver || (this.driver = e((n) => this.tick(n))), this.options.onPlay?.());
      let r = this.driver.now();
      (this.state === "finished"
        ? (this.updateFinished(), (this.startTime = r))
        : this.holdTime !== null
          ? (this.startTime = r - this.holdTime)
          : this.startTime || (this.startTime = o ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start());
    }
    pause() {
      ((this.state = "paused"), this.updateTime(K.now()), (this.holdTime = this.currentTime));
    }
    complete() {
      (this.state !== "running" && this.play(), (this.state = "finished"), (this.holdTime = null));
    }
    finish() {
      (this.notifyFinished(),
        this.teardown(),
        (this.state = "finished"),
        this.options.onComplete?.());
    }
    cancel() {
      ((this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.());
    }
    teardown() {
      ((this.state = "idle"),
        this.stopDriver(),
        (this.startTime = this.holdTime = null),
        at.mainThread--);
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
    attachTimeline(e) {
      return (
        this.options.allowFlatten &&
          ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
        this.driver?.stop(),
        e.observe(this)
      );
    }
  };
function Ap(t) {
  return new xt(t);
}
function Ur(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
var Ke = (t) => (t * 180) / Math.PI,
  zs = (t) => {
    let e = Ke(Math.atan2(t[1], t[0]));
    return Ks(e);
  },
  Pp = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: zs,
    rotateZ: zs,
    skewX: (t) => Ke(Math.atan(t[1])),
    skewY: (t) => Ke(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  Ks = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  wc = zs,
  Vc = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  bc = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  Cp = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Vc,
    scaleY: bc,
    scale: (t) => (Vc(t) + bc(t)) / 2,
    rotateX: (t) => Ks(Ke(Math.atan2(t[6], t[5]))),
    rotateY: (t) => Ks(Ke(Math.atan2(-t[2], t[0]))),
    rotateZ: wc,
    rotate: wc,
    skewX: (t) => Ke(Math.atan(t[4])),
    skewY: (t) => Ke(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function zr(t) {
  return t.includes("scale") ? 1 : 0;
}
function Kr(t, e) {
  if (!t || t === "none") return zr(e);
  let o = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    n;
  if (o) ((r = Cp), (n = o));
  else {
    let a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Pp), (n = a));
  }
  if (!n) return zr(e);
  let s = r[e],
    i = n[1].split(",").map(Ep);
  return typeof s == "function" ? s(i) : i[s];
}
var Hs = (t, e) => {
  let { transform: o = "none" } = getComputedStyle(t);
  return Kr(o, e);
};
function Ep(t) {
  return parseFloat(t.trim());
}
var dt = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Q = new Set(dt);
var $s = (t) => t === It || t === w,
  Mp = new Set(["x", "y", "z"]),
  Dp = dt.filter((t) => !Mp.has(t));
function Ac(t) {
  let e = [];
  return (
    Dp.forEach((o) => {
      let r = t.getValue(o);
      r !== void 0 && (e.push([o, r.get()]), r.set(o.startsWith("scale") ? 1 : 0));
    }),
    e
  );
}
var oe = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: o = "0", boxSizing: r }) => {
    let n = t.max - t.min;
    return r === "border-box" ? n : n - parseFloat(e) - parseFloat(o);
  },
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: o = "0", boxSizing: r }) => {
    let n = t.max - t.min;
    return r === "border-box" ? n : n - parseFloat(e) - parseFloat(o);
  },
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: (t, { transform: e }) => Kr(e, "x"),
  y: (t, { transform: e }) => Kr(e, "y"),
};
oe.translateX = oe.x;
oe.translateY = oe.y;
var He = new Set(),
  Xs = !1,
  Ys = !1,
  _s = !1;
function Pc() {
  if (Ys) {
    let t = Array.from(He).filter((r) => r.needsMeasurement),
      e = new Set(t.map((r) => r.element)),
      o = new Map();
    (e.forEach((r) => {
      let n = Ac(r);
      n.length && (o.set(r, n), r.render());
    }),
      t.forEach((r) => r.measureInitialState()),
      e.forEach((r) => {
        r.render();
        let n = o.get(r);
        n &&
          n.forEach(([s, i]) => {
            r.getValue(s)?.set(i);
          });
      }),
      t.forEach((r) => r.measureEndState()),
      t.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Ys = !1), (Xs = !1), He.forEach((t) => t.complete(_s)), He.clear());
}
function Cc() {
  He.forEach((t) => {
    (t.readKeyframes(), t.needsMeasurement && (Ys = !0));
  });
}
function qs() {
  ((_s = !0), Cc(), Pc(), (_s = !1));
}
var re = class {
  constructor(e, o, r, n, s, i = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = o),
      (this.name = r),
      (this.motionValue = n),
      (this.element = s),
      (this.isAsync = i));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (He.add(this), Xs || ((Xs = !0), S.read(Cc), S.resolveKeyframes(Pc)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, name: o, element: r, motionValue: n } = this;
    if (e[0] === null) {
      let s = n?.get(),
        i = e[e.length - 1];
      if (s !== void 0) e[0] = s;
      else if (r && o) {
        let a = r.readValue(o, i);
        a != null && (e[0] = a);
      }
      (e[0] === void 0 && (e[0] = i), n && s === void 0 && n.set(e[0]));
    }
    Ur(e);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(e = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
      He.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (He.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
};
var Ro = (t) => t.startsWith("--");
function Hr(t, e, o) {
  Ro(e) ? t.style.setProperty(e, o) : (t.style[e] = o);
}
var Zs = {};
function $r(t, e) {
  let o = Ie(t);
  return () => Zs[e] ?? o();
}
var $e = $r(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Xr = $r(() => window.ViewTimeline !== void 0, "viewTimeline");
var we = $r(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
var Ve = ([t, e, o, r]) => `cubic-bezier(${t}, ${e}, ${o}, ${r})`;
var Lo = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Ve([0, 0.65, 0.55, 1]),
  circOut: Ve([0.55, 0, 1, 0.45]),
  backIn: Ve([0.31, 0.01, 0.66, -0.59]),
  backOut: Ve([0.33, 1.53, 0.69, 0.99]),
};
function Io(t, e) {
  if (t)
    return typeof t == "function"
      ? we()
        ? jr(t, e)
        : "ease-out"
      : Oe(t)
        ? Ve(t)
        : Array.isArray(t)
          ? t.map((o) => Io(o, e) || Lo.easeOut)
          : Lo[t];
}
function ko(
  t,
  e,
  o,
  {
    delay: r = 0,
    duration: n = 300,
    repeat: s = 0,
    repeatType: i = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  c = void 0
) {
  let u = { [e]: o };
  l && (u.offset = l);
  let m = Io(a, n);
  (Array.isArray(m) && (u.easing = m), Y.value && at.waapi++);
  let f = {
    delay: r,
    duration: n,
    easing: Array.isArray(m) ? "linear" : m,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal",
  };
  c && (f.pseudoElement = c);
  let p = t.animate(u, f);
  return (
    Y.value &&
      p.finished.finally(() => {
        at.waapi--;
      }),
    p
  );
}
function Xe(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function Yr({ type: t, ...e }) {
  return Xe(t) && we()
    ? t.applyToOptions(e)
    : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
var vt = class extends Se {
  constructor(e) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !e)
    )
      return;
    let {
      element: o,
      name: r,
      keyframes: n,
      pseudoElement: s,
      allowFlatten: i = !1,
      finalKeyframe: a,
      onComplete: l,
    } = e;
    ((this.isPseudoElement = !!s),
      (this.allowFlatten = i),
      (this.options = e),
      W(
        typeof e.type != "string",
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring"
      ));
    let c = Yr(e);
    ((this.animation = ko(o, r, n, c, s)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          let u = ee(n, this.options, a, this.speed);
          (this.updateMotionValue && this.updateMotionValue(u),
            Hr(o, r, u),
            this.animation.cancel());
        }
        (l?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    let { state: e } = this;
    e === "idle" ||
      e === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    let e = this.options?.element;
    !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    let e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return ot(Number(e));
  }
  get iterationDuration() {
    let { delay: e = 0 } = this.options || {};
    return this.duration + ot(e);
  }
  get time() {
    return ot(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    let o = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = k(e)),
      o && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, rangeStart: o, rangeEnd: r, observe: n }) {
    return (
      this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      e && $e()
        ? ((this.animation.timeline = e),
          o && (this.animation.rangeStart = o),
          r && (this.animation.rangeEnd = r),
          F)
        : n(this)
    );
  }
};
var Ec = { anticipate: Ar, backInOut: br, circInOut: Er };
function Rp(t) {
  return t in Ec;
}
function Mc(t) {
  typeof t.ease == "string" && Rp(t.ease) && (t.ease = Ec[t.ease]);
}
var Js = 10,
  _r = class extends vt {
    constructor(e) {
      (Mc(e),
        ci(e),
        super(e),
        e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime),
        (this.options = e));
    }
    updateMotionValue(e) {
      let { motionValue: o, onUpdate: r, onComplete: n, element: s, ...i } = this.options;
      if (!o) return;
      if (e !== void 0) {
        o.set(e);
        return;
      }
      let a = new xt({ ...i, autoplay: !1 }),
        l = Math.max(Js, K.now() - this.startTime),
        c = H(0, Js, l - Js),
        u = a.sample(l).value,
        { name: m } = this.options;
      (s && m && Hr(s, m, u),
        o.setWithVelocity(a.sample(Math.max(0, l - c)).value, u, c),
        a.stop());
    }
  };
var Qs = (t, e) =>
  e === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" && (Z.test(t) || t === "0") && !t.startsWith("url("))
      );
function Lp(t) {
  let e = t[0];
  if (t.length === 1) return !0;
  for (let o = 0; o < t.length; o++) if (t[o] !== e) return !0;
}
function Dc(t, e, o, r) {
  let n = t[0];
  if (n === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  let s = t[t.length - 1],
    i = Qs(n, e),
    a = Qs(s, e);
  return (
    yt(
      i === a,
      `You are trying to animate ${e} from "${n}" to "${s}". "${i ? s : n}" is not an animatable value.`,
      "value-not-animatable"
    ),
    !i || !a ? !1 : Lp(t) || ((o === "spring" || Xe(o)) && r)
  );
}
function Bo(t) {
  ((t.duration = 0), (t.type = "keyframes"));
}
var Ye = new Set(["opacity", "clipPath", "filter", "transform"]);
var Ip = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Rc(t) {
  for (let e = 0; e < t.length; e++) if (typeof t[e] == "string" && Ip.test(t[e])) return !0;
  return !1;
}
var kp = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  Bp = Ie(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ta(t) {
  let {
    motionValue: e,
    name: o,
    repeatDelay: r,
    repeatType: n,
    damping: s,
    type: i,
    keyframes: a,
  } = t;
  if (!(e?.owner?.current instanceof HTMLElement)) return !1;
  let { onUpdate: c, transformTemplate: u } = e.owner.getProps();
  return (
    Bp() &&
    o &&
    (Ye.has(o) || (kp.has(o) && Rc(a))) &&
    (o !== "transform" || !u) &&
    !c &&
    !r &&
    n !== "mirror" &&
    s !== 0 &&
    i !== "inertia"
  );
}
var Op = 40,
  qr = class extends Se {
    constructor({
      autoplay: e = !0,
      delay: o = 0,
      type: r = "keyframes",
      repeat: n = 0,
      repeatDelay: s = 0,
      repeatType: i = "loop",
      keyframes: a,
      name: l,
      motionValue: c,
      element: u,
      ...m
    }) {
      (super(),
        (this.stop = () => {
          (this._animation && (this._animation.stop(), this.stopTimeline?.()),
            this.keyframeResolver?.cancel());
        }),
        (this.createdAt = K.now()));
      let f = {
          autoplay: e,
          delay: o,
          type: r,
          repeat: n,
          repeatDelay: s,
          repeatType: i,
          name: l,
          motionValue: c,
          element: u,
          ...m,
        },
        p = u?.KeyframeResolver || re;
      ((this.keyframeResolver = new p(
        a,
        (d, h, g) => this.onKeyframesResolved(d, h, f, !g),
        l,
        c,
        u
      )),
        this.keyframeResolver?.scheduleResolve());
    }
    onKeyframesResolved(e, o, r, n) {
      this.keyframeResolver = void 0;
      let { name: s, type: i, velocity: a, delay: l, isHandoff: c, onUpdate: u } = r;
      this.resolvedAt = K.now();
      let m = !0;
      Dc(e, s, i, a) ||
        ((m = !1),
        (q.instantAnimations || !l) && u?.(ee(e, r, o)),
        (e[0] = e[e.length - 1]),
        Bo(r),
        (r.repeat = 0));
      let p = {
          startTime: n
            ? this.resolvedAt
              ? this.resolvedAt - this.createdAt > Op
                ? this.resolvedAt
                : this.createdAt
              : this.createdAt
            : void 0,
          finalKeyframe: o,
          ...r,
          keyframes: e,
        },
        d = m && !c && ta(p),
        h = p.motionValue?.owner?.current,
        g;
      if (d)
        try {
          g = new _r({ ...p, element: h });
        } catch {
          g = new xt(p);
        }
      else g = new xt(p);
      (g.finished
        .then(() => {
          this.notifyFinished();
        })
        .catch(F),
        this.pendingTimeline &&
          ((this.stopTimeline = g.attachTimeline(this.pendingTimeline)),
          (this.pendingTimeline = void 0)),
        (this._animation = g));
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(e, o) {
      return this.finished.finally(e).then(() => {});
    }
    get animation() {
      return (this._animation || (this.keyframeResolver?.resume(), qs()), this._animation);
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(e) {
      this.animation.time = e;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(e) {
      this.animation.speed = e;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(e) {
      return (
        this._animation
          ? (this.stopTimeline = this.animation.attachTimeline(e))
          : (this.pendingTimeline = e),
        () => this.stop()
      );
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      (this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
    }
  };
var zt = class {
  constructor(e) {
    ((this.stop = () => this.runAll("stop")), (this.animations = e.filter(Boolean)));
  }
  get finished() {
    return Promise.all(this.animations.map((e) => e.finished));
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, o) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][e] = o;
  }
  attachTimeline(e) {
    let o = this.animations.map((r) => r.attachTimeline(e));
    return () => {
      o.forEach((r, n) => {
        (r && r(), this.animations[n].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return Lc(this.animations, "duration");
  }
  get iterationDuration() {
    return Lc(this.animations, "iterationDuration");
  }
  runAll(e) {
    this.animations.forEach((o) => o[e]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
};
function Lc(t, e) {
  let o = 0;
  for (let r = 0; r < t.length; r++) {
    let n = t[r][e];
    n !== null && n > o && (o = n);
  }
  return o;
}
var _e = class extends zt {
  then(e, o) {
    return this.finished.finally(e).then(() => {});
  }
};
var Oo = class extends vt {
  constructor(e) {
    (super(),
      (this.animation = e),
      (e.onfinish = () => {
        ((this.finishedTime = this.time), this.notifyFinished());
      }));
  }
};
var Ic = new WeakMap(),
  ea = (t, e = "") => `${t}:${e}`;
function oa(t) {
  let e = Ic.get(t);
  return (e || ((e = new Map()), Ic.set(t, e)), e);
}
function Zr(t, e, o, r = 0, n = 1) {
  let s = Array.from(t)
      .sort((c, u) => c.sortNodePosition(u))
      .indexOf(e),
    i = t.size,
    a = (i - 1) * r;
  return typeof o == "function" ? o(s, i) : n === 1 ? s * r : a - s * r;
}
var Fp = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function kc(t) {
  let e = Fp.exec(t);
  if (!e) return [,];
  let [, o, r, n] = e;
  return [`--${o ?? r}`, n];
}
var jp = 4;
function ui(t, e, o = 1) {
  W(
    o <= jp,
    `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
    "max-css-var-depth"
  );
  let [r, n] = kc(t);
  if (!r) return;
  let s = window.getComputedStyle(e).getPropertyValue(r);
  if (s) {
    let i = s.trim();
    return vr(i) ? parseFloat(i) : i;
  }
  return Ne(n) ? ui(n, e, o + 1) : n;
}
var Np = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Wp = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Gp = { type: "keyframes", duration: 0.8 },
  Up = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ra = (t, { keyframes: e }) =>
    e.length > 2 ? Gp : Q.has(t) ? (t.startsWith("scale") ? Wp(e[1]) : Np) : Up;
function qe(t, e) {
  if (t?.inherit && e) {
    let { inherit: o, ...r } = t;
    return { ...e, ...r };
  }
  return t;
}
function Tt(t, e) {
  let o = t?.[e] ?? t?.default ?? t;
  return o !== t ? qe(o, t) : o;
}
var zp = new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
]);
function na(t) {
  for (let e in t) if (!zp.has(e)) return !0;
  return !1;
}
var Ze =
  (t, e, o, r = {}, n, s) =>
  (i) => {
    let a = Tt(r, t) || {},
      l = a.delay || r.delay || 0,
      { elapsed: c = 0 } = r;
    c = c - k(l);
    let u = {
      keyframes: Array.isArray(o) ? o : [null, o],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (f) => {
        (e.set(f), a.onUpdate && a.onUpdate(f));
      },
      onComplete: () => {
        (i(), a.onComplete && a.onComplete());
      },
      name: t,
      motionValue: e,
      element: s ? void 0 : n,
    };
    (na(a) || Object.assign(u, ra(t, u)),
      u.duration && (u.duration = k(u.duration)),
      u.repeatDelay && (u.repeatDelay = k(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from));
    let m = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        (Bo(u), u.delay === 0 && (m = !0)),
      (q.instantAnimations || q.skipAnimations || n?.shouldSkipAnimations || a.skipAnimations) &&
        ((m = !0), Bo(u), (u.delay = 0)),
      (u.allowFlatten = !a.type && !a.ease),
      m && !s && e.get() !== void 0)
    ) {
      let f = ee(u.keyframes, a);
      if (f !== void 0) {
        S.update(() => {
          (u.onUpdate(f), u.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new xt(u) : new qr(u);
  };
function Bc(t) {
  let e = [{}, {}];
  return (
    t?.values.forEach((o, r) => {
      ((e[0][r] = o.get()), (e[1][r] = o.getVelocity()));
    }),
    e
  );
}
function Je(t, e, o, r) {
  if (typeof e == "function") {
    let [n, s] = Bc(r);
    e = e(o !== void 0 ? o : t.custom, n, s);
  }
  if ((typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function")) {
    let [n, s] = Bc(r);
    e = e(o !== void 0 ? o : t.custom, n, s);
  }
  return e;
}
function St(t, e, o) {
  let r = t.getProps();
  return Je(r, e, o !== void 0 ? o : r.custom, t);
}
var Jr = new Set(["width", "height", "top", "left", "right", "bottom", ...dt]);
var Oc = 30,
  Kp = (t) => !isNaN(parseFloat(t)),
  Kt = { current: void 0 },
  Mt = class {
    constructor(e, o = {}) {
      ((this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (r) => {
          let n = K.now();
          if (
            (this.updatedAt !== n && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(r),
            this.current !== this.prev &&
              (this.events.change?.notify(this.current), this.dependents))
          )
            for (let s of this.dependents) s.dirty();
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = o.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = K.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = Kp(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, o) {
      this.events[e] || (this.events[e] = new qt());
      let r = this.events[e].add(o);
      return e === "change"
        ? () => {
            (r(),
              S.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : r;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, o) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = o));
    }
    set(e) {
      this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
    }
    setWithVelocity(e, o, r) {
      (this.set(o),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - r));
    }
    jump(e, o = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        o && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(e) {
      (this.dependents || (this.dependents = new Set()), this.dependents.add(e));
    }
    removeDependent(e) {
      this.dependents && this.dependents.delete(e);
    }
    get() {
      return (Kt.current && Kt.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = K.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Oc)
        return 0;
      let o = Math.min(this.updatedAt - this.prevUpdatedAt, Oc);
      return ke(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((o) => {
          ((this.hasAnimated = !0),
            (this.animation = e(o)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function z(t, e) {
  return new Mt(t, e);
}
var Fo = (t) => Array.isArray(t);
function Hp(t, e, o) {
  t.hasValue(e) ? t.getValue(e).set(o) : t.addValue(e, z(o));
}
function $p(t) {
  return Fo(t) ? t[t.length - 1] || 0 : t;
}
function jo(t, e) {
  let o = St(t, e),
    { transitionEnd: r = {}, transition: n = {}, ...s } = o || {};
  s = { ...s, ...r };
  for (let i in s) {
    let a = $p(s[i]);
    Hp(t, i, a);
  }
}
var M = (t) => !!(t && t.getVelocity);
function ia(t) {
  return !!(M(t) && t.add);
}
function No(t, e) {
  let o = t.getValue("willChange");
  if (ia(o)) return o.add(e);
  if (!o && q.WillChange) {
    let r = new q.WillChange("auto");
    (t.addValue("willChange", r), r.add(e));
  }
}
function ne(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var mi = "framerAppearId",
  Wo = "data-" + ne(mi);
function Qe(t) {
  return t.props[Wo];
}
function Xp({ protectedKeys: t, needsAnimating: e }, o) {
  let r = t.hasOwnProperty(o) && e[o] !== !0;
  return ((e[o] = !1), r);
}
function to(t, e, { delay: o = 0, transitionOverride: r, type: n } = {}) {
  let { transition: s, transitionEnd: i, ...a } = e,
    l = t.getDefaultTransition();
  s = s ? qe(s, l) : l;
  let c = s?.reduceMotion,
    u = s?.skipAnimations;
  r && (s = r);
  let m = [],
    f = n && t.animationState && t.animationState.getState()[n];
  for (let p in a) {
    let d = t.getValue(p, t.latestValues[p] ?? null),
      h = a[p];
    if (h === void 0 || (f && Xp(f, p))) continue;
    let g = { delay: o, ...Tt(s || {}, p) };
    u && (g.skipAnimations = !0);
    let y = d.get();
    if (y !== void 0 && !d.isAnimating() && !Array.isArray(h) && h === y && !g.velocity) {
      S.update(() => d.set(h));
      continue;
    }
    let x = !1;
    if (window.MotionHandoffAnimation) {
      let b = Qe(t);
      if (b) {
        let D = window.MotionHandoffAnimation(b, p, S);
        D !== null && ((g.startTime = D), (x = !0));
      }
    }
    No(t, p);
    let v = c ?? t.shouldReduceMotion;
    d.start(Ze(p, d, h, v && Jr.has(p) ? { type: !1 } : g, t, x));
    let T = d.animation;
    T && m.push(T);
  }
  if (i) {
    let p = () =>
      S.update(() => {
        i && jo(t, i);
      });
    m.length ? Promise.all(m).then(p) : p();
  }
  return m;
}
function Qr(t, e, o = {}) {
  let r = St(t, e, o.type === "exit" ? t.presenceContext?.custom : void 0),
    { transition: n = t.getDefaultTransition() || {} } = r || {};
  o.transitionOverride && (n = o.transitionOverride);
  let s = r ? () => Promise.all(to(t, r, o)) : () => Promise.resolve(),
    i =
      t.variantChildren && t.variantChildren.size
        ? (l = 0) => {
            let { delayChildren: c = 0, staggerChildren: u, staggerDirection: m } = n;
            return Yp(t, e, l, c, u, m, o);
          }
        : () => Promise.resolve(),
    { when: a } = n;
  if (a) {
    let [l, c] = a === "beforeChildren" ? [s, i] : [i, s];
    return l().then(() => c());
  } else return Promise.all([s(), i(o.delay)]);
}
function Yp(t, e, o = 0, r = 0, n = 0, s = 1, i) {
  let a = [];
  for (let l of t.variantChildren)
    (l.notify("AnimationStart", e),
      a.push(
        Qr(l, e, {
          ...i,
          delay: o + (typeof r == "function" ? 0 : r) + Zr(t.variantChildren, l, r, n, s),
        }).then(() => l.notify("AnimationComplete", e))
      ));
  return Promise.all(a);
}
function be(t, e, o = {}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
    let n = e.map((s) => Qr(t, s, o));
    r = Promise.all(n);
  } else if (typeof e == "string") r = Qr(t, e, o);
  else {
    let n = typeof e == "function" ? St(t, e, o.custom) : e;
    r = Promise.all(to(t, n, o));
  }
  return r.then(() => {
    t.notify("AnimationComplete", e);
  });
}
var Fc = { test: (t) => t === "auto", parse: (t) => t };
var tn = (t) => (e) => e.test(t);
var fi = [It, w, nt, Bt, Bs, ks, Fc],
  pi = (t) => fi.find(tn(t));
function jc(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Sr(t) : !0;
}
var _p = new Set(["brightness", "contrast", "saturate", "opacity"]);
function qp(t) {
  let [e, o] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  let [r] = o.match(Co) || [];
  if (!r) return t;
  let n = o.replace(r, ""),
    s = _p.has(e) ? 1 : 0;
  return (r !== o && (s *= 100), e + "(" + s + n + ")");
}
var Zp = /\b([a-z-]*)\(.*?\)/gu,
  en = {
    ...Z,
    getAnimatableNone: (t) => {
      let e = t.match(Zp);
      return e ? e.map(qp).join(" ") : t;
    },
  };
var on = {
  ...Z,
  getAnimatableNone: (t) => {
    let e = Z.parse(t);
    return Z.createTransformer(t)(
      e.map((r) => (typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r))
    );
  },
};
var sa = { ...It, transform: Math.round };
var aa = {
  rotate: Bt,
  rotateX: Bt,
  rotateY: Bt,
  rotateZ: Bt,
  scale: Po,
  scaleX: Po,
  scaleY: Po,
  scaleZ: Po,
  skew: Bt,
  skewX: Bt,
  skewY: Bt,
  distance: w,
  translateX: w,
  translateY: w,
  translateZ: w,
  x: w,
  y: w,
  z: w,
  perspective: w,
  transformPerspective: w,
  opacity: Ut,
  originX: ii,
  originY: ii,
  originZ: w,
};
var ie = {
  borderWidth: w,
  borderTopWidth: w,
  borderRightWidth: w,
  borderBottomWidth: w,
  borderLeftWidth: w,
  borderRadius: w,
  borderTopLeftRadius: w,
  borderTopRightRadius: w,
  borderBottomRightRadius: w,
  borderBottomLeftRadius: w,
  width: w,
  maxWidth: w,
  height: w,
  maxHeight: w,
  top: w,
  right: w,
  bottom: w,
  left: w,
  inset: w,
  insetBlock: w,
  insetBlockStart: w,
  insetBlockEnd: w,
  insetInline: w,
  insetInlineStart: w,
  insetInlineEnd: w,
  padding: w,
  paddingTop: w,
  paddingRight: w,
  paddingBottom: w,
  paddingLeft: w,
  paddingBlock: w,
  paddingBlockStart: w,
  paddingBlockEnd: w,
  paddingInline: w,
  paddingInlineStart: w,
  paddingInlineEnd: w,
  margin: w,
  marginTop: w,
  marginRight: w,
  marginBottom: w,
  marginLeft: w,
  marginBlock: w,
  marginBlockStart: w,
  marginBlockEnd: w,
  marginInline: w,
  marginInlineStart: w,
  marginInlineEnd: w,
  fontSize: w,
  backgroundPositionX: w,
  backgroundPositionY: w,
  ...aa,
  zIndex: sa,
  fillOpacity: Ut,
  strokeOpacity: Ut,
  numOctaves: sa,
};
var Nc = {
    ...ie,
    color: U,
    backgroundColor: U,
    outlineColor: U,
    fill: U,
    stroke: U,
    borderColor: U,
    borderTopColor: U,
    borderRightColor: U,
    borderBottomColor: U,
    borderLeftColor: U,
    filter: en,
    WebkitFilter: en,
    mask: on,
    WebkitMask: on,
  },
  rn = (t) => Nc[t];
var Jp = new Set([en, on]);
function nn(t, e) {
  let o = rn(t);
  return (Jp.has(o) || (o = Z), o.getAnimatableNone ? o.getAnimatableNone(e) : void 0);
}
var Qp = new Set(["auto", "none", "0"]);
function Wc(t, e, o) {
  let r = 0,
    n;
  for (; r < t.length && !n; ) {
    let s = t[r];
    (typeof s == "string" && !Qp.has(s) && Qt(s).values.length && (n = t[r]), r++);
  }
  if (n && o) for (let s of e) t[s] = nn(o, n);
}
var sn = class extends re {
  constructor(e, o, r, n, s) {
    super(e, o, r, n, s, !0);
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, element: o, name: r } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let u = 0; u < e.length; u++) {
      let m = e[u];
      if (typeof m == "string" && ((m = m.trim()), Ne(m))) {
        let f = ui(m, o.current);
        (f !== void 0 && (e[u] = f), u === e.length - 1 && (this.finalKeyframe = m));
      }
    }
    if ((this.resolveNoneKeyframes(), !Jr.has(r) || e.length !== 2)) return;
    let [n, s] = e,
      i = pi(n),
      a = pi(s),
      l = oi(n),
      c = oi(s);
    if (l !== c && oe[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (i !== a)
      if ($s(i) && $s(a))
        for (let u = 0; u < e.length; u++) {
          let m = e[u];
          typeof m == "string" && (e[u] = parseFloat(m));
        }
      else oe[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: e, name: o } = this,
      r = [];
    for (let n = 0; n < e.length; n++) (e[n] === null || jc(e[n])) && r.push(n);
    r.length && Wc(e, r, o);
  }
  measureInitialState() {
    let { element: e, unresolvedKeyframes: o, name: r } = this;
    if (!e || !e.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = oe[r](e.measureViewportBox(), window.getComputedStyle(e.current))),
      (o[0] = this.measuredOrigin));
    let n = o[o.length - 1];
    n !== void 0 && e.getValue(r, n).jump(n, !1);
  }
  measureEndState() {
    let { element: e, name: o, unresolvedKeyframes: r } = this;
    if (!e || !e.current) return;
    let n = e.getValue(o);
    n && n.jump(this.measuredOrigin, !1);
    let s = r.length - 1,
      i = r[s];
    ((r[s] = oe[o](e.measureViewportBox(), window.getComputedStyle(e.current))),
      i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([a, l]) => {
          e.getValue(a).set(l);
        }),
      this.resolveNoneKeyframes());
  }
};
var Gc = new Set([
  "borderWidth",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius",
  "width",
  "maxWidth",
  "height",
  "maxHeight",
  "top",
  "right",
  "bottom",
  "left",
  "inset",
  "insetBlock",
  "insetBlockStart",
  "insetBlockEnd",
  "insetInline",
  "insetInlineStart",
  "insetInlineEnd",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingBlock",
  "paddingBlockStart",
  "paddingBlockEnd",
  "paddingInline",
  "paddingInlineStart",
  "paddingInlineEnd",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginBlock",
  "marginBlockStart",
  "marginBlockEnd",
  "marginInline",
  "marginInlineStart",
  "marginInlineEnd",
  "fontSize",
  "backgroundPositionX",
  "backgroundPositionY",
]);
function la(t, e) {
  for (let o = 0; o < t.length; o++) typeof t[o] == "number" && Gc.has(e) && (t[o] = t[o] + "px");
}
function Uc(t) {
  return !!(
    (typeof t == "function" && we()) ||
    !t ||
    (typeof t == "string" && (t in Lo || we())) ||
    Oe(t) ||
    (Array.isArray(t) && t.every(Uc))
  );
}
var td = Ie(() => {
  try {
    document.createElement("div").animate({ opacity: [1] });
  } catch {
    return !1;
  }
  return !0;
});
function lt(t, e, o) {
  if (t == null) return [];
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let r = document;
    e && (r = e.current);
    let n = o?.[t] ?? r.querySelectorAll(t);
    return n ? Array.from(n) : [];
  }
  return Array.from(t).filter((r) => r != null);
}
function Go(t) {
  return (e, o) => {
    let r = lt(e),
      n = [];
    for (let s of r) {
      let i = t(s, o);
      n.push(i);
    }
    return () => {
      for (let s of n) s();
    };
  };
}
var eo = (t, e) => (e && typeof t == "number" ? e.transform(t) : t);
var di = class {
  constructor() {
    ((this.latest = {}), (this.values = new Map()));
  }
  set(e, o, r, n, s = !0) {
    let i = this.values.get(e);
    i && i.onRemove();
    let a = () => {
      let u = o.get();
      (s ? (this.latest[e] = eo(u, ie[e])) : (this.latest[e] = u), r && S.render(r));
    };
    a();
    let l = o.on("change", a);
    n && o.addDependent(n);
    let c = () => {
      (l(), r && B(r), this.values.delete(e), n && o.removeDependent(n));
    };
    return (this.values.set(e, { value: o, onRemove: c }), c);
  }
  get(e) {
    return this.values.get(e)?.value;
  }
};
function Ae(t) {
  let e = new WeakMap();
  return (o, r) => {
    let n = e.get(o) ?? new di();
    e.set(o, n);
    let s = [];
    for (let i in r) {
      let a = r[i],
        l = t(o, n, i, a);
      s.push(l);
    }
    return () => {
      for (let i of s) i();
    };
  };
}
function ed(t, e) {
  if (!(e in t)) return !1;
  let o =
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), e) ||
    Object.getOwnPropertyDescriptor(t, e);
  return o && typeof o.set == "function";
}
var an = (t, e, o, r) => {
    let n = ed(t, o),
      s = n ? o : o.startsWith("data") || o.startsWith("aria") ? ne(o) : o,
      i = n
        ? () => {
            t[s] = e.latest[o];
          }
        : () => {
            let a = e.latest[o];
            a == null ? t.removeAttribute(s) : t.setAttribute(s, String(a));
          };
    return e.set(o, r, i);
  },
  od = Go(Ae(an));
var rd = Ae((t, e, o, r) =>
  e.set(
    o,
    r,
    () => {
      t[o] = e.latest[o];
    },
    void 0,
    !1
  )
);
function Ot(t) {
  return Tr(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
var nd = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" };
function zc(t) {
  let e = "",
    o = !0;
  for (let r = 0; r < dt.length; r++) {
    let n = dt[r],
      s = t.latest[n];
    if (s === void 0) continue;
    let i = !0;
    if (typeof s == "number") i = s === (n.startsWith("scale") ? 1 : 0);
    else {
      let a = parseFloat(s);
      i = n.startsWith("scale") ? a === 1 : a === 0;
    }
    if (!i) {
      o = !1;
      let a = nd[n] || n;
      e += `${a}(${s}) `;
    }
  }
  return o ? "none" : e.trim();
}
var id = new Set(["originX", "originY", "originZ"]),
  ln = (t, e, o, r) => {
    let n, s;
    return (
      Q.has(o)
        ? (e.get("transform") ||
            (!Ot(t) && !e.get("transformBox") && ln(t, e, "transformBox", new Mt("fill-box")),
            e.set("transform", new Mt("none"), () => {
              t.style.transform = zc(e);
            })),
          (s = e.get("transform")))
        : id.has(o)
          ? (e.get("transformOrigin") ||
              e.set("transformOrigin", new Mt(""), () => {
                let i = e.latest.originX ?? "50%",
                  a = e.latest.originY ?? "50%",
                  l = e.latest.originZ ?? 0;
                t.style.transformOrigin = `${i} ${a} ${l}`;
              }),
            (s = e.get("transformOrigin")))
          : Ro(o)
            ? (n = () => {
                t.style.setProperty(o, e.latest[o]);
              })
            : (n = () => {
                t.style[o] = e.latest[o];
              }),
      e.set(o, r, n, s)
    );
  },
  sd = Go(Ae(ln));
function ad(t, e, o, r) {
  return (
    S.render(() => t.setAttribute("pathLength", "1")),
    o === "pathOffset"
      ? e.set(o, r, () => {
          let n = e.latest[o];
          t.setAttribute("stroke-dashoffset", `${-n}`);
        })
      : (e.get("stroke-dasharray") ||
          e.set("stroke-dasharray", new Mt("1 1"), () => {
            let { pathLength: n = 1, pathSpacing: s } = e.latest;
            t.setAttribute("stroke-dasharray", `${n} ${s ?? 1 - Number(n)}`);
          }),
        e.set(o, r, void 0, e.get("stroke-dasharray")))
  );
}
var ld = (t, e, o, r) =>
    o.startsWith("path")
      ? ad(t, e, o, r)
      : o.startsWith("attr")
        ? an(t, e, ud(o), r)
        : (o in t.style ? ln : an)(t, e, o, r),
  cd = Go(Ae(ld));
function ud(t) {
  return t.replace(/^attr([A-Z])/, (e, o) => o.toLowerCase());
}
var { schedule: wt, cancel: hi } = Lr(queueMicrotask, !1);
var Vt = { x: !1, y: !1 };
function cn() {
  return Vt.x || Vt.y;
}
function ca(t) {
  return t === "x" || t === "y"
    ? Vt[t]
      ? null
      : ((Vt[t] = !0),
        () => {
          Vt[t] = !1;
        })
    : Vt.x || Vt.y
      ? null
      : ((Vt.x = Vt.y = !0),
        () => {
          Vt.x = Vt.y = !1;
        });
}
function gi(t, e) {
  let o = lt(t),
    r = new AbortController(),
    n = { passive: !0, ...e, signal: r.signal };
  return [o, n, () => r.abort()];
}
function md(t) {
  return !(t.pointerType === "touch" || cn());
}
function ua(t, e, o = {}) {
  let [r, n, s] = gi(t, o);
  return (
    r.forEach((i) => {
      let a = !1,
        l = !1,
        c,
        u = () => {
          i.removeEventListener("pointerleave", d);
        },
        m = (g) => {
          (c && (c(g), (c = void 0)), u());
        },
        f = (g) => {
          ((a = !1),
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && ((l = !1), m(g)));
        },
        p = () => {
          ((a = !0),
            window.addEventListener("pointerup", f, n),
            window.addEventListener("pointercancel", f, n));
        },
        d = (g) => {
          if (g.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            m(g);
          }
        },
        h = (g) => {
          if (!md(g)) return;
          l = !1;
          let y = e(i, g);
          typeof y == "function" && ((c = y), i.addEventListener("pointerleave", d, n));
        };
      (i.addEventListener("pointerenter", h, n), i.addEventListener("pointerdown", p, n));
    }),
    s
  );
}
var yi = (t, e) => (e ? (t === e ? !0 : yi(t, e.parentElement)) : !1);
var oo = (t) =>
  t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
var fd = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function ma(t) {
  return fd.has(t.tagName) || t.isContentEditable === !0;
}
var pd = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function fa(t) {
  return pd.has(t.tagName) || t.isContentEditable === !0;
}
var Uo = new WeakSet();
function Kc(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function pa(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
var Hc = (t, e) => {
  let o = t.currentTarget;
  if (!o) return;
  let r = Kc(() => {
    if (Uo.has(o)) return;
    pa(o, "down");
    let n = Kc(() => {
        pa(o, "up");
      }),
      s = () => pa(o, "cancel");
    (o.addEventListener("keyup", n, e), o.addEventListener("blur", s, e));
  });
  (o.addEventListener("keydown", r, e),
    o.addEventListener("blur", () => o.removeEventListener("keydown", r), e));
};
function $c(t) {
  return oo(t) && !cn();
}
var Xc = new WeakSet();
function da(t, e, o = {}) {
  let [r, n, s] = gi(t, o),
    i = (a) => {
      let l = a.currentTarget;
      if (!$c(a) || Xc.has(a)) return;
      (Uo.add(l), o.stopPropagation && Xc.add(a));
      let c = e(l, a),
        u = (p, d) => {
          (window.removeEventListener("pointerup", m),
            window.removeEventListener("pointercancel", f),
            Uo.has(l) && Uo.delete(l),
            $c(p) && typeof c == "function" && c(p, { success: d }));
        },
        m = (p) => {
          u(p, l === window || l === document || o.useGlobalTarget || yi(l, p.target));
        },
        f = (p) => {
          u(p, !1);
        };
      (window.addEventListener("pointerup", m, n), window.addEventListener("pointercancel", f, n));
    };
  return (
    r.forEach((a) => {
      ((o.useGlobalTarget ? window : a).addEventListener("pointerdown", i, n),
        Ot(a) &&
          (a.addEventListener("focus", (c) => Hc(c, n)),
          !ma(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    s
  );
}
function xi(t, e) {
  let o = window.getComputedStyle(t);
  return Ro(e) ? o.getPropertyValue(e) : o[e];
}
function se(t) {
  return Tr(t) && "ownerSVGElement" in t;
}
var vi = new WeakMap(),
  Ti,
  Yc = (t, e, o) => (r, n) =>
    n && n[0] ? n[0][t + "Size"] : se(r) && "getBBox" in r ? r.getBBox()[e] : r[o],
  dd = Yc("inline", "width", "offsetWidth"),
  hd = Yc("block", "height", "offsetHeight");
function gd({ target: t, borderBoxSize: e }) {
  vi.get(t)?.forEach((o) => {
    o(t, {
      get width() {
        return dd(t, e);
      },
      get height() {
        return hd(t, e);
      },
    });
  });
}
function yd(t) {
  t.forEach(gd);
}
function xd() {
  typeof ResizeObserver > "u" || (Ti = new ResizeObserver(yd));
}
function _c(t, e) {
  Ti || xd();
  let o = lt(t);
  return (
    o.forEach((r) => {
      let n = vi.get(r);
      (n || ((n = new Set()), vi.set(r, n)), n.add(e), Ti?.observe(r));
    }),
    () => {
      o.forEach((r) => {
        let n = vi.get(r);
        (n?.delete(e), n?.size || Ti?.unobserve(r));
      });
    }
  );
}
var Si = new Set(),
  zo;
function vd() {
  ((zo = () => {
    let t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Si.forEach((e) => e(t));
  }),
    window.addEventListener("resize", zo));
}
function qc(t) {
  return (
    Si.add(t),
    zo || vd(),
    () => {
      (Si.delete(t),
        !Si.size &&
          typeof zo == "function" &&
          (window.removeEventListener("resize", zo), (zo = void 0)));
    }
  );
}
function Ko(t, e) {
  return typeof t == "function" ? qc(t) : _c(t, e);
}
function un(t, e) {
  let o,
    r = () => {
      let { currentTime: n } = e,
        i = (n === null ? 0 : n.value) / 100;
      (o !== i && t(i), (o = i));
    };
  return (S.preUpdate(r, !0), () => B(r));
}
function ga() {
  let { value: t } = Y;
  if (t === null) {
    B(ga);
    return;
  }
  (t.frameloop.rate.push(G.delta),
    t.animations.mainThread.push(at.mainThread),
    t.animations.waapi.push(at.waapi),
    t.animations.layout.push(at.layout));
}
function Td(t) {
  return t.reduce((e, o) => e + o, 0) / t.length;
}
function ct(t, e = Td) {
  return t.length === 0
    ? { min: 0, max: 0, avg: 0 }
    : { min: Math.min(...t), max: Math.max(...t), avg: e(t) };
}
var ha = (t) => Math.round(1e3 / t);
function Zc() {
  ((Y.value = null), (Y.addProjectionMetrics = null));
}
function Sd() {
  let { value: t } = Y;
  if (!t) throw new Error("Stats are not being measured");
  (Zc(), B(ga));
  let e = {
      frameloop: {
        setup: ct(t.frameloop.setup),
        rate: ct(t.frameloop.rate),
        read: ct(t.frameloop.read),
        resolveKeyframes: ct(t.frameloop.resolveKeyframes),
        preUpdate: ct(t.frameloop.preUpdate),
        update: ct(t.frameloop.update),
        preRender: ct(t.frameloop.preRender),
        render: ct(t.frameloop.render),
        postRender: ct(t.frameloop.postRender),
      },
      animations: {
        mainThread: ct(t.animations.mainThread),
        waapi: ct(t.animations.waapi),
        layout: ct(t.animations.layout),
      },
      layoutProjection: {
        nodes: ct(t.layoutProjection.nodes),
        calculatedTargetDeltas: ct(t.layoutProjection.calculatedTargetDeltas),
        calculatedProjections: ct(t.layoutProjection.calculatedProjections),
      },
    },
    { rate: o } = e.frameloop;
  return (
    (o.min = ha(o.min)),
    (o.max = ha(o.max)),
    (o.avg = ha(o.avg)),
    ([o.min, o.max] = [o.max, o.min]),
    e
  );
}
function wd() {
  if (Y.value) throw (Zc(), new Error("Stats are already being measured"));
  let t = Y;
  return (
    (t.value = {
      frameloop: {
        setup: [],
        rate: [],
        read: [],
        resolveKeyframes: [],
        preUpdate: [],
        update: [],
        preRender: [],
        render: [],
        postRender: [],
      },
      animations: { mainThread: [], waapi: [], layout: [] },
      layoutProjection: { nodes: [], calculatedTargetDeltas: [], calculatedProjections: [] },
    }),
    (t.addProjectionMetrics = (e) => {
      let { layoutProjection: o } = t.value;
      (o.nodes.push(e.nodes),
        o.calculatedTargetDeltas.push(e.calculatedTargetDeltas),
        o.calculatedProjections.push(e.calculatedProjections));
    }),
    S.postRender(ga, !0),
    Sd
  );
}
function mn(t) {
  return se(t) && t.tagName === "svg";
}
function Jc(t, e) {
  if (t === "first") return 0;
  {
    let o = e - 1;
    return t === "last" ? o : o / 2;
  }
}
function Vd(t = 0.1, { startDelay: e = 0, from: o = 0, ease: r } = {}) {
  return (n, s) => {
    let i = typeof o == "number" ? o : Jc(o, s),
      a = Math.abs(i - n),
      l = t * a;
    if (r) {
      let c = s * t;
      l = Ao(r)(l / c) * c;
    }
    return e + l;
  };
}
function fn(...t) {
  let e = !Array.isArray(t[0]),
    o = e ? 0 : -1,
    r = t[0 + o],
    n = t[1 + o],
    s = t[2 + o],
    i = t[3 + o],
    a = Ue(n, s, i);
  return e ? a(r) : a;
}
function xa(t, e) {
  let o = M(t) ? t.get() : t,
    r = z(o);
  return (Ho(r, t, e), r);
}
function Ho(t, e, o = {}) {
  let r = t.get(),
    n = null,
    s = r,
    i,
    a = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0,
    l = () => {
      (n && (n.stop(), (n = null)), (t.animation = void 0));
    },
    c = () => {
      let m = Qc(t.get()),
        f = Qc(s);
      if (m === f) {
        l();
        return;
      }
      let p = n ? n.getGeneratorVelocity() : t.getVelocity();
      (l(),
        (n = new xt({
          keyframes: [m, f],
          velocity: p,
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...o,
          onUpdate: i,
        })));
    },
    u = () => {
      (c(),
        (t.animation = n ?? void 0),
        t.events.animationStart?.notify(),
        n?.then(() => {
          ((t.animation = void 0), t.events.animationComplete?.notify());
        }));
    };
  if (
    (t.attach((m, f) => {
      ((s = m), (i = (p) => f(ya(p, a))), S.postRender(u));
    }, l),
    M(e))
  ) {
    let m = o.skipInitialAnimation === !0,
      f = e.on("change", (d) => {
        m ? ((m = !1), t.jump(ya(d, a), !1)) : t.set(ya(d, a));
      }),
      p = t.on("destroy", f);
    return () => {
      (f(), p());
    };
  }
  return l;
}
function ya(t, e) {
  return e ? t + e : t;
}
function Qc(t) {
  return typeof t == "number" ? t : parseFloat(t);
}
function tu(t, e, o) {
  let r = () => e.set(o()),
    n = () => S.preRender(r, !1, !0),
    s = t.map((i) => i.on("change", n));
  e.on("destroy", () => {
    (s.forEach((i) => i()), B(r));
  });
}
function va(t) {
  let e = [];
  Kt.current = e;
  let o = t();
  Kt.current = void 0;
  let r = z(o);
  return (tu(e, r, t), r);
}
function bd(t, e, o, r) {
  let n = fn(e, o, r);
  return va(() => n(t.get()));
}
function Ad(t, e) {
  return xa(t, { type: "spring", ...e });
}
function Pd(t, e, o) {
  return Ho(t, e, { type: "spring", ...o });
}
var Cd = [...fi, U, Z],
  Ta = (t) => Cd.find(tn(t));
function eu(t) {
  return t === "layout"
    ? "group"
    : t === "enter" || t === "new"
      ? "new"
      : t === "exit" || t === "old"
        ? "old"
        : "group";
}
var wi = {},
  ae = null,
  pn = {
    set: (t, e) => {
      wi[t] = e;
    },
    commit: () => {
      ae || ((ae = document.createElement("style")), (ae.id = "motion-view"));
      let t = "";
      for (let e in wi) {
        let o = wi[e];
        t += `${e} {
`;
        for (let [r, n] of Object.entries(o))
          t += `  ${r}: ${n};
`;
        t += `}
`;
      }
      ((ae.textContent = t), document.head.appendChild(ae), (wi = {}));
    },
    remove: () => {
      ae && ae.parentElement && ae.parentElement.removeChild(ae);
    },
  };
function Sa(t) {
  let e = t.match(/::view-transition-(old|new|group|image-pair)\((.*?)\)/);
  return e ? { layer: e[2], type: e[1] } : null;
}
function Ed(t) {
  let { effect: e } = t;
  return e
    ? e.target === document.documentElement && e.pseudoElement?.startsWith("::view-transition")
    : !1;
}
function wa() {
  return document.getAnimations().filter(Ed);
}
function ou(t, e) {
  return e.has(t) && Object.keys(e.get(t)).length > 0;
}
var Md = ["layout", "enter", "exit", "new", "old"];
function nu(t) {
  let { update: e, targets: o, options: r } = t;
  if (!document.startViewTransition)
    return new Promise(async (s) => {
      (await e(), s(new zt([])));
    });
  (ou("root", o) || pn.set(":root", { "view-transition-name": "none" }),
    pn.set("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
      "animation-timing-function": "linear !important",
    }),
    pn.commit());
  let n = document.startViewTransition(async () => {
    await e();
  });
  return (
    n.finished.finally(() => {
      pn.remove();
    }),
    new Promise((s) => {
      n.ready.then(() => {
        let i = wa(),
          a = [];
        o.forEach((l, c) => {
          for (let u of Md) {
            if (!l[u]) continue;
            let { keyframes: m, options: f } = l[u];
            for (let [p, d] of Object.entries(m)) {
              if (!d) continue;
              let h = { ...Tt(r, p), ...Tt(f, p) },
                g = eu(u);
              (p === "opacity" && !Array.isArray(d) && (d = [g === "new" ? 0 : 1, d]),
                typeof h.delay == "function" && (h.delay = h.delay(0, 1)),
                h.duration && (h.duration = k(h.duration)),
                h.delay && (h.delay = k(h.delay)));
              let y = new vt({
                ...h,
                element: document.documentElement,
                name: p,
                pseudoElement: `::view-transition-${g}(${c})`,
                keyframes: d,
              });
              a.push(y);
            }
          }
        });
        for (let l of i) {
          if (l.playState === "finished") continue;
          let { effect: c } = l;
          if (!c || !(c instanceof KeyframeEffect)) continue;
          let { pseudoElement: u } = c;
          if (!u) continue;
          let m = Sa(u);
          if (!m) continue;
          let f = o.get(m.layer);
          if (f)
            ru(f, "enter") && ru(f, "exit") && c.getKeyframes().some((p) => p.mixBlendMode)
              ? a.push(new Oo(l))
              : l.cancel();
          else {
            let p = m.type === "group" ? "layout" : "",
              d = { ...Tt(r, p) };
            (d.duration && (d.duration = k(d.duration)), (d = Yr(d)));
            let h = Io(d.ease, d.duration);
            (c.updateTiming({ delay: k(d.delay ?? 0), duration: d.duration, easing: h }),
              a.push(new Oo(l)));
          }
        }
        s(new zt(a));
      });
    })
  );
}
function ru(t, e) {
  return t?.[e]?.keyframes.opacity;
}
var le = [],
  Va = null;
function iu() {
  Va = null;
  let [t] = le;
  t && Dd(t);
}
function Dd(t) {
  (ft(le, t),
    (Va = t),
    nu(t).then((e) => {
      (t.notifyReady(e), e.finished.finally(iu));
    }));
}
function Rd() {
  for (let t = le.length - 1; t >= 0; t--) {
    let e = le[t],
      { interrupt: o } = e.options;
    if (o === "immediate") {
      let r = le.slice(0, t + 1).map((s) => s.update),
        n = le.slice(t + 1);
      ((e.update = () => {
        r.forEach((s) => s());
      }),
        (le = [e, ...n]));
      break;
    }
  }
  (!Va || le[0]?.options.interrupt === "immediate") && iu();
}
function su(t) {
  (le.push(t), wt.render(Rd));
}
var Vi = class {
  constructor(e, o = {}) {
    ((this.currentSubject = "root"),
      (this.targets = new Map()),
      (this.notifyReady = F),
      (this.readyPromise = new Promise((r) => {
        this.notifyReady = r;
      })),
      (this.update = e),
      (this.options = { interrupt: "wait", ...o }),
      su(this));
  }
  get(e) {
    return ((this.currentSubject = e), this);
  }
  layout(e, o) {
    return (this.updateTarget("layout", e, o), this);
  }
  new(e, o) {
    return (this.updateTarget("new", e, o), this);
  }
  old(e, o) {
    return (this.updateTarget("old", e, o), this);
  }
  enter(e, o) {
    return (this.updateTarget("enter", e, o), this);
  }
  exit(e, o) {
    return (this.updateTarget("exit", e, o), this);
  }
  crossfade(e) {
    return (
      this.updateTarget("enter", { opacity: 1 }, e),
      this.updateTarget("exit", { opacity: 0 }, e),
      this
    );
  }
  updateTarget(e, o, r = {}) {
    let { currentSubject: n, targets: s } = this;
    s.has(n) || s.set(n, {});
    let i = s.get(n);
    i[e] = { keyframes: o, options: r };
  }
  then(e, o) {
    return this.readyPromise.then(e, o);
  }
};
function Ld(t, e = {}) {
  return new Vi(t, e);
}
var ba = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Pe = () => ({ x: ba(), y: ba() }),
  Aa = () => ({ min: 0, max: 0 }),
  O = () => ({ x: Aa(), y: Aa() });
var ht = new WeakMap();
function ce(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Ht(t) {
  return typeof t == "string" || Array.isArray(t);
}
var dn = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  $o = ["initial", ...dn];
function Ce(t) {
  return ce(t.animate) || $o.some((e) => Ht(t[e]));
}
function hn(t) {
  return !!(Ce(t) || t.variants);
}
function Pa(t, e, o) {
  for (let r in e) {
    let n = e[r],
      s = o[r];
    if (M(n)) t.addValue(r, n);
    else if (M(s)) t.addValue(r, z(n, { owner: t }));
    else if (s !== n)
      if (t.hasValue(r)) {
        let i = t.getValue(r);
        i.liveStyle === !0 ? i.jump(n) : i.hasAnimated || i.set(n);
      } else {
        let i = t.getStaticValue(r);
        t.addValue(r, z(i !== void 0 ? i : n, { owner: t }));
      }
  }
  for (let r in o) e[r] === void 0 && t.removeValue(r);
  return e;
}
var Ee = { current: null },
  ro = { current: !1 };
var Id = typeof window < "u";
function gn() {
  if (((ro.current = !0), !!Id))
    if (window.matchMedia) {
      let t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (Ee.current = t.matches);
      (t.addEventListener("change", e), e());
    } else Ee.current = !1;
}
var au = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  bi = {};
function yn(t) {
  bi = t;
}
function Ca() {
  return bi;
}
var $t = class {
  scrapeMotionValuesFromProps(e, o, r) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: o,
      presenceContext: r,
      reducedMotionConfig: n,
      skipAnimations: s,
      blockInitialAnimation: i,
      visualState: a,
    },
    l = {}
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = re),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        let p = K.now();
        this.renderScheduledAt < p && ((this.renderScheduledAt = p), S.render(this.render, !1, !0));
      }));
    let { latestValues: c, renderState: u } = a;
    ((this.latestValues = c),
      (this.baseTarget = { ...c }),
      (this.initialValues = o.initial ? { ...c } : {}),
      (this.renderState = u),
      (this.parent = e),
      (this.props = o),
      (this.presenceContext = r),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = n),
      (this.skipAnimationsConfig = s),
      (this.options = l),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Ce(o)),
      (this.isVariantNode = hn(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current)));
    let { willChange: m, ...f } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (let p in f) {
      let d = f[p];
      c[p] !== void 0 && M(d) && d.set(c[p]);
    }
  }
  mount(e) {
    if (this.hasBeenMounted)
      for (let o in this.initialValues)
        (this.values.get(o)?.jump(this.initialValues[o]),
          (this.latestValues[o] = this.initialValues[o]));
    ((this.current = e),
      ht.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, r) => this.bindToMotionValue(r, o)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (ro.current || gn(), (this.shouldReduceMotion = Ee.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      B(this.notifyUpdate),
      B(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (let e in this.events) this.events[e].clear();
    for (let e in this.features) {
      let o = this.features[e];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  addChild(e) {
    (this.children.add(e),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(e));
  }
  removeChild(e) {
    (this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e));
  }
  bindToMotionValue(e, o) {
    if (
      (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
      o.accelerate && Ye.has(e) && this.current instanceof HTMLElement)
    ) {
      let { factory: i, keyframes: a, times: l, ease: c, duration: u } = o.accelerate,
        m = new vt({
          element: this.current,
          name: e,
          keyframes: a,
          times: l,
          ease: c,
          duration: k(u),
        }),
        f = i(m);
      this.valueSubscriptions.set(e, () => {
        (f(), m.cancel());
      });
      return;
    }
    let r = Q.has(e);
    r && this.onBindTransform && this.onBindTransform();
    let n = o.on("change", (i) => {
        ((this.latestValues[e] = i),
          this.props.onUpdate && S.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0),
          this.scheduleRender());
      }),
      s;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, e, o)),
      this.valueSubscriptions.set(e, () => {
        (n(), s && s());
      }));
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in bi) {
      let o = bi[e];
      if (!o) continue;
      let { isEnabled: r, Feature: n } = o;
      if (
        (!this.features[e] && n && r(this.props) && (this.features[e] = new n(this)),
        this.features[e])
      ) {
        let s = this.features[e];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : O();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, o) {
    this.latestValues[e] = o;
  }
  update(e, o) {
    ((e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o));
    for (let r = 0; r < au.length; r++) {
      let n = au[r];
      this.propEventSubscriptions[n] &&
        (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
      let s = "on" + n,
        i = e[s];
      i && (this.propEventSubscriptions[n] = this.on(n, i));
    }
    ((this.prevMotionValues = Pa(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(e) {
    let o = this.getClosestVariantNode();
    if (o)
      return (o.variantChildren && o.variantChildren.add(e), () => o.variantChildren.delete(e));
  }
  addValue(e, o) {
    let r = this.values.get(e);
    o !== r &&
      (r && this.removeValue(e),
      this.bindToMotionValue(e, o),
      this.values.set(e, o),
      (this.latestValues[e] = o.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    let o = this.valueSubscriptions.get(e);
    (o && (o(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState));
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, o) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let r = this.values.get(e);
    return (
      r === void 0 &&
        o !== void 0 &&
        ((r = z(o === null ? void 0 : o, { owner: this })), this.addValue(e, r)),
      r
    );
  }
  readValue(e, o) {
    let r =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (this.getBaseTargetFromProps(this.props, e) ??
          this.readValueFromInstance(this.current, e, this.options));
    return (
      r != null &&
        (typeof r == "string" && (vr(r) || Sr(r))
          ? (r = parseFloat(r))
          : !Ta(r) && Z.test(o) && (r = nn(e, o)),
        this.setBaseTarget(e, M(r) ? r.get() : r)),
      M(r) ? r.get() : r
    );
  }
  setBaseTarget(e, o) {
    this.baseTarget[e] = o;
  }
  getBaseTarget(e) {
    let { initial: o } = this.props,
      r;
    if (typeof o == "string" || typeof o == "object") {
      let s = Je(this.props, o, this.presenceContext?.custom);
      s && (r = s[e]);
    }
    if (o && r !== void 0) return r;
    let n = this.getBaseTargetFromProps(this.props, e);
    return n !== void 0 && !M(n)
      ? n
      : this.initialValues[e] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, o) {
    return (this.events[e] || (this.events[e] = new qt()), this.events[e].add(o));
  }
  notify(e, ...o) {
    this.events[e] && this.events[e].notify(...o);
  }
  scheduleRenderMicrotask() {
    wt.render(this.render);
  }
};
var no = class extends $t {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = sn));
  }
  sortInstanceNodePosition(e, o) {
    return e.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, o) {
    let r = e.style;
    return r ? r[o] : void 0;
  }
  removeValueFromRenderState(e, { vars: o, style: r }) {
    (delete o[e], delete r[e]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    let { children: e } = this.props;
    M(e) &&
      (this.childSubscription = e.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
};
var tt = class {
  constructor(e) {
    ((this.isMounted = !1), (this.node = e));
  }
  update() {}
};
function xn({ top: t, left: e, right: o, bottom: r }) {
  return { x: { min: e, max: o }, y: { min: t, max: r } };
}
function Ea({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Ma(t, e) {
  if (!e) return t;
  let o = e({ x: t.left, y: t.top }),
    r = e({ x: t.right, y: t.bottom });
  return { top: o.y, left: o.x, bottom: r.y, right: r.x };
}
function Da(t) {
  return t === void 0 || t === 1;
}
function vn({ scale: t, scaleX: e, scaleY: o }) {
  return !Da(t) || !Da(e) || !Da(o);
}
function Xt(t) {
  return vn(t) || Ai(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Ai(t) {
  return lu(t.x) || lu(t.y);
}
function lu(t) {
  return t && t !== "0%";
}
function Xo(t, e, o) {
  let r = t - o,
    n = e * r;
  return o + n;
}
function Ra(t, e, o, r, n) {
  return (n !== void 0 && (t = Xo(t, n, r)), Xo(t, o, r) + e);
}
function Pi(t, e = 0, o = 1, r, n) {
  ((t.min = Ra(t.min, e, o, r, n)), (t.max = Ra(t.max, e, o, r, n)));
}
function Ci(t, { x: e, y: o }) {
  (Pi(t.x, e.translate, e.scale, e.originPoint), Pi(t.y, o.translate, o.scale, o.originPoint));
}
var cu = 0.999999999999,
  uu = 1.0000000000001;
function Ia(t, e, o, r = !1) {
  let n = o.length;
  if (!n) return;
  e.x = e.y = 1;
  let s, i;
  for (let a = 0; a < n; a++) {
    ((s = o[a]), (i = s.projectionDelta));
    let { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        (bt(t.x, -s.scroll.offset.x), bt(t.y, -s.scroll.offset.y)),
      i && ((e.x *= i.x.scale), (e.y *= i.y.scale), Ci(t, i)),
      r && Xt(s.latestValues) && Yo(t, s.latestValues, s.layout?.layoutBox));
  }
  (e.x < uu && e.x > cu && (e.x = 1), e.y < uu && e.y > cu && (e.y = 1));
}
function bt(t, e) {
  ((t.min += e), (t.max += e));
}
function La(t, e, o, r, n = 0.5) {
  let s = R(t.min, t.max, n);
  Pi(t, e, o, s, r);
}
function mu(t, e) {
  return typeof t == "string" ? (parseFloat(t) / 100) * (e.max - e.min) : t;
}
function Yo(t, e, o) {
  let r = o ?? t;
  (La(t.x, mu(e.x, r.x), e.scaleX, e.scale, e.originX),
    La(t.y, mu(e.y, r.y), e.scaleY, e.scale, e.originY));
}
function Ei(t, e) {
  return xn(Ma(t.getBoundingClientRect(), e));
}
function ka(t, e, o) {
  let r = Ei(t, o),
    { scroll: n } = e;
  return (n && (bt(r.x, n.offset.x), bt(r.y, n.offset.y)), r);
}
var kd = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  Bd = dt.length;
function Mi(t, e, o) {
  let r = "",
    n = !0;
  for (let s = 0; s < Bd; s++) {
    let i = dt[s],
      a = t[i];
    if (a === void 0) continue;
    let l = !0;
    if (typeof a == "number") l = a === (i.startsWith("scale") ? 1 : 0);
    else {
      let c = parseFloat(a);
      l = i.startsWith("scale") ? c === 1 : c === 0;
    }
    if (!l || o) {
      let c = eo(a, ie[i]);
      if (!l) {
        n = !1;
        let u = kd[i] || i;
        r += `${u}(${c}) `;
      }
      o && (e[i] = c);
    }
  }
  return ((r = r.trim()), o ? (r = o(e, n ? "" : r)) : n && (r = "none"), r);
}
function io(t, e, o) {
  let { style: r, vars: n, transformOrigin: s } = t,
    i = !1,
    a = !1;
  for (let l in e) {
    let c = e[l];
    if (Q.has(l)) {
      i = !0;
      continue;
    } else if (je(l)) {
      n[l] = c;
      continue;
    } else {
      let u = eo(c, ie[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = u)) : (r[l] = u);
    }
  }
  if (
    (e.transform ||
      (i || o ? (r.transform = Mi(e, t.transform, o)) : r.transform && (r.transform = "none")),
    a)
  ) {
    let { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
function Tn(t, { style: e, vars: o }, r, n) {
  let s = t.style,
    i;
  for (i in e) s[i] = e[i];
  n?.applyProjectionStyles(s, r);
  for (i in o) s.setProperty(i, o[i]);
}
function Ba(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
var so = {
  correct: (t, e) => {
    if (!e.target) return t;
    if (typeof t == "string")
      if (w.test(t)) t = parseFloat(t);
      else return t;
    let o = Ba(t, e.target.x),
      r = Ba(t, e.target.y);
    return `${o}% ${r}%`;
  },
};
var Oa = {
  correct: (t, { treeScale: e, projectionDelta: o }) => {
    let r = t,
      n = Z.parse(t);
    if (n.length > 5) return r;
    let s = Z.createTransformer(t),
      i = typeof n[0] != "number" ? 1 : 0,
      a = o.x.scale * e.x,
      l = o.y.scale * e.y;
    ((n[0 + i] /= a), (n[1 + i] /= l));
    let c = R(a, l, 0.5);
    return (
      typeof n[2 + i] == "number" && (n[2 + i] /= c),
      typeof n[3 + i] == "number" && (n[3 + i] /= c),
      s(n)
    );
  },
};
var Me = {
  borderRadius: {
    ...so,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: so,
  borderTopRightRadius: so,
  borderBottomLeftRadius: so,
  borderBottomRightRadius: so,
  boxShadow: Oa,
};
function fu(t) {
  for (let e in t) ((Me[e] = t[e]), je(e) && (Me[e].isCSSVariable = !0));
}
function Sn(t, { layout: e, layoutId: o }) {
  return (
    Q.has(t) || t.startsWith("origin") || ((e || o !== void 0) && (!!Me[t] || t === "opacity"))
  );
}
function ao(t, e, o) {
  let r = t.style,
    n = e?.style,
    s = {};
  if (!r) return s;
  for (let i in r)
    (M(r[i]) || (n && M(n[i])) || Sn(i, t) || o?.getValue(i)?.liveStyle !== void 0) &&
      (s[i] = r[i]);
  return s;
}
function Od(t) {
  return window.getComputedStyle(t);
}
var ue = class extends no {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Tn));
  }
  readValueFromInstance(e, o) {
    if (Q.has(o)) return this.projection?.isProjecting ? zr(o) : Hs(e, o);
    {
      let r = Od(e),
        n = (je(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof n == "string" ? n.trim() : n;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: o }) {
    return Ei(e, o);
  }
  build(e, o, r) {
    io(e, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, o, r) {
    return ao(e, o, r);
  }
};
function Fd(t, e) {
  return t in e;
}
var wn = class extends $t {
  constructor() {
    (super(...arguments), (this.type = "object"));
  }
  readValueFromInstance(e, o) {
    if (Fd(o, e)) {
      let r = e[o];
      if (typeof r == "string" || typeof r == "number") return r;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(e, o) {
    delete o.output[e];
  }
  measureInstanceViewportBox() {
    return O();
  }
  build(e, o) {
    Object.assign(e.output, o);
  }
  renderInstance(e, { output: o }) {
    Object.assign(e, o);
  }
  sortInstanceNodePosition() {
    return 0;
  }
};
var jd = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Nd = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Fa(t, e, o = 1, r = 0, n = !0) {
  t.pathLength = 1;
  let s = n ? jd : Nd;
  ((t[s.offset] = `${-r}`), (t[s.array] = `${e} ${o}`));
}
var Wd = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Vn(
  t,
  { attrX: e, attrY: o, attrScale: r, pathLength: n, pathSpacing: s = 1, pathOffset: i = 0, ...a },
  l,
  c,
  u
) {
  if ((io(t, a, c), l)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  ((t.attrs = t.style), (t.style = {}));
  let { attrs: m, style: f } = t;
  (m.transform && ((f.transform = m.transform), delete m.transform),
    (f.transform || m.transformOrigin) &&
      ((f.transformOrigin = m.transformOrigin ?? "50% 50%"), delete m.transformOrigin),
    f.transform && ((f.transformBox = u?.transformBox ?? "fill-box"), delete m.transformBox));
  for (let p of Wd) m[p] !== void 0 && ((f[p] = m[p]), delete m[p]);
  (e !== void 0 && (m.x = e),
    o !== void 0 && (m.y = o),
    r !== void 0 && (m.scale = r),
    n !== void 0 && Fa(m, n, s, i, !1));
}
var bn = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
var An = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function ja(t, e, o, r) {
  Tn(t, e, void 0, r);
  for (let n in e.attrs) t.setAttribute(bn.has(n) ? n : ne(n), e.attrs[n]);
}
function Pn(t, e, o) {
  let r = ao(t, e, o);
  for (let n in t)
    if (M(t[n]) || M(e[n])) {
      let s = dt.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[s] = t[n];
    }
  return r;
}
var lo = class extends no {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = O));
  }
  getBaseTargetFromProps(e, o) {
    return e[o];
  }
  readValueFromInstance(e, o) {
    if (Q.has(o)) {
      let r = rn(o);
      return (r && r.default) || 0;
    }
    return ((o = bn.has(o) ? o : ne(o)), e.getAttribute(o));
  }
  scrapeMotionValuesFromProps(e, o, r) {
    return Pn(e, o, r);
  }
  build(e, o, r) {
    Vn(e, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(e, o, r, n) {
    ja(e, o, r, n);
  }
  mount(e) {
    ((this.isSVGTag = An(e.tagName)), super.mount(e));
  }
};
var Gd = $o.length;
function Di(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    let o = t.parent ? Di(t.parent) || {} : {};
    return (t.props.initial !== void 0 && (o.initial = t.props.initial), o);
  }
  let e = {};
  for (let o = 0; o < Gd; o++) {
    let r = $o[o],
      n = t.props[r];
    (Ht(n) || n === !1) && (e[r] = n);
  }
  return e;
}
function Na(t, e) {
  if (!Array.isArray(e)) return !1;
  let o = e.length;
  if (o !== t.length) return !1;
  for (let r = 0; r < o; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
var Ud = [...dn].reverse(),
  zd = dn.length;
function Kd(t) {
  return (e) => Promise.all(e.map(({ animation: o, options: r }) => be(t, o, r)));
}
function Wa(t) {
  let e = Kd(t),
    o = pu(),
    r = !0,
    n = !1,
    s = (c) => (u, m) => {
      let f = St(t, m, c === "exit" ? t.presenceContext?.custom : void 0);
      if (f) {
        let { transition: p, transitionEnd: d, ...h } = f;
        u = { ...u, ...h, ...d };
      }
      return u;
    };
  function i(c) {
    e = c(t);
  }
  function a(c) {
    let { props: u } = t,
      m = Di(t.parent) || {},
      f = [],
      p = new Set(),
      d = {},
      h = 1 / 0;
    for (let y = 0; y < zd; y++) {
      let x = Ud[y],
        v = o[x],
        T = u[x] !== void 0 ? u[x] : m[x],
        b = Ht(T),
        D = x === c ? v.isActive : null;
      D === !1 && (h = y);
      let j = T === m[x] && T !== u[x] && b;
      if (
        (j && (r || n) && t.manuallyAnimateOnMount && (j = !1),
        (v.protectedKeys = { ...d }),
        (!v.isActive && D === null) || (!T && !v.prevProp) || ce(T) || typeof T == "boolean")
      )
        continue;
      if (x === "exit" && v.isActive && D !== !0) {
        v.prevResolvedValues && (d = { ...d, ...v.prevResolvedValues });
        continue;
      }
      let E = du(v.prevProp, T),
        A = E || (x === c && v.isActive && !j && b) || (y > h && b),
        P = !1,
        L = Array.isArray(T) ? T : [T],
        X = L.reduce(s(x), {});
      D === !1 && (X = {});
      let { prevResolvedValues: et = {} } = v,
        mt = { ...et, ...X },
        Ct = (N) => {
          ((A = !0), p.has(N) && ((P = !0), p.delete(N)), (v.needsAnimating[N] = !0));
          let st = t.getValue(N);
          st && (st.liveStyle = !1);
        };
      for (let N in mt) {
        let st = X[N],
          Wt = et[N];
        if (d.hasOwnProperty(N)) continue;
        let _t = !1;
        (Fo(st) && Fo(Wt) ? (_t = !Na(st, Wt) || E) : (_t = st !== Wt),
          _t
            ? st != null
              ? Ct(N)
              : p.add(N)
            : st !== void 0 && p.has(N)
              ? Ct(N)
              : (v.protectedKeys[N] = !0));
      }
      ((v.prevProp = T),
        (v.prevResolvedValues = X),
        v.isActive && (d = { ...d, ...X }),
        (r || n) && t.blockInitialAnimation && (A = !1));
      let Et = j && E;
      A &&
        (!Et || P) &&
        f.push(
          ...L.map((N) => {
            let st = { type: x };
            if (typeof N == "string" && (r || n) && !Et && t.manuallyAnimateOnMount && t.parent) {
              let { parent: Wt } = t,
                _t = St(Wt, N);
              if (Wt.enteringChildren && _t) {
                let { delayChildren: Jn } = _t.transition || {};
                st.delay = Zr(Wt.enteringChildren, t, Jn);
              }
            }
            return { animation: N, options: st };
          })
        );
    }
    if (p.size) {
      let y = {};
      if (typeof u.initial != "boolean") {
        let x = St(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        x && x.transition && (y.transition = x.transition);
      }
      (p.forEach((x) => {
        let v = t.getBaseTarget(x),
          T = t.getValue(x);
        (T && (T.liveStyle = !0), (y[x] = v ?? null));
      }),
        f.push({ animation: y }));
    }
    let g = !!f.length;
    return (
      r && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (g = !1),
      (r = !1),
      (n = !1),
      g ? e(f) : Promise.resolve()
    );
  }
  function l(c, u) {
    if (o[c].isActive === u) return Promise.resolve();
    (t.variantChildren?.forEach((f) => f.animationState?.setActive(c, u)), (o[c].isActive = u));
    let m = a(c);
    for (let f in o) o[f].protectedKeys = {};
    return m;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: i,
    getState: () => o,
    reset: () => {
      ((o = pu()), (n = !0));
    },
  };
}
function du(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Na(e, t) : !1;
}
function co(t = !1) {
  return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function pu() {
  return {
    animate: co(!0),
    whileInView: co(),
    whileHover: co(),
    whileTap: co(),
    whileDrag: co(),
    whileFocus: co(),
    exit: co(),
  };
}
function Cn(t, e) {
  ((t.min = e.min), (t.max = e.max));
}
function it(t, e) {
  (Cn(t.x, e.x), Cn(t.y, e.y));
}
function Ri(t, e) {
  ((t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin));
}
var hu = 1e-4,
  Hd = 1 - hu,
  $d = 1 + hu,
  gu = 0.01,
  Xd = 0 - gu,
  Yd = 0 + gu;
function _(t) {
  return t.max - t.min;
}
function Ka(t, e, o) {
  return Math.abs(t - e) <= o;
}
function Ga(t, e, o, r = 0.5) {
  ((t.origin = r),
    (t.originPoint = R(e.min, e.max, t.origin)),
    (t.scale = _(o) / _(e)),
    (t.translate = R(o.min, o.max, t.origin) - t.originPoint),
    ((t.scale >= Hd && t.scale <= $d) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= Xd && t.translate <= Yd) || isNaN(t.translate)) && (t.translate = 0));
}
function uo(t, e, o, r) {
  (Ga(t.x, e.x, o.x, r ? r.originX : void 0), Ga(t.y, e.y, o.y, r ? r.originY : void 0));
}
function Ua(t, e, o, r = 0) {
  let n = r ? R(o.min, o.max, r) : o.min;
  ((t.min = n + e.min), (t.max = t.min + _(e)));
}
function Ha(t, e, o, r) {
  (Ua(t.x, e.x, o.x, r?.x), Ua(t.y, e.y, o.y, r?.y));
}
function za(t, e, o, r = 0) {
  let n = r ? R(o.min, o.max, r) : o.min;
  ((t.min = e.min - n), (t.max = t.min + _(e)));
}
function _o(t, e, o, r) {
  (za(t.x, e.x, o.x, r?.x), za(t.y, e.y, o.y, r?.y));
}
function $a(t, e, o, r, n) {
  return ((t -= e), (t = Xo(t, 1 / o, r)), n !== void 0 && (t = Xo(t, 1 / n, r)), t);
}
function yu(t, e = 0, o = 1, r = 0.5, n, s = t, i = t) {
  if (
    (nt.test(e) && ((e = parseFloat(e)), (e = R(i.min, i.max, e / 100) - i.min)),
    typeof e != "number")
  )
    return;
  let a = R(s.min, s.max, r);
  (t === s && (a -= e), (t.min = $a(t.min, e, o, a, n)), (t.max = $a(t.max, e, o, a, n)));
}
function Xa(t, e, [o, r, n], s, i) {
  yu(t, e[o], e[r], e[n], e.scale, s, i);
}
var _d = ["x", "scaleX", "originX"],
  qd = ["y", "scaleY", "originY"];
function Li(t, e, o, r) {
  (Xa(t.x, e, _d, o ? o.x : void 0, r ? r.x : void 0),
    Xa(t.y, e, qd, o ? o.y : void 0, r ? r.y : void 0));
}
function xu(t) {
  return t.translate === 0 && t.scale === 1;
}
function Ii(t) {
  return xu(t.x) && xu(t.y);
}
function Ya(t, e) {
  return t.min === e.min && t.max === e.max;
}
function qa(t, e) {
  return Ya(t.x, e.x) && Ya(t.y, e.y);
}
function _a(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function ki(t, e) {
  return _a(t.x, e.x) && _a(t.y, e.y);
}
function Bi(t) {
  return _(t.x) / _(t.y);
}
function Oi(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
function At(t) {
  return [t("x"), t("y")];
}
function Za(t, e, o) {
  let r = "",
    n = t.x.translate / e.x,
    s = t.y.translate / e.y,
    i = o?.z || 0;
  if (
    ((n || s || i) && (r = `translate3d(${n}px, ${s}px, ${i}px) `),
    (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
    o)
  ) {
    let { transformPerspective: c, rotate: u, rotateX: m, rotateY: f, skewX: p, skewY: d } = o;
    (c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      m && (r += `rotateX(${m}deg) `),
      f && (r += `rotateY(${f}deg) `),
      p && (r += `skewX(${p}deg) `),
      d && (r += `skewY(${d}deg) `));
  }
  let a = t.x.scale * e.x,
    l = t.y.scale * e.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
var wu = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  Zd = wu.length,
  vu = (t) => (typeof t == "string" ? parseFloat(t) : t),
  Tu = (t) => typeof t == "number" || w.test(t);
function Ja(t, e, o, r, n, s) {
  n
    ? ((t.opacity = R(0, o.opacity ?? 1, Jd(r))), (t.opacityExit = R(e.opacity ?? 1, 0, Qd(r))))
    : s && (t.opacity = R(e.opacity ?? 1, o.opacity ?? 1, r));
  for (let i = 0; i < Zd; i++) {
    let a = wu[i],
      l = Su(e, a),
      c = Su(o, a);
    if (l === void 0 && c === void 0) continue;
    (l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Tu(l) === Tu(c)
        ? ((t[a] = Math.max(R(vu(l), vu(c), r), 0)), (nt.test(c) || nt.test(l)) && (t[a] += "%"))
        : (t[a] = c));
  }
  (e.rotate || o.rotate) && (t.rotate = R(e.rotate || 0, o.rotate || 0, r));
}
function Su(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
var Jd = Vu(0, 0.5, Cr),
  Qd = Vu(0.5, 0.95, F);
function Vu(t, e, o) {
  return (r) => (r < t ? 0 : r > e ? 1 : o(pt(t, e, r)));
}
function En(t, e, o) {
  let r = M(t) ? t : z(t);
  return (r.start(Ze("", r, e, o)), r.animation);
}
function Dt(t, e, o, r = { passive: !0 }) {
  return (t.addEventListener(e, o, r), () => t.removeEventListener(e, o));
}
var Qa = (t, e) => t.depth - e.depth;
var Mn = class {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(e) {
    (Le(this.children, e), (this.isDirty = !0));
  }
  remove(e) {
    (ft(this.children, e), (this.isDirty = !0));
  }
  forEach(e) {
    (this.isDirty && this.children.sort(Qa), (this.isDirty = !1), this.children.forEach(e));
  }
};
function Dn(t, e) {
  let o = K.now(),
    r = ({ timestamp: n }) => {
      let s = n - o;
      s >= e && (B(r), t(s - e));
    };
  return (S.setup(r, !0), () => B(r));
}
function th(t, e) {
  return Dn(t, k(e));
}
function De(t) {
  return M(t) ? t.get() : t;
}
var Rn = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    Le(this.members, e);
    for (let o = this.members.length - 1; o >= 0; o--) {
      let r = this.members[o];
      if (r === e || r === this.lead || r === this.prevLead) continue;
      let n = r.instance;
      (!n || n.isConnected === !1) && !r.snapshot && (ft(this.members, r), r.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if ((ft(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
      let o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(e) {
    for (let o = this.members.indexOf(e) - 1; o >= 0; o--) {
      let r = this.members[o];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1) return (this.promote(r), !0);
    }
    return !1;
  }
  promote(e, o) {
    let r = this.lead;
    if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
      (r.updateSnapshot(), e.scheduleRender());
      let { layoutDependency: n } = r.options,
        { layoutDependency: s } = e.options;
      ((n === void 0 || n !== s) &&
        ((e.resumeFrom = r),
        o && (r.preserveOpacity = !0),
        r.snapshot &&
          ((e.snapshot = r.snapshot),
          (e.snapshot.latestValues = r.animationValues || r.latestValues)),
        e.root?.isUpdating && (e.isLayoutDirty = !0)),
        e.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      (e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => e.instance && e.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
};
var mo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
var fo = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
  tl = ["", "X", "Y", "Z"],
  eh = 1e3,
  oh = 0;
function el(t, e, o, r) {
  let { latestValues: n } = e;
  n[t] && ((o[t] = n[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
}
function Lu(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  let { visualElement: e } = t.options;
  if (!e) return;
  let o = Qe(e);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    let { layout: n, layoutId: s } = t.options;
    window.MotionCancelOptimisedAnimation(o, "transform", S, !(n || s));
  }
  let { parent: r } = t;
  r && !r.hasCheckedOptimisedAppear && Lu(r);
}
function Ln({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: o,
  checkIsScrollRoot: r,
  resetTransform: n,
}) {
  return class {
    constructor(i = {}, a = e?.()) {
      ((this.id = oh++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            Y.value && (fo.nodes = fo.calculatedTargetDeltas = fo.calculatedProjections = 0),
            this.nodes.forEach(Iu),
            this.nodes.forEach(ch),
            this.nodes.forEach(uh),
            this.nodes.forEach(ku),
            Y.addProjectionMetrics && Y.addProjectionMetrics(fo));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = i),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Mn());
    }
    addEventListener(i, a) {
      return (
        this.eventHandlers.has(i) || this.eventHandlers.set(i, new qt()),
        this.eventHandlers.get(i).add(a)
      );
    }
    notifyListeners(i, ...a) {
      let l = this.eventHandlers.get(i);
      l && l.notify(...a);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    mount(i) {
      if (this.instance) return;
      ((this.isSVG = se(i) && !mn(i)), (this.instance = i));
      let { layoutId: a, layout: l, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(i),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        t)
      ) {
        let u,
          m = 0,
          f = () => (this.root.updateBlockedByResize = !1);
        (S.read(() => {
          m = window.innerWidth;
        }),
          t(i, () => {
            let p = window.innerWidth;
            p !== m &&
              ((m = p),
              (this.root.updateBlockedByResize = !0),
              u && u(),
              (u = Dn(f, 250)),
              mo.hasAnimatedSinceResize &&
                ((mo.hasAnimatedSinceResize = !1), this.nodes.forEach(Pu)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: u, hasLayoutChanged: m, hasRelativeLayoutChanged: f, layout: p }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let d = this.options.transition || c.getDefaultTransition() || hh,
                { onLayoutAnimationStart: h, onLayoutAnimationComplete: g } = c.getProps(),
                y = !this.targetLayout || !ki(this.targetLayout, p),
                x = !m && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                x ||
                (m && (y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let v = { ...Tt(d, "layout"), onPlay: h, onComplete: g };
                ((c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((v.delay = 0), (v.type = !1)),
                  this.startAnimation(v),
                  this.setAnimationOrigin(u, x));
              } else
                (m || Pu(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = p;
            }
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      let i = this.getStack();
      (i && i.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        B(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(mh), this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Lu(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        let m = this.path[u];
        ((m.shouldResetTransform = !0),
          (typeof m.latestValues.x == "string" || typeof m.latestValues.y == "string") &&
            (m.isLayoutDirty = !0),
          m.updateScroll("snapshot"),
          m.options.layoutRoot && m.willUpdate(!1));
      }
      let { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      let c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        i && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let l = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          l && this.nodes.forEach(sh),
          this.nodes.forEach(bu));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Au);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(ah),
            this.nodes.forEach(lh),
            this.nodes.forEach(rh),
            this.nodes.forEach(nh))
          : this.nodes.forEach(Au),
        this.clearAllSnapshots());
      let a = K.now();
      ((G.delta = H(0, 1e3 / 60, a - G.timestamp)),
        (G.timestamp = a),
        (G.isProcessing = !0),
        Ir.update.process(G),
        Ir.preRender.process(G),
        Ir.render.process(G),
        (G.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), wt.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(ih), this.sharedNodes.forEach(fh));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), S.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      S.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !_(this.snapshot.measuredBox.x) &&
          !_(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      let i = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = O()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      let { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === i &&
          (a = !1),
        a && this.instance)
      ) {
        let l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: i,
          isRoot: l,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!n) return;
      let i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Ii(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      i &&
        this.instance &&
        (a || Xt(this.latestValues) || u) &&
        (n(this.instance, c), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(i = !0) {
      let a = this.measurePageBox(),
        l = this.removeElementScroll(a);
      return (
        i && (l = this.removeTransform(l)),
        gh(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: i } = this.options;
      if (!i) return O();
      let a = i.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(yh))) {
        let { scroll: c } = this.root;
        c && (bt(a.x, c.offset.x), bt(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(i) {
      let a = O();
      if ((it(a, i), this.scroll?.wasRoot)) return a;
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l],
          { scroll: u, options: m } = c;
        c !== this.root &&
          u &&
          m.layoutScroll &&
          (u.wasRoot && it(a, i), bt(a.x, u.offset.x), bt(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(i, a = !1, l) {
      let c = l || O();
      it(c, i);
      for (let u = 0; u < this.path.length; u++) {
        let m = this.path[u];
        (!a &&
          m.options.layoutScroll &&
          m.scroll &&
          m !== m.root &&
          (bt(c.x, -m.scroll.offset.x), bt(c.y, -m.scroll.offset.y)),
          Xt(m.latestValues) && Yo(c, m.latestValues, m.layout?.layoutBox));
      }
      return (Xt(this.latestValues) && Yo(c, this.latestValues, this.layout?.layoutBox), c);
    }
    removeTransform(i) {
      let a = O();
      it(a, i);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l];
        if (!Xt(c.latestValues)) continue;
        let u;
        (c.instance &&
          (vn(c.latestValues) && c.updateSnapshot(), (u = O()), it(u, c.measurePageBox())),
          Li(a, c.latestValues, c.snapshot?.layoutBox, u));
      }
      return (Xt(this.latestValues) && Li(a, this.latestValues), a);
    }
    setTargetDelta(i) {
      ((this.targetDelta = i), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== G.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      let a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      let l = !!this.resumingFrom || this !== a;
      if (
        !(
          i ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      let { layout: u, layoutId: m } = this.options;
      if (!this.layout || !(u || m)) return;
      this.resolvedRelativeTargetAt = G.timestamp;
      let f = this.getClosestProjectingParent();
      (f &&
        this.linkedParentVersion !== f.layoutVersion &&
        !f.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && f && f.layout
            ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = O()), (this.targetWithTransforms = O())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Ha(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : it(this.target, this.layout.layoutBox),
                Ci(this.target, this.targetDelta))
              : it(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(f, this.target, f.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          Y.value && fo.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || vn(this.parent.latestValues) || Ai(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(i, a, l) {
      ((this.relativeParent = i),
        (this.linkedParentVersion = i.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = O()),
        (this.relativeTargetOrigin = O()),
        _o(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0),
        it(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let i = this.getLead(),
        a = !!this.resumingFrom || this !== i,
        l = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1),
        a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
        this.resolvedRelativeTargetAt === G.timestamp && (l = !1),
        l)
      )
        return;
      let { layout: c, layoutId: u } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || u))
      )
        return;
      it(this.layoutCorrected, this.layout.layoutBox);
      let m = this.treeScale.x,
        f = this.treeScale.y;
      (Ia(this.layoutCorrected, this.treeScale, this.path, a),
        i.layout &&
          !i.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((i.target = i.layout.layoutBox), (i.targetWithTransforms = O())));
      let { target: p } = i;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ri(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ri(this.prevProjectionDelta.y, this.projectionDelta.y)),
        uo(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.treeScale.x !== m ||
          this.treeScale.y !== f ||
          !Oi(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Oi(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)),
        Y.value && fo.calculatedProjections++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      if ((this.options.visualElement?.scheduleRender(), i)) {
        let a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Pe()),
        (this.projectionDelta = Pe()),
        (this.projectionDeltaWithTransform = Pe()));
    }
    setAnimationOrigin(i, a = !1) {
      let l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        m = Pe();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      let f = O(),
        p = l ? l.source : void 0,
        d = this.layout ? this.layout.source : void 0,
        h = p !== d,
        g = this.getStack(),
        y = !g || g.members.length <= 1,
        x = !!(h && !y && this.options.crossfade === !0 && !this.path.some(dh));
      this.animationProgress = 0;
      let v;
      ((this.mixTargetDelta = (T) => {
        let b = T / 1e3;
        (Cu(m.x, i.x, b),
          Cu(m.y, i.y, b),
          this.setTargetDelta(m),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (_o(
              f,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ),
            ph(this.relativeTarget, this.relativeTargetOrigin, f, b),
            v && qa(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = O()),
            it(v, this.relativeTarget)),
          h && ((this.animationValues = u), Ja(u, c, this.latestValues, b, x, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = b));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(i) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation && (B(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = S.update(() => {
          ((mo.hasAnimatedSinceResize = !0),
            at.layout++,
            this.motionValue || (this.motionValue = z(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = En(this.motionValue, [0, 1e3], {
              ...i,
              velocity: 0,
              isSync: !0,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), i.onUpdate && i.onUpdate(a));
              },
              onStop: () => {
                at.layout--;
              },
              onComplete: () => {
                (at.layout--, i.onComplete && i.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let i = this.getStack();
      (i && i.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(eh), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let i = this.getLead(),
        { targetWithTransforms: a, target: l, layout: c, latestValues: u } = i;
      if (!(!a || !l || !c)) {
        if (
          this !== i &&
          this.layout &&
          c &&
          Bu(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || O();
          let m = _(this.layout.layoutBox.x);
          ((l.x.min = i.target.x.min), (l.x.max = l.x.min + m));
          let f = _(this.layout.layoutBox.y);
          ((l.y.min = i.target.y.min), (l.y.max = l.y.min + f));
        }
        (it(a, l), Yo(a, u), uo(this.projectionDeltaWithTransform, this.layoutCorrected, a, u));
      }
    }
    registerSharedNode(i, a) {
      (this.sharedNodes.has(i) || this.sharedNodes.set(i, new Rn()),
        this.sharedNodes.get(i).add(a));
      let c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0,
      });
    }
    isLead() {
      let i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      let { layoutId: i } = this.options;
      return i ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      let { layoutId: i } = this.options;
      return i ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: i } = this.options;
      if (i) return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: a, preserveFollowOpacity: l } = {}) {
      let c = this.getStack();
      (c && c.promote(this, l),
        i && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      let i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: i } = this.options;
      if (!i) return;
      let a = !1,
        { latestValues: l } = i;
      if (
        ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
        !a)
      )
        return;
      let c = {};
      l.z && el("z", i, c, this.animationValues);
      for (let u = 0; u < tl.length; u++)
        (el(`rotate${tl[u]}`, i, c, this.animationValues),
          el(`skew${tl[u]}`, i, c, this.animationValues));
      i.render();
      for (let u in c)
        (i.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]));
      i.scheduleRender();
    }
    applyProjectionStyles(i, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        i.visibility = "hidden";
        return;
      }
      let l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (i.visibility = ""),
          (i.opacity = ""),
          (i.pointerEvents = De(a?.pointerEvents) || ""),
          (i.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      let c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        (this.options.layoutId &&
          ((i.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (i.pointerEvents = De(a?.pointerEvents) || "")),
          this.hasProjected &&
            !Xt(this.latestValues) &&
            ((i.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      i.visibility = "";
      let u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let m = Za(this.projectionDeltaWithTransform, this.treeScale, u);
      (l && (m = l(u, m)), (i.transform = m));
      let { x: f, y: p } = this.projectionDelta;
      ((i.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`),
        c.animationValues
          ? (i.opacity =
              c === this
                ? (u.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : u.opacityExit)
          : (i.opacity =
              c === this
                ? u.opacity !== void 0
                  ? u.opacity
                  : ""
                : u.opacityExit !== void 0
                  ? u.opacityExit
                  : 0));
      for (let d in Me) {
        if (u[d] === void 0) continue;
        let { correct: h, applyTo: g, isCSSVariable: y } = Me[d],
          x = m === "none" ? u[d] : h(u[d], c);
        if (g) {
          let v = g.length;
          for (let T = 0; T < v; T++) i[g[T]] = x;
        } else y ? (this.options.visualElement.renderState.vars[d] = x) : (i[d] = x);
      }
      this.options.layoutId && (i.pointerEvents = c === this ? De(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((i) => i.currentAnimation?.stop()),
        this.root.nodes.forEach(bu),
        this.root.sharedNodes.clear());
    }
  };
}
function rh(t) {
  t.updateLayout();
}
function nh(t) {
  let e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    let { layoutBox: o, measuredBox: r } = t.layout,
      { animationType: n } = t.options,
      s = e.source !== t.layout.source;
    if (n === "size")
      At((u) => {
        let m = s ? e.measuredBox[u] : e.layoutBox[u],
          f = _(m);
        ((m.min = o[u].min), (m.max = m.min + f));
      });
    else if (n === "x" || n === "y") {
      let u = n === "x" ? "y" : "x";
      Cn(s ? e.measuredBox[u] : e.layoutBox[u], o[u]);
    } else
      Bu(n, e.layoutBox, o) &&
        At((u) => {
          let m = s ? e.measuredBox[u] : e.layoutBox[u],
            f = _(o[u]);
          ((m.max = m.min + f),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[u].max = t.relativeTarget[u].min + f)));
        });
    let i = Pe();
    uo(i, o, e.layoutBox);
    let a = Pe();
    s ? uo(a, t.applyTransform(r, !0), e.measuredBox) : uo(a, o, e.layoutBox);
    let l = !Ii(i),
      c = !1;
    if (!t.resumeFrom) {
      let u = t.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        let { snapshot: m, layout: f } = u;
        if (m && f) {
          let p = t.options.layoutAnchor || void 0,
            d = O();
          _o(d, e.layoutBox, m.layoutBox, p);
          let h = O();
          (_o(h, o, f.layoutBox, p),
            ki(d, h) || (c = !0),
            u.options.layoutRoot &&
              ((t.relativeTarget = h), (t.relativeTargetOrigin = d), (t.relativeParent = u)));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: o,
      snapshot: e,
      delta: a,
      layoutDelta: i,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: c,
    });
  } else if (t.isLead()) {
    let { onExitComplete: o } = t.options;
    o && o();
  }
  t.options.transition = void 0;
}
function Iu(t) {
  (Y.value && fo.nodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty)));
}
function ku(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function ih(t) {
  t.clearSnapshot();
}
function bu(t) {
  t.clearMeasurements();
}
function sh(t) {
  ((t.isLayoutDirty = !0), t.updateLayout());
}
function Au(t) {
  t.isLayoutDirty = !1;
}
function ah(t) {
  t.isAnimationBlocked &&
    t.layout &&
    !t.isLayoutDirty &&
    ((t.snapshot = t.layout), (t.isLayoutDirty = !0));
}
function lh(t) {
  let { visualElement: e } = t.options;
  (e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform());
}
function Pu(t) {
  (t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0));
}
function ch(t) {
  t.resolveTargetDelta();
}
function uh(t) {
  t.calcProjection();
}
function mh(t) {
  t.resetSkewAndRotation();
}
function fh(t) {
  t.removeLeadSnapshot();
}
function Cu(t, e, o) {
  ((t.translate = R(e.translate, 0, o)),
    (t.scale = R(e.scale, 1, o)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint));
}
function Eu(t, e, o, r) {
  ((t.min = R(e.min, o.min, r)), (t.max = R(e.max, o.max, r)));
}
function ph(t, e, o, r) {
  (Eu(t.x, e.x, o.x, r), Eu(t.y, e.y, o.y, r));
}
function dh(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
var hh = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Mu = (t) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
  Du = Mu("applewebkit/") && !Mu("chrome/") ? Math.round : F;
function Ru(t) {
  ((t.min = Du(t.min)), (t.max = Du(t.max)));
}
function gh(t) {
  (Ru(t.x), Ru(t.y));
}
function Bu(t, e, o) {
  return t === "position" || (t === "preserve-aspect" && !Ka(Bi(e), Bi(o), 0.2));
}
function yh(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
var ol = Ln({
  attachResizeListener: (t, e) => Dt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
  }),
  checkIsScrollRoot: () => !0,
});
var xh = (t) => !t.isLayoutDirty && t.willUpdate(!1);
function Fi() {
  let t = new Set(),
    e = new WeakMap(),
    o = () => t.forEach(xh);
  return {
    add: (r) => {
      (t.add(r), e.set(r, r.addEventListener("willUpdate", o)));
    },
    remove: (r) => {
      t.delete(r);
      let n = e.get(r);
      (n && (n(), e.delete(r)), o());
    },
    dirty: o,
  };
}
var Yt = { current: void 0 },
  po = Ln({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Yt.current) {
        let t = new ol({});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (Yt.current = t));
      }
      return Yt.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  });
var Ou = "[data-layout], [data-layout-id]",
  Fu = () => {};
function vh(t) {
  let e = t.targetWithTransforms || t.target;
  if (!e) return;
  let o = O(),
    r = O();
  return (
    it(o, e),
    it(r, e),
    {
      animationId: t.root?.animationId ?? 0,
      measuredBox: o,
      layoutBox: r,
      latestValues: t.animationValues || t.latestValues || {},
      source: t.id,
    }
  );
}
var rl = class {
  constructor(e, o, r) {
    ((this.sharedTransitions = new Map()),
      (this.notifyReady = Fu),
      (this.rejectReady = Fu),
      (this.scope = e),
      (this.updateDom = o),
      (this.defaultOptions = r),
      (this.readyPromise = new Promise((n, s) => {
        ((this.notifyReady = n), (this.rejectReady = s));
      })),
      S.postRender(() => {
        this.start().then(this.notifyReady).catch(this.rejectReady);
      }));
  }
  shared(e, o) {
    return (this.sharedTransitions.set(e, o), this);
  }
  then(e, o) {
    return this.readyPromise.then(e, o);
  }
  async start() {
    let e = ju(this.scope),
      o = this.buildRecords(e);
    (o.forEach(({ projection: l }) => {
      let c = !!l.currentAnimation,
        u = !!l.options.layoutId;
      if (c && u) {
        let m = vh(l);
        m ? (l.snapshot = m) : l.snapshot && (l.snapshot = void 0);
      } else l.snapshot && (l.currentAnimation || l.isProjecting()) && (l.snapshot = void 0);
      ((l.isPresent = !0), l.willUpdate());
    }),
      await this.updateDom());
    let r = ju(this.scope),
      n = this.buildRecords(r);
    (this.handleExitingElements(o, n),
      n.forEach(({ projection: l }) => {
        let c = l.instance,
          u = l.resumeFrom?.instance;
        if (!c || !u || !("style" in c)) return;
        let m = c.style.transform,
          f = u.style.transform;
        m && f && m === f && ((c.style.transform = ""), (c.style.transformOrigin = ""));
      }),
      n.forEach(({ projection: l }) => {
        l.isPresent = !0;
      }),
      Ah(n, o)?.didUpdate(),
      await new Promise((l) => {
        S.postRender(() => l());
      }));
    let i = Ph(n);
    return new zt(i);
  }
  buildRecords(e) {
    let o = [],
      r = new Map();
    for (let n of e) {
      let s = bh(n, r, this.scope),
        { layout: i, layoutId: a } = Sh(n),
        c = (a ? this.sharedTransitions.get(a) : void 0) || this.defaultOptions,
        u = Vh(n, s?.projection, {
          layout: i,
          layoutId: a,
          animationType: typeof i == "string" ? i : "both",
          transition: c,
        });
      (r.set(n, u), o.push(u));
    }
    return o;
  }
  handleExitingElements(e, o) {
    let r = new Set(o.map((s) => s.element));
    e.forEach((s) => {
      r.has(s.element) ||
        (s.projection.options.layoutId && ((s.projection.isPresent = !1), s.projection.relegate()),
        s.visualElement.unmount(),
        ht.delete(s.element));
    });
    let n = new Set(e.map((s) => s.element));
    o.forEach(({ element: s, projection: i }) => {
      n.has(s) &&
        i.resumeFrom &&
        !i.resumeFrom.instance &&
        !i.isLead() &&
        ((i.resumeFrom = void 0), (i.snapshot = void 0));
    });
  }
};
function Th(t, e, o) {
  return typeof t == "function"
    ? { scope: document, updateDom: t, defaultOptions: e }
    : { scope: lt(t)[0] || document, updateDom: e, defaultOptions: o };
}
function ju(t) {
  let e = Array.from(t.querySelectorAll(Ou));
  return (t instanceof Element && t.matches(Ou) && (e.includes(t) || e.unshift(t)), e);
}
function Sh(t) {
  let e = t.getAttribute("data-layout-id") || void 0,
    o = t.getAttribute("data-layout"),
    r;
  return (o === "" || o === "true" ? (r = !0) : o && (r = o), { layout: r, layoutId: e });
}
function wh() {
  return {
    latestValues: {},
    renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {} },
  };
}
function Vh(t, e, o) {
  let r = ht.get(t),
    n =
      r ?? new ue({ props: {}, presenceContext: null, visualState: wh() }, { allowProjection: !0 });
  return (
    (!r || !n.projection) && (n.projection = new po(n.latestValues, e)),
    n.projection.setOptions({ ...o, visualElement: n }),
    n.current ? n.projection.instance || n.projection.mount(t) : n.mount(t),
    r || ht.set(t, n),
    { element: t, visualElement: n, projection: n.projection }
  );
}
function bh(t, e, o) {
  let r = t.parentElement;
  for (; r; ) {
    let n = e.get(r);
    if (n) return n;
    if (r === o) break;
    r = r.parentElement;
  }
}
function Ah(t, e) {
  return (t[0] || e[0])?.projection.root;
}
function Ph(t) {
  let e = new Set();
  return (
    t.forEach((o) => {
      let r = o.projection.currentAnimation;
      r && e.add(r);
    }),
    Array.from(e)
  );
}
var Ch = S,
  Eh = Fe.reduce((t, e) => ((t[e] = (o) => B(o)), t), {});
var Wu = V(C(), 1);
var Nu = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function qo(t) {
  return typeof t != "string" || t.includes("-") ? !1 : !!(Nu.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
var Zo = (t, e) =>
  (e.isSVG ?? qo(t)) ? new lo(e) : new ue(e, { allowProjection: t !== Wu.Fragment });
var Ui = V(Gt(), 1);
var rr = V(C(), 1);
var Gu = V(C(), 1),
  me = (0, Gu.createContext)({});
var Uu = V(C(), 1),
  Jo = (0, Uu.createContext)({ strict: !1 });
var zu = V(C(), 1),
  J = (0, zu.createContext)({ transformPagePoint: (t) => t, isStatic: !1, reducedMotion: "never" });
var Ku = V(C(), 1),
  Ft = (0, Ku.createContext)({});
var ji = V(C(), 1);
function Hu(t, e) {
  if (Ce(t)) {
    let { initial: o, animate: r } = t;
    return { initial: o === !1 || Ht(o) ? o : void 0, animate: Ht(r) ? r : void 0 };
  }
  return t.inherit !== !1 ? e : {};
}
function Xu(t) {
  let { initial: e, animate: o } = Hu(t, (0, ji.useContext)(Ft));
  return (0, ji.useMemo)(() => ({ initial: e, animate: o }), [$u(e), $u(o)]);
}
function $u(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
var er = V(C(), 1);
var Yu = V(C(), 1);
var Qo = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function nl(t, e, o) {
  for (let r in e) !M(e[r]) && !Sn(r, o) && (t[r] = e[r]);
}
function Mh({ transformTemplate: t }, e) {
  return (0, Yu.useMemo)(() => {
    let o = Qo();
    return (io(o, e, t), Object.assign({}, o.vars, o.style));
  }, [e]);
}
function Dh(t, e) {
  let o = t.style || {},
    r = {};
  return (nl(r, o, t), Object.assign(r, Mh(t, e)), r);
}
function _u(t, e) {
  let o = {},
    r = Dh(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((o.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (o.tabIndex = 0),
    (o.style = r),
    o
  );
}
var qu = V(C(), 1);
var Ni = () => ({ ...Qo(), attrs: {} });
function Zu(t, e, o, r) {
  let n = (0, qu.useMemo)(() => {
    let s = Ni();
    return (Vn(s, e, An(r), t.transformTemplate, t.style), { ...s.attrs, style: { ...s.style } });
  }, [e]);
  if (t.style) {
    let s = {};
    (nl(s, t.style, t), (n.style = { ...s, ...n.style }));
  }
  return n;
}
var Rh = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function tr(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    Rh.has(t)
  );
}
var Ju = (t) => !tr(t);
function il(t) {
  typeof t == "function" && (Ju = (e) => (e.startsWith("on") ? !tr(e) : t(e)));
}
try {
  il(rc("@emotion/is-prop-valid").default);
} catch {}
function sl(t, e, o) {
  let r = {};
  for (let n in t)
    (n === "values" && typeof t.values == "object") ||
      M(t[n]) ||
      ((Ju(n) ||
        (o === !0 && tr(n)) ||
        (!e && !tr(n)) ||
        (t.draggable && n.startsWith("onDrag"))) &&
        (r[n] = t[n]));
  return r;
}
function Qu(t, e, o, { latestValues: r }, n, s = !1, i) {
  let l = ((i ?? qo(t)) ? Zu : _u)(e, r, n, t),
    c = sl(e, typeof t == "string", s),
    u = t !== er.Fragment ? { ...c, ...l, ref: o } : {},
    { children: m } = e,
    f = (0, er.useMemo)(() => (M(m) ? m.get() : m), [m]);
  return (0, er.createElement)(t, { ...u, children: f });
}
var al = V(C(), 1);
var tm = V(C(), 1),
  Rt = (0, tm.createContext)(null);
var em = V(C(), 1);
function I(t) {
  let e = (0, em.useRef)(null);
  return (e.current === null && (e.current = t()), e.current);
}
function Lh({ scrapeMotionValuesFromProps: t, createRenderState: e }, o, r, n) {
  return { latestValues: Ih(o, r, n, t), renderState: e() };
}
function Ih(t, e, o, r) {
  let n = {},
    s = r(t, {});
  for (let f in s) n[f] = De(s[f]);
  let { initial: i, animate: a } = t,
    l = Ce(t),
    c = hn(t);
  e &&
    c &&
    !l &&
    t.inherit !== !1 &&
    (i === void 0 && (i = e.initial), a === void 0 && (a = e.animate));
  let u = o ? o.initial === !1 : !1;
  u = u || i === !1;
  let m = u ? a : i;
  if (m && typeof m != "boolean" && !ce(m)) {
    let f = Array.isArray(m) ? m : [m];
    for (let p = 0; p < f.length; p++) {
      let d = Je(t, f[p]);
      if (d) {
        let { transitionEnd: h, transition: g, ...y } = d;
        for (let x in y) {
          let v = y[x];
          if (Array.isArray(v)) {
            let T = u ? v.length - 1 : 0;
            v = v[T];
          }
          v !== null && (n[x] = v);
        }
        for (let x in h) n[x] = h[x];
      }
    }
  }
  return n;
}
var ho = (t) => (e, o) => {
  let r = (0, al.useContext)(Ft),
    n = (0, al.useContext)(Rt),
    s = () => Lh(t, e, r, n);
  return o ? s() : I(s);
};
var om = ho({ scrapeMotionValuesFromProps: ao, createRenderState: Qo });
var rm = ho({ scrapeMotionValuesFromProps: Pn, createRenderState: Ni });
var nm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  im = !1;
function kh() {
  if (im) return;
  let t = {};
  for (let e in nm) t[e] = { isEnabled: (o) => nm[e].some((r) => !!o[r]) };
  (yn(t), (im = !0));
}
function Wi() {
  return (kh(), Ca());
}
function In(t) {
  let e = Wi();
  for (let o in t) e[o] = { ...e[o], ...t[o] };
  yn(e);
}
var or = Symbol.for("motionComponentSymbol");
var go = V(C(), 1);
function sm(t, e, o) {
  let r = (0, go.useRef)(o);
  (0, go.useInsertionEffect)(() => {
    r.current = o;
  });
  let n = (0, go.useRef)(null);
  return (0, go.useCallback)(
    (s) => {
      (s && t.onMount?.(s), e && (s ? e.mount(s) : e.unmount()));
      let i = r.current;
      if (typeof i == "function")
        if (s) {
          let a = i(s);
          typeof a == "function" && (n.current = a);
        } else n.current ? (n.current(), (n.current = null)) : i(s);
      else i && (i.current = s);
    },
    [e]
  );
}
var ut = V(C(), 1);
var am = V(C(), 1),
  kn = (0, am.createContext)({});
function Re(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
var Gi = V(C(), 1);
var ll = typeof window < "u";
var Pt = ll ? Gi.useLayoutEffect : Gi.useEffect;
function lm(t, e, o, r, n, s) {
  let { visualElement: i } = (0, ut.useContext)(Ft),
    a = (0, ut.useContext)(Jo),
    l = (0, ut.useContext)(Rt),
    c = (0, ut.useContext)(J),
    u = c.reducedMotion,
    m = c.skipAnimations,
    f = (0, ut.useRef)(null),
    p = (0, ut.useRef)(!1);
  ((r = r || a.renderer),
    !f.current &&
      r &&
      ((f.current = r(t, {
        visualState: e,
        parent: i,
        props: o,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: u,
        skipAnimations: m,
        isSVG: s,
      })),
      p.current && f.current && (f.current.manuallyAnimateOnMount = !0)));
  let d = f.current,
    h = (0, ut.useContext)(kn);
  d && !d.projection && n && (d.type === "html" || d.type === "svg") && Bh(f.current, o, n, h);
  let g = (0, ut.useRef)(!1);
  (0, ut.useInsertionEffect)(() => {
    d && g.current && d.update(o, l);
  });
  let y = o[Wo],
    x = (0, ut.useRef)(
      !!y &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(y) &&
        window.MotionHasOptimisedAnimation?.(y)
    );
  return (
    Pt(() => {
      ((p.current = !0),
        d &&
          ((g.current = !0),
          (window.MotionIsMounted = !0),
          d.updateFeatures(),
          d.scheduleRenderMicrotask(),
          x.current && d.animationState && d.animationState.animateChanges()));
    }),
    (0, ut.useEffect)(() => {
      d &&
        (!x.current && d.animationState && d.animationState.animateChanges(),
        x.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(y);
          }),
          (x.current = !1)),
        (d.enteringChildren = void 0));
    }),
    d
  );
}
function Bh(t, e, o, r) {
  let {
    layoutId: n,
    layout: s,
    drag: i,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
    layoutAnchor: u,
    layoutCrossfade: m,
  } = e;
  ((t.projection = new o(t.latestValues, e["data-framer-portal-id"] ? void 0 : cm(t.parent))),
    t.projection.setOptions({
      layoutId: n,
      layout: s,
      alwaysMeasureLayout: !!i || (a && Re(a)),
      visualElement: t,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      crossfade: m,
      layoutScroll: l,
      layoutRoot: c,
      layoutAnchor: u,
    }));
}
function cm(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : cm(t.parent);
}
function zi(t, { forwardMotionProps: e = !1, type: o } = {}, r, n) {
  r && In(r);
  let s = o ? o === "svg" : qo(t),
    i = s ? rm : om;
  function a(c, u) {
    let m,
      f = { ...(0, rr.useContext)(J), ...c, layoutId: Oh(c) },
      { isStatic: p } = f,
      d = Xu(c),
      h = i(c, p);
    if (!p && typeof window < "u") {
      Fh(f, r);
      let g = jh(f);
      ((m = g.MeasureLayout), (d.visualElement = lm(t, h, f, n, g.ProjectionNode, s)));
    }
    return (0, Ui.jsxs)(Ft.Provider, {
      value: d,
      children: [
        m && d.visualElement ? (0, Ui.jsx)(m, { visualElement: d.visualElement, ...f }) : null,
        Qu(t, c, sm(h, d.visualElement, u), h, p, e, s),
      ],
    });
  }
  a.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  let l = (0, rr.forwardRef)(a);
  return ((l[or] = t), l);
}
function Oh({ layoutId: t }) {
  let e = (0, rr.useContext)(me).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Fh(t, e) {
  let o = (0, rr.useContext)(Jo).strict;
}
function jh(t) {
  let e = Wi(),
    { drag: o, layout: r } = e;
  if (!o && !r) return {};
  let n = { ...o, ...r };
  return {
    MeasureLayout: o?.isEnabled(t) || r?.isEnabled(t) ? n.MeasureLayout : void 0,
    ProjectionNode: n.ProjectionNode,
  };
}
function Ki(t, e) {
  if (typeof Proxy > "u") return zi;
  let o = new Map(),
    r = (s, i) => zi(s, i, t, e),
    n = (s, i) => r(s, i);
  return new Proxy(n, {
    get: (s, i) => (i === "create" ? r : (o.has(i) || o.set(i, zi(i, void 0, t, e)), o.get(i))),
  });
}
var Hi = class extends tt {
  constructor(e) {
    (super(e), e.animationState || (e.animationState = Wa(e)));
  }
  updateAnimationControlsSubscription() {
    let { animate: e } = this.node.getProps();
    ce(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    let { animate: e } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    e !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
};
var Nh = 0,
  $i = class extends tt {
    constructor() {
      (super(...arguments), (this.id = Nh++), (this.isExitComplete = !1));
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: e, onExitComplete: o } = this.node.presenceContext,
        { isPresent: r } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === r) return;
      if (e && r === !1) {
        if (this.isExitComplete) {
          let { initial: s, custom: i } = this.node.getProps();
          if (typeof s == "string" || (typeof s == "object" && s !== null && !Array.isArray(s))) {
            let a = St(this.node, s, i);
            if (a) {
              let { transition: l, transitionEnd: c, ...u } = a;
              for (let m in u) this.node.getValue(m)?.jump(u[m]);
            }
          }
          (this.node.animationState.reset(), this.node.animationState.animateChanges());
        } else this.node.animationState.setActive("exit", !1);
        this.isExitComplete = !1;
        return;
      }
      let n = this.node.animationState.setActive("exit", !e);
      o &&
        !e &&
        n.then(() => {
          ((this.isExitComplete = !0), o(this.id));
        });
    }
    mount() {
      let { register: e, onExitComplete: o } = this.node.presenceContext || {};
      (o && o(this.id), e && (this.unmount = e(this.id)));
    }
    unmount() {}
  };
var yo = { animation: { Feature: Hi }, exit: { Feature: $i } };
function fe(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
var cl = (t) => (e) => oo(e) && t(e, fe(e));
function pe(t, e, o, r) {
  return Dt(t, e, cl(o), r);
}
var Xi = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
var ul = (t, e) => Math.abs(t - e);
function ml(t, e) {
  let o = ul(t.x, e.x),
    r = ul(t.y, e.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
var um = new Set(["auto", "scroll"]),
  nr = class {
    constructor(
      e,
      o,
      {
        transformPagePoint: r,
        contextWindow: n = window,
        dragSnapToOrigin: s = !1,
        distanceThreshold: i = 3,
        element: a,
      } = {}
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.lastRawMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.scrollPositions = new Map()),
        (this.removeScrollListeners = null),
        (this.onElementScroll = (p) => {
          this.handleScroll(p.target);
        }),
        (this.onWindowScroll = () => {
          this.handleScroll(window);
        }),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          this.lastRawMoveEventInfo &&
            (this.lastMoveEventInfo = Yi(this.lastRawMoveEventInfo, this.transformPagePoint));
          let p = fl(this.lastMoveEventInfo, this.history),
            d = this.startEvent !== null,
            h = ml(p.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!d && !h) return;
          let { point: g } = p,
            { timestamp: y } = G;
          this.history.push({ ...g, timestamp: y });
          let { onStart: x, onMove: v } = this.handlers;
          (d || (x && x(this.lastMoveEvent, p), (this.startEvent = this.lastMoveEvent)),
            v && v(this.lastMoveEvent, p));
        }),
        (this.handlePointerMove = (p, d) => {
          ((this.lastMoveEvent = p),
            (this.lastRawMoveEventInfo = d),
            (this.lastMoveEventInfo = Yi(d, this.transformPagePoint)),
            S.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (p, d) => {
          this.end();
          let { onEnd: h, onSessionEnd: g, resumeAnimation: y } = this.handlers;
          if (
            ((this.dragSnapToOrigin || !this.startEvent) && y && y(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let x = fl(
            p.type === "pointercancel" ? this.lastMoveEventInfo : Yi(d, this.transformPagePoint),
            this.history
          );
          (this.startEvent && h && h(p, x), g && g(p, x));
        }),
        !oo(e))
      )
        return;
      ((this.dragSnapToOrigin = s),
        (this.handlers = o),
        (this.transformPagePoint = r),
        (this.distanceThreshold = i),
        (this.contextWindow = n || window));
      let l = fe(e),
        c = Yi(l, this.transformPagePoint),
        { point: u } = c,
        { timestamp: m } = G;
      this.history = [{ ...u, timestamp: m }];
      let { onSessionStart: f } = o;
      (f && f(e, fl(c, this.history)),
        (this.removeListeners = Lt(
          pe(this.contextWindow, "pointermove", this.handlePointerMove),
          pe(this.contextWindow, "pointerup", this.handlePointerUp),
          pe(this.contextWindow, "pointercancel", this.handlePointerUp)
        )),
        a && this.startScrollTracking(a));
    }
    startScrollTracking(e) {
      let o = e.parentElement;
      for (; o; ) {
        let r = getComputedStyle(o);
        ((um.has(r.overflowX) || um.has(r.overflowY)) &&
          this.scrollPositions.set(o, { x: o.scrollLeft, y: o.scrollTop }),
          (o = o.parentElement));
      }
      (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
        window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
        window.addEventListener("scroll", this.onWindowScroll),
        (this.removeScrollListeners = () => {
          (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
            window.removeEventListener("scroll", this.onWindowScroll));
        }));
    }
    handleScroll(e) {
      let o = this.scrollPositions.get(e);
      if (!o) return;
      let r = e === window,
        n = r ? { x: window.scrollX, y: window.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
        s = { x: n.x - o.x, y: n.y - o.y };
      (s.x === 0 && s.y === 0) ||
        (r
          ? this.lastMoveEventInfo &&
            ((this.lastMoveEventInfo.point.x += s.x), (this.lastMoveEventInfo.point.y += s.y))
          : this.history.length > 0 && ((this.history[0].x -= s.x), (this.history[0].y -= s.y)),
        this.scrollPositions.set(e, n),
        S.update(this.updatePoint, !0));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      (this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        B(this.updatePoint));
    }
  };
function Yi(t, e) {
  return e ? { point: e(t.point) } : t;
}
function mm(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function fl({ point: t }, e) {
  return { point: t, delta: mm(t, fm(e)), offset: mm(t, Wh(e)), velocity: Gh(e, 0.1) };
}
function Wh(t) {
  return t[0];
}
function fm(t) {
  return t[t.length - 1];
}
function Gh(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let o = t.length - 1,
    r = null,
    n = fm(t);
  for (; o >= 0 && ((r = t[o]), !(n.timestamp - r.timestamp > k(e))); ) o--;
  if (!r) return { x: 0, y: 0 };
  r === t[0] && t.length > 2 && n.timestamp - r.timestamp > k(e) * 2 && (r = t[1]);
  let s = ot(n.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  let i = { x: (n.x - r.x) / s, y: (n.y - r.y) / s };
  return (i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i);
}
function ym(t, { min: e, max: o }, r) {
  return (
    e !== void 0 && t < e
      ? (t = r ? R(e, t, r.min) : Math.max(t, e))
      : o !== void 0 && t > o && (t = r ? R(o, t, r.max) : Math.min(t, o)),
    t
  );
}
function pm(t, e, o) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: o !== void 0 ? t.max + o - (t.max - t.min) : void 0,
  };
}
function xm(t, { top: e, left: o, bottom: r, right: n }) {
  return { x: pm(t.x, o, n), y: pm(t.y, e, r) };
}
function dm(t, e) {
  let o = e.min - t.min,
    r = e.max - t.max;
  return (e.max - e.min < t.max - t.min && ([o, r] = [r, o]), { min: o, max: r });
}
function vm(t, e) {
  return { x: dm(t.x, e.x), y: dm(t.y, e.y) };
}
function Tm(t, e) {
  let o = 0.5,
    r = _(t),
    n = _(e);
  return (
    n > r ? (o = pt(e.min, e.max - r, t.min)) : r > n && (o = pt(t.min, t.max - n, e.min)),
    H(0, 1, o)
  );
}
function Sm(t, e) {
  let o = {};
  return (
    e.min !== void 0 && (o.min = e.min - t.min),
    e.max !== void 0 && (o.max = e.max - t.min),
    o
  );
}
var _i = 0.35;
function wm(t = _i) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = _i),
    { x: hm(t, "left", "right"), y: hm(t, "top", "bottom") }
  );
}
function hm(t, e, o) {
  return { min: gm(t, e), max: gm(t, o) };
}
function gm(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
var Uh = new WeakMap(),
  Zi = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = O()),
        (this.latestPointerEvent = null),
        (this.latestPanInfo = null),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let s = (m) => {
          (o && this.snapToCursor(fe(m).point), this.stopAnimation());
        },
        i = (m, f) => {
          let { drag: p, dragPropagation: d, onDragStart: h } = this.getProps();
          if (
            p &&
            !d &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = ca(p)),
            !this.openDragLock)
          )
            return;
          ((this.latestPointerEvent = m),
            (this.latestPanInfo = f),
            (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            At((y) => {
              let x = this.getAxisMotionValue(y).get() || 0;
              if (nt.test(x)) {
                let { projection: v } = this.visualElement;
                if (v && v.layout) {
                  let T = v.layout.layoutBox[y];
                  T && (x = _(T) * (parseFloat(x) / 100));
                }
              }
              this.originPoint[y] = x;
            }),
            h && S.update(() => h(m, f), !1, !0),
            No(this.visualElement, "transform"));
          let { animationState: g } = this.visualElement;
          g && g.setActive("whileDrag", !0);
        },
        a = (m, f) => {
          ((this.latestPointerEvent = m), (this.latestPanInfo = f));
          let {
            dragPropagation: p,
            dragDirectionLock: d,
            onDirectionLock: h,
            onDrag: g,
          } = this.getProps();
          if (!p && !this.openDragLock) return;
          let { offset: y } = f;
          if (d && this.currentDirection === null) {
            ((this.currentDirection = Kh(y)),
              this.currentDirection !== null && h && h(this.currentDirection));
            return;
          }
          (this.updateAxis("x", f.point, y),
            this.updateAxis("y", f.point, y),
            this.visualElement.render(),
            g && S.update(() => g(m, f), !1, !0));
        },
        l = (m, f) => {
          ((this.latestPointerEvent = m),
            (this.latestPanInfo = f),
            this.stop(m, f),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null));
        },
        c = () => {
          let { dragSnapToOrigin: m } = this.getProps();
          (m || this.constraints) && this.startAnimation({ x: 0, y: 0 });
        },
        { dragSnapToOrigin: u } = this.getProps();
      this.panSession = new nr(
        e,
        { onSessionStart: s, onStart: i, onMove: a, onSessionEnd: l, resumeAnimation: c },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: u,
          distanceThreshold: r,
          contextWindow: Xi(this.visualElement),
          element: this.visualElement.current,
        }
      );
    }
    stop(e, o) {
      let r = e || this.latestPointerEvent,
        n = o || this.latestPanInfo,
        s = this.isDragging;
      if ((this.cancel(), !s || !n || !r)) return;
      let { velocity: i } = n;
      this.startAnimation(i);
      let { onDragEnd: a } = this.getProps();
      a && S.postRender(() => a(r, n));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: o } = this.visualElement;
      (e && (e.isAnimationBlocked = !1), this.endPanSession());
      let { dragPropagation: r } = this.getProps();
      (!r && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
        o && o.setActive("whileDrag", !1));
    }
    endPanSession() {
      (this.panSession && this.panSession.end(), (this.panSession = void 0));
    }
    updateAxis(e, o, r) {
      let { drag: n } = this.getProps();
      if (!r || !qi(e, n, this.currentDirection)) return;
      let s = this.getAxisMotionValue(e),
        i = this.originPoint[e] + r[e];
      (this.constraints && this.constraints[e] && (i = ym(i, this.constraints[e], this.elastic[e])),
        s.set(i));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: o } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        n = this.constraints;
      (e && Re(e)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : e && r
          ? (this.constraints = xm(r.layoutBox, e))
          : (this.constraints = !1),
        (this.elastic = wm(o)),
        n !== this.constraints &&
          !Re(e) &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          At((s) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(s) &&
              (this.constraints[s] = Sm(r.layoutBox[s], this.constraints[s]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: o } = this.getProps();
      if (!e || !Re(e)) return !1;
      let r = e.current;
      W(
        r !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
        "drag-constraints-ref"
      );
      let { projection: n } = this.visualElement;
      if (!n || !n.layout) return !1;
      n.root && ((n.root.scroll = void 0), n.root.updateScroll());
      let s = ka(r, n.root, this.visualElement.getTransformPagePoint()),
        i = vm(n.layout.layoutBox, s);
      if (o) {
        let a = o(Ea(i));
        ((this.hasMutatedConstraints = !!a), a && (i = xn(a)));
      }
      return i;
    }
    startAnimation(e) {
      let {
          drag: o,
          dragMomentum: r,
          dragElastic: n,
          dragTransition: s,
          dragSnapToOrigin: i,
          onDragTransitionEnd: a,
        } = this.getProps(),
        l = this.constraints || {},
        c = At((u) => {
          if (!qi(u, o, this.currentDirection)) return;
          let m = (l && l[u]) || {};
          (i === !0 || i === u) && (m = { min: 0, max: 0 });
          let f = n ? 200 : 1e6,
            p = n ? 40 : 1e7,
            d = {
              type: "inertia",
              velocity: r ? e[u] : 0,
              bounceStiffness: f,
              bounceDamping: p,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...s,
              ...m,
            };
          return this.startAxisValueAnimation(u, d);
        });
      return Promise.all(c).then(a);
    }
    startAxisValueAnimation(e, o) {
      let r = this.getAxisMotionValue(e);
      return (No(this.visualElement, e), r.start(Ze(e, r, 0, o, this.visualElement, !1)));
    }
    stopAnimation() {
      At((e) => this.getAxisMotionValue(e).stop());
    }
    getAxisMotionValue(e) {
      let o = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps()[o];
      return n || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
    }
    snapToCursor(e) {
      At((o) => {
        let { drag: r } = this.getProps();
        if (!qi(o, r, this.currentDirection)) return;
        let { projection: n } = this.visualElement,
          s = this.getAxisMotionValue(o);
        if (n && n.layout) {
          let { min: i, max: a } = n.layout.layoutBox[o],
            l = s.get() || 0;
          s.set(e[o] - R(i, a, 0.5) + l);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: o } = this.getProps(),
        { projection: r } = this.visualElement;
      if (!Re(o) || !r || !this.constraints) return;
      this.stopAnimation();
      let n = { x: 0, y: 0 };
      At((i) => {
        let a = this.getAxisMotionValue(i);
        if (a && this.constraints !== !1) {
          let l = a.get();
          n[i] = Tm({ min: l, max: l }, this.constraints[i]);
        }
      });
      let { transformTemplate: s } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        (this.constraints = !1),
        this.resolveConstraints(),
        At((i) => {
          if (!qi(i, e, null)) return;
          let a = this.getAxisMotionValue(i),
            { min: l, max: c } = this.constraints[i];
          a.set(R(l, c, n[i]));
        }),
        this.visualElement.render());
    }
    addListeners() {
      if (!this.visualElement.current) return;
      Uh.set(this.visualElement, this);
      let e = this.visualElement.current,
        o = pe(e, "pointerdown", (c) => {
          let { drag: u, dragListener: m = !0 } = this.getProps(),
            f = c.target,
            p = f !== e && fa(f);
          u && m && !p && this.start(c);
        }),
        r,
        n = () => {
          let { dragConstraints: c } = this.getProps();
          Re(c) &&
            c.current &&
            ((this.constraints = this.resolveRefConstraints()),
            r || (r = zh(e, c.current, () => this.scalePositionWithinConstraints())));
        },
        { projection: s } = this.visualElement,
        i = s.addEventListener("measure", n);
      (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), S.read(n));
      let a = Dt(window, "resize", () => this.scalePositionWithinConstraints()),
        l = s.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (At((m) => {
              let f = this.getAxisMotionValue(m);
              f && ((this.originPoint[m] += c[m].translate), f.set(f.get() + c[m].translate));
            }),
            this.visualElement.render());
        });
      return () => {
        (a(), o(), i(), l && l(), r && r());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: o = !1,
          dragDirectionLock: r = !1,
          dragPropagation: n = !1,
          dragConstraints: s = !1,
          dragElastic: i = _i,
          dragMomentum: a = !0,
        } = e;
      return {
        ...e,
        drag: o,
        dragDirectionLock: r,
        dragPropagation: n,
        dragConstraints: s,
        dragElastic: i,
        dragMomentum: a,
      };
    }
  };
function Vm(t) {
  let e = !0;
  return () => {
    if (e) {
      e = !1;
      return;
    }
    t();
  };
}
function zh(t, e, o) {
  let r = Ko(t, Vm(o)),
    n = Ko(e, Vm(o));
  return () => {
    (r(), n());
  };
}
function qi(t, e, o) {
  return (e === !0 || e === t) && (o === null || o === t);
}
function Kh(t, e = 10) {
  let o = null;
  return (Math.abs(t.y) > e ? (o = "y") : Math.abs(t.x) > e && (o = "x"), o);
}
var Ji = class extends tt {
  constructor(e) {
    (super(e),
      (this.removeGroupControls = F),
      (this.removeListeners = F),
      (this.controls = new Zi(e)));
  }
  mount() {
    let { dragControls: e } = this.node.getProps();
    (e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || F));
  }
  update() {
    let { dragControls: e } = this.node.getProps(),
      { dragControls: o } = this.node.prevProps || {};
    e !== o &&
      (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
};
var pl = (t) => (e, o) => {
    t && S.update(() => t(e, o), !1, !0);
  },
  Qi = class extends tt {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = F));
    }
    onPointerDown(e) {
      this.session = new nr(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Xi(this.node),
      });
    }
    createPanHandlers() {
      let { onPanSessionStart: e, onPanStart: o, onPan: r, onPanEnd: n } = this.node.getProps();
      return {
        onSessionStart: pl(e),
        onStart: pl(o),
        onMove: pl(r),
        onEnd: (s, i) => {
          (delete this.session, n && S.postRender(() => n(s, i)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = pe(this.node.current, "pointerdown", (e) =>
        this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  };
var bm = V(Gt(), 1);
var On = V(C(), 1);
var de = V(C(), 1);
function Bn(t = !0) {
  let e = (0, de.useContext)(Rt);
  if (e === null) return [!0, null];
  let { isPresent: o, onExitComplete: r, register: n } = e,
    s = (0, de.useId)();
  (0, de.useEffect)(() => {
    if (t) return n(s);
  }, [t]);
  let i = (0, de.useCallback)(() => t && r && r(s), [s, r, t]);
  return !o && r ? [!1, i] : [!0];
}
function Hh() {
  return $h((0, de.useContext)(Rt));
}
function $h(t) {
  return t === null ? !0 : t.isPresent;
}
var dl = !1,
  hl = class extends On.Component {
    componentDidMount() {
      let { visualElement: e, layoutGroup: o, switchLayoutGroup: r, layoutId: n } = this.props,
        { projection: s } = e;
      (s &&
        (o.group && o.group.add(s),
        r && r.register && n && r.register(s),
        dl && s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          layoutDependency: this.props.layoutDependency,
          onExitComplete: () => this.safeToRemove(),
        })),
        (mo.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let { layoutDependency: o, visualElement: r, drag: n, isPresent: s } = this.props,
        { projection: i } = r;
      return (
        i &&
          ((i.isPresent = s),
          e.layoutDependency !== o && i.setOptions({ ...i.options, layoutDependency: o }),
          (dl = !0),
          n || e.layoutDependency !== o || o === void 0 || e.isPresent !== s
            ? i.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== s &&
            (s
              ? i.promote()
              : i.relegate() ||
                S.postRender(() => {
                  let a = i.getStack();
                  (!a || !a.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { visualElement: e, layoutAnchor: o } = this.props,
        { projection: r } = e;
      r &&
        ((r.options.layoutAnchor = o),
        r.root.didUpdate(),
        wt.postRender(() => {
          !r.currentAnimation && r.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let { visualElement: e, layoutGroup: o, switchLayoutGroup: r } = this.props,
        { projection: n } = e;
      ((dl = !0),
        n &&
          (n.scheduleCheckAfterUnmount(),
          o && o.group && o.group.remove(n),
          r && r.deregister && r.deregister(n)));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function ts(t) {
  let [e, o] = Bn(),
    r = (0, On.useContext)(me);
  return (0, bm.jsx)(hl, {
    ...t,
    layoutGroup: r,
    switchLayoutGroup: (0, On.useContext)(kn),
    isPresent: e,
    safeToRemove: o,
  });
}
var es = { pan: { Feature: Qi }, drag: { Feature: Ji, ProjectionNode: po, MeasureLayout: ts } };
function Am(t, e, o) {
  let { props: r } = t;
  t.animationState && r.whileHover && t.animationState.setActive("whileHover", o === "Start");
  let n = "onHover" + o,
    s = r[n];
  s && S.postRender(() => s(e, fe(e)));
}
var os = class extends tt {
  mount() {
    let { current: e } = this.node;
    e &&
      (this.unmount = ua(e, (o, r) => (Am(this.node, r, "Start"), (n) => Am(this.node, n, "End"))));
  }
  unmount() {}
};
var rs = class extends tt {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Lt(
      Dt(this.node.current, "focus", () => this.onFocus()),
      Dt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
};
function Pm(t, e, o) {
  let { props: r } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState && r.whileTap && t.animationState.setActive("whileTap", o === "Start");
  let n = "onTap" + (o === "End" ? "" : o),
    s = r[n];
  s && S.postRender(() => s(e, fe(e)));
}
var ns = class extends tt {
  mount() {
    let { current: e } = this.node;
    if (!e) return;
    let { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = da(
      e,
      (n, s) => (
        Pm(this.node, s, "Start"),
        (i, { success: a }) => Pm(this.node, i, a ? "End" : "Cancel")
      ),
      { useGlobalTarget: o, stopPropagation: r?.tap === !1 }
    );
  }
  unmount() {}
};
var yl = new WeakMap(),
  gl = new WeakMap(),
  Xh = (t) => {
    let e = yl.get(t.target);
    e && e(t);
  },
  Yh = (t) => {
    t.forEach(Xh);
  };
function _h({ root: t, ...e }) {
  let o = t || document;
  gl.has(o) || gl.set(o, {});
  let r = gl.get(o),
    n = JSON.stringify(e);
  return (r[n] || (r[n] = new IntersectionObserver(Yh, { root: t, ...e })), r[n]);
}
function Cm(t, e, o) {
  let r = _h(e);
  return (
    yl.set(t, o),
    r.observe(t),
    () => {
      (yl.delete(t), r.unobserve(t));
    }
  );
}
var qh = { some: 0, all: 1 },
  is = class extends tt {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.stopObserver?.();
      let { viewport: e = {} } = this.node.getProps(),
        { root: o, margin: r, amount: n = "some", once: s } = e,
        i = {
          root: o ? o.current : void 0,
          rootMargin: r,
          threshold: typeof n == "number" ? n : qh[n],
        },
        a = (l) => {
          let { isIntersecting: c } = l;
          if (this.isInView === c || ((this.isInView = c), s && !c && this.hasEnteredView)) return;
          (c && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", c));
          let { onViewportEnter: u, onViewportLeave: m } = this.node.getProps(),
            f = c ? u : m;
          f && f(l);
        };
      this.stopObserver = Cm(this.node.current, i, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: e, prevProps: o } = this.node;
      ["amount", "margin", "root"].some(Zh(e, o)) && this.startObserver();
    }
    unmount() {
      (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
    }
  };
function Zh({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (o) => t[o] !== e[o];
}
var ss = {
  inView: { Feature: is },
  tap: { Feature: ns },
  focus: { Feature: rs },
  hover: { Feature: os },
};
var as = { layout: { ProjectionNode: po, MeasureLayout: ts } };
var Em = { ...yo, ...ss, ...es, ...as };
var Fn = Ki(Em, Zo);
var Wn = V(Gt(), 1),
  jt = V(C(), 1);
var Sl = V(Gt(), 1),
  Lm = V(C(), 1),
  jn = V(C(), 1);
var Rm = V(Gt(), 1);
var ls = V(C(), 1),
  he = V(C(), 1);
var Dm = V(C(), 1);
function Mm(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
function Jh(...t) {
  return (e) => {
    let o = !1,
      r = t.map((n) => {
        let s = Mm(n, e);
        return (!o && typeof s == "function" && (o = !0), s);
      });
    if (o)
      return () => {
        for (let n = 0; n < r.length; n++) {
          let s = r[n];
          typeof s == "function" ? s() : Mm(t[n], null);
        }
      };
  };
}
function xl(...t) {
  return Dm.useCallback(Jh(...t), t);
}
var vl = class extends ls.Component {
  getSnapshotBeforeUpdate(e) {
    let o = this.props.childRef.current;
    if (Ot(o) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      let r = o.offsetParent,
        n = (Ot(r) && r.offsetWidth) || 0,
        s = (Ot(r) && r.offsetHeight) || 0,
        i = getComputedStyle(o),
        a = this.props.sizeRef.current;
      ((a.height = parseFloat(i.height)),
        (a.width = parseFloat(i.width)),
        (a.top = o.offsetTop),
        (a.left = o.offsetLeft),
        (a.right = n - a.width - a.left),
        (a.bottom = s - a.height - a.top),
        (a.direction = i.direction));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function Tl({ children: t, isPresent: e, anchorX: o, anchorY: r, root: n, pop: s }) {
  let i = (0, he.useId)(),
    a = (0, he.useRef)(null),
    l = (0, he.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: "ltr",
    }),
    { nonce: c } = (0, he.useContext)(J),
    u = t.props?.ref ?? t?.ref,
    m = xl(a, u);
  return (
    (0, he.useInsertionEffect)(() => {
      let { width: f, height: p, top: d, left: h, right: g, bottom: y, direction: x } = l.current;
      if (e || s === !1 || !a.current || !f || !p) return;
      let v = x === "rtl",
        T = o === "left" ? (v ? `right: ${g}` : `left: ${h}`) : v ? `left: ${h}` : `right: ${g}`,
        b = r === "bottom" ? `bottom: ${y}` : `top: ${d}`;
      a.current.dataset.motionPopId = i;
      let D = document.createElement("style");
      c && (D.nonce = c);
      let j = n ?? document.head;
      return (
        j.appendChild(D),
        D.sheet &&
          D.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            ${T}px !important;
            ${b}px !important;
          }
        `),
        () => {
          (a.current?.removeAttribute("data-motion-pop-id"), j.contains(D) && j.removeChild(D));
        }
      );
    }, [e]),
    (0, Rm.jsx)(vl, {
      isPresent: e,
      childRef: a,
      sizeRef: l,
      pop: s,
      children: s === !1 ? t : ls.cloneElement(t, { ref: m }),
    })
  );
}
var wl = ({
  children: t,
  initial: e,
  isPresent: o,
  onExitComplete: r,
  custom: n,
  presenceAffectsLayout: s,
  mode: i,
  anchorX: a,
  anchorY: l,
  root: c,
}) => {
  let u = I(Qh),
    m = (0, jn.useId)(),
    f = !0,
    p = (0, jn.useMemo)(
      () => (
        (f = !1),
        {
          id: m,
          initial: e,
          isPresent: o,
          custom: n,
          onExitComplete: (d) => {
            u.set(d, !0);
            for (let h of u.values()) if (!h) return;
            r && r();
          },
          register: (d) => (u.set(d, !1), () => u.delete(d)),
        }
      ),
      [o, u, r]
    );
  return (
    s && f && (p = { ...p }),
    (0, jn.useMemo)(() => {
      u.forEach((d, h) => u.set(h, !1));
    }, [o]),
    Lm.useEffect(() => {
      !o && !u.size && r && r();
    }, [o]),
    (t = (0, Sl.jsx)(Tl, {
      pop: i === "popLayout",
      isPresent: o,
      anchorX: a,
      anchorY: l,
      root: c,
      children: t,
    })),
    (0, Sl.jsx)(Rt.Provider, { value: p, children: t })
  );
};
function Qh() {
  return new Map();
}
var cs = V(C(), 1),
  Nn = (t) => t.key || "";
function Vl(t) {
  let e = [];
  return (
    cs.Children.forEach(t, (o) => {
      (0, cs.isValidElement)(o) && e.push(o);
    }),
    e
  );
}
var tg = ({
  children: t,
  custom: e,
  initial: o = !0,
  onExitComplete: r,
  presenceAffectsLayout: n = !0,
  mode: s = "sync",
  propagate: i = !1,
  anchorX: a = "left",
  anchorY: l = "top",
  root: c,
}) => {
  let [u, m] = Bn(i),
    f = (0, jt.useMemo)(() => Vl(t), [t]),
    p = i && !u ? [] : f.map(Nn),
    d = (0, jt.useRef)(!0),
    h = (0, jt.useRef)(f),
    g = I(() => new Map()),
    y = (0, jt.useRef)(new Set()),
    [x, v] = (0, jt.useState)(f),
    [T, b] = (0, jt.useState)(f);
  Pt(() => {
    ((d.current = !1), (h.current = f));
    for (let E = 0; E < T.length; E++) {
      let A = Nn(T[E]);
      p.includes(A) ? (g.delete(A), y.current.delete(A)) : g.get(A) !== !0 && g.set(A, !1);
    }
  }, [T, p.length, p.join("-")]);
  let D = [];
  if (f !== x) {
    let E = [...f];
    for (let A = 0; A < T.length; A++) {
      let P = T[A],
        L = Nn(P);
      p.includes(L) || (E.splice(A, 0, P), D.push(P));
    }
    return (s === "wait" && D.length && (E = D), b(Vl(E)), v(f), null);
  }
  let { forceRender: j } = (0, jt.useContext)(me);
  return (0, Wn.jsx)(Wn.Fragment, {
    children: T.map((E) => {
      let A = Nn(E),
        P = i && !u ? !1 : f === T || p.includes(A),
        L = () => {
          if (y.current.has(A)) return;
          if (g.has(A)) (y.current.add(A), g.set(A, !0));
          else return;
          let X = !0;
          (g.forEach((et) => {
            et || (X = !1);
          }),
            X && (j?.(), b(h.current), i && m?.(), r && r()));
        };
      return (0, Wn.jsx)(
        wl,
        {
          isPresent: P,
          initial: !d.current || o ? void 0 : !1,
          custom: e,
          presenceAffectsLayout: n,
          mode: s,
          root: c,
          onExitComplete: P ? void 0 : L,
          anchorX: a,
          anchorY: l,
          children: E,
        },
        A
      );
    }),
  });
};
var Om = V(Gt(), 1),
  xo = V(C(), 1);
var Im = V(C(), 1),
  bl = (0, Im.createContext)(null);
var Gn = V(C(), 1);
var km = V(C(), 1);
function Bm() {
  let t = (0, km.useRef)(!1);
  return (
    Pt(
      () => (
        (t.current = !0),
        () => {
          t.current = !1;
        }
      ),
      []
    ),
    t
  );
}
function Un() {
  let t = Bm(),
    [e, o] = (0, Gn.useState)(0),
    r = (0, Gn.useCallback)(() => {
      t.current && o(e + 1);
    }, [e]);
  return [(0, Gn.useCallback)(() => S.postRender(r), [r]), e];
}
var Fm = (t) => t === !0,
  eg = (t) => Fm(t === !0) || t === "id",
  og = ({ children: t, id: e, inherit: o = !0 }) => {
    let r = (0, xo.useContext)(me),
      n = (0, xo.useContext)(bl),
      [s, i] = Un(),
      a = (0, xo.useRef)(null),
      l = r.id || n;
    a.current === null &&
      (eg(o) && l && (e = e ? l + "-" + e : l),
      (a.current = { id: e, group: Fm(o) ? r.group || Fi() : Fi() }));
    let c = (0, xo.useMemo)(() => ({ ...a.current, forceRender: s }), [i]);
    return (0, Om.jsx)(me.Provider, { value: c, children: t });
  };
var jm = V(Gt(), 1),
  ir = V(C(), 1);
function rg({ children: t, features: e, strict: o = !1 }) {
  let [, r] = (0, ir.useState)(!Al(e)),
    n = (0, ir.useRef)(void 0);
  if (!Al(e)) {
    let { renderer: s, ...i } = e;
    ((n.current = s), In(i));
  }
  return (
    (0, ir.useEffect)(() => {
      Al(e) &&
        e().then(({ renderer: s, ...i }) => {
          (In(i), (n.current = s), r(!0));
        });
    }, []),
    (0, jm.jsx)(Jo.Provider, { value: { renderer: n.current, strict: o }, children: t })
  );
}
function Al(t) {
  return typeof t == "function";
}
var Nm = V(Gt(), 1),
  us = V(C(), 1);
function ng({ children: t, isValidProp: e, ...o }) {
  e && il(e);
  let r = (0, us.useContext)(J);
  ((o = { ...r, ...o }),
    (o.transition = qe(o.transition, r.transition)),
    (o.isStatic = I(() => o.isStatic)));
  let n = (0, us.useMemo)(
    () => o,
    [JSON.stringify(o.transition), o.transformPagePoint, o.reducedMotion, o.skipAnimations]
  );
  return (0, Nm.jsx)(J.Provider, { value: n, children: t });
}
var ig = Ki();
var Wm = V(C(), 1);
function zn(t) {
  return (0, Wm.useEffect)(() => () => t(), []);
}
var Pl = { renderer: Zo, ...yo, ...ss };
var sg = { ...Pl, ...es, ...as };
var ag = { renderer: Zo, ...yo };
var Gm = V(C(), 1);
function Cl(t, e, o) {
  (0, Gm.useInsertionEffect)(() => t.on(e, o), [t, e, o]);
}
var To = V(C(), 1);
function sr(t) {
  return typeof window > "u" ? !1 : t ? Xr() : $e();
}
var lg = 50,
  Um = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  Km = () => ({ time: 0, x: Um(), y: Um() }),
  cg = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
function zm(t, e, o, r) {
  let n = o[e],
    { length: s, position: i } = cg[e],
    a = n.current,
    l = o.time;
  ((n.current = Math.abs(t[`scroll${i}`])),
    (n.scrollLength = t[`scroll${s}`] - t[`client${s}`]),
    (n.offset.length = 0),
    (n.offset[0] = 0),
    (n.offset[1] = n.scrollLength),
    (n.progress = pt(0, n.scrollLength, n.current)));
  let c = r - l;
  n.velocity = c > lg ? 0 : ke(n.current - a, c);
}
function Hm(t, e, o) {
  (zm(t, "x", e, o), zm(t, "y", e, o), (e.time = o));
}
function $m(t, e) {
  let o = { x: 0, y: 0 },
    r = t;
  for (; r && r !== e; )
    if (Ot(r)) ((o.x += r.offsetLeft), (o.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === "svg") {
      let n = r.getBoundingClientRect();
      r = r.parentElement;
      let s = r.getBoundingClientRect();
      ((o.x += n.left - s.left), (o.y += n.top - s.top));
    } else if (r instanceof SVGGraphicsElement) {
      let { x: n, y: s } = r.getBBox();
      ((o.x += n), (o.y += s));
      let i = null,
        a = r.parentNode;
      for (; !i; ) (a.tagName === "svg" && (i = a), (a = r.parentNode));
      r = i;
    } else break;
  return o;
}
var ms = { start: 0, center: 0.5, end: 1 };
function El(t, e, o = 0) {
  let r = 0;
  if ((t in ms && (t = ms[t]), typeof t == "string")) {
    let n = parseFloat(t);
    t.endsWith("px")
      ? (r = n)
      : t.endsWith("%")
        ? (t = n / 100)
        : t.endsWith("vw")
          ? (r = (n / 100) * document.documentElement.clientWidth)
          : t.endsWith("vh")
            ? (r = (n / 100) * document.documentElement.clientHeight)
            : (t = n);
  }
  return (typeof t == "number" && (r = e * t), o + r);
}
var ug = [0, 0];
function Xm(t, e, o, r) {
  let n = Array.isArray(t) ? t : ug,
    s = 0,
    i = 0;
  return (
    typeof t == "number"
      ? (n = [t, t])
      : typeof t == "string" &&
        ((t = t.trim()), t.includes(" ") ? (n = t.split(" ")) : (n = [t, ms[t] ? t : "0"])),
    (s = El(n[0], o, r)),
    (i = El(n[1], e)),
    s - i
  );
}
var vo = {
  Enter: [
    [0, 1],
    [1, 1],
  ],
  Exit: [
    [0, 0],
    [1, 0],
  ],
  Any: [
    [1, 0],
    [0, 1],
  ],
  All: [
    [0, 0],
    [1, 1],
  ],
};
var mg = { x: 0, y: 0 };
function fg(t) {
  return "getBBox" in t && t.tagName !== "svg"
    ? t.getBBox()
    : { width: t.clientWidth, height: t.clientHeight };
}
function Ym(t, e, o) {
  let { offset: r = vo.All } = o,
    { target: n = t, axis: s = "y" } = o,
    i = s === "y" ? "height" : "width",
    a = n !== t ? $m(n, t) : mg,
    l = n === t ? { width: t.scrollWidth, height: t.scrollHeight } : fg(n),
    c = { width: t.clientWidth, height: t.clientHeight };
  e[s].offset.length = 0;
  let u = !e[s].interpolate,
    m = r.length;
  for (let f = 0; f < m; f++) {
    let p = Xm(r[f], c[i], l[i], a[s]);
    (!u && p !== e[s].interpolatorOffsets[f] && (u = !0), (e[s].offset[f] = p));
  }
  (u &&
    ((e[s].interpolate = Ue(e[s].offset, ze(r), { clamp: !1 })),
    (e[s].interpolatorOffsets = [...e[s].offset])),
    (e[s].progress = H(0, 1, e[s].interpolate(e[s].current))));
}
function pg(t, e = t, o) {
  if (((o.x.targetOffset = 0), (o.y.targetOffset = 0), e !== t)) {
    let r = e;
    for (; r && r !== t; )
      ((o.x.targetOffset += r.offsetLeft), (o.y.targetOffset += r.offsetTop), (r = r.offsetParent));
  }
  ((o.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
    (o.y.targetLength = e === t ? e.scrollHeight : e.clientHeight),
    (o.x.containerLength = t.clientWidth),
    (o.y.containerLength = t.clientHeight));
}
function _m(t, e, o, r = {}) {
  return {
    measure: (n) => {
      (pg(t, r.target, o), Hm(t, o, n), (r.offset || r.target) && Ym(t, o, r));
    },
    notify: () => e(o),
  };
}
var ar = new WeakMap(),
  qm = new WeakMap(),
  Ml = new WeakMap(),
  Zm = new WeakMap(),
  fs = new WeakMap(),
  Jm = (t) => (t === document.scrollingElement ? window : t);
function Kn(t, { container: e = document.scrollingElement, trackContentSize: o = !1, ...r } = {}) {
  if (!e) return F;
  let n = Ml.get(e);
  n || ((n = new Set()), Ml.set(e, n));
  let s = Km(),
    i = _m(e, t, s, r);
  if ((n.add(i), !ar.has(e))) {
    let l = () => {
        for (let f of n) f.measure(G.timestamp);
        S.preUpdate(c);
      },
      c = () => {
        for (let f of n) f.notify();
      },
      u = () => S.read(l);
    ar.set(e, u);
    let m = Jm(e);
    (window.addEventListener("resize", u),
      e !== document.documentElement && qm.set(e, Ko(e, u)),
      m.addEventListener("scroll", u),
      u());
  }
  if (o && !fs.has(e)) {
    let l = ar.get(e),
      c = { width: e.scrollWidth, height: e.scrollHeight };
    Zm.set(e, c);
    let u = () => {
        let f = e.scrollWidth,
          p = e.scrollHeight;
        (c.width !== f || c.height !== p) && (l(), (c.width = f), (c.height = p));
      },
      m = S.read(u, !0);
    fs.set(e, m);
  }
  let a = ar.get(e);
  return (
    S.read(a, !1, !0),
    () => {
      B(a);
      let l = Ml.get(e);
      if (!l || (l.delete(i), l.size)) return;
      let c = ar.get(e);
      (ar.delete(e),
        c &&
          (Jm(e).removeEventListener("scroll", c),
          qm.get(e)?.(),
          window.removeEventListener("resize", c)));
      let u = fs.get(e);
      (u && (B(u), fs.delete(e)), Zm.delete(e));
    }
  );
}
var dg = [
    [vo.Enter, "entry"],
    [vo.Exit, "exit"],
    [vo.Any, "cover"],
    [vo.All, "contain"],
  ],
  Qm = { start: 0, end: 1 };
function hg(t) {
  let e = t.trim().split(/\s+/);
  if (e.length !== 2) return;
  let o = Qm[e[0]],
    r = Qm[e[1]];
  if (!(o === void 0 || r === void 0)) return [o, r];
}
function gg(t) {
  if (t.length !== 2) return;
  let e = [];
  for (let o of t)
    if (Array.isArray(o)) e.push(o);
    else if (typeof o == "string") {
      let r = hg(o);
      if (!r) return;
      e.push(r);
    } else return;
  return e;
}
function yg(t, e) {
  let o = gg(t);
  if (!o) return !1;
  for (let r = 0; r < 2; r++) {
    let n = o[r],
      s = e[r];
    if (n[0] !== s[0] || n[1] !== s[1]) return !1;
  }
  return !0;
}
function lr(t) {
  if (!t) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (let [e, o] of dg) if (yg(t, e)) return { rangeStart: `${o} 0%`, rangeEnd: `${o} 100%` };
}
var tf = new Map();
function ef(t) {
  let e = { value: 0 },
    o = Kn((r) => {
      e.value = r[t.axis].progress * 100;
    }, t);
  return { currentTime: e, cancel: o };
}
function ps({ source: t, container: e, ...o }) {
  let { axis: r } = o;
  t && (e = t);
  let n = tf.get(e);
  n || ((n = new Map()), tf.set(e, n));
  let s = o.target ?? "self",
    i = n.get(s);
  i || ((i = {}), n.set(s, i));
  let a = r + (o.offset ?? []).join(",");
  return (
    i[a] ||
      (o.target && sr(o.target)
        ? lr(o.offset)
          ? (i[a] = new ViewTimeline({ subject: o.target, axis: r }))
          : (i[a] = ef({ container: e, ...o }))
        : sr()
          ? (i[a] = new ScrollTimeline({ source: e, axis: r }))
          : (i[a] = ef({ container: e, ...o }))),
    i[a]
  );
}
function of(t, e) {
  let o = ps(e),
    r = e.target ? lr(e.offset) : void 0,
    n = e.target ? sr(e.target) && !!r : sr();
  return t.attachTimeline({
    timeline: n ? o : void 0,
    ...(r && n && { rangeStart: r.rangeStart, rangeEnd: r.rangeEnd }),
    observe: (s) => (
      s.pause(),
      un((i) => {
        s.time = s.iterationDuration * i;
      }, o)
    ),
  });
}
function rf(t) {
  return t && (t.target || t.offset);
}
function xg(t) {
  return t.length === 2;
}
function nf(t, e) {
  return xg(t) || rf(e)
    ? Kn((o) => {
        t(o[e.axis].progress, o);
      }, e)
    : un(t, ps(e));
}
function ds(t, { axis: e = "y", container: o = document.scrollingElement, ...r } = {}) {
  if (!o) return F;
  let n = { axis: e, container: o, ...r };
  return typeof t == "function" ? nf(t, n) : of(t, n);
}
var vg = () => ({ scrollX: z(0), scrollY: z(0), scrollXProgress: z(0), scrollYProgress: z(0) }),
  cr = (t) => (t ? !t.current : !1);
function sf(t, e, o, r) {
  return {
    factory: (n) => {
      let s,
        i = () => {
          if (cr(o) || cr(r)) {
            wt.read(i);
            return;
          }
          s = ds(n, {
            ...e,
            axis: t,
            container: o?.current || void 0,
            target: r?.current || void 0,
          });
        };
      return (
        wt.read(i),
        () => {
          (hi(i), s?.());
        }
      );
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (n) => n,
    duration: 1,
  };
}
function Tg(t, e) {
  return typeof window > "u" ? !1 : t ? Xr() && !!lr(e) : $e();
}
function Hn({ container: t, target: e, ...o } = {}) {
  let r = I(vg);
  Tg(e, o.offset) &&
    ((r.scrollXProgress.accelerate = sf("x", o, t, e)),
    (r.scrollYProgress.accelerate = sf("y", o, t, e)));
  let n = (0, To.useRef)(null),
    s = (0, To.useRef)(!1),
    i = (0, To.useCallback)(
      () => (
        (n.current = ds(
          (a, { x: l, y: c }) => {
            (r.scrollX.set(l.current),
              r.scrollXProgress.set(l.progress),
              r.scrollY.set(c.current),
              r.scrollYProgress.set(c.progress));
          },
          { ...o, container: t?.current || void 0, target: e?.current || void 0 }
        )),
        () => {
          n.current?.();
        }
      ),
      [t, e, JSON.stringify(o.offset)]
    );
  return (
    Pt(() => {
      if (((s.current = !1), cr(t) || cr(e))) {
        s.current = !0;
        return;
      } else return i();
    }, [i]),
    (0, To.useEffect)(() => {
      if (!s.current) return;
      let a,
        l = () => {
          let c = cr(t),
            u = cr(e);
          (W(!c, "Container ref is defined but not hydrated", "use-scroll-ref"),
            W(!u, "Target ref is defined but not hydrated", "use-scroll-ref"),
            !c && !u && (a = i()));
        };
      return (
        wt.read(l),
        () => {
          (hi(l), a?.());
        }
      );
    }, [i]),
    r
  );
}
function Sg(t) {
  return Hn({ container: t });
}
function wg() {
  return Hn();
}
var ur = V(C(), 1);
function gt(t) {
  let e = I(() => z(t)),
    { isStatic: o } = (0, ur.useContext)(J);
  if (o) {
    let [, r] = (0, ur.useState)(t);
    (0, ur.useEffect)(() => e.on("change", r), []);
  }
  return e;
}
function mr(t, e) {
  let o = gt(e()),
    r = () => o.set(e());
  return (
    r(),
    Pt(() => {
      let n = () => S.preRender(r, !1, !0),
        s = t.map((i) => i.on("change", n));
      return () => {
        (s.forEach((i) => i()), B(r));
      };
    }),
    o
  );
}
function Vg(t, ...e) {
  let o = t.length;
  function r() {
    let n = "";
    for (let s = 0; s < o; s++) {
      n += t[s];
      let i = e[s];
      i && (n += M(i) ? i.get() : i);
    }
    return n;
  }
  return mr(e.filter(M), r);
}
var hs = V(C(), 1);
function af(t) {
  ((Kt.current = []), t());
  let e = mr(Kt.current, t);
  return ((Kt.current = void 0), e);
}
function ge(t, e, o, r) {
  if (typeof t == "function") return af(t);
  if (o !== void 0 && !Array.isArray(o) && typeof e != "function") return bg(t, e, o, r);
  let i = typeof e == "function" ? e : fn(e, o, r),
    a = Array.isArray(t) ? lf(t, i) : lf([t], ([c]) => i(c)),
    l = Array.isArray(t) ? void 0 : t.accelerate;
  return (
    l &&
      !l.isTransformed &&
      typeof e != "function" &&
      Array.isArray(o) &&
      r?.clamp !== !1 &&
      (a.accelerate = {
        ...l,
        times: e,
        keyframes: o,
        isTransformed: !0,
        ...(r?.ease ? { ease: r.ease } : {}),
      }),
    a
  );
}
function lf(t, e) {
  let o = I(() => []);
  return mr(t, () => {
    o.length = 0;
    let r = t.length;
    for (let n = 0; n < r; n++) o[n] = t[n].get();
    return e(o);
  });
}
function bg(t, e, o, r) {
  let n = I(() => Object.keys(o)),
    s = I(() => ({}));
  for (let i of n) s[i] = ge(t, e, o[i], r);
  return s;
}
function Dl(t, e = {}) {
  let { isStatic: o } = (0, hs.useContext)(J),
    r = () => (M(t) ? t.get() : t);
  if (o) return ge(r);
  let n = gt(r());
  return ((0, hs.useInsertionEffect)(() => Ho(n, t, e), [n, JSON.stringify(e)]), n);
}
function Ag(t, e = {}) {
  return Dl(t, { type: "spring", ...e });
}
var fr = V(C(), 1);
function Rl(t) {
  let e = (0, fr.useRef)(0),
    { isStatic: o } = (0, fr.useContext)(J);
  (0, fr.useEffect)(() => {
    if (o) return;
    let r = ({ timestamp: n, delta: s }) => {
      (e.current || (e.current = n), t(n - e.current, s));
    };
    return (S.update(r, !0), () => B(r));
  }, [t]);
}
function Pg() {
  let t = gt(0);
  return (Rl((e) => t.set(e)), t);
}
function Cg(t) {
  let e = gt(t.getVelocity()),
    o = () => {
      let r = t.getVelocity();
      (e.set(r), r && S.update(o));
    };
  return (
    Cl(t, "change", () => {
      S.update(o, !1, !0);
    }),
    e
  );
}
var $n = class extends Mt {
  constructor() {
    (super(...arguments), (this.isEnabled = !1));
  }
  add(e) {
    (Q.has(e) || Ye.has(e)) && ((this.isEnabled = !0), this.update());
  }
  update() {
    this.set(this.isEnabled ? "transform" : "auto");
  }
};
function Eg() {
  return I(() => new $n("auto"));
}
var cf = V(C(), 1);
function Ll() {
  !ro.current && gn();
  let [t] = (0, cf.useState)(Ee.current);
  return t;
}
var uf = V(C(), 1);
function Il() {
  let t = Ll(),
    { reducedMotion: e } = (0, uf.useContext)(J);
  return e === "never" ? !1 : e === "always" ? !0 : t;
}
function Mg(t) {
  t.values.forEach((e) => e.stop());
}
function kl(t, e) {
  [...e].reverse().forEach((r) => {
    let n = t.getVariant(r);
    (n && jo(t, n),
      t.variantChildren &&
        t.variantChildren.forEach((s) => {
          kl(s, e);
        }));
  });
}
function Dg(t, e) {
  if (Array.isArray(e)) return kl(t, e);
  if (typeof e == "string") return kl(t, [e]);
  jo(t, e);
}
function Bl() {
  let t = !1,
    e = new Set(),
    o = {
      subscribe(r) {
        return (e.add(r), () => void e.delete(r));
      },
      start(r, n) {
        W(
          t,
          "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
        );
        let s = [];
        return (
          e.forEach((i) => {
            s.push(be(i, r, { transitionOverride: n }));
          }),
          Promise.all(s)
        );
      },
      set(r) {
        return (
          W(
            t,
            "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
          ),
          e.forEach((n) => {
            Dg(n, r);
          })
        );
      },
      stop() {
        e.forEach((r) => {
          Mg(r);
        });
      },
      mount() {
        return (
          (t = !0),
          () => {
            ((t = !1), o.stop());
          }
        );
      },
    };
  return o;
}
var vs = V(C(), 1);
function Xn(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function gs(t, e, o, r) {
  return t == null
    ? []
    : typeof t == "string" && Xn(e)
      ? lt(t, o, r)
      : t instanceof NodeList
        ? Array.from(t)
        : Array.isArray(t)
          ? t.filter((n) => n != null)
          : [t];
}
function mf(t, e, o) {
  return t * (e + 1) + o * e;
}
function Ol(t, e, o, r) {
  return typeof e == "number"
    ? e
    : e.startsWith("-") || e.startsWith("+")
      ? Math.max(0, t + parseFloat(e))
      : e === "<"
        ? o
        : e.startsWith("<")
          ? Math.max(0, o + parseFloat(e.slice(1)))
          : (r.get(e) ?? t);
}
function Rg(t, e, o) {
  for (let r = 0; r < t.length; r++) {
    let n = t[r];
    n.at > e && n.at < o && (ft(t, n), r--);
  }
}
function ff(t, e, o, r, n, s) {
  Rg(t, n, s);
  for (let i = 0; i < e.length; i++) t.push({ value: e[i], at: R(n, s, r[i]), easing: Rr(o, i) });
}
function pf(t, e, o = 0) {
  let r = e + 1 + e * o;
  for (let n = 0; n < t.length; n++) t[n] = t[n] / r;
}
function df(t, e) {
  return t.at === e.at ? (t.value === null ? 1 : e.value === null ? -1 : 0) : t.at - e.at;
}
var Lg = "easeInOut",
  Fl = 20;
function yf(t, { defaultTransition: e = {}, ...o } = {}, r, n) {
  let s = e.duration || 0.3,
    i = new Map(),
    a = new Map(),
    l = {},
    c = new Map(),
    u = 0,
    m = 0,
    f = 0;
  for (let p = 0; p < t.length; p++) {
    let d = t[p];
    if (typeof d == "string") {
      c.set(d, m);
      continue;
    } else if (!Array.isArray(d)) {
      c.set(d.name, Ol(m, d.at, u, c));
      continue;
    }
    let [h, g, y = {}] = d;
    y.at !== void 0 && (m = Ol(m, y.at, u, c));
    let x = 0,
      v = (T, b, D, j = 0, E = 0) => {
        let A = Ig(T),
          {
            delay: P = 0,
            times: L = ze(A),
            type: X = e.type || "keyframes",
            repeat: et,
            repeatType: mt,
            repeatDelay: Ct = 0,
            ...Et
          } = b,
          { ease: Nt = e.ease || "easeOut", duration: N } = b,
          st = typeof P == "function" ? P(j, E) : P,
          Wt = A.length,
          _t = Xe(X) ? X : n?.[X || "keyframes"];
        if (Wt <= 2 && _t) {
          let wo = 100;
          if (Wt === 2 && Og(A)) {
            let yr = A[1] - A[0];
            wo = Math.abs(yr);
          }
          let Vo = { ...e, ...Et };
          N !== void 0 && (Vo.duration = k(N));
          let Qn = Wr(Vo, wo, _t);
          ((Nt = Qn.ease), (N = Qn.duration));
        }
        N ?? (N = s);
        let Jn = m + st;
        L.length === 1 && L[0] === 0 && (L[1] = 1);
        let _l = L.length - A.length;
        if (
          (_l > 0 && Gr(L, _l),
          A.length === 1 && A.unshift(null),
          et &&
            yt(
              et < Fl,
              `Sequence segments can't repeat ${et} times \u2014 ignoring repeat option. Use a value below ${Fl} or apply repeat at the sequence level instead.`
            ),
          et && et < Fl)
        ) {
          let wo = N > 0 ? Ct / N : 0;
          N = mf(N, et, Ct);
          let Vo = [...A],
            Qn = [...L];
          Nt = Array.isArray(Nt) ? [...Nt] : [Nt];
          let yr = [...Nt],
            Zl = mt === "reverse" || mt === "mirror",
            Jl = Vo,
            Ql = yr;
          Zl &&
            ((Jl = [...Vo].reverse()),
            mt === "reverse" &&
              (Ql = [...yr].reverse().map((xe) => (typeof xe == "function" ? Be(xe) : xe))));
          for (let xe = 0; xe < et; xe++) {
            let tc = Zl && xe % 2 === 0,
              ec = tc ? Jl : Vo,
              Wf = tc ? Ql : yr,
              oc = (xe + 1) * (1 + wo);
            (wo > 0 && (A.push(A[A.length - 1]), L.push(oc), Nt.push("linear")), A.push(...ec));
            for (let xr = 0; xr < ec.length; xr++)
              (L.push(Qn[xr] + oc), Nt.push(xr === 0 ? "linear" : Rr(Wf, xr - 1)));
          }
          pf(L, et, wo);
        }
        let ql = Jn + N;
        (ff(D, A, Nt, L, Jn, ql), (x = Math.max(st + N, x)), (f = Math.max(ql, f)));
      };
    if (M(h)) {
      let T = hf(h, a);
      v(g, y, gf("default", T));
    } else {
      let T = gs(h, g, r, l),
        b = T.length;
      for (let D = 0; D < b; D++) {
        ((g = g), (y = y));
        let j = T[D],
          E = hf(j, a);
        for (let A in g) v(g[A], kg(y, A), gf(A, E), D, b);
      }
    }
    ((u = m), (m += x));
  }
  return (
    a.forEach((p, d) => {
      for (let h in p) {
        let g = p[h];
        g.sort(df);
        let y = [],
          x = [],
          v = [];
        for (let j = 0; j < g.length; j++) {
          let { at: E, value: A, easing: P } = g[j];
          (y.push(A), x.push(pt(0, f, E)), v.push(P || "easeOut"));
        }
        (x[0] !== 0 && (x.unshift(0), y.unshift(y[0]), v.unshift(Lg)),
          x[x.length - 1] !== 1 && (x.push(1), y.push(null)),
          i.has(d) || i.set(d, { keyframes: {}, transition: {} }));
        let T = i.get(d);
        T.keyframes[h] = y;
        let { type: b, ...D } = e;
        T.transition[h] = { ...D, duration: f, ease: v, times: x, ...o };
      }
    }),
    i
  );
}
function hf(t, e) {
  return (!e.has(t) && e.set(t, {}), e.get(t));
}
function gf(t, e) {
  return (e[t] || (e[t] = []), e[t]);
}
function Ig(t) {
  return Array.isArray(t) ? t : [t];
}
function kg(t, e) {
  return t && t[e] ? { ...t, ...t[e] } : { ...t };
}
var Bg = (t) => typeof t == "number",
  Og = (t) => t.every(Bg);
function xf(t) {
  let e = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} },
        latestValues: {},
      },
    },
    o = se(t) && !mn(t) ? new lo(e) : new ue(e);
  (o.mount(t), ht.set(t, o));
}
function vf(t) {
  let e = {
      presenceContext: null,
      props: {},
      visualState: { renderState: { output: {} }, latestValues: {} },
    },
    o = new wn(e);
  (o.mount(t), ht.set(t, o));
}
function Fg(t, e) {
  return M(t) || typeof t == "number" || (typeof t == "string" && !Xn(e));
}
function ys(t, e, o, r) {
  let n = [];
  if (Fg(t, e)) n.push(En(t, (Xn(e) && e.default) || e, o && (o.default || o)));
  else {
    if (t == null) return n;
    let s = gs(t, e, r),
      i = s.length;
    W(!!i, "No valid elements provided.", "no-valid-elements");
    for (let a = 0; a < i; a++) {
      let l = s[a],
        c = l instanceof Element ? xf : vf;
      ht.has(l) || c(l);
      let u = ht.get(l),
        m = { ...o };
      ("delay" in m && typeof m.delay == "function" && (m.delay = m.delay(a, i)),
        n.push(...to(u, { ...e, transition: m }, {})));
    }
  }
  return n;
}
function Tf(t, e, o) {
  let r = [],
    n = t.map((i) => {
      if (Array.isArray(i) && typeof i[0] == "function") {
        let a = i[0],
          l = z(0);
        return (
          l.on("change", a),
          i.length === 1 ? [l, [0, 1]] : i.length === 2 ? [l, [0, 1], i[1]] : [l, i[1], i[2]]
        );
      }
      return i;
    });
  return (
    yf(n, e, o, { spring: te }).forEach(({ keyframes: i, transition: a }, l) => {
      r.push(...ys(l, i, a));
    }),
    r
  );
}
function jg(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function xs(t = {}) {
  let { scope: e, reduceMotion: o, skipAnimations: r } = t;
  function n(s, i, a) {
    let l = [],
      c,
      u = {};
    if ((o !== void 0 && (u.reduceMotion = o), r !== void 0 && (u.skipAnimations = r), jg(s))) {
      let { onComplete: f, ...p } = i || {};
      (typeof f == "function" && (c = f), (l = Tf(s, { ...u, ...p }, e)));
    } else {
      let { onComplete: f, ...p } = a || {};
      (typeof f == "function" && (c = f), (l = ys(s, i, { ...u, ...p }, e)));
    }
    let m = new _e(l);
    return (
      c && m.finished.then(c),
      e &&
        (e.animations.push(m),
        m.finished.then(() => {
          ft(e.animations, m);
        })),
      m
    );
  }
  return n;
}
var Ng = xs();
function Wg() {
  let t = I(() => ({ current: null, animations: [] })),
    e = Il() ?? void 0,
    { skipAnimations: o } = (0, vs.useContext)(J),
    r = (0, vs.useMemo)(() => xs({ scope: t, reduceMotion: e, skipAnimations: o }), [t, e, o]);
  return (
    zn(() => {
      (t.animations.forEach((n) => n.stop()), (t.animations.length = 0));
    }),
    [t, r]
  );
}
function Sf(t, e, o, r) {
  if (t == null) return [];
  let n = lt(t, r),
    s = n.length;
  W(!!s, "No valid elements provided.", "no-valid-elements");
  let i = [];
  for (let l = 0; l < s; l++) {
    let c = n[l],
      u = { ...o };
    typeof u.delay == "function" && (u.delay = u.delay(l, s));
    for (let m in e) {
      let f = e[m];
      Array.isArray(f) || (f = [f]);
      let p = { ...Tt(u, m) };
      (p.duration && (p.duration = k(p.duration)), p.delay && (p.delay = k(p.delay)));
      let d = oa(c),
        h = ea(m, p.pseudoElement || ""),
        g = d.get(h);
      (g && g.stop(),
        i.push({
          map: d,
          key: h,
          unresolvedKeyframes: f,
          options: { ...p, element: c, name: m, allowFlatten: !u.type && !u.ease },
        }));
    }
  }
  for (let l = 0; l < i.length; l++) {
    let { unresolvedKeyframes: c, options: u } = i[l],
      { element: m, name: f, pseudoElement: p } = u;
    (!p && c[0] === null && (c[0] = xi(m, f)),
      Ur(c),
      la(c, f),
      !p && c.length < 2 && c.unshift(xi(m, f)),
      (u.keyframes = c));
  }
  let a = [];
  for (let l = 0; l < i.length; l++) {
    let { map: c, key: u, options: m } = i[l],
      f = new vt(m);
    (c.set(u, f), f.finished.finally(() => c.delete(u)), a.push(f));
  }
  return a;
}
var jl = (t) => {
    function e(o, r, n) {
      return new _e(Sf(o, r, n, t));
    }
    return e;
  },
  Gg = jl();
function Ug() {
  let t = I(() => ({ current: null, animations: [] })),
    e = I(() => jl(t));
  return (
    zn(() => {
      t.animations.forEach((o) => o.stop());
    }),
    [t, e]
  );
}
function wf() {
  let t = I(Bl);
  return (Pt(t.mount, []), t);
}
var zg = wf;
var Vf = V(C(), 1);
function Kg() {
  let t = (0, Vf.useContext)(Rt);
  return t ? t.custom : void 0;
}
var bf = V(C(), 1);
function Hg(t, e, o, r) {
  (0, bf.useEffect)(() => {
    let n = t.current;
    if (o && n) return Dt(n, e, o, r);
  }, [t, e, o, r]);
}
var Ts = class {
    constructor() {
      this.componentControls = new Set();
    }
    subscribe(e) {
      return (this.componentControls.add(e), () => this.componentControls.delete(e));
    }
    start(e, o) {
      this.componentControls.forEach((r) => {
        r.start(e.nativeEvent || e, o);
      });
    }
    cancel() {
      this.componentControls.forEach((e) => {
        e.cancel();
      });
    }
    stop() {
      this.componentControls.forEach((e) => {
        e.stop();
      });
    }
  },
  $g = () => new Ts();
function Xg() {
  return I($g);
}
function Nl(t) {
  return t !== null && typeof t == "object" && or in t;
}
function Yg(t) {
  if (Nl(t)) return t[or];
}
function Wl() {
  return _g;
}
function _g(t) {
  Yt.current && ((Yt.current.isUpdating = !1), Yt.current.blockUpdate(), t && t());
}
var Af = V(C(), 1);
function qg() {
  return (0, Af.useCallback)(() => {
    let e = Yt.current;
    e && e.resetTree();
  }, []);
}
var pr = V(C(), 1);
function Zg(...t) {
  let e = (0, pr.useRef)(0),
    [o, r] = (0, pr.useState)(t[e.current]),
    n = (0, pr.useCallback)(
      (s) => {
        ((e.current = typeof s != "number" ? wr(0, t.length, e.current + 1) : s), r(t[e.current]));
      },
      [t.length, ...t]
    );
  return [o, n];
}
var Ss = V(C(), 1);
var Jg = { some: 0, all: 1 };
function Gl(t, e, { root: o, margin: r, amount: n = "some" } = {}) {
  let s = lt(t),
    i = new WeakMap(),
    a = (c) => {
      c.forEach((u) => {
        let m = i.get(u.target);
        if (u.isIntersecting !== !!m)
          if (u.isIntersecting) {
            let f = e(u.target, u);
            typeof f == "function" ? i.set(u.target, f) : l.unobserve(u.target);
          } else typeof m == "function" && (m(u), i.delete(u.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: o,
      rootMargin: r,
      threshold: typeof n == "number" ? n : Jg[n],
    });
  return (s.forEach((c) => l.observe(c)), () => l.disconnect());
}
function Qg(t, { root: e, margin: o, amount: r, once: n = !1, initial: s = !1 } = {}) {
  let [i, a] = (0, Ss.useState)(s);
  return (
    (0, Ss.useEffect)(() => {
      if (!t.current || (n && i)) return;
      let l = () => (a(!0), n ? void 0 : () => a(!1)),
        c = { root: (e && e.current) || void 0, margin: o, amount: r };
      return Gl(t.current, l, c);
    }, [e, t, o, n, r]),
    i
  );
}
var ws = V(C(), 1);
function ty() {
  let [t, e] = Un(),
    o = Wl(),
    r = (0, ws.useRef)(-1);
  return (
    (0, ws.useEffect)(() => {
      S.postRender(() =>
        S.postRender(() => {
          e === r.current && (q.instantAnimations = !1);
        })
      );
    }, [e]),
    (n) => {
      o(() => {
        ((q.instantAnimations = !0), t(), n(), (r.current = e + 1));
      });
    }
  );
}
function ey() {
  q.instantAnimations = !1;
}
var Vs = V(C(), 1);
function oy() {
  let [t, e] = (0, Vs.useState)(!0);
  return (
    (0, Vs.useEffect)(() => {
      let o = () => e(!document.hidden);
      return (
        document.hidden && o(),
        document.addEventListener("visibilitychange", o),
        () => {
          document.removeEventListener("visibilitychange", o);
        }
      );
    }, []),
    t
  );
}
function ry(t) {
  return (e) => {
    let o = t.current;
    if (!o) return e;
    let r = o.viewBox?.baseVal;
    if (!r || (r.width === 0 && r.height === 0)) return e;
    let n = o.getBoundingClientRect();
    if (n.width === 0 || n.height === 0) return e;
    let s = r.width / n.width,
      i = r.height / n.height,
      a = n.left + window.scrollX,
      l = n.top + window.scrollY;
    return { x: (e.x - a) * s + a, y: (e.y - l) * i + l };
  };
}
function ny(t) {
  return (e) => {
    let o = t.current;
    if (!o) return e;
    let r = iy(o);
    if (!r) return e;
    let n = o.getBoundingClientRect(),
      s = n.left + window.scrollX + n.width / 2,
      i = n.top + window.scrollY + n.height / 2,
      a = e.x - s,
      l = e.y - i;
    return { x: s + r.a * a + r.c * l, y: i + r.b * a + r.d * l };
  };
}
function iy(t) {
  let { transform: e } = getComputedStyle(t);
  if (!e || e === "none") return null;
  let o = e.match(/^matrix3d\((.*)\)$/u) || e.match(/^matrix\((.*)\)$/u);
  if (!o) return null;
  let r = o[1].split(",").map(Number),
    n = e.startsWith("matrix3d"),
    s = r[0],
    i = r[1],
    a = n ? r[4] : r[2],
    l = n ? r[5] : r[3],
    c = s * l - i * a;
  return Math.abs(c) < 1e-10 ? null : { a: l / c, b: -i / c, c: -a / c, d: s / c };
}
var ye = new Map(),
  dr = new Map();
var hr = (t, e) => {
  let o = Q.has(e) ? "transform" : e;
  return `${t}: ${o}`;
};
function Ul(t, e, o) {
  let r = hr(t, e),
    n = ye.get(r);
  if (!n) return null;
  let { animation: s, startTime: i } = n;
  function a() {
    window.MotionCancelOptimisedAnimation?.(t, e, o);
  }
  return ((s.onfinish = a), i === null || window.MotionHandoffIsComplete?.(t) ? (a(), null) : i);
}
var bs,
  gr,
  zl = new Set();
function sy() {
  (zl.forEach((t) => {
    (t.animation.play(), (t.animation.startTime = t.startTime));
  }),
    zl.clear());
}
function ay(t, e, o, r, n) {
  if (window.MotionIsMounted) return;
  let s = t.dataset[mi];
  if (!s) return;
  window.MotionHandoffAnimation = Ul;
  let i = hr(s, e);
  gr ||
    ((gr = ko(t, e, [o[0], o[0]], { duration: 1e4, ease: "linear" })),
    ye.set(i, { animation: gr, startTime: null }),
    (window.MotionHandoffAnimation = Ul),
    (window.MotionHasOptimisedAnimation = (l, c) => {
      if (!l) return !1;
      if (!c) return dr.has(l);
      let u = hr(l, c);
      return !!ye.get(u);
    }),
    (window.MotionHandoffMarkAsComplete = (l) => {
      dr.has(l) && dr.set(l, !0);
    }),
    (window.MotionHandoffIsComplete = (l) => dr.get(l) === !0),
    (window.MotionCancelOptimisedAnimation = (l, c, u, m) => {
      let f = hr(l, c),
        p = ye.get(f);
      p &&
        (u && m === void 0
          ? u.postRender(() => {
              u.postRender(() => {
                p.animation.cancel();
              });
            })
          : p.animation.cancel(),
        u && m
          ? (zl.add(p), u.render(sy))
          : (ye.delete(f), ye.size || (window.MotionCancelOptimisedAnimation = void 0)));
    }),
    (window.MotionCheckAppearSync = (l, c, u) => {
      let m = Qe(l);
      if (!m) return;
      let f = window.MotionHasOptimisedAnimation?.(m, c),
        p = l.props.values?.[c];
      if (!f || !p) return;
      let d = u.on("change", (h) => {
        p.get() !== h && (window.MotionCancelOptimisedAnimation?.(m, c), d());
      });
      return d;
    }));
  let a = () => {
    gr.cancel();
    let l = ko(t, e, o, r);
    (bs === void 0 && (bs = performance.now()),
      (l.startTime = bs),
      ye.set(i, { animation: l, startTime: bs }),
      n && n(l));
  };
  (dr.set(s, !1), gr.ready ? gr.ready.then(a).catch(F) : a());
}
var As = V(C(), 1);
var Kl = () => ({}),
  Hl = class extends $t {
    constructor() {
      (super(...arguments), (this.measureInstanceViewportBox = O));
    }
    build() {}
    resetTransform() {}
    restoreTransform() {}
    removeValueFromRenderState() {}
    renderInstance() {}
    scrapeMotionValuesFromProps() {
      return Kl();
    }
    getBaseTargetFromProps() {}
    readValueFromInstance(e, o, r) {
      return r.initialState[o] || 0;
    }
    sortInstanceNodePosition() {
      return 0;
    }
  },
  ly = ho({ scrapeMotionValuesFromProps: Kl, createRenderState: Kl });
function cy(t) {
  let [e, o] = (0, As.useState)(t),
    r = ly({}, !1),
    n = I(
      () =>
        new Hl(
          {
            props: {
              onUpdate: (i) => {
                o({ ...i });
              },
            },
            visualState: r,
            presenceContext: null,
          },
          { initialState: t }
        )
    );
  (0, As.useLayoutEffect)(() => (n.mount({}), () => n.unmount()), [n]);
  let s = I(() => (i) => be(n, i));
  return [e, s];
}
var Ef = V(C(), 1);
var uy = 1e5,
  Pf = (t) => (t > 0.001 ? 1 / t : uy),
  Cf = !1;
function my(t) {
  let e = gt(1),
    o = gt(1),
    { visualElement: r } = (0, Ef.useContext)(Ft);
  (W(
    !!(t || r),
    "If no scale values are provided, useInvertedScale must be used within a child of another motion component."
  ),
    yt(
      Cf,
      "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."
    ),
    (Cf = !0),
    t
      ? ((e = t.scaleX || e), (o = t.scaleY || o))
      : r && ((e = r.getValue("scaleX", 1)), (o = r.getValue("scaleY", 1))));
  let n = ge(e, Pf),
    s = ge(o, Pf);
  return { scaleX: n, scaleY: s };
}
var Ff = {};
Gf(Ff, { Group: () => Rf, Item: () => Of });
var $l = V(Gt(), 1);
var So = V(C(), 1);
var Mf = V(C(), 1),
  Ps = (0, Mf.createContext)(null);
function Df(t, e, o, r) {
  if (!r) return t;
  let n = t.findIndex((u) => u.value === e);
  if (n === -1) return t;
  let s = r > 0 ? 1 : -1,
    i = t[n + s];
  if (!i) return t;
  let a = t[n],
    l = i.layout,
    c = R(l.min, l.max, 0.5);
  return (s === 1 && a.layout.max + o > c) || (s === -1 && a.layout.min + o < c)
    ? Ds(t, n, n + s)
    : t;
}
function fy({ children: t, as: e = "ul", axis: o = "y", onReorder: r, values: n, ...s }, i) {
  let a = I(() => Fn[e]),
    l = [],
    c = (0, So.useRef)(!1),
    u = (0, So.useRef)(null);
  W(!!n, "Reorder.Group must be provided a values prop", "reorder-values");
  let m = {
    axis: o,
    groupRef: u,
    registerItem: (d, h) => {
      let g = l.findIndex((y) => d === y.value);
      (g !== -1 ? (l[g].layout = h[o]) : l.push({ value: d, layout: h[o] }), l.sort(py));
    },
    updateOrder: (d, h, g) => {
      if (c.current) return;
      let y = Df(l, d, h, g);
      if (l !== y) {
        c.current = !0;
        let x = [...n];
        for (let v = 0; v < y.length; v++)
          if (l[v].value !== y[v].value) {
            let T = n.indexOf(l[v].value),
              b = n.indexOf(y[v].value);
            T !== -1 && b !== -1 && ([x[T], x[b]] = [x[b], x[T]]);
            break;
          }
        r(x);
      }
    },
  };
  (0, So.useEffect)(() => {
    c.current = !1;
  });
  let f = (d) => {
      ((u.current = d), typeof i == "function" ? i(d) : i && (i.current = d));
    },
    p = { overflowAnchor: "none", ...s.style };
  return (0, $l.jsx)(a, {
    ...s,
    style: p,
    ref: f,
    ignoreStrict: !0,
    children: (0, $l.jsx)(Ps.Provider, { value: m, children: t }),
  });
}
var Rf = (0, So.forwardRef)(fy);
function py(t, e) {
  return t.layout.min - e.layout.min;
}
var Bf = V(Gt(), 1);
var Cs = V(C(), 1);
var dy = new Set(["auto", "scroll"]),
  _n = new WeakMap(),
  qn = new WeakMap(),
  Yn = null;
function Lf() {
  if (Yn) {
    let t = Xl(Yn, "y");
    t && (qn.delete(t), _n.delete(t));
    let e = Xl(Yn, "x");
    (e && e !== t && (qn.delete(e), _n.delete(e)), (Yn = null));
  }
}
function hy(t, e) {
  let o = getComputedStyle(t),
    r = e === "x" ? o.overflowX : o.overflowY,
    n = t === document.body || t === document.documentElement;
  return dy.has(r) || n;
}
function Xl(t, e) {
  let o = t?.parentElement;
  for (; o; ) {
    if (hy(o, e)) return o;
    o = o.parentElement;
  }
  return null;
}
function gy(t, e, o) {
  let r = e.getBoundingClientRect(),
    n = o === "x" ? Math.max(0, r.left) : Math.max(0, r.top),
    s = o === "x" ? Math.min(window.innerWidth, r.right) : Math.min(window.innerHeight, r.bottom),
    i = t - n,
    a = s - t;
  if (i < 50) {
    let l = 1 - i / 50;
    return { amount: -25 * l * l, edge: "start" };
  } else if (a < 50) {
    let l = 1 - a / 50;
    return { amount: 25 * l * l, edge: "end" };
  }
  return { amount: 0, edge: null };
}
function If(t, e, o, r) {
  if (!t) return;
  Yn = t;
  let n = Xl(t, o);
  if (!n) return;
  let s = e - (o === "x" ? window.scrollX : window.scrollY),
    { amount: i, edge: a } = gy(s, n, o);
  if (a === null) {
    (qn.delete(n), _n.delete(n));
    return;
  }
  let l = qn.get(n),
    c = n === document.body || n === document.documentElement;
  if (l !== a) {
    if (!((a === "start" && r < 0) || (a === "end" && r > 0))) return;
    qn.set(n, a);
    let m =
      o === "x"
        ? n.scrollWidth - (c ? window.innerWidth : n.clientWidth)
        : n.scrollHeight - (c ? window.innerHeight : n.clientHeight);
    _n.set(n, m);
  }
  if (i > 0) {
    let u = _n.get(n);
    if ((o === "x" ? (c ? window.scrollX : n.scrollLeft) : c ? window.scrollY : n.scrollTop) >= u)
      return;
  }
  o === "x"
    ? c
      ? window.scrollBy({ left: i })
      : (n.scrollLeft += i)
    : c
      ? window.scrollBy({ top: i })
      : (n.scrollTop += i);
}
function kf(t, e = 0) {
  return M(t) ? t : gt(e);
}
function yy(
  {
    children: t,
    style: e = {},
    value: o,
    as: r = "li",
    onDrag: n,
    onDragEnd: s,
    layout: i = !0,
    ...a
  },
  l
) {
  let c = I(() => Fn[r]),
    u = (0, Cs.useContext)(Ps),
    m = { x: kf(e.x), y: kf(e.y) },
    f = ge([m.x, m.y], ([y, x]) => (y || x ? 1 : "unset"));
  W(!!u, "Reorder.Item must be a child of Reorder.Group", "reorder-item-child");
  let { axis: p, registerItem: d, updateOrder: h, groupRef: g } = u;
  return (0, Bf.jsx)(c, {
    drag: p,
    ...a,
    dragSnapToOrigin: !0,
    style: { ...e, x: m.x, y: m.y, zIndex: f },
    layout: i,
    onDrag: (y, x) => {
      let { velocity: v, point: T } = x,
        b = m[p].get();
      (h(o, b, v[p]), If(g.current, T[p], p, v[p]), n && n(y, x));
    },
    onDragEnd: (y, x) => {
      (Lf(), s && s(y, x));
    },
    onLayoutMeasure: (y) => {
      d(o, y);
    },
    ref: l,
    ignoreStrict: !0,
    children: t,
  });
}
var Of = (0, Cs.forwardRef)(yy);
function AU(t) {
  return t === !0 || t === !1;
}
function PU(t) {
  return typeof t == "string";
}
function CU(t) {
  return Number.isFinite(t);
}
function EU(t) {
  return typeof t == "function";
}
function MU(t) {
  return t !== null && typeof t == "object" && !Array.isArray(t);
}
var jf =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function xy(t) {
  return typeof t == "string" && jf.test(t);
}
var Zn = xy;
function vy(t) {
  if (!Zn(t)) throw TypeError("Invalid UUID");
  return parseInt(t.substr(14, 1), 16);
}
var Ty = vy;
var Es,
  Sy = new Uint8Array(16);
function Yl() {
  if (
    !Es &&
    ((Es =
      (typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto < "u" &&
        typeof msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto))),
    !Es)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return Es(Sy);
}
var rt = [];
for (Ms = 0; Ms < 256; ++Ms) rt.push((Ms + 256).toString(16).substr(1));
var Ms;
function wy(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    o = (
      rt[t[e + 0]] +
      rt[t[e + 1]] +
      rt[t[e + 2]] +
      rt[t[e + 3]] +
      "-" +
      rt[t[e + 4]] +
      rt[t[e + 5]] +
      "-" +
      rt[t[e + 6]] +
      rt[t[e + 7]] +
      "-" +
      rt[t[e + 8]] +
      rt[t[e + 9]] +
      "-" +
      rt[t[e + 10]] +
      rt[t[e + 11]] +
      rt[t[e + 12]] +
      rt[t[e + 13]] +
      rt[t[e + 14]] +
      rt[t[e + 15]]
    ).toLowerCase();
  if (!Zn(o)) throw TypeError("Stringified UUID is invalid");
  return o;
}
var Nf = wy;
function Vy(t, e, o) {
  t = t || {};
  var r = t.random || (t.rng || Yl)();
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), e)) {
    o = o || 0;
    for (var n = 0; n < 16; ++n) e[o + n] = r[n];
    return e;
  }
  return Nf(r);
}
var by = Vy;
export {
  ll as a,
  Pt as b,
  Rt as c,
  Le as d,
  ft as e,
  Ds as f,
  H as g,
  yt as h,
  W as i,
  q as j,
  vr as k,
  Tr as l,
  Sr as m,
  Ie as n,
  F as o,
  Lt as p,
  pt as q,
  qt as r,
  k as s,
  ot as t,
  ke as u,
  Uf as v,
  zf as w,
  wr as x,
  Zt as y,
  Vr as z,
  Be as A,
  ti as B,
  bo as C,
  br as D,
  Ar as E,
  Pr as F,
  Cr as G,
  Er as H,
  Ls as I,
  Is as J,
  Mr as K,
  Xf as L,
  Dr as M,
  Rr as N,
  Oe as O,
  Ao as P,
  Y as Q,
  Lr as R,
  S,
  B as T,
  G as U,
  Ir as V,
  K as W,
  at as X,
  je as Y,
  Ne as Z,
  oi as _,
  It as $,
  Ut as aa,
  Po as ba,
  ni as ca,
  kt as da,
  Mo as ea,
  Bt as fa,
  nt as ga,
  w as ha,
  ks as ia,
  Bs as ja,
  ii as ka,
  Jt as la,
  U as ma,
  Qt as na,
  Z as oa,
  Fs as pa,
  We as qa,
  R as ra,
  si as sa,
  ai as ta,
  Br as ua,
  js as va,
  Or as wa,
  Ns as xa,
  yc as ya,
  xc as za,
  Fr as Aa,
  jr as Ba,
  Nr as Ca,
  Ge as Da,
  Wr as Ea,
  te as Fa,
  Do as Ga,
  Ue as Ha,
  Gr as Ia,
  ze as Ja,
  Us as Ka,
  Sc as La,
  Te as Ma,
  ee as Na,
  xt as Oa,
  Ap as Pa,
  Ur as Qa,
  zr as Ra,
  Kr as Sa,
  Hs as Ta,
  dt as Ua,
  Q as Va,
  qs as Wa,
  re as Xa,
  Hr as Ya,
  Zs as Za,
  $e as _a,
  Xr as $a,
  we as ab,
  Ve as bb,
  Lo as cb,
  Io as db,
  ko as eb,
  Xe as fb,
  Yr as gb,
  vt as hb,
  _r as ib,
  Bo as jb,
  Ye as kb,
  ta as lb,
  qr as mb,
  zt as nb,
  _e as ob,
  Oo as pb,
  ea as qb,
  oa as rb,
  Zr as sb,
  kc as tb,
  ui as ub,
  ra as vb,
  qe as wb,
  Tt as xb,
  na as yb,
  Ze as zb,
  Je as Ab,
  St as Bb,
  Jr as Cb,
  Kt as Db,
  Mt as Eb,
  z as Fb,
  Fo as Gb,
  jo as Hb,
  M as Ib,
  ia as Jb,
  No as Kb,
  ne as Lb,
  mi as Mb,
  Wo as Nb,
  Qe as Ob,
  to as Pb,
  Qr as Qb,
  be as Rb,
  tn as Sb,
  fi as Tb,
  pi as Ub,
  aa as Vb,
  ie as Wb,
  Nc as Xb,
  rn as Yb,
  nn as Zb,
  sn as _b,
  la as $b,
  Uc as ac,
  td as bc,
  lt as cc,
  eo as dc,
  an as ec,
  od as fc,
  rd as gc,
  Ot as hc,
  ln as ic,
  sd as jc,
  cd as kc,
  wt as lc,
  hi as mc,
  Vt as nc,
  cn as oc,
  ca as pc,
  ua as qc,
  yi as rc,
  oo as sc,
  ma as tc,
  fa as uc,
  da as vc,
  xi as wc,
  se as xc,
  Ko as yc,
  un as zc,
  wd as Ac,
  mn as Bc,
  Jc as Cc,
  Vd as Dc,
  fn as Ec,
  xa as Fc,
  Ho as Gc,
  va as Hc,
  bd as Ic,
  Ad as Jc,
  Pd as Kc,
  Ta as Lc,
  Sa as Mc,
  wa as Nc,
  Vi as Oc,
  Ld as Pc,
  ba as Qc,
  Pe as Rc,
  Aa as Sc,
  O as Tc,
  ht as Uc,
  ce as Vc,
  Ht as Wc,
  dn as Xc,
  $o as Yc,
  Ce as Zc,
  hn as _c,
  Pa as $c,
  Ee as ad,
  ro as bd,
  gn as cd,
  yn as dd,
  Ca as ed,
  $t as fd,
  no as gd,
  tt as hd,
  xn as id,
  Ea as jd,
  Ma as kd,
  vn as ld,
  Xt as md,
  Ai as nd,
  Xo as od,
  Ra as pd,
  Pi as qd,
  Ci as rd,
  Ia as sd,
  bt as td,
  La as ud,
  Yo as vd,
  Ei as wd,
  ka as xd,
  Mi as yd,
  io as zd,
  Tn as Ad,
  Ba as Bd,
  so as Cd,
  Oa as Dd,
  Me as Ed,
  fu as Fd,
  Sn as Gd,
  ao as Hd,
  ue as Id,
  wn as Jd,
  Fa as Kd,
  Vn as Ld,
  bn as Md,
  An as Nd,
  ja as Od,
  Pn as Pd,
  lo as Qd,
  Di as Rd,
  Wa as Sd,
  du as Td,
  Cn as Ud,
  it as Vd,
  Ri as Wd,
  _ as Xd,
  Ka as Yd,
  Ga as Zd,
  uo as _d,
  Ua as $d,
  Ha as ae,
  za as be,
  _o as ce,
  $a as de,
  yu as ee,
  Xa as fe,
  Li as ge,
  Ii as he,
  Ya as ie,
  qa as je,
  _a as ke,
  ki as le,
  Bi as me,
  Oi as ne,
  At as oe,
  Za as pe,
  Ja as qe,
  En as re,
  Dt as se,
  Qa as te,
  Mn as ue,
  Dn as ve,
  th as we,
  De as xe,
  Rn as ye,
  mo as ze,
  Ln as Ae,
  Iu as Be,
  ku as Ce,
  ol as De,
  Fi as Ee,
  Yt as Fe,
  po as Ge,
  rl as He,
  Th as Ie,
  Ch as Je,
  Eh as Ke,
  J as Le,
  xl as Me,
  Tl as Ne,
  wl as Oe,
  Bn as Pe,
  Hh as Qe,
  tg as Re,
  bl as Se,
  Un as Te,
  og as Ue,
  rg as Ve,
  tr as We,
  sl as Xe,
  ng as Ye,
  Ft as Ze,
  ho as _e,
  kn as $e,
  ig as af,
  yo as bf,
  cl as cf,
  pe as df,
  ul as ef,
  ml as ff,
  Fn as gf,
  zn as hf,
  Pl as if,
  sg as jf,
  ag as kf,
  Cl as lf,
  Kn as mf,
  ds as nf,
  Hn as of,
  Sg as pf,
  wg as qf,
  gt as rf,
  Vg as sf,
  ge as tf,
  Dl as uf,
  Ag as vf,
  Rl as wf,
  Pg as xf,
  Cg as yf,
  $n as zf,
  Eg as Af,
  Ll as Bf,
  Il as Cf,
  Bl as Df,
  xs as Ef,
  Ng as Ff,
  Wg as Gf,
  Gg as Hf,
  Ug as If,
  wf as Jf,
  zg as Kf,
  Kg as Lf,
  Hg as Mf,
  Ts as Nf,
  Xg as Of,
  Nl as Pf,
  Yg as Qf,
  Wl as Rf,
  qg as Sf,
  Zg as Tf,
  Gl as Uf,
  Qg as Vf,
  ty as Wf,
  ey as Xf,
  oy as Yf,
  ry as Zf,
  ny as _f,
  ay as $f,
  cy as ag,
  my as bg,
  Ff as cg,
  AU as dg,
  PU as eg,
  CU as fg,
  EU as gg,
  MU as hg,
  Zn as ig,
  by as jg,
  Ty as kg,
};
//# sourceMappingURL=chunk-IGDTGOWI.mjs.map
