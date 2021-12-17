import L, { CRS } from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import {
    ImageOverlay,
    MapContainer,
    Marker,
    Popup,
    useMap
} from "react-leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const bounds = [
        [-26.5, -25],
        [1021.5, 1023],
      ] as any

const CustomMap = () => {
  const map = useMap(); 
  useEffect(() => {
    map.fitBounds(bounds);
  }, [map]);

  return <ImageOverlay url="./office.jpg" bounds={bounds} />;
};
const LeafletMap = () => (
  <>
    <MapContainer
      minZoom={0}
      maxZoom={2}
      crs={CRS.Simple}
      style={{ height: "100vh", backgroundColor: "white" }}
      maxBoundsViscosity={1.0}
      maxBounds={bounds}
    >
      <CustomMap />
      <Marker position={[500, 500]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </>
);

export default LeafletMap;
