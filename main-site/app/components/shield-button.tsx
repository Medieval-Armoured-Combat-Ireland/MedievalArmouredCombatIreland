'use client';
import React from 'react';

interface ShieldButtonProps {
  text?: string;
}
export function ShieldButton(props: ShieldButtonProps) {
  return (
    <button
      type="button"
      className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      {props.text ?? ''}
    </button>
  );
}
