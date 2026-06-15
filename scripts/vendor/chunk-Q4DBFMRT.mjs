import { d as j } from "chunk-TAHWCQVJ.mjs";
import { g as V } from "chunk-MNOUN6WL.mjs";
import { b as D, i as M } from "chunk-64TR2YPE.mjs";
import { v as K, y as k } from "chunk-5JMTOW4C.mjs";
import { o as I } from "chunk-RJAQ7ZXH.mjs";
import { b as O, e as v, f as _, g as U, l as S } from "chunk-DYNCKUFC.mjs";
import { b as h } from "chunk-6PNPO5DW.mjs";
function Q(e, n, a, o, s, g) {
  if (n.pages > (a.maxPages ?? 1 / 0)) return "pages";
  if (n.cmsCollections > (a.maxCmsCollections ?? 1 / 0)) return "cmsCollections";
  if (n.cmsItems > (a.maxCmsItems ?? 1 / 0)) return "cmsItems";
  if (n.locales > (a.maxLocales ?? 1 / 0)) return "locales";
  let P = g ? a.maxEditors : o !== "free" ? (s?.maxEditors ?? a.maxEditors) : a.maxEditors;
  if (n.editors > (P ?? 1 / 0)) return "editors";
  if (e !== "freeSite" && n.abTests > (a.maxAbTests ?? 1 / 0)) return "abTests";
  if (I.isOn("publishBandwidthBlock")) {
    let d = a.maxBandwidthInGB ?? 1 / 0,
      { previousMonth: i, twoMonthsAgo: u, currentMonth: f } = n.bandwidthInGB,
      x = i > d && u > d,
      G = i > d && f > d;
    if ((x || G) && !(V === d)) return "bandwidth";
  }
}
var Y = {
  pages: "You currently have more pages than this plan allows for.",
  cmsCollections: "You currently have more CMS collections than this plan allows for.",
  cmsItems: "You currently have more CMS items than this plan allows for.",
  locales: "You currently have more locales than this plan allows for.",
  editors: "You currently have more editors in your project than this plan allows for.",
  abTests: "You currently have more A/B tests in your project than this plan allows for.",
  bandwidth: "Your current bandwidth usage exceeds this plan\u2019s limit.",
};
function xe(e) {
  return Y[e];
}
function Le({ isEnterprise: e, count: n, maxLimit: a, selfServeMax: o }) {
  return e ? 3 : n <= a ? 1 : n <= o ? 0 : 2;
}
var $ = ((t) => (
  (t.fileUploadLimitInMB = "fileUploadLimitInMB"),
  (t.pages = "pages"),
  (t.cmsCollections = "cmsCollections"),
  (t.cmsItems = "cmsItems"),
  (t.localeAddon = "localeAddon"),
  (t.abTests = "abTests"),
  (t.trackingEventsLimit = "trackingEventsLimit"),
  (t.translatableWords = "translatableWords"),
  (t.bandwidthInGB = "bandwidthInGB"),
  (t.analyticsRangeInDays = "analyticsRangeInDays"),
  (t.aiCredits = "aiCredits"),
  (t.canUseFunnels = "canUseFunnels"),
  (t.canUseTriggers = "canUseTriggers"),
  (t.canInviteEditors = "canInviteEditors"),
  (t.canInviteProjectEditors = "canInviteProjectEditors"),
  (t.canPublishToCustomDomain = "canPublishToCustomDomain"),
  (t.canUseBatchAITranslation = "canUseBatchAITranslation"),
  (t.canUseBranching = "canUseBranching"),
  (t.canUseCustomCanonicalUrl = "canUseCustomCanonicalUrl"),
  (t.canUseCustomLocaleRegions = "canUseCustomLocaleRegions"),
  (t.canUseEditorPermissions = "canUseEditorPermissions"),
  (t.canUsePasswordProtection = "canUsePasswordProtection"),
  (t.canUseRedirects = "canUseRedirects"),
  (t.canUseStagingEnvironment = "canUseStagingEnvironment"),
  (t.canUseUTMTracking = "canUseUTMTracking"),
  (t.canUseWellKnown = "canUseWellKnown"),
  (t.customDomainRecoverUpsell = "customDomainRecoverUpsell"),
  (t.domainToBuyUpsell = "domainToBuyUpsell"),
  t
))($ || {});
function Oe(e) {
  return e in $;
}
function Fe(e, n) {
  return e !== null ? e : n.abTests > 0 ? "abTests" : null;
}
function c(e, n, a) {
  return e.find(({ resourceLimits: o }) => (o[a] ?? 1 / 0) > (n[a] ?? 1 / 0))?.licenseType ?? null;
}
function l(e, n, a) {
  return e.find(({ featureFlags: o }) => o[n] === a)?.licenseType ?? null;
}
function be(e, n, a, o, s, g, P) {
  let i = a
    .filter(({ licenseType: u }) => k(u, n) && K(u) && u !== "basicSite2025")
    .filter(
      ({ resourceLimits: u, licenseType: f }) => !Q(n, g, u, o, s, P) && f !== "enterpriseSite"
    );
  switch (e) {
    case "pages":
      return c(i, s, "pages");
    case "fileUploadLimitInMB":
      return c(i, s, "fileUploadLimitInMB");
    case "cmsCollections":
      return c(i, s, "cmsCollections");
    case "cmsItems":
      return c(i, s, "cmsItems");
    case "canUseEditorPermissions":
      return l(i, "canUseEditorPermissions", "on");
    case "canPublishToCustomDomain":
    case "customDomainRecoverUpsell":
    case "domainToBuyUpsell":
      return l(i, "canPublishToCustomDomain", "on");
    case "canInviteEditors":
    case "canInviteProjectEditors":
      return c(i, s, "maxEditors");
    case "translatableWords":
    case "localeAddon":
      return c(i, s, "maxLocales");
    case "canUseBatchAITranslation":
      return l(i, "canUseBatchAITranslation", "on");
    case "canUseBranching":
      return l(i, "canUseBranching", "on");
    case "canUseUTMTracking":
      return l(i, "canUseUTMTracking", "on");
    case "canUseFunnels":
      return l(i, "canUseFunnels", "upsell");
    case "canUseTriggers":
      return l(i, "canUseTriggers", "upsell");
    case "abTests":
      return c(i, s, "maxAbTests");
    case "trackingEventsLimit":
      return c(i, s, "maxTrackingEventsLimit");
    case "canUseRedirects":
      return l(i, "canUseRedirects", "on");
    case "canUseCustomCanonicalUrl":
      return l(i, "canUseCustomCanonicalUrl", "upsell");
    case "canUseCustomLocaleRegions":
      return l(i, "canUseCustomLocaleRegions", "on");
    case "canUsePasswordProtection":
      return l(i, "canUsePasswordProtection", "on");
    case "canUseStagingEnvironment":
      return l(i, "canUseStagingEnvironment", "on");
    case "canUseWellKnown":
      return l(i, "canUseWellKnown", "on");
    case "analyticsRangeInDays":
      return c(i, s, "analyticsRangeInDays");
    case "bandwidthInGB":
      return c(i, s, "bandwidthInGB");
    case "aiCredits":
      return c(i, s, "aiCredits");
  }
}
var X = {
  "openai/gpt-3.5-turbo-1106": 16385,
  "openai/gpt-4": 8191,
  "openai/gpt-4o-2024-08-06": 128e3,
  "openai/gpt-4o-mini-2024-07-18": 128e3,
  "google/gemini-2.0-flash-001": 1048576,
  "google/gemini-2.5-flash": 1048576,
  "google/gemini-2.5-flash-lite": 1048576,
  "google/gemini-2.5-pro": 1048576,
  "google/gemini-3.1-pro-preview-customtools": 1048576,
  "google/gemini-3.1-flash-lite-preview": 1048576,
  "google/gemini-3-flash-preview": 1048576,
  "google/gemini-3.5-flash": 1048576,
  "qwen/qwen3.6-flash": 1e6,
  "openai/gpt-4.1": 1047576,
  "openai/gpt-5.1": 4e5,
  "openai/gpt-5.2": 4e5,
  "openai/gpt-5.2-codex": 4e5,
  "openai/gpt-5.1-codex-mini": 4e5,
  "openai/gpt-5.3-codex": 4e5,
  "openai/gpt-5.4": [272e3, 105e4],
  "openai/gpt-5.5": [272e3, 105e4],
  "openai/kindle-alpha": [272e3, 105e4],
  "openai/mercury-alpha": [272e3, 105e4],
  "openai/gpt-5.4-mini": 4e5,
  "anthropic/claude-haiku-4.5": 2e5,
  "moonshotai/Kimi-K2.5": 262144,
  "moonshotai/Kimi-K2.6": 262144,
  "deepseek/deepseek-v4-pro": 1048576,
  "deepseek/deepseek-v4-flash": 1048576,
  "qwen/qwen3-vl-235b-a22b-instruct": 262144,
  "openai/gpt-oss-120b": 131072,
  "openai/gpt-oss-20b": 131072,
  "anthropic/claude-opus-4.5": 2e5,
  "anthropic/claude-sonnet-4.5": [2e5, 3e5, 1e6],
  "anthropic/claude-sonnet-4.6": [3e5, 5e5, 1e6],
  "anthropic/claude-opus-4.6": [5e5, 7e5, 1e6],
  "anthropic/claude-opus-4.7": [5e5, 7e5, 1e6],
  "anthropic/claude-opus-4.8": [5e5, 7e5, 1e6],
  "contour-1": 262144,
};
function Ie(e, n) {
  let a = X[e];
  if (v(a)) return a;
  let o = a.length === 2 ? a[1] : a[2];
  switch (n) {
    case "lower":
      return a[0];
    case "upper":
      return a.length === 2 ? o : a[1];
    case "max":
      return o;
    default:
      h(n, "Context limit cap must be supported.");
  }
}
var q = ["low", "medium", "high", "xhigh"],
  Z = {
    none: "None",
    enabled: "Enabled",
    minimal: "Minimal",
    low: "Low",
    medium: "Medium",
    high: "High",
    xhigh: "Extra High",
    interleaved: "Adaptive",
  };
