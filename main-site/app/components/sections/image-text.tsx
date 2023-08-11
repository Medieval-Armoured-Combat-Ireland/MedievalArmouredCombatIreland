
import Image from 'next/image';
import React, {use} from 'react';
import { spectral } from '../../styles/font';



export enum ImageLocation {
    LEFT,
    RIGHT
}
export interface ImageTextSectionProps {
    title: string;
    imageUrl: string;
    imageAlt: string;
    text: string;
    imageLocation: ImageLocation;
}

export default function ImageTextSection(props: ImageTextSectionProps) {

    const imageOrder = props.imageLocation === ImageLocation.LEFT ? 'order-first' : 'order-last';
    const textOrder = props.imageLocation === ImageLocation.LEFT ? 'order-last' : 'order-first';
    return (
        <section className="grid grid-cols-2 mb-auto -papyrus-light__background">
        <div className={imageOrder}>
          <Image
            className="place-self-center"
            src={props.imageUrl}
            width={550}
            height={400}
            alt="Duel"
          />
        </div>
        <div className={textOrder}>
          <h1
            className="text-2xl md:text-3xl xl:text-3xl font-bold tracking-tight mb-5 mt-5 -black__text"
            style={spectral.style}
          >
           {props.title}
          </h1>
          <p className="text-1xl md:text-1xl xl:text-1xl tracking-tight mb-5 -black__text" dangerouslySetInnerHTML={{__html: props.text}} />
        </div>
      </section>
    );
}