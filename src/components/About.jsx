import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
       My Name is Akinyele David Boluwatife. I has over two years of professional experience as a React Native Developer, during which I have consistently demonstrated my expertise and passion for creating high-quality mobile applications. My proficiency in React Native, coupled with his strong problem-solving abilities, has allowed me to deliver exceptional results on various projects throughout my career.
        </p>

        <br />

        <p className="text-xl">
        Throughout my previous roles, I have been responsible for the development and maintenance of robust React Native applications. I have a deep understanding of the React Native ecosystem, including Redux, React Navigation, and other related libraries. With my keen eye for detail and commitment to code quality, I have successfully delivered applications that are not only visually appealing but also highly performant and user-friendly.
        </p>
      </div>
    </div>
  );
};

export default About;
