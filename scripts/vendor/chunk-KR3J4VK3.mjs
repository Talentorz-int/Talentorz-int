import { a as R, b as V } from "chunk-TF2UUO3R.mjs";
import { a as C } from "chunk-LEYNIZPU.mjs";
import { a as g, b as I, l as b, n as w } from "chunk-DYNCKUFC.mjs";
import { a as q } from "chunk-SJONTHBI.mjs";
import { j as P } from "chunk-WKFLJETF.mjs";
import { ia as W, q as O } from "chunk-3GX5YKYT.mjs";
import { e as x, j as d } from "chunk-XELMBOBL.mjs";
function L(t, e, s = []) {
  let o = [];
  for (let [i, n] of t.entries()) {
    let { submenu: a, ...f } = n,
      A = s ? [...s, i] : [i],
      r = { ...f, path: A };
    if (r.type === "separator") {
      if (
        r.visible === !1 ||
        i === 0 ||
        i === t.length - 1 ||
        o[o.length - 1]?.type === "separator"
      )
        continue;
      o.push(r);
      continue;
    }
    if (n.role && e?.validateAction) {
      let { states: u, options: p } = e.validateAction(n.role),
        l = u[n.role],
        { label: m, checked: y, visible: S } = p[n.role] ?? {};
      (I(m) && (r.label = m),
        b(n.checked) && g(y) && (r.checked = y),
        b(n.visible) && g(S) && (r.visible = S),
        b(n.enabled) && g(l) && (r.enabled = l));
    }
    if (n.visible === !1) continue;
    if (a) {
      let u = w(a) ? G(a, e, A) : L(a, e, A),
        p = { ...r, submenu: u };
      o.push(p);
      continue;
    }
    let c = J(r, e);
    o.push(c);
  }
  return (
    o.length > 0 && o[o.length - 1]?.type === "separator" && o.pop(),
    o.length > 0 && o[0]?.type === "separator" && o.shift(),
    o
  );
}
function G(t, e, s) {
  let o;
  return () => ((o ??= L(t(), e, s)), o);
}
function J(t, e) {
  if (!e) return t;
  let { appAccelerators: s, appAcceleratorsWindows: o } = e;
  if (!s || !o) return t;
  let { role: i } = t;
  if (!i) return t;
  let n = { ...t };
  return (
    !O() && !t.acceleratorWindows && (n.acceleratorWindows = V(i) ? o[i] : void 0),
    t.accelerator || (n.accelerator = R(i) ? s[i] : void 0),
    n
  );
}
var K = W("wantsNativeTextActions");
function N(t = document.activeElement) {
  let e = H(t);
  if (!e) return !1;
  if (e.closest(".wantsNativeTextAction") || e instanceof HTMLIFrameElement) return !0;
  if (e instanceof HTMLInputElement)
    switch (e.type) {
      case "date":
      case "datetime-local":
      case "email":
      case "month":
      case "number":
      case "password":
      case "search":
      case "tel":
      case "text":
      case "time":
      case "url":
      case "week":
        return !0;
      case "checkbox":
      case "color":
      case "file":
      case "image":
      case "radio":
      case "range":
      case "reset":
      case "submit":
        return !1;
      default:
        return (K.reportErrorOncePerMinute("Unhandled input type: " + e.type), !1);
    }
  if (e instanceof HTMLTextAreaElement) return !0;
  let s = e instanceof HTMLAnchorElement ? e : e.closest("a");
  return s instanceof HTMLAnchorElement && s.href
    ? !0
    : e instanceof HTMLElement
      ? e.isContentEditable
      : !1;
}
function H(t) {
  return t instanceof Element
    ? t
    : t instanceof Node
      ? (t.parentElement ?? (t.parentNode instanceof Element ? t.parentNode : null))
      : null;
}
function tt() {
  let t = document.getSelection();
  if (!t || t.rangeCount === 0 || t.isCollapsed) return !1;
  let e = [t.anchorNode, t.focusNode, t.getRangeAt(0).commonAncestorContainer];
  for (let s of e) {
    let o = H(s);
    if (o && o.closest(".wantsNativeTextAction")) return !0;
  }
  return !1;
}
var h = x(q(), 1);
var z = x(C(), 1);
function k(t) {
  return t.wantsActions ? t.wantsActions() : !0;
}
function M(t, e, s) {
  return t.wantsAction ? t.wantsAction(e, s) : !0;
}
function D(t, e) {
  return t.optionsForAction ? t.optionsForAction(e) : void 0;
}
var U;
((o) => {
  function t(i) {
    return new s(i);
  }
  o.chain = t;
  function e(i, n) {
    return i && i instanceof s ? i.actionToTargetMap[n] : i;
  }
  o.functionTarget = e;
  class s {
    constructor(n) {
      d(this, "actionToTargetMap", {});
      d(this, "wantedActions", []);
      this.then(n);
    }
    then(n) {
      this.wantedActions = this.wantedActions.concat(n.wantedActions);
      let a = this.actionToTargetMap,
        f = n.wantedActions;
      for (let A of f) a[A] = a[A] || n;
      return this;
    }
    wantsAction(n, a) {
      let f = this.actionToTargetMap[n];
      return !f || !k(f) ? !1 : M(f, n, a);
    }
    optionsForAction(n) {
      let a = this.actionToTargetMap[n];
      if (a) return D(a, n);
    }
  }
})((U ||= {}));
var T = class extends Event {
  constructor() {
    super(...arguments);
    d(this, "actionIdentifier");
    d(this, "actionArgument");
  }
};
d(T, "eventType", "vekter-action-dispatch-event");
var v = class extends Event {
  constructor() {
    super(...arguments);
    d(this, "invalidatedActions");
    d(this, "validatedActionStates");
    d(this, "validatedActionOptions");
  }
};
d(v, "eventType", "vekter-action-validation-event");
function st({ target: t, engine: e, children: s, style: o, global: i }) {
  let n = (0, h.useRef)(null),
    a = (0, h.useCallback)(
      (r) => {
        let c = r.actionIdentifier;
        if (!c) return;
        let u = U.functionTarget(t, c);
        if (!u || !u.wantedActions.includes(c) || !k(u)) return;
        let p = u[c];
        if (!w(p)) return;
        let l = M(u, c, r);
        if (!l || (r.preventDefault(), r.stopPropagation(), l !== !0)) return;
        e.setEditReason(c);
        let m = p.bind(u);
        e.scheduler.wrapHandler(m)(r.actionArgument);
      },
      [e, t]
    ),
    f = (0, h.useCallback)(
      (r) => {
        let { invalidatedActions: c, validatedActionStates: u, validatedActionOptions: p } = r;
        if (!(!c || !u || !p) && t) {
          for (let l of t.wantedActions)
            if (c.has(l)) {
              c.delete(l);
              let m = k(t) ? M(t, l, r) : !1;
              if (((u[l] = m), m === !0 || m === !1)) {
                let y = D(t, l);
                y && (p[l] = y);
              }
            }
          c.size === 0 && (r.preventDefault(), r.stopPropagation());
        }
      },
      [t]
    );
  (0, h.useEffect)(() => {
    if (!n.current) return;
    let r = (i ? document.documentElement : null) || n.current;
    return (
      r.addEventListener(T.eventType, a),
      r.addEventListener(v.eventType, f),
      () => {
        (r.removeEventListener(T.eventType, a), r.removeEventListener(v.eventType, f));
      }
    );
  }, [i, a, f]);
  let A = (0, h.useCallback)((r) => {
    !N(r.target) && !P.isDebugBuild && r.preventDefault();
  }, []);
  return (0, z.jsx)("div", { ref: n, onContextMenu: A, style: o, children: s });
}
function rt(t, e) {
  let s = document.activeElement;
  if (!s) throw Error("No active element for action dispatch");
  let o = new T(T.eventType, { bubbles: !0 });
  return ((o.actionIdentifier = t), (o.actionArgument = e), s.dispatchEvent(o));
}
function Q(t) {
  let e = document.activeElement;
  if (!e) throw Error("No active element for action validation");
  let s = new Set();
  for (let a of t) s.add(a);
  let o = {},
    i = {},
    n = new v(v.eventType, { bubbles: !0 });
  return (
    (n.invalidatedActions = s),
    (n.validatedActionStates = o),
    (n.validatedActionOptions = i),
    e.dispatchEvent(n),
    { states: o, options: i }
  );
}
var B = [],
  j = [];
function at(t) {
  B.push(t);
}
function ct(t) {
  j.push(t);
}
function ut(t) {
  let e = t === "*" ? Object.keys(E) : [t];
  B.forEach((i) => i());
  let { states: s, options: o } = Q(e);
  (Object.assign(E, s), Object.assign(F, o));
  for (let i of e) E[i] = s[i] || (i === "undo" || i === "redo" || i === "delete" ? "native" : !1);
  return (j.forEach((i) => i()), { states: E, options: F });
}
var E = {},
  F = {};
export { N as a, tt as b, U as c, st as d, rt as e, at as f, ct as g, ut as h, L as i };
//# sourceMappingURL=chunk-KR3J4VK3.mjs.map
