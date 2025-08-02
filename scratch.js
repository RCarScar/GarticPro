const DONE_BUTTON_CLASS = "jsx-1e5748a2310b0bd";
var GAMEDATA = { t: { i: 1, o: 8, h: 3, l: 11, u: 9, m: 15, v: 10, M: 5, A: 7, T: 14, O: 13 }, S: { p: 28, N: 26, C: 27, _: 18, R: 5, D: 6, k: 7, L: 15, I: 23, G: 20, j: 2, $: 3, P: 14, B: 21, U: 22, J: 11, W: 24, F: 25, Y: 12, H: 9, K: 16, V: 17, X: 35, q: 34 } }, _GAMEDATA = {};
if (Object.keys(GAMEDATA).forEach((t => { _GAMEDATA[t] = {}, Object.keys(GAMEDATA[t]).forEach((e => { _GAMEDATA[t][GAMEDATA[t][e]] = e })) })), window._mod_injected || (window.mod = new function (({

    this.Z = 0, this.tt = null, this.et = !0, this.it = null, this.nt = !1, this.ot = {}, this.st = {}, this.rt = 1, this.ht = 200, this.lt = .5, this.ct = !1, this.dt = {}, this.wt = {}, this.ft = !1, this.ut = {}, this.gt = 1;
    let t = [];
    for (let e = 0;
        e < 256;
        e++({

        let i = e.toString(16);
        i.length < 2 && (i = "0" + i), t.push(i)
    } this.bt = () => { this.ot = {} }, this.vt = (t = "default") => {
        let e = document.createElement("button");
        return e.classList = DONE_BUTTON_CLASS + " small fakereadybutton", e.disabled = !1, e.innerHTML = '<i class="jsx-3322258600 pencil fakebtn"></i><strong class="sendingbtnContent">STOP</strong>', e
    }, this.Mt = (e, i, n) => `#${t[e]}${t[i]}${t[n]}`, this.At = t => fetch(t).then((t => t.text())), this.Et = t => fetch(t).then((t => t.arrayBuffer())), this.Tt = () => Boolean(document.getElementsByClassName("note").length), this.Ot = t => new Promise((e => {
        let i = document.createElement("img");
        i.onload = function (({
 e(i) }, i.src = t
    })), this.xt = async t => { t && -1 != window.location.href.indexOf("draw") && (this.St(), setTimeout((() => { this.Ot(t).then(this.yt).then((() => { })) }), 500)) }, this.St = t => {
        let e = document.querySelector("button.small");
        if (e.style.display = "none", !document.querySelector(".fakebtn")({

            let t = this.vt();
            t.onclick = this.Nt.bind(this), e.parentElement.appendChild(t)
        } return t
    }, this.Ct = t => {
        document.querySelector("button.small").style.display = "";
        let e = document.querySelector(".fakereadybutton");
        return e && e.remove(), t
    }, this._t = t => {
        if (!t) return !1;
        let e = t.match(/function\s\w{1,}\(\w{0,}\({
[^\{]+{[^\}]{0,}return\[\]\.concat\(Object\(\w{0,}\.*\w{0,}\)\(\w{0,}\),\[\w{0,}\]\)[^\}]{0,}}[^\}]{0,}}/g);
        if (!e) return !1;
        let i = e[0].match(/\w{1,}(?=\.setData)/g)[0];
        return t.replace(/\(\(function\(\({
if\(!\w{1,}\.disabled\)/, `((function(({
;
window.setData = ${i}.setData;
if(!${i}.disabled)`)
    }, this.Rt = t => { this.it = t.target }, this.Dt = t => { if (0 == t.indexOf("42")) try { this.kt(JSON.parse(t.substr(2, t.length - 2))) } catch (t({
 Log(t) } }, this.kt = t => {
        if (7 == t[1]({

            let e = "v".toLowerCase(), i = "d".toLowerCase();
            1 == t[2][i] || 3 == t[2][i] ? this.ot[t[2][e][1]] = t[2][e] : 2 == t[2][i] && delete this.ot[t[2][e]], t[2]?.[e]?.[1] && (this.gt = t[2][e][1])
        }
    }, this.Lt = async (t, e) => {
        if (this.nt) return;
        let i = [], n = [];
        (t => {
            Object.keys(t).forEach((e => {
                let o = t[e], s = [o[0], +e, o[2]];
                for (let t = 3;
                    t < o.length;
                    t++)s.push(o[t]);
                let r = [o[0], +e, o[2], o[3]];
                n.push(`42[2,7,{"t":${this.tt || 0},"d":1,"v":${JSON.stringify(r)}}]`), n.push(`42[2,7,{"t":${this.tt || 0},"d":3,"v":${JSON.stringify(s)}}]`), i.push(s)
            }))
        })(t), this.It() ? window.setData(i) : e && this.Gt(e), this.nt = !0, this.St(), this.jt(n).then((() => this.Ct()))
    }, this.It = () => "function" == typeof window.setData, this.$t = async t => { }, this.Pt = t => {
        let e = t[1], i = t[2];
        if (e == GAMEDATA.S.R && (this.bt(), this.st = {}, this.ut = {}, this.ft = !1), e == GAMEDATA.S.Y && (this.dt = {}), e == GAMEDATA.S.H({

            let t, e;
            if (Log(i), Object.keys(i).forEach((n => { "user" == n && Object.keys(i[n]).forEach((t => { "nick" == t && (e = i[n][t]) })), "data" == n && (t = i[n]) })), e && t instanceof Array({

                this.dt[e] = {};
                for (let i in t) this.dt[e][i] = t[i];
                document.querySelectorAll(".drawBalloon").forEach((t => {
                    if (t.querySelector(".nick").innerHTML == e({

                        let i = `<div onclick="globalThis.saveAlbumDrawing('${e}')" class="saveimg-${e}" \n                        style="background-color: #301a6b;position: absolute;left: 30rem;top: -0rem;width: 2.5rem;height: 2.5rem;border-radius: 30%;border: 4px solid rgb(95, 110, 231);cursor: pointer;"><img src="${this.wt["saveimg".toLowerCase()]}" style="\n                        width: 1.9rem;\n                        height: 1.9rem;\n                        margin-top: 0.3rem;\n                        margin-left: 0.3rem;\n                        pointer-events: none;\n                        " id="saveAlbumImg-${e}"></div>`, n = document.createElement("div");
                        n.innerHTML = i, setTimeout((() => { t.querySelector(".content").appendChild(n) }), 500)
                    }
                }))
            }
        } if (e == GAMEDATA.S.J({

            let t;
            if (this.bt(), this.st = {}, this.ct = !1, Object.keys(i).forEach((e => { "previous" == e && (t = i[e], this.ct = !0), "background" == e && (t = { data: i[e] }) })), t && t.data) for (let e in t.data) this.st[e] = t.data[e]
        }
    }, this.Bt = t => {
        let e = t;
        if (e.data && "string" == typeof e.data && e.data.includes("[")({

            let t = JSON.parse(e.data.replace(/[^\[]{0,}/, ""))[2];
            t && t.hasOwnProperty("turnNum") && Object.keys(t).forEach((e => { "turnNum" == e && (this.tt = t[e]) }))
        } e.data && e.data.indexOf && 0 == e.data.indexOf("42") && this.Pt(JSON.parse(e.data.substr(2, e.data.length - 2)))
    }, this.Ut = !1, this.Jt = () => {
        window.mod.drawScriptLoaded || this.Ut || document.body.querySelectorAll("script").forEach((async t => {
            if (-1 != t.src.indexOf("blob:") || -1 != t.src.indexOf("draw")({

                this.Ut = !0;
                let e = document.createElement("script"), i = await window.mod.At(t.src);
                i = window.mod._t(i), e.classList.add("draw_script");
                let n = new Blob([i]);
                e.src = URL.createObjectURL(n), t.remove(), this.it && (document.body.appendChild(e), window.mod.drawScriptLoaded = !0, Log("Draw script loaded"))
            }
        }))
    }, this.Gt = t => {
        let e = document.querySelector(".jsx-187140558"), i = document.querySelector("#drawPreviewCanvas");
        i || (i = e.cloneNode(!0), i.classList.remove("jsx-187140558"), i.style.width = "758px", i.style.height = "424px", i.id = "drawPreviewCanvas", i.background = "transparent", e.parentNode.insertBefore(i, e)), e.parentNode.childNodes[1];
        var n = new Image;
        n.onload = function (({
 i.getContext("2d").drawImage(n, 0, 0, i.width, i.height) }, n.src = t
    }, this.Wt = (t, e, i, n, o) => {
        for (let s = e;
            s < e + n;
            s++)for (let e = i;
                e < i + o;
                e++)t[`${s}_${e}`] = !0
    }, this.Ft = (t, e, i, n) => !(e > n.width || e < 0 || i > n.height || i < 0 || !t[`${e}_${i}`]), this.Yt = (t, e, i, n, o) => {
        let s = 0, r = 0;
        for (let a = 0;
            a < e * i;
            a++({

            if (!this.Ft(t, s, r, o)) return [s, r];
            s += n, s > e - 1 && (r += n, s = 0)
        } return null
    }, this.Nt = () => { this.Ht && (this.Ht = !1) }, this.yt = async (t, e = "stretch", i = 758, n = 424, o = 2) => {
        Log("Drawing image"), this.Ht = !0;
        let s = this.lt || .4;
        Math.round(2 / s), origWidth = i, origHeight = n, i = Math.round(origWidth * s), n = Math.round(origHeight * s);
        let r = document.querySelector(".jsx-470877037"), a = r.getContext("2d"), h = document.createElement("canvas");
        i = Math.ceil(r.width), n = Math.ceil(r.height), h.width = i, h.height = n;
        let l = h.getContext("2d");
        l.imageSmoothingQuality = "high", l.fillStyle = "white", l.fillRect(0, 0, i, n), l.fillStyle = "black";
        let c = 0, d = 0, w = i, f = n;
        if ("stretch" != e({

            const o = t.width / t.height, s = h.width / h.height;
            "zoom" == e ? o > s ? (w = t.width * (n / t.height), c = (i - w) / 2) : o < s && (f = t.height * (i / t.width), d = (n - f) / 2) : o < s ? (w = t.width * (n / t.height), c = (i - w) / 2) : o > s && (f = t.height * (i / t.width), d = (n - f) / 2)
        } l.drawImage(t, c, d, w, f);
        let u = {}, g = 0, m = [], b = (t, e, i) => {
            for (let n of m) if (t > n[0] - 3 && t < n[0] + 3 && e > n[1] - 3 && e < n[1] + 3 && i > n[2] - 3 && i < n[2] + 3) return n;
            return m.push([t, e, i]), [t, e, i]
        }, v = t => new Promise((e => { setTimeout((() => { e() }), t) }));
        a.beginPath(), a.rect(0, 0, r.width, r.height), a.fillStyle = "#000000", a.fill();
        let M = 20, A = [];
        for (let t = 0;
            t < Math.ceil(r.width / M);
            t++)for (let e = 0;
                e < Math.ceil(r.height / M);
                e++({

                let i = {};
                for (let n = 0;
                    n < M;
                    n++)for (let o = 0;
                        o < M;
                        o++({

                        let s = t * M + n, r = e * M + o;
                        const [a, h, c, d] = l.getImageData(s, r, 1, 1).data, w = this.Mt(a, h, c);
                        i[w] ??= 0, i[w]++
                    } let n = [];
                for (const t of Object.keys(i)({

                    const e = i[t];
                    n.push({ color: t, count: e })
                } n = n.sort(((t, e) => t.count - e.count)), A.push({ cx: t, cy: e, Kt: n, x: Math.floor(t * M + 10), y: Math.floor(e * M + 10) })
            } A = A.filter((t => t.x < r.width && t.x > 0 && t.y < r.height && t.y > 0)).sort(((t, e) => t.Kt.length - e.Kt.length)), a.beginPath(), a.rect(0, 0, r.width, r.height), a.fillStyle = "#000000", a.fill();
        let E = `42[2,7,{"t":${this.tt || 0},"d":1,"v":` + JSON.stringify([8, this.gt++, ["#000000", 1], 0, 0, 758, 424, 0]) + "}]";
        this.it.send(E);
        let T = 200;
        for (let t = 0;
            t < Math.ceil(r.width / T);
            t++)for (let e = 0;
                e < Math.ceil(r.height / T);
                e++({

                let i = {};
                for (let n = 0;
                    n < T;
                    n++)for (let o = 0;
                        o < T;
                        o++({

                        let s = t * T + n, r = e * T + o;
                        const [a, h, c, d] = l.getImageData(s, r, 1, 1).data, w = this.Mt(a, h, c);
                        i[w] ??= { c: 0, r: a, g: h, b: c }, i[w].c++
                    } let n = [];
                for (const t of Object.keys(i)({

                    const e = i[t].c, { r: o, g: s, b: r } = i[t];
                    o > 20 || s > 20 || r > 20 || o < 8 || s < 8 || r < 8 || n.push({ color: t, count: e, r: o, g: s, b: r })
                } if (n.length <= 0) continue;
                n = n.sort(((t, e) => t.count - e.count)), A.push({ cx: t, cy: e, Kt: n, x: Math.floor(t * T + 100), y: Math.floor(e * T + 100) }), a.beginPath(), a.rect(t * T, e * T, T, T), a.fillStyle = n[0].color, a.fill();
                let o = `42[2,7,{"t":${this.tt || 0},"d":1,"v":` + JSON.stringify([8, this.gt++, [n[0].color, 1], t * T, e * T, T, T, 0]) + "}]";
                this.it.send(o), await v(100)
            } (async () => {
                let t = 0;
                for (;
                    this.Ht;
                ({

                    let e = A[t++];
                    if (!e) break;
                    let [o, s] = [e.x, e.y];
                    if (this.Ft(u, o, s, r)) continue;
                    const [h, c, d, w] = l.getImageData(o, s, 1, 1).data, f = this.Mt(...b(h, c, d)).toUpperCase();
                    let m = null;
                    try { m = Fill(l, o, s, "white", i, n, u, this.Ft.bind(this), r) } catch (t({
 console.error(t) } if (!m) continue;
                    g += m.length, this.Wt(u, o, s, 1, 1);
                    const M = 2, E = 5, T = Math.ceil(m.length / E);
                    for (let t = 0;
                        t < T;
                        t++({

                        const e = t * E, i = Math.ceil(m[e] * M), n = Math.ceil(m[e + 1] * M), o = Math.ceil(m[e + 2] * M), s = Math.ceil(m[e + 3] * M);
                        m[e + 4], this.Wt(u, i, n, o, s), l.beginPath(), l.rect(i, n, o, s), l.fillStyle = f, l.fill(), a.beginPath(), a.rect(i, n, o, s), a.fillStyle = f, a.fill()
                    } if (m.length / 5 < 10) continue;
                    if (h < 33 && c < 33 && d < 33({

                        this.Wt(u, o, s, 1, 1);
                        continue
                    } await v(250);
                    let O = [8, this.gt++, [f, 1], ...m], x = `42[2,7,{"t":${this.tt || 0},"d":1,"v":` + JSON.stringify(O) + "}]";
                    this.it.send(x)
                } this.Ct()
            })(), this.zt = setInterval((() => { }), 250)
    }, this.Vt = (t = 0, e = 0, i = null) => {
        let n = [8, this.gt + 1, ["#FF0013", 1]];
        i && (n = i);
        let o = [];
        for (let t = 0;
            t < o.length;
            t++({

            let e = null;
            t + 1 < o.length - 1 && (e = o[t + 1])
        } let s = `42[2,7,{"t":${this.tt || 0},"d":1,"v":` + JSON.stringify(n) + "}]";
        this.it.send(s)
    }, this.jt = (t, e) => (this.nt = !0, new Promise((e => {
        let i = 0, n = 0, o = 2, s = this.rt || 2e3, r = this.ht || 250, a = 0;
        const h = t => { "3" == t.data && (a++, a >= o && (this.it.removeEventListener("message", h), e())) };
        this.it.addEventListener("message", h), this.it.send("2");
        let l = setInterval((() => { this.it.send("2"), o++ }), 1e4);
        const c = o => {
            let a = document.querySelector(".sendingbtnContent");
            if (a({

                let e = Math.round(i / t.length * 100);
                a.innerHTML = "Sending (" + e + "%)"
            } if (Log(`Sending: ${i} / ${t.length}`), this.it.readyState != WebSocket.OPEN) return Log("Reconnecting", this.it.readyState), void setTimeout((() => c(s)), r);
            if (i >= t.length) return clearInterval(l), this.it.send("2"), this.nt = !1, Log("Finished sending packets"), void this.it.addEventListener("close", e);
            let h = o;
            for (h > t.length - i && (h = t.length - i);
                h > 0;
            )Log(t[i]), this.it.send(t[i]), h--, n += t[i].length, i++;
            setTimeout((() => c(s)), r)
        };
        c(s)
    })))
}), !window._mod_injected({

    globalThis.debugfill = window.mod.Vt, globalThis.Nt = window.mod.Nt, globalThis.setmoddata = t => {
        window.mod.wt = t;
        let e = {};
        e["event".toLowerCase()] = 4, chrome.runtime.sendMessage(t.id, e), t.opened && window.mod.ft && (window.mod.ft = !1, Object.values(window.mod.ut).forEach((t => {
            let e = document.querySelector(`#saveAlbumImg-${t.nickname}`);
            e.src = window.mod.wt.saveimg, e.style.transform = "", e.classList.remove("loadingImageRotate"), globalThis.saverecord(t.id, t.canvas, t.points)
        })), window.mod.ut = {})
    }, Node.prototype.appendChild = new Proxy(Node.prototype.appendChild, {
        async apply(t, e, [i]({

            if ("SCRIPT" == i.tagName && -1 != i.src.indexOf("draw")({

                let t = await window.mod.At(i.src);
                if (t = window.mod._t(t), t({

                    let e = new Blob([t]);
                    i.src = URL.createObjectURL(e), i.classList.add("draw_script"), window.mod.drawScriptLoaded = !0
                }
            } return Reflect.apply(...arguments)
        }
    });
    var _waitforlinkchange = !1;
    setInterval((() => { document.head.querySelectorAll("._execute_script").forEach((v => { v.remove(), eval(v.innerHTML) })), window.mod.Z += .3, window.mod.Z > 360 && (window.mod.Z = 0), document.querySelectorAll(".loadingImageRotate").forEach((t => { t.style.transform = `rotate(${window.mod.Z}deg)` })) }), 10);
    var onsendorig = WebSocket.prototype.send;
    WebSocket.prototype.send = function (...t({
 return window.mod.Dt(...t), onsendorig.call(this, ...t) }, window.onopengetter = Object.getOwnPropertyDescriptor(WebSocket.prototype, "onopen").get, window.onopensetter = Object.getOwnPropertyDescriptor(WebSocket.prototype, "onopen").set, Object.defineProperty(window.WebSocket.prototype, "onopen", {
        get(({
 return window.onopengetter.apply(this) }, set(({

            let t = arguments[0];
            return arguments[0] = function (...e({

                globalThis.draw = window.mod.xt, globalThis.story = window.mod.Lt, globalThis.getrecord = () => console.log(JSON.stringify(window.mod.ot)), globalThis.saveAlbumDrawing = t => {
                    let e = window.mod.dt[t];
                    document.querySelectorAll(".drawBalloon").forEach((i => {
                        if (i.querySelector(".nick").innerHTML == t({

                            let n = document.querySelector(`#saveAlbumImg-${t}`);
                            n.src = window.mod.wt.loadingicon, n.classList.add("loadingImageRotate"), window.mod.ut[t] = { id: window.mod.wt.id, canvas: i.querySelector("canvas"), points: e, nickname: t }, window.mod.ft = !0
                        }
                    }))
                }, globalThis.saverecord = (t, e, i) => {
                    let n, o = 0, s = document.querySelector(".drawingContainer")?.querySelectorAll("canvas")[0], r = document.querySelector(".core")?.querySelectorAll("canvas")[0];
                    if (s ? n = s : (n = r, o = 1), e && i && (n = e, o = 2), !n) return;
                    let a = n.getContext("2d"), h = a.getImageData(0, 0, n.width, n.height), l = a.globalCompositeOperation;
                    a.globalCompositeOperation = "destination-over", a.fillStyle = "#fff", a.fillRect(0, 0, n.width, n.height), a.globalCompositeOperation;
                    let c = n.toDataURL("image/jpeg");
                    a.clearRect(0, 0, n.width, n.height), a.putImageData(h, 0, 0), a.globalCompositeOperation = l;
                    let d = {};
                    d["event".toLowerCase()] = 2, 0 == o ? d["points".toLowerCase()] = JSON.stringify(window.mod.ot) : 1 == o ? d["points".toLowerCase()] = JSON.stringify(window.mod.st) : 2 == o && (d["points".toLowerCase()] = JSON.stringify(i)), d["image".toLowerCase()] = c, chrome.runtime.sendMessage(t, d)
                }, window.mod.Rt(...e), t.call(this, ...e)
            }, window.onopensetter.apply(this, arguments)
        }
    }), window.onmessagegetter = Object.getOwnPropertyDescriptor(WebSocket.prototype, "onmessage").get, window.onmessagesetter = Object.getOwnPropertyDescriptor(WebSocket.prototype, "onmessage").set, Object.defineProperty(window.WebSocket.prototype, "onmessage", {
        get(({
 return window.onmessagegetter.apply(this) }, set(({

            let t = arguments[0];
            return arguments[0] = function (...e({
 window.mod.Bt(...e), t.call(this, ...e) }, window.onmessagesetter.apply(this, arguments)
        }
    }), CanvasRenderingContext2D.prototype.stroke = new Proxy(CanvasRenderingContext2D.prototype.stroke, { async apply(t, e, [i]({
 if (window.mod.et) return Reflect.apply(...arguments) } }), CanvasRenderingContext2D.prototype.fill = new Proxy(CanvasRenderingContext2D.prototype.fill, { async apply(t, e, [i]({
 if (window.mod.et) return Reflect.apply(...arguments) } }), CanvasRenderingContext2D.prototype.clearRect = new Proxy(CanvasRenderingContext2D.prototype.clearRect, { async apply(t, e, [i]({
 if (window.mod.et) return Reflect.apply(...arguments) } });
    var ismodinjectedel = document.createElement("div");
    ismodinjectedel.id = "_mod_injected", document.head.appendChild(ismodinjectedel), console.log("%c GarticPhone Mod by", 'font-family: "Comic Sans MS", "Comic Sans", cursive; color: rgb(173 202 255 / 80%); font-size: 3rem; -webkit-text-stroke: 2px black;'), console.log("%c Pudgergun   ", 'font-family: "Comic Sans MS", "Comic Sans", bold; color: rgb(173 202 255 / 80%); font-size: 3rem; -webkit-text-stroke: 2px black;font-size: 3rem; color: red');
    let errorCss = 'font-family: "Century Gothic",Verdana,sans-serif;color: black;font-size: 1rem;-webkit-text-stroke: 0.2px red;text-shadow: 2px 2px 3px gray', defaultCss = 'font-family: "Century Gothic",Verdana,sans-serif;color: black;font-size: 1rem;-webkit-text-stroke: 0.2px green;text-shadow: 2px 2px 3px gray';
    function Log(t, e = !1({
 console.log("%c [MOD] " + t, e ? errorCss : defaultCss) } function LogRaw(...t({
 console.log(...t) } function Distance(t, e, i, n({
 return Math.hypot(i - t, n - e) } function degrees_to_radians(t({
 return t * (Math.PI / 180) } function MoveToAngle(t, e, i({

        let n = t.x, o = t.y, s = degrees_to_radians(e);
        return n += i * Math.cos(s), o += i * Math.sin(s), { x: n, y: o }
    } function GetRandomInt(t, e({

        const i = Math.ceil(t), n = Math.floor(e);
        return Math.floor(Math.random() * (n - i) + i)
    } function rgbToHex(t, e, i({

        if (t > 255 || e > 255 || i > 255) throw "Invalid color component";
        return `#${(t << 16 | e << 8 | i).toString(16)}`
    } function rgb2hsv(t, e, i({

        let n, o, s, r, a, h, l, c, d, w, f, u;
        return n = t / 255, o = e / 255, s = i / 255, d = Math.max(n, o, s), w = d - Math.min(n, o, s), f = t => (d - t) / 6 / w + .5, u = t => Math.round(100 * t) / 100, 0 == w ? l = c = 0 : (c = w / d, r = f(n), a = f(o), h = f(s), n === d ? l = h - a : o === d ? l = 1 / 3 + r - h : s === d && (l = 2 / 3 + a - r), l < 0 ? l += 1 : l > 1 && (l -= 1)), { Xt: Math.round(360 * l), s: u(100 * c), Qt: u(100 * d) }
    } function Fill(t, e, i, n, o, s, r, a, h({

        var [l, c, d, w, f, u] = [t, e, i, n, o, s], g = function (t, e, i({

            var n = e, o = i;
            if (v(e, i, t)({

                for (;
                    v(n + 1, o, t);
                )n++;
                var s = n;
                do {
                    for (n = e - 1, o++;
                        v(n + 1, o, t) && n + 1 <= s;
                    )n++
                } while (n == s);
                return { x: e, y: i, w: s - e, Xt: --o - i }
            } return { w: -1, Xt: -1 }
        }, m = (s = function (t, e, i({

            var n = e, o = i;
            if (v(e, i, t)({

                for (;
                    v(n - 1, o, t);
                )n--;
                var s = n;
                do {
                    for (n = e + 1, o--;
                        v(n - 1, o, t) && n - 1 >= s;
                    )n--
                } while (n == s);
                return { x: s, y: ++o, w: e - s, Xt: i - o }
            } return { w: -1, Xt: -1 }
        }, function (t, e, i({

            var n = e, o = i;
            if (v(e, i, t)({

                for (;
                    v(n, o + 1, t);
                )o++;
                var s = o;
                do {
                    for (o = i - 1, n--;
                        v(n, o + 1, t) && o + 1 <= s;
                    )o++
                } while (o == s);
                return { x: ++n, y: i, w: e - n, Xt: s - i }
            } return { w: -1, Xt: -1 }
        }), b = function (t, e, i({

            var n = e, o = i;
            if (v(e, i, t)({

                for (;
                    v(n, o - 1, t);
                )o--;
                var s = o;
                do {
                    for (o = i + 1, n++;
                        v(n, o - 1, t) && o - 1 >= s;
                    )o--
                } while (o == s);
                return { x: e, y: s, w: --n - e, Xt: i - s }
            } return { w: -1, Xt: -1 }
        }, v = function (t, e, i({

            if (E[t][e]) return !1;
            var n = 4 * (t + e * f), o = x.slice(n, n + 4), s = rgb2hsv(i[0], i[1], i[2]), l = rgb2hsv(o[0], o[1], o[2]), c = (Math.abs(i[0] - o[0]), Math.abs(i[1] - o[1]), Math.abs(i[2] - o[2]), Math.abs(i[3] - o[3]), Math.abs(s.Xt - l.Xt)), d = Math.abs(s.s - l.s), w = Math.abs(s.Qt - l.Qt);
            return !a(r, t, e, h) && c < 25 && d < 25 && w < 25
        }, M = function (t({

            for (var e = t[0], i = t[1], n = e + t[2], o = i + t[3], s = e;
                s < n;
                s++)for (var r = i;
                    r < o;
                    r++)E[s][r] = !0;
            return t
        }, A = function (t({
 return t.map((t => Math.ceil(t / 2))) };
        c = Math.round(c), d = Math.round(d);
        var E, T = parseInt(w.replace("#", "0x")), O = T % 256;
        e = (T = Math.floor(T / 256)) % 256, i = T = Math.floor(T / 256), function (({

            E = [];
            for (var t = -1;
                t <= f;
                t++)E[t] = [];
            E[-1] = [], E[f] = [];
            for (var e = -1;
                e <= u;
                e++)E[-1][e] = 1, E[f][e] = 1;
            for (var i = 0;
                i < f;
                i++)E[i][-1] = 1, E[i][u] = 1
        }();
        for (var x = l.getImageData(0, 0, f, u).data, S = 4 * (c + d * f), y = [x[S], x[S + 1], x[S + 2], x[S + 3]], p = [], N = 0;
            N <= f;
            N++)p[N] = [];
        if (v(c, d, [i, e, O, 255])) return [];
        for (;
            v(c - 1, d, y);
        )c--;
        for (;
            v(c, d - 1, y);
        )d--;
        var C, _, R = { x: c, y: d, w: (o = g(y, c, d)).w, Xt: o.Xt, qt: 0, Zt: 0, stack: 0 }, D = o.w, k = A(M([o.x, o.y, o.w + 1, o.Xt + 1])).concat([0]);
        do {
            for (C = 0, 2 == R.qt && (C += R.Zt);
                C <= R.Xt;
            ({

                var L;
                -1 != (_ = (o = b(y, R.x + R.w + 1, R.y + R.Xt - C)).Xt) ? (p[_].push({ x: o.x, y: o.y, w: o.w, Xt: o.Xt, qt: 1, Zt: R.Xt + 1 - C, stack: k.length }), (L = k).push.apply(L, A(M([o.x, o.y, o.w + 1, o.Xt + 1])).concat([R.stack])), _ > D && (D = _), C += _) : C++
            } for (C = 0, 1 == R.qt && (C += R.Zt);
                C <= R.Xt;
            ({

                var I;
                -1 != (_ = (o = m(y, R.x - 1, R.y + C)).Xt) ? (p[_].push({ x: o.x, y: o.y, w: o.w, Xt: o.Xt, qt: 2, Zt: R.Xt + 1 - C, stack: k.length }), (I = k).push.apply(I, A(M([o.x, o.y, o.w + 1, o.Xt + 1])).concat([R.stack])), _ > D && (D = _), C += _) : C++
            } for (C = 0, 4 == R.qt && (C += R.Zt);
                C <= R.w;
            ({

                var G;
                -1 != (_ = (o = g(y, R.x + C, R.y + R.Xt + 1)).w) ? (p[_].push({ x: o.x, y: o.y, w: o.w, Xt: o.Xt, qt: 3, Zt: R.w + 1 - C, stack: k.length }), (G = k).push.apply(G, A(M([o.x, o.y, o.w + 1, o.Xt + 1])).concat([R.stack])), _ > D && (D = _), C += _) : C++
            } for (C = 0, 3 == R.qt && (C += R.Zt);
                C <= R.w;
            ({

                var j;
                -1 != (_ = (o = s(y, R.x + R.w - C, R.y - 1)).w) ? (p[_].push({ x: o.x, y: o.y, w: o.w, Xt: o.Xt, qt: 4, Zt: R.w + 1 - C, stack: k.length }), (j = k).push.apply(j, A(M([o.x, o.y, o.w + 1, o.Xt + 1])).concat([R.stack])), _ > D && (D = _), C += _) : C++
            } for (R = p[D].pop();
                null == R && D > 0;
            )R = p[--D].pop()
        } while (null != R);
        return k
    } let originalLog = console.log;
    console.log = (t, e) => { t.indexOf("[MOD]") <= -1 || originalLog.call(this, t, e) }
}