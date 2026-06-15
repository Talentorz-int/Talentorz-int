import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import {
  A as t,
  F as n,
  L as r,
  M as i,
  N as a,
  O as o,
  P as s,
  R as c,
  S as l,
  _ as u,
  a as d,
  c as f,
  g as p,
  h as m,
  i as h,
  j as g,
  l as _,
  m as v,
  n as ee,
  o as y,
  p as b,
  r as te,
  s as ne,
  t as x,
  u as S,
  v as C,
  w,
  z as T,
} from "./react.DXuyTrsy.mjs";
import { C as E, a as D, r as O, t as k } from "./motion.C4Ab7j_2.mjs";
import {
  $ as re,
  A,
  D as ie,
  E as j,
  Et as ae,
  F as M,
  H as N,
  J as oe,
  N as P,
  O as F,
  Ot as se,
  P as ce,
  S as I,
  St as L,
  T as R,
  V as z,
  X as le,
  Y as B,
  Z as V,
  _ as ue,
  a as H,
  at as de,
  b as fe,
  bt as pe,
  c as me,
  d as he,
  dt as ge,
  f as _e,
  g as ve,
  h as ye,
  ht as U,
  i as W,
  k as G,
  l as be,
  lt as xe,
  m as Se,
  o as K,
  ot as Ce,
  p as we,
  pt as Te,
  q as Ee,
  rt as De,
  s as Oe,
  st as ke,
  tt as Ae,
  ut as je,
  w as Me,
  wt as Ne,
  xt as Pe,
  y as Fe,
  yt as Ie,
} from "./framer.A_mnCMV8.mjs";
import { n as Le, r as Re } from "./hqKc9RA03.DOfzp7fV.mjs";
import { n as ze, t as Be } from "./a87e639Ik.Cx0YrbD_.mjs";
import { i as Ve, n as He, r as Ue, t as We } from "./lpw1HhEJv.CUARUhsz.mjs";
import { n as Ge, t as Ke } from "./m4ltnAOmS.ChSqi6AS.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./R0UISnK09.DzMwoIYX.mjs";
import { i as Ze, n as Qe, r as $e, t as et } from "./CiTq1jwtl.CumxN-Gs.mjs";
import { a as tt, i as nt, o as rt, r as it } from "./shared-lib.3vyoKFC0.mjs";
import { n as at, t as ot } from "./plE8lAR0p.DnpcUrKQ.mjs";
import { n as st, t as ct } from "./dZkd7bSHY.DOkl-lzF.mjs";
import { i as lt, n as ut, r as dt, t as ft } from "./QZFw8ECYE.CJ6FqAnr.mjs";
import { i as pt, n as mt, r as ht, t as gt } from "./jdYQlRkvk.BuF_eFXD.mjs";
import { i as _t, n as vt, r as yt, t as bt } from "./ZL5YG__bZ.DVrDAE_Y.mjs";
import { i as xt, n as St, r as Ct, t as wt } from "./trekJP1di.CpdlAUyW.mjs";
function Tt(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt = e(() => {
    (r(),
      (Et = class {
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.lerp)
            ((this.value = (function (e, t, n, r) {
              return (function (e, t, n) {
                return (1 - n) * e + n * t;
              })(e, t, 1 - Math.exp(-n * r));
            })(this.value, this.to, 60 * this.lerp, e)),
              Math.round(this.value) === this.to && ((this.value = this.to), (t = !0)));
          else {
            this.currentTime += e;
            let n = Tt(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          }
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          { lerp: n = 0.1, duration: r = 1, easing: i = (e) => e, onStart: a, onUpdate: o }
        ) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (Dt = class {
        constructor({ wrapper: e, content: t, autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, r)),
              this.wrapper === T
                ? T.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            T.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper === T
            ? ((this.width = T.innerWidth), (this.height = T.innerHeight))
            : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper === T
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (Ot = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (kt = 100 / 6),
      (At = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          ((this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new Ot()),
            T.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            T.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
            r = -(t - this.touchStart.x) * this.touchMultiplier,
            i = -(n - this.touchStart.y) * this.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e;
          ((t *= r === 1 ? kt : r === 2 ? this.windowWidth : 1),
            (n *= r === 1 ? kt : r === 2 ? this.windowHeight : 1),
            (t *= this.wheelMultiplier),
            (n *= this.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          ((this.windowWidth = T.innerWidth), (this.windowHeight = T.innerHeight));
        };
      }),
      (jt = class {
        constructor({
          wrapper: e = T,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: i = !0,
          syncTouch: a = !1,
          syncTouchLerp: o = 0.075,
          touchInertiaMultiplier: s = 35,
          duration: c,
          easing: l = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: u = !c && 0.1,
          infinite: d = !1,
          orientation: f = `vertical`,
          gestureOrientation: p = `vertical`,
          touchMultiplier: m = 1,
          wheelMultiplier: h = 1,
          autoResize: g = !0,
          prevent: _ = !1,
          __experimental__naiveDimensions: v = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.onVirtualScroll = ({ deltaX: e, deltaY: t, event: n }) => {
              if (n.ctrlKey) return;
              let r = n.type.includes(`touch`),
                i = n.type.includes(`wheel`);
              if (
                ((this.isTouching = n.type === `touchstart` || n.type === `touchmove`),
                this.options.syncTouch &&
                  r &&
                  n.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let a = e === 0 && t === 0,
                o =
                  (this.options.gestureOrientation === `vertical` && t === 0) ||
                  (this.options.gestureOrientation === `horizontal` && e === 0);
              if (a || o) return;
              let s = n.composedPath();
              s = s.slice(0, s.indexOf(this.rootElement));
              let c = this.options.prevent;
              if (
                s.find(
                  (e) =>
                    (typeof c == `function` ? c?.(e) : c) ||
                    e.hasAttribute?.call(e, `data-lenis-prevent`) ||
                    (r && e.hasAttribute?.call(e, `data-lenis-prevent-touch`)) ||
                    (i && e.hasAttribute?.call(e, `data-lenis-prevent-wheel`)) ||
                    (e.classList?.contains(`lenis`) && !e.classList?.contains(`lenis-stopped`))
                )
              )
                return;
              if (this.isStopped || this.isLocked) return void n.preventDefault();
              if (!((this.options.syncTouch && r) || (this.options.smoothWheel && i)))
                return ((this.isScrolling = `native`), void this.animate.stop());
              n.preventDefault();
              let l = t;
              this.options.gestureOrientation === `both`
                ? (l = Math.abs(t) > Math.abs(e) ? t : e)
                : this.options.gestureOrientation === `horizontal` && (l = e);
              let u = r && this.options.syncTouch,
                d = r && n.type === `touchend` && Math.abs(l) > 5;
              (d && (l = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + l,
                  Object.assign(
                    { programmatic: !1 },
                    u
                      ? { lerp: d ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            (T.lenisVersion = `1.1.2`),
            (e !== document.documentElement && e !== document.body) || (e = T),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: a,
              syncTouchLerp: o,
              touchInertiaMultiplier: s,
              duration: c,
              easing: l,
              lerp: u,
              infinite: d,
              gestureOrientation: p,
              orientation: f,
              touchMultiplier: m,
              wheelMultiplier: h,
              autoResize: g,
              prevent: _,
              __experimental__naiveDimensions: v,
            }),
            (this.animate = new Et()),
            (this.emitter = new Ot()),
            (this.dimensions = new Dt({ wrapper: e, content: t, autoResize: g })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            (this.virtualScroll = new At(r, { touchMultiplier: m, wheelMultiplier: h })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit({ userData: e = {} } = {}) {
          ((this.userData = e), this.emitter.emit(`scroll`, this), (this.userData = {}));
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = !i && this.options.lerp,
            onStart: s,
            onComplete: c,
            force: l = !1,
            programmatic: u = !0,
            userData: d = {},
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || l) {
            if ([`top`, `left`, `start`].includes(e)) e = 0;
            else if ([`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== T) {
                  let e = this.options.wrapper.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (typeof e == `number`) {
              if (
                ((e += t),
                (e = Math.round(e)),
                this.options.infinite
                  ? u && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (e = Tt(0, e, this.limit)),
                n)
              )
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (c == null || c(this))
                );
              e !== this.targetScroll &&
                (u || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: i,
                  easing: a,
                  lerp: o,
                  onStart: () => {
                    (r && (this.isLocked = !0), (this.isScrolling = `smooth`), s?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      u && (this.targetScroll = e),
                      t || this.emit({ userData: d }),
                      t &&
                        (this.reset(),
                        this.emit({ userData: d }),
                        c?.(this),
                        (this.__preventNextNativeScrollEvent = !0)));
                  },
                }));
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === T ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e && ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function Nt(e) {
  let { intensity: t } = e,
    n = o(null);
  return (
    a(() => {
      if (n.current)
        try {
          n.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [n]),
    a(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            r = t && t.style && t.style.overflow === `hidden`;
          n.current && (e || r ? n.current.stop() : n.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, r;
      try {
        ((t = new MutationObserver(e)),
          (r = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            r.observe(document.documentElement, { attributes: !0, attributeFilter: [`style`] })));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          (t && t.disconnect(), r && r.disconnect());
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    a(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n)
            try {
              let e = T.getComputedStyle(n);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                n.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    a(() => {
      try {
        if (typeof jt != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        n.current = new jt({ duration: (t || 10) / 10 });
        let e = (t) => {
            if (n.current)
              try {
                (n.current.raf(t), requestAnimationFrame(e));
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          r = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(r), n.current))
            try {
              (n.current.destroy(), (n.current = null));
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return (console.error(`Error initializing Lenis:`, e), () => {});
      }
    }, [t]),
    a(() => {
      try {
        if (!document || !n.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let t = e;
              if (!t.href) return !1;
              let n =
                  t.href.startsWith(T.location.origin) ||
                  t.href.startsWith(`./`) ||
                  t.href.startsWith(`/`),
                r = t.href.includes(`#`);
              return n && r;
            })
            .map((e) => {
              try {
                let t = e,
                  n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                  r = n ? decodeURIComponent(n) : ``,
                  i = 0;
                try {
                  if (r) {
                    let e = document.querySelector(r);
                    if (e) {
                      let t = T.getComputedStyle(e).scrollMarginTop;
                      i = (t && parseInt(t)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: n, scrollMargin: i, anchorElement: t };
              } catch (e) {
                return (console.error(`Error processing anchor:`, e), null);
              }
            })
            .filter(Boolean),
          t = (e, t, r) => {
            try {
              (e && e.preventDefault && e.preventDefault(),
                n.current && t && n.current.scrollTo(t, { offset: -(r || 0) }));
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          r = e.map(
            ({ href: e, scrollMargin: n }) =>
              (r) =>
                t(r, e, n)
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && r[t] && e.addEventListener(`click`, r[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && r[t] && e.removeEventListener(`click`, r[t]);
            });
          }
        );
      } catch (e) {
        return (console.error(`Error setting up anchor links:`, e), () => {});
      }
    }, [n]),
    f(`div`, { style: e.style })
  );
}
var Pt,
  Ft,
  It = e(() => {
    (r(),
      y(),
      B(),
      Mt(),
      w(),
      (Pt = L(
        Nt,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``
      )),
      (Ft = Pt),
      (Pt.displayName = `Smooth Scroll`),
      A(Pt, {
        intensity: {
          title: `Intensity`,
          type: K.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt = e(() => {
    (y(),
      B(),
      w(),
      (Lt = `var(--framer-icon-mask)`),
      (Rt = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (zt = E.create(Rt)),
      (Bt = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(zt, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (Vt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2.856 16.644 C 1.993 15.782 2.565 13.97 2.126 12.908 C 1.671 11.813 0 10.922 0 9.75 C 0 8.578 1.671 7.688 2.126 6.592 C 2.565 5.531 1.993 3.718 2.856 2.856 C 3.718 1.993 5.531 2.565 6.592 2.126 C 7.692 1.671 8.578 0 9.75 0 C 10.922 0 11.813 1.671 12.908 2.126 C 13.97 2.565 15.782 1.993 16.644 2.856 C 17.507 3.718 16.935 5.53 17.374 6.592 C 17.829 7.692 19.5 8.578 19.5 9.75 C 19.5 10.922 17.829 11.813 17.374 12.908 C 16.935 13.97 17.507 15.782 16.644 16.644 C 15.782 17.507 13.97 16.935 12.908 17.374 C 11.813 17.829 10.922 19.5 9.75 19.5 C 8.578 19.5 7.688 17.829 6.592 17.374 C 5.531 16.935 3.718 17.507 2.856 16.644 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="19.5px" id="BkHDtotwr" transform="translate(2.25 2.25)" width="19.5px"/><path d="M 2.856 16.644 C 1.993 15.782 2.565 13.97 2.126 12.908 C 1.671 11.813 0 10.922 0 9.75 C 0 8.578 1.671 7.688 2.126 6.592 C 2.565 5.531 1.993 3.718 2.856 2.856 C 3.718 1.993 5.531 2.565 6.592 2.126 C 7.692 1.671 8.578 0 9.75 0 C 10.922 0 11.813 1.671 12.908 2.126 C 13.97 2.565 15.782 1.993 16.644 2.856 C 17.507 3.718 16.935 5.53 17.374 6.592 C 17.829 7.692 19.5 8.578 19.5 9.75 C 19.5 10.922 17.829 11.813 17.374 12.908 C 16.935 13.97 17.507 15.782 16.644 16.644 C 15.782 17.507 13.97 16.935 12.908 17.374 C 11.813 17.829 10.922 19.5 9.75 19.5 C 8.578 19.5 7.688 17.829 6.592 17.374 C 5.531 16.935 3.718 17.507 2.856 16.644 Z" fill="transparent" height="19.5px" id="lt88AYTrc" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 2.25)" width="19.5px"/><path d="M 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 Z" fill="transparent" height="3px" id="tQOGXtBJ_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 7.5)" width="3px"/><path d="M 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 Z" fill="transparent" height="3px" id="UeyKEkXWl" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(13.5 13.5)" width="3px"/><path d="M 0 7.5 L 7.5 0" fill="transparent" height="7.5px" id="EwhpyOEA1" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.25 8.25)" width="7.5px"/></svg>`),
      (Ht = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Ut = L(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = Ht(e),
            u = pe(`4179033606`, Vt);
          return f(Bt, {
            ...l,
            className: P(`framer-eA0fU`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: u }),
          });
        }),
        [
          `.framer-eA0fU { -webkit-mask: ${Lt}; aspect-ratio: 1; display: block; mask: ${Lt}; width: 24px; }`,
        ],
        `framer-eA0fU`
      )),
      (Ut.displayName = `Seal Percent`),
      (Wt = Ut),
      A(Ut, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: K.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: K.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: K.Number,
        },
      }));
  }),
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en = e(() => {
    (y(),
      B(),
      w(),
      (Kt = `var(--framer-icon-mask)`),
      (qt = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Jt = E.create(qt)),
      (Yt = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(Jt, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (Xt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 6.735 0 L 6.735 0 C 6.988 0.72 7.117 1.477 7.116 2.24 L 7.116 2.24 C 7.116 5.968 4.094 8.99 0.366 8.99 L 0 8.99 C 0.954 11.687 3.504 13.49 6.366 13.49 L 12.366 13.49 C 12.78 13.49 13.116 13.154 13.116 12.74 L 13.116 6.74 C 13.116 3.155 10.314 0.196 6.735 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.48968770681843px" id="BTUHs71IE" transform="translate(8.634 7.51)" width="13.115624999999994px"/><path d="M 6.75 13.5 L 0.75 13.5 C 0.336 13.5 0 13.164 0 12.75 L 0 6.75 C 0 3.022 3.022 0 6.75 0 L 6.75 0 C 10.478 0 13.5 3.022 13.5 6.75 L 13.5 6.75 C 13.5 10.478 10.478 13.5 6.75 13.5 Z" fill="transparent" height="13.5px" id="PDMRbymJw" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 3)" width="13.5px"/><path d="M 0 8.99 C 0.954 11.687 3.504 13.49 6.366 13.49 L 12.366 13.49 C 12.78 13.49 13.116 13.154 13.116 12.74 L 13.116 6.74 C 13.116 3.155 10.314 0.196 6.735 0" fill="transparent" height="13.48968770681843px" id="fBaxj6mIs" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.634 7.51)" width="13.115624999999994px"/></svg>`),
      (Zt = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Qt = L(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = Zt(e),
            u = pe(`3346926003`, Xt);
          return f(Yt, {
            ...l,
            className: P(`framer-zZ6b9`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: u }),
          });
        }),
        [
          `.framer-zZ6b9 { -webkit-mask: ${Kt}; aspect-ratio: 1; display: block; mask: ${Kt}; width: 24px; }`,
        ],
        `framer-zZ6b9`
      )),
      (Qt.displayName = `Chats Teardrop`),
      ($t = Qt),
      A(Qt, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: K.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: K.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: K.Number,
        },
      }));
  }),
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un = e(() => {
    (y(),
      B(),
      w(),
      (tn = `var(--framer-icon-mask)`),
      (nn = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (rn = E.create(nn)),
      (an = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(rn, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (on = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 17.25 C 0 16.007 1.007 15 2.25 15 L 15 15 L 15 0 L 2.25 0 C 1.007 0 0 1.007 0 2.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="17.25px" id="rwSjL0zxZ" transform="translate(4.5 3)" width="15px"/><path d="M 0 17.25 C 0 16.007 1.007 15 2.25 15 L 15 15 L 15 0 L 2.25 0 C 1.007 0 0 1.007 0 2.25 Z" fill="transparent" height="17.25px" id="uGzgr0vL7" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 3)" width="15px"/><path d="M 0 0 L 0 0.75 L 13.5 0.75" fill="transparent" height="1px" id="J0wY0mdtc" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 20.25)" width="13.5px"/></svg>`),
      (sn = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (cn = L(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = sn(e),
            u = pe(`147218253`, on);
          return f(an, {
            ...l,
            className: P(`framer-RRogn`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: u }),
          });
        }),
        [
          `.framer-RRogn { -webkit-mask: ${tn}; aspect-ratio: 1; display: block; mask: ${tn}; width: 24px; }`,
        ],
        `framer-RRogn`
      )),
      (cn.displayName = `Book`),
      (ln = cn),
      A(cn, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: K.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: K.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: K.Number,
        },
      }));
  }),
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn = e(() => {
    (y(),
      B(),
      w(),
      (dn = `var(--framer-icon-mask)`),
      (fn = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (pn = E.create(fn)),
      (mn = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(pn, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (hn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 8.25 0 L 8.25 0 L 8.25 8.25 L 8.25 8.25 L 0.75 8.25 C 0.336 8.25 0 7.914 0 7.5 L 0 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="8.25px" id="oVQ7pEgHl" transform="translate(3.75 12)" width="8.25px"/><path d="M 0 0 L 7.5 0 C 7.914 0 8.25 0.336 8.25 0.75 L 8.25 8.25 L 8.25 8.25 L 0 8.25 L 0 8.25 L 0 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="8.25px" id="h7nvme8km" transform="translate(12 3.75)" width="8.25px"/><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 15.75 0 C 16.164 0 16.5 0.336 16.5 0.75 L 16.5 15.75 C 16.5 16.164 16.164 16.5 15.75 16.5 Z" fill="transparent" height="16.5px" id="jkPsZm9o6" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 3.75)" width="16.5px"/><path d="M 0 0 L 0 16.5" fill="transparent" height="16.5px" id="VkglngyMF" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 3.75)" width="1px"/><path d="M 16.5 0 L 0 0" fill="transparent" height="1px" id="Yh2SyUmWC" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px"/></svg>`),
      (gn = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (_n = L(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = gn(e),
            u = pe(`2356269583`, hn);
          return f(mn, {
            ...l,
            className: P(`framer-dev0M`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: u }),
          });
        }),
        [
          `.framer-dev0M { -webkit-mask: ${dn}; aspect-ratio: 1; display: block; mask: ${dn}; width: 24px; }`,
        ],
        `framer-dev0M`
      )),
      (_n.displayName = `Checkerboard`),
      (vn = _n),
      A(_n, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: K.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: K.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: K.Number,
        },
      }));
  });
function bn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn = e(() => {
    (y(),
      B(),
      k(),
      w(),
      ze(),
      Ke(),
      (xn = z(Ge)),
      (Sn = [`M8KmevMog`, `vMPr9zRFK`]),
      (Cn = `framer-jQAZg`),
      (wn = { M8KmevMog: `framer-v-1hnihx6`, vMPr9zRFK: `framer-v-1qpo5ls` }),
      (Tn = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (En = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Dn = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (On = { Dark: `M8KmevMog`, Light: `vMPr9zRFK` }),
      (kn = E.create(s)),
      (An = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: On[r.variant] ?? r.variant ?? `M8KmevMog`,
      })),
      (jn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Mn = L(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: s } = U(),
            c = ke(),
            { style: l, className: u, layoutId: d, variant: p, ...m } = An(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: ee,
              isLoading: y,
              setGestureState: b,
              setVariant: te,
              variants: ne,
            } = Pe({
              cycleOrder: Sn,
              defaultVariant: `M8KmevMog`,
              ref: r,
              variant: p,
              variantClassNames: wn,
            }),
            x = jn(e, ne),
            S = P(Cn);
          return (
            Ie(),
            f(O, {
              id: d ?? i,
              children: f(kn, {
                animate: ne,
                initial: !1,
                children: f(Dn, {
                  value: Tn,
                  children: f(E.div, {
                    ...m,
                    ...v,
                    className: P(S, `framer-1hnihx6`, u, g),
                    "data-framer-name": `Dark`,
                    layoutDependency: x,
                    layoutId: `M8KmevMog`,
                    ref: r,
                    style: { ...l },
                    ...bn({ vMPr9zRFK: { "data-framer-name": `Light` } }, h, ee),
                    children: f(R, {
                      links: [
                        { href: { webPageId: `MTMcCw60K` }, implicitPathVariables: void 0 },
                        { href: { webPageId: `MTMcCw60K` }, implicitPathVariables: void 0 },
                      ],
                      children: (e) =>
                        f(W, {
                          height: 46,
                          y: (c?.y || 0) + (0 + ((c?.height || 36) - 0 - 46) / 2),
                          children: f(F, {
                            className: `framer-pof013-container`,
                            layoutDependency: x,
                            layoutId: `J9Spn2XWs-container`,
                            nodeId: `J9Spn2XWs`,
                            rendersWithMotion: !0,
                            scopeId: `Dt9o5xL82`,
                            children: f(Ge, {
                              CKN5OFggn: !1,
                              D1jCD7MYH: `CONTACTER`,
                              he1rZ9XoP: Be,
                              height: `100%`,
                              id: `J9Spn2XWs`,
                              layoutId: `J9Spn2XWs`,
                              UpJIkfs85: e[0],
                              variant: En(`g0IuIchf1`),
                              width: `100%`,
                              ...bn(
                                { vMPr9zRFK: { UpJIkfs85: e[1], variant: En(`q9HtGXLkP`) } },
                                h,
                                ee
                              ),
                            }),
                          }),
                        }),
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-jQAZg.framer-1iplfb0, .framer-jQAZg .framer-1iplfb0 { display: block; }`,
          `.framer-jQAZg.framer-1hnihx6 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 300px; }`,
          `.framer-jQAZg .framer-pof013-container { flex: none; height: auto; position: relative; width: auto; }`,
        ],
        `framer-jQAZg`
      )),
      (Nn = Mn),
      (Mn.displayName = `Nav Buttons`),
      (Mn.defaultProps = { height: 36, width: 300 }),
      A(Mn, {
        variant: {
          options: [`M8KmevMog`, `vMPr9zRFK`],
          optionTitles: [`Dark`, `Light`],
          title: `Variant`,
          type: K.Enum,
        },
      }),
      G(Mn, [{ explicitInter: !0, fonts: [] }, ...xn], { supportsExplicitInterCodegen: !0 }),
      (Mn.loader = { load: (e, t) => (t.locale, Promise.allSettled([M(Ge, {}, t)])) }));
  }),
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un = e(() => {
    (y(),
      B(),
      w(),
      (Fn = `var(--framer-icon-mask)`),
      (In = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ln = E.create(In)),
      (Rn = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(Ln, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (zn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 8 0 L 4 4 L 0 0" fill="transparent" height="4px" id="o4RpECsKY" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(8 10)" width="8px"/></svg>`),
      (Bn = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Vn = L(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Bn(e),
            l = pe(`3164290856`, zn);
          return f(Rn, {
            ...c,
            className: P(`framer-AQ7xj`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-AQ7xj { -webkit-mask: ${Fn}; aspect-ratio: 1; display: block; mask: ${Fn}; width: 24px; }`,
        ],
        `framer-AQ7xj`
      )),
      (Vn.displayName = `Arrow Dropdown Caret Sort Select Arrow`),
      (Hn = Vn),
      A(Vn, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: K.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: K.Number,
        },
      }));
  });
function Wn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir = e(() => {
    (y(),
      B(),
      k(),
      w(),
      Un(),
      Ve(),
      qe(),
      (Gn = z(Hn)),
      (Kn = { hm0lKrjND: { hover: !0 }, LGAW2O3CF: { hover: !0 } }),
      (qn = [`LGAW2O3CF`, `tmbXyWeN0`, `hm0lKrjND`, `qcf8CCYAg`]),
      (Jn = `framer-RS1pk`),
      (Yn = {
        hm0lKrjND: `framer-v-1hl0le9`,
        LGAW2O3CF: `framer-v-lvn18r`,
        qcf8CCYAg: `framer-v-2tv2zx`,
        tmbXyWeN0: `framer-v-1meikh9`,
      }),
      (Xn = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Zn = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (Qn = {
        "Nav Active Mono": `tmbXyWeN0`,
        "Nav Active Sans": `qcf8CCYAg`,
        "Nav Default Mono": `LGAW2O3CF`,
        "Nav Default Sans": `hm0lKrjND`,
      }),
      ($n = E.create(s)),
      (er = ({
        click: e,
        color: t,
        dropdown: n,
        height: r,
        id: i,
        link: a,
        newTab: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        B30ekY9bs: o ?? l.B30ekY9bs,
        BecpQ4jip:
          t ??
          l.BecpQ4jip ??
          `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
        ceErLns57: n ?? l.ceErLns57 ?? !0,
        H1XldiJpn: s ?? l.H1XldiJpn ?? `Fonctionnalités`,
        HnojhQ8uj: e ?? l.HnojhQ8uj,
        OB_p8ibGQ: a ?? l.OB_p8ibGQ,
        variant: Qn[l.variant] ?? l.variant ?? `LGAW2O3CF`,
      })),
      (tr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (nr = L(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = U();
          ke();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              H1XldiJpn: m,
              OB_p8ibGQ: h,
              B30ekY9bs: g,
              ceErLns57: v,
              HnojhQ8uj: ee,
              BecpQ4jip: y,
              ...b
            } = er(e),
            {
              baseVariant: te,
              classNames: ne,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: w,
              isLoading: T,
              setGestureState: D,
              setVariant: k,
              variants: re,
            } = Pe({
              cycleOrder: qn,
              defaultVariant: `LGAW2O3CF`,
              enabledGestures: Kn,
              ref: r,
              variant: p,
              variantClassNames: Yn,
            }),
            A = tr(e, re),
            { activeVariantCallback: ie, delay: ae } = Ce(te),
            M = ie(async (...e) => {
              if ((D({ isPressed: !1 }), ee && (await ee(...e)) === !1)) return !1;
            }),
            N = P(Jn, We, Xe);
          return f(O, {
            id: d ?? i,
            children: f($n, {
              animate: re,
              initial: !1,
              children: f(Zn, {
                value: Xn,
                children: f(ue, {
                  href: h,
                  motionChild: !0,
                  nodeId: `LGAW2O3CF`,
                  openInNewTab: g,
                  scopeId: `ENLFYdmQi`,
                  smoothScroll: !0,
                  children: f(E.a, {
                    ...b,
                    ...S,
                    className: `${P(N, `framer-lvn18r`, u, ne)} framer-4c9ml`,
                    "data-framer-name": `Nav Default Mono`,
                    "data-highlight": !0,
                    layoutDependency: A,
                    layoutId: `LGAW2O3CF`,
                    onTap: M,
                    ref: r,
                    style: { ...l },
                    ...Wn(
                      {
                        "hm0lKrjND-hover": { "data-framer-name": void 0 },
                        "LGAW2O3CF-hover": { "data-framer-name": void 0 },
                        hm0lKrjND: { "data-framer-name": `Nav Default Sans` },
                        qcf8CCYAg: { "data-framer-name": `Nav Active Sans` },
                        tmbXyWeN0: { "data-framer-name": `Nav Active Mono` },
                      },
                      te,
                      w
                    ),
                    children: _(E.div, {
                      className: `framer-hv8xw7`,
                      "data-framer-name": `inner-container`,
                      layoutDependency: A,
                      layoutId: `k3UJHcPsl`,
                      children: [
                        f(j, {
                          __fromCanvasComponent: !0,
                          children: f(s, {
                            children: f(E.p, {
                              className: `framer-styles-preset-xjkrtz`,
                              "data-styles-preset": `lpw1HhEJv`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-BecpQ4jip-ENLFYdmQi))`,
                              },
                              children: `Fonctionnalités`,
                            }),
                          }),
                          className: `framer-ti6ctl`,
                          fonts: [`Inter`],
                          layoutDependency: A,
                          layoutId: `ecWmQzI1M`,
                          style: {
                            "--extracted-r6o4lv": `var(--variable-reference-BecpQ4jip-ENLFYdmQi)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            "--variable-reference-BecpQ4jip-ENLFYdmQi": y,
                            opacity: 0.7,
                          },
                          text: m,
                          variants: {
                            "hm0lKrjND-hover": { opacity: 1 },
                            "LGAW2O3CF-hover": { opacity: 1 },
                            hm0lKrjND: {
                              "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                            },
                            qcf8CCYAg: {
                              "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                              opacity: 1,
                            },
                            tmbXyWeN0: { opacity: 1 },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Wn(
                            {
                              hm0lKrjND: {
                                children: f(s, {
                                  children: f(E.p, {
                                    className: `framer-styles-preset-egyevz`,
                                    "data-styles-preset": `R0UISnK09`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                    },
                                    children: `Fonctionnalités`,
                                  }),
                                }),
                              },
                              qcf8CCYAg: {
                                children: f(s, {
                                  children: f(E.p, {
                                    className: `framer-styles-preset-egyevz`,
                                    "data-styles-preset": `R0UISnK09`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                    },
                                    children: `Fonctionnalités`,
                                  }),
                                }),
                              },
                            },
                            te,
                            w
                          ),
                        }),
                        v !== !1 &&
                          f(E.div, {
                            className: `framer-17w4glv`,
                            "data-framer-name": `icon`,
                            layoutDependency: A,
                            layoutId: `yqKAYyAtl`,
                            children:
                              v !== !1 &&
                              f(Hn, {
                                animated: !0,
                                className: `framer-9tctmf`,
                                layoutDependency: A,
                                layoutId: `tXJxsDjYL`,
                                style: { "--1ww558a": 1, "--4rxgx6": y, opacity: 0.6, rotate: 0 },
                                variants: {
                                  "hm0lKrjND-hover": { opacity: 1 },
                                  "LGAW2O3CF-hover": { opacity: 1, rotate: 0 },
                                  hm0lKrjND: { rotate: 0 },
                                  qcf8CCYAg: { opacity: 1, rotate: 180 },
                                  tmbXyWeN0: { opacity: 1, rotate: 180 },
                                },
                              }),
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-RS1pk.framer-4c9ml, .framer-RS1pk .framer-4c9ml { display: block; }`,
          `.framer-RS1pk.framer-lvn18r { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 20px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-RS1pk .framer-hv8xw7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-RS1pk .framer-ti6ctl { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-RS1pk .framer-17w4glv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 12px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 12px; }`,
          `.framer-RS1pk .framer-9tctmf { flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
          `.framer-RS1pk.framer-v-1meikh9 .framer-9tctmf { z-index: 1; }`,
          `.framer-RS1pk.framer-v-1hl0le9.framer-lvn18r, .framer-RS1pk.framer-v-2tv2zx.framer-lvn18r { height: min-content; overflow: visible; }`,
          `.framer-RS1pk.framer-v-1hl0le9 .framer-hv8xw7, .framer-RS1pk.framer-v-2tv2zx .framer-hv8xw7 { gap: 8px; }`,
          `.framer-RS1pk.framer-v-1hl0le9 .framer-17w4glv, .framer-RS1pk.framer-v-2tv2zx .framer-17w4glv { align-content: flex-start; align-items: flex-start; height: 20px; width: 20px; }`,
          `.framer-RS1pk.framer-v-1hl0le9 .framer-9tctmf, .framer-RS1pk.framer-v-2tv2zx .framer-9tctmf { height: var(--framer-aspect-ratio-supported, 23px); width: 22px; }`,
          ...He,
          ...Je,
        ],
        `framer-RS1pk`
      )),
      (rr = nr),
      (nr.displayName = `Menu Link`),
      (nr.defaultProps = { height: 20, width: 83 }),
      A(nr, {
        variant: {
          options: [`LGAW2O3CF`, `tmbXyWeN0`, `hm0lKrjND`, `qcf8CCYAg`],
          optionTitles: [
            `Nav Default Mono`,
            `Nav Active Mono`,
            `Nav Default Sans`,
            `Nav Active Sans`,
          ],
          title: `Variant`,
          type: K.Enum,
        },
        H1XldiJpn: {
          defaultValue: `Fonctionnalités`,
          displayTextArea: !1,
          title: `Title`,
          type: K.String,
        },
        onH1XldiJpnChange: { changes: `H1XldiJpn`, type: K.ChangeHandler },
        OB_p8ibGQ: { title: `Link`, type: K.Link },
        B30ekY9bs: { defaultValue: !1, title: `New Tab`, type: K.Boolean },
        onB30ekY9bsChange: { changes: `B30ekY9bs`, type: K.ChangeHandler },
        ceErLns57: { defaultValue: !0, title: `Dropdown`, type: K.Boolean },
        onceErLns57Change: { changes: `ceErLns57`, type: K.ChangeHandler },
        HnojhQ8uj: { title: `Click`, type: K.EventHandler },
        BecpQ4jip: {
          defaultValue: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)) /* {"name":"Heading-BG Light 1"} */`,
          title: `Color`,
          type: K.Color,
        },
      }),
      G(
        nr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Gn,
          ...N(Ue),
          ...N(Ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function ar(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr = e(() => {
    (y(),
      B(),
      k(),
      w(),
      ze(),
      Ve(),
      (or = z(Be)),
      (sr = { u2_IbHHPu: { hover: !0 } }),
      (cr = [`u2_IbHHPu`, `vCBzd4pIj`, `Uu7qJ8Suf`, `pUB5u3yLW`]),
      (lr = `framer-ulLkD`),
      (ur = {
        pUB5u3yLW: `framer-v-sibjwd`,
        u2_IbHHPu: `framer-v-ldl6c8`,
        Uu7qJ8Suf: `framer-v-matqpf`,
        vCBzd4pIj: `framer-v-dweluc`,
      }),
      (dr = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (fr = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (pr = {
        "Hamburger Dark Close": `vCBzd4pIj`,
        "Hamburger Light Close": `pUB5u3yLW`,
        "Hamburger Open": `Uu7qJ8Suf`,
        "large-fill-blue": `u2_IbHHPu`,
      }),
      (mr = E.create(s)),
      (hr = ({
        buttonText: e,
        click: t,
        height: n,
        id: r,
        link: i,
        newTab: a,
        width: o,
        ...s
      }) => ({
        ...s,
        CKN5OFggn: a ?? s.CKN5OFggn ?? !0,
        D1jCD7MYH: e ?? s.D1jCD7MYH ?? `Contacter`,
        gbJGVT2_f: t ?? s.gbJGVT2_f,
        UpJIkfs85: i ?? s.UpJIkfs85,
        variant: pr[s.variant] ?? s.variant ?? `u2_IbHHPu`,
      })),
      (gr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (_r = L(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = U();
          ke();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              D1jCD7MYH: m,
              UpJIkfs85: h,
              CKN5OFggn: g,
              gbJGVT2_f: v,
              ...ee
            } = hr(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: te,
              gestureHandlers: ne,
              gestureVariant: x,
              isLoading: S,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = Pe({
              cycleOrder: cr,
              defaultVariant: `u2_IbHHPu`,
              enabledGestures: sr,
              ref: r,
              variant: p,
              variantClassNames: ur,
            }),
            k = gr(e, D),
            { activeVariantCallback: re, delay: A } = Ce(y),
            ie = re(async (...e) => {
              if ((w({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
            }),
            ae = P(lr, We),
            M = () => ![`vCBzd4pIj`, `Uu7qJ8Suf`, `pUB5u3yLW`].includes(y),
            N = () => !![`vCBzd4pIj`, `Uu7qJ8Suf`, `pUB5u3yLW`].includes(y);
          return f(O, {
            id: d ?? i,
            children: f(mr, {
              animate: D,
              initial: !1,
              children: f(fr, {
                value: dr,
                children: f(ue, {
                  href: h,
                  motionChild: !0,
                  nodeId: `u2_IbHHPu`,
                  openInNewTab: g,
                  scopeId: `HebqLDVSx`,
                  smoothScroll: !0,
                  children: _(E.a, {
                    ...ee,
                    ...ne,
                    className: `${P(ae, `framer-ldl6c8`, u, b)} framer-1kuqq76`,
                    "data-framer-name": `large-fill-blue`,
                    "data-highlight": !0,
                    layoutDependency: k,
                    layoutId: `u2_IbHHPu`,
                    onTap: ie,
                    ref: r,
                    style: {
                      backdropFilter: `blur(40px)`,
                      borderBottomLeftRadius: 3,
                      borderBottomRightRadius: 3,
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                      opacity: 1,
                      WebkitBackdropFilter: `blur(40px)`,
                      ...l,
                    },
                    variants: { "u2_IbHHPu-hover": { opacity: 0.8 } },
                    ...ar(
                      {
                        "u2_IbHHPu-hover": { "data-framer-name": void 0 },
                        pUB5u3yLW: { "data-framer-name": `Hamburger Light Close` },
                        Uu7qJ8Suf: { "data-framer-name": `Hamburger Open` },
                        vCBzd4pIj: { "data-framer-name": `Hamburger Dark Close` },
                      },
                      y,
                      x
                    ),
                    children: [
                      M() &&
                        f(E.div, {
                          className: `framer-1q9a08h`,
                          "data-framer-name": `button-wrapper`,
                          layoutDependency: k,
                          layoutId: `vg3JRgw_W`,
                          style: {
                            backgroundColor: `var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, rgb(12, 17, 28))`,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                          },
                          children: f(E.div, {
                            className: `framer-1s4gmg`,
                            "data-framer-name": `text-wrapper`,
                            layoutDependency: k,
                            layoutId: `tO4VVEaW6`,
                            children: f(j, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(E.p, {
                                  className: `framer-styles-preset-xjkrtz`,
                                  "data-styles-preset": `lpw1HhEJv`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                  },
                                  children: `Contacter`,
                                }),
                              }),
                              className: `framer-7df9c1`,
                              fonts: [`Inter`],
                              layoutDependency: k,
                              layoutId: `Il4qU_XAw`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: m,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      _(E.div, {
                        className: `framer-bdtpvk`,
                        "data-framer-name": `icon`,
                        layoutDependency: k,
                        layoutId: `GSav3zBKR`,
                        style: {
                          backgroundColor: `var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, rgb(12, 17, 28))`,
                          borderBottomLeftRadius: 3,
                          borderBottomRightRadius: 3,
                          borderTopLeftRadius: 3,
                          borderTopRightRadius: 3,
                        },
                        variants: {
                          pUB5u3yLW: {
                            backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                          },
                          Uu7qJ8Suf: {
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                          },
                          vCBzd4pIj: {
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                          },
                        },
                        children: [
                          M() &&
                            f(Be, {
                              animated: !0,
                              className: `framer-1pf49gt`,
                              layoutDependency: k,
                              layoutId: `am9tTyFjw`,
                              style: {
                                "--szd5nr": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                              },
                            }),
                          M() &&
                            f(Be, {
                              animated: !0,
                              className: `framer-ci00r1`,
                              layoutDependency: k,
                              layoutId: `DaGtAHddc`,
                              style: {
                                "--szd5nr": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                              },
                            }),
                          N() &&
                            _(E.div, {
                              className: `framer-8rwc2j`,
                              "data-framer-name": `Hamburger`,
                              layoutDependency: k,
                              layoutId: `Io65RsAw8`,
                              children: [
                                N() &&
                                  f(E.div, {
                                    className: `framer-no026h`,
                                    layoutDependency: k,
                                    layoutId: `A_XMAIHpH`,
                                    style: {
                                      backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                      rotate: 0,
                                    },
                                    variants: {
                                      pUB5u3yLW: {
                                        backgroundColor: `var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, rgb(12, 17, 28))`,
                                        rotate: 0,
                                      },
                                      Uu7qJ8Suf: { rotate: 45 },
                                    },
                                  }),
                                N() &&
                                  f(E.div, {
                                    className: `framer-is2226`,
                                    layoutDependency: k,
                                    layoutId: `hp9V55jIm`,
                                    style: {
                                      backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                      rotate: 0,
                                    },
                                    variants: {
                                      pUB5u3yLW: {
                                        backgroundColor: `var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, rgb(12, 17, 28))`,
                                        rotate: 0,
                                      },
                                      Uu7qJ8Suf: { rotate: -45 },
                                    },
                                  }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ulLkD.framer-1kuqq76, .framer-ulLkD .framer-1kuqq76 { display: block; }`,
          `.framer-ulLkD.framer-ldl6c8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ulLkD .framer-1q9a08h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 13px 20px 14px 20px; position: relative; width: min-content; }`,
          `.framer-ulLkD .framer-1s4gmg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-ulLkD .framer-7df9c1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-ulLkD .framer-bdtpvk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 13px; position: relative; width: min-content; }`,
          `.framer-ulLkD .framer-1pf49gt { flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-ulLkD .framer-ci00r1 { aspect-ratio: 1 / 1; bottom: -20px; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: -20px; position: absolute; width: 16px; z-index: 1; }`,
          `.framer-ulLkD .framer-8rwc2j { flex: 1 0 0px; height: 1px; overflow: visible; position: relative; width: 1px; }`,
          `.framer-ulLkD .framer-no026h { flex: none; height: 1px; left: calc(50.00000000000002% - 22px / 2); overflow: visible; position: absolute; top: 0px; width: 22px; }`,
          `.framer-ulLkD .framer-is2226 { bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 22px / 2); overflow: visible; position: absolute; width: 22px; }`,
          `.framer-ulLkD.framer-v-dweluc.framer-ldl6c8, .framer-ulLkD.framer-v-matqpf.framer-ldl6c8, .framer-ulLkD.framer-v-sibjwd.framer-ldl6c8 { gap: 2px; height: 42px; width: 42px; }`,
          `.framer-ulLkD.framer-v-dweluc .framer-bdtpvk, .framer-ulLkD.framer-v-matqpf .framer-bdtpvk, .framer-ulLkD.framer-v-sibjwd .framer-bdtpvk { flex: 1 0 0px; flex-direction: column; gap: 6px; height: 100%; justify-content: center; padding: 10px; width: 1px; }`,
          `.framer-ulLkD.framer-v-dweluc .framer-8rwc2j, .framer-ulLkD.framer-v-sibjwd .framer-8rwc2j { flex: none; height: 10px; width: 100%; }`,
          `.framer-ulLkD.framer-v-matqpf .framer-8rwc2j { flex: none; height: 8px; width: 100%; }`,
          `.framer-ulLkD.framer-v-matqpf .framer-no026h { bottom: 3px; left: 0px; right: 0px; top: unset; width: unset; }`,
          `.framer-ulLkD.framer-v-matqpf .framer-is2226 { bottom: 3px; left: 0px; right: 0px; width: unset; }`,
          `.framer-ulLkD.framer-v-ldl6c8.hover .framer-1s4gmg { gap: 10px; }`,
          `.framer-ulLkD.framer-v-ldl6c8.hover .framer-1pf49gt { aspect-ratio: 1 / 1; position: absolute; right: -20px; top: -20px; z-index: 1; }`,
          `.framer-ulLkD.framer-v-ldl6c8.hover .framer-ci00r1 { bottom: unset; left: unset; position: relative; }`,
          ...He,
        ],
        `framer-ulLkD`
      )),
      (vr = _r),
      (_r.displayName = `Nav Icon`),
      (_r.defaultProps = { height: 42, width: 175.5 }),
      A(_r, {
        variant: {
          options: [`u2_IbHHPu`, `vCBzd4pIj`, `Uu7qJ8Suf`, `pUB5u3yLW`],
          optionTitles: [
            `large-fill-blue`,
            `Hamburger Dark Close`,
            `Hamburger Open`,
            `Hamburger Light Close`,
          ],
          title: `Variant`,
          type: K.Enum,
        },
        D1jCD7MYH: {
          defaultValue: `Contacter`,
          displayTextArea: !1,
          title: `Button Text`,
          type: K.String,
        },
        onD1jCD7MYHChange: { changes: `D1jCD7MYH`, type: K.ChangeHandler },
        UpJIkfs85: { title: `Link`, type: K.Link },
        CKN5OFggn: { defaultValue: !0, title: `New Tab`, type: K.Boolean },
        onCKN5OFggnChange: { changes: `CKN5OFggn`, type: K.ChangeHandler },
        gbJGVT2_f: { title: `Click`, type: K.EventHandler },
      }),
      G(
        _r,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...or,
          ...N(Ue),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function br(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr = e(() => {
    (y(),
      B(),
      k(),
      w(),
      yn(),
      Ze(),
      rt(),
      (xr = Ne(E.div)),
      (Sr = { BXTaJPxnf: { hover: !0 }, ZkdaeqPTB: { hover: !0 } }),
      (Cr = [`ZkdaeqPTB`, `BXTaJPxnf`]),
      (wr = `framer-y8foB`),
      (Tr = { BXTaJPxnf: `framer-v-16hqkvu`, ZkdaeqPTB: `framer-v-y4njon` }),
      (Er = { damping: 60, delay: 0, mass: 1, stiffness: 350, type: `spring` }),
      (Dr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (Or = { damping: 50, delay: 0.1, mass: 1, stiffness: 400, type: `spring` }),
      (kr = {
        effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
        repeat: !1,
        startDelay: 0.1,
        threshold: 0,
        tokenization: `line`,
        transition: { bounce: 0, delay: 0.075, duration: 0.5, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (Ar = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (jr = { Dark: `ZkdaeqPTB`, Light: `BXTaJPxnf` }),
      (Mr = E.create(s)),
      (Nr = ({ description: e, height: t, icon: n, id: r, link: i, title: a, width: o, ...s }) => ({
        ...s,
        AT6Jh_GO7: a ?? s.AT6Jh_GO7 ?? `Aperçu`,
        F4qEhfSwS: e ?? s.F4qEhfSwS ?? `Un aperçu de toutes nos expertises.`,
        variant: jr[s.variant] ?? s.variant ?? `ZkdaeqPTB`,
        Wp6Vx7niO: n ?? s.Wp6Vx7niO ?? vn,
        z8Sb34NeW: i ?? s.z8Sb34NeW,
      })),
      (Pr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Fr = L(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = U();
          ke();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              Wp6Vx7niO: m,
              AT6Jh_GO7: h,
              F4qEhfSwS: g,
              z8Sb34NeW: v,
              ...ee
            } = Nr(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: te,
              gestureHandlers: ne,
              gestureVariant: x,
              isLoading: S,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = Pe({
              cycleOrder: Cr,
              defaultVariant: `ZkdaeqPTB`,
              enabledGestures: Sr,
              ref: r,
              variant: p,
              variantClassNames: Tr,
            }),
            k = Pr(e, D),
            re = P(wr, it, et);
          return f(O, {
            id: d ?? i,
            children: f(Mr, {
              animate: D,
              initial: !1,
              children: f(Ar, {
                value: Er,
                children: f(ue, {
                  href: v,
                  motionChild: !0,
                  nodeId: `ZkdaeqPTB`,
                  openInNewTab: !1,
                  scopeId: `Qsm8wUlT5`,
                  smoothScroll: !0,
                  children: _(E.a, {
                    ...ee,
                    ...ne,
                    className: `${P(re, `framer-y4njon`, u, b)} framer-1hwgiw4`,
                    "data-border": !0,
                    "data-framer-name": `Dark`,
                    layoutDependency: k,
                    layoutId: `ZkdaeqPTB`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(47, 50, 61))`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      ...l,
                    },
                    variants: {
                      "BXTaJPxnf-hover": {
                        backgroundColor: `var(--token-ff130ec1-74be-4ca9-be0f-0fd9e9fd1fd4, rgba(12, 17, 28, 0.02))`,
                      },
                      "ZkdaeqPTB-hover": {
                        backgroundColor: `var(--token-f03c2579-9280-4bab-9aa8-33f99931bc8c, rgba(246, 247, 248, 0.1))`,
                      },
                      BXTaJPxnf: {
                        "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                      },
                    },
                    ...br(
                      {
                        "BXTaJPxnf-hover": { "data-framer-name": void 0 },
                        "ZkdaeqPTB-hover": { "data-framer-name": void 0 },
                        BXTaJPxnf: { "data-framer-name": `Light` },
                      },
                      y,
                      x
                    ),
                    children: [
                      f(xr, {
                        __framer__animate: { transition: Or },
                        __framer__animateOnce: !0,
                        __framer__enter: Dr,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-66v5j0`,
                        "data-framer-name": `icon`,
                        layoutDependency: k,
                        layoutId: `SHNH1vxvj`,
                        style: {
                          backgroundColor: `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(47, 50, 61))`,
                          borderBottomLeftRadius: 4,
                          borderBottomRightRadius: 4,
                          borderTopLeftRadius: 4,
                          borderTopRightRadius: 4,
                        },
                        variants: {
                          "BXTaJPxnf-hover": {
                            backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                          },
                          "ZkdaeqPTB-hover": {
                            backgroundColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 223, 226))`,
                          },
                          BXTaJPxnf: {
                            backgroundColor: `var(--token-ff130ec1-74be-4ca9-be0f-0fd9e9fd1fd4, rgba(12, 17, 28, 0.02))`,
                          },
                        },
                        children: f(Se, {
                          animated: !0,
                          className: `framer-1ydhs75`,
                          Component: m,
                          layoutDependency: k,
                          layoutId: `S_fe2ntpB`,
                          style: {
                            "--1m6trwb": 0,
                            "--21h8s6": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 223, 226))`,
                            "--pgex8v": 1,
                          },
                          variants: {
                            "BXTaJPxnf-hover": {
                              "--21h8s6": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                            },
                            "ZkdaeqPTB-hover": {
                              "--21h8s6": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(47, 50, 61))`,
                            },
                            BXTaJPxnf: {
                              "--21h8s6": `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                            },
                          },
                        }),
                      }),
                      _(E.div, {
                        className: `framer-x668i9`,
                        layoutDependency: k,
                        layoutId: `Q1H6ro0UW`,
                        children: [
                          f(j, {
                            __fromCanvasComponent: !0,
                            children: f(s, {
                              children: f(E.p, {
                                className: `framer-styles-preset-ar7l3c`,
                                "data-styles-preset": `VpaJFpv2y`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                },
                                children: `Aperçu`,
                              }),
                            }),
                            className: `framer-jnxtma`,
                            effect: kr,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `sQGNzgrS7`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: h,
                            variants: {
                              BXTaJPxnf: {
                                "--extracted-r6o4lv": `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...br(
                              {
                                BXTaJPxnf: {
                                  children: f(s, {
                                    children: f(E.p, {
                                      className: `framer-styles-preset-ar7l3c`,
                                      "data-styles-preset": `VpaJFpv2y`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28)))`,
                                      },
                                      children: `Aperçu`,
                                    }),
                                  }),
                                },
                              },
                              y,
                              x
                            ),
                          }),
                          f(j, {
                            __fromCanvasComponent: !0,
                            children: f(s, {
                              children: f(E.p, {
                                className: `framer-styles-preset-x65a7p`,
                                "data-styles-preset": `CiTq1jwtl`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(246, 247, 248, 0.5))`,
                                },
                                children: `Un aperçu de toutes nos expertises.`,
                              }),
                            }),
                            className: `framer-9idb6o`,
                            effect: kr,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `vAyhl9twf`,
                            style: {
                              "--extracted-r6o4lv": `rgba(246, 247, 248, 0.5)`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: g,
                            variants: {
                              "ZkdaeqPTB-hover": {
                                "--extracted-r6o4lv": `var(--token-90b3ff3d-fb76-4c24-a866-e3560b3367de, rgba(246, 247, 248, 0.7))`,
                              },
                              BXTaJPxnf: {
                                "--extracted-r6o4lv": `var(--token-26feb046-f3d8-41df-9abc-eaf6a0c62cfd, rgba(81, 85, 94, 0.75))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...br(
                              {
                                "ZkdaeqPTB-hover": {
                                  children: f(s, {
                                    children: f(E.p, {
                                      className: `framer-styles-preset-x65a7p`,
                                      "data-styles-preset": `CiTq1jwtl`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-90b3ff3d-fb76-4c24-a866-e3560b3367de, rgba(246, 247, 248, 0.7)))`,
                                      },
                                      children: `Un aperçu de toutes nos expertises.`,
                                    }),
                                  }),
                                },
                                BXTaJPxnf: {
                                  children: f(s, {
                                    children: f(E.p, {
                                      className: `framer-styles-preset-x65a7p`,
                                      "data-styles-preset": `CiTq1jwtl`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-26feb046-f3d8-41df-9abc-eaf6a0c62cfd, rgba(81, 85, 94, 0.75)))`,
                                      },
                                      children: `Un aperçu de toutes nos expertises.`,
                                    }),
                                  }),
                                },
                              },
                              y,
                              x
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-y8foB.framer-1hwgiw4, .framer-y8foB .framer-1hwgiw4 { display: block; }`,
          `.framer-y8foB.framer-y4njon { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px; position: relative; text-decoration: none; width: 374px; }`,
          `.framer-y8foB .framer-66v5j0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-y8foB .framer-1ydhs75 { flex: none; height: var(--framer-aspect-ratio-supported, 25px); position: relative; width: 24px; }`,
          `.framer-y8foB .framer-x668i9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-y8foB .framer-jnxtma, .framer-y8foB .framer-9idb6o { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...nt,
          ...Qe,
          `.framer-y8foB[data-border="true"]::after, .framer-y8foB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-y8foB`
      )),
      (Ir = Fr),
      (Fr.displayName = `Submenu Services`),
      (Fr.defaultProps = { height: 185, width: 373 }),
      A(Fr, {
        variant: {
          options: [`ZkdaeqPTB`, `BXTaJPxnf`],
          optionTitles: [`Dark`, `Light`],
          title: `Variant`,
          type: K.Enum,
        },
        Wp6Vx7niO: {
          defaultValue: {
            identifier: `module:X0BHGWKUt7CpOlQAtNiO/Daaj9gcpcDSJujTNhiGq/nbCay6N1C.js:default`,
            moduleId: `X0BHGWKUt7CpOlQAtNiO`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: K.VectorSetItem,
        },
        AT6Jh_GO7: {
          defaultValue: `Aperçu`,
          displayTextArea: !1,
          title: `Title`,
          type: K.String,
        },
        onAT6Jh_GO7Change: { changes: `AT6Jh_GO7`, type: K.ChangeHandler },
        F4qEhfSwS: {
          defaultValue: `Un aperçu de toutes nos expertises.`,
          displayTextArea: !1,
          title: `Description`,
          type: K.String,
        },
        onF4qEhfSwSChange: { changes: `F4qEhfSwS`, type: K.ChangeHandler },
        z8Sb34NeW: { title: `Link`, type: K.Link },
      }),
      G(
        Fr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...N(tt),
          ...N($e),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  J,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni = e(() => {
    (y(),
      B(),
      k(),
      w(),
      Gt(),
      en(),
      Re(),
      un(),
      yn(),
      Pn(),
      ir(),
      yr(),
      Lr(),
      (Rr = z(Ir)),
      (zr = z(rr)),
      (Br = z(Nn)),
      (Vr = z(vr)),
      (Hr = Ne(E.section)),
      (Ur = [
        `Rds65kd7G`,
        `Aa_Mso4sj`,
        `ph5cyjd0r`,
        `j2ZkIzmZ5`,
        `ioexg1bwD`,
        `QGi4tSnT3`,
        `HUL5bNcpK`,
        `XT8CL5xJB`,
        `NNc3L8Phx`,
        `BWrv1Oqa1`,
        `tatTXRRhC`,
      ]),
      (Wr = `framer-avScJ`),
      (Gr = {
        Aa_Mso4sj: `framer-v-xjg1sp`,
        BWrv1Oqa1: `framer-v-u1lc5z`,
        HUL5bNcpK: `framer-v-1x3yyu5`,
        ioexg1bwD: `framer-v-1xxcnhe`,
        j2ZkIzmZ5: `framer-v-1dz2dwy`,
        NNc3L8Phx: `framer-v-73ckyp`,
        ph5cyjd0r: `framer-v-zn3572`,
        QGi4tSnT3: `framer-v-ycfaa4`,
        Rds65kd7G: `framer-v-1skjxyw`,
        tatTXRRhC: `framer-v-quvtl`,
        XT8CL5xJB: `framer-v-7j1ncj`,
      }),
      (Kr = { damping: 60, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (qr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Jr = { damping: 60, delay: 0, mass: 1, stiffness: 350, type: `spring` }),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Yr = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (Xr = {
        "Desktop Dark": `Rds65kd7G`,
        "Desktop Hide": `ph5cyjd0r`,
        "Desktop Light": `Aa_Mso4sj`,
        "Phone Dark Open": `NNc3L8Phx`,
        "Phone Dark": `XT8CL5xJB`,
        "Phone Light Open": `tatTXRRhC`,
        "Phone Light": `BWrv1Oqa1`,
        "Tablet Dark Open": `ioexg1bwD`,
        "Tablet Dark": `j2ZkIzmZ5`,
        "Tablet Light Open": `HUL5bNcpK`,
        "Tablet Light": `QGi4tSnT3`,
      }),
      (Zr = E.create(s)),
      (Qr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Xr[r.variant] ?? r.variant ?? `Rds65kd7G`,
      })),
      ($r = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ei = L(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = U(),
            l = ke(),
            { style: u, className: d, layoutId: p, variant: m, ...h } = Qr(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: ee,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: te,
              setGestureState: ne,
              setVariant: x,
              variants: S,
            } = Pe({
              cycleOrder: Ur,
              defaultVariant: `Rds65kd7G`,
              ref: r,
              variant: m,
              variantClassNames: Gr,
            }),
            w = $r(e, S),
            { activeVariantCallback: T, delay: D } = Ce(g),
            k = T(async (...e) => {
              x(`ioexg1bwD`);
            }),
            re = T(async (...e) => {
              x(`j2ZkIzmZ5`);
            }),
            A = T(async (...e) => {
              x(`HUL5bNcpK`);
            }),
            ae = T(async (...e) => {
              x(`QGi4tSnT3`);
            }),
            M = T(async (...e) => {
              x(`NNc3L8Phx`);
            }),
            N = T(async (...e) => {
              x(`XT8CL5xJB`);
            }),
            oe = T(async (...e) => {
              x(`tatTXRRhC`);
            }),
            se = T(async (...e) => {
              x(`BWrv1Oqa1`);
            }),
            ce = P(Wr),
            I = () =>
              ![
                `j2ZkIzmZ5`,
                `ioexg1bwD`,
                `QGi4tSnT3`,
                `HUL5bNcpK`,
                `XT8CL5xJB`,
                `NNc3L8Phx`,
                `BWrv1Oqa1`,
                `tatTXRRhC`,
              ].includes(g);
          Ie();
          let L = () => ![`Aa_Mso4sj`, `QGi4tSnT3`, `BWrv1Oqa1`].includes(g),
            z = () => !![`Aa_Mso4sj`, `QGi4tSnT3`, `BWrv1Oqa1`].includes(g),
            le = () =>
              !![
                `j2ZkIzmZ5`,
                `ioexg1bwD`,
                `QGi4tSnT3`,
                `HUL5bNcpK`,
                `XT8CL5xJB`,
                `NNc3L8Phx`,
                `BWrv1Oqa1`,
                `tatTXRRhC`,
              ].includes(g),
            B = () => !![`ioexg1bwD`, `HUL5bNcpK`, `NNc3L8Phx`, `tatTXRRhC`].includes(g);
          return f(O, {
            id: p ?? i,
            children: f(Zr, {
              animate: S,
              initial: !1,
              children: f(Yr, {
                value: Jr,
                children: _(Hr, {
                  ...h,
                  ...y,
                  __framer__animate: { transition: Kr },
                  __framer__animateOnce: !1,
                  __framer__scrollDirection: { direction: `down`, target: qr },
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0.5,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: P(ce, `framer-1skjxyw`, d, v),
                  "data-framer-name": `Desktop Dark`,
                  layoutDependency: w,
                  layoutId: `Rds65kd7G`,
                  ref: r,
                  style: { opacity: 1, ...u },
                  variants: {
                    BWrv1Oqa1: { opacity: 1 },
                    HUL5bNcpK: { opacity: 1 },
                    ioexg1bwD: { opacity: 1 },
                    j2ZkIzmZ5: { opacity: 1 },
                    NNc3L8Phx: { opacity: 1 },
                    ph5cyjd0r: { opacity: 0 },
                    QGi4tSnT3: { opacity: 1 },
                    tatTXRRhC: { opacity: 1 },
                    XT8CL5xJB: { opacity: 1 },
                  },
                  ...q(
                    {
                      Aa_Mso4sj: { "data-framer-name": `Desktop Light` },
                      BWrv1Oqa1: { "data-framer-name": `Phone Light` },
                      HUL5bNcpK: { "data-framer-name": `Tablet Light Open` },
                      ioexg1bwD: { "data-framer-name": `Tablet Dark Open` },
                      j2ZkIzmZ5: { "data-framer-name": `Tablet Dark` },
                      NNc3L8Phx: { "data-framer-name": `Phone Dark Open` },
                      ph5cyjd0r: { __targetOpacity: 0, "data-framer-name": `Desktop Hide` },
                      QGi4tSnT3: { "data-framer-name": `Tablet Light` },
                      tatTXRRhC: { "data-framer-name": `Phone Light Open` },
                      XT8CL5xJB: { "data-framer-name": `Phone Dark` },
                    },
                    g,
                    b
                  ),
                  children: [
                    I() &&
                      f(E.div, {
                        className: `framer-8476et`,
                        "data-framer-name": `Sub-Services`,
                        layoutDependency: w,
                        layoutId: `Ls_KEdnB1`,
                        style: {
                          backgroundColor: `var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, rgb(12, 17, 28))`,
                        },
                        variants: {
                          Aa_Mso4sj: {
                            backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                          },
                        },
                        children: _(E.div, {
                          className: `framer-1la1r9v`,
                          "data-border": !0,
                          "data-framer-name": `Sub-Services`,
                          layoutDependency: w,
                          layoutId: `ZlhflLZYt`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(59, 62, 72))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                            opacity: 0,
                          },
                          variants: {
                            Aa_Mso4sj: {
                              "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                            },
                          },
                          children: [
                            f(R, {
                              links: [
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(W, {
                                  height: 185,
                                  width: `373.3333px`,
                                  y: (l?.y || 0) + -290 + 0 + 0 + 0,
                                  children: f(F, {
                                    className: `framer-13s8dpc-container`,
                                    layoutDependency: w,
                                    layoutId: `qKaFg8yNb-container`,
                                    nodeId: `qKaFg8yNb`,
                                    rendersWithMotion: !0,
                                    scopeId: `PfImLIZxm`,
                                    children: f(Ir, {
                                      AT6Jh_GO7: `Aperçu`,
                                      F4qEhfSwS: `Un aperçu de toutes nos expertises.`,
                                      height: `100%`,
                                      id: `qKaFg8yNb`,
                                      layoutId: `qKaFg8yNb`,
                                      style: { width: `100%` },
                                      variant: J(`ZkdaeqPTB`),
                                      width: `100%`,
                                      Wp6Vx7niO: vn,
                                      z8Sb34NeW: e[0],
                                      ...q(
                                        {
                                          Aa_Mso4sj: { variant: J(`BXTaJPxnf`), z8Sb34NeW: e[1] },
                                          ph5cyjd0r: { z8Sb34NeW: e[2] },
                                        },
                                        g,
                                        b
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(R, {
                              links: [
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(W, {
                                  height: 185,
                                  width: `373.3333px`,
                                  y: (l?.y || 0) + -290 + 0 + 0 + 0,
                                  children: f(F, {
                                    className: `framer-n8b1hw-container`,
                                    layoutDependency: w,
                                    layoutId: `KkFLvtgEi-container`,
                                    nodeId: `KkFLvtgEi`,
                                    rendersWithMotion: !0,
                                    scopeId: `PfImLIZxm`,
                                    children: f(Ir, {
                                      AT6Jh_GO7: `Bookkeeping & Reporting`,
                                      F4qEhfSwS: `Clear, accurate books you can rely on.`,
                                      height: `100%`,
                                      id: `KkFLvtgEi`,
                                      layoutId: `KkFLvtgEi`,
                                      style: { width: `100%` },
                                      variant: J(`ZkdaeqPTB`),
                                      width: `100%`,
                                      Wp6Vx7niO: ln,
                                      z8Sb34NeW: e[0],
                                      ...q(
                                        {
                                          Aa_Mso4sj: { variant: J(`BXTaJPxnf`), z8Sb34NeW: e[1] },
                                          ph5cyjd0r: { z8Sb34NeW: e[2] },
                                        },
                                        g,
                                        b
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(R, {
                              links: [
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(W, {
                                  height: 185,
                                  width: `373.3333px`,
                                  y: (l?.y || 0) + -290 + 0 + 0 + 0,
                                  children: f(F, {
                                    className: `framer-10ma7ej-container`,
                                    layoutDependency: w,
                                    layoutId: `QiZseyhrq-container`,
                                    nodeId: `QiZseyhrq`,
                                    rendersWithMotion: !0,
                                    scopeId: `PfImLIZxm`,
                                    children: f(Ir, {
                                      AT6Jh_GO7: `Tax Preparation & Compliance`,
                                      F4qEhfSwS: `Stress-free filings done right and on time.`,
                                      height: `100%`,
                                      id: `QiZseyhrq`,
                                      layoutId: `QiZseyhrq`,
                                      style: { width: `100%` },
                                      variant: J(`ZkdaeqPTB`),
                                      width: `100%`,
                                      Wp6Vx7niO: Wt,
                                      z8Sb34NeW: e[0],
                                      ...q(
                                        {
                                          Aa_Mso4sj: { variant: J(`BXTaJPxnf`), z8Sb34NeW: e[1] },
                                          ph5cyjd0r: { z8Sb34NeW: e[2] },
                                        },
                                        g,
                                        b
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(R, {
                              links: [
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(W, {
                                  height: 185,
                                  width: `373.3333px`,
                                  y: (l?.y || 0) + -290 + 0 + 0 + 185,
                                  children: f(F, {
                                    className: `framer-5sjmof-container`,
                                    layoutDependency: w,
                                    layoutId: `p_ICnRN3g-container`,
                                    nodeId: `p_ICnRN3g`,
                                    rendersWithMotion: !0,
                                    scopeId: `PfImLIZxm`,
                                    children: f(Ir, {
                                      AT6Jh_GO7: `Payroll Management`,
                                      F4qEhfSwS: `Smooth, dependable payroll for your team.`,
                                      height: `100%`,
                                      id: `p_ICnRN3g`,
                                      layoutId: `p_ICnRN3g`,
                                      style: { width: `100%` },
                                      variant: J(`ZkdaeqPTB`),
                                      width: `100%`,
                                      Wp6Vx7niO: Le,
                                      z8Sb34NeW: e[0],
                                      ...q(
                                        {
                                          Aa_Mso4sj: { variant: J(`BXTaJPxnf`), z8Sb34NeW: e[1] },
                                          ph5cyjd0r: { z8Sb34NeW: e[2] },
                                        },
                                        g,
                                        b
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(R, {
                              links: [
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `sWaqIejCT` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(W, {
                                  height: 185,
                                  width: `373.3333px`,
                                  y: (l?.y || 0) + -290 + 0 + 0 + 185,
                                  children: f(F, {
                                    className: `framer-88hk44-container`,
                                    layoutDependency: w,
                                    layoutId: `VftWumhAn-container`,
                                    nodeId: `VftWumhAn`,
                                    rendersWithMotion: !0,
                                    scopeId: `PfImLIZxm`,
                                    children: f(Ir, {
                                      AT6Jh_GO7: `Financial Advisory`,
                                      F4qEhfSwS: `Guidance that brings clarity to every decision.`,
                                      height: `100%`,
                                      id: `VftWumhAn`,
                                      layoutId: `VftWumhAn`,
                                      style: { width: `100%` },
                                      variant: J(`ZkdaeqPTB`),
                                      width: `100%`,
                                      Wp6Vx7niO: $t,
                                      z8Sb34NeW: e[0],
                                      ...q(
                                        {
                                          Aa_Mso4sj: { variant: J(`BXTaJPxnf`), z8Sb34NeW: e[1] },
                                          ph5cyjd0r: { z8Sb34NeW: e[2] },
                                        },
                                        g,
                                        b
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      }),
                    f(E.div, {
                      className: `framer-1cil0j4`,
                      "data-border": !0,
                      "data-framer-name": `Main Nav`,
                      layoutDependency: w,
                      layoutId: `bWjDjvvKk`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(59, 62, 72))`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, rgb(12, 17, 28))`,
                      },
                      variants: {
                        Aa_Mso4sj: {
                          "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                          backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                        },
                        BWrv1Oqa1: {
                          "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                          "--border-top-width": `1px`,
                          backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                        },
                        HUL5bNcpK: { "--border-top-width": `1px` },
                        ioexg1bwD: { "--border-top-width": `1px` },
                        j2ZkIzmZ5: { "--border-top-width": `1px` },
                        NNc3L8Phx: { "--border-top-width": `1px` },
                        QGi4tSnT3: {
                          "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                          "--border-top-width": `1px`,
                          backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                        },
                        tatTXRRhC: { "--border-top-width": `1px` },
                        XT8CL5xJB: { "--border-top-width": `1px` },
                      },
                      children: _(E.div, {
                        className: `framer-7uk9th`,
                        "data-border": !0,
                        "data-framer-name": `Inner`,
                        layoutDependency: w,
                        layoutId: `amKY6DDTX`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(59, 62, 72))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, rgb(12, 17, 28))`,
                        },
                        variants: {
                          Aa_Mso4sj: {
                            "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                            backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                          },
                          BWrv1Oqa1: {
                            "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                            backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                          },
                          QGi4tSnT3: {
                            "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                            backgroundColor: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                          },
                        },
                        children: [
                          f(ue, {
                            href: { webPageId: `augiA20Il` },
                            motionChild: !0,
                            nodeId: `bhIE5R_5R`,
                            scopeId: `PfImLIZxm`,
                            children: _(E.a, {
                              className: `framer-1oztasb framer-n1piwq`,
                              "data-framer-name": `logo-container`,
                              layoutDependency: w,
                              layoutId: `bhIE5R_5R`,
                              children: [
                                L() &&
                                  f(ie, {
                                    className: `framer-2btf87`,
                                    "data-framer-name": `Vector`,
                                    fill: `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                                    intrinsicHeight: 43,
                                    intrinsicWidth: 48,
                                    layoutDependency: w,
                                    layoutId: `e49ebVbIA`,
                                    svg: `<svg width="48" height="43" viewBox="0 0 48 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.4491 35.5224C38.604 34.5863 37.8872 33.5418 37.3176 32.4165C36.4178 30.6527 35.174 29.0868 33.6597 27.8113C32.1454 26.5357 30.3911 25.576 28.5002 24.9889C26.8467 24.4777 25.1165 24.2607 23.388 24.3478C24.646 24.2759 25.8848 24.6821 26.856 25.4851C27.8272 26.2881 28.4592 27.4285 28.6251 28.6777C29.08 31.3771 30.2762 33.8968 32.0803 35.9554C33.8843 38.014 36.2252 39.5304 38.8413 40.3354C41.8328 41.2548 45.0383 41.2053 48 40.1938C44.701 39.6557 41.6845 38.0078 39.4491 35.5224Z" fill="white"/>
<path d="M18.1014 24.5143C18.4858 26.2034 19.1621 27.8124 20.0997 29.269C19.415 28.2113 19.1515 26.9355 19.3611 25.6931C19.5707 24.4506 20.2383 23.3319 21.232 22.5575C23.3426 20.8115 24.9272 18.5139 25.8092 15.9205C26.6912 13.3271 26.8361 10.5397 26.2277 7.8689C25.5332 4.81352 23.8859 2.05799 21.5234 0C22.6996 3.14431 22.7672 6.59606 21.7149 9.78408C21.3121 10.9877 20.7522 12.1328 20.0497 13.1898C18.9711 14.8502 18.2364 16.7102 17.8888 18.6596C17.5413 20.609 17.5881 22.6083 18.0265 24.5393L18.1014 24.5143Z" fill="white"/>
<path d="M26.0525 29.6104C25.486 30.7367 24.5148 31.6072 23.3335 32.0473C22.1522 32.4875 20.8482 32.4647 19.683 31.9835C17.1151 31.0211 14.3302 30.7918 11.6395 31.3211C8.94876 31.8505 6.45824 33.1177 4.44623 34.9812C2.15214 37.1156 0.595152 39.9235 0 43C2.13474 40.4085 5.08943 38.6226 8.37608 37.9373C9.61085 37.6845 10.8723 37.5866 12.1312 37.6458C14.1059 37.7482 16.081 37.4538 17.9401 36.7802C19.799 36.1066 21.5043 35.0674 22.9551 33.7239C24.2249 32.5446 25.2787 31.1525 26.0691 29.6104H26.0525Z" fill="white"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                f(E.div, {
                                  className: `framer-ouzf18`,
                                  "data-framer-name": `Text`,
                                  layoutDependency: w,
                                  layoutId: `NSXdkIy5r`,
                                  children: f(j, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(E.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7U3BlY3RyYWwtMzAw`,
                                          "--framer-font-family": `"Spectral", "Spectral Placeholder", serif`,
                                          "--framer-font-size": `22px`,
                                          "--framer-font-weight": `300`,
                                          "--framer-letter-spacing": `-0.025em`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                        },
                                        children: `Talentorz`,
                                      }),
                                    }),
                                    className: `framer-15dyygt`,
                                    fonts: [`GF;Spectral-300`],
                                    layoutDependency: w,
                                    layoutId: `kwJkAr9f3`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    variants: {
                                      Aa_Mso4sj: {
                                        "--extracted-r6o4lv": `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                      },
                                      BWrv1Oqa1: {
                                        "--extracted-r6o4lv": `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                      },
                                      QGi4tSnT3: {
                                        "--extracted-r6o4lv": `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                      },
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...q(
                                      {
                                        Aa_Mso4sj: {
                                          children: f(s, {
                                            children: f(E.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7U3BlY3RyYWwtMzAw`,
                                                "--framer-font-family": `"Spectral", "Spectral Placeholder", serif`,
                                                "--framer-font-size": `22px`,
                                                "--framer-font-weight": `300`,
                                                "--framer-letter-spacing": `-0.025em`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28)))`,
                                              },
                                              children: `Talentorz`,
                                            }),
                                          }),
                                        },
                                        BWrv1Oqa1: {
                                          children: f(s, {
                                            children: f(E.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7U3BlY3RyYWwtMzAw`,
                                                "--framer-font-family": `"Spectral", "Spectral Placeholder", serif`,
                                                "--framer-font-size": `22px`,
                                                "--framer-font-weight": `300`,
                                                "--framer-letter-spacing": `-0.025em`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28)))`,
                                              },
                                              children: `Talentorz`,
                                            }),
                                          }),
                                        },
                                        QGi4tSnT3: {
                                          children: f(s, {
                                            children: f(E.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7U3BlY3RyYWwtMzAw`,
                                                "--framer-font-family": `"Spectral", "Spectral Placeholder", serif`,
                                                "--framer-font-size": `22px`,
                                                "--framer-font-weight": `300`,
                                                "--framer-letter-spacing": `-0.025em`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28)))`,
                                              },
                                              children: `Talentorz`,
                                            }),
                                          }),
                                        },
                                      },
                                      g,
                                      b
                                    ),
                                  }),
                                }),
                                z() &&
                                  f(ie, {
                                    className: `framer-yo4wbs`,
                                    "data-framer-name": `Vector`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 43,
                                    intrinsicWidth: 48,
                                    layoutDependency: w,
                                    layoutId: `v8x5XuatN`,
                                    svg: `<svg width="48" height="43" viewBox="0 0 48 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.4491 35.5224C38.604 34.5863 37.8872 33.5418 37.3176 32.4165C36.4178 30.6527 35.174 29.0868 33.6597 27.8113C32.1454 26.5357 30.3911 25.576 28.5002 24.9889C26.8467 24.4777 25.1165 24.2607 23.388 24.3478C24.646 24.2759 25.8848 24.6821 26.856 25.4851C27.8272 26.2881 28.4592 27.4285 28.6251 28.6777C29.08 31.3771 30.2762 33.8968 32.0803 35.9554C33.8843 38.014 36.2252 39.5304 38.8413 40.3354C41.8328 41.2548 45.0383 41.2053 48 40.1938C44.701 39.6557 41.6845 38.0078 39.4491 35.5224Z" fill="#0C111C"/>
<path d="M18.1014 24.5143C18.4858 26.2034 19.1621 27.8124 20.0997 29.269C19.415 28.2113 19.1515 26.9355 19.3611 25.6931C19.5707 24.4506 20.2383 23.3319 21.232 22.5575C23.3426 20.8115 24.9272 18.5139 25.8092 15.9205C26.6912 13.3271 26.8361 10.5397 26.2277 7.8689C25.5332 4.81352 23.8859 2.05799 21.5234 0C22.6996 3.14431 22.7672 6.59606 21.7149 9.78408C21.3121 10.9877 20.7522 12.1328 20.0497 13.1898C18.9711 14.8502 18.2364 16.7102 17.8888 18.6596C17.5413 20.609 17.5881 22.6083 18.0265 24.5393L18.1014 24.5143Z" fill="#0C111C"/>
<path d="M26.0525 29.6104C25.486 30.7367 24.5148 31.6072 23.3335 32.0473C22.1522 32.4875 20.8482 32.4647 19.683 31.9835C17.1151 31.0211 14.3302 30.7918 11.6395 31.3211C8.94876 31.8505 6.45824 33.1177 4.44623 34.9812C2.15214 37.1156 0.595152 39.9235 0 43C2.13474 40.4085 5.08943 38.6226 8.37608 37.9373C9.61085 37.6845 10.8723 37.5866 12.1312 37.6458C14.1059 37.7482 16.081 37.4538 17.9401 36.7802C19.799 36.1066 21.5043 35.0674 22.9551 33.7239C24.2249 32.5446 25.2787 31.1525 26.0691 29.6104H26.0525Z" fill="#0C111C"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                              ],
                            }),
                          }),
                          I() &&
                            _(E.div, {
                              className: `framer-1w8dc6q`,
                              "data-framer-name": `link-container`,
                              layoutDependency: w,
                              layoutId: `NJuhQ9tVc`,
                              children: [
                                f(R, {
                                  links: [
                                    {
                                      href: { webPageId: `sWaqIejCT` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sWaqIejCT` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sWaqIejCT` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(W, {
                                      height: 20,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 23 + 2,
                                      children: f(F, {
                                        className: `framer-1pgou3j-container`,
                                        layoutDependency: w,
                                        layoutId: `sCqPZp22I-container`,
                                        nodeId: `sCqPZp22I`,
                                        rendersWithMotion: !0,
                                        scopeId: `PfImLIZxm`,
                                        children: f(rr, {
                                          B30ekY9bs: !1,
                                          BecpQ4jip: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                          ceErLns57: !1,
                                          H1XldiJpn: `services`,
                                          height: `100%`,
                                          id: `sCqPZp22I`,
                                          layoutId: `sCqPZp22I`,
                                          OB_p8ibGQ: e[0],
                                          variant: J(`LGAW2O3CF`),
                                          width: `100%`,
                                          ...q(
                                            {
                                              Aa_Mso4sj: {
                                                BecpQ4jip: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                                OB_p8ibGQ: e[1],
                                              },
                                              ph5cyjd0r: { OB_p8ibGQ: e[2] },
                                            },
                                            g,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                f(R, {
                                  links: [
                                    {
                                      href: { webPageId: `OJNA9hOdA` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `OJNA9hOdA` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `OJNA9hOdA` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(W, {
                                      height: 20,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 23 + 2,
                                      children: f(F, {
                                        className: `framer-k48afc-container`,
                                        layoutDependency: w,
                                        layoutId: `EwlFM_xuG-container`,
                                        nodeId: `EwlFM_xuG`,
                                        rendersWithMotion: !0,
                                        scopeId: `PfImLIZxm`,
                                        children: f(rr, {
                                          B30ekY9bs: !1,
                                          BecpQ4jip: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                          ceErLns57: !1,
                                          H1XldiJpn: `case studies`,
                                          height: `100%`,
                                          id: `EwlFM_xuG`,
                                          layoutId: `EwlFM_xuG`,
                                          OB_p8ibGQ: e[0],
                                          variant: J(`LGAW2O3CF`),
                                          width: `100%`,
                                          ...q(
                                            {
                                              Aa_Mso4sj: {
                                                BecpQ4jip: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                                OB_p8ibGQ: e[1],
                                              },
                                              ph5cyjd0r: { OB_p8ibGQ: e[2] },
                                            },
                                            g,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                f(R, {
                                  links: [
                                    {
                                      href: { webPageId: `lRq12lwdA` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `lRq12lwdA` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `lRq12lwdA` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(W, {
                                      height: 20,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 23 + 2,
                                      children: f(F, {
                                        className: `framer-hxoere-container`,
                                        layoutDependency: w,
                                        layoutId: `RfZh8GunF-container`,
                                        nodeId: `RfZh8GunF`,
                                        rendersWithMotion: !0,
                                        scopeId: `PfImLIZxm`,
                                        children: f(rr, {
                                          B30ekY9bs: !1,
                                          BecpQ4jip: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                          ceErLns57: !1,
                                          H1XldiJpn: `about`,
                                          height: `100%`,
                                          id: `RfZh8GunF`,
                                          layoutId: `RfZh8GunF`,
                                          OB_p8ibGQ: e[0],
                                          variant: J(`LGAW2O3CF`),
                                          width: `100%`,
                                          ...q(
                                            {
                                              Aa_Mso4sj: {
                                                BecpQ4jip: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                                OB_p8ibGQ: e[1],
                                              },
                                              ph5cyjd0r: { OB_p8ibGQ: e[2] },
                                            },
                                            g,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                f(R, {
                                  links: [
                                    {
                                      href: { webPageId: `WwYA376Vd` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WwYA376Vd` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WwYA376Vd` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(W, {
                                      height: 20,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 23 + 2,
                                      children: f(F, {
                                        className: `framer-12wtdwm-container`,
                                        layoutDependency: w,
                                        layoutId: `MnIiLJUYL-container`,
                                        nodeId: `MnIiLJUYL`,
                                        rendersWithMotion: !0,
                                        scopeId: `PfImLIZxm`,
                                        children: f(rr, {
                                          B30ekY9bs: !1,
                                          BecpQ4jip: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                          ceErLns57: !1,
                                          H1XldiJpn: `blog`,
                                          height: `100%`,
                                          id: `MnIiLJUYL`,
                                          layoutId: `MnIiLJUYL`,
                                          OB_p8ibGQ: e[0],
                                          variant: J(`LGAW2O3CF`),
                                          width: `100%`,
                                          ...q(
                                            {
                                              Aa_Mso4sj: {
                                                BecpQ4jip: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                                OB_p8ibGQ: e[1],
                                              },
                                              ph5cyjd0r: { OB_p8ibGQ: e[2] },
                                            },
                                            g,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          I() &&
                            f(W, {
                              height: 36,
                              y: (l?.y || 0) + 0 + 0 + 0 + 16,
                              children: f(F, {
                                className: `framer-1mkx88b-container`,
                                layoutDependency: w,
                                layoutId: `YryWYHztt-container`,
                                nodeId: `YryWYHztt`,
                                rendersWithMotion: !0,
                                scopeId: `PfImLIZxm`,
                                children: f(Nn, {
                                  height: `100%`,
                                  id: `YryWYHztt`,
                                  layoutId: `YryWYHztt`,
                                  variant: J(`M8KmevMog`),
                                  width: `100%`,
                                  ...q({ Aa_Mso4sj: { variant: J(`vMPr9zRFK`) } }, g, b),
                                }),
                              }),
                            }),
                          le() &&
                            f(E.div, {
                              className: `framer-18bwrha`,
                              "data-framer-name": `Mobile Nav`,
                              layoutDependency: w,
                              layoutId: `lu8QNZquo`,
                              children: f(W, {
                                height: 42,
                                ...q(
                                  {
                                    BWrv1Oqa1: { y: (l?.y || 0) + 0 + 0 + 0 + 8 + 0 },
                                    HUL5bNcpK: { y: (l?.y || 0) + 0 + 0 + 0 + 12 + 0 },
                                    ioexg1bwD: { y: (l?.y || 0) + 0 + 0 + 0 + 12 + 0 },
                                    j2ZkIzmZ5: { y: (l?.y || 0) + 0 + 0 + 0 + 12 + 0 },
                                    NNc3L8Phx: { y: (l?.y || 0) + 0 + 0 + 0 + 8 + 0 },
                                    QGi4tSnT3: { y: (l?.y || 0) + 0 + 0 + 0 + 12 + 0 },
                                    tatTXRRhC: { y: (l?.y || 0) + 0 + 0 + 0 + 8 + 0 },
                                    XT8CL5xJB: { y: (l?.y || 0) + 0 + 0 + 0 + 8 + 0 },
                                  },
                                  g,
                                  b
                                ),
                                children: f(F, {
                                  className: `framer-8vqk07-container`,
                                  layoutDependency: w,
                                  layoutId: `xZkFc2PQF-container`,
                                  nodeId: `xZkFc2PQF`,
                                  rendersWithMotion: !0,
                                  scopeId: `PfImLIZxm`,
                                  children: f(vr, {
                                    CKN5OFggn: !0,
                                    D1jCD7MYH: `menu`,
                                    height: `100%`,
                                    id: `xZkFc2PQF`,
                                    layoutId: `xZkFc2PQF`,
                                    variant: J(`u2_IbHHPu`),
                                    width: `100%`,
                                    ...q(
                                      {
                                        BWrv1Oqa1: { gbJGVT2_f: oe, variant: J(`pUB5u3yLW`) },
                                        HUL5bNcpK: { gbJGVT2_f: ae, variant: J(`Uu7qJ8Suf`) },
                                        ioexg1bwD: { gbJGVT2_f: re, variant: J(`Uu7qJ8Suf`) },
                                        j2ZkIzmZ5: { gbJGVT2_f: k, variant: J(`vCBzd4pIj`) },
                                        NNc3L8Phx: { gbJGVT2_f: N, variant: J(`Uu7qJ8Suf`) },
                                        QGi4tSnT3: { gbJGVT2_f: A, variant: J(`pUB5u3yLW`) },
                                        tatTXRRhC: { gbJGVT2_f: se, variant: J(`Uu7qJ8Suf`) },
                                        XT8CL5xJB: { gbJGVT2_f: M, variant: J(`vCBzd4pIj`) },
                                      },
                                      g,
                                      b
                                    ),
                                  }),
                                }),
                              }),
                            }),
                        ],
                      }),
                    }),
                    le() &&
                      f(E.div, {
                        className: `framer-6jh1c3`,
                        "data-framer-name": `Mobile Menu`,
                        layoutDependency: w,
                        layoutId: `pUXVM_kJ1`,
                        style: { opacity: 1 },
                        variants: {
                          BWrv1Oqa1: { opacity: 1 },
                          NNc3L8Phx: { opacity: 1 },
                          tatTXRRhC: { opacity: 1 },
                          XT8CL5xJB: { opacity: 0 },
                        },
                        children:
                          le() &&
                          _(E.div, {
                            className: `framer-15iqr66`,
                            "data-framer-name": `Mobile Menu`,
                            layoutDependency: w,
                            layoutId: `Vjky8p8HH`,
                            style: {
                              backgroundColor: `var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, rgb(12, 17, 28))`,
                            },
                            children: [
                              f(E.div, {
                                className: `framer-1j3xujy`,
                                "data-border": !0,
                                "data-framer-name": `Menu Item`,
                                layoutDependency: w,
                                layoutId: `HnZJ7l_hH`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(59, 62, 72))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                variants: {
                                  BWrv1Oqa1: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  HUL5bNcpK: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  ioexg1bwD: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  NNc3L8Phx: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  QGi4tSnT3: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                  tatTXRRhC: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  XT8CL5xJB: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                },
                                children: f(R, {
                                  links: [
                                    {
                                      href: { webPageId: `sWaqIejCT` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sWaqIejCT` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sWaqIejCT` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sWaqIejCT` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sWaqIejCT` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sWaqIejCT` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sWaqIejCT` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sWaqIejCT` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sWaqIejCT` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(W, {
                                      height: 20,
                                      ...q(
                                        {
                                          BWrv1Oqa1: {
                                            y: (l?.y || 0) + -570 + 0 + 0 + 0 + 0 + 24 + 0,
                                          },
                                          HUL5bNcpK: {
                                            y: (l?.y || 0) + 0 + 66 + 0 + 0 + 0 + 0 + 24 + 0,
                                          },
                                          ioexg1bwD: {
                                            y: (l?.y || 0) + 0 + 66 + 0 + 0 + 0 + 0 + 24 + 0,
                                          },
                                          j2ZkIzmZ5: {
                                            y:
                                              (l?.y || 0) +
                                              (l?.height || 66) -
                                              272 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              24 +
                                              0,
                                          },
                                          NNc3L8Phx: {
                                            y: (l?.y || 0) + 0 + 58 + 0 + 0 + 0 + 0 + 24 + 0,
                                          },
                                          QGi4tSnT3: {
                                            y: (l?.y || 0) + -562 + 0 + 0 + 0 + 0 + 24 + 0,
                                          },
                                          tatTXRRhC: {
                                            y: (l?.y || 0) + 0 + 58 + 0 + 0 + 0 + 0 + 24 + 0,
                                          },
                                          XT8CL5xJB: {
                                            y:
                                              (l?.y || 0) +
                                              (l?.height || 58) -
                                              272 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              24 +
                                              0,
                                          },
                                        },
                                        g,
                                        b
                                      ),
                                      children: f(F, {
                                        className: `framer-z8sx8i-container`,
                                        layoutDependency: w,
                                        layoutId: `VvuCpGOMu-container`,
                                        nodeId: `VvuCpGOMu`,
                                        rendersWithMotion: !0,
                                        scopeId: `PfImLIZxm`,
                                        children: f(rr, {
                                          B30ekY9bs: !1,
                                          BecpQ4jip: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                          ceErLns57: !1,
                                          H1XldiJpn: `Services`,
                                          height: `100%`,
                                          id: `VvuCpGOMu`,
                                          layoutId: `VvuCpGOMu`,
                                          OB_p8ibGQ: e[0],
                                          style: { height: `100%` },
                                          variant: J(`hm0lKrjND`),
                                          width: `100%`,
                                          ...q(
                                            {
                                              BWrv1Oqa1: { OB_p8ibGQ: e[7] },
                                              HUL5bNcpK: { OB_p8ibGQ: e[4] },
                                              ioexg1bwD: { OB_p8ibGQ: e[2] },
                                              j2ZkIzmZ5: { OB_p8ibGQ: e[1] },
                                              NNc3L8Phx: { OB_p8ibGQ: e[6] },
                                              QGi4tSnT3: { OB_p8ibGQ: e[3] },
                                              tatTXRRhC: { OB_p8ibGQ: e[8] },
                                              XT8CL5xJB: { OB_p8ibGQ: e[5] },
                                            },
                                            g,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                              B() &&
                                f(E.div, {
                                  className: `framer-11jvypq`,
                                  "data-border": !0,
                                  "data-framer-name": `Menu Item`,
                                  layoutDependency: w,
                                  layoutId: `pdpgJch8m`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(59, 62, 72))`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `0px`,
                                  },
                                  children: f(R, {
                                    links: [
                                      {
                                        href: { webPageId: `OJNA9hOdA` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `OJNA9hOdA` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `OJNA9hOdA` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `OJNA9hOdA` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `OJNA9hOdA` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(W, {
                                        height: 20,
                                        ...q(
                                          {
                                            HUL5bNcpK: {
                                              y: (l?.y || 0) + 0 + 66 + 0 + 0 + 0 + 68 + 24 + 0,
                                            },
                                            ioexg1bwD: {
                                              y: (l?.y || 0) + 0 + 66 + 0 + 0 + 0 + 68 + 24 + 0,
                                            },
                                            NNc3L8Phx: {
                                              y: (l?.y || 0) + 0 + 58 + 0 + 0 + 0 + 68 + 24 + 0,
                                            },
                                            tatTXRRhC: {
                                              y: (l?.y || 0) + 0 + 58 + 0 + 0 + 0 + 68 + 24 + 0,
                                            },
                                          },
                                          g,
                                          b
                                        ),
                                        children: f(F, {
                                          className: `framer-iocf01-container`,
                                          layoutDependency: w,
                                          layoutId: `FmtYGvKOv-container`,
                                          nodeId: `FmtYGvKOv`,
                                          rendersWithMotion: !0,
                                          scopeId: `PfImLIZxm`,
                                          children: f(rr, {
                                            B30ekY9bs: !1,
                                            BecpQ4jip: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                            ceErLns57: !1,
                                            H1XldiJpn: `Case Studies`,
                                            height: `100%`,
                                            id: `FmtYGvKOv`,
                                            layoutId: `FmtYGvKOv`,
                                            OB_p8ibGQ: e[0],
                                            style: { height: `100%` },
                                            variant: J(`hm0lKrjND`),
                                            width: `100%`,
                                            ...q(
                                              {
                                                HUL5bNcpK: { OB_p8ibGQ: e[2] },
                                                ioexg1bwD: { OB_p8ibGQ: e[1] },
                                                NNc3L8Phx: { OB_p8ibGQ: e[3] },
                                                tatTXRRhC: { OB_p8ibGQ: e[4] },
                                              },
                                              g,
                                              b
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                }),
                              f(E.div, {
                                className: `framer-1uot8qh`,
                                "data-border": !0,
                                "data-framer-name": `Menu Item`,
                                layoutDependency: w,
                                layoutId: `arsEj21VL`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(59, 62, 72))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                variants: {
                                  BWrv1Oqa1: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  HUL5bNcpK: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  ioexg1bwD: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  NNc3L8Phx: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  QGi4tSnT3: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                  tatTXRRhC: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  XT8CL5xJB: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                },
                                children: f(R, {
                                  links: [
                                    {
                                      href: { webPageId: `lRq12lwdA` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `lRq12lwdA` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `lRq12lwdA` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `lRq12lwdA` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `lRq12lwdA` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `lRq12lwdA` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `lRq12lwdA` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `lRq12lwdA` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `lRq12lwdA` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(W, {
                                      height: 20,
                                      ...q(
                                        {
                                          BWrv1Oqa1: {
                                            y: (l?.y || 0) + -570 + 0 + 0 + 0 + 68 + 24 + 0,
                                          },
                                          HUL5bNcpK: {
                                            y: (l?.y || 0) + 0 + 66 + 0 + 0 + 0 + 136 + 24 + 0,
                                          },
                                          ioexg1bwD: {
                                            y: (l?.y || 0) + 0 + 66 + 0 + 0 + 0 + 136 + 24 + 0,
                                          },
                                          j2ZkIzmZ5: {
                                            y:
                                              (l?.y || 0) +
                                              (l?.height || 66) -
                                              272 +
                                              0 +
                                              0 +
                                              0 +
                                              68 +
                                              24 +
                                              0,
                                          },
                                          NNc3L8Phx: {
                                            y: (l?.y || 0) + 0 + 58 + 0 + 0 + 0 + 136 + 24 + 0,
                                          },
                                          QGi4tSnT3: {
                                            y: (l?.y || 0) + -562 + 0 + 0 + 0 + 68 + 24 + 0,
                                          },
                                          tatTXRRhC: {
                                            y: (l?.y || 0) + 0 + 58 + 0 + 0 + 0 + 136 + 24 + 0,
                                          },
                                          XT8CL5xJB: {
                                            y:
                                              (l?.y || 0) +
                                              (l?.height || 58) -
                                              272 +
                                              0 +
                                              0 +
                                              0 +
                                              68 +
                                              24 +
                                              0,
                                          },
                                        },
                                        g,
                                        b
                                      ),
                                      children: f(F, {
                                        className: `framer-1hmxu5w-container`,
                                        layoutDependency: w,
                                        layoutId: `NWIvp3kpq-container`,
                                        nodeId: `NWIvp3kpq`,
                                        rendersWithMotion: !0,
                                        scopeId: `PfImLIZxm`,
                                        children: f(rr, {
                                          B30ekY9bs: !1,
                                          BecpQ4jip: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                          ceErLns57: !1,
                                          H1XldiJpn: `About`,
                                          height: `100%`,
                                          id: `NWIvp3kpq`,
                                          layoutId: `NWIvp3kpq`,
                                          OB_p8ibGQ: e[0],
                                          style: { height: `100%` },
                                          variant: J(`hm0lKrjND`),
                                          width: `100%`,
                                          ...q(
                                            {
                                              BWrv1Oqa1: { OB_p8ibGQ: e[7] },
                                              HUL5bNcpK: { OB_p8ibGQ: e[4] },
                                              ioexg1bwD: { OB_p8ibGQ: e[2] },
                                              j2ZkIzmZ5: { OB_p8ibGQ: e[1] },
                                              NNc3L8Phx: { OB_p8ibGQ: e[6] },
                                              QGi4tSnT3: { OB_p8ibGQ: e[3] },
                                              tatTXRRhC: { OB_p8ibGQ: e[8] },
                                              XT8CL5xJB: { OB_p8ibGQ: e[5] },
                                            },
                                            g,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                              f(E.div, {
                                className: `framer-1kj0txp`,
                                "data-border": !0,
                                "data-framer-name": `Menu Item`,
                                layoutDependency: w,
                                layoutId: `iC9iVXPk6`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(59, 62, 72))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                variants: {
                                  BWrv1Oqa1: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  HUL5bNcpK: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  ioexg1bwD: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  NNc3L8Phx: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  QGi4tSnT3: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                  tatTXRRhC: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  XT8CL5xJB: {
                                    backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                },
                                children: f(R, {
                                  links: [
                                    {
                                      href: { webPageId: `WwYA376Vd` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WwYA376Vd` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WwYA376Vd` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WwYA376Vd` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WwYA376Vd` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WwYA376Vd` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WwYA376Vd` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WwYA376Vd` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WwYA376Vd` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(W, {
                                      height: 20,
                                      ...q(
                                        {
                                          BWrv1Oqa1: {
                                            y: (l?.y || 0) + -570 + 0 + 0 + 0 + 136 + 24 + 0,
                                          },
                                          HUL5bNcpK: {
                                            y: (l?.y || 0) + 0 + 66 + 0 + 0 + 0 + 204 + 24 + 0,
                                          },
                                          ioexg1bwD: {
                                            y: (l?.y || 0) + 0 + 66 + 0 + 0 + 0 + 204 + 24 + 0,
                                          },
                                          j2ZkIzmZ5: {
                                            y:
                                              (l?.y || 0) +
                                              (l?.height || 66) -
                                              272 +
                                              0 +
                                              0 +
                                              0 +
                                              136 +
                                              24 +
                                              0,
                                          },
                                          NNc3L8Phx: {
                                            y: (l?.y || 0) + 0 + 58 + 0 + 0 + 0 + 204 + 24 + 0,
                                          },
                                          QGi4tSnT3: {
                                            y: (l?.y || 0) + -562 + 0 + 0 + 0 + 136 + 24 + 0,
                                          },
                                          tatTXRRhC: {
                                            y: (l?.y || 0) + 0 + 58 + 0 + 0 + 0 + 204 + 24 + 0,
                                          },
                                          XT8CL5xJB: {
                                            y:
                                              (l?.y || 0) +
                                              (l?.height || 58) -
                                              272 +
                                              0 +
                                              0 +
                                              0 +
                                              136 +
                                              24 +
                                              0,
                                          },
                                        },
                                        g,
                                        b
                                      ),
                                      children: f(F, {
                                        className: `framer-qmmbxi-container`,
                                        layoutDependency: w,
                                        layoutId: `g4j8fmX2s-container`,
                                        nodeId: `g4j8fmX2s`,
                                        rendersWithMotion: !0,
                                        scopeId: `PfImLIZxm`,
                                        children: f(rr, {
                                          B30ekY9bs: !1,
                                          BecpQ4jip: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                          ceErLns57: !1,
                                          H1XldiJpn: `Blog`,
                                          height: `100%`,
                                          id: `g4j8fmX2s`,
                                          layoutId: `g4j8fmX2s`,
                                          OB_p8ibGQ: e[0],
                                          style: { height: `100%` },
                                          variant: J(`hm0lKrjND`),
                                          width: `100%`,
                                          ...q(
                                            {
                                              BWrv1Oqa1: { OB_p8ibGQ: e[7] },
                                              HUL5bNcpK: { OB_p8ibGQ: e[4] },
                                              ioexg1bwD: { OB_p8ibGQ: e[2] },
                                              j2ZkIzmZ5: { OB_p8ibGQ: e[1] },
                                              NNc3L8Phx: { OB_p8ibGQ: e[6] },
                                              QGi4tSnT3: { OB_p8ibGQ: e[3] },
                                              tatTXRRhC: { OB_p8ibGQ: e[8] },
                                              XT8CL5xJB: { OB_p8ibGQ: e[5] },
                                            },
                                            g,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                              le() &&
                                f(E.div, {
                                  className: `framer-1n8m2oh`,
                                  "data-border": !0,
                                  "data-framer-name": `Menu Item`,
                                  layoutDependency: w,
                                  layoutId: `VfdPWxlRD`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(59, 62, 72))`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `0px`,
                                    backgroundColor: `var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, rgb(12, 17, 28))`,
                                  },
                                  children: f(R, {
                                    links: [
                                      {
                                        href: { webPageId: `MTMcCw60K` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `MTMcCw60K` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `MTMcCw60K` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `MTMcCw60K` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `MTMcCw60K` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `MTMcCw60K` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `MTMcCw60K` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `MTMcCw60K` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `MTMcCw60K` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(W, {
                                        height: 20,
                                        ...q(
                                          {
                                            BWrv1Oqa1: {
                                              y: (l?.y || 0) + -570 + 0 + 0 + 0 + 204 + 24 + 0,
                                            },
                                            HUL5bNcpK: {
                                              y: (l?.y || 0) + 0 + 66 + 0 + 0 + 0 + 272 + 24 + 0,
                                            },
                                            ioexg1bwD: {
                                              y: (l?.y || 0) + 0 + 66 + 0 + 0 + 0 + 272 + 24 + 0,
                                            },
                                            j2ZkIzmZ5: {
                                              y:
                                                (l?.y || 0) +
                                                (l?.height || 66) -
                                                272 +
                                                0 +
                                                0 +
                                                0 +
                                                204 +
                                                24 +
                                                0,
                                            },
                                            NNc3L8Phx: {
                                              y: (l?.y || 0) + 0 + 58 + 0 + 0 + 0 + 272 + 24 + 0,
                                            },
                                            QGi4tSnT3: {
                                              y: (l?.y || 0) + -562 + 0 + 0 + 0 + 204 + 24 + 0,
                                            },
                                            tatTXRRhC: {
                                              y: (l?.y || 0) + 0 + 58 + 0 + 0 + 0 + 272 + 24 + 0,
                                            },
                                            XT8CL5xJB: {
                                              y:
                                                (l?.y || 0) +
                                                (l?.height || 58) -
                                                272 +
                                                0 +
                                                0 +
                                                0 +
                                                204 +
                                                24 +
                                                0,
                                            },
                                          },
                                          g,
                                          b
                                        ),
                                        children: f(F, {
                                          className: `framer-tdo28c-container`,
                                          layoutDependency: w,
                                          layoutId: `DlYlINTgE-container`,
                                          nodeId: `DlYlINTgE`,
                                          rendersWithMotion: !0,
                                          scopeId: `PfImLIZxm`,
                                          children: f(rr, {
                                            B30ekY9bs: !1,
                                            BecpQ4jip: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                            ceErLns57: !1,
                                            H1XldiJpn: `Contact`,
                                            height: `100%`,
                                            id: `DlYlINTgE`,
                                            layoutId: `DlYlINTgE`,
                                            OB_p8ibGQ: e[0],
                                            style: { height: `100%` },
                                            variant: J(`hm0lKrjND`),
                                            width: `100%`,
                                            ...q(
                                              {
                                                BWrv1Oqa1: { OB_p8ibGQ: e[7] },
                                                HUL5bNcpK: { OB_p8ibGQ: e[4] },
                                                ioexg1bwD: { OB_p8ibGQ: e[2] },
                                                j2ZkIzmZ5: { OB_p8ibGQ: e[1] },
                                                NNc3L8Phx: { OB_p8ibGQ: e[6] },
                                                QGi4tSnT3: { OB_p8ibGQ: e[3] },
                                                tatTXRRhC: { OB_p8ibGQ: e[8] },
                                                XT8CL5xJB: { OB_p8ibGQ: e[5] },
                                              },
                                              g,
                                              b
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                }),
                            ],
                          }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-avScJ.framer-n1piwq, .framer-avScJ .framer-n1piwq { display: block; }`,
          `.framer-avScJ.framer-1skjxyw { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-avScJ .framer-8476et { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; top: -290px; }`,
          `.framer-avScJ .framer-1la1r9v { display: grid; flex: none; gap: 0px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1120px; }`,
          `.framer-avScJ .framer-13s8dpc-container, .framer-avScJ .framer-n8b1hw-container, .framer-avScJ .framer-10ma7ej-container, .framer-avScJ .framer-5sjmof-container, .framer-avScJ .framer-88hk44-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
          `.framer-avScJ .framer-1cil0j4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-avScJ .framer-7uk9th { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1320px; overflow: visible; padding: 16px 40px 16px 40px; position: relative; width: 1px; }`,
          `.framer-avScJ .framer-1oztasb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-avScJ .framer-2btf87, .framer-avScJ .framer-yo4wbs { aspect-ratio: 1.1162790697674418 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 18px; }`,
          `.framer-avScJ .framer-ouzf18 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-avScJ .framer-15dyygt { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-avScJ .framer-1w8dc6q { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 2px 24px 0px 46px; position: relative; width: 1px; }`,
          `.framer-avScJ .framer-1pgou3j-container, .framer-avScJ .framer-k48afc-container, .framer-avScJ .framer-hxoere-container, .framer-avScJ .framer-12wtdwm-container, .framer-avScJ .framer-1mkx88b-container, .framer-avScJ .framer-8vqk07-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-avScJ .framer-18bwrha { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 500px; }`,
          `.framer-avScJ .framer-6jh1c3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 200px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-avScJ .framer-15iqr66 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
          `.framer-avScJ .framer-1j3xujy, .framer-avScJ .framer-11jvypq, .framer-avScJ .framer-1uot8qh, .framer-avScJ .framer-1kj0txp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px; position: relative; width: 100%; }`,
          `.framer-avScJ .framer-z8sx8i-container, .framer-avScJ .framer-iocf01-container, .framer-avScJ .framer-1hmxu5w-container, .framer-avScJ .framer-qmmbxi-container, .framer-avScJ .framer-tdo28c-container { flex: none; height: 20px; position: relative; width: auto; }`,
          `.framer-avScJ .framer-1n8m2oh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-avScJ.framer-v-xjg1sp .framer-ouzf18, .framer-avScJ.framer-v-ycfaa4 .framer-ouzf18, .framer-avScJ.framer-v-u1lc5z .framer-ouzf18 { order: 2; }`,
          `.framer-avScJ.framer-v-xjg1sp .framer-yo4wbs, .framer-avScJ.framer-v-1xxcnhe .framer-11jvypq, .framer-avScJ.framer-v-ycfaa4 .framer-yo4wbs, .framer-avScJ.framer-v-1x3yyu5 .framer-11jvypq, .framer-avScJ.framer-v-u1lc5z .framer-yo4wbs { order: 1; }`,
          `.framer-avScJ.framer-v-1dz2dwy.framer-1skjxyw, .framer-avScJ.framer-v-ycfaa4.framer-1skjxyw { height: 66px; width: 810px; }`,
          `.framer-avScJ.framer-v-1dz2dwy .framer-1cil0j4, .framer-avScJ.framer-v-ycfaa4 .framer-1cil0j4 { order: 2; padding: 0px 24px 0px 24px; }`,
          `.framer-avScJ.framer-v-1dz2dwy .framer-7uk9th, .framer-avScJ.framer-v-1xxcnhe .framer-7uk9th, .framer-avScJ.framer-v-ycfaa4 .framer-7uk9th, .framer-avScJ.framer-v-1x3yyu5 .framer-7uk9th { padding: 12px 24px 12px 24px; }`,
          `.framer-avScJ.framer-v-1dz2dwy .framer-18bwrha, .framer-avScJ.framer-v-ycfaa4 .framer-18bwrha, .framer-avScJ.framer-v-7j1ncj .framer-18bwrha, .framer-avScJ.framer-v-73ckyp .framer-18bwrha, .framer-avScJ.framer-v-u1lc5z .framer-18bwrha, .framer-avScJ.framer-v-quvtl .framer-18bwrha { flex: 1 0 0px; width: 1px; }`,
          `.framer-avScJ.framer-v-1dz2dwy .framer-6jh1c3, .framer-avScJ.framer-v-7j1ncj .framer-6jh1c3 { bottom: 0px; left: 0px; min-height: unset; order: 0; position: absolute; right: 0px; width: unset; }`,
          `.framer-avScJ.framer-v-1dz2dwy .framer-1j3xujy, .framer-avScJ.framer-v-1dz2dwy .framer-1uot8qh, .framer-avScJ.framer-v-1dz2dwy .framer-1kj0txp, .framer-avScJ.framer-v-ycfaa4 .framer-1j3xujy, .framer-avScJ.framer-v-ycfaa4 .framer-1uot8qh, .framer-avScJ.framer-v-ycfaa4 .framer-1kj0txp, .framer-avScJ.framer-v-7j1ncj .framer-1j3xujy, .framer-avScJ.framer-v-7j1ncj .framer-1uot8qh, .framer-avScJ.framer-v-7j1ncj .framer-1kj0txp, .framer-avScJ.framer-v-73ckyp .framer-1j3xujy, .framer-avScJ.framer-v-73ckyp .framer-1uot8qh, .framer-avScJ.framer-v-73ckyp .framer-1kj0txp, .framer-avScJ.framer-v-u1lc5z .framer-1j3xujy, .framer-avScJ.framer-v-u1lc5z .framer-1uot8qh, .framer-avScJ.framer-v-u1lc5z .framer-1kj0txp, .framer-avScJ.framer-v-quvtl .framer-1j3xujy, .framer-avScJ.framer-v-quvtl .framer-1uot8qh, .framer-avScJ.framer-v-quvtl .framer-1kj0txp { z-index: 1; }`,
          `.framer-avScJ.framer-v-1xxcnhe.framer-1skjxyw, .framer-avScJ.framer-v-1x3yyu5.framer-1skjxyw { width: 810px; }`,
          `.framer-avScJ.framer-v-1xxcnhe .framer-1cil0j4, .framer-avScJ.framer-v-1x3yyu5 .framer-1cil0j4 { order: 1; padding: 0px 24px 0px 24px; }`,
          `.framer-avScJ.framer-v-1xxcnhe .framer-6jh1c3, .framer-avScJ.framer-v-1x3yyu5 .framer-6jh1c3, .framer-avScJ.framer-v-73ckyp .framer-6jh1c3, .framer-avScJ.framer-v-quvtl .framer-6jh1c3 { min-height: unset; order: 2; }`,
          `.framer-avScJ.framer-v-1xxcnhe .framer-1j3xujy, .framer-avScJ.framer-v-1x3yyu5 .framer-1j3xujy { order: 0; z-index: 1; }`,
          `.framer-avScJ.framer-v-1xxcnhe .framer-1uot8qh, .framer-avScJ.framer-v-1x3yyu5 .framer-1uot8qh { order: 2; z-index: 1; }`,
          `.framer-avScJ.framer-v-1xxcnhe .framer-1kj0txp, .framer-avScJ.framer-v-1x3yyu5 .framer-1kj0txp { order: 3; z-index: 1; }`,
          `.framer-avScJ.framer-v-1xxcnhe .framer-1n8m2oh, .framer-avScJ.framer-v-1x3yyu5 .framer-1n8m2oh { order: 4; }`,
          `.framer-avScJ.framer-v-ycfaa4 .framer-6jh1c3 { left: 0px; min-height: unset; order: 0; position: absolute; right: 0px; top: -562px; width: unset; }`,
          `.framer-avScJ.framer-v-7j1ncj.framer-1skjxyw, .framer-avScJ.framer-v-u1lc5z.framer-1skjxyw { height: 58px; width: 390px; }`,
          `.framer-avScJ.framer-v-7j1ncj .framer-1cil0j4, .framer-avScJ.framer-v-u1lc5z .framer-1cil0j4 { order: 2; padding: 0px 12px 0px 12px; }`,
          `.framer-avScJ.framer-v-7j1ncj .framer-7uk9th, .framer-avScJ.framer-v-73ckyp .framer-7uk9th, .framer-avScJ.framer-v-u1lc5z .framer-7uk9th, .framer-avScJ.framer-v-quvtl .framer-7uk9th { padding: 8px 18px 8px 24px; }`,
          `.framer-avScJ.framer-v-7j1ncj .framer-15iqr66, .framer-avScJ.framer-v-u1lc5z .framer-15iqr66 { padding: 0px 12px 0px 12px; width: 390px; }`,
          `.framer-avScJ.framer-v-73ckyp.framer-1skjxyw, .framer-avScJ.framer-v-quvtl.framer-1skjxyw { width: 390px; }`,
          `.framer-avScJ.framer-v-73ckyp .framer-1cil0j4, .framer-avScJ.framer-v-quvtl .framer-1cil0j4 { order: 1; padding: 0px 12px 0px 12px; }`,
          `.framer-avScJ.framer-v-73ckyp .framer-15iqr66, .framer-avScJ.framer-v-quvtl .framer-15iqr66 { padding: 0px 12px 0px 12px; }`,
          `.framer-avScJ.framer-v-u1lc5z .framer-6jh1c3 { left: 0px; min-height: unset; order: 0; position: absolute; right: 0px; top: -570px; width: unset; }`,
          `.framer-avScJ[data-border="true"]::after, .framer-avScJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-avScJ`
      )),
      (ti = ei),
      (ei.displayName = `Nav Bar`),
      (ei.defaultProps = { height: 68, width: 1200 }),
      A(ei, {
        variant: {
          options: [
            `Rds65kd7G`,
            `Aa_Mso4sj`,
            `ph5cyjd0r`,
            `j2ZkIzmZ5`,
            `ioexg1bwD`,
            `QGi4tSnT3`,
            `HUL5bNcpK`,
            `XT8CL5xJB`,
            `NNc3L8Phx`,
            `BWrv1Oqa1`,
            `tatTXRRhC`,
          ],
          optionTitles: [
            `Desktop Dark`,
            `Desktop Light`,
            `Desktop Hide`,
            `Tablet Dark`,
            `Tablet Dark Open`,
            `Tablet Light`,
            `Tablet Light Open`,
            `Phone Dark`,
            `Phone Dark Open`,
            `Phone Light`,
            `Phone Light Open`,
          ],
          title: `Variant`,
          type: K.Enum,
        },
      }),
      G(
        ei,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Spectral`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Spectral`,
                url: `../../assets/fonts/rnCs-xNNww_2s0amA9uSsF3DY_etWWIJ.woff2`,
                weight: `300`,
              },
            ],
          },
          ...Rr,
          ...zr,
          ...Br,
          ...Vr,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (ei.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([M(Ir, {}, t), M(rr, {}, t), M(Nn, {}, t), M(vr, {}, t)])
        ),
      }));
  }),
  ri,
  ii,
  ai,
  oi = e(() => {
    (B(),
      ce.loadFonts([]),
      (ri = [{ explicitInter: !0, fonts: [] }]),
      (ii = [
        `.framer-Lbkgp .framer-styles-preset-13kepjj:not(.rich-text-wrapper), .framer-Lbkgp .framer-styles-preset-13kepjj.rich-text-wrapper a { --framer-link-hover-text-color: rgba(246, 247, 248, 0.7); --framer-link-text-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8); transition-delay: 0s; transition-duration: 0.4s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (ai = `framer-Lbkgp`));
  }),
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi = e(() => {
    (y(),
      B(),
      w(),
      (si = `var(--framer-icon-mask)`),
      (ci = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (li = E.create(ci)),
      (ui = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(li, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (di = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 10 14 M 10 0 L 0 14" fill="transparent" height="14px" id="Qi8Lp_NLO" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(7 5)" width="10px"/></svg>`),
      (fi = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (pi = L(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = fi(e),
            l = pe(`2502894650`, di);
          return f(ui, {
            ...c,
            className: P(`framer-hM6J5`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-hM6J5 { -webkit-mask: ${si}; aspect-ratio: 1; display: block; mask: ${si}; width: 24px; }`,
        ],
        `framer-hM6J5`
      )),
      (pi.displayName = `Alphabet X`),
      (mi = pi),
      A(pi, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: K.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: K.Number,
        },
      }));
  }),
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi = e(() => {
    (y(),
      B(),
      w(),
      (gi = `var(--framer-icon-mask)`),
      (_i = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (vi = E.create(_i)),
      (yi = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(vi, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (bi = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 6 L 6 12 L 18 0" fill="transparent" height="12px" id="KVyKpRjev" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 6)" width="18px"/></svg>`),
      (xi = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Si = L(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = xi(e),
            l = pe(`1839610128`, bi);
          return f(yi, {
            ...c,
            className: P(`framer-MO1L3`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-MO1L3 { -webkit-mask: ${gi}; aspect-ratio: 1; display: block; mask: ${gi}; width: 24px; }`,
        ],
        `framer-MO1L3`
      )),
      (Si.displayName = `Check Good`),
      (Ci = Si),
      A(Si, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: K.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: K.Number,
        },
      }));
  }),
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni = e(() => {
    (y(),
      B(),
      w(),
      (Ti = `var(--framer-icon-mask)`),
      (Ei = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Di = E.create(Ei)),
      (Oi = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(Di, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (ki = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 11.314 0 L 0 11.314" fill="transparent" height="11.31375px" id="OfxNkG6z8" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="var(--fbr8zx, 1.5)" stroke="var(--34440n, rgb(0, 0, 0))" transform="translate(6.343 6.343)" width="11.31366px"/><path d="M 10.834 10.834 L 10.834 1.538 C 10.835 1.336 10.795 1.136 10.718 0.949 C 10.641 0.762 10.528 0.592 10.385 0.449 C 10.242 0.306 10.072 0.192 9.885 0.115 C 9.698 0.038 9.498 -0.001 9.295 0 L 0 0" fill="transparent" height="10.833733225805112px" id="cf72FqlEm" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--fbr8zx, 1.5)" stroke="var(--34440n, rgb(0, 0, 0))" transform="translate(7.267 5.899)" width="10.833715152736417px"/></svg>`),
      (Ai = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        htQyJXMKW: i ?? a.htQyJXMKW ?? 1.5,
        jDue3c8Jy: e ?? a.jDue3c8Jy ?? `rgb(0, 0, 0)`,
      })),
      (ji = L(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              jDue3c8Jy: o,
              htQyJXMKW: s,
              ...c
            } = Ai(e),
            l = pe(`933102033`, ki);
          return f(Oi, {
            ...c,
            className: P(`framer-UYIEC`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--34440n": o, "--fbr8zx": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-UYIEC { -webkit-mask: ${Ti}; aspect-ratio: 1; display: block; mask: ${Ti}; width: 24px; }`,
        ],
        `framer-UYIEC`
      )),
      (ji.displayName = `Arrow Up Right`),
      (Mi = ji),
      A(ji, {
        jDue3c8Jy: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: K.Color },
        htQyJXMKW: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 8,
          min: 1,
          title: `Width`,
          type: K.Number,
        },
      }));
  });
function Pi(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi = e(() => {
    (y(),
      B(),
      k(),
      w(),
      hi(),
      wi(),
      Ni(),
      (Fi = z(Mi)),
      (Ii = { X9H81tzVz: { hover: !0 } }),
      (Li = [`X9H81tzVz`, `I3GF4KzSK`, `rGI6BaOMq`, `Ce4iaI8cr`]),
      (Ri = `framer-foJrc`),
      (zi = {
        Ce4iaI8cr: `framer-v-1y8papx`,
        I3GF4KzSK: `framer-v-x3ppu6`,
        rGI6BaOMq: `framer-v-3f1jfm`,
        X9H81tzVz: `framer-v-2r2t9z`,
      }),
      (Bi = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Vi = (e, t) => `translate(-50%, -50%) ${t}`),
      (Hi = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (Ui = {
        Default: `X9H81tzVz`,
        Disabled: `I3GF4KzSK`,
        Error: `Ce4iaI8cr`,
        Success: `rGI6BaOMq`,
      }),
      (Wi = E.create(s)),
      (Gi = ({ color: e, fill: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        bZkxe3HHi:
          e ??
          a.bZkxe3HHi ??
          `var(--token-3bacfb60-2898-4cf8-b6ee-027ac8520a73, rgb(255, 255, 255))`,
        PLPy8Quoc: t ?? a.PLPy8Quoc ?? `rgba(255, 255, 255, 0.2)`,
        variant: Ui[a.variant] ?? a.variant ?? `X9H81tzVz`,
      })),
      (Ki = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (qi = L(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: s } = U();
          ke();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              bZkxe3HHi: p,
              PLPy8Quoc: m,
              ...h
            } = Gi(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: ee,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: te,
              setGestureState: ne,
              setVariant: x,
              variants: S,
            } = Pe({
              cycleOrder: Li,
              defaultVariant: `X9H81tzVz`,
              enabledGestures: Ii,
              ref: r,
              variant: d,
              variantClassNames: zi,
            }),
            w = Ki(e, S),
            T = P(Ri),
            D = () => !![`rGI6BaOMq`, `Ce4iaI8cr`].includes(g);
          return f(O, {
            id: u ?? i,
            children: f(Wi, {
              animate: S,
              initial: !1,
              children: f(Hi, {
                value: Bi,
                children: f(E.button, {
                  ...h,
                  ...y,
                  className: P(T, `framer-2r2t9z`, l, v),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: w,
                  layoutId: `X9H81tzVz`,
                  ref: r,
                  style: { opacity: 1, ...c },
                  variants: {
                    "X9H81tzVz-hover": { opacity: 0.5 },
                    Ce4iaI8cr: { opacity: 1 },
                    I3GF4KzSK: { opacity: 0.5 },
                    rGI6BaOMq: { opacity: 1 },
                  },
                  ...Pi(
                    {
                      "X9H81tzVz-hover": { "data-framer-name": void 0 },
                      Ce4iaI8cr: { "data-framer-name": `Error` },
                      I3GF4KzSK: { "data-framer-name": `Disabled` },
                      rGI6BaOMq: { "data-framer-name": `Success` },
                    },
                    g,
                    b
                  ),
                  children: _(E.div, {
                    className: `framer-1thzsq1`,
                    "data-border": !0,
                    layoutDependency: w,
                    layoutId: `ilWfE4Q4Q`,
                    style: {
                      "--border-bottom-width": `0.5px`,
                      "--border-color": `rgba(255, 255, 255, 0.2)`,
                      "--border-left-width": `0.5px`,
                      "--border-right-width": `0.5px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0.5px`,
                      backgroundColor: m,
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    variants: {
                      Ce4iaI8cr: {
                        backgroundColor: `var(--token-90eb39eb-8ae7-4d64-805e-41357c9bae67, rgb(255, 255, 255))`,
                      },
                      rGI6BaOMq: {
                        backgroundColor: `var(--token-90eb39eb-8ae7-4d64-805e-41357c9bae67, rgb(255, 255, 255))`,
                      },
                    },
                    children: [
                      D() &&
                        f(Se, {
                          animated: !0,
                          className: `framer-1y6zfrp`,
                          Component: Ci,
                          layoutDependency: w,
                          layoutId: `BGNLgJSv0`,
                          style: {
                            "--1ww558a": 1.5,
                            "--4rxgx6": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                          },
                          variants: {
                            Ce4iaI8cr: {
                              "--4rxgx6": `var(--token-4e1e9419-eb3c-4fbd-bf8e-761d2269bc81, rgb(237, 2, 2))`,
                            },
                          },
                          ...Pi({ Ce4iaI8cr: { Component: mi } }, g, b),
                        }),
                      f(Mi, {
                        animated: !0,
                        className: `framer-1xhxgq5`,
                        "data-framer-name": `1`,
                        layoutDependency: w,
                        layoutId: `UUy7czFZn`,
                        style: {
                          "--34440n": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                          "--fbr8zx": 1.5,
                        },
                      }),
                      f(Mi, {
                        animated: !0,
                        className: `framer-t62gm8`,
                        "data-framer-name": `2`,
                        layoutDependency: w,
                        layoutId: `lMKqyS0G3`,
                        style: { "--34440n": p, "--fbr8zx": 1.5 },
                        transformTemplate: Vi,
                        ...Pi(
                          {
                            Ce4iaI8cr: { transformTemplate: void 0 },
                            rGI6BaOMq: { transformTemplate: void 0 },
                          },
                          g,
                          b
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-foJrc.framer-4wrfn5, .framer-foJrc .framer-4wrfn5 { display: block; }`,
          `.framer-foJrc.framer-2r2t9z { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 19px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 19px; }`,
          `.framer-foJrc .framer-1thzsq1 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: var(--framer-aspect-ratio-supported, 19px); will-change: var(--framer-will-change-override, transform); }`,
          `.framer-foJrc .framer-1y6zfrp { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 15px; }`,
          `.framer-foJrc .framer-1xhxgq5 { bottom: -14px; flex: none; height: var(--framer-aspect-ratio-supported, 18px); left: -15px; position: absolute; width: 18px; z-index: 1; }`,
          `.framer-foJrc .framer-t62gm8 { flex: none; height: var(--framer-aspect-ratio-supported, 18px); left: 50%; position: absolute; top: 50%; width: 18px; z-index: 1; }`,
          `.framer-foJrc.framer-v-x3ppu6.framer-2r2t9z, .framer-foJrc.framer-v-3f1jfm.framer-2r2t9z, .framer-foJrc.framer-v-1y8papx.framer-2r2t9z { cursor: unset; height: min-content; width: min-content; }`,
          `.framer-foJrc.framer-v-x3ppu6 .framer-1thzsq1 { align-self: stretch; height: auto; width: var(--framer-aspect-ratio-supported, 0px); }`,
          `.framer-foJrc.framer-v-3f1jfm .framer-1thzsq1, .framer-foJrc.framer-v-1y8papx .framer-1thzsq1 { align-self: stretch; height: auto; width: var(--framer-aspect-ratio-supported, 15px); }`,
          `.framer-foJrc.framer-v-3f1jfm .framer-1y6zfrp, .framer-foJrc.framer-v-1y8papx .framer-1y6zfrp { height: var(--framer-aspect-ratio-supported, 15px); }`,
          `.framer-foJrc.framer-v-3f1jfm .framer-1xhxgq5, .framer-foJrc.framer-v-1y8papx .framer-1xhxgq5 { bottom: unset; left: unset; right: -14px; top: -14px; }`,
          `.framer-foJrc.framer-v-3f1jfm .framer-t62gm8, .framer-foJrc.framer-v-1y8papx .framer-t62gm8 { left: unset; right: -30px; top: -30px; }`,
          `.framer-foJrc[data-border="true"]::after, .framer-foJrc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-foJrc`
      )),
      (Ji = qi),
      (qi.displayName = `Newsletter Button`),
      (qi.defaultProps = { height: 19, width: 19 }),
      A(qi, {
        variant: {
          options: [`X9H81tzVz`, `I3GF4KzSK`, `rGI6BaOMq`, `Ce4iaI8cr`],
          optionTitles: [`Default`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: K.Enum,
        },
        bZkxe3HHi: {
          defaultValue: `var(--token-3bacfb60-2898-4cf8-b6ee-027ac8520a73, rgb(255, 255, 255))`,
          title: `Color`,
          type: K.Color,
        },
        PLPy8Quoc: { defaultValue: `rgba(255, 255, 255, 0.2)`, title: `Fill`, type: K.Color },
      }),
      G(qi, [{ explicitInter: !0, fonts: [] }, ...Fi], { supportsExplicitInterCodegen: !0 }));
  });
function Xi(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  Y,
  sa = e(() => {
    (y(),
      B(),
      k(),
      w(),
      Ze(),
      (Zi = { quVcXiq7q: { hover: !0 } }),
      (Qi = `framer-VhpZW`),
      ($i = { quVcXiq7q: `framer-v-1lfb317` }),
      (ea = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ta = (e, t) => `translateX(-50%) ${t}`),
      (na = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (ra = E.create(s)),
      (ia = ({ click: e, height: t, id: n, link: r, menuText: i, newTab: a, width: o, ...s }) => ({
        ...s,
        bSlsxhS2Q: i ?? s.bSlsxhS2Q ?? `Menu`,
        g_y7fUjMF: e ?? s.g_y7fUjMF,
        hHuFn0g3g: a ?? s.hHuFn0g3g,
        OWVmNy5p6: r ?? s.OWVmNy5p6,
      })),
      (aa = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (oa = L(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = U();
          ke();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              bSlsxhS2Q: m,
              OWVmNy5p6: h,
              g_y7fUjMF: g,
              hHuFn0g3g: v,
              ...ee
            } = ia(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: te,
              gestureHandlers: ne,
              gestureVariant: x,
              isLoading: S,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = Pe({
              defaultVariant: `quVcXiq7q`,
              enabledGestures: Zi,
              ref: r,
              variant: p,
              variantClassNames: $i,
            }),
            k = aa(e, D),
            { activeVariantCallback: re, delay: A } = Ce(y),
            ie = re(async (...e) => {
              if ((w({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            }),
            ae = P(Qi, et);
          return f(O, {
            id: d ?? i,
            children: f(ra, {
              animate: D,
              initial: !1,
              children: f(na, {
                value: ea,
                children: f(ue, {
                  href: h,
                  motionChild: !0,
                  nodeId: `quVcXiq7q`,
                  openInNewTab: v,
                  scopeId: `VR3A6pvpP`,
                  children: _(E.a, {
                    ...ee,
                    ...ne,
                    className: `${P(ae, `framer-1lfb317`, u, b)} framer-96qg9x`,
                    "data-framer-name": `Main`,
                    "data-highlight": !0,
                    layoutDependency: k,
                    layoutId: `quVcXiq7q`,
                    onTap: ie,
                    ref: r,
                    style: {
                      backgroundColor: `rgba(255, 255, 255, 0)`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      ...l,
                    },
                    ...Xi({ "quVcXiq7q-hover": { "data-framer-name": void 0 } }, y, x),
                    children: [
                      f(j, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(E.p, {
                            className: `framer-styles-preset-x65a7p`,
                            "data-styles-preset": `CiTq1jwtl`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                            },
                            children: `Menu`,
                          }),
                        }),
                        className: `framer-y24km4`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `UBgG4Nwxs`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          opacity: 0.6,
                        },
                        text: m,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Xi({ "quVcXiq7q-hover": { transformTemplate: ta } }, y, x),
                      }),
                      f(j, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(E.p, {
                            className: `framer-styles-preset-x65a7p`,
                            "data-styles-preset": `CiTq1jwtl`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                            },
                            children: `Menu`,
                          }),
                        }),
                        className: `framer-2q3w5n`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `CykabNV3s`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          opacity: 0.6,
                        },
                        text: m,
                        transformTemplate: ta,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Xi({ "quVcXiq7q-hover": { transformTemplate: void 0 } }, y, x),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-VhpZW.framer-96qg9x, .framer-VhpZW .framer-96qg9x { display: block; }`,
          `.framer-VhpZW.framer-1lfb317 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-VhpZW .framer-y24km4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-VhpZW .framer-2q3w5n { bottom: -25px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-VhpZW.framer-v-1lfb317.hover .framer-y24km4 { left: 50%; position: absolute; top: -25px; z-index: 1; }`,
          `.framer-VhpZW.framer-v-1lfb317.hover .framer-2q3w5n { bottom: unset; left: unset; position: relative; }`,
          ...Qe,
        ],
        `framer-VhpZW`
      )),
      (Y = oa),
      (oa.displayName = `Footer link`),
      (oa.defaultProps = { height: 21, width: 36 }),
      A(oa, {
        bSlsxhS2Q: {
          defaultValue: `Menu`,
          displayTextArea: !1,
          title: `Menu Text`,
          type: K.String,
        },
        onbSlsxhS2QChange: { changes: `bSlsxhS2Q`, type: K.ChangeHandler },
        OWVmNy5p6: { title: `Link`, type: K.Link },
        g_y7fUjMF: { title: `Click`, type: K.EventHandler },
        hHuFn0g3g: { defaultValue: !1, title: `New Tab`, type: K.Boolean },
        onhHuFn0g3gChange: { changes: `hHuFn0g3g`, type: K.ChangeHandler },
      }),
      G(
        oa,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...N($e),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function X(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia = e(() => {
    (y(),
      B(),
      k(),
      w(),
      st(),
      Ze(),
      Ve(),
      lt(),
      rt(),
      oi(),
      Ke(),
      ot(),
      Yi(),
      sa(),
      (ca = z(at)),
      (la = Ne(we)),
      (ua = z(Ge)),
      (da = z(ct)),
      (fa = Ne(E.div)),
      (pa = z(Ji)),
      (ma = z(Y)),
      (ha = Ne(j)),
      (ga = [`hHs83DJNn`, `FOuRKioxl`, `rOACTNcGR`]),
      (_a = `framer-Uw2tM`),
      (va = {
        FOuRKioxl: `framer-v-1eszeeh`,
        hHs83DJNn: `framer-v-1oykpl1`,
        rOACTNcGR: `framer-v-1s7mq8r`,
      }),
      (ya = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ba = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (xa = {
        effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
        repeat: !1,
        startDelay: 0,
        tokenization: `line`,
        transition: { damping: 60, delay: 0.075, mass: 1, stiffness: 300, type: `spring` },
        trigger: `onMount`,
        type: `appear`,
      }),
      (Sa = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (Ca = { damping: 60, delay: 0.1, mass: 1, stiffness: 350, type: `spring` }),
      (wa = { damping: 60, delay: 0.2, mass: 1, stiffness: 200, type: `spring` }),
      (Ta = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
          default:
            return n;
        }
      }),
      (Ea = { damping: 60, delay: 0.3, mass: 1, stiffness: 200, type: `spring` }),
      (Da = { damping: 60, delay: 0.1, mass: 1, stiffness: 300, type: `spring` }),
      (Oa = { damping: 60, delay: 0.4, mass: 1, stiffness: 200, type: `spring` }),
      (ka = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (Aa = { Desktop: `hHs83DJNn`, Phone: `rOACTNcGR`, Tablet: `FOuRKioxl` }),
      (ja = E.create(s)),
      (Ma = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Aa[r.variant] ?? r.variant ?? `hHs83DJNn`,
      })),
      (Na = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Pa = L(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = U(),
            l = ke(),
            { style: u, className: d, layoutId: p, variant: m, ...h } = Ma(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: ee,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: te,
              setGestureState: x,
              setVariant: S,
              variants: w,
            } = Pe({
              cycleOrder: ga,
              defaultVariant: `hHs83DJNn`,
              ref: r,
              variant: m,
              variantClassNames: va,
            }),
            T = Na(e, w),
            D = P(_a, ft, it, et, We, ai);
          return (
            Ie(),
            f(O, {
              id: p ?? i,
              children: f(ja, {
                animate: w,
                initial: !1,
                children: f(ka, {
                  value: ya,
                  children: _(E.section, {
                    ...h,
                    ...y,
                    className: P(D, `framer-1oykpl1`, d, v),
                    "data-framer-name": `Desktop`,
                    layoutDependency: T,
                    layoutId: `hHs83DJNn`,
                    ref: r,
                    style: {
                      backgroundColor: `var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, rgb(12, 17, 28))`,
                      ...u,
                    },
                    ...X(
                      {
                        FOuRKioxl: { "data-framer-name": `Tablet` },
                        rOACTNcGR: { "data-framer-name": `Phone` },
                      },
                      g,
                      b
                    ),
                    children: [
                      f(W, {
                        height: 40,
                        width: l?.width || `100vw`,
                        y:
                          (l?.y || 0) +
                          0 +
                          (((l?.height || 920) -
                            0 -
                            (40 + Math.max(0, ((l?.height || 920) - 0 - 80) / 1) * 1 + 40 + 0)) /
                            2 +
                            0 +
                            0),
                        ...X({ FOuRKioxl: { y: void 0 }, rOACTNcGR: { y: void 0 } }, g, b),
                        children: f(F, {
                          className: `framer-4m6m1m-container`,
                          layoutDependency: T,
                          layoutId: `LXf7XJSkk-container`,
                          nodeId: `LXf7XJSkk`,
                          rendersWithMotion: !0,
                          scopeId: `vkGWLuDxt`,
                          children: f(at, {
                            height: `100%`,
                            id: `LXf7XJSkk`,
                            layoutId: `LXf7XJSkk`,
                            nzjXCr09A: {
                              borderBottomWidth: 0,
                              borderColor: `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(50, 54, 68))`,
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                              borderStyle: `solid`,
                              borderTopWidth: 0,
                            },
                            style: { width: `100%` },
                            Uz_x_jqMH: {
                              borderBottomWidth: 1,
                              borderColor: `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(50, 54, 68))`,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderStyle: `solid`,
                              borderTopWidth: 0,
                            },
                            variant: ba(`qElohr0kM`),
                            width: `100%`,
                            ...X(
                              {
                                FOuRKioxl: { variant: ba(`txn0xfHi_`) },
                                rOACTNcGR: { variant: ba(`uJk8lJWMB`) },
                              },
                              g,
                              b
                            ),
                          }),
                        }),
                      }),
                      f(E.section, {
                        className: `framer-12rwkha`,
                        "data-framer-name": `Content Container`,
                        layoutDependency: T,
                        layoutId: `ukfgqWOcp`,
                        children: _(E.div, {
                          className: `framer-1isd6pt`,
                          "data-border": !0,
                          "data-framer-name": `Content`,
                          layoutDependency: T,
                          layoutId: `YkT7vDQ9S`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(59, 62, 72))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          children: [
                            _(E.div, {
                              className: `framer-1gsq2g3`,
                              "data-border": !0,
                              "data-framer-name": `CTA`,
                              layoutDependency: T,
                              layoutId: `W_TLIA34i`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgba(255, 255, 255, 0.06))`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                f(E.div, {
                                  className: `framer-h5aov3`,
                                  "data-framer-name": `Gradient`,
                                  layoutDependency: T,
                                  layoutId: `nnKU1mR5G`,
                                  style: {
                                    background: `linear-gradient(9deg, var(--token-a844d59d-7fe8-4c10-a8cd-3c461e0b6b57, rgb(12, 17, 28)) -10%, rgba(12, 17, 28, 0.95) 27%, rgba(12, 17, 28, 0.15) 93%)`,
                                  },
                                }),
                                f(la, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: -30,
                                      },
                                    },
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onInView`,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 0.5,
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1600,
                                    intrinsicWidth: 2400,
                                    pixelHeight: 1600,
                                    pixelWidth: 2400,
                                    positionX: `53%`,
                                    positionY: `44%`,
                                    sizes: `min(${l?.width || `100vw`} - 80px, 1320px)`,
                                    src: `../../assets/images/YD557eJb9azRADL83ihJU1caU.webp?width=2400&height=1600`,
                                    srcSet: `../../assets/images/YD557eJb9azRADL83ihJU1caU.webp?scale-down-to=512&width=2400&height=1600 512w,../../assets/images/YD557eJb9azRADL83ihJU1caU.webp 1024w,../../assets/images/YD557eJb9azRADL83ihJU1caU.webp 2048w,../../assets/images/YD557eJb9azRADL83ihJU1caU.webp?width=2400&height=1600 2400w`,
                                  },
                                  className: `framer-cip3zn`,
                                  "data-framer-name": `Image`,
                                  layoutDependency: T,
                                  layoutId: `bx377rii9`,
                                  style: { opacity: 0.5 },
                                  ...X(
                                    {
                                      FOuRKioxl: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1600,
                                          intrinsicWidth: 2400,
                                          pixelHeight: 1600,
                                          pixelWidth: 2400,
                                          positionX: `53%`,
                                          positionY: `44%`,
                                          sizes: `min(${l?.width || `100vw`} - 48px, 1320px)`,
                                          src: `../../assets/images/YD557eJb9azRADL83ihJU1caU.webp?width=2400&height=1600`,
                                          srcSet: `../../assets/images/YD557eJb9azRADL83ihJU1caU.webp?scale-down-to=512&width=2400&height=1600 512w,../../assets/images/YD557eJb9azRADL83ihJU1caU.webp 1024w,../../assets/images/YD557eJb9azRADL83ihJU1caU.webp 2048w,../../assets/images/YD557eJb9azRADL83ihJU1caU.webp?width=2400&height=1600 2400w`,
                                        },
                                      },
                                      rOACTNcGR: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1600,
                                          intrinsicWidth: 2400,
                                          pixelHeight: 1600,
                                          pixelWidth: 2400,
                                          positionX: `53%`,
                                          positionY: `44%`,
                                          sizes: `min(${l?.width || `100vw`} - 24px, 1320px)`,
                                          src: `../../assets/images/YD557eJb9azRADL83ihJU1caU.webp?width=2400&height=1600`,
                                          srcSet: `../../assets/images/YD557eJb9azRADL83ihJU1caU.webp?scale-down-to=512&width=2400&height=1600 512w,../../assets/images/YD557eJb9azRADL83ihJU1caU.webp 1024w,../../assets/images/YD557eJb9azRADL83ihJU1caU.webp 2048w,../../assets/images/YD557eJb9azRADL83ihJU1caU.webp?width=2400&height=1600 2400w`,
                                        },
                                      },
                                    },
                                    g,
                                    b
                                  ),
                                }),
                                f(j, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(E.h2, {
                                      className: `framer-styles-preset-1592g84`,
                                      "data-styles-preset": `QZFw8ECYE`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-1of0zx5, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                      },
                                      children: `Recruter vite. Recruter bien.`,
                                    }),
                                  }),
                                  className: `framer-dnn3df`,
                                  effect: xa,
                                  fonts: [`Inter`],
                                  layoutDependency: T,
                                  layoutId: `bDL4p2VnO`,
                                  style: {
                                    "--extracted-1of0zx5": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                _(E.div, {
                                  className: `framer-1rlbr21`,
                                  "data-framer-name": `Body`,
                                  layoutDependency: T,
                                  layoutId: `IRiL86qhZ`,
                                  children: [
                                    f(j, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(E.p, {
                                          className: `framer-styles-preset-ar7l3c`,
                                          "data-styles-preset": `VpaJFpv2y`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                          },
                                          children: `Déposez votre candidature en quelques clics : un consultant Talentorz vous rappelle avec des missions adaptées à votre profil.`,
                                        }),
                                      }),
                                      className: `framer-1fgz35r`,
                                      effect: xa,
                                      fonts: [`Inter`],
                                      layoutDependency: T,
                                      layoutId: `a7HgXNpTd`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                        opacity: 0.8,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    _(fa, {
                                      __framer__animate: { transition: Ca },
                                      __framer__animateOnce: !1,
                                      __framer__enter: Sa,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      className: `framer-1wrlm6p`,
                                      "data-framer-name": `Button + Rating`,
                                      layoutDependency: T,
                                      layoutId: `OydmIq3T7`,
                                      children: [
                                        f(R, {
                                          links: [
                                            {
                                              href: { webPageId: `MTMcCw60K` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `MTMcCw60K` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `MTMcCw60K` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(W, {
                                              height: 46,
                                              children: f(F, {
                                                className: `framer-14ydcjm-container`,
                                                layoutDependency: T,
                                                layoutId: `Dn0QfNACC-container`,
                                                nodeId: `Dn0QfNACC`,
                                                rendersWithMotion: !0,
                                                scopeId: `vkGWLuDxt`,
                                                children: f(Ge, {
                                                  CKN5OFggn: !1,
                                                  D1jCD7MYH: `Nous contacter`,
                                                  height: `100%`,
                                                  id: `Dn0QfNACC`,
                                                  layoutId: `Dn0QfNACC`,
                                                  UpJIkfs85: e[0],
                                                  variant: ba(`dnKmjbVLh`),
                                                  width: `100%`,
                                                  ...X(
                                                    {
                                                      FOuRKioxl: { UpJIkfs85: e[1] },
                                                      rOACTNcGR: { UpJIkfs85: e[2] },
                                                    },
                                                    g,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        _(E.div, {
                                          className: `framer-2tlrgj`,
                                          "data-framer-name": `rating`,
                                          layoutDependency: T,
                                          layoutId: `nLrgBRaq0`,
                                          children: [
                                            _(E.div, {
                                              className: `framer-1xcjjw1`,
                                              "data-framer-name": `rating-wrapper`,
                                              layoutDependency: T,
                                              layoutId: `TP4Kh7FAY`,
                                              children: [
                                                f(j, {
                                                  __fromCanvasComponent: !0,
                                                  children: f(s, {
                                                    children: f(E.p, {
                                                      className: `framer-styles-preset-ar7l3c`,
                                                      "data-styles-preset": `VpaJFpv2y`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                                      },
                                                      children: f(E.strong, { children: `4.8/5` }),
                                                    }),
                                                  }),
                                                  className: `framer-1yhfa0c`,
                                                  fonts: [`Inter`, `Inter-Bold`],
                                                  layoutDependency: T,
                                                  layoutId: `frqvVIWvE`,
                                                  style: {
                                                    "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                    "--framer-link-text-decoration": `underline`,
                                                    opacity: 0.6,
                                                  },
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                _(E.div, {
                                                  className: `framer-5efe2y`,
                                                  "data-framer-name": `stars`,
                                                  layoutDependency: T,
                                                  layoutId: `MnzUDAKqo`,
                                                  children: [
                                                    f(ct, {
                                                      animated: !0,
                                                      className: `framer-18ten6x`,
                                                      layoutDependency: T,
                                                      layoutId: `JuEgNZk0A`,
                                                      style: {
                                                        "--1m6trwb": 1,
                                                        "--21h8s6": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                                        "--pgex8v": 1.3,
                                                      },
                                                    }),
                                                    f(ct, {
                                                      animated: !0,
                                                      className: `framer-1ppezby`,
                                                      layoutDependency: T,
                                                      layoutId: `RzVPJGcj3`,
                                                      style: {
                                                        "--1m6trwb": 1,
                                                        "--21h8s6": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                                        "--pgex8v": 1.3,
                                                      },
                                                    }),
                                                    f(ct, {
                                                      animated: !0,
                                                      className: `framer-fvr4dx`,
                                                      layoutDependency: T,
                                                      layoutId: `U46uauGfz`,
                                                      style: {
                                                        "--1m6trwb": 1,
                                                        "--21h8s6": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                                        "--pgex8v": 1.3,
                                                      },
                                                    }),
                                                    f(ct, {
                                                      animated: !0,
                                                      className: `framer-1qmp4wh`,
                                                      layoutDependency: T,
                                                      layoutId: `ELWGsFtZK`,
                                                      style: {
                                                        "--1m6trwb": 1,
                                                        "--21h8s6": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                                        "--pgex8v": 1.3,
                                                      },
                                                    }),
                                                    f(ct, {
                                                      animated: !0,
                                                      className: `framer-1dlhwwt`,
                                                      layoutDependency: T,
                                                      layoutId: `aOy95MfbR`,
                                                      style: {
                                                        "--1m6trwb": 1,
                                                        "--21h8s6": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                                        "--pgex8v": 1.3,
                                                      },
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            f(E.div, {
                                              className: `framer-w0frc9`,
                                              "data-framer-name": `reviews-wrapper`,
                                              layoutDependency: T,
                                              layoutId: `Du41dK8nt`,
                                              children: f(j, {
                                                __fromCanvasComponent: !0,
                                                children: f(s, {
                                                  children: f(E.p, {
                                                    className: `framer-styles-preset-x65a7p`,
                                                    "data-styles-preset": `CiTq1jwtl`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                                    },
                                                    children: `La confiance de 150+ entreprises`,
                                                  }),
                                                }),
                                                className: `framer-14rgp3h`,
                                                fonts: [`Inter`],
                                                layoutDependency: T,
                                                layoutId: `P8R40lIfZ`,
                                                style: {
                                                  "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                  "--framer-link-text-decoration": `underline`,
                                                  opacity: 0.6,
                                                },
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            false&&_(E.div, {
                              className: `framer-1b79edc`,
                              "data-border": !0,
                              "data-framer-name": `Menu`,
                              layoutDependency: T,
                              layoutId: `xReQMn8P7`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(47, 50, 61))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                              },
                              children: [
                                _(fa, {
                                  __framer__animate: { transition: wa },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Sa,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-aox2k`,
                                  "data-framer-name": `Left Content`,
                                  layoutDependency: T,
                                  layoutId: `QINjTmjBn`,
                                  children: [
                                    f(j, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(E.p, {
                                          className: `framer-styles-preset-ar7l3c`,
                                          "data-styles-preset": `VpaJFpv2y`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                          },
                                          children: `Offres d'emploi, conseils carrière et actualités du tertiaire`,
                                        }),
                                      }),
                                      className: `framer-prhcvg`,
                                      fonts: [`Inter`],
                                      layoutDependency: T,
                                      layoutId: `R5aRQLZ5R`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    _(E.div, {
                                      className: `framer-18g9twq`,
                                      layoutDependency: T,
                                      layoutId: `gpBTLn0Cr`,
                                      children: [
                                        f(me, {
                                          action: `https://api.framer.com/forms/v1/forms/206db80b-1400-4649-ae09-bcb06a7093f4/submit`,
                                          className: `framer-edhszh`,
                                          layoutDependency: T,
                                          layoutId: `zhpzPyGk0`,
                                          nodeId: `zhpzPyGk0`,
                                          style: {
                                            borderBottomLeftRadius: 8,
                                            borderBottomRightRadius: 8,
                                            borderTopLeftRadius: 8,
                                            borderTopRightRadius: 8,
                                          },
                                          children: (e) =>
                                            _(ne, {
                                              children: [
                                                f(E.label, {
                                                  className: `framer-c4qayb`,
                                                  layoutDependency: T,
                                                  layoutId: `T7NS97ny7`,
                                                  children: f(be, {
                                                    className: `framer-1p5ig5s`,
                                                    inputName: `Email`,
                                                    layoutDependency: T,
                                                    layoutId: `ILSGao3h0`,
                                                    placeholder: `Your email `,
                                                    required: !0,
                                                    style: {
                                                      "--framer-input-border-bottom-width": `1px`,
                                                      "--framer-input-border-color": `var(--token-2e38b5d6-ba19-472a-a018-742ad8e64311, rgba(255, 255, 255, 0.08))`,
                                                      "--framer-input-border-left-width": `1px`,
                                                      "--framer-input-border-radius-bottom-left": `8px`,
                                                      "--framer-input-border-radius-bottom-right": `8px`,
                                                      "--framer-input-border-radius-top-left": `8px`,
                                                      "--framer-input-border-radius-top-right": `8px`,
                                                      "--framer-input-border-right-width": `1px`,
                                                      "--framer-input-border-style": `solid`,
                                                      "--framer-input-border-top-width": `1px`,
                                                      "--framer-input-font-color": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                                      "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                                      "--framer-input-placeholder-color": `rgba(255, 255, 255, 0.5)`,
                                                    },
                                                    type: `email`,
                                                  }),
                                                }),
                                                f(W, {
                                                  width: `38px`,
                                                  children: f(F, {
                                                    className: `framer-144pvk3-container`,
                                                    layoutDependency: T,
                                                    layoutId: `IBJ0T0ljq-container`,
                                                    nodeId: `IBJ0T0ljq`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `vkGWLuDxt`,
                                                    children: f(Ji, {
                                                      bZkxe3HHi: `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                                      height: `100%`,
                                                      id: `IBJ0T0ljq`,
                                                      layoutId: `IBJ0T0ljq`,
                                                      PLPy8Quoc: `var(--token-2e38b5d6-ba19-472a-a018-742ad8e64311, rgba(255, 255, 255, 0.08))`,
                                                      style: { height: `100%`, width: `100%` },
                                                      type: `submit`,
                                                      variant: Ta(
                                                        e,
                                                        {
                                                          error: `Ce4iaI8cr`,
                                                          success: `rGI6BaOMq`,
                                                        },
                                                        ba(`X9H81tzVz`)
                                                      ),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                        }),
                                        f(j, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(E.p, {
                                              className: `framer-styles-preset-x65a7p`,
                                              "data-styles-preset": `CiTq1jwtl`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                              },
                                              children: `Vos données sont traitées avec discrétion`,
                                            }),
                                          }),
                                          className: `framer-1v8eiux`,
                                          fonts: [`Inter`],
                                          layoutDependency: T,
                                          layoutId: `MItWba6Vr`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                            "--framer-paragraph-spacing": `0px`,
                                            opacity: 0.65,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                _(fa, {
                                  __framer__animate: { transition: Ea },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Sa,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-1v690yy`,
                                  "data-framer-name": `Services Container`,
                                  layoutDependency: T,
                                  layoutId: `TiYrWniFq`,
                                  children: [
                                    f(j, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(E.p, {
                                          className: `framer-styles-preset-xjkrtz`,
                                          "data-styles-preset": `lpw1HhEJv`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                          },
                                          children: `Services`,
                                        }),
                                      }),
                                      className: `framer-h88v3o`,
                                      effect: xa,
                                      fonts: [`Inter`],
                                      layoutDependency: T,
                                      layoutId: `NjiRalzjE`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    _(fa, {
                                      __framer__animate: { transition: Da },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Sa,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      className: `framer-144g43c`,
                                      "data-framer-name": `Services`,
                                      layoutDependency: T,
                                      layoutId: `SMm4dMbIW`,
                                      children: [
                                        f(R, {
                                          links: [
                                            {
                                              href: {
                                                pathVariables: { O7PqGHbEq: `brand-positioning` },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `Z17hgOhq4`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: {
                                                pathVariables: { O7PqGHbEq: `brand-positioning` },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `Z17hgOhq4`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: {
                                                pathVariables: { O7PqGHbEq: `brand-positioning` },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `Z17hgOhq4`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(W, {
                                              height: 21,
                                              children: f(F, {
                                                className: `framer-1amw00b-container`,
                                                layoutDependency: T,
                                                layoutId: `UFhlKHi6j-container`,
                                                nodeId: `UFhlKHi6j`,
                                                rendersWithMotion: !0,
                                                scopeId: `vkGWLuDxt`,
                                                children: f(Y, {
                                                  bSlsxhS2Q: `Recrutement renfort`,
                                                  height: `100%`,
                                                  hHuFn0g3g: !1,
                                                  id: `UFhlKHi6j`,
                                                  layoutId: `UFhlKHi6j`,
                                                  OWVmNy5p6: e[0],
                                                  width: `100%`,
                                                  ...X(
                                                    {
                                                      FOuRKioxl: { OWVmNy5p6: e[1] },
                                                      rOACTNcGR: { OWVmNy5p6: e[2] },
                                                    },
                                                    g,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(R, {
                                          links: [
                                            {
                                              href: {
                                                pathVariables: {
                                                  O7PqGHbEq: `content-creative-direction`,
                                                },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `OzYfTg4dt`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: {
                                                pathVariables: {
                                                  O7PqGHbEq: `content-creative-direction`,
                                                },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `OzYfTg4dt`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: {
                                                pathVariables: {
                                                  O7PqGHbEq: `content-creative-direction`,
                                                },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `OzYfTg4dt`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(W, {
                                              height: 21,
                                              children: f(F, {
                                                className: `framer-16nu2p1-container`,
                                                layoutDependency: T,
                                                layoutId: `iDcj4ymWl-container`,
                                                nodeId: `iDcj4ymWl`,
                                                rendersWithMotion: !0,
                                                scopeId: `vkGWLuDxt`,
                                                children: f(Y, {
                                                  bSlsxhS2Q: `Creative Direction`,
                                                  height: `100%`,
                                                  hHuFn0g3g: !1,
                                                  id: `iDcj4ymWl`,
                                                  layoutId: `iDcj4ymWl`,
                                                  OWVmNy5p6: e[0],
                                                  width: `100%`,
                                                  ...X(
                                                    {
                                                      FOuRKioxl: { OWVmNy5p6: e[1] },
                                                      rOACTNcGR: { OWVmNy5p6: e[2] },
                                                    },
                                                    g,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(R, {
                                          links: [
                                            {
                                              href: {
                                                pathVariables: {
                                                  O7PqGHbEq: `performance-intelligence`,
                                                },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `KVh6vFu1M`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: {
                                                pathVariables: {
                                                  O7PqGHbEq: `performance-intelligence`,
                                                },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `KVh6vFu1M`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: {
                                                pathVariables: {
                                                  O7PqGHbEq: `performance-intelligence`,
                                                },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `KVh6vFu1M`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(W, {
                                              height: 21,
                                              children: f(F, {
                                                className: `framer-ppw3fs-container`,
                                                layoutDependency: T,
                                                layoutId: `S6CNmsJAI-container`,
                                                nodeId: `S6CNmsJAI`,
                                                rendersWithMotion: !0,
                                                scopeId: `vkGWLuDxt`,
                                                children: f(Y, {
                                                  bSlsxhS2Q: `Performance Intelligence`,
                                                  height: `100%`,
                                                  hHuFn0g3g: !1,
                                                  id: `S6CNmsJAI`,
                                                  layoutId: `S6CNmsJAI`,
                                                  OWVmNy5p6: e[0],
                                                  width: `100%`,
                                                  ...X(
                                                    {
                                                      FOuRKioxl: { OWVmNy5p6: e[1] },
                                                      rOACTNcGR: { OWVmNy5p6: e[2] },
                                                    },
                                                    g,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(R, {
                                          links: [
                                            {
                                              href: {
                                                pathVariables: { O7PqGHbEq: `market-research` },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `B2cPK4gAX`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: {
                                                pathVariables: { O7PqGHbEq: `market-research` },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `B2cPK4gAX`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: {
                                                pathVariables: { O7PqGHbEq: `market-research` },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `B2cPK4gAX`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(W, {
                                              height: 21,
                                              children: f(F, {
                                                className: `framer-1y03oa3-container`,
                                                layoutDependency: T,
                                                layoutId: `hiO56uvcx-container`,
                                                nodeId: `hiO56uvcx`,
                                                rendersWithMotion: !0,
                                                scopeId: `vkGWLuDxt`,
                                                children: f(Y, {
                                                  bSlsxhS2Q: `Devenir un Talentorz`,
                                                  height: `100%`,
                                                  hHuFn0g3g: !1,
                                                  id: `hiO56uvcx`,
                                                  layoutId: `hiO56uvcx`,
                                                  OWVmNy5p6: e[0],
                                                  width: `100%`,
                                                  ...X(
                                                    {
                                                      FOuRKioxl: { OWVmNy5p6: e[1] },
                                                      rOACTNcGR: { OWVmNy5p6: e[2] },
                                                    },
                                                    g,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(R, {
                                          links: [
                                            {
                                              href: {
                                                pathVariables: { O7PqGHbEq: `conversion-systems` },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `VUHXETiwu`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: {
                                                pathVariables: { O7PqGHbEq: `conversion-systems` },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `VUHXETiwu`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: {
                                                pathVariables: { O7PqGHbEq: `conversion-systems` },
                                                unresolvedPathSlugs: {
                                                  O7PqGHbEq: {
                                                    collectionId: `ph2KJiPTO`,
                                                    collectionItemId: `VUHXETiwu`,
                                                  },
                                                },
                                                webPageId: `hvuOyIzp6`,
                                              },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(W, {
                                              height: 21,
                                              children: f(F, {
                                                className: `framer-o4b604-container`,
                                                layoutDependency: T,
                                                layoutId: `QCzK06WC6-container`,
                                                nodeId: `QCzK06WC6`,
                                                rendersWithMotion: !0,
                                                scopeId: `vkGWLuDxt`,
                                                children: f(Y, {
                                                  bSlsxhS2Q: `Je suis une entreprise`,
                                                  height: `100%`,
                                                  hHuFn0g3g: !1,
                                                  id: `QCzK06WC6`,
                                                  layoutId: `QCzK06WC6`,
                                                  OWVmNy5p6: e[0],
                                                  width: `100%`,
                                                  ...X(
                                                    {
                                                      FOuRKioxl: { OWVmNy5p6: e[1] },
                                                      rOACTNcGR: { OWVmNy5p6: e[2] },
                                                    },
                                                    g,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                _(fa, {
                                  __framer__animate: { transition: Oa },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Sa,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-eon03m`,
                                  "data-framer-name": `Services Container`,
                                  layoutDependency: T,
                                  layoutId: `M16Cxh7o_`,
                                  children: [
                                    f(j, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(E.p, {
                                          className: `framer-styles-preset-xjkrtz`,
                                          "data-styles-preset": `lpw1HhEJv`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                          },
                                          children: `Pages`,
                                        }),
                                      }),
                                      className: `framer-lzam87`,
                                      effect: xa,
                                      fonts: [`Inter`],
                                      layoutDependency: T,
                                      layoutId: `Qws5_ZtUx`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    _(fa, {
                                      __framer__animate: { transition: Da },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Sa,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      className: `framer-1ntkwq9`,
                                      "data-framer-name": `Services`,
                                      layoutDependency: T,
                                      layoutId: `z8VGhNNS0`,
                                      children: [
                                        f(R, {
                                          links: [
                                            {
                                              href: { webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(W, {
                                              height: 21,
                                              children: f(F, {
                                                className: `framer-lq4x0c-container`,
                                                layoutDependency: T,
                                                layoutId: `fcXmtaJFm-container`,
                                                nodeId: `fcXmtaJFm`,
                                                rendersWithMotion: !0,
                                                scopeId: `vkGWLuDxt`,
                                                children: f(Y, {
                                                  bSlsxhS2Q: `Home`,
                                                  height: `100%`,
                                                  hHuFn0g3g: !1,
                                                  id: `fcXmtaJFm`,
                                                  layoutId: `fcXmtaJFm`,
                                                  OWVmNy5p6: e[0],
                                                  width: `100%`,
                                                  ...X(
                                                    {
                                                      FOuRKioxl: { OWVmNy5p6: e[1] },
                                                      rOACTNcGR: { OWVmNy5p6: e[2] },
                                                    },
                                                    g,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(R, {
                                          links: [
                                            {
                                              href: { webPageId: `lRq12lwdA` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `lRq12lwdA` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `lRq12lwdA` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(W, {
                                              height: 21,
                                              children: f(F, {
                                                className: `framer-1lcddzg-container`,
                                                layoutDependency: T,
                                                layoutId: `onNF1G2Wd-container`,
                                                nodeId: `onNF1G2Wd`,
                                                rendersWithMotion: !0,
                                                scopeId: `vkGWLuDxt`,
                                                children: f(Y, {
                                                  bSlsxhS2Q: `About`,
                                                  height: `100%`,
                                                  hHuFn0g3g: !1,
                                                  id: `onNF1G2Wd`,
                                                  layoutId: `onNF1G2Wd`,
                                                  OWVmNy5p6: e[0],
                                                  width: `100%`,
                                                  ...X(
                                                    {
                                                      FOuRKioxl: { OWVmNy5p6: e[1] },
                                                      rOACTNcGR: { OWVmNy5p6: e[2] },
                                                    },
                                                    g,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(R, {
                                          links: [
                                            {
                                              href: { webPageId: `sWaqIejCT` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `sWaqIejCT` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `sWaqIejCT` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(W, {
                                              height: 21,
                                              children: f(F, {
                                                className: `framer-avxd53-container`,
                                                layoutDependency: T,
                                                layoutId: `mNVD3nGYZ-container`,
                                                nodeId: `mNVD3nGYZ`,
                                                rendersWithMotion: !0,
                                                scopeId: `vkGWLuDxt`,
                                                children: f(Y, {
                                                  bSlsxhS2Q: `Services`,
                                                  height: `100%`,
                                                  hHuFn0g3g: !1,
                                                  id: `mNVD3nGYZ`,
                                                  layoutId: `mNVD3nGYZ`,
                                                  OWVmNy5p6: e[0],
                                                  width: `100%`,
                                                  ...X(
                                                    {
                                                      FOuRKioxl: { OWVmNy5p6: e[1] },
                                                      rOACTNcGR: { OWVmNy5p6: e[2] },
                                                    },
                                                    g,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(R, {
                                          links: [
                                            {
                                              href: { webPageId: `OJNA9hOdA` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `OJNA9hOdA` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `OJNA9hOdA` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(W, {
                                              height: 21,
                                              children: f(F, {
                                                className: `framer-fp3ofk-container`,
                                                layoutDependency: T,
                                                layoutId: `r0GsuwwsD-container`,
                                                nodeId: `r0GsuwwsD`,
                                                rendersWithMotion: !0,
                                                scopeId: `vkGWLuDxt`,
                                                children: f(Y, {
                                                  bSlsxhS2Q: `Case Studies`,
                                                  height: `100%`,
                                                  hHuFn0g3g: !1,
                                                  id: `r0GsuwwsD`,
                                                  layoutId: `r0GsuwwsD`,
                                                  OWVmNy5p6: e[0],
                                                  width: `100%`,
                                                  ...X(
                                                    {
                                                      FOuRKioxl: { OWVmNy5p6: e[1] },
                                                      rOACTNcGR: { OWVmNy5p6: e[2] },
                                                    },
                                                    g,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(R, {
                                          links: [
                                            {
                                              href: { webPageId: `MTMcCw60K` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `MTMcCw60K` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `MTMcCw60K` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(W, {
                                              height: 21,
                                              children: f(F, {
                                                className: `framer-zki8ep-container`,
                                                layoutDependency: T,
                                                layoutId: `mfcVoFArL-container`,
                                                nodeId: `mfcVoFArL`,
                                                rendersWithMotion: !0,
                                                scopeId: `vkGWLuDxt`,
                                                children: f(Y, {
                                                  bSlsxhS2Q: `Contact`,
                                                  height: `100%`,
                                                  hHuFn0g3g: !1,
                                                  id: `mfcVoFArL`,
                                                  layoutId: `mfcVoFArL`,
                                                  OWVmNy5p6: e[0],
                                                  width: `100%`,
                                                  ...X(
                                                    {
                                                      FOuRKioxl: { OWVmNy5p6: e[1] },
                                                      rOACTNcGR: { OWVmNy5p6: e[2] },
                                                    },
                                                    g,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(R, {
                                          links: [
                                            {
                                              href: { webPageId: `WwYA376Vd` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `WwYA376Vd` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `WwYA376Vd` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(W, {
                                              height: 21,
                                              children: f(F, {
                                                className: `framer-1qnjvin-container`,
                                                layoutDependency: T,
                                                layoutId: `PYHQ9QnTf-container`,
                                                nodeId: `PYHQ9QnTf`,
                                                rendersWithMotion: !0,
                                                scopeId: `vkGWLuDxt`,
                                                children: f(Y, {
                                                  bSlsxhS2Q: `Blogs`,
                                                  height: `100%`,
                                                  hHuFn0g3g: !1,
                                                  id: `PYHQ9QnTf`,
                                                  layoutId: `PYHQ9QnTf`,
                                                  OWVmNy5p6: e[0],
                                                  width: `100%`,
                                                  ...X(
                                                    {
                                                      FOuRKioxl: { OWVmNy5p6: e[1] },
                                                      rOACTNcGR: { OWVmNy5p6: e[2] },
                                                    },
                                                    g,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                _(fa, {
                                  __framer__animate: { transition: Oa },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Sa,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-p8zpa8`,
                                  "data-framer-name": `Services Container`,
                                  layoutDependency: T,
                                  layoutId: `XxjvbUFmN`,
                                  children: [
                                    f(j, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(E.p, {
                                          className: `framer-styles-preset-xjkrtz`,
                                          "data-styles-preset": `lpw1HhEJv`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                          },
                                          children: `Réseaux`,
                                        }),
                                      }),
                                      className: `framer-nmk6xo`,
                                      effect: xa,
                                      fonts: [`Inter`],
                                      layoutDependency: T,
                                      layoutId: `p2eSUsKlM`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    _(fa, {
                                      __framer__animate: { transition: Da },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Sa,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      className: `framer-1svet03`,
                                      "data-framer-name": `Services`,
                                      layoutDependency: T,
                                      layoutId: `Bf3kXSBnf`,
                                      children: [
                                        f(W, {
                                          height: 21,
                                          children: f(F, {
                                            className: `framer-e1tqer-container`,
                                            layoutDependency: T,
                                            layoutId: `Kh5DK8Dv_-container`,
                                            nodeId: `Kh5DK8Dv_`,
                                            rendersWithMotion: !0,
                                            scopeId: `vkGWLuDxt`,
                                            children: f(Y, {
                                              bSlsxhS2Q: `Facebook`,
                                              height: `100%`,
                                              hHuFn0g3g: !1,
                                              id: `Kh5DK8Dv_`,
                                              layoutId: `Kh5DK8Dv_`,
                                              OWVmNy5p6: `Facebook.com`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        f(W, {
                                          height: 21,
                                          children: f(F, {
                                            className: `framer-1nbqitg-container`,
                                            layoutDependency: T,
                                            layoutId: `dhDi6DUXQ-container`,
                                            nodeId: `dhDi6DUXQ`,
                                            rendersWithMotion: !0,
                                            scopeId: `vkGWLuDxt`,
                                            children: f(Y, {
                                              bSlsxhS2Q: `LinkedIn`,
                                              height: `100%`,
                                              hHuFn0g3g: !1,
                                              id: `dhDi6DUXQ`,
                                              layoutId: `dhDi6DUXQ`,
                                              OWVmNy5p6: `LinkedIn.com`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        f(W, {
                                          height: 21,
                                          children: f(F, {
                                            className: `framer-cxy8o7-container`,
                                            layoutDependency: T,
                                            layoutId: `aYk3irN6f-container`,
                                            nodeId: `aYk3irN6f`,
                                            rendersWithMotion: !0,
                                            scopeId: `vkGWLuDxt`,
                                            children: f(Y, {
                                              bSlsxhS2Q: `Instagram`,
                                              height: `100%`,
                                              hHuFn0g3g: !1,
                                              id: `aYk3irN6f`,
                                              layoutId: `aYk3irN6f`,
                                              OWVmNy5p6: `Instagram.com`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        f(W, {
                                          height: 21,
                                          children: f(F, {
                                            className: `framer-ogbqrg-container`,
                                            layoutDependency: T,
                                            layoutId: `NXjXvJP8S-container`,
                                            nodeId: `NXjXvJP8S`,
                                            rendersWithMotion: !0,
                                            scopeId: `vkGWLuDxt`,
                                            children: f(Y, {
                                              bSlsxhS2Q: `Twitter`,
                                              height: `100%`,
                                              hHuFn0g3g: !1,
                                              id: `NXjXvJP8S`,
                                              layoutId: `NXjXvJP8S`,
                                              OWVmNy5p6: `Twitter.com`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      f(E.div, {
                        className: `framer-ctmw9n`,
                        "data-border": !0,
                        "data-framer-name": `Copyright`,
                        layoutDependency: T,
                        layoutId: `QsAFesSub`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(50, 54, 68))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          rotate: 180,
                        },
                        children: _(E.div, {
                          className: `framer-3slweg`,
                          "data-border": !0,
                          "data-framer-name": `Inner Spacer`,
                          layoutDependency: T,
                          layoutId: `a8qP8M6aQ`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, rgb(50, 54, 68))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                            rotate: 900,
                          },
                          variants: {
                            FOuRKioxl: {
                              "--border-bottom-width": `1px`,
                              "--border-top-width": `1px`,
                            },
                            rOACTNcGR: {
                              "--border-bottom-width": `1px`,
                              "--border-top-width": `1px`,
                            },
                          },
                          children: [
                            f(fa, {
                              __framer__animate: { transition: Da },
                              __framer__animateOnce: !0,
                              __framer__enter: Sa,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-bw60x8`,
                              "data-framer-name": `Copyright Legal`,
                              layoutDependency: T,
                              layoutId: `DRmdR9J6N`,
                              children: f(j, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(E.p, {
                                    className: `framer-styles-preset-x65a7p`,
                                    "data-styles-preset": `CiTq1jwtl`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                    },
                                    children: `© 2026 Talentorz. Tous droits réservés.`,
                                  }),
                                }),
                                className: `framer-ypli45`,
                                fonts: [`Inter`],
                                layoutDependency: T,
                                layoutId: `cOneVQOqo`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                  opacity: 0.6,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...X(
                                  {
                                    rOACTNcGR: {
                                      children: f(s, {
                                        children: f(E.p, {
                                          className: `framer-styles-preset-x65a7p`,
                                          "data-styles-preset": `CiTq1jwtl`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                          },
                                          children: `© 2026. Tous droits réservés.`,
                                        }),
                                      }),
                                    },
                                  },
                                  g,
                                  b
                                ),
                              }),
                            }),
                            f(ha, {
                              __framer__animate: { transition: Da },
                              __framer__animateOnce: !0,
                              __framer__enter: Sa,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 0.7,
                              children: f(s, {
                                children: f(E.p, {
                                  className: `framer-styles-preset-x65a7p`,
                                  "data-styles-preset": `CiTq1jwtl`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `right`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)))`,
                                  },
                                  children: f(ue, {
                                    href: `https://www.fluxtemplates.com/`,
                                    motionChild: !0,
                                    nodeId: `cMgLCJPIW`,
                                    openInNewTab: !0,
                                    relValues: [],
                                    scopeId: `vkGWLuDxt`,
                                    smoothScroll: !1,
                                    children: f(E.a, {
                                      className: `framer-styles-preset-13kepjj`,
                                      "data-styles-preset": `WhlQc8WDR`,
                                      children: `Talentorz`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-lj7prg`,
                              fonts: [`Inter`],
                              layoutDependency: T,
                              layoutId: `cMgLCJPIW`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248))`,
                                opacity: 0.7,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Uw2tM.framer-9lh9f9, .framer-Uw2tM .framer-9lh9f9 { display: block; }`,
          `.framer-Uw2tM.framer-1oykpl1 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 920px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-Uw2tM .framer-4m6m1m-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-Uw2tM .framer-12rwkha { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
          `.framer-Uw2tM .framer-1isd6pt { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; max-width: 1320px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Uw2tM .framer-1gsq2g3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 1px; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 48px 40px 60px 40px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-Uw2tM .framer-h5aov3 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-Uw2tM .framer-cip3zn { bottom: -30px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-Uw2tM .framer-dnn3df { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 800px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-Uw2tM .framer-1rlbr21 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; max-width: 40%; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-Uw2tM .framer-1fgz35r { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-Uw2tM .framer-1wrlm6p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-Uw2tM .framer-14ydcjm-container, .framer-Uw2tM .framer-1amw00b-container, .framer-Uw2tM .framer-16nu2p1-container, .framer-Uw2tM .framer-ppw3fs-container, .framer-Uw2tM .framer-1y03oa3-container, .framer-Uw2tM .framer-o4b604-container, .framer-Uw2tM .framer-lq4x0c-container, .framer-Uw2tM .framer-1lcddzg-container, .framer-Uw2tM .framer-avxd53-container, .framer-Uw2tM .framer-fp3ofk-container, .framer-Uw2tM .framer-zki8ep-container, .framer-Uw2tM .framer-1qnjvin-container, .framer-Uw2tM .framer-e1tqer-container, .framer-Uw2tM .framer-1nbqitg-container, .framer-Uw2tM .framer-cxy8o7-container, .framer-Uw2tM .framer-ogbqrg-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-Uw2tM .framer-2tlrgj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-Uw2tM .framer-1xcjjw1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-Uw2tM .framer-1yhfa0c, .framer-Uw2tM .framer-14rgp3h { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Uw2tM .framer-5efe2y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 2px 0px; position: relative; width: min-content; }`,
          `.framer-Uw2tM .framer-18ten6x, .framer-Uw2tM .framer-1ppezby, .framer-Uw2tM .framer-fvr4dx, .framer-Uw2tM .framer-1qmp4wh, .framer-Uw2tM .framer-1dlhwwt { flex: none; height: var(--framer-aspect-ratio-supported, 14px); position: relative; width: 14px; }`,
          `.framer-Uw2tM .framer-w0frc9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-Uw2tM .framer-1b79edc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 56px 40px 90px 40px; position: relative; width: 100%; }`,
          `.framer-Uw2tM .framer-aox2k { align-content: flex-start; align-items: flex-start; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Uw2tM .framer-prhcvg { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 340px; position: relative; width: 100%; }`,
          `.framer-Uw2tM .framer-18g9twq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Uw2tM .framer-edhszh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; max-width: 340px; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Uw2tM .framer-c4qayb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Uw2tM .framer-1p5ig5s { --framer-input-focused-border-color: var(--token-4f267ef3-32e1-45a1-acf4-f0d8231720d7, rgba(255, 255, 255, 0.2)); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "TASA Orbiter"; --framer-input-font-letter-spacing: -0.01em; --framer-input-font-line-height: 1.1em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-padding: 9px 2px 9px 14px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-Uw2tM .framer-144pvk3-container { align-self: stretch; flex: none; height: auto; position: relative; width: 38px; }`,
          `.framer-Uw2tM .framer-1v8eiux { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Uw2tM .framer-1v690yy, .framer-Uw2tM .framer-eon03m, .framer-Uw2tM .framer-p8zpa8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Uw2tM .framer-h88v3o, .framer-Uw2tM .framer-lzam87, .framer-Uw2tM .framer-nmk6xo { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-Uw2tM .framer-144g43c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Uw2tM .framer-1ntkwq9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Uw2tM .framer-1svet03 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; max-width: 40%; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Uw2tM .framer-ctmw9n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
          `.framer-Uw2tM .framer-3slweg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 40px; justify-content: space-between; max-width: 1320px; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 1px; }`,
          `.framer-Uw2tM .framer-bw60x8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-Uw2tM .framer-ypli45, .framer-Uw2tM .framer-lj7prg { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-Uw2tM.framer-v-1eszeeh.framer-1oykpl1 { height: min-content; width: 810px; }`,
          `.framer-Uw2tM.framer-v-1eszeeh .framer-12rwkha { flex: none; height: min-content; justify-content: flex-start; padding: 0px 24px 0px 24px; }`,
          `.framer-Uw2tM.framer-v-1eszeeh .framer-1isd6pt, .framer-Uw2tM.framer-v-1s7mq8r .framer-1isd6pt { flex: none; height: min-content; }`,
          `.framer-Uw2tM.framer-v-1eszeeh .framer-1gsq2g3 { flex: none; height: min-content; justify-content: flex-start; padding: 120px 40px 60px 40px; }`,
          `.framer-Uw2tM.framer-v-1eszeeh .framer-1b79edc { align-content: unset; align-items: unset; display: grid; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); justify-content: center; padding: 56px 40px 80px 40px; }`,
          `.framer-Uw2tM.framer-v-1eszeeh .framer-aox2k { align-self: start; flex: none; grid-column: span 3; justify-self: start; width: 100%; }`,
          `.framer-Uw2tM.framer-v-1eszeeh .framer-1v690yy, .framer-Uw2tM.framer-v-1eszeeh .framer-eon03m, .framer-Uw2tM.framer-v-1eszeeh .framer-p8zpa8, .framer-Uw2tM.framer-v-1s7mq8r .framer-eon03m, .framer-Uw2tM.framer-v-1s7mq8r .framer-p8zpa8 { align-self: start; flex: none; justify-self: start; width: 100%; }`,
          `.framer-Uw2tM.framer-v-1eszeeh .framer-ctmw9n { padding: 0px 24px 0px 24px; }`,
          `.framer-Uw2tM.framer-v-1eszeeh .framer-3slweg { height: 80px; }`,
          `.framer-Uw2tM.framer-v-1s7mq8r.framer-1oykpl1 { height: min-content; width: 390px; }`,
          `.framer-Uw2tM.framer-v-1s7mq8r .framer-12rwkha { flex: none; height: min-content; padding: 0px 12px 0px 12px; }`,
          `.framer-Uw2tM.framer-v-1s7mq8r .framer-1gsq2g3 { flex: none; height: min-content; justify-content: center; padding: 80px 24px 40px 24px; }`,
          `.framer-Uw2tM.framer-v-1s7mq8r .framer-1rlbr21 { gap: 24px; max-width: unset; }`,
          `.framer-Uw2tM.framer-v-1s7mq8r .framer-1wrlm6p { flex-direction: column; gap: 17px; justify-content: center; }`,
          `.framer-Uw2tM.framer-v-1s7mq8r .framer-2tlrgj { align-content: center; align-items: center; }`,
          `.framer-Uw2tM.framer-v-1s7mq8r .framer-1b79edc { align-content: unset; align-items: unset; display: grid; gap: 20px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); justify-content: center; padding: 50px 24px 40px 24px; }`,
          `.framer-Uw2tM.framer-v-1s7mq8r .framer-aox2k, .framer-Uw2tM.framer-v-1s7mq8r .framer-1v690yy { align-self: start; flex: none; grid-column: span 2; justify-self: start; width: 100%; }`,
          `.framer-Uw2tM.framer-v-1s7mq8r .framer-1svet03 { max-width: unset; }`,
          `.framer-Uw2tM.framer-v-1s7mq8r .framer-ctmw9n { gap: 0px; padding: 0px 12px 0px 12px; }`,
          `.framer-Uw2tM.framer-v-1s7mq8r .framer-3slweg { align-content: flex-start; align-items: flex-start; gap: 6px; height: min-content; justify-content: flex-start; padding: 24px; }`,
          `.framer-Uw2tM.framer-v-1s7mq8r .framer-bw60x8 { flex-wrap: wrap; max-width: 70%; }`,
          ...ut,
          ...nt,
          ...Qe,
          ...He,
          ...ii,
          `.framer-Uw2tM[data-border="true"]::after, .framer-Uw2tM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Uw2tM`
      )),
      (Fa = Pa),
      (Pa.displayName = `Section/Footer`),
      (Pa.defaultProps = { height: 920, width: 1200 }),
      A(Pa, {
        variant: {
          options: [`hHs83DJNn`, `FOuRKioxl`, `rOACTNcGR`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: K.Enum,
        },
      }),
      G(
        Pa,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `TASA Orbiter`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `TASA Orbiter`,
                url: `../../assets/fonts/3XF4Erw3860rsdSUVZx78hPcTvQoDGHxaFGfVH4C8pm095IuGcc.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ca,
          ...ua,
          ...da,
          ...pa,
          ...ma,
          ...N(dt),
          ...N(tt),
          ...N($e),
          ...N(Ue),
          ...N(ri),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Pa.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([M(at, {}, t), M(Ge, {}, t), M(Ji, {}, t), M(Y, {}, t)])
        ),
      }));
  });
function La(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa = e(() => {
    (y(),
      B(),
      k(),
      w(),
      rt(),
      _t(),
      (Ra = { JCrIVOQ4O: { hover: !0 } }),
      (za = [`Gxl5d9der`, `JCrIVOQ4O`]),
      (Ba = `framer-HpNfP`),
      (Va = { Gxl5d9der: `framer-v-101e8do`, JCrIVOQ4O: `framer-v-1vgndpx` }),
      (Ha = { damping: 60, delay: 0, mass: 1, stiffness: 350, type: `spring` }),
      (Ua = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (Wa = { Closed: `JCrIVOQ4O`, Open: `Gxl5d9der` }),
      (Ga = E.create(s)),
      (Ka = ({
        answer: e,
        border: t,
        click: n,
        height: r,
        id: i,
        question: a,
        width: o,
        ...s
      }) => ({
        ...s,
        C4OcAfU0Y: n ?? s.C4OcAfU0Y,
        KMJ3egeYN: t ??
          s.KMJ3egeYN ?? {
            borderBottomWidth: 1,
            borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
        n9YOVtVav: a ?? s.n9YOVtVav ?? `Travaillez-vous avec des PME comme avec des grands groupes ?`,
        tJ_bRU_pm:
          e ??
          s.tJ_bRU_pm ??
          `Pour ajouter une vidéo, cliquez sur « Insérer » puis ouvrez la section « Média » et glissez un composant vidéo sur la zone de travail.`,
        variant: Wa[s.variant] ?? s.variant ?? `Gxl5d9der`,
      })),
      (qa = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ja = L(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = U();
          ke();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              n9YOVtVav: m,
              tJ_bRU_pm: h,
              C4OcAfU0Y: g,
              KMJ3egeYN: v,
              ...ee
            } = Ka(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: te,
              gestureHandlers: ne,
              gestureVariant: x,
              isLoading: S,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = Pe({
              cycleOrder: za,
              defaultVariant: `Gxl5d9der`,
              enabledGestures: Ra,
              ref: r,
              variant: p,
              variantClassNames: Va,
            }),
            k = qa(e, D),
            { activeVariantCallback: re, delay: A } = Ce(y),
            ie = re(async (...e) => {
              if (g && (await g(...e)) === !1) return !1;
              T(`JCrIVOQ4O`);
            }),
            ae = re(async (...e) => {
              if (g && (await g(...e)) === !1) return !1;
              T(`Gxl5d9der`);
            }),
            M = P(Ba, bt, it);
          return f(O, {
            id: d ?? i,
            children: f(Ga, {
              animate: D,
              initial: !1,
              children: f(Ua, {
                value: Ha,
                children: _(E.div, {
                  ...ee,
                  ...ne,
                  className: P(M, `framer-101e8do`, u, b),
                  "data-border": !0,
                  "data-framer-name": `Open`,
                  layoutDependency: k,
                  layoutId: `Gxl5d9der`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...l,
                  },
                  variants: {
                    JCrIVOQ4O: {
                      "--border-bottom-width": (v?.borderBottomWidth ?? v?.borderWidth) + `px`,
                      "--border-color": v?.borderColor,
                      "--border-left-width": (v?.borderLeftWidth ?? v?.borderWidth) + `px`,
                      "--border-right-width": (v?.borderRightWidth ?? v?.borderWidth) + `px`,
                      "--border-style": v?.borderStyle,
                      "--border-top-width": (v?.borderTopWidth ?? v?.borderWidth) + `px`,
                    },
                  },
                  ...La(
                    {
                      "JCrIVOQ4O-hover": { "data-framer-name": void 0 },
                      JCrIVOQ4O: { "data-framer-name": `Closed` },
                    },
                    y,
                    x
                  ),
                  children: [
                    f(E.div, {
                      className: `framer-xfbk46`,
                      "data-framer-name": `BG Color`,
                      layoutDependency: k,
                      layoutId: `pb4UCLmh5`,
                      style: {
                        backgroundColor: `var(--token-ff130ec1-74be-4ca9-be0f-0fd9e9fd1fd4, rgba(12, 17, 28, 0.02))`,
                        opacity: 1,
                      },
                      variants: { "JCrIVOQ4O-hover": { opacity: 1 }, JCrIVOQ4O: { opacity: 0 } },
                    }),
                    _(E.div, {
                      className: `framer-1hn2qui`,
                      "data-framer-name": `Top`,
                      "data-highlight": !0,
                      layoutDependency: k,
                      layoutId: `jaRU79_Gb`,
                      onTap: ie,
                      ...La({ JCrIVOQ4O: { onTap: ae } }, y, x),
                      children: [
                        f(j, {
                          __fromCanvasComponent: !0,
                          children: f(s, {
                            children: f(E.p, {
                              className: `framer-styles-preset-1p0vs9p`,
                              "data-styles-preset": `ZL5YG__bZ`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18)))`,
                              },
                              children: `Travaillez-vous avec des PME comme avec des grands groupes ?`,
                            }),
                          }),
                          className: `framer-13abniu`,
                          fonts: [`Inter`],
                          layoutDependency: k,
                          layoutId: `YKTZ8fPAB`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: m,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        _(E.div, {
                          className: `framer-1qt4kqp`,
                          "data-border": !0,
                          layoutDependency: k,
                          layoutId: `s0Ctbs0jL`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            borderBottomLeftRadius: 2,
                            borderBottomRightRadius: 2,
                            borderTopLeftRadius: 2,
                            borderTopRightRadius: 2,
                          },
                          children: [
                            f(E.div, {
                              className: `framer-lsj5a9`,
                              layoutDependency: k,
                              layoutId: `s3HVUqOtY`,
                              style: {
                                backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                                rotate: 45,
                              },
                              variants: { JCrIVOQ4O: { rotate: 0 } },
                            }),
                            f(E.div, {
                              className: `framer-83q8hg`,
                              layoutDependency: k,
                              layoutId: `jQ4wyajAA`,
                              style: {
                                backgroundColor: `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                                rotate: 45,
                              },
                              variants: { JCrIVOQ4O: { rotate: 0 } },
                            }),
                          ],
                        }),
                      ],
                    }),
                    f(E.div, {
                      className: `framer-b18li4`,
                      "data-framer-name": `Answer`,
                      layoutDependency: k,
                      layoutId: `h9knsczIw`,
                      style: { opacity: 1 },
                      variants: { JCrIVOQ4O: { opacity: 0 } },
                      children: f(j, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(E.p, {
                            className: `framer-styles-preset-ar7l3c`,
                            "data-styles-preset": `VpaJFpv2y`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18)))`,
                            },
                            children: `Pour ajouter une vidéo, cliquez sur « Insérer » puis ouvrez la section « Média » et glissez un composant vidéo sur la zone de travail.`,
                          }),
                        }),
                        className: `framer-xld6jh`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `QqujgKSf4`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(15, 16, 18))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          opacity: 0.7,
                        },
                        text: h,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-HpNfP.framer-t7rpb, .framer-HpNfP .framer-t7rpb { display: block; }`,
          `.framer-HpNfP.framer-101e8do { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 500px; }`,
          `.framer-HpNfP .framer-xfbk46 { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; }`,
          `.framer-HpNfP .framer-1hn2qui { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 32px; position: relative; width: 100%; }`,
          `.framer-HpNfP .framer-13abniu { -webkit-user-select: none; flex: 1 0 0px; height: auto; max-width: 88%; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-HpNfP .framer-1qt4kqp { flex: none; height: 32px; overflow: visible; position: absolute; right: 24px; top: calc(50.00000000000002% - 32px / 2); width: 32px; z-index: 1; }`,
          `.framer-HpNfP .framer-lsj5a9 { flex: none; height: 1px; left: calc(50.00000000000002% - 10px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 1px / 2); width: 10px; }`,
          `.framer-HpNfP .framer-83q8hg { flex: none; height: 10px; left: calc(50.00000000000002% - 1px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 10px / 2); width: 1px; }`,
          `.framer-HpNfP .framer-b18li4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 64px 64px 32px; position: relative; width: 100%; }`,
          `.framer-HpNfP .framer-xld6jh { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-HpNfP.framer-v-1vgndpx.framer-101e8do { cursor: pointer; }`,
          `.framer-HpNfP.framer-v-1vgndpx .framer-b18li4 { left: 0px; position: absolute; right: 0px; top: 89px; width: unset; }`,
          `.framer-HpNfP.framer-v-1vgndpx.hover .framer-b18li4 { width: unset; }`,
          ...vt,
          ...nt,
          `.framer-HpNfP[data-border="true"]::after, .framer-HpNfP [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-HpNfP`
      )),
      (Ya = Ja),
      (Ja.displayName = `Question`),
      (Ja.defaultProps = { height: 218, width: 500 }),
      A(Ja, {
        variant: {
          options: [`Gxl5d9der`, `JCrIVOQ4O`],
          optionTitles: [`Open`, `Closed`],
          title: `Variant`,
          type: K.Enum,
        },
        n9YOVtVav: {
          defaultValue: `Travaillez-vous avec des PME comme avec des grands groupes ?`,
          displayTextArea: !1,
          title: `Question`,
          type: K.String,
        },
        onn9YOVtVavChange: { changes: `n9YOVtVav`, type: K.ChangeHandler },
        tJ_bRU_pm: {
          defaultValue: `Pour ajouter une vidéo, cliquez sur « Insérer » puis ouvrez la section « Média » et glissez un composant vidéo sur la zone de travail.`,
          displayTextArea: !0,
          title: `Answer`,
          type: K.String,
        },
        ontJ_bRU_pmChange: { changes: `tJ_bRU_pm`, type: K.ChangeHandler },
        C4OcAfU0Y: { title: `Click`, type: K.EventHandler },
        KMJ3egeYN: {
          defaultValue: {
            borderBottomWidth: 1,
            borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
          title: `Border`,
          type: K.Border,
        },
      }),
      G(
        Ja,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...N(yt),
          ...N(tt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Za(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qa,
  $a,
  eo,
  to,
  no,
  Z,
  ro,
  io,
  ao,
  Q,
  oo,
  so,
  co,
  lo,
  uo = e(() => {
    (y(),
      B(),
      k(),
      w(),
      Xa(),
      (Qa = z(Ya)),
      ($a = [
        `zJcKN1b5Y`,
        `bBNdMS1hp`,
        `UMwABWZ9K`,
        `ofILuSSFR`,
        `FTqSv0PCW`,
        `MblB0hl3N`,
        `Ks4bC87g8`,
      ]),
      (eo = `framer-t2nig`),
      (to = {
        bBNdMS1hp: `framer-v-fw88es`,
        FTqSv0PCW: `framer-v-6rzhlh`,
        Ks4bC87g8: `framer-v-1m949m`,
        MblB0hl3N: `framer-v-1srx7zi`,
        ofILuSSFR: `framer-v-11uag6u`,
        UMwABWZ9K: `framer-v-1wcc3s`,
        zJcKN1b5Y: `framer-v-1lrp5pk`,
      }),
      (no = { damping: 60, delay: 0, mass: 1, stiffness: 350, type: `spring` }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ro = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (io = {
        "Question 1": `bBNdMS1hp`,
        "Question 2": `UMwABWZ9K`,
        "Question 3": `ofILuSSFR`,
        "Question 4": `FTqSv0PCW`,
        "Question 5": `MblB0hl3N`,
        "Question 6": `Ks4bC87g8`,
        Default: `zJcKN1b5Y`,
      }),
      (ao = E.create(s)),
      (Q = (e, t) => {
        let [r, i] = n(e),
          [a, o] = n(e);
        return t ? [e, t] : (e !== a && (i(e), o(e)), [r, i]);
      }),
      (oo = ({
        answer1: e,
        answer2: t,
        answer3: n,
        answer4: r,
        answer5: i,
        answer6: a,
        height: o,
        id: s,
        question1: c,
        question2: l,
        question3: u,
        question4: d,
        question5: f,
        question6: p,
        width: m,
        ...h
      }) => ({
        ...h,
        AEJpmVQtj:
          a ??
          h.AEJpmVQtj ??
          `Pour ajouter une vidéo, cliquez sur « Insérer » puis ouvrez la section « Média » et glissez un composant vidéo sur la zone de travail.`,
        f6MCfUa9_:
          n ??
          h.f6MCfUa9_ ??
          `Pour ajouter une vidéo, cliquez sur « Insérer » puis ouvrez la section « Média » et glissez un composant vidéo sur la zone de travail.`,
        HfER0Vust: u ?? h.HfER0Vust ?? `Comment ajouter des vidéos ?`,
        hx0b_8Yll: l ?? h.hx0b_8Yll ?? `Comment ajouter des images ?`,
        lvMeUTpra:
          e ??
          h.lvMeUTpra ??
          `Pour dessiner un cadre, cliquez sur Disposition dans la barre d'outils, puis sélectionnez Cadre.`,
        MN7X4aiWW: f ?? h.MN7X4aiWW ?? `Travaillez-vous avec des PME comme avec des grands groupes ?`,
        N1DFKMWNl: c ?? h.N1DFKMWNl ?? `Travaillez-vous avec des PME comme avec des grands groupes ?`,
        nkVioaBKI:
          i ??
          h.nkVioaBKI ??
          `Pour ajouter une vidéo, cliquez sur « Insérer » puis ouvrez la section « Média » et glissez un composant vidéo sur la zone de travail.`,
        nNR17NJf8:
          t ??
          h.nNR17NJf8 ??
          `Pour ajouter une image, sélectionnez un cadre puis ouvrez la propriété Remplissage et importez votre image.`,
        rRAs0Oz3k: p ?? h.rRAs0Oz3k ?? `Proposez-vous le CDI intérimaire ?`,
        variant: io[h.variant] ?? h.variant ?? `zJcKN1b5Y`,
        zRmqVy5Ic: d ?? h.zRmqVy5Ic ?? `Travaillez-vous avec des PME comme avec des grands groupes ?`,
        zWQJJV8Bb:
          r ??
          h.zWQJJV8Bb ??
          `Pour ajouter une vidéo, cliquez sur « Insérer » puis ouvrez la section « Média » et glissez un composant vidéo sur la zone de travail.`,
      })),
      (so = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (co = L(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: s } = U(),
            c = ke(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              N1DFKMWNl: m,
              onN1DFKMWNlChange: h,
              lvMeUTpra: g,
              onlvMeUTpraChange: v,
              hx0b_8Yll: ee,
              onhx0b_8YllChange: y,
              nNR17NJf8: b,
              onnNR17NJf8Change: te,
              HfER0Vust: ne,
              onHfER0VustChange: x,
              f6MCfUa9_: S,
              onf6MCfUa9_Change: w,
              zRmqVy5Ic: T,
              onzRmqVy5IcChange: D,
              zWQJJV8Bb: k,
              onzWQJJV8BbChange: re,
              MN7X4aiWW: A,
              onMN7X4aiWWChange: ie,
              nkVioaBKI: j,
              onnkVioaBKIChange: ae,
              rRAs0Oz3k: M,
              onrRAs0Oz3kChange: N,
              AEJpmVQtj: oe,
              onAEJpmVQtjChange: se,
              ...ce
            } = oo(e),
            [I, L] = Q(m, h),
            [R, z] = Q(g, v),
            [le, B] = Q(ee, y),
            [V, ue] = Q(b, te),
            [H, de] = Q(ne, x),
            [fe, pe] = Q(S, w),
            [me, he] = Q(T, D),
            [ge, _e] = Q(k, re),
            [ve, ye] = Q(A, ie),
            [G, be] = Q(j, ae),
            [xe, Se] = Q(M, N),
            [K, we] = Q(oe, se),
            {
              baseVariant: Te,
              classNames: Ee,
              clearLoadingGesture: De,
              gestureHandlers: Oe,
              gestureVariant: Ae,
              isLoading: je,
              setGestureState: Me,
              setVariant: Ne,
              variants: Fe,
            } = Pe({
              cycleOrder: $a,
              defaultVariant: `zJcKN1b5Y`,
              ref: r,
              variant: p,
              variantClassNames: to,
            }),
            Ie = so(e, Fe),
            { activeVariantCallback: Le, delay: Re } = Ce(Te),
            ze = Le(async (...e) => {
              Ne(`bBNdMS1hp`);
            }),
            Be = Le(async (...e) => {
              Ne(`UMwABWZ9K`);
            }),
            Ve = Le(async (...e) => {
              Ne(`ofILuSSFR`);
            }),
            He = Le(async (...e) => {
              Ne(`FTqSv0PCW`);
            }),
            Ue = Le(async (...e) => {
              Ne(`MblB0hl3N`);
            }),
            We = Le(async (...e) => {
              Ne(`Ks4bC87g8`);
            }),
            Ge = P(eo);
          return f(O, {
            id: d ?? i,
            children: f(ao, {
              animate: Fe,
              initial: !1,
              children: f(ro, {
                value: no,
                children: _(E.div, {
                  ...ce,
                  ...Oe,
                  className: P(Ge, `framer-1lrp5pk`, u, Ee),
                  "data-framer-name": `Default`,
                  layoutDependency: Ie,
                  layoutId: `zJcKN1b5Y`,
                  ref: r,
                  style: { ...l },
                  ...Za(
                    {
                      bBNdMS1hp: { "data-framer-name": `Question 1` },
                      FTqSv0PCW: { "data-framer-name": `Question 4` },
                      Ks4bC87g8: { "data-framer-name": `Question 6` },
                      MblB0hl3N: { "data-framer-name": `Question 5` },
                      ofILuSSFR: { "data-framer-name": `Question 3` },
                      UMwABWZ9K: { "data-framer-name": `Question 2` },
                    },
                    Te,
                    Ae
                  ),
                  children: [
                    f(W, {
                      height: 218,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + 0,
                      children: f(F, {
                        className: `framer-1lyv713-container`,
                        layoutDependency: Ie,
                        layoutId: `errq4Li1A-container`,
                        nodeId: `errq4Li1A`,
                        rendersWithMotion: !0,
                        scopeId: `wpFxNUolA`,
                        children: f(Ya, {
                          C4OcAfU0Y: ze,
                          height: `100%`,
                          id: `errq4Li1A`,
                          KMJ3egeYN: {
                            borderBottomWidth: 1,
                            borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderStyle: `solid`,
                            borderTopWidth: 0,
                          },
                          layoutId: `errq4Li1A`,
                          n9YOVtVav: I,
                          onn9YOVtVavChange: L,
                          ontJ_bRU_pmChange: z,
                          style: { width: `100%` },
                          tJ_bRU_pm: R,
                          variant: Z(`JCrIVOQ4O`),
                          width: `100%`,
                          ...Za({ bBNdMS1hp: { variant: Z(`Gxl5d9der`) } }, Te, Ae),
                        }),
                      }),
                    }),
                    f(W, {
                      height: 218,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + 218,
                      children: f(F, {
                        className: `framer-ln04p1-container`,
                        layoutDependency: Ie,
                        layoutId: `WB_VFn5wm-container`,
                        nodeId: `WB_VFn5wm`,
                        rendersWithMotion: !0,
                        scopeId: `wpFxNUolA`,
                        children: f(Ya, {
                          C4OcAfU0Y: Be,
                          height: `100%`,
                          id: `WB_VFn5wm`,
                          KMJ3egeYN: {
                            borderBottomWidth: 1,
                            borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderStyle: `solid`,
                            borderTopWidth: 0,
                          },
                          layoutId: `WB_VFn5wm`,
                          n9YOVtVav: le,
                          onn9YOVtVavChange: B,
                          ontJ_bRU_pmChange: ue,
                          style: { width: `100%` },
                          tJ_bRU_pm: V,
                          variant: Z(`JCrIVOQ4O`),
                          width: `100%`,
                          ...Za({ UMwABWZ9K: { variant: Z(`Gxl5d9der`) } }, Te, Ae),
                        }),
                      }),
                    }),
                    f(W, {
                      height: 218,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + 436,
                      children: f(F, {
                        className: `framer-jonsp9-container`,
                        layoutDependency: Ie,
                        layoutId: `B2G78I5O4-container`,
                        nodeId: `B2G78I5O4`,
                        rendersWithMotion: !0,
                        scopeId: `wpFxNUolA`,
                        children: f(Ya, {
                          C4OcAfU0Y: Ve,
                          height: `100%`,
                          id: `B2G78I5O4`,
                          KMJ3egeYN: {
                            borderBottomWidth: 1,
                            borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderStyle: `solid`,
                            borderTopWidth: 0,
                          },
                          layoutId: `B2G78I5O4`,
                          n9YOVtVav: H,
                          onn9YOVtVavChange: de,
                          ontJ_bRU_pmChange: pe,
                          style: { width: `100%` },
                          tJ_bRU_pm: fe,
                          variant: Z(`JCrIVOQ4O`),
                          width: `100%`,
                          ...Za({ ofILuSSFR: { variant: Z(`Gxl5d9der`) } }, Te, Ae),
                        }),
                      }),
                    }),
                    f(W, {
                      height: 218,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + 654,
                      children: f(F, {
                        className: `framer-f8y38n-container`,
                        layoutDependency: Ie,
                        layoutId: `d8joospte-container`,
                        nodeId: `d8joospte`,
                        rendersWithMotion: !0,
                        scopeId: `wpFxNUolA`,
                        children: f(Ya, {
                          C4OcAfU0Y: He,
                          height: `100%`,
                          id: `d8joospte`,
                          KMJ3egeYN: {
                            borderBottomWidth: 1,
                            borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderStyle: `solid`,
                            borderTopWidth: 0,
                          },
                          layoutId: `d8joospte`,
                          n9YOVtVav: me,
                          onn9YOVtVavChange: he,
                          ontJ_bRU_pmChange: _e,
                          style: { width: `100%` },
                          tJ_bRU_pm: ge,
                          variant: Z(`JCrIVOQ4O`),
                          width: `100%`,
                          ...Za({ FTqSv0PCW: { variant: Z(`Gxl5d9der`) } }, Te, Ae),
                        }),
                      }),
                    }),
                    f(W, {
                      height: 218,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + 872,
                      children: f(F, {
                        className: `framer-1xeg7pm-container`,
                        layoutDependency: Ie,
                        layoutId: `dI2GoUqnF-container`,
                        nodeId: `dI2GoUqnF`,
                        rendersWithMotion: !0,
                        scopeId: `wpFxNUolA`,
                        children: f(Ya, {
                          C4OcAfU0Y: Ue,
                          height: `100%`,
                          id: `dI2GoUqnF`,
                          KMJ3egeYN: {
                            borderBottomWidth: 1,
                            borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderStyle: `solid`,
                            borderTopWidth: 0,
                          },
                          layoutId: `dI2GoUqnF`,
                          n9YOVtVav: ve,
                          onn9YOVtVavChange: ye,
                          ontJ_bRU_pmChange: be,
                          style: { width: `100%` },
                          tJ_bRU_pm: G,
                          variant: Z(`JCrIVOQ4O`),
                          width: `100%`,
                          ...Za({ MblB0hl3N: { variant: Z(`Gxl5d9der`) } }, Te, Ae),
                        }),
                      }),
                    }),
                    f(W, {
                      height: 218,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0 + 1090,
                      children: f(F, {
                        className: `framer-4swbj0-container`,
                        layoutDependency: Ie,
                        layoutId: `x1qcWAu_z-container`,
                        nodeId: `x1qcWAu_z`,
                        rendersWithMotion: !0,
                        scopeId: `wpFxNUolA`,
                        children: f(Ya, {
                          C4OcAfU0Y: We,
                          height: `100%`,
                          id: `x1qcWAu_z`,
                          KMJ3egeYN: {
                            borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                            borderStyle: `solid`,
                            borderWidth: 0,
                          },
                          layoutId: `x1qcWAu_z`,
                          n9YOVtVav: xe,
                          onn9YOVtVavChange: Se,
                          ontJ_bRU_pmChange: we,
                          style: { width: `100%` },
                          tJ_bRU_pm: K,
                          variant: Z(`JCrIVOQ4O`),
                          width: `100%`,
                          ...Za({ Ks4bC87g8: { variant: Z(`Gxl5d9der`) } }, Te, Ae),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-t2nig.framer-1wj0dui, .framer-t2nig .framer-1wj0dui { display: block; }`,
          `.framer-t2nig.framer-1lrp5pk { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 500px; }`,
          `.framer-t2nig .framer-1lyv713-container, .framer-t2nig .framer-ln04p1-container, .framer-t2nig .framer-jonsp9-container, .framer-t2nig .framer-f8y38n-container, .framer-t2nig .framer-1xeg7pm-container, .framer-t2nig .framer-4swbj0-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ],
        `framer-t2nig`
      )),
      (lo = co),
      (co.displayName = `Accordion`),
      (co.defaultProps = { height: 535, width: 500 }),
      A(co, {
        variant: {
          options: [
            `zJcKN1b5Y`,
            `bBNdMS1hp`,
            `UMwABWZ9K`,
            `ofILuSSFR`,
            `FTqSv0PCW`,
            `MblB0hl3N`,
            `Ks4bC87g8`,
          ],
          optionTitles: [
            `Default`,
            `Question 1`,
            `Question 2`,
            `Question 3`,
            `Question 4`,
            `Question 5`,
            `Question 6`,
          ],
          title: `Variant`,
          type: K.Enum,
        },
        N1DFKMWNl: {
          defaultValue: `Travaillez-vous avec des PME comme avec des grands groupes ?`,
          displayTextArea: !1,
          title: `Question 1`,
          type: K.String,
        },
        onN1DFKMWNlChange: { changes: `N1DFKMWNl`, type: K.ChangeHandler },
        lvMeUTpra: {
          defaultValue: `Pour dessiner un cadre, cliquez sur Disposition dans la barre d'outils, puis sélectionnez Cadre.`,
          displayTextArea: !0,
          title: `Answer 1`,
          type: K.String,
        },
        onlvMeUTpraChange: { changes: `lvMeUTpra`, type: K.ChangeHandler },
        hx0b_8Yll: {
          defaultValue: `Comment ajouter des images ?`,
          displayTextArea: !1,
          title: `Question 2`,
          type: K.String,
        },
        onhx0b_8YllChange: { changes: `hx0b_8Yll`, type: K.ChangeHandler },
        nNR17NJf8: {
          defaultValue: `Pour ajouter une image, sélectionnez un cadre puis ouvrez la propriété Remplissage et importez votre image.`,
          displayTextArea: !0,
          title: `Answer 2`,
          type: K.String,
        },
        onnNR17NJf8Change: { changes: `nNR17NJf8`, type: K.ChangeHandler },
        HfER0Vust: {
          defaultValue: `Comment ajouter des vidéos ?`,
          displayTextArea: !1,
          title: `Question 3`,
          type: K.String,
        },
        onHfER0VustChange: { changes: `HfER0Vust`, type: K.ChangeHandler },
        f6MCfUa9_: {
          defaultValue: `Pour ajouter une vidéo, cliquez sur « Insérer » puis ouvrez la section « Média » et glissez un composant vidéo sur la zone de travail.`,
          displayTextArea: !0,
          title: `Answer 3`,
          type: K.String,
        },
        onf6MCfUa9_Change: { changes: `f6MCfUa9_`, type: K.ChangeHandler },
        zRmqVy5Ic: {
          defaultValue: `Travaillez-vous avec des PME comme avec des grands groupes ?`,
          displayTextArea: !1,
          title: `Question 4`,
          type: K.String,
        },
        onzRmqVy5IcChange: { changes: `zRmqVy5Ic`, type: K.ChangeHandler },
        zWQJJV8Bb: {
          defaultValue: `Pour ajouter une vidéo, cliquez sur « Insérer » puis ouvrez la section « Média » et glissez un composant vidéo sur la zone de travail.`,
          displayTextArea: !0,
          title: `Answer 4`,
          type: K.String,
        },
        onzWQJJV8BbChange: { changes: `zWQJJV8Bb`, type: K.ChangeHandler },
        MN7X4aiWW: {
          defaultValue: `Travaillez-vous avec des PME comme avec des grands groupes ?`,
          displayTextArea: !1,
          title: `Question 5`,
          type: K.String,
        },
        onMN7X4aiWWChange: { changes: `MN7X4aiWW`, type: K.ChangeHandler },
        nkVioaBKI: {
          defaultValue: `Pour ajouter une vidéo, cliquez sur « Insérer » puis ouvrez la section « Média » et glissez un composant vidéo sur la zone de travail.`,
          displayTextArea: !0,
          title: `Answer 5`,
          type: K.String,
        },
        onnkVioaBKIChange: { changes: `nkVioaBKI`, type: K.ChangeHandler },
        rRAs0Oz3k: {
          defaultValue: `Proposez-vous le CDI intérimaire ?`,
          displayTextArea: !1,
          title: `Question 6`,
          type: K.String,
        },
        onrRAs0Oz3kChange: { changes: `rRAs0Oz3k`, type: K.ChangeHandler },
        AEJpmVQtj: {
          defaultValue: `Pour ajouter une vidéo, cliquez sur « Insérer » puis ouvrez la section « Média » et glissez un composant vidéo sur la zone de travail.`,
          displayTextArea: !0,
          title: `Answer 6`,
          type: K.String,
        },
        onAEJpmVQtjChange: { changes: `AEJpmVQtj`, type: K.ChangeHandler },
      }),
      G(co, [{ explicitInter: !0, fonts: [] }, ...Qa], { supportsExplicitInterCodegen: !0 }),
      (co.loader = { load: (e, t) => (t.locale, Promise.allSettled([M(Ya, {}, t)])) }));
  });
function fo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  Do,
  Oo,
  ko,
  Ao = e(() => {
    (y(),
      B(),
      k(),
      w(),
      pt(),
      lt(),
      rt(),
      uo(),
      (po = Ne(E.div)),
      (mo = z(lo)),
      (ho = [`FjOqYAjTx`, `hs_fo57B6`, `HJG2Qf3DS`]),
      (go = `framer-jZxZd`),
      (_o = {
        FjOqYAjTx: `framer-v-l6ke9n`,
        HJG2Qf3DS: `framer-v-1pi3aof`,
        hs_fo57B6: `framer-v-1mnzutz`,
      }),
      (vo = { damping: 60, delay: 0, mass: 1, stiffness: 350, type: `spring` }),
      (yo = {
        effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
        repeat: !1,
        startDelay: 0.1,
        threshold: 0,
        tokenization: `line`,
        transition: { damping: 60, delay: 0.075, mass: 1, stiffness: 300, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (bo = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (xo = { damping: 60, delay: 0.1, mass: 1, stiffness: 300, type: `spring` }),
      (So = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Co = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (wo = { Desktop: `FjOqYAjTx`, Phone: `HJG2Qf3DS`, Tablet: `hs_fo57B6` }),
      (To = E.create(s)),
      (Eo = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: wo[r.variant] ?? r.variant ?? `FjOqYAjTx`,
      })),
      (Do = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Oo = L(
        p(function (e, t) {return null;
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = U(),
            l = ke(),
            { style: u, className: d, layoutId: p, variant: m, ...h } = Eo(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: ee,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: te,
              setGestureState: ne,
              setVariant: x,
              variants: S,
            } = Pe({
              cycleOrder: ho,
              defaultVariant: `FjOqYAjTx`,
              ref: r,
              variant: m,
              variantClassNames: _o,
            }),
            w = Do(e, S),
            T = P(go, ft, it, gt);
          return f(O, {
            id: p ?? i,
            children: f(To, {
              animate: S,
              initial: !1,
              children: f(Co, {
                value: vo,
                children: f(E.section, {
                  ...h,
                  ...y,
                  className: P(T, `framer-l6ke9n`, d, v),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: w,
                  layoutId: `FjOqYAjTx`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...u,
                  },
                  ...fo(
                    {
                      HJG2Qf3DS: { "data-framer-name": `Phone` },
                      hs_fo57B6: { "data-framer-name": `Tablet` },
                    },
                    g,
                    b
                  ),
                  children: f(E.section, {
                    className: `framer-vho6mr`,
                    "data-border": !0,
                    "data-framer-name": `Content Container`,
                    layoutDependency: w,
                    layoutId: `WM5gobKHe`,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                    },
                    children: _(E.div, {
                      className: `framer-8zo1x8`,
                      "data-framer-name": `Content`,
                      layoutDependency: w,
                      layoutId: `lPGiO38Bi`,
                      children: [
                        _(E.div, {
                          className: `framer-1xm6aub`,
                          "data-framer-name": `Headline`,
                          layoutDependency: w,
                          layoutId: `N3m80apQE`,
                          children: [
                            f(E.div, {
                              className: `framer-11tkde0`,
                              "data-framer-name": `Top`,
                              layoutDependency: w,
                              layoutId: `zkP8kSMvE`,
                              children: f(E.div, {
                                className: `framer-2jn7vb`,
                                "data-framer-name": `Text Container`,
                                layoutDependency: w,
                                layoutId: `SP4JeA5n9`,
                                children: f(j, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(E.h2, {
                                      className: `framer-styles-preset-1592g84`,
                                      "data-styles-preset": `QZFw8ECYE`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: `Questions fréquentes`,
                                    }),
                                  }),
                                  className: `framer-1dzolpy`,
                                  effect: yo,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `CcA9r_ney`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...fo(
                                    {
                                      hs_fo57B6: {
                                        children: f(s, {
                                          children: f(E.h2, {
                                            className: `framer-styles-preset-1592g84`,
                                            "data-styles-preset": `QZFw8ECYE`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `Questions fréquentes`,
                                          }),
                                        }),
                                      },
                                    },
                                    g,
                                    b
                                  ),
                                }),
                              }),
                            }),
                            _(po, {
                              __framer__animate: { transition: xo },
                              __framer__animateOnce: !0,
                              __framer__enter: bo,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-17yolte`,
                              "data-framer-name": `contact`,
                              layoutDependency: w,
                              layoutId: `g3udUvQhj`,
                              children: [
                                f(j, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(E.p, {
                                      className: `framer-styles-preset-ar7l3c`,
                                      "data-styles-preset": `VpaJFpv2y`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(81, 85, 94)))`,
                                      },
                                      children: `Vous avez d'autres questions ?`,
                                    }),
                                  }),
                                  className: `framer-k9dx2d`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `y5FwZQsSc`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-16ed3e8b-f29a-4a72-b95d-9a15802ddd55, rgb(81, 85, 94))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(j, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(E.p, {
                                      className: `framer-styles-preset-ar7l3c`,
                                      "data-styles-preset": `VpaJFpv2y`,
                                      dir: `auto`,
                                      children: f(ue, {
                                        href: { webPageId: `MTMcCw60K` },
                                        motionChild: !0,
                                        nodeId: `z4v2ljIDJ`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `wE4xYrRB4`,
                                        smoothScroll: !1,
                                        children: f(E.a, {
                                          className: `framer-styles-preset-e4u9vm`,
                                          "data-styles-preset": `jdYQlRkvk`,
                                          children: `Contactez-nous.`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-ngefmf`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `z4v2ljIDJ`,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        f(po, {
                          __framer__animate: { transition: xo },
                          __framer__animateOnce: !0,
                          __framer__enter: bo,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-h5dty2`,
                          "data-border": !0,
                          "data-framer-name": `Accordion`,
                          layoutDependency: w,
                          layoutId: `JcM2jaRAU`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          variants: {
                            HJG2Qf3DS: {
                              "--border-left-width": `0px`,
                              "--border-top-width": `1px`,
                            },
                            hs_fo57B6: {
                              "--border-left-width": `0px`,
                              "--border-top-width": `1px`,
                            },
                          },
                          children: f(W, {
                            height: 535,
                            width: `max(min(max(min(${l?.width || `100vw`} - 80px, 1320px) / 2, 1px), min(${l?.width || `100vw`} - 80px, 1320px) / 2), 1px)`,
                            y:
                              (l?.y || 0) +
                              0 +
                              (((l?.height || 200) - 0 - 535) / 2 + 0 + 0) +
                              0 +
                              0 +
                              0 +
                              0,
                            ...fo(
                              {
                                HJG2Qf3DS: {
                                  width: `max(min(${l?.width || `100vw`} - 24px, 1320px), 1px)`,
                                  y:
                                    (l?.y || 0) +
                                    0 +
                                    (((l?.height || 1219.5) - 0 - 758.6) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0 +
                                    223.6 +
                                    0,
                                },
                                hs_fo57B6: {
                                  width: `max(min(${l?.width || `100vw`} - 48px, 1320px), 1px)`,
                                  y:
                                    (l?.y || 0) +
                                    0 +
                                    (((l?.height || 1001.5) - 0 - 814.6) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0 +
                                    279.6 +
                                    0,
                                },
                              },
                              g,
                              b
                            ),
                            children: f(F, {
                              className: `framer-wer8jg-container`,
                              layoutDependency: w,
                              layoutId: `oEXcP4NbN-container`,
                              nodeId: `oEXcP4NbN`,
                              rendersWithMotion: !0,
                              scopeId: `wE4xYrRB4`,
                              children: f(lo, {
                                AEJpmVQtj: `It starts with a conversation. We’ll assess your current setup, understand your goals, and determine if there’s a strong fit before moving forward.`,
                                f6MCfUa9_: `Most engagements start with a focused audit, followed by a structured plan and ongoing support to implement and refine systems as the business evolves.`,
                                height: `100%`,
                                HfER0Vust: `What does a typical engagement look like?`,
                                hx0b_8Yll: `What types of businesses do you work with?`,
                                id: `oEXcP4NbN`,
                                layoutId: `oEXcP4NbN`,
                                lvMeUTpra: `We work closely with leadership teams to understand the business, identify bottlenecks, and implement structured systems. It’s a mix of strategy, execution, and ongoing refinement.`,
                                MN7X4aiWW: `Do you only advise, or do you also execute?`,
                                N1DFKMWNl: `How do you typically work with clients?`,
                                nkVioaBKI: `We do both. Strategy without execution doesn’t drive outcomes, so we stay involved to ensure plans are implemented effectively.`,
                                nNR17NJf8: `We typically partner with growing companies that need more clarity across operations, performance, and decision-making as they scale.`,
                                rRAs0Oz3k: `How do we get started working with Talentorz?`,
                                style: { width: `100%` },
                                variant: So(`bBNdMS1hp`),
                                width: `100%`,
                                zRmqVy5Ic: `How quickly can we expect results?`,
                                zWQJJV8Bb: `Clarity and direction are established early. Measurable improvements depend on scope, but most clients begin seeing operational and performance gains within weeks.`,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-jZxZd.framer-12r13qh, .framer-jZxZd .framer-12r13qh { display: block; }`,
          `.framer-jZxZd.framer-l6ke9n { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 1200px; }`,
          `.framer-jZxZd .framer-vho6mr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1320px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-jZxZd .framer-8zo1x8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-jZxZd .framer-1xm6aub { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; max-width: 50%; overflow: visible; padding: 48px; position: relative; width: 1px; }`,
          `.framer-jZxZd .framer-11tkde0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-jZxZd .framer-2jn7vb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-jZxZd .framer-1dzolpy { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-jZxZd .framer-17yolte { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-jZxZd .framer-k9dx2d, .framer-jZxZd .framer-ngefmf { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-jZxZd .framer-h5dty2 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 50%; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-jZxZd .framer-wer8jg-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-jZxZd.framer-v-1mnzutz.framer-l6ke9n { padding: 0px 24px 0px 24px; width: 810px; }`,
          `.framer-jZxZd.framer-v-1mnzutz .framer-8zo1x8, .framer-jZxZd.framer-v-1pi3aof .framer-8zo1x8 { flex-direction: column; }`,
          `.framer-jZxZd.framer-v-1mnzutz .framer-1xm6aub { align-content: center; align-items: center; align-self: unset; flex: none; gap: 32px; height: min-content; justify-content: flex-start; max-width: unset; order: 0; padding: 120px 24px 48px 24px; width: 100%; }`,
          `.framer-jZxZd.framer-v-1mnzutz .framer-2jn7vb { align-content: center; align-items: center; }`,
          `.framer-jZxZd.framer-v-1mnzutz .framer-1dzolpy { max-width: 75%; }`,
          `.framer-jZxZd.framer-v-1mnzutz .framer-17yolte { justify-content: center; }`,
          `.framer-jZxZd.framer-v-1mnzutz .framer-h5dty2 { flex: none; max-width: unset; order: 1; width: 100%; }`,
          `.framer-jZxZd.framer-v-1pi3aof.framer-l6ke9n { padding: 0px 12px 0px 12px; width: 390px; }`,
          `.framer-jZxZd.framer-v-1pi3aof .framer-1xm6aub { align-content: center; align-items: center; align-self: unset; flex: none; gap: 24px; height: min-content; justify-content: center; max-width: unset; padding: 80px 24px 40px 24px; width: 100%; }`,
          `.framer-jZxZd.framer-v-1pi3aof .framer-h5dty2 { flex: none; max-width: unset; width: 100%; }`,
          ...ut,
          ...nt,
          ...mt,
          `.framer-jZxZd[data-border="true"]::after, .framer-jZxZd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-jZxZd`
      )),
      (ko = Oo),
      (Oo.displayName = `Section/FAQ`),
      (Oo.defaultProps = { height: 685, width: 1200 }),
      A(Oo, {
        variant: {
          options: [`FjOqYAjTx`, `hs_fo57B6`, `HJG2Qf3DS`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: K.Enum,
        },
      }),
      G(
        Oo,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...mo,
          ...N(dt),
          ...N(tt),
          ...N(ht),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Oo.loader = { load: (e, t) => (t.locale, Promise.allSettled([M(lo, {}, t)])) }));
  }),
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  $,
  zo,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo = e(() => {
    (y(),
      B(),
      k(),
      w(),
      It(),
      ni(),
      ot(),
      Ia(),
      Ao(),
      (jo = z(Ft)),
      (Mo = z(ti)),
      (No = z(ko)),
      (Po = z(at)),
      (Fo = z(Fa)),
      (Io = {
        F_OYP6kcp: `(min-width: 1200px)`,
        uuh4D4uHN: `(max-width: 809.98px)`,
        vMEVfXZwr: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (Lo = `framer-mbyme`),
      (Ro = {
        F_OYP6kcp: `framer-v-1vf60od`,
        uuh4D4uHN: `framer-v-wyi4df`,
        vMEVfXZwr: `framer-v-569q3`,
      }),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (zo = {
        uuh4D4uHN: [`.framer-mbyme .framer-ykrbgx { height: 58px; }`],
        vMEVfXZwr: [`.framer-mbyme .framer-ykrbgx { height: 66px; }`],
      }),
      (Bo = Object.keys(zo)),
      (Vo = { uuh4D4uHN: `.framer-wyi4df-override`, vMEVfXZwr: `.framer-569q3-override` }),
      (Ho = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-mbyme.framer-13mc1vg, .framer-mbyme .framer-13mc1vg { display: block; }`,
        `.framer-mbyme.framer-1vf60od { --selection-background-color: var(--token-ea844e6c-3d0f-43a9-8349-81472c10de68, #0056fb) /* {"name":"Brand Blue 100"} */; --selection-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8) /* {"name":"Heading-BG Light 1"} */; align-content: center; align-items: center; background-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-mbyme .framer-1cpjicr-container { flex: none; height: auto; order: -1000; position: relative; width: auto; }`,
        `.framer-mbyme .framer-172532k-container { flex: none; height: auto; left: 50%; order: -999; position: var(--framer-canvas-fixed-position, fixed); top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }`,
        `.framer-mbyme .framer-ykrbgx { --border-bottom-width: 0px; --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, #2f323d); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; flex: none; height: 68px; order: -998; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-mbyme .framer-ihclb5 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-mbyme .framer-ihx058-container { flex: none; height: auto; order: 1004; position: relative; width: 100%; }`,
        `.framer-mbyme .framer-1mr2nd0-container { flex: none; height: auto; order: 1005; position: relative; width: 100%; }`,
        `.framer-mbyme .framer-rqx1q9-container { flex: none; height: auto; order: 1006; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        `.framer-mbyme[data-selection="true"] * ::selection, .framer-mbyme [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `.framer-mbyme[data-border="true"]::after, .framer-mbyme [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Uo = {
        F_OYP6kcp: `(min-width: 1200px)`,
        uuh4D4uHN: `(max-width: 809.98px)`,
        vMEVfXZwr: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (Wo = { Desktop: `F_OYP6kcp`, Phone: `uuh4D4uHN`, Tablet: `vMEVfXZwr` }),
      (Go = ({ value: e }) =>
        Te()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Ko = ({ fAQ: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        qqIv65LAf: e ?? i.qqIv65LAf ?? !0,
        variant: Wo[i.variant] ?? i.variant ?? `F_OYP6kcp`,
      })),
      (qo = p(function (e, t) {
        let n = o(null),
          r = t ?? n,
          i = C(),
          { activeLocale: a, setLocale: s } = U(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            qqIv65LAf: p,
            children: m,
            ...h
          } = Ko(e),
          [g, v] = ge(d, Io, !1),
          ee = P(Lo);
        return (
          je({}),
          f(he.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: Wo,
              isLayoutTemplate: !0,
              primaryVariantId: `F_OYP6kcp`,
              variantClassNames: Ro,
            },
            children: _(O, {
              id: u ?? i,
              children: [
                f(Go, {
                  value: `:root body { background: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)); }`,
                }),
                _(E.div, {
                  ...h,
                  className: P(ee, `framer-1vf60od`, l),
                  "data-layout-template": !0,
                  "data-selection": !0,
                  ref: r,
                  style: { ...c },
                  children: [
                    f(W, {
                      children: f(H, {
                        className: `framer-1cpjicr-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `meKYDw35S`,
                        scopeId: `Ig992jJZz`,
                        children: f(Ft, {
                          height: `100%`,
                          id: `meKYDw35S`,
                          intensity: 5,
                          layoutId: `meKYDw35S`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    f(W, {
                      height: 68,
                      width: `100vw`,
                      y: 0,
                      children: f(H, {
                        className: `framer-172532k-container`,
                        "data-framer-layout-hint-center-x": !0,
                        layoutScroll: !0,
                        nodeId: `CZ5v2RmGv`,
                        scopeId: `Ig992jJZz`,
                        children: f(I, {
                          breakpoint: g,
                          overrides: {
                            uuh4D4uHN: { variant: $(`BWrv1Oqa1`) },
                            vMEVfXZwr: { variant: $(`QGi4tSnT3`) },
                          },
                          children: f(ti, {
                            height: `100%`,
                            id: `CZ5v2RmGv`,
                            layoutId: `CZ5v2RmGv`,
                            style: { width: `100%` },
                            variant: $(`Aa_Mso4sj`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    f(E.div, {
                      className: `framer-ykrbgx`,
                      "data-border": !0,
                      "data-framer-name": `Spacer`,
                    }),
                    m,
                    f(`div`, { className: `framer-ihclb5` }),
                    p !== !1 &&
                      f(I, {
                        breakpoint: g,
                        overrides: { uuh4D4uHN: { y: 1258 }, vMEVfXZwr: { y: 1266 } },
                        children: f(W, {
                          height: 685,
                          width: `100vw`,
                          y: 1268,
                          children: f(H, {
                            className: `framer-ihx058-container`,
                            nodeId: `TMs95iaoA`,
                            scopeId: `Ig992jJZz`,
                            children: f(I, {
                              breakpoint: g,
                              overrides: {
                                uuh4D4uHN: { variant: $(`HJG2Qf3DS`) },
                                vMEVfXZwr: { variant: $(`hs_fo57B6`) },
                              },
                              children: f(ko, {
                                height: `100%`,
                                id: `TMs95iaoA`,
                                layoutId: `TMs95iaoA`,
                                style: { width: `100%` },
                                variant: $(`FjOqYAjTx`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    f(I, {
                      breakpoint: g,
                      overrides: { uuh4D4uHN: { y: 1258 }, vMEVfXZwr: { y: 1266 } },
                      children: f(W, {
                        height: 40,
                        width: `100vw`,
                        y: 1268,
                        children: f(H, {
                          className: `framer-1mr2nd0-container`,
                          nodeId: `h23TFS1Mr`,
                          scopeId: `Ig992jJZz`,
                          children: f(I, {
                            breakpoint: g,
                            overrides: {
                              uuh4D4uHN: { variant: $(`Jyf0NVykQ`) },
                              vMEVfXZwr: { variant: $(`txn0xfHi_`) },
                            },
                            children: f(at, {
                              height: `100%`,
                              id: `h23TFS1Mr`,
                              layoutId: `h23TFS1Mr`,
                              nzjXCr09A: {
                                borderBottomWidth: 0,
                                borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              style: { width: `100%` },
                              Uz_x_jqMH: {
                                borderBottomWidth: 1,
                                borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              variant: $(`gRIREuRnZ`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    f(I, {
                      breakpoint: g,
                      overrides: { uuh4D4uHN: { y: 1298 }, vMEVfXZwr: { y: 1306 } },
                      children: f(W, {
                        height: 920,
                        width: `100vw`,
                        y: 1308,
                        children: f(H, {
                          className: `framer-rqx1q9-container`,
                          nodeId: `eX8nPWoWr`,
                          scopeId: `Ig992jJZz`,
                          children: f(I, {
                            breakpoint: g,
                            overrides: {
                              uuh4D4uHN: { variant: $(`rOACTNcGR`) },
                              vMEVfXZwr: { variant: $(`FOuRKioxl`) },
                            },
                            children: f(Fa, {
                              height: `100%`,
                              id: `eX8nPWoWr`,
                              layoutId: `eX8nPWoWr`,
                              style: { width: `100%` },
                              variant: $(`hHs83DJNn`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Jo = (e) =>
        e === Me.canvas || e === Me.export
          ? [
              ...Ho,
              ...Bo.flatMap((e) => {
                let t = Vo[e];
                return zo[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Ho, ...Bo.map((e) => `@media ${Uo[e]} { ${zo[e].join(` `)} }`)]),
      (Yo = L(qo, Jo, `framer-mbyme`)),
      (Xo = Yo),
      (Yo.displayName = `Light Nav`),
      (Yo.defaultProps = { height: 3124, width: 1200 }),
      A(Yo, { qqIv65LAf: { defaultValue: !0, title: `FAQ`, type: K.Boolean } }),
      G(Yo, [{ explicitInter: !0, fonts: [] }, ...jo, ...Mo, ...No, ...Po, ...Fo], {
        supportsExplicitInterCodegen: !0,
      }),
      (Yo.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([M(ti, {}, t), M(ko, {}, t), M(at, {}, t), M(Fa, {}, t)])
        ),
      }));
  }),
  Qo,
  $o,
  es,
  ts,
  ns,
  rs,
  is,
  as,
  os,
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs = e(() => {
    (y(),
      B(),
      k(),
      w(),
      It(),
      ni(),
      ot(),
      Ia(),
      Ao(),
      xt(),
      (Qo = z(Ft)),
      ($o = z(ti)),
      (es = z(ko)),
      (ts = z(at)),
      (ns = z(Fa)),
      (rs = {
        C7pNMPTYQ: `(min-width: 810px) and (max-width: 1199.98px)`,
        LYs2YOlA5: `(max-width: 809.98px)`,
        WEJrFkV82: `(min-width: 1200px)`,
      }),
      (is = `framer-DWweT`),
      (as = {
        C7pNMPTYQ: `framer-v-13dihw2`,
        LYs2YOlA5: `framer-v-kddxag`,
        WEJrFkV82: `framer-v-1gmeqzr`,
      }),
      (os = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ss = {
        effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
        repeat: !1,
        startDelay: 0.2,
        threshold: 0,
        tokenization: `line`,
        transition: { damping: 60, delay: 0.075, mass: 1, stiffness: 200, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (cs = {
        C7pNMPTYQ: [
          `.framer-DWweT .framer-zkuip1 { height: 66px; }`,
          `.framer-DWweT .framer-20nguv { padding: 0px 24px 0px 24px; }`,
        ],
        LYs2YOlA5: [
          `.framer-DWweT .framer-zkuip1 { height: 58px; }`,
          `.framer-DWweT .framer-20nguv { padding: 0px 12px 0px 12px; }`,
          `.framer-DWweT .framer-i7wfmx { gap: 24px; padding: 24px 24px 40px 24px; }`,
          `.framer-DWweT .framer-lyv5ta { max-width: 90%; }`,
        ],
      }),
      (ls = Object.keys(cs)),
      (us = { C7pNMPTYQ: `.framer-13dihw2-override`, LYs2YOlA5: `.framer-kddxag-override` }),
      (ds = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-DWweT.framer-1i582yo, .framer-DWweT .framer-1i582yo { display: block; }`,
        `.framer-DWweT.framer-1gmeqzr { --selection-background-color: var(--token-ea844e6c-3d0f-43a9-8349-81472c10de68, #0056fb) /* {"name":"Brand Blue 100"} */; --selection-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8) /* {"name":"Heading-BG Light 1"} */; align-content: center; align-items: center; background-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DWweT .framer-b84a8e-container { flex: none; height: auto; order: -1000; position: relative; width: auto; }`,
        `.framer-DWweT .framer-4ggrh5-container { flex: none; height: auto; left: 50%; order: -999; position: var(--framer-canvas-fixed-position, fixed); top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }`,
        `.framer-DWweT .framer-zkuip1 { --border-bottom-width: 0px; --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, #2f323d); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; flex: none; height: 68px; order: -998; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-DWweT .framer-1owu3cy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 34vh; justify-content: center; order: -997; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-DWweT .framer-20nguv { --border-bottom-width: 1px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #dedee3); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-DWweT .framer-i7wfmx { --border-bottom-width: 0px; --border-color: var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, #e7e7ea); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8) 0%, var(--token-60201a70-47ba-4cfc-80b4-6a7f3bd4e1da, rgb(243, 245, 250)) 55.00000000000001%, rgba(3, 53, 145, 0.2) 160%); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: 1px; justify-content: flex-end; max-width: 1320px; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 100%; }`,
        `.framer-DWweT .framer-lyv5ta { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 60%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-DWweT .framer-13ylpx3 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-DWweT .framer-r55s4z-container { flex: none; height: auto; order: 1005; position: relative; width: 100%; }`,
        `.framer-DWweT .framer-ernw17-container { flex: none; height: auto; order: 1006; position: relative; width: 100%; }`,
        `.framer-DWweT .framer-1ktcoiu-container { flex: none; height: auto; order: 1007; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        ...St,
        `.framer-DWweT[data-selection="true"] * ::selection, .framer-DWweT [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `.framer-DWweT[data-border="true"]::after, .framer-DWweT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (fs = {
        C7pNMPTYQ: `(min-width: 810px) and (max-width: 1199.98px)`,
        LYs2YOlA5: `(max-width: 809.98px)`,
        WEJrFkV82: `(min-width: 1200px)`,
      }),
      (ps = { Desktop: `WEJrFkV82`, Phone: `LYs2YOlA5`, Tablet: `C7pNMPTYQ` }),
      (ms = ({ value: e }) =>
        Te()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (hs = ({ fAQ: e, headerGradient: t, height: n, id: r, pageTitle: i, width: a, ...o }) => ({
        ...o,
        NtPC30dc4: i ?? o.NtPC30dc4 ?? `Votre titre ici`,
        qqIv65LAf: e ?? o.qqIv65LAf ?? !0,
        variant: ps[o.variant] ?? o.variant ?? `WEJrFkV82`,
        X4o0JZ0ix: t ?? o.X4o0JZ0ix ?? !0,
      })),
      (gs = p(function (e, t) {
        let n = o(null),
          r = t ?? n,
          i = C(),
          { activeLocale: a, setLocale: c } = U(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            qqIv65LAf: m,
            X4o0JZ0ix: h,
            NtPC30dc4: g,
            children: v,
            ...ee
          } = hs(e),
          [y, b] = ge(p, rs, !1),
          te = P(is, wt);
        return (
          je({}),
          f(he.Provider, {
            value: {
              activeVariantId: y,
              humanReadableVariantMap: ps,
              isLayoutTemplate: !0,
              primaryVariantId: `WEJrFkV82`,
              variantClassNames: as,
            },
            children: _(O, {
              id: d ?? i,
              children: [
                f(ms, {
                  value: `:root body { background: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)); }`,
                }),
                _(E.div, {
                  ...ee,
                  className: P(te, `framer-1gmeqzr`, u),
                  "data-layout-template": !0,
                  "data-selection": !0,
                  ref: r,
                  style: { ...l },
                  children: [
                    f(W, {
                      children: f(H, {
                        className: `framer-b84a8e-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `BZLXq6r6L`,
                        scopeId: `FyxvNXijo`,
                        children: f(Ft, {
                          height: `100%`,
                          id: `BZLXq6r6L`,
                          intensity: 5,
                          layoutId: `BZLXq6r6L`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    f(W, {
                      height: 68,
                      width: `100vw`,
                      y: 0,
                      children: f(H, {
                        className: `framer-4ggrh5-container`,
                        "data-framer-layout-hint-center-x": !0,
                        layoutScroll: !0,
                        nodeId: `oH6XSo2FX`,
                        scopeId: `FyxvNXijo`,
                        children: f(I, {
                          breakpoint: y,
                          overrides: {
                            C7pNMPTYQ: { variant: os(`QGi4tSnT3`) },
                            LYs2YOlA5: { variant: os(`BWrv1Oqa1`) },
                          },
                          children: f(ti, {
                            height: `100%`,
                            id: `oH6XSo2FX`,
                            layoutId: `oH6XSo2FX`,
                            style: { width: `100%` },
                            variant: os(`Aa_Mso4sj`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    f(E.div, {
                      className: `framer-zkuip1`,
                      "data-border": !0,
                      "data-framer-name": `Spacer`,
                    }),
                    h !== !1 &&
                      f(E.div, {
                        className: `framer-1owu3cy`,
                        "data-framer-name": `Header`,
                        children: f(`section`, {
                          className: `framer-20nguv`,
                          "data-border": !0,
                          "data-framer-name": `Headline Container`,
                          children: f(`div`, {
                            className: `framer-i7wfmx`,
                            "data-border": !0,
                            "data-framer-name": `Headline`,
                            children: f(j, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(`h1`, {
                                  className: `framer-styles-preset-fvt9x8`,
                                  "data-styles-preset": `trekJP1di`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(12, 17, 28))`,
                                  },
                                  children: `Votre titre ici`,
                                }),
                              }),
                              className: `framer-lyv5ta`,
                              effect: ss,
                              fonts: [`Inter`],
                              text: g,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      }),
                    v,
                    f(`div`, { className: `framer-13ylpx3` }),
                    m !== !1 &&
                      f(I, {
                        breakpoint: y,
                        overrides: { C7pNMPTYQ: { y: 1266 }, LYs2YOlA5: { y: 1258 } },
                        children: f(W, {
                          height: 685,
                          width: `100vw`,
                          y: 1268,
                          children: f(H, {
                            className: `framer-r55s4z-container`,
                            nodeId: `DeX3Eo9Rl`,
                            scopeId: `FyxvNXijo`,
                            children: f(I, {
                              breakpoint: y,
                              overrides: {
                                C7pNMPTYQ: { variant: os(`hs_fo57B6`) },
                                LYs2YOlA5: { variant: os(`HJG2Qf3DS`) },
                              },
                              children: f(ko, {
                                height: `100%`,
                                id: `DeX3Eo9Rl`,
                                layoutId: `DeX3Eo9Rl`,
                                style: { width: `100%` },
                                variant: os(`FjOqYAjTx`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    f(I, {
                      breakpoint: y,
                      overrides: { C7pNMPTYQ: { y: 1266 }, LYs2YOlA5: { y: 1258 } },
                      children: f(W, {
                        height: 40,
                        width: `100vw`,
                        y: 1268,
                        children: f(H, {
                          className: `framer-ernw17-container`,
                          nodeId: `Is84Vt9CV`,
                          scopeId: `FyxvNXijo`,
                          children: f(I, {
                            breakpoint: y,
                            overrides: {
                              C7pNMPTYQ: { variant: os(`txn0xfHi_`) },
                              LYs2YOlA5: { variant: os(`Jyf0NVykQ`) },
                            },
                            children: f(at, {
                              height: `100%`,
                              id: `Is84Vt9CV`,
                              layoutId: `Is84Vt9CV`,
                              nzjXCr09A: {
                                borderBottomWidth: 0,
                                borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              style: { width: `100%` },
                              Uz_x_jqMH: {
                                borderBottomWidth: 1,
                                borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              variant: os(`qElohr0kM`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    f(I, {
                      breakpoint: y,
                      overrides: { C7pNMPTYQ: { y: 1306 }, LYs2YOlA5: { y: 1298 } },
                      children: f(W, {
                        height: 920,
                        width: `100vw`,
                        y: 1308,
                        children: f(H, {
                          className: `framer-1ktcoiu-container`,
                          nodeId: `GZsKIK4I4`,
                          scopeId: `FyxvNXijo`,
                          children: f(I, {
                            breakpoint: y,
                            overrides: {
                              C7pNMPTYQ: { variant: os(`FOuRKioxl`) },
                              LYs2YOlA5: { variant: os(`rOACTNcGR`) },
                            },
                            children: f(Fa, {
                              height: `100%`,
                              id: `GZsKIK4I4`,
                              layoutId: `GZsKIK4I4`,
                              style: { width: `100%` },
                              variant: os(`hHs83DJNn`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (_s = (e) =>
        e === Me.canvas || e === Me.export
          ? [
              ...ds,
              ...ls.flatMap((e) => {
                let t = us[e];
                return cs[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...ds, ...ls.map((e) => `@media ${fs[e]} { ${cs[e].join(` `)} }`)]),
      (vs = L(gs, _s, `framer-DWweT`)),
      (ys = vs),
      (vs.displayName = `Light Nav - Title`),
      (vs.defaultProps = { height: 3124, width: 1200 }),
      A(vs, {
        qqIv65LAf: { defaultValue: !0, title: `FAQ`, type: K.Boolean },
        X4o0JZ0ix: { defaultValue: !0, title: `Header Gradient`, type: K.Boolean },
        NtPC30dc4: {
          defaultValue: `Votre titre ici`,
          displayTextArea: !1,
          title: `Page Title`,
          type: K.String,
        },
      }),
      G(
        vs,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Qo,
          ...$o,
          ...es,
          ...ts,
          ...ns,
          ...N(Ct),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (vs.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([M(ti, {}, t), M(ko, {}, t), M(at, {}, t), M(Fa, {}, t)])
        ),
      }));
  }),
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs = e(() => {
    (y(),
      B(),
      k(),
      w(),
      It(),
      ni(),
      ot(),
      Ia(),
      Ao(),
      (xs = z(Ft)),
      (Ss = z(ti)),
      (Cs = z(ko)),
      (ws = z(at)),
      (Ts = z(Fa)),
      (Es = {
        a6VQEBUG7: `(min-width: 810px) and (max-width: 1199.98px)`,
        eFX2Jpudz: `(min-width: 1200px)`,
        oDoXJaxNq: `(max-width: 809.98px)`,
      }),
      (Ds = `framer-77dEk`),
      (Os = {
        a6VQEBUG7: `framer-v-1yp2ih7`,
        eFX2Jpudz: `framer-v-wefg3o`,
        oDoXJaxNq: `framer-v-ycdart`,
      }),
      (ks = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (As = {
        a6VQEBUG7: [`.framer-77dEk .framer-1wtik77 { height: 66px; }`],
        oDoXJaxNq: [`.framer-77dEk .framer-1wtik77 { height: 58px; }`],
      }),
      (js = Object.keys(As)),
      (Ms = { a6VQEBUG7: `.framer-1yp2ih7-override`, oDoXJaxNq: `.framer-ycdart-override` }),
      (Ns = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-77dEk.framer-dbmxfc, .framer-77dEk .framer-dbmxfc { display: block; }`,
        `.framer-77dEk.framer-wefg3o { --selection-background-color: var(--token-ea844e6c-3d0f-43a9-8349-81472c10de68, #0056fb) /* {"name":"Brand Blue 100"} */; --selection-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8) /* {"name":"Heading-BG Light 1"} */; align-content: center; align-items: center; background-color: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, #f6f7f8); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-77dEk .framer-19n58jh-container { flex: none; height: auto; order: -1000; position: relative; width: auto; }`,
        `.framer-77dEk .framer-1wtik77 { --border-bottom-width: 0px; --border-color: var(--token-01f06676-7546-4f52-86d4-60ac2af1e356, #2f323d); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; flex: none; height: 68px; order: -999; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-77dEk .framer-ljqln6-container { flex: none; height: auto; left: 50%; order: -998; position: var(--framer-canvas-fixed-position, fixed); top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }`,
        `.framer-77dEk .framer-142e8wj { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-77dEk .framer-gpurfn-container { flex: none; height: auto; order: 1004; position: relative; width: 100%; }`,
        `.framer-77dEk .framer-1x9ph0u-container { flex: none; height: auto; order: 1005; position: relative; width: 100%; }`,
        `.framer-77dEk .framer-redw04-container { flex: none; height: auto; order: 1006; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        `.framer-77dEk[data-selection="true"] * ::selection, .framer-77dEk [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `.framer-77dEk[data-border="true"]::after, .framer-77dEk [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Ps = {
        a6VQEBUG7: `(min-width: 810px) and (max-width: 1199.98px)`,
        eFX2Jpudz: `(min-width: 1200px)`,
        oDoXJaxNq: `(max-width: 809.98px)`,
      }),
      (Fs = { Desktop: `eFX2Jpudz`, Phone: `oDoXJaxNq`, Tablet: `a6VQEBUG7` }),
      (Is = ({ value: e }) =>
        Te()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Ls = ({ fAQ: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        qqIv65LAf: e ?? i.qqIv65LAf ?? !0,
        variant: Fs[i.variant] ?? i.variant ?? `eFX2Jpudz`,
      })),
      (Rs = p(function (e, t) {
        let n = o(null),
          r = t ?? n,
          i = C(),
          { activeLocale: a, setLocale: s } = U(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            qqIv65LAf: p,
            children: m,
            ...h
          } = Ls(e),
          [g, v] = ge(d, Es, !1),
          ee = P(Ds);
        return (
          je({}),
          f(he.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: Fs,
              isLayoutTemplate: !0,
              primaryVariantId: `eFX2Jpudz`,
              variantClassNames: Os,
            },
            children: _(O, {
              id: u ?? i,
              children: [
                f(Is, {
                  value: `:root body { background: var(--token-c8cf0d0b-8d5e-4537-a95a-c338ee40d467, rgb(246, 247, 248)); }`,
                }),
                _(E.div, {
                  ...h,
                  className: P(ee, `framer-wefg3o`, l),
                  "data-layout-template": !0,
                  "data-selection": !0,
                  ref: r,
                  style: { ...c },
                  children: [
                    f(W, {
                      children: f(H, {
                        className: `framer-19n58jh-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `lyb_M3gL1`,
                        scopeId: `yKhk90rcC`,
                        children: f(Ft, {
                          height: `100%`,
                          id: `lyb_M3gL1`,
                          intensity: 5,
                          layoutId: `lyb_M3gL1`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    f(E.div, {
                      className: `framer-1wtik77`,
                      "data-border": !0,
                      "data-framer-name": `Spacer`,
                    }),
                    f(W, {
                      height: 68,
                      width: `100vw`,
                      y: 0,
                      children: f(H, {
                        className: `framer-ljqln6-container`,
                        "data-framer-layout-hint-center-x": !0,
                        layoutScroll: !0,
                        nodeId: `ac9kWLOdW`,
                        scopeId: `yKhk90rcC`,
                        children: f(I, {
                          breakpoint: g,
                          overrides: {
                            a6VQEBUG7: { variant: ks(`j2ZkIzmZ5`) },
                            oDoXJaxNq: { variant: ks(`XT8CL5xJB`) },
                          },
                          children: f(ti, {
                            height: `100%`,
                            id: `ac9kWLOdW`,
                            layoutId: `ac9kWLOdW`,
                            style: { width: `100%` },
                            variant: ks(`Rds65kd7G`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    m,
                    f(`div`, { className: `framer-142e8wj` }),
                    p !== !1 &&
                      f(I, {
                        breakpoint: g,
                        overrides: { a6VQEBUG7: { y: 1266 }, oDoXJaxNq: { y: 1258 } },
                        children: f(W, {
                          height: 685,
                          width: `100vw`,
                          y: 1268,
                          children: f(H, {
                            className: `framer-gpurfn-container`,
                            nodeId: `PEG4eXn11`,
                            scopeId: `yKhk90rcC`,
                            children: f(I, {
                              breakpoint: g,
                              overrides: {
                                a6VQEBUG7: { variant: ks(`hs_fo57B6`) },
                                oDoXJaxNq: { variant: ks(`HJG2Qf3DS`) },
                              },
                              children: f(ko, {
                                height: `100%`,
                                id: `PEG4eXn11`,
                                layoutId: `PEG4eXn11`,
                                style: { width: `100%` },
                                variant: ks(`FjOqYAjTx`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    f(I, {
                      breakpoint: g,
                      overrides: { a6VQEBUG7: { y: 1266 }, oDoXJaxNq: { y: 1258 } },
                      children: f(W, {
                        height: 40,
                        width: `100vw`,
                        y: 1268,
                        children: f(H, {
                          className: `framer-1x9ph0u-container`,
                          nodeId: `Nvf4nCMcP`,
                          scopeId: `yKhk90rcC`,
                          children: f(I, {
                            breakpoint: g,
                            overrides: {
                              a6VQEBUG7: { variant: ks(`txn0xfHi_`) },
                              oDoXJaxNq: { variant: ks(`Jyf0NVykQ`) },
                            },
                            children: f(at, {
                              height: `100%`,
                              id: `Nvf4nCMcP`,
                              layoutId: `Nvf4nCMcP`,
                              nzjXCr09A: {
                                borderBottomWidth: 0,
                                borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              style: { width: `100%` },
                              Uz_x_jqMH: {
                                borderBottomWidth: 1,
                                borderColor: `var(--token-7bc62ec0-6141-4c90-8e77-dc273cf6edac, rgb(222, 222, 227))`,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              variant: ks(`qElohr0kM`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    f(I, {
                      breakpoint: g,
                      overrides: { a6VQEBUG7: { y: 1306 }, oDoXJaxNq: { y: 1298 } },
                      children: f(W, {
                        height: 920,
                        width: `100vw`,
                        y: 1308,
                        children: f(H, {
                          className: `framer-redw04-container`,
                          nodeId: `ux4Ffjc__`,
                          scopeId: `yKhk90rcC`,
                          children: f(I, {
                            breakpoint: g,
                            overrides: {
                              a6VQEBUG7: { variant: ks(`FOuRKioxl`) },
                              oDoXJaxNq: { variant: ks(`rOACTNcGR`) },
                            },
                            children: f(Fa, {
                              height: `100%`,
                              id: `ux4Ffjc__`,
                              layoutId: `ux4Ffjc__`,
                              style: { width: `100%` },
                              variant: ks(`hHs83DJNn`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (zs = (e) =>
        e === Me.canvas || e === Me.export
          ? [
              ...Ns,
              ...js.flatMap((e) => {
                let t = Ms[e];
                return As[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Ns, ...js.map((e) => `@media ${Ps[e]} { ${As[e].join(` `)} }`)]),
      (Bs = L(Rs, zs, `framer-77dEk`)),
      (Vs = Bs),
      (Bs.displayName = `Dark Nav`),
      (Bs.defaultProps = { height: 3124, width: 1200 }),
      A(Bs, { qqIv65LAf: { defaultValue: !0, title: `FAQ`, type: K.Boolean } }),
      G(Bs, [{ explicitInter: !0, fonts: [] }, ...xs, ...Ss, ...Cs, ...ws, ...Ts], {
        supportsExplicitInterCodegen: !0,
      }),
      (Bs.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([M(ti, {}, t), M(ko, {}, t), M(at, {}, t), M(Fa, {}, t)])
        ),
      }));
  });
function Us({ webPageId: e, children: t, style: n, ...r }) {
  let i = { qqIv65LAf: !0 },
    a = { NtPC30dc4: `Guides & Insights`, qqIv65LAf: !0, X4o0JZ0ix: !0 },
    o = { ...a, NtPC30dc4: `About Talentorz`, X4o0JZ0ix: !1 },
    s = { ...a, NtPC30dc4: `Case Studies`, qqIv65LAf: !1 },
    c = { ...a, NtPC30dc4: `Our services` },
    l = { ...a, NtPC30dc4: `Votre titre ici`, qqIv65LAf: !1, X4o0JZ0ix: !1 },
    u =
      {
        augiA20Il: i,
        dFP5Rzgug: l,
        hvuOyIzp6: i,
        lRq12lwdA: o,
        MTMcCw60K: i,
        OJNA9hOdA: s,
        r0_tbHeBN: l,
        Rvm1myXJT: l,
        sr8L2uXk3: { ...i, qqIv65LAf: !1 },
        sWaqIejCT: c,
        WwYA376Vd: a,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `MTMcCw60K`:
      return S(Vs, { ...u, key: `DarkNav`, style: n }, t(!0));
    case `WwYA376Vd`:
    case `lRq12lwdA`:
    case `OJNA9hOdA`:
    case `sWaqIejCT`:
    case `dFP5Rzgug`:
    case `Rvm1myXJT`:
    case `r0_tbHeBN`:
      return S(ys, { ...u, key: `LightNavTitle`, style: n }, t(!0));
    case `hvuOyIzp6`:
    case `sr8L2uXk3`:
      return S(Xo, { ...u, key: `LightNav`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function Ws(e) {
  switch (e) {
    case `augiA20Il`:
    case `MTMcCw60K`:
      return [
        { hash: `ycdart`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `1yp2ih7`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `wefg3o`, mediaQuery: `(min-width: 1200px)` },
      ];
    case `WwYA376Vd`:
    case `lRq12lwdA`:
    case `OJNA9hOdA`:
    case `sWaqIejCT`:
    case `dFP5Rzgug`:
    case `Rvm1myXJT`:
    case `r0_tbHeBN`:
      return [
        { hash: `kddxag`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `13dihw2`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1gmeqzr`, mediaQuery: `(min-width: 1200px)` },
      ];
    case `hvuOyIzp6`:
    case `sr8L2uXk3`:
      return [
        { hash: `wyi4df`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `569q3`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1vf60od`, mediaQuery: `(min-width: 1200px)` },
      ];
    default:
      return;
  }
}
async function Gs({ routeId: e, pathVariables: t, localeId: r, collectionItemId: c }) {
  let u = Js[e].page.preload(),
    d = S(Fe, {
      children: S(_e, {
        children: S(ve, {
          children: S(fe, {
            isWebsite: !0,
            environment: `site`,
            routeId: e,
            pathVariables: t,
            routes: Js,
            collectionUtils: Xs,
            framerSiteId: Zs,
            notFoundPage: V(
              () => import(`./ym5Gi16TrH5_dn0sKEm9tncK8Wyh7qEJi_nMWSvh4tw.D973SoXC.mjs`)
            ),
            isReducedMotion: void 0,
            localeId: r,
            locales: Ys,
            preserveQueryParams: void 0,
            siteCanonicalURL: `https://rational-effect-316130.framer.app`,
            EditorBar:
              T === void 0
                ? void 0
                : (() => {
                    if ($s) {
                      console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                      return;
                    }
                    return V(async () => {
                      T.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: { useCurrentRoute: xe, useLocaleInfo: U, useRouter: Ie },
                        react: {
                          createElement: S,
                          Fragment: s,
                          memo: m,
                          useCallback: i,
                          useEffect: a,
                          useRef: o,
                          useState: n,
                          useLayoutEffect: l,
                        },
                        "react-dom": { createPortal: h },
                      };
                      let { createEditorBar: e } = await import(`init.mjs`);
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !0,
            LayoutTemplate: Us,
            loadSnippetsModule: new ye(
              () => import(`./mMPkaLJtI6WndMYxtSAD7OoGLdG5PhzQ3AcW0HVBEzo.CJ3ZxutB.mjs`)
            ),
            initialCollectionItemId: c,
          }),
          value: {
            autobahnNavigation: !0,
            disableCustomCode: !1,
            editorBarDisableFrameAncestorsSecurity: !1,
            motionDivToDiv: !1,
            onPageLocalizationSupport: !0,
            onPageMoveTool: !0,
            synchronousNavigationOnDesktop: !1,
            yieldOnTap: !1,
          },
        }),
      }),
      value: {
        global: {
          enter: {
            mask: { angle: 90, type: `wipe`, width: `0%` },
            opacity: 1,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              bounce: 0.2,
              damping: 60,
              delay: 0,
              duration: 1,
              durationBasedSpring: !1,
              ease: [0.88, 0.05, 0.43, 0.91],
              mass: 1,
              stiffness: 200,
              type: `tween`,
            },
            x: `0px`,
            y: `0px`,
          },
        },
        routes: {},
      },
    });
  return (await u, d);
}
function Ks() {
  Qs && T.__framer_events.push(arguments);
}
async function qs(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || T.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    Ks(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = Ae(Js, r)));
    else {
      Ae(Js, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = Ee(Js, decodeURIComponent(location.pathname), !0, Ys);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = Gs({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    T !== void 0 &&
      (async () => {
        let e = Js[r],
          t = Ys.find(({ id: e }) => (i ? e === i : e === `default`)).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && Xs) {
          let r = await Xs[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          T.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Zs ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: T.location.href,
              hostname: T.location.hostname || null,
              pathname: T.location.pathname || null,
              hash: T.location.hash || null,
              search: T.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await se({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let l = await c;
    e
      ? (ae(`framer-rewrite-breakpoints`, () => {
          (De(o), T.__framer_onRewriteBreakpoints?.(o));
        }),
        ($s ? (e) => e() : u)(() => {
          (re(), de(), x(t, l, { onRecoverableError: n }));
        }))
      : te(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Js, Ys, Xs, Zs, Qs, $s;
e(() => {
  if (
    (r(),
    B(),
    w(),
    d(),
    ee(),
    Zo(),
    bs(),
    Hs(),
    (Js = {
      augiA20Il: {
        elements: {},
        page: V(() => import(`./SoA7kVbUsQ_cgG9LF2T1BZU91GXxVt4L9ANRvOHT2L8.rzixYawT.mjs`)),
        path: `/`,
      },
      WwYA376Vd: {
        elements: {},
        page: V(() => import(`./3rWaNMRMgWyYbjf_5zaaKCiD3Xe4ouV6BjurVVfAGrY.g_krQKDD.mjs`)),
        path: `/blog`,
      },
      MTMcCw60K: {
        elements: {},
        page: V(() => import(`./2oNK_lEJkjOziWG8HZ351aJCQghUIW3B-B1praVDIE4.C9YdJRH-.mjs`)),
        path: `/contact`,
      },
      lRq12lwdA: {
        elements: {},
        page: V(() => import(`./7RimRyYS9e2lmV1XBWuOl6-Yc-zXgVI66uIRIRGJLwQ.BbOM21H8.mjs`)),
        path: `/about`,
      },
      OJNA9hOdA: {
        elements: {},
        page: V(() => import(`./EN2wI6MiUNm0VaF6H9hDa3wt0WfD61VbB-Z_DriCy9Y.I4DT7iWM.mjs`)),
        path: `/case-studies`,
      },
      sWaqIejCT: {
        elements: {},
        page: V(() => import(`./Js5weEegm7RAYQshaXesZxgaU4UHBF3ympjCH5lMolQ.DF1kj4QH.mjs`)),
        path: `/services`,
      },
      dFP5Rzgug: {
        elements: {},
        page: V(() => import(`./ym5Gi16TrH5_dn0sKEm9tncK8Wyh7qEJi_nMWSvh4tw.D973SoXC.mjs`)),
        path: `/404`,
      },
      hvuOyIzp6: {
        collectionId: `ph2KJiPTO`,
        elements: {},
        page: V(() => import(`./70zxQ5p6vyskxLA4vgUrR-T33DzAHKTHAcc9AHKxbdY.DALFv_20.mjs`)),
        path: `/services/:O7PqGHbEq`,
      },
      Rvm1myXJT: {
        collectionId: `MgDkoXCTm`,
        elements: {},
        page: V(() => import(`./VL4mJSSru2e5y_26KkqGgEKMdoE9oIVIqOPYufklv3E.BrbacAVy.mjs`)),
        path: `/case-studies/:PL0YsbUUz`,
      },
      sr8L2uXk3: {
        collectionId: `N4M2au0UE`,
        elements: {},
        page: V(() => import(`./MuVtRaeCtWZ7dVToqERkdacOfnb5GhxhB43qveSU3LE.BI2a-LWq.mjs`)),
        path: `/blog/:TgdiU12W0`,
      },
      r0_tbHeBN: {
        collectionId: `Y7WrHm9h3`,
        elements: {},
        page: V(() => import(`./JfjiZWxebO1T2qyBzzl5YgMcLgxNnHNiZl35SYG14zc.RvJ7RFdV.mjs`)),
        path: `/legal/:B3Co6gnNE`,
      },
    }),
    (Ys = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (Xs = {
      MgDkoXCTm: async () =>
        (await import(`./2e7GGyD_hgTG1LOU-1awMiLKKvYm7WsYoTbkrIXxSoo.Y1MJ0L8x.mjs`))?.utils,
      N4M2au0UE: async () =>
        (await import(`./nTrMUymssy-42763xWy1v7sQhafyo-OhlzjK9xb_VuE.Cioy9Kq7.mjs`))?.utils,
      ph2KJiPTO: async () =>
        (await import(`./4_m3vdT5J3wyvyGNfDlm7o6GdHyce40xKZCmWd__5UQ.DFP_91Jg.mjs`))?.utils,
      Y7WrHm9h3: async () =>
        (await import(`./cRgozauOjUx3TahV1AD9bZPPM5D0LmYpl1ixK9EQv0o.BsJeczEx.mjs`))?.utils,
    }),
    (Zs = `ca3ffb887676d76dae36eac3ac62969a98eae2ba59ba28573d521e32d34510d3`),
    (Qs = typeof document < `u`),
    ($s = Qs && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(c.userAgent)),
    Qs)
  ) {
    ((T.__framer_importFromPackage = (e, t) => () =>
      S(Oe, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (T.__framer_events = T.__framer_events || []),
      oe(),
      le());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? qs(!0, e) : qs(!1, e);
  }
  (function () {
    Qs &&
      u(() => {
        x(
          document.getElementById(`__framer-badge-container`),
          S(v, {}, S(b(() => import(`./PX9hIOIVM.DlW4m3nk.mjs`))))
        );
      });
  })();
})();
export { Ws as getLayoutTemplateBreakpoints, Gs as getPageRoot };
//# sourceMappingURL=script_main.DrXFGb6v.mjs.map
