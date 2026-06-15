import { Kf as me, Ta as ce, eh as pe, gi as N } from "chunk-KIWT3OS5.mjs";
import { a as se, b as de, d as le, e as B } from "chunk-QNKC3NEE.mjs";
import { Tg as ue, jo as fe, nd as ae } from "chunk-UVMW6WIE.mjs";
import { a as V } from "chunk-ZWBHDWJC.mjs";
import {
  Ad as E,
  Fk as F,
  Jd as Y,
  Pd as Z,
  Qc as q,
  Qd as j,
  Rc as L,
  Sc as G,
  Vc as x,
  Wd as ee,
  Xc as D,
  ge as oe,
  hn as re,
  je as ne,
  md as J,
  me as te,
  pd as Q,
  td as M,
  x as Re,
  zd as X,
} from "chunk-C45BQYIA.mjs";
import { i as $, k as ie } from "chunk-A4TNDN6S.mjs";
import { b as v, e as H, f as y, h as C } from "chunk-DYNCKUFC.mjs";
import { j as b } from "chunk-WKFLJETF.mjs";
import { $ as z } from "chunk-3GX5YKYT.mjs";
import { a as T } from "chunk-6PNPO5DW.mjs";
import { e as Le, j as p } from "chunk-XELMBOBL.mjs";
function ge(e) {
  b.isApiPlugin && performance.mark(`framer-loading-${e}`);
}
var A = Le(Re(), 1);
function Pe() {
  return typeof window > "u" || !window["__perf-start-time"]
    ? performance.now()
    : window["__perf-start-time"];
}
var Te = Pe(),
  he = () => performance.now() - Te,
  _e = {
    init: "Init",
    dataLoad: "Data Load",
    documentBytesReady: "Document Bytes Ready",
    buildStore: "Build Store",
    addedRows: "Added Rows",
    wsConnection: "WS Connection",
    wsTreeInitMessages: "WS Tree Init",
    parsingInit: "Parsing Init",
    parsingRootNode: "Parsing Root Node",
    parsingReplicasExpansion: "Parsing Replicas",
    parsingFirstPage: "Parsing First Page",
    parsingResume: "Parsing Resume",
    sandboxLoad: "Canvas Sandbox",
    sandboxReady: "Canvas Resources",
    sandboxServicesReady: "Sandbox Services",
    sandboxCanvasFirstRender: "Canvas First Render",
    sandboxFramerDefaultModulesLoad: "Framer Default Modules",
    sandboxFirstModulesLoad: "First Modules Load",
    fontsLoad: "Web Fonts",
    modulesLoad: "Modules",
    modulesStorageStart: "Modules Storage Start",
    modulesStorageInit: "Modules Storage Init",
    modulesStorageFirstPublish: "Modules Storage First Publish",
    sandboxModulesListReceived: "Sandbox Modules List Received",
    sandboxFirstBatchEvaluated: "Sandbox First Batch Evaluated",
    sandboxEvaluateModulesEnd: "Sandbox Evaluate Modules End",
    sandboxExternalModulesIdle: "Sandbox External Modules Idle",
    sandboxRenderingPhaseNormal: "Sandbox Rendering Phase Normal",
    sandboxTrackerIdle: "Sandbox Tracker Idle",
    sandboxScopeLoadingDebounceEnter: "Sandbox Scope Loading Debounce Enter",
    editorIsLoadingModulesIdle: "Editor isLoadingModules = false",
    showUI: "UI Shown",
  },
  K = class {
    constructor() {
      p(this, "marks", {});
      p(this, "dynamicMarks", []);
      p(this, "isComplete", !1);
    }
    handlePerformanceMark(n, o) {
      if (n in this.marks) {
        b.isDebugBuild && console.warn("Performance mark already exists", n);
        return;
      }
      ((this.marks[n] = o), n === "showUI" && (this.isComplete = !0));
    }
    handleDynamicMark(n) {
      this.dynamicMarks.push(n);
    }
  },
  W = class extends A.default {
    constructor() {
      super();
      p(this, "marksStore", new K());
      p(this, "loadingInfoValue");
      p(this, "wsInitialUpdatesValue");
      p(this, "initialModuleLoadStatsValue");
      p(this, "ttfbValue");
      p(this, "ttfbResolved", !1);
      (this.on("performance:mark", this.marksStore.handlePerformanceMark.bind(this.marksStore)),
        this.on(
          "performance:dynamicMark",
          this.marksStore.handleDynamicMark.bind(this.marksStore)
        ));
    }
    currentMarks() {
      return { ...this.marksStore.marks };
    }
    currentDynamicMarks() {
      return [...this.marksStore.dynamicMarks];
    }
    isComplete() {
      return this.marksStore.isComplete;
    }
    setLoadingInfo(o) {
      ((this.loadingInfoValue = o), this.emit("loading:info", o));
    }
    getLoadingInfo() {
      return this.loadingInfoValue;
    }
    setWsInitialUpdates(o) {
      ((this.wsInitialUpdatesValue = o), this.emit("ws:init", o));
    }
    setInitialModuleLoadStats(o) {
      this.initialModuleLoadStatsValue = o;
    }
    getInitialModuleLoadStats() {
      return this.initialModuleLoadStatsValue;
    }
    getTtfb() {
      if (this.ttfbResolved) return this.ttfbValue;
      this.ttfbResolved = !0;
      let o = performance.getEntriesByType("navigation")[0];
      return (
        o instanceof PerformanceNavigationTiming &&
          (this.ttfbValue = Math.round(o.responseStart - o.startTime)),
        this.ttfbValue
      );
    }
  },
  ve = b.isTest || b.isAutomation || b.isE2E,
  S = ve ? null : new W();
