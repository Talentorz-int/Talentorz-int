import { Va as i } from "chunk-KIWT3OS5.mjs";
import { tk as s } from "chunk-C45BQYIA.mjs";
import { sa as c } from "chunk-HSCVLSVX.mjs";
import { h as l } from "chunk-DYNCKUFC.mjs";
function I(o, e, t) {
  o.scheduler.process(() => {
    let r = o.tree.root.locales?.map((u) => u.id) ?? [],
      a = new Set([s, ...r]),
      n = new Set(e.includedLocales ?? a);
    (n.has(t) ? n.delete(t) : n.add(t),
      c(a, n) ? e.set({ includedLocales: void 0 }) : e.set({ includedLocales: Array.from(n) }));
    let d = new Map(o.stores.localizationStore.expandedSourceGroups);
    (d.delete(e.id), (o.stores.localizationStore.expandedSourceGroups = d));
  });
}
function f(o, e) {
  if (i(o, e))
    return e.includedLocales && !e.includedLocales.includes(s)
      ? [s, ...e.includedLocales]
      : e.includedLocales;
}
function T(o, e, t) {
  let r = f(o, e);
  return l(r) ? r.includes(t) : !0;
}
function y(o) {
  for (let e in o) return [e, o[e]];
}
export { I as a, f as b, T as c, y as d };
//# sourceMappingURL=chunk-K6RTLPI2.mjs.map
