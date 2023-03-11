import React, { useState, useEffect } from "react";
import { Tab, Button } from "semantic-ui-react";
import { BasicModal } from "../../../components/Shared";
import { ListPost, PostForm } from "../../../components/Admin/Post";
import "./Blog.scss";

export function Blog() {
  const [showModal, setShowModal] = useState(null);
  const [reload, setReload] = useState(false);

  const onOpenCloseModal = () => setShowModal((prevstate) => !prevstate);
  const onReload = () => setReload((prevstate) => !prevstate);

  const panes = [
    {
      render: () => (
        <Tab.Pane attached={false}>
          <ListPost reload={reload} />
        </Tab.Pane>
      ),
    },
  ];
  return (
    <>
      <div className="blog-page">
        <div className="blog-page__add">
          <Button primary onClick={onOpenCloseModal}>
            Nuevo post
          </Button>
        </div>
        <Tab menu={{ secondary: true }} panes={panes} />
      </div>
      <BasicModal
        show={showModal}
        close={onOpenCloseModal}
        title="Crear nuevo post"
        size="large"
      >
        <PostForm onClose={onOpenCloseModal} onReload={onReload} />
      </BasicModal>
    </>
  );
}
