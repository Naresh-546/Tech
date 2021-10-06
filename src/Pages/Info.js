import React from "react";

const Info = () => {
  return (
    <div className="flex my_background">
      <div className="container mx-auto py-20 px-14">
        <div className="flex wrapper">
          <div className="content px-28 text-center">
            <h1 className="text-4xl text-white font-semibold">402</h1>
            <p className="text-lg text-white font-extralight">Completed Projects</p>
          </div>
          <div className="content px-28 text-center">
            <h1 className="text-4xl text-white font-semibold">100</h1>
            <p className="text-lg text-white font-extralight">Happy Clients</p>
          </div>
          <div className="content px-28 text-center">
            <h1 className="text-4xl text-white font-semibold">501</h1>
            <p className="text-lg text-white font-extralight">Working hours</p>
          </div>
          <div className="content px-28 text-center">
            <h1 className="text-4xl text-white font-semibold">300</h1>
            <p className="text-lg text-white font-extralight">Cups Of Coffee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
