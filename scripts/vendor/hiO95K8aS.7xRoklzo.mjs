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
    (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0.75 13.5 C 0.336 13.5 0 13.164 0 12.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 12.75 0 C 13.164 0 13.5 0.336 13.5 0.75 L 13.5 12.75 C 13.5 13.164 13.164 13.5 12.75 13.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="qmWn2t1Uh" transform="translate(6.75 3.75)" width="13.5px"/><path d="M 6 6 L 5.999 0.001 L 0 0" fill="transparent" height="6px" id="VJus16esC" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 12.75)" width="6px"/><path d="M 8.25 13.5 L 12.75 13.5 C 13.164 13.5 13.5 13.164 13.5 12.75 L 13.5 0.75 C 13.5 0.336 13.164 0 12.75 0 L 0.75 0 C 0.336 0 0 0.336 0 0.75 L 0 5.25" fill="transparent" height="13.5px" id="HJtvMf8NB" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6.75 3.75)" width="13.5px"/><path d="M 0 7.5 L 7.5 0" fill="transparent" height="7.5px" id="wuVxFQDw8" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12.75)" width="7.5px"/></svg>`),
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
          p = u(`2348838518`, g);
        return t(h, {
          ...f,
          className: s(`framer-ba9sR`, i),
          layoutId: a,
          ref: n,
          role: `presentation`,
          style: { "--1m6trwb": d, "--21h8s6": c, "--pgex8v": l, ...r },
          viewBox: `0 0 24 24`,
          children: t(`use`, { href: p }),
        });
      }),
      [
        `.framer-ba9sR { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
      ],
      `framer-ba9sR`
    )),
    (v.displayName = `Arrow Square In`),
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
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerVector: `{"name":"Arrow Square In","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
            framerIntrinsicWidth: `24`,
            framerContractVersion: `1`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerIntrinsicHeight: `24`,
            framerDisableUnlink: `true`,
            framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            framerImmutableVariables: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { b as __FramerMetadata__, y as default };
//# sourceMappingURL=hiO95K8aS.7xRoklzo.mjs.map