function Ke(e) {
  return Z[e];
}
var z = {
    "openai/gpt-3.5-turbo-1106": new Set(["none", "minimal", "low", "medium", "high"]),
    "openai/gpt-4": new Set(["none", "minimal", "low", "medium", "high"]),
    "openai/gpt-4o-2024-08-06": new Set(["none", "minimal", "low", "medium", "high"]),
    "openai/gpt-4o-mini-2024-07-18": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-2.0-flash-001": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-2.5-flash": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-2.5-flash-lite": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-2.5-pro": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-3-flash-preview": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-3.1-pro-preview-customtools": new Set(["minimal", "low", "medium", "high"]),
    "google/gemini-3.1-flash-lite-preview": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-3.5-flash": new Set(["minimal", "low", "medium", "high"]),
    "qwen/qwen3.6-flash": new Set(["none"]),
    "openai/gpt-4.1": new Set(["none", "minimal", "low", "medium", "high"]),
    "openai/gpt-5.1": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.2": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.2-codex": new Set(["low", "medium", "high"]),
    "openai/gpt-5.1-codex-mini": new Set(["low", "medium", "high"]),
    "openai/gpt-5.3-codex": new Set(["low", "medium", "high"]),
    "openai/gpt-5.4": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.5": new Set(["none", "low", "medium", "high"]),
    "openai/kindle-alpha": new Set(["none", "low", "medium", "high"]),
    "openai/mercury-alpha": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.4-mini": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-oss-120b": new Set(["low", "medium", "high"]),
    "openai/gpt-oss-20b": new Set(["low", "medium", "high"]),
    "anthropic/claude-haiku-4.5": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-sonnet-4.5": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-sonnet-4.6": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-opus-4.5": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-opus-4.6": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-opus-4.7": new Set(["none", "low", "medium", "high", "xhigh"]),
    "anthropic/claude-opus-4.8": new Set(["none", "low", "medium", "high", "xhigh"]),
    "deepseek/deepseek-v4-pro": new Set(["none", "high", "xhigh"]),
    "deepseek/deepseek-v4-flash": new Set(["none", "high", "xhigh"]),
    "moonshotai/Kimi-K2.5": new Set(["enabled", "none"]),
    "moonshotai/Kimi-K2.6": new Set(["enabled", "none"]),
    "qwen/qwen3-vl-235b-a22b-instruct": new Set(["none"]),
    "contour-1": new Set(["enabled", "none"]),
  },
  J = new Set(["none", "enabled", "minimal", "low", "medium", "high", "xhigh", "interleaved"]);
