import React from 'react';

export const DemoPage = (): React.ReactElement => {
    return (
        <div className="demo-page">
            <h1 className="typography__header--regular typography__colour--dark">H1 header regular</h1>
            <h1 className="typography__header--bold typography__colour--medium">H1 header bold</h1>
            <h1 className="typography__header--italic typography__colour--parchment-dark">H1 header italic</h1>
            <h1 className="typography__body--regular typography__colour--dark">H1 body regular</h1>
            <h1 className="typography__body--bold typography__colour--medium">H1 body bold</h1>
            <h1 className="typography__body--italic typography__colour--parchment-dark">H1 body italic</h1>
            <h1 className="typography__quote--regular typography__colour--dark">H1 quote regular</h1>
            <h1 className="typography__quote--bold typography__colour--medium">H1 body bold</h1>
        </div>
    );
};
