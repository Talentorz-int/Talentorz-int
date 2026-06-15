import { cd as i } from "chunk-KIWT3OS5.mjs";
var o = new WeakMap();
function t(n, e) {
  let c = o.get(e);
  if (c) return c;
  let a = [];
  if ((i(n, e, "includeInherited", "readsRawNodeData", void 0, (r) => a.push(r)), e.children))
    for (let r of e.children) {
      let s = t(n, r);
      a.push(...s);
    }
  return (o.set(e, a), a);
}
export { t as a };
//# sourceMappingURL=chunk-CNCXCMCZ.mjs.map
