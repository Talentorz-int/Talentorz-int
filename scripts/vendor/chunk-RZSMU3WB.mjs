import { a as m } from "chunk-3IZ3OH5J.mjs";
import { cg as t, dg as a } from "chunk-LNLOS7MO.mjs";
import { c as s } from "chunk-URITSZHW.mjs";
import { a as i } from "chunk-LEYNIZPU.mjs";
import { D as d } from "chunk-3GX5YKYT.mjs";
import { e as o } from "chunk-XELMBOBL.mjs";
var O = o(i(), 1);
function p({ children: n }) {
  let e = t(),
    r = u();
  return (0, O.jsx)(a, {
    mode: e === "darkOnDarkPopoutWindow" ? e : r ? "darkOnDarkModal" : e,
    children: n,
  });
}
function k() {
  let e = s().stores.chromeStore.useState((r) => r.mainView);
  return m(e);
}
function c() {
  return !1;
}
var u = d() ? c : k;
export { p as a, u as b };
//# sourceMappingURL=chunk-RZSMU3WB.mjs.map
