import { bb as d } from "chunk-KIWT3OS5.mjs";
import { jg as u } from "chunk-UVMW6WIE.mjs";
import { Kn as m, Mn as T, h as i } from "chunk-C45BQYIA.mjs";
import { a as p } from "chunk-6PNPO5DW.mjs";
function S(t) {
  let e = {};
  for (let o of d.getTokenNodes(t)) {
    e[i] || (e[i] = {});
    let r = e[i];
    (p(r, "Tokens entry must exist"), (r[o.id] = o));
  }
  return e;
}
function v(t) {
  let e = {};
  for (let o of d.getAllTokenNodes(t)) e[o.id] = o;
  return e;
}
function I(t, e, o) {
  let r = t.cloneWithIds(),
    s = Object.values(v(e));
  for (let n of r.walk()) Object.assign(n, m(n, s, o));
  return r;
}
function x(t, e, o) {
  if (!e) return;
  let r = Object.values(v(t)),
    s = {};
  for (let n of r) {
    let a = n.colorForMode(o);
    if (!a) return;
    s[n.id] = a;
  }
  for (let [n, a] of e) {
    let l = new u();
    for (let [f, k] of a) {
      let c = T(k, s);
      c ? l.set(f, c) : l.set(f, k);
    }
    e.set(n, l);
  }
}
export { S as a, v as b, I as c, x as d };
//# sourceMappingURL=chunk-OLEFDBGA.mjs.map
