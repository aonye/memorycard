import React from 'react';
import capitalizer from '../externalfunc';

const PictureCard = (props) => {
    const [id] = Object.keys(props.item);
    const image = props.item[id];
    const label = capitalizer(id);
    return (
        <div className='item' id={id}>
            <img src={image} alt={id} width='230px' height='230px' />
            <br></br>
            <label>{label}</label>
        </div>
    );
}

export default PictureCard;

//