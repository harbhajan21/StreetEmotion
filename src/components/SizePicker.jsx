import React from 'react';

export default function SizePicker({ sizes, value, onChange, onGuide }) {
  return (
    <fieldset>
      <div className="mb-2 flex items-center justify-between">
        <legend className="float-left text-sm font-medium">{value ? `Size ${value}` : 'Choose a size'}</legend>
        <button type="button" className="link text-sm" onClick={onGuide}>Size guide</button>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            aria-pressed={value === size}
            onClick={() => onChange(size)}
            className={`min-h-[48px] rounded border text-sm font-semibold transition-colors ${value === size ? 'border-ink bg-ink text-paper' : 'border-stone hover:border-ink hover:bg-paper'}`}
          >
            {size}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
