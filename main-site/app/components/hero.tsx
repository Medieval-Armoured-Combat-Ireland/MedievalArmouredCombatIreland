'use client';
import React from 'react';
import bg from '../../public/img.jpg';
import { ShieldButton } from './shield-button';
import { faDiscord, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { spectral } from '../styles/font';

// [REVIEW] move to util file ? - overkill ?
const navButtonClick = (navLink: string): void => {
  if (typeof window !== 'undefined') {
    window?.open(navLink, '_blank', 'noreferrer')?.focus();
  }
};

const mailToButtonClick = (mail: string): void => {
  if (typeof window !== 'undefined') {
    window?.open(`mailto:${mail}`, '_blank', 'noreferrer')?.focus();
  }
};

// [END REVIEW]

const heroTextStyle = {
  ...spectral.style,
};

const heroImageStyle = {
  paddingTop: '40%',
  backgroundPosition: '50%',
  backgroundImage: `url(${bg.src})`,
  height: '500px',
};

const heroBgStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.10)',
};

export function Hero() {
  return (
    <section className="mb-auto" style={heroTextStyle}>
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
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 outline-text -papyrus-dark__text">
                Medieval Armoured Combat
                <br />
                <span>Ireland</span>
              </h1>
              <div className="flex justify-center items-center h-full">
                <ShieldButton
                  text="Socials"
                  height="70"
                  width="70"
                  icon={faDiscord}
                  callBack={navButtonClick}
                  params="https://discord.gg/dH6KhHCeQQ"
                />
                <ShieldButton
                  text="Socials"
                  height="70"
                  width="70"
                  icon={faFacebook}
                  callBack={navButtonClick}
                  params="https://www.facebook.com/Irishcombat/"
                />
                <ShieldButton
                  text="Socials"
                  height="70"
                  width="70"
                  icon={faEnvelope}
                  callBack={mailToButtonClick}
                  params="armouredcombatireland@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
