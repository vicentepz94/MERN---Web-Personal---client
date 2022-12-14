import React, { useState } from "react";
import { Tab, Button } from "semantic-ui-react";
import { BasicModal } from "../../../components/Shared";
import { UserForm, ListUsers } from "../../../components/Admin/Users";

import "./Users.scss";

export function Users() {
  // useState para abrir y cerrar el modal
  const [showModal, setShowModal] = useState(false);

  const [reload, setReload] = useState(false);

  // Abrir y cerrar el modal (si esta abierto lo cerrara y vice versa)
  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);

  const onReload = () => setReload((prevState) => !prevState);

  // Estructura de semantic
  const panes = [
    {
      menuItem: "Usuarios activos",
      render: () => (
        <Tab.Pane attached={false}>
          <ListUsers activeUsers={true} reload={reload} onReload={onReload} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Usuarios inactivos",
      render: () => (
        <Tab.Pane attached={false}>
          <ListUsers activeUsers={false} reload={reload} onReload={onReload} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <div className="users-page">
        <Button className="users-page__add" primary onClick={onOpenCloseModal}>
          Nuevo usuario
        </Button>
        <Tab menu={{ secondary: true }} panes={panes} />
      </div>

      <BasicModal
        show={showModal}
        close={onOpenCloseModal}
        title="Crear nuevo usuario"
      >
        <UserForm close={onOpenCloseModal} onReload={onReload} />
      </BasicModal>
    </>
  );
}
