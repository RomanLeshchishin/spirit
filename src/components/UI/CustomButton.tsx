import * as React from 'react';

interface ButtonProps{
    classBtn: string,
    text: string
}

const CustomButton = ({classBtn, text} : ButtonProps) => {
    return (
        <div>
            <button className={classBtn}>{text}</button>
        </div>
    );
};

export default CustomButton;
