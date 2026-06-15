import { b as i } from "chunk-6FJY55U7.mjs";
import { o as n } from "chunk-RJAQ7ZXH.mjs";
import { g as o, ia as s } from "chunk-3GX5YKYT.mjs";
var u = s("pollProject");
async function j(a, c) {
  let { intervalMillis: p, attempts: e, stopCondition: l } = c;
  try {
    for (let t = 0; t < e; t++) {
      let r = await i.get(`/web/projects/${a}`, {
        includeUsageDataV2: "true",
        includeAiCreditLimit: n.isOn("agent") ? "true" : void 0,
      });
      if (l(r)) return { status: 0, project: r };
      t < e - 1 && (await o(p));
    }
    return { status: 1, message: `Polling exceeded ${e} attempts` };
  } catch (t) {
    return (u.reportError(t), { status: 2, error: t });
  }
}
export { j as a };
//# sourceMappingURL=chunk-HRM2PG23.mjs.map
