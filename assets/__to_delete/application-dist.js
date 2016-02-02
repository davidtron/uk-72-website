/*!
 * jQuery JavaScript Library v1.10.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-05-24T18:39Z
 */
!function (t, e) {
    function n(t) {
        var e = t.length, n = ce.type(t);
        return ce.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function r(t) {
        var e = Ce[t] = {};
        return ce.each(t.match(de) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function i(t, n, r, i) {
        if (ce.acceptData(t)) {
            var o, a, s = ce.expando, l = t.nodeType, u = l ? ce.cache : t, c = l ? t[s] : t[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== e || "string" != typeof n)return c || (c = l ? t[s] = ee.pop() || ce.guid++ : s), u[c] || (u[c] = l ? {} : {toJSON: ce.noop}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = ce.extend(u[c], n) : u[c].data = ce.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== e && (a[ce.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[ce.camelCase(n)])) : o = a, o
        }
    }

    function o(t, e, n) {
        if (ce.acceptData(t)) {
            var r, i, o = t.nodeType, a = o ? ce.cache : t, l = o ? t[ce.expando] : ce.expando;
            if (a[l]) {
                if (e && (r = n ? a[l] : a[l].data)) {
                    ce.isArray(e) ? e = e.concat(ce.map(e, ce.camelCase)) : e in r ? e = [e] : (e = ce.camelCase(e), e = e in r ? [e] : e.split(" ")), i = e.length;
                    for (; i--;)delete r[e[i]];
                    if (n ? !s(r) : !ce.isEmptyObject(r))return
                }
                (n || (delete a[l].data, s(a[l]))) && (o ? ce.cleanData([t], !0) : ce.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
            }
        }
    }

    function a(t, n, r) {
        if (r === e && 1 === t.nodeType) {
            var i = "data-" + n.replace(Ee, "-$1").toLowerCase();
            if (r = t.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Te.test(r) ? ce.parseJSON(r) : r
                } catch (o) {
                }
                ce.data(t, n, r)
            } else r = e
        }
        return r
    }

    function s(t) {
        var e;
        for (e in t)if (("data" !== e || !ce.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
        return !0
    }

    function l() {
        return !0
    }

    function u() {
        return !1
    }

    function c() {
        try {
            return J.activeElement
        } catch (t) {
        }
    }

    function f(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function d(t, e, n) {
        if (ce.isFunction(e))return ce.grep(t, function (t, r) {
            return !!e.call(t, r, t) !== n
        });
        if (e.nodeType)return ce.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (Ie.test(e))return ce.filter(e, t, n);
            e = ce.filter(e, t)
        }
        return ce.grep(t, function (t) {
            return ce.inArray(t, e) >= 0 !== n
        })
    }

    function h(t) {
        var e = Ve.split("|"), n = t.createDocumentFragment();
        if (n.createElement)for (; e.length;)n.createElement(e.pop());
        return n
    }

    function p(t, e) {
        return ce.nodeName(t, "table") && ce.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function g(t) {
        return t.type = (null !== ce.find.attr(t, "type")) + "/" + t.type, t
    }

    function m(t) {
        var e = on.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function v(t, e) {
        for (var n, r = 0; null != (n = t[r]); r++)ce._data(n, "globalEval", !e || ce._data(e[r], "globalEval"))
    }

    function y(t, e) {
        if (1 === e.nodeType && ce.hasData(t)) {
            var n, r, i, o = ce._data(t), a = ce._data(e, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (r = 0, i = s[n].length; i > r; r++)ce.event.add(e, n, s[n][r])
            }
            a.data && (a.data = ce.extend({}, a.data))
        }
    }

    function x(t, e) {
        var n, r, i;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ce.support.noCloneEvent && e[ce.expando]) {
                i = ce._data(e);
                for (r in i.events)ce.removeEvent(e, r, i.handle);
                e.removeAttribute(ce.expando)
            }
            "script" === n && e.text !== t.text ? (g(e).text = t.text, m(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ce.support.html5Clone && t.innerHTML && !ce.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && en.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function b(t, n) {
        var r, i, o = 0, a = typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== Y ? t.querySelectorAll(n || "*") : e;
        if (!a)for (a = [], r = t.childNodes || t; null != (i = r[o]); o++)!n || ce.nodeName(i, n) ? a.push(i) : ce.merge(a, b(i, n));
        return n === e || n && ce.nodeName(t, n) ? ce.merge([t], a) : a
    }

    function w(t) {
        en.test(t.type) && (t.defaultChecked = t.checked)
    }

    function S(t, e) {
        if (e in t)return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), r = e, i = Cn.length; i--;)if (e = Cn[i] + n, e in t)return e;
        return r
    }

    function k(t, e) {
        return t = e || t, "none" === ce.css(t, "display") || !ce.contains(t.ownerDocument, t)
    }

    function _(t, e) {
        for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++)r = t[a], r.style && (o[a] = ce._data(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && k(r) && (o[a] = ce._data(r, "olddisplay", N(r.nodeName)))) : o[a] || (i = k(r), (n && "none" !== n || !i) && ce._data(r, "olddisplay", i ? n : ce.css(r, "display"))));
        for (a = 0; s > a; a++)r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function C(t, e, n) {
        var r = yn.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }

    function T(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ce.css(t, n + _n[o], !0, i)), r ? ("content" === n && (a -= ce.css(t, "padding" + _n[o], !0, i)), "margin" !== n && (a -= ce.css(t, "border" + _n[o] + "Width", !0, i))) : (a += ce.css(t, "padding" + _n[o], !0, i), "padding" !== n && (a += ce.css(t, "border" + _n[o] + "Width", !0, i)));
        return a
    }

    function E(t, e, n) {
        var r = !0, i = "width" === e ? t.offsetWidth : t.offsetHeight, o = fn(t), a = ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = dn(t, e, o), (0 > i || null == i) && (i = t.style[e]), xn.test(i))return i;
            r = a && (ce.support.boxSizingReliable || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + T(t, e, n || (a ? "border" : "content"), r, o) + "px"
    }

    function N(t) {
        var e = J, n = wn[t];
        return n || (n = A(t, e), "none" !== n && n || (cn = (cn || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (cn[0].contentWindow || cn[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = A(t, e), cn.detach()), wn[t] = n), n
    }

    function A(t, e) {
        var n = ce(e.createElement(t)).appendTo(e.body), r = ce.css(n[0], "display");
        return n.remove(), r
    }

    function j(t, e, n, r) {
        var i;
        if (ce.isArray(e))ce.each(e, function (e, i) {
            n || En.test(t) ? r(t, i) : j(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
        }); else if (n || "object" !== ce.type(e))r(t, e); else for (i in e)j(t + "[" + i + "]", e[i], n, r)
    }

    function L(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0, o = e.toLowerCase().match(de) || [];
            if (ce.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }

    function B(t, e, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, ce.each(t[s] || [], function (t, s) {
                var u = s(e, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), i(u), !1)
            }), l
        }

        var o = {}, a = t === Wn;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }

    function M(t, n) {
        var r, i, o = ce.ajaxSettings.flatOptions || {};
        for (i in n)n[i] !== e && ((o[i] ? t : r || (r = {}))[i] = n[i]);
        return r && ce.extend(!0, t, r), t
    }

    function D(t, n, r) {
        for (var i, o, a, s, l = t.contents, u = t.dataTypes; "*" === u[0];)u.shift(), o === e && (o = t.mimeType || n.getResponseHeader("Content-Type"));
        if (o)for (s in l)if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break
        }
        if (u[0] in r)a = u[0]; else {
            for (s in r) {
                if (!u[0] || t.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : void 0
    }

    function P(t, e, n, r) {
        var i, o, a, s, l, u = {}, c = t.dataTypes.slice();
        if (c[1])for (a in t.converters)u[a.toLowerCase()] = t.converters[a];
        for (o = c.shift(); o;)if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)for (i in u)if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0)if (a && t["throws"])e = a(e); else try {
                e = a(e)
            } catch (f) {
                return {state: "parsererror", error: a ? f : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: e}
    }

    function F() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    }

    function q() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function R() {
        return setTimeout(function () {
            Zn = e
        }), Zn = ce.now()
    }

    function H(t, e, n) {
        for (var r, i = (or[e] || []).concat(or["*"]), o = 0, a = i.length; a > o; o++)if (r = i[o].call(n, e, t))return r
    }

    function O(t, e, n) {
        var r, i, o = 0, a = ir.length, s = ce.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i)return !1;
            for (var e = Zn || R(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++)u.tweens[a].run(o);
            return s.notifyWith(t, [u, o, n]), 1 > o && l ? n : (s.resolveWith(t, [u]), !1)
        }, u = s.promise({
            elem: t,
            props: ce.extend({}, e),
            opts: ce.extend(!0, {specialEasing: {}}, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Zn || R(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
                var r = ce.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(r), r
            },
            stop: function (e) {
                var n = 0, r = e ? u.tweens.length : 0;
                if (i)return this;
                for (i = !0; r > n; n++)u.tweens[n].run(1);
                return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
            }
        }), c = u.props;
        for (z(c, u.opts.specialEasing); a > o; o++)if (r = ir[o].call(u, t, c, u.opts))return r;
        return ce.map(c, H, u), ce.isFunction(u.opts.start) && u.opts.start.call(t, u), ce.fx.timer(ce.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function z(t, e) {
        var n, r, i, o, a;
        for (n in t)if (r = ce.camelCase(n), i = e[r], o = t[n], ce.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = ce.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete t[r];
            for (n in o)n in t || (t[n] = o[n], e[n] = i)
        } else e[r] = i
    }

    function I(t, e, n) {
        var r, i, o, a, s, l, u = this, c = {}, f = t.style, d = t.nodeType && k(t), h = ce._data(t, "fxshow");
        n.queue || (s = ce._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, ce.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ce.css(t, "display") && "none" === ce.css(t, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ce.support.shrinkWrapBlocks || u.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in e)if (i = e[r], er.exec(i)) {
            if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show"))continue;
            c[r] = h && h[r] || ce.style(t, r)
        }
        if (!ce.isEmptyObject(c)) {
            h ? "hidden" in h && (d = h.hidden) : h = ce._data(t, "fxshow", {}), o && (h.hidden = !d), d ? ce(t).show() : u.done(function () {
                ce(t).hide()
            }), u.done(function () {
                var e;
                ce._removeData(t, "fxshow");
                for (e in c)ce.style(t, e, c[e])
            });
            for (r in c)a = H(d ? h[r] : 0, r, u), r in h || (h[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function $(t, e, n, r, i) {
        return new $.prototype.init(t, e, n, r, i)
    }

    function W(t, e) {
        var n, r = {height: t}, i = 0;
        for (e = e ? 1 : 0; 4 > i; i += 2 - e)n = _n[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function X(t) {
        return ce.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }

    var V, U, Y = typeof e, G = t.location, J = t.document, Q = J.documentElement, K = t.jQuery, Z = t.$, te = {}, ee = [], ne = "1.10.0", re = ee.concat, ie = ee.push, oe = ee.slice, ae = ee.indexOf, se = te.toString, le = te.hasOwnProperty, ue = ne.trim, ce = function (t, e) {
        return new ce.fn.init(t, e, U)
    }, fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, de = /\S+/g, he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, me = /^[\],:{}\s]*$/, ve = /(?:^|:|,)(?:\s*\[)+/g, ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, xe = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, be = /^-ms-/, we = /-([\da-z])/gi, Se = function (t, e) {
        return e.toUpperCase()
    }, ke = function (t) {
        (J.addEventListener || "load" === t.type || "complete" === J.readyState) && (_e(), ce.ready())
    }, _e = function () {
        J.addEventListener ? (J.removeEventListener("DOMContentLoaded", ke, !1), t.removeEventListener("load", ke, !1)) : (J.detachEvent("onreadystatechange", ke), t.detachEvent("onload", ke))
    };
    ce.fn = ce.prototype = {
        jquery: ne, constructor: ce, init: function (t, n, r) {
            var i, o;
            if (!t)return this;
            if ("string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : pe.exec(t), !i || !i[1] && n)return !n || n.jquery ? (n || r).find(t) : this.constructor(n).find(t);
                if (i[1]) {
                    if (n = n instanceof ce ? n[0] : n, ce.merge(this, ce.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : J, !0)), ge.test(i[1]) && ce.isPlainObject(n))for (i in n)ce.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = J.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2])return r.find(t);
                    this.length = 1, this[0] = o
                }
                return this.context = J, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ce.isFunction(t) ? r.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ce.makeArray(t, this))
        }, selector: "", length: 0, toArray: function () {
            return oe.call(this)
        }, get: function (t) {
            return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
        }, pushStack: function (t) {
            var e = ce.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (t, e) {
            return ce.each(this, t, e)
        }, ready: function (t) {
            return ce.ready.promise().done(t), this
        }, slice: function () {
            return this.pushStack(oe.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        }, map: function (t) {
            return this.pushStack(ce.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: ie, sort: [].sort, splice: [].splice
    }, ce.fn.init.prototype = ce.fn, ce.extend = ce.fn.extend = function () {
        var t, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ce.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)if (null != (o = arguments[l]))for (i in o)t = s[i], r = o[i], s !== r && (c && r && (ce.isPlainObject(r) || (n = ce.isArray(r))) ? (n ? (n = !1, a = t && ce.isArray(t) ? t : []) : a = t && ce.isPlainObject(t) ? t : {}, s[i] = ce.extend(c, a, r)) : r !== e && (s[i] = r));
        return s
    }, ce.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""), noConflict: function (e) {
            return t.$ === ce && (t.$ = Z), e && t.jQuery === ce && (t.jQuery = K), ce
        }, isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? ce.readyWait++ : ce.ready(!0)
        }, ready: function (t) {
            if (t === !0 ? !--ce.readyWait : !ce.isReady) {
                if (!J.body)return setTimeout(ce.ready);
                ce.isReady = !0, t !== !0 && --ce.readyWait > 0 || (V.resolveWith(J, [ce]), ce.fn.trigger && ce(J).trigger("ready").off("ready"))
            }
        }, isFunction: function (t) {
            return "function" === ce.type(t)
        }, isArray: Array.isArray || function (t) {
            return "array" === ce.type(t)
        }, isWindow: function (t) {
            return null != t && t == t.window
        }, isNumeric: function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, type: function (t) {
            return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? te[se.call(t)] || "object" : typeof t
        }, isPlainObject: function (t) {
            var n;
            if (!t || "object" !== ce.type(t) || t.nodeType || ce.isWindow(t))return !1;
            try {
                if (t.constructor && !le.call(t, "constructor") && !le.call(t.constructor.prototype, "isPrototypeOf"))return !1
            } catch (r) {
                return !1
            }
            if (ce.support.ownLast)for (n in t)return le.call(t, n);
            for (n in t);
            return n === e || le.call(t, n)
        }, isEmptyObject: function (t) {
            var e;
            for (e in t)return !1;
            return !0
        }, error: function (t) {
            throw new Error(t)
        }, parseHTML: function (t, e, n) {
            if (!t || "string" != typeof t)return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || J;
            var r = ge.exec(t), i = !n && [];
            return r ? [e.createElement(r[1])] : (r = ce.buildFragment([t], e, i), i && ce(i).remove(), ce.merge([], r.childNodes))
        }, parseJSON: function (e) {
            return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = ce.trim(e), e && me.test(e.replace(ye, "@").replace(xe, "]").replace(ve, ""))) ? new Function("return " + e)() : (ce.error("Invalid JSON: " + e), void 0)
        }, parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n)return null;
            try {
                t.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = e
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (e) {
            e && ce.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        }, camelCase: function (t) {
            return t.replace(be, "ms-").replace(we, Se)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e, r) {
            var i, o = 0, a = t.length, s = n(t);
            if (r) {
                if (s)for (; a > o && (i = e.apply(t[o], r), i !== !1); o++); else for (o in t)if (i = e.apply(t[o], r), i === !1)break
            } else if (s)for (; a > o && (i = e.call(t[o], o, t[o]), i !== !1); o++); else for (o in t)if (i = e.call(t[o], o, t[o]), i === !1)break;
            return t
        }, trim: ue && !ue.call("﻿ ") ? function (t) {
            return null == t ? "" : ue.call(t)
        } : function (t) {
            return null == t ? "" : (t + "").replace(he, "")
        }, makeArray: function (t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? ce.merge(r, "string" == typeof t ? [t] : t) : ie.call(r, t)), r
        }, inArray: function (t, e, n) {
            var r;
            if (e) {
                if (ae)return ae.call(e, t, n);
                for (r = e.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in e && e[n] === t)return n
            }
            return -1
        }, merge: function (t, n) {
            var r = n.length, i = t.length, o = 0;
            if ("number" == typeof r)for (; r > o; o++)t[i++] = n[o]; else for (; n[o] !== e;)t[i++] = n[o++];
            return t.length = i, t
        }, grep: function (t, e, n) {
            var r, i = [], o = 0, a = t.length;
            for (n = !!n; a > o; o++)r = !!e(t[o], o), n !== r && i.push(t[o]);
            return i
        }, map: function (t, e, r) {
            var i, o = 0, a = t.length, s = n(t), l = [];
            if (s)for (; a > o; o++)i = e(t[o], o, r), null != i && (l[l.length] = i); else for (o in t)i = e(t[o], o, r), null != i && (l[l.length] = i);
            return re.apply([], l)
        }, guid: 1, proxy: function (t, n) {
            var r, i, o;
            return "string" == typeof n && (o = t[n], n = t, t = o), ce.isFunction(t) ? (r = oe.call(arguments, 2), i = function () {
                return t.apply(n || this, r.concat(oe.call(arguments)))
            }, i.guid = t.guid = t.guid || ce.guid++, i) : e
        }, access: function (t, n, r, i, o, a, s) {
            var l = 0, u = t.length, c = null == r;
            if ("object" === ce.type(r)) {
                o = !0;
                for (l in r)ce.access(t, n, l, r[l], !0, a, s)
            } else if (i !== e && (o = !0, ce.isFunction(i) || (s = !0), c && (s ? (n.call(t, i), n = null) : (c = n, n = function (t, e, n) {
                    return c.call(ce(t), n)
                })), n))for (; u > l; l++)n(t[l], r, s ? i : i.call(t[l], l, n(t[l], r)));
            return o ? t : c ? n.call(t) : u ? n(t[0], r) : a
        }, now: function () {
            return (new Date).getTime()
        }, swap: function (t, e, n, r) {
            var i, o, a = {};
            for (o in e)a[o] = t.style[o], t.style[o] = e[o];
            i = n.apply(t, r || []);
            for (o in e)t.style[o] = a[o];
            return i
        }
    }), ce.ready.promise = function (e) {
        if (!V)if (V = ce.Deferred(), "complete" === J.readyState)setTimeout(ce.ready); else if (J.addEventListener)J.addEventListener("DOMContentLoaded", ke, !1), t.addEventListener("load", ke, !1); else {
            J.attachEvent("onreadystatechange", ke), t.attachEvent("onload", ke);
            var n = !1;
            try {
                n = null == t.frameElement && J.documentElement
            } catch (r) {
            }
            n && n.doScroll && function i() {
                if (!ce.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(i, 50)
                    }
                    _e(), ce.ready()
                }
            }()
        }
        return V.promise(e)
    }, ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        te["[object " + e + "]"] = e.toLowerCase()
    }), U = ce(J), /*!
     * Sizzle CSS Selector Engine v1.9.4-pre
     * http://sizzlejs.com/
     *
     * Copyright 2013 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2013-05-15
     */
        function (t, e) {
            function n(t, e, n, r) {
                var i, o, a, s, l, u, c, f, d, h;
                if ((e ? e.ownerDocument || e : W) !== F && P(e), e = e || F, n = n || [], !t || "string" != typeof t)return n;
                if (1 !== (s = e.nodeType) && 9 !== s)return [];
                if (R && !r) {
                    if (i = ke.exec(t))if (a = i[1]) {
                        if (9 === s) {
                            if (o = e.getElementById(a), !o || !o.parentNode)return n;
                            if (o.id === a)return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && I(e, o) && o.id === a)return n.push(o), n
                    } else {
                        if (i[2])return ie.apply(n, e.getElementsByTagName(t)), n;
                        if ((a = i[3]) && E.getElementsByClassName && e.getElementsByClassName)return ie.apply(n, e.getElementsByClassName(a)), n
                    }
                    if (E.qsa && (!H || !H.test(t))) {
                        if (f = c = $, d = e, h = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (u = g(t), (c = e.getAttribute("id")) ? f = c.replace(Te, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;)u[l] = f + m(u[l]);
                            d = ve.test(t) && e.parentNode || e, h = u.join(",")
                        }
                        if (h)try {
                            return ie.apply(n, d.querySelectorAll(h)), n
                        } catch (p) {
                        } finally {
                            c || e.removeAttribute("id")
                        }
                    }
                }
                return _(t.replace(pe, "$1"), e, n, r)
            }

            function r(t) {
                return Se.test(t + "")
            }

            function i() {
                function t(n, r) {
                    return e.push(n += " ") > A.cacheLength && delete t[e.shift()], t[n] = r
                }

                var e = [];
                return t
            }

            function o(t) {
                return t[$] = !0, t
            }

            function a(t) {
                var e = F.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e, n) {
                t = t.split("|");
                for (var r, i = t.length, o = n ? null : e; i--;)(r = A.attrHandle[t[i]]) && r !== e || (A.attrHandle[t[i]] = o)
            }

            function l(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : t[e] === !0 ? e.toLowerCase() : null
            }

            function u(t, e) {
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }

            function c(t) {
                return "input" === t.nodeName.toLowerCase() ? t.defaultValue : void 0
            }

            function f(t, e) {
                var n = e && t, r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Z) - (~t.sourceIndex || Z);
                if (r)return r;
                if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                return t ? 1 : -1
            }

            function d(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function h(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function p(t) {
                return o(function (e) {
                    return e = +e, o(function (n, r) {
                        for (var i, o = t([], n.length, e), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function g(t, e) {
                var r, i, o, a, s, l, u, c = Y[t + " "];
                if (c)return e ? 0 : c.slice(0);
                for (s = t, l = [], u = A.preFilter; s;) {
                    (!r || (i = ge.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = me.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(pe, " ")
                    }), s = s.slice(r.length));
                    for (a in A.filter)!(i = we[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r)break
                }
                return e ? s.length : s ? n.error(t) : Y(t, l).slice(0)
            }

            function m(t) {
                for (var e = 0, n = t.length, r = ""; n > e; e++)r += t[e].value;
                return r
            }

            function v(t, e, n) {
                var r = e.dir, i = n && "parentNode" === r, o = V++;
                return e.first ? function (e, n, o) {
                    for (; e = e[r];)if (1 === e.nodeType || i)return t(e, n, o)
                } : function (e, n, a) {
                    var s, l, u, c = X + " " + o;
                    if (a) {
                        for (; e = e[r];)if ((1 === e.nodeType || i) && t(e, n, a))return !0
                    } else for (; e = e[r];)if (1 === e.nodeType || i)if (u = e[$] || (e[$] = {}), (l = u[r]) && l[0] === c) {
                        if ((s = l[1]) === !0 || s === N)return s === !0
                    } else if (l = u[r] = [c], l[1] = t(e, n, a) || N, l[1] === !0)return !0
                }
            }

            function y(t) {
                return t.length > 1 ? function (e, n, r) {
                    for (var i = t.length; i--;)if (!t[i](e, n, r))return !1;
                    return !0
                } : t[0]
            }

            function x(t, e, n, r, i) {
                for (var o, a = [], s = 0, l = t.length, u = null != e; l > s; s++)(o = t[s]) && (!n || n(o, r, i)) && (a.push(o), u && e.push(s));
                return a
            }

            function b(t, e, n, r, i, a) {
                return r && !r[$] && (r = b(r)), i && !i[$] && (i = b(i, a)), o(function (o, a, s, l) {
                    var u, c, f, d = [], h = [], p = a.length, g = o || k(e || "*", s.nodeType ? [s] : s, []), m = !t || !o && e ? g : x(g, d, t, s, l), v = n ? i || (o ? t : p || r) ? [] : a : m;
                    if (n && n(m, v, s, l), r)for (u = x(v, h), r(u, [], s, l), c = u.length; c--;)(f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
                    if (o) {
                        if (i || t) {
                            if (i) {
                                for (u = [], c = v.length; c--;)(f = v[c]) && u.push(m[c] = f);
                                i(null, v = [], u, l)
                            }
                            for (c = v.length; c--;)(f = v[c]) && (u = i ? ae.call(o, f) : d[c]) > -1 && (o[u] = !(a[u] = f))
                        }
                    } else v = x(v === a ? v.splice(p, v.length) : v), i ? i(null, a, v, l) : ie.apply(a, v)
                })
            }

            function w(t) {
                for (var e, n, r, i = t.length, o = A.relative[t[0].type], a = o || A.relative[" "], s = o ? 1 : 0, l = v(function (t) {
                    return t === e
                }, a, !0), u = v(function (t) {
                    return ae.call(e, t) > -1
                }, a, !0), c = [function (t, n, r) {
                    return !o && (r || n !== M) || ((e = n).nodeType ? l(t, n, r) : u(t, n, r))
                }]; i > s; s++)if (n = A.relative[t[s].type])c = [v(y(c), n)]; else {
                    if (n = A.filter[t[s].type].apply(null, t[s].matches), n[$]) {
                        for (r = ++s; i > r && !A.relative[t[r].type]; r++);
                        return b(s > 1 && y(c), s > 1 && m(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(pe, "$1"), n, r > s && w(t.slice(s, r)), i > r && w(t = t.slice(r)), i > r && m(t))
                    }
                    c.push(n)
                }
                return y(c)
            }

            function S(t, e) {
                var r = 0, i = e.length > 0, a = t.length > 0, s = function (o, s, l, u, c) {
                    var f, d, h, p = [], g = 0, m = "0", v = o && [], y = null != c, b = M, w = o || a && A.find.TAG("*", c && s.parentNode || s), S = X += null == b ? 1 : Math.random() || .1;
                    for (y && (M = s !== F && s, N = r); null != (f = w[m]); m++) {
                        if (a && f) {
                            for (d = 0; h = t[d++];)if (h(f, s, l)) {
                                u.push(f);
                                break
                            }
                            y && (X = S, N = ++r)
                        }
                        i && ((f = !h && f) && g--, o && v.push(f))
                    }
                    if (g += m, i && m !== g) {
                        for (d = 0; h = e[d++];)h(v, p, s, l);
                        if (o) {
                            if (g > 0)for (; m--;)v[m] || p[m] || (p[m] = ne.call(u));
                            p = x(p)
                        }
                        ie.apply(u, p), y && !o && p.length > 0 && g + e.length > 1 && n.uniqueSort(u)
                    }
                    return y && (X = S, M = b), v
                };
                return i ? o(s) : s
            }

            function k(t, e, r) {
                for (var i = 0, o = e.length; o > i; i++)n(t, e[i], r);
                return r
            }

            function _(t, e, n, r) {
                var i, o, a, s, l, u = g(t);
                if (!r && 1 === u.length) {
                    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && E.getById && 9 === e.nodeType && R && A.relative[o[1].type]) {
                        if (e = (A.find.ID(a.matches[0].replace(Ee, Ne), e) || [])[0], !e)return n;
                        t = t.slice(o.shift().value.length)
                    }
                    for (i = we.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !A.relative[s = a.type]);)if ((l = A.find[s]) && (r = l(a.matches[0].replace(Ee, Ne), ve.test(o[0].type) && e.parentNode || e))) {
                        if (o.splice(i, 1), t = r.length && m(o), !t)return ie.apply(n, r), n;
                        break
                    }
                }
                return B(t, u)(r, e, !R, n, ve.test(t)), n
            }

            function C() {
            }

            var T, E, N, A, j, L, B, M, D, P, F, q, R, H, O, z, I, $ = "sizzle" + -new Date, W = t.document, X = 0, V = 0, U = i(), Y = i(), G = i(), J = !1, Q = function () {
                return 0
            }, K = typeof e, Z = 1 << 31, te = {}.hasOwnProperty, ee = [], ne = ee.pop, re = ee.push, ie = ee.push, oe = ee.slice, ae = ee.indexOf || function (t) {
                    for (var e = 0, n = this.length; n > e; e++)if (this[e] === t)return e;
                    return -1
                }, se = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", le = "[\\x20\\t\\r\\n\\f]", ue = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fe = ue.replace("w", "w#"), de = "\\[" + le + "*(" + ue + ")" + le + "*(?:([*^$|!~]?=)" + le + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + fe + ")|)|)" + le + "*\\]", he = ":(" + ue + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + de.replace(3, 8) + ")*)|.*)\\)|)", pe = new RegExp("^" + le + "+|((?:^|[^\\\\])(?:\\\\.)*)" + le + "+$", "g"), ge = new RegExp("^" + le + "*," + le + "*"), me = new RegExp("^" + le + "*([>+~]|" + le + ")" + le + "*"), ve = new RegExp(le + "*[+~]"), ye = new RegExp("=" + le + "*([^\\]'\"]*)" + le + "*\\]", "g"), xe = new RegExp(he), be = new RegExp("^" + fe + "$"), we = {
                ID: new RegExp("^#(" + ue + ")"),
                CLASS: new RegExp("^\\.(" + ue + ")"),
                TAG: new RegExp("^(" + ue.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + de),
                PSEUDO: new RegExp("^" + he),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + le + "*(even|odd|(([+-]|)(\\d*)n|)" + le + "*(?:([+-]|)" + le + "*(\\d+)|))" + le + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + se + ")$", "i"),
                needsContext: new RegExp("^" + le + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + le + "*((?:-\\d)?\\d*)" + le + "*\\)|)(?=[^-]|$)", "i")
            }, Se = /^[^{]+\{\s*\[native \w/, ke = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _e = /^(?:input|select|textarea|button)$/i, Ce = /^h\d$/i, Te = /'|\\/g, Ee = new RegExp("\\\\([\\da-f]{1,6}" + le + "?|(" + le + ")|.)", "ig"), Ne = function (t, e, n) {
                var r = "0x" + e - 65536;
                return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
            };
            try {
                ie.apply(ee = oe.call(W.childNodes), W.childNodes), ee[W.childNodes.length].nodeType
            } catch (Ae) {
                ie = {
                    apply: ee.length ? function (t, e) {
                        re.apply(t, oe.call(e))
                    } : function (t, e) {
                        for (var n = t.length, r = 0; t[n++] = e[r++];);
                        t.length = n - 1
                    }
                }
            }
            L = n.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, E = n.support = {}, P = n.setDocument = function (t) {
                var e = t ? t.ownerDocument || t : W;
                return e !== F && 9 === e.nodeType && e.documentElement ? (F = e, q = e.documentElement, R = !L(e), E.attributes = a(function (t) {
                    return t.innerHTML = "<a href='#'></a>", s("type|href|height|width", u, "#" === t.firstChild.getAttribute("href")), s(se, l, null == t.getAttribute("disabled")), t.className = "i", !t.getAttribute("className")
                }), E.input = a(function (t) {
                    return t.innerHTML = "<input>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }), s("value", c, E.attributes && E.input), E.getElementsByTagName = a(function (t) {
                    return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length
                }), E.getElementsByClassName = a(function (t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), E.getById = a(function (t) {
                    return q.appendChild(t).id = $, !e.getElementsByName || !e.getElementsByName($).length
                }), E.getById ? (A.find.ID = function (t, e) {
                    if (typeof e.getElementById !== K && R) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, A.filter.ID = function (t) {
                    var e = t.replace(Ee, Ne);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete A.find.ID, A.filter.ID = function (t) {
                    var e = t.replace(Ee, Ne);
                    return function (t) {
                        var n = typeof t.getAttributeNode !== K && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), A.find.TAG = E.getElementsByTagName ? function (t, e) {
                    return typeof e.getElementsByTagName !== K ? e.getElementsByTagName(t) : void 0
                } : function (t, e) {
                    var n, r = [], i = 0, o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[i++];)1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, A.find.CLASS = E.getElementsByClassName && function (t, e) {
                        return typeof e.getElementsByClassName !== K && R ? e.getElementsByClassName(t) : void 0
                    }, O = [], H = [], (E.qsa = r(e.querySelectorAll)) && (a(function (t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || H.push("\\[" + le + "*(?:value|" + se + ")"), t.querySelectorAll(":checked").length || H.push(":checked")
                }), a(function (t) {
                    var n = e.createElement("input");
                    n.setAttribute("type", "hidden"), t.appendChild(n).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && H.push("[*^$]=" + le + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
                })), (E.matchesSelector = r(z = q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && a(function (t) {
                    E.disconnectedMatch = z.call(t, "div"), z.call(t, "[s!='']:x"), O.push("!=", he)
                }), H = H.length && new RegExp(H.join("|")), O = O.length && new RegExp(O.join("|")), I = r(q.contains) || q.compareDocumentPosition ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                    return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                } : function (t, e) {
                    if (e)for (; e = e.parentNode;)if (e === t)return !0;
                    return !1
                }, E.sortDetached = a(function (t) {
                    return 1 & t.compareDocumentPosition(e.createElement("div"))
                }), Q = q.compareDocumentPosition ? function (t, n) {
                    if (t === n)return J = !0, 0;
                    var r = n.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(n);
                    return r ? 1 & r || !E.sortDetached && n.compareDocumentPosition(t) === r ? t === e || I(W, t) ? -1 : n === e || I(W, n) ? 1 : D ? ae.call(D, t) - ae.call(D, n) : 0 : 4 & r ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                } : function (t, n) {
                    var r, i = 0, o = t.parentNode, a = n.parentNode, s = [t], l = [n];
                    if (t === n)return J = !0, 0;
                    if (!o || !a)return t === e ? -1 : n === e ? 1 : o ? -1 : a ? 1 : D ? ae.call(D, t) - ae.call(D, n) : 0;
                    if (o === a)return f(t, n);
                    for (r = t; r = r.parentNode;)s.unshift(r);
                    for (r = n; r = r.parentNode;)l.unshift(r);
                    for (; s[i] === l[i];)i++;
                    return i ? f(s[i], l[i]) : s[i] === W ? -1 : l[i] === W ? 1 : 0
                }, e) : F
            }, n.matches = function (t, e) {
                return n(t, null, null, e)
            }, n.matchesSelector = function (t, e) {
                if ((t.ownerDocument || t) !== F && P(t), e = e.replace(ye, "='$1']"), !(!E.matchesSelector || !R || O && O.test(e) || H && H.test(e)))try {
                    var r = z.call(t, e);
                    if (r || E.disconnectedMatch || t.document && 11 !== t.document.nodeType)return r
                } catch (i) {
                }
                return n(e, F, null, [t]).length > 0
            }, n.contains = function (t, e) {
                return (t.ownerDocument || t) !== F && P(t), I(t, e)
            }, n.attr = function (t, n) {
                (t.ownerDocument || t) !== F && P(t);
                var r = A.attrHandle[n.toLowerCase()], i = r && te.call(A.attrHandle, n.toLowerCase()) ? r(t, n, !R) : e;
                return i === e ? E.attributes || !R ? t.getAttribute(n) : (i = t.getAttributeNode(n)) && i.specified ? i.value : null : i
            }, n.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, n.uniqueSort = function (t) {
                var e, n = [], r = 0, i = 0;
                if (J = !E.detectDuplicates, D = !E.sortStable && t.slice(0), t.sort(Q), J) {
                    for (; e = t[i++];)e === t[i] && (r = n.push(i));
                    for (; r--;)t.splice(n[r], 1)
                }
                return t
            }, j = n.getText = function (t) {
                var e, n = "", r = 0, i = t.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof t.textContent)return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)n += j(t)
                    } else if (3 === i || 4 === i)return t.nodeValue
                } else for (; e = t[r]; r++)n += j(e);
                return n
            }, A = n.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: we,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(Ee, Ne), t[3] = (t[4] || t[5] || "").replace(Ee, Ne), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var n, r = !t[5] && t[2];
                        return we.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : r && xe.test(r) && (n = g(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (t[0] = t[0].slice(0, n), t[2] = r.slice(0, n)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(Ee, Ne).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = U[t + " "];
                        return e || (e = new RegExp("(^|" + le + ")" + t + "(" + le + "|$)")) && U(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== K && t.getAttribute("class") || "")
                            })
                    }, ATTR: function (t, e, r) {
                        return function (i) {
                            var o = n.attr(i, t);
                            return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === r : "!=" === e ? o !== r : "^=" === e ? r && 0 === o.indexOf(r) : "*=" === e ? r && o.indexOf(r) > -1 : "$=" === e ? r && o.slice(-r.length) === r : "~=" === e ? (" " + o + " ").indexOf(r) > -1 : "|=" === e ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    }, CHILD: function (t, e, n, r, i) {
                        var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                        return 1 === r && 0 === i ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var u, c, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling", m = e.parentNode, v = s && e.nodeName.toLowerCase(), y = !l && !s;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = e; f = f[g];)if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)return !1;
                                        p = g = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (c = m[$] || (m[$] = {}), u = c[t] || [], h = u[0] === X && u[1], d = u[0] === X && u[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (d = h = 0) || p.pop();)if (1 === f.nodeType && ++d && f === e) {
                                        c[t] = [X, h, d];
                                        break
                                    }
                                } else if (y && (u = (e[$] || (e[$] = {}))[t]) && u[0] === X)d = u[1]; else for (; (f = ++h && f && f[g] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[$] || (f[$] = {}))[t] = [X, d]), f !== e)););
                                return d -= i, d === r || 0 === d % r && d / r >= 0
                            }
                        }
                    }, PSEUDO: function (t, e) {
                        var r, i = A.pseudos[t] || A.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                        return i[$] ? i(e) : i.length > 1 ? (r = [t, t, "", e], A.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function (t, n) {
                            for (var r, o = i(t, e), a = o.length; a--;)r = ae.call(t, o[a]), t[r] = !(n[r] = o[a])
                        }) : function (t) {
                            return i(t, 0, r)
                        }) : i
                    }
                },
                pseudos: {
                    not: o(function (t) {
                        var e = [], n = [], r = B(t.replace(pe, "$1"));
                        return r[$] ? o(function (t, e, n, i) {
                            for (var o, a = r(t, null, i, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                        }) : function (t, i, o) {
                            return e[0] = t, r(e, null, o, n), !n.pop()
                        }
                    }), has: o(function (t) {
                        return function (e) {
                            return n(t, e).length > 0
                        }
                    }), contains: o(function (t) {
                        return function (e) {
                            return (e.textContent || e.innerText || j(e)).indexOf(t) > -1
                        }
                    }), lang: o(function (t) {
                        return be.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(Ee, Ne).toLowerCase(), function (e) {
                            var n;
                            do if (n = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === q
                    }, focus: function (t) {
                        return t === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return t.disabled === !1
                    }, disabled: function (t) {
                        return t.disabled === !0
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType)return !1;
                        return !0
                    }, parent: function (t) {
                        return !A.pseudos.empty(t)
                    }, header: function (t) {
                        return Ce.test(t.nodeName)
                    }, input: function (t) {
                        return _e.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                    }, first: p(function () {
                        return [0]
                    }), last: p(function (t, e) {
                        return [e - 1]
                    }), eq: p(function (t, e, n) {
                        return [0 > n ? n + e : n]
                    }), even: p(function (t, e) {
                        for (var n = 0; e > n; n += 2)t.push(n);
                        return t
                    }), odd: p(function (t, e) {
                        for (var n = 1; e > n; n += 2)t.push(n);
                        return t
                    }), lt: p(function (t, e, n) {
                        for (var r = 0 > n ? n + e : n; --r >= 0;)t.push(r);
                        return t
                    }), gt: p(function (t, e, n) {
                        for (var r = 0 > n ? n + e : n; ++r < e;)t.push(r);
                        return t
                    })
                }
            };
            for (T in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})A.pseudos[T] = d(T);
            for (T in{submit: !0, reset: !0})A.pseudos[T] = h(T);
            B = n.compile = function (t, e) {
                var n, r = [], i = [], o = G[t + " "];
                if (!o) {
                    for (e || (e = g(t)), n = e.length; n--;)o = w(e[n]), o[$] ? r.push(o) : i.push(o);
                    o = G(t, S(i, r))
                }
                return o
            }, A.pseudos.nth = A.pseudos.eq, C.prototype = A.filters = A.pseudos, A.setFilters = new C, E.sortStable = $.split("").sort(Q).join("") === $, P(), [0, 0].sort(Q), E.detectDuplicates = J, ce.find = n, ce.expr = n.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = n.uniqueSort, ce.text = n.getText, ce.isXMLDoc = n.isXML, ce.contains = n.contains
        }(t);
    var Ce = {};
    ce.Callbacks = function (t) {
        t = "string" == typeof t ? Ce[t] || r(t) : ce.extend({}, t);
        var n, i, o, a, s, l, u = [], c = !t.once && [], f = function (e) {
            for (i = t.memory && e, o = !0, s = l || 0, l = 0, a = u.length, n = !0; u && a > s; s++)if (u[s].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                i = !1;
                break
            }
            n = !1, u && (c ? c.length && f(c.shift()) : i ? u = [] : d.disable())
        }, d = {
            add: function () {
                if (u) {
                    var e = u.length;
                    !function r(e) {
                        ce.each(e, function (e, n) {
                            var i = ce.type(n);
                            "function" === i ? t.unique && d.has(n) || u.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    }(arguments), n ? a = u.length : i && (l = e, f(i))
                }
                return this
            }, remove: function () {
                return u && ce.each(arguments, function (t, e) {
                    for (var r; (r = ce.inArray(e, u, r)) > -1;)u.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                }), this
            }, has: function (t) {
                return t ? ce.inArray(t, u) > -1 : !(!u || !u.length)
            }, empty: function () {
                return u = [], a = 0, this
            }, disable: function () {
                return u = c = i = e, this
            }, disabled: function () {
                return !u
            }, lock: function () {
                return c = e, i || d.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (t, e) {
                return e = e || [], e = [t, e.slice ? e.slice() : e], !u || o && !c || (n ? c.push(e) : f(e)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return d
    }, ce.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", ce.Callbacks("once memory"), "resolved"], ["reject", "fail", ce.Callbacks("once memory"), "rejected"], ["notify", "progress", ce.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var t = arguments;
                    return ce.Deferred(function (n) {
                        ce.each(e, function (e, o) {
                            var a = o[0], s = ce.isFunction(t[e]) && t[e];
                            i[o[1]](function () {
                                var t = s && s.apply(this, arguments);
                                t && ce.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, promise: function (t) {
                    return null != t ? ce.extend(t, r) : r
                }
            }, i = {};
            return r.pipe = r.then, ce.each(e, function (t, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), t && t.call(i, i), i
        }, when: function (t) {
            var e, n, r, i = 0, o = oe.call(arguments), a = o.length, s = 1 !== a || t && ce.isFunction(t.promise) ? a : 0, l = 1 === s ? t : ce.Deferred(), u = function (t, n, r) {
                return function (i) {
                    n[t] = this, r[t] = arguments.length > 1 ? oe.call(arguments) : i, r === e ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                }
            };
            if (a > 1)for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)o[i] && ce.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, e)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    }), ce.support = function (e) {
        var n, r, i, o, a, s, l, u, c, f = J.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], r = f.getElementsByTagName("a")[0], !r || !r.style || !n.length)return e;
        o = J.createElement("select"), s = o.appendChild(J.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== f.className, e.leadingWhitespace = 3 === f.firstChild.nodeType, e.tbody = !f.getElementsByTagName("tbody").length, e.htmlSerialize = !!f.getElementsByTagName("link").length, e.style = /top/.test(r.getAttribute("style")), e.hrefNormalized = "/a" === r.getAttribute("href"), e.opacity = /^0.5/.test(r.style.opacity), e.cssFloat = !!r.style.cssFloat, e.checkOn = !!i.value, e.optSelected = s.selected, e.enctype = !!J.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, i.checked = !0, e.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !s.disabled;
        try {
            delete f.test
        } catch (d) {
            e.deleteExpando = !1
        }
        i = J.createElement("input"), i.setAttribute("value", ""), e.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), e.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = J.createDocumentFragment(), a.appendChild(i), e.appendChecked = i.checked, e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
            e.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in{
            submit: !0,
            change: !0,
            focusin: !0
        })f.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || f.attributes[l].expando === !1;
        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === f.style.backgroundClip;
        for (c in ce(e))break;
        return e.ownLast = "0" !== c, ce(function () {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = J.getElementsByTagName("body")[0];
            a && (n = J.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ce.swap(a, null != a.style.zoom ? {zoom: 1} : {}, function () {
                e.boxSizing = 4 === f.offsetWidth
            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(f, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(f, null) || {width: "4px"}).width, r = f.appendChild(J.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== Y && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== f.offsetWidth, e.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
        }), n = o = a = s = r = i = null, e
    }({});
    var Te = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Ee = /([A-Z])/g;
    ce.extend({
        cache: {},
        noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (t) {
            return t = t.nodeType ? ce.cache[t[ce.expando]] : t[ce.expando], !!t && !s(t)
        },
        data: function (t, e, n) {
            return i(t, e, n)
        },
        removeData: function (t, e) {
            return o(t, e)
        },
        _data: function (t, e, n) {
            return i(t, e, n, !0)
        },
        _removeData: function (t, e) {
            return o(t, e, !0)
        },
        acceptData: function (t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType)return !1;
            var e = t.nodeName && ce.noData[t.nodeName.toLowerCase()];
            return !e || e !== !0 && t.getAttribute("classid") === e
        }
    }), ce.fn.extend({
        data: function (t, n) {
            var r, i, o = null, s = 0, l = this[0];
            if (t === e) {
                if (this.length && (o = ce.data(l), 1 === l.nodeType && !ce._data(l, "parsedAttrs"))) {
                    for (r = l.attributes; s < r.length; s++)i = r[s].name, 0 === i.indexOf("data-") && (i = ce.camelCase(i.slice(5)), a(l, i, o[i]));
                    ce._data(l, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function () {
                ce.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                ce.data(this, t, n)
            }) : l ? a(l, t, ce.data(l, t)) : null
        }, removeData: function (t) {
            return this.each(function () {
                ce.removeData(this, t)
            })
        }
    }), ce.extend({
        queue: function (t, e, n) {
            var r;
            return t ? (e = (e || "fx") + "queue", r = ce._data(t, e), n && (!r || ce.isArray(n) ? r = ce._data(t, e, ce.makeArray(n)) : r.push(n)), r || []) : void 0
        }, dequeue: function (t, e) {
            e = e || "fx";
            var n = ce.queue(t, e), r = n.length, i = n.shift(), o = ce._queueHooks(t, e), a = function () {
                ce.dequeue(t, e)
            };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return ce._data(t, n) || ce._data(t, n, {
                    empty: ce.Callbacks("once memory").add(function () {
                        ce._removeData(t, e + "queue"), ce._removeData(t, n)
                    })
                })
        }
    }), ce.fn.extend({
        queue: function (t, n) {
            var r = 2;
            return "string" != typeof t && (n = t, t = "fx", r--), arguments.length < r ? ce.queue(this[0], t) : n === e ? this : this.each(function () {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                ce.dequeue(this, t)
            })
        }, delay: function (t, e) {
            return t = ce.fx ? ce.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var r = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, n) {
            var r, i = 1, o = ce.Deferred(), a = this, s = this.length, l = function () {
                --i || o.resolveWith(a, [a])
            };
            for ("string" != typeof t && (n = t, t = e), t = t || "fx"; s--;)r = ce._data(a[s], t + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var Ne, Ae, je = /[\t\r\n\f]/g, Le = /\r/g, Be = /^(?:input|select|textarea|button|object)$/i, Me = /^(?:a|area)$/i, De = /^(?:checked|selected)$/i, Pe = ce.support.getSetAttribute, Fe = ce.support.input;
    ce.fn.extend({
        attr: function (t, e) {
            return ce.access(this, ce.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                ce.removeAttr(this, t)
            })
        }, prop: function (t, e) {
            return ce.access(this, ce.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return t = ce.propFix[t] || t, this.each(function () {
                try {
                    this[t] = e, delete this[t]
                } catch (n) {
                }
            })
        }, addClass: function (t) {
            var e, n, r, i, o, a = 0, s = this.length, l = "string" == typeof t && t;
            if (ce.isFunction(t))return this.each(function (e) {
                ce(this).addClass(t.call(this, e, this.className))
            });
            if (l)for (e = (t || "").match(de) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(je, " ") : " ")) {
                for (o = 0; i = e[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                n.className = ce.trim(r)
            }
            return this
        }, removeClass: function (t) {
            var e, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof t && t;
            if (ce.isFunction(t))return this.each(function (e) {
                ce(this).removeClass(t.call(this, e, this.className))
            });
            if (l)for (e = (t || "").match(de) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(je, " ") : "")) {
                for (o = 0; i = e[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
                n.className = t ? ce.trim(r) : ""
            }
            return this
        }, toggleClass: function (t, e) {
            var n = typeof t, r = "boolean" == typeof e;
            return ce.isFunction(t) ? this.each(function (n) {
                ce(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function () {
                if ("string" === n)for (var i, o = 0, a = ce(this), s = e, l = t.match(de) || []; i = l[o++];)s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i); else(n === Y || "boolean" === n) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ce._data(this, "__className__") || "")
            })
        }, hasClass: function (t) {
            for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(je, " ").indexOf(e) >= 0)return !0;
            return !1
        }, val: function (t) {
            var n, r, i, o = this[0];
            {
                if (arguments.length)return i = ce.isFunction(t), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, ce(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ce.isArray(o) && (o = ce.map(o, function (t) {
                        return null == t ? "" : t + ""
                    })), r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== e || (this.value = o))
                });
                if (o)return r = ce.valHooks[o.type] || ce.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== e ? n : (n = o.value, "string" == typeof n ? n.replace(Le, "") : null == n ? "" : n)
            }
        }
    }), ce.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = ce.find.attr(t, "value");
                    return null != e ? e : t.text
                }
            }, select: {
                get: function (t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)if (n = r[l], !(!n.selected && l !== i || (ce.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ce.nodeName(n.parentNode, "optgroup"))) {
                        if (e = ce(n).val(), o)return e;
                        a.push(e)
                    }
                    return a
                }, set: function (t, e) {
                    for (var n, r, i = t.options, o = ce.makeArray(e), a = i.length; a--;)r = i[a], (r.selected = ce.inArray(ce(r).val(), o) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }, attr: function (t, n, r) {
            var i, o, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a)return typeof t.getAttribute === Y ? ce.prop(t, n, r) : (1 === a && ce.isXMLDoc(t) || (n = n.toLowerCase(), i = ce.attrHooks[n] || (ce.expr.match.bool.test(n) ? Ae : Ne)), r === e ? i && "get" in i && null !== (o = i.get(t, n)) ? o : (o = ce.find.attr(t, n), null == o ? e : o) : null !== r ? i && "set" in i && (o = i.set(t, r, n)) !== e ? o : (t.setAttribute(n, r + ""), r) : (ce.removeAttr(t, n), void 0))
        }, removeAttr: function (t, e) {
            var n, r, i = 0, o = e && e.match(de);
            if (o && 1 === t.nodeType)for (; n = o[i++];)r = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? Fe && Pe || !De.test(n) ? t[r] = !1 : t[ce.camelCase("default-" + n)] = t[r] = !1 : ce.attr(t, n, ""), t.removeAttribute(Pe ? n : r)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ce.support.radioValue && "radio" === e && ce.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, n, r) {
            var i, o, a, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s)return a = 1 !== s || !ce.isXMLDoc(t), a && (n = ce.propFix[n] || n, o = ce.propHooks[n]), r !== e ? o && "set" in o && (i = o.set(t, r, n)) !== e ? i : t[n] = r : o && "get" in o && null !== (i = o.get(t, n)) ? i : t[n]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = ce.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Be.test(t.nodeName) || Me.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), Ae = {
        set: function (t, e, n) {
            return e === !1 ? ce.removeAttr(t, n) : Fe && Pe || !De.test(n) ? t.setAttribute(!Pe && ce.propFix[n] || n, n) : t[ce.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (t, n) {
        var r = ce.expr.attrHandle[n] || ce.find.attr;
        ce.expr.attrHandle[n] = Fe && Pe || !De.test(n) ? function (t, n, i) {
            var o = ce.expr.attrHandle[n], a = i ? e : (ce.expr.attrHandle[n] = e) != r(t, n, i) ? n.toLowerCase() : null;
            return ce.expr.attrHandle[n] = o, a
        } : function (t, n, r) {
            return r ? e : t[ce.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Fe && Pe || (ce.attrHooks.value = {
        set: function (t, e, n) {
            return ce.nodeName(t, "input") ? (t.defaultValue = e, void 0) : Ne && Ne.set(t, e, n)
        }
    }), Pe || (Ne = {
        set: function (t, n, r) {
            var i = t.getAttributeNode(r);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === t.getAttribute(r) ? n : e
        }
    }, ce.expr.attrHandle.id = ce.expr.attrHandle.name = ce.expr.attrHandle.coords = function (t, n, r) {
        var i;
        return r ? e : (i = t.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, ce.valHooks.button = {
        get: function (t, n) {
            var r = t.getAttributeNode(n);
            return r && r.specified ? r.value : e
        }, set: Ne.set
    }, ce.attrHooks.contenteditable = {
        set: function (t, e, n) {
            Ne.set(t, "" === e ? !1 : e, n)
        }
    }, ce.each(["width", "height"], function (t, e) {
        ce.attrHooks[e] = {
            set: function (t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), ce.support.hrefNormalized || ce.each(["href", "src"], function (t, e) {
        ce.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ce.support.style || (ce.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || e
        }, set: function (t, e) {
            return t.style.cssText = e + ""
        }
    }), ce.support.optSelected || (ce.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ce.propFix[this.toLowerCase()] = this
    }), ce.support.enctype || (ce.propFix.enctype = "encoding"), ce.each(["radio", "checkbox"], function () {
        ce.valHooks[this] = {
            set: function (t, e) {
                return ce.isArray(e) ? t.checked = ce.inArray(ce(t).val(), e) >= 0 : void 0
            }
        }, ce.support.checkOn || (ce.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var qe = /^(?:input|select|textarea)$/i, Re = /^key/, He = /^(?:mouse|contextmenu)|click/, Oe = /^(?:focusinfocus|focusoutblur)$/, ze = /^([^.]*)(?:\.(.+)|)$/;
    ce.event = {
        global: {},
        add: function (t, n, r, i, o) {
            var a, s, l, u, c, f, d, h, p, g, m, v = ce._data(t);
            if (v) {
                for (r.handler && (u = r, r = u.handler, o = u.selector), r.guid || (r.guid = ce.guid++), (s = v.events) || (s = v.events = {}), (f = v.handle) || (f = v.handle = function (t) {
                    return typeof ce === Y || t && ce.event.triggered === t.type ? e : ce.event.dispatch.apply(f.elem, arguments)
                }, f.elem = t), n = (n || "").match(de) || [""], l = n.length; l--;)a = ze.exec(n[l]) || [], p = m = a[1], g = (a[2] || "").split(".").sort(), p && (c = ce.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = ce.event.special[p] || {}, d = ce.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ce.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, u), (h = s[p]) || (h = s[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, i, g, f) !== !1 || (t.addEventListener ? t.addEventListener(p, f, !1) : t.attachEvent && t.attachEvent("on" + p, f))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = r.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), ce.event.global[p] = !0);
                t = null
            }
        },
        remove: function (t, e, n, r, i) {
            var o, a, s, l, u, c, f, d, h, p, g, m = ce.hasData(t) && ce._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(de) || [""], u = e.length; u--;)if (s = ze.exec(e[u]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
                    for (f = ce.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, d = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;)a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(t, a));
                    l && !d.length && (f.teardown && f.teardown.call(t, p, m.handle) !== !1 || ce.removeEvent(t, h, m.handle), delete c[h])
                } else for (h in c)ce.event.remove(t, h + e[u], n, r, !0);
                ce.isEmptyObject(c) && (delete m.handle, ce._removeData(t, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var a, s, l, u, c, f, d, h = [i || J], p = le.call(n, "type") ? n.type : n, g = le.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !Oe.test(p + ce.event.triggered) && (p.indexOf(".") >= 0 && (g = p.split("."), p = g.shift(), g.sort()), s = p.indexOf(":") < 0 && "on" + p, n = n[ce.expando] ? n : new ce.Event(p, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = i), r = null == r ? [n] : ce.makeArray(r, [n]), c = ce.event.special[p] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ce.isWindow(i)) {
                    for (u = c.delegateType || p, Oe.test(u + p) || (l = l.parentNode); l; l = l.parentNode)h.push(l), f = l;
                    f === (i.ownerDocument || J) && h.push(f.defaultView || f.parentWindow || t)
                }
                for (d = 0; (l = h[d++]) && !n.isPropagationStopped();)n.type = d > 1 ? u : c.bindType || p, a = (ce._data(l, "events") || {})[n.type] && ce._data(l, "handle"), a && a.apply(l, r), a = s && l[s], a && ce.acceptData(l) && a.apply && a.apply(l, r) === !1 && n.preventDefault();
                if (n.type = p, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), r) === !1) && ce.acceptData(i) && s && i[p] && !ce.isWindow(i)) {
                    f = i[s], f && (i[s] = null), ce.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {
                    }
                    ce.event.triggered = e, f && (i[s] = f)
                }
                return n.result
            }
        },
        dispatch: function (t) {
            t = ce.event.fix(t);
            var n, r, i, o, a, s = [], l = oe.call(arguments), u = (ce._data(this, "events") || {})[t.type] || [], c = ce.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = ce.event.handlers.call(this, t, u), n = 0; (o = s[n++]) && !t.isPropagationStopped();)for (t.currentTarget = o.elem, a = 0; (i = o.handlers[a++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, r = ((ce.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== e && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = t.target;
            if (l && u.nodeType && (!t.button || "click" !== t.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                for (o = [], a = 0; l > a; a++)i = n[a], r = i.selector + " ", o[r] === e && (o[r] = i.needsContext ? ce(r, this).index(u) >= 0 : ce.find(r, this, null, [u]).length), o[r] && o.push(i);
                o.length && s.push({elem: u, handlers: o})
            }
            return l < n.length && s.push({elem: this, handlers: n.slice(l)}), s
        },
        fix: function (t) {
            if (t[ce.expando])return t;
            var e, n, r, i = t.type, o = t, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = He.test(i) ? this.mouseHooks : Re.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new ce.Event(o), e = r.length; e--;)n = r[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || J), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == t.pageX && null != n.clientX && (i = t.target.ownerDocument || J, o = i.documentElement, r = i.body, t.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), t.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? n.toElement : s), t.which || a === e || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== c() && this.focus)try {
                        return this.focus(), !1
                    } catch (t) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === c() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (t) {
                    return ce.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n, r) {
            var i = ce.extend(new ce.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
            r ? ce.event.trigger(i, null, e) : ce.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ce.removeEvent = J.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
        var r = "on" + e;
        t.detachEvent && (typeof t[r] === Y && (t[r] = null), t.detachEvent(r, n))
    }, ce.Event = function (t, e) {
        return this instanceof ce.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, e && ce.extend(this, e), this.timeStamp = t && t.timeStamp || ce.now(), this[ce.expando] = !0, void 0) : new ce.Event(t, e)
    }, ce.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, ce.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (t, e) {
        ce.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var n, r = this, i = t.relatedTarget, o = t.handleObj;
                return (!i || i !== r && !ce.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ce.support.submitBubbles || (ce.event.special.submit = {
        setup: function () {
            return ce.nodeName(this, "form") ? !1 : (ce.event.add(this, "click._submit keypress._submit", function (t) {
                var n = t.target, r = ce.nodeName(n, "input") || ce.nodeName(n, "button") ? n.form : e;
                r && !ce._data(r, "submitBubbles") && (ce.event.add(r, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), ce._data(r, "submitBubbles", !0))
            }), void 0)
        }, postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ce.event.simulate("submit", this.parentNode, t, !0))
        }, teardown: function () {
            return ce.nodeName(this, "form") ? !1 : (ce.event.remove(this, "._submit"), void 0)
        }
    }), ce.support.changeBubbles || (ce.event.special.change = {
        setup: function () {
            return qe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), ce.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, t, !0)
            })), !1) : (ce.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                qe.test(e.nodeName) && !ce._data(e, "changeBubbles") && (ce.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ce.event.simulate("change", this.parentNode, t, !0)
                }), ce._data(e, "changeBubbles", !0))
            }), void 0)
        }, handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return ce.event.remove(this, "._change"), !qe.test(this.nodeName)
        }
    }), ce.support.focusinBubbles || ce.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var n = 0, r = function (t) {
            ce.event.simulate(e, t.target, ce.event.fix(t), !0)
        };
        ce.event.special[e] = {
            setup: function () {
                0 === n++ && J.addEventListener(t, r, !0)
            }, teardown: function () {
                0 === --n && J.removeEventListener(t, r, !0)
            }
        }
    }), ce.fn.extend({
        on: function (t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n, n = e);
                for (a in t)this.on(a, n, r, t[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = e) : null == i && ("string" == typeof n ? (i = r, r = e) : (i = r, r = n, n = e)), i === !1)i = u; else if (!i)return this;
            return 1 === o && (s = i, i = function (t) {
                return ce().off(t), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ce.guid++)), this.each(function () {
                ce.event.add(this, t, i, r, n)
            })
        }, one: function (t, e, n, r) {
            return this.on(t, e, n, r, 1)
        }, off: function (t, n, r) {
            var i, o;
            if (t && t.preventDefault && t.handleObj)return i = t.handleObj, ce(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t)this.off(o, n, t[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = e), r === !1 && (r = u), this.each(function () {
                ce.event.remove(this, t, r, n)
            })
        }, trigger: function (t, e) {
            return this.each(function () {
                ce.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var n = this[0];
            return n ? ce.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Ie = /^.[^:#\[\.,]*$/, $e = /^(?:parents|prev(?:Until|All))/, We = ce.expr.match.needsContext, Xe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ce.fn.extend({
        find: function (t) {
            var e, n = [], r = this, i = r.length;
            if ("string" != typeof t)return this.pushStack(ce(t).filter(function () {
                for (e = 0; i > e; e++)if (ce.contains(r[e], this))return !0
            }));
            for (e = 0; i > e; e++)ce.find(t, r[e], n);
            return n = this.pushStack(i > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        }, has: function (t) {
            var e, n = ce(t, this), r = n.length;
            return this.filter(function () {
                for (e = 0; r > e; e++)if (ce.contains(this, n[e]))return !0
            })
        }, not: function (t) {
            return this.pushStack(d(this, t || [], !0))
        }, filter: function (t) {
            return this.pushStack(d(this, t || [], !1))
        }, is: function (t) {
            return !!d(this, "string" == typeof t && We.test(t) ? ce(t) : t || [], !1).length
        }, closest: function (t, e) {
            for (var n, r = 0, i = this.length, o = [], a = We.test(t) || "string" != typeof t ? ce(t, e || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, t))) {
                n = o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? ce.unique(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? ce.inArray(this[0], ce(t)) : ce.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            var n = "string" == typeof t ? ce(t, e) : ce.makeArray(t && t.nodeType ? [t] : t), r = ce.merge(this.get(), n);
            return this.pushStack(ce.unique(r))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ce.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return ce.dir(t, "parentNode")
        }, parentsUntil: function (t, e, n) {
            return ce.dir(t, "parentNode", n)
        }, next: function (t) {
            return f(t, "nextSibling")
        }, prev: function (t) {
            return f(t, "previousSibling")
        }, nextAll: function (t) {
            return ce.dir(t, "nextSibling")
        }, prevAll: function (t) {
            return ce.dir(t, "previousSibling")
        }, nextUntil: function (t, e, n) {
            return ce.dir(t, "nextSibling", n)
        }, prevUntil: function (t, e, n) {
            return ce.dir(t, "previousSibling", n)
        }, siblings: function (t) {
            return ce.sibling((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return ce.sibling(t.firstChild)
        }, contents: function (t) {
            return ce.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ce.merge([], t.childNodes)
        }
    }, function (t, e) {
        ce.fn[t] = function (n, r) {
            var i = ce.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = ce.filter(r, i)), this.length > 1 && (Xe[t] || (i = ce.unique(i)), $e.test(t) && (i = i.reverse())), this.pushStack(i)
        }
    }), ce.extend({
        filter: function (t, e, n) {
            var r = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? ce.find.matchesSelector(r, t) ? [r] : [] : ce.find.matches(t, ce.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, dir: function (t, n, r) {
            for (var i = [], o = t[n]; o && 9 !== o.nodeType && (r === e || 1 !== o.nodeType || !ce(o).is(r));)1 === o.nodeType && i.push(o), o = o[n];
            return i
        }, sibling: function (t, e) {
            for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    });
    var Ve = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ue = / jQuery\d+="(?:null|\d+)"/g, Ye = new RegExp("<(?:" + Ve + ")[\\s/>]", "i"), Ge = /^\s+/, Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Qe = /<([\w:]+)/, Ke = /<tbody/i, Ze = /<|&#?\w+;/, tn = /<(?:script|style|link)/i, en = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, rn = /^$|\/(?:java|ecma)script/i, on = /^true\/(.*)/, an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sn = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, ln = h(J), un = ln.appendChild(J.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ce.fn.extend({
        text: function (t) {
            return ce.access(this, function (t) {
                return t === e ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(t))
            }, null, t, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, remove: function (t, e) {
            for (var n, r = t ? ce.filter(t, this) : this, i = 0; null != (n = r[i]); i++)e || 1 !== n.nodeType || ce.cleanData(b(n)), n.parentNode && (e && ce.contains(n.ownerDocument, n) && v(b(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ce.cleanData(b(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                t.options && ce.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        }, clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return ce.clone(this, t, e)
            })
        }, html: function (t) {
            return ce.access(this, function (t) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (t === e)return 1 === n.nodeType ? n.innerHTML.replace(Ue, "") : e;
                if (!("string" != typeof t || tn.test(t) || !ce.support.htmlSerialize && Ye.test(t) || !ce.support.leadingWhitespace && Ge.test(t) || sn[(Qe.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Je, "<$1></$2>");
                    try {
                        for (; i > r; r++)n = this[r] || {}, 1 === n.nodeType && (ce.cleanData(b(n, !1)), n.innerHTML = t);
                        n = 0
                    } catch (o) {
                    }
                }
                n && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = ce.map(this, function (t) {
                return [t.nextSibling, t.parentNode]
            }), e = 0;
            return this.domManip(arguments, function (n) {
                var r = t[e++], i = t[e++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ce(this).remove(), i.insertBefore(n, r))
            }, !0), e ? this : this.remove()
        }, detach: function (t) {
            return this.remove(t, !0)
        }, domManip: function (t, e, n) {
            t = re.apply([], t);
            var r, i, o, a, s, l, u = 0, c = this.length, f = this, d = c - 1, h = t[0], p = ce.isFunction(h);
            if (p || !(1 >= c || "string" != typeof h || ce.support.checkClone) && nn.test(h))return this.each(function (r) {
                var i = f.eq(r);
                p && (t[0] = h.call(this, r, i.html())), i.domManip(t, e, n)
            });
            if (c && (l = ce.buildFragment(t, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = ce.map(b(l, "script"), g), o = a.length; c > u; u++)i = l, u !== d && (i = ce.clone(i, !0, !0), o && ce.merge(a, b(i, "script"))), e.call(this[u], i, u);
                if (o)for (s = a[a.length - 1].ownerDocument, ce.map(a, m), u = 0; o > u; u++)i = a[u], rn.test(i.type || "") && !ce._data(i, "globalEval") && ce.contains(s, i) && (i.src ? ce._evalUrl(i.src) : ce.globalEval((i.text || i.textContent || i.innerHTML || "").replace(an, "")));
                l = r = null
            }
            return this
        }
    }), ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        ce.fn[t] = function (t) {
            for (var n, r = 0, i = [], o = ce(t), a = o.length - 1; a >= r; r++)n = r === a ? this : this.clone(!0), ce(o[r])[e](n), ie.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ce.extend({
        clone: function (t, e, n) {
            var r, i, o, a, s, l = ce.contains(t.ownerDocument, t);
            if (ce.support.html5Clone || ce.isXMLDoc(t) || !Ye.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (un.innerHTML = t.outerHTML, un.removeChild(o = un.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ce.isXMLDoc(t)))for (r = b(o), s = b(t), a = 0; null != (i = s[a]); ++a)r[a] && x(i, r[a]);
            if (e)if (n)for (s = s || b(t), r = r || b(o), a = 0; null != (i = s[a]); a++)y(i, r[a]); else y(t, o);
            return r = b(o, "script"), r.length > 0 && v(r, !l && b(t, "script")), r = s = i = null, o
        }, buildFragment: function (t, e, n, r) {
            for (var i, o, a, s, l, u, c, f = t.length, d = h(e), p = [], g = 0; f > g; g++)if (o = t[g], o || 0 === o)if ("object" === ce.type(o))ce.merge(p, o.nodeType ? [o] : o); else if (Ze.test(o)) {
                for (s = s || d.appendChild(e.createElement("div")), l = (Qe.exec(o) || ["", ""])[1].toLowerCase(), c = sn[l] || sn._default, s.innerHTML = c[1] + o.replace(Je, "<$1></$2>") + c[2], i = c[0]; i--;)s = s.lastChild;
                if (!ce.support.leadingWhitespace && Ge.test(o) && p.push(e.createTextNode(Ge.exec(o)[0])), !ce.support.tbody)for (o = "table" !== l || Ke.test(o) ? "<table>" !== c[1] || Ke.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;)ce.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (ce.merge(p, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
                s = d.lastChild
            } else p.push(e.createTextNode(o));
            for (s && d.removeChild(s), ce.support.appendChecked || ce.grep(b(p, "input"), w), g = 0; o = p[g++];)if ((!r || -1 === ce.inArray(o, r)) && (a = ce.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), a && v(s), n))for (i = 0; o = s[i++];)rn.test(o.type || "") && n.push(o);
            return s = null, d
        }, cleanData: function (t, e) {
            for (var n, r, i, o, a = 0, s = ce.expando, l = ce.cache, u = ce.support.deleteExpando, c = ce.event.special; null != (n = t[a]); a++)if ((e || ce.acceptData(n)) && (i = n[s], o = i && l[i])) {
                if (o.events)for (r in o.events)c[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, o.handle);
                l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Y ? n.removeAttribute(s) : n[s] = null, ee.push(i))
            }
        }, _evalUrl: function (t) {
            return ce.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    }), ce.fn.extend({
        wrapAll: function (t) {
            if (ce.isFunction(t))return this.each(function (e) {
                ce(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ce(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        }, wrapInner: function (t) {
            return ce.isFunction(t) ? this.each(function (e) {
                ce(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = ce(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = ce.isFunction(t);
            return this.each(function (n) {
                ce(this).wrapAll(e ? t.call(this, n) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var cn, fn, dn, hn = /alpha\([^)]*\)/i, pn = /opacity\s*=\s*([^)]*)/, gn = /^(top|right|bottom|left)$/, mn = /^(none|table(?!-c[ea]).+)/, vn = /^margin/, yn = new RegExp("^(" + fe + ")(.*)$", "i"), xn = new RegExp("^(" + fe + ")(?!px)[a-z%]+$", "i"), bn = new RegExp("^([+-])=(" + fe + ")", "i"), wn = {BODY: "block"}, Sn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, kn = {
        letterSpacing: 0,
        fontWeight: 400
    }, _n = ["Top", "Right", "Bottom", "Left"], Cn = ["Webkit", "O", "Moz", "ms"];
    ce.fn.extend({
        css: function (t, n) {
            return ce.access(this, function (t, n, r) {
                var i, o, a = {}, s = 0;
                if (ce.isArray(n)) {
                    for (o = fn(t), i = n.length; i > s; s++)a[n[s]] = ce.css(t, n[s], !1, o);
                    return a
                }
                return r !== e ? ce.style(t, n, r) : ce.css(t, n)
            }, t, n, arguments.length > 1)
        }, show: function () {
            return _(this, !0)
        }, hide: function () {
            return _(this)
        }, toggle: function (t) {
            var e = "boolean" == typeof t;
            return this.each(function () {
                (e ? t : k(this)) ? ce(this).show() : ce(this).hide()
            })
        }
    }), ce.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = dn(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": ce.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (t, n, r, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, a, s, l = ce.camelCase(n), u = t.style;
                if (n = ce.cssProps[l] || (ce.cssProps[l] = S(u, l)), s = ce.cssHooks[n] || ce.cssHooks[l], r === e)return s && "get" in s && (o = s.get(t, !1, i)) !== e ? o : u[n];
                if (a = typeof r, "string" === a && (o = bn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ce.css(t, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ce.cssNumber[l] || (r += "px"), ce.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(t, r, i)) === e)))try {
                    u[n] = r
                } catch (c) {
                }
            }
        },
        css: function (t, n, r, i) {
            var o, a, s, l = ce.camelCase(n);
            return n = ce.cssProps[l] || (ce.cssProps[l] = S(t.style, l)), s = ce.cssHooks[n] || ce.cssHooks[l], s && "get" in s && (a = s.get(t, !0, r)), a === e && (a = dn(t, n, i)), "normal" === a && n in kn && (a = kn[n]), "" === r || r ? (o = parseFloat(a), r === !0 || ce.isNumeric(o) ? o || 0 : a) : a
        }
    }), t.getComputedStyle ? (fn = function (e) {
        return t.getComputedStyle(e, null)
    }, dn = function (t, n, r) {
        var i, o, a, s = r || fn(t), l = s ? s.getPropertyValue(n) || s[n] : e, u = t.style;
        return s && ("" !== l || ce.contains(t.ownerDocument, t) || (l = ce.style(t, n)), xn.test(l) && vn.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : J.documentElement.currentStyle && (fn = function (t) {
        return t.currentStyle
    }, dn = function (t, n, r) {
        var i, o, a, s = r || fn(t), l = s ? s[n] : e, u = t.style;
        return null == l && u && u[n] && (l = u[n]), xn.test(l) && !gn.test(n) && (i = u.left, o = t.runtimeStyle, a = o && o.left, a && (o.left = t.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    }), ce.each(["height", "width"], function (t, e) {
        ce.cssHooks[e] = {
            get: function (t, n, r) {
                return n ? 0 === t.offsetWidth && mn.test(ce.css(t, "display")) ? ce.swap(t, Sn, function () {
                    return E(t, e, r)
                }) : E(t, e, r) : void 0
            }, set: function (t, n, r) {
                var i = r && fn(t);
                return C(t, n, r ? T(t, e, r, ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ce.support.opacity || (ce.cssHooks.opacity = {
        get: function (t, e) {
            return pn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        }, set: function (t, e) {
            var n = t.style, r = t.currentStyle, i = ce.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === ce.trim(o.replace(hn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || r && !r.filter) || (n.filter = hn.test(o) ? o.replace(hn, i) : o + " " + i)
        }
    }), ce(function () {
        ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
            get: function (t, e) {
                return e ? ce.swap(t, {display: "inline-block"}, dn, [t, "marginRight"]) : void 0
            }
        }), !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"], function (t, e) {
            ce.cssHooks[e] = {
                get: function (t, n) {
                    return n ? (n = dn(t, e), xn.test(n) ? ce(t).position()[e] + "px" : n) : void 0
                }
            }
        })
    }), ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ce.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ce.css(t, "display"))
    }, ce.expr.filters.visible = function (t) {
        return !ce.expr.filters.hidden(t)
    }), ce.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        ce.cssHooks[t + e] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[t + _n[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, vn.test(t) || (ce.cssHooks[t + e].set = C)
    });
    var Tn = /%20/g, En = /\[\]$/, Nn = /\r?\n/g, An = /^(?:submit|button|image|reset|file)$/i, jn = /^(?:input|select|textarea|keygen)/i;
    ce.fn.extend({
        serialize: function () {
            return ce.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = ce.prop(this, "elements");
                return t ? ce.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !ce(this).is(":disabled") && jn.test(this.nodeName) && !An.test(t) && (this.checked || !en.test(t))
            }).map(function (t, e) {
                var n = ce(this).val();
                return null == n ? null : ce.isArray(n) ? ce.map(n, function (t) {
                    return {name: e.name, value: t.replace(Nn, "\r\n")}
                }) : {name: e.name, value: n.replace(Nn, "\r\n")}
            }).get()
        }
    }), ce.param = function (t, n) {
        var r, i = [], o = function (t, e) {
            e = ce.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (n === e && (n = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(t) || t.jquery && !ce.isPlainObject(t))ce.each(t, function () {
            o(this.name, this.value)
        }); else for (r in t)j(r, t[r], n, o);
        return i.join("&").replace(Tn, "+")
    }, ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        ce.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ce.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }, bind: function (t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, n, r) {
            return this.on(e, t, n, r)
        }, undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Ln, Bn, Mn = ce.now(), Dn = /\?/, Pn = /#.*$/, Fn = /([?&])_=[^&]*/, qn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Rn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Hn = /^(?:GET|HEAD)$/, On = /^\/\//, zn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, In = ce.fn.load, $n = {}, Wn = {}, Xn = "*/".concat("*");
    try {
        Bn = G.href
    } catch (Vn) {
        Bn = J.createElement("a"), Bn.href = "", Bn = Bn.href
    }
    Ln = zn.exec(Bn.toLowerCase()) || [], ce.fn.load = function (t, n, r) {
        if ("string" != typeof t && In)return In.apply(this, arguments);
        var i, o, a, s = this, l = t.indexOf(" ");
        return l >= 0 && (i = t.slice(l, t.length), t = t.slice(0, l)), ce.isFunction(n) ? (r = n, n = e) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ce.ajax({
            url: t,
            type: a,
            dataType: "html",
            data: n
        }).done(function (t) {
            o = arguments, s.html(i ? ce("<div>").append(ce.parseHTML(t)).find(i) : t)
        }).complete(r && function (t, e) {
                s.each(r, o || [t.responseText, e, t])
            }), this
    }, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ce.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Bn,
            type: "GET",
            isLocal: Rn.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": ce.parseJSON, "text xml": ce.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? M(M(t, ce.ajaxSettings), e) : M(ce.ajaxSettings, t)
        },
        ajaxPrefilter: L($n),
        ajaxTransport: L(Wn),
        ajax: function (t, n) {
            function r(t, n, r, i) {
                var o, f, y, x, w, k = n;
                2 !== b && (b = 2, l && clearTimeout(l), c = e, s = i || "", S.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, r && (x = D(d, S, r)), x = P(d, x, S, o), o ? (d.ifModified && (w = S.getResponseHeader("Last-Modified"), w && (ce.lastModified[a] = w), w = S.getResponseHeader("etag"), w && (ce.etag[a] = w)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = x.state, f = x.data, y = x.error, o = !y)) : (y = k, (t || !k) && (k = "error", 0 > t && (t = 0))), S.status = t, S.statusText = (n || k) + "", o ? g.resolveWith(h, [f, k, S]) : g.rejectWith(h, [S, k, y]), S.statusCode(v), v = e, u && p.trigger(o ? "ajaxSuccess" : "ajaxError", [S, d, o ? f : y]), m.fireWith(h, [S, k]), u && (p.trigger("ajaxComplete", [S, d]), --ce.active || ce.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = e), n = n || {};
            var i, o, a, s, l, u, c, f, d = ce.ajaxSetup({}, n), h = d.context || d, p = d.context && (h.nodeType || h.jquery) ? ce(h) : ce.event, g = ce.Deferred(), m = ce.Callbacks("once memory"), v = d.statusCode || {}, y = {}, x = {}, b = 0, w = "canceled", S = {
                readyState: 0,
                getResponseHeader: function (t) {
                    var e;
                    if (2 === b) {
                        if (!f)for (f = {}; e = qn.exec(s);)f[e[1].toLowerCase()] = e[2];
                        e = f[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function () {
                    return 2 === b ? s : null
                },
                setRequestHeader: function (t, e) {
                    var n = t.toLowerCase();
                    return b || (t = x[n] = x[n] || t, y[t] = e), this
                },
                overrideMimeType: function (t) {
                    return b || (d.mimeType = t), this
                },
                statusCode: function (t) {
                    var e;
                    if (t)if (2 > b)for (e in t)v[e] = [v[e], t[e]]; else S.always(t[S.status]);
                    return this
                },
                abort: function (t) {
                    var e = t || w;
                    return c && c.abort(e), r(0, e), this
                }
            };
            if (g.promise(S).complete = m.add, S.success = S.done, S.error = S.fail, d.url = ((t || d.url || Bn) + "").replace(Pn, "").replace(On, Ln[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ce.trim(d.dataType || "*").toLowerCase().match(de) || [""], null == d.crossDomain && (i = zn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ln[3] || ("http:" === Ln[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ce.param(d.data, d.traditional)), B($n, d, n, S), 2 === b)return S;
            u = d.global, u && 0 === ce.active++ && ce.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Hn.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Dn.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Fn.test(a) ? a.replace(Fn, "$1_=" + Mn++) : a + (Dn.test(a) ? "&" : "?") + "_=" + Mn++)), d.ifModified && (ce.lastModified[a] && S.setRequestHeader("If-Modified-Since", ce.lastModified[a]), ce.etag[a] && S.setRequestHeader("If-None-Match", ce.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", d.contentType), S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers)S.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(h, S, d) === !1 || 2 === b))return S.abort();
            w = "abort";
            for (o in{success: 1, error: 1, complete: 1})S[o](d[o]);
            if (c = B(Wn, d, n, S)) {
                S.readyState = 1, u && p.trigger("ajaxSend", [S, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
                    S.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, c.send(y, r)
                } catch (k) {
                    if (!(2 > b))throw k;
                    r(-1, k)
                }
            } else r(-1, "No Transport");
            return S
        },
        getJSON: function (t, e, n) {
            return ce.get(t, e, n, "json")
        },
        getScript: function (t, n) {
            return ce.get(t, e, n, "script")
        }
    }), ce.each(["get", "post"], function (t, n) {
        ce[n] = function (t, r, i, o) {
            return ce.isFunction(r) && (o = o || i, i = r, r = e), ce.ajax({
                url: t,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ce.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (t) {
                return ce.globalEval(t), t
            }
        }
    }), ce.ajaxPrefilter("script", function (t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ce.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var n, r = J.head || ce("head")[0] || J.documentElement;
            return {
                send: function (e, i) {
                    n = J.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function (t, e) {
                        (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(e, !0)
                }
            }
        }
    });
    var Un = [], Yn = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = Un.pop() || ce.expando + "_" + Mn++;
            return this[t] = !0, t
        }
    }), ce.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ce.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yn, "$1" + o) : n.jsonp !== !1 && (n.url += (Dn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || ce.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = t[o], t[o] = function () {
            s = arguments
        }, i.always(function () {
            t[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Un.push(o)), s && ce.isFunction(a) && a(s[0]), s = a = e
        }), "script") : void 0
    });
    var Gn, Jn, Qn = 0, Kn = t.ActiveXObject && function () {
            var t;
            for (t in Gn)Gn[t](e, !0)
        };
    ce.ajaxSettings.xhr = t.ActiveXObject ? function () {
        return !this.isLocal && F() || q()
    } : F, Jn = ce.ajaxSettings.xhr(), ce.support.cors = !!Jn && "withCredentials" in Jn, Jn = ce.support.ajax = !!Jn, Jn && ce.ajaxTransport(function (n) {
        if (!n.crossDomain || ce.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)l.setRequestHeader(s, i[s])
                    } catch (u) {
                    }
                    l.send(n.hasContent && n.data || null), r = function (t, i) {
                        var s, u, c, f;
                        try {
                            if (r && (i || 4 === l.readyState))if (r = e, a && (l.onreadystatechange = ce.noop, Kn && delete Gn[a]), i)4 !== l.readyState && l.abort(); else {
                                f = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (f.text = l.responseText);
                                try {
                                    c = l.statusText
                                } catch (d) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch (h) {
                            i || o(-1, h)
                        }
                        f && o(s, c, f, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Qn, Kn && (Gn || (Gn = {}, ce(t).unload(Kn)), Gn[a] = r), l.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(e, !0)
                }
            }
        }
    });
    var Zn, tr, er = /^(?:toggle|show|hide)$/, nr = new RegExp("^(?:([+-])=|)(" + fe + ")([a-z%]*)$", "i"), rr = /queueHooks$/, ir = [I], or = {
        "*": [function (t, e) {
            var n = this.createTween(t, e), r = n.cur(), i = nr.exec(e), o = i && i[3] || (ce.cssNumber[t] ? "" : "px"), a = (ce.cssNumber[t] || "px" !== o && +r) && nr.exec(ce.css(n.elem, t)), s = 1, l = 20;
            if (a && a[3] !== o) {
                o = o || a[3], i = i || [], a = +r || 1;
                do s = s || ".5", a /= s, ce.style(n.elem, t, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
            }
            return i && (n.unit = o, n.start = +a || +r || 0, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
        }]
    };
    ce.Animation = ce.extend(O, {
        tweener: function (t, e) {
            ce.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, r = 0, i = t.length; i > r; r++)n = t[r], or[n] = or[n] || [], or[n].unshift(e)
        }, prefilter: function (t, e) {
            e ? ir.unshift(t) : ir.push(t)
        }
    }), ce.Tween = $, $.prototype = {
        constructor: $, init: function (t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var t = $.propHooks[this.prop];
            return t && t.get ? t.get(this) : $.propHooks._default.get(this)
        }, run: function (t) {
            var e, n = $.propHooks[this.prop];
            return this.pos = e = this.options.duration ? ce.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ce.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            }, set: function (t) {
                ce.fx.step[t.prop] ? ce.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ce.cssProps[t.prop]] || ce.cssHooks[t.prop]) ? ce.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ce.each(["toggle", "show", "hide"], function (t, e) {
        var n = ce.fn[e];
        ce.fn[e] = function (t, r, i) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(W(e, !0), t, r, i)
        }
    }), ce.fn.extend({
        fadeTo: function (t, e, n, r) {
            return this.filter(k).css("opacity", 0).show().end().animate({opacity: e}, t, n, r)
        }, animate: function (t, e, n, r) {
            var i = ce.isEmptyObject(t), o = ce.speed(e, n, r), a = function () {
                var e = O(this, ce.extend({}, t), o);
                a.finish = function () {
                    e.stop(!0)
                }, (i || ce._data(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (t, n, r) {
            var i = function (t) {
                var e = t.stop;
                delete t.stop, e(r)
            };
            return "string" != typeof t && (r = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, n = null != t && t + "queueHooks", o = ce.timers, a = ce._data(this);
                if (n)a[n] && a[n].stop && i(a[n]); else for (n in a)a[n] && a[n].stop && rr.test(n) && i(a[n]);
                for (n = o.length; n--;)o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(r), e = !1, o.splice(n, 1));
                (e || !r) && ce.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, n = ce._data(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = ce.timers, a = r ? r.length : 0;
                for (n.finish = !0, ce.queue(this, t, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; a > e; e++)r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish
            })
        }
    }), ce.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        ce.fn[t] = function (t, n, r) {
            return this.animate(e, t, n, r)
        }
    }), ce.speed = function (t, e, n) {
        var r = t && "object" == typeof t ? ce.extend({}, t) : {
            complete: n || !n && e || ce.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ce.isFunction(e) && e
        };
        return r.duration = ce.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ce.fx.speeds ? ce.fx.speeds[r.duration] : ce.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ce.isFunction(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
        }, r
    }, ce.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, ce.timers = [], ce.fx = $.prototype.init, ce.fx.tick = function () {
        var t, n = ce.timers, r = 0;
        for (Zn = ce.now(); r < n.length; r++)t = n[r], t() || n[r] !== t || n.splice(r--, 1);
        n.length || ce.fx.stop(), Zn = e
    }, ce.fx.timer = function (t) {
        t() && ce.timers.push(t) && ce.fx.start()
    }, ce.fx.interval = 13, ce.fx.start = function () {
        tr || (tr = setInterval(ce.fx.tick, ce.fx.interval))
    }, ce.fx.stop = function () {
        clearInterval(tr), tr = null
    }, ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ce.fx.step = {}, ce.expr && ce.expr.filters && (ce.expr.filters.animated = function (t) {
        return ce.grep(ce.timers, function (e) {
            return t === e.elem
        }).length
    }), ce.fn.offset = function (t) {
        if (arguments.length)return t === e ? this : this.each(function (e) {
            ce.offset.setOffset(this, t, e)
        });
        var n, r, i = {top: 0, left: 0}, o = this[0], a = o && o.ownerDocument;
        if (a)return n = a.documentElement, ce.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (i = o.getBoundingClientRect()), r = X(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    }, ce.offset = {
        setOffset: function (t, e, n) {
            var r = ce.css(t, "position");
            "static" === r && (t.style.position = "relative");
            var i, o, a = ce(t), s = a.offset(), l = ce.css(t, "top"), u = ce.css(t, "left"), c = ("absolute" === r || "fixed" === r) && ce.inArray("auto", [l, u]) > -1, f = {}, d = {};
            c ? (d = a.position(), i = d.top, o = d.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), ce.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (f.top = e.top - s.top + i), null != e.left && (f.left = e.left - s.left + o), "using" in e ? e.using.call(t, f) : a.css(f)
        }
    }, ce.fn.extend({
        position: function () {
            if (this[0]) {
                var t, e, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === ce.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ce.nodeName(t[0], "html") || (n = t.offset()), n.top += ce.css(t[0], "borderTopWidth", !0), n.left += ce.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - ce.css(r, "marginTop", !0),
                    left: e.left - n.left - ce.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || Q; t && !ce.nodeName(t, "html") && "static" === ce.css(t, "position");)t = t.offsetParent;
                return t || Q
            })
        }
    }), ce.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
        var r = /Y/.test(n);
        ce.fn[t] = function (i) {
            return ce.access(this, function (t, i, o) {
                var a = X(t);
                return o === e ? a ? n in a ? a[n] : a.document.documentElement[i] : t[i] : (a ? a.scrollTo(r ? ce(a).scrollLeft() : o, r ? o : ce(a).scrollTop()) : t[i] = o, void 0)
            }, t, i, arguments.length, null)
        }
    }), ce.each({Height: "height", Width: "width"}, function (t, n) {
        ce.each({padding: "inner" + t, content: n, "": "outer" + t}, function (r, i) {
            ce.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return ce.access(this, function (n, r, i) {
                    var o;
                    return ce.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : i === e ? ce.css(n, r, s) : ce.style(n, r, i, s)
                }, n, a ? i : e, a, null)
            }
        })
    }), ce.fn.size = function () {
        return this.length
    }, ce.fn.andSelf = ce.fn.addBack, "object" == typeof module && "object" == typeof module.exports ? module.exports = ce : (t.jQuery = t.$ = ce, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ce
    }))
}(window), function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n;
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (e, n, r) {
            var i = t.Event(n);
            return e.trigger(i, r), i.result !== !1
        },
        confirm: function (t) {
            return confirm(t)
        },
        ajax: function (e) {
            return t.ajax(e)
        },
        href: function (t) {
            return t.attr("href")
        },
        handleRemote: function (r) {
            var i, o, a, s, l, u, c, f;
            if (n.fire(r, "ajax:before")) {
                if (s = r.data("cross-domain"), l = s === e ? null : s, u = r.data("with-credentials") || null, c = r.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, r.is("form")) {
                    i = r.attr("method"), o = r.attr("action"), a = r.serializeArray();
                    var d = r.data("ujs:submit-button");
                    d && (a.push(d), r.data("ujs:submit-button", null))
                } else r.is(n.inputChangeSelector) ? (i = r.data("method"), o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : (i = r.data("method"), o = n.href(r), a = r.data("params") || null);
                f = {
                    type: i || "GET", data: a, dataType: c, beforeSend: function (t, i) {
                        return i.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), n.fire(r, "ajax:beforeSend", [t, i])
                    }, success: function (t, e, n) {
                        r.trigger("ajax:success", [t, e, n])
                    }, complete: function (t, e) {
                        r.trigger("ajax:complete", [t, e])
                    }, error: function (t, e, n) {
                        r.trigger("ajax:error", [t, e, n])
                    }, crossDomain: l
                }, u && (f.xhrFields = {withCredentials: u}), o && (f.url = o);
                var h = n.ajax(f);
                return r.trigger("ajax:send", h), h
            }
            return !1
        },
        handleMethod: function (r) {
            var i = n.href(r), o = r.data("method"), a = r.attr("target"), s = t("meta[name=csrf-token]").attr("content"), l = t("meta[name=csrf-param]").attr("content"), u = t('<form method="post" action="' + i + '"></form>'), c = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== e && s !== e && (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && u.attr("target", a), u.hide().append(c).appendTo("body"), u.submit()
        },
        disableFormElements: function (e) {
            e.find(n.disableSelector).each(function () {
                var e = t(this), n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with", e[n]()), e[n](e.data("disable-with")), e.prop("disabled", !0)
            })
        },
        enableFormElements: function (e) {
            e.find(n.enableSelector).each(function () {
                var e = t(this), n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")), e.prop("disabled", !1)
            })
        },
        allowAction: function (t) {
            var e, r = t.data("confirm"), i = !1;
            return r ? (n.fire(t, "confirm") && (i = n.confirm(r), e = n.fire(t, "confirm:complete", [i])), i && e) : !0
        },
        blankInputs: function (e, n, r) {
            var i, o, a = t(), s = n || "input,textarea", l = e.find(s);
            return l.each(function () {
                if (i = t(this), o = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : i.val(), !o == !r) {
                    if (i.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + i.attr("name") + '"]').length)return !0;
                    a = a.add(i)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function (t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function (t) {
            t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function (t) {
                return n.stopEverything(t)
            })
        },
        enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, n.fire(t(document), "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, r) {
        t.crossDomain || n.CSRFProtection(r)
    }), t(document).delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(t(this))
    }), t(document).delegate(n.linkClickSelector, "click.rails", function (r) {
        var i = t(this), o = i.data("method"), a = i.data("params");
        if (!n.allowAction(i))return n.stopEverything(r);
        if (i.is(n.linkDisableSelector) && n.disableElement(i), i.data("remote") !== e) {
            if (!(!r.metaKey && !r.ctrlKey || o && "GET" !== o || a))return !0;
            var s = n.handleRemote(i);
            return s === !1 ? n.enableElement(i) : s.error(function () {
                n.enableElement(i)
            }), !1
        }
        return i.data("method") ? (n.handleMethod(i), !1) : void 0
    }), t(document).delegate(n.buttonClickSelector, "click.rails", function (e) {
        var r = t(this);
        return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(e)
    }), t(document).delegate(n.inputChangeSelector, "change.rails", function (e) {
        var r = t(this);
        return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(e)
    }), t(document).delegate(n.formSubmitSelector, "submit.rails", function (r) {
        var i = t(this), o = i.data("remote") !== e, a = n.blankInputs(i, n.requiredInputSelector), s = n.nonBlankInputs(i, n.fileInputSelector);
        if (!n.allowAction(i))return n.stopEverything(r);
        if (a && i.attr("novalidate") == e && n.fire(i, "ajax:aborted:required", [a]))return n.stopEverything(r);
        if (o) {
            if (s) {
                setTimeout(function () {
                    n.disableFormElements(i)
                }, 13);
                var l = n.fire(i, "ajax:aborted:file", [s]);
                return l || setTimeout(function () {
                    n.enableFormElements(i)
                }, 13), l
            }
            return n.handleRemote(i), !1
        }
        setTimeout(function () {
            n.disableFormElements(i)
        }, 13)
    }), t(document).delegate(n.formInputClickSelector, "click.rails", function (e) {
        var r = t(this);
        if (!n.allowAction(r))return n.stopEverything(e);
        var i = r.attr("name"), o = i ? {name: i, value: r.val()} : null;
        r.closest("form").data("ujs:submit-button", o)
    }), t(document).delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function (e) {
        this == e.target && n.disableFormElements(t(this))
    }), t(document).delegate(n.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function () {
        var e = t("meta[name=csrf-token]").attr("content"), n = t("meta[name=csrf-param]").attr("content");
        t('form input[name="' + n + '"]').val(e)
    }))
}(jQuery), !function () {
    var t = this, e = t._, n = {}, r = Array.prototype, i = Object.prototype, o = Function.prototype, a = r.push, s = r.slice, l = r.concat, u = i.toString, c = i.hasOwnProperty, f = r.forEach, d = r.map, h = r.reduce, p = r.reduceRight, g = r.filter, m = r.every, v = r.some, y = r.indexOf, x = r.lastIndexOf, b = Array.isArray, w = Object.keys, S = o.bind, k = function (t) {
        return t instanceof k ? t : this instanceof k ? (this._wrapped = t, void 0) : new k(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : t._ = k, k.VERSION = "1.5.1";
    var _ = k.each = k.forEach = function (t, e, r) {
        if (null != t)if (f && t.forEach === f)t.forEach(e, r); else if (t.length === +t.length) {
            for (var i = 0, o = t.length; o > i; i++)if (e.call(r, t[i], i, t) === n)return
        } else for (var a in t)if (k.has(t, a) && e.call(r, t[a], a, t) === n)return
    };
    k.map = k.collect = function (t, e, n) {
        var r = [];
        return null == t ? r : d && t.map === d ? t.map(e, n) : (_(t, function (t, i, o) {
            r.push(e.call(n, t, i, o))
        }), r)
    };
    var C = "Reduce of empty array with no initial value";
    k.reduce = k.foldl = k.inject = function (t, e, n, r) {
        var i = arguments.length > 2;
        if (null == t && (t = []), h && t.reduce === h)return r && (e = k.bind(e, r)), i ? t.reduce(e, n) : t.reduce(e);
        if (_(t, function (t, o, a) {
                i ? n = e.call(r, n, t, o, a) : (n = t, i = !0)
            }), !i)throw new TypeError(C);
        return n
    }, k.reduceRight = k.foldr = function (t, e, n, r) {
        var i = arguments.length > 2;
        if (null == t && (t = []), p && t.reduceRight === p)return r && (e = k.bind(e, r)), i ? t.reduceRight(e, n) : t.reduceRight(e);
        var o = t.length;
        if (o !== +o) {
            var a = k.keys(t);
            o = a.length
        }
        if (_(t, function (s, l, u) {
                l = a ? a[--o] : --o, i ? n = e.call(r, n, t[l], l, u) : (n = t[l], i = !0)
            }), !i)throw new TypeError(C);
        return n
    }, k.find = k.detect = function (t, e, n) {
        var r;
        return T(t, function (t, i, o) {
            return e.call(n, t, i, o) ? (r = t, !0) : void 0
        }), r
    }, k.filter = k.select = function (t, e, n) {
        var r = [];
        return null == t ? r : g && t.filter === g ? t.filter(e, n) : (_(t, function (t, i, o) {
            e.call(n, t, i, o) && r.push(t)
        }), r)
    }, k.reject = function (t, e, n) {
        return k.filter(t, function (t, r, i) {
            return !e.call(n, t, r, i)
        }, n)
    }, k.every = k.all = function (t, e, r) {
        e || (e = k.identity);
        var i = !0;
        return null == t ? i : m && t.every === m ? t.every(e, r) : (_(t, function (t, o, a) {
            return (i = i && e.call(r, t, o, a)) ? void 0 : n
        }), !!i)
    };
    var T = k.some = k.any = function (t, e, r) {
        e || (e = k.identity);
        var i = !1;
        return null == t ? i : v && t.some === v ? t.some(e, r) : (_(t, function (t, o, a) {
            return i || (i = e.call(r, t, o, a)) ? n : void 0
        }), !!i)
    };
    k.contains = k.include = function (t, e) {
        return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : T(t, function (t) {
            return t === e
        })
    }, k.invoke = function (t, e) {
        var n = s.call(arguments, 2), r = k.isFunction(e);
        return k.map(t, function (t) {
            return (r ? e : t[e]).apply(t, n)
        })
    }, k.pluck = function (t, e) {
        return k.map(t, function (t) {
            return t[e]
        })
    }, k.where = function (t, e, n) {
        return k.isEmpty(e) ? n ? void 0 : [] : k[n ? "find" : "filter"](t, function (t) {
            for (var n in e)if (e[n] !== t[n])return !1;
            return !0
        })
    }, k.findWhere = function (t, e) {
        return k.where(t, e, !0)
    }, k.max = function (t, e, n) {
        if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535)return Math.max.apply(Math, t);
        if (!e && k.isEmpty(t))return -1 / 0;
        var r = {computed: -1 / 0, value: -1 / 0};
        return _(t, function (t, i, o) {
            var a = e ? e.call(n, t, i, o) : t;
            a > r.computed && (r = {value: t, computed: a})
        }), r.value
    }, k.min = function (t, e, n) {
        if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535)return Math.min.apply(Math, t);
        if (!e && k.isEmpty(t))return 1 / 0;
        var r = {computed: 1 / 0, value: 1 / 0};
        return _(t, function (t, i, o) {
            var a = e ? e.call(n, t, i, o) : t;
            a < r.computed && (r = {value: t, computed: a})
        }), r.value
    }, k.shuffle = function (t) {
        var e, n = 0, r = [];
        return _(t, function (t) {
            e = k.random(n++), r[n - 1] = r[e], r[e] = t
        }), r
    };
    var E = function (t) {
        return k.isFunction(t) ? t : function (e) {
            return e[t]
        }
    };
    k.sortBy = function (t, e, n) {
        var r = E(e);
        return k.pluck(k.map(t, function (t, e, i) {
            return {value: t, index: e, criteria: r.call(n, t, e, i)}
        }).sort(function (t, e) {
            var n = t.criteria, r = e.criteria;
            if (n !== r) {
                if (n > r || void 0 === n)return 1;
                if (r > n || void 0 === r)return -1
            }
            return t.index < e.index ? -1 : 1
        }), "value")
    };
    var N = function (t, e, n, r) {
        var i = {}, o = E(null == e ? k.identity : e);
        return _(t, function (e, a) {
            var s = o.call(n, e, a, t);
            r(i, s, e)
        }), i
    };
    k.groupBy = function (t, e, n) {
        return N(t, e, n, function (t, e, n) {
            (k.has(t, e) ? t[e] : t[e] = []).push(n)
        })
    }, k.countBy = function (t, e, n) {
        return N(t, e, n, function (t, e) {
            k.has(t, e) || (t[e] = 0), t[e]++
        })
    }, k.sortedIndex = function (t, e, n, r) {
        n = null == n ? k.identity : E(n);
        for (var i = n.call(r, e), o = 0, a = t.length; a > o;) {
            var s = o + a >>> 1;
            n.call(r, t[s]) < i ? o = s + 1 : a = s
        }
        return o
    }, k.toArray = function (t) {
        return t ? k.isArray(t) ? s.call(t) : t.length === +t.length ? k.map(t, k.identity) : k.values(t) : []
    }, k.size = function (t) {
        return null == t ? 0 : t.length === +t.length ? t.length : k.keys(t).length
    }, k.first = k.head = k.take = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[0] : s.call(t, 0, e)
    }, k.initial = function (t, e, n) {
        return s.call(t, 0, t.length - (null == e || n ? 1 : e))
    }, k.last = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0))
    }, k.rest = k.tail = k.drop = function (t, e, n) {
        return s.call(t, null == e || n ? 1 : e)
    }, k.compact = function (t) {
        return k.filter(t, k.identity)
    };
    var A = function (t, e, n) {
        return e && k.every(t, k.isArray) ? l.apply(n, t) : (_(t, function (t) {
            k.isArray(t) || k.isArguments(t) ? e ? a.apply(n, t) : A(t, e, n) : n.push(t)
        }), n)
    };
    k.flatten = function (t, e) {
        return A(t, e, [])
    }, k.without = function (t) {
        return k.difference(t, s.call(arguments, 1))
    }, k.uniq = k.unique = function (t, e, n, r) {
        k.isFunction(e) && (r = n, n = e, e = !1);
        var i = n ? k.map(t, n, r) : t, o = [], a = [];
        return _(i, function (n, r) {
            (e ? r && a[a.length - 1] === n : k.contains(a, n)) || (a.push(n), o.push(t[r]))
        }), o
    }, k.union = function () {
        return k.uniq(k.flatten(arguments, !0))
    }, k.intersection = function (t) {
        var e = s.call(arguments, 1);
        return k.filter(k.uniq(t), function (t) {
            return k.every(e, function (e) {
                return k.indexOf(e, t) >= 0
            })
        })
    }, k.difference = function (t) {
        var e = l.apply(r, s.call(arguments, 1));
        return k.filter(t, function (t) {
            return !k.contains(e, t)
        })
    }, k.zip = function () {
        for (var t = k.max(k.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++)e[n] = k.pluck(arguments, "" + n);
        return e
    }, k.object = function (t, e) {
        if (null == t)return {};
        for (var n = {}, r = 0, i = t.length; i > r; r++)e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
        return n
    }, k.indexOf = function (t, e, n) {
        if (null == t)return -1;
        var r = 0, i = t.length;
        if (n) {
            if ("number" != typeof n)return r = k.sortedIndex(t, e), t[r] === e ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        if (y && t.indexOf === y)return t.indexOf(e, n);
        for (; i > r; r++)if (t[r] === e)return r;
        return -1
    }, k.lastIndexOf = function (t, e, n) {
        if (null == t)return -1;
        var r = null != n;
        if (x && t.lastIndexOf === x)return r ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
        for (var i = r ? n : t.length; i--;)if (t[i] === e)return i;
        return -1
    }, k.range = function (t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((e - t) / n), 0), i = 0, o = new Array(r); r > i;)o[i++] = t, t += n;
        return o
    };
    var j = function () {
    };
    k.bind = function (t, e) {
        var n, r;
        if (S && t.bind === S)return S.apply(t, s.call(arguments, 1));
        if (!k.isFunction(t))throw new TypeError;
        return n = s.call(arguments, 2), r = function () {
            if (!(this instanceof r))return t.apply(e, n.concat(s.call(arguments)));
            j.prototype = t.prototype;
            var i = new j;
            j.prototype = null;
            var o = t.apply(i, n.concat(s.call(arguments)));
            return Object(o) === o ? o : i
        }
    }, k.partial = function (t) {
        var e = s.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(s.call(arguments)))
        }
    }, k.bindAll = function (t) {
        var e = s.call(arguments, 1);
        if (0 === e.length)throw new Error("bindAll must be passed function names");
        return _(e, function (e) {
            t[e] = k.bind(t[e], t)
        }), t
    }, k.memoize = function (t, e) {
        var n = {};
        return e || (e = k.identity), function () {
            var r = e.apply(this, arguments);
            return k.has(n, r) ? n[r] : n[r] = t.apply(this, arguments)
        }
    }, k.delay = function (t, e) {
        var n = s.call(arguments, 2);
        return setTimeout(function () {
            return t.apply(null, n)
        }, e)
    }, k.defer = function (t) {
        return k.delay.apply(k, [t, 1].concat(s.call(arguments, 1)))
    }, k.throttle = function (t, e, n) {
        var r, i, o, a = null, s = 0;
        n || (n = {});
        var l = function () {
            s = n.leading === !1 ? 0 : new Date, a = null, o = t.apply(r, i)
        };
        return function () {
            var u = new Date;
            s || n.leading !== !1 || (s = u);
            var c = e - (u - s);
            return r = this, i = arguments, 0 >= c ? (clearTimeout(a), a = null, s = u, o = t.apply(r, i)) : a || n.trailing === !1 || (a = setTimeout(l, c)), o
        }
    }, k.debounce = function (t, e, n) {
        var r, i = null;
        return function () {
            var o = this, a = arguments, s = function () {
                i = null, n || (r = t.apply(o, a))
            }, l = n && !i;
            return clearTimeout(i), i = setTimeout(s, e), l && (r = t.apply(o, a)), r
        }
    }, k.once = function (t) {
        var e, n = !1;
        return function () {
            return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
        }
    }, k.wrap = function (t, e) {
        return function () {
            var n = [t];
            return a.apply(n, arguments), e.apply(this, n)
        }
    }, k.compose = function () {
        var t = arguments;
        return function () {
            for (var e = arguments, n = t.length - 1; n >= 0; n--)e = [t[n].apply(this, e)];
            return e[0]
        }
    }, k.after = function (t, e) {
        return function () {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, k.keys = w || function (t) {
            if (t !== Object(t))throw new TypeError("Invalid object");
            var e = [];
            for (var n in t)k.has(t, n) && e.push(n);
            return e
        }, k.values = function (t) {
        var e = [];
        for (var n in t)k.has(t, n) && e.push(t[n]);
        return e
    }, k.pairs = function (t) {
        var e = [];
        for (var n in t)k.has(t, n) && e.push([n, t[n]]);
        return e
    }, k.invert = function (t) {
        var e = {};
        for (var n in t)k.has(t, n) && (e[t[n]] = n);
        return e
    }, k.functions = k.methods = function (t) {
        var e = [];
        for (var n in t)k.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, k.extend = function (t) {
        return _(s.call(arguments, 1), function (e) {
            if (e)for (var n in e)t[n] = e[n]
        }), t
    }, k.pick = function (t) {
        var e = {}, n = l.apply(r, s.call(arguments, 1));
        return _(n, function (n) {
            n in t && (e[n] = t[n])
        }), e
    }, k.omit = function (t) {
        var e = {}, n = l.apply(r, s.call(arguments, 1));
        for (var i in t)k.contains(n, i) || (e[i] = t[i]);
        return e
    }, k.defaults = function (t) {
        return _(s.call(arguments, 1), function (e) {
            if (e)for (var n in e)void 0 === t[n] && (t[n] = e[n])
        }), t
    }, k.clone = function (t) {
        return k.isObject(t) ? k.isArray(t) ? t.slice() : k.extend({}, t) : t
    }, k.tap = function (t, e) {
        return e(t), t
    };
    var L = function (t, e, n, r) {
        if (t === e)return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e)return t === e;
        t instanceof k && (t = t._wrapped), e instanceof k && (e = e._wrapped);
        var i = u.call(t);
        if (i != u.call(e))return !1;
        switch (i) {
            case"[object String]":
                return t == String(e);
            case"[object Number]":
                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
            case"[object Date]":
            case"[object Boolean]":
                return +t == +e;
            case"[object RegExp]":
                return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e)return !1;
        for (var o = n.length; o--;)if (n[o] == t)return r[o] == e;
        var a = t.constructor, s = e.constructor;
        if (a !== s && !(k.isFunction(a) && a instanceof a && k.isFunction(s) && s instanceof s))return !1;
        n.push(t), r.push(e);
        var l = 0, c = !0;
        if ("[object Array]" == i) {
            if (l = t.length, c = l == e.length)for (; l-- && (c = L(t[l], e[l], n, r)););
        } else {
            for (var f in t)if (k.has(t, f) && (l++, !(c = k.has(e, f) && L(t[f], e[f], n, r))))break;
            if (c) {
                for (f in e)if (k.has(e, f) && !l--)break;
                c = !l
            }
        }
        return n.pop(), r.pop(), c
    };
    k.isEqual = function (t, e) {
        return L(t, e, [], [])
    }, k.isEmpty = function (t) {
        if (null == t)return !0;
        if (k.isArray(t) || k.isString(t))return 0 === t.length;
        for (var e in t)if (k.has(t, e))return !1;
        return !0
    }, k.isElement = function (t) {
        return !(!t || 1 !== t.nodeType)
    }, k.isArray = b || function (t) {
            return "[object Array]" == u.call(t)
        }, k.isObject = function (t) {
        return t === Object(t)
    }, _(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
        k["is" + t] = function (e) {
            return u.call(e) == "[object " + t + "]"
        }
    }), k.isArguments(arguments) || (k.isArguments = function (t) {
        return !(!t || !k.has(t, "callee"))
    }), "function" != typeof/./ && (k.isFunction = function (t) {
        return "function" == typeof t
    }), k.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, k.isNaN = function (t) {
        return k.isNumber(t) && t != +t
    }, k.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" == u.call(t)
    }, k.isNull = function (t) {
        return null === t
    }, k.isUndefined = function (t) {
        return void 0 === t
    }, k.has = function (t, e) {
        return c.call(t, e)
    }, k.noConflict = function () {
        return t._ = e, this
    }, k.identity = function (t) {
        return t
    }, k.times = function (t, e, n) {
        for (var r = Array(Math.max(0, t)), i = 0; t > i; i++)r[i] = e.call(n, i);
        return r
    }, k.random = function (t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    };
    var B = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;"}};
    B.unescape = k.invert(B.escape);
    var M = {
        escape: new RegExp("[" + k.keys(B.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + k.keys(B.unescape).join("|") + ")", "g")
    };
    k.each(["escape", "unescape"], function (t) {
        k[t] = function (e) {
            return null == e ? "" : ("" + e).replace(M[t], function (e) {
                return B[t][e]
            })
        }
    }), k.result = function (t, e) {
        if (null == t)return void 0;
        var n = t[e];
        return k.isFunction(n) ? n.call(t) : n
    }, k.mixin = function (t) {
        _(k.functions(t), function (e) {
            var n = k[e] = t[e];
            k.prototype[e] = function () {
                var t = [this._wrapped];
                return a.apply(t, arguments), R.call(this, n.apply(k, t))
            }
        })
    };
    var D = 0;
    k.uniqueId = function (t) {
        var e = ++D + "";
        return t ? t + e : e
    }, k.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var P = /(.)^/, F = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, q = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    k.template = function (t, e, n) {
        var r;
        n = k.defaults({}, n, k.templateSettings);
        var i = new RegExp([(n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source].join("|") + "|$", "g"), o = 0, a = "__p+='";
        t.replace(i, function (e, n, r, i, s) {
            return a += t.slice(o, s).replace(q, function (t) {
                return "\\" + F[t]
            }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (a += "';\n" + i + "\n__p+='"), o = s + e.length, e
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", a)
        } catch (s) {
            throw s.source = a, s
        }
        if (e)return r(e, k);
        var l = function (t) {
            return r.call(this, t, k)
        };
        return l.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", l
    }, k.chain = function (t) {
        return k(t).chain()
    };
    var R = function (t) {
        return this._chain ? k(t).chain() : t
    };
    k.mixin(k), _(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = r[t];
        k.prototype[t] = function () {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], R.call(this, n)
        }
    }), _(["concat", "join", "slice"], function (t) {
        var e = r[t];
        k.prototype[t] = function () {
            return R.call(this, e.apply(this._wrapped, arguments))
        }
    }), k.extend(k.prototype, {
        chain: function () {
            return this._chain = !0, this
        }, value: function () {
            return this._wrapped
        }
    })
}.call(this), window.Modernizr = function (t, e, n) {
    function r(t) {
        x.cssText = t
    }

    function i(t, e) {
        return r(k.join(t + ";") + (e || ""))
    }

    function o(t, e) {
        return typeof t === e
    }

    function a(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function s(t, e) {
        for (var r in t)if (x[t[r]] !== n)return "pfx" == e ? t[r] : !0;
        return !1
    }

    function l(t, e, r) {
        for (var i in t) {
            var a = e[t[i]];
            if (a !== n)return r === !1 ? t[i] : o(a, "function") ? a.bind(r || e) : a
        }
        return !1
    }

    function u(t, e, n) {
        var r = t.charAt(0).toUpperCase() + t.substr(1), i = (t + " " + C.join(r + " ") + r).split(" ");
        return o(e, "string") || o(e, "undefined") ? s(i, e) : (i = (t + " " + T.join(r + " ") + r).split(" "), l(i, e, n))
    }

    function c() {
        p.input = function (n) {
            for (var r = 0, i = n.length; i > r; r++)j[n[r]] = n[r] in b;
            return j.list && (j.list = !!e.createElement("datalist") && !!t.HTMLDataListElement), j
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function (t) {
            for (var r, i, o, a = 0, s = t.length; s > a; a++)b.setAttribute("type", i = t[a]), r = "text" !== b.type, r && (b.value = w, b.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && b.style.WebkitAppearance !== n ? (m.appendChild(b), o = e.defaultView, r = o.getComputedStyle && "textfield" !== o.getComputedStyle(b, null).WebkitAppearance && 0 !== b.offsetHeight, m.removeChild(b)) : /^(search|tel)$/.test(i) || (/^(url|email)$/.test(i) ? r = b.checkValidity && b.checkValidity() === !1 : /^color$/.test(i) ? (m.appendChild(b), m.offsetWidth, r = b.value != w, m.removeChild(b)) : r = b.value != w)), A[t[a]] = !!r;
            return A
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var f, d, h = "2.5.3", p = {}, g = !0, m = e.documentElement, v = "modernizr", y = e.createElement(v), x = y.style, b = e.createElement("input"), w = ":)", S = {}.toString, k = " -webkit- -moz- -o- -ms- ".split(" "), _ = "Webkit Moz O ms", C = _.split(" "), T = _.toLowerCase().split(" "), E = {svg: "http://www.w3.org/2000/svg"}, N = {}, A = {}, j = {}, L = [], B = L.slice, M = function (t, n, r, i) {
        var o, a, s, l = e.createElement("div"), u = e.body, c = u ? u : e.createElement("body");
        if (parseInt(r, 10))for (; r--;)s = e.createElement("div"), s.id = i ? i[r] : v + (r + 1), l.appendChild(s);
        return o = ["&#173;", "<style>", t, "</style>"].join(""), l.id = v, c.innerHTML += o, c.appendChild(l), u || (c.style.background = "", m.appendChild(c)), a = n(l, t), u ? l.parentNode.removeChild(l) : c.parentNode.removeChild(c), !!a
    }, D = function (e) {
        var n = t.matchMedia || t.msMatchMedia;
        if (n)return n(e).matches;
        var r;
        return M("@media " + e + " { #" + v + " { position: absolute; } }", function (e) {
            r = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
        }), r
    }, P = function () {
        function t(t, i) {
            i = i || e.createElement(r[t] || "div"), t = "on" + t;
            var a = t in i;
            return a || (i.setAttribute || (i = e.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(t, ""), a = o(i[t], "function"), o(i[t], "undefined") || (i[t] = n), i.removeAttribute(t))), i = null, a
        }

        var r = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return t
    }(), F = {}.hasOwnProperty;
    d = o(F, "undefined") || o(F.call, "undefined") ? function (t, e) {
        return e in t && o(t.constructor.prototype[e], "undefined")
    } : function (t, e) {
        return F.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function (t) {
        var e = this;
        if ("function" != typeof e)throw new TypeError;
        var n = B.call(arguments, 1), r = function () {
            if (this instanceof r) {
                var i = function () {
                };
                i.prototype = e.prototype;
                var o = new i, a = e.apply(o, n.concat(B.call(arguments)));
                return Object(a) === a ? a : o
            }
            return e.apply(t, n.concat(B.call(arguments)))
        };
        return r
    }), function (n, r) {
        var i = n.join(""), o = r.length;
        M(i, function (n, r) {
            for (var i = e.styleSheets[e.styleSheets.length - 1], a = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "", s = n.childNodes, l = {}; o--;)l[s[o].id] = s[o];
            p.touch = "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch || 9 === (l.touch && l.touch.offsetTop), p.csstransforms3d = 9 === (l.csstransforms3d && l.csstransforms3d.offsetLeft) && 3 === l.csstransforms3d.offsetHeight, p.generatedcontent = (l.generatedcontent && l.generatedcontent.offsetHeight) >= 1, p.fontface = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0])
        }, o, r)
    }(['@font-face {font-family:"font";src:url("https://")}', ["@media (", k.join("touch-enabled),("), v, ")", "{#touch{top:9px;position:absolute}}"].join(""), ["@media (", k.join("transform-3d),("), v, ")", "{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""), ['#generatedcontent:after{content:"', w, '";visibility:hidden}'].join("")], ["fontface", "touch", "csstransforms3d", "generatedcontent"]), N.flexbox = function () {
        return u("flexOrder")
    }, N.canvas = function () {
        var t = e.createElement("canvas");
        return !!t.getContext && !!t.getContext("2d")
    }, N.canvastext = function () {
        return !!p.canvas && !!o(e.createElement("canvas").getContext("2d").fillText, "function")
    }, N.webgl = function () {
        try {
            var r, i = e.createElement("canvas");
            r = !(!t.WebGLRenderingContext || !i.getContext("experimental-webgl") && !i.getContext("webgl")), i = n
        } catch (o) {
            r = !1
        }
        return r
    }, N.touch = function () {
        return p.touch
    }, N.geolocation = function () {
        return !!navigator.geolocation
    }, N.postmessage = function () {
        return !!t.postMessage
    }, N.websqldatabase = function () {
        return !!t.openDatabase
    }, N.indexedDB = function () {
        return !!u("indexedDB", t)
    }, N.hashchange = function () {
        return P("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
    }, N.history = function () {
        return !!t.history && !!history.pushState
    }, N.draganddrop = function () {
        var t = e.createElement("div");
        return "draggable" in t || "ondragstart" in t && "ondrop" in t
    }, N.websockets = function () {
        for (var e = -1, n = C.length; ++e < n;)if (t[C[e] + "WebSocket"])return !0;
        return "WebSocket" in t
    }, N.rgba = function () {
        return r("background-color:rgba(150,255,150,.5)"), a(x.backgroundColor, "rgba")
    }, N.hsla = function () {
        return r("background-color:hsla(120,40%,100%,.5)"), a(x.backgroundColor, "rgba") || a(x.backgroundColor, "hsla")
    }, N.multiplebgs = function () {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(x.background)
    }, N.backgroundsize = function () {
        return u("backgroundSize")
    }, N.borderimage = function () {
        return u("borderImage")
    }, N.borderradius = function () {
        return u("borderRadius")
    }, N.boxshadow = function () {
        return u("boxShadow")
    }, N.textshadow = function () {
        return "" === e.createElement("div").style.textShadow
    }, N.opacity = function () {
        return i("opacity:.55"), /^0.55$/.test(x.opacity)
    }, N.cssanimations = function () {
        return u("animationName")
    }, N.csscolumns = function () {
        return u("columnCount")
    }, N.cssgradients = function () {
        var t = "background-image:", e = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
        return r((t + "-webkit- ".split(" ").join(e + t) + k.join(n + t)).slice(0, -t.length)), a(x.backgroundImage, "gradient")
    }, N.cssreflections = function () {
        return u("boxReflect")
    }, N.csstransforms = function () {
        return !!u("transform")
    }, N.csstransforms3d = function () {
        var t = !!u("perspective");
        return t && "webkitPerspective" in m.style && (t = p.csstransforms3d), t
    }, N.csstransitions = function () {
        return u("transition")
    }, N.fontface = function () {
        return p.fontface
    }, N.generatedcontent = function () {
        return p.generatedcontent
    }, N.video = function () {
        var t = e.createElement("video"), n = !1;
        try {
            (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {
        }
        return n
    }, N.audio = function () {
        var t = e.createElement("audio"), n = !1;
        try {
            (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) {
        }
        return n
    }, N.localstorage = function () {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (t) {
            return !1
        }
    }, N.sessionstorage = function () {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (t) {
            return !1
        }
    }, N.webworkers = function () {
        return !!t.Worker
    }, N.applicationcache = function () {
        return !!t.applicationCache
    }, N.svg = function () {
        return !!e.createElementNS && !!e.createElementNS(E.svg, "svg").createSVGRect
    }, N.inlinesvg = function () {
        var t = e.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == E.svg
    }, N.smil = function () {
        return !!e.createElementNS && /SVGAnimate/.test(S.call(e.createElementNS(E.svg, "animate")))
    }, N.svgclippaths = function () {
        return !!e.createElementNS && /SVGClipPath/.test(S.call(e.createElementNS(E.svg, "clipPath")))
    };
    for (var q in N)d(N, q) && (f = q.toLowerCase(), p[f] = N[q](), L.push((p[f] ? "" : "no-") + f));
    return p.input || c(), p.addTest = function (t, e) {
        if ("object" == typeof t)for (var r in t)d(t, r) && p.addTest(r, t[r]); else {
            if (t = t.toLowerCase(), p[t] !== n)return p;
            e = "function" == typeof e ? e() : e, m.className += " " + (e ? "" : "no-") + t, p[t] = e
        }
        return p
    }, r(""), y = b = null, function (t, e) {
        function n(t, e) {
            var n = t.createElement("p"), r = t.getElementsByTagName("head")[0] || t.documentElement;
            return n.innerHTML = "x<style>" + e + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var t = c.elements;
            return "string" == typeof t ? t.split(" ") : t
        }

        function i(t) {
            var e = {}, n = t.createElement, i = t.createDocumentFragment, o = i();
            t.createElement = function (t) {
                var r = (e[t] || (e[t] = n(t))).cloneNode();
                return c.shivMethods && r.canHaveChildren && !u.test(t) ? o.appendChild(r) : r
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function (t) {
                    return e[t] = n(t), o.createElement(t), 'c("' + t + '")'
                }) + ");return n}")(c, o)
        }

        function o(t) {
            var e;
            return t.documentShived ? t : (c.shivCSS && !a && (e = !!n(t, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")), s || (e = !i(t)), e && (t.documentShived = e), t)
        }

        var a, s, l = t.html5 || {}, u = /^<|^(?:button|form|map|select|textarea)$/i;
        !function () {
            var t = e.createElement("a");
            t.innerHTML = "<xyz></xyz>", a = "hidden" in t, s = 1 == t.childNodes.length || function () {
                    try {
                        e.createElement("a")
                    } catch (t) {
                        return !0
                    }
                    var n = e.createDocumentFragment();
                    return "undefined" == typeof n.cloneNode || "undefined" == typeof n.createDocumentFragment || "undefined" == typeof n.createElement
                }()
        }();
        var c = {
            elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: l.shivCSS !== !1,
            shivMethods: l.shivMethods !== !1,
            type: "default",
            shivDocument: o
        };
        t.html5 = c, o(e)
    }(this, e), p._version = h, p._prefixes = k, p._domPrefixes = T, p._cssomPrefixes = C, p.mq = D, p.hasEvent = P, p.testProp = function (t) {
        return s([t])
    }, p.testAllProps = u, p.testStyles = M, p.prefixed = function (t, e, n) {
        return e ? u(t, e, n) : u(t, "pfx")
    }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + L.join(" ") : ""), p
}(this, this.document), function (t, e, n) {
    function r(t) {
        return "[object Function]" == m.call(t)
    }

    function i(t) {
        return "string" == typeof t
    }

    function o() {
    }

    function a(t) {
        return !t || "loaded" == t || "complete" == t || "uninitialized" == t
    }

    function s() {
        var t = v.shift();
        y = 1, t ? t.t ? p(function () {
            ("c" == t.t ? d.injectCss : d.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
        }, 0) : (t(), s()) : y = 0
    }

    function l(t, n, r, i, o, l, u) {
        function c(e) {
            if (!h && a(f.readyState) && (x.r = h = 1, !y && s(), f.onload = f.onreadystatechange = null, e)) {
                "img" != t && p(function () {
                    w.removeChild(f)
                }, 50);
                for (var r in T[n])T[n].hasOwnProperty(r) && T[n][r].onload()
            }
        }

        var u = u || d.errorTimeout, f = {}, h = 0, m = 0, x = {t: r, s: n, e: o, a: l, x: u};
        1 === T[n] && (m = 1, T[n] = [], f = e.createElement(t)), "object" == t ? f.data = n : (f.src = n, f.type = t), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function () {
            c.call(this, m)
        }, v.splice(i, 0, x), "img" != t && (m || 2 === T[n] ? (w.insertBefore(f, b ? null : g), p(c, u)) : T[n].push(f))
    }

    function u(t, e, n, r, o) {
        return y = 0, e = e || "j", i(t) ? l("c" == e ? k : S, t, e, this.i++, n, r, o) : (v.splice(this.i++, 0, t), 1 == v.length && s()), this
    }

    function c() {
        var t = d;
        return t.loader = {load: u, i: 0}, t
    }

    var f, d, h = e.documentElement, p = t.setTimeout, g = e.getElementsByTagName("script")[0], m = {}.toString, v = [], y = 0, x = "MozAppearance" in h.style, b = x && !!e.createRange().compareNode, w = b ? h : g.parentNode, h = t.opera && "[object Opera]" == m.call(t.opera), h = !!e.attachEvent && !h, S = x ? "object" : h ? "script" : "img", k = h ? "script" : S, _ = Array.isArray || function (t) {
            return "[object Array]" == m.call(t)
        }, C = [], T = {}, E = {
        timeout: function (t, e) {
            return e.length && (t.timeout = e[0]), t
        }
    };
    d = function (t) {
        function e(t) {
            var e, n, r, t = t.split("!"), i = C.length, o = t.pop(), a = t.length, o = {
                url: o,
                origUrl: o,
                prefixes: t
            };
            for (n = 0; a > n; n++)r = t[n].split("="), (e = E[r.shift()]) && (o = e(o, r));
            for (n = 0; i > n; n++)o = C[n](o);
            return o
        }

        function a(t, i, o, a, l) {
            var u = e(t), f = u.autoCallback;
            u.url.split(".").pop().split("?").shift(), u.bypass || (i && (i = r(i) ? i : i[t] || i[a] || i[t.split("/").pop().split("?")[0]] || s), u.instead ? u.instead(t, i, o, a, l) : (T[u.url] ? u.noexec = !0 : T[u.url] = 1, o.load(u.url, u.forceCSS || !u.forceJS && "css" == u.url.split(".").pop().split("?").shift() ? "c" : n, u.noexec, u.attrs, u.timeout), (r(i) || r(f)) && o.load(function () {
                c(), i && i(u.origUrl, l, a), f && f(u.origUrl, l, a), T[u.url] = 2
            })))
        }

        function l(t, e) {
            function n(t, n) {
                if (t) {
                    if (i(t))n || (f = function () {
                        var t = [].slice.call(arguments);
                        d.apply(this, t), h()
                    }), a(t, f, e, 0, u); else if (Object(t) === t)for (l in s = function () {
                        var e, n = 0;
                        for (e in t)t.hasOwnProperty(e) && n++;
                        return n
                    }(), t)t.hasOwnProperty(l) && (!n && !--s && (r(f) ? f = function () {
                        var t = [].slice.call(arguments);
                        d.apply(this, t), h()
                    } : f[l] = function (t) {
                        return function () {
                            var e = [].slice.call(arguments);
                            t && t.apply(this, e), h()
                        }
                    }(d[l])), a(t[l], f, e, l, u))
                } else!n && h()
            }

            var s, l, u = !!t.test, c = t.load || t.both, f = t.callback || o, d = f, h = t.complete || o;
            n(u ? t.yep : t.nope, !!c), c && n(c)
        }

        var u, f, h = this.yepnope.loader;
        if (i(t))a(t, 0, h, 0); else if (_(t))for (u = 0; u < t.length; u++)f = t[u], i(f) ? a(f, 0, h, 0) : _(f) ? d(f) : Object(f) === f && l(f, h); else Object(t) === t && l(t, h)
    }, d.addPrefix = function (t, e) {
        E[t] = e
    }, d.addFilter = function (t) {
        C.push(t)
    }, d.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", f = function () {
        e.removeEventListener("DOMContentLoaded", f, 0), e.readyState = "complete"
    }, 0)), t.yepnope = c(), t.yepnope.executeStack = s, t.yepnope.injectJs = function (t, n, r, i, l, u) {
        var c, f, h = e.createElement("script"), i = i || d.errorTimeout;
        h.src = t;
        for (f in r)h.setAttribute(f, r[f]);
        n = u ? s : n || o, h.onreadystatechange = h.onload = function () {
            !c && a(h.readyState) && (c = 1, n(), h.onload = h.onreadystatechange = null)
        }, p(function () {
            c || (c = 1, n(1))
        }, i), l ? h.onload() : g.parentNode.insertBefore(h, g)
    }, t.yepnope.injectCss = function (t, n, r, i, a, l) {
        var u, i = e.createElement("link"), n = l ? s : n || o;
        i.href = t, i.rel = "stylesheet", i.type = "text/css";
        for (u in r)i.setAttribute(u, r[u]);
        a || (g.parentNode.insertBefore(i, g), p(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, /*!
 * jQuery Browser Plugin v0.0.2
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2013 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 2013-07-29T17:23:27-07:00
 */
    function (t, e) {
        "use strict";
        var n, r;
        t.uaMatch = function (t) {
            t = t.toLowerCase();
            var e = /(opr)[\/]([\w.]+)/.exec(t) || /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [], n = /(ipad)/.exec(t) || /(iphone)/.exec(t) || /(android)/.exec(t) || [];
            return {browser: e[1] || "", version: e[2] || "0", platform: n[0] || ""}
        }, n = t.uaMatch(e.navigator.userAgent), r = {}, n.browser && (r[n.browser] = !0, r.version = n.version), n.platform && (r[n.platform] = !0), r.chrome || r.opr ? r.webkit = !0 : r.webkit && (r.safari = !0), r.rv && (r.msie = !0), r.opr && (r.opera = !0), t.browser = r
    }(jQuery, window);
var mobileApp = mobileApp || {};
!function (t, e) {
    var n = function (t, n) {
        this.elem = t, this.$elem = e(t), this.options = n
    };
    n.prototype = {
        defaults: {
            page_id: "build-menu-page",
            menu: "",
            menu_width: 260,
            menu_id: "mobile-nav",
            button_content: "MENU",
            prepend_button_to: "",
            menu_bar: ""
        }, init: function () {
            var t = this;
            return t.config = e.extend({}, t.defaults, t.options), 0 === e(t.config.menu_id).length && this.setLayout(), t
        }, buildMenu: function () {
            var t = this;
            t.config = e.extend({}, t.defaults, t.options);
            var n = t.config.menu, r = e("#build-menu");
            return n ? (e.isArray(n) ? e(n).each(function (n, i) {
                r.append(e(i).clone().addClass(t.config.menu_id + "-" + n)), e(i).hide()
            }) : (r.append(e(n).clone().addClass(t.config.menu_id + "-0").removeAttr("id")), e(n).hide()), void 0) : !1
        }, setCSS: function () {
            var t = this;
            t.config = e.extend({}, t.defaults, t.options), e("#build-menu-overlay").css({
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                "z-index": 99,
                background: "#000",
                opacity: .5,
                display: "none"
            }), e("html,body").css("height", "100%"), t.config.menu_bar && e(t.config.menu_bar).css({position: "fixed"})
        }, setLayout: function () {
            function t() {
                e("html").hasClass("build-menu-close") && e("html").removeClass("build-menu-animating")
            }

            var n = this;
            if (n.config = e.extend({}, n.defaults, n.options), "" == n.config.prepend_button_to)var r = "#" + n.config.page_id; else var r = n.config.prepend_button_to;
            n.$elem.wrapInner('<div id="' + n.config.page_id + '" />').find("#" + n.config.page_id).before('<div id="build-menu" />'), e(r).prepend('<a href="#" id="build-menu-button">' + n.config.button_content + "</a>"), e("#" + n.config.page_id).prepend('<div id="build-menu-overlay" />'), this.buildMenu(), this.setCSS();
            var i = document.getElementById(n.config.page_id);
            i.addEventListener("oTransitionEnd", t, !1), i.addEventListener("transitionend", t, !1), i.addEventListener("webkitTransitionEnd", t, !1), i.addEventListener("MSTransitionEnd", t, !1), e("#build-menu-button, #build-menu-overlay").on("click", function (t) {
                t.preventDefault();
                var r = e("html"), i = e("#" + n.config.page_id), o = e("#build-menu-overlay");
                r.addClass("build-menu-animating"), r.hasClass("build-menu-open") ? (r.removeClass("build-menu-open"), r.addClass("build-menu-close"), i.css({
                    "-webkit-transform": "translateX(0px)",
                    "-moz-transform": "translateX(0px)",
                    "-o-transform": "translateX(0px)",
                    "-ms-transform": "translateX(0px)",
                    transform: "translateX(0px)"
                }), o.fadeTo("slow", 0, function () {
                    e(this).css("visibility", "hidden")
                })) : (r.addClass("build-menu-open"), r.removeClass("build-menu-close"), i.css({
                    "-webkit-transform": "translateX(" + n.config.menu_width + "px" + ")",
                    "-moz-transform": "translateX(" + n.config.menu_width + "px" + ")",
                    "-o-transform": "translateX(" + n.config.menu_width + "px" + ")",
                    "-ms-transform": "translateX(" + n.config.menu_width + "px" + ")",
                    transform: "translateX(" + n.config.menu_width + "px" + ")"
                }), o.css("visibility", "visible").fadeTo("slow", .5))
            })
        }
    }, n.defaults = n.prototype.defaults, e.fn.mobile_menu = function (t) {
        return this.each(function () {
            new n(this, t).init()
        })
    }, t.MobileMenu = n
}(mobileApp, jQuery), /**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */
    !function (t) {
        var e = {}, n = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: function () {
            },
            onSlideBefore: function () {
            },
            onSlideAfter: function () {
            },
            onSlideNext: function () {
            },
            onSlidePrev: function () {
            }
        };
        t.fn.bxSlider = function (r) {
            if (0 == this.length)return this;
            if (this.length > 1)return this.each(function () {
                t(this).bxSlider(r)
            }), this;
            var o = {}, a = this;
            e.el = this;
            var s = t(window).width(), l = t(window).height(), u = function () {
                o.settings = t.extend({}, n, r), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = a.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {index: o.settings.startSlide}, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function () {
                        var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var n in e)if (void 0 !== t.style[e[n]])return o.cssPrefix = e[n].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), a.data("origStyle", a.attr("style")), a.children(o.settings.slideSelector).each(function () {
                    t(this).data("origStyle", t(this).attr("style"))
                }), c()
            }, c = function () {
                a.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = a.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), a.css({
                    width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
                    position: "relative"
                }), o.usingCSS && o.settings.easing ? a.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), m(), o.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }), o.viewport.parent().css({maxWidth: p()}), o.settings.pager || o.viewport.parent().css({margin: "0 auto 0px"}), o.children.css({
                    "float": "horizontal" == o.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }), o.children.css("width", g()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), o.children.eq(o.settings.startSlide).css({
                    zIndex: 50,
                    display: "block"
                })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && C(), o.active.last = o.settings.startSlide == v() - 1, o.settings.video && a.fitVids();
                var e = o.children.eq(o.settings.startSlide);
                "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && S(), o.settings.controls && k(), o.settings.auto && o.settings.autoControls && _(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), f(e, d)
            }, f = function (e, n) {
                var r = e.find("img, iframe").length;
                if (0 == r)return n(), void 0;
                var i = 0;
                e.find("img, iframe").each(function () {
                    t(this).is("img") && t(this).attr("src", t(this).attr("src") + "?timestamp=" + (new Date).getTime()), t(this).load(function () {
                        setTimeout(function () {
                            ++i == r && n()
                        }, 0)
                    })
                })
            }, d = function () {
                if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
                    var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides, n = o.children.slice(0, e).clone().addClass("bx-clone"), r = o.children.slice(-e).clone().addClass("bx-clone");
                    a.append(n).prepend(r)
                }
                o.loader.remove(), x(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(h()), a.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", I), o.settings.auto && o.settings.autoStart && P(), o.settings.ticker && F(), o.settings.pager && L(o.settings.startSlide), o.settings.controls && D(), o.settings.touchEnabled && !o.settings.ticker && R()
            }, h = function () {
                var e = 0, n = t();
                if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)if (o.carousel) {
                    var r = 1 == o.settings.moveSlides ? o.active.index : o.active.index * y();
                    for (n = o.children.eq(r), i = 1; i <= o.settings.maxSlides - 1; i++)n = r + i >= o.children.length ? n.add(o.children.eq(i - 1)) : n.add(o.children.eq(r + i))
                } else n = o.children.eq(o.active.index); else n = o.children;
                return "vertical" == o.settings.mode ? (n.each(function () {
                    e += t(this).outerHeight()
                }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function () {
                    return t(this).outerHeight(!1)
                }).get()), e
            }, p = function () {
                var t = "100%";
                return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
            }, g = function () {
                var t = o.settings.slideWidth, e = o.viewport.width();
                return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
            }, m = function () {
                var t = 1;
                if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)if (o.viewport.width() < o.minThreshold)t = o.settings.minSlides; else if (o.viewport.width() > o.maxThreshold)t = o.settings.maxSlides; else {
                    var e = o.children.first().width();
                    t = Math.floor(o.viewport.width() / e)
                } else"vertical" == o.settings.mode && (t = o.settings.minSlides);
                return t
            }, v = function () {
                var t = 0;
                if (o.settings.moveSlides > 0)if (o.settings.infiniteLoop)t = o.children.length / y(); else for (var e = 0, n = 0; e < o.children.length;)++t, e = n + m(), n += o.settings.moveSlides <= m() ? o.settings.moveSlides : m(); else t = Math.ceil(o.children.length / m());
                return t
            }, y = function () {
                return o.settings.moveSlides > 0 && o.settings.moveSlides <= m() ? o.settings.moveSlides : m()
            }, x = function () {
                if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
                    if ("horizontal" == o.settings.mode) {
                        var t = o.children.last(), e = t.position();
                        b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
                    } else if ("vertical" == o.settings.mode) {
                        var n = o.children.length - o.settings.minSlides, e = o.children.eq(n).position();
                        b(-e.top, "reset", 0)
                    }
                } else {
                    var e = o.children.eq(o.active.index * y()).position();
                    o.active.index == v() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
                }
            }, b = function (t, e, n, r) {
                if (o.usingCSS) {
                    var i = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                    a.css("-" + o.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" == e ? (a.css(o.animProp, i), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), B()
                    })) : "reset" == e ? a.css(o.animProp, i) : "ticker" == e && (a.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), a.css(o.animProp, i), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(r.resetValue, "reset", 0), q()
                    }))
                } else {
                    var s = {};
                    s[o.animProp] = t, "slide" == e ? a.animate(s, n, o.settings.easing, function () {
                        B()
                    }) : "reset" == e ? a.css(o.animProp, t) : "ticker" == e && a.animate(s, speed, "linear", function () {
                        b(r.resetValue, "reset", 0), q()
                    })
                }
            }, w = function () {
                for (var e = "", n = v(), r = 0; n > r; r++) {
                    var i = "";
                    o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (i = o.settings.buildPager(r), o.pagerEl.addClass("bx-custom-pager")) : (i = r + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + r + '" class="bx-pager-link">' + i + "</a></div>"
                }
                o.pagerEl.html(e)
            }, S = function () {
                o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.delegate("a", "click", j)
            }, k = function () {
                o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", T), o.controls.prev.bind("click", E), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
            }, _ = function () {
                o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.delegate(".bx-start", "click", N), o.controls.autoEl.delegate(".bx-stop", "click", A), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), M(o.settings.autoStart ? "stop" : "start")
            }, C = function () {
                o.children.each(function () {
                    var e = t(this).find("img:first").attr("title");
                    void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                })
            }, T = function (t) {
                o.settings.auto && a.stopAuto(), a.goToNextSlide(), t.preventDefault()
            }, E = function (t) {
                o.settings.auto && a.stopAuto(), a.goToPrevSlide(), t.preventDefault()
            }, N = function (t) {
                a.startAuto(), t.preventDefault()
            }, A = function (t) {
                a.stopAuto(), t.preventDefault()
            }, j = function (e) {
                o.settings.auto && a.stopAuto();
                var n = t(e.currentTarget), r = parseInt(n.attr("data-slide-index"));
                r != o.active.index && a.goToSlide(r), e.preventDefault()
            }, L = function (e) {
                var n = o.children.length;
                return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (n = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + n), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function (n, r) {
                    t(r).find("a").eq(e).addClass("active")
                }), void 0)
            }, B = function () {
                if (o.settings.infiniteLoop) {
                    var t = "";
                    0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == v() - 1 && o.carousel ? t = o.children.eq((v() - 1) * y()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), "horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0)
                }
                o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
            }, M = function (t) {
                o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
            }, D = function () {
                1 == v() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == v() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
            }, P = function () {
                o.settings.autoDelay > 0 ? setTimeout(a.startAuto, o.settings.autoDelay) : a.startAuto(), o.settings.autoHover && a.hover(function () {
                    o.interval && (a.stopAuto(!0), o.autoPaused = !0)
                }, function () {
                    o.autoPaused && (a.startAuto(!0), o.autoPaused = null)
                })
            }, F = function () {
                var e = 0;
                if ("next" == o.settings.autoDirection)a.append(o.children.clone().addClass("bx-clone")); else {
                    a.prepend(o.children.clone().addClass("bx-clone"));
                    var n = o.children.first().position();
                    e = "horizontal" == o.settings.mode ? -n.left : -n.top
                }
                b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function () {
                    a.stop()
                }, function () {
                    var e = 0;
                    o.children.each(function () {
                        e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                    });
                    var n = o.settings.speed / e, r = "horizontal" == o.settings.mode ? "left" : "top", i = n * (e - Math.abs(parseInt(a.css(r))));
                    q(i)
                }), q()
            }, q = function (t) {
                speed = t ? t : o.settings.speed;
                var e = {left: 0, top: 0}, n = {left: 0, top: 0};
                "next" == o.settings.autoDirection ? e = a.find(".bx-clone").first().position() : n = o.children.first().position();
                var r = "horizontal" == o.settings.mode ? -e.left : -e.top, i = "horizontal" == o.settings.mode ? -n.left : -n.top, s = {resetValue: i};
                b(r, "ticker", speed, s)
            }, R = function () {
                o.touch = {start: {x: 0, y: 0}, end: {x: 0, y: 0}}, o.viewport.bind("touchstart", H)
            }, H = function (t) {
                if (o.working)t.preventDefault(); else {
                    o.touch.originalPos = a.position();
                    var e = t.originalEvent;
                    o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", O), o.viewport.bind("touchend", z)
                }
            }, O = function (t) {
                var e = t.originalEvent, n = Math.abs(e.changedTouches[0].pageX - o.touch.start.x), r = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
                if (3 * n > r && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * r > n && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
                    var i = 0;
                    if ("horizontal" == o.settings.mode) {
                        var a = e.changedTouches[0].pageX - o.touch.start.x;
                        i = o.touch.originalPos.left + a
                    } else {
                        var a = e.changedTouches[0].pageY - o.touch.start.y;
                        i = o.touch.originalPos.top + a
                    }
                    b(i, "reset", 0)
                }
            }, z = function (t) {
                o.viewport.unbind("touchmove", O);
                var e = t.originalEvent, n = 0;
                if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
                    var r = Math.abs(o.touch.start.x - o.touch.end.x);
                    r >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto())
                } else {
                    var r = 0;
                    "horizontal" == o.settings.mode ? (r = o.touch.end.x - o.touch.start.x, n = o.touch.originalPos.left) : (r = o.touch.end.y - o.touch.start.y, n = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && r > 0 || o.active.last && 0 > r) ? b(n, "reset", 200) : Math.abs(r) >= o.settings.swipeThreshold ? (0 > r ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto()) : b(n, "reset", 200)
                }
                o.viewport.unbind("touchend", z)
            }, I = function () {
                var e = t(window).width(), n = t(window).height();
                (s != e || l != n) && (s = e, l = n, a.redrawSlider())
            };
            return a.goToSlide = function (e, n) {
                if (!o.working && o.active.index != e)if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? v() - 1 : e >= v() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == n ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == n && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= v() - 1, o.settings.pager && L(o.active.index), o.settings.controls && D(), "fade" == o.settings.mode)o.settings.adaptiveHeight && o.viewport.height() != h() && o.viewport.animate({height: h()}, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex: 0}), o.children.eq(o.active.index).css("zIndex", 51).fadeIn(o.settings.speed, function () {
                    t(this).css("zIndex", 50), B()
                }); else {
                    o.settings.adaptiveHeight && o.viewport.height() != h() && o.viewport.animate({height: h()}, o.settings.adaptiveHeightSpeed);
                    var r = 0, i = {left: 0, top: 0};
                    if (!o.settings.infiniteLoop && o.carousel && o.active.last)if ("horizontal" == o.settings.mode) {
                        var s = o.children.eq(o.children.length - 1);
                        i = s.position(), r = o.viewport.width() - s.outerWidth()
                    } else {
                        var l = o.children.length - o.settings.minSlides;
                        i = o.children.eq(l).position()
                    } else if (o.carousel && o.active.last && "prev" == n) {
                        var u = 1 == o.settings.moveSlides ? o.settings.maxSlides - y() : (v() - 1) * y() - (o.children.length - o.settings.maxSlides), s = a.children(".bx-clone").eq(u);
                        i = s.position()
                    } else if ("next" == n && 0 == o.active.index)i = a.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1; else if (e >= 0) {
                        var c = e * y();
                        i = o.children.eq(c).position()
                    }
                    if ("undefined" != typeof i) {
                        var f = "horizontal" == o.settings.mode ? -(i.left - r) : -i.top;
                        b(f, "slide", o.settings.speed)
                    }
                }
            }, a.goToNextSlide = function () {
                if (o.settings.infiniteLoop || !o.active.last) {
                    var t = parseInt(o.active.index) + 1;
                    a.goToSlide(t, "next")
                }
            }, a.goToPrevSlide = function () {
                if (o.settings.infiniteLoop || 0 != o.active.index) {
                    var t = parseInt(o.active.index) - 1;
                    a.goToSlide(t, "prev")
                }
            }, a.startAuto = function (t) {
                o.interval || (o.interval = setInterval(function () {
                    "next" == o.settings.autoDirection ? a.goToNextSlide() : a.goToPrevSlide()
                }, o.settings.pause), o.settings.autoControls && 1 != t && M("stop"))
            }, a.stopAuto = function (t) {
                o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && M("start"))
            }, a.getCurrentSlide = function () {
                return o.active.index
            }, a.getSlideCount = function () {
                return o.children.length
            }, a.redrawSlider = function () {
                o.children.add(a.find(".bx-clone")).outerWidth(g()), o.viewport.css("height", h()), o.settings.ticker || x(), o.active.last && (o.active.index = v() - 1), o.active.index >= v() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), L(o.active.index))
            }, a.destroySlider = function () {
                o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function () {
                    void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", I))
            }, a.reloadSlider = function (t) {
                void 0 != t && (r = t), a.destroySlider(), u()
            }, u(), this
        }
    }(jQuery),// â”‚ Copyright Â© 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    â”‚ \\
// â”‚ Copyright Â© 2008-2012 Sencha Labs (http://sencha.com)              â”‚ \\
    function (t) {
        var e, n, r = "0.3.4", i = "hasOwnProperty", o = /[\.\/]/, a = "*", s = function () {
        }, l = function (t, e) {
            return t - e
        }, u = {n: {}}, c = function (t, r) {
            var i, o = n, a = Array.prototype.slice.call(arguments, 2), s = c.listeners(t), u = 0, f = [], d = {}, h = [], p = e;
            e = t, n = 0;
            for (var g = 0, m = s.length; m > g; g++)"zIndex" in s[g] && (f.push(s[g].zIndex), s[g].zIndex < 0 && (d[s[g].zIndex] = s[g]));
            for (f.sort(l); f[u] < 0;)if (i = d[f[u++]], h.push(i.apply(r, a)), n)return n = o, h;
            for (g = 0; m > g; g++)if (i = s[g], "zIndex" in i)if (i.zIndex == f[u]) {
                if (h.push(i.apply(r, a)), n)break;
                do if (u++, i = d[f[u]], i && h.push(i.apply(r, a)), n)break; while (i)
            } else d[i.zIndex] = i; else if (h.push(i.apply(r, a)), n)break;
            return n = o, e = p, h.length ? h : null
        };
        c.listeners = function (t) {
            var e, n, r, i, s, l, c, f, d = t.split(o), h = u, p = [h], g = [];
            for (i = 0, s = d.length; s > i; i++) {
                for (f = [], l = 0, c = p.length; c > l; l++)for (h = p[l].n, n = [h[d[i]], h[a]], r = 2; r--;)e = n[r], e && (f.push(e), g = g.concat(e.f || []));
                p = f
            }
            return g
        }, c.on = function (t, e) {
            for (var n = t.split(o), r = u, i = 0, a = n.length; a > i; i++)r = r.n, !r[n[i]] && (r[n[i]] = {n: {}}), r = r[n[i]];
            for (r.f = r.f || [], i = 0, a = r.f.length; a > i; i++)if (r.f[i] == e)return s;
            return r.f.push(e), function (t) {
                +t == +t && (e.zIndex = +t)
            }
        }, c.stop = function () {
            n = 1
        }, c.nt = function (t) {
            return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
        }, c.off = c.unbind = function (t, e) {
            var n, r, s, l, c, f, d, h = t.split(o), p = [u];
            for (l = 0, c = h.length; c > l; l++)for (f = 0; f < p.length; f += s.length - 2) {
                if (s = [f, 1], n = p[f].n, h[l] != a)n[h[l]] && s.push(n[h[l]]); else for (r in n)n[i](r) && s.push(n[r]);
                p.splice.apply(p, s)
            }
            for (l = 0, c = p.length; c > l; l++)for (n = p[l]; n.n;) {
                if (e) {
                    if (n.f) {
                        for (f = 0, d = n.f.length; d > f; f++)if (n.f[f] == e) {
                            n.f.splice(f, 1);
                            break
                        }
                        !n.f.length && delete n.f
                    }
                    for (r in n.n)if (n.n[i](r) && n.n[r].f) {
                        var g = n.n[r].f;
                        for (f = 0, d = g.length; d > f; f++)if (g[f] == e) {
                            g.splice(f, 1);
                            break
                        }
                        !g.length && delete n.n[r].f
                    }
                } else {
                    delete n.f;
                    for (r in n.n)n.n[i](r) && n.n[r].f && delete n.n[r].f
                }
                n = n.n
            }
        }, c.once = function (t, e) {
            var n = function () {
                var r = e.apply(this, arguments);
                return c.unbind(t, n), r
            };
            return c.on(t, n)
        }, c.version = r, c.toString = function () {
            return "You are running Eve " + r
        }, "undefined" != typeof module && module.exports ? module.exports = c : "undefined" != typeof define ? define("eve", [], function () {
            return c
        }) : t.eve = c
    }(this), function () {
    function t(t) {
        for (var e = 0; e < an.length; e++)an[e].el.paper == t && an.splice(e--, 1)
    }

    function e(t, e, n, i, a, s) {
        n = Q(n);
        var l, u, c, f, d, h, p = t.ms, g = {}, m = {}, y = {};
        if (i)for (w = 0, S = an.length; S > w; w++) {
            var x = an[w];
            if (x.el.id == e.id && x.anim == t) {
                x.percent != n ? (an.splice(w, 1), c = 1) : u = x, e.attr(x.totalOrigin);
                break
            }
        } else i = +m;
        for (var w = 0, S = t.percents.length; S > w; w++) {
            if (t.percents[w] == n || t.percents[w] > i * t.top) {
                n = t.percents[w], d = t.percents[w - 1] || 0, p = p / t.top * (n - d), f = t.percents[w + 1], l = t.anim[n];
                break
            }
            i && e.attr(t.anim[t.percents[w]])
        }
        if (l) {
            if (u)u.initstatus = i, u.start = new Date - u.ms * i; else {
                for (var _ in l)if (l[k](_) && (ee[k](_) || e.paper.customAttributes[k](_)))switch (g[_] = e.attr(_), null == g[_] && (g[_] = te[_]), m[_] = l[_], ee[_]) {
                    case $:
                        y[_] = (m[_] - g[_]) / p;
                        break;
                    case"colour":
                        g[_] = v.getRGB(g[_]);
                        var C = v.getRGB(m[_]);
                        y[_] = {r: (C.r - g[_].r) / p, g: (C.g - g[_].g) / p, b: (C.b - g[_].b) / p};
                        break;
                    case"path":
                        var T = De(g[_], m[_]), E = T[1];
                        for (g[_] = T[0], y[_] = [], w = 0, S = g[_].length; S > w; w++) {
                            y[_][w] = [0];
                            for (var A = 1, j = g[_][w].length; j > A; A++)y[_][w][A] = (E[w][A] - g[_][w][A]) / p
                        }
                        break;
                    case"transform":
                        var L = e._, D = He(L[_], m[_]);
                        if (D)for (g[_] = D.from, m[_] = D.to, y[_] = [], y[_].real = !0, w = 0, S = g[_].length; S > w; w++)for (y[_][w] = [g[_][w][0]], A = 1, j = g[_][w].length; j > A; A++)y[_][w][A] = (m[_][w][A] - g[_][w][A]) / p; else {
                            var P = e.matrix || new o, F = {
                                _: {transform: L.transform}, getBBox: function () {
                                    return e.getBBox(1)
                                }
                            };
                            g[_] = [P.a, P.b, P.c, P.d, P.e, P.f], qe(F, m[_]), m[_] = F._.transform, y[_] = [(F.matrix.a - P.a) / p, (F.matrix.b - P.b) / p, (F.matrix.c - P.c) / p, (F.matrix.d - P.d) / p, (F.matrix.e - P.e) / p, (F.matrix.f - P.f) / p]
                        }
                        break;
                    case"csv":
                        var q = B(l[_])[M](b), R = B(g[_])[M](b);
                        if ("clip-rect" == _)for (g[_] = R, y[_] = [], w = R.length; w--;)y[_][w] = (q[w] - g[_][w]) / p;
                        m[_] = q;
                        break;
                    default:
                        for (q = [][N](l[_]), R = [][N](g[_]), y[_] = [], w = e.paper.customAttributes[_].length; w--;)y[_][w] = ((q[w] || 0) - (R[w] || 0)) / p
                }
                var H = l.easing, O = v.easing_formulas[H];
                if (!O)if (O = B(H).match(G), O && 5 == O.length) {
                    var z = O;
                    O = function (t) {
                        return r(t, +z[1], +z[2], +z[3], +z[4], p)
                    }
                } else O = fe;
                if (h = l.start || t.start || +new Date, x = {
                        anim: t,
                        percent: n,
                        timestamp: h,
                        start: h + (t.del || 0),
                        status: 0,
                        initstatus: i || 0,
                        stop: !1,
                        ms: p,
                        easing: O,
                        from: g,
                        diff: y,
                        to: m,
                        el: e,
                        callback: l.callback,
                        prev: d,
                        next: f,
                        repeat: s || t.times,
                        origin: e.attr(),
                        totalOrigin: a
                    }, an.push(x), i && !u && !c && (x.stop = !0, x.start = new Date - p * i, 1 == an.length))return ln();
                c && (x.start = new Date - x.ms * i), 1 == an.length && sn(ln)
            }
            eve("raphael.anim.start." + e.id, e, t)
        }
    }

    function n(t, e) {
        var n = [], r = {};
        if (this.ms = e, this.times = 1, t) {
            for (var i in t)t[k](i) && (r[Q(i)] = t[i], n.push(Q(i)));
            n.sort(ue)
        }
        this.anim = r, this.top = n[n.length - 1], this.percents = n
    }

    function r(t, e, n, r, i, o) {
        function a(t, e) {
            var n, r, i, o, a, s;
            for (i = t, s = 0; 8 > s; s++) {
                if (o = l(i) - t, O(o) < e)return i;
                if (a = (3 * f * i + 2 * c) * i + u, O(a) < 1e-6)break;
                i -= o / a
            }
            if (n = 0, r = 1, i = t, n > i)return n;
            if (i > r)return r;
            for (; r > n;) {
                if (o = l(i), O(o - t) < e)return i;
                t > o ? n = i : r = i, i = (r - n) / 2 + n
            }
            return i
        }

        function s(t, e) {
            var n = a(t, e);
            return ((p * n + h) * n + d) * n
        }

        function l(t) {
            return ((f * t + c) * t + u) * t
        }

        var u = 3 * e, c = 3 * (r - e) - u, f = 1 - u - c, d = 3 * n, h = 3 * (i - n) - d, p = 1 - d - h;
        return s(t, 1 / (200 * o))
    }

    function i() {
        return this.x + L + this.y + L + this.width + " Ã— " + this.height
    }

    function o(t, e, n, r, i, o) {
        null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }

    function a(t, e, n) {
        t = v._path2curve(t), e = v._path2curve(e);
        for (var r, i, o, a, l, u, c, f, d, h, p = n ? 0 : [], g = 0, m = t.length; m > g; g++) {
            var y = t[g];
            if ("M" == y[0])r = l = y[1], i = u = y[2]; else {
                "C" == y[0] ? (d = [r, i].concat(y.slice(1)), r = d[6], i = d[7]) : (d = [r, i, r, i, l, u, l, u], r = l, i = u);
                for (var x = 0, b = e.length; b > x; x++) {
                    var w = e[x];
                    if ("M" == w[0])o = c = w[1], a = f = w[2]; else {
                        "C" == w[0] ? (h = [o, a].concat(w.slice(1)), o = h[6], a = h[7]) : (h = [o, a, o, a, c, f, c, f], o = c, a = f);
                        var S = s(d, h, n);
                        if (n)p += S; else {
                            for (var k = 0, _ = S.length; _ > k; k++)S[k].segment1 = g, S[k].segment2 = x, S[k].bez1 = d, S[k].bez2 = h;
                            p = p.concat(S)
                        }
                    }
                }
            }
        }
        return p
    }

    function s(t, e, n) {
        var r = v.bezierBBox(t), i = v.bezierBBox(e);
        if (!v.isBBoxIntersect(r, i))return n ? 0 : [];
        for (var o = c.apply(0, t), a = c.apply(0, e), s = ~~(o / 5), u = ~~(a / 5), f = [], d = [], h = {}, p = n ? 0 : [], g = 0; s + 1 > g; g++) {
            var m = v.findDotsAtSegment.apply(v, t.concat(g / s));
            f.push({x: m.x, y: m.y, t: g / s})
        }
        for (g = 0; u + 1 > g; g++)m = v.findDotsAtSegment.apply(v, e.concat(g / u)), d.push({
            x: m.x,
            y: m.y,
            t: g / u
        });
        for (g = 0; s > g; g++)for (var y = 0; u > y; y++) {
            var x = f[g], b = f[g + 1], w = d[y], S = d[y + 1], k = O(b.x - x.x) < .001 ? "y" : "x", _ = O(S.x - w.x) < .001 ? "y" : "x", C = l(x.x, x.y, b.x, b.y, w.x, w.y, S.x, S.y);
            if (C) {
                if (h[C.x.toFixed(4)] == C.y.toFixed(4))continue;
                h[C.x.toFixed(4)] = C.y.toFixed(4);
                var T = x.t + O((C[k] - x[k]) / (b[k] - x[k])) * (b.t - x.t), E = w.t + O((C[_] - w[_]) / (S[_] - w[_])) * (S.t - w.t);
                T >= 0 && 1 >= T && E >= 0 && 1 >= E && (n ? p++ : p.push({x: C.x, y: C.y, t1: T, t2: E}))
            }
        }
        return p
    }

    function l(t, e, n, r, i, o, a, s) {
        if (!(R(t, n) < H(i, a) || H(t, n) > R(i, a) || R(e, r) < H(o, s) || H(e, r) > R(o, s))) {
            var l = (t * r - e * n) * (i - a) - (t - n) * (i * s - o * a), u = (t * r - e * n) * (o - s) - (e - r) * (i * s - o * a), c = (t - n) * (o - s) - (e - r) * (i - a);
            if (!c)return;
            var f = l / c, d = u / c, h = +f.toFixed(2), p = +d.toFixed(2);
            if (h < +H(t, n).toFixed(2) || h > +R(t, n).toFixed(2) || h < +H(i, a).toFixed(2) || h > +R(i, a).toFixed(2) || p < +H(e, r).toFixed(2) || p > +R(e, r).toFixed(2) || p < +H(o, s).toFixed(2) || p > +R(o, s).toFixed(2))return;
            return {x: f, y: d}
        }
    }

    function u(t, e, n, r, i, o, a, s, l) {
        if (!(0 > l || c(t, e, n, r, i, o, a, s) < l)) {
            var u, f = 1, d = f / 2, h = f - d, p = .01;
            for (u = c(t, e, n, r, i, o, a, s, h); O(u - l) > p;)d /= 2, h += (l > u ? 1 : -1) * d, u = c(t, e, n, r, i, o, a, s, h);
            return h
        }
    }

    function c(t, e, n, r, i, o, a, s, l) {
        null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
        for (var u = l / 2, c = 12, d = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, g = 0; c > g; g++) {
            var m = u * d[g] + u, v = f(m, t, n, i, a), y = f(m, e, r, o, s), x = v * v + y * y;
            p += h[g] * q.sqrt(x)
        }
        return u * p
    }

    function f(t, e, n, r, i) {
        var o = -3 * e + 9 * n - 9 * r + 3 * i, a = t * o + 6 * e - 12 * n + 6 * r;
        return t * a - 3 * e + 3 * n
    }

    function d(t, e) {
        for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
            var o = [{x: +t[r - 2], y: +t[r - 1]}, {x: +t[r], y: +t[r + 1]}, {
                x: +t[r + 2],
                y: +t[r + 3]
            }, {x: +t[r + 4], y: +t[r + 5]}];
            e ? r ? i - 4 == r ? o[3] = {x: +t[0], y: +t[1]} : i - 2 == r && (o[2] = {
                x: +t[0],
                y: +t[1]
            }, o[3] = {x: +t[2], y: +t[3]}) : o[0] = {
                x: +t[i - 2],
                y: +t[i - 1]
            } : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
                x: +t[r],
                y: +t[r + 1]
            }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
        }
        return n
    }

    function h() {
        return this.hex
    }

    function p(t, e, n) {
        function r() {
            var i = Array.prototype.slice.call(arguments, 0), o = i.join("â€"), a = r.cache = r.cache || {}, s = r.count = r.count || [];
            return a[k](o) ? (g(s, o), n ? n(a[o]) : a[o]) : (s.length >= 1e3 && delete a[s.shift()], s.push(o), a[o] = t[E](e, i), n ? n(a[o]) : a[o])
        }

        return r
    }

    function g(t, e) {
        for (var n = 0, r = t.length; r > n; n++)if (t[n] === e)return t.push(t.splice(n, 1)[0])
    }

    function m(t) {
        if (Object(t) !== t)return t;
        var e = new t.constructor;
        for (var n in t)t[k](n) && (e[n] = m(t[n]));
        return e
    }

    function v(t) {
        if (v.is(t, "function"))return y ? t() : eve.on("raphael.DOMload", t);
        if (v.is(t, X))return v._engine.create[E](v, t.splice(0, 3 + v.is(t[0], $))).add(t);
        var e = Array.prototype.slice.call(arguments, 0);
        if (v.is(e[e.length - 1], "function")) {
            var n = e.pop();
            return y ? n.call(v._engine.create[E](v, e)) : eve.on("raphael.DOMload", function () {
                n.call(v._engine.create[E](v, e))
            })
        }
        return v._engine.create[E](v, arguments)
    }

    v.version = "2.1.0", v.eve = eve;
    var y, x, b = /[, ]+/, w = {
        circle: 1,
        rect: 1,
        path: 1,
        ellipse: 1,
        text: 1,
        image: 1
    }, S = /\{(\d+)\}/g, k = "hasOwnProperty", _ = {
        doc: document,
        win: window
    }, C = {was: Object.prototype[k].call(_.win, "Raphael"), is: _.win.Raphael}, T = function () {
        this.ca = this.customAttributes = {}
    }, E = "apply", N = "concat", A = "createTouch" in _.doc, j = "", L = " ", B = String, M = "split", D = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[M](L), P = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    }, F = B.prototype.toLowerCase, q = Math, R = q.max, H = q.min, O = q.abs, z = q.pow, I = q.PI, $ = "number", W = "string", X = "array", V = Object.prototype.toString, U = (v._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i), Y = {
        NaN: 1,
        Infinity: 1,
        "-Infinity": 1
    }, G = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, J = q.round, Q = parseFloat, K = parseInt, Z = B.prototype.toUpperCase, te = v._availableAttrs = {
        "arrow-end": "none",
        "arrow-start": "none",
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: '10px "Arial"',
        "font-family": '"Arial"',
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        "letter-spacing": 0,
        opacity: 1,
        path: "M0,0",
        r: 0,
        rx: 0,
        ry: 0,
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        transform: "",
        width: 0,
        x: 0,
        y: 0
    }, ee = v._availableAnimAttrs = {
        blur: $,
        "clip-rect": "csv",
        cx: $,
        cy: $,
        fill: "colour",
        "fill-opacity": $,
        "font-size": $,
        height: $,
        opacity: $,
        path: "path",
        r: $,
        rx: $,
        ry: $,
        stroke: "colour",
        "stroke-opacity": $,
        "stroke-width": $,
        transform: "transform",
        width: $,
        x: $,
        y: $
    }, ne = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, re = {
        hs: 1,
        rg: 1
    }, ie = /,?([achlmqrstvxz]),?/gi, oe = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, ae = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, se = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, le = (v._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}), ue = function (t, e) {
        return Q(t) - Q(e)
    }, ce = function () {
    }, fe = function (t) {
        return t
    }, de = v._rectPath = function (t, e, n, r, i) {
        return i ? [["M", t + i, e], ["l", n - 2 * i, 0], ["a", i, i, 0, 0, 1, i, i], ["l", 0, r - 2 * i], ["a", i, i, 0, 0, 1, -i, i], ["l", 2 * i - n, 0], ["a", i, i, 0, 0, 1, -i, -i], ["l", 0, 2 * i - r], ["a", i, i, 0, 0, 1, i, -i], ["z"]] : [["M", t, e], ["l", n, 0], ["l", 0, r], ["l", -n, 0], ["z"]]
    }, he = function (t, e, n, r) {
        return null == r && (r = n), [["M", t, e], ["m", 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]]
    }, pe = v._getPath = {
        path: function (t) {
            return t.attr("path")
        }, circle: function (t) {
            var e = t.attrs;
            return he(e.cx, e.cy, e.r)
        }, ellipse: function (t) {
            var e = t.attrs;
            return he(e.cx, e.cy, e.rx, e.ry)
        }, rect: function (t) {
            var e = t.attrs;
            return de(e.x, e.y, e.width, e.height, e.r)
        }, image: function (t) {
            var e = t.attrs;
            return de(e.x, e.y, e.width, e.height)
        }, text: function (t) {
            var e = t._getBBox();
            return de(e.x, e.y, e.width, e.height)
        }
    }, ge = v.mapPath = function (t, e) {
        if (!e)return t;
        var n, r, i, o, a, s, l;
        for (t = De(t), i = 0, a = t.length; a > i; i++)for (l = t[i], o = 1, s = l.length; s > o; o += 2)n = e.x(l[o], l[o + 1]), r = e.y(l[o], l[o + 1]), l[o] = n, l[o + 1] = r;
        return t
    };
    if (v._g = _, v.type = _.win.SVGAngle || _.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == v.type) {
        var me, ve = _.doc.createElement("div");
        if (ve.innerHTML = '<v:shape adj="1"/>', me = ve.firstChild, me.style.behavior = "url(#default#VML)", !me || "object" != typeof me.adj)return v.type = j;
        ve = null
    }
    v.svg = !(v.vml = "VML" == v.type), v._Paper = T, v.fn = x = T.prototype = v.prototype, v._id = 0, v._oid = 0, v.is = function (t, e) {
        return e = F.call(e), "finite" == e ? !Y[k](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || V.call(t).slice(8, -1).toLowerCase() == e
    }, v.angle = function (t, e, n, r, i, o) {
        if (null == i) {
            var a = t - n, s = e - r;
            return a || s ? (180 + 180 * q.atan2(-s, -a) / I + 360) % 360 : 0
        }
        return v.angle(t, e, i, o) - v.angle(n, r, i, o)
    }, v.rad = function (t) {
        return t % 360 * I / 180
    }, v.deg = function (t) {
        return 180 * t / I % 360
    }, v.snapTo = function (t, e, n) {
        if (n = v.is(n, "finite") ? n : 10, v.is(t, X)) {
            for (var r = t.length; r--;)if (O(t[r] - e) <= n)return t[r]
        } else {
            t = +t;
            var i = e % t;
            if (n > i)return e - i;
            if (i > t - n)return e - i + t
        }
        return e
    }, v.createUUID = function (t, e) {
        return function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
        }
    }(/[xy]/g, function (t) {
        var e = 0 | 16 * q.random(), n = "x" == t ? e : 8 | 3 & e;
        return n.toString(16)
    }), v.setWindow = function (t) {
        eve("raphael.setWindow", v, _.win, t), _.win = t, _.doc = _.win.document, v._engine.initWin && v._engine.initWin(_.win)
    };
    var ye = function (t) {
        if (v.vml) {
            var e, n = /^\s+|\s+$/g;
            try {
                var r = new ActiveXObject("htmlfile");
                r.write("<body>"), r.close(), e = r.body
            } catch (i) {
                e = createPopup().document.body
            }
            var o = e.createTextRange();
            ye = p(function (t) {
                try {
                    e.style.color = B(t).replace(n, j);
                    var r = o.queryCommandValue("ForeColor");
                    return r = (255 & r) << 16 | 65280 & r | (16711680 & r) >>> 16, "#" + ("000000" + r.toString(16)).slice(-6)
                } catch (i) {
                    return "none"
                }
            })
        } else {
            var a = _.doc.createElement("i");
            a.title = "RaphaÃ«l Colour Picker", a.style.display = "none", _.doc.body.appendChild(a), ye = p(function (t) {
                return a.style.color = t, _.doc.defaultView.getComputedStyle(a, j).getPropertyValue("color")
            })
        }
        return ye(t)
    }, xe = function () {
        return "hsb(" + [this.h, this.s, this.b] + ")"
    }, be = function () {
        return "hsl(" + [this.h, this.s, this.l] + ")"
    }, we = function () {
        return this.hex
    }, Se = function (t, e, n) {
        if (null == e && v.is(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && v.is(t, W)) {
            var r = v.getRGB(t);
            t = r.r, e = r.g, n = r.b
        }
        return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
    }, ke = function (t, e, n, r) {
        t *= 255, e *= 255, n *= 255;
        var i = {r: t, g: e, b: n, hex: v.rgb(t, e, n), toString: we};
        return v.is(r, "finite") && (i.opacity = r), i
    };
    v.color = function (t) {
        var e;
        return v.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = v.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : v.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = v.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (v.is(t, "string") && (t = v.getRGB(t)), v.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = v.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = v.rgb2hsb(t), t.v = e.b) : (t = {hex: "none"}, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = we, t
    }, v.hsb2rgb = function (t, e, n, r) {
        this.is(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, t = t.h, r = t.o), t *= 360;
        var i, o, a, s, l;
        return t = t % 360 / 60, l = n * e, s = l * (1 - O(t % 2 - 1)), i = o = a = n - l, t = ~~t, i += [l, s, 0, 0, s, l][t], o += [s, l, l, s, 0, 0][t], a += [0, 0, s, l, l, s][t], ke(i, o, a, r)
    }, v.hsl2rgb = function (t, e, n, r) {
        this.is(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
        var i, o, a, s, l;
        return t = t % 360 / 60, l = 2 * e * (.5 > n ? n : 1 - n), s = l * (1 - O(t % 2 - 1)), i = o = a = n - l / 2, t = ~~t, i += [l, s, 0, 0, s, l][t], o += [s, l, l, s, 0, 0][t], a += [0, 0, s, l, l, s][t], ke(i, o, a, r)
    }, v.rgb2hsb = function (t, e, n) {
        n = Se(t, e, n), t = n[0], e = n[1], n = n[2];
        var r, i, o, a;
        return o = R(t, e, n), a = o - H(t, e, n), r = 0 == a ? null : o == t ? (e - n) / a : o == e ? (n - t) / a + 2 : (t - e) / a + 4, r = 60 * ((r + 360) % 6) / 360, i = 0 == a ? 0 : a / o, {
            h: r,
            s: i,
            b: o,
            toString: xe
        }
    }, v.rgb2hsl = function (t, e, n) {
        n = Se(t, e, n), t = n[0], e = n[1], n = n[2];
        var r, i, o, a, s, l;
        return a = R(t, e, n), s = H(t, e, n), l = a - s, r = 0 == l ? null : a == t ? (e - n) / l : a == e ? (n - t) / l + 2 : (t - e) / l + 4, r = 60 * ((r + 360) % 6) / 360, o = (a + s) / 2, i = 0 == l ? 0 : .5 > o ? l / (2 * o) : l / (2 - 2 * o), {
            h: r,
            s: i,
            l: o,
            toString: be
        }
    }, v._path2string = function () {
        return this.join(",").replace(ie, "$1")
    }, v._preload = function (t, e) {
        var n = _.doc.createElement("img");
        n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function () {
            e.call(this), this.onload = null, _.doc.body.removeChild(this)
        }, n.onerror = function () {
            _.doc.body.removeChild(this)
        }, _.doc.body.appendChild(n), n.src = t
    }, v.getRGB = p(function (t) {
        if (!t || (t = B(t)).indexOf("-") + 1)return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: h};
        if ("none" == t)return {r: -1, g: -1, b: -1, hex: "none", toString: h};
        !re[k](t.toLowerCase().substring(0, 2)) && "#" != t.charAt() && (t = ye(t));
        var e, n, r, i, o, a, s = t.match(U);
        return s ? (s[2] && (r = K(s[2].substring(5), 16), n = K(s[2].substring(3, 5), 16), e = K(s[2].substring(1, 3), 16)), s[3] && (r = K((o = s[3].charAt(3)) + o, 16), n = K((o = s[3].charAt(2)) + o, 16), e = K((o = s[3].charAt(1)) + o, 16)), s[4] && (a = s[4][M](ne), e = Q(a[0]), "%" == a[0].slice(-1) && (e *= 2.55), n = Q(a[1]), "%" == a[1].slice(-1) && (n *= 2.55), r = Q(a[2]), "%" == a[2].slice(-1) && (r *= 2.55), "rgba" == s[1].toLowerCase().slice(0, 4) && (i = Q(a[3])), a[3] && "%" == a[3].slice(-1) && (i /= 100)), s[5] ? (a = s[5][M](ne), e = Q(a[0]), "%" == a[0].slice(-1) && (e *= 2.55), n = Q(a[1]), "%" == a[1].slice(-1) && (n *= 2.55), r = Q(a[2]), "%" == a[2].slice(-1) && (r *= 2.55), ("deg" == a[0].slice(-3) || "Â°" == a[0].slice(-1)) && (e /= 360), "hsba" == s[1].toLowerCase().slice(0, 4) && (i = Q(a[3])), a[3] && "%" == a[3].slice(-1) && (i /= 100), v.hsb2rgb(e, n, r, i)) : s[6] ? (a = s[6][M](ne), e = Q(a[0]), "%" == a[0].slice(-1) && (e *= 2.55), n = Q(a[1]), "%" == a[1].slice(-1) && (n *= 2.55), r = Q(a[2]), "%" == a[2].slice(-1) && (r *= 2.55), ("deg" == a[0].slice(-3) || "Â°" == a[0].slice(-1)) && (e /= 360), "hsla" == s[1].toLowerCase().slice(0, 4) && (i = Q(a[3])), a[3] && "%" == a[3].slice(-1) && (i /= 100), v.hsl2rgb(e, n, r, i)) : (s = {
            r: e,
            g: n,
            b: r,
            toString: h
        }, s.hex = "#" + (16777216 | r | n << 8 | e << 16).toString(16).slice(1), v.is(i, "finite") && (s.opacity = i), s)) : {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: h
        }
    }, v), v.hsb = p(function (t, e, n) {
        return v.hsb2rgb(t, e, n).hex
    }), v.hsl = p(function (t, e, n) {
        return v.hsl2rgb(t, e, n).hex
    }), v.rgb = p(function (t, e, n) {
        return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
    }), v.getColor = function (t) {
        var e = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: t || .75}, n = this.hsb2rgb(e.h, e.s, e.b);
        return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
            h: 0,
            s: 1,
            b: e.b
        })), n.hex
    }, v.getColor.reset = function () {
        delete this.start
    }, v.parsePathString = function (t) {
        if (!t)return null;
        var e = _e(t);
        if (e.arr)return Te(e.arr);
        var n = {a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0}, r = [];
        return v.is(t, X) && v.is(t[0], X) && (r = Te(t)), r.length || B(t).replace(oe, function (t, e, i) {
            var o = [], a = e.toLowerCase();
            if (i.replace(se, function (t, e) {
                    e && o.push(+e)
                }), "m" == a && o.length > 2 && (r.push([e][N](o.splice(0, 2))), a = "l", e = "m" == e ? "l" : "L"), "r" == a)r.push([e][N](o)); else for (; o.length >= n[a] && (r.push([e][N](o.splice(0, n[a]))), n[a]););
        }), r.toString = v._path2string, e.arr = Te(r), r
    }, v.parseTransformString = p(function (t) {
        if (!t)return null;
        var e = [];
        return v.is(t, X) && v.is(t[0], X) && (e = Te(t)), e.length || B(t).replace(ae, function (t, n, r) {
            var i = [];
            F.call(n), r.replace(se, function (t, e) {
                e && i.push(+e)
            }), e.push([n][N](i))
        }), e.toString = v._path2string, e
    });
    var _e = function (t) {
        var e = _e.ps = _e.ps || {};
        return e[t] ? e[t].sleep = 100 : e[t] = {sleep: 100}, setTimeout(function () {
            for (var n in e)e[k](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
        }), e[t]
    };
    v.findDotsAtSegment = function (t, e, n, r, i, o, a, s, l) {
        var u = 1 - l, c = z(u, 3), f = z(u, 2), d = l * l, h = d * l, p = c * t + 3 * f * l * n + 3 * u * l * l * i + h * a, g = c * e + 3 * f * l * r + 3 * u * l * l * o + h * s, m = t + 2 * l * (n - t) + d * (i - 2 * n + t), v = e + 2 * l * (r - e) + d * (o - 2 * r + e), y = n + 2 * l * (i - n) + d * (a - 2 * i + n), x = r + 2 * l * (o - r) + d * (s - 2 * o + r), b = u * t + l * n, w = u * e + l * r, S = u * i + l * a, k = u * o + l * s, _ = 90 - 180 * q.atan2(m - y, v - x) / I;
        return (m > y || x > v) && (_ += 180), {
            x: p,
            y: g,
            m: {x: m, y: v},
            n: {x: y, y: x},
            start: {x: b, y: w},
            end: {x: S, y: k},
            alpha: _
        }
    }, v.bezierBBox = function (t, e, n, r, i, o, a, s) {
        v.is(t, "array") || (t = [t, e, n, r, i, o, a, s]);
        var l = Me.apply(null, t);
        return {x: l.min.x, y: l.min.y, x2: l.max.x, y2: l.max.y, width: l.max.x - l.min.x, height: l.max.y - l.min.y}
    }, v.isPointInsideBBox = function (t, e, n) {
        return e >= t.x && e <= t.x2 && n >= t.y && n <= t.y2
    }, v.isBBoxIntersect = function (t, e) {
        var n = v.isPointInsideBBox;
        return n(e, t.x, t.y) || n(e, t.x2, t.y) || n(e, t.x, t.y2) || n(e, t.x2, t.y2) || n(t, e.x, e.y) || n(t, e.x2, e.y) || n(t, e.x, e.y2) || n(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
    }, v.pathIntersection = function (t, e) {
        return a(t, e)
    }, v.pathIntersectionNumber = function (t, e) {
        return a(t, e, 1)
    }, v.isPointInsidePath = function (t, e, n) {
        var r = v.pathBBox(t);
        return v.isPointInsideBBox(r, e, n) && 1 == a(t, [["M", e, n], ["H", r.x2 + 10]], 1) % 2
    }, v._removedFactory = function (t) {
        return function () {
            eve("raphael.log", null, "RaphaÃ«l: you are calling to method â€œ" + t + "â€ of removed object", t)
        }
    };
    var Ce = v.pathBBox = function (t) {
        var e = _e(t);
        if (e.bbox)return e.bbox;
        if (!t)return {x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0};
        t = De(t);
        for (var n, r = 0, i = 0, o = [], a = [], s = 0, l = t.length; l > s; s++)if (n = t[s], "M" == n[0])r = n[1], i = n[2], o.push(r), a.push(i); else {
            var u = Me(r, i, n[1], n[2], n[3], n[4], n[5], n[6]);
            o = o[N](u.min.x, u.max.x), a = a[N](u.min.y, u.max.y), r = n[5], i = n[6]
        }
        var c = H[E](0, o), f = H[E](0, a), d = R[E](0, o), h = R[E](0, a), p = {
            x: c,
            y: f,
            x2: d,
            y2: h,
            width: d - c,
            height: h - f
        };
        return e.bbox = m(p), p
    }, Te = function (t) {
        var e = m(t);
        return e.toString = v._path2string, e
    }, Ee = v._pathToRelative = function (t) {
        var e = _e(t);
        if (e.rel)return Te(e.rel);
        v.is(t, X) && v.is(t && t[0], X) || (t = v.parsePathString(t));
        var n = [], r = 0, i = 0, o = 0, a = 0, s = 0;
        "M" == t[0][0] && (r = t[0][1], i = t[0][2], o = r, a = i, s++, n.push(["M", r, i]));
        for (var l = s, u = t.length; u > l; l++) {
            var c = n[l] = [], f = t[l];
            if (f[0] != F.call(f[0]))switch (c[0] = F.call(f[0]), c[0]) {
                case"a":
                    c[1] = f[1], c[2] = f[2], c[3] = f[3], c[4] = f[4], c[5] = f[5], c[6] = +(f[6] - r).toFixed(3), c[7] = +(f[7] - i).toFixed(3);
                    break;
                case"v":
                    c[1] = +(f[1] - i).toFixed(3);
                    break;
                case"m":
                    o = f[1], a = f[2];
                default:
                    for (var d = 1, h = f.length; h > d; d++)c[d] = +(f[d] - (d % 2 ? r : i)).toFixed(3)
            } else {
                c = n[l] = [], "m" == f[0] && (o = f[1] + r, a = f[2] + i);
                for (var p = 0, g = f.length; g > p; p++)n[l][p] = f[p]
            }
            var m = n[l].length;
            switch (n[l][0]) {
                case"z":
                    r = o, i = a;
                    break;
                case"h":
                    r += +n[l][m - 1];
                    break;
                case"v":
                    i += +n[l][m - 1];
                    break;
                default:
                    r += +n[l][m - 2], i += +n[l][m - 1]
            }
        }
        return n.toString = v._path2string, e.rel = Te(n), n
    }, Ne = v._pathToAbsolute = function (t) {
        var e = _e(t);
        if (e.abs)return Te(e.abs);
        if (v.is(t, X) && v.is(t && t[0], X) || (t = v.parsePathString(t)), !t || !t.length)return [["M", 0, 0]];
        var n = [], r = 0, i = 0, o = 0, a = 0, s = 0;
        "M" == t[0][0] && (r = +t[0][1], i = +t[0][2], o = r, a = i, s++, n[0] = ["M", r, i]);
        for (var l, u, c = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), f = s, h = t.length; h > f; f++) {
            if (n.push(l = []), u = t[f], u[0] != Z.call(u[0]))switch (l[0] = Z.call(u[0]), l[0]) {
                case"A":
                    l[1] = u[1], l[2] = u[2], l[3] = u[3], l[4] = u[4], l[5] = u[5], l[6] = +(u[6] + r), l[7] = +(u[7] + i);
                    break;
                case"V":
                    l[1] = +u[1] + i;
                    break;
                case"H":
                    l[1] = +u[1] + r;
                    break;
                case"R":
                    for (var p = [r, i][N](u.slice(1)), g = 2, m = p.length; m > g; g++)p[g] = +p[g] + r, p[++g] = +p[g] + i;
                    n.pop(), n = n[N](d(p, c));
                    break;
                case"M":
                    o = +u[1] + r, a = +u[2] + i;
                default:
                    for (g = 1, m = u.length; m > g; g++)l[g] = +u[g] + (g % 2 ? r : i)
            } else if ("R" == u[0])p = [r, i][N](u.slice(1)), n.pop(), n = n[N](d(p, c)), l = ["R"][N](u.slice(-2)); else for (var y = 0, x = u.length; x > y; y++)l[y] = u[y];
            switch (l[0]) {
                case"Z":
                    r = o, i = a;
                    break;
                case"H":
                    r = l[1];
                    break;
                case"V":
                    i = l[1];
                    break;
                case"M":
                    o = l[l.length - 2], a = l[l.length - 1];
                default:
                    r = l[l.length - 2], i = l[l.length - 1]
            }
        }
        return n.toString = v._path2string, e.abs = Te(n), n
    }, Ae = function (t, e, n, r) {
        return [t, e, n, r, n, r]
    }, je = function (t, e, n, r, i, o) {
        var a = 1 / 3, s = 2 / 3;
        return [a * t + s * n, a * e + s * r, a * i + s * n, a * o + s * r, i, o]
    }, Le = function (t, e, n, r, i, o, a, s, l, u) {
        var c, f = 120 * I / 180, d = I / 180 * (+i || 0), h = [], g = p(function (t, e, n) {
            var r = t * q.cos(n) - e * q.sin(n), i = t * q.sin(n) + e * q.cos(n);
            return {x: r, y: i}
        });
        if (u)_ = u[0], C = u[1], S = u[2], k = u[3]; else {
            c = g(t, e, -d), t = c.x, e = c.y, c = g(s, l, -d), s = c.x, l = c.y;
            var m = (q.cos(I / 180 * i), q.sin(I / 180 * i), (t - s) / 2), v = (e - l) / 2, y = m * m / (n * n) + v * v / (r * r);
            y > 1 && (y = q.sqrt(y), n = y * n, r = y * r);
            var x = n * n, b = r * r, w = (o == a ? -1 : 1) * q.sqrt(O((x * b - x * v * v - b * m * m) / (x * v * v + b * m * m))), S = w * n * v / r + (t + s) / 2, k = w * -r * m / n + (e + l) / 2, _ = q.asin(((e - k) / r).toFixed(9)), C = q.asin(((l - k) / r).toFixed(9));
            _ = S > t ? I - _ : _, C = S > s ? I - C : C, 0 > _ && (_ = 2 * I + _), 0 > C && (C = 2 * I + C), a && _ > C && (_ -= 2 * I), !a && C > _ && (C -= 2 * I)
        }
        var T = C - _;
        if (O(T) > f) {
            var E = C, A = s, j = l;
            C = _ + f * (a && C > _ ? 1 : -1), s = S + n * q.cos(C), l = k + r * q.sin(C), h = Le(s, l, n, r, i, 0, a, A, j, [C, E, S, k])
        }
        T = C - _;
        var L = q.cos(_), B = q.sin(_), D = q.cos(C), P = q.sin(C), F = q.tan(T / 4), R = 4 / 3 * n * F, H = 4 / 3 * r * F, z = [t, e], $ = [t + R * B, e - H * L], W = [s + R * P, l - H * D], X = [s, l];
        if ($[0] = 2 * z[0] - $[0], $[1] = 2 * z[1] - $[1], u)return [$, W, X][N](h);
        h = [$, W, X][N](h).join()[M](",");
        for (var V = [], U = 0, Y = h.length; Y > U; U++)V[U] = U % 2 ? g(h[U - 1], h[U], d).y : g(h[U], h[U + 1], d).x;
        return V
    }, Be = function (t, e, n, r, i, o, a, s, l) {
        var u = 1 - l;
        return {
            x: z(u, 3) * t + 3 * z(u, 2) * l * n + 3 * u * l * l * i + z(l, 3) * a,
            y: z(u, 3) * e + 3 * z(u, 2) * l * r + 3 * u * l * l * o + z(l, 3) * s
        }
    }, Me = p(function (t, e, n, r, i, o, a, s) {
        var l, u = i - 2 * n + t - (a - 2 * i + n), c = 2 * (n - t) - 2 * (i - n), f = t - n, d = (-c + q.sqrt(c * c - 4 * u * f)) / 2 / u, h = (-c - q.sqrt(c * c - 4 * u * f)) / 2 / u, p = [e, s], g = [t, a];
        return O(d) > "1e12" && (d = .5), O(h) > "1e12" && (h = .5), d > 0 && 1 > d && (l = Be(t, e, n, r, i, o, a, s, d), g.push(l.x), p.push(l.y)), h > 0 && 1 > h && (l = Be(t, e, n, r, i, o, a, s, h), g.push(l.x), p.push(l.y)), u = o - 2 * r + e - (s - 2 * o + r), c = 2 * (r - e) - 2 * (o - r), f = e - r, d = (-c + q.sqrt(c * c - 4 * u * f)) / 2 / u, h = (-c - q.sqrt(c * c - 4 * u * f)) / 2 / u, O(d) > "1e12" && (d = .5), O(h) > "1e12" && (h = .5), d > 0 && 1 > d && (l = Be(t, e, n, r, i, o, a, s, d), g.push(l.x), p.push(l.y)), h > 0 && 1 > h && (l = Be(t, e, n, r, i, o, a, s, h), g.push(l.x), p.push(l.y)), {
            min: {
                x: H[E](0, g),
                y: H[E](0, p)
            }, max: {x: R[E](0, g), y: R[E](0, p)}
        }
    }), De = v._path2curve = p(function (t, e) {
        var n = !e && _e(t);
        if (!e && n.curve)return Te(n.curve);
        for (var r = Ne(t), i = e && Ne(e), o = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, a = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }, s = (function (t, e) {
            var n, r;
            if (!t)return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
            switch (!(t[0] in {T: 1, Q: 1}) && (e.qx = e.qy = null), t[0]) {
                case"M":
                    e.X = t[1], e.Y = t[2];
                    break;
                case"A":
                    t = ["C"][N](Le[E](0, [e.x, e.y][N](t.slice(1))));
                    break;
                case"S":
                    n = e.x + (e.x - (e.bx || e.x)), r = e.y + (e.y - (e.by || e.y)), t = ["C", n, r][N](t.slice(1));
                    break;
                case"T":
                    e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), t = ["C"][N](je(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                    break;
                case"Q":
                    e.qx = t[1], e.qy = t[2], t = ["C"][N](je(e.x, e.y, t[1], t[2], t[3], t[4]));
                    break;
                case"L":
                    t = ["C"][N](Ae(e.x, e.y, t[1], t[2]));
                    break;
                case"H":
                    t = ["C"][N](Ae(e.x, e.y, t[1], e.y));
                    break;
                case"V":
                    t = ["C"][N](Ae(e.x, e.y, e.x, t[1]));
                    break;
                case"Z":
                    t = ["C"][N](Ae(e.x, e.y, e.X, e.Y))
            }
            return t
        }), l = function (t, e) {
            if (t[e].length > 7) {
                t[e].shift();
                for (var n = t[e]; n.length;)t.splice(e++, 0, ["C"][N](n.splice(0, 6)));
                t.splice(e, 1), f = R(r.length, i && i.length || 0)
            }
        }, u = function (t, e, n, o, a) {
            t && e && "M" == t[a][0] && "M" != e[a][0] && (e.splice(a, 0, ["M", o.x, o.y]), n.bx = 0, n.by = 0, n.x = t[a][1], n.y = t[a][2], f = R(r.length, i && i.length || 0))
        }, c = 0, f = R(r.length, i && i.length || 0); f > c; c++) {
            r[c] = s(r[c], o), l(r, c), i && (i[c] = s(i[c], a)), i && l(i, c), u(r, i, o, a, c), u(i, r, a, o, c);
            var d = r[c], h = i && i[c], p = d.length, g = i && h.length;
            o.x = d[p - 2], o.y = d[p - 1], o.bx = Q(d[p - 4]) || o.x, o.by = Q(d[p - 3]) || o.y, a.bx = i && (Q(h[g - 4]) || a.x), a.by = i && (Q(h[g - 3]) || a.y), a.x = i && h[g - 2], a.y = i && h[g - 1]
        }
        return i || (n.curve = Te(r)), i ? [r, i] : r
    }, null, Te), Pe = (v._parseDots = p(function (t) {
        for (var e = [], n = 0, r = t.length; r > n; n++) {
            var i = {}, o = t[n].match(/^([^:]*):?([\d\.]*)/);
            if (i.color = v.getRGB(o[1]), i.color.error)return null;
            i.color = i.color.hex, o[2] && (i.offset = o[2] + "%"), e.push(i)
        }
        for (n = 1, r = e.length - 1; r > n; n++)if (!e[n].offset) {
            for (var a = Q(e[n - 1].offset || 0), s = 0, l = n + 1; r > l; l++)if (e[l].offset) {
                s = e[l].offset;
                break
            }
            s || (s = 100, l = r), s = Q(s);
            for (var u = (s - a) / (l - n + 1); l > n; n++)a += u, e[n].offset = a + "%"
        }
        return e
    }), v._tear = function (t, e) {
        t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
    }), Fe = (v._tofront = function (t, e) {
        e.top !== t && (Pe(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
    }, v._toback = function (t, e) {
        e.bottom !== t && (Pe(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
    }, v._insertafter = function (t, e, n) {
        Pe(t, n), e == n.top && (n.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
    }, v._insertbefore = function (t, e, n) {
        Pe(t, n), e == n.bottom && (n.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
    }, v.toMatrix = function (t, e) {
        var n = Ce(t), r = {
            _: {transform: j}, getBBox: function () {
                return n
            }
        };
        return qe(r, e), r.matrix
    }), qe = (v.transformPath = function (t, e) {
        return ge(t, Fe(t, e))
    }, v._extractTransform = function (t, e) {
        if (null == e)return t._.transform;
        e = B(e).replace(/\.{3}|\u2026/g, t._.transform || j);
        var n = v.parseTransformString(e), r = 0, i = 0, a = 0, s = 1, l = 1, u = t._, c = new o;
        if (u.transform = n || [], n)for (var f = 0, d = n.length; d > f; f++) {
            var h, p, g, m, y, x = n[f], b = x.length, w = B(x[0]).toLowerCase(), S = x[0] != w, k = S ? c.invert() : 0;
            "t" == w && 3 == b ? S ? (h = k.x(0, 0), p = k.y(0, 0), g = k.x(x[1], x[2]), m = k.y(x[1], x[2]), c.translate(g - h, m - p)) : c.translate(x[1], x[2]) : "r" == w ? 2 == b ? (y = y || t.getBBox(1), c.rotate(x[1], y.x + y.width / 2, y.y + y.height / 2), r += x[1]) : 4 == b && (S ? (g = k.x(x[2], x[3]), m = k.y(x[2], x[3]), c.rotate(x[1], g, m)) : c.rotate(x[1], x[2], x[3]), r += x[1]) : "s" == w ? 2 == b || 3 == b ? (y = y || t.getBBox(1), c.scale(x[1], x[b - 1], y.x + y.width / 2, y.y + y.height / 2), s *= x[1], l *= x[b - 1]) : 5 == b && (S ? (g = k.x(x[3], x[4]), m = k.y(x[3], x[4]), c.scale(x[1], x[2], g, m)) : c.scale(x[1], x[2], x[3], x[4]), s *= x[1], l *= x[2]) : "m" == w && 7 == b && c.add(x[1], x[2], x[3], x[4], x[5], x[6]), u.dirtyT = 1, t.matrix = c
        }
        t.matrix = c, u.sx = s, u.sy = l, u.deg = r, u.dx = i = c.e, u.dy = a = c.f, 1 == s && 1 == l && !r && u.bbox ? (u.bbox.x += +i, u.bbox.y += +a) : u.dirtyT = 1
    }), Re = function (t) {
        var e = t[0];
        switch (e.toLowerCase()) {
            case"t":
                return [e, 0, 0];
            case"m":
                return [e, 1, 0, 0, 1, 0, 0];
            case"r":
                return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
            case"s":
                return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
        }
    }, He = v._equaliseTransform = function (t, e) {
        e = B(e).replace(/\.{3}|\u2026/g, t), t = v.parseTransformString(t) || [], e = v.parseTransformString(e) || [];
        for (var n, r, i, o, a = R(t.length, e.length), s = [], l = [], u = 0; a > u; u++) {
            if (i = t[u] || Re(e[u]), o = e[u] || Re(i), i[0] != o[0] || "r" == i[0].toLowerCase() && (i[2] != o[2] || i[3] != o[3]) || "s" == i[0].toLowerCase() && (i[3] != o[3] || i[4] != o[4]))return;
            for (s[u] = [], l[u] = [], n = 0, r = R(i.length, o.length); r > n; n++)n in i && (s[u][n] = i[n]), n in o && (l[u][n] = o[n])
        }
        return {from: s, to: l}
    };
    v._getContainer = function (t, e, n, r) {
        var i;
        return i = null != r || v.is(t, "object") ? t : _.doc.getElementById(t), null != i ? i.tagName ? null == e ? {
            container: i,
            width: i.style.pixelWidth || i.offsetWidth,
            height: i.style.pixelHeight || i.offsetHeight
        } : {container: i, width: e, height: n} : {container: 1, x: t, y: e, width: n, height: r} : void 0
    }, v.pathToRelative = Ee, v._engine = {}, v.path2curve = De, v.matrix = function (t, e, n, r, i, a) {
        return new o(t, e, n, r, i, a)
    }, function (t) {
        function e(t) {
            var e = q.sqrt(n(t));
            t[0] && (t[0] /= e), t[1] && (t[1] /= e)
        }

        function n(t) {
            return t[0] * t[0] + t[1] * t[1]
        }

        t.add = function (t, e, n, r, i, a) {
            var s, l, u, c, f = [[], [], []], d = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], h = [[t, n, i], [e, r, a], [0, 0, 1]];
            for (t && t instanceof o && (h = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), s = 0; 3 > s; s++)for (l = 0; 3 > l; l++) {
                for (c = 0, u = 0; 3 > u; u++)c += d[s][u] * h[u][l];
                f[s][l] = c
            }
            this.a = f[0][0], this.b = f[1][0], this.c = f[0][1], this.d = f[1][1], this.e = f[0][2], this.f = f[1][2]
        }, t.invert = function () {
            var t = this, e = t.a * t.d - t.b * t.c;
            return new o(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
        }, t.clone = function () {
            return new o(this.a, this.b, this.c, this.d, this.e, this.f)
        }, t.translate = function (t, e) {
            this.add(1, 0, 0, 1, t, e)
        }, t.scale = function (t, e, n, r) {
            null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r)
        }, t.rotate = function (t, e, n) {
            t = v.rad(t), e = e || 0, n = n || 0;
            var r = +q.cos(t).toFixed(9), i = +q.sin(t).toFixed(9);
            this.add(r, i, -i, r, e, n), this.add(1, 0, 0, 1, -e, -n)
        }, t.x = function (t, e) {
            return t * this.a + e * this.c + this.e
        }, t.y = function (t, e) {
            return t * this.b + e * this.d + this.f
        }, t.get = function (t) {
            return +this[B.fromCharCode(97 + t)].toFixed(4)
        }, t.toString = function () {
            return v.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        }, t.toFilter = function () {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        }, t.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        }, t.split = function () {
            var t = {};
            t.dx = this.e, t.dy = this.f;
            var r = [[this.a, this.c], [this.b, this.d]];
            t.scalex = q.sqrt(n(r[0])), e(r[0]), t.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * t.shear, r[1][1] - r[0][1] * t.shear], t.scaley = q.sqrt(n(r[1])), e(r[1]), t.shear /= t.scaley;
            var i = -r[0][1], o = r[1][1];
            return 0 > o ? (t.rotate = v.deg(q.acos(o)), 0 > i && (t.rotate = 360 - t.rotate)) : t.rotate = v.deg(q.asin(i)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
        }, t.toTransformString = function (t) {
            var e = t || this[M]();
            return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : j) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : j) + (e.rotate ? "r" + [e.rotate, 0, 0] : j)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
        }
    }(o.prototype);
    var Oe = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    x.safari = "Apple Computer, Inc." == navigator.vendor && (Oe && Oe[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Oe && Oe[1] < 8 ? function () {
        var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
        setTimeout(function () {
            t.remove()
        })
    } : ce;
    for (var ze = function () {
        this.returnValue = !1
    }, Ie = function () {
        return this.originalEvent.preventDefault()
    }, $e = function () {
        this.cancelBubble = !0
    }, We = function () {
        return this.originalEvent.stopPropagation()
    }, Xe = function () {
        return _.doc.addEventListener ? function (t, e, n, r) {
            var i = A && P[e] ? P[e] : e, o = function (i) {
                var o = _.doc.documentElement.scrollTop || _.doc.body.scrollTop, a = _.doc.documentElement.scrollLeft || _.doc.body.scrollLeft, s = i.clientX + a, l = i.clientY + o;
                if (A && P[k](e))for (var u = 0, c = i.targetTouches && i.targetTouches.length; c > u; u++)if (i.targetTouches[u].target == t) {
                    var f = i;
                    i = i.targetTouches[u], i.originalEvent = f, i.preventDefault = Ie, i.stopPropagation = We;
                    break
                }
                return n.call(r, i, s, l)
            };
            return t.addEventListener(i, o, !1), function () {
                return t.removeEventListener(i, o, !1), !0
            }
        } : _.doc.attachEvent ? function (t, e, n, r) {
            var i = function (t) {
                t = t || _.win.event;
                var e = _.doc.documentElement.scrollTop || _.doc.body.scrollTop, i = _.doc.documentElement.scrollLeft || _.doc.body.scrollLeft, o = t.clientX + i, a = t.clientY + e;
                return t.preventDefault = t.preventDefault || ze, t.stopPropagation = t.stopPropagation || $e, n.call(r, t, o, a)
            };
            t.attachEvent("on" + e, i);
            var o = function () {
                return t.detachEvent("on" + e, i), !0
            };
            return o
        } : void 0
    }(), Ve = [], Ue = function (t) {
        for (var e, n = t.clientX, r = t.clientY, i = _.doc.documentElement.scrollTop || _.doc.body.scrollTop, o = _.doc.documentElement.scrollLeft || _.doc.body.scrollLeft, a = Ve.length; a--;) {
            if (e = Ve[a], A) {
                for (var s, l = t.touches.length; l--;)if (s = t.touches[l], s.identifier == e.el._drag.id) {
                    n = s.clientX, r = s.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                    break
                }
            } else t.preventDefault();
            var u, c = e.el.node, f = c.nextSibling, d = c.parentNode, h = c.style.display;
            _.win.opera && d.removeChild(c), c.style.display = "none", u = e.el.paper.getElementByPoint(n, r), c.style.display = h, _.win.opera && (f ? d.insertBefore(c, f) : d.appendChild(c)), u && eve("raphael.drag.over." + e.el.id, e.el, u), n += o, r += i, eve("raphael.drag.move." + e.el.id, e.move_scope || e.el, n - e.el._drag.x, r - e.el._drag.y, n, r, t)
        }
    }, Ye = function (t) {
        v.unmousemove(Ue).unmouseup(Ye);
        for (var e, n = Ve.length; n--;)e = Ve[n], e.el._drag = {}, eve("raphael.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, t);
        Ve = []
    }, Ge = v.el = {}, Je = D.length; Je--;)!function (t) {
        v[t] = Ge[t] = function (e, n) {
            return v.is(e, "function") && (this.events = this.events || [], this.events.push({
                name: t,
                f: e,
                unbind: Xe(this.shape || this.node || _.doc, t, e, n || this)
            })), this
        }, v["un" + t] = Ge["un" + t] = function (e) {
            for (var n = this.events || [], r = n.length; r--;)if (n[r].name == t && n[r].f == e)return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
            return this
        }
    }(D[Je]);
    Ge.data = function (t, e) {
        var n = le[this.id] = le[this.id] || {};
        if (1 == arguments.length) {
            if (v.is(t, "object")) {
                for (var r in t)t[k](r) && this.data(r, t[r]);
                return this
            }
            return eve("raphael.data.get." + this.id, this, n[t], t), n[t]
        }
        return n[t] = e, eve("raphael.data.set." + this.id, this, e, t), this
    }, Ge.removeData = function (t) {
        return null == t ? le[this.id] = {} : le[this.id] && delete le[this.id][t], this
    }, Ge.hover = function (t, e, n, r) {
        return this.mouseover(t, n).mouseout(e, r || n)
    }, Ge.unhover = function (t, e) {
        return this.unmouseover(t).unmouseout(e)
    };
    var Qe = [];
    Ge.drag = function (t, e, n, r, i, o) {
        function a(a) {
            (a.originalEvent || a).preventDefault();
            var s = _.doc.documentElement.scrollTop || _.doc.body.scrollTop, l = _.doc.documentElement.scrollLeft || _.doc.body.scrollLeft;
            this._drag.x = a.clientX + l, this._drag.y = a.clientY + s, this._drag.id = a.identifier, !Ve.length && v.mousemove(Ue).mouseup(Ye), Ve.push({
                el: this,
                move_scope: r,
                start_scope: i,
                end_scope: o
            }), e && eve.on("raphael.drag.start." + this.id, e), t && eve.on("raphael.drag.move." + this.id, t), n && eve.on("raphael.drag.end." + this.id, n), eve("raphael.drag.start." + this.id, i || r || this, a.clientX + l, a.clientY + s, a)
        }

        return this._drag = {}, Qe.push({el: this, start: a}), this.mousedown(a), this
    }, Ge.onDragOver = function (t) {
        t ? eve.on("raphael.drag.over." + this.id, t) : eve.unbind("raphael.drag.over." + this.id)
    }, Ge.undrag = function () {
        for (var t = Qe.length; t--;)Qe[t].el == this && (this.unmousedown(Qe[t].start), Qe.splice(t, 1), eve.unbind("raphael.drag.*." + this.id));
        !Qe.length && v.unmousemove(Ue).unmouseup(Ye)
    }, x.circle = function (t, e, n) {
        var r = v._engine.circle(this, t || 0, e || 0, n || 0);
        return this.__set__ && this.__set__.push(r), r
    }, x.rect = function (t, e, n, r, i) {
        var o = v._engine.rect(this, t || 0, e || 0, n || 0, r || 0, i || 0);
        return this.__set__ && this.__set__.push(o), o
    }, x.ellipse = function (t, e, n, r) {
        var i = v._engine.ellipse(this, t || 0, e || 0, n || 0, r || 0);
        return this.__set__ && this.__set__.push(i), i
    }, x.path = function (t) {
        t && !v.is(t, W) && !v.is(t[0], X) && (t += j);
        var e = v._engine.path(v.format[E](v, arguments), this);
        return this.__set__ && this.__set__.push(e), e
    }, x.image = function (t, e, n, r, i) {
        var o = v._engine.image(this, t || "about:blank", e || 0, n || 0, r || 0, i || 0);
        return this.__set__ && this.__set__.push(o), o
    }, x.text = function (t, e, n) {
        var r = v._engine.text(this, t || 0, e || 0, B(n));
        return this.__set__ && this.__set__.push(r), r
    }, x.set = function (t) {
        !v.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
        var e = new cn(t);
        return this.__set__ && this.__set__.push(e), e
    }, x.setStart = function (t) {
        this.__set__ = t || this.set()
    }, x.setFinish = function () {
        var t = this.__set__;
        return delete this.__set__, t
    }, x.setSize = function (t, e) {
        return v._engine.setSize.call(this, t, e)
    }, x.setViewBox = function (t, e, n, r, i) {
        return v._engine.setViewBox.call(this, t, e, n, r, i)
    }, x.top = x.bottom = null, x.raphael = v;
    var Ke = function (t) {
        var e = t.getBoundingClientRect(), n = t.ownerDocument, r = n.body, i = n.documentElement, o = i.clientTop || r.clientTop || 0, a = i.clientLeft || r.clientLeft || 0, s = e.top + (_.win.pageYOffset || i.scrollTop || r.scrollTop) - o, l = e.left + (_.win.pageXOffset || i.scrollLeft || r.scrollLeft) - a;
        return {y: s, x: l}
    };
    x.getElementByPoint = function (t, e) {
        var n = this, r = n.canvas, i = _.doc.elementFromPoint(t, e);
        if (_.win.opera && "svg" == i.tagName) {
            var o = Ke(r), a = r.createSVGRect();
            a.x = t - o.x, a.y = e - o.y, a.width = a.height = 1;
            var s = r.getIntersectionList(a, null);
            s.length && (i = s[s.length - 1])
        }
        if (!i)return null;
        for (; i.parentNode && i != r.parentNode && !i.raphael;)i = i.parentNode;
        return i == n.canvas.parentNode && (i = r), i = i && i.raphael ? n.getById(i.raphaelid) : null
    }, x.getById = function (t) {
        for (var e = this.bottom; e;) {
            if (e.id == t)return e;
            e = e.next
        }
        return null
    }, x.forEach = function (t, e) {
        for (var n = this.bottom; n;) {
            if (t.call(e, n) === !1)return this;
            n = n.next
        }
        return this
    }, x.getElementsByPoint = function (t, e) {
        var n = this.set();
        return this.forEach(function (r) {
            r.isPointInside(t, e) && n.push(r)
        }), n
    }, Ge.isPointInside = function (t, e) {
        var n = this.realPath = this.realPath || pe[this.type](this);
        return v.isPointInsidePath(n, t, e)
    }, Ge.getBBox = function (t) {
        if (this.removed)return {};
        var e = this._;
        return t ? ((e.dirty || !e.bboxwt) && (this.realPath = pe[this.type](this), e.bboxwt = Ce(this.realPath), e.bboxwt.toString = i, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && ((e.dirty || !this.realPath) && (e.bboxwt = 0, this.realPath = pe[this.type](this)), e.bbox = Ce(ge(this.realPath, this.matrix)), e.bbox.toString = i, e.dirty = e.dirtyT = 0), e.bbox)
    }, Ge.clone = function () {
        if (this.removed)return null;
        var t = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(t), t
    }, Ge.glow = function (t) {
        if ("text" == this.type)return null;
        t = t || {};
        var e = {
            width: (t.width || 10) + (+this.attr("stroke-width") || 1),
            fill: t.fill || !1,
            opacity: t.opacity || .5,
            offsetx: t.offsetx || 0,
            offsety: t.offsety || 0,
            color: t.color || "#000"
        }, n = e.width / 2, r = this.paper, i = r.set(), o = this.realPath || pe[this.type](this);
        o = this.matrix ? ge(o, this.matrix) : o;
        for (var a = 1; n + 1 > a; a++)i.push(r.path(o).attr({
            stroke: e.color,
            fill: e.fill ? e.color : "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(e.width / n * a).toFixed(3),
            opacity: +(e.opacity / n).toFixed(3)
        }));
        return i.insertBefore(this).translate(e.offsetx, e.offsety)
    };
    var Ze = function (t, e, n, r, i, o, a, s, l) {
        return null == l ? c(t, e, n, r, i, o, a, s) : v.findDotsAtSegment(t, e, n, r, i, o, a, s, u(t, e, n, r, i, o, a, s, l))
    }, tn = function (t, e) {
        return function (n, r, i) {
            n = De(n);
            for (var o, a, s, l, u, c = "", f = {}, d = 0, h = 0, p = n.length; p > h; h++) {
                if (s = n[h], "M" == s[0])o = +s[1], a = +s[2]; else {
                    if (l = Ze(o, a, s[1], s[2], s[3], s[4], s[5], s[6]), d + l > r) {
                        if (e && !f.start) {
                            if (u = Ze(o, a, s[1], s[2], s[3], s[4], s[5], s[6], r - d), c += ["C" + u.start.x, u.start.y, u.m.x, u.m.y, u.x, u.y], i)return c;
                            f.start = c, c = ["M" + u.x, u.y + "C" + u.n.x, u.n.y, u.end.x, u.end.y, s[5], s[6]].join(), d += l, o = +s[5], a = +s[6];
                            continue
                        }
                        if (!t && !e)return u = Ze(o, a, s[1], s[2], s[3], s[4], s[5], s[6], r - d), {
                            x: u.x,
                            y: u.y,
                            alpha: u.alpha
                        }
                    }
                    d += l, o = +s[5], a = +s[6]
                }
                c += s.shift() + s
            }
            return f.end = c, u = t ? d : e ? f : v.findDotsAtSegment(o, a, s[0], s[1], s[2], s[3], s[4], s[5], 1), u.alpha && (u = {
                x: u.x,
                y: u.y,
                alpha: u.alpha
            }), u
        }
    }, en = tn(1), nn = tn(), rn = tn(0, 1);
    v.getTotalLength = en, v.getPointAtLength = nn, v.getSubpath = function (t, e, n) {
        if (this.getTotalLength(t) - n < 1e-6)return rn(t, e).end;
        var r = rn(t, n, 1);
        return e ? rn(r, e).end : r
    }, Ge.getTotalLength = function () {
        return "path" == this.type ? this.node.getTotalLength ? this.node.getTotalLength() : en(this.attrs.path) : void 0
    }, Ge.getPointAtLength = function (t) {
        return "path" == this.type ? nn(this.attrs.path, t) : void 0
    }, Ge.getSubpath = function (t, e) {
        return "path" == this.type ? v.getSubpath(this.attrs.path, t, e) : void 0
    };
    var on = v.easing_formulas = {
        linear: function (t) {
            return t
        }, "<": function (t) {
            return z(t, 1.7)
        }, ">": function (t) {
            return z(t, .48)
        }, "<>": function (t) {
            var e = .48 - t / 1.04, n = q.sqrt(.1734 + e * e), r = n - e, i = z(O(r), 1 / 3) * (0 > r ? -1 : 1), o = -n - e, a = z(O(o), 1 / 3) * (0 > o ? -1 : 1), s = i + a + .5;
            return 3 * (1 - s) * s * s + s * s * s
        }, backIn: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, backOut: function (t) {
            t -= 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t + e) + 1
        }, elastic: function (t) {
            return t == !!t ? t : z(2, -10 * t) * q.sin(2 * (t - .075) * I / .3) + 1
        }, bounce: function (t) {
            var e, n = 7.5625, r = 2.75;
            return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e
        }
    };
    on.easeIn = on["ease-in"] = on["<"], on.easeOut = on["ease-out"] = on[">"], on.easeInOut = on["ease-in-out"] = on["<>"], on["back-in"] = on.backIn, on["back-out"] = on.backOut;
    var an = [], sn = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            setTimeout(t, 16)
        }, ln = function () {
        for (var t = +new Date, n = 0; n < an.length; n++) {
            var r = an[n];
            if (!r.el.removed && !r.paused) {
                var i, o, a = t - r.start, s = r.ms, l = r.easing, u = r.from, c = r.diff, f = r.to, d = (r.t, r.el), h = {}, p = {};
                if (r.initstatus ? (a = (r.initstatus * r.anim.top - r.prev) / (r.percent - r.prev) * s, r.status = r.initstatus, delete r.initstatus, r.stop && an.splice(n--, 1)) : r.status = (r.prev + (r.percent - r.prev) * (a / s)) / r.anim.top, !(0 > a))if (s > a) {
                    var g = l(a / s);
                    for (var m in u)if (u[k](m)) {
                        switch (ee[m]) {
                            case $:
                                i = +u[m] + g * s * c[m];
                                break;
                            case"colour":
                                i = "rgb(" + [un(J(u[m].r + g * s * c[m].r)), un(J(u[m].g + g * s * c[m].g)), un(J(u[m].b + g * s * c[m].b))].join(",") + ")";
                                break;
                            case"path":
                                i = [];
                                for (var y = 0, x = u[m].length; x > y; y++) {
                                    i[y] = [u[m][y][0]];
                                    for (var b = 1, w = u[m][y].length; w > b; b++)i[y][b] = +u[m][y][b] + g * s * c[m][y][b];
                                    i[y] = i[y].join(L)
                                }
                                i = i.join(L);
                                break;
                            case"transform":
                                if (c[m].real)for (i = [], y = 0, x = u[m].length; x > y; y++)for (i[y] = [u[m][y][0]], b = 1, w = u[m][y].length; w > b; b++)i[y][b] = u[m][y][b] + g * s * c[m][y][b]; else {
                                    var S = function (t) {
                                        return +u[m][t] + g * s * c[m][t]
                                    };
                                    i = [["m", S(0), S(1), S(2), S(3), S(4), S(5)]]
                                }
                                break;
                            case"csv":
                                if ("clip-rect" == m)for (i = [], y = 4; y--;)i[y] = +u[m][y] + g * s * c[m][y];
                                break;
                            default:
                                var _ = [][N](u[m]);
                                for (i = [], y = d.paper.customAttributes[m].length; y--;)i[y] = +_[y] + g * s * c[m][y]
                        }
                        h[m] = i
                    }
                    d.attr(h), function (t, e, n) {
                        setTimeout(function () {
                            eve("raphael.anim.frame." + t, e, n)
                        })
                    }(d.id, d, r.anim)
                } else {
                    if (function (t, e, n) {
                            setTimeout(function () {
                                eve("raphael.anim.frame." + e.id, e, n), eve("raphael.anim.finish." + e.id, e, n), v.is(t, "function") && t.call(e)
                            })
                        }(r.callback, d, r.anim), d.attr(f), an.splice(n--, 1), r.repeat > 1 && !r.next) {
                        for (o in f)f[k](o) && (p[o] = r.totalOrigin[o]);
                        r.el.attr(p), e(r.anim, r.el, r.anim.percents[0], null, r.totalOrigin, r.repeat - 1)
                    }
                    r.next && !r.stop && e(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat)
                }
            }
        }
        v.svg && d && d.paper && d.paper.safari(), an.length && sn(ln)
    }, un = function (t) {
        return t > 255 ? 255 : 0 > t ? 0 : t
    };
    Ge.animateWith = function (t, r, i, o, a, s) {
        var l = this;
        if (l.removed)return s && s.call(l), l;
        var u = i instanceof n ? i : v.animation(i, o, a, s);
        e(u, l, u.percents[0], null, l.attr());
        for (var c = 0, f = an.length; f > c; c++)if (an[c].anim == r && an[c].el == t) {
            an[f - 1].start = an[c].start;
            break
        }
        return l
    }, Ge.onAnimation = function (t) {
        return t ? eve.on("raphael.anim.frame." + this.id, t) : eve.unbind("raphael.anim.frame." + this.id), this
    }, n.prototype.delay = function (t) {
        var e = new n(this.anim, this.ms);
        return e.times = this.times, e.del = +t || 0, e
    }, n.prototype.repeat = function (t) {
        var e = new n(this.anim, this.ms);
        return e.del = this.del, e.times = q.floor(R(t, 0)) || 1, e
    }, v.animation = function (t, e, r, i) {
        if (t instanceof n)return t;
        (v.is(r, "function") || !r) && (i = i || r || null, r = null), t = Object(t), e = +e || 0;
        var o, a, s = {};
        for (a in t)t[k](a) && Q(a) != a && Q(a) + "%" != a && (o = !0, s[a] = t[a]);
        return o ? (r && (s.easing = r), i && (s.callback = i), new n({100: s}, e)) : new n(t, e)
    }, Ge.animate = function (t, r, i, o) {
        var a = this;
        if (a.removed)return o && o.call(a), a;
        var s = t instanceof n ? t : v.animation(t, r, i, o);
        return e(s, a, s.percents[0], null, a.attr()), a
    }, Ge.setTime = function (t, e) {
        return t && null != e && this.status(t, H(e, t.ms) / t.ms), this
    }, Ge.status = function (t, n) {
        var r, i, o = [], a = 0;
        if (null != n)return e(t, this, -1, H(n, 1)), this;
        for (r = an.length; r > a; a++)if (i = an[a], i.el.id == this.id && (!t || i.anim == t)) {
            if (t)return i.status;
            o.push({anim: i.anim, status: i.status})
        }
        return t ? 0 : o
    }, Ge.pause = function (t) {
        for (var e = 0; e < an.length; e++)an[e].el.id == this.id && (!t || an[e].anim == t) && eve("raphael.anim.pause." + this.id, this, an[e].anim) !== !1 && (an[e].paused = !0);
        return this
    }, Ge.resume = function (t) {
        for (var e = 0; e < an.length; e++)if (an[e].el.id == this.id && (!t || an[e].anim == t)) {
            var n = an[e];
            eve("raphael.anim.resume." + this.id, this, n.anim) !== !1 && (delete n.paused, this.status(n.anim, n.status))
        }
        return this
    }, Ge.stop = function (t) {
        for (var e = 0; e < an.length; e++)an[e].el.id == this.id && (!t || an[e].anim == t) && eve("raphael.anim.stop." + this.id, this, an[e].anim) !== !1 && an.splice(e--, 1);
        return this
    }, eve.on("raphael.remove", t), eve.on("raphael.clear", t), Ge.toString = function () {
        return "RaphaÃ«lâ€™s object"
    };
    var cn = function (t) {
        if (this.items = [], this.length = 0, this.type = "set", t)for (var e = 0, n = t.length; n > e; e++)t[e] && (t[e].constructor == Ge.constructor || t[e].constructor == cn) && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
    }, fn = cn.prototype;
    fn.push = function () {
        for (var t, e, n = 0, r = arguments.length; r > n; n++)t = arguments[n], t && (t.constructor == Ge.constructor || t.constructor == cn) && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
        return this
    }, fn.pop = function () {
        return this.length && delete this[this.length--], this.items.pop()
    }, fn.forEach = function (t, e) {
        for (var n = 0, r = this.items.length; r > n; n++)if (t.call(e, this.items[n], n) === !1)return this;
        return this
    };
    for (var dn in Ge)Ge[k](dn) && (fn[dn] = function (t) {
        return function () {
            var e = arguments;
            return this.forEach(function (n) {
                n[t][E](n, e)
            })
        }
    }(dn));
    fn.attr = function (t, e) {
        if (t && v.is(t, X) && v.is(t[0], "object"))for (var n = 0, r = t.length; r > n; n++)this.items[n].attr(t[n]); else for (var i = 0, o = this.items.length; o > i; i++)this.items[i].attr(t, e);
        return this
    }, fn.clear = function () {
        for (; this.length;)this.pop()
    }, fn.splice = function (t, e) {
        t = 0 > t ? R(this.length + t, 0) : t, e = R(0, H(this.length - t, e));
        var n, r = [], i = [], o = [];
        for (n = 2; n < arguments.length; n++)o.push(arguments[n]);
        for (n = 0; e > n; n++)i.push(this[t + n]);
        for (; n < this.length - t; n++)r.push(this[t + n]);
        var a = o.length;
        for (n = 0; n < a + r.length; n++)this.items[t + n] = this[t + n] = a > n ? o[n] : r[n - a];
        for (n = this.items.length = this.length -= e - a; this[n];)delete this[n++];
        return new cn(i)
    }, fn.exclude = function (t) {
        for (var e = 0, n = this.length; n > e; e++)if (this[e] == t)return this.splice(e, 1), !0
    }, fn.animate = function (t, e, n, r) {
        (v.is(n, "function") || !n) && (r = n || null);
        var i, o, a = this.items.length, s = a, l = this;
        if (!a)return this;
        r && (o = function () {
            !--a && r.call(l)
        }), n = v.is(n, W) ? n : o;
        var u = v.animation(t, e, n, o);
        for (i = this.items[--s].animate(u); s--;)this.items[s] && !this.items[s].removed && this.items[s].animateWith(i, u, u);
        return this
    }, fn.insertAfter = function (t) {
        for (var e = this.items.length; e--;)this.items[e].insertAfter(t);
        return this
    }, fn.getBBox = function () {
        for (var t = [], e = [], n = [], r = [], i = this.items.length; i--;)if (!this.items[i].removed) {
            var o = this.items[i].getBBox();
            t.push(o.x), e.push(o.y), n.push(o.x + o.width), r.push(o.y + o.height)
        }
        return t = H[E](0, t), e = H[E](0, e), n = R[E](0, n), r = R[E](0, r), {
            x: t,
            y: e,
            x2: n,
            y2: r,
            width: n - t,
            height: r - e
        }
    }, fn.clone = function (t) {
        t = new cn;
        for (var e = 0, n = this.items.length; n > e; e++)t.push(this.items[e].clone());
        return t
    }, fn.toString = function () {
        return "RaphaÃ«lâ€˜s set"
    }, v.registerFont = function (t) {
        if (!t.face)return t;
        this.fonts = this.fonts || {};
        var e = {w: t.w, face: {}, glyphs: {}}, n = t.face["font-family"];
        for (var r in t.face)t.face[k](r) && (e.face[r] = t.face[r]);
        if (this.fonts[n] ? this.fonts[n].push(e) : this.fonts[n] = [e], !t.svg) {
            e.face["units-per-em"] = K(t.face["units-per-em"], 10);
            for (var i in t.glyphs)if (t.glyphs[k](i)) {
                var o = t.glyphs[i];
                if (e.glyphs[i] = {
                        w: o.w, k: {}, d: o.d && "M" + o.d.replace(/[mlcxtrv]/g, function (t) {
                            return {l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[t] || "M"
                        }) + "z"
                    }, o.k)for (var a in o.k)o[k](a) && (e.glyphs[i].k[a] = o.k[a])
            }
        }
        return t
    }, x.getFont = function (t, e, n, r) {
        if (r = r || "normal", n = n || "normal", e = +e || {
                    normal: 400,
                    bold: 700,
                    lighter: 300,
                    bolder: 800
                }[e] || 400, v.fonts) {
            var i = v.fonts[t];
            if (!i) {
                var o = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, j) + "(\\s|$)", "i");
                for (var a in v.fonts)if (v.fonts[k](a) && o.test(a)) {
                    i = v.fonts[a];
                    break
                }
            }
            var s;
            if (i)for (var l = 0, u = i.length; u > l && (s = i[l], s.face["font-weight"] != e || s.face["font-style"] != n && s.face["font-style"] || s.face["font-stretch"] != r); l++);
            return s
        }
    }, x.print = function (t, e, n, r, i, o, a) {
        o = o || "middle", a = R(H(a || 0, 1), -1);
        var s, l = B(n)[M](j), u = 0, c = 0, f = j;
        if (v.is(r, n) && (r = this.getFont(r)), r) {
            s = (i || 16) / r.face["units-per-em"];
            for (var d = r.face.bbox[M](b), h = +d[0], p = d[3] - d[1], g = 0, m = +d[1] + ("baseline" == o ? p + +r.face.descent : p / 2), y = 0, x = l.length; x > y; y++) {
                if ("\n" == l[y])u = 0, S = 0, c = 0, g += p; else {
                    var w = c && r.glyphs[l[y - 1]] || {}, S = r.glyphs[l[y]];
                    u += c ? (w.w || r.w) + (w.k && w.k[l[y]] || 0) + r.w * a : 0, c = 1
                }
                S && S.d && (f += v.transformPath(S.d, ["t", u * s, g * s, "s", s, s, h, m, "t", (t - h) / s, (e - m) / s]))
            }
        }
        return this.path(f).attr({fill: "#000", stroke: "none"})
    }, x.add = function (t) {
        if (v.is(t, "array"))for (var e, n = this.set(), r = 0, i = t.length; i > r; r++)e = t[r] || {}, w[k](e.type) && n.push(this[e.type]().attr(e));
        return n
    }, v.format = function (t, e) {
        var n = v.is(e, X) ? [0][N](e) : arguments;
        return t && v.is(t, W) && n.length - 1 && (t = t.replace(S, function (t, e) {
            return null == n[++e] ? j : n[e]
        })), t || j
    }, v.fullfill = function () {
        var t = /\{([^\}]+)\}/g, e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, n = function (t, n, r) {
            var i = r;
            return n.replace(e, function (t, e, n, r, o) {
                e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i()))
            }), i = (null == i || i == r ? t : i) + ""
        };
        return function (e, r) {
            return String(e).replace(t, function (t, e) {
                return n(t, e, r)
            })
        }
    }(), v.ninja = function () {
        return C.was ? _.win.Raphael = C.is : delete Raphael, v
    }, v.st = fn, function (t, e, n) {
        function r() {
            /in/.test(t.readyState) ? setTimeout(r, 9) : v.eve("raphael.DOMload")
        }

        null == t.readyState && t.addEventListener && (t.addEventListener(e, n = function () {
            t.removeEventListener(e, n, !1), t.readyState = "complete"
        }, !1), t.readyState = "loading"), r()
    }(document, "DOMContentLoaded"), C.was ? _.win.Raphael = v : Raphael = v, eve.on("raphael.DOMload", function () {
        y = !0
    })
}(), window.Raphael.svg && function (t) {
    var e = "hasOwnProperty", n = String, r = parseFloat, i = parseInt, o = Math, a = o.max, s = o.abs, l = o.pow, u = /[, ]+/, c = t.eve, f = "", d = " ", h = "http://www.w3.org/1999/xlink", p = {
        block: "M5,0 0,2.5 5,5z",
        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
        open: "M6,1 1,3.5 6,6",
        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
    }, g = {};
    t.toString = function () {
        return "Your browser supports SVG.\nYou are running RaphaÃ«l " + this.version
    };
    var m = function (r, i) {
        if (i) {
            "string" == typeof r && (r = m(r));
            for (var o in i)i[e](o) && ("xlink:" == o.substring(0, 6) ? r.setAttributeNS(h, o.substring(6), n(i[o])) : r.setAttribute(o, n(i[o])))
        } else r = t._g.doc.createElementNS("http://www.w3.org/2000/svg", r), r.style && (r.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
        return r
    }, v = function (e, i) {
        var u = "linear", c = e.id + i, d = .5, h = .5, p = e.node, g = e.paper, v = p.style, y = t._g.doc.getElementById(c);
        if (!y) {
            if (i = n(i).replace(t._radial_gradient, function (t, e, n) {
                    if (u = "radial", e && n) {
                        d = r(e), h = r(n);
                        var i = 2 * (h > .5) - 1;
                        l(d - .5, 2) + l(h - .5, 2) > .25 && (h = o.sqrt(.25 - l(d - .5, 2)) * i + .5) && .5 != h && (h = h.toFixed(5) - 1e-5 * i)
                    }
                    return f
                }), i = i.split(/\s*\-\s*/), "linear" == u) {
                var x = i.shift();
                if (x = -r(x), isNaN(x))return null;
                var b = [0, 0, o.cos(t.rad(x)), o.sin(t.rad(x))], w = 1 / (a(s(b[2]), s(b[3])) || 1);
                b[2] *= w, b[3] *= w, b[2] < 0 && (b[0] = -b[2], b[2] = 0), b[3] < 0 && (b[1] = -b[3], b[3] = 0)
            }
            var S = t._parseDots(i);
            if (!S)return null;
            if (c = c.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && c != e.gradient.id && (g.defs.removeChild(e.gradient), delete e.gradient), !e.gradient) {
                y = m(u + "Gradient", {id: c}), e.gradient = y, m(y, "radial" == u ? {fx: d, fy: h} : {
                    x1: b[0],
                    y1: b[1],
                    x2: b[2],
                    y2: b[3],
                    gradientTransform: e.matrix.invert()
                }), g.defs.appendChild(y);
                for (var k = 0, _ = S.length; _ > k; k++)y.appendChild(m("stop", {
                    offset: S[k].offset ? S[k].offset : k ? "100%" : "0%",
                    "stop-color": S[k].color || "#fff"
                }))
            }
        }
        return m(p, {
            fill: "url(#" + c + ")",
            opacity: 1,
            "fill-opacity": 1
        }), v.fill = f, v.opacity = 1, v.fillOpacity = 1, 1
    }, y = function (t) {
        var e = t.getBBox(1);
        m(t.pattern, {patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"})
    }, x = function (r, i, o) {
        if ("path" == r.type) {
            for (var a, s, l, u, c, d = n(i).toLowerCase().split("-"), h = r.paper, v = o ? "end" : "start", y = r.node, x = r.attrs, b = x["stroke-width"], w = d.length, S = "classic", k = 3, _ = 3, C = 5; w--;)switch (d[w]) {
                case"block":
                case"classic":
                case"oval":
                case"diamond":
                case"open":
                case"none":
                    S = d[w];
                    break;
                case"wide":
                    _ = 5;
                    break;
                case"narrow":
                    _ = 2;
                    break;
                case"long":
                    k = 5;
                    break;
                case"short":
                    k = 2
            }
            if ("open" == S ? (k += 2, _ += 2, C += 2, l = 1, u = o ? 4 : 1, c = {
                    fill: "none",
                    stroke: x.stroke
                }) : (u = l = k / 2, c = {
                    fill: x.stroke,
                    stroke: "none"
                }), r._.arrows ? o ? (r._.arrows.endPath && g[r._.arrows.endPath]--, r._.arrows.endMarker && g[r._.arrows.endMarker]--) : (r._.arrows.startPath && g[r._.arrows.startPath]--, r._.arrows.startMarker && g[r._.arrows.startMarker]--) : r._.arrows = {}, "none" != S) {
                var T = "raphael-marker-" + S, E = "raphael-marker-" + v + S + k + _;
                t._g.doc.getElementById(T) ? g[T]++ : (h.defs.appendChild(m(m("path"), {
                    "stroke-linecap": "round",
                    d: p[S],
                    id: T
                })), g[T] = 1);
                var N, A = t._g.doc.getElementById(E);
                A ? (g[E]++, N = A.getElementsByTagName("use")[0]) : (A = m(m("marker"), {
                    id: E,
                    markerHeight: _,
                    markerWidth: k,
                    orient: "auto",
                    refX: u,
                    refY: _ / 2
                }), N = m(m("use"), {
                    "xlink:href": "#" + T,
                    transform: (o ? "rotate(180 " + k / 2 + " " + _ / 2 + ") " : f) + "scale(" + k / C + "," + _ / C + ")",
                    "stroke-width": (1 / ((k / C + _ / C) / 2)).toFixed(4)
                }), A.appendChild(N), h.defs.appendChild(A), g[E] = 1), m(N, c);
                var j = l * ("diamond" != S && "oval" != S);
                o ? (a = r._.arrows.startdx * b || 0, s = t.getTotalLength(x.path) - j * b) : (a = j * b, s = t.getTotalLength(x.path) - (r._.arrows.enddx * b || 0)), c = {}, c["marker-" + v] = "url(#" + E + ")", (s || a) && (c.d = Raphael.getSubpath(x.path, a, s)), m(y, c), r._.arrows[v + "Path"] = T, r._.arrows[v + "Marker"] = E, r._.arrows[v + "dx"] = j, r._.arrows[v + "Type"] = S, r._.arrows[v + "String"] = i
            } else o ? (a = r._.arrows.startdx * b || 0, s = t.getTotalLength(x.path) - a) : (a = 0, s = t.getTotalLength(x.path) - (r._.arrows.enddx * b || 0)), r._.arrows[v + "Path"] && m(y, {d: Raphael.getSubpath(x.path, a, s)}), delete r._.arrows[v + "Path"], delete r._.arrows[v + "Marker"], delete r._.arrows[v + "dx"], delete r._.arrows[v + "Type"], delete r._.arrows[v + "String"];
            for (c in g)if (g[e](c) && !g[c]) {
                var L = t._g.doc.getElementById(c);
                L && L.parentNode.removeChild(L)
            }
        }
    }, b = {
        "": [0],
        none: [0],
        "-": [3, 1],
        ".": [1, 1],
        "-.": [3, 1, 1, 1],
        "-..": [3, 1, 1, 1, 1, 1],
        ". ": [1, 3],
        "- ": [4, 3],
        "--": [8, 3],
        "- .": [4, 3, 1, 3],
        "--.": [8, 3, 1, 3],
        "--..": [8, 3, 1, 3, 1, 3]
    }, w = function (t, e, r) {
        if (e = b[n(e).toLowerCase()]) {
            for (var i = t.attrs["stroke-width"] || "1", o = {
                    round: i,
                    square: i,
                    butt: 0
                }[t.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0, a = [], s = e.length; s--;)a[s] = e[s] * i + (s % 2 ? 1 : -1) * o;
            m(t.node, {"stroke-dasharray": a.join(",")})
        }
    }, S = function (r, o) {
        var l = r.node, c = r.attrs, d = l.style.visibility;
        l.style.visibility = "hidden";
        for (var p in o)if (o[e](p)) {
            if (!t._availableAttrs[e](p))continue;
            var g = o[p];
            switch (c[p] = g, p) {
                case"blur":
                    r.blur(g);
                    break;
                case"href":
                case"title":
                case"target":
                    var b = l.parentNode;
                    if ("a" != b.tagName.toLowerCase()) {
                        var S = m("a");
                        b.insertBefore(S, l), S.appendChild(l), b = S
                    }
                    "target" == p ? b.setAttributeNS(h, "show", "blank" == g ? "new" : g) : b.setAttributeNS(h, p, g);
                    break;
                case"cursor":
                    l.style.cursor = g;
                    break;
                case"transform":
                    r.transform(g);
                    break;
                case"arrow-start":
                    x(r, g);
                    break;
                case"arrow-end":
                    x(r, g, 1);
                    break;
                case"clip-rect":
                    var k = n(g).split(u);
                    if (4 == k.length) {
                        r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);
                        var C = m("clipPath"), T = m("rect");
                        C.id = t.createUUID(), m(T, {
                            x: k[0],
                            y: k[1],
                            width: k[2],
                            height: k[3]
                        }), C.appendChild(T), r.paper.defs.appendChild(C), m(l, {"clip-path": "url(#" + C.id + ")"}), r.clip = T
                    }
                    if (!g) {
                        var E = l.getAttribute("clip-path");
                        if (E) {
                            var N = t._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g, f));
                            N && N.parentNode.removeChild(N), m(l, {"clip-path": f}), delete r.clip
                        }
                    }
                    break;
                case"path":
                    "path" == r.type && (m(l, {d: g ? c.path = t._pathToAbsolute(g) : "M0,0"}), r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1)));
                    break;
                case"width":
                    if (l.setAttribute(p, g), r._.dirty = 1, !c.fx)break;
                    p = "x", g = c.x;
                case"x":
                    c.fx && (g = -c.x - (c.width || 0));
                case"rx":
                    if ("rx" == p && "rect" == r.type)break;
                case"cx":
                    l.setAttribute(p, g), r.pattern && y(r), r._.dirty = 1;
                    break;
                case"height":
                    if (l.setAttribute(p, g), r._.dirty = 1, !c.fy)break;
                    p = "y", g = c.y;
                case"y":
                    c.fy && (g = -c.y - (c.height || 0));
                case"ry":
                    if ("ry" == p && "rect" == r.type)break;
                case"cy":
                    l.setAttribute(p, g), r.pattern && y(r), r._.dirty = 1;
                    break;
                case"r":
                    "rect" == r.type ? m(l, {rx: g, ry: g}) : l.setAttribute(p, g), r._.dirty = 1;
                    break;
                case"src":
                    "image" == r.type && l.setAttributeNS(h, "href", g);
                    break;
                case"stroke-width":
                    (1 != r._.sx || 1 != r._.sy) && (g /= a(s(r._.sx), s(r._.sy)) || 1), r.paper._vbSize && (g *= r.paper._vbSize), l.setAttribute(p, g), c["stroke-dasharray"] && w(r, c["stroke-dasharray"], o), r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1));
                    break;
                case"stroke-dasharray":
                    w(r, g, o);
                    break;
                case"fill":
                    var A = n(g).match(t._ISURL);
                    if (A) {
                        C = m("pattern");
                        var j = m("image");
                        C.id = t.createUUID(), m(C, {
                            x: 0,
                            y: 0,
                            patternUnits: "userSpaceOnUse",
                            height: 1,
                            width: 1
                        }), m(j, {x: 0, y: 0, "xlink:href": A[1]}), C.appendChild(j), function (e) {
                            t._preload(A[1], function () {
                                var t = this.offsetWidth, n = this.offsetHeight;
                                m(e, {width: t, height: n}), m(j, {width: t, height: n}), r.paper.safari()
                            })
                        }(C), r.paper.defs.appendChild(C), m(l, {fill: "url(#" + C.id + ")"}), r.pattern = C, r.pattern && y(r);
                        break
                    }
                    var L = t.getRGB(g);
                    if (L.error) {
                        if (("circle" == r.type || "ellipse" == r.type || "r" != n(g).charAt()) && v(r, g)) {
                            if ("opacity" in c || "fill-opacity" in c) {
                                var B = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, f));
                                if (B) {
                                    var M = B.getElementsByTagName("stop");
                                    m(M[M.length - 1], {"stop-opacity": ("opacity" in c ? c.opacity : 1) * ("fill-opacity" in c ? c["fill-opacity"] : 1)})
                                }
                            }
                            c.gradient = g, c.fill = "none";
                            break
                        }
                    } else delete o.gradient, delete c.gradient, !t.is(c.opacity, "undefined") && t.is(o.opacity, "undefined") && m(l, {opacity: c.opacity}), !t.is(c["fill-opacity"], "undefined") && t.is(o["fill-opacity"], "undefined") && m(l, {"fill-opacity": c["fill-opacity"]});
                    L[e]("opacity") && m(l, {"fill-opacity": L.opacity > 1 ? L.opacity / 100 : L.opacity});
                case"stroke":
                    L = t.getRGB(g), l.setAttribute(p, L.hex), "stroke" == p && L[e]("opacity") && m(l, {"stroke-opacity": L.opacity > 1 ? L.opacity / 100 : L.opacity}), "stroke" == p && r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1));
                    break;
                case"gradient":
                    ("circle" == r.type || "ellipse" == r.type || "r" != n(g).charAt()) && v(r, g);
                    break;
                case"opacity":
                    c.gradient && !c[e]("stroke-opacity") && m(l, {"stroke-opacity": g > 1 ? g / 100 : g});
                case"fill-opacity":
                    if (c.gradient) {
                        B = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, f)), B && (M = B.getElementsByTagName("stop"), m(M[M.length - 1], {"stop-opacity": g}));
                        break
                    }
                default:
                    "font-size" == p && (g = i(g, 10) + "px");
                    var D = p.replace(/(\-.)/g, function (t) {
                        return t.substring(1).toUpperCase()
                    });
                    l.style[D] = g, r._.dirty = 1, l.setAttribute(p, g)
            }
        }
        _(r, o), l.style.visibility = d
    }, k = 1.2, _ = function (r, o) {
        if ("text" == r.type && (o[e]("text") || o[e]("font") || o[e]("font-size") || o[e]("x") || o[e]("y"))) {
            var a = r.attrs, s = r.node, l = s.firstChild ? i(t._g.doc.defaultView.getComputedStyle(s.firstChild, f).getPropertyValue("font-size"), 10) : 10;
            if (o[e]("text")) {
                for (a.text = o.text; s.firstChild;)s.removeChild(s.firstChild);
                for (var u, c = n(o.text).split("\n"), d = [], h = 0, p = c.length; p > h; h++)u = m("tspan"), h && m(u, {
                    dy: l * k,
                    x: a.x
                }), u.appendChild(t._g.doc.createTextNode(c[h])), s.appendChild(u), d[h] = u
            } else for (d = s.getElementsByTagName("tspan"), h = 0, p = d.length; p > h; h++)h ? m(d[h], {
                dy: l * k,
                x: a.x
            }) : m(d[0], {dy: 0});
            m(s, {x: a.x, y: a.y}), r._.dirty = 1;
            var g = r._getBBox(), v = a.y - (g.y + g.height / 2);
            v && t.is(v, "finite") && m(d[0], {dy: v})
        }
    }, C = function (e, n) {
        this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = n, this.attrs = this.attrs || {}, this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            deg: 0,
            dx: 0,
            dy: 0,
            dirty: 1
        }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null
    }, T = t.el;
    C.prototype = T, T.constructor = C, t._engine.path = function (t, e) {
        var n = m("path");
        e.canvas && e.canvas.appendChild(n);
        var r = new C(n, e);
        return r.type = "path", S(r, {fill: "none", stroke: "#000", path: t}), r
    }, T.rotate = function (t, e, i) {
        if (this.removed)return this;
        if (t = n(t).split(u), t.length - 1 && (e = r(t[1]), i = r(t[2])), t = r(t[0]), null == i && (e = i), null == e || null == i) {
            var o = this.getBBox(1);
            e = o.x + o.width / 2, i = o.y + o.height / 2
        }
        return this.transform(this._.transform.concat([["r", t, e, i]])), this
    }, T.scale = function (t, e, i, o) {
        if (this.removed)return this;
        if (t = n(t).split(u), t.length - 1 && (e = r(t[1]), i = r(t[2]), o = r(t[3])), t = r(t[0]), null == e && (e = t), null == o && (i = o), null == i || null == o)var a = this.getBBox(1);
        return i = null == i ? a.x + a.width / 2 : i, o = null == o ? a.y + a.height / 2 : o, this.transform(this._.transform.concat([["s", t, e, i, o]])), this
    }, T.translate = function (t, e) {
        return this.removed ? this : (t = n(t).split(u), t.length - 1 && (e = r(t[1])), t = r(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([["t", t, e]])), this)
    }, T.transform = function (n) {
        var r = this._;
        if (null == n)return r.transform;
        if (t._extractTransform(this, n), this.clip && m(this.clip, {transform: this.matrix.invert()}), this.pattern && y(this), this.node && m(this.node, {transform: this.matrix}), 1 != r.sx || 1 != r.sy) {
            var i = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({"stroke-width": i})
        }
        return this
    }, T.hide = function () {
        return !this.removed && this.paper.safari(this.node.style.display = "none"), this
    }, T.show = function () {
        return !this.removed && this.paper.safari(this.node.style.display = ""), this
    }, T.remove = function () {
        if (!this.removed && this.node.parentNode) {
            var e = this.paper;
            e.__set__ && e.__set__.exclude(this), c.unbind("raphael.*.*." + this.id), this.gradient && e.defs.removeChild(this.gradient), t._tear(this, e), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
            for (var n in this)this[n] = "function" == typeof this[n] ? t._removedFactory(n) : null;
            this.removed = !0
        }
    }, T._getBBox = function () {
        if ("none" == this.node.style.display) {
            this.show();
            var t = !0
        }
        var e = {};
        try {
            e = this.node.getBBox()
        } catch (n) {
        } finally {
            e = e || {}
        }
        return t && this.hide(), e
    }, T.attr = function (n, r) {
        if (this.removed)return this;
        if (null == n) {
            var i = {};
            for (var o in this.attrs)this.attrs[e](o) && (i[o] = this.attrs[o]);
            return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
        }
        if (null == r && t.is(n, "string")) {
            if ("fill" == n && "none" == this.attrs.fill && this.attrs.gradient)return this.attrs.gradient;
            if ("transform" == n)return this._.transform;
            for (var a = n.split(u), s = {}, l = 0, f = a.length; f > l; l++)n = a[l], s[n] = n in this.attrs ? this.attrs[n] : t.is(this.paper.customAttributes[n], "function") ? this.paper.customAttributes[n].def : t._availableAttrs[n];
            return f - 1 ? s : s[a[0]]
        }
        if (null == r && t.is(n, "array")) {
            for (s = {}, l = 0, f = n.length; f > l; l++)s[n[l]] = this.attr(n[l]);
            return s
        }
        if (null != r) {
            var d = {};
            d[n] = r
        } else null != n && t.is(n, "object") && (d = n);
        for (var h in d)c("raphael.attr." + h + "." + this.id, this, d[h]);
        for (h in this.paper.customAttributes)if (this.paper.customAttributes[e](h) && d[e](h) && t.is(this.paper.customAttributes[h], "function")) {
            var p = this.paper.customAttributes[h].apply(this, [].concat(d[h]));
            this.attrs[h] = d[h];
            for (var g in p)p[e](g) && (d[g] = p[g])
        }
        return S(this, d), this
    }, T.toFront = function () {
        if (this.removed)return this;
        "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
        var e = this.paper;
        return e.top != this && t._tofront(this, e), this
    }, T.toBack = function () {
        if (this.removed)return this;
        var e = this.node.parentNode;
        return "a" == e.tagName.toLowerCase() ? e.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : e.firstChild != this.node && e.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper), this.paper, this
    }, T.insertAfter = function (e) {
        if (this.removed)return this;
        var n = e.node || e[e.length - 1].node;
        return n.nextSibling ? n.parentNode.insertBefore(this.node, n.nextSibling) : n.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this
    }, T.insertBefore = function (e) {
        if (this.removed)return this;
        var n = e.node || e[0].node;
        return n.parentNode.insertBefore(this.node, n), t._insertbefore(this, e, this.paper), this
    }, T.blur = function (e) {
        var n = this;
        if (0 !== +e) {
            var r = m("filter"), i = m("feGaussianBlur");
            n.attrs.blur = e, r.id = t.createUUID(), m(i, {stdDeviation: +e || 1.5}), r.appendChild(i), n.paper.defs.appendChild(r), n._blur = r, m(n.node, {filter: "url(#" + r.id + ")"})
        } else n._blur && (n._blur.parentNode.removeChild(n._blur), delete n._blur, delete n.attrs.blur), n.node.removeAttribute("filter")
    }, t._engine.circle = function (t, e, n, r) {
        var i = m("circle");
        t.canvas && t.canvas.appendChild(i);
        var o = new C(i, t);
        return o.attrs = {cx: e, cy: n, r: r, fill: "none", stroke: "#000"}, o.type = "circle", m(i, o.attrs), o
    }, t._engine.rect = function (t, e, n, r, i, o) {
        var a = m("rect");
        t.canvas && t.canvas.appendChild(a);
        var s = new C(a, t);
        return s.attrs = {
            x: e,
            y: n,
            width: r,
            height: i,
            r: o || 0,
            rx: o || 0,
            ry: o || 0,
            fill: "none",
            stroke: "#000"
        }, s.type = "rect", m(a, s.attrs), s
    }, t._engine.ellipse = function (t, e, n, r, i) {
        var o = m("ellipse");
        t.canvas && t.canvas.appendChild(o);
        var a = new C(o, t);
        return a.attrs = {
            cx: e,
            cy: n,
            rx: r,
            ry: i,
            fill: "none",
            stroke: "#000"
        }, a.type = "ellipse", m(o, a.attrs), a
    }, t._engine.image = function (t, e, n, r, i, o) {
        var a = m("image");
        m(a, {
            x: n,
            y: r,
            width: i,
            height: o,
            preserveAspectRatio: "none"
        }), a.setAttributeNS(h, "href", e), t.canvas && t.canvas.appendChild(a);
        var s = new C(a, t);
        return s.attrs = {x: n, y: r, width: i, height: o, src: e}, s.type = "image", s
    }, t._engine.text = function (e, n, r, i) {
        var o = m("text");
        e.canvas && e.canvas.appendChild(o);
        var a = new C(o, e);
        return a.attrs = {
            x: n,
            y: r,
            "text-anchor": "middle",
            text: i,
            font: t._availableAttrs.font,
            stroke: "none",
            fill: "#000"
        }, a.type = "text", S(a, a.attrs), a
    }, t._engine.setSize = function (t, e) {
        return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
    }, t._engine.create = function () {
        var e = t._getContainer.apply(0, arguments), n = e && e.container, r = e.x, i = e.y, o = e.width, a = e.height;
        if (!n)throw new Error("SVG container not found.");
        var s, l = m("svg"), u = "overflow:hidden;";
        return r = r || 0, i = i || 0, o = o || 512, a = a || 342, m(l, {
            height: a,
            version: 1.1,
            width: o,
            xmlns: "http://www.w3.org/2000/svg"
        }), 1 == n ? (l.style.cssText = u + "position:absolute;left:" + r + "px;top:" + i + "px", t._g.doc.body.appendChild(l), s = 1) : (l.style.cssText = u + "position:relative", n.firstChild ? n.insertBefore(l, n.firstChild) : n.appendChild(l)), n = new t._Paper, n.width = o, n.height = a, n.canvas = l, n.clear(), n._left = n._top = 0, s && (n.renderfix = function () {
        }), n.renderfix(), n
    }, t._engine.setViewBox = function (t, e, n, r, i) {
        c("raphael.setViewBox", this, this._viewBox, [t, e, n, r, i]);
        var o, s, l = a(n / this.width, r / this.height), u = this.top, f = i ? "meet" : "xMinYMin";
        for (null == t ? (this._vbSize && (l = 1), delete this._vbSize, o = "0 0 " + this.width + d + this.height) : (this._vbSize = l, o = t + d + e + d + n + d + r), m(this.canvas, {
            viewBox: o,
            preserveAspectRatio: f
        }); l && u;)s = "stroke-width" in u.attrs ? u.attrs["stroke-width"] : 1, u.attr({"stroke-width": s}), u._.dirty = 1, u._.dirtyT = 1, u = u.prev;
        return this._viewBox = [t, e, n, r, !!i], this
    }, t.prototype.renderfix = function () {
        var t, e = this.canvas, n = e.style;
        try {
            t = e.getScreenCTM() || e.createSVGMatrix()
        } catch (r) {
            t = e.createSVGMatrix()
        }
        var i = -t.e % 1, o = -t.f % 1;
        (i || o) && (i && (this._left = (this._left + i) % 1, n.left = this._left + "px"), o && (this._top = (this._top + o) % 1, n.top = this._top + "px"))
    }, t.prototype.clear = function () {
        t.eve("raphael.clear", this);
        for (var e = this.canvas; e.firstChild;)e.removeChild(e.firstChild);
        this.bottom = this.top = null, (this.desc = m("desc")).appendChild(t._g.doc.createTextNode("Created with RaphaÃ«l " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = m("defs"))
    }, t.prototype.remove = function () {
        c("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var e in this)this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null
    };
    var E = t.st;
    for (var N in T)T[e](N) && !E[e](N) && (E[N] = function (t) {
        return function () {
            var e = arguments;
            return this.forEach(function (n) {
                n[t].apply(n, e)
            })
        }
    }(N))
}(window.Raphael), window.Raphael.vml && function (t) {
    var e = "hasOwnProperty", n = String, r = parseFloat, i = Math, o = i.round, a = i.max, s = i.min, l = i.abs, u = "fill", c = /[, ]+/, f = t.eve, d = " progid:DXImageTransform.Microsoft", h = " ", p = "", g = {
        M: "m",
        L: "l",
        C: "c",
        Z: "x",
        m: "t",
        l: "r",
        c: "v",
        z: "x"
    }, m = /([clmz]),?([^clmz]*)/gi, v = / progid:\S+Blur\([^\)]+\)/g, y = /-?[^,\s-]+/g, x = "position:absolute;left:0;top:0;width:1px;height:1px", b = 21600, w = {
        path: 1,
        rect: 1,
        image: 1
    }, S = {circle: 1, ellipse: 1}, k = function (e) {
        var r = /[ahqstv]/gi, i = t._pathToAbsolute;
        if (n(e).match(r) && (i = t._path2curve), r = /[clmz]/g, i == t._pathToAbsolute && !n(e).match(r)) {
            var a = n(e).replace(m, function (t, e, n) {
                var r = [], i = "m" == e.toLowerCase(), a = g[e];
                return n.replace(y, function (t) {
                    i && 2 == r.length && (a += r + g["m" == e ? "l" : "L"], r = []), r.push(o(t * b))
                }), a + r
            });
            return a
        }
        var s, l, u = i(e);
        a = [];
        for (var c = 0, f = u.length; f > c; c++) {
            s = u[c], l = u[c][0].toLowerCase(), "z" == l && (l = "x");
            for (var d = 1, v = s.length; v > d; d++)l += o(s[d] * b) + (d != v - 1 ? "," : p);
            a.push(l)
        }
        return a.join(h)
    }, _ = function (e, n, r) {
        var i = t.matrix();
        return i.rotate(-e, .5, .5), {dx: i.x(n, r), dy: i.y(n, r)}
    }, C = function (t, e, n, r, i, o) {
        var a = t._, s = t.matrix, c = a.fillpos, f = t.node, d = f.style, p = 1, g = "", m = b / e, v = b / n;
        if (d.visibility = "hidden", e && n) {
            if (f.coordsize = l(m) + h + l(v), d.rotation = o * (0 > e * n ? -1 : 1), o) {
                var y = _(o, r, i);
                r = y.dx, i = y.dy
            }
            if (0 > e && (g += "x"), 0 > n && (g += " y") && (p = -1), d.flip = g, f.coordorigin = r * -m + h + i * -v, c || a.fillsize) {
                var x = f.getElementsByTagName(u);
                x = x && x[0], f.removeChild(x), c && (y = _(o, s.x(c[0], c[1]), s.y(c[0], c[1])), x.position = y.dx * p + h + y.dy * p), a.fillsize && (x.size = a.fillsize[0] * l(e) + h + a.fillsize[1] * l(n)), f.appendChild(x)
            }
            d.visibility = "visible"
        }
    };
    t.toString = function () {
        return "Your browser doesnâ€™t support SVG. Falling down to VML.\nYou are running RaphaÃ«l " + this.version
    };
    var T = function (t, e, r) {
        for (var i = n(e).toLowerCase().split("-"), o = r ? "end" : "start", a = i.length, s = "classic", l = "medium", u = "medium"; a--;)switch (i[a]) {
            case"block":
            case"classic":
            case"oval":
            case"diamond":
            case"open":
            case"none":
                s = i[a];
                break;
            case"wide":
            case"narrow":
                u = i[a];
                break;
            case"long":
            case"short":
                l = i[a]
        }
        var c = t.node.getElementsByTagName("stroke")[0];
        c[o + "arrow"] = s, c[o + "arrowlength"] = l, c[o + "arrowwidth"] = u
    }, E = function (i, l) {
        i.attrs = i.attrs || {};
        var f = i.node, d = i.attrs, g = f.style, m = w[i.type] && (l.x != d.x || l.y != d.y || l.width != d.width || l.height != d.height || l.cx != d.cx || l.cy != d.cy || l.rx != d.rx || l.ry != d.ry || l.r != d.r), v = S[i.type] && (d.cx != l.cx || d.cy != l.cy || d.r != l.r || d.rx != l.rx || d.ry != l.ry), y = i;
        for (var x in l)l[e](x) && (d[x] = l[x]);
        if (m && (d.path = t._getPath[i.type](i), i._.dirty = 1), l.href && (f.href = l.href), l.title && (f.title = l.title), l.target && (f.target = l.target), l.cursor && (g.cursor = l.cursor), "blur" in l && i.blur(l.blur), (l.path && "path" == i.type || m) && (f.path = k(~n(d.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(d.path) : d.path), "image" == i.type && (i._.fillpos = [d.x, d.y], i._.fillsize = [d.width, d.height], C(i, 1, 1, 0, 0, 0))), "transform" in l && i.transform(l.transform), v) {
            var _ = +d.cx, E = +d.cy, A = +d.rx || +d.r || 0, j = +d.ry || +d.r || 0;
            f.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", o((_ - A) * b), o((E - j) * b), o((_ + A) * b), o((E + j) * b), o(_ * b))
        }
        if ("clip-rect" in l) {
            var B = n(l["clip-rect"]).split(c);
            if (4 == B.length) {
                B[2] = +B[2] + +B[0], B[3] = +B[3] + +B[1];
                var M = f.clipRect || t._g.doc.createElement("div"), D = M.style;
                D.clip = t.format("rect({1}px {2}px {3}px {0}px)", B), f.clipRect || (D.position = "absolute", D.top = 0, D.left = 0, D.width = i.paper.width + "px", D.height = i.paper.height + "px", f.parentNode.insertBefore(M, f), M.appendChild(f), f.clipRect = M)
            }
            l["clip-rect"] || f.clipRect && (f.clipRect.style.clip = "auto")
        }
        if (i.textpath) {
            var P = i.textpath.style;
            l.font && (P.font = l.font), l["font-family"] && (P.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, p) + '"'), l["font-size"] && (P.fontSize = l["font-size"]), l["font-weight"] && (P.fontWeight = l["font-weight"]), l["font-style"] && (P.fontStyle = l["font-style"])
        }
        if ("arrow-start" in l && T(y, l["arrow-start"]), "arrow-end" in l && T(y, l["arrow-end"], 1), null != l.opacity || null != l["stroke-width"] || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
            var F = f.getElementsByTagName(u), q = !1;
            if (F = F && F[0], !F && (q = F = L(u)), "image" == i.type && l.src && (F.src = l.src), l.fill && (F.on = !0), (null == F.on || "none" == l.fill || null === l.fill) && (F.on = !1), F.on && l.fill) {
                var R = n(l.fill).match(t._ISURL);
                if (R) {
                    F.parentNode == f && f.removeChild(F), F.rotate = !0, F.src = R[1], F.type = "tile";
                    var H = i.getBBox(1);
                    F.position = H.x + h + H.y, i._.fillpos = [H.x, H.y], t._preload(R[1], function () {
                        i._.fillsize = [this.offsetWidth, this.offsetHeight]
                    })
                } else F.color = t.getRGB(l.fill).hex, F.src = p, F.type = "solid", t.getRGB(l.fill).error && (y.type in {
                    circle: 1,
                    ellipse: 1
                } || "r" != n(l.fill).charAt()) && N(y, l.fill, F) && (d.fill = "none", d.gradient = l.fill, F.rotate = !1)
            }
            if ("fill-opacity" in l || "opacity" in l) {
                var O = ((+d["fill-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1);
                O = s(a(O, 0), 1), F.opacity = O, F.src && (F.color = "none")
            }
            f.appendChild(F);
            var z = f.getElementsByTagName("stroke") && f.getElementsByTagName("stroke")[0], I = !1;
            !z && (I = z = L("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (z.on = !0), ("none" == l.stroke || null === l.stroke || null == z.on || 0 == l.stroke || 0 == l["stroke-width"]) && (z.on = !1);
            var $ = t.getRGB(l.stroke);
            z.on && l.stroke && (z.color = $.hex), O = ((+d["stroke-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+$.o + 1 || 2) - 1);
            var W = .75 * (r(l["stroke-width"]) || 1);
            if (O = s(a(O, 0), 1), null == l["stroke-width"] && (W = d["stroke-width"]), l["stroke-width"] && (z.weight = W), W && 1 > W && (O *= W) && (z.weight = 1), z.opacity = O, l["stroke-linejoin"] && (z.joinstyle = l["stroke-linejoin"] || "miter"), z.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (z.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), l["stroke-dasharray"]) {
                var X = {
                    "-": "shortdash",
                    ".": "shortdot",
                    "-.": "shortdashdot",
                    "-..": "shortdashdotdot",
                    ". ": "dot",
                    "- ": "dash",
                    "--": "longdash",
                    "- .": "dashdot",
                    "--.": "longdashdot",
                    "--..": "longdashdotdot"
                };
                z.dashstyle = X[e](l["stroke-dasharray"]) ? X[l["stroke-dasharray"]] : p
            }
            I && f.appendChild(z)
        }
        if ("text" == y.type) {
            y.paper.canvas.style.display = p;
            var V = y.paper.span, U = 100, Y = d.font && d.font.match(/\d+(?:\.\d*)?(?=px)/);
            g = V.style, d.font && (g.font = d.font), d["font-family"] && (g.fontFamily = d["font-family"]), d["font-weight"] && (g.fontWeight = d["font-weight"]), d["font-style"] && (g.fontStyle = d["font-style"]), Y = r(d["font-size"] || Y && Y[0]) || 10, g.fontSize = Y * U + "px", y.textpath.string && (V.innerHTML = n(y.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            var G = V.getBoundingClientRect();
            y.W = d.w = (G.right - G.left) / U, y.H = d.h = (G.bottom - G.top) / U, y.X = d.x, y.Y = d.y + y.H / 2, ("x" in l || "y" in l) && (y.path.v = t.format("m{0},{1}l{2},{1}", o(d.x * b), o(d.y * b), o(d.x * b) + 1));
            for (var J = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Q = 0, K = J.length; K > Q; Q++)if (J[Q] in l) {
                y._.dirty = 1;
                break
            }
            switch (d["text-anchor"]) {
                case"start":
                    y.textpath.style["v-text-align"] = "left", y.bbx = y.W / 2;
                    break;
                case"end":
                    y.textpath.style["v-text-align"] = "right", y.bbx = -y.W / 2;
                    break;
                default:
                    y.textpath.style["v-text-align"] = "center", y.bbx = 0
            }
            y.textpath.style["v-text-kern"] = !0
        }
    }, N = function (e, o, a) {
        e.attrs = e.attrs || {};
        var s = (e.attrs, Math.pow), l = "linear", u = ".5 .5";
        if (e.attrs.gradient = o, o = n(o).replace(t._radial_gradient, function (t, e, n) {
                return l = "radial", e && n && (e = r(e), n = r(n), s(e - .5, 2) + s(n - .5, 2) > .25 && (n = i.sqrt(.25 - s(e - .5, 2)) * (2 * (n > .5) - 1) + .5), u = e + h + n), p
            }), o = o.split(/\s*\-\s*/), "linear" == l) {
            var c = o.shift();
            if (c = -r(c), isNaN(c))return null
        }
        var f = t._parseDots(o);
        if (!f)return null;
        if (e = e.shape || e.node, f.length) {
            e.removeChild(a), a.on = !0, a.method = "none", a.color = f[0].color, a.color2 = f[f.length - 1].color;
            for (var d = [], g = 0, m = f.length; m > g; g++)f[g].offset && d.push(f[g].offset + h + f[g].color);
            a.colors = d.length ? d.join() : "0% " + a.color, "radial" == l ? (a.type = "gradientTitle", a.focus = "100%", a.focussize = "0 0", a.focusposition = u, a.angle = 0) : (a.type = "gradient", a.angle = (270 - c) % 360), e.appendChild(a)
        }
        return 1
    }, A = function (e, n) {
        this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = n, this.matrix = t.matrix(), this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            dx: 0,
            dy: 0,
            deg: 0,
            dirty: 1,
            dirtyT: 1
        }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null
    }, j = t.el;
    A.prototype = j, j.constructor = A, j.transform = function (e) {
        if (null == e)return this._.transform;
        var r, i = this.paper._viewBoxShift, o = i ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy] : p;
        i && (r = e = n(e).replace(/\.{3}|\u2026/g, this._.transform || p)), t._extractTransform(this, o + e);
        var a, s = this.matrix.clone(), l = this.skew, u = this.node, c = ~n(this.attrs.fill).indexOf("-"), f = !n(this.attrs.fill).indexOf("url(");
        if (s.translate(-.5, -.5), f || c || "image" == this.type)if (l.matrix = "1 0 0 1", l.offset = "0 0", a = s.split(), c && a.noRotation || !a.isSimple) {
            u.style.filter = s.toFilter();
            var d = this.getBBox(), g = this.getBBox(1), m = d.x - g.x, v = d.y - g.y;
            u.coordorigin = m * -b + h + v * -b, C(this, 1, 1, m, v, 0)
        } else u.style.filter = p, C(this, a.scalex, a.scaley, a.dx, a.dy, a.rotate); else u.style.filter = p, l.matrix = n(s), l.offset = s.offset();
        return r && (this._.transform = r), this
    }, j.rotate = function (t, e, i) {
        if (this.removed)return this;
        if (null != t) {
            if (t = n(t).split(c), t.length - 1 && (e = r(t[1]), i = r(t[2])), t = r(t[0]), null == i && (e = i), null == e || null == i) {
                var o = this.getBBox(1);
                e = o.x + o.width / 2, i = o.y + o.height / 2
            }
            return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", t, e, i]])), this
        }
    }, j.translate = function (t, e) {
        return this.removed ? this : (t = n(t).split(c), t.length - 1 && (e = r(t[1])), t = r(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([["t", t, e]])), this)
    }, j.scale = function (t, e, i, o) {
        if (this.removed)return this;
        if (t = n(t).split(c), t.length - 1 && (e = r(t[1]), i = r(t[2]), o = r(t[3]), isNaN(i) && (i = null), isNaN(o) && (o = null)), t = r(t[0]), null == e && (e = t), null == o && (i = o), null == i || null == o)var a = this.getBBox(1);
        return i = null == i ? a.x + a.width / 2 : i, o = null == o ? a.y + a.height / 2 : o, this.transform(this._.transform.concat([["s", t, e, i, o]])), this._.dirtyT = 1, this
    }, j.hide = function () {
        return !this.removed && (this.node.style.display = "none"), this
    }, j.show = function () {
        return !this.removed && (this.node.style.display = p), this
    }, j._getBBox = function () {
        return this.removed ? {} : {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y - this.H,
            width: this.W,
            height: this.H
        }
    }, j.remove = function () {
        if (!this.removed && this.node.parentNode) {
            this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var e in this)this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
            this.removed = !0
        }
    }, j.attr = function (n, r) {
        if (this.removed)return this;
        if (null == n) {
            var i = {};
            for (var o in this.attrs)this.attrs[e](o) && (i[o] = this.attrs[o]);
            return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
        }
        if (null == r && t.is(n, "string")) {
            if (n == u && "none" == this.attrs.fill && this.attrs.gradient)return this.attrs.gradient;
            for (var a = n.split(c), s = {}, l = 0, d = a.length; d > l; l++)n = a[l], s[n] = n in this.attrs ? this.attrs[n] : t.is(this.paper.customAttributes[n], "function") ? this.paper.customAttributes[n].def : t._availableAttrs[n];
            return d - 1 ? s : s[a[0]]
        }
        if (this.attrs && null == r && t.is(n, "array")) {
            for (s = {}, l = 0, d = n.length; d > l; l++)s[n[l]] = this.attr(n[l]);
            return s
        }
        var h;
        null != r && (h = {}, h[n] = r), null == r && t.is(n, "object") && (h = n);
        for (var p in h)f("raphael.attr." + p + "." + this.id, this, h[p]);
        if (h) {
            for (p in this.paper.customAttributes)if (this.paper.customAttributes[e](p) && h[e](p) && t.is(this.paper.customAttributes[p], "function")) {
                var g = this.paper.customAttributes[p].apply(this, [].concat(h[p]));
                this.attrs[p] = h[p];
                for (var m in g)g[e](m) && (h[m] = g[m])
            }
            h.text && "text" == this.type && (this.textpath.string = h.text), E(this, h)
        }
        return this
    }, j.toFront = function () {
        return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this
    }, j.toBack = function () {
        return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this)
    }, j.insertAfter = function (e) {
        return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this)
    }, j.insertBefore = function (e) {
        return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper), this)
    }, j.blur = function (e) {
        var n = this.node.runtimeStyle, r = n.filter;
        r = r.replace(v, p), 0 !== +e ? (this.attrs.blur = e, n.filter = r + h + d + ".Blur(pixelradius=" + (+e || 1.5) + ")", n.margin = t.format("-{0}px 0 0 -{0}px", o(+e || 1.5))) : (n.filter = r, n.margin = 0, delete this.attrs.blur)
    }, t._engine.path = function (t, e) {
        var n = L("shape");
        n.style.cssText = x, n.coordsize = b + h + b, n.coordorigin = e.coordorigin;
        var r = new A(n, e), i = {fill: "none", stroke: "#000"};
        t && (i.path = t), r.type = "path", r.path = [], r.Path = p, E(r, i), e.canvas.appendChild(n);
        var o = L("skew");
        return o.on = !0, n.appendChild(o), r.skew = o, r.transform(p), r
    }, t._engine.rect = function (e, n, r, i, o, a) {
        var s = t._rectPath(n, r, i, o, a), l = e.path(s), u = l.attrs;
        return l.X = u.x = n, l.Y = u.y = r, l.W = u.width = i, l.H = u.height = o, u.r = a, u.path = s, l.type = "rect", l
    }, t._engine.ellipse = function (t, e, n, r, i) {
        var o = t.path();
        return o.attrs, o.X = e - r, o.Y = n - i, o.W = 2 * r, o.H = 2 * i, o.type = "ellipse", E(o, {
            cx: e,
            cy: n,
            rx: r,
            ry: i
        }), o
    }, t._engine.circle = function (t, e, n, r) {
        var i = t.path();
        return i.attrs, i.X = e - r, i.Y = n - r, i.W = i.H = 2 * r, i.type = "circle", E(i, {cx: e, cy: n, r: r}), i
    }, t._engine.image = function (e, n, r, i, o, a) {
        var s = t._rectPath(r, i, o, a), l = e.path(s).attr({stroke: "none"}), c = l.attrs, f = l.node, d = f.getElementsByTagName(u)[0];
        return c.src = n, l.X = c.x = r, l.Y = c.y = i, l.W = c.width = o, l.H = c.height = a, c.path = s, l.type = "image", d.parentNode == f && f.removeChild(d), d.rotate = !0, d.src = n, d.type = "tile", l._.fillpos = [r, i], l._.fillsize = [o, a], f.appendChild(d), C(l, 1, 1, 0, 0, 0), l
    }, t._engine.text = function (e, r, i, a) {
        var s = L("shape"), l = L("path"), u = L("textpath");
        r = r || 0, i = i || 0, a = a || "", l.v = t.format("m{0},{1}l{2},{1}", o(r * b), o(i * b), o(r * b) + 1), l.textpathok = !0, u.string = n(a), u.on = !0, s.style.cssText = x, s.coordsize = b + h + b, s.coordorigin = "0 0";
        var c = new A(s, e), f = {fill: "#000", stroke: "none", font: t._availableAttrs.font, text: a};
        c.shape = s, c.path = l, c.textpath = u, c.type = "text", c.attrs.text = n(a), c.attrs.x = r, c.attrs.y = i, c.attrs.w = 1, c.attrs.h = 1, E(c, f), s.appendChild(u), s.appendChild(l), e.canvas.appendChild(s);
        var d = L("skew");
        return d.on = !0, s.appendChild(d), c.skew = d, c.transform(p), c
    }, t._engine.setSize = function (e, n) {
        var r = this.canvas.style;
        return this.width = e, this.height = n, e == +e && (e += "px"), n == +n && (n += "px"), r.width = e, r.height = n, r.clip = "rect(0 " + e + " " + n + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this
    }, t._engine.setViewBox = function (e, n, r, i, o) {
        t.eve("raphael.setViewBox", this, this._viewBox, [e, n, r, i, o]);
        var s, l, u = this.width, c = this.height, f = 1 / a(r / u, i / c);
        return o && (s = c / i, l = u / r, u > r * s && (e -= (u - r * s) / 2 / s), c > i * l && (n -= (c - i * l) / 2 / l)), this._viewBox = [e, n, r, i, !!o], this._viewBoxShift = {
            dx: -e,
            dy: -n,
            scale: f
        }, this.forEach(function (t) {
            t.transform("...")
        }), this
    };
    var L;
    t._engine.initWin = function (t) {
        var e = t.document;
        e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), L = function (t) {
                return e.createElement("<rvml:" + t + ' class="rvml">')
            }
        } catch (n) {
            L = function (t) {
                return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
    }, t._engine.initWin(t._g.win), t._engine.create = function () {
        var e = t._getContainer.apply(0, arguments), n = e.container, r = e.height, i = e.width, o = e.x, a = e.y;
        if (!n)throw new Error("VML container not found.");
        var s = new t._Paper, l = s.canvas = t._g.doc.createElement("div"), u = l.style;
        return o = o || 0, a = a || 0, i = i || 512, r = r || 342, s.width = i, s.height = r, i == +i && (i += "px"), r == +r && (r += "px"), s.coordsize = 1e3 * b + h + 1e3 * b, s.coordorigin = "0 0", s.span = t._g.doc.createElement("span"), s.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(s.span), u.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", i, r), 1 == n ? (t._g.doc.body.appendChild(l), u.left = o + "px", u.top = a + "px", u.position = "absolute") : n.firstChild ? n.insertBefore(l, n.firstChild) : n.appendChild(l), s.renderfix = function () {
        }, s
    }, t.prototype.clear = function () {
        t.eve("raphael.clear", this), this.canvas.innerHTML = p, this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
    }, t.prototype.remove = function () {
        t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
        for (var e in this)this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
        return !0
    };
    var B = t.st;
    for (var M in j)j[e](M) && !B[e](M) && (B[M] = function (t) {
        return function () {
            var e = arguments;
            return this.forEach(function (n) {
                n[t].apply(n, e)
            })
        }
    }(M))
}(window.Raphael), $(function () {
    function t(t, e) {
        var n = t.width / 2, i = t.height / 2;
        if (e instanceof Array)for (var o = 0; o < e.length; o++)e[o].transform("s" + r + "," + r + "," + n + "," + i); else e.transform("s" + r + "," + r + "," + n + "," + i);
        t.setViewBox(100, 120, t.width, t.height, !1)
    }

    if ($("html").hasClass("svg")) {
        var e = Raphael, n = "#FAA842", r = .4, i = 60, o = 150, a = {fill: n, "stroke-width": 0};
        !function () {
            $("#logo img").hide();
            var n = e("logo", o, i), r = "M355.532,353.14h-38.698c6.914-23.881,46.318-28.83,46.318-60.42c0-14.851-8.88-30.976-31.484-30.976c-11.67,0-21.314,3.271-28.8,9.406c-2.159,1.71-2.88,3.689-2.88,5.835c0,4.514,3.75,7.86,7.919,7.86c3.316,0,5.04-2.476,9.646-4.95c3.465-1.891,7.635-3.345,13.531-3.345c11.385,0,15.988,7.86,15.988,16.17c0,15.569-18.436,23.145-32.398,35.67c-8.776,7.859-15.69,17.459-15.69,32.145c0,4.395,3.015,7.41,7.77,7.41h48.779c4.229,0,7.62-3.285,7.62-7.41C363.152,356.425,359.762,353.14,355.532,353.14", s = "M454.532,353.14h-38.698c6.914-23.881,46.318-28.83,46.318-60.42c0-14.851-8.88-30.976-31.484-30.976c-11.67,0-21.314,3.271-28.8,9.406c-2.159,1.71-2.88,3.689-2.88,5.835c0,4.514,3.75,7.86,7.919,7.86c3.316,0,5.04-2.476,9.646-4.95c3.465-1.891,7.635-3.345,13.531-3.345c11.385,0,15.988,7.86,15.988,16.17c0,15.569-18.436,23.145-32.398,35.67c-8.776,7.859-15.69,17.459-15.69,32.145c0,4.395,3.015,7.41,7.77,7.41h48.779c4.229,0,7.62-3.285,7.62-7.41C462.152,356.425,458.762,353.14,454.532,353.14", l = "M298.053,328.39c-13.965-12.525-32.399-20.101-32.399-35.67c0-8.31,4.604-16.17,15.99-16.17c5.894,0,10.064,1.454,13.53,3.345c4.605,2.474,6.329,4.95,9.645,4.95c4.169,0,7.919-3.346,7.919-7.86c0-2.146-0.72-4.125-2.879-5.835c-7.487-6.135-17.132-9.406-28.801-9.406c-22.606,0-31.485,16.125-31.485,30.976c0,31.59,39.404,36.539,46.32,60.42h-38.7c-4.231,0-7.62,3.285-7.62,7.395c0,4.125,3.389,7.41,7.62,7.41h48.779c4.755,0,7.77-3.015,7.77-7.41C313.742,345.849,306.828,336.249,298.053,328.39", u = "M199.053,328.39c-13.965-12.525-32.399-20.101-32.399-35.67c0-8.31,4.604-16.17,15.99-16.17c5.894,0,10.064,1.454,13.53,3.345c4.605,2.474,6.329,4.95,9.645,4.95c4.17,0,7.92-3.346,7.92-7.86c0-2.146-0.72-4.125-2.88-5.835c-7.486-6.135-17.131-9.406-28.8-9.406c-22.606,0-31.485,16.125-31.485,30.976c0,31.59,39.404,36.539,46.32,60.42h-38.7c-4.231,0-7.62,3.285-7.62,7.395c0,4.125,3.389,7.41,7.62,7.41h48.779c4.755,0,7.77-3.015,7.77-7.41C214.743,345.849,207.828,336.249,199.053,328.39", c = "M329.124,261.744h-45.181c-4.23,0-7.62,3.435-7.62,7.545v38.056h-1.71c-4.141,0-7.5,3.357-7.5,7.5c0,4.141,3.359,7.5,7.5,7.5h1.71v37.694c0,4.5,3.66,8.025,8.04,8.025c4.516,0,8.04-3.525,8.04-8.025v-37.035h15.525c4.172,0,7.635-3.361,7.635-7.409c0-4.006-3.388-7.329-7.496-7.404c-1.033-0.538-2.208-0.846-3.454-0.846h-12.21v-30.631h36.721c4.319,0,7.919-3.315,7.919-7.425S333.443,261.744,329.124,261.744", f = "M285.124,261.744h-45.181c-4.23,0-7.62,3.435-7.62,7.545v38.056h-1.71c-4.141,0-7.5,3.357-7.5,7.5c0,4.141,3.359,7.5,7.5,7.5h1.71v37.694c0,4.5,3.66,8.025,8.04,8.025c4.516,0,8.04-3.525,8.04-8.025v-37.035h15.525c4.171,0,7.635-3.361,7.635-7.409c0-4.006-3.388-7.329-7.497-7.404c-1.033-0.538-2.207-0.846-3.453-0.846h-12.21v-30.631h36.721c4.319,0,7.919-3.315,7.919-7.425S289.443,261.744,285.124,261.744", d = "M337.402,307.463v-38.174c0-4.11-3.39-7.545-7.62-7.545h-45.18c-4.319,0-7.919,3.435-7.919,7.545c0,4.111,3.6,7.425,7.919,7.425h36.72v30.631h-15.209c-3.078,0-5.719,1.855-6.875,4.506c-0.678,1.104-1.076,2.383-1.076,3.744c0,4.049,3.466,7.409,7.636,7.409h15.524v37.035c0,4.5,3.526,8.026,8.041,8.026c4.38,0,8.039-3.526,8.039-8.026v-37.812c3.527-0.613,6.211-3.681,6.211-7.382C343.613,311.143,340.93,308.075,337.402,307.463", h = "M377.402,307.463v-38.174c0-4.11-3.39-7.545-7.62-7.545h-45.18c-4.319,0-7.919,3.435-7.919,7.545c0,4.111,3.6,7.425,7.919,7.425h36.72v30.631h-15.209c-3.078,0-5.719,1.855-6.875,4.506c-0.678,1.104-1.076,2.383-1.076,3.744c0,4.049,3.466,7.409,7.636,7.409h15.524v37.035c0,4.5,3.526,8.026,8.041,8.026c4.38,0,8.039-3.526,8.039-8.026v-37.812c3.527-0.613,6.211-3.681,6.211-7.382C383.613,311.143,380.93,308.075,377.402,307.463", p = n.path(s).attr(a), g = n.path(u).attr(a), m = n.path(f).attr(a), v = n.path(h).attr(a), y = [p, g, m, v];
            t(n, y), $("#logo").parent().on("mouseenter", function () {
                p.animate({path: r}, 500, "<>"), g.animate({path: l}, 500, "<>"), m.animate({
                    path: c,
                    opacity: 0
                }, 500, "<>"), v.animate({path: d, opacity: 0}, 500, "<>")
            }).on("mouseleave", function () {
                p.animate({path: s}, 500, "<>"), g.animate({path: u}, 500, "<>"), m.animate({
                    path: f,
                    opacity: 1
                }, 500, "<>"), v.animate({path: h, opacity: 1}, 500, "<>")
            })
        }()
    }
}), function () {
    var t;
    t = function () {
        function t() {
        }

        return t.prototype.setAsActiveBtn = function (t) {
            return $(t).parent("li").addClass("active")
        }, t.prototype.isMobile = function () {
            return $(window).width() < 480 && $(window).height() < 480
        }, t.prototype.redirectTo = function (t) {
            return window.location = t
        }, t.prototype.isOldInternetExplorer = function () {
            return $.browser.msie && $.browser.version < 9
        }, t
    }(), this.Sf72 = function () {
        function e() {
        }

        return e.Utils = new t, e
    }()
}.call(this), function () {
    window.showActive = function (t) {
        var e, n, r;
        return r = window.location.hash || t[0].href, e = _(t).find(function (t) {
            return t.href === r
        }), e ? (n = _(t).filter(function (t) {
            return t.href !== r
        }), $(e.contentSelector).show(), $(e.anchorSelector).parent("li").addClass("active"), _(n).each(function (t) {
            return $(t.contentSelector).hide(), $(t.anchorSelector).parent("li").removeClass("active")
        })) : void 0
    }
}.call(this), function () {
    window.twitterShare = function (t) {
        return t ? window.open("http://twitter.com/share?text=" + t + ":", "", "width=600,height=300") : window.open("http://twitter.com/share?text=Let’s%20get%20connected.+Let’s%20get%20prepared.%20SF72.org:", "", "width=600,height=300")
    }, window.facebookShare = function () {
        return window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(location.href), "facebook-share-dialog", "width=626,height=436")
    }
}.call(this), function () {
    window.createCORSRequest = function (t, e) {
        var n;
        return n = new XMLHttpRequest, "withCredentials" in n ? n.open(t, e, !0) : "undefined" != typeof XDomainRequest ? (n = new XDomainRequest, n.open(t, e)) : n = null, n
    }, window.makeCorsRequest = function (t, e, n, r) {
        var i, o;
        return null == n && (n = {}), null == r && (r = "POST"), (o = createCORSRequest(r, t)) ? (o.onload = function () {
            return e(o)
        }, o.onerror = function () {
            return alert("Woops, there was an error making the request.")
        }, o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i = "", _(_(n).keys()).each(function (t, e) {
            return i += e === _(n).keys().length - 1 ? "" + t + "=" + n[t] : "" + t + "=" + n[t] + "&"
        }), o.send(i)) : (alert("CORS not supported"), void 0)
    }
}.call(this), function () {
    var t;
    t = function () {
        function t() {
        }

        var e, n, r, i;
        return e = !1, t.prototype.init = function () {
            return e ? void 0 : (i(), r(), n(), e = !0)
        }, i = function () {
            return window.Sf72.Utils.isOldInternetExplorer() ? void 0 : $("body").mobile_menu({
                menu: ".mobile-menu",
                menu_width: 270,
                prepend_button_to: ".header"
            })
        }, n = function () {
            var t, e, n;
            return n = window.location.pathname, t = window.location.hash, e = _($(".header a")).pluck("pathname"), window.Sf72.Utils.isMobile() && "/em/home" === n && 0 === t.length && (window.Sf72.Utils.redirectTo("/em/home#mobile-quick-guide"), window.Sf72.Utils.setAsActiveBtn($('[href="/em/home#mobile-quick-guide"]'))), "/home" === n || "/" === n ? ($('[href="/home"]').addClass("active"), window.Sf72.Utils.setAsActiveBtn($('[href="/home"]'))) : _(e).each(function (e) {
                return e === n && (window.Sf72.Utils.setAsActiveBtn($('[href="' + e + '"]')), window.Sf72.Utils.setAsActiveBtn($('[href="' + e + t + '"]')), $('[href="' + e + '"]').closest(".submenu")) ? $('[href="' + e + '"]').closest("ul.submenu") : void 0
            })
        }, r = function () {
            var t;
            return t = $("li.em-li"), t.children("a").click(function () {
                return $("#build-menu-overlay").trigger("click"), t.each(function (t, e) {
                    return $(e).removeClass("active")
                }), window.Sf72.Utils.setAsActiveBtn($(this))
            })
        }, t
    }(), this.Sf72.Header = new t(this.Sf72)
}.call(this), function () {
    var t;
    t = function () {
        function t() {
        }

        var e, n;
        return n = function () {
            return window.devicePixelRatio && window.devicePixelRatio > 1
        }, e = function () {
            var t;
            return n() ? (t = $("img.retina-img"), $.each(t, function (t, e) {
                var n;
                return n = $(e).attr("data-retina-url"), $(e).attr("src", n)
            }), !0) : void 0
        }, t.prototype.check = function () {
            return e()
        }, t
    }(), this.Sf72.RetinaResponsive = new t
}.call(this), function () {
    var t;
    t = this.Sf72, jQuery(function () {
        return Sf72.Header.init(), Sf72.RetinaResponsive.check()
    })
}.call(this);