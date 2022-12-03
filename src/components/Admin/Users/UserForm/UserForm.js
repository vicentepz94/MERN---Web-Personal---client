import React from "react";
import { Form, Image } from "semantic-ui-react";

export function UserForm(props) {
  // onReload cargara la lista de usuarios de forma instantanea al momento de agregar un nuevo usuario y
  // user es la informacion del usuario a actualizar o agregar
  const { close, onReload, user } = props;
  return (
    <Form className="user-form">
      <div className="user-form__avatar">
        <span>AVATAR</span>
      </div>

      <Form.Group widths="equal">
        <Form.Input className="firstname" placeholder="Nombre" />
        <Form.Input className="lasttname" placeholder="Apellidos" />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input className="email" placeholder="Correo electrónico" />
        <Form.Dropdown
          placeholder="Selecciona un rol"
          options={roleOptions}
          selection
        />
      </Form.Group>

      <Form.Input
        type="password"
        className="password"
        placeholder="Contraseña"
      />
      <Form.Button type="submit" primary fluid>
        {user ? "Actualizar usuario " : "Crear usuario"}
      </Form.Button>
    </Form>
  );
}
// Dropdpwn
const roleOptions = [
  {
    key: "user",
    text: "Usuario",
    value: "user",
  },
  {
    key: "admin",
    text: "Administrador",
    value: "admin",
  },
];
