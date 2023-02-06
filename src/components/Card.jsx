import React from 'react'
import "../styles/Card/Card.css"
export const Card = (props) => {
  return (
    <div className='cardCont'>
      <button className='btn' onClick={props.onClose}>X</button>
      <h1>{props.name}</h1>
      <h3 className='contTemp'>
      Temperatura
      <h4>max{Math.round(props.max)}°C</h4>
      <h4>min{Math.round(props.min)}°C</h4>
      </h3>
      <img 
          img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png `}
          alt="no img"
        ></img>
        <h6>{props.id}</h6>
    </div>
  )
}