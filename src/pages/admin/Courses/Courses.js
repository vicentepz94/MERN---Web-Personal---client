import React, { useState } from "react";
import { Tab, Button } from "semantic-ui-react";
import { BasicModal } from "../../../components/Shared";
import { ListCourses } from "../../../components/Admin/Course";
import "./Courses.scss";

export function Courses() {
  const [showModal, setShowModal] = useState(false);
  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);

  const panes = [
    {
      render: () => (
        <Tab.Pane attached={false}>
          <ListCourses />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <div className="courses-page">
        <div className="courses-page__add">
          <Button primary onClick={onOpenCloseModal}>
            Nuevo curso
          </Button>
        </div>

        <Tab menu={{ secondary: true }} panes={panes} />
      </div>
      <BasicModal show={showModal} close={onOpenCloseModal} title="Crear curso">
        <p>Formulario para crear cursos</p>
      </BasicModal>
    </>
  );
}
