import { a as u } from "chunk-6PNPO5DW.mjs";
var a = "main",
  A = "baseId";
function s(e) {
  let n = 2166136261;
  for (let r = 0; r < e.length; r++) ((n ^= e.charCodeAt(r)), (n = Math.imul(n, 16777619)));
  return n >>> 0;
}
function h(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function E(e, n, r, t) {
  return e === r ? n > t : e > r;
}
function I(e, n, r) {
  let t = e.seq.get(n),
    o = e.seq.get(r);
  if (t === o) {
    let l = e.client.get(n),
      c = e.client.get(r);
    return l > c;
  }
  return t > o;
}
function b(e, n) {
  if (e.length !== n.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let t = e[r],
      o = n[r];
    if (Array.isArray(t) && Array.isArray(o)) {
      if (!b(t, o)) return !1;
    } else if (!Object.is(t, o)) return !1;
  }
  return !0;
}
var f = 2 ** 32 - 1,
  m = 10,
  i = f - m,
  d = Array.from({ length: m }, (e, n) => f - n);
function y() {
  return Math.floor(Math.random() * i);
}
function p(e) {
  return Number.isSafeInteger(e) && e >= 0 && e <= i;
}
function R(e) {
  return Number.isSafeInteger(e) && e >= 0;
}
function D(e, n) {
  let r = e === a ? n : s(`${e}:${n}`) % i;
  return (u(p(r), "invalid clientId derived for", `${e}:${n}`, r), r);
}
export { a, A as b, h as c, E as d, I as e, b as f, d as g, y as h, p as i, R as j, D as k };
//# sourceMappingURL=chunk-YNCW2456.mjs.map
