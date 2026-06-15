import { aa as Y } from "chunk-424ANBSC.mjs";
import { U as J, ab as X, yd as K } from "chunk-KIWT3OS5.mjs";
import { a as N } from "chunk-Z4IZU2LA.mjs";
import { e as Q } from "chunk-QNKC3NEE.mjs";
import { $n as G, Tg as q, go as H } from "chunk-UVMW6WIE.mjs";
import { c as v, d as b } from "chunk-TW4P4OFD.mjs";
import { a as O, b as m } from "chunk-HURK7HZB.mjs";
import { Ps as V, rn as P, tt as A } from "chunk-C45BQYIA.mjs";
import { a as S } from "chunk-KSPVA2M3.mjs";
import { a as I, c as E, o as y } from "chunk-RJAQ7ZXH.mjs";
import { i as C, j as p } from "chunk-WKFLJETF.mjs";
import { X as R, Ya as z, da as $, ia as B, k as j } from "chunk-3GX5YKYT.mjs";
import { a as l } from "chunk-6PNPO5DW.mjs";
import { a as k } from "chunk-HMF7T2NG.mjs";
import { j as c } from "chunk-XELMBOBL.mjs";
var fe = $({
  canvas: () => {
    let i = ie();
    return (b(i), v(i));
  },
  onPageCanvas: () => {
    let i = se();
    b(i);
    let { url: e, isCrossOriginProtected: t } = v(i),
      n = ue(e);
    return { url: n, origin: new URL(n).origin, isCrossOriginProtected: t };
  },
  patch: () => {
    let i = oe();
    return (b(i), v(i));
  },
});
function ie() {
  let i = p.isDebugBuild ? "canvas-sandbox.debug.html" : "canvas-sandbox.html",
    e = S(`./${i}`),
    t = p.debugPerformance ? `?${C}` : "",
    n = JSON.stringify(k());
  return e + t + `#services=${encodeURIComponent(n)}`;
}
function se() {
  let i = p.isDebugBuild ? "canvas-sandbox-on-page.debug.html" : "canvas-sandbox-on-page.html",
    e = S(`./${i}`),
    t = p.debugPerformance ? `?${C}` : "",
    n = JSON.stringify(k());
  return e + t + `#services=${encodeURIComponent(n)}`;
}
function oe() {
  let i = p.isDebugBuild ? "patch-sandbox.debug.html" : "patch-sandbox.html",
    e = S(`./${i}`),
    t = p.debugPerformance ? `?${C}` : "",
    n = JSON.stringify(k());
  return e + t + `#services=${encodeURIComponent(n)}`;
}
var ae = 63;
function ue(i) {
  let e = new URL(i);
  if (
    e.hostname === "localhost" ||
    e.hostname === "127.0.0.1" ||
    e.hostname.split(".").length - 2 >= 2
  )
    return i;
  let n = new URLSearchParams(window.location.search).get("framerSiteId");
  l(n, "onPageCanvas must be loaded with a framerSiteId");
  let s = `site-${n}`.slice(0, ae);
  return ((e.hostname = `${s}.${e.hostname}`), e.toString());
}
var de = 3,
  a = B("PartialTreeSender"),
  D = j();
