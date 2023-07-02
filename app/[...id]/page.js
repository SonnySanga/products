import React from "react";

async function getData() {
  const res = await fetch(`https://fakestoreapi.com/products/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SignleItems = async ({ params }) => {
  const data = await getData();
  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <h2>
          {item.id == params.id && (
            <div className="max-w-6xl mx-auto py-10">
              <div>
                <h2 className="p-6 border-gray-200 border-[2px]">
                  {item.id} {item.title}
                </h2>
                <div className=" p-6 border-gray-200 border-[2px] w-full h-full flex items-center justify-center">
                  <img className="h-96 w-96" src={item.image} alt="" />
                </div>
                <h2 className="p-6 border-gray-200 border-[2px]">
                  {item.description}
                </h2>
                <h2 className="p-6 border-gray-200 border-[2px]">
                  {item.category}
                </h2>
                <h2 className="p-6 border-gray-200 border-[2px]">
                  {item.rating.rate} {item.rating.count}
                </h2>
                <h2 className="p-6 border-gray-200 border-[2px]">
                  {item.price}
                </h2>
              </div>
            </div>
          )}
        </h2>
      ))}
    </div>
  );
};

export default SignleItems;
