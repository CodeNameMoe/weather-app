import hotBg from "../src/assets/hot.jpg"
import coldBg from "../src/assets/cold.jpg"

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${coldBg})` }}>
    <div className="overlay">
      <div className="container">
        <div className="section section__inputs">
          <input type="text" name="city" placeholder="Enter City..."/>
          <button>°F </button>
        </div>
          
          <div className="section section__temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img 
              src="https://cdn.iconscout.com/icon/free/png-256/weather-296-1100758.png" alt="cloudANDsun"
              />
              <h3>Cloudy</h3>
            </div>
          <div className="temperature">
            <h1>32 °C</h1>
          </div>
          </div>

          {/* bottom description */}
        </div>
      </div>
    </div>
    
  );
}

export default App;
