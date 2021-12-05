import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, List, Tooltip, Typography } from "antd";
import { ChangeEvent } from "react";

type ReservationsProps = {
  index: number;
  place: Place;
  reservationToAdd: string;
  handleReservationToAddChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAddReservation: () => void;
  removeReservation: (placeIndex: number, reservationToRemove: string) => void;
};

const Reservations = ({
  index,
  place,
  reservationToAdd,
  handleAddReservation,
  handleReservationToAddChange,
  removeReservation,
}: ReservationsProps) => (
  <List
    bordered
    dataSource={place.reservations}
    locale={{ emptyText: "Aucune réservation" }}
    header={
      <div style={{ display: "flex", margin: "0px -14px" }}>
        <Input
          placeholder="Nouvelle réservation"
          value={reservationToAdd}
          onChange={handleReservationToAddChange}
          disabled={place.reservations.length === place.limit}
        />
        <Tooltip title="Ajouter">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            disabled={place.reservations.length === place.limit}
            onClick={handleAddReservation}
          />
        </Tooltip>
      </div>
    }
    renderItem={(item) => (
      <List.Item
        style={{ padding: "8px 16px" }}
        actions={[
          <CloseOutlined
            onClick={() => removeReservation(index, item)}
            style={{ color: "red", cursor: "pointer" }}
          />,
        ]}
      >
        <Typography.Text>{item}</Typography.Text>
      </List.Item>
    )}
    style={{
      maxHeight: 150,
      overflowY: "auto",
    }}
  />
);

export default Reservations;
