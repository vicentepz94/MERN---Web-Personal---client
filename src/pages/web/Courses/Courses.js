import React, { useEffect, useState } from "react";
import { Container, Image, Button } from "semantic-ui-react";
import { map } from "lodash";
import { image } from "../../../assets";
import { Course as CourseController } from "../../../api";
import { Course } from "../../../components/Web/Courses";
import "./Courses.scss";

const courseController = new CourseController();

export function Courses() {
  const [courses, setCourses] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const isCurrentLastPage = pagination?.page === pagination?.pages;

  useEffect(() => {
    (async () => {
      try {
        const response = await courseController.getCourses({ page, limit: 3 });
        setPagination({
          page: response.page,
          pages: response.pages,
        });

        if (!courses) setCourses(response.docs);
        else setCourses([...courses, ...response.docs]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page]);

  const loadMore = () => {
    setPage((prevstate) => prevstate + 1);
  };

  return (
    <Container className="courses-page">
      <Image src={image.academyLogo} />
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </h2>
      <div className="courses">
        {map(courses, (course) => (
          <div key={course._id} className="courses__item">
            <Course course={course} />
          </div>
        ))}
      </div>

      {!isCurrentLastPage && (
        <div className="more">
          <Button primary onClick={loadMore}>
            Cargar mas...
          </Button>
        </div>
      )}
    </Container>
  );
}
