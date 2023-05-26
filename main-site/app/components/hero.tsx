'use client';
import { Spectral_SC } from 'next/font/google';
import React from 'react';
import bg from '../../public/img.jpg';
import { ShieldButton } from './shield-button';
const spectral = Spectral_SC({
  weight: '500',
  style: 'normal',
  subsets: ['latin'],
});
const heroTextStyle = {
  ...spectral.style,
};

const heroImageStyle = {
  backgroundPosition: '50%',
  backgroundImage: `url(${bg.src})`,
  height: '500px',
};

const heroBgStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.10)',
};

export function Hero() {
  return (
    <section className="mb-40" style={heroTextStyle}>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={heroImageStyle}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={heroBgStyle}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Medieval Armoured Combat
                <br />
                <span>Ireland</span>
              </h1>
              <ShieldButton text="Socials" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
