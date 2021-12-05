import { useMemo, useState } from "react";
import initialPlaces from "../assets/places.json";

const useMap = () => {
  const [places, setPlaces] = useState(initialPlaces);

  const addReservation = (placeIndex: number, reservationToAdd: string) => {
    setPlaces(
      places.map((place, index) =>
        index === placeIndex
          ? {
              ...place,
              reservations: [reservationToAdd, ...place.reservations],
            }
          : place
      )
    );
  };

  const removeReservation = (
    placeIndex: number,
    reservationToRemove: string
  ) => {
    setPlaces(
      places.map((place, index) =>
        index === placeIndex
          ? {
              ...place,
              reservations: place.reservations.filter(
                (reservation) => reservation !== reservationToRemove
              ),
            }
          : place
      )
    );
  };

  const [indexWithSearchedReservation, setIndexWithSearchedReservation] =
    useState(-1);

  const searchOptions = useMemo(
    () =>
      places
        .map((place) => place.reservations)
        .flat()
        .map((reservation) => {
          return { value: reservation, label: reservation };
        }),
    [places]
  );

  const handleSearch = (value: string) => {
    setIndexWithSearchedReservation(-1);
    places.forEach((place, index) => {
      if (place.reservations.includes(value)) {
        setIndexWithSearchedReservation(index);
      }
    });
  };

  return {
    places,
    searchOptions,
    indexWithSearchedReservation,
    handleSearch,
    addReservation,
    removeReservation,
  };
};

export default useMap;
