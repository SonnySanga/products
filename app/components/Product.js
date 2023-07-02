import Link from "next/link";
import React from "react";
import Category from "../category/page";

const Product = ({ title, id }) => {
  return (
    <>
      <div className="border-gray-400 shadow-md border-[1px] z-30">
        <div className="flex flex-col justify-center p-4 bg-white">
          <Link className="text-blue-800 cursor-pointer" href={`/${id}`}>
            <h2>
              {id}
              {title}
            </h2>
          </Link>
          <hr className="border-1 mt-2 border-gray-300 " />
        </div>
      </div>
    </>
  );
};

export default Product;
