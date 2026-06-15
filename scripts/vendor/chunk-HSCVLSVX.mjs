import { a as M, b as ce } from "chunk-NYGWFQ3Z.mjs";
import { f as Re, h as Ce, l as Ue } from "chunk-DYNCKUFC.mjs";
import { a as Te } from "chunk-SJONTHBI.mjs";
import { j as pt } from "chunk-WKFLJETF.mjs";
import { d as dt, k as mt } from "chunk-WJBO7C5H.mjs";
import { E as ct, cb as ut } from "chunk-3GX5YKYT.mjs";
import { a as v, b as lt } from "chunk-6PNPO5DW.mjs";
import { a as le } from "chunk-HMF7T2NG.mjs";
import { a as ot, c as st, e as ae, j as d, k as rt, l as at } from "chunk-XELMBOBL.mjs";
var Bt = st((eo, Be) => {
  "use strict";
  (function () {
    function t(l, f) {
      document.addEventListener ? l.addEventListener("scroll", f, !1) : l.attachEvent("scroll", f);
    }
    function e(l) {
      document.body
        ? l()
        : document.addEventListener
          ? document.addEventListener("DOMContentLoaded", function f() {
              (document.removeEventListener("DOMContentLoaded", f), l());
            })
          : document.attachEvent("onreadystatechange", function f() {
              (document.readyState == "interactive" || document.readyState == "complete") &&
                (document.detachEvent("onreadystatechange", f), l());
            });
    }
    function n(l) {
      ((this.g = document.createElement("div")),
        this.g.setAttribute("aria-hidden", "true"),
        this.g.appendChild(document.createTextNode(l)),
        (this.h = document.createElement("span")),
        (this.i = document.createElement("span")),
        (this.m = document.createElement("span")),
        (this.j = document.createElement("span")),
        (this.l = -1),
        (this.h.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.i.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.j.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.m.style.cssText =
          "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
        this.h.appendChild(this.m),
        this.i.appendChild(this.j),
        this.g.appendChild(this.h),
        this.g.appendChild(this.i));
    }
    function i(l, f) {
      l.g.style.cssText =
        "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
        f +
        ";";
    }
    function o(l) {
      var f = l.g.offsetWidth,
        m = f + 100;
      return (
        (l.j.style.width = m + "px"),
        (l.i.scrollLeft = m),
        (l.h.scrollLeft = l.h.scrollWidth + 100),
        l.l !== f ? ((l.l = f), !0) : !1
      );
    }
    function s(l, f) {
      function m() {
        var h = g;
        o(h) && h.g.parentNode !== null && f(h.l);
      }
      var g = l;
      (t(l.h, m), t(l.i, m), o(l));
    }
    function r(l, f, m) {
      ((f = f || {}),
        (m = m || window),
        (this.family = l),
        (this.style = f.style || "normal"),
        (this.weight = f.weight || "normal"),
        (this.stretch = f.stretch || "normal"),
        (this.context = m));
    }
    var a = null,
      c = null,
      p = null,
      y = null;
    function S(l) {
      return (
        c === null &&
          (F(l) && /Apple/.test(window.navigator.vendor)
            ? ((l = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                window.navigator.userAgent
              )),
              (c = !!l && 603 > parseInt(l[1], 10)))
            : (c = !1)),
        c
      );
    }
    function F(l) {
      return (y === null && (y = !!l.document.fonts), y);
    }
    function u(l, f) {
      var m = l.style,
        g = l.weight;
      if (p === null) {
        var h = document.createElement("div");
        try {
          h.style.font = "condensed 100px sans-serif";
        } catch {}
        p = h.style.font !== "";
      }
      return [m, g, p ? l.stretch : "", "100px", f].join(" ");
    }
    ((r.prototype.load = function (l, f) {
      var m = this,
        g = l || "BESbswy",
        h = 0,
        b = f || 3e3,
        D = new Date().getTime();
      return new Promise(function (x, L) {
        if (F(m.context) && !S(m.context)) {
          var _e = new Promise(function (N, P) {
              function A() {
                new Date().getTime() - D >= b
                  ? P(Error("" + b + "ms timeout exceeded"))
                  : m.context.document.fonts.load(u(m, '"' + m.family + '"'), g).then(function (U) {
                      1 <= U.length ? N() : setTimeout(A, 25);
                    }, P);
              }
              A();
            }),
            Ae = new Promise(function (N, P) {
              h = setTimeout(function () {
                P(Error("" + b + "ms timeout exceeded"));
              }, b);
            });
          Promise.race([Ae, _e]).then(function () {
            (clearTimeout(h), x(m));
          }, L);
        } else
          e(function () {
            function N() {
              var w;
              ((w = (T != -1 && R != -1) || (T != -1 && I != -1) || (R != -1 && I != -1)) &&
                ((w = T != R && T != I && R != I) ||
                  (a === null &&
                    ((w = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent)),
                    (a =
                      !!w &&
                      (536 > parseInt(w[1], 10) ||
                        (parseInt(w[1], 10) === 536 && 11 >= parseInt(w[2], 10))))),
                  (w =
                    a &&
                    ((T == oe && R == oe && I == oe) ||
                      (T == se && R == se && I == se) ||
                      (T == re && R == re && I == re)))),
                (w = !w)),
                w && (C.parentNode !== null && C.parentNode.removeChild(C), clearTimeout(h), x(m)));
            }
            function P() {
              if (new Date().getTime() - D >= b)
                (C.parentNode !== null && C.parentNode.removeChild(C),
                  L(Error("" + b + "ms timeout exceeded")));
              else {
                var w = m.context.document.hidden;
                ((w === !0 || w === void 0) &&
                  ((T = A.g.offsetWidth), (R = U.g.offsetWidth), (I = B.g.offsetWidth), N()),
                  (h = setTimeout(P, 50)));
              }
            }
            var A = new n(g),
              U = new n(g),
              B = new n(g),
              T = -1,
              R = -1,
              I = -1,
              oe = -1,
              se = -1,
              re = -1,
              C = document.createElement("div");
            ((C.dir = "ltr"),
              i(A, u(m, "sans-serif")),
              i(U, u(m, "serif")),
              i(B, u(m, "monospace")),
              C.appendChild(A.g),
              C.appendChild(U.g),
              C.appendChild(B.g),
              m.context.document.body.appendChild(C),
              (oe = A.g.offsetWidth),
              (se = U.g.offsetWidth),
              (re = B.g.offsetWidth),
              P(),
              s(A, function (w) {
                ((T = w), N());
              }),
              i(A, u(m, '"' + m.family + '",sans-serif')),
              s(U, function (w) {
                ((R = w), N());
              }),
              i(U, u(m, '"' + m.family + '",serif')),
              s(B, function (w) {
                ((I = w), N());
              }),
              i(B, u(m, '"' + m.family + '",monospace')));
          });
      });
    }),
      typeof Be == "object"
        ? (Be.exports = r)
        : ((window.FontFaceObserver = r),
          (window.FontFaceObserver.prototype.load = r.prototype.load)));
  })();
});
var jn = st((Ye, Qe) => {
  "use strict";
  (function (t, e) {
    typeof ot == "function" && typeof Ye == "object" && typeof Qe == "object"
      ? (Qe.exports = e())
      : typeof define == "function" && define.amd
        ? define(function () {
            return e();
          })
        : (t.pluralize = e());
  })(Ye, function () {
    var t = [],
      e = [],
      n = {},
      i = {},
      o = {};
    function s(u) {
      return typeof u == "string" ? new RegExp("^" + u + "$", "i") : u;
    }
    function r(u, l) {
      return u === l
        ? l
        : u === u.toLowerCase()
          ? l.toLowerCase()
          : u === u.toUpperCase()
            ? l.toUpperCase()
            : u[0] === u[0].toUpperCase()
              ? l.charAt(0).toUpperCase() + l.substr(1).toLowerCase()
              : l.toLowerCase();
    }
    function a(u, l) {
      return u.replace(/\$(\d{1,2})/g, function (f, m) {
        return l[m] || "";
      });
    }
    function c(u, l) {
      return u.replace(l[0], function (f, m) {
        var g = a(l[1], arguments);
        return r(f === "" ? u[m - 1] : f, g);
      });
    }
    function p(u, l, f) {
      if (!u.length || n.hasOwnProperty(u)) return l;
      for (var m = f.length; m--; ) {
        var g = f[m];
        if (g[0].test(l)) return c(l, g);
      }
      return l;
    }
    function y(u, l, f) {
      return function (m) {
        var g = m.toLowerCase();
        return l.hasOwnProperty(g) ? r(m, g) : u.hasOwnProperty(g) ? r(m, u[g]) : p(g, m, f);
      };
    }
    function S(u, l, f, m) {
      return function (g) {
        var h = g.toLowerCase();
        return l.hasOwnProperty(h) ? !0 : u.hasOwnProperty(h) ? !1 : p(h, h, f) === h;
      };
    }
    function F(u, l, f) {
      var m = l === 1 ? F.singular(u) : F.plural(u);
      return (f ? l + " " : "") + m;
    }
    return (
      (F.plural = y(o, i, t)),
      (F.isPlural = S(o, i, t)),
      (F.singular = y(i, o, e)),
      (F.isSingular = S(i, o, e)),
      (F.addPluralRule = function (u, l) {
        t.push([s(u), l]);
      }),
      (F.addSingularRule = function (u, l) {
        e.push([s(u), l]);
      }),
      (F.addUncountableRule = function (u) {
        if (typeof u == "string") {
          n[u.toLowerCase()] = !0;
          return;
        }
        (F.addPluralRule(u, "$0"), F.addSingularRule(u, "$0"));
      }),
      (F.addIrregularRule = function (u, l) {
        ((l = l.toLowerCase()), (u = u.toLowerCase()), (o[u] = l), (i[l] = u));
      }),
      [
        ["I", "we"],
        ["me", "us"],
        ["he", "they"],
        ["she", "they"],
        ["them", "them"],
        ["myself", "ourselves"],
        ["yourself", "yourselves"],
        ["itself", "themselves"],
        ["herself", "themselves"],
        ["himself", "themselves"],
        ["themself", "themselves"],
        ["is", "are"],
        ["was", "were"],
        ["has", "have"],
        ["this", "these"],
        ["that", "those"],
        ["echo", "echoes"],
        ["dingo", "dingoes"],
        ["volcano", "volcanoes"],
        ["tornado", "tornadoes"],
        ["torpedo", "torpedoes"],
        ["genus", "genera"],
        ["viscus", "viscera"],
        ["stigma", "stigmata"],
        ["stoma", "stomata"],
        ["dogma", "dogmata"],
        ["lemma", "lemmata"],
        ["schema", "schemata"],
        ["anathema", "anathemata"],
        ["ox", "oxen"],
        ["axe", "axes"],
        ["die", "dice"],
        ["yes", "yeses"],
        ["foot", "feet"],
        ["eave", "eaves"],
        ["goose", "geese"],
        ["tooth", "teeth"],
        ["quiz", "quizzes"],
        ["human", "humans"],
        ["proof", "proofs"],
        ["carve", "carves"],
        ["valve", "valves"],
        ["looey", "looies"],
        ["thief", "thieves"],
        ["groove", "grooves"],
        ["pickaxe", "pickaxes"],
        ["passerby", "passersby"],
      ].forEach(function (u) {
        return F.addIrregularRule(u[0], u[1]);
      }),
      [
        [/s?$/i, "s"],
        [/[^\u0000-\u007F]$/i, "$0"],
        [/([^aeiou]ese)$/i, "$1"],
        [/(ax|test)is$/i, "$1es"],
        [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
        [/(e[mn]u)s?$/i, "$1s"],
        [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
        [
          /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
          "$1i",
        ],
        [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
        [/(seraph|cherub)(?:im)?$/i, "$1im"],
        [/(her|at|gr)o$/i, "$1oes"],
        [
          /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
          "$1a",
        ],
        [
          /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
          "$1a",
        ],
        [/sis$/i, "ses"],
        [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
        [/([^aeiouy]|qu)y$/i, "$1ies"],
        [/([^ch][ieo][ln])ey$/i, "$1ies"],
        [/(x|ch|ss|sh|zz)$/i, "$1es"],
        [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
        [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
        [/(pe)(?:rson|ople)$/i, "$1ople"],
        [/(child)(?:ren)?$/i, "$1ren"],
        [/eaux$/i, "$0"],
        [/m[ae]n$/i, "men"],
        ["thou", "you"],
      ].forEach(function (u) {
        return F.addPluralRule(u[0], u[1]);
      }),
      [
        [/s$/i, ""],
        [/(ss)$/i, "$1"],
        [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
        [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
        [/ies$/i, "y"],
        [
          /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
          "$1ie",
        ],
        [/\b(mon|smil)ies$/i, "$1ey"],
        [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
        [/(seraph|cherub)im$/i, "$1"],
        [
          /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
          "$1",
        ],
        [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
        [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
        [/(test)(?:is|es)$/i, "$1is"],
        [
          /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
          "$1us",
        ],
        [
          /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
          "$1um",
        ],
        [
          /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
          "$1on",
        ],
        [/(alumn|alg|vertebr)ae$/i, "$1a"],
        [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
        [/(matr|append)ices$/i, "$1ix"],
        [/(pe)(rson|ople)$/i, "$1rson"],
        [/(child)ren$/i, "$1"],
        [/(eau)x?$/i, "$1"],
        [/men$/i, "man"],
      ].forEach(function (u) {
        return F.addSingularRule(u[0], u[1]);
      }),
      [
        "adulthood",
        "advice",
        "agenda",
        "aid",
        "aircraft",
        "alcohol",
        "ammo",
        "analytics",
        "anime",
        "athletics",
        "audio",
        "bison",
        "blood",
        "bream",
        "buffalo",
        "butter",
        "carp",
        "cash",
        "chassis",
        "chess",
        "clothing",
        "cod",
        "commerce",
        "cooperation",
        "corps",
        "debris",
        "diabetes",
        "digestion",
        "elk",
        "energy",
        "equipment",
        "excretion",
        "expertise",
        "firmware",
        "flounder",
        "fun",
        "gallows",
        "garbage",
        "graffiti",
        "hardware",
        "headquarters",
        "health",
        "herpes",
        "highjinks",
        "homework",
        "housework",
        "information",
        "jeans",
        "justice",
        "kudos",
        "labour",
        "literature",
        "machinery",
        "mackerel",
        "mail",
        "media",
        "mews",
        "moose",
        "music",
        "mud",
        "manga",
        "news",
        "only",
        "personnel",
        "pike",
        "plankton",
        "pliers",
        "police",
        "pollution",
        "premises",
        "rain",
        "research",
        "rice",
        "salmon",
        "scissors",
        "series",
        "sewage",
        "shambles",
        "shrimp",
        "software",
        "species",
        "staff",
        "swine",
        "tennis",
        "traffic",
        "transportation",
        "trout",
        "tuna",
        "wealth",
        "welfare",
        "whiting",
        "wildebeest",
        "wildlife",
        "you",
        /pok[eé]mon$/i,
        /[^aeiou]ese$/i,
        /deer$/i,
        /fish$/i,
        /measles$/i,
        /o[iu]s$/i,
        /pox$/i,
        /sheep$/i,
      ].forEach(F.addUncountableRule),
      F
    );
  });
});
function ft(t) {
  return typeof t == "string";
}
function sn(t) {
  return Number.isFinite(t);
}
function Z(t) {
  return t.key + t.extension;
}
function ue(t, e, n, i) {
  let o = le(),
    s = new URL(`${o.userContent}/images/${t}`);
  return (
    sn(e) && s.searchParams.set("scale-down-to", `${e}`),
    n && s.searchParams.set("lossless", "1"),
    i &&
      (s.searchParams.set("width", i.width.toString()),
      s.searchParams.set("height", i.height.toString())),
    s.toString()
  );
}
function Ve(t, e, n) {
  return ue(
    Z(t),
    e,
    n,
    t.properties?.image
      ? { width: t.properties.image.width, height: t.properties.image.height }
      : void 0
  );
}
function de(t) {
  return `${le().userContent}/assets/${t}`;
}
function k(t) {
  return de(Z(t));
}
function rn(t) {
  let e = le(),
    n = new URL(t);
  if (n.origin !== e.userContent) return;
  let [, i, o, ...s] = n.pathname.split("/");
  if (!(i !== "images" && i !== "assets") && !(o === void 0 || o === "" || s.length > 0))
    return { filename: o, searchParams: n.searchParams };
}
var me = class extends Map {
  constructor() {
    super(...arguments);
    d(this, "_hash", 0);
  }
  get hash() {
    return this._hash;
  }
  set(n, i) {
    return (this._hash++, super.set(n, i));
  }
  delete(n) {
    return (this._hash++, super.delete(n));
  }
  clear() {
    return (this._hash++, super.clear());
  }
};
var gt = ae(Te(), 1);
var yt = new Set();
function $(t, ...e) {
  yt.has(t) || (yt.add(t), console.warn(t, ...e));
}
var Ft = (t) => () => {
    $(t);
  },
  an = () => () => {},
  ht = {
    imagePlaceholderSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>',
    useImageSource(t) {
      return t.src ?? "";
    },
    useImageElement(t, e, n) {
      let i = _.useImageSource(t, e, n);
      return (0, gt.useMemo)(() => {
        let o = new Image();
        return ((o.src = i), t.srcSet && (o.srcset = t.srcSet), o);
      }, [i, t.srcSet]);
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
    isOnPageCanvas: !1,
  },
  St = !1,
  ln = {
    get(t, e, n) {
      return Reflect.has(t, e)
        ? Reflect.get(t, e, n)
        : ["getLogger"].includes(String(e))
          ? an()
          : Ft(
              St
                ? `${String(e)} is not available in this version of Framer.`
                : `${String(e)} is only available inside of Framer. https://www.framer.com/`
            );
    },
  },
  _ = new Proxy(ht, ln);
function ii(t) {
  (Object.assign(ht, t), (St = !0));
}
var V = ((r) => (
  (r.Google = "google"),
  (r.Fontshare = "fontshare"),
  (r.Framer = "framer"),
  (r.Local = "local"),
  (r.Custom = "custom"),
  (r.BuiltIn = "builtIn"),
  r
))(V || {});
function O(t) {
  return t.weight !== void 0 && t.style !== void 0;
}
var De = "Variable";
function W(t, e) {
  return e ? `${t} ${De}` : t;
}
function pe(t, e) {
  switch (e) {
    case "custom":
      throw new Error("Custom fonts are not supported");
    default:
      return W(t.name, t.isVariable);
  }
}
function E(t) {
  return !!(t && Array.isArray(t));
}
function H(t) {
  if (!t || !Array.isArray(t)) return;
  let e = [];
  for (let n of t)
    cn(n) &&
      e.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return e;
}
function fe(t) {
  return !(
    typeof t != "object" ||
    t === null ||
    !("tag" in t) ||
    typeof t.tag != "string" ||
    ("coverage" in t && typeof t.coverage < "u" && !Array.isArray(t.coverage))
  );
}
function cn(t) {
  return !(
    typeof t != "object" ||
    t === null ||
    !("tag" in t) ||
    typeof t.tag != "string" ||
    ("name" in t && typeof t.name != "string") ||
    !("minValue" in t) ||
    typeof t.minValue != "number" ||
    !("maxValue" in t) ||
    typeof t.maxValue != "number" ||
    !("defaultValue" in t) ||
    typeof t.defaultValue != "number"
  );
}
var J = "BI;",
  X = class {
    constructor() {
      d(this, "name", "builtIn");
      d(this, "fontFamilies", []);
      d(this, "byFamilyName", new Map());
      d(this, "assetByKey", new Map());
    }
    importFonts(e) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
      let n = [];
      for (let i of e) {
        if (!this.isValidBuiltInFont(i)) continue;
        let { properties: o } = i,
          s = o.font.fontFamily,
          r = this.createFontFamily(s, o.font.foundryName, o.font.fontVersion),
          a = o.font.openTypeData,
          c = o.font.variationAxes,
          p = Array.isArray(c),
          y = p ? "variable" : o.font.fontSubFamily || "regular",
          S = k(i),
          F = H(c),
          u = {
            assetKey: i.key,
            family: r,
            selector: this.createSelector(s, y, o.font.fontVersion),
            variant: y,
            file: S,
            hasOpenTypeFeatures: E(a),
            variationAxes: F,
            category: o.font.fontCategory,
            weight: p ? un(F, o.font.faceDescriptors?.weight) : ye(y),
            style: xt(y),
            cssFamilyName: W(s, p),
          };
        (r.fonts.push(u), this.assetByKey.set(i.key, i), n.push(u));
      }
      for (let i of this.fontFamilies)
        i.fonts.sort((o, s) => {
          let r = ye(o.variant),
            a = ye(s.variant);
          return !r || !a ? 1 : r - a;
        });
      return n;
    }
    static parseVariant(e) {
      let n = bt(e),
        o = n === "variable" || n === "variable-italic" ? 400 : wt[n],
        s = xt(e);
      return { weight: o, style: s };
    }
    getFontBySelector(e) {
      let n = this.parseSelector(e);
      if (!n) return;
      let i = this.getFontFamilyByName(n.name);
      if (i) return i.fonts.find((o) => o.selector === e);
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    createFontFamily(e, n, i) {
      let o = this.byFamilyName.get(e);
      if (o && o.version === i) return o;
      let s = { source: this.name, name: e, fonts: [], foundryName: n, version: i };
      return (this.addFontFamily(s), s);
    }
    getOpenTypeFeatures(e) {
      M(e.assetKey, "Font must have an asset key");
      let i = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
      return E(i)
        ? i?.map((o) => {
            if (fe(o)) return { tag: o.tag, coverage: o.coverage };
          })
        : [];
    }
    isValidBuiltInFont(e) {
      return !e.mimeType.startsWith("font/") ||
        e.properties?.kind !== "font" ||
        !e.properties.font ||
        !e.properties.font.fontVersion ||
        !e.properties.font.fontFamily
        ? !1
        : "fontFamily" in e.properties.font;
    }
    createSelector(e, n, i) {
      return `${J}${e}/${n}/${i}`;
    }
    parseSelector(e) {
      if (!e.startsWith(J)) return null;
      let [n, i] = e.split(J);
      if (i === void 0) return null;
      let [o, s, r] = i.split("/");
      return !o || !s || !r
        ? null
        : {
            name: o,
            variant: s,
            source: this.name,
            isVariable: s.toLowerCase().includes("variable"),
          };
    }
    addFontFamily(e) {
      (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
    }
  },
  wt = {
    ultralight: 100,
    "ultralight-italic": 100,
    thin: 200,
    "thin-italic": 200,
    demi: 200,
    light: 300,
    "light-italic": 300,
    normal: 350,
    base: 400,
    regular: 400,
    classic: 400,
    "regular-slanted": 400,
    italic: 400,
    oblique: 400,
    dense: 400,
    brukt: 300,
    book: 400,
    "book-italic": 400,
    text: 400,
    "text-italic": 400,
    medium: 500,
    solid: 500,
    "medium-oblique": 500,
    "medium-italic": 500,
    mittel: 500,
    semibold: 600,
    "semibold-italic": 600,
    bold: 700,
    "bold-italic": 700,
    "bold-oblique": 700,
    fett: 700,
    ultrabold: 800,
    "ultrabold-italic": 800,
    extrabold: 800,
    "extrabold-italic": 800,
    black: 900,
    extralight: 100,
    "extralight-italic": 100,
    "black-italic": 900,
    "extra-italic": 900,
    "extra-italic-bold": 900,
    satt: 900,
    heavy: 900,
    "heavy-italic": 900,
    serif: 100,
    school: 200,
    expanded: 300,
    gothique: 500,
    "dense-light": 200,
    "dense-regular": 300,
    "dense-medium": 400,
    "dense-bold": 500,
    "solid-light": 600,
    "solid-regular": 700,
    "solid-medium": 800,
    "solid-bold": 900,
    53: 400,
    55: 600,
    "narrow-regular": 350,
    "narrow-black": 850,
    variable: 1e3,
    "variable-italic": 1e3,
  };
function ye(t) {
  let e = bt(t);
  return wt[e];
}
function un(t, e) {
  let n = t?.find((i) => i.tag === "wght")?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (e ?? ye("variable") ?? 500);
}
function bt(t) {
  return t.toLowerCase().replace(/\s+/gu, "-");
}
function xt(t) {
  return (
    (t = t.toLowerCase()),
    t.includes("italic") || t.includes("oblique") || t.includes("slanted") ? "italic" : "normal"
  );
}
function vt(t) {
  return {
    trace(...e) {
      return _.getLogger(t)?.trace(...e);
    },
    debug(...e) {
      return _.getLogger(t)?.debug(...e);
    },
    info(...e) {
      return _.getLogger(t)?.info(...e);
    },
    warn(...e) {
      return _.getLogger(t)?.warn(...e);
    },
    error(...e) {
      return _.getLogger(t)?.error(...e);
    },
    get enabled() {
      return _.getLogger(t) !== void 0;
    },
  };
}
function z(t, e) {
  return { ...dn(t, e), ...mn(t, e) };
}
function dn(t, e) {
  if (e.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: i } = t,
    o = new Map(),
    s = new Map();
  for (let y of e)
    y.isVariable === t.isVariable &&
      (o.set(`${y.weight}-${y.style}`, y),
      !(y.weight <= n) && (s.has(y.style) || s.set(y.style, y)));
  let r = s.get(i),
    a = s.get("italic"),
    c = t.weight;
  c <= 300
    ? ((r = o.get(`400-${i}`) ?? r), (a = o.get("400-italic") ?? a))
    : c <= 500
      ? ((r = o.get(`700-${i}`) ?? r), (a = o.get("700-italic") ?? a))
      : ((r = o.get(`900-${i}`) ?? r), (a = o.get("900-italic") ?? a));
  let p = o.get(`${n}-italic`);
  return { variantBold: r, variantItalic: p, variantBoldItalic: a };
}
function mn(t, e) {
  if (e.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n = new Map(),
    i,
    o,
    s,
    r;
  for (let a of e) {
    if (!a.isVariable) continue;
    let c = a.weight === t.weight,
      p = a.weight === 400;
    a.style === "normal"
      ? c
        ? (i = a)
        : p
          ? (s = a)
          : s || (s = a)
      : a.style === "italic" && (c ? (o = a) : p ? (r = a) : r || (r = a));
  }
  return { variantVariable: i ?? s, variantVariableItalic: o ?? r };
}
function Fe(t) {
  return !!t.variationAxes;
}
var pn = vt("custom-font-source"),
  Ne = "CUSTOM;",
  Pe = "CUSTOMV2;";
function he(t) {
  return fn(t) || Rt(t);
}
function fn(t) {
  return t.startsWith(Pe);
}
function Rt(t) {
  return t.startsWith(Ne);
}
function yn(t, e) {
  for (let n = 0; n < t.length; n++) {
    let i = t[n];
    if (i) {
      if (i.owner !== e.owner && i.file === e.file)
        return { existingFont: i, index: n, projectDuplicate: !0 };
      if (i && i.selector === e.selector)
        return { existingFont: i, index: n, projectDuplicate: !1 };
    }
  }
}
function It(t) {
  let { font: e } = t,
    n = e.fontFamily,
    i = Array.isArray(e.variationAxes);
  if (i && n.toLowerCase().includes("variable")) return n;
  let o = i ? De : e.fontSubFamily.trim();
  return o === "" ? n : `${n} ${o}`;
}
function _t({ fontFamily: t, fontSubFamily: e, variationAxes: n, faceDescriptors: i }) {
  let o = e.trim() || "Regular",
    s = o.toLocaleLowerCase().includes("variable"),
    r = H(n) && !s ? `Variable ${o}` : o,
    a = "normal",
    c = 400;
  return (
    i && ((c = i.weight), (a = i.italic || i.oblique ? "italic" : "normal")),
    { family: t, variant: r, weight: c, style: a }
  );
}
var ge = class t {
  constructor() {
    d(this, "name", "custom");
    d(this, "fontFamilies", []);
    d(this, "byFamilyName", new Map());
    d(this, "assetsByKey", new Map());
  }
  deprecatedImportFonts(e) {
    ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
    let n = [];
    for (let i of e) {
      if (!this.isValidCustomFontAsset(i)) continue;
      let o = i.properties?.font.variationAxes,
        s = Array.isArray(o),
        r = It(i.properties),
        a = this.createFontFamily(r),
        c = i.properties?.font.openTypeData,
        p = s ? "variable" : this.inferVariantName(r),
        y = k(i),
        S = t.createLegacySelector(r),
        { family: F, variant: u } = _t(i.properties.font),
        l = t.createSelector(F, u),
        f = {
          assetKey: i.key,
          family: a,
          selector: S,
          variant: p,
          file: y,
          hasOpenTypeFeatures: E(c),
          variationAxes: H(o),
          owner: Tt(i),
          cssFamilyName: t.cssFontFamilyFromSelector(S),
          alternativeSelectors: {
            [l]: { variant: u, cssFamilyName: t.cssFontFamilyFromSelector(l) },
          },
        };
      (a.fonts.push(f), this.assetsByKey.set(i.key, i), n.push(...a.fonts));
    }
    return n;
  }
  importFonts(e, n) {
    if (!n) return this.deprecatedImportFonts(e);
    ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
    let i = {};
    for (let o of e) {
      if (!this.isValidCustomFontAsset(o)) continue;
      let { family: s, variant: r, weight: a, style: c } = _t(o.properties.font),
        p = o.properties.font.variationAxes,
        y = Array.isArray(p),
        S = o.properties.font.openTypeData,
        F = k(o),
        u = Tt(o),
        l = It(o.properties),
        f = t.createLegacySelector(l),
        m = this.createFontFamily(s),
        g = t.createSelector(m.name, r),
        h = {
          assetKey: o.key,
          family: m,
          selector: g,
          variant: r,
          weight: a,
          style: c,
          file: F,
          hasOpenTypeFeatures: E(S),
          variationAxes: H(p),
          owner: u,
          alternativeSelectors: {
            [f]: {
              variant: y ? "variable" : this.inferVariantName(l),
              cssFamilyName: t.cssFontFamilyFromSelector(f),
            },
          },
          cssFamilyName: t.cssFontFamilyFromSelector(g),
        },
        b = yn(m.fonts, h);
      if (b?.projectDuplicate) h.owner === "project" && ((m.fonts[b.index] = h), (i[g] = h));
      else if (b) {
        pn.debug("Duplicate font found for:", h, "with existing font:", b.existingFont);
        let D = b.existingFont,
          x = h.file?.endsWith(".woff2") ?? !1,
          L = D.file?.endsWith(".woff2") ?? !1;
        x && !L && ((m.fonts[b.index] = h), (i[g] = h));
      } else (m.fonts.push(h), (i[g] = h));
      this.assetsByKey.set(o.key, o);
    }
    for (let o of this.fontFamilies) o.fonts.length > 0 && Fn(o);
    return Object.values(i);
  }
  static createSelector(e, n) {
    return `${Pe}${e}${n ? ` ${n}` : ""}`;
  }
  static createLegacySelector(e) {
    return `${Ne}${e}`;
  }
  static cssFontFamilyFromSelector(e) {
    return (
      M(he(e), "Selector must be a custom font selector"),
      Rt(e) ? e.slice(Ne.length) : e.slice(Pe.length)
    );
  }
  isValidCustomFontAsset(e) {
    return !e.mimeType.startsWith("font/") || e.properties?.kind !== "font" || !e.properties.font
      ? !1
      : "fontFamily" in e.properties.font;
  }
  getOpenTypeFeatures(e) {
    M(e.assetKey, "Font must have an asset key");
    let i = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
    return E(i)
      ? i?.map((o) => {
          if (fe(o)) return { tag: o.tag, coverage: o.coverage };
        })
      : [];
  }
  inferVariantName(e) {
    let n = [
        "thin",
        "ultra light",
        "extra light",
        "light",
        "normal",
        "medium",
        "semi bold",
        "bold",
        "extra bold",
        "black",
      ],
      i = [...n.map((a) => `${a} italic`), ...n],
      o = e.toLowerCase(),
      s = [...o.split(" "), ...o.split("-"), ...o.split("_")],
      r = i.find((a) => s.includes(a) || s.includes(a.replace(/\s+/gu, "")));
    return r ? r.replace(/^\w|\s\w/gu, (a) => a.toUpperCase()) : "Regular";
  }
  createFontFamily(e) {
    let n = this.byFamilyName.get(e);
    if (n) return n;
    let i = { source: this.name, name: e, fonts: [] };
    return (this.addFontFamily(i), i);
  }
  addFontFamily(e) {
    (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
  }
  getFontFamilyByName(e) {
    let n = this.byFamilyName.get(e);
    return n || null;
  }
};
function At(t) {
  if (!(!t.weight || !t.style))
    return { weight: t.weight, style: t.style, isVariable: Fe(t), selector: t.selector };
}
function Fn(t) {
  let e = t.fonts.map((n) => At(n)).filter((n) => n !== void 0);
  for (let n of t.fonts) {
    let i = At(n);
    if (!i) continue;
    let o = z(i, e);
    ((n.selectorVariable = o.variantVariable?.selector),
      (n.selectorVariableItalic = o.variantVariableItalic?.selector),
      (n.selectorBold = o.variantBold?.selector),
      (n.selectorBoldItalic = o.variantBoldItalic?.selector),
      (n.selectorItalic = o.variantItalic?.selector));
  }
}
function Tt(t) {
  return t.ownerTypes.includes("team") ? "team" : "project";
}
async function Se(t) {
  switch (t) {
    case "google":
      return (await import("https://app.framerstatic.com/google-USN4P7QQ.mjs")).default;
    case "fontshare":
      return (await import("https://app.framerstatic.com/fontshare-7EZA22EK.mjs")).default;
    default:
      throw new Error(`Unknown font source: ${t}`);
  }
}
async function j(t) {
  switch (t) {
    case "google":
      return (await import("https://app.framerstatic.com/google-2VGGKXYJ.mjs")).default;
    case "fontshare":
      return (await import("https://app.framerstatic.com/fontshare-NBCQ4HHT.mjs")).default;
    case "framer":
      return (await import("https://app.framerstatic.com/framer-font-LUJPOSD5.mjs")).default;
    default:
      throw new Error(`Unknown font source: ${t}`);
  }
}
var gn = ["display", "sans", "serif", "slab", "handwritten", "script"];
function Ct(t) {
  return t
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(hn);
}
function hn(t) {
  return gn.includes(t);
}
var K = "FS;",
  Ut = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900,
  },
  Vt = Object.keys(Ut),
  Sn = new RegExp(`^(?:${[...Vt, "italic", "variable"].join("|")})`, "u"),
  Y = class t {
    constructor() {
      d(this, "name", "fontshare");
      d(this, "fontFamilies", []);
      d(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      let n = e.toLowerCase().split(" "),
        i = Vt.find((a) => n.includes(a)),
        o = e.toLowerCase().includes("italic") ? "italic" : "normal";
      return { weight: (i && Ut[i]) || 400, style: o === "italic" ? o : "normal" };
    }
    parseSelector(e) {
      if (!e.startsWith(K)) return null;
      let n = e.split("-");
      if (n.length !== 2) return null;
      let [i, o] = n;
      return !i || !o
        ? null
        : {
            name: i.replace(K, ""),
            variant: o,
            source: this.name,
            isVariable: o.toLowerCase().includes("variable"),
          };
    }
    static createSelector(e, n) {
      return `${K}${e}-${n.toLowerCase()}`;
    }
    static createMetadataSelector(e) {
      return `${K}${e}`;
    }
    addFontFamily(e) {
      (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
    }
    async importFonts(e, n) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear());
      let i = await Se("fontshare"),
        o = [];
      for (let s of e) {
        let a = s.font_styles
            .filter((l) => {
              let f = l.name.toLowerCase();
              return !(!Sn.exec(f) || f.split(" ").includes("wide"));
            })
            .map((l) => ({
              ...t.parseVariant(l.name),
              selector: t.createSelector(s.name, l.name),
              isVariable: l.is_variable,
              fontshareVariantName: l.name,
              file: l.file,
            })),
          c = t.createMetadataSelector(s.name),
          p = n?.[c],
          y = s.name,
          S = this.getFontFamilyByName(y);
        S || ((S = { name: y, fonts: [], source: this.name }), this.addFontFamily(S));
        let F = t.createMetadataSelector(s.name),
          u = i[F];
        for (let l of a) {
          let {
              variantBold: f,
              variantBoldItalic: m,
              variantItalic: g,
              variantVariable: h,
              variantVariableItalic: b,
            } = z(l, a),
            D = {
              family: S,
              variant: l.fontshareVariantName.toLowerCase(),
              selector: l.selector,
              selectorBold: f?.selector,
              selectorBoldItalic: m?.selector,
              selectorItalic: g?.selector,
              selectorVariable: h?.selector,
              selectorVariableItalic: b?.selector,
              weight: l.weight,
              style: l.style,
              file: l.file,
              category: xn(s.category),
              hasOpenTypeFeatures: u,
              variationAxes: l.isVariable ? p : void 0,
              cssFamilyName: W(S.name, l.isVariable),
            };
          (S.fonts.push(D), o.push(D));
        }
      }
      return o;
    }
    async getOpenTypeFeatures(e) {
      let n = await j("fontshare"),
        i = t.createMetadataSelector(e.family.name);
      return n[i];
    }
  };
function xn(t) {
  let e = {
      serif: "serif",
      sans: "sans-serif",
      slab: "slab",
      display: "display",
      handwritten: "handwriting",
      script: "handwriting",
    },
    n = Ct(t)[0];
  return n && e[n];
}
var wn = "Inter",
  Dt = "FR;";
var bn = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  },
  Q = class t {
    constructor() {
      d(this, "name", "framer");
      d(this, "fontFamilies", []);
      d(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    addFontFamily(e) {
      let n = { name: e, fonts: [], source: this.name };
      return (this.fontFamilies.push(n), this.byFamilyName.set(n.name, n), n);
    }
    static getDraftFontPropertiesBySelector(e) {
      if (!e.startsWith(Dt) && !e.startsWith(wn)) return null;
      let n = e.split("-"),
        [i, o = ""] = n;
      if (!i) return null;
      let s = o.includes("Italic") ? "italic" : "normal",
        r = o.replace("Italic", ""),
        a = (r && bn[r]) || 400;
      return {
        cssFamilyName: i,
        style: s,
        weight: a,
        source: "framer",
        variant: void 0,
        category: "sans-serif",
      };
    }
    static createMetadataSelector(e) {
      return `${Dt}${e}`;
    }
    importFonts(e, n) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear());
      let i = [];
      return (
        e.forEach((o) => {
          let { uiFamilyName: s, ...r } = o,
            a = t.createMetadataSelector(o.uiFamilyName),
            c = n?.[a],
            p = this.getFontFamilyByName(s);
          p || (p = this.addFontFamily(s));
          let y = o.selector === o.selectorVariable || o.selector === o.selectorVariableItalic,
            S = { ...r, family: p, variationAxes: y ? c : void 0 };
          (p.fonts.push(S), i.push(S));
        }),
        i
      );
    }
    async getOpenTypeFeatures(e) {
      let n = await j("framer"),
        i = t.createMetadataSelector(e.family.name);
      return n[i];
    }
  };
var G = "GF;",
  ee = class t {
    constructor() {
      d(this, "name", "google");
      d(this, "fontFamilies", []);
      d(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      if (e === "regular") return { style: "normal", weight: 400 };
      let n = /(\d*)(normal|italic)?/u.exec(e);
      if (!n) return {};
      let i = parseInt(n[1] || "400"),
        o = n[2] === "italic" ? "italic" : "normal";
      return { weight: i, style: o };
    }
    parseSelector(e) {
      if (!e.startsWith(G)) return null;
      let n = e.includes("-variable-"),
        i = n ? e.split("-variable-") : e.split("-");
      if (i.length !== 2) return null;
      let [o, s] = i;
      return !o || !s
        ? null
        : { name: o.replace(G, ""), variant: s, source: this.name, isVariable: n };
    }
    static createSelector(e, n, i) {
      return `${G}${e}-${i ? "variable-" : ""}${n}`;
    }
    static createMetadataSelector(e) {
      return `${G}${e}`;
    }
    addFontFamily(e) {
      let n = { name: e, fonts: [], source: this.name };
      return (this.fontFamilies.push(n), this.byFamilyName.set(n.name, n), n);
    }
    async importFonts(e, n, i) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear());
      let o = await Se("google"),
        s = [],
        r = Nt(e, (c) => c.family),
        a = Nt(n, (c) => c.family);
      for (let c in r) {
        let p = r[c];
        if (!p) continue;
        let y = this.getFontFamilyByName(p.family);
        y || (y = this.addFontFamily(p.family));
        let F = p.variants.map((x) => ({
            ...t.parseVariant(x),
            googleFontsVariantName: x,
            selector: t.createSelector(c, x, !1),
            isVariable: !1,
            file: p.files[x],
          })),
          u = a[c],
          l = u?.axes
            ? u.variants.map((x) => ({
                ...t.parseVariant(x),
                googleFontsVariantName: x,
                selector: t.createSelector(c, x, !0),
                isVariable: !0,
                file: u.files[x],
              }))
            : [],
          f = t.createMetadataSelector(p.family),
          m = i?.[f],
          g = [...F, ...l],
          h = g.filter(O),
          b = t.createMetadataSelector(c),
          D = o[b];
        for (let x of g) {
          let { weight: L, style: _e, selector: Ae, googleFontsVariantName: N } = x,
            P = O(x) ? z(x, h) : void 0,
            {
              variantBold: A,
              variantItalic: U,
              variantBoldItalic: B,
              variantVariable: T,
              variantVariableItalic: R,
            } = P ?? {},
            I = {
              family: y,
              variant: N,
              selector: Ae,
              selectorBold: A?.selector,
              selectorBoldItalic: B?.selector,
              selectorItalic: U?.selector,
              selectorVariable: T?.selector,
              selectorVariableItalic: R?.selector,
              weight: L,
              style: _e,
              category: vn(p.category),
              file: x.file?.replace("http://", "https://"),
              variationAxes: x.isVariable ? m : void 0,
              hasOpenTypeFeatures: D,
              cssFamilyName: W(y.name, x.isVariable),
            };
          (y.fonts.push(I), s.push(I));
        }
      }
      return s;
    }
    async getOpenTypeFeatures(e) {
      let n = await j("google"),
        i = t.createMetadataSelector(e.family.name);
      return n[i];
    }
  };
function vn(t) {
  let e = {
    serif: "serif",
    "sans-serif": "sans-serif",
    display: "display",
    handwriting: "handwriting",
    monospace: "monospace",
  };
  if (t) return e[t];
}
function Nt(t, e) {
  return t.reduce((n, i) => ((n[e(i)] = i), n), {});
}
var In = {
    Arial: {
      Regular: { selector: "Arial", weight: void 0 },
      Black: { selector: "Arial-Black", weight: void 0 },
      Narrow: { selector: "Arial Narrow", weight: void 0 },
      "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 },
    },
    Avenir: {
      Book: { selector: "Avenir", weight: void 0 },
      Light: { selector: "Avenir-Light", weight: void 0 },
      Medium: { selector: "Avenir-Medium", weight: void 0 },
      Heavy: { selector: "Avenir-Heavy", weight: void 0 },
      Black: { selector: "Avenir-Black", weight: void 0 },
    },
    "Avenir Next": {
      Regular: { selector: "Avenir Next", weight: void 0 },
      "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 },
      Medium: { selector: "AvenirNext-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNext-Heavy", weight: void 0 },
    },
    "Avenir Next Condensed": {
      Regular: { selector: "Avenir Next Condensed", weight: void 0 },
      "Ultra Light": { selector: "AvenirNextCondensed-UltraLight", weight: void 0 },
      Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 },
    },
    Baskerville: {
      Regular: { selector: "Baskerville", weight: void 0 },
      "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 },
    },
    "Bodoni 72": {
      Book: { selector: "Bodoni 72", weight: void 0 },
      Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 },
      Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 },
    },
    Courier: { Regular: { selector: "Courier", weight: void 0 } },
    "Courier New": { Regular: { selector: "Courier New", weight: void 0 } },
    Futura: {
      Medium: { selector: "Futura", weight: void 0 },
      Condensed: { selector: "Futura-CondensedMedium", weight: void 0 },
      "Condensed ExtraBold": { selector: "Futura-CondensedExtraBold", weight: void 0 },
    },
    Georgia: { Regular: { selector: "Georgia", weight: void 0 } },
    "Gill Sans": {
      Regular: { selector: "Gill Sans", weight: void 0 },
      Light: { selector: "GillSans-Light", weight: void 0 },
      SemiBold: { selector: "GillSans-SemiBold", weight: void 0 },
      UltraBold: { selector: "GillSans-UltraBold", weight: void 0 },
    },
    Helvetica: {
      Regular: { selector: "Helvetica", weight: void 0 },
      Light: { selector: "Helvetica-Light", weight: void 0 },
      Bold: { selector: "Helvetica-Bold", weight: void 0 },
      Oblique: { selector: "Helvetica-Oblique", weight: void 0 },
      "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 },
      "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 },
    },
    "Helvetica Neue": {
      Regular: { selector: "Helvetica Neue", weight: void 0 },
      UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 },
      Thin: { selector: "HelveticaNeue-Thin", weight: void 0 },
      Light: { selector: "HelveticaNeue-Light", weight: void 0 },
      Medium: { selector: "HelveticaNeue-Medium", weight: void 0 },
      Bold: { selector: "HelveticaNeue-Bold", weight: void 0 },
      Italic: { selector: "HelveticaNeue-Italic", weight: void 0 },
      "UltraLight Italic": { selector: "HelveticaNeue-UltraLightItalic", weight: void 0 },
      "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 },
      "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 },
      "Medium Italic": { selector: "HelveticaNeue-MediumItalic", weight: void 0 },
      "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 },
      "Condensed Bold": { selector: "HelveticaNeue-CondensedBold", weight: void 0 },
      "Condensed Black": { selector: "HelveticaNeue-CondensedBlack", weight: void 0 },
    },
    "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } },
    Impact: { Regular: { selector: "Impact", weight: void 0 } },
    "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } },
    Menlo: { Regular: { selector: "Menlo", weight: void 0 } },
    Monaco: { Regular: { selector: "Monaco", weight: void 0 } },
    Optima: {
      Regular: { selector: "Optima", weight: void 0 },
      ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 },
    },
    Palatino: { Regular: { selector: "Palatino", weight: void 0 } },
    "SF Pro Display": {
      Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
      Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
      Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
      Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
      "Ultralight Italic": { selector: "__SF-UI-Display-Ultralight-Italic__", weight: 100 },
      "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
      "Light Italic": { selector: "__SF-UI-Display-Light-Italic__", weight: 300 },
      "Medium Italic": { selector: "__SF-UI-Display-Medium-Italic__", weight: 500 },
      "Semibold Italic": { selector: "__SF-UI-Display-Semibold-Italic__", weight: 600 },
      "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
      "Heavy Italic": { selector: "__SF-UI-Display-Heavy-Italic__", weight: 800 },
      "Black Italic": { selector: "__SF-UI-Display-Black-Italic__", weight: 900 },
    },
    "SF Pro Display Condensed": {
      Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
      Ultralight: { selector: "__SF-UI-Display-Condensed-Ultralight__", weight: 100 },
      Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Display-Condensed-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 },
    },
    "SF Pro Text": {
      Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
      Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
      "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
      "Medium Italic": { selector: "__SF-UI-Text-Medium-Italic__", weight: 500 },
      "Semibold Italic": { selector: "__SF-UI-Text-Semibold-Italic__", weight: 600 },
      "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
      "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 },
    },
    "SF Pro Text Condensed": {
      Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 },
    },
    Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } },
    Times: { Regular: { selector: "Times", weight: void 0 } },
    "Times New Roman": { Regular: { selector: "Times New Roman", weight: void 0 } },
    Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } },
    Verdana: { Regular: { selector: "Verdana", weight: void 0 } },
  },
  Pt = {
    "__SF-Compact-Display-Regular__": "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__": "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__": "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__": "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__": "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__": "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__": "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__": "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__": "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__": ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__": ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__": ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__":
      ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__": ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__": ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__":
      ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__":
      ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__":
      ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__":
      ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__":
      ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__": "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__": "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__": "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__": "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__":
      "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__": "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__": "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__":
      ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__":
      ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__":
      ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__":
      ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__":
      ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__":
      ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__":
      ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__":
      ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__": ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__":
      ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__":
      ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__":
      ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__":
      ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__":
      ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__":
      ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__":
      ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__":
      ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__": ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__": ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__":
      ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__":
      ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__":
      ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__":
      ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__":
      ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__":
      ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__":
      ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__":
      ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__":
      ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__":
      ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__":
      ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__":
      ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__":
      ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__": ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__": "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__": "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__": "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__": "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__": "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__": "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__": "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__": "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__": "SFCompactRounded-Black|.SFCompactRounded-Black",
  },
  Le = In;
var _n = "System Default",
  xe = class {
    constructor() {
      d(this, "name", "local");
      d(this, "fontFamilies", []);
      d(this, "byFamilyName", new Map());
      d(this, "fontAliasBySelector", new Map());
      d(this, "fontAliases", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    createFontFamily(e) {
      let n = { name: e, fonts: [], source: this.name };
      return (this.addFontFamily(n), n);
    }
    addFontFamily(e) {
      (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
    }
    importFonts() {
      let e = [];
      for (let o of Object.keys(Le)) {
        let s = Le[o];
        if (!s) continue;
        let r = this.createFontFamily(o);
        for (let a of Object.keys(s)) {
          let c = s[a];
          if (!c) continue;
          let { selector: p, weight: y } = c,
            S = { variant: a, selector: p, weight: y, family: r, cssFamilyName: r.name };
          r.fonts.push(S);
        }
        e.push(...r.fonts);
      }
      for (let [o, s] of Object.entries(Pt)) this.addFontAlias(o, s);
      let { fontFamily: n, aliases: i } = this.getSystemFontFamily();
      this.addFontFamily(n);
      for (let [o, s] of i) this.addFontAlias(o, s);
      return (e.push(...n.fonts), e);
    }
    addFontAlias(e, n) {
      (this.fontAliases.set(e, n), this.fontAliasBySelector.set(n, e));
    }
    getSystemFontFamily() {
      let e =
          "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif",
        n = { name: _n, fonts: [], source: this.name },
        i = new Map(),
        o = [400, 100, 200, 300, 500, 600, 700, 800, 900],
        s = ["normal", "italic"];
      for (let r of s)
        for (let a of o) {
          let c = An(a, r),
            p = `__SystemDefault-${a}-${r}__`,
            y = { variant: c, selector: p, style: r, weight: a, family: n, cssFamilyName: n.name };
          (n.fonts.push(y), i.set(p, e));
        }
      return { fontFamily: n, aliases: i };
    }
    getFontAliasBySelector(e) {
      return this.fontAliasBySelector.get(e) || null;
    }
    getFontSelectorByAlias(e) {
      return this.fontAliases.get(e) || null;
    }
    isFontFamilyAlias(e) {
      return !!(e && /^__.*__$/u.exec(e));
    }
  },
  Lt = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  };
function An(t, e) {
  let n = e === "normal" ? "Regular" : "Italic";
  return t === 400 ? n : e !== "normal" ? `${Lt[t]} ${n}` : `${Lt[t]}`;
}
var Ot = ae(Bt(), 1);
function kt(t) {
  return typeof t == "function";
}
function to(t) {
  return typeof t == "boolean";
}
function we(t) {
  return typeof t == "string";
}
function no(t) {
  return Number.isFinite(t);
}
function Tn(t) {
  return Array.isArray(t);
}
function te(t) {
  return t !== null && typeof t == "object" && !Tn(t);
}
function io(t) {
  for (let e in t) return !1;
  return !0;
}
function oo(t) {
  return typeof t > "u";
}
function so(t) {
  return t === null;
}
function ro(t) {
  return t == null;
}
function ao(t) {
  return t instanceof Date && !Number.isNaN(t.getTime());
}
function lo(t) {
  return te(t) && kt(t.return);
}
function co(t) {
  return te(t) && kt(t.then);
}
function uo(t) {
  return t instanceof Promise;
}
var mo = () => {},
  Mt = typeof window < "u",
  po =
    Mt &&
    (navigator.webdriver ||
      /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(navigator.userAgent)),
  Rn = Mt && typeof window.requestIdleCallback == "function",
  fo = Rn ? window.requestIdleCallback : setTimeout;
function yo(t) {
  return `url('${Cn(t)}')`;
}
function Cn(t) {
  return `data:image/svg+xml,${t.replaceAll("#", "%23").replaceAll("'", "%27").replaceAll('"', "%22")}`;
}
function Fo(t, e) {
  let n = e instanceof Error ? (e.stack ?? e.message) : e;
  return `${
    t
      ? `${t}
`
      : ""
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : "."
  }`;
}
var go = () => () => {},
  ho = () => !0,
  So = () => !1;
var $t = 5e3,
  Un = 3,
  be = class extends Error {
    constructor(e) {
      (super(e), (this.name = "FontLoadingError"));
    }
  },
  ke = new Map(),
  Me = new Map(),
  $e = (t, e) => Wt(t, e);
async function Wt(t, e, n = 0) {
  let { family: i, url: o, stretch: s, unicodeRange: r } = t,
    a = t.weight,
    c = t.style || "normal",
    p = `${i}-${c}-${a}-${o}`;
  if (!ke.has(p) || n > 0) {
    let y = new FontFace(i, `url(${o})`, {
        weight: we(a) ? a : a?.toString(),
        style: c,
        stretch: s,
        unicodeRange: r,
      }),
      S = y
        .load()
        .then(() => (e.fonts.add(y), Oe(i, c, a)))
        .catch((F) => {
          if (F.name !== "NetworkError") throw F;
          if (n < Un) return Wt(t, e, n + 1);
          throw new be(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: i, style: c, weight: a, url: o, stretch: s, unicodeRange: r })}`
          );
        });
    ke.set(p, S);
  }
  await ke.get(p);
}
async function Oe(t, e, n) {
  let i = `${t}-${e}-${n}`;
  if (!Me.has(i)) {
    let s = new Ot.default(t, { style: e, weight: n }).load(null, $t);
    Me.set(i, s);
  }
  try {
    await Me.get(i);
  } catch {
    throw new be(
      `Failed to check if font is ready (${$t}ms timeout exceeded): ${JSON.stringify({ family: t, style: e, weight: n })}`
    );
  }
}
var We = {
  "FR;Inter": [
    { tag: "opsz", minValue: 14, maxValue: 32, defaultValue: 14, name: "Optical size" },
    { tag: "wght", minValue: 100, maxValue: 900, defaultValue: 400, name: "Weight" },
  ],
};
function ve(t) {
  try {
    if (t === "framer") return Et(We) ? We : void 0;
    {
      let e = (async () => {
        switch (t) {
          case "google":
            return (await import("https://app.framerstatic.com/google-Y4EBNJLA.mjs")).default;
          case "fontshare":
            return (await import("https://app.framerstatic.com/fontshare-6IMP724W.mjs")).default;
          default:
            ce(t);
        }
      })();
      return Et(e) ? e : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function Et(t) {
  return te(t) && Object.values(t).every(Nn);
}
function Dn(t) {
  return te(t) && we(t.tag);
}
function Nn(t) {
  return Array.isArray(t) && t.every(Dn);
}
var He = class {
    constructor() {
      d(this, "enabled", !1);
      d(this, "bySelector", new me());
      d(this, "loadedSelectors", new Set());
      d(this, "getGoogleFontsListPromise");
      d(this, "getFontshareFontsListPromise");
      d(this, "getBuiltInFontsListPromise");
      d(
        this,
        "customFontsImportPromise",
        new Promise((e) => {
          this.resolveCustomFontsImportPromise = e;
        })
      );
      d(this, "local");
      d(this, "google");
      d(this, "fontshare");
      d(this, "builtIn");
      d(this, "framer");
      d(this, "custom");
      d(this, "bySelectorValuesCache");
      d(this, "testing", { addFont: this.addFont.bind(this) });
      ((this.local = new xe()),
        (this.google = new ee()),
        (this.fontshare = new Y()),
        (this.framer = new Q()),
        (this.custom = new ge()),
        (this.builtIn = new X()),
        this.importLocalFonts());
    }
    get hash() {
      return this.bySelector.hash;
    }
    addFont(e) {
      if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
        for (let n of Object.keys(e.alternativeSelectors)) this.bySelector.set(n, e);
    }
    getAvailableFonts() {
      if (!this.bySelectorValuesCache || this.bySelectorValuesCache.hash !== this.bySelector.hash) {
        let e = new Map();
        for (let n of this.bySelector.values()) e.set(n, !0);
        this.bySelectorValuesCache = { result: Array.from(e.keys()), hash: this.bySelector.hash };
      }
      return this.bySelectorValuesCache.result;
    }
    importLocalFonts() {
      for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
    }
    async importGoogleFonts() {
      return (
        this.getGoogleFontsListPromise ||
          (this.getGoogleFontsListPromise = Promise.resolve().then(async () => {
            let { staticFonts: e, variableFonts: n } = await _.fetchGoogleFontsList(),
              i = await ve("google");
            for (let o of await this.google.importFonts(e, n, i)) this.addFont(o);
            return { staticFonts: e, variableFonts: n };
          })),
        this.getGoogleFontsListPromise
      );
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = _.fetchFontshareFontsList();
        let e = await this.getFontshareFontsListPromise,
          n = await ve("fontshare");
        for (let i of await this.fontshare.importFonts(e, n)) this.addFont(i);
      }
      return this.getFontshareFontsListPromise;
    }
    async importAllWebFonts() {
      await Promise.all([
        this.importGoogleFonts(),
        this.importFontshareFonts(),
        this.importBuiltInFonts(),
      ]);
    }
    async importBuiltInFonts() {
      if (!this.getBuiltInFontsListPromise) {
        this.getBuiltInFontsListPromise = _.fetchBuiltInFontsList();
        let e = await this.getBuiltInFontsListPromise;
        for (let n of await this.builtIn.importFonts(e)) this.addFont(n);
      }
      return this.getBuiltInFontsListPromise;
    }
    importFramerFonts(e) {
      let n = ve("framer");
      this.framer.importFonts(e, n).forEach((i) => {
        this.addFont(i);
      });
    }
    importCustomFonts(e, n) {
      this.bySelector.forEach((o, s) => {
        he(s) && this.bySelector.delete(s);
      });
      let i = this.custom.importFonts(e, n);
      for (let o of i) this.addFont(o);
      this.resolveCustomFontsImportPromise();
    }
    getCustomFontsImportPromise() {
      return this.customFontsImportPromise;
    }
    getFontFamily(e) {
      return this[e.source].getFontFamilyByName(e.name);
    }
    getFontBySelector(e) {
      if (!e) return;
      let n;
      if (((n = this.bySelector.get(e)), !!n))
        return n.alternativeSelectors && e in n.alternativeSelectors
          ? { ...n, ...n.alternativeSelectors[e] }
          : n;
    }
    getDraftPropertiesBySelector(e) {
      let n = this.getFontBySelector(e);
      if (n)
        return {
          style: n.style,
          weight: n.weight,
          variant: n.variant,
          cssFamilyName: n.cssFamilyName,
          source: n.family.source,
          category: n.category,
        };
      let i = this.google.parseSelector(e);
      if (i) {
        let a = ee.parseVariant(i.variant);
        if (O(a))
          return {
            style: a.style,
            weight: a.weight,
            variant: i.variant,
            cssFamilyName: pe(i, "google"),
            source: "google",
            category: void 0,
          };
      }
      let o = this.fontshare.parseSelector(e);
      if (o) {
        let a = Y.parseVariant(o.variant);
        if (O(a))
          return {
            style: a.style,
            weight: a.weight,
            variant: o.variant,
            cssFamilyName: pe(o, "fontshare"),
            source: "fontshare",
            category: void 0,
          };
      }
      let s = this.builtIn.parseSelector(e);
      if (s) {
        let a = X.parseVariant(s.variant);
        if (O(a))
          return {
            style: a.style,
            weight: a.weight,
            variant: s.variant,
            cssFamilyName: pe(s, "builtIn"),
            source: "builtIn",
            category: void 0,
          };
      }
      let r = Q.getDraftFontPropertiesBySelector(e);
      return r || null;
    }
    isSelectorLoaded(e) {
      return this.loadedSelectors.has(e);
    }
    async loadFont(e) {
      let n = this.getFontBySelector(e);
      if (!n) return 2;
      if (this.loadedSelectors.has(e)) return 0;
      let i = n.cssFamilyName,
        o = n.family.source,
        s = Fe(n);
      switch (o) {
        case "local":
          return (this.loadedSelectors.add(e), 1);
        case "framer":
          if ((ct() || (await Oe(n.family.name, n.style, n.weight)), s)) {
            if (!n.file) return Promise.reject(`Unable to load font: ${e}`);
            await $e({ family: i, url: n.file, weight: n.weight, style: n.style }, document);
          }
          return (this.loadedSelectors.add(e), 1);
        case "google":
        case "fontshare":
        case "builtIn":
        case "custom":
          return n.file
            ? (await $e({ family: i, url: n.file, weight: n.weight, style: n.style }, document),
              this.loadedSelectors.add(e),
              1)
            : Promise.reject(`Unable to load font: ${e}`);
        default:
          ce(o);
      }
    }
    async loadFontsFromSelectors(e) {
      if (!this.enabled) return [];
      let n = [];
      (e.some((c) => c.startsWith(K)) &&
        n.push(
          this.importFontshareFonts().catch((c) => {
            $("Failed to load Fontshare fonts:", c);
          })
        ),
        e.some((c) => c.startsWith(G)) &&
          n.push(
            this.importGoogleFonts().catch((c) => {
              $("Failed to load Google fonts:", c);
            })
          ),
        e.some((c) => c.startsWith(J)) &&
          n.push(
            this.importBuiltInFonts().catch((c) => {
              $("Failed to load built-in fonts:", c);
            })
          ),
        e.some(he) &&
          n.push(
            this.customFontsImportPromise.catch((c) => {
              $("Failed to load custom fonts:", c);
            })
          ),
        n.length > 0 && (await Promise.all(n)));
      let a = [];
      for (let c of e) a.push(this.loadFont(c));
      return Promise.allSettled(a);
    }
    async loadFonts(e) {
      return {
        newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
          (o) => o.status === "fulfilled" && o.value === 1
        ).length,
      };
    }
    async loadMissingFonts(e, n) {
      let i = e.filter((s) => !Ee.loadedSelectors.has(s));
      if (i.length === 0) return;
      (await Ee.loadWebFontsFromSelectors(i),
        i.every((s) => Ee.loadedSelectors.has(s)) && n && n());
    }
    async loadWebFontsFromSelectors(e) {
      return this.loadFontsFromSelectors(e);
    }
    get defaultFont() {
      let e = this.getFontBySelector("Inter");
      return (M(e, "Can\u2019t find Inter font"), e);
    }
  },
  Ee = new He();
var Pn = { auto: !0, lossless: !0, small: !0, medium: !0, large: !0, full: !0 };
function Ht(t) {
  return ft(t) && t in Pn;
}
var ze = "framer/asset-reference,";
function zt(t) {
  return t.startsWith(`data:${ze}`);
}
var jt = "originalFilename",
  Kt = "packageIdentifier",
  Gt = "preferredSize",
  qt = "presetName",
  Zt = "width",
  Jt = "height";
function ne(t, e = null, n = null, i = null, o = null, s = null) {
  v(t !== "", "Can\u2019t create asset reference for empty identifier");
  let r = new URL(`data:${ze}${t}`);
  return (
    n && r.searchParams.set(jt, n),
    e && r.searchParams.set(Kt, e),
    i && r.searchParams.set(Gt, i),
    o && r.searchParams.set(qt, o),
    s && (r.searchParams.set(Zt, s.width.toString()), r.searchParams.set(Jt, s.height.toString())),
    r.href
  );
}
function Ln({
  identifier: t,
  preferredSize: e,
  intrinsicSize: n,
  packageIdentifier: i,
  originalFilename: o,
  presetName: s,
}) {
  return ne(t, i, o, e, s, n);
}
function je(t) {
  return ne(
    t.identifier,
    t.packageIdentifier,
    t.originalFilename,
    t.preferredSize,
    t.presetName,
    t.intrinsicSize
  );
}
function ie(t) {
  if (zt(t))
    try {
      let e = new URL(t),
        n = e.pathname.substring(ze.length),
        i = e.searchParams.get(jt),
        o = e.searchParams.get(Kt),
        s = e.searchParams.get(Gt),
        r = e.searchParams.get(qt),
        a = e.searchParams.get(Zt),
        c = e.searchParams.get(Jt);
      return {
        identifier: n,
        originalFilename: i,
        packageIdentifier: o,
        preferredSize: Ht(s) ? s : void 0,
        presetName: r,
        fileExtension: i && Bn(i),
        intrinsicSize: a && c ? { width: parseInt(a), height: parseInt(c) } : void 0,
      };
    } catch {
      return;
    }
}
function Bn(t) {
  return t.split(".").pop() ?? "";
}
function Ke(t) {
  return `${t.ownerType}::${t.key}`;
}
var Ie,
  Ge = class {
    constructor(e) {
      this.api = e;
      d(this, "assetUpdatesEmitter", new mt());
      d(this, "currentAssets", new Map());
      d(this, "lastUpdatedAt");
      at(
        this,
        Ie,
        new ut({
          delay: 16,
          maxDelay: 16 * 4,
          task: async () => {
            let e = await this.api.getAssets({ updatedFrom: this.lastUpdatedAt });
            (this.lastUpdatedAt === void 0
              ? this.updateAll(e.assets)
              : this.updatePartial(e.assets),
              e.lastUpdatedAt && (this.lastUpdatedAt = e.lastUpdatedAt));
          },
        })
      );
      d(this, "assetUpdatesStream", this.assetUpdatesEmitter.newStream);
      d(this, "uploadAsset", async (e) => {
        if (!this.api.uploadAsset) throw Error("Asset service is read only");
        let n = await this.api.uploadAsset(e);
        return (await this.refresh(), n);
      });
      d(this, "duplicateAssets", async (e, n) => {
        if (!this.api.duplicateAssets) throw Error("Asset service is read only");
        let i = await this.api.duplicateAssets(e, n);
        return (this.addAssets(i), i);
      });
      this.assetUpdatesEmitter.emit({});
    }
    async refresh() {
      rt(this, Ie).debounce();
    }
    async refreshFully() {
      ((this.lastUpdatedAt = void 0), await this.refresh());
    }
    updateAll(e) {
      ((this.currentAssets = new Map(e.map((n) => [Ke(n), n]))),
        this.assetUpdatesEmitter.emit({ assets: Array.from(this.currentAssets.values()) }));
    }
    updatePartial(e) {
      for (let n of e) this.currentAssets.set(Ke(n), n);
      this.assetUpdatesEmitter.emit({ assets: Array.from(this.currentAssets.values()) });
    }
    addAssets(e) {
      this.updatePartial(e);
    }
    deleteProjectAssets(e) {
      let n = !1;
      for (let i of e) n ||= this.currentAssets.delete(Ke({ ownerType: "project", key: i }));
      n && this.assetUpdatesEmitter.emit({ assets: Array.from(this.currentAssets.values()) });
    }
    async duplicateModuleAssets(e, n, i) {
      if (!this.api.duplicateModuleAssets) throw Error("Asset service is read only");
      let o = await this.api.duplicateModuleAssets(e, n, i);
      return (this.addAssets(o), o);
    }
    async duplicateWorkspaceAssets(e, n) {
      if (!this.api.duplicateWorkspaceAssets) throw Error("Asset service is read only");
      let i = await this.api.duplicateWorkspaceAssets(e, n);
      this.addAssets(i);
    }
    getAssetByFilename(e) {
      for (let n of this.currentAssets.values()) if (Z(n) === e) return n;
    }
  };
Ie = new WeakMap();
var kn = /^(.*?)(?:([^/])\.([^/.]+))?$/;
function qe(t) {
  let e = t.match(kn);
  return e ? [e[1] + (e[2] ?? ""), e[3] ?? ""] : [t, ""];
}
var Ze = class {
  constructor() {
    d(this, "assets", new Map());
    d(this, "_hash", 0);
  }
  get hash() {
    return this._hash;
  }
  patch(e) {
    for (let n of e) {
      let { ownerType: i, ...o } = n,
        s = this.assets.get(n.key)?.ownerTypes ?? [],
        r = s.includes(i) ? s : [...s, i],
        a = Object.assign(o, { ownerTypes: r });
      this.assets.set(n.key, a);
    }
    this._hash++;
  }
  set(e) {
    (this.assets.clear(), this.patch(e));
  }
  items() {
    return Array.from(this.assets.values());
  }
  assetForKey(e) {
    let [n] = qe(e),
      i = this.assets.get(n);
    if (i) return i;
    for (let o of this.assets.values()) if (o.name === e) return o;
  }
};
function Xt(t) {
  switch (t) {
    case "small":
      return 512;
    case "medium":
      return 1024;
    case "large":
      return 2048;
    case "full":
      return;
    case "lossless":
    case "auto":
    case void 0:
      return;
    default:
      lt(t);
  }
}
var Mn = [1, 2, 2.2],
  $n = [512, 1024, 2048, 4096];
function Je(t, e) {
  if (t === void 0 || e === void 0) return;
  let n = t,
    i = e,
    o = 0;
  e > t && ((n = e), (i = t), (o = 1));
  let s = n / i,
    r = [];
  for (let a of $n) {
    if (n <= a) return r;
    r.push({ maxSideSize: a, width: o === 0 ? a : Math.trunc(a / s) });
  }
  return r;
}
function Xe(t, e, n) {
  let i,
    o = t?.properties?.image,
    s = Xt(e);
  s !== void 0 &&
    o &&
    ((n ??= Je(o.width, o.height)), n && (i = n.find(({ maxSideSize: a }) => a >= s)));
  let r = i?.maxSideSize;
  return Ve(t, r, e === "lossless");
}
var On = /^node_modules\/(@[^/]+\/[^/]+|[^/]+)\/(.*)/;
function Yt(t, e, n) {
  return `${t}/packages/${e}/latest/${n}`;
}
function Wn(t, e) {
  let n = e.replace(/%40/gu, "@"),
    i = On.exec(n);
  if (i?.[1] && i?.[2]) {
    let o = i[1],
      s = i[2];
    (v(o, "did not match packageName"), v(s, "did not match filePath"));
    let r = Yt(t, o, s);
    if (r) return r;
  }
  return n;
}
function En(t, e) {
  return (i, o) => {
    if (!i) return;
    let s = !1,
      r = ie(i);
    if (r) {
      let { identifier: c, packageIdentifier: p } = r;
      if (p) return Yt(t, p, c);
      ((s = !0), (i = c));
    } else if (o?.isFramerResourceURL) return Wn(t, i);
    let a = e.assetForKey(i);
    if (a) {
      if (a.properties?.kind === "image") {
        let c = o?.preferredSize ?? r?.preferredSize;
        return Xe(a, c);
      }
      return k(a);
    }
    if (s) return r?.intrinsicSize ? ue(i, void 0, void 0, r.intrinsicSize) : de(i);
  };
}
function Hn(t, e, n) {
  let i,
    o = !1;
  (n?.addEventListener(
    "abort",
    () => {
      ((o = !0), i?.());
    },
    { once: !0 }
  ),
    Promise.resolve(t)
      .then((s) => {
        if (o) return;
        let r = s.assetUpdatesStream({ replay: "latest" });
        return ((i = () => r.cancel()), r.read(e));
      })
      .catch(dt));
}
function zn(t, e) {
  let n = t ? ie(t) : void 0;
  return n ? je({ ...n, preferredSize: e }) : ne(t, null, null, e);
}
var Qt = ae(Te(), 1);
function en(t) {
  let e = (0, Qt.useRef)(null);
  return (e.current === null && (e.current = t()), e.current);
}
function Kn(t, e) {
  if (t.size !== e.size) return !1;
  for (let n of t) if (!e.has(n)) return !1;
  return !0;
}
function Gn(t, e) {
  if (t.size !== e.size) return !1;
  for (let [n, i] of t) if (!e.has(n) || e.get(n) !== i) return !1;
  return !0;
}
function qn(t, e) {
  if (t === e) return !0;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let i = 0; i < n; i++) if (t[i] != e[i]) return !1;
  return !0;
}
function Zn(t, e) {
  if (t === e) return !0;
  let n = Object.keys(t),
    i = n.length;
  if (i !== Object.keys(e).length) return !1;
  for (let o = i; o-- !== 0; ) {
    let s = n[o];
    if (Ue(s) || t[s] != e[s]) return !1;
  }
  return !0;
}
function Os(t, e) {
  if (t === e) return !0;
  let n = Object.keys(t),
    i = n.length;
  if (i !== Object.keys(e).length) return !1;
  for (let o = i; o-- !== 0; ) {
    let s = n[o];
    if (Ue(s) || t[s] !== e[s]) return !1;
  }
  return !0;
}
function tn(t, e) {
  return t === e
    ? !0
    : Ce(t)
      ? Ce(e)
        ? qn(t, e)
        : !1
      : Re(t) && Re(e)
        ? t instanceof Set
          ? e instanceof Set
            ? Kn(t, e)
            : !1
          : t instanceof Map
            ? e instanceof Map
              ? Gn(t, e)
              : !1
            : Zn(t, e)
        : !1;
}
var q = ae(Te(), 1);
var et = !1,
  tt,
  nt = {
    vekterEngineInStore:
      "EngineStore subclasses shouldn't reference VekterEngine. Express dependencies on other stores by passing them explicitly",
    accessingStoreStateNotAllowed:
      "You can't access store state inside the store.useState() hook. Use the result of useState or the state snapshot that's passed to calculateState instead",
    invalidStoreCreation:
      "EngineStores should be constructed with Store.new() instead of new Store()",
    deleteProperty: "EngineStore does not support deleting properties. Assign undefined instead",
  },
  it = class {
    constructor(e) {
      this.store = e;
      d(this, "scheduler");
      d(this, "storeProxy");
      d(this, "stateSnapshot");
      d(this, "proxyHandler", {
        set: (e, n, i, o) => {
          if (!this.scheduler || !this.storeProxy || nn(n)) return Reflect.set(e, n, i, o);
          v(!this.scheduler.inRendering, "Cannot change store state while rendering");
          let s = Reflect.get(e, n, o),
            r = Reflect.set(e, n, i, o);
          return (
            Reflect.get(e, n, o) !== s &&
              ((this.stateSnapshot = void 0), this.scheduler.signalChanges(this.storeProxy)),
            r
          );
        },
        get: (e, n, i) => (v(tt !== this, nt.accessingStoreStateNotAllowed), Reflect.get(e, n, i)),
        deleteProperty() {
          throw new Error(nt.deleteProperty);
        },
      });
      d(this, "useState", (e) => {
        let { scheduler: n, storeProxy: i } = this;
        (v(n, "EngineStoreDriver must be initialized with a scheduler"),
          v(i, "EngineStoreDriver must be initialized with a storyProxy"));
        let o = (0, q.useRef)();
        o.current = (a) => {
          let c = this.getSnapshot();
          if (!e) return c;
          try {
            tt = this;
            let p = e(c);
            return tn(a, p) ? a : p;
          } finally {
            tt = void 0;
          }
        };
        let [s, r] = (0, q.useState)(o.current);
        return (
          (0, q.useEffect)(() => {
            let a = n.changes.observe(i, () => {
              pt.benchmarkSkipRendering || r(o.current);
            });
            return () => n.changes.removeObserver(a);
          }, []),
          s
        );
      });
    }
    initialize(e, n) {
      (v(!this.scheduler, "EngineStoreDriver can only be initialized once"),
        (this.scheduler = e),
        (this.storeProxy = n));
    }
    getSnapshot() {
      if (this.stateSnapshot) return this.stateSnapshot;
      let e = {},
        n = Object.getPrototypeOf(this.store),
        i = Object.getOwnPropertyNames(n),
        o = Object.keys(this.store).concat(i);
      v(this.storeProxy, "EngineStoreDriver must be initialized with a storyProxy");
      let s;
      for (s of o) {
        if (nn(s)) continue;
        let r = this.storeProxy[s];
        r !== void 0 && typeof r != "function" && (e[s] = r);
      }
      return (this.stateSnapshot = e);
    }
  };
function nn(t) {
  return t === "driver" || t === "constructor" || t === "useState";
}
var on = class {
  constructor() {
    d(this, "driver", new it(this));
    d(this, "useState", this.driver.useState);
    return (v(et, nt.invalidStoreCreation), new Proxy(this, this.driver.proxyHandler));
  }
  static new(e, ...n) {
    try {
      et = !0;
      let i = new this(...n);
      return (i.driver.initialize(e, i), i);
    } finally {
      et = !1;
    }
  }
  get scheduler() {
    return this.driver.scheduler;
  }
};
function Jn() {
  return new Map();
}
function qs() {
  return en(Jn);
}
function Js(t) {
  return t === !0 || t === !1;
}
function Xs(t) {
  return typeof t == "string";
}
function Ys(t) {
  return Number.isFinite(t);
}
function Qs(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function er(t) {
  return Array.isArray(t);
}
function tr(t) {
  return typeof t == "function";
}
function nr(t) {
  return t === void 0;
}
export {
  $ as a,
  _ as b,
  ii as c,
  ft as d,
  sn as e,
  Z as f,
  ue as g,
  Ve as h,
  de as i,
  k as j,
  rn as k,
  V as l,
  O as m,
  De as n,
  vt as o,
  Fe as p,
  he as q,
  It as r,
  Y as s,
  ee as t,
  _n as u,
  kt as v,
  to as w,
  we as x,
  no as y,
  Tn as z,
  te as A,
  io as B,
  oo as C,
  so as D,
  ro as E,
  ao as F,
  lo as G,
  co as H,
  uo as I,
  mo as J,
  Mt as K,
  po as L,
  Rn as M,
  fo as N,
  yo as O,
  Cn as P,
  Fo as Q,
  go as R,
  ho as S,
  So as T,
  $e as U,
  Ee as V,
  Mn as W,
  Je as X,
  en as Y,
  qs as Z,
  Ge as _,
  qe as $,
  Ze as aa,
  zt as ba,
  ne as ca,
  Ln as da,
  je as ea,
  ie as fa,
  Xe as ga,
  En as ha,
  Hn as ia,
  zn as ja,
  jn as ka,
  Js as la,
  Xs as ma,
  Ys as na,
  Qs as oa,
  er as pa,
  tr as qa,
  nr as ra,
  Kn as sa,
  Gn as ta,
  qn as ua,
  Zn as va,
  Os as wa,
  tn as xa,
  on as ya,
};
//# sourceMappingURL=chunk-HSCVLSVX.mjs.map
