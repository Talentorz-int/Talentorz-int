import { b as Le } from "chunk-YS3B4HMG.mjs";
import { f as K, i as be } from "chunk-DXEB74DT.mjs";
import { Ff as z, a as V, ig as T, jh as H, kh as W, nh as Pe } from "chunk-LNLOS7MO.mjs";
import { a as D } from "chunk-QFU6OGL3.mjs";
import { i as _ } from "chunk-O5NUHS4A.mjs";
import { a as L } from "chunk-LEYNIZPU.mjs";
import { o as Ae } from "chunk-RJAQ7ZXH.mjs";
import { a as M } from "chunk-SJONTHBI.mjs";
import { ia as N } from "chunk-3GX5YKYT.mjs";
import { a as B, b as x } from "chunk-6PNPO5DW.mjs";
import { e as m, j as i } from "chunk-XELMBOBL.mjs";
var Qe = ["miniSite", "basicSite", "proSite"],
  Ze = ["startupSite", "scaleupSite"],
  et = ["basicSite2025", "proSite2025", "scaleSite2025"];
function or(e) {
  return Qe.includes(e);
}
function ir(e) {
  return Ze.includes(e);
}
function ar(e) {
  return et.includes(e);
}
function cr(e) {
  return e !== "freeSite" && e !== "enterpriseSite";
}
var Ce = [
    "freeSite",
    "miniSite",
    "basicSite2025",
    "basicSite",
    "proSite",
    "proSite2025",
    "startupSite",
    "scaleupSite",
    "scaleSite2025",
    "enterpriseSite",
  ],
  Se = {
    freeSite: "Free",
    miniSite: "Mini \u201924",
    basicSite: "Basic \u201924",
    proSite: "Pro \u201924",
    startupSite: "Launch \u201924",
    scaleupSite: "Scale \u201924",
    basicSite2025: "Basic",
    proSite2025: "Pro",
    scaleSite2025: "Scale",
    enterpriseSite: "Enterprise",
  };
function lr() {
  return "scaleSite2025";
}
function pr(e, t) {
  return Ce.indexOf(e) > Ce.indexOf(t);
}
var dr = (e) => (e ? e in Se : !1),
  ur = (e) => Se[e];
var Y = {
  toolCreateScreen: {
    type: "add",
    variant: "info",
    text: "Artboards in Framer are Screens. Press S to draw a Screen",
    key: "use-screen-tool-artboards",
    icon: "screen",
    duration: 5e3,
    showCloseButton: "always",
    styleOverride: "fallback-tool",
  },
  toolCreateRectangleShape: {
    type: "add",
    variant: "info",
    text: "Use the Frame Tool (F) to draw Rectangles",
    key: "use-frame-tool-rectangles",
    icon: "frame",
    iconOverride: "frame",
    duration: 5e3,
    showCloseButton: "always",
    styleOverride: "fallback-tool",
  },
};
function tt(e) {
  return Y[e] !== void 0;
}
function rt(e, t) {
  we(t);
  let r = Y[e];
  r && t(r);
}
function ve(e, t) {
  let r = Y[e].key;
  r && t({ type: "remove", key: r });
}
function we(e) {
  for (let t in Y) ve(t, e);
}
function nt(e) {
  return e?.scope === "user";
}
function st(e) {
  return e?.scope === "organization";
}
var R = class e extends Error {
    constructor({
      message: r,
      code: n,
      data: o = {},
      isTemporary: s,
      ref: a,
      status: u,
      skipSentry: p,
      cause: g,
    }) {
      super();
      i(this, "message");
      i(this, "code");
      i(this, "data");
      i(this, "isTemporary");
      i(this, "ref");
      i(this, "status");
      i(this, "skipSentry");
      (Error.captureStackTrace && Error.captureStackTrace(this, e),
        (this.message = r),
        (this.code = n),
        (this.data = o),
        (this.isTemporary = !0),
        (this.ref = a),
        (this.status = u),
        (this.skipSentry = !!p),
        (this.cause = g),
        s !== void 0 ? (this.isTemporary = s) : u && (this.isTemporary = u !== F.BadRequest));
    }
    toString() {
      return this.message;
    }
    isUnauthorized() {
      return this.status === F.Unauthorized;
    }
    isNotFound() {
      return this.status === F.NotFound;
    }
    isForbidden() {
      return this.status === F.Forbidden;
    }
    isClientError() {
      return this.status && this.status >= 400 && this.status < 500;
    }
    isServerError() {
      return this.status && this.status >= 500;
    }
  },
  F = {
    Ok: 200,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentDeclined: 402,
    Forbidden: 403,
    NotFound: 404,
    Conflict: 409,
  };
