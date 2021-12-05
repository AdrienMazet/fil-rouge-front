import { AutoComplete, Input } from "antd";
import office from "../assets/office.jpg";
import useMap from "../hooks/useMap";
import Place from "./Place";

const Map = () => {
  const {
    places,
    searchOptions,
    indexWithSearchedReservation,
    handleSearch,
    addReservation,
    removeReservation,
  } = useMap();
  return (
    <>
      <img
        alt="office"
        src={office}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      />
      {places.map((place, index) => (
        <Place
          key={index}
          index={index}
          place={place}
          addReservation={addReservation}
          removeReservation={removeReservation}
          indexWithSearchedReservation={indexWithSearchedReservation}
        />
      ))}
      <AutoComplete
        options={searchOptions}
        onChange={handleSearch}
        filterOption={(inputValue, option) =>
          option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        style={{ position: "absolute", right: "5%", top: "5%" }}
      >
        <Input.Search
          enterButton
          size="large"
          placeholder="Chercher une réservation"
        />
      </AutoComplete>
    </>
  );
};

export default Map;
