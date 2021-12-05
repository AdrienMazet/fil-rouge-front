import {
  CoffeeOutlined,
  DesktopOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons";

const getPlaceAttributes = (placeType: string) => {
  switch (placeType) {
    case "BREAK":
      return {
        title: "Salle de pause",
        icon: <CoffeeOutlined style={{ color: "white" }} />,
        backgroundColor: "orange",
      };
    case "MEETING":
      return {
        title: "Salle de réunion",
        icon: <TeamOutlined style={{ color: "white" }} />,
        backgroundColor: "purple",
      };
    case "MANAGER":
      return {
        title: "Bureau manager",
        icon: <UserOutlined style={{ color: "white" }} />,
        backgroundColor: "blue",
      };
    default:
      return {
        title: "Poste de travail",
        icon: <DesktopOutlined style={{ color: "white" }} />,
        backgroundColor: "green",
      };
  }
};

export default getPlaceAttributes;
