import React from 'react';

const buttons = props => (
    <div className="Buttons">
        <button onClick={props.start} type="button">start</button>
        <button onClick={props.stop} type="button" disabled={props.stopAction}>stop</button>
    </div>
);

export default buttons;