function ee(e) {
  return O(e) ? J.has(e) : !1;
}
function ke(e) {
  if (!_(e)) return !1;
  for (let n in e) {
    if (!D(n)) return !1;
    let a = e[n];
    if (!ee(a) || !z[n].has(a)) return !1;
  }
  return !0;
}
function Ve(e, n) {
  return z[n].has(e);
}
function De(e) {
  switch (e) {
    case "openai/gpt-3.5-turbo-1106":
    case "openai/gpt-4":
    case "openai/gpt-4o-2024-08-06":
    case "openai/gpt-4o-mini-2024-07-18":
    case "google/gemini-2.0-flash-001":
    case "google/gemini-2.5-flash":
    case "google/gemini-2.5-flash-lite":
    case "google/gemini-2.5-pro":
    case "google/gemini-3-flash-preview":
    case "google/gemini-3.1-pro-preview-customtools":
    case "google/gemini-3.1-flash-lite-preview":
    case "openai/gpt-4.1":
    case "openai/gpt-5.1":
    case "openai/gpt-5.2":
    case "openai/gpt-5.2-codex":
    case "openai/gpt-5.1-codex-mini":
    case "openai/gpt-5.3-codex":
    case "openai/gpt-5.4":
    case "openai/gpt-5.5":
    case "openai/kindle-alpha":
    case "openai/mercury-alpha":
    case "openai/gpt-5.4-mini":
    case "openai/gpt-oss-120b":
    case "openai/gpt-oss-20b":
    case "anthropic/claude-haiku-4.5":
    case "anthropic/claude-sonnet-4.5":
    case "anthropic/claude-sonnet-4.6":
    case "anthropic/claude-opus-4.5":
    case "anthropic/claude-opus-4.6":
    case "anthropic/claude-opus-4.7":
    case "anthropic/claude-opus-4.8":
      return "low";
    case "google/gemini-3.5-flash":
      return "medium";
    case "deepseek/deepseek-v4-pro":
    case "deepseek/deepseek-v4-flash":
    case "qwen/qwen3-vl-235b-a22b-instruct":
    case "qwen/qwen3.6-flash":
      return "none";
    case "moonshotai/Kimi-K2.5":
    case "moonshotai/Kimi-K2.6":
    case "contour-1":
      return "enabled";
    default:
      h(e, "Model must have a default reasoning effort specified.");
  }
}
var ne = {
  "openai/gpt-3.5-turbo-1106": !1,
  "openai/gpt-4": !1,
  "openai/gpt-4o-2024-08-06": !1,
  "openai/gpt-4o-mini-2024-07-18": !1,
  "google/gemini-2.0-flash-001": !1,
  "google/gemini-2.5-flash": !1,
  "google/gemini-2.5-flash-lite": !1,
  "google/gemini-2.5-pro": !1,
  "google/gemini-3.1-pro-preview-customtools": !1,
  "google/gemini-3.1-flash-lite-preview": !1,
  "google/gemini-3-flash-preview": !1,
  "google/gemini-3.5-flash": !1,
  "qwen/qwen3.6-flash": !1,
  "openai/gpt-4.1": !1,
  "openai/gpt-5.1": !1,
  "openai/gpt-5.2": !1,
  "openai/gpt-5.2-codex": !1,
  "openai/gpt-5.1-codex-mini": !1,
  "openai/gpt-5.3-codex": !1,
  "openai/gpt-5.4": !1,
  "openai/gpt-5.5": !1,
  "openai/kindle-alpha": !1,
  "openai/mercury-alpha": !1,
  "openai/gpt-5.4-mini": !1,
  "anthropic/claude-haiku-4.5": !1,
  "moonshotai/Kimi-K2.5": !1,
  "moonshotai/Kimi-K2.6": !1,
  "deepseek/deepseek-v4-pro": !1,
  "deepseek/deepseek-v4-flash": !1,
  "qwen/qwen3-vl-235b-a22b-instruct": !1,
  "openai/gpt-oss-120b": !1,
  "openai/gpt-oss-20b": !1,
  "anthropic/claude-opus-4.5": !1,
  "anthropic/claude-sonnet-4.5": !1,
  "anthropic/claude-sonnet-4.6": !0,
  "anthropic/claude-opus-4.6": !0,
  "anthropic/claude-opus-4.7": !0,
  "anthropic/claude-opus-4.8": !0,
  "contour-1": !1,
};
function F(e) {
  return ne[e];
}
var ae = new Set(q);
function ie(e) {
  return ae.has(e);
}
var te = { low: 1024, medium: 2048, high: 4096 };
function se(e, n) {
  if (S(e)) return oe(n);
  switch (e) {
    case "enabled":
      return;
    case "none":
      switch (n) {
        case "anthropic/claude-haiku-4.5":
        case "anthropic/claude-sonnet-4.5":
        case "anthropic/claude-sonnet-4.6":
        case "anthropic/claude-opus-4.5":
        case "anthropic/claude-opus-4.6":
        case "anthropic/claude-opus-4.7":
        case "anthropic/claude-opus-4.8":
        case "qwen/qwen3.6-flash":
        case "moonshotai/Kimi-K2.5":
        case "moonshotai/Kimi-K2.6":
        case "qwen/qwen3-vl-235b-a22b-instruct":
          return;
        default:
          return { effort: "none", enabled: !0 };
      }
    case "minimal":
      return { effort: e, enabled: !0 };
    case "interleaved":
      return { enabled: !0 };
    case "low":
    case "medium":
    case "high": {
      if (n === "anthropic/claude-sonnet-4.6") {
        let a = te[e];
        if (!S(a)) return { enabled: !0, max_tokens: a };
      }
      return F(n) ? { enabled: !0 } : { effort: e, enabled: !0 };
    }
    case "xhigh":
      return F(n) ? { enabled: !0 } : { effort: e, enabled: !0 };
    default:
      h(e, "Reasoning effort must have a reasoning config.");
  }
}
function je(e, n) {
  if (!(S(e) || !F(n) || !ie(e))) return { verbosity: e };
}
var H = "effort";
function Qe(e, n) {
  let a = se(e, n);
  if (!U(a, H)) return;
  let o = a[H];
  return O(o) ? o : void 0;
}
function oe(e) {
  switch (e) {
    case "google/gemini-3.5-flash":
      return { effort: "medium", enabled: !0 };
    case "google/gemini-2.0-flash-001":
    case "google/gemini-2.5-flash":
    case "google/gemini-2.5-pro":
    case "google/gemini-3-flash-preview":
    case "google/gemini-3.1-pro-preview-customtools":
    case "google/gemini-3.1-flash-lite-preview":
    case "openai/gpt-4.1":
    case "openai/gpt-3.5-turbo-1106":
    case "openai/gpt-4":
    case "openai/gpt-4o-2024-08-06":
    case "openai/gpt-4o-mini-2024-07-18":
      return { effort: "minimal", enabled: !0 };
    case "openai/gpt-oss-120b":
    case "openai/gpt-oss-20b":
    case "anthropic/claude-opus-4.5":
      return { effort: "low", enabled: !0 };
    case "anthropic/claude-haiku-4.5":
    case "anthropic/claude-sonnet-4.5":
    case "anthropic/claude-sonnet-4.6":
    case "anthropic/claude-opus-4.6":
    case "anthropic/claude-opus-4.7":
    case "anthropic/claude-opus-4.8":
    case "deepseek/deepseek-v4-pro":
    case "deepseek/deepseek-v4-flash":
    case "qwen/qwen3.6-flash":
    case "qwen/qwen3-vl-235b-a22b-instruct":
      return;
    case "moonshotai/Kimi-K2.5":
    case "moonshotai/Kimi-K2.6":
    case "contour-1":
      return;
    case "openai/gpt-5.2-codex":
    case "openai/gpt-5.1-codex-mini":
    case "openai/gpt-5.3-codex":
      return { effort: "low", enabled: !0 };
    case "google/gemini-2.5-flash-lite":
    case "openai/gpt-5.1":
    case "openai/gpt-5.2":
    case "openai/gpt-5.4":
    case "openai/gpt-5.5":
    case "openai/kindle-alpha":
    case "openai/mercury-alpha":
    case "openai/gpt-5.4-mini":
      return { effort: "none", enabled: !0 };
    default:
      h(e, "Model must have reasoning specified.");
  }
}
var $e = [
  "google/gemini-3.5-flash",
  "openai/gpt-5.4-mini",
  "google/gemini-3-flash-preview",
  "openai/gpt-5.5",
  "openai/gpt-5.4",
  "openai/gpt-5.2",
];
function He(e) {
  switch (e) {
    case "google/gemini-3.5-flash":
      return { effort: "minimal", enabled: !0 };
    case "openai/gpt-5.3-codex":
    case "openai/gpt-5.2":
    case "openai/gpt-5.5":
    case "openai/kindle-alpha":
    case "openai/mercury-alpha":
    case "google/gemini-3-flash-preview":
      return { effort: "low", enabled: !0 };
    case "openai/gpt-5.4":
    case "openai/gpt-5.4-mini":
      return { effort: "medium", enabled: !0 };
    default:
      return;
  }
}
function ze(e) {
  switch (e) {
    case "google/gemini-2.5-flash":
    case "google/gemini-2.0-flash-001":
    case "google/gemini-2.5-flash-lite":
    case "google/gemini-2.5-pro":
    case "google/gemini-3-flash-preview":
    case "google/gemini-3.1-flash-lite-preview":
    case "google/gemini-3.1-pro-preview-customtools":
    case "google/gemini-3.5-flash":
    case "openai/gpt-4.1":
    case "openai/gpt-5.1":
    case "openai/gpt-5.2":
    case "openai/gpt-5.2-codex":
    case "openai/gpt-5.1-codex-mini":
    case "openai/gpt-5.3-codex":
    case "openai/gpt-5.4":
    case "openai/gpt-5.5":
    case "openai/kindle-alpha":
    case "openai/mercury-alpha":
    case "openai/gpt-5.4-mini":
    case "openai/gpt-3.5-turbo-1106":
    case "openai/gpt-4":
    case "openai/gpt-4o-2024-08-06":
    case "openai/gpt-4o-mini-2024-07-18":
    case "openai/gpt-oss-20b":
    case "contour-1":
    case "moonshotai/Kimi-K2.5":
    case "moonshotai/Kimi-K2.6":
      return;
    case "deepseek/deepseek-v4-pro":
    case "deepseek/deepseek-v4-flash":
      return { ignore: ["deepseek", "gmicloud/fp8"] };
    case "qwen/qwen3.6-flash":
    case "qwen/qwen3-vl-235b-a22b-instruct":
      return { only: ["alibaba"] };
    case "anthropic/claude-haiku-4.5":
    case "anthropic/claude-sonnet-4.5":
    case "anthropic/claude-sonnet-4.6":
    case "anthropic/claude-opus-4.5":
    case "anthropic/claude-opus-4.6":
    case "anthropic/claude-opus-4.7":
    case "anthropic/claude-opus-4.8":
      return { order: ["amazon-bedrock", "anthropic/2", "anthropic"], ignore: ["google-vertex"] };
    case "openai/gpt-oss-120b":
      return { only: ["cerebras/fp16"] };
    default:
      h(e, "Model must have provider specified.");
  }
}
var re = {
    "openai/gpt-3.5-turbo-1106": "GPT 3.5 Turbo",
    "openai/gpt-4": "GPT 4",
    "openai/gpt-4o-2024-08-06": "GPT 4o",
    "openai/gpt-4o-mini-2024-07-18": "GPT 4o Mini",
    "google/gemini-2.0-flash-001": "Gemini 2.0 Flash",
    "google/gemini-2.5-flash": "Gemini 2.5 Flash",
    "google/gemini-2.5-flash-lite": "Gemini 2.5 Flash Lite",
    "google/gemini-2.5-pro": "Gemini 2.5 Pro",
    "google/gemini-3-flash-preview": "Gemini 3 Flash",
    "google/gemini-3.1-pro-preview-customtools": "Gemini 3.1 Pro",
    "google/gemini-3.1-flash-lite-preview": "Gemini 3.1 Flash Lite",
    "google/gemini-3.5-flash": "Gemini 3.5 Flash",
    "qwen/qwen3.6-flash": "Qwen 3.6 Flash",
    "openai/gpt-4.1": "GPT 4.1",
    "openai/gpt-5.1": "GPT 5.1",
    "openai/gpt-5.2": "GPT 5.2",
    "openai/gpt-5.4": "GPT 5.4",
    "openai/gpt-5.5": "GPT 5.5",
    "openai/kindle-alpha": "GPT Kindle Alpha",
    "openai/mercury-alpha": "GPT Mercury Alpha",
    "openai/gpt-5.4-mini": "GPT 5.4 Mini",
    "anthropic/claude-haiku-4.5": "Haiku 4.5",
    "anthropic/claude-sonnet-4.5": "Sonnet 4.5",
    "anthropic/claude-sonnet-4.6": "Sonnet 4.6",
    "anthropic/claude-opus-4.5": "Opus 4.5",
    "anthropic/claude-opus-4.6": "Opus 4.6",
    "anthropic/claude-opus-4.7": "Opus 4.7",
    "anthropic/claude-opus-4.8": "Opus 4.8",
    "deepseek/deepseek-v4-pro": "DeepSeek V4 Pro",
    "deepseek/deepseek-v4-flash": "DeepSeek V4 Flash",
    "moonshotai/Kimi-K2.5": "Kimi K2.5",
    "moonshotai/Kimi-K2.6": "Kimi K2.6",
    "qwen/qwen3-vl-235b-a22b-instruct": "Qwen3 VL 235B",
    "openai/gpt-5.1-codex-mini": "GPT-5.1 Codex Mini",
    "openai/gpt-5.2-codex": "GPT-5.2 Codex",
    "openai/gpt-5.3-codex": "GPT-5.3 Codex",
    "openai/gpt-oss-120b": "GPT OSS 120B",
    "openai/gpt-oss-20b": "GPT OSS 20B",
    "contour-1": "Framer Contour",
  },
  le = re["openai/gpt-5.5"];
