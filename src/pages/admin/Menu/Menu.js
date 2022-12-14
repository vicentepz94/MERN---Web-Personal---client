import React from "react";
import { Tab, Button } from "semantic-ui-react";
import { ListMenu } from "../../../components/Admin/Menu";
import "./Menu.scss";

export function Menu() {
  const panes = [
    {
      menuItem: "Menus activos",
      render: () => (
        <Tab.Pane attached={false}>
          <ListMenu active={true} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Menus inactivos",
      render: () => (
        <Tab.Pane attached={false}>
          <ListMenu active={false} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <div className="menu-page">
        <Button className="menu-page__add" primary>
          Nuevo menu
        </Button>
        <Tab menu={{ secondary: true }} panes={panes} />
      </div>
    </>
  );
}
