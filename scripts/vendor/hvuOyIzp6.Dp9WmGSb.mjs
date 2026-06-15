import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import { C as t, G as n, Y as r } from "./framer.A_mnCMV8.mjs";
import { i, r as a } from "./ph2KJiPTO.aybCIqjF.mjs";
function o(e, t) {
  let n = e?.CqJEutvNA,
    r = e?.oqRw_bwfb;
  return {
    breakpoints: [
      { hash: `18o085m`, mediaQuery: `(min-width: 1200px)` },
      { hash: `28jq5w`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `7p0xkv`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{oqRw_bwfb}}` : l(r)}`,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-hfIZ9`,
    title: `${n === void 0 ? `{{CqJEutvNA}}` : l(n)}   Talentorz`,
    viewport: `width=device-width`,
  };
}
async function s(e, r) {
  let a = new t(),
    s = {
      from: { alias: `hvuOyIzp6`, data: i, type: `Collection` },
      select: [
        { collection: `hvuOyIzp6`, name: `CqJEutvNA`, type: `Identifier` },
        { collection: `hvuOyIzp6`, name: `oqRw_bwfb`, type: `Identifier` },
      ],
      where: n(e, `hvuOyIzp6`),
    },
    c = await a.query(s, r);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, r);
}
async function c(e, n) {
  let r = new t(),
    a = {
      from: { alias: `hvuOyIzp6`, data: i, type: `Collection` },
      select: [
        { collection: `hvuOyIzp6`, name: `CqJEutvNA`, type: `Identifier` },
        { collection: `hvuOyIzp6`, name: `oqRw_bwfb`, type: `Identifier` },
      ],
    };
  for (let t of e) a.select.push({ collection: `hvuOyIzp6`, name: t, type: `Identifier` });
  return (await r.query(a, n)).map((t) => ({
    metadata: o(t, n),
    pathVariables: Object.fromEntries(e.map((e) => [e, t[e]])),
  }));
}
var l,
  u,
  d,
  f = e(() => {
    (r(),
      a(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { o as a, f as i, c as n, u as o, s as r, d as t };
//# sourceMappingURL=hvuOyIzp6.Dp9WmGSb.mjs.map
