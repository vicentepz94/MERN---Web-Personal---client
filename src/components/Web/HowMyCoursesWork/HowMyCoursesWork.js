import React from "react";
import { Container, Icon } from "semantic-ui-react";
import { map } from "lodash";
import { itemsData } from "./HowMyCoursesWork.data";
import "./HowMyCoursesWork.scss";

export function HowMyCoursesWork() {
  return (
    <Container className="how-my-courses-work">
      <h2>HOW MY COURSES WORK?</h2>
      <h4>
        Every course counts with multimedia content, active 24/7, 365 days of
        the year
      </h4>

      <div className="how-my-courses-work__items">
        {map(itemsData, (item, index) => (
          <div key={index}>
            <div>
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
