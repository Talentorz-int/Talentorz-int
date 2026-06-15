import { a as j } from "chunk-67IDBBKJ.mjs";
import { a as T } from "chunk-AUNF3KWQ.mjs";
import { a as M } from "chunk-EQBCTBZ3.mjs";
import { a as x } from "chunk-HMF7T2NG.mjs";
import { a as F, c as B, e as N } from "chunk-XELMBOBL.mjs";
var A = B((E, k) => {
  "use strict";
  (function (p, i) {
    if (typeof E == "object" && typeof k == "object") k.exports = i();
    else if (typeof define == "function" && define.amd) define([], i);
    else {
      var s = i();
      for (var o in s) (typeof E == "object" ? E : p)[o] = s[o];
    }
  })(window, function () {
    return (function (p) {
      var i = {};
      function s(o) {
        if (i[o]) return i[o].exports;
        var l = (i[o] = { i: o, l: !1, exports: {} });
        return (p[o].call(l.exports, l, l.exports, s), (l.l = !0), l.exports);
      }
      return (
        (s.m = p),
        (s.c = i),
        (s.d = function (o, l, u) {
          s.o(o, l) || Object.defineProperty(o, l, { enumerable: !0, get: u });
        }),
        (s.r = function (o) {
          (typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(o, "__esModule", { value: !0 }));
        }),
        (s.t = function (o, l) {
          if ((1 & l && (o = s(o)), 8 & l || (4 & l && typeof o == "object" && o && o.__esModule)))
            return o;
          var u = Object.create(null);
          if (
            (s.r(u),
            Object.defineProperty(u, "default", { enumerable: !0, value: o }),
            2 & l && typeof o != "string")
          )
            for (var d in o)
              s.d(
                u,
                d,
                function (n) {
                  return o[n];
                }.bind(null, d)
              );
          return u;
        }),
        (s.n = function (o) {
          var l =
            o && o.__esModule
              ? function () {
                  return o.default;
                }
              : function () {
                  return o;
                };
          return (s.d(l, "a", l), l);
        }),
        (s.o = function (o, l) {
          return Object.prototype.hasOwnProperty.call(o, l);
        }),
        (s.p = ""),
        s((s.s = 0))
      );
    })([
      function (p, i, s) {
        "use strict";
        var o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (u, d, n, e) {
                  e === void 0 && (e = n);
                  var a = Object.getOwnPropertyDescriptor(d, n);
                  ((a && ("get" in a ? d.__esModule : !a.writable && !a.configurable)) ||
                    (a = {
                      enumerable: !0,
                      get: function () {
                        return d[n];
                      },
                    }),
                    Object.defineProperty(u, e, a));
                }
              : function (u, d, n, e) {
                  (e === void 0 && (e = n), (u[e] = d[n]));
                }),
          l =
            (this && this.__exportStar) ||
            function (u, d) {
              for (var n in u)
                n === "default" || Object.prototype.hasOwnProperty.call(d, n) || o(d, u, n);
            };
        (Object.defineProperty(i, "__esModule", { value: !0 }), l(s(1), i), l(s(2), i));
      },
      function (p, i, s) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 });
      },
      function (p, i, s) {
        "use strict";
        var o =
            (this && this.__awaiter) ||
            function (n, e, a, g) {
              return new (a || (a = Promise))(function (m, t) {
                function r(_) {
                  try {
                    f(g.next(_));
                  } catch (v) {
                    t(v);
                  }
                }
                function c(_) {
                  try {
                    f(g.throw(_));
                  } catch (v) {
                    t(v);
                  }
                }
                function f(_) {
                  var v;
                  _.done
                    ? m(_.value)
                    : ((v = _.value),
                      v instanceof a
                        ? v
                        : new a(function (y) {
                            y(v);
                          })).then(r, c);
                }
                f((g = g.apply(n, e || [])).next());
              });
            },
          l =
            (this && this.__rest) ||
            function (n, e) {
              var a = {};
              for (var g in n)
                Object.prototype.hasOwnProperty.call(n, g) && e.indexOf(g) < 0 && (a[g] = n[g]);
              if (n != null && typeof Object.getOwnPropertySymbols == "function") {
                var m = 0;
                for (g = Object.getOwnPropertySymbols(n); m < g.length; m++)
                  e.indexOf(g[m]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(n, g[m]) &&
                    (a[g[m]] = n[g[m]]);
              }
              return a;
            };
        (Object.defineProperty(i, "__esModule", { value: !0 }), (i.FramerTracking = void 0));
        let u = s(3);
        function d() {
          let n = () =>
            Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .slice(-4);
          return `${n()}${n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`;
        }
        i.FramerTracking = class {
          constructor(e) {
            ((this.sourceName = e.sourceName),
              (this.userId = e.userId),
              (this.verbose = e.verbose || !1),
              (this.addContext = e.addContext),
              (this.poster = (0, u.createPoster)({
                endpointURL: e.trackingURL,
                postBatch: e.postBatch,
                storeId: e.storeId,
                processItem: (a) =>
                  a.data.context.userId
                    ? a
                    : this.userId
                      ? ((a.data.context.userId = this.userId), a)
                      : null,
              })));
          }
          flush() {
            return o(this, void 0, void 0, function* () {
              yield this.poster.flush();
            });
          }
          group(e) {
            this.post(Object.assign(Object.assign({}, e), { type: "group" }));
          }
          identify(e) {
            this.post(Object.assign(Object.assign({}, e), { type: "identify" }));
          }
          track(e) {
            if (this.verbose) {
              let { event: a, type: g } = e,
                m = l(e, ["event", "type"]);
              this.logEvent(a, m);
            }
            this.post(Object.assign(Object.assign({}, e), { type: "track" }));
          }
          setUserId(e) {
            (this.userId &&
              this.userId !== e &&
              console.warn("Changing user id from %s to %s", this.userId, e),
              (this.userId = e),
              this.poster.reprocessItems());
          }
          logEvent(e, a) {
            let g = `%c${e}`,
              m = ["background: blue; border-radius: 3px; color: white; padding: 0 5px;"];
            (a &&
              Object.keys(a).length > 0 &&
              ((g += `
%c${JSON.stringify(a, null, 2)}`),
              m.push("font-family: monospace; opacity: 0.7;")),
              console.log(g, ...m));
          }
          post(e) {
            if (!this.userId) {
              let m = e.type === "identify" ? e.userId : e.context && e.context.userId;
              m && this.setUserId(m);
            }
            let a = Object.assign({}, e.context);
            (typeof window < "u" &&
              (a.language || (a.language = window.navigator.language),
              a.screen ||
                (a.screen = { width: window.screen.width, height: window.screen.height })),
              this.addContext && this.addContext(a));
            let g = {
              data: Object.assign(Object.assign({}, e), { context: a, uuid: e.uuid || d() }),
              source: this.sourceName,
              timestamp: Date.now(),
            };
            this.poster.post(g);
          }
        };
      },
      function (p, i, s) {
        "use strict";
        var o =
          (this && this.__awaiter) ||
          function (m, t, r, c) {
            return new (r || (r = Promise))(function (f, _) {
              function v(b) {
                try {
                  w(c.next(b));
                } catch (h) {
                  _(h);
                }
              }
              function y(b) {
                try {
                  w(c.throw(b));
                } catch (h) {
                  _(h);
                }
              }
              function w(b) {
                var h;
                b.done
                  ? f(b.value)
                  : ((h = b.value),
                    h instanceof r
                      ? h
                      : new r(function (q) {
                          q(h);
                        })).then(v, y);
              }
              w((c = c.apply(m, t || [])).next());
            });
          };
        (Object.defineProperty(i, "__esModule", { value: !0 }), (i.createPoster = void 0));
        let l = s(4);
        i.createPoster = function (m) {
          return new g(m);
        };
        let u = 1e3,
          d = 1e4,
          n = 100,
          e = 4,
          a = 1e3;
        class g {
          constructor(t) {
            ((this.failCount = 0),
              (this.endpointURL = t.endpointURL),
              (this.processItem = t.processItem),
              t.storeId !== null
                ? ((this.store = (0, l.createStore)(t.storeId || "framer-tracking-client-queue")),
                  (this.queue = this.store.load()))
                : (this.queue = []),
              (this.postBatch =
                t.postBatch ||
                (typeof window < "u" && typeof window.fetch == "function"
                  ? Promise.resolve()
                      .then(() => s(5))
                      .then((r) => r.postBatch)
                  : Promise.resolve()
                      .then(() => s(6))
                      .then((r) => r.postBatch))));
          }
          flush() {
            return o(this, void 0, void 0, function* () {
              if (this.pendingFlushPromise) {
                try {
                  yield this.pendingFlushPromise;
                } catch {}
                return this.queue.length === 0;
              }
              (clearTimeout(this.flushTimer),
                clearTimeout(this.flushDeadlineTimer),
                (this.flushTimer = this.flushDeadlineTimer = void 0));
              let t = this.buildPostBody();
              if (!t) return !0;
              let r = Promise.all([this.postBatch, this.endpointURL]).then(([c, f]) => c(f, t));
              this.pendingFlushPromise = r;
              try {
                (yield r,
                  (this.failCount = 0),
                  (this.queue = this.queue.filter((c) => !c.pending)),
                  this.store && this.store.save(this.queue),
                  this.queue.length > 0 && !this.flushTimer && this.scheduleFlush());
              } catch (c) {
                console.warn("Post failed: %s", c);
                for (let f of this.queue) f.pending && (f.pending = !1);
                (this.failCount++, this.scheduleFlush());
              } finally {
                this.pendingFlushPromise = void 0;
              }
              return this.queue.length === 0;
            });
          }
          post(t) {
            let r = this.createQueueItem(t);
            (this.queue.push(r),
              this.constrainQueueSize(),
              this.store && this.store.save(this.queue),
              this.scheduleFlush());
          }
          reprocessItems(t = !1) {
            let r = !1;
            for (let c of this.queue) c.complete || (this.tryCompleteItem(c) && (r = !0));
            this.store && (t || r) && this.store.save(this.queue);
          }
          buildPostBody() {
            let t = [
                `[
`,
              ],
              r = 0;
            for (let c = 0; c < this.queue.length; c++) {
              let f = this.queue[c];
              if (
                this.tryCompleteItem(f) &&
                (r > 0 &&
                  t.push(`,
`),
                t.push(f.json),
                (f.pending = !0),
                ++r === n)
              )
                break;
            }
            return r === 0
              ? ""
              : (t.push(`
]`),
                t.join(""));
          }
          constrainQueueSize() {
            if (this.queue.length <= a) return;
            let t = this.queue.length - a;
            (this.queue.splice(t), console.warn("Dropping %d item(s) from the queue", t));
          }
          createQueueItem(t) {
            if (!this.processItem) return { complete: !0, json: JSON.stringify(t) };
            try {
              let r = this.processItem(t);
              return r
                ? { complete: !0, json: JSON.stringify(r) }
                : { cache: t, complete: !1, json: JSON.stringify(t) };
            } catch (r) {
              let c = JSON.stringify(t);
              return (
                console.warn(
                  "Failed to process item (%s): %s",
                  r instanceof Error ? r.message : "unknown",
                  c
                ),
                { cache: t, complete: !1, json: c }
              );
            }
          }
          scheduleFlush() {
            let t = () => this.flush();
            (this.flushDeadlineTimer ||
              (this.flushDeadlineTimer = setTimeout(t, this.withBackoff(d))),
              clearTimeout(this.flushTimer),
              (this.flushTimer = setTimeout(t, this.withBackoff(u))));
          }
          tryCompleteItem(t) {
            if (t.complete) return !0;
            if (!this.processItem) return !1;
            try {
              let r = t.cache || JSON.parse(t.json),
                c = this.processItem(r);
              if (!c) return ((t.cache = r), !1);
              ((t.cache = void 0), (t.complete = !0), (t.json = JSON.stringify(c)));
            } catch (r) {
              return (
                console.warn(
                  "Failed to process item (%s): %s",
                  r instanceof Error ? r.message : "unknown",
                  t
                ),
                !1
              );
            }
            return !0;
          }
          withBackoff(t) {
            return this.failCount ? t * Math.pow(2, Math.min(this.failCount, e)) : t;
          }
        }
      },
      function (p, i, s) {
        "use strict";
        (Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.createStore = void 0),
          (i.createStore = function (l) {
            return new o(l);
          }));
        class o {
          constructor(u) {
            this.id = u;
          }
          load() {
            let u = this.getLocalStorageSafely();
            if (!u) return [];
            let d = u.getItem(this.id);
            return d
              ? d
                  .split(
                    `
`
                  )
                  .map((n) =>
                    n && n[0] === "!"
                      ? { complete: !1, json: n.slice(1) }
                      : { complete: !0, json: n }
                  )
              : [];
          }
          save(u) {
            let d = this.getLocalStorageSafely();
            if (!d) return;
            let n = u.map((e) => (e.complete ? "" : "!") + e.json).join(`
`);
            try {
              d.setItem(this.id, n);
            } catch {}
          }
          getLocalStorageSafely() {
            try {
              if (typeof window > "u" || !window.localStorage) return null;
            } catch {
              return null;
            }
            return window.localStorage;
          }
        }
      },
      function (p, i, s) {
        "use strict";
        var o =
          (this && this.__awaiter) ||
          function (l, u, d, n) {
            return new (d || (d = Promise))(function (e, a) {
              function g(r) {
                try {
                  t(n.next(r));
                } catch (c) {
                  a(c);
                }
              }
              function m(r) {
                try {
                  t(n.throw(r));
                } catch (c) {
                  a(c);
                }
              }
              function t(r) {
                var c;
                r.done
                  ? e(r.value)
                  : ((c = r.value),
                    c instanceof d
                      ? c
                      : new d(function (f) {
                          f(c);
                        })).then(g, m);
              }
              t((n = n.apply(l, u || [])).next());
            });
          };
        (Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.postBatch = void 0),
          (i.postBatch = function (l, u) {
            return o(this, void 0, void 0, function* () {
              let d = yield fetch(l, {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json; charset=utf-8" },
                body: u,
              });
              if (!d.ok) throw Error(`Server responded with ${d.statusText}`);
              d.type !== "opaque" && (yield d.json());
            });
          }));
      },
      function (p, i, s) {
        "use strict";
        (Object.defineProperty(i, "__esModule", { value: !0 }), (i.postBatch = void 0));
        let o = s(7);
        i.postBatch = function (l, u) {
          return new Promise((d, n) => {
            let e = l.split("/");
            if (e.length < 3 || e[0] !== "https:" || e[1] !== "")
              throw Error("Expected a valid HTTPS URL");
            let a = {
                hostname: e[2],
                path: "/" + e.slice(3).join("/"),
                headers: {
                  "Content-Length": u.length,
                  "Content-Type": "application/json; charset=utf-8",
                },
                method: "POST",
              },
              g = o.request(a, (m) => {
                if (m.statusCode !== 200)
                  return void n(Error(`Server responded with ${m.statusMessage}`));
                m.setEncoding("utf8");
                let t = "";
                (m.on("data", (r) => {
                  t += r;
                }),
                  m.on("error", n),
                  m.on("end", () => {
                    try {
                      (JSON.parse(t), d());
                    } catch (r) {
                      n(r);
                    }
                  }));
              });
            (g.on("error", n), g.write(u), g.end());
          });
        };
      },
      function (p, i) {
        p.exports = F("https");
      },
    ]);
  });
});
var R = (p) =>
  function (s, o) {
    p.track({ ...o, event: s, type: "track" });
  };
