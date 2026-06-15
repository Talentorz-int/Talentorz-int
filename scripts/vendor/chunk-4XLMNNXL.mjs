import { b as n } from "chunk-RZSMU3WB.mjs";
import { q as r } from "chunk-RJAQ7ZXH.mjs";
import { b as a } from "chunk-6PNPO5DW.mjs";
function d(e) {
  let t = r("agent"),
    o = n();
  if (!t) return { legacy: !0 };
  switch (e) {
    case "default":
      return { legacy: !1, variant: "default" };
    case "darker":
      return { legacy: !1, variant: "darker", darkOnDark: o };
    default:
      a(e, "Invalid modal variant");
  }
}
function m(e) {
  if (!r("agent")) return { legacy: !0 };
  switch (e) {
    case "default":
      return { legacy: !1, variant: "default" };
    case "darker":
      return { legacy: !1, variant: "darker", darkOnDark: !0 };
    default:
      a(e, "Invalid modal variant");
  }
}
export { d as a, m as b };
//# sourceMappingURL=chunk-4XLMNNXL.mjs.map
