import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { size, map } from "lodash";
import { User } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { UserItem } from "../UserItem";

const userController = new User();

export function ListUsers(props) {
  const { activeUsers, reload } = props;
  const [users, setUsers] = useState(null);
  const { accessToken } = useAuth();

  //console.log(users);

  useEffect(() => {
    (async () => {
      try {
        setUsers(null);

        const response = await userController.getUsers(
          accessToken,
          activeUsers
        );
        setUsers(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [activeUsers, reload]);

  if (!users) return <Loader active inline="centered" />;
  if (size(users) === 0) return "No hay ningún usuario.";

  return map(users, (user) => <UserItem key={user._id} user={user} />);
}
