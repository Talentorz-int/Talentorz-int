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
      (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 9.001 0 C 5.274 0 1.932 2.297 0.597 5.777 C -0.737 9.257 0.211 13.2 2.982 15.692 L 2.982 15.692 C 4.134 13.426 6.46 12 9.001 12 C 6.93 12 5.251 10.321 5.251 8.25 C 5.251 6.179 6.93 4.5 9.001 4.5 C 11.072 4.5 12.751 6.179 12.751 8.25 C 12.751 10.321 11.072 12 9.001 12 C 11.542 11.999 13.868 13.426 15.02 15.691 C 17.79 13.198 18.738 9.256 17.403 5.777 C 16.069 2.297 12.728 0 9.001 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="15.69187501654227px" id="BdGWzYEXB" transform="translate(2.999 3)" width="18.00079583996478px"/><path d="M 0 3.75 C 0 1.679 1.679 0 3.75 0 C 5.821 0 7.5 1.679 7.5 3.75 C 7.5 5.821 5.821 7.5 3.75 7.5 C 1.679 7.5 0 5.821 0 3.75 Z" fill="transparent" height="7.5px" id="M6w01EcBM" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.25 7.5)" width="7.5px"/><path d="M 0 3.694 C 1.151 1.428 3.477 0 6.019 0 C 8.561 0 10.887 1.428 12.037 3.694" fill="transparent" height="3.6943252075032547px" id="u2NYLGeQo" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.981 14.997)" width="12.037499999999994px"/><path d="M 17.861 7.501 C 18.51 11.358 16.591 15.193 13.114 16.986 C 9.637 18.778 5.4 18.118 2.634 15.352 C -0.132 12.586 -0.793 8.349 1 4.872 C 2.793 1.395 6.628 -0.524 10.485 0.125" fill="transparent" height="17.985736468561875px" id="f2Vo8UUZS" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.015 2.999)" width="17.985736468561868px"/><path d="M 0 1.5 L 1.5 3 L 4.5 0" fill="transparent" height="3px" id="xKOlEkRP2" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(17.25 3.75)" width="4.5px"/></svg>`),
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
            p = u(`2319228690`, g);
          return t(h, {
            ...f,
            className: s(`framer-2K3Oi`, i),
            layoutId: a,
            ref: n,
            role: `presentation`,
            style: { "--1m6trwb": d, "--21h8s6": c, "--pgex8v": l, ...r },
            viewBox: `0 0 24 24`,
            children: t(`use`, { href: p }),
          });
        }),
        [
          `.framer-2K3Oi { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
        ],
        `framer-2K3Oi`
      )),
      (v.displayName = `User Circle Check`),
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
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerIntrinsicHeight: `24`,
              framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
              framerDisableUnlink: `true`,
              framerIntrinsicWidth: `24`,
              framerImmutableVariables: `true`,
              framerVector: `{"name":"User Circle Check","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { x as n, y as r, b as t };
//# sourceMappingURL=vg1v3uWYO.CYvh1UcS.mjs.map
