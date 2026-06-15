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
    (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0.75 7.5 C 0.336 7.5 0 7.164 0 6.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 15.75 0 C 16.164 0 16.5 0.336 16.5 0.75 L 16.5 6.75 C 16.5 7.164 16.164 7.5 15.75 7.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="7.5px" id="tSGMgJzZK" transform="translate(3.75 8.25)" width="16.5px"/><path d="M 0 0 L 0 3.75" fill="transparent" height="3.75px" id="UGzhTbXqC" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 4.5)" width="1px"/><path d="M 0 0 L 0 3.75" fill="transparent" height="3.75px" id="IApxkEsAZ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 15.75)" width="1px"/><path d="M 0.75 7.5 C 0.336 7.5 0 7.164 0 6.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 15.75 0 C 16.164 0 16.5 0.336 16.5 0.75 L 16.5 6.75 C 16.5 7.164 16.164 7.5 15.75 7.5 Z" fill="transparent" height="7.5px" id="auNe9zSwV" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 8.25)" width="16.5px"/></svg>`),
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
          p = u(`3114378030`, g);
        return t(h, {
          ...f,
          className: s(`framer-0oOzt`, i),
          layoutId: a,
          ref: n,
          role: `presentation`,
          style: { "--1m6trwb": d, "--21h8s6": c, "--pgex8v": l, ...r },
          viewBox: `0 0 24 24`,
          children: t(`use`, { href: p }),
        });
      }),
      [
        `.framer-0oOzt { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
      ],
      `framer-0oOzt`
    )),
    (v.displayName = `Align Center Horizontal Simple`),
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
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerIntrinsicHeight: `24`,
            framerDisableUnlink: `true`,
            framerIntrinsicWidth: `24`,
            framerContractVersion: `1`,
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            framerImmutableVariables: `true`,
            framerVector: `{"name":"Align Center Horizontal Simple","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { b as __FramerMetadata__, y as default };
//# sourceMappingURL=unur7AShG.D99Krjnp.mjs.map
