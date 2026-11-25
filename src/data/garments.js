// Temporary product illustrations, drawn in each product's own colour.
// Replace a product's `image` / `images` in products.js with real photos when ready.
const TONES = {
  Black: ['#2b2b2f', '#141416', '#08080a'],
  White: ['#ffffff', '#f3f2ee', '#c9c6bf'],
  Grey: ['#9a9ca1', '#7c7f85', '#55585e'],
  'Acid Wash': ['#8fa0b3', '#66788c', '#435266'],
};

const LONG_BODY = 'M350 345 L250 380 Q190 405 170 520 L118 860 L202 882 L256 640 L250 905 Q450 922 650 905 L644 640 L698 882 L782 860 L730 520 Q710 405 650 380 L550 345 Q450 400 350 345Z';
const CUFFS = '<path d="M124 825 L208 848 M776 825 L692 848 M251 862 Q450 880 649 862"/>';
const SEAMS = '<path d="M256 640 Q268 500 285 400 M644 640 Q632 500 615 400"/>';
const LEGS = 'M305 215 L595 215 L628 420 L668 1000 L508 1006 L456 505 L444 505 L392 1006 L232 1000 L272 420Z';
const WAIST = '<path d="M299 258 L601 258 M450 258 L450 500 M312 262 Q330 345 283 372 M588 262 Q570 345 617 372"/>';
const HOOD = '<path fill="url(#g)" d="M325 365 Q322 195 450 185 Q578 195 575 365 Q520 440 450 462 Q380 440 325 365Z"/><path fill="#000" fill-opacity=".45" d="M372 345 Q380 240 450 234 Q520 240 528 345 Q495 400 450 416 Q405 400 372 345Z"/>';
const HOOD_LINE = 'M325 365 Q380 440 450 462 Q520 440 575 365';

const SHAPES = {
  tee: {
    body: 'M345 310 L235 350 Q190 370 165 420 L95 590 L205 640 L250 560 L245 930 Q450 948 655 930 L650 560 L695 640 L805 590 L735 420 Q710 370 665 350 L555 310 Q450 400 345 310Z',
    lines: '<path d="M326 318 Q450 432 574 318 M112 570 L218 618 M788 570 L682 618 M246 908 Q450 926 654 908 M250 560 Q258 450 285 366 M650 560 Q642 450 615 366"/>',
  },
  hoodie: {
    body: LONG_BODY,
    top: HOOD,
    lines: `${CUFFS}${SEAMS}<path d="${HOOD_LINE} M335 830 L335 760 L392 665 L508 665 L565 760 L565 830Z"/>`,
  },
  zip: {
    body: LONG_BODY,
    top: HOOD,
    lines: `${CUFFS}${SEAMS}<path d="${HOOD_LINE} M335 840 L335 770 L385 680 L435 680 L435 840 M565 840 L565 770 L515 680 L465 680 L465 840"/><path stroke="#b9bbc0" stroke-width="5" stroke-dasharray="7 4" d="M450 462 L450 912"/>`,
  },
  cargo: {
    body: LEGS,
    lines: `${WAIST}<path d="M266 560 L366 560 L360 760 L254 760Z M263 605 L365 605 M634 560 L534 560 L540 760 L646 760Z M637 605 L535 605 M263 850 Q320 870 385 852 M637 850 Q580 870 515 852"/>`,
  },
  track: {
    body: LEGS,
    lines: `${WAIST}<path d="M352 270 L318 1000 M548 270 L582 1000 M430 262 L422 360 M470 262 L478 360 M236 965 L394 970 M664 965 L506 970"/>`,
  },
  jacket: {
    body: LONG_BODY,
    top: '<path fill="url(#g)" d="M350 345 L372 305 Q450 345 528 305 L550 345 L582 425 L450 400 L318 425Z"/>',
    lines: `${CUFFS}${SEAMS}<path d="M318 425 L450 400 L582 425 M372 305 Q450 345 528 305 M438 402 L438 912 M300 500 L402 500 M498 500 L600 500 M318 500 L318 600 L360 625 L402 600 L402 500 M498 500 L498 600 L540 625 L582 600 L582 500"/><g fill="#d8d8d8" stroke="none"><circle cx="454" cy="450" r="6"/><circle cx="454" cy="550" r="6"/><circle cx="454" cy="650" r="6"/><circle cx="454" cy="750" r="6"/><circle cx="454" cy="840" r="6"/></g>`,
  },
  gilet: {
    body: 'M360 290 L355 350 L262 385 Q300 500 250 620 L245 915 Q450 935 655 915 L650 620 Q600 500 638 385 L545 350 L540 290 Q450 320 360 290Z',
    lines: '<path d="M355 350 Q450 385 545 350 M278 470 Q450 500 622 470 M268 575 Q450 605 632 575 M248 685 Q450 715 652 685 M247 795 Q450 825 653 795"/><path stroke="#b9bbc0" stroke-width="5" stroke-dasharray="7 4" d="M450 312 L450 925"/>',
  },
};

export function garment(kind, color) {
  const shape = SHAPES[kind];
  const [hi, mid, lo] = TONES[color];
  const ink = color === 'Black' ? '#5a5a61' : '#00000066';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" width="900" height="1200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${hi}"/><stop offset=".55" stop-color="${mid}"/><stop offset="1" stop-color="${lo}"/></linearGradient><radialGradient id="b" cy=".42" r=".8"><stop stop-color="#e2dfd9"/><stop offset="1" stop-color="#bdb9b1"/></radialGradient><filter id="s" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="22" stdDeviation="22" flood-opacity=".28"/></filter></defs><rect width="900" height="1200" fill="url(#b)"/><g filter="url(#s)"><path fill="url(#g)" d="${shape.body}"/>${shape.top || ''}</g><g fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${shape.lines}</g><text x="40" y="1155" font-family="Arial,sans-serif" font-size="23" letter-spacing="0" fill="#57534e">Illustration. Photo coming soon.</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
