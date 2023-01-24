import React, { useState } from "react";
import { Tab, Button } from "semantic-ui-react";
import { BasicModal } from "../../../components/Shared";
import "./Courses.scss";

export function Courses() {
  const [showModal, setShowModal] = useState(false);
  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  return (
    <>
      <div className="courses-page">
        <div className="courses-page__add">
          <Button primary onClick={onOpenCloseModal}>
            Nuevo curso
          </Button>
        </div>
        <Tab.Pane attached={false}>
          <p>Lista de cursos</p>
        </Tab.Pane>
      </div>
      <BasicModal show={showModal} close={onOpenCloseModal} title="Crear curs">
        <p>Formulario para crear cursos</p>
      </BasicModal>
    </>
  );
}
