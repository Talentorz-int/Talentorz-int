function s(e, t) {
  return e;
}
var oe = Symbol("skip");
function gt(e) {
  return e === oe;
}
function l(e, t, o) {
  o || (o = fe(e, {}));
  let r = t(e, o);
  return gt(r)
    ? e
    : (!r || !me(e) || ((r = r), (r.children = e.children.map((i) => l(i, t, o)).filter(Tt))), r);
}
function Tt(e) {
  return !!e;
}
function me(e) {
  return Array.isArray(e.children) && e.children.length > 0;
}
function fe(e, t) {
  if (((t[e.id] = e), me(e))) for (let o of e.children) fe(o, t);
  return t;
}
function Ne(e) {
  return {
    version: 56,
    root: l(e.root, (o) => {
      if (o.__class === "RootNode") {
        let r = { homeNodeId: null, ...o };
        return s(r, void 0);
      }
      return s(o, void 0);
    }),
  };
}
function yt(e) {
  return "replicaInfo" in e;
}
function y(e, t, o) {
  if (!e.replicaInfo) return;
  let r = { ...e.replicaInfo, overrides: { ...e.replicaInfo.overrides } };
  e.replicaInfo = r;
  let i = Object.keys(r.overrides);
  for (let n of i) {
    let { originalNode: d, upstreamOverrides: c } = xe(n, r.master, {}, t);
    d &&
      o(
        d,
        (p, m) => (m in c ? c[m] : p[m]),
        (p, m, u) => {
          r.overrides[n] = u(r.overrides[n], `${e.id}_${d.id}`);
        }
      );
  }
}
function xe(e, t, o, r) {
  if (!e) return { originalNode: void 0, upstreamOverrides: o };
  let i = r[e];
  if (i) return { originalNode: i, upstreamOverrides: o };
  let n = r[t];
  if (!n) return { originalNode: void 0, upstreamOverrides: o };
  let d = he(n, (m) => e.startsWith(m.id));
  if (!d || !yt(d) || !d.replicaInfo) return { originalNode: void 0, upstreamOverrides: o };
  let { replicaInfo: c } = d;
  for (let m in c.overrides) {
    if (!e.endsWith(m)) continue;
    let { _deleted: u, ...x } = c.overrides[m] ?? {};
    if (Array.isArray(u)) for (let N of u) N in o || (o[N] = void 0);
    for (let N in x) N in o || (o[N] = x[N]);
  }
  let p = e.slice(d.id.length);
  return xe(p, c.master, o, r);
}
function St(e) {
  return Array.isArray(e.children) && e.children.length > 0;
}
function he(e, t) {
  if (t(e)) return e;
  if (St(e))
    for (let o of e.children) {
      let r = he(o, t);
      if (r) return r;
    }
}
function f(e, ...t) {
  for (let o of t) delete e[o];
  return e;
}
function ge(e) {
  return {
    version: 57,
    root: l(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode":
        case "ShapeContainerNode": {
          let i = te(o),
            n = f(
              { ...o, ...i },
              "navigationTarget",
              "navigationTransition",
              "navigationTransitionDirection",
              "navigationTransitionBackdropColor"
            );
          return (n.__class === "FrameNode" && y(n, r, Pt), s(n, void 0));
        }
        default:
          return s(o, void 0);
      }
    }),
  };
}
function Pt(e, t, o) {
  switch (e.__class) {
    case "FrameNode":
    case "ShapeContainerNode": {
      o(e, void 0, (r) => {
        let {
            navigationTarget: i,
            navigationTransition: n,
            navigationTransitionBackdropColor: d,
            navigationTransitionDirection: c,
            _deleted: p,
            ...m
          } = r,
          u = m,
          x = p || [];
        if (i !== void 0 || n || d || c) {
          let N = {
              navigationTarget: t(e, "navigationTarget"),
              navigationTransition: t(e, "navigationTransition"),
              navigationTransitionDirection: t(e, "navigationTransitionDirection"),
              navigationTransitionBackdropColor: t(e, "navigationTransitionBackdropColor"),
            },
            h = te(N),
            g = { ...N, ...r },
            T = te(g);
          T ? (u.onTap = T.onTap) : h && !x.includes("onTap") && x.push("onTap");
        }
        return (x.length && (u._deleted = x), u);
      });
      break;
    }
  }
}
function te(e) {
  if (!e.navigationTarget) return;
  let t = {
    identifier: "action-migrate-1",
    actionIdentifier: "framer/useNavigate",
    controls: {
      type: { type: "segmentedenum", value: "next" },
      target: { type: "componentinstance", value: "" },
      transition: { type: "enum", value: "magicMotion" },
      appearsFrom: { type: "segmentedenum", value: "right" },
      backdropColor: { type: "color", value: "rgba(4,4,15,.4)" },
      animation: {
        type: "transition",
        value: {
          type: "spring",
          ease: [0.44, 0, 0.56, 1],
          duration: 0.3,
          delay: 0,
          stiffness: 500,
          damping: 60,
          mass: 1,
        },
      },
    },
  };
  return (
    e.navigationTarget === "@Previous"
      ? (t.controls.type.value = "previous")
      : (t.controls.target.value = e.navigationTarget),
    (t.controls.transition.value = e.navigationTransition),
    (t.controls.appearsFrom.value = Vt(e.navigationTransitionDirection)),
    (t.controls.backdropColor.value = e.navigationTransitionBackdropColor),
    { onTap: [t] }
  );
}
function Vt(e) {
  switch (e) {
    case "right":
      return "left";
    case "up":
      return "bottom";
    case "down":
      return "top";
    case "left":
    default:
      return "right";
  }
}
function Te(e) {
  return {
    version: 58,
    root: l(e.root, (o) =>
      o.__class !== "TextNode" ? s(o, void 0) : s({ clip: !0, ...o }, void 0)
    ),
  };
}
function A(e) {
  switch (e) {
    case 1:
    case 0:
    case -1:
      return !0;
    default:
      return !1;
  }
}
function ye(e) {
  return {
    version: 59,
    root: l(e.root, (o) => {
      if (o.__class !== "CodeComponentNode") return s(o, void 0);
      if (o.codeComponentIdentifier !== "framer/Stack") return s(o, void 0);
      let r = o.codeComponentProps ?? {},
        i = f(
          {
            ...o,
            __class: "FrameNode",
            stackEnabled: !0,
            stackDirection: Rt(r.direction),
            stackDistribution: Ct(r.distribution),
            stackAlignment: bt(r.alignment),
            stackGap: D(r.gap),
            padding: D(r.padding),
            paddingPerSide: Et(r.paddingPerSide),
            paddingTop: D(r.paddingTop),
            paddingRight: D(r.paddingRight),
            paddingBottom: D(r.paddingBottom),
            paddingLeft: D(r.paddingLeft),
            blendingEnabled: 0,
          },
          "codeComponentIdentifier",
          "codeComponentPackageVersion",
          "codeComponentProps",
          "replicaInfo",
          "originalid"
        );
      return s(i, void 0);
    }),
  };
}
function Rt(e) {
  switch (e) {
    case "horizontal":
    case "vertical":
      return e;
    default:
      return "horizontal";
  }
}
function Ct(e) {
  switch (e) {
    case "start":
    case "center":
    case "end":
    case "space-between":
    case "space-around":
    case "space-evenly":
      return e;
    default:
      return "start";
  }
}
function bt(e) {
  switch (e) {
    case "start":
    case "center":
    case "end":
      return e;
    default:
      return "center";
  }
}
function D(e, t = 0) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Et(e, t = !1) {
  return e === !0 || e === !1 ? e : t;
}
function Se(e) {
  return {
    version: 60,
    root: l(e.root, (o) => {
      if (o.__class !== "CodeComponentNode") return s(o, void 0);
      let r = f({ ...o, originalid: null }, "replicaInfo");
      return s(r, void 0);
    }),
  };
}
function Pe(e) {
  return {
    version: 61,
    root: l(e.root, (o) =>
      o.__class !== "TextNode" ? s(o, void 0) : s({ ...o, textVerticalAlignment: "top" }, void 0)
    ),
  };
}
function Ve(e) {
  return {
    version: 62,
    root: l(e.root, (o) => {
      let r = { lastDuplicatedFromId: null, duplicatedFromId: null, ...o };
      return s(r, void 0);
    }),
  };
}
function _e(e) {
  return {
    version: 63,
    root: l(e.root, (o) => {
      let r = null;
      o.duplicatedFromId &&
        ((r = [o.duplicatedFromId]),
        o.lastDuplicatedFromId &&
          o.lastDuplicatedFromId !== o.duplicatedFromId &&
          r.push(o.lastDuplicatedFromId));
      let i = f({ duplicatedFrom: r, ...o }, "duplicatedFromId", "lastDuplicatedFromId");
      return s(i, void 0);
    }),
  };
}
function ve(e) {
  return {
    version: 64,
    root: l(e.root, (o) => {
      if (o.__class === "FrameNode") {
        let r = Ft(o) ? It(o.deviceType) : null,
          i = f({ framePreset: r, ...o }, "deviceType");
        return s(i, void 0);
      }
      if (o.__class === "ShapeContainerNode") {
        let r = f({ ...o }, "deviceType");
        return s(r, void 0);
      }
      if (o.__class === "CodeComponentNode") {
        let r = f({ ...o }, "deviceType");
        return s(r, void 0);
      }
      return s(o, void 0);
    }),
  };
}
var kt = "deviceType";
function Ft(e) {
  return kt in e;
}
var wt = {
  "framer/FramerAppleWatch38": "AppleWatch_38",
  "framer/FramerAppleWatch42": "AppleWatch_42",
  "framer/FramerSonySmartWatch": null,
  "framer/FramerAppleIPhoneSE": "iPhone_320_568",
  "framer/FramerAppleIPhone8": "iPhone_375_667",
  "framer/FramerAppleIPhone8Plus": "iPhone_414_736",
  "framer/FramerAppleIPhoneXR": "iPhone_414_896",
  "framer/FramerAppleIPhoneXS": "iPhone_375_812",
  "framer/FramerAppleIPhoneXSMax": "iPhone_414_896_pro",
  "framer/FramerGooglePixel2": null,
  "framer/FramerGooglePixel2XL": null,
  "framer/FramerGooglePixel3": "GooglePixel_411_822",
  "framer/FramerGooglePixel3XL": "GooglePixel_411_846",
  "framer/FramerSamsungNote5": null,
  "framer/FramerSamsungGalaxyS9": null,
  "framer/FramerAppleIPadAir": "iPad_768_1024",
  "framer/FramerAppleIPadMini": "iPad_768_1024",
  "framer/FramerAppleIPadPro": "iPad_1024_1366",
  "framer/FramerGoogleNexusTablet": null,
  "framer/FramerMicrosoftSurfacePro3": "Surface_1440_960",
  "framer/FramerMicrosoftSurfacePro4": "Surface_1368_912",
  "framer/FramerAppleIMac": "iMac_2560_1440",
  "framer/FramerAppleThunderboltDisplay": null,
  "framer/FramerAppleMacBook": null,
  "framer/FramerAppleMacBookAir": "MacBook_1440_900",
  "framer/FramerAppleMacBookPro": "MacBook_1440_900_pro",
  "framer/FramerDellXPS": "DellXPS_1920_1080",
  "framer/FramerMicrosoftSurfaceBook": "SurfaceBook_1500_1000",
  "framer/FramerSonyW850C": "SonyTV_1280_720",
  "framer/FramerStoreArtwork": "PackageArtwork_800_600",
  "framer/FramerStoreIcon": "PackageIcon_50_50",
};
function It(e) {
  return wt[e] || null;
}
function Re(e) {
  return {
    version: 65,
    root: l(e.root, (o) =>
      o.__class === "RootNode" ? s({ disableBackdropFilters: !1, ...o }, void 0) : s(o, void 0)
    ),
  };
}
function Ce(e) {
  return {
    version: 66,
    root: l(e.root, (o) => {
      switch (o.__class) {
        case "CodeComponentNode":
        case "SVGNode":
        case "TextNode":
        case "PathNode":
        case "RectangleShapeNode":
        case "OvalShapeNode":
        case "PolygonShapeNode":
        case "StarShapeNode": {
          let r = f({ ...o }, "children");
          return s(r, void 0);
        }
        default:
          return s(o, void 0);
      }
    }),
  };
}
function be(e) {
  return {
    version: 67,
    root: l(e.root, (o) => {
      switch (o.__class) {
        case "FrameNode":
          return s({ overlayGrid: void 0, ...o }, void 0);
        default:
          return s(o, void 0);
      }
    }),
  };
}
function ke(e) {
  return {
    version: 68,
    root: l(e.root, (o) => {
      if (o.__class !== "TextNode") return s(o, void 0);
      if (!Bt(o)) return s(o, void 0);
      let r = Ot(o.styledText),
        i = { ...o, styledText: r };
      return s(i, void 0);
    }),
  };
}
function Ot(e) {
  if (typeof e != "object") return e;
  let t = e;
  for (let o of t.blocks) {
    for (let r of o.inlineStyleRanges) r.style = Ee(r.style);
    o.data.emptyStyle && (o.data.emptyStyle = o.data.emptyStyle.map(Ee));
  }
  return t;
}
function Ee(e) {
  return e.startsWith("UNDERLINE")
    ? "TEXTDECORATION:underline"
    : e.startsWith("STRIKETHROUGH")
      ? "TEXTDECORATION:line-through"
      : e;
}
function Wt(e) {
  return !!e && typeof e == "object";
}
function Bt(e) {
  return (
    Wt(e) &&
    "styledText" in e &&
    typeof e.styledText == "object" &&
    !!e.styledText &&
    "blocks" in e.styledText
  );
}
function Fe(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 69, root: s(t, void 0) };
  let o = we(t),
    r = [],
    i = [];
  for (let c of t.children ?? []) {
    let p = r;
    (c.__class !== "PageNode" &&
      typeof c.isExternalMaster != "string" &&
      ((c = { ...c, parentid: o }), (p = i)),
      p.push(c));
  }
  let n = {
      __class: "PageNode",
      id: o,
      name: "Page 1",
      children: i,
      homeNodeId: t.homeNodeId ?? null,
      guidesX: t.guidesX ?? [],
      guidesY: t.guidesY ?? [],
    },
    d = f({ ...t, children: [n, ...r] }, "homeNodeId", "guidesX", "guidesY");
  return { version: 69, root: s(d, void 0) };
}
function we(e) {
  return e.id + "-page";
}
function Y(e) {
  if (!e) return;
  let t = [];
  return (
    e.forEach((o) => {
      let { enabled: r, ...i } = o;
      r && t.push(i);
    }),
    t.length > 0 ? { boxShadows: t } : void 0
  );
}
function ne(e) {
  if (!e) return;
  let t = [];
  return (
    e.forEach((o) => {
      let { enabled: r, ...i } = o;
      r && t.push(i);
    }),
    t.length > 0 ? { shadows: t } : void 0
  );
}
function H(e) {
  if (e.blurEnabled === 1)
    switch (e.blurType) {
      case "background":
        return { backgroundBlur: e.blur };
      case "layer":
        return { blur: e.blur };
    }
}
function z(e) {
  let t = {};
  return (
    e.brightnessEnabled === 1 && (t.brightness = e.brightness),
    e.contrastEnabled === 1 && (t.contrast = e.contrast),
    e.grayScaleEnabled === 1 && (t.grayscale = e.grayscale),
    e.hueRotateEnabled === 1 && (t.hueRotate = e.hueRotate),
    e.invertEnabled === 1 && (t.invert = e.invert),
    e.saturateEnabled === 1 && (t.saturate = e.saturate),
    e.sepiaEnabled === 1 && (t.sepia = e.sepia),
    t
  );
}
function Ie(e) {
  switch (e.borderEnabled) {
    case 1:
      return { borderEnabled: !0 };
    case 0:
    case -1:
      return { borderEnabled: !1 };
    default:
      return;
  }
}
function Mt(e) {
  switch (e.strokeEnabled) {
    case 1:
      return { strokeEnabled: !0 };
    case 0:
    case -1:
      return { strokeEnabled: !1 };
    default:
      return;
  }
}
function Oe({ blendingMode: e }) {
  return !e || e === "normal" ? void 0 : { blendingMode: e };
}
function Dt(e) {
  return Array.isArray(e);
}
function Lt(e) {
  return typeof e == "object" && e !== null;
}
function At(e) {
  return e === !0 || e === !1;
}
var Gt = "type",
  Ht = "enabled";
