import React from 'react';

const PictureCard = (props) => {
    const id = Object.keys(props.item);
    const image = props.item[id];
    return (
        <div>
            <img src={image} alt={id} width='230px' height='230px' />
        </div>
    );
}

export default PictureCard;