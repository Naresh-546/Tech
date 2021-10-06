import React from "react";

const Navbar = ()=>{
  return (
  <div className="mb-4 bg-fixed {*/bg-current opacity-40*/}">
    <div className="container flex mx-auto px-6 text-center py-5">
      <div className="brand_name">
        <h1 className="text-white font-medium text-2xl">
          <span className="bg-red-400 px-2">FILMY</span>  Studio
        </h1>
      </div>
      <div className="md:flex hidden visible ml-auto">
        <ul className="text-white cursor-pointer px-3">Home</ul>
        <ul className="text-white cursor-pointer px-3">About</ul>
        <ul className="text-white cursor-pointer px-3">Portfolio</ul>
        <ul className="text-white cursor-pointer px-3">Our Blogs</ul>
        <ul className="text-white cursor-pointer px-3">Services</ul>
        <ul className="text-white cursor-pointer px-3">Contact Us</ul>
      </div>
    </div>
    </div>
  );
}
export default Navbar;
