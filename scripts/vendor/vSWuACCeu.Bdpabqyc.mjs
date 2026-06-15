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
    (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 15 L 0 0 L 18 0 L 18 15 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="15px" id="OgXgu5d_q" transform="translate(3 4.5)" width="18px"/><path d="M 0 0 L 3.75 0 L 3.75 3.75" fill="transparent" height="3.75px" id="UzXdPJIyG" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(17.25 4.5)" width="3.75px"/><path d="M 3.75 3.75 L 0 3.75 L 0 0" fill="transparent" height="3.75px" id="BQ6KT0TWL" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 15.75)" width="3.75px"/><path d="M 3.75 0 L 3.75 3.75 L 0 3.75" fill="transparent" height="3.75px" id="aabax1yAI" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(17.25 15.75)" width="3.75px"/><path d="M 0 3.75 L 0 0 L 3.75 0" fill="transparent" height="3.75px" id="QMGdd20jF" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 4.5)" width="3.75px"/><path d="M 0 0 L 0 7.5" fill="transparent" height="7.5px" id="ku6NgdBqr" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 8.25)" width="1px"/><path d="M 0 0 L 0 7.5" fill="transparent" height="7.5px" id="RpqXxlf_G" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(16.5 8.25)" width="1px"/><path d="M 0 0 L 0 7.5" fill="transparent" height="7.5px" id="voTsGxCkG" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(13.5 8.25)" width="1px"/><path d="M 0 0 L 0 7.5" fill="transparent" height="7.5px" id="krxzRMJS7" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(10.5 8.25)" width="1px"/></svg>`),
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
          p = u(`3456384012`, g);
        return t(h, {
          ...f,
          className: s(`framer-4pjyC`, i),
          layoutId: a,
          ref: n,
          role: `presentation`,
          style: { "--1m6trwb": d, "--21h8s6": c, "--pgex8v": l, ...r },
          viewBox: `0 0 24 24`,
          children: t(`use`, { href: p }),
        });
      }),
      [
        `.framer-4pjyC { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
      ],
      `framer-4pjyC`
    )),
    (v.displayName = `Barcode`),
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
            framerIntrinsicWidth: `24`,
            framerIntrinsicHeight: `24`,
            framerDisableUnlink: `true`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            framerContractVersion: `1`,
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerImmutableVariables: `true`,
            framerVector: `{"name":"Barcode","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { b as __FramerMetadata__, y as default };
//# sourceMappingURL=vSWuACCeu.Bdpabqyc.mjs.map
