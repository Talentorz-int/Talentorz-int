import { a as S, b as k } from "chunk-6PNPO5DW.mjs";
import { a as B } from "chunk-HMF7T2NG.mjs";
import { j as l, k as M, l as L, m as y } from "chunk-XELMBOBL.mjs";
function dt(e, t) {
  let r = new Map(),
    n = 0;
  for (let i of e) {
    let o = t(i, n, r);
    ((n += 1), o && r.set(o[0], o[1]));
  }
  return r;
}
function ct(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
var ft = Object.freeze([]);
function pt() {
  return ft;
}
function I() {
  return typeof navigator < "u" ? navigator : void 0;
}
function G() {
  return typeof window < "u" ? window : void 0;
}
var gt = /Mac/u,
  xt = /Win/u,
  mt = /iPhone|iPod|iPad/iu,
  ht = /MacIntel/iu,
  yt = /android/iu;
function Me() {
  let e = I();
  return e ? gt.test(e.platform) : !1;
}
function Mt() {
  let e = I();
  return e ? xt.test(e.platform) : !1;
}
function Ie() {
  let e = I();
  return e
    ? mt.test(e.platform)
      ? !0
      : ht.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Ee() {
  return Me() || Ie();
}
function It() {
  let e = I();
  return e ? yt.test(e.userAgent) : !1;
}
var Et = /Edg\//u;
function ee() {
  let e = I();
  return e ? Et.test(e.userAgent) : !1;
}
var bt = /Chrome/u,
  wt = /Google Inc/u;
function be() {
  let e = I();
  return e ? bt.test(e.userAgent) && wt.test(e.vendor) && !ee() : !1;
}
var Tt = /AppleWebKit\//u;
function St() {
  let e = I();
  return e ? Tt.test(e.userAgent) && !be() && !ee() : !1;
}
var Lt = /Safari/u,
  kt = /Apple Computer/u;
function we() {
  let e = I();
  return e ? Lt.test(e.userAgent) && kt.test(e.vendor) : !1;
}
function vt() {
  return we() && !Te();
}
var Pt = /Firefox\/\d+\.\d+$/u;
function Rt() {
  let e = I();
  return e ? Pt.test(e.userAgent) : !1;
}
function Ot() {
  return typeof document == "object";
}
var At = /Chrome\/(\d+)/u;
function Nt() {
  let e = I();
  if (!e) return -1;
  let t = At.exec(e.userAgent);
  if (!t || !t[1]) return -1;
  let r = parseInt(t[1]);
  return Number.isFinite(r) ? r : -1;
}
var Dt = /Version\/([\d.]+)/u;
function Ft() {
  let e = I();
  if (!e) return -1;
  let t = Dt.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
var $t = /FramerX/u;
function Bt() {
  let e = I();
  return e ? $t.test(e.userAgent) : !1;
}
function Ct() {
  let e = I();
  return e ? e.userAgent.includes("Electron") : !1;
}
function _t() {
  let e = G();
  return e ? e.location.pathname.startsWith("/edit") : !1;
}
function jt() {
  return !1;
}
function Vt() {
  return !0;
}
function Te() {
  let e = G(),
    t = I();
  return !e || !t ? !1 : "ontouchstart" in e || t.maxTouchPoints > 0;
}
function Wt() {
  let e = G();
  return !e || typeof e.matchMedia != "function" ? !1 : e.matchMedia("(pointer: fine)").matches;
}
function xn() {
  if (Wt()) return !1;
  let e = G();
  return e ? Math.min(e.innerWidth, e.innerHeight) <= 430 : !1;
}
var Kt = /tablet|iPad|Nexus 9/iu,
  zt = /mobi/iu;
function q() {
  let e = I();
  return e && Kt.test(e.userAgent) ? "tablet" : e && zt.test(e.userAgent) ? "phone" : "desktop";
}
function Ut() {
  return q() === "desktop";
}
function Se() {
  return q() === "phone";
}
function Le() {
  return q() === "tablet";
}
function Ht() {
  return Se() || Le();
}
var Gt = /Instagram|FB_IAB\/FB4A|FBAN\/FBIOS|BytedanceWebview|Twitter|LinkedIn/iu;
function qt() {
  let e = I();
  return e ? Gt.test(e.userAgent) : !1;
}
var Yt = /^[a-z]{1,8}:\/\/.*$/iu;
function Zt(e) {
  return !Yt.test(e);
}
function ke(e) {
  return e.startsWith("file://");
}
function Jt(e) {
  return e.startsWith("data:");
}
var Xt = /[a-z]{1,8}:\/\/127\.0\.0\.1/iu,
  Qt = /[a-zA-Z]{1,8}:\/\/localhost/u;
function ve(e) {
  return Xt.test(e) || Qt.test(e);
}
function er(e) {
  return !!(ke(e) || ve(e));
}
function tr(e) {
  return Ee() ? e.metaKey : e.ctrlKey;
}
var te,
  Pe = !1;
function rr(e) {
  te = e;
}
function Re({ error: e, tags: t, extras: r, critical: n, caller: i }) {
  let o = Y(e, i);
  return (
    te
      ? te({ error: o, tags: { ...o.tags, ...t }, extras: { ...o.extras, ...r }, critical: !!n })
      : Pe ||
        ((Pe = !0),
        console.error(
          "Set up an error callback with setErrorReporter, or configure Sentry with initializeEnvironment"
        )),
    o
  );
}
function Oe(e) {
  ((e = Y(e, Oe)),
    setTimeout(() => {
      throw e;
    }, 0));
}
function Y(e, t = Y) {
  return e instanceof Error ? e : new re(e, t);
}
var re = class extends Error {
  constructor(t, r) {
    let n = t ? JSON.stringify(t) : "No error message provided";
    if ((super(n), (this.message = n), r && Error.captureStackTrace))
      Error.captureStackTrace(this, r);
    else
      try {
        throw new Error();
      } catch (i) {
        this.stack = i.stack;
      }
  }
};
var C = typeof window < "u" && !("Deno" in globalThis) ? window.location.hostname : void 0,
  Ae = !!(C && ["web.framerlocal.com", "localhost", "127.0.0.1", "[::1]"].includes(C)),
  ne = (() => {
    if (!C) return;
    if (Ae) return { main: C, previewLink: void 0 };
    let e = /^(([^.]+\.)?beta\.)?((?:development\.)?framer\.com)$/u,
      t = C.match(e);
    if (!(!t || !t[3])) return { previewLink: t[2] && t[0], main: t[3] };
  })(),
  oe = {
    hosts: ne,
    isDevelopment: ne?.main === "development.framer.com",
    isProduction: ne?.main === "framer.com",
    isLocal: Ae,
  },
  nr = /^(?:[a-z]+:\/\/)?(?:[^@/]*@)?(\[[^\]]+\]|[^:/\s?#]+)/iu,
  or = new Set(["localhost", "127.0.0.1", "[::1]"]);
function ir(e) {
  return ((e.includes(":") || e.includes("/")) && (e = nr.exec(e)?.[1] ?? ""), or.has(e));
}
function _(e, t = 0, r = new Set()) {
  if (e === null) return e;
  if (typeof e == "function") return `[Function: ${e.name ?? "unknown"}]`;
  if (typeof e != "object") return e;
  if (e instanceof Error) return `[${e.toString()}]`;
  if (r.has(e)) return "[Circular]";
  if (t > 2) return "...";
  r.add(e);
  try {
    if ("toJSON" in e && typeof e.toJSON == "function") return _(e.toJSON(), t + 1, r);
    if (Array.isArray(e)) return e.map((n) => _(n, t + 1, r));
    if (Object.getPrototypeOf(e) !== Object.prototype)
      return `[Object: ${("__class" in e && e.__class) || e.constructor?.name}]`;
    {
      let n = {};
      for (let [i, o] of Object.entries(e)) n[i] = _(o, t + 1, r);
      return n;
    }
  } catch (n) {
    return `[Throws: ${n instanceof Error ? n.message : n}]`;
  } finally {
    r.delete(e);
  }
}
var De = ((s) => (
  (s[(s.Trace = 0)] = "Trace"),
  (s[(s.Debug = 1)] = "Debug"),
  (s[(s.Info = 2)] = "Info"),
  (s[(s.Warn = 3)] = "Warn"),
  (s[(s.Error = 4)] = "Error"),
  (s[(s.NotLogging = 5)] = "NotLogging"),
  s
))(De || {});
var ie = ["trace", "debug", "info", "warn", "error"],
  sr = ["\u{1F50D}", "\u{1F9EA}", "\u2139\uFE0F", "\u26A0\uFE0F", "\u274C"],
  ar = [":trace", ":debug", ":info", ":warn", ":error"],
  Fe = "logTimestamps",
  lr = /^T?\d{2}:\d{2}:\d{2}\.\d{3}Z /u;
function $e(e) {
  return new Date(e).toISOString().substring(10, 24);
}
function ur(e) {
  return lr.test(e);
}
function Be(e, t) {
  let r = [];
  for (let n of e.split(/[ ,]/u)) {
    let i = n.trim();
    if (i.length === 0) continue;
    let o = 1,
      s = !1;
    i.startsWith("-") && ((i = i.slice(1)), (o = 3), (s = !0));
    for (let f = 0; f <= 4; f++) {
      let m = ar[f];
      if (m && i.endsWith(m)) {
        ((o = f),
          s && (o += 1),
          (i = i.slice(0, i.length - m.length)),
          i.length === 0 && (i = "*"));
        break;
      }
    }
    let a = new RegExp("^" + Ke(i).replace(/\\\*/gu, ".*") + "$"),
      d = 0;
    for (let f of t) f.id.match(a) && ((f.level = o), ++d);
    d === 0 && r.push(n);
  }
  return r;
}
var X = class X {
  constructor(t, r, n) {
    this.logger = t;
    this.level = r;
    this.parts = n;
    l(this, "id");
    l(this, "time");
    l(this, "stringPrefix");
    l(this, "cachedMessage");
    ((this.id = X.nextId++), (this.time = Date.now()));
  }
  toMessage() {
    if (this.stringPrefix) return this.cachedMessage ?? this.parts;
    let t = [ie[this.level] + ": [" + this.logger.id + "]"];
    (V && t.unshift($e(this.time)), (this.stringPrefix = t.join(" ")));
    let r = this.parts[0];
    if (typeof r == "string") {
      let n = hr(r, this.logger.id, this.level);
      this.cachedMessage = [
        n.length > 0 ? `${this.stringPrefix} ${n}` : this.stringPrefix,
        ...this.parts.slice(1),
      ];
    } else this.cachedMessage = [this.stringPrefix, ...this.parts];
    return this.cachedMessage;
  }
  resetMessagePrefix() {
    ((this.stringPrefix = void 0), (this.cachedMessage = void 0));
  }
  toConsoleMessage() {
    let t = this.toMessage().slice(),
      r = t[0];
    if (typeof r != "string") return t;
    let n = ie[this.level],
      i = sr[this.level];
    n && i && (t[0] = r.replace(`${n}:`, `${i}`));
    let o = `[${this.logger.id}]`,
      s = t[0];
    if (typeof s != "string") return t;
    let a = s.indexOf(o);
    return (
      a < 0 ||
        ((t[0] = s.slice(0, a) + "%c" + o + "%c" + s.slice(a + o.length)),
        t.splice(1, 0, "color: #9ca3af", "")),
      t
    );
  }
  toString() {
    return this.toMessage()
      .map((t) => {
        let r = typeof t;
        if (r === "string") return t;
        if (r === "function") return `[Function: ${t.name ?? "unknown"}]`;
        if (t instanceof Error) return t.stack ?? t.toString();
        let n = JSON.stringify(_(t));
        return n?.length > 253 ? n.slice(0, 250) + "..." : n;
      })
      .join(" ");
  }
};
l(X, "nextId", 0);
var j = X,
  T = "*:app:info,app:info",
  V = !0,
  Ce = typeof process < "u" && !!process.kill,
  dr = Ce && !1;
dr ? (T = "-:warn") : Ce && (T = "");
try {
  typeof window < "u" &&
    window.localStorage &&
    ((T = window.localStorage.logLevel || T), (V = window.localStorage[Fe] !== "false"));
} catch {}
try {
  typeof process < "u" && (T = process.env.DEBUG || T);
} catch {}
try {
  typeof window < "u" && Object.assign(window, { setLogLevel: Ve, setLogTimestamps: We });
} catch {}
try {
  typeof window < "u" &&
    window.postMessage &&
    window.top === window &&
    window.addEventListener("message", (e) => {
      if (!e.data || typeof e.data != "object") return;
      let { loggerId: t, level: r, parts: n, printed: i } = e.data;
      if (typeof t != "string" || !Array.isArray(n) || n.length < 1 || typeof r != "number") return;
      let o = W(t);
      if (r < 0 || r > 5) return;
      n[0] = n[0].replace("[", "*[");
      let s = new j(o, r, n);
      ((s.stringPrefix = n[0]),
        w.push(s),
        !i && (o.level > r || console?.log(...s.toConsoleMessage())));
    });
} catch {}
var se;
try {
  typeof window < "u" &&
    window.postMessage &&
    window.parent !== window &&
    !window.location.pathname.startsWith("/edit") &&
    (se = (e) => {
      try {
        let t = e.toMessage().map((s) => _(s)),
          r = e.logger,
          n = e.level,
          i = r.level <= e.level,
          o = { loggerId: r.id, level: n, parts: t, printed: i };
        window.parent?.postMessage(o, B().app);
      } catch {}
    });
} catch {}
var Z = {},
  w = [],
  _e = 1e3;
function v(e, t, r) {
  let n = new j(e, t, r);
  for (w.push(n), se?.(n); w.length > _e; ) w.shift();
  return n;
}
function je(e) {
  return (typeof e == "number" && (_e = e), w);
}
var cr = /\/(?<filename>[^/.]+)(?=\.(?:debug\.)?html$)/u,
  Ne;
function fr() {
  if (!(typeof window > "u" || !window.location))
    return ((Ne ??= cr.exec(window.location.pathname)?.groups?.filename), Ne);
}
function W(e) {
  let t = fr();
  e = (t ? t + ":" : "") + e;
  let r = Z[e];
  if (r) return r;
  let n = new J(e);
  return ((Z[e] = n), Be(T, [n]), se?.(new j(n, -1, [])), n);
}
function pr() {
  return Object.keys(Z);
}
function Ve(e, t = !0) {
  try {
    typeof window < "u" && window.localStorage && (window.localStorage.logLevel = e);
  } catch {}
  let r = T;
  T = e;
  let n = Object.values(Z);
  for (let o of n) o.level = 3;
  let i = Be(e, n);
  if (
    (i.length > 0 && console?.warn("Some log level specs matched no loggers:", i),
    t && w.length > 0)
  ) {
    console?.log("--- LOG REPLAY ---");
    for (let o of w)
      o.logger.level > o.level ||
        (o.level >= 3
          ? console?.warn(...o.toConsoleMessage())
          : console?.log(...o.toConsoleMessage()));
    console?.log("--- END OF LOG REPLAY ---");
  }
  return r;
}
function We(e) {
  let t = V;
  V = e;
  for (let r of w) r.resetMessagePrefix();
  try {
    typeof window < "u" && window.localStorage && (window.localStorage[Fe] = String(e));
  } catch {}
  return t;
}
function gr() {
  return V;
}
var xr = (e) => {
    let t = {
      ...e,
      logs: je()
        .slice(-50)
        .map((r) => r.toString().slice(0, 600)).join(`
`),
    };
    return (
      e.logs && console?.warn("extras.logs is reserved for log replay buffer, use another key"),
      t
    );
  },
  J = class {
    constructor(t, r) {
      this.id = t;
      l(this, "level", 3);
      l(this, "didLog", {});
      l(this, "errorIsCritical");
      l(this, "trace", (...t) => {
        if (this.level > 0) return;
        let r = v(this, 0, t);
        console?.log(...r.toConsoleMessage());
      });
      l(this, "debug", (...t) => {
        let r = v(this, 1, t);
        this.level > 1 || console?.log(...r.toConsoleMessage());
      });
      l(this, "info", (...t) => {
        let r = v(this, 2, t);
        this.level > 2 || console?.info(...r.toConsoleMessage());
      });
      l(this, "warn", (...t) => {
        let r = v(this, 3, t);
        this.level > 3 || console?.warn(...r.toConsoleMessage());
      });
      l(this, "warnOncePerMinute", (t, ...r) => {
        let n = this.didLog[t];
        if (n && n > Date.now()) return;
        ((this.didLog[t] = Date.now() + 1e3 * 60), r.unshift(t));
        let i = v(this, 3, r);
        this.level > 3 || console?.warn(...i.toConsoleMessage());
      });
      l(this, "error", (...t) => {
        let r = v(this, 4, t);
        this.level > 4 || console?.error(...r.toConsoleMessage());
      });
      l(this, "errorOncePerMinute", (t, ...r) => {
        let n = this.didLog[t];
        if (n && n > Date.now()) return;
        ((this.didLog[t] = Date.now() + 1e3 * 60), r.unshift(t));
        let i = v(this, 4, r);
        this.level > 4 || console?.error(...i.toConsoleMessage());
      });
      l(this, "reportWithoutLogging", (t, r, n, i) => {
        let o = xr(r ?? {}),
          s = Re({
            caller: this.reportWithoutLogging,
            error: t,
            tags: { ...n, handler: "logger", where: this.id },
            extras: r,
            critical: i ?? this.errorIsCritical,
          });
        return [o, s];
      });
      l(this, "reportError", (t, r, n, i) => {
        let [o, s] = this.reportWithoutLogging(t, r, n, i);
        o ? this.error(s, o) : this.error(s);
      });
      l(this, "reportErrorWithThrottle", (t, r, n, i, o) => {
        if (!mr(r)) return;
        let s = this.didLog[r.message];
        (s && s > Date.now()) ||
          ((this.didLog[r.message] = Date.now() + t), this.reportError(r, n, i, o));
      });
      l(this, "reportErrorOncePerMinute", (t, r, n, i) =>
        this.reportErrorWithThrottle(1e3 * 60, t, r, n, i)
      );
      l(this, "reportErrorOnceEveryTenMinutes", (t, r, n, i) =>
        this.reportErrorWithThrottle(1e3 * 60 * 10, t, r, n, i)
      );
      l(this, "reportCriticalError", (t, r, n) => this.reportError(t, r, n, !0));
      this.errorIsCritical = r ?? (t === "fatal" || t.endsWith(":fatal"));
    }
    extend(t) {
      let r = this.id + ":" + t;
      return W(r);
    }
    getBufferedMessages() {
      return w.filter((t) => t.logger === this);
    }
    setLevel(t) {
      let r = this.level;
      return ((this.level = t), r);
    }
    isLoggingTraceMessages() {
      return this.level >= 0;
    }
  };
function mr(e) {
  return Object.prototype.hasOwnProperty.call(e, "message");
}
function Ke(e) {
  return e.replace(/[/\-\\^$*+?.()|[\]{}]/gu, "\\$&");
}
function hr(e, t, r) {
  let n = ie[r];
  if (!n) return e;
  let i = `${n}: [${t}]`,
    o = Ke(i).replace("\\[", "\\*?\\["),
    s = new RegExp(`^(?:T?\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z\\s+)?${o}\\s*`);
  return e.replace(s, "");
}
var yr = /^local-module:([a-zA-Z\d]+\/[^:]+)(?::(.+))?$/u,
  Mr = /^module:([a-zA-Z\d]{20})\/([a-zA-Z\d]{20})\/([^:]+)(?::(.+))?$/u;
function Sn(e) {
  try {
    let t = e;
    switch (t) {
      case "canvasComponent":
      case "codeFile":
      case "collection":
      case "draftCollection":
      case "componentPresets":
      case "prototype":
      case "screen":
      case "css":
      case "webPageMetadata":
      case "siteMetadata":
      case "layoutTemplate":
      case "localization":
      case "vector":
      case "vectorSet":
      case "design":
      case "kit":
      case "config":
      case "snippets":
      case "shader":
        return !0;
      default:
        k(t);
    }
  } catch {
    return !1;
  }
}
function Ir(e) {
  return e.kind === "externalModuleExport"
    ? `module:${e.moduleId}/${e.saveId}/${e.file}`
    : e.kind === "localModuleExport"
      ? `local-module:${e.localId}`
      : e.value;
}
function Er(e) {
  return (
    typeof e == "string" && (e = K(e)),
    e?.kind === "externalModule" || e?.kind === "externalModuleExport"
  );
}
function br(e) {
  return (
    typeof e == "string" && (e = K(e)),
    e?.kind === "localModule" || e?.kind === "localModuleExport"
  );
}
function wr(e) {
  return (
    typeof e == "string" && (e = K(e)),
    e?.kind === "externalModuleExport" || e?.kind === "localModuleExport"
  );
}
function Tr(e) {
  return (
    typeof e == "string" && (e = K(e)),
    e
      ? e.kind === "externalModule" ||
        e.kind === "externalModuleExport" ||
        e.kind === "localModule" ||
        e.kind === "localModuleExport"
      : !1
  );
}
function A(e, t, r, n) {
  let i = `${e}/${t}/${r}`,
    o = `${B().modulesCDN}/${i}`;
  return n
    ? {
        kind: "externalModuleExport",
        value: `module:${i}:${n}`,
        bareValue: `module:${i}`,
        moduleId: e,
        saveId: t,
        file: r,
        importSpecifier: o,
        exportSpecifier: n,
      }
    : {
        kind: "externalModule",
        value: `module:${i}`,
        moduleId: e,
        saveId: t,
        file: r,
        importSpecifier: o,
      };
}
function P(e, t) {
  let { type: r, name: n } = Ue(e);
  return t
    ? {
        kind: "localModuleExport",
        value: `local-module:${e}:${t}`,
        bareValue: `local-module:${e}`,
        localId: e,
        type: r,
        localIdName: n,
        exportSpecifier: t,
      }
    : { kind: "localModule", value: `local-module:${e}`, localId: e, type: r, localIdName: n };
}
function ze(e, t) {
  return `${e}/${t}`;
}
function Ue(e) {
  let [t, r] = e.split("/", 2);
  if (!t || !r) throw Error(`Invalid local id: ${e}`);
  return { type: t, name: r };
}
function Sr(e, t, r) {
  let n = ze(e, t);
  return P(n, r);
}
function K(e) {
  if (!e) return;
  let t = e.match(yr);
  if (t) {
    S(t[1], "The localId match from the module identifier should be defined.");
    let n = t[1],
      i = t[2];
    return P(n, i);
  }
  let r = e.match(Mr);
  if (r) {
    let [, n, i, o, s] = r;
    return (
      S(n, "The moduleId match from the module identifier should be defined."),
      S(i, "The saveId match from the module identifier should be defined."),
      S(o, "The path match from the module identifier should be defined."),
      A(n, i, o, s)
    );
  }
}
function Lr(e, t, r, n) {
  if (e.kind === "localModule") return A(t, r, n);
  if (e.kind === "localModuleExport") return A(t, r, n, e.exportSpecifier);
  k(e);
}
function kr(e, t) {
  if (e.kind === "externalModule") return P(t);
  if (e.kind === "externalModuleExport") return P(t, e.exportSpecifier);
  k(e);
}
function vr(e, t) {
  if (e.kind === "externalModule" || e.kind === "externalModuleExport")
    return A(e.moduleId, e.saveId, e.file, t);
  if (e.kind === "localModule" || e.kind === "localModuleExport") return P(e.localId, t);
  k(e);
}
function Pr(e) {
  if (e.kind === "externalModule" || e.kind === "localModule") return e;
  if (e.kind === "externalModuleExport") return A(e.moduleId, e.saveId, e.file);
  if (e.kind === "localModuleExport") return P(e.localId);
  k(e);
}
function Rr(e, t) {
  return `#framer/local/${e}/${t}`;
}
function Ln(e) {
  return e.startsWith("#framer/local/");
}
function kn(e) {
  return e.startsWith("!missing/");
}
var He = "dependencies",
  Ge = "config",
  ae = `${Ge}/${He}`,
  qe = "importMap.json",
  Ye = "dependencies.json",
  le = `${ae}/${qe}`,
  ue = `${ae}/${Ye}`;
function Or(e) {
  return e === le || e === ue;
}
function Pn(e) {
  if (e === le) return qe;
  if (e === ue) return Ye;
  throw new Error(`Invalid dependencies file ID: ${e}`);
}
function Ar(e) {
  let n = e.length & 3,
    i = e.length - n,
    o = 0,
    s = 0;
  for (; s < i; ) {
    let d =
      (e.charCodeAt(s) & 255) |
      ((e.charCodeAt(++s) & 255) << 8) |
      ((e.charCodeAt(++s) & 255) << 16) |
      ((e.charCodeAt(++s) & 255) << 24);
    (++s,
      (d = ((d & 65535) * 3432918353 + ((((d >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (d = (d << 15) | (d >>> 17)),
      (d = ((d & 65535) * 461845907 + ((((d >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (o ^= d),
      (o = (o << 13) | (o >>> 19)));
    let f = ((o & 65535) * 5 + ((((o >>> 16) * 5) & 65535) << 16)) & 4294967295;
    o = (f & 65535) + 27492 + ((((f >>> 16) + 58964) & 65535) << 16);
  }
  let a = 0;
  return (
    n >= 3 && (a ^= (e.charCodeAt(s + 2) & 255) << 16),
    n >= 2 && (a ^= (e.charCodeAt(s + 1) & 255) << 8),
    n >= 1 &&
      ((a ^= e.charCodeAt(s) & 255),
      (a = ((a & 65535) * 3432918353 + ((((a >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (a = (a << 15) | (a >>> 17)),
      (a = ((a & 65535) * 461845907 + ((((a >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (o ^= a)),
    (o ^= e.length),
    (o ^= o >>> 16),
    (o = ((o & 65535) * 2246822507 + ((((o >>> 16) * 2246822507) & 65535) << 16)) & 4294967295),
    (o ^= o >>> 13),
    (o = ((o & 65535) * 3266489909 + ((((o >>> 16) * 3266489909) & 65535) << 16)) & 4294967295),
    (o ^= o >>> 16),
    o >>> 0
  );
}
var Q = class extends Promise {
  constructor() {
    let r, n;
    super((i, o) => {
      ((r = i), (n = o));
    });
    l(this, "_state", "initial");
    l(this, "resolve");
    l(this, "reject");
    ((this.resolve = (i) => {
      ((this._state = "fulfilled"), r(i));
    }),
      (this.reject = (i) => {
        ((this._state = "rejected"), n(i));
      }));
  }
  get state() {
    return this._state;
  }
  pending() {
    return ((this._state = "pending"), this);
  }
  isResolved() {
    return this._state === "fulfilled" || this._state === "rejected";
  }
};
Q.prototype.constructor = Promise;
function Nr(e, t, r) {
  let n = 0,
    i = e.length;
  for (; n < i; ) {
    let o = Math.floor((n + i) / 2),
      s = e[o];
    r(s, t) < 0 ? (n = o + 1) : (i = o);
  }
  return n;
}
function Dr(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
var Fr = "text/html",
  z = "data-framer-html-import-extension";
function $r(e, t) {
  let r = {};
  if ((t.includes("text/html") && (r["text/html"] = e), !Cr(e))) return r;
  let i = new DOMParser().parseFromString(e, Fr);
  if (t.includes("application/x-framer-html-import-extension")) {
    let s = i.querySelectorAll(`[${z}]`);
    if (s) {
      let a = document.createElement("body");
      (s.forEach((d) => {
        let f = d.getAttribute(z);
        f && !a.getAttribute(z) && a.setAttribute(z, f);
        let m = d.firstChild;
        m && a.appendChild(m);
      }),
        (r["application/x-framer-html-import-extension"] = a));
    }
  }
  let o = i.querySelectorAll("[data-framer-pasteboard]");
  return (
    o.length === 0 ||
      o.forEach((s) => {
        let a = s.dataset.framerPasteboard,
          d = s.dataset.framerPasteboardType;
        if (!a || !d || !t.includes(d)) return;
        let f = JSON.parse(a);
        r[d] = f;
      }),
    r
  );
}
function Br(e, t) {
  let r = document.createElement("p"),
    n = t ?? JSON.stringify;
  for (let [o, s] of Object.entries(e)) {
    let a = document.createElement("span");
    (a.setAttribute("data-framer-pasteboard", n(s)),
      a.setAttribute("data-framer-pasteboard-type", o),
      r.appendChild(a));
  }
  return r.children.length === 0 ? void 0 : new XMLSerializer().serializeToString(r);
}
function Cr(e) {
  return e.includes(z) || e.includes("data-framer-pasteboard");
}
function _r(e, t) {
  let r,
    n,
    i = (...s) => {
      (window?.clearTimeout(r),
        (n = () => {
          ((n = void 0), window?.clearTimeout(r), e(...s));
        }),
        (r = window?.setTimeout(() => {
          n?.();
        }, t)));
    },
    o = () => {
      (window?.clearTimeout(r), (n = void 0));
    };
  return ((i.cancel = o), (i.flush = () => n?.()), i);
}
var Ze = new Set();
function de(e, ...t) {
  Ze.has(e) || (Ze.add(e), console.warn(e, ...t));
}
function jr(e, t, r) {
  let n = r ? `, use ${r} instead` : "",
    i = `Deprecation warning: ${e} will be removed in version ${t}${n}.`;
  de(i);
}
function U(e) {
  let t = "hasProp";
  return !!e && typeof e == "object" && t in e && typeof e[t] == "function";
}
function Vr(e, t, r) {
  let n = new ce(r);
  return (n.diff([], e, t), n.toResults());
}
var H = Symbol("missing"),
  ce = class {
    constructor(t = {}) {
      this.options = t;
      l(this, "results", []);
    }
    report(t, r, n, i) {
      let o = "",
        s = i?.id,
        a = i?.__class ?? i?.constructor?.name;
      s && a
        ? (o = ` (id: ${s} class: ${a})`)
        : s
          ? (o = ` (id: ${s})`)
          : a && a !== "Object" && (o = ` (class: ${a})`);
      let d = t.length > 0 ? t.join(".") : "(top)";
      this.results.push(`${d}: ${fe(r)} != ${fe(n)}${o}`);
    }
    reportDiff(t, r, n) {
      let i = t.length > 0 ? t.join(".") : "(top)";
      this.results.push(`${i}: ${r} != ${n}`);
    }
    toResults() {
      return this.results.length === 0
        ? null
        : this.results.join(`
`);
    }
    diff(t, r, n, i) {
      if (r === n) return;
      let o = typeof r;
      if (o !== typeof n) {
        this.report(t, r, n, i);
        return;
      }
      if (!r || !n) {
        if (Number.isNaN(r) && Number.isNaN(n)) return;
        this.report(t, r, n, i);
        return;
      }
      if (o === "function") {
        if (r.toString() === n.toString()) return;
        this.report(t, r, n);
        return;
      } else if (Array.isArray(r)) {
        if (!Array.isArray(n)) {
          this.report(t, r, n, i);
          return;
        }
        for (let a = 0, d = Math.max(r.length, n.length); a < d; a++) {
          let f = r[a],
            m = n[a];
          if (f === m) continue;
          let O = f === void 0 && r.length <= a,
            h = m === void 0 && n.length <= a;
          if (O || h) {
            if (
              this.options.ignoreMissingOrUndefined &&
              ((O && m === void 0) || (h && f === void 0))
            )
              continue;
            this.report(t.concat(String(a)), O ? H : f, h ? H : m, i);
          } else this.diff(t.concat(String(a)), f, m, void 0);
        }
      } else if (o === "object") {
        if (!this.options.ignorePrototypes) {
          let h = Object.getPrototypeOf(r),
            c = Object.getPrototypeOf(n);
          h !== c && this.reportDiff(t.concat("prototype"), Je(h), Je(c));
        }
        let a,
          d,
          f = Xe,
          m = Xe;
        (U(r) ? ((a = r.keys()), (f = Qe)) : (a = Object.keys(r)),
          U(n) ? ((d = n.keys()), (m = Qe)) : (d = Object.keys(n)));
        let O = new Set([...a, ...d]);
        for (let h of O) {
          if (this.options.ignoreKeys?.(h)) continue;
          let c = !f(r, h),
            u = !m(n, h),
            p = r[h],
            g = n[h];
          if (c || u) {
            if (
              (this.options.ignoreMissingOrUndefined &&
                ((c && g === void 0) || (u && p === void 0))) ||
              (this.options.ignoreKnownDynamicKeys &&
                (h.startsWith("$control__") ||
                  h.startsWith("$componentPreset__") ||
                  h.startsWith("$plugin__")))
            )
              continue;
            this.report(t.concat(h), c ? H : p, u ? H : g, r);
          } else this.diff(t.concat(h), p, g, r);
        }
      } else this.report(t, r, n, i);
    }
  };
function fe(e) {
  if (e === void 0) return "undefined";
  if (e === H) return "missing";
  if (Number.isNaN(e)) return "NaN";
  let t;
  try {
    t = JSON.stringify(e);
  } catch {
    t = String(e);
  }
  if (!t)
    if (typeof e == "function") {
      let r = String(e)?.replace(/\s+/gu, " ");
      r.startsWith("function") || r.startsWith("class") ? (t = `[${r}]`) : (t = `[Function ${r}]`);
    } else ((t = String(e)), t || (t = typeof e));
  return t.length <= 30 ? t : t.slice(0, 27) + "...";
}
function Je(e) {
  return e?.constructor?.name ?? fe(e);
}
var Wr = Object.prototype.hasOwnProperty;
function Xe(e, t) {
  return Wr.call(e, t);
}
function Qe(e, t) {
  return e.hasProp(t);
}
var Kr = Object.freeze(new Set());
function zr() {
  return Kr;
}
var Ur = Object.freeze(new Map());
function Hr() {
  return Ur;
}
function Gr(e) {
  return e instanceof Error ? e : new Error(String(e));
}
function qr(e) {
  for (let t in e) return !1;
  return !0;
}
function Yr(e) {
  for (let t in e) if (e[t] !== void 0) return !0;
  return !1;
}
function Zr(e) {
  return Array.isArray(e) && e.length === 1;
}
function Jr(e, t = 0) {
  if (e.length === 0) return t;
  for (let r = 0, n = e.length; r < n; r++) {
    let i = e.charCodeAt(r);
    t = ((t << 5) - t + i) | 0;
  }
  return t;
}
function Xr(e) {
  let t = {};
  for (let r in e) {
    let n;
    Object.defineProperty(t, r, {
      get() {
        return (n === void 0 && (n = e[r]?.()), n);
      },
    });
  }
  return t;
}
var et = Symbol("Mixed");
function Qr(e) {
  return e === et;
}
function en(e) {
  let t;
  return () => (t || (t = { returnValue: e() }), t.returnValue);
}
function tn(e, t = 2) {
  let r = 0;
  if (typeof e == "number") r = e;
  else if (typeof e == "string") r = parseFloat(e);
  else return;
  if (Number.isInteger(r)) return r;
  let n = 1;
  for (; t-- > 0; ) n *= 10;
  return (r < 0 && (n *= -1), Math.round(r * n) / n);
}
var rn = "/projects/new";
function nn(e = {}) {
  let t = new URLSearchParams();
  return (
    e.collectionId &&
      e.collectionId !== "recent" &&
      e.collectionId !== "personal" &&
      t.set("folder", e.collectionId),
    e.spaceId && t.set("team", e.spaceId),
    e.duplicateFrom
      ? (t.set("duplicate", e.duplicateFrom),
        e.duplicateVersion && t.set("duplicateVersion", e.duplicateVersion.toString()),
        e.duplicateType && t.set("duplicateType", e.duplicateType))
      : (t.set("duplicate", "starter-template-empty-site"),
        e.skipTemplatesModal || t.set("templates", "1")),
    oe.isLocal &&
      t.get("duplicate") === "starter-template-empty-site" &&
      (t.delete("duplicate"), t.set("sites", "true")),
    e.via && t.set("via", e.via),
    e.startScreen && t.set("startScreen", ""),
    e.insertPanel && t.set("insertPanel", ""),
    e.tutorialId && t.set("tutorial", e.tutorialId),
    (e.sites || !e.duplicateFrom) && t.set("sites", "true"),
    e.crdt && t.set("crdt", "true"),
    e.kit && t.set("kit", e.kit),
    `${rn}?${t.toString()}`
  );
}
var tt;
((h) => {
  function e(c, ...u) {
    return c.concat(u);
  }
  h.push = e;
  function t(c) {
    return c.slice(0, -1);
  }
  h.pop = t;
  function r(c, ...u) {
    return u.concat(c);
  }
  h.unshift = r;
  function n(c, u, ...p) {
    let g = c.length;
    if (u < 0 || u > g) throw Error("index out of range: " + u);
    let x = c.slice();
    return (x.splice(u, 0, ...p), x);
  }
  h.insert = n;
  function i(c, u, p) {
    let g = c.length;
    if (u < 0 || u >= g) throw Error("index out of range: " + u);
    let x = Array.isArray(p) ? p : [p],
      $ = c.slice();
    return ($.splice(u, 1, ...x), $);
  }
  h.replace = i;
  function o(c, u) {
    let p = c.length;
    if (u < 0 || u >= p) throw Error("index out of range: " + u);
    let g = c.slice();
    return (g.splice(u, 1), g);
  }
  h.remove = o;
  function s(c, u, p) {
    let g = c.length;
    if (u < 0 || u >= g) throw Error("from index out of range: " + u);
    if (p < 0 || p >= g) throw Error("to index out of range: " + p);
    let x = c.slice();
    if (p === u) return x;
    let $ = x[u];
    return (
      u < p ? (x.splice(p + 1, 0, $), x.splice(u, 1)) : (x.splice(u, 1), x.splice(p, 0, $)),
      x
    );
  }
  h.move = s;
  function a(c, u) {
    let p = [],
      g = Math.min(c.length, u.length);
    for (let x = 0; x < g; x++) p.push([c[x], u[x]]);
    return p;
  }
  h.zip = a;
  function d(c, u, p) {
    let g = c.slice(),
      x = g[u];
    return (x === void 0 || (g[u] = p(x)), g);
  }
  h.update = d;
  function f(c) {
    return Array.from(new Set(c));
  }
  h.unique = f;
  function m(c, ...u) {
    return Array.from(new Set([...c, ...u.flat()]));
  }
  h.union = m;
  function O(c, u) {
    return c.filter(u);
  }
  h.filter = O;
})((tt ||= {}));
var on = Object.prototype.hasOwnProperty;
function sn(e, t) {
  return on.call(e, t);
}
var rt;
((n) => {
  function e(i, o) {
    for (let s of Object.keys(i)) sn(o, s) || delete i[s];
    for (let s of Object.keys(o)) i[s] === void 0 && (i[s] = o[s]);
    return (Object.setPrototypeOf(i, Object.getPrototypeOf(o)), i);
  }
  n.morphUsingTemplate = e;
  function t(i, o) {
    o && Object.assign(i, o);
  }
  n.writeOnce = t;
  function r(i, o) {
    return Object.assign(Object.create(Object.getPrototypeOf(i)), i, o);
  }
  n.update = r;
})((rt ||= {}));
var nt;
((i) => {
  function e(o, ...s) {
    return new Set([...o, ...s]);
  }
  i.add = e;
  function t(o, ...s) {
    let a = new Set(o);
    for (let d of s) a.delete(d);
    return a;
  }
  i.remove = t;
  function r(...o) {
    let s = new Set();
    for (let a of o) for (let d of a) s.add(d);
    return s;
  }
  i.union = r;
  function n(o, s) {
    return o.has(s) ? i.remove(o, s) : i.add(o, s);
  }
  i.toggle = n;
})((nt ||= {}));
var ot;
((n) => {
  function e(i, ...o) {
    let s = new Map();
    i.forEach((d, f) => s.set(f, d));
    let a = !1;
    for (let d of o) d && (d.forEach((f, m) => s.set(m, f)), (a = !0));
    return a ? s : i;
  }
  n.merge = e;
  function t(i, o, s) {
    let a = new Map(i);
    return (a.set(o, s), a);
  }
  n.set = t;
  function r(i, o) {
    let s = new Map(i);
    return (s.delete(o), s);
  }
  n.remove = r;
})((ot ||= {}));
function an(e, t) {
  if (t < 0 || t >= e.length) throw new Error(`Index ${t} out of bounds`);
  let r = e[t];
  if (r === void 0) throw new Error(`Index ${t} not present`);
  return r;
}
var it = !1,
  st = !1,
  at = !1;
typeof window < "u" &&
  window.scheduler &&
  ((it = "yield" in window.scheduler),
  (st = "postTask" in window.scheduler),
  (at = "isInputPending" in window.scheduler));
function ln() {
  return it
    ? window.scheduler.yield()
    : st
      ? window.scheduler.postTask(() => {})
      : new Promise((e) => setTimeout(e));
}
function un() {
  return at ? window.scheduler.isInputPending() : !1;
}
function pe(e, t, r) {
  if (e === void 0) return t.push("u");
  if (e === null) return t.push("n");
  let n = typeof e;
  if (n === "string") return t.push(JSON.stringify(e));
  if (n !== "object") return t.push(String(e));
  if (Array.isArray(e)) {
    for (let o = 0; o < e.length; o++) (pe(e[o], t, r), t.push(","));
    return;
  }
  let i = U(e) ? e.keys() : Object.keys(e);
  i.sort();
  for (let o of i) {
    let s = e[o];
    (r && ((s = r(o, s, e)), s === void 0)) || (t.push(o), t.push(":"), pe(s, t, r), t.push(","));
  }
}
function dn(e, t) {
  let r = [];
  return (pe(e, r, t), r.join(""));
}
var ge = W("task-queue"),
  xe = class {
    constructor(t, r) {
      this.atTime = t;
      this.task = r;
      l(this, "isCancelled", !1);
    }
    cancel() {
      this.isCancelled = !0;
    }
  },
  me = class {
    constructor(t, r, n) {
      this.runner = t;
      this.name = r;
      this.options = n;
      l(this, "delay", 0);
      l(this, "priority", 0);
      l(this, "maxBatchSize", 0);
      l(this, "useAnimationFrame", !1);
      l(this, "incoming", []);
      l(this, "scheduled", []);
      ((this.delay = n?.delay ?? 0),
        (this.priority = n?.priority ?? 0),
        (this.maxBatchSize = n?.maxBatchSize ?? 0),
        (this.useAnimationFrame = n?.useAnimationFrame ?? !1));
    }
    add(t) {
      let r = new xe(-1, t);
      return (this.incoming.push(r), this.runner.taskAdded(), r);
    }
    scheduleNewTasks(t) {
      if (this.incoming.length === 0) return;
      ge.debug("scheduling:", this.name, this.incoming.length);
      let r = t + this.delay;
      for (let n of this.incoming) ((n.atTime = r), this.scheduled.push(n));
      this.incoming.length = 0;
    }
    millisUntilNextTask(t) {
      return this.scheduled[0]
        ? this.useAnimationFrame
          ? -1
          : Math.max(0, this.scheduled[0].atTime - t)
        : 1 / 0;
    }
    run(t) {
      let r = this.scheduled.length;
      if (r === 0) return;
      if (this.delay > 0) {
        let i = this.scheduled[r - 1];
        i && i.atTime > t && (r = this.scheduled.findIndex((o) => o.atTime > t));
      }
      this.maxBatchSize > 0 && r > this.maxBatchSize && (r = this.maxBatchSize);
      let n = this.scheduled.splice(0, r);
      ge.debug("running:", this.name, n.length);
      for (let i = 0, o = n.length; i < o; i++) {
        let s = n[i];
        s?.isCancelled || s?.task();
      }
    }
  },
  he = class {
    constructor() {
      l(this, "wrapper", (t) => t());
      l(this, "queues", []);
      l(this, "currentPriority", 0);
      l(this, "microTask", !1);
      l(this, "scheduleNewTasks", () => {
        this.microTask = !1;
        let t = performance.now();
        (this.queues.forEach((r) => {
          r.scheduleNewTasks(t);
        }),
          this.rescheduleRun());
      });
      l(this, "atTime", 1 / 0);
      l(this, "timer");
      l(this, "run", () => {
        ((this.atTime = 1 / 0), (this.timer = void 0));
        let t = performance.now();
        (this.wrapper(() => {
          this.queues.forEach((r) => {
            r.priority < this.currentPriority || r.run(t);
          });
        }),
          this.rescheduleRun());
      });
    }
    setTaskWrapper(t) {
      return ((this.wrapper = t), this);
    }
    setPriority(t) {
      return t === this.currentPriority
        ? this
        : (ge.debug("set priority:", this.currentPriority, "->", t),
          (this.currentPriority = t),
          this.taskAdded(),
          this);
    }
    getPriority() {
      return this.currentPriority;
    }
    hasImmediateTasksToRun() {
      return this.millisUntilNextTask(performance.now()) <= 0;
    }
    getTaskQueue(t, r) {
      let n = this.queues.find((o) => o.name === t);
      if (n) {
        let o =
          n.options?.delay === r?.delay &&
          n.options?.priority === r?.priority &&
          n.options?.maxBatchSize === r?.maxBatchSize &&
          n.options?.useAnimationFrame === r?.useAnimationFrame;
        return (S(o, "queue", t, "with different options already exists"), n);
      }
      let i = new me(this, t, r);
      return (this.queues.push(i), this.queues.sort((o, s) => o.priority - s.priority), i);
    }
    taskAdded() {
      this.microTask || ((this.microTask = !0), queueMicrotask(this.scheduleNewTasks));
    }
    millisUntilNextTask(t) {
      let r = 1 / 0;
      return (
        this.queues.forEach((n) => {
          n.priority < this.currentPriority || (r = Math.min(r, n.millisUntilNextTask(t)));
        }),
        r
      );
    }
    rescheduleRun() {
      let t = performance.now(),
        r = this.millisUntilNextTask(t);
      !Number.isFinite(r) ||
        t + r > this.atTime ||
        (this.timer && clearTimeout(this.timer),
        r < 0
          ? ((this.atTime = t), requestAnimationFrame(this.run))
          : ((this.atTime = t + r), (this.timer = setTimeout(this.run, r))));
    }
  };
function lt(e) {
  return Number.isFinite(e);
}
function ut() {}
var E,
  N,
  D,
  F,
  b,
  R,
  ye = class {
    constructor({ delay: t, maxDelay: r, task: n, abortSignal: i }) {
      L(this, E);
      L(this, N, 0);
      L(this, D);
      L(this, F, !0);
      L(this, b);
      L(this, R, ut);
      (y(this, N, t),
        y(this, D, r),
        y(this, R, n),
        i?.addEventListener(
          "abort",
          () => {
            (M(this, E) && (clearTimeout(M(this, E)), y(this, E, void 0)),
              y(this, b, void 0),
              y(this, R, ut),
              y(this, F, !1));
          },
          { once: !0 }
        ));
    }
    set enabled(t) {
      y(this, F, t);
    }
    set delay(t) {
      y(this, N, t);
    }
    cancel() {
      (M(this, E) && (clearTimeout(M(this, E)), y(this, E, void 0)), y(this, b, void 0));
    }
    debounce(t = M(this, N)) {
      if (!M(this, F)) return;
      (M(this, E) && clearTimeout(M(this, E)),
        lt(M(this, D)) && lt(M(this, b)) && performance.now() - M(this, b) > M(this, D)
          ? (y(this, E, void 0), y(this, b, void 0), M(this, R).call(this))
          : (y(
              this,
              E,
              window.setTimeout(() => {
                (y(this, E, void 0), y(this, b, void 0), M(this, R).call(this));
              }, t)
            ),
            y(this, b, M(this, b) ?? performance.now())));
    }
  };
((E = new WeakMap()),
  (N = new WeakMap()),
  (D = new WeakMap()),
  (F = new WeakMap()),
  (b = new WeakMap()),
  (R = new WeakMap()));
function cn(e) {
  let t = new Map();
  for (let [r, n] of e) t.set(n, r);
  return t;
}
export {
  dt as a,
  Nr as b,
  Dr as c,
  $r as d,
  Br as e,
  _r as f,
  ct as g,
  de as h,
  jr as i,
  Vr as j,
  pt as k,
  zr as l,
  Hr as m,
  Me as n,
  Mt as o,
  Ie as p,
  Ee as q,
  It as r,
  ee as s,
  be as t,
  St as u,
  we as v,
  vt as w,
  Rt as x,
  Ot as y,
  Nt as z,
  Ft as A,
  Bt as B,
  Ct as C,
  _t as D,
  jt as E,
  Vt as F,
  Te as G,
  Wt as H,
  xn as I,
  q as J,
  Ut as K,
  Se as L,
  Le as M,
  Ht as N,
  qt as O,
  Zt as P,
  ke as Q,
  Jt as R,
  ve as S,
  er as T,
  tr as U,
  Gr as V,
  rr as W,
  Oe as X,
  Y,
  oe as Z,
  ir as _,
  qr as $,
  Yr as aa,
  Zr as ba,
  Jr as ca,
  Xr as da,
  De as ea,
  $e as fa,
  ur as ga,
  je as ha,
  W as ia,
  pr as ja,
  Ve as ka,
  We as la,
  gr as ma,
  xr as na,
  et as oa,
  Qr as pa,
  Sn as qa,
  Ir as ra,
  Er as sa,
  br as ta,
  wr as ua,
  Tr as va,
  A as wa,
  P as xa,
  ze as ya,
  Ue as za,
  Sr as Aa,
  K as Ba,
  Lr as Ca,
  kr as Da,
  vr as Ea,
  Pr as Fa,
  Rr as Ga,
  Ln as Ha,
  kn as Ia,
  He as Ja,
  Ge as Ka,
  ae as La,
  le as Ma,
  ue as Na,
  Or as Oa,
  Pn as Pa,
  Ar as Qa,
  en as Ra,
  tn as Sa,
  nn as Ta,
  tt as Ua,
  rt as Va,
  nt as Wa,
  ot as Xa,
  Q as Ya,
  an as Za,
  ln as _a,
  un as $a,
  dn as ab,
  he as bb,
  ye as cb,
  cn as db,
};
//# sourceMappingURL=chunk-3GX5YKYT.mjs.map