function w() {
  return ve
    ? !1
    : !S && b.isDebugBuild
      ? (console.error("PerformanceEmitter not initialized"), !1)
      : !0;
}
var R = 0;
function ze(e, n = he()) {
  if ((ge(e), !w())) return;
  let o = performance.now(),
    t = S?.isComplete() ? "post-loading" : "loading";
  (V(e, R, o, t), (R = o), S?.emit("performance:mark", e, n));
}
function He(e, n, o = he()) {
  if (!w()) return;
  let t = performance.now();
  (V(e, R, t, "post-loading"),
    (R = t),
    S?.emit("performance:dynamicMark", { name: e, label: n, value: o }));
}
function qe(e) {
  w() && S?.setLoadingInfo(e);
}
function Ge(e) {
  w() && S?.setWsInitialUpdates(e);
}
function Je(e) {
  w() && S?.setInitialModuleLoadStats(e);
}
function be(e, n) {
  let o = !1;
  function t(a, f, s) {
    if (!a) return;
    let d = a.id;
    if (s.has(d)) {
      ((o = !0), n && n.push({ id: d, stack: f.slice() }));
      return;
    }
    if ((s.add(d), f.push(d), M(a))) {
      let l = a.getRawControlProps(),
        m = Object.keys(l);
      for (let g of m) {
        let c = l[g];
        if (c) {
          if (c.type === "slot" && C(c.value))
            for (let h of c.value) {
              if (!y(h)) continue;
              let k = h["reference"];
              if (!v(k)) continue;
              let ke = e.get(k);
              t(ke, f, s);
            }
          else if (c.type === "componentinstance" && v(c.value)) {
            let h = e.get(c.value);
            t(h, f, s);
          } else if (C(c.value))
            for (let h of c.value) {
              if (!y(h) || h.type !== "componentinstance") continue;
              let I = h.value;
              if (!v(I)) continue;
              let k = e.get(I);
              t(k, f, s);
            }
        }
      }
    }
    let u = a.children;
    if (u) for (let l of u) t(l, f, s);
    (s.delete(d), f.pop());
  }
  let r = new Set(),
    i = [];
  return (t(e.root, i, r), o);
}
var U = class extends Error {
    constructor(n, o) {
      super(`Document version is too low. Expected ${o}, got ${n}.`);
    }
  },
  O = class extends Error {
    constructor(n, o) {
      super(`Document version is too high. Expected ${o}, got ${n}.`);
    }
  };
