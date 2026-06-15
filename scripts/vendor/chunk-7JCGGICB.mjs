import {
  Jg as it,
  Kg as q,
  Lg as Bo,
  Mg as Ie,
  Ng as Me,
  Og as Qo,
  ch as wo,
  gh as bo,
  hh as Do,
  nh as xo,
  th as se,
  uh as Lo,
  ve as Ao,
  vh as To,
  xf as fo,
} from "chunk-CLNV2WTB.mjs";
import { o as Mo, p as yo, t as vo, u as Eo, w as st } from "chunk-BLTSRKBK.mjs";
import { e as Ce } from "chunk-43FBLJGU.mjs";
import { G as No } from "chunk-Q4DBFMRT.mjs";
import { a as Io } from "chunk-D3SZBJZX.mjs";
import { b as L } from "chunk-SJT3LDOF.mjs";
import { x as Ft } from "chunk-5JMTOW4C.mjs";
import { hb as lo, ib as po, mb as co } from "chunk-KIWT3OS5.mjs";
import { f as uo } from "chunk-WMNAJO4L.mjs";
import { Ii as Z } from "chunk-LNLOS7MO.mjs";
import {
  Kf as _t,
  Lf as Ht,
  Mf as qt,
  Of as qe,
  Pf as Yt,
  Qf as Vt,
  go as H,
  ho as oe,
  io as tt,
  ko as ot,
} from "chunk-UVMW6WIE.mjs";
import { c as fe } from "chunk-2QSZBOLG.mjs";
import { a as He } from "chunk-RNHTTH2C.mjs";
import { a as nt, c as Y } from "chunk-HLFUGSYU.mjs";
import { b as mo, c as ho, e as go, f as D, g as So } from "chunk-LZDNIQ2U.mjs";
import { a as Co } from "chunk-ZWBHDWJC.mjs";
import {
  Bi as ee,
  Et as k,
  Ft as j,
  Gt as $t,
  Ht as Xt,
  It as Zt,
  Kt as eo,
  Lt as Ye,
  Mt as to,
  Nt as te,
  Ot as oo,
  Rt as Ve,
  St as $e,
  Tt as so,
  Ut as io,
  Vt as Xe,
  Wt as no,
  Yc as Kt,
  Yt as ao,
  Zp as Wt,
  du as Ze,
  eu as et,
  fu as Q,
  gu as he,
  ie as Ot,
  jb as _e,
  ku as ge,
  lu as ro,
  md as _,
  td as Gt,
  wc as Ut,
  xd as Jt,
  yd as jt,
} from "chunk-C45BQYIA.mjs";
import { f as je, j as Oe, ka as Cs, va as zt } from "chunk-HSCVLSVX.mjs";
import { a as We } from "chunk-OETKI2VS.mjs";
import { jg as me } from "chunk-IGDTGOWI.mjs";
import { a as Lt } from "chunk-LEYNIZPU.mjs";
import { o as Ae } from "chunk-RJAQ7ZXH.mjs";
import { b as J, e as Tt, h as Nt, l as ze, m as kt, o as Pt, t as Rt } from "chunk-DYNCKUFC.mjs";
import { c as Je } from "chunk-WJBO7C5H.mjs";
import {
  Ba as z,
  Ga as Ue,
  Ha as Ke,
  Ia as Qt,
  Ja as Ge,
  Ka as wt,
  La as G,
  Ma as bt,
  Na as Dt,
  X as P,
  Ya as xt,
  ia as W,
  k as Et,
  ta as ue,
  ua as St,
  wa as Re,
  ya as Fe,
  za as Bt,
} from "chunk-3GX5YKYT.mjs";
import { a as f, b as K } from "chunk-6PNPO5DW.mjs";
import { a as Pe } from "chunk-HMF7T2NG.mjs";
import { c as X, e as pe, j as y, k as ce, l as Ne, o as ke } from "chunk-XELMBOBL.mjs";
var re = X((F) => {
  "use strict";
  F.removeLeadingAndTrailingHTTPWhitespace = (i) =>
    i.replace(/^[ \t\n\r]+/u, "").replace(/[ \t\n\r]+$/u, "");
  F.removeTrailingHTTPWhitespace = (i) => i.replace(/[ \t\n\r]+$/u, "");
  F.isHTTPWhitespaceChar = (i) =>
    i === " " ||
    i === "	" ||
    i ===
      `
` ||
    i === "\r";
  F.solelyContainsHTTPTokenCodePoints = (i) => /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/u.test(i);
  F.soleyContainsHTTPQuotedStringTokenCodePoints = (i) =>
    /^[\t\u0020-\u007E\u0080-\u00FF]*$/u.test(i);
  F.asciiLowercase = (i) => i.replace(/[A-Z]/gu, (e) => e.toLowerCase());
  F.collectAnHTTPQuotedString = (i, e) => {
    let t = "";
    for (e++; ; ) {
      for (; e < i.length && i[e] !== '"' && i[e] !== "\\"; ) ((t += i[e]), ++e);
      if (e >= i.length) break;
      let o = i[e];
      if ((++e, o === "\\")) {
        if (e >= i.length) {
          t += "\\";
          break;
        }
        ((t += i[e]), ++e);
      } else break;
    }
    return [t, e];
  };
});
var rs = X((Fa, as) => {
  "use strict";
  var {
    asciiLowercase: we,
    solelyContainsHTTPTokenCodePoints: si,
    soleyContainsHTTPQuotedStringTokenCodePoints: ii,
  } = re();
  as.exports = class {
    constructor(e) {
      this._map = e;
    }
    get size() {
      return this._map.size;
    }
    get(e) {
      return ((e = we(String(e))), this._map.get(e));
    }
    has(e) {
      return ((e = we(String(e))), this._map.has(e));
    }
    set(e, t) {
      if (((e = we(String(e))), (t = String(t)), !si(e)))
        throw new Error(
          `Invalid MIME type parameter name "${e}": only HTTP token code points are valid.`
        );
      if (!ii(t))
        throw new Error(
          `Invalid MIME type parameter value "${t}": only HTTP quoted-string token code points are valid.`
        );
      return this._map.set(e, t);
    }
    clear() {
      this._map.clear();
    }
    delete(e) {
      return ((e = we(String(e))), this._map.delete(e));
    }
    forEach(e, t) {
      this._map.forEach(e, t);
    }
    keys() {
      return this._map.keys();
    }
    values() {
      return this._map.values();
    }
    entries() {
      return this._map.entries();
    }
    [Symbol.iterator]() {
      return this._map[Symbol.iterator]();
    }
  };
});
var ps = X((Ua, ls) => {
  "use strict";
  var {
    removeLeadingAndTrailingHTTPWhitespace: ni,
    removeTrailingHTTPWhitespace: ds,
    isHTTPWhitespaceChar: ai,
    solelyContainsHTTPTokenCodePoints: yt,
    soleyContainsHTTPQuotedStringTokenCodePoints: ri,
    asciiLowercase: vt,
    collectAnHTTPQuotedString: di,
  } = re();
  ls.exports = (i) => {
    i = ni(i);
    let e = 0,
      t = "";
    for (; e < i.length && i[e] !== "/"; ) ((t += i[e]), ++e);
    if (t.length === 0 || !yt(t) || e >= i.length) return null;
    ++e;
    let o = "";
    for (; e < i.length && i[e] !== ";"; ) ((o += i[e]), ++e);
    if (((o = ds(o)), o.length === 0 || !yt(o))) return null;
    let s = { type: vt(t), subtype: vt(o), parameters: new Map() };
    for (; e < i.length; ) {
      for (++e; ai(i[e]); ) ++e;
      let n = "";
      for (; e < i.length && i[e] !== ";" && i[e] !== "="; ) ((n += i[e]), ++e);
      if (((n = vt(n)), e < i.length)) {
        if (i[e] === ";") continue;
        ++e;
      }
      let a = null;
      if (i[e] === '"') for ([a, e] = di(i, e); e < i.length && i[e] !== ";"; ) ++e;
      else {
        for (a = ""; e < i.length && i[e] !== ";"; ) ((a += i[e]), ++e);
        if (((a = ds(a)), a === "")) continue;
      }
      n.length > 0 && yt(n) && ri(a) && !s.parameters.has(n) && s.parameters.set(n, a);
    }
    return s;
  };
});
var us = X((Ka, cs) => {
  "use strict";
  var { solelyContainsHTTPTokenCodePoints: li } = re();
  cs.exports = (i) => {
    let e = `${i.type}/${i.subtype}`;
    if (i.parameters.size === 0) return e;
    for (let [t, o] of i.parameters)
      ((e += ";"),
        (e += t),
        (e += "="),
        (!li(o) || o.length === 0) && ((o = o.replace(/(["\\])/gu, "\\$1")), (o = `"${o}"`)),
        (e += o));
    return e;
  };
});
var gs = X((Ja, hs) => {
  "use strict";
  var pi = rs(),
    ci = ps(),
    ui = us(),
    { asciiLowercase: As, solelyContainsHTTPTokenCodePoints: ms } = re();
  hs.exports = class {
    constructor(e) {
      e = String(e);
      let t = ci(e);
      if (t === null) throw new Error(`Could not parse MIME type string "${e}"`);
      ((this._type = t.type),
        (this._subtype = t.subtype),
        (this._parameters = new pi(t.parameters)));
    }
    static parse(e) {
      try {
        return new this(e);
      } catch {
        return null;
      }
    }
    get essence() {
      return `${this.type}/${this.subtype}`;
    }
    get type() {
      return this._type;
    }
    set type(e) {
      if (((e = As(String(e))), e.length === 0))
        throw new Error("Invalid type: must be a non-empty string");
      if (!ms(e)) throw new Error(`Invalid type ${e}: must contain only HTTP token code points`);
      this._type = e;
    }
    get subtype() {
      return this._subtype;
    }
    set subtype(e) {
      if (((e = As(String(e))), e.length === 0))
        throw new Error("Invalid subtype: must be a non-empty string");
      if (!ms(e)) throw new Error(`Invalid subtype ${e}: must contain only HTTP token code points`);
      this._subtype = e;
    }
    get parameters() {
      return this._parameters;
    }
    toString() {
      return ui(this);
    }
    isJavaScript({ prohibitParameters: e = !1 } = {}) {
      switch (this._type) {
        case "text":
          switch (this._subtype) {
            case "ecmascript":
            case "javascript":
            case "javascript1.0":
            case "javascript1.1":
            case "javascript1.2":
            case "javascript1.3":
            case "javascript1.4":
            case "javascript1.5":
            case "jscript":
            case "livescript":
            case "x-ecmascript":
            case "x-javascript":
              return !e || this._parameters.size === 0;
            default:
              return !1;
          }
        case "application":
          switch (this._subtype) {
            case "ecmascript":
            case "javascript":
            case "x-ecmascript":
            case "x-javascript":
              return !e || this._parameters.size === 0;
            default:
              return !1;
          }
        default:
          return !1;
      }
    }
    isXML() {
      return (
        (this._subtype === "xml" && (this._type === "text" || this._type === "application")) ||
        this._subtype.endsWith("+xml")
      );
    }
    isHTML() {
      return this._subtype === "html" && this._type === "text";
    }
  };
});
function ko(i, e) {
  if (i.stores.projectStore.projectLicenseType === Ft())
    return i.stores.modalStore.set({
      type: "UpsellEnterprise",
      source: "upsell",
      description:
        "Sign up for an Enterprise plan to increase your file upload limit to 150MB and unlock other powerful features that help scale your site.",
      upsell: "file-limit-enterprise-upsell",
      upsellFeatures: [
        "Advanced Permissions",
        "Custom Limits",
        "Custom Hosting",
        "Custom Proxy Support",
        "Enterprise Security",
        "Dedicated Support",
      ],
    });
  let t = i.stores.projectStore.resourceLimits?.fileUploadLimitInMB;
  f(typeof t == "number", "fileUploadLimitInMB is not a number");
  let o = t.toLocaleString() + "MB",
    s =
      (e / No).toLocaleString(void 0, { minimumFractionDigits: 0, maximumFractionDigits: 1 }) +
      "MB";
  return i.stores.modalStore.set({
    source: "upsell",
    type: "UpsellFeature",
    upsellFeature: "fileUploadLimitInMB",
    title: "File Upload Limit",
    description: `Your current plan limits file uploads to ${o}, and you\u2019re trying to upload a file that\u2019s ${s}. Upgrade your site to increase the limit and upload your file.`,
  });
}
var Po = W("UploadUserAssetsService");
function Is(i) {
  let e = i.properties?.image?.width,
    t = i.properties?.image?.height;
  return (
    f(e !== void 0 && t !== void 0, "Image asset missing width/height"),
    { naturalWidth: e, naturalHeight: t }
  );
}
var at = class {
    constructor(e) {
      this.api = e;
    }
    async uploadImage(e, { silent: t = !1, maxFileSize: o, onExceedsCustomMaxSize: s } = {}) {
      try {
        let n = t ? He : (r) => L(r);
        if (!fe.includes(e.type)) {
          n({
            variant: "error",
            icon: "error",
            duration: 1 / 0,
            primaryText: "Unsupported image type.",
            secondaryText: "Try png or jpg.",
            type: "add",
          });
          return;
        }
        if (e.type === "image/svg+xml") {
          let r = await e.text();
          if (vo(r)) return;
        }
        let a = await this.api.uploadUserAsset(e, {
          maxFileSize: o,
          onExceedsCustomMaxSize: s,
          onToast: n,
        });
        return a
          ? {
              type: "image",
              asset: a,
              filename: je(a),
              originalFilename: a.name,
              url: Oe(a),
              imageSize: Is(a),
            }
          : void 0;
      } catch (n) {
        if (t) throw n;
        (L({
          variant: "error",
          icon: "error",
          duration: 1 / 0,
          primaryText: "Couldn\u2019t add image.",
          secondaryText: "It may be too large.",
          type: "add",
        }),
          Po.reportError(n, { fileName: e.name, fileSize: e.size, fileType: e.type }));
      }
    }
    async uploadVideo(e, { silent: t = !1, maxFileSize: o, onExceedsCustomMaxSize: s } = {}) {
      try {
        let n = t ? He : (d) => L(d),
          [a, r] = await Promise.all([
            ys(Mo(e), 1e4, "Measuring the video took more than 10 seconds"),
            this.api.uploadUserAsset(e, { maxFileSize: o, onExceedsCustomMaxSize: s, onToast: n }),
          ]);
        return r
          ? {
              type: "video",
              asset: r,
              filename: je(r),
              originalFilename: r.name,
              url: Oe(r),
              dimensions: a,
            }
          : void 0;
      } catch (n) {
        if (t) throw n;
        (L({
          variant: "error",
          icon: "error",
          duration: 1 / 0,
          primaryText: "Couldn't add video.",
          secondaryText: "Please retry.",
          type: "add",
        }),
          Po.reportError(n, { fileName: e.name, fileSize: e.size, fileType: e.type }));
      }
    }
    async uploadFile(e, t = {}) {
      throw new Error("UploadUserAssetsService.uploadFile is not supported; use uploadImage.");
    }
    async uploadAssetByURL(e, t = {}) {
      throw new Error(
        "UploadUserAssetsService.uploadAssetByURL is not supported; use uploadImage."
      );
    }
  },
  { service: Ro, resolve: Ms } = yo();
function Pi(i) {
  Ms(new at(i));
}
function ys(i, e, t = "timed out") {
  return new Promise((o, s) => {
    (setTimeout(() => {
      s(Error(t));
    }, e),
      i.then(o, s));
  });
}
var V,
  ie,
  $ = class {
    constructor(e) {
      this.limit = e;
      Ne(this, V, 0);
      Ne(this, ie, []);
    }
    async run(e, t) {
      if (ce(this, V) === this.limit) {
        let o = new Promise((s) => {
          ce(this, ie).push(s);
        });
        (t && (o = Promise.race([o, vs(t)])), await o);
      }
      (Uo(t), ke(this, V)._++);
      try {
        return await e();
      } finally {
        (ke(this, V)._--, ce(this, ie).shift()?.());
      }
    }
  };
((V = new WeakMap()), (ie = new WeakMap()));
var Fo = new WeakMap();
function vs(i) {
  let e = Fo.get(i);
  return (
    e ||
      (Uo(i),
      (e = new Promise((t, o) => {
        i.addEventListener(
          "abort",
          () => {
            o(i.reason);
          },
          { once: !0 }
        );
      })),
      Fo.set(i, e)),
    e
  );
}
function Uo(i) {
  if (i?.aborted) throw i.reason;
}
function Es(i) {
  let e = i.type || "unknown type";
  return i.size === 0
    ? `Failed to upload file (empty file, ${e})`
    : `Failed to upload file (${e}, ${i.size} bytes)`;
}
var ye = class {
  constructor(e, { concurrency: t = 5, silent: o = !1, assetOwnerType: s = "project" } = {}) {
    this.engine = e;
    y(this, "uploads", new Map());
    y(this, "completed", 0);
    y(this, "failed", 0);
    y(this, "generating", !1);
    y(this, "resolveStatusUpdate");
    y(this, "limiter");
    y(this, "silent");
    y(this, "assetUploadService");
    y(this, "assetOwnerType");
    ((this.limiter = new $(t)),
      (this.silent = o),
      (this.assetOwnerType = s),
      (this.assetUploadService = s === "user" ? Ro : st));
  }
  add(e) {
    return this.createTask(e, (t) => t)();
  }
  createTask(e, t) {
    let o = this.uploads.get(e);
    o ||
      ((o = {
        task: async () => {
          try {
            return typeof e == "string"
              ? e.startsWith("data:")
                ? await this.uploadFile(await Io(e, "imported"))
                : await this.assetUploadService.uploadAssetByURL(e, {
                    silent: this.silent,
                    refreshAssetService: !1,
                  })
              : await this.uploadFile(e);
          } catch (a) {
            throw (this.failed++, a);
          } finally {
            (this.completed++, this.resolveStatusUpdate?.());
          }
        },
      }),
      this.uploads.set(e, o));
    let s = o;
    return async () => {
      s.resultPromise ||
        ((s.resultPromise = this.limiter.run(s.task)), this.resolveStatusUpdate?.());
      let n = await s.resultPromise;
      return (
        this.assetOwnerType === "project" &&
          this.engine.stores.assetStore.assetService?.addAssets([n.asset]),
        t(n)
      );
    };
  }
  async uploadFile(e) {
    let t = this.engine.stores.projectStore.resourceLimits?.fileUploadLimitInMB ?? void 0,
      o = {
        silent: this.silent,
        maxFileSize: t,
        onExceedsCustomMaxSize: (n) => ko(this.engine, n),
        refreshAssetService: !1,
      },
      s;
    if (
      (e.type.startsWith("image/")
        ? (s = await this.assetUploadService.uploadImage(e, o))
        : e.type.startsWith("video/")
          ? (s = await this.assetUploadService.uploadVideo(e, o))
          : (s = await st.uploadFile(e, o)),
      !s)
    )
      throw Error(Es(e));
    return s;
  }
  get active() {
    return [...this.uploads.values()].map(({ resultPromise: e }) => e).filter(kt);
  }
  get status() {
    let { active: e, completed: t, failed: o } = this;
    return { started: e.length, completed: t, failed: o };
  }
  async *statusUpdates() {
    if (this.generating) throw Error("`statusUpdates` is in use by another call");
    for (this.generating = !0, yield this.status; this.completed < this.active.length; )
      (await new Promise((e) => {
        this.resolveStatusUpdate = () => {
          (e(), (this.resolveStatusUpdate = void 0));
        };
      }),
        yield this.status);
    (await this.engine.stores.assetStore.assetService?.refresh().catch(P), (this.generating = !1));
  }
  async results() {
    let e = await Promise.allSettled(this.active).then((t) => t.filter(Rt).map((o) => o.value));
    return (await this.engine.stores.assetStore.assetService?.refresh().catch(P), e);
  }
};
var Ko;
(function (i) {
  ((i[(i.Static = 1)] = "Static"),
    (i[(i.Dynamic = 2)] = "Dynamic"),
    (i[(i.ImportMeta = 3)] = "ImportMeta"),
    (i[(i.StaticSourcePhase = 4)] = "StaticSourcePhase"),
    (i[(i.DynamicSourcePhase = 5)] = "DynamicSourcePhase"));
})(Ko || (Ko = {}));
var Ss = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
function dt(i, e = "@") {
  if (!w) return lt.then(() => dt(i));
  let t = i.length + 1,
    o = (w.__heap_base.value || w.__heap_base) + 4 * t - w.memory.buffer.byteLength;
  o > 0 && w.memory.grow(Math.ceil(o / 65536));
  let s = w.sa(t - 1);
  if (((Ss ? Qs : Bs)(i, new Uint16Array(w.memory.buffer, s, t)), !w.parse()))
    throw Object.assign(
      new Error(
        `Parse error ${e}:${
          i.slice(0, w.e()).split(`
`).length
        }:${
          w.e() -
          i.lastIndexOf(
            `
`,
            w.e() - 1
          )
        }`
      ),
      { idx: w.e() }
    );
  let n = [],
    a = [];
  for (; w.ri(); ) {
    let d = w.is(),
      l = w.ie(),
      p = w.it(),
      u = w.ai(),
      m = w.id(),
      h = w.ss(),
      M = w.se(),
      A;
    (w.ip() && (A = r(i.slice(m === -1 ? d - 1 : d, m === -1 ? l + 1 : l))),
      n.push({ n: A, t: p, s: d, e: l, ss: h, se: M, d: m, a: u }));
  }
  for (; w.re(); ) {
    let d = w.es(),
      l = w.ee(),
      p = w.els(),
      u = w.ele(),
      m = i.slice(d, l),
      h = m[0],
      M = p < 0 ? void 0 : i.slice(p, u),
      A = M ? M[0] : "";
    a.push({
      s: d,
      e: l,
      ls: p,
      le: u,
      n: h === '"' || h === "'" ? r(m) : m,
      ln: A === '"' || A === "'" ? r(M) : M,
    });
  }
  function r(d) {
    try {
      return (0, eval)(d);
    } catch {}
  }
  return [n, a, !!w.f(), !!w.ms()];
}
function Bs(i, e) {
  let t = i.length,
    o = 0;
  for (; o < t; ) {
    let s = i.charCodeAt(o);
    e[o++] = ((255 & s) << 8) | (s >>> 8);
  }
}
function Qs(i, e) {
  let t = i.length,
    o = 0;
  for (; o < t; ) e[o] = i.charCodeAt(o++);
}
var w,
  lt = WebAssembly.compile(
    ((rt =
      "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"),
    typeof Buffer < "u"
      ? Buffer.from(rt, "base64")
      : Uint8Array.from(atob(rt), (i) => i.charCodeAt(0)))
  )
    .then(WebAssembly.instantiate)
    .then(({ exports: i }) => {
      w = i;
    }),
  rt;
var ws = /^\s*(['"](\..*)['"])\s*$/mu,
  ne = class extends Error {
    constructor(t) {
      super();
      this.persistedMissingRelativeImports = t;
      this.name = "RewriteRelativeImportsError";
    }
  };
function ve(i) {
  return i instanceof ne;
}
async function jo(i, e) {
  await lt;
  let [t] = dt(i),
    o = i,
    s = new Set(),
    n = [...t].reverse();
  for (let { s: a, e: r, d } of n) {
    if (d === -2) continue;
    if (d === -1) {
      let g = i.substring(a, r);
      if (!g.startsWith(".")) continue;
      let c = e[g];
      (c === void 0 && (s.add(g), (c = Jo(g))), (o = Go(o, c, a, r)));
      continue;
    }
    let l = i.substring(a, r),
      u = l
        .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "$1")
        .trim()
        .match(ws);
    if (!u) continue;
    let m = u[1],
      h = u[2];
    if (m === void 0 || h === void 0) continue;
    let M = e[h];
    M === void 0 && (s.add(h), (M = Jo(h)));
    let A = l.replace(new RegExp(pt(m), "g"), JSON.stringify(M));
    o = Go(o, A, a, r);
  }
  return s.size > 0
    ? To({ partiallyProcessedCode: o, unresolvedRelativeImports: s, parsedImports: t })
    : Lo(o);
}
function Go(i, e, t, o) {
  return i.slice(0, t) + e + i.slice(o);
}
function pt(i) {
  return i.replace(/[.*+\-?^${}()|[\]\\]/gu, "\\$&");
}
function Jo(i) {
  return `!missing/${i}`;
}
var ct = window?.framerUser;
function sn(i) {
  switch (i) {
    case "verifiedEmail":
      return {
        type: "verifiedEmail",
        emails: [{ email: ct.email, verified: !0 }],
        name: "Framer",
        subject: Rs,
        body: Fs,
        id: me(),
      };
    case "webhook":
      return { type: "webhook", webhookUrl: void 0, secret: "", fallbackEmail: ct.email, id: me() };
    case "googlesheet":
      return {
        type: "googlesheet",
        fallbackEmail: ct.email,
        documentId: void 0,
        documentName: void 0,
        id: me(),
      };
    default:
      K(i);
  }
}
function nn(i) {
  return i.type === "verifiedEmail";
}
var an = "--encrypted--";
function rn(i) {
  return i.type === "webhook";
}
function dn(i) {
  return i.type === "googlesheet";
}
var Oo = ["spam_protection", "recaptcha_v3"];
function ln(i) {
  return i.provider === "recaptcha_v3";
}
function bs(i) {
  switch (i) {
    case "spam_protection":
      return { provider: "spam_protection", mode: "basic", filtering: "pass" };
    case "recaptcha_v3":
      return {
        provider: "recaptcha_v3",
        siteKey: "",
        secretKey: "",
        threshold: 0.5,
        filtering: "pass",
      };
    default:
      K(i);
  }
}
function pn(i = Et()) {
  return { configs: i };
}
function cn({ formAntispamEnabled: i, recaptchaEnabled: e }) {
  return i ? (e ? Oo : ["spam_protection"]) : [];
}
function Ds(i, e) {
  if (e.length === 0) return [];
  let t = new Set(e),
    o = new Map();
  for (let s of i) t.has(s.provider) && (o.has(s.provider) || o.set(s.provider, s));
  return (
    t.has("spam_protection") &&
      !o.has("spam_protection") &&
      o.set("spam_protection", bs("spam_protection")),
    Oo.flatMap((s) => {
      if (!t.has(s)) return [];
      let n = o.get(s);
      return n ? [n] : [];
    })
  );
}
function un(i, e, t) {
  let o = Ds(i, e);
  return t ? o : o.map((s) => xs(s, t));
}
function xs(i, e) {
  return e || i.provider !== "spam_protection" || i.mode !== "advanced"
    ? i
    : { ...i, mode: "basic" };
}
var ut = "type",
  Wo = "provider",
  Ls = { type: !0, id: !0, emails: !0, subject: !0, body: !0, name: !0 };
function An(i) {
  for (let e in i) if ((e === ut && i[e] !== "verifiedEmail") || !(e in Ls)) return !1;
  return !0;
}
var Ts = { type: !0, id: !0, webhookUrl: !0, fallbackEmail: !0, secret: !0 };
function mn(i) {
  for (let e in i) if ((e === ut && i[e] !== "webhook") || !(e in Ts)) return !1;
  return !0;
}
var Ns = { type: !0, id: !0, documentName: !0, documentId: !0, fallbackEmail: !0 };
function hn(i) {
  for (let e in i) if ((e === ut && i[e] !== "googlesheet") || !(e in Ns)) return !1;
  return !0;
}
var ks = { provider: !0, filtering: !0, mode: !0 };
function gn(i) {
  for (let e in i) if ((e === Wo && i[e] !== "spam_protection") || !(e in ks)) return !1;
  return !0;
}
var Ps = { provider: !0, filtering: !0, siteKey: !0, secretKey: !0, threshold: !0 };
function fn(i) {
  for (let e in i) if ((e === Wo && i[e] !== "recaptcha_v3") || !(e in Ps)) return !1;
  return !0;
}
var Rs = "New Submission",
  Fs = "You\u2019ve just received a new submission.";
function In(i) {
  return Object.entries(i);
}
function* Mn(i) {
  let e = Object.keys(i);
  for (let t of e) yield [t, i[t]];
}
function vn(i, e) {
  let t = e.getItemIds(i.id);
  if (t) return t[0];
}
function At(i) {
  let e = new Set();
  if (!i) return e;
  if (_(i) && Wt(i)) {
    let t = zo(i.layoutTemplateIdentifier);
    t && e.add(t);
  }
  for (let { node: t, skipChildren: o } of i.walkWithSkipChildren()) {
    if (!Gt(t)) continue;
    if (Kt(t)) {
      o();
      continue;
    }
    let s = zo(t.codeComponentIdentifier);
    s && e.add(s);
  }
  return e;
}
function zo(i) {
  let e = z(i);
  if (!(!e || !ue(e))) return Q({ type: e.type, name: e.localIdName });
}
var ae = W("modules-divergence-reporter"),
  Ks = 2,
  Gs = [1e3, 2e3, 4e3, 8e3, 16e3, 32e3],
  Js = 10 * 6e4,
  js = 1e4;
function Os(i) {
  return `${i.localId}|${i.treeSaveId ?? ""}|${i.backendSaveId ?? ""}`;
}
var Ee = class {
  constructor(e) {
    y(this, "sample");
    y(this, "runWhenIdle");
    y(this, "abortSignal");
    y(this, "consecutiveThreshold");
    y(this, "settleBackoffMs");
    y(this, "slowIntervalMs");
    y(this, "fastIntervalMs");
    y(this, "pendingTimer", null);
    y(this, "settleAttempt", 0);
    y(this, "started", !1);
    y(this, "counters", new Map());
    y(this, "sessionLoggedKeys", new Set());
    ((this.sample = e.sample),
      (this.runWhenIdle = e.runWhenIdle),
      (this.abortSignal = e.abortSignal),
      (this.consecutiveThreshold = e.consecutiveThreshold ?? Ks),
      (this.settleBackoffMs = e.settleBackoffMs ?? Gs),
      (this.slowIntervalMs = e.slowIntervalMs ?? Js),
      (this.fastIntervalMs = e.fastIntervalMs ?? js),
      this.abortSignal?.addEventListener("abort", () => {
        this.pendingTimer !== null && (clearTimeout(this.pendingTimer), (this.pendingTimer = null));
      }));
  }
  start() {
    this.started ||
      ((this.started = !0),
      ae.debug("started", {
        threshold: this.consecutiveThreshold,
        slowIntervalMs: this.slowIntervalMs,
        fastIntervalMs: this.fastIntervalMs,
      }),
      this.scheduleNext(0));
  }
  sampleNow() {
    this.scheduleNext(0);
  }
  scheduleNext(e) {
    this.abortSignal?.aborted ||
      (this.pendingTimer !== null && clearTimeout(this.pendingTimer),
      (this.pendingTimer = setTimeout(() => {
        ((this.pendingTimer = null),
          !this.abortSignal?.aborted &&
            this.runWhenIdle(() => {
              this.abortSignal?.aborted || this.runSample().catch(P);
            }));
      }, e)));
  }
  async runSample() {
    let e;
    try {
      e = await this.sample();
    } catch (t) {
      if (this.abortSignal?.aborted) return;
      (ae.debug("failed to sample modules divergence", { error: t }), this.handleNotSettled());
      return;
    }
    if (!this.abortSignal?.aborted)
      switch (e.kind) {
        case "notSettled":
          this.handleNotSettled();
          return;
        case "sampled":
          ((this.settleAttempt = 0), this.handleSampled(e.divergences));
          return;
      }
  }
  handleNotSettled() {
    let e = this.settleBackoffMs[this.settleAttempt];
    if (e === void 0) {
      (ae.debug("sample notSettled, backoff exhausted, waiting slow interval", {
        nextDelayMs: this.slowIntervalMs,
      }),
        (this.settleAttempt = 0),
        this.scheduleNext(this.slowIntervalMs));
      return;
    }
    (ae.debug("sample notSettled, retrying with backoff", {
      attempt: this.settleAttempt,
      nextDelayMs: e,
    }),
      (this.settleAttempt += 1),
      this.scheduleNext(e));
  }
  handleSampled(e) {
    let t = new Set(),
      o = [],
      s = [];
    for (let r of e) {
      let d = Os(r);
      if (this.sessionLoggedKeys.has(d)) {
        s.push(r);
        continue;
      }
      (o.push(r), t.add(d));
      let l = this.counters.get(d);
      l ? (l.count += 1) : this.counters.set(d, { entry: r, count: 1 });
    }
    for (let r of this.counters.keys()) t.has(r) || this.counters.delete(r);
    let n = [];
    for (let [r, d] of this.counters.entries())
      d.count >= this.consecutiveThreshold &&
        (this.sessionLoggedKeys.add(r), this.counters.delete(r), n.push(d.entry));
    let a = this.counters.size > 0 ? this.fastIntervalMs : this.slowIntervalMs;
    (this.scheduleNext(a),
      ae.debug("sampled", {
        sampledDivergences: o,
        settledDivergences: n,
        alreadySeenDivergences: s,
        nextDelayMs: a,
      }));
  }
};
function _o(i, e) {
  let t = new Map(),
    o = new Map();
  for (let r of i) {
    let d = r.id;
    (t.set(d, r.save.saveId), o.set(d, r.save.moduleId));
  }
  let s = new Map(),
    n = new Map();
  for (let r of e) {
    let d = r.localId;
    (s.set(d, r.saveId), n.set(d, r.id));
  }
  let a = [];
  for (let [r, d] of s) {
    let l = t.get(r);
    if (l === void 0) a.push({ localId: r, treeSaveId: null, backendSaveId: d });
    else if (l !== d) {
      let p = o.get(r),
        u = n.get(r);
      if (p !== void 0 && u !== void 0 && p !== u) continue;
      a.push({ localId: r, treeSaveId: l, backendSaveId: d });
    }
  }
  for (let [r, d] of t) s.has(r) || a.push({ localId: r, treeSaveId: d, backendSaveId: null });
  return a;
}
var I = W("modules-storage"),
  zs = "kit",
  qo = Object.freeze({}),
  Yo = Object.freeze({});
function Sa(i) {
  return i && (i.type === "codeFile" || i.type === "shader")
    ? (f(J(i.sourceContent), `${i.type} module entry is missing source content`), !0)
    : !1;
}
function mt(i) {
  return i.name === Ge && i.type === wt;
}
function _s(i) {
  return i.id === G;
}
function Vo(i, e) {
  return !!i && i.saveId === e.saveId && i.id === e.moduleId;
}
var Be = class extends Error {
    constructor() {
      (super("A circular dependency was detected."), (this.name = "CircularDependencyError"));
    }
  },
  Se = "update-modules-storage",
  Hs = 0;
async function b(i) {
  let e = performance.now(),
    t = `acquire-modules-storage-lock-${Hs++}`;
  return nt.request(Se, () => {
    let o = performance.now(),
      s = o - e;
    return (
      Co(t, e, o, "vekter"),
      I.debug("\u{1F513} Acquired the", Se, "lock in", s.toFixed(2), "ms"),
      s > 1e3 &&
        I.warn("\u2757 Long wait: it took", s.toFixed(0), "ms to acquire the", Se, "lock."),
      i()
    );
  });
}
var Qe = class {
    constructor(e, t, o, s) {
      this.storage = e;
      this.localId = t;
      this.type = o;
      this.debugModuleStoreAndComponentLoaderRevisionsMatch = s;
    }
    isValid() {
      return (
        this.storage.getTransientSaveByLocalId(this.localId) !== void 0 ||
        this.storage.getPersistedModuleByLocalId(this.localId) !== void 0
      );
    }
    get id() {
      let e = this.storage.getPersistedModuleByLocalId(this.localId);
      if (e) return e.id;
      let t = this.storage.getModuleTreeData(this.localId);
      return (f(t, "Module must exist"), t.moduleId);
    }
    get saveId() {
      let e = this.storage.getTransientSaveByLocalId(this.localId);
      if (e) return e.saveId;
      let t = this.storage.getPersistedModuleByLocalId(this.localId);
      return (f(t, "Module must exist"), t.saveId);
    }
    get transientSVGIcon() {
      let e = this.storage.getTransientSaveByLocalId(this.localId);
      if (e) return e.svgIcon;
    }
    get lastPublish() {
      return this.storage.getPersistedModuleByLocalId(this.localId)?.lastPublish ?? null;
    }
    externalModuleIdentifier(e = "default") {
      let t = this.storage.getTransientSaveByLocalId(this.localId);
      if (t) {
        let s = Y(t.name);
        return Re(this.id, t.saveId, s.module, e);
      }
      let o = this.storage.getPersistedModuleByLocalId(this.localId);
      return (
        f(o?.files.module, "ModulesStorage: Expected module typed file in persisted module."),
        Re(this.id, o.saveId, o.files.module, e)
      );
    }
    delete() {
      return this.storage.delete(this.localId);
    }
    publish(e, t, o) {
      return this.storage.publish(this.localId, { namespace: e, name: t, version: o });
    }
    sourceRevision() {
      let e = this.storage.getTransientSaveByLocalId(this.localId);
      if (e) return e.sourceRevision;
      let t = this.storage.getPersistedModuleByLocalId(this.localId);
      if (t) return It(t);
    }
    annotations(e, t) {
      let o = this.storage.getTransientSaveByLocalId(this.localId),
        s = o?.annotations
          ? ge(o.annotations)
          : this.storage.getModuleTreeData(this.localId)?.annotations;
      return (
        e && this.debugModuleStoreAndComponentLoaderRevisionsMatch() && qs(s, e),
        t ? s?.[t] : s
      );
    }
  },
  gt = class extends Qe {
    constructor(t, o, s, n, a) {
      super(t, o, s, n);
      this.name = a;
    }
    currentSourceEquals(t, o) {
      let s = this.storage.getPersistedModuleByLocalId(this.localId);
      return !s || s.submodules.length || o.submodules?.size ? !1 : s.sourceContent === t;
    }
    updateSource(t, o = {}) {
      return this.storage.updateSources([
        { localId: this.localId, source: t, options: { ...o, stableName: !0 } },
      ]);
    }
    persist(t) {
      return this.storage.upsert(this.localId, { ...t, type: this.type, name: this.name });
    }
    getKitSectionsStructure() {
      let t = this.storage.getTransientSaveByLocalId(this.localId);
      return t ? t.kitSectionsStructure : this.storage.getKitSectionsStructure(this.name);
    }
  };
function qs(i, e) {
  if (!i) return;
  let t = z(e.identifier);
  (f(ue(t) && St(t), "Entity must have an identifier."),
    e.annotations &&
      t.exportSpecifier in i &&
      !We(i[t.exportSpecifier], ge({ default: e.annotations }).default, !0) &&
      I.reportError("Static annotations are not synchronized with runtime annotations.", {
        identifier: e.identifier,
      }));
}
function It(i) {
  let e = i?.metadata.sourceRevision;
  return Tt(e) ? e : void 0;
}
var ft = class extends Qe {
    updateSource(e, t) {
      return this.storage.updateSources([{ localId: this.localId, source: e, options: t ?? {} }]);
    }
    persist(e) {
      return this.storage.update(this.localId, e);
    }
    rename(e) {
      return this.storage.rename(this.localId, e);
    }
  },
  $o = class {
    constructor(e, t, o = () => !0) {
      this.storage = e;
      this.type = t;
      this.moduleStoreAndComponentLoaderRevisionsMatch = o;
    }
    async create(e) {
      return this.storage.create({ ...e, type: this.type });
    }
    getByStableName(e) {
      return new gt(
        this.storage,
        Fe(this.type, e),
        this.type,
        this.moduleStoreAndComponentLoaderRevisionsMatch,
        e
      );
    }
    getByLocalId(e) {
      return new ft(this.storage, e, this.type, this.moduleStoreAndComponentLoaderRevisionsMatch);
    }
    getUniqueName(e) {
      return this.storage.getUniqueNameForType(this.type, e);
    }
  },
  Xo = class {
    constructor(e, t, o, s, n, a, r, d, l) {
      this.getModulesService = e;
      this.compile = t;
      this.process = o;
      this.processWhenReady = s;
      this.runWhenIdle = n;
      this.treeStore = a;
      this.getActiveScope = r;
      this.makeDocumentReadOnly = d;
      this.abortSignal = l;
      y(this, "useTreeAsLocalModuleList", !1);
      y(this, "detached", !1);
      y(this, "dependenciesModule");
      y(this, "persistedModules", new Map());
      y(this, "persistedLocalIdsByTypeSlashNameCache", new WeakMap());
      y(this, "transientSaves", new Map());
      y(this, "lastSnapshot", {
        dependenciesModule: void 0,
        modules: new Map(),
        depsGraph: {},
        initialized: !1,
      });
      y(this, "modulesService");
      y(this, "lazyServerModulesForTransientSaves", new Map());
      y(this, "backgroundJob", null);
      y(this, "backgroundAbortController", null);
      y(this, "initialized", !1);
      y(this, "initializationStarted", !1);
      y(this, "readOnlyTree", !1);
      y(this, "preInitListPromise");
      y(this, "resolveInitialization", () => {
        throw new Error("initializationPromise has not executed yet");
      });
      y(this, "rejectInitialization", () => {
        throw new Error("initializationPromise has not executed yet");
      });
      y(
        this,
        "initializationPromise",
        new Promise((e, t) => {
          ((this.resolveInitialization = e), (this.rejectInitialization = t));
        })
      );
      y(this, "didSetupModuleEventStream", !1);
      y(this, "transientInfo", null);
      y(this, "divergenceReporter");
      y(this, "previousLocalModuleNodes");
      y(this, "treeNodesToUpdate", new Map());
      y(this, "treeNodesToDelete", []);
      y(this, "listeners", new Set());
      y(this, "transientSaveRetries", new Map());
      y(this, "transientSaveRelativeImportRetries", new Set());
      y(this, "downloadQueue", new $(1200));
    }
    hasPendingServerModules() {
      return this.lazyServerModulesForTransientSaves.size > 0;
    }
    processOnePendingServerModule() {
      return this.lazyServerModulesForTransientSaves.size === 0
        ? Promise.resolve(!1)
        : b(async () => {
            for (let [, e] of this.lazyServerModulesForTransientSaves)
              for (let t of e) {
                let o = this.persistedModules.get(t)?.localId;
                if (!o) continue;
                let s = this.persistedModules.get(o);
                if (s?.kind !== "server") continue;
                I.debug("\u{1F343} Process one server \u2192 local module", t);
                let n = await this.createLocalModuleFromModule(s),
                  a = D(this.persistedModules, (r) => {
                    r.set(s.localId, n);
                  });
                return (
                  this.setNextInternalState({
                    dependenciesModule: this.dependenciesModule,
                    persistedModules: a,
                    depsGraph: this.lastSnapshot.depsGraph,
                    didRemoteChange: !1,
                    transientSaves: this.transientSaves,
                  }),
                  !0
                );
              }
            return !1;
          });
    }
    async changeScope(e) {
      if (!this.hasPendingServerModules()) return;
      let t = At(e);
      !t ||
        t.size === 0 ||
        (await b(async () => {
          let o = new Set(),
            s = this.lastSnapshot.depsGraph;
          for (let [d, l] of this.lazyServerModulesForTransientSaves) Me(s, d, l, t, o);
          let n = [];
          for (let d of o) {
            let l = this.getModuleWithTypeSlashName(d);
            l?.kind === "server" && n.push(this.createLocalModuleFromModule(l));
          }
          if (
            (I.debug(
              "\u{1F343} Prioritizing making visible modules local after changing scope:",
              e.id,
              "/ Visible:",
              t,
              "/ Visible Dependencies:",
              o,
              "/ Server modules:",
              n.length
            ),
            n.length === 0)
          )
            return;
          let a = await Promise.all(n),
            r = D(this.persistedModules, (d) => {
              for (let l of a) d.set(l.localId, l);
            });
          this.setNextInternalState({
            dependenciesModule: this.dependenciesModule,
            persistedModules: r,
            depsGraph: s,
            didRemoteChange: !1,
            transientSaves: this.transientSaves,
          });
        }),
        this.makeLazyServerModulesLocalWhenIdle().catch(P));
    }
    async makeVisibleDependentServerModulesLocal(e) {
      if (!Ae.isOn("prioritizedModuleEvaluation")) return;
      let t = this.getActiveScope(),
        o = new Set(),
        s = At(t),
        n = new Set();
      for (let d of e) {
        let l = this.typeAndNameFromLocalId(d.localId, d.options.stableName),
          p = Q(l),
          u = this.lastSnapshot.depsGraph;
        (Me(u, p, n, s, o), this.lazyServerModulesForTransientSaves.set(p, n), o.delete(p));
      }
      let a = [];
      for (let d of o) {
        let l = this.getModuleWithTypeSlashName(d);
        l?.kind === "server" && a.push(this.createLocalModuleFromModule(l));
      }
      I.debug(
        "\u{1F343} Prioritizing dependent server modules after updating:",
        e.map((d) => d.localId),
        "/ Visible:",
        o,
        "/ Lazy:",
        n,
        "/ Server modules:",
        a.length
      );
      let r = this.persistedModules;
      if (a.length > 0) {
        let d = await Promise.all(a);
        r = D(r, (l) => {
          for (let p of d) l.set(p.localId, p);
        });
      }
      this.persistedModules = r;
    }
    async makeLazyServerModulesLocalWhenIdle() {
      (this.cancelBackgroundJob(), (this.backgroundAbortController = new AbortController()));
      let { signal: e } = this.backgroundAbortController;
      return (
        (this.backgroundJob = (async () => {
          try {
            for (; this.hasPendingServerModules() && !e.aborted; ) {
              let t = new xt();
              if (
                (this.runWhenIdle(() => {
                  if (e.aborted) {
                    t.resolve(!1);
                    return;
                  }
                  this.processOnePendingServerModule().then(t.resolve, t.reject);
                }),
                !(await t))
              )
                break;
            }
          } finally {
            ((this.backgroundJob = null), (this.backgroundAbortController = null));
          }
        })()),
        this.backgroundJob
      );
    }
    cancelBackgroundJob() {
      this.backgroundAbortController && this.backgroundAbortController.abort();
    }
    preInit() {
      this.preInitListPromise ||
        se() ||
        (Ce("modulesStorageStart"),
        (this.preInitListPromise = this.getModulesService()
          .then((e) => e?.list({}))
          .catch((e) => {
            I.error(e, { context: "preInit: failed to pre-fetch modules list" });
          })));
    }
    getTransientSave(e) {
      return this.transientSaves.get(e);
    }
    isReadOnly() {
      return this.readOnlyTree;
    }
    resetModuleStateAndPermissions(e) {
      ((this.readOnlyTree = e === "readonly"),
        (this.useTreeAsLocalModuleList =
          e === "readonly" || e === "readwrite-detached" || (se() && this.treeStore.tree.has(H))),
        (this.detached = e === "readwrite-detached"),
        !this.useTreeAsLocalModuleList &&
          this.modulesService &&
          this.setupModuleEventStreamIfNeeded(),
        this.treeNodesToUpdate.clear(),
        (this.treeNodesToDelete = []),
        this.transientSaves.size > 0 &&
          (I.reportErrorOncePerMinute(new Error("Discarding transient saves"), {
            count: this.transientSaves.size,
          }),
          this.setNextInternalState({
            dependenciesModule: this.dependenciesModule,
            persistedModules: this.persistedModules,
            transientSaves: new Map(),
            depsGraph: this.lastSnapshot.depsGraph,
            didRemoteChange: !0,
          })));
    }
    async waitForModulesToSave() {
      let e = Array.from(this.transientSaves.keys());
      for (let o of e) this.transientSaves.has(o) && (await this.update(o, {}));
      let t = this.transientSaves.size;
      t > 0 &&
        I.warn("waitForModulesToSave: transientSaves seems to be growing, ignoring rest:", t);
    }
    async initialize() {
      return this.initializationStarted
        ? this.initializationPromise
        : ((this.initializationStarted = !0),
          this.initializeInternal().then(this.resolveInitialization, (e) => {
            (I.reportError(e, { context: "Failed to initialize ModulesStorage: " }),
              this.rejectInitialization(e));
          }),
          this.initializationPromise);
    }
    setupModuleEventStreamIfNeeded() {
      this.didSetupModuleEventStream ||
        ((this.didSetupModuleEventStream = !0),
        f(
          this.modulesService,
          "ModulesStorage.useModuleEventStream: expected modules service to be initialized"
        ),
        this.modulesService
          .moduleEventsStream()
          .read(async ({ events: e }) => {
            let t = e.filter($s);
            this.handleRemoteModuleSaveEvents(t).catch(I.reportError);
            let o = e.filter(Xs);
            this.handleRemoteModuleDeleteEvents(o).catch(I.reportError);
          })
          .catch((e) => {
            I.reportError(e, { context: "Failed to read ModulesAPI event stream: " });
          }));
    }
    async initializeInternal() {
      if (((this.modulesService = await this.getModulesService()), !this.modulesService)) return;
      let e = oe.get(this.treeStore.tree)?.children;
      (se() && (this.useTreeAsLocalModuleList = !0),
        !this.treeStore.tree.has(H) &&
          this.useTreeAsLocalModuleList &&
          (I.reportError(
            "Can't useTreeAsLocalModuleList in a project that doesn't have a local modules list node"
          ),
          (this.useTreeAsLocalModuleList = !1)),
        this.useTreeAsLocalModuleList || this.setupModuleEventStreamIfNeeded());
      let o,
        s = performance.now();
      if (this.useTreeAsLocalModuleList)
        if (
          (I.info("init from tree data"), (this.previousLocalModuleNodes = e), !e || e.length === 0)
        )
          o = { data: [] };
        else {
          let p = e.map((u) => ({ moduleId: u.save.moduleId, saveId: u.save.saveId }));
          o = await this.modulesService.lookUpModules({ queries: p });
        }
      else
        (I.info("init from module list"),
          (o = (await this.preInitListPromise) ?? (await this.modulesService.list({}))));
      ((this.preInitListPromise = void 0),
        Ce("modulesStorageInit"),
        I.debug("listing modules took:", performance.now() - s, "millis"));
      let n = o.data.find(mt);
      n && (await this.updateDependenciesModule(n));
      let a = new Map(),
        r = 0,
        d = new Set();
      await Promise.all(
        o.data.map(async (p) => {
          if (Q(p) === G) return;
          let u = await this.createServerModuleFromData(p);
          (I.trace("init - create module", u.localId, u.id, u.saveId, u.savedAt),
            a.set(u.localId, u),
            e && ei(e, p) && (r += 1),
            d.add(u.localId));
        })
      );
      let l = this.createDependencyGraph(a);
      ((this.initialized = !0),
        this.setNextInternalState({
          dependenciesModule: this.dependenciesModule,
          persistedModules: a,
          transientSaves: this.transientSaves,
          depsGraph: l,
          didRemoteChange: !0,
        }),
        Ce("modulesStorageFirstPublish"),
        this.processTreeUpdates({ writeTreeData: !0 }),
        r > 0 &&
          I.reportError("Data loss detected based on modules saves and modules in tree.", {
            dataLossCount: r,
          }));
    }
    startDivergenceReporter() {
      this.divergenceReporter ||
        (this.treeStore.tree.has(H) &&
          ((this.divergenceReporter = new Ee({
            sample: () => this.sampleModulesTreeBackendDivergences(),
            runWhenIdle: (e) => this.runWhenIdle(e),
            abortSignal: this.abortSignal,
          })),
          this.divergenceReporter.start()));
    }
    sampleDivergencesNow() {
      this.divergenceReporter?.sampleNow();
    }
    async sampleModulesTreeBackendDivergences() {
      return b(async () => {
        if (
          !this.initialized ||
          !this.modulesService ||
          this.transientSaves.size > 0 ||
          this.hasPendingTreeData() ||
          this.treeStore.tree.isViewOnly ||
          this.detached
        )
          return { kind: "notSettled" };
        let e = oe.getModuleNodes(this.treeStore.tree),
          { data: t } = await this.modulesService.list({});
        return { kind: "sampled", divergences: _o(e, t) };
      });
    }
    createDependencyGraph(e) {
      let t = [];
      for (let o of e.values()) {
        let s = Q(o),
          n = o.imports.relative;
        t.push([s, n]);
      }
      return it(t);
    }
    hasPendingTreeData() {
      return this.treeNodesToUpdate.size > 0 || this.treeNodesToDelete.length > 0;
    }
    processTreeUpdates({ writeTreeData: e }) {
      this.initialized &&
        (this.syncLocalModules().catch((t) => {
          I.reportError(new Error("Failed to sync local modules from tree", { cause: t }));
        }),
        e && this.tryWriteTreeData());
    }
    async syncLocalModules() {
      if (!this.useTreeAsLocalModuleList) return;
      let e = oe.get(this.treeStore.tree)?.children;
      if (!e || this.previousLocalModuleNodes === e) return;
      let t = [],
        o = new Map();
      (this.previousLocalModuleNodes?.forEach((s) => {
        o.set(s.id, s);
      }),
        (this.previousLocalModuleNodes = e));
      for (let s of e) {
        let n = o.get(s.id);
        if ((o.delete(s.id), n === s)) continue;
        let a = s.save,
          r = this.persistedModules.get(s.id);
        Vo(r, a) ||
          (_s(s) && Vo(this.dependenciesModule, a)) ||
          (t.push({ moduleId: a.moduleId, saveId: a.saveId }),
          I.debug("syncLocalModules to update:", s.id));
      }
      if (
        (o.size > 0 &&
          (I.debug("syncLocalModules removing:", o.keys()),
          await this.handleRemoteModuleDeletes(Array.from(o.values()).map((s) => s.save.moduleId))),
        t.length > 0)
      ) {
        (I.debug("syncLocalModules updating:", t),
          f(
            this.modulesService,
            "ModulesStorage.refresh: expected modules service to be initialized"
          ));
        let s = performance.now(),
          n = await this.modulesService.lookUpModules({ queries: t });
        (I.debug("lookupModules took:", performance.now() - s, "millis"),
          await this.handleRemoteModuleSaves(n.data));
      }
    }
    canWriteTree() {
      return !this.treeStore.tree.isViewOnly;
    }
    tryWriteTreeData() {
      this.canWriteTree() &&
        this.hasPendingTreeData() &&
        this.processWhenReady(() => {
          this.canWriteTree() && this.writeTreeData();
        }, "nonUserEvent");
    }
    writeTreeData() {
      if (!this.hasPendingTreeData()) return;
      if (!this.canWriteTree()) throw new Error("Cannot write tree data");
      let e = this.treeStore.tree;
      (e.lineage.setEditReason("localmodules"), this.createLocalModulesListNodeIfNeeded(e));
      for (let t of this.treeNodesToDelete)
        this.persistedModules.get(t) || (I.debug("tryWriteTreeData, remove:", t), e.remove(t));
      this.treeNodesToDelete = [];
      for (let [
        t,
        { treeVersion: o, errors: s, persistedModule: n },
      ] of this.treeNodesToUpdate.entries())
        this.persistedModules.get(t)?.saveId === n.saveId &&
          (I.debug("tryWriteTreeData, write:", t, o, n.id, n.saveId, s),
          this.updateNode(e, t, o, n, s));
      this.treeNodesToUpdate.clear();
    }
    updateTreeNodeWithOwnTreeVersion(e, t) {
      this.process(() => {
        if (!this.canWriteTree()) {
          I.debug("updateTreeNodeWithOwnTreeVersion - readonly, dropping change");
          return;
        }
        (this.treeStore.tree.lineage.setEditReason("localmodules"),
          this.createLocalModulesListNodeIfNeeded(this.treeStore.tree));
        let s = this.treeStore.tree.get(e)?.save.treeVersion ?? this.treeStore.remoteTreeVersion;
        (I.debug("updateTreeNodeWithOwnTreeVersion:", e, s, t.id, t.saveId),
          this.updateNode(this.treeStore.tree, e, s, t));
      }, "nonUserEvent");
    }
    updateTreeNode(e, t, o, s, n) {
      return this.canWriteTree()
        ? (this.process(() => {
            (this.treeStore.tree.lineage.setEditReason("localmodules"),
              this.createLocalModulesListNodeIfNeeded(this.treeStore.tree),
              I.debug("updateTreeNode:", e, t, o.id, o.saveId),
              this.updateNode(this.treeStore.tree, e, t, o, s, n));
          }, "nonUserEvent"),
          !0)
        : (I.debug("updateTreeNode - readonly, buffering change"),
          this.treeNodesToUpdate.set(e, {
            treeVersion: t,
            persistedModule: o,
            errors: s,
            kitSectionsStructure: n,
          }),
          !0);
    }
    removeTreeNode(e) {
      this.canWriteTree()
        ? this.process(() => {
            (I.debug("removeTreeNode:", e), this.treeStore.tree.remove(e));
          })
        : this.treeNodesToDelete.push(e);
    }
    updateNode(e, t, o, s, n, a) {
      let r = e.get(t)?.asDraft() ?? new tt({ id: t });
      f(r instanceof tt);
      let d = s.metadata.pluginId,
        l = s.annotations ? ge(s.annotations) : r.save.annotations,
        p = fo(l?.default?.framerTrackingIds);
      p && (l.default.framerTrackingIds = p);
      let u = {
        treeVersion: o,
        moduleId: s.id,
        saveId: s.saveId,
        imports: s.imports?.relative,
        title: s.title,
        name: s.name,
        type: s.type,
        sourceRevision: s.sourceRevision,
        annotations: l,
        pluginId: J(d) ? d : r.save.pluginId,
      };
      (r.set({ save: u }), r.tree() || e.insertNode(r, H));
      let m = xo(s);
      if (!e.has(m) || (this.updateNodeKitSectionsStructure(e, m, a), !n)) return;
      let h = e.get(lo);
      if (
        (I.debug("Writing serialization errors from artifacts to tree for", m),
        h?.children?.forEach((A) => {
          let g = A.sourceNodeId ?? A.scopeId,
            c = ze(A.sourceNodeModuleType) || s.type === A.sourceNodeModuleType;
          !g || g !== m || !c || !co(A.type) || e.remove(A.id);
        }),
        n.length === 0)
      )
        return;
      let M = po.ensure(e);
      n.forEach((A) => e.insertNode(A, M.id));
    }
    updateNodeKitSectionsStructure(e, t, o) {
      if (!Nt(o)) return;
      let s = e.get(t);
      _(s) &&
        (We(s.kitSectionsStructure, o) ||
          (o.length === 0 && ze(s.kitSectionsStructure)) ||
          s.set({ kitSectionsStructure: o }));
    }
    getModuleTreeData(e) {
      return this.treeStore.tree.getNodeWithTrait(e, ot)?.save;
    }
    getKitSectionsStructure(e) {
      return this.treeStore.tree.getNodeWithTrait(e, _)?.kitSectionsStructure;
    }
    createLocalModulesListNodeIfNeeded(e) {
      if (e.has(H) || !this.canWriteTree()) return;
      (I.debug("ensureAllModulesExistInTree:", this.persistedModules.size), e.insertNode(new oe()));
      let t = this.treeStore.remoteTreeVersion;
      (this.persistedModules.forEach((o) => {
        this.updateNode(e, o.localId, t, o);
      }),
        this.dependenciesModule && this.updateNode(e, G, t, this.dependenciesModule));
    }
    getModuleWithTypeSlashName(e) {
      let t = this.findPersistedModuleLocalIdByTypeSlashName(this.persistedModules, e);
      if (t) return this.persistedModules.get(t);
    }
    async updateDependenciesModule(e) {
      f(mt(e), "updateDependenciesModule called with non dependencies module data");
      let t = await this.getDependenciesFiles(e),
        o = t?.dependenciesMapContent;
      if (!o) {
        let s = JSON.parse(t.importMapContent),
          n = $e(s);
        ((o = JSON.stringify(n)),
          this.readOnlyTree
            ? I.reportError(new Error("modules storage is read only"), {
                context: "modules storage is read only while calling updateDependenciesModule",
              })
            : (await this.updateDependenciesLocked(s, n),
              I.info("The missing dependencies file has now been created.")));
      }
      this.dependenciesModule = {
        kind: "dependencies",
        ...e,
        id: e.id,
        localId: e.localId,
        type: "config",
        name: e.name,
        importMapContent: t.importMapContent,
        dependenciesMapContent: o,
      };
    }
    async createServerModuleFromData(e) {
      let t = {
        kind: "server",
        ...e,
        id: e.id,
        localId: e.localId,
        moduleURL: e.baseURL + (e.type === "kit" ? e.files.source : e.files.module),
        update: performance.now(),
      };
      if (
        ((t.type === "codeFile" || t.type === "shader" || t.type === "webPageMetadata") &&
          (t.sourceContent = await this.fetchSourceContentFromData(e)),
        Do(t) && bo(t) === 0)
      ) {
        t.sourceContent = await this.fetchSourceContentFromData(e);
        let o = t.sourceContent.includes("useQueryData") ? 1 : 0;
        t.metadata = { ...t.metadata, compatibleCmsVersion: o };
      }
      return t;
    }
    async fetchSourceContentFromData(e) {
      return this.downloadQueue.run(async () => {
        let t = e.baseURL + e.files.source;
        return (await fetch(t)).text();
      });
    }
    async refresh() {
      if (this.initialized && !this.useTreeAsLocalModuleList)
        return (I.debug("refresh: acquiring lock"), b(() => this.refreshLocked()));
    }
    async refreshLocked() {
      (I.debug("refresh: start"),
        f(
          this.modulesService,
          "ModulesStorage.refresh: expected modules service to be initialized"
        ));
      let { data: e } = await this.modulesService.list({});
      I.debug("refresh: there's", e.length, "modules to process");
      let t = new Map(),
        o = new Set();
      await Promise.all(
        e.map(async (n) => {
          let a = n.localId;
          if (mt(n)) {
            this.dependenciesModule?.saveId !== n.saveId &&
              (await this.updateDependenciesModule(n));
            return;
          }
          let r = this.persistedModules.get(a);
          if (r?.saveId === n.saveId) t.set(a, r);
          else {
            let d = await this.createServerModuleFromData(n);
            (I.debug("refresh - updating module", d.localId, d.id, d.saveId, d.savedAt),
              t.set(a, d));
          }
          o.add(a);
        })
      );
      let s = this.createDependencyGraph(t);
      (this.setNextInternalState({
        dependenciesModule: this.dependenciesModule,
        persistedModules: t,
        transientSaves: this.transientSaves,
        depsGraph: s,
        didRemoteChange: !0,
      }),
        I.debug("refresh: finish"));
    }
    whenInitialized() {
      return this.initializationPromise;
    }
    async whenIdle() {
      await Promise.all([this.whenInitialized(), b(() => {})]);
    }
    isProcessing() {
      return !!(!this.initialized || this.transientSaves.size > 0 || nt.isLocked(Se));
    }
    hasLocalChanges() {
      return this.transientSaves.size > 0;
    }
    hasLocalCodeFileChanges() {
      if (this.transientSaves.size === 0) return !1;
      for (let e of this.transientSaves.values())
        if (e.type === "codeFile" || e.type === "shader" || e.type === "config") return !0;
      return !1;
    }
    addListener(e) {
      this.listeners.add(e);
    }
    removeListener(e) {
      this.listeners.delete(e);
    }
    notifyListeners(e) {
      this.listeners.forEach((t) => {
        try {
          t(e);
        } catch (o) {
          I.reportError(o);
        }
      });
    }
    subscribe(e) {
      return (
        this.addListener(e),
        e(
          Zo(
            this.dependenciesModule,
            void 0,
            this.persistedModules,
            this.transientSaves,
            this.lastSnapshot.depsGraph,
            new Map(),
            this.initialized,
            !1,
            !1
          )
        ),
        () => this.removeListener(e)
      );
    }
    getDependentsOfModule(e) {
      return this.lastSnapshot.depsGraph[e]?.dependents;
    }
    getUniqueNameForType(e, t) {
      let o = new Set();
      for (let s of this.persistedModules.values()) s.type === e && o.add(s.name);
      return wo(o, t);
    }
    async updateSources(e) {
      return b(async () => {
        let t = !1;
        for (let { localId: o, source: s, options: n } of e) {
          let a = Date.now();
          try {
            (await this.updateSourceLocked(o, { ...n, source: s }), (t = !0));
          } catch (r) {
            (r instanceof Be &&
              L({
                type: "add",
                variant: "error",
                primaryText: "Self-nested components",
                secondaryText: "won\u2019t update.",
                key: "component-circular-dependency",
                icon: "error",
                duration: Number.POSITIVE_INFINITY,
              }),
              I.reportError(r));
          } finally {
            let r = Date.now() - a;
            I.debug("\u23F1 update source", o, "in", r, "ms");
          }
        }
        return (
          await this.makeVisibleDependentServerModulesLocal(e),
          this.setNextInternalState({
            dependenciesModule: this.dependenciesModule,
            persistedModules: this.persistedModules,
            transientSaves: this.transientSaves,
            depsGraph: this.lastSnapshot.depsGraph,
            didRemoteChange: !1,
          }),
          this.makeLazyServerModulesLocalWhenIdle().catch(P),
          t
        );
      });
    }
    async updateDependenciesSource(e, t) {
      return b(async () => {
        f(this.dependenciesModule, "Dependency files must already exist to be updated.");
        let o = e === bt ? t : this.dependenciesModule.importMapContent,
          s = e === Dt ? t : this.dependenciesModule.dependenciesMapContent;
        return this.updateDependenciesLocked(JSON.parse(o), JSON.parse(s));
      });
    }
    async compileSubmodules(e, t) {
      let o = {};
      return (
        await Promise.all(
          [...t].map(async ([s, n]) => {
            let a = await this.compile({
              name: s,
              source: n,
              type: e,
              includeSourceMap: !1,
              addFramerMetadata: !1,
            });
            for (let d of a.imports.relative) {
              let l = go(d);
              if (!(l && t.has(l)))
                throw new Error("Submodules only support relative imports of other submodules");
            }
            let r = mo(s);
            o[r] = a.code;
          })
        ),
        o
      );
    }
    typeAndNameFromLocalId(e, t = !1) {
      if (t) return Bt(e);
      for (let o of this.lastSnapshot.modules.values()) if (o?.localId === e) return o;
      throw new Error(`Module entry for local id ${e} missing in internal snapshot`);
    }
    async updateSourceLocked(
      e,
      {
        source: t,
        submodules: o,
        binaryAssets: s = Yo,
        stableName: n = !1,
        assets: a,
        preventCircularImports: r,
        telemetrySession: d,
        treeVersion: l,
        sourceRevision: p,
        svgIcon: u,
        kitSectionsStructure: m,
      }
    ) {
      await this.whenInitialized();
      let h = this.typeAndNameFromLocalId(e, n),
        M = Q(h),
        A = await this.compile({
          localId: e,
          name: M,
          source: t,
          type: h.type,
          includeSourceMap: ht(h.type),
          telemetrySession: d,
        }),
        g = qo;
      o && (g = await this.compileSubmodules(h.type, o));
      let c = q(this.lastSnapshot.depsGraph, M, A.imports.relative);
      if (r && Qo(c, M)) throw new Be();
      let C = Zs(h.type, A.annotations),
        E = D(this.transientSaves, (S) => {
          let v = S.get(e),
            B,
            x = C?.framerIntrinsicWidth;
          x && (B = { ...B, intrinsicWidth: Number.parseInt(x, 10) });
          let T = C?.framerIntrinsicHeight;
          if (
            (T && (B = { ...B, intrinsicHeight: Number.parseInt(T, 10) }),
            (B = {
              ...B,
              compilerContractVersion: 1,
              treeAnnotations: !0,
              localModuleImportMapEntries: this.moduleUsesLocalImportMapSpecifiers(M),
            }),
            v)
          )
            ((v.saveId = N()),
              (v.moduleContent = A.code),
              (v.sourceContent = t),
              (v.sourceMapContent = A.sourceMap),
              (v.submoduleContents = g),
              (v.binaryAssetContents = s),
              (v.imports = A.imports),
              (v.exports = A.exportedNames),
              (v.reExportedModules = A.reExportedModules),
              (v.treeVersion = l ?? this.treeStore.remoteTreeVersion),
              (v.sourceRevision = p ?? v.sourceRevision),
              (v.annotations = A.annotations),
              (v.svgIcon = u ?? v.svgIcon),
              (v.kitSectionsStructure = m ?? v.kitSectionsStructure),
              (v.update = performance.now()),
              a && (v.assets = Array.from(a)),
              B && (v.metadata = { ...v.metadata, ...B }));
          else {
            let U = {
              localId: e,
              type: h.type,
              name: h.name,
              saveId: N(),
              moduleContent: A.code,
              sourceContent: t,
              sourceMapContent: A.sourceMap,
              submoduleContents: g,
              binaryAssetContents: s,
              imports: A.imports,
              exports: A.exportedNames,
              reExportedModules: A.reExportedModules,
              treeVersion: l,
              sourceRevision: p,
              svgIcon: u,
              kitSectionsStructure: m,
              annotations: A.annotations,
              update: performance.now(),
            };
            (a && (U.assets = Array.from(a)), B && (U.metadata = B), S.set(e, U));
          }
        });
      ((this.transientInfo ||= new Set()),
        this.transientInfo.add(e),
        (this.transientSaves = E),
        (this.lastSnapshot = { ...this.lastSnapshot, depsGraph: c }));
    }
    async create(e) {
      return b(() => this.createLocked(e));
    }
    async createLocked(e) {
      await this.whenInitialized();
      let { type: t, name: o, source: s, ...n } = e,
        a = Q({ type: t, name: o }),
        r = await this.compile({ name: a, source: s, type: t, includeSourceMap: ht(t) }),
        d = {
          localId: void 0,
          type: t,
          name: o,
          saveId: N(),
          moduleContent: r.code,
          sourceContent: s,
          sourceMapContent: r.sourceMap,
          submoduleContents: qo,
          binaryAssetContents: Yo,
          imports: r.imports,
          exports: r.exportedNames,
          reExportedModules: r.reExportedModules,
          treeVersion: e.treeVersion || this.treeStore.remoteTreeVersion,
          sourceRevision: e.sourceRevision,
          svgIcon: e.svgIcon,
          kitSectionsStructure: e.kitSectionsStructure,
          annotations: r.annotations,
          update: performance.now(),
        },
        l = await this.createBatchSaveForUpdatedModule(
          "$new",
          d,
          this.persistedModules,
          new Map(),
          new Map(),
          { type: t, name: o, ...n }
        );
      (f(!this.readOnlyTree, "modules storage is read only"), f(this.modulesService));
      let { data: p } = await this.modulesService.saveBatch({
          batch: [l],
          copyOnWrite: this.detached,
        }),
        { updatedModuleLocalId: u, nextPersistedModules: m } = this.processTransientSaveData({
          nextPersistedModules: this.persistedModules,
          transientSave: d,
          data: p,
        }),
        h = q(this.lastSnapshot.depsGraph, a, r.imports.relative);
      return (
        this.setNextInternalState({
          dependenciesModule: this.dependenciesModule,
          persistedModules: m,
          transientSaves: this.transientSaves,
          depsGraph: h,
          didRemoteChange: !0,
        }),
        u
      );
    }
    async update(e, t) {
      let o = this.persistedModules.get(e);
      return (
        f(o, "Trying to update an unknown module with localId:", e),
        b(async () => {
          let s = Date.now();
          try {
            return (
              await this.whenInitialized(),
              await this.upsertBatchLocked({ [e]: { ...t, name: o.name, type: o.type } })
            );
          } finally {
            let n = Date.now() - s;
            I.debug("\u23F1 update", e, "in", n, "ms");
          }
        })
      );
    }
    async rename(e, t) {
      return b(() => this.renameLocked(e, t));
    }
    async renameLocked(e, t) {
      await this.whenInitialized();
      let o = this.persistedModules,
        s = this.lastSnapshot.depsGraph,
        n = o.get(e);
      f(n, "Trying to rename an unknown module with localId:", e);
      let a = this.treeStore.remoteTreeVersion,
        r = Q(n);
      (f(!this.readOnlyTree, "modules storage is read only"),
        f(!this.detached, "renaming modules is not supported in detached mode"),
        f(this.modulesService));
      let d = await this.modulesService.update({ moduleId: n.id, name: t });
      f(d, "invalid update reply");
      let l = s[r]?.dependents,
        p = [],
        u = {},
        m = Q(d);
      if ((r !== m && ((s = Ie(s, r)), (s = q(s, m, n.imports.relative))), l)) {
        let h = [],
          M = [];
        for (let c of o.values()) {
          let C = Q(c);
          l.has(C) && (c.kind === "local" ? h.push(c) : M.push(c));
        }
        if (M.length > 0) {
          let c = await Promise.all(M.map((C) => this.createLocalModuleFromModule(C)));
          o = D(o, (C) => {
            for (let E of c) (C.set(E.localId, E), h.push(E));
          });
        }
        let A = [];
        for (let c of h) {
          let C = Q(c),
            E = et(C, `${n.type}/${t}`);
          f(E, "Failed to create relative path to", n.type, "/", t);
          let S = et(C, r);
          f(S);
          let v = c.imports.relative.indexOf(S);
          if (v === -1) {
            I.warn(c.localId, "doesn't import", S);
            continue;
          }
          let B = [...c.imports.relative];
          B[v] = E;
          let x = { absolute: c.imports.absolute, bare: c.imports.bare, relative: B },
            T = os(c.sourceContent, S, E),
            U = os(c.moduleContent, S, E);
          ((u[c.localId] = { sourceContent: T, moduleContent: U, imports: x }), f(c.files.source));
          let De = {
            type: c.type,
            moduleId: c.id,
            name: c.name,
            saveId: N(),
            patchSaveId: c.saveId,
            files: [{ name: c.files.source, type: "source", content: T }],
            imports: x,
            detached: this.detached,
          };
          A.push(De);
        }
        f(!this.readOnlyTree, "modules storage is read only");
        let { data: g } = await this.modulesService.saveBatch({
          batch: A,
          copyOnWrite: this.detached,
        });
        p = g;
      }
      ((o = D(o, (h) => {
        if (this.updateTreeNode(e, a, d)) {
          n.kind === "server"
            ? h.set(e, {
                ...d,
                kind: "server",
                localId: d.localId,
                id: d.id,
                moduleURL: d.baseURL + d.files.module,
                sourceContent: n.sourceContent,
                update: performance.now(),
              })
            : h.set(e, {
                ...d,
                kind: "local",
                localId: d.localId,
                id: d.id,
                moduleURL: d.baseURL + d.files.module,
                sourceContent: n.sourceContent,
                moduleContent: n.moduleContent,
                sourceMapContent: n.sourceMapContent,
                submoduleContents: n.submoduleContents,
                binaryAssetContents: n.binaryAssetContents,
                update: performance.now(),
              });
          for (let A of p) {
            let g = A.localId,
              c = h.get(g);
            f(c?.kind === "local", "dependent module must be local:", g);
            let C = u[g];
            (f(C, "dependent module update must exist:", g),
              this.updateTreeNode(g, a, A) &&
                (h.set(g, {
                  ...A,
                  kind: "local",
                  localId: g,
                  id: A.id,
                  moduleURL: A.baseURL + A.files.module,
                  moduleContent: C.moduleContent,
                  sourceContent: C.sourceContent,
                  sourceMapContent: c.sourceMapContent,
                  submoduleContents: c.submoduleContents,
                  binaryAssetContents: c.binaryAssetContents,
                  imports: C.imports,
                  exports: A.exports,
                  reExportedModules: A.reExportedModules,
                  submodules: A.submodules,
                  binaryAssets: A.binaryAssets,
                  sourceRevision: c.sourceRevision,
                  update: c.update,
                }),
                (s = q(s, Q(A), C.imports.relative))));
          }
        }
      })),
        this.setNextInternalState({
          dependenciesModule: this.dependenciesModule,
          persistedModules: o,
          transientSaves: this.transientSaves,
          depsGraph: s,
          didRemoteChange: !0,
        }));
    }
    async upsert(e, t) {
      return b(async () => {
        let o = Date.now();
        try {
          return (await this.whenInitialized(), await this.upsertBatchLocked({ [e]: t }));
        } finally {
          let s = Date.now() - o;
          I.debug("\u23F1 upsert", e, "in", s, "ms");
        }
      });
    }
    async upsertBatch(e) {
      return b(async () => {
        let t = Date.now();
        try {
          return (await this.whenInitialized(), await this.upsertBatchLocked(e));
        } finally {
          let o = Date.now() - t;
          I.debug("\u23F1 upsert batch in", o, "ms");
        }
      });
    }
    async delete(e) {
      return b(() => this.deleteLocked(e));
    }
    async deleteLocked(e) {
      let t = Array.isArray(e) ? e : [e];
      if (!t.length) return;
      await this.whenInitialized();
      let o = t.map((l) => {
          let p = this.persistedModules.get(l);
          return (f(p, "Trying to delete an unknown module", l, "It was never persisted."), p);
        }),
        { modulesService: s } = this;
      f(s);
      let n = [];
      (await Promise.all(
        o.map(async (l) => {
          try {
            (await s.delete({ moduleId: l.id }), n.push(l));
          } catch (p) {
            I.warn(String(p));
          }
        })
      ),
        f(n.length > 0, "Failed to delete module(s)"));
      let a = this.lastSnapshot.depsGraph;
      for (let l of n) {
        let p = Q(l);
        a = Ie(a, p);
      }
      let r = D(this.persistedModules, (l) => {
          for (let { localId: p } of n) (l.delete(p), this.removeTreeNode(p));
        }),
        d = D(this.transientSaves, (l) => {
          for (let { localId: p } of n) l.delete(p);
        });
      this.setNextInternalState({
        dependenciesModule: this.dependenciesModule,
        persistedModules: r,
        transientSaves: d,
        depsGraph: a,
        didRemoteChange: !0,
      });
    }
    async restore(e, t) {
      return b(() => this.restoreLocked(e, t));
    }
    async restoreLocked(e, t) {
      await this.whenInitialized();
      let { modulesService: o } = this;
      f(o);
      let s = await o.restore({ moduleId: e, name: t }),
        n = await this.createServerModuleFromData(s),
        a = Q(n),
        r = n.localId,
        d = D(this.persistedModules, (p) => {
          p.set(r, n);
        }),
        l = q(this.lastSnapshot.depsGraph, a, n.imports.relative);
      return (
        this.setNextInternalState({
          dependenciesModule: this.dependenciesModule,
          persistedModules: d,
          transientSaves: this.transientSaves,
          depsGraph: l,
          didRemoteChange: !0,
        }),
        this.updateTreeNodeWithOwnTreeVersion(r, n),
        n
      );
    }
    async publish(e, t) {
      return b(() => this.publishLocked(e, t));
    }
    async publishLocked(e, { namespace: t, name: o, version: s }) {
      await this.whenInitialized();
      let n = this.persistedModules.get(e);
      (f(n, "Trying to publish an unknown module", e, "It was never persisted."),
        f(!this.readOnlyTree, "modules storage is read only"),
        f(this.modulesService));
      let a = await this.modulesService.publish({
          moduleId: n.id,
          saveId: n.saveId,
          namespace: t,
          name: o,
          version: s,
        }),
        r = D(this.persistedModules, (d) => {
          let l = d.get(e);
          l &&
            d.set(e, {
              ...l,
              lastPublish: {
                namespaceId: a.namespaceId,
                name: a.name,
                version: a.version,
                importURL: a.importURL,
              },
            });
        });
      return (
        this.setNextInternalState({
          dependenciesModule: this.dependenciesModule,
          persistedModules: r,
          transientSaves: this.transientSaves,
          depsGraph: this.lastSnapshot.depsGraph,
          didRemoteChange: !0,
        }),
        a
      );
    }
    async addNpmDependencies(e) {
      return b(async () => {
        await this.whenInitialized();
        let t;
        this.dependenciesModule?.importMapContent
          ? (t = JSON.parse(this.dependenciesModule?.importMapContent))
          : (t = { imports: {} });
        let o;
        this.dependenciesModule?.dependenciesMapContent
          ? (o = JSON.parse(this.dependenciesModule?.dependenciesMapContent))
          : (o = { dependencies: {} });
        let s = new Set(Object.keys(t.imports).filter((p) => p.endsWith("/"))),
          n = (p) => {
            let u = p.indexOf("/");
            for (; u !== -1; ) {
              let m = p.slice(0, u + 1);
              if (s.has(m)) return !0;
              u = p.indexOf("/", u + 1);
            }
            return !1;
          },
          a = Array.isArray(e) ? e : [e];
        if (
          ((a = a.filter((p) => {
            if (k.has(p.target) || eo(p.target)) return !1;
            let u = $t(p);
            return !(t.imports?.[u] || n(u));
          })),
          a.length === 0)
        )
          return { dependenciesMap: o };
        a = a.map((p) => {
          if (o.dependencies[p.target]) {
            let m =
              t.imports[p.target] ??
              Object.entries(t?.imports).find(([M]) => M.startsWith(p.target))?.[1];
            if (Ae.isOn("importMapPruning") && !m) return p;
            f(m, "Import map must contain all dependencies from dependencies map");
            let h = no(m)?.version;
            return h ? { ...p, target: `${p.target}@${h}` } : p;
          }
          let u = j[p.target];
          return u ? { ...p, target: `${p.target}@${u}` } : p;
        });
        let { importMap: r, resolvedDependencies: d } = await Xt(t, a, k, j),
          l = await this.extendCurrentDependenciesMap(d);
        return (
          d.forEach(({ name: p, version: u }) => uo("npm_dependency_add", { name: p, semver: u })),
          I.debug({ newImportMap: r, newDependenciesMap: l }),
          await this.updateDependenciesLocked(r, l),
          { dependenciesMap: l }
        );
      });
    }
    async reinstallNpmDependencies() {
      return b(async () => {
        let { currentImportMap: e, currentDependenciesMap: t } = this.getCurrentDependencies();
        delete e.scopes;
        let { importMap: o } = await Zt(e, k, j);
        return (await this.updateDependenciesLocked(o, t), o);
      });
    }
    async uninstallBlockedNpmDependencies() {
      return b(async () => {
        let { currentImportMap: e, currentDependenciesMap: t } = this.getCurrentDependencies(),
          o = Ye(t),
          s = await to(e);
        return (await this.updateDependenciesLocked(s, o), s);
      });
    }
    async clearNpmDependencies() {
      return b(async () => this.updateDependenciesLocked({ imports: {} }, { dependencies: {} }));
    }
    async removeBlockedNpmDependencies() {
      return b(async () => {
        let { currentImportMap: e, currentDependenciesMap: t } = this.getCurrentDependencies(),
          o = Ye(t);
        return (await this.updateDependenciesLocked(e, t), o);
      });
    }
    async rebuildImportMapFromDependencies() {
      return b(async () => {
        let e = this.dependenciesModule?.dependenciesMapContent,
          t = e ? JSON.parse(e) : { dependencies: {} },
          o = await io(t, k, j);
        return (await this.updateDependenciesLocked(o, t), o);
      });
    }
    getLocalModuleBareImports() {
      let e = new Set();
      for (let t of this.persistedModules.values()) for (let o of t.imports.bare) e.add(o);
      return e;
    }
    getComposedProjectImportMap() {
      let e = ao();
      if (this.dependenciesModule?.importMapContent) {
        let o = JSON.parse(this.dependenciesModule.importMapContent);
        e = te(e, o, "source-wins");
      }
      let t = this.createLocalModuleImportMap();
      return ((e = te(e, t, "source-wins")), e);
    }
    createLocalModuleImportMap() {
      let e = {};
      for (let t of this.persistedModules.values()) {
        let o = t;
        if (J(o.files.module)) {
          let s = Ue(o.localId, o.files.module);
          e[s] = o.moduleURL;
        }
      }
      return { imports: e };
    }
    async scopeExternalImportMap(e, t) {
      return Xe(e, k, j, t);
    }
    async generatePrunedImportMapFromEntryPoints(e, t) {
      let o = await Xe(e, k, j, t),
        s = Object.fromEntries(
          Object.entries(o.imports ?? {}).filter(([l]) => !k.has(l) && !Ke(l))
        ),
        n = new Set([...this.persistedModules.values()].map((l) => l.baseURL)),
        a = {},
        r = [];
      for (let l in o.scopes) {
        let p = o.scopes[l];
        if (!p) continue;
        let u = l === "https://ga.jspm.io/",
          m = Object.fromEntries(
            Object.entries(p).filter(([h]) => !((u && k.has(h)) || Ke(h) || Qt(h)))
          );
        Object.keys(m).length > 0 && (n.has(l) ? Object.assign(a, m) : r.push([l, m]));
      }
      let d = {
        imports: Object.assign(s, a),
        ...(r.length > 0 ? { scopes: Object.fromEntries(r) } : {}),
      };
      return (oo(d), d);
    }
    async pruneProjectImportMapFromEntryPoints(e, t = {}) {
      return b(async () => {
        let o = this.getComposedProjectImportMap(),
          s = t.additionalImportMap ? te(o, t.additionalImportMap, "source-wins") : o,
          n = await this.generatePrunedImportMapFromEntryPoints(e, s),
          a = this.dependenciesModule?.dependenciesMapContent,
          r = a ? JSON.parse(a) : { dependencies: {} },
          d = new Set(Object.keys(n.imports ?? {})),
          l = {
            dependencies: Object.fromEntries(
              Object.entries(r.dependencies ?? {}).filter(([p]) => d.has(p))
            ),
          };
        return (
          t.dryRun
            ? (I.info("Dry run import map", n), I.info("Dry run dependencies map", l))
            : await this.updateDependenciesLocked(n, l),
          n
        );
      });
    }
    async unsafeUpgradeDependency(e, t, o) {
      return b(async () => {
        let { currentImportMap: s, currentDependenciesMap: n } = this.getCurrentDependencies(),
          a = await so(s, e, t, o),
          r = $e(a),
          d = Ve(r, n);
        return (await this.updateDependenciesLocked(a, d), a);
      });
    }
    async extendCurrentImportMap(e, t) {
      return b(async () => {
        let { currentImportMap: o, currentDependenciesMap: s } = this.getCurrentDependencies(),
          n = te(o, e),
          a = Ve(s, t);
        return this.updateDependenciesLocked(n, a);
      });
    }
    async extendCurrentDependenciesMap(e) {
      let t = {};
      for (let s of e) t[s.name] = s.version;
      let o = this.dependenciesModule?.dependenciesMapContent
        ? JSON.parse(this.dependenciesModule?.dependenciesMapContent)
        : { dependencies: {} };
      return ((o.dependencies = Object.assign(t, o.dependencies)), o);
    }
    getCurrentDependencies() {
      let e = this.dependenciesModule?.importMapContent
          ? JSON.parse(this.dependenciesModule?.importMapContent)
          : { imports: {} },
        t = this.dependenciesModule?.dependenciesMapContent
          ? JSON.parse(this.dependenciesModule?.dependenciesMapContent)
          : { dependencies: {} };
      return { currentImportMap: e, currentDependenciesMap: t };
    }
    async updateDependenciesLocked(e, t) {
      let o = JSON.stringify(e, null, 4),
        s = JSON.stringify(t, null, 4);
      if (
        o === this.dependenciesModule?.importMapContent &&
        s === this.dependenciesModule?.dependenciesMapContent
      )
        return;
      let n = {
        moduleId: "$upsertName",
        name: Ge,
        saveId: N(),
        type: "config",
        files: [
          { name: "importMap.json", type: "importMap", content: o },
          { name: "dependencies.json", type: "dependencies", content: s },
        ],
        imports: { absolute: [], relative: [], bare: [] },
        detached: this.detached,
      };
      (f(!this.readOnlyTree, "modules storage is read only"), f(this.modulesService));
      let {
        data: [a],
      } = await this.modulesService.saveBatch({ batch: [n], copyOnWrite: this.detached });
      (f(a, "Modules API must return an updated import map after savebatch"),
        this.updateTreeNodeWithOwnTreeVersion(G, a));
      let r = {
        kind: "dependencies",
        importMapContent: o,
        dependenciesMapContent: s,
        ...a,
        id: a.id,
        localId: a.localId,
        type: a.type,
        name: a.name,
      };
      this.setNextInternalState({
        dependenciesModule: r,
        persistedModules: this.persistedModules,
        transientSaves: this.transientSaves,
        depsGraph: this.lastSnapshot.depsGraph,
        didRemoteChange: !0,
      });
    }
    getPersistedDependenciesModule() {
      return this.dependenciesModule;
    }
    getPersistedModuleByGlobalId(e) {
      for (let t of this.persistedModules.values()) if (t.id === e) return t;
    }
    getPersistedModuleByLocalId(e) {
      return this.persistedModules.get(e);
    }
    getTransientSaveByLocalId(e) {
      return this.transientSaves.get(e);
    }
    async handleRemoteModuleDeleteEvents(e) {
      if (!this.useTreeAsLocalModuleList) return this.handleRemoteModuleDeletes(e.map((t) => t.id));
    }
    async handleRemoteModuleDeletes(e) {
      await b(async () => {
        let t = [],
          o = [];
        for (let r of e) {
          let d = this.getPersistedModuleByGlobalId(r);
          d && (o.push(Q(d)), t.push(d.localId));
        }
        let s = D(this.persistedModules, (r) => {
            for (let d of t) r.delete(d);
          }),
          n = D(this.transientSaves, (r) => {
            for (let d of t) r.delete(d);
          }),
          a = this.lastSnapshot.depsGraph;
        for (let r of o) a = Ie(a, r);
        this.setNextInternalState({
          dependenciesModule: this.dependenciesModule,
          persistedModules: s,
          transientSaves: n,
          depsGraph: a,
          didRemoteChange: !0,
        });
      });
    }
    async handleRemoteModuleSaveEvents(e) {
      if (!this.useTreeAsLocalModuleList)
        return this.handleRemoteModuleSaves(e.map((t) => t.module));
    }
    async handleRemoteModuleSaves(e) {
      let t = [],
        o = [];
      for (let a of e) Q(a) === G ? t.push(a) : o.push(a);
      let s,
        n = t.length > 0 ? t[t.length - 1] : void 0;
      if (n) {
        let { importMapContent: a, dependenciesMapContent: r } = await this.getDependenciesFiles(n);
        (f(r, "No dependencies file exists for the remote update!"),
          (s = {
            kind: "dependencies",
            ...n,
            id: n.id,
            localId: n.localId,
            type: "config",
            name: n.name,
            importMapContent: a,
            dependenciesMapContent: r,
          }));
      }
      await b(async () => {
        s && (this.dependenciesModule = s);
        let a = this.persistedModules,
          r = this.lastSnapshot.depsGraph,
          d = await Promise.all(o.map((p) => this.createServerModuleFromData(p)));
        d.length > 0 &&
          (a = D(this.persistedModules, (p) => {
            for (let u of d) p.set(u.localId, u);
          }));
        let l = [];
        for (let p of d)
          this.transientSaves.has(p.localId) ||
            l.push({ moduleTypeSlashName: Q(p), dependencies: p.imports.relative });
        (l.length > 0 && (r = Bo(this.lastSnapshot.depsGraph, l)),
          this.setNextInternalState({
            dependenciesModule: this.dependenciesModule,
            persistedModules: a,
            transientSaves: this.transientSaves,
            depsGraph: r,
            didRemoteChange: !0,
            multiplayerChange: !0,
          }));
      });
    }
    getPatchTransientSave(e, t, o) {
      return {
        saveId: o,
        type: t.type,
        name: t.name,
        localId: e,
        moduleContent: t.moduleContent,
        sourceContent: t.sourceContent,
        sourceMapContent: t.sourceMapContent,
        submoduleContents: t.submoduleContents,
        binaryAssetContents: t.binaryAssetContents,
        imports: t.imports,
        exports: t.exports,
        reExportedModules: t.reExportedModules,
        sourceRevision: t.sourceRevision,
        update: t.update,
      };
    }
    async upsertBatchLocked(e) {
      if (this.readOnlyTree) return;
      let t = this.persistedModules,
        o = new Map(),
        s = [],
        n = new Map();
      for (let m of t.values()) {
        let h = Q(m);
        (n.set(h, m.localId), s.push([h, m.imports.relative]));
      }
      let a = new Map();
      for (let m in e) {
        let h = m,
          M = e[h];
        f(M, "No persist params found for", h);
        let A = this.transientSaves.get(h),
          g = A ?? t.get(h);
        f(g, "No module found for", h);
        let c = Q(g);
        (a.set(c, A?.saveId ?? N()),
          o.set(c, Y(M.name)),
          n.set(c, h),
          A && s.push([c, A.imports.relative]));
      }
      let r = it(s),
        d = new Map(),
        l = D(this.transientSaves, (m) => {
          for (let h in e) m.delete(h);
        }),
        p,
        u = !1;
      try {
        let {
          primaryBatch: m,
          dependentBatch: h,
          repairLocalIdWaves: M,
          nextPersistedModules: A,
        } = await this.createBatch(e, d, t, r, n, a, o);
        (f(!this.readOnlyTree, "modules storage is read only"), f(this.modulesService));
        let g = m.concat(h),
          { data: c } = await this.modulesService.saveBatch({
            batch: g,
            copyOnWrite: this.detached,
          });
        if (
          ((u = !0),
          (this.detached || se()) && M.length > 0 && this.didSaveBatchRemapModuleIds(g, c))
        ) {
          let E = this.applyBatchSaveDataWithoutTreeUpdates(A, c, d),
            S = this.createRepairSaveIdsForWaves(a, M, E),
            v = [];
          for (let B of M) {
            let x = await this.createBatchSavesForDependentModules(B, E, S, o),
              { data: T } = await this.modulesService.saveBatch({
                batch: x,
                copyOnWrite: this.detached,
              });
            (v.push(...T), (E = this.applyDependentSaveDataWithoutTreeUpdates(E, T)));
          }
          t = this.applyBatchSaveDataToPersistedModules({
            nextPersistedModules: A,
            data: this.combineLatestSaveData(c, v),
            transientSaves: d,
            sources: e,
          });
        } else
          t = this.applyBatchSaveDataToPersistedModules({
            nextPersistedModules: A,
            data: c,
            transientSaves: d,
            sources: e,
          });
      } catch (m) {
        t = this.persistedModules;
        let h = this.getTransientSavesBatchId(d),
          M = this.transientSaveRetries.get(h) ?? 0,
          { error: A, dropTransient: g } = this.handlePersistenceError(m, M, () => {
            (this.transientSaveRetries.set(h, M + 1),
              setTimeout(
                () => {
                  this.retryPersistingBatch({
                    sources: e,
                    transientSaves: d,
                    batchId: h,
                    retryCount: M,
                    error: A,
                    regenerateSaveIds: u,
                  }).catch((c) => {
                    I.reportError(c, { context: "ModulesStorage: retryPersistingBatch failed." });
                  });
                },
                1e3 + M * 1e3
              ));
          });
        if (!g) return;
        p = A;
      }
      if (
        (this.setNextInternalState({
          dependenciesModule: this.dependenciesModule,
          persistedModules: t,
          transientSaves: l,
          depsGraph: this.lastSnapshot.depsGraph,
          didRemoteChange: !0,
        }),
        this.transientSaveRetries.delete(this.getTransientSavesBatchId(d)),
        p)
      )
        throw p;
    }
    getTransientSavesBatchId(e) {
      return Array.from(e.values())
        .map((t) => t.saveId)
        .join("-");
    }
    async retryPersistingBatch({
      sources: e,
      transientSaves: t,
      batchId: o,
      retryCount: s,
      error: n,
      regenerateSaveIds: a,
    }) {
      (ve(n) && (this.transientSaveRelativeImportRetries.add(o), await this.refresh()),
        await b(async () => {
          if (a) {
            let r = this.regenerateTransientSaveIdsForRetry(t);
            if (!r) return;
            (this.transientSaveRetries.delete(o),
              this.transientSaveRetries.set(r, s + 1),
              I.debug("retrying saving batchId with fresh save ids:", o),
              await this.upsertBatchLocked(e));
            return;
          }
          this.areTransientSavesUnchanged(t) &&
            (I.debug("retrying saving batchId with same save ids:", o),
            await this.upsertBatchLocked(e));
        }));
    }
    areTransientSavesUnchanged(e) {
      for (let [t, o] of e) {
        let s = this.transientSaves.get(t);
        if (!s || s.saveId !== o.saveId) return !1;
      }
      return !0;
    }
    regenerateTransientSaveIdsForRetry(e) {
      let t = !0,
        o = D(this.transientSaves, (n) => {
          for (let [a, r] of e) {
            let d = n.get(a);
            if (!d || d.saveId !== r.saveId) {
              t = !1;
              return;
            }
          }
          for (let a of e.keys()) {
            let r = n.get(a);
            (f(r, "Expected transient save while regenerating save IDs:", a),
              (r.saveId = N()),
              (r.update = performance.now()));
          }
        });
      if (!t) return;
      this.setNextInternalState({
        dependenciesModule: this.dependenciesModule,
        persistedModules: this.persistedModules,
        transientSaves: o,
        depsGraph: this.lastSnapshot.depsGraph,
        didRemoteChange: !1,
      });
      let s = new Map();
      for (let n of e.keys()) {
        let a = o.get(n);
        (f(a, "Expected regenerated transient save ID:", n), s.set(n, a));
      }
      return this.getTransientSavesBatchId(s);
    }
    async createBatchSavesForDependentModules(e, t, o, s) {
      let n = [];
      for (let a of e) n.push(await this.createBatchSaveForDependentModule(a, t, o, s));
      return n;
    }
    didSaveBatchRemapModuleIds(e, t) {
      let o = new Map(t.map((s) => [s.saveId, s]));
      return e.some((s) => {
        if (s.moduleId === "$new" || s.moduleId === "$upsertName") return !1;
        let n = o.get(s.saveId);
        return n !== void 0 && n.id !== s.moduleId;
      });
    }
    createRepairSaveIdsForWaves(e, t, o) {
      let s = new Map(e);
      for (let n of t)
        for (let a of n) {
          let r = o.get(a);
          (f(r, a, "is not found in persistedModules"), s.set(Q(r), N()));
        }
      return s;
    }
    combineLatestSaveData(e, t) {
      let o = new Map();
      for (let s of e) o.set(s.localId, s);
      for (let s of t) o.set(s.localId, s);
      return Array.from(o.values());
    }
    applyBatchSaveDataWithoutTreeUpdates(e, t, o) {
      return D(e, (s) => {
        for (let n of t) {
          let a = n.localId,
            r = o.get(a);
          if (r) s.set(a, this.createPersistedLocalModuleFromSaveData(n, r));
          else {
            let d = s.get(a);
            (f(d, a, "is not in persistedModules"), this.applyDependentModuleSaveData(d, n));
          }
        }
      });
    }
    applyDependentSaveDataWithoutTreeUpdates(e, t) {
      return D(e, (o) => {
        for (let s of t) {
          let n = s.localId,
            a = o.get(n);
          (f(a, n, "is not in persistedModules"), this.applyDependentModuleSaveData(a, s));
        }
      });
    }
    applyBatchSaveDataToPersistedModules({
      nextPersistedModules: e,
      data: t,
      transientSaves: o,
      sources: s,
    }) {
      return D(e, (n) => {
        for (let a of t) {
          let r = a.localId,
            d = o.get(r);
          if (!d) {
            let M = n.get(r);
            (f(M, r, "is not in persistedModules"),
              this.updateTreeNodeWithOwnTreeVersion(r, a),
              this.applyDependentModuleSaveData(M, a));
            continue;
          }
          let l = this.createPersistedLocalModuleFromSaveData(a, d),
            p = s[r]?.errors,
            u = d.kitSectionsStructure,
            m = d.treeVersion ?? this.treeStore.remoteTreeVersion;
          if (!this.updateTreeNode(a.localId, m, l, p, u)) return;
          n.set(r, l);
        }
      });
    }
    createPersistedLocalModuleFromSaveData(e, t) {
      return {
        kind: "local",
        ...e,
        id: e.id,
        localId: e.localId,
        imports: t.imports,
        moduleURL: e.baseURL + e.files.module,
        sourceContent: t.sourceContent,
        sourceMapContent: t.sourceMapContent,
        moduleContent: t.moduleContent,
        submoduleContents: t.submoduleContents,
        binaryAssetContents: t.binaryAssetContents,
        sourceRevision: t.sourceRevision,
        annotations: t.annotations,
        update: t.update,
      };
    }
    applyDependentModuleSaveData(e, t) {
      ((e.id = t.id),
        (e.saveId = t.saveId),
        (e.moduleURL = t.baseURL + t.files.module),
        (e.baseURL = t.baseURL));
    }
    async createBatch(e, t, o, s, n, a, r) {
      let d = [],
        l = [],
        p = new Set();
      for (let A in e) {
        let g = A,
          c = e[g];
        f(c, "No persist params found for", g);
        let C = this.transientSaves.get(g);
        if (!C) {
          let v = o.get(g);
          (f(
            v,
            `Trying to persist ${g} but it doesn't have neither a corresponding transient save nor an existing persisted module.`
          ),
            v.kind === "server" &&
              ((v = await this.createLocalModuleFromModule(v)),
              (o = D(o, (x) => {
                v && x.set(v.localId, v);
              }))));
          let B = a.get(g);
          (f(B, "No save id found for", g), (C = this.getPatchTransientSave(g, v, B)));
        }
        t.set(g, C);
        let E = Q(C);
        C.imports.relative.length > 0 && !this.moduleUsesLocalImportMapSpecifiers(E) && p.add(E);
        let S = await this.createBatchSaveForUpdatedModule(
          this.persistedModules.get(g)?.id ?? "$upsertName",
          C,
          o,
          a,
          r,
          c
        );
        d.push(S);
      }
      let u = new Map();
      for (let A in e) {
        let g = A,
          c = e[g];
        f(c, "No persist params found for", g);
        let C = Q(c),
          E = new Set();
        (Me(s, C, E), u.set(g, E));
      }
      let m = [];
      for (let A of u.values())
        for (let g of A) {
          let c = n.get(g);
          f(c, "Cannot find localId for", g);
          let C = o.get(c);
          C?.kind === "server" && m.push(this.createLocalModuleFromModule(C));
        }
      if (m.length > 0) {
        let A = await Promise.all(m);
        o = D(o, (g) => {
          for (let c of A) g.set(c.localId, c);
        });
      }
      for (let A of u.values()) for (let g of A) a.has(g) || a.set(g, N());
      let h = new Set();
      for (let [A, g] of u) {
        let [c] = he(A);
        for (let C of g) {
          let E = n.get(C);
          if (
            (f(E, "Cannot find localId for", C),
            t.has(E) ||
              h.has(C) ||
              (o.get(E)?.metadata.localModuleImportMapEntries === !0 &&
                this.moduleUsesLocalImportMapSpecifiers(C) &&
                (c !== "codeFile" || !s[C]?.dependencies.has(A))))
          )
            continue;
          (h.add(C), p.add(C));
          let B = await this.createBatchSaveForDependentModule(E, o, a, r);
          l.push(B);
        }
      }
      let M = this.createRepairLocalIdWaves(Array.from(p), s, n);
      return { primaryBatch: d, dependentBatch: l, repairLocalIdWaves: M, nextPersistedModules: o };
    }
    createRepairLocalIdWaves(e, t, o) {
      let s = new Set(e),
        n = new Map(),
        a = new Set(),
        r = (l) => {
          let p = n.get(l);
          if (p !== void 0) return p;
          if (a.has(l)) return 1;
          a.add(l);
          let u = 1;
          for (let m of t[l]?.dependencies ?? []) s.has(m) && (u = Math.max(u, r(m) + 1));
          return (a.delete(l), n.set(l, u), u);
        },
        d = [];
      for (let l of e) {
        let p = r(l),
          u = o.get(l);
        f(u, "Cannot find localId for", l);
        let m = d[p - 1] ?? [];
        (m.push(u), (d[p - 1] = m));
      }
      return d.filter((l) => l.length > 0);
    }
    handlePersistenceError(e, t, o) {
      let s = e instanceof Error ? e.message : "",
        n = e instanceof Je ? e.code : 0,
        a = e instanceof Je ? e.status : 0,
        r = n === 1002,
        d = n === -1e3,
        l = a >= 300 && a !== 400 && a !== 401 && a !== 403,
        p = d || l || ve(e),
        u = 20,
        m = 2;
      if (ve(e))
        return !p || t >= m
          ? (I.reportError(
              "Relative imports error, exceeded max retries, making document read only:",
              { missing: e.persistedMissingRelativeImports }
            ),
            this.makeDocumentReadOnly(),
            L({
              type: "add",
              variant: "warning",
              primaryText: "Cannot save changes.",
              secondaryText: "Please reload.",
              key: "client-outdated",
              duration: Number.POSITIVE_INFINITY,
              icon: "warning",
              showCloseButton: "never",
              action: {
                title: "Reload",
                onClick: () => {
                  (I.reportError("ModulesStorage: Reloaded due to relative imports error.", {
                    missing: e.persistedMissingRelativeImports,
                  }),
                    window.top.location.reload());
                },
              },
            }),
            { error: e, dropTransient: !0 })
          : (I.debug("Relative imports error, will retry:", {
              missing: e.persistedMissingRelativeImports,
            }),
            o(),
            { error: e, dropTransient: !1 });
      if (r && t > 0) I.debug("Ignoring duplicated save id.");
      else {
        if (r)
          return (
            I.debug("Duplicate save id error, will drop transient save:", e),
            { error: e, dropTransient: !0 }
          );
        if (p && t < u)
          return (
            I.info("Connection error, will retry:", {
              message: s,
              code: n,
              status: a,
              retryCount: t,
            }),
            o(),
            { dropTransient: !1 }
          );
        if (p)
          I.error("Error saving: too many retries, will drop transient save:", {
            message: s,
            code: n,
            status: a,
            retryCount: t,
          });
        else
          return (
            I.debug("Error saving, will drop transient save:", e),
            { error: e, dropTransient: !0 }
          );
      }
      return { dropTransient: !1 };
    }
    moduleUsesLocalImportMapSpecifiers(e) {
      let [t, o] = he(e);
      if (t === "layoutTemplate" || t === "webPageMetadata" || t === "siteMetadata") return !0;
      if (t === "collection") return Ae.isOn("collectionLocalModuleImportMapEntries");
      if (t === "screen") {
        let s = this.treeStore.tree.get(o);
        if (Pt(s) || _(s)) return !0;
      }
      return !1;
    }
    processTransientSaveData({ nextPersistedModules: e, transientSave: t, data: o }, s, n) {
      let a = t.treeVersion ?? this.treeStore.remoteTreeVersion,
        r;
      return (
        (e = D(e, (d) => {
          let l = o.values(),
            p = l.next().value;
          r = p.localId;
          let u = this.createPersistedLocalModuleFromSaveData(p, t);
          if (this.updateTreeNode(p.localId, a, u, s, n)) {
            d.set(r, u);
            for (let h of l) {
              let M = d.get(h.localId);
              (f(M, h.localId, "is not in persistedModules"),
                this.updateTreeNodeWithOwnTreeVersion(h.localId, h),
                this.applyDependentModuleSaveData(M, h));
            }
          }
        })),
        f(r, "Updated module", t, "is not found in the response"),
        { nextPersistedModules: e, updatedModuleLocalId: r }
      );
    }
    setNextInternalState({
      dependenciesModule: e,
      persistedModules: t,
      transientSaves: o,
      depsGraph: s,
      didRemoteChange: n,
      multiplayerChange: a = !1,
    }) {
      ((this.dependenciesModule = e), (this.persistedModules = t), (this.transientSaves = o));
      let r = Zo(
          e,
          this.lastSnapshot.dependenciesModule,
          t,
          o,
          s,
          this.lastSnapshot.modules,
          this.initialized,
          n,
          a
        ),
        d = this.lastSnapshot.initialized;
      ((this.lastSnapshot = {
        dependenciesModule: r.dependenciesModule,
        modules: r.modules,
        depsGraph: r.depsGraph,
        initialized: r.initialized,
      }),
        !(r.metadata.patches.length === 0 && r.initialized === d) && this.notifyListeners(r));
    }
    async createLocalModuleFromModule(e) {
      I.debug("compiling server module:", e.localId);
      let t = e.sourceContent;
      t || (t = await this.fetchSourceContentFromData(e));
      let o = {},
        s = {},
        n = this.downloadQueue,
        a = new Array();
      for (let l of e.submodules)
        a.push(
          n.run(async () => {
            let p = await fetch(e.baseURL + l);
            o[l] = await p.text();
          })
        );
      for (let l of e.binaryAssets)
        a.push(
          n.run(async () => {
            let u = await (await fetch(e.baseURL + l)).arrayBuffer();
            s[l] = new Uint8Array(u);
          })
        );
      await Promise.all(a);
      let r = Q(e),
        d = await this.compile({
          localId: e.localId,
          name: r,
          source: t,
          type: e.type,
          includeSourceMap: ht(e.type),
        });
      for (let [l, p] of this.lazyServerModulesForTransientSaves)
        (p.delete(r), p.size === 0 && this.lazyServerModulesForTransientSaves.delete(l));
      return {
        ...e,
        kind: "local",
        id: e.id,
        localId: e.localId,
        sourceContent: t,
        moduleContent: d.code,
        sourceMapContent: d.sourceMap,
        submoduleContents: o,
        binaryAssetContents: s,
        imports: d.imports,
        sourceRevision: It(e),
        annotations: d.annotations,
      };
    }
    async createBatchSaveForUpdatedModule(e, t, o, s, n, a) {
      let r = Q(t),
        {
          localId: d,
          moduleContent: l,
          sourceContent: p,
          sourceMapContent: u,
          submoduleContents: m = {},
          binaryAssetContents: h = {},
          metadata: M,
          sourceRevision: A,
          imports: g,
          type: c,
          name: C,
          annotations: E,
          update: S,
          ...v
        } = t;
      switch (e) {
        case "$new":
          f(d === void 0, `Attempted to create ${r} but it already has localId: ${d}`);
          break;
        case "$upsertName":
        default:
          f(
            d !== void 0,
            `The transient save for the provided moduleId: ${e} doesn't have localId`
          );
      }
      let { type: B, name: x, metadata: T, files: U, ...De } = a;
      f(
        B === c && x === C,
        `Mismatched type/name between save and parameters: ${B}/${x} !== ${c}/${C}`
      );
      let de = Y(x),
        xe = l;
      (g.relative.length > 0 &&
        (xe = await this.replaceRelativeImportsWithAbsolute(r, l, g.relative, o, s, _e(m), n)),
        u &&
          (xe += `
//# sourceMappingURL=./${de.sourceMap}`));
      let le = (U ?? []).concat([
        { name: de.module, type: "module", content: xe },
        { name: de.source, type: "source", content: p },
      ]);
      u && le.push({ name: de.sourceMap, type: "sourceMap", content: u });
      for (let [O, Te] of Object.entries(m)) le.push({ name: O, type: "submodule", content: Te });
      for (let [O, Te] of Object.entries(h)) le.push({ name: O, type: "binaryAsset", bytes: Te });
      let Le = {};
      if (M || T)
        if (d) {
          let O = o.get(d);
          (f(O || e === "$upsertName", `Cannot safely update metadata for ${e} (${d})`),
            (Le.metadata = { ...O?.metadata, ...M, ...T, sourceRevision: A }));
        } else Le.metadata = { ...M, ...T, sourceRevision: A };
      return {
        ...v,
        moduleId: e,
        type: B,
        name: x,
        files: le,
        imports: g,
        detached: this.detached,
        ...De,
        ...Le,
      };
    }
    async createBatchSaveForDependentModule(e, t, o, s) {
      let n = t.get(e);
      (f(n, e, "is not found in persistedModules"),
        f(n.kind === "local", "persisted module is not a local module"));
      let a = Q(n),
        r = Y(n.name),
        d = n.imports,
        l = n.moduleContent;
      d.relative.length > 0 &&
        (l = await this.replaceRelativeImportsWithAbsolute(
          a,
          n.moduleContent,
          d.relative,
          t,
          o,
          _e(n.submoduleContents),
          s
        ));
      let p = o.get(a);
      f(p, "newSaveIds don't contain saveId for", a);
      let u = {},
        m = this.moduleUsesLocalImportMapSpecifiers(a);
      return (
        n.metadata.localModuleImportMapEntries !== m &&
          (u.metadata = { ...n.metadata, localModuleImportMapEntries: m }),
        {
          type: n.type,
          moduleId: n.id,
          name: n.name,
          saveId: p,
          patchSaveId: n.saveId,
          files: [{ name: r.module, type: "module", content: l }],
          imports: d,
          detached: this.detached,
          ...u,
        }
      );
    }
    findPersistedModuleLocalIdByTypeSlashName(e, t) {
      return this.ensurePersistedLocalIdsByTypeSlashNameCacheFor(e).get(t);
    }
    ensurePersistedLocalIdsByTypeSlashNameCacheFor(e) {
      let t = this.persistedLocalIdsByTypeSlashNameCache.get(e);
      return (t || ((t = is(e)), this.persistedLocalIdsByTypeSlashNameCache.set(e, t)), t);
    }
    async replaceRelativeImportsWithAbsolute(e, t, o, s, n, a, r) {
      let { modulesCDN: d } = Pe(),
        l = {};
      for (let A of a) {
        let g = ho(A);
        l[g] = g;
      }
      let p = this.moduleUsesLocalImportMapSpecifiers(e),
        u = new Set();
      for (let A of o) {
        if (A in l) continue;
        let g = Ze(A, e);
        if (!g) continue;
        let c = this.findPersistedModuleLocalIdByTypeSlashName(s, g);
        if (!c) {
          (u.add(g), I.error("Cannot resolve", A, "from", e));
          continue;
        }
        let C = s.get(c);
        f(C);
        let { id: E, files: S } = C,
          v = n.get(g) ?? C.saveId,
          B = r?.get(g)?.module ?? S.module;
        (f(J(B), "Must have a module file name to build a local module import map specifier."),
          (l[A] = p ? Ue(c, B) : `${d}/${E}/${v}/${B}`));
      }
      let m = await jo(t, l);
      if (m.ok) return m.value;
      if (e.startsWith("codeFile")) return m.error.partiallyProcessedCode;
      let h = new Set(),
        M = this.treeStore.tree;
      for (let A of m.error.unresolvedRelativeImports) {
        let g = Ze(A, e);
        if (!g) continue;
        let [c] = he(g);
        if (!(c === "codeFile" || !M.getNodeWithTrait(g, ot))) {
          h.add(g);
          break;
        }
      }
      if (h.size === 0)
        return (
          I.reportError(
            "Failed to rewrite relative imports due to unpersisted relative dependencies",
            { relativeImports: o, unresolved: Array.from(m.error.unresolvedRelativeImports) }
          ),
          m.error.partiallyProcessedCode
        );
      throw (
        I.reportError("Failed to rewrite relative imports", {
          typeSlashName: e,
          missing: Array.from(h),
        }),
        new ne(h)
      );
    }
    async getDependenciesFiles({ baseURL: e, files: t }) {
      let [o, s] = await Promise.allSettled([
        this.downloadQueue.run(async () => {
          let r = await fetch(e + t.importMap);
          if (r.ok !== !0) throw new Error("failed to load importMap file");
          return r.text();
        }),
        this.downloadQueue.run(async () => {
          let r = await fetch(e + t.dependencies);
          if (r.ok !== !0) throw new Error("failed to load dependencies file");
          return r.text();
        }),
      ]);
      f(o.status === "fulfilled", "The importMap has to exist on the module");
      let n = o.value,
        a;
      return (
        s.status === "fulfilled" ? (a = s.value) : I.warn("No dependencies file was found!"),
        { importMapContent: n, dependenciesMapContent: a }
      );
    }
    async upsertKit(e, t, o, s, n) {
      return b(async () => {
        let a = JSON.stringify(e),
          r = [
            { name: "kit.json", type: "source", content: a },
            ...o.map((m) => ({
              name: `${m.id}.json`,
              type: "kitSection",
              content: JSON.stringify(m.content),
            })),
            ...s.map((m) => ({
              name: `${m.id}.json`,
              type: "kitVectorSetNames",
              content: JSON.stringify(m.content),
            })),
          ],
          d = performance.now(),
          l = "kit/kit",
          p = {
            type: "kit",
            files: r,
            assets: n.size > 0 ? Array.from(n) : void 0,
            name: zs,
            moduleId: this.persistedModules.get(l)?.id ?? "$upsertName",
            saveId: N(),
            metadata: { kit: { id: e.id, title: e.title, icon: t } },
            imports: { absolute: [], relative: [], bare: [] },
            detached: !1,
          };
        f(this.modulesService);
        let { data: u } = await this.modulesService.saveBatch({
          batch: [p],
          copyOnWrite: this.detached,
        });
        this.setNextInternalState({
          dependenciesModule: this.dependenciesModule,
          transientSaves: this.transientSaves,
          persistedModules: D(this.persistedModules, (m) => {
            for (let h of u.values()) {
              if (h.localId !== l) continue;
              let M = {
                kind: "local",
                ...h,
                id: h.id,
                localId: h.localId,
                imports: h.imports,
                moduleURL: h.baseURL + h.files.source,
                sourceContent: a,
                sourceMapContent: void 0,
                moduleContent: a,
                submoduleContents: {},
                binaryAssetContents: {},
                sourceRevision: void 0,
                annotations: void 0,
                update: d,
              };
              m.set(l, M);
            }
          }),
          depsGraph: this.lastSnapshot.depsGraph,
          didRemoteChange: !0,
        });
      });
    }
    async enqueueKitScreenshots(e, t, o) {
      let s = this.persistedModules.get(Fe("kit", "kit"));
      f(s, "Kit module must have been persisted to enqueue screenshots");
      let n = o ? "draft" : s.saveId;
      (f(n, "Kit Save ID must be set"),
        f(this.modulesService),
        await this.modulesService.enqueueKitScreenshots({
          moduleId: s.id,
          saveId: n,
          ids: Array.from(t),
          kitPageContent: e,
        }));
    }
    takeSnapshot() {
      return new Ct(this.persistedModules);
    }
  };
function Ys(i, e) {
  return `${Pe().modulesCDN}/${e.id}/${i.saveId}/${e.files.module}`;
}
function Zo(i, e, t, o, s, n, a, r, d) {
  let l = new Set(n.keys()),
    p = new Set(o.keys()),
    u = [],
    [m, h] = So(n, (g) => {
      for (let c of t.values()) {
        let C = c.localId,
          E = Q(c),
          S = o.get(C),
          v = S?.type ?? c.type;
        if (!ro(v)) continue;
        let B;
        if (S)
          B = {
            kind: "local",
            localId: C,
            type: S.type,
            name: S.name,
            moduleURL: Ys(S, c),
            moduleContent: S.moduleContent,
            sourceContent: S.sourceContent,
            sourceMapContent: S.sourceMapContent,
            submoduleContents: S.submoduleContents,
            binaryAssetContents: S.binaryAssetContents,
            relativeImports: S.imports.relative,
            files: c.files,
            sourceRevision: S.sourceRevision,
            svgIcon: S.svgIcon,
            update: S.update,
          };
        else {
          let x = It(c);
          B =
            c.kind === "local"
              ? {
                  kind: "local",
                  localId: C,
                  type: c.type,
                  name: c.name,
                  moduleURL: c.moduleURL,
                  moduleContent: c.moduleContent,
                  sourceContent: c.sourceContent,
                  sourceMapContent: c.sourceMapContent,
                  submoduleContents: c.submoduleContents,
                  binaryAssetContents: c.binaryAssetContents,
                  relativeImports: c.imports.relative,
                  files: c.files,
                  sourceRevision: x,
                  svgIcon: void 0,
                  update: c.update,
                }
              : {
                  kind: "server",
                  localId: C,
                  type: c.type,
                  name: c.name,
                  moduleURL: c.moduleURL,
                  sourceContent: c.sourceContent,
                  relativeImports: c.imports.relative,
                  files: c.files,
                  sourceRevision: x,
                  update: c.update,
                };
        }
        (es(g, E, B), p.delete(C), l.delete(E));
      }
      for (let c of p) {
        let C = o.get(c);
        if ((f(C), !C.localId)) continue;
        let E = Y(C.name),
          S = {
            kind: "local",
            localId: C.localId,
            type: C.type,
            name: C.name,
            moduleURL: `./transient/${C.saveId}/${E.module}`,
            moduleContent: C.moduleContent,
            sourceContent: C.sourceContent,
            sourceMapContent: C.sourceMapContent,
            submoduleContents: C.submoduleContents,
            binaryAssetContents: C.binaryAssetContents,
            relativeImports: C.imports.relative,
            files: E,
            sourceRevision: C.sourceRevision,
            svgIcon: C.svgIcon,
            update: C.update,
          };
        (es(g, c, S), l.delete(Q(S)));
      }
      for (let c of l) (g.delete(c), u.push(c));
    }),
    M = {};
  for (let g of u) {
    let c = n.get(g);
    c && (M[g] = c.localId);
  }
  let A = D(e, (g) => {
    if (i) {
      if (!g)
        return {
          kind: "dependencies",
          localId: G,
          type: i.type,
          name: i.name,
          importMapContent: i.importMapContent,
          dependenciesMapContent: i.dependenciesMapContent,
        };
      ((g.importMapContent = i.importMapContent),
        (g.dependenciesMapContent = i.dependenciesMapContent));
    }
  });
  return (
    A && A !== e && h.push({ op: e ? "replace" : "add", path: [Q(A)], value: A }),
    {
      dependenciesModule: A,
      modules: m,
      deletedLocalIdsByTypeSlashNames: M,
      depsGraph: s,
      initialized: a,
      metadata: {
        patches: h,
        hasLocalChanges: o.size > 0,
        didRemoteChange: r,
        multiplayerChange: d,
      },
    }
  );
}
function es(i, e, t) {
  let o = i.get(e);
  if (!o) {
    i.set(e, t);
    return;
  }
  if (o.kind !== t.kind) {
    i.set(e, t);
    return;
  }
  if (o.kind === "server") {
    (f(t.kind === "server"), ts(o, t));
    return;
  }
  (f(t.kind === "local"),
    Vs(o.relativeImports, t.relativeImports) || (o.relativeImports = t.relativeImports),
    zt(o.files, t.files) || (o.files = t.files));
  let { relativeImports: s, files: n, ...a } = t;
  ts(o, a);
}
function ts(i, e) {
  Object.assign(i, e);
}
function Vs(i, e) {
  if (!i && !e) return !0;
  if (i && e) {
    let t = i.length;
    if (t !== e.length) return !1;
    for (let o = 0; o < t; o++) if (i[o] !== e[o]) return !1;
    return !0;
  } else return !1;
}
function $s(i) {
  return i.type === "save";
}
function Xs(i) {
  return i.type === "delete";
}
function N() {
  return Ao();
}
function ht(i) {
  return i === "codeFile" || i === "canvasComponent" || i === "shader";
}
function os(i, e, t) {
  return i.replace(new RegExp(`\\b(from\\s*)(["'])${pt(e)}\\2`, "g"), `$1${JSON.stringify(t)}`);
}
function Zs(i, e) {
  switch (i) {
    case "canvasComponent":
    case "layoutTemplate":
    case "screen":
    case "prototype":
    case "collection":
    case "draftCollection":
    case "webPageMetadata":
    case "siteMetadata":
    case "snippets":
    case "vector":
    case "vectorSet":
    case "kit":
    case "shader":
      return e.default;
    case "codeFile":
    case "css":
    case "componentPresets":
    case "config":
    case "localization":
    case "design":
      return Object.values(e)[0];
    default:
      K(i);
  }
}
var ss = {
  start: new Date("2025-09-03T10:00:00Z").getTime(),
  end: new Date("2025-09-07T13:00:00Z").getTime(),
};
function ei(i, e) {
  for (let t of i) {
    if (t.id !== e.localId) continue;
    if (t.save.saveId === e.saveId) return !1;
    let o = new Date(e.savedAt).getTime();
    return Number.isNaN(o) ? !1 : o > ss.start && o < ss.end;
  }
  return !1;
}
function is(i) {
  let e = new Map();
  for (let [t, o] of i.entries()) e.set(Q(o), t);
  return e;
}
var Ct = class {
  constructor(e) {
    this.persistedModules = e;
    y(this, "persistedLocalIdsByTypeSlashName");
    this.persistedLocalIdsByTypeSlashName = is(e);
  }
  getPersistedModuleByLocalId(e) {
    return this.persistedModules.get(e);
  }
  getModuleWithTypeSlashName(e) {
    let t = this.persistedLocalIdsByTypeSlashName.get(e);
    if (t) return this.persistedModules.get(t);
  }
};
var ns = pe(Cs(), 1);
var R = pe(Lt(), 1);
async function Ta(i, e, t = 1 / 0, o) {
  o ??= new ye(i, { silent: !0 });
  let s = [],
    n = [],
    a = [];
  for (let d of e) {
    if (a.length >= t) {
      n.push(d);
      continue;
    }
    if (!fe.includes(d.type)) {
      s.push(d);
      continue;
    }
    let l = o.add(d);
    a.push(l);
  }
  return (
    s.length > 0 &&
      L({
        type: "add",
        key: "importUploadImagesUnsupported",
        variant: "warning",
        primaryText: (0, R.jsxs)("span", { className: Z, children: ["Skipped ", s.length] }),
        secondaryText: "unsupported images.",
        duration: 1e4,
      }),
    n.length > 0 &&
      L({
        type: "add",
        key: "importUploadImagesSkipped",
        variant: "warning",
        primaryText: (0, R.jsxs)("span", { className: Z, children: ["Skipped ", n.length] }),
        secondaryText: "images over field limit.",
        duration: 1e4,
      }),
    ti(o, a).catch(() => {}),
    (await Promise.all(a)).filter(Eo)
  );
}
async function ti(i, e) {
  let t = "uploadEmbeddedImagesByUrl",
    o = {
      type: "add",
      key: t,
      variant: "progress",
      icon: "image",
      duration: 1 / 0,
      showCloseButton: "never",
    };
  for await (let { completed: n, started: a } of i.statusUpdates())
    L({
      ...o,
      text: (0, R.jsxs)("span", {
        className: "toast-progress-row",
        children: [
          (0, R.jsx)("span", {
            className: "toast-progress-label toast-emphasis",
            children: "Adding images\u2026",
          }),
          (0, R.jsxs)("span", { className: `toast-progress-value ${Z}`, children: [n, "/", a] }),
        ],
      }),
    });
  await Promise.allSettled(e);
  let { failed: s } = i.status;
  (s > 0 &&
    L({
      type: "add",
      key: "importUploadImagesFailed",
      variant: "warning",
      primaryText: "Failed to upload",
      secondaryText: (0, R.jsxs)("span", {
        className: Z,
        children: [s, " ", (0, ns.default)("image", s), "."],
      }),
      duration: 5e3,
    }),
    L({ type: "remove", key: t }));
}
var oi = {
  "3g2": "video/3gpp2",
  "3gp": "video/3gpp",
  "3gpp": "video/3gpp",
  "3mf": "model/3mf",
  aac: "audio/aac",
  ac: "application/pkix-attr-cert",
  adp: "audio/adpcm",
  adts: "audio/aac",
  ai: "application/postscript",
  aml: "application/automationml-aml+xml",
  amlx: "application/automationml-amlx+zip",
  amr: "audio/amr",
  apng: "image/apng",
  appcache: "text/cache-manifest",
  appinstaller: "application/appinstaller",
  appx: "application/appx",
  appxbundle: "application/appxbundle",
  asc: "application/pgp-keys",
  atom: "application/atom+xml",
  atomcat: "application/atomcat+xml",
  atomdeleted: "application/atomdeleted+xml",
  atomsvc: "application/atomsvc+xml",
  au: "audio/basic",
  avci: "image/avci",
  avcs: "image/avcs",
  avif: "image/avif",
  aw: "application/applixware",
  bdoc: "application/bdoc",
  bin: "application/octet-stream",
  bmp: "image/bmp",
  bpk: "application/octet-stream",
  btf: "image/prs.btif",
  btif: "image/prs.btif",
  buffer: "application/octet-stream",
  ccxml: "application/ccxml+xml",
  cdfx: "application/cdfx+xml",
  cdmia: "application/cdmi-capability",
  cdmic: "application/cdmi-container",
  cdmid: "application/cdmi-domain",
  cdmio: "application/cdmi-object",
  cdmiq: "application/cdmi-queue",
  cer: "application/pkix-cert",
  cgm: "image/cgm",
  cjs: "application/node",
  class: "application/java-vm",
  coffee: "text/coffeescript",
  conf: "text/plain",
  cpl: "application/cpl+xml",
  cpt: "application/mac-compactpro",
  crl: "application/pkix-crl",
  css: "text/css",
  csv: "text/csv",
  cu: "application/cu-seeme",
  cwl: "application/cwl",
  cww: "application/prs.cww",
  davmount: "application/davmount+xml",
  dbk: "application/docbook+xml",
  deb: "application/octet-stream",
  def: "text/plain",
  deploy: "application/octet-stream",
  dib: "image/bmp",
  "disposition-notification": "message/disposition-notification",
  dist: "application/octet-stream",
  distz: "application/octet-stream",
  dll: "application/octet-stream",
  dmg: "application/octet-stream",
  dms: "application/octet-stream",
  doc: "application/msword",
  dot: "application/msword",
  dpx: "image/dpx",
  drle: "image/dicom-rle",
  dsc: "text/prs.lines.tag",
  dssc: "application/dssc+der",
  dtd: "application/xml-dtd",
  dump: "application/octet-stream",
  dwd: "application/atsc-dwd+xml",
  ear: "application/java-archive",
  ecma: "application/ecmascript",
  elc: "application/octet-stream",
  emf: "image/emf",
  eml: "message/rfc822",
  emma: "application/emma+xml",
  emotionml: "application/emotionml+xml",
  eps: "application/postscript",
  epub: "application/epub+zip",
  exe: "application/octet-stream",
  exi: "application/exi",
  exp: "application/express",
  exr: "image/aces",
  ez: "application/andrew-inset",
  fdf: "application/fdf",
  fdt: "application/fdt+xml",
  fits: "image/fits",
  g3: "image/g3fax",
  gbr: "application/rpki-ghostbusters",
  geojson: "application/geo+json",
  gif: "image/gif",
  glb: "model/gltf-binary",
  gltf: "model/gltf+json",
  gml: "application/gml+xml",
  gpx: "application/gpx+xml",
  gram: "application/srgs",
  grxml: "application/srgs+xml",
  gxf: "application/gxf",
  gz: "application/gzip",
  h261: "video/h261",
  h263: "video/h263",
  h264: "video/h264",
  heic: "image/heic",
  heics: "image/heic-sequence",
  heif: "image/heif",
  heifs: "image/heif-sequence",
  hej2: "image/hej2k",
  held: "application/atsc-held+xml",
  hjson: "application/hjson",
  hlp: "application/winhlp",
  hqx: "application/mac-binhex40",
  hsj2: "image/hsj2",
  htm: "text/html",
  html: "text/html",
  ics: "text/calendar",
  ief: "image/ief",
  ifb: "text/calendar",
  iges: "model/iges",
  igs: "model/iges",
  img: "application/octet-stream",
  in: "text/plain",
  ini: "text/plain",
  ink: "application/inkml+xml",
  inkml: "application/inkml+xml",
  ipfix: "application/ipfix",
  iso: "application/octet-stream",
  its: "application/its+xml",
  jade: "text/jade",
  jar: "application/java-archive",
  jhc: "image/jphc",
  jls: "image/jls",
  jp2: "image/jp2",
  jpe: "image/jpeg",
  jpeg: "image/jpeg",
  jpf: "image/jpx",
  jpg: "image/jpeg",
  jpg2: "image/jp2",
  jpgm: "image/jpm",
  jpgv: "video/jpeg",
  jph: "image/jph",
  jpm: "image/jpm",
  jpx: "image/jpx",
  js: "text/javascript",
  json: "application/json",
  json5: "application/json5",
  jsonld: "application/ld+json",
  jsonml: "application/jsonml+json",
  jsx: "text/jsx",
  jt: "model/jt",
  jxl: "image/jxl",
  jxr: "image/jxr",
  jxra: "image/jxra",
  jxrs: "image/jxrs",
  jxs: "image/jxs",
  jxsc: "image/jxsc",
  jxsi: "image/jxsi",
  jxss: "image/jxss",
  kar: "audio/midi",
  ktx: "image/ktx",
  ktx2: "image/ktx2",
  less: "text/less",
  lgr: "application/lgr+xml",
  list: "text/plain",
  litcoffee: "text/coffeescript",
  log: "text/plain",
  lostxml: "application/lost+xml",
  lrf: "application/octet-stream",
  m1v: "video/mpeg",
  m21: "application/mp21",
  m2a: "audio/mpeg",
  m2t: "video/mp2t",
  m2ts: "video/mp2t",
  m2v: "video/mpeg",
  m3a: "audio/mpeg",
  m4a: "audio/mp4",
  m4p: "application/mp4",
  m4s: "video/iso.segment",
  ma: "application/mathematica",
  mads: "application/mads+xml",
  maei: "application/mmt-aei+xml",
  man: "text/troff",
  manifest: "text/cache-manifest",
  map: "application/json",
  mar: "application/octet-stream",
  markdown: "text/markdown",
  mathml: "application/mathml+xml",
  mb: "application/mathematica",
  mbox: "application/mbox",
  md: "text/markdown",
  mdx: "text/mdx",
  me: "text/troff",
  mesh: "model/mesh",
  meta4: "application/metalink4+xml",
  metalink: "application/metalink+xml",
  mets: "application/mets+xml",
  mft: "application/rpki-manifest",
  mid: "audio/midi",
  midi: "audio/midi",
  mime: "message/rfc822",
  mj2: "video/mj2",
  mjp2: "video/mj2",
  mjs: "text/javascript",
  mml: "text/mathml",
  mods: "application/mods+xml",
  mov: "video/quicktime",
  mp2: "audio/mpeg",
  mp21: "application/mp21",
  mp2a: "audio/mpeg",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mp4a: "audio/mp4",
  mp4s: "application/mp4",
  mp4v: "video/mp4",
  mpd: "application/dash+xml",
  mpe: "video/mpeg",
  mpeg: "video/mpeg",
  mpf: "application/media-policy-dataset+xml",
  mpg: "video/mpeg",
  mpg4: "video/mp4",
  mpga: "audio/mpeg",
  mpp: "application/dash-patch+xml",
  mrc: "application/marc",
  mrcx: "application/marcxml+xml",
  ms: "text/troff",
  mscml: "application/mediaservercontrol+xml",
  msh: "model/mesh",
  msi: "application/octet-stream",
  msix: "application/msix",
  msixbundle: "application/msixbundle",
  msm: "application/octet-stream",
  msp: "application/octet-stream",
  mtl: "model/mtl",
  mts: "video/mp2t",
  musd: "application/mmt-usd+xml",
  mxf: "application/mxf",
  mxmf: "audio/mobile-xmf",
  mxml: "application/xv+xml",
  n3: "text/n3",
  nb: "application/mathematica",
  nq: "application/n-quads",
  nt: "application/n-triples",
  obj: "model/obj",
  oda: "application/oda",
  oga: "audio/ogg",
  ogg: "audio/ogg",
  ogv: "video/ogg",
  ogx: "application/ogg",
  omdoc: "application/omdoc+xml",
  onepkg: "application/onenote",
  onetmp: "application/onenote",
  onetoc: "application/onenote",
  onetoc2: "application/onenote",
  opf: "application/oebps-package+xml",
  opus: "audio/ogg",
  otf: "font/otf",
  owl: "application/rdf+xml",
  oxps: "application/oxps",
  p10: "application/pkcs10",
  p7c: "application/pkcs7-mime",
  p7m: "application/pkcs7-mime",
  p7s: "application/pkcs7-signature",
  p8: "application/pkcs8",
  pdf: "application/pdf",
  pfr: "application/font-tdpfr",
  pgp: "application/pgp-encrypted",
  pkg: "application/octet-stream",
  pki: "application/pkixcmp",
  pkipath: "application/pkix-pkipath",
  pls: "application/pls+xml",
  png: "image/png",
  prc: "model/prc",
  prf: "application/pics-rules",
  provx: "application/provenance+xml",
  ps: "application/postscript",
  pskcxml: "application/pskc+xml",
  pti: "image/prs.pti",
  qt: "video/quicktime",
  raml: "application/raml+yaml",
  rapd: "application/route-apd+xml",
  rdf: "application/rdf+xml",
  relo: "application/p2p-overlay+xml",
  rif: "application/reginfo+xml",
  rl: "application/resource-lists+xml",
  rld: "application/resource-lists-diff+xml",
  rmi: "audio/midi",
  rnc: "application/relax-ng-compact-syntax",
  rng: "application/xml",
  roa: "application/rpki-roa",
  roff: "text/troff",
  rq: "application/sparql-query",
  rs: "application/rls-services+xml",
  rsat: "application/atsc-rsat+xml",
  rsd: "application/rsd+xml",
  rsheet: "application/urc-ressheet+xml",
  rss: "application/rss+xml",
  rtf: "text/rtf",
  rtx: "text/richtext",
  rusd: "application/route-usd+xml",
  s3m: "audio/s3m",
  sbml: "application/sbml+xml",
  scq: "application/scvp-cv-request",
  scs: "application/scvp-cv-response",
  sdp: "application/sdp",
  senmlx: "application/senml+xml",
  sensmlx: "application/sensml+xml",
  ser: "application/java-serialized-object",
  setpay: "application/set-payment-initiation",
  setreg: "application/set-registration-initiation",
  sgi: "image/sgi",
  sgm: "text/sgml",
  sgml: "text/sgml",
  shex: "text/shex",
  shf: "application/shf+xml",
  shtml: "text/html",
  sieve: "application/sieve",
  sig: "application/pgp-signature",
  sil: "audio/silk",
  silo: "model/mesh",
  siv: "application/sieve",
  slim: "text/slim",
  slm: "text/slim",
  sls: "application/route-s-tsid+xml",
  smi: "application/smil+xml",
  smil: "application/smil+xml",
  snd: "audio/basic",
  so: "application/octet-stream",
  spdx: "text/spdx",
  spp: "application/scvp-vp-response",
  spq: "application/scvp-vp-request",
  spx: "audio/ogg",
  sql: "application/sql",
  sru: "application/sru+xml",
  srx: "application/sparql-results+xml",
  ssdl: "application/ssdl+xml",
  ssml: "application/ssml+xml",
  stk: "application/hyperstudio",
  stl: "model/stl",
  stpx: "model/step+xml",
  stpxz: "model/step-xml+zip",
  stpz: "model/step+zip",
  styl: "text/stylus",
  stylus: "text/stylus",
  svg: "image/svg+xml",
  svgz: "image/svg+xml",
  swidtag: "application/swid+xml",
  t: "text/troff",
  t38: "image/t38",
  td: "application/urc-targetdesc+xml",
  tei: "application/tei+xml",
  teicorpus: "application/tei+xml",
  text: "text/plain",
  tfi: "application/thraud+xml",
  tfx: "image/tiff-fx",
  tif: "image/tiff",
  tiff: "image/tiff",
  toml: "application/toml",
  tr: "text/troff",
  trig: "application/trig",
  ts: "video/mp2t",
  tsd: "application/timestamped-data",
  tsv: "text/tab-separated-values",
  ttc: "font/collection",
  ttf: "font/ttf",
  ttl: "text/turtle",
  ttml: "application/ttml+xml",
  txt: "text/plain",
  u3d: "model/u3d",
  u8dsn: "message/global-delivery-status",
  u8hdr: "message/global-headers",
  u8mdn: "message/global-disposition-notification",
  u8msg: "message/global",
  ubj: "application/ubjson",
  uri: "text/uri-list",
  uris: "text/uri-list",
  urls: "text/uri-list",
  vcard: "text/vcard",
  vrml: "model/vrml",
  vtt: "text/vtt",
  vxml: "application/voicexml+xml",
  war: "application/java-archive",
  wasm: "application/wasm",
  wav: "audio/wav",
  weba: "audio/webm",
  webm: "video/webm",
  webmanifest: "application/manifest+json",
  webp: "image/webp",
  wgsl: "text/wgsl",
  wgt: "application/widget",
  wif: "application/watcherinfo+xml",
  wmf: "image/wmf",
  woff: "font/woff",
  woff2: "font/woff2",
  wrl: "model/vrml",
  wsdl: "application/wsdl+xml",
  wspolicy: "application/wspolicy+xml",
  x3d: "model/x3d+xml",
  x3db: "model/x3d+fastinfoset",
  x3dbz: "model/x3d+binary",
  x3dv: "model/x3d-vrml",
  x3dvz: "model/x3d+vrml",
  x3dz: "model/x3d+xml",
  xaml: "application/xaml+xml",
  xav: "application/xcap-att+xml",
  xca: "application/xcap-caps+xml",
  xcs: "application/calendar+xml",
  xdf: "application/xcap-diff+xml",
  xdssc: "application/dssc+xml",
  xel: "application/xcap-el+xml",
  xenc: "application/xenc+xml",
  xer: "application/patch-ops-error+xml",
  xfdf: "application/xfdf",
  xht: "application/xhtml+xml",
  xhtml: "application/xhtml+xml",
  xhvml: "application/xv+xml",
  xlf: "application/xliff+xml",
  xm: "audio/xm",
  xml: "text/xml",
  xns: "application/xcap-ns+xml",
  xop: "application/xop+xml",
  xpl: "application/xproc+xml",
  xsd: "application/xml",
  xsf: "application/prs.xsf+xml",
  xsl: "application/xml",
  xslt: "application/xml",
  xspf: "application/xspf+xml",
  xvm: "application/xv+xml",
  xvml: "application/xv+xml",
  yaml: "text/yaml",
  yang: "application/yang",
  yin: "application/yin+xml",
  yml: "text/yaml",
  zip: "application/zip",
};
function Mt(i) {
  let e = ("" + i).trim().toLowerCase(),
    t = e.lastIndexOf(".");
  return oi[~t ? e.substring(++t) : e];
}
var be = pe(gs(), 1);
function mi(i, e) {
  return e.some((t) => {
    t === "*" && (t = "*/*");
    let o = be.default.parse(t);
    if (!o) {
      let s = Mt(t);
      o = s ? be.default.parse(s) : null;
    }
    return o
      ? (o.type === "*" || o.type === i.type) && (o.subtype === "*" || o.subtype === i.subtype)
      : !1;
  });
}
function hi(i, e) {
  if (e.length === 0) return !0;
  let t = Mt(i) ?? i,
    o = be.default.parse(t);
  return o && mi(o, e) ? !0 : e.some((s) => s === "*" || s === "*/*" || i === s || i === `.${s}`);
}
function za(i, e) {
  return i.type !== "file"
    ? !1
    : (f(e, "allowedFileTypes should always be defined for ControlType.File"),
      i.allowedFileTypes.every(({ extension: t }) => hi(t, e)));
}
function $a(i, e, t) {
  let o = gi(e);
  return !t || !o
    ? t
    : t.type === "collectionreference" && J(t.value) && !fs(i, o, t.value)
      ? { ...t, value: void 0 }
      : t.type === "multicollectionreference" && Array.isArray(t.value)
        ? { ...t, value: t.value.filter((s) => fs(i, o, s)) }
        : t;
}
function gi(i) {
  if (i.type !== "collectionreference" && i.type !== "multicollectionreference") return null;
  let e = z(i.dataIdentifier);
  return e?.kind !== "localModuleExport" ? null : e.value;
}
function fs(i, e, t) {
  let o = i.getNodeWithTrait(t, jt),
    s = o && i.getNodeParent(o);
  return Jt(s) && s.instanceIdentifier === e;
}
function ir(i, e = "relative") {
  if (Ot(i)) return !0;
  if (!Ut(i)) return !1;
  switch (e) {
    case "relative":
    case "sticky":
      return !0;
    case "absolute":
    case "fixed":
      return !1;
    default:
      K(e);
  }
}
function nr(i, e, t) {
  if ((qe(i, e) || (t.onlyNodesWithPositionFixed = !1), e.__unsafeIsSlotPropertyChildNode(i))) {
    t.positionTypes.add("relative");
    return;
  }
  if (qe(i, e) && _t(e)) {
    t.positionTypes.add("fixed");
    return;
  }
  if (Vt(e) && qt(e)) {
    (t.positionTypes.add("sticky"),
      ee("positionStickyTop", t, e),
      ee("positionStickyRight", t, e),
      ee("positionStickyBottom", t, e),
      ee("positionStickyLeft", t, e));
    return;
  }
  if (Yt(e) && Ht(e)) {
    t.positionTypes.add("absolute");
    return;
  }
  if (e.cache.parentDirected) {
    t.positionTypes.add("relative");
    return;
  }
  t.positionTypes.add("absolute");
}
export {
  vn as a,
  At as b,
  jo as c,
  pt as d,
  zs as e,
  Sa as f,
  $o as g,
  Xo as h,
  Ro as i,
  Pi as j,
  ye as k,
  Ta as l,
  ti as m,
  Mt as n,
  gs as o,
  sn as p,
  nn as q,
  an as r,
  rn as s,
  dn as t,
  ln as u,
  bs as v,
  pn as w,
  cn as x,
  un as y,
  An as z,
  mn as A,
  hn as B,
  gn as C,
  fn as D,
  Rs as E,
  Fs as F,
  hi as G,
  za as H,
  $a as I,
  gi as J,
  fs as K,
  In as L,
  Mn as M,
  ir as N,
  nr as O,
};
//# sourceMappingURL=chunk-7JCGGICB.mjs.map
