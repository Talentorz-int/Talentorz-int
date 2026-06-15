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
    (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 16.5 C 0 14.843 1.343 13.5 3 13.5 L 9.75 13.5 L 9.75 0 L 3 0 C 1.343 0 0 1.343 0 3 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="Gm9AnZnde" transform="translate(12 5.25)" width="9.75px"/><path d="M 0 3 C 0 1.343 1.343 0 3 0 L 9.75 0 L 9.75 13.5 L 3 13.5 C 1.343 13.5 0 14.843 0 16.5" fill="transparent" height="16.5px" id="QHKMDgb68" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 5.25)" width="9.75px"/><path d="M 0 13.5 L 6.75 13.5 C 8.407 13.5 9.75 14.843 9.75 16.5 L 9.75 3 C 9.75 1.343 8.407 0 6.75 0 L 0 0 Z" fill="transparent" height="16.5px" id="XR5vk87JJ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 5.25)" width="9.75px"/><path d="M 0 0 L 3.75 0" fill="transparent" height="1px" id="GCWp4q_dC" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(15 9)" width="3.75px"/><path d="M 0 0 L 3.75 0" fill="transparent" height="1px" id="Tb3ZMseOB" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(15 12)" width="3.75px"/><path d="M 0 0 L 3.75 0" fill="transparent" height="1px" id="h4Zg3NREU" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(15 15)" width="3.75px"/></svg>`),
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
          p = u(`2580537305`, g);
        return t(h, {
          ...f,
          className: s(`framer-6Y09U`, i),
          layoutId: a,
          ref: n,
          role: `presentation`,
          style: { "--1m6trwb": d, "--21h8s6": c, "--pgex8v": l, ...r },
          viewBox: `0 0 24 24`,
          children: t(`use`, { href: p }),
        });
      }),
      [
        `.framer-6Y09U { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
      ],
      `framer-6Y09U`
    )),
    (v.displayName = `Book Open Text`),
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
            framerDisableUnlink: `true`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
            framerIntrinsicWidth: `24`,
            framerVector: `{"name":"Book Open Text","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            framerIntrinsicHeight: `24`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { b as __FramerMetadata__, y as default };
//# sourceMappingURL=to6hH0i12.BxkWYPYN.mjs.map
