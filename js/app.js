/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  let t = !1;
  function e(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function r(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  setTimeout(() => {
    if (t) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0);
  var n,
    i,
    s,
    o,
    a,
    u,
    l,
    c,
    h,
    f,
    p,
    d = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    g = { duration: 0.5, overwrite: !1, delay: 0 },
    m = 1e8,
    v = 1e-8,
    _ = 2 * Math.PI,
    y = _ / 4,
    w = 0,
    b = Math.sqrt,
    x = Math.cos,
    T = Math.sin,
    M = function (t) {
      return "string" == typeof t;
    },
    S = function (t) {
      return "function" == typeof t;
    },
    k = function (t) {
      return "number" == typeof t;
    },
    O = function (t) {
      return void 0 === t;
    },
    E = function (t) {
      return "object" == typeof t;
    },
    A = function (t) {
      return !1 !== t;
    },
    C = function () {
      return "undefined" != typeof window;
    },
    P = function (t) {
      return S(t) || M(t);
    },
    D =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    R = Array.isArray,
    z = /(?:-?\.?\d|\.)+/gi,
    L = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    F = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    I = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    B = /[+-]=-?[.\d]+/,
    Y = /[^,'"\[\]\s]+/gi,
    X = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    W = {},
    N = {},
    q = function (t) {
      return (N = _t(t, W)) && _r;
    },
    H = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    V = function (t, e) {
      return !e && console.warn(t);
    },
    U = function (t, e) {
      return (t && (W[t] = e) && N && (N[t] = e)) || W;
    },
    j = function () {
      return 0;
    },
    G = { suppressEvents: !0, isStart: !0, kill: !1 },
    $ = { suppressEvents: !0, kill: !1 },
    Q = { suppressEvents: !0 },
    Z = {},
    K = [],
    J = {},
    tt = {},
    et = {},
    rt = 30,
    nt = [],
    it = "",
    st = function (t) {
      var e,
        r,
        n = t[0];
      if ((E(n) || S(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
        for (r = nt.length; r-- && !nt[r].targetTest(n); );
        e = nt[r];
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new Re(t[r], e)))) ||
          t.splice(r, 1);
      return t;
    },
    ot = function (t) {
      return t._gsap || st(Qt(t))[0]._gsap;
    },
    at = function (t, e, r) {
      return (r = t[e]) && S(r)
        ? t[e]()
        : (O(r) && t.getAttribute && t.getAttribute(e)) || r;
    },
    ut = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    lt = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    ct = function (t) {
      return Math.round(1e7 * t) / 1e7 || 0;
    },
    ht = function (t, e) {
      var r = e.charAt(0),
        n = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
      );
    },
    ft = function (t, e) {
      for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
      return n < r;
    },
    pt = function () {
      var t,
        e,
        r = K.length,
        n = K.slice(0);
      for (J = {}, K.length = 0, t = 0; t < r; t++)
        (e = n[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    dt = function (t, e, r, n) {
      K.length && !i && pt(),
        t.render(e, r, n || (i && e < 0 && (t._initted || t._startAt))),
        K.length && !i && pt();
    },
    gt = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(Y).length < 2
        ? e
        : M(t)
        ? t.trim()
        : t;
    },
    mt = function (t) {
      return t;
    },
    vt = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    },
    _t = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    yt = function t(e, r) {
      for (var n in r)
        "__proto__" !== n &&
          "constructor" !== n &&
          "prototype" !== n &&
          (e[n] = E(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
      return e;
    },
    wt = function (t, e) {
      var r,
        n = {};
      for (r in t) r in e || (n[r] = t[r]);
      return n;
    },
    bt = function (t) {
      var e,
        r = t.parent || o,
        n = t.keyframes
          ? ((e = R(t.keyframes)),
            function (t, r) {
              for (var n in r)
                n in t ||
                  ("duration" === n && e) ||
                  "ease" === n ||
                  (t[n] = r[n]);
            })
          : vt;
      if (A(t.inherit))
        for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
      return t;
    },
    xt = function (t, e, r, n, i) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
      var s,
        o = t[n];
      if (i) for (s = e[i]; o && o[i] > s; ) o = o._prev;
      return (
        o
          ? ((e._next = o._next), (o._next = e))
          : ((e._next = t[r]), (t[r] = e)),
        e._next ? (e._next._prev = e) : (t[n] = e),
        (e._prev = o),
        (e.parent = e._dp = t),
        e
      );
    },
    Tt = function (t, e, r, n) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
      var i = e._prev,
        s = e._next;
      i ? (i._next = s) : t[r] === e && (t[r] = s),
        s ? (s._prev = i) : t[n] === e && (t[n] = i),
        (e._next = e._prev = e.parent = null);
    },
    Mt = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0);
    },
    St = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
      return t;
    },
    kt = function (t, e, r, n) {
      return (
        t._startAt &&
        (i
          ? t._startAt.revert($)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(e, !0, n))
      );
    },
    Ot = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    Et = function (t) {
      return t._repeat ? At(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    At = function (t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    Ct = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    Pt = function (t) {
      return (t._end = ct(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || v) || 0)
      ));
    },
    Dt = function (t, e) {
      var r = t._dp;
      return (
        r &&
          r.smoothChildTiming &&
          t._ts &&
          ((t._start = ct(
            r._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          Pt(t),
          r._dirty || St(r, t)),
        t
      );
    },
    Rt = function (t, e) {
      var r;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((r = Ct(t.rawTime(), e)),
          (!e._dur || Vt(0, e.totalDuration(), r) - e._tTime > v) &&
            e.render(r, !0)),
        St(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (r = t; r._dp; )
            r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        t._zTime = -1e-8;
      }
    },
    zt = function (t, e, r, n) {
      return (
        e.parent && Mt(e),
        (e._start = ct(
          (k(r) ? r : r || t !== o ? Nt(t, r, e) : t._time) + e._delay
        )),
        (e._end = ct(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        xt(t, e, "_first", "_last", t._sort ? "_start" : 0),
        Bt(e) || (t._recent = e),
        n || Rt(t, e),
        t._ts < 0 && Dt(t, t._tTime),
        t
      );
    },
    Lt = function (t, e) {
      return (
        (W.ScrollTrigger || H("scrollTrigger", e)) &&
        W.ScrollTrigger.create(e, t)
      );
    },
    Ft = function (t, e, r, n, s) {
      return (
        We(t, e, s),
        t._initted
          ? !r &&
            t._pt &&
            !i &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            h !== we.frame
            ? (K.push(t), (t._lazy = [s, n]), 1)
            : void 0
          : 1
      );
    },
    It = function t(e) {
      var r = e.parent;
      return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
    },
    Bt = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    Yt = function (t, e, r, n) {
      var i = t._repeat,
        s = ct(e) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !n && (t._time *= s / t._dur),
        (t._dur = s),
        (t._tDur = i ? (i < 0 ? 1e10 : ct(s * (i + 1) + t._rDelay * i)) : s),
        o > 0 && !n && Dt(t, (t._tTime = t._tDur * o)),
        t.parent && Pt(t),
        r || St(t.parent, t),
        t
      );
    },
    Xt = function (t) {
      return t instanceof Le ? St(t) : Yt(t, t._dur);
    },
    Wt = { _start: 0, endTime: j, totalDuration: j },
    Nt = function t(e, r, n) {
      var i,
        s,
        o,
        a = e.labels,
        u = e._recent || Wt,
        l = e.duration() >= m ? u.endTime(!1) : e._dur;
      return M(r) && (isNaN(r) || r in a)
        ? ((s = r.charAt(0)),
          (o = "%" === r.substr(-1)),
          (i = r.indexOf("=")),
          "<" === s || ">" === s
            ? (i >= 0 && (r = r.replace(/=/, "")),
              ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                (parseFloat(r.substr(1)) || 0) *
                  (o ? (i < 0 ? u : n).totalDuration() / 100 : 1))
            : i < 0
            ? (r in a || (a[r] = l), a[r])
            : ((s = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
              o && n && (s = (s / 100) * (R(n) ? n[0] : n).totalDuration()),
              i > 1 ? t(e, r.substr(0, i - 1), n) + s : l + s))
        : null == r
        ? l
        : +r;
    },
    qt = function (t, e, r) {
      var n,
        i,
        s = k(e[1]),
        o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
        a = e[o];
      if ((s && (a.duration = e[1]), (a.parent = r), t)) {
        for (n = a, i = r; i && !("immediateRender" in n); )
          (n = i.vars.defaults || {}), (i = A(i.vars.inherit) && i.parent);
        (a.immediateRender = A(n.immediateRender)),
          t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
      }
      return new Ue(e[0], a, e[o + 1]);
    },
    Ht = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    Vt = function (t, e, r) {
      return r < t ? t : r > e ? e : r;
    },
    Ut = function (t, e) {
      return M(t) && (e = X.exec(t)) ? e[1] : "";
    },
    jt = [].slice,
    Gt = function (t, e) {
      return (
        t &&
        E(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && E(t[0]))) &&
        !t.nodeType &&
        t !== a
      );
    },
    $t = function (t, e, r) {
      return (
        void 0 === r && (r = []),
        t.forEach(function (t) {
          var n;
          return (M(t) && !e) || Gt(t, 1)
            ? (n = r).push.apply(n, Qt(t))
            : r.push(t);
        }) || r
      );
    },
    Qt = function (t, e, r) {
      return s && !e && s.selector
        ? s.selector(t)
        : !M(t) || r || (!u && be())
        ? R(t)
          ? $t(t, r)
          : Gt(t)
          ? jt.call(t, 0)
          : t
          ? [t]
          : []
        : jt.call((e || l).querySelectorAll(t), 0);
    },
    Zt = function (t) {
      return (
        (t = Qt(t)[0] || V("Invalid scope") || {}),
        function (e) {
          var r = t.current || t.nativeElement || t;
          return Qt(
            e,
            r.querySelectorAll
              ? r
              : r === t
              ? V("Invalid scope") || l.createElement("div")
              : t
          );
        }
      );
    },
    Kt = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Jt = function (t) {
      if (S(t)) return t;
      var e = E(t) ? t : { each: t },
        r = Ee(e.ease),
        n = e.from || 0,
        i = parseFloat(e.base) || 0,
        s = {},
        o = n > 0 && n < 1,
        a = isNaN(n) || o,
        u = e.axis,
        l = n,
        c = n;
      return (
        M(n)
          ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
          : !o && a && ((l = n[0]), (c = n[1])),
        function (t, o, h) {
          var f,
            p,
            d,
            g,
            v,
            _,
            y,
            w,
            x,
            T = (h || e).length,
            M = s[T];
          if (!M) {
            if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, m])[1])) {
              for (
                y = -m;
                y < (y = h[x++].getBoundingClientRect().left) && x < T;

              );
              x--;
            }
            for (
              M = s[T] = [],
                f = a ? Math.min(x, T) * l - 0.5 : n % x,
                p = x === m ? 0 : a ? (T * c) / x - 0.5 : (n / x) | 0,
                y = 0,
                w = m,
                _ = 0;
              _ < T;
              _++
            )
              (d = (_ % x) - f),
                (g = p - ((_ / x) | 0)),
                (M[_] = v = u ? Math.abs("y" === u ? g : d) : b(d * d + g * g)),
                v > y && (y = v),
                v < w && (w = v);
            "random" === n && Kt(M),
              (M.max = y - w),
              (M.min = w),
              (M.v = T =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (x > T
                      ? T - 1
                      : u
                      ? "y" === u
                        ? T / x
                        : x
                      : Math.max(x, T / x)) ||
                  0) * ("edges" === n ? -1 : 1)),
              (M.b = T < 0 ? i - T : i),
              (M.u = Ut(e.amount || e.each) || 0),
              (r = r && T < 0 ? ke(r) : r);
          }
          return (
            (T = (M[t] - M.min) / M.max || 0),
            ct(M.b + (r ? r(T) : T) * M.v) + M.u
          );
        }
      );
    },
    te = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (r) {
        var n = ct(Math.round(parseFloat(r) / t) * t * e);
        return (n - (n % 1)) / e + (k(r) ? 0 : Ut(r));
      };
    },
    ee = function (t, e) {
      var r,
        n,
        i = R(t);
      return (
        !i &&
          E(t) &&
          ((r = i = t.radius || m),
          t.values
            ? ((t = Qt(t.values)), (n = !k(t[0])) && (r *= r))
            : (t = te(t.increment))),
        Ht(
          e,
          i
            ? S(t)
              ? function (e) {
                  return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                }
              : function (e) {
                  for (
                    var i,
                      s,
                      o = parseFloat(n ? e.x : e),
                      a = parseFloat(n ? e.y : 0),
                      u = m,
                      l = 0,
                      c = t.length;
                    c--;

                  )
                    (i = n
                      ? (i = t[c].x - o) * i + (s = t[c].y - a) * s
                      : Math.abs(t[c] - o)) < u && ((u = i), (l = c));
                  return (
                    (l = !r || u <= r ? t[l] : e),
                    n || l === e || k(e) ? l : l + Ut(e)
                  );
                }
            : te(t)
        )
      );
    },
    re = function (t, e, r, n) {
      return Ht(R(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
        return R(t)
          ? t[~~(Math.random() * t.length)]
          : (r = r || 1e-5) &&
              (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                ) *
                  r *
                  n
              ) / n;
      });
    },
    ne = function (t, e, r) {
      return Ht(r, function (r) {
        return t[~~e(r)];
      });
    },
    ie = function (t) {
      for (var e, r, n, i, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
        (n = t.indexOf(")", e)),
          (i = "[" === t.charAt(e + 7)),
          (r = t.substr(e + 7, n - e - 7).match(i ? Y : z)),
          (o +=
            t.substr(s, e - s) +
            re(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
          (s = n + 1);
      return o + t.substr(s, t.length - s);
    },
    se = function (t, e, r, n, i) {
      var s = e - t,
        o = n - r;
      return Ht(i, function (e) {
        return r + (((e - t) / s) * o || 0);
      });
    },
    oe = function (t, e, r) {
      var n,
        i,
        s,
        o = t.labels,
        a = m;
      for (n in o)
        (i = o[n] - e) < 0 == !!r &&
          i &&
          a > (i = Math.abs(i)) &&
          ((s = n), (a = i));
      return s;
    },
    ae = function (t, e, r) {
      var n,
        i,
        o,
        a = t.vars,
        u = a[e],
        l = s,
        c = t._ctx;
      if (u)
        return (
          (n = a[e + "Params"]),
          (i = a.callbackScope || t),
          r && K.length && pt(),
          c && (s = c),
          (o = n ? u.apply(i, n) : u.call(i)),
          (s = l),
          o
        );
    },
    ue = function (t) {
      return (
        Mt(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!i),
        t.progress() < 1 && ae(t, "onInterrupt"),
        t
      );
    },
    le = [],
    ce = function (t) {
      if (C()) {
        var e = (t = (!t.name && t.default) || t).name,
          r = S(t),
          n =
            e && !r && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          i = {
            init: j,
            render: er,
            add: Ye,
            kill: nr,
            modifier: rr,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: Ze,
            aliases: {},
            register: 0,
          };
        if ((be(), t !== n)) {
          if (tt[e]) return;
          vt(n, vt(wt(t, i), s)),
            _t(n.prototype, _t(i, wt(t, s))),
            (tt[(n.prop = e)] = n),
            t.targetTest && (nt.push(n), (Z[e] = 1)),
            (e =
              ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        U(e, n), t.register && t.register(_r, n, or);
      } else le.push(t);
    },
    he = 255,
    fe = {
      aqua: [0, he, he],
      lime: [0, he, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, he],
      navy: [0, 0, 128],
      white: [he, he, he],
      olive: [128, 128, 0],
      yellow: [he, he, 0],
      orange: [he, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [he, 0, 0],
      pink: [he, 192, 203],
      cyan: [0, he, he],
      transparent: [he, he, he, 0],
    },
    pe = function (t, e, r) {
      return (
        ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
          ? e + (r - e) * t * 6
          : t < 0.5
          ? r
          : 3 * t < 2
          ? e + (r - e) * (2 / 3 - t) * 6
          : e) *
          he +
          0.5) |
        0
      );
    },
    de = function (t, e, r) {
      var n,
        i,
        s,
        o,
        a,
        u,
        l,
        c,
        h,
        f,
        p = t ? (k(t) ? [t >> 16, (t >> 8) & he, t & he] : 0) : fe.black;
      if (!p) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), fe[t]))
          p = fe[t];
        else if ("#" === t.charAt(0)) {
          if (
            (t.length < 6 &&
              ((n = t.charAt(1)),
              (i = t.charAt(2)),
              (s = t.charAt(3)),
              (t =
                "#" +
                n +
                n +
                i +
                i +
                s +
                s +
                (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
            9 === t.length)
          )
            return [
              (p = parseInt(t.substr(1, 6), 16)) >> 16,
              (p >> 8) & he,
              p & he,
              parseInt(t.substr(7), 16) / 255,
            ];
          p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & he, t & he];
        } else if ("hsl" === t.substr(0, 3))
          if (((p = f = t.match(z)), e)) {
            if (~t.indexOf("="))
              return (p = t.match(L)), r && p.length < 4 && (p[3] = 1), p;
          } else
            (o = (+p[0] % 360) / 360),
              (a = +p[1] / 100),
              (n =
                2 * (u = +p[2] / 100) -
                (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
              p.length > 3 && (p[3] *= 1),
              (p[0] = pe(o + 1 / 3, n, i)),
              (p[1] = pe(o, n, i)),
              (p[2] = pe(o - 1 / 3, n, i));
        else p = t.match(z) || fe.transparent;
        p = p.map(Number);
      }
      return (
        e &&
          !f &&
          ((n = p[0] / he),
          (i = p[1] / he),
          (s = p[2] / he),
          (u = ((l = Math.max(n, i, s)) + (c = Math.min(n, i, s))) / 2),
          l === c
            ? (o = a = 0)
            : ((h = l - c),
              (a = u > 0.5 ? h / (2 - l - c) : h / (l + c)),
              (o =
                l === n
                  ? (i - s) / h + (i < s ? 6 : 0)
                  : l === i
                  ? (s - n) / h + 2
                  : (n - i) / h + 4),
              (o *= 60)),
          (p[0] = ~~(o + 0.5)),
          (p[1] = ~~(100 * a + 0.5)),
          (p[2] = ~~(100 * u + 0.5))),
        r && p.length < 4 && (p[3] = 1),
        p
      );
    },
    ge = function (t) {
      var e = [],
        r = [],
        n = -1;
      return (
        t.split(ve).forEach(function (t) {
          var i = t.match(F) || [];
          e.push.apply(e, i), r.push((n += i.length + 1));
        }),
        (e.c = r),
        e
      );
    },
    me = function (t, e, r) {
      var n,
        i,
        s,
        o,
        a = "",
        u = (t + a).match(ve),
        l = e ? "hsla(" : "rgba(",
        c = 0;
      if (!u) return t;
      if (
        ((u = u.map(function (t) {
          return (
            (t = de(t, e, 1)) &&
            l +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        r && ((s = ge(t)), (n = r.c).join(a) !== s.c.join(a)))
      )
        for (o = (i = t.replace(ve, "1").split(F)).length - 1; c < o; c++)
          a +=
            i[c] +
            (~n.indexOf(c)
              ? u.shift() || l + "0,0,0,0)"
              : (s.length ? s : u.length ? u : r).shift());
      if (!i)
        for (o = (i = t.split(ve)).length - 1; c < o; c++) a += i[c] + u[c];
      return a + i[o];
    },
    ve = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in fe) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    _e = /hsl[a]?\(/,
    ye = function (t) {
      var e,
        r = t.join(" ");
      if (((ve.lastIndex = 0), ve.test(r)))
        return (
          (e = _e.test(r)),
          (t[1] = me(t[1], e)),
          (t[0] = me(t[0], e, ge(t[1]))),
          !0
        );
    },
    we = (function () {
      var t,
        e,
        r,
        n,
        i,
        s,
        o = Date.now,
        h = 500,
        f = 33,
        d = o(),
        g = d,
        m = 1e3 / 240,
        v = m,
        _ = [],
        y = function r(a) {
          var u,
            l,
            c,
            p,
            y = o() - g,
            w = !0 === a;
          if (
            (y > h && (d += y - f),
            ((u = (c = (g += y) - d) - v) > 0 || w) &&
              ((p = ++n.frame),
              (i = c - 1e3 * n.time),
              (n.time = c /= 1e3),
              (v += u + (u >= m ? 4 : m - u)),
              (l = 1)),
            w || (t = e(r)),
            l)
          )
            for (s = 0; s < _.length; s++) _[s](c, i, p, a);
        };
      return (
        (n = {
          time: 0,
          frame: 0,
          tick: function () {
            y(!0);
          },
          deltaRatio: function (t) {
            return i / (1e3 / (t || 60));
          },
          wake: function () {
            c &&
              (!u &&
                C() &&
                ((a = u = window),
                (l = a.document || {}),
                (W.gsap = _r),
                (a.gsapVersions || (a.gsapVersions = [])).push(_r.version),
                q(N || a.GreenSockGlobals || (!a.gsap && a) || {}),
                (r = a.requestAnimationFrame),
                le.forEach(ce)),
              t && n.sleep(),
              (e =
                r ||
                function (t) {
                  return setTimeout(t, (v - 1e3 * n.time + 1) | 0);
                }),
              (p = 1),
              y(2));
          },
          sleep: function () {
            (r ? a.cancelAnimationFrame : clearTimeout)(t), (p = 0), (e = j);
          },
          lagSmoothing: function (t, e) {
            (h = t || 1 / 0), (f = Math.min(e || 33, h));
          },
          fps: function (t) {
            (m = 1e3 / (t || 240)), (v = 1e3 * n.time + m);
          },
          add: function (t, e, r) {
            var i = e
              ? function (e, r, s, o) {
                  t(e, r, s, o), n.remove(i);
                }
              : t;
            return n.remove(t), _[r ? "unshift" : "push"](i), be(), i;
          },
          remove: function (t, e) {
            ~(e = _.indexOf(t)) && _.splice(e, 1) && s >= e && s--;
          },
          _listeners: _,
        }),
        n
      );
    })(),
    be = function () {
      return !p && we.wake();
    },
    xe = {},
    Te = /^[\d.\-M][\d.\-,\s]/,
    Me = /["']/g,
    Se = function (t) {
      for (
        var e,
          r,
          n,
          i = {},
          s = t.substr(1, t.length - 3).split(":"),
          o = s[0],
          a = 1,
          u = s.length;
        a < u;
        a++
      )
        (r = s[a]),
          (e = a !== u - 1 ? r.lastIndexOf(",") : r.length),
          (n = r.substr(0, e)),
          (i[o] = isNaN(n) ? n.replace(Me, "").trim() : +n),
          (o = r.substr(e + 1).trim());
      return i;
    },
    ke = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    Oe = function t(e, r) {
      for (var n, i = e._first; i; )
        i instanceof Le
          ? t(i, r)
          : !i.vars.yoyoEase ||
            (i._yoyo && i._repeat) ||
            i._yoyo === r ||
            (i.timeline
              ? t(i.timeline, r)
              : ((n = i._ease),
                (i._ease = i._yEase),
                (i._yEase = n),
                (i._yoyo = r))),
          (i = i._next);
    },
    Ee = function (t, e) {
      return (
        (t &&
          (S(t)
            ? t
            : xe[t] ||
              (function (t) {
                var e,
                  r,
                  n,
                  i,
                  s = (t + "").split("("),
                  o = xe[s[0]];
                return o && s.length > 1 && o.config
                  ? o.config.apply(
                      null,
                      ~t.indexOf("{")
                        ? [Se(s[1])]
                        : ((e = t),
                          (r = e.indexOf("(") + 1),
                          (n = e.indexOf(")")),
                          (i = e.indexOf("(", r)),
                          e.substring(
                            r,
                            ~i && i < n ? e.indexOf(")", n + 1) : n
                          ))
                            .split(",")
                            .map(gt)
                    )
                  : xe._CE && Te.test(t)
                  ? xe._CE("", t)
                  : o;
              })(t))) ||
        e
      );
    },
    Ae = function (t, e, r, n) {
      void 0 === r &&
        (r = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === n &&
          (n = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var i,
        s = { easeIn: e, easeOut: r, easeInOut: n };
      return (
        ut(t, function (t) {
          for (var e in ((xe[t] = W[t] = s),
          (xe[(i = t.toLowerCase())] = r),
          s))
            xe[
              i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = xe[t + "." + e] = s[e];
        }),
        s
      );
    },
    Ce = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    },
    Pe = function t(e, r, n) {
      var i = r >= 1 ? r : 1,
        s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
        o = (s / _) * (Math.asin(1 / i) || 0),
        a = function (t) {
          return 1 === t ? 1 : i * Math.pow(2, -10 * t) * T((t - o) * s) + 1;
        },
        u =
          "out" === e
            ? a
            : "in" === e
            ? function (t) {
                return 1 - a(1 - t);
              }
            : Ce(a);
      return (
        (s = _ / s),
        (u.config = function (r, n) {
          return t(e, r, n);
        }),
        u
      );
    },
    De = function t(e, r) {
      void 0 === r && (r = 1.70158);
      var n = function (t) {
          return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
        },
        i =
          "out" === e
            ? n
            : "in" === e
            ? function (t) {
                return 1 - n(1 - t);
              }
            : Ce(n);
      return (
        (i.config = function (r) {
          return t(e, r);
        }),
        i
      );
    };
  ut("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Ae(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (xe.Linear.easeNone = xe.none = xe.Linear.easeIn),
    Ae("Elastic", Pe("in"), Pe("out"), Pe()),
    (function (t, e) {
      var r = 1 / e,
        n = function (n) {
          return n < r
            ? t * n * n
            : n < 0.7272727272727273
            ? t * Math.pow(n - 1.5 / e, 2) + 0.75
            : n < 0.9090909090909092
            ? t * (n -= 2.25 / e) * n + 0.9375
            : t * Math.pow(n - 2.625 / e, 2) + 0.984375;
        };
      Ae(
        "Bounce",
        function (t) {
          return 1 - n(1 - t);
        },
        n
      );
    })(7.5625, 2.75),
    Ae("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Ae("Circ", function (t) {
      return -(b(1 - t * t) - 1);
    }),
    Ae("Sine", function (t) {
      return 1 === t ? 1 : 1 - x(t * y);
    }),
    Ae("Back", De("in"), De("out"), De()),
    (xe.SteppedEase =
      xe.steps =
      W.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              n = t + (e ? 0 : 1),
              i = e ? 1 : 0;
            return function (t) {
              return (((n * Vt(0, 0.99999999, t)) | 0) + i) * r;
            };
          },
        }),
    (g.ease = xe["quad.out"]),
    ut(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (it += t + "," + t + "Params,");
      }
    );
  var Re = function (t, e) {
      (this.id = w++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : at),
        (this.set = e ? e.getSetter : Ze);
    },
    ze = (function () {
      function t(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Yt(this, +t.duration, 1, 1),
          (this.data = t.data),
          s && ((this._ctx = s), s.data.push(this)),
          p || we.wake();
      }
      var e = t.prototype;
      return (
        (e.delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (e.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              Yt(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (t, e) {
          if ((be(), !arguments.length)) return this._tTime;
          var r = this._dp;
          if (r && r.smoothChildTiming && this._ts) {
            for (
              Dt(this, t), !r._dp || r.parent || Rt(r, this);
              r && r.parent;

            )
              r.parent._time !==
                r._start +
                  (r._ts >= 0
                    ? r._tTime / r._ts
                    : (r.totalDuration() - r._tTime) / -r._ts) &&
                r.totalTime(r._tTime, !0),
                (r = r.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && t < this._tDur) ||
                (this._ts < 0 && t > 0) ||
                (!this._tDur && !t)) &&
              zt(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !e) ||
              (this._initted && Math.abs(this._zTime) === v) ||
              (!t && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = t), dt(this, t, e)),
            this
          );
        }),
        (e.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + Et(this)) %
                  (this._dur + this._rDelay) || (t ? this._dur : 0),
                e
              )
            : this._time;
        }),
        (e.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (e.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  Et(this),
                e
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (e.iteration = function (t, e) {
          var r = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * r, e)
            : this._repeat
            ? At(this._tTime, r) + 1
            : 1;
        }),
        (e.timeScale = function (t) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === t) return this;
          var e =
            this.parent && this._ts ? Ct(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
            this.totalTime(Vt(-Math.abs(this._delay), this._tDur, e), !0),
            Pt(this),
            (function (t) {
              for (var e = t.parent; e && e.parent; )
                (e._dirty = 1), e.totalDuration(), (e = e.parent);
              return t;
            })(this)
          );
        }),
        (e.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t),
                t
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (be(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        Math.abs(this._zTime) !== v &&
                        (this._tTime -= v)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              e && (e._sort || !this.parent) && zt(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (t) {
          return (
            this._start +
            (A(t) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Ct(e.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (t) {
          void 0 === t && (t = Q);
          var e = i;
          return (
            (i = t),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(t),
              this.totalTime(-0.01, t.suppressEvents)),
            "nested" !== this.data && !1 !== t.kill && this.kill(),
            (i = e),
            this
          );
        }),
        (e.globalTime = function (t) {
          for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
            (r = e._start + r / (e._ts || 1)), (e = e._dp);
          return !this.parent && this._sat
            ? this._sat.vars.immediateRender
              ? -1
              : this._sat.globalTime(t)
            : r;
        }),
        (e.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t === 1 / 0 ? -2 : t), Xt(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (t) {
          if (arguments.length) {
            var e = this._time;
            return (this._rDelay = t), Xt(this), e ? this.time(e) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (e.seek = function (t, e) {
          return this.totalTime(Nt(this, t), A(e));
        }),
        (e.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, A(e));
        }),
        (e.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var t,
            e = this.parent || this._dp,
            r = this._start;
          return !(
            e &&
            !(
              this._ts &&
              this._initted &&
              e.isActive() &&
              (t = e.rawTime(!0)) >= r &&
              t < this.endTime(!0) - v
            )
          );
        }),
        (e.eventCallback = function (t, e, r) {
          var n = this.vars;
          return arguments.length > 1
            ? (e
                ? ((n[t] = e),
                  r && (n[t + "Params"] = r),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete n[t],
              this)
            : n[t];
        }),
        (e.then = function (t) {
          var e = this;
          return new Promise(function (r) {
            var n = S(t) ? t : mt,
              i = function () {
                var t = e.then;
                (e.then = null),
                  S(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                  r(n),
                  (e.then = t);
              };
            (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
            (!e._tTime && e._ts < 0)
              ? i()
              : (e._prom = i);
          });
        }),
        (e.kill = function () {
          ue(this);
        }),
        t
      );
    })();
  vt(ze.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Le = (function (t) {
    function n(r, n) {
      var i;
      return (
        void 0 === r && (r = {}),
        ((i = t.call(this, r) || this).labels = {}),
        (i.smoothChildTiming = !!r.smoothChildTiming),
        (i.autoRemoveChildren = !!r.autoRemoveChildren),
        (i._sort = A(r.sortChildren)),
        o && zt(r.parent || o, e(i), n),
        r.reversed && i.reverse(),
        r.paused && i.paused(!0),
        r.scrollTrigger && Lt(e(i), r.scrollTrigger),
        i
      );
    }
    r(n, t);
    var s = n.prototype;
    return (
      (s.to = function (t, e, r) {
        return qt(0, arguments, this), this;
      }),
      (s.from = function (t, e, r) {
        return qt(1, arguments, this), this;
      }),
      (s.fromTo = function (t, e, r, n) {
        return qt(2, arguments, this), this;
      }),
      (s.set = function (t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          bt(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Ue(t, e, Nt(this, r), 1),
          this
        );
      }),
      (s.call = function (t, e, r) {
        return zt(this, Ue.delayedCall(0, t, e), r);
      }),
      (s.staggerTo = function (t, e, r, n, i, s, o) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || n),
          (r.onComplete = s),
          (r.onCompleteParams = o),
          (r.parent = this),
          new Ue(t, r, Nt(this, i)),
          this
        );
      }),
      (s.staggerFrom = function (t, e, r, n, i, s, o) {
        return (
          (r.runBackwards = 1),
          (bt(r).immediateRender = A(r.immediateRender)),
          this.staggerTo(t, e, r, n, i, s, o)
        );
      }),
      (s.staggerFromTo = function (t, e, r, n, i, s, o, a) {
        return (
          (n.startAt = r),
          (bt(n).immediateRender = A(n.immediateRender)),
          this.staggerTo(t, e, n, i, s, o, a)
        );
      }),
      (s.render = function (t, e, r) {
        var n,
          s,
          a,
          u,
          l,
          c,
          h,
          f,
          p,
          d,
          g,
          m,
          _ = this._time,
          y = this._dirty ? this.totalDuration() : this._tDur,
          w = this._dur,
          b = t <= 0 ? 0 : ct(t),
          x = this._zTime < 0 != t < 0 && (this._initted || !w);
        if (
          (this !== o && b > y && t >= 0 && (b = y),
          b !== this._tTime || r || x)
        ) {
          if (
            (_ !== this._time &&
              w &&
              ((b += this._time - _), (t += this._time - _)),
            (n = b),
            (p = this._start),
            (c = !(f = this._ts)),
            x && (w || (_ = this._zTime), (t || !e) && (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((g = this._yoyo),
              (l = w + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * l + t, e, r);
            if (
              ((n = ct(b % l)),
              b === y
                ? ((u = this._repeat), (n = w))
                : ((u = ~~(b / l)) && u === b / l && ((n = w), u--),
                  n > w && (n = w)),
              (d = At(this._tTime, l)),
              !_ &&
                this._tTime &&
                d !== u &&
                this._tTime - d * l - this._dur <= 0 &&
                (d = u),
              g && 1 & u && ((n = w - n), (m = 1)),
              u !== d && !this._lock)
            ) {
              var T = g && 1 & d,
                M = T === (g && 1 & u);
              if (
                (u < d && (T = !T),
                (_ = T ? 0 : w),
                (this._lock = 1),
                (this.render(_ || (m ? 0 : ct(u * l)), e, !w)._lock = 0),
                (this._tTime = b),
                !e && this.parent && ae(this, "onRepeat"),
                this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                (_ && _ !== this._time) ||
                  c !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((w = this._dur),
                (y = this._tDur),
                M &&
                  ((this._lock = 2),
                  (_ = T ? w : -1e-4),
                  this.render(_, !0),
                  this.vars.repeatRefresh && !m && this.invalidate()),
                (this._lock = 0),
                !this._ts && !c)
              )
                return this;
              Oe(this, m);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((h = (function (t, e, r) {
                var n;
                if (r > e)
                  for (n = t._first; n && n._start <= r; ) {
                    if ("isPause" === n.data && n._start > e) return n;
                    n = n._next;
                  }
                else
                  for (n = t._last; n && n._start >= r; ) {
                    if ("isPause" === n.data && n._start < e) return n;
                    n = n._prev;
                  }
              })(this, ct(_), ct(n))),
              h && (b -= n - (n = h._start))),
            (this._tTime = b),
            (this._time = n),
            (this._act = !f),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (_ = 0)),
            !_ && n && !e && !u && (ae(this, "onStart"), this._tTime !== b))
          )
            return this;
          if (n >= _ && t >= 0)
            for (s = this._first; s; ) {
              if (
                ((a = s._next), (s._act || n >= s._start) && s._ts && h !== s)
              ) {
                if (s.parent !== this) return this.render(t, e, r);
                if (
                  (s.render(
                    s._ts > 0
                      ? (n - s._start) * s._ts
                      : (s._dirty ? s.totalDuration() : s._tDur) +
                          (n - s._start) * s._ts,
                    e,
                    r
                  ),
                  n !== this._time || (!this._ts && !c))
                ) {
                  (h = 0), a && (b += this._zTime = -1e-8);
                  break;
                }
              }
              s = a;
            }
          else {
            s = this._last;
            for (var S = t < 0 ? t : n; s; ) {
              if (
                ((a = s._prev), (s._act || S <= s._end) && s._ts && h !== s)
              ) {
                if (s.parent !== this) return this.render(t, e, r);
                if (
                  (s.render(
                    s._ts > 0
                      ? (S - s._start) * s._ts
                      : (s._dirty ? s.totalDuration() : s._tDur) +
                          (S - s._start) * s._ts,
                    e,
                    r || (i && (s._initted || s._startAt))
                  ),
                  n !== this._time || (!this._ts && !c))
                ) {
                  (h = 0), a && (b += this._zTime = S ? -1e-8 : v);
                  break;
                }
              }
              s = a;
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(n >= _ ? 0 : -1e-8)._zTime = n >= _ ? 1 : -1),
            this._ts)
          )
            return (this._start = p), Pt(this), this.render(t, e, r);
          this._onUpdate && !e && ae(this, "onUpdate", !0),
            ((b === y && this._tTime >= this.totalDuration()) || (!b && _)) &&
              ((p !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                this._lock ||
                ((t || !w) &&
                  ((b === y && this._ts > 0) || (!b && this._ts < 0)) &&
                  Mt(this, 1),
                e ||
                  (t < 0 && !_) ||
                  (!b && !_ && y) ||
                  (ae(
                    this,
                    b === y && t >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(b < y && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (s.add = function (t, e) {
        var r = this;
        if ((k(e) || (e = Nt(this, e, t)), !(t instanceof ze))) {
          if (R(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              this
            );
          if (M(t)) return this.addLabel(t, e);
          if (!S(t)) return this;
          t = Ue.delayedCall(0, t);
        }
        return this !== t ? zt(this, t, e) : this;
      }),
      (s.getChildren = function (t, e, r, n) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === n && (n = -m);
        for (var i = [], s = this._first; s; )
          s._start >= n &&
            (s instanceof Ue
              ? e && i.push(s)
              : (r && i.push(s),
                t && i.push.apply(i, s.getChildren(!0, e, r)))),
            (s = s._next);
        return i;
      }),
      (s.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (s.remove = function (t) {
        return M(t)
          ? this.removeLabel(t)
          : S(t)
          ? this.killTweensOf(t)
          : (Tt(this, t),
            t === this._recent && (this._recent = this._last),
            St(this));
      }),
      (s.totalTime = function (e, r) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = ct(
                we.time -
                  (this._ts > 0
                    ? e / this._ts
                    : (this.totalDuration() - e) / -this._ts)
              )),
            t.prototype.totalTime.call(this, e, r),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (s.addLabel = function (t, e) {
        return (this.labels[t] = Nt(this, e)), this;
      }),
      (s.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (s.addPause = function (t, e, r) {
        var n = Ue.delayedCall(0, e || j, r);
        return (
          (n.data = "isPause"), (this._hasPause = 1), zt(this, n, Nt(this, t))
        );
      }),
      (s.removePause = function (t) {
        var e = this._first;
        for (t = Nt(this, t); e; )
          e._start === t && "isPause" === e.data && Mt(e), (e = e._next);
      }),
      (s.killTweensOf = function (t, e, r) {
        for (var n = this.getTweensOf(t, r), i = n.length; i--; )
          Fe !== n[i] && n[i].kill(t, e);
        return this;
      }),
      (s.getTweensOf = function (t, e) {
        for (var r, n = [], i = Qt(t), s = this._first, o = k(e); s; )
          s instanceof Ue
            ? ft(s._targets, i) &&
              (o
                ? (!Fe || (s._initted && s._ts)) &&
                  s.globalTime(0) <= e &&
                  s.globalTime(s.totalDuration()) > e
                : !e || s.isActive()) &&
              n.push(s)
            : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
            (s = s._next);
        return n;
      }),
      (s.tweenTo = function (t, e) {
        e = e || {};
        var r,
          n = this,
          i = Nt(n, t),
          s = e,
          o = s.startAt,
          a = s.onStart,
          u = s.onStartParams,
          l = s.immediateRender,
          c = Ue.to(
            n,
            vt(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (i - (o && "time" in o ? o.time : n._time)) / n.timeScale()
                  ) ||
                  v,
                onStart: function () {
                  if ((n.pause(), !r)) {
                    var t =
                      e.duration ||
                      Math.abs(
                        (i - (o && "time" in o ? o.time : n._time)) /
                          n.timeScale()
                      );
                    c._dur !== t && Yt(c, t, 0, 1).render(c._time, !0, !0),
                      (r = 1);
                  }
                  a && a.apply(c, u || []);
                },
              },
              e
            )
          );
        return l ? c.render(0) : c;
      }),
      (s.tweenFromTo = function (t, e, r) {
        return this.tweenTo(e, vt({ startAt: { time: Nt(this, t) } }, r));
      }),
      (s.recent = function () {
        return this._recent;
      }),
      (s.nextLabel = function (t) {
        return void 0 === t && (t = this._time), oe(this, Nt(this, t));
      }),
      (s.previousLabel = function (t) {
        return void 0 === t && (t = this._time), oe(this, Nt(this, t), 1);
      }),
      (s.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + v);
      }),
      (s.shiftChildren = function (t, e, r) {
        void 0 === r && (r = 0);
        for (var n, i = this._first, s = this.labels; i; )
          i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
        if (e) for (n in s) s[n] >= r && (s[n] += t);
        return St(this);
      }),
      (s.invalidate = function (e) {
        var r = this._first;
        for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
        return t.prototype.invalidate.call(this, e);
      }),
      (s.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          St(this)
        );
      }),
      (s.totalDuration = function (t) {
        var e,
          r,
          n,
          i = 0,
          s = this,
          a = s._last,
          u = m;
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -t : t)
          );
        if (s._dirty) {
          for (n = s.parent; a; )
            (e = a._prev),
              a._dirty && a.totalDuration(),
              (r = a._start) > u && s._sort && a._ts && !s._lock
                ? ((s._lock = 1), (zt(s, a, r - a._delay, 1)._lock = 0))
                : (u = r),
              r < 0 &&
                a._ts &&
                ((i -= r),
                ((!n && !s._dp) || (n && n.smoothChildTiming)) &&
                  ((s._start += r / s._ts), (s._time -= r), (s._tTime -= r)),
                s.shiftChildren(-r, !1, -Infinity),
                (u = 0)),
              a._end > i && a._ts && (i = a._end),
              (a = e);
          Yt(s, s === o && s._time > i ? s._time : i, 1, 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (n.updateRoot = function (t) {
        if ((o._ts && (dt(o, Ct(t, o)), (h = we.frame)), we.frame >= rt)) {
          rt += d.autoSleep || 120;
          var e = o._first;
          if ((!e || !e._ts) && d.autoSleep && we._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || we.sleep();
          }
        }
      }),
      n
    );
  })(ze);
  vt(Le.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Fe,
    Ie,
    Be = function (t, e, r, n, i, s, o) {
      var a,
        u,
        l,
        c,
        h,
        f,
        p,
        d,
        g = new or(this._pt, t, e, 0, 1, tr, null, i),
        m = 0,
        v = 0;
      for (
        g.b = r,
          g.e = n,
          r += "",
          (p = ~(n += "").indexOf("random(")) && (n = ie(n)),
          s && (s((d = [r, n]), t, e), (r = d[0]), (n = d[1])),
          u = r.match(I) || [];
        (a = I.exec(n));

      )
        (c = a[0]),
          (h = n.substring(m, a.index)),
          l ? (l = (l + 1) % 5) : "rgba(" === h.substr(-5) && (l = 1),
          c !== u[v++] &&
            ((f = parseFloat(u[v - 1]) || 0),
            (g._pt = {
              _next: g._pt,
              p: h || 1 === v ? h : ",",
              s: f,
              c: "=" === c.charAt(1) ? ht(f, c) - f : parseFloat(c) - f,
              m: l && l < 4 ? Math.round : 0,
            }),
            (m = I.lastIndex));
      return (
        (g.c = m < n.length ? n.substring(m, n.length) : ""),
        (g.fp = o),
        (B.test(n) || p) && (g.e = 0),
        (this._pt = g),
        g
      );
    },
    Ye = function (t, e, r, n, i, s, o, a, u, l) {
      S(n) && (n = n(i || 0, t, s));
      var c,
        h = t[e],
        f =
          "get" !== r
            ? r
            : S(h)
            ? u
              ? t[
                  e.indexOf("set") || !S(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](u)
              : t[e]()
            : h,
        p = S(h) ? (u ? $e : Ge) : je;
      if (
        (M(n) &&
          (~n.indexOf("random(") && (n = ie(n)),
          "=" === n.charAt(1) &&
            ((c = ht(f, n) + (Ut(f) || 0)) || 0 === c) &&
            (n = c)),
        !l || f !== n || Ie)
      )
        return isNaN(f * n) || "" === n
          ? (!h && !(e in t) && H(e, n),
            Be.call(this, t, e, f, n, p, a || d.stringFilter, u))
          : ((c = new or(
              this._pt,
              t,
              e,
              +f || 0,
              n - (f || 0),
              "boolean" == typeof h ? Je : Ke,
              0,
              p
            )),
            u && (c.fp = u),
            o && c.modifier(o, this, t),
            (this._pt = c));
    },
    Xe = function (t, e, r, n, i, s) {
      var o, a, u, l;
      if (
        tt[t] &&
        !1 !==
          (o = new tt[t]()).init(
            i,
            o.rawVars
              ? e[t]
              : (function (t, e, r, n, i) {
                  if (
                    (S(t) && (t = qe(t, i, e, r, n)),
                    !E(t) || (t.style && t.nodeType) || R(t) || D(t))
                  )
                    return M(t) ? qe(t, i, e, r, n) : t;
                  var s,
                    o = {};
                  for (s in t) o[s] = qe(t[s], i, e, r, n);
                  return o;
                })(e[t], n, i, s, r),
            r,
            n,
            s
          ) &&
        ((r._pt = a = new or(r._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
        r !== f)
      )
        for (u = r._ptLookup[r._targets.indexOf(i)], l = o._props.length; l--; )
          u[o._props[l]] = a;
      return o;
    },
    We = function t(e, r, s) {
      var a,
        u,
        l,
        c,
        h,
        f,
        p,
        d,
        _,
        y,
        w,
        b,
        x,
        T = e.vars,
        M = T.ease,
        S = T.startAt,
        k = T.immediateRender,
        O = T.lazy,
        E = T.onUpdate,
        C = T.onUpdateParams,
        P = T.callbackScope,
        D = T.runBackwards,
        R = T.yoyoEase,
        z = T.keyframes,
        L = T.autoRevert,
        F = e._dur,
        I = e._startAt,
        B = e._targets,
        Y = e.parent,
        X = Y && "nested" === Y.data ? Y.vars.targets : B,
        W = "auto" === e._overwrite && !n,
        N = e.timeline;
      if (
        (N && (!z || !M) && (M = "none"),
        (e._ease = Ee(M, g.ease)),
        (e._yEase = R ? ke(Ee(!0 === R ? M : R, g.ease)) : 0),
        R &&
          e._yoyo &&
          !e._repeat &&
          ((R = e._yEase), (e._yEase = e._ease), (e._ease = R)),
        (e._from = !N && !!T.runBackwards),
        !N || (z && !T.stagger))
      ) {
        if (
          ((b = (d = B[0] ? ot(B[0]).harness : 0) && T[d.prop]),
          (a = wt(T, Z)),
          I &&
            (I._zTime < 0 && I.progress(1),
            r < 0 && D && k && !L ? I.render(-1, !0) : I.revert(D && F ? $ : G),
            (I._lazy = 0)),
          S)
        ) {
          if (
            (Mt(
              (e._startAt = Ue.set(
                B,
                vt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: Y,
                    immediateRender: !0,
                    lazy: !I && A(O),
                    startAt: null,
                    delay: 0,
                    onUpdate: E,
                    onUpdateParams: C,
                    callbackScope: P,
                    stagger: 0,
                  },
                  S
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            r < 0 && (i || (!k && !L)) && e._startAt.revert($),
            k && F && r <= 0 && s <= 0)
          )
            return void (r && (e._zTime = r));
        } else if (D && F && !I)
          if (
            (r && (k = !1),
            (l = vt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: k && !I && A(O),
                immediateRender: k,
                stagger: 0,
                parent: Y,
              },
              a
            )),
            b && (l[d.prop] = b),
            Mt((e._startAt = Ue.set(B, l))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            r < 0 && (i ? e._startAt.revert($) : e._startAt.render(-1, !0)),
            (e._zTime = r),
            k)
          ) {
            if (!r) return;
          } else t(e._startAt, v, v);
        for (
          e._pt = e._ptCache = 0, O = (F && A(O)) || (O && !F), u = 0;
          u < B.length;
          u++
        ) {
          if (
            ((p = (h = B[u])._gsap || st(B)[u]._gsap),
            (e._ptLookup[u] = y = {}),
            J[p.id] && K.length && pt(),
            (w = X === B ? u : X.indexOf(h)),
            d &&
              !1 !== (_ = new d()).init(h, b || a, e, w, X) &&
              ((e._pt = c =
                new or(e._pt, h, _.name, 0, 1, _.render, _, 0, _.priority)),
              _._props.forEach(function (t) {
                y[t] = c;
              }),
              _.priority && (f = 1)),
            !d || b)
          )
            for (l in a)
              tt[l] && (_ = Xe(l, a, e, w, h, X))
                ? _.priority && (f = 1)
                : (y[l] = c =
                    Ye.call(e, h, l, "get", a[l], w, X, 0, T.stringFilter));
          e._op && e._op[u] && e.kill(h, e._op[u]),
            W &&
              e._pt &&
              ((Fe = e),
              o.killTweensOf(h, y, e.globalTime(r)),
              (x = !e.parent),
              (Fe = 0)),
            e._pt && O && (J[p.id] = 1);
        }
        f && sr(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = E),
        (e._initted = (!e._op || e._pt) && !x),
        z && r <= 0 && N.render(m, !0, !0);
    },
    Ne = function (t, e, r, n) {
      var i,
        s,
        o = e.ease || n || "power1.inOut";
      if (R(e))
        (s = r[t] || (r[t] = [])),
          e.forEach(function (t, r) {
            return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: o });
          });
      else
        for (i in e)
          (s = r[i] || (r[i] = [])),
            "ease" === i || s.push({ t: parseFloat(t), v: e[i], e: o });
    },
    qe = function (t, e, r, n, i) {
      return S(t)
        ? t.call(e, r, n, i)
        : M(t) && ~t.indexOf("random(")
        ? ie(t)
        : t;
    },
    He = it + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Ve = {};
  ut(He + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (Ve[t] = 1);
  });
  var Ue = (function (t) {
    function s(r, i, s, a) {
      var u;
      "number" == typeof i && ((s.duration = i), (i = s), (s = null));
      var l,
        c,
        h,
        f,
        p,
        g,
        m,
        v,
        _ = (u = t.call(this, a ? i : bt(i)) || this).vars,
        y = _.duration,
        w = _.delay,
        b = _.immediateRender,
        x = _.stagger,
        T = _.overwrite,
        M = _.keyframes,
        S = _.defaults,
        O = _.scrollTrigger,
        C = _.yoyoEase,
        z = i.parent || o,
        L = (R(r) || D(r) ? k(r[0]) : "length" in i) ? [r] : Qt(r);
      if (
        ((u._targets = L.length
          ? st(L)
          : V(
              "GSAP target " + r + " not found. https://greensock.com",
              !d.nullTargetWarn
            ) || []),
        (u._ptLookup = []),
        (u._overwrite = T),
        M || x || P(y) || P(w))
      ) {
        if (
          ((i = u.vars),
          (l = u.timeline =
            new Le({
              data: "nested",
              defaults: S || {},
              targets: z && "nested" === z.data ? z.vars.targets : L,
            })).kill(),
          (l.parent = l._dp = e(u)),
          (l._start = 0),
          x || P(y) || P(w))
        ) {
          if (((f = L.length), (m = x && Jt(x)), E(x)))
            for (p in x) ~He.indexOf(p) && (v || (v = {}), (v[p] = x[p]));
          for (c = 0; c < f; c++)
            ((h = wt(i, Ve)).stagger = 0),
              C && (h.yoyoEase = C),
              v && _t(h, v),
              (g = L[c]),
              (h.duration = +qe(y, e(u), c, g, L)),
              (h.delay = (+qe(w, e(u), c, g, L) || 0) - u._delay),
              !x &&
                1 === f &&
                h.delay &&
                ((u._delay = w = h.delay), (u._start += w), (h.delay = 0)),
              l.to(g, h, m ? m(c, g, L) : 0),
              (l._ease = xe.none);
          l.duration() ? (y = w = 0) : (u.timeline = 0);
        } else if (M) {
          bt(vt(l.vars.defaults, { ease: "none" })),
            (l._ease = Ee(M.ease || i.ease || "none"));
          var F,
            I,
            B,
            Y = 0;
          if (R(M))
            M.forEach(function (t) {
              return l.to(L, t, ">");
            }),
              l.duration();
          else {
            for (p in ((h = {}), M))
              "ease" === p || "easeEach" === p || Ne(p, M[p], h, M.easeEach);
            for (p in h)
              for (
                F = h[p].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  Y = 0,
                  c = 0;
                c < F.length;
                c++
              )
                ((B = {
                  ease: (I = F[c]).e,
                  duration: ((I.t - (c ? F[c - 1].t : 0)) / 100) * y,
                })[p] = I.v),
                  l.to(L, B, Y),
                  (Y += B.duration);
            l.duration() < y && l.to({}, { duration: y - l.duration() });
          }
        }
        y || u.duration((y = l.duration()));
      } else u.timeline = 0;
      return (
        !0 !== T || n || ((Fe = e(u)), o.killTweensOf(L), (Fe = 0)),
        zt(z, e(u), s),
        i.reversed && u.reverse(),
        i.paused && u.paused(!0),
        (b ||
          (!y &&
            !M &&
            u._start === ct(z._time) &&
            A(b) &&
            Ot(e(u)) &&
            "nested" !== z.data)) &&
          ((u._tTime = -1e-8), u.render(Math.max(0, -w) || 0)),
        O && Lt(e(u), O),
        u
      );
    }
    r(s, t);
    var a = s.prototype;
    return (
      (a.render = function (t, e, r) {
        var n,
          s,
          o,
          a,
          u,
          l,
          c,
          h,
          f,
          p = this._time,
          d = this._tDur,
          g = this._dur,
          m = t < 0,
          _ = t > d - v && !m ? d : t < v ? 0 : t;
        if (g) {
          if (
            _ !== this._tTime ||
            !t ||
            r ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 !== m)
          ) {
            if (((n = _), (h = this.timeline), this._repeat)) {
              if (((a = g + this._rDelay), this._repeat < -1 && m))
                return this.totalTime(100 * a + t, e, r);
              if (
                ((n = ct(_ % a)),
                _ === d
                  ? ((o = this._repeat), (n = g))
                  : ((o = ~~(_ / a)) && o === _ / a && ((n = g), o--),
                    n > g && (n = g)),
                (l = this._yoyo && 1 & o) && ((f = this._yEase), (n = g - n)),
                (u = At(this._tTime, a)),
                n === p && !r && this._initted)
              )
                return (this._tTime = _), this;
              o !== u &&
                (h && this._yEase && Oe(h, l),
                !this.vars.repeatRefresh ||
                  l ||
                  this._lock ||
                  ((this._lock = r = 1),
                  (this.render(ct(a * o), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Ft(this, m ? t : n, r, e, _)) return (this._tTime = 0), this;
              if (p !== this._time) return this;
              if (g !== this._dur) return this.render(t, e, r);
            }
            if (
              ((this._tTime = _),
              (this._time = n),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = c = (f || this._ease)(n / g)),
              this._from && (this.ratio = c = 1 - c),
              n && !p && !e && !o && (ae(this, "onStart"), this._tTime !== _))
            )
              return this;
            for (s = this._pt; s; ) s.r(c, s.d), (s = s._next);
            (h &&
              h.render(
                t < 0 ? t : !n && l ? -1e-8 : h._dur * h._ease(n / this._dur),
                e,
                r
              )) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (m && kt(this, t, 0, r), ae(this, "onUpdate")),
              this._repeat &&
                o !== u &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                ae(this, "onRepeat"),
              (_ !== this._tDur && _) ||
                this._tTime !== _ ||
                (m && !this._onUpdate && kt(this, t, 0, !0),
                (t || !g) &&
                  ((_ === this._tDur && this._ts > 0) ||
                    (!_ && this._ts < 0)) &&
                  Mt(this, 1),
                e ||
                  (m && !p) ||
                  !(_ || p || l) ||
                  (ae(this, _ === d ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(_ < d && this.timeScale() > 0) &&
                    this._prom()));
          }
        } else
          !(function (t, e, r, n) {
            var s,
              o,
              a,
              u = t.ratio,
              l =
                e < 0 ||
                (!e &&
                  ((!t._start && It(t) && (t._initted || !Bt(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !Bt(t))))
                  ? 0
                  : 1,
              c = t._rDelay,
              h = 0;
            if (
              (c &&
                t._repeat &&
                ((h = Vt(0, t._tDur, e)),
                (o = At(h, c)),
                t._yoyo && 1 & o && (l = 1 - l),
                o !== At(t._tTime, c) &&
                  ((u = 1 - l),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              l !== u || i || n || t._zTime === v || (!e && t._zTime))
            ) {
              if (!t._initted && Ft(t, e, n, r, h)) return;
              for (
                a = t._zTime,
                  t._zTime = e || (r ? v : 0),
                  r || (r = e && !a),
                  t.ratio = l,
                  t._from && (l = 1 - l),
                  t._time = 0,
                  t._tTime = h,
                  s = t._pt;
                s;

              )
                s.r(l, s.d), (s = s._next);
              e < 0 && kt(t, e, 0, !0),
                t._onUpdate && !r && ae(t, "onUpdate"),
                h && t._repeat && !r && t.parent && ae(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === l &&
                  (l && Mt(t, 1),
                  r ||
                    i ||
                    (ae(t, l ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, r);
        return this;
      }),
      (a.targets = function () {
        return this._targets;
      }),
      (a.invalidate = function (e) {
        return (
          (!e || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(e),
          t.prototype.invalidate.call(this, e)
        );
      }),
      (a.resetTo = function (t, e, r, n) {
        p || we.wake(), this._ts || this.play();
        var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || We(this, i),
          (function (t, e, r, n, i, s, o) {
            var a,
              u,
              l,
              c,
              h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!h)
              for (
                h = t._ptCache[e] = [], l = t._ptLookup, c = t._targets.length;
                c--;

              ) {
                if ((a = l[c][e]) && a.d && a.d._pt)
                  for (a = a.d._pt; a && a.p !== e && a.fp !== e; ) a = a._next;
                if (!a)
                  return (Ie = 1), (t.vars[e] = "+=0"), We(t, o), (Ie = 0), 1;
                h.push(a);
              }
            for (c = h.length; c--; )
              ((a = (u = h[c])._pt || u).s =
                (!n && 0 !== n) || i ? a.s + (n || 0) + s * a.c : n),
                (a.c = r - a.s),
                u.e && (u.e = lt(r) + Ut(u.e)),
                u.b && (u.b = a.s + Ut(u.b));
          })(this, t, e, r, n, this._ease(i / this._dur), i)
            ? this.resetTo(t, e, r, n)
            : (Dt(this, 0),
              this.parent ||
                xt(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (a.kill = function (t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (this._lazy = this._pt = 0), this.parent ? ue(this) : this;
        if (this.timeline) {
          var r = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Fe && !0 !== Fe.vars.overwrite)
              ._first || ue(this),
            this.parent &&
              r !== this.timeline.totalDuration() &&
              Yt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
            this
          );
        }
        var n,
          i,
          s,
          o,
          a,
          u,
          l,
          c = this._targets,
          h = t ? Qt(t) : c,
          f = this._ptLookup,
          p = this._pt;
        if (
          (!e || "all" === e) &&
          (function (t, e) {
            for (
              var r = t.length, n = r === e.length;
              n && r-- && t[r] === e[r];

            );
            return r < 0;
          })(c, h)
        )
          return "all" === e && (this._pt = 0), ue(this);
        for (
          n = this._op = this._op || [],
            "all" !== e &&
              (M(e) &&
                ((a = {}),
                ut(e, function (t) {
                  return (a[t] = 1);
                }),
                (e = a)),
              (e = (function (t, e) {
                var r,
                  n,
                  i,
                  s,
                  o = t[0] ? ot(t[0]).harness : 0,
                  a = o && o.aliases;
                if (!a) return e;
                for (n in ((r = _t({}, e)), a))
                  if ((n in r))
                    for (i = (s = a[n].split(",")).length; i--; )
                      r[s[i]] = r[n];
                return r;
              })(c, e))),
            l = c.length;
          l--;

        )
          if (~h.indexOf(c[l]))
            for (a in ((i = f[l]),
            "all" === e
              ? ((n[l] = e), (o = i), (s = {}))
              : ((s = n[l] = n[l] || {}), (o = e)),
            o))
              (u = i && i[a]) &&
                (("kill" in u.d && !0 !== u.d.kill(a)) || Tt(this, u, "_pt"),
                delete i[a]),
                "all" !== s && (s[a] = 1);
        return this._initted && !this._pt && p && ue(this), this;
      }),
      (s.to = function (t, e) {
        return new s(t, e, arguments[2]);
      }),
      (s.from = function (t, e) {
        return qt(1, arguments);
      }),
      (s.delayedCall = function (t, e, r, n) {
        return new s(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: n,
        });
      }),
      (s.fromTo = function (t, e, r) {
        return qt(2, arguments);
      }),
      (s.set = function (t, e) {
        return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new s(t, e);
      }),
      (s.killTweensOf = function (t, e, r) {
        return o.killTweensOf(t, e, r);
      }),
      s
    );
  })(ze);
  vt(Ue.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    ut("staggerTo,staggerFrom,staggerFromTo", function (t) {
      Ue[t] = function () {
        var e = new Le(),
          r = jt.call(arguments, 0);
        return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r);
      };
    });
  var je = function (t, e, r) {
      return (t[e] = r);
    },
    Ge = function (t, e, r) {
      return t[e](r);
    },
    $e = function (t, e, r, n) {
      return t[e](n.fp, r);
    },
    Qe = function (t, e, r) {
      return t.setAttribute(e, r);
    },
    Ze = function (t, e) {
      return S(t[e]) ? Ge : O(t[e]) && t.setAttribute ? Qe : je;
    },
    Ke = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    Je = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    tr = function (t, e) {
      var r = e._pt,
        n = "";
      if (!t && e.b) n = e.b;
      else if (1 === t && e.e) n = e.e;
      else {
        for (; r; )
          (n =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            n),
            (r = r._next);
        n += e.c;
      }
      e.set(e.t, e.p, n, e);
    },
    er = function (t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    rr = function (t, e, r, n) {
      for (var i, s = this._pt; s; )
        (i = s._next), s.p === n && s.modifier(t, e, r), (s = i);
    },
    nr = function (t) {
      for (var e, r, n = this._pt; n; )
        (r = n._next),
          (n.p === t && !n.op) || n.op === t
            ? Tt(this, n, "_pt")
            : n.dep || (e = 1),
          (n = r);
      return !e;
    },
    ir = function (t, e, r, n) {
      n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
    },
    sr = function (t) {
      for (var e, r, n, i, s = t._pt; s; ) {
        for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next;
        (s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
          (s._next = r) ? (r._prev = s) : (i = s),
          (s = e);
      }
      t._pt = n;
    },
    or = (function () {
      function t(t, e, r, n, i, s, o, a, u) {
        (this.t = e),
          (this.s = n),
          (this.c = i),
          (this.p = r),
          (this.r = s || Ke),
          (this.d = o || this),
          (this.set = a || je),
          (this.pr = u || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      return (
        (t.prototype.modifier = function (t, e, r) {
          (this.mSet = this.mSet || this.set),
            (this.set = ir),
            (this.m = t),
            (this.mt = r),
            (this.tween = e);
        }),
        t
      );
    })();
  ut(
    it +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (Z[t] = 1);
    }
  ),
    (W.TweenMax = W.TweenLite = Ue),
    (W.TimelineLite = W.TimelineMax = Le),
    (o = new Le({
      sortChildren: !1,
      defaults: g,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (d.stringFilter = ye);
  var ar = [],
    ur = {},
    lr = [],
    cr = 0,
    hr = function (t) {
      return (ur[t] || lr).map(function (t) {
        return t();
      });
    },
    fr = function () {
      var t = Date.now(),
        e = [];
      t - cr > 2 &&
        (hr("matchMediaInit"),
        ar.forEach(function (t) {
          var r,
            n,
            i,
            s,
            o = t.queries,
            u = t.conditions;
          for (n in o)
            (r = a.matchMedia(o[n]).matches) && (i = 1),
              r !== u[n] && ((u[n] = r), (s = 1));
          s && (t.revert(), i && e.push(t));
        }),
        hr("matchMediaRevert"),
        e.forEach(function (t) {
          return t.onMatch(t);
        }),
        (cr = t),
        hr("matchMedia"));
    },
    pr = (function () {
      function t(t, e) {
        (this.selector = e && Zt(e)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          t && this.add(t);
      }
      var e = t.prototype;
      return (
        (e.add = function (t, e, r) {
          S(t) && ((r = e), (e = t), (t = S));
          var n = this,
            i = function () {
              var t,
                i = s,
                o = n.selector;
              return (
                i && i !== n && i.data.push(n),
                r && (n.selector = Zt(r)),
                (s = n),
                (t = e.apply(n, arguments)),
                S(t) && n._r.push(t),
                (s = i),
                (n.selector = o),
                (n.isReverted = !1),
                t
              );
            };
          return (n.last = i), t === S ? i(n) : t ? (n[t] = i) : i;
        }),
        (e.ignore = function (t) {
          var e = s;
          (s = null), t(this), (s = e);
        }),
        (e.getTweens = function () {
          var e = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof t
                ? e.push.apply(e, r.getTweens())
                : r instanceof Ue &&
                    !(r.parent && "nested" === r.parent.data) &&
                    e.push(r);
            }),
            e
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (t, e) {
          var r = this;
          if (t) {
            var n = this.getTweens();
            this.data.forEach(function (t) {
              "isFlip" === t.data &&
                (t.revert(),
                t.getChildren(!0, !0, !1).forEach(function (t) {
                  return n.splice(n.indexOf(t), 1);
                }));
            }),
              n
                .map(function (t) {
                  return { g: t.globalTime(0), t };
                })
                .sort(function (t, e) {
                  return e.g - t.g || -1;
                })
                .forEach(function (e) {
                  return e.t.revert(t);
                }),
              this.data.forEach(function (e) {
                return !(e instanceof ze) && e.revert && e.revert(t);
              }),
              this._r.forEach(function (e) {
                return e(t, r);
              }),
              (this.isReverted = !0);
          } else
            this.data.forEach(function (t) {
              return t.kill && t.kill();
            });
          if ((this.clear(), e)) {
            var i = ar.indexOf(this);
            ~i && ar.splice(i, 1);
          }
        }),
        (e.revert = function (t) {
          this.kill(t || {});
        }),
        t
      );
    })(),
    dr = (function () {
      function t(t) {
        (this.contexts = []), (this.scope = t);
      }
      var e = t.prototype;
      return (
        (e.add = function (t, e, r) {
          E(t) || (t = { matches: t });
          var n,
            i,
            s,
            o = new pr(0, r || this.scope),
            u = (o.conditions = {});
          for (i in (this.contexts.push(o),
          (e = o.add("onMatch", e)),
          (o.queries = t),
          t))
            "all" === i
              ? (s = 1)
              : (n = a.matchMedia(t[i])) &&
                (ar.indexOf(o) < 0 && ar.push(o),
                (u[i] = n.matches) && (s = 1),
                n.addListener
                  ? n.addListener(fr)
                  : n.addEventListener("change", fr));
          return s && e(o), this;
        }),
        (e.revert = function (t) {
          this.kill(t || {});
        }),
        (e.kill = function (t) {
          this.contexts.forEach(function (e) {
            return e.kill(t, !0);
          });
        }),
        t
      );
    })(),
    gr = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        e.forEach(function (t) {
          return ce(t);
        });
      },
      timeline: function (t) {
        return new Le(t);
      },
      getTweensOf: function (t, e) {
        return o.getTweensOf(t, e);
      },
      getProperty: function (t, e, r, n) {
        M(t) && (t = Qt(t)[0]);
        var i = ot(t || {}).get,
          s = r ? mt : gt;
        return (
          "native" === r && (r = ""),
          t
            ? e
              ? s(((tt[e] && tt[e].get) || i)(t, e, r, n))
              : function (e, r, n) {
                  return s(((tt[e] && tt[e].get) || i)(t, e, r, n));
                }
            : t
        );
      },
      quickSetter: function (t, e, r) {
        if ((t = Qt(t)).length > 1) {
          var n = t.map(function (t) {
              return _r.quickSetter(t, e, r);
            }),
            i = n.length;
          return function (t) {
            for (var e = i; e--; ) n[e](t);
          };
        }
        t = t[0] || {};
        var s = tt[e],
          o = ot(t),
          a = (o.harness && (o.harness.aliases || {})[e]) || e,
          u = s
            ? function (e) {
                var n = new s();
                (f._pt = 0),
                  n.init(t, r ? e + r : e, f, 0, [t]),
                  n.render(1, n),
                  f._pt && er(1, f);
              }
            : o.set(t, a);
        return s
          ? u
          : function (e) {
              return u(t, a, r ? e + r : e, o, 1);
            };
      },
      quickTo: function (t, e, r) {
        var n,
          i = _r.to(
            t,
            _t((((n = {})[e] = "+=0.1"), (n.paused = !0), n), r || {})
          ),
          s = function (t, r, n) {
            return i.resetTo(e, t, r, n);
          };
        return (s.tween = i), s;
      },
      isTweening: function (t) {
        return o.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Ee(t.ease, g.ease)), yt(g, t || {});
      },
      config: function (t) {
        return yt(d, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          r = t.effect,
          n = t.plugins,
          i = t.defaults,
          s = t.extendTimeline;
        (n || "").split(",").forEach(function (t) {
          return (
            t && !tt[t] && !W[t] && V(e + " effect requires " + t + " plugin.")
          );
        }),
          (et[e] = function (t, e, n) {
            return r(Qt(t), vt(e || {}, i), n);
          }),
          s &&
            (Le.prototype[e] = function (t, r, n) {
              return this.add(et[e](t, E(r) ? r : (n = r) && {}, this), n);
            });
      },
      registerEase: function (t, e) {
        xe[t] = Ee(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Ee(t, e) : xe;
      },
      getById: function (t) {
        return o.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var r,
          n,
          i = new Le(t);
        for (
          i.smoothChildTiming = A(t.smoothChildTiming),
            o.remove(i),
            i._dp = 0,
            i._time = i._tTime = o._time,
            r = o._first;
          r;

        )
          (n = r._next),
            (!e &&
              !r._dur &&
              r instanceof Ue &&
              r.vars.onComplete === r._targets[0]) ||
              zt(i, r, r._start - r._delay),
            (r = n);
        return zt(o, i, 0), i;
      },
      context: function (t, e) {
        return t ? new pr(t, e) : s;
      },
      matchMedia: function (t) {
        return new dr(t);
      },
      matchMediaRefresh: function () {
        return (
          ar.forEach(function (t) {
            var e,
              r,
              n = t.conditions;
            for (r in n) n[r] && ((n[r] = !1), (e = 1));
            e && t.revert();
          }) || fr()
        );
      },
      addEventListener: function (t, e) {
        var r = ur[t] || (ur[t] = []);
        ~r.indexOf(e) || r.push(e);
      },
      removeEventListener: function (t, e) {
        var r = ur[t],
          n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1);
      },
      utils: {
        wrap: function t(e, r, n) {
          var i = r - e;
          return R(e)
            ? ne(e, t(0, e.length), r)
            : Ht(n, function (t) {
                return ((i + ((t - e) % i)) % i) + e;
              });
        },
        wrapYoyo: function t(e, r, n) {
          var i = r - e,
            s = 2 * i;
          return R(e)
            ? ne(e, t(0, e.length - 1), r)
            : Ht(n, function (t) {
                return e + ((t = (s + ((t - e) % s)) % s || 0) > i ? s - t : t);
              });
        },
        distribute: Jt,
        random: re,
        snap: ee,
        normalize: function (t, e, r) {
          return se(t, e, 0, 1, r);
        },
        getUnit: Ut,
        clamp: function (t, e, r) {
          return Ht(r, function (r) {
            return Vt(t, e, r);
          });
        },
        splitColor: de,
        toArray: Qt,
        selector: Zt,
        mapRange: se,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (r) {
            return t(parseFloat(r)) + (e || Ut(r));
          };
        },
        interpolate: function t(e, r, n, i) {
          var s = isNaN(e + r)
            ? 0
            : function (t) {
                return (1 - t) * e + t * r;
              };
          if (!s) {
            var o,
              a,
              u,
              l,
              c,
              h = M(e),
              f = {};
            if ((!0 === n && (i = 1) && (n = null), h))
              (e = { p: e }), (r = { p: r });
            else if (R(e) && !R(r)) {
              for (u = [], l = e.length, c = l - 2, a = 1; a < l; a++)
                u.push(t(e[a - 1], e[a]));
              l--,
                (s = function (t) {
                  t *= l;
                  var e = Math.min(c, ~~t);
                  return u[e](t - e);
                }),
                (n = r);
            } else i || (e = _t(R(e) ? [] : {}, e));
            if (!u) {
              for (o in r) Ye.call(f, e, o, "get", r[o]);
              s = function (t) {
                return er(t, f) || (h ? e.p : e);
              };
            }
          }
          return Ht(n, s);
        },
        shuffle: Kt,
      },
      install: q,
      effects: et,
      ticker: we,
      updateRoot: Le.updateRoot,
      plugins: tt,
      globalTimeline: o,
      core: {
        PropTween: or,
        globals: U,
        Tween: Ue,
        Timeline: Le,
        Animation: ze,
        getCache: ot,
        _removeLinkedListItem: Tt,
        reverting: function () {
          return i;
        },
        context: function (t) {
          return t && s && (s.data.push(t), (t._ctx = s)), s;
        },
        suppressOverwrites: function (t) {
          return (n = t);
        },
      },
    };
  ut("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (gr[t] = Ue[t]);
  }),
    we.add(Le.updateRoot),
    (f = gr.to({}, { duration: 0 }));
  var mr = function (t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
        r = r._next;
      return r;
    },
    vr = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, r, n) {
          n._onInit = function (t) {
            var n, i;
            if (
              (M(r) &&
                ((n = {}),
                ut(r, function (t) {
                  return (n[t] = 1);
                }),
                (r = n)),
              e)
            ) {
              for (i in ((n = {}), r)) n[i] = e(r[i]);
              r = n;
            }
            !(function (t, e) {
              var r,
                n,
                i,
                s = t._targets;
              for (r in e)
                for (n = s.length; n--; )
                  (i = t._ptLookup[n][r]) &&
                    (i = i.d) &&
                    (i._pt && (i = mr(i, r)),
                    i && i.modifier && i.modifier(e[r], t, s[n], r));
            })(t, r);
          };
        },
      };
    },
    _r =
      gr.registerPlugin(
        {
          name: "attr",
          init: function (t, e, r, n, i) {
            var s, o, a;
            for (s in ((this.tween = r), e))
              (a = t.getAttribute(s) || ""),
                ((o = this.add(
                  t,
                  "setAttribute",
                  (a || 0) + "",
                  e[s],
                  n,
                  i,
                  0,
                  0,
                  s
                )).op = s),
                (o.b = a),
                this._props.push(s);
          },
          render: function (t, e) {
            for (var r = e._pt; r; )
              i ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var r = e.length; r--; )
              this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
          },
        },
        vr("roundProps", te),
        vr("modifiers"),
        vr("snap", ee)
      ) || gr;
  (Ue.version = Le.version = _r.version = "3.11.5"), (c = 1), C() && be();
  xe.Power0,
    xe.Power1,
    xe.Power2,
    xe.Power3,
    xe.Power4,
    xe.Linear,
    xe.Quad,
    xe.Cubic,
    xe.Quart,
    xe.Quint,
    xe.Strong,
    xe.Elastic,
    xe.Back,
    xe.SteppedEase,
    xe.Bounce,
    xe.Sine,
    xe.Expo,
    xe.Circ;
  var yr,
    wr,
    br,
    xr,
    Tr,
    Mr,
    Sr,
    kr,
    Or = {},
    Er = 180 / Math.PI,
    Ar = Math.PI / 180,
    Cr = Math.atan2,
    Pr = /([A-Z])/g,
    Dr = /(left|right|width|margin|padding|x)/i,
    Rr = /[\s,\(]\S/,
    zr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Lr = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    Fr = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    },
    Ir = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    },
    Br = function (t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    Yr = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    Xr = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    Wr = function (t, e, r) {
      return (t.style[e] = r);
    },
    Nr = function (t, e, r) {
      return t.style.setProperty(e, r);
    },
    qr = function (t, e, r) {
      return (t._gsap[e] = r);
    },
    Hr = function (t, e, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    Vr = function (t, e, r, n, i) {
      var s = t._gsap;
      (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
    },
    Ur = function (t, e, r, n, i) {
      var s = t._gsap;
      (s[e] = r), s.renderTransform(i, s);
    },
    jr = "transform",
    Gr = jr + "Origin",
    $r = function t(e, r) {
      var n = this,
        i = this.target,
        s = i.style;
      if (e in Or) {
        if (((this.tfm = this.tfm || {}), "transform" === e))
          return zr.transform.split(",").forEach(function (e) {
            return t.call(n, e, r);
          });
        if (
          (~(e = zr[e] || e).indexOf(",")
            ? e.split(",").forEach(function (t) {
                return (n.tfm[t] = dn(i, t));
              })
            : (this.tfm[e] = i._gsap.x ? i._gsap[e] : dn(i, e)),
          this.props.indexOf(jr) >= 0)
        )
          return;
        i._gsap.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(Gr, r, "")),
          (e = jr);
      }
      (s || r) && this.props.push(e, r, s[e]);
    },
    Qr = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    Zr = function () {
      var t,
        e,
        r = this.props,
        n = this.target,
        i = n.style,
        s = n._gsap;
      for (t = 0; t < r.length; t += 3)
        r[t + 1]
          ? (n[r[t]] = r[t + 2])
          : r[t + 2]
          ? (i[r[t]] = r[t + 2])
          : i.removeProperty(
              "--" === r[t].substr(0, 2)
                ? r[t]
                : r[t].replace(Pr, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (e in this.tfm) s[e] = this.tfm[e];
        s.svg &&
          (s.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
          ((t = Sr()) && t.isStart) || i[jr] || (Qr(i), (s.uncache = 1));
      }
    },
    Kr = function (t, e) {
      var r = { target: t, props: [], revert: Zr, save: $r };
      return (
        t._gsap || _r.core.getCache(t),
        e &&
          e.split(",").forEach(function (t) {
            return r.save(t);
          }),
        r
      );
    },
    Jr = function (t, e) {
      var r = wr.createElementNS
        ? wr.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : wr.createElement(t);
      return r.style ? r : wr.createElement(t);
    },
    tn = function t(e, r, n) {
      var i = getComputedStyle(e);
      return (
        i[r] ||
        i.getPropertyValue(r.replace(Pr, "-$1").toLowerCase()) ||
        i.getPropertyValue(r) ||
        (!n && t(e, rn(r) || r, 1)) ||
        ""
      );
    },
    en = "O,Moz,ms,Ms,Webkit".split(","),
    rn = function (t, e, r) {
      var n = (e || Tr).style,
        i = 5;
      if (t in n && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        i-- && !(en[i] + t in n);

      );
      return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? en[i] : "") + t;
    },
    nn = function () {
      "undefined" != typeof window &&
        window.document &&
        ((yr = window),
        (wr = yr.document),
        (br = wr.documentElement),
        (Tr = Jr("div") || { style: {} }),
        Jr("div"),
        (jr = rn(jr)),
        (Gr = jr + "Origin"),
        (Tr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (kr = !!rn("perspective")),
        (Sr = _r.core.reverting),
        (xr = 1));
    },
    sn = function t(e) {
      var r,
        n = Jr(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        i = this.parentNode,
        s = this.nextSibling,
        o = this.style.cssText;
      if (
        (br.appendChild(n),
        n.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (r = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = t);
        } catch (t) {}
      else this._gsapBBox && (r = this._gsapBBox());
      return (
        i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
        br.removeChild(n),
        (this.style.cssText = o),
        r
      );
    },
    on = function (t, e) {
      for (var r = e.length; r--; )
        if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    },
    an = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (r) {
        e = sn.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === sn ||
          (e = sn.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +on(t, ["x", "cx", "x1"]) || 0,
              y: +on(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    un = function (t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !an(t));
    },
    ln = function (t, e) {
      if (e) {
        var r = t.style;
        e in Or && e !== Gr && (e = jr),
          r.removeProperty
            ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              r.removeProperty(e.replace(Pr, "-$1").toLowerCase()))
            : r.removeAttribute(e);
      }
    },
    cn = function (t, e, r, n, i, s) {
      var o = new or(t._pt, e, r, 0, 1, s ? Xr : Yr);
      return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
    },
    hn = { deg: 1, rad: 1, turn: 1 },
    fn = { grid: 1, flex: 1 },
    pn = function t(e, r, n, i) {
      var s,
        o,
        a,
        u,
        l = parseFloat(n) || 0,
        c = (n + "").trim().substr((l + "").length) || "px",
        h = Tr.style,
        f = Dr.test(r),
        p = "svg" === e.tagName.toLowerCase(),
        d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
        g = 100,
        m = "px" === i,
        v = "%" === i;
      return i === c || !l || hn[i] || hn[c]
        ? l
        : ("px" !== c && !m && (l = t(e, r, n, "px")),
          (u = e.getCTM && un(e)),
          (!v && "%" !== c) || (!Or[r] && !~r.indexOf("adius"))
            ? ((h[f ? "width" : "height"] = g + (m ? c : i)),
              (o =
                ~r.indexOf("adius") || ("em" === i && e.appendChild && !p)
                  ? e
                  : e.parentNode),
              u && (o = (e.ownerSVGElement || {}).parentNode),
              (o && o !== wr && o.appendChild) || (o = wr.body),
              (a = o._gsap) &&
              v &&
              a.width &&
              f &&
              a.time === we.time &&
              !a.uncache
                ? lt((l / a.width) * g)
                : ((v || "%" === c) &&
                    !fn[tn(o, "display")] &&
                    (h.position = tn(e, "position")),
                  o === e && (h.position = "static"),
                  o.appendChild(Tr),
                  (s = Tr[d]),
                  o.removeChild(Tr),
                  (h.position = "absolute"),
                  f && v && (((a = ot(o)).time = we.time), (a.width = o[d])),
                  lt(m ? (s * l) / g : s && l ? (g / s) * l : 0)))
            : ((s = u ? e.getBBox()[f ? "width" : "height"] : e[d]),
              lt(v ? (l / s) * g : (l / 100) * s)));
    },
    dn = function (t, e, r, n) {
      var i;
      return (
        xr || nn(),
        e in zr &&
          "transform" !== e &&
          ~(e = zr[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        Or[e] && "transform" !== e
          ? ((i = Sn(t, n)),
            (i =
              "transformOrigin" !== e
                ? i[e]
                : i.svg
                ? i.origin
                : kn(tn(t, Gr)) + " " + i.zOrigin + "px"))
          : (!(i = t.style[e]) ||
              "auto" === i ||
              n ||
              ~(i + "").indexOf("calc(")) &&
            (i =
              (_n[e] && _n[e](t, e, r)) ||
              tn(t, e) ||
              at(t, e) ||
              ("opacity" === e ? 1 : 0)),
        r && !~(i + "").trim().indexOf(" ") ? pn(t, e, i, r) + r : i
      );
    },
    gn = function (t, e, r, n) {
      if (!r || "none" === r) {
        var i = rn(e, t, 1),
          s = i && tn(t, i, 1);
        s && s !== r
          ? ((e = i), (r = s))
          : "borderColor" === e && (r = tn(t, "borderTopColor"));
      }
      var o,
        a,
        u,
        l,
        c,
        h,
        f,
        p,
        g,
        m,
        v,
        _ = new or(this._pt, t.style, e, 0, 1, tr),
        y = 0,
        w = 0;
      if (
        ((_.b = r),
        (_.e = n),
        (r += ""),
        "auto" === (n += "") &&
          ((t.style[e] = n), (n = tn(t, e) || n), (t.style[e] = r)),
        ye((o = [r, n])),
        (n = o[1]),
        (u = (r = o[0]).match(F) || []),
        (n.match(F) || []).length)
      ) {
        for (; (a = F.exec(n)); )
          (f = a[0]),
            (g = n.substring(y, a.index)),
            c
              ? (c = (c + 1) % 5)
              : ("rgba(" !== g.substr(-5) && "hsla(" !== g.substr(-5)) ||
                (c = 1),
            f !== (h = u[w++] || "") &&
              ((l = parseFloat(h) || 0),
              (v = h.substr((l + "").length)),
              "=" === f.charAt(1) && (f = ht(l, f) + v),
              (p = parseFloat(f)),
              (m = f.substr((p + "").length)),
              (y = F.lastIndex - m.length),
              m ||
                ((m = m || d.units[e] || v),
                y === n.length && ((n += m), (_.e += m))),
              v !== m && (l = pn(t, e, h, m) || 0),
              (_._pt = {
                _next: _._pt,
                p: g || 1 === w ? g : ",",
                s: l,
                c: p - l,
                m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
              }));
        _.c = y < n.length ? n.substring(y, n.length) : "";
      } else _.r = "display" === e && "none" === n ? Xr : Yr;
      return B.test(n) && (_.e = 0), (this._pt = _), _;
    },
    mn = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    vn = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r,
          n,
          i,
          s = e.t,
          o = s.style,
          a = e.u,
          u = s._gsap;
        if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
        else
          for (i = (a = a.split(",")).length; --i > -1; )
            (r = a[i]),
              Or[r] && ((n = 1), (r = "transformOrigin" === r ? Gr : jr)),
              ln(s, r);
        n &&
          (ln(s, jr),
          u &&
            (u.svg && s.removeAttribute("transform"),
            Sn(s, 1),
            (u.uncache = 1),
            Qr(o)));
      }
    },
    _n = {
      clearProps: function (t, e, r, n, i) {
        if ("isFromStart" !== i.data) {
          var s = (t._pt = new or(t._pt, e, r, 0, 0, vn));
          return (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1;
        }
      },
    },
    yn = [1, 0, 0, 1, 0, 0],
    wn = {},
    bn = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    xn = function (t) {
      var e = tn(t, jr);
      return bn(e) ? yn : e.substr(7).match(L).map(lt);
    },
    Tn = function (t, e) {
      var r,
        n,
        i,
        s,
        o = t._gsap || ot(t),
        a = t.style,
        u = xn(t);
      return o.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (u = [
            (i = t.transform.baseVal.consolidate().matrix).a,
            i.b,
            i.c,
            i.d,
            i.e,
            i.f,
          ]).join(",")
          ? yn
          : u
        : (u !== yn ||
            t.offsetParent ||
            t === br ||
            o.svg ||
            ((i = a.display),
            (a.display = "block"),
            ((r = t.parentNode) && t.offsetParent) ||
              ((s = 1), (n = t.nextElementSibling), br.appendChild(t)),
            (u = xn(t)),
            i ? (a.display = i) : ln(t, "display"),
            s &&
              (n
                ? r.insertBefore(t, n)
                : r
                ? r.appendChild(t)
                : br.removeChild(t))),
          e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    Mn = function (t, e, r, n, i, s) {
      var o,
        a,
        u,
        l = t._gsap,
        c = i || Tn(t, !0),
        h = l.xOrigin || 0,
        f = l.yOrigin || 0,
        p = l.xOffset || 0,
        d = l.yOffset || 0,
        g = c[0],
        m = c[1],
        v = c[2],
        _ = c[3],
        y = c[4],
        w = c[5],
        b = e.split(" "),
        x = parseFloat(b[0]) || 0,
        T = parseFloat(b[1]) || 0;
      r
        ? c !== yn &&
          (a = g * _ - m * v) &&
          ((u = x * (-m / a) + T * (g / a) - (g * w - m * y) / a),
          (x = x * (_ / a) + T * (-v / a) + (v * w - _ * y) / a),
          (T = u))
        : ((x = (o = an(t)).x + (~b[0].indexOf("%") ? (x / 100) * o.width : x)),
          (T =
            o.y + (~(b[1] || b[0]).indexOf("%") ? (T / 100) * o.height : T))),
        n || (!1 !== n && l.smooth)
          ? ((y = x - h),
            (w = T - f),
            (l.xOffset = p + (y * g + w * v) - y),
            (l.yOffset = d + (y * m + w * _) - w))
          : (l.xOffset = l.yOffset = 0),
        (l.xOrigin = x),
        (l.yOrigin = T),
        (l.smooth = !!n),
        (l.origin = e),
        (l.originIsAbsolute = !!r),
        (t.style[Gr] = "0px 0px"),
        s &&
          (cn(s, l, "xOrigin", h, x),
          cn(s, l, "yOrigin", f, T),
          cn(s, l, "xOffset", p, l.xOffset),
          cn(s, l, "yOffset", d, l.yOffset)),
        t.setAttribute("data-svg-origin", x + " " + T);
    },
    Sn = function (t, e) {
      var r = t._gsap || new Re(t);
      if ("x" in r && !e && !r.uncache) return r;
      var n,
        i,
        s,
        o,
        a,
        u,
        l,
        c,
        h,
        f,
        p,
        g,
        m,
        v,
        _,
        y,
        w,
        b,
        x,
        T,
        M,
        S,
        k,
        O,
        E,
        A,
        C,
        P,
        D,
        R,
        z,
        L,
        F = t.style,
        I = r.scaleX < 0,
        B = "px",
        Y = "deg",
        X = getComputedStyle(t),
        W = tn(t, Gr) || "0";
      return (
        (n = i = s = u = l = c = h = f = p = 0),
        (o = a = 1),
        (r.svg = !(!t.getCTM || !un(t))),
        X.translate &&
          (("none" === X.translate &&
            "none" === X.scale &&
            "none" === X.rotate) ||
            (F[jr] =
              ("none" !== X.translate
                ? "translate3d(" +
                  (X.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== X.rotate ? "rotate(" + X.rotate + ") " : "") +
              ("none" !== X.scale
                ? "scale(" + X.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== X[jr] ? X[jr] : "")),
          (F.scale = F.rotate = F.translate = "none")),
        (v = Tn(t, r.svg)),
        r.svg &&
          (r.uncache
            ? ((E = t.getBBox()),
              (W = r.xOrigin - E.x + "px " + (r.yOrigin - E.y) + "px"),
              (O = ""))
            : (O = !e && t.getAttribute("data-svg-origin")),
          Mn(t, O || W, !!O || r.originIsAbsolute, !1 !== r.smooth, v)),
        (g = r.xOrigin || 0),
        (m = r.yOrigin || 0),
        v !== yn &&
          ((b = v[0]),
          (x = v[1]),
          (T = v[2]),
          (M = v[3]),
          (n = S = v[4]),
          (i = k = v[5]),
          6 === v.length
            ? ((o = Math.sqrt(b * b + x * x)),
              (a = Math.sqrt(M * M + T * T)),
              (u = b || x ? Cr(x, b) * Er : 0),
              (h = T || M ? Cr(T, M) * Er + u : 0) &&
                (a *= Math.abs(Math.cos(h * Ar))),
              r.svg && ((n -= g - (g * b + m * T)), (i -= m - (g * x + m * M))))
            : ((L = v[6]),
              (R = v[7]),
              (C = v[8]),
              (P = v[9]),
              (D = v[10]),
              (z = v[11]),
              (n = v[12]),
              (i = v[13]),
              (s = v[14]),
              (l = (_ = Cr(L, D)) * Er),
              _ &&
                ((O = S * (y = Math.cos(-_)) + C * (w = Math.sin(-_))),
                (E = k * y + P * w),
                (A = L * y + D * w),
                (C = S * -w + C * y),
                (P = k * -w + P * y),
                (D = L * -w + D * y),
                (z = R * -w + z * y),
                (S = O),
                (k = E),
                (L = A)),
              (c = (_ = Cr(-T, D)) * Er),
              _ &&
                ((y = Math.cos(-_)),
                (z = M * (w = Math.sin(-_)) + z * y),
                (b = O = b * y - C * w),
                (x = E = x * y - P * w),
                (T = A = T * y - D * w)),
              (u = (_ = Cr(x, b)) * Er),
              _ &&
                ((O = b * (y = Math.cos(_)) + x * (w = Math.sin(_))),
                (E = S * y + k * w),
                (x = x * y - b * w),
                (k = k * y - S * w),
                (b = O),
                (S = E)),
              l &&
                Math.abs(l) + Math.abs(u) > 359.9 &&
                ((l = u = 0), (c = 180 - c)),
              (o = lt(Math.sqrt(b * b + x * x + T * T))),
              (a = lt(Math.sqrt(k * k + L * L))),
              (_ = Cr(S, k)),
              (h = Math.abs(_) > 2e-4 ? _ * Er : 0),
              (p = z ? 1 / (z < 0 ? -z : z) : 0)),
          r.svg &&
            ((O = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !bn(tn(t, jr))),
            O && t.setAttribute("transform", O))),
        Math.abs(h) > 90 &&
          Math.abs(h) < 270 &&
          (I
            ? ((o *= -1),
              (h += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((a *= -1), (h += h <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          n -
          ((r.xPercent =
            n &&
            ((!e && r.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          B),
        (r.y =
          i -
          ((r.yPercent =
            i &&
            ((!e && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          B),
        (r.z = s + B),
        (r.scaleX = lt(o)),
        (r.scaleY = lt(a)),
        (r.rotation = lt(u) + Y),
        (r.rotationX = lt(l) + Y),
        (r.rotationY = lt(c) + Y),
        (r.skewX = h + Y),
        (r.skewY = f + Y),
        (r.transformPerspective = p + B),
        (r.zOrigin = parseFloat(W.split(" ")[2]) || 0) && (F[Gr] = kn(W)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = d.force3D),
        (r.renderTransform = r.svg ? Rn : kr ? Dn : En),
        (r.uncache = 0),
        r
      );
    },
    kn = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    On = function (t, e, r) {
      var n = Ut(e);
      return lt(parseFloat(e) + parseFloat(pn(t, "x", r + "px", n))) + n;
    },
    En = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        Dn(t, e);
    },
    An = "0deg",
    Cn = "0px",
    Pn = ") ",
    Dn = function (t, e) {
      var r = e || this,
        n = r.xPercent,
        i = r.yPercent,
        s = r.x,
        o = r.y,
        a = r.z,
        u = r.rotation,
        l = r.rotationY,
        c = r.rotationX,
        h = r.skewX,
        f = r.skewY,
        p = r.scaleX,
        d = r.scaleY,
        g = r.transformPerspective,
        m = r.force3D,
        v = r.target,
        _ = r.zOrigin,
        y = "",
        w = ("auto" === m && t && 1 !== t) || !0 === m;
      if (_ && (c !== An || l !== An)) {
        var b,
          x = parseFloat(l) * Ar,
          T = Math.sin(x),
          M = Math.cos(x);
        (x = parseFloat(c) * Ar),
          (b = Math.cos(x)),
          (s = On(v, s, T * b * -_)),
          (o = On(v, o, -Math.sin(x) * -_)),
          (a = On(v, a, M * b * -_ + _));
      }
      g !== Cn && (y += "perspective(" + g + Pn),
        (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
        (w || s !== Cn || o !== Cn || a !== Cn) &&
          (y +=
            a !== Cn || w
              ? "translate3d(" + s + ", " + o + ", " + a + ") "
              : "translate(" + s + ", " + o + Pn),
        u !== An && (y += "rotate(" + u + Pn),
        l !== An && (y += "rotateY(" + l + Pn),
        c !== An && (y += "rotateX(" + c + Pn),
        (h === An && f === An) || (y += "skew(" + h + ", " + f + Pn),
        (1 === p && 1 === d) || (y += "scale(" + p + ", " + d + Pn),
        (v.style[jr] = y || "translate(0, 0)");
    },
    Rn = function (t, e) {
      var r,
        n,
        i,
        s,
        o,
        a = e || this,
        u = a.xPercent,
        l = a.yPercent,
        c = a.x,
        h = a.y,
        f = a.rotation,
        p = a.skewX,
        d = a.skewY,
        g = a.scaleX,
        m = a.scaleY,
        v = a.target,
        _ = a.xOrigin,
        y = a.yOrigin,
        w = a.xOffset,
        b = a.yOffset,
        x = a.forceCSS,
        T = parseFloat(c),
        M = parseFloat(h);
      (f = parseFloat(f)),
        (p = parseFloat(p)),
        (d = parseFloat(d)) && ((p += d = parseFloat(d)), (f += d)),
        f || p
          ? ((f *= Ar),
            (p *= Ar),
            (r = Math.cos(f) * g),
            (n = Math.sin(f) * g),
            (i = Math.sin(f - p) * -m),
            (s = Math.cos(f - p) * m),
            p &&
              ((d *= Ar),
              (o = Math.tan(p - d)),
              (i *= o = Math.sqrt(1 + o * o)),
              (s *= o),
              d &&
                ((o = Math.tan(d)), (r *= o = Math.sqrt(1 + o * o)), (n *= o))),
            (r = lt(r)),
            (n = lt(n)),
            (i = lt(i)),
            (s = lt(s)))
          : ((r = g), (s = m), (n = i = 0)),
        ((T && !~(c + "").indexOf("px")) || (M && !~(h + "").indexOf("px"))) &&
          ((T = pn(v, "x", c, "px")), (M = pn(v, "y", h, "px"))),
        (_ || y || w || b) &&
          ((T = lt(T + _ - (_ * r + y * i) + w)),
          (M = lt(M + y - (_ * n + y * s) + b))),
        (u || l) &&
          ((o = v.getBBox()),
          (T = lt(T + (u / 100) * o.width)),
          (M = lt(M + (l / 100) * o.height))),
        (o =
          "matrix(" +
          r +
          "," +
          n +
          "," +
          i +
          "," +
          s +
          "," +
          T +
          "," +
          M +
          ")"),
        v.setAttribute("transform", o),
        x && (v.style[jr] = o);
    },
    zn = function (t, e, r, n, i) {
      var s,
        o,
        a = 360,
        u = M(i),
        l = parseFloat(i) * (u && ~i.indexOf("rad") ? Er : 1) - n,
        c = n + l + "deg";
      return (
        u &&
          ("short" === (s = i.split("_")[1]) &&
            (l %= a) !== l % 180 &&
            (l += l < 0 ? a : -360),
          "cw" === s && l < 0
            ? (l = ((l + 36e9) % a) - ~~(l / a) * a)
            : "ccw" === s && l > 0 && (l = ((l - 36e9) % a) - ~~(l / a) * a)),
        (t._pt = o = new or(t._pt, e, r, n, l, Fr)),
        (o.e = c),
        (o.u = "deg"),
        t._props.push(r),
        o
      );
    },
    Ln = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Fn = function (t, e, r) {
      var n,
        i,
        s,
        o,
        a,
        u,
        l,
        c = Ln({}, r._gsap),
        h = r.style;
      for (i in (c.svg
        ? ((s = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (h[jr] = e),
          (n = Sn(r, 1)),
          ln(r, jr),
          r.setAttribute("transform", s))
        : ((s = getComputedStyle(r)[jr]),
          (h[jr] = e),
          (n = Sn(r, 1)),
          (h[jr] = s)),
      Or))
        (s = c[i]) !== (o = n[i]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
          ((a = Ut(s) !== (l = Ut(o)) ? pn(r, i, s, l) : parseFloat(s)),
          (u = parseFloat(o)),
          (t._pt = new or(t._pt, n, i, a, u - a, Lr)),
          (t._pt.u = l || 0),
          t._props.push(i));
      Ln(n, c);
    };
  ut("padding,margin,Width,Radius", function (t, e) {
    var r = "Top",
      n = "Right",
      i = "Bottom",
      s = "Left",
      o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(function (
        r
      ) {
        return e < 2 ? t + r : "border" + r + t;
      });
    _n[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
      var s, a;
      if (arguments.length < 4)
        return (
          (s = o.map(function (e) {
            return dn(t, e, r);
          })),
          5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
        );
      (s = (n + "").split(" ")),
        (a = {}),
        o.forEach(function (t, e) {
          return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
        }),
        t.init(e, a, i);
    };
  });
  var In,
    Bn,
    Yn,
    Xn = {
      name: "css",
      register: nn,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, r, n, i) {
        var s,
          o,
          a,
          u,
          l,
          c,
          h,
          f,
          p,
          g,
          m,
          v,
          _,
          y,
          w,
          b,
          x,
          T,
          S,
          k,
          O = this._props,
          E = t.style,
          A = r.vars.startAt;
        for (h in (xr || nn(),
        (this.styles = this.styles || Kr(t)),
        (b = this.styles.props),
        (this.tween = r),
        e))
          if (
            "autoRound" !== h &&
            ((o = e[h]), !tt[h] || !Xe(h, e, r, n, t, i))
          )
            if (
              ((l = typeof o),
              (c = _n[h]),
              "function" === l && (l = typeof (o = o.call(r, n, t, i))),
              "string" === l && ~o.indexOf("random(") && (o = ie(o)),
              c)
            )
              c(this, t, h, o, r) && (w = 1);
            else if ("--" === h.substr(0, 2))
              (s = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                (o += ""),
                (ve.lastIndex = 0),
                ve.test(s) || ((f = Ut(s)), (p = Ut(o))),
                p ? f !== p && (s = pn(t, h, s, p) + p) : f && (o += f),
                this.add(E, "setProperty", s, o, n, i, 0, 0, h),
                O.push(h),
                b.push(h, 0, E[h]);
            else if ("undefined" !== l) {
              if (
                (A && h in A
                  ? ((s =
                      "function" == typeof A[h] ? A[h].call(r, n, t, i) : A[h]),
                    M(s) && ~s.indexOf("random(") && (s = ie(s)),
                    Ut(s + "") || (s += d.units[h] || Ut(dn(t, h)) || ""),
                    "=" === (s + "").charAt(1) && (s = dn(t, h)))
                  : (s = dn(t, h)),
                (u = parseFloat(s)),
                (g = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) &&
                  (o = o.substr(2)),
                (a = parseFloat(o)),
                h in zr &&
                  ("autoAlpha" === h &&
                    (1 === u &&
                      "hidden" === dn(t, "visibility") &&
                      a &&
                      (u = 0),
                    b.push("visibility", 0, E.visibility),
                    cn(
                      this,
                      E,
                      "visibility",
                      u ? "inherit" : "hidden",
                      a ? "inherit" : "hidden",
                      !a
                    )),
                  "scale" !== h &&
                    "transform" !== h &&
                    ~(h = zr[h]).indexOf(",") &&
                    (h = h.split(",")[0])),
                (m = h in Or))
              )
                if (
                  (this.styles.save(h),
                  v ||
                    (((_ = t._gsap).renderTransform && !e.parseTransform) ||
                      Sn(t, e.parseTransform),
                    (y = !1 !== e.smoothOrigin && _.smooth),
                    ((v = this._pt =
                      new or(
                        this._pt,
                        E,
                        jr,
                        0,
                        1,
                        _.renderTransform,
                        _,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === h)
                )
                  (this._pt = new or(
                    this._pt,
                    _,
                    "scaleY",
                    _.scaleY,
                    (g ? ht(_.scaleY, g + a) : a) - _.scaleY || 0,
                    Lr
                  )),
                    (this._pt.u = 0),
                    O.push("scaleY", h),
                    (h += "X");
                else {
                  if ("transformOrigin" === h) {
                    b.push(Gr, 0, E[Gr]),
                      (T = void 0),
                      (S = void 0),
                      (k = void 0),
                      (T = (x = o).split(" ")),
                      (S = T[0]),
                      (k = T[1] || "50%"),
                      ("top" !== S &&
                        "bottom" !== S &&
                        "left" !== k &&
                        "right" !== k) ||
                        ((x = S), (S = k), (k = x)),
                      (T[0] = mn[S] || S),
                      (T[1] = mn[k] || k),
                      (o = T.join(" ")),
                      _.svg
                        ? Mn(t, o, 0, y, 0, this)
                        : ((p = parseFloat(o.split(" ")[2]) || 0) !==
                            _.zOrigin && cn(this, _, "zOrigin", _.zOrigin, p),
                          cn(this, E, h, kn(s), kn(o)));
                    continue;
                  }
                  if ("svgOrigin" === h) {
                    Mn(t, o, 1, y, 0, this);
                    continue;
                  }
                  if (h in wn) {
                    zn(this, _, h, u, g ? ht(u, g + o) : o);
                    continue;
                  }
                  if ("smoothOrigin" === h) {
                    cn(this, _, "smooth", _.smooth, o);
                    continue;
                  }
                  if ("force3D" === h) {
                    _[h] = o;
                    continue;
                  }
                  if ("transform" === h) {
                    Fn(this, o, t);
                    continue;
                  }
                }
              else h in E || (h = rn(h) || h);
              if (
                m ||
                ((a || 0 === a) && (u || 0 === u) && !Rr.test(o) && h in E)
              )
                a || (a = 0),
                  (f = (s + "").substr((u + "").length)) !==
                    (p = Ut(o) || (h in d.units ? d.units[h] : f)) &&
                    (u = pn(t, h, s, p)),
                  (this._pt = new or(
                    this._pt,
                    m ? _ : E,
                    h,
                    u,
                    (g ? ht(u, g + a) : a) - u,
                    m || ("px" !== p && "zIndex" !== h) || !1 === e.autoRound
                      ? Lr
                      : Br
                  )),
                  (this._pt.u = p || 0),
                  f !== p && "%" !== p && ((this._pt.b = s), (this._pt.r = Ir));
              else if (h in E) gn.call(this, t, h, s, g ? g + o : o);
              else if (h in t) this.add(t, h, s || t[h], g ? g + o : o, n, i);
              else if ("parseTransform" !== h) {
                H(h, o);
                continue;
              }
              m || (h in E ? b.push(h, 0, E[h]) : b.push(h, 1, s || t[h])),
                O.push(h);
            }
        w && sr(this);
      },
      render: function (t, e) {
        if (e.tween._time || !Sr())
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        else e.styles.revert();
      },
      get: dn,
      aliases: zr,
      getSetter: function (t, e, r) {
        var n = zr[e];
        return (
          n && n.indexOf(",") < 0 && (e = n),
          e in Or && e !== Gr && (t._gsap.x || dn(t, "x"))
            ? r && Mr === r
              ? "scale" === e
                ? Hr
                : qr
              : (Mr = r || {}) && ("scale" === e ? Vr : Ur)
            : t.style && !O(t.style[e])
            ? Wr
            : ~e.indexOf("-")
            ? Nr
            : Ze(t, e)
        );
      },
      core: { _removeProperty: ln, _getMatrix: Tn },
    };
  (_r.utils.checkPrefix = rn),
    (_r.core.getStyleSaver = Kr),
    (Yn = ut(
      (In = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (Bn = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        Or[t] = 1;
      }
    )),
    ut(Bn, function (t) {
      (d.units[t] = "deg"), (wn[t] = 1);
    }),
    (zr[Yn[13]] = In + "," + Bn),
    ut(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        zr[e[1]] = Yn[e[0]];
      }
    ),
    ut(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        d.units[t] = "px";
      }
    ),
    _r.registerPlugin(Xn);
  var Wn = _r.registerPlugin(Xn) || _r;
  Wn.core.Tween;
  function Nn(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  var qn,
    Hn,
    Vn,
    Un,
    jn,
    Gn,
    $n,
    Qn,
    Zn,
    Kn,
    Jn,
    ti,
    ei,
    ri = function () {
      return (
        qn ||
        ("undefined" != typeof window &&
          (qn = window.gsap) &&
          qn.registerPlugin &&
          qn)
      );
    },
    ni = 1,
    ii = [],
    si = [],
    oi = [],
    ai = Date.now,
    ui = function (t, e) {
      return e;
    },
    li = function (t, e) {
      return ~oi.indexOf(t) && oi[oi.indexOf(t) + 1][e];
    },
    ci = function (t) {
      return !!~Kn.indexOf(t);
    },
    hi = function (t, e, r, n, i) {
      return t.addEventListener(e, r, { passive: !n, capture: !!i });
    },
    fi = function (t, e, r, n) {
      return t.removeEventListener(e, r, !!n);
    },
    pi = "scrollLeft",
    di = "scrollTop",
    gi = function () {
      return (Jn && Jn.isPressed) || si.cache++;
    },
    mi = function (t, e) {
      var r = function r(n) {
        if (n || 0 === n) {
          ni && (Vn.history.scrollRestoration = "manual");
          var i = Jn && Jn.isPressed;
          (n = r.v = Math.round(n) || (Jn && Jn.iOS ? 1 : 0)),
            t(n),
            (r.cacheID = si.cache),
            i && ui("ss", n);
        } else
          (e || si.cache !== r.cacheID || ui("ref")) &&
            ((r.cacheID = si.cache), (r.v = t()));
        return r.v + r.offset;
      };
      return (r.offset = 0), t && r;
    },
    vi = {
      s: pi,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: mi(function (t) {
        return arguments.length
          ? Vn.scrollTo(t, _i.sc())
          : Vn.pageXOffset || Un[pi] || jn[pi] || Gn[pi] || 0;
      }),
    },
    _i = {
      s: di,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: vi,
      sc: mi(function (t) {
        return arguments.length
          ? Vn.scrollTo(vi.sc(), t)
          : Vn.pageYOffset || Un[di] || jn[di] || Gn[di] || 0;
      }),
    },
    yi = function (t) {
      return (
        qn.utils.toArray(t)[0] ||
        ("string" == typeof t && !1 !== qn.config().nullTargetWarn
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    wi = function (t, e) {
      var r = e.s,
        n = e.sc;
      ci(t) && (t = Un.scrollingElement || jn);
      var i = si.indexOf(t),
        s = n === _i.sc ? 1 : 2;
      !~i && (i = si.push(t) - 1),
        si[i + s] || t.addEventListener("scroll", gi);
      var o = si[i + s],
        a =
          o ||
          (si[i + s] =
            mi(li(t, r), !0) ||
            (ci(t)
              ? n
              : mi(function (e) {
                  return arguments.length ? (t[r] = e) : t[r];
                })));
      return (
        (a.target = t),
        o || (a.smooth = "smooth" === qn.getProperty(t, "scrollBehavior")),
        a
      );
    },
    bi = function (t, e, r) {
      var n = t,
        i = t,
        s = ai(),
        o = s,
        a = e || 50,
        u = Math.max(500, 3 * a),
        l = function (t, e) {
          var u = ai();
          e || u - s > a
            ? ((i = n), (n = t), (o = s), (s = u))
            : r
            ? (n += t)
            : (n = i + ((t - i) / (u - o)) * (s - o));
        };
      return {
        update: l,
        reset: function () {
          (i = n = r ? 0 : n), (o = s = 0);
        },
        getVelocity: function (t) {
          var e = o,
            a = i,
            c = ai();
          return (
            (t || 0 === t) && t !== n && l(t),
            s === o || c - o > u
              ? 0
              : ((n + (r ? a : -a)) / ((r ? c : s) - e)) * 1e3
          );
        },
      };
    },
    xi = function (t, e) {
      return (
        e && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    Ti = function (t) {
      var e = Math.max.apply(Math, t),
        r = Math.min.apply(Math, t);
      return Math.abs(e) >= Math.abs(r) ? e : r;
    },
    Mi = function () {
      var t, e, r, n;
      (Zn = qn.core.globals().ScrollTrigger) &&
        Zn.core &&
        ((t = Zn.core),
        (e = t.bridge || {}),
        (r = t._scrollers),
        (n = t._proxies),
        r.push.apply(r, si),
        n.push.apply(n, oi),
        (si = r),
        (oi = n),
        (ui = function (t, r) {
          return e[t](r);
        }));
    },
    Si = function (t) {
      return (
        (qn = t || ri()) &&
          "undefined" != typeof document &&
          document.body &&
          ((Vn = window),
          (Un = document),
          (jn = Un.documentElement),
          (Gn = Un.body),
          (Kn = [Vn, Un, jn, Gn]),
          qn.utils.clamp,
          (ei = qn.core.context || function () {}),
          (Qn = "onpointerenter" in Gn ? "pointer" : "mouse"),
          ($n = ki.isTouch =
            Vn.matchMedia &&
            Vn.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Vn ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (ti = ki.eventTypes =
            (
              "ontouchstart" in jn
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in jn
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (ni = 0);
          }, 500),
          Mi(),
          (Hn = 1)),
        Hn
      );
    };
  (vi.op = _i), (si.cache = 0);
  var ki = (function () {
    function t(t) {
      this.init(t);
    }
    var e, r, n;
    return (
      (t.prototype.init = function (t) {
        Hn || Si(qn) || console.warn("Please gsap.registerPlugin(Observer)"),
          Zn || Mi();
        var e = t.tolerance,
          r = t.dragMinimum,
          n = t.type,
          i = t.target,
          s = t.lineHeight,
          o = t.debounce,
          a = t.preventDefault,
          u = t.onStop,
          l = t.onStopDelay,
          c = t.ignore,
          h = t.wheelSpeed,
          f = t.event,
          p = t.onDragStart,
          d = t.onDragEnd,
          g = t.onDrag,
          m = t.onPress,
          v = t.onRelease,
          _ = t.onRight,
          y = t.onLeft,
          w = t.onUp,
          b = t.onDown,
          x = t.onChangeX,
          T = t.onChangeY,
          M = t.onChange,
          S = t.onToggleX,
          k = t.onToggleY,
          O = t.onHover,
          E = t.onHoverEnd,
          A = t.onMove,
          C = t.ignoreCheck,
          P = t.isNormalizer,
          D = t.onGestureStart,
          R = t.onGestureEnd,
          z = t.onWheel,
          L = t.onEnable,
          F = t.onDisable,
          I = t.onClick,
          B = t.scrollSpeed,
          Y = t.capture,
          X = t.allowClicks,
          W = t.lockAxis,
          N = t.onLockAxis;
        (this.target = i = yi(i) || jn),
          (this.vars = t),
          c && (c = qn.utils.toArray(c)),
          (e = e || 1e-9),
          (r = r || 0),
          (h = h || 1),
          (B = B || 1),
          (n = n || "wheel,touch,pointer"),
          (o = !1 !== o),
          s || (s = parseFloat(Vn.getComputedStyle(Gn).lineHeight) || 22);
        var q,
          H,
          V,
          U,
          j,
          G,
          $,
          Q = this,
          Z = 0,
          K = 0,
          J = wi(i, vi),
          tt = wi(i, _i),
          et = J(),
          rt = tt(),
          nt =
            ~n.indexOf("touch") &&
            !~n.indexOf("pointer") &&
            "pointerdown" === ti[0],
          it = ci(i),
          st = i.ownerDocument || Un,
          ot = [0, 0, 0],
          at = [0, 0, 0],
          ut = 0,
          lt = function () {
            return (ut = ai());
          },
          ct = function (t, e) {
            return (
              ((Q.event = t) && c && ~c.indexOf(t.target)) ||
              (e && nt && "touch" !== t.pointerType) ||
              (C && C(t, e))
            );
          },
          ht = function () {
            var t = (Q.deltaX = Ti(ot)),
              r = (Q.deltaY = Ti(at)),
              n = Math.abs(t) >= e,
              i = Math.abs(r) >= e;
            M && (n || i) && M(Q, t, r, ot, at),
              n &&
                (_ && Q.deltaX > 0 && _(Q),
                y && Q.deltaX < 0 && y(Q),
                x && x(Q),
                S && Q.deltaX < 0 != Z < 0 && S(Q),
                (Z = Q.deltaX),
                (ot[0] = ot[1] = ot[2] = 0)),
              i &&
                (b && Q.deltaY > 0 && b(Q),
                w && Q.deltaY < 0 && w(Q),
                T && T(Q),
                k && Q.deltaY < 0 != K < 0 && k(Q),
                (K = Q.deltaY),
                (at[0] = at[1] = at[2] = 0)),
              (U || V) && (A && A(Q), V && (g(Q), (V = !1)), (U = !1)),
              G && !(G = !1) && N && N(Q),
              j && (z(Q), (j = !1)),
              (q = 0);
          },
          ft = function (t, e, r) {
            (ot[r] += t),
              (at[r] += e),
              Q._vx.update(t),
              Q._vy.update(e),
              o ? q || (q = requestAnimationFrame(ht)) : ht();
          },
          pt = function (t, e) {
            W &&
              !$ &&
              ((Q.axis = $ = Math.abs(t) > Math.abs(e) ? "x" : "y"), (G = !0)),
              "y" !== $ && ((ot[2] += t), Q._vx.update(t, !0)),
              "x" !== $ && ((at[2] += e), Q._vy.update(e, !0)),
              o ? q || (q = requestAnimationFrame(ht)) : ht();
          },
          dt = function (t) {
            if (!ct(t, 1)) {
              var e = (t = xi(t, a)).clientX,
                n = t.clientY,
                i = e - Q.x,
                s = n - Q.y,
                o = Q.isDragging;
              (Q.x = e),
                (Q.y = n),
                (o ||
                  Math.abs(Q.startX - e) >= r ||
                  Math.abs(Q.startY - n) >= r) &&
                  (g && (V = !0),
                  o || (Q.isDragging = !0),
                  pt(i, s),
                  o || (p && p(Q)));
            }
          },
          gt = (Q.onPress = function (t) {
            ct(t, 1) ||
              (t && t.button) ||
              ((Q.axis = $ = null),
              H.pause(),
              (Q.isPressed = !0),
              (t = xi(t)),
              (Z = K = 0),
              (Q.startX = Q.x = t.clientX),
              (Q.startY = Q.y = t.clientY),
              Q._vx.reset(),
              Q._vy.reset(),
              hi(P ? i : st, ti[1], dt, a, !0),
              (Q.deltaX = Q.deltaY = 0),
              m && m(Q));
          }),
          mt = (Q.onRelease = function (t) {
            if (!ct(t, 1)) {
              fi(P ? i : st, ti[1], dt, !0);
              var e = !isNaN(Q.y - Q.startY),
                r =
                  Q.isDragging &&
                  (Math.abs(Q.x - Q.startX) > 3 ||
                    Math.abs(Q.y - Q.startY) > 3),
                n = xi(t);
              !r &&
                e &&
                (Q._vx.reset(),
                Q._vy.reset(),
                a &&
                  X &&
                  qn.delayedCall(0.08, function () {
                    if (ai() - ut > 300 && !t.defaultPrevented)
                      if (t.target.click) t.target.click();
                      else if (st.createEvent) {
                        var e = st.createEvent("MouseEvents");
                        e.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Vn,
                          1,
                          n.screenX,
                          n.screenY,
                          n.clientX,
                          n.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          t.target.dispatchEvent(e);
                      }
                  })),
                (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
                u && !P && H.restart(!0),
                d && r && d(Q),
                v && v(Q, r);
            }
          }),
          vt = function (t) {
            return (
              t.touches &&
              t.touches.length > 1 &&
              (Q.isGesturing = !0) &&
              D(t, Q.isDragging)
            );
          },
          _t = function () {
            return (Q.isGesturing = !1) || R(Q);
          },
          yt = function (t) {
            if (!ct(t)) {
              var e = J(),
                r = tt();
              ft((e - et) * B, (r - rt) * B, 1),
                (et = e),
                (rt = r),
                u && H.restart(!0);
            }
          },
          wt = function (t) {
            if (!ct(t)) {
              (t = xi(t, a)), z && (j = !0);
              var e =
                (1 === t.deltaMode
                  ? s
                  : 2 === t.deltaMode
                  ? Vn.innerHeight
                  : 1) * h;
              ft(t.deltaX * e, t.deltaY * e, 0), u && !P && H.restart(!0);
            }
          },
          bt = function (t) {
            if (!ct(t)) {
              var e = t.clientX,
                r = t.clientY,
                n = e - Q.x,
                i = r - Q.y;
              (Q.x = e), (Q.y = r), (U = !0), (n || i) && pt(n, i);
            }
          },
          xt = function (t) {
            (Q.event = t), O(Q);
          },
          Tt = function (t) {
            (Q.event = t), E(Q);
          },
          Mt = function (t) {
            return ct(t) || (xi(t, a) && I(Q));
          };
        (H = Q._dc =
          qn
            .delayedCall(l || 0.25, function () {
              Q._vx.reset(), Q._vy.reset(), H.pause(), u && u(Q);
            })
            .pause()),
          (Q.deltaX = Q.deltaY = 0),
          (Q._vx = bi(0, 50, !0)),
          (Q._vy = bi(0, 50, !0)),
          (Q.scrollX = J),
          (Q.scrollY = tt),
          (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
          ei(this),
          (Q.enable = function (t) {
            return (
              Q.isEnabled ||
                (hi(it ? st : i, "scroll", gi),
                n.indexOf("scroll") >= 0 && hi(it ? st : i, "scroll", yt, a, Y),
                n.indexOf("wheel") >= 0 && hi(i, "wheel", wt, a, Y),
                ((n.indexOf("touch") >= 0 && $n) ||
                  n.indexOf("pointer") >= 0) &&
                  (hi(i, ti[0], gt, a, Y),
                  hi(st, ti[2], mt),
                  hi(st, ti[3], mt),
                  X && hi(i, "click", lt, !1, !0),
                  I && hi(i, "click", Mt),
                  D && hi(st, "gesturestart", vt),
                  R && hi(st, "gestureend", _t),
                  O && hi(i, Qn + "enter", xt),
                  E && hi(i, Qn + "leave", Tt),
                  A && hi(i, Qn + "move", bt)),
                (Q.isEnabled = !0),
                t && t.type && gt(t),
                L && L(Q)),
              Q
            );
          }),
          (Q.disable = function () {
            Q.isEnabled &&
              (ii.filter(function (t) {
                return t !== Q && ci(t.target);
              }).length || fi(it ? st : i, "scroll", gi),
              Q.isPressed &&
                (Q._vx.reset(), Q._vy.reset(), fi(P ? i : st, ti[1], dt, !0)),
              fi(it ? st : i, "scroll", yt, Y),
              fi(i, "wheel", wt, Y),
              fi(i, ti[0], gt, Y),
              fi(st, ti[2], mt),
              fi(st, ti[3], mt),
              fi(i, "click", lt, !0),
              fi(i, "click", Mt),
              fi(st, "gesturestart", vt),
              fi(st, "gestureend", _t),
              fi(i, Qn + "enter", xt),
              fi(i, Qn + "leave", Tt),
              fi(i, Qn + "move", bt),
              (Q.isEnabled = Q.isPressed = Q.isDragging = !1),
              F && F(Q));
          }),
          (Q.kill = Q.revert =
            function () {
              Q.disable();
              var t = ii.indexOf(Q);
              t >= 0 && ii.splice(t, 1), Jn === Q && (Jn = 0);
            }),
          ii.push(Q),
          P && ci(i) && (Jn = Q),
          Q.enable(f);
      }),
      (e = t),
      (r = [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]) && Nn(e.prototype, r),
      n && Nn(e, n),
      t
    );
  })();
  (ki.version = "3.11.5"),
    (ki.create = function (t) {
      return new ki(t);
    }),
    (ki.register = Si),
    (ki.getAll = function () {
      return ii.slice();
    }),
    (ki.getById = function (t) {
      return ii.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    ri() && qn.registerPlugin(ki);
  var Oi,
    Ei,
    Ai,
    Ci,
    Pi,
    Di,
    Ri,
    zi,
    Li,
    Fi,
    Ii,
    Bi,
    Yi,
    Xi,
    Wi,
    Ni,
    qi,
    Hi,
    Vi,
    Ui,
    ji,
    Gi,
    $i,
    Qi,
    Zi,
    Ki,
    Ji,
    ts,
    es,
    rs,
    ns,
    is,
    ss,
    os,
    as = 1,
    us = Date.now,
    ls = us(),
    cs = 0,
    hs = 0,
    fs = function t() {
      return hs && requestAnimationFrame(t);
    },
    ps = function () {
      return (Xi = 1);
    },
    ds = function () {
      return (Xi = 0);
    },
    gs = function (t) {
      return t;
    },
    ms = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    vs = function () {
      return "undefined" != typeof window;
    },
    _s = function () {
      return Oi || (vs() && (Oi = window.gsap) && Oi.registerPlugin && Oi);
    },
    ys = function (t) {
      return !!~Ri.indexOf(t);
    },
    ws = function (t) {
      return (
        li(t, "getBoundingClientRect") ||
        (ys(t)
          ? function () {
              return (
                (Do.width = Ai.innerWidth), (Do.height = Ai.innerHeight), Do
              );
            }
          : function () {
              return Us(t);
            })
      );
    },
    bs = function (t, e) {
      var r = e.s,
        n = e.d2,
        i = e.d,
        s = e.a;
      return Math.max(
        0,
        (r = "scroll" + n) && (s = li(t, r))
          ? s() - ws(t)()[i]
          : ys(t)
          ? (Pi[r] || Di[r]) -
            (Ai["inner" + n] || Pi["client" + n] || Di["client" + n])
          : t[r] - t["offset" + n]
      );
    },
    xs = function (t, e) {
      for (var r = 0; r < Vi.length; r += 3)
        (!e || ~e.indexOf(Vi[r + 1])) && t(Vi[r], Vi[r + 1], Vi[r + 2]);
    },
    Ts = function (t) {
      return "string" == typeof t;
    },
    Ms = function (t) {
      return "function" == typeof t;
    },
    Ss = function (t) {
      return "number" == typeof t;
    },
    ks = function (t) {
      return "object" == typeof t;
    },
    Os = function (t, e, r) {
      return t && t.progress(e ? 0 : 1) && r && t.pause();
    },
    Es = function (t, e) {
      if (t.enabled) {
        var r = e(t);
        r && r.totalTime && (t.callbackAnimation = r);
      }
    },
    As = Math.abs,
    Cs = "left",
    Ps = "right",
    Ds = "bottom",
    Rs = "width",
    zs = "height",
    Ls = "Right",
    Fs = "Left",
    Is = "Top",
    Bs = "Bottom",
    Ys = "padding",
    Xs = "margin",
    Ws = "Width",
    Ns = "Height",
    qs = "px",
    Hs = function (t) {
      return Ai.getComputedStyle(t);
    },
    Vs = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    },
    Us = function (t, e) {
      var r =
          e &&
          "matrix(1, 0, 0, 1, 0, 0)" !== Hs(t)[Wi] &&
          Oi.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = t.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    js = function (t, e) {
      var r = e.d2;
      return t["offset" + r] || t["client" + r] || 0;
    },
    Gs = function (t) {
      var e,
        r = [],
        n = t.labels,
        i = t.duration();
      for (e in n) r.push(n[e] / i);
      return r;
    },
    $s = function (t) {
      var e = Oi.utils.snap(t),
        r =
          Array.isArray(t) &&
          t.slice(0).sort(function (t, e) {
            return t - e;
          });
      return r
        ? function (t, n, i) {
            var s;
            if ((void 0 === i && (i = 0.001), !n)) return e(t);
            if (n > 0) {
              for (t -= i, s = 0; s < r.length; s++) if (r[s] >= t) return r[s];
              return r[s - 1];
            }
            for (s = r.length, t += i; s--; ) if (r[s] <= t) return r[s];
            return r[0];
          }
        : function (r, n, i) {
            void 0 === i && (i = 0.001);
            var s = e(r);
            return !n || Math.abs(s - r) < i || s - r < 0 == n < 0
              ? s
              : e(n < 0 ? r - t : r + t);
          };
    },
    Qs = function (t, e, r, n) {
      return r.split(",").forEach(function (r) {
        return t(e, r, n);
      });
    },
    Zs = function (t, e, r, n, i) {
      return t.addEventListener(e, r, { passive: !n, capture: !!i });
    },
    Ks = function (t, e, r, n) {
      return t.removeEventListener(e, r, !!n);
    },
    Js = function (t, e, r) {
      (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r));
    },
    to = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    eo = { toggleActions: "play", anticipatePin: 0 },
    ro = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    no = function (t, e) {
      if (Ts(t)) {
        var r = t.indexOf("="),
          n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
        ~r && (t.indexOf("%") > r && (n *= e / 100), (t = t.substr(0, r - 1))),
          (t =
            n +
            (t in ro
              ? ro[t] * e
              : ~t.indexOf("%")
              ? (parseFloat(t) * e) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    io = function (t, e, r, n, i, s, o, a) {
      var u = i.startColor,
        l = i.endColor,
        c = i.fontSize,
        h = i.indent,
        f = i.fontWeight,
        p = Ci.createElement("div"),
        d = ys(r) || "fixed" === li(r, "pinType"),
        g = -1 !== t.indexOf("scroller"),
        m = d ? Di : r,
        v = -1 !== t.indexOf("start"),
        _ = v ? u : l,
        y =
          "border-color:" +
          _ +
          ";font-size:" +
          c +
          ";color:" +
          _ +
          ";font-weight:" +
          f +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (y += "position:" + ((g || a) && d ? "fixed;" : "absolute;")),
        (g || a || !d) &&
          (y += (n === _i ? Ps : Ds) + ":" + (s + parseFloat(h)) + "px;"),
        o &&
          (y +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (p._isStart = v),
        p.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        (p.style.cssText = y),
        (p.innerText = e || 0 === e ? t + "-" + e : t),
        m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p),
        (p._offset = p["offset" + n.op.d2]),
        so(p, 0, n, v),
        p
      );
    },
    so = function (t, e, r, n) {
      var i = { display: "block" },
        s = r[n ? "os2" : "p2"],
        o = r[n ? "p2" : "os2"];
      (t._isFlipped = n),
        (i[r.a + "Percent"] = n ? -100 : 0),
        (i[r.a] = n ? "1px" : 0),
        (i["border" + s + Ws] = 1),
        (i["border" + o + Ws] = 0),
        (i[r.p] = e + "px"),
        Oi.set(t, i);
    },
    oo = [],
    ao = {},
    uo = function () {
      return us() - cs > 34 && (ns || (ns = requestAnimationFrame(So)));
    },
    lo = function () {
      (!$i || !$i.isPressed || $i.startX > Di.clientWidth) &&
        (si.cache++,
        $i ? ns || (ns = requestAnimationFrame(So)) : So(),
        cs || mo("scrollStart"),
        (cs = us()));
    },
    co = function () {
      (Ki = Ai.innerWidth), (Zi = Ai.innerHeight);
    },
    ho = function () {
      si.cache++,
        !Yi &&
          !Gi &&
          !Ci.fullscreenElement &&
          !Ci.webkitFullscreenElement &&
          (!Qi ||
            Ki !== Ai.innerWidth ||
            Math.abs(Ai.innerHeight - Zi) > 0.25 * Ai.innerHeight) &&
          zi.restart(!0);
    },
    fo = {},
    po = [],
    go = function t() {
      return Ks(Bo, "scrollEnd", t) || xo(!0);
    },
    mo = function (t) {
      return (
        (fo[t] &&
          fo[t].map(function (t) {
            return t();
          })) ||
        po
      );
    },
    vo = [],
    _o = function (t) {
      for (var e = 0; e < vo.length; e += 5)
        (!t || (vo[e + 4] && vo[e + 4].query === t)) &&
          ((vo[e].style.cssText = vo[e + 1]),
          vo[e].getBBox && vo[e].setAttribute("transform", vo[e + 2] || ""),
          (vo[e + 3].uncache = 1));
    },
    yo = function (t, e) {
      var r;
      for (Ni = 0; Ni < oo.length; Ni++)
        !(r = oo[Ni]) ||
          (e && r._ctx !== e) ||
          (t ? r.kill(1) : r.revert(!0, !0));
      e && _o(e), e || mo("revert");
    },
    wo = function (t, e) {
      si.cache++,
        (e || !is) &&
          si.forEach(function (t) {
            return Ms(t) && t.cacheID++ && (t.rec = 0);
          }),
        Ts(t) && (Ai.history.scrollRestoration = es = t);
    },
    bo = 0,
    xo = function (t, e) {
      if (!cs || t) {
        (is = Bo.isRefreshing = !0),
          si.forEach(function (t) {
            return Ms(t) && t.cacheID++ && (t.rec = t());
          });
        var r = mo("refreshInit");
        Ui && Bo.sort(),
          e || yo(),
          si.forEach(function (t) {
            Ms(t) &&
              (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
          }),
          oo.slice(0).forEach(function (t) {
            return t.refresh();
          }),
          oo.forEach(function (t, e) {
            if (t._subPinOffset && t.pin) {
              var r = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                n = t.pin[r];
              t.revert(!0, 1), t.adjustPinSpacing(t.pin[r] - n), t.refresh();
            }
          }),
          oo.forEach(function (t) {
            return (
              "max" === t.vars.end &&
              t.setPositions(
                t.start,
                Math.max(t.start + 1, bs(t.scroller, t._dir))
              )
            );
          }),
          r.forEach(function (t) {
            return t && t.render && t.render(-1);
          }),
          si.forEach(function (t) {
            Ms(t) &&
              (t.smooth &&
                requestAnimationFrame(function () {
                  return (t.target.style.scrollBehavior = "smooth");
                }),
              t.rec && t(t.rec));
          }),
          wo(es, 1),
          zi.pause(),
          bo++,
          (is = 2),
          So(2),
          oo.forEach(function (t) {
            return Ms(t.vars.onRefresh) && t.vars.onRefresh(t);
          }),
          (is = Bo.isRefreshing = !1),
          mo("refresh");
      } else Zs(Bo, "scrollEnd", go);
    },
    To = 0,
    Mo = 1,
    So = function (t) {
      if (!is || 2 === t) {
        (Bo.isUpdating = !0), os && os.update(0);
        var e = oo.length,
          r = us(),
          n = r - ls >= 50,
          i = e && oo[0].scroll();
        if (
          ((Mo = To > i ? -1 : 1),
          is || (To = i),
          n &&
            (cs && !Xi && r - cs > 200 && ((cs = 0), mo("scrollEnd")),
            (Ii = ls),
            (ls = r)),
          Mo < 0)
        ) {
          for (Ni = e; Ni-- > 0; ) oo[Ni] && oo[Ni].update(0, n);
          Mo = 1;
        } else for (Ni = 0; Ni < e; Ni++) oo[Ni] && oo[Ni].update(0, n);
        Bo.isUpdating = !1;
      }
      ns = 0;
    },
    ko = [
      Cs,
      "top",
      Ds,
      Ps,
      Xs + Bs,
      Xs + Ls,
      Xs + Is,
      Xs + Fs,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Oo = ko.concat([
      Rs,
      zs,
      "boxSizing",
      "max" + Ws,
      "max" + Ns,
      "position",
      Xs,
      Ys,
      Ys + Is,
      Ys + Ls,
      Ys + Bs,
      Ys + Fs,
    ]),
    Eo = function (t, e, r, n) {
      if (!t._gsap.swappedIn) {
        for (var i, s = ko.length, o = e.style, a = t.style; s--; )
          o[(i = ko[s])] = r[i];
        (o.position = "absolute" === r.position ? "absolute" : "relative"),
          "inline" === r.display && (o.display = "inline-block"),
          (a[Ds] = a[Ps] = "auto"),
          (o.flexBasis = r.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[Rs] = js(t, vi) + qs),
          (o[zs] = js(t, _i) + qs),
          (o[Ys] = a[Xs] = a.top = a[Cs] = "0"),
          Co(n),
          (a[Rs] = a["max" + Ws] = r[Rs]),
          (a[zs] = a["max" + Ns] = r[zs]),
          (a[Ys] = r[Ys]),
          t.parentNode !== e &&
            (t.parentNode.insertBefore(e, t), e.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    Ao = /([A-Z])/g,
    Co = function (t) {
      if (t) {
        var e,
          r,
          n = t.t.style,
          i = t.length,
          s = 0;
        for ((t.t._gsap || Oi.core.getCache(t.t)).uncache = 1; s < i; s += 2)
          (r = t[s + 1]),
            (e = t[s]),
            r
              ? (n[e] = r)
              : n[e] && n.removeProperty(e.replace(Ao, "-$1").toLowerCase());
      }
    },
    Po = function (t) {
      for (var e = Oo.length, r = t.style, n = [], i = 0; i < e; i++)
        n.push(Oo[i], r[Oo[i]]);
      return (n.t = t), n;
    },
    Do = { left: 0, top: 0 },
    Ro = function (t, e, r, n, i, s, o, a, u, l, c, h, f) {
      Ms(t) && (t = t(a)),
        Ts(t) &&
          "max" === t.substr(0, 3) &&
          (t = h + ("=" === t.charAt(4) ? no("0" + t.substr(3), r) : 0));
      var p,
        d,
        g,
        m = f ? f.time() : 0;
      if ((f && f.seek(0), Ss(t)))
        f &&
          (t = Oi.utils.mapRange(
            f.scrollTrigger.start,
            f.scrollTrigger.end,
            0,
            h,
            t
          )),
          o && so(o, r, n, !0);
      else {
        Ms(e) && (e = e(a));
        var v,
          _,
          y,
          w,
          b = (t || "0").split(" ");
        (g = yi(e) || Di),
          ((v = Us(g) || {}) && (v.left || v.top)) ||
            "none" !== Hs(g).display ||
            ((w = g.style.display),
            (g.style.display = "block"),
            (v = Us(g)),
            w ? (g.style.display = w) : g.style.removeProperty("display")),
          (_ = no(b[0], v[n.d])),
          (y = no(b[1] || "0", r)),
          (t = v[n.p] - u[n.p] - l + _ + i - y),
          o && so(o, y, n, r - y < 20 || (o._isStart && y > 20)),
          (r -= r - y);
      }
      if (s) {
        var x = t + r,
          T = s._isStart;
        (p = "scroll" + n.d2),
          so(
            s,
            x,
            n,
            (T && x > 20) ||
              (!T && (c ? Math.max(Di[p], Pi[p]) : s.parentNode[p]) <= x + 1)
          ),
          c &&
            ((u = Us(o)),
            c && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + qs));
      }
      return (
        f &&
          g &&
          ((p = Us(g)),
          f.seek(h),
          (d = Us(g)),
          (f._caScrollDist = p[n.p] - d[n.p]),
          (t = (t / f._caScrollDist) * h)),
        f && f.seek(m),
        f ? t : Math.round(t)
      );
    },
    zo = /(webkit|moz|length|cssText|inset)/i,
    Lo = function (t, e, r, n) {
      if (t.parentNode !== e) {
        var i,
          s,
          o = t.style;
        if (e === Di) {
          for (i in ((t._stOrig = o.cssText), (s = Hs(t))))
            +i ||
              zo.test(i) ||
              !s[i] ||
              "string" != typeof o[i] ||
              "0" === i ||
              (o[i] = s[i]);
          (o.top = r), (o.left = n);
        } else o.cssText = t._stOrig;
        (Oi.core.getCache(t).uncache = 1), e.appendChild(t);
      }
    },
    Fo = function (t, e, r) {
      var n = e,
        i = n;
      return function (e) {
        var s = Math.round(t());
        return (
          s !== n &&
            s !== i &&
            Math.abs(s - n) > 3 &&
            Math.abs(s - i) > 3 &&
            ((e = s), r && r()),
          (i = n),
          (n = e),
          e
        );
      };
    },
    Io = function (t, e) {
      var r = wi(t, e),
        n = "_scroll" + e.p2,
        i = function e(i, s, o, a, u) {
          var l = e.tween,
            c = s.onComplete,
            h = {};
          o = o || r();
          var f = Fo(r, o, function () {
            l.kill(), (e.tween = 0);
          });
          return (
            (u = (a && u) || 0),
            (a = a || i - o),
            l && l.kill(),
            Math.round(o),
            (s[n] = i),
            (s.modifiers = h),
            (h[n] = function () {
              return f(o + a * l.ratio + u * l.ratio * l.ratio);
            }),
            (s.onUpdate = function () {
              si.cache++, So();
            }),
            (s.onComplete = function () {
              (e.tween = 0), c && c.call(l);
            }),
            (l = e.tween = Oi.to(t, s))
          );
        };
      return (
        (t[n] = r),
        (r.wheelHandler = function () {
          return i.tween && i.tween.kill() && (i.tween = 0);
        }),
        Zs(t, "wheel", r.wheelHandler),
        Bo.isTouch && Zs(t, "touchmove", r.wheelHandler),
        i
      );
    },
    Bo = (function () {
      function t(e, r) {
        Ei ||
          t.register(Oi) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          this.init(e, r);
      }
      return (
        (t.prototype.init = function (e, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            hs)
          ) {
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              c,
              h,
              f,
              p,
              d,
              g,
              m,
              v,
              _,
              y,
              w,
              b,
              x,
              T,
              M,
              S,
              k,
              O,
              E,
              A,
              C,
              P,
              D,
              R,
              z,
              L,
              F,
              I,
              B,
              Y,
              X,
              W,
              N,
              q,
              H = (e = Vs(
                Ts(e) || Ss(e) || e.nodeType ? { trigger: e } : e,
                eo
              )),
              V = H.onUpdate,
              U = H.toggleClass,
              j = H.id,
              G = H.onToggle,
              $ = H.onRefresh,
              Q = H.scrub,
              Z = H.trigger,
              K = H.pin,
              J = H.pinSpacing,
              tt = H.invalidateOnRefresh,
              et = H.anticipatePin,
              rt = H.onScrubComplete,
              nt = H.onSnapComplete,
              it = H.once,
              st = H.snap,
              ot = H.pinReparent,
              at = H.pinSpacer,
              ut = H.containerAnimation,
              lt = H.fastScrollEnd,
              ct = H.preventOverlaps,
              ht =
                e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                  ? vi
                  : _i,
              ft = !Q && 0 !== Q,
              pt = yi(e.scroller || Ai),
              dt = Oi.core.getCache(pt),
              gt = ys(pt),
              mt =
                "fixed" ===
                ("pinType" in e
                  ? e.pinType
                  : li(pt, "pinType") || (gt && "fixed")),
              vt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
              _t = ft && e.toggleActions.split(" "),
              yt = "markers" in e ? e.markers : eo.markers,
              wt = gt ? 0 : parseFloat(Hs(pt)["border" + ht.p2 + Ws]) || 0,
              bt = this,
              xt =
                e.onRefreshInit &&
                function () {
                  return e.onRefreshInit(bt);
                },
              Tt = (function (t, e, r) {
                var n = r.d,
                  i = r.d2,
                  s = r.a;
                return (s = li(t, "getBoundingClientRect"))
                  ? function () {
                      return s()[n];
                    }
                  : function () {
                      return (e ? Ai["inner" + i] : t["client" + i]) || 0;
                    };
              })(pt, gt, ht),
              Mt = (function (t, e) {
                return !e || ~oi.indexOf(t)
                  ? ws(t)
                  : function () {
                      return Do;
                    };
              })(pt, gt),
              St = 0,
              kt = 0,
              Ot = wi(pt, ht);
            if (
              (ts(bt),
              (bt._dir = ht),
              (et *= 45),
              (bt.scroller = pt),
              (bt.scroll = ut ? ut.time.bind(ut) : Ot),
              (o = Ot()),
              (bt.vars = e),
              (r = r || e.animation),
              "refreshPriority" in e &&
                ((Ui = 1), -9999 === e.refreshPriority && (os = bt)),
              (dt.tweenScroll = dt.tweenScroll || {
                top: Io(pt, _i),
                left: Io(pt, vi),
              }),
              (bt.tweenTo = n = dt.tweenScroll[ht.p]),
              (bt.scrubDuration = function (t) {
                (z = Ss(t) && t)
                  ? R
                    ? R.duration(t)
                    : (R = Oi.to(r, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: z,
                        paused: !0,
                        onComplete: function () {
                          return rt && rt(bt);
                        },
                      }))
                  : (R && R.progress(1).kill(), (R = 0));
              }),
              r &&
                ((r.vars.lazy = !1),
                r._initted ||
                  (!1 !== r.vars.immediateRender &&
                    !1 !== e.immediateRender &&
                    r.duration() &&
                    r.render(0, !0, !0)),
                (bt.animation = r.pause()),
                (r.scrollTrigger = bt),
                bt.scrubDuration(Q),
                R && R.resetTo && R.resetTo("totalProgress", 0),
                (P = 0),
                j || (j = r.vars.id)),
              oo.push(bt),
              st &&
                ((ks(st) && !st.push) || (st = { snapTo: st }),
                "scrollBehavior" in Di.style &&
                  Oi.set(gt ? [Di, Pi] : pt, { scrollBehavior: "auto" }),
                si.forEach(function (t) {
                  return (
                    Ms(t) &&
                    t.target === (gt ? Ci.scrollingElement || Pi : pt) &&
                    (t.smooth = !1)
                  );
                }),
                (s = Ms(st.snapTo)
                  ? st.snapTo
                  : "labels" === st.snapTo
                  ? (function (t) {
                      return function (e) {
                        return Oi.utils.snap(Gs(t), e);
                      };
                    })(r)
                  : "labelsDirectional" === st.snapTo
                  ? (function (t) {
                      return function (e, r) {
                        return $s(Gs(t))(e, r.direction);
                      };
                    })(r)
                  : !1 !== st.directional
                  ? function (t, e) {
                      return $s(st.snapTo)(
                        t,
                        us() - kt < 500 ? 0 : e.direction
                      );
                    }
                  : Oi.utils.snap(st.snapTo)),
                (L = st.duration || { min: 0.1, max: 2 }),
                (L = ks(L) ? Fi(L.min, L.max) : Fi(L, L)),
                (F = Oi.delayedCall(st.delay || z / 2 || 0.1, function () {
                  var t = Ot(),
                    e = us() - kt < 500,
                    i = n.tween;
                  if (
                    !(e || Math.abs(bt.getVelocity()) < 10) ||
                    i ||
                    Xi ||
                    St === t
                  )
                    bt.isActive && St !== t && F.restart(!0);
                  else {
                    var o = (t - u) / g,
                      a = r && !ft ? r.totalProgress() : o,
                      c = e ? 0 : ((a - D) / (us() - Ii)) * 1e3 || 0,
                      h = Oi.utils.clamp(-o, 1 - o, (As(c / 2) * c) / 0.185),
                      f = o + (!1 === st.inertia ? 0 : h),
                      p = Fi(0, 1, s(f, bt)),
                      d = Math.round(u + p * g),
                      m = st,
                      v = m.onStart,
                      _ = m.onInterrupt,
                      y = m.onComplete;
                    if (t <= l && t >= u && d !== t) {
                      if (i && !i._initted && i.data <= As(d - t)) return;
                      !1 === st.inertia && (h = p - o),
                        n(
                          d,
                          {
                            duration: L(
                              As(
                                (0.185 * Math.max(As(f - a), As(p - a))) /
                                  c /
                                  0.05 || 0
                              )
                            ),
                            ease: st.ease || "power3",
                            data: As(d - t),
                            onInterrupt: function () {
                              return F.restart(!0) && _ && _(bt);
                            },
                            onComplete: function () {
                              bt.update(),
                                (St = Ot()),
                                (P = D =
                                  r && !ft ? r.totalProgress() : bt.progress),
                                nt && nt(bt),
                                y && y(bt);
                            },
                          },
                          t,
                          h * g,
                          d - t - h * g
                        ),
                        v && v(bt, n.tween);
                    }
                  }
                }).pause())),
              j && (ao[j] = bt),
              (W =
                (Z = bt.trigger = yi(Z || K)) && Z._gsap && Z._gsap.stRevert) &&
                (W = W(bt)),
              (K = !0 === K ? Z : yi(K)),
              Ts(U) && (U = { targets: Z, className: U }),
              K &&
                (!1 === J ||
                  J === Xs ||
                  (J =
                    !(
                      !J &&
                      K.parentNode &&
                      K.parentNode.style &&
                      "flex" === Hs(K.parentNode).display
                    ) && Ys),
                (bt.pin = K),
                (i = Oi.core.getCache(K)).spacer
                  ? (m = i.pinState)
                  : (at &&
                      ((at = yi(at)) &&
                        !at.nodeType &&
                        (at = at.current || at.nativeElement),
                      (i.spacerIsNative = !!at),
                      at && (i.spacerState = Po(at))),
                    (i.spacer = y = at || Ci.createElement("div")),
                    y.classList.add("pin-spacer"),
                    j && y.classList.add("pin-spacer-" + j),
                    (i.pinState = m = Po(K))),
                !1 !== e.force3D && Oi.set(K, { force3D: !0 }),
                (bt.spacer = y = i.spacer),
                (C = Hs(K)),
                (S = C[J + ht.os2]),
                (b = Oi.getProperty(K)),
                (x = Oi.quickSetter(K, ht.a, qs)),
                Eo(K, y, C),
                (_ = Po(K))),
              yt)
            ) {
              (d = ks(yt) ? Vs(yt, to) : to),
                (f = io("scroller-start", j, pt, ht, d, 0)),
                (p = io("scroller-end", j, pt, ht, d, 0, f)),
                (w = f["offset" + ht.op.d2]);
              var Et = yi(li(pt, "content") || pt);
              (c = this.markerStart = io("start", j, Et, ht, d, w, 0, ut)),
                (h = this.markerEnd = io("end", j, Et, ht, d, w, 0, ut)),
                ut && (X = Oi.quickSetter([c, h], ht.a, qs)),
                mt ||
                  (oi.length && !0 === li(pt, "fixedMarkers")) ||
                  ((q = Hs((N = gt ? Di : pt)).position),
                  (N.style.position =
                    "absolute" === q || "fixed" === q ? q : "relative"),
                  Oi.set([f, p], { force3D: !0 }),
                  (O = Oi.quickSetter(f, ht.a, qs)),
                  (A = Oi.quickSetter(p, ht.a, qs)));
            }
            if (ut) {
              var At = ut.vars.onUpdate,
                Ct = ut.vars.onUpdateParams;
              ut.eventCallback("onUpdate", function () {
                bt.update(0, 0, 1), At && At.apply(ut, Ct || []);
              });
            }
            (bt.previous = function () {
              return oo[oo.indexOf(bt) - 1];
            }),
              (bt.next = function () {
                return oo[oo.indexOf(bt) + 1];
              }),
              (bt.revert = function (t, e) {
                if (!e) return bt.kill(!0);
                var n = !1 !== t || !bt.enabled,
                  i = Yi;
                n !== bt.isReverted &&
                  (n &&
                    ((B = Math.max(Ot(), bt.scroll.rec || 0)),
                    (I = bt.progress),
                    (Y = r && r.progress())),
                  c &&
                    [c, h, f, p].forEach(function (t) {
                      return (t.style.display = n ? "none" : "block");
                    }),
                  n && ((Yi = bt), bt.update(n)),
                  !K ||
                    (ot && bt.isActive) ||
                    (n
                      ? (function (t, e, r) {
                          Co(r);
                          var n = t._gsap;
                          if (n.spacerIsNative) Co(n.spacerState);
                          else if (t._gsap.swappedIn) {
                            var i = e.parentNode;
                            i && (i.insertBefore(t, e), i.removeChild(e));
                          }
                          t._gsap.swappedIn = !1;
                        })(K, y, m)
                      : Eo(K, y, Hs(K), k)),
                  n || bt.update(n),
                  (Yi = i),
                  (bt.isReverted = n));
              }),
              (bt.refresh = function (i, s) {
                if ((!Yi && bt.enabled) || s)
                  if (K && i && cs) Zs(t, "scrollEnd", go);
                  else {
                    !is && xt && xt(bt),
                      (Yi = bt),
                      (kt = us()),
                      n.tween && (n.tween.kill(), (n.tween = 0)),
                      R && R.pause(),
                      tt && r && r.revert({ kill: !1 }).invalidate(),
                      bt.isReverted || bt.revert(!0, !0),
                      (bt._subPinOffset = !1);
                    for (
                      var d,
                        w,
                        x,
                        S,
                        O,
                        A,
                        C,
                        P,
                        D,
                        z,
                        L,
                        X = Tt(),
                        W = Mt(),
                        N = ut ? ut.duration() : bs(pt, ht),
                        q = g <= 0.01,
                        H = 0,
                        V = 0,
                        U = e.end,
                        j = e.endTrigger || Z,
                        G =
                          e.start ||
                          (0 !== e.start && Z ? (K ? "0 0" : "0 100%") : 0),
                        Q = (bt.pinnedContainer =
                          e.pinnedContainer && yi(e.pinnedContainer)),
                        et = (Z && Math.max(0, oo.indexOf(bt))) || 0,
                        rt = et;
                      rt--;

                    )
                      (A = oo[rt]).end || A.refresh(0, 1) || (Yi = bt),
                        !(C = A.pin) ||
                          (C !== Z && C !== K && C !== Q) ||
                          A.isReverted ||
                          (z || (z = []), z.unshift(A), A.revert(!0, !0)),
                        A !== oo[rt] && (et--, rt--);
                    for (
                      Ms(G) && (G = G(bt)),
                        u =
                          Ro(G, Z, X, ht, Ot(), c, f, bt, W, wt, mt, N, ut) ||
                          (K ? -0.001 : 0),
                        Ms(U) && (U = U(bt)),
                        Ts(U) &&
                          !U.indexOf("+=") &&
                          (~U.indexOf(" ")
                            ? (U = (Ts(G) ? G.split(" ")[0] : "") + U)
                            : ((H = no(U.substr(2), X)),
                              (U = Ts(G)
                                ? G
                                : (ut
                                    ? Oi.utils.mapRange(
                                        0,
                                        ut.duration(),
                                        ut.scrollTrigger.start,
                                        ut.scrollTrigger.end,
                                        u
                                      )
                                    : u) + H),
                              (j = Z))),
                        l =
                          Math.max(
                            u,
                            Ro(
                              U || (j ? "100% 0" : N),
                              j,
                              X,
                              ht,
                              Ot() + H,
                              h,
                              p,
                              bt,
                              W,
                              wt,
                              mt,
                              N,
                              ut
                            )
                          ) || -0.001,
                        g = l - u || ((u -= 0.01) && 0.001),
                        H = 0,
                        rt = et;
                      rt--;

                    )
                      (C = (A = oo[rt]).pin) &&
                        A.start - A._pinPush <= u &&
                        !ut &&
                        A.end > 0 &&
                        ((d = A.end - A.start),
                        ((C === Z && A.start - A._pinPush < u) || C === Q) &&
                          !Ss(G) &&
                          (H += d * (1 - A.progress)),
                        C === K && (V += d));
                    if (
                      ((u += H),
                      (l += H),
                      q &&
                        (I = Oi.utils.clamp(0, 1, Oi.utils.normalize(u, l, B))),
                      (bt._pinPush = V),
                      c &&
                        H &&
                        (((d = {})[ht.a] = "+=" + H),
                        Q && (d[ht.p] = "-=" + Ot()),
                        Oi.set([c, h], d)),
                      K)
                    )
                      (d = Hs(K)),
                        (S = ht === _i),
                        (x = Ot()),
                        (T = parseFloat(b(ht.a)) + V),
                        !N &&
                          l > 1 &&
                          ((L = {
                            style: (L = (gt ? Ci.scrollingElement || Pi : pt)
                              .style),
                            value: L["overflow" + ht.a.toUpperCase()],
                          }).style["overflow" + ht.a.toUpperCase()] = "scroll"),
                        Eo(K, y, d),
                        (_ = Po(K)),
                        (w = Us(K, !0)),
                        (P = mt && wi(pt, S ? vi : _i)()),
                        J &&
                          (((k = [J + ht.os2, g + V + qs]).t = y),
                          (rt = J === Ys ? js(K, ht) + g + V : 0) &&
                            k.push(ht.d, rt + qs),
                          Co(k),
                          Q &&
                            oo.forEach(function (t) {
                              t.pin === Q &&
                                !1 !== t.vars.pinSpacing &&
                                (t._subPinOffset = !0);
                            }),
                          mt && Ot(B)),
                        mt &&
                          (((O = {
                            top: w.top + (S ? x - u : P) + qs,
                            left: w.left + (S ? P : x - u) + qs,
                            boxSizing: "border-box",
                            position: "fixed",
                          })[Rs] = O["max" + Ws] =
                            Math.ceil(w.width) + qs),
                          (O[zs] = O["max" + Ns] = Math.ceil(w.height) + qs),
                          (O[Xs] =
                            O[Xs + Is] =
                            O[Xs + Ls] =
                            O[Xs + Bs] =
                            O[Xs + Fs] =
                              "0"),
                          (O[Ys] = d[Ys]),
                          (O[Ys + Is] = d[Ys + Is]),
                          (O[Ys + Ls] = d[Ys + Ls]),
                          (O[Ys + Bs] = d[Ys + Bs]),
                          (O[Ys + Fs] = d[Ys + Fs]),
                          (v = (function (t, e, r) {
                            for (
                              var n, i = [], s = t.length, o = r ? 8 : 0;
                              o < s;
                              o += 2
                            )
                              (n = t[o]), i.push(n, n in e ? e[n] : t[o + 1]);
                            return (i.t = t.t), i;
                          })(m, O, ot)),
                          is && Ot(0)),
                        r
                          ? ((D = r._initted),
                            ji(1),
                            r.render(r.duration(), !0, !0),
                            (M = b(ht.a) - T + g + V),
                            (E = Math.abs(g - M) > 1),
                            mt && E && v.splice(v.length - 2, 2),
                            r.render(0, !0, !0),
                            D || r.invalidate(!0),
                            r.parent || r.totalTime(r.totalTime()),
                            ji(0))
                          : (M = g),
                        L &&
                          (L.value
                            ? (L.style["overflow" + ht.a.toUpperCase()] =
                                L.value)
                            : L.style.removeProperty("overflow-" + ht.a));
                    else if (Z && Ot() && !ut)
                      for (w = Z.parentNode; w && w !== Di; )
                        w._pinOffset &&
                          ((u -= w._pinOffset), (l -= w._pinOffset)),
                          (w = w.parentNode);
                    z &&
                      z.forEach(function (t) {
                        return t.revert(!1, !0);
                      }),
                      (bt.start = u),
                      (bt.end = l),
                      (o = a = is ? B : Ot()),
                      ut || is || (o < B && Ot(B), (bt.scroll.rec = 0)),
                      bt.revert(!1, !0),
                      F &&
                        ((St = -1),
                        bt.isActive && Ot(u + g * I),
                        F.restart(!0)),
                      (Yi = 0),
                      r &&
                        ft &&
                        (r._initted || Y) &&
                        r.progress() !== Y &&
                        r.progress(Y, !0).render(r.time(), !0, !0),
                      (q || I !== bt.progress || ut) &&
                        (r &&
                          !ft &&
                          r.totalProgress(
                            ut && u < -0.001 && !I
                              ? Oi.utils.normalize(u, l, 0)
                              : I,
                            !0
                          ),
                        (bt.progress = (o - u) / g === I ? 0 : I)),
                      K && J && (y._pinOffset = Math.round(bt.progress * M)),
                      R && R.invalidate(),
                      $ && !is && $(bt);
                  }
              }),
              (bt.getVelocity = function () {
                return ((Ot() - a) / (us() - Ii)) * 1e3 || 0;
              }),
              (bt.endAnimation = function () {
                Os(bt.callbackAnimation),
                  r &&
                    (R
                      ? R.progress(1)
                      : r.paused()
                      ? ft || Os(r, bt.direction < 0, 1)
                      : Os(r, r.reversed()));
              }),
              (bt.labelToScroll = function (t) {
                return (
                  (r &&
                    r.labels &&
                    (u || bt.refresh() || u) +
                      (r.labels[t] / r.duration()) * g) ||
                  0
                );
              }),
              (bt.getTrailing = function (t) {
                var e = oo.indexOf(bt),
                  r =
                    bt.direction > 0
                      ? oo.slice(0, e).reverse()
                      : oo.slice(e + 1);
                return (
                  Ts(t)
                    ? r.filter(function (e) {
                        return e.vars.preventOverlaps === t;
                      })
                    : r
                ).filter(function (t) {
                  return bt.direction > 0 ? t.end <= u : t.start >= l;
                });
              }),
              (bt.update = function (t, e, i) {
                if (!ut || i || t) {
                  var s,
                    c,
                    h,
                    p,
                    d,
                    m,
                    w,
                    b = !0 === is ? B : bt.scroll(),
                    k = t ? 0 : (b - u) / g,
                    C = k < 0 ? 0 : k > 1 ? 1 : k || 0,
                    z = bt.progress;
                  if (
                    (e &&
                      ((a = o),
                      (o = ut ? Ot() : b),
                      st && ((D = P), (P = r && !ft ? r.totalProgress() : C))),
                    et &&
                      !C &&
                      K &&
                      !Yi &&
                      !as &&
                      cs &&
                      u < b + ((b - a) / (us() - Ii)) * et &&
                      (C = 1e-4),
                    C !== z && bt.enabled)
                  ) {
                    if (
                      ((p =
                        (d =
                          (s = bt.isActive = !!C && C < 1) !==
                          (!!z && z < 1)) || !!C != !!z),
                      (bt.direction = C > z ? 1 : -1),
                      (bt.progress = C),
                      p &&
                        !Yi &&
                        ((c = C && !z ? 0 : 1 === C ? 1 : 1 === z ? 2 : 3),
                        ft &&
                          ((h =
                            (!d && "none" !== _t[c + 1] && _t[c + 1]) || _t[c]),
                          (w =
                            r &&
                            ("complete" === h || "reset" === h || h in r)))),
                      ct &&
                        (d || w) &&
                        (w || Q || !r) &&
                        (Ms(ct)
                          ? ct(bt)
                          : bt.getTrailing(ct).forEach(function (t) {
                              return t.endAnimation();
                            })),
                      ft ||
                        (!R || Yi || as
                          ? r && r.totalProgress(C, !!Yi)
                          : (R._dp._time - R._start !== R._time &&
                              R.render(R._dp._time - R._start),
                            R.resetTo
                              ? R.resetTo(
                                  "totalProgress",
                                  C,
                                  r._tTime / r._tDur
                                )
                              : ((R.vars.totalProgress = C),
                                R.invalidate().restart()))),
                      K)
                    )
                      if ((t && J && (y.style[J + ht.os2] = S), mt)) {
                        if (p) {
                          if (
                            ((m =
                              !t && C > z && l + 1 > b && b + 1 >= bs(pt, ht)),
                            ot)
                          )
                            if (t || (!s && !m)) Lo(K, y);
                            else {
                              var L = Us(K, !0),
                                I = b - u;
                              Lo(
                                K,
                                Di,
                                L.top + (ht === _i ? I : 0) + qs,
                                L.left + (ht === _i ? 0 : I) + qs
                              );
                            }
                          Co(s || m ? v : _),
                            (E && C < 1 && s) || x(T + (1 !== C || m ? 0 : M));
                        }
                      } else x(ms(T + M * C));
                    st && !n.tween && !Yi && !as && F.restart(!0),
                      U &&
                        (d || (it && C && (C < 1 || !rs))) &&
                        Li(U.targets).forEach(function (t) {
                          return t.classList[s || it ? "add" : "remove"](
                            U.className
                          );
                        }),
                      V && !ft && !t && V(bt),
                      p && !Yi
                        ? (ft &&
                            (w &&
                              ("complete" === h
                                ? r.pause().totalProgress(1)
                                : "reset" === h
                                ? r.restart(!0).pause()
                                : "restart" === h
                                ? r.restart(!0)
                                : r[h]()),
                            V && V(bt)),
                          (!d && rs) ||
                            (G && d && Es(bt, G),
                            vt[c] && Es(bt, vt[c]),
                            it && (1 === C ? bt.kill(!1, 1) : (vt[c] = 0)),
                            d || (vt[(c = 1 === C ? 1 : 3)] && Es(bt, vt[c]))),
                          lt &&
                            !s &&
                            Math.abs(bt.getVelocity()) > (Ss(lt) ? lt : 2500) &&
                            (Os(bt.callbackAnimation),
                            R
                              ? R.progress(1)
                              : Os(r, "reverse" === h ? 1 : !C, 1)))
                        : ft && V && !Yi && V(bt);
                  }
                  if (A) {
                    var Y = ut
                      ? (b / ut.duration()) * (ut._caScrollDist || 0)
                      : b;
                    O(Y + (f._isFlipped ? 1 : 0)), A(Y);
                  }
                  X && X((-b / ut.duration()) * (ut._caScrollDist || 0));
                }
              }),
              (bt.enable = function (e, r) {
                bt.enabled ||
                  ((bt.enabled = !0),
                  Zs(pt, "resize", ho),
                  Zs(gt ? Ci : pt, "scroll", lo),
                  xt && Zs(t, "refreshInit", xt),
                  !1 !== e && ((bt.progress = I = 0), (o = a = St = Ot())),
                  !1 !== r && bt.refresh());
              }),
              (bt.getTween = function (t) {
                return t && n ? n.tween : R;
              }),
              (bt.setPositions = function (t, e) {
                K &&
                  ((T += t - u),
                  (M += e - t - g),
                  J === Ys && bt.adjustPinSpacing(e - t - g)),
                  (bt.start = u = t),
                  (bt.end = l = e),
                  (g = e - t),
                  bt.update();
              }),
              (bt.adjustPinSpacing = function (t) {
                if (k && t) {
                  var e = k.indexOf(ht.d) + 1;
                  (k[e] = parseFloat(k[e]) + t + qs),
                    (k[1] = parseFloat(k[1]) + t + qs),
                    Co(k);
                }
              }),
              (bt.disable = function (e, r) {
                if (
                  bt.enabled &&
                  (!1 !== e && bt.revert(!0, !0),
                  (bt.enabled = bt.isActive = !1),
                  r || (R && R.pause()),
                  (B = 0),
                  i && (i.uncache = 1),
                  xt && Ks(t, "refreshInit", xt),
                  F && (F.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
                  !gt)
                ) {
                  for (var s = oo.length; s--; )
                    if (oo[s].scroller === pt && oo[s] !== bt) return;
                  Ks(pt, "resize", ho), Ks(pt, "scroll", lo);
                }
              }),
              (bt.kill = function (t, n) {
                bt.disable(t, n), R && !n && R.kill(), j && delete ao[j];
                var s = oo.indexOf(bt);
                s >= 0 && oo.splice(s, 1),
                  s === Ni && Mo > 0 && Ni--,
                  (s = 0),
                  oo.forEach(function (t) {
                    return t.scroller === bt.scroller && (s = 1);
                  }),
                  s || is || (bt.scroll.rec = 0),
                  r &&
                    ((r.scrollTrigger = null),
                    t && r.revert({ kill: !1 }),
                    n || r.kill()),
                  c &&
                    [c, h, f, p].forEach(function (t) {
                      return t.parentNode && t.parentNode.removeChild(t);
                    }),
                  os === bt && (os = 0),
                  K &&
                    (i && (i.uncache = 1),
                    (s = 0),
                    oo.forEach(function (t) {
                      return t.pin === K && s++;
                    }),
                    s || (i.spacer = 0)),
                  e.onKill && e.onKill(bt);
              }),
              bt.enable(!1, !1),
              W && W(bt),
              r && r.add && !g
                ? Oi.delayedCall(0.01, function () {
                    return u || l || bt.refresh();
                  }) &&
                  (g = 0.01) &&
                  (u = l = 0)
                : bt.refresh(),
              K &&
                (function () {
                  if (ss !== bo) {
                    var t = (ss = bo);
                    requestAnimationFrame(function () {
                      return t === bo && xo(!0);
                    });
                  }
                })();
          } else this.update = this.refresh = this.kill = gs;
        }),
        (t.register = function (e) {
          return (
            Ei ||
              ((Oi = e || _s()),
              vs() && window.document && t.enable(),
              (Ei = hs)),
            Ei
          );
        }),
        (t.defaults = function (t) {
          if (t) for (var e in t) eo[e] = t[e];
          return eo;
        }),
        (t.disable = function (t, e) {
          (hs = 0),
            oo.forEach(function (r) {
              return r[e ? "kill" : "disable"](t);
            }),
            Ks(Ai, "wheel", lo),
            Ks(Ci, "scroll", lo),
            clearInterval(Bi),
            Ks(Ci, "touchcancel", gs),
            Ks(Di, "touchstart", gs),
            Qs(Ks, Ci, "pointerdown,touchstart,mousedown", ps),
            Qs(Ks, Ci, "pointerup,touchend,mouseup", ds),
            zi.kill(),
            xs(Ks);
          for (var r = 0; r < si.length; r += 3)
            Js(Ks, si[r], si[r + 1]), Js(Ks, si[r], si[r + 2]);
        }),
        (t.enable = function () {
          if (
            ((Ai = window),
            (Ci = document),
            (Pi = Ci.documentElement),
            (Di = Ci.body),
            Oi &&
              ((Li = Oi.utils.toArray),
              (Fi = Oi.utils.clamp),
              (ts = Oi.core.context || gs),
              (ji = Oi.core.suppressOverwrites || gs),
              (es = Ai.history.scrollRestoration || "auto"),
              (To = Ai.pageYOffset),
              Oi.core.globals("ScrollTrigger", t),
              Di))
          ) {
            (hs = 1),
              fs(),
              ki.register(Oi),
              (t.isTouch = ki.isTouch),
              (Ji =
                ki.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              Zs(Ai, "wheel", lo),
              (Ri = [Ai, Ci, Pi, Di]),
              Oi.matchMedia
                ? ((t.matchMedia = function (t) {
                    var e,
                      r = Oi.matchMedia();
                    for (e in t) r.add(e, t[e]);
                    return r;
                  }),
                  Oi.addEventListener("matchMediaInit", function () {
                    return yo();
                  }),
                  Oi.addEventListener("matchMediaRevert", function () {
                    return _o();
                  }),
                  Oi.addEventListener("matchMedia", function () {
                    xo(0, 1), mo("matchMedia");
                  }),
                  Oi.matchMedia("(orientation: portrait)", function () {
                    return co(), co;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              co(),
              Zs(Ci, "scroll", lo);
            var e,
              r,
              n = Di.style,
              i = n.borderTopStyle,
              s = Oi.core.Animation.prototype;
            for (
              s.revert ||
                Object.defineProperty(s, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                n.borderTopStyle = "solid",
                e = Us(Di),
                _i.m = Math.round(e.top + _i.sc()) || 0,
                vi.m = Math.round(e.left + vi.sc()) || 0,
                i
                  ? (n.borderTopStyle = i)
                  : n.removeProperty("border-top-style"),
                Bi = setInterval(uo, 250),
                Oi.delayedCall(0.5, function () {
                  return (as = 0);
                }),
                Zs(Ci, "touchcancel", gs),
                Zs(Di, "touchstart", gs),
                Qs(Zs, Ci, "pointerdown,touchstart,mousedown", ps),
                Qs(Zs, Ci, "pointerup,touchend,mouseup", ds),
                Wi = Oi.utils.checkPrefix("transform"),
                Oo.push(Wi),
                Ei = us(),
                zi = Oi.delayedCall(0.2, xo).pause(),
                Vi = [
                  Ci,
                  "visibilitychange",
                  function () {
                    var t = Ai.innerWidth,
                      e = Ai.innerHeight;
                    Ci.hidden
                      ? ((qi = t), (Hi = e))
                      : (qi === t && Hi === e) || ho();
                  },
                  Ci,
                  "DOMContentLoaded",
                  xo,
                  Ai,
                  "load",
                  xo,
                  Ai,
                  "resize",
                  ho,
                ],
                xs(Zs),
                oo.forEach(function (t) {
                  return t.enable(0, 1);
                }),
                r = 0;
              r < si.length;
              r += 3
            )
              Js(Ks, si[r], si[r + 1]), Js(Ks, si[r], si[r + 2]);
          }
        }),
        (t.config = function (e) {
          "limitCallbacks" in e && (rs = !!e.limitCallbacks);
          var r = e.syncInterval;
          (r && clearInterval(Bi)) || ((Bi = r) && setInterval(uo, r)),
            "ignoreMobileResize" in e &&
              (Qi = 1 === t.isTouch && e.ignoreMobileResize),
            "autoRefreshEvents" in e &&
              (xs(Ks) || xs(Zs, e.autoRefreshEvents || "none"),
              (Gi = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
        }),
        (t.scrollerProxy = function (t, e) {
          var r = yi(t),
            n = si.indexOf(r),
            i = ys(r);
          ~n && si.splice(n, i ? 6 : 2),
            e && (i ? oi.unshift(Ai, e, Di, e, Pi, e) : oi.unshift(r, e));
        }),
        (t.clearMatchMedia = function (t) {
          oo.forEach(function (e) {
            return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
          });
        }),
        (t.isInViewport = function (t, e, r) {
          var n = (Ts(t) ? yi(t) : t).getBoundingClientRect(),
            i = n[r ? Rs : zs] * e || 0;
          return r
            ? n.right - i > 0 && n.left + i < Ai.innerWidth
            : n.bottom - i > 0 && n.top + i < Ai.innerHeight;
        }),
        (t.positionInViewport = function (t, e, r) {
          Ts(t) && (t = yi(t));
          var n = t.getBoundingClientRect(),
            i = n[r ? Rs : zs],
            s =
              null == e
                ? i / 2
                : e in ro
                ? ro[e] * i
                : ~e.indexOf("%")
                ? (parseFloat(e) * i) / 100
                : parseFloat(e) || 0;
          return r
            ? (n.left + s) / Ai.innerWidth
            : (n.top + s) / Ai.innerHeight;
        }),
        (t.killAll = function (t) {
          if (
            (oo.slice(0).forEach(function (t) {
              return "ScrollSmoother" !== t.vars.id && t.kill();
            }),
            !0 !== t)
          ) {
            var e = fo.killAll || [];
            (fo = {}),
              e.forEach(function (t) {
                return t();
              });
          }
        }),
        t
      );
    })();
  (Bo.version = "3.11.5"),
    (Bo.saveStyles = function (t) {
      return t
        ? Li(t).forEach(function (t) {
            if (t && t.style) {
              var e = vo.indexOf(t);
              e >= 0 && vo.splice(e, 5),
                vo.push(
                  t,
                  t.style.cssText,
                  t.getBBox && t.getAttribute("transform"),
                  Oi.core.getCache(t),
                  ts()
                );
            }
          })
        : vo;
    }),
    (Bo.revert = function (t, e) {
      return yo(!t, e);
    }),
    (Bo.create = function (t, e) {
      return new Bo(t, e);
    }),
    (Bo.refresh = function (t) {
      return t ? ho() : (Ei || Bo.register()) && xo(!0);
    }),
    (Bo.update = function (t) {
      return ++si.cache && So(!0 === t ? 2 : 0);
    }),
    (Bo.clearScrollMemory = wo),
    (Bo.maxScroll = function (t, e) {
      return bs(t, e ? vi : _i);
    }),
    (Bo.getScrollFunc = function (t, e) {
      return wi(yi(t), e ? vi : _i);
    }),
    (Bo.getById = function (t) {
      return ao[t];
    }),
    (Bo.getAll = function () {
      return oo.filter(function (t) {
        return "ScrollSmoother" !== t.vars.id;
      });
    }),
    (Bo.isScrolling = function () {
      return !!cs;
    }),
    (Bo.snapDirectional = $s),
    (Bo.addEventListener = function (t, e) {
      var r = fo[t] || (fo[t] = []);
      ~r.indexOf(e) || r.push(e);
    }),
    (Bo.removeEventListener = function (t, e) {
      var r = fo[t],
        n = r && r.indexOf(e);
      n >= 0 && r.splice(n, 1);
    }),
    (Bo.batch = function (t, e) {
      var r,
        n = [],
        i = {},
        s = e.interval || 0.016,
        o = e.batchMax || 1e9,
        a = function (t, e) {
          var r = [],
            n = [],
            i = Oi.delayedCall(s, function () {
              e(r, n), (r = []), (n = []);
            }).pause();
          return function (t) {
            r.length || i.restart(!0),
              r.push(t.trigger),
              n.push(t),
              o <= r.length && i.progress(1);
          };
        };
      for (r in e)
        i[r] =
          "on" === r.substr(0, 2) && Ms(e[r]) && "onRefreshInit" !== r
            ? a(0, e[r])
            : e[r];
      return (
        Ms(o) &&
          ((o = o()),
          Zs(Bo, "refresh", function () {
            return (o = e.batchMax());
          })),
        Li(t).forEach(function (t) {
          var e = {};
          for (r in i) e[r] = i[r];
          (e.trigger = t), n.push(Bo.create(e));
        }),
        n
      );
    });
  var Yo,
    Xo = function (t, e, r, n) {
      return (
        e > n ? t(n) : e < 0 && t(0),
        r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
      );
    },
    Wo = function t(e, r) {
      !0 === r
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            !0 === r
              ? "auto"
              : r
              ? "pan-" + r + (ki.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Pi && t(Di, r);
    },
    No = { auto: 1, scroll: 1 },
    qo = function (t) {
      var e,
        r = t.event,
        n = t.target,
        i = t.axis,
        s = (r.changedTouches ? r.changedTouches[0] : r).target,
        o = s._gsap || Oi.core.getCache(s),
        a = us();
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== Di &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            (!No[(e = Hs(s)).overflowY] && !No[e.overflowX]));

        )
          s = s.parentNode;
        (o._isScroll =
          s &&
          s !== n &&
          !ys(s) &&
          (No[(e = Hs(s)).overflowY] || No[e.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || "x" === i) && (r.stopPropagation(), (r._gsapAllow = !0));
    },
    Ho = function (t, e, r, n) {
      return ki.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: (n = n && qo),
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function () {
          return r && Zs(Ci, ki.eventTypes[0], Uo, !1, !0);
        },
        onDisable: function () {
          return Ks(Ci, ki.eventTypes[0], Uo, !0);
        },
      });
    },
    Vo = /(input|label|select|textarea)/i,
    Uo = function (t) {
      var e = Vo.test(t.target.tagName);
      (e || Yo) && ((t._gsapAllow = !0), (Yo = e));
    },
    jo = function (t) {
      ks(t) || (t = {}),
        (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
        t.type || (t.type = "wheel,touch"),
        (t.debounce = !!t.debounce),
        (t.id = t.id || "normalizer");
      var e,
        r,
        n,
        i,
        s,
        o,
        a,
        u,
        l = t,
        c = l.normalizeScrollX,
        h = l.momentum,
        f = l.allowNestedScroll,
        p = l.onRelease,
        d = yi(t.target) || Pi,
        g = Oi.core.globals().ScrollSmoother,
        m = g && g.get(),
        v =
          Ji &&
          ((t.content && yi(t.content)) ||
            (m && !1 !== t.content && !m.smooth() && m.content())),
        _ = wi(d, _i),
        y = wi(d, vi),
        w = 1,
        b =
          (ki.isTouch && Ai.visualViewport
            ? Ai.visualViewport.scale * Ai.visualViewport.width
            : Ai.outerWidth) / Ai.innerWidth,
        x = 0,
        T = Ms(h)
          ? function () {
              return h(e);
            }
          : function () {
              return h || 2.8;
            },
        M = Ho(d, t.type, !0, f),
        S = function () {
          return (i = !1);
        },
        k = gs,
        O = gs,
        E = function () {
          (r = bs(d, _i)),
            (O = Fi(Ji ? 1 : 0, r)),
            c && (k = Fi(0, bs(d, vi))),
            (n = bo);
        },
        A = function () {
          (v._gsap.y = ms(parseFloat(v._gsap.y) + _.offset) + "px"),
            (v.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(v._gsap.y) +
              ", 0, 1)"),
            (_.offset = _.cacheID = 0);
        },
        C = function () {
          E(),
            s.isActive() &&
              s.vars.scrollY > r &&
              (_() > r ? s.progress(1) && _(r) : s.resetTo("scrollY", r));
        };
      return (
        v && Oi.set(v, { y: "+=0" }),
        (t.ignoreCheck = function (t) {
          return (
            (Ji &&
              "touchmove" === t.type &&
              (function () {
                if (i) {
                  requestAnimationFrame(S);
                  var t = ms(e.deltaY / 2),
                    r = O(_.v - t);
                  if (v && r !== _.v + _.offset) {
                    _.offset = r - _.v;
                    var n = ms((parseFloat(v && v._gsap.y) || 0) - _.offset);
                    (v.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      n +
                      ", 0, 1)"),
                      (v._gsap.y = n + "px"),
                      (_.cacheID = si.cache),
                      So();
                  }
                  return !0;
                }
                _.offset && A(), (i = !0);
              })()) ||
            (w > 1.05 && "touchstart" !== t.type) ||
            e.isGesturing ||
            (t.touches && t.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          i = !1;
          var t = w;
          (w = ms(((Ai.visualViewport && Ai.visualViewport.scale) || 1) / b)),
            s.pause(),
            t !== w && Wo(d, w > 1.01 || (!c && "x")),
            (o = y()),
            (a = _()),
            E(),
            (n = bo);
        }),
        (t.onRelease = t.onGestureStart =
          function (t, e) {
            if ((_.offset && A(), e)) {
              si.cache++;
              var n,
                i,
                o = T();
              c &&
                ((i = (n = y()) + (0.05 * o * -t.velocityX) / 0.227),
                (o *= Xo(y, n, i, bs(d, vi))),
                (s.vars.scrollX = k(i))),
                (i = (n = _()) + (0.05 * o * -t.velocityY) / 0.227),
                (o *= Xo(_, n, i, bs(d, _i))),
                (s.vars.scrollY = O(i)),
                s.invalidate().duration(o).play(0.01),
                ((Ji && s.vars.scrollY >= r) || n >= r - 1) &&
                  Oi.to({}, { onUpdate: C, duration: o });
            } else u.restart(!0);
            p && p(t);
          }),
        (t.onWheel = function () {
          s._ts && s.pause(), us() - x > 1e3 && ((n = 0), (x = us()));
        }),
        (t.onChange = function (t, e, r, i, s) {
          if (
            (bo !== n && E(),
            e && c && y(k(i[2] === e ? o + (t.startX - t.x) : y() + e - i[1])),
            r)
          ) {
            _.offset && A();
            var u = s[2] === r,
              l = u ? a + t.startY - t.y : _() + r - s[1],
              h = O(l);
            u && l !== h && (a += h - l), _(h);
          }
          (r || e) && So();
        }),
        (t.onEnable = function () {
          Wo(d, !c && "x"),
            Bo.addEventListener("refresh", C),
            Zs(Ai, "resize", C),
            _.smooth &&
              ((_.target.style.scrollBehavior = "auto"),
              (_.smooth = y.smooth = !1)),
            M.enable();
        }),
        (t.onDisable = function () {
          Wo(d, !0),
            Ks(Ai, "resize", C),
            Bo.removeEventListener("refresh", C),
            M.kill();
        }),
        (t.lockAxis = !1 !== t.lockAxis),
        ((e = new ki(t)).iOS = Ji),
        Ji && !_() && _(1),
        Ji && Oi.ticker.add(gs),
        (u = e._dc),
        (s = Oi.to(e, {
          ease: "power4",
          paused: !0,
          scrollX: c ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Fo(_, _(), function () {
              return s.pause();
            }),
          },
          onUpdate: So,
          onComplete: u.vars.onComplete,
        })),
        e
      );
    };
  function Go() {
    return (
      (Go = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }),
      Go.apply(this, arguments)
    );
  }
  function $o(t, e, r) {
    return Math.max(t, Math.min(e, r));
  }
  (Bo.sort = function (t) {
    return oo.sort(
      t ||
        function (t, e) {
          return (
            -1e6 * (t.vars.refreshPriority || 0) +
            t.start -
            (e.start + -1e6 * (e.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (Bo.observe = function (t) {
      return new ki(t);
    }),
    (Bo.normalizeScroll = function (t) {
      if (void 0 === t) return $i;
      if (!0 === t && $i) return $i.enable();
      if (!1 === t) return $i && $i.kill();
      var e = t instanceof ki ? t : jo(t);
      return (
        $i && $i.target === e.target && $i.kill(), ys(e.target) && ($i = e), e
      );
    }),
    (Bo.core = {
      _getVelocityProp: bi,
      _inputObserver: Ho,
      _scrollers: si,
      _proxies: oi,
      bridge: {
        ss: function () {
          cs || mo("scrollStart"), (cs = us());
        },
        ref: function () {
          return Yi;
        },
      },
    }),
    _s() && Oi.registerPlugin(Bo);
  class Qo {
    advance(t) {
      var e;
      if (!this.isRunning) return;
      let r = !1;
      if (this.lerp)
        (this.value = (1 - (n = this.lerp)) * this.value + n * this.to),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (r = !0));
      else {
        this.currentTime += t;
        const e = $o(0, this.currentTime / this.duration, 1);
        r = e >= 1;
        const n = r ? 1 : this.easing(e);
        this.value = this.from + (this.to - this.from) * n;
      }
      var n;
      null == (e = this.onUpdate) || e.call(this, this.value, { completed: r }),
        r && this.stop();
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(
      t,
      e,
      { lerp: r = 0.1, duration: n = 1, easing: i = (t) => t, onUpdate: s }
    ) {
      (this.from = this.value = t),
        (this.to = e),
        (this.lerp = r),
        (this.duration = n),
        (this.easing = i),
        (this.currentTime = 0),
        (this.isRunning = !0),
        (this.onUpdate = s);
    }
  }
  function Zo(t, e) {
    let r;
    return function () {
      let n = arguments,
        i = this;
      clearTimeout(r),
        (r = setTimeout(function () {
          t.apply(i, n);
        }, e));
    };
  }
  class Ko {
    constructor(t, e) {
      (this.onWindowResize = () => {
        (this.width = window.innerWidth), (this.height = window.innerHeight);
      }),
        (this.onWrapperResize = () => {
          (this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight);
        }),
        (this.onContentResize = () => {
          const t =
            this.wrapper === window ? document.documentElement : this.wrapper;
          (this.scrollHeight = t.scrollHeight),
            (this.scrollWidth = t.scrollWidth);
        }),
        (this.wrapper = t),
        (this.content = e),
        this.wrapper === window
          ? (window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize())
          : ((this.wrapperResizeObserver = new ResizeObserver(
              Zo(this.onWrapperResize, 100)
            )),
            this.wrapperResizeObserver.observe(this.wrapper),
            this.onWrapperResize()),
        (this.contentResizeObserver = new ResizeObserver(
          Zo(this.onContentResize, 100)
        )),
        this.contentResizeObserver.observe(this.content),
        this.onContentResize();
    }
    destroy() {
      var t, e;
      window.removeEventListener("resize", this.onWindowResize, !1),
        null == (t = this.wrapperResizeObserver) || t.disconnect(),
        null == (e = this.contentResizeObserver) || e.disconnect();
    }
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height,
      };
    }
  }
  let Jo = () => ({
    events: {},
    emit(t, ...e) {
      let r = this.events[t] || [];
      for (let t = 0, n = r.length; t < n; t++) r[t](...e);
    },
    on(t, e) {
      var r;
      return (
        (null == (r = this.events[t]) ? void 0 : r.push(e)) ||
          (this.events[t] = [e]),
        () => {
          var r;
          this.events[t] =
            null == (r = this.events[t]) ? void 0 : r.filter((t) => e !== t);
        }
      );
    },
  });
  class ta {
    constructor(
      t,
      { wheelMultiplier: e = 1, touchMultiplier: r = 2, normalizeWheel: n = !1 }
    ) {
      (this.onTouchStart = (t) => {
        const { clientX: e, clientY: r } = t.targetTouches
          ? t.targetTouches[0]
          : t;
        (this.touchStart.x = e),
          (this.touchStart.y = r),
          (this.lastDelta = { x: 0, y: 0 });
      }),
        (this.onTouchMove = (t) => {
          const { clientX: e, clientY: r } = t.targetTouches
              ? t.targetTouches[0]
              : t,
            n = -(e - this.touchStart.x) * this.touchMultiplier,
            i = -(r - this.touchStart.y) * this.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = r),
            (this.lastDelta = { x: n, y: i }),
            this.emitter.emit("scroll", {
              type: "touch",
              deltaX: n,
              deltaY: i,
              event: t,
            });
        }),
        (this.onTouchEnd = (t) => {
          this.emitter.emit("scroll", {
            type: "touch",
            inertia: !0,
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: t,
          });
        }),
        (this.onWheel = (t) => {
          let { deltaX: e, deltaY: r } = t;
          this.normalizeWheel &&
            ((e = $o(-100, e, 100)), (r = $o(-100, r, 100))),
            (e *= this.wheelMultiplier),
            (r *= this.wheelMultiplier),
            this.emitter.emit("scroll", {
              type: "wheel",
              deltaX: e,
              deltaY: r,
              event: t,
            });
        }),
        (this.element = t),
        (this.wheelMultiplier = e),
        (this.touchMultiplier = r),
        (this.normalizeWheel = n),
        (this.touchStart = { x: null, y: null }),
        (this.emitter = Jo()),
        this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
          passive: !1,
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
          passive: !1,
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
          passive: !1,
        });
    }
    on(t, e) {
      return this.emitter.on(t, e);
    }
    destroy() {
      (this.emitter.events = {}),
        this.element.removeEventListener("wheel", this.onWheel, {
          passive: !1,
        }),
        this.element.removeEventListener("touchstart", this.onTouchStart, {
          passive: !1,
        }),
        this.element.removeEventListener("touchmove", this.onTouchMove, {
          passive: !1,
        }),
        this.element.removeEventListener("touchend", this.onTouchEnd, {
          passive: !1,
        });
    }
  }
  var ea = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: "normal",
      autoplay: !0,
      timelineOffset: 0,
    },
    ra = {
      duration: 1e3,
      delay: 0,
      endDelay: 0,
      easing: "easeOutElastic(1, .5)",
      round: 0,
    },
    na = [
      "translateX",
      "translateY",
      "translateZ",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "scale",
      "scaleX",
      "scaleY",
      "scaleZ",
      "skew",
      "skewX",
      "skewY",
      "perspective",
      "matrix",
      "matrix3d",
    ],
    ia = { CSS: {}, springs: {} };
  function sa(t, e, r) {
    return Math.min(Math.max(t, e), r);
  }
  function oa(t, e) {
    return t.indexOf(e) > -1;
  }
  function aa(t, e) {
    return t.apply(null, e);
  }
  var ua = {
    arr: function (t) {
      return Array.isArray(t);
    },
    obj: function (t) {
      return oa(Object.prototype.toString.call(t), "Object");
    },
    pth: function (t) {
      return ua.obj(t) && t.hasOwnProperty("totalLength");
    },
    svg: function (t) {
      return t instanceof SVGElement;
    },
    inp: function (t) {
      return t instanceof HTMLInputElement;
    },
    dom: function (t) {
      return t.nodeType || ua.svg(t);
    },
    str: function (t) {
      return "string" == typeof t;
    },
    fnc: function (t) {
      return "function" == typeof t;
    },
    und: function (t) {
      return void 0 === t;
    },
    nil: function (t) {
      return ua.und(t) || null === t;
    },
    hex: function (t) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
    },
    rgb: function (t) {
      return /^rgb/.test(t);
    },
    hsl: function (t) {
      return /^hsl/.test(t);
    },
    col: function (t) {
      return ua.hex(t) || ua.rgb(t) || ua.hsl(t);
    },
    key: function (t) {
      return (
        !ea.hasOwnProperty(t) &&
        !ra.hasOwnProperty(t) &&
        "targets" !== t &&
        "keyframes" !== t
      );
    },
  };
  function la(t) {
    var e = /\(([^)]+)\)/.exec(t);
    return e
      ? e[1].split(",").map(function (t) {
          return parseFloat(t);
        })
      : [];
  }
  function ca(t, e) {
    var r = la(t),
      n = sa(ua.und(r[0]) ? 1 : r[0], 0.1, 100),
      i = sa(ua.und(r[1]) ? 100 : r[1], 0.1, 100),
      s = sa(ua.und(r[2]) ? 10 : r[2], 0.1, 100),
      o = sa(ua.und(r[3]) ? 0 : r[3], 0.1, 100),
      a = Math.sqrt(i / n),
      u = s / (2 * Math.sqrt(i * n)),
      l = u < 1 ? a * Math.sqrt(1 - u * u) : 0,
      c = 1,
      h = u < 1 ? (u * a - o) / l : -o + a;
    function f(t) {
      var r = e ? (e * t) / 1e3 : t;
      return (
        (r =
          u < 1
            ? Math.exp(-r * u * a) * (c * Math.cos(l * r) + h * Math.sin(l * r))
            : (c + h * r) * Math.exp(-r * a)),
        0 === t || 1 === t ? t : 1 - r
      );
    }
    return e
      ? f
      : function () {
          var e = ia.springs[t];
          if (e) return e;
          for (var r = 1 / 6, n = 0, i = 0; ; )
            if (1 === f((n += r))) {
              if (++i >= 16) break;
            } else i = 0;
          var s = n * r * 1e3;
          return (ia.springs[t] = s), s;
        };
  }
  function ha(t) {
    return (
      void 0 === t && (t = 10),
      function (e) {
        return Math.ceil(sa(e, 1e-6, 1) * t) * (1 / t);
      }
    );
  }
  var fa,
    pa,
    da = (function () {
      var t = 0.1;
      function e(t, e) {
        return 1 - 3 * e + 3 * t;
      }
      function r(t, e) {
        return 3 * e - 6 * t;
      }
      function n(t) {
        return 3 * t;
      }
      function i(t, i, s) {
        return ((e(i, s) * t + r(i, s)) * t + n(i)) * t;
      }
      function s(t, i, s) {
        return 3 * e(i, s) * t * t + 2 * r(i, s) * t + n(i);
      }
      return function (e, r, n, o) {
        if (0 <= e && e <= 1 && 0 <= n && n <= 1) {
          var a = new Float32Array(11);
          if (e !== r || n !== o)
            for (var u = 0; u < 11; ++u) a[u] = i(u * t, e, n);
          return function (t) {
            return (e === r && n === o) || 0 === t || 1 === t
              ? t
              : i(l(t), r, o);
          };
        }
        function l(r) {
          for (var o = 0, u = 1; 10 !== u && a[u] <= r; ++u) o += t;
          --u;
          var l = o + ((r - a[u]) / (a[u + 1] - a[u])) * t,
            c = s(l, e, n);
          return c >= 0.001
            ? (function (t, e, r, n) {
                for (var o = 0; o < 4; ++o) {
                  var a = s(e, r, n);
                  if (0 === a) return e;
                  e -= (i(e, r, n) - t) / a;
                }
                return e;
              })(r, l, e, n)
            : 0 === c
            ? l
            : (function (t, e, r, n, s) {
                var o,
                  a,
                  u = 0;
                do {
                  (o = i((a = e + (r - e) / 2), n, s) - t) > 0
                    ? (r = a)
                    : (e = a);
                } while (Math.abs(o) > 1e-7 && ++u < 10);
                return a;
              })(r, o, o + t, e, n);
        }
      };
    })(),
    ga =
      ((fa = {
        linear: function () {
          return function (t) {
            return t;
          };
        },
      }),
      (pa = {
        Sine: function () {
          return function (t) {
            return 1 - Math.cos((t * Math.PI) / 2);
          };
        },
        Circ: function () {
          return function (t) {
            return 1 - Math.sqrt(1 - t * t);
          };
        },
        Back: function () {
          return function (t) {
            return t * t * (3 * t - 2);
          };
        },
        Bounce: function () {
          return function (t) {
            for (var e, r = 4; t < ((e = Math.pow(2, --r)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - r) -
              7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            );
          };
        },
        Elastic: function (t, e) {
          void 0 === t && (t = 1), void 0 === e && (e = 0.5);
          var r = sa(t, 1, 10),
            n = sa(e, 0.1, 2);
          return function (t) {
            return 0 === t || 1 === t
              ? t
              : -r *
                  Math.pow(2, 10 * (t - 1)) *
                  Math.sin(
                    ((t - 1 - (n / (2 * Math.PI)) * Math.asin(1 / r)) *
                      (2 * Math.PI)) /
                      n
                  );
          };
        },
      }),
      ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (t, e) {
        pa[t] = function () {
          return function (t) {
            return Math.pow(t, e + 2);
          };
        };
      }),
      Object.keys(pa).forEach(function (t) {
        var e = pa[t];
        (fa["easeIn" + t] = e),
          (fa["easeOut" + t] = function (t, r) {
            return function (n) {
              return 1 - e(t, r)(1 - n);
            };
          }),
          (fa["easeInOut" + t] = function (t, r) {
            return function (n) {
              return n < 0.5 ? e(t, r)(2 * n) / 2 : 1 - e(t, r)(-2 * n + 2) / 2;
            };
          }),
          (fa["easeOutIn" + t] = function (t, r) {
            return function (n) {
              return n < 0.5
                ? (1 - e(t, r)(1 - 2 * n)) / 2
                : (e(t, r)(2 * n - 1) + 1) / 2;
            };
          });
      }),
      fa);
  function ma(t, e) {
    if (ua.fnc(t)) return t;
    var r = t.split("(")[0],
      n = ga[r],
      i = la(t);
    switch (r) {
      case "spring":
        return ca(t, e);
      case "cubicBezier":
        return aa(da, i);
      case "steps":
        return aa(ha, i);
      default:
        return aa(n, i);
    }
  }
  function va(t) {
    try {
      return document.querySelectorAll(t);
    } catch (t) {
      return;
    }
  }
  function _a(t, e) {
    for (
      var r = t.length,
        n = arguments.length >= 2 ? arguments[1] : void 0,
        i = [],
        s = 0;
      s < r;
      s++
    )
      if (s in t) {
        var o = t[s];
        e.call(n, o, s, t) && i.push(o);
      }
    return i;
  }
  function ya(t) {
    return t.reduce(function (t, e) {
      return t.concat(ua.arr(e) ? ya(e) : e);
    }, []);
  }
  function wa(t) {
    return ua.arr(t)
      ? t
      : (ua.str(t) && (t = va(t) || t),
        t instanceof NodeList || t instanceof HTMLCollection
          ? [].slice.call(t)
          : [t]);
  }
  function ba(t, e) {
    return t.some(function (t) {
      return t === e;
    });
  }
  function xa(t) {
    var e = {};
    for (var r in t) e[r] = t[r];
    return e;
  }
  function Ta(t, e) {
    var r = xa(t);
    for (var n in t) r[n] = e.hasOwnProperty(n) ? e[n] : t[n];
    return r;
  }
  function Ma(t, e) {
    var r = xa(t);
    for (var n in e) r[n] = ua.und(t[n]) ? e[n] : t[n];
    return r;
  }
  function Sa(t) {
    return ua.rgb(t)
      ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = t)))
        ? "rgba(" + r[1] + ",1)"
        : e
      : ua.hex(t)
      ? (function (t) {
          var e = t.replace(
              /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              function (t, e, r, n) {
                return e + e + r + r + n + n;
              }
            ),
            r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
          return (
            "rgba(" +
            parseInt(r[1], 16) +
            "," +
            parseInt(r[2], 16) +
            "," +
            parseInt(r[3], 16) +
            ",1)"
          );
        })(t)
      : ua.hsl(t)
      ? (function (t) {
          var e,
            r,
            n,
            i =
              /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
              /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
            s = parseInt(i[1], 10) / 360,
            o = parseInt(i[2], 10) / 100,
            a = parseInt(i[3], 10) / 100,
            u = i[4] || 1;
          function l(t, e, r) {
            return (
              r < 0 && (r += 1),
              r > 1 && (r -= 1),
              r < 1 / 6
                ? t + 6 * (e - t) * r
                : r < 0.5
                ? e
                : r < 2 / 3
                ? t + (e - t) * (2 / 3 - r) * 6
                : t
            );
          }
          if (0 == o) e = r = n = a;
          else {
            var c = a < 0.5 ? a * (1 + o) : a + o - a * o,
              h = 2 * a - c;
            (e = l(h, c, s + 1 / 3)),
              (r = l(h, c, s)),
              (n = l(h, c, s - 1 / 3));
          }
          return (
            "rgba(" + 255 * e + "," + 255 * r + "," + 255 * n + "," + u + ")"
          );
        })(t)
      : void 0;
    var e, r;
  }
  function ka(t) {
    var e =
      /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
        t
      );
    if (e) return e[1];
  }
  function Oa(t, e) {
    return ua.fnc(t) ? t(e.target, e.id, e.total) : t;
  }
  function Ea(t, e) {
    return t.getAttribute(e);
  }
  function Aa(t, e, r) {
    if (ba([r, "deg", "rad", "turn"], ka(e))) return e;
    var n = ia.CSS[e + r];
    if (!ua.und(n)) return n;
    var i = document.createElement(t.tagName),
      s =
        t.parentNode && t.parentNode !== document
          ? t.parentNode
          : document.body;
    s.appendChild(i),
      (i.style.position = "absolute"),
      (i.style.width = 100 + r);
    var o = 100 / i.offsetWidth;
    s.removeChild(i);
    var a = o * parseFloat(e);
    return (ia.CSS[e + r] = a), a;
  }
  function Ca(t, e, r) {
    if (e in t.style) {
      var n = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        i = t.style[e] || getComputedStyle(t).getPropertyValue(n) || "0";
      return r ? Aa(t, i, r) : i;
    }
  }
  function Pa(t, e) {
    return ua.dom(t) && !ua.inp(t) && (!ua.nil(Ea(t, e)) || (ua.svg(t) && t[e]))
      ? "attribute"
      : ua.dom(t) && ba(na, e)
      ? "transform"
      : ua.dom(t) && "transform" !== e && Ca(t, e)
      ? "css"
      : null != t[e]
      ? "object"
      : void 0;
  }
  function Da(t) {
    if (ua.dom(t)) {
      for (
        var e,
          r = t.style.transform || "",
          n = /(\w+)\(([^)]*)\)/g,
          i = new Map();
        (e = n.exec(r));

      )
        i.set(e[1], e[2]);
      return i;
    }
  }
  function Ra(t, e, r, n) {
    var i = oa(e, "scale")
        ? 1
        : 0 +
          (function (t) {
            return oa(t, "translate") || "perspective" === t
              ? "px"
              : oa(t, "rotate") || oa(t, "skew")
              ? "deg"
              : void 0;
          })(e),
      s = Da(t).get(e) || i;
    return (
      r && (r.transforms.list.set(e, s), (r.transforms.last = e)),
      n ? Aa(t, s, n) : s
    );
  }
  function za(t, e, r, n) {
    switch (Pa(t, e)) {
      case "transform":
        return Ra(t, e, n, r);
      case "css":
        return Ca(t, e, r);
      case "attribute":
        return Ea(t, e);
      default:
        return t[e] || 0;
    }
  }
  function La(t, e) {
    var r = /^(\*=|\+=|-=)/.exec(t);
    if (!r) return t;
    var n = ka(t) || 0,
      i = parseFloat(e),
      s = parseFloat(t.replace(r[0], ""));
    switch (r[0][0]) {
      case "+":
        return i + s + n;
      case "-":
        return i - s + n;
      case "*":
        return i * s + n;
    }
  }
  function Fa(t, e) {
    if (ua.col(t)) return Sa(t);
    if (/\s/g.test(t)) return t;
    var r = ka(t),
      n = r ? t.substr(0, t.length - r.length) : t;
    return e ? n + e : n;
  }
  function Ia(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function Ba(t) {
    for (var e, r = t.points, n = 0, i = 0; i < r.numberOfItems; i++) {
      var s = r.getItem(i);
      i > 0 && (n += Ia(e, s)), (e = s);
    }
    return n;
  }
  function Ya(t) {
    if (t.getTotalLength) return t.getTotalLength();
    switch (t.tagName.toLowerCase()) {
      case "circle":
        return (function (t) {
          return 2 * Math.PI * Ea(t, "r");
        })(t);
      case "rect":
        return (function (t) {
          return 2 * Ea(t, "width") + 2 * Ea(t, "height");
        })(t);
      case "line":
        return (function (t) {
          return Ia(
            { x: Ea(t, "x1"), y: Ea(t, "y1") },
            { x: Ea(t, "x2"), y: Ea(t, "y2") }
          );
        })(t);
      case "polyline":
        return Ba(t);
      case "polygon":
        return (function (t) {
          var e = t.points;
          return Ba(t) + Ia(e.getItem(e.numberOfItems - 1), e.getItem(0));
        })(t);
    }
  }
  function Xa(t, e) {
    var r = e || {},
      n =
        r.el ||
        (function (t) {
          for (var e = t.parentNode; ua.svg(e) && ua.svg(e.parentNode); )
            e = e.parentNode;
          return e;
        })(t),
      i = n.getBoundingClientRect(),
      s = Ea(n, "viewBox"),
      o = i.width,
      a = i.height,
      u = r.viewBox || (s ? s.split(" ") : [0, 0, o, a]);
    return {
      el: n,
      viewBox: u,
      x: u[0] / 1,
      y: u[1] / 1,
      w: o,
      h: a,
      vW: u[2],
      vH: u[3],
    };
  }
  function Wa(t, e, r) {
    function n(r) {
      void 0 === r && (r = 0);
      var n = e + r >= 1 ? e + r : 0;
      return t.el.getPointAtLength(n);
    }
    var i = Xa(t.el, t.svg),
      s = n(),
      o = n(-1),
      a = n(1),
      u = r ? 1 : i.w / i.vW,
      l = r ? 1 : i.h / i.vH;
    switch (t.property) {
      case "x":
        return (s.x - i.x) * u;
      case "y":
        return (s.y - i.y) * l;
      case "angle":
        return (180 * Math.atan2(a.y - o.y, a.x - o.x)) / Math.PI;
    }
  }
  function Na(t, e) {
    var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
      n = Fa(ua.pth(t) ? t.totalLength : t, e) + "";
    return {
      original: n,
      numbers: n.match(r) ? n.match(r).map(Number) : [0],
      strings: ua.str(t) || e ? n.split(r) : [],
    };
  }
  function qa(t) {
    return _a(t ? ya(ua.arr(t) ? t.map(wa) : wa(t)) : [], function (t, e, r) {
      return r.indexOf(t) === e;
    });
  }
  function Ha(t) {
    var e = qa(t);
    return e.map(function (t, r) {
      return { target: t, id: r, total: e.length, transforms: { list: Da(t) } };
    });
  }
  function Va(t, e) {
    var r = xa(e);
    if ((/^spring/.test(r.easing) && (r.duration = ca(r.easing)), ua.arr(t))) {
      var n = t.length;
      2 === n && !ua.obj(t[0])
        ? (t = { value: t })
        : ua.fnc(e.duration) || (r.duration = e.duration / n);
    }
    var i = ua.arr(t) ? t : [t];
    return i
      .map(function (t, r) {
        var n = ua.obj(t) && !ua.pth(t) ? t : { value: t };
        return (
          ua.und(n.delay) && (n.delay = r ? 0 : e.delay),
          ua.und(n.endDelay) &&
            (n.endDelay = r === i.length - 1 ? e.endDelay : 0),
          n
        );
      })
      .map(function (t) {
        return Ma(t, r);
      });
  }
  function Ua(t, e) {
    var r = [],
      n = e.keyframes;
    for (var i in (n &&
      (e = Ma(
        (function (t) {
          for (
            var e = _a(
                ya(
                  t.map(function (t) {
                    return Object.keys(t);
                  })
                ),
                function (t) {
                  return ua.key(t);
                }
              ).reduce(function (t, e) {
                return t.indexOf(e) < 0 && t.push(e), t;
              }, []),
              r = {},
              n = function (n) {
                var i = e[n];
                r[i] = t.map(function (t) {
                  var e = {};
                  for (var r in t)
                    ua.key(r) ? r == i && (e.value = t[r]) : (e[r] = t[r]);
                  return e;
                });
              },
              i = 0;
            i < e.length;
            i++
          )
            n(i);
          return r;
        })(n),
        e
      )),
    e))
      ua.key(i) && r.push({ name: i, tweens: Va(e[i], t) });
    return r;
  }
  function ja(t, e) {
    var r;
    return t.tweens.map(function (n) {
      var i = (function (t, e) {
          var r = {};
          for (var n in t) {
            var i = Oa(t[n], e);
            ua.arr(i) &&
              1 ===
                (i = i.map(function (t) {
                  return Oa(t, e);
                })).length &&
              (i = i[0]),
              (r[n] = i);
          }
          return (
            (r.duration = parseFloat(r.duration)),
            (r.delay = parseFloat(r.delay)),
            r
          );
        })(n, e),
        s = i.value,
        o = ua.arr(s) ? s[1] : s,
        a = ka(o),
        u = za(e.target, t.name, a, e),
        l = r ? r.to.original : u,
        c = ua.arr(s) ? s[0] : l,
        h = ka(c) || ka(u),
        f = a || h;
      return (
        ua.und(o) && (o = l),
        (i.from = Na(c, f)),
        (i.to = Na(La(o, c), f)),
        (i.start = r ? r.end : 0),
        (i.end = i.start + i.delay + i.duration + i.endDelay),
        (i.easing = ma(i.easing, i.duration)),
        (i.isPath = ua.pth(s)),
        (i.isPathTargetInsideSVG = i.isPath && ua.svg(e.target)),
        (i.isColor = ua.col(i.from.original)),
        i.isColor && (i.round = 1),
        (r = i),
        i
      );
    });
  }
  var Ga = {
    css: function (t, e, r) {
      return (t.style[e] = r);
    },
    attribute: function (t, e, r) {
      return t.setAttribute(e, r);
    },
    object: function (t, e, r) {
      return (t[e] = r);
    },
    transform: function (t, e, r, n, i) {
      if ((n.list.set(e, r), e === n.last || i)) {
        var s = "";
        n.list.forEach(function (t, e) {
          s += e + "(" + t + ") ";
        }),
          (t.style.transform = s);
      }
    },
  };
  function $a(t, e) {
    Ha(t).forEach(function (t) {
      for (var r in e) {
        var n = Oa(e[r], t),
          i = t.target,
          s = ka(n),
          o = za(i, r, s, t),
          a = La(Fa(n, s || ka(o)), o),
          u = Pa(i, r);
        Ga[u](i, r, a, t.transforms, !0);
      }
    });
  }
  function Qa(t, e) {
    return _a(
      ya(
        t.map(function (t) {
          return e.map(function (e) {
            return (function (t, e) {
              var r = Pa(t.target, e.name);
              if (r) {
                var n = ja(e, t),
                  i = n[n.length - 1];
                return {
                  type: r,
                  property: e.name,
                  animatable: t,
                  tweens: n,
                  duration: i.end,
                  delay: n[0].delay,
                  endDelay: i.endDelay,
                };
              }
            })(t, e);
          });
        })
      ),
      function (t) {
        return !ua.und(t);
      }
    );
  }
  function Za(t, e) {
    var r = t.length,
      n = function (t) {
        return t.timelineOffset ? t.timelineOffset : 0;
      },
      i = {};
    return (
      (i.duration = r
        ? Math.max.apply(
            Math,
            t.map(function (t) {
              return n(t) + t.duration;
            })
          )
        : e.duration),
      (i.delay = r
        ? Math.min.apply(
            Math,
            t.map(function (t) {
              return n(t) + t.delay;
            })
          )
        : e.delay),
      (i.endDelay = r
        ? i.duration -
          Math.max.apply(
            Math,
            t.map(function (t) {
              return n(t) + t.duration - t.endDelay;
            })
          )
        : e.endDelay),
      i
    );
  }
  var Ka = 0;
  var Ja = [],
    tu = (function () {
      var t;
      function e(r) {
        for (var n = Ja.length, i = 0; i < n; ) {
          var s = Ja[i];
          s.paused ? (Ja.splice(i, 1), n--) : (s.tick(r), i++);
        }
        t = i > 0 ? requestAnimationFrame(e) : void 0;
      }
      return (
        "undefined" != typeof document &&
          document.addEventListener("visibilitychange", function () {
            ru.suspendWhenDocumentHidden &&
              (eu()
                ? (t = cancelAnimationFrame(t))
                : (Ja.forEach(function (t) {
                    return t._onDocumentVisibility();
                  }),
                  tu()));
          }),
        function () {
          t ||
            (eu() && ru.suspendWhenDocumentHidden) ||
            !(Ja.length > 0) ||
            (t = requestAnimationFrame(e));
        }
      );
    })();
  function eu() {
    return !!document && document.hidden;
  }
  function ru(t) {
    void 0 === t && (t = {});
    var e,
      r = 0,
      n = 0,
      i = 0,
      s = 0,
      o = null;
    function a(t) {
      var e =
        window.Promise &&
        new Promise(function (t) {
          return (o = t);
        });
      return (t.finished = e), e;
    }
    var u = (function (t) {
      var e = Ta(ea, t),
        r = Ta(ra, t),
        n = Ua(r, t),
        i = Ha(t.targets),
        s = Qa(i, n),
        o = Za(s, r),
        a = Ka;
      return (
        Ka++,
        Ma(e, {
          id: a,
          children: [],
          animatables: i,
          animations: s,
          duration: o.duration,
          delay: o.delay,
          endDelay: o.endDelay,
        })
      );
    })(t);
    a(u);
    function l() {
      var t = u.direction;
      "alternate" !== t &&
        (u.direction = "normal" !== t ? "normal" : "reverse"),
        (u.reversed = !u.reversed),
        e.forEach(function (t) {
          return (t.reversed = u.reversed);
        });
    }
    function c(t) {
      return u.reversed ? u.duration - t : t;
    }
    function h() {
      (r = 0), (n = c(u.currentTime) * (1 / ru.speed));
    }
    function f(t, e) {
      e && e.seek(t - e.timelineOffset);
    }
    function p(t) {
      for (var e = 0, r = u.animations, n = r.length; e < n; ) {
        var i = r[e],
          s = i.animatable,
          o = i.tweens,
          a = o.length - 1,
          l = o[a];
        a &&
          (l =
            _a(o, function (e) {
              return t < e.end;
            })[0] || l);
        for (
          var c = sa(t - l.start - l.delay, 0, l.duration) / l.duration,
            h = isNaN(c) ? 1 : l.easing(c),
            f = l.to.strings,
            p = l.round,
            d = [],
            g = l.to.numbers.length,
            m = void 0,
            v = 0;
          v < g;
          v++
        ) {
          var _ = void 0,
            y = l.to.numbers[v],
            w = l.from.numbers[v] || 0;
          (_ = l.isPath
            ? Wa(l.value, h * y, l.isPathTargetInsideSVG)
            : w + h * (y - w)),
            p && ((l.isColor && v > 2) || (_ = Math.round(_ * p) / p)),
            d.push(_);
        }
        var b = f.length;
        if (b) {
          m = f[0];
          for (var x = 0; x < b; x++) {
            f[x];
            var T = f[x + 1],
              M = d[x];
            isNaN(M) || (m += T ? M + T : M + " ");
          }
        } else m = d[0];
        Ga[i.type](s.target, i.property, m, s.transforms),
          (i.currentValue = m),
          e++;
      }
    }
    function d(t) {
      u[t] && !u.passThrough && u[t](u);
    }
    function g(t) {
      var h = u.duration,
        g = u.delay,
        m = h - u.endDelay,
        v = c(t);
      (u.progress = sa((v / h) * 100, 0, 100)),
        (u.reversePlayback = v < u.currentTime),
        e &&
          (function (t) {
            if (u.reversePlayback) for (var r = s; r--; ) f(t, e[r]);
            else for (var n = 0; n < s; n++) f(t, e[n]);
          })(v),
        !u.began && u.currentTime > 0 && ((u.began = !0), d("begin")),
        !u.loopBegan &&
          u.currentTime > 0 &&
          ((u.loopBegan = !0), d("loopBegin")),
        v <= g && 0 !== u.currentTime && p(0),
        ((v >= m && u.currentTime !== h) || !h) && p(h),
        v > g && v < m
          ? (u.changeBegan ||
              ((u.changeBegan = !0),
              (u.changeCompleted = !1),
              d("changeBegin")),
            d("change"),
            p(v))
          : u.changeBegan &&
            ((u.changeCompleted = !0),
            (u.changeBegan = !1),
            d("changeComplete")),
        (u.currentTime = sa(v, 0, h)),
        u.began && d("update"),
        t >= h &&
          ((n = 0),
          u.remaining && !0 !== u.remaining && u.remaining--,
          u.remaining
            ? ((r = i),
              d("loopComplete"),
              (u.loopBegan = !1),
              "alternate" === u.direction && l())
            : ((u.paused = !0),
              u.completed ||
                ((u.completed = !0),
                d("loopComplete"),
                d("complete"),
                !u.passThrough && "Promise" in window && (o(), a(u)))));
    }
    return (
      (u.reset = function () {
        var t = u.direction;
        (u.passThrough = !1),
          (u.currentTime = 0),
          (u.progress = 0),
          (u.paused = !0),
          (u.began = !1),
          (u.loopBegan = !1),
          (u.changeBegan = !1),
          (u.completed = !1),
          (u.changeCompleted = !1),
          (u.reversePlayback = !1),
          (u.reversed = "reverse" === t),
          (u.remaining = u.loop),
          (e = u.children);
        for (var r = (s = e.length); r--; ) u.children[r].reset();
        ((u.reversed && !0 !== u.loop) ||
          ("alternate" === t && 1 === u.loop)) &&
          u.remaining++,
          p(u.reversed ? u.duration : 0);
      }),
      (u._onDocumentVisibility = h),
      (u.set = function (t, e) {
        return $a(t, e), u;
      }),
      (u.tick = function (t) {
        (i = t), r || (r = i), g((i + (n - r)) * ru.speed);
      }),
      (u.seek = function (t) {
        g(c(t));
      }),
      (u.pause = function () {
        (u.paused = !0), h();
      }),
      (u.play = function () {
        u.paused &&
          (u.completed && u.reset(), (u.paused = !1), Ja.push(u), h(), tu());
      }),
      (u.reverse = function () {
        l(), (u.completed = !u.reversed), h();
      }),
      (u.restart = function () {
        u.reset(), u.play();
      }),
      (u.remove = function (t) {
        iu(qa(t), u);
      }),
      u.reset(),
      u.autoplay && u.play(),
      u
    );
  }
  function nu(t, e) {
    for (var r = e.length; r--; )
      ba(t, e[r].animatable.target) && e.splice(r, 1);
  }
  function iu(t, e) {
    var r = e.animations,
      n = e.children;
    nu(t, r);
    for (var i = n.length; i--; ) {
      var s = n[i],
        o = s.animations;
      nu(t, o), o.length || s.children.length || n.splice(i, 1);
    }
    r.length || n.length || e.pause();
  }
  (ru.version = "3.2.1"),
    (ru.speed = 1),
    (ru.suspendWhenDocumentHidden = !0),
    (ru.running = Ja),
    (ru.remove = function (t) {
      for (var e = qa(t), r = Ja.length; r--; ) {
        iu(e, Ja[r]);
      }
    }),
    (ru.get = za),
    (ru.set = $a),
    (ru.convertPx = Aa),
    (ru.path = function (t, e) {
      var r = ua.str(t) ? va(t)[0] : t,
        n = e || 100;
      return function (t) {
        return {
          property: t,
          el: r,
          svg: Xa(r),
          totalLength: Ya(r) * (n / 100),
        };
      };
    }),
    (ru.setDashoffset = function (t) {
      var e = Ya(t);
      return t.setAttribute("stroke-dasharray", e), e;
    }),
    (ru.stagger = function (t, e) {
      void 0 === e && (e = {});
      var r = e.direction || "normal",
        n = e.easing ? ma(e.easing) : null,
        i = e.grid,
        s = e.axis,
        o = e.from || 0,
        a = "first" === o,
        u = "center" === o,
        l = "last" === o,
        c = ua.arr(t),
        h = c ? parseFloat(t[0]) : parseFloat(t),
        f = c ? parseFloat(t[1]) : 0,
        p = ka(c ? t[1] : t) || 0,
        d = e.start || 0 + (c ? h : 0),
        g = [],
        m = 0;
      return function (t, e, v) {
        if (
          (a && (o = 0), u && (o = (v - 1) / 2), l && (o = v - 1), !g.length)
        ) {
          for (var _ = 0; _ < v; _++) {
            if (i) {
              var y = u ? (i[0] - 1) / 2 : o % i[0],
                w = u ? (i[1] - 1) / 2 : Math.floor(o / i[0]),
                b = y - (_ % i[0]),
                x = w - Math.floor(_ / i[0]),
                T = Math.sqrt(b * b + x * x);
              "x" === s && (T = -b), "y" === s && (T = -x), g.push(T);
            } else g.push(Math.abs(o - _));
            m = Math.max.apply(Math, g);
          }
          n &&
            (g = g.map(function (t) {
              return n(t / m) * m;
            })),
            "reverse" === r &&
              (g = g.map(function (t) {
                return s ? (t < 0 ? -1 * t : -t) : Math.abs(m - t);
              }));
        }
        return d + (c ? (f - h) / m : h) * (Math.round(100 * g[e]) / 100) + p;
      };
    }),
    (ru.timeline = function (t) {
      void 0 === t && (t = {});
      var e = ru(t);
      return (
        (e.duration = 0),
        (e.add = function (r, n) {
          var i = Ja.indexOf(e),
            s = e.children;
          function o(t) {
            t.passThrough = !0;
          }
          i > -1 && Ja.splice(i, 1);
          for (var a = 0; a < s.length; a++) o(s[a]);
          var u = Ma(r, Ta(ra, t));
          u.targets = u.targets || t.targets;
          var l = e.duration;
          (u.autoplay = !1),
            (u.direction = e.direction),
            (u.timelineOffset = ua.und(n) ? l : La(n, l)),
            o(e),
            e.seek(u.timelineOffset);
          var c = ru(u);
          o(c), s.push(c);
          var h = Za(s, t);
          return (
            (e.delay = h.delay),
            (e.endDelay = h.endDelay),
            (e.duration = h.duration),
            e.seek(0),
            e.reset(),
            e.autoplay && e.play(),
            e
          );
        }),
        e
      );
    }),
    (ru.easing = ma),
    (ru.penner = ga),
    (ru.random = function (t, e) {
      return Math.floor(Math.random() * (e - t + 1)) + t;
    });
  const su = ru;
  Wn.registerPlugin(Bo);
  const ou = new (class {
    constructor({
      direction: t,
      gestureDirection: e,
      mouseMultiplier: r,
      smooth: n,
      wrapper: i = window,
      content: s = document.documentElement,
      wheelEventsTarget: o = i,
      smoothWheel: a = null == n || n,
      smoothTouch: u = !1,
      syncTouch: l = !1,
      syncTouchLerp: c = 0.1,
      touchInertiaMultiplier: h = 35,
      duration: f,
      easing: p = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: d = f ? null : 0.1,
      infinite: g = !1,
      orientation: m = null != t ? t : "vertical",
      gestureOrientation: v = null != e ? e : "vertical",
      touchMultiplier: _ = 1,
      wheelMultiplier: y = null != r ? r : 1,
      normalizeWheel: w = !1,
    } = {}) {
      (this.onVirtualScroll = ({
        type: t,
        inertia: e,
        deltaX: r,
        deltaY: n,
        event: i,
      }) => {
        if (i.ctrlKey) return;
        const s = "touch" === t,
          o = "wheel" === t;
        if (
          ("vertical" === this.options.gestureOrientation && 0 === n) ||
          ("horizontal" === this.options.gestureOrientation && 0 === r) ||
          (s &&
            "vertical" === this.options.gestureOrientation &&
            0 === this.scroll &&
            !this.options.infinite &&
            n <= 0)
        )
          return;
        if (
          i
            .composedPath()
            .find((t) =>
              null == t || null == t.hasAttribute
                ? void 0
                : t.hasAttribute("data-lenis-prevent")
            )
        )
          return;
        if (this.isStopped || this.isLocked) return void i.preventDefault();
        if (
          ((this.isSmooth =
            ((this.options.smoothTouch || this.options.syncTouch) && s) ||
            (this.options.smoothWheel && o)),
          !this.isSmooth)
        )
          return (this.isScrolling = !1), void this.animate.stop();
        i.preventDefault();
        let a = n;
        "both" === this.options.gestureOrientation
          ? (a = Math.abs(n) > Math.abs(r) ? n : r)
          : "horizontal" === this.options.gestureOrientation && (a = r);
        const u = s && this.options.syncTouch,
          l = s && e && Math.abs(a) > 1;
        l && (a = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + a,
            Go(
              { programmatic: !1 },
              u && { lerp: l ? this.syncTouchLerp : 0.4 }
            )
          );
      }),
        (this.onScroll = () => {
          if (!this.isScrolling) {
            const t = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.velocity = 0),
              (this.direction = Math.sign(this.animatedScroll - t)),
              this.emit();
          }
        }),
        t &&
          console.warn(
            "Lenis: `direction` option is deprecated, use `orientation` instead"
          ),
        e &&
          console.warn(
            "Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"
          ),
        r &&
          console.warn(
            "Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"
          ),
        n &&
          console.warn(
            "Lenis: `smooth` option is deprecated, use `smoothWheel` instead"
          ),
        (window.lenisVersion = "1.0.10"),
        (i !== document.documentElement && i !== document.body) || (i = window),
        (this.options = {
          wrapper: i,
          content: s,
          wheelEventsTarget: o,
          smoothWheel: a,
          smoothTouch: u,
          syncTouch: l,
          syncTouchLerp: c,
          touchInertiaMultiplier: h,
          duration: f,
          easing: p,
          lerp: d,
          infinite: g,
          gestureOrientation: v,
          orientation: m,
          touchMultiplier: _,
          wheelMultiplier: y,
          normalizeWheel: w,
        }),
        (this.dimensions = new Ko(i, s)),
        this.rootElement.classList.add("lenis"),
        (this.velocity = 0),
        (this.isStopped = !1),
        (this.isSmooth = a || u),
        (this.isScrolling = !1),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        (this.animate = new Qo()),
        (this.emitter = Jo()),
        this.options.wrapper.addEventListener("scroll", this.onScroll, {
          passive: !1,
        }),
        (this.virtualScroll = new ta(o, {
          touchMultiplier: _,
          wheelMultiplier: y,
          normalizeWheel: w,
        })),
        this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      (this.emitter.events = {}),
        this.options.wrapper.removeEventListener("scroll", this.onScroll, {
          passive: !1,
        }),
        this.virtualScroll.destroy();
    }
    on(t, e) {
      return this.emitter.on(t, e);
    }
    off(t, e) {
      var r;
      this.emitter.events[t] =
        null == (r = this.emitter.events[t])
          ? void 0
          : r.filter((t) => e !== t);
    }
    setScroll(t) {
      this.isHorizontal
        ? (this.rootElement.scrollLeft = t)
        : (this.rootElement.scrollTop = t);
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      (this.isLocked = !1),
        (this.isScrolling = !1),
        (this.velocity = 0),
        this.animate.stop();
    }
    start() {
      (this.isStopped = !1), this.reset();
    }
    stop() {
      (this.isStopped = !0), this.animate.stop(), this.reset();
    }
    raf(t) {
      const e = t - (this.time || t);
      (this.time = t), this.animate.advance(0.001 * e);
    }
    scrollTo(
      t,
      {
        offset: e = 0,
        immediate: r = !1,
        lock: n = !1,
        duration: i = this.options.duration,
        easing: s = this.options.easing,
        lerp: o = !i && this.options.lerp,
        onComplete: a = null,
        force: u = !1,
        programmatic: l = !0,
      } = {}
    ) {
      if (!this.isStopped || u) {
        if (["top", "left", "start"].includes(t)) t = 0;
        else if (["bottom", "right", "end"].includes(t)) t = this.limit;
        else {
          var c;
          let r;
          if (
            ("string" == typeof t
              ? (r = document.querySelector(t))
              : null != (c = t) && c.nodeType && (r = t),
            r)
          ) {
            if (this.options.wrapper !== window) {
              const t = this.options.wrapper.getBoundingClientRect();
              e -= this.isHorizontal ? t.left : t.top;
            }
            const n = r.getBoundingClientRect();
            t = (this.isHorizontal ? n.left : n.top) + this.animatedScroll;
          }
        }
        if ("number" == typeof t) {
          if (
            ((t += e),
            this.options.infinite
              ? l && (this.targetScroll = this.animatedScroll = this.scroll)
              : (t = $o(0, t, this.limit)),
            r)
          )
            return (
              (this.animatedScroll = this.targetScroll = t),
              this.setScroll(this.scroll),
              this.reset(),
              this.emit(),
              void (null == a || a())
            );
          if (!l) {
            if (t === this.targetScroll) return;
            this.targetScroll = t;
          }
          this.animate.fromTo(this.animatedScroll, t, {
            duration: i,
            easing: s,
            lerp: o,
            onUpdate: (t, { completed: e }) => {
              n && (this.isLocked = !0),
                (this.isScrolling = !0),
                (this.velocity = t - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = t),
                this.setScroll(this.scroll),
                l && (this.targetScroll = t),
                e &&
                  (n && (this.isLocked = !1),
                  requestAnimationFrame(() => {
                    this.isScrolling = !1;
                  }),
                  (this.velocity = 0),
                  null == a || a()),
                this.emit();
            },
          });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window
        ? this.options.content
        : this.options.wrapper;
    }
    get limit() {
      return this.isHorizontal
        ? this.dimensions.limit.x
        : this.dimensions.limit.y;
    }
    get isHorizontal() {
      return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
      return this.isHorizontal
        ? this.rootElement.scrollLeft
        : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite
        ? (function (t, e) {
            let r = t % e;
            return ((e > 0 && r < 0) || (e < 0 && r > 0)) && (r += e), r;
          })(this.animatedScroll, this.limit)
        : this.animatedScroll;
    }
    get progress() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return this.__isSmooth;
    }
    set isSmooth(t) {
      this.__isSmooth !== t &&
        (this.rootElement.classList.toggle("lenis-smooth", t),
        (this.__isSmooth = t));
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(t) {
      this.__isScrolling !== t &&
        (this.rootElement.classList.toggle("lenis-scrolling", t),
        (this.__isScrolling = t));
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(t) {
      this.__isStopped !== t &&
        (this.rootElement.classList.toggle("lenis-stopped", t),
        (this.__isStopped = t));
    }
  })();
  ou.on("scroll", (t) => {}),
    requestAnimationFrame(function t(e) {
      ou.raf(e), requestAnimationFrame(t);
    }),
    Wn.fromTo(
      ".cover",
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".cover",
          start: "center",
          end: "820",
          scrub: !0,
        },
      }
    ),
    Wn.utils.toArray(".gallery__left .gallery__item").forEach((t) => {
      Wn.fromTo(
        t,
        { opacity: 0, x: -150 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: { trigger: t, start: "-850", end: "-100", scrub: !0 },
        }
      );
    }),
    Wn.utils.toArray(".gallery__right .gallery__item").forEach((t) => {
      Wn.fromTo(
        t,
        { opacity: 0, x: 150 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: { trigger: t, start: "-750", end: "top", scrub: !0 },
        }
      );
    }),
    su({
      targets: ".path",
      d: [
        {
          value: [
            'M 815.232 989.736 c -8.712 -13.464 -23.496 -27.192 -37.488 -27.192 c -0.528 0 -0.792 0 -1.32 0 h -6.072 c -76.824 0 -139.392 -62.568 -139.392 -139.392 c 0 -7.128 0.792 -13.992 1.848 -20.328 c 183.216 -39.864 321.024 -203.28 321.024 -398.376 c 0 -19.272 -13.464 -29.304 -39.864 -29.832 c -0.792 -80.52 -61.776 -147.048 -140.184 -156.024 l 92.136 -135.96 c 16.368 -24.024 10.032 -57.024 -13.992 -73.392 c -24.024 -16.368 -57.024 -10.032 -73.392 13.992 l -101.904 150.216 c -36.168 -33.264 -83.952 -52.8 -134.904 -52.8 c -71.28 0 -137.28 38.808 -172.656 100.056 c -10.56 -2.112 -21.384 -3.432 -32.472 -3.432 c -86.856 0 -157.608 70.488 -158.4 157.08 c -22.968 1.32 -39.864 16.368 -39.864 29.832 c 0 195.096 137.808 358.512 321.024 398.376 c 1.056 6.336 1.848 13.2 1.848 20.328 c 0 76.824 -62.568 139.392 -139.392 139.392 h -6.072 c -0.528 0 -0.792 0 -1.32 0 c -13.992 0 -28.776 13.728 -37.488 27.192 l -38.016 59.928 c -6.336 10.032 -7.392 20.592 -2.64 29.04 c 4.752 8.448 14.256 13.464 26.136 13.464 h 567.6 c 11.88 0 21.384 -4.752 26.136 -13.464 c 4.752 -8.448 3.696 -19.272 -2.64 -29.04 L 815.232 989.736 z"',
          ],
        },
        {
          value: [
            "M 815.232 989.736 c -8.712 -13.464 -23.496 -27.192 -37.488 -27.192 c -0.528 0 -0.792 0 -1.32 0 h -6.072 c -76.824 0 -139.392 -62.568 -139.392 -139.392 c 0 -7.128 0.792 -13.992 1.848 -20.328 c 183.216 -39.864 321.024 -203.28 321.024 -398.376 c 0 -19.272 -13.464 -29.304 -39.864 -29.832 c -0.792 -80.52 -61.776 -147.048 -140.184 -156.024 l 92.136 -135.96 c 16.368 -24.024 10.032 -57.024 -13.992 -73.392 c -24.024 -16.368 -57.024 -10.032 -73.392 13.992 l -101.904 150.216 c -36.168 -33.264 -83.952 -52.8 -134.904 -52.8 c -71.28 0 -137.28 38.808 -172.656 100.056 c -10.56 -2.112 -21.384 -3.432 -32.472 -3.432 c -86.856 0 -157.608 70.488 -158.4 157.08 c -22.968 1.32 -39.864 16.368 -39.864 29.832 c 0 195.096 137.808 358.512 321.024 398.376 c 1.056 6.336 1.848 13.2 1.848 20.328 c 0 76.824 -62.568 139.392 -139.392 139.392 h -6.072 c -0.528 0 -0.792 0 -1.32 0 c -13.992 0 -28.776 13.728 -37.488 27.192 l -38.016 59.928 c -6.336 10.032 -7.392 20.592 -2.64 29.04 c 4.752 8.448 14.256 13.464 26.136 13.464 h 567.6 c 11.88 0 21.384 -4.752 26.136 -13.464 c 4.752 -8.448 3.696 -19.272 -2.64 -29.04 L 815.232 989.736 z",
          ],
        },
        {
          value: [
            "M 948 528 V 309.6 V 184.8 c 0 -117.6 19.2 -184.8 -132 -184.8 c 0 0 -223.2 2.4 -273.6 0 c -158.4 0 -165.6 26.4 -165.6 184.8 v 124.8 v 218.4 v 124.8 c 0 158.4 7.2 184.8 165.6 184.8 c 12 0 36 0 62.4 0 v 432 c 0 31.2 26.4 57.6 57.6 57.6 c 31.2 0 57.6 -26.4 57.6 -57.6 V 837.6 c 52.8 0 93.6 0 93.6 0 c 151.2 0 132 -67.2 132 -184.8 C 948 652.8 948 528 948 528 z",
          ],
        },
      ],
      easing: "easeInOutSine",
      duration: 7e3,
      loop: !0,
    }),
    (window.FLS = !0),
    (function (t) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          t(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (t) {
      let e = !0 === t ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    });
})();