var L = N(A(), 1);
var Q = "FramerWeb/199f97e",
  C,
  Z = (p) => {
    C = p;
  },
  S,
  U = (p) => {
    S = p;
  },
  O = !1;
try {
  O = window.localStorage && window.localStorage.getItem("debug-metrics") === "active";
} catch {}
var D = new L.FramerTracking({
    sourceName: "framer-web",
    trackingURL: x().events + "/track",
    verbose: O,
    addContext: (p) => {
      let i = j();
      (i?.stores?.scopeStore &&
        ((p.scopeType = i.stores.scopeStore.scopeType),
        (p.scopeId = i.stores.scopeStore.active.id)),
        p.appVersion === void 0 && (p.appVersion = "FramerWeb/199f97e"),
        C && p.projectId === void 0 && (p.projectId = C),
        S !== void 0 && p.legacyProject === void 0 && (p.legacyProject = S),
        p.releaseChannel === void 0 && (p.releaseChannel = M(window)?.channel));
    },
  }),
  I = R(D);
T((p, i) => {
  if (i?.track) {
    let { event: s, ...o } = p;
    D.track({ ...o, type: "track", event: s });
  }
});
export { A as a, Q as b, Z as c, U as d, D as e, I as f };
//# sourceMappingURL=chunk-WMNAJO4L.mjs.map
