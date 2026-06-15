import {
  $ as us,
  $a as da,
  $b as Fa,
  $c as dc,
  A as Fi,
  Aa as zs,
  Ab as bn,
  Ac as nt,
  Ad as An,
  B as Ki,
  Ba as Ps,
  Bb as In,
  Bc as ot,
  Bd as Ec,
  C as Ui,
  Ca as Ls,
  Cb as Sn,
  Cc as it,
  Cd as zc,
  D as $i,
  Da as qs,
  Db as ya,
  Dc as st,
  Dd as ye,
  E as Vi,
  Ea as Fs,
  Eb as ga,
  Ec as at,
  F as xe,
  Fa as Ks,
  Fb as ba,
  Fc as ct,
  G as Zi,
  Ga as Us,
  Gb as Ia,
  Gc as Va,
  H as Xr,
  Ha as $s,
  Hb as Sa,
  Hc as Za,
  I as Qr,
  Ia as Vs,
  Ib as wa,
  Ic as ja,
  J as ji,
  Ja as Zs,
  Jb as va,
  Jc as Ha,
  K as Hi,
  Ka as js,
  Kb as xa,
  Kc as Wa,
  L as Wi,
  La as Hs,
  Lb as Ca,
  Lc as Ja,
  M as Ji,
  Ma as Ws,
  Mb as Ra,
  Mc as Ga,
  N as Gi,
  Na as Js,
  Nb as Na,
  Nc as Ya,
  O as Yi,
  Oa as Gs,
  Ob as ka,
  Oc as dt,
  P as Xi,
  Pa as Ys,
  Pb as Aa,
  Pc as Xa,
  Q as Qi,
  Qa as Xs,
  Qb as Ta,
  Qc as Nn,
  R as es,
  Ra as Qs,
  Rb as _a,
  Rc as Qa,
  S as ts,
  Sa as ea,
  Sb as Oa,
  Sc as ec,
  T as rs,
  Ta as ta,
  Tb as Ma,
  Tc as tc,
  U as ns,
  Ua as ra,
  Ub as Da,
  Uc as rc,
  V as os,
  Va as na,
  Vb as Ba,
  Vc as nc,
  W as is,
  Wa as oa,
  Wb as Ea,
  Wc as oc,
  X as ss,
  Xa as ia,
  Xb as za,
  Xc as ic,
  Y as as,
  Ya as sa,
  Yb as Pa,
  Yc as sc,
  Z as cs,
  Za as aa,
  Zb as La,
  Zc as ac,
  _ as ds,
  _a as ca,
  _b as qa,
  _c as cc,
  a as Ai,
  aa as ls,
  ab as ua,
  ac as Ka,
  ad as uc,
  b as m,
  ba as hs,
  bb as la,
  bc as Ua,
  bd as lc,
  c as Gr,
  ca as fs,
  cb as ha,
  cc as $a,
  cd as hc,
  d as Ti,
  da as ps,
  db as ae,
  dc as fe,
  dd as fc,
  e as he,
  ea as ms,
  eb as fa,
  ec as ne,
  ed as pc,
  f as Yr,
  fa as ys,
  fb as pa,
  fc as pe,
  fd as mc,
  ga as gs,
  gb as en,
  gc as K,
  gd as yc,
  h as Je,
  ha as bs,
  hb as jt,
  hc as wn,
  hd as gc,
  ia as Is,
  ib as tn,
  ic as vn,
  id as bc,
  j as v,
  ja as Ss,
  jb as rn,
  jc as xn,
  jd as Ic,
  k as _i,
  ka as ws,
  kb as nn,
  kc as Cn,
  kd as Sc,
  l as Vt,
  la as vs,
  lb as on,
  lc as Ce,
  ld as wc,
  m as Zt,
  ma as xs,
  mb as Ht,
  mc as Re,
  md as vc,
  n as Oi,
  na as Cs,
  nb as sn,
  nc as ce,
  nd as xc,
  o as Mi,
  oa as Rs,
  ob as an,
  oc as _e,
  od as kn,
  p as Di,
  pa as Ns,
  pb as cn,
  pc as Oe,
  pd as Cc,
  qa as ks,
  qb as dn,
  qc as me,
  qd as Rc,
  r as Bi,
  ra as As,
  rb as un,
  rc as Me,
  rd as Nc,
  sa as Ts,
  sb as ln,
  sc as Ge,
  sd as kc,
  t as Ei,
  ta as _s,
  tb as hn,
  tc as Ye,
  td as Ac,
  ua as Os,
  ub as fn,
  uc as Xe,
  ud as Tc,
  v as zi,
  vb as pn,
  vc as Qe,
  vd as _c,
  wa as Ms,
  wb as ma,
  wc as et,
  wd as Oc,
  x as Pi,
  xa as Ds,
  xb as mn,
  xc as tt,
  xd as Mc,
  y as Li,
  ya as Bs,
  yb as yn,
  yc as Rn,
  yd as Dc,
  z as qi,
  za as Es,
  zb as gn,
  zc as rt,
  zd as Bc,
} from "chunk-EKYV6PRY.mjs";
import {
  a as x,
  b as qt,
  c as Ft,
  d as Kt,
  e as Ut,
  f as $t,
  g as Ni,
  h as Wr,
  j as Jr,
  k as ki,
} from "chunk-YNCW2456.mjs";
import { g as Hr } from "chunk-DXEB74DT.mjs";
import { d as Ci, h as Ri } from "chunk-A4TNDN6S.mjs";
import { b as ve, c as vi, ca as xi } from "chunk-3GX5YKYT.mjs";
import { a as l } from "chunk-6PNPO5DW.mjs";
import { d as We, j as u, k as I, l as we, m as jr } from "chunk-XELMBOBL.mjs";
var Pc = "FRAMERCRDT";
function ut(r) {
  let e = r.readString();
  return (l(e === Pc, "Not a framer document:", e), { version: r.readUint16() });
}
function lt(r, e) {
  (e.writeString(Pc), e.writeUint16(r));
}
var nl = 1e3,
  ol = 1e4,
  il = 512,
  Tn = nl,
  sl = il,
  H = class {
    constructor(e) {
      u(this, "seqs", []);
      u(this, "idxs", []);
      u(this, "_maxSize", Tn);
      let t = e?.maxSize ?? Tn;
      this._maxSize = vi(t, Tn, ol);
    }
    get maxSize() {
      return this._maxSize;
    }
    clear() {
      ((this.seqs = []), (this.idxs = []));
    }
    load(e, t) {
      let n = e.length === t.length && e.length <= this._maxSize;
      ((this.seqs = n ? e : []), (this.idxs = n ? t : []));
    }
    get(e) {
      let t = this.seqs.length;
      if (t === 0) return 0;
      let n = ve(this.seqs, e, Lc);
      return n < t && this.seqs[n] === e ? this.idxs[n] : 0;
    }
    add(e, t) {
      let n = ve(this.seqs, e, Lc);
      if (n < this.seqs.length && this.seqs[n] === e) {
        t < this.idxs[n] && ((this.idxs[n] = t), this.propagateLeftFrom(n));
        return;
      }
      if (this.maxSize > 0 && this.seqs.length >= this.maxSize) {
        let i = this.seqs[this.seqs.length - this.maxSize];
        if (i !== void 0 && i > e) return;
      }
      (this.seqs.splice(n, 0, e),
        this.idxs.splice(n, 0, t),
        n + 1 < this.idxs.length && (this.idxs[n] = Math.min(this.idxs[n], this.idxs[n + 1])),
        this.propagateLeftFrom(n),
        this.seqs.length > this.maxSize + sl && this.trimToMaxSize());
    }
    trimToMaxSize() {
      if (this.maxSize) {
        let e = this.seqs.length - this.maxSize;
        e > 0 && (this.seqs.splice(0, e), this.idxs.splice(0, e));
      }
    }
    propagateLeftFrom(e) {
      let t = this.idxs[e];
      for (let n = e - 1; n >= 0 && !(this.idxs[n] <= t); n--) this.idxs[n] = t;
    }
    __snapshot() {
      return this.seqs.map((e, t) => ({ seq: e, idx: this.idxs[t] }));
    }
  };
function Lc(r, e) {
  return r - e;
}
var O = class {
  constructor(e) {
    this.buffer = e;
    u(this, "view");
    u(this, "decoder", new TextDecoder());
    u(this, "byteOffset", 0);
    this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
  }
  align(e) {
    let t = (e - (this.byteOffset % e)) % e;
    this.byteOffset += t;
  }
  endOfFile() {
    return this.byteOffset >= this.buffer.byteLength;
  }
  readUint8() {
    let e = this.view.getUint8(this.byteOffset);
    return ((this.byteOffset += 1), e);
  }
  readUint16() {
    let e = this.view.getUint16(this.byteOffset, !0);
    return ((this.byteOffset += 2), e);
  }
  readUint32() {
    let e = this.view.getUint32(this.byteOffset, !0);
    return ((this.byteOffset += 4), e);
  }
  readFloat64() {
    let e = this.view.getFloat64(this.byteOffset, !0);
    return ((this.byteOffset += 8), e);
  }
  readVarUint() {
    let e = 0,
      t = 0;
    for (;;) {
      let n = this.readUint8();
      if (((e += (n & 127) * 2 ** t), (n & 128) === 0)) break;
      if (((t += 7), t > 53)) throw new Error("VarUint is too big");
    }
    return e;
  }
  readString() {
    let e = this.readVarUint(),
      t = this.buffer.subarray(this.byteOffset, this.byteOffset + e);
    return ((this.byteOffset += e), this.decoder.decode(t));
  }
  readBytes(e) {
    let t = this.buffer.subarray(this.byteOffset, this.byteOffset + e);
    return ((this.byteOffset += e), t);
  }
  readTypedArray(e) {
    let t = this.readVarUint(),
      n = e.BYTES_PER_ELEMENT;
    this.align(n);
    let o = this.byteOffset + this.buffer.byteOffset,
      i = t * n;
    if (o % n !== 0) {
      let s = new ArrayBuffer(i);
      return (
        new Uint8Array(s).set(new Uint8Array(this.buffer.buffer, o, i)),
        (this.byteOffset += i),
        new e(s, 0, t)
      );
    }
    return ((this.byteOffset += i), new e(this.buffer.buffer, o, t));
  }
};
var be = 1024 * 1024,
  E = class {
    constructor() {
      u(this, "encoder", new TextEncoder());
      u(this, "alignmentOrigin", 0);
      u(this, "chunks", [new Uint8Array(be)]);
      u(this, "scratch", new ArrayBuffer(8));
      u(this, "scratchView", new DataView(this.scratch));
      u(this, "byteOffset", 0);
    }
    align(e) {
      let t = this.byteOffset - this.alignmentOrigin,
        n = (e - (t % e)) % e;
      this.writePadding(n);
    }
    withAlignmentOrigin(e, t) {
      let n = this.alignmentOrigin;
      this.alignmentOrigin = e;
      try {
        return t();
      } finally {
        this.alignmentOrigin = n;
      }
    }
    writeUint8(e) {
      return (this.scratchView.setUint8(0, e), this.writeScratch(1), 1);
    }
    writeUint16(e) {
      (this.scratchView.setUint16(0, e, !0), this.writeScratch(2));
    }
    writeUint32(e) {
      (this.scratchView.setUint32(0, e, !0), this.writeScratch(4));
    }
    writeFloat64(e) {
      (this.scratchView.setFloat64(0, e, !0), this.writeScratch(8));
    }
    writeFloat64At(e, t) {
      (this.scratchView.setFloat64(0, t, !0),
        this.writeBytesAt(e, new Uint8Array(this.scratch, 0, 8)));
    }
    writeVarUint(e) {
      let t = e;
      for (; t >= 128; ) (this.writeUint8((t % 128) | 128), (t = Math.floor(t / 128)));
      this.writeUint8(t);
    }
    writeString(e) {
      let t = this.encoder.encode(e);
      (this.writeVarUint(t.length), this.writeBytes(t));
    }
    writeTypedArray(e, t = e.length) {
      this.writeVarUint(t);
      let n = this.preallocateTypedArray(e.BYTES_PER_ELEMENT, t),
        o = new Uint8Array(e.buffer, e.byteOffset, n);
      this.writeBytes(o);
    }
    preallocateTypedArray(e, t) {
      return (this.align(e), t * e);
    }
    writeBytes(e) {
      let t = 0;
      for (; t < e.length; ) {
        this.remainingInCurrentChunk() === 0 && this.addChunk();
        let n = this.currentChunk(),
          o = this.currentChunkOffset(),
          i = Math.min(e.length - t, n.length - o);
        (n.set(e.subarray(t, t + i), o), (t += i), (this.byteOffset += i));
      }
    }
    getBuffer() {
      let e = new Uint8Array(this.byteOffset),
        t = 0;
      for (let n of this.getWrittenChunks()) (e.set(n, t), (t += n.length));
      return e;
    }
    async writeToStream(e) {
      for (let t of this.getWrittenChunks())
        e.write(t) || (await new Promise((n) => e.once("drain", n)));
    }
    writeScratch(e) {
      this.writeBytes(new Uint8Array(this.scratch, 0, e));
    }
    writeBytesAt(e, t) {
      let n = e,
        o = 0;
      for (; o < t.length; ) {
        let { chunk: i, chunkIndex: s } = this.getChunk(n),
          a = s * be,
          c = n - a,
          d = Math.min(t.length - o, i.length - c);
        (i.set(t.subarray(o, o + d), c), (o += d), (n += d));
      }
    }
    writePadding(e) {
      for (; e > 0; ) {
        this.remainingInCurrentChunk() === 0 && this.addChunk();
        let t = Math.min(e, this.remainingInCurrentChunk());
        ((this.byteOffset += t), (e -= t));
      }
    }
    getWrittenChunks() {
      return this.chunks
        .map((e, t) => {
          let n = t * be,
            o = Math.min(e.length, Math.max(0, this.byteOffset - n));
          return e.subarray(0, o);
        })
        .filter((e) => e.length > 0);
    }
    currentChunk() {
      return this.getChunk(this.byteOffset).chunk;
    }
    currentChunkOffset() {
      return this.byteOffset % be;
    }
    remainingInCurrentChunk() {
      return this.byteOffset === this.chunks.length * be ? 0 : be - this.currentChunkOffset();
    }
    addChunk() {
      this.chunks.push(new Uint8Array(be));
    }
    getChunk(e) {
      let t = Math.floor(e / be),
        n = this.chunks[t];
      if (n) return { chunk: n, chunkIndex: t };
      throw new Error(`Invalid byte offset: ${e}`);
    }
  };
var z = class r {
  constructor(e = []) {
    this.values = e;
  }
  get count() {
    return this.values.length;
  }
  add(e) {
    let t = qc(this.values, e);
    return t >= 0 ? !1 : (this.values.splice(-(t + 1), 0, e), !0);
  }
  has(e) {
    return qc(this.values, e) >= 0;
  }
  clone() {
    return new r([...this.values]);
  }
  copyIntoBitmap(e) {
    for (let t of this.values) e.add(t);
  }
  *[Symbol.iterator]() {
    yield* this.values;
  }
  serialize(e) {
    let t = new Uint16Array(this.values.length);
    for (let n = 0; n < t.length; ++n) t[n] = this.values[n];
    e.writeTypedArray(t);
  }
  deserialize(e) {
    l(this.values.length === 0, "ArrayContainer deserialize must be called with empty array");
    let t = e.readTypedArray(Uint16Array);
    for (let n = 0; n < t.length; ++n) this.values[n] = t[n];
  }
};
function qc(r, e) {
  let t = 0,
    n = r.length - 1;
  for (; t <= n; ) {
    let o = (t + n) >>> 1,
      i = r[o];
    if (i < e) {
      t = o + 1;
      continue;
    }
    if (i > e) {
      n = o - 1;
      continue;
    }
    return o;
  }
  return -(t + 1);
}
var ht = 2048,
  U = class r {
    constructor(e = new Uint32Array(ht), t = 0) {
      this.words = e;
      this._count = t;
    }
    get count() {
      return this._count;
    }
    add(e) {
      let t = e >>> 5,
        n = this.words[t],
        i = 1 << (e & 31);
      return n & i ? !1 : ((this.words[t] = n | i), (this._count += 1), !0);
    }
    has(e) {
      let t = e >>> 5,
        n = this.words[t],
        i = 1 << (e & 31);
      return !!(n & i);
    }
    clone() {
      return new r(this.words.slice(), this._count);
    }
    *[Symbol.iterator]() {
      for (let e = 0; e < this.words.length; e++) {
        let t = this.words[e] ?? 0,
          n = e << 5;
        for (; t !== 0; ) {
          let o = t & -t,
            i = 31 - Math.clz32(o);
          (yield n + i, (t &= t - 1));
        }
      }
    }
    copyIntoArray(e) {
      for (let t of this) e.values.push(t);
    }
    serialize(e) {
      (e.writeUint32(this.count), e.writeTypedArray(this.words));
    }
    deserialize(e) {
      (l(this.count === 0, "BitmapContainer deserialize should be called with an empty bitmap"),
        (this._count = e.readUint32()));
      let t = e.readTypedArray(Uint32Array);
      (l(t.length === ht, "unexpected bitmap word count", t.length), this.words.set(t));
    }
  };
var ft = { Array: 0, Bitmap: 1 };
function Fc(r, e) {
  if (r instanceof z && e instanceof z) return al(r, e);
  if (r instanceof z && e instanceof U) return cl(r, e);
  if (r instanceof U && e instanceof z) return dl(r, e);
  if (r instanceof U && e instanceof U) return ul(r, e);
}
function al(r, e) {
  let t = [],
    n = r.values,
    o = e.values,
    i = 0,
    s = 0;
  for (; i < n.length && s < o.length; ) {
    let a = n[i],
      c = o[s];
    if (a === c) {
      ((i += 1), (s += 1));
      continue;
    }
    if (a < c) {
      (t.push(a), (i += 1));
      continue;
    }
    s += 1;
  }
  for (; i < n.length; i++) t.push(n[i]);
  if (t.length !== 0) return new z(t);
}
function cl(r, e) {
  let t = r.values.filter((n) => !e.has(n));
  if (t.length !== 0) return new z(t);
}
function dl(r, e) {
  let t = r.words.slice(),
    n = r.count;
  for (let o of e.values) {
    let i = o >>> 5,
      s = 1 << (o & 31),
      a = t[i];
    a & s && ((t[i] = a & ~s), (n -= 1));
  }
  if (n !== 0) return new U(t, n);
}
function ul(r, e) {
  let t = new Uint32Array(ht),
    n = 0;
  for (let o = 0; o < ht; o++) {
    let i = (r.words[o] ?? 0) & ~(e.words[o] ?? 0);
    ((t[o] = i), (n += ll(i)));
  }
  if (n !== 0) return new U(t, n);
}
function ll(r) {
  let e = r >>> 0,
    t = 0;
  for (; e !== 0; ) ((e &= e - 1), (t += 1));
  return t;
}
var Kc = 4096,
  _n = 16,
  Uc = 65535,
  pt = class r {
    constructor() {
      u(this, "containers", new Map());
      u(this, "_count", 0);
    }
    get count() {
      return this._count;
    }
    get keys() {
      return Array.from(this.containers.keys()).sort((e, t) => e - t);
    }
    add(e) {
      mt(e, "value");
      let t = e >>> _n,
        n = e & Uc,
        o = this.containers.get(t);
      return o
        ? o.add(n)
          ? ((this._count += 1),
            o instanceof z && o.count > Kc && this.containers.set(t, hl(o)),
            !0)
          : !1
        : (this.containers.set(t, new z([n])), (this._count += 1), !0);
    }
    has(e) {
      mt(e, "value");
      let t = e >>> _n,
        n = e & Uc,
        o = this.containers.get(t);
      return o ? o.has(n) : !1;
    }
    andNot(e) {
      let t = new r();
      for (let n of this.keys) {
        let o = this.containers.get(n);
        if (!o) continue;
        let i = e.containers.get(n);
        if (!i) {
          let a = o.clone();
          (t.containers.set(n, a), (t._count += a.count));
          continue;
        }
        let s = Fc(o, i);
        s &&
          (s instanceof U && s.count <= Kc && (s = fl(s)),
          t.containers.set(n, s),
          (t._count += s.count));
      }
      return t;
    }
    clone() {
      let e = new r();
      for (let t of this.keys) {
        let n = this.containers.get(t);
        n && e.containers.set(t, n.clone());
      }
      return ((e._count = this._count), e);
    }
    *[Symbol.iterator]() {
      for (let e of this.keys) {
        let t = this.containers.get(e);
        if (t) for (let n of t) yield (((e << _n) >>> 0) + n) >>> 0;
      }
    }
    serialize(e) {
      (e.writeUint32(this._count), e.writeUint32(this.containers.size));
      for (let t of this.keys) {
        let n = this.containers.get(t);
        (l(n, "missing container for key", t),
          e.writeUint16(t),
          e.writeUint8(n instanceof z ? ft.Array : ft.Bitmap),
          n.serialize(e));
      }
    }
    deserialize(e) {
      (l(this.containers.size === 0, "RoaringBitmap32 deserialize must be called when empty"),
        (this._count = e.readUint32()));
      let t = e.readUint32();
      for (let n = 0; n < t; n++) {
        let o = e.readUint16(),
          i = e.readUint8(),
          s;
        (i === ft.Array ? (s = new z()) : i === ft.Bitmap && (s = new U()),
          l(s, "invalid container type", i),
          s.deserialize(e),
          this.containers.set(o, s));
      }
    }
  };
function hl(r) {
  let e = new U();
  return (r.copyIntoBitmap(e), e);
}
function fl(r) {
  let e = new z();
  return (r.copyIntoArray(e), e);
}
var pl = 4294967295;
function mt(r, e) {
  l(
    Number.isInteger(r) && r >= 0 && r <= pl,
    e,
    "must be an unsigned 32-bit integer, received:",
    r
  );
}
var yt = class r {
  constructor() {
    u(this, "seqMapByClient", new Map());
    u(this, "_count", 0);
  }
  get count() {
    return this._count;
  }
  add(e, t) {
    (mt(e, "client"), $c(t, "seq"));
    let { seqHigh: n, seqLow: o } = Vc(t),
      i = this.seqMapByClient.get(e);
    i || ((i = new Map()), this.seqMapByClient.set(e, i));
    let s = i.get(n);
    s || ((s = new pt()), i.set(n, s));
    let a = s.add(o);
    return (a && (this._count += 1), a);
  }
  has(e, t) {
    (mt(e, "client"), $c(t, "seq"));
    let { seqHigh: n, seqLow: o } = Vc(t),
      i = this.seqMapByClient.get(e);
    if (!i) return !1;
    let s = i.get(n);
    return s ? s.has(o) : !1;
  }
  hasClient(e) {
    return this.seqMapByClient.has(e);
  }
  andNot(e) {
    let t = new r();
    for (let n of de(this.seqMapByClient)) {
      let o = this.seqMapByClient.get(n);
      if (!o) continue;
      let i = e.seqMapByClient.get(n),
        s = new Map(),
        a = 0;
      for (let c of de(o)) {
        let d = o.get(c);
        if (!d) continue;
        let h = i?.get(c),
          f = h ? d.andNot(h) : d.clone();
        f.count <= 0 || (s.set(c, f), (a += f.count));
      }
      a > 0 && (t.seqMapByClient.set(n, s), (t._count += a));
    }
    return t;
  }
  *[Symbol.iterator]() {
    for (let e of de(this.seqMapByClient)) {
      let t = this.seqMapByClient.get(e);
      if (t)
        for (let n of de(t)) {
          let o = t.get(n);
          if (o) for (let i of o) yield { client: e, seq: ml(n, i) };
        }
    }
  }
  toArray() {
    return [...this];
  }
  serialize(e) {
    (e.writeFloat64(this._count), e.writeFloat64(this.seqMapByClient.size));
    let t = de(this.seqMapByClient);
    for (let n of t) {
      e.writeUint32(n);
      let o = this.seqMapByClient.get(n);
      (l(o, "seqMap must exist"), e.writeUint32(o.size));
      let i = de(o);
      for (let s of i) {
        e.writeUint32(s);
        let a = o.get(s);
        (l(a, "seqLowBitmap must exist"), a.serialize(e));
      }
    }
  }
  deserialize(e) {
    (l(this.seqMapByClient.size === 0, "TimestampSet deserialize must be called when empty"),
      (this._count = e.readFloat64()));
    let t = e.readFloat64();
    for (let n = 0; n < t; n++) {
      let o = e.readUint32(),
        i = new Map(),
        s = e.readUint32();
      for (let a = 0; a < s; a++) {
        let c = e.readUint32(),
          d = new pt();
        (d.deserialize(e), i.set(c, d));
      }
      this.seqMapByClient.set(o, i);
    }
  }
};
function de(r) {
  return Array.from(r.keys()).sort((e, t) => e - t);
}
var On = 4294967296;
function $c(r, e) {
  l(
    Number.isInteger(r) && r >= 0 && r <= Number.MAX_SAFE_INTEGER,
    e,
    "must be a safe unsigned integer, received:",
    r
  );
}
function Vc(r) {
  let e = Math.trunc(r / On),
    t = r % On;
  return { seqHigh: e, seqLow: t };
}
function ml(r, e) {
  return r * On + e;
}
function Hc(r) {
  let e = new Map();
  for (let { client: t, seq: n } of r) {
    let o = e.get(t);
    (o || ((o = new Set()), e.set(t, o)), o.add(n));
  }
  return e;
}
var $ = class r {
    constructor() {
      u(this, "timestamps");
      u(this, "clientState", new Map());
      this.timestamps = new yt();
    }
    get count() {
      return this.timestamps.count;
    }
    addTimestamp(e, t) {
      return this.timestamps.add(e, t);
    }
    updateClientState(e, t, n) {
      let o = this.clientState.get(e);
      o
        ? ((o.maxSeq = Math.max(t, o.maxSeq)), (o.batch = Math.max(n, o.batch)))
        : ((o = { maxSeq: t, batch: n }), this.clientState.set(e, o));
    }
    copyClientStateFrom(e) {
      for (let [t, n] of e.clientState) this.updateClientState(t, n.maxSeq, n.batch);
    }
    hasTimestamp(e, t) {
      return this.timestamps.has(e, t);
    }
    hasClient(e) {
      return this.timestamps.hasClient(e);
    }
    getBatch(e) {
      return this.clientState.get(e)?.batch;
    }
    getMaxSeq(e) {
      return this.clientState.get(e)?.maxSeq;
    }
    toMaxSeqArray() {
      let e = [];
      for (let t of de(this.clientState)) {
        let n = this.clientState.get(t).maxSeq;
        e.push([t, n]);
      }
      return e;
    }
    compare(e) {
      return {
        extra: this.timestamps.andNot(e.timestamps).toArray(),
        missing: e.timestamps.andNot(this.timestamps).toArray(),
      };
    }
    serialize(e) {
      (e.writeUint32(Zc),
        e.writeUint16(jc),
        this.timestamps.serialize(e),
        e.writeUint32(this.clientState.size));
      for (let t of de(this.clientState)) {
        let n = this.clientState.get(t);
        (e.writeUint32(t), e.writeFloat64(n.batch), e.writeFloat64(n.maxSeq));
      }
    }
    deserialize(e) {
      (l(this.timestamps.count === 0, "Manifest deserialize must be called when empty"),
        l(e.readUint32() === Zc, "Manifest magic mismatch"),
        l(e.readUint16() === jc, "Manifest version mismatch"),
        (this.timestamps = new yt()),
        this.timestamps.deserialize(e),
        this.clientState.clear());
      let t = e.readUint32();
      for (let n = 0; n < t; n++) {
        let o = e.readUint32(),
          i = e.readFloat64(),
          s = e.readFloat64();
        this.clientState.set(o, { batch: i, maxSeq: s });
      }
    }
    toBuffer() {
      let e = new E();
      return (this.serialize(e), e.getBuffer());
    }
    static fromBuffer(e) {
      let t = new O(e),
        n = new r();
      return (n.deserialize(t), n);
    }
  },
  Zc = 1414743629,
  jc = 1;
function gt(r) {
  if (r === Uint8Array) return "U8";
  if (r === Uint16Array) return "U16";
  if (r === Uint32Array) return "U32";
  if (r === Float64Array) return "F64";
  throw new Error("Invalid array name");
}
var g = Symbol("deleted"),
  P = Symbol("keep"),
  Wc = Symbol("does-not-exist"),
  T = "$keep",
  V = "$deleted",
  Wt = new Map([
    [void 0, "undefined"],
    [g, "Symbol(deleted)"],
    [P, "Symbol(keep)"],
  ]);
function A(r) {
  return Wt.has(r);
}
var Mn = "__$$framerCrdtNativeField$$__",
  yl = new Map([...Wt].map(([r, e]) => [e, r]));
