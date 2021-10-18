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
      <div className=" py-10 md:pt-0 w-full  grid grid-cols-4   ">
          <div className="row-span-2">
            <img
              src="/Images/joshua-hibbert-Pn6iimgM-wo-unsplash.jpg"
              className="object-cover h-full lg:h-387 xl:h-564 2xl:h-full  "
              alt="img" 
            />
          </div>
          <div className=" ">
            <img
              src="/Images/victor-furtuna-0mchrVHAYzg-unsplash.jpg"
              className="object-cover h-full "
              alt="k4@2x-img"
            />
          </div>

          <div className="">
            <img
              src="/Images/road.jpg"
              className="object-cover h-full "
              alt="k1@2sx-img"
            />
          </div>
          <div className="">
            <img
              src="/Images/samuel-ferrara-uOi3lg8fGl4-unsplash.jpg"
              className="object-cover h-full "
              alt="k1@2sx-img"
            />
          </div>
          <div className="">
            <img
              src="/Images/taj.jpg"
              className="object-cover h-full "
              alt="k1@2sx-img"
            />
          </div>
          <div className="col-span-2  ">
            <img
              src="/Images/saikat-das-UJLbMuWgq5E-unsplash.jpg"
              className="object-cover h-full "
              alt="k2-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
