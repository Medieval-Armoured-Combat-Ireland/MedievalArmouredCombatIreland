import { Hero } from './components/hero';
import  ImageTextSection, {ImageLocation} from './components/sections/image-text';
import TextFactory from './utils/text-factory';
import React, {use} from 'react';

const textFactory = new TextFactory();

export default function Page() {
  return (
    <div>
      <Hero />
      <ImageTextSection title={'About us'} imageLocation={ImageLocation.LEFT} imageAlt={'group fight'} imageUrl={'/group-2.jpeg'}  text={use(textFactory.loadTextFromFile('public/text/en/about-us-section.md'))}/>
    </div>
  );
}