function R(r) {
  return typeof r == "object" && r !== null && Mn in r;
}
function k(r) {
  return { [Mn]: Wt.get(r) };
}
function N(r) {
  return yl.get(r[Mn]);
}
var De = class {
  constructor(e, t, n) {
    this.capacity = e;
    u(this, "buffer");
    u(this, "length", 0);
    n
      ? ((this.buffer = n.buffer),
        (this.length = n.length),
        l(
          this.buffer.length === this.capacity,
          "Buffer capacity mismatch:",
          this.buffer.length,
          "!=",
          this.capacity
        ))
      : (this.buffer = new t(e));
  }
  push(e) {
    ((this.buffer[this.length] = e), (this.length += 1));
  }
};
var gl = 2 ** 17,
  Be = class {
    constructor(e, t = gl) {
      this.arrayConstructor = e;
      this.bucketSize = t;
      u(this, "buckets", []);
      u(this, "_length", 0);
      u(this, "bucketShift");
      u(this, "bucketMask");
      (l((t & (t - 1)) === 0, `Bucket size must be a power of 2, got: ${t}`),
        (this.bucketShift = Math.log2(t)),
        (this.bucketMask = t - 1));
    }
    get type() {
      return `BucketedColumn(${gt(this.arrayConstructor)})`;
    }
    add(e) {
      let t = this.buckets[this.buckets.length - 1];
      ((!t || t.length >= t.capacity) &&
        ((t = new De(this.bucketSize, this.arrayConstructor)), this.buckets.push(t)),
        t.push(e));
      let n = this._length;
      return ((this._length += 1), n);
    }
    get(e) {
      l(e >= 0 && e < this._length, "index", e, "out of bounds (column size:", this._length, ")");
      let t = e >> this.bucketShift,
        n = e & this.bucketMask,
        o = this.buckets[t];
      return (l(o, "invalid bucket index"), o.buffer[n]);
    }
    _set(e, t) {
      l(e >= 0 && e < this._length, "index", e, "out of bounds (column size:", this._length, ")");
      let n = e >> this.bucketShift,
        o = e & this.bucketMask,
        i = this.buckets[n];
      (l(i, "invalid bucket index"), (i.buffer[o] = t));
    }
    get length() {
      return this._length;
    }
    slice(e, t) {
      (e < 0 && (e = this.length + e), t < 0 && (t = this.length + t));
      let n = e >> this.bucketShift,
        o = t >> this.bucketShift,
        i = Math.min(this.length, t) - e;
      if (i <= 0) return [];
      let s = Array.from({ length: i }),
        a = 0,
        c = e & this.bucketMask,
        d = this.buckets[n];
      if (n === o) {
        let p = t & this.bucketMask;
        for (let b = c; b < p; ++b) s[a++] = d.buffer[b];
        return s;
      }
      for (let p = c; p < this.bucketSize; ++p) s[a++] = d.buffer[p];
      for (let p = n + 1; p < o; ++p) {
        let b = this.buckets[p];
        for (let w = 0; w < b.length; ++w) s[a++] = b.buffer[w];
      }
      let h = t & this.bucketMask,
        f = this.buckets[o];
      if (f) for (let p = 0; p < h; ++p) s[a++] = f.buffer[p];
      return s;
    }
    serialize(e) {
      (e.writeVarUint(this.length),
        e.preallocateTypedArray(this.arrayConstructor.BYTES_PER_ELEMENT, this.length));
      for (let t of this.buckets)
        e.writeBytes(
          new Uint8Array(
            t.buffer.buffer,
            t.buffer.byteOffset,
            t.length * this.arrayConstructor.BYTES_PER_ELEMENT
          )
        );
    }
    deserialize(e) {
      let t = e.readTypedArray(this.arrayConstructor);
      this._length = t.length;
      let n = 0;
      for (n = 0; n < t.length - this.bucketSize; n += this.bucketSize) {
        let o = t.subarray(n, n + this.bucketSize);
        this.buckets.push(
          new De(this.bucketSize, this.arrayConstructor, { buffer: o, length: o.length })
        );
      }
      if (n < t.length) {
        let o = new De(this.bucketSize, this.arrayConstructor);
        for (; n < t.length; ++n) o.push(t[n]);
        this.buckets.push(o);
      }
    }
  };
var W = class r {
  constructor(e, t) {
    this.arrayConstructor = e;
    u(this, "uniques", []);
    u(this, "maxUniques");
    u(this, "indices");
    u(this, "count", 0);
    u(this, "lookup");
    u(this, "cursor", 0);
    if (((this.indices = new Be(e, t)), e === Uint8Array)) this.maxUniques = 2 ** 8 - 1;
    else if (e === Uint16Array) this.maxUniques = 2 ** 16 - 1;
    else if (e === Uint32Array) this.maxUniques = 2 ** 32 - 1;
    else if (e === Float64Array) this.maxUniques = Number.MAX_SAFE_INTEGER;
    else throw new Error(`Unsupported array constructor: ${e.name}`);
  }
  get type() {
    return `LazyNormalizedBucketedColumn(ref: ${gt(this.arrayConstructor)})`;
  }
  static withBuckets({ buffer: e, size: t }) {
    return { create: () => new r(e, t) };
  }
  hydrateThrough(e) {
    for (this.lookup || (this.lookup = new Map()); this.cursor <= e; ++this.cursor) {
      let t = this.uniques[this.cursor];
      this.lookup.set(t, this.cursor);
    }
  }
  indexOfExisting(e) {
    if (this.lookup?.has(e)) return this.lookup.get(e);
    for (; this.cursor < this.uniques.length; ++this.cursor) {
      let t = this.uniques[this.cursor];
      if (((this.lookup ??= new Map()), this.lookup.set(t, this.cursor), Object.is(t, e)))
        return this.cursor;
    }
  }
  addUnique(e) {
    l(this.uniques.length < this.maxUniques, "limit reached for unique values");
    let t = this.uniques.length;
    return (
      this.uniques.push(e),
      (this.lookup ??= new Map()),
      this.lookup.set(e, t),
      (this.cursor = this.uniques.length),
      t
    );
  }
  add(e) {
    let t = this.indexOfExisting(e);
    t === void 0 && (t = this.addUnique(e));
    let n = this.count;
    return (this.indices.add(t), (this.count = n + 1), n);
  }
  get(e) {
    l(e >= 0 && e < this.count, "index out of bounds");
    let t = this.indices.get(e);
    return this.uniques[t];
  }
  _set(e, t) {
    l(e >= 0 && e < this.count, "index out of bounds");
    let n = this.indexOfExisting(t);
    (n === void 0 && (n = this.addUnique(t)), this.indices._set(e, n));
  }
  slice(e, t) {
    let n = Math.max(0, t - e),
      o = Array.from({ length: n }),
      i = this.indices.slice(e, t);
    for (let s = 0; s < n; ++s) o[s] = this.uniques[i[s]];
    return o;
  }
  get length() {
    return this.count;
  }
  serialize(e) {
    (e.writeString(JSON.stringify(this.uniques, (t, n) => (A(n) ? k(n) : n))),
      this.indices.serialize(e));
  }
  deserialize(e) {
    this.uniques = JSON.parse(e.readString());
    for (let t = 0; t < this.uniques.length; ++t) {
      let n = this.uniques[t];
      if (R(n)) {
        let o = N(n);
        this.uniques[t] = o;
      }
    }
    (this.indices.deserialize(e),
      (this.count = this.indices.length),
      (this.lookup = void 0),
      (this.cursor = 0));
  }
  rehydrate() {
    this.cursor < this.uniques.length && this.hydrateThrough(this.uniques.length - 1);
  }
};
var oe = class {
  constructor(e = 1024) {
    u(this, "uniques", []);
    u(this, "indices");
    u(this, "count", 0);
    u(this, "lookup");
    u(this, "cursor", 0);
    this.indices = new Uint32Array(e);
  }
  get type() {
    return "LazyNormalizedColumn";
  }
  ensureCapacity(e) {
    if (e <= this.indices.length) return;
    let t = this.indices.length || 1;
    for (; t < e; ) t <<= 1;
    let n = new Uint32Array(t);
    (n.set(this.indices), (this.indices = n));
  }
  hydrateThrough(e) {
    for (this.lookup || (this.lookup = new Map()); this.cursor <= e; ++this.cursor) {
      let t = this.uniques[this.cursor];
      this.lookup.set(t, this.cursor);
    }
  }
  indexOfExisting(e) {
    if (this.lookup?.has(e)) return this.lookup.get(e);
    for (; this.cursor < this.uniques.length; ++this.cursor) {
      let t = this.uniques[this.cursor];
      if (((this.lookup ??= new Map()), this.lookup.set(t, this.cursor), Object.is(t, e)))
        return this.cursor;
    }
  }
  addUnique(e) {
    let t = this.uniques.length;
    return (
      this.uniques.push(e),
      (this.lookup ??= new Map()),
      this.lookup.set(e, t),
      (this.cursor = this.uniques.length),
      t
    );
  }
  add(e) {
    let t = this.indexOfExisting(e);
    t === void 0 && (t = this.addUnique(e));
    let n = this.count;
    return (this.ensureCapacity(n + 1), (this.indices[n] = t), (this.count = n + 1), n);
  }
  get(e) {
    if (e < 0 || e >= this.count) throw RangeError("index out of bounds");
    return this.uniques[this.indices[e]];
  }
  _set(e, t) {
    if (e < 0 || e >= this.count) throw RangeError("index out of bounds");
    let n = this.indexOfExisting(t);
    (n === void 0 && (n = this.addUnique(t)), (this.indices[e] = n));
  }
  slice(e, t) {
    let n = Math.max(0, t - e),
      o = Array.from({ length: n });
    for (let i = 0; i < n; ++i) o[i] = this.uniques[this.indices[e + i]];
    return o;
  }
  get length() {
    return this.count;
  }
  serialize(e) {
    (e.writeString(
      JSON.stringify(this.uniques, (t, n) =>
        Array.isArray(n) ? n.map((o) => (A(o) ? k(o) : o)) : A(n) ? k(n) : n
      )
    ),
      e.writeTypedArray(this.indices.subarray(0, this.count)));
  }
  deserialize(e) {
    this.uniques = JSON.parse(e.readString());
    for (let n = 0; n < this.uniques.length; ++n) {
      let o = this.uniques[n];
      if (Array.isArray(o)) {
        for (let i = 0; i < o.length; ++i)
          if (R(o[i])) {
            let s = N(o[i]);
            o[i] = s;
          }
      } else if (R(o)) {
        let i = N(o);
        this.uniques[n] = i;
      }
    }
    let t = e.readTypedArray(Uint32Array);
    ((this.indices = new Uint32Array(t)),
      (this.count = this.indices.length),
      (this.lookup = void 0),
      (this.cursor = 0));
  }
  rehydrate() {
    this.cursor < this.uniques.length && this.hydrateThrough(this.uniques.length - 1);
  }
};
var Dn = class {
    constructor() {
      u(this, "client", W.withBuckets({ buffer: Uint32Array }).create());
      u(this, "seq", new Be(Float64Array));
      u(this, "batch", W.withBuckets({ buffer: Uint32Array }).create());
      u(this, "id", new oe());
      u(this, "key", new oe());
      u(this, "value", new oe());
      u(this, "user", W.withBuckets({ buffer: Uint8Array }).create());
    }
    get length() {
      return this.client.length;
    }
  },
  M = class {
    constructor(e, t = x) {
      this.codec = e;
      u(this, "columns", new Dn());
      u(this, "minIndexCache", new H({ maxSize: 1e3 }));
      u(this, "hierarchyData");
      u(this, "manifest", new $());
      u(this, "metadata");
      this.metadata = { seq: 1, branchId: t, compactedAt: 0, compactedLength: 0 };
    }
    addRows(e) {
      for (let t of e) this.addRow(t);
    }
    addRow(e) {
      return (
        this.columns.seq.add(e.seq),
        this.columns.id.add(e.id),
        this.columns.key.add(e.key),
        this.columns.value.add(e.value),
        this.columns.user.add(e.user),
        this.columns.batch.add(e.batch),
        this.columns.client.add(e.client)
      );
    }
    addSerializableRow(e) {
      let t = this.codec;
      this.addRow(t.fromSerializableRow(e));
    }
    addSerializableRows(e) {
      for (let t of e) this.addSerializableRow(t);
    }
    getRowInternal(e) {
      return {
        client: this.columns.client.get(e),
        seq: this.columns.seq.get(e),
        id: this.columns.id.get(e),
        key: this.columns.key.get(e),
        value: this.columns.value.get(e),
        user: this.columns.user.get(e),
        batch: this.columns.batch.get(e),
      };
    }
    getRow(e) {
      if (e < 0 || e >= this.columns.client.length) throw new Error("Index out of bounds");
      return this.getRowInternal(e);
    }
    getRows(e = 0, t = this.columns.client.length) {
      if (e < 0 || t > this.columns.client.length || e > t) throw new Error("Index out of bounds");
      let n = Array.from({ length: t - e });
      for (let o = e; o < t; o++) n[o - e] = this.getRowInternal(o);
      return n;
    }
    getSerializableRow(e) {
      let t = this.codec;
      if (e < 0 || e >= this.columns.client.length) throw new Error("Index out of bounds");
      let n = this.getRowInternal(e);
      return t.toSerializableRow(n);
    }
    getSerializableRows(e = 0, t = this.columns.client.length) {
      let n = this.codec;
      if (e < 0 || t > this.columns.client.length || e > t) throw new Error("Index out of bounds");
      let o = Array.from({ length: t - e });
      for (let i = e; i < t; ++i) {
        let s = this.getRowInternal(i);
        o[i - e] = n.toSerializableRow(s);
      }
      return o;
    }
    getSerializableRowsAfterManifest(e) {
      let t = this.codec,
        n = [];
      for (let o = 0; o < this.columns.client.length; o++) {
        let i = this.columns.seq.get(o),
          s = this.columns.client.get(o),
          a = e.getMaxSeq(s) ?? -1;
        if (i <= a) continue;
        let c = t.toSerializableRow(this.getRowInternal(o));
        n.push(c);
      }
      return n;
    }
    buildManifest() {
      if (!(this.manifest.count > 0))
        for (let e = 0; e < this.columns.client.length; e++)
          this.manifest.addTimestamp(this.columns.client.get(e), this.columns.seq.get(e));
    }
    compare(e) {
      return this.manifest.compare(e);
    }
    getExtraSerializableRows(e) {
      let t = this.compare(e);
      if (!t.extra.length) return [];
      let n = Hc(t.extra),
        o = [];
      for (let i = 0; i < this.columns.client.length; i++) {
        let s = n.get(this.columns.client.get(i));
        !s || !s.has(this.columns.seq.get(i)) || o.push(this.getSerializableRow(i));
      }
      return o;
    }
  };
var bl = ["client", "seq", "id", "key", "value", "user"],
  Bn = class {
    encode(e, t) {
      let n = e.main;
      for (let o of bl) {
        let i = n.columns[o];
        (t.writeString(o), t.writeString(i.type), i.serialize(t));
      }
    }
    decode(e, t) {
      let n = e.main;
      for (; !t.endOfFile(); ) {
        let o = t.readString(),
          i = n.columns[o];
        l(i, "Column", o, "not found");
        let s = t.readString();
        (l(s === i.type, "Column type does not match:", s, "(actual)", "!=", i.type, "(expected)"),
          i.deserialize(t));
      }
    }
    fromSerializableRow(e) {
      let t = R(e.value) ? N(e.value) : e.value;
      return {
        client: e.client,
        seq: e.seq,
        id: e.id,
        key: e.key,
        value: t,
        user: e.user,
        batch: 0,
      };
    }
    toSerializableRow(e) {
      let t = e.value;
      return (
        A(t) && (t = k(t)),
        { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user }
      );
    }
  },
  Jc = { description: "Sets up migration with initial codec", migrate() {}, codec: new Bn() };
var En = class {
    constructor(e) {
      this.nodeId = e;
      u(this, "hasParentIdOwnWrite", !1);
      u(this, "latestPropertyRowIndexByStoreId", new Map());
    }
    recordPropertyOwnWrite(e, t, n, o) {
      let i = this.getOrCreateLatestRowIndexByPropertyKey(t),
        s = i.get(n);
      (s === void 0 || Ut(e, o, s)) && i.set(n, o);
    }
    getOrCreateLatestRowIndexByPropertyKey(e) {
      let t = this.latestPropertyRowIndexByStoreId.get(e);
      if (t) return t;
      let n = new Map();
      return (this.latestPropertyRowIndexByStoreId.set(e, n), n);
    }
  },
  Jt = class {
    constructor(e) {
      this.branchData = e;
      u(this, "touchedNodeIdByRowIndex", []);
      u(this, "ownWriteSummaryByNodeId", new Map());
      u(this, "nodeIdsWithParentIdOwnWrites", new Set());
    }
    indexOwnRow(e) {
      let t = this.branchData.columns,
        n = t.id.get(e),
        o = t.key.get(e),
        i = zn(n, o);
      if (((this.touchedNodeIdByRowIndex[e] = i), !i)) return;
      let s = this.getOrCreateOwnWriteSummary(i);
      o === "parentid"
        ? ((s.hasParentIdOwnWrite = !0), this.nodeIdsWithParentIdOwnWrites.add(i))
        : s.recordPropertyOwnWrite(t, n, o, e);
    }
    getNodeIdsTouchedByRows(e, t) {
      let n = new Set();
      for (let o = e; o < t; o++) {
        let i = this.touchedNodeIdByRowIndex[o];
        i && n.add(i);
      }
      return n;
    }
    getNodeIdsWithOwnWrites() {
      return this.ownWriteSummaryByNodeId.keys();
    }
    getNodeIdsWithParentIdOwnWrites() {
      return this.nodeIdsWithParentIdOwnWrites.values();
    }
    getOwnWriteSummary(e) {
      return this.ownWriteSummaryByNodeId.get(e);
    }
    getOrCreateOwnWriteSummary(e) {
      let t = this.ownWriteSummaryByNodeId.get(e);
      if (t) return t;
      let n = new En(e);
      return (this.ownWriteSummaryByNodeId.set(e, n), n);
    }
  };
function zn(r, e) {
  if (r === V || e === "children" || e === T) return;
  let t = r.indexOf(".");
  return t < 0 ? r : r.slice(0, t);
}
var Gt = class {
    constructor() {
      u(this, "ancestorsByChangedNodeId", new Map());
      u(this, "changedNodeIdsByAncestorClassName", new Map());
    }
    setAncestorsForChangedNode(e, t) {
      if ((this.deleteAncestorsForChangedNode(e), t.size !== 0)) {
        this.ancestorsByChangedNodeId.set(e, t);
        for (let [n, o] of t) {
          let i = this.changedNodeIdsByAncestorClassName.get(n);
          i || ((i = new Map()), this.changedNodeIdsByAncestorClassName.set(n, i));
          for (let s of o) {
            let a = i.get(s);
            (a || ((a = new Set()), i.set(s, a)), a.add(e));
          }
        }
      }
    }
    deleteAncestorsForChangedNode(e) {
      let t = this.ancestorsByChangedNodeId.get(e);
      if (t) {
        this.ancestorsByChangedNodeId.delete(e);
        for (let [n, o] of t) {
          let i = this.changedNodeIdsByAncestorClassName.get(n);
          if (i)
            for (let s of o) {
              let a = i.get(s);
              a &&
                (a.delete(e),
                a.size === 0 && i.delete(s),
                i.size === 0 && this.changedNodeIdsByAncestorClassName.delete(n));
            }
        }
      }
    }
    hasChangesForAncestor(e, t) {
      let n = this.getChangedNodeIdsForAncestor(e, t);
      return n !== void 0 && n.size > 0;
    }
    getChangedNodeIdsForAncestor(e, t) {
      return this.changedNodeIdsByAncestorClassName.get(e)?.get(t);
    }
    *entriesForAncestor(e) {
      let t = this.changedNodeIdsByAncestorClassName.get(e);
      t && (yield* t);
    }
  },
  Yt = class {
    constructor() {
      u(this, "dependencyNodeIdsByChangedNodeId", new Map());
      u(this, "changedNodeIdsByDependencyNodeId", new Map());
    }
    setDependenciesForChangedNode(e, t) {
      if ((this.deleteDependenciesForChangedNode(e), t.size !== 0)) {
        this.dependencyNodeIdsByChangedNodeId.set(e, t);
        for (let n of t) {
          let o = this.changedNodeIdsByDependencyNodeId.get(n);
          (o || ((o = new Set()), this.changedNodeIdsByDependencyNodeId.set(n, o)), o.add(e));
        }
      }
    }
    deleteDependenciesForChangedNode(e) {
      let t = this.dependencyNodeIdsByChangedNodeId.get(e);
      if (t) {
        this.dependencyNodeIdsByChangedNodeId.delete(e);
        for (let n of t) {
          let o = this.changedNodeIdsByDependencyNodeId.get(n);
          o && (o.delete(e), o.size === 0 && this.changedNodeIdsByDependencyNodeId.delete(n));
        }
      }
    }
    addChangedNodeIdsForDependencyNode(e, t) {
      let n = this.changedNodeIdsByDependencyNodeId.get(e);
      if (n) for (let o of n) t.add(o);
    }
  },
  Xt = class {
    constructor(e, t, n, o) {
      this.ancestorClassName = e;
      this.ancestorNodeId = t;
      this.nodeChangeByNodeId = n;
      this.changedNodeIds = o;
    }
    get nodeChangeCount() {
      return this.changedNodeIds.size;
    }
    hasNodeChange(e) {
      return this.changedNodeIds.has(e);
    }
    getNodeChange(e) {
      if (this.hasNodeChange(e)) return this.nodeChangeByNodeId.get(e);
    }
    *nodeChanges() {
      for (let e of this.changedNodeIds) {
        let t = this.nodeChangeByNodeId.get(e);
        (l(t, "Missing node change for ancestor index", e), yield t);
      }
    }
  },
  Pn = class {
    constructor(e, t) {
      this.nodeChangeByNodeId = e;
      this.nodeChangeAncestorIndex = t;
    }
    get nodeChangeCount() {
      return this.nodeChangeByNodeId.size;
    }
    hasNodeChange(e) {
      return this.nodeChangeByNodeId.has(e);
    }
    getNodeChange(e) {
      return this.nodeChangeByNodeId.get(e);
    }
    nodeChanges() {
      return this.nodeChangeByNodeId.values();
    }
    hasChangesForAncestor(e, t) {
      return this.nodeChangeAncestorIndex.hasChangesForAncestor(e, t);
    }
    getChangesForAncestor(e, t) {
      let n = this.nodeChangeAncestorIndex.getChangedNodeIdsForAncestor(e, t);
      if (!(!n || n.size === 0)) return new Xt(e, t, this.nodeChangeByNodeId, n);
    }
    *changesForAncestor(e) {
      for (let [t, n] of this.nodeChangeAncestorIndex.entriesForAncestor(e))
        yield new Xt(e, t, this.nodeChangeByNodeId, n);
    }
  },
  Qt = class {
    constructor(e, t) {
      this.store = e;
      u(this, "ancestorClassNames");
      u(this, "ignoredPropertyKeys");
      u(this, "baseStore");
      u(this, "nodeChangeResolver");
      u(this, "nodeChanges");
      u(this, "branchCursor");
      u(this, "baseStoreCursors", []);
      u(this, "nodeChangeByNodeId", new Map());
      u(this, "nodeChangeAncestorIndex", new Gt());
      u(this, "nodeChangeDependencyIndex", new Yt());
      let n = e.base;
      (l(n, "Can't read node changes for main branch"),
        (this.baseStore = n),
        (this.ancestorClassNames = new Set(t.ancestorClassNames)),
        (this.ignoredPropertyKeys = new Set(t.ignoredPropertyKeys)),
        (this.nodeChangeResolver = new Ln(e)));
    }
    read() {
      if (!this.nodeChanges) return this.rebuildChanges();
      let e = qn(this.store),
        t = Yc(this.store);
      return this.cursorsAreCurrent(e, t)
        ? this.nodeChanges
        : this.canUpdateIncrementally(e, t)
          ? (this.updateIncrementally(e, t), this.nodeChanges)
          : this.rebuildChanges();
    }
    cursorsAreCurrent(e, t) {
      let n = this.branchCursor;
      if (!n || !Xc(n, e) || this.baseStoreCursors.length !== t.length) return !1;
      for (let o = 0; o < t.length; o++) {
        let i = this.baseStoreCursors[o],
          s = t[o];
        if (!i || !s || !Xc(i, s)) return !1;
      }
      return !0;
    }
    canUpdateIncrementally(e, t) {
      let n = this.branchCursor;
      if (!n || !Qc(n, e) || this.baseStoreCursors.length !== t.length) return !1;
      for (let o = 0; o < t.length; o++) {
        let i = this.baseStoreCursors[o],
          s = t[o];
        if (!i || !s || !Qc(i, s)) return !1;
      }
      return !0;
    }
    rebuildChanges() {
      ((this.nodeChangeByNodeId = new Map()),
        (this.nodeChangeAncestorIndex = new Gt()),
        (this.nodeChangeDependencyIndex = new Yt()),
        (this.nodeChanges = new Pn(this.nodeChangeByNodeId, this.nodeChangeAncestorIndex)));
      let e = this.store.getBranchOwnWriteIndex();
      for (let t of e.getNodeIdsWithOwnWrites()) {
        let n = this.nodeChangeResolver.resolveNodeChange(t);
        n && this.addNodeChange(n);
      }
      return (
        (this.branchCursor = qn(this.store)),
        (this.baseStoreCursors = Yc(this.store)),
        this.nodeChanges
      );
    }
    updateIncrementally(e, t) {
      let n = this.branchCursor;
      if (!n) throw new Error("Missing branch node change reader cursor");
      let o = this.store.getBranchOwnWriteIndex().getNodeIdsTouchedByRows(n.length, e.length),
        i = !1;
      for (let s = 0; s < t.length; s++) {
        let a = this.baseStoreCursors[s],
          c = t[s];
        !a ||
          !c ||
          (a.length !== c.length &&
            (i = this.collectBaseRowChanges(c.store, a.length, c.length, o) || i));
      }
      if (i)
        for (let s of this.store.getBranchOwnWriteIndex().getNodeIdsWithParentIdOwnWrites())
          o.add(s);
      (this.recomputeNodeChanges(o), (this.branchCursor = e), (this.baseStoreCursors = t));
    }
    collectBaseRowChanges(e, t, n, o) {
      let i = e.branchData.columns,
        s = !1;
      for (let a = t; a < n; a++) {
        let c = i.id.get(a),
          d = i.key.get(a),
          h = zn(c, d);
        h &&
          (o.add(h),
          (d === "parentid" || d === "__class") &&
            this.nodeChangeDependencyIndex.addChangedNodeIdsForDependencyNode(h, o),
          d === "parentid" && (s = !0));
      }
      return s;
    }
    recomputeNodeChanges(e) {
      if (e.size !== 0)
        for (let t of e) {
          this.removeNodeChange(t);
          let n = this.nodeChangeResolver.resolveNodeChange(t);
          n && this.addNodeChange(n);
        }
    }
    addNodeChange(e) {
      if (this.shouldIgnoreNodeChange(e)) return;
      let t = new Set(),
        n = this.getNodeChangeAncestors(e, t);
      (this.nodeChangeByNodeId.set(e.nodeId, e),
        this.nodeChangeDependencyIndex.setDependenciesForChangedNode(e.nodeId, t),
        n.size !== 0 && this.nodeChangeAncestorIndex.setAncestorsForChangedNode(e.nodeId, n));
    }
    removeNodeChange(e) {
      (this.nodeChangeByNodeId.delete(e),
        this.nodeChangeAncestorIndex.deleteAncestorsForChangedNode(e),
        this.nodeChangeDependencyIndex.deleteDependenciesForChangedNode(e));
    }
    shouldIgnoreNodeChange(e) {
      if (e.type !== "updated" || this.ignoredPropertyKeys.size === 0) return !1;
      for (let t of e.changedKeys.values())
        for (let n of t) if (!this.ignoredPropertyKeys.has(n)) return !1;
      return !0;
    }
    getNodeChangeAncestors(e, t) {
      let n = new Map();
      switch (e.type) {
        case "added":
        case "updated":
          this.addNearestNodeChangeAncestor(this.store, e.nodeId, n, t);
          break;
        case "removed":
          this.addNearestNodeChangeAncestor(this.baseStore, e.nodeId, n, t);
          break;
        case "moved":
          (this.addNearestNodeChangeAncestor(this.baseStore, e.nodeId, n, t),
            this.addNearestNodeChangeAncestor(this.store, e.nodeId, n, t));
          break;
      }
      return n;
    }
    addNearestNodeChangeAncestor(e, t, n, o) {
      let i = new Set(),
        s = t;
      for (; s; ) {
        if (i.has(s)) return;
        (i.add(s), o.add(s));
        let a = e.getObjectKey(s, "__class");
        if (a && this.ancestorClassNames.has(a)) {
          let d = n.get(a);
          (d || ((d = new Set()), n.set(a, d)), d.add(s));
          return;
        }
        let c = e.getParentId(s);
        s = typeof c == "string" ? c : void 0;
      }
    }
  },
  Ln = class {
    constructor(e) {
      this.store = e;
      u(this, "baseStore");
      let t = e.base;
      (l(t, "Can't get node changes for main branch"), (this.baseStore = t));
    }
    resolveNodeChange(e) {
      let t = this.store.getBranchOwnWriteIndex().getOwnWriteSummary(e);
      if (!t) return;
      let n = new Set();
      if (t.hasParentIdOwnWrite) return this.resolveHierarchyNodeChange(t, n);
      let o = this.store.getHierarchy().getParentId(t.nodeId);
      return this.createNodeChangeUpdated(t, typeof o == "string" ? o : void 0, n);
    }
    resolveHierarchyNodeChange(e, t) {
      let n = e.nodeId,
        o = this.store.getHierarchy(),
        i = o.getOwnParentRowIdx(n);
      l(i !== void 0, "Can't find parentId row index for", n);
      let a = this.store.branchData.columns.user.get(i),
        c = this.baseStore.getHierarchy().getParentId(n),
        d = o.getParentId(n);
      if (typeof c == "string" && typeof d == "string")
        return c === d && this.hasSameChildIndex(n, c)
          ? this.createNodeChangeUpdated(e, c, t)
          : (t.add(a), this.createNodeChangeMoved(e, c, d, t));
      if (typeof c == "string") return (t.add(a), this.createNodeChangeRemoved(e, c, t));
      if (typeof d == "string") return (t.add(a), this.createNodeChangeAdded(e, d, t));
    }
    resolveChangedKeys(e, t) {
      if (!this.store.getHierarchy().inTree(e.nodeId)) return;
      let n = this.store.branchData.columns,
        o = new Map();
      for (let [i, s] of e.latestPropertyRowIndexByStoreId) {
        let a = new Set();
        for (let [c, d] of s) {
          let h = n.value.get(d),
            f = this.baseStore.getCurrentValue(i, c);
          if (Il(h, f)) continue;
          let p = n.user.get(d);
          (t.add(p), a.add(c));
        }
        a.size > 0 && o.set(i, a);
      }
      if (o.size > 0) return o;
    }
    hasSameChildIndex(e, t) {
      let n = this.baseStore.getHierarchy().getChildIndex(t, e),
        o = this.store.getHierarchy().getChildIndex(t, e);
      return n >= 0 && n === o;
    }
    createNodeChangeAdded(e, t, n) {
      return {
        type: "added",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        toParentId: t,
        actors: n,
        changedKeys: this.resolveChangedKeys(e, n) ?? new Map(),
      };
    }
    createNodeChangeRemoved(e, t, n) {
      return {
        type: "removed",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        fromParentId: t,
        actors: n,
      };
    }
    createNodeChangeMoved(e, t, n, o) {
      return {
        type: "moved",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        fromParentId: t,
        toParentId: n,
        actors: o,
        changedKeys: this.resolveChangedKeys(e, o),
      };
    }
    createNodeChangeUpdated(e, t, n) {
      let o = this.resolveChangedKeys(e, n);
      if (o)
        return {
          type: "updated",
          nodeId: e.nodeId,
          ...this.resolveNodeMeta(e.nodeId),
          parentId: t,
          actors: n,
          changedKeys: o,
        };
    }
    resolveNodeMeta(e) {
      let t = this.resolveNodeMetaValue(e, "__class");
      l(t, "Can't find __class for", e);
      let n = this.resolveNodeMetaValue(e, "name");
      return { __class: t, name: n };
    }
    resolveNodeMetaValue(e, t) {
      let n = this.store.getCurrentValue(e, t);
      if (
        typeof n == "string" ||
        ((n = this.baseStore.getCurrentValue(e, t)), typeof n == "string")
      )
        return n;
    }
  };