var q = m(M(), 1);
var se = "ts7fbvw",
  Ee = "t18v0z1l";
var ke = {
    lessThanXSeconds: "{{count}}s",
    xSeconds: "{{count}}s",
    halfAMinute: "30s",
    lessThanXMinutes: "{{count}}m",
    xMinutes: "{{count}}m",
    aboutXHours: "{{count}}h",
    xHours: "{{count}}h",
    xDays: "{{count}}d",
    aboutXWeeks: "{{count}}w",
    xWeeks: "{{count}}w",
    aboutXMonths: "{{count}}mo",
    xMonths: "{{count}}mo",
    aboutXYears: "{{count}}y",
    xYears: "{{count}}y",
    overXYears: "{{count}}y",
    almostXYears: "{{count}}y",
  },
  it = (e) => e in ke,
  at = (e) =>
    e === "lessThanXSeconds" || e === "xSeconds" || e === "halfAMinute" || e === "lessThanXMinutes";
function ct(e) {
  return (t, r, n) => {
    if (((n = n || {}), B(it(t), "Token should have correct value"), e && at(t))) return "Just now";
    let o = ke[t].replace("{{count}}", String(r));
    return n.addSuffix ? (n.comparison && n.comparison > 0 ? "in " + o : o + " ago") : o;
  };
}
function De(e, t) {
  return ((t = t || {}), K(e, { ...t, locale: { ...t.locale, formatDistance: ct(t.justNow) } }));
}
function ie(e, t, r) {
  if (t) return "Viewing now";
  if (e.lastOpenedAt) {
    let n = r?.shortDate ? De : K,
      [o, ...s] = n(be(e.lastOpenedAt), { addSuffix: !0 });
    return [o?.toLocaleUpperCase() ?? "", ...s].join("");
  }
  return "Never viewed";
}
function lt(e) {
  switch (e) {
    case "on":
      return "off";
    case "off":
      return "on";
    default:
      x(e);
  }
}
function Fe(e) {
  return Object.values(e).every((t) => t === "off");
}
function pt(e) {
  return e.canDesign === "off" && e.canEditContent === "on" && e.canPublish === "off";
}
function Er(e) {
  return e === "owner" || e === "collaborator" || e === "contentCollaborator";
}
var Re = ["canDesign", "canEditContent", "canPublish"],
  dt = { canDesign: "on", canEditContent: "on", canPublish: "on" },
  kr = { canDesign: "off", canEditContent: "on", canPublish: "off" },
  ut = { canDesign: "off", canEditContent: "off", canPublish: "off" };
