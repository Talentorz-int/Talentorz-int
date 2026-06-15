import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import { C as t, G as n, Y as r } from "./framer.A_mnCMV8.mjs";
import { i, t as a } from "./MgDkoXCTm.CRKARBdD.mjs";
function o(e, t) {
  let n = e?.p5h3hmx5H,
    r = e?.I0cWIyBUM,
    i = e?.LfkY4TS8p;
  return {
    breakpoints: [
      { hash: `11o25nh`, mediaQuery: `(min-width: 1200px)` },
      { hash: `9llqfa`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `clbrtt`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{I0cWIyBUM}}` : l(r)}`,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-MO4Yv`,
    socialImage: u(i),
    title: `${n === void 0 ? `{{p5h3hmx5H}}` : l(n)} Case Study – Talentorz`,
    viewport: `width=device-width`,
  };
}
async function s(e, r) {
  let i = new t(),
    s = {
      from: { alias: `Rvm1myXJT`, data: a, type: `Collection` },
      select: [
        { collection: `Rvm1myXJT`, name: `p5h3hmx5H`, type: `Identifier` },
        { collection: `Rvm1myXJT`, name: `I0cWIyBUM`, type: `Identifier` },
        { collection: `Rvm1myXJT`, name: `LfkY4TS8p`, type: `Identifier` },
      ],
      where: n(e, `Rvm1myXJT`),
    },
    c = await i.query(s, r);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, r);
}
async function c(e, n) {
  let r = new t(),
    i = {
      from: { alias: `Rvm1myXJT`, data: a, type: `Collection` },
      select: [
        { collection: `Rvm1myXJT`, name: `p5h3hmx5H`, type: `Identifier` },
        { collection: `Rvm1myXJT`, name: `I0cWIyBUM`, type: `Identifier` },
        { collection: `Rvm1myXJT`, name: `LfkY4TS8p`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `Rvm1myXJT`, name: t, type: `Identifier` });
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
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { o as a, p as i, c as n, d as o, s as r, f as t };
//# sourceMappingURL=Rvm1myXJT.-RVfO7wS.mjs.map
