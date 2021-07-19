import React from 'react';
import { getChoiceImage } from '../utils';

const choice = ({ data, playChoice }) => {
    let image = getChoiceImage(data.id);
    
    return (
        <span className={`choice ${"choice-" + data.id} d-flex align-items-center justify-content-center`} 
                onClick={() => {
                    playChoice(data);
                }}>
            <img src={image} className="img-fluid" alt={data.name} />
        </span>
    );
}

export default choice;
