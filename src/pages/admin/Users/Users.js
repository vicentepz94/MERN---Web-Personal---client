import React, { useState } from "react";
import { Tab, Button } from "semantic-ui-react";
import { BasicModal } from "../../../components/Shared";
import { UserForm } from "../../../components/Admin/Users";
import "./Users.scss";

export function Users() {
  // useState para abrir y cerrar el modal
  const [showModal, setShowModal] = useState(false);

  // Abrir y cerrar el modal (si esta abierto lo cerrara y vice versa)
  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);

  // Estructura de semantic
  const panes = [
    {
      menuItem: "Usuarios activos",
      render: () => (
        <Tab.Pane attached={false}>
          <h2>Usuarios activos</h2>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Usuarios inactivos",
      render: () => (
        <Tab.Pane attached={false}>
          <h2>Usuarios inactivos</h2>
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
        <UserForm close={onOpenCloseModal} />
      </BasicModal>
    </>
  );
}