function oe(e) {
  switch (e) {
    case "canDesign":
      return { label: "Design", description: "Canvas" };
    case "canEditContent":
      return { label: "Content", description: "CMS, On-Page" };
    case "canPublish":
      return { label: "Deploy", description: "Publish" };
    default:
      x(e);
  }
}
function mt(e, t) {
  if (t === "owner") return "Owner";
  if (t === "viewer") return "View Only";
  let n = Object.entries(e ?? {})
    .filter(([s, a]) => a === "on")
    .map(([s, a]) => s);
  if (n.length === 0) return "View Only";
  if (Re.every((s) => n.includes(s))) return "Full Access";
  if (n.length === 1) {
    let s = n[0];
    if (s === "canEditContent" && Ae.isOn("contentEditor")) return "Content Editor";
    if (s) return oe(s).label;
  }
  return n.map((s) => oe(s).label).join(", ");
}
function Dr(e, t) {
  return Fe(e) ? "viewer" : t && pt(e) ? "contentCollaborator" : "collaborator";
}
var ae = [
  ["#0099FF", "#0099FF"],
  ["#0066FF", "#0066FF"],
  ["#0000FF", "#3838FF"],
  ["#3300FF", "#5024FF"],
  ["#6600FF", "#7B24FF"],
  ["#9900FF", "#9F0FFF"],
  ["#EE00FF", "#EF0FFF"],
  ["#FF0088", "#FF1A94"],
  ["#FF0022", "#FF1434"],
  ["#FF4400", "#FF571A"],
  ["#FF7700", "#FF851A"],
  ["#FFBB00", "#FFBB00"],
  ["#FFD500", "#FFD500"],
  ["#00DD66", "#12ED6A"],
  ["#22DDDD", "#22DDDD"],
  ["#00CCFF", "#00CCFF"],
];
function ce(e, t) {
  return (ae[e % ae.length] ?? ae[0])[t ? 1 : 0];
}
var l = m(L(), 1);
function X({
  entry: e,
  inactive: t = !1,
  greyScale: r = !1,
  ignoreStatus: n = !1,
  withTooltip: o = !1,
  tooltipText: s,
  badge: a,
  containerClassName: u,
  avatarClassName: p,
  isDarkMode: g,
  size: S,
  shadow: f,
  onClick: v,
  onClickHoverIcon: O,
}) {
  let w = q.default.useRef(null),
    { triggerProps: E, tooltipProps: I } = H({
      triggerRef: w,
      disabled: !o,
      tint: n || t ? _.tooltipBackground : void 0,
    }),
    b = t ? void 0 : ce(e.color || 0, g),
    { initials: ee, avatar: k, name: te } = e.user,
    U = ie(e, !t);
  return (0, l.jsxs)(l.Fragment, {
    children: [
      (0, l.jsx)(le, {
        ref: w,
        ...E,
        className: u,
        children: (0, l.jsx)(V, {
          src: k,
          color: b,
          text: ee,
          badge: a,
          inactive: t,
          greyScale: r,
          onClick: v,
          onClickHoverIcon: O,
          avatarCustomStyles: p,
          shadow: f,
          size: S,
        }),
      }),
      (0, l.jsx)(W, {
        ...I,
        children: (0, l.jsx)(z, {
          gap: 8,
          padding: "5px 0",
          children: s
            ? (0, l.jsx)(T, { className: se, size: 12, children: s })
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(T, { className: se, size: 12, children: te }),
                  !n && (0, l.jsx)(T, { className: Ee, size: 11, children: U }),
                ],
              }),
        }),
      }),
    ],
  });
}
var le = q.default.forwardRef(function ({ children: t, className: r, ...n }, o) {
  return (0, l.jsx)("div", { ref: o, ...n, className: D(r), children: q.default.Children.only(t) });
});
var A = m(M(), 1);
var je = "l1l8om57",
  Oe = "sv36qp8",
  Ie = "t1aewutb",
  Ue = "tfydinf",
  $ = "a16903hn",
  Be = "c1m9oj4r",
  Ne = "c18jzmm1",
  Me = "sjg6ynt";
