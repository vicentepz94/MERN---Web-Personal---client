import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { size } from "lodash";
import { Menu } from "../../../../api";

const menuController = new Menu();

export function ListMenu(props) {
  const { active } = props;
  const [menus, setMenus] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setMenus(null);
        const response = await menuController.getMenu(active);
        setMenus(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [active]);

  if (!menus) return <Loader active inline="centered" />;
  if (size(menus) === 0) return "No hay ningún menu";

  return (
    <div>
      <h2>ListMenu</h2>
    </div>
  );
}
