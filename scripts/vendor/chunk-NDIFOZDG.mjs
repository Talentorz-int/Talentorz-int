import { c as k, d as _ } from "chunk-TW4P4OFD.mjs";
import { a as M } from "chunk-LEYNIZPU.mjs";
import { a as F } from "chunk-SJONTHBI.mjs";
import { c as b, e as S, g as x } from "chunk-WJBO7C5H.mjs";
import { X as w, Y as T, g as P, ia as A } from "chunk-3GX5YKYT.mjs";
import { b as I } from "chunk-6PNPO5DW.mjs";
import { e as y } from "chunk-XELMBOBL.mjs";
var g = y(F());
function G(r, c) {
  let p = { service: r.service.service, onDiscover: r.onDiscover },
    f = (0, g.useRef)(p);
  if (f.current.service !== p.service)
    throw new Error("useServiceStream: service must be identical between re-renders");
  let E = { onStreamValue: c, onError: r.onError },
    u = (0, g.useRef)(E);
  u.current = E;
  let v = (0, g.useRef)(),
    { channel: d } = r;
  (0, g.useEffect)(() => {
    if (!d) return;
    let a = !0,
      i = () => {
        let h = v.current;
        ((v.current = void 0), h?.cancel().catch(() => {}));
      };
    return (
      (async () => {
        let h = !1,
          e = 0;
        for (; !h; ) {
          h = !0;
          try {
            let n = f.current,
              s = await S.shared().discover(n.service, d);
            if (!a) return;
            let t = n.onDiscover(s);
            ((v.current = t),
              (e = 0),
              await t.read((R) => (a ? u.current.onStreamValue(R) : Promise.resolve())));
          } catch (n) {
            if (!a) return;
            let s = u.current.onError(T(n));
            if ((e++, e > 1)) continue;
            if (s?.retry === !0) {
              if ((await P(0), !a)) return;
              h = !1;
            }
          }
        }
      })().catch(w),
      () => {
        ((a = !1), i());
      }
    );
  }, [d]);
}
function Y(r) {
  if (r instanceof b.ServiceGone) return { retry: !0 };
  w(r);
}
var o = y(F());
var H =
    "autoplay; ambient-light-sensor; accelerometer; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; usb; xr-spatial-tracking",
  U = "autoplay",
  N =
    "autoplay; ambient-light-sensor; accelerometer; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; usb; xr-spatial-tracking; clipboard-read; clipboard-write";
function O(r) {
  let c;
  switch (r) {
    case "on_page":
      c = U;
      break;
    case "editor":
      c = H;
      break;
    case "preview":
      c = N;
      break;
    default:
      I(r);
  }
  return c;
}
var D = y(M()),
  V = A("services:hooks:useiframewithchannel"),
  L = class extends Error {
    constructor(p, f = {}) {
      super(p);
      this.extras = f;
    }
  };
function X(r) {
  let { onSetup: c = () => {}, targetOrigin: p, type: f, src: E } = r,
    u = E;
  if (E) {
    let { pathname: e, search: n, hash: s } = new URL(E),
      t = `${e}${n}${s}`;
    (_(t), (u = k(t).url));
  }
  let [v, d] = (0, o.useReducer)(
      (e, n) => (
        e &&
          S.shared()
            .unregister(e)
            .catch((s) => {
              s instanceof b.ServiceGone || w(s);
            }),
        n
      ),
      null
    ),
    a = (0, o.useRef)(null),
    i = (0, o.useRef)(null),
    m = (0, o.useRef)({ onError: null, onLoad: null });
  return (
    (0, o.useEffect)(() => {
      if (!u || !a.current) {
        ((i.current = null), v && d(null));
        return;
      }
      if (i.current) return;
      let e = document.createElement("iframe");
      ((e.src = u),
        (e.style.border = "none"),
        (e.style.display = "block"),
        (e.style.height = "100%"),
        (e.style.width = "100%"),
        (e.dataset.testid = `${f}-iframe`),
        (e.allowFullscreen = !0));
      let n = (l) => {
        (d(null),
          V.reportError(
            new L("iframe load error", {
              message: l.message,
              filename: l.filename,
              lineno: l.lineno,
              colno: l.colno,
              error: l.error,
            })
          ));
      };
      (e.addEventListener("error", n), (m.current.onError = n));
      let s = new URL(u, document.baseURI).origin,
        t = e.sandbox;
      (t?.add("allow-downloads"),
        t?.add("allow-popups"),
        t?.add("allow-popups-to-escape-sandbox"),
        t?.add("allow-same-origin"),
        t?.add("allow-scripts"),
        t?.add("allow-forms"),
        (e.allow = O(f === "canvas" ? "editor" : "preview")),
        a.current.appendChild(e),
        (i.current = e));
      let R = () => {
          let { contentWindow: l } = e;
          return l ? new x(l, p ?? s) : (a.current?.removeChild(e), null);
        },
        C = () => {
          let l = R();
          d(l);
        };
      return (e.addEventListener("load", C), (m.current.onLoad = C), c(e));
    }, [v, d, c, u, p, f]),
    (0, o.useEffect)(
      () => () => {
        (m.current.onError && i.current?.removeEventListener("error", m.current.onError),
          m.current.onLoad && i.current?.removeEventListener("load", m.current.onLoad),
          (m.current.onError = null),
          (m.current.onLoad = null),
          (i.current = null),
          d(null));
      },
      []
    ),
    [
      (0, o.useCallback)(function (n) {
        return (
          (0, o.useEffect)(() => {
            if (a.current?.children.length === 0 && i.current)
              throw new Error(
                "IFrameWithChannel was re-rendered. The Service connection will be broken."
              );
          }),
          (0, D.jsx)("div", { ...n, ref: a })
        );
      }, []),
      v,
      i.current,
    ]
  );
}
export { O as a, X as b, G as c, Y as d };
//# sourceMappingURL=chunk-NDIFOZDG.mjs.map
