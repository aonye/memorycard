import React from 'react';

const PictureCard = (props) => {
    let id;
    let image;
    for (let key in props.item) {
        id = key;
        image = props.item[key];
    }
    return (
        <div>
            <img src={image} alt={id} width='230px' height='230px' />
        </div>
    );
}

export default PictureCard;