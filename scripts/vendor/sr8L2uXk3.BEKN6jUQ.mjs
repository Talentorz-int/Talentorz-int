import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import { C as t, G as n, Y as r } from "./framer.A_mnCMV8.mjs";
import { i, t as a } from "./N4M2au0UE.BYNeTSU6.mjs";
function o(e, t) {
  let n = e?.DQOzgQXjc,
    r = e?.FWQY_RDd2,
    i = e?.MdHi4l3wf;
  return {
    breakpoints: [
      { hash: `kv0zqb`, mediaQuery: `(min-width: 1200px)` },
      { hash: `9fyfl0`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `a4jiic`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{FWQY_RDd2}}` : l(r)}`,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-bAPWE`,
    socialImage: u(i),
    title: `${n === void 0 ? `{{DQOzgQXjc}}` : l(n)} – Talentorz`,
    viewport: `width=device-width`,
  };
}
async function s(e, r) {
  let i = new t(),
    s = {
      from: { alias: `sr8L2uXk3`, data: a, type: `Collection` },
      select: [
        { collection: `sr8L2uXk3`, name: `DQOzgQXjc`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `FWQY_RDd2`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `MdHi4l3wf`, type: `Identifier` },
      ],
      where: n(e, `sr8L2uXk3`),
    },
    c = await i.query(s, r);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, r);
}
async function c(e, n) {
  let r = new t(),
    i = {
      from: { alias: `sr8L2uXk3`, data: a, type: `Collection` },
      select: [
        { collection: `sr8L2uXk3`, name: `DQOzgQXjc`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `FWQY_RDd2`, type: `Identifier` },
        { collection: `sr8L2uXk3`, name: `MdHi4l3wf`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `sr8L2uXk3`, name: t, type: `Identifier` });
  return (await r.query(i, n)).map((t) => ({
    metadata: o(t, n),
    pathVariables: Object.fromEntries(e.map((e) => [e, t[e]])),
  }));
}
var l,
  u,
  d,
  f,
  p = e(() => {
    (r(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (d = 1),
      (f = {
        exports: {
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { o as a, p as i, c as n, d as o, s as r, f as t };
//# sourceMappingURL=sr8L2uXk3.BEKN6jUQ.mjs.map
