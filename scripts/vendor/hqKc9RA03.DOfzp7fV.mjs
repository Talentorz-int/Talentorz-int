import { t as e } from "./rolldown-runtime.BXVgRTY5.mjs";
import { c as t, g as n, o as r, w as i } from "./react.DXuyTrsy.mjs";
import { C as a } from "./motion.C4Ab7j_2.mjs";
import { A as o, N as s, St as c, Y as l, bt as u, o as d } from "./framer.A_mnCMV8.mjs";
var f,
  p,
  m,
  h,
  g,
  _,
  v,
  y,
  b,
  x = e(() => {
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
      (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 1.238 L 0 12.488 C 8.591 8.291 12.409 16.459 21 12.261 L 21 1.011 C 12.409 5.209 8.591 -2.959 0 1.238 Z M 10.5 9 C 9.257 9 8.25 7.993 8.25 6.75 C 8.25 5.507 9.257 4.5 10.5 4.5 C 11.743 4.5 12.75 5.507 12.75 6.75 C 12.75 7.993 11.743 9 10.5 9 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.49980803904471px" id="MMpbaZYMI" transform="translate(1.5 5.25)" width="21px"/><path d="M 21 12.261 C 12.409 16.459 8.591 8.291 0 12.488 L 0 1.238 C 8.591 -2.959 12.409 5.209 21 1.011 Z" fill="transparent" height="13.499808039044709px" id="Ev5IwXLVx" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(1.5 5.25)" width="21px"/><path d="M 0 2.25 C 0 1.007 1.007 0 2.25 0 C 3.493 0 4.5 1.007 4.5 2.25 C 4.5 3.493 3.493 4.5 2.25 4.5 C 1.007 4.5 0 3.493 0 2.25 Z" fill="transparent" height="4.5px" id="WU8V3C5z1" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9.75 9.75)" width="4.5px"/><path d="M 0 0 L 0 4.5" fill="transparent" height="4.5px" id="WzT7hSez7" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 9)" width="1px"/><path d="M 0 0 L 0 4.5" fill="transparent" height="4.5px" id="mIpN_pvvr" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(19.5 10.5)" width="1px"/></svg>`),
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
            p = u(`2758010082`, g);
          return t(h, {
            ...f,
            className: s(`framer-mz98p`, i),
            layoutId: a,
            ref: n,
            role: `presentation`,
            style: { "--1m6trwb": d, "--21h8s6": c, "--pgex8v": l, ...r },
            viewBox: `0 0 24 24`,
            children: t(`use`, { href: p }),
          });
        }),
        [
          `.framer-mz98p { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
        ],
        `framer-mz98p`
      )),
      (v.displayName = `Money Wavy`),
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
              framerContractVersion: `1`,
              framerDisableUnlink: `true`,
              framerIntrinsicHeight: `24`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerIntrinsicWidth: `24`,
              framerVector: `{"name":"Money Wavy","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
              framerImmutableVariables: `true`,
              framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { y as n, x as r, b as t };
//# sourceMappingURL=hqKc9RA03.DOfzp7fV.mjs.map