var d = m(L(), 1),
  yt = A.default.memo(function ({
    entries: t,
    userEntry: r,
    ignoreStatus: n = !1,
    isDarkMode: o,
    maxAvatars: s = 5,
    maxOtherNames: a = 5,
    avatarClassName: u,
    listClassName: p,
    shadow: g,
    countColor: S,
    size: f,
    withTooltips: v = !0,
  }) {
    let O = A.default.useRef(null),
      w = f === "small" || (typeof f == "number" && f <= 18),
      E = D(w && Ne, f === "small" && Me, u),
      [I, b] = (0, A.useMemo)(() => {
        let y = t.length > s ? t.slice(0, s - 1) : t,
          ne = t.length > s ? t.slice(s - 1) : [];
        return [y, ne];
      }, [t, s]),
      ee = (0, A.useMemo)(() => I.reverse(), [I]),
      k = b.length,
      te = k > 0,
      U = (0, A.useMemo)(
        () =>
          b
            .reverse()
            .slice(0, a)
            .map((y) => y.user.name),
        [b, a]
      ),
      re = k - U.length,
      Te = b[0]?.inactive,
      { triggerProps: Je, tooltipProps: Ge } = H({
        triggerRef: O,
        disabled: !v,
        tint: Te || n ? _.tooltipBackground : void 0,
      });
    return (0, d.jsxs)("div", {
      className: D(je, w && Oe, p),
      children: [
        te &&
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(le, {
                ref: O,
                ...Je,
                className: $,
                children: (0, d.jsx)(V, {
                  inactive: !S && (n || Te),
                  color: S,
                  text: k,
                  textCustomStyles: S ? Be : void 0,
                  avatarCustomStyles: E,
                  shadow: g,
                  size: f,
                }),
              }),
              (0, d.jsx)(W, {
                ...Ge,
                children: (0, d.jsxs)(z, {
                  gap: 10,
                  padding: "5px 0",
                  children: [
                    U.map((y, ne) => (0, d.jsx)(T, { className: Ie, size: 12, children: y }, ne)),
                    re > 0 &&
                      (0, d.jsxs)(T, {
                        className: Ue,
                        size: 11,
                        children: ["and ", re, " ", re === 1 ? "other" : "others"],
                      }),
                  ],
                }),
              }),
            ],
          }),
        ee.map((y) =>
          (0, d.jsx)(
            X,
            {
              entry: y,
              inactive: !n && y.inactive,
              withTooltip: v,
              containerClassName: $,
              avatarClassName: E,
              isDarkMode: o,
              shadow: g,
              size: f,
              ignoreStatus: n,
            },
            y.user.id
          )
        ),
        r &&
          (0, d.jsx)(X, {
            entry: r,
            withTooltip: v,
            containerClassName: $,
            avatarClassName: E,
            isDarkMode: o,
            shadow: g,
            size: f,
            ignoreStatus: n,
          }),
      ],
    });
  });
function ht(e) {
  return ["ssg-pipeline-failed", "ssg-user-code-failed"].includes(e);
}
function gt(e) {
  let t =
    e.status === "ssg-ready-with-warnings" ||
    e.searchIndexStatus === "failed" ||
    !!(e.status === "ssg-ready" && e.messages?.length);
  return { ...e, hasWarnings: t };
}
var j = m(M(), 1),
  J = m(L(), 1);
function xt() {
  let [e, t] = j.default.useState(!1);
  return (
    j.default.useEffect(() => {
      let r = setTimeout(() => t(!0), 200);
      return () => {
        clearTimeout(r);
      };
    }, []),
    e
      ? (0, J.jsx)("div", {
          style: {
            position: "fixed",
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            cursor: "wait",
            zIndex: 5e3,
          },
        })
      : null
  );
}
function Tt({ children: e }) {
  return e ? (0, J.jsx)(j.Suspense, { fallback: (0, J.jsx)(xt, {}), children: e }) : null;
}
var At = "pvu3uy5";
function pe(e) {
  return e.type === "template";
}
var _e = {
  locale: "Locale",
  advancedAnalytics: "Convert",
  customProxySetup: "Advanced Hosting",
  bandwidth: "Bandwidth",
  pages: "Pages",
  cmsCollections: "CMS Collections",
  cmsItems: "CMS Items",
};
function nn(e) {
  return e === "advancedAnalytics" || e === "customProxySetup";
}
var Pt = (e) => _e[e];
function bt(e) {
  return e ? e in _e : !1;
}
var Ve = { aiCredits: "Credits Add-On", contentEditors: "Content Editors" };
function Lt(e) {
  return Ve[e];
}
function Ct(e) {
  return e ? e in Ve : !1;
}
function St(e) {
  return e === "month" ? "content_editors_monthly" : "content_editors_yearly";
}
var G = "/projects/",
  vt = `${G}folder/recent`,
  wt = `${G}folder/drafts`,
  Et = `${G}folder/archived`,
  kt = "/domains";
