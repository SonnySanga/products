import React from "react";
import Product from "./Product";

async function getData() {
  const res = await fetch(`https://fakestoreapi.com/products/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Sidebar = async () => {
  const data = await getData();

  return (
    <div>
      <div className="px-2 space-y-2">
        <h3 className="py-6">Product Title</h3>
        {data.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            id={item.id}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
