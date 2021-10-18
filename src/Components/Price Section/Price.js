import React from "react";

const Price = () => {
  const PriceArray = [
    {
      id: 1,
      plan: "basic",
      price: "$19 /mo",
      data_1: "1 website",
      data_2: "1 GB Storage",
      data_3: "10 GB Bandwidth",
      data_4: "3 Month Support",
      data_5: "Unlimited Sub-domains",
      data_6: "5 Database",
      button: "Buy Now",
    },
    {
      id: 2,
      plan: "Standard",
      price: "$49 /mo",
      data_1: "5 website",
      data_2: "5 GB Storage",
      data_3: "50 GB Bandwidth",
      data_4: "6 Month Support",
      data_5: "Unlimited Sub-domains",
      data_6: "10 Database",
      button: "Buy Now",
    },
    {
      id: 3,
      plan: "Premium",
      price: "$69 /mo",
      data_1: "20 website",
      data_2: "20 GB Storage",
      data_3: "200 GB Bandwidth",
      data_4: "9 Month Support",
      data_5: "Unlimited Sub-domains",
      data_6: "50 Database",
      button: "Buy Now",
    },
    {
      id: 4,
      plan: "Professional",
      price: "$99 /mo",
      data_1: "Unlimited website",
      data_2: "100 GB Storage",
      data_3: "Unlimited GB Bandwidth",
      data_4: "1 Year Support",
      data_5: "Unlimited domains",
      data_6: "Unlimited Database",
      button: "Buy Now",
    },
  ];

  return (
    <>
      <div className="my_bg my-20 pb-10">
        <div className="container mx-auto text-center">
          <div className="heading">
            <h1 className="font-body font-bold pt-20 text-4xl uppercase">
              Pricing Table
            </h1>
            <p className="text-xl pt-2 text-red-400 font-semibold">
              Suitable Plan
            </p>
          </div>
          <div className=" card_wrapper m-4 pt-10">
            <div className="w-full justify-between flex flex-col lg:flex-row">
              {PriceArray.map((item, i) => {
                console.log(item);
                return (
                  <div className="card bg-white text-center mt-20 m-2">
                    <div key={i} className="content bg-black py-2 ">
                      <p className="text-white font-medium text-xl">
                        {item.plan}
                      </p>
                    </div>
                    <h1 className="rounded-full mt-4 border-2 border-black text-2xl md:mx-12 mx-16 p-4 font-extralight mb-4">
                      {item.price}
                    </h1>
                    <h1 className="mb-6 font-bold mx-12">{item.data_1}</h1>
                    <h1 className="mb-6 font-bold mx-12">{item.data_2}</h1>
                    <h1 className="mb-6 font-bold mx-12">{item.data_3}</h1>
                    <h1 className="mb-6 font-bold mx-12">{item.data_4}</h1>
                    <h1 className="mb-6 font-bold mx-12">{item.data_5}</h1>
                    <h1 className="mb-6 font-bold mx-12">{item.data_6}</h1>
                    <div className="bg-black">
                      <h1 className="text-white py-2">{item.button}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
