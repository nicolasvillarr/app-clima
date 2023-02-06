import React from 'react'
import {Card} from "./Card.jsx"
import "../styles/Cards/Cards.css"
export const Cards = ({cities, onClose}) => {
  if(cities){
    return (
      <div>
        {cities.map(c=> <Card 
            name={c.name}
            key={c.id}
            max={c.max}
            min={c.min}
            img={c.img.toString()}
            onClose={() => onClose(c.id)}
            id={c.id}
        />)}
      </div>
      )
    }
}
