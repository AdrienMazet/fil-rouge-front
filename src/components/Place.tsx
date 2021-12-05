import { Button, Popover, Typography } from "antd";
import usePlace from "../hooks/usePlace";
import getPlaceAttributes from "../utils/getPlaceAttributes";
import Reservations from "./Reservations";

type PlaceProps = {
  index: number;
  indexWithSearchedReservation: number;
  place: Place;
  addReservation: (placeIndex: number, reservationToAdd: string) => void;
  removeReservation: (placeIndex: number, reservationToRemove: string) => void;
};

const Place = ({
  index,
  indexWithSearchedReservation,
  place,
  addReservation,
  removeReservation,
}: PlaceProps) => {
  const {
    isPopoverVisible,
    hidePopover,
    handlePopoverVisibilityChange,
    reservationToAdd,
    handleReservationToAddChange,
    handleAddReservation,
  } = usePlace(index, addReservation);
  const { title, icon, backgroundColor } = getPlaceAttributes(place.type);
  return (
    <Popover
      title={title}
      trigger="click"
      visible={isPopoverVisible}
      onVisibleChange={handlePopoverVisibilityChange}
      content={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Reservations
            index={index}
            place={place}
            reservationToAdd={reservationToAdd}
            handleAddReservation={handleAddReservation}
            handleReservationToAddChange={handleReservationToAddChange}
            removeReservation={removeReservation}
          />
          <Typography.Text strong style={{ margin: "15px 0px" }}>
            Place occupées : {place.reservations.length} / {place.limit}
          </Typography.Text>
          <Button block danger onClick={hidePopover}>
            Fermer
          </Button>
        </div>
      }
    >
      <Button
        shape="circle"
        icon={icon}
        style={{
          position: "absolute",
          left: place.x,
          top: place.y,
          backgroundColor:
            indexWithSearchedReservation === -1 ||
            index === indexWithSearchedReservation
              ? backgroundColor
              : "grey",
        }}
      />
    </Popover>
  );
};

export default Place;
