import React from 'react';

export const DemoPage = (): React.ReactElement => {
    return (
        <div className="demo-page">
            <h1 className="text__header--regular text__colour--dark">
                header regular
            </h1>
            <h1 className="text__header--bold text__colour--medium">
                header bold
            </h1>
            <h1 className="text__header--italic text__colour--parchment-dark">
                header italic
            </h1>
            <h1 className="text__body--regular text__colour--dark">
                body regular
            </h1>
            <h1 className="text__body--bold text__colour--medium">body bold</h1>
            <h1 className="text__body--italic text__colour--parchment-dark">
                body italic
            </h1>
            <h1 className="text__quote--regular text__colour--dark">
                quote regular
            </h1>
            <h1 className="text__quote--bold text__colour--medium">
                quote bold
            </h1>
            <button className="button">Button</button>
            <button className="button button--state__transparent">
                Button
            </button>
            <button className="button button--size__large button--font__upper">
                Button
            </button>
        </div>
    );
};
