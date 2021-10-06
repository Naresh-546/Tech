import React from "react";
// import {FaDropbox} from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <div className="container mx-auto py-5">
        <div className="text-center pt-12">
          <h1 className="font-body text-3xl font-semibold">WHO WE ARE</h1>
          <p className="pt-2 text-xl font-medium">
            <span className="text-red-400">Filmy </span> Studio
          </p>
        </div>
        <div className="flex pt-4 mb-4">
          <div className="flex card_wrapper text-center w-full">
            <div className="card pt-10 bg-gray-200 rounded-2xl m-5">
              <img
                className="inline"
                src="https://img.icons8.com/wired/90/000000/quill-with-ink.png"
                alt="ink"
              />
              <h1 className="font-body text-3xl p-5">Graphic Design</h1>
              <p className="font-thin text-gray-400 pb-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                quae? Alias ducimus deserunt harum quam minus, quaerat aut
                accusamus veniam!
              </p>
            </div>
            <div className="card pt-10 bg-gray-200 m-5 rounded-2xl">
              <img
                className="inline"
                src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/90/000000/external-web-development-coding-kiranshastry-lineal-kiranshastry.png"
                alt="ink"
              />
              <h1 className="font-body text-3xl p-5 text-red-400">
                Development
              </h1>
              <p className="font-thin text-gray-400 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                quae? Alias ducimus deserunt harum quam minus, quaerat aut
                accusamus veniam!
              </p>
            </div>
            <div className="card pt-10 bg-gray-200 rounded-2xl m-5">
              <img
                className="inline"
                src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-marketing-marketing-and-growth-justicon-lineal-color-justicon.png"
                alt="ink"
              />
              <h1 className="font-body text-3xl p-5">Marketing</h1>
              <p className="font-thin text-gray-400 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                quae? Alias ducimus deserunt harum quam minus, quaerat aut
                accusamus veniam!
              </p>
            </div>
          </div>
        </div>
      </div>

      {
        // New Sub-section
      }

      <div className="my_bg flex justify-around w-full pb-12">
        <div className="w-1/2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Norco_Range.jpg"
            className="aboutImg"
            alt="aboutImg"
          />
          <p className="text-center text-3xl">
            <span className="text-red-400">Filmy Studio </span>is creative and{" "}
            <br />
            Professional for <span className="text-red-400">Actors </span>
          </p>
        </div>
        <div className="w-1/2 pt-20">
          <h1 className="text-4xl text-red-400 mb-4">About Filmy Studio</h1>
          <p className="text-gray-500 text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            asperiores voluptates <br /> beatae incidunt et similique.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            dolor!
          </p>
          <p className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            cumque provident. Soluta iusto,<br /> aliquam perferendis quos velit illo
            voluptatibus amet repellat, earum temporibus,<br /> explicabo
            reprehenderit facere accusantium harum non in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
