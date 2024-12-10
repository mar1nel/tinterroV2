"use client";

import React from "react";
import "./card-number.css";

interface CardNumberProps {
    number: string | number;
    label: string;
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
    rotate?: string;
}

const CardNumber: React.FC<CardNumberProps> = ({
                                                   number,
                                                   label,
                                                   top,
                                                   right,
                                                   left,
                                                   bottom,
                                                   rotate = "10deg",
                                               }) => {
    return (
        <div
            className="floating-card"
            style={{
                top: top || "auto",
                right: right || "auto",
                left: left || "auto",
                bottom: bottom || "auto",
                transform: `rotate(${rotate})`,
            }}
        >
            <div className="outer">
                <div className="dot"></div>
                <div className="card">
                    <div className="ray"></div>
                    <div className="text">{number}</div>
                    <div>{label}</div>
                    <div className="line topl"></div>
                    <div className="line leftl"></div>
                    <div className="line bottoml"></div>
                    <div className="line rightl"></div>
                </div>
            </div>
        </div>
    );
};

export default CardNumber;