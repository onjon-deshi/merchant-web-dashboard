import React from 'react';

// , { name, margin, clr = "#DDDDDD", font_color = "#444444" }
const Button = ({ name, bg_clr, font_color, margin }) => {
    console.log(margin);
    // console.log(props.margin);
    // var bgColor = (bg_clr === undefined ? "#DDDDDD" : bg_clr);
    // // var fontColor = (props.font_color === undefined ? "#444444" : props.font_color);
    // const fontColor = "white"
    return (
        // <button className={`px-5 py-2.5 bg-[${bgColor}] text-${fontColor} rounded cursor-pointer p-[${margin}]`}> {props.name}</button >
        <button style={{ marginInline: margin }} className={`px-5 py-2.5 rounded cursor-pointer bg-${bg_clr === undefined ? "[#DDDDDD]" : "primary"} text-${font_color === undefined ? "secondary" : "white"}`}>{name}</ button>

    );
};

export default Button;