function Z() {
  return new Promise((i, e) => {
    if (typeof MessageChannel < "u") {
      let t = new MessageChannel();
      ((t.port1.onmessage = () => i()),
        (t.port1.onmessageerror = () => e()),
        t.port2.postMessage(null));
    } else setTimeout(i, 0);
  });
}
var W = class {
  constructor(e, t, n) {
    this.timeline = e;
    c(this, "name");
    c(this, "currentScopeId", "");
    c(this, "timelineCursor");
    c(this, "scopeBufferMap", new Map());
    c(this, "chunkQueue", []);
    c(this, "chunkIndex", 0);
    c(this, "chunkingConfig");
    c(this, "drainingPromise");
    ((this.name = t + "-" + String(Math.round(Math.random() * 1e3))),
      (this.chunkingConfig = { maxNodesPerChunk: n?.maxNodesPerChunk ?? 1e3 }));
  }
  get crdtStore() {
    if (Y(this.timeline)) return this.timeline.store;
  }
  getScopeAsValue(e, t) {
    let n = e.get(t);
    if (n) return this.scopeAsValue(n, e.root.id);
  }
  scopeAsValue(e, t) {
    (l(e.parentid === t, "Scope must be a direct child of the root"),
      q(e) && l(e.isLoaded(), "Scope must be loaded"));
    let n = e.cache.getSerializedCache(e);
    if (n) return n;
    let s = this.crdtStore,
      r = e.cache.serialized?.hadError;
    if (s && !r) {
      let o = s.getObject(e.id);
      if (o) return o;
    }
    return J.valueFromNode(e);
  }
  shouldUseChunking(e, t) {
    if (this.timelineCursor) return !1;
    let n = e.chunkingHints;
    if (!n || n.size === 0) return !1;
    let s = T();
    t && s.add(t);
    for (let r of s)
      if (n.has(r)) return (a.debug(this.name, `chunking required - large page hint: ${r}`), !0);
    return !1;
  }
  serializeTreeChunks(e, t) {
    let n = [],
      s = crypto.randomUUID(),
      r = new Map(),
      o = new Map(),
      d = 0,
      u = T();
    t && u.add(t);
    let f = () => {
        r.size > 0 &&
          (n.push({
            name: this.name,
            timestamp: Date.now(),
            treeChunks: {
              chunkId: s,
              chunkIndex: n.length,
              totalChunks: -1,
              nodes: r,
              childrenMap: o,
              rootId: n.length === 0 ? e.root.id : void 0,
            },
          }),
          (r = new Map()),
          (o = new Map()));
      },
      w = (h) => {
        let U = h.children ?? D;
        (r.set(h.id, { ...h, children: D }),
          o.set(
            h.id,
            U.map((x) => x.id)
          ),
          d++,
          r.size >= this.chunkingConfig.maxNodesPerChunk && f());
        for (let x of U) w(x);
      },
      L = e.root,
      g,
      _ = {};
    for (g in L) P[g] || (_[g] = L[g]);
    let F = e.getNodes(u),
      ne = { ..._, __class: "RootNode", id: e.root.id, children: D };
    (r.set(e.root.id, ne),
      o.set(
        e.root.id,
        F.map((h) => h.id)
      ),
      d++,
      r.size >= this.chunkingConfig.maxNodesPerChunk && f());
    for (let h of F) w(this.scopeAsValue(h, e.root.id));
    f();
    let re = n.length;
    for (let h of n) h.treeChunks.totalChunks = re;
    return (
      a.debug(this.name, `directly chunked tree into ${n.length} chunks with ${d} total nodes`),
      n
    );
  }
  getNextChunk() {
    if (this.chunkQueue.length === 0) return;
    let e = this.chunkQueue[this.chunkIndex];
    return (
      this.chunkIndex++,
      this.chunkIndex >= this.chunkQueue.length && ((this.chunkQueue = []), (this.chunkIndex = 0)),
      e
    );
  }
  hasMoreChunks() {
    return (
      l(this.chunkIndex >= 0, "Chunk index should not be negative"),
      l(this.chunkIndex <= this.chunkQueue.length, "Chunk index should not exceed queue length"),
      this.chunkIndex < this.chunkQueue.length
    );
  }
  async *drainChunks(e) {
    if (!this.hasMoreChunks()) return;
    let t = this.drainingPromise;
    ((this.drainingPromise = new z()),
      t &&
        (a.debug(this.name, "drainChunks already in progress, waiting for it to finish"), await t),
      a.debug(this.name, "drainChunks started"));
    let n = 0,
      s = performance.now();
    try {
      for (; this.hasMoreChunks(); ) {
        if (e?.aborted) {
          (a.debug(this.name, "drainChunks aborted, clearing chunk queue"),
            (this.chunkQueue = []),
            (this.chunkIndex = 0));
          return;
        }
        let r = this.getNextChunk();
        (r &&
          (n++,
          a.debug(
            this.name,
            `sending chunk ${r.treeChunks.chunkIndex + 1} of ${r.treeChunks.totalChunks}`
          ),
          yield r),
          await Z());
      }
    } finally {
      (await Z(), (this.timelineCursor = this.timeline.getChangeTrackingCursor()));
      let r = performance.now() - s,
        o = r > 1e3 ? `${(r / 1e3).toFixed(2)}s` : `${Math.round(r)}ms`;
      (a.debug(this.name, `completed sending ${n} chunks in ${o}`),
        a.debug(this.name, "drainChunks completed"),
        this.drainingPromise?.resolve(),
        (this.drainingPromise = void 0));
    }
  }
  resetScopeBuffer(e) {
    (this.scopeBufferMap.clear(),
      (this.currentScopeId = e ?? ""),
      e && ((this.timelineCursor = void 0), this.scopeBufferMap.set(e, performance.now())));
  }
  updateScopeBuffer(e) {
    if (this.currentScopeId === e) return [void 0, void 0];
    if (e === A) return [void 0, void 0];
    if (((this.currentScopeId = e), this.scopeBufferMap.has(this.currentScopeId)))
      return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [void 0, void 0]);
    let t;
    if (this.scopeBufferMap.size >= de) {
      let n = T(),
        s = 1 / 0,
        r;
      for (let [o, d] of this.scopeBufferMap) n.has(o) || (s > d && ((s = d), (r = o)));
      r && (this.scopeBufferMap.delete(r), (t = r));
    }
    return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [t, e]);
  }
  reset(e) {
    let t = this.timeline.tree;
    if ((this.resetScopeBuffer(e), this.shouldUseChunking(t, e)))
      return (
        (this.chunkQueue = this.serializeTreeChunks(t, e)),
        (this.chunkIndex = 0),
        a.debug(this.name, "initiated direct chunked transfer for tree"),
        null
      );
    let n = this.serializeTree(t, e);
    return ((this.chunkQueue = []), (this.chunkIndex = 0), n);
  }
  update(e) {
    if (!e) return {};
    if (this.hasMoreChunks()) return {};
    let t = this.timeline.tree,
      n = this.timeline.fetchForwardChanges(this.timelineCursor);
    if (!n) {
      if (this.timeline.invalidatedByLoadCompletedDocument(this.timelineCursor))
        return (
          a.debug(
            this.name,
            "cursor invalidated, sending empty update for load completed document"
          ),
          (this.timelineCursor = this.timeline.getChangeTrackingCursor()),
          {}
        );
      if ((this.resetScopeBuffer(e), this.shouldUseChunking(t, e))) {
        ((this.chunkQueue = this.serializeTreeChunks(t, e)), (this.chunkIndex = 0));
        let u = this.getNextChunk();
        if (u)
          return (
            a.debug(
              this.name,
              `starting direct chunked resend with ${this.chunkQueue.length} chunks`
            ),
            u
          );
      }
      let d = this.serializeTree(t, e);
      return (
        a.debug(this.name, "cursor invalidated, sending tree with scope:", e),
        (this.timelineCursor = this.timeline.getChangeTrackingCursor()),
        { name: this.name, tree: d, timestamp: Date.now() }
      );
    }
    let [s, r] = this.updateScopeBuffer(e);
    (s && (a.debug(this.name, "deleting scope by diff:", s), ee(s, n)),
      n.length === 0 && (n = void 0));
    let o;
    if (
      (r && (a.debug(this.name, "adding scope by subtree:", r), (o = this.getScopeAsValue(t, r))),
      n)
    ) {
      let d = this.getAffectedScopeIDsAfterCrossScopeMove(t, n);
      for (let u of d) {
        if (u !== this.currentScopeId) {
          this.scopeBufferMap.has(u) &&
            (a.debug(this.name, "deleting scope due to cross-scope move:", u),
            ee(u, n),
            this.scopeBufferMap.delete(u));
          continue;
        }
        o ||
          (a.debug(this.name, "resending tree with scope due to cross-scope move:", u),
          (o = this.getScopeAsValue(t, u)));
      }
    }
    return { changes: n, scopes: o ? [o] : void 0, timestamp: Date.now() };
  }
  serializeTree(e, t) {
    let n = T();
    t && n.add(t);
    let s = [];
    for (let u of n) {
      let f = this.getScopeAsValue(e, u);
      f && s.push(f);
    }
    let r = e.root,
      o,
      d = {};
    for (o in r) P[o] || (d[o] = r[o]);
    return { version: Q, root: { ...d, __class: "RootNode", id: e.root.id, children: s } };
  }
  getAffectedScopeIDsAfterCrossScopeMove(e, t) {
    let n = new Set();
    for (let s of t) {
      if (!s.previousScope || !s.to.parentid) continue;
      let r = e.get(s.id),
        o = e.getScopeNodeFor(r);
      o && n.add(o.id);
    }
    return n;
  }
};
function ee(i, e) {
  e.push({ id: i, removed: "CanvasNode", to: {} });
}
function T() {
  return new Set([K, X, V, H, G, A]);
}
var M = class {
    constructor(e) {
      this.callbacks = e;
      c(this, "experimentListeners", new Map());
      c(this, "employeesOnlySettingsListeners", new Map());
      c(this, "projectFeaturesListeners", new Map());
    }
    startUpdatesStream() {
      (Object.keys(E).forEach((e) => {
        let t = (n) => {
          this.callbacks.updateExperiments({ [e]: n });
        };
        (y.addListener(e, t), this.experimentListeners.set(e, t));
      }),
        Object.keys(I).forEach((e) => {
          let t = (n) => {
            this.callbacks.updateEmployeesOnlySettings({ [e]: n });
          };
          (N.addListener(e, t), this.employeesOnlySettingsListeners.set(e, t));
        }));
    }
    getInitialExperiments() {
      let e = {};
      return (
        Object.keys(E).forEach((t) => {
          e[t] = y.get(t);
        }),
        e
      );
    }
    getInitialEmployeesOnlySettings() {
      let e = {};
      return (
        Object.keys(I).forEach((t) => {
          e[t] = N.get(t);
        }),
        e
      );
    }
    initProjectFeatures() {
      m.updated
        .then(() => {
          let e = {};
          (Object.keys(O).forEach((t) => {
            e[t] = m.get(t);
          }),
            this.callbacks.updateProjectFeatures(e),
            this.projectFeaturesListeners.size === 0 &&
              Object.keys(O).forEach((t) => {
                let n = (s) => {
                  this.callbacks.updateProjectFeatures({ [t]: s });
                };
                (m.addListener(t, n), this.projectFeaturesListeners.set(t, n));
              }));
        })
        .catch(R);
    }
    stopUpdatesStream() {
      for (let [e, t] of this.experimentListeners) y.removeListener(e, t);
      for (let [e, t] of this.employeesOnlySettingsListeners) N.removeListener(e, t);
      for (let [e, t] of this.projectFeaturesListeners) m.removeListener(e, t);
      (this.experimentListeners.clear(),
        this.employeesOnlySettingsListeners.clear(),
        this.projectFeaturesListeners.clear());
    }
  },
  te = class {
    constructor(e, t) {
      this.remoteFlags = e;
      let n = new M(this.remoteFlags);
      (n.startUpdatesStream(),
        this.remoteFlags.updateExperiments(n.getInitialExperiments()),
        this.remoteFlags.updateEmployeesOnlySettings(n.getInitialEmployeesOnlySettings()),
        t?.addEventListener("abort", () => n.stopUpdatesStream(), { once: !0 }));
    }
  };
export { fe as a, ae as b, M as c, te as d, W as e };
//# sourceMappingURL=chunk-PJ7BQG6L.mjs.map
