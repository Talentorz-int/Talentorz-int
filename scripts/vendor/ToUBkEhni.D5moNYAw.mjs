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
      (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 12 C 0 12.828 0.672 13.5 1.5 13.5 L 6.428 13.5 L 9 10.5 L 11.572 13.5 L 16.5 13.5 C 17.328 13.5 18 12.828 18 12 L 18 1.5 C 18 0.672 17.328 0 16.5 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="Eeevy4mkZ" transform="translate(3 4.5)" width="18px"/><path d="M 4.5 0 L 9 5.25 L 0 5.25 Z" fill="transparent" height="5.25px" id="GNFH5m9ni" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 15)" width="9px"/><path d="M 2.25 13.5 L 1.5 13.5 C 0.672 13.5 0 12.828 0 12 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 16.5 0 C 17.328 0 18 0.672 18 1.5 L 18 12 C 18 12.828 17.328 13.5 16.5 13.5 L 15.75 13.5" fill="transparent" height="13.5px" id="kBgedOaxq" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 4.5)" width="18px"/></svg>`),
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
            p = u(`1981905448`, g);
          return t(h, {
            ...f,
            className: s(`framer-F9UoJ`, i),
            layoutId: a,
            ref: n,
            role: `presentation`,
            style: { "--1m6trwb": d, "--21h8s6": c, "--pgex8v": l, ...r },
            viewBox: `0 0 24 24`,
            children: t(`use`, { href: p }),
          });
        }),
        [
          `.framer-F9UoJ { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
        ],
        `framer-F9UoJ`
      )),
      (v.displayName = `Airplay`),
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
              framerVector: `{"name":"Airplay","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
              framerImmutableVariables: `true`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
              framerDisableUnlink: `true`,
              framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerIntrinsicWidth: `24`,
              framerContractVersion: `1`,
              framerIntrinsicHeight: `24`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { b as n, x as r, y as t };
//# sourceMappingURL=ToUBkEhni.D5moNYAw.mjs.map
