
'use client';
import React from 'react';
import { spectral } from '../../styles/font';
import { ShieldButton } from '../shield-button';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export interface HorizontalItemsSectionProps {
    title: string;
    text: string;
}
const navButtonClick = (navLink: string): void => {
    if (typeof window !== 'undefined') {
        window?.open(navLink, '_blank', 'noreferrer')?.focus();
    }
};

function getClubs(): Array<any> {
    const dundalkClub = () => {
        return (
            <ShieldButton
            text="Socials"
            height="70"
            width="70"
            icon={faEnvelope}
            callBack={navButtonClick}
            params="https://www.facebook.com/Irishcombat/"
            />
        );
    }
    return [dundalkClub()];
}

export default function HorizontalItemsSection(props: HorizontalItemsSectionProps) {
    const items: Array<any> = [];
    switch (props.title) {
        case 'Clubs':
            items.push(...getClubs());

    }
    const sectionClasses = `grid grid-cols-${items.length} mb-auto -papyrus-light__background`;
    const titleContainer = `col-span-${items.length}`
    const formattedItems:Array<any> = [];
    items.forEach((item, index) => {
        const itemClasses = `col-span-${index+1}`;
        formattedItems.push(
            <div className={itemClasses}>
                {item}
            </div>
        )
    });
    return (
        <section className={sectionClasses} id={props.title}>
            <div className={titleContainer}>
                <h1 className="text-2xl md:text-3xl xl:text-3xl font-bold tracking-tight mb-5 mt-5 -black__text" style={spectral.style}>
                    {props.title}
                </h1>
            </div>
            {formattedItems}
        </section>
    );
}
