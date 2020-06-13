import React, { useState } from 'react';
import Input from './Input';
import ResultBox from './ResultBox';
import valueCheck from './valueCheck';
import colorConverter from './colorConverter';

export default function Converter() {
    const [hexValue, setHex] = useState('#ffffff');
    const [RGBValue, setRGB] = useState('rgb(255, 255, 255)');
    let errorInput = false;


    const handleChange = (value) => {
        setHex(value);
        if (value.length === 7 && valueCheck(value)) {
            setRGB(colorConverter(value));
        } else if (value.length >= 7 && !valueCheck(value)) {
            errorInput =  true;
            setRGB('#Ошибка');
        }
    }

    return (
        <div className="background_wrapper" style={{backgroundColor: `rgb(${RGBValue})`}}>
            <div className="inreface_wrapper">
                <Input onChange={handleChange} />
                <ResultBox RGBValue={!errorInput ? RGBValue : `rgb(${RGBValue})`}/>    
            </div>
        </div>
    );

}