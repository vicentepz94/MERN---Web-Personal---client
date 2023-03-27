import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Menu.scss";

export function Menu() {
  return (
    <div className="footer-menu">
      <h4>Navegación</h4>

      <Grid columns={2}>
        <Grid.Column>
          <Link to="#">
            <Icon name="book" /> Online courses
          </Link>

          <Link to="#">
            <Icon name="address card" /> Resume
          </Link>

          <Link to="#">
            <Icon name="suitcase" /> Portfolio
          </Link>

          <Link to="#">
            <Icon name="history" /> Cibersecurity
          </Link>
        </Grid.Column>

        <Grid.Column>
          <Link to="#">
            <Icon name="history" /> Python
          </Link>

          <Link to="#">
            <Icon name="history" /> Sleep Blog
          </Link>

          <Link to="#">
            <Icon name="history" /> Place Holder
          </Link>

          <Link to="#">
            <Icon name="history" /> Place Holder
          </Link>
        </Grid.Column>
      </Grid>
    </div>
  );
}