function zt(e) {
  return !Lt(e) || typeof e[Gt] != "string" ? !1 : At(e[Ht]);
}
function Ut(e) {
  return Dt(e) ? e.every(zt) : !1;
}
function De(e, t) {
  let o = { ...e },
    r = Object.keys(o);
  for (let i of r) {
    let n = o[i];
    if (!Ut(n)) continue;
    let d = [];
    ((o[i] = d),
      n.forEach((c, p) => {
        let { enabled: m, ...u } = c;
        m && d.push({ ...u, id: `migrated_array_value_${t}_${i}_${p}` });
      }));
  }
  return o;
}
function K(e) {
  return typeof e == "number" && Number.isFinite(e);
}
function M(e, t) {
  e.includes(t) || e.push(t);
}
function We(e, t) {
  t && (e.blendingMode = t);
}
function Be(e, t) {
  switch (t) {
    case 1:
      e.borderEnabled = !0;
      break;
    case 0:
    case -1:
      e.borderEnabled = !1;
      break;
  }
}
function $t(e, t) {
  switch (t) {
    case 1:
      e.strokeEnabled = !0;
      break;
    case 0:
    case -1:
      e.strokeEnabled = !1;
      break;
  }
}
function re(e, t, o) {
  if (!t) return;
  let r = "boxShadows";
  if (o.includes(r)) return;
  let i = Y(t);
  i?.boxShadows ? (e.boxShadows = i.boxShadows) : M(o, r);
}
function Me(e, t, o) {
  if (!t) return;
  let r = "shadows";
  if (o.includes(r)) return;
  let i = ne(t);
  i?.shadows ? (e.shadows = i.shadows) : M(o, r);
}
function U(e, t, o, { blur: r, blurEnabled: i, blurType: n }, d) {
  let c = "blur",
    p = "backgroundBlur",
    m = "blurEnabled",
    u = "blurType",
    x = d.indexOf(m),
    N = d.indexOf(u),
    h = [x, N].filter((_) => _ !== -1);
  if (h.length > 0) {
    (h.sort((_, k) => k - _),
      h.forEach((_) => {
        d.splice(_, 1);
      }),
      d.includes(c) || d.push(c),
      d.includes(p) || d.push(p));
    return;
  }
  if (!(A(i) || !!n || K(r))) return;
  let T = { blur: o(t, c), blurEnabled: o(t, m), blurType: o(t, u) },
    v = A(i) ? i : T.blurEnabled,
    V = n || T.blurType,
    b = K(r) ? r : T.blur,
    E = v === 1;
  switch (V) {
    case "layer":
      (E ? (e.blur = b) : M(d, "blur"), M(d, "backgroundBlur"));
      break;
    case "background":
      (E ? (e.backgroundBlur = b) : M(d, "backgroundBlur"), M(d, "blur"));
  }
}
function $(e, t, o, r, i) {
  function n(d, c) {
    let p = i.indexOf(c);
    if (p >= 0) {
      (i.splice(p, 1), i.includes(d) || i.push(d));
      return;
    }
    let m = r[c],
      u = r[d];
    if (!(A(m) || K(u))) return { isOverridden: !1 };
    let N = A(m) ? m : o(t, c),
      h = K(u) ? u : o(t, d);
    switch (N) {
      case 1:
        e[d] = h;
        break;
      default:
        M(i, d);
        break;
    }
  }
  (n("brightness", "brightnessEnabled"),
    n("contrast", "contrastEnabled"),
    n("grayscale", "grayScaleEnabled"),
    n("hueRotate", "hueRotateEnabled"),
    n("invert", "invertEnabled"),
    n("saturate", "saturateEnabled"),
    n("sepia", "sepiaEnabled"));
}
function Yt(e, t, o) {
  switch (e.__class) {
    case "FrameNode": {
      o(e, void 0, (r) => {
        let {
            borderEnabled: i,
            boxShadows: n,
            blendingMode: d,
            blendingEnabled: c,
            blur: p,
            blurEnabled: m,
            blurType: u,
            brightnessEnabled: x,
            contrastEnabled: N,
            grayScaleEnabled: h,
            hueRotateEnabled: g,
            invertEnabled: T,
            saturateEnabled: v,
            sepiaEnabled: V,
            brightness: b,
            contrast: E,
            grayscale: _,
            hueRotate: k,
            invert: W,
            saturate: B,
            sepia: R,
            _deleted: C,
            ...P
          } = r,
          S = P,
          L = C || [];
        return (
          We(S, d),
          Be(S, i),
          re(S, n, L),
          U(S, e, t, { blur: p, blurEnabled: m, blurType: u }, L),
          $(
            S,
            e,
            t,
            {
              brightnessEnabled: x,
              contrastEnabled: N,
              grayScaleEnabled: h,
              hueRotateEnabled: g,
              invertEnabled: T,
              saturateEnabled: v,
              sepiaEnabled: V,
              brightness: b,
              contrast: E,
              grayscale: _,
              hueRotate: k,
              invert: W,
              saturate: B,
              sepia: R,
            },
            L
          ),
          L.length && (S._deleted = L),
          S
        );
      });
      break;
    }
    case "CodeComponentNode": {
      o(e, void 0, (r, i) => {
        let {
            borderEnabled: n,
            boxShadows: d,
            blur: c,
            blurEnabled: p,
            blurType: m,
            brightnessEnabled: u,
            contrastEnabled: x,
            grayScaleEnabled: N,
            hueRotateEnabled: h,
            invertEnabled: g,
            saturateEnabled: T,
            sepiaEnabled: v,
            brightness: V,
            contrast: b,
            grayscale: E,
            hueRotate: _,
            invert: k,
            saturate: W,
            sepia: B,
            _deleted: R,
            ...C
          } = r,
          P = C,
          S = R || [];
        return (
          r.codeComponentProps && (P.codeComponentProps = De(r.codeComponentProps, i)),
          Be(P, n),
          re(P, d, S),
          U(P, e, t, { blur: c, blurEnabled: p, blurType: m }, S),
          $(
            P,
            e,
            t,
            {
              brightnessEnabled: u,
              contrastEnabled: x,
              grayScaleEnabled: N,
              hueRotateEnabled: h,
              invertEnabled: g,
              saturateEnabled: T,
              sepiaEnabled: v,
              brightness: V,
              contrast: b,
              grayscale: E,
              hueRotate: _,
              invert: k,
              saturate: W,
              sepia: B,
            },
            S
          ),
          S.length && (P._deleted = S),
          P
        );
      });
      break;
    }
    case "TextNode": {
      o(e, void 0, (r) => {
        let {
            shadows: i,
            blur: n,
            blurEnabled: d,
            blurType: c,
            brightnessEnabled: p,
            contrastEnabled: m,
            grayScaleEnabled: u,
            hueRotateEnabled: x,
            invertEnabled: N,
            saturateEnabled: h,
            sepiaEnabled: g,
            brightness: T,
            contrast: v,
            grayscale: V,
            hueRotate: b,
            invert: E,
            saturate: _,
            sepia: k,
            _deleted: W,
            ...B
          } = r,
          R = B,
          C = W || [];
        return (
          Me(R, i, C),
          U(R, e, t, { blur: n, blurEnabled: d, blurType: c }, C),
          $(
            R,
            e,
            t,
            {
              brightnessEnabled: p,
              contrastEnabled: m,
              grayScaleEnabled: u,
              hueRotateEnabled: x,
              invertEnabled: N,
              saturateEnabled: h,
              sepiaEnabled: g,
              brightness: T,
              contrast: v,
              grayscale: V,
              hueRotate: b,
              invert: E,
              saturate: _,
              sepia: k,
            },
            C
          ),
          C.length && (R._deleted = C),
          R
        );
      });
      break;
    }
    case "SVGNode": {
      o(e, void 0, (r) => {
        let {
            shadows: i,
            blendingMode: n,
            blendingEnabled: d,
            blur: c,
            blurEnabled: p,
            blurType: m,
            brightnessEnabled: u,
            contrastEnabled: x,
            grayScaleEnabled: N,
            hueRotateEnabled: h,
            invertEnabled: g,
            saturateEnabled: T,
            sepiaEnabled: v,
            brightness: V,
            contrast: b,
            grayscale: E,
            hueRotate: _,
            invert: k,
            saturate: W,
            sepia: B,
            _deleted: R,
            ...C
          } = r,
          P = C,
          S = R || [];
        return (
          We(P, n),
          Me(P, i, S),
          U(P, e, t, { blur: c, blurEnabled: p, blurType: m }, S),
          $(
            P,
            e,
            t,
            {
              brightnessEnabled: u,
              contrastEnabled: x,
              grayScaleEnabled: N,
              hueRotateEnabled: h,
              invertEnabled: g,
              saturateEnabled: T,
              sepiaEnabled: v,
              brightness: V,
              contrast: b,
              grayscale: E,
              hueRotate: _,
              invert: k,
              saturate: W,
              sepia: B,
            },
            S
          ),
          S.length && (P._deleted = S),
          P
        );
      });
      break;
    }
    case "BooleanShapeNode":
    case "OvalShapeNode":
    case "PathNode":
    case "PolygonShapeNode":
    case "RectangleShapeNode":
    case "StarShapeNode": {
      o(e, void 0, (r) => {
        let { boxShadows: i, strokeEnabled: n, _deleted: d, ...c } = r,
          p = c,
          m = d || [];
        return ($t(p, n), re(p, i, m), m.length && (p._deleted = m), p);
      });
      break;
    }
  }
}
function Le(e) {
  return {
    version: 70,
    root: l(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode": {
          let i = {
            ...f(
              { ...o },
              "borderEnabled",
              "boxShadows",
              "blendingMode",
              "blendingEnabled",
              "blur",
              "blurEnabled",
              "blurType",
              "brightnessEnabled",
              "contrastEnabled",
              "grayScaleEnabled",
              "hueRotateEnabled",
              "invertEnabled",
              "saturateEnabled",
              "sepiaEnabled",
              "brightness",
              "contrast",
              "grayscale",
              "hueRotate",
              "invert",
              "saturate",
              "sepia"
            ),
            ...z(o),
            ...H(o),
            ...Oe(o),
            ...Y(o.boxShadows),
            ...Ie(o),
          };
          return (y(i, r, Yt), s(i, void 0));
        }
        case "CodeComponentNode": {
          let i = {
            ...f(
              { ...o },
              "borderEnabled",
              "boxShadows",
              "blur",
              "blurEnabled",
              "blurType",
              "brightnessEnabled",
              "contrastEnabled",
              "grayScaleEnabled",
              "hueRotateEnabled",
              "invertEnabled",
              "saturateEnabled",
              "sepiaEnabled",
              "brightness",
              "contrast",
              "grayscale",
              "hueRotate",
              "invert",
              "saturate",
              "sepia"
            ),
            ...z(o),
            ...H(o),
            ...Y(o.boxShadows),
            ...Ie(o),
            codeComponentProps: De(o.codeComponentProps, o.id),
          };
          return s(i, void 0);
        }
        case "TextNode": {
          let i = {
            ...f(
              { ...o },
              "shadows",
              "blur",
              "blurEnabled",
              "blurType",
              "brightnessEnabled",
              "contrastEnabled",
              "grayScaleEnabled",
              "hueRotateEnabled",
              "invertEnabled",
              "saturateEnabled",
              "sepiaEnabled",
              "brightness",
              "contrast",
              "grayscale",
              "hueRotate",
              "invert",
              "saturate",
              "sepia"
            ),
            ...z(o),
            ...H(o),
            ...ne(o.shadows),
          };
          return s(i, void 0);
        }
        case "SVGNode": {
          let i = {
            ...f(
              { ...o },
              "shadows",
              "blendingMode",
              "blendingEnabled",
              "blur",
              "blurEnabled",
              "blurType",
              "brightnessEnabled",
              "contrastEnabled",
              "grayScaleEnabled",
              "hueRotateEnabled",
              "invertEnabled",
              "saturateEnabled",
              "sepiaEnabled",
              "brightness",
              "contrast",
              "grayscale",
              "hueRotate",
              "invert",
              "saturate",
              "sepia"
            ),
            ...z(o),
            ...H(o),
            ...Oe(o),
            ...ne(o.shadows),
          };
          return s(i, void 0);
        }
        case "BooleanShapeNode":
        case "OvalShapeNode":
        case "PathNode":
        case "PolygonShapeNode":
        case "RectangleShapeNode":
        case "StarShapeNode": {
          let i = { ...f({ ...o }, "boxShadows", "strokeEnabled"), ...Y(o.boxShadows), ...Mt(o) };
          return s(i, void 0);
        }
        default:
          return s(o, void 0);
      }
    }),
  };
}
function Kt(e) {
  return "id" in e;
}
function Ae(e, t) {
  return e.map((o, r) => (Kt(o) ? o : { ...o, id: `s-${t}-${r}` }));
}
function Ge(e, t) {
  return e ? { boxShadows: Ae(e, t) } : void 0;
}
function He(e, t) {
  return e ? { shadows: Ae(e, t) } : void 0;
}
function Xt(e, t) {
  let { boxShadows: o, ...r } = e;
  return { ...r, ...Ge(o, t) };
}
function qt(e, t) {
  let { shadows: o, ...r } = e;
  return { ...r, ...He(o, t) };
}
function jt(e, t, o) {
  switch (e.__class) {
    case "FrameNode":
    case "CodeComponentNode":
    case "BooleanShapeNode":
    case "OvalShapeNode":
    case "PathNode":
    case "PolygonShapeNode":
    case "RectangleShapeNode":
    case "StarShapeNode": {
      o(e, void 0, Xt);
      break;
    }
    case "TextNode":
    case "SVGNode": {
      o(e, void 0, qt);
      break;
    }
  }
}
function ze(e) {
  return {
    version: 71,
    root: l(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode":
        case "CodeComponentNode":
        case "BooleanShapeNode":
        case "OvalShapeNode":
        case "PathNode":
        case "PolygonShapeNode":
        case "RectangleShapeNode":
        case "StarShapeNode": {
          let i = { ...f({ ...o }, "boxShadows"), ...Ge(o.boxShadows, o.id) };
          return (i.__class === "FrameNode" && y(i, r, jt), s(i, void 0));
        }
        case "TextNode":
        case "SVGNode": {
          let i = { ...f({ ...o }, "shadows"), ...He(o.shadows, o.id) };
          return s(i, void 0);
        }
        default:
          return s(o, void 0);
      }
    }),
  };
}
function Ue(e) {
  return { version: 72, root: e.root };
}
function $e(e) {
  return { version: 73, root: e.root };
}
var Ye = Array.isArray,
  Ke = (e) =>
    typeof e == "object" && "keys" in e && typeof e.keys == "function" ? e.keys() : Object.keys(e);
