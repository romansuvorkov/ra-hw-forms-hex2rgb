import React from 'react';

export default function ResultBox(props) {
    const {RGBValue} = props;
    return (
    <span className="result">{RGBValue}</span>
    );

}