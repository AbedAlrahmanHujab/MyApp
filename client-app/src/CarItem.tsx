import React from 'react'
import { ICar } from "./Cars";

export interface IProps{
    car:ICar;
}

export const CarItem:React.FC<IProps> = ({car}) => {
    return (
        <li>
            {car.model}-{car.color}-{car.topspeed}
        </li>
    )
}
        