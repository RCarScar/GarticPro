function(a, c, d, t, D, f) {
    f && (a.beginPath(), a.rect(0, 0, 1, 1), a.fill());
    a.lineCap = a.lineJoin = "round";
    a.save();
    if (c) {
        f = [];
        let E = !0, O = !1, P = void 0;
        try {
            for (var C, F = c[Symbol.iterator]();
                !(E = (C = F.next()).done);
                E = !0) {
                    const x = C.value, w = x[0], b = x.slice(2);
                if (10 != w) {
                    c = void 0;
                    a.save();
                    if (12 == w) t ? a.clearRect(0, 32 * d, 758 * d, 424 * d) : (a.fillStyle = "#FFFFFF", a.beginPath(), a.rect(0, 32 * d, 758 * d, 424 * d), a.fill());
                    else if (8 != w) {
                        for (var e = 1;
                            e < b.length;
                            e++)b[e] = [b[e][0] * d, b[e][1] * d];
                        if (2 < b.length) switch (w) {
                            case 1: var G = b[0];
                                a.strokeStyle = G[0];
                                a.lineWidth = G[1];
                                a.globalAlpha = G[2];
                                a.lineWidth *= d;
                                c = [b[1][0], b[1][1]];
                                a.beginPath();
                                a.moveTo.apply(a, c);
                                for (e = 2;
                                    e < b.length;
                                    e++) {
                                        c = [b[e][0], b[e][1]];
                                    var y = [b[e - 1][0], b[e - 1][1]];
                                    a.quadraticCurveTo(y[0], y[1], y[0] + (c[0] - y[0]) / 2, y[1] + (c[1] - y[1]) / 2)
                                } a.lineTo(c[0], c[1]);
                                a.stroke();
                                break;
                            case 2: a.strokeStyle = "#FFFFFF";
                                a.lineWidth = b[0] * d;
                                c = [b[1][0], b[1][1]];
                                t && (a.globalCompositeOperation = "destination-out");
                                a.beginPath();
                                a.moveTo.apply(a, c);
                                for (e = 2;
                                    e < b.length;
                                    e++) {
                                        c = [b[e][0], b[e][1]];
                                    var z = [b[e - 1][0], b[e - 1][1]];
                                    a.quadraticCurveTo(z[0], z[1], z[0] + (c[0] - z[0]) / 2, z[1] + (c[1] - z[1]) / 2)
                                } a.lineTo(c[0], c[1]);
                                a.stroke();
                                t && (a.globalCompositeOperation = "source-over");
                                break;
                            case 3: var H = b[0];
                                a.strokeStyle = H[0];
                                a.lineWidth = H[1];
                                a.globalAlpha = H[2];
                                a.lineWidth *= d;
                                a.beginPath();
                                a.moveTo(b[1][0], b[1][1]);
                                a.lineTo(b[2][0], b[2][1]);
                                a.stroke();
                                break;
                            case 4: var I = b[0];
                                a.strokeStyle = I[0];
                                a.lineWidth = I[1];
                                a.globalAlpha = I[2];
                                a.lineWidth *= d;
                                a.beginPath();
                                a.rect(b[1][0], b[1][1], b[2][0] - b[1][0], b[2][1] - b[1][1]);
                                a.stroke();
                                break;
                            case 6: var J = b[0];
                                a.fillStyle = J[0];
                                a.lineWidth = J[1];
                                a.globalAlpha = J[2];
                                a.lineWidth *= d;
                                a.beginPath();
                                a.rect(b[1][0], b[1][1], b[2][0] - b[1][0], b[2][1] - b[1][1]);
                                a.fill();
                                break;
                            case 5: var K = b[0];
                                a.strokeStyle = K[0];
                                a.lineWidth = K[1];
                                a.globalAlpha = K[2];
                                a.lineWidth *= d;
                                var p = (b[2][0] - b[1][0]) / 2, m = (b[2][1] - b[1][1]) / 2, g = Math.round(b[1][0] + p), h = Math.round(b[1][1] + m), u = (Math.sqrt(2) - 1) / 3 * 4;
                                a.beginPath();
                                a.moveTo(g, h - m);
                                a.bezierCurveTo(g + u * p, h - m, g + p, h - u * m, g + p, h);
                                a.bezierCurveTo(g + p, h + u * m, g + u * p, h + m, g, h + m);
                                a.bezierCurveTo(g - u * p, h + m, g - p, h + u * m, g - p, h);
                                a.bezierCurveTo(g - p, h - u * m, g - u * p, h - m, g, h - m);
                                a.stroke();
                                break;
                            case 7: var L = b[0];
                                a.fillStyle = L[0];
                                a.lineWidth = L[1];
                                a.globalAlpha = L[2];
                                a.lineWidth *= d;
                                var q = (b[2][0] - b[1][0]) / 2, n = (b[2][1] - b[1][1]) / 2, k = Math.round(b[1][0] + q), l = Math.round(b[1][1] + n), v = (Math.sqrt(2) - 1) / 3 * 4;
                                a.beginPath();
                                a.moveTo(k, l - n);
                                a.bezierCurveTo(k + v * q, l - n, k + q, l - v * n, k + q, l);
                                a.bezierCurveTo(k + q, l + v * n, k + v * q, l + n, k, l + n);
                                a.bezierCurveTo(k - v * q, l + n, k - q, l + v * n, k - q, l);
                                a.bezierCurveTo(k - q, l - v * n, k - v * q, l - n, k, l - n);
                                a.fill()
                        } else if (![6, 7, 11].includes(w)) {
                            switch (w) {
                                case 2: a.fillStyle = "#FFFFFF";
                                    a.lineWidth = b[0] * d;
                                    c = b[1];
                                    t && (a.globalCompositeOperation = "destination-out");
                                    break;
                                case 10: a.fillStyle = "#FF0000";
                                    a.lineWidth = 2 * d;
                                    a.globalAlpha = 1;
                                    c = b[1];
                                    break;
                                default: var M = b[0];
                                    a.fillStyle = M[0];
                                    a.lineWidth = M[1];
                                    a.globalAlpha = M[2];
                                    a.lineWidth *= d;
                                    c = b[1]
                            }a.beginPath();
                            a.arc(c[0], c[1], a.lineWidth / 2, 0, 2 * Math.PI);
                            a.fill();
                            2 == w && t && (a.globalCompositeOperation = "source-over")
                        }
                    } else {
                        var Q = b[0];
                        a.fillStyle = Q[0];
                        a.globalAlpha = Q[1];
                        a.beginPath();
                        for (c = 1;
                            c < b.length;
                            c += 5)a.rect(b[c] * d, b[c + 1] * d, b[c + 2] * d, b[c + 3] * d);
                        a.fill()
                    } a.restore()
                } else D && f.push(b)
            }
        } catch (x) { O = !0, P = x } finally {
            try { E || null == F.return || F.return() } finally {
                if (O) throw P;
            }
        } t = !0;
        D = !1;
        C = void 0;
        try {
            for (var R, N = f[Symbol.iterator]();
                !(t = (R = N.next()).done);
                t = !0) {
                    var r = R.value;
                for (f = 1;
                    f < r.length;
                    f++)r[f] = [r[f][0] * d, r[f][1] * d];
                a.strokeStyle = "#CC0053";
                a.lineWidth = 2 * d;
                a.globalAlpha = 1;
                var A = [r[1][0], r[1][1]];
                a.beginPath();
                a.moveTo.apply(a, A);
                for (f = 2;
                    f < r.length;
                    f++) {
                        A = [r[f][0], r[f][1]];
                    var B = [r[f - 1][0], r[f - 1][1]];
                    a.quadraticCurveTo(B[0], B[1], B[0] + (A[0] - B[0]) / 2, B[1] + (A[1] - B[1]) / 2)
                } a.lineTo(A[0], A[1]);
                a.stroke()
            }
        } catch (x) { D = !0, C = x } finally {
            try { t || null == N.return || N.return() } finally {
                if (D) throw C;
            }
        }
    } a.restore()
}