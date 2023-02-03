import React, { useCallback } from "react";
import "./CourseForm.scss";
import { Form, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";

export function CourseForm() {
  const onDrop = useCallback((acceptedFiles) => {
    const files = acceptedFiles[0];
    console.log(files);
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop,
  });

  const getMiniature = () => {
    return null;
  };
  return (
    <Form className="course-form">
      <div className="course-form__miniature" {...getRootProps()}>
        <input {...getInputProps()} />
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
