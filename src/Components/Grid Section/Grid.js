import React from "react";

const Grid = () => {
  return (
    <>
      <div className="container mx-auto py-10 mb-12">
        <div className="heading">
          <div className="text-center justify-center">
            <h1 className="uppercase text-4xl font-bold font-body">
              Our Portfolio
            </h1>
            <p className="pt-4 text-2xl">
              <span className="text-red-400">Recent </span> Works
            </p>
          </div>
        </div>
      </div>
      <div className="grid mb-12">
        <div className="">1</div>
        <div className="">2</div>
        <div className="">3</div>
        <div className="">4</div>
        <div className="">5</div>
        <div className="">6</div>
      </div>
    </>
  );
};

export default Grid;