function Yc(r) {
  let e = [],
    t = r.base;
  for (; t; ) {
    let n = qn(t);
    (e.push(n), (t = t.base));
  }
  return e;
}
function qn(r) {
  return { store: r, branchData: r.branchData, length: r.length };
}
function Xc(r, e) {
  return r.store === e.store && r.branchData === e.branchData && r.length === e.length;
}
function Qc(r, e) {
  return r.store === e.store && r.branchData === e.branchData && r.length <= e.length;
}
function Il(r, e) {
  return !!(
    e === r ||
    ((e === void 0 || e === g) && (r === void 0 || r === g)) ||
    (Array.isArray(e) && Array.isArray(r) && $t(e, r))
  );
}
var G = class r {
  constructor(e, t) {
    this.parentHistory = e;
    this.parentOverrides = t;
  }
  clone() {
    let e = new Map();
    for (let [t, n] of this.parentOverrides) {
      let o = new Map();
      for (let [i, s] of n) {
        let a = new Map();
        for (let [c, d] of s) a.set(c, { ...d });
        o.set(i, a);
      }
      e.set(t, o);
    }
    return new r([...this.parentHistory], e);
  }
};
var bt = "@";
function ed(r) {
  if (r === g) return !0;
  if (typeof r != "string") return !1;
  let e = r.indexOf(bt);
  return e === -1 ? !1 : r.indexOf(bt, e + 1) === -1;
}
function er(r, e) {
  return `${r}${bt}${e}`;
}
function tr(r) {
  l(r !== g, "trying to get positionId of deleted child");
  let e = r.indexOf(bt);
  return r.slice(e + 1);
}
function q(r) {
  if (r === g) return g;
  let e = r.indexOf(bt);
  return r.slice(0, e);
}
var rr = class r {
  constructor(e, t, n, o) {
    this.source = e;
    this.target = t;
    this.windowStartIdx = n;
    u(this, "hierarchy");
    u(this, "parentHistory", []);
    u(this, "parentOverrides", new Map());
    u(this, "visited", new Set());
    u(this, "retainedNodeIds");
    ((this.hierarchy = e.getHierarchy()), (this.retainedNodeIds = o));
  }
  static run(e, t, n, o = new Set()) {
    return new r(e, t, n, o).run();
  }
  run() {
    (l(
      this.source.branchId === this.target.branchId,
      "Cannot compact data from different branches",
      this.source.branchId,
      "!=",
      this.target.branchId
    ),
      this.emitObjectRows(Ie));
    let e = this.source.getRoot();
    (l(e, "Store has no root"), this.emitObjectRows(e));
    for (let t of this.hierarchy.getChildrenIds(e)) this.depthFirstWalk(t);
    return (
      this.emitBranchDeletedNodes(),
      this.emitRetainedNodes(),
      this.emitInWindowParentIdRows(),
      this.sortParentHistory(),
      (this.target.branchData.hierarchyData = new G(this.parentHistory, this.parentOverrides)),
      this.target.manifest.copyClientStateFrom(this.source.manifest),
      this.target.updateCaches(this.target.branchData.hierarchyData),
      (this.target.branchData.metadata.seq = this.source.branchData.metadata.seq),
      this.target
    );
  }
  sortParentHistory() {
    let e = this.target.branchData.columns;
    this.parentHistory.sort((t, n) => {
      let o = e.seq.get(t),
        i = e.seq.get(n);
      return o === i ? e.client.get(t) - e.client.get(n) : o - i;
    });
  }
  depthFirstWalk(e) {
    (this.emitObjectRows(e), this.emitResolvedParent(e));
    for (let t of this.hierarchy.getChildrenIds(e)) this.depthFirstWalk(t);
  }
  emitInWindowParentIdRows() {
    let e = this.source,
      t = this.hierarchy;
    for (let n = this.windowStartIdx; n < e.length; n++) {
      if (e.branchData.columns.key.get(n) !== "parentid") continue;
      let i = e.branchData.getRow(n);
      if (this.target.manifest.hasTimestamp(i.client, i.seq)) continue;
      let s = i.id,
        a = t.getOwnParentRowIdx(s),
        c = t.getParentId(s) === g;
      if (!(c && a !== void 0 && a < this.windowStartIdx)) {
        if (c && a === n) {
          (this.emitObjectRows(s), this.emitResolvedParent(s));
          continue;
        }
        this.emitParentIdRow(i);
      }
    }
  }
  emitRow(e) {
    return (
      this.target.branchData.manifest.addTimestamp(e.client, e.seq),
      this.target.branchData.addRow(e)
    );
  }
  emitParentIdRow(e) {
    this.source.base && e.id !== V && e.value !== g && this.retainedNodeIds.add(e.id);
    let t = this.emitRow(e);
    (this.parentHistory.push(t), this.maybeEmitOverride(e, t));
  }
  emitBranchDeletedNodes() {
    if (!this.source.base) return;
    let e = this.source.getHierarchy(),
      t = new Set();
    for (let n of e.parentHistory) {
      let o = this.source.branchData.columns.id.get(n);
      t.has(o) ||
        (t.add(o),
        e.getOwnParentId(o) === g &&
          this.source.base.getParentId(o) !== void 0 &&
          (this.emitObjectRows(o), this.emitResolvedParent(o)));
    }
  }
  emitRetainedNodes() {
    for (let e of this.retainedNodeIds)
      this.visited.has(e) || (this.emitObjectRows(e), this.emitResolvedParent(e));
  }
  emitObjectRows(e) {
    if (this.visited.has(e)) return;
    this.visited.add(e);
    let t = this.source.latest.getOwnLatest(e);
    if (t)
      for (let o of t.ownValues()) {
        let i = this.source.branchData.getRow(o);
        this.emitRow(i);
      }
    let n = this.source.latest.getLatest(e);
    if (n)
      for (let o of n.keys()) {
        let i = this.source.getCurrentValue(e, o);
        (typeof i != "string" && !Array.isArray(i)) || this.followReferences(i);
      }
  }
  emitMergeableArrayRows(e) {
    if (this.visited.has(e)) return;
    this.visited.add(e);
    let t = this.source.latest.getOwnLatest(e);
    if (t)
      for (let [o, i] of t.ownEntries()) {
        let s = this.source.branchData.getRow(i);
        this.emitRow(s);
      }
    let n = this.source.latest.getLatest(e);
    if (n)
      for (let o of n.keys())
        o !== T && this.source.getCurrentValue(e, o) !== g && this.emitObjectRows(o);
  }
  followReferences(e) {
    let t = Y(e);
    if (t) {
      this.emitObjectRows(t);
      return;
    }
    let n = It(e);
    if (n) {
      this.emitMergeableArrayRows(n);
      return;
    }
    if (Array.isArray(e)) for (let o of e) this.followReferences(o);
  }
  emitResolvedParent(e) {
    let n = this.hierarchy.getOwnNodeData(e)?.resolvedParentId;
    if (n === void 0) return;
    let o = this.source.branchData.getRow(n);
    (this.emitParentIdRow(o), n >= this.windowStartIdx && this.emitPreWindowAnchor(o));
  }
  emitPreWindowAnchor(e) {
    let t = this.source.getHierarchy(),
      n = t.getParentBySeq(e.id, e.seq, !1);
    for (; n && n.index >= this.windowStartIdx; ) n = t.getParentBySeq(n.id, n.seq, !1);
    if (!n) return;
    let o = this.source.branchData.getRow(n.index);
    this.target.manifest.hasTimestamp(o.client, o.seq) || this.emitParentIdRow(o);
  }
  maybeEmitOverride(e, t) {
    let n = this.hierarchy.getParentOverride(e.id, e.seq, e.client);
    if (!n) return;
    let o = { ...n, rowIdx: t };
    this.addParentOverride(e, o);
    let i = this.source.getHierarchy(),
      s = i.getParentBySeq(e.id, e.seq, !1);
    for (; s && q(s.value) !== q(o.parentTo); ) s = i.getParentBySeq(s.id, s.seq, !1);
    if (!s) return;
    let a = this.source.branchData.getRow(s.index);
    this.target.manifest.hasTimestamp(a.client, a.seq) || this.emitParentIdRow(a);
  }
  addParentOverride(e, t) {
    let n = this.parentOverrides.get(e.id);
    n || ((n = new Map()), this.parentOverrides.set(e.id, n));
    let o = n.get(e.seq);
    (o || ((o = new Map()), n.set(e.seq, o)), o.set(e.client, t));
  }
};
var X,
  Q,
  ee,
  Ee = class {
    constructor(e) {
      we(this, X, new Set());
      we(this, Q, new Set());
      we(this, ee);
      jr(this, ee, e);
    }
    add(e) {
      return (I(this, Q).delete(e), I(this, X).add(e), this);
    }
    delete(e) {
      let t = I(this, X).delete(e);
      if (I(this, ee)?.has(e)) {
        let n = I(this, Q).has(e);
        return (I(this, Q).add(e), t || !n);
      }
      return t;
    }
    reset(e) {
      (I(this, X).delete(e), I(this, Q).delete(e));
    }
    has(e) {
      return I(this, X).has(e) ? !0 : I(this, Q).has(e) ? !1 : (I(this, ee)?.has(e) ?? !1);
    }
    clear() {
      if ((I(this, X).clear(), I(this, Q).clear(), I(this, ee)))
        for (let e of I(this, ee)) I(this, Q).add(e);
    }
    get size() {
      let e = I(this, X).size;
      if (!I(this, ee)) return e;
      for (let t of I(this, ee)) !I(this, X).has(t) && !I(this, Q).has(t) && (e += 1);
      return e;
    }
    *values() {
      for (let e of I(this, X)) yield e;
      if (I(this, ee))
        for (let e of I(this, ee)) I(this, X).has(e) || I(this, Q).has(e) || (yield e);
    }
    keys() {
      return this.values();
    }
    *entries() {
      for (let e of this.values()) yield [e, e];
    }
    forEach(e, t) {
      for (let n of this.values()) e.call(t, n, n, this);
    }
    [Symbol.iterator]() {
      return this.values();
    }
  };
