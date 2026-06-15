import { Bh as A, Gh as we, xh as N, yh as ye } from "chunk-CLNV2WTB.mjs";
import { a as pe } from "chunk-C4RI6J7Q.mjs";
import {
  a as he,
  b as le,
  d as U,
  e as g,
  g as I,
  j as _,
  k as ue,
  l as W,
  m as k,
  n as H,
} from "chunk-43FBLJGU.mjs";
import { a as q, b as fe, c as me, d as ge } from "chunk-D42U7RS4.mjs";
import { a as Se } from "chunk-IAA62EI4.mjs";
import { Kh as ce, Mh as O, eh as L, gi as j } from "chunk-KIWT3OS5.mjs";
import { o as V, t as de } from "chunk-OKVDJHK4.mjs";
import { f as ne } from "chunk-WMNAJO4L.mjs";
import { a as w } from "chunk-YNCW2456.mjs";
import { nd as x } from "chunk-UVMW6WIE.mjs";
import { a as M } from "chunk-ZWBHDWJC.mjs";
import { Pr as ie, md as ae, od as se } from "chunk-C45BQYIA.mjs";
import { y as E } from "chunk-HSCVLSVX.mjs";
import { o as oe } from "chunk-RJAQ7ZXH.mjs";
import { e as re } from "chunk-DYNCKUFC.mjs";
import { j as te } from "chunk-WKFLJETF.mjs";
import { Ya as Z, _a as ee, ia as P } from "chunk-3GX5YKYT.mjs";
import { a as S } from "chunk-6PNPO5DW.mjs";
import { j as h } from "chunk-XELMBOBL.mjs";
var Ce = "last-active-branch:";
function ve(c) {
  return `${Ce}${c}`;
}
function Ne(c) {
  try {
    let i = localStorage.getItem(ve(c));
    return i && i !== w ? i : null;
  } catch {
    return null;
  }
}
function be(c, i) {
  try {
    let e = ve(c);
    i === w ? localStorage.removeItem(e) : localStorage.setItem(e, i);
  } catch {}
}
var Ie = P("DocumentLoader"),
  $ = P("remote:verify"),
  B = class c {
    constructor(i, e, t) {
      this.componentLoader = i;
      this.parser = e;
      this.settings = t;
      h(this, "canvasTreeVersion", 0);
      h(this, "chunkingHints");
      ((this.canvasTreeVersion = this.parser.version),
        (this.chunkingHints = this.parser.getChunkingHints()));
    }
    static async createPartialParser(i, e, t) {
      if (typeof i == "string") {
        let r = new me(i);
        return new c(e, r, t);
      } else {
        let r = new ge(i);
        return new c(e, r, t);
      }
    }
    readFirstPage() {
      let i = !1,
        e = [];
      if (
        (this.settings.activeNodeId &&
          (e.push(...this.parser.getPagesContainingId(this.settings.activeNodeId)),
          (i = e.some((t) => A(this.parser.getShallowPage(t))))),
        !i)
      ) {
        let t = this.parser.getShallowPages(),
          { maybeFirstPage: r } = N(t, this.parser.getHomePageNodeID());
        e.push(r.id);
        let o = 0,
          a;
        for (let n of t) {
          if ((ae(n, !0) && o++, o > 1)) break;
          se(n, !0) && (a ??= n.id);
        }
        o === 1 && a && a !== r.id && e.push(a);
      }
      return (
        Ie.debug("loadPartialDocument():", e),
        pe(this.parser, this.componentLoader, e, this.settings.treeServices)
      );
    }
    getScopesToLoad() {
      return this.parser.getPagesToLoad();
    }
    getParsedPageById(i) {
      return this.parser.getParsedPageById(i);
    }
    buildPage(i) {
      if (!i) return;
      let e = [],
        t = $.isLoggingTraceMessages() ? [] : void 0,
        r = L(i, this.parser.root.id, { extraChecksAndFixes: !0, errors: e, warnings: t });
      if (
        (r && k(r, e),
        e.length > 0 &&
          $.warn(
            "errors loading server tree: " +
              e.join(`
`)
          ),
        t &&
          t.length > 0 &&
          $.trace(
            "warnings loading server tree: " +
              t.join(`
`)
          ),
        !!r)
      )
        return r;
    }
  };
var J = P("app");
function He(c) {
  return c.treeReflectsDocument ? Re(c.tree) : null;
}
function Re(c) {
  return c.toJS();
}
function qe(c) {
  function i(e) {
    let { __class: t, width: r, height: o, top: a, bottom: n, left: s, right: d } = e,
      { children: f } = e;
    return f
      ? ((f = f.map(i)),
        { __class: t, width: r, height: o, top: a, bottom: n, left: s, right: d, children: f })
      : e.styledText
        ? {
            __class: t,
            width: r,
            height: o,
            top: a,
            bottom: n,
            left: s,
            right: d,
            text: e.styledText.blocks.map((l) => l.text),
          }
        : { __class: t, width: r, height: o, top: a, bottom: n, left: s, right: d };
  }
  return i(c.tree.toJS().root);
}
function $e(c, i) {
  let e,
    t = new XMLHttpRequest();
  t.open("GET", c.toString(), !1);
  try {
    (t.send(), (e = JSON.parse(t.responseText)));
  } catch (r) {
    J.error(`Retrieving document \u201C${c}\u201D failed. (${r})`);
  }
  return K(e, i);
}
function Pe(c) {
  te.isTest ||
    c.forEach((i) => {
      J.warn("[repaired]", i);
    });
}
function K(c, i) {
  let e = [];
  try {
    let t = ue(c, i, e);
    return (Pe(e), t);
  } catch (t) {
    throw (Pe(e), J.warn("tree failed to verify:", t), t);
  }
}
var p = P("DocumentLoader"),
  z = 10,
  R = 1e3;