function de(e) {
  if (e.isCustom) return e.displayName;
  let { id: t } = e;
  switch (t) {
    case "recent":
    case "drafts":
      return "All";
    case "templates":
      return "";
    case "archived":
      return "Archive";
    case "personal":
      return "Drafts";
    default:
      x(t);
  }
}
function Dt(e, t) {
  let { owner: r, space: n, collection: o } = e;
  switch (n.scope) {
    case "organization": {
      let s = pe(e) ? "Templates" : (o && de(o)) || "All",
        a = Pe.extract(s)[1] || s;
      return `${n.displayName} / ${a}`;
    }
    case "user":
      return n.ownerId === t ? "Drafts" : r.name;
    default:
      x(n);
  }
}
function ue(e, t = { referrer: !0 }) {
  let r = document.createElement("a");
  ((r.href = e),
    (r.rel = `${t.referrer ? "" : " noreferrer"}`),
    (r.target = "_blank"),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Ft() {
  ue("https://www.framer.com/downloads/");
}
var Rt = (e) => {
  (e.preventDefault(), e.stopPropagation());
};
var ze = {
  free: "Free",
  teamAccount: "Personal",
  teamPro: "Pro",
  teamBusiness: "Business",
  teamEditor: "Paid",
  enterprise: "Enterprise",
};
function jt(e) {
  return ze[e];
}
function Ot(e) {
  return e ? e in ze : !1;
}
var He = m(M(), 1);
function Ut(e, t) {
  return e.lastOpenedAt === t.lastOpenedAt
    ? 0
    : e.lastOpenedAt === null
      ? 1
      : t.lastOpenedAt === null
        ? -1
        : e.lastOpenedAt < t.lastOpenedAt
          ? 1
          : -1;
}
function Bt({ acl: e, activeIds: t, userId: r }) {
  return (0, He.useMemo)(() => {
    let n = [],
      o = [],
      s = [],
      a = null;
    Array.from(e).sort(Ut);
    for (let p of e)
      p.kind === "invite"
        ? s.push(p)
        : p.user.id === r
          ? (a = p)
          : t.has(p.user.id)
            ? n.push(p)
            : o.push(p);
    return [a, n, o, s];
  }, [e, t, r]);
}
function We(e) {
  return new Promise((t, r) => {
    let n = new FileReader();
    ((n.onloadend = () => {
      n.result ? t({ content: n.result, originalFilename: e.name }) : r(n.error);
    }),
      n.readAsDataURL(e));
  });
}
function Nt(e) {
  let t = e.map((r) => We(r));
  return Promise.all(t);
}
var Mt = ".ttf,.otf,.woff,.woff2";
function _t(e) {
  return !e.mimeType.startsWith("font/") || e.properties?.kind !== "font" || !e.properties.font
    ? !1
    : "fontFamily" in e.properties.font;
}
var Vt = /^[a-z0-9-]+:\/\//i,
  zt = /^[a-z0-9-]+:(?!\/\/)/i,
  Ht = new Set(["http://", "https://"]);
function Q(e) {
  let t = Vt.exec(e);
  return t ? t[0] : "";
}
function Wt(e) {
  if (zt.test(e)) return !0;
  let t = Q(e);
  return t ? !Ht.has(t) : !1;
}
var Kt = N("extractDomainAndPathnameFromUrl");
function Yt(e) {
  try {
    let t = Q(e),
      r = t ? new URL(e) : new URL(`https://${e}`);
    return { protocol: t, hostname: r.hostname, port: r.port, pathname: r.pathname };
  } catch (t) {
    return (Kt.reportError(t, { url: e }), { protocol: "", hostname: "", port: "", pathname: "" });
  }
}
function qt() {
  var e =
    !navigator.userAgentData &&
    /Safari\//.test(navigator.userAgent) &&
    !/Chrom(e|ium)\//.test(navigator.userAgent);
  if (!e || !indexedDB.databases) return Promise.resolve();
  var t;
  return new Promise(function (r) {
    var n = function () {
      return indexedDB.databases().finally(r);
    };
    ((t = setInterval(n, 100)), n());
  }).finally(function () {
    return clearInterval(t);
  });
}
var Ke = qt;
function h(e) {
  return new Promise((t, r) => {
    ((e.oncomplete = e.onsuccess = () => t(e.result)), (e.onabort = e.onerror = () => r(e.error)));
  });
}
function Ye(e, t, r) {
  let n = indexedDB.open(e, r);
  return ((n.onupgradeneeded = () => n.result.createObjectStore(t)), h(n));
}
function Xt(e, t) {
  let r = Ke()
    .then(() => Ye(e, t))
    .then((n) => (n.objectStoreNames.contains(t) ? n : (n.close(), Ye(e, t, n.version + 1))));
  return (n, o) => r.then((s) => o(s.transaction(t, n).objectStore(t)));
}
var me;
function P() {
  return (me || (me = Xt("keyval-store", "keyval")), me);
}
function qe(e, t = P()) {
  return t("readonly", (r) => h(r.get(e)));
}
function Xe(e, t, r = P()) {
  return r("readwrite", (n) => (n.put(t, e), h(n.transaction)));
}
function kn(e, t = P()) {
  return t("readwrite", (r) => (e.forEach((n) => r.put(n[1], n[0])), h(r.transaction)));
}
function Dn(e, t = P()) {
  return t("readonly", (r) => Promise.all(e.map((n) => h(r.get(n)))));
}
function Z(e, t = P()) {
  return t("readwrite", (r) => (r.delete(e), h(r.transaction)));
}
function Fn(e, t = P()) {
  return t("readwrite", (r) => (e.forEach((n) => r.delete(n)), h(r.transaction)));
}
function $t(e, t) {
  return e(
    "readonly",
    (r) => (
      (r.openCursor().onsuccess = function () {
        this.result && (t(this.result), this.result.continue());
      }),
      h(r.transaction)
    )
  );
}
function Rn(e = P()) {
  let t = [];
  return $t(e, (r) => t.push(r.key)).then(() => t);
}
var C = class e {
  constructor(t) {
    i(this, "scopes");
    if (((this.scopes = BigInt(0)), typeof t == "string")) {
      this.scopes = BigInt(t).valueOf();
      return;
    }
    if (typeof t == "bigint") {
      this.scopes = t;
      return;
    }
    if (typeof t == "number") {
      this.addScope(t);
      return;
    }
    if (Array.isArray(t)) {
      this.addScope(...t);
      return;
    }
  }
  addScope(...t) {
    for (let r of t) {
      if (r < 0) throw new Error("Scope must be 0 or bigger.");
      this.scopes = this.scopes | BigInt(1 << r).valueOf();
    }
  }
  hasScope(t) {
    if (t < 0) throw new Error("Scope must be 0 or bigger.");
    return !!((this.scopes >> BigInt(t)) & BigInt(1));
  }
  intersection(t) {
    return new e(this.scopes & t.valueOf());
  }
  matches(t) {
    return this.intersection(t).valueOf() === this.scopes;
  }
  valueOf() {
    return this.scopes;
  }
  toString() {
    return this.scopes.toString();
  }
};
var fe = new C([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
  $e = new C([4, 5, 6, 7, 10, 11]);
var c = N("accessTokenRefresher"),
  Gt = 401,
  ye = "access_token",
  he = "access_token.edit",
  Qt = 90 * 1e3,
  Zt = 30 * 1e3,
  xe = class {
    constructor(t, r) {
      this.options = r;
      i(this, "_accessToken");
      i(this, "_accessTokenExpiry");
      i(this, "_accessTokenStorageKey");
      i(this, "timer", null);
      i(this, "url");
      i(this, "accessTokenWaitList", []);
      i(this, "retryAttempt", 0);
      i(this, "MaxRetryDelay", 60 * 1e3);
      i(this, "BaseRetryDelay", 1e3);
      i(this, "isUnauthorized", !1);
      i(this, "hasStarted", !1);
      i(this, "isEmbeddedCrossOrigin", !1);
      i(this, "handleServerError", (t) => {
        if (!this.isUnauthorizedResponse(t))
          throw (
            c.debug("Error response status:", t.status, "with text:", t.statusText),
            this.retryWithBackoff(),
            new R({ status: t.status, message: t.statusText })
          );
      });
      this.url = `${t}/auth/web/access-token`;
      try {
        typeof window < "u" && window.top?.location.href;
      } catch {
        this.isEmbeddedCrossOrigin = !0;
      }
    }
    async start() {
      (B(!this.hasStarted, "Attempt to start AccessTokenRefresher more than once."),
        (this.hasStarted = !0));
      let t = await this.loadAccessTokenFromStorage();
      if (t) {
        let { accessToken: r, expiry: n, storageKey: o } = t;
        (this.setToken(r, n, o), this.scheduleRefreshAt(ge(n)));
      } else await this.refreshAccessTokenAndScheduleNextRefresh();
    }
    registerForNewToken(t) {
      (c.debug("Adding waiter for new token"), this.accessTokenWaitList.push(t));
    }
    flushWaitList() {
      let t = this.accessTokenWaitList;
      ((this.accessTokenWaitList = []),
        c.debug("Flushing waitlist, contains", t.length, "waiters"));
      for (let r of t) r(this._accessToken);
    }
    isUnauthorizedResponse(t) {
      return t.status === Gt;
    }
    async refreshAccessTokenAndScheduleNextRefresh() {
      (c.debug("Renewing access token"), this.hasStarted || (this.hasStarted = !0));
      let t;
      try {
        t = await fetch(this.url, { credentials: "include" });
      } catch {
        (c.error("Connection error, retrying\u2026"), this.retryWithBackoff());
        return;
      }
      if (!t.ok) {
        (this.handleServerError(t),
          this.isUnauthorizedResponse(t) &&
            (c.debug("Turning on unauthorized mode"),
            (this.isUnauthorized = !0),
            this.flushWaitList(),
            this.options?.onUnauthorized?.(this)));
        return;
      }
      (c.debug("Received access token"), (this.retryAttempt = 0));
      let r = await t.json(),
        { accessToken: n } = r,
        o = Le(n),
        s = new C(o.scopes);
      if (!this.isEmbeddedCrossOrigin && !this.isValidAccessToken(o.scope, s)) {
        (await this.discardAccessToken(),
          c.reportError(
            `Received access token has insufficient scopes. Wanted: ${fe.valueOf()}, got: ${s.valueOf()}`,
            void 0,
            void 0,
            !0
          ),
          this.options?.onInsufficientScopes?.(this),
          this.retryWithBackoff());
        return;
      }
      let a;
      if (
        (r.expiresInSeconds
          ? ((a = Date.now() + r.expiresInSeconds * 1e3),
            c.debug("Received expiry seconds:", r.expiresInSeconds))
          : (a = r.expiresAt),
        !n)
      ) {
        (c.error("Unable to authenticate client"), this.retryWithBackoff());
        return;
      }
      let u = new Date(a);
      if (Number.isNaN(u.getTime())) {
        (c.error("Access Token expiry date is invalid"), this.retryWithBackoff());
        return;
      }
      (this.setToken(n, u, this.isEmbeddedCrossOrigin ? he : ye), this.scheduleRefreshAt(ge(u)));
    }
    setToken(t, r, n) {
      (c.debug("Setting acccess token"),
        (this._accessToken = t),
        (this._accessTokenExpiry = r),
        (this._accessTokenStorageKey = n),
        this.flushWaitList(),
        this.saveAccessTokenInStorage(n, { accessToken: t, expiresAt: r.toISOString() }));
    }
    clearRefreshTimer() {
      this.timer &&
        (c.debug("Clearing refresh timer"), clearTimeout(this.timer), (this.timer = null));
    }
    retryWithBackoff() {
      (this.clearRefreshTimer(), (this.retryAttempt += 1));
      let t = Math.floor(
        Math.random() * Math.min(this.MaxRetryDelay, this.BaseRetryDelay * 2 ** this.retryAttempt)
      );
      (c.debug("Retrying after", t), this.scheduleRefreshAfter(t));
    }
    scheduleRefreshAfter(t) {
      (this.clearRefreshTimer(),
        (this.timer = setTimeout(() => this.refreshAccessTokenAndScheduleNextRefresh(), t)));
    }
    scheduleRefreshAt(t) {
      let r = t.getTime() - new Date().getTime();
      if (r <= 0) throw new Error("Refresh time is not valid");
      this.scheduleRefreshAfter(r);
    }
    async saveAccessTokenInStorage(t, r) {
      try {
        await Xe(t, r);
      } catch (n) {
        c.debug("Error in storing access token", n);
      }
    }
    async loadAccessTokenFromStorage() {
      let t = this.isEmbeddedCrossOrigin ? he : ye;
      try {
        let r = await qe(t);
        if (!r) return null;
        let { accessToken: n, expiresAt: o } = r,
          s = new Date(o);
        return new Date() >= ge(s) ? null : { accessToken: n, expiry: s, storageKey: t };
      } catch (r) {
        return (
          c.warn("Warning: failed to read the access token from IndexedDB (via idb-keyval):", r),
          null
        );
      }
    }
    hasAccessTokenExpired() {
      return this._accessTokenExpiry
        ? new Date().getTime() >= this._accessTokenExpiry.getTime() - Zt
        : !1;
    }
    isAccessTokenValid() {
      return this._accessToken && !this.isUnauthorized && !this.hasAccessTokenExpired();
    }
    async getAccessToken() {
      if (this.isUnauthorized) return Promise.resolve(void 0);
      if (this.isAccessTokenValid()) return Promise.resolve(this._accessToken);
      let t = new Promise((r) => this.registerForNewToken(r));
      return (
        this.hasAccessTokenExpired() && (await this.discardAccessToken(!0)),
        this.hasStarted || (await this.start()),
        t
      );
    }
    async getAuthorizationHeaderValue() {
      let t = await this.getAccessToken();
      if (t) return `Bearer ${t}`;
    }
    async stopAuthentication() {
      try {
        (await this.discardAccessToken(!1), (this.hasStarted = !1), await Z(ye), await Z(he));
      } catch {}
    }
    async discardAccessToken(t = !1) {
      try {
        (c.debug("Discarding access token with renewal", t),
          this.clearRefreshTimer(),
          (this._accessToken = void 0),
          (this._accessTokenExpiry = void 0),
          this._accessTokenStorageKey && (await Z(this._accessTokenStorageKey)),
          (this._accessTokenStorageKey = void 0),
          t && !this.isUnauthorized && this.scheduleRefreshAfter(0));
      } catch {}
    }
    async withAuthorizationHeader(t) {
      let r = await this.getAuthorizationHeaderValue();
      return (r && ((t.headers = new Headers(t.headers)), t.headers.set("authorization", r)), t);
    }
    isValidAccessToken(t, r) {
      return t === "public-api" ? $e.matches(r) : fe.matches(r);
    }
  };
function ge(e) {
  return new Date(e.getTime() - Qt);
}
function er() {
  return ["/web/users/me"];
}
function tr(e, t) {
  let r = t ? { accessToken: t } : void 0;
  return [`/web/projects/${e}`, r];
}
function rr() {
  return ["/web/users/default-project-location"];
}
function nr() {
  return ["/web/v2/dashboard/metadata"];
}
function sr() {
  return window["__app-start-time"] || 0;
}
export {
  De as a,
  ie as b,
  lt as c,
  pt as d,
  Er as e,
  Re as f,
  dt as g,
  kr as h,
  ut as i,
  oe as j,
  mt as k,
  Dr as l,
  ce as m,
  X as n,
  yt as o,
  ht as p,
  gt as q,
  Tt as r,
  At as s,
  or as t,
  ir as u,
  ar as v,
  cr as w,
  lr as x,
  pr as y,
  dr as z,
  ur as A,
  pe as B,
  nn as C,
  Pt as D,
  bt as E,
  Lt as F,
  Ct as G,
  St as H,
  G as I,
  vt as J,
  wt as K,
  Et as L,
  kt as M,
  de as N,
  Dt as O,
  ue as P,
  Ft as Q,
  tt as R,
  rt as S,
  ve as T,
  Rt as U,
  nt as V,
  st as W,
  jt as X,
  Ot as Y,
  Bt as Z,
  Nt as _,
  Mt as $,
  _t as aa,
  Q as ba,
  Wt as ca,
  Yt as da,
  Xt as ea,
  qe as fa,
  Xe as ga,
  kn as ha,
  Dn as ia,
  Z as ja,
  Fn as ka,
  Rn as la,
  R as ma,
  F as na,
  xe as oa,
  er as pa,
  tr as qa,
  rr as ra,
  nr as sa,
  sr as ta,
};
//# sourceMappingURL=chunk-5JMTOW4C.mjs.map
