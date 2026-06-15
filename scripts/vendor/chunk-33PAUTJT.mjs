import { a as o } from "chunk-JG5QFAU7.mjs";
import { m as t } from "chunk-O5NUHS4A.mjs";
import { q as i } from "chunk-RJAQ7ZXH.mjs";
function m() {
  let { activeElement: e } = document;
  if (e instanceof HTMLIFrameElement && e.contentWindow)
    try {
      e = e.contentWindow.document.activeElement;
    } catch (n) {
      if (n instanceof DOMException) return !0;
      throw n;
    }
  return e ? e.nodeName === "INPUT" || e.nodeName === "TEXTAREA" || e.isContentEditable : !1;
}
function d(e) {
  return (i("agent") ? o[e] : t.values[e]) ?? t.values[e];
}
export { m as a, d as b };
//# sourceMappingURL=chunk-33PAUTJT.mjs.map
