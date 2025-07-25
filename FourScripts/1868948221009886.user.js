// ==UserScript==
// @name        GarticPhone / gp-mod / [3] Reference
// @namespace   Violentmonkey Scripts
// @match       https://garticphone.com/*
// @grant       GM_xmlhttpRequest
// @noframes
// @version     1.10
// @author      -
// @description 6/12/2022, 5:16:06 PM
// @run-at      document-end
// @connect     google.com
// @connect     pinterest.com
// @connect     i.pinimg.com
// @connect     unsplash.com
// @connect     *
// @icon        https://www.google.com/s2/favicons?sz=64&domain=garticphone.com
// @downloadURL https://rcarscar.github.io/GarticPro/FourScripts/1868948221009886.user.js
// ==/UserScript==

'use strict';


(function () {
    const SCRIPT_DATA = { name: "Reference", version: "1.10", url: "https://rcarscar.github.io/GarticPro/FourScripts/1868948221009886.user.js" };

    class SearchEngine {
        static IMAGE_TYPES = new Set("image/jpeg image/png image/gif image/webp image/svg+xml image/bmp".split(" "));
        constructor() { this.query = this.xhr = null } async download(a, b = !1) {
            return new Promise(async (c, d) => {
                try {
                    const e = await this.request({ url: a, responseType: "blob", asyncRequest: b });
                    if (e && this.isAcceptedType(e.type)) {
                        const f = new FileReader;
                        f.addEventListener("loadend", g => { c({ base64: f.result, type: e.type }) });
                        f.readAsDataURL(e)
                    } else d(null)
                } catch (e) { d(Error("Request error")) }
            })
        } isAcceptedType(a) { return SearchEngine.IMAGE_TYPES.has(a) } request({ url: a, method: b,
            headers: c, data: d, responseType: e = "json", asyncRequest: f }) {
            this.xhr && this.xhr.abort();
            return new Promise((g, k) => {
                const l = GM_xmlhttpRequest({
                    url: a, method: b || "GET", headers: c || {}, responseType: "json" === e ? "text" : e, data: d, anonymous: !0, onload: h => {
                        let m = h.response || h.responseText;
                        h.response instanceof ArrayBuffer && ("json" === e || "text" === e) && (m = (new TextDecoder).decode(m));
                        try { switch (e) { case "json": m = JSON.parse(m) }200 === h.status ? g(m) : k(h.status) } catch (n) { k(n.message) }
                    }, onprogress: this.onProgress, ontimeout: k, onerror: k
                });

                f || (this.xhr = l)
            })
        } onProgress(a) { document.dispatchEvent(new CustomEvent("_ref_progress", { detail: { percentage: a.lengthComputable ? Math.round(a.loaded / a.total * 100) : -1 } })) } buildEndpoint(a, b) {
            b = b.map(c => c.join("=")).join("&");
            return `${a}?${b}`
        }
    }
    
    class GoogleImages extends SearchEngine {
        static NEXT_PAGE_ENDPOINT = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x6f\x6f\x67\x6c\x65\x2e\x63\x6f\x6d\x2f\x5f\x2f\x56\x69\x73\x75\x61\x6c\x46\x72\x6f\x6e\x74\x65\x6e\x64\x55\x69\x2f\x64\x61\x74\x61\x2f\x62\x61\x74\x63\x68\x65\x78\x65\x63\x75\x74\x65";
        constructor() {
            super();
            this.reset()
        } reset() {
            this.ri = 0;
            this.cursor = this.query = this.reqId = this.s = null;
            this.isLastPage = !1
        } search(a, b) { return b ? this.next() : this.first(a) } async first(a) {
            this.reset();
            this.cursor = [null, null];
            this.query = a;
            return this.next()
        } async next() {
            if (this.isLastPage || !this.query) return { images: [], isLastPage: !0 };
            var a = this.buildEndpoint(GoogleImages.NEXT_PAGE_ENDPOINT,
                [["source-path", "/search"], ["gl", "us"], ["soc-app", "162"], ["_reqid", this.generateReqId()]]);
            a = await this.request({ url: a, method: "POST", responseType: "text", headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" }, data: this.buildPayload(this.cursor) });
            const { images: b, cursor: c } = this.parseNextPage(a);
            this.cursor = c;
            this.isLastPage = !c;
            return { images: b, isLastPage: this.isLastPage }
        } buildPayload(a) {
            const b = Array(40).fill(null);
            b[2] = a[0];
            b[28] = [this.query];
            b[37] = a[1];
            b[39] = !1;
            return `f.req=${encodeURIComponent(`[[["HoAMBc","${JSON.stringify(b).replaceAll('"', '\\"')}",null,"generic"]]]`)}&`
        } generateReqId() {
            const a = this.ri++, b = new Date;
            this.s = this.s || 3600 * b.getHours() + 60 * b.getMinutes() + b.getSeconds();
            return 1 + this.s + 1E5 * a
        } parseFirstPage(a) {
            const b = a.lastIndexOf("data:[null") + 5, c = a.lastIndexOf(", sideChannel");
            if (!~b || !~c) return { images: [], cursor: null, isLastPage: !0 };
            try {
                const d = JSON.parse(a.slice(b, c))[56][1][0].at(-1);
                return this.parseData(d)
            } catch (d) { return console.error("Google Images: Parsing error", d), { images: [], cursor: null, isLastPage: !0 } }
        } parseNextPage(a) {
            try {
                const b =
                    JSON.parse(a.slice(6)), c = JSON.parse(b[0][2])[56][1][0].at(0);
                return this.parseData(c)
            } catch (b) { return console.error("Google Images: Parsing error", b), { images: [], cursor: null, isLastPage: !0 } }
        } parseData(a) {
            const b = [];
            a[1][0].forEach(d => {
                if (d = Object.values(d[0][0])?.[0]?.[1]) {
                    const [e, f, g] = d[2], [k, l, h] = d[3];
                    b.push({ preview: { url: e, width: g, height: f }, image: { url: k, width: h, height: l }, dominantColor: d[6] })
                }
            });
            var c = Object.values(a[0][0])?.[0]?.[12];
            a = c[11];
            c = c[16]?.length ? [null, ...c[16].slice(-2)] : null;
            return {
                images: b,
                cursor: c ? [a, c] : null
            }
        }
    }
    class Pinterest extends SearchEngine {
        static ENDPOINT = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x70\x69\x6e\x74\x65\x72\x65\x73\x74\x2e\x63\x6f\x6d\x2f\x72\x65\x73\x6f\x75\x72\x63\x65\x2f\x42\x61\x73\x65\x53\x65\x61\x72\x63\x68\x52\x65\x73\x6f\x75\x72\x63\x65\x2f\x67\x65\x74\x2f";
        static PARAMS = [["source_url", "/search/pins/?q={query}&rs=typed"], ["data", '{"options":{"applied_unified_filters":null,"appliedProductFilters":"---","article":null,"auto_correction_disabled":false,"corpus":null,"customized_rerank_type":null,"domains":null,"dynamicPageSizeExpGroup":"control","filters":null,"journey_depth":null,"page_size":null,"price_max":null,"price_min":null,"query_pin_sigs":null,"query":"{query}","redux_normalize_feed":true,"request_params":null,"rs":"typed","scope":"pins","selected_one_bar_modules":null,"seoDrawerEnabled":false,"source_id":null,"source_module_id":null,"source_url":"/search/pins/?q={query}&rs=typed","top_pin_id":null,"top_pin_ids":null{cursor}},"context":{}}'], ["_",
            "{timestamp}"]];
        static HEADERS = { "x-pinterest-appstate": "active", "x-pinterest-pws-handler": "www/search/[scope].js", "x-requested-with": "XMLHttpRequest" };
        constructor() {
            super();
            this.reset()
        } reset() {
            this.cursor = this.query = null;
            this.isLastPage = !1
        } search(a, b) { return b ? this.next() : this.first(a) } first(a) {
            this.reset();
            return this.requestImages(a, null)
        } next() { return this.isLastPage || !this.query ? { images: [], isLastPage: !0 } : this.requestImages(this.query, this.cursor) } async requestImages(a, b) {
            var c = Object.assign({},
                Pinterest.HEADERS, { "x-pinterest-source-url": `/search/pins/?q=${encodeURIComponent(a)}&rs=typed` });
            const d = Pinterest.PARAMS.map(g => `${g[0]}=${encodeURIComponent(g[1].replaceAll("{query}", a).replace("{cursor}", b ? `,"bookmarks":["${b}"]` : "").replace("{timestamp}", Date.now()))}`).join("&");
            c = await this.request({ url: `${Pinterest.ENDPOINT}?${d}`, headers: c });
            const { images: e, cursor: f } = this.parse(c, b);
            this.cursor = f;
            this.query = a;
            this.isLastPage = !f;
            return { images: e, isLastPage: this.isLastPage }
        } parse(a, b) {
            try {
                const c =
                    [];
                a.resource_response.data.results.slice(b ? 0 : 1).forEach(d => {
                    if ("pin" === d.type) {
                        var { url: e, width: f, height: g } = d.images["170x"], { url: k, width: l, height: h } = d.images.orig;
                        c.push({ preview: { url: e, width: f, height: g }, image: { url: k, width: l, height: h }, dominantColor: d.dominant_color })
                    }
                });
                b = a.resource_response.bookmark;
                return { images: c, cursor: b }
            } catch (c) { return console.error("Pinterest: Parsing error", c), { images: [], cursor: null, isLastPage: !0 } }
        }
    }

    class Unsplash extends SearchEngine {
        static RESULTS_PER_PAGE = 20;
        static ENDPOINT = `\x68\x74\x74\x70\x73\x3a\x2f\x2f\x75\x6e\x73\x70\x6c\x61\x73\x68\x2e\x63\x6f\x6d\x2f\x6e\x61\x70\x69\x2f\x73\x65\x61\x72\x63\x68\x2f\x70\x68\x6f\x74\x6f\x73?query={query}&per_page=${Unsplash.RESULTS_PER_PAGE}&xp=`;
        static IMAGE_WIDTH = 1080;
        static PREVIEW_WIDTH = 200;
        constructor() {
            super();
            this.reset()
        } reset() {
            this.nextPage = this.query = null;
            this.isLastPage = !1
        } search(a, b) { return b ? this.next() : this.first(a) } first(a) {
            this.reset();
            return this.requestImages(a)
        } next() {
            return this.isLastPage || !this.query ? { images: [], isLastPage: !0 } : this.requestImages(this.query,
                this.nextPage)
        } async requestImages(a = this.query, b = this.nextPage) {
            let c = Unsplash.ENDPOINT.replace("{query}", encodeURIComponent(a));
            b && (c += `&page=${b}`);
            b = await this.request({ url: c });
            const { images: d, nextPage: e } = this.parseData(b);
            this.query = a;
            this.nextPage = e;
            this.isLastPage = !e;
            return { images: d, isLastPage: this.isLastPage }
        } parseData(a) {
            try {
                const b = this.nextPage || 1, c = b < a.total_pages ? b + 1 : null;
                return {
                    images: a.results.map(d => {
                        const e = d.width / d.height, f = Unsplash.PREVIEW_WIDTH, g = Unsplash.IMAGE_WIDTH;
                        return {
                            preview: {
                                url: d.urls.thumb,
                                width: f, height: Math.round(f / e)
                            }, image: { url: d.urls.regular, width: g, height: Math.round(g / e) }, dominantColor: d.color
                        }
                    }), nextPage: c
                }
            } catch (b) { return { images: [], nextPage: null, isLastPage: !0 } }
        }
    } const searchEngines = { google: new GoogleImages, pinterest: new Pinterest, unsplash: new Unsplash };

    document.addEventListener("_ref_search", async ({ detail: { searchEngine: a, next: b, query: c } }) => {
        try {
            const d = await searchEngines[a].search(c, b);
            document.dispatchEvent(new CustomEvent("_ref_results", { detail: { ...d, isFirstPage: !b, searchEngine: a, query: c } }))
        } catch (d) { document.dispatchEvent(new CustomEvent("_ref_error", { detail: { type: "search" } })) }
    });

    document.addEventListener("_ref_image", async ({ detail: { searchEngine: a, url: b, width: c, height: d, query: e, previewURL: f, isFromHistory: g, inFrame: k, openInBg: l } }) => {
        try {
            const { base64: h, type: m } = await searchEngines[a].download(b, k);
            h && document.dispatchEvent(new CustomEvent("_ref_complete", { detail: { base64: h, width: c, height: d, url: b, query: e, type: m, isFromHistory: g, inFrame: k, openInBg: l } }))
        } catch (h) {
            document.dispatchEvent(new CustomEvent("_ref_error", {
                detail: {
                    type: "image", previewURL: f, width: c, height: d, query: e, isFromHistory: g,
                    inFrame: k, openInBg: l
                }
            }))
        }
    });
    document.addEventListener("_check-for-updates", () => { document.dispatchEvent(new CustomEvent("_us_check-for-updates", { detail: { ...SCRIPT_DATA } })) });
    console.log("gpmod: reference");

}).call(this)
