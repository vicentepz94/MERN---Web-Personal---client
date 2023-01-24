import React, { useState, useEffect } from "react";
import { Course } from "../../../../api";

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

  return (
    <div>
      <h2>Componenete ListCourses</h2>
    </div>
  );
}