function ie(e, t, o) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    let r = Ye(e),
      i = Ye(t),
      n,
      d,
      c;
    if (r && i) {
      if (((d = e.length), d !== t.length)) return !1;
      for (n = d; n-- !== 0; ) if ((!o && e[n] !== t[n]) || (o && !ie(e[n], t[n], !0))) return !1;
      return !0;
    }
    if (r !== i) return !1;
    let p = e instanceof Date,
      m = t instanceof Date;
    if (p !== m) return !1;
    if (p && m) return e.getTime() === t.getTime();
    let u = e instanceof RegExp,
      x = t instanceof RegExp;
    if (u !== x) return !1;
    if (u && x) return e.toString() === t.toString();
    if (typeof e.equals == "function" && typeof t.equals == "function") return e.equals(t);
    let N = Ke(e);
    if (((d = N.length), d !== Ke(t).length)) return !1;
    for (n = d; n-- !== 0; ) if (!Object.hasOwn(t, N[n])) return !1;
    for (n = d; n-- !== 0; )
      if (
        ((c = N[n]),
        !(c === "_owner" && e.$$typeof) && ((!o && e[c] !== t[c]) || (o && !ie(e[c], t[c], !0))))
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
function Xe(e, t, o = !0) {
  try {
    return ie(e, t, o);
  } catch (r) {
    if (Zt(r))
      return (
        console.warn("Warning: isEqual does not handle circular references.", r.name, r.message),
        !1
      );
    throw r;
  }
}
function Zt(e) {
  return e instanceof Error
    ? !!(e.message.match(/stack|recursion/i) || ("number" in e && e.number === -2146828260))
    : !1;
}
function qe(e) {
  return {
    version: 74,
    root: l(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode": {
          let i = { ...o };
          return (y(i, r, er), s(i, void 0));
        }
        case "CodeComponentNode": {
          let i = Qt(o);
          return s(i, void 0);
        }
        default:
          return s(o, void 0);
      }
    }),
  };
}
var je = "$control__";
function Qt(e) {
  if (!tr(e)) return e;
  let t = Jt(e.codeComponentProps);
  return f({ ...e, ...t }, "codeComponentProps");
}
function Jt(e) {
  let t = {};
  for (let o in e) t[`${je}${o}`] = { type: null, value: e[o] };
  return t;
}
function er(e, t, o) {
  e.__class === "CodeComponentNode" &&
    o(e, void 0, (r) => {
      let { codeComponentProps: i, _deleted: n, ...d } = r,
        c = d,
        p = n ? n.filter((x) => x !== "codeComponentProps") : [],
        m = t(e, "codeComponentProps");
      if (!i || !m) return c;
      let u = Array.from(new Set([...Object.keys(i), ...Object.keys(m)]));
      for (let x of u) {
        let N = m[x],
          h = i[x];
        Xe(N, h) || (c[`${je}${x}`] = { type: null, value: h });
      }
      return (p.length > 0 && (c._deleted = p), c);
    });
}
var or = "codeComponentProps";
function tr(e) {
  return or in e;
}
function Ze(e) {
  return {
    version: 75,
    root: l(e.root, (o) => {
      switch (o.__class) {
        case "FrameNode":
          return s(nr(o), void 0);
        default:
          return s(o, void 0);
      }
    }),
  };
}
var rr = [
  "iPad_834_1112",
  "GooglePixel_411_822",
  "GooglePixel_411_846",
  "Twitter_1024_512",
  "Twitter_1500_500",
  "Facebook_1200_630",
  "Facebook_820_312",
  "Instagram_1080_1080",
  "Instagram_1080_1920",
  "Youtube_2560_1440",
  "Youtube_1280_720",
  "LinkedIn_1584_396",
  "Dribbble_1600_1200",
];
function nr(e) {
  if (e.framePreset) {
    let t = { ...e };
    return (rr.includes(e.framePreset) ? (t.framePreset = null) : (t.isScreen = !0), t);
  } else return e;
}
function Qe(e) {
  return { version: 76, root: l(e.root, (o) => s(o, void 0)) };
}
function Je(e) {
  return { version: 77, root: l(e.root, (o) => s(o, void 0)) };
}
function eo(e) {
  return {
    version: 78,
    root: l(e.root, (o) => {
      switch (o.__class) {
        case "TextNode":
          return s(ir(o), void 0);
        default:
          return s(o, void 0);
      }
    }),
  };
}
function ir(e) {
  let t = f({ ...e }, "autoSize");
  return (
    (e.autoSize || typeof e.autoSize > "u") &&
      ((t.widthType = 2),
      (t.heightType = 2),
      typeof e.left == "number" && typeof e.right == "number" && (t.right = null),
      typeof e.top == "number" && typeof e.bottom == "number" && (t.bottom = null)),
    t
  );
}
function oo(e) {
  return {
    version: 79,
    root: l(e.root, (o) => {
      if (o.__class === "TextNode") {
        let r = ar(o);
        return s(r, void 0);
      }
      return s(o, void 0);
    }),
  };
}
function ar(e) {
  return {
    font: "Inter",
    textColor: "rgb(0, 0, 0)",
    fontSize: 16,
    letterSpacing: 0,
    textTransform: "none",
    textDecoration: "none",
    lineHeight: [1.2, "em"],
    textAlignment: "start",
    linkTextDecoration: "underline",
    ...e,
  };
}
function ro(e) {
  return {
    version: 80,
    root: l(e.root, (o) => {
      switch (o.__class) {
        case "TextNode":
          try {
            return s(Nr(o), void 0);
          } catch {
            return s(o, void 0);
          }
        case "ShapeContainerNode":
          return s(sr(o), void 0);
        default:
          return s(o, void 0);
      }
    }),
  };
}
function sr(e) {
  return { ...e, contentHash: cr(e) };
}
function dr(e) {
  return fr(e, ur);
}
function cr(e) {
  return mr(dr(e));
}
var lr = { top: !0, left: !0, centerAnchorX: !0, centerAnchorY: !0 },
  pr = {
    cache: !0,
    mutable: !0,
    update: !0,
    id: !0,
    parentid: !0,
    originalid: !0,
    locked: !0,
    name: !0,
    previewSettings: !0,
    duplicatedFrom: !0,
    contentHash: !0,
  };
