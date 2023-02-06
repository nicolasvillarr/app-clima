
import { useState } from 'react';
import './App.css';
import { Cards } from './components/Cards';
import { Nav } from './components/Nav';
import axios from "axios"
import Swal from 'sweetalert2'

function App() {

  const [cities, setCities]= useState([])
  
  // const searchCity = (cities) => {
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${"4ae2636d8dfbdc3044bede63951a019b"}&units=metric`)
  //   .then(r=>r.json())
  //   .then(e=>{
  //     if(e.main !== undefined){
  //       const city = {
  //         min: (e.main.temp_min),
  //         max: (e.main.temp_max),
  //         img: e.weather[0].icon,
  //         id: e.id,
  //         wind: e.wind.speed,
  //         temp: e.main.temp,
  //         name: e.name,
  //         weather: e.weather[0].main,
  //         clouds: e.clouds.all,
  //         latitud: e.coord.lat,
  //         longitud: e.coord.lon
  //       };
  //       setCities(state => [...state, city])
  //     } else {
  //         Swal.fire('',`${cities} no existe`,'question')
  //       }
  //   });
  // }
  const searchCity = (cities) =>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${"4ae2636d8dfbdc3044bede63951a019b"}&units=metric`)
      .then(response => {
        const e = response.data
        if (e !== undefined) {
                  const city = {
          min: (e.main.temp_min),
          max: (e.main.temp_max),
          img: e.weather[0].icon,
          id: e.id,
          wind: e.wind.speed,
          temp: e.main.temp,
          name: e.name,
          weather: e.weather[0].main,
          clouds: e.clouds.all,
          latitud: e.coord.lat,
          longitud: e.coord.lon
        };
                setCities(state => [...state, city])    
        }
      }).catch( 
        console.log("1"),
        // !cities ? 
        // Swal.fire('','Por favor pon el nombre de un pais o ciudad','warning')
        // :
        // Swal.fire('',`${cities} no existe`,'question')
      ) 
  }
  const deleteCard = (id)=>{
    setCities(state => {
      return state.filter(city => city.id !== id)
    })
  }
  return (
      <div>
        <h1 className="title">CLIMA
          <img height={"50px"} src='https://cdn-icons-png.flaticon.com/512/1116/1116707.png' alt=''/>
        </h1>
      <div>
        <Nav onSearch={searchCity}/>
        <Cards onClose={deleteCard} cities={cities}/>
      </div>
    </div>
  );
}

export default App;
