import { ChangeEvent, useState } from "react";

const usePlace = (
  index: number,
  addReservation: (placeIndex: number, reservationToAdd: string) => void
) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const hidePopover = () => {
    setIsPopoverVisible(false);
  };

  const handlePopoverVisibilityChange = (visibility: boolean) => {
    setIsPopoverVisible(visibility);
  };

  const [reservationToAdd, setReservationToAdd] = useState("");

  const handleReservationToAddChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setReservationToAdd(event.target.value);
  };

  const handleAddReservation = () => {
    if (reservationToAdd !== "") {
      addReservation(index, reservationToAdd);
      setReservationToAdd("");
    }
  };

  return {
    isPopoverVisible,
    hidePopover,
    handlePopoverVisibilityChange,
    reservationToAdd,
    handleReservationToAddChange,
    handleAddReservation,
  };
};

export default usePlace;
