import React, { useState, useEffect } from "react";
import { size, map } from "lodash";
import { Loader } from "semantic-ui-react";
import { Course } from "../../../../api";
import { CourseItem } from "../CourseItem";

const courseController = new Course();

export function ListCourses() {
  const [courses, setCourses] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await courseController.getCourses();
        setCourses(response.docs);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!courses) return <Loader active inline="centered" />;
  if (size(courses) === 0) return "No hay ningún curso";

  return (
    <div>
      {map(courses, (course) => (
        <CourseItem key={course._id} course={course} />
      ))}
      <div>{/* TO DO: Incluir paginacion */}</div>
    </div>
  );
}
