import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import Header from "./Header";
import '../css/Map.css';


class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoiZGFya2tpc2JsYWNrIiwiYSI6ImNraXg2ZHRmbDBsbnIzMG54NDB3ZTdqbTgifQ.2Y7KZCPI3rC4VW4gEpt5KQ";
    this.map = new mapboxgl.Map ({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [37.6156, 55.7522],
      zoom: 10,
    })
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
     <div>
       <Header/>
        <div className="Map-wrapper">
          <div className="Map" data-testid="map" ref={this.mapContainer}>
        </div>
        </div>
     </div>
      
    )
  }
}

export default Map;
