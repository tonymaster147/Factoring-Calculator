/* ============================================================
   FACTORING MATH ENGINE
   Pure functions — no UI, no React. Fully unit-testable.
   Ported 1:1 from the Claude Design source and verified.
   ============================================================ */

export const gcd = (a, b) => {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { const t = a % b; a = b; b = t; }
  return a;
};

const SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
export const sup = (n) => String(n).split('').map((c) => SUP[c] || c).join('');

export const divisorsOf = (n) => {
  n = Math.abs(n);
  if (n === 0) return [1];
  const d = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) { d.push(i); if (i !== n / i) d.push(n / i); }
  }
  return d.sort((a, b) => a - b);
};

const polyToStr = (c, v) => {
  const out = [];
  for (let i = c.length - 1; i >= 0; i--) {
    const co = c[i]; if (!co) continue;
    const a = Math.abs(co), sgn = co < 0 ? '-' : '+';
    const term = i === 0 ? String(a) : ((a === 1 ? '' : String(a)) + (i === 1 ? v : v + sup(i)));
    out.push([sgn, term]);
  }
  if (!out.length) return '0';
  let s = out[0][0] === '-' ? '-' + out[0][1] : out[0][1];
  for (let k = 1; k < out.length; k++) s += ' ' + out[k][0] + ' ' + out[k][1];
  return s;
};

const polyDivExact = (P, D) => {
  P = P.slice(); const dp = P.length - 1, dd = D.length - 1;
  if (dp < dd) return null;
  const q = new Array(dp - dd + 1).fill(0);
  for (let i = dp; i >= dd; i--) {
    const coef = P[i];
    if (coef === 0) { q[i - dd] = 0; continue; }
    if (coef % D[dd] !== 0) return null;
    const f = coef / D[dd];
    q[i - dd] = f;
    for (let j = 0; j <= dd; j++) P[i - dd + j] -= f * D[j];
  }
  for (let i = 0; i < dd; i++) if (P[i] !== 0) return null;
  return q;
};

const makePrimitive = (arr) => {
  let g = 0; for (const c of arr) g = gcd(g, c); if (g === 0) g = 1;
  const lead = arr[arr.length - 1]; const sign = lead < 0 ? -1 : 1;
  return arr.map((c) => c / (g * sign));
};

const factorPrimitive = (prim) => {
  let poly = prim.slice(); const factors = []; let guard = 0;
  while (poly.length - 1 >= 1 && guard++ < 60) {
    const deg = poly.length - 1;
    if (deg === 1) { factors.push(makePrimitive(poly)); poly = [1]; break; }
    const a0 = poly[0], an = poly[deg];
    const ps = divisorsOf(a0), qs = divisorsOf(an);
    let done = false;
    for (const q of qs) {
      for (const p of ps) {
        for (const s of [1, -1]) {
          const D = [-s * p, q];
          const quo = polyDivExact(poly, D);
          if (quo) { factors.push(makePrimitive(D)); poly = quo; done = true; break; }
        }
        if (done) break;
      }
      if (done) break;
    }
    if (!done) break;
  }
  if (poly.length - 1 >= 1) factors.push(makePrimitive(poly));
  else { const c = poly[0]; if (c < 0 && factors.length) factors[0] = factors[0].map((x) => -x); }
  return factors;
};

const factoredToStr = (mon, v, factors) => {
  const key = (f) => f.join(',');
  const groups = [];
  for (const f of factors) {
    const ex = groups.find((x) => x.key === key(f));
    if (ex) ex.exp++; else groups.push({ key: key(f), f, exp: 1 });
  }
  let out = mon;
  for (const gp of groups) out += '(' + polyToStr(gp.f, v) + ')' + (gp.exp > 1 ? sup(gp.exp) : '');
  return out || '0';
};

const parsePoly = (raw) => {
  let s = raw.replace(/\s+/g, '').replace(/[−–—]/g, '-').replace(/\*/g, '').replace(/=0$/, '');
  if (!s) return null;
  if (/[^0-9a-zA-Z+\-^.]/.test(s)) return null;
  const vm = s.match(/[a-zA-Z]/); const v = vm ? vm[0].toLowerCase() : 'x';
  if (s[0] !== '+' && s[0] !== '-') s = '+' + s;
  const terms = s.match(/[+-][^+-]+/g);
  if (!terms) return null;
  const coeffs = {};
  for (const t of terms) {
    const sign = t[0] === '-' ? -1 : 1;
    const body = t.slice(1);
    const vi = body.toLowerCase().indexOf(v);
    if (vi >= 0) {
      const cPart = body.slice(0, vi); const rest = body.slice(vi + 1);
      const c = cPart === '' ? 1 : parseFloat(cPart);
      let p = 1;
      if (rest.startsWith('^')) p = parseInt(rest.slice(1), 10);
      else if (rest !== '') return null;
      if (!isFinite(c) || !isFinite(p)) return null;
      coeffs[p] = (coeffs[p] || 0) + sign * c;
    } else {
      const c = parseFloat(body); if (!isFinite(c)) return null;
      coeffs[0] = (coeffs[0] || 0) + sign * c;
    }
  }
  const keys = Object.keys(coeffs).map(Number);
  const maxP = Math.max(0, ...keys);
  if (maxP > 12) return null;
  const arr = new Array(maxP + 1).fill(0);
  for (const k in coeffs) {
    const val = coeffs[k];
    if (Math.abs(val - Math.round(val)) > 1e-9) return null;
    arr[k] = Math.round(val);
  }
  return { v, coeffs: arr };
};

