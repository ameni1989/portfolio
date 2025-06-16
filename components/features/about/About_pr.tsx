"use client";
import React from "react";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

function About_pr() {
  const item = dummyContent[0]; // Un seul bloc

  return (
    <div className="px-6" id="about">
      <div className="max-w-5xl mx-auto pt-20  p-5">
        <h1 className="text-4xl text-center font-bold sm:text-4xl py-2">
          {" "}
          {item.title}
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={item.image}
              alt="blog thumbnail"
              className="rounded-lg  max-h-[300px] w-[90%] h-[90%] m-3"
            />
          </div>

          {/* Texte */}
          <div className="w-full md:w-1/2">
            <div className="text-justify text-muted-foreground text-md">
              {item.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const aboutus =
  "Hi, my name is Ameni Weslati, and I’m a Full Stack Developer with solid experience in JavaScript, PHP, and Python. I’m passionate about web development and enjoy working on both the frontend and backend sides of applications.On the frontend, I build modern, responsive user interfaces using frameworks like React, Angular. On the backend, I develop robust and scalable APIs using Node.js (Express), PHP (Laravel), and Python. I also work with relational databases like MySQL, as well as NoSQL databases like MongoDB.I’m a detail-oriented, self-motivated developer who loves solving problems and constantly learning new technologies. My goal is to create clean, efficient, and user-friendly applications that meet real-world needs.";

const dummyContent = [
  {
    title: "About Me",
    description: (
      <>
        <p>{aboutus}</p>
      </>
    ),
    image: "ameni.jpeg",
  },
];

export default About_pr;
