import React from 'react';

const test = 'https://source.unsplash.com/random/' + screen.width + 'x500';

export const MaciHero = (): React.ReactElement => {
    return (
        <div className="hero">
            <img src={test} />
            <h1 className="text__header--regular text__colour--dark hero hero__header--centered">
                Welcome to Medieval Armoured Combat Ireland
            </h1>
        </div>
    );
};