((X = new WeakMap()), (Q = new WeakMap()), (ee = new WeakMap()));
var L,
  te,
  Z,
  ze = class {
    constructor(e) {
      we(this, L, new Map());
      we(this, te, new Set());
      we(this, Z);
      jr(this, Z, e);
    }
    get(e) {
      if (I(this, L).has(e)) return I(this, L).get(e);
      if (!I(this, te).has(e)) return I(this, Z)?.get(e);
    }
    has(e) {
      return I(this, L).has(e) ? !0 : I(this, te).has(e) ? !1 : (I(this, Z)?.has(e) ?? !1);
    }
    set(e, t) {
      return (I(this, te).delete(e), I(this, L).set(e, t), this);
    }
    delete(e) {
      let t = I(this, L).delete(e);
      if (I(this, Z)?.has(e)) {
        let n = I(this, te).has(e);
        return (I(this, te).add(e), t || !n);
      }
      return t;
    }
    clear() {
      if ((I(this, L).clear(), I(this, te).clear(), I(this, Z)))
        for (let e of I(this, Z).keys()) I(this, te).add(e);
    }
    get size() {
      let e = I(this, L).size;
      if (!I(this, Z)) return e;
      for (let t of I(this, Z).keys()) !I(this, L).has(t) && !I(this, te).has(t) && (e += 1);
      return e;
    }
    *entries() {
      for (let e of I(this, L).entries()) yield e;
      if (I(this, Z))
        for (let [e, t] of I(this, Z).entries())
          I(this, L).has(e) || I(this, te).has(e) || (yield [e, t]);
    }
    *keys() {
      for (let [e] of this.entries()) yield e;
    }
    *values() {
      for (let [, e] of this.entries()) yield e;
    }
    forEach(e, t) {
      for (let [n, o] of this.entries()) e.call(t, o, n, this);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    getOwned(e) {
      return I(this, L).get(e);
    }
    ensureOwned(e, t) {
      let n = I(this, L).get(e);
      if (n !== void 0) return n;
      let o = t(this.get(e));
      return (this.set(e, o), o);
    }
  };
((L = new WeakMap()), (te = new WeakMap()), (Z = new WeakMap()));
var nr = class {
    constructor() {
      u(this, "classToIds", new Map());
      u(this, "masterIdToReplicaIds", new Map());
      u(this, "formContainerIds", new Set());
      u(this, "withDataIdentifierIds", new Set());
      u(this, "dataIdentifierToIds", new Map());
    }
    getMutableIndexSet(e, t) {
      let n = e.get(t);
      return (n || ((n = new Set()), e.set(t, n)), n);
    }
    removeFromIndexSet(e, t, n, o = !1) {
      let i = e.get(t);
      i && (i.delete(n), o && i.size === 0 && e.delete(t));
    }
    syncAddedClass(e, t) {
      this.getMutableIndexSet(this.classToIds, e).add(t);
    }
    syncRemovedClass(e, t) {
      this.removeFromIndexSet(this.classToIds, e, t);
    }
    syncAddedFormContainer(e) {
      this.formContainerIds.add(e);
    }
    syncRemovedFormContainer(e) {
      this.formContainerIds.delete(e);
    }
    syncAddedWithDataIdentifier(e) {
      this.withDataIdentifierIds.add(e);
    }
    syncRemovedWithDataIdentifier(e) {
      this.withDataIdentifierIds.delete(e);
    }
    syncAddedDataIdentifier(e, t) {
      this.getMutableIndexSet(this.dataIdentifierToIds, e).add(t);
    }
    syncRemovedDataIdentifier(e, t) {
      this.removeFromIndexSet(this.dataIdentifierToIds, e, t, !0);
    }
    syncAddedReplicaOwner(e, t) {
      this.getMutableIndexSet(this.masterIdToReplicaIds, e).add(t);
    }
    syncRemovedReplicaOwner(e, t) {
      this.removeFromIndexSet(this.masterIdToReplicaIds, e, t);
    }
    syncAddedNodeIndexes(e, t) {
      t.inTree &&
        (t.__class && this.syncAddedClass(t.__class, e),
        t.isFormContainer && this.syncAddedFormContainer(e),
        t.dataIdentifier !== void 0 && this.syncAddedWithDataIdentifier(e),
        t.dataIdentifier && this.syncAddedDataIdentifier(t.dataIdentifier, e));
    }
    syncRemovedNodeIndexes(e, t) {
      (t.__class && this.syncRemovedClass(t.__class, e),
        this.syncRemovedFormContainer(e),
        this.syncRemovedWithDataIdentifier(e),
        t.dataIdentifier && this.syncRemovedDataIdentifier(t.dataIdentifier, e));
    }
  },
  or = class {
    constructor(e) {
      this.base = e;
      u(this, "classToIds");
      u(this, "masterIdToReplicaIds");
      u(this, "formContainerIds");
      u(this, "withDataIdentifierIds");
      u(this, "dataIdentifierToIds");
      ((this.classToIds = new ze(this.base.classToIds)),
        (this.masterIdToReplicaIds = new ze(this.base.masterIdToReplicaIds)),
        (this.formContainerIds = new Ee(this.base.formContainerIds)),
        (this.withDataIdentifierIds = new Ee(this.base.withDataIdentifierIds)),
        (this.dataIdentifierToIds = new ze(this.base.dataIdentifierToIds)));
    }
    getMutableIndexSet(e, t) {
      return e.ensureOwned(t, (n) => new Ee(n));
    }
    removeFromIndexSet(e, t, n, o = !1) {
      if (!e.get(t)) return;
      this.getMutableIndexSet(e, t).delete(n);
    }
    syncAddedSetIndex(e, t, n) {
      t ? e.reset(n) : e.add(n);
    }
    syncRemovedSetIndex(e, t, n) {
      t ? e.delete(n) : e.reset(n);
    }
    syncAddedMapSetIndex(e, t, n, o, i = !1) {
      if (!i && (t.get(n)?.has(o) ?? !1)) {
        e.getOwned(n)?.reset(o);
        return;
      }
      this.getMutableIndexSet(e, n).add(o);
    }
    syncRemovedMapSetIndex(e, t, n, o, i = !1, s = !1) {
      let a = !i && (t.get(n)?.has(o) ?? !1),
        c = !i && t.has(n);
      if (a) {
        this.getMutableIndexSet(e, n).delete(o);
        return;
      }
      let d = e.getOwned(n);
      (d?.reset(o), s && d?.size === 0 && !c && e.delete(n));
    }
    syncAddedClass(e, t, n = !1) {
      this.syncAddedMapSetIndex(this.classToIds, this.base.classToIds, e, t, n);
    }
    syncRemovedClass(e, t, n = !1) {
      this.syncRemovedMapSetIndex(this.classToIds, this.base.classToIds, e, t, n);
    }
    syncAddedFormContainer(e, t = !1) {
      this.syncAddedSetIndex(this.formContainerIds, !t && this.base.formContainerIds.has(e), e);
    }
    syncRemovedFormContainer(e, t = !1) {
      this.syncRemovedSetIndex(this.formContainerIds, !t && this.base.formContainerIds.has(e), e);
    }
    syncAddedWithDataIdentifier(e, t = !1) {
      this.syncAddedSetIndex(
        this.withDataIdentifierIds,
        !t && this.base.withDataIdentifierIds.has(e),
        e
      );
    }
    syncRemovedWithDataIdentifier(e, t = !1) {
      this.syncRemovedSetIndex(
        this.withDataIdentifierIds,
        !t && this.base.withDataIdentifierIds.has(e),
        e
      );
    }
    syncAddedDataIdentifier(e, t, n = !1) {
      this.syncAddedMapSetIndex(this.dataIdentifierToIds, this.base.dataIdentifierToIds, e, t, n);
    }
    syncRemovedDataIdentifier(e, t, n = !1) {
      this.syncRemovedMapSetIndex(
        this.dataIdentifierToIds,
        this.base.dataIdentifierToIds,
        e,
        t,
        n,
        !0
      );
    }
    syncAddedReplicaOwner(e, t) {
      this.getMutableIndexSet(this.masterIdToReplicaIds, e).add(t);
    }
    syncRemovedReplicaOwner(e, t) {
      this.removeFromIndexSet(this.masterIdToReplicaIds, e, t);
    }
    syncAddedNodeIndexes(e, t, n = !1) {
      (t.__class && this.syncAddedClass(t.__class, e, n),
        t.isFormContainer && this.syncAddedFormContainer(e, n),
        t.dataIdentifier !== void 0 && this.syncAddedWithDataIdentifier(e, n),
        t.dataIdentifier && this.syncAddedDataIdentifier(t.dataIdentifier, e, n));
    }
    syncRemovedNodeIndexes(e, t, n = !1) {
      (t.__class && this.syncRemovedClass(t.__class, e, n),
        this.syncRemovedFormContainer(e, n),
        this.syncRemovedWithDataIdentifier(e, n),
        t.dataIdentifier && this.syncRemovedDataIdentifier(t.dataIdentifier, e, n));
    }
  };
var Pe = 62,
  Fn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  td = {};
for (let r = 0; r < Fn.length; r++) td[Fn[r]] = r;
function Kn(r, e) {
  if (
    (l(r >= 0, "Cannot encode negative number:", r),
    l(Number.isInteger(r), "Cannot encode non-integer:", r),
    r === 0)
  )
    return "0".repeat(e);
  let t = [],
    n = r;
  for (; n > 0; ) (t.push(Fn[n % Pe]), (n = Math.floor(n / Pe)));
  let o = t.reverse().join("");
  return (
    l(o.length <= e, "Encoded value exceeds width:", o, "from", r, "width", e),
    o.padStart(e, "0")
  );
}
function Un(r) {
  l(r.length > 0, "Cannot decode empty string");
  let e = 0;
  for (let t = 0; t < r.length; t++) {
    let n = r[t],
      o = td[n];
    (l(o !== void 0, "Invalid base62 character:", n, "in string", r), (e = e * Pe + o));
  }
  return (l(e <= Number.MAX_SAFE_INTEGER, "Decoded number exceeds MAX_SAFE_INTEGER"), e);
}
var Ne = 5,
  rd = 6,
  $n = Ne + rd;
function Sl(r) {
  let e = Kn(r.position, Ne),
    t = Kn(r.client, rd);
  return e + t;
}
function wl(r) {
  l(r.length === $n, "Component string must be", $n, "chars, got", r.length);
  let e = r.slice(0, Ne),
    t = r.slice(Ne);
  return { position: Un(e), client: Un(t) };
}
var Vn = ":";
function Se(r) {
  return r.map(Sl).join(Vn);
}
function ke(r) {
  l(r.length > 0, "Position ID is empty");
  let e = r.split(Vn);
  return (l(e.length > 0, "Position ID has no parts"), e.map(wl));
}
function ir(r) {
  if (typeof r != "string" || r.length === 0) return !1;
  let e = r.split(Vn);
  for (let t of e) if (t.length !== $n) return !1;
  return !0;
}
var vl = 0,
  xl = 62 ** 5,
  Cl = 0,
  Rl = Number.MAX_SAFE_INTEGER;
function sr(r, e, t) {
  r &&
    e &&
    (l(r <= e, "Invalid boundaries", r, ">", e),
    l(r !== e, "Trying to allocate between equal boundarys (same position, same client)", r));
  let n = r ? ke(r) : [],
    o = e ? ke(e) : [],
    i = Nl(n, o, t);
  return Se(i);
}
var nd;
function Nl(r, e, t) {
  let n = [],
    o = 0,
    i = !1;
  for (;;) {
    l(o < 2e3, "Infinite loop");
    let s = o < r.length,
      a = o < e.length,
      c = s ? r[o] : { position: vl, client: Cl },
      d = a && !i ? e[o] : { position: xl, client: Rl };
    if (d.position - c.position > 1) {
      let h;
      nd
        ? (h = nd)
        : e.length === 0
          ? (h = (p, b) => od(p, b, 4096, 2))
          : i
            ? (h = (p, b) => od(p, b, 8192, 2))
            : (h = kl);
      let f = h(c.position + 1, d.position - 1);
      return (n.push({ position: f, client: t }), n);
    }
    if ((n.push({ ...c }), !i)) {
      let h = c.position < d.position,
        f = a && c.position === d.position && c.client < d.client;
      i = h || f;
    }
    o++;
  }
}
function od(r, e, t, n) {
  l(r <= e, "Invalid range:", r, ">", e);
  let o = Math.min(e, r + n),
    i = Math.min(e, o + t);
  return id(o, i);
}
function kl(r, e) {
  l(r <= e, "Invalid range:", r, ">", e);
  let t = Math.floor((r + e) / 2),
    n = Math.min(8, Math.floor((e - r) / 4)),
    o = Math.max(r, t - n),
    i = Math.min(e, t + n);
  return id(o, i);
}
function id(r, e) {
  let t = e - r + 1;
  return Math.floor(Math.random() * t) + r;
}
var Zn = class {
    constructor(e) {
      u(this, "base");
      u(this, "id", "");
      u(this, "parentIdHistory", []);
      u(this, "resolvedParentId");
      u(this, "childrenById");
      u(this, "childrenSorted");
      u(this, "childrenSortedLastCounter", 0);
      u(this, "childrenSortedCurrentCounter", 0);
      u(this, "childrenSortedBaseCounter", 0);
      u(this, "inTree", !1);
      u(this, "inMaster");
      u(this, "___class");
      u(this, "_isMaster", !1);
      u(this, "_isFormContainer", !1);
      u(this, "_dataIdentifier");
      u(this, "_replicaInfoMaster");
      e && (this.base = { data: e, overrides: new Set() });
    }
    get __class() {
      return !this.base || this.base.overrides.has("__class")
        ? this.___class
        : this.base.data.__class;
    }
    set __class(e) {
      (this.base?.overrides.add("__class"), (this.___class = e));
    }
    get isMaster() {
      return !this.base || this.base.overrides.has("isMaster")
        ? this._isMaster
        : this.base.data.isMaster;
    }
    set isMaster(e) {
      (this.base?.overrides.add("isMaster"), (this._isMaster = e));
    }
    get isFormContainer() {
      return !this.base || this.base.overrides.has("isFormContainer")
        ? this._isFormContainer
        : this.base.data.isFormContainer;
    }
    set isFormContainer(e) {
      (this.base?.overrides.add("isFormContainer"), (this._isFormContainer = e));
    }
    get dataIdentifier() {
      return !this.base || this.base.overrides.has("dataIdentifier")
        ? this._dataIdentifier
        : this.base.data.dataIdentifier;
    }
    set dataIdentifier(e) {
      (this.base?.overrides.add("dataIdentifier"), (this._dataIdentifier = e));
    }
    get replicaInfoMaster() {
      return !this.base || this.base.overrides.has("replicaInfoMaster")
        ? this._replicaInfoMaster
        : this.base.data.replicaInfoMaster;
    }
    set replicaInfoMaster(e) {
      (this.base?.overrides.add("replicaInfoMaster"), (this._replicaInfoMaster = e));
    }
  },
  St = class {
    constructor(e, t, n) {
      this.store = e;
      this.latest = t;
      this.base = n;
      u(this, "rootNodeId");
      u(this, "indexes");
      u(this, "hierarchyChanged", !1);
      u(this, "nodeData", new Map());
      u(this, "parentHistory", []);
      u(this, "parentOverrides", new Map());
      u(this, "branchData");
      u(this, "cachedInTreeCount", 0);
      ((this.branchData = e.branchData),
        this.base
          ? ((this.indexes = new or(this.base.indexes)), (this.rootNodeId = this.base.rootNodeId))
          : (this.indexes = new nr()));
    }
    get classToIds() {
      return this.indexes.classToIds;
    }
    get masterIdToReplicaIds() {
      return this.indexes.masterIdToReplicaIds;
    }
    get formContainerIds() {
      return this.indexes.formContainerIds;
    }
    get withDataIdentifierIds() {
      return this.indexes.withDataIdentifierIds;
    }
    get dataIdentifierToIds() {
      return this.indexes.dataIdentifierToIds;
    }
    getRootId() {
      return this.rootNodeId;
    }
    get inTreeCount() {
      if (!this.base) return this.cachedInTreeCount;
      let e = this.base?.inTreeCount ?? 0;
      for (let [t, n] of this.nodeData) {
        if (t === this.rootNodeId) continue;
        let o = this.base?.inTree(t) ?? !1;
        e += Number(n.inTree) - Number(o);
      }
      return e;
    }
    sizeWithoutReplicas() {
      return this.inTreeCount + 1;
    }
    has(e) {
      return !!(e === this.rootNodeId || this.inTree(e) || this.getLatestReplicaChild(e));
    }
    inTree(e) {
      let t = this.getOwnNodeData(e);
      return t ? t.inTree : (this.base?.inTree(e) ?? !1);
    }
    getNodeData(e) {
      let t = this.nodeData.get(e);
      return t || this.base?.getNodeData(e);
    }
    getOwnNodeData(e) {
      return this.nodeData.get(e);
    }
    ensureNodeData(e) {
      let t = this.nodeData.get(e);
      if (!t) {
        let n = this.base?.ensureNodeData(e);
        ((t = new Zn(n)),
          (t.id = e),
          n && ((t.inTree = n.inTree), (t.inMaster = n.inMaster)),
          this.nodeData.set(e, t));
      }
      return t;
    }
    getLatestReplicaChild(e) {
      if (e.length < 11) return;
      let n = e.slice(0, 9),
        o = this.getNodeData(n);
      if (o && this.inTree(n)) {
        if (!o.replicaInfoMaster) return;
        let i = o.replicaInfoMaster,
          s = e.slice(9),
          a = this.getNodeData(s);
        return !a || !this.inTree(s) || a.inMaster !== i ? void 0 : [n, o, s, a];
      }
      for (let i = 7; i < e.length - 9 + 2; i++)
        if (i !== 9 && ((n = e.slice(0, i)), (o = this.getNodeData(n)), o && this.inTree(n))) {
          if (!o?.replicaInfoMaster) return;
          let s = o.replicaInfoMaster,
            a = e.slice(i),
            c = this.getNodeData(a);
          return !c || !this.inTree(a) || c.inMaster !== s ? void 0 : [n, o, a, c];
        }
    }
    computeTreeHash() {
      let e = 0,
        t = this;
      function n(o) {
        e = xi(o, e);
        let i = t.getChildrenIds(o);
        for (let s of i) n(s);
      }
      return (this.rootNodeId && n(this.rootNodeId), e);
    }
    addChild(e, t, n, o = !1) {
      if (
        ((e.childrenById ??= new Map()),
        e.childrenById.set(t, n),
        !o || !e.childrenSorted || this.isChildrenDirty(e.id))
      ) {
        e.childrenSortedCurrentCounter += 1;
        return;
      }
      e.childrenSortedCurrentCounter += 1;
      let i = e.childrenSorted,
        s = ve(i, t, (a, c) => {
          let d = this.getHierarchyKey(a);
          l(d !== void 0 && d !== g, "invalid key in hierarchy, row", a);
          let h = this.getHierarchyKey(c);
          if ((l(h !== void 0 && h !== g, "invalid key in hierarchy, row", c), d < h)) return -1;
          if (d > h) return 1;
          throw new Error("Hierarchy keys should be unique:" + d);
        });
      (i.splice(s, 0, t), (e.childrenSortedLastCounter = e.childrenSortedCurrentCounter));
    }
    removeChild(e, t) {
      let n = this.ensureNodeData(e);
      (n.childrenById?.delete(t), (n.childrenSortedCurrentCounter += 1));
    }
    updateReachability(e, t, n) {
      (e.inTree === t && e.inMaster === n) ||
        (!this.base &&
          e.id !== this.rootNodeId &&
          e.inTree !== t &&
          (this.cachedInTreeCount += Number(t) - Number(e.inTree)),
        (e.inTree = t),
        (e.inMaster = n));
    }
    markInTree(e, t, n, o = new Set(), i = !1) {
      if (e.inTree && !o.has(n)) {
        (o.add(n),
          this.updateReachability(t, !0, e.isMaster ? e.id : e.inMaster),
          this.indexes.syncAddedNodeIndexes(n, t, i));
        for (let s of this.getChildrenIds(n)) {
          let a = this.ensureNodeData(s);
          a.inTree || this.markInTree(t, a, s, o, i);
        }
      }
    }
    clearInTree(e, t, n = new Set()) {
      if (!n.has(t)) {
        (n.add(t),
          e.inTree && this.updateReachability(e, !1, void 0),
          this.indexes.syncRemovedNodeIndexes(t, e));
        for (let o of this.getChildrenIds(t)) {
          let i = this.ensureNodeData(o);
          this.clearInTree(i, o, n);
        }
      }
    }
    applyMasterState(e) {
      let t = e.isMaster ? e.id : e.inMaster;
      for (let n of this.getChildrenIds(e.id)) {
        let o = this.ensureNodeData(n);
        (this.updateReachability(o, o.inTree, t), this.applyMasterState(o));
      }
    }
    updateParent(e, t, n, o, i) {
      i && i !== g && this.removeChild(i, t);
      let s = q(n);
      if (s !== g) {
        let a = this.ensureNodeData(s);
        (this.addChild(a, t, o, !0),
          a.inTree ? this.markInTree(a, e, t, void 0, !0) : this.clearInTree(e, t));
      } else this.clearInTree(e, t);
    }
    getChildrenCounter(e) {
      let t = this.getOwnNodeData(e);
      return t ? t.childrenSortedCurrentCounter : (this.base?.getChildrenCounter(e) ?? 0);
    }
    isChildrenDirty(e) {
      let t = this.getOwnNodeData(e);
      if (!t?.childrenSorted || t.childrenSortedLastCounter !== t.childrenSortedCurrentCounter)
        return !0;
      if (this.base) {
        let n = this.base.getChildrenCounter(e);
        if (t.childrenSortedBaseCounter !== n || this.base?.isChildrenDirty(e)) return !0;
      }
      return !1;
    }
    getChildrenIds(e) {
      let t = this.ensureNodeData(e);
      if (!this.isChildrenDirty(e)) return t.childrenSorted ?? [];
      let n = new Set();
      for (let i of this.base?.getChildrenIds(e) ?? []) e === this.getParentId(i) && n.add(i);
      if (t.childrenById) for (let i of t.childrenById.keys()) n.add(i);
      let o = Array.from(n);
      return (
        o.sort((i, s) => {
          let a = this.getHierarchyKey(i);
          l(a !== void 0 && a !== g, "invalid key in hierarchy, row", i);
          let c = this.getHierarchyKey(s);
          if ((l(c !== void 0 && c !== g, "invalid key in hierarchy, row", s), a < c)) return -1;
          if (a > c) return 1;
          throw new Error("Hierarchy keys should be unique:" + a);
        }),
        (t.childrenSorted = o),
        t.childrenSortedLastCounter === t.childrenSortedCurrentCounter &&
          (t.childrenSortedCurrentCounter += 1),
        (t.childrenSortedLastCounter = t.childrenSortedCurrentCounter),
        (t.childrenSortedBaseCounter = this.base?.getChildrenCounter(e) ?? 0),
        o
      );
    }
    updateLatestValue(e, t, n) {
      let o = this.branchData.columns.value;
      switch (t) {
        case "__class": {
          let i = o.get(n);
          if (typeof i != "string") return;
          let s = this.ensureNodeData(e);
          if (
            i === "RootNode" &&
            ((this.rootNodeId = e), this.updateReachability(s, !0, void 0), s.childrenById)
          )
            for (let a of s.childrenById.keys()) {
              let c = this.getNodeData(a);
              c && this.markInTree(s, c, a);
            }
          (s.__class !== i && s.__class && this.indexes.syncRemovedClass(s.__class, e),
            (s.__class = i),
            s.inTree && this.indexes.syncAddedNodeIndexes(e, s));
          break;
        }
        case "isMaster": {
          let i = o.get(n);
          if (typeof i != "boolean") return;
          let s = this.ensureNodeData(e);
          ((s.isMaster = i), s.inTree && this.applyMasterState(s), this.broadcastIsMaster(e));
          break;
        }
        case "isFormContainer": {
          let i = o.get(n),
            s = this.ensureNodeData(e),
            a = i === !0,
            c = s.isFormContainer;
          if (c === a) return;
          ((s.isFormContainer = a),
            s.inTree &&
              (a
                ? this.indexes.syncAddedFormContainer(e)
                : this.indexes.syncRemovedFormContainer(e)),
            this.broadcastInheritedIsFormContainerChange(e, c, a));
          break;
        }
        case "replicaInfo": {
          let i = o.get(n);
          if (typeof i != "string" || i.length === 0) {
            let s = this.ensureNodeData(e);
            s.replicaInfoMaster &&
              (this.indexes.syncRemovedReplicaOwner(s.replicaInfoMaster, e),
              (s.replicaInfoMaster = void 0));
          }
          break;
        }
        case "master": {
          let i = o.get(n),
            a = e.length - "replicaInfo".length;
          if (e.substring(a) !== "replicaInfo") return;
          e = e.substring(0, a - 1);
          let c = i,
            d = this.ensureNodeData(e);
          if (c === d.replicaInfoMaster) return;
          if (
            (d.replicaInfoMaster && this.indexes.syncRemovedReplicaOwner(d.replicaInfoMaster, e),
            !c || typeof c != "string")
          ) {
            d.replicaInfoMaster = void 0;
            return;
          }
          (this.indexes.syncAddedReplicaOwner(c, e), (d.replicaInfoMaster = c));
          break;
        }
        case "dataIdentifier": {
          let i = o.get(n),
            s = this.ensureNodeData(e),
            a = typeof i == "string" ? i : void 0,
            c = s.dataIdentifier;
          if (c === a) return;
          (c && this.indexes.syncRemovedDataIdentifier(c, e),
            (s.dataIdentifier = a),
            s.inTree &&
              (c === void 0 && a !== void 0
                ? this.indexes.syncAddedWithDataIdentifier(e)
                : c !== void 0 && a === void 0 && this.indexes.syncRemovedWithDataIdentifier(e),
              a && this.indexes.syncAddedDataIdentifier(a, e)),
            this.broadcastInheritedDataIdentifierChange(e, c, a));
          break;
        }
      }
    }
    rehydrate(e) {
      ((this.parentHistory = e.parentHistory), (this.parentOverrides = e.parentOverrides));
      let t = new Map();
      for (let [n, o] of this.parentOverrides)
        for (let [i, s] of o) for (let [a, c] of s) t.set(c.rowIdx, c);
      this.replayParentHistory(t);
    }
    broadcastParentId(e) {
      for (let t of this.store.branches) {
        let n = t.getHierarchy(),
          o = n.ensureNodeData(e),
          i = n.getParentId(e);
        if (i && i !== g) {
          let s = n.ensureNodeData(i);
          if (s.inTree) {
            (n.markInTree(s, o, e), n.broadcastParentId(e));
            continue;
          }
        }
        (n.clearInTree(o, e), n.broadcastParentId(e));
      }
    }
    broadcastIsMaster(e) {
      for (let t of this.store.branches) {
        let n = t.getHierarchy();
        if (n.store.hasOwnRow(e, "isMaster")) continue;
        let o = n.ensureNodeData(e);
        (o.inTree && n.applyMasterState(o), n.broadcastIsMaster(e));
      }
    }
    broadcastInheritedIsFormContainerChange(e, t, n) {
      for (let o of this.store.branches) {
        let i = o.getHierarchy();
        i.store.hasOwnRow(e, "isFormContainer") ||
          (i.applyInheritedIsFormContainerIndexChange(e, t, n),
          i.broadcastInheritedIsFormContainerChange(e, t, n));
      }
    }
    applyInheritedIsFormContainerIndexChange(e, t, n) {
      let o = this.getNodeData(e);
      if (o) {
        if (!o.inTree) {
          (t || n) && this.indexes.syncRemovedFormContainer(e);
          return;
        }
        (t && this.indexes.syncRemovedFormContainer(e),
          n && this.indexes.syncAddedFormContainer(e));
      }
    }
    broadcastInheritedDataIdentifierChange(e, t, n) {
      for (let o of this.store.branches) {
        let i = o.getHierarchy();
        i.store.hasOwnRow(e, "dataIdentifier") ||
          (i.applyInheritedDataIdentifierIndexChange(e, t, n),
          i.broadcastInheritedDataIdentifierChange(e, t, n));
      }
    }
    applyInheritedDataIdentifierIndexChange(e, t, n) {
      let o = this.getNodeData(e);
      if (o) {
        if (!o.inTree) {
          ((t !== void 0 || n !== void 0) && this.indexes.syncRemovedWithDataIdentifier(e),
            t && this.indexes.syncRemovedDataIdentifier(t, e),
            n && this.indexes.syncRemovedDataIdentifier(n, e));
          return;
        }
        (t !== void 0 && n === void 0
          ? this.indexes.syncRemovedWithDataIdentifier(e)
          : t === void 0 && n !== void 0 && this.indexes.syncAddedWithDataIdentifier(e),
          t && this.indexes.syncRemovedDataIdentifier(t, e),
          n && this.indexes.syncAddedDataIdentifier(n, e));
      }
    }
    updateParentId(e, t) {
      ((this.hierarchyChanged = !0),
        this.applyParentIdRow(e, t),
        this.parentHistory.push(t),
        this.broadcastParentId(e));
    }
    replayParentHistory(e) {
      if (this.parentHistory.length === 0) return;
      this.hierarchyChanged = !0;
      let t = this.branchData.columns.id;
      for (let n of this.parentHistory) {
        let o = t.get(n);
        this.applyParentIdRow(o, n, e.get(n));
      }
    }
    getParentOverride(e, t, n) {
      return this.parentOverrides.get(e)?.get(t)?.get(n);
    }
    applyParentIdRow(e, t, n) {
      let o = this.ensureNodeData(e),
        i = this.getParentId(e),
        s = o.resolvedParentId,
        a = this.branchData.columns,
        c = a.seq.get(t),
        d = a.client.get(t);
      if (s === void 0 || Kt(c, d, a.seq.get(s), a.client.get(s))) {
        let f = n?.parentTo ?? a.value.get(t);
        ((o.resolvedParentId = t), this.updateParent(o, e, f, t, i));
      }
      o.parentIdHistory.push(t);
    }
    getParentRowIdx(e) {
      return this.getOwnNodeData(e)?.resolvedParentId ?? this.base?.getParentRowIdx(e);
    }
    getOwnParentRowIdx(e) {
      return this.getOwnNodeData(e)?.resolvedParentId;
    }
    getParentIdSeq(e) {
      let t = this.getOwnNodeData(e)?.resolvedParentId;
      return t !== void 0 ? this.branchData.columns.seq.get(t) : this.base?.getParentIdSeq(e);
    }
    getOwnHierarchyKey(e) {
      let t = this.getOwnNodeData(e)?.resolvedParentId;
      if (t === void 0) return;
      let n = this.branchData.columns,
        o = n.seq.get(t),
        i = n.client.get(t);
      return this.getParentOverride(e, o, i)?.parentTo ?? n.value.get(t);
    }
    getHierarchyKey(e) {
      let t = this.getOwnHierarchyKey(e);
      return t === void 0 ? this.base?.getHierarchyKey(e) : t;
    }
    getChildIndex(e, t) {
      let n = this.getChildrenIds(e),
        o = this.getHierarchyKey(t);
      if (typeof o != "string") return -1;
      let i = ve(n, o, (s, a) => {
        let c = this.getHierarchyKey(s);
        return c < a ? -1 : c > a ? 1 : 0;
      });
      return n[i] === t ? i : -1;
    }
    getPositionIndex(e, t) {
      let n = this.getChildrenIds(e);
      return ve(n, t, (o, i) => {
        let s = this.getHierarchyKey(o);
        return s < i ? -1 : s > i ? 1 : 0;
      });
    }
    getChildPosition(e) {
      let t = this.getHierarchyKey(e);
      if (t !== void 0) return tr(t);
    }
    getParentId(e) {
      let t = this.getHierarchyKey(e);
      if (t !== void 0) return q(t);
    }
    getOwnParentId(e) {
      let t = this.getOwnHierarchyKey(e);
      if (t !== void 0) return q(t);
    }
    getParentBySeq(e, t, n) {
      let o = this.getOwnNodeData(e);
      if (!o) return;
      let i = this.branchData.columns,
        s;
      for (let a of o.parentIdHistory) {
        let c = i.seq.get(a);
        if (c > t || (!n && c === t)) continue;
        let d = i.client.get(a);
        if (!s || c > s.seq || (c === s.seq && d > s.client)) {
          let h = i.id.get(a),
            f = this.getParentOverride(h, c, d);
          s = {
            id: h,
            seq: c,
            client: d,
            key: "parentid",
            value: f?.parentTo ?? i.value.get(a),
            index: a,
          };
        }
      }
      return s;
    }
    isAncestorOf(e, t, n, o = new Set()) {
      if (e === t) return !0;
      if (!e || e === g || o.has(e) || (o.add(e), !this.getNodeData(e))) return !1;
      let i = this.getParentBySeq(e, n, !0),
        s = this.base;
      for (; !i && s; ) ((i = s.getParentBySeq(e, s.store.seq, !0)), (s = s.base));
      if (!i) return !1;
      let a = q(i.value);
      return this.isAncestorOf(a, t, n, o);
    }
    clearParentOverrides(e) {
      let t = [];
      for (let [n, o] of this.parentOverrides)
        for (let [i, s] of o)
          if (!(i < e)) {
            o.delete(i);
            for (let [a, c] of s) {
              let d = c.rowIdx,
                h = this.getNodeData(n);
              if (!h || !(h.resolvedParentId === d)) continue;
              t.push(c);
              let p = q(c.parentTo);
              p !== g && this.removeChild(p, n);
              let b = q(c.parentFrom);
              if (b !== g) {
                let w = this.ensureNodeData(b);
                (this.addChild(w, n, d), this.markInTree(w, h, n));
              } else this.clearInTree(h, n);
            }
          }
      return t;
    }
    createOverrideHierarchyKey(e, t) {
      let n = tr(e),
        o = q(e);
      l(o !== g, "deleted parentid, cannot override hierarchyKey");
      let i = ke(n),
        s = i[i.length - 1];
      function a(f) {
        if (f.length !== i.length) return !1;
        for (let p = 0; p < i.length - 1; p++) {
          let b = i[p],
            w = f[p];
          if (b.position !== w.position || b.client !== w.client) return !1;
        }
        return !0;
      }
      let c = new Set(),
        d = this.getNodeData(o)?.childrenById;
      if (d)
        for (let f of d.keys()) {
          if (f === t) continue;
          let p = this.getHierarchyKey(f);
          l(typeof p == "string", "sibling must be a valid, non-deleted, hierarchy key");
          let b = ke(tr(p));
          if (!a(b)) continue;
          let w = b[b.length - 1];
          w.position === s.position && c.add(w.client);
        }
      let h = Ni.find((f) => !c.has(f));
      return (
        l(h !== void 0, "override clients exhausted for node", t),
        (s.client = h),
        er(o, Se(i))
      );
    }
    postProcess(e) {
      if (this.hierarchyChanged) return ((this.hierarchyChanged = !1), this.resolveCycles(e));
    }
    resolveCycles(e) {
      let t = this.clearParentOverrides(e),
        n = [],
        o = this.branchData.columns;
      this.parentHistory.sort((i, s) => {
        let a = o.seq.get(i),
          c = o.seq.get(s);
        return a === c ? o.client.get(i) - o.client.get(s) : a - c;
      });
      for (let i of this.parentHistory) {
        let s = o.id.get(i),
          a = o.seq.get(i);
        if (a < e) continue;
        let c = o.value.get(i);
        l(c, "parentid without a value, index: ", i);
        let d = q(c);
        if (this.isAncestorOf(d, s, a)) {
          let h = this.getNodeData(s);
          l(h, "node not in tree, id: ", s);
          let f = this.getParentBySeq(s, a, !1),
            p;
          if ((f && !this.isAncestorOf(q(f.value), s, a) && (p = f), h.resolvedParentId === i)) {
            let j = this.getParentId(s);
            if (
              (l(j && j !== g, "unable to resolve parent of", s),
              this.removeChild(j, s),
              p && p.value !== g)
            ) {
              let le = q(p.value),
                se = this.ensureNodeData(le);
              (this.addChild(se, s, p.index), this.markInTree(se, h, s));
            } else this.clearInTree(h, s);
          }
          let _ = {
              nodeId: s,
              parentFrom: c,
              parentTo: p && p.value !== g ? this.createOverrideHierarchyKey(p.value, s) : g,
              rowIdx: i,
            },
            re = this.parentOverrides.get(s);
          re || ((re = new Map()), this.parentOverrides.set(s, re));
          let B = re.get(a);
          B || ((B = new Map()), re.set(a, B));
          let ue = o.client.get(i);
          (B.set(ue, _), n.push(_));
        }
      }
      return { prevOverrides: t, nextOverrides: n };
    }
  };
var jn = class {
    constructor() {
      u(this, "map", new Map());
      u(this, "update", 0);
      u(this, "cache");
    }
    keys() {
      return this.map.keys();
    }
    ownKeys() {
      return this.map.keys();
    }
    values() {
      return this.map.values();
    }
    ownValues() {
      return this.map.values();
    }
    entries() {
      return this.map.entries();
    }
    ownEntries() {
      return this.map.entries();
    }
    has(e) {
      return this.map.has(e);
    }
    get(e) {
      return this.map.get(e);
    }
    ownGet(e) {
      return this.map.get(e);
    }
    set(e, t) {
      (this.updated(), this.map.set(e, t));
    }
    updated() {
      this.update++;
    }
  },
  wt = class {
    constructor() {
      u(this, "map", new Map());
    }
    getLatestOrCreateGhost(e) {
      return this.map.get(e);
    }
    keys() {
      return this.map.keys();
    }
    values() {
      return this.map.values();
    }
    set(e, t, n) {
      let o = this.map.get(e);
      (o || ((o = new jn()), this.map.set(e, o)), o.set(t, n));
    }
    getLatest(e) {
      return this.map.get(e);
    }
    getOwnLatest(e) {
      return this.map.get(e);
    }
    get(e, t) {
      return this.map.get(e)?.get(t);
    }
    clear() {
      this.map.clear();
    }
    has(e, t) {
      return !!this.map.get(e)?.has(t);
    }
  },
  Hn = class {
    constructor(e) {
      this.base = e;
      u(this, "ownMap");
      u(this, "ownUpdate", 0);
      u(this, "cache");
    }
    get update() {
      return this.ownUpdate + (this.base?.update ?? 0);
    }
    *keys() {
      let e = new Set();
      if (this.ownMap) for (let t of this.ownMap.keys()) (e.add(t), yield t);
      if (this.base) for (let t of this.base.keys()) e.has(t) || (yield t);
    }
    ownKeys() {
      return (l(this.ownMap, "Object is not materialized"), this.ownMap.keys());
    }
    *values() {
      for (let e of this.keys()) {
        let t = this.get(e);
        t !== void 0 && (yield t);
      }
    }
    *ownValues() {
      if (this.ownMap) for (let e of this.ownMap.values()) yield e;
    }
    *entries() {
      for (let e of this.keys()) {
        let t = this.get(e);
        t !== void 0 && (yield [e, t]);
      }
    }
    *ownEntries() {
      if (this.ownMap) for (let e of this.ownMap.entries()) yield e;
    }
    has(e) {
      return !!this.ownMap?.has(e) || !!this.base?.has(e);
    }
    get(e) {
      return this.ownMap?.get(e) ?? this.base?.get(e);
    }
    ownGet(e) {
      return this.ownMap?.get(e);
    }
    set(e, t) {
      (this.ownMap || (this.ownMap = new Map()), this.ownMap.set(e, t), this.updated());
    }
    updated() {
      this.ownUpdate++;
    }
    materialized() {
      return !!this.ownMap;
    }
  },
  vt = class {
    constructor(e) {
      this.base = e;
      u(this, "ownMap", new Map());
    }
    getLatestOrCreateGhost(e) {
      let t = this.ownMap.get(e);
      return (t || ((t = new Hn(this.base.getLatestOrCreateGhost(e))), this.ownMap.set(e, t)), t);
    }
    *keys() {
      let e = new Set();
      for (let [t, n] of this.ownMap) n.materialized() && (e.add(t), yield t);
      for (let t of this.base.keys()) e.has(t) || (yield t);
    }
    *values() {
      for (let e of this.keys()) {
        let t = this.getLatest(e);
        t && (yield t);
      }
    }
    set(e, t, n) {
      this.getLatestOrCreateGhost(e).set(t, n);
    }
    getLatest(e) {
      return this.getOwnLatest(e) ?? this.base.getLatest(e);
    }
    getOwnLatest(e) {
      let t = this.ownMap.get(e);
      if (t?.materialized()) return t;
    }
    get(e, t) {
      let n = this.ownMap.get(e);
      return n ? n.get(t) : this.base.get(e, t);
    }
    clear() {
      this.ownMap.clear();
    }
    has(e, t) {
      return !!this.ownMap.get(e)?.has(t) || this.base.has(e, t);
    }
  };
var ar = class {
  constructor(e, t, n) {
    this.latest = e;
    this.getCurrentValue = t;
    this.base = n;
    u(this, "arrays", new Map());
  }
  getState(e) {
    let t = this.arrays.get(e);
    return (
      t ||
        ((t = { array: [], lastCounter: -1, currentCounter: 0, baseCounter: 0 }),
        this.arrays.set(e, t)),
      t
    );
  }
  getCounter(e) {
    return this.getState(e).currentCounter;
  }
  isDirty(e) {
    let t = this.getState(e);
    return this.base
      ? t.lastCounter !== t.currentCounter ||
          t.baseCounter !== this.base.getCounter(e) ||
          this.base.isDirty(e)
      : t.lastCounter !== t.currentCounter;
  }
  isMergeableArray(e, t) {
    if (t.length === 0) return !1;
    if (t.length === 1) return t[0] === T;
    for (let n of t) {
      let o = this.getCurrentValue(e, n);
      if (o !== g && o !== P) return ir(o);
    }
    return !0;
  }
  getItemIds(e) {
    let t = this.getState(e);
    if (this.isDirty(e)) {
      let n = new Map();
      for (let i of this.base?.getItemIds(e) ?? []) {
        let s = this.getCurrentValue(e, i);
        ir(s) && n.set(i, s);
      }
      let o = this.latest.getOwnLatest(e);
      if (o)
        for (let i of o.ownKeys()) {
          if (i === T) continue;
          let s = this.getCurrentValue(e, i);
          if (s === g || !ir(s)) {
            n.delete(i);
            continue;
          }
          n.set(i, s);
        }
      ((t.array = Array.from(n.keys()).sort((i, s) => {
        let a = n.get(i),
          c = n.get(s);
        return a < c ? -1 : a > c ? 1 : 0;
      })),
        (t.baseCounter = this.base?.getCounter(e) ?? 0),
        (t.lastCounter = t.currentCounter));
    }
    return t.array;
  }
  invalidate(e) {
    let t = this.arrays.get(e);
    t && (t.currentCounter += 1);
  }
  unsetItem(e, t, n) {
    let o = this.getItemIds(e),
      i = o.indexOf(t);
    i === n && o.splice(i, 1);
  }
  clear() {
    this.arrays.clear();
  }
};
var sd = 27,
  ad = 2 ** sd - 1,
  Wn = 1,
  Tl = 26,
  cd = 2 ** Tl - 1,
  Jn = 1,
  Gn = 2 ** sd;
function Le({ batchNo: r, rowCount: e }) {
  return (
    l(e >= Wn && e <= ad, "rowCount out of range", e),
    l(r >= Jn && r <= cd, "batchNo out of range", r),
    l(Number.isSafeInteger(r), "batchNo is not a safe integer", r),
    l(Number.isSafeInteger(e), "rowCount is not a safe integer", e),
    r * Gn + e
  );
}
function cr(r) {
  return (
    l(Number.isSafeInteger(r), "batchId not safe integer", r),
    l(r >= 0, "batchId is negative", r),
    Math.floor(r / Gn)
  );
}
function Yn(r) {
  let e = cr(r);
  return { rowCount: r - e * Gn, batchNo: e };
}
var qm = {
  ROW_COUNT_MIN: Wn,
  ROW_COUNT_MAX: ad,
  BATCH_NO_MIN: Jn,
  BATCH_NO_MAX: cd,
  MIN_BATCH_ID: Le({ batchNo: Jn, rowCount: Wn }),
};
function Xn(r, e) {
  let t = r.length,
    n = e.length,
    o = Array.from({ length: t + 1 }, () => new Array(n + 1).fill(0));
  for (let c = t - 1; c >= 0; --c)
    for (let d = n - 1; d >= 0; --d)
      r[c] === e[d]
        ? (o[c][d] = o[c + 1][d + 1] + 1)
        : (o[c][d] = Math.max(o[c + 1][d], o[c][d + 1]));
  let i = [],
    s = 0,
    a = 0;
  for (; s < t && a < n; )
    r[s] === e[a]
      ? ((s += 1), (a += 1))
      : o[s + 1][a] > o[s][a + 1]
        ? (i.push({ operation: "delete", index: s, value: r[s] }), (s += 1))
        : (i.push({ operation: "insert", index: a, value: e[a] }), (a += 1));
  for (; s < t; ) (i.push({ operation: "delete", index: s, value: r[s] }), (s += 1));
  for (; a < n; ) (i.push({ operation: "insert", index: a, value: e[a] }), (a += 1));
  return i;
}
var Ie = "meta",
  qe = { ROOT_ID: "rootId", VERSION: "version" };
function _l(r, e) {
  return r.seq === e.seq ? r.client - e.client : r.seq - e.seq;
}
function dd(r) {
  if (!Array.isArray(r) || r.length === 0) return !1;
  let e,
    t = new Set(),
    n = !1;
  for (let o of r) {
    if (typeof o != "object" || o === null) return !1;
    hd(o) && (n = !0);
    let i =
      typeof o.id == "string" ? "id" : typeof o.identifier == "string" ? "identifier" : void 0;
    if (!i) return !1;
    (e && l(e === i, "Mergeable arrays must have consistent id/identifier", JSON.stringify(r)),
      (e = i));
    let s = o[e];
    if (!s) return !1;
    (n || l(!t.has(s), "Mergeable arrays must have unique ids.", JSON.stringify(r)), t.add(s));
  }
  return !0;
}
function Ol(r) {
  return "key" in r || ("offset" in r && "style" in r);
}
function Ml(r) {
  return "_id" in r || "_layerId" in r;
}
function ld(r, e) {
  return e === "content" && ("field" in r || "text" in r);
}
function Dl(r) {
  return "themeToken" in r;
}
function hd(r) {
  return "__class" in r && r.__class === "PathSegment";
}
function Bl(r) {
  return "ids" in r && "targets" in r;
}
function El(r, e, t) {
  return e === "allowedFileTypes" && "extension" in r && t.includes("variables");
}
function zl(r) {
  return (
    ("id" in r && typeof r.id == "string") || ("identifier" in r && typeof r.identifier == "string")
  );
}
function to(r) {
  return typeof r == "object" && r !== null;
}
var Pl = [Ol, Ml, ld, Dl, hd, Bl, El, zl];
function Ll(r, e, t) {
  let n = t.every((o) => o === null || (to(o) && ld(o, e)));
  return t.every((o) => (o === null ? n : to(o) && Pl.some((i) => i(o, e, r))));
}
function ql(r, e, t) {
  let n = !t.some(to);
  l(n || Ll(r, e, t), "Atomic arrays must only contain primitives.", JSON.stringify(t));
}
function fd(r) {
  return typeof r == "string" && r.startsWith("arr(");
}
function It(r) {
  if (fd(r)) return r.slice(4, -1);
}
function ud(r) {
  return `arr(${r})`;
}
function Y(r) {
  if (typeof r == "string" && r.startsWith("obj(")) return r.slice(4, -1);
}
function Qn(r) {
  return `obj(${r})`;
}
function Fl(r, e, t = 0) {
  let n = {},
    o = n;
  for (let s = t; s < r.length - 1; ++s) {
    let a = r[s],
      c = {};
    ((o[a] = c), (o = c));
  }
  let i = r[r.length - 1];
  return ((o[i] = e), n);
}
function eo(r) {
  return `${r.client}/${r.seq}/${r.id}/${r.key}/${JSON.stringify(r.value)}/${r.batch}`;
}
var xt = class r {
  constructor({
    client: e,
    user: t,
    strictAtomicArrays: n = !0,
    branchId: o = x,
    base: i,
    table: s,
    extractIdFromObject: a,
  }) {
    u(this, "table");
    u(this, "branchData");
    u(this, "latest");
    u(this, "hierarchy");
    u(this, "sortedArrayCache");
    u(this, "branchOwnWriteIndex");
    u(this, "client");
    u(this, "user");
    u(this, "branchId");
    u(this, "base");
    u(this, "branches", []);
    u(this, "strictAtomicArrays");
    u(this, "extractIdFromObject");
    u(this, "positionClientId");
    u(this, "optimizedReading", !1);
    u(this, "inserting", !1);
    u(this, "batchStartIdx");
    u(this, "batchNo", 0);
    u(this, "readTransactionLevel", 0);
    u(this, "foundIds", new Set());
    ((this.client = e),
      (this.user = t),
      (this.strictAtomicArrays = n),
      (this.branchId = o),
      (this.base = i),
      (this.table = s ?? i?.table ?? new J()),
      (this.branchData = this.table.getOrCreateBranch(this.branchId)),
      (this.positionClientId = ki(this.branchId, this.client)),
      (this.latest = this.base ? new vt(this.base.latest) : new wt()),
      (this.extractIdFromObject = a),
      this.init());
  }
  get manifest() {
    return this.branchData.manifest;
  }
  get minIndexCache() {
    return this.branchData.minIndexCache;
  }
  init() {
    ((this.batchNo = 0),
      (this.batchStartIdx = void 0),
      (this.branchData = this.table.getOrCreateBranch(this.branchId)),
      (this.branches.length = 0),
      (this.latest = this.base ? new vt(this.base.latest) : new wt()),
      (this.hierarchy = new St(this, this.latest, this.base?.hierarchy)),
      (this.branchOwnWriteIndex = this.base ? new Jt(this.branchData) : void 0),
      (this.sortedArrayCache = new ar(
        this.latest,
        (e, t) => this.getCurrentValue(e, t),
        this.base?.sortedArrayCache
      )),
      this.branchData.hierarchyData
        ? this.updateCaches(this.branchData.hierarchyData)
        : ((this.branchData.hierarchyData = new G(
            this.hierarchy.parentHistory,
            this.hierarchy.parentOverrides
          )),
          this.indexRowsOptimized(),
          this.hierarchy.postProcess(0)));
  }
  reset() {
    (l(this.branchId === x, "Cannot call reset on non main branches"),
      (this.table = new J()),
      this.init());
  }
  static resetBranchDataForTesting(e) {
    (l(e.branchId !== x, "Cannot reset main branch data for testing"),
      e.table.branches.set(e.branchId, new M(e.branchData.codec, e.branchId)),
      e.init());
  }
  fromBuffer(e) {
    (l(this.branchId === x, "Cannot call fromBuffer on non main branches"),
      (this.table = J.fromBuffer(e)),
      this.init());
  }
  branch(e) {
    let t = new r({
      client: this.client,
      user: this.user,
      strictAtomicArrays: this.strictAtomicArrays,
      branchId: e,
      base: this,
      table: this.table,
      extractIdFromObject: this.extractIdFromObject,
    });
    return (this.branches.push(t), t);
  }
  updateCaches(e) {
    let t = this.manifest.getBatch(this.client);
    this.batchNo = t !== void 0 ? cr(t) : 0;
    let n = this.branchData.columns;
    for (let o = this.length - 1; o >= 0; o--) {
      let i = n.id.get(o);
      if (i === V) continue;
      this.branchOwnWriteIndex?.indexOwnRow(o);
      let s = n.key.get(o);
      if (s === "parentid") continue;
      let a = this.latest.getOwnLatest(i)?.ownGet(s);
      (a === void 0 || Ut(n, o, a)) &&
        (this.latest.set(i, s, o), this.hierarchy.updateLatestValue(i, s, o));
    }
    this.getHierarchy().rehydrate(e);
  }
  compare(e) {
    return this.manifest.compare(e);
  }
  setRoot(e) {
    this.setObjectKey(Ie, qe.ROOT_ID, e);
  }
  getRoot() {
    return this.getCurrentValue(Ie, qe.ROOT_ID);
  }
  getVersion() {
    return this.getCurrentValue(Ie, qe.VERSION);
  }
  setVersion(e) {
    this.setObjectKey(Ie, qe.VERSION, e);
  }
  isRoot(e) {
    return this.getCurrentValue(Ie, qe.ROOT_ID) === e;
  }
  get seq() {
    return this.branchData.metadata.seq;
  }
  set seq(e) {
    this.branchData.metadata.seq = e;
  }
  ensureMinSeq(e) {
    l(Jr(e), "invalid seq", e);
    let t = this.seq;
    return (e > t && (this.seq = e), { from: t, to: this.seq });
  }
  getLastBatchNo() {
    return this.batchNo;
  }
  getSerializableRows(e, t) {
    return this.branchData.getSerializableRows(e, t);
  }
  getSerializableRowsAfterManifest(e) {
    return this.branchData.getSerializableRowsAfterManifest(e);
  }
  getRows(e, t) {
    return this.branchData.getRows(e, t);
  }
  getRowsSorted() {
    return this.getRows().sort(_l);
  }
  getFirstRowForSeq(e) {
    return this.minIndexCache.get(e);
  }
  indexRowsOptimized() {
    let { client: e, id: t, key: n, seq: o, value: i, batch: s } = this.branchData.columns;
    this.optimizedReading = !0;
    for (let a = this.length - 1; a >= 0; a--)
      this.updateRowIndex(a, o.get(a), t.get(a), n.get(a), i.get(a), e.get(a), s.get(a));
    this.optimizedReading = !1;
  }
  merge(e) {
    return this.mergeRows(e.getRows());
  }
  mergeRows(e) {
    let t = new Set(this.getRows().map((o) => eo(o))),
      n = 1 / 0;
    for (let o of e) {
      let i = eo(o);
      t.has(i) ||
        (t.add(i),
        this.addRowData(o.id, o.key, o.value, o.client, o.seq, o.user, o.batch),
        (n = Math.min(n, o.seq)));
    }
    return (this.sortedArrayCache.clear(), this.hierarchy.postProcess(n), n);
  }
  append(e) {
    return this.addRows(e.getRows());
  }
  addSerializableRows(e) {
    let t = 1 / 0;
    for (let n of e) {
      let o = n.value;
      (R(o) && (o = N(o)),
        this.addRowData(n.id, n.key, o, n.client, n.seq, n.user, n.batch),
        (t = Math.min(t, n.seq)));
    }
    (this.sortedArrayCache.clear(), this.hierarchy.postProcess(t));
  }
  addRows(e) {
    let t = 1 / 0;
    for (let o of e)
      (this.addRowData(o.id, o.key, o.value, o.client, o.seq, o.user, o.batch),
        (t = Math.min(t, o.seq)));
    this.sortedArrayCache.clear();
    let n = this.hierarchy.postProcess(t);
    return { minSeq: t, cycleResolutions: n };
  }
  replayRows(e) {
    let t = e.getRowsSorted();
    return this.replayRowList(t);
  }
  replayRowList(e) {
    let t = { supersededRows: [], addedNodeIds: [] };
    if (e.length === 0) return t;
    let n = new Map(),
      o = new Set(),
      i = new Set(),
      s = (a) => {
        let c = n.get(a);
        if (c !== void 0) return c;
        let d = this.latest.getLatest(a) !== void 0;
        return (n.set(a, d), d);
      };
    return (
      this.batch(() => {
        let a = this.seq,
          c = a;
        for (let d of e) {
          if (!s(d.id)) o.add(d.id);
          else {
            let h = `${d.id}\0${d.key}`;
            i.has(h) ||
              (i.add(h),
              t.supersededRows.push({
                id: d.id,
                key: d.key,
                value: this.getReplayableValue(d.id, d.key),
              }));
          }
          this.addRowData(d.id, d.key, d.value, this.client, a++, d.user ?? this.user);
        }
        (this.sortedArrayCache.clear(), this.hierarchy.postProcess(c));
      }),
      (t.addedNodeIds = [...o]),
      t
    );
  }
  batch(e) {
    l(this.batchStartIdx === void 0, "You cannot nest batches");
    let t = this.branchData.columns;
    this.batchStartIdx = t.client.length;
    try {
      let n = e(),
        o = t.client.length - this.batchStartIdx;
      if (o === 0) return n;
      this.batchNo++;
      let i = Le({ batchNo: this.batchNo, rowCount: o });
      this.manifest.updateClientState(this.client, this.seq - 1, i);
      for (let s = this.batchStartIdx; s < this.batchStartIdx + o; s++) t.batch.add(i);
      return n;
    } finally {
      this.batchStartIdx = void 0;
    }
  }
  updateKeyValue(e, t, n) {
    if (this.batchStartIdx === void 0) {
      this.batch(() => {
        this.updateKeyValue(e, t, n);
      });
      return;
    }
    this.addRowData(e, t, n, this.client, this.seq, this.user);
  }
  addRowData(e, t, n, o, i, s, a) {
    if (!this.shouldAddRow(e, t, n, i, o)) return;
    let c = this.branchData.columns;
    (c.client.add(o),
      c.seq.add(i),
      c.id.add(e),
      c.key.add(t),
      c.value.add(n),
      c.user.add(s),
      a && c.batch.add(a));
    let d = c.client.length - 1;
    this.updateRowIndex(d, i, e, t, n, o, a);
  }
  shouldAddRow(e, t, n, o, i) {
    let s =
      t === "parentid"
        ? this.hierarchy.getOwnParentRowIdx(e)
        : this.latest.getOwnLatest(e)?.ownGet(t);
    if (s === void 0 || s >= this.length) return !0;
    let a = this.branchData.columns;
    if (a.value.get(s) !== n) return !0;
    let d = a.seq.get(s),
      h = a.client.get(s);
    return !(d === o && h === i);
  }
  updateRowIndex(e, t, n, o, i, s, a) {
    if (a !== void 0 && s === this.client) {
      let h = cr(a);
      this.batchNo = Math.max(this.batchNo, h);
    }
    if (
      (a !== void 0 && this.manifest.updateClientState(s, t, a),
      this.manifest.addTimestamp(s, t),
      t >= this.seq && (this.seq = t + 1),
      n === V)
    )
      return;
    let c = this.latest.getOwnLatest(n)?.ownGet(o),
      d = this.branchData.columns;
    if ((this.branchOwnWriteIndex?.indexOwnRow(e), o === "parentid")) {
      if (!ed(i)) return;
      this.hierarchy.updateParentId(n, e);
    } else
      (c === void 0 || Kt(t, s, d.seq.get(c), d.client.get(c))) &&
        (this.latest.set(n, o, e), this.hierarchy.updateLatestValue(n, o, e));
    if (!this.optimizedReading) {
      let h = n.indexOf(".");
      h !== -1 && this.latest.getLatest(n.slice(0, h))?.updated();
    }
    (this.sortedArrayCache.invalidate(n), this.minIndexCache.add(t, e));
  }
  getParentId(e) {
    return this.hierarchy.getParentId(e);
  }
  getHierarchy() {
    return this.hierarchy;
  }
  getBranchOwnWriteIndex() {
    return (
      l(this.branchOwnWriteIndex, "Branch own write index is only available for branch stores"),
      this.branchOwnWriteIndex
    );
  }
  _getIdFromObject(e) {
    return this.extractIdFromObject?.(e);
  }
  createStoreId(e, t) {
    return `${e}.${t}`;
  }
  getReferenceValue(e, t, n) {
    if (Array.isArray(e)) return e.map((s) => this.getReferenceValue(s, t, n));
    let o = It(e);
    if (o) return this.getMergeableArray(o, !0, t, n);
    let i = Y(e);
    return i ? this.getObjectInner(i, !0, t, n) : e;
  }
  getCurrentValue(e, t) {
    if (t === "parentid") return this.hierarchy.getParentId(e);
    let n = this.latest.getOwnLatest(e)?.ownGet(t);
    return n !== void 0 ? this.branchData.columns.value.get(n) : this.base?.getCurrentValue(e, t);
  }
  hasOwnRow(e, t) {
    return t === "parentid"
      ? this.hierarchy.getOwnParentRowIdx(e) !== void 0
      : this.latest.getOwnLatest(e)?.ownGet(t) !== void 0;
  }
  getParentIdSeq(e) {
    return this.hierarchy.getParentIdSeq(e);
  }
  validateObjectUpdate(e, t) {
    if (!Ft(t)) throw new Error("Store.setObject: object is not an object");
    let n = this._getIdFromObject(t);
    if (n && n !== e)
      throw new Error(
        `Mismatch between provided id and id extracted from the store: ${n} !== ${e}`
      );
    return e;
  }
  deleteRemovedKeys(e, t) {
    let n = this.latest.getLatest(e);
    if (n) for (let o of n.keys()) o !== T && (o in t || this.setObjectKey(e, o, g));
  }
  createHierarchyKey(e, t, n = -1) {
    let o = this.getChildrenIds(t),
      i = this.hierarchy.getChildIndex(t, e);
    if (n < 0) {
      let b = i >= 0 ? o.length : o.length + 1;
      n = Math.max(b + n, 0);
    }
    i >= 0 && n > i && (n += 1);
    let s = Math.min(n, o.length),
      a = s > 0 ? o[s - 1] : void 0,
      c = o[s],
      d = a ? this.hierarchy.getChildPosition(a) : void 0,
      h = c ? this.hierarchy.getChildPosition(c) : void 0,
      f = sr(d, h, this.positionClientId);
    return er(t, f);
  }
  ensureHasChildren(e) {
    this.getCurrentValue(e, "children") !== P && this.setObjectKey(e, "children", P);
  }
  insertNode(e, t, n) {
    l(typeof e?.id == "string", "inserting node without a valid id");
    let o = this.inserting;
    this.inserting = !0;
    try {
      (this.setObject(e.id, e), this.ensureHasChildren(t));
      let i = this.createHierarchyKey(e.id, t, n);
      this.setObjectKey(e.id, "parentid", i);
    } finally {
      this.inserting = o;
    }
  }
  removeNode(e) {
    (l(this.latest.get(e, "id") !== void 0, "trying to remove a node that doesn't exist:", e),
      this.setObjectKey(e, "parentid", g));
  }
  updateNode(e, t) {
    l(this.latest.get(e, "id") !== void 0, "trying to update a node that doesn't exist:", e);
    for (let n in t) n !== "parentid" && this.setObjectKey(e, n, t[n]);
  }
  updateNestedObject(e, t) {
    let [n, ...o] = e;
    l(
      this.latest.get(n, "id") !== void 0,
      "trying to update nested properties on node doesn't exist:",
      n
    );
    for (let i in t) i !== "parentid" && this.setObjectKeyPath(n, [...o, i], t[i]);
  }
  moveNode(e, t, n) {
    (l(this.latest.get(e, "id") !== void 0, "trying to move a node that doesn't exist:", e),
      this.ensureHasChildren(t));
    let o = this.createHierarchyKey(e, t, n);
    this.setObjectKey(e, "parentid", o);
  }
  setObject(e, t) {
    let n = this.validateObjectUpdate(e, t);
    if ((this.deleteRemovedKeys(n, t), Object.keys(t).length === 0)) {
      this.setObjectKey(n, T, P);
      return;
    }
    for (let o in t) o === "children" || o === "parentid" || this.setObjectKey(n, o, t[o]);
    if (!(!("children" in t) || !Array.isArray(t.children))) {
      this.setObjectKey(n, "children", P);
      for (let o of t.children) this.insertNode(o, n);
    }
  }
  resolveObjectInArrayReference(e, t, n) {
    let o = this._getIdFromObject(t);
    if (o === void 0) {
      let a;
      (typeof t.id == "string"
        ? (a = t.id)
        : typeof t.identifier == "string"
          ? (a = t.identifier)
          : (a = `__${n}_${this.client.toString(36)}`),
        (o = this.createStoreId(e, a)));
    }
    let i = this.getCurrentValue(e, o) === g,
      s = this.inserting;
    this.inserting = this.inserting || i;
    try {
      this.setObject(o, t);
    } finally {
      this.inserting = s;
    }
    return Qn(o);
  }
  createAtomicArray(e, t) {
    let n = [];
    for (let o = 0; o < t.length; o++) {
      let i = t[o];
      if (Ft(i)) n.push(this.resolveObjectInArrayReference(e, i, o));
      else if (dd(i)) {
        let s = this.createStoreId(e, o.toString());
        (this.setMergeableArray(s, i), n.push(ud(s)));
      } else
        Array.isArray(i) ? n.push(this.createAtomicArray(e + "." + o.toString(), i)) : n.push(i);
    }
    return n;
  }
  setObjectKey(e, t, n) {
    let o = this.getCurrentValue(e, t);
    if (Ft(n)) {
      let a = Y(o),
        c = a ?? this._getIdFromObject(n) ?? this.createStoreId(e, t);
      (this.setObject(c, n), (!a || this.inserting) && this.updateKeyValue(e, t, Qn(c)));
      return;
    }
    if (!Array.isArray(n)) {
      if (o !== n || this.inserting) {
        let a = Y(o);
        ((n === void 0 || n === g) && a && this.deleteRemovedKeys(a, {}),
          this.updateKeyValue(e, t, n));
      }
      return;
    }
    if (dd(n) || (n.length === 0 && fd(o))) {
      let a = It(o),
        c = a ?? this.createStoreId(e, t);
      (this.setMergeableArray(c, n), (!a || this.inserting) && this.updateKeyValue(e, t, ud(c)));
      return;
    }
    this.strictAtomicArrays && ql(e, t, n);
    let i = this.createStoreId(e, t),
      s = this.createAtomicArray(i, n);
    (!this.inserting && Array.isArray(o) && $t(s, o)) || this.updateKeyValue(e, t, s);
  }
  setObjectKeyPath(e, t, n) {
    if (!t[0]) return;
    let o = e;
    for (let s = 0; s < t.length - 1; ++s) {
      let a = t[s],
        c = this.getCurrentValue(o, a);
      if (c === g) {
        let h = Fl(t.slice(s + 1), n);
        this.setObjectKey(o, a, h);
        return;
      }
      c || (this.setObjectKey(o, a, {}), (c = this.getCurrentValue(o, a)));
      let d = Y(c);
      if (!d) {
        let h = t.slice(0, s + 1);
        throw new Error(`${h.join(".")} is not an object`);
      }
      o = d;
    }
    let i = t[t.length - 1];
    this.setObjectKey(o, i, n);
  }
  getChildrenIds(e) {
    return this.hierarchy.getChildrenIds(e);
  }
  getSubtreeIds(e) {
    let t = new Set();
    for (let n of e) this.collectSubtreeObject(n, t);
    return t;
  }
  collectSubtreeObject(e, t) {
    if (t.has(e)) return;
    t.add(e);
    let n = this.getLatest(e);
    if (!n) return;
    let o = Array.from(n.keys());
    if (o.length > 0) {
      let i = this.sortedArrayCache.isMergeableArray(e, o);
      for (let s of o)
        if (s !== T)
          if (i) this.collectSubtreeObject(s, t);
          else {
            let a = this.getCurrentValue(e, s);
            this.collectSubtreeValue(a, t);
          }
    }
    for (let i of this.hierarchy.getChildrenIds(e)) this.collectSubtreeObject(i, t);
  }
  collectSubtreeValue(e, t) {
    let n = Y(e);
    if (n) {
      this.collectSubtreeObject(n, t);
      return;
    }
    let o = It(e);
    if (o) {
      this.collectSubtreeObject(o, t);
      return;
    }
    if (Array.isArray(e)) for (let i of e) this.collectSubtreeValue(i, t);
  }
  getLatest(e) {
    return this.latest.getLatest(e);
  }
  getObjectKey(e, t) {
    if (this.getCurrentValue(e, T) === g) return;
    let n = this.getCurrentValue(e, t);
    if (n !== g) return this.getReferenceValue(n, 1 / 0, 0);
  }
  getReplayableValue(e, t) {
    return t === "parentid" ? this.hierarchy.getHierarchyKey(e) : this.getCurrentValue(e, t);
  }
  getRawObjectKey(e, t) {
    if (this.latest.get(e, t) === void 0) return Wc;
    let o = this.getCurrentValue(e, t);
    return o === g ? o : this.getReferenceValue(o, 1 / 0, 0);
  }
  getObject(e) {
    return this.getObjectInner(e, !0);
  }
  getObjectWithShallowChildren(e, t) {
    return this.getObjectInner(e, !0, t, 0);
  }
  getObjectInner(e, t, n = 1 / 0, o = 0) {
    this.readTransactionLevel++;
    let i = () => {
      (this.readTransactionLevel--, this.foundIds.delete(e));
    };
    if (this.foundIds.has(e)) {
      i();
      return;
    }
    this.foundIds.add(e);
    let s = this.latest.getLatest(e);
    if (!s && this.hierarchy.getParentRowIdx(e) === void 0) {
      i();
      return;
    }
    let a = {};
    if (this.getCurrentValue(e, T) === g) {
      i();
      return;
    }
    if (o < n && s?.has("children")) {
      let c = this.getChildrenIds(e);
      a.children = t ? c.map((d) => this.getObjectInner(d, !0, n, o + 1)) : c;
    }
    if (this.isRoot(e)) a.parentid = null;
    else {
      let c = this.getParentId(e);
      c && (a.parentid = c);
    }
    if (s) {
      for (let c of s.keys()) {
        if (c === T) continue;
        let d = this.getCurrentValue(e, c);
        d !== g &&
          (c === "children" ||
            c === "parentid" ||
            (a[c] = t ? this.getReferenceValue(d, n, o + 1) : d));
      }
      (i(), this.readTransactionLevel === 0 && this.foundIds.clear());
    }
    return a;
  }
  getObjectKeys(e, t) {
    let n = this.latest.getLatest(e);
    if (!n) return [];
    let o = [];
    for (let i of n.keys()) t(i) && o.push(i);
    return o;
  }
  applyArrayEdits(e, t, n) {
    let o = new Set(n),
      i = 0;
    for (let s of t) {
      let a = Y(s.value);
      switch (s.operation) {
        case "delete":
          (o.has(s.value)
            ? this.sortedArrayCache.unsetItem(e, a, s.index + i)
            : this.updateKeyValue(e, a, g),
            i--);
          break;
        case "insert":
          (this.arrayInsert(e, a, s.index), i++);
          break;
      }
    }
  }
  setMergeableArray(e, t) {
    let n = this.getMergeableArray(e, !1),
      o = !n;
    if (!n) {
      let a = this.latest.getLatest(e);
      if (a) for (let c of a.keys()) this.updateKeyValue(e, c, g);
      n = [];
    }
    (o || this.inserting) && this.updateKeyValue(e, T, P);
    let i = [];
    for (let a = 0; a < t.length; a++) i.push(this.resolveObjectInArrayReference(e, t[a], a));
    let s = Xn(n, i);
    if ((this.applyArrayEdits(e, s, i), this.inserting)) {
      let a = new Set(n);
      for (let c of i) {
        if (!a.has(c)) continue;
        let d = Y(c),
          h = this.getCurrentValue(e, d);
        this.updateKeyValue(e, d, h);
      }
    }
  }
  getMergeableArray(e, t = !0, n = 1 / 0, o = 0) {
    let i = this.getLatest(e)?.keys(),
      s = i ? Array.from(i) : [];
    if (!this.sortedArrayCache.isMergeableArray(e, s))
      return this.base
        ? t
          ? this.base.getMergeableArray(e, !0, n, o)
          : this.base.getMergeableArray(e, !1)
        : void 0;
    let a = this.sortedArrayCache.getItemIds(e);
    if (t) {
      let c = [];
      for (let d of a) {
        let h = this.getObjectInner(d, !0, n, o + 1);
        h && c.push(h);
      }
      return c;
    } else return a.map((c) => Qn(c));
  }
  arrayInsert(e, t, n) {
    let o = this.sortedArrayCache.getItemIds(e),
      i = n < 0 ? Math.max(o.length + n, 0) : Math.min(n, o.length),
      s = i > 0 ? o[i - 1] : void 0,
      a = s !== void 0 ? this.getCurrentValue(e, s) : void 0,
      c = o[i],
      d = c !== void 0 ? this.getCurrentValue(e, c) : void 0,
      h = sr(a, d, this.positionClientId);
    this.updateKeyValue(e, t, h);
  }
  get length() {
    return this.branchData.columns.client.length;
  }
  static verifyBatches(e) {
    let t = new Map(),
      n = new Set();
    for (let o of e) {
      let i = o.branchId ?? x,
        s = `${i}/${eo(o)}`;
      if (n.has(s)) continue;
      n.add(s);
      let a = t.get(o.client);
      a || ((a = new Map()), t.set(o.client, a));
      let c = a.get(i);
      c || ((c = new Map()), a.set(i, c));
      let d = c.get(o.batch) ?? 0;
      c.set(o.batch, d + 1);
    }
    for (let [o, i] of t)
      for (let [s, a] of i)
        for (let [c, d] of a) {
          let { rowCount: h } = Yn(c);
          l(
            h === d,
            "Update row count does not match batch row count. Batch:",
            c,
            "Update count:",
            d,
            "Batch count:",
            h
          );
        }
  }
  createBranchNodeChangeReader(e) {
    return (
      l(this.base, "Can't create a branch node change reader for a main store"),
      new Qt(this, e)
    );
  }
  *childBranchIds() {
    for (let e of this.table.branches.keys()) {
      if (e === x) continue;
      let t = this.getObjectKey(e, qt);
      (l(typeof t == "string", "Branch has no baseId", e), t === this.branchId && (yield e));
    }
  }
  compactBranch(e, t, n) {
    let o = new Set(),
      i = !1;
    for (let c of this.childBranchIds()) {
      let d = this.branch(c);
      d.getHierarchy().resolveCycles(0);
      let h = new Set(),
        f = d.compactBranch(e, h, n);
      i ||= f !== d;
      for (let p of h) o.add(p);
    }
    if (!i && this.branchData.metadata.compactedLength === this.length) {
      ((this.branchData.metadata.compactedAt = n), e.branches.set(this.branchId, this.branchData));
      let c = new Set();
      for (let d of this.hierarchy.parentHistory) {
        let h = this.branchData.columns.id.get(d);
        c.has(h) || (c.add(h), this.hierarchy.getOwnParentId(h) !== g && t.add(h));
      }
      for (let d of o) t.add(d);
      return this;
    }
    let s = new r({
        user: this.user,
        client: this.client,
        strictAtomicArrays: this.strictAtomicArrays,
        branchId: this.branchId,
        base: this.base,
        table: e,
        extractIdFromObject: this.extractIdFromObject,
      }),
      a = this.branchData.metadata.compactedLength;
    (rr.run(this, s, a, o),
      (s.branchData.metadata.compactedAt = n),
      (s.branchData.metadata.compactedLength = s.length));
    for (let c of o) t.add(c);
    return s;
  }
  compact(e = Date.now()) {
    l(this.branchId === x, "Cannot call compact on non main branches");
    let t = new J();
    return this.compactBranch(t, new Set(), e);
  }
  toBuffer() {
    return this.table.toBuffer();
  }
  async writeToStream(e) {
    await this.table.writeToStream(e);
  }
};
var dr = "$deleted",
  ro = "$keep_value";
function Kl(r) {
  let e = r.main.columns,
    t = new Set(),
    n = Ul(e);
  for (let o = 0; o < n.length; o++) {
    let i = n[o],
      s = e.key.get(i),
      a = e.id.get(i),
      c = e.client.get(i);
    if (s === "parentid") {
      let f = e.value.get(i);
      if (f === null) {
        e.id._set(i, dr);
        continue;
      }
      if ((l(typeof f == "string", "parentid is not a string for row:", i), no(f))) continue;
      let p = new Map(),
        b;
      for (let w = o + 1; w < n.length; w++) {
        let _ = n[w];
        if (e.client.get(_) !== c) continue;
        let B = e.seq.get(_);
        if (b !== void 0 && B > b) break;
        let ue = e.key.get(_),
          j = e.id.get(_),
          le = e.value.get(_);
        if (t.has(_) || typeof ue != "number" || j !== `${f}.children` || le === dr || le === ro)
          continue;
        b === void 0 && (b = B);
        let se = Y(le);
        (l(se, "should be a valid object reference", le),
          se === a ? e.value._set(i, pd(f, ue)) : p.set(se, ue),
          t.add(_));
      }
      for (let w of p.keys()) {
        let _;
        for (let re = o + 1; re < n.length; re++) {
          let B = n[re];
          if (e.client.get(B) !== c) continue;
          let j = e.id.get(B),
            le = e.key.get(B),
            se = e.value.get(B);
          if (!(j !== w || le !== "parentid" || se !== f)) {
            if (no(se)) break;
            _ = B;
            break;
          }
        }
        (l(_ !== void 0, "failed to find parentid row for", w), e.value._set(_, pd(f, p.get(w))));
      }
      continue;
    }
    if (s === "children") {
      e.value._set(i, ro);
      continue;
    }
    let d = e.value.get(i);
    if (a.endsWith(".children") && d === ro) {
      t.add(i);
      continue;
    }
    if (a.endsWith(".children") && d === dr) {
      t.add(i);
      continue;
    }
    let h = typeof d == "string" && Y(d);
    if (!t.has(i) && a.endsWith(".children") && h && typeof s == "number") {
      let f = e.seq.get(i),
        p = !1;
      for (let b = o + 1; b < n.length; b++) {
        let w = n[b];
        if (e.client.get(w) !== c) continue;
        if (e.seq.get(w) !== f) break;
        let B = e.key.get(w),
          ue = e.id.get(w);
        if (B !== "parentid" || ue !== h) continue;
        let j = e.value.get(w);
        if (
          !no(j) &&
          (l(typeof j == "string", "expecting value to be a string for rowIdx", w), a.startsWith(j))
        ) {
          ((p = !0), e.value._set(w, `${j}@${s}`), t.add(i));
          break;
        }
      }
      if (!p) {
        let b = a.split(".", 2)[0];
        (e.id._set(i, h), e.key._set(i, "parentid"), e.value._set(i, `${b}@${s}`));
      }
    }
  }
  for (let o of t) e.id.get(o).endsWith(".children") && e.id._set(o, dr);
}
var md = {
  description: "Migrates multi-seq rows for hierarchy changes to `{parentid}@{position}`",
  migrate: Kl,
};
function Ul(r) {
  let e = [];
  for (let t = 0; t < r.client.length; t++) {
    let n = r.key.get(t);
    if (n === "parentid" || n === "children") {
      e.push(t);
      continue;
    }
    r.id.get(t).endsWith(".children") && e.push(t);
  }
  return (
    e.sort((t, n) => {
      let o = r.seq.get(t),
        i = r.seq.get(n);
      return o === i ? r.client.get(t) - r.client.get(n) : o - i;
    }),
    e
  );
}
function no(r) {
  return typeof r == "string" && r.split("@").length === 2;
}
function pd(r, e) {
  return `${r}@${e.toString()}`;
}
var yd = "$keep_value",
  gd = "$deleted",
  bd = {
    description: "Replace deleted and keep values with symbols",
    migrate(r) {
      let e = r.main.columns;
      if (e.value instanceof oe || e.value instanceof W) {
        let t = e.value.uniques;
        for (let n in t) t[n] === gd ? (t[n] = g) : t[n] === yd && (t[n] = P);
      } else
        for (let t = 0; t < e.length; ++t) {
          let n = e.value.get(t);
          n === gd ? e.value._set(t, g) : n === yd && e.value._set(t, P);
        }
    },
  };
function $l(r) {
  let e = r.main.columns;
  if (e.client instanceof oe || e.client instanceof W) {
    let t = e.client.uniques;
    for (let n in t) t[n] = Id(t[n]);
  } else
    for (let t = 0; t < e.length; ++t) {
      let n = e.client.get(t);
      e.client._set(t, Id(n));
    }
}
var Sd = { description: "Migrates row `client` to u32", migrate: $l };
function Id(r) {
  return r >>> 0;
}
var Ct = "$deleted",
  Vl = "$keep",
  ur = Pe ** Ne - 1;
function Zl(r) {
  let e = r.main.columns;
  (jl(e), Hl(e), Wl(e), Yl(e));
}
var wd = {
  description: "Migrates array positions from fraction indices to Logoot-style position ids",
  migrate: Zl,
};
function jl(r) {
  let e = new Set();
  for (let t = 0; t < r.client.length; t++) {
    let n = r.id.get(t);
    if (n === Ct) continue;
    let o = r.key.get(t);
    if (o !== "parentid") continue;
    let i = r.value.get(t);
    if (i === g) continue;
    if ((l(typeof i == "string"), i.split("@").length === 1)) {
      r.id._set(t, Ct);
      continue;
    }
    let a = r.client.get(t),
      c = r.seq.get(t),
      d = `${n}/${o}/${i}${a}/${c}`;
    if (e.has(d)) {
      r.id._set(t, Ct);
      continue;
    }
    e.add(d);
  }
}
function Hl(r) {
  for (let e = 0; e < r.client.length; e++)
    r.key.get(e) !== -1 || r.value.get(e) !== P || r.key._set(e, Vl);
}
function Wl(r) {
  let e = Jl(r);
  for (let [t, n] of e) {
    let o = Array.from(n.keys()).sort((s, a) => s - a),
      i = Math.floor(ur / (o.length + 3));
    l(i > 0, "step must be positive");
    for (let s = 0; s < o.length; s++) {
      let a = (s + 1) * i;
      l(a <= ur, "position exceeds max position");
      let c = o[s],
        d = n.get(c);
      d.sort((f, p) => Gl(r, f, p));
      let h = [];
      for (let f of d) {
        if (r.value.get(f) === g) {
          let b = h.pop();
          (l(b, "expected to have a previous position to delete"), r.key._set(f, b));
          continue;
        }
        let p = Se([{ position: a, client: r.client.get(f) }]);
        (r.key._set(f, p), h.push(p));
      }
    }
  }
}
function Jl(r) {
  let e = new Map();
  for (let t = 0; t < r.client.length; t++) {
    let n = r.id.get(t);
    if (n === Ct) continue;
    let o = r.key.get(t);
    if (typeof o != "number") continue;
    let i = e.get(n);
    i || ((i = new Map()), e.set(n, i));
    let s = i.get(o);
    (s || ((s = []), i.set(o, s)), s.push(t));
  }
  return e;
}
function Gl(r, e, t) {
  let n = r.seq.get(e),
    o = r.seq.get(t);
  if (n < o) return -1;
  if (n > o) return 1;
  let i = r.client.get(e),
    s = r.client.get(t);
  return i < s ? -1 : i > s ? 1 : 0;
}
function Yl(r) {
  let e = Xl(r);
  for (let [t, n] of e) {
    let o = n.sort((s, a) => Ql(r, s, a)),
      i = Math.floor(ur / (o.length + 3));
    l(i > 0, "step must be positive");
    for (let s = 0; s < o.length; s++) {
      let a = (s + 1) * i;
      l(a <= ur, "position exceeds max position");
      let { rowIdx: c } = o[s];
      eh(r, c, t, a);
    }
  }
}
function Xl(r) {
  let e = new Map();
  for (let t = 0; t < r.client.length; t++) {
    if (r.id.get(t) === Ct || r.key.get(t) !== "parentid") continue;
    let i = r.value.get(t);
    if (i === g) continue;
    l(typeof i == "string");
    let s = i.split("@");
    l(s.length === 2, "invalid hierarchy key");
    let a = s[0],
      c = parseFloat(s[1]),
      d = e.get(a);
    (d || ((d = []), e.set(a, d)), d.push({ rowIdx: t, value: c }));
  }
  return e;
}
function Ql(r, e, t) {
  if (e.value < t.value) return -1;
  if (e.value > t.value) return 1;
  let n = r.seq.get(e.rowIdx),
    o = r.seq.get(t.rowIdx);
  if (n > o) return -1;
  if (n < o) return 1;
  let i = r.client.get(e.rowIdx),
    s = r.client.get(t.rowIdx);
  return i > s ? -1 : i < s ? 1 : 0;
}
function eh(r, e, t, n) {
  let o = Se([{ position: n, client: r.client.get(e) }]);
  r.value._set(e, `${t}@${o}`);
}
var th = ["client", "seq", "batch", "id", "key", "value", "user"],
  oo = class {
    encode(e, t) {
      let n = e.main;
      for (let o of th) {
        let i = n.columns[o];
        (t.writeString(o), t.writeString(i.type), i.serialize(t));
      }
    }
    decode(e, t) {
      let n = e.main;
      for (; !t.endOfFile(); ) {
        let o = t.readString(),
          i = n.columns[o];
        l(i, "Column", o, "not found");
        let s = t.readString();
        (l(s === i.type, "Column type does not match:", s, "(actual)", "!=", i.type, "(expected)"),
          i.deserialize(t));
      }
    }
    fromSerializableRow(e) {
      let t = R(e.value) ? N(e.value) : e.value;
      return {
        client: e.client,
        seq: e.seq,
        id: e.id,
        key: e.key,
        value: t,
        user: e.user,
        batch: e.batch ?? 0,
      };
    }
    toSerializableRow(e) {
      let t = e.value;
      return (
        A(t) && (t = k(t)),
        {
          client: e.client,
          seq: e.seq,
          id: e.id,
          key: e.key,
          value: t,
          user: e.user,
          batch: e.batch,
        }
      );
    }
  };
function rh(r) {
  let e = r.main.columns,
    t = new Map();
  for (let i = 0; i < e.client.length; i++) {
    let s = e.client.get(i),
      a = t.get(s);
    a === void 0 ? t.set(s, 1) : t.set(s, a + 1);
  }
  let n = new Map();
  for (let [i, s] of t) n.set(i, Le({ batchNo: 1, rowCount: s }));
  let o = W.withBuckets({ buffer: Uint32Array }).create();
  for (let i = 0; i < e.client.length; i++) {
    let s = e.client.get(i),
      a = n.get(s);
    o.add(a);
  }
  e.batch = o;
}
var vd = {
  description: "Adds batch column and populates initial value",
  codec: new oo(),
  migrate: rh,
};
function nh(r) {
  let e = r.main.columns;
  oh(e);
  let t = new Map();
  for (let n = 0; n < e.length; n++) {
    if (e.id.get(n) === V) continue;
    let i = e.value.get(n);
    if (typeof i != "string" || !i.startsWith("arr(")) continue;
    let s = i.slice(4, -1),
      a = t.get(s);
    if (a) {
      a.referenceRowIdx.push(n);
      continue;
    }
    t.set(s, { itemRowIdxs: [], referenceRowIdx: [n], keepRowIdx: -1, isAtomic: !1 });
  }
  for (let n = 0; n < e.length; n++) {
    let o = e.id.get(n);
    if (!t.has(o)) continue;
    let i = t.get(o);
    if (e.key.get(n) === T) {
      (l(i.keepRowIdx === -1, "array has multiple keep rows", o), (i.keepRowIdx = n));
      continue;
    }
    let a = e.value.get(n);
    if (typeof a == "string" && (a.startsWith("arr(") || a.startsWith("obj("))) {
      l(i.itemRowIdxs.length === 0, "array has mixed primitive/reference items", o);
      continue;
    }
    (!i.isAtomic && a === g) || ((i.isAtomic = !0), i.itemRowIdxs.push(n));
  }
  for (let [n, o] of t) {
    if (!o.isAtomic) continue;
    for (let h of o.referenceRowIdx) e.id._set(h, V);
    o.itemRowIdxs.sort((h, f) => {
      let p = e.seq.get(h),
        b = e.seq.get(f);
      if (p < b) return -1;
      if (p > b) return 1;
      let w = e.client.get(h),
        _ = e.client.get(f);
      return w < _ ? -1 : w > _ ? 1 : 0;
    });
    let i = n.split(".");
    l(i.length >= 2, "invalid array reference id", n);
    let s = i.pop(),
      a = i.join("."),
      c = [],
      d = o.keepRowIdx;
    (l(d !== -1, "array reference has no keep row", n),
      e.id._set(d, a),
      e.key._set(d, s),
      e.value._set(d, []));
    for (let h of o.itemRowIdxs) {
      e.id._set(h, a);
      let f = e.key.get(h),
        p = e.value.get(h);
      if (p === g) {
        let b = c.findIndex((w) => w.key === f);
        b !== -1 && c.splice(b, 1);
      } else {
        let b = c.findIndex((w) => w.key > f);
        b !== -1 ? c.splice(b, 0, { key: f, value: p }) : c.push({ key: f, value: p });
      }
      (e.key._set(h, s),
        e.value._set(
          h,
          c.map(({ value: b }) => b)
        ));
    }
  }
}
function oh(r) {
  let e = new Set();
  for (let t = 0; t < r.client.length; t++) {
    let n = r.id.get(t);
    if (n === V) continue;
    let o = r.key.get(t),
      i = r.client.get(t),
      s = r.seq.get(t),
      a = r.value.get(t);
    typeof a == "symbol" && (a = a.toString());
    let c = `${n}/${o}/${a}/${i}/${s}`;
    if (e.has(c)) {
      r.id._set(t, V);
      continue;
    }
    e.add(c);
  }
}
var xd = { description: "Migrates arrays of primitives to atomic array values", migrate: nh };
var Cd = "$keep",
  io = "$deleted";
function ih(r) {
  let e = r.main.columns,
    t = ah(e),
    n = ch(e, t);
  for (let [o, i] of n) {
    i.sort((c, d) => dh(e, c, d));
    let s = new Map(),
      a = new Map();
    for (let c = 0; c < i.length; c++) {
      let d = i[c],
        h = e.id.get(d);
      l(h === o, "array reference id does not match row id", h);
      let f = e.key.get(d);
      l(f !== Cd, "array reference key cannot be $keep", f);
      let p = e.value.get(d);
      if ((l(p === g || so(p), "array reference value must be object reference", p), p === g))
        continue;
      let b = p.slice(4, -1);
      (s.set(b, f), a.set(f, b));
    }
    for (let c = 0; c < i.length; c++) {
      let d = i[c],
        h = e.key.get(d),
        f = e.value.get(d);
      if (f === g) {
        let b = a.get(h);
        if (b === void 0) {
          e.id._set(d, io);
          continue;
        }
        let w = s.get(b);
        h === w ? e.key._set(d, b) : e.id._set(d, io);
        continue;
      }
      l(so(f), "array reference value must be object reference", f);
      let p = f.slice(4, -1);
      (e.key._set(d, p), e.value._set(d, h));
    }
  }
}
function sh(r) {
  return typeof r == "string" && r.startsWith("arr(");
}
function ah(r) {
  let e = new Set();
  for (let t = 0; t < r.client.length; t++) {
    if (r.id.get(t) === io) continue;
    let o = r.value.get(t);
    if (!sh(o)) continue;
    let i = o.slice(4, -1);
    e.add(i);
  }
  return e;
}
function so(r) {
  return typeof r == "string" && r.startsWith("obj(");
}
function ch(r, e) {
  let t = new Map([...e].map((n) => [n, []]));
  for (let n = 0; n < r.client.length; n++) {
    let o = r.id.get(n);
    if (!t.has(o) || r.key.get(n) === Cd) continue;
    let s = r.value.get(n);
    (l(s === g || so(s), "only DELETED_VALUE and object references can be reference array items"),
      t.get(o).push(n));
  }
  return t;
}
function dh(r, e, t) {
  let n = r.seq.get(e),
    o = r.seq.get(t);
  if (n < o) return -1;
  if (n > o) return 1;
  let i = r.client.get(e),
    s = r.client.get(t);
  return i < s ? -1 : i > s ? 1 : 0;
}
var Rd = {
  description: "Migrates array of objects to invert index from position-keyed to id-keyed",
  migrate: ih,
};
var Nd = ["client", "seq", "batch", "id", "key", "value", "user"];
var ao = class {
  encode(e, t) {
    let n = e.main;
    (this.writeSection(1296389185, t, (i) => {
      ph(n.metadata, i);
    }),
      this.writeSection(1296125510, t, (i) => {
        yh(n.manifest, i);
      }),
      this.writeSection(1129270355, t, (i) => {
        this.encodeColumns(n.columns, i);
      }));
    let o = n.hierarchyData;
    (o &&
      this.writeSection(1212761426, t, (i) => {
        hh(o, i);
      }),
      this.writeSection(1296649816, t, (i) => {
        uh(n.minIndexCache, i);
      }));
  }
  decode(e, t) {
    let n = e.main;
    for (; !t.endOfFile(); ) {
      let o = t.readUint32(),
        i = t.readFloat64(),
        s = new O(t.readBytes(i));
      switch (o) {
        case 1129270355:
          this.decodeColumns(n.columns, s);
          break;
        case 1296649816: {
          n.minIndexCache = lh(s);
          break;
        }
        case 1212761426:
          n.hierarchyData = fh(s);
          break;
        case 1296125510:
          n.manifest = gh(s);
          break;
        case 1296389185:
          n.metadata = mh(s);
          break;
        default:
          break;
      }
    }
  }
  fromSerializableRow(e) {
    let t = R(e.value) ? N(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      A(t) && (t = k(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(Nd.length);
    for (let n of Nd) {
      let o = e[n];
      (t.writeString(n), t.writeString(o.type), o.serialize(t));
    }
  }
  decodeColumns(e, t) {
    let n = t.readUint32();
    for (let o = 0; o < n; o++) {
      let i = t.readString(),
        s = e[i];
      l(s, "Column", i, "not found");
      let a = t.readString();
      if (a !== s.type)
        throw new Error(`Column type does not match: ${a} (actual) != ${s.type} (expected)`);
      s.deserialize(t);
    }
  }
  writeSection(e, t, n) {
    let o = new E();
    n(o);
    let i = o.getBuffer();
    (t.writeUint32(e), t.writeFloat64(i.length), t.writeBytes(i));
  }
};
function uh(r, e) {
  let t = r;
  (e.writeTypedArray(new Float64Array(t.seqs)),
    e.writeTypedArray(new Float64Array(t.idxs)),
    e.writeUint32(t.maxSize ?? 0));
}
function lh(r) {
  let e = Array.from(r.readTypedArray(Float64Array)),
    t = Array.from(r.readTypedArray(Float64Array)),
    n = r.readUint32(),
    o = new H({ maxSize: n });
  return (o.load(e, t), o);
}
function hh(r, e) {
  let t = JSON.stringify(
    [...r.parentOverrides].map(([n, o]) => [
      n,
      [...o].map(([i, s]) => [
        i,
        Object.fromEntries(
          [...s].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              A(d.parentFrom) && (d.parentFrom = k(d.parentFrom)),
              A(d.parentTo) && (d.parentTo = k(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(r.parentHistory)));
}
function fh(r) {
  let e = JSON.parse(r.readString()),
    t = new Map();
  for (let [o, i] of e) {
    let s = new Map();
    for (let [a, c] of i) {
      let d = new Map();
      for (let h in c) {
        let f = c[h];
        (R(f.parentFrom) && (f.parentFrom = N(f.parentFrom)),
          R(f.parentTo) && (f.parentTo = N(f.parentTo)),
          d.set(Number(h), f));
      }
      s.set(a, d);
    }
    t.set(o, s);
  }
  let n = Array.from(r.readTypedArray(Uint32Array));
  return new G(n, t);
}
function ph(r, e) {
  e.writeFloat64(r.seq);
}
function mh(r) {
  return { seq: r.readFloat64(), compactedAt: 0, compactedLength: 0 };
}
function yh(r, e) {
  r.serialize(e);
}
function gh(r) {
  let e = new $();
  return (e.deserialize(r), e);
}
var kd = { description: "Adds named sections to binary documents", codec: new ao(), migrate() {} };
var Ad = ["client", "seq", "batch", "id", "key", "value", "user"];
var co = class {
  encode(e, t) {
    let n = e.branches;
    t.writeUint32(n.size);
    for (let [o, i] of n) {
      t.writeString(o);
      let s = new E();
      (this.writeSection(1296389185, s, (d) => {
        vh(i.metadata, d);
      }),
        this.writeSection(1296125510, s, (d) => {
          Ch(i.manifest, d);
        }),
        this.writeSection(1129270355, s, (d) => {
          this.encodeColumns(i.columns, d);
        }));
      let a = i.hierarchyData;
      (a &&
        this.writeSection(1212761426, s, (d) => {
          Sh(a, d);
        }),
        this.writeSection(1296649816, s, (d) => {
          bh(i.minIndexCache, d);
        }));
      let c = s.getBuffer();
      (t.writeFloat64(c.length), t.writeBytes(c));
    }
  }
  decode(e, t) {
    let n = t.readUint32(),
      o = new Map();
    for (let i = 0; i < n; i++) {
      let s = t.readString(),
        a = new M(this, s),
        c = t.readFloat64(),
        d = new O(t.readBytes(c));
      for (; !d.endOfFile(); ) {
        let h = d.readUint32(),
          f = d.readFloat64(),
          p = new O(d.readBytes(f));
        switch (h) {
          case 1129270355:
            this.decodeColumns(a.columns, p);
            break;
          case 1296649816:
            a.minIndexCache = Ih(p);
            break;
          case 1212761426:
            a.hierarchyData = wh(p);
            break;
          case 1296125510:
            a.manifest = Rh(p);
            break;
          case 1296389185:
            a.metadata = xh(p);
            break;
          default:
            break;
        }
      }
      ((a.metadata.branchId = a.metadata.branchId ?? s), o.set(s, a));
    }
    ((e.branches = o), e.branches.has(x) || e.branches.set(x, new M(this, x)));
  }
  fromSerializableRow(e) {
    let t = R(e.value) ? N(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      A(t) && (t = k(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(Ad.length);
    for (let n of Ad) {
      let o = e[n];
      (t.writeString(n), t.writeString(o.type), o.serialize(t));
    }
  }
  decodeColumns(e, t) {
    let n = t.readUint32();
    for (let o = 0; o < n; o++) {
      let i = t.readString(),
        s = e[i];
      l(s, "Column", i, "not found");
      let a = t.readString();
      if (a !== s.type)
        throw new Error(`Column type does not match: ${a} (actual) != ${s.type} (expected)`);
      s.deserialize(t);
    }
  }
  writeSection(e, t, n) {
    let o = new E();
    n(o);
    let i = o.getBuffer();
    (t.writeUint32(e), t.writeFloat64(i.length), t.writeBytes(i));
  }
};
function bh(r, e) {
  (e.writeTypedArray(new Float64Array(r.seqs)),
    e.writeTypedArray(new Float64Array(r.idxs)),
    e.writeUint32(r.maxSize ?? 0));
}
function Ih(r) {
  let e = Array.from(r.readTypedArray(Float64Array)),
    t = Array.from(r.readTypedArray(Float64Array)),
    n = r.readUint32(),
    o = new H({ maxSize: n });
  return (o.load(e, t), o);
}
function Sh(r, e) {
  let t = JSON.stringify(
    [...r.parentOverrides].map(([n, o]) => [
      n,
      [...o].map(([i, s]) => [
        i,
        Object.fromEntries(
          [...s].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              A(d.parentFrom) && (d.parentFrom = k(d.parentFrom)),
              A(d.parentTo) && (d.parentTo = k(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(r.parentHistory)));
}
function wh(r) {
  let e = JSON.parse(r.readString()),
    t = new Map();
  for (let [o, i] of e) {
    let s = new Map();
    for (let [a, c] of i) {
      let d = new Map();
      for (let h in c) {
        let f = c[h];
        (R(f.parentFrom) && (f.parentFrom = N(f.parentFrom)),
          R(f.parentTo) && (f.parentTo = N(f.parentTo)),
          d.set(Number(h), f));
      }
      s.set(a, d);
    }
    t.set(o, s);
  }
  let n = Array.from(r.readTypedArray(Uint32Array));
  return new G(n, t);
}
function vh(r, e) {
  (e.writeFloat64(r.seq), e.writeString(r.branchId ?? x));
}
function xh(r) {
  let e = r.readFloat64(),
    t = r.readString();
  return { seq: e, branchId: t, compactedAt: 0, compactedLength: 0 };
}
function Ch(r, e) {
  r.serialize(e);
}
function Rh(r) {
  let e = new $();
  return (e.deserialize(r), e);
}
var Td = { description: "Stores table data by branches", codec: new co(), migrate() {} };
var _d = ["client", "seq", "batch", "id", "key", "value", "user"];
var uo = class {
  encode(e, t) {
    let n = e.branches;
    t.writeUint32(n.size);
    for (let [o, i] of n) {
      t.writeString(o);
      let s = t.byteOffset;
      t.writeFloat64(0);
      let a = t.byteOffset;
      (t.withAlignmentOrigin(a, () => {
        (this.writeSection(1296389185, t, (d) => {
          _h(i.metadata, d);
        }),
          this.writeSection(1296125510, t, (d) => {
            Mh(i.manifest, d);
          }),
          this.writeSection(1129270355, t, (d) => {
            this.encodeColumns(i.columns, d);
          }));
        let c = i.hierarchyData;
        (c &&
          this.writeSection(1212761426, t, (d) => {
            Ah(c, d);
          }),
          this.writeSection(1296649816, t, (d) => {
            Nh(i.minIndexCache, d);
          }));
      }),
        t.writeFloat64At(s, t.byteOffset - a));
    }
  }
  decode(e, t) {
    let n = t.readUint32(),
      o = new Map();
    for (let i = 0; i < n; i++) {
      let s = t.readString(),
        a = new M(this, s),
        c = t.readFloat64(),
        d = new O(t.readBytes(c));
      for (; !d.endOfFile(); ) {
        let h = d.readUint32(),
          f = d.readFloat64(),
          p = new O(d.readBytes(f));
        switch (h) {
          case 1129270355:
            this.decodeColumns(a.columns, p);
            break;
          case 1296649816:
            a.minIndexCache = kh(p);
            break;
          case 1212761426:
            a.hierarchyData = Th(p);
            break;
          case 1296125510:
            a.manifest = Dh(p);
            break;
          case 1296389185:
            a.metadata = Oh(p);
            break;
          default:
            break;
        }
      }
      ((a.metadata.branchId = a.metadata.branchId ?? s), o.set(s, a));
    }
    ((e.branches = o), e.branches.has(x) || e.branches.set(x, new M(this, x)));
  }
  fromSerializableRow(e) {
    let t = R(e.value) ? N(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      A(t) && (t = k(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(_d.length);
    for (let n of _d) {
      let o = e[n];
      (t.writeString(n), t.writeString(o.type), o.serialize(t));
    }
  }
  decodeColumns(e, t) {
    let n = t.readUint32();
    for (let o = 0; o < n; o++) {
      let i = t.readString(),
        s = e[i];
      l(s, "Column", i, "not found");
      let a = t.readString();
      if (a !== s.type)
        throw new Error(`Column type does not match: ${a} (actual) != ${s.type} (expected)`);
      s.deserialize(t);
    }
  }
  writeSection(e, t, n) {
    t.writeUint32(e);
    let o = t.byteOffset;
    t.writeFloat64(0);
    let i = t.byteOffset;
    (t.withAlignmentOrigin(i, () => {
      n(t);
    }),
      t.writeFloat64At(o, t.byteOffset - i));
  }
};
function Nh(r, e) {
  (r.trimToMaxSize(),
    e.writeTypedArray(new Float64Array(r.seqs)),
    e.writeTypedArray(new Float64Array(r.idxs)),
    e.writeUint32(r.maxSize ?? 0));
}
function kh(r) {
  let e = Array.from(r.readTypedArray(Float64Array)),
    t = Array.from(r.readTypedArray(Float64Array)),
    n = r.readUint32(),
    o = new H({ maxSize: n });
  return (o.load(e, t), o);
}
function Ah(r, e) {
  let t = JSON.stringify(
    [...r.parentOverrides].map(([n, o]) => [
      n,
      [...o].map(([i, s]) => [
        i,
        Object.fromEntries(
          [...s].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              A(d.parentFrom) && (d.parentFrom = k(d.parentFrom)),
              A(d.parentTo) && (d.parentTo = k(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(r.parentHistory)));
}
function Th(r) {
  let e = JSON.parse(r.readString()),
    t = new Map();
  for (let [o, i] of e) {
    let s = new Map();
    for (let [a, c] of i) {
      let d = new Map();
      for (let h in c) {
        let f = c[h];
        (R(f.parentFrom) && (f.parentFrom = N(f.parentFrom)),
          R(f.parentTo) && (f.parentTo = N(f.parentTo)),
          d.set(Number(h), f));
      }
      s.set(a, d);
    }
    t.set(o, s);
  }
  let n = Array.from(r.readTypedArray(Uint32Array));
  return new G(n, t);
}
function _h(r, e) {
  (e.writeFloat64(r.seq),
    e.writeString(r.branchId ?? x),
    e.writeFloat64(r.compactedAt),
    e.writeFloat64(r.compactedLength));
}
function Oh(r) {
  let e = r.readFloat64(),
    t = r.readString(),
    n = r.readFloat64(),
    o = r.readFloat64();
  return { seq: e, branchId: t, compactedAt: n, compactedLength: o };
}
function Mh(r, e) {
  r.serialize(e);
}
function Dh(r) {
  let e = new $();
  return (e.deserialize(r), e);
}
function Bh(r) {
  let e = Date.now();
  for (let t of r.branches.values())
    ((t.metadata.compactedAt = e), (t.metadata.compactedLength = t.columns.length));
}
var Od = {
  description: "Adds compactedAt and compactedLength to branch metadata",
  codec: new uo(),
  migrate: Bh,
};
var Md = {
  description: "Clear caches to fix wrong hierarchy data",
  migrate: (r) => {
    for (let e of r.branches.values())
      ((e.hierarchyData = void 0),
        (e.minIndexCache = new H({ maxSize: 1e3 })),
        (e.metadata.seq = 0),
        (e.manifest = new $()));
  },
};
var Dd = { migrate() {}, description: "Dummy migration. Does nothing" };
var Rt = {
  m1_2: Jc,
  m2_3: md,
  m3_4: bd,
  m4_5: Sd,
  m5_6: wd,
  m6_7: vd,
  m7_8: xd,
  m8_9: Rd,
  m9_10: Dd,
  m10_11: kd,
  m11_12: Td,
  m12_13: Od,
  m13_14: Md,
};
function Bd(r, e) {
  let t = `m${r}_${e}`;
  return (l(Rt[t], "Migration from", r, "to", e, "does not exist"), Rt[t]);
}
function Fe(r, e = 1) {
  for (let t = Math.max(r, 2); t > e; --t) {
    let n = Bd(t - 1, t);
    if (n.codec) return n.codec;
  }
}
function lo(r, e = Nt.version) {
  let t = new O(r),
    { version: n } = ut(t);
  if (n === e) return { migrated: !1, version: e };
  l(n < e, "Binary document version is newer than current version (", n, ">", e, ")");
  let o = Fe(n);
  l(o, "Codec not found for version", n);
  let i = Fe(e, n);
  i || (i = o);
  let s = new M(o, x),
    a = { branches: new Map([[x, s]]), main: s };
  o.decode(a, t);
  for (let d = n; d < e; ++d) Bd(d, d + 1).migrate(a);
  let c = new E();
  return (lt(e, c), i.encode(a, c), { migrated: !0, from: n, to: e, buffer: c.getBuffer() });
}
var lr = Object.keys(Rt).reduce((r, e) => {
  let [, t] = e.split("_");
  l(typeof t == "string", "Invalid migration key", e);
  let n = Number.parseInt(t, 10);
  return (l(Number.isFinite(n), "Invalid migration version", e), Math.max(r, n));
}, Number.NEGATIVE_INFINITY);
l(Number.isFinite(lr), "No migrations found");
var Ed = Fe(lr);
l(Ed, "Codec not found for version", lr);
var Nt = { version: lr, codec: Ed };
var Gc = Nt.version,
  hr = class hr {
    constructor(e = Nt.version) {
      this.version = e;
      u(this, "branches");
      u(this, "codec");
      let t = Fe(e);
      (l(t, "Codec not found for version", e),
        (this.codec = t),
        (this.branches = new Map([[x, new M(this.codec, x)]])));
    }
    getBranch(e) {
      let t = this.branches.get(e);
      return (l(t, "Branch", e, "does not exist"), t);
    }
    getOrCreateBranch(e) {
      let t = this.branches.get(e);
      return (t || ((t = new M(this.codec, e)), this.branches.set(e, t)), t);
    }
    get main() {
      return this.getBranch(x);
    }
    addSerializableRows(e) {
      for (let t of e) this.getOrCreateBranch(t.branchId ?? x).addSerializableRow(t);
    }
    toBuffer() {
      let e = new E();
      return (lt(this.version, e), this.codec.encode(this, e), e.getBuffer());
    }
    async writeToStream(e) {
      let t = new E();
      (lt(this.version, t), this.codec.encode(this, t), await t.writeToStream(e));
    }
    static loadVersionFromBuffer(e) {
      let t = new O(e),
        { version: n } = ut(t);
      return n;
    }
    static fromBuffer(e) {
      let t = new O(e),
        { version: n } = ut(t),
        o = new hr(n);
      return (o.decode(t), o);
    }
    decode(e) {
      this.codec.decode(this, e);
    }
  };
u(hr, "MAGIC", "FRAMERCRDT");
var J = hr;
var zd = {
  RootNode: !0,
  FrameNode: !0,
  ShapeContainerNode: !0,
  CanvasPageNode: !0,
  DesignPageNode: !0,
  PathNode: !0,
  BooleanShapeNode: !0,
  SVGNode: !0,
  TextNode: !0,
  RichTextNode: !0,
  RectangleShapeNode: !0,
  OvalShapeNode: !0,
  OverlayNode: !0,
  PolygonShapeNode: !0,
  StarShapeNode: !0,
  ShapeGroupNode: !0,
  SmartComponentNode: !0,
  WebPageNode: !0,
  CodeComponentNode: !0,
  ColorStyleTokenListNode: !0,
  ColorStyleTokenNode: !0,
  ErrorListNode: !0,
  ErrorNode: !0,
  ExternalModuleNode: !0,
  ExternalModulesListNode: !0,
  LocalModulesListNode: !0,
  LocalModuleNode: !0,
  ContentManagementNode: !0,
  CollectionNode: !0,
  CollectionItemNode: !0,
  ComponentPresetNode: !0,
  PresetsListNode: !0,
  BlockquoteStylePresetNode: !0,
  TableStylePresetNode: !0,
  TextStylePresetNode: !0,
  LinkStylePresetNode: !0,
  InlineCodeStylePresetNode: !0,
  ImageStylePresetNode: !0,
  RoutesNode: !0,
  RedirectRouteNode: !0,
  RewriteRouteNode: !0,
  RouteSegmentNode: !0,
  RouteSegmentRootNode: !0,
  FormPlainTextInputNode: !0,
  FormBooleanInputNode: !0,
  FormSelectNode: !0,
  ProxyRouteNode: !0,
  LayoutTemplateNode: !0,
  SlotNode: !0,
  SlotPropertyNode: !0,
  EntityFolderNode: !0,
  EntityReferenceNode: !0,
  EntityRootNode: !0,
  BlockquoteEntityTypeRootNode: !0,
  InlineCodeEntityTypeRootNode: !0,
  LinkEntityTypeRootNode: !0,
  TextEntityTypeRootNode: !0,
  ColorEntityTypeRootNode: !0,
  CMSEntityTypeRootNode: !0,
  CodeFileEntityTypeRootNode: !0,
  ComponentEntityTypeRootNode: !0,
  LayoutTemplateEntityTypeRootNode: !0,
  VectorSetEntityTypeRootNode: !0,
  FunnelsEntityTypeRootNode: !0,
  AbTestsEntityTypeRootNode: !0,
  ContentManagementEntityTypeRootNode: !0,
  VectorSetNode: !0,
  AnalyticsScopeNode: !0,
  FunnelNode: !0,
  FunnelStepNode: !0,
  FunnelStepActionNode: !0,
  LocalizationGlossaryNode: !0,
  LocalizationGlossaryItemNode: !0,
  HeaderRouteNode: !0,
  BranchesNode: !0,
  BranchNode: !0,
  CustomCodeScopeNode: !0,
  CustomCodeNode: !0,
  ShaderNode: !0,
};
function Eh(r) {
  return r in zd;
}
var zh = (r) => (typeof r.__class == "string" && Eh(r.__class) ? r.id : void 0);
function Ph(r, e = Wr()) {
  return new xt({ client: e, user: r, extractIdFromObject: zh });
}
function Lh(r) {
  return Map.groupBy(r, (e) => e.branchId ?? x);
}
function qh(r, e) {
  if (r.length === 0) return [];
  let t = new J(e),
    n = t.getBranch(x);
  n.addSerializableRows(r);
  let o = t.toBuffer(),
    i = lo(o),
    s = J.fromBuffer(i.migrated ? i.buffer : o);
  return i.migrated ? s.getBranch(x).getRows() : n.getRows();
}
function xb(r) {
  return r === "/" ? "Home" : r;
}
function Cb(r) {
  return r === "/"
    ? "Home"
    : ((r = Kh(r)),
      (r = Fh(r)),
      (r = Ld(r)),
      (r = Uh(r)),
      (r = r.trim()),
      (r = r.split(" ").map(Ri).join(" ")),
      r);
}
function Fh(r) {
  return r.replace(/-+/gu, " ");
}
function Kh(r) {
  return r.replace(Ci, "");
}
var Pd = /\s*\/+[/\s]*/gu;
function Uh(r) {
  return r.replace(Pd, " / ");
}
function Ld(r) {
  return r.replace(/^[/\s]+|[/\s]+$/gu, "");
}
var $h = /\s+/gu,
  Vh = /-+/gu;
function Rb(r) {
  if (r === "Home") return "/";
  let e = r;
  return (
    (e = Ld(e)),
    (e = e.replace(Pd, "-")),
    (e = e.replace($h, "-")),
    (e = e.replace(Vh, "-")),
    (e = e.toLowerCase()),
    "/" + e
  );
}
var wi = {};
We(wi, {
  $brand: () => Gr,
  $input: () => la,
  $output: () => ua,
  NEVER: () => Ai,
  TimePrecision: () => ya,
  ZodAny: () => Eo,
  ZodArray: () => qo,
  ZodBase64: () => Dr,
  ZodBase64URL: () => Br,
  ZodBigInt: () => He,
  ZodBigIntFormat: () => Pr,
  ZodBoolean: () => je,
  ZodCIDRv4: () => Or,
  ZodCIDRv6: () => Mr,
  ZodCUID: () => Cr,
  ZodCUID2: () => Rr,
  ZodCatch: () => ai,
  ZodCodec: () => Zr,
  ZodCustom: () => Lt,
  ZodCustomStringFormat: () => Ve,
  ZodDate: () => Dt,
  ZodDefault: () => ti,
  ZodDiscriminatedUnion: () => Ko,
  ZodE164: () => Er,
  ZodEmail: () => wr,
  ZodEmoji: () => vr,
  ZodEnum: () => Ue,
  ZodError: () => Zh,
  ZodExactOptional: () => Xo,
  ZodFile: () => Go,
  ZodFirstPartyTypeKind: () => Ii,
  ZodFunction: () => yi,
  ZodGUID: () => At,
  ZodIPv4: () => Tr,
  ZodIPv6: () => _r,
  ZodISODate: () => mr,
  ZodISODateTime: () => pr,
  ZodISODuration: () => gr,
  ZodISOTime: () => yr,
  ZodIntersection: () => Uo,
  ZodIssueCode: () => Hh,
  ZodJWT: () => zr,
  ZodKSUID: () => Ar,
  ZodLazy: () => fi,
  ZodLiteral: () => Jo,
  ZodMAC: () => Ao,
  ZodMap: () => Ho,
  ZodNaN: () => di,
  ZodNanoID: () => xr,
  ZodNever: () => Po,
  ZodNonOptional: () => $r,
  ZodNull: () => Do,
  ZodNullable: () => ei,
  ZodNumber: () => Ze,
  ZodNumberFormat: () => Te,
  ZodObject: () => Et,
  ZodOptional: () => Ur,
  ZodPipe: () => Vr,
  ZodPrefault: () => ni,
  ZodPromise: () => mi,
  ZodReadonly: () => ui,
  ZodRealError: () => F,
  ZodRecord: () => Pt,
  ZodSet: () => Wo,
  ZodString: () => $e,
  ZodStringFormat: () => C,
  ZodSuccess: () => si,
  ZodSymbol: () => Oo,
  ZodTemplateLiteral: () => hi,
  ZodTransform: () => Yo,
  ZodTuple: () => Vo,
  ZodType: () => S,
  ZodULID: () => Nr,
  ZodURL: () => Mt,
  ZodUUID: () => ie,
  ZodUndefined: () => Mo,
  ZodUnion: () => zt,
  ZodUnknown: () => zo,
  ZodVoid: () => Lo,
  ZodXID: () => kr,
  ZodXor: () => Fo,
  _ZodString: () => Sr,
  _default: () => ri,
  _function: () => Zu,
  any: () => xu,
  array: () => Bt,
  base64: () => su,
  base64url: () => au,
  bigint: () => bu,
  boolean: () => _o,
  catch: () => ci,
  check: () => ju,
  cidrv4: () => ou,
  cidrv6: () => iu,
  clone: () => Je,
  codec: () => Uu,
  coerce: () => Si,
  config: () => he,
  core: () => ye,
  cuid: () => Gd,
  cuid2: () => Yd,
  custom: () => Hu,
  date: () => Ru,
  decode: () => wo,
  decodeAsync: () => xo,
  describe: () => Wu,
  discriminatedUnion: () => Ou,
  e164: () => cu,
  email: () => Fd,
  emoji: () => Wd,
  encode: () => So,
  encodeAsync: () => vo,
  endsWith: () => tt,
  enum: () => Fr,
  exactOptional: () => Qo,
  file: () => Lu,
  flattenError: () => Vt,
  float32: () => pu,
  float64: () => mu,
  formatError: () => Zt,
  fromJSONSchema: () => tl,
  function: () => Zu,
  getErrorMap: () => Jh,
  globalRegistry: () => ae,
  gt: () => pe,
  gte: () => K,
  guid: () => Kd,
  hash: () => fu,
  hex: () => hu,
  hostname: () => lu,
  httpUrl: () => Hd,
  includes: () => Qe,
  instanceof: () => Gu,
  int: () => Ir,
  int32: () => yu,
  int64: () => Iu,
  intersection: () => $o,
  ipv4: () => tu,
  ipv6: () => nu,
  iso: () => Ke,
  json: () => Xu,
  jwt: () => du,
  keyof: () => Nu,
  ksuid: () => eu,
  lazy: () => pi,
  length: () => Me,
  literal: () => Pu,
  locales: () => da,
  looseObject: () => Tu,
  looseRecord: () => Du,
  lowercase: () => Ye,
  lt: () => fe,
  lte: () => ne,
  mac: () => ru,
  map: () => Bu,
  maxLength: () => Oe,
  maxSize: () => Re,
  meta: () => Ju,
  mime: () => rt,
  minLength: () => me,
  minSize: () => ce,
  multipleOf: () => Ce,
  nan: () => Ku,
  nanoid: () => Jd,
  nativeEnum: () => zu,
  negative: () => vn,
  never: () => Lr,
  nonnegative: () => Cn,
  nonoptional: () => ii,
  nonpositive: () => xn,
  normalize: () => ot,
  null: () => Bo,
  nullable: () => _t,
  nullish: () => qu,
  number: () => To,
  object: () => ku,
  optional: () => Tt,
  overwrite: () => nt,
  parse: () => yo,
  parseAsync: () => go,
  partialRecord: () => Mu,
  pipe: () => Ot,
  positive: () => wn,
  prefault: () => oi,
  preprocess: () => Qu,
  prettifyError: () => Mi,
  promise: () => Vu,
  property: () => Rn,
  readonly: () => li,
  record: () => jo,
  refine: () => gi,
  regex: () => Ge,
  regexes: () => xe,
  registry: () => ha,
  safeDecode: () => Ro,
  safeDecodeAsync: () => ko,
  safeEncode: () => Co,
  safeEncodeAsync: () => No,
  safeParse: () => bo,
  safeParseAsync: () => Io,
  set: () => Eu,
  setErrorMap: () => Wh,
  size: () => _e,
  slugify: () => ct,
  startsWith: () => et,
  strictObject: () => Au,
  string: () => br,
  stringFormat: () => uu,
  stringbool: () => Yu,
  success: () => Fu,
  superRefine: () => bi,
  symbol: () => wu,
  templateLiteral: () => $u,
  toJSONSchema: () => zc,
  toLowerCase: () => st,
  toUpperCase: () => at,
  transform: () => Kr,
  treeifyError: () => Oi,
  trim: () => it,
  tuple: () => Zo,
  uint32: () => gu,
  uint64: () => Su,
  ulid: () => Xd,
  undefined: () => vu,
  union: () => qr,
  unknown: () => Ae,
  uppercase: () => Xe,
  url: () => jd,
  util: () => v,
  uuid: () => Ud,
  uuidv4: () => $d,
  uuidv6: () => Vd,
  uuidv7: () => Zd,
  void: () => Cu,
  xid: () => Qd,
  xor: () => _u,
});
var kt = {};
We(kt, {
  ZodAny: () => Eo,
  ZodArray: () => qo,
  ZodBase64: () => Dr,
  ZodBase64URL: () => Br,
  ZodBigInt: () => He,
  ZodBigIntFormat: () => Pr,
  ZodBoolean: () => je,
  ZodCIDRv4: () => Or,
  ZodCIDRv6: () => Mr,
  ZodCUID: () => Cr,
  ZodCUID2: () => Rr,
  ZodCatch: () => ai,
  ZodCodec: () => Zr,
  ZodCustom: () => Lt,
  ZodCustomStringFormat: () => Ve,
  ZodDate: () => Dt,
  ZodDefault: () => ti,
  ZodDiscriminatedUnion: () => Ko,
  ZodE164: () => Er,
  ZodEmail: () => wr,
  ZodEmoji: () => vr,
  ZodEnum: () => Ue,
  ZodExactOptional: () => Xo,
  ZodFile: () => Go,
  ZodFunction: () => yi,
  ZodGUID: () => At,
  ZodIPv4: () => Tr,
  ZodIPv6: () => _r,
  ZodIntersection: () => Uo,
  ZodJWT: () => zr,
  ZodKSUID: () => Ar,
  ZodLazy: () => fi,
  ZodLiteral: () => Jo,
  ZodMAC: () => Ao,
  ZodMap: () => Ho,
  ZodNaN: () => di,
  ZodNanoID: () => xr,
  ZodNever: () => Po,
  ZodNonOptional: () => $r,
  ZodNull: () => Do,
  ZodNullable: () => ei,
  ZodNumber: () => Ze,
  ZodNumberFormat: () => Te,
  ZodObject: () => Et,
  ZodOptional: () => Ur,
  ZodPipe: () => Vr,
  ZodPrefault: () => ni,
  ZodPromise: () => mi,
  ZodReadonly: () => ui,
  ZodRecord: () => Pt,
  ZodSet: () => Wo,
  ZodString: () => $e,
  ZodStringFormat: () => C,
  ZodSuccess: () => si,
  ZodSymbol: () => Oo,
  ZodTemplateLiteral: () => hi,
  ZodTransform: () => Yo,
  ZodTuple: () => Vo,
  ZodType: () => S,
  ZodULID: () => Nr,
  ZodURL: () => Mt,
  ZodUUID: () => ie,
  ZodUndefined: () => Mo,
  ZodUnion: () => zt,
  ZodUnknown: () => zo,
  ZodVoid: () => Lo,
  ZodXID: () => kr,
  ZodXor: () => Fo,
  _ZodString: () => Sr,
  _default: () => ri,
  _function: () => Zu,
  any: () => xu,
  array: () => Bt,
  base64: () => su,
  base64url: () => au,
  bigint: () => bu,
  boolean: () => _o,
  catch: () => ci,
  check: () => ju,
  cidrv4: () => ou,
  cidrv6: () => iu,
  codec: () => Uu,
  cuid: () => Gd,
  cuid2: () => Yd,
  custom: () => Hu,
  date: () => Ru,
  describe: () => Wu,
  discriminatedUnion: () => Ou,
  e164: () => cu,
  email: () => Fd,
  emoji: () => Wd,
  enum: () => Fr,
  exactOptional: () => Qo,
  file: () => Lu,
  float32: () => pu,
  float64: () => mu,
  function: () => Zu,
  guid: () => Kd,
  hash: () => fu,
  hex: () => hu,
  hostname: () => lu,
  httpUrl: () => Hd,
  instanceof: () => Gu,
  int: () => Ir,
  int32: () => yu,
  int64: () => Iu,
  intersection: () => $o,
  ipv4: () => tu,
  ipv6: () => nu,
  json: () => Xu,
  jwt: () => du,
  keyof: () => Nu,
  ksuid: () => eu,
  lazy: () => pi,
  literal: () => Pu,
  looseObject: () => Tu,
  looseRecord: () => Du,
  mac: () => ru,
  map: () => Bu,
  meta: () => Ju,
  nan: () => Ku,
  nanoid: () => Jd,
  nativeEnum: () => zu,
  never: () => Lr,
  nonoptional: () => ii,
  null: () => Bo,
  nullable: () => _t,
  nullish: () => qu,
  number: () => To,
  object: () => ku,
  optional: () => Tt,
  partialRecord: () => Mu,
  pipe: () => Ot,
  prefault: () => oi,
  preprocess: () => Qu,
  promise: () => Vu,
  readonly: () => li,
  record: () => jo,
  refine: () => gi,
  set: () => Eu,
  strictObject: () => Au,
  string: () => br,
  stringFormat: () => uu,
  stringbool: () => Yu,
  success: () => Fu,
  superRefine: () => bi,
  symbol: () => wu,
  templateLiteral: () => $u,
  transform: () => Kr,
  tuple: () => Zo,
  uint32: () => gu,
  uint64: () => Su,
  ulid: () => Xd,
  undefined: () => vu,
  union: () => qr,
  unknown: () => Ae,
  url: () => jd,
  uuid: () => Ud,
  uuidv4: () => $d,
  uuidv6: () => Vd,
  uuidv7: () => Zd,
  void: () => Cu,
  xid: () => Qd,
  xor: () => _u,
});
var fr = {};
We(fr, {
  endsWith: () => tt,
  gt: () => pe,
  gte: () => K,
  includes: () => Qe,
  length: () => Me,
  lowercase: () => Ye,
  lt: () => fe,
  lte: () => ne,
  maxLength: () => Oe,
  maxSize: () => Re,
  mime: () => rt,
  minLength: () => me,
  minSize: () => ce,
  multipleOf: () => Ce,
  negative: () => vn,
  nonnegative: () => Cn,
  nonpositive: () => xn,
  normalize: () => ot,
  overwrite: () => nt,
  positive: () => wn,
  property: () => Rn,
  regex: () => Ge,
  size: () => _e,
  slugify: () => ct,
  startsWith: () => et,
  toLowerCase: () => st,
  toUpperCase: () => at,
  trim: () => it,
  uppercase: () => Xe,
});
var Ke = {};
We(Ke, {
  ZodISODate: () => mr,
  ZodISODateTime: () => pr,
  ZodISODuration: () => gr,
  ZodISOTime: () => yr,
  date: () => fo,
  datetime: () => ho,
  duration: () => mo,
  time: () => po,
});
var pr = m("ZodISODateTime", (r, e) => {
  (os.init(r, e), C.init(r, e));
});
function ho(r) {
  return ga(pr, r);
}
var mr = m("ZodISODate", (r, e) => {
  (is.init(r, e), C.init(r, e));
});
function fo(r) {
  return ba(mr, r);
}
var yr = m("ZodISOTime", (r, e) => {
  (ss.init(r, e), C.init(r, e));
});
function po(r) {
  return Ia(yr, r);
}
var gr = m("ZodISODuration", (r, e) => {
  (as.init(r, e), C.init(r, e));
});
function mo(r) {
  return Sa(gr, r);
}
var qd = (r, e) => {
    (_i.init(r, e),
      (r.name = "ZodError"),
      Object.defineProperties(r, {
        format: { value: (t) => Zt(r, t) },
        flatten: { value: (t) => Vt(r, t) },
        addIssue: {
          value: (t) => {
            (r.issues.push(t), (r.message = JSON.stringify(r.issues, Yr, 2)));
          },
        },
        addIssues: {
          value: (t) => {
            (r.issues.push(...t), (r.message = JSON.stringify(r.issues, Yr, 2)));
          },
        },
        isEmpty: {
          get() {
            return r.issues.length === 0;
          },
        },
      }));
  },
  Zh = m("ZodError", qd),
  F = m("ZodError", qd, { Parent: Error });
var yo = Di(F),
  go = Bi(F),
  bo = Ei(F),
  Io = zi(F),
  So = Pi(F),
  wo = Li(F),
  vo = qi(F),
  xo = Fi(F),
  Co = Ki(F),
  Ro = Ui(F),
  No = $i(F),
  ko = Vi(F);
var S = m(
    "ZodType",
    (r, e) => (
      Xr.init(r, e),
      Object.assign(r["~standard"], {
        jsonSchema: { input: Nn(r, "input"), output: Nn(r, "output") },
      }),
      (r.toJSONSchema = Xa(r, {})),
      (r.def = e),
      (r.type = e.type),
      Object.defineProperty(r, "_def", { value: e }),
      (r.check = (...t) =>
        r.clone(
          v.mergeDefs(e, {
            checks: [
              ...(e.checks ?? []),
              ...t.map((n) =>
                typeof n == "function"
                  ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } }
                  : n
              ),
            ],
          }),
          { parent: !0 }
        )),
      (r.with = r.check),
      (r.clone = (t, n) => Je(r, t, n)),
      (r.brand = () => r),
      (r.register = (t, n) => (t.add(r, n), r)),
      (r.parse = (t, n) => yo(r, t, n, { callee: r.parse })),
      (r.safeParse = (t, n) => bo(r, t, n)),
      (r.parseAsync = async (t, n) => go(r, t, n, { callee: r.parseAsync })),
      (r.safeParseAsync = async (t, n) => Io(r, t, n)),
      (r.spa = r.safeParseAsync),
      (r.encode = (t, n) => So(r, t, n)),
      (r.decode = (t, n) => wo(r, t, n)),
      (r.encodeAsync = async (t, n) => vo(r, t, n)),
      (r.decodeAsync = async (t, n) => xo(r, t, n)),
      (r.safeEncode = (t, n) => Co(r, t, n)),
      (r.safeDecode = (t, n) => Ro(r, t, n)),
      (r.safeEncodeAsync = async (t, n) => No(r, t, n)),
      (r.safeDecodeAsync = async (t, n) => ko(r, t, n)),
      (r.refine = (t, n) => r.check(gi(t, n))),
      (r.superRefine = (t) => r.check(bi(t))),
      (r.overwrite = (t) => r.check(nt(t))),
      (r.optional = () => Tt(r)),
      (r.exactOptional = () => Qo(r)),
      (r.nullable = () => _t(r)),
      (r.nullish = () => Tt(_t(r))),
      (r.nonoptional = (t) => ii(r, t)),
      (r.array = () => Bt(r)),
      (r.or = (t) => qr([r, t])),
      (r.and = (t) => $o(r, t)),
      (r.transform = (t) => Ot(r, Kr(t))),
      (r.default = (t) => ri(r, t)),
      (r.prefault = (t) => oi(r, t)),
      (r.catch = (t) => ci(r, t)),
      (r.pipe = (t) => Ot(r, t)),
      (r.readonly = () => li(r)),
      (r.describe = (t) => {
        let n = r.clone();
        return (ae.add(n, { description: t }), n);
      }),
      Object.defineProperty(r, "description", {
        get() {
          return ae.get(r)?.description;
        },
        configurable: !0,
      }),
      (r.meta = (...t) => {
        if (t.length === 0) return ae.get(r);
        let n = r.clone();
        return (ae.add(n, t[0]), n);
      }),
      (r.isOptional = () => r.safeParse(void 0).success),
      (r.isNullable = () => r.safeParse(null).success),
      (r.apply = (t) => t(r)),
      r
    )
  ),
  Sr = m("_ZodString", (r, e) => {
    (Qr.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (n, o, i) => Qa(r, n, o, i)));
    let t = r._zod.bag;
    ((r.format = t.format ?? null),
      (r.minLength = t.minimum ?? null),
      (r.maxLength = t.maximum ?? null),
      (r.regex = (...n) => r.check(Ge(...n))),
      (r.includes = (...n) => r.check(Qe(...n))),
      (r.startsWith = (...n) => r.check(et(...n))),
      (r.endsWith = (...n) => r.check(tt(...n))),
      (r.min = (...n) => r.check(me(...n))),
      (r.max = (...n) => r.check(Oe(...n))),
      (r.length = (...n) => r.check(Me(...n))),
      (r.nonempty = (...n) => r.check(me(1, ...n))),
      (r.lowercase = (n) => r.check(Ye(n))),
      (r.uppercase = (n) => r.check(Xe(n))),
      (r.trim = () => r.check(it())),
      (r.normalize = (...n) => r.check(ot(...n))),
      (r.toLowerCase = () => r.check(st())),
      (r.toUpperCase = () => r.check(at())),
      (r.slugify = () => r.check(ct())));
  }),
  $e = m("ZodString", (r, e) => {
    (Qr.init(r, e),
      Sr.init(r, e),
      (r.email = (t) => r.check(en(wr, t))),
      (r.url = (t) => r.check(Ht(Mt, t))),
      (r.jwt = (t) => r.check(Sn(zr, t))),
      (r.emoji = (t) => r.check(sn(vr, t))),
      (r.guid = (t) => r.check(jt(At, t))),
      (r.uuid = (t) => r.check(tn(ie, t))),
      (r.uuidv4 = (t) => r.check(rn(ie, t))),
      (r.uuidv6 = (t) => r.check(nn(ie, t))),
      (r.uuidv7 = (t) => r.check(on(ie, t))),
      (r.nanoid = (t) => r.check(an(xr, t))),
      (r.guid = (t) => r.check(jt(At, t))),
      (r.cuid = (t) => r.check(cn(Cr, t))),
      (r.cuid2 = (t) => r.check(dn(Rr, t))),
      (r.ulid = (t) => r.check(un(Nr, t))),
      (r.base64 = (t) => r.check(gn(Dr, t))),
      (r.base64url = (t) => r.check(bn(Br, t))),
      (r.xid = (t) => r.check(ln(kr, t))),
      (r.ksuid = (t) => r.check(hn(Ar, t))),
      (r.ipv4 = (t) => r.check(fn(Tr, t))),
      (r.ipv6 = (t) => r.check(pn(_r, t))),
      (r.cidrv4 = (t) => r.check(mn(Or, t))),
      (r.cidrv6 = (t) => r.check(yn(Mr, t))),
      (r.e164 = (t) => r.check(In(Er, t))),
      (r.datetime = (t) => r.check(ho(t))),
      (r.date = (t) => r.check(fo(t))),
      (r.time = (t) => r.check(po(t))),
      (r.duration = (t) => r.check(mo(t))));
  });
function br(r) {
  return fa($e, r);
}
var C = m("ZodStringFormat", (r, e) => {
    (ji.init(r, e), Sr.init(r, e));
  }),
  wr = m("ZodEmail", (r, e) => {
    (Ji.init(r, e), C.init(r, e));
  });
function Fd(r) {
  return en(wr, r);
}
var At = m("ZodGUID", (r, e) => {
  (Hi.init(r, e), C.init(r, e));
});
function Kd(r) {
  return jt(At, r);
}
var ie = m("ZodUUID", (r, e) => {
  (Wi.init(r, e), C.init(r, e));
});
function Ud(r) {
  return tn(ie, r);
}
function $d(r) {
  return rn(ie, r);
}
function Vd(r) {
  return nn(ie, r);
}
function Zd(r) {
  return on(ie, r);
}
var Mt = m("ZodURL", (r, e) => {
  (Gi.init(r, e), C.init(r, e));
});
function jd(r) {
  return Ht(Mt, r);
}
function Hd(r) {
  return Ht(Mt, { protocol: /^https?$/, hostname: xe.domain, ...v.normalizeParams(r) });
}
var vr = m("ZodEmoji", (r, e) => {
  (Yi.init(r, e), C.init(r, e));
});
function Wd(r) {
  return sn(vr, r);
}
var xr = m("ZodNanoID", (r, e) => {
  (Xi.init(r, e), C.init(r, e));
});
function Jd(r) {
  return an(xr, r);
}
var Cr = m("ZodCUID", (r, e) => {
  (Qi.init(r, e), C.init(r, e));
});
function Gd(r) {
  return cn(Cr, r);
}
var Rr = m("ZodCUID2", (r, e) => {
  (es.init(r, e), C.init(r, e));
});
function Yd(r) {
  return dn(Rr, r);
}
var Nr = m("ZodULID", (r, e) => {
  (ts.init(r, e), C.init(r, e));
});
function Xd(r) {
  return un(Nr, r);
}
var kr = m("ZodXID", (r, e) => {
  (rs.init(r, e), C.init(r, e));
});
function Qd(r) {
  return ln(kr, r);
}
var Ar = m("ZodKSUID", (r, e) => {
  (ns.init(r, e), C.init(r, e));
});
function eu(r) {
  return hn(Ar, r);
}
var Tr = m("ZodIPv4", (r, e) => {
  (cs.init(r, e), C.init(r, e));
});
function tu(r) {
  return fn(Tr, r);
}
var Ao = m("ZodMAC", (r, e) => {
  (us.init(r, e), C.init(r, e));
});
function ru(r) {
  return ma(Ao, r);
}
var _r = m("ZodIPv6", (r, e) => {
  (ds.init(r, e), C.init(r, e));
});
function nu(r) {
  return pn(_r, r);
}
var Or = m("ZodCIDRv4", (r, e) => {
  (ls.init(r, e), C.init(r, e));
});
function ou(r) {
  return mn(Or, r);
}
var Mr = m("ZodCIDRv6", (r, e) => {
  (hs.init(r, e), C.init(r, e));
});
function iu(r) {
  return yn(Mr, r);
}
var Dr = m("ZodBase64", (r, e) => {
  (fs.init(r, e), C.init(r, e));
});
function su(r) {
  return gn(Dr, r);
}
var Br = m("ZodBase64URL", (r, e) => {
  (ps.init(r, e), C.init(r, e));
});
function au(r) {
  return bn(Br, r);
}
var Er = m("ZodE164", (r, e) => {
  (ms.init(r, e), C.init(r, e));
});
function cu(r) {
  return In(Er, r);
}
var zr = m("ZodJWT", (r, e) => {
  (ys.init(r, e), C.init(r, e));
});
function du(r) {
  return Sn(zr, r);
}
var Ve = m("ZodCustomStringFormat", (r, e) => {
  (gs.init(r, e), C.init(r, e));
});
function uu(r, e, t = {}) {
  return dt(Ve, r, e, t);
}
function lu(r) {
  return dt(Ve, "hostname", xe.hostname, r);
}
function hu(r) {
  return dt(Ve, "hex", xe.hex, r);
}
function fu(r, e) {
  let t = e?.enc ?? "hex",
    n = `${r}_${t}`,
    o = xe[n];
  if (!o) throw new Error(`Unrecognized hash format: ${n}`);
  return dt(Ve, n, o, e);
}
var Ze = m("ZodNumber", (r, e) => {
  (bs.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (n, o, i) => ec(r, n, o, i)),
    (r.gt = (n, o) => r.check(pe(n, o))),
    (r.gte = (n, o) => r.check(K(n, o))),
    (r.min = (n, o) => r.check(K(n, o))),
    (r.lt = (n, o) => r.check(fe(n, o))),
    (r.lte = (n, o) => r.check(ne(n, o))),
    (r.max = (n, o) => r.check(ne(n, o))),
    (r.int = (n) => r.check(Ir(n))),
    (r.safe = (n) => r.check(Ir(n))),
    (r.positive = (n) => r.check(pe(0, n))),
    (r.nonnegative = (n) => r.check(K(0, n))),
    (r.negative = (n) => r.check(fe(0, n))),
    (r.nonpositive = (n) => r.check(ne(0, n))),
    (r.multipleOf = (n, o) => r.check(Ce(n, o))),
    (r.step = (n, o) => r.check(Ce(n, o))),
    (r.finite = () => r));
  let t = r._zod.bag;
  ((r.minValue =
    Math.max(
      t.minimum ?? Number.NEGATIVE_INFINITY,
      t.exclusiveMinimum ?? Number.NEGATIVE_INFINITY
    ) ?? null),
    (r.maxValue =
      Math.min(
        t.maximum ?? Number.POSITIVE_INFINITY,
        t.exclusiveMaximum ?? Number.POSITIVE_INFINITY
      ) ?? null),
    (r.isInt = (t.format ?? "").includes("int") || Number.isSafeInteger(t.multipleOf ?? 0.5)),
    (r.isFinite = !0),
    (r.format = t.format ?? null));
});
function To(r) {
  return wa(Ze, r);
}
var Te = m("ZodNumberFormat", (r, e) => {
  (Is.init(r, e), Ze.init(r, e));
});
function Ir(r) {
  return xa(Te, r);
}
function pu(r) {
  return Ca(Te, r);
}
function mu(r) {
  return Ra(Te, r);
}
function yu(r) {
  return Na(Te, r);
}
function gu(r) {
  return ka(Te, r);
}
var je = m("ZodBoolean", (r, e) => {
  (Ss.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => tc(r, t, n, o)));
});
function _o(r) {
  return Aa(je, r);
}
var He = m("ZodBigInt", (r, e) => {
  (ws.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (n, o, i) => rc(r, n, o, i)),
    (r.gte = (n, o) => r.check(K(n, o))),
    (r.min = (n, o) => r.check(K(n, o))),
    (r.gt = (n, o) => r.check(pe(n, o))),
    (r.gte = (n, o) => r.check(K(n, o))),
    (r.min = (n, o) => r.check(K(n, o))),
    (r.lt = (n, o) => r.check(fe(n, o))),
    (r.lte = (n, o) => r.check(ne(n, o))),
    (r.max = (n, o) => r.check(ne(n, o))),
    (r.positive = (n) => r.check(pe(BigInt(0), n))),
    (r.negative = (n) => r.check(fe(BigInt(0), n))),
    (r.nonpositive = (n) => r.check(ne(BigInt(0), n))),
    (r.nonnegative = (n) => r.check(K(BigInt(0), n))),
    (r.multipleOf = (n, o) => r.check(Ce(n, o))));
  let t = r._zod.bag;
  ((r.minValue = t.minimum ?? null),
    (r.maxValue = t.maximum ?? null),
    (r.format = t.format ?? null));
});
function bu(r) {
  return _a(He, r);
}
var Pr = m("ZodBigIntFormat", (r, e) => {
  (vs.init(r, e), He.init(r, e));
});
function Iu(r) {
  return Ma(Pr, r);
}
function Su(r) {
  return Da(Pr, r);
}
var Oo = m("ZodSymbol", (r, e) => {
  (xs.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => nc(r, t, n, o)));
});
function wu(r) {
  return Ba(Oo, r);
}
var Mo = m("ZodUndefined", (r, e) => {
  (Cs.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => ic(r, t, n, o)));
});
function vu(r) {
  return Ea(Mo, r);
}
var Do = m("ZodNull", (r, e) => {
  (Rs.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => oc(r, t, n, o)));
});
function Bo(r) {
  return za(Do, r);
}
var Eo = m("ZodAny", (r, e) => {
  (Ns.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => cc(r, t, n, o)));
});
function xu() {
  return Pa(Eo);
}
var zo = m("ZodUnknown", (r, e) => {
  (ks.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => dc(r, t, n, o)));
});
function Ae() {
  return La(zo);
}
var Po = m("ZodNever", (r, e) => {
  (As.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => ac(r, t, n, o)));
});
function Lr(r) {
  return qa(Po, r);
}
var Lo = m("ZodVoid", (r, e) => {
  (Ts.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => sc(r, t, n, o)));
});
function Cu(r) {
  return Fa(Lo, r);
}
var Dt = m("ZodDate", (r, e) => {
  (_s.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (n, o, i) => uc(r, n, o, i)),
    (r.min = (n, o) => r.check(K(n, o))),
    (r.max = (n, o) => r.check(ne(n, o))));
  let t = r._zod.bag;
  ((r.minDate = t.minimum ? new Date(t.minimum) : null),
    (r.maxDate = t.maximum ? new Date(t.maximum) : null));
});
function Ru(r) {
  return Ka(Dt, r);
}
var qo = m("ZodArray", (r, e) => {
  (Os.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => vc(r, t, n, o)),
    (r.element = e.element),
    (r.min = (t, n) => r.check(me(t, n))),
    (r.nonempty = (t) => r.check(me(1, t))),
    (r.max = (t, n) => r.check(Oe(t, n))),
    (r.length = (t, n) => r.check(Me(t, n))),
    (r.unwrap = () => r.element));
});
function Bt(r, e) {
  return Va(qo, r, e);
}
function Nu(r) {
  let e = r._zod.def.shape;
  return Fr(Object.keys(e));
}
var Et = m("ZodObject", (r, e) => {
  (Ms.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => xc(r, t, n, o)),
    v.defineLazy(r, "shape", () => e.shape),
    (r.keyof = () => Fr(Object.keys(r._zod.def.shape))),
    (r.catchall = (t) => r.clone({ ...r._zod.def, catchall: t })),
    (r.passthrough = () => r.clone({ ...r._zod.def, catchall: Ae() })),
    (r.loose = () => r.clone({ ...r._zod.def, catchall: Ae() })),
    (r.strict = () => r.clone({ ...r._zod.def, catchall: Lr() })),
    (r.strip = () => r.clone({ ...r._zod.def, catchall: void 0 })),
    (r.extend = (t) => v.extend(r, t)),
    (r.safeExtend = (t) => v.safeExtend(r, t)),
    (r.merge = (t) => v.merge(r, t)),
    (r.pick = (t) => v.pick(r, t)),
    (r.omit = (t) => v.omit(r, t)),
    (r.partial = (...t) => v.partial(Ur, r, t[0])),
    (r.required = (...t) => v.required($r, r, t[0])));
});
function ku(r, e) {
  let t = { type: "object", shape: r ?? {}, ...v.normalizeParams(e) };
  return new Et(t);
}
function Au(r, e) {
  return new Et({ type: "object", shape: r, catchall: Lr(), ...v.normalizeParams(e) });
}
function Tu(r, e) {
  return new Et({ type: "object", shape: r, catchall: Ae(), ...v.normalizeParams(e) });
}
var zt = m("ZodUnion", (r, e) => {
  (Ds.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => kn(r, t, n, o)),
    (r.options = e.options));
});
function qr(r, e) {
  return new zt({ type: "union", options: r, ...v.normalizeParams(e) });
}
var Fo = m("ZodXor", (r, e) => {
  (zt.init(r, e),
    Bs.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => kn(r, t, n, o)),
    (r.options = e.options));
});
function _u(r, e) {
  return new Fo({ type: "union", options: r, inclusive: !1, ...v.normalizeParams(e) });
}
var Ko = m("ZodDiscriminatedUnion", (r, e) => {
  (zt.init(r, e), Es.init(r, e));
});
function Ou(r, e, t) {
  return new Ko({ type: "union", options: e, discriminator: r, ...v.normalizeParams(t) });
}
var Uo = m("ZodIntersection", (r, e) => {
  (zs.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => Cc(r, t, n, o)));
});
function $o(r, e) {
  return new Uo({ type: "intersection", left: r, right: e });
}
var Vo = m("ZodTuple", (r, e) => {
  (Ps.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Rc(r, t, n, o)),
    (r.rest = (t) => r.clone({ ...r._zod.def, rest: t })));
});
function Zo(r, e, t) {
  let n = e instanceof Xr,
    o = n ? t : e,
    i = n ? e : null;
  return new Vo({ type: "tuple", items: r, rest: i, ...v.normalizeParams(o) });
}
var Pt = m("ZodRecord", (r, e) => {
  (Ls.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Nc(r, t, n, o)),
    (r.keyType = e.keyType),
    (r.valueType = e.valueType));
});
function jo(r, e, t) {
  return new Pt({ type: "record", keyType: r, valueType: e, ...v.normalizeParams(t) });
}
function Mu(r, e, t) {
  let n = Je(r);
  return (
    (n._zod.values = void 0),
    new Pt({ type: "record", keyType: n, valueType: e, ...v.normalizeParams(t) })
  );
}
function Du(r, e, t) {
  return new Pt({
    type: "record",
    keyType: r,
    valueType: e,
    mode: "loose",
    ...v.normalizeParams(t),
  });
}
var Ho = m("ZodMap", (r, e) => {
  (qs.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Sc(r, t, n, o)),
    (r.keyType = e.keyType),
    (r.valueType = e.valueType),
    (r.min = (...t) => r.check(ce(...t))),
    (r.nonempty = (t) => r.check(ce(1, t))),
    (r.max = (...t) => r.check(Re(...t))),
    (r.size = (...t) => r.check(_e(...t))));
});
function Bu(r, e, t) {
  return new Ho({ type: "map", keyType: r, valueType: e, ...v.normalizeParams(t) });
}
var Wo = m("ZodSet", (r, e) => {
  (Fs.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => wc(r, t, n, o)),
    (r.min = (...t) => r.check(ce(...t))),
    (r.nonempty = (t) => r.check(ce(1, t))),
    (r.max = (...t) => r.check(Re(...t))),
    (r.size = (...t) => r.check(_e(...t))));
});
function Eu(r, e) {
  return new Wo({ type: "set", valueType: r, ...v.normalizeParams(e) });
}
var Ue = m("ZodEnum", (r, e) => {
  (Ks.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (n, o, i) => lc(r, n, o, i)),
    (r.enum = e.entries),
    (r.options = Object.values(e.entries)));
  let t = new Set(Object.keys(e.entries));
  ((r.extract = (n, o) => {
    let i = {};
    for (let s of n)
      if (t.has(s)) i[s] = e.entries[s];
      else throw new Error(`Key ${s} not found in enum`);
    return new Ue({ ...e, checks: [], ...v.normalizeParams(o), entries: i });
  }),
    (r.exclude = (n, o) => {
      let i = { ...e.entries };
      for (let s of n)
        if (t.has(s)) delete i[s];
        else throw new Error(`Key ${s} not found in enum`);
      return new Ue({ ...e, checks: [], ...v.normalizeParams(o), entries: i });
    }));
});
function Fr(r, e) {
  let t = Array.isArray(r) ? Object.fromEntries(r.map((n) => [n, n])) : r;
  return new Ue({ type: "enum", entries: t, ...v.normalizeParams(e) });
}
function zu(r, e) {
  return new Ue({ type: "enum", entries: r, ...v.normalizeParams(e) });
}
var Jo = m("ZodLiteral", (r, e) => {
  (Us.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => hc(r, t, n, o)),
    (r.values = new Set(e.values)),
    Object.defineProperty(r, "value", {
      get() {
        if (e.values.length > 1)
          throw new Error(
            "This schema contains multiple valid literal values. Use `.values` instead."
          );
        return e.values[0];
      },
    }));
});
function Pu(r, e) {
  return new Jo({ type: "literal", values: Array.isArray(r) ? r : [r], ...v.normalizeParams(e) });
}
var Go = m("ZodFile", (r, e) => {
  ($s.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => mc(r, t, n, o)),
    (r.min = (t, n) => r.check(ce(t, n))),
    (r.max = (t, n) => r.check(Re(t, n))),
    (r.mime = (t, n) => r.check(rt(Array.isArray(t) ? t : [t], n))));
});
function Lu(r) {
  return Za(Go, r);
}
var Yo = m("ZodTransform", (r, e) => {
  (Vs.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Ic(r, t, n, o)),
    (r._zod.parse = (t, n) => {
      if (n.direction === "backward") throw new Ti(r.constructor.name);
      t.addIssue = (i) => {
        if (typeof i == "string") t.issues.push(v.issue(i, t.value, e));
        else {
          let s = i;
          (s.fatal && (s.continue = !1),
            s.code ?? (s.code = "custom"),
            s.input ?? (s.input = t.value),
            s.inst ?? (s.inst = r),
            t.issues.push(v.issue(s)));
        }
      };
      let o = e.transform(t.value, t);
      return o instanceof Promise ? o.then((i) => ((t.value = i), t)) : ((t.value = o), t);
    }));
});
function Kr(r) {
  return new Yo({ type: "transform", transform: r });
}
var Ur = m("ZodOptional", (r, e) => {
  (Zs.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => An(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Tt(r) {
  return new Ur({ type: "optional", innerType: r });
}
var Xo = m("ZodExactOptional", (r, e) => {
  (js.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => An(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Qo(r) {
  return new Xo({ type: "optional", innerType: r });
}
var ei = m("ZodNullable", (r, e) => {
  (Hs.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => kc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function _t(r) {
  return new ei({ type: "nullable", innerType: r });
}
function qu(r) {
  return Tt(_t(r));
}
var ti = m("ZodDefault", (r, e) => {
  (Ws.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Tc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType),
    (r.removeDefault = r.unwrap));
});
function ri(r, e) {
  return new ti({
    type: "default",
    innerType: r,
    get defaultValue() {
      return typeof e == "function" ? e() : v.shallowClone(e);
    },
  });
}
var ni = m("ZodPrefault", (r, e) => {
  (Js.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => _c(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function oi(r, e) {
  return new ni({
    type: "prefault",
    innerType: r,
    get defaultValue() {
      return typeof e == "function" ? e() : v.shallowClone(e);
    },
  });
}
var $r = m("ZodNonOptional", (r, e) => {
  (Gs.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Ac(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function ii(r, e) {
  return new $r({ type: "nonoptional", innerType: r, ...v.normalizeParams(e) });
}
var si = m("ZodSuccess", (r, e) => {
  (Ys.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => yc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Fu(r) {
  return new si({ type: "success", innerType: r });
}
var ai = m("ZodCatch", (r, e) => {
  (Xs.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Oc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType),
    (r.removeCatch = r.unwrap));
});
function ci(r, e) {
  return new ai({ type: "catch", innerType: r, catchValue: typeof e == "function" ? e : () => e });
}
var di = m("ZodNaN", (r, e) => {
  (Qs.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => fc(r, t, n, o)));
});
function Ku(r) {
  return $a(di, r);
}
var Vr = m("ZodPipe", (r, e) => {
  (ea.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Mc(r, t, n, o)),
    (r.in = e.in),
    (r.out = e.out));
});
function Ot(r, e) {
  return new Vr({ type: "pipe", in: r, out: e });
}
var Zr = m("ZodCodec", (r, e) => {
  (Vr.init(r, e), ta.init(r, e));
});
function Uu(r, e, t) {
  return new Zr({ type: "pipe", in: r, out: e, transform: t.decode, reverseTransform: t.encode });
}
var ui = m("ZodReadonly", (r, e) => {
  (ra.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Dc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function li(r) {
  return new ui({ type: "readonly", innerType: r });
}
var hi = m("ZodTemplateLiteral", (r, e) => {
  (na.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => pc(r, t, n, o)));
});
function $u(r, e) {
  return new hi({ type: "template_literal", parts: r, ...v.normalizeParams(e) });
}
var fi = m("ZodLazy", (r, e) => {
  (sa.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Ec(r, t, n, o)),
    (r.unwrap = () => r._zod.def.getter()));
});
function pi(r) {
  return new fi({ type: "lazy", getter: r });
}
var mi = m("ZodPromise", (r, e) => {
  (ia.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Bc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Vu(r) {
  return new mi({ type: "promise", innerType: r });
}
var yi = m("ZodFunction", (r, e) => {
  (oa.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => bc(r, t, n, o)));
});
function Zu(r) {
  return new yi({
    type: "function",
    input: Array.isArray(r?.input) ? Zo(r?.input) : (r?.input ?? Bt(Ae())),
    output: r?.output ?? Ae(),
  });
}
var Lt = m("ZodCustom", (r, e) => {
  (aa.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, o) => gc(r, t, n, o)));
});
function ju(r) {
  let e = new Zi({ check: "custom" });
  return ((e._zod.check = r), e);
}
function Hu(r, e) {
  return ja(Lt, r ?? (() => !0), e);
}
function gi(r, e = {}) {
  return Ha(Lt, r, e);
}
function bi(r) {
  return Wa(r);
}
var Wu = Ja,
  Ju = Ga;
function Gu(r, e = {}) {
  let t = new Lt({
    type: "custom",
    check: "custom",
    fn: (n) => n instanceof r,
    abort: !0,
    ...v.normalizeParams(e),
  });
  return (
    (t._zod.bag.Class = r),
    (t._zod.check = (n) => {
      n.value instanceof r ||
        n.issues.push({
          code: "invalid_type",
          expected: r.name,
          input: n.value,
          inst: t,
          path: [...(t._zod.def.path ?? [])],
        });
    }),
    t
  );
}
var Yu = (...r) => Ya({ Codec: Zr, Boolean: je, String: $e }, ...r);
function Xu(r) {
  let e = pi(() => qr([br(r), To(), _o(), Bo(), Bt(e), jo(br(), e)]));
  return e;
}
function Qu(r, e) {
  return Ot(Kr(r), e);
}
var Hh = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom",
};
function Wh(r) {
  he({ customError: r });
}
function Jh() {
  return he().customError;
}
var Ii;
Ii || (Ii = {});
var y = { ...kt, ...fr, iso: Ke },
  Gh = new Set([
    "$schema",
    "$ref",
    "$defs",
    "definitions",
    "$id",
    "id",
    "$comment",
    "$anchor",
    "$vocabulary",
    "$dynamicRef",
    "$dynamicAnchor",
    "type",
    "enum",
    "const",
    "anyOf",
    "oneOf",
    "allOf",
    "not",
    "properties",
    "required",
    "additionalProperties",
    "patternProperties",
    "propertyNames",
    "minProperties",
    "maxProperties",
    "items",
    "prefixItems",
    "additionalItems",
    "minItems",
    "maxItems",
    "uniqueItems",
    "contains",
    "minContains",
    "maxContains",
    "minLength",
    "maxLength",
    "pattern",
    "format",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf",
    "description",
    "default",
    "contentEncoding",
    "contentMediaType",
    "contentSchema",
    "unevaluatedItems",
    "unevaluatedProperties",
    "if",
    "then",
    "else",
    "dependentSchemas",
    "dependentRequired",
    "nullable",
    "readOnly",
  ]);
function Yh(r, e) {
  let t = r.$schema;
  return t === "https://json-schema.org/draft/2020-12/schema"
    ? "draft-2020-12"
    : t === "http://json-schema.org/draft-07/schema#"
      ? "draft-7"
      : t === "http://json-schema.org/draft-04/schema#"
        ? "draft-4"
        : (e ?? "draft-2020-12");
}
function Xh(r, e) {
  if (!r.startsWith("#"))
    throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  let t = r.slice(1).split("/").filter(Boolean);
  if (t.length === 0) return e.rootSchema;
  let n = e.version === "draft-2020-12" ? "$defs" : "definitions";
  if (t[0] === n) {
    let o = t[1];
    if (!o || !e.defs[o]) throw new Error(`Reference not found: ${r}`);
    return e.defs[o];
  }
  throw new Error(`Reference not found: ${r}`);
}
function el(r, e) {
  if (r.not !== void 0) {
    if (typeof r.not == "object" && Object.keys(r.not).length === 0) return y.never();
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (r.unevaluatedItems !== void 0) throw new Error("unevaluatedItems is not supported");
  if (r.unevaluatedProperties !== void 0) throw new Error("unevaluatedProperties is not supported");
  if (r.if !== void 0 || r.then !== void 0 || r.else !== void 0)
    throw new Error("Conditional schemas (if/then/else) are not supported");
  if (r.dependentSchemas !== void 0 || r.dependentRequired !== void 0)
    throw new Error("dependentSchemas and dependentRequired are not supported");
  if (r.$ref) {
    let o = r.$ref;
    if (e.refs.has(o)) return e.refs.get(o);
    if (e.processing.has(o))
      return y.lazy(() => {
        if (!e.refs.has(o)) throw new Error(`Circular reference not resolved: ${o}`);
        return e.refs.get(o);
      });
    e.processing.add(o);
    let i = Xh(o, e),
      s = D(i, e);
    return (e.refs.set(o, s), e.processing.delete(o), s);
  }
  if (r.enum !== void 0) {
    let o = r.enum;
    if (e.version === "openapi-3.0" && r.nullable === !0 && o.length === 1 && o[0] === null)
      return y.null();
    if (o.length === 0) return y.never();
    if (o.length === 1) return y.literal(o[0]);
    if (o.every((s) => typeof s == "string")) return y.enum(o);
    let i = o.map((s) => y.literal(s));
    return i.length < 2 ? i[0] : y.union([i[0], i[1], ...i.slice(2)]);
  }
  if (r.const !== void 0) return y.literal(r.const);
  let t = r.type;
  if (Array.isArray(t)) {
    let o = t.map((i) => {
      let s = { ...r, type: i };
      return el(s, e);
    });
    return o.length === 0 ? y.never() : o.length === 1 ? o[0] : y.union(o);
  }
  if (!t) return y.any();
  let n;
  switch (t) {
    case "string": {
      let o = y.string();
      if (r.format) {
        let i = r.format;
        i === "email"
          ? (o = o.check(y.email()))
          : i === "uri" || i === "uri-reference"
            ? (o = o.check(y.url()))
            : i === "uuid" || i === "guid"
              ? (o = o.check(y.uuid()))
              : i === "date-time"
                ? (o = o.check(y.iso.datetime()))
                : i === "date"
                  ? (o = o.check(y.iso.date()))
                  : i === "time"
                    ? (o = o.check(y.iso.time()))
                    : i === "duration"
                      ? (o = o.check(y.iso.duration()))
                      : i === "ipv4"
                        ? (o = o.check(y.ipv4()))
                        : i === "ipv6"
                          ? (o = o.check(y.ipv6()))
                          : i === "mac"
                            ? (o = o.check(y.mac()))
                            : i === "cidr"
                              ? (o = o.check(y.cidrv4()))
                              : i === "cidr-v6"
                                ? (o = o.check(y.cidrv6()))
                                : i === "base64"
                                  ? (o = o.check(y.base64()))
                                  : i === "base64url"
                                    ? (o = o.check(y.base64url()))
                                    : i === "e164"
                                      ? (o = o.check(y.e164()))
                                      : i === "jwt"
                                        ? (o = o.check(y.jwt()))
                                        : i === "emoji"
                                          ? (o = o.check(y.emoji()))
                                          : i === "nanoid"
                                            ? (o = o.check(y.nanoid()))
                                            : i === "cuid"
                                              ? (o = o.check(y.cuid()))
                                              : i === "cuid2"
                                                ? (o = o.check(y.cuid2()))
                                                : i === "ulid"
                                                  ? (o = o.check(y.ulid()))
                                                  : i === "xid"
                                                    ? (o = o.check(y.xid()))
                                                    : i === "ksuid" && (o = o.check(y.ksuid()));
      }
      (typeof r.minLength == "number" && (o = o.min(r.minLength)),
        typeof r.maxLength == "number" && (o = o.max(r.maxLength)),
        r.pattern && (o = o.regex(new RegExp(r.pattern))),
        (n = o));
      break;
    }
    case "number":
    case "integer": {
      let o = t === "integer" ? y.number().int() : y.number();
      (typeof r.minimum == "number" && (o = o.min(r.minimum)),
        typeof r.maximum == "number" && (o = o.max(r.maximum)),
        typeof r.exclusiveMinimum == "number"
          ? (o = o.gt(r.exclusiveMinimum))
          : r.exclusiveMinimum === !0 && typeof r.minimum == "number" && (o = o.gt(r.minimum)),
        typeof r.exclusiveMaximum == "number"
          ? (o = o.lt(r.exclusiveMaximum))
          : r.exclusiveMaximum === !0 && typeof r.maximum == "number" && (o = o.lt(r.maximum)),
        typeof r.multipleOf == "number" && (o = o.multipleOf(r.multipleOf)),
        (n = o));
      break;
    }
    case "boolean": {
      n = y.boolean();
      break;
    }
    case "null": {
      n = y.null();
      break;
    }
    case "object": {
      let o = {},
        i = r.properties || {},
        s = new Set(r.required || []);
      for (let [c, d] of Object.entries(i)) {
        let h = D(d, e);
        o[c] = s.has(c) ? h : h.optional();
      }
      if (r.propertyNames) {
        let c = D(r.propertyNames, e),
          d =
            r.additionalProperties && typeof r.additionalProperties == "object"
              ? D(r.additionalProperties, e)
              : y.any();
        if (Object.keys(o).length === 0) {
          n = y.record(c, d);
          break;
        }
        let h = y.object(o).passthrough(),
          f = y.looseRecord(c, d);
        n = y.intersection(h, f);
        break;
      }
      if (r.patternProperties) {
        let c = r.patternProperties,
          d = Object.keys(c),
          h = [];
        for (let p of d) {
          let b = D(c[p], e),
            w = y.string().regex(new RegExp(p));
          h.push(y.looseRecord(w, b));
        }
        let f = [];
        if (
          (Object.keys(o).length > 0 && f.push(y.object(o).passthrough()),
          f.push(...h),
          f.length === 0)
        )
          n = y.object({}).passthrough();
        else if (f.length === 1) n = f[0];
        else {
          let p = y.intersection(f[0], f[1]);
          for (let b = 2; b < f.length; b++) p = y.intersection(p, f[b]);
          n = p;
        }
        break;
      }
      let a = y.object(o);
      r.additionalProperties === !1
        ? (n = a.strict())
        : typeof r.additionalProperties == "object"
          ? (n = a.catchall(D(r.additionalProperties, e)))
          : (n = a.passthrough());
      break;
    }
    case "array": {
      let o = r.prefixItems,
        i = r.items;
      if (o && Array.isArray(o)) {
        let s = o.map((c) => D(c, e)),
          a = i && typeof i == "object" && !Array.isArray(i) ? D(i, e) : void 0;
        (a ? (n = y.tuple(s).rest(a)) : (n = y.tuple(s)),
          typeof r.minItems == "number" && (n = n.check(y.minLength(r.minItems))),
          typeof r.maxItems == "number" && (n = n.check(y.maxLength(r.maxItems))));
      } else if (Array.isArray(i)) {
        let s = i.map((c) => D(c, e)),
          a =
            r.additionalItems && typeof r.additionalItems == "object"
              ? D(r.additionalItems, e)
              : void 0;
        (a ? (n = y.tuple(s).rest(a)) : (n = y.tuple(s)),
          typeof r.minItems == "number" && (n = n.check(y.minLength(r.minItems))),
          typeof r.maxItems == "number" && (n = n.check(y.maxLength(r.maxItems))));
      } else if (i !== void 0) {
        let s = D(i, e),
          a = y.array(s);
        (typeof r.minItems == "number" && (a = a.min(r.minItems)),
          typeof r.maxItems == "number" && (a = a.max(r.maxItems)),
          (n = a));
      } else n = y.array(y.any());
      break;
    }
    default:
      throw new Error(`Unsupported type: ${t}`);
  }
  return (
    r.description && (n = n.describe(r.description)),
    r.default !== void 0 && (n = n.default(r.default)),
    n
  );
}
function D(r, e) {
  if (typeof r == "boolean") return r ? y.any() : y.never();
  let t = el(r, e),
    n = r.type || r.enum !== void 0 || r.const !== void 0;
  if (r.anyOf && Array.isArray(r.anyOf)) {
    let a = r.anyOf.map((d) => D(d, e)),
      c = y.union(a);
    t = n ? y.intersection(t, c) : c;
  }
  if (r.oneOf && Array.isArray(r.oneOf)) {
    let a = r.oneOf.map((d) => D(d, e)),
      c = y.xor(a);
    t = n ? y.intersection(t, c) : c;
  }
  if (r.allOf && Array.isArray(r.allOf))
    if (r.allOf.length === 0) t = n ? t : y.any();
    else {
      let a = n ? t : D(r.allOf[0], e),
        c = n ? 0 : 1;
      for (let d = c; d < r.allOf.length; d++) a = y.intersection(a, D(r.allOf[d], e));
      t = a;
    }
  (r.nullable === !0 && e.version === "openapi-3.0" && (t = y.nullable(t)),
    r.readOnly === !0 && (t = y.readonly(t)));
  let o = {},
    i = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (let a of i) a in r && (o[a] = r[a]);
  let s = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (let a of s) a in r && (o[a] = r[a]);
  for (let a of Object.keys(r)) Gh.has(a) || (o[a] = r[a]);
  return (Object.keys(o).length > 0 && e.registry.add(t, o), t);
}
function tl(r, e) {
  if (typeof r == "boolean") return r ? y.any() : y.never();
  let t = Yh(r, e?.defaultTarget),
    n = r.$defs || r.definitions || {},
    o = {
      version: t,
      defs: n,
      refs: new Map(),
      processing: new Set(),
      rootSchema: r,
      registry: e?.registry ?? ae,
    };
  return D(r, o);
}
var Si = {};
We(Si, { bigint: () => rf, boolean: () => tf, date: () => nf, number: () => ef, string: () => Qh });
function Qh(r) {
  return pa($e, r);
}
function ef(r) {
  return va(Ze, r);
}
function tf(r) {
  return Ta(je, r);
}
function rf(r) {
  return Oa(He, r);
}
function nf(r) {
  return Ua(Dt, r);
}
he(ca());
var rl = wi;
var Xb = rl;
var sf = "__created_at__",
  af = { id: sf, initialValue: Hr(0), name: "Created", options: { displayTime: !0 }, type: "date" },
  cf = "__updated_at__",
  df = { id: cf, initialValue: Hr(0), name: "Edited", options: { displayTime: !0 }, type: "date" };
!1;
var sI = "__cmsStatus__";
function aI(r, e, t) {
  let n = r.isDraft ? 0 : 1,
    o = e.isDraft ? 0 : 1;
  return t === "ascending" ? n - o : o - n;
}
export {
  xb as a,
  Cb as b,
  Rb as c,
  sf as d,
  af as e,
  cf as f,
  df as g,
  sI as h,
  aI as i,
  g as j,
  Wc as k,
  T as l,
  lo as m,
  Gc as n,
  J as o,
  ed as p,
  q,
  Ie as r,
  xt as s,
  Lh as t,
  qh as u,
  Ph as v,
  Io as w,
  wi as x,
  Xb as y,
};
//# sourceMappingURL=chunk-OKVDJHK4.mjs.map
