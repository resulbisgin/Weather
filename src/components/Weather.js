import '../style.css'
function UpperWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
const HavaDurumu=(props)=>{
    const {weather}=props
    if(!weather){
        return <p>loading</p>
    }
    return (<div className='app'>
        <div className='header'>
        <h1>Weather</h1>
        </div>
        <div className='city'>{weather.name}</div>
        <div className='desc'>{UpperWord(weather.weather.map(data=>data.description).join(", "))}</div>
        <div className='temp'>{weather.main.temp} C</div>
        <div className='date'>{new Date(weather.dt*1000).toLocaleDateString()}</div>
    </div>)
}   
export default HavaDurumu