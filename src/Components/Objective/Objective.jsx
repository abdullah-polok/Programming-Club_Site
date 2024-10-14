import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Objective = () => {
  return (
    <div data-aos="fade-left" className="mt-36">
      <div className="content-title">
        <h1 className="text-2xl md:text-2xl lg:text-4xl text-[#7c8deb]">
          Objective
        </h1>
      </div>
      <div className="mt-4">
        <div className="collapse collapse-arrow bg-base-100 mt-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-lg font-medium">
            <li className="flex items-center gap-2">
              <FaRegArrowAltCircleRight /> Promote Coding and Technical Skills
            </li>
          </div>
          <div className="collapse-content ml-5">
            <li>
              workshops to teach different programming languages and tools
            </li>
            <li>Organize coding challenges to practice and improve skills</li>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 mt-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-medium">
            <li className="flex items-center gap-2">
              <FaRegArrowAltCircleRight /> Encourage Collaboration and Teamwork
            </li>
          </div>
          <div className="collapse-content ml-5">
            <li className="justify-center">
              Promote coding and technical skills through hands-on workshops and
              coding challenges
            </li>

            <li>
              Encourage innovation and continuous learning with real-world
              projects and diverse technologies
            </li>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 mt-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-medium">
            <li className="flex items-center gap-2">
              <FaRegArrowAltCircleRight /> Build Problem-Solving and Algorithmic
              Thinking
            </li>
          </div>
          <div className="collapse-content ml-5">
            <li>
              Build problem-solving skills through coding competitions and fun
              challenges
            </li>
            <li>
              Help members think like programmers by working together on
              projects and discussing algorithms
            </li>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 mt-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-medium">
            <li className="flex items-center gap-2">
              <FaRegArrowAltCircleRight /> Foster a Growth Mindset and
              Continuous Learning
            </li>
          </div>
          <div className="collapse-content ml-5">
            <li>
              Encourage a growth mindset by celebrating progress and learning
              from mistakes
            </li>
            <li>
              Promote continuous learning through workshops, resources, and
              sharing new ideas
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