function D(c) {
  return c < 1024 * 0.75
    ? `${Math.round(c)}b`
    : c < 1024 * 1024 * 0.75
      ? `${(c / 1024).toFixed(2)}kb`
      : `${(c / 1024 / 1024).toFixed(2)}Mb`;
}
function y(c) {
  return c < 200
    ? `${c.toFixed(1)}ms`
    : c < 20 * 1e3
      ? `${(c / 1e3).toFixed(3)}s`
      : `${Math.round(c / 1e3)}s`;
}
var F = class extends he.default {
  constructor(e, t, r, o) {
    super();
    this.componentLoader = e;
    this.treeVersion = t;
    this.documentURL = r;
    this.settings = o;
    h(this, "scheduler");
    h(this, "activelyLoadingScope", !1);
    h(this, "retryCount", 0);
    h(this, "scopesToLoad", new Set());
    h(this, "prioritizedScopeIds", new Set());
    h(this, "currentLoadingScope");
    h(this, "partialParser");
    h(this, "canvasTreeVersion", 0);
    h(this, "documentSize", 0);
    h(this, "loadedFirstScope", !1);
    h(this, "loadingDuration", 0);
    h(this, "parsingDuration", 0);
    h(this, "debugPaused", !1);
    h(this, "loadingScopesPaused", !1);
    h(this, "loadAllDataPriority", 0);
    h(this, "loadedAllData", !1);
    h(this, "updatePauseResumeState", () => {
      if (!this.loadedFirstScope) {
        (this.scheduler.fast(), this.scheduler.resume());
        return;
      }
      let e = this.loadAllDataPriority > 0 || this.prioritizedScopeIds.size > 0,
        t = this.loadingScopesPaused || this.debugPaused;
      (e ? this.scheduler.fast() : this.scheduler.slow(),
        e || !t || this.scopesToLoad.size <= 0 ? this.scheduler.resume() : this.scheduler.pause());
    });
    h(this, "tree");
    h(this, "loadCallbacksPerScope", new Map());
    h(this, "addedByDiff", new Set());
    h(this, "removedByDiff", new Set());
    ((this.scheduler = new we(o.requestIdleCallback)),
      p.debug("new:", this.treeVersion, this.documentURL));
  }
  pauseLoadingScopes() {
    this.loadingScopesPaused ||
      ((this.loadingScopesPaused = !0),
      p.debug("pauseLoadingScopes"),
      this.updatePauseResumeState());
  }
  resumeLoadingScopes() {
    this.loadingScopesPaused &&
      ((this.loadingScopesPaused = !1),
      p.debug("resumeLoadingScopes"),
      this.updatePauseResumeState());
  }
  prioritizeLoadingAllData(e) {
    let t = "preload" in e && e.preload;
    if (t && O()) return () => {};
    let r = performance.now(),
      o = this.numberOfScopesToLoad();
    ((this.loadAllDataPriority = Math.max(1, this.loadAllDataPriority + 1)),
      p.debug("prioritizeLoadingScopes:", this.loadAllDataPriority),
      this.updatePauseResumeState());
    let a = t || ("doNotTrack" in e && e.doNotTrack),
      n = !1,
      s = a
        ? void 0
        : this.afterAllDataLoaded(() => {
            if (n) return;
            S("operationName" in e, "operationName is required");
            let u = performance.now() - r;
            ne("fulltree_force_load", {
              operationName: e.operationName,
              durationMs: Math.round(u),
              background: e.operationInBackground,
              shallowScopesCount: o,
            });
          }),
      d = this.tree ? ie(this.tree) : void 0,
      l =
        oe.isOn("dataOnlyTree") && (d ? d === "crdt" : ce())
          ? this.afterAllDataLoaded(() => {
              if (n) return;
              S(!("preload" in e), "preload should never load all data");
              let v = {
                operationName: e.operationName,
                durationMs: Math.round(performance.now() - r),
                background: e.operationInBackground,
                shallowScopesCount: o,
              };
              p.reportError(new Error("Full tree loaded"), v, { operationName: e.operationName });
            })
          : void 0;
    return () => {
      n || ((n = !0), s?.(), l?.(), this.stopPrioritizingLoadingAllData());
    };
  }
  stopPrioritizingLoadingAllData() {
    ((this.loadAllDataPriority -= 1),
      p.debug("stopPrioritizingLoadingScopes:", this.loadAllDataPriority),
      this.updatePauseResumeState());
  }
  debugPause() {
    this.debugPaused ||
      ((this.debugPaused = !0), p.debug("debugPause"), this.updatePauseResumeState());
  }
  debugResume() {
    this.debugPaused &&
      ((this.debugPaused = !1), p.debug("debugResume"), this.updatePauseResumeState());
  }
  isDebugPaused() {
    return this.debugPaused;
  }
  afterAllDataLoaded(e) {
    if (e) {
      let t = !1,
        r = () => {
          queueMicrotask(() => {
            t || e();
          });
        };
      return this.loadedAllData
        ? (r(),
          () => {
            t = !0;
          })
        : (this.once("loadedAllData", r),
          () => {
            ((t = !0), this.off("loadedAllData", r));
          });
    }
    return this.loadedAllData
      ? Promise.resolve()
      : new Promise((t) => {
          let r = () => {
            queueMicrotask(t);
          };
          this.once("loadedAllData", r);
        });
  }
  async start() {
    await this.scheduler.run(async () => {
      (p.debug("start"), g("parsingInit"), this.updatePauseResumeState());
      let e = performance.now(),
        t = await this.loadData();
      ((this.loadingDuration = performance.now() - e), g("documentBytesReady"));
      let r = typeof t == "string" ? t.length : t.byteLength;
      if (
        (I({
          format: t instanceof Uint8Array ? "crdt" : "json",
          strategy: "full-load",
          sources: ["tree-download"],
          snapshotBytes: r,
          snapshotSource: "downloaded",
          cachedRows: 0,
          cachedRowBytes: 0,
          downloadedRows: 0,
          downloadedRowBytes: 0,
        }),
        await this.scheduler.yield(),
        !this.settings.partialParsing || (typeof t == "string" && !fe(t)))
      )
        return this.parseFullDocumentSync(t);
      let o = await this.loadDocumentVersion(t);
      (await this.scheduler.yield(),
        (this.tree = await this.loadFirstTree(o)),
        await this.loadAllScopesAsync());
    });
  }
  async loadAllScopesAsync() {
    ((this.loadedFirstScope = !0),
      this.updatePauseResumeState(),
      await this.scheduler.yield(),
      g("parsingResume"));
    let e;
    for (; (e = this.nextScopeIdToLoad()) !== void 0; )
      (await this.loadScopeAsync(e), this.updatePauseResumeState(), await this.scheduler.yield());
    (await this.emitWrapped(() => {
      (S(this.tree, "tree must have been set"),
        this.tree.setService("loader", void 0),
        (this.loadedAllData = !0),
        this.emit("loadedAllData"));
    }),
      p.debug(
        "done",
        D(this.documentSize),
        "loading:",
        y(this.loadingDuration),
        "parsing:",
        y(this.parsingDuration)
      ));
  }
  async loadData() {
    if (this.settings.loadedData) return this.settings.loadedData;
    p.debug("Document in cache is not up to date. Tree version:", this.treeVersion);
    let e = this.settings.initData,
      t = e?.version === this.treeVersion,
      r = e?.prefetchPromise;
    if ((e && delete e.prefetchPromise, t && r)) {
      p.debug("loadData: prefetch");
      let s = await r;
      if (
        (r
          .then((d) => d.duration)
          .then((d) => {
            g("dataLoad", d);
          })
          .catch(() => {}),
        await this.scheduler.yield(),
        s.buffer)
      ) {
        p.debug("loadData: prefetch bytes parser");
        let d = await s.buffer;
        return (
          await this.scheduler.yield(),
          s.status < 200 || s.status >= 300
            ? this.handleErrorAndRetry(s.status, "Error loading project data")
            : new Uint8Array(d)
        );
      }
      if (s.text) {
        let d = await s.text;
        return (
          await this.scheduler.yield(),
          s.status < 200 || s.status >= 300 ? this.handleErrorAndRetry(s.status, d) : d
        );
      }
    }
    p.debug("loadData: fetch");
    let o;
    this.settings.refreshAccessToken &&
      ((o = await this.settings.refreshAccessToken({})), await this.scheduler.yield());
    let a = await fetch(this.documentURL, o);
    await this.scheduler.yield();
    function n(s) {
      if (!s.body) return !1;
      let d = new URLSearchParams(window.location.search).has("bytes"),
        f = document.cookie.includes("bytes-parser=true"),
        l = parseInt(s.headers.get("Uncompressed-Content-Length") ?? "0", 10) > 2e8;
      return (d && (document.cookie = "bytes-parser=true; path=/;"), d || f || l);
    }
    if ((g("dataLoad"), a.status < 200 || a.status >= 300)) {
      let s = await a.text();
      return this.handleErrorAndRetry(a.status, s);
    }
    if (n(a)) {
      p.debug("loadData: using streaming parser");
      let s = await a.arrayBuffer();
      return new Uint8Array(s);
    } else {
      p.debug("loadData: using text parser");
      let s = await a.text();
      return (await this.scheduler.yield(), s);
    }
  }
  async handleErrorAndRetry(e, t) {
    let r = !1;
    try {
      r = JSON.parse(t).retry;
    } catch {}
    if (r && this.retryCount < z)
      return (
        p.debug("onErrorStatusLoaded, retry:", this.retryCount),
        await this.scheduler.sleep(this.retryCount * R + Math.random() * R),
        (this.retryCount += 1),
        this.loadData()
      );
    throw Error(r ? "Too many retries" : `Fetch Error: ${e} - ${t}`);
  }
  parseFullDocumentSync(e) {
    if (typeof e != "string")
      throw new Error("Full document sync parsing requires string data, not ReadableStream");
    let t = performance.now();
    this.documentSize = e.length;
    let r = JSON.parse(e);
    if (!re(r.version)) throw Error("cannot read document version");
    if (
      ((this.canvasTreeVersion = r.version),
      p.debug(
        "parseFullDocumentSync",
        this.canvasTreeVersion,
        D(this.documentSize),
        y(this.loadingDuration)
      ),
      this.emit("loadedDocumentVersion", r.version),
      this.scheduler.isDone())
    )
      return;
    let o = K(r, this.componentLoader);
    (this.emit("loadedFirstData", o),
      !this.scheduler.isDone() &&
        (this.emit("loadedAllData"),
        (this.parsingDuration += performance.now() - t),
        g("parsingFirstPage"),
        p.debug(
          "done",
          D(this.documentSize),
          "loading:",
          y(this.loadingDuration),
          "parsing:",
          y(this.parsingDuration)
        )));
  }
  hasLoadedScope(e) {
    let t = this.scopesToLoad.has(e),
      r = this.currentLoadingScope?.id === e;
    return !t && !r;
  }
  numberOfScopesToLoad() {
    return this.scopesToLoad.size + (this.currentLoadingScope ? 1 : 0);
  }
  prioritizeLoadingScope(e, t) {
    let r, o;
    if (typeof t == "function") this.addScopeLoadCallback(e, t);
    else if (t && "onLoaded" in t) (this.addScopeLoadCallback(e, t.onLoaded), (o = t));
    else {
      let a = new Z();
      ((r = a), this.addScopeLoadCallback(e, a.resolve), (o = t));
    }
    if (!(o?.preload && O()))
      return (
        this.scopesToLoad.has(e) &&
          (this.prioritizedScopeIds.add(e),
          this.updatePauseResumeState(),
          this.addScopeLoadCallback(e, this.updatePauseResumeState)),
        r
      );
  }
  nextScopeIdToLoad() {
    for (let t of this.prioritizedScopeIds)
      if ((this.prioritizedScopeIds.delete(t), !!this.scopesToLoad.has(t)))
        return (this.scopesToLoad.delete(t), this.scheduler.fast(), t);
    let e = this.loadAllDataPriority > 0;
    this.settings.loadInBackground && !e ? this.scheduler.slow() : this.scheduler.fast();
    for (let t of this.scopesToLoad) return (this.scopesToLoad.delete(t), t);
  }
  async loadDocumentVersion(e) {
    let t = performance.now(),
      r = await B.createPartialParser(e, this.componentLoader, this.settings);
    return (
      typeof e == "string" ? (this.documentSize = e.length) : (this.documentSize = 0),
      (this.canvasTreeVersion = r.canvasTreeVersion),
      (this.parsingDuration += performance.now() - t),
      p.debug(
        "loadDocumentVersion",
        this.canvasTreeVersion,
        typeof e == "string" ? D(this.documentSize) : "stream",
        y(this.loadingDuration)
      ),
      await this.emitWrapped(() => {
        if (this.scheduler.isDone()) return;
        let o = performance.now();
        (this.emit("loadedDocumentVersion", this.canvasTreeVersion),
          (this.parsingDuration += performance.now() - o));
      }),
      (this.partialParser = r),
      r
    );
  }
  async loadFirstTree(e) {
    let t = performance.now(),
      r = e.readFirstPage();
    this.scopesToLoad = e.getScopesToLoad();
    for (let o of this.scopesToLoad) {
      let a = r.get(o);
      a && (a.cache.isShallowLoad = !0);
    }
    return (
      (this.parsingDuration += performance.now() - t),
      p.debug("loadFirstTree", y(this.parsingDuration)),
      await this.emitWrapped(() => {
        if (this.scheduler.isDone()) return;
        let o = performance.now();
        (r.setService("loader", this),
          (r.chunkingHints = e.chunkingHints),
          this.emit("loadedFirstData", r),
          g("parsingFirstPage"),
          (this.parsingDuration += performance.now() - o));
      }),
      r
    );
  }
  async loadScopeAsync(e) {
    let t = performance.now();
    (S(!this.currentLoadingScope, "already have a currently loading scope"),
      (this.activelyLoadingScope = !0),
      (this.currentLoadingScope = this.createLoadingScope(e)));
    let r = await this.currentLoadingScope.run(this.scheduler);
    if (
      (p.debug(
        "loadScopeAsync:",
        e,
        y(r.duration),
        "scheduler mode:",
        this.scheduler.currentMode()
      ),
      !r.hasNode())
    ) {
      this.activelyLoadingScope = !1;
      return;
    }
    await this.emitWrapped(() => {
      if (((this.activelyLoadingScope = !1), this.scheduler.isDone())) return;
      let o = performance.now(),
        a = r.take();
      if (((this.currentLoadingScope = void 0), !a)) return;
      this.emit("loadedScope", a);
      let n = performance.now();
      ((this.parsingDuration += r.duration + n - o),
        this.signalScopeLoadCallbacks(a.id),
        M("loadScopeAsync", t, n, "vekter"));
    });
  }
  createLoadingScope(e) {
    return (
      S(this.partialParser, "loadScope before the parser is available"),
      new X(e, this.partialParser)
    );
  }
  loadScope(e) {
    let t = performance.now();
    if (this.currentLoadingScope?.id === e) {
      let a = this.currentLoadingScope.force();
      return ((this.parsingDuration += a.duration), (this.currentLoadingScope = void 0), a.take());
    }
    if ((this.prioritizedScopeIds.delete(e), !this.scopesToLoad.has(e))) return;
    this.scopesToLoad.delete(e);
    let r = this.createLoadingScope(e).force(),
      o = performance.now();
    return (
      (this.parsingDuration += r.duration + o - t),
      p.debug("loadScope:", e, y(r.duration)),
      this.signalScopeLoadCallbacks(e),
      M("loadScope", t, o, "vekter"),
      r.take()
    );
  }
  addScopeLoadCallback(e, t) {
    if (!t) return;
    if (this.hasLoadedScope(e)) {
      setTimeout(t);
      return;
    }
    let r = this.loadCallbacksPerScope.get(e) ?? [];
    (r.push(t), this.loadCallbacksPerScope.set(e, r));
  }
  signalScopeLoadCallbacks(e) {
    setTimeout(() => {
      let t = this.loadCallbacksPerScope.get(e);
      if (t) {
        for (let r of t) r();
        this.loadCallbacksPerScope.delete(e);
      }
    });
  }
  async emitWrapped(e) {
    this.settings.asyncEventWrapper
      ? (await this.scheduler.yield(), await this.settings.asyncEventWrapper(e))
      : (await this.scheduler.yield(), e());
  }
  resetTreeForRecovery(e) {
    e.setService("loader", this);
    for (let t of this.scopesToLoad) {
      let r = e.get(t);
      r && (r.cache.isShallowLoad = !0);
    }
    this.tree = e;
  }
  async nodeIdsToLoad() {
    let e = performance.now(),
      t = new Set();
    if (!this.partialParser) return t;
    let r = performance.now();
    for (let o of this.scopesToLoad) {
      performance.now() - r > 50 && (await ee(), (r = performance.now()));
      let a = this.partialParser.getParsedPageById(o);
      Le(t, a);
    }
    for (let o of this.addedByDiff) t.add(o);
    for (let o of this.removedByDiff) t.delete(o);
    return (p.debug("nodeIdsToLoad", t.size, y(performance.now() - e)), t);
  }
  addNodeChanges(e) {
    for (let t of e) {
      let r = t.id;
      t.added
        ? (this.addedByDiff.add(r), this.removedByDiff.delete(r))
        : t.removed && (this.addedByDiff.delete(r), this.removedByDiff.add(r));
    }
  }
};
function Le(c, i) {
  if (i && (c.add(i.id), !!i.children)) for (let e of i.children) Le(c, e);
}
var T = class {
    constructor(i, e) {
      this.node = i;
      this.duration = e;
    }
    hasNode() {
      return !!this.node;
    }
    take() {
      let i = this.node;
      return ((this.node = void 0), i);
    }
  },
  X = class {
    constructor(i, e) {
      this.id = i;
      this.parser = e;
      h(this, "data");
      h(this, "loadedScope");
    }
    async run(i) {
      if (this.loadedScope) return this.loadedScope;
      let e = performance.now();
      this.data = this.parser.getParsedPageById(this.id);
      let t = performance.now() - e;
      if ((await i.yield(), this.loadedScope)) return this.loadedScope;
      let r = performance.now(),
        o = this.parser.buildPage(this.data);
      return (
        o && (o.cache.isShallowLoad = !1),
        (this.loadedScope = new T(o, t + performance.now() - r)),
        this.loadedScope
      );
    }
    force() {
      if (this.loadedScope) return this.loadedScope;
      let i = performance.now();
      this.data || (this.data = this.parser.getParsedPageById(this.id));
      let e = this.parser.buildPage(this.data);
      return (
        e && (e.cache.isShallowLoad = !1),
        (this.loadedScope = new T(e, performance.now() - i)),
        this.loadedScope
      );
    }
  };
