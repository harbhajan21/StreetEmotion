import React from 'react';

const FIELDS = [
  { name: 'name', label: 'Full name', autoComplete: 'name', wide: true },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { name: 'address', label: 'Address', autoComplete: 'street-address', wide: true },
  { name: 'city', label: 'City', autoComplete: 'address-level2' },
  { name: 'state', label: 'State', autoComplete: 'address-level1' },
  { name: 'pin', label: 'PIN code', autoComplete: 'postal-code', inputMode: 'numeric', pattern: '[0-9]{6}', title: 'Six digits' },
];

export default function AddressFields({ value, onChange, required = false }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {FIELDS.map(({ name, label, wide, ...input }) => (
        <div key={name} className={wide ? 'sm:col-span-2' : ''}>
          <label className="label" htmlFor={`a-${name}`}>{label}</label>
          <input id={`a-${name}`} name={name} className="field" required={required} {...input} value={value[name] || ''} onChange={(e) => onChange({ ...value, [name]: e.target.value })} />
        </div>
      ))}
    </div>
  );
}
