import { useState } from "react";
import axios from "axios";
import WeatherCard from "../weatherCard";

let Home = ()=> {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState([]);
    const [callCity, setCallCity] = useState('');
    const submitHandler = async (e) =>{
        e.preventDefault();
        console.log(city);
        setCallCity(city);
        try {
           let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`);
           setWeather(response.data.list) ;

          console.log(response.data.list);

        } catch (error) {
            console.log('error', error);
        }

    }
   
    return <div>
      
                    <form onSubmit={submitHandler} >
                    <main>
	<h1>SEARCH Weather For City</h1>
	
	<div class="SearchBox">
		<input type="text" onChange={(e)=>( setCity(e.target.value))} required value={city} class="SearchBox-input" placeholder="Enter City Name" />
	
			<button class="SearchBox-button">
				<i class="SearchBox-icon  material-icons">search</i>
			</button>
		
	</div>
	
</main>
                        {/* <label htmlFor="city">Enter City Name</label> */}
                        {/* <input type="text" id="city" onChange={(e)=>( setCity(e.target.value))} required value={city} placeholder="Karachi...." /> */}
                        {/* <button>Search</button> */}
                    </form>
                   
                    <div className="weather_wrapper">
                    
                    <br/>
                    {
                        weather.map((eachWeather, index)=>{
                          return  <WeatherCard city={callCity} key={index} temp={eachWeather.main.temp} date={eachWeather.dt_txt} min={eachWeather.main.temp_min} max={eachWeather.main.temp_max} >
                           
                            </WeatherCard>
                        })
                    }
                    </div>
            </div>
}
export default Home