var Y = class {
    constructor(i, e, t) {
      this.id = i;
      this.store = e;
      this.trackSerializedCache = t;
      h(this, "loadedScope");
    }
    loadScopeDataFromStore() {
      let i = this.store.getObject(this.id);
      if (!i) {
        m.debug("No object with id " + this.id + " in the store");
        return;
      }
      return i;
    }
    createNodeFromData(i) {
      let e = this.buildPage(i);
      if (e)
        return (
          (e.cache.isShallowLoad = !1),
          e.cache.setSerializedCache(e, i),
          this.trackSerializedCache(e),
          e
        );
    }
    async run(i) {
      if (this.loadedScope) return this.loadedScope;
      let e = performance.now(),
        t = this.loadScopeDataFromStore(),
        r = performance.now() - e;
      if ((await i.yield(), this.loadedScope)) return this.loadedScope;
      let o = performance.now(),
        a = this.createNodeFromData(t),
        n = performance.now() - o;
      return ((this.loadedScope = new T(a, r + n)), this.loadedScope);
    }
    force() {
      if (this.loadedScope) return this.loadedScope;
      let i = performance.now(),
        e = this.loadScopeDataFromStore(),
        t = this.createNodeFromData(e),
        r = performance.now() - i;
      return ((this.loadedScope = new T(t, r)), this.loadedScope);
    }
    buildPage(i) {
      if (!i) return;
      let e = [],
        t = m.isLoggingTraceMessages() ? [] : void 0,
        r = L(i, void 0, { extraChecksAndFixes: !0, errors: e, warnings: t });
      if (
        (r && k(r, e),
        e.length > 0 &&
          m.warn(
            "errors loading server tree: " +
              e.join(`
`)
          ),
        t &&
          t.length > 0 &&
          m.trace(
            "warnings loading server tree: " +
              t.join(`
`)
          ),
        !!r)
      )
        return r;
    }
  },
  m = P("CrdtDocumentLoader"),
  De = class extends F {
    constructor(e, t, r, o, a, n, s, d) {
      super(r, o, a, n);
      this.store = e;
      this.projectId = t;
      this.branches = s;
      this.switchActiveBranch = d;
      h(this, "parsedIds", new Set());
      h(this, "serializedScopeNodes", new Set());
      h(this, "serializedCacheClearScheduled", !1);
    }
    applySeqWatermark() {
      this.projectId &&
        (this.applySeqWatermarkToStore(this.store),
        this.branches && (this.branches.onStoreCreated = (e) => this.applySeqWatermarkToStore(e)));
    }
    applySeqWatermarkToStore(e) {
      if (!this.projectId) return;
      let t = Se().getSeqWatermark(this.projectId, e.branchId);
      if (t === void 0) return;
      let { from: r, to: o } = e.ensureMinSeq(t);
      r !== o &&
        m.warn("seq watermark applied", {
          projectId: this.projectId,
          branchId: e.branchId,
          from: r,
          to: o,
          delta: o - r,
        });
    }
    switchToInitialBranch() {
      let e = this.settings.activeBranchId;
      if (!e || e === w || !this.branches || !this.switchActiveBranch) return;
      let t = this.branches.findValidBranchId(e);
      ((this.store = this.switchActiveBranch(t)), this.projectId && be(this.projectId, t));
    }
    loadSnapshotIntoMainStore(e) {
      (this.branches && (this.store = this.branches.getStore(w)),
        this.store.fromBuffer(e),
        this.branches?.reset());
    }
    resetStores() {
      if (!this.branches) {
        this.store.reset();
        return;
      }
      let e = this.branches.getStore(w);
      (e.reset(), this.branches.reset(), (this.store = e));
    }
    loadFirstCrdtTreeFromStore(e) {
      let t = [],
        o = this.store.getObjectWithShallowChildren(e.rootId, 1);
      S(o, "Root object not found in store");
      let a = [...q],
        n,
        s = this.settings.activeNodeId,
        d = s ? this.store.getObjectWithShallowChildren(s, 1) : void 0;
      for (; d && d.parentid !== e.rootId; ) {
        if (!d.parentid) throw Error("active node has no parent");
        d = this.store.getObjectWithShallowChildren(d.parentid, 1);
      }
      A(d)
        ? a.push(d.id)
        : ((n = N(o.children ?? [], o?.homePageNodeId)), a.push(n.maybeFirstPage.id));
      let f = L(o, null, { extraChecksAndFixes: !0, errors: t, warnings: t });
      S(f, "Unable to load document");
      for (let u of f.children) u.cache.isShallowLoad = !0;
      for (let u of a) {
        if (!u) continue;
        let C = this.store.getObject(u);
        if (!C) {
          m.debug("No value for " + u);
          continue;
        }
        let b = L(C);
        (S(b, "Scope node instance could not be created"),
          (b.cache.isShallowLoad = !1),
          b.cache.setSerializedCache(b, C),
          this.trackSerializedScopeCache(b));
        let G = f.children.findIndex((Te) => Te.id === u);
        (G >= 0 && f.children.splice(G, 1, b), this.parsedIds.add(u));
        let Q = b;
        u === n?.maybeFirstPage.id &&
          n.firstDesignPage &&
          ye(Q, n.firstDesignPage) !== Q &&
          a.push(n.firstDesignPage.id);
      }
      W(f, t);
      for (let u of f.children) this.parsedIds.has(u.id) || this.scopesToLoad.add(u.id);
      if (t.length > 0) for (let u of f.children) u.cache.serialized = { hadError: !0 };
      let l = j.createByAdoptingRoot(f, { mode: "crdt" });
      (l.verify(),
        (l = x.treeDidLoad(l, this.componentLoader, []).didNonLinearMove(this.componentLoader)));
      let v = [];
      return (
        _(l, v) &&
          (v.forEach((u) => {
            (t.push(`${u.id}: code component links itself via ${u.stack}`), H(l, u.id, u.stack));
          }),
          (l = l.commit(this.componentLoader))),
        l.setService("loader", this),
        l
      );
    }
    async loadFirstCrdtTree(e) {
      let t = this.loadFirstCrdtTreeFromStore(e);
      return (
        await this.emitWrapped(() => {
          if (this.scheduler.isDone()) return;
          let r = performance.now();
          (this.emit("loadedFirstData", t),
            g("parsingFirstPage"),
            (this.parsingDuration += performance.now() - r));
        }),
        t
      );
    }
    async createTreeFromBuffer(e) {
      this.documentSize = e.byteLength;
      let t = V.loadVersionFromBuffer(e);
      if ((this.emit("loadedFormatVersion", t), this.scheduler.isCancelled())) {
        this.resetStores();
        return;
      }
      try {
        (this.loadSnapshotIntoMainStore(e),
          this.applySeqWatermark(),
          g("buildStore"),
          this.switchToInitialBranch());
        let r = this.store.getObject("meta");
        if (!r) throw new Error("Meta field not found");
        if (!E(r.version)) throw Error("cannot read document version");
        if (
          ((this.canvasTreeVersion = r.version),
          m.debug(
            "createTree",
            this.canvasTreeVersion,
            D(this.documentSize),
            y(this.loadingDuration)
          ),
          this.emit("loadedDocumentVersion", r.version),
          this.scheduler.isCancelled())
        ) {
          this.resetStores();
          return;
        }
        ((this.tree = await this.loadFirstCrdtTree(r)),
          this.settings.localCache?.storeSnapshot(e, this.treeVersion, {
            syncStrategy: "full-load",
          }),
          await this.loadAllScopesAsync());
      } catch (r) {
        if (this.scheduler.isCancelled()) return;
        throw (this.resetStores(), r);
      }
    }
    async createTreeFromCachedState(e, t = 0) {
      this.documentSize = e.snapshot.byteLength;
      let r = V.loadVersionFromBuffer(e.snapshot);
      if ((this.emit("loadedFormatVersion", r), this.scheduler.isCancelled()))
        return (this.resetStores(), !0);
      try {
        if (
          (this.loadSnapshotIntoMainStore(e.snapshot),
          this.applySeqWatermark(),
          g("buildStore"),
          e.rows.length > 0 && (this.addCachedRowsToStores(e.rows), g("addedRows")),
          t)
        ) {
          let a = this.store.getHierarchy().computeTreeHash();
          if (t !== a)
            return (
              m.reportCriticalError("hierarchy hash mismatch, falling back to full document load", {
                version: this.treeVersion,
                hierarchyHash: t,
                computedHierarchyHash: a,
                documentSize: this.documentSize,
              }),
              this.settings.localCache?.abortAndClearCache(),
              this.resetStores(),
              !1
            );
        }
        this.switchToInitialBranch();
        let o = this.store.getObject("meta");
        if (!o) throw new Error("Meta field not found");
        if (!E(o.version)) throw Error("cannot read document version");
        return (
          (this.canvasTreeVersion = o.version),
          m.debug(
            "createTreeFromCachedState",
            this.canvasTreeVersion,
            D(this.documentSize),
            y(this.loadingDuration)
          ),
          this.emit("loadedDocumentVersion", o.version),
          this.scheduler.isCancelled()
            ? (this.resetStores(), !0)
            : ((this.tree = await this.loadFirstCrdtTree(o)), await this.loadAllScopesAsync(), !0)
        );
      } catch (o) {
        if (this.scheduler.isCancelled()) return !0;
        throw (this.resetStores(), o);
      }
    }
    addCachedRowsToStores(e) {
      function* t(s) {
        for (let d of s) for (let f of d.rows) yield f;
      }
      this.branches && S(this.store === this.branches.getStore(w), "main store mismatch");
      let r = de(t(e)),
        o = r.get(w);
      if ((o && this.store.addSerializableRows(o), r.delete(w), r.size === 0)) return;
      let a = this.branches;
      S(a, "branch registry is required to load cached branch rows");
      let n = [...r].sort(([s], [d]) => a.getBranchPath(s).length - a.getBranchPath(d).length);
      for (let [s, d] of n) a.getStore(s).addSerializableRows(d);
    }
    async start() {
      await this.scheduler.run(async () => {
        (m.debug("start"), g("parsingInit"), this.updatePauseResumeState());
        let e = [],
          t = performance.now(),
          r = this.settings.localCache;
        if (r && !r.aborted)
          try {
            let a = !!this.settings.initData?.prefetchSyncPromise;
            e.push(a ? "prefetch-sync" : "sync");
            let n = this.settings.initData?.prefetchSyncPromise ?? this.fetchTreeSync();
            (this.settings.initData && delete this.settings.initData.prefetchSyncPromise,
              n
                .then((d) => d.duration)
                .then((d) => g("dataLoad", d))
                .catch(() => {}));
            let s = await r.syncCrdtData(n);
            if (s && s.version >= this.treeVersion) {
              if (
                ((this.loadingDuration = performance.now() - t),
                g("documentBytesReady"),
                I({
                  format: "crdt",
                  strategy: s.syncStrategy,
                  sources: e,
                  snapshotBytes: s.snapshot.byteLength,
                  snapshotSource: s.snapshotSource,
                  cacheBackend: s.cacheBackend,
                  cachedRows: s.cachedRows,
                  cachedRowBytes: s.cachedRowBytes,
                  downloadedRows: s.downloadedRows,
                  downloadedRowBytes: s.downloadedRowBytes,
                }),
                await this.scheduler.yield(),
                await this.createTreeFromCachedState(s, s.hierarchyHash))
              )
                return;
              m.warn("local cache failed to create tree, falling back to full document load");
            } else
              s
                ? m.warn(
                    "local cache behind websocket init tree version, falling back to full document load"
                  )
                : m.warn("local cache failed, falling back to full document load");
          } catch (a) {
            m.warn("tree/sync failed, falling back to full document load:", a);
          }
        let o = await this.loadCrdtData(e);
        ((this.loadingDuration = performance.now() - t),
          g("documentBytesReady"),
          I({
            format: "crdt",
            strategy: "full-load",
            sources: e,
            snapshotBytes: o.byteLength,
            snapshotSource: "downloaded",
            cachedRows: 0,
            cachedRowBytes: 0,
            downloadedRows: 0,
            downloadedRowBytes: 0,
          }),
          await this.scheduler.yield(),
          await this.createTreeFromBuffer(o));
      });
    }
    startFromStore() {
      let e = this.store.getObject("meta");
      if (!e) throw Error("Meta field not found");
      return (
        (this.tree = this.loadFirstCrdtTreeFromStore(e)),
        this.pauseLoadingScopes(),
        this.scheduler
          .run(async () => {
            await this.loadAllScopesAsync();
          })
          .catch((t) => {
            this.scheduler.isCancelled() || this.emit("error", t);
          }),
        this.tree
      );
    }
    async fetchTreeSync() {
      let e = this.settings.localCache;
      S(e, "fetchTreeSync requires localCache");
      let t = e.getCachedTreeVersion(),
        r = this.settings.initData?.syncURL,
        o = r ? new URL(r) : new URL(`/projects/${e.projectId}/tree/sync`, window.location.href);
      o.searchParams.set("version", t.toString());
      let a = performance.now();
      U && !U.isComplete() && (a = le);
      let n;
      this.settings.refreshAccessToken && (n = await this.settings.refreshAccessToken({}));
      let s = await fetch(o, n),
        d = "Sync-Strategy";
      return {
        status: s.status,
        headers: s.headers,
        duration: Promise.resolve(performance.now() - a),
        updates: s.headers.get(d) === "incremental" ? s.json() : void 0,
        snapshot: s.headers.get(d) === "snapshot" ? s.arrayBuffer() : void 0,
      };
    }
    async loadCrdtData(e = []) {
      if (this.settings.loadedData && this.settings.loadedData instanceof Uint8Array)
        return (m.debug("loadData: loadedData"), e.push("loaded-data"), this.settings.loadedData);
      let t = this.settings.initData;
      if ((m.debug("loadData: prefetch"), t?.prefetchPromise)) {
        let o = t.prefetchPromise;
        if ((delete t.prefetchPromise, t.version === this.treeVersion)) {
          e.push("prefetch-tree");
          let a = await o;
          if (
            (a.duration.then((n) => g("dataLoad", n)).catch(() => {}),
            a.status < 200 || a.status >= 300)
          )
            throw new Error(`Failed to fetch project data. Status code: ${a.status}`);
          if (a.buffer) {
            m.debug("loadData: prefetch bytes parser");
            let n = await a.buffer;
            return (await this.scheduler.yield(), new Uint8Array(n));
          }
        }
      }
      if (t?.prefetchSyncPromise) {
        let o = t.prefetchSyncPromise;
        delete t.prefetchSyncPromise;
        let a = await o;
        if (Number(a.headers.get("Tree-Version")) === this.treeVersion) {
          if (
            (a.duration.then((s) => g("dataLoad", s)).catch(() => {}),
            a.status < 200 || a.status >= 300)
          )
            throw new Error(`Failed to fetch project data. Status code: ${a.status}`);
          if (a.snapshot) {
            (e.push("prefetch-sync"), m.debug("loadData: prefetch sync snapshot"));
            let s = await a.snapshot;
            return (await this.scheduler.yield(), new Uint8Array(s));
          }
        }
      }
      (e.push("tree-download"), m.debug("loadData: fetch"));
      let r;
      this.settings.refreshAccessToken &&
        ((r = await this.settings.refreshAccessToken({})), await this.scheduler.yield());
      for (let o = 0; o < z; ++o) {
        let a = await fetch(this.documentURL, r);
        if (a.ok) {
          await this.scheduler.yield();
          let n = await a.arrayBuffer();
          return (await this.scheduler.yield(), new Uint8Array(n));
        }
        (a.status < 200 || a.status >= 300) &&
          (m.debug("onErrorStatusLoaded, retry:", o),
          await this.scheduler.sleep(o * R + Math.random() * R));
      }
      throw Error(`Failed to fetch project data after attempting ${z} times`);
    }
    createLoadingScope(e) {
      return new Y(e, this.store, (t) => this.trackSerializedScopeCache(t));
    }
    trackSerializedScopeCache(e) {
      if ((this.serializedScopeNodes.add(e), this.serializedCacheClearScheduled)) return;
      ((this.serializedCacheClearScheduled = !0),
        (this.settings.requestIdleCallback ?? ((r) => setTimeout(r, 0)))(() =>
          this.clearSerializedScopeCaches()
        ));
    }
    clearSerializedScopeCaches() {
      for (let e of this.serializedScopeNodes) e.cache.clearSerializedCache();
      (this.serializedScopeNodes.clear(), (this.serializedCacheClearScheduled = !1));
    }
    resetForCrashRecovery(e) {
      let t = [],
        o = this.store.getObject("meta");
      if (!o) throw Error("Meta field not found in CRDT store during crash recovery");
      let a = this.store.getObjectWithShallowChildren(o.rootId, 1),
        n = L(a, null, { extraChecksAndFixes: !0, errors: t, warnings: t });
      if (!n) throw Error("Unable to create root from store during crash recovery");
      for (let l of n.children) l.cache.isShallowLoad = !0;
      ((this.parsedIds = new Set()),
        (this.scopesToLoad = new Set()),
        (this.currentLoadingScope = void 0),
        (this.addedByDiff = new Set()),
        (this.removedByDiff = new Set()),
        (this.loadCallbacksPerScope = new Map()),
        (this.activelyLoadingScope = !1));
      let s = [...q];
      e && s.push(e);
      for (let l of s) {
        let v = this.store.getObject(l);
        if (!v) continue;
        let u = L(v);
        if (!u) continue;
        ((u.cache.isShallowLoad = !1),
          u.cache.setSerializedCache(u, v),
          this.trackSerializedScopeCache(u));
        let C = n.children.findIndex((b) => b.id === l);
        (C >= 0 && n.children.splice(C, 1, u), this.parsedIds.add(l));
      }
      W(n, t);
      for (let l of n.children) this.parsedIds.has(l.id) || this.scopesToLoad.add(l.id);
      if (t.length > 0) for (let l of n.children) l.cache.serialized = { hadError: !0 };
      let d = j.createByAdoptingRoot(n, { mode: "crdt" });
      (d.verify(),
        (d = x.treeDidLoad(d, this.componentLoader, []).didNonLinearMove(this.componentLoader)));
      let f = [];
      return (
        _(d, f) &&
          (f.forEach((l) => {
            (t.push(`${l.id}: code component links itself via ${l.stack}`), H(d, l.id, l.stack));
          }),
          (d = d.commit(this.componentLoader))),
        t.length > 0 &&
          m.warn(
            "[crash-recovery] errors rebuilding tree from store:",
            t.join(`
`)
          ),
        d.setService("loader", this),
        (this.tree = d),
        (this.loadedFirstScope = !0),
        d
      );
    }
  };
export { Ne as a, be as b, He as c, qe as d, $e as e, K as f, F as g, De as h };
//# sourceMappingURL=chunk-J5SU7P4C.mjs.map
