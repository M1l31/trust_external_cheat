function Fa(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const Ae = {}, Fn = [], kt = () => {
}, uf = () => !1, df = /^on[^a-z]/, oi = (e) => df.test(e), Va = (e) => e.startsWith("onUpdate:"), je = Object.assign, ja = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ff = Object.prototype.hasOwnProperty, fe = (e, t) => ff.call(e, t), Q = Array.isArray, Vn = (e) => qr(e) === "[object Map]", tr = (e) => qr(e) === "[object Set]", Ls = (e) => qr(e) === "[object Date]", ae = (e) => typeof e == "function", $e = (e) => typeof e == "string", Pr = (e) => typeof e == "symbol", ke = (e) => e !== null && typeof e == "object", yc = (e) => ke(e) && ae(e.then) && ae(e.catch), _c = Object.prototype.toString, qr = (e) => _c.call(e), mf = (e) => qr(e).slice(8, -1), wc = (e) => qr(e) === "[object Object]", Ua = (e) => $e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, No = /* @__PURE__ */ Fa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ii = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, pf = /-(\w)/g, Mt = ii((e) => e.replace(pf, (t, n) => n ? n.toUpperCase() : "")), bf = /\B([A-Z])/g, nr = ii(
  (e) => e.replace(bf, "-$1").toLowerCase()
), ai = ii(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), zi = ii(
  (e) => e ? `on${ai(e)}` : ""
), Mr = (e, t) => !Object.is(e, t), Io = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, zo = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Lo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, hf = (e) => {
  const t = $e(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let $s;
const ea = () => $s || ($s = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Kr(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = $e(r) ? _f(r) : Kr(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else {
    if ($e(e))
      return e;
    if (ke(e))
      return e;
  }
}
const vf = /;(?![^(]*\))/g, gf = /:([^]+)/, yf = /\/\*[^]*?\*\//g;
function _f(e) {
  const t = {};
  return e.replace(yf, "").split(vf).forEach((n) => {
    if (n) {
      const r = n.split(gf);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ge(e) {
  let t = "";
  if ($e(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const r = ge(e[n]);
      r && (t += r + " ");
    }
  else if (ke(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const wf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xf = /* @__PURE__ */ Fa(wf);
function xc(e) {
  return !!e || e === "";
}
function Ef(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Xr(e[r], t[r]);
  return n;
}
function Xr(e, t) {
  if (e === t)
    return !0;
  let n = Ls(e), r = Ls(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Pr(e), r = Pr(t), n || r)
    return e === t;
  if (n = Q(e), r = Q(t), n || r)
    return n && r ? Ef(e, t) : !1;
  if (n = ke(e), r = ke(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !Xr(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ha(e, t) {
  return e.findIndex((n) => Xr(n, t));
}
const oe = (e) => $e(e) ? e : e == null ? "" : Q(e) || ke(e) && (e.toString === _c || !ae(e.toString)) ? JSON.stringify(e, Ec, 2) : String(e), Ec = (e, t) => t && t.__v_isRef ? Ec(e, t.value) : Vn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : tr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ke(t) && !Q(t) && !wc(t) ? String(t) : t;
let yt;
class kf {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = yt, !t && yt && (this.index = (yt.scopes || (yt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = yt;
      try {
        return yt = this, t();
      } finally {
        yt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    yt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    yt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Sf(e, t = yt) {
  t && t.active && t.effects.push(e);
}
function Of() {
  return yt;
}
const Ba = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, kc = (e) => (e.w & nn) > 0, Sc = (e) => (e.n & nn) > 0, Af = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= nn;
}, Nf = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      kc(o) && !Sc(o) ? o.delete(e) : t[n++] = o, o.w &= ~nn, o.n &= ~nn;
    }
    t.length = n;
  }
}, ta = /* @__PURE__ */ new WeakMap();
let br = 0, nn = 1;
const na = 30;
let wt;
const xn = Symbol(""), ra = Symbol("");
class Ga {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Sf(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = wt, n = en;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = wt, wt = this, en = !0, nn = 1 << ++br, br <= na ? Af(this) : Fs(this), this.fn();
    } finally {
      br <= na && Nf(this), nn = 1 << --br, wt = this.parent, en = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    wt === this ? this.deferStop = !0 : this.active && (Fs(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Fs(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let en = !0;
const Oc = [];
function rr() {
  Oc.push(en), en = !1;
}
function or() {
  const e = Oc.pop();
  en = e === void 0 ? !0 : e;
}
function at(e, t, n) {
  if (en && wt) {
    let r = ta.get(e);
    r || ta.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = Ba()), Ac(o);
  }
}
function Ac(e, t) {
  let n = !1;
  br <= na ? Sc(e) || (e.n |= nn, n = !kc(e)) : n = !e.has(wt), n && (e.add(wt), wt.deps.push(e));
}
function $t(e, t, n, r, o, i) {
  const a = ta.get(e);
  if (!a)
    return;
  let s = [];
  if (t === "clear")
    s = [...a.values()];
  else if (n === "length" && Q(e)) {
    const l = Number(r);
    a.forEach((c, u) => {
      (u === "length" || u >= l) && s.push(c);
    });
  } else
    switch (n !== void 0 && s.push(a.get(n)), t) {
      case "add":
        Q(e) ? Ua(n) && s.push(a.get("length")) : (s.push(a.get(xn)), Vn(e) && s.push(a.get(ra)));
        break;
      case "delete":
        Q(e) || (s.push(a.get(xn)), Vn(e) && s.push(a.get(ra)));
        break;
      case "set":
        Vn(e) && s.push(a.get(xn));
        break;
    }
  if (s.length === 1)
    s[0] && oa(s[0]);
  else {
    const l = [];
    for (const c of s)
      c && l.push(...c);
    oa(Ba(l));
  }
}
function oa(e, t) {
  const n = Q(e) ? e : [...e];
  for (const r of n)
    r.computed && Vs(r);
  for (const r of n)
    r.computed || Vs(r);
}
function Vs(e, t) {
  (e !== wt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const If = /* @__PURE__ */ Fa("__proto__,__v_isRef,__isVue"), Nc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pr)
), Cf = /* @__PURE__ */ Ya(), Tf = /* @__PURE__ */ Ya(!1, !0), Pf = /* @__PURE__ */ Ya(!0), js = /* @__PURE__ */ Mf();
function Mf() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = se(this);
      for (let i = 0, a = this.length; i < a; i++)
        at(r, "get", i + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(se)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      rr();
      const r = se(this)[t].apply(this, n);
      return or(), r;
    };
  }), e;
}
function Rf(e) {
  const t = se(this);
  return at(t, "has", e), t.hasOwnProperty(e);
}
function Ya(e = !1, t = !1) {
  return function(r, o, i) {
    if (o === "__v_isReactive")
      return !e;
    if (o === "__v_isReadonly")
      return e;
    if (o === "__v_isShallow")
      return t;
    if (o === "__v_raw" && i === (e ? t ? Xf : Mc : t ? Pc : Tc).get(r))
      return r;
    const a = Q(r);
    if (!e) {
      if (a && fe(js, o))
        return Reflect.get(js, o, i);
      if (o === "hasOwnProperty")
        return Rf;
    }
    const s = Reflect.get(r, o, i);
    return (Pr(o) ? Nc.has(o) : If(o)) || (e || at(r, "get", o), t) ? s : Je(s) ? a && Ua(o) ? s : s.value : ke(s) ? e ? Rc(s) : ir(s) : s;
  };
}
const Df = /* @__PURE__ */ Ic(), zf = /* @__PURE__ */ Ic(!0);
function Ic(e = !1) {
  return function(n, r, o, i) {
    let a = n[r];
    if (Gn(a) && Je(a) && !Je(o))
      return !1;
    if (!e && (!$o(o) && !Gn(o) && (a = se(a), o = se(o)), !Q(n) && Je(a) && !Je(o)))
      return a.value = o, !0;
    const s = Q(n) && Ua(r) ? Number(r) < n.length : fe(n, r), l = Reflect.set(n, r, o, i);
    return n === se(i) && (s ? Mr(o, a) && $t(n, "set", r, o) : $t(n, "add", r, o)), l;
  };
}
function Lf(e, t) {
  const n = fe(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && $t(e, "delete", t, void 0), r;
}
function $f(e, t) {
  const n = Reflect.has(e, t);
  return (!Pr(t) || !Nc.has(t)) && at(e, "has", t), n;
}
function Ff(e) {
  return at(e, "iterate", Q(e) ? "length" : xn), Reflect.ownKeys(e);
}
const Cc = {
  get: Cf,
  set: Df,
  deleteProperty: Lf,
  has: $f,
  ownKeys: Ff
}, Vf = {
  get: Pf,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, jf = /* @__PURE__ */ je(
  {},
  Cc,
  {
    get: Tf,
    set: zf
  }
), Wa = (e) => e, si = (e) => Reflect.getPrototypeOf(e);
function io(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = se(e), i = se(t);
  n || (t !== i && at(o, "get", t), at(o, "get", i));
  const { has: a } = si(o), s = r ? Wa : n ? Xa : Rr;
  if (a.call(o, t))
    return s(e.get(t));
  if (a.call(o, i))
    return s(e.get(i));
  e !== o && e.get(t);
}
function ao(e, t = !1) {
  const n = this.__v_raw, r = se(n), o = se(e);
  return t || (e !== o && at(r, "has", e), at(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function so(e, t = !1) {
  return e = e.__v_raw, !t && at(se(e), "iterate", xn), Reflect.get(e, "size", e);
}
function Us(e) {
  e = se(e);
  const t = se(this);
  return si(t).has.call(t, e) || (t.add(e), $t(t, "add", e, e)), this;
}
function Hs(e, t) {
  t = se(t);
  const n = se(this), { has: r, get: o } = si(n);
  let i = r.call(n, e);
  i || (e = se(e), i = r.call(n, e));
  const a = o.call(n, e);
  return n.set(e, t), i ? Mr(t, a) && $t(n, "set", e, t) : $t(n, "add", e, t), this;
}
function Bs(e) {
  const t = se(this), { has: n, get: r } = si(t);
  let o = n.call(t, e);
  o || (e = se(e), o = n.call(t, e)), r && r.call(t, e);
  const i = t.delete(e);
  return o && $t(t, "delete", e, void 0), i;
}
function Gs() {
  const e = se(this), t = e.size !== 0, n = e.clear();
  return t && $t(e, "clear", void 0, void 0), n;
}
function lo(e, t) {
  return function(r, o) {
    const i = this, a = i.__v_raw, s = se(a), l = t ? Wa : e ? Xa : Rr;
    return !e && at(s, "iterate", xn), a.forEach((c, u) => r.call(o, l(c), l(u), i));
  };
}
function co(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, i = se(o), a = Vn(i), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = o[e](...r), u = n ? Wa : t ? Xa : Rr;
    return !t && at(
      i,
      "iterate",
      l ? ra : xn
    ), {
      // iterator protocol
      next() {
        const { value: f, done: d } = c.next();
        return d ? { value: f, done: d } : {
          value: s ? [u(f[0]), u(f[1])] : u(f),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Yt(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function Uf() {
  const e = {
    get(i) {
      return io(this, i);
    },
    get size() {
      return so(this);
    },
    has: ao,
    add: Us,
    set: Hs,
    delete: Bs,
    clear: Gs,
    forEach: lo(!1, !1)
  }, t = {
    get(i) {
      return io(this, i, !1, !0);
    },
    get size() {
      return so(this);
    },
    has: ao,
    add: Us,
    set: Hs,
    delete: Bs,
    clear: Gs,
    forEach: lo(!1, !0)
  }, n = {
    get(i) {
      return io(this, i, !0);
    },
    get size() {
      return so(this, !0);
    },
    has(i) {
      return ao.call(this, i, !0);
    },
    add: Yt("add"),
    set: Yt("set"),
    delete: Yt("delete"),
    clear: Yt("clear"),
    forEach: lo(!0, !1)
  }, r = {
    get(i) {
      return io(this, i, !0, !0);
    },
    get size() {
      return so(this, !0);
    },
    has(i) {
      return ao.call(this, i, !0);
    },
    add: Yt("add"),
    set: Yt("set"),
    delete: Yt("delete"),
    clear: Yt("clear"),
    forEach: lo(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = co(
      i,
      !1,
      !1
    ), n[i] = co(
      i,
      !0,
      !1
    ), t[i] = co(
      i,
      !1,
      !0
    ), r[i] = co(
      i,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  Hf,
  Bf,
  Gf,
  Yf
] = /* @__PURE__ */ Uf();
function qa(e, t) {
  const n = t ? e ? Yf : Gf : e ? Bf : Hf;
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    fe(n, o) && o in r ? n : r,
    o,
    i
  );
}
const Wf = {
  get: /* @__PURE__ */ qa(!1, !1)
}, qf = {
  get: /* @__PURE__ */ qa(!1, !0)
}, Kf = {
  get: /* @__PURE__ */ qa(!0, !1)
}, Tc = /* @__PURE__ */ new WeakMap(), Pc = /* @__PURE__ */ new WeakMap(), Mc = /* @__PURE__ */ new WeakMap(), Xf = /* @__PURE__ */ new WeakMap();
function Jf(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Qf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Jf(mf(e));
}
function ir(e) {
  return Gn(e) ? e : Ka(
    e,
    !1,
    Cc,
    Wf,
    Tc
  );
}
function Zf(e) {
  return Ka(
    e,
    !1,
    jf,
    qf,
    Pc
  );
}
function Rc(e) {
  return Ka(
    e,
    !0,
    Vf,
    Kf,
    Mc
  );
}
function Ka(e, t, n, r, o) {
  if (!ke(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const a = Qf(e);
  if (a === 0)
    return e;
  const s = new Proxy(
    e,
    a === 2 ? r : n
  );
  return o.set(e, s), s;
}
function jn(e) {
  return Gn(e) ? jn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Gn(e) {
  return !!(e && e.__v_isReadonly);
}
function $o(e) {
  return !!(e && e.__v_isShallow);
}
function Dc(e) {
  return jn(e) || Gn(e);
}
function se(e) {
  const t = e && e.__v_raw;
  return t ? se(t) : e;
}
function zc(e) {
  return zo(e, "__v_skip", !0), e;
}
const Rr = (e) => ke(e) ? ir(e) : e, Xa = (e) => ke(e) ? Rc(e) : e;
function Lc(e) {
  en && wt && (e = se(e), Ac(e.dep || (e.dep = Ba())));
}
function $c(e, t) {
  e = se(e);
  const n = e.dep;
  n && oa(n);
}
function Je(e) {
  return !!(e && e.__v_isRef === !0);
}
function re(e) {
  return Fc(e, !1);
}
function ia(e) {
  return Fc(e, !0);
}
function Fc(e, t) {
  return Je(e) ? e : new em(e, t);
}
class em {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : se(t), this._value = n ? t : Rr(t);
  }
  get value() {
    return Lc(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || $o(t) || Gn(t);
    t = n ? t : se(t), Mr(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Rr(t), $c(this));
  }
}
function Ja(e) {
  return Je(e) ? e.value : e;
}
const tm = {
  get: (e, t, n) => Ja(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Je(o) && !Je(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Vc(e) {
  return jn(e) ? e : new Proxy(e, tm);
}
class nm {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Ga(t, () => {
      this._dirty || (this._dirty = !0, $c(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = se(this);
    return Lc(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function rm(e, t, n = !1) {
  let r, o;
  const i = ae(e);
  return i ? (r = e, o = kt) : (r = e.get, o = e.set), new nm(r, o, i || !o, n);
}
function tn(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (i) {
    li(i, t, n);
  }
  return o;
}
function pt(e, t, n, r) {
  if (ae(e)) {
    const i = tn(e, t, n, r);
    return i && yc(i) && i.catch((a) => {
      li(a, t, n);
    }), i;
  }
  const o = [];
  for (let i = 0; i < e.length; i++)
    o.push(pt(e[i], t, n, r));
  return o;
}
function li(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const a = t.proxy, s = n;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, a, s) === !1)
            return;
      }
      i = i.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      tn(
        l,
        null,
        10,
        [e, a, s]
      );
      return;
    }
  }
  om(e, n, o, r);
}
function om(e, t, n, r = !0) {
  console.error(e);
}
let Dr = !1, aa = !1;
const et = [];
let Ct = 0;
const Un = [];
let Dt = null, pn = 0;
const jc = /* @__PURE__ */ Promise.resolve();
let Qa = null;
function Uc(e) {
  const t = Qa || jc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function im(e) {
  let t = Ct + 1, n = et.length;
  for (; t < n; ) {
    const r = t + n >>> 1;
    zr(et[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function Za(e) {
  (!et.length || !et.includes(
    e,
    Dr && e.allowRecurse ? Ct + 1 : Ct
  )) && (e.id == null ? et.push(e) : et.splice(im(e.id), 0, e), Hc());
}
function Hc() {
  !Dr && !aa && (aa = !0, Qa = jc.then(Gc));
}
function am(e) {
  const t = et.indexOf(e);
  t > Ct && et.splice(t, 1);
}
function sm(e) {
  Q(e) ? Un.push(...e) : (!Dt || !Dt.includes(
    e,
    e.allowRecurse ? pn + 1 : pn
  )) && Un.push(e), Hc();
}
function Ys(e, t = Dr ? Ct + 1 : 0) {
  for (; t < et.length; t++) {
    const n = et[t];
    n && n.pre && (et.splice(t, 1), t--, n());
  }
}
function Bc(e) {
  if (Un.length) {
    const t = [...new Set(Un)];
    if (Un.length = 0, Dt) {
      Dt.push(...t);
      return;
    }
    for (Dt = t, Dt.sort((n, r) => zr(n) - zr(r)), pn = 0; pn < Dt.length; pn++)
      Dt[pn]();
    Dt = null, pn = 0;
  }
}
const zr = (e) => e.id == null ? 1 / 0 : e.id, lm = (e, t) => {
  const n = zr(e) - zr(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Gc(e) {
  aa = !1, Dr = !0, et.sort(lm);
  const t = kt;
  try {
    for (Ct = 0; Ct < et.length; Ct++) {
      const n = et[Ct];
      n && n.active !== !1 && tn(n, null, 14);
    }
  } finally {
    Ct = 0, et.length = 0, Bc(), Dr = !1, Qa = null, (et.length || Un.length) && Gc();
  }
}
function cm(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || Ae;
  let o = n;
  const i = t.startsWith("update:"), a = i && t.slice(7);
  if (a && a in r) {
    const u = `${a === "modelValue" ? "model" : a}Modifiers`, { number: f, trim: d } = r[u] || Ae;
    d && (o = n.map((m) => $e(m) ? m.trim() : m)), f && (o = n.map(Lo));
  }
  let s, l = r[s = zi(t)] || // also try camelCase event handler (#2249)
  r[s = zi(Mt(t))];
  !l && i && (l = r[s = zi(nr(t))]), l && pt(
    l,
    e,
    6,
    o
  );
  const c = r[s + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, pt(
      c,
      e,
      6,
      o
    );
  }
}
function Yc(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let a = {}, s = !1;
  if (!ae(e)) {
    const l = (c) => {
      const u = Yc(c, t, !0);
      u && (s = !0, je(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !i && !s ? (ke(e) && r.set(e, null), null) : (Q(i) ? i.forEach((l) => a[l] = null) : je(a, i), ke(e) && r.set(e, a), a);
}
function ci(e, t) {
  return !e || !oi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), fe(e, t[0].toLowerCase() + t.slice(1)) || fe(e, nr(t)) || fe(e, t));
}
let Qe = null, Wc = null;
function Fo(e) {
  const t = Qe;
  return Qe = e, Wc = e && e.type.__scopeId || null, t;
}
function ne(e, t = Qe, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && il(-1);
    const i = Fo(t);
    let a;
    try {
      a = e(...o);
    } finally {
      Fo(i), r._d && il(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Li(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: i,
    propsOptions: [a],
    slots: s,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: d,
    setupState: m,
    ctx: p,
    inheritAttrs: h
  } = e;
  let _, y;
  const v = Fo(e);
  try {
    if (n.shapeFlag & 4) {
      const x = o || r;
      _ = It(
        u.call(
          x,
          x,
          f,
          i,
          m,
          d,
          p
        )
      ), y = l;
    } else {
      const x = t;
      _ = It(
        x.length > 1 ? x(
          i,
          { attrs: l, slots: s, emit: c }
        ) : x(
          i,
          null
          /* we know it doesn't need it */
        )
      ), y = t.props ? l : um(l);
    }
  } catch (x) {
    Or.length = 0, li(x, e, 1), _ = H(ht);
  }
  let w = _;
  if (y && h !== !1) {
    const x = Object.keys(y), { shapeFlag: I } = w;
    x.length && I & 7 && (a && x.some(Va) && (y = dm(
      y,
      a
    )), w = Ft(w, y));
  }
  return n.dirs && (w = Ft(w), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && (w.transition = n.transition), _ = w, Fo(v), _;
}
const um = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || oi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, dm = (e, t) => {
  const n = {};
  for (const r in e)
    (!Va(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function fm(e, t, n) {
  const { props: r, children: o, component: i } = e, { props: a, children: s, patchFlag: l } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Ws(r, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (a[d] !== r[d] && !ci(c, d))
          return !0;
      }
    }
  } else
    return (o || s) && (!s || !s.$stable) ? !0 : r === a ? !1 : r ? a ? Ws(r, a, c) : !0 : !!a;
  return !1;
}
function Ws(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t[i] !== e[i] && !ci(n, i))
      return !0;
  }
  return !1;
}
function mm({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const pm = (e) => e.__isSuspense;
function bm(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : sm(e);
}
function st(e, t) {
  return es(e, null, t);
}
const uo = {};
function bt(e, t, n) {
  return es(e, t, n);
}
function es(e, t, { immediate: n, deep: r, flush: o, onTrack: i, onTrigger: a } = Ae) {
  var s;
  const l = Of() === ((s = Ye) == null ? void 0 : s.scope) ? Ye : null;
  let c, u = !1, f = !1;
  if (Je(e) ? (c = () => e.value, u = $o(e)) : jn(e) ? (c = () => e, r = !0) : Q(e) ? (f = !0, u = e.some((x) => jn(x) || $o(x)), c = () => e.map((x) => {
    if (Je(x))
      return x.value;
    if (jn(x))
      return gn(x);
    if (ae(x))
      return tn(x, l, 2);
  })) : ae(e) ? t ? c = () => tn(e, l, 2) : c = () => {
    if (!(l && l.isUnmounted))
      return d && d(), pt(
        e,
        l,
        3,
        [m]
      );
  } : c = kt, t && r) {
    const x = c;
    c = () => gn(x());
  }
  let d, m = (x) => {
    d = v.onStop = () => {
      tn(x, l, 4);
    };
  }, p;
  if ($r)
    if (m = kt, t ? n && pt(t, l, 3, [
      c(),
      f ? [] : void 0,
      m
    ]) : c(), o === "sync") {
      const x = dp();
      p = x.__watcherHandles || (x.__watcherHandles = []);
    } else
      return kt;
  let h = f ? new Array(e.length).fill(uo) : uo;
  const _ = () => {
    if (v.active)
      if (t) {
        const x = v.run();
        (r || u || (f ? x.some(
          (I, $) => Mr(I, h[$])
        ) : Mr(x, h))) && (d && d(), pt(t, l, 3, [
          x,
          // pass undefined as the old value when it's changed for the first time
          h === uo ? void 0 : f && h[0] === uo ? [] : h,
          m
        ]), h = x);
      } else
        v.run();
  };
  _.allowRecurse = !!t;
  let y;
  o === "sync" ? y = _ : o === "post" ? y = () => it(_, l && l.suspense) : (_.pre = !0, l && (_.id = l.uid), y = () => Za(_));
  const v = new Ga(c, y);
  t ? n ? _() : h = v.run() : o === "post" ? it(
    v.run.bind(v),
    l && l.suspense
  ) : v.run();
  const w = () => {
    v.stop(), l && l.scope && ja(l.scope.effects, v);
  };
  return p && p.push(w), w;
}
function hm(e, t, n) {
  const r = this.proxy, o = $e(e) ? e.includes(".") ? qc(r, e) : () => r[e] : e.bind(r, r);
  let i;
  ae(t) ? i = t : (i = t.handler, n = t);
  const a = Ye;
  Wn(this);
  const s = es(o, i.bind(r), n);
  return a ? Wn(a) : En(), s;
}
function qc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function gn(e, t) {
  if (!ke(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Je(e))
    gn(e.value, t);
  else if (Q(e))
    for (let n = 0; n < e.length; n++)
      gn(e[n], t);
  else if (tr(e) || Vn(e))
    e.forEach((n) => {
      gn(n, t);
    });
  else if (wc(e))
    for (const n in e)
      gn(e[n], t);
  return e;
}
function Vo(e, t) {
  const n = Qe;
  if (n === null)
    return e;
  const r = pi(n) || n.proxy, o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [a, s, l, c = Ae] = t[i];
    a && (ae(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && gn(s), o.push({
      dir: a,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function cn(e, t, n, r) {
  const o = e.dirs, i = t && t.dirs;
  for (let a = 0; a < o.length; a++) {
    const s = o[a];
    i && (s.oldValue = i[a].value);
    let l = s.dir[r];
    l && (rr(), pt(l, n, 8, [
      e.el,
      s,
      e,
      t
    ]), or());
  }
}
function vm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Le(() => {
    e.isMounted = !0;
  }), Zc(() => {
    e.isUnmounting = !0;
  }), e;
}
const ft = [Function, Array], Kc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ft,
  onEnter: ft,
  onAfterEnter: ft,
  onEnterCancelled: ft,
  // leave
  onBeforeLeave: ft,
  onLeave: ft,
  onAfterLeave: ft,
  onLeaveCancelled: ft,
  // appear
  onBeforeAppear: ft,
  onAppear: ft,
  onAfterAppear: ft,
  onAppearCancelled: ft
}, gm = {
  name: "BaseTransition",
  props: Kc,
  setup(e, { slots: t }) {
    const n = rp(), r = vm();
    let o;
    return () => {
      const i = t.default && Jc(t.default(), !0);
      if (!i || !i.length)
        return;
      let a = i[0];
      if (i.length > 1) {
        for (const h of i)
          if (h.type !== ht) {
            a = h;
            break;
          }
      }
      const s = se(e), { mode: l } = s;
      if (r.isLeaving)
        return $i(a);
      const c = qs(a);
      if (!c)
        return $i(a);
      const u = sa(
        c,
        s,
        r,
        n
      );
      la(c, u);
      const f = n.subTree, d = f && qs(f);
      let m = !1;
      const { getTransitionKey: p } = c.type;
      if (p) {
        const h = p();
        o === void 0 ? o = h : h !== o && (o = h, m = !0);
      }
      if (d && d.type !== ht && (!bn(c, d) || m)) {
        const h = sa(
          d,
          s,
          r,
          n
        );
        if (la(d, h), l === "out-in")
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && n.update();
          }, $i(a);
        l === "in-out" && c.type !== ht && (h.delayLeave = (_, y, v) => {
          const w = Xc(
            r,
            d
          );
          w[String(d.key)] = d, _._leaveCb = () => {
            y(), _._leaveCb = void 0, delete u.delayedLeave;
          }, u.delayedLeave = v;
        });
      }
      return a;
    };
  }
}, ym = gm;
function Xc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function sa(e, t, n, r) {
  const {
    appear: o,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: s,
    onEnter: l,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: f,
    onLeave: d,
    onAfterLeave: m,
    onLeaveCancelled: p,
    onBeforeAppear: h,
    onAppear: _,
    onAfterAppear: y,
    onAppearCancelled: v
  } = t, w = String(e.key), x = Xc(n, e), I = (C, D) => {
    C && pt(
      C,
      r,
      9,
      D
    );
  }, $ = (C, D) => {
    const W = D[1];
    I(C, D), Q(C) ? C.every((V) => V.length <= 1) && W() : C.length <= 1 && W();
  }, R = {
    mode: i,
    persisted: a,
    beforeEnter(C) {
      let D = s;
      if (!n.isMounted)
        if (o)
          D = h || s;
        else
          return;
      C._leaveCb && C._leaveCb(
        !0
        /* cancelled */
      );
      const W = x[w];
      W && bn(e, W) && W.el._leaveCb && W.el._leaveCb(), I(D, [C]);
    },
    enter(C) {
      let D = l, W = c, V = u;
      if (!n.isMounted)
        if (o)
          D = _ || l, W = y || c, V = v || u;
        else
          return;
      let A = !1;
      const X = C._enterCb = (ce) => {
        A || (A = !0, ce ? I(V, [C]) : I(W, [C]), R.delayedLeave && R.delayedLeave(), C._enterCb = void 0);
      };
      D ? $(D, [C, X]) : X();
    },
    leave(C, D) {
      const W = String(e.key);
      if (C._enterCb && C._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return D();
      I(f, [C]);
      let V = !1;
      const A = C._leaveCb = (X) => {
        V || (V = !0, D(), X ? I(p, [C]) : I(m, [C]), C._leaveCb = void 0, x[W] === e && delete x[W]);
      };
      x[W] = e, d ? $(d, [C, A]) : A();
    },
    clone(C) {
      return sa(C, t, n, r);
    }
  };
  return R;
}
function $i(e) {
  if (ui(e))
    return e = Ft(e), e.children = null, e;
}
function qs(e) {
  return ui(e) ? e.children ? e.children[0] : void 0 : e;
}
function la(e, t) {
  e.shapeFlag & 6 && e.component ? la(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Jc(e, t = !1, n) {
  let r = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    const s = n == null ? a.key : String(n) + String(a.key != null ? a.key : i);
    a.type === Me ? (a.patchFlag & 128 && o++, r = r.concat(
      Jc(a.children, t, s)
    )) : (t || a.type !== ht) && r.push(s != null ? Ft(a, { key: s }) : a);
  }
  if (o > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
function de(e, t) {
  return ae(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => je({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Er = (e) => !!e.type.__asyncLoader, ui = (e) => e.type.__isKeepAlive;
function _m(e, t) {
  Qc(e, "a", t);
}
function wm(e, t) {
  Qc(e, "da", t);
}
function Qc(e, t, n = Ye) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (di(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ui(o.parent.vnode) && xm(r, t, n, o), o = o.parent;
  }
}
function xm(e, t, n, r) {
  const o = di(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ze(() => {
    ja(r[t], o);
  }, n);
}
function di(e, t, n = Ye, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...a) => {
      if (n.isUnmounted)
        return;
      rr(), Wn(n);
      const s = pt(t, n, e, a);
      return En(), or(), s;
    });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const Ht = (e) => (t, n = Ye) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!$r || e === "sp") && di(e, (...r) => t(...r), n)
), Em = Ht("bm"), Le = Ht("m"), km = Ht("bu"), Sm = Ht("u"), Zc = Ht("bum"), Ze = Ht("um"), Om = Ht("sp"), Am = Ht(
  "rtg"
), Nm = Ht(
  "rtc"
);
function Im(e, t = Ye) {
  di("ec", e, t);
}
const ts = "components";
function te(e, t) {
  return tu(ts, e, !0, t) || e;
}
const eu = Symbol.for("v-ndc");
function Cm(e) {
  return $e(e) ? tu(ts, e, !1) || e : e || eu;
}
function tu(e, t, n = !0, r = !1) {
  const o = Qe || Ye;
  if (o) {
    const i = o.type;
    if (e === ts) {
      const s = lp(
        i,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (s && (s === t || s === Mt(t) || s === ai(Mt(t))))
        return i;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ks(o[e] || i[e], t) || // global registration
      Ks(o.appContext[e], t)
    );
    return !a && r ? i : a;
  }
}
function Ks(e, t) {
  return e && (e[t] || e[Mt(t)] || e[ai(Mt(t))]);
}
function Yn(e, t, n, r) {
  let o;
  const i = n && n[r];
  if (Q(e) || $e(e)) {
    o = new Array(e.length);
    for (let a = 0, s = e.length; a < s; a++)
      o[a] = t(e[a], a, void 0, i && i[a]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, i && i[a]);
  } else if (ke(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, s) => t(a, s, void 0, i && i[s])
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let s = 0, l = a.length; s < l; s++) {
        const c = a[s];
        o[s] = t(e[c], c, s, i && i[s]);
      }
    }
  else
    o = [];
  return n && (n[r] = o), o;
}
function jo(e, t, n = {}, r, o) {
  if (Qe.isCE || Qe.parent && Er(Qe.parent) && Qe.parent.isCE)
    return t !== "default" && (n.name = t), H("slot", n, r && r());
  let i = e[t];
  i && i._c && (i._d = !1), P();
  const a = i && nu(i(n)), s = ze(
    Me,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      a && a.key || `_${t}`
    },
    a || (r ? r() : []),
    a && e._ === 1 ? 64 : -2
  );
  return !o && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), i && i._c && (i._d = !0), s;
}
function nu(e) {
  return e.some((t) => Bo(t) ? !(t.type === ht || t.type === Me && !nu(t.children)) : !0) ? e : null;
}
const ca = (e) => e ? mu(e) ? pi(e) || e.proxy : ca(e.parent) : null, kr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ je(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ca(e.parent),
    $root: (e) => ca(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ns(e),
    $forceUpdate: (e) => e.f || (e.f = () => Za(e.update)),
    $nextTick: (e) => e.n || (e.n = Uc.bind(e.proxy)),
    $watch: (e) => hm.bind(e)
  })
), Fi = (e, t) => e !== Ae && !e.__isScriptSetup && fe(e, t), Tm = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: o, props: i, accessCache: a, type: s, appContext: l } = e;
    let c;
    if (t[0] !== "$") {
      const m = a[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Fi(r, t))
          return a[t] = 1, r[t];
        if (o !== Ae && fe(o, t))
          return a[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && fe(c, t)
        )
          return a[t] = 3, i[t];
        if (n !== Ae && fe(n, t))
          return a[t] = 4, n[t];
        ua && (a[t] = 0);
      }
    }
    const u = kr[t];
    let f, d;
    if (u)
      return t === "$attrs" && at(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = s.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Ae && fe(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, fe(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: i } = e;
    return Fi(o, t) ? (o[t] = n, !0) : r !== Ae && fe(r, t) ? (r[t] = n, !0) : fe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: i }
  }, a) {
    let s;
    return !!n[a] || e !== Ae && fe(e, a) || Fi(t, a) || (s = i[0]) && fe(s, a) || fe(r, a) || fe(kr, a) || fe(o.config.globalProperties, a);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : fe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Xs(e) {
  return Q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ua = !0;
function Pm(e) {
  const t = ns(e), n = e.proxy, r = e.ctx;
  ua = !1, t.beforeCreate && Js(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: a,
    watch: s,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: m,
    updated: p,
    activated: h,
    deactivated: _,
    beforeDestroy: y,
    beforeUnmount: v,
    destroyed: w,
    unmounted: x,
    render: I,
    renderTracked: $,
    renderTriggered: R,
    errorCaptured: C,
    serverPrefetch: D,
    // public API
    expose: W,
    inheritAttrs: V,
    // assets
    components: A,
    directives: X,
    filters: ce
  } = t;
  if (c && Mm(c, r, null), a)
    for (const j in a) {
      const G = a[j];
      ae(G) && (r[j] = G.bind(n));
    }
  if (o) {
    const j = o.call(n, n);
    ke(j) && (e.data = ir(j));
  }
  if (ua = !0, i)
    for (const j in i) {
      const G = i[j], me = ae(G) ? G.bind(n, n) : ae(G.get) ? G.get.bind(n, n) : kt, Ue = !ae(G) && ae(G.set) ? G.set.bind(n) : kt, Te = F({
        get: me,
        set: Ue
      });
      Object.defineProperty(r, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: (Re) => Te.value = Re
      });
    }
  if (s)
    for (const j in s)
      ru(s[j], r, n, j);
  if (l) {
    const j = ae(l) ? l.call(n) : l;
    Reflect.ownKeys(j).forEach((G) => {
      rt(G, j[G]);
    });
  }
  u && Js(u, e, "c");
  function J(j, G) {
    Q(G) ? G.forEach((me) => j(me.bind(n))) : G && j(G.bind(n));
  }
  if (J(Em, f), J(Le, d), J(km, m), J(Sm, p), J(_m, h), J(wm, _), J(Im, C), J(Nm, $), J(Am, R), J(Zc, v), J(Ze, x), J(Om, D), Q(W))
    if (W.length) {
      const j = e.exposed || (e.exposed = {});
      W.forEach((G) => {
        Object.defineProperty(j, G, {
          get: () => n[G],
          set: (me) => n[G] = me
        });
      });
    } else
      e.exposed || (e.exposed = {});
  I && e.render === kt && (e.render = I), V != null && (e.inheritAttrs = V), A && (e.components = A), X && (e.directives = X);
}
function Mm(e, t, n = kt) {
  Q(e) && (e = da(e));
  for (const r in e) {
    const o = e[r];
    let i;
    ke(o) ? "default" in o ? i = Ve(
      o.from || r,
      o.default,
      !0
      /* treat default function as factory */
    ) : i = Ve(o.from || r) : i = Ve(o), Je(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (a) => i.value = a
    }) : t[r] = i;
  }
}
function Js(e, t, n) {
  pt(
    Q(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ru(e, t, n, r) {
  const o = r.includes(".") ? qc(n, r) : () => n[r];
  if ($e(e)) {
    const i = t[e];
    ae(i) && bt(o, i);
  } else if (ae(e))
    bt(o, e.bind(n));
  else if (ke(e))
    if (Q(e))
      e.forEach((i) => ru(i, t, n, r));
    else {
      const i = ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      ae(i) && bt(o, i, e);
    }
}
function ns(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = i.get(t);
  let l;
  return s ? l = s : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (c) => Uo(l, c, a, !0)
  ), Uo(l, t, a)), ke(t) && i.set(t, l), l;
}
function Uo(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && Uo(e, i, n, !0), o && o.forEach(
    (a) => Uo(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const s = Rm[a] || n && n[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const Rm = {
  data: Qs,
  props: Zs,
  emits: Zs,
  // objects
  methods: hr,
  computed: hr,
  // lifecycle
  beforeCreate: nt,
  created: nt,
  beforeMount: nt,
  mounted: nt,
  beforeUpdate: nt,
  updated: nt,
  beforeDestroy: nt,
  beforeUnmount: nt,
  destroyed: nt,
  unmounted: nt,
  activated: nt,
  deactivated: nt,
  errorCaptured: nt,
  serverPrefetch: nt,
  // assets
  components: hr,
  directives: hr,
  // watch
  watch: zm,
  // provide / inject
  provide: Qs,
  inject: Dm
};
function Qs(e, t) {
  return t ? e ? function() {
    return je(
      ae(e) ? e.call(this, this) : e,
      ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Dm(e, t) {
  return hr(da(e), da(t));
}
function da(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function nt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function hr(e, t) {
  return e ? je(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zs(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : je(
    /* @__PURE__ */ Object.create(null),
    Xs(e),
    Xs(t ?? {})
  ) : t;
}
function zm(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = je(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = nt(e[r], t[r]);
  return n;
}
function ou() {
  return {
    app: null,
    config: {
      isNativeTag: uf,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Lm = 0;
function $m(e, t) {
  return function(r, o = null) {
    ae(r) || (r = je({}, r)), o != null && !ke(o) && (o = null);
    const i = ou(), a = /* @__PURE__ */ new Set();
    let s = !1;
    const l = i.app = {
      _uid: Lm++,
      _component: r,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: fp,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return a.has(c) || (c && ae(c.install) ? (a.add(c), c.install(l, ...u)) : ae(c) && (a.add(c), c(l, ...u))), l;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), l;
      },
      component(c, u) {
        return u ? (i.components[c] = u, l) : i.components[c];
      },
      directive(c, u) {
        return u ? (i.directives[c] = u, l) : i.directives[c];
      },
      mount(c, u, f) {
        if (!s) {
          const d = H(
            r,
            o
          );
          return d.appContext = i, u && t ? t(d, c) : e(d, c, f), s = !0, l._container = c, c.__vue_app__ = l, pi(d.component) || d.component.proxy;
        }
      },
      unmount() {
        s && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return i.provides[c] = u, l;
      },
      runWithContext(c) {
        Ho = l;
        try {
          return c();
        } finally {
          Ho = null;
        }
      }
    };
    return l;
  };
}
let Ho = null;
function rt(e, t) {
  if (Ye) {
    let n = Ye.provides;
    const r = Ye.parent && Ye.parent.provides;
    r === n && (n = Ye.provides = Object.create(r)), n[e] = t;
  }
}
function Ve(e, t, n = !1) {
  const r = Ye || Qe;
  if (r || Ho) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Ho._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ae(t) ? t.call(r && r.proxy) : t;
  }
}
function Fm(e, t, n, r = !1) {
  const o = {}, i = {};
  zo(i, mi, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), iu(e, t, o, i);
  for (const a in e.propsOptions[0])
    a in o || (o[a] = void 0);
  n ? e.props = r ? o : Zf(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Vm(e, t, n, r) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: a }
  } = e, s = se(o), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (ci(e.emitsOptions, d))
          continue;
        const m = t[d];
        if (l)
          if (fe(i, d))
            m !== i[d] && (i[d] = m, c = !0);
          else {
            const p = Mt(d);
            o[p] = fa(
              l,
              s,
              p,
              m,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          m !== i[d] && (i[d] = m, c = !0);
      }
    }
  } else {
    iu(e, t, o, i) && (c = !0);
    let u;
    for (const f in s)
      (!t || // for camelCase
      !fe(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = nr(f)) === f || !fe(t, u))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[f] = fa(
        l,
        s,
        f,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete o[f]);
    if (i !== s)
      for (const f in i)
        (!t || !fe(t, f)) && (delete i[f], c = !0);
  }
  c && $t(e, "set", "$attrs");
}
function iu(e, t, n, r) {
  const [o, i] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (No(l))
        continue;
      const c = t[l];
      let u;
      o && fe(o, u = Mt(l)) ? !i || !i.includes(u) ? n[u] = c : (s || (s = {}))[u] = c : ci(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, a = !0);
    }
  if (i) {
    const l = se(n), c = s || Ae;
    for (let u = 0; u < i.length; u++) {
      const f = i[u];
      n[f] = fa(
        o,
        l,
        f,
        c[f],
        e,
        !fe(c, f)
      );
    }
  }
  return a;
}
function fa(e, t, n, r, o, i) {
  const a = e[n];
  if (a != null) {
    const s = fe(a, "default");
    if (s && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ae(l)) {
        const { propsDefaults: c } = o;
        n in c ? r = c[n] : (Wn(o), r = c[n] = l.call(
          null,
          t
        ), En());
      } else
        r = l;
    }
    a[
      0
      /* shouldCast */
    ] && (i && !s ? r = !1 : a[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === nr(n)) && (r = !0));
  }
  return r;
}
function au(e, t, n = !1) {
  const r = t.propsCache, o = r.get(e);
  if (o)
    return o;
  const i = e.props, a = {}, s = [];
  let l = !1;
  if (!ae(e)) {
    const u = (f) => {
      l = !0;
      const [d, m] = au(f, t, !0);
      je(a, d), m && s.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !l)
    return ke(e) && r.set(e, Fn), Fn;
  if (Q(i))
    for (let u = 0; u < i.length; u++) {
      const f = Mt(i[u]);
      el(f) && (a[f] = Ae);
    }
  else if (i)
    for (const u in i) {
      const f = Mt(u);
      if (el(f)) {
        const d = i[u], m = a[f] = Q(d) || ae(d) ? { type: d } : je({}, d);
        if (m) {
          const p = rl(Boolean, m.type), h = rl(String, m.type);
          m[
            0
            /* shouldCast */
          ] = p > -1, m[
            1
            /* shouldCastTrue */
          ] = h < 0 || p < h, (p > -1 || fe(m, "default")) && s.push(f);
        }
      }
    }
  const c = [a, s];
  return ke(e) && r.set(e, c), c;
}
function el(e) {
  return e[0] !== "$";
}
function tl(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function nl(e, t) {
  return tl(e) === tl(t);
}
function rl(e, t) {
  return Q(t) ? t.findIndex((n) => nl(n, e)) : ae(t) && nl(t, e) ? 0 : -1;
}
const su = (e) => e[0] === "_" || e === "$stable", rs = (e) => Q(e) ? e.map(It) : [It(e)], jm = (e, t, n) => {
  if (t._n)
    return t;
  const r = ne((...o) => rs(t(...o)), n);
  return r._c = !1, r;
}, lu = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (su(o))
      continue;
    const i = e[o];
    if (ae(i))
      t[o] = jm(o, i, r);
    else if (i != null) {
      const a = rs(i);
      t[o] = () => a;
    }
  }
}, cu = (e, t) => {
  const n = rs(t);
  e.slots.default = () => n;
}, Um = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = se(t), zo(t, "_", n)) : lu(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && cu(e, t);
  zo(e.slots, mi, 1);
}, Hm = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let i = !0, a = Ae;
  if (r.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? i = !1 : (je(o, t), !n && s === 1 && delete o._) : (i = !t.$stable, lu(t, o)), a = t;
  } else
    t && (cu(e, t), a = { default: 1 });
  if (i)
    for (const s in o)
      !su(s) && !(s in a) && delete o[s];
};
function ma(e, t, n, r, o = !1) {
  if (Q(e)) {
    e.forEach(
      (d, m) => ma(
        d,
        t && (Q(t) ? t[m] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Er(r) && !o)
    return;
  const i = r.shapeFlag & 4 ? pi(r.component) || r.component.proxy : r.el, a = o ? null : i, { i: s, r: l } = e, c = t && t.r, u = s.refs === Ae ? s.refs = {} : s.refs, f = s.setupState;
  if (c != null && c !== l && ($e(c) ? (u[c] = null, fe(f, c) && (f[c] = null)) : Je(c) && (c.value = null)), ae(l))
    tn(l, s, 12, [a, u]);
  else {
    const d = $e(l), m = Je(l);
    if (d || m) {
      const p = () => {
        if (e.f) {
          const h = d ? fe(f, l) ? f[l] : u[l] : l.value;
          o ? Q(h) && ja(h, i) : Q(h) ? h.includes(i) || h.push(i) : d ? (u[l] = [i], fe(f, l) && (f[l] = u[l])) : (l.value = [i], e.k && (u[e.k] = l.value));
        } else
          d ? (u[l] = a, fe(f, l) && (f[l] = a)) : m && (l.value = a, e.k && (u[e.k] = a));
      };
      a ? (p.id = -1, it(p, n)) : p();
    }
  }
}
const it = bm;
function Bm(e) {
  return Gm(e);
}
function Gm(e, t) {
  const n = ea();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: i,
    createElement: a,
    createText: s,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: d,
    setScopeId: m = kt,
    insertStaticContent: p
  } = e, h = (b, g, E, O = null, S = null, z = null, U = !1, M = null, L = !!g.dynamicChildren) => {
    if (b === g)
      return;
    b && !bn(b, g) && (O = oo(b), Re(b, S, z, !0), b = null), g.patchFlag === -2 && (L = !1, g.dynamicChildren = null);
    const { type: N, ref: Z, shapeFlag: q } = g;
    switch (N) {
      case fi:
        _(b, g, E, O);
        break;
      case ht:
        y(b, g, E, O);
        break;
      case Vi:
        b == null && v(g, E, O, U);
        break;
      case Me:
        A(
          b,
          g,
          E,
          O,
          S,
          z,
          U,
          M,
          L
        );
        break;
      default:
        q & 1 ? I(
          b,
          g,
          E,
          O,
          S,
          z,
          U,
          M,
          L
        ) : q & 6 ? X(
          b,
          g,
          E,
          O,
          S,
          z,
          U,
          M,
          L
        ) : (q & 64 || q & 128) && N.process(
          b,
          g,
          E,
          O,
          S,
          z,
          U,
          M,
          L,
          In
        );
    }
    Z != null && S && ma(Z, b && b.ref, z, g || b, !g);
  }, _ = (b, g, E, O) => {
    if (b == null)
      r(
        g.el = s(g.children),
        E,
        O
      );
    else {
      const S = g.el = b.el;
      g.children !== b.children && c(S, g.children);
    }
  }, y = (b, g, E, O) => {
    b == null ? r(
      g.el = l(g.children || ""),
      E,
      O
    ) : g.el = b.el;
  }, v = (b, g, E, O) => {
    [b.el, b.anchor] = p(
      b.children,
      g,
      E,
      O,
      b.el,
      b.anchor
    );
  }, w = ({ el: b, anchor: g }, E, O) => {
    let S;
    for (; b && b !== g; )
      S = d(b), r(b, E, O), b = S;
    r(g, E, O);
  }, x = ({ el: b, anchor: g }) => {
    let E;
    for (; b && b !== g; )
      E = d(b), o(b), b = E;
    o(g);
  }, I = (b, g, E, O, S, z, U, M, L) => {
    U = U || g.type === "svg", b == null ? $(
      g,
      E,
      O,
      S,
      z,
      U,
      M,
      L
    ) : D(
      b,
      g,
      S,
      z,
      U,
      M,
      L
    );
  }, $ = (b, g, E, O, S, z, U, M) => {
    let L, N;
    const { type: Z, props: q, shapeFlag: ee, transition: ie, dirs: le } = b;
    if (L = b.el = a(
      b.type,
      z,
      q && q.is,
      q
    ), ee & 8 ? u(L, b.children) : ee & 16 && C(
      b.children,
      L,
      null,
      O,
      S,
      z && Z !== "foreignObject",
      U,
      M
    ), le && cn(b, null, O, "created"), R(L, b, b.scopeId, U, O), q) {
      for (const we in q)
        we !== "value" && !No(we) && i(
          L,
          we,
          null,
          q[we],
          z,
          b.children,
          O,
          S,
          Rt
        );
      "value" in q && i(L, "value", null, q.value), (N = q.onVnodeBeforeMount) && At(N, O, b);
    }
    le && cn(b, null, O, "beforeMount");
    const Se = (!S || S && !S.pendingBranch) && ie && !ie.persisted;
    Se && ie.beforeEnter(L), r(L, g, E), ((N = q && q.onVnodeMounted) || Se || le) && it(() => {
      N && At(N, O, b), Se && ie.enter(L), le && cn(b, null, O, "mounted");
    }, S);
  }, R = (b, g, E, O, S) => {
    if (E && m(b, E), O)
      for (let z = 0; z < O.length; z++)
        m(b, O[z]);
    if (S) {
      let z = S.subTree;
      if (g === z) {
        const U = S.vnode;
        R(
          b,
          U,
          U.scopeId,
          U.slotScopeIds,
          S.parent
        );
      }
    }
  }, C = (b, g, E, O, S, z, U, M, L = 0) => {
    for (let N = L; N < b.length; N++) {
      const Z = b[N] = M ? Xt(b[N]) : It(b[N]);
      h(
        null,
        Z,
        g,
        E,
        O,
        S,
        z,
        U,
        M
      );
    }
  }, D = (b, g, E, O, S, z, U) => {
    const M = g.el = b.el;
    let { patchFlag: L, dynamicChildren: N, dirs: Z } = g;
    L |= b.patchFlag & 16;
    const q = b.props || Ae, ee = g.props || Ae;
    let ie;
    E && un(E, !1), (ie = ee.onVnodeBeforeUpdate) && At(ie, E, g, b), Z && cn(g, b, E, "beforeUpdate"), E && un(E, !0);
    const le = S && g.type !== "foreignObject";
    if (N ? W(
      b.dynamicChildren,
      N,
      M,
      E,
      O,
      le,
      z
    ) : U || G(
      b,
      g,
      M,
      null,
      E,
      O,
      le,
      z,
      !1
    ), L > 0) {
      if (L & 16)
        V(
          M,
          g,
          q,
          ee,
          E,
          O,
          S
        );
      else if (L & 2 && q.class !== ee.class && i(M, "class", null, ee.class, S), L & 4 && i(M, "style", q.style, ee.style, S), L & 8) {
        const Se = g.dynamicProps;
        for (let we = 0; we < Se.length; we++) {
          const Fe = Se[we], gt = q[Fe], Cn = ee[Fe];
          (Cn !== gt || Fe === "value") && i(
            M,
            Fe,
            gt,
            Cn,
            S,
            b.children,
            E,
            O,
            Rt
          );
        }
      }
      L & 1 && b.children !== g.children && u(M, g.children);
    } else
      !U && N == null && V(
        M,
        g,
        q,
        ee,
        E,
        O,
        S
      );
    ((ie = ee.onVnodeUpdated) || Z) && it(() => {
      ie && At(ie, E, g, b), Z && cn(g, b, E, "updated");
    }, O);
  }, W = (b, g, E, O, S, z, U) => {
    for (let M = 0; M < g.length; M++) {
      const L = b[M], N = g[M], Z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === Me || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !bn(L, N) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 70) ? f(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          E
        )
      );
      h(
        L,
        N,
        Z,
        null,
        O,
        S,
        z,
        U,
        !0
      );
    }
  }, V = (b, g, E, O, S, z, U) => {
    if (E !== O) {
      if (E !== Ae)
        for (const M in E)
          !No(M) && !(M in O) && i(
            b,
            M,
            E[M],
            null,
            U,
            g.children,
            S,
            z,
            Rt
          );
      for (const M in O) {
        if (No(M))
          continue;
        const L = O[M], N = E[M];
        L !== N && M !== "value" && i(
          b,
          M,
          N,
          L,
          U,
          g.children,
          S,
          z,
          Rt
        );
      }
      "value" in O && i(b, "value", E.value, O.value);
    }
  }, A = (b, g, E, O, S, z, U, M, L) => {
    const N = g.el = b ? b.el : s(""), Z = g.anchor = b ? b.anchor : s("");
    let { patchFlag: q, dynamicChildren: ee, slotScopeIds: ie } = g;
    ie && (M = M ? M.concat(ie) : ie), b == null ? (r(N, E, O), r(Z, E, O), C(
      g.children,
      E,
      Z,
      S,
      z,
      U,
      M,
      L
    )) : q > 0 && q & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (W(
      b.dynamicChildren,
      ee,
      E,
      S,
      z,
      U,
      M
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || S && g === S.subTree) && os(
      b,
      g,
      !0
      /* shallow */
    )) : G(
      b,
      g,
      E,
      Z,
      S,
      z,
      U,
      M,
      L
    );
  }, X = (b, g, E, O, S, z, U, M, L) => {
    g.slotScopeIds = M, b == null ? g.shapeFlag & 512 ? S.ctx.activate(
      g,
      E,
      O,
      U,
      L
    ) : ce(
      g,
      E,
      O,
      S,
      z,
      U,
      L
    ) : Ce(b, g, L);
  }, ce = (b, g, E, O, S, z, U) => {
    const M = b.component = np(
      b,
      O,
      S
    );
    if (ui(b) && (M.ctx.renderer = In), op(M), M.asyncDep) {
      if (S && S.registerDep(M, J), !b.el) {
        const L = M.subTree = H(ht);
        y(null, L, g, E);
      }
      return;
    }
    J(
      M,
      b,
      g,
      E,
      S,
      z,
      U
    );
  }, Ce = (b, g, E) => {
    const O = g.component = b.component;
    if (fm(b, g, E))
      if (O.asyncDep && !O.asyncResolved) {
        j(O, g, E);
        return;
      } else
        O.next = g, am(O.update), O.update();
    else
      g.el = b.el, O.vnode = g;
  }, J = (b, g, E, O, S, z, U) => {
    const M = () => {
      if (b.isMounted) {
        let { next: Z, bu: q, u: ee, parent: ie, vnode: le } = b, Se = Z, we;
        un(b, !1), Z ? (Z.el = le.el, j(b, Z, U)) : Z = le, q && Io(q), (we = Z.props && Z.props.onVnodeBeforeUpdate) && At(we, ie, Z, le), un(b, !0);
        const Fe = Li(b), gt = b.subTree;
        b.subTree = Fe, h(
          gt,
          Fe,
          // parent may have changed if it's in a teleport
          f(gt.el),
          // anchor may have changed if it's in a fragment
          oo(gt),
          b,
          S,
          z
        ), Z.el = Fe.el, Se === null && mm(b, Fe.el), ee && it(ee, S), (we = Z.props && Z.props.onVnodeUpdated) && it(
          () => At(we, ie, Z, le),
          S
        );
      } else {
        let Z;
        const { el: q, props: ee } = g, { bm: ie, m: le, parent: Se } = b, we = Er(g);
        if (un(b, !1), ie && Io(ie), !we && (Z = ee && ee.onVnodeBeforeMount) && At(Z, Se, g), un(b, !0), q && Di) {
          const Fe = () => {
            b.subTree = Li(b), Di(
              q,
              b.subTree,
              b,
              S,
              null
            );
          };
          we ? g.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !b.isUnmounted && Fe()
          ) : Fe();
        } else {
          const Fe = b.subTree = Li(b);
          h(
            null,
            Fe,
            E,
            O,
            b,
            S,
            z
          ), g.el = Fe.el;
        }
        if (le && it(le, S), !we && (Z = ee && ee.onVnodeMounted)) {
          const Fe = g;
          it(
            () => At(Z, Se, Fe),
            S
          );
        }
        (g.shapeFlag & 256 || Se && Er(Se.vnode) && Se.vnode.shapeFlag & 256) && b.a && it(b.a, S), b.isMounted = !0, g = E = O = null;
      }
    }, L = b.effect = new Ga(
      M,
      () => Za(N),
      b.scope
      // track it in component's effect scope
    ), N = b.update = () => L.run();
    N.id = b.uid, un(b, !0), N();
  }, j = (b, g, E) => {
    g.component = b;
    const O = b.vnode.props;
    b.vnode = g, b.next = null, Vm(b, g.props, O, E), Hm(b, g.children, E), rr(), Ys(), or();
  }, G = (b, g, E, O, S, z, U, M, L = !1) => {
    const N = b && b.children, Z = b ? b.shapeFlag : 0, q = g.children, { patchFlag: ee, shapeFlag: ie } = g;
    if (ee > 0) {
      if (ee & 128) {
        Ue(
          N,
          q,
          E,
          O,
          S,
          z,
          U,
          M,
          L
        );
        return;
      } else if (ee & 256) {
        me(
          N,
          q,
          E,
          O,
          S,
          z,
          U,
          M,
          L
        );
        return;
      }
    }
    ie & 8 ? (Z & 16 && Rt(N, S, z), q !== N && u(E, q)) : Z & 16 ? ie & 16 ? Ue(
      N,
      q,
      E,
      O,
      S,
      z,
      U,
      M,
      L
    ) : Rt(N, S, z, !0) : (Z & 8 && u(E, ""), ie & 16 && C(
      q,
      E,
      O,
      S,
      z,
      U,
      M,
      L
    ));
  }, me = (b, g, E, O, S, z, U, M, L) => {
    b = b || Fn, g = g || Fn;
    const N = b.length, Z = g.length, q = Math.min(N, Z);
    let ee;
    for (ee = 0; ee < q; ee++) {
      const ie = g[ee] = L ? Xt(g[ee]) : It(g[ee]);
      h(
        b[ee],
        ie,
        E,
        null,
        S,
        z,
        U,
        M,
        L
      );
    }
    N > Z ? Rt(
      b,
      S,
      z,
      !0,
      !1,
      q
    ) : C(
      g,
      E,
      O,
      S,
      z,
      U,
      M,
      L,
      q
    );
  }, Ue = (b, g, E, O, S, z, U, M, L) => {
    let N = 0;
    const Z = g.length;
    let q = b.length - 1, ee = Z - 1;
    for (; N <= q && N <= ee; ) {
      const ie = b[N], le = g[N] = L ? Xt(g[N]) : It(g[N]);
      if (bn(ie, le))
        h(
          ie,
          le,
          E,
          null,
          S,
          z,
          U,
          M,
          L
        );
      else
        break;
      N++;
    }
    for (; N <= q && N <= ee; ) {
      const ie = b[q], le = g[ee] = L ? Xt(g[ee]) : It(g[ee]);
      if (bn(ie, le))
        h(
          ie,
          le,
          E,
          null,
          S,
          z,
          U,
          M,
          L
        );
      else
        break;
      q--, ee--;
    }
    if (N > q) {
      if (N <= ee) {
        const ie = ee + 1, le = ie < Z ? g[ie].el : O;
        for (; N <= ee; )
          h(
            null,
            g[N] = L ? Xt(g[N]) : It(g[N]),
            E,
            le,
            S,
            z,
            U,
            M,
            L
          ), N++;
      }
    } else if (N > ee)
      for (; N <= q; )
        Re(b[N], S, z, !0), N++;
    else {
      const ie = N, le = N, Se = /* @__PURE__ */ new Map();
      for (N = le; N <= ee; N++) {
        const lt = g[N] = L ? Xt(g[N]) : It(g[N]);
        lt.key != null && Se.set(lt.key, N);
      }
      let we, Fe = 0;
      const gt = ee - le + 1;
      let Cn = !1, Rs = 0;
      const ur = new Array(gt);
      for (N = 0; N < gt; N++)
        ur[N] = 0;
      for (N = ie; N <= q; N++) {
        const lt = b[N];
        if (Fe >= gt) {
          Re(lt, S, z, !0);
          continue;
        }
        let Ot;
        if (lt.key != null)
          Ot = Se.get(lt.key);
        else
          for (we = le; we <= ee; we++)
            if (ur[we - le] === 0 && bn(lt, g[we])) {
              Ot = we;
              break;
            }
        Ot === void 0 ? Re(lt, S, z, !0) : (ur[Ot - le] = N + 1, Ot >= Rs ? Rs = Ot : Cn = !0, h(
          lt,
          g[Ot],
          E,
          null,
          S,
          z,
          U,
          M,
          L
        ), Fe++);
      }
      const Ds = Cn ? Ym(ur) : Fn;
      for (we = Ds.length - 1, N = gt - 1; N >= 0; N--) {
        const lt = le + N, Ot = g[lt], zs = lt + 1 < Z ? g[lt + 1].el : O;
        ur[N] === 0 ? h(
          null,
          Ot,
          E,
          zs,
          S,
          z,
          U,
          M,
          L
        ) : Cn && (we < 0 || N !== Ds[we] ? Te(Ot, E, zs, 2) : we--);
      }
    }
  }, Te = (b, g, E, O, S = null) => {
    const { el: z, type: U, transition: M, children: L, shapeFlag: N } = b;
    if (N & 6) {
      Te(b.component.subTree, g, E, O);
      return;
    }
    if (N & 128) {
      b.suspense.move(g, E, O);
      return;
    }
    if (N & 64) {
      U.move(b, g, E, In);
      return;
    }
    if (U === Me) {
      r(z, g, E);
      for (let q = 0; q < L.length; q++)
        Te(L[q], g, E, O);
      r(b.anchor, g, E);
      return;
    }
    if (U === Vi) {
      w(b, g, E);
      return;
    }
    if (O !== 2 && N & 1 && M)
      if (O === 0)
        M.beforeEnter(z), r(z, g, E), it(() => M.enter(z), S);
      else {
        const { leave: q, delayLeave: ee, afterLeave: ie } = M, le = () => r(z, g, E), Se = () => {
          q(z, () => {
            le(), ie && ie();
          });
        };
        ee ? ee(z, le, Se) : Se();
      }
    else
      r(z, g, E);
  }, Re = (b, g, E, O = !1, S = !1) => {
    const {
      type: z,
      props: U,
      ref: M,
      children: L,
      dynamicChildren: N,
      shapeFlag: Z,
      patchFlag: q,
      dirs: ee
    } = b;
    if (M != null && ma(M, null, E, b, !0), Z & 256) {
      g.ctx.deactivate(b);
      return;
    }
    const ie = Z & 1 && ee, le = !Er(b);
    let Se;
    if (le && (Se = U && U.onVnodeBeforeUnmount) && At(Se, g, b), Z & 6)
      Gt(b.component, E, O);
    else {
      if (Z & 128) {
        b.suspense.unmount(E, O);
        return;
      }
      ie && cn(b, null, g, "beforeUnmount"), Z & 64 ? b.type.remove(
        b,
        g,
        E,
        S,
        In,
        O
      ) : N && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== Me || q > 0 && q & 64) ? Rt(
        N,
        g,
        E,
        !1,
        !0
      ) : (z === Me && q & 384 || !S && Z & 16) && Rt(L, g, E), O && Nn(b);
    }
    (le && (Se = U && U.onVnodeUnmounted) || ie) && it(() => {
      Se && At(Se, g, b), ie && cn(b, null, g, "unmounted");
    }, E);
  }, Nn = (b) => {
    const { type: g, el: E, anchor: O, transition: S } = b;
    if (g === Me) {
      tt(E, O);
      return;
    }
    if (g === Vi) {
      x(b);
      return;
    }
    const z = () => {
      o(E), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (b.shapeFlag & 1 && S && !S.persisted) {
      const { leave: U, delayLeave: M } = S, L = () => U(E, z);
      M ? M(b.el, z, L) : L();
    } else
      z();
  }, tt = (b, g) => {
    let E;
    for (; b !== g; )
      E = d(b), o(b), b = E;
    o(g);
  }, Gt = (b, g, E) => {
    const { bum: O, scope: S, update: z, subTree: U, um: M } = b;
    O && Io(O), S.stop(), z && (z.active = !1, Re(U, b, g, E)), M && it(M, g), it(() => {
      b.isUnmounted = !0;
    }, g), g && g.pendingBranch && !g.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve());
  }, Rt = (b, g, E, O = !1, S = !1, z = 0) => {
    for (let U = z; U < b.length; U++)
      Re(b[U], g, E, O, S);
  }, oo = (b) => b.shapeFlag & 6 ? oo(b.component.subTree) : b.shapeFlag & 128 ? b.suspense.next() : d(b.anchor || b.el), Ms = (b, g, E) => {
    b == null ? g._vnode && Re(g._vnode, null, null, !0) : h(g._vnode || null, b, g, null, null, null, E), Ys(), Bc(), g._vnode = b;
  }, In = {
    p: h,
    um: Re,
    m: Te,
    r: Nn,
    mt: ce,
    mc: C,
    pc: G,
    pbc: W,
    n: oo,
    o: e
  };
  let Ri, Di;
  return t && ([Ri, Di] = t(
    In
  )), {
    render: Ms,
    hydrate: Ri,
    createApp: $m(Ms, Ri)
  };
}
function un({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function os(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Q(r) && Q(o))
    for (let i = 0; i < r.length; i++) {
      const a = r[i];
      let s = o[i];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = o[i] = Xt(o[i]), s.el = a.el), n || os(a, s)), s.type === fi && (s.el = a.el);
    }
}
function Ym(e) {
  const t = e.slice(), n = [0];
  let r, o, i, a, s;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (o = n[n.length - 1], e[o] < c) {
        t[r] = o, n.push(r);
        continue;
      }
      for (i = 0, a = n.length - 1; i < a; )
        s = i + a >> 1, e[n[s]] < c ? i = s + 1 : a = s;
      c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, a = n[i - 1]; i-- > 0; )
    n[i] = a, a = t[a];
  return n;
}
const Wm = (e) => e.__isTeleport, Sr = (e) => e && (e.disabled || e.disabled === ""), ol = (e) => typeof SVGElement < "u" && e instanceof SVGElement, pa = (e, t) => {
  const n = e && e.to;
  return $e(n) ? t ? t(n) : null : n;
}, qm = {
  __isTeleport: !0,
  process(e, t, n, r, o, i, a, s, l, c) {
    const {
      mc: u,
      pc: f,
      pbc: d,
      o: { insert: m, querySelector: p, createText: h, createComment: _ }
    } = c, y = Sr(t.props);
    let { shapeFlag: v, children: w, dynamicChildren: x } = t;
    if (e == null) {
      const I = t.el = h(""), $ = t.anchor = h("");
      m(I, n, r), m($, n, r);
      const R = t.target = pa(t.props, p), C = t.targetAnchor = h("");
      R && (m(C, R), a = a || ol(R));
      const D = (W, V) => {
        v & 16 && u(
          w,
          W,
          V,
          o,
          i,
          a,
          s,
          l
        );
      };
      y ? D(n, $) : R && D(R, C);
    } else {
      t.el = e.el;
      const I = t.anchor = e.anchor, $ = t.target = e.target, R = t.targetAnchor = e.targetAnchor, C = Sr(e.props), D = C ? n : $, W = C ? I : R;
      if (a = a || ol($), x ? (d(
        e.dynamicChildren,
        x,
        D,
        o,
        i,
        a,
        s
      ), os(e, t, !0)) : l || f(
        e,
        t,
        D,
        W,
        o,
        i,
        a,
        s,
        !1
      ), y)
        C || fo(
          t,
          n,
          I,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const V = t.target = pa(
          t.props,
          p
        );
        V && fo(
          t,
          V,
          null,
          c,
          0
        );
      } else
        C && fo(
          t,
          $,
          R,
          c,
          1
        );
    }
    uu(t);
  },
  remove(e, t, n, r, { um: o, o: { remove: i } }, a) {
    const { shapeFlag: s, children: l, anchor: c, targetAnchor: u, target: f, props: d } = e;
    if (f && i(u), (a || !Sr(d)) && (i(c), s & 16))
      for (let m = 0; m < l.length; m++) {
        const p = l[m];
        o(
          p,
          t,
          n,
          !0,
          !!p.dynamicChildren
        );
      }
  },
  move: fo,
  hydrate: Km
};
function fo(e, t, n, { o: { insert: r }, m: o }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: a, anchor: s, shapeFlag: l, children: c, props: u } = e, f = i === 2;
  if (f && r(a, t, n), (!f || Sr(u)) && l & 16)
    for (let d = 0; d < c.length; d++)
      o(
        c[d],
        t,
        n,
        2
      );
  f && r(s, t, n);
}
function Km(e, t, n, r, o, i, {
  o: { nextSibling: a, parentNode: s, querySelector: l }
}, c) {
  const u = t.target = pa(
    t.props,
    l
  );
  if (u) {
    const f = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Sr(t.props))
        t.anchor = c(
          a(e),
          t,
          s(e),
          n,
          r,
          o,
          i
        ), t.targetAnchor = f;
      else {
        t.anchor = a(e);
        let d = f;
        for (; d; )
          if (d = a(d), d && d.nodeType === 8 && d.data === "teleport anchor") {
            t.targetAnchor = d, u._lpa = t.targetAnchor && a(t.targetAnchor);
            break;
          }
        c(
          f,
          t,
          u,
          n,
          r,
          o,
          i
        );
      }
    uu(t);
  }
  return t.anchor && a(t.anchor);
}
const Xm = qm;
function uu(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const Me = Symbol.for("v-fgt"), fi = Symbol.for("v-txt"), ht = Symbol.for("v-cmt"), Vi = Symbol.for("v-stc"), Or = [];
let xt = null;
function P(e = !1) {
  Or.push(xt = e ? null : []);
}
function Jm() {
  Or.pop(), xt = Or[Or.length - 1] || null;
}
let Lr = 1;
function il(e) {
  Lr += e;
}
function du(e) {
  return e.dynamicChildren = Lr > 0 ? xt || Fn : null, Jm(), Lr > 0 && xt && xt.push(e), e;
}
function Y(e, t, n, r, o, i) {
  return du(
    k(
      e,
      t,
      n,
      r,
      o,
      i,
      !0
      /* isBlock */
    )
  );
}
function ze(e, t, n, r, o) {
  return du(
    H(
      e,
      t,
      n,
      r,
      o,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function Bo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function bn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const mi = "__vInternal", fu = ({ key: e }) => e ?? null, Co = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? $e(e) || Je(e) || ae(e) ? { i: Qe, r: e, k: t, f: !!n } : e : null);
function k(e, t = null, n = null, r = 0, o = null, i = e === Me ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fu(t),
    ref: t && Co(t),
    scopeId: Wc,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Qe
  };
  return s ? (is(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= $e(n) ? 8 : 16), Lr > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  xt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && xt.push(l), l;
}
const H = Qm;
function Qm(e, t = null, n = null, r = 0, o = null, i = !1) {
  if ((!e || e === eu) && (e = ht), Bo(e)) {
    const s = Ft(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && is(s, n), Lr > 0 && !i && xt && (s.shapeFlag & 6 ? xt[xt.indexOf(e)] = s : xt.push(s)), s.patchFlag |= -2, s;
  }
  if (cp(e) && (e = e.__vccOpts), t) {
    t = Zm(t);
    let { class: s, style: l } = t;
    s && !$e(s) && (t.class = ge(s)), ke(l) && (Dc(l) && !Q(l) && (l = je({}, l)), t.style = Kr(l));
  }
  const a = $e(e) ? 1 : pm(e) ? 128 : Wm(e) ? 64 : ke(e) ? 4 : ae(e) ? 2 : 0;
  return k(
    e,
    t,
    n,
    r,
    o,
    a,
    i,
    !0
  );
}
function Zm(e) {
  return e ? Dc(e) || mi in e ? je({}, e) : e : null;
}
function Ft(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: a } = e, s = t ? Ar(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: s,
    key: s && fu(s),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Q(o) ? o.concat(Co(t)) : [o, Co(t)] : Co(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Me ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ft(e.ssContent),
    ssFallback: e.ssFallback && Ft(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function _e(e = " ", t = 0) {
  return H(fi, null, e, t);
}
function xe(e = "", t = !1) {
  return t ? (P(), ze(ht, null, e)) : H(ht, null, e);
}
function It(e) {
  return e == null || typeof e == "boolean" ? H(ht) : Q(e) ? H(
    Me,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Xt(e) : H(fi, null, String(e));
}
function Xt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ft(e);
}
function is(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), is(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(mi in t) ? t._ctx = Qe : o === 3 && Qe && (Qe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    ae(t) ? (t = { default: t, _ctx: Qe }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [_e(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ar(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ge([t.class, r.class]));
      else if (o === "style")
        t.style = Kr([t.style, r.style]);
      else if (oi(o)) {
        const i = t[o], a = r[o];
        a && i !== a && !(Q(i) && i.includes(a)) && (t[o] = i ? [].concat(i, a) : a);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
function At(e, t, n, r = null) {
  pt(e, t, 7, [
    n,
    r
  ]);
}
const ep = ou();
let tp = 0;
function np(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || ep, i = {
    uid: tp++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new kf(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: au(r, o),
    emitsOptions: Yc(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ae,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ae,
    data: Ae,
    props: Ae,
    attrs: Ae,
    slots: Ae,
    refs: Ae,
    setupState: Ae,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = cm.bind(null, i), e.ce && e.ce(i), i;
}
let Ye = null;
const rp = () => Ye || Qe;
let as, Tn, al = "__VUE_INSTANCE_SETTERS__";
(Tn = ea()[al]) || (Tn = ea()[al] = []), Tn.push((e) => Ye = e), as = (e) => {
  Tn.length > 1 ? Tn.forEach((t) => t(e)) : Tn[0](e);
};
const Wn = (e) => {
  as(e), e.scope.on();
}, En = () => {
  Ye && Ye.scope.off(), as(null);
};
function mu(e) {
  return e.vnode.shapeFlag & 4;
}
let $r = !1;
function op(e, t = !1) {
  $r = t;
  const { props: n, children: r } = e.vnode, o = mu(e);
  Fm(e, n, o, t), Um(e, r);
  const i = o ? ip(e, t) : void 0;
  return $r = !1, i;
}
function ip(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = zc(new Proxy(e.ctx, Tm));
  const { setup: r } = n;
  if (r) {
    const o = e.setupContext = r.length > 1 ? sp(e) : null;
    Wn(e), rr();
    const i = tn(
      r,
      e,
      0,
      [e.props, o]
    );
    if (or(), En(), yc(i)) {
      if (i.then(En, En), t)
        return i.then((a) => {
          sl(e, a, t);
        }).catch((a) => {
          li(a, e, 0);
        });
      e.asyncDep = i;
    } else
      sl(e, i, t);
  } else
    pu(e, t);
}
function sl(e, t, n) {
  ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ke(t) && (e.setupState = Vc(t)), pu(e, n);
}
let ll;
function pu(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && ll && !r.render) {
      const o = r.template || ns(e).template;
      if (o) {
        const { isCustomElement: i, compilerOptions: a } = e.appContext.config, { delimiters: s, compilerOptions: l } = r, c = je(
          je(
            {
              isCustomElement: i,
              delimiters: s
            },
            a
          ),
          l
        );
        r.render = ll(o, c);
      }
    }
    e.render = r.render || kt;
  }
  Wn(e), rr(), Pm(e), or(), En();
}
function ap(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return at(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function sp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return ap(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function pi(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Vc(zc(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in kr)
          return kr[n](e);
      },
      has(t, n) {
        return n in t || n in kr;
      }
    }));
}
function lp(e, t = !0) {
  return ae(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function cp(e) {
  return ae(e) && "__vccOpts" in e;
}
const F = (e, t) => rm(e, t, $r);
function He(e, t, n) {
  const r = arguments.length;
  return r === 2 ? ke(t) && !Q(t) ? Bo(t) ? H(e, null, [t]) : H(e, t) : H(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Bo(n) && (n = [n]), H(e, t, n));
}
const up = Symbol.for("v-scx"), dp = () => Ve(up), fp = "3.3.4", mp = "http://www.w3.org/2000/svg", hn = typeof document < "u" ? document : null, cl = hn && /* @__PURE__ */ hn.createElement("template"), pp = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t ? hn.createElementNS(mp, e) : hn.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => hn.createTextNode(e),
  createComment: (e) => hn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => hn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, i) {
    const a = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      cl.innerHTML = r ? `<svg>${e}</svg>` : e;
      const s = cl.content;
      if (r) {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, n);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function bp(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function hp(e, t, n) {
  const r = e.style, o = $e(n);
  if (n && !o) {
    if (t && !$e(t))
      for (const i in t)
        n[i] == null && ba(r, i, "");
    for (const i in n)
      ba(r, i, n[i]);
  } else {
    const i = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = i);
  }
}
const ul = /\s*!important$/;
function ba(e, t, n) {
  if (Q(n))
    n.forEach((r) => ba(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = vp(e, t);
    ul.test(n) ? e.setProperty(
      nr(r),
      n.replace(ul, ""),
      "important"
    ) : e[r] = n;
  }
}
const dl = ["Webkit", "Moz", "ms"], ji = {};
function vp(e, t) {
  const n = ji[t];
  if (n)
    return n;
  let r = Mt(t);
  if (r !== "filter" && r in e)
    return ji[t] = r;
  r = ai(r);
  for (let o = 0; o < dl.length; o++) {
    const i = dl[o] + r;
    if (i in e)
      return ji[t] = i;
  }
  return t;
}
const fl = "http://www.w3.org/1999/xlink";
function gp(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(fl, t.slice(6, t.length)) : e.setAttributeNS(fl, t, n);
  else {
    const i = xf(t);
    n == null || i && !xc(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function yp(e, t, n, r, o, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    r && a(r, o, i), e[t] = n ?? "";
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    e._value = n;
    const c = s === "OPTION" ? e.getAttribute("value") : e.value, u = n ?? "";
    c !== u && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = xc(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
function Jt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function _p(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function wp(e, t, n, r, o = null) {
  const i = e._vei || (e._vei = {}), a = i[t];
  if (r && a)
    a.value = r;
  else {
    const [s, l] = xp(t);
    if (r) {
      const c = i[t] = Sp(r, o);
      Jt(e, s, c, l);
    } else
      a && (_p(e, s, a, l), i[t] = void 0);
  }
}
const ml = /(?:Once|Passive|Capture)$/;
function xp(e) {
  let t;
  if (ml.test(e)) {
    t = {};
    let r;
    for (; r = e.match(ml); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : nr(e.slice(2)), t];
}
let Ui = 0;
const Ep = /* @__PURE__ */ Promise.resolve(), kp = () => Ui || (Ep.then(() => Ui = 0), Ui = Date.now());
function Sp(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    pt(
      Op(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = kp(), n;
}
function Op(e, t) {
  if (Q(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (o) => !o._stopped && r && r(o));
  } else
    return t;
}
const pl = /^on[a-z]/, Ap = (e, t, n, r, o = !1, i, a, s, l) => {
  t === "class" ? bp(e, r, o) : t === "style" ? hp(e, n, r) : oi(t) ? Va(t) || wp(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Np(e, t, r, o)) ? yp(
    e,
    t,
    r,
    i,
    a,
    s,
    l
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), gp(e, t, r, o));
};
function Np(e, t, n, r) {
  return r ? !!(t === "innerHTML" || t === "textContent" || t in e && pl.test(t) && ae(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || pl.test(t) && $e(n) ? !1 : t in e;
}
const Wt = "transition", dr = "animation", qn = (e, { slots: t }) => He(ym, Ip(e), t);
qn.displayName = "Transition";
const bu = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
qn.props = /* @__PURE__ */ je(
  {},
  Kc,
  bu
);
const dn = (e, t = []) => {
  Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, bl = (e) => e ? Q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ip(e) {
  const t = {};
  for (const A in e)
    A in bu || (t[A] = e[A]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: o,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: a = `${n}-enter-active`,
    enterToClass: s = `${n}-enter-to`,
    appearFromClass: l = i,
    appearActiveClass: c = a,
    appearToClass: u = s,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, p = Cp(o), h = p && p[0], _ = p && p[1], {
    onBeforeEnter: y,
    onEnter: v,
    onEnterCancelled: w,
    onLeave: x,
    onLeaveCancelled: I,
    onBeforeAppear: $ = y,
    onAppear: R = v,
    onAppearCancelled: C = w
  } = t, D = (A, X, ce) => {
    fn(A, X ? u : s), fn(A, X ? c : a), ce && ce();
  }, W = (A, X) => {
    A._isLeaving = !1, fn(A, f), fn(A, m), fn(A, d), X && X();
  }, V = (A) => (X, ce) => {
    const Ce = A ? R : v, J = () => D(X, A, ce);
    dn(Ce, [X, J]), hl(() => {
      fn(X, A ? l : i), qt(X, A ? u : s), bl(Ce) || vl(X, r, h, J);
    });
  };
  return je(t, {
    onBeforeEnter(A) {
      dn(y, [A]), qt(A, i), qt(A, a);
    },
    onBeforeAppear(A) {
      dn($, [A]), qt(A, l), qt(A, c);
    },
    onEnter: V(!1),
    onAppear: V(!0),
    onLeave(A, X) {
      A._isLeaving = !0;
      const ce = () => W(A, X);
      qt(A, f), Mp(), qt(A, d), hl(() => {
        A._isLeaving && (fn(A, f), qt(A, m), bl(x) || vl(A, r, _, ce));
      }), dn(x, [A, ce]);
    },
    onEnterCancelled(A) {
      D(A, !1), dn(w, [A]);
    },
    onAppearCancelled(A) {
      D(A, !0), dn(C, [A]);
    },
    onLeaveCancelled(A) {
      W(A), dn(I, [A]);
    }
  });
}
function Cp(e) {
  if (e == null)
    return null;
  if (ke(e))
    return [Hi(e.enter), Hi(e.leave)];
  {
    const t = Hi(e);
    return [t, t];
  }
}
function Hi(e) {
  return hf(e);
}
function qt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function fn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function hl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Tp = 0;
function vl(e, t, n, r) {
  const o = e._endId = ++Tp, i = () => {
    o === e._endId && r();
  };
  if (n)
    return setTimeout(i, n);
  const { type: a, timeout: s, propCount: l } = Pp(e, t);
  if (!a)
    return r();
  const c = a + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(c, d), i();
  }, d = (m) => {
    m.target === e && ++u >= l && f();
  };
  setTimeout(() => {
    u < l && f();
  }, s + 1), e.addEventListener(c, d);
}
function Pp(e, t) {
  const n = window.getComputedStyle(e), r = (p) => (n[p] || "").split(", "), o = r(`${Wt}Delay`), i = r(`${Wt}Duration`), a = gl(o, i), s = r(`${dr}Delay`), l = r(`${dr}Duration`), c = gl(s, l);
  let u = null, f = 0, d = 0;
  t === Wt ? a > 0 && (u = Wt, f = a, d = i.length) : t === dr ? c > 0 && (u = dr, f = c, d = l.length) : (f = Math.max(a, c), u = f > 0 ? a > c ? Wt : dr : null, d = u ? u === Wt ? i.length : l.length : 0);
  const m = u === Wt && /\b(transform|all)(,|$)/.test(
    r(`${Wt}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: d,
    hasTransform: m
  };
}
function gl(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => yl(n) + yl(e[r])));
}
function yl(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Mp() {
  return document.body.offsetHeight;
}
const Kn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => Io(t, n) : t;
};
function Rp(e) {
  e.target.composing = !0;
}
function _l(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const wl = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e._assign = Kn(o);
    const i = r || o.props && o.props.type === "number";
    Jt(e, t ? "change" : "input", (a) => {
      if (a.target.composing)
        return;
      let s = e.value;
      n && (s = s.trim()), i && (s = Lo(s)), e._assign(s);
    }), n && Jt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Jt(e, "compositionstart", Rp), Jt(e, "compositionend", _l), Jt(e, "change", _l));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: o } }, i) {
    if (e._assign = Kn(i), e.composing || document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === t || (o || e.type === "number") && Lo(e.value) === t))
      return;
    const a = t ?? "";
    e.value !== a && (e.value = a);
  }
}, Dp = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e._assign = Kn(n), Jt(e, "change", () => {
      const r = e._modelValue, o = Fr(e), i = e.checked, a = e._assign;
      if (Q(r)) {
        const s = Ha(r, o), l = s !== -1;
        if (i && !l)
          a(r.concat(o));
        else if (!i && l) {
          const c = [...r];
          c.splice(s, 1), a(c);
        }
      } else if (tr(r)) {
        const s = new Set(r);
        i ? s.add(o) : s.delete(o), a(s);
      } else
        a(hu(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: xl,
  beforeUpdate(e, t, n) {
    e._assign = Kn(n), xl(e, t, n);
  }
};
function xl(e, { value: t, oldValue: n }, r) {
  e._modelValue = t, Q(t) ? e.checked = Ha(t, r.props.value) > -1 : tr(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = Xr(t, hu(e, !0)));
}
const zp = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const o = tr(t);
    Jt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? Lo(Fr(a)) : Fr(a)
      );
      e._assign(
        e.multiple ? o ? new Set(i) : i : i[0]
      );
    }), e._assign = Kn(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    El(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = Kn(n);
  },
  updated(e, { value: t }) {
    El(e, t);
  }
};
function El(e, t) {
  const n = e.multiple;
  if (!(n && !Q(t) && !tr(t))) {
    for (let r = 0, o = e.options.length; r < o; r++) {
      const i = e.options[r], a = Fr(i);
      if (n)
        Q(t) ? i.selected = Ha(t, a) > -1 : i.selected = t.has(a);
      else if (Xr(Fr(i), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Fr(e) {
  return "_value" in e ? e._value : e.value;
}
function hu(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Lp = /* @__PURE__ */ je({ patchProp: Ap }, pp);
let kl;
function $p() {
  return kl || (kl = Bm(Lp));
}
const Fp = (...e) => {
  const t = $p().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Vp(r);
    if (!o)
      return;
    const i = t._component;
    !ae(i) && !i.render && !i.template && (i.template = o.innerHTML), o.innerHTML = "";
    const a = n(o, !1, o instanceof SVGElement);
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), a;
  }, t;
};
function Vp(e) {
  return $e(e) ? document.querySelector(e) : e;
}
function vt(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, vt), r;
}
var Xn = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Xn || {}), Zt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Zt || {});
function We({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...o }) {
  var i;
  let a = gu(r, n), s = Object.assign(o, { props: a });
  if (e || t & 2 && a.static)
    return Bi(s);
  if (t & 1) {
    let l = (i = a.unmount) == null || i ? 0 : 1;
    return vt(l, { 0() {
      return null;
    }, 1() {
      return Bi({ ...o, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Bi(s);
}
function Bi({ props: e, attrs: t, slots: n, slot: r, name: o }) {
  var i, a;
  let { as: s, ...l } = ss(e, ["unmount", "static"]), c = (i = n.default) == null ? void 0 : i.call(n, r), u = {};
  if (r) {
    let f = !1, d = [];
    for (let [m, p] of Object.entries(r))
      typeof p == "boolean" && (f = !0), p === !0 && d.push(m);
    f && (u["data-headlessui-state"] = d.join(" "));
  }
  if (s === "template") {
    if (c = vu(c ?? []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [f, ...d] = c ?? [];
      if (!Up(f) || d.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((h) => h.trim()).filter((h, _, y) => y.indexOf(h) === _).sort((h, _) => h.localeCompare(_)).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
      let m = gu((a = f.props) != null ? a : {}, l), p = Ft(f, m);
      for (let h in m)
        h.startsWith("on") && (p.props || (p.props = {}), p.props[h] = m[h]);
      return p;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return He(s, Object.assign({}, l, u), { default: () => c });
}
function vu(e) {
  return e.flatMap((t) => t.type === Me ? vu(t.children) : [t]);
}
function gu(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, { [r](o, ...i) {
      let a = n[r];
      for (let s of a) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        s(o, ...i);
      }
    } });
  return t;
}
function jp(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function ss(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function Up(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Hp = 0;
function Bp() {
  return ++Hp;
}
function St() {
  return Bp();
}
var ct = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ct || {});
function he(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let yu = Symbol("Context");
var Xe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Xe || {});
function Gp() {
  return bi() !== null;
}
function bi() {
  return Ve(yu, null);
}
function _u(e) {
  rt(yu, e);
}
function Sl(e, t) {
  if (e)
    return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function Yp(e, t) {
  let n = re(Sl(e.value.type, e.value.as));
  return Le(() => {
    n.value = Sl(e.value.type, e.value.as);
  }), st(() => {
    var r;
    n.value || he(t) && he(t) instanceof HTMLButtonElement && !((r = he(t)) != null && r.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var Wp = Object.defineProperty, qp = (e, t, n) => t in e ? Wp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ol = (e, t, n) => (qp(e, typeof t != "symbol" ? t + "" : t, n), n);
let Kp = class {
  constructor() {
    Ol(this, "current", this.detect()), Ol(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, Jr = new Kp();
function Pt(e) {
  if (Jr.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = he(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function Xp({ container: e, accept: t, walk: n, enabled: r }) {
  st(() => {
    let o = e.value;
    if (!o || r !== void 0 && !r.value)
      return;
    let i = Pt(e);
    if (!i)
      return;
    let a = Object.assign((l) => t(l), { acceptNode: t }), s = i.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, a, !1);
    for (; s.nextNode(); )
      n(s.currentNode);
  });
}
let ha = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var mt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(mt || {}), Go = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Go || {}), Jp = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Jp || {});
function Qp(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ha)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var wu = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(wu || {});
function Zp(e, t = 0) {
  var n;
  return e === ((n = Pt(e)) == null ? void 0 : n.body) ? !1 : vt(t, { 0() {
    return e.matches(ha);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(ha))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var e1 = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(e1 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function kn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let t1 = ["textarea", "input"].join(",");
function n1(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, t1)) != null ? n : !1;
}
function xu(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null)
      return 0;
    let a = o.compareDocumentPosition(i);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Hn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  var i;
  let a = (i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? i : document, s = Array.isArray(e) ? n ? xu(e) : e : Qp(e);
  o.length > 0 && s.length > 1 && (s = s.filter((p) => !o.includes(p))), r = r ?? a.activeElement;
  let l = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, s.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, s.indexOf(r)) + 1;
    if (t & 8)
      return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, f = 0, d = s.length, m;
  do {
    if (f >= d || f + d <= 0)
      return 0;
    let p = c + f;
    if (t & 16)
      p = (p + d) % d;
    else {
      if (p < 0)
        return 3;
      if (p >= d)
        return 1;
    }
    m = s[p], m == null || m.focus(u), f += l;
  } while (m !== a.activeElement);
  return t & 6 && n1(m) && m.select(), 2;
}
function Al(e, t, n) {
  Jr.isServer || st((r) => {
    document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
  });
}
function Eu(e, t, n) {
  Jr.isServer || st((r) => {
    window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
  });
}
function r1(e, t, n = F(() => !0)) {
  function r(i, a) {
    if (!n.value || i.defaultPrevented)
      return;
    let s = a(i);
    if (s === null || !s.getRootNode().contains(s))
      return;
    let l = function c(u) {
      return typeof u == "function" ? c(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let c of l) {
      if (c === null)
        continue;
      let u = c instanceof HTMLElement ? c : he(c);
      if (u != null && u.contains(s) || i.composed && i.composedPath().includes(u))
        return;
    }
    return !Zp(s, wu.Loose) && s.tabIndex !== -1 && i.preventDefault(), t(i, s);
  }
  let o = re(null);
  Al("mousedown", (i) => {
    var a, s;
    n.value && (o.value = ((s = (a = i.composedPath) == null ? void 0 : a.call(i)) == null ? void 0 : s[0]) || i.target);
  }, !0), Al("click", (i) => {
    o.value && (r(i, () => o.value), o.value = null);
  }, !0), Eu("blur", (i) => r(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Vr = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Vr || {});
let Yo = de({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: r, ...o } = e, i = { "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return We({ ourProps: i, theirProps: o, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function ku(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e))
    Ou(n, Su(t, r), o);
  return n;
}
function Su(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ou(e, t, n) {
  if (Array.isArray(n))
    for (let [r, o] of n.entries())
      Ou(e, Su(t, r.toString()), o);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : ku(n, t, e);
}
function o1(e) {
  var t;
  let n = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (n) {
    for (let r of n.elements)
      if (r.tagName === "INPUT" && r.type === "submit" || r.tagName === "BUTTON" && r.type === "submit" || r.nodeName === "INPUT" && r.type === "image") {
        r.click();
        return;
      }
  }
}
function i1(e, t, n) {
  let r = re(n == null ? void 0 : n.value), o = F(() => e.value !== void 0);
  return [F(() => o.value ? e.value : r.value), function(i) {
    return o.value || (r.value = i), t == null ? void 0 : t(i);
  }];
}
function a1() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function hi() {
  let e = [], t = { addEventListener(n, r, o, i) {
    return n.addEventListener(r, o, i), t.add(() => n.removeEventListener(r, o, i));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    t.add(() => clearTimeout(r));
  }, style(n, r, o) {
    let i = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: i });
    });
  }, group(n) {
    let r = hi();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0)
        for (let o of e.splice(r, 1))
          o();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
var vr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(vr || {});
function s1() {
  let e = re(0);
  return Eu("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Au(e, t, n, r) {
  Jr.isServer || st((o) => {
    e = e ?? window, e.addEventListener(t, n, r), o(() => e.removeEventListener(t, n, r));
  });
}
function Nu(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function l1(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Iu(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let r = he(n);
    r instanceof HTMLElement && t.add(r);
  }
  return t;
}
var Cu = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Cu || {});
let fr = Object.assign(de({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: re(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = re(null);
  r({ el: o, $el: o });
  let i = F(() => Pt(o)), a = re(!1);
  Le(() => a.value = !0), Ze(() => a.value = !1), u1({ ownerDocument: i }, F(() => a.value && !!(e.features & 16)));
  let s = d1({ ownerDocument: i, container: o, initialFocus: F(() => e.initialFocus) }, F(() => a.value && !!(e.features & 2)));
  f1({ ownerDocument: i, container: o, containers: e.containers, previousActiveElement: s }, F(() => a.value && !!(e.features & 8)));
  let l = s1();
  function c(m) {
    let p = he(o);
    p && ((h) => h())(() => {
      vt(l.value, { [vr.Forwards]: () => {
        Hn(p, mt.First, { skipElements: [m.relatedTarget] });
      }, [vr.Backwards]: () => {
        Hn(p, mt.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let u = re(!1);
  function f(m) {
    m.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function d(m) {
    if (!a.value)
      return;
    let p = Iu(e.containers);
    he(o) instanceof HTMLElement && p.add(he(o));
    let h = m.relatedTarget;
    h instanceof HTMLElement && h.dataset.headlessuiFocusGuard !== "true" && (Tu(p, h) || (u.value ? Hn(he(o), vt(l.value, { [vr.Forwards]: () => mt.Next, [vr.Backwards]: () => mt.Previous }) | mt.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && kn(m.target)));
  }
  return () => {
    let m = {}, p = { ref: o, onKeydown: f, onFocusout: d }, { features: h, initialFocus: _, containers: y, ...v } = e;
    return He(Me, [!!(h & 4) && He(Yo, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: Vr.Focusable }), We({ ourProps: p, theirProps: { ...t, ...v }, slot: m, attrs: t, slots: n, name: "FocusTrap" }), !!(h & 4) && He(Yo, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: Vr.Focusable })]);
  };
} }), { features: Cu }), vn = [];
l1(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && vn[0] !== t.target && (vn.unshift(t.target), vn = vn.filter((n) => n != null && n.isConnected), vn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function c1(e) {
  let t = re(vn.slice());
  return bt([e], ([n], [r]) => {
    r === !0 && n === !1 ? Nu(() => {
      t.value.splice(0);
    }) : r === !1 && n === !0 && (t.value = vn.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((r) => r != null && r.isConnected)) != null ? n : null;
  };
}
function u1({ ownerDocument: e }, t) {
  let n = c1(t);
  Le(() => {
    st(() => {
      var r, o;
      t.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((o = e.value) == null ? void 0 : o.body) && kn(n());
    }, { flush: "post" });
  }), Ze(() => {
    t.value && kn(n());
  });
}
function d1({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = re(null), i = re(!1);
  return Le(() => i.value = !0), Ze(() => i.value = !1), Le(() => {
    bt([t, n, r], (a, s) => {
      if (a.every((c, u) => (s == null ? void 0 : s[u]) === c) || !r.value)
        return;
      let l = he(t);
      l && Nu(() => {
        var c, u;
        if (!i.value)
          return;
        let f = he(n), d = (c = e.value) == null ? void 0 : c.activeElement;
        if (f) {
          if (f === d) {
            o.value = d;
            return;
          }
        } else if (l.contains(d)) {
          o.value = d;
          return;
        }
        f ? kn(f) : Hn(l, mt.First | mt.NoScroll) === Go.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function f1({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, o) {
  var i;
  Au((i = e.value) == null ? void 0 : i.defaultView, "focus", (a) => {
    if (!o.value)
      return;
    let s = Iu(n);
    he(t) instanceof HTMLElement && s.add(he(t));
    let l = r.value;
    if (!l)
      return;
    let c = a.target;
    c && c instanceof HTMLElement ? Tu(s, c) ? (r.value = c, kn(c)) : (a.preventDefault(), a.stopPropagation(), kn(l)) : kn(r.value);
  }, !0);
}
function Tu(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let Gi = /* @__PURE__ */ new Map(), mr = /* @__PURE__ */ new Map();
function Nl(e, t = re(!0)) {
  st((n) => {
    var r;
    if (!t.value)
      return;
    let o = he(e);
    if (!o)
      return;
    n(function() {
      var a;
      if (!o)
        return;
      let s = (a = mr.get(o)) != null ? a : 1;
      if (s === 1 ? mr.delete(o) : mr.set(o, s - 1), s !== 1)
        return;
      let l = Gi.get(o);
      l && (l["aria-hidden"] === null ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", l["aria-hidden"]), o.inert = l.inert, Gi.delete(o));
    });
    let i = (r = mr.get(o)) != null ? r : 0;
    mr.set(o, i + 1), i === 0 && (Gi.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), o.setAttribute("aria-hidden", "true"), o.inert = !0);
  });
}
let Pu = Symbol("ForcePortalRootContext");
function m1() {
  return Ve(Pu, !1);
}
let Il = de({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return rt(Pu, e.force), () => {
    let { force: r, ...o } = e;
    return We({ theirProps: o, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function p1(e) {
  let t = Pt(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let r = t.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(r);
}
let b1 = de({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let r = re(null), o = F(() => Pt(r)), i = m1(), a = Ve(Mu, null), s = re(i === !0 || a == null ? p1(r.value) : a.resolveTarget());
  st(() => {
    i || a != null && (s.value = a.resolveTarget());
  });
  let l = Ve(va, null);
  return Le(() => {
    let c = he(r);
    c && l && Ze(l.register(c));
  }), Ze(() => {
    var c, u;
    let f = (c = o.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    f && s.value === f && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let c = { ref: r, "data-headlessui-portal": "" };
    return He(Xm, { to: s.value }, We({ ourProps: c, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), va = Symbol("PortalParentContext");
function h1() {
  let e = Ve(va, null), t = re([]);
  function n(i) {
    return t.value.push(i), e && e.register(i), () => r(i);
  }
  function r(i) {
    let a = t.value.indexOf(i);
    a !== -1 && t.value.splice(a, 1), e && e.unregister(i);
  }
  let o = { register: n, unregister: r, portals: t };
  return [t, de({ name: "PortalWrapper", setup(i, { slots: a }) {
    return rt(va, o), () => {
      var s;
      return (s = a.default) == null ? void 0 : s.call(a);
    };
  } })];
}
let Mu = Symbol("PortalGroupContext"), v1 = de({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let r = ir({ resolveTarget() {
    return e.target;
  } });
  return rt(Mu, r), () => {
    let { target: o, ...i } = e;
    return We({ theirProps: i, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), Ru = Symbol("StackContext");
var ga = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ga || {});
function g1() {
  return Ve(Ru, () => {
  });
}
function y1({ type: e, enabled: t, element: n, onUpdate: r }) {
  let o = g1();
  function i(...a) {
    r == null || r(...a), o(...a);
  }
  Le(() => {
    bt(t, (a, s) => {
      a ? i(0, e, n) : s === !0 && i(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), Ze(() => {
    t.value && i(1, e, n);
  }), rt(Ru, i);
}
let Du = Symbol("DescriptionContext");
function _1() {
  let e = Ve(Du, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function ls({ slot: e = re({}), name: t = "Description", props: n = {} } = {}) {
  let r = re([]);
  function o(i) {
    return r.value.push(i), () => {
      let a = r.value.indexOf(i);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return rt(Du, { register: o, slot: e, name: t, props: n }), F(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let zu = de({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${St()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = _1();
  return Le(() => Ze(r.register(e.id))), () => {
    let { name: o = "Description", slot: i = re({}), props: a = {} } = r, { id: s, ...l } = e, c = { ...Object.entries(a).reduce((u, [f, d]) => Object.assign(u, { [f]: Ja(d) }), {}), id: s };
    return We({ ourProps: c, theirProps: l, slot: i.value, attrs: t, slots: n, name: o });
  };
} });
function w1(e) {
  let t = ia(e.getSnapshot());
  return Ze(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function x1(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...i) {
    let a = t[o].call(n, ...i);
    a && (n = a, r.forEach((s) => s()));
  } };
}
function E1() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement;
    e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = r.clientWidth - r.offsetWidth, i = e - o;
    n.style(r, "paddingRight", `${i}px`);
  } };
}
function k1() {
  if (!a1())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: n, meta: r }) {
    function o(a) {
      return r.containers.flatMap((s) => s()).some((s) => s.contains(a));
    }
    n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let i = null;
    n.addEventListener(t, "click", (a) => {
      if (a.target instanceof HTMLElement)
        try {
          let s = a.target.closest("a");
          if (!s)
            return;
          let { hash: l } = new URL(s.href), c = t.querySelector(l);
          c && !o(c) && (i = c);
        } catch {
        }
    }, !0), n.addEventListener(t, "touchmove", (a) => {
      a.target instanceof HTMLElement && !o(a.target) && a.preventDefault();
    }, { passive: !1 }), n.add(() => {
      window.scrollTo(0, window.pageYOffset + e), i && i.isConnected && (i.scrollIntoView({ block: "nearest" }), i = null);
    });
  } };
}
function S1() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function O1(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let yn = x1(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: hi(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: O1(n) }, o = [k1(), E1(), S1()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
yn.subscribe(() => {
  let e = yn.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && yn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && yn.dispatch("TEARDOWN", n);
  }
});
function A1(e, t, n) {
  let r = w1(yn), o = F(() => {
    let i = e.value ? r.value.get(e.value) : void 0;
    return i ? i.count > 0 : !1;
  });
  return bt([e, t], ([i, a], [s], l) => {
    if (!i || !a)
      return;
    yn.dispatch("PUSH", i, n);
    let c = !1;
    l(() => {
      c || (yn.dispatch("POP", s ?? i, n), c = !0);
    });
  }, { immediate: !0 }), o;
}
function N1({ defaultContainers: e = [], portals: t } = {}) {
  let n = re(null), r = Pt(n);
  function o() {
    var i;
    let a = [];
    for (let s of e)
      s !== null && (s instanceof HTMLElement ? a.push(s) : "value" in s && s.value instanceof HTMLElement && a.push(s.value));
    if (t != null && t.value)
      for (let s of t.value)
        a.push(s);
    for (let s of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : [])
      s !== document.body && s !== document.head && s instanceof HTMLElement && s.id !== "headlessui-portal-root" && (s.contains(he(n)) || a.some((l) => s.contains(l)) || a.push(s));
    return a;
  }
  return { resolveContainers: o, contains(i) {
    return o().some((a) => a.contains(i));
  }, mainTreeNodeRef: n, MainTreeNode() {
    return He(Yo, { features: Vr.Hidden, ref: n });
  } };
}
var I1 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(I1 || {});
let ya = Symbol("DialogContext");
function vi(e) {
  let t = Ve(ya, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, vi), n;
  }
  return t;
}
let mo = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", C1 = de({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: mo }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${St()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  var i;
  let a = re(!1);
  Le(() => {
    a.value = !0;
  });
  let s = re(0), l = bi(), c = F(() => e.open === mo && l !== null ? (l.value & Xe.Open) === Xe.Open : e.open), u = re(null), f = F(() => Pt(u));
  if (o({ el: u, $el: u }), !(e.open !== mo || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof c.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === mo ? void 0 : e.open}`);
  let d = F(() => a.value && c.value ? 0 : 1), m = F(() => d.value === 0), p = F(() => s.value > 1), h = Ve(ya, null) !== null, [_, y] = h1(), { resolveContainers: v, mainTreeNodeRef: w, MainTreeNode: x } = N1({ portals: _, defaultContainers: [F(() => {
    var j;
    return (j = X.panelRef.value) != null ? j : u.value;
  })] }), I = F(() => p.value ? "parent" : "leaf"), $ = F(() => l !== null ? (l.value & Xe.Closing) === Xe.Closing : !1), R = F(() => h || $.value ? !1 : m.value), C = F(() => {
    var j, G, me;
    return (me = Array.from((G = (j = f.value) == null ? void 0 : j.querySelectorAll("body > *")) != null ? G : []).find((Ue) => Ue.id === "headlessui-portal-root" ? !1 : Ue.contains(he(w)) && Ue instanceof HTMLElement)) != null ? me : null;
  });
  Nl(C, R);
  let D = F(() => p.value ? !0 : m.value), W = F(() => {
    var j, G, me;
    return (me = Array.from((G = (j = f.value) == null ? void 0 : j.querySelectorAll("[data-headlessui-portal]")) != null ? G : []).find((Ue) => Ue.contains(he(w)) && Ue instanceof HTMLElement)) != null ? me : null;
  });
  Nl(W, D), y1({ type: "Dialog", enabled: F(() => d.value === 0), element: u, onUpdate: (j, G) => {
    if (G === "Dialog")
      return vt(j, { [ga.Add]: () => s.value += 1, [ga.Remove]: () => s.value -= 1 });
  } });
  let V = ls({ name: "DialogDescription", slot: F(() => ({ open: c.value })) }), A = re(null), X = { titleId: A, panelRef: re(null), dialogState: d, setTitleId(j) {
    A.value !== j && (A.value = j);
  }, close() {
    t("close", !1);
  } };
  rt(ya, X);
  let ce = F(() => !(!m.value || p.value));
  r1(v, (j, G) => {
    X.close(), Uc(() => G == null ? void 0 : G.focus());
  }, ce);
  let Ce = F(() => !(p.value || d.value !== 0));
  Au((i = f.value) == null ? void 0 : i.defaultView, "keydown", (j) => {
    Ce.value && (j.defaultPrevented || j.key === ct.Escape && (j.preventDefault(), j.stopPropagation(), X.close()));
  });
  let J = F(() => !($.value || d.value !== 0 || h));
  return A1(f, J, (j) => {
    var G;
    return { containers: [...(G = j.containers) != null ? G : [], v] };
  }), st((j) => {
    if (d.value !== 0)
      return;
    let G = he(u);
    if (!G)
      return;
    let me = new ResizeObserver((Ue) => {
      for (let Te of Ue) {
        let Re = Te.target.getBoundingClientRect();
        Re.x === 0 && Re.y === 0 && Re.width === 0 && Re.height === 0 && X.close();
      }
    });
    me.observe(G), j(() => me.disconnect());
  }), () => {
    let { id: j, open: G, initialFocus: me, ...Ue } = e, Te = { ...n, ref: u, id: j, role: "dialog", "aria-modal": d.value === 0 ? !0 : void 0, "aria-labelledby": A.value, "aria-describedby": V.value }, Re = { open: d.value === 0 };
    return He(Il, { force: !0 }, () => [He(b1, () => He(v1, { target: u.value }, () => He(Il, { force: !1 }, () => He(fr, { initialFocus: me, containers: v, features: m.value ? vt(I.value, { parent: fr.features.RestoreFocus, leaf: fr.features.All & ~fr.features.FocusLock }) : fr.features.None }, () => He(y, {}, () => We({ ourProps: Te, theirProps: { ...Ue, ...n }, slot: Re, attrs: n, slots: r, visible: d.value === 0, features: Xn.RenderStrategy | Xn.Static, name: "Dialog" })))))), He(x)]);
  };
} }), T1 = de({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${St()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = vi("DialogOverlay");
  function o(i) {
    i.target === i.currentTarget && (i.preventDefault(), i.stopPropagation(), r.close());
  }
  return () => {
    let { id: i, ...a } = e;
    return We({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: a, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} }), P1 = de({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${St()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = vi("DialogPanel");
  r({ el: o.panelRef, $el: o.panelRef });
  function i(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...s } = e, l = { id: a, ref: o.panelRef, onClick: i };
    return We({ ourProps: l, theirProps: s, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} }), ln = de({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${St()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = vi("DialogTitle");
  return Le(() => {
    r.setTitleId(e.id), Ze(() => r.setTitleId(null));
  }), () => {
    let { id: o, ...i } = e;
    return We({ ourProps: { id: o }, theirProps: i, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} }), Lu = zu;
var M1 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(M1 || {});
let $u = Symbol("DisclosureContext");
function cs(e) {
  let t = Ve($u, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, cs), n;
  }
  return t;
}
let Fu = Symbol("DisclosurePanelContext");
function R1() {
  return Ve(Fu, null);
}
let D1 = de({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: n }) {
  let r = re(e.defaultOpen ? 0 : 1), o = re(null), i = re(null), a = { buttonId: re(null), panelId: re(null), disclosureState: r, panel: o, button: i, toggleDisclosure() {
    r.value = vt(r.value, { 0: 1, 1: 0 });
  }, closeDisclosure() {
    r.value !== 1 && (r.value = 1);
  }, close(s) {
    a.closeDisclosure();
    let l = (() => s ? s instanceof HTMLElement ? s : s.value instanceof HTMLElement ? he(s) : he(a.button) : he(a.button))();
    l == null || l.focus();
  } };
  return rt($u, a), _u(F(() => vt(r.value, { 0: Xe.Open, 1: Xe.Closed }))), () => {
    let { defaultOpen: s, ...l } = e, c = { open: r.value === 0, close: a.close };
    return We({ theirProps: l, ourProps: {}, slot: c, slots: t, attrs: n, name: "Disclosure" });
  };
} }), z1 = de({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${St()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = cs("DisclosureButton");
  Le(() => {
    o.buttonId.value = e.id;
  }), Ze(() => {
    o.buttonId.value = null;
  });
  let i = R1(), a = F(() => i === null ? !1 : i.value === o.panelId.value), s = re(null);
  r({ el: s, $el: s }), a.value || st(() => {
    o.button.value = s.value;
  });
  let l = Yp(F(() => ({ as: e.as, type: t.type })), s);
  function c() {
    var d;
    e.disabled || (a.value ? (o.toggleDisclosure(), (d = he(o.button)) == null || d.focus()) : o.toggleDisclosure());
  }
  function u(d) {
    var m;
    if (!e.disabled)
      if (a.value)
        switch (d.key) {
          case ct.Space:
          case ct.Enter:
            d.preventDefault(), d.stopPropagation(), o.toggleDisclosure(), (m = he(o.button)) == null || m.focus();
            break;
        }
      else
        switch (d.key) {
          case ct.Space:
          case ct.Enter:
            d.preventDefault(), d.stopPropagation(), o.toggleDisclosure();
            break;
        }
  }
  function f(d) {
    switch (d.key) {
      case ct.Space:
        d.preventDefault();
        break;
    }
  }
  return () => {
    let d = { open: o.disclosureState.value === 0 }, { id: m, ...p } = e, h = a.value ? { ref: s, type: l.value, onClick: c, onKeydown: u } : { id: m, ref: s, type: l.value, "aria-expanded": e.disabled ? void 0 : o.disclosureState.value === 0, "aria-controls": he(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: c, onKeydown: u, onKeyup: f };
    return We({ ourProps: h, theirProps: p, slot: d, attrs: t, slots: n, name: "DisclosureButton" });
  };
} }), L1 = de({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${St()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = cs("DisclosurePanel");
  Le(() => {
    o.panelId.value = e.id;
  }), Ze(() => {
    o.panelId.value = null;
  }), r({ el: o.panel, $el: o.panel }), rt(Fu, o.panelId);
  let i = bi(), a = F(() => i !== null ? (i.value & Xe.Open) === Xe.Open : o.disclosureState.value === 0);
  return () => {
    let s = { open: o.disclosureState.value === 0, close: o.close }, { id: l, ...c } = e, u = { id: l, ref: o.panel };
    return We({ ourProps: u, theirProps: c, slot: s, attrs: t, slots: n, features: Xn.RenderStrategy | Xn.Static, visible: a.value, name: "DisclosurePanel" });
  };
} }), Vu = Symbol("LabelContext");
function ju() {
  let e = Ve(Vu, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ju), t;
  }
  return e;
}
function Uu({ slot: e = {}, name: t = "Label", props: n = {} } = {}) {
  let r = re([]);
  function o(i) {
    return r.value.push(i), () => {
      let a = r.value.indexOf(i);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return rt(Vu, { register: o, slot: e, name: t, props: n }), F(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let $1 = de({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${St()}` } }, setup(e, { slots: t, attrs: n }) {
  let r = ju();
  return Le(() => Ze(r.register(e.id))), () => {
    let { name: o = "Label", slot: i = {}, props: a = {} } = r, { id: s, passive: l, ...c } = e, u = { ...Object.entries(a).reduce((f, [d, m]) => Object.assign(f, { [d]: Ja(m) }), {}), id: s };
    return l && (delete u.onClick, delete u.htmlFor, delete c.onClick), We({ ourProps: u, theirProps: c, slot: i, attrs: n, slots: t, name: o });
  };
} });
function F1(e, t) {
  return e === t;
}
let Hu = Symbol("RadioGroupContext");
function Bu(e) {
  let t = Ve(Hu, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Bu), n;
  }
  return t;
}
let Gu = de({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => F1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${St()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  let i = re(null), a = re([]), s = Uu({ name: "RadioGroupLabel" }), l = ls({ name: "RadioGroupDescription" });
  o({ el: i, $el: i });
  let [c, u] = i1(F(() => e.modelValue), (p) => t("update:modelValue", p), F(() => e.defaultValue)), f = { options: a, value: c, disabled: F(() => e.disabled), firstOption: F(() => a.value.find((p) => !p.propsRef.disabled)), containsCheckedOption: F(() => a.value.some((p) => f.compare(se(p.propsRef.value), se(e.modelValue)))), compare(p, h) {
    if (typeof e.by == "string") {
      let _ = e.by;
      return (p == null ? void 0 : p[_]) === (h == null ? void 0 : h[_]);
    }
    return e.by(p, h);
  }, change(p) {
    var h;
    if (e.disabled || f.compare(se(c.value), se(p)))
      return !1;
    let _ = (h = a.value.find((y) => f.compare(se(y.propsRef.value), se(p)))) == null ? void 0 : h.propsRef;
    return _ != null && _.disabled ? !1 : (u(p), !0);
  }, registerOption(p) {
    a.value.push(p), a.value = xu(a.value, (h) => h.element);
  }, unregisterOption(p) {
    let h = a.value.findIndex((_) => _.id === p);
    h !== -1 && a.value.splice(h, 1);
  } };
  rt(Hu, f), Xp({ container: F(() => he(i)), accept(p) {
    return p.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : p.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(p) {
    p.setAttribute("role", "none");
  } });
  function d(p) {
    if (!i.value || !i.value.contains(p.target))
      return;
    let h = a.value.filter((_) => _.propsRef.disabled === !1).map((_) => _.element);
    switch (p.key) {
      case ct.Enter:
        o1(p.currentTarget);
        break;
      case ct.ArrowLeft:
      case ct.ArrowUp:
        if (p.preventDefault(), p.stopPropagation(), Hn(h, mt.Previous | mt.WrapAround) === Go.Success) {
          let _ = a.value.find((y) => {
            var v;
            return y.element === ((v = Pt(i)) == null ? void 0 : v.activeElement);
          });
          _ && f.change(_.propsRef.value);
        }
        break;
      case ct.ArrowRight:
      case ct.ArrowDown:
        if (p.preventDefault(), p.stopPropagation(), Hn(h, mt.Next | mt.WrapAround) === Go.Success) {
          let _ = a.value.find((y) => {
            var v;
            return y.element === ((v = Pt(y.element)) == null ? void 0 : v.activeElement);
          });
          _ && f.change(_.propsRef.value);
        }
        break;
      case ct.Space:
        {
          p.preventDefault(), p.stopPropagation();
          let _ = a.value.find((y) => {
            var v;
            return y.element === ((v = Pt(y.element)) == null ? void 0 : v.activeElement);
          });
          _ && f.change(_.propsRef.value);
        }
        break;
    }
  }
  let m = F(() => {
    var p;
    return (p = he(i)) == null ? void 0 : p.closest("form");
  });
  return Le(() => {
    bt([m], () => {
      if (!m.value || e.defaultValue === void 0)
        return;
      function p() {
        f.change(e.defaultValue);
      }
      return m.value.addEventListener("reset", p), () => {
        var h;
        (h = m.value) == null || h.removeEventListener("reset", p);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: p, name: h, id: _, form: y, ...v } = e, w = { ref: i, id: _, role: "radiogroup", "aria-labelledby": s.value, "aria-describedby": l.value, onKeydown: d };
    return He(Me, [...h != null && c.value != null ? ku({ [h]: c.value }).map(([x, I]) => He(Yo, jp({ features: Vr.Hidden, key: x, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: y, name: x, value: I }))) : [], We({ ourProps: w, theirProps: { ...n, ...ss(v, ["modelValue", "defaultValue", "by"]) }, slot: {}, attrs: n, slots: r, name: "RadioGroup" })]);
  };
} });
var V1 = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(V1 || {});
let Yu = de({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${St()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = Bu("RadioGroupOption"), i = Uu({ name: "RadioGroupLabel" }), a = ls({ name: "RadioGroupDescription" }), s = re(null), l = F(() => ({ value: e.value, disabled: e.disabled })), c = re(1);
  r({ el: s, $el: s });
  let u = F(() => he(s));
  Le(() => o.registerOption({ id: e.id, element: u, propsRef: l })), Ze(() => o.unregisterOption(e.id));
  let f = F(() => {
    var v;
    return ((v = o.firstOption.value) == null ? void 0 : v.id) === e.id;
  }), d = F(() => o.disabled.value || e.disabled), m = F(() => o.compare(se(o.value.value), se(e.value))), p = F(() => d.value ? -1 : m.value || !o.containsCheckedOption.value && f.value ? 0 : -1);
  function h() {
    var v;
    o.change(e.value) && (c.value |= 2, (v = he(s)) == null || v.focus());
  }
  function _() {
    c.value |= 2;
  }
  function y() {
    c.value &= -3;
  }
  return () => {
    let { id: v, value: w, disabled: x, ...I } = e, $ = { checked: m.value, disabled: d.value, active: !!(c.value & 2) }, R = { id: v, ref: s, role: "radio", "aria-checked": m.value ? "true" : "false", "aria-labelledby": i.value, "aria-describedby": a.value, "aria-disabled": d.value ? !0 : void 0, tabIndex: p.value, onClick: d.value ? void 0 : h, onFocus: d.value ? void 0 : _, onBlur: d.value ? void 0 : y };
    return We({ ourProps: R, theirProps: I, slot: $, attrs: t, slots: n, name: "RadioGroupOption" });
  };
} }), Wu = $1, qu = zu;
function j1(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Yi(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function po(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var _a = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(_a || {});
function U1(e, t) {
  let n = hi();
  if (!e)
    return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e), [i, a] = [r, o].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, u) => u - c);
    return l;
  });
  return i !== 0 ? n.setTimeout(() => t("finished"), i + a) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function Cl(e, t, n, r, o, i) {
  let a = hi(), s = i !== void 0 ? j1(i) : () => {
  };
  return po(e, ...o), Yi(e, ...t, ...n), a.nextFrame(() => {
    po(e, ...n), Yi(e, ...r), a.add(U1(e, (l) => (po(e, ...r, ...t), Yi(e, ...o), s(l))));
  }), a.add(() => po(e, ...t, ...n, ...r, ...o)), a.add(() => s("cancelled")), a.dispose;
}
function mn(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let us = Symbol("TransitionContext");
var H1 = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(H1 || {});
function B1() {
  return Ve(us, null) !== null;
}
function G1() {
  let e = Ve(us, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Y1() {
  let e = Ve(ds, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let ds = Symbol("NestingContext");
function gi(e) {
  return "children" in e ? gi(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ku(e) {
  let t = re([]), n = re(!1);
  Le(() => n.value = !0), Ze(() => n.value = !1);
  function r(i, a = Zt.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === i);
    s !== -1 && (vt(a, { [Zt.Unmount]() {
      t.value.splice(s, 1);
    }, [Zt.Hidden]() {
      t.value[s].state = "hidden";
    } }), !gi(t) && n.value && (e == null || e()));
  }
  function o(i) {
    let a = t.value.find(({ id: s }) => s === i);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: i, state: "visible" }), () => r(i, Zt.Unmount);
  }
  return { children: t, register: o, unregister: r };
}
let Xu = Xn.RenderStrategy, Ju = de({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  let i = re(0);
  function a() {
    i.value |= Xe.Opening, t("beforeEnter");
  }
  function s() {
    i.value &= ~Xe.Opening, t("afterEnter");
  }
  function l() {
    i.value |= Xe.Closing, t("beforeLeave");
  }
  function c() {
    i.value &= ~Xe.Closing, t("afterLeave");
  }
  if (!B1() && Gp())
    return () => He(Qu, { ...e, onBeforeEnter: a, onAfterEnter: s, onBeforeLeave: l, onAfterLeave: c }, r);
  let u = re(null), f = F(() => e.unmount ? Zt.Unmount : Zt.Hidden);
  o({ el: u, $el: u });
  let { show: d, appear: m } = G1(), { register: p, unregister: h } = Y1(), _ = re(d.value ? "visible" : "hidden"), y = { value: !0 }, v = St(), w = { value: !1 }, x = Ku(() => {
    !w.value && _.value !== "hidden" && (_.value = "hidden", h(v), c());
  });
  Le(() => {
    let X = p(v);
    Ze(X);
  }), st(() => {
    if (f.value === Zt.Hidden && v) {
      if (d.value && _.value !== "visible") {
        _.value = "visible";
        return;
      }
      vt(_.value, { hidden: () => h(v), visible: () => p(v) });
    }
  });
  let I = mn(e.enter), $ = mn(e.enterFrom), R = mn(e.enterTo), C = mn(e.entered), D = mn(e.leave), W = mn(e.leaveFrom), V = mn(e.leaveTo);
  Le(() => {
    st(() => {
      if (_.value === "visible") {
        let X = he(u);
        if (X instanceof Comment && X.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function A(X) {
    let ce = y.value && !m.value, Ce = he(u);
    !Ce || !(Ce instanceof HTMLElement) || ce || (w.value = !0, d.value && a(), d.value || l(), X(d.value ? Cl(Ce, I, $, R, C, (J) => {
      w.value = !1, J === _a.Finished && s();
    }) : Cl(Ce, D, W, V, C, (J) => {
      w.value = !1, J === _a.Finished && (gi(x) || (_.value = "hidden", h(v), c()));
    })));
  }
  return Le(() => {
    bt([d], (X, ce, Ce) => {
      A(Ce), y.value = !1;
    }, { immediate: !0 });
  }), rt(ds, x), _u(F(() => vt(_.value, { visible: Xe.Open, hidden: Xe.Closed }) | i.value)), () => {
    let { appear: X, show: ce, enter: Ce, enterFrom: J, enterTo: j, entered: G, leave: me, leaveFrom: Ue, leaveTo: Te, ...Re } = e, Nn = { ref: u }, tt = { ...Re, ...m.value && d.value && Jr.isServer ? { class: ge([n.class, Re.class, ...I, ...$]) } : {} };
    return We({ theirProps: tt, ourProps: Nn, slot: {}, slots: r, attrs: n, features: Xu, visible: _.value === "visible", name: "TransitionChild" });
  };
} }), W1 = Ju, Qu = de({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r }) {
  let o = bi(), i = F(() => e.show === null && o !== null ? (o.value & Xe.Open) === Xe.Open : e.show);
  st(() => {
    if (![!0, !1].includes(i.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = re(i.value ? "visible" : "hidden"), s = Ku(() => {
    a.value = "hidden";
  }), l = re(!0), c = { show: i, appear: F(() => e.appear || !l.value) };
  return Le(() => {
    st(() => {
      l.value = !1, i.value ? a.value = "visible" : gi(s) || (a.value = "hidden");
    });
  }), rt(ds, s), rt(us, c), () => {
    let u = ss(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return We({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [He(W1, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...f, ...u }, r.default)] }, attrs: {}, features: Xu, visible: a.value === "visible", name: "Transition" });
  };
} });
function Tl() {
  const { state: e, send: t } = ut();
  function n() {
    const o = new URLSearchParams(window.location.search), i = {};
    o.forEach((s, l) => {
      i[l] = s;
    });
    const a = i.affiliate || i.aff;
    return a && (i.affiliate = a), i;
  }
  const r = n();
  document.querySelectorAll("button[data-sell-store][data-sell-product]").forEach((o) => {
    r.affiliate && !o.hasAttribute("data-sell-affiliate") && o.setAttribute("data-sell-affiliate", r.affiliate), o.addEventListener("click", () => {
      var h, _, y, v, w, x, I, $;
      if (!e.value.matches("closed"))
        return;
      const i = o.attributes["data-sell-store"].value, a = o.attributes["data-sell-product"].value, s = (h = o.attributes["data-sell-variant"]) == null ? void 0 : h.value, l = (_ = o.attributes["data-sell-coupon"]) == null ? void 0 : _.value, c = (y = o.attributes["data-sell-extra"]) == null ? void 0 : y.value, u = (v = o.attributes["data-sell-quantity"]) == null ? void 0 : v.value, f = (w = o.attributes["data-sell-email"]) == null ? void 0 : w.value, d = ((x = o.attributes["data-sell-darkmode"]) == null ? void 0 : x.value) === "true", m = (I = o.attributes["data-sell-theme"]) == null ? void 0 : I.value, p = ($ = o.attributes["data-sell-affiliate"]) == null ? void 0 : $.value;
      t({
        type: "OPEN",
        store_id: i,
        product_id: a,
        variant_id: s,
        coupon: l,
        extra: c,
        quantity: u,
        email: f,
        affiliate: p,
        customization: {
          darkMode: d,
          theme: m
        }
      });
    });
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var T = function() {
  return T = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, T.apply(this, arguments);
};
function fs(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ue(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function pe(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), o, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}
function Oe(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ye;
(function(e) {
  e.Start = "xstate.start", e.Stop = "xstate.stop", e.Raise = "xstate.raise", e.Send = "xstate.send", e.Cancel = "xstate.cancel", e.NullEvent = "", e.Assign = "xstate.assign", e.After = "xstate.after", e.DoneState = "done.state", e.DoneInvoke = "done.invoke", e.Log = "xstate.log", e.Init = "xstate.init", e.Invoke = "xstate.invoke", e.ErrorExecution = "error.execution", e.ErrorCommunication = "error.communication", e.ErrorPlatform = "error.platform", e.ErrorCustom = "xstate.error", e.Update = "xstate.update", e.Pure = "xstate.pure", e.Choose = "xstate.choose";
})(ye || (ye = {}));
var rn;
(function(e) {
  e.Parent = "#_parent", e.Internal = "#_internal";
})(rn || (rn = {}));
var Wo = ye.Start, yi = ye.Stop, ar = ye.Raise, Qr = ye.Send, ms = ye.Cancel, Zu = ye.NullEvent, _i = ye.Assign, q1 = ye.After, K1 = ye.DoneState, wi = ye.Log, ed = ye.Init, qo = ye.Invoke, X1 = ye.ErrorExecution, wa = ye.ErrorPlatform, ps = ye.ErrorCustom, xi = ye.Update, td = ye.Choose, nd = ye.Pure;
const J1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  after: q1,
  assign: _i,
  cancel: ms,
  choose: td,
  doneState: K1,
  error: ps,
  errorExecution: X1,
  errorPlatform: wa,
  init: ed,
  invoke: qo,
  log: wi,
  nullEvent: Zu,
  pure: nd,
  raise: ar,
  send: Qr,
  start: Wo,
  stop: yi,
  update: xi
}, Symbol.toStringTag, { value: "Module" }));
var rd = ".", Pl = {}, xa = "xstate.guard", Q1 = "", bo;
function bs(e, t, n) {
  n === void 0 && (n = rd);
  var r = Nr(e, n), o = Nr(t, n);
  return ve(o) ? ve(r) ? o === r : !1 : ve(r) ? r in o : Object.keys(r).every(function(i) {
    return i in o ? bs(r[i], o[i]) : !1;
  });
}
function od(e) {
  try {
    return ve(e) || typeof e == "number" ? "".concat(e) : e.type;
  } catch {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
function Ea(e, t) {
  try {
    return sr(e) ? e : e.toString().split(t);
  } catch {
    throw new Error("'".concat(e, "' is not a valid state path."));
  }
}
function Z1(e) {
  return typeof e == "object" && "value" in e && "context" in e && "event" in e && "_event" in e;
}
function Nr(e, t) {
  if (Z1(e))
    return e.value;
  if (sr(e))
    return Ko(e);
  if (typeof e != "string")
    return e;
  var n = Ea(e, t);
  return Ko(n);
}
function Ko(e) {
  if (e.length === 1)
    return e[0];
  for (var t = {}, n = t, r = 0; r < e.length - 1; r++)
    r === e.length - 2 ? n[e[r]] = e[r + 1] : (n[e[r]] = {}, n = n[e[r]]);
  return t;
}
function gr(e, t) {
  for (var n = {}, r = Object.keys(e), o = 0; o < r.length; o++) {
    var i = r[o];
    n[i] = t(e[i], i, e, o);
  }
  return n;
}
function Ml(e, t, n) {
  var r, o, i = {};
  try {
    for (var a = ue(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var l = s.value, c = e[l];
      n(c) && (i[l] = t(c, l, e));
    }
  } catch (u) {
    r = {
      error: u
    };
  } finally {
    try {
      s && !s.done && (o = a.return) && o.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return i;
}
var eb = function(e) {
  return function(t) {
    var n, r, o = t;
    try {
      for (var i = ue(e), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        o = o[s];
      }
    } catch (l) {
      n = {
        error: l
      };
    } finally {
      try {
        a && !a.done && (r = i.return) && r.call(i);
      } finally {
        if (n)
          throw n.error;
      }
    }
    return o;
  };
};
function tb(e, t) {
  return function(n) {
    var r, o, i = n;
    try {
      for (var a = ue(e), s = a.next(); !s.done; s = a.next()) {
        var l = s.value;
        i = i[t][l];
      }
    } catch (c) {
      r = {
        error: c
      };
    } finally {
      try {
        s && !s.done && (o = a.return) && o.call(a);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return i;
  };
}
function To(e) {
  if (!e)
    return [[]];
  if (ve(e))
    return [[e]];
  var t = Pe(Object.keys(e).map(function(n) {
    var r = e[n];
    return typeof r != "string" && (!r || !Object.keys(r).length) ? [[n]] : To(e[n]).map(function(o) {
      return [n].concat(o);
    });
  }));
  return t;
}
function Pe(e) {
  var t;
  return (t = []).concat.apply(t, Oe([], pe(e), !1));
}
function id(e) {
  return sr(e) ? e : [e];
}
function _t(e) {
  return e === void 0 ? [] : id(e);
}
function Xo(e, t, n) {
  var r, o;
  if (be(e))
    return e(t, n.data);
  var i = {};
  try {
    for (var a = ue(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var l = s.value, c = e[l];
      be(c) ? i[l] = c(t, n.data) : i[l] = c;
    }
  } catch (u) {
    r = {
      error: u
    };
  } finally {
    try {
      s && !s.done && (o = a.return) && o.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return i;
}
function nb(e) {
  return /^(done|error)\./.test(e);
}
function Rl(e) {
  return !!(e instanceof Promise || e !== null && (be(e) || typeof e == "object") && be(e.then));
}
function rb(e) {
  return e !== null && typeof e == "object" && "transition" in e && typeof e.transition == "function";
}
function ob(e, t) {
  var n, r, o = pe([[], []], 2), i = o[0], a = o[1];
  try {
    for (var s = ue(e), l = s.next(); !l.done; l = s.next()) {
      var c = l.value;
      t(c) ? i.push(c) : a.push(c);
    }
  } catch (u) {
    n = {
      error: u
    };
  } finally {
    try {
      l && !l.done && (r = s.return) && r.call(s);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return [i, a];
}
function ad(e, t) {
  return gr(e.states, function(n, r) {
    if (n) {
      var o = (ve(t) ? void 0 : t[r]) || (n ? n.current : void 0);
      if (o)
        return {
          current: o,
          states: ad(n, o)
        };
    }
  });
}
function ib(e, t) {
  return {
    current: t,
    states: ad(e, t)
  };
}
function Dl(e, t, n, r) {
  var o = e && n.reduce(function(i, a) {
    var s, l, c = a.assignment, u = {
      state: r,
      action: a,
      _event: t
    }, f = {};
    if (be(c))
      f = c(i, t.data, u);
    else
      try {
        for (var d = ue(Object.keys(c)), m = d.next(); !m.done; m = d.next()) {
          var p = m.value, h = c[p];
          f[p] = be(h) ? h(i, t.data, u) : h;
        }
      } catch (_) {
        s = {
          error: _
        };
      } finally {
        try {
          m && !m.done && (l = d.return) && l.call(d);
        } finally {
          if (s)
            throw s.error;
        }
      }
    return Object.assign({}, i, f);
  }, e);
  return o;
}
var ab = function() {
};
function sr(e) {
  return Array.isArray(e);
}
function be(e) {
  return typeof e == "function";
}
function ve(e) {
  return typeof e == "string";
}
function sd(e, t) {
  if (e)
    return ve(e) ? {
      type: xa,
      name: e,
      predicate: t ? t[e] : void 0
    } : be(e) ? {
      type: xa,
      name: e.name,
      predicate: e
    } : e;
}
function sb(e) {
  try {
    return "subscribe" in e && be(e.subscribe);
  } catch {
    return !1;
  }
}
var Qt = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
bo = {}, bo[Qt] = function() {
  return this;
}, bo[Symbol.observable] = function() {
  return this;
};
function Jn(e) {
  return !!e && "__xstatenode" in e;
}
function lb(e) {
  return !!e && typeof e.send == "function";
}
function Ei(e, t) {
  return ve(e) || typeof e == "number" ? T({
    type: e
  }, t) : e;
}
function Ke(e, t) {
  if (!ve(e) && "$$type" in e && e.$$type === "scxml")
    return e;
  var n = Ei(e);
  return T({
    name: n.type,
    data: n,
    $$type: "scxml",
    type: "external"
  }, t);
}
function Pn(e, t) {
  var n = id(t).map(function(r) {
    return typeof r > "u" || typeof r == "string" || Jn(r) ? {
      target: r,
      event: e
    } : T(T({}, r), {
      event: e
    });
  });
  return n;
}
function cb(e) {
  if (!(e === void 0 || e === Q1))
    return _t(e);
}
function ld(e, t, n, r, o) {
  var i = e.options.guards, a = {
    state: o,
    cond: t,
    _event: r
  };
  if (t.type === xa)
    return ((i == null ? void 0 : i[t.name]) || t.predicate)(n, r.data, a);
  var s = i == null ? void 0 : i[t.type];
  if (!s)
    throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(e.id, "'."));
  return s(n, r.data, a);
}
function cd(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Po(e, t, n) {
  var r = function() {
  }, o = typeof e == "object", i = o ? e : null;
  return {
    next: ((o ? e.next : e) || r).bind(i),
    error: ((o ? e.error : t) || r).bind(i),
    complete: ((o ? e.complete : n) || r).bind(i)
  };
}
function ho(e, t) {
  return "".concat(e, ":invocation[").concat(t, "]");
}
function ka(e) {
  return (e.type === ar || e.type === Qr && e.to === rn.Internal) && typeof e.delay != "number";
}
var Sn = /* @__PURE__ */ Ke({
  type: ed
});
function Jo(e, t) {
  return t && t[e] || void 0;
}
function Qn(e, t) {
  var n;
  if (ve(e) || typeof e == "number") {
    var r = Jo(e, t);
    be(r) ? n = {
      type: e,
      exec: r
    } : r ? n = r : n = {
      type: e,
      exec: void 0
    };
  } else if (be(e))
    n = {
      // Convert action to string if unnamed
      type: e.name || e.toString(),
      exec: e
    };
  else {
    var r = Jo(e.type, t);
    if (be(r))
      n = T(T({}, e), {
        exec: r
      });
    else if (r) {
      var o = r.type || e.type;
      n = T(T(T({}, r), e), {
        type: o
      });
    } else
      n = e;
  }
  return n;
}
var zt = function(e, t) {
  if (!e)
    return [];
  var n = sr(e) ? e : [e];
  return n.map(function(r) {
    return Qn(r, t);
  });
};
function ki(e) {
  var t = Qn(e);
  return T(T({
    id: ve(e) ? e : t.id
  }, t), {
    type: t.type
  });
}
function ud(e, t) {
  return {
    type: ar,
    event: typeof e == "function" ? e : Ei(e),
    delay: t ? t.delay : void 0,
    id: t == null ? void 0 : t.id
  };
}
function dd(e, t, n, r) {
  var o = {
    _event: n
  }, i = Ke(be(e.event) ? e.event(t, n.data, o) : e.event), a;
  if (ve(e.delay)) {
    var s = r && r[e.delay];
    a = be(s) ? s(t, n.data, o) : s;
  } else
    a = be(e.delay) ? e.delay(t, n.data, o) : e.delay;
  return T(T({}, e), {
    type: ar,
    _event: i,
    delay: a
  });
}
function lr(e, t) {
  return {
    to: t ? t.to : void 0,
    type: Qr,
    event: be(e) ? e : Ei(e),
    delay: t ? t.delay : void 0,
    // TODO: don't auto-generate IDs here like that
    // there is too big chance of the ID collision
    id: t && t.id !== void 0 ? t.id : be(e) ? e.name : od(e)
  };
}
function fd(e, t, n, r) {
  var o = {
    _event: n
  }, i = Ke(be(e.event) ? e.event(t, n.data, o) : e.event), a;
  if (ve(e.delay)) {
    var s = r && r[e.delay];
    a = be(s) ? s(t, n.data, o) : s;
  } else
    a = be(e.delay) ? e.delay(t, n.data, o) : e.delay;
  var l = be(e.to) ? e.to(t, n.data, o) : e.to;
  return T(T({}, e), {
    to: l,
    _event: i,
    event: i.data,
    delay: a
  });
}
function hs(e, t) {
  return lr(e, T(T({}, t), {
    to: rn.Parent
  }));
}
function ub(e, t, n) {
  return lr(t, T(T({}, n), {
    to: e
  }));
}
function db() {
  return hs(xi);
}
function fb(e, t) {
  return lr(e, T(T({}, t), {
    to: function(n, r, o) {
      var i = o._event;
      return i.origin;
    }
  }));
}
var mb = function(e, t) {
  return {
    context: e,
    event: t
  };
};
function pb(e, t) {
  return e === void 0 && (e = mb), {
    type: wi,
    label: t,
    expr: e
  };
}
var md = function(e, t, n) {
  return T(T({}, e), {
    value: ve(e.expr) ? e.expr : e.expr(t, n.data, {
      _event: n
    })
  });
}, pd = function(e) {
  return {
    type: ms,
    sendId: e
  };
};
function bd(e) {
  var t = ki(e);
  return {
    type: ye.Start,
    activity: t,
    exec: void 0
  };
}
function hd(e) {
  var t = be(e) ? e : ki(e);
  return {
    type: ye.Stop,
    activity: t,
    exec: void 0
  };
}
function vd(e, t, n) {
  var r = be(e.activity) ? e.activity(t, n.data) : e.activity, o = typeof r == "string" ? {
    id: r
  } : r, i = {
    type: ye.Stop,
    activity: o
  };
  return i;
}
var gd = function(e) {
  return {
    type: _i,
    assignment: e
  };
};
function bb(e) {
  return typeof e == "object" && "type" in e;
}
function yd(e, t) {
  var n = t ? "#".concat(t) : "";
  return "".concat(ye.After, "(").concat(e, ")").concat(n);
}
function yr(e, t) {
  var n = "".concat(ye.DoneState, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function Ir(e, t) {
  var n = "".concat(ye.DoneInvoke, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function zn(e, t) {
  var n = "".concat(ye.ErrorPlatform, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function hb(e) {
  return {
    type: ye.Pure,
    get: e
  };
}
function vb(e, t) {
  return lr(function(n, r) {
    return r;
  }, T(T({}, t), {
    to: e
  }));
}
function gb(e, t) {
  return hs(function(n, r, o) {
    return {
      type: ps,
      data: be(e) ? e(n, r, o) : e
    };
  }, T(T({}, t), {
    to: rn.Parent
  }));
}
function yb(e) {
  return {
    type: ye.Choose,
    conds: e
  };
}
var _b = function(e) {
  var t, n, r = [];
  try {
    for (var o = ue(e), i = o.next(); !i.done; i = o.next())
      for (var a = i.value, s = 0; s < a.actions.length; ) {
        if (a.actions[s].type === _i) {
          r.push(a.actions[s]), a.actions.splice(s, 1);
          continue;
        }
        s++;
      }
  } catch (l) {
    t = {
      error: l
    };
  } finally {
    try {
      i && !i.done && (n = o.return) && n.call(o);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return r;
};
function jr(e, t, n, r, o, i, a) {
  a === void 0 && (a = !1);
  var s = a ? [] : _b(o), l = s.length ? Dl(n, r, s, t) : n, c = a ? [n] : void 0, u = [];
  function f(p, h) {
    var _;
    switch (h.type) {
      case ar: {
        var y = dd(h, l, r, e.options.delays);
        return i && typeof y.delay == "number" && i(y, l, r), y;
      }
      case Qr:
        var v = fd(h, l, r, e.options.delays);
        return i && v.to !== rn.Internal && (p === "entry" ? u.push(v) : i(v, l, r)), v;
      case wi: {
        var w = md(h, l, r);
        return i == null || i(w, l, r), w;
      }
      case td: {
        var x = h, I = (_ = x.conds.find(function(J) {
          var j = sd(J.cond, e.options.guards);
          return !j || ld(e, j, l, r, i ? void 0 : t);
        })) === null || _ === void 0 ? void 0 : _.actions;
        if (!I)
          return [];
        var $ = pe(jr(e, t, l, r, [{
          type: p,
          actions: zt(_t(I), e.options.actions)
        }], i, a), 2), R = $[0], C = $[1];
        return l = C, c == null || c.push(l), R;
      }
      case nd: {
        var I = h.get(l, r.data);
        if (!I)
          return [];
        var D = pe(jr(e, t, l, r, [{
          type: p,
          actions: zt(_t(I), e.options.actions)
        }], i, a), 2), W = D[0], V = D[1];
        return l = V, c == null || c.push(l), W;
      }
      case yi: {
        var w = vd(h, l, r);
        return i == null || i(w, n, r), w;
      }
      case _i: {
        l = Dl(l, r, [h], i ? void 0 : t), c == null || c.push(l);
        break;
      }
      default:
        var A = Qn(h, e.options.actions), X = A.exec;
        if (i)
          i(A, l, r);
        else if (X && c) {
          var ce = c.length - 1, Ce = T(T({}, A), {
            exec: function(J) {
              for (var j = [], G = 1; G < arguments.length; G++)
                j[G - 1] = arguments[G];
              X.apply(void 0, Oe([c[ce]], pe(j), !1));
            }
          });
          A = Ce;
        }
        return A;
    }
  }
  function d(p) {
    var h, _, y = [];
    try {
      for (var v = ue(p.actions), w = v.next(); !w.done; w = v.next()) {
        var x = w.value, I = f(p.type, x);
        I && (y = y.concat(I));
      }
    } catch ($) {
      h = {
        error: $
      };
    } finally {
      try {
        w && !w.done && (_ = v.return) && _.call(v);
      } finally {
        if (h)
          throw h.error;
      }
    }
    return u.forEach(function($) {
      i($, l, r);
    }), u.length = 0, y;
  }
  var m = Pe(o.map(d));
  return [m, l];
}
const Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  actionTypes: J1,
  after: yd,
  assign: gd,
  cancel: pd,
  choose: yb,
  done: yr,
  doneInvoke: Ir,
  error: zn,
  escalate: gb,
  forwardTo: vb,
  getActionFunction: Jo,
  initEvent: Sn,
  isActionObject: bb,
  log: pb,
  pure: hb,
  raise: ud,
  resolveActions: jr,
  resolveLog: md,
  resolveRaise: dd,
  resolveSend: fd,
  resolveStop: vd,
  respond: fb,
  send: lr,
  sendParent: hs,
  sendTo: ub,
  sendUpdate: db,
  start: bd,
  stop: hd,
  toActionObject: Qn,
  toActionObjects: zt,
  toActivityDefinition: ki
}, Symbol.toStringTag, { value: "Module" }));
var zl = [], Dn = function(e, t) {
  zl.push(e);
  var n = t(e);
  return zl.pop(), n;
};
function _d(e) {
  var t;
  return t = {
    id: e,
    send: function() {
    },
    subscribe: function() {
      return {
        unsubscribe: function() {
        }
      };
    },
    getSnapshot: function() {
    },
    toJSON: function() {
      return {
        id: e
      };
    }
  }, t[Qt] = function() {
    return this;
  }, t;
}
function wb(e, t, n, r) {
  var o, i = cd(e.src), a = (o = t == null ? void 0 : t.options.services) === null || o === void 0 ? void 0 : o[i.type], s = e.data ? Xo(e.data, n, r) : void 0, l = a ? wd(a, e.id, s) : _d(e.id);
  return l.meta = e, l;
}
function wd(e, t, n) {
  var r = _d(t);
  if (r.deferred = !0, Jn(e)) {
    var o = r.state = Dn(void 0, function() {
      return (n ? e.withContext(n) : e).initialState;
    });
    r.getSnapshot = function() {
      return o;
    };
  }
  return r;
}
function xb(e) {
  try {
    return typeof e.send == "function";
  } catch {
    return !1;
  }
}
function Eb(e) {
  return xb(e) && "id" in e;
}
function kb(e) {
  var t;
  return T((t = {
    subscribe: function() {
      return {
        unsubscribe: function() {
        }
      };
    },
    id: "anonymous",
    getSnapshot: function() {
    }
  }, t[Qt] = function() {
    return this;
  }, t), e);
}
var Qo = function(e) {
  return e.type === "atomic" || e.type === "final";
};
function xd(e) {
  return Object.keys(e.states).map(function(t) {
    return e.states[t];
  });
}
function Ur(e) {
  return xd(e).filter(function(t) {
    return t.type !== "history";
  });
}
function Ed(e) {
  var t = [e];
  return Qo(e) ? t : t.concat(Pe(Ur(e).map(Ed)));
}
function _r(e, t) {
  var n, r, o, i, a, s, l, c, u = new Set(e), f = Sa(u), d = new Set(t);
  try {
    for (var m = ue(d), p = m.next(); !p.done; p = m.next())
      for (var h = p.value, _ = h.parent; _ && !d.has(_); )
        d.add(_), _ = _.parent;
  } catch (D) {
    n = {
      error: D
    };
  } finally {
    try {
      p && !p.done && (r = m.return) && r.call(m);
    } finally {
      if (n)
        throw n.error;
    }
  }
  var y = Sa(d);
  try {
    for (var v = ue(d), w = v.next(); !w.done; w = v.next()) {
      var h = w.value;
      if (h.type === "compound" && (!y.get(h) || !y.get(h).length))
        f.get(h) ? f.get(h).forEach(function(W) {
          return d.add(W);
        }) : h.initialStateNodes.forEach(function(W) {
          return d.add(W);
        });
      else if (h.type === "parallel")
        try {
          for (var x = (a = void 0, ue(Ur(h))), I = x.next(); !I.done; I = x.next()) {
            var $ = I.value;
            d.has($) || (d.add($), f.get($) ? f.get($).forEach(function(W) {
              return d.add(W);
            }) : $.initialStateNodes.forEach(function(W) {
              return d.add(W);
            }));
          }
        } catch (W) {
          a = {
            error: W
          };
        } finally {
          try {
            I && !I.done && (s = x.return) && s.call(x);
          } finally {
            if (a)
              throw a.error;
          }
        }
    }
  } catch (D) {
    o = {
      error: D
    };
  } finally {
    try {
      w && !w.done && (i = v.return) && i.call(v);
    } finally {
      if (o)
        throw o.error;
    }
  }
  try {
    for (var R = ue(d), C = R.next(); !C.done; C = R.next())
      for (var h = C.value, _ = h.parent; _ && !d.has(_); )
        d.add(_), _ = _.parent;
  } catch (D) {
    l = {
      error: D
    };
  } finally {
    try {
      C && !C.done && (c = R.return) && c.call(R);
    } finally {
      if (l)
        throw l.error;
    }
  }
  return d;
}
function kd(e, t) {
  var n = t.get(e);
  if (!n)
    return {};
  if (e.type === "compound") {
    var r = n[0];
    if (r) {
      if (Qo(r))
        return r.key;
    } else
      return {};
  }
  var o = {};
  return n.forEach(function(i) {
    o[i.key] = kd(i, t);
  }), o;
}
function Sa(e) {
  var t, n, r = /* @__PURE__ */ new Map();
  try {
    for (var o = ue(e), i = o.next(); !i.done; i = o.next()) {
      var a = i.value;
      r.has(a) || r.set(a, []), a.parent && (r.has(a.parent) || r.set(a.parent, []), r.get(a.parent).push(a));
    }
  } catch (s) {
    t = {
      error: s
    };
  } finally {
    try {
      i && !i.done && (n = o.return) && n.call(o);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return r;
}
function Sb(e, t) {
  var n = _r([e], t);
  return kd(e, Sa(n));
}
function wr(e, t) {
  return Array.isArray(e) ? e.some(function(n) {
    return n === t;
  }) : e instanceof Set ? e.has(t) : !1;
}
function Ob(e) {
  return Oe([], pe(new Set(Pe(Oe([], pe(e.map(function(t) {
    return t.ownEvents;
  })), !1)))), !1);
}
function Mo(e, t) {
  return t.type === "compound" ? Ur(t).some(function(n) {
    return n.type === "final" && wr(e, n);
  }) : t.type === "parallel" ? Ur(t).every(function(n) {
    return Mo(e, n);
  }) : !1;
}
function Ab(e) {
  return e === void 0 && (e = []), e.reduce(function(t, n) {
    return n.meta !== void 0 && (t[n.id] = n.meta), t;
  }, {});
}
function Ll(e) {
  return new Set(Pe(e.map(function(t) {
    return t.tags;
  })));
}
function Sd(e, t) {
  if (e === t)
    return !0;
  if (e === void 0 || t === void 0)
    return !1;
  if (ve(e) || ve(t))
    return e === t;
  var n = Object.keys(e), r = Object.keys(t);
  return n.length === r.length && n.every(function(o) {
    return Sd(e[o], t[o]);
  });
}
function Nb(e) {
  return typeof e != "object" || e === null ? !1 : "value" in e && "_event" in e;
}
function Ib(e, t) {
  var n = e.exec, r = T(T({}, e), {
    exec: n !== void 0 ? function() {
      return n(t.context, t.event, {
        action: e,
        state: t,
        _event: t._event
      });
    } : void 0
  });
  return r;
}
var Nt = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      var n = this, r;
      this.actions = [], this.activities = Pl, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || Pl, this.meta = Ab(t.configuration), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = (r = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set(), this.machine = t.machine, Object.defineProperty(this, "nextEvents", {
        get: function() {
          return Ob(n.configuration);
        }
      });
    }
    return e.from = function(t, n) {
      if (t instanceof e)
        return t.context !== n ? new e({
          value: t.value,
          context: n,
          _event: t._event,
          _sessionid: null,
          historyValue: t.historyValue,
          history: t.history,
          actions: [],
          activities: t.activities,
          meta: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        }) : t;
      var r = Sn;
      return new e({
        value: t,
        context: n,
        _event: r,
        _sessionid: null,
        historyValue: void 0,
        history: void 0,
        actions: [],
        activities: void 0,
        meta: void 0,
        events: [],
        configuration: [],
        transitions: [],
        children: {}
      });
    }, e.create = function(t) {
      return new e(t);
    }, e.inert = function(t, n) {
      if (t instanceof e) {
        if (!t.actions.length)
          return t;
        var r = Sn;
        return new e({
          value: t.value,
          context: n,
          _event: r,
          _sessionid: null,
          historyValue: t.historyValue,
          history: t.history,
          activities: t.activities,
          configuration: t.configuration,
          transitions: [],
          children: {}
        });
      }
      return e.from(t, n);
    }, e.prototype.toStrings = function(t, n) {
      var r = this;
      if (t === void 0 && (t = this.value), n === void 0 && (n = "."), ve(t))
        return [t];
      var o = Object.keys(t);
      return o.concat.apply(o, Oe([], pe(o.map(function(i) {
        return r.toStrings(t[i], n).map(function(a) {
          return i + n + a;
        });
      })), !1));
    }, e.prototype.toJSON = function() {
      var t = this;
      t.configuration, t.transitions;
      var n = t.tags;
      t.machine;
      var r = fs(t, ["configuration", "transitions", "tags", "machine"]);
      return T(T({}, r), {
        tags: Array.from(n)
      });
    }, e.prototype.matches = function(t) {
      return bs(t, this.value);
    }, e.prototype.hasTag = function(t) {
      return this.tags.has(t);
    }, e.prototype.can = function(t) {
      var n;
      ab(!!this.machine);
      var r = (n = this.machine) === null || n === void 0 ? void 0 : n.getTransitionData(this, t);
      return !!(r != null && r.transitions.length) && // Check that at least one transition is not forbidden
      r.transitions.some(function(o) {
        return o.target !== void 0 || o.actions.length;
      });
    }, e;
  }()
), Cb = {
  deferEvents: !1
}, $l = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.processingEvent = !1, this.queue = [], this.initialized = !1, this.options = T(T({}, Cb), t);
    }
    return e.prototype.initialize = function(t) {
      if (this.initialized = !0, t) {
        if (!this.options.deferEvents) {
          this.schedule(t);
          return;
        }
        this.process(t);
      }
      this.flushEvents();
    }, e.prototype.schedule = function(t) {
      if (!this.initialized || this.processingEvent) {
        this.queue.push(t);
        return;
      }
      if (this.queue.length !== 0)
        throw new Error("Event queue should be empty when it is not processing events");
      this.process(t), this.flushEvents();
    }, e.prototype.clear = function() {
      this.queue = [];
    }, e.prototype.flushEvents = function() {
      for (var t = this.queue.shift(); t; )
        this.process(t), t = this.queue.shift();
    }, e.prototype.process = function(t) {
      this.processingEvent = !0;
      try {
        t();
      } catch (n) {
        throw this.clear(), n;
      } finally {
        this.processingEvent = !1;
      }
    }, e;
  }()
), Wi = /* @__PURE__ */ new Map(), Tb = 0, pr = {
  bookId: function() {
    return "x:".concat(Tb++);
  },
  register: function(e, t) {
    return Wi.set(e, t), e;
  },
  get: function(e) {
    return Wi.get(e);
  },
  free: function(e) {
    Wi.delete(e);
  }
};
function vs() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
}
function Pb() {
  var e = vs();
  if (e && "__xstate__" in e)
    return e.__xstate__;
}
function Mb(e) {
  if (vs()) {
    var t = Pb();
    t && t.register(e);
  }
}
function Rb(e, t) {
  t === void 0 && (t = {});
  var n = e.initialState, r = /* @__PURE__ */ new Set(), o = [], i = !1, a = function() {
    if (!i) {
      for (i = !0; o.length > 0; ) {
        var c = o.shift();
        n = e.transition(n, c, l), r.forEach(function(u) {
          return u.next(n);
        });
      }
      i = !1;
    }
  }, s = kb({
    id: t.id,
    send: function(c) {
      o.push(c), a();
    },
    getSnapshot: function() {
      return n;
    },
    subscribe: function(c, u, f) {
      var d = Po(c, u, f);
      return r.add(d), d.next(n), {
        unsubscribe: function() {
          r.delete(d);
        }
      };
    }
  }), l = {
    parent: t.parent,
    self: s,
    id: t.id || "anonymous",
    observers: r
  };
  return n = e.start ? e.start(l) : n, s;
}
var Db = {
  sync: !1,
  autoForward: !1
}, Ge;
(function(e) {
  e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(Ge || (Ge = {}));
var zb = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      n === void 0 && (n = e.defaultOptions);
      var r = this;
      this.machine = t, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = !1, this.status = Ge.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(u, f) {
        if (sr(u))
          return r.batch(u), r.state;
        var d = Ke(Ei(u, f));
        if (r.status === Ge.Stopped)
          return r.state;
        if (r.status !== Ge.Running && !r.options.deferEvents)
          throw new Error('Event "'.concat(d.name, '" was sent to uninitialized service "').concat(
            r.machine.id,
            `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `
          ).concat(JSON.stringify(d.data)));
        return r.scheduler.schedule(function() {
          r.forward(d);
          var m = r._nextState(d);
          r.update(m, d);
        }), r._state;
      }, this.sendTo = function(u, f, d) {
        var m = r.parent && (f === rn.Parent || r.parent.id === f), p = m ? r.parent : ve(f) ? f === rn.Internal ? r : r.children.get(f) || pr.get(f) : lb(f) ? f : void 0;
        if (!p) {
          if (!m)
            throw new Error("Unable to send event to child '".concat(f, "' from service '").concat(r.id, "'."));
          return;
        }
        if ("machine" in p) {
          if (r.status !== Ge.Stopped || r.parent !== p || // we need to send events to the parent from exit handlers of a machine that reached its final state
          r.state.done) {
            var h = T(T({}, u), {
              name: u.name === ps ? "".concat(zn(r.id)) : u.name,
              origin: r.sessionId
            });
            !d && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([p, h]) : p.send(h);
          }
        } else
          !d && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([p, u.data]) : p.send(u.data);
      }, this._exec = function(u, f, d, m) {
        m === void 0 && (m = r.machine.options.actions);
        var p = u.exec || Jo(u.type, m), h = be(p) ? p : p ? p.exec : u.exec;
        if (h)
          try {
            return h(f, d.data, r.machine.config.predictableActionArguments ? {
              action: u,
              _event: d
            } : {
              action: u,
              state: r.state,
              _event: d
            });
          } catch (ce) {
            throw r.parent && r.parent.send({
              type: "xstate.error",
              data: ce
            }), ce;
          }
        switch (u.type) {
          case ar: {
            var _ = u;
            r.defer(_);
            break;
          }
          case Qr:
            var y = u;
            if (typeof y.delay == "number") {
              r.defer(y);
              return;
            } else
              y.to ? r.sendTo(y._event, y.to, d === Sn) : r.send(y._event);
            break;
          case ms:
            r.cancel(u.sendId);
            break;
          case Wo: {
            if (r.status !== Ge.Running)
              return;
            var v = u.activity;
            if (
              // in v4 with `predictableActionArguments` invokes are called eagerly when the `this.state` still points to the previous state
              !r.machine.config.predictableActionArguments && !r.state.activities[v.id || v.type]
            )
              break;
            if (v.type === ye.Invoke) {
              var w = cd(v.src), x = r.machine.options.services ? r.machine.options.services[w.type] : void 0, I = v.id, $ = v.data, R = "autoForward" in v ? v.autoForward : !!v.forward;
              if (!x)
                return;
              var C = $ ? Xo($, f, d) : void 0;
              if (typeof x == "string")
                return;
              var D = be(x) ? x(f, d.data, {
                data: C,
                src: w,
                meta: v.meta
              }) : x;
              if (!D)
                return;
              var W = void 0;
              Jn(D) && (D = C ? D.withContext(C) : D, W = {
                autoForward: R
              }), r.spawn(D, I, W);
            } else
              r.spawnActivity(v);
            break;
          }
          case yi: {
            r.stopChild(u.activity.id);
            break;
          }
          case wi:
            var V = u, A = V.label, X = V.value;
            A ? r.logger(A, X) : r.logger(X);
            break;
        }
      };
      var o = T(T({}, e.defaultOptions), n), i = o.clock, a = o.logger, s = o.parent, l = o.id, c = l !== void 0 ? l : t.id;
      this.id = c, this.logger = a, this.clock = i, this.parent = s, this.options = o, this.scheduler = new $l({
        deferEvents: this.options.deferEvents
      }), this.sessionId = pr.bookId();
    }
    return Object.defineProperty(e.prototype, "initialState", {
      get: function() {
        var t = this;
        return this._initialState ? this._initialState : Dn(this, function() {
          return t._initialState = t.machine.initialState, t._initialState;
        });
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "state", {
      /**
       * @deprecated Use `.getSnapshot()` instead.
       */
      get: function() {
        return this._state;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.execute = function(t, n) {
      var r, o;
      try {
        for (var i = ue(t.actions), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.exec(s, t, n);
        }
      } catch (l) {
        r = {
          error: l
        };
      } finally {
        try {
          a && !a.done && (o = i.return) && o.call(i);
        } finally {
          if (r)
            throw r.error;
        }
      }
    }, e.prototype.update = function(t, n) {
      var r, o, i, a, s, l, c, u, f = this;
      if (t._sessionid = this.sessionId, this._state = t, (!this.machine.config.predictableActionArguments || // this is currently required to execute initial actions as the `initialState` gets cached
      // we can't just recompute it (and execute actions while doing so) because we try to preserve identity of actors created within initial assigns
      n === Sn) && this.options.execute)
        this.execute(this.state);
      else
        for (var d = void 0; d = this._outgoingQueue.shift(); )
          d[0].send(d[1]);
      if (this.children.forEach(function(D) {
        f.state.children[D.id] = D;
      }), this.devTools && this.devTools.send(n.data, t), t.event)
        try {
          for (var m = ue(this.eventListeners), p = m.next(); !p.done; p = m.next()) {
            var h = p.value;
            h(t.event);
          }
        } catch (D) {
          r = {
            error: D
          };
        } finally {
          try {
            p && !p.done && (o = m.return) && o.call(m);
          } finally {
            if (r)
              throw r.error;
          }
        }
      try {
        for (var _ = ue(this.listeners), y = _.next(); !y.done; y = _.next()) {
          var h = y.value;
          h(t, t.event);
        }
      } catch (D) {
        i = {
          error: D
        };
      } finally {
        try {
          y && !y.done && (a = _.return) && a.call(_);
        } finally {
          if (i)
            throw i.error;
        }
      }
      try {
        for (var v = ue(this.contextListeners), w = v.next(); !w.done; w = v.next()) {
          var x = w.value;
          x(this.state.context, this.state.history ? this.state.history.context : void 0);
        }
      } catch (D) {
        s = {
          error: D
        };
      } finally {
        try {
          w && !w.done && (l = v.return) && l.call(v);
        } finally {
          if (s)
            throw s.error;
        }
      }
      if (this.state.done) {
        var I = t.configuration.find(function(D) {
          return D.type === "final" && D.parent === f.machine;
        }), $ = I && I.doneData ? Xo(I.doneData, t.context, n) : void 0;
        this._doneEvent = Ir(this.id, $);
        try {
          for (var R = ue(this.doneListeners), C = R.next(); !C.done; C = R.next()) {
            var h = C.value;
            h(this._doneEvent);
          }
        } catch (D) {
          c = {
            error: D
          };
        } finally {
          try {
            C && !C.done && (u = R.return) && u.call(R);
          } finally {
            if (c)
              throw c.error;
          }
        }
        this._stop(), this._stopChildren(), pr.free(this.sessionId);
      }
    }, e.prototype.onTransition = function(t) {
      return this.listeners.add(t), this.status === Ge.Running && t(this.state, this.state.event), this;
    }, e.prototype.subscribe = function(t, n, r) {
      var o = this, i = Po(t, n, r);
      this.listeners.add(i.next), this.status !== Ge.NotStarted && i.next(this.state);
      var a = function() {
        o.doneListeners.delete(a), o.stopListeners.delete(a), i.complete();
      };
      return this.status === Ge.Stopped ? i.complete() : (this.onDone(a), this.onStop(a)), {
        unsubscribe: function() {
          o.listeners.delete(i.next), o.doneListeners.delete(a), o.stopListeners.delete(a);
        }
      };
    }, e.prototype.onEvent = function(t) {
      return this.eventListeners.add(t), this;
    }, e.prototype.onSend = function(t) {
      return this.sendListeners.add(t), this;
    }, e.prototype.onChange = function(t) {
      return this.contextListeners.add(t), this;
    }, e.prototype.onStop = function(t) {
      return this.stopListeners.add(t), this;
    }, e.prototype.onDone = function(t) {
      return this.status === Ge.Stopped && this._doneEvent ? t(this._doneEvent) : this.doneListeners.add(t), this;
    }, e.prototype.off = function(t) {
      return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this;
    }, e.prototype.start = function(t) {
      var n = this;
      if (this.status === Ge.Running)
        return this;
      this.machine._init(), pr.register(this.sessionId, this), this.initialized = !0, this.status = Ge.Running;
      var r = t === void 0 ? this.initialState : Dn(this, function() {
        return Nb(t) ? n.machine.resolveState(t) : n.machine.resolveState(Nt.from(t, n.machine.context));
      });
      return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
        n.update(r, Sn);
      }), this;
    }, e.prototype._stopChildren = function() {
      this.children.forEach(function(t) {
        be(t.stop) && t.stop();
      }), this.children.clear();
    }, e.prototype._stop = function() {
      var t, n, r, o, i, a, s, l, c, u;
      try {
        for (var f = ue(this.listeners), d = f.next(); !d.done; d = f.next()) {
          var m = d.value;
          this.listeners.delete(m);
        }
      } catch (R) {
        t = {
          error: R
        };
      } finally {
        try {
          d && !d.done && (n = f.return) && n.call(f);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var p = ue(this.stopListeners), h = p.next(); !h.done; h = p.next()) {
          var m = h.value;
          m(), this.stopListeners.delete(m);
        }
      } catch (R) {
        r = {
          error: R
        };
      } finally {
        try {
          h && !h.done && (o = p.return) && o.call(p);
        } finally {
          if (r)
            throw r.error;
        }
      }
      try {
        for (var _ = ue(this.contextListeners), y = _.next(); !y.done; y = _.next()) {
          var m = y.value;
          this.contextListeners.delete(m);
        }
      } catch (R) {
        i = {
          error: R
        };
      } finally {
        try {
          y && !y.done && (a = _.return) && a.call(_);
        } finally {
          if (i)
            throw i.error;
        }
      }
      try {
        for (var v = ue(this.doneListeners), w = v.next(); !w.done; w = v.next()) {
          var m = w.value;
          this.doneListeners.delete(m);
        }
      } catch (R) {
        s = {
          error: R
        };
      } finally {
        try {
          w && !w.done && (l = v.return) && l.call(v);
        } finally {
          if (s)
            throw s.error;
        }
      }
      if (!this.initialized)
        return this;
      this.initialized = !1, this.status = Ge.Stopped, this._initialState = void 0;
      try {
        for (var x = ue(Object.keys(this.delayedEventsMap)), I = x.next(); !I.done; I = x.next()) {
          var $ = I.value;
          this.clock.clearTimeout(this.delayedEventsMap[$]);
        }
      } catch (R) {
        c = {
          error: R
        };
      } finally {
        try {
          I && !I.done && (u = x.return) && u.call(x);
        } finally {
          if (c)
            throw c.error;
        }
      }
      this.scheduler.clear(), this.scheduler = new $l({
        deferEvents: this.options.deferEvents
      });
    }, e.prototype.stop = function() {
      var t = this, n = this.scheduler;
      return this._stop(), n.schedule(function() {
        var r = Ke({
          type: "xstate.stop"
        }), o = Dn(t, function() {
          var i = Pe(Oe([], pe(t.state.configuration), !1).sort(function(u, f) {
            return f.order - u.order;
          }).map(function(u) {
            return zt(u.onExit, t.machine.options.actions);
          })), a = pe(jr(t.machine, t.state, t.state.context, r, [{
            type: "exit",
            actions: i
          }], t.machine.config.predictableActionArguments ? t._exec : void 0, t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder), 2), s = a[0], l = a[1], c = new Nt({
            value: t.state.value,
            context: l,
            _event: r,
            _sessionid: t.sessionId,
            historyValue: void 0,
            history: t.state,
            actions: s.filter(function(u) {
              return !ka(u);
            }),
            activities: {},
            events: [],
            configuration: [],
            transitions: [],
            children: {},
            done: t.state.done,
            tags: t.state.tags,
            machine: t.machine
          });
          return c.changed = !0, c;
        });
        t.update(o, r), t._stopChildren(), pr.free(t.sessionId);
      }), this;
    }, e.prototype.batch = function(t) {
      var n = this;
      if (!(this.status === Ge.NotStarted && this.options.deferEvents)) {
        if (this.status !== Ge.Running)
          throw new Error(
            // tslint:disable-next-line:max-line-length
            "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
          );
      }
      if (t.length) {
        var r = !!this.machine.config.predictableActionArguments && this._exec;
        this.scheduler.schedule(function() {
          var o, i, a = n.state, s = !1, l = [], c = function(m) {
            var p = Ke(m);
            n.forward(p), a = Dn(n, function() {
              return n.machine.transition(a, p, void 0, r || void 0);
            }), l.push.apply(l, Oe([], pe(n.machine.config.predictableActionArguments ? a.actions : a.actions.map(function(h) {
              return Ib(h, a);
            })), !1)), s = s || !!a.changed;
          };
          try {
            for (var u = ue(t), f = u.next(); !f.done; f = u.next()) {
              var d = f.value;
              c(d);
            }
          } catch (m) {
            o = {
              error: m
            };
          } finally {
            try {
              f && !f.done && (i = u.return) && i.call(u);
            } finally {
              if (o)
                throw o.error;
            }
          }
          a.changed = s, a.actions = l, n.update(a, Ke(t[t.length - 1]));
        });
      }
    }, e.prototype.sender = function(t) {
      return this.send.bind(this, t);
    }, e.prototype._nextState = function(t, n) {
      var r = this;
      n === void 0 && (n = !!this.machine.config.predictableActionArguments && this._exec);
      var o = Ke(t);
      if (o.name.indexOf(wa) === 0 && !this.state.nextEvents.some(function(a) {
        return a.indexOf(wa) === 0;
      }))
        throw o.data.data;
      var i = Dn(this, function() {
        return r.machine.transition(r.state, o, void 0, n || void 0);
      });
      return i;
    }, e.prototype.nextState = function(t) {
      return this._nextState(t, !1);
    }, e.prototype.forward = function(t) {
      var n, r;
      try {
        for (var o = ue(this.forwardTo), i = o.next(); !i.done; i = o.next()) {
          var a = i.value, s = this.children.get(a);
          if (!s)
            throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(a, "'."));
          s.send(t);
        }
      } catch (l) {
        n = {
          error: l
        };
      } finally {
        try {
          i && !i.done && (r = o.return) && r.call(o);
        } finally {
          if (n)
            throw n.error;
        }
      }
    }, e.prototype.defer = function(t) {
      var n = this, r = this.clock.setTimeout(function() {
        "to" in t && t.to ? n.sendTo(t._event, t.to, !0) : n.send(t._event);
      }, t.delay);
      t.id && (this.delayedEventsMap[t.id] = r);
    }, e.prototype.cancel = function(t) {
      this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t];
    }, e.prototype.exec = function(t, n, r) {
      r === void 0 && (r = this.machine.options.actions), this._exec(t, n.context, n._event, r);
    }, e.prototype.removeChild = function(t) {
      var n;
      this.children.delete(t), this.forwardTo.delete(t), (n = this.state) === null || n === void 0 || delete n.children[t];
    }, e.prototype.stopChild = function(t) {
      var n = this.children.get(t);
      n && (this.removeChild(t), be(n.stop) && n.stop());
    }, e.prototype.spawn = function(t, n, r) {
      if (this.status !== Ge.Running)
        return wd(t, n);
      if (Rl(t))
        return this.spawnPromise(Promise.resolve(t), n);
      if (be(t))
        return this.spawnCallback(t, n);
      if (Eb(t))
        return this.spawnActor(t, n);
      if (sb(t))
        return this.spawnObservable(t, n);
      if (Jn(t))
        return this.spawnMachine(t, T(T({}, r), {
          id: n
        }));
      if (rb(t))
        return this.spawnBehavior(t, n);
      throw new Error('Unable to spawn entity "'.concat(n, '" of type "').concat(typeof t, '".'));
    }, e.prototype.spawnMachine = function(t, n) {
      var r = this;
      n === void 0 && (n = {});
      var o = new e(t, T(T({}, this.options), {
        parent: this,
        id: n.id || t.id
      })), i = T(T({}, Db), n);
      i.sync && o.onTransition(function(s) {
        r.send(xi, {
          state: s,
          id: o.id
        });
      });
      var a = o;
      return this.children.set(o.id, a), i.autoForward && this.forwardTo.add(o.id), o.onDone(function(s) {
        r.removeChild(o.id), r.send(Ke(s, {
          origin: o.id
        }));
      }).start(), a;
    }, e.prototype.spawnBehavior = function(t, n) {
      var r = Rb(t, {
        id: n,
        parent: this
      });
      return this.children.set(n, r), r;
    }, e.prototype.spawnPromise = function(t, n) {
      var r, o = this, i = !1, a;
      t.then(function(l) {
        i || (a = l, o.removeChild(n), o.send(Ke(Ir(n, l), {
          origin: n
        })));
      }, function(l) {
        if (!i) {
          o.removeChild(n);
          var c = zn(n, l);
          try {
            o.send(Ke(c, {
              origin: n
            }));
          } catch {
            o.devTools && o.devTools.send(c, o.state), o.machine.strict && o.stop();
          }
        }
      });
      var s = (r = {
        id: n,
        send: function() {
        },
        subscribe: function(l, c, u) {
          var f = Po(l, c, u), d = !1;
          return t.then(function(m) {
            d || (f.next(m), !d && f.complete());
          }, function(m) {
            d || f.error(m);
          }), {
            unsubscribe: function() {
              return d = !0;
            }
          };
        },
        stop: function() {
          i = !0;
        },
        toJSON: function() {
          return {
            id: n
          };
        },
        getSnapshot: function() {
          return a;
        }
      }, r[Qt] = function() {
        return this;
      }, r);
      return this.children.set(n, s), s;
    }, e.prototype.spawnCallback = function(t, n) {
      var r, o = this, i = !1, a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), l, c = function(d) {
        l = d, s.forEach(function(m) {
          return m(d);
        }), !i && o.send(Ke(d, {
          origin: n
        }));
      }, u;
      try {
        u = t(c, function(d) {
          a.add(d);
        });
      } catch (d) {
        this.send(zn(n, d));
      }
      if (Rl(u))
        return this.spawnPromise(u, n);
      var f = (r = {
        id: n,
        send: function(d) {
          return a.forEach(function(m) {
            return m(d);
          });
        },
        subscribe: function(d) {
          var m = Po(d);
          return s.add(m.next), {
            unsubscribe: function() {
              s.delete(m.next);
            }
          };
        },
        stop: function() {
          i = !0, be(u) && u();
        },
        toJSON: function() {
          return {
            id: n
          };
        },
        getSnapshot: function() {
          return l;
        }
      }, r[Qt] = function() {
        return this;
      }, r);
      return this.children.set(n, f), f;
    }, e.prototype.spawnObservable = function(t, n) {
      var r, o = this, i, a = t.subscribe(function(l) {
        i = l, o.send(Ke(l, {
          origin: n
        }));
      }, function(l) {
        o.removeChild(n), o.send(Ke(zn(n, l), {
          origin: n
        }));
      }, function() {
        o.removeChild(n), o.send(Ke(Ir(n), {
          origin: n
        }));
      }), s = (r = {
        id: n,
        send: function() {
        },
        subscribe: function(l, c, u) {
          return t.subscribe(l, c, u);
        },
        stop: function() {
          return a.unsubscribe();
        },
        getSnapshot: function() {
          return i;
        },
        toJSON: function() {
          return {
            id: n
          };
        }
      }, r[Qt] = function() {
        return this;
      }, r);
      return this.children.set(n, s), s;
    }, e.prototype.spawnActor = function(t, n) {
      return this.children.set(n, t), t;
    }, e.prototype.spawnActivity = function(t) {
      var n = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
      if (n) {
        var r = n(this.state.context, t);
        this.spawnEffect(t.id, r);
      }
    }, e.prototype.spawnEffect = function(t, n) {
      var r;
      this.children.set(t, (r = {
        id: t,
        send: function() {
        },
        subscribe: function() {
          return {
            unsubscribe: function() {
            }
          };
        },
        stop: n || void 0,
        getSnapshot: function() {
        },
        toJSON: function() {
          return {
            id: t
          };
        }
      }, r[Qt] = function() {
        return this;
      }, r));
    }, e.prototype.attachDev = function() {
      var t = vs();
      if (this.options.devTools && t) {
        if (t.__REDUX_DEVTOOLS_EXTENSION__) {
          var n = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
          this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(T(T({
            name: this.id,
            autoPause: !0,
            stateSanitizer: function(r) {
              return {
                value: r.value,
                context: r.context,
                actions: r.actions
              };
            }
          }, n), {
            features: T({
              jump: !1,
              skip: !1
            }, n ? n.features : void 0)
          }), this.machine), this.devTools.init(this.state);
        }
        Mb(this);
      }
    }, e.prototype.toJSON = function() {
      return {
        id: this.id
      };
    }, e.prototype[Qt] = function() {
      return this;
    }, e.prototype.getSnapshot = function() {
      return this.status === Ge.NotStarted ? this.initialState : this._state;
    }, e.defaultOptions = {
      execute: !0,
      deferEvents: !0,
      clock: {
        setTimeout: function(t, n) {
          return setTimeout(t, n);
        },
        clearTimeout: function(t) {
          return clearTimeout(t);
        }
      },
      logger: /* @__PURE__ */ console.log.bind(console),
      devTools: !1
    }, e.interpret = Od, e;
  }()
);
function Od(e, t) {
  var n = new zb(e, t);
  return n;
}
function Lb(e) {
  if (typeof e == "string") {
    var t = {
      type: e
    };
    return t.toString = function() {
      return e;
    }, t;
  }
  return e;
}
function vo(e) {
  return T(T({
    type: qo
  }, e), {
    toJSON: function() {
      e.onDone, e.onError;
      var t = fs(e, ["onDone", "onError"]);
      return T(T({}, t), {
        type: qo,
        src: Lb(e.src)
      });
    }
  });
}
var go = "", Oa = "#", qi = "*", Mn = {}, Rn = function(e) {
  return e[0] === Oa;
}, $b = function() {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
}, Fb = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n, r, o) {
      r === void 0 && (r = "context" in t ? t.context : void 0);
      var i = this, a;
      this.config = t, this._context = r, this.order = -1, this.__xstatenode = !0, this.__cache = {
        events: void 0,
        relativeValue: /* @__PURE__ */ new Map(),
        initialStateValue: void 0,
        initialState: void 0,
        on: void 0,
        transitions: void 0,
        candidates: {},
        delayedTransitions: void 0
      }, this.idMap = {}, this.tags = [], this.options = Object.assign($b(), n), this.parent = o == null ? void 0 : o.parent, this.key = this.config.key || (o == null ? void 0 : o.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : rd), this.id = this.config.id || Oe([this.machine.key], pe(this.path), !1).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (a = this.config.schema) !== null && a !== void 0 ? a : {}, this.description = this.config.description, this.initial = this.config.initial, this.states = this.config.states ? gr(this.config.states, function(c, u) {
        var f, d = new e(c, {}, void 0, {
          parent: i,
          key: u
        });
        return Object.assign(i.idMap, T((f = {}, f[d.id] = d, f), d.idMap)), d;
      }) : Mn;
      var s = 0;
      function l(c) {
        var u, f;
        c.order = s++;
        try {
          for (var d = ue(xd(c)), m = d.next(); !m.done; m = d.next()) {
            var p = m.value;
            l(p);
          }
        } catch (h) {
          u = {
            error: h
          };
        } finally {
          try {
            m && !m.done && (f = d.return) && f.call(d);
          } finally {
            if (u)
              throw u.error;
          }
        }
      }
      l(this), this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(c) {
        var u = c.event;
        return u === go;
      }) : go in this.config.on : !1), this.strict = !!this.config.strict, this.onEntry = _t(this.config.entry || this.config.onEntry).map(function(c) {
        return Qn(c);
      }), this.onExit = _t(this.config.exit || this.config.onExit).map(function(c) {
        return Qn(c);
      }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = _t(this.config.invoke).map(function(c, u) {
        var f, d;
        if (Jn(c)) {
          var m = ho(i.id, u);
          return i.machine.options.services = T((f = {}, f[m] = c, f), i.machine.options.services), vo({
            src: m,
            id: m
          });
        } else if (ve(c.src)) {
          var m = c.id || ho(i.id, u);
          return vo(T(T({}, c), {
            id: m,
            src: c.src
          }));
        } else if (Jn(c.src) || be(c.src)) {
          var m = c.id || ho(i.id, u);
          return i.machine.options.services = T((d = {}, d[m] = c.src, d), i.machine.options.services), vo(T(T({
            id: m
          }, c), {
            src: m
          }));
        } else {
          var p = c.src;
          return vo(T(T({
            id: ho(i.id, u)
          }, c), {
            src: p
          }));
        }
      }), this.activities = _t(this.config.activities).concat(this.invoke).map(function(c) {
        return ki(c);
      }), this.transition = this.transition.bind(this), this.tags = _t(this.config.tags);
    }
    return e.prototype._init = function() {
      this.__cache.transitions || Ed(this).forEach(function(t) {
        return t.on;
      });
    }, e.prototype.withConfig = function(t, n) {
      var r = this.options, o = r.actions, i = r.activities, a = r.guards, s = r.services, l = r.delays;
      return new e(this.config, {
        actions: T(T({}, o), t.actions),
        activities: T(T({}, i), t.activities),
        guards: T(T({}, a), t.guards),
        services: T(T({}, s), t.services),
        delays: T(T({}, l), t.delays)
      }, n ?? this.context);
    }, e.prototype.withContext = function(t) {
      return new e(this.config, this.options, t);
    }, Object.defineProperty(e.prototype, "context", {
      get: function() {
        return be(this._context) ? this._context() : this._context;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "definition", {
      /**
       * The well-structured state node definition.
       */
      get: function() {
        return {
          id: this.id,
          key: this.key,
          version: this.version,
          context: this.context,
          type: this.type,
          initial: this.initial,
          history: this.history,
          states: gr(this.states, function(t) {
            return t.definition;
          }),
          on: this.on,
          transitions: this.transitions,
          entry: this.onEntry,
          exit: this.onExit,
          activities: this.activities || [],
          meta: this.meta,
          order: this.order || -1,
          data: this.doneData,
          invoke: this.invoke,
          description: this.description,
          tags: this.tags
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.toJSON = function() {
      return this.definition;
    }, Object.defineProperty(e.prototype, "on", {
      /**
       * The mapping of events to transitions.
       */
      get: function() {
        if (this.__cache.on)
          return this.__cache.on;
        var t = this.transitions;
        return this.__cache.on = t.reduce(function(n, r) {
          return n[r.eventType] = n[r.eventType] || [], n[r.eventType].push(r), n;
        }, {});
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "after", {
      get: function() {
        return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "transitions", {
      /**
       * All the transitions that can be taken from this state node.
       */
      get: function() {
        return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getCandidates = function(t) {
      if (this.__cache.candidates[t])
        return this.__cache.candidates[t];
      var n = t === go, r = this.transitions.filter(function(o) {
        var i = o.eventType === t;
        return n ? i : i || o.eventType === qi;
      });
      return this.__cache.candidates[t] = r, r;
    }, e.prototype.getDelayedTransitions = function() {
      var t = this, n = this.config.after;
      if (!n)
        return [];
      var r = function(i, a) {
        var s = be(i) ? "".concat(t.id, ":delay[").concat(a, "]") : i, l = yd(s, t.id);
        return t.onEntry.push(lr(l, {
          delay: i
        })), t.onExit.push(pd(l)), l;
      }, o = sr(n) ? n.map(function(i, a) {
        var s = r(i.delay, a);
        return T(T({}, i), {
          event: s
        });
      }) : Pe(Object.keys(n).map(function(i, a) {
        var s = n[i], l = ve(s) ? {
          target: s
        } : s, c = isNaN(+i) ? i : +i, u = r(c, a);
        return _t(l).map(function(f) {
          return T(T({}, f), {
            event: u,
            delay: c
          });
        });
      }));
      return o.map(function(i) {
        var a = i.delay;
        return T(T({}, t.formatTransition(i)), {
          delay: a
        });
      });
    }, e.prototype.getStateNodes = function(t) {
      var n, r = this;
      if (!t)
        return [];
      var o = t instanceof Nt ? t.value : Nr(t, this.delimiter);
      if (ve(o)) {
        var i = this.getStateNode(o).initial;
        return i !== void 0 ? this.getStateNodes((n = {}, n[o] = i, n)) : [this, this.states[o]];
      }
      var a = Object.keys(o), s = [this];
      return s.push.apply(s, Oe([], pe(Pe(a.map(function(l) {
        return r.getStateNode(l).getStateNodes(o[l]);
      }))), !1)), s;
    }, e.prototype.handles = function(t) {
      var n = od(t);
      return this.events.includes(n);
    }, e.prototype.resolveState = function(t) {
      var n = t instanceof Nt ? t : Nt.create(t), r = Array.from(_r([], this.getStateNodes(n.value)));
      return new Nt(T(T({}, n), {
        value: this.resolve(n.value),
        configuration: r,
        done: Mo(r, this),
        tags: Ll(r),
        machine: this.machine
      }));
    }, e.prototype.transitionLeafNode = function(t, n, r) {
      var o = this.getStateNode(t), i = o.next(n, r);
      return !i || !i.transitions.length ? this.next(n, r) : i;
    }, e.prototype.transitionCompoundNode = function(t, n, r) {
      var o = Object.keys(t), i = this.getStateNode(o[0]), a = i._transition(t[o[0]], n, r);
      return !a || !a.transitions.length ? this.next(n, r) : a;
    }, e.prototype.transitionParallelNode = function(t, n, r) {
      var o, i, a = {};
      try {
        for (var s = ue(Object.keys(t)), l = s.next(); !l.done; l = s.next()) {
          var c = l.value, u = t[c];
          if (u) {
            var f = this.getStateNode(c), d = f._transition(u, n, r);
            d && (a[c] = d);
          }
        }
      } catch (y) {
        o = {
          error: y
        };
      } finally {
        try {
          l && !l.done && (i = s.return) && i.call(s);
        } finally {
          if (o)
            throw o.error;
        }
      }
      var m = Object.keys(a).map(function(y) {
        return a[y];
      }), p = Pe(m.map(function(y) {
        return y.transitions;
      })), h = m.some(function(y) {
        return y.transitions.length > 0;
      });
      if (!h)
        return this.next(n, r);
      var _ = Pe(Object.keys(a).map(function(y) {
        return a[y].configuration;
      }));
      return {
        transitions: p,
        exitSet: Pe(m.map(function(y) {
          return y.exitSet;
        })),
        configuration: _,
        source: n,
        actions: Pe(Object.keys(a).map(function(y) {
          return a[y].actions;
        }))
      };
    }, e.prototype._transition = function(t, n, r) {
      return ve(t) ? this.transitionLeafNode(t, n, r) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, n, r) : this.transitionParallelNode(t, n, r);
    }, e.prototype.getTransitionData = function(t, n) {
      return this._transition(t.value, t, Ke(n));
    }, e.prototype.next = function(t, n) {
      var r, o, i = this, a = n.name, s = [], l = [], c;
      try {
        for (var u = ue(this.getCandidates(a)), f = u.next(); !f.done; f = u.next()) {
          var d = f.value, m = d.cond, p = d.in, h = t.context, _ = p ? ve(p) && Rn(p) ? (
            // Check if in state by ID
            t.matches(Nr(this.getStateNodeById(p).path, this.delimiter))
          ) : (
            // Check if in state by relative grandparent
            bs(Nr(p, this.delimiter), eb(this.path.slice(0, -2))(t.value))
          ) : !0, y = !1;
          try {
            y = !m || ld(this.machine, m, h, n, t);
          } catch (x) {
            throw new Error("Unable to evaluate guard '".concat(m.name || m.type, "' in transition for event '").concat(a, "' in state node '").concat(this.id, `':
`).concat(x.message));
          }
          if (y && _) {
            d.target !== void 0 && (l = d.target), s.push.apply(s, Oe([], pe(d.actions), !1)), c = d;
            break;
          }
        }
      } catch (x) {
        r = {
          error: x
        };
      } finally {
        try {
          f && !f.done && (o = u.return) && o.call(u);
        } finally {
          if (r)
            throw r.error;
        }
      }
      if (c) {
        if (!l.length)
          return {
            transitions: [c],
            exitSet: [],
            configuration: t.value ? [this] : [],
            source: t,
            actions: s
          };
        var v = Pe(l.map(function(x) {
          return i.getRelativeStateNodes(x, t.historyValue);
        })), w = !!c.internal;
        return {
          transitions: [c],
          exitSet: w ? [] : Pe(l.map(function(x) {
            return i.getPotentiallyReenteringNodes(x);
          })),
          configuration: v,
          source: t,
          actions: s
        };
      }
    }, e.prototype.getPotentiallyReenteringNodes = function(t) {
      if (this.order < t.order)
        return [this];
      for (var n = [], r = this, o = t; r && r !== o; )
        n.push(r), r = r.parent;
      return r !== o ? [] : (n.push(o), n);
    }, e.prototype.getActions = function(t, n, r, o, i, a, s) {
      var l, c, u, f, d = this, m = a ? _r([], this.getStateNodes(a.value)) : [], p = /* @__PURE__ */ new Set();
      try {
        for (var h = ue(Array.from(t).sort(function(V, A) {
          return V.order - A.order;
        })), _ = h.next(); !_.done; _ = h.next()) {
          var y = _.value;
          (!wr(m, y) || wr(r.exitSet, y) || y.parent && p.has(y.parent)) && p.add(y);
        }
      } catch (V) {
        l = {
          error: V
        };
      } finally {
        try {
          _ && !_.done && (c = h.return) && c.call(h);
        } finally {
          if (l)
            throw l.error;
        }
      }
      try {
        for (var v = ue(m), w = v.next(); !w.done; w = v.next()) {
          var y = w.value;
          (!wr(t, y) || wr(r.exitSet, y.parent)) && r.exitSet.push(y);
        }
      } catch (V) {
        u = {
          error: V
        };
      } finally {
        try {
          w && !w.done && (f = v.return) && f.call(v);
        } finally {
          if (u)
            throw u.error;
        }
      }
      r.exitSet.sort(function(V, A) {
        return A.order - V.order;
      });
      var x = Array.from(p).sort(function(V, A) {
        return V.order - A.order;
      }), I = new Set(r.exitSet), $ = Pe(x.map(function(V) {
        var A = [];
        if (V.type !== "final")
          return A;
        var X = V.parent;
        if (!X.parent)
          return A;
        A.push(
          yr(V.id, V.doneData),
          // TODO: deprecate - final states should not emit done events for their own state.
          yr(X.id, V.doneData ? Xo(V.doneData, o, i) : void 0)
        );
        var ce = X.parent;
        return ce.type === "parallel" && Ur(ce).every(function(Ce) {
          return Mo(r.configuration, Ce);
        }) && A.push(yr(ce.id)), A;
      })), R = x.map(function(V) {
        var A = V.onEntry, X = V.activities.map(function(ce) {
          return bd(ce);
        });
        return {
          type: "entry",
          actions: zt(s ? Oe(Oe([], pe(A), !1), pe(X), !1) : Oe(Oe([], pe(X), !1), pe(A), !1), d.machine.options.actions)
        };
      }).concat({
        type: "state_done",
        actions: $.map(function(V) {
          return ud(V);
        })
      }), C = Array.from(I).map(function(V) {
        return {
          type: "exit",
          actions: zt(Oe(Oe([], pe(V.onExit), !1), pe(V.activities.map(function(A) {
            return hd(A);
          })), !1), d.machine.options.actions)
        };
      }), D = C.concat({
        type: "transition",
        actions: zt(r.actions, this.machine.options.actions)
      }).concat(R);
      if (n) {
        var W = zt(Pe(Oe([], pe(t), !1).sort(function(V, A) {
          return A.order - V.order;
        }).map(function(V) {
          return V.onExit;
        })), this.machine.options.actions).filter(function(V) {
          return !ka(V);
        });
        return D.concat({
          type: "stop",
          actions: W
        });
      }
      return D;
    }, e.prototype.transition = function(t, n, r, o) {
      t === void 0 && (t = this.initialState);
      var i = Ke(n), a;
      if (t instanceof Nt)
        a = r === void 0 ? t : this.resolveState(Nt.from(t, r));
      else {
        var s = ve(t) ? this.resolve(Ko(this.getResolvedPath(t))) : this.resolve(t), l = r ?? this.machine.context;
        a = this.resolveState(Nt.from(s, l));
      }
      if (this.strict && !this.events.includes(i.name) && !nb(i.name))
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(i.name, "'"));
      var c = this._transition(a.value, a, i) || {
        transitions: [],
        configuration: [],
        exitSet: [],
        source: a,
        actions: []
      }, u = _r([], this.getStateNodes(a.value)), f = c.configuration.length ? _r(u, c.configuration) : u;
      return c.configuration = Oe([], pe(f), !1), this.resolveTransition(c, a, a.context, o, i);
    }, e.prototype.resolveRaisedTransition = function(t, n, r, o) {
      var i, a = t.actions;
      return t = this.transition(t, n, void 0, o), t._event = r, t.event = r.data, (i = t.actions).unshift.apply(i, Oe([], pe(a), !1)), t;
    }, e.prototype.resolveTransition = function(t, n, r, o, i) {
      var a, s, l, c, u = this;
      i === void 0 && (i = Sn);
      var f = t.configuration, d = !n || t.transitions.length > 0, m = d ? t.configuration : n ? n.configuration : [], p = Mo(m, this), h = d ? Sb(this.machine, f) : void 0, _ = n ? n.historyValue ? n.historyValue : t.source ? this.machine.historyValue(n.value) : void 0 : void 0, y = this.getActions(new Set(m), p, t, r, i, n, o), v = n ? T({}, n.activities) : {};
      try {
        for (var w = ue(y), x = w.next(); !x.done; x = w.next()) {
          var I = x.value;
          try {
            for (var $ = (l = void 0, ue(I.actions)), R = $.next(); !R.done; R = $.next()) {
              var C = R.value;
              C.type === Wo ? v[C.activity.id || C.activity.type] = C : C.type === yi && (v[C.activity.id || C.activity.type] = !1);
            }
          } catch (tt) {
            l = {
              error: tt
            };
          } finally {
            try {
              R && !R.done && (c = $.return) && c.call($);
            } finally {
              if (l)
                throw l.error;
            }
          }
        }
      } catch (tt) {
        a = {
          error: tt
        };
      } finally {
        try {
          x && !x.done && (s = w.return) && s.call(w);
        } finally {
          if (a)
            throw a.error;
        }
      }
      var D = pe(jr(this, n, r, i, y, o, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), W = D[0], V = D[1], A = pe(ob(W, ka), 2), X = A[0], ce = A[1], Ce = W.filter(function(tt) {
        var Gt;
        return tt.type === Wo && ((Gt = tt.activity) === null || Gt === void 0 ? void 0 : Gt.type) === qo;
      }), J = Ce.reduce(function(tt, Gt) {
        return tt[Gt.activity.id] = wb(Gt.activity, u.machine, V, i), tt;
      }, n ? T({}, n.children) : {}), j = new Nt({
        value: h || n.value,
        context: V,
        _event: i,
        // Persist _sessionid between states
        _sessionid: n ? n._sessionid : null,
        historyValue: h ? _ ? ib(_, h) : void 0 : n ? n.historyValue : void 0,
        history: !h || t.source ? n : void 0,
        actions: h ? ce : [],
        activities: h ? v : n ? n.activities : {},
        events: [],
        configuration: m,
        transitions: t.transitions,
        children: J,
        done: p,
        tags: Ll(m),
        machine: this
      }), G = r !== V;
      j.changed = i.name === xi || G;
      var me = j.history;
      me && delete me.history;
      var Ue = !p && (this._transient || f.some(function(tt) {
        return tt._transient;
      }));
      if (!d && (!Ue || i.name === go))
        return j;
      var Te = j;
      if (!p)
        for (Ue && (Te = this.resolveRaisedTransition(Te, {
          type: Zu
        }, i, o)); X.length; ) {
          var Re = X.shift();
          Te = this.resolveRaisedTransition(Te, Re._event, i, o);
        }
      var Nn = Te.changed || (me ? !!Te.actions.length || G || typeof me.value != typeof Te.value || !Sd(Te.value, me.value) : void 0);
      return Te.changed = Nn, Te.history = me, Te;
    }, e.prototype.getStateNode = function(t) {
      if (Rn(t))
        return this.machine.getStateNodeById(t);
      if (!this.states)
        throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
      var n = this.states[t];
      if (!n)
        throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
      return n;
    }, e.prototype.getStateNodeById = function(t) {
      var n = Rn(t) ? t.slice(Oa.length) : t;
      if (n === this.id)
        return this;
      var r = this.machine.idMap[n];
      if (!r)
        throw new Error("Child state node '#".concat(n, "' does not exist on machine '").concat(this.id, "'"));
      return r;
    }, e.prototype.getStateNodeByPath = function(t) {
      if (typeof t == "string" && Rn(t))
        try {
          return this.getStateNodeById(t.slice(1));
        } catch {
        }
      for (var n = Ea(t, this.delimiter).slice(), r = this; n.length; ) {
        var o = n.shift();
        if (!o.length)
          break;
        r = r.getStateNode(o);
      }
      return r;
    }, e.prototype.resolve = function(t) {
      var n, r = this;
      if (!t)
        return this.initialStateValue || Mn;
      switch (this.type) {
        case "parallel":
          return gr(this.initialStateValue, function(i, a) {
            return i ? r.getStateNode(a).resolve(t[a] || i) : Mn;
          });
        case "compound":
          if (ve(t)) {
            var o = this.getStateNode(t);
            return o.type === "parallel" || o.type === "compound" ? (n = {}, n[t] = o.initialStateValue, n) : t;
          }
          return Object.keys(t).length ? gr(t, function(i, a) {
            return i ? r.getStateNode(a).resolve(i) : Mn;
          }) : this.initialStateValue || {};
        default:
          return t || Mn;
      }
    }, e.prototype.getResolvedPath = function(t) {
      if (Rn(t)) {
        var n = this.machine.idMap[t.slice(Oa.length)];
        if (!n)
          throw new Error("Unable to find state node '".concat(t, "'"));
        return n.path;
      }
      return Ea(t, this.delimiter);
    }, Object.defineProperty(e.prototype, "initialStateValue", {
      get: function() {
        var t;
        if (this.__cache.initialStateValue)
          return this.__cache.initialStateValue;
        var n;
        if (this.type === "parallel")
          n = Ml(this.states, function(r) {
            return r.initialStateValue || Mn;
          }, function(r) {
            return r.type !== "history";
          });
        else if (this.initial !== void 0) {
          if (!this.states[this.initial])
            throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
          n = Qo(this.states[this.initial]) ? this.initial : (t = {}, t[this.initial] = this.states[this.initial].initialStateValue, t);
        } else
          n = {};
        return this.__cache.initialStateValue = n, this.__cache.initialStateValue;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getInitialState = function(t, n) {
      this._init();
      var r = this.getStateNodes(t);
      return this.resolveTransition({
        configuration: r,
        exitSet: [],
        transitions: [],
        source: void 0,
        actions: []
      }, void 0, n ?? this.machine.context, void 0);
    }, Object.defineProperty(e.prototype, "initialState", {
      /**
       * The initial State instance, which includes all actions to be executed from
       * entering the initial state.
       */
      get: function() {
        var t = this.initialStateValue;
        if (!t)
          throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
        return this.getInitialState(t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "target", {
      /**
       * The target state value of the history state node, if it exists. This represents the
       * default state value to transition to if no history value exists yet.
       */
      get: function() {
        var t;
        if (this.type === "history") {
          var n = this.config;
          ve(n.target) ? t = Rn(n.target) ? Ko(this.machine.getStateNodeById(n.target).path.slice(this.path.length - 1)) : n.target : t = n.target;
        }
        return t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getRelativeStateNodes = function(t, n, r) {
      return r === void 0 && (r = !0), r ? t.type === "history" ? t.resolveHistory(n) : t.initialStateNodes : [t];
    }, Object.defineProperty(e.prototype, "initialStateNodes", {
      get: function() {
        var t = this;
        if (Qo(this))
          return [this];
        if (this.type === "compound" && !this.initial)
          return [this];
        var n = To(this.initialStateValue);
        return Pe(n.map(function(r) {
          return t.getFromRelativePath(r);
        }));
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getFromRelativePath = function(t) {
      if (!t.length)
        return [this];
      var n = pe(t), r = n[0], o = n.slice(1);
      if (!this.states)
        throw new Error("Cannot retrieve subPath '".concat(r, "' from node with no states"));
      var i = this.getStateNode(r);
      if (i.type === "history")
        return i.resolveHistory();
      if (!this.states[r])
        throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
      return this.states[r].getFromRelativePath(o);
    }, e.prototype.historyValue = function(t) {
      if (Object.keys(this.states).length)
        return {
          current: t || this.initialStateValue,
          states: Ml(this.states, function(n, r) {
            if (!t)
              return n.historyValue();
            var o = ve(t) ? void 0 : t[r];
            return n.historyValue(o || n.initialStateValue);
          }, function(n) {
            return !n.history;
          })
        };
    }, e.prototype.resolveHistory = function(t) {
      var n = this;
      if (this.type !== "history")
        return [this];
      var r = this.parent;
      if (!t) {
        var o = this.target;
        return o ? Pe(To(o).map(function(a) {
          return r.getFromRelativePath(a);
        })) : r.initialStateNodes;
      }
      var i = tb(r.path, "states")(t).current;
      return ve(i) ? [r.getStateNode(i)] : Pe(To(i).map(function(a) {
        return n.history === "deep" ? r.getFromRelativePath(a) : [r.states[a[0]]];
      }));
    }, Object.defineProperty(e.prototype, "stateIds", {
      /**
       * All the state node IDs of this state node and its descendant state nodes.
       */
      get: function() {
        var t = this, n = Pe(Object.keys(this.states).map(function(r) {
          return t.states[r].stateIds;
        }));
        return [this.id].concat(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "events", {
      /**
       * All the event types accepted by this state node and its descendants.
       */
      get: function() {
        var t, n, r, o;
        if (this.__cache.events)
          return this.__cache.events;
        var i = this.states, a = new Set(this.ownEvents);
        if (i)
          try {
            for (var s = ue(Object.keys(i)), l = s.next(); !l.done; l = s.next()) {
              var c = l.value, u = i[c];
              if (u.states)
                try {
                  for (var f = (r = void 0, ue(u.events)), d = f.next(); !d.done; d = f.next()) {
                    var m = d.value;
                    a.add("".concat(m));
                  }
                } catch (p) {
                  r = {
                    error: p
                  };
                } finally {
                  try {
                    d && !d.done && (o = f.return) && o.call(f);
                  } finally {
                    if (r)
                      throw r.error;
                  }
                }
            }
          } catch (p) {
            t = {
              error: p
            };
          } finally {
            try {
              l && !l.done && (n = s.return) && n.call(s);
            } finally {
              if (t)
                throw t.error;
            }
          }
        return this.__cache.events = Array.from(a);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "ownEvents", {
      /**
       * All the events that have transitions directly from this state node.
       *
       * Excludes any inert events.
       */
      get: function() {
        var t = new Set(this.transitions.filter(function(n) {
          return !(!n.target && !n.actions.length && n.internal);
        }).map(function(n) {
          return n.eventType;
        }));
        return Array.from(t);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.resolveTarget = function(t) {
      var n = this;
      if (t !== void 0)
        return t.map(function(r) {
          if (!ve(r))
            return r;
          var o = r[0] === n.delimiter;
          if (o && !n.parent)
            return n.getStateNodeByPath(r.slice(1));
          var i = o ? n.key + r : r;
          if (n.parent)
            try {
              var a = n.parent.getStateNodeByPath(i);
              return a;
            } catch (s) {
              throw new Error("Invalid transition definition for state node '".concat(n.id, `':
`).concat(s.message));
            }
          else
            return n.getStateNodeByPath(i);
        });
    }, e.prototype.formatTransition = function(t) {
      var n = this, r = cb(t.target), o = "internal" in t ? t.internal : r ? r.some(function(l) {
        return ve(l) && l[0] === n.delimiter;
      }) : !0, i = this.machine.options.guards, a = this.resolveTarget(r), s = T(T({}, t), {
        actions: zt(_t(t.actions)),
        cond: sd(t.cond, i),
        target: a,
        source: this,
        internal: o,
        eventType: t.event,
        toJSON: function() {
          return T(T({}, s), {
            target: s.target ? s.target.map(function(l) {
              return "#".concat(l.id);
            }) : void 0,
            source: "#".concat(n.id)
          });
        }
      });
      return s;
    }, e.prototype.formatTransitions = function() {
      var t, n, r = this, o;
      if (!this.config.on)
        o = [];
      else if (Array.isArray(this.config.on))
        o = this.config.on;
      else {
        var i = this.config.on, a = qi, s = i[a], l = s === void 0 ? [] : s, c = fs(i, [typeof a == "symbol" ? a : a + ""]);
        o = Pe(Object.keys(c).map(function(v) {
          var w = Pn(v, c[v]);
          return w;
        }).concat(Pn(qi, l)));
      }
      var u = this.config.always ? Pn("", this.config.always) : [], f = this.config.onDone ? Pn(String(yr(this.id)), this.config.onDone) : [], d = Pe(this.invoke.map(function(v) {
        var w = [];
        return v.onDone && w.push.apply(w, Oe([], pe(Pn(String(Ir(v.id)), v.onDone)), !1)), v.onError && w.push.apply(w, Oe([], pe(Pn(String(zn(v.id)), v.onError)), !1)), w;
      })), m = this.after, p = Pe(Oe(Oe(Oe(Oe([], pe(f), !1), pe(d), !1), pe(o), !1), pe(u), !1).map(function(v) {
        return _t(v).map(function(w) {
          return r.formatTransition(w);
        });
      }));
      try {
        for (var h = ue(m), _ = h.next(); !_.done; _ = h.next()) {
          var y = _.value;
          p.push(y);
        }
      } catch (v) {
        t = {
          error: v
        };
      } finally {
        try {
          _ && !_.done && (n = h.return) && n.call(h);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return p;
    }, e;
  }()
);
function Vb(e, t) {
  return new Fb(e, t);
}
var Zo = gd;
function jb(e) {
  return "state" in e;
}
var Fl = function() {
};
function Ub(e) {
  return "getSnapshot" in e ? e.getSnapshot() : jb(e) ? e.state : void 0;
}
function Hb(e, t) {
  t === void 0 && (t = Ub);
  var n = Je(e) ? e : ia(e), r = ia(t(n.value)), o = function(i) {
    n.value.send(i);
  };
  return bt(n, function(i, a, s) {
    r.value = t(i);
    var l = i.subscribe({
      next: function(c) {
        return r.value = c;
      },
      error: Fl,
      complete: Fl
    }).unsubscribe;
    s(function() {
      return l();
    });
  }, {
    immediate: !0
  }), { state: r, send: o };
}
const Bb = {
  CLOSE: "closed",
  ERROR: "error",
  UPDATE_CONTEXT: {
    actions: Zo((e, t) => {
      const { ...n } = t;
      return n;
    })
  }
}, Ad = {
  store_id: null,
  product_id: null,
  variant_id: null,
  coupon: null,
  extra: null,
  quantity: null,
  product: null,
  variant: null,
  error: null,
  discord_data: null
}, Gb = {
  entry: Zo(Ad),
  on: {
    OPEN: {
      target: "checkout",
      actions: Zo((e, t) => ({
        store_id: t.store_id,
        product_id: t.product_id,
        variant_id: t.variant_id,
        coupon: t.coupon,
        extra: t.extra,
        quantity: t.quantity,
        email: t.email,
        customization: t.customization,
        affiliate: t.affiliate
      }))
    }
  }
}, Yb = {
  on: {
    FETCH: "checkout"
  }
}, Wb = {
  on: {
    VARIANT_SELECTION: "variant_selection",
    VARIANT_OVERVIEW: "overview"
  },
  invoke: {
    id: "openingCheckout",
    src: (e) => (t) => {
      if (!e.store_id || !e.product_id)
        throw {
          message: "This checkout button is not properly configured.",
          errors: {
            ...e.store_id ? { product_id: [] } : { store_id: [] }
          }
        };
      t(e.variant_id ? "VARIANT_OVERVIEW" : "VARIANT_SELECTION");
    }
  }
}, Zr = "https://sell.app/api/v2/fast-checkout";
function Oi(e, t) {
  for (const [n, r] of Object.entries(t))
    e = e.replace(`{${n}}`, r);
  return e;
}
function Zn(e) {
  return e === null ? !0 : typeof e == "string" ? e.trim() === "" : typeof e == "number" || typeof e == "boolean" ? !1 : Array.isArray(e) ? e.length === 0 : typeof e == "object" ? Object.entries(e).length === 0 : !e;
}
function Vl(e) {
  return !Zn(e);
}
function jl(e, t) {
  return Object.fromEntries(
    Object.entries(e).filter((n) => {
      const [r, o] = n;
      return t(o, r);
    })
  );
}
const Ai = {
  async get(e, t) {
    const n = new URL(e);
    return t && (n.search = new URLSearchParams(jl(t, Vl)).toString()), await Ul(n.toString(), {
      headers: {
        Accept: "application/json"
      }
    });
  },
  async post(e, t) {
    return await Ul(e, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jl(t, Vl))
    });
  }
}, qb = 422, Kb = 403;
async function Ul(e, t) {
  const n = await fetch(e, t);
  if (!n.ok && n.status !== qb && n.status !== Kb)
    throw new Error("Oops... Something went wrong while processing your request.");
  const r = await n.json();
  if (!n.ok)
    throw { code: n.status, message: r.message ?? "", errors: r.errors ?? {} };
  return r;
}
const Xb = `${Zr}/{store_id}/{product_id}/{variant_id}`;
async function Jb(e, t, n, r) {
  const o = Oi(Xb, { store_id: e, product_id: t, variant_id: n });
  return await Ai.post(o, r);
}
const Qb = `${Zr}/{store_id}/{product_id}`;
async function Nd(e, t, n = {}) {
  const r = Oi(Qb, { store_id: e, product_id: t });
  return await Ai.get(r, n);
}
const Zb = `${Zr}/{store_id}/{product_id}/{variant_id}`;
async function eh(e, t, n, r = {}) {
  const o = Oi(Zb, { store_id: e, product_id: t, variant_id: n });
  return await Ai.get(o, r);
}
const { assign: th, pure: nh, send: rh } = Si, Ni = nh((e, t) => {
  const n = typeof t.data == "object" && "errors" in t.data;
  let r = !n;
  const o = n ? t.data : { message: t.data, errors: {} };
  if (!n || "store_id" in o.errors || "product_id" in o.errors || "variant_id" in o.errors || o.code === 403) {
    const a = " Please contact the seller to let them know.";
    o.code !== 403 ? "store_id" in o.errors ? o.message = "This store could not be found." + a : "product_id" in o.errors ? o.message = "This product could not  be found." + a : "variant_id" in o.errors ? o.message = "This variant could not be found." + a : o.message = "It looks like something went wrong." : o.message === "You have been blacklisted" ? o.message = "You have either been blacklisted by the store owner, or you are using a VPN/Proxy. If you are using a proxy, please disable it." : o.message === "Action not allowed. This store is on hold." ? o.message = "This store is on hold: Creator has not paid their invoice yet" + a : o.message = "It looks like something went wrong." + a, o.errors = {}, r = !0;
  }
  const i = [
    th(
      () => ({
        error: o
      })
    )
  ];
  return r && i.push(rh("ERROR")), i;
}), { assign: Hl, send: oh } = Si, ih = {
  on: {
    NEXT: {
      target: "overview",
      actions: Hl((e, t) => ({
        variant_id: t.variant_id
      }))
    }
  },
  meta: {
    component: "VariantSelection"
  },
  initial: "fetchProductVariantList",
  states: {
    fetchProductVariantList: {
      tags: ["loading"],
      on: {
        FINISH_FETCH: "selectProductVariant"
      },
      invoke: {
        id: "fetchVariantList",
        src: async (e) => {
          var t;
          return ((t = e.product) == null ? void 0 : t.id.toString()) === e.product_id ? e.product : await Nd(e.store_id, e.product_id);
        },
        onDone: {
          actions: [
            Hl(
              (e, t) => ({
                product: t.data,
                error: null
              })
            ),
            oh((e, t) => t.data.variants.length === 1 ? { type: "NEXT", variant_id: t.data.variants[0].id.toString() } : { type: "FINISH_FETCH" })
          ]
        },
        onError: {
          target: "#embed.error",
          actions: Ni
        }
      }
    },
    selectProductVariant: {}
  }
}, { assign: ah, send: Bl } = Si, sh = {
  on: {
    PREVIOUS: "variant_selection",
    NEXT: "payment_method",
    FETCH: {
      internal: !0,
      target: [".fetchStates.fetching"]
    },
    FINISH_FETCH: {
      internal: !0,
      target: [".fetchStates.idle", ".overviewStates.idle"]
    }
  },
  meta: {
    component: "Overview"
  },
  type: "parallel",
  states: {
    fetchStates: {
      initial: "fetching",
      states: {
        fetching: {
          tags: ["fetching"],
          invoke: {
            id: "fetchProductVariant",
            src: async (e) => {
              var t;
              return {
                product: ((t = e.product) == null ? void 0 : t.id.toString()) === e.product_id ? e.product : await Nd(e.store_id, e.product_id, { withoutVariants: !0 }),
                variant: await eh(e.store_id, e.product_id, e.variant_id, {
                  coupon: e.coupon,
                  quantity: e.quantity,
                  extra: e.extra
                })
              };
            },
            onDone: {
              actions: [
                ah(
                  (e, t) => ({
                    product: t.data.product,
                    variant: t.data.variant,
                    quantity: e.quantity ?? t.data.variant.minimum_purchase_quantity,
                    error: null
                  })
                ),
                Bl("FINISH_FETCH")
              ]
            },
            onError: {
              actions: [Ni, Bl("FINISH_FETCH")]
            }
          }
        },
        idle: {}
      }
    },
    overviewStates: {
      initial: "loading",
      states: {
        loading: {
          tags: ["loading"]
        },
        idle: {}
      }
    }
  }
}, lh = {
  on: {
    PREVIOUS: "overview",
    CONNECT_DISCORD: "connect_discord",
    CUSTOMER_EMAIL: "customer_email"
  },
  meta: {
    component: "PaymentMethod"
  }
}, ch = {
  on: {
    NEXT: "final_step",
    CONNECT_DISCORD: "connect_discord",
    PAYMENT_METHODS: "payment_method"
  },
  meta: {
    component: "CustomerEmail"
  }
}, uh = `${Zr}/{store_id}/connect-discord`;
async function dh(e, t) {
  const n = Oi(uh, { store_id: e });
  return await Ai.get(n, t);
}
const { assign: fh, send: Gl } = Si, mh = {
  on: {
    PREVIOUS: "payment_method",
    NEXT: "customer_email",
    FETCH: {
      internal: !0,
      target: [".fetchStates.fetching"]
    },
    FINISH_FETCH: {
      internal: !0,
      target: [".fetchStates.idle", ".overviewStates.idle"]
    }
  },
  meta: {
    component: "ConnectDiscord"
  },
  type: "parallel",
  states: {
    fetchStates: {
      initial: "fetching",
      states: {
        fetching: {
          tags: ["fetching"],
          invoke: {
            id: "fetchingDiscordData",
            src: async (e) => {
              var t;
              return await dh(e.store_id, {
                discord_token: ((t = e.discord_data) == null ? void 0 : t.discord_token) ?? sessionStorage.getItem("discord_token"),
                origin: window.location.href
              });
            },
            onDone: {
              actions: [
                fh((e, t) => ({
                  discord_data: t.data,
                  error: null
                })),
                Gl("FINISH_FETCH")
              ]
            },
            onError: {
              actions: [Ni, Gl("FINISH_FETCH")]
            }
          }
        },
        idle: {}
      }
    },
    overviewStates: {
      initial: "loading",
      states: {
        loading: {
          tags: ["loading"]
        },
        idle: {}
      }
    }
  }
}, ph = {
  on: {
    PREVIOUS: "customer_email",
    CONNECT_DISCORD: "connect_discord",
    PAYMENT_METHODS: "payment_method"
  },
  meta: {
    component: "FinalStep"
  },
  initial: "checkFinalStep",
  states: {
    checkFinalStep: {
      on: {
        CHECKOUT: "checkout_product"
      }
    },
    checkout_product: {
      invoke: {
        id: "checkout_product",
        src: async (e) => await Jb(e.store_id, e.product_id, e.variant_id, {
          coupon: e.coupon,
          quantity: e.quantity,
          extra: e.extra,
          customer_email: Ee.customer_email,
          payment_method: Ee.payment_method,
          additional_information: Ee.additional_information,
          vat_id: Ee.vat_id,
          country: Ee.country,
          discord_token: Ee.discord_token,
          affiliate: e.affiliate
        }),
        onDone: {
          target: "#embed.invoice_processed",
          actions: [
            Zo(
              (e, t) => ({
                order: t.data.payment_url,
                error: null
              })
            ),
            (e, t) => {
              window.open(t.data.payment_url, "_blank");
            }
          ]
        },
        onError: {
          target: "#embed.checkout.customer_email",
          actions: Ni
        }
      }
    }
  }
}, bh = {
  initial: "entry",
  states: {
    entry: Wb,
    variant_selection: ih,
    overview: sh,
    payment_method: lh,
    connect_discord: mh,
    customer_email: ch,
    final_step: ph
  }
}, hh = {}, vh = {
  closed: Gb,
  error: Yb,
  checkout: bh,
  invoice_processed: hh
}, gh = {
  id: "embed",
  initial: "closed",
  context: Ad,
  predictableActionArguments: !0,
  on: Bb,
  states: vh
}, yh = Vb(gh), _h = Od(yh).start();
function ut() {
  const { state: e, send: t } = Hb(_h);
  return {
    context: F(() => e.value.context),
    send: t,
    state: e
  };
}
const Ee = ir({
  customer_email: "",
  payment_method: null,
  additional_information: {},
  vat_id: "",
  country: "",
  discord_token: ""
});
function Id(e, t) {
  return P(), Y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    k("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function wh(e, t) {
  return P(), Y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    k("path", {
      "fill-rule": "evenodd",
      d: "M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function xh(e, t) {
  return P(), Y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    k("path", {
      "fill-rule": "evenodd",
      d: "M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Cd(e, t) {
  return P(), Y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    k("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function Eh(e, t) {
  return P(), Y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    k("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    })
  ]);
}
const qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, kh = {
  name: "MySpinner"
}, Sh = {
  class: "embed-animate-spin embed-h-5 embed-w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Oh = /* @__PURE__ */ k("circle", {
  class: "embed-opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Ah = /* @__PURE__ */ k("path", {
  class: "embed-opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Nh = [
  Oh,
  Ah
];
function Ih(e, t, n, r, o, i) {
  return P(), Y("svg", Sh, Nh);
}
const Ch = /* @__PURE__ */ qe(kh, [["render", Ih]]), Th = de({
  name: "MyButton",
  components: {
    Spinner: Ch
  },
  props: {
    loading: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    }
  }
}), Ph = ["disabled"];
function Mh(e, t, n, r, o, i) {
  const a = te("Spinner");
  return P(), Y("button", {
    class: ge(["embed-inline-flex embed-items-center embed-justify-center sm:embed-text-sm embed-px-4 embed-py-2 embed-rounded-full focus:embed-ring-0 focus:embed-outline-none disabled:embed-opacity-75 disabled:embed-cursor-not-allowed embed-transition embed-duration-200 embed-ease-in-out", {
      "embed-font-semibold embed-text-zinc-300 embed-shadow-inner embed-bg-zinc-950 hover:embed-text-white hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:[background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.950)_25%,_theme(colors.zinc.950)_75%,_theme(colors.zinc.400)_100%)_border-box] dark:hover:embed-shadow-zinc-600 dark:focus:embed-shadow-zinc-600 dark:embed-border dark:embed-border-transparent": typeof e.$attrs.primary < "u",
      "embed-bg-zinc-50 embed-text-zinc-800 embed-shadow-inner embed-shadow-zinc-200 hover:embed-bg-zinc-100 hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:embed-text-zinc-300 dark:embed-shadow-neutral-900 dark:embed-bg-zinc-700 dark:hover:embed-shadow-black dark:focus:embed-shadow-neutral-800 embed-font-medium": typeof e.$attrs.outline < "u",
      "embed-bg-red-600 hover:embed-bg-red-700 embed-text-white focus:embed-ring-offset-2 embed-ring-offset-transparent focus:embed-ring-red-500": typeof e.$attrs.danger < "u"
    }]),
    disabled: e.disabled || e.loading
  }, [
    e.loading ? (P(), ze(a, { key: 1 })) : jo(e.$slots, "default", { key: 0 })
  ], 10, Ph);
}
const Ii = /* @__PURE__ */ qe(Th, [["render", Mh]]), Rh = de({
  name: "VariantSelection",
  components: {
    RadioGroup: Gu,
    RadioGroupDescription: qu,
    RadioGroupLabel: Wu,
    RadioGroupOption: Yu,
    DialogTitle: ln,
    MyButton: Ii
  },
  setup() {
    const { context: e, send: t, state: n } = ut(), r = F(() => e.value.product), o = re(null);
    function i() {
      Zn(o) || t({
        type: "NEXT",
        variant_id: o.value
      });
    }
    return {
      state: n,
      product: r,
      selected_variant: o,
      selectVariant: i,
      context: e
    };
  }
}), Dh = { class: "embed-flex embed-flex-col embed-px-4 embed-pt-5 embed-pb-4 sm:embed-p-6" }, zh = /* @__PURE__ */ k("p", { class: "embed-mb-4 embed-font-normal embed-text-center embed-text-zinc-800 dark:embed-text-zinc-400 embed-text-xs" }, "Select the product you'd like to purchase", -1), Lh = { class: "embed-space-y-4" }, $h = { class: "embed-flex embed-items-center embed-flex-grow-0" }, Fh = { class: "embed-text-sm" }, Vh = { class: "embed-flex embed-flex-col sm:embed-flex-row sm:embed-justify-between embed-text-left embed-mt-2" }, jh = { class: "embed-flex embed-text-sm sm:embed-mt-0 sm:embed-block sm:embed-mr-4 sm:embed-text-right embed-w-auto embed-flex-shrink-0" }, Uh = /* @__PURE__ */ k("div", {
  class: "embed-absolute embed--inset-px embed-rounded-lg embed-pointer-events-none",
  "aria-hidden": "true"
}, null, -1), Hh = { class: "embed-mt-6 embed-w-full embed-justify-end embed-flex embed-items-center embed-col-span-2 embed-space-x-2" };
function Bh(e, t, n, r, o, i) {
  const a = te("DialogTitle"), s = te("RadioGroupLabel"), l = te("RadioGroupDescription"), c = te("RadioGroupOption"), u = te("RadioGroup"), f = te("MyButton");
  return P(), Y("div", null, [
    k("div", Dh, [
      H(a, {
        as: "h2",
        class: "embed-mb-1 embed-font-bold embed-text-center embed-text-black dark:embed-text-white embed-text-xl"
      }, {
        default: ne(() => [
          _e(oe(e.product.title), 1)
        ]),
        _: 1
      }),
      zh,
      H(u, {
        modelValue: e.selected_variant,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => e.selected_variant = d)
      }, {
        default: ne(() => [
          H(s, { class: "embed-sr-only" }, {
            default: ne(() => [
              _e("Select the product variant")
            ]),
            _: 1
          }),
          k("div", Lh, [
            (P(!0), Y(Me, null, Yn(e.product.variants, (d) => (P(), ze(c, {
              key: d.id,
              as: "template",
              value: d.id
            }, {
              default: ne(({ checked: m }) => [
                k("div", {
                  class: ge(["embed-flex embed-flex-col dark:embed-border dark:embed-border-transparent embed-shadow-inner", [m ? "embed-bg-white dark:[background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] embed-shadow-zinc-400 dark:embed-shadow-black" : "embed-shadow-zinc-200 hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:embed-shadow-neutral-900 dark:hover:embed-shadow-black dark:focus:embed-shadow-neutral-800 embed-bg-white dark:[background:linear-gradient(theme(colors.zinc.800),_theme(colors.zinc.800))_padding-box,_conic-gradient(theme(colors.zinc.500),_theme(colors.zinc.800)_25%,_theme(colors.zinc.800)_75%,_theme(colors.zinc.500)_100%)_border-box]", "embed-transition embed-duration-300 embed-ease-in-out embed-relative embed-rounded-lg embed-px-6 embed-py-4 embed-cursor-pointer sm:embed-flex sm:embed-justify-between focus:embed-outline-none"]])
                }, [
                  k("div", $h, [
                    k("div", Fh, [
                      H(s, {
                        as: "p",
                        class: "embed-font-bold embed-text-black dark:embed-text-white",
                        style: { "text-transform": "embed-capitalize" }
                      }, {
                        default: ne(() => [
                          _e(oe(d.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  H(l, {
                    as: "div",
                    class: "embed-flex embed-text-xs embed-text-left"
                  }, {
                    default: ne(() => [
                      k("div", {
                        class: ge(["embed-flex embed-text-xs embed-text-left", [m ? "embed-text-black dark:embed-text-zinc-200" : "embed-text-zinc-500 dark:embed-text-zinc-400"]])
                      }, oe(d.description), 3)
                    ]),
                    _: 2
                  }, 1024),
                  k("div", Vh, [
                    k("div", jh, [
                      k("div", {
                        class: ge([m ? "embed-text-black dark:embed-text-zinc-200 embed-font-bold" : "embed-text-zinc-500 dark:embed-text-zinc-400 embed-font-medium"])
                      }, oe(d.price), 3)
                    ]),
                    H(l, {
                      as: "div",
                      class: "embed-flex embed-text-xs embed-text-left"
                    }, {
                      default: ne(() => [
                        k("div", {
                          class: ge(["embed-flex embed-text-xs embed-text-left", [m ? "embed-text-black dark:embed-text-zinc-200" : "embed-text-zinc-500 dark:embed-text-zinc-400"]])
                        }, oe(d.stock) + " in stock", 3)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  Uh
                ], 2)
              ]),
              _: 2
            }, 1032, ["value"]))), 128))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      k("div", Hh, [
        H(f, {
          loading: e.state.hasTag("loading"),
          class: ge(["embed-w-full", e.selected_variant == null ? "embed-hidden" : ""]),
          primary: "",
          onClick: t[1] || (t[1] = (d) => e.selectVariant())
        }, {
          default: ne(() => [
            _e("Continue")
          ]),
          _: 1
        }, 8, ["loading", "class"])
      ])
    ])
  ]);
}
const Gh = /* @__PURE__ */ qe(Rh, [["render", Bh]]), Yh = de({
  name: "NumberInput",
  components: {
    MinusIcon: wh,
    PlusIcon: xh
  },
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { context: n } = ut(), r = n.value.variant.quantity_increments ?? 1;
    function o(u) {
      u = parseInt(u.toString()), isNaN(u) && (u = 0), u < (e.min ?? 1) ? u = e.min : e.max !== null && u > e.max && (u = e.max), t("update:modelValue", u);
    }
    const i = F(() => e.min !== e.max), a = F(() => i.value && (e.max ? e.modelValue < e.max : !0) && r > 0);
    function s() {
      a.value && o(e.modelValue + r);
    }
    const l = F(() => i.value && e.modelValue > (e.min ?? 1));
    function c() {
      l.value && o(e.modelValue - r);
    }
    return {
      emitUpdate: o,
      canModify: i,
      canIncrement: a,
      increment: s,
      canDecrement: l,
      decrement: c
    };
  }
}), Wh = { class: "embed-relative embed-group" }, qh = ["disabled"], Kh = ["value", "disabled"], Xh = ["disabled"];
function Jh(e, t, n, r, o, i) {
  const a = te("MinusIcon"), s = te("PlusIcon");
  return P(), Y("div", Wh, [
    k("button", {
      class: "embed-absolute embed-inset-y-0 embed-left-0 embed-pl-3 embed-flex embed-items-center embed-text-black dark:embed-text-white disabled:embed-opacity-50 disabled:embed-cursor-not-allowed",
      disabled: !e.canDecrement,
      onClick: t[0] || (t[0] = (l) => e.decrement())
    }, [
      H(a, { class: "embed-w-5 embed-h-5" })
    ], 8, qh),
    k("input", Ar(e.$attrs, {
      value: e.modelValue,
      class: "embed-w-full embed-rounded-lg embed-text-center embed-border embed-border-transparent embed-bg-white dark:[background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] embed-text-black dark:embed-text-white embed-placeholder-neutral-500 focus:embed-placeholder-neutral-800 dark:embed-placeholder-neutral-500 dark:focus:embed-placeholder-neutral-400 focus:embed-ring-0 embed-shadow-inner embed-shadow-zinc-200 hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:embed-shadow-black dark:hover:embed-shadow-zinc-600 dark:focus:embed-shadow-zinc-600 embed-transition embed-duration-200 embed-ease-in-out disabled:embed-bg-zinc-100 dark:disabled:embed-bg-zinc-900 disabled:embed-opacity-70",
      type: "text",
      inputmode: "numeric",
      disabled: !e.canModify,
      onInput: t[1] || (t[1] = (l) => e.emitUpdate(l.target.value))
    }), null, 16, Kh),
    k("button", {
      class: "embed-absolute embed-inset-y-0 embed-right-0 embed-pr-3 embed-flex embed-items-center embed-text-black dark:embed-text-white disabled:embed-opacity-50 disabled:embed-cursor-not-allowed",
      disabled: !e.canIncrement,
      onClick: t[2] || (t[2] = (l) => e.increment())
    }, [
      H(s, { class: "embed-w-5 embed-h-5" })
    ], 8, Xh)
  ]);
}
const Qh = /* @__PURE__ */ qe(Yh, [["render", Jh]]), Zh = de({
  name: "ProductOverview",
  components: {
    MyButton: Ii,
    DialogTitle: ln,
    NumberInput: Qh
  },
  setup() {
    const { context: e, state: t, send: n } = ut(), r = ir({
      coupon: e.value.coupon ?? "",
      quantity: e.value.quantity ?? 0,
      extra: e.value.extra ?? "0.00"
    }), o = re(e.value.extra !== void 0 && e.value.extra !== "0.00"), i = re(e.value.coupon == "");
    function a(f, d) {
      n([
        {
          type: "UPDATE_CONTEXT",
          [f]: d ?? r[f]
        },
        "FETCH"
      ]);
    }
    bt(
      () => r.quantity,
      (f) => {
        a("quantity", f);
      }
    );
    const s = F(() => e.value.product), l = F(() => e.value.variant), c = F(() => l.value.stock === !1), u = F(() => t.value.hasTag("fetching"));
    return {
      product: s,
      variant: l,
      send: n,
      data: r,
      context: e,
      orMore: o,
      applyCoupon: i,
      apply: a,
      isSoldOut: c,
      isLoading: u
    };
  }
}), e0 = {
  key: 0,
  class: "aspect-w-3 aspect-h-1 embed-flex-shrink-0 embed-rounded-t-2xl embed-overflow-hidden embed-bg-inherit"
}, t0 = ["src", "alt"], n0 = { class: "embed-flex embed-flex-col embed-px-4 embed-pt-5 embed-pb-4 sm:embed-p-6 embed-space-y-3" }, r0 = ["innerHTML"], o0 = { class: "embed-flex embed-flex-col embed-mx-auto embed-items-center" }, i0 = {
  key: 0,
  class: "embed-text-xl embed-text-center embed-font-light embed-text-black dark:embed-text-white embed-line-through"
}, a0 = { class: "embed-text-xl embed-text-center embed-text-black dark:embed-text-white embed-font-bold" }, s0 = { key: 0 }, l0 = { class: "embed-flex embed-flex-col" }, c0 = { class: "embed-flex embed-rounded-md embed-w-full" }, u0 = { class: "embed-relative embed-flex embed-items-stretch embed-flex-grow focus-within:embed-z-10" }, d0 = /* @__PURE__ */ k("span", null, "Add", -1), f0 = ["textContent"], m0 = { class: "embed-text-zinc-900 dark:embed-text-zinc-100 embed-overflow-auto embed-overscroll-contain embed-h-32 embed-text-sm embed-w-full embed-text-center embed-px-4 embed-py-5 sm:embed-p-6 embed-rounded-xl embed-bg-neutral-50 embed-p-2 embed-shadow-inner embed-shadow-zinc-400 dark:embed-bg-zinc-950 dark:embed-shadow-black" }, p0 = ["innerHTML"], b0 = { class: "embed-flex embed-flex-col embed-w-full" }, h0 = { class: "embed-flex embed-flex-col embed-gap-1 embed-rounded-md embed-shadow-sm embed-flex-shrink-0" }, v0 = { class: "embed-flex embed-rounded-md" }, g0 = { class: "embed-relative embed-flex embed-items-stretch embed-flex-grow focus-within:embed-z-10" }, y0 = /* @__PURE__ */ k("span", null, "Apply", -1), _0 = ["textContent"], w0 = {
  key: 3,
  class: "embed-mt-3 embed-w-3/4 embed-mx-auto embed-text-center embed-p-2 embed-bg-emerald-600 dark:embed-bg-emerald-900 embed-text-white embed-text-xs embed-rounded-full"
}, x0 = {
  key: 1,
  class: "embed-flex embed-flex-col embed-gap-1"
}, E0 = { class: "embed-flex embed-space-x-2" }, k0 = { class: "embed-inline-block embed-text-left embed-text-xs embed-font-medium embed-ml-11 embed-text-black dark:embed-text-white embed-space-x-1" }, S0 = {
  key: 0,
  class: "embed-text-lg"
}, O0 = { key: 1 }, A0 = /* @__PURE__ */ k("span", null, "in stock ", -1), N0 = ["textContent"];
function I0(e, t, n, r, o, i) {
  var c, u, f, d, m, p, h, _, y, v, w, x, I, $;
  const a = te("DialogTitle"), s = te("MyButton"), l = te("NumberInput");
  return P(), Y("div", null, [
    ((c = e.variant.images) == null ? void 0 : c.length) > 0 ? (P(), Y("div", e0, [
      k("img", {
        class: "embed-object-contain",
        src: e.variant.images[0],
        alt: e.variant.title
      }, null, 8, t0)
    ])) : xe("", !0),
    k("div", n0, [
      k("div", null, [
        H(a, {
          as: "h1",
          class: "embed-font-bold embed-text-center embed-text-black dark:embed-text-white embed-text-xl"
        }, {
          default: ne(() => [
            _e(oe(e.product.title), 1)
          ]),
          _: 1
        }),
        e.variant.description !== "Default Variant" && e.variant.description !== "default variant" ? (P(), Y("p", {
          key: 0,
          class: "dark:embed-text-zinc-400 embed-text-xs",
          innerHTML: e.variant.description
        }, null, 8, r0)) : xe("", !0)
      ]),
      k("div", o0, [
        e.variant.price !== e.variant.total ? (P(), Y("div", i0, oe(e.variant.price), 1)) : xe("", !0),
        k("div", a0, oe(e.variant.total), 1)
      ]),
      e.variant.humble ? (P(), Y("div", s0, [
        e.orMore ? (P(), ze(qn, {
          key: 0,
          appear: "",
          "enter-from-class": "embed-opacity-0 embed-scale-0",
          "enter-to-class": "opacity-1 embed-scale-100",
          "enter-active-class": "embed-transition embed-transform origin",
          "leave-from-class": "opacity-1 embed-scale-100",
          "leave-to-class": "embed-opacity-0 embed-scale-0",
          "leave-active-class": "embed-transition embed-transform"
        }, {
          default: ne(() => {
            var R, C, D, W, V;
            return [
              k("div", l0, [
                k("div", c0, [
                  k("div", u0, [
                    Vo(k("input", {
                      id: "extra",
                      "onUpdate:modelValue": t[0] || (t[0] = (A) => e.data.extra = A),
                      type: "number",
                      name: "extra",
                      class: "embed-rounded-md embed-rounded-r-none embed-border-r-0 embed-w-full embed-bg-white dark:[background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] embed-text-black dark:embed-text-white embed-placeholder-neutral-500 focus:embed-placeholder-neutral-800 dark:embed-placeholder-neutral-500 dark:focus:embed-placeholder-neutral-400 focus:embed-ring-0 embed-shadow-inner embed-shadow-zinc-200 hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:embed-shadow-black dark:hover:embed-shadow-zinc-600 dark:focus:embed-shadow-zinc-600 embed-transition embed-duration-200 embed-ease-in-out disabled:embed-bg-zinc-100 dark:disabled:embed-bg-zinc-900 disabled:embed-opacity-70 embed-border embed-border-transparent focus:embed-border-transparent",
                      placeholder: "0.00"
                    }, null, 512), [
                      [wl, e.data.extra]
                    ])
                  ]),
                  H(s, {
                    primary: "",
                    class: "embed-rounded-l-none",
                    onClick: t[1] || (t[1] = (A) => e.apply("extra"))
                  }, {
                    default: ne(() => [
                      d0
                    ]),
                    _: 1
                  })
                ]),
                (D = (C = (R = e.context.error) == null ? void 0 : R.errors) == null ? void 0 : C.extra) != null && D[0] ? (P(), Y("p", {
                  key: 0,
                  class: "embed-ml-1.5 embed-text-left embed-text-sm embed-text-red-600 dark:embed-text-red embed-w-full",
                  textContent: oe((V = (W = e.context.error) == null ? void 0 : W.errors) == null ? void 0 : V.extra[0])
                }, null, 8, f0)) : xe("", !0)
              ])
            ];
          }),
          _: 1
        })) : (P(), Y("button", {
          key: 1,
          class: "dark:embed-border dark:embed-border-transparent embed-inline-flex embed-items-center embed-justify-center sm:embed-text-sm embed-px-2 embed-py-1 embed-rounded-full focus:embed-ring-0 focus:embed-outline-none embed-transition embed-duration-200 embed-ease-in-out embed-font-semibold embed-text-zinc-300 embed-shadow-inner [background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.500),_theme(colors.zinc.500)_25%,_theme(colors.zinc.500)_75%,_theme(colors.zinc.500)_100%)_border-box] hover:embed-text-white hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:[background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.950)_25%,_theme(colors.zinc.950)_75%,_theme(colors.zinc.400)_100%)_border-box] dark:hover:embed-shadow-zinc-600 dark:focus:embed-shadow-zinc-600",
          onClick: t[2] || (t[2] = (R) => e.orMore = !0)
        }, "Add more"))
      ])) : xe("", !0),
      k("div", m0, [
        k("p", {
          innerHTML: e.product.description
        }, null, 8, p0)
      ]),
      k("div", b0, [
        e.applyCoupon ? (P(), ze(qn, {
          key: 0,
          appear: "",
          "enter-from-class": "embed-opacity-0 embed-scale-0",
          "enter-to-class": "opacity-1 embed-scale-100",
          "enter-active-class": "embed-transition embed-transform origin",
          "leave-from-class": "opacity-1 embed-scale-100",
          "leave-to-class": "embed-opacity-0 embed-scale-0",
          "leave-active-class": "embed-transition embed-transform"
        }, {
          default: ne(() => [
            k("div", h0, [
              k("div", v0, [
                k("div", g0, [
                  Vo(k("input", {
                    "onUpdate:modelValue": t[3] || (t[3] = (R) => e.data.coupon = R),
                    type: "text",
                    name: "coupon-code",
                    class: "embed-rounded-md embed-rounded-r-none embed-border-r-0 embed-w-full embed-bg-white dark:[background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] embed-text-black dark:embed-text-white embed-placeholder-neutral-500 focus:embed-placeholder-neutral-800 dark:embed-placeholder-neutral-500 dark:focus:embed-placeholder-neutral-400 focus:embed-ring-0 embed-shadow-inner embed-shadow-zinc-200 hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:embed-shadow-black dark:hover:embed-shadow-zinc-600 dark:focus:embed-shadow-zinc-600 embed-transition embed-duration-200 embed-ease-in-out disabled:embed-bg-zinc-100 dark:disabled:embed-bg-zinc-900 disabled:embed-opacity-70 embed-border embed-border-transparent focus:embed-border-transparent",
                    placeholder: "Enter coupon code"
                  }, null, 512), [
                    [wl, e.data.coupon]
                  ])
                ]),
                H(s, {
                  primary: "",
                  loading: e.isLoading,
                  type: "button",
                  class: "embed-relative embed-inline-flex embed-items-center embed-space-x-2 embed-rounded-l-none",
                  onClick: t[4] || (t[4] = (R) => e.apply("coupon"))
                }, {
                  default: ne(() => [
                    y0
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ])
          ]),
          _: 1
        })) : (P(), Y("button", {
          key: 1,
          class: "embed-py-2 embed-text-zinc-500 hover:embed-text-zinc-800 dark:hover:embed-text-zinc-200 embed-font-semibold embed-mx-auto embed-transition embed-duration-100 embed-ease-in-out",
          onClick: t[5] || (t[5] = (R) => e.applyCoupon = !0)
        }, "Have a coupon code?")),
        (d = (f = (u = e.context.error) == null ? void 0 : u.errors) == null ? void 0 : f.coupon) != null && d[0] ? (P(), Y("p", {
          key: 2,
          class: "embed-mt-1 embed-ml-1.5 embed-text-left embed-text-xs embed-text-red-600 dark:embed-text-red embed-w-full",
          textContent: oe((p = (m = e.context.error) == null ? void 0 : m.errors) == null ? void 0 : p.coupon[0])
        }, null, 8, _0)) : xe("", !0),
        e.variant.coupon && ((y = (_ = (h = e.context.error) == null ? void 0 : h.errors) == null ? void 0 : _.coupon) == null ? void 0 : y[0]) === void 0 ? (P(), Y("p", w0, "A " + oe(e.variant.coupon) + " coupon has successfully been applied!", 1)) : xe("", !0)
      ]),
      e.variant.visibility == "PUBLIC" || e.variant.visibility == "HIDDEN" ? (P(), Y("div", x0, [
        k("div", E0, [
          H(l, {
            modelValue: e.data.quantity,
            "onUpdate:modelValue": t[6] || (t[6] = (R) => e.data.quantity = R),
            min: e.variant.minimum_purchase_quantity,
            max: e.variant.maximum_purchase_quantity
          }, null, 8, ["modelValue", "min", "max"]),
          H(s, {
            loading: e.isLoading,
            disabled: e.isSoldOut,
            style: Kr({ "background-color": e.context.customization.theme }),
            class: "embed-w-full disabled:embed-bg-red-600 !embed-text-lg embed-text-white embed-font-medium embed-rounded-md disabled:focus:embed-ring-zinc-500",
            primary: "",
            onClick: t[7] || (t[7] = (R) => e.send("NEXT"))
          }, {
            default: ne(() => [
              _e(oe(e.isSoldOut ? "Sold out" : "Buy now"), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled", "style"])
        ]),
        k("p", k0, [
          e.variant.stock ? (P(), Y("span", O0, oe(e.variant.stock), 1)) : (P(), Y("span", S0, "0")),
          A0
        ]),
        (x = (w = (v = e.context.error) == null ? void 0 : v.errors) == null ? void 0 : w.quantity) != null && x[0] ? (P(), Y("p", {
          key: 0,
          class: "embed-ml-1.5 embed-text-left embed-text-sm embed-text-red-600 dark:embed-text-red embed-w-full",
          textContent: oe(($ = (I = e.context.error) == null ? void 0 : I.errors) == null ? void 0 : $.quantity[0])
        }, null, 8, N0)) : xe("", !0)
      ])) : xe("", !0)
    ])
  ]);
}
const C0 = /* @__PURE__ */ qe(Zh, [["render", I0]]), T0 = de({
  name: "MyNavigator",
  components: {
    MyButton: Ii
  },
  props: {
    back: {
      type: Object,
      required: !1,
      default: () => ({
        type: "PREVIOUS"
      })
    },
    next: {
      type: Object,
      required: !1,
      default: () => ({
        type: "NEXT"
      })
    },
    text: {
      type: String,
      required: !1,
      default: () => "Continue"
    }
  },
  setup() {
    const { state: e, send: t } = ut();
    return {
      send: t,
      state: e
    };
  }
}), P0 = { class: "embed-mt-6 embed-w-full embed-justify-between embed-flex embed-items-center embed-col-span-2 embed-space-x-2" };
function M0(e, t, n, r, o, i) {
  const a = te("MyButton");
  return P(), Y("div", P0, [
    H(a, {
      outline: "",
      class: "embed-w-1/2",
      disabled: e.state.hasTag("loading"),
      onClick: t[0] || (t[0] = (s) => e.send(e.back))
    }, {
      default: ne(() => [
        _e("Back")
      ]),
      _: 1
    }, 8, ["disabled"]),
    H(a, {
      loading: e.state.hasTag("loading"),
      class: "embed-w-1/2",
      style: Kr({ "background-color": e.state.context.customization.theme }),
      primary: "",
      onClick: t[1] || (t[1] = (s) => e.send(e.next))
    }, {
      default: ne(() => [
        _e(oe(e.text), 1)
      ]),
      _: 1
    }, 8, ["loading", "style"])
  ]);
}
const eo = /* @__PURE__ */ qe(T0, [["render", M0]]);
function Yl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yl(Object(n), !0).forEach(function(r) {
      Be(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ei(e) {
  "@babel/helpers - typeof";
  return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ei(e);
}
function R0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function D0(e, t, n) {
  return t && Wl(e.prototype, t), n && Wl(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Be(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function gs(e, t) {
  return L0(e) || F0(e, t) || Td(e, t) || j0();
}
function to(e) {
  return z0(e) || $0(e) || Td(e) || V0();
}
function z0(e) {
  if (Array.isArray(e))
    return Aa(e);
}
function L0(e) {
  if (Array.isArray(e))
    return e;
}
function $0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function F0(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, s;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (l) {
      i = !0, s = l;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
}
function Td(e, t) {
  if (e) {
    if (typeof e == "string")
      return Aa(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Aa(e, t);
  }
}
function Aa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function V0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function j0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ql = function() {
}, ys = {}, Pd = {}, Md = null, Rd = {
  mark: ql,
  measure: ql
};
try {
  typeof window < "u" && (ys = window), typeof document < "u" && (Pd = document), typeof MutationObserver < "u" && (Md = MutationObserver), typeof performance < "u" && (Rd = performance);
} catch {
}
var U0 = ys.navigator || {}, Kl = U0.userAgent, Xl = Kl === void 0 ? "" : Kl, on = ys, Ie = Pd, Jl = Md, yo = Rd;
on.document;
var Bt = !!Ie.documentElement && !!Ie.head && typeof Ie.addEventListener == "function" && typeof Ie.createElement == "function", Dd = ~Xl.indexOf("MSIE") || ~Xl.indexOf("Trident/"), _o, wo, xo, Eo, ko, Vt = "___FONT_AWESOME___", Na = 16, zd = "fa", Ld = "svg-inline--fa", On = "data-fa-i2svg", Ia = "data-fa-pseudo-element", H0 = "data-fa-pseudo-element-pending", _s = "data-prefix", ws = "data-icon", Ql = "fontawesome-i2svg", B0 = "async", G0 = ["HTML", "HEAD", "STYLE", "SCRIPT"], $d = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), Ne = "classic", De = "sharp", xs = [Ne, De];
function no(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[Ne];
    }
  });
}
var Hr = no((_o = {}, Be(_o, Ne, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  "fa-kit": "kit"
}), Be(_o, De, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light"
}), _o)), Br = no((wo = {}, Be(wo, Ne, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Be(wo, De, {
  solid: "fass",
  regular: "fasr",
  light: "fasl"
}), wo)), Gr = no((xo = {}, Be(xo, Ne, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Be(xo, De, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light"
}), xo)), Y0 = no((Eo = {}, Be(Eo, Ne, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Be(Eo, De, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl"
}), Eo)), W0 = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/, Fd = "fa-layers-text", q0 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, K0 = no((ko = {}, Be(ko, Ne, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Be(ko, De, {
  900: "fass",
  400: "fasr",
  300: "fasl"
}), ko)), Vd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], X0 = Vd.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), J0 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], _n = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Yr = /* @__PURE__ */ new Set();
Object.keys(Br[Ne]).map(Yr.add.bind(Yr));
Object.keys(Br[De]).map(Yr.add.bind(Yr));
var Q0 = [].concat(xs, to(Yr), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", _n.GROUP, _n.SWAP_OPACITY, _n.PRIMARY, _n.SECONDARY]).concat(Vd.map(function(e) {
  return "".concat(e, "x");
})).concat(X0.map(function(e) {
  return "w-".concat(e);
})), Cr = on.FontAwesomeConfig || {};
function Z0(e) {
  var t = Ie.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function ev(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (Ie && typeof Ie.querySelector == "function") {
  var tv = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  tv.forEach(function(e) {
    var t = gs(e, 2), n = t[0], r = t[1], o = ev(Z0(n));
    o != null && (Cr[r] = o);
  });
}
var jd = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: zd,
  replacementClass: Ld,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Cr.familyPrefix && (Cr.cssPrefix = Cr.familyPrefix);
var er = B(B({}, jd), Cr);
er.autoReplaceSvg || (er.observeMutations = !1);
var K = {};
Object.keys(jd).forEach(function(e) {
  Object.defineProperty(K, e, {
    enumerable: !0,
    set: function(n) {
      er[e] = n, Tr.forEach(function(r) {
        return r(K);
      });
    },
    get: function() {
      return er[e];
    }
  });
});
Object.defineProperty(K, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    er.cssPrefix = t, Tr.forEach(function(n) {
      return n(K);
    });
  },
  get: function() {
    return er.cssPrefix;
  }
});
on.FontAwesomeConfig = K;
var Tr = [];
function nv(e) {
  return Tr.push(e), function() {
    Tr.splice(Tr.indexOf(e), 1);
  };
}
var Kt = Na, Tt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function rv(e) {
  if (!(!e || !Bt)) {
    var t = Ie.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = Ie.head.childNodes, r = null, o = n.length - 1; o > -1; o--) {
      var i = n[o], a = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(a) > -1 && (r = i);
    }
    return Ie.head.insertBefore(t, r), e;
  }
}
var ov = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Wr() {
  for (var e = 12, t = ""; e-- > 0; )
    t += ov[Math.random() * 62 | 0];
  return t;
}
function cr(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Es(e) {
  return e.classList ? cr(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function Ud(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function iv(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(Ud(e[n]), '" ');
  }, "").trim();
}
function Ci(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function ks(e) {
  return e.size !== Tt.size || e.x !== Tt.x || e.y !== Tt.y || e.rotate !== Tt.rotate || e.flipX || e.flipY;
}
function av(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, o = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), a = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(a, " ").concat(s)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: o,
    inner: l,
    path: c
  };
}
function sv(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? Na : n, o = e.height, i = o === void 0 ? Na : o, a = e.startCentered, s = a === void 0 ? !1 : a, l = "";
  return s && Dd ? l += "translate(".concat(t.x / Kt - r / 2, "em, ").concat(t.y / Kt - i / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(t.x / Kt, "em), calc(-50% + ").concat(t.y / Kt, "em)) ") : l += "translate(".concat(t.x / Kt, "em, ").concat(t.y / Kt, "em) "), l += "scale(".concat(t.size / Kt * (t.flipX ? -1 : 1), ", ").concat(t.size / Kt * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var lv = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Hd() {
  var e = zd, t = Ld, n = K.cssPrefix, r = K.replacementClass, o = lv;
  if (n !== e || r !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), a = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    o = o.replace(i, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return o;
}
var Zl = !1;
function Ki() {
  K.autoAddCss && !Zl && (rv(Hd()), Zl = !0);
}
var cv = {
  mixout: function() {
    return {
      dom: {
        css: Hd,
        insertCss: Ki
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Ki();
      },
      beforeI2svg: function() {
        Ki();
      }
    };
  }
}, jt = on || {};
jt[Vt] || (jt[Vt] = {});
jt[Vt].styles || (jt[Vt].styles = {});
jt[Vt].hooks || (jt[Vt].hooks = {});
jt[Vt].shims || (jt[Vt].shims = []);
var Et = jt[Vt], Bd = [], uv = function e() {
  Ie.removeEventListener("DOMContentLoaded", e), ti = 1, Bd.map(function(t) {
    return t();
  });
}, ti = !1;
Bt && (ti = (Ie.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ie.readyState), ti || Ie.addEventListener("DOMContentLoaded", uv));
function dv(e) {
  Bt && (ti ? setTimeout(e, 0) : Bd.push(e));
}
function ro(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, o = e.children, i = o === void 0 ? [] : o;
  return typeof e == "string" ? Ud(e) : "<".concat(t, " ").concat(iv(r), ">").concat(i.map(ro).join(""), "</").concat(t, ">");
}
function ec(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var fv = function(t, n) {
  return function(r, o, i, a) {
    return t.call(n, r, o, i, a);
  };
}, Xi = function(t, n, r, o) {
  var i = Object.keys(t), a = i.length, s = o !== void 0 ? fv(n, o) : n, l, c, u;
  for (r === void 0 ? (l = 1, u = t[i[0]]) : (l = 0, u = r); l < a; l++)
    c = i[l], u = s(u, t[c], c, t);
  return u;
};
function mv(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var o = e.charCodeAt(n++);
    if (o >= 55296 && o <= 56319 && n < r) {
      var i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((o & 1023) << 10) + (i & 1023) + 65536) : (t.push(o), n--);
    } else
      t.push(o);
  }
  return t;
}
function Ca(e) {
  var t = mv(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function pv(e, t) {
  var n = e.length, r = e.charCodeAt(t), o;
  return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1), o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r;
}
function tc(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], o = !!r.icon;
    return o ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Ta(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, o = r === void 0 ? !1 : r, i = tc(t);
  typeof Et.hooks.addPack == "function" && !o ? Et.hooks.addPack(e, tc(t)) : Et.styles[e] = B(B({}, Et.styles[e] || {}), i), e === "fas" && Ta("fa", t);
}
var So, Oo, Ao, Ln = Et.styles, bv = Et.shims, hv = (So = {}, Be(So, Ne, Object.values(Gr[Ne])), Be(So, De, Object.values(Gr[De])), So), Ss = null, Gd = {}, Yd = {}, Wd = {}, qd = {}, Kd = {}, vv = (Oo = {}, Be(Oo, Ne, Object.keys(Hr[Ne])), Be(Oo, De, Object.keys(Hr[De])), Oo);
function gv(e) {
  return ~Q0.indexOf(e);
}
function yv(e, t) {
  var n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !gv(o) ? o : null;
}
var Xd = function() {
  var t = function(i) {
    return Xi(Ln, function(a, s, l) {
      return a[l] = Xi(s, i, {}), a;
    }, {});
  };
  Gd = t(function(o, i, a) {
    if (i[3] && (o[i[3]] = a), i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        o[l.toString(16)] = a;
      });
    }
    return o;
  }), Yd = t(function(o, i, a) {
    if (o[a] = a, i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        o[l] = a;
      });
    }
    return o;
  }), Kd = t(function(o, i, a) {
    var s = i[2];
    return o[a] = a, s.forEach(function(l) {
      o[l] = a;
    }), o;
  });
  var n = "far" in Ln || K.autoFetchSvg, r = Xi(bv, function(o, i) {
    var a = i[0], s = i[1], l = i[2];
    return s === "far" && !n && (s = "fas"), typeof a == "string" && (o.names[a] = {
      prefix: s,
      iconName: l
    }), typeof a == "number" && (o.unicodes[a.toString(16)] = {
      prefix: s,
      iconName: l
    }), o;
  }, {
    names: {},
    unicodes: {}
  });
  Wd = r.names, qd = r.unicodes, Ss = Ti(K.styleDefault, {
    family: K.familyDefault
  });
};
nv(function(e) {
  Ss = Ti(e.styleDefault, {
    family: K.familyDefault
  });
});
Xd();
function Os(e, t) {
  return (Gd[e] || {})[t];
}
function _v(e, t) {
  return (Yd[e] || {})[t];
}
function wn(e, t) {
  return (Kd[e] || {})[t];
}
function Jd(e) {
  return Wd[e] || {
    prefix: null,
    iconName: null
  };
}
function wv(e) {
  var t = qd[e], n = Os("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function an() {
  return Ss;
}
var As = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Ti(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? Ne : n, o = Hr[r][e], i = Br[r][e] || Br[r][o], a = e in Et.styles ? e : null;
  return i || a || null;
}
var nc = (Ao = {}, Be(Ao, Ne, Object.keys(Gr[Ne])), Be(Ao, De, Object.keys(Gr[De])), Ao);
function Pi(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, o = r === void 0 ? !1 : r, i = (t = {}, Be(t, Ne, "".concat(K.cssPrefix, "-").concat(Ne)), Be(t, De, "".concat(K.cssPrefix, "-").concat(De)), t), a = null, s = Ne;
  (e.includes(i[Ne]) || e.some(function(c) {
    return nc[Ne].includes(c);
  })) && (s = Ne), (e.includes(i[De]) || e.some(function(c) {
    return nc[De].includes(c);
  })) && (s = De);
  var l = e.reduce(function(c, u) {
    var f = yv(K.cssPrefix, u);
    if (Ln[u] ? (u = hv[s].includes(u) ? Y0[s][u] : u, a = u, c.prefix = u) : vv[s].indexOf(u) > -1 ? (a = u, c.prefix = Ti(u, {
      family: s
    })) : f ? c.iconName = f : u !== K.replacementClass && u !== i[Ne] && u !== i[De] && c.rest.push(u), !o && c.prefix && c.iconName) {
      var d = a === "fa" ? Jd(c.iconName) : {}, m = wn(c.prefix, c.iconName);
      d.prefix && (a = null), c.iconName = d.iconName || m || c.iconName, c.prefix = d.prefix || c.prefix, c.prefix === "far" && !Ln.far && Ln.fas && !K.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, As());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === De && (Ln.fass || K.autoFetchSvg) && (l.prefix = "fass", l.iconName = wn(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || a === "fa") && (l.prefix = an() || "fas"), l;
}
var xv = /* @__PURE__ */ function() {
  function e() {
    R0(this, e), this.definitions = {};
  }
  return D0(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
        o[i] = arguments[i];
      var a = o.reduce(this._pullDefinitions, {});
      Object.keys(a).forEach(function(s) {
        n.definitions[s] = B(B({}, n.definitions[s] || {}), a[s]), Ta(s, a[s]);
        var l = Gr[Ne][s];
        l && Ta(l, a[s]), Xd();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var o = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(o).map(function(i) {
        var a = o[i], s = a.prefix, l = a.iconName, c = a.icon, u = c[2];
        n[s] || (n[s] = {}), u.length > 0 && u.forEach(function(f) {
          typeof f == "string" && (n[s][f] = c);
        }), n[s][l] = c;
      }), n;
    }
  }]), e;
}(), rc = [], $n = {}, Bn = {}, Ev = Object.keys(Bn);
function kv(e, t) {
  var n = t.mixoutsTo;
  return rc = e, $n = {}, Object.keys(Bn).forEach(function(r) {
    Ev.indexOf(r) === -1 && delete Bn[r];
  }), rc.forEach(function(r) {
    var o = r.mixout ? r.mixout() : {};
    if (Object.keys(o).forEach(function(a) {
      typeof o[a] == "function" && (n[a] = o[a]), ei(o[a]) === "object" && Object.keys(o[a]).forEach(function(s) {
        n[a] || (n[a] = {}), n[a][s] = o[a][s];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(a) {
        $n[a] || ($n[a] = []), $n[a].push(i[a]);
      });
    }
    r.provides && r.provides(Bn);
  }), n;
}
function Pa(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var i = $n[e] || [];
  return i.forEach(function(a) {
    t = a.apply(null, [t].concat(r));
  }), t;
}
function An(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = $n[e] || [];
  o.forEach(function(i) {
    i.apply(null, n);
  });
}
function Ut() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Bn[e] ? Bn[e].apply(null, t) : void 0;
}
function Ma(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || an();
  if (t)
    return t = wn(n, t) || t, ec(Qd.definitions, n, t) || ec(Et.styles, n, t);
}
var Qd = new xv(), Sv = function() {
  K.autoReplaceSvg = !1, K.observeMutations = !1, An("noAuto");
}, Ov = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Bt ? (An("beforeI2svg", t), Ut("pseudoElements2svg", t), Ut("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    K.autoReplaceSvg === !1 && (K.autoReplaceSvg = !0), K.observeMutations = !0, dv(function() {
      Nv({
        autoReplaceSvgRoot: n
      }), An("watch", t);
    });
  }
}, Av = {
  icon: function(t) {
    if (t === null)
      return null;
    if (ei(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: wn(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = Ti(t[0]);
      return {
        prefix: r,
        iconName: wn(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(K.cssPrefix, "-")) > -1 || t.match(W0))) {
      var o = Pi(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: o.prefix || an(),
        iconName: wn(o.prefix, o.iconName) || o.iconName
      };
    }
    if (typeof t == "string") {
      var i = an();
      return {
        prefix: i,
        iconName: wn(i, t) || t
      };
    }
  }
}, dt = {
  noAuto: Sv,
  config: K,
  dom: Ov,
  parse: Av,
  library: Qd,
  findIconDefinition: Ma,
  toHtml: ro
}, Nv = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? Ie : n;
  (Object.keys(Et.styles).length > 0 || K.autoFetchSvg) && Bt && K.autoReplaceSvg && dt.dom.i2svg({
    node: r
  });
};
function Mi(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return ro(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (Bt) {
        var r = Ie.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function Iv(e) {
  var t = e.children, n = e.main, r = e.mask, o = e.attributes, i = e.styles, a = e.transform;
  if (ks(a) && n.found && !r.found) {
    var s = n.width, l = n.height, c = {
      x: s / l / 2,
      y: 0.5
    };
    o.style = Ci(B(B({}, i), {}, {
      "transform-origin": "".concat(c.x + a.x / 16, "em ").concat(c.y + a.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function Cv(e) {
  var t = e.prefix, n = e.iconName, r = e.children, o = e.attributes, i = e.symbol, a = i === !0 ? "".concat(t, "-").concat(K.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: B(B({}, o), {}, {
        id: a
      }),
      children: r
    }]
  }];
}
function Ns(e) {
  var t = e.icons, n = t.main, r = t.mask, o = e.prefix, i = e.iconName, a = e.transform, s = e.symbol, l = e.title, c = e.maskId, u = e.titleId, f = e.extra, d = e.watchable, m = d === void 0 ? !1 : d, p = r.found ? r : n, h = p.width, _ = p.height, y = o === "fak", v = [K.replacementClass, i ? "".concat(K.cssPrefix, "-").concat(i) : ""].filter(function(D) {
    return f.classes.indexOf(D) === -1;
  }).filter(function(D) {
    return D !== "" || !!D;
  }).concat(f.classes).join(" "), w = {
    children: [],
    attributes: B(B({}, f.attributes), {}, {
      "data-prefix": o,
      "data-icon": i,
      class: v,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(_)
    })
  }, x = y && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(h / _ * 16 * 0.0625, "em")
  } : {};
  m && (w.attributes[On] = ""), l && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(u || Wr())
    },
    children: [l]
  }), delete w.attributes.title);
  var I = B(B({}, w), {}, {
    prefix: o,
    iconName: i,
    main: n,
    mask: r,
    maskId: c,
    transform: a,
    symbol: s,
    styles: B(B({}, x), f.styles)
  }), $ = r.found && n.found ? Ut("generateAbstractMask", I) || {
    children: [],
    attributes: {}
  } : Ut("generateAbstractIcon", I) || {
    children: [],
    attributes: {}
  }, R = $.children, C = $.attributes;
  return I.children = R, I.attributes = C, s ? Cv(I) : Iv(I);
}
function oc(e) {
  var t = e.content, n = e.width, r = e.height, o = e.transform, i = e.title, a = e.extra, s = e.watchable, l = s === void 0 ? !1 : s, c = B(B(B({}, a.attributes), i ? {
    title: i
  } : {}), {}, {
    class: a.classes.join(" ")
  });
  l && (c[On] = "");
  var u = B({}, a.styles);
  ks(o) && (u.transform = sv({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  var f = Ci(u);
  f.length > 0 && (c.style = f);
  var d = [];
  return d.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), i && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), d;
}
function Tv(e) {
  var t = e.content, n = e.title, r = e.extra, o = B(B(B({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = Ci(r.styles);
  i.length > 0 && (o.style = i);
  var a = [];
  return a.push({
    tag: "span",
    attributes: o,
    children: [t]
  }), n && a.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), a;
}
var Ji = Et.styles;
function Ra(e) {
  var t = e[0], n = e[1], r = e.slice(4), o = gs(r, 1), i = o[0], a = null;
  return Array.isArray(i) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(K.cssPrefix, "-").concat(_n.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(K.cssPrefix, "-").concat(_n.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(K.cssPrefix, "-").concat(_n.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : a = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: a
  };
}
var Pv = {
  found: !1,
  width: 512,
  height: 512
};
function Mv(e, t) {
  !$d && !K.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Da(e, t) {
  var n = t;
  return t === "fa" && K.styleDefault !== null && (t = an()), new Promise(function(r, o) {
    if (Ut("missingIconAbstract"), n === "fa") {
      var i = Jd(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Ji[t] && Ji[t][e]) {
      var a = Ji[t][e];
      return r(Ra(a));
    }
    Mv(e, t), r(B(B({}, Pv), {}, {
      icon: K.showMissingIcons && e ? Ut("missingIconAbstract") || {} : {}
    }));
  });
}
var ic = function() {
}, za = K.measurePerformance && yo && yo.mark && yo.measure ? yo : {
  mark: ic,
  measure: ic
}, xr = 'FA "6.4.0"', Rv = function(t) {
  return za.mark("".concat(xr, " ").concat(t, " begins")), function() {
    return Zd(t);
  };
}, Zd = function(t) {
  za.mark("".concat(xr, " ").concat(t, " ends")), za.measure("".concat(xr, " ").concat(t), "".concat(xr, " ").concat(t, " begins"), "".concat(xr, " ").concat(t, " ends"));
}, Is = {
  begin: Rv,
  end: Zd
}, Ro = function() {
};
function ac(e) {
  var t = e.getAttribute ? e.getAttribute(On) : null;
  return typeof t == "string";
}
function Dv(e) {
  var t = e.getAttribute ? e.getAttribute(_s) : null, n = e.getAttribute ? e.getAttribute(ws) : null;
  return t && n;
}
function zv(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(K.replacementClass);
}
function Lv() {
  if (K.autoReplaceSvg === !0)
    return Do.replace;
  var e = Do[K.autoReplaceSvg];
  return e || Do.replace;
}
function $v(e) {
  return Ie.createElementNS("http://www.w3.org/2000/svg", e);
}
function Fv(e) {
  return Ie.createElement(e);
}
function ef(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? $v : Fv : n;
  if (typeof e == "string")
    return Ie.createTextNode(e);
  var o = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(a) {
    o.setAttribute(a, e.attributes[a]);
  });
  var i = e.children || [];
  return i.forEach(function(a) {
    o.appendChild(ef(a, {
      ceFn: r
    }));
  }), o;
}
function Vv(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var Do = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(o) {
        n.parentNode.insertBefore(ef(o), n);
      }), n.getAttribute(On) === null && K.keepOriginalSource) {
        var r = Ie.createComment(Vv(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~Es(n).indexOf(K.replacementClass))
      return Do.replace(t);
    var o = new RegExp("".concat(K.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === K.replacementClass || l.match(o) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", i.toNode.join(" "));
    }
    var a = r.map(function(s) {
      return ro(s);
    }).join(`
`);
    n.setAttribute(On, ""), n.innerHTML = a;
  }
};
function sc(e) {
  e();
}
function tf(e, t) {
  var n = typeof t == "function" ? t : Ro;
  if (e.length === 0)
    n();
  else {
    var r = sc;
    K.mutateApproach === B0 && (r = on.requestAnimationFrame || sc), r(function() {
      var o = Lv(), i = Is.begin("mutate");
      e.map(o), i(), n();
    });
  }
}
var Cs = !1;
function nf() {
  Cs = !0;
}
function La() {
  Cs = !1;
}
var ni = null;
function lc(e) {
  if (Jl && K.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? Ro : t, r = e.nodeCallback, o = r === void 0 ? Ro : r, i = e.pseudoElementsCallback, a = i === void 0 ? Ro : i, s = e.observeMutationsRoot, l = s === void 0 ? Ie : s;
    ni = new Jl(function(c) {
      if (!Cs) {
        var u = an();
        cr(c).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !ac(f.addedNodes[0]) && (K.searchPseudoElements && a(f.target), n(f.target)), f.type === "attributes" && f.target.parentNode && K.searchPseudoElements && a(f.target.parentNode), f.type === "attributes" && ac(f.target) && ~J0.indexOf(f.attributeName))
            if (f.attributeName === "class" && Dv(f.target)) {
              var d = Pi(Es(f.target)), m = d.prefix, p = d.iconName;
              f.target.setAttribute(_s, m || u), p && f.target.setAttribute(ws, p);
            } else
              zv(f.target) && o(f.target);
        });
      }
    }), Bt && ni.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function jv() {
  ni && ni.disconnect();
}
function Uv(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, o) {
    var i = o.split(":"), a = i[0], s = i.slice(1);
    return a && s.length > 0 && (r[a] = s.join(":").trim()), r;
  }, {})), n;
}
function Hv(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", o = Pi(Es(e));
  return o.prefix || (o.prefix = an()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = _v(o.prefix, e.innerText) || Os(o.prefix, Ca(e.innerText))), !o.iconName && K.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function Bv(e) {
  var t = cr(e.attributes).reduce(function(o, i) {
    return o.name !== "class" && o.name !== "style" && (o[i.name] = i.value), o;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return K.autoA11y && (n ? t["aria-labelledby"] = "".concat(K.replacementClass, "-title-").concat(r || Wr()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Gv() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Tt,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function cc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = Hv(e), r = n.iconName, o = n.prefix, i = n.rest, a = Bv(e), s = Pa("parseNodeAttributes", {}, e), l = t.styleParser ? Uv(e) : [];
  return B({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: o,
    transform: Tt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: a
    }
  }, s);
}
var Yv = Et.styles;
function rf(e) {
  var t = K.autoReplaceSvg === "nest" ? cc(e, {
    styleParser: !1
  }) : cc(e);
  return ~t.extra.classes.indexOf(Fd) ? Ut("generateLayersText", e, t) : Ut("generateSvgReplacementMutation", e, t);
}
var sn = /* @__PURE__ */ new Set();
xs.map(function(e) {
  sn.add("fa-".concat(e));
});
Object.keys(Hr[Ne]).map(sn.add.bind(sn));
Object.keys(Hr[De]).map(sn.add.bind(sn));
sn = to(sn);
function uc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Bt)
    return Promise.resolve();
  var n = Ie.documentElement.classList, r = function(f) {
    return n.add("".concat(Ql, "-").concat(f));
  }, o = function(f) {
    return n.remove("".concat(Ql, "-").concat(f));
  }, i = K.autoFetchSvg ? sn : xs.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(Yv));
  i.includes("fa") || i.push("fa");
  var a = [".".concat(Fd, ":not([").concat(On, "])")].concat(i.map(function(u) {
    return ".".concat(u, ":not([").concat(On, "])");
  })).join(", ");
  if (a.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = cr(e.querySelectorAll(a));
  } catch {
  }
  if (s.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  var l = Is.begin("onTree"), c = s.reduce(function(u, f) {
    try {
      var d = rf(f);
      d && u.push(d);
    } catch (m) {
      $d || m.name === "MissingIcon" && console.error(m);
    }
    return u;
  }, []);
  return new Promise(function(u, f) {
    Promise.all(c).then(function(d) {
      tf(d, function() {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch(function(d) {
      l(), f(d);
    });
  });
}
function Wv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  rf(e).then(function(n) {
    n && tf([n], t);
  });
}
function qv(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : Ma(t || {}), o = n.mask;
    return o && (o = (o || {}).icon ? o : Ma(o || {})), e(r, B(B({}, n), {}, {
      mask: o
    }));
  };
}
var Kv = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, o = r === void 0 ? Tt : r, i = n.symbol, a = i === void 0 ? !1 : i, s = n.mask, l = s === void 0 ? null : s, c = n.maskId, u = c === void 0 ? null : c, f = n.title, d = f === void 0 ? null : f, m = n.titleId, p = m === void 0 ? null : m, h = n.classes, _ = h === void 0 ? [] : h, y = n.attributes, v = y === void 0 ? {} : y, w = n.styles, x = w === void 0 ? {} : w;
  if (t) {
    var I = t.prefix, $ = t.iconName, R = t.icon;
    return Mi(B({
      type: "icon"
    }, t), function() {
      return An("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), K.autoA11y && (d ? v["aria-labelledby"] = "".concat(K.replacementClass, "-title-").concat(p || Wr()) : (v["aria-hidden"] = "true", v.focusable = "false")), Ns({
        icons: {
          main: Ra(R),
          mask: l ? Ra(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: I,
        iconName: $,
        transform: B(B({}, Tt), o),
        symbol: a,
        title: d,
        maskId: u,
        titleId: p,
        extra: {
          attributes: v,
          styles: x,
          classes: _
        }
      });
    });
  }
}, Xv = {
  mixout: function() {
    return {
      icon: qv(Kv)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = uc, n.nodeCallback = Wv, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, o = r === void 0 ? Ie : r, i = n.callback, a = i === void 0 ? function() {
      } : i;
      return uc(o, a);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var o = r.iconName, i = r.title, a = r.titleId, s = r.prefix, l = r.transform, c = r.symbol, u = r.mask, f = r.maskId, d = r.extra;
      return new Promise(function(m, p) {
        Promise.all([Da(o, s), u.iconName ? Da(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(h) {
          var _ = gs(h, 2), y = _[0], v = _[1];
          m([n, Ns({
            icons: {
              main: y,
              mask: v
            },
            prefix: s,
            iconName: o,
            transform: l,
            symbol: c,
            maskId: f,
            title: i,
            titleId: a,
            extra: d,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, o = n.attributes, i = n.main, a = n.transform, s = n.styles, l = Ci(s);
      l.length > 0 && (o.style = l);
      var c;
      return ks(a) && (c = Ut("generateAbstractTransformGrouping", {
        main: i,
        transform: a,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(c || i.icon), {
        children: r,
        attributes: o
      };
    };
  }
}, Jv = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = r.classes, i = o === void 0 ? [] : o;
        return Mi({
          type: "layer"
        }, function() {
          An("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var a = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              a = a.concat(l.abstract);
            }) : a = a.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(K.cssPrefix, "-layers")].concat(to(i)).join(" ")
            },
            children: a
          }];
        });
      }
    };
  }
}, Qv = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = r.title, i = o === void 0 ? null : o, a = r.classes, s = a === void 0 ? [] : a, l = r.attributes, c = l === void 0 ? {} : l, u = r.styles, f = u === void 0 ? {} : u;
        return Mi({
          type: "counter",
          content: n
        }, function() {
          return An("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Tv({
            content: n.toString(),
            title: i,
            extra: {
              attributes: c,
              styles: f,
              classes: ["".concat(K.cssPrefix, "-layers-counter")].concat(to(s))
            }
          });
        });
      }
    };
  }
}, Zv = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = r.transform, i = o === void 0 ? Tt : o, a = r.title, s = a === void 0 ? null : a, l = r.classes, c = l === void 0 ? [] : l, u = r.attributes, f = u === void 0 ? {} : u, d = r.styles, m = d === void 0 ? {} : d;
        return Mi({
          type: "text",
          content: n
        }, function() {
          return An("beforeDOMElementCreation", {
            content: n,
            params: r
          }), oc({
            content: n,
            transform: B(B({}, Tt), i),
            title: s,
            extra: {
              attributes: f,
              styles: m,
              classes: ["".concat(K.cssPrefix, "-layers-text")].concat(to(c))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var o = r.title, i = r.transform, a = r.extra, s = null, l = null;
      if (Dd) {
        var c = parseInt(getComputedStyle(n).fontSize, 10), u = n.getBoundingClientRect();
        s = u.width / c, l = u.height / c;
      }
      return K.autoA11y && !o && (a.attributes["aria-hidden"] = "true"), Promise.resolve([n, oc({
        content: n.innerHTML,
        width: s,
        height: l,
        transform: i,
        title: o,
        extra: a,
        watchable: !0
      })]);
    };
  }
}, e2 = new RegExp('"', "ug"), dc = [1105920, 1112319];
function t2(e) {
  var t = e.replace(e2, ""), n = pv(t, 0), r = n >= dc[0] && n <= dc[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Ca(o ? t[0] : t),
    isSecondary: r || o
  };
}
function fc(e, t) {
  var n = "".concat(H0).concat(t.replace(":", "-"));
  return new Promise(function(r, o) {
    if (e.getAttribute(n) !== null)
      return r();
    var i = cr(e.children), a = i.filter(function(R) {
      return R.getAttribute(Ia) === t;
    })[0], s = on.getComputedStyle(e, t), l = s.getPropertyValue("font-family").match(q0), c = s.getPropertyValue("font-weight"), u = s.getPropertyValue("content");
    if (a && !l)
      return e.removeChild(a), r();
    if (l && u !== "none" && u !== "") {
      var f = s.getPropertyValue("content"), d = ~["Sharp"].indexOf(l[2]) ? De : Ne, m = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? Br[d][l[2].toLowerCase()] : K0[d][c], p = t2(f), h = p.value, _ = p.isSecondary, y = l[0].startsWith("FontAwesome"), v = Os(m, h), w = v;
      if (y) {
        var x = wv(h);
        x.iconName && x.prefix && (v = x.iconName, m = x.prefix);
      }
      if (v && !_ && (!a || a.getAttribute(_s) !== m || a.getAttribute(ws) !== w)) {
        e.setAttribute(n, w), a && e.removeChild(a);
        var I = Gv(), $ = I.extra;
        $.attributes[Ia] = t, Da(v, m).then(function(R) {
          var C = Ns(B(B({}, I), {}, {
            icons: {
              main: R,
              mask: As()
            },
            prefix: m,
            iconName: w,
            extra: $,
            watchable: !0
          })), D = Ie.createElement("svg");
          t === "::before" ? e.insertBefore(D, e.firstChild) : e.appendChild(D), D.outerHTML = C.map(function(W) {
            return ro(W);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function n2(e) {
  return Promise.all([fc(e, "::before"), fc(e, "::after")]);
}
function r2(e) {
  return e.parentNode !== document.head && !~G0.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Ia) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function mc(e) {
  if (Bt)
    return new Promise(function(t, n) {
      var r = cr(e.querySelectorAll("*")).filter(r2).map(n2), o = Is.begin("searchPseudoElements");
      nf(), Promise.all(r).then(function() {
        o(), La(), t();
      }).catch(function() {
        o(), La(), n();
      });
    });
}
var o2 = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = mc, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, o = r === void 0 ? Ie : r;
      K.searchPseudoElements && mc(o);
    };
  }
}, pc = !1, i2 = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          nf(), pc = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        lc(Pa("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        jv();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        pc ? La() : lc(Pa("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, bc = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, o) {
    var i = o.toLowerCase().split("-"), a = i[0], s = i.slice(1).join("-");
    if (a && s === "h")
      return r.flipX = !0, r;
    if (a && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (a) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, n);
}, a2 = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return bc(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var o = r.getAttribute("data-fa-transform");
        return o && (n.transform = bc(o)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, o = n.transform, i = n.containerWidth, a = n.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(o.x * 32, ", ").concat(o.y * 32, ") "), c = "scale(".concat(o.size / 16 * (o.flipX ? -1 : 1), ", ").concat(o.size / 16 * (o.flipY ? -1 : 1), ") "), u = "rotate(".concat(o.rotate, " 0 0)"), f = {
        transform: "".concat(l, " ").concat(c, " ").concat(u)
      }, d = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, m = {
        outer: s,
        inner: f,
        path: d
      };
      return {
        tag: "g",
        attributes: B({}, m.outer),
        children: [{
          tag: "g",
          attributes: B({}, m.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: B(B({}, r.icon.attributes), m.path)
          }]
        }]
      };
    };
  }
}, Qi = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function hc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function s2(e) {
  return e.tag === "g" ? e.children : [e];
}
var l2 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var o = r.getAttribute("data-fa-mask"), i = o ? Pi(o.split(" ").map(function(a) {
          return a.trim();
        })) : As();
        return i.prefix || (i.prefix = an()), n.mask = i, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, o = n.attributes, i = n.main, a = n.mask, s = n.maskId, l = n.transform, c = i.width, u = i.icon, f = a.width, d = a.icon, m = av({
        transform: l,
        containerWidth: f,
        iconWidth: c
      }), p = {
        tag: "rect",
        attributes: B(B({}, Qi), {}, {
          fill: "white"
        })
      }, h = u.children ? {
        children: u.children.map(hc)
      } : {}, _ = {
        tag: "g",
        attributes: B({}, m.inner),
        children: [hc(B({
          tag: u.tag,
          attributes: B(B({}, u.attributes), m.path)
        }, h))]
      }, y = {
        tag: "g",
        attributes: B({}, m.outer),
        children: [_]
      }, v = "mask-".concat(s || Wr()), w = "clip-".concat(s || Wr()), x = {
        tag: "mask",
        attributes: B(B({}, Qi), {}, {
          id: v,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, y]
      }, I = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: s2(d)
        }, x]
      };
      return r.push(I, {
        tag: "rect",
        attributes: B({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(v, ")")
        }, Qi)
      }), {
        children: r,
        attributes: o
      };
    };
  }
}, c2 = {
  provides: function(t) {
    var n = !1;
    on.matchMedia && (n = on.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], o = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: B(B({}, o), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var a = B(B({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: B(B({}, o), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: B(B({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: B(B({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: B(B({}, o), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: B(B({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: B(B({}, o), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: B(B({}, a), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, u2 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var o = r.getAttribute("data-fa-symbol"), i = o === null ? !1 : o === "" ? !0 : o;
        return n.symbol = i, n;
      }
    };
  }
}, d2 = [cv, Xv, Jv, Qv, Zv, o2, i2, a2, l2, c2, u2];
kv(d2, {
  mixoutsTo: dt
});
dt.noAuto;
dt.config;
var f2 = dt.library;
dt.dom;
var $a = dt.parse;
dt.findIconDefinition;
dt.toHtml;
var m2 = dt.icon;
dt.layer;
dt.text;
dt.counter;
function vc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vc(Object(n), !0).forEach(function(r) {
      ot(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
}
function ot(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function p2(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function b2(e, t) {
  if (e == null)
    return {};
  var n = p2(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var h2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, of = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(y, v, w) {
      if (!c(v) || f(v) || d(v) || m(v) || l(v))
        return v;
      var x, I = 0, $ = 0;
      if (u(v))
        for (x = [], $ = v.length; I < $; I++)
          x.push(n(y, v[I], w));
      else {
        x = {};
        for (var R in v)
          Object.prototype.hasOwnProperty.call(v, R) && (x[y(R, w)] = n(y, v[R], w));
      }
      return x;
    }, r = function(y, v) {
      v = v || {};
      var w = v.separator || "_", x = v.split || /(?=[A-Z])/;
      return y.split(x).join(w);
    }, o = function(y) {
      return p(y) ? y : (y = y.replace(/[\-_\s]+(.)?/g, function(v, w) {
        return w ? w.toUpperCase() : "";
      }), y.substr(0, 1).toLowerCase() + y.substr(1));
    }, i = function(y) {
      var v = o(y);
      return v.substr(0, 1).toUpperCase() + v.substr(1);
    }, a = function(y, v) {
      return r(y, v).toLowerCase();
    }, s = Object.prototype.toString, l = function(y) {
      return typeof y == "function";
    }, c = function(y) {
      return y === Object(y);
    }, u = function(y) {
      return s.call(y) == "[object Array]";
    }, f = function(y) {
      return s.call(y) == "[object Date]";
    }, d = function(y) {
      return s.call(y) == "[object RegExp]";
    }, m = function(y) {
      return s.call(y) == "[object Boolean]";
    }, p = function(y) {
      return y = y - 0, y === y;
    }, h = function(y, v) {
      var w = v && "process" in v ? v.process : v;
      return typeof w != "function" ? y : function(x, I) {
        return w(x, y, I);
      };
    }, _ = {
      camelize: o,
      decamelize: a,
      pascalize: i,
      depascalize: a,
      camelizeKeys: function(y, v) {
        return n(h(o, v), y);
      },
      decamelizeKeys: function(y, v) {
        return n(h(a, v), y, v);
      },
      pascalizeKeys: function(y, v) {
        return n(h(i, v), y);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = _ : t.humps = _;
  })(h2);
})(of);
var v2 = of.exports, g2 = ["class", "style"];
function y2(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = v2.camelize(n.slice(0, r)), i = n.slice(r + 1).trim();
    return t[o] = i, t;
  }, {});
}
function _2(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function af(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(l) {
    return af(l);
  }), o = Object.keys(e.attributes || {}).reduce(function(l, c) {
    var u = e.attributes[c];
    switch (c) {
      case "class":
        l.class = _2(u);
        break;
      case "style":
        l.style = y2(u);
        break;
      default:
        l.attrs[c] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var i = n.style, a = i === void 0 ? {} : i, s = b2(n, g2);
  return He(e.tag, Lt(Lt(Lt({}, t), {}, {
    class: o.class,
    style: Lt(Lt({}, o.style), a)
  }, o.attrs), s), r);
}
var sf = !1;
try {
  sf = !0;
} catch {
}
function w2() {
  if (!sf && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Zi(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ot({}, e, t) : {};
}
function x2(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, ot(t, "fa-".concat(e.size), e.size !== null), ot(t, "fa-rotate-".concat(e.rotation), e.rotation !== null), ot(t, "fa-pull-".concat(e.pull), e.pull !== null), ot(t, "fa-swap-opacity", e.swapOpacity), ot(t, "fa-bounce", e.bounce), ot(t, "fa-shake", e.shake), ot(t, "fa-beat", e.beat), ot(t, "fa-fade", e.fade), ot(t, "fa-beat-fade", e.beatFade), ot(t, "fa-flash", e.flash), ot(t, "fa-spin-pulse", e.spinPulse), ot(t, "fa-spin-reverse", e.spinReverse), t);
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function gc(e) {
  if (e && ri(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if ($a.icon)
    return $a.icon(e);
  if (e === null)
    return null;
  if (ri(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var E2 = de({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.attrs, o = F(function() {
      return gc(t.icon);
    }), i = F(function() {
      return Zi("classes", x2(t));
    }), a = F(function() {
      return Zi("transform", typeof t.transform == "string" ? $a.transform(t.transform) : t.transform);
    }), s = F(function() {
      return Zi("mask", gc(t.mask));
    }), l = F(function() {
      return m2(o.value, Lt(Lt(Lt(Lt({}, i.value), a.value), s.value), {}, {
        symbol: t.symbol,
        title: t.title
      }));
    });
    bt(l, function(u) {
      if (!u)
        return w2("Could not find one or more icon(s)", o.value, s.value);
    }, {
      immediate: !0
    });
    var c = F(function() {
      return l.value ? af(l.value.abstract[0], {}, r) : null;
    });
    return function() {
      return c.value;
    };
  }
}), k2 = {
  prefix: "fab",
  iconName: "monero",
  icon: [496, 512, [], "f3d0", "M352 384h108.4C417 455.9 338.1 504 248 504S79 455.9 35.6 384H144V256.2L248 361l104-105v128zM88 336V128l159.4 159.4L408 128v208h74.8c8.5-25.1 13.2-52 13.2-80C496 119 385 8 248 8S0 119 0 256c0 28 4.6 54.9 13.2 80H88z"]
}, S2 = {
  prefix: "fab",
  iconName: "cc-stripe",
  icon: [576, 512, [], "f1f5", "M492.4 220.8c-8.9 0-18.7 6.7-18.7 22.7h36.7c0-16-9.3-22.7-18-22.7zM375 223.4c-8.2 0-13.3 2.9-17 7l.2 52.8c3.5 3.7 8.5 6.7 16.8 6.7 13.1 0 21.9-14.3 21.9-33.4 0-18.6-9-33.2-21.9-33.1zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM122.2 281.1c0 25.6-20.3 40.1-49.9 40.3-12.2 0-25.6-2.4-38.8-8.1v-33.9c12 6.4 27.1 11.3 38.9 11.3 7.9 0 13.6-2.1 13.6-8.7 0-17-54-10.6-54-49.9 0-25.2 19.2-40.2 48-40.2 11.8 0 23.5 1.8 35.3 6.5v33.4c-10.8-5.8-24.5-9.1-35.3-9.1-7.5 0-12.1 2.2-12.1 7.7 0 16 54.3 8.4 54.3 50.7zm68.8-56.6h-27V275c0 20.9 22.5 14.4 27 12.6v28.9c-4.7 2.6-13.3 4.7-24.9 4.7-21.1 0-36.9-15.5-36.9-36.5l.2-113.9 34.7-7.4v30.8H191zm74 2.4c-4.5-1.5-18.7-3.6-27.1 7.4v84.4h-35.5V194.2h30.7l2.2 10.5c8.3-15.3 24.9-12.2 29.6-10.5h.1zm44.1 91.8h-35.7V194.2h35.7zm0-142.9l-35.7 7.6v-28.9l35.7-7.6zm74.1 145.5c-12.4 0-20-5.3-25.1-9l-.1 40.2-35.5 7.5V194.2h31.3l1.8 8.8c4.9-4.5 13.9-11.1 27.8-11.1 24.9 0 48.4 22.5 48.4 63.8 0 45.1-23.2 65.5-48.6 65.6zm160.4-51.5h-69.5c1.6 16.6 13.8 21.5 27.6 21.5 14.1 0 25.2-3 34.9-7.9V312c-9.7 5.3-22.4 9.2-39.4 9.2-34.6 0-58.8-21.7-58.8-64.5 0-36.2 20.5-64.9 54.3-64.9 33.7 0 51.3 28.7 51.3 65.1 0 3.5-.3 10.9-.4 12.9z"]
}, O2 = {
  prefix: "fab",
  iconName: "bitcoin",
  icon: [512, 512, [], "f379", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"]
}, A2 = {
  prefix: "fab",
  iconName: "paypal",
  icon: [384, 512, [], "f1ed", "M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"]
}, N2 = {
  prefix: "fab",
  iconName: "ethereum",
  icon: [320, 512, [], "f42e", "M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"]
}, I2 = {
  prefix: "fas",
  iconName: "v",
  icon: [384, 512, [118], "56", "M19.7 34.5c16.3-6.8 35 .9 41.8 17.2L192 364.8 322.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7L2.5 76.3c-6.8-16.3 .9-35 17.2-41.8z"]
}, C2 = {
  prefix: "fas",
  iconName: "money-bill-wave",
  icon: [576, 512, [], "f53a", "M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64H64V352zm64-208c0 35.3-28.7 64-64 64V144h64zM512 304v64H448c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z"]
}, T2 = {
  prefix: "fas",
  iconName: "bitcoin-sign",
  icon: [320, 512, [], "e0b4", "M48 32C48 14.3 62.3 0 80 0s32 14.3 32 32V64h32V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64c0 1.5-.1 3.1-.3 4.5C254.1 82.2 288 125.1 288 176c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H112v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H41.7C18.7 448 0 429.3 0 406.3V288 265.7 224 101.6C0 80.8 16.8 64 37.6 64H48V32zM64 224H176c26.5 0 48-21.5 48-48s-21.5-48-48-48H64v96zm112 64H64v96H208c26.5 0 48-21.5 48-48s-21.5-48-48-48H176z"]
}, P2 = {
  prefix: "fas",
  iconName: "wallet",
  icon: [512, 512, [], "f555", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, M2 = {
  prefix: "fas",
  iconName: "litecoin-sign",
  icon: [384, 512, [], "e1d3", "M128 64c0-17.7-14.3-32-32-32S64 46.3 64 64V213.6L23.2 225.2c-17 4.9-26.8 22.6-22 39.6s22.6 26.8 39.6 22L64 280.1V448c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V261.9l136.8-39.1c17-4.9 26.8-22.6 22-39.6s-22.6-26.8-39.6-22L128 195.3V64z"]
}, R2 = {
  prefix: "fas",
  iconName: "coins",
  icon: [512, 512, [], "f51e", "M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"]
}, D2 = {
  prefix: "fas",
  iconName: "credit-card",
  icon: [576, 512, [128179, 62083, "credit-card-alt"], "f09d", "M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"]
}, z2 = {
  prefix: "fas",
  iconName: "dollar-sign",
  icon: [320, 512, [128178, 61781, "dollar", "usd"], "24", "M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"]
};
const L2 = {
  name: "Cryptoicon",
  props: {
    symbol: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    size: {
      type: [String, Number],
      default: "24"
    },
    generic: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      lookupSymbol: /* @__PURE__ */ new Map([["BCHSV", "BSV"], ["BCHABC", "BAB"]])
    };
  },
  computed: {
    lSymbol() {
      return this.symbol && this.symbol.toLowerCase();
    },
    uSymbol() {
      return this.symbol && this.symbol.toUpperCase();
    },
    icon() {
      const e = this.lookupSymbol.has(this.uSymbol) ? this.lookupSymbol.get(this.uSymbol) : this.symbol;
      let t = this.$options.lib.find((n) => n.symbol === e.toLowerCase());
      if (t)
        return this.color ? t.plainIcon(this.color) : t.colorIcon();
      if (this.generic) {
        let n = this.$options.lib.find((r) => r.symbol == "generic");
        if (n)
          return this.color ? n.plainIcon(this.color) : n.colorIcon();
      } else {
        console.error(`Symbol of the icon is not correct: ${this.symbol}`);
        return;
      }
    }
  },
  lib: [],
  add(e) {
    Array.isArray(e) ? this.lib = e : this.lib.push(e);
  }
}, $2 = ["width", "height", "innerHTML"];
function F2(e, t, n, r, o, i) {
  return P(), Y("svg", {
    width: n.size,
    height: n.size,
    class: ge(`cryptoicon--${n.symbol}`),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    onClick: t[0] || (t[0] = (a) => e.$emit("click")),
    innerHTML: i.icon
  }, null, 10, $2);
}
const lf = /* @__PURE__ */ qe(L2, [["render", F2]]), V2 = {
  symbol: "bnb",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><circle cx="16" cy="16" r="16" fill="#F3BA2F"/><path fill="#FFF" d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.884-17.596L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26 2.26L10.52 16l-2.26-2.26L6 16zm6.116 1.596l-2.263 2.257.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48l-3.884-3.884zM21.48 16l2.26 2.26L26 16l-2.26-2.26L21.48 16zm-3.188-.002h.001L16 13.706 14.305 15.4l-.195.195-.401.402-.004.003.004.003 2.29 2.291 2.294-2.293.001-.001-.002-.001z"/>`
}, j2 = {
  symbol: "btc",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fill-rule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || globalThis.color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/>`
}, U2 = {
  symbol: "dai",
  color: "#000",
  colorIcon() {
    return '<g fill="none" fill-rule="evenodd"><circle fill="#F4B731" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M9.277 8h6.552c3.985 0 7.006 2.116 8.13 5.194H26v1.861h-1.611c.031.294.047.594.047.898v.046c0 .342-.02.68-.06 1.01H26v1.86h-2.08C22.767 21.905 19.77 24 15.83 24H9.277v-5.131H7v-1.86h2.277v-1.954H7v-1.86h2.277V8zm1.831 10.869v3.462h4.72c2.914 0 5.078-1.387 6.085-3.462H11.108zm11.366-1.86H11.108v-1.954h11.37c.041.307.063.622.063.944v.045c0 .329-.023.65-.067.964zM15.83 9.665c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z" fill="#FFF"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.171 8H9.277v5.194H7v1.861h2.277v1.953H7v1.86h2.277V24h6.552c3.94 0 6.938-2.095 8.091-5.131H26v-1.86h-1.624c.04-.33.06-.668.06-1.01v-.046c0-.304-.016-.604-.047-.898H26v-1.86h-2.041C22.835 10.114 19.814 8 15.829 8zm6.084 10.869c-1.007 2.075-3.171 3.462-6.084 3.462h-4.72v-3.462zm.564-3.814c.042.307.064.622.064.944v.045c0 .329-.023.65-.067.964H11.108v-1.953h11.37zM15.83 9.666c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z"/>`
}, H2 = {
  symbol: "eth",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#627EEA"/><g fill="#FFF" fill-rule="nonzero"><path fill-opacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fill-opacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fill-opacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/></g></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"/><g fill-rule="nonzero"><path fill-opacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"/><path fill-opacity=".801" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".298" d="M9 16.22l7.498 4.353v-7.701z"/></g></g>`
}, B2 = {
  symbol: "ltc",
  color: "#000",
  colorIcon() {
    return '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#BFBBBB"/><path fill="#FFF" d="M10.427 19.214L9 19.768l.688-2.759 1.444-.58L13.213 8h5.129l-1.519 6.196 1.41-.571-.68 2.75-1.427.571-.848 3.483H23L22.127 24H9.252z"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || globalThis.color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.573-12.786L9.252 24h12.875L23 20.429h-7.722l.848-3.483 1.427-.571.68-2.75-1.41.571L18.342 8h-5.129l-2.081 8.429-1.444.58L9 19.768l1.427-.554z"/>`
}, G2 = {
  symbol: "matic",
  color: "#000",
  colorIcon() {
    return '<g fill="none"><circle fill="#6F41D8" cx="16" cy="16" r="16"/><path d="M21.092 12.693c-.369-.215-.848-.215-1.254 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0l-4.244 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409z" fill="#FFF"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-5.13 7.662l-4.243 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409c-.37-.215-.85-.215-1.255 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0z"/>`
}, Y2 = {
  symbol: "trx",
  color: "#000",
  colorIcon() {
    return '<g fill="none"><circle fill="#EF0027" cx="16" cy="16" r="16"/><path d="M21.932 9.913L7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562zm-.232 1.17l2.208 2.099-6.038 1.093 3.83-3.192zm-5.142 2.973l-6.364-5.278 10.402 1.914-4.038 3.364zm-.453.934l-1.038 8.58L9.472 9.487l6.633 5.502zm.96.455l6.687-1.21-7.67 9.343.983-8.133z" fill="#FFF"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562L7.5 7.257zm16.252 6.977l-7.67 9.344.983-8.133 6.687-1.21zM9.472 9.488l6.633 5.502-1.038 8.58L9.472 9.487zM21.7 11.083l2.208 2.099-6.038 1.093 3.83-3.192zM10.194 8.778l10.402 1.914-4.038 3.364-6.364-5.278z"/>`
}, W2 = {
  symbol: "uni",
  color: "#000",
  colorIcon() {
    return '<g fill="none" fill-rule="evenodd"><circle fill="#FF007A" fill-rule="nonzero" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M12.261 5.767c-.285-.044-.297-.05-.163-.07.257-.04.865.015 1.284.114.977.233 1.866.828 2.816 1.885l.252.28.36-.057c1.52-.245 3.067-.05 4.36.547.356.164.917.491.987.576.023.026.064.199.091.383.096.637.048 1.125-.146 1.49-.106.198-.112.26-.041.43a.416.416 0 00.372.236c.322 0 .668-.52.828-1.243l.064-.287.126.143c.692.784 1.235 1.853 1.328 2.613l.025.199-.117-.18c-.2-.31-.4-.522-.658-.693-.464-.307-.955-.411-2.255-.48-1.174-.062-1.839-.162-2.497-.377-1.121-.365-1.686-.852-3.018-2.599-.591-.776-.957-1.205-1.32-1.55-.827-.786-1.639-1.198-2.678-1.36z" fill-rule="nonzero"/><path d="M22.422 7.5c.03-.52.1-.863.242-1.176.056-.124.109-.226.117-.226a.773.773 0 01-.055.204c-.103.304-.12.72-.049 1.203.09.614.142.702.79 1.365.305.311.659.703.787.872l.233.306-.233-.219c-.285-.267-.941-.79-1.086-.864-.097-.05-.112-.049-.172.01-.055.056-.067.138-.074.529-.012.608-.095 1-.296 1.39-.108.21-.125.166-.027-.073.073-.178.08-.256.08-.845 0-1.184-.141-1.468-.966-1.956a9.046 9.046 0 00-.764-.396 2.916 2.916 0 01-.374-.182c.023-.023.827.211 1.15.336.482.185.561.209.62.186.039-.015.058-.129.077-.464zm-9.607 2.025c-.579-.797-.937-2.02-.86-2.934l.024-.283.132.024c.248.045.675.204.875.326.548.333.786.772 1.027 1.898.071.33.164.703.207.83.068.203.328.678.54.987.152.222.05.327-.286.297-.514-.047-1.21-.527-1.659-1.145zm8.905 5.935c-2.707-1.09-3.66-2.036-3.66-3.632 0-.235.008-.427.017-.427.01 0 .115.077.233.172.549.44 1.164.628 2.865.876 1.001.147 1.565.265 2.085.437 1.652.548 2.674 1.66 2.918 3.174.07.44.029 1.265-.086 1.7-.09.344-.367.963-.44.987-.02.006-.04-.071-.046-.178-.028-.568-.315-1.122-.798-1.537-.549-.471-1.286-.847-3.089-1.572zm-1.9.452a4.808 4.808 0 00-.131-.572l-.07-.206.129.144c.177.2.318.454.436.794.091.259.101.336.1.757 0 .414-.011.5-.095.734a2.32 2.32 0 01-.571.908c-.495.504-1.13.782-2.048.898-.16.02-.624.054-1.033.075-1.03.054-1.707.164-2.316.378a.488.488 0 01-.174.042c-.024-.025.39-.272.733-.437.483-.233.963-.36 2.04-.539.532-.089 1.082-.196 1.221-.239 1.318-.404 1.995-1.446 1.778-2.737z" fill-rule="nonzero"/><path d="M21.06 18.116c-.36-.773-.442-1.52-.245-2.216.021-.074.055-.135.075-.135a.73.73 0 01.189.102c.166.112.498.3 1.383.782 1.105.603 1.735 1.07 2.164 1.602.375.467.607.999.719 1.647.063.367.026 1.25-.068 1.62-.297 1.166-.988 2.082-1.972 2.616a2.53 2.53 0 01-.288.143c-.014 0 .038-.133.117-.297.33-.692.369-1.366.118-2.116-.153-.459-.466-1.02-1.097-1.966-.734-1.1-.914-1.394-1.095-1.782zm-10.167 4.171c1.005-.848 2.254-1.45 3.393-1.635.49-.08 1.308-.048 1.762.068.728.186 1.38.604 1.719 1.101.33.486.473.91.62 1.852.06.372.123.745.142.83.11.488.327.879.595 1.075.425.311 1.158.33 1.878.05a.981.981 0 01.236-.074c.026.026-.336.269-.592.397a2.014 2.014 0 01-.983.238c-.66 0-1.208-.335-1.665-1.02-.09-.135-.292-.538-.45-.897-.482-1.1-.72-1.436-1.28-1.803-.489-.32-1.118-.377-1.591-.145-.622.305-.795 1.1-.35 1.603.177.2.507.373.777.406a.83.83 0 00.939-.83c0-.332-.128-.52-.448-.665-.437-.197-.907.033-.905.444.001.175.077.285.253.365.113.05.115.055.023.036-.401-.084-.495-.567-.172-.888.387-.386 1.188-.216 1.463.31.116.221.129.662.028.928-.225.595-.883.907-1.55.737-.454-.116-.639-.241-1.186-.805-.951-.98-1.32-1.17-2.692-1.384l-.263-.041.3-.253z" fill-rule="nonzero"/><path d="M6.196 3.35l.096.117c3.708 4.54 5.624 6.896 5.746 7.064.2.278.125.527-.219.723-.191.109-.585.219-.781.219-.223 0-.474-.107-.657-.28-.129-.123-.65-.901-1.853-2.768a188.53 188.53 0 00-1.712-2.633c-.049-.046-.048-.045 1.618 2.936 1.046 1.872 1.4 2.533 1.4 2.622 0 .18-.05.274-.272.522-.37.413-.535.877-.655 1.837-.134 1.077-.51 1.837-1.554 3.138-.61.762-.71.902-.865 1.209-.194.386-.247.603-.269 1.091-.023.516.022.85.18 1.343.138.432.282.718.65 1.288.318.493.501.859.501 1.002 0 .114.022.114.515.003 1.179-.266 2.136-.735 2.675-1.309.333-.355.411-.551.414-1.038.001-.318-.01-.385-.096-.568-.14-.298-.395-.546-.957-.93-.737-.504-1.051-.91-1.138-1.467-.072-.457.011-.78.419-1.634.421-.884.526-1.26.597-2.151.045-.576.108-.803.274-.985.172-.19.328-.255.755-.313.696-.095 1.139-.275 1.503-.61.316-.292.448-.573.468-.995l.016-.32-.177-.206c-.254-.296-2.355-2.614-6.304-6.956l-.106-.115-.212.165zM7.91 19.732a.566.566 0 00-.174-.746c-.228-.152-.583-.08-.583.118 0 .06.033.104.108.143.127.065.136.139.037.288-.101.152-.093.286.023.377.186.146.45.065.59-.18zm5.524-7.176c-.327.1-.644.447-.743.81-.06.221-.026.61.064.73.145.194.286.245.666.242.744-.005 1.39-.324 1.466-.723.062-.327-.223-.78-.614-.98-.202-.102-.631-.143-.839-.079zm.87.68c.115-.163.064-.34-.13-.458-.372-.227-.934-.04-.934.312 0 .174.293.365.561.365.18 0 .424-.107.503-.219z"/></g></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16A15.97 15.97 0 016.199 3.353l.093.114.25.306c3.544 4.34 5.376 6.593 5.496 6.758.2.278.125.527-.219.723-.191.109-.585.219-.781.219-.223 0-.474-.107-.657-.28a1.453 1.453 0 01-.134-.167l-.086-.119c-.27-.384-.78-1.16-1.633-2.482a188.53 188.53 0 00-1.712-2.633l-.012-.01c-.002 0-.001.004.004.016l.032.064c.103.198.469.852 1.594 2.866 1.046 1.872 1.4 2.533 1.4 2.622 0 .18-.05.274-.272.522-.37.413-.535.877-.655 1.837-.134 1.077-.51 1.837-1.554 3.138-.61.762-.71.902-.865 1.209-.194.386-.247.603-.269 1.091-.023.516.022.85.18 1.343.138.432.282.718.65 1.288.318.493.501.859.501 1.002 0 .114.022.114.515.003 1.179-.266 2.136-.735 2.675-1.309.333-.355.411-.551.414-1.038.001-.318-.01-.385-.096-.568-.14-.298-.395-.546-.957-.93-.737-.504-1.051-.91-1.138-1.467-.072-.457.011-.78.419-1.634.421-.884.526-1.26.597-2.151.045-.576.108-.803.274-.985.172-.19.328-.255.755-.313.696-.095 1.139-.275 1.503-.61.316-.292.448-.573.468-.995l.016-.32-.177-.206-.02-.024c-.332-.38-2.427-2.691-6.284-6.932l-.102-.111A15.93 15.93 0 0116 0zm.048 20.72c-.454-.116-1.271-.148-1.762-.068-1.139.185-2.388.787-3.393 1.635l-.299.253.263.04c1.371.215 1.74.405 2.692 1.385.547.564.732.69 1.186.805.667.17 1.325-.142 1.55-.737.101-.266.088-.707-.028-.928-.275-.526-1.076-.696-1.463-.31-.323.32-.229.804.172.888.092.019.09.015-.023-.036-.176-.08-.252-.19-.253-.365-.002-.41.468-.641.905-.444.32.144.448.333.448.664a.83.83 0 01-.939.831 1.38 1.38 0 01-.777-.406c-.445-.504-.272-1.298.35-1.603.473-.232 1.102-.175 1.59.145.56.367.799.702 1.282 1.803.157.359.36.762.45.897.456.685 1.004 1.02 1.664 1.02.364 0 .638-.066.983-.238.256-.128.618-.37.592-.397a1.005 1.005 0 00-.236.073c-.72.281-1.453.262-1.878-.05-.268-.195-.484-.586-.595-1.074a23.05 23.05 0 01-.141-.83c-.148-.942-.29-1.366-.621-1.852-.34-.497-.99-.915-1.719-1.101zm4.842-4.955c-.02 0-.054.061-.075.135-.197.697-.115 1.443.245 2.216l.065.135c.166.333.382.676 1.03 1.647.631.947.944 1.507 1.097 1.966.25.75.213 1.424-.118 2.116-.079.164-.131.297-.117.297.014 0 .143-.064.288-.143.984-.534 1.675-1.45 1.972-2.616.094-.37.131-1.253.068-1.62-.112-.648-.344-1.18-.72-1.647-.428-.533-1.058-1-2.163-1.602-.885-.482-1.217-.67-1.383-.782a.73.73 0 00-.189-.102zM7.152 19.103c0-.198.355-.27.583-.118.242.16.319.49.174.746-.138.245-.403.326-.59.18-.115-.091-.123-.225-.022-.377.1-.15.09-.223-.037-.288-.075-.039-.108-.083-.108-.143zm12.468-3.97l.069.207a4.8 4.8 0 01.13.572c.217 1.29-.46 2.333-1.778 2.737-.14.043-.689.15-1.22.239-1.078.18-1.558.306-2.041.539-.343.165-.757.412-.733.437a.488.488 0 00.174-.042c.609-.214 1.287-.324 2.316-.378.409-.021.874-.055 1.033-.075.918-.116 1.553-.394 2.048-.898.275-.28.439-.54.57-.908.085-.234.096-.32.097-.734 0-.421-.01-.498-.1-.757-.12-.34-.26-.595-.437-.794l-.128-.144zm-1.543-3.732c-.01 0-.018.192-.018.427 0 1.596.954 2.542 3.66 3.632 1.803.725 2.54 1.1 3.09 1.572.482.415.77.969.797 1.537.005.107.025.184.045.178.074-.024.35-.643.441-.987.115-.435.156-1.26.086-1.7-.244-1.514-1.266-2.626-2.918-3.174-.52-.172-1.084-.29-2.085-.437-1.701-.248-2.316-.436-2.865-.876a2.057 2.057 0 00-.233-.172zm-3.804 1.235c-.202-.103-.631-.144-.839-.08-.327.1-.644.447-.743.81-.06.221-.026.61.064.73.145.194.286.245.666.242.744-.005 1.39-.324 1.466-.723.062-.327-.223-.78-.614-.98zm-1.033.454c0-.351.562-.54.933-.312.195.119.246.295.13.458-.078.112-.323.22-.502.22-.268 0-.561-.192-.561-.366zm.142-7.279c-.419-.1-1.027-.153-1.284-.114-.134.02-.122.026.163.07 1.04.162 1.851.574 2.678 1.36.363.345.729.774 1.32 1.55 1.332 1.747 1.897 2.234 3.018 2.6.658.214 1.323.314 2.497.376 1.3.069 1.79.173 2.255.48.257.17.458.382.658.692l.117.18-.025-.198c-.093-.76-.636-1.83-1.328-2.613l-.126-.143-.064.287c-.16.723-.506 1.242-.828 1.243a.416.416 0 01-.372-.236c-.071-.17-.065-.232.04-.43.195-.365.243-.853.147-1.49-.027-.184-.068-.357-.09-.383-.07-.085-.632-.412-.988-.576-1.293-.598-2.84-.792-4.36-.547l-.36.058-.252-.281c-.95-1.057-1.839-1.652-2.816-1.885zm9.399.287c-.008 0-.061.102-.117.226-.142.313-.212.656-.242 1.176-.019.335-.038.45-.077.464-.059.023-.138-.001-.62-.186-.323-.125-1.127-.36-1.15-.336-.006.006.162.088.374.182s.556.272.764.396c.825.488.965.772.966 1.956 0 .59-.007.667-.08.845-.098.239-.08.284.027.073.2-.39.284-.782.296-1.39.007-.39.019-.473.074-.528.06-.06.075-.06.172-.01.145.074.8.596 1.086.863l.233.219-.233-.306c-.128-.169-.482-.56-.787-.872-.648-.663-.7-.751-.79-1.365-.07-.484-.054-.9.05-1.203a.773.773 0 00.054-.204zm-10.802.21l-.024.283c-.077.914.281 2.137.86 2.934.45.618 1.145 1.098 1.66 1.145.336.03.437-.075.285-.297-.212-.309-.472-.784-.54-.988a10.64 10.64 0 01-.207-.83c-.241-1.125-.479-1.564-1.027-1.897a3.31 3.31 0 00-.875-.326l-.132-.024z"/>`
}, q2 = {
  symbol: "usdc",
  color: "#000",
  colorIcon() {
    return '<g fill="none"><circle fill="#3E73C4" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M20.022 18.124c0-2.124-1.28-2.852-3.84-3.156-1.828-.243-2.193-.728-2.193-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975a.416.416 0 00.427-.425v-.06a3.04 3.04 0 00-2.743-2.489V9.142c0-.243-.183-.425-.487-.486h-.915c-.243 0-.426.182-.487.486v1.396c-1.829.242-2.986 1.456-2.986 2.974 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036a.416.416 0 00-.426.425v.06c.243 1.518 1.219 2.61 3.23 2.914v1.457c0 .242.183.425.487.485h.915c.243 0 .426-.182.487-.485V21.34c1.829-.303 3.047-1.578 3.047-3.217z"/><path d="M12.892 24.497c-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85c0-.242-.121-.424-.365-.485-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85c0-.182-.182-.424-.365-.546zm6.46-18.936c-.244-.122-.488 0-.548.242-.061.061-.061.122-.061.243v.85c0 .243.182.485.365.607 4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85c0 .242.121.424.365.485.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162z"/></g></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || globalThis.color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm3.352 5.56c-.244-.12-.488 0-.548.243-.061.061-.061.122-.061.243v.85l.01.104a.86.86 0 00.355.503c4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85l.005.088a.45.45 0 00.36.397c.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162zm-6.46-.06c-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85l-.01-.08c-.042-.169-.199-.362-.355-.466-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85l-.005-.088a.45.45 0 00-.36-.397zm3.535 3.156h-.915l-.088.008c-.2.04-.346.212-.4.478v1.396l-.207.032c-1.708.304-2.778 1.483-2.778 2.942 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036l-.079.007a.413.413 0 00-.347.418v.06l.033.18c.29 1.424 1.266 2.443 3.197 2.734v1.457l.008.088c.04.198.213.344.48.397h.914l.088-.008c.2-.04.346-.212.4-.477V21.34l.207-.04c1.713-.362 2.84-1.601 2.84-3.177 0-2.124-1.28-2.852-3.84-3.156-1.829-.243-2.194-.728-2.194-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975l.079-.006a.413.413 0 00.348-.419v-.06l-.037-.173a3.04 3.04 0 00-2.706-2.316V9.142l-.008-.088c-.04-.199-.213-.345-.48-.398z"/>`
}, K2 = {
  symbol: "usdt",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#26A17B"/><path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || globalThis.color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.922-18.207v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117zm0 3.59v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657z"/>`
}, X2 = {
  symbol: "xmr",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F60"/><path fill="#FFF" fill-rule="nonzero" d="M15.97 5.235c5.985 0 10.825 4.84 10.825 10.824a11.07 11.07 0 01-.558 3.432h-3.226v-9.094l-7.04 7.04-7.04-7.04v9.094H5.704a11.07 11.07 0 01-.557-3.432c0-5.984 4.84-10.824 10.824-10.824zM14.358 19.02L16 20.635l1.613-1.614 3.051-3.08v5.72h4.547a10.806 10.806 0 01-9.24 5.192c-3.902 0-7.334-2.082-9.24-5.192h4.546v-5.72l3.08 3.08z"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || globalThis.color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.03-26.765A10.816 10.816 0 005.148 16.059c0 1.202.205 2.346.557 3.432h3.227v-9.094l7.04 7.04 7.04-7.04v9.094h3.226a11.07 11.07 0 00.558-3.432c0-5.984-4.84-10.824-10.824-10.824zM14.358 19.02l-3.08-3.08v5.72H6.731c1.906 3.11 5.338 5.192 9.24 5.192 3.901 0 7.362-2.082 9.24-5.192h-4.547v-5.72l-3.05 3.08L16 20.635l-1.643-1.614z"/>`
};
lf.add([j2, B2, X2, H2, V2, Y2, G2, K2, q2, W2, U2]);
f2.add(A2, T2, O2, S2, C2, D2, I2, k2, N2, M2, P2, R2, z2);
const J2 = de({
  name: "PaymentMethod",
  components: {
    CryptoIcon: lf,
    Navigator: eo,
    RadioGroup: Gu,
    RadioGroupDescription: qu,
    RadioGroupLabel: Wu,
    RadioGroupOption: Yu,
    DialogTitle: ln,
    FontAwesomeIcon: E2,
    Disclosure: D1,
    DisclosureButton: z1,
    DisclosurePanel: L1
  },
  setup() {
    const { context: e } = ut(), t = {
      PAYPAL: {
        description: "Checkout with your PayPal account",
        name: "PayPal",
        icon: "fa-brands fa-paypal"
      },
      PAYSTACK: {
        description: "Pay with credit and debit card",
        name: "PayStack",
        icon: "fa-solid fa-money-bill-wave"
      },
      STRIPE: {
        description: "Debit and credit card, Apple/Google Pay, and more",
        name: "Stripe",
        icon: "fa-brands fa-cc-stripe"
      },
      CASHAPP: {
        description: "Checkout with your Cash App account",
        name: "Cash App",
        icon: "fa-solid fa-credit-card"
      },
      SQUARE: {
        description: "Debit and credit card, Apple/Google Pay, and more",
        name: "Square",
        icon: "fa-solid fa-credit-card"
      },
      VENMO: {
        description: "Pay directly with your Venmo account",
        name: "Venmo",
        icon: "fa-solid fa-v"
      },
      PADDLE: {
        description: "Debit and credit card, Apple/Google Pay, and more",
        name: "Paddle",
        icon: "fa-solid fa-credit-card"
      },
      BTC: {
        description: "Pay with Bitcoin",
        name: "Bitcoin",
        icon: "Btc"
      },
      LTC: {
        description: "Pay with Litecoin",
        name: "Litecoin",
        icon: "Ltc"
      },
      ETH: {
        description: "Pay with Ethereum",
        name: "Ethereum",
        icon: "Eth"
      },
      XMR: {
        description: "Pay with Monero",
        name: "Monero",
        icon: "Xmr"
      },
      BNB: {
        description: "Pay with BNB",
        name: "BNB",
        icon: "Bnb"
      },
      TRX: {
        description: "Pay with Tron",
        name: "Tron",
        icon: "Trx"
      },
      MATIC: {
        description: "Pay with Polygon",
        name: "Polygon",
        icon: "Matic"
      },
      ETH_USDT: {
        description: "Pay with USDT",
        name: "USDT",
        icon: "Usdt"
      },
      ETH_USDC: {
        description: "Pay with USDC",
        name: "USDC",
        icon: "Usdc"
      },
      ETH_UNI: {
        description: "Pay with UNI",
        name: "Uniswap",
        icon: "Uni"
      },
      ETH_SHIB: {
        description: "Pay with SHIB",
        name: "Shiba Inu",
        icon: "Eth"
      },
      ETH_DAI: {
        description: "Pay with DAI",
        name: "Dai",
        icon: "Dai"
      }
    }, n = (i) => {
      var a, s;
      return i = i.toLowerCase(), ((s = (a = e.value.variant) == null ? void 0 : a.payment_discounts) == null ? void 0 : s[i]) || 0;
    }, r = {
      type: e.value.variant.discord_request ? "CONNECT_DISCORD" : "CUSTOMER_EMAIL"
    }, o = F(() => !Zn(e.value.variant.crypto_options));
    return {
      checkout_information: Ee,
      context: e,
      paymentMethods: t,
      getDiscount: n,
      next: r,
      showCrypto: o
    };
  }
}), Q2 = { class: "embed-flex embed-flex-col embed-px-4 embed-pt-5 embed-pb-4 sm:embed-p-6" }, Z2 = { class: "embed-mt-3 embed-space-y-4" }, eg = /* @__PURE__ */ k("div", { class: "embed-rounded-lg embed-w-full embed-py-2 embed-px-6 embed-flex embed-flex-col embed-text-black dark:embed-text-white" }, [
  /* @__PURE__ */ k("p", { class: "embed-font-medium embed-text-left embed-mb-1" }, "Crypto"),
  /* @__PURE__ */ k("p", { class: "embed-text-xs embed-font-medium embed-text-left" }, "Click to show cryptocurrency options")
], -1), tg = { class: "embed-space-y-4" }, ng = { class: "embed-flex embed-items-center embed-justify-between embed-flex-grow-0" }, rg = { class: "embed-text-sm" }, og = { class: "embed-mr-1" }, ig = {
  key: 0,
  class: "embed-bg-white dark:embed-bg-black embed-rounded-xl embed-shadow dark:embed-shadow-black embed-text-xs embed-text-black dark:embed-text-white embed-absolute -embed-bottom-4 embed-left-1/2 -embed-translate-x-1/2 -embed-translate-y-1/2 embed-px-2"
}, ag = {
  key: 1,
  class: "embed-bg-white dark:embed-bg-black embed-rounded-xl embed-shadow dark:embed-shadow-black embed-text-xs embed-text-black dark:embed-text-white embed-absolute -embed-bottom-4 embed-left-1/2 -embed-translate-x-1/2 -embed-translate-y-1/2 embed-px-2"
}, sg = /* @__PURE__ */ k("div", {
  class: "embed-absolute -embed-inset-px embed-rounded-lg embed-pointer-events-none",
  "aria-hidden": "true"
}, null, -1), lg = { class: "embed-flex embed-items-center embed-justify-between embed-flex-grow-0" }, cg = { class: "embed-text-sm" }, ug = { class: "embed-mr-1" }, dg = {
  key: 0,
  class: "embed-bg-white dark:embed-bg-black embed-rounded-xl embed-shadow dark:embed-shadow-black embed-text-xs embed-text-black dark:embed-text-white embed-absolute -embed-bottom-4 embed-left-1/2 -embed-translate-x-1/2 -embed-translate-y-1/2 embed-px-2"
}, fg = {
  key: 1,
  class: "embed-bg-white dark:embed-bg-black embed-rounded-xl embed-shadow dark:embed-shadow-black embed-text-xs embed-text-black dark:embed-text-white embed-absolute -embed-bottom-4 embed-left-1/2 -embed-translate-x-1/2 -embed-translate-y-1/2 embed-px-2"
}, mg = /* @__PURE__ */ k("div", {
  class: "embed-absolute -embed-inset-px embed-rounded-lg embed-pointer-events-none",
  "aria-hidden": "true"
}, null, -1), pg = ["textContent"], bg = ["textContent"], hg = ["textContent"];
function vg(e, t, n, r, o, i) {
  var y, v, w, x, I, $, R, C, D, W, V, A, X, ce, Ce;
  const a = te("DialogTitle"), s = te("RadioGroupLabel"), l = te("RadioGroupDescription"), c = te("DisclosureButton"), u = te("CryptoIcon"), f = te("RadioGroupOption"), d = te("DisclosurePanel"), m = te("Disclosure"), p = te("font-awesome-icon"), h = te("RadioGroup"), _ = te("Navigator");
  return P(), Y("div", null, [
    k("div", Q2, [
      H(a, {
        as: "h2",
        class: "embed-font-bold embed-text-center embed-text-black dark:embed-text-white embed-text-xl"
      }, {
        default: ne(() => [
          _e("Payment Method")
        ]),
        _: 1
      }),
      H(h, {
        modelValue: e.checkout_information.payment_method,
        "onUpdate:modelValue": t[0] || (t[0] = (J) => e.checkout_information.payment_method = J)
      }, {
        default: ne(() => [
          H(s, { class: "embed-sr-only" }, {
            default: ne(() => [
              _e("Payment Method")
            ]),
            _: 1
          }),
          H(l, { class: "embed-mb-4 embed-font-normal embed-text-center embed-text-zinc-800 dark:embed-text-zinc-400 embed-text-xs" }, {
            default: ne(() => [
              _e("Select which payment method you'd like to pay with")
            ]),
            _: 1
          }),
          k("div", Z2, [
            e.showCrypto ? (P(), ze(m, { key: 0 }, {
              default: ne(() => [
                H(c, { class: "embed-w-full embed-rounded-lg embed-bg-white dark:embed-from-zinc-800 dark:[background:linear-gradient(theme(colors.zinc.800),_theme(colors.zinc.800))_padding-box,_conic-gradient(theme(colors.zinc.500),_theme(colors.zinc.800)_25%,_theme(colors.zinc.800)_75%,_theme(colors.zinc.500)_100%)_border-box] dark:embed-border dark:embed-border-transparent embed-shadow-inner embed-shadow-zinc-200 hover:embed-shadow-zinc-300 dark:embed-shadow-neutral-900 dark:hover:embed-shadow-black embed-transition embed-duration-300 embed-ease-in-out" }, {
                  default: ne(() => [
                    eg
                  ]),
                  _: 1
                }),
                H(qn, {
                  "enter-active-class": "embed-transition embed-duration-100 embed-ease-out embed-origin-top",
                  "enter-from-class": "embed-transform embed-scale-0 embed-opacity-0",
                  "enter-to-class": "embed-transform embed-scale-100 embed-opacity-100",
                  "leave-active-class": "embed-transition embed-duration-100 embed-ease-in embed-origin-top",
                  "leave-from-class": "embed-transform embed-scale-100 embed-opacity-100",
                  "leave-to-class": "embed-transform embed-scale-0 embed-opacity-0"
                }, {
                  default: ne(() => [
                    H(d, null, {
                      default: ne(() => [
                        k("div", tg, [
                          (P(!0), Y(Me, null, Yn(e.context.variant.crypto_options, (J) => (P(), ze(f, {
                            key: J,
                            as: "template",
                            value: J
                          }, {
                            default: ne(({ checked: j }) => [
                              k("div", {
                                class: ge(["embed-flex embed-flex-col dark:embed-border dark:embed-border-transparent embed-shadow-inner", [j ? "embed-bg-white dark:[background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] embed-shadow-zinc-400 dark:embed-shadow-black" : "embed-shadow-zinc-200 hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:embed-shadow-neutral-900 dark:hover:embed-shadow-black dark:focus:embed-shadow-neutral-800 embed-bg-white dark:[background:linear-gradient(theme(colors.zinc.800),_theme(colors.zinc.800))_padding-box,_conic-gradient(theme(colors.zinc.500),_theme(colors.zinc.800)_25%,_theme(colors.zinc.800)_75%,_theme(colors.zinc.500)_100%)_border-box]", "embed-transition embed-duration-300 embed-ease-in-out embed-relative embed-rounded-lg embed-px-6 embed-py-4 embed-cursor-pointer sm:embed-flex sm:embed-justify-between focus:embed-outline-none"]])
                              }, [
                                k("div", ng, [
                                  k("div", rg, [
                                    H(s, {
                                      as: "p",
                                      class: "embed-font-medium embed-text-black dark:embed-text-white"
                                    }, {
                                      default: ne(() => {
                                        var G, me;
                                        return [
                                          k("span", og, [
                                            H(u, {
                                              symbol: (G = e.paymentMethods) == null ? void 0 : G[J].icon,
                                              size: "24",
                                              class: ge(["embed-w-6 embed-h-6", [j ? "embed-text-black dark:embed-text-white" : "embed-text-zinc-600 dark:embed-text-zinc-300"]])
                                            }, null, 8, ["symbol", "class"])
                                          ]),
                                          k("span", {
                                            class: ge(["embed-capitalize embed-ml-1", [j ? "embed-text-black dark:embed-text-white embed-font-bold" : "embed-text-zinc-700 dark:embed-text-zinc-300"]])
                                          }, oe((me = e.paymentMethods) == null ? void 0 : me[J].name), 3)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  e.getDiscount(J) !== null && e.getDiscount(J) > 0 ? (P(), Y("div", ig, [
                                    _e(" Get "),
                                    k("strong", null, oe(e.getDiscount(J)) + "%", 1),
                                    _e(" off ")
                                  ])) : xe("", !0),
                                  e.getDiscount(J) !== null && e.getDiscount(J) < 0 ? (P(), Y("div", ag, [
                                    _e(" Costs "),
                                    k("strong", null, oe(e.getDiscount(J) * -1) + "%", 1),
                                    _e(" extra ")
                                  ])) : xe("", !0)
                                ]),
                                H(l, {
                                  as: "div",
                                  class: ge(["embed-flex embed-text-xs embed-text-left dark:embed-text-zinc-100 embed-mt-2", [j ? "embed-text-black dark:embed-text-white" : "embed-text-zinc-500 dark:embed-text-zinc-400"]])
                                }, {
                                  default: ne(() => {
                                    var G;
                                    return [
                                      _e(oe((G = e.paymentMethods) == null ? void 0 : G[J].description), 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1032, ["class"]),
                                sg
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]))), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : xe("", !0),
            (P(!0), Y(Me, null, Yn(e.context.variant.payment_processors, (J) => (P(), ze(f, {
              key: J,
              as: "template",
              value: J
            }, {
              default: ne(({ checked: j }) => [
                k("div", {
                  class: ge(["embed-flex embed-flex-col dark:embed-border dark:embed-border-transparent embed-shadow-inner", [j ? "embed-bg-white dark:[background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] embed-shadow-zinc-400 dark:embed-shadow-black" : "embed-shadow-zinc-200 hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:embed-shadow-neutral-900 dark:hover:embed-shadow-black dark:focus:embed-shadow-neutral-800 embed-bg-white dark:[background:linear-gradient(theme(colors.zinc.800),_theme(colors.zinc.800))_padding-box,_conic-gradient(theme(colors.zinc.500),_theme(colors.zinc.800)_25%,_theme(colors.zinc.800)_75%,_theme(colors.zinc.500)_100%)_border-box]", "embed-transition embed-duration-300 embed-ease-in-out embed-relative embed-rounded-lg embed-px-6 embed-py-4 embed-cursor-pointer sm:embed-flex sm:embed-justify-between focus:embed-outline-none"]])
                }, [
                  k("div", lg, [
                    k("div", cg, [
                      H(s, {
                        as: "p",
                        class: "embed-flex embed-items-center embed-font-medium embed-text-black dark:embed-text-white"
                      }, {
                        default: ne(() => {
                          var G, me;
                          return [
                            k("span", ug, [
                              H(p, {
                                icon: (G = e.paymentMethods) == null ? void 0 : G[J].icon,
                                class: ge(["embed-w-6 embed-h-6", [j ? "embed-text-black dark:embed-text-white" : "embed-text-zinc-600 dark:embed-text-zinc-300"]])
                              }, null, 8, ["icon", "class"])
                            ]),
                            k("span", {
                              class: ge(["embed-capitalize embed-ml-1", [j ? "embed-text-black dark:embed-text-white embed-font-bold" : "embed-text-zinc-700 dark:embed-text-zinc-300"]])
                            }, oe((me = e.paymentMethods) == null ? void 0 : me[J].name), 3)
                          ];
                        }),
                        _: 2
                      }, 1024)
                    ]),
                    e.getDiscount(J) !== null && e.getDiscount(J) > 0 ? (P(), Y("div", dg, [
                      _e(" Get "),
                      k("strong", null, oe(e.getDiscount(J)) + "%", 1),
                      _e(" off ")
                    ])) : xe("", !0),
                    e.getDiscount(J) !== null && e.getDiscount(J) < 0 ? (P(), Y("div", fg, [
                      _e(" Costs "),
                      k("strong", null, oe(e.getDiscount(J) * -1) + "%", 1),
                      _e(" extra ")
                    ])) : xe("", !0)
                  ]),
                  H(l, {
                    as: "div",
                    class: ge(["embed-flex embed-text-xs embed-text-left embed-mt-2 embed-transition embed-duration-200 embed-ease-in-out", [j ? "embed-text-black dark:embed-text-white" : "embed-text-zinc-500 dark:embed-text-zinc-400"]])
                  }, {
                    default: ne(() => {
                      var G;
                      return [
                        _e(oe((G = e.paymentMethods) == null ? void 0 : G[J].description), 1)
                      ];
                    }),
                    _: 2
                  }, 1032, ["class"]),
                  mg
                ], 2)
              ]),
              _: 2
            }, 1032, ["value"]))), 128))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      (w = (v = (y = e.context.error) == null ? void 0 : y.errors) == null ? void 0 : v.payment_method) != null && w[0] ? (P(), Y("p", {
        key: 0,
        class: "embed-ml-1.5 embed-mt-1 embed-text-left embed-text-sm embed-text-red-600 dark:embed-text-red embed-w-full",
        textContent: oe((I = (x = e.context.error) == null ? void 0 : x.errors) == null ? void 0 : I.payment_method[0])
      }, null, 8, pg)) : xe("", !0),
      (C = (R = ($ = e.context.error) == null ? void 0 : $.errors) == null ? void 0 : R.total) != null && C[0] ? (P(), Y("p", {
        key: 1,
        class: "embed-ml-1.5 embed-mt-1 embed-text-left embed-text-sm embed-text-red-600 dark:embed-text-red embed-w-full",
        textContent: oe((W = (D = e.context.error) == null ? void 0 : D.errors) == null ? void 0 : W.total[0])
      }, null, 8, bg)) : xe("", !0),
      (X = (A = (V = e.context.error) == null ? void 0 : V.errors) == null ? void 0 : A.discord_token) != null && X[0] ? (P(), Y("p", {
        key: 2,
        class: "embed-ml-1.5 embed-mt-1 embed-text-left embed-text-sm embed-text-red-600 dark:embed-text-red embed-w-full",
        textContent: oe((Ce = (ce = e.context.error) == null ? void 0 : ce.errors) == null ? void 0 : Ce.discord_token[0])
      }, null, 8, hg)) : xe("", !0),
      H(_, {
        next: e.next,
        class: ge(e.checkout_information.payment_method == null ? "embed-hidden" : "")
      }, null, 8, ["next", "class"])
    ])
  ]);
}
const gg = /* @__PURE__ */ qe(J2, [["render", vg]]), yg = de({
  name: "InputGroup",
  components: {
    ExclamationCircleIcon: Id
  },
  inheritAttrs: !1,
  props: {
    type: {
      type: String,
      required: !0
    },
    errorKey: {
      type: String,
      required: !1,
      default: null
    },
    modelValue: {
      type: null,
      required: !1,
      default: null
    },
    label: {
      type: String,
      required: !1,
      default: null
    },
    fieldKey: {
      type: String,
      required: !1,
      default: null
    },
    options: {
      type: Array,
      required: !1,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(e, { slots: t, emit: n }) {
    const { context: r } = ut();
    function o(s) {
      n("update:modelValue", s);
    }
    const i = (s) => !!t[s], a = F(() => {
      var s, l, c;
      return (c = (l = (s = r.value.error) == null ? void 0 : s.errors) == null ? void 0 : l[e.errorKey]) == null ? void 0 : c[0];
    });
    return {
      hasSlot: i,
      emitUpdate: o,
      error: a
    };
  }
}), _g = ["for"], wg = {
  key: 0,
  class: "embed-absolute embed-inset-y-0 embed-left-0 embed-pl-3 embed-pt-1 embed-flex embed-items-center embed-pointer-events-none"
}, xg = ["type", "value"], Eg = ["id", "checked", "type", "value"], kg = ["value"], Sg = /* @__PURE__ */ k("option", { value: "" }, "Select an option", -1), Og = ["value"], Ag = ["value"], Ng = ["textContent"];
function Ig(e, t, n, r, o, i) {
  const a = te("ExclamationCircleIcon");
  return P(), Y(Me, null, [
    k("div", {
      class: ge({
        "embed-justify-between embed-flex embed-items-center embed-h-5": e.type === "checkbox"
      })
    }, [
      k("label", {
        for: e.fieldKey,
        class: "embed-block embed-text-sm embed-font-medium embed-text-black dark:embed-text-white"
      }, oe(e.label), 9, _g),
      k("div", {
        class: ge(["embed-relative embed-rounded-md", { "embed-mt-1": e.type !== "checkbox" && !!e.label }])
      }, [
        e.type !== "checkbox" && e.type !== "textarea" ? (P(), Y("div", wg, [
          jo(e.$slots, "icon")
        ])) : xe("", !0),
        e.type !== "textarea" && e.type !== "checkbox" && e.type !== "select" ? (P(), Y("input", Ar({
          key: 1,
          type: e.type,
          class: {
            "embed-border embed-border-transparent embed-w-full embed-rounded-md embed-bg-white dark:[background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] embed-text-black dark:embed-text-white embed-placeholder-neutral-500 focus:embed-placeholder-neutral-800 dark:embed-placeholder-neutral-500 dark:focus:embed-placeholder-neutral-400 focus:embed-ring-0 embed-shadow-inner embed-shadow-zinc-200 hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:embed-shadow-black dark:hover:embed-shadow-zinc-600 dark:focus:embed-shadow-zinc-600 embed-transition embed-duration-200 embed-ease-in-out disabled:embed-bg-zinc-100 dark:disabled:embed-bg-zinc-900 disabled:embed-opacity-70": e.type !== "checkbox",
            "embed-pl-10": e.hasSlot("icon"),
            "embed-placeholder-red-300 dark:embed-placeholder-red-600 embed-text-red-900 embed-border-red-300 focus:embed-ring-red-500 focus:embed-border-red-500": !!e.error,
            "embed-pr-10": !!e.error && e.type !== "number"
          },
          value: e.modelValue
        }, e.$attrs, {
          onInput: t[0] || (t[0] = (s) => e.emitUpdate(s.target.value))
        }), null, 16, xg)) : e.type === "checkbox" ? (P(), Y("input", Ar({
          key: 2,
          id: e.fieldKey,
          checked: e.modelValue,
          type: e.type,
          class: "embed-appearance-none embed-rounded focus:embed-border-zinc-100 focus:embed-ring-0 focus:embed-ring-offset-0 dark:focus:embed-border-transparent dark:focus:embed-text-black embed-bg-white dark:[background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] embed-text-black dark:embed-text-white embed-placeholder-neutral-500 focus:embed-placeholder-neutral-800 dark:embed-placeholder-neutral-500 dark:focus:embed-placeholder-neutral-400 embed-shadow-inner embed-shadow-zinc-200 hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:embed-shadow-black dark:hover:embed-shadow-zinc-600 dark:focus:embed-shadow-zinc-600 embed-transition embed-duration-200 embed-ease-in-out disabled:embed-bg-zinc-100 dark:disabled:embed-bg-zinc-900 disabled:embed-opacity-70 embed-border embed-border-transparent checked:embed-bg-zinc-950",
          value: e.modelValue
        }, e.$attrs, {
          onInput: t[1] || (t[1] = (s) => e.emitUpdate(s.target.checked))
        }), null, 16, Eg)) : e.type === "select" ? (P(), Y("select", {
          key: 3,
          value: e.modelValue,
          class: ge(["embed-border embed-border-transparent embed-w-full embed-rounded-md embed-bg-white dark:embed-bg-zinc-950 dark:[background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] embed-text-black dark:embed-text-white embed-placeholder-neutral-500 focus:embed-placeholder-neutral-800 dark:embed-placeholder-neutral-500 dark:focus:embed-placeholder-neutral-400 focus:embed-ring-0 embed-shadow-inner embed-shadow-zinc-200 hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:embed-shadow-black dark:hover:embed-shadow-zinc-600 dark:focus:embed-shadow-zinc-600 embed-transition embed-duration-200 embed-ease-in-out disabled:embed-bg-zinc-100 dark:disabled:embed-bg-zinc-900 disabled:embed-opacity-70", { "embed-placeholder-red-300 dark:embed-placeholder-red-600 embed-text-red-900 embed-border-red-300 focus:embed-ring-red-500 focus:embed-border-red-500": !!e.error }]),
          onInput: t[2] || (t[2] = (s) => e.emitUpdate(s.target.value))
        }, [
          Sg,
          (P(!0), Y(Me, null, Yn(e.options, (s) => (P(), Y("option", {
            key: s,
            value: s
          }, oe(s), 9, Og))), 128))
        ], 42, kg)) : (P(), Y("textarea", Ar({
          key: 4,
          class: ["embed-w-full embed-bg-white focus:embed-bg-zinc-50 dark:[background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] embed-text-black dark:embed-text-zinc-100 embed-border embed-border-transparent embed-rounded-md embed-placeholder-neutral-500 focus:embed-placeholder-neutral-800 dark:embed-placeholder-neutral-500 dark:focus:embed-placeholder-neutral-400 focus:embed-outline-none embed-shadow-inner embed-shadow-zinc-200 hover:embed-shadow-zinc-300 focus:embed-shadow-zinc-400 dark:embed-shadow-black dark:hover:embed-shadow-zinc-600 dark:focus:embed-shadow-zinc-600 focus:embed-ring-0 focus:embed-border-transparent embed-transition embed-duration-200 embed-ease-in-out", {
            "embed-placeholder-red-300 embed-text-red-900 embed-border-red-300 focus:embed-ring-red-500 focus:embed-border-red-500": !!e.error
          }],
          value: e.modelValue
        }, e.$attrs, {
          onInput: t[3] || (t[3] = (s) => e.emitUpdate(s.target.value))
        }), null, 16, Ag)),
        e.error && (e.type === "text" || e.type === "email") ? (P(), Y("div", {
          key: 5,
          class: ge(["embed-absolute embed-inset-y-0 embed-right-0 embed-pr-3 embed-flex embed-items-center embed-pointer-events-none", { "embed-mr-6": e.type === "number" }])
        }, [
          H(a, {
            class: "embed-h-5 embed-w-5 embed-text-red-500 dark:embed-text-red-900",
            "aria-hidden": "true"
          })
        ], 2)) : xe("", !0)
      ], 2)
    ], 2),
    e.error ? (P(), Y("p", {
      key: 0,
      class: "embed-mt-1 embed-text-xs embed-text-red-600 dark:embed-text-red embed-w-full embed-flex-grow",
      textContent: oe(e.error)
    }, null, 8, Ng)) : xe("", !0)
  ], 64);
}
const Ts = /* @__PURE__ */ qe(yg, [["render", Ig]]), Cg = de({
  name: "ConnectDiscord",
  components: {
    Navigator: eo,
    DialogTitle: ln,
    InputGroup: Ts,
    MyButton: Ii
  },
  setup() {
    const { context: e } = ut();
    let t = re(e.value.discord_data.discord_username);
    Ee.discord_token = e.value.discord_data.discord_token;
    const n = re(!0), r = () => {
      const i = window.open(e.value.discord_data.connect_url, "_blank", "width=400, height=600");
      (!i || i.closed || typeof i.closed > "u") && (n.value = !1);
    }, o = (i) => {
      var u;
      const a = i.data, s = /^((http[s]?|ftp):\/)?\/?([^:/\s]+)((\/\w+)*\/)([\w\-.]+[^#?\s]+)(.*)?(#[\w-]+)?$/, l = Zr.match(s), c = l[2] + "://" + l[3];
      i.origin === c && !Zn(a) && (u = e.value.discord_data) != null && u.connect_url && (sessionStorage.setItem("discord_token", a.discord_token), e.value.discord_data = {
        discord_id: a.discord_id,
        discord_token: a.discord_token,
        discord_username: a.discord_username,
        connect_url: e.value.discord_data.connect_url
      }, Ee.discord_token = a.discord_token, t.value = e.value.discord_data.discord_username);
    };
    return window.addEventListener("message", o), {
      checkout_information: Ee,
      context: e,
      linkDiscord: r,
      receiveData: o,
      popUpsEnabled: n,
      discordUsername: t
    };
  }
}), Tg = { class: "embed-flex embed-flex-col embed-px-4 embed-pt-5 embed-pb-4 sm:embed-p-6" }, Pg = ["textContent"], Mg = { class: "embed-mt-4" }, Rg = {
  key: 0,
  class: "embed-text-center embed-mt-2 embed-bg-white dark:embed-bg-black embed-rounded-2xl embed-px-4 embed-py-2"
}, Dg = /* @__PURE__ */ k("span", { class: "embed-font-medium embed-text-black dark:embed-text-white" }, "To continue your purchase, you'll want to connect your Discord account.", -1), zg = [
  Dg
], Lg = {
  key: 1,
  class: "embed-text-center embed-mt-2 embed-bg-white dark:embed-bg-black embed-rounded-2xl embed-px-4 embed-py-2"
}, $g = /* @__PURE__ */ k("span", { class: "embed-font-medium embed-text-black dark:embed-text-white" }, "Optionally connect your Discord to get exclusive accesss with your purchase.", -1), Fg = [
  $g
], Vg = {
  key: 1,
  class: "embed-mt-5 embed-text-red-500"
}, jg = /* @__PURE__ */ k("p", null, "Please, enable pop ups to proceed.", -1), Ug = [
  jg
], Hg = { key: 2 };
function Bg(e, t, n, r, o, i) {
  const a = te("DialogTitle"), s = te("InputGroup"), l = te("MyButton"), c = te("Navigator");
  return P(), Y("div", Tg, [
    H(a, {
      as: "h1",
      class: "embed-font-bold embed-text-center embed-text-xl embed-text-black dark:embed-text-white"
    }, {
      default: ne(() => [
        _e("Connect discord")
      ]),
      _: 1
    }),
    e.discordUsername ? (P(), ze(s, {
      key: 0,
      class: "embed-text-center",
      type: "text",
      label: "",
      value: e.discordUsername,
      disabled: ""
    }, null, 8, ["value"])) : xe("", !0),
    H(l, {
      class: "embed-w-full embed-bg-[#5865F2] embed-text-white embed-mt-4",
      onClick: e.linkDiscord
    }, {
      default: ne(() => [
        k("span", {
          textContent: oe(e.checkout_information.discord_id ? "Change discord account" : "Connect discord")
        }, null, 8, Pg)
      ]),
      _: 1
    }, 8, ["onClick"]),
    k("div", Mg, [
      e.context.variant.discord_required ? (P(), Y("div", Rg, zg)) : e.context.variant.discord_request ? (P(), Y("div", Lg, Fg)) : xe("", !0)
    ]),
    e.popUpsEnabled ? xe("", !0) : (P(), Y("div", Vg, Ug)),
    e.context.variant.discord_required && e.checkout_information.discord_token || !e.context.variant.discord_required ? (P(), Y("div", Hg, [
      H(c)
    ])) : xe("", !0)
  ]);
}
const Gg = /* @__PURE__ */ qe(Cg, [["render", Bg]]), Yg = de({
  name: "FinalStep",
  components: {
    Navigator: eo,
    DialogTitle: ln,
    DialogDescription: Lu
  },
  setup() {
    var i;
    const { context: e } = ut(), t = re(!1), n = F(() => e.value.variant), r = F(() => e.value.product);
    let o = parseFloat(e.value.variant.total.replace(/[^\d.-]/g, "")) || 0;
    if (e.value.variant.payment_discounts && Ee.payment_method) {
      const a = e.value.variant.payment_discounts[Ee.payment_method.toLowerCase()];
      if (a !== null && !isNaN(a)) {
        const s = parseFloat(a) / 100;
        o += o * s * -1;
      }
    }
    if (e.value.variant.available_vat_countries && Ee.country) {
      const a = (i = e.value.variant.available_vat_countries[Ee.country]) == null ? void 0 : i.vat;
      if (a !== null && !isNaN(a)) {
        const s = parseFloat(a) / 100;
        o += o * s;
      }
    }
    return {
      checkout_information: Ee,
      context: e,
      variant: n,
      product: r,
      price: o,
      terms_of_service: t
    };
  },
  methods: {
    capitalized(e) {
      const t = e[0].toUpperCase(), n = e.slice(1);
      return t + n;
    }
  }
}), Wg = { class: "embed-flex embed-flex-col embed-px-4 embed-pt-5 embed-pb-4 sm:embed-p-6" }, qg = { class: "embed-p-3 embed-text-left embed-flex embed-flex-row embed-justify-between" }, Kg = { class: "embed-block embed-text-sm embed-font-medium embed-text-black dark:embed-text-white" }, Xg = ["textContent"], Jg = { class: "embed-space-y-2 embed-mx-2 embed-bg-zinc-50 dark:embed-bg-zinc-950 embed-py-3 embed-px-3 embed-rounded-2xl embed-shadow-inner dark:embed-shadow-black embed-text-sm embed-font-medium embed-text-black dark:embed-text-white" }, Qg = { class: "embed-text-left embed-flex embed-flex-row embed-justify-between" }, Zg = /* @__PURE__ */ k("p", { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, "Subtotal", -1), ey = ["textContent"], ty = /* @__PURE__ */ k("p", { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, "Bulk discount", -1), ny = { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, ry = { class: "embed-inline-flex embed-items-center embed-space-x-2 embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, oy = /* @__PURE__ */ k("span", null, "Coupon", -1), iy = { class: "embed-flex embed-rounded-lg embed-bg-zinc-100 embed-px-2 embed-text-sm embed-font-medium dark:embed-bg-black" }, ay = { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, sy = { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, ly = { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, cy = { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, uy = { class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white" }, dy = { class: "embed-p-3 embed-flex embed-flex-row embed-justify-between" }, fy = /* @__PURE__ */ k("p", { class: "embed-block embed-text-sm embed-font-medium embed-text-black dark:embed-text-white" }, "Total", -1), my = { class: "embed-block embed-text-sm embed-font-medium embed-text-black dark:embed-text-white" }, py = { class: "embed-px-3 embed-mt-4 embed-relative embed-flex embed-items-center" }, by = /* @__PURE__ */ k("div", { class: "embed-min-w-0 embed-flex-1 embed-text-left embed-text-sm" }, [
  /* @__PURE__ */ k("label", {
    for: "terms_of_service",
    class: "embed-select-none embed-mb-0 embed-font-semibold embed-text-sm embed-text-zinc-800 dark:embed-text-neutral-300"
  }, "By making this purchase, you agree to the terms of service")
], -1), hy = { class: "embed-ml-3 embed-flex embed-items-center embed-h-5" }, vy = ["checked"];
function gy(e, t, n, r, o, i) {
  const a = te("DialogTitle"), s = te("DialogDescription"), l = te("Navigator");
  return P(), Y("div", Wg, [
    H(a, {
      as: "h1",
      class: "embed-font-bold embed-text-center embed-text-xl embed-text-black dark:embed-text-white"
    }, {
      default: ne(() => [
        _e("Order Overview")
      ]),
      _: 1
    }),
    H(s, {
      as: "p",
      class: "embed-mb-4 embed-font-normal embed-text-center embed-text-zinc-800 dark:embed-text-zinc-400 embed-text-xs"
    }, {
      default: ne(() => [
        _e("Finally, review your order details before checking out")
      ]),
      _: 1
    }),
    k("div", qg, [
      k("p", Kg, oe(e.context.quantity) + "x " + oe(e.product.title), 1),
      k("p", {
        class: "embed-block embed-text-sm embed-font-medium embed-text-black dark:embed-text-white",
        textContent: oe(e.variant.price)
      }, null, 8, Xg)
    ]),
    k("div", Jg, [
      k("div", Qg, [
        Zg,
        k("p", {
          class: "embed-block embed-text-sm embed-font-normal embed-text-black dark:embed-text-white",
          textContent: oe(e.variant.price)
        }, null, 8, ey)
      ]),
      k("div", {
        class: ge(["embed-text-left embed-flex embed-flex-row embed-justify-between", e.context.variant.bulk_discount == null ? "embed-hidden" : ""])
      }, [
        ty,
        k("p", ny, "-" + oe(e.context.variant.bulk_discount), 1)
      ], 2),
      k("div", {
        class: ge(["embed-text-left embed-flex embed-flex-row embed-justify-between", e.context.coupon == null ? "embed-hidden" : ""])
      }, [
        k("p", ry, [
          oy,
          k("span", iy, oe(e.context.coupon), 1)
        ]),
        k("p", ay, "-" + oe(e.context.variant.coupon), 1)
      ], 2),
      k("div", {
        class: ge(["embed-text-left embed-flex embed-flex-row embed-justify-between", !e.context.variant.payment_discounts || e.context.variant.payment_discounts[e.checkout_information.payment_method.toLowerCase()] == null ? "embed-hidden" : ""])
      }, [
        k("p", sy, "Payment " + oe(e.context.variant.payment_discounts && e.context.variant.payment_discounts[e.checkout_information.payment_method.toLowerCase()] < 0 ? "fee" : "discount"), 1),
        k("p", ly, oe(e.context.variant.payment_discounts && e.context.variant.payment_discounts[e.checkout_information.payment_method.toLowerCase()] > 0 ? "-" : "+") + oe(Math.abs(e.context.variant.payment_discounts && e.context.variant.payment_discounts[e.checkout_information.payment_method.toLowerCase()])) + "%", 1)
      ], 2),
      k("div", {
        class: ge(["embed-text-left embed-flex embed-flex-row embed-justify-between", !e.checkout_information.country || e.context.variant.available_vat_countries[e.checkout_information.country].vat == 0 ? "embed-hidden" : ""])
      }, [
        k("p", cy, "VAT (" + oe(e.checkout_information.country && e.context.variant.available_vat_countries[e.checkout_information.country].name) + ")", 1),
        k("p", uy, "+" + oe(e.checkout_information.country && e.context.variant.available_vat_countries[e.checkout_information.country].vat) + "%", 1)
      ], 2)
    ]),
    k("div", dy, [
      fy,
      k("p", my, oe(e.context.variant.total.replace(/[^\D]+.*/, "")) + " " + oe(!isNaN(e.price) && isFinite(e.price) ? e.price.toFixed(2) : e.context.variant.total.replace(/[^\d]+.*/, "")), 1)
    ]),
    k("div", py, [
      by,
      k("div", hy, [
        Vo(k("input", {
          id: "terms_of_service",
          "onUpdate:modelValue": t[0] || (t[0] = (c) => e.terms_of_service = c),
          checked: e.terms_of_service == !0,
          required: "",
          name: "terms_of_service",
          type: "checkbox",
          class: "embed-p-2 embed-appearance-none embed-rounded focus:embed-ring-offset-0 embed-bg-white checked:embed-bg-black dark:embed-bg-zinc-800 dark:focus:embed-bg-zinc-950 embed-text-black dark:embed-text-white embed-placeholder-neutral-500 focus:embed-placeholder-neutral-800 dark:embed-placeholder-neutral-500 dark:focus:embed-placeholder-neutral-400 embed-border embed-border-zinc-100 hover:embed-border-zinc-200 focus:embed-border-zinc-400 dark:embed-border-zinc-800 dark:hover:embed-border-zinc-950 dark:focus:embed-border-zinc-800 focus:embed-ring-0 embed-shadow-inner embed-shadow-zinc-400 hover:embed-shadow-zinc-500 focus:embed-shadow-zinc-200 dark:embed-shadow-neutral-800 dark:hover:embed-shadow-neutral-900 dark:focus:embed-shadow-neutral-800 embed-transition embed-duration-200 embed-ease-in-out"
        }, null, 8, vy), [
          [Dp, e.terms_of_service]
        ])
      ])
    ]),
    H(l, {
      next: { type: "CHECKOUT" },
      text: "Pay Now",
      "loading-state": "checkout.step.final_step.checkout_product",
      class: ge(e.terms_of_service == !1 ? "embed-hidden" : "")
    }, null, 8, ["class"])
  ]);
}
const yy = /* @__PURE__ */ qe(Yg, [["render", gy]]), _y = de({
  name: "AdditionalInformation",
  components: {
    InputGroup: Ts
  },
  setup() {
    const { context: e } = ut(), t = F(() => e.value.variant.additional_information);
    return e.value.variant.additional_information.length > 0 && (Ee.additional_information ?? (Ee.additional_information = {}), t.value.forEach((n) => {
      var r, o;
      if ((Ee.additional_information[n.key] ?? null) === null) {
        let i;
        n.type === "CHECKBOX" ? i = !1 : n.type === "NUMBER" ? i = 0 : i = "", (r = Ee.additional_information)[o = n.key] ?? (r[o] = i);
      }
    })), {
      checkout_information: Ee,
      context: e,
      required_fields: t
    };
  }
}), wy = { class: "embed-space-y-4 embed-bg-zinc-50 dark:embed-bg-zinc-950 embed-py-4 embed-px-3 embed-rounded-2xl embed-shadow-inner dark:embed-shadow-black" };
function xy(e, t, n, r, o, i) {
  const a = te("InputGroup");
  return P(), Y("div", wy, [
    (P(!0), Y(Me, null, Yn(e.required_fields, (s) => (P(), Y(Me, { key: s }, [
      s.type === "TEXTAREA" ? (P(), ze(a, {
        key: 0,
        modelValue: e.checkout_information.additional_information[s.key],
        "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
        type: s.type.toLowerCase(),
        "error-key": `additional_information.${s.key}`,
        placeholder: s.label,
        rows: "3",
        label: s.label
      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "label"])) : s.type === "NUMBER" ? (P(), ze(a, {
        key: 1,
        modelValue: e.checkout_information.additional_information[s.key],
        "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
        type: s.type.toLowerCase(),
        "error-key": `additional_information.${s.key}`,
        placeholder: s.label,
        label: s.label,
        min: "1",
        class: "embed-w-full"
      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "label"])) : s.type === "TEXT" ? (P(), ze(a, {
        key: 2,
        modelValue: e.checkout_information.additional_information[s.key],
        "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
        type: s.type.toLowerCase(),
        "error-key": `additional_information.${s.key}`,
        placeholder: s.label,
        label: s.label
      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "label"])) : s.type === "SELECT" ? (P(), ze(a, {
        key: 3,
        modelValue: e.checkout_information.additional_information[s.key],
        "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
        type: s.type.toLowerCase(),
        "error-key": `additional_information.${s.key}`,
        placeholder: s.label,
        label: s.label,
        options: s.options
      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "label", "options"])) : (P(), ze(a, {
        key: 4,
        modelValue: e.checkout_information.additional_information[s.key],
        "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
        "field-key": `additional_information.${s.key}`,
        type: s.type.toLowerCase(),
        "error-key": `additional_information.${s.key}`,
        placeholder: s.label,
        label: s.label
      }, null, 8, ["modelValue", "onUpdate:modelValue", "field-key", "type", "error-key", "placeholder", "label"]))
    ], 64))), 128))
  ]);
}
const Ey = /* @__PURE__ */ qe(_y, [["render", xy]]), ky = de({
  name: "CustomerEmail",
  components: {
    Navigator: eo,
    InputGroup: Ts,
    AdditionalInformation: Ey,
    EnvelopeIcon: Eh,
    DialogTitle: ln,
    DialogDescription: Lu
  },
  setup() {
    const { context: e } = ut(), t = e.value.variant.additional_information.map((r) => r.key);
    Ee.additional_information = t.filter((r) => r in Ee.additional_information).reduce((r, o) => (r[o] = Ee.additional_information[o], r), {}), Zn(Ee.country) && (Ee.country = e.value.variant.current_country), Zn(e.value.email) || (Ee.customer_email = e.value.email);
    const n = {
      type: e.value.variant.discord_request ? "CONNECT_DISCORD" : "PAYMENT_METHODS"
    };
    return {
      checkout_information: Ee,
      context: e,
      back: n
    };
  }
}), Sy = { class: "embed-flex embed-flex-col embed-px-4 embed-pt-5 embed-pb-4 sm:embed-p-6" }, Oy = { class: "embed-p-3 embed-text-left" }, Ay = {
  key: 0,
  class: "embed-py-3 embed-text-left"
}, Ny = {
  key: 1,
  class: "embed-p-3 embed-text-left embed-flex embed-flex-col embed-gap-3"
}, Iy = { class: "embed-block embed-text-sm embed-font-medium embed-text-black dark:embed-text-white" }, Cy = /* @__PURE__ */ k("span", null, "Country", -1), Ty = ["value"], Py = { key: 0 };
function My(e, t, n, r, o, i) {
  var d;
  const a = te("DialogTitle"), s = te("DialogDescription"), l = te("EnvelopeIcon"), c = te("InputGroup"), u = te("AdditionalInformation"), f = te("Navigator");
  return P(), Y("div", Sy, [
    H(a, {
      as: "h1",
      class: "embed-font-bold embed-text-center embed-text-xl embed-text-black dark:embed-text-white"
    }, {
      default: ne(() => [
        _e("Delivery Details")
      ]),
      _: 1
    }),
    H(s, {
      as: "p",
      class: "embed-mb-4 embed-font-normal embed-text-center embed-text-zinc-800 dark:embed-text-zinc-400 embed-text-xs"
    }, {
      default: ne(() => [
        _e("Enter your delivery information below")
      ]),
      _: 1
    }),
    k("div", Oy, [
      H(c, {
        modelValue: e.checkout_information.customer_email,
        "onUpdate:modelValue": t[0] || (t[0] = (m) => e.checkout_information.customer_email = m),
        "error-key": "customer_email",
        type: "email",
        label: "Email",
        placeholder: "example@example.com"
      }, {
        icon: ne(() => [
          H(l, {
            class: "embed-h-5 embed-w-5 embed-text-zinc-400",
            "aria-hidden": "true"
          })
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    e.context.variant.additional_information.length > 0 ? (P(), Y("div", Ay, [
      H(u)
    ])) : xe("", !0),
    e.context.variant.vat_enabled ? (P(), Y("div", Ny, [
      k("label", Iy, [
        Cy,
        Vo(k("select", {
          id: "country",
          "onUpdate:modelValue": t[1] || (t[1] = (m) => e.checkout_information.country = m),
          name: "country",
          class: "embed-mt-1 embed-appearance-none embed-w-full embed-bg-white dark:embed-bg-zinc-800 embed-text-black dark:embed-text-zinc-400 embed-border embed-border-zinc-100 hover:embed-border-zinc-200 focus:embed-border-zinc-400 dark:embed-border-zinc-800 dark:hover:embed-border-zinc-950 dark:focus:embed-border-zinc-800 embed-rounded-lg focus:embed-ring-0 embed-shadow-inner embed-shadow-zinc-200 hover:embed-shadow-zinc-300 dark:embed-shadow-neutral-800 dark:hover:embed-shadow-neutral-900 embed-transition embed-duration-200 embed-ease-in-out disabled:embed-bg-zinc-100 dark:disabled:embed-bg-zinc-900 disabled:embed-opacity-70"
        }, [
          (P(!0), Y(Me, null, Yn(e.context.variant.available_vat_countries, (m, p) => (P(), Y("option", {
            key: p,
            value: p
          }, oe(m.name), 9, Ty))), 128))
        ], 512), [
          [zp, e.checkout_information.country]
        ])
      ]),
      e.context.variant.vat_enabled && ((d = e.context.variant.available_vat_countries[e.checkout_information.country]) == null ? void 0 : d.vat) > 0 ? (P(), Y("div", Py, [
        H(c, {
          id: "vat_id",
          modelValue: e.checkout_information.vat_id,
          "onUpdate:modelValue": t[2] || (t[2] = (m) => e.checkout_information.vat_id = m),
          "error-key": "vat_id",
          type: "text",
          label: "VAT ID",
          placeholder: "DE123456789",
          name: "vat_id"
        }, null, 8, ["modelValue"])
      ])) : xe("", !0)
    ])) : xe("", !0),
    H(f, { back: e.back }, null, 8, ["back"])
  ]);
}
const Ry = /* @__PURE__ */ qe(ky, [["render", My]]), Dy = de({
  name: "DialogMessage",
  components: {
    DialogTitle: ln
  },
  props: {
    title: {
      type: String,
      required: !1,
      default: null
    },
    message: {
      type: String,
      required: !1,
      default: null
    }
  }
}), zy = { class: "embed-flex embed-flex-col embed-items-center embed-justify-evenly embed-h-4/6 embed-w-full embed-p-6" }, Ly = { class: "embed-flex embed-flex-col embed-items-center" }, $y = { class: "embed-bg-zinc-100 embed-p-4 embed-rounded-lg embed-w-11/12 embed-mt-4 dark:embed-bg-zinc-800 embed-text-black dark:embed-text-white embed-shadow-inner dark:embed-shadow-black" };
function Fy(e, t, n, r, o, i) {
  const a = te("DialogTitle");
  return P(), Y("div", zy, [
    k("div", Ly, [
      jo(e.$slots, "default"),
      H(a, {
        as: "h2",
        class: "embed-mb-0 embed-mt-3 embed-font-bold embed-text-2xl embed-text-black dark:embed-text-white"
      }, {
        default: ne(() => [
          _e(oe(e.title), 1)
        ]),
        _: 1
      })
    ]),
    k("div", $y, [
      jo(e.$slots, "action", {}, () => [
        k("p", null, oe(e.message), 1)
      ])
    ])
  ]);
}
const Ps = /* @__PURE__ */ qe(Dy, [["render", Fy]]), Vy = {
  name: "LoadingSpinner"
}, jy = { class: "embed-absolute embed-flex embed-justify-center embed-items-center embed-w-full embed-h-full embed-z-50 embed-bg-opacity-70" }, Uy = /* @__PURE__ */ k("span", { class: "embed-animate-ping embed-absolute embed-inline-flex embed-h-24 embed-w-24 embed-rounded-full embed-bg-zinc-700 embed-opacity-75" }, null, -1), Hy = [
  Uy
];
function By(e, t, n, r, o, i) {
  return P(), Y("div", jy, Hy);
}
const Gy = /* @__PURE__ */ qe(Vy, [["render", By]]), Yy = de({
  name: "SuccessDialog",
  components: {
    DialogMessage: Ps,
    CheckCircleIcon: Cd
  },
  setup: function() {
    const { context: e } = ut();
    return {
      context: e
    };
  }
}), Wy = ["href"];
function qy(e, t, n, r, o, i) {
  const a = te("CheckCircleIcon"), s = te("DialogMessage");
  return P(), ze(s, {
    class: "embed-bg-white embed-text-center dark:embed-bg-zinc-900 embed-rounded-2xl embed-shadow-xl",
    title: "Order Created"
  }, {
    action: ne(() => [
      k("p", null, [
        _e(" Your order has been created! If the payment gateway did not open by itself, "),
        k("a", {
          href: e.context.order,
          class: "embed-font-bold embed-underline embed-decoration-zinc-800 dark:embed-decoration-zinc-50 hover:embed-decoration-wavy",
          target: "_blank"
        }, "click here to open it.", 8, Wy)
      ])
    ]),
    default: ne(() => [
      H(a, { class: "embed-h-24 embed-w-24 embed-text-green-600" })
    ]),
    _: 1
  });
}
const Ky = /* @__PURE__ */ qe(Yy, [["render", qy]]), Xy = de({
  name: "HeadsUpDialog",
  components: {
    DialogMessage: Ps
  }
}), Jy = /* @__PURE__ */ k("p", { class: "embed-mb-4" }, "Once paid, the order will instantly be sent to your entered email. That's it!", -1), Qy = /* @__PURE__ */ k("p", { class: "embed-text-xs" }, "Note: If you paid with PayPal, we will send the product to your PayPal email for security reasons.", -1);
function Zy(e, t, n, r, o, i) {
  const a = te("DialogMessage");
  return P(), ze(a, {
    class: "embed-bg-white embed-text-center dark:embed-bg-zinc-900 embed-rounded-2xl embed-shadow-xl",
    title: "What's Next?"
  }, {
    action: ne(() => [
      Jy,
      Qy
    ]),
    _: 1
  });
}
const e4 = /* @__PURE__ */ qe(Xy, [["render", Zy]]);
function t4(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return Object.assign(t, r), t;
  }, {});
}
const n4 = de({
  name: "EmbedCheckout",
  components: {
    LoadingSpinner: Gy,
    MyDialog: C1,
    DialogPanel: P1,
    DialogOverlay: T1,
    DialogTitle: ln,
    TransitionChild: Ju,
    TransitionRoot: Qu,
    ExclamationCircleIcon: Id,
    VariantSelection: Gh,
    Overview: C0,
    PaymentMethod: gg,
    ConnectDiscord: Gg,
    FinalStep: yy,
    CustomerEmail: Ry,
    Navigator: eo,
    DialogMessage: Ps,
    CheckCircleIcon: Cd,
    SuccessDialog: Ky,
    HeadsUpDialog: e4
  },
  setup: function() {
    const { context: e, state: t, send: n } = ut();
    return Tl(), window.setupCheckoutButtons = Tl, {
      stepComponent: F(() => t.value.matches("checkout") ? t4(t.value.meta).component : null),
      context: e,
      state: t,
      send: n
    };
  }
}), r4 = {
  id: "embed-modal",
  class: "embed-fixed embed-z-10 embed-inset-0 embed-overflow-auto"
}, o4 = /* @__PURE__ */ k("span", {
  class: "embed-hidden sm:embed-inline-block sm:embed-align-middle sm:embed-h-screen",
  "aria-hidden": "true"
}, "​", -1), i4 = { class: "embed-relative embed-z-50 embed-max-w-xl embed-w-full embed-inline-block embed-align-middle embed-px-4" }, a4 = {
  key: 1,
  class: "embed-space-y-4"
}, s4 = {
  key: 1,
  class: "embed-space-y-6"
};
function l4(e, t, n, r, o, i) {
  const a = te("DialogOverlay"), s = te("TransitionChild"), l = te("LoadingSpinner"), c = te("SuccessDialog"), u = te("HeadsUpDialog"), f = te("ExclamationCircleIcon"), d = te("DialogMessage"), m = te("DialogPanel"), p = te("MyDialog"), h = te("TransitionRoot");
  return P(), ze(h, {
    as: "template",
    show: !e.state.matches("closed")
  }, {
    default: ne(() => [
      H(p, {
        as: "div",
        onClose: t[0] || (t[0] = (_) => e.send("CLOSE"))
      }, {
        default: ne(() => [
          H(m, null, {
            default: ne(() => [
              k("div", r4, [
                k("div", {
                  class: ge(["embed-flex embed-items-center embed-justify-center embed-min-h-screen embed-text-center", { "embed-dark": e.context.customization.darkMode }])
                }, [
                  H(s, {
                    as: "template",
                    enter: "embed-ease-out embed-duration-300",
                    "enter-from": "embed-opacity-0",
                    "enter-to": "embed-opacity-100",
                    leave: "embed-ease-in embed-duration-200",
                    "leave-from": "embed-opacity-100",
                    "leave-to": "embed-opacity-0"
                  }, {
                    default: ne(() => [
                      H(a, { class: "embed-fixed embed-inset-0 embed-bg-zinc-500 dark:embed-bg-black embed-bg-opacity-50 dark:embed-bg-opacity-50 embed-transition-opacity" })
                    ]),
                    _: 1
                  }),
                  o4,
                  H(s, {
                    as: "template",
                    enter: "embed-ease-out embed-duration-300",
                    "enter-from": "embed-opacity-0 embed-translate-y-4 sm:embed-translate-y-0 sm:embed-scale-95",
                    "enter-to": "embed-opacity-100 embed-translate-y-0 sm:embed-scale-100",
                    leave: "embed-ease-in embed-duration-200",
                    "leave-from": "embed-opacity-100 embed-translate-y-0 sm:embed-scale-100",
                    "leave-to": "embed-opacity-0 embed-translate-y-4 sm:embed-translate-y-0 sm:embed-scale-95"
                  }, {
                    default: ne(() => [
                      k("div", i4, [
                        e.state.hasTag("loading") ? (P(), ze(l, { key: 0 })) : (P(), Y("div", a4, [
                          e.stepComponent ? (P(), ze(qn, {
                            key: 0,
                            "enter-active-class": "embed-duration-500 embed-ease-out",
                            "enter-from-class": "embed-opacity-0 embed--translate-x-full md:embed-translate-x-full",
                            "enter-to-class": "embed-opacity-100 embed-translate-x-0",
                            "leave-active-class": "embed-duration-500 embed-ease-out",
                            "leave-from-class": "embed-opacity-100 embed-translate-x-0",
                            "leave-to-class": "embed-opacity-0 embed--translate-x-full",
                            mode: "out-in"
                          }, {
                            default: ne(() => [
                              (P(), ze(Cm(e.stepComponent), { class: "embed-bg-white embed-text-center dark:embed-bg-zinc-900 embed-rounded-lg embed-shadow-md dark:embed-shadow-black embed-overflow-hidden" }))
                            ]),
                            _: 1
                          })) : e.state.matches("invoice_processed") ? (P(), Y("div", s4, [
                            H(c),
                            H(u)
                          ])) : e.state.matches("error") ? (P(), ze(d, {
                            key: 2,
                            class: "embed-bg-white embed-text-center dark:embed-bg-zinc-900 embed-rounded-lg embed-shadow-md dark:embed-shadow-black embed-overflow-hidden",
                            title: "Whoops",
                            message: e.context.error.message
                          }, {
                            default: ne(() => [
                              H(f, { class: "embed-h-24 embed-w-24 embed-text-zinc-600" })
                            ]),
                            _: 1
                          }, 8, ["message"])) : xe("", !0)
                        ]))
                      ])
                    ]),
                    _: 1
                  })
                ], 2)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["show"]);
}
const c4 = /* @__PURE__ */ qe(n4, [["render", l4]]);
const u4 = Fp(c4), cf = document.createElement("div");
document.body.append(cf);
u4.mount(cf);