function p(e, n, a) {
  return { multiplier: n, description: { name: e, body: a(`${n}\xD7`, le) } };
}
var b = {
  "openai/gpt-5.5": p(
    "GPT 5.5",
    1,
    () => "is OpenAI\u2019s flagship model and is the baseline for credits spent in Framer."
  ),
  "anthropic/claude-haiku-4.5": p(
    "Haiku 4.5",
    0.2,
    (e, n) => `is Anthropic\u2019s fastest model and costs ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-sonnet-4.5": p(
    "Sonnet 4.5",
    0.9,
    (e, n) => `is a previous-generation model and costs ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-sonnet-4.6": p(
    "Sonnet 4.6",
    0.9,
    (e, n) => `is Anthropic\u2019s mid-tier model and costs ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-opus-4.5": p(
    "Opus 4.5",
    2,
    (e, n) => `is a previous-generation Anthropic flagship and costs ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-opus-4.6": p(
    "Opus 4.6",
    2,
    (e, n) => `is Anthropic\u2019s previous flagship model and costs ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-opus-4.7": p(
    "Opus 4.7",
    2,
    (e, n) => `is Anthropic\u2019s flagship model and costs ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-opus-4.8": p(
    "Opus 4.8",
    2,
    (e, n) => `is Anthropic\u2019s flagship model and costs ${e} as many credits as ${n}.`
  ),
};
function Ne(e) {
  let n = b[e];
  if (n !== void 0) return `${n.multiplier}\xD7`;
}
function We(e) {
  return b[e]?.multiplier;
}
function Ye(e) {
  return b[e]?.description;
}
var T = { maxVisionImageDimension: 1568, maxVisionImages: 20, maxVisionImageSizeKB: 5e3 },
  ce = 200,
  ue = ge(50);
