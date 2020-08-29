import React, { useEffect } from 'react';

function StyledText(props) {
    useEffect(() => {
        console.log('USE EFFECT CALLED');
    })
    const style = {
        color: props.color
    }
    return (
        <div className="styled-text">
            <p style={style}>{props.text}</p>
        </div>
    );
}

export default StyledText;
