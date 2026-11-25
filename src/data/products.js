import { garment } from './garments';

// Photos named <product id>.jpg, <product id>-2.jpg, ... in this folder replace the illustration.
const files = import.meta.glob('../assets/products/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });

const photosFor = (id) =>
  Object.keys(files)
    .map((path) => ({ path, match: path.match(/([^/]+?)(?:-([2-9]))?\.\w+$/) }))
    .filter(({ match }) => match[1] === id)
    .sort((a, b) => Number(a.match[2] || 1) - Number(b.match[2] || 1))
    .map(({ path }) => files[path]);

const make = (p) => {
  const photos = photosFor(p.id);
  const images = photos.length ? photos : [garment(p.kind, p.color)];
  return { category: 'MEN', image: images[0], images, ...p };
};

export const PRODUCTS = [
  make({
    id: 'crest-tee-001', mood: 'CHAOS', kind: 'tee', name: 'Crest Heavyweight Tee', price: 699,
    style: 'T-SHIRTS', fit: 'OVERSIZED', color: 'White', gsm: '320 GSM', fabric: '100% combed cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], stock: 14, featured: true,
    description: 'A heavyweight cotton tee with dropped shoulders and a dense ribbed collar. Cut oversized, with a clean, structured drape.',
    details: ['Pre-shrunk', 'Ribbed crew collar', 'Dropped shoulders'],
  }),
  make({
    id: 'oversized-hoodie-003', mood: 'VOID', kind: 'hoodie', name: '500 GSM Boxy Hoodie', price: 1499,
    style: 'HOODIES', fit: 'OVERSIZED', color: 'Grey', gsm: '500 GSM', fabric: '100% cotton French terry',
    sizes: ['S', 'M', 'L', 'XL'], stock: 5, featured: true,
    description: 'A substantial boxy hoodie with a crossover hood and no drawcords. Simple, warm and made to hold its shape.',
    details: ['Crossover hood', 'Kangaroo pocket', 'Ribbed cuffs and hem'],
  }),
  make({
    id: 'tactical-cargo-005', mood: 'RAGE', kind: 'cargo', name: 'Modular Ripstop Cargo', price: 1599,
    style: 'PANTS', fit: 'RELAXED', color: 'Black', gsm: '290 GSM', fabric: '100% ripstop cotton',
    sizes: ['S', 'M', 'L', 'XL'], stock: 8, featured: true,
    description: 'Relaxed cargo pants in ripstop cotton, with roomy side pockets and adjustable ankles for a straight or tapered leg.',
    details: ['Cargo pockets', 'Shaped knees', 'Adjustable ankles'],
  }),
  make({
    id: 'deconstructed-jacket-006', mood: 'CHAOS', kind: 'jacket', name: 'Raw Edge Denim Jacket', price: 1999,
    style: 'OUTERWEAR', fit: 'BOXY FIT', color: 'Acid Wash', gsm: '14.5 oz', fabric: '100% cotton denim',
    sizes: ['S', 'M', 'L', 'XL'], stock: 4, featured: true,
    description: 'A boxy denim jacket with an acid-wash finish, dropped armholes and a raw-cut hem.',
    details: ['Acid-wash finish', 'Metal buttons', 'Raw hem'],
  }),
  make({
    id: 'thermal-puffer-012', mood: 'VOID', kind: 'gilet', name: 'Thermal Puffer Gilet', price: 1799,
    style: 'OUTERWEAR', fit: 'OVERSIZED', color: 'Black', gsm: '', fabric: 'Matte nylon shell, down-alternative fill',
    sizes: ['S', 'M', 'L', 'XL'], stock: 6, isNew: true,
    description: 'An oversized sleeveless puffer with a high collar. An easy layer over hoodies and heavyweight tees.',
    details: ['High collar', 'Two-way front zip', 'Concealed pockets'],
  }),
  make({
    id: 'acid-wash-tee-013', mood: 'STATIC', kind: 'tee', name: 'Vintage Slub Tee', price: 499,
    style: 'T-SHIRTS', fit: 'BOXY FIT', color: 'Grey', gsm: '300 GSM', fabric: '100% slub cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], stock: 19, isNew: true,
    description: 'A boxy tee in textured slub cotton with a soft, washed-down look.',
    details: ['Mineral wash', 'Taped shoulder seams', 'Wide ribbed neck'],
  }),
  make({
    id: 'double-knit-pant-014', mood: 'VOID', kind: 'track', name: 'Heavyweight Track Pant', price: 1199,
    style: 'PANTS', fit: 'RELAXED', color: 'Black', gsm: '420 GSM', fabric: 'Double-knit cotton blend',
    sizes: ['S', 'M', 'L', 'XL'], stock: 11, isNew: true,
    description: 'A heavyweight track pant with a stitched front crease and zipped ankles.',
    details: ['Front pintuck', 'Zipped ankles', 'Zipped pockets'],
  }),
  make({
    id: 'heavy-zip-hoodie-015', mood: 'RAGE', kind: 'zip', name: 'Full-Zip Runner Hoodie', price: 1699,
    style: 'HOODIES', fit: 'OVERSIZED', color: 'Black', gsm: '480 GSM', fabric: '100% cotton heavy terry',
    sizes: ['S', 'M', 'L', 'XL'], stock: 7, isNew: true,
    description: 'A heavyweight full-zip hoodie with a two-way zip and an oversized fit, made for layering.',
    details: ['Two-way zip', 'Ribbed cuffs and hem', 'Lined hood'],
  }),
];