function r(e) {
  return { allowedFileTypes: ["image/*"], maxAttachments: ce, totalSizeLimit: ue, ...e };
}
var A = {
  "openai/gpt-5.1": r(),
  "openai/gpt-5.2": r(),
  "openai/gpt-5.2-codex": r(),
  "openai/gpt-5.3-codex": r(),
  "openai/gpt-5.1-codex-mini": r(),
  "openai/gpt-5.4": r(),
  "openai/gpt-5.5": r(),
  "openai/kindle-alpha": r(),
  "openai/mercury-alpha": r(),
  "openai/gpt-5.4-mini": r(),
  "anthropic/claude-sonnet-4.5": r(T),
  "anthropic/claude-opus-4.5": r(T),
  "anthropic/claude-sonnet-4.6": r(T),
  "anthropic/claude-opus-4.6": r(T),
  "anthropic/claude-opus-4.7": r(T),
  "anthropic/claude-opus-4.8": r(T),
  "anthropic/claude-haiku-4.5": r(T),
};
function de(e = M) {
  return A[e]?.maxVisionImageDimension;
}
function me(e = M) {
  return A[e]?.maxVisionImages;
}
function pe(e = M) {
  return A[e]?.maxVisionImageSizeKB;
}
function Xe(e = M) {
  return de(e) !== void 0 || me(e) !== void 0 || pe(e) !== void 0;
}
function ge(e) {
  return e * 1024 * 1024;
}
function qe(e) {
  switch (e) {
    case "anthropic/claude-haiku-4.5":
    case "anthropic/claude-sonnet-4.5":
    case "anthropic/claude-sonnet-4.6":
    case "anthropic/claude-opus-4.5":
    case "anthropic/claude-opus-4.6":
    case "anthropic/claude-opus-4.7":
    case "anthropic/claude-opus-4.8":
      return "anthropic";
    case "google/gemini-2.0-flash-001":
    case "google/gemini-2.5-flash":
    case "google/gemini-2.5-flash-lite":
    case "google/gemini-2.5-pro":
    case "google/gemini-3-flash-preview":
    case "google/gemini-3.1-pro-preview-customtools":
    case "google/gemini-3.1-flash-lite-preview":
    case "google/gemini-3.5-flash":
      return "google";
    case "qwen/qwen3.6-flash":
    case "qwen/qwen3-vl-235b-a22b-instruct":
      return "qwen";
    case "deepseek/deepseek-v4-pro":
    case "deepseek/deepseek-v4-flash":
      return "deepseek";
    case "moonshotai/Kimi-K2.5":
    case "moonshotai/Kimi-K2.6":
      return "moonshotai";
    case "openai/gpt-3.5-turbo-1106":
    case "openai/gpt-4":
    case "openai/gpt-4o-2024-08-06":
    case "openai/gpt-4o-mini-2024-07-18":
    case "openai/gpt-4.1":
    case "openai/gpt-5.1":
    case "openai/gpt-5.2":
    case "openai/gpt-5.2-codex":
    case "openai/gpt-5.1-codex-mini":
    case "openai/gpt-5.3-codex":
    case "openai/gpt-5.4":
    case "openai/gpt-5.5":
    case "openai/kindle-alpha":
    case "openai/mercury-alpha":
    case "openai/gpt-5.4-mini":
    case "openai/gpt-oss-120b":
    case "openai/gpt-oss-20b":
      return "openai";
    case "contour-1":
      return "framer";
    default:
      h(e, "Model must have a provider specified.");
  }
}
var fe = /[.!?…]+$/u;
function N(e) {
  return e.replace(fe, "");
}
var R = 1e3 * 1024,
  he = 150,
  E = he * R;
