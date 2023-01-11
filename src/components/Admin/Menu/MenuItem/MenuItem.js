import React, { useState } from "react";
import { Icon, Confirm, Button } from "semantic-ui-react";
import { BasicModal } from "../../../Shared";
import { MenuForm } from "../MenuForm";
import "./MenuItem.scss";

export function MenuItem(props) {
  const { menu, onReload } = props;

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);

  const openUpdateMenu = () => {
    setTitleModal(`Actualizar menu : ${menu.title}`);
    onOpenCloseModal();
  };

  return (
    <>
      <div className="menu-item">
        <div className="menu-item__info">
          <span className="menu-item__info-title">{menu.title}</span>
          <span className="menu-item__info-path">{menu.path}</span>
        </div>
        <div>
          <Button icon primary onClick={openUpdateMenu}>
            <Icon name="pencil" />
          </Button>
          <Button icon color={menu.active ? "orange" : "teal"}>
            <Icon name={menu.active ? "ban" : "check"} />
          </Button>
          <Button icon color="red">
            <Icon name="trash" />
          </Button>
        </div>
      </div>
      <BasicModal show={showModal} close={onOpenCloseModal} title={titleModal}>
        <MenuForm onClose={onOpenCloseModal} onReload={onReload} menu={menu} />
      </BasicModal>
    </>
  );
}
