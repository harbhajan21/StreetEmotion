export const CATEGORIES = [
  { id: 'T-SHIRTS', label: 'Tees' },
  { id: 'HOODIES', label: 'Hoodies' },
  { id: 'PANTS', label: 'Pants' },
  { id: 'OUTERWEAR', label: 'Outerwear' },
];

export const MOODS = [
  { id: 'CHAOS', label: 'Chaos', line: 'Raw edges and loud texture.' },
  { id: 'VOID', label: 'Void', line: 'Quiet colour and a lot of weight.' },
  { id: 'RAGE', label: 'Rage', line: 'All black, built to move.' },
  { id: 'STATIC', label: 'Static', line: 'Washed, faded, easy.' },
];

const titles = { OVERSIZED: 'Oversized', 'BOXY FIT': 'Boxy', RELAXED: 'Relaxed' };
export const fitLabel = (fit) => titles[fit] || fit;
export const categoryLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label || 'Shop all';
export const moodLabel = (id) => MOODS.find((m) => m.id === id)?.label || '';