function ur(e, t, o) {
  if (
    t &&
    !(o.__class === "ShapeContainerNode" && lr[e]) &&
    !pr[e] &&
    !e.startsWith("on") &&
    !e.startsWith("export")
  )
    return t;
}
function mr(e) {
  let r = e.length & 3,
    i = e.length - r,
    n = 0,
    d = 0;
  for (; d < i; ) {
    let p =
      (e.charCodeAt(d) & 255) |
      ((e.charCodeAt(++d) & 255) << 8) |
      ((e.charCodeAt(++d) & 255) << 16) |
      ((e.charCodeAt(++d) & 255) << 24);
    (++d,
      (p = ((p & 65535) * 3432918353 + ((((p >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (p = (p << 15) | (p >>> 17)),
      (p = ((p & 65535) * 461845907 + ((((p >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (n ^= p),
      (n = (n << 13) | (n >>> 19)));
    let m = ((n & 65535) * 5 + ((((n >>> 16) * 5) & 65535) << 16)) & 4294967295;
    n = (m & 65535) + 27492 + ((((m >>> 16) + 58964) & 65535) << 16);
  }
  let c = 0;
  return (
    r >= 3 && (c ^= (e.charCodeAt(d + 2) & 255) << 16),
    r >= 2 && (c ^= (e.charCodeAt(d + 1) & 255) << 8),
    r >= 1 &&
      ((c ^= e.charCodeAt(d) & 255),
      (c = ((c & 65535) * 3432918353 + ((((c >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (c = (c << 15) | (c >>> 17)),
      (c = ((c & 65535) * 461845907 + ((((c >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (n ^= c)),
    (n ^= e.length),
    (n ^= n >>> 16),
    (n = ((n & 65535) * 2246822507 + ((((n >>> 16) * 2246822507) & 65535) << 16)) & 4294967295),
    (n ^= n >>> 13),
    (n = ((n & 65535) * 3266489909 + ((((n >>> 16) * 3266489909) & 65535) << 16)) & 4294967295),
    (n ^= n >>> 16),
    n >>> 0
  );
}
function se(e, t, o) {
  if (e === void 0) return t.push("u");
  if (e === null) return t.push("n");
  let r = typeof e;
  if (r === "string") return t.push(JSON.stringify(e));
  if (r !== "object") return t.push(String(e));
  if (Array.isArray(e)) {
    for (let n = 0; n < e.length; n++) (se(e[n], t, o), t.push(","));
    return;
  }
  let i = Object.keys(e).sort();
  for (let n = 0, d = i.length; n < d; n++) {
    let c = i[n];
    if (c === void 0) continue;
    let p = e[c];
    (o && ((p = o(c, p, e)), p === void 0)) || (t.push(c), t.push(":"), se(p, t, o), t.push(","));
  }
}
function fr(e, t) {
  let o = [];
  return (se(e, o, t), o.join(""));
}
function Nr(e) {
  let t = new Set(),
    o = {},
    r = { ...e._styledText, ...e.styledText },
    i = r.blocks[0];
  if (i) {
    let n = i.data.emptyStyle ?? [];
    for (let d of n)
      for (let c of xr) {
        if (!d.startsWith(c.draftPrefix)) continue;
        let p = c.draftPrefix.length,
          m = d.slice(p),
          u = c.parseValue(m),
          x = e[c.nodeKey];
        (x !== void 0 && !c.isDefault(x)) || ((o[c.nodeKey] = u), t.add(d));
      }
  }
  return (
    (r.blocks = r.blocks.map((n) => {
      let d = n.inlineStyleRanges.filter((c) => !t.has(c.style));
      return { ...n, inlineStyleRanges: d, data: n.data };
    })),
    { ...e, ...o, styledText: r }
  );
}
var xr = [
  {
    nodeKey: "font",
    draftPrefix: "FONT:",
    parseValue: to,
    isDefault(e) {
      return e === "Inter";
    },
  },
  {
    nodeKey: "textColor",
    draftPrefix: "COLOR:",
    parseValue: to,
    isDefault(e) {
      return e === "rgb(0, 0, 0)";
    },
  },
  {
    nodeKey: "fontSize",
    draftPrefix: "SIZE:",
    parseValue(e) {
      return ae(e) ?? 0;
    },
    isDefault(e) {
      return e === 16;
    },
  },
  {
    nodeKey: "letterSpacing",
    draftPrefix: "LETTERSPACING:",
    parseValue(e) {
      return ae(e) ?? 0;
    },
    isDefault(e) {
      return e === 0;
    },
  },
  {
    nodeKey: "textTransform",
    draftPrefix: "TEXTTRANSFORM:",
    parseValue(e) {
      return ((e = e.toLowerCase()), hr(e) ? e : "none");
    },
    isDefault(e) {
      return e === "none";
    },
  },
  {
    nodeKey: "textDecoration",
    draftPrefix: "TEXTDECORATION:",
    parseValue(e) {
      return ((e = e.toLowerCase()), gr(e) ? e : "none");
    },
    isDefault(e) {
      return e === "none";
    },
  },
  {
    nodeKey: "lineHeight",
    draftPrefix: "LINEHEIGHT:",
    parseValue(e) {
      let [, t, o] = /([\d.]+)(px|em|%)?/.exec(e) ?? [],
        r = [1.2, "em"];
      if (t === void 0) return r;
      let i = ae(t),
        n = o ?? "em";
      return i !== void 0 ? [i, n] : r;
    },
    isDefault(e) {
      return e[0] === 1.2 && e[1] === "em";
    },
  },
  {
    nodeKey: "textAlignment",
    draftPrefix: "ALIGN:",
    parseValue(e) {
      return ((e = e.toLowerCase()), Tr(e) ? e : "start");
    },
    isDefault(e) {
      return e === "start";
    },
  },
];
function to(e) {
  return e;
}
function ae(e) {
  let t = parseFloat(e);
  if (Number.isFinite(t)) return t;
}
function hr(e) {
  return ["capitalize", "uppercase", "lowercase", "none"].includes(e);
}
function gr(e) {
  return ["underline", "line-through", "none"].includes(e);
}
function Tr(e) {
  return ["start", "left", "center", "right"].includes(e);
}
function no(e) {
  return {
    version: 81,
    root: l(e.root, (o) => {
      switch (o.__class) {
        case "PageNode": {
          let i = { ...f({ ...o }, "__class"), __class: "CanvasPageNode" };
          return s(i, void 0);
        }
        case "CanvasComponentNode":
          if (o.variantType === "breakpoint") {
            let i = {
              ...f({ ...o }, "__class", "variantType", "originalSymbolId", "variables"),
              __class: "WebPageNode",
            };
            return s(i, void 0);
          } else {
            let i = {
              ...f({ ...o }, "__class", "variantType", "pagePath", "webMetadata", "customHTML"),
              __class: "SmartComponentNode",
            };
            return s(i, void 0);
          }
        default:
          return s(o, void 0);
      }
    }),
  };
}
function io(e) {
  return {
    version: 82,
    root: l(e.root, (o, r) => {
      switch (o.__class) {
        case "TextNode":
          return s(f({ ...o, ...de(o) }, "clip"), void 0);
        case "FrameNode": {
          let i = f({ ...o, ...de(o) }, "clip");
          return (y(i, r, _r), s(i, void 0));
        }
        case "CodeComponentNode":
          return s(Pr(o), void 0);
        default:
          return s(o, void 0);
      }
    }),
  };
}
function ao(e) {
  return e ? "hidden" : "visible";
}
function de(e) {
  let t = {};
  return (e.overflow === void 0 && e.clip !== void 0 && (t.overflow = ao(e.clip)), t);
}
var yr = "$control__",
  Sr = "framer/Page";
function so(e, t) {
  let o = {};
  return (
    t === Sr && e.clip !== void 0 && (o[`${yr}overflow`] = { type: "string", value: ao(e.clip) }),
    f({ ...e, ...o }, "clip")
  );
}
var Pr = (e) => so(e, e.codeComponentIdentifier),
  Vr = (e) => (t) => so(t, e.codeComponentIdentifier);
function _r(e, t, o) {
  switch (e.__class) {
    case "FrameNode":
    case "TextNode":
      o(e, void 0, (r) => f({ ...r, ...de(r) }, "clip"));
      break;
    case "CodeComponentNode":
      o(e, void 0, Vr(e));
      break;
  }
}
function co(e) {
  return {
    version: 83,
    root: l(e.root, (o) => {
      switch (o.__class) {
        case "TextNode":
          return s({ ...o, overflow: o.overflow ?? "hidden" }, void 0);
        case "FrameNode":
          return s({ ...o, overflow: o.overflow ?? "hidden" }, void 0);
        default:
          return s(o, void 0);
      }
    }),
  };
}
function lo(e) {
  return { version: 84, root: e.root };
}
function po(e) {
  return {
    version: 85,
    root: l(e.root, (o) => {
      switch (o.__class) {
        case "FrameNode":
          return s(Rr(o), void 0);
        default:
          return s(o, void 0);
      }
    }),
  };
}
var vr = new Set([
  "Android_360_640",
  "MacBook_1440_900_pro",
  "MacBook_Pro_16_1536_960",
  "iMac_215_2048_1152",
]);
function Rr(e) {
  if (e.framePreset) {
    let t = { ...e };
    return (vr.has(e.framePreset) && (t.framePreset = null), t);
  } else return e;
}
function mo(e) {
  return {
    version: 86,
    root: l(e.root, (o) => {
      switch (o.__class) {
        case "FrameNode":
          return s(Cr(o), void 0);
        case "TextNode":
          return s(uo(o), void 0);
        case "CodeComponentNode":
          return s(uo(o), void 0);
        default:
          return s(o, void 0);
      }
    }),
  };
}
function uo(e) {
  return e.positionStickyEnabled ? { ...e, zIndex: e.zIndex ?? 1 } : { ...e };
}
function Cr(e) {
  return e.positionStickyEnabled || e.positionFixedEnabled
    ? { ...e, zIndex: e.zIndex ?? 1 }
    : { ...e };
}
function fo(e) {
  return {
    version: 87,
    root: l(e.root, (o) => {
      switch (o.__class) {
        case "RichTextNode":
          return s({ ...o, paragraphSpacing: 0 }, void 0);
        default:
          return s(o, void 0);
      }
    }),
  };
}
function No(e) {
  return {
    version: 88,
    root: l(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode": {
          let i = f({ ...o, ...xo(o) }, "stackEnabled", "gridEnabled", "stackGap", "gridGap");
          return (y(i, r, br), s(i, void 0));
        }
        default:
          return s(o, void 0);
      }
    }),
  };
}
function xo(e, t, o) {
  let r = o ?? e.gridEnabled,
    i = t ?? e.stackEnabled,
    n = {};
  return (
    r
      ? (e.gridEnabled && (n.layout = "grid"), e.gridGap !== void 0 && (n.gap = e.gridGap))
      : i &&
        (e.stackEnabled && (n.layout = "stack"), e.stackGap !== void 0 && (n.gap = e.stackGap)),
    n
  );
}
function br(e, t, o) {
  switch (e.__class) {
    case "FrameNode":
      o(e, void 0, (r) =>
        f(
          { ...r, ...xo(r, t(e, "stackEnabled"), t(e, "gridEnabled")) },
          "stackEnabled",
          "gridEnabled",
          "stackGap",
          "gridGap"
        )
      );
      break;
  }
}
function ho(e) {
  return {
    version: 89,
    root: l(e.root, (o, r) => {
      switch (o.__class) {
        case "ShapeContainerNode": {
          let i = f(
            { ...o },
            "onTap",
            "onTapStart",
            "onMouseDown",
            "onClick",
            "onMouseUp",
            "onMouseEnter",
            "onMouseLeave",
            "onWheel",
            "onPan",
            "onPanStart",
            "onPanEnd",
            "onAppear",
            "onKeyDown"
          );
          return (y(i, r, Er), s(i, void 0));
        }
        default:
          return s(o, void 0);
      }
    }),
  };
}
function Er(e, t, o) {
  switch (e.__class) {
    case "ShapeContainerNode":
      o(e, void 0, (r) =>
        f(
          r,
          "onTap",
          "onTapStart",
          "onMouseDown",
          "onClick",
          "onMouseUp",
          "onMouseEnter",
          "onMouseLeave",
          "onWheel",
          "onPan",
          "onPanStart",
          "onPanEnd",
          "onAppear",
          "onKeyDown"
        )
      );
      break;
  }
}
function go(e) {
  return { version: 90, root: l(e.root, (o) => s(o, void 0)) };
}
function To(e) {
  return { version: 91, root: l(e.root, (o) => s(o, void 0)) };
}
function yo(e) {
  return {
    version: 92,
    root: l(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode": {
          let i = f({ ...o, ...X(o) }, "positionFixedEnabled", "positionStickyEnabled");
          return (y(i, r, kr), s(i, void 0));
        }
        case "TextNode":
          return s(f({ ...o, ...X(o) }, "positionFixedEnabled", "positionStickyEnabled"), void 0);
        case "RichTextNode":
          return s(f({ ...o, ...X(o) }, "positionFixedEnabled", "positionStickyEnabled"), void 0);
        case "CodeComponentNode":
          return s(f({ ...o, ...X(o) }, "positionFixedEnabled", "positionStickyEnabled"), void 0);
        default:
          return s(o, void 0);
      }
    }),
  };
}
function X(e) {
  if (e.position !== void 0) return {};
  let t = {};
  return (
    e.positionFixedEnabled
      ? (t.position = "fixed")
      : e.positionStickyEnabled && (t.position = "sticky"),
    t
  );
}
function q(e) {
  let t = {};
  if (e.position !== void 0) return {};
  if (e.positionFixedEnabled) t.position = "fixed";
  else if (e.positionStickyEnabled) t.position = "sticky";
  else if (e.positionFixedEnabled === !1 || e.positionStickyEnabled === !1) {
    let o = e._deleted ?? [];
    t._deleted = [...o, "position"];
  }
  return t;
}
function kr(e, t, o) {
  switch (e.__class) {
    case "FrameNode":
      o(e, void 0, (r) => f({ ...r, ...q(r) }, "positionFixedEnabled", "positionStickyEnabled"));
      break;
    case "TextNode":
      o(e, void 0, (r) => f({ ...r, ...q(r) }, "positionFixedEnabled", "positionStickyEnabled"));
      break;
    case "RichTextNode":
      o(e, void 0, (r) => f({ ...r, ...q(r) }, "positionFixedEnabled", "positionStickyEnabled"));
      break;
    case "CodeComponentNode":
      o(e, void 0, (r) => f({ ...r, ...q(r) }, "positionFixedEnabled", "positionStickyEnabled"));
      break;
  }
}
function So(e) {
  return { version: 93, root: l(e.root, (o) => s(o, void 0)) };
}
var Po = "colorStyles";
function Vo(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 94, root: s(t, void 0) };
  let o = [];
  t.tokensIndex?.forEach((i) => {
    let n = t.tokens?.[i];
    if (!n) return;
    let d = {
      __class: "ColorStyleTokenNode",
      light: n.value,
      id: n.id,
      name: n.name,
      parentid: Po,
    };
    (n.valueDark && (d.dark = n.valueDark), o.push(d));
  });
  let r = { __class: "ColorStyleTokenListNode", id: Po, children: o, parentid: t.id };
  return {
    version: 94,
    root: s(f({ ...t, children: [...(t.children ?? []), r] }, "tokens", "tokensIndex"), void 0),
  };
}
function _o(e) {
  return {
    version: 95,
    root: l(e.root, (o) => {
      switch (o.__class) {
        case "FrameNode": {
          let r = { ...o, ...Fr(o) };
          return s(r, void 0);
        }
        default:
          return s(o, void 0);
      }
    }),
  };
}
function Fr(e) {
  if (!e.isBreakpoint) return {};
  let t = {};
  return (e.radius === 0 && (t.radius = void 0), t);
}
function vo(e) {
  return { version: 96, root: l(e.root, (o) => s(o, void 0)) };
}
function Ro(e) {
  let t = [];
  Eo(t, e.root);
  let o = l(e.root, (r, i) => {
    switch (r.__class) {
      case "FrameNode": {
        let n = { ...r };
        return (y(n, i, Ir), s(n, void 0));
      }
      case "RichTextNode": {
        let n = wr(r);
        return s(n, void 0);
      }
      case "TextStylesPresetNode": {
        let n = Co(r);
        return s(n, void 0);
      }
      case "TextLinkStylesPresetNode": {
        let n = bo(r);
        return s(n, void 0);
      }
      case "TextStylesPresetsListNode":
      case "TextLinkStylesPresetsListNode":
        return null;
    }
    return s(r, void 0);
  });
  if (!o) throw new Error("Invalid root node");
  return { version: 97, root: Wr(t, o) };
}
function wr(e) {
  return f(
    {
      ...e,
      stylePresetHeading1: e.stylesPresetHeading1 ?? "stylesPresetHeading1",
      stylePresetHeading2: e.stylesPresetHeading2 ?? "stylesPresetHeading2",
      stylePresetHeading3: e.stylesPresetHeading3 ?? "stylesPresetHeading3",
      stylePresetParagraph: e.stylesPresetParagraph ?? "stylesPresetParagraph",
      stylePresetLink: e.stylesPresetLink ?? "stylesPresetLink",
    },
    "stylesPresetHeading1",
    "stylesPresetHeading2",
    "stylesPresetHeading3",
    "stylesPresetParagraph",
    "stylesPresetLink"
  );
}
function Ir(e, t, o) {
  e.__class === "RichTextNode" &&
    o(e, void 0, (r) => {
      let {
          stylesPresetHeading1: i,
          stylesPresetHeading2: n,
          stylesPresetHeading3: d,
          stylesPresetParagraph: c,
          stylesPresetLink: p,
          ...m
        } = r,
        u = { ...m };
      return (
        i && (u.stylePresetHeading1 = i),
        n && (u.stylePresetHeading2 = n),
        d && (u.stylePresetHeading3 = d),
        c && (u.stylePresetParagraph = c),
        p && (u.stylePresetLink = p),
        u
      );
    });
}
function Or(e) {
  return Array.isArray(e.children) && e.children.length > 0;
}
function Co(e) {
  return { ...e, __class: "TextStylePresetNode", parentid: "stylePresets" };
}
function bo(e) {
  return { ...e, __class: "LinkStylePresetNode", parentid: "stylePresets" };
}
function Eo(e, t) {
  switch (t.__class) {
    case "TextStylesPresetNode": {
      let o = Co(t);
      e.push(o);
      break;
    }
    case "TextLinkStylesPresetNode": {
      let o = bo(t);
      e.push(o);
      break;
    }
  }
  if (Or(t)) for (let o of t.children) Eo(e, o);
}
function Wr(e, t) {
  if (t.__class !== "RootNode" || !t.children || e.length === 0) return t;
  let o = {
    __class: "StylePresetsListNode",
    id: "stylePresets",
    children: e,
    parentid: t.id,
    name: null,
  };
  return { ...t, children: [...t.children, o] };
}
function ko(e) {
  return { version: 98, root: l(e.root, (o) => s(o, void 0)) };
}
function Br(e) {
  return "id" in e;
}
function Mr(e, t) {
  return e.map((o, r) => (Br(o) ? o : { ...o, id: `gradient-stop-${t}-${r}` }));
}
function Fo(e, t) {
  return Mr(e, t);
}
function wo(e, t) {
  return e ? { ...e, stops: Fo(e.stops, t) } : void 0;
}
function Io(e, t) {
  return e ? { ...e, stops: Fo(e.stops, t) } : void 0;
}
function Oo(e) {
  return {
    version: 99,
    root: l(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode":
        case "CodeComponentNode":
        case "ShapeContainerNode":
        case "SVGNode":
        case "BooleanShapeNode":
        case "OvalShapeNode":
        case "PathNode":
        case "PolygonShapeNode":
        case "RectangleShapeNode":
        case "StarShapeNode": {
          let i = {
            ...f({ ...o }, "fillLinearGradient", "fillRadialGradient"),
            fillLinearGradient: wo(o.fillLinearGradient, o.id),
            fillRadialGradient: Io(o.fillRadialGradient, o.id),
          };
          return (i.__class === "FrameNode" && y(i, r, Dr), s(i, void 0));
        }
        default:
          return s(o, void 0);
      }
    }),
  };
}
function Dr(e, t, o) {
  switch (e.__class) {
    case "FrameNode":
    case "CodeComponentNode":
    case "ShapeContainerNode":
    case "SVGNode":
    case "BooleanShapeNode":
    case "OvalShapeNode":
    case "PathNode":
    case "PolygonShapeNode":
    case "RectangleShapeNode":
    case "StarShapeNode": {
      o(e, void 0, Lr);
      break;
    }
  }
}
function Lr(e, t) {
  let { fillLinearGradient: o, fillRadialGradient: r, ...i } = e,
    n = i,
    d = o ? { fillLinearGradient: wo(o, t) } : void 0,
    c = r ? { fillRadialGradient: Io(r, t) } : void 0;
  return { ...n, ...d, ...c };
}
var Ar = "routeSegmentRoot";
function Wo(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 100, root: s(t, void 0) };
  if (t.children?.find((n) => n.__class === "RouteSegmentRootNode"))
    return { version: 100, root: s(t, void 0) };
  let r = t.homePageNodeId,
    i = { __class: "RouteSegmentRootNode", id: Ar, children: [], parentid: t.id };
  for (let n of t.children ?? []) {
    if (n.__class !== "WebPageNode") continue;
    let d = n;
    if (d.dataIdentifier || d.id === r) continue;
    let c = d.pagePath?.trim(),
      p = c?.split("/").filter(Boolean) ?? [];
    if ((c?.endsWith("/") && p.push(""), !p || p.length === 0)) continue;
    let m = i;
    p.forEach((u, x) => {
      let N = x === p.length - 1,
        h = m.children.find((T) => T.segment === u),
        g = h && N;
      if (!h || (g && h.webPageId)) {
        let T = {
          __class: "RouteSegmentNode",
          id: `${d.id}${x}`,
          children: [],
          parentid: m.id,
          segment: u,
          webPageId: N ? d.id : void 0,
        };
        (m.children.push(T), (m = T));
      } else (g && (h.webPageId = d.id), (m = h));
    });
  }
  return { version: 100, root: s(f({ ...t, children: [...(t.children ?? []), i] }), void 0) };
}
var ce = "routeSegmentRoot";
function Bo(e) {
  let t = e.root;
  if (t.__class !== "RootNode" || !j(t)) return { version: 101, root: s(t, void 0) };
  let o = Gr(t);
  if (Hr(o, t.id)) return { version: 101, root: s(t, void 0) };
  let { routeSegmentRootUnderTreeRoot: r, webPagesSupportsRouteSegmentIdToPath: i } = o,
    n = Xr(r, i, t),
    d = l(e.root, (c) => (c.__class === "RouteSegmentRootNode" ? null : s(c, void 0)));
  if (!d) throw new Error("Invalid root node");
  return { version: 101, root: Zr(n, d) };
}
function Gr(e) {
  let t = e.children?.find((d) => d.__class === "RouteSegmentRootNode" && d.id === ce),
    o = e.homePageNodeId,
    r = {},
    i = [];
  function n(d) {
    let c = qr(d),
      p = d.id === o;
    return (
      d.__class === "WebPageNode" && !c && !p && (r[d.id] = d.pagePath),
      jr(d) ? !0 : d.__class === "RouteSegmentRootNode" ? (i.push(d), !0) : !1
    );
  }
  return (
    Z(e, n),
    {
      routeSegmentRootUnderTreeRoot: t,
      routeSegmentRootNodes: i,
      webPagesSupportsRouteSegmentIdToPath: r,
    }
  );
}
function Hr(e, t) {
  let { routeSegmentRootNodes: o, webPagesSupportsRouteSegmentIdToPath: r } = e;
  if (o.length !== 1) return !1;
  let i = o[0];
  if (!i || i.id !== ce || i.parentid !== t) return !1;
  let n = zr(i),
    d = Object.keys(r);
  return n.length !== d.length ? !1 : JSON.stringify(n.sort()) === JSON.stringify(d.sort());
}
function zr(e) {
  let t = [];
  return (
    Z(e, (o) => (o.__class !== "RouteSegmentNode" ? !0 : (o.webPageId && t.push(o.webPageId), !1))),
    t
  );
}
function Ur(e) {
  if (!e) return;
  let t = {};
  return (Z(e, (o) => (o.__class !== "RouteSegmentNode" ? !0 : (Mo(t, o, ""), !1))), t);
}
function $r(e) {
  return /^\d+$/.test(e);
}
function Yr(e, t) {
  let o = e.split(t),
    r = o.length;
  if (r === 1) return null;
  let i = o[r - 1];
  if (typeof i != "string" || i.length === 0 || !$r(i)) return null;
  let n = Number(i);
  return typeof n != "number" ? null : (o.pop(), { value: o.join(t), suffixCount: n });
}
function Kr(e, t) {
  let o = 1,
    r = !0,
    i = "-",
    n = Yr(e, i);
  n && ((e = n.value), (o = n.suffixCount), (r = !1));
  let d = o === 1 && r ? e : `${e}${i}${o}`;
  for (; t.has(d); ) (o++, (d = `${e}${i}${o}`));
  return d;
}
function Xr(e, t, o) {
  let r = { __class: "RouteSegmentRootNode", id: ce, children: [], parentid: o.id },
    i = Ur(e),
    n = new Set(
      [...Object.values(i ?? {}), ...Object.values(t)].filter((d) => typeof d == "string")
    );
  for (let [d, c] of Object.entries(t)) {
    let p = i?.[d] ?? c ?? Kr("/page", n);
    n.add(p);
    let m = p?.trim(),
      u = m?.split("/").filter(Boolean) ?? [];
    if ((m?.endsWith("/") && u.push(""), !u || u.length === 0)) continue;
    let x = r;
    u.forEach((N, h) => {
      let g = h === u.length - 1,
        T = x.children?.find((V) => V.segment === N),
        v = T && g;
      if (!T || (v && T.webPageId)) {
        let V = {
          __class: "RouteSegmentNode",
          id: `${d}${h}`,
          children: [],
          parentid: x.id,
          segment: N,
          webPageId: g ? d : void 0,
        };
        (x.children.push(V), (x = V));
      } else (v && (T.webPageId = d), (x = T));
    });
  }
  return r;
}
function Mo(e, t, o) {
  if ((t.webPageId && !(t.webPageId in e) && (e[t.webPageId] = `${o}/${t.segment}`), !!j(t)))
    for (let r of t.children) Mo(e, r, `${o}/${t.segment}`);
}
function qr(e) {
  return "dataIdentifier" in e && !!e.dataIdentifier;
}
function jr(e) {
  return "originalid" in e && !!e.originalid;
}
function j(e) {
  return "children" in e && Array.isArray(e.children) && e.children.length > 0;
}
function Z(e, t) {
  if (j(e))
    for (let o of e.children) {
      let r = t(o);
      !j(o) || r || Z(o, t);
    }
}
function Zr(e, t) {
  return t.__class !== "RootNode" || !t.children ? t : { ...t, children: [...t.children, e] };
}
function Do(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 102, root: s(t, void 0) };
  let o = t.children?.find((r) => r.__class === "RouteSegmentRootNode");
  if (!o || !Qr(o)) throw new Error("RouteSegmentRootNode not found");
  for (let r of t.children ?? []) {
    if (r.__class !== "WebPageNode") continue;
    let i = r;
    i.dataIdentifier && i.id !== t.homePageNodeId && on(o, i);
  }
  return { version: 102, root: s(t, void 0) };
}
function Qr(e) {
  return e.__class === "RouteSegmentRootNode";
}
function Jr(e) {
  let t = e?.trim(),
    o = t?.split("/").filter(Boolean) ?? [];
  return (t?.endsWith("/") && o.push(""), o);
}
function en(e, t, o) {
  if ((t.children || (t.children = []), o)) {
    let r = an(t.children, (i) => i.dataIdentifier !== void 0);
    r > -1 ? t.children.splice(r + 1, 0, e) : t.children?.unshift(e);
  } else t.children?.push(e);
}
function on(e, t) {
  let o = Jr(t.pagePath);
  if (!o || o.length === 0) return;
  let r = e;
  o.forEach((i, n) => {
    let d = n === o.length - 1,
      c = r.children?.find((u) => u.segment === i),
      p = nn(i) ? t.dataIdentifier : void 0,
      m = c && d;
    if (!c || (m && c.webPageId)) {
      let u = {
        __class: "RouteSegmentNode",
        id: `${t.id}${n}`,
        children: [],
        parentid: r.id,
        segment: i,
        webPageId: d ? t.id : void 0,
        dataIdentifier: p,
      };
      (r.children || (r.children = []), en(u, r, !!p), (r = u));
    } else
      m
        ? ((c.webPageId = t.id), (c.dataIdentifier = p), (r = c))
        : ((c.dataIdentifier = p), (r = c));
  });
}
var tn = ":([a-z]\\w*)",
  rn = new RegExp(tn, "gi");
function nn(e) {
  return e.match(rn) !== null;
}
function an(e, t) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r !== void 0 && t(r)) return o;
  }
  return -1;
}
function Lo(e) {
  return { version: 103, root: l(e.root, (o) => s(o, void 0)) };
}
function G(e) {
  return Number.isFinite(e);
}
function Q(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Ao(e) {
  return (
    e.styleAppearEffectEnabled && e.styleAppearEffectTrigger === "onMount" && e.enterEffectEnabled
  );
}
function Go(e) {
  return (
    e.styleAppearEffectEnabled &&
    e.styleAppearEffectTrigger === "onMount" &&
    e.styleAppearEffectLocked === !1 &&
    e.exitEffectEnabled
  );
}
function Ho(e) {
  return e.whileTapEnabled;
}
function zo(e) {
  return e.whileHoverEnabled;
}
function J(e) {
  return G(e) ? e : 0;
}
function dn(e) {
  return G(e.rotation) && Go(e) ? J(e.exitEffectRotate) + e.rotation : e.exitEffectRotate;
}
function cn(e) {
  return G(e.rotation) && Ao(e) ? J(e.enterEffectRotate) + e.rotation : e.enterEffectRotate;
}
function ln(e) {
  return G(e.rotation) && Ho(e) ? J(e.whileTapRotate) + e.rotation : e.whileTapRotate;
}
function pn(e) {
  return G(e.rotation) && zo(e) ? J(e.whileHoverRotate) + e.rotation : e.whileHoverRotate;
}
function un(e) {
  if (Q(e.rotation) && zo(e)) return !0;
}
function mn(e) {
  if (Q(e.rotation) && Ho(e)) return !0;
}
function fn(e) {
  if (Q(e.rotation) && Go(e)) return !0;
}
function Nn(e) {
  if (Q(e.rotation) && Ao(e)) return !0;
}
function Uo(e) {
  return {
    version: 104,
    root: l(e.root, (o) => {
      switch (o.__class) {
        case "FrameNode":
        case "RichTextNode":
        case "CodeComponentNode": {
          let r = {
            ...f(
              { ...o },
              "enterEffectRotate",
              "exitEffectRotate",
              "whileTapRotate",
              "whileHoverRotate"
            ),
            exitEffectRotate: dn(o),
            enterEffectRotate: cn(o),
            whileTapRotate: ln(o),
            whileHoverRotate: pn(o),
            whileHoverRotateAdditiveDynamicValue: un(o),
            whileTapRotateAdditiveDynamicValue: mn(o),
            exitEffectRotateAdditiveDynamicValue: fn(o),
            enterEffectRotateAdditiveDynamicValue: Nn(o),
          };
          return s(r, void 0);
        }
        case "SmartComponentNode":
        case "CanvasPageNode":
          return oe;
        case "WebPageNode":
        default:
          return s(o, void 0);
      }
    }),
  };
}
function $o(e) {
  let t = [],
    o = l(e.root, (r) => {
      switch (r.__class) {
        case "StylePresetsListNode":
        case "ComponentPresetsListNode":
          return (t.push(...r.children), null);
      }
      return s(r, void 0);
    });
  if (!o) throw new Error("Invalid root node");
  return { version: 105, root: xn(o, t) };
}
function xn(e, t) {
  if (e.__class !== "RootNode" || !e.children || t.length === 0) return e;
  let o = {
    __class: "PresetsListNode",
    id: "presets",
    parentid: e.id,
    name: null,
    duplicatedFrom: null,
    visible: !1,
    originalid: null,
    children: t.map(hn),
  };
  return { ...e, children: [...e.children, o] };
}
function hn(e) {
  return { ...e, parentid: "presets" };
}
function Yo(e) {
  return { version: 106, root: l(e.root, (o) => s(o, void 0)) };
}
function Ko(e) {
  return {
    version: 107,
    root: l(e.root, (o) =>
      o.__class === "TextStylePresetNode"
        ? s({ ...o, textStrokeWidth: "initial", textStrokeColor: "initial" }, void 0)
        : s(o, void 0)
    ),
  };
}
function Xo(e) {
  let t = l(e.root, (o) =>
    o.__class === "FormButtonNode" || o.__class === "FormContainerNode" ? null : s(o, void 0)
  );
  if (!t) throw new Error("Invalid root node");
  return { version: 108, root: t };
}
function qo(e) {
  return { version: 109, root: l(e.root, (o) => s(o, void 0)) };
}
function jo(e) {
  return { version: 110, root: l(e.root, (o) => s(o, void 0)) };
}
var F = "entityRoot",
  gn = "blockquoteStyleEntityRoot",
  Tn = "cmsStyleEntityRoot",
  yn = "codeFileEntityRoot",
  Sn = "codeStyleEntityRoot",
  Pn = "colorStyleTokenEntityRoot",
  Vn = "componentInstanceEntityRoot",
  _n = "linkStyleEntityRoot",
  vn = "textStyleEntityRoot";
function Zo(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 111, root: s(t, void 0) };
  if (t.children?.find((N) => N.__class === "EntityRootNode"))
    return { version: 111, root: s(t, void 0) };
  let r = { __class: "BlockquoteEntityTypeRootNode", id: gn, children: [], parentid: F },
    i = { __class: "CMSEntityTypeRootNode", id: Tn, children: [], parentid: F },
    n = { __class: "CodeFileEntityTypeRootNode", id: yn, children: [], parentid: F },
    d = { __class: "ColorEntityTypeRootNode", id: Pn, children: [], parentid: F },
    c = { __class: "ComponentEntityTypeRootNode", id: Vn, children: [], parentid: F },
    x = {
      __class: "EntityRootNode",
      id: F,
      children: [
        r,
        i,
        n,
        d,
        c,
        { __class: "InlineCodeEntityTypeRootNode", id: Sn, children: [], parentid: F },
        { __class: "LinkEntityTypeRootNode", id: _n, children: [], parentid: F },
        { __class: "TextEntityTypeRootNode", id: vn, children: [], parentid: F },
      ],
      parentid: t.id,
    };
  for (let N of t.children ?? [])
    if (N.__class === "SmartComponentNode") le(c, N);
    else if (N.__class === "LocalModulesListNode")
      for (let h of N.children ?? []) {
        if (h.__class !== "LocalModuleNode") continue;
        let g = h;
        g.save.type === "codeFile" && (le(c, g), le(n, g, !0));
      }
  return { version: 111, root: s({ ...t, children: [...(t.children ?? []), x] }, void 0) };
}
function le(e, t, o = !1, r = "") {
  let i = t.name;
  t.__class === "LocalModuleNode" && (i = t.save.name);
  let n = i?.trim().split("/").filter(Boolean) ?? [];
  if (n.length < 2) return;
  let d = e;
  n.forEach((c, p) => {
    if (p === n.length - 1) {
      let u = {
        __class: "EntityReferenceNode",
        id: o ? `entity-ref-code-file-${t.id}` : `entity-ref-${t.id}`,
        parentid: d.id,
      };
      d.children.push(u);
    } else {
      let u = Rn(d, c);
      if (u) d = u;
      else {
        let x = {
          __class: "EntityFolderNode",
          id: `entity-folder-${r}${c}`,
          name: c,
          parentid: d.id,
          children: [],
        };
        (d.children.push(x), (d = x));
      }
      r += c + "-";
    }
  });
}
function Rn(e, t) {
  for (let o of e.children) if (o.__class === "EntityFolderNode" && o.name === t) return o;
}
var w = "entityRoot",
  Cn = "blockquoteStyleEntityRoot",
  bn = "cmsStyleEntityRoot",
  En = "codeFileEntityRoot",
  kn = "codeStyleEntityRoot",
  Fn = "colorStyleTokenEntityRoot",
  wn = "componentInstanceEntityRoot",
  In = "linkStyleEntityRoot",
  On = "textStyleEntityRoot";
function Jo(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 112, root: s(t, void 0) };
  let o = { __class: "BlockquoteEntityTypeRootNode", id: Cn, children: [], parentid: w },
    r = { __class: "CMSEntityTypeRootNode", id: bn, children: [], parentid: w },
    i = { __class: "CodeFileEntityTypeRootNode", id: En, children: [], parentid: w },
    n = { __class: "ColorEntityTypeRootNode", id: Fn, children: [], parentid: w },
    d = { __class: "ComponentEntityTypeRootNode", id: wn, children: [], parentid: w },
    u = {
      __class: "EntityRootNode",
      id: w,
      children: [
        o,
        r,
        i,
        n,
        d,
        { __class: "InlineCodeEntityTypeRootNode", id: kn, children: [], parentid: w },
        { __class: "LinkEntityTypeRootNode", id: In, children: [], parentid: w },
        { __class: "TextEntityTypeRootNode", id: On, children: [], parentid: w },
      ],
      parentid: t.id,
    };
  for (let N of t.children ?? [])
    if (N.__class === "SmartComponentNode") Qo(d, N);
    else if (N.__class === "LocalModulesListNode")
      for (let h of N.children ?? []) {
        if (h.__class !== "LocalModuleNode") continue;
        let g = h;
        g.save.type === "codeFile" && Qo(i, g, !0);
      }
  let x = t.children?.filter((N) => N.__class !== "EntityRootNode") ?? [];
  return { version: 112, root: s({ ...t, children: [...x, u] }, void 0) };
}
function Qo(e, t, o = !1) {
  let r = t.name;
  t.__class === "LocalModuleNode" && (r = t.save.name);
  let i = r?.trim().split("/").filter(Boolean) ?? [];
  if (i.length < 2) return;
  let n = "",
    d = e;
  i.forEach((c, p) => {
    if (p === i.length - 1) {
      let u = {
        __class: "EntityReferenceNode",
        id: o ? `entity-ref-code-file-${t.id}` : `entity-ref-${t.id}`,
        parentid: d.id,
      };
      d.children.push(u);
    } else {
      let u = d.children.find((x) => x.__class === "EntityFolderNode" && x.name === c);
      if (u) d = u;
      else {
        let x = {
          __class: "EntityFolderNode",
          id: `entity-folder-${n}${c}`,
          name: c,
          parentid: d.id,
          children: [],
        };
        (d.children.push(x), (d = x));
      }
      n += c + "-";
    }
  });
}
function et(e) {
  let r = e.length & 3,
    i = e.length - r,
    n = 0,
    d = 0;
  for (; d < i; ) {
    let p =
      (e.charCodeAt(d) & 255) |
      ((e.charCodeAt(++d) & 255) << 8) |
      ((e.charCodeAt(++d) & 255) << 16) |
      ((e.charCodeAt(++d) & 255) << 24);
    (++d,
      (p = ((p & 65535) * 3432918353 + ((((p >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (p = (p << 15) | (p >>> 17)),
      (p = ((p & 65535) * 461845907 + ((((p >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (n ^= p),
      (n = (n << 13) | (n >>> 19)));
    let m = ((n & 65535) * 5 + ((((n >>> 16) * 5) & 65535) << 16)) & 4294967295;
    n = (m & 65535) + 27492 + ((((m >>> 16) + 58964) & 65535) << 16);
  }
  let c = 0;
  return (
    r >= 3 && (c ^= (e.charCodeAt(d + 2) & 255) << 16),
    r >= 2 && (c ^= (e.charCodeAt(d + 1) & 255) << 8),
    r >= 1 &&
      ((c ^= e.charCodeAt(d) & 255),
      (c = ((c & 65535) * 3432918353 + ((((c >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (c = (c << 15) | (c >>> 17)),
      (c = ((c & 65535) * 461845907 + ((((c >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (n ^= c)),
    (n ^= e.length),
    (n ^= n >>> 16),
    (n = ((n & 65535) * 2246822507 + ((((n >>> 16) * 2246822507) & 65535) << 16)) & 4294967295),
    (n ^= n >>> 13),
    (n = ((n & 65535) * 3266489909 + ((((n >>> 16) * 3266489909) & 65535) << 16)) & 4294967295),
    (n ^= n >>> 16),
    n >>> 0
  );
}
var I = "entityRoot",
  Wn = "blockquoteStyleEntityRoot",
  Bn = "cmsStyleEntityRoot",
  Mn = "codeFileEntityRoot",
  Dn = "codeStyleEntityRoot",
  Ln = "colorStyleTokenEntityRoot",
  An = "componentInstanceEntityRoot",
  Gn = "linkStyleEntityRoot",
  Hn = "textStyleEntityRoot";
function tt(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 113, root: s(t, void 0) };
  let o = { __class: "BlockquoteEntityTypeRootNode", id: Wn, children: [], parentid: I },
    r = { __class: "CMSEntityTypeRootNode", id: Bn, children: [], parentid: I },
    i = { __class: "CodeFileEntityTypeRootNode", id: Mn, children: [], parentid: I },
    n = { __class: "ColorEntityTypeRootNode", id: Ln, children: [], parentid: I },
    d = { __class: "ComponentEntityTypeRootNode", id: An, children: [], parentid: I },
    u = {
      __class: "EntityRootNode",
      id: I,
      children: [
        o,
        r,
        i,
        n,
        d,
        { __class: "InlineCodeEntityTypeRootNode", id: Dn, children: [], parentid: I },
        { __class: "LinkEntityTypeRootNode", id: Gn, children: [], parentid: I },
        { __class: "TextEntityTypeRootNode", id: Hn, children: [], parentid: I },
      ],
      parentid: t.id,
    };
  for (let N of t.children ?? [])
    if (N.__class === "SmartComponentNode") ot(d, N);
    else if (N.__class === "LocalModulesListNode")
      for (let h of N.children ?? []) {
        if (h.__class !== "LocalModuleNode") continue;
        let g = h;
        g.save.type === "codeFile" && ot(i, g, !0);
      }
  let x = t.children?.filter((N) => N.__class !== "EntityRootNode") ?? [];
  return { version: 113, root: s({ ...t, children: [...x, u] }, void 0) };
}
function ot(e, t, o = !1) {
  let r = t.name;
  t.__class === "LocalModuleNode" && (r = t.save.name);
  let i = r?.trim().split("/").filter(Boolean) ?? [];
  if (i.length < 2) return;
  let n = e.id,
    d = e;
  i.forEach((c, p) => {
    if (p === i.length - 1) {
      let u = {
        __class: "EntityReferenceNode",
        id: o ? `entity-ref-code-file-${t.id}` : `entity-ref-${t.id}`,
        parentid: d.id,
      };
      d.children.push(u);
    } else {
      let u = d.children.find((N) => N.__class === "EntityFolderNode" && N.name === c),
        x = et(c);
      if (u) d = u;
      else {
        let N = {
          __class: "EntityFolderNode",
          id: `entity-folder-${n}-${x}`,
          name: c,
          parentid: d.id,
          children: [],
        };
        (d.children.push(N), (d = N));
      }
      n += "-" + x;
    }
  });
}
function rt(e) {
  return { version: 114, root: l(e.root, (o) => s(o, void 0)) };
}
function nt(e) {
  return { version: 115, root: l(e.root, (o) => s(o, void 0)) };
}
var st = "customCodeScope";
function dt(e) {
  let t = [],
    o = l(e.root, (i) => {
      switch (i.__class) {
        case "CustomCodeScopeNode":
          return null;
        case "RootNode": {
          t.push(...it(i));
          let n = f({ ...i }, "customHTML", "pluginCustomHTML");
          return s(n, void 0);
        }
        case "WebPageNode": {
          t.push(...it(i));
          let n = f({ ...i }, "customHTML");
          return s(n, void 0);
        }
        default:
          return s(i, void 0);
      }
    });
  if (!o) throw new Error("Invalid root node");
  let r = { __class: "CustomCodeScopeNode", id: st, children: t, parentid: o.id };
  return { version: 116, root: zn(r, o) };
}
function zn(e, t) {
  return t.__class !== "RootNode" || !t.children ? t : { ...t, children: [...t.children, e] };
}
function it(e) {
  let t = e.__class === "WebPageNode" ? e.id : void 0,
    o = typeof e.customHTML == "object" ? e.customHTML : null,
    r =
      e.__class === "RootNode" && typeof e.pluginCustomHTML == "object" ? e.pluginCustomHTML : null,
    i = [];
  for (let n in o) {
    let d = n,
      c = o[d];
    c && i.push(at({ code: c, placement: d, disabled: !1, managedByPlugin: void 0, pageId: t }));
  }
  for (let n in r) {
    let d = n,
      c = r[d];
    for (let p in c) {
      let m = p,
        u = c[m];
      u?.html &&
        i.push(
          at({ code: u.html, placement: m, disabled: u.disabled, managedByPlugin: d, pageId: t })
        );
    }
  }
  return i;
}
function at({ code: e, placement: t, disabled: o, managedByPlugin: r, pageId: i }) {
  let n = `legacy-${t}`;
  return (
    i && (n += `-${i}`),
    r && (n += `-plugin-${r}`),
    {
      __class: "CustomCodeNode",
      id: n,
      name: "Custom Code (Legacy)",
      parentid: st,
      managedByPlugin: r,
      placement: t,
      disabled: o,
      code: e,
      pageIds: i ? [i] : void 0,
      loadMode: "once",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  );
}
function pt(e) {
  return (
    $n(),
    {
      version: 117,
      root: l(e.root, (o) => {
        switch (o.__class) {
          case "PathNode": {
            let r = o,
              i = {
                ...r,
                pathSegments: r.pathSegments?.map((n) => ee(n)) ?? [],
                customizations: r.customizations?.map((n) => ee(n)),
              };
            return s(i, void 0);
          }
          case "FrameNode":
          case "CodeComponentNode":
          case "SmartComponentNode":
          case "SVGNode":
          case "RichTextNode":
          case "ShapeContainerNode":
          case "BooleanShapeNode":
          case "OvalShapeNode":
          case "PolygonShapeNode":
          case "RectangleShapeNode":
          case "StarShapeNode": {
            let r = { ...o, customizations: o.customizations?.map((i) => ee(i)) };
            return s(r, void 0);
          }
          case "FunnelStepActionNode": {
            let r = o,
              i = { ...r, trackingIdNodesSnapshot: r.trackingIdNodesSnapshot?.map((n) => ee(n)) };
            return s(i, void 0);
          }
          default:
            return s(o, void 0);
        }
      }),
    }
  );
}
var ct = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  lt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_",
  Un = 116117;
function $n() {
  Un = 116117;
}
function ut() {
  return Math.random();
}
function Yn() {
  return ct[Math.floor(ut() * ct.length)];
}
function O() {
  return lt[Math.floor(ut() * lt.length)];
}
function Kn() {
  return Yn() + O() + O() + O() + O() + O() + O() + O() + O();
}
function ee(e) {
  return { ...e, id: Kn() };
}
function mt(e) {
  return {
    version: 118,
    root: l(e.root, (o) => {
      if (o.__class !== "LocalModuleNode") return o;
      let r = o,
        i = r.save?.annotations?.default?.framerTrackingIds;
      if (!i?.length) return o;
      let n = i.map((d) => ({
        id: Xn(d.id, d.type, d.nodeId),
        trackingId: d.id,
        type: d.type,
        nodeId: d.nodeId,
      }));
      return {
        ...r,
        save: {
          ...r.save,
          annotations: {
            ...r.save.annotations,
            default: { ...r.save.annotations?.default, framerTrackingIds: n },
          },
        },
      };
    }),
  };
}
function Xn(e, t, o) {
  return "_" + qn(JSON.stringify({ trackingId: e, type: t, nodeId: o })).toString(36);
}
function qn(e) {
  let r = e.length & 3,
    i = e.length - r,
    n = 0,
    d = 0;
  for (; d < i; ) {
    let p =
      (e.charCodeAt(d) & 255) |
      ((e.charCodeAt(++d) & 255) << 8) |
      ((e.charCodeAt(++d) & 255) << 16) |
      ((e.charCodeAt(++d) & 255) << 24);
    (++d,
      (p = ((p & 65535) * 3432918353 + ((((p >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (p = (p << 15) | (p >>> 17)),
      (p = ((p & 65535) * 461845907 + ((((p >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (n ^= p),
      (n = (n << 13) | (n >>> 19)));
    let m = ((n & 65535) * 5 + ((((n >>> 16) * 5) & 65535) << 16)) & 4294967295;
    n = (m & 65535) + 27492 + ((((m >>> 16) + 58964) & 65535) << 16);
  }
  let c = 0;
  return (
    r >= 3 && (c ^= (e.charCodeAt(d + 2) & 255) << 16),
    r >= 2 && (c ^= (e.charCodeAt(d + 1) & 255) << 8),
    r >= 1 &&
      ((c ^= e.charCodeAt(d) & 255),
      (c = ((c & 65535) * 3432918353 + ((((c >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (c = (c << 15) | (c >>> 17)),
      (c = ((c & 65535) * 461845907 + ((((c >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (n ^= c)),
    (n ^= e.length),
    (n ^= n >>> 16),
    (n = ((n & 65535) * 2246822507 + ((((n >>> 16) * 2246822507) & 65535) << 16)) & 4294967295),
    (n ^= n >>> 13),
    (n = ((n & 65535) * 3266489909 + ((((n >>> 16) * 3266489909) & 65535) << 16)) & 4294967295),
    (n ^= n >>> 16),
    n >>> 0
  );
}
function Nt(e) {
  let t = e.version;
  switch (t) {
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
      return !0;
    default: {
      let o = t;
      return !1;
    }
  }
}
function pe(e) {
  return ft(e) && typeof e.version == "number" && ft(e.root);
}
function ft(e) {
  return typeof e == "object" && e !== null;
}
function xt(e) {
  throw new Error("Absurd! This should not happen.");
}
function ue(e, t) {
  if (!e) throw new Error(t ? `assert: ${t}` : "assert");
}
function ra(e) {
  switch (e.version) {
    case 55:
      e = Ne(e);
    case 56:
      e = ge(e);
    case 57:
      e = Te(e);
    case 58:
      e = ye(e);
    case 59:
      e = Se(e);
    case 60:
      e = Pe(e);
    case 61:
      e = Ve(e);
    case 62:
      e = _e(e);
    case 63:
      e = ve(e);
    case 64:
      e = Re(e);
    case 65:
      e = Ce(e);
    case 66:
      e = be(e);
    case 67:
      e = ke(e);
    case 68:
      e = Fe(e);
    case 69:
      e = Le(e);
    case 70:
      e = ze(e);
    case 71:
      e = Ue(e);
    case 72:
      e = $e(e);
    case 73:
      e = qe(e);
    case 74:
      e = Ze(e);
    case 75:
      e = Qe(e);
    case 76:
      e = Je(e);
    case 77:
      e = eo(e);
    case 78:
      e = oo(e);
    case 79:
      e = ro(e);
    case 80:
      e = no(e);
    case 81:
      e = io(e);
    case 82:
      e = co(e);
    case 83:
      e = lo(e);
    case 84:
      e = po(e);
    case 85:
      e = mo(e);
    case 86:
      e = fo(e);
    case 87:
      e = No(e);
    case 88:
      e = ho(e);
    case 89:
      e = go(e);
    case 90:
      e = To(e);
    case 91:
      e = yo(e);
    case 92:
      e = So(e);
    case 93:
      e = Vo(e);
    case 94:
      e = _o(e);
    case 95:
      e = vo(e);
    case 96:
      e = Ro(e);
    case 97:
      e = ko(e);
    case 98:
      e = Oo(e);
    case 99:
      e = Wo(e);
    case 100:
      e = Bo(e);
    case 101:
      e = Do(e);
    case 102:
      e = Lo(e);
    case 103:
      e = Uo(e);
    case 104:
      e = $o(e);
    case 105:
      e = Yo(e);
    case 106:
      e = Ko(e);
    case 107:
      e = Xo(e);
    case 108:
      e = qo(e);
    case 109:
      e = jo(e);
    case 110:
      e = Zo(e);
    case 111:
      e = Jo(e);
    case 112:
      e = tt(e);
    case 113:
      e = rt(e);
    case 114:
      e = nt(e);
    case 115:
      e = dt(e);
    case 116:
      e = pt(e);
    case 117:
      e = mt(e);
    case 118:
      return e;
    default:
      return xt(e);
  }
}
function na(e) {
  return (
    ue(pe(e), "'treeJson' is not a valid Tree"),
    ue(Nt(e), `'treeJson' is not migratable, received version is: ${e.version}`),
    ra(e)
  );
}
var ht = 118;
var ia = ht,
  Lu = ia;
var Gu = "id",
  Hu = "id";
export { we as a, pe as b, ue as c, na as d, Lu as e, Gu as f, Hu as g };
//# sourceMappingURL=chunk-QNKC3NEE.mjs.map
