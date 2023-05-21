import React from "react";

import { Icon } from '@iconify/react';

import '../../styles/components/card-button/style.css';

interface ICardButton {
    icon: string;
    text: string;
}

export const CardButton: React.FC<ICardButton> = ({ icon, text }) => {
    return (
        <div className="container-cardButton">
            <div>
                <button className="button-card"><><Icon icon={icon} color="white"  width="40" height="40"/></></button>
            </div>
            <span className="text-card">{text}</span>
        </div>
    )
}