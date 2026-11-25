import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import Sheet from './Sheet';

// Garment measurements in inches: chest (full), length, shoulder. Confirm against your own patterns.
const ROWS = [
  ['S', '41–43', '28.5', '21'],
  ['M', '44–46', '29.5', '22'],
  ['L', '47–49', '30.5', '23'],
  ['XL', '50–52', '31.5', '24'],
  ['XXL', '53–55', '32.5', '25'],
];
const toCm = (v) => v.split('–').map((n) => Math.round(Number(n) * 2.54)).join('–');

export default function SizeGuideModal() {
  const { panel, setPanel } = useShop();
  const [unit, setUnit] = useState('in');

  return (
    <Sheet open={panel === 'size'} onClose={() => setPanel(null)} title="Size guide" side="center" className="!max-w-2xl">
      <div className="p-5 sm:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-sm text-sm text-stone">Tops and outerwear, measured flat. The fit is already oversized, so take your usual size, or one down for a closer fit.</p>
          <div className="flex" role="group" aria-label="Units">
            {['in', 'cm'].map((u) => (
              <button key={u} type="button" aria-pressed={unit === u} onClick={() => setUnit(u)} className={`chip ${unit === u ? 'chip-on' : ''}`}>{u}</button>
            ))}
          </div>
        </div>
        <table className="w-full text-left text-sm tabular-nums">
          <thead><tr className="border-b border-ink">{['Size', 'Chest', 'Length', 'Shoulder'].map((h) => <th key={h} className="py-3 font-semibold">{h}</th>)}</tr></thead>
          <tbody>
            {ROWS.map(([size, ...values]) => (
              <tr key={size} className="border-b border-line">
                <th scope="row" className="py-3 font-semibold">{size}</th>
                {values.map((v, i) => <td key={i} className="py-3">{unit === 'cm' ? toCm(v) : v}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Sheet>
  );
}
