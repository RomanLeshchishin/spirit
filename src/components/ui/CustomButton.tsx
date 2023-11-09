import * as React from 'react';

const CustomButton = ({text, ...props}) => {
    return (
        <button {...props}>{text}</button>
    );
};

export default CustomButton;
