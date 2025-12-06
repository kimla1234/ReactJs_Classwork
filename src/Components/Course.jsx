// Course.jsx
import React from "react";
import { CourseCard } from "./CousreCard"; // Assuming you put CourseCard in its own file

// Mock Data (move this to a separate file in a real project)
const courseData = [
  {
    id: 37,
    title: "About Me",
    developer: "Kikimo Developers",
    location: "Nairobi, Kenya",
    posted: "6 month(s) ago",
    image: "https://apis.kikimodev.com/Portfolio/Portfolio_2RGpBS00D1.png",
    tag: "#WebDevelopment",
  },
  {
    id: 36,
    title: "Smart Alert SOS",
    developer: "Kikimo Developers",
    location: "Nairobi, Kenya",
    posted: "6 month(s) ago",
    image: "https://apis.kikimodev.com/Portfolio/Portfolio_YAy5x1qwZW.png",
    tag: "#WebDevelopment",
  },
  {
    id: 34,
    title: "Sightloss Kenya Website with admin panel",
    developer: "Kikimo Developers",
    location: "Nairobi, Kenya",
    posted: "6 month(s) ago",
    image: "https://apis.kikimodev.com/Portfolio/Portfolio_rxL2KTMqyr.png",
    tag: "#WebDevelopment",
  },
  {
    id: 33,
    title: "Water Management System",
    developer: "Kikimo Developers",
    location: "Nairobi, Kenya",
    posted: "6 month(s) ago",
    image: "https://apis.kikimodev.com/Portfolio/Portfolio_TMkWwDcLvo.png",
    tag: "#WebDevelopment",
  },
];

export default function Course() {
  return (
    <div
      id="services"
      className="bg-cover w-full flex justify-center items-center"
    >
      <div className="w-full bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
        <div className="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
          <div>
            {/* Grid container using props for rendering the cards */}
            <div className="grid w-full h-full justify-items-center gap-6 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {
                // 💡 Use map() to iterate over the data and render CourseCard components
                courseData.map((course) => (
                  <CourseCard
                    key={course.id} // **Crucial:** Assign a unique key when mapping elements
                    course={course} // **Pass the course data as a prop**
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