const polySteps = (v, info) => {
  const steps = [];
  if (info.hadGCF) steps.push('Factor out the greatest common factor  ' + (info.mon || '1') + ':  ' + (info.mon || '') + '(' + polyToStr(info.prim, v) + ')');
  const pdeg = info.prim.length - 1;
  if (pdeg === 2 && info.factors.length >= 2) {
    const a = info.prim[2], b = info.prim[1], c = info.prim[0];
    steps.push('Apply the AC method to  ' + polyToStr(info.prim, v) + ':  find two numbers whose product is a·c = ' + (a * c) + ' and whose sum is b = ' + b + '.');
  }
  if (info.factors.length > 1 && pdeg >= 2) steps.push('Group the terms and write each factor.');
  const fstr = factoredToStr(info.mon, v, info.factors);
  if (info.factors.length > 1 || info.hadGCF) steps.push('Factored form:  ' + fstr);
  else steps.push(polyToStr(info.prim, v) + ' has no rational factors, so it is already prime.');
  return steps;
};

export const factorPolynomial = (raw) => {
  const parsed = parsePoly(raw);
  if (!parsed) return { type: 'error', message: 'Could not read that expression. Use one variable, e.g. x^2 + 5x + 6.' };
  const { v } = parsed;
  let coeffs = parsed.coeffs;
  while (coeffs.length > 1 && coeffs[coeffs.length - 1] === 0) coeffs.pop();
  if (coeffs.length === 1) return { type: 'error', message: 'That is just a constant — enter a polynomial like x^2 - 9.' };
  const inputPretty = polyToStr(coeffs, v);
  let g = 0; for (const c of coeffs) g = gcd(g, c);
  let low = 0; while (coeffs[low] === 0) low++;
  const lead = coeffs[coeffs.length - 1]; const sign = lead < 0 ? -1 : 1; const common = g;
  const prim = coeffs.slice(low).map((c) => c / (common * sign));
  const factors = factorPrimitive(prim);
  const hadGCF = common > 1 || low > 0 || sign < 0;
  let mon = '';
  if (sign < 0) mon += '-';
  if (common > 1) mon += common;
  if (low > 0) mon += v + (low > 1 ? sup(low) : '');
  const factored = factoredToStr(mon, v, factors);
  const isPrime = !hadGCF && factors.length === 1;
  const steps = polySteps(v, { mon, hadGCF, prim, factors, common, low });
  return { type: 'poly', v, inputPretty, factored: isPrime ? inputPretty : factored, isPrime, steps };
};

export const factorNumber = (raw) => {
  let n = parseInt(raw, 10);
  if (!isFinite(n)) return { type: 'error', message: 'Enter a whole number, e.g. 360.' };
  const sign = n < 0 ? '-' : ''; n = Math.abs(n);
  if (n === 0) return { type: 'error', message: '0 has infinitely many factors — enter a non-zero whole number.' };
  if (n > 1e12) return { type: 'error', message: 'That number is too large to factor quickly. Try a value under 1,000,000,000,000.' };
  if (n === 1) return { type: 'number', display: sign + '1', primePretty: '1', isPrime: false, divisors: [1], pairs: [{ a: 1, b: 1 }], count: 1, steps: ['1 has only itself as a factor.'] };

  // prime factorization
  const pf = []; let m = n, d = 2;
  while (d * d <= m) { while (m % d === 0) { pf.push(d); m /= d; } d += d === 2 ? 1 : 2; }
  if (m > 1) pf.push(m);
  const groups = [];
  for (const p of pf) {
    const g = groups[groups.length - 1];
    if (g && g.base === p) g.exp++; else groups.push({ base: p, exp: 1 });
  }
  const isPrime = pf.length === 1;
  const primePretty = groups.map((g) => (g.exp > 1 ? g.base + sup(g.exp) : '' + g.base)).join(' × ');

  // divisors + pairs
  const small = [];
  for (let i = 1; i * i <= n; i++) if (n % i === 0) small.push(i);
  const divisors = [];
  for (let i = 1; i * i <= n; i++) if (n % i === 0) { divisors.push(i); if (i !== n / i) divisors.push(n / i); }
  divisors.sort((a, b) => a - b);
  const pairs = small.map((i) => ({ a: i, b: n / i }));

  // steps
  const steps = [];
  if (isPrime) steps.push(n + ' is a prime number — its only factors are 1 and ' + n + '.');
  else {
    const acc = []; let mm = n; let dd = 2; const lines = [];
    while (dd * dd <= mm) { while (mm % dd === 0) { acc.push(dd); mm /= dd; lines.push(acc.join(' × ') + (mm > 1 ? ' × ' + mm : '')); } dd += dd === 2 ? 1 : 2; }
    if (mm > 1) { acc.push(mm); lines.push(acc.join(' × ')); }
    lines.slice(0, -1).forEach((l) => steps.push(l));
    steps.push('Prime factorization:  ' + primePretty);
  }
  return { type: 'number', display: sign + n, primePretty: sign ? sign + '(' + primePretty + ')' : primePretty, isPrime, divisors, pairs, count: divisors.length, steps };
};

/**
 * Top-level entry point used by the UI.
 * @param {string} raw   the user's input
 * @param {string} mode  'auto' | 'number' | 'polynomial'
 */
export const factor = (raw, mode) => {
  raw = (raw || '').trim();
  if (!raw) return { type: 'error', message: 'Enter a number or expression to factor.' };
  let useMode = mode;
  const isNum = /^[-+]?\d+$/.test(raw.replace(/\s/g, ''));
  if (useMode === 'auto') useMode = isNum ? 'number' : 'polynomial';
  try {
    return useMode === 'number' ? factorNumber(raw) : factorPolynomial(raw);
  } catch (e) {
    return { type: 'error', message: 'Could not parse that input. Try something like x^2 + 5x + 6 or 360.' };
  }
};
