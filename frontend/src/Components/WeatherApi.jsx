import React, {useEffect, useState} from 'react'
import pollution from '../images/pollution.jpg'
//1c14636e55448521771e673512b3d481
//air_pollution
const WeatherApi = () => {
  const [lat, setlat] = useState('');
  const [lon, setlon] = useState('');
  const [aqi, setaqi] = useState('');
  const [co, setco] = useState('');
  const [aqiDesc, setaqiDesc] = useState('');



  const handleChange1 = (event) => { 
    
    setlat(event.target.value);
    console.log(lat);
  }
  const handleChange2 = (event) => { 
    
    setlon(event.target.value);
    console.log(lon);
  }
  const handleClick = () => { 
    
    console.log(lat, lon);
   fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=1c14636e55448521771e673512b3d481`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setaqi(data.list[0].main.aqi);
     
      console.log(aqi)
      setco(data.list[0].components.co)
    })
    .catch(error => console.log(error));
  }

  // controlQuality(aqi);
  
  
  return (
    <div className="container mt-3 d-flex align-items-center justify-content-center">
      <div class="card" style={{"width": "40rem", "height": "100%"}}>
  <img class="card-img-top" src={pollution} alt="Card image cap" />
  <div class="card-body">
    <h4 class="card-title">The Air Quality is degrading!</h4>
    <h5 class="card-text">Mint your plant NFT now and we'll plant on your behalf!</h5>
    <p> Connect your wallet!</p>
    <p>Check Air Quality of your city:</p>
    <div >
      <input type="text" class="form-control" onChange={handleChange1} placeholder="Enter lat of your city"  />
      <input type="text" class="form-control"  onChange={handleChange2} placeholder="Enter lon of your city"  />
    <button type="button" class="btn btn-dark mt-2"  onClick = {() => handleClick()}>Check</button>
    </div>
    
    <div className='display'>
      <h3 class='text-center name'>Lat: {lat}, Lon: {lon}</h3>
      <h5 class='text-center desc'>The Air Quality Index is: {aqi}</h5>
      <p class='text-center number'>Сoncentration of CO: {co}</p>
      <p className='text-center '><em>(1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.)</em></p>
    </div>
  </div>
</div>
    </div>
  )
}

export default WeatherApi
