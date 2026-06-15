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
    (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 7.5 L 3.75 7.5 C 5.821 7.5 7.5 5.821 7.5 3.75 C 7.5 1.679 5.821 0 3.75 0 L 0 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="7.5px" id="fd1EBwFI0" transform="translate(15 7.5)" width="7.5px"/><path d="M 0 0 L 0 11.313 C 0 11.563 0.125 11.797 0.334 11.936 L 1.365 12.623 C 1.568 12.759 1.824 12.787 2.052 12.699 C 2.279 12.611 2.45 12.418 2.509 12.181 L 3.75 7.5" fill="transparent" height="12.74941861813302px" id="BXg1FaKtX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(15 7.5)" width="3.75px"/><path d="M 0 15.749 C 0 16.041 0.169 16.306 0.434 16.429 C 0.698 16.552 1.01 16.51 1.233 16.323 C 6.145 12.201 11.25 11.999 11.25 11.999 L 15 11.999 C 17.071 11.999 18.75 10.32 18.75 8.249 C 18.75 6.178 17.071 4.499 15 4.499 L 11.25 4.499 C 11.25 4.499 6.145 4.296 1.233 0.176 C 1.01 -0.012 0.698 -0.053 0.434 0.07 C 0.17 0.193 0 0.457 0 0.749 Z" fill="transparent" height="16.498728791991567px" id="strjqDTSP" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 3.001)" width="18.75px"/></svg>`),
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
          p = u(`2705277321`, g);
        return t(h, {
          ...f,
          className: s(`framer-mvpsu`, i),
          layoutId: a,
          ref: n,
          role: `presentation`,
          style: { "--1m6trwb": d, "--21h8s6": c, "--pgex8v": l, ...r },
          viewBox: `0 0 24 24`,
          children: t(`use`, { href: p }),
        });
      }),
      [
        `.framer-mvpsu { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
      ],
      `framer-mvpsu`
    )),
    (v.displayName = `Megaphone`),
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
            framerContractVersion: `1`,
            framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            framerVector: `{"name":"Megaphone","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
            framerIntrinsicWidth: `24`,
            framerImmutableVariables: `true`,
            framerSupportedLayoutHeight: `any-prefer-fixed`,
            framerDisableUnlink: `true`,
            framerSupportedLayoutWidth: `any-prefer-fixed`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { b as __FramerMetadata__, y as default };
//# sourceMappingURL=IKTVpX5qn.DDUU_ZHq.mjs.map