function Te(e) {
  return e * R;
}
async function an({
  endpoint: e,
  fieldName: n,
  file: a,
  icon: o,
  onToast: s,
  customMaxSize: g,
  onExceedsCustomMaxSize: P,
  getErrorMessage: d,
}) {
  let i = `upload${Math.random()}`,
    u = g ? Te(g) : E;
  if (a.size > u) {
    if (u < E && P) P(a.size);
    else {
      let m = new Intl.NumberFormat("en", { style: "unit", unit: "megabyte" }).format(g ?? E / R);
      s({
        type: "add",
        key: i,
        variant: "error",
        primaryText: "File exceeds",
        secondaryText: `limit of ${m}.`,
        duration: 1e4,
        icon: "error",
        moveToTop: !0,
      });
    }
    return null;
  }
  let f = 0,
    x = !1,
    G = !1,
    y = 95,
    B = 100 / y;
  try {
    let m = await j(e, { [n]: a }, (L) => {
      if (G) return;
      let C = Math.round(L * y);
      if (C === f) return;
      f = C;
      let w = Math.round(f * B * 0.95);
      (!x && w >= 90) ||
        ((x = !0),
        s({
          type: "add",
          key: i,
          variant: "progress",
          icon: o,
          text: `Uploading ${a.name}\u2026 ${w}%`,
          duration: 1 / 0,
          showCloseButton: "never",
        }));
    });
    return (
      (G = !0),
      s({
        type: "add",
        key: i,
        variant: "success",
        primaryText: a.name,
        secondaryText: "has been uploaded.",
        duration: 1e4,
        icon: "success",
        moveToTop: !0,
      }),
      m
    );
  } catch (m) {
    G = !0;
    let L = m instanceof Error ? (d?.(m) ?? m.message) : String(m),
      C = N(L.trim()),
      w = C ? `${C}.` : "Please try again.";
    return (
      s({
        type: "add",
        key: i,
        variant: "error",
        primaryText: "Upload error.",
        secondaryText: w,
        duration: 3e4,
        icon: "error",
        moveToTop: !0,
      }),
      null
    );
  }
}
export {
  Q as a,
  xe as b,
  Le as c,
  Oe as d,
  Fe as e,
  be as f,
  Ie as g,
  Ke as h,
  ee as i,
  ke as j,
  Ve as k,
  De as l,
  se as m,
  je as n,
  Qe as o,
  oe as p,
  $e as q,
  He as r,
  ze as s,
  re as t,
  Ne as u,
  We as v,
  Ye as w,
  ce as x,
  ue as y,
  A as z,
  de as A,
  me as B,
  pe as C,
  Xe as D,
  qe as E,
  N as F,
  R as G,
  he as H,
  an as I,
};
//# sourceMappingURL=chunk-Q4DBFMRT.mjs.map
