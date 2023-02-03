import React from "react";
import "./CourseForm.scss";
import { Form, Image } from "semantic-ui-react";

export function CourseForm() {
  const getMiniature = () => {
    return null;
  };
  return (
    <Form className="course-form">
      <div className="course-form__miniature">
        {getMiniature() ? (
          <Image size="small" src={getMiniature()} />
        ) : (
          <div>
            <span>Arrastra tu miniatura</span>
          </div>
        )}
      </div>
      <Form.Input name="title" placeholder="Nombre del curso" />
      <Form.Input name="url" placeholder="Link del curso" />
      <Form.TextArea
        name="description"
        placeholder="Pequeña descripcion del curso"
      />
      <Form.Group widths="equal">
        <Form.Input type="number" name="price" placeholder="Precio del curso" />
        <Form.Input
          type="number"
          name="score"
          placeholder="Puntuación del curso"
        />
      </Form.Group>
      <Form.Button type="submit" primary fluid>
        Crear curso
      </Form.Button>
    </Form>
  );
}
