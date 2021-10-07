import React from 'react';

const Hero = () => {
    return (
        <div className="container mx-auto p-6" >
        <h1 className="md:text-5xl text-4xl text-white uppercase font-light pt-60 mb-3">Good <span className="text-red-400">Business</span> Inside You</h1>
        <h1 className="md:text-5xl text-4xl text-white uppercase font-light mb-8"><span className="text-red-400">Filmy</span> Studio</h1>
        <buttonWrapper className="py-6">
            <button className="md:text-base lg:text-lg text-sm py-3 m-4 rounded-md px-10 bg-white hover:bg-red-400 hover:text-white">Buy Now</button>
            <button className="md:text-base lg:text-lg text-sm bg-red-400 text-white px-10 py-3 rounded-md hover:bg-white hover:text-black transition-all">Let's Start</button>
        </buttonWrapper>     
        </div>
    )
}
export default Hero
