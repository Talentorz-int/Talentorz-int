import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import { c as t, g as n, o as r, w as i } from "./react.DXuyTrsy.mjs";
import { C as a } from "./motion.C4Ab7j_2.mjs";
import { A as o, N as s, St as c, Y as l, bt as u, o as d } from "./framer.A_mnCMV8.mjs";
var f, p, m, h, g, _, v, y, b;
e(() => {
  (r(),
    l(),
    i(),
    (f = `var(--framer-icon-mask)`),
    (p = n(function (e, n) {
      return t(`svg`, { ...e, ref: n, children: e.children });
    })),
    (m = a.create(p)),
    (h = n((e, n) => {
      let { animated: r, layoutId: i, children: a, ...o } = e;
      return r
        ? t(m, { ...o, layoutId: i, ref: n, children: a })
        : t(`svg`, { ...o, ref: n, children: a });
    })),
    (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 5.599 6.817 C 5.406 6.695 5.279 6.492 5.254 6.265 C 5.229 6.039 5.308 5.813 5.469 5.652 L 9.75 1.5 L 13.462 1.5 L 13.436 1.372 L 8.25 0 L 3.064 1.372 L 0 7.5 L 5.25 11.25 L 11.25 12.75 L 15 9 L 11.25 6 C 9.469 7.793 7.24 7.866 5.599 6.817 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12.75px" id="STPphmIs1" transform="translate(3.75 5.25)" width="15px"/><path d="M 15 1.5 L 11.25 5.25 L 5.25 3.75 L 0 0" fill="transparent" height="5.25px" id="s2UlGIQsD" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12.75)" width="15px"/><path d="M 0 1.372 L 5.186 0 L 10.373 1.372" fill="transparent" height="1.371562499999996px" id="G7qRvgQXA" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6.814 5.25)" width="10.372500000000002px"/><path d="M 2.472 0.414 L 0.079 5.201 C -0.106 5.571 0.044 6.022 0.414 6.207 L 3 7.5 L 6.063 1.371 L 3.479 0.08 C 3.301 -0.01 3.095 -0.024 2.906 0.038 C 2.717 0.101 2.561 0.236 2.472 0.414 Z" fill="transparent" height="7.499895614211489px" id="NSMDpsBS0" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(0.75 5.25)" width="6.0634330695530725px"/><path d="M 3.064 7.5 L 5.649 6.207 C 6.019 6.022 6.169 5.571 5.984 5.201 L 3.592 0.414 C 3.502 0.236 3.346 0.101 3.157 0.038 C 2.969 -0.024 2.763 -0.01 2.585 0.08 L 0 1.371 Z" fill="transparent" height="7.499895614211496px" id="Q4stJJpxq" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(17.186 5.25)" width="6.063433069553071px"/><path d="M 8.25 0 L 4.5 0 L 0.22 4.152 C 0.059 4.313 -0.021 4.539 0.005 4.765 C 0.03 4.992 0.157 5.195 0.349 5.317 C 1.991 6.366 4.219 6.293 6 4.5 L 9.75 7.5 L 11.25 6" fill="transparent" height="7.5px" id="V8C7CgGuv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9 6.75)" width="11.250434208778643px"/><path d="M 6.381 2.742 L 2.469 1.764 L 0 0" fill="transparent" height="2.7421875px" id="JmxDCNKU_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 17.508)" width="6.380625000000002px"/></svg>`),
    (_ = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
      ...o,
      ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
      lschgej4H: a ?? o.lschgej4H ?? 1.5,
      qxTvv_EBh: e ?? o.qxTvv_EBh,
    })),
    (v = c(
      n(function (e, n) {
        let {
            style: r,
            className: i,
            layoutId: a,
            variant: o,
            ezTt3ayMo: c,
            lschgej4H: l,
            qxTvv_EBh: d,
            ...f
          } = _(e),
          p = u(`654422706`, g);
        return t(h, {
          ...f,
          className: s(`framer-CCPgn`, i),
          layoutId: a,
          ref: n,
          role: `presentation`,
          style: { "--1m6trwb": d, "--21h8s6": c, "--pgex8v": l, ...r },
          viewBox: `0 0 24 24`,
          children: t(`use`, { href: p }),
        });
      }),
      [
        `.framer-CCPgn { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
      ],
      `framer-CCPgn`
    )),
    (v.displayName = `Handshake`),
    (y = v),
    o(v, {
      ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: d.Color },
      lschgej4H: {
        defaultValue: 1.5,
        displayStepper: !0,
        hidden: !1,
        max: 6,
        min: 0,
        step: 0.5,
        title: `Width`,
        type: d.Number,
      },
      qxTvv_EBh: {
        defaultValue: 0,
        displayStepper: !0,
        hidden: !1,
        max: 1,
        min: 0,
        step: 0.1,
        title: `Alpha`,
        type: d.Number,
      },
    }),
    (b = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `Icon`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `24`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerIntrinsicWidth: `24`,
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            framerImmutableVariables: `true`,
            framerVector: `{"name":"Handshake","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
            framerDisableUnlink: `true`,
            framerContractVersion: `1`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { b as __FramerMetadata__, y as default };
//# sourceMappingURL=D5cs2H7UB.CTki-o6I.mjs.map
