import { a as c } from "chunk-SJONTHBI.mjs";
import { e as s } from "chunk-XELMBOBL.mjs";
var e = s(c(), 1);
function a(t) {
  let r = (0, e.useMemo)(() => {
    let n = window.matchMedia(t);
    function o() {
      return n.matches;
    }
    function i(u) {
      return (n.addEventListener("change", u), () => n.removeEventListener("change", u));
    }
    return { getCurrentValue: o, subscribe: i };
  }, [t]);
  return (0, e.useSyncExternalStore)(r.subscribe, r.getCurrentValue);
}
export { a };
//# sourceMappingURL=chunk-4MV5F4ZG.mjs.map
