import logo from './logo.svg';
import './App.css';
import { Map, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css' 
import { Icon } from 'leaflet';
const list = [ [23.866715, 78.782170], [24.866715, 78.782170],[30.866715, 75.782170],[25.866715, 76.782170],[24.866715, 80.782170] ]
const centerOfMap = [23.866715, 78.782170]
const name = 'Rajdeep'
const company= 'samsung'
function App() {
  return (
    <MapContainer
      center = { centerOfMap }
      zoom = {9}
      style = { {width: '100vw', height: '100vh' } }
    >
    <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=zGRI3KcdCq9XPhPRhYzK"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      {
        list.map((center) => {
          return(
            <Marker position={center}>
              <Popup>
                name: {name}
                {<br></br>}
                company: {company}
              </Popup>
          </Marker>
          )
        })
      }
    </MapContainer>

  );
}

export default App;
