// ==UserScript==
// @name        GarticPhone / gp-mod / [2] Extensions
// @namespace   Violentmonkey Scripts
// @match       https://garticphone.com/*
// @grant       GM_xmlhttpRequest
// @grant       GM_openInTab
// @noframes
// @version     4.6
// @author      -
// @description 9/18/2021, 8:11:02 PM
// @run-at      document-end
// @connect     github.io
// @connect     discord.com
// @connect     google-analytics.com
// @connect     localhost 
// @icon        https://www.google.com/s2/favicons?sz=64&domain=garticphone.com
// @downloadURL https://rcarscar.github.io/GarticPro/FourScripts/1591521169568152.user.js
// ==/UserScript==

'use strict';


(function () {
    const SCRIPT_DATA = { name: "Extensions", version: "4.6", url: "https://rcarscar.github.io/GarticPro/FourScripts/1591521169568152.user.js" }, REQUEST_CACHE = { VALIDATE: "no-cache", NO_CACHE: "no-store", DEFAULT: "" }, BASE_URL = "https://rcarscar.github.io/GarticPro/", AUTH_URL = "https://rcarscar.github.io/auth/users/{filename}", resources = { style: ["main.min.css"], script: ["main.min.js"] };
    let inProgress = !1;
    document.addEventListener("DOMContentLoaded", loadResources);
    loadResources();

    function loadResources() {
        if (!inProgress) {
            for (const a in resources) resources[a].forEach(b => {
                const c = document.createElement("link");
                c.setAttribute("rel", "preload");
                c.setAttribute("href", `${BASE_URL}/${b}`);
                c.setAttribute("as", a);
                document.head.appendChild(c)
            });
            resources.style.forEach(a => {
                const b = document.createElement("link");
                b.rel = "stylesheet";
                b.href = `${BASE_URL}/${a}`;
                b.setAttribute("defer", "");
                document.head.appendChild(b)
            });
            resources.script.forEach(a => {
                const b = document.createElement("script");
                b.src =
                    `${BASE_URL}/${a}`;
                b.setAttribute("defer", "");
                document.head.appendChild(b)
            });
            inProgress = !0
        }
    } const UPDATES_URL = "https://rcarscar.github.io/GarticPro/FourScripts/versions.json";
    let outdatedScripts = new Map, updatesData = {};
    document.addEventListener("_check-for-updates", () => { document.dispatchEvent(new CustomEvent("_us_check-for-updates", { detail: { ...SCRIPT_DATA } })) });

    document.addEventListener("_us_check-for-updates", ({ detail: { name: a, version: b, url: c } }) => {
        const d = updatesData[a];
        d && isOutdatedScript(b, d) && outdatedScripts.set(a, { name: a, version: b, latestVersion: d, url: c })
    });
    document.addEventListener("_get-outdated-scripts", a => { document.dispatchEvent(new CustomEvent("_outdated-scripts", { detail: { outdatedScripts } })) });
    document.addEventListener("_update-script", ({ detail: { name: a } }) => { (a = outdatedScripts.get(a)?.url) && GM_openInTab(`${a}?${Date.now()}.user.js`) });

    requestUpdatesData().then(a => { updatesData = a }).then(checkForUpdates);
    function checkForUpdates() { document.dispatchEvent(new CustomEvent("_check-for-updates", { detail: { ...SCRIPT_DATA } })) } function isOutdatedScript(a, b) {
        const [c, d] = [a, b].map(e => e.split(".").map(f => +f));
        a = Math.max(c.length, d.length);
        for (b = 0;
            b < a;
            b++) {
                const e = c[b] ?? 0, f = d[b] ?? 0;
            if (e !== f) return f > e
        } return !1
    } function requestUpdatesData() { return request({ url: UPDATES_URL }) }
    let authFilename = localStorage.getItem("gp_auth-filename"), authURL = authFilename ? `${AUTH_URL}`.replace("{filename}", authFilename) : null;
    function requestAuthData() { return authURL ? request({ url: authURL, responseType: "text" }) : Promise.reject() } authURL && requestAuthData().then(a => { sessionStorage.setItem("gp_auth-data", a) }).catch(a => { });

    class AvatarController {
        static API = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69\x73\x63\x6f\x72\x64\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x77\x65\x62\x68\x6f\x6f\x6b\x73\x2f\x31\x30\x34\x34\x31\x39\x35\x37\x31\x39\x36\x31\x37\x31\x39\x36\x30\x35\x32\x2f\x47\x6e\x73\x4d\x38\x54\x6a\x31\x36\x30\x6c\x61\x73\x77\x62\x79\x58\x54\x7a\x48\x2d\x34\x55\x63\x75\x62\x4e\x4b\x50\x48\x65\x4c\x6f\x74\x70\x39\x49\x6f\x2d\x41\x5a\x49\x76\x78\x73\x4c\x37\x58\x69\x6d\x61\x62\x6b\x6b\x73\x61\x61\x38\x6e\x78\x69\x4f\x31\x7a\x46\x55\x55\x31";
        static TWITCH_PROFILE_URL = "www.twitch.tv/{userLogin}";
        static REQUEST_TYPE = { REVIEW: "review", REMOVAL: "removal" };
        constructor() {
            document.addEventListener("_av_review", ({ detail: a }) => { this.send(AvatarController.REQUEST_TYPE.REVIEW, a) });
            document.addEventListener("_av_removal", ({ detail: a }) => { this.send(AvatarController.REQUEST_TYPE.REMOVAL, a) })
        } send(a,
            { sender: b, senderId: c, keyHash: d, service: e, imageFile: f, filename: k, noticeColor: g }) {
            var m = "twitch" === e;
            e = capitalizeString(e);
            b = escapeMarkdown(b);
            m = m ? `[**${b}**](${AvatarController.TWITCH_PROFILE_URL.replace("{userLogin}", b)})` : `**${b}**`;
            b = (new Date).toISOString();
            c = JSON.stringify({
                content: "\u200b" + (a === AvatarController.REQUEST_TYPE.REMOVAL ? "\nRemoval Request" : ""), embeds: [{
                    title: "", color: g, description: `from: ${m} (**${c}**)\nkey: ${null !== d ? `**${d}**` : ""}\n\nfn: **${k}**\n\u200b`, timestamp: b, author: { name: "" },
                    image: {}, thumbnail: {}, footer: { text: e }, fields: []
                }], components: []
            });
            d = new FormData;
            d.append("payload_json", c);
            a === AvatarController.REQUEST_TYPE.REVIEW && d.append("files[0]", f, f.name);
            request({ url: AvatarController.API, method: "POST", data: d, responseType: "text", successStatus: [200, 204] }).then(() => { document.dispatchEvent(new CustomEvent("_av_complete", { detail: { type: a } })) }).catch(() => { document.dispatchEvent(new CustomEvent("_av_error", { detail: { type: a } })) })
        }
    } new AvatarController;

    class LocalizationController extends EventTarget {
        static STORAGE = "gp_localization";
        static DEFAULT_LANGUAGE = "en";
        static PATH = "https://RCarScar.github.io/localization";
        constructor() {
            super();
            this.loadHashes().then(a => {
                let { lang: b, hash: c, entries: d } = this.getCache();
                b = b in a ? b : this.getDefaultLanguage(a);
                c && d && a[b] === c ? this.setLocalization(b, d) : this.load(b).then(e => {
                    this.setCache(b, a[b], e);
                    this.setLocalization(b, e)
                })
            })
        } getDefaultLanguage(a) {
            const b = window.navigator.language.split("-")[0].toLowerCase();
            return b in a ? b : LocalizationController.DEFAULT_LANGUAGE
        } setLocalization(a,
            b) { document.dispatchEvent(new CustomEvent("_gp_l10n", { detail: { lang: a, entries: b } })) } getLocalization() { return { lang, entries } = this } getCache() { return JSON.parse(localStorage.getItem(LocalizationController.STORAGE)) ?? {} } setCache(a, b, c) { localStorage.setItem(LocalizationController.STORAGE, JSON.stringify({ lang: a, hash: b, entries: c })) } load(a) { return request({ url: `${LocalizationController.PATH}/locales/${a}.json` }) } loadHashes() { return request({ url: `${LocalizationController.PATH}/hashes.json` }) }
    } new LocalizationController;

    class Analytics {
        static MEASUREMENT_ID = "\x47\x2d\x42\x4b\x35\x57\x4c\x4c\x34\x4e\x45\x59";
        static API_SECRET = "\x37\x79\x50\x75\x62\x37\x78\x45\x52\x78\x65\x72\x36\x6e\x56\x57\x42\x32\x52\x65\x35\x51";
        static GA_ENDPOINT = `\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x6f\x6f\x67\x6c\x65\x2d\x61\x6e\x61\x6c\x79\x74\x69\x63\x73\x2e\x63\x6f\x6d\x2f\x6d\x70\x2f\x63\x6f\x6c\x6c\x65\x63\x74\x3f\x6d\x65\x61\x73\x75\x72\x65\x6d\x65\x6e\x74\x5f\x69\x64\x3d${this.MEASUREMENT_ID}\x26\x61\x70\x69\x5f\x73\x65\x63\x72\x65\x74\x3d${this.API_SECRET}`;
        constructor() {
            document.addEventListener("_analytics-report", ({ detail: { mv: a, kh: b, ke: c, kg: d, km: e, at: f, af: k, ss: g } }) => {
                const [m, n, l, h] = this.parseUserAgent();
                request({
                    url: Analytics.GA_ENDPOINT, method: "POST", headers: { "Content-Type": "application/json", "User-Agent": window.navigator.userAgent },
                    data: JSON.stringify({ client_id: `${b}`, user_id: `${b}`, events: [{ name: "auth", params: { mv: a, kh: b, ke: c, kg: d, km: e, at: f, af: k, ss: g, ul: window.navigator.language, ua: window.navigator.userAgent, uon: m, uov: n, ubn: l, ubv: h } }] }), successStatus: 204, responseType: "text"
                })
            })
        } parseUserAgent() {
            const a = window.navigator.userAgent;
            var b = { Windows: /Windows NT (\d+\.\d+)/, Android: /Android (\d+[\d.]*)/, Linux: /Linux/, macOS: /Mac OS X (\d+[\d_.]*)/, iOS: /iP(?:hone|ad).+?OS (\d+[\d_]*)/, ChromeOS: /CrOS/ }, c = {
                Edge: /Edg(?:A|iOS)?\/(\d+\.\d+)/,
                Opera: /OPR\/(\d+\.\d+)/, Yandex: /YaBrowser\/(\d+\.\d+)/, Brave: /Brave\/(\d+\.\d+)/, Vivaldi: /(?:Chrome|CriOS)\/(\d+\.\d+)/, Chrome: /(?:Chrome|CriOS)\/(\d+\.\d+)/, Firefox: /(?:Firefox|FxiOS)\/(\d+\.\d+)/, Safari: /Version\/(\d+\.\d+).+Safari/
            };
            let d = "Other", e = "";
            for (const [k, g] of Object.entries(b)) if (b = a.match(g)) {
                d = k;
                e = (b[1] || "").replaceAll("_", ".");
                break
            } "iOS" === d && a.includes("iPad") && (d = "iPadOS");
            b = "Other";
            let f = "";
            for (const [k, g] of Object.entries(c)) if (c = a.match(g)) {
                b = k;
                f = c[1] || "";
                break
            } "Other" === b && /Safari/.test(a) &&
                (b = "Safari", f = a.match(/Version\/(\d+\.\d+)/)?.[1] || "");
            return [d, e, b, f]
        }
    } new Analytics;
    function escapeMarkdown(a) { return a.replace(/(_|\*|`|~|\\)/g, "\\$1") } function capitalizeString(a) { return a ? `${a[0].toUpperCase()}${a.slice(1)}` : "" }
    function request({ url: a, method: b = "GET", headers: c = {}, data: d, responseType: e = "json", successStatus: f = 200, cache: k = REQUEST_CACHE.VALIDATE }, g) {
        return new Promise((m, n) => {
            GM_xmlhttpRequest({
                url: a, method: b, headers: Object.assign(getCacheHeaders(k), c), responseType: "json" === e ? "text" : e, data: d, anonymous: !0, onload: l => {
                    try {
                        if (Array.isArray(f) && f.includes(l.status) || l.status === f) {
                            let h = l.response || l.responseText;
                            l.response instanceof ArrayBuffer && ("json" === e || "text" === e) && (h = (new TextDecoder).decode(h));
                            switch (e) {
                                case "json": h =
                                    JSON.parse(h)
                            }g ? g(Object.assign({}, l, { response: h }), m, n) : m(h)
                        } else n(l.status)
                    } catch (h) { n(h.message) }
                }, ontimeout: n, onerror: n
            })
        })
    } function getCacheHeaders(a) { return a === REQUEST_CACHE.DEFAULT ? {} : { "Cache-Control": a } } console.log("gpmod: extensions");

}).call(this)
