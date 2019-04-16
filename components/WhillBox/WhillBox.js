import React from 'react';

const whillBox = props => {
    let whill = props.selected.map((v, i) => {
        return <img src={props.pictures[v]} alt="" key={i} />;
    });

    return (
        <div className="WhillBox">
            {whill}
        </div>
    );
};

export default whillBox;