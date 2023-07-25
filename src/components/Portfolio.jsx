import React from "react";
import OrcShop from "../assets/portfolio/OrcShop.png"
import LearnCode from "../assets/portfolio/LearnCode.png"
import MovieApp from "../assets/portfolio/MovieApp.png"
import LinkedIn from "../assets/portfolio/LinkedInClone.png"
import Pronef from "../assets/portfolio/Pronef.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: OrcShop,
      href : "https://drive.google.com/file/d/1k8KzeMVCNhkNTtS62-qA-vDEL7FYfe8v/view?usp=sharing",
      download: true,
      codebase:"https://github.com/AKINYELE123/OrcShop"
    },
    {
      id: 2,
      src: LearnCode,
      href : "https://drive.google.com/file/d/1f3qcIyf1PvzggqOO437aYQqQN8ht9AUh/view?usp=sharing",
      download: true,
      codebase:"https://github.com/AKINYELE123/LearnCode"
    },
    {
      id: 3,
      src: MovieApp,
      href : "https://drive.google.com/file/d/1Q5p3eCP_36uCLwMGZuwBbsehezzQDgvV/view?usp=sharing",
      codebase:"https://github.com/AKINYELE123/JustMovies",
      download: true,
    },
    {
      id: 4,
      src: LinkedIn,
      href : "https://drive.google.com/file/d/1nKwY2Z5AWBvSJ5Wnb6Ye8PDCFKoiYZUF/view?usp=sharing",
      download: true,
      codebase:"https://github.com/AKINYELE123/LinkedIN"
    },
    {
      id: 5,
      src: Pronef,
      href : "https://drive.google.com/file/d/17r6-XXOdlXPR-MrzcVOR2tzYbyvhI6AL/view?usp=sharing",
      download: true,
      codebase:"https://github.com/AKINYELE123/LinkedIN"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, download,codebase }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                style={{ height: '400px', display: 'block', margin: 'auto' }}
              />
              <div className="flex items-center justify-center">
              <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
               <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Download Apk
                </button>
            </a>
            <a
              href={codebase}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
               <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  CodeBase
                </button>
            </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
