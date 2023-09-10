import './index.css';
import moment from "moment";
let WeatherCard = ({ city, temp, date, min, max}) => {
    return           <div  className='weatherCard'  >
    <h1> {city}</h1>
    <h2> {temp}°C</h2>
    <h3> {min}°C -  {max}°C</h3>
    <small >{moment(date).format('dddd ha')}</small>
   
    </div>
}

export default WeatherCard