// CourseCard.jsx
import React from "react";

// Destructure the 'course' object from the props
export function CourseCard({ course }) {
  const { id, title, developer, location, posted, image, tag } = course;

  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-3xl p-4 border border-gray-100">
        <div className="flex-none lg:flex">
          <div className="h-full w-full lg:h-full lg:w-full lg:mb-0 mb-3">
            <img
              src={image}
              alt={title}
              className="w-full object-cover lg:h-full rounded-2xl"
            />
          </div>
          <div className="flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-wrap">
              <div className="w-full flex-none text-xs text-blue-700 font-medium">
                {developer}
              </div>
              <h3 className="flex-auto text-lg font-medium">{title}</h3>
            </div>
            <div className="flex py-4 text-sm text-gray-500">
              <div className="flex-1 inline-flex items-center">
                {/* Location SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p>{location}</p>
              </div>
              <div className="flex-1 inline-flex items-center">
                {/* Time SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p>{posted}</p>
              </div>
            </div>
            <div className="flex space-x-3 text-sm font-medium">
              <a
                className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100"
                href={`/work/${id}`}
              >
                <span>{tag}</span>
              </a>
              <button className="mb-2 md:mb-0 bg-red-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