function ye(e) {
  if (!de(e) || e === null) throw Error("Invalid document.");
  if (!H(e.version)) throw Error("Unable to read document.version");
  if (!e.root) throw Error("Unable to read document.root");
  if (e.version < N.minimumLegacySerializationVersion)
    throw new U(e.version, N.minimumLegacySerializationVersion);
  if (e.version > B) throw new O(e.version, B);
}
function No(e, n, o) {
  ye(e);
  let t = le(e),
    r = pe(t.root, null, { extraChecksAndFixes: !0, errors: o, warnings: o });
  if (!r) throw Error("Unable to create load document");
  Ce(r, o);
  let i = new Map();
  (P(i, o, r, $), Se(i, r, o));
  let a = N.createByAdoptingRoot(r);
  (a.verify(), (a = ae.treeDidLoad(a, n, o).didNonLinearMove(n)));
  let f = [];
  return (
    be(a, f) &&
      (f.forEach((s) => {
        (o.push(`${s.id}: code component links itself via ${s.stack}`), Fe(a, s.id, s.stack));
      }),
      (a = a.commit(n))),
    a
  );
}
function wo(e, n) {
  Ce(e, n);
  let o = new Map();
  (P(o, n, e, $), Se(o, e, n));
}
function ko(e, n) {
  let o = new Map();
  (P(o, n, e, e.parentid), $e(o, e, n));
}
function Ee(e) {
  return Q(e) || J(e);
}
function Ce(e, n = []) {
  let o = e.children,
    t = o.find(Ee);
  t === void 0 &&
    (n.push(`${e.id}: Root does not contain a page`), (t = new ce({ id: se(e) })), o.push(t));
  for (let r = 0; r < o.length; r++) {
    let i = o.at(r);
    if (
      i &&
      !ue(i) &&
      !G(i) &&
      !te(i) &&
      !fe(i) &&
      !ee(i) &&
      !Y(i) &&
      !Z(i) &&
      !oe(i) &&
      !ne(i) &&
      !j(i) &&
      !E(i)
    ) {
      if (X(i)) {
        (n.push(`${i.id}: BranchNode is not under BranchesNode`), o.splice(r--, 1));
        let a = e.children.find(E);
        (a || ((a = new me()), e.children.push(a)), a.children.push(i), (i.parentid = a.id));
        continue;
      }
      (n.push(`${i.id}: Ground node is not on a page`),
        o.splice(r--, 1),
        t.children.push(i),
        (i.parentid = t.id));
    }
  }
}
function Fe(e, n, o) {
  let t = e.get(o[o.length - 1]);
  if (!M(t)) return;
  let r = t.getRawControlProps(),
    i = {};
  for (let f in r) {
    let s = r[f];
    if (!s) continue;
    let { type: d, value: u } = s;
    if (d === "slot" && C(u)) {
      let l = u.filter((m) => (y(m) ? m["reference"] !== n : !0));
      l.length !== u.length && (i[f] = { type: "slot", value: l });
    } else if (d === "componentinstance" && u === n) i[f] = { type: "slot", value: [] };
    else if (C(u)) {
      let l = u.filter((m) => (!y(m) || m.type !== "componentinstance" ? !0 : m.value !== n));
      l.length !== u.length && (i[f] = { type: "array", value: l });
    }
  }
  if (z(i)) return;
  let a = re(i);
  t.set(a);
}
function P(e, n, o, t) {
  for (o.parentid = t; e.has(o.id); ) (n.push(`${o.id}: duplicate id in document`), (o.id = ie()));
  e.set(o.id, o);
  let r = o.children;
  if (r) for (let i of r) P(e, n, i, o.id);
}
function Se(e, n, o) {
  for (let t of n.walk())
    (T(t.isMutable()),
      M(t) && Ie(e, t.id, new Set([t.id]), t, o),
      L(t) && Me(e, t, t, o),
      x(t) && (xe(e, t, o), Ne(e, t, o)),
      D(t) && we(t, o));
}
function $e(e, n, o) {
  for (let t of n.walk()) (T(t.isMutable()), x(t) ? Ne(e, t, o) : D(t) && we(t, o));
}
function Ie(e, n, o, t, r) {
  function i(s) {
    if (!v(s)) return !1;
    if (o.has(s)) return (r.push(`${n}: code component links itself via ${t.id}`), !0);
    let d = e.get(s);
    if (!d) return (r.push(`${t.id}: code component has bad link at ${s}`), !0);
    let u = !1;
    for (let l of d.walk())
      o.has(l.id)
        ? (r.push(`${n}: code component links itself via ${t.id} via ${s}`), (u = !0))
        : M(l) && Ie(e, n, new Set([...o, l.id]), l, r);
    return u;
  }
  let a = t.getRawControlProps(),
    f = Object.keys(a);
  for (let s of f) {
    let d = a[s];
    if (!F(d)) continue;
    if (d.type === "slot" && C(d.value)) {
      let m = [];
      for (let g = 0; g < d.value.length; g++) {
        let c = d.value[g];
        if (!y(c)) continue;
        let I = c["reference"];
        v(I) && i(I) && m.push(g);
      }
      for (; m.length > 0; ) d.value.splice(m.pop(), 1);
      continue;
    }
    if (d.type === "componentinstance" && v(d.value)) {
      if (!i(d.value)) continue;
      d.value = void 0;
      continue;
    }
    let u = d.value;
    if (!Array.isArray(u)) continue;
    let l = [];
    for (let m = 0, g = u.length; m < g; m++) {
      let c = u[m];
      F(c) && c.type === "componentinstance" && v(c.value) && i(c.value) && l.push(m);
    }
    for (; l.length > 0; ) u.splice(l.pop(), 1);
  }
}
function _(e) {
  ((e.originalid = null), (e.replicaInfo = null));
}
function Me(e, n, o, t) {
  for (let r of o.walk())
    if (r !== o && q(r) && x(r)) {
      let i = xe(e, r, t);
      if (!i) continue;
      if (n === i) {
        (t.push(`${n.id}: template component links itself via ${o.id}`), _(r));
        continue;
      }
      Me(e, n, i, t);
    }
}
function xe(e, n, o) {
  let t = n.replicaInfo.master,
    r = e.get(t);
  return r
    ? L(r)
      ? (n.originalid !== t &&
          (o.push(`${n.id}: template originalid doesn't point to master id: ${n.originalid}`),
          (n.originalid = t)),
        r)
      : (o.push(`${n.id}: template references a node that is not a master: ${t}`), _(n), null)
    : (o.push(`${n.id}: template references a master that doesn't exist: ${t}`), _(n), null);
}
function Ne(e, n, o) {
  if (!n.replicaInfo) return;
  let t = n.replicaInfo.inheritsFrom;
  if (!t) return;
  let r = e.get(t);
  r
    ? !L(r) &&
      !x(r) &&
      (o.push(`${n.id}: template references an inherit that isn't a master or a replica: ${t}`),
      (n.replicaInfo.inheritsFrom = void 0))
    : (o.push(`${n.id}: template references an inherit that doesn't exist: ${t}`),
      (n.replicaInfo.inheritsFrom = void 0));
}
function we(e, n) {
  e.originalid &&
    ((e.originalid = null), n.push(`${e.id}: removing original id from orphan replica child`));
}
export {
  A as a,
  Te as b,
  _e as c,
  S as d,
  ze as e,
  He as f,
  qe as g,
  Ge as h,
  Je as i,
  be as j,
  No as k,
  wo as l,
  ko as m,
  Fe as n,
};
//# sourceMappingURL=chunk-43FBLJGU.mjs